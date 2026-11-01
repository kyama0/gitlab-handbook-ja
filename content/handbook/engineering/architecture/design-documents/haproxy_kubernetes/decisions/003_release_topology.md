---
owning-stage: "~group::Networking & Incident Management"
title: 'Kubernetes 上の HAProxy ADR 003：リリース構成'
description: "Kubernetes 上に存在する HAProxy のリリース、各リリースのサイズ設定、実行するクラスターとノードプール。"
toc_hide: true
upstream_path: /handbook/engineering/architecture/design-documents/haproxy_kubernetes/decisions/003_release_topology/
upstream_sha: 52419353ea755a1ac823553385f8636ff2fcde17
lastmod: "2026-10-29T16:51:18Z"
translated_at: "2026-11-01T18:20:37+00:00"
translator: codex
stale: false
---

## 状況 {#status}

承認済み、進行中。

## ステークホルダー {#stakeholders}

- Networking and Incident Management：分割と HPA の設定
- Fleet Management：統合クラスターのノードプールと、リリースに必要なクラスターの機能
- Delivery、特に release managers：カナリアのバックエンド、重み、`/chatops gitlab run canary` が Pod 上でも同じように動作すること
- Environments（kas）：独立した kas リリースと 30 分の猶予期間

## 背景 {#context}

各 `haproxy-main` VM は、すべてのフロントエンドを処理する 1 つの HAProxy プロセスを実行します。web、api、git-https のバックエンドには 80 と 443、ssh には 22、kas には 8150、ネットワーク内部のクライアントには 11443 を使用します。フロントエンドには、次の 3 つの違いがあります：

- クライアント：Cloudflare、runner managers、Gitaly、ジョブルーター。
- 負荷：TLS 終端は CPU に制約され、ssh パススルーと kas トンネルは接続数に制約されます。
- リロードの許容度：kas トンネルは最長 2 時間継続し、リロード後 `hard-stop-after 30m` を超えた古いプロセスに残るトンネルは切断されます。

すでに 2 つのフロントエンドが独自の経路を持っています：

- 11443 の内部ゲートウェイには独自の内部ロードバランサーがあり、Gitaly から Rails への API コールバックを処理します。プロセスは公開の 443 と共有しています。
- 8989 の ci-gateway には、ci-gateway ネットワーク内に独自の VM があります。クックブックでは、`haproxy-ci` は `ci-gateway.enabled` を有効にし、オリジンプル検証を無効にした `main` フレーバーです。

## 決定 {#decision}

プロトコルグループとアドレスごとに 1 つのリリースを作成します。各リリースには独自の `LoadBalancer` Service、ゾーンごとの Deployment（[ADR 004](004_zone_locality.md)）、30 分の終了猶予期間を設定します。環境ごとに 8 つのリリースになります。

| リリース | ポート | PROXY プロトコル | 負荷 |
|---|---|---|---|
| `main-http` | 80、443 | なし | TLS、CPU に制約される |
| `main-ssh` | 22（altssh は 22 に転送） | Spectrum | TCP パススルー、接続数に制約される |
| `main-kas` | 8150 | Spectrum | 長時間継続するトンネル、接続数に制約される |
| `main-internal-http` | 80、443、11443、内部 LB | なし | TLS、CPU に制約される |
| `main-internal-kas` | 8150、内部 LB | なし | 長時間継続するトンネル、接続数に制約される |
| `registry` | 80、443 | なし | TLS、CPU に制約される |
| `pages` | 80、443 | なし | 443 の TCP パススルー、接続数に制約される |
| `ci` | 8989、ci-gateway ネットワーク内の内部 LB | なし | TLS、CPU に制約される |

### スケーリング {#scaling}

各ゾーンの Deployment は、CPU を指標とする HPA を持ちます。メモリは指標にしません。設定に `no-memory-trimming` があるため、接続数が数万になっても `malloc_trim` がプロセスを停止させず、その結果、RSS は接続数に追従せずピーク時の値で横ばいになります。接続数に制約されるリリースで CPU が負荷に追従しないとわかった場合は、次のステップとして KEDA を通じたセッション数のメトリクスを使用します（代替案を参照）。スケールダウンは緩やかに行います。15 分の安定化ウィンドウを設け、その後 5 分ごとに最大 10% の Pod を減らします。

`gprd` のピークは毎秒約 165,000 件の HTTPS リクエストで、そのとき 60 台の `main` VM の平均 CPU 使用率は 94%、使用中のコア数は約 450 です。Pod は `nbthread 4`、CPU リクエストは 3.4 とし、DaemonSet とともに `n4d-standard-8` ノード 1 台に 2 つの Pod を配置できます。マシンサイズを大きくして、より多くの Pod を配置することもできます。

HPA の最小値と最大値はリリースごとに設定します。gprd では、最大値とノードプールの最大値を VM の処理容量より大きく設定します。

