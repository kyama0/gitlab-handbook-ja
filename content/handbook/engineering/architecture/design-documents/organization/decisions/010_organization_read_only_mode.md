---
owning-stage: "~devops::tenant scale"
title: 'Organizations ADR 010: Organization Read-Only Mode'
description: 'Cell をまたぐ移行や分離の有効化の際に使用される Organization 単位の読み取り専用状態を導入します。ソース Cell での書き込みをブロックしつつ読み取りは許可し、コントローラ、REST API、GraphQL、GitAccess、コンテナレジストリ、LFS、Sidekiq の各レイヤで強制します。'
creation-date: "2026-04-28"
authors: [ "@abdwddd" ]
toc_hide: true
upstream_path: /handbook/engineering/architecture/design-documents/organization/decisions/010_organization_read_only_mode/
upstream_sha: "154fb2bd6436508aa2d90583cc235d5fe28b1705"
lastmod: "2026-05-27T17:43:35+12:00"
translated_at: "2026-05-27T00:00:00Z"
translator: claude
stale: false
---

## Context

Organization をある Cell から別の Cell へ移行する際
（[Organization Data Migration blueprint](../../organization-data-migration/_index.md)を参照）、
ソース Cell から宛先 Cell へデータがコピーされる期間があります。データの整合性を
保証するため、カットオーバーが開始されたらソースの Organization は書き込みの受け付けを
停止しなければなりません。一方で、ユーザーが締め出されず、進行中の読み取りトラフィック
（クローン、プル、ページビュー、GraphQL クエリ）が機能し続けるよう、読み取りは
引き続き許可する必要があります。

