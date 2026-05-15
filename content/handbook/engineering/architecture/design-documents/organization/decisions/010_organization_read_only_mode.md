---
owning-stage: "~devops::tenant scale"
title: 'Organizations ADR 010: Organization Read-Only Mode（Organization 読み取り専用モード）'
description: 'Cell をまたぐ移行や分離有効化の際に使用される Organization 単位の読み取り専用状態を導入し、ソース Cell での書き込みをブロックしつつ読み取りは許可します。コントローラ、REST API、GraphQL、GitAccess、コンテナレジストリ、LFS、Sidekiq の各レイヤで強制されます。'
creation-date: "2026-04-28"
authors: [ "@abdwddd" ]
toc_hide: true
upstream_path: /handbook/engineering/architecture/design-documents/organization/decisions/010_organization_read_only_mode/
upstream_sha: 1e195b58b9f249ff10bd0e705106c320fee86141
translated_at: "2026-05-15T04:00:00Z"
translator: claude
stale: false
---

## コンテキスト

Organization をある Cell から別の Cell に移行する際（[Organization データ移行ブループリント](../../organization-data-migration/_index.md)を参照）、ソース Cell から宛先 Cell へデータがコピーされる期間が存在します。データの一貫性を保証するため、ソース Organization はカットオーバーの開始時点で書き込みの受け入れを停止しなければなりません。一方、ユーザーがロックアウトされず、進行中の読み取りトラフィック（clone、pull、ページ閲覧、GraphQL クエリ）が動作し続けるよう、読み取りは引き続き許可する必要があります。

