---
title: 'GitLab Secrets Manager ADR 015: ローカルサイドカーを介した監査イベントの中継'
description: 'ADR-011 の改訂: OpenBao は、リクエストの処理経路で Rails に POST する代わりに、イベントをバッファーに保存して GitLab Rails への配信を再試行するローカルの中継サイドカーに監査イベントを送信します。'
owning-stage: "~devops::security platform"
toc_hide: true
upstream_path: /handbook/engineering/architecture/design-documents/secret_manager/decisions/015_audit_relay/
upstream_sha: 1d017e2417c7510ed270a22e03f038e968fdb679
lastmod: "2026-10-21T06:16:14+02:00"
translated_at: "2026-10-21T21:04:44Z"
translator: codex
stale: false

---

## 背景 {#context}

[ADR-011](011_http_audit.md)で `http` 監査デバイスを導入しました。OpenBao は各監査エントリを Rails の内部 API（`/api/v4/internal/secrets_manager/audit_logs`）に POST します。Rails はそのエントリを GitLab の監査イベントと使用状況の追跡イベントに変換します。

OpenBao は監査エントリを同期的に書き込みます。リクエストのエントリは操作の実行前に、レスポンスのエントリはレスポンスの送信前に書き込みます。その結果、すべての OpenBao リクエストが、これらの POST に対する Rails の応答を待ちます。OpenBao がリクエストの処理に費やす時間の大部分は Rails の待機時間であり、POST が遅いと、操作の種類にかかわらず OpenBao のリクエストも遅くなります（[gitlab-org/gitlab#602179](https://gitlab.com/gitlab-org/gitlab/-/work_items/602179)）。そのため、Rails の応答時間に依存するレイテンシ目標を OpenBao が達成することは困難です。

例として、2026 年 10 月に取得した GitLab.com のリクエストのサンプルを示します（[gitlab-org/gitlab#633021](https://gitlab.com/gitlab-org/gitlab/-/work_items/633021)）。

- OpenBao 自体の処理時間は約 12 ms だったのに対し、監査にはリクエストあたり約 218 ms（リクエストエントリに約 102 ms、レスポンスエントリに約 116 ms）かかりました。
- Runner によるシークレットの読み取りでは、ログインと読み取りが別々のリクエストであるため、4 つの監査エントリを送信します。各エントリはそれぞれの POST を待機し、待機時間は設定された `request_timeout`（GitLab.com では 5 秒）に達する場合があります。

Rails を高速化しても、このコストはなくなりません。エンドポイントはすでに Sidekiq ジョブをキューに入れる処理しか行っていないため、正常な POST でも、監査エントリごとに Rails との往復が追加されます。

配信の信頼性も、ADR-011 の想定より低い状態です。OpenBao は、*すべての*監査デバイスが失敗した場合にのみリクエストを失敗させます。`stdout` デバイスが設定されていると、Rails への POST がタイムアウトした場合、そのイベントは Rails に届かず失われますが、リクエストは成功します。Secrets Manager の監査イベントには SLO がなく、[監査中継の設計 Issue](https://gitlab.com/gitlab-org/gitlab/-/work_items/602503)で合意したとおり、現時点ではベストエフォートの配信を許容します。

POST をリクエストの処理経路から外すための選択肢を、[gitlab-org/gitlab#602503](https://gitlab.com/gitlab-org/gitlab/-/work_items/602503)で評価しました。制約は次のとおりです。

- GitLab.com は Runway 上で OpenBao を実行します。サイドカーはサポートされていますが、永続ボリューム、`StatefulSet`、Cloud Run はありません。
- Self-Managed のインストールでは、任意の Kubernetes クラスター上で OpenBao Helm チャートを使用します。
- Cells は GKE と EKS 上で稼働します。

## 決定 {#decision}

この ADR は ADR-011 を改訂します。ADR-011 のイベント形式とイベントタイプは引き続き適用されます。変わるのは、イベントを Rails に届ける方法だけです。

### ローカルの中継サイドカー {#local-relay-sidecar}

OpenBao の `http` 監査デバイスは、`127.0.0.1` 上の [Vector](https://vector.dev) サイドカーに POST します。Vector は各エントリを Rails に再度 POST します。

- **メモリバッファー**を使用し、`when_full: drop_newest` を設定して、確認応答を無効にします。Rails の状態にかかわらず、OpenBao はすぐに応答を受け取ります（2026 年 10 月のローカルテストでは約 1 ms）。
- 接続エラー、タイムアウト、5xx レスポンスでは、バックオフを伴う**再試行**を行います。4xx レスポンスは再試行しません。
- **ボディは変更せずに転送**し、リクエストごとに 1 つのエントリを、同じヘッダーで送信します。Rails のエンドポイントを変更する必要はありません。
- Rails が破棄するため、Vector で**リクエストタイプのエントリを破棄**します。Rails が不明なイベントとして無視する、`auth.metadata` に `group_id` も `project_id` もないエントリも破棄します。
- **トークン**は、マウントされたシークレットファイルから読み取ります（Vector の `directory` シークレットバックエンド）。OpenBao 自身のヘッダーは転送しません。
- **ネイティブサイドカー**（`restartPolicy: Always` を設定した init コンテナ）を使用し、Vector の `/health` に対するスタートアッププローブを設定します。OpenBao より先に起動し、OpenBao より後に停止するため、シャットダウン時にキュー内のイベントを送信できます。

### OpenBao の変更 {#openbao-changes}

アップストリームに提案し、受け入れられるまではパッチとして保持します。

1. **デバイスごとの失敗カウンター**: `audit.<device>.log_request_failure` と `audit.<device>.log_response_failure` を追加します。現状では、単一のデバイスの失敗はエラーログにしか現れません。
2. **`required` 監査デバイス**: 他のデバイスが成功していても、そのデバイスが失敗するとリクエストを失敗させるオプションのフラグを追加します。Vector に送信する `http` デバイスを `required` としてマークします。`stdout` デバイスは、完全なローカルコピーとして維持します。このフラグは `env://` を通じて読み取るため、オペレーターはデバイスを置き換えることなく無効にできます。

リクエストのエントリは引き続き Vector に送信します。これにより、中継が失敗すると、リクエストの実行後ではなく実行*前に*リクエストを拒否します。

### Cells へのルーティング（スコープ外） {#routing-to-cells-out-of-scope}

現在は単一の OpenBao クラスターがすべての Cells に対応し、Vector は既存の Rails エンドポイントに POST します。各監査イベントを、そのグループまたはプロジェクトを所有する Cell の Rails に配信することは、この ADR のスコープ外です。情報が失われないよう、現時点で分かっていることをここに記録します。

- [HTTP router](https://gitlab.com/gitlab-org/cells/http-router)には、監査エンドポイントに対するルールがありません。監査エンドポイントは汎用の `/api/*` ルールに該当し、セッションに基づいてルーティングされますが、OpenBao にはセッションがありません。ヘッダーに基づくルーティング（`X-GitLab-Organization-ID`）が存在するのは、GraphQL と Jira Forge のみです。
- Rails は `auth.metadata.group_id` または `project_id` からスコープを取得し、グループを優先します。そのため、これらがルーティングキーになります。Rails が処理するすべてのイベントには、いずれかのキーが含まれています。
- Vector はエントリから、`…/secrets_manager/groups/<group_id>/audit_logs` または `…/projects/<project_id>/audit_logs` という URL を構築できます。ホストとパスプレフィックスが固定の URI テンプレートは、Vector のテンプレート制限のチェックを通過します。ID のみを含むヘッダーは、この安全性チェックを無効にしない限り通過しません。
- これには、これらのパスに対する HTTP router のルール（前例: `/api/v4/internal/gitlab_subscriptions/namespaces/:NamespaceId/*`）と、同じハンドラーを呼び出す Rails のルートが必要です。Rails は引き続きボディから ID を読み取ります。

最終的に、OpenBao クラスターは各 Cell 内に配置されます。その時点でもイベントごとのルーティングが必要かどうかは、Cell の中継が Rails に到達する方法によって決まります。Cell の Rails に直接 POST する場合は、Cell ごとに固定の URL があれば十分です。HTTP router を経由して POST する場合は、上記のルーティングキーとルールが引き続き必要です。いずれの場合も、Cells 間を移動する組織には特別な処理が必要になる可能性があります。

### 配信保証 {#delivery-guarantee}

ベストエフォートです。イベントが失われるのは、次の場合に限られます。

- Rails が利用できない間に、Vector が再起動またはクラッシュするか、Pod またはノードが失われた場合。
- バッファーが満杯になった場合。
- Rails が 4xx を返した場合。

いずれもメトリクスで確認できます。中継自体に到達できない場合はリクエストを拒否するため、イベントが黙って失われることはありません。

## 結果 {#consequences}

### 利点 {#benefits}

- OpenBao が Rails を待つ必要がなくなります。Rails が遅い場合や利用できない場合、監査の配信は遅延しますが、OpenBao のリクエストが遅くなったり失敗したりすることはありません。
- 現状よりイベントの損失が減ります。Rails が遅い場合は、タイムアウト後にイベントを破棄する代わりに、キューに保存して再試行します。
- 失敗を観測できます。OpenBao にはデバイスごとの失敗カウンターがあり、Vector にはバッファーでの破棄数とシンクのエラーがあります。
- 同じ中継が、GKE、EKS、任意の Self-Managed Kubernetes クラスターで動作します。クラウドサービスは使用しません。
- Rails の変更は不要です。エンドポイント、ボディ、トークンは同じままです。

### トレードオフとリスク {#trade-offs-and-risks}

- **コンポーネントの追加。** Vector イメージのビルド、スキャン、アップグレードに加え、設定とアラートが必要です。
- **可用性は中継に依存します。** `required` を設定すると、Vector に到達できない間、OpenBao はリクエストを拒否します。Vector はローカルで稼働しており、数秒で再起動します。また、環境変数を通じてフラグを無効にできます。
- **ベストエフォートの配信。** 将来、Compliance や使用状況の追跡で配信保証が必要になった場合には適しません。その場合、永続ボリューム上のディスクバッファーやマネージドキューなど、永続的なバッファーが必要になります（代替案を参照）。
- **Runway 上で Vector の設定を変更すると、OpenBao が再起動します。** サイドカーは ConfigMaps をマウントできないため、設定をイメージに組み込んでおり、変更には新しいデプロイが必要です。チャートでは、ライブリロードを備えた ConfigMap によってこれを回避できます。
- **重複。** Rails がイベントを処理した後にタイムアウトして再試行すると、同じイベントが再び配信されます。Rails はすでに `request.id` によって重複を除去しています（`AuditLogWorker`）。
- **メモリ使用量が `max_events` によって制限されるのは、`drop_newest` を使用した場合のみです。** ローカルテスト（Vector 0.59、2026 年 10 月）では、`when_full: block` は `max_events: 5` に設定しても、ブロックするまで約 14,000 イベントを保持しました。

### 必要な変更 {#required-changes}

- OpenBao: デバイスごとの失敗カウンター、`required` フラグ、ドキュメント。
- Runway: init コンテナの `env`。[runwayctl!2103](https://gitlab.com/gitlab-com/gl-infra/platform/runway/runwayctl/-/merge_requests/2103)で対応します。
- Runway: init コンテナの `volumeMounts` と `secretEnvFrom`。[runwayctl!2119](https://gitlab.com/gitlab-com/gl-infra/platform/runway/runwayctl/-/merge_requests/2119)で対応します。
- `secrets-manager-runway`: Vector イメージとサイドカー、新しい監査デバイス、デバイスごとの失敗カウンターを保持するテレメトリーフィルター。
- ランブック: アーキテクチャ、アラート、`required` の無効化。
- OpenBao チャート（後で対応）: オプションのサイドカー。`uri` を `env://` を通じて読み取ります。

## 検討した代替案 {#alternatives-considered}

### OpenBao 内の非同期でバッチ処理する `http` 監査デバイス {#asynchronous-batching-http-audit-device-in-openbao}

デバイスがエントリをメモリ内のキューに保存し、バックグラウンドで送信します。新しいコンポーネントが不要で、どの環境でも同じように動作します。ただし、次の問題があります。

- OpenBao がクラッシュした場合や OOM によって強制終了された場合、キューが失われます。
- OpenBao コアに新しいフラッシュフックを追加しなければ、リーダーから降格した場合にもキューが失われます。
- アップストリームにおける OpenBao の監査の意味論が変わります。

フォールバックとして残し、Self-Managed のデフォルトとする可能性もあります。

### Rails へのプッシュ配信を備えたマネージドキュー（GCP Pub/Sub、AWS SQS） {#managed-queue-gcp-pubsub-aws-sqs-with-push-delivery-to-rails}

ノードが失われてもデータを保持できる唯一の選択肢です。現時点では、次の理由で却下しました。

- クラウドごとに固有の実装となり、EKS には 2 つ目の実装が必要です。
- Runway は GKE サービスに Pub/Sub をプロビジョニングできません。
- Rails は共有トークンの代わりに OIDC トークンを検証する必要があります。
- プッシュサブスクリプションはイベントを Cells にルーティングできません。
- Self-Managed インスタンスには Google から到達できる必要があります。

配信先が配信保証を求めるようになった場合に再検討します。

### `file` 監査デバイスとログ転送ツール {#file-audit-device-plus-a-log-shipper}

次の理由で却下しました。

- デバイスと転送ツールがボリュームを共有する必要があります。
- ログローテーションには、コンテナをまたいで SIGHUP を送信する必要があります（`shareProcessNamespace`）。
- localhost 上の HTTP に対する利点がありません。

### 永続ボリューム上のディスクバッファー（`StatefulSet`） {#disk-buffer-on-a-persistent-volume-statefulset}

再起動をまたいでデータを保持できますが、Runway は永続ボリュームも `StatefulSet` もサポートしていません。ベストエフォートの配信には不要です。

### Rails エンドポイントの高速化、または監査エントリの削減 {#faster-rails-endpoint-or-fewer-audit-entries}

エンドポイントはすでにジョブをキューに入れる処理しか行っていません。リクエストのエントリを省くと通常のコストは半減しますが、遅い POST はリクエストの処理経路に残ります。どちらも OpenBao の Rails レイテンシへの依存を解消しません。

## 参考資料 {#references}

- 設計の議論: [gitlab-org/gitlab#602503](https://gitlab.com/gitlab-org/gitlab/-/work_items/602503)
- レイテンシ調査: [gitlab-org/gitlab#633021](https://gitlab.com/gitlab-org/gitlab/-/work_items/633021)
- リクエストをブロックする同期的な監査 POST: [gitlab-org/gitlab#602179](https://gitlab.com/gitlab-org/gitlab/-/work_items/602179)
- Runway サイドカーのフィールド: [runwayctl!1750](https://gitlab.com/gitlab-com/gl-infra/platform/runway/runwayctl/-/merge_requests/1750)
- シークレット読み取りの追跡: [gitlab-org/gitlab#597888](https://gitlab.com/gitlab-org/gitlab/-/work_items/597888)
- 改訂対象: [ADR-011: 顧客監査の取り込みにストリーミング監査イベントを使用する](011_http_audit.md)
