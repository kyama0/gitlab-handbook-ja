---
owning-stage: "~devops::tenant scale"
title: 'Organizations ADR 010: Organization Read-Only Mode（Organization 読み取り専用モード）'
description: 'Cell をまたぐ移行や分離有効化の際に使用される Organization 単位の読み取り専用状態を導入し、ソース Cell での書き込みをブロックしつつ読み取りは許可します。コントローラ、REST API、GraphQL、GitAccess、コンテナレジストリ、LFS、Sidekiq の各レイヤで強制されます。'
creation-date: "2026-04-28"
authors: [ "@abdwddd" ]
toc_hide: true
upstream_path: /handbook/engineering/architecture/design-documents/organization/decisions/010_organization_read_only_mode/
upstream_sha: d5d611a2a400e4ac2527f89559e7ae9a013a9b21
translated_at: "2026-06-15T13:00:00Z"
translator: claude
stale: false
lastmod: "2026-06-15T11:20:57+02:00"
---

## コンテキスト

ある Organization をある Cell から別の Cell へ移行する際（[Organization Data Migration ブループリント](../../organization-data-migration/_index.md)を参照）、ソース Cell から宛先 Cell へデータがコピーされている期間（ウィンドウ）が存在します。データの一貫性を保証するため、ソース Organization はカットオーバーが開始されたら書き込みの受け付けを停止しなければなりませんが、その一方で読み取りは許可し、ユーザーが締め出されないようにし、進行中の読み取りトラフィック（クローン、プル、ページビュー、GraphQL クエリ）が引き続き動作するようにする必要があります。