Cohort B の基準（[Organization データ移行 ADR 001](../../organization-data-migration/decisions/001_cohort_b_criteria.md)）では、お客様が「移行中の短時間の読み取り専用ウィンドウ」を許容することを明示的に求めています。現在 GitLab には**インスタンス全体**のメンテナンスモード（[メンテナンスモード管理ガイド](https://gitlab.com/help/administration/maintenance_mode/_index)）しかなく、これは粒度が粗すぎます。ソース Cell 全体を読み取り専用にすると、その Cell を共有している他のすべての Organization もブロックされてしまいます。

私たちが必要とするのは、**単一の Organization** にスコープされた仕組みであり、以下を満たすものです:

- ソース Cell 上で、影響を受ける Organization に限って書き込みをブロックする。
- 同じ Cell 上の他のすべての Organization は完全に書き込み可能な状態のままにする。
- 状態を変更しうるすべてのレイヤ（コントローラ、REST API、GraphQL ミューテーション、Git push、コンテナレジストリへの push、LFS アップロード、Sidekiq ジョブ、内部サービス）で一貫して強制する。
- 観測可能で、監査可能で、元に戻せる。

### 関連する作業

この ADR は、反復的な PoC から生まれた設計を正式化するものです。これは、以前の TLG スコープおよび Rack ミドルウェアによるアプローチに取って代わります:

- 親エピック: [Organization buildout](https://gitlab.com/groups/gitlab-org/-/epics/20404)。
- 駆動 Issue: [POC: Organization-scoped read-only mode (controller-layer enforcement)](https://gitlab.com/gitlab-org/gitlab/-/work_items/594327)。
- 置き換えられた TLG スコープの PoC: [#590009](https://gitlab.com/gitlab-org/gitlab/-/issues/590009) と、その Step 2 実装である [!226983](https://gitlab.com/gitlab-org/gitlab/-/merge_requests/226983)。これらは Rack ミドルウェアとパスプレフィックスマッチングを使用していました。両方とも、`Current.organization` を起点としたコントローラレイヤでの強制を採用するためにクローズされました。
- 現行の Organization スコープの PoC: [!228743](https://gitlab.com/gitlab-org/gitlab/-/merge_requests/228743) は Step 1（Organization 状態マシン）と、実装計画の Step 2、3、5 の最初のカットを提供します。

## 決定

私たちは **Organization 読み取り専用モード**を導入します。これは Organization 単位の状態であり、`Organizations::Organization` 上のファーストクラスの遷移としてモデル化され、アプリケーション内のすべての書き込みサーフェスで一貫して強制されます。状態が `read_only` に設定されている間、読み取りは引き続き機能し、その Organization が所有するリソースに対する書き込みは拒否されます。

この状態には監査と可観測性のために記録される `reason`（migration、isolation、incident、billing、legal）が伴います。理由はバナーやエラーレスポンスでエンドユーザーに公開されず、ユーザーに見えるコピーは汎用的なものになります（*ユーザーに見える挙動*を参照）。

フリーズは**Organization 所有のデータ**に適用されます: トップレベルグループ、namespace、プロジェクト、およびそれらに含まれるリソースです。

### 状態モデル

read-only は、既存の `Organizations::Stateful` concern 上の新しい状態として追加されます。この concern はすでに Organization のライフサイクル（`unconfirmed`、`confirmed`、`active`、`deletion_scheduled`、`deletion_in_progress`）を駆動しています。遷移は `active ↔ read_only` に制限されます。任意の `deletion_*` 状態や、確認前の状態から `read_only` に入ることは許可されません。`read_only` への出入りはすべて、既存の遷移フックによって監査されます。

具体的な enum 値、イベント名、ヘルパーシグネチャは実装の詳細であり、[#594327](https://gitlab.com/gitlab-org/gitlab/-/work_items/594327) と [!228743](https://gitlab.com/gitlab-org/gitlab/-/merge_requests/228743) に存在します。

### 制御サーフェス

状態遷移は以下によって駆動されます:

- カットオーバー開始時のソース Cell 上の**移行ツール**（`reason: migration`）。Organization が完全に移行され、Topology Service でルーティングが切り替わった後、宛先 Cell 上でクリアされます。
- **分離有効化ツール**（`reason: isolation`）。
- インシデント、請求、リーガルホールドのための **Admin / SRE 制御**。Rails コンソールに加えて、インスタンスの Admin エリアと Rake タスクから利用できます。
- 移行、分離、インシデント対応中のオペレータ起点の遷移のための **Rails コンソール**。

**デフォルト Organization は読み取り専用モードから除外**されます。デフォルト Organization はインスタンスレベルのリソースと Self-Managed/Dedicated デプロイメントをホストしており（[ADR 007](007_self_managed_dedicated_single_organization.md)を参照）、これをフリーズすることはインスタンス全体をオフラインにすることに等しくなります。Admin エリアはこれに対する読み取り専用トグルを公開せず、内部の遷移ガードがその操作を拒否します。SM/Dedicated → dotCom 移行のケースでは、Organization 単位の読み取り専用ではなく、インスタンス全体のメンテナンスモードが正しいツールです。

### カットオーバーの準備状態

Cell 間の Organization 移行では、データのカットオーバー前の*ドレイン*フェーズとして Organization 読み取り専用モードを使用します。Redis は Cell 単位であり、宛先 Cell には**コピーされない**ため、カットオーバー時にソース Cell の Redis に滞留している Sidekiq ジョブはすべて失われます。したがって読み取り専用は、カットオーバーが進行する前に、Organization に対してソース Cell をチェック可能でインフライト 0 の状態に持っていかなければなりません。

準備状態のコントラクトは次のとおりです: カットオーバーは、ソース Cell 上の Organization について以下の**すべて**が真である場合にのみ進行します:

1. どの Sidekiq キューにも、その Organization を対象とする保留中のジョブがない。
2. その Organization を対象とする、スケジュール済みまたはリトライ中のジョブがない。
3. その Organization を対象とするジョブが実行中でない。
4. その Organization を対象とする Organization 単位の cron エントリがない（Cell 全体の cron エントリはカウントされない。それらのイテレーションはフィルタリングされる、*Sidekiq ジョブ*を参照）。
5. ソース Cell 上で進行中のスキーママイグレーションとポストデプロイマイグレーションが完了している。これにより宛先 Cell はスキーマ的に一貫したスナップショットを受け取れる。
6. Organization 所有のデータに触れるバッチ化されたバックグラウンドマイグレーションは、`read_only` への移行の一部としてソース Cell 上で**一時停止**され、カットオーバー後に宛先 Cell 上で**再開**される。マイグレーションの進捗状態はデータと共に移動し、作業自体が Organization スコープであるためです。

このチェックの使用方法には 3 つのルールが適用されます:

- **操作の順序。** `read_only` への移行は、準備状態チェックが開始される前に、すべてのエンキューパス（コントローラ、REST、GraphQL、Git アクセス）にわたって有効になっていなければなりません。そうでないと、チェックがカウントしている間に新しいジョブが投入されてしまいます。
- **ドレイン確認ウィンドウ。** チェックは短い間隔で少なくとも 2 回実行され、両方とも 0 を読み取らなければなりません。1 回だけのゼロは、ワーカーに今まさに拾われそうだったジョブと競合する可能性があります。
- **有界の待機、その後エスカレーション。** 設定されたウィンドウ内に準備状態が収束しない場合、カットオーバーツールは Organization をまだ保持しているワーカーを浮上させ、オペレータが待機、強制終了、中止のいずれを行うかを判断できるようにします。移行のカットオーバーは協調的で人間の監督下にあるステップであり、サイレントタイムアウトは許容されません。

準備状態チェックは、[Organization データ移行ブループリント](../../organization-data-migration/_index.md)におけるデータコピー / ルーティング切り替えステップの前提条件となるゲーティング条件です。これは admin エンドポイントとして公開され、ホットパスではありません。これを計算するために使用される具体的な Sidekiq API とリゾルバのシグネチャは実装の詳細であり、[#594327](https://gitlab.com/gitlab-org/gitlab/-/work_items/594327) に存在します。

### どこで強制されるか

強制は、既存の[`CurrentOrganization` コントローラ concern](https://gitlab.com/gitlab-org/gitlab/-/blob/master/app/controllers/concerns/current_organization.rb) を介してリクエストから解決された**現在の Organization** によってパラメータ化されます。この concern はリクエストごとに 1 回 `Current.organization` を設定します。以下のすべての強制レイヤは、Organization 自体を再解決するのではなく、その値を読み取ります。

私たちはこのために、意図的に Rack ミドルウェアを**導入しません**。パスや動詞ベースのミドルウェアによる強制は脆弱です（ルートは進化しますし、書き込み/読み取りの分離は HTTP メソッドに常に反映されるとは限らず、多くのエンドポイントはコントローラのロジックが実行された後にしか自分がどの Organization に属するかを知りません）。コントローラ / Grape / GraphQL / GitAccess の各レイヤはすでに、解決された Organization を持っているか、安価に取得でき、正規の強制サーフェスです（*代替案*を参照）。

各サーフェスごとのルール:

- **コントローラ。** 読み取り（`GET`、`HEAD`、`OPTIONS`）は許可。許可リストにない任意のアクションに対する書き込みは拒否。HTTP メソッドは「書き込みなし」の完璧なプロキシではありません。一部の `GET` は[DB 書き込みをトリガーしたり Sidekiq ジョブをエンキューしたりします](https://gitlab.com/gitlab-org/gitlab/-/issues/586370)（ログイン時の監査イベント、遅延バックフィル）。Geo は歴史的にこれらをケースごとに `Gitlab::Geo.secondary?` / `read_only?` ガードや `SkipSecondary` スタイルのワーカー concern でパッチしてきました。新たな発生も予想されます。それらのガードはこのチェックと統一されるべきであり、Sidekiq ドレイン（*Sidekiq ジョブ*を参照）はすり抜けが起きた場合のバックストップです。
- **REST API（Grape）。** 読み取りは許可。現在の Organization が読み取り専用の場合、`GET`/`HEAD` 以外のリクエストは短絡されます。
- **GraphQL。** クエリは許可、ミューテーションは拒否。チェックはリゾルバ実行前に走るので、バッチ化されたミューテーションでも部分的な状態が書き込まれることはありません。
- **Git アクセス（`Gitlab::GitAccess`）。** pull と clone（`git-upload-pack`）は許可、push（`git-receive-pack`）は拒否。HTTP と SSH の両方が `GitAccess` を通るためカバーされます。Wiki、スニペット、design リポジトリも同じルールに従います。
- **コンテナレジストリ。** `pull` は許可、`push`、`delete`、および `*` は拒否。
- **Git LFS。** ダウンロードは許可、アップロード、ロック、アンロック、verify は拒否。
- **Sidekiq。** Organization スコープのワーカーはドレイン、cron ワーカーは読み取り専用 Organization をスキップします。理由については下記の *Sidekiq ジョブ* を参照してください。これは他のサーフェスとアーキテクチャ的に異なります。
- **トークン、自動化、インテグレーション、Webhook。** パーソナルアクセストークン、グループ/プロジェクトアクセストークン、デプロイトークン、CI ジョブトークン、インバウンド Webhook はすべてコントローラ / Grape スタックを通り、上記のルールでカバーされます。「信頼できるインテグレーション」のための特別なバイパスはありません。書き込みによってトリガーされるアウトバウンド Webhook は、起点となる書き込みがブロックされるため、読み取り専用中には関係ありません。

具体的なクラス名、ファイルパス、エラーレスポンスの形状、HTTP ステータスコード（`503` vs `403`）は実装の詳細であり、[#594327](https://gitlab.com/gitlab-org/gitlab/-/work_items/594327) と PoC から生成された API ドキュメントに存在します。

### Sidekiq ジョブ

バックグラウンドジョブは、HTTP サイクルの外で実行されるため最もリスクの高い書き込みサーフェスです。さらに Cell 間移行では追加の制約があります: Redis は Cell 単位であり、**移行されない**ため、カットオーバー時にソース Cell の Redis に残っているジョブはすべて失われます。ポリシーはジョブのソースごとに分割され、下記の *ポリシー* で詳述します。

#### Organization スコープのルール

ワーカーが*Organization スコープ*であるとは、その引数のいずれかが Organization に解決される場合であり、明示的な `organization_id` を取る場合に限りません。モデルが（直接または推移的に）`organization_id` を持つ任意の引数が該当します。必要に応じて関連を辿り、[ADR 008](008_non_isolated_organizations_gitlab_com.md) のトップレベルグループ → Organization の 1:1 不変条件に従います。引数タイプごとの完全な分類はリゾルバ実装と共に存在します。

ワーカーが*クロス Organization*であるのは、その引数のいずれも Organization に解決されない場合か、Organization をまたぐコレクションを反復する場合（例: `Project.find_each` を反復する Cell 全体の cron ワーカー）のみです。反復ワーカーはワーカーレベルではクロス Organization ですが、行ごとには Organization スコープになり、反復中に読み取り専用 Organization をフィルタリングする必要があります（下記の *ポリシー* を参照）。

単一のリゾルバが、与えられた `(worker_class, args)` ペアに対して `Organization | :cross_org | :unresolved` を返します。これは `Gitlab::ApplicationContext` がジョブペイロードから `project` / `namespace` / `user` をすでに抽出する方法を反映しており、このロジックが存在する唯一の場所です。

#### ポリシー

ジョブがどのように到達したかをキーとした 2 つのルール:

- **Organization スコープのワーカーはドレインする。** Organization が `read_only` に入る時点ですでにキューイングされているか実行中のジョブは、フリーズの前にフロントドアのリクエストが受け入れられた作業を表します。それらはソース Cell 上で完了まで実行されなければなりません。Sidekiq サーバミドルウェアはそれらをスキップ**しません**。新しいエンキューはコントローラ、REST、GraphQL、Git アクセスの各レイヤで防止されるため、フリーズが有効になった後はこれ以上の Organization スコープのジョブはキューに投入されません。カットオーバーは上記の準備状態コントラクトでゲートされており、Organization のキューイング済み、スケジュール済み、リトライ中、実行中のすべてのジョブが完了した場合にのみ true を返します。これはサイレントスキップではなく、本物のドレインです。
- **cron ワーカーは読み取り専用 Organization と、そのプロジェクトおよび namespace をスキップする。** Sidekiq サーバミドルウェアが、解決された Organization が読み取り専用である cron ジョブの実行を構造化ログ付きで短絡します。Organization 所有のデータ（プロジェクト、namespace、その他 Organization に解決される行）を反復する Cell 全体の cron ワーカーは、フィルタコストを有界にするため、行ごとの述語ではなく結合（またはアクティブな Organization に対するサブセレクト）として表現された、アクティブな Organization へのフィルタを反復内に持たなければなりません。

フィルタは、参加するすべてのモデル上の単一の共有スコープとして実装されます。Organization 所有のデータを反復するすべての cron ワーカーは、`active` でない Organization に属する行が yield されないことを表明するテストを持たなければなりません。

#### 可観測性

スキップ、キャンセル、フィルタの各イベントは、`organization_id`、`worker`（クラス）、`jid` を含む構造化ログを発行します。同じデータを *カットオーバーの準備状態* エンドポイントが読み取るので、カットオーバーの判断と定常状態の可観測性は 1 つのシグナルを共有します。

この Sidekiq ポリシーは、すべてのバックグラウンドジョブの実行を継続させるインスタンス全体のメンテナンスモードよりも意図的に厳格です。

### CI/CD の挙動

- 読み取り専用 Organization 配下のプロジェクトに対する新しいパイプラインの作成（UI、API、スケジュールトリガー、手動トリガー）はブロックされます。
- パイプラインとジョブの状態、ログ、アーティファクトの読み取りは引き続き許可されます。
- **Organization が読み取り専用に入る前に開始されたジョブはキャンセルされます**。それらは長時間実行される可能性があり、そうしないとカットオーバーが無期限に保留されてしまうためです。キャンセルは、Organization がフリーズされた後は進行すべきでない破壊的操作（アーティファクト削除、レジストリへの push、保護された環境へのデプロイ）もカバーします。
- 読み取り専用 Organization から発生する新しいデプロイメント、環境変更、機能フラグの変更はブロックされます。過去のデプロイ状態と環境詳細の読み取りは引き続き許可されます。

### 許可リストの原則

Organization 読み取り専用モード中にリクエストが**許可される**のは、以下の少なくとも 1 つが真である場合です:

- 読み取り（`GET`、`HEAD`、`OPTIONS`）である。
- 認証リクエスト（サインイン、サインアウト、OAuth トークン、JWT 認証）である。
- Git の読み取り（`git-upload-pack`）である。
- プラットフォームの稼働を維持するために必要な内部 API 呼び出しである。
- 移行または分離のコントロールプレーン（DMS、Topology Service、Organization 移行 / 分離エンドポイント）の一部である。

それ以外はすべてデフォルトで拒否されます。許可リストに載っているコントローラ、アクション、エンドポイントの具体的なリストは [#594327](https://gitlab.com/gitlab-org/gitlab/-/work_items/594327) に存在します。

### ユーザーに見える挙動

- Organization に対してレンダリングされるすべてのページ（その所有するグループおよびプロジェクトページを含む）に永続的なバナーが表示されます。コピーは汎用的で、内部の理由やインフラの詳細（Cell、移行）は明らかにしません。例: *「現在この Organization は必須メンテナンスのため読み取り専用モードです。読み取りは引き続き機能します。書き込み操作は少し時間を置いて再試行してください。」*
- バナーは既存のインスタンス全体のメンテナンスモードバナーと同じサーフェスおよび Vue コンポーネントパターンを再利用しますが、インスタンス全体のフラグではなく Organization の `read_only?` 状態をキーとします。これにより、1 つの仕組み、スタイルを設定する 1 つの場所、アクセシビリティと国際化を追加する 1 つの場所が維持されます。
- API レスポンスは、構造化されたエラーと適切な HTTP ステータス（時間制限のある理由には `Retry-After` 付きの `503 Service Unavailable`、時間制限のない理由には `403 Forbidden`）で読み取り専用を通知します。正確なレスポンスボディとステータスのマトリックスは実装の詳細です（[#594327](https://gitlab.com/gitlab-org/gitlab/-/work_items/594327) を参照）。
- Git push は同等の汎用メッセージを返します: *「この Organization は現在読み取り専用モードのため、Git push は許可されていません。」*

### 監査可能性と可観測性

`Organizations::Stateful` 上の既存の遷移ログおよびバリデーション mixin が再利用されます。新しい監査パイプラインは導入されません。`read_only` への各エントリと `read_only` からの各退出は、organization id、アクター（システム、ユーザー、自動化）、タイムスタンプ、理由を記録する Organization レベルの監査イベントを発行します。

### パフォーマンスとキャッシング

`Current.organization` はリクエストごとに 1 回解決されます。状態変化は既存の `after_transition` フックを介して任意のキャッシュを無効化します。

### ロールアウトと機能フラグ

- 仕組みは環境スコープと Organization スコープの両方の機能フラグでゲートされており、コホートごとにロールアウトを進められます。
- GitLab.com では、まず内部/テスト Organization に対して有効化し、その後既存の Organization ロールアウトのコホートと並行して拡大します。
- Self-Managed および Dedicated では、デフォルトオフでリリースします（*帰結*を参照）。

## 帰結

- Organization の移行は、もはや Cell 全体（およびその結果として無関係な Organization 群）をメンテナンスモードに置く必要はありません。
- 同じ仕組みが分離有効化、インシデントスコーピング、請求/リーガルホールドをカバーし、ワンオフトグルの増殖を回避できます。
- 強制は多くのレイヤ（コントローラ、Grape、GraphQL、GitAccess、Sidekiq）にわたって複製されます。これは意図的なもの（多層防御）ですが、同期を保ち続けなければならないサーフェス領域が増えます。各新規書き込みエントリポイントは、Organization 読み取り専用を尊重するかどうかを明示的に宣言しなければなりません。
- Cell 全体の cron ワーカーは、Organization 所有のデータを反復する際にアクティブな Organization フィルタを採用しなければならず、読み取り専用 Organization が除外されることを表明するテストを持たなければなりません。これがないと、ロールアウト後に追加された新しい cron ワーカーが、まさに移動されようとしているデータをサイレントに変更してしまいます。
- 上記の強制レイヤをバイパスする任意のコードパス（例: マイグレーション内の生 SQL `UPDATE` や、コントローラ、Grape、GraphQL、`Gitlab::GitAccess` を通らない直接の ActiveRecord 書き込み）は、このイテレーションでは**カバーされません**。将来のイテレーションでは、多層防御としてサービスレイヤまたはモデルレイヤのガードが追加される可能性があります。
- インスタンス全体のメンテナンスモード（`Gitlab.maintenance_mode?`）は引き続き利用可能で、直交します。両方がアクティブな場合は、より制限的な状態が勝ちます。Organization 読み取り専用は、インスタンスメンテナンスチェックをバイパスするコードパスを導入してはなりません。
- Self-Managed および Dedicated インスタンス（インスタンスごとに単一 Organization、[ADR 007](007_self_managed_dedicated_single_organization.md) を参照）は、この仕組みを無料で継承しますが、実際には Organization 単位の分離による利点がないため、引き続きインスタンス全体のメンテナンスモードを使用すべきです。フラグはこれらのトポロジでは default-off で出荷されます。
- 読み取りは機能するのに書き込みが突然失敗するため、ユーザーが混乱する可能性があります。UX のコピーと、所有するすべてのページ上のバナー要件は、これを緩和するために存在します。

## 検討した代替案

### 1. ソース Cell でインスタンス全体のメンテナンスモードを再利用する

ソース Cell で `Gitlab.maintenance_mode?` をトグルすれば書き込みはブロックされますが、その Cell 上の**すべての** Organization に対してそれらをブロックします。Cell が複数の Organization をホストすると、これは受け入れがたいものとなります。

### 2. `project.repository_read_only` のみに依存する

このフラグは現在存在し、リポジトリストレージの移動中に使用されています。これは単一プロジェクトの Git レベルの push のみをカバーします。REST、GraphQL、Sidekiq、コンテナレジストリ、パッケージ、または非リポジトリ状態はカバーしません。これを唯一の仕組みとして使用すると、移行中にほとんどの書き込みがサイレントに許可されてしまいます。

### 3. データベースレイヤでの単一チョークポイント

シャーディングキーをキーとした `BEFORE UPDATE` トリガーは、すべての書き込みをキャッチします。シャーディングキー（`organization_id`、`project_id`、`namespace_id`）はまだすべてのデータテーブルに普遍的に存在しているわけではありませんが、コードベースはその方向に動いています。カバレッジが完了すれば、トリガーは書き込みごとに所有者の Organization を解決できるでしょう。それでもなお:

- トリガーベースのエラーはスタック深くで不透明な `PG::Error` として表面化し、ユーザー体験を悪化させます。
- これは Sidekiq ジョブのエンキューや外部システムからのリクエスト発行を停止しないため、アプリケーションレイヤのフィードバックは依然として必要です。

シャーディングキーのカバレッジが普遍化したら**最終ライン**の安全網として再検討するかもしれませんが、それ単独では不十分です。

### 4. Topology Service / ルータでブロックする

カットオーバー中に Organization の書き込みをソース Cell からルーティング先で逸らすことは移行設計の一部ですが、これだけが強制であってはなりません: インフライトのリクエスト、ソース Cell ですでにエンキューされた Sidekiq ジョブ、直接の admin アクセスは、依然としてアプリケーションレイヤで停止される必要があります。GraphQL もこの方法では簡単にブロックできません。なぜならスコープ内の Organization を判定するためにリクエストボディを検査しなければならないからです。

### 5. Rack / パスベースのミドルウェアによる強制

URL を検査し、パスパターンに基づいて変更の可能性のあるエンドポイントをブロックする Rack または ingress ミドルウェアとして読み取り専用を実装することは脆弱です: GraphQL だけでもパス/動詞のマッチングは不十分です（1 つのエンドポイントがクエリとミューテーションの両方を提供し、スコープ内の Organization は潜在的にバッチ化されたリクエストボディを解析した後にのみわかります）。代わりに使用するコントローラ / Grape / GraphQL / GitAccess アプローチについては *どこで強制されるか* を参照してください。

### 6. Organization 状態を持たないトップレベルグループ単位の読み取り専用

Organization ではなくトップレベルグループ / namespace レベルで読み取り専用を定義することは、Organization が正規のテナントである Organizations ロードマップと整合しません。このアプローチでは、Organization 自体は書き込み可能なままで、トップレベルグループのみがフリーズされます。これは Organization スコープのリソース（設定、監査イベント、その他 Organization 所有の状態）を移行中にミュータブルなまま残してしまい、フリーズの目的を打ち破ります。また、ルーティングおよびデータ移動のために Organization 抽象化をすでに前提としている Cell および分離作業を複雑化します。

### 7. Organization カラムではなくルート namespace から読み取り専用状態を導出する

`Organizations::Organization` に `state` カラムを追加する代替案は、Organization のルート namespace の `effective_state` から読み取り専用を導出することです。これは短期的にはよりシンプル（スキーマ変更も新しい状態マシンも不要）であり、[#594327](https://gitlab.com/gitlab-org/gitlab/-/work_items/594327) のオープンクエスチョン 1 として提起されました。

これは以下の理由で却下されます:

- これは Organization レベルの読み取り専用を namespace 状態と結合します。namespace 状態は独自のライフサイクル（削除、移管、アーカイブ）を持ち、曖昧な複合状態を生み出します。
- 将来のマルチ TLG Organization では namespace 状態を集約しなければならず、集約ルール（any 対 all）自体が、Organization レベルで一度表現したほうがよいポリシー判断です。
- 監査、可観測性、カットオーバー準備状態コントラクトはすべて、「この Organization は今読み取り専用か?」という単一の権威あるシグナルを欲します。導出状態はそのシグナルを N 行に分散させてしまいます。
- 状態は Organization が読み取り専用である*理由*（migration、isolation、incident、billing、legal）も表現する必要があります。そのメタデータは各 namespace ではなく Organization に属します。

Organization レベルの状態カラムは、PoC [!228743](https://gitlab.com/gitlab-org/gitlab/-/merge_requests/228743) で出荷されるものです。

## 粒度

Organization 単位の読み取り専用で十分です。[ADR 008](008_non_isolated_organizations_gitlab_com.md) によれば、GitLab.com 上のトップレベルグループは（デフォルトで 1:1 で）Organization に移管されつつあり、「影響を受ける単位」は常に Organization です。したがって、より細かい粒度のトップレベルグループ単位またはプロジェクト単位の読み取り専用モードは必要ありません。

### Cell 間移行のスコープ

Cell 間 Organization 移行（主要なユースケース）では、カットオーバーの期間中、ソース Cell 上で**Organization 全体**が読み取り専用に置かれます。これにはすべてのトップレベルグループ、namespace、プロジェクト、その他 Organization 所有のリソースが含まれます。部分的な読み取り専用（一部の TLG はフリーズ、他は書き込み可能）は明示的に**サポートされません**。理由は以下のとおりです:

- 移行は Organization 所有のデータをアトミックに移動します。任意のサブセットを書き込み可能なままにすると、宛先 Cell が調整できないクロス行の不整合が生じます。
- 上記のカットオーバー準備状態コントラクトは Organization レベルで動作します（Sidekiq キューは `organization_id` でフィルタされます）。
- ADR 008 の 1:1 TLG-to-Organization 不変条件は、現在 GitLab.com 上では Organization ごとに通常 1 つの TLG しかないことを意味するため、部分的なフリーズはまだ実用的なユースケースを持ちません。

## オープンクエスチョン

- 読み取り専用状態を GitLab-CLI とエディタ拡張機能に表面化する方法（別の `X-GitLab-Organization-Read-Only` レスポンスヘッダ?）。
- 状態変更の直前に開始された長時間実行の書き込み操作（大規模なインポート、エクスポート、bulk-rebase）の挙動: キャンセル、ドレイン、それとも失敗? 上記の CI ポリシーはパイプラインをカバーしますが、これらはカバーしません。
- アプリケーションレイヤの強制に加えて、データベースレベルのバックストップとして、移行中に Organization へのすべての書き込みをブロックするために Postgres の Row-Level Security (RLS) を使用すべきか?
