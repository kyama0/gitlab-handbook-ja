---
title: "Gitaly 適応的同時実行制限"
status: proposed
creation-date: "2023-05-30"
authors: [ "@qmnguyen0711" ]
approvers: [ ]
owning-stage: "~devops::enablement"
toc_hide: true
upstream_path: /handbook/engineering/architecture/design-documents/gitaly_adaptive_concurrency_limit/
upstream_sha: ec55f130cc95389b6faf798cebffd864abdbb4c5
translated_at: "2026-04-27T08:55:32Z"
translator: claude
stale: false
lastmod: "2025-04-28T10:53:04-07:00"
---


{{< engineering/design-document-header >}}


## サマリー

Gitaly は Git サーバーであり、インシデントのリスクを軽減するためにクライアントへプッシュバックする必要があります。過去に、RPC ごとの同時実行制限と pack-objects の同時実行制限を導入しました。両システムは成功しましたが、設定が静的であったため深刻な欠点がありました。このブループリントは、静的制限の欠点を克服するための適応的な同時実行制限システムを提案します。アルゴリズムは主として[加算的増加/乗算的減少](https://en.wikipedia.org/wiki/Additive_increase/multiplicative_decrease)アプローチを使用して、通常の処理中に制限を徐々に増加させ、インシデント中は迅速に削減します。アルゴリズムはリソース不足と深刻なレイテンシー劣化を Gitaly がトラブルに陥っているかを判断する基準として重点を置いています。

## 動機

インシデントのリスクを軽減し自身を保護するために、Gitaly は一部の制限に達したと判断した場合にクライアントにプッシュバックできるべきです。[以前の試み](https://gitlab.com/groups/gitlab-org/-/epics/7891)では、2 つのシステムを導入することで[バックプレッシャー](https://gitlab.com/gitlab-org/gitaly/-/blob/382d1e57b2cf02763d3d65e31ff4d38f467b797c/doc/backpressure.md)の基盤を築きました。RPC ごとの同時実行制限と pack-objects 同時実行制限です。

RPC ごとの同時実行制限は、同時に処理中のリクエストの最大数を設定できます。制限は RPC とリポジトリによってスコープされます。Pack-objects 同時実行制限は IP ごとに並行した Git データ転送リクエストを制限します。1 点注意として、pack-objects 同時実行制限はキャッシュミスにのみ適用されます。この制限を超えると、リクエストはキューに入れられるか、キューが満杯の場合は拒否されます。リクエストがキューに十分長く残っていると、Gitaly によっても拒否されます。

両方とも GitLab.com で有望な結果をもたらしましたが、設定（特に同時実行制限の値）は静的です。これにはいくつかの欠点があります。

- 同時実行制限の妥当な値を維持するのが面倒です。この[本番設定](https://gitlab.com/gitlab-com/gl-infra/chef-repo/-/blob/db11ef95859e42d656bb116c817402635e946a32/roles/gprd-base-stor-gitaly-common.json)を見ると、各制限が異なるソースからの手がかりに基づいて重く調整されています。全体的な状況が変わると再調整が必要です。
- 静的制限はすべての使用パターンに適しているわけではありません。すべてに適した値を選ぶことは実現不可能です。制限が低すぎると大きなユーザーが影響を受けます。値が緩すぎると保護効果が失われます。
- レートはサーバーに誘発される負荷の指標ではないため、サーバーがアイドル状態でもリクエストが拒否される可能性があります。

同時実行制限の利点を保ちながらすべての欠点を克服するための有望な解決策の 1 つは、ノードの現在の利用可能な処理キャパシティに適応的な同時実行制限にすることです。この提案された新しいモードを「適応的同時実行制限」と呼びます。

## ゴール

- Gitaly が高負荷のトラフィックをよりスマートにプッシュバックして、Gitaly の信頼性と耐障害性を強化する。
- Gitaly 飽和インシデントの発生を最小化する。
- クライアントが誤って同時実行制限に達する可能性を減らし、ResourceExhausted エラーレートを削減する。
- 同時実行制限のシームレスまたは完全に自動化されたキャリブレーションを容易にする。

## 非ゴール

- ユーザーまたは管理者のシステムのワークロードや複雑さを増加させること。ここで提案する適応性はその逆を目指しています。

## プロポーザル

提案された適応的同時実行制限アルゴリズムは主として加算的増加/乗算的減少（[AIMD](https://en.wikipedia.org/wiki/Additive_increase/multiplicative_decrease)）アプローチを使用します。この方法は通常のプロセス機能中に制限を徐々に増加させ、Issue（バックオフイベント）が発生した場合に迅速に削減します。Gitaly がトラブルに陥っているかを判断するさまざまな基準があります。この提案では 2 つのことに重点を置きます。

- リソースの不足、特に Git プロセスの処理に不可欠なメモリと CPU。
- 深刻なレイテンシーの劣化。

提案されたソリューションは、業界の他の企業が共有するこのテーマに関する多くの資料に強く触発されており、特に以下のものを参考にしています。

- TCP 輻輳制御（[RFC-2581](https://www.rfc-editor.org/rfc/rfc2581)、[RFC-5681](https://www.rfc-editor.org/rfc/rfc5681)、[RFC-9293](https://www.rfc-editor.org/rfc/rfc9293.html#name-tcp-congestion-control)、[Computer Networks: A Systems Approach](https://book.systemsapproach.org/congestion/tcpcc.html)）。
- Netflix 適応的同時実行制限（[ブログ投稿](https://tech.olx.com/load-shedding-with-nginx-using-adaptive-concurrency-control-part-1-e59c7da6a6df)および[実装](https://github.com/Netflix/concurrency-limits)）
- Envoy 適応的同時実行（[doc](https://www.envoyproxy.io/docs/envoy/latest/configuration/http/http_filters/adaptive_concurrency_filter#config-http-filters-adaptive-concurrency)）

慎重な考慮なしにソリューションを盲目的に適用して期待通りに機能することを期待することはできません。提案されたアプローチは、cgroup 使用率と upload-pack RPC などを含む Gitaly 固有の制約と特徴を考慮しています。

提案されたソリューションは、Gitaly の既存の[RPC 同時実行](https://docs.gitlab.com/ee/administration/gitaly/concurrency_limiting.html#limit-rpc-concurrency)と[pack object 同時実行](https://docs.gitlab.com/ee/administration/gitaly/concurrency_limiting.html#limit-pack-objects-concurrency)の制限を置き換えるのではなく、パラメーターを自動的に調整します。これは、キューイング、キュー内タイムアウト、キュー長、パーティショニング、スコープなどの他の側面は変わらないことを意味します。提案されたソリューションは現在の同時実行制限の **値** の変更にのみ重点を置いています。

## 設計と実装の詳細

### AIMD アルゴリズム

適応的同時実行制限アルゴリズムは主として加算的増加/乗算的減少（[AIMD](https://en.wikipedia.org/wiki/Additive_increase/multiplicative_decrease)）アプローチを使用します。この方法は通常のプロセス機能中に制限を徐々に増加させ、Issue が発生した場合に迅速に削減します。

初期化中、以下のパラメーターを設定します。

- `initialLimit`: 開始する同時実行制限。この値は本質的に現在の静的同時実行制限と等しい。
- `maxLimit`: 最大同時実行制限。
- `minLimit`: プロセスが機能していると見なされる最小同時実行制限。0 に等しい場合、次のすべてのリクエストを拒否する。
- `backoffFactor`: バックオフイベントが発生した場合に制限がどれだけ速く減少するか（`0 < backoff < 1`、デフォルトは `0.75`）

Gitaly プロセスが開始すると、`limit = initialLimit` に設定します。`limit` は一度に許可されるインフライトリクエストの最大数です。

定期的に（おそらく 15 秒ごとに）、`limit` の値が再調整されます。

- 前回の調整以降にバックオフイベントがない場合は `limit = limit + 1`。新しい制限は `maxLimit` を超えることができません。
- そうでない場合は `limit = limit * backoffFactor`。新しい制限は `minLimit` を下回ることができません。

プロセスがリクエストを処理できなくなるか、まもなく処理できなくなる場合、それはバックオフイベントと呼ばれます。理想的には、Gitaly が最大キャパシティにある効率的な状態をできるだけ長く維持したいです。

![Adaptive Concurrency Limit Flow](/images/engineering/architecture/design-documents/gitaly_adaptive_concurrency_limit/adaptive_concurrency_limit_flow.png)

理想的には、min/max の値は運用中に達することを意図していないセーフガードです。これらのどちらかに達することは、何かが間違っており、動的アルゴリズムが十分に機能していないことを意味します。

### リクエストの処理方法

同時実行制限は、一度に処理中のリクエスト（IFR）の総数を制限します。

- `IFR < limit` の場合、Gitaly は待機なしに新しいリクエストを処理します。デクリメント後、Gitaly はキュー内の次のリクエストがあれば直ちに処理します。
- `IFR = limit` の場合、制限に達したことを意味します。後続のリクエストはキューに入れられ、順番を待ちます。キュー長が設定された制限に達すると、Gitaly は新しいリクエストをすぐに拒否します。リクエストがキューに十分長く残っていると、Gitaly によって自動的にドロップされます。
- `IRF > limit` の場合、バックオフイベントの結果として適切です。Gitaly が新たに指定された制限よりも多くのリクエストを処理していることを意味します。上記のケースと同様に次のリクエストをキューイングすることに加えて、この状況が長く解消されない場合、Gitaly はインフライトリクエストのロードシェディングを開始する可能性があります。

キューイングのセマンティクスを変更したいかどうかについて、いくつかの時点で議論しました。現在、キューの先頭（FIFO）からキューに入れられたプロセスを受け付けていますが、後ろ（LIFO）からプロセスを受け付ける方が望ましいという提案が何度かありました。

拒否の理由に関係なく、クライアントは後でバックオフして再試行するシグナルとして `ResourceExhausted` レスポンスコードを受け取ります。Gitaly のほとんどの直接クライアントは GitLab Shell や Workhorse などの内部クライアントであるため、実際のユーザーはいくつかの分かりやすいメッセージを受け取ります。Gitaly は内部クライアントにバックオフを強制するための[指数バックオフヘッダー](https://gitlab.com/gitlab-org/gitaly/-/issues/5023)を付加できます。しかし、これは少し乱暴で予期しない結果につながる可能性があります。後で検討できます。

### バックオフイベント

各システムには固有のシグナルセットがあり、Gitaly の場合は 2 つの側面を考慮する必要があります。

- リソースの不足、特に `git-pack-objects(1)` のような Git プロセスの処理に不可欠なメモリと CPU。これらのリソースが限られているか枯渇している場合、Gitaly がさらに多くのリクエストを受け付けることは意味がありません。そうすると飽和が悪化します。Gitaly はこの Issue に対処するために cgroup を広範囲に適用します。次のセクションでは、cgroup を使用した計算の方法を説明します。
- 深刻なレイテンシーの劣化。Gitaly は Git データの提供以外のさまざまな目的のためのさまざまな RPC を提供しており、レイテンシーについて推論するのが難しいです。全体的なレイテンシーの大幅な低下は、Gitaly がさらに多くのリクエストを受け付けるべきでないことを示します。別のセクションでは、レイテンシーの劣化を合理的に確認する方法を説明します。

上記のシグナル以外にも、将来的にシステムをよりスマートにするために追加のシグナルを追加することを検討できます。例として、Go ガベージコレクターの統計情報、ネットワーク統計情報、ファイルディスクリプターなどがあります。一部の企業は [CPU 飽和を推定するために時間ドリフトを使用する](https://www.linkedin.com/blog/engineering/data-management/hodor-detecting-and-addressing-overload-in-linkedin-microservic)などの巧みなトリックを持っています。

#### Upload Pack RPC のバックオフイベント

Upload Pack RPC とその兄弟の PackObjects RPC は Gitaly 固有のものです。最も重い操作（大量の Git データの転送）のためのものです。各操作は数分から数時間かかる場合があります。各操作の時間は、要求されたオブジェクトの数やクライアントのインターネット速度など、複数の要因に依存します。

そのため、レイテンシーはバックオフイベントを判断するための不適切なシグナルです。この種の RPC はこの段階ではリソース計算にのみ依存する必要があります。

#### その他の RPC のバックオフイベント

上述のように、Gitaly はさまざまな目的のためのさまざまな RPC を提供しています。許容されるレイテンシーやレイテンシーの劣化を認識するタイミングの点でも異なる場合があります。幸いなことに、現在の RPC 同時実行制限の実装は RPC とリポジトリごとに個別に設定をスコープしています。レイテンシーシグナルはこの設定で意味があります。

レイテンシーに加えて、リソース使用量も重要な役割を果たします。したがって、その他の RPC はレイテンシー測定とリソース計算の両方のシグナルを使用する必要があります。

### cgroup を使用したリソース計算

飽和の Issue は通常 Gitaly 自体ではなく、ほとんどの作業を処理するスポーンされた Git プロセスによって引き起こされます。これらのプロセスは[cgroup](https://gitlab.com/gitlab-org/gitaly/-/blob/382d1e57b2cf02763d3d65e31ff4d38f467b797c/doc/cgroups.md)内に含まれており、cgroup バケッティングのアルゴリズムは[こちら](https://gitlab.com/gitlab-org/gitaly/-/blob/382d1e57b2cf02763d3d65e31ff4d38f467b797c/internal/cgroups/v1_linux.go#L166-166)で確認できます。通常、Gitaly はターゲットリポジトリに基づいてリクエストに適切な cgroup を選択します。すべてのリポジトリレベルの cgroup が属する親 cgroup もあります。

Cgroup の統計情報は広くアクセスできます。Gitaly は[cgroup コントロールファイル](https://www.kernel.org/doc/Documentation/cgroup-v1/memory.txt)の以下の情報を通じて、リソースキャパシティと現在のリソース消費の両方を簡単に取得できます。

- `memory.limit_in_bytes`
- `memory.usage_in_bytes`
- `cpu.cfs_period_us`
- `cpu.cfs_quota_us`
- `cpuacct.usage`

これらの統計情報の取得には一部のオーバーヘッドが伴う可能性があります。リアルタイムで更新し続ける必要はありません。したがって、制限調整サイクルで定期的に処理できます。

過去に、cgroup はスポーンされたプロセスが制限を超えないようにするのに信頼性が高かったです。cgroup を信頼してプロセスが干渉なしに実行できるようにすることは一般的に安全です。しかし、cgroup によって設定された制限に達した場合（100%）、過負荷が発生する可能性があります。これにより、ページフォールトの増加、遅いシステムコール、メモリアロケーションの問題、さらにはメモリ不足による強制終了などのさまざまな Issue が発生します。このようなインシデントの結果は[この例](https://gitlab.com/gitlab-com/gl-infra/production/-/issues/8713#note_1352403481)で強調されています。インフライトリクエストは大きな影響を受け、許容できない遅延、タイムアウト、さらにはキャンセルが発生します。

また、過去のさまざまな観察から、`git-pack-objects(1)` などの一部の Git プロセスは時間とともにメモリを蓄積します。`git-pull(1)` リクエストの波が来ると、ノードはさまざまなメモリを多く消費するプロセスで簡単に一杯になる可能性があります。そもそもこの蓄積を止める方がはるかに良いです。

結果として、過負荷を避けるために、Gitaly はハード制限に頼るのではなく、メモリキャパシティの 75% や CPU キャパシティの 90% を使用するなど、ソフト制限のセットを使用します。これらのソフト制限に達すると、同時実行調整器は乗算的な方法で同時実行制限を削減します。この戦略により、ノードが潜在的な過負荷イベントを処理するのに十分な余裕を持てます。

理論的には、cgroup 階層により、個別に過負荷状態を判断できます。したがって、Gitaly は各リポジトリの同時実行制限を個別に調整できます。しかし、このアプローチは実際には不必要に複雑になります。逆に、後でオペレーターに混乱を招く可能性があります。

良い出発点として、Gitaly は _以下のいずれか_ の条件で過負荷イベントを認識します。

- 親 cgroup のソフト制限に達した。
- リポジトリ cgroup の **いずれか** のソフト制限に達した

2 番目の条件は、リポジトリのキャパシティ制限が親 cgroup のキャパシティにとって重要である可能性があるため、存在することが論理的です。これは、リポジトリ cgroup がその制限に達した場合、他の cgroup に利用可能なリソースが少なくなることを意味します。結果として、同時実行制限を下げることで過負荷の発生が遅れます。

#### レイテンシー測定

同時実行制限を再調整する際、Upload Pack 以外の RPC ではレイテンシーが考慮されます。レイテンシーを測定する際に考慮すべき 2 つのこと。

- レイテンシーを記録する方法
- レイテンシーの劣化を認識する方法

Gitaly のような強力な gRPC サーバーがノードごとに多くのリクエスト/秒を管理できることは明らかです。本番サーバーは 1 秒あたり数千のリクエストを処理できます。応答時間を正確な方法で追跡して保存することは実用的ではありません。

プロセスがレイテンシーの劣化に直面しているかどうかを判断するヒューリスティックは興味深いです。最も単純なソリューションは、静的なレイテンシーしきい値を事前定義することです。各 RPC は異なるしきい値を持つ場合があります。残念ながら、静的な同時実行制限と同様に、合理的な最新の値を選ぶのは難しく面倒です。

幸いなことに、この種の問題には有名なアルゴリズムがあり、主に TCP 輻輳制御の世界で適用されています。

- Vegas アルゴリズム（[CN: ASA - Chapter 6.4](https://book.systemsapproach.org/congestion/avoidance.html)、[参照実装](https://github.com/Netflix/concurrency-limits/blob/main/concurrency-limits-core/src/main/java/com/netflix/concurrency/limits/limit/VegasLimit.java)）
- Gradient アルゴリズム（[論文](https://link.springer.com/chapter/10.1007/978-3-642-20798-3_25)、[参照実装](https://github.com/Netflix/concurrency-limits/blob/main/concurrency-limits-core/src/main/java/com/netflix/concurrency/limits/limit/Gradient2Limit.java)）

2 つのアルゴリズムは、事前定義された設定なしにレイテンシーしきい値を自動的に決定できます。実世界のシナリオに対して非常に効率的で統計的に信頼性が高いです。私たちの見解では、両方のアルゴリズムは私たちの特定のユースケースに同様に適しています。

### ロードシェディング

Gitaly が過負荷状態に長時間陥っていることは、以下の 2 つの兆候で示されます。

- 一定数の連続したバックオフイベント
- 一定量の間、同時実行制限よりも多くのインフライトリクエストがある

このような場合、特定の cgroup または Gitaly ノード全体が一時的に利用不能になる可能性があります。インフライトリクエストはキャンセルまたはタイムアウトになる可能性があります。GitLab.com の本番環境では、インシデントがトリガーされて人間の介入が求められます。ロードシェディングによってこの状況を改善できます。

このメカニズムは、インフライトリクエストを選択的に意図的に終了します。主な目的は、すべてのインフライトリクエストのカスケード障害を防ぐことです。これらのリクエストの一部がドロップされることで、cgroup/ノードが人間の介入なしに正常な状況に素早く回復することを期待しています。結果として、正味の可用性と耐障害性が向上します。

どのリクエストを終了するかを選ぶのはトリッキーです。多くのシステムでは、リクエストの重要度が考慮されます。下流からのリクエストには重要度ポイントが割り当てられます。ポイントの低いリクエストが最初に対象になります。残念ながら、GitLab には同様のシステムがありません。[Urgency システム](https://docs.Gitlab.com/ee/development/application_slis/rails_request.html)がありますが、これは重要度ではなく応答時間のコミットに使用されています。

代替として、システムに最も害を与えているリクエストを優先できます。考慮すべきいくつかの基準。

- 大量のメモリを消費しているリクエスト
- 時間をかけて大量の CPU を消費しているリクエスト
- 遅いクライアント
- 最近トラフィックを支配している IP からのリクエスト
- キュー内リクエスト/早期段階のリクエスト。ほぼ完了しているリクエストは拒否したくありません。

手始めに、最初の 2 つの基準を選択できます。後で本番から学習することでリストを強化できます。

## 参考資料

- Linkedin HODOR システム
  - [https://www.youtube.com/watch?v=-haM4ZpYNko](https://www.youtube.com/watch?v=-haM4ZpYNko)
  - [Hodor: LinkedIn マイクロサービスの過負荷の検出と対処](https://www.linkedin.com/blog/engineering/data-management/hodor-detecting-and-addressing-overload-in-linkedin-microservic)
- [https://www.linkedin.com/blog/engineering/infrastructure/hodor-overload-scenarios-and-the-evolution-of-their-detection-a](https://www.linkedin.com/blog/engineering/infrastructure/hodor-overload-scenarios-and-the-evolution-of-their-detection-a)
- ロードバランシングと過負荷に関する Google SRE の章：
  - [https://sre.google/sre-book/load-balancing-frontend/](https://sre.google/sre-book/load-balancing-frontend/)
  - [https://sre.google/sre-book/load-balancing-datacenter/](https://sre.google/sre-book/load-balancing-datacenter/)
  - [https://sre.google/sre-book/handling-overload/](https://sre.google/sre-book/handling-overload/)
  - [https://sre.google/sre-book/addressing-cascading-failures/](https://sre.google/sre-book/addressing-cascading-failures/)
  - [https://sre.google/workbook/managing-load/](https://sre.google/workbook/managing-load/)
- [Netflix Performance Under Load](https://netflixtechblog.medium.com/performance-under-load-3e6fa9a60581)
- [Netflix Adaptive Concurrency Limit](https://Github.com/Netflix/concurrency-limits)
- [NGINX を使用した適応的同時実行制御によるロードシェディング](https://tech.olx.com/load-shedding-with-nginx-using-adaptive-concurrency-control-part-1-e59c7da6a6df)
- [WeChat マイクロサービスのスケーリングのための過負荷制御](https://web1.cs.columbia.edu/~junfeng/papers/dagor-socc18.pdf)
- [ReactiveConf 2019 - Jay Phelps: Backpressure: Resistance is NOT Futile](https://www.youtube.com/watch?v=I6eZ4ZyI1Zg)
- [AWS re:Invent 2021 - 優先度付きロードシェディングを使用した Netflix の信頼性維持](https://www.youtube.com/watch?v=TmNiHbh-6Wg)
- [AWS ロードシェディングを使用した過負荷の回避](https://aws.amazon.com/builders-library/using-load-shedding-to-avoid-overload/)
- ["Stop Rate Limiting! Capacity Management Done Right" by Jon Moore](https://www.youtube.com/watch?v=m64SWl9bfvk)
- [ロードシェディングを使用した成功の災害からの生き残り - CRE ライフレッスン](https://cloud.google.com/blog/products/gcp/using-load-shedding-to-survive-a-success-disaster-cre-life-lessons)
- [Web サービスのロードシェディング](https://medium.com/helpshift-engineering/load-shedding-in-web-services-9fa8cfa1ffe4)
- [分散システムのロードシェディング](https://blog.sofwancoder.com/load-shedding-in-distributed-systems)