Cohort B の基準（[Cohort B criteria](../../organization-data-migration/cohorts/criteria_cohort_b.md)）は、顧客が「移行中の短い読み取り専用ウィンドウ」を受け入れることを明示的に要求しています。現在、GitLab には**インスタンス全体**のメンテナンスモード（[Maintenance Mode administration guide](https://gitlab.com/help/administration/maintenance_mode/_index)）しかなく、これは粒度が粗すぎます。ソース Cell 全体を読み取り専用にすると、その Cell を共有しているすべての Organization の書き込みがブロックされてしまうからです。

私たちには、**単一の Organization** にスコープされた、次のようなメカニズムが必要です:

- 影響を受ける Organization に対してのみ、ソース Cell での書き込みをブロックする。
- 同じ Cell 上の他のすべての Organization は完全に書き込み可能なままにする。
- 状態を変更し得るすべてのレイヤ（コントローラ、REST API、GraphQL ミューテーション、Git プッシュ、コンテナレジストリのプッシュ、LFS アップロード、Sidekiq ジョブ、内部サービス）にわたって一貫して強制される。
- 観測可能で、監査可能で、復元可能である。

### 関連する作業

この ADR は、反復的な POC から生まれた設計を正式化したものです。これは以前の TLG スコープのアプローチと Rack ミドルウェアのアプローチに取って代わります:

- 親エピック: [Organization buildout](https://gitlab.com/groups/gitlab-org/-/epics/20404)。
- ドライバとなる issue: [POC: Organization-scoped read-only mode (controller-layer enforcement)](https://gitlab.com/gitlab-org/gitlab/-/work_items/594327)。
- 置き換えられた TLG スコープの POC: [#590009](https://gitlab.com/gitlab-org/gitlab/-/issues/590009)
  およびその Step 2 実装 [!226983](https://gitlab.com/gitlab-org/gitlab/-/merge_requests/226983)。これらは Rack ミドルウェアとパスプレフィックスのマッチングを使用していました。どちらも、`Current.organization` をキーとするコントローラレイヤでの強制を選択する形でクローズされました。
- 現行の Organization スコープの POC: [!228743](https://gitlab.com/gitlab-org/gitlab/-/merge_requests/228743)
  は、Step 1（Organization のステートマシン）と、実装計画の Step 2、3、5 の最初の試作を提供します。

## 決定

私たちは **Organization Read-Only Mode（Organization 読み取り専用モード）** を導入します。これは Organization 単位の状態であり、`Organizations::Organization` 上のファーストクラスの遷移としてモデル化され、アプリケーション内のすべての書き込み面で一貫して強制されます。状態が `read_only` に設定されている間、読み取りは引き続き機能し、その Organization が所有するリソースへの書き込みは拒否されます。

この状態は、監査と観測性のために記録される `reason`（migration、isolation、incident、billing、legal）を保持します。reason はバナーやエラーレスポンスでエンドユーザーに表示されません。ユーザーに見える文言は汎用的なものです（*ユーザーに見える挙動* を参照）。

このフリーズは**Org が所有するデータ**に適用されます: トップレベルグループ、ネームスペース、プロジェクト、およびそれらが含むリソースです。

### 状態モデル

読み取り専用は、既存の `Organizations::Stateful` concern 上の 2 つの新しい状態のペアとして追加されます。この concern はすでに Organization のライフサイクル（`unconfirmed`、`confirmed`、`active`、`deletion_scheduled`、`deletion_in_progress`）を駆動しています:

- `read_only_initialization` — Organization が完全な `read_only` になる前に入る中間状態。新しい書き込みはすでにすべての強制レイヤ（コントローラ、REST、GraphQL、Git アクセス、コンテナレジストリ、LFS）でブロックされていますが、進行中の org スコープの Sidekiq ジョブはまだ完了することが許可され、進行中の CI ジョブはキャンセルされつつあり、カットオーバー準備完了チェックが評価されつつあります。Organization は読み取り専用になることを*意図*していますが、まだドレインされていません。
- `read_only` — 定常状態。下記の *カットオーバー準備完了* における準備完了契約が、必要な確認ウィンドウの間ゼロに収束した後にのみ入ります。

遷移は `active → read_only_initialization → read_only` とその逆方向（中止/復旧経路のための `read_only → active`。`read_only_initialization → active` の遷移は、フリーズが完了する前にオペレーターがカットオーバーをキャンセルできるように存在します）に制限されます。新しいイベントは、既存の `after_transition :log_transition` 監査フックと、[`app/models/concerns/organizations/stateful.rb`](https://gitlab.com/gitlab-org/gitlab/-/blob/master/app/models/concerns/organizations/stateful.rb) がすでにインクルードしている `Gitlab::TenantContainerLifecycle::Stateful::TransitionValidation` バリデータを再利用します。そのため、遷移のロギングとバリデーションは再実装されるのではなく継承されます。いずれかの `deletion_*` 状態から、または confirmation 前の状態から `read_only_initialization` または `read_only` に入ることは許可されません。これらの状態への各エントリと各退出は、既存の遷移フックを介して監査されます。

フリーズを初期化フェーズと定常状態に分割するのは意図的なものです: 書き込みのブロック、ジョブのドレイン、CI のキャンセル、BBM の一時停止は即座には行われず、「書き込みがブロックされている」ことと「Organization がドレインされた」ことを混同すると、任意の時点でどの保証が成り立つのかが不明瞭になります。カットオーバーツール、バナー、準備完了エンドポイントはすべて、状態を推測するのではなく、明示的な状態をキーとします。

具体的な enum 値、イベント名、ヘルパーシグネチャは実装の詳細であり、[#594327](https://gitlab.com/gitlab-org/gitlab/-/work_items/594327) と [!228743](https://gitlab.com/gitlab-org/gitlab/-/merge_requests/228743) にあります。

### 制御面

状態遷移は次によって駆動されます:

- カットオーバー開始時のソース Cell 上の**移行ツール**（`reason: migration`）。そして、Organization が完全に移行され、Topology Service でルーティングが切り替えられた後に、宛先 Cell 上でクリアされます。
- **分離有効化ツール**（`reason: isolation`）。
- インシデント、billing、legal hold のための**管理者 / SRE の制御**。Rails コンソールに加えて、インスタンスの Admin エリアと Rake タスクを通じて公開されます。
- 移行、分離、またはインシデント対応の際にオペレーターが開始する遷移のための **Rails コンソール**。

**デフォルト Organization は**読み取り専用モードから**除外されます**。デフォルト Organization はインスタンスレベルのリソースと Self-Managed/Dedicated デプロイメントをホストしており（[ADR 007](007_self_managed_dedicated_single_organization.md) を参照）、これをフリーズすることはインスタンス全体をオフラインにすることと同等になります。Admin エリアはこれに対する読み取り専用トグルを公開せず、基盤となる遷移ガードがこの操作を拒否します。SM/Dedicated → dotCom の移行ケースについては、Organization 単位の読み取り専用ではなく、インスタンス全体のメンテナンスモードが正しいツールです。

### カットオーバー準備完了 {#cutover-readiness}

Cell 間の Organization 移行は、データカットオーバーの前の*ドレイン*フェーズとして Organization Read-Only Mode を使用します。Redis は Cell ごとに存在し、宛先 Cell には**コピーされない**ため、カットオーバー時にソース Cell の Redis に滞留している Sidekiq ジョブは失われます。したがって読み取り専用は、カットオーバーが進む前に、ソース Cell をその Organization についてチェック可能でゼロ進行中（zero-in-flight）の状態へと駆動しなければなりません。

準備完了契約は次のとおりです: カットオーバーは、ソース Cell 上のその Organization について、**以下のすべて**が真である場合にのみ進行します:

1. いずれの Sidekiq キューにも、その Organization を対象とする保留中のジョブがない。
2. その Organization を対象とするスケジュール済みまたはリトライ中のジョブがない。
3. その Organization を対象とする進行中のジョブがない。
4. その Organization を対象とする Organization 単位の cron エントリがない（Cell 全体の cron エントリはカウントされません。その反復はフィルタされます。*Sidekiq ジョブ* を参照）。
5. ソース Cell 上の進行中のスキーマ移行とポストデプロイ移行が完了している。これにより、宛先 Cell はスキーマ一貫性のあるスナップショットを受け取ります。
6. Org が所有するデータに触れるバッチ化バックグラウンド移行が、`read_only` に入る一環としてソース Cell 上で**一時停止**され、カットオーバー後に宛先 Cell 上で**再開**される。これは、移行の進行状態がデータとともに移動し、作業そのものが org スコープであるためです。

このチェックの使い方には 3 つのルールが適用されます:

- **操作の順序。** `read_only_initialization` への突入は、準備完了チェックが開始される前に、すべてのエンキュー経路（コントローラ、REST、GraphQL、Git アクセス）にわたって有効になっていなければなりません。そうしないと、チェックがカウントしている間に新しいジョブが到着します。`read_only` への遷移そのものは、準備完了チェックが収束した後にのみ起こります。
- **ドレイン確認ウィンドウ。** このチェックは短い間隔をあけて少なくとも 2 回実行され、両方の実行でゼロが読み取られなければなりません。1 回限りのゼロは、まさにワーカーに取り上げられようとしていたジョブと競合する可能性があります。
- **有界の待機、その後エスカレート。** 準備完了が設定済みのウィンドウ内に収束しない場合、カットオーバーツールは、その Organization をまだ保持しているワーカーを表面化させ、オペレーターが待つか、kill するか、中止するかを判断できるようにします。移行カットオーバーは協調的かつ人間が監督するステップであり、サイレントなタイムアウトは許容されません。

準備完了チェックは、[Organization Data Migration ブループリント](../../organization-data-migration/_index.md)におけるデータコピー / ルーティング切り替えステップのゲーティング前提条件です。これは管理者エンドポイントとして公開され、ホットパスではありません。これを計算するために使用される具体的な Sidekiq API とリゾルバシグネチャは実装の詳細であり、[#594327](https://gitlab.com/gitlab-org/gitlab/-/work_items/594327) にあります。

### どこで強制されるか

強制は、既存の [`CurrentOrganization` コントローラ concern](https://gitlab.com/gitlab-org/gitlab/-/blob/master/app/controllers/concerns/current_organization.rb) によってリクエストから解決される**現在の Organization** によってパラメータ化されます。この concern はリクエストごとに 1 回 `Current.organization` を設定します。以下のすべての強制レイヤは、Organization 自体を再解決するのではなく、その値を読み取ります。

私たちはこのために Rack ミドルウェアを意図的に**導入しません**。パスおよび動詞ベースのミドルウェアによる強制は脆弱です（ルートは進化し、書き込み/読み取りの分割は必ずしも HTTP メソッドに反映されず、多くのエンドポイントはコントローラロジックが実行された後でないとどの Organization に属するかわかりません）。コントローラ / Grape / GraphQL / GitAccess レイヤはすでに解決済みの Organization を持っているか、安価に取得でき、正規の強制面となります（*代替案* を参照）。

面ごとのルール:

- **コントローラ。** 読み取り（`GET`、`HEAD`、`OPTIONS`）は許可。許可リストに載っていないアクションへの書き込みは拒否。HTTP メソッドは「書き込みなし」の完璧な代理にはなりません: 一部の `GET` は [DB 書き込みをトリガしたり Sidekiq ジョブをエンキューしたり](https://gitlab.com/gitlab-org/gitlab/-/issues/586370)します（ログイン時の監査イベント、遅延バックフィル）。Geo は歴史的にこれらを `Gitlab::Geo.secondary?` / `read_only?` ガードや `SkipSecondary` スタイルのワーカー concern でケースバイケースにパッチしてきました。新しい発生は想定されており、それらのガードはこのチェックと統一されるべきであり、Sidekiq のドレイン（*Sidekiq ジョブ* を参照）は 1 つがすり抜けた場合のバックストップです。
- **REST API（Grape）。** 読み取りは許可。`GET`/`HEAD` 以外のリクエストは、現在の Organization が読み取り専用の場合に短絡します。
- **GraphQL。** クエリは許可。ミューテーションは拒否。チェックはリゾルバ実行の前に行われ、バッチ化されたミューテーションについて部分的な状態が書き込まれないようにします。
- **Git アクセス（`Gitlab::GitAccess`）。** プルとクローン（`git-upload-pack`）は許可。プッシュ（`git-receive-pack`）は拒否。HTTP と SSH の両方をカバーします。どちらも `GitAccess` を通るためです。Wiki、スニペット、デザインリポジトリも同じルールに従います。
- **コンテナレジストリ。** `pull` は許可。`push`、`delete`、`*` は拒否。
- **Git LFS。** ダウンロードは許可。アップロード、ロック、アンロック、verify は拒否。
- **Sidekiq。** org スコープのワーカーはドレインし、cron ワーカーは読み取り専用の Organization をスキップします。その根拠については下記の *Sidekiq ジョブ* を参照。これは他の面とはアーキテクチャ的に異なります。
- **トークン、自動化、インテグレーション、Webhook。** パーソナルアクセストークン、グループ/プロジェクトアクセストークン、デプロイトークン、CI ジョブトークン、インバウンド Webhook はすべてコントローラ / Grape スタックを通り、上記のルールでカバーされます。「信頼されたインテグレーション」のための特別なバイパスはありません。書き込みによってトリガされるアウトバウンド Webhook は、元となる書き込みがブロックされるため、読み取り専用の間は関係ありません。

#### 認証の免除

認証エンドポイント（サインイン、サインアウト、OAuth トークン発行、JWT 認証、SAML/SSO コールバック）は、Organization が `read_only_initialization` または `read_only` にある間も利用可能なままです。これがないと、ユーザーは Organization のデータを*読み取る*ためのセッションを取得できなくなり、読み取りを許可する目的そのものが台無しになります。

この免除は意図的に狭く、明示的に扱わなければならない既知の残存リスクを伴います:

- **境界。** 免除は*認証コントローラ*（およびトークンエンドポイントの場合の Grape 相当物）に適用され、認証済みのリクエストパス上でたまたま発生する任意の書き込みには適用されません。書き込みが免除されるのは、それが認証そのものを完了するために必要な場合のみです。たとえば、新しいセッション行の永続化、サインイン試行の監査イベントの記録、たった今使用された資格情報の last-used タイムスタンプの更新などです。
- **`users` テーブルへの書き込み。** SSO/SAML フローは初回サインイン時にまったく新しい `users` 行を作成することがあり、`last_sign_in_at` / `last_activity_on` の更新は認証済みリクエストごとに発火します。シャーディングの目的上、各 `users` 行は `organization_id` を介して厳密に 1 つの Organization に属するため、`users` 行への書き込みはその Organization の読み取り専用状態によってゲートされ**ます**。認証免除はこの 2 つのケースを分割します:
  - 所有する Organization が `read_only_initialization` または `read_only` にあるユーザーについて、*既存の `users` 行の更新*（`last_sign_in_at`、`last_activity_on`、および同等のリクエストごとのタイムスタンプ）は、セッションおよび監査の書き込みと同じ理由で免除のもとで**許可されます**: 行はソース Cell 上にすでに存在し、その更新はサインインそのものを完了するために必要だからです。
  - 所有する Organization が `read_only_initialization` または `read_only` にある間に*まったく新しい `users` 行を作成すること*（SSO/SAML による初回サインイン、JIT プロビジョニング、または `users` に `INSERT` する他のあらゆるフロー）は免除され**ず**、ブロックされなければなりません。読み取り専用ウィンドウ中に作成された行はソース Cell 上にのみ存在し、カットオーバースナップショットの一部ではなく、トラフィックが宛先 Cell に移動したときに失われます。これはまさに、読み取り専用状態が防止するために存在するデータ損失のクラスであり、読み取り専用ウィンドウがカットオーバーと一致するときにこそリスクが最も高くなります。したがって認証フローは、このケースではサイレントに孤立した行を作成するのではなく、標準の読み取り専用エラーを呼び出し元に表面化させます。

  プロダクトレベルでの Cross-Org メンバーシップは、行そのもののシャーディング所有権を変えるものではなく、したがって上記のいずれのルールも変えません。
- **カスケード書き込み。** 一部の認証時の更新は org が所有する状態にカスケードすることがあります。たとえば、Cell 間移行ウィンドウ中に Topology Service の更新（`user.cell = …`）をトリガする書き込みなどです。読み取り専用 Organization の org 所有行に到達するカスケード書き込みは、依然としてブロックされなければなりません: 免除は認証コントローラそのものに対するものであり、それが呼び出す下流のサービスに対するものではありません。今日そのようなカスケードが存在する場合は、それらは監査され、遅延されるか、冪等にされるか、宛先 Cell にルーティングされるべきです。
- **前提。** 私たちは次のことを前提とします: (a) 認証時の書き込みセットは小さく列挙可能である、(b) それは Cell 間移行カットオーバーがソース Cell 上で一貫している必要のある状態を一切含まない、(c) ルーティングレイヤはカットオーバーウィンドウ中に認証リクエストを正しい Cell へ向ける。これらの前提はそれぞれ、新しい認証フローや新しい認証時の副作用を追加する際に再検証されるべきです。

ここでの失敗は本物の競合状態（SSO が誤った Cell にユーザー行を作成する、`last_login_at` が古いトポロジー更新にカスケードする）であるため、新しい認証時の書き込みは、認証パス上にあるという理由でサイレントに通過させられるのではなく、この免除に照らしてレビューされなければなりません。

具体的なクラス名、ファイルパス、エラーレスポンスの形、HTTP ステータスコード（`503` か `403` か）は実装の詳細であり、[#594327](https://gitlab.com/gitlab-org/gitlab/-/work_items/594327) および POC から生成される API ドキュメントにあります。

### Sidekiq ジョブ {#sidekiq-jobs}

バックグラウンドジョブは HTTP サイクルの外で実行されるため、最もリスクの高い書き込み面です。さらに Cell 間移行では追加の制約があります: Redis は Cell ごとに存在し、移行され**ない**ため、カットオーバー時にソース Cell の Redis に残されたジョブは失われます。ポリシーはジョブのソースによって分割され、下記の *ポリシー* で詳述されます。

#### Org スコープ判定ルール

ワーカーは、その引数のいずれかが Organization に解決される場合に*org スコープ*です。明示的な `organization_id` を取る場合だけではありません。そのモデルが（直接的または推移的に）`organization_id` を持つ任意の引数が該当し、必要に応じて関連をたどり、[ADR 008](008_non_isolated_organizations_gitlab_com.md) の 1:1 トップレベルグループ → Organization の不変条件に従います。引数の型ごとの完全な分類はリゾルバの実装とともにあります。

ワーカーが*クロス Org*であるのは、その引数のいずれも Organization に解決されない場合、または複数の Organization にまたがるコレクションを反復する場合（たとえば、`Project.find_each` を反復する Cell 全体の cron ワーカー）のみです。反復するワーカーはワーカーレベルではクロス Org ですが、行ごとには org スコープになり、反復中に読み取り専用 Organization をフィルタしなければなりません（下記の *ポリシー* を参照）。

単一のリゾルバが、所与の `(worker_class, args)` ペアに対して `Organization | :cross_org | :unresolved` を返し、このロジックが存在する唯一の場所となります。これは新しい能力であることに注意してください: `Gitlab::ApplicationContext` はコンテキストをジョブペイロードとログに*シリアライズ*するだけで（`to_lazy_hash` 経由、たとえば `project ⇒ project_path`、`organization_id ⇒ organization&.id`）、ペイロードからモデルを再構築することは決してありません。既存の読み戻し経路は、すでにシリアライズされた文字列を `Labkit::Context` にリプレイするだけです。今日ジョブ引数からコンテキストを導出する唯一のメカニズムは、ワーカーごとにオプトインする `context_for_arguments`（`Gitlab::BatchWorkerContext`）です。したがってリゾルバは構築されなければなりません。実行時にジョブ引数から Organization を解決するように `ApplicationContext` を拡張するか、ワーカーごとの `context_for_arguments` に標準化するかのいずれかです。

#### ポリシー {#policy}

ジョブがどのようにそこに到達したかをキーとする 2 つのルール:

- **Org スコープのワーカーはドレインする。** Organization が `read_only` に入ったときにすでにキューに入っているか進行中のジョブは、フリーズの前にフロントドアのリクエストが受理された作業を表します。それらはソース Cell 上で完了まで実行されなければなりません。Sidekiq サーバーミドルウェアはそれらを**スキップしません**。新しいエンキューはコントローラ、REST、GraphQL、Git アクセスレイヤで防がれるため、フリーズが有効になった後はそれ以上の org スコープジョブがキューに到着することはありません。カットオーバーは上記の準備完了契約でゲートされます。これは、その Organization についてキュー済み、スケジュール済み、リトライ中、進行中のすべてのジョブが完了したときにのみ真を返します。サイレントなスキップではなく、本物のドレインです。
- **cron ワーカーは読み取り専用の Organization とそのプロジェクトおよびネームスペースをスキップする。** Sidekiq サーバーミドルウェアが、解決された Organization が読み取り専用である cron ジョブの実行を、構造化ログとともに短絡させます。org が所有するデータ（プロジェクト、ネームスペース、その他 Organization に解決される行）を反復する Cell 全体の cron ワーカーは、反復の内側でアクティブな Organization にフィルタしなければなりません。これは行ごとの述語ではなく、join（またはアクティブな Organization に対するサブセレクト）として表現され、フィルタのコストが有界になるようにします。

フィルタは、参加するすべてのモデル上の単一の共有スコープとして実装されます。org が所有するデータを反復するすべての cron ワーカーは、`active` でない Organization に属する行が yield されないことを表明するテストを持たなければなりません。

#### Loose Foreign Keys（LFK）

LFK 削除ワーカー（`LooseForeignKeys::CleanupWorker` と、`LooseForeignKeys::CiPipelinesBuildsCleanupCronWorker` や `LooseForeignKeys::MergeRequestDiffCommitCleanupWorker` などのテーブルごとのバリアント。`Gitlab::Database::LooseForeignKeys::ALLOWED_WORKER_CLASSES` に列挙されています）は Sidekiq cron ワーカーです。これらは Cell ごとに 1 回実行されますが、それはワーカー自体に Cell を意識した設計があるからではなく、各 Cell が独自の Sidekiq を持っているからです。これらは `loose_foreign_keys_deleted_records`（`gitlab_shared` テーブル）を消費し、4 ステップのチェーンを通じて子行への削除や null 化をカスケードします: `CleanupWorker` → `LooseForeignKeys::ProcessDeletedRecordsService` → `LooseForeignKeys::BatchCleanerService` → `LooseForeignKeys::CleanerService`（パーティション化されたテーブルの場合は `PartitionCleanerService`）。`BatchCleanerService` は各親テーブルの LFK 定義を検索するオーケストレーターであり、`CleanerService` は実際の `DELETE` / `UPDATE` を構築して実行するテーブルごとの実行体です。概念的には、このチェーン全体が上記の *cron ワーカーは読み取り専用の Organization をスキップする* ルールのもとに入ります: 読み取り専用 Organization に属する行に対するカスケード削除は、ドレイン中に適用されてはなりません。

実際には、`CleanerService` は org が所有する ActiveRecord スコープを反復するのではなく、loose-FK 列をキーとする生の `DELETE` / `UPDATE` クエリ（たとえば `WHERE project_id IN (...)`）を構築するため、アクティブな Organization のフィルタを差し込むのは自明ではありません。実装作業は、追跡される各子テーブルについて所有する Organization を解決すること（シャーディングキー辞書 `Gitlab::Database::Dictionary`（`db/docs/*.yml` をソースとし、すでに `Organizations::Sharding` が消費している）経由か、クリーナーが生成するクエリにアクティブな Organization の join を追加するか）、そして所有する Organization が `active` でない親レコードをスキップするように `BatchCleanerService` / `CleanerService` に教えることです。この作業は LFK 機能のオーナーが担当し、下記のより広範な LFK-after-cutover の問題とともに追跡されます。

Organization が宛先 Cell に*移動した*後に LFK がどのように振る舞うか（すなわち、ソース Cell に残された親/子行に何が起こるか、各 Cell 上の LFK ワーカーがそれをどう推論すべきか）というより広範な問題は、この ADR のスコープ外です。これは [gitlab-org/gitlab#535508](https://gitlab.com/gitlab-org/gitlab/-/work_items/535508) で追跡され、[Organization Data Migration ブループリント](../../organization-data-migration/_index.md)に属します。

#### バッチ化バックグラウンド移行（BBM）

BBM は、すべて `Database::BatchedBackgroundMigration::SingleDatabaseWorker` concern をインクルードする Sidekiq cron ワーカーの一群によってデータベースごとにスケジュールされます: `Database::BatchedBackgroundMigrationWorker`（main）、`Database::BatchedBackgroundMigration::CiDatabaseWorker`（CI）、`Database::BatchedBackgroundMigration::SecDatabaseWorker`（sec）。それぞれが自分のデータベースの実行ワーカー（`MainExecutionWorker` / `CiExecutionWorker` / `SecExecutionWorker`）にディスパッチし、それが今度は `Gitlab::Database::BackgroundMigration::BatchedMigrationWrapper` を通じて個々のジョブを実行します。BBM はテーブル上で主キーまたはカーソルの範囲を反復します。Organization を直接反復するのではありません。[`queue_batched_background_migration`](https://gitlab.com/gitlab-org/gitlab/-/blob/master/lib/gitlab/database/migrations/batched_background_migration_helpers.rb) ヘルパーは、移行が `cursor_columns` を定義するときにカーソル戦略を自動検出します。BBM は Cell ローカルです: cron ワーカーによってスケジュールされ、それらが触れる org 所有テーブルは一律に `organization_id` シャーディングキーを持つわけではないため、BBM バッチが適用できる汎用的な行ごとの「アクティブな Organization」述語はありません。したがって、それらは他の Cell ローカルな cron ワーカーと同様に扱われます。Organization ごとにフィルタするのではなく、`read_only_initialization` への突入時にまるごとスキップされます。

行ごとの作業進捗（`batched_background_migrations.min_value` / `max_value` / `batch_size` と、`BatchedMigrationWrapper#perform` が参照するバッチごとの行）は、Redis ではなく Postgres に保存されます。ただし、移動するのは org でシャードされた対象行のみです。BBM のスケジューラ、ジョブ、遷移ログのテーブル自体は `gitlab_shared_cell_local`（下記参照）であり、ソース Cell に残ります。

この ADR のポリシーは次のとおりです:

- **BBM は Cell ローカルの cron スキップルールに従う。** 他の Cell ローカルな Sidekiq cron ワーカーと同様に、BBM のスケジューリングは、Cell がカットオーバーを初期化している間、Organization ごとにフィルタするのではなくまるごとスキップされます。BBM は Cell ローカルであり、Organization シャーディングキーに対して実行されないため、適用できる Organization ごとのフィルタはありません。cron 駆動のスケジューリングを一時停止することが、cron スキップルールの BBM における等価物です。
- **BBM は `read_only_initialization` への突入の一環としてソース Cell 上で一時停止され、カットオーバー後に宛先 Cell 上で再開される。** BBM の進捗は Redis ではなく PostgreSQL（`batched_background_migrations`、`batched_background_migration_jobs`、`batched_background_migration_job_transition_logs`）に永続化されており、これがカットオーバー後の再開を実現可能にしている性質です。BBM 追跡テーブル自体（`batched_background_migrations`、`batched_background_migration_jobs`、`batched_background_migration_job_transition_logs`）はデータベース辞書で `gitlab_schema: gitlab_shared_cell_local` とマークされており（[`db/docs/batched_background_migrations.yml`](https://gitlab.com/gitlab-org/gitlab/-/blob/master/db/docs/batched_background_migrations.yml)、[`db/docs/batched_background_migration_jobs.yml`](https://gitlab.com/gitlab-org/gitlab/-/blob/master/db/docs/batched_background_migration_jobs.yml)、[`db/docs/batched_background_migration_job_transition_logs.yml`](https://gitlab.com/gitlab-org/gitlab/-/blob/master/db/docs/batched_background_migration_job_transition_logs.yml)）、したがって Organization の移動中はソース Cell に残ります。宛先 Cell は、明示的な引き継ぎステップとして、移動したデータに対して進行中の BBM を再エンキューしなければなりません。追跡履歴は転送されません。
- **進行中の BBM バッチはバッチ途中でキャンセルされない。** キャンセルは、移行を部分的な状態のままにするリスクを伴います。準備完了チェックは、ソース Cell がドレインされたとみなされる前に、現在のバッチが完了するのを待ちます。

カットオーバー準備完了チェックが BBM の進捗をどう読むかの完全な契約は、Organization Data Migration ブループリントと共有され、[&20404](https://gitlab.com/groups/gitlab-org/-/epics/20404) で追跡されます。

#### 観測性

すべてのスキップ、キャンセル、フィルタイベントは、`organization_id`、`worker`（クラス）、`jid` を含む構造化ログを発行します。同じデータは *カットオーバー準備完了* エンドポイントが読み取るものでもあり、カットオーバーの決定と定常状態の観測性は 1 つのシグナルを共有します。

この Sidekiq ポリシーは、すべてのバックグラウンドジョブを実行し続けさせるインスタンス全体のメンテナンスモードよりも意図的に厳格です。

### CI/CD の挙動

- 読み取り専用 Organization 配下のプロジェクトに対して、新しいパイプラインを作成すること（UI、API、スケジュールトリガ、手動トリガ）はブロックされます。
- パイプラインとジョブの状態、ログ、アーティファクトの読み取りは引き続き許可されます。
- **Organization が読み取り専用に入る前に開始されたジョブはキャンセルされます。** それらは長時間実行される可能性があり、そうでなければカットオーバーを無期限に妨げてしまうためです。キャンセルは、Organization がフリーズした後に進行すべきでない破壊的操作（アーティファクトの削除、レジストリへのプッシュ、保護された環境へのデプロイ）もカバーします。
- 読み取り専用 Organization から発生する新しいデプロイ、環境の変更、機能フラグの変更はブロックされます。過去のデプロイ状態と環境の詳細の読み取りは引き続き許可されます。

### 許可リストの原則

リクエストは、次のうち少なくとも 1 つが真である場合に、Organization Read-Only Mode の間に**許可されます**:

- それが読み取りである（`GET`、`HEAD`、`OPTIONS`）。
- それが認証リクエストである（サインイン、サインアウト、OAuth トークン、JWT 認証）。
- それが Git の読み取りである（`git-upload-pack`）。
- それがプラットフォームを稼働させ続けるために必要な内部 API 呼び出しである。
- それが移行または分離の制御プレーンの一部である（DMS、Topology Service、Organization の移行 / 分離エンドポイント）。

それ以外はすべてデフォルトで拒否されます。許可リストに載るコントローラ、アクション、エンドポイントの具体的なリストは [#594327](https://gitlab.com/gitlab-org/gitlab/-/work_items/594327) にあります。

### ユーザーに見える挙動 {#user-visible-behavior}

- その Organization のためにレンダリングされるすべてのページ（それが所有するグループおよびプロジェクトのページを含む）に、永続的なバナーが表示されます。文言は汎用的であり、内部的な reason やインフラの詳細（Cell、移行）を一切明かしません。たとえば: *「この Organization は現在、必須のメンテナンスが実行されているため読み取り専用モードです。読み取りは引き続き機能します。書き込み操作はしばらくしてから再試行してください。」*
- バナーは、既存のインスタンス全体のメンテナンスモードバナーと同じ面と Vue コンポーネントパターンを再利用し、インスタンス全体のフラグではなく Organization の `read_only?` 状態をキーとします。これにより、1 つのメカニズム、1 つのスタイリング箇所、アクセシビリティと国際化を追加する 1 つの箇所が保たれます。
- API レスポンスは、構造化されたエラーと適切な HTTP ステータス（時間で区切られた reason には `Retry-After` 付きの `503 Service Unavailable`、時間で区切られない reason には `403 Forbidden`）で読み取り専用を示します。正確なレスポンスボディとステータスマトリクスは実装の詳細です（[#594327](https://gitlab.com/gitlab-org/gitlab/-/work_items/594327) を参照）。
- Git プッシュは同等の汎用メッセージを返します: *「この Organization は現在読み取り専用モードであるため、Git プッシュは許可されていません。」*

### 監査可能性と観測性

`Organizations::Stateful` 上の既存の遷移ロギングおよびバリデーション mixin が再利用され、新しい監査パイプラインは導入されません。`read_only` への各エントリと各退出は、organization id、アクター（システム、ユーザー、自動化）、タイムスタンプ、reason を記録する Organization レベルの監査イベントを発行します。

### パフォーマンスとキャッシング

`Current.organization` はリクエストごとに 1 回解決されます。状態変更は既存の `after_transition` フックを介して任意のキャッシュを無効化します。

### ロールアウトと機能フラグ

- このメカニズムは、環境スコープと Organization スコープの両方の機能フラグでゲートされており、ロールアウトを Cohort ごとに進められます。
- GitLab.com では、まず内部/テスト Organization に対して有効にし、その後既存の Organization ロールアウト Cohort とともに展開します。
- Self-Managed と Dedicated では、デフォルトオフで提供します（*影響* を参照）。

## 影響

- Organization の移行で、Cell 全体（したがって無関係な Organization）をメンテナンスモードにする必要がなくなります。
- 同じメカニズムが分離有効化、インシデントのスコープ設定、billing/legal hold をカバーし、1 回限りのトグルの乱立を回避します。
- 強制は多くのレイヤ（コントローラ、Grape、GraphQL、GitAccess、Sidekiq）にわたって重複します。これは意図的なものです（多層防御）が、同期を保たねばならない面積は増加します。新しい書き込みエントリポイントはそれぞれ、Organization 読み取り専用を尊重するかどうかを明示的に宣言しなければなりません。
- Cell 全体の cron ワーカーは、org が所有するデータを反復する際にアクティブな Organization のフィルタを採用しなければならず、読み取り専用 Organization がフィルタアウトされることを表明するテストを持たなければなりません。これがないと、ロールアウト後に追加された新しい cron ワーカーが、まさに移動されようとしているデータをサイレントに変更してしまいます。
- 上記の強制レイヤをバイパスするコードパス（たとえば、移行内の生の SQL `UPDATE` や、コントローラ、Grape、GraphQL、`Gitlab::GitAccess` を通らない直接の ActiveRecord 書き込み）は、このイテレーションでは**カバーされません**。将来のイテレーションでは、多層防御としてサービスレイヤまたはモデルレイヤのガードを追加するかもしれません。
- インスタンス全体のメンテナンスモード（`Gitlab.maintenance_mode?`）は引き続き利用可能で、直交しています: 両方がアクティブな場合、より制限的な状態が勝ち、Organization 読み取り専用はインスタンスメンテナンスチェックをバイパスするコードパスを導入してはなりません。
- Self-Managed と Dedicated インスタンス（インスタンスごとに単一の Organization。[ADR 007](007_self_managed_dedicated_single_organization.md) を参照）はこのメカニズムを無料で継承しますが、実際には Organization ごとの分離の利点がないため、引き続きインスタンス全体のメンテナンスモードを使用すべきです。これらのトポロジーではフラグはデフォルトオフで提供されます。
- 読み取りが機能するのに書き込みが突然失敗すると、ユーザーは混乱するかもしれません。UX の文言と、所有するすべてのページにバナーを出す要件は、これを緩和するために存在します。

## 検討した代替案

### 1. ソース Cell でインスタンス全体のメンテナンスモードを再利用する

ソース Cell で `Gitlab.maintenance_mode?` を切り替えると書き込みはブロックされますが、その Cell 上の**すべての** Organization に対してブロックします。Cell が複数の Organization をホストするようになると、これは受け入れられません。

### 2. `project.repository_read_only` のみに依存する

このフラグは今日存在し、リポジトリストレージの移動中に使用されます。これは単一プロジェクトの Git レベルのプッシュのみをカバーし、REST、GraphQL、Sidekiq、コンテナレジストリ、パッケージ、リポジトリ以外の状態をカバーしません。これを唯一のメカニズムとして使用すると、移行中にほとんどの書き込みをサイレントに許可してしまいます。

### 3. データベースレイヤでの単一のチョークポイント

シャーディングキーをキーとする `BEFORE UPDATE` トリガーは、すべての書き込みを捕捉します。シャーディングキー（`organization_id`、`project_id`、`namespace_id`）はまだすべてのデータテーブルに普遍的に存在しているわけではありませんが、コードベースはその方向に動いています。カバレッジが完成すれば、トリガーはすべての書き込みで所有する Organization を解決できます。注意点:

- トリガーから素朴に表面化した `PG::Error` はユーザー体験が悪いですが、これは解決可能です: カスタム `SQLSTATE` を伴う PostgreSQL の [`RAISE`](https://www.postgresql.org/docs/17/plpgsql-errors-and-messages.html#PLPGSQL-STATEMENTS-RAISE) は、`pg` gem から汎用の `PG::ServerError` として表面化します（`pg` gem の型付きサブクラスは標準の SQLSTATE コードのみをカバーし、ユーザー定義のものはカバーしません）。次に ActiveRecord の PostgreSQL アダプタは例外を `translate_exception` を通じてルーティングし、サブクラス化したアダプタでこれを拡張してカスタム SQLSTATE にマッチさせ、専用の `ActiveRecord::OrganizationReadOnlyError`（`ActiveRecord::ReadOnlyError` のサブクラス）として再 raise できます。次にアプリケーションは単一の型付き例外を rescue し、それをコントローラレイヤの強制と同じユーザー向けレスポンス形に変えます。このマッピングが整えば、トリガーは実行可能な最後の防衛線のバックストップになります。
- これは Sidekiq ジョブがエンキューされることや、外部システムがリクエストを発行することを止めないため、アプリケーションレイヤのフィードバックは依然として必要です。
- トリガーのパフォーマンスはベンチマークが必要です。シャーディングキーがテーブル上に直接ない場合に join を通じて `organization_id` を解決しなければならない行ごとのトリガーは無料ではなく、特にホットな書き込みパスでは顕著です。

シャーディングキーのカバレッジが普遍的になった後に、これを**最後の防衛線**のセーフティネットとして再検討するかもしれませんが、それ単独では不十分です。

### 4. Topology Service / ルーターでブロックする

カットオーバー中にその Organization の書き込みをソース Cell から逸らすことは移行設計の一部ですが、それが唯一の強制にはなり得ません: 進行中のリクエスト、ソース Cell 上にすでにエンキューされた Sidekiq ジョブ、直接の管理者アクセスは、依然としてアプリケーションレイヤで止める必要があります。GraphQL もこの方法では簡単にブロックできません。スコープの Organization を判定するためにはリクエストボディを検査しなければならないからです。

### 5. Rack / パスベースのミドルウェアによる強制

URL を検査しパスパターンに基づいて潜在的に変更を伴うエンドポイントをブロックする Rack またはイングレスミドルウェアとして読み取り専用を実装するのは脆弱です: GraphQL だけでもパス/動詞のマッチングは不十分になります（1 つのエンドポイントがクエリとミューテーションの両方を提供し、スコープの Organization は、バッチ化されている可能性のあるリクエストボディをパースした後でないとわかりません）。代わりに使用するコントローラ / Grape / GraphQL / GitAccess アプローチについては *どこで強制されるか* を参照してください。

### 6. Organization 状態なしのトップレベルグループ読み取り専用

Organization 上ではなくトップレベルグループ / ネームスペースレベルで読み取り専用を定義することは、Organization が正規のテナントである Organizations ロードマップと整合しません。このアプローチでは Organization 自体は書き込み可能なままで、トップレベルグループのみがフリーズされ、Organization スコープのリソース（設定、監査イベント、その他 org が所有する状態）が移行中に変更可能なままになり、フリーズの目的を台無しにします。また、ルーティングとデータ移動のために Organization 抽象をすでに前提としている Cell と分離の作業を複雑にします。

### 7. Organization カラムではなくルートネームスペースから読み取り専用状態を導出する

`Organizations::Organization` に `state` カラムを追加する代わりの選択肢は、読み取り専用を Organization のルートネームスペースの `effective_state` から導出することです。これは短期的にはよりシンプルです（スキーマ変更なし、新しいステートマシンなし）。[#594327](https://gitlab.com/gitlab-org/gitlab/-/work_items/594327) で Open Question 1 として提起されました。

これは次の理由で却下されます:

- これは Organization レベルの読み取り専用をネームスペース状態に結合します。ネームスペースは独自のライフサイクル（削除、転送、アーカイブ）を持ち、曖昧な組み合わせ状態を生み出します。
- 将来のマルチ TLG Organization はネームスペース状態を集約しなければならず、集約ルール（いずれか vs すべて）自体がポリシーの決定であり、Organization レベルで一度表現するほうがよいものです。
- 監査、観測性、カットオーバー準備完了契約はすべて、単一で権威ある「この Organization は今読み取り専用か?」というシグナルを望みます。導出された状態はそのシグナルを N 個の行に分散させます。
- 状態はまた、Organization が*なぜ*読み取り専用なのか（migration、isolation、incident、billing、legal）を表現する必要もあります。そのメタデータは各ネームスペースではなく Organization に属します。

Organization レベルの状態カラムが、POC [!228743](https://gitlab.com/gitlab-org/gitlab/-/merge_requests/228743) で提供されるものです。

### 8. すべてのモデル上の ActiveRecord `before_create`/`update`/`destroy` フック

Organization に解決されるすべてのモデルに `before_create`、`before_update`、`before_destroy` コールバックを注入する concern を追加すれば、原理的にはコントローラ/Grape/GraphQL のカバレッジを網羅的にすることを要求せずに、モデルレイヤで書き込みを捕捉できます。

私たちはこのアプローチを却下します。なぜなら ActiveRecord コールバックは次によってバイパスされるからです:

- `update_columns`、`update_all`、`delete_all`、`upsert`、`upsert_all`、`insert`、`insert_all` — すべて設計上コールバックをスキップします。単数形の `insert` と `upsert` は、その `_all` 対応物に委譲する薄いラッパーであるため、コールバックとバリデーションを同様にスキップします。したがってバイパス面は、明示的なバルク形式（`update_all`、`delete_all`、`upsert_all`、`insert_all`）だけよりも広く、`update_columns`、単数形の `insert`/`upsert`、コネクション経由で実行される生の SQL もカバーします。
- 通常およびポストデプロイ移行内の生の SQL。
- Rake タスクや Rails コンソールからの直接の `INSERT`/`UPDATE`。
- Arel または `exec_query` を通るあらゆるもの。

コードベースで最も一般的なバルク書き込みのイディオムによってバイパスされるチョークポイントは、チョークポイントではありません。コールバックはまた、この ADR がカバーしようとしているものの大部分を構成する非データベースの書き込み面（Sidekiq エンキュー、Git プッシュ、コンテナレジストリ、LFS）にも役立ちません。

データベースレイヤのトリガー（代替案 #3）はこれらすべての下に位置し、最後の防衛線のセーフティネットに適した形です。

## 粒度

Organization 単位の読み取り専用で十分です。[ADR 008](008_non_isolated_organizations_gitlab_com.md) によれば、GitLab.com 上のトップレベルグループは Organization に転送されつつあり（デフォルトで 1:1）、「影響を受ける単位」は常に Organization です。したがって、より細かい粒度のトップレベルグループ単位またはプロジェクト単位の読み取り専用モードは必要ありません。

### Cell 間移行のスコープ

Cell 間の Organization 移行（主要なユースケース）では、カットオーバーの期間中、**Organization 全体**がソース Cell 上で読み取り専用にされます。これにはすべてのトップレベルグループ、ネームスペース、プロジェクト、その他 org が所有するリソースが含まれます。部分的な読み取り専用（一部の TLG がフリーズされ、他は書き込み可能）は明示的に**サポートされません**。理由は:

- 移行はすべての Organization 所有データをアトミックに移動します。任意のサブセットを書き込み可能なままにすると、宛先 Cell が調整できない行をまたぐ不整合が生じます。
- 上記のカットオーバー準備完了契約は Organization レベルで動作します（Sidekiq キューは `organization_id` でフィルタされます）。
- ADR 008 の 1:1 TLG-to-Organization 不変条件は、今日 GitLab.com 上では Organization ごとに通常 1 つの TLG しかないことを意味するため、部分的なフリーズには実用的なユースケースがまだありません。

## Open Questions

- 読み取り専用状態を GitLab-CLI やエディタ拡張にどう表面化させるか（別途 `X-GitLab-Organization-Read-Only` レスポンスヘッダー?）。
- 状態変更の直前に開始された長時間実行の書き込み操作（大規模なインポート、エクスポート、bulk-rebase）の挙動: キャンセル、ドレイン、失敗のいずれか? 上記の CI ポリシーはパイプラインをカバーしますが、これらはカバーしません。
- アプリケーションレイヤの強制に加えて、移行中に Organization へのすべての書き込みをブロックするデータベースレベルのバックストップとして Postgres の Row-Level Security（RLS）を使用すべきか?
- org が所有する行を変更する通常およびポストデプロイのスキーマ移行は、カットオーバーウィンドウとどう相互作用するか? 現在の立場は、「カットオーバー途中でデプロイしない」を運用ルールとして扱い、シャーディングキーのカバレッジが普遍的になった後にデータベースレイヤのバックストップ（代替案 #3）を再検討することですが、これは移行ツールの DRI と確認すべきです。
- BBM の契約: どの BBM がアクティブな Organization のフィルタを必要とするか、そしてカットオーバー準備完了チェックは BBM の進捗をどう読むか? [gitlab-org/gitlab#546321](https://gitlab.com/gitlab-org/gitlab/-/work_items/546321) と [&20404](https://gitlab.com/groups/gitlab-org/-/epics/20404) で追跡され、Organization Data Migration ブループリントで解決される予定です。
- 移動した Organization 上の LFK の挙動（ソース Cell に残された親/子行、カットオーバー後のソース Cell の LFK ワーカーの挙動）。[gitlab-org/gitlab#535508](https://gitlab.com/gitlab-org/gitlab/-/work_items/535508) で追跡され、Organization Data Migration ブループリントに属します。