Cohort B の基準
（[Cohort B criteria](../../organization-data-migration/cohorts/criteria_cohort_b.md)）
では、顧客が「移行中の短い読み取り専用ウィンドウ」を受け入れることを明示的に
求めています。今日、GitLab には **インスタンス全体** の Maintenance Mode
（[Maintenance Mode administration guide](https://gitlab.com/help/administration/maintenance_mode/_index)）
しかありませんが、これは粒度が粗すぎます。ソース Cell 全体を読み取り専用にすると、
その Cell を共有する他のすべての Organization がブロックされてしまいます。

私たちには **単一の Organization** にスコープされた、次のようなメカニズムが必要です。

- 影響を受ける Organization に対してのみ、ソース Cell での書き込みをブロックする。
- 同じ Cell 上の他のすべての Organization は完全に書き込み可能なままにする。
- 状態を変更しうるすべてのレイヤ（コントローラ、REST API、GraphQL ミューテーション、
  Git プッシュ、Container Registry プッシュ、LFS アップロード、Sidekiq ジョブ、内部サービス）
  にわたって一貫して強制される。
- 観測可能で、監査可能で、復帰可能である。

### Related work

この ADR は、反復的な POC から生まれた設計を形式化したものです。これは、以前の
TLG スコープのアプローチや Rack ミドルウェアのアプローチに取って代わるものです。

- 親 epic: [Organization buildout](https://gitlab.com/groups/gitlab-org/-/epics/20404)。
- ドライビング issue: [POC: Organization-scoped read-only mode (controller-layer enforcement)](https://gitlab.com/gitlab-org/gitlab/-/work_items/594327)。
- 置き換えられた TLG スコープの POC: [#590009](https://gitlab.com/gitlab-org/gitlab/-/issues/590009)
  とその Step 2 実装 [!226983](https://gitlab.com/gitlab-org/gitlab/-/merge_requests/226983)。
  Rack ミドルウェアとパスプレフィックスのマッチングを使用していました。両方とも、
  `Current.organization` をキーとしたコントローラレイヤでの強制を優先してクローズされました。
- 現在の Organization スコープの POC: [!228743](https://gitlab.com/gitlab-org/gitlab/-/merge_requests/228743)
  は、Step 1（Organization ステートマシン）と、実装計画の Step 2、3、5 の最初の試作版を
  提供します。

## Decision

私たちは **Organization Read-Only Mode** を導入します。これは Organization 単位の状態であり、
`Organizations::Organization` 上のファーストクラスの遷移としてモデル化され、アプリケーション内の
あらゆる書き込み面にわたって一貫して強制されます。状態が `read_only` に設定されている間、
読み取りは引き続き機能し、その Organization が所有するリソースに対する書き込みは拒否されます。

この状態には、監査と観測可能性のために記録される `reason`（migration、isolation、incident、
billing、legal）が伴います。reason はバナーやエラーレスポンスでエンドユーザーに表示されることは
ありません。ユーザーに見えるコピーは汎用的なものです（*User-visible behavior* を参照）。

このフリーズは **Organization が所有するデータ**（トップレベルグループ、namespace、プロジェクト、
およびそれらが含むリソース）に適用されます。

### State model

read-only は、既存の `Organizations::Stateful` concern に新しい状態として追加されます。この concern は
すでに Organization のライフサイクル（`unconfirmed`、`confirmed`、`active`、`deletion_scheduled`、
`deletion_in_progress`）を駆動しています。遷移は `active ↔ read_only` に制限されており、いずれかの
`deletion_*` 状態や確認前の状態から `read_only` に入ることは許可されません。`read_only` への
すべての出入りは、既存の遷移フックを介して監査されます。

具体的な enum 値、イベント名、ヘルパーのシグネチャは実装の詳細であり、
[#594327](https://gitlab.com/gitlab-org/gitlab/-/work_items/594327)
と [!228743](https://gitlab.com/gitlab-org/gitlab/-/merge_requests/228743) にあります。

### Control surfaces

状態遷移は次によって駆動されます。

- カットオーバー開始時のソース Cell 上での **移行ツール**（`reason: migration`）。
  Organization が完全に移行され、Topology Service でルーティングが切り替えられたら、
  宛先 Cell 上でクリアされます。
- **分離の有効化ツール**（`reason: isolation`）。
- インシデント、billing、legal ホールド向けの **Admin / SRE のコントロール**。
  Rails コンソールに加えて、インスタンスの Admin エリアと Rake タスクを通じて公開されます。
- 移行、分離、またはインシデント対応中のオペレータ起点の遷移向けの **Rails コンソール**。

**デフォルトの Organization は read-only モードから除外されます**。デフォルトの Organization は
インスタンスレベルのリソースと Self-Managed/Dedicated のデプロイ
（[ADR 007](007_self_managed_dedicated_single_organization.md)を参照）をホストしており、
これをフリーズすることはインスタンス全体をオフラインにすることと同等になります。Admin エリアでは
これに対する読み取り専用トグルを公開せず、基盤となる遷移ガードがこの操作を拒否します。
SM/Dedicated → dotCom の移行ケースでは、Organization 単位の read-only ではなく、
インスタンス全体の Maintenance Mode が適切なツールです。

### Cutover readiness

Cell 間の Organization 移行は、データのカットオーバー前の *ドレイン* フェーズとして
Organization Read-Only Mode を使用します。Redis は Cell ごとであり、宛先 Cell には
**コピーされない** ため、カットオーバー時にソース Cell の Redis に残っている Sidekiq ジョブは
すべて失われます。したがって read-only は、カットオーバーが進む前に、その Organization について
ソース Cell をチェック可能で実行中ジョブがゼロの状態に駆動しなければなりません。

readiness の契約は次のとおりです。カットオーバーは、ソース Cell 上のその Organization について、
**以下のすべて** が満たされた場合にのみ進行します。

1. いずれの Sidekiq キューにも、その Organization を対象とする保留中のジョブがない。
2. その Organization を対象とするスケジュール済みまたはリトライ中のジョブがない。
3. その Organization を対象とする実行中のジョブがない。
4. その Organization を対象とする Organization 単位の cron エントリがない（Cell 全体の
   cron エントリはカウントされません。その反復処理はフィルタされます。*Sidekiq jobs* を参照）。
5. ソース Cell 上で進行中のスキーマ移行とポストデプロイ移行が完了している。これにより、
   宛先 Cell はスキーマ的に整合性のあるスナップショットを受け取ります。
6. Organization が所有するデータに触れるバッチバックグラウンド移行が、`read_only` に入る一環として
   ソース Cell 上で **一時停止** され、カットオーバー後に宛先 Cell 上で **再開** されます。これは、
   移行の進捗状態がデータとともに移動し、作業自体が Organization スコープであるためです。

このチェックの使い方には 3 つのルールが適用されます。

- **操作の順序。** `read_only` への移行は、readiness チェックが開始される前に、すべての
  エンキューパス（コントローラ、REST、GraphQL、Git アクセス）にわたって有効になっていなければなりません。
  そうでないと、チェックがカウントしている最中に新しいジョブが入ってきてしまいます。
- **ドレイン確認ウィンドウ。** チェックは短い間隔を空けて少なくとも 2 回実行され、両方の実行で
  ゼロを読み取る必要があります。単発のゼロは、ワーカーにまさに拾われようとしていたジョブと競合する
  可能性があります。
- **有界の待機、その後エスカレーション。** readiness が設定されたウィンドウ内に収束しない場合、
  カットオーバーツールはその Organization をまだ保持しているワーカーを表面化させ、待つか、kill するか、
  中止するかをオペレータが判断できるようにします。移行のカットオーバーは、人間が監督する協調的な
  ステップです。サイレントなタイムアウトは許容されません。

readiness チェックは、
[Organization Data Migration blueprint](../../organization-data-migration/_index.md) における
データコピー / ルーティング切り替えのステップのゲーティング前提条件です。これは admin
エンドポイントとして公開されており、ホットパスではありません。それを計算するために使用される
具体的な Sidekiq API やリゾルバのシグネチャは実装の詳細であり、
[#594327](https://gitlab.com/gitlab-org/gitlab/-/work_items/594327) にあります。

### Where it is enforced

強制は、既存の
[`CurrentOrganization` コントローラ concern](https://gitlab.com/gitlab-org/gitlab/-/blob/master/app/controllers/concerns/current_organization.rb)
を介してリクエストから解決される **現在の Organization** によってパラメータ化されます。この concern は、
リクエストごとに 1 回 `Current.organization` を設定します。以下のすべての強制レイヤは、Organization 自体を
再解決するのではなく、その値を読み取ります。

私たちはこのために Rack ミドルウェアを **意図的に導入しません**。パスおよび動詞ベースの
ミドルウェア強制は脆弱です（ルートは進化し、書き込み/読み取りの区別が常に HTTP メソッドに
反映されるとは限らず、多くのエンドポイントはコントローラロジックが実行された後でなければ
どの Organization に属するかが分からない）。コントローラ / Grape / GraphQL / GitAccess レイヤは、
解決済みの Organization をすでに持っているか、安価に取得でき、正規の強制面です（*Alternatives* を参照）。

面ごとのルールは次のとおりです。

- **コントローラ。** 読み取り（`GET`、`HEAD`、`OPTIONS`）は許可。許可リストにない
  アクションに対する書き込みは拒否されます。HTTP メソッドは「書き込みなし」の完全な代理ではありません。
  一部の `GET` は
  [DB 書き込みをトリガーしたり Sidekiq ジョブをエンキューしたり](https://gitlab.com/gitlab-org/gitlab/-/issues/586370)
  します（ログイン時の監査イベント、遅延バックフィル）。Geo は歴史的にこれらを
  `Gitlab::Geo.secondary?` / `read_only?` ガードや `SkipSecondary` スタイルのワーカー concern で
  ケースバイケースにパッチしてきました。新たな発生が予想されます。これらのガードはこのチェックと
  統合されるべきであり、すり抜けたものに対しては Sidekiq のドレイン（*Sidekiq jobs* を参照）が
  バックストップとなります。
- **REST API（Grape）。** 読み取りは許可。現在の Organization が読み取り専用の場合、
  `GET`/`HEAD` 以外のリクエストはショートサーキットされます。
- **GraphQL。** クエリは許可。ミューテーションは拒否されます。チェックはリゾルバの実行前に
  実行されるため、バッチミューテーションについて部分的な状態が書き込まれることはありません。
- **Git アクセス（`Gitlab::GitAccess`）。** プルとクローン（`git-upload-pack`）は許可。
  プッシュ（`git-receive-pack`）は拒否されます。HTTP と SSH の両方がともに `GitAccess` を
  通るため、両方をカバーします。Wiki、スニペット、デザインリポジトリも同じルールに従います。
- **Container Registry。** `pull` は許可。`push`、`delete`、`*` は拒否されます。
- **Git LFS。** ダウンロードは許可。アップロード、ロック、アンロック、verify は拒否されます。
- **Sidekiq。** Organization スコープのワーカーはドレインし、cron ワーカーは読み取り専用の
  Organization をスキップします。その根拠については下記の *Sidekiq jobs* を参照してください。
  これは他の面とはアーキテクチャ的に異なります。
- **トークン、自動化、インテグレーション、webhook。** パーソナルアクセストークン、
  グループ/プロジェクトアクセストークン、デプロイトークン、CI ジョブトークン、インバウンドの
  webhook は、すべてコントローラ / Grape スタックを通り、上記のルールでカバーされます。
  「信頼されたインテグレーション」のための特別なバイパスはありません。書き込みによってトリガーされる
  アウトバウンドの webhook は、その起点となる書き込みがブロックされるため、read-only 中には
  関係ありません。

具体的なクラス名、ファイルパス、エラーレスポンスの形状、HTTP ステータスコード（`503` か `403` か）は
実装の詳細であり、[#594327](https://gitlab.com/gitlab-org/gitlab/-/work_items/594327) と POC から
生成された API ドキュメントにあります。

### Sidekiq jobs

バックグラウンドジョブは、HTTP サイクルの外で実行されるため、最もリスクの高い書き込み面です。
そして Cell 間の移行では、追加の制約があります。Redis は Cell ごとであり、**移行されない** ため、
カットオーバー時にソース Cell の Redis に残されたジョブはすべて失われます。ポリシーはジョブの
ソースによって分かれており、下記の *Policy* で詳述します。

#### Org-scoping rule

ワーカーは、明示的な `organization_id` を取る場合だけでなく、その引数のいずれかが Organization に
解決される場合に *org-scoped* です。（直接的または推移的に）`organization_id` を持つモデルの引数は
いずれも該当し、必要に応じて関連を辿り、
[ADR 008](008_non_isolated_organizations_gitlab_com.md) の 1:1 のトップレベルグループ → Organization の
不変条件に従います。引数タイプごとの完全な分類はリゾルバの実装にあります。

ワーカーは、その引数のいずれも Organization に解決されない場合、または複数の Organization にまたがる
コレクションを反復処理する場合（例: `Project.find_each` を反復処理する Cell 全体の cron ワーカー）に
のみ *cross-org* です。反復処理するワーカーは、ワーカーレベルでは cross-org ですが、行ごとには
org-scoped になり、反復処理中に読み取り専用の Organization をフィルタしなければなりません
（下記の *Policy* を参照）。

単一のリゾルバが、与えられた `(worker_class, args)` のペアに対して
`Organization | :cross_org | :unresolved` を返します。これは、`Gitlab::ApplicationContext` が
すでにジョブのペイロードから `project` / `namespace` / `user` を抽出する方法を踏襲しており、
このロジックが存在する唯一の場所です。

#### Policy

ジョブがどのようにそこに入ったかをキーとした 2 つのルールです。

- **Organization スコープのワーカーはドレインする。** Organization が `read_only` に入ったときに
  すでにキューに入っているか実行中のジョブは、フリーズの前にそのフロントドアのリクエストが
  受け付けられた作業を表します。それらはソース Cell 上で完了まで実行されなければなりません。
  Sidekiq サーバーミドルウェアはそれらを **スキップしません**。新しいエンキューは、コントローラ、
  REST、GraphQL、Git アクセスのレイヤで防止されるため、フリーズが有効になれば、それ以上の
  Organization スコープのジョブがキューに入ることはありません。カットオーバーは上記の readiness の
  契約でゲートされ、その契約はその Organization についてキューに入っているジョブ、スケジュール済みの
  ジョブ、リトライ中のジョブ、実行中のジョブのすべてが完了したときにのみ true を返します。
  これはサイレントなスキップではなく、真のドレインです。
- **cron ワーカーは読み取り専用の Organization とそのプロジェクトおよび namespace をスキップする。**
  Sidekiq サーバーミドルウェアが、解決された Organization が読み取り専用である cron ジョブの実行を、
  構造化ログとともにショートサーキットします。Organization が所有するデータ（プロジェクト、
  namespace、その他 Organization に解決される行）を反復処理する Cell 全体の cron ワーカーは、
  反復処理の内部でアクティブな Organization にフィルタしなければなりません。これは、行ごとの述語では
  なく、結合（またはアクティブな Organization に対するサブセレクト）として表現され、フィルタの
  コストが有界になるようにします。

フィルタは、参加するすべてのモデル上の単一の共有スコープとして実装されます。Organization が所有する
データを反復処理するすべての cron ワーカーは、`active` でない Organization に属する行が yield されない
ことをアサートするテストを持たなければなりません。

#### Observability

すべてのスキップ、キャンセル、フィルタのイベントは、`organization_id`、`worker`（クラス）、`jid` を
伴う構造化ログを発行します。同じデータが *Cutover readiness* エンドポイントの読み取り元であり、
カットオーバーの判断と定常状態の観測可能性は 1 つのシグナルを共有します。

この Sidekiq ポリシーは、すべてのバックグラウンドジョブを実行し続けさせるインスタンス全体の
Maintenance Mode よりも、意図的に厳格になっています。

### CI/CD behavior

- 読み取り専用の Organization 配下のプロジェクトに対する新しいパイプライン（UI、API、
  スケジュールトリガー、手動トリガー）の作成はブロックされます。
- パイプラインやジョブの状態、ログ、アーティファクトの読み取りは引き続き許可されます。
- **Organization が読み取り専用に入る前に開始されたジョブはキャンセルされます**。長時間実行される
  可能性があり、そうでなければカットオーバーを無期限に保留させてしまうためです。キャンセルは、
  Organization がフリーズされたら進行すべきでない破壊的な操作（アーティファクトの削除、レジストリへの
  プッシュ、保護された環境へのデプロイ）もカバーします。
- 読み取り専用の Organization を起点とする新しいデプロイ、環境の変更、フィーチャーフラグの変更は
  ブロックされます。過去のデプロイ状態や環境の詳細の読み取りは引き続き許可されます。

### Allowlist principles

リクエストは、次の少なくとも 1 つが true の場合に、Organization Read-Only Mode 中に
**許可** されます。

- それが読み取り（`GET`、`HEAD`、`OPTIONS`）である。
- それが認証リクエスト（サインイン、サインアウト、OAuth トークン、JWT 認証）である。
- それが Git の読み取り（`git-upload-pack`）である。
- それがプラットフォームを稼働させ続けるために必要な内部 API 呼び出しである。
- それが移行または分離のコントロールプレーン（DMS、Topology Service、Organization の移行 / 分離の
  エンドポイント）の一部である。

それ以外はすべてデフォルトで拒否されます。許可リストに含まれるコントローラ、アクション、
エンドポイントの具体的なリストは
[#594327](https://gitlab.com/gitlab-org/gitlab/-/work_items/594327) にあります。

### User-visible behavior

- その Organization 向けにレンダリングされるすべてのページ（それが所有するグループおよび
  プロジェクトのページを含む）に、永続的なバナーが表示されます。コピーは汎用的なもので、
  内部的な reason やインフラの詳細（Cell、移行）を明らかにしません。例:
  *"This Organization is currently in read-only mode while essential maintenance is performed.
  Reads will continue to work; please retry write operations shortly."*
- このバナーは、既存のインスタンス全体の Maintenance Mode バナーと同じ面と Vue コンポーネントの
  パターンを再利用し、インスタンス全体のフラグではなく Organization の `read_only?` 状態をキーとします。
  これにより、メカニズムは 1 つ、スタイルを当てる場所は 1 つ、アクセシビリティと国際化を追加する場所も
  1 つに保たれます。
- API レスポンスは、構造化されたエラーと適切な HTTP ステータス（時間制限のある reason の場合は
  `Retry-After` を伴う `503 Service Unavailable`、時間制限のない reason の場合は `403 Forbidden`）で
  読み取り専用を通知します。正確なレスポンスボディとステータスのマトリクスは実装の詳細です
  （[#594327](https://gitlab.com/gitlab-org/gitlab/-/work_items/594327) を参照）。
- Git プッシュは同等の汎用的なメッセージを返します: *"Git push is not allowed because this
  Organization is currently in read-only mode."*

### Auditability and observability

`Organizations::Stateful` 上の既存の遷移ログと検証ミックスインが再利用され、新しい監査パイプラインは
導入されません。`read_only` への各出入りは、organization id、アクター（システム、ユーザー、自動化）、
タイムスタンプ、reason を記録する Organization レベルの監査イベントを発行します。

### Performance and caching

`Current.organization` はリクエストごとに 1 回解決されます。状態の変更は、既存の `after_transition`
フックを介して任意のキャッシュを無効化します。

### Rollout and feature flags

- このメカニズムは、環境スコープと Organization スコープの両方のフィーチャーフラグでゲートされるため、
  ロールアウトをコホート単位で進められます。
- GitLab.com では、まず内部/テスト用の Organization に対して有効にし、その後、既存の Organization
  ロールアウトコホートに合わせて拡大します。
- Self-Managed と Dedicated では、デフォルトオフで提供します（*Consequences* を参照）。

## Consequences

- Organization の移行において、Cell 全体（したがって無関係な Organization）を Maintenance Mode に
  する必要がなくなります。
- 同じメカニズムが分離の有効化、インシデントのスコープ設定、billing/legal ホールドをカバーし、
  1 回限りのトグルの乱立を回避します。
- 強制は多くのレイヤ（コントローラ、Grape、GraphQL、GitAccess、Sidekiq）にわたって重複します。
  これは意図的なもの（多層防御）ですが、同期を保ち続けなければならない面積を増やします。新しい
  書き込みエントリポイントはそれぞれ、Organization の読み取り専用を尊重するかどうかを明示的に
  宣言しなければなりません。
- Cell 全体の cron ワーカーは、Organization が所有するデータを反復処理する際にアクティブな
  Organization フィルタを採用しなければならず、読み取り専用の Organization がフィルタされることを
  アサートするテストを持たなければなりません。これがないと、ロールアウト後に追加された新しい cron
  ワーカーが、まさに移動されようとしているデータをサイレントに変更してしまいます。
- 上記の強制レイヤをバイパスするコードパス（例: 移行内の生 SQL の `UPDATE` や、コントローラ、Grape、
  GraphQL、`Gitlab::GitAccess` を通らない直接的な ActiveRecord 書き込み）は、このイテレーションでは
  **カバーされません**。将来のイテレーションでは、多層防御としてサービスレイヤまたはモデルレイヤの
  ガードを追加する可能性があります。
- インスタンス全体の Maintenance Mode（`Gitlab.maintenance_mode?`）は引き続き利用可能であり、
  直交しています。両方がアクティブな場合は、より制限的な状態が優先され、Organization の読み取り専用は
  インスタンスのメンテナンスチェックをバイパスするコードパスを導入してはなりません。
- Self-Managed と Dedicated のインスタンス（インスタンスごとに単一の Organization、
  [ADR 007](007_self_managed_dedicated_single_organization.md) を参照）は、このメカニズムを
  無償で継承しますが、実際には Organization 単位の分離による利点がないため、引き続きインスタンス全体の
  Maintenance Mode を使用すべきです。これらのトポロジーでは、フラグはデフォルトオフで提供されます。
- 読み取りは機能するのに書き込みが突然失敗すると、ユーザーが混乱する可能性があります。UX コピーと、
  所有するすべてのページにバナーを表示する要件は、これを緩和するために存在します。

## Alternatives Considered

### 1. Reuse instance-wide Maintenance Mode on the source Cell

ソース Cell 上で `Gitlab.maintenance_mode?` をトグルすると書き込みはブロックされますが、その Cell 上の
**すべての** Organization に対してそれらをブロックします。Cell が複数の Organization をホストするように
なると、これは受け入れられません。

### 2. Rely solely on `project.repository_read_only`

このフラグは今日存在し、リポジトリストレージの移動中に使用されます。これは単一プロジェクトの
Git レベルのプッシュのみをカバーし、REST、GraphQL、Sidekiq、コンテナレジストリ、パッケージ、
リポジトリ以外の状態をカバーしません。これを唯一のメカニズムとして使用すると、移行中にほとんどの
書き込みをサイレントに許可してしまいます。

### 3. Single chokepoint at the database layer

シャーディングキーをキーとした `BEFORE UPDATE` トリガーは、すべての書き込みを捕捉します。
シャーディングキー（`organization_id`、`project_id`、または `namespace_id`）はまだすべてのデータ
テーブルに普遍的に存在しているわけではありませんが、コードベースはその方向に進んでいます。
カバレッジが完了すれば、トリガーはすべての書き込みで所有する Organization を解決できます。
それでもなお:

- トリガーベースのエラーは、スタックの深いところで不透明な `PG::Error` として表面化し、貧弱な
  ユーザー体験を生み出します。
- これは Sidekiq ジョブのエンキューや外部システムからのリクエストの発行を止めないため、
  アプリケーションレイヤのフィードバックは依然として必要です。

シャーディングキーのカバレッジが普遍的になったら、これを **最終ライン** のセーフティネットとして
再検討するかもしれませんが、これ単独では十分ではありません。

### 4. Block at the Topology Service / router

カットオーバー中にその Organization の書き込みルーティングをソース Cell から逸らすことは移行設計の
一部ですが、唯一の強制にはなり得ません。実行中のリクエスト、すでにソース Cell 上でエンキューされた
Sidekiq ジョブ、直接の admin アクセスは、依然としてアプリケーションレイヤで止める必要があります。
また、GraphQL はこの方法では簡単にはブロックできません。スコープ内の Organization を判定するために
リクエストボディを調べなければならないためです。

### 5. Rack / path-based middleware enforcement

URL を検査し、パスパターンに基づいて変更を伴う可能性のあるエンドポイントをブロックする Rack または
ingress ミドルウェアとして read-only を実装することは脆弱です。GraphQL だけでも、パス/動詞のマッチングは
不十分になります（1 つのエンドポイントがクエリとミューテーションの両方を提供し、スコープ内の
Organization は、バッチ化される可能性のあるリクエストボディをパースした後でのみ分かる）。
代わりに使用されるコントローラ / Grape / GraphQL / GitAccess のアプローチについては、
*Where it is enforced* を参照してください。

### 6. Top-level group read-only without an Organization state

Organization ではなくトップレベルグループ / namespace のレベルで read-only を定義することは、
Organization が正規のテナントである Organizations のロードマップと整合しません。このアプローチでは
Organization 自体は書き込み可能なままで、トップレベルグループのみがフリーズされるため、移行中に
Organization スコープのリソース（設定、監査イベント、その他 Organization が所有する状態）が変更可能なまま
となり、フリーズの目的を損ないます。また、ルーティングとデータ移動のためにすでに Organization の抽象化を
前提としている Cell と分離の作業も複雑にします。

### 7. Derive read-only state from root namespaces instead of an Organization column

`Organizations::Organization` に `state` カラムを追加する代替案として、Organization のルート namespace の
`effective_state` から read-only を導出する方法があります。これは短期的にはよりシンプルで（スキーマ変更も
新しいステートマシンも不要）、[#594327](https://gitlab.com/gitlab-org/gitlab/-/work_items/594327) の
Open Question 1 として提起されました。

これは次の理由で却下されます。

- Organization レベルの read-only を namespace の状態に結合することになります。namespace は独自の
  ライフサイクル（削除、移管、アーカイブ）を持ち、曖昧な複合状態を生み出すことになります。
- 将来のマルチ TLG Organization では namespace の状態を集約しなければならなくなり、集約ルール
  （any か all か）自体が、Organization レベルで一度だけ表現したほうがよいポリシー判断です。
- 監査、観測可能性、カットオーバー readiness の契約はいずれも、「この Organization は今、読み取り専用か?」
  という単一の権威あるシグナルを求めています。導出された状態は、そのシグナルを N 個の行に分散させて
  しまいます。
- この状態は、Organization が読み取り専用である *理由*（migration、isolation、incident、billing、
  legal）も表現する必要があります。そのメタデータは、各 namespace ではなく Organization に属します。

Organization レベルの状態カラムは、POC [!228743](https://gitlab.com/gitlab-org/gitlab/-/merge_requests/228743)
で提供されているものです。

## Granularity

Organization 単位の read-only で十分です。[ADR 008](008_non_isolated_organizations_gitlab_com.md) の
とおり、GitLab.com 上のトップレベルグループは Organization に（デフォルトで 1:1 で）移管されているため、
「影響を受ける単位」は常に Organization です。したがって、より細かい粒度のトップレベルグループ単位や
プロジェクト単位の read-only モードは不要です。

### Cell-to-Cell migration scope

Cell 間の Organization 移行（主要なユースケース）では、カットオーバーの期間中、ソース Cell 上で
**Organization 全体** が読み取り専用に設定されます。これには、すべてのトップレベルグループ、namespace、
プロジェクト、その他 Organization が所有するリソースが含まれます。部分的な read-only（一部の TLG は
フリーズし、他は書き込み可能）は明示的に **サポートされません**。理由は次のとおりです。

- 移行は Organization が所有するすべてのデータをアトミックに移動します。一部のサブセットを書き込み可能の
  ままにすると、宛先 Cell が調整できない行間の不整合が生まれます。
- 上記のカットオーバー readiness の契約は Organization レベルで動作します（Sidekiq キューは
  `organization_id` でフィルタされます）。
- ADR 008 の 1:1 の TLG 対 Organization の不変条件は、今日の GitLab.com 上では Organization あたり
  通常 1 つの TLG しかないことを意味するため、部分的なフリーズには実用的なユースケースがまだありません。

## Open Questions

- 読み取り専用の状態を GitLab-CLI とエディタ拡張機能にどのように表面化するか
  （個別の `X-GitLab-Organization-Read-Only` レスポンスヘッダー?）。
- 状態変更の直前に開始された長時間実行の書き込み操作（大規模なインポート、エクスポート、
  bulk-rebase）の挙動: キャンセル、ドレイン、それとも失敗? 上記の CI ポリシーはパイプラインを
  カバーしますが、これらはカバーしません。
- アプリケーションレイヤの強制に加えて、データベースレベルのバックストップとして、移行中に
  Organization へのすべての書き込みをブロックするために Postgres Row-Level Security（RLS）を
  使用すべきか?