`main-http` のトラフィックの割合は、http-router フィーチャーフラグのロールアウト率であり、段階的に増加します。最小値もそれに合わせて増やし、余裕を持たせるため 2 倍にします：

```plaintext
min(VM capacity × rollout percentage × 2, VM capacity)
```

その他のリリースには段階的なステップがありません。Spectrum のオリジンリストと DNS レコードは 1 ステップで 0 から 50% に、pages と registry のアドレス引き継ぎは 0 から 100% に移行します。最小値は切り替えの直前に VM の処理容量全体に相当する値に設定します。それまでは、VM と比較して確認するのに十分な、ゾーンごとに 1 つの Pod で稼働させます。

Pod が数週間にわたって本番トラフィックを処理した後、観測した利用率に基づいて最小値を段階的に下げます。

### クラスター {#cluster}

Pod は、クラスター統合（[production-engineering#29065](https://gitlab.com/gitlab-com/gl-infra/production-engineering/-/work_items/29065)）で作成した新しいリージョンクラスターで実行します。`gstg` では `gitlab-36dv2`、`gprd` では `gitlab-3okls` です。既存のリージョンクラスターはレガシーデータプレーンを使用しており、GKE は既存のクラスターをそのまま Dataplane V2 に切り替えられないため、統合では新しいクラスターを作成しました。

GKE クラスターの要件：

- **Standard モード**：専用ノードプール、Pod の sysctl、ノードローカルの Consul クライアント
- **Dataplane V2**、**GKE 1.36 以降**、**L4 ILB サブセット化**：マルチネットワークの `LoadBalancer` Service（ADR 007）
- pages と registry のアドレス引き継ぎ（[ADR 001](001_traffic_cutover.md)）中は、**Service で `externalIPs` を許可**し、引き継ぎ完了後に再び禁止します

### ノードプール {#node-pools}

- ゾーンごとに 1 つの専用ノードプールを設け、他の専用プールと同じように taint とラベルを設定します。Pod がノードを必要とする前にすべてのゾーンにノードが存在するよう、最小ノード数は 1 とします。特定のゾーンに固定した Deployment の保留中の Pod がある場合、クラスターオートスケーラーがそのゾーンにノードを追加できるのは、プールがゾーン単位の場合だけです。
- GCP の在庫不足により、一部のゾーンでノードが不足することがあります。ゾーンごとに HAProxy Pod 2 つ分のサイズの GKE `CapacityBuffer` を設け、デプロイのサージ Pod に十分な余裕を確保します。
- プールの最大値は、そのゾーンのすべてのリリースの HPA 最大値にバッファーを加えた分を賄う必要があります。
- マシンタイプは `n4d-standard-8` です。これは VM の T2D より 2 世代新しく、T2D は段階的に廃止されており、確約利用割引もクォータの余裕もありません。
- n4d は us-east1 で何度も不足しており、ゾーンに固定した Deployment は他の場所ではスケールできません。各プールには、同じ taint とラベルを持つ `n4-standard-8` のフォールバックプールを設け、必要になるまでノード数をゼロにします。プールは `haproxy-n4-1` と `haproxy-ci-n4-1` です。クラスターのデフォルトの ComputeClass は n4 より n4d を優先します。フォールバックは n4d が不足している場合にのみ使用します。
- マシンタイプはプールごとに固定します。`gprd` に別のタイプが必要な場合は、既存のプールに加えて、そのタイプのプールを追加します。
- プールはクラスターの Pod アドレス範囲を使用します。HAProxy プール専用のセカンダリ範囲を設けると、バックエンドの許可リストで、クラスターの Pod 用 /16 ではなく、HAProxy Pod のみを含む範囲を指定できます。この範囲はプールで変更できません。これは実施しません。バックエンドの許可リストではクラスターの範囲を指定し、クラスターを移動する際はその作業を繰り返します（[ADR 001](001_traffic_cutover.md)）。`ci` Pod には、`ci-gateway` サブネットの Pod アドレス範囲に 2 つ目のアドレスがあります（ADR 007）。
- Pod には CPU リクエストを設定し、CPU 制限は設定しません。HAProxy のスレッドはノードの空いているコアを使用できます。
- PodDisruptionBudget は `maxUnavailable: 1` とします。これにより、Pod が 1 つのゾーンでも、ノードのドレイン時にその Pod を退避できます。`minAvailable: 1` は未決です。

## 影響 {#consequences}

- VM では 1 つのプロセスですべてのフロントエンドを処理していましたが、各リリースを互いに分離します。あるリリースの設定変更、ロールアウト、トラフィックの急増、スケールダウンは、他のリリースに影響しません。kas Pod は自身の変更時にのみ入れ替え、ドレイン中のプロセスのトンネルを 30 分で打ち切る動作は変えません。ssh は独自の最小レプリカ数を持ち、これがプロセスごとのセッションレート制限の実効値も決定します。
- `main-internal-http` は、内部ロードバランサーの背後に配置する、オリジンプル検証を無効にした `main` 設定です。トラフィックがあるのは 11443 のみです。`main-http` は 11443 のバインドを持たず、Cloudflare のトラフィックのみを処理します。
- `main-internal-kas` は、Private Service Connect を経由するジョブルーターの Relay 経路用に、PROXY プロトコルを使用せず内部アドレスで稼働させる kas です。PSC サービスアタッチメントは、両方の環境で引き続き VM 群の内部ロードバランサーを指しています。移動は独立した切り替えステップです（[ADR 001](001_traffic_cutover.md)）。アタッチメントがリリースの転送ルールを指すようになると、これは存続する GKE オブジェクトへの Terraform 参照となるため、Service を安易に再作成しません。
- `ci` は `https_git_ci_gateway` フロントエンドだけで構成し、api、git-https、canary、packhorse のバックエンドと ci-gateway 証明書を使用します。VM 群のロードバランサーがこれらのホストに転送していたのは、常に 8989 だけでした。レンダリングされる `main` 設定の残りの部分にはトラフィックがないため、省略します。`ci` は ci-gateway ネットワーク内にあるため、独自のリリースとします（ADR 007）。
- ポートごとの切り替え（[ADR 001](001_traffic_cutover.md)）はリリースに対応します。各プロトコルグループには独自のアドレスがあり、Spectrum のオリジン切り替えはポート単位です。
- クックブックはすでに各フロントエンドを独自のテンプレートからレンダリングしているため、分割は既存の設定の境界に従います。
- `main` の Service とアドレスは 1 つから 5 つになり、VM ごとに 1 つのプロセスを実行する構成から、環境ごとに 24 の Deployment を実行する構成になります。kas のバックエンドは 1 つのリージョン ILB だけで、3 つの Deployment は同じサーバー一覧をレンダリングします。それでもゾーンごとのパターンに従い、すべてのリリースでドレインとスケーリングを同じ方法で行います。

## 検討した代替案 {#alternatives-considered}

### VM と同じく Pod ごとに 1 つのプロセスを実行する {#one-process-per-pod-as-on-the-vms}

そのまま移植する方式です。VM 群ごとに 1 つのリリース、ゾーンごとに 1 つの Deployment を設け、すべてのフロントエンドを 1 つのプロセスで実行します。オブジェクト数が少なく、現在の実行構成に最も近い方式です。フロントエンドのリロードの許容度とスケーリングの指標が大きく異なるため、1 つの HPA と 1 つのロールアウトスケジュールではどれにも十分対応できず、さらに Gitaly の書き込み経路が公開の 443 と同じプロセス内に置かれるため、却下しました。

### kas を 1 つのリージョン Deployment にする {#kas-as-one-regional-deployment}

kas のバックエンドは 1 つのリージョン ILB です。維持すべきゾーンの順序はなく、`topologySpreadConstraints` を持つ 1 つの Deployment で対応できます。他のすべてのリリースはゾーンごとであり、ドレインとスケーリングの方法が異なるリリースが 1 つあると、インシデント中に把握すべきことが増えるため、却下しました。

### リリースの前段に Ingress または Gateway を置く {#an-ingress-or-gateway-in-front-of-the-releases}

ホスト名とポートごとのルートを持つ 1 つの Gateway を置き、リリースをそのバックエンドにする方式です。HAProxy がすでに行っているルーティングのために HAProxy の前にプロキシのホップが増え、TCP フロントエンドには、両方のホップで PROXY プロトコルを通す `TCPRoute` が必要になるため、却下しました。リリースごとに `LoadBalancer` Service を設ければ、そのホップなしで同じ L4 ロードバランサーを使用できます。

### ロードバランサー専用のクラスターを設ける {#a-dedicated-load-balancer-cluster}

ロードバランサーに独自のクラスターを設けると、Pod と、その Pod を実行するクラスターの ILB 間の循環依存をなくせます。この循環依存は、統合によって canary と kas が同じクラスターに移動すると発生します。専用ノードプールですでに Pod をノード障害、プールのアップグレード、他のワークロードから分離しているため、却下しました。別のクラスターを設けても、追加で分離できるのはコントロールプレーンとクラスターネットワークだけです。保護できるのはゾーンクラスターのバックエンドへの経路だけで、そのインシデントではどちらの場合も canary と kas は停止します。また、VM 群を統合している間に、運用とアップグレードが必要なクラスターが 1 つ増えます。

### 最初からカスタムメトリクスを使用する {#custom-metrics-from-the-start}

接続数に制約されるリリースに対して、`haproxy_frontend_current_sessions` を指標とする KEDA スケーラーを使用する方式です。クラスターではすでに KEDA が稼働しています。`gprd` で CPU では不十分だと判明する前に、スケーリング経路にメトリクスへの依存を追加することになるため、却下しました。不十分だと判明した場合は、KEDA が次のステップです。
