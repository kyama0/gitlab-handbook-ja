---
owning-stage: "~devops::tenant scale"
title: 'Organizations ADR 010: Organization メンテナンスモード'
description: 'Cell をまたぐ移行や分離有効化の際に使用される Organization 単位のメンテナンス状態を導入し、ソース Cell 上のすべてのリクエストをブロックします。コントローラ、REST API、GraphQL、GitAccess、コンテナレジストリ、LFS、Sidekiq の各レイヤで強制されます。'
creation-date: "2026-04-28"
authors: [ "@abdwdd" ]
toc_hide: true
upstream_path: /handbook/engineering/architecture/design-documents/organization/decisions/010_organization_maintenance_mode/
upstream_sha: "bc76a1a59f8b471f304263e712307581bdc7d128"
translated_at: "2026-09-04T22:11:00+09:00"
translator: codex
stale: false
lastmod: "2026-08-18T14:42:11+05:30"
---

## コンテキスト {#context}

Organization をある Cell から別の Cell に移行する際（[Organization データ移行ブループリント](../../organization-data-migration/_index.md)を参照）、ソース Cell から宛先 Cell へデータがコピーされる期間が存在します。データの一貫性を保証するため、ソース Organization はカットオーバーの開始時点で書き込みの受け入れを停止しなければなりません。HTTP メソッドは「書き込みなし」の信頼できる代替指標ではありません。一部の `GET` は [DB 書き込みをトリガーしたり Sidekiq ジョブをエンキューしたりします](https://gitlab.com/gitlab-org/gitlab/-/issues/586370)（ログイン時の監査イベント、遅延バックフィル）。そのため最初のイテレーションでは、フリーズによって読み取りを含む、その Organization への**すべての**リクエストをブロックします。将来のイテレーションでは、完全または部分的な読み取りを許可する可能性があります。これについては後で決定します。

Cohort B の基準（[Cohort B の基準](../../organization-data-migration/cohorts/criteria_cohort_b.md)）では、お客様が「移行中に Organization が完全に利用できなくなる短時間のメンテナンスウィンドウ」を許容することを明示的に求めています。現在 GitLab には**インスタンス全体**のメンテナンスモード（[メンテナンスモード管理ガイド](https://gitlab.com/help/administration/maintenance_mode/_index)）しかなく、これは粒度が粗すぎます。ソース Cell 全体をメンテナンスにすると、その Cell を共有している他のすべての Organization もブロックされてしまいます。

私たちが必要とするのは、**単一の Organization** にスコープされた仕組みであり、以下を満たすものです:

- ソース Cell 上で、影響を受ける Organization に限ってすべてのリクエストをブロックする。
- 同じ Cell 上の他のすべての Organization は完全に稼働した状態のままにする。
- Organization へのリクエストを処理するすべてのレイヤ（コントローラ、REST API、GraphQL、Git アクセス、コンテナレジストリ、LFS、Sidekiq ジョブ、内部サービス）で一貫して強制する。
- 観測可能で、監査可能で、元に戻せる。

### 関連する作業 {#related-work}

この ADR は、反復的な PoC から生まれた設計を正式化するものです。これは、以前の TLG スコープおよび Rack ミドルウェアによるアプローチに取って代わります:

- 親エピック: [Organization の構築](https://gitlab.com/groups/gitlab-org/-/epics/20404)。
- 駆動 Issue: [PoC: Organization スコープの読み取り専用モード（コントローラレイヤでの強制）](https://gitlab.com/gitlab-org/gitlab/-/work_items/594327)。
- 置き換えられた TLG スコープの PoC: [#590009](https://gitlab.com/gitlab-org/gitlab/-/issues/590009)と、その Step 2 実装である [!226983](https://gitlab.com/gitlab-org/gitlab/-/merge_requests/226983)。これらは Rack ミドルウェアとパスプレフィックスマッチングを使用していました。両方とも、`Current.organization` を起点としたコントローラレイヤでの強制を採用するためにクローズされました。
- 現行の Organization スコープの PoC: [!228743](https://gitlab.com/gitlab-org/gitlab/-/merge_requests/228743)は Step 1（Organization 状態マシン）と、実装計画の Step 2、3、5 の最初のカットを提供します。

## 決定 {#decision}

私たちは **Organization メンテナンスモード**を導入します。これは Organization 単位の状態であり、`Organizations::Organization` 上のファーストクラスの遷移としてモデル化され、アプリケーション内のすべてのリクエストサーフェスで一貫して強制されます。状態が `maintenance_initialization` または `maintenance` の間、その Organization が所有するリソースへのすべてのリクエストが拒否されます。一部の読み取りパスが副作用として書き込みを実行するため、読み取りも含まれます。将来のイテレーションでは、完全または部分的な読み取りを許可する可能性があります。これについては後で決定します。

この状態には監査と可観測性のために記録される `reason`（migration、isolation、incident、billing、legal）が伴います。理由はメンテナンスページやエラーレスポンスでエンドユーザーに公開されず、ユーザーに見えるコピーは汎用的なものになります（*ユーザーに見える挙動*を参照）。

フリーズは**Organization 所有のデータ**に適用されます: トップレベルグループ、namespace、プロジェクト、およびそれらに含まれるリソースです。

### 状態モデル {#state-model}

メンテナンスは、既存の `Organizations::Stateful` concern 上の新しい状態のペアとして追加されます。この concern はすでに Organization のライフサイクル（`unconfirmed`、`confirmed`、`active`、`deletion_scheduled`、`deletion_in_progress`）を駆動しています:

- `maintenance_initialization` — Organization が定常状態の `maintenance` に達する前に入る中間状態です。新規のリクエストはすべての強制レイヤ（コントローラ、REST、GraphQL、Git アクセス、コンテナレジストリ、LFS）ですでにブロックされていますが、進行中の Organization スコープの Sidekiq ジョブは引き続き完了が許可され、進行中の CI ジョブはキャンセルされており、カットオーバーの準備状態チェックが評価中の状態です。Organization はメンテナンスに*入ろうとしている*ものの、まだドレインしていない状態です。
- `maintenance` — 定常状態です。下記の*カットオーバーの準備状態*の準備状態コントラクトが、必要な確認ウィンドウの間ゼロに収束した後にのみ入ります。

遷移は `active → maintenance_initialization → maintenance` および逆方向（中止／回復経路としての `maintenance → active`、フリーズが完了する前にオペレータがカットオーバーをキャンセルできるように `maintenance_initialization → active` 遷移も存在）に制限されます。新しいイベントは既存の `after_transition :log_transition` 監査フックと、[`app/models/concerns/organizations/stateful.rb`](https://gitlab.com/gitlab-org/gitlab/-/blob/master/app/models/concerns/organizations/stateful.rb)がすでにインクルードしている `Gitlab::TenantContainerLifecycle::Stateful::TransitionValidation` バリデータを再利用するため、遷移ログとバリデーションは再実装ではなく継承されます。任意の `deletion_*` 状態や、確認前の状態から `maintenance_initialization` または `maintenance` に入ることは許可されません。これらの状態への出入りはすべて、既存の遷移フックによって監査されます。

フリーズを初期化フェーズと定常状態に分割するのは意図的なものです: リクエストのブロック、ジョブのドレイン、CI のキャンセル、BBM の一時停止は瞬時には完了せず、「リクエストがブロックされている」と「Organization がドレインした」を同一視すると、ある時点でどの保証が成立しているのかが不明瞭になります。カットオーバーツール、メンテナンスページ、準備状態エンドポイントはすべて、それを推論するのではなく明示的な状態をキーにします。

具体的な enum 値、イベント名、ヘルパーシグネチャは実装の詳細であり、[#594327](https://gitlab.com/gitlab-org/gitlab/-/work_items/594327)と [!228743](https://gitlab.com/gitlab-org/gitlab/-/merge_requests/228743)に存在します。

### 制御サーフェス {#control-surfaces}

状態遷移は以下によって駆動されます:

- カットオーバー開始時のソース Cell 上の**移行ツール**（`reason: migration`）。Organization が完全に移行され、Topology Service でルーティングが切り替わった後、宛先 Cell 上でクリアされます。
- **分離有効化ツール**（`reason: isolation`）。
- インシデント、請求、リーガルホールドのための **Admin / SRE 制御**。Rails コンソールに加えて、インスタンスの Admin エリアと Rake タスクから利用できます。
- 移行、分離、インシデント対応中のオペレータ起点の遷移のための **Rails コンソール**。

**デフォルト Organization は Organization メンテナンスモードから除外**されます。デフォルト Organization はインスタンスレベルのリソースと Self-Managed/Dedicated デプロイメントをホストしており（[ADR 007](007_self_managed_dedicated_single_organization.md)を参照）、これをフリーズすることはインスタンス全体をオフラインにすることに等しくなります。Admin エリアはこれに対するメンテナンストグルを公開せず、内部の遷移ガードがその操作を拒否します。SM/Dedicated → dotCom 移行のケースでは、Organization メンテナンスモードではなく、インスタンス全体のメンテナンスモードが正しいツールです。

### カットオーバーの準備状態 {#cutover-readiness}

Cell 間の Organization 移行では、データのカットオーバー前の*ドレイン*フェーズとして Organization メンテナンスモードを使用します。Redis は Cell 単位であり、宛先 Cell には**コピーされない**ため、カットオーバー時にソース Cell の Redis に滞留している Sidekiq ジョブはすべて失われます。したがって Organization メンテナンスモードは、カットオーバーが進行する前に、Organization に対してソース Cell をチェック可能でインフライト 0 の状態に持っていかなければなりません。

準備状態のコントラクトは次のとおりです: カットオーバーは、ソース Cell 上の Organization について以下の**すべて**が真である場合にのみ進行します:

1. どの Sidekiq キューにも、その Organization を対象とする保留中のジョブがない。
2. その Organization を対象とする、スケジュール済みまたはリトライ中のジョブがない。
3. その Organization を対象とするジョブが実行中でない。
4. その Organization を対象とする Organization 単位の cron エントリがない（Cell 全体の cron エントリはカウントされない。それらのイテレーションはフィルタリングされる、*Sidekiq ジョブ*を参照）。
5. ソース Cell 上で進行中のスキーママイグレーションとポストデプロイマイグレーションが完了している。これにより宛先 Cell はスキーマ的に一貫したスナップショットを受け取れる。
6. Organization 所有のデータに触れるバッチ化されたバックグラウンドマイグレーションは、`maintenance_initialization` への移行の一部としてソース Cell 上で**一時停止**され、カットオーバー後に宛先 Cell 上で**再開**される。マイグレーションの進捗状態はデータと共に移動し、作業自体が Organization スコープであるためです。

このチェックの使用方法には 3 つのルールが適用されます:

- **操作の順序。** `maintenance_initialization` への移行は、準備状態チェックが開始される前に、すべてのエンキューパス（コントローラ、REST、GraphQL、Git アクセス）にわたって有効になっていなければなりません。そうでないと、チェックがカウントしている間に新しいジョブが投入されてしまいます。`maintenance` への遷移自体は、準備状態チェックが収束した後にのみ発生します。
- **ドレイン確認ウィンドウ。** チェックは短い間隔で少なくとも 2 回実行され、両方とも 0 を読み取らなければなりません。1 回だけのゼロは、ワーカーに今まさに拾われそうだったジョブと競合する可能性があります。
- **有界の待機、その後エスカレーション。** 設定されたウィンドウ内に準備状態が収束しない場合、カットオーバーツールは Organization をまだ保持しているワーカーを浮上させ、オペレータが待機、強制終了、中止のいずれを行うかを判断できるようにします。移行のカットオーバーは協調的で人間の監督下にあるステップであり、サイレントタイムアウトは許容されません。

準備状態チェックは、[Organization データ移行ブループリント](../../organization-data-migration/_index.md)におけるデータコピー / ルーティング切り替えステップの前提条件となるゲーティング条件です。これは admin エンドポイントとして公開され、ホットパスではありません。ジョブは、各ジョブに付随する同じ Organization コンテキスト（下記の *Organization スコープのルール* を参照）を通じて Organization に帰属します。具体的な実装は [#594327](https://gitlab.com/gitlab-org/gitlab/-/work_items/594327)にあります。

### どこで強制されるか {#where-it-is-enforced}

強制は、既存の[`CurrentOrganization` コントローラ concern](https://gitlab.com/gitlab-org/gitlab/-/blob/master/app/controllers/concerns/current_organization.rb)を介してリクエストから解決された**現在の Organization** によってパラメータ化されます。この concern はリクエストごとに 1 回 `Current.organization` を設定します。以下のすべての強制レイヤは、Organization 自体を再解決するのではなく、その値を読み取ります。

私たちはこのために、意図的に Rack ミドルウェアを**導入しません**。パスや動詞ベースのミドルウェアによる強制は脆弱です（ルートは進化しますし、多くのエンドポイントはコントローラのロジックが実行された後にしか自分がどの Organization に属するかを知りません）。コントローラ / Grape / GraphQL / GitAccess の各レイヤはすでに、解決された Organization を持っているか、安価に取得でき、正規の強制サーフェスです（*代替案*を参照）。

各サーフェスごとのルール:

- **コントローラ。** HTTP メソッドに関係なく、許可リストにない任意のアクションに対するすべてのリクエストを拒否します。HTTP メソッドは「書き込みなし」の信頼できる代替指標ではありません。一部の `GET` は[DB 書き込みをトリガーしたり Sidekiq ジョブをエンキューしたりします](https://gitlab.com/gitlab-org/gitlab/-/issues/586370)（ログイン時の監査イベント、遅延バックフィル）。Geo は歴史的にこれらをケースごとに `Gitlab::Geo.secondary?` / `read_only?` ガードや `SkipSecondary` スタイルのワーカー concern でパッチしてきました。新たな発生も予想されるため、最初のイテレーションでは安全なものを列挙しようとせず、`GET` を一律に拒否します。書き込みがすり抜けた場合は、Sidekiq ドレイン（*Sidekiq ジョブ*を参照）がバックストップになります。
- **REST API（Grape）。** コントローラと同じ理由により、現在の Organization がメンテナンス中の場合は、`GET`/`HEAD` を含むすべてのリクエストが短絡されます。
- **GraphQL。** クエリとミューテーションの両方が拒否されます。クエリは書き込みの副作用を伴うリゾルバを呼び出せるため、例外ではありません。チェックはリゾルバの実行前に走るので、バッチ化されたリクエストで部分的な状態が書き込まれることはありません。
- **Git アクセス（`Gitlab::GitAccess`）。** pull、clone（`git-upload-pack`）、push（`git-receive-pack`）はすべて拒否されます。HTTP と SSH の両方が `GitAccess` を通るためカバーされます。Wiki、スニペット、design リポジトリも同じルールに従います。
- **コンテナレジストリ。** `pull`、`push`、`delete`、`*` はすべて拒否されます。
- **Git LFS。** ダウンロード、アップロード、ロック、アンロック、verify はすべて拒否されます。
- **Sidekiq。** Organization スコープのワーカーはドレインし、cron ワーカーはメンテナンス中の Organization をスキップします。理由については下記の *Sidekiq ジョブ* を参照してください。これは他のサーフェスとアーキテクチャ的に異なります。
- **トークン、自動化、インテグレーション、Webhook。** パーソナルアクセストークン、グループ/プロジェクトアクセストークン、デプロイトークン、CI ジョブトークン、インバウンド Webhook はすべてコントローラ / Grape スタックを通り、上記のルールでカバーされます。「信頼できるインテグレーション」のための特別なバイパスはありません。書き込みによってトリガーされるアウトバウンド Webhook は、起点となる書き込みがブロックされるため、フリーズ中には関係ありません。

#### 認証の例外なし {#no-authentication-exemption}

**認証エンドポイントに例外はありません**。所有する Organization が `maintenance_initialization` または `maintenance` にあるユーザーのサインイン、サインアウト、OAuth トークン発行、JWT 認証、SAML/SSO コールバックは、他のリクエストと同様に拒否されます。

この設計の以前の草案では、ユーザーが Organization のデータを読み取るセッションを取得できるように、認証エンドポイントを例外としていました。この例外は削除されます。認証フローは、この状態が防ぐために存在する書き込みを実行するためです:

- SSO/SAML の初回サインインと JIT プロビジョニングは、新しい `users` 行を `INSERT` します。メンテナンスウィンドウ中に作成された行はソース Cell にしか存在せず、カットオーバースナップショットの一部ではないため、トラフィックが宛先 Cell に移動すると失われます。
- 認証されたリクエストはすべて、`last_sign_in_at` / `last_activity_on` およびリクエストごとの同等のタイムスタンプに加えて、セッション行、サインイン監査イベント、資格情報の最終使用タイムスタンプを更新します。シャーディングの目的で、各 `users` 行は `organization_id` を介してちょうど 1 つの Organization に属するため、これらは Organization 所有データへの書き込みです。
- 認証時の更新は、さらに別の Organization 所有の状態へカスケードする可能性があります。例えば、Cell 間移行ウィンドウ中に Topology Service の更新（`user.cell = …`）をトリガーする書き込みです。「認証コントローラ自体」にスコープされた例外では、それが呼び出す下流のサービスを止められません。

認証時の書き込みの「安全な」サブセットを列挙する方法は脆弱であることが判明しました。書き込み集合は新しい認証フローが追加されても安定せず、ここでの失敗は実際の競合状態になるためです（SSO が誤った Cell にユーザー行を作成する、`last_login_at` が古いトポロジー更新にカスケードする）。最初のイテレーションではどのみち読み取りをブロックするため、発行する価値のあるセッションはありません。認証サーフェス全体を拒否するほうが、より安全でシンプルです。既存のセッションも同様に読み書きできません。ID プロバイダーのセッションからのサインアウトは、GitLab ではなく IdP で処理されます。

受け入れたトレードオフが 1 つあります。サインアウトを拒否すると、フリーズ中にユーザーがローカルの GitLab セッションを終了できません。共有デバイスや公共のデバイスでは、フリーズが解除されるまでユーザーが消去できないアクティブな無人セッションが残ります。このセッションはフリーズ中に Organization のデータを読み書きできず、移行のフリーズウィンドウは短いため（Cohort B の基準を参照）、残存リスクは限定されますが、セッション自体はフリーズより長く存続します。サインアウトを除外する措置は将来のイテレーションで再検討する可能性があります（セッションの破棄はセッションストアと Cell 単位の Redis に書き込みますが、これらはカットオーバースナップショットの一部ではないため、許可しても安全な可能性があります）。

具体的なクラス名、ファイルパス、エラーレスポンスの形状、HTTP ステータスコード（`503` vs `403`）は実装の詳細であり、[#594327](https://gitlab.com/gitlab-org/gitlab/-/work_items/594327)と PoC から生成された API ドキュメントに存在します。

### Sidekiq ジョブ {#sidekiq-jobs}

バックグラウンドジョブは、HTTP サイクルの外で実行されるため最もリスクの高い書き込みサーフェスです。さらに Cell 間移行では追加の制約があります: Redis は Cell 単位であり、**移行されない**ため、カットオーバー時にソース Cell の Redis に残っているジョブはすべて失われます。ポリシーはジョブのソースごとに分割され、下記の *ポリシー* で詳述します。

#### Organization スコープのルール {#org-scoping-rule}

ワーカーが操作する Organization は `Current.organization` から解決され、既存のジョブコンテキスト機構（[!212406](https://gitlab.com/gitlab-org/gitlab/-/merge_requests/212406)）を通じてワーカーに複製されます。エンキュー時に設定されたコンテキストは Organization をジョブに運び、ワーカーの実行時に `Current.organization` に再設定されます。ワーカー引数から導出されるのでも、追加の `perform_async` 引数として渡されるのでもありません。`Current.organization` はすべての Web および API リクエストで設定されるため、リクエスト起点のジョブはデフォルトでそれを運びます。リクエストコンテキストを持たないエンキュー箇所は、並行する解決機構を導入するのではなく、既存パターンである `Gitlab::ApplicationContext.with_context(organization: ...)` ブロックでエンキューをラップします。

これはデータ分離とも整合します。分離された Organization では、分離が Cell 間移行の前提条件であり、データベースクエリは `Current.organization` にスコープされます。したがってコンテキストの Organization *こそが*、ワーカーが読み書きできるデータの Organization です。別の Organization のデータを参照するジョブのスケジュールは、メンテナンス設計が解決すべきケースではなく、スケジューリングのバグです。

ルール:

- **`Current.organization` が使用可能な状態で実行されるすべてのワーカーは、その Organization に対して Organization スコープです。** その Organization のメンテナンス状態が、下記の *ポリシー* に従って適用されます。`maintenance_initialization`（ドレインフェーズ）では、キュー済みおよび実行中のジョブは完了まで実行されます。Organization が `maintenance`（ドレイン収束後の定常状態）に達すると、ワーカーはバックストップとして早期終了します。この時点で到着するジョブはフロントドアのブロックをすり抜けています。
- **cron ワーカーはデフォルトでクロス Organization です。** エンキュー時にリクエストコンテキストがありません。cron ワーカーが Organization 所有データを変更する場合、Organization を反復しながら各反復で `with_context(organization: ...)` を設定するなど、Organization コンテキストを確立しなければなりません。そうすると同じワーカー側のルールが反復ごとに適用されます。これは [#599101](https://gitlab.com/gitlab-org/gitlab/-/work_items/599101)と、下記の *ポリシー* にある反復フィルタ要件で追跡されています。

コンテキスト機構を完全にするには、既知のギャップを解消する必要があります。プロジェクトまたは namespace のコンテキストのみでエンキューされたジョブは、現時点では Organization を運ばないため、エンキュー時にプロジェクトまたは namespace から導出する必要があります。これは [#603918](https://gitlab.com/gitlab-org/gitlab/-/work_items/603918)で追跡されています。

#### ポリシー {#policy}

ジョブがどのように到達したかをキーとした 2 つのルール:

- **Organization スコープのワーカーはドレインする。** Organization が `maintenance_initialization` に入る時点ですでにキューイングされているか実行中のジョブは、フリーズの前にフロントドアのリクエストが受け入れられた作業を表します。それらはソース Cell 上で完了まで実行されなければなりません。Sidekiq サーバミドルウェアはそれらをスキップ**しません**。新しいエンキューはコントローラ、REST、GraphQL、Git アクセスの各レイヤで防止されるため、フリーズが有効になった後はこれ以上の Organization スコープのジョブはキューに投入されません。カットオーバーは上記の準備状態コントラクトでゲートされており、Organization のキューイング済み、スケジュール済み、リトライ中、実行中のすべてのジョブが完了した場合にのみ true を返します。これはサイレントスキップではなく、本物のドレインです。
- **cron ワーカーはメンテナンス中の Organization と、そのプロジェクトおよび namespace をスキップする。** Sidekiq サーバミドルウェアが、解決された Organization がメンテナンス中である cron ジョブの実行を構造化ログ付きで短絡します。Organization 所有のデータ（プロジェクト、namespace、その他 Organization に解決される行）を反復する Cell 全体の cron ワーカーは、フィルタコストを有界にするため、行ごとの述語ではなく結合（またはアクティブな Organization に対するサブセレクト）として表現された、アクティブな Organization へのフィルタを反復内に持たなければなりません。

フィルタは、参加するすべてのモデル上の単一の共有スコープとして実装されます。Organization 所有のデータを反復するすべての cron ワーカーは、`active` でない Organization に属する行が yield されないことを表明するテストを持たなければなりません。

#### Loose Foreign Keys (LFK) {#loose-foreign-keys-lfk}

LFK 削除ワーカー（`LooseForeignKeys::CleanupWorker` と、`LooseForeignKeys::CiPipelinesBuildsCleanupCronWorker` や `LooseForeignKeys::MergeRequestDiffCommitCleanupWorker` などのテーブル単位のバリエーション、`Gitlab::Database::LooseForeignKeys::ALLOWED_WORKER_CLASSES` に列挙）は Sidekiq cron ワーカーです — ワーカー自体が Cell を意識した設計だからではなく、各 Cell が独自の Sidekiq を持っているために Cell ごとに 1 回実行されます。これらは `loose_foreign_keys_deleted_records`（`gitlab_shared` テーブル）を消費し、4 ステップのチェーン: `CleanupWorker` → `LooseForeignKeys::ProcessDeletedRecordsService` → `LooseForeignKeys::BatchCleanerService` → `LooseForeignKeys::CleanerService`（パーティションテーブル用の `PartitionCleanerService`）を通じて、子行への削除や null 化をカスケードします。`BatchCleanerService` は各親テーブルの LFK 定義を参照するオーケストレータで、`CleanerService` は実際の `DELETE` / `UPDATE` を構築・実行するテーブル単位のエグゼキュータです。概念的にはこのチェーン全体が上記の*cron ワーカーはメンテナンス中の Organization をスキップする*ルールに該当します: メンテナンス中の Organization に属する行に対するカスケード削除は、ドレイン中には適用してはいけません。

実際には、`CleanerService` は Organization 所有の ActiveRecord スコープを反復するのではなく、loose-FK カラム（例: `WHERE project_id IN (...)`）をキーとした生の `DELETE` / `UPDATE` クエリを構築するため、アクティブな Organization へのフィルタを差し込むのは容易ではありません。実装作業は、追跡される子テーブルごとに所有 Organization を解決すること — シャーディングキー辞書（`Gitlab::Database::Dictionary`、`db/docs/*.yml` をソースとし `Organizations::Sharding` がすでに利用）経由か、クリーナーが生成するクエリにアクティブな Organization の join を追加することで — そして所有 Organization が `active` でない親レコードをスキップするよう `BatchCleanerService` / `CleanerService` に教えることです。この作業は LFK 機能の所有者が担当し、下記のより広い「カットオーバー後の LFK」の問いと一緒に追跡されます。

Organization が宛先 Cell に*移動*した後の LFK の挙動についてのより広い問い（ソース Cell に残された親/子行に何が起きるか、各 Cell の LFK ワーカーがそれをどう推論すべきか）は、この ADR のスコープ外です。これは [gitlab-org/gitlab#535508](https://gitlab.com/gitlab-org/gitlab/-/work_items/535508)で追跡されており、[Organization データ移行ブループリント](../../organization-data-migration/_index.md)に属します。

#### バッチ化されたバックグラウンドマイグレーション（BBM） {#batched-background-migrations-bbms}

BBM は、`Database::BatchedBackgroundMigration::SingleDatabaseWorker` concern をインクルードする一連の Sidekiq cron ワーカー: `Database::BatchedBackgroundMigrationWorker`（main）、`Database::BatchedBackgroundMigration::CiDatabaseWorker`（CI）、`Database::BatchedBackgroundMigration::SecDatabaseWorker`（sec）によってデータベース単位でスケジュールされます。各ワーカーはそのデータベースの実行ワーカー（`MainExecutionWorker` / `CiExecutionWorker` / `SecExecutionWorker`）にディスパッチし、それが次に `Gitlab::Database::BackgroundMigration::BatchedMigrationWrapper` を通じて個々のジョブを実行します。BBM はテーブル上の主キーまたはカーソル範囲を反復します — Organization を直接反復するのではありません。[`queue_batched_background_migration`](https://gitlab.com/gitlab-org/gitlab/-/blob/master/lib/gitlab/database/migrations/batched_background_migration_helpers.rb) ヘルパーは、マイグレーションが `cursor_columns` を定義する場合にカーソル戦略を自動検出します。BBM は Cell ローカルです: cron ワーカーによってスケジュールされ、それらが触れる Organization 所有テーブルは一様に `organization_id` シャーディングキーを持つわけではないため、BBM バッチが適用できる汎用的な行ごとの「アクティブな Organization」述語は存在しません。そのため、これらは他の Cell ローカル cron ワーカーと同様に扱われ — Organization ごとにフィルタするのではなく、`maintenance_initialization` への移行時に全体としてスキップされます。

行単位の作業進捗（`batched_background_migrations.min_value` / `max_value` / `batch_size` と、`BatchedMigrationWrapper#perform` が参照するバッチごとの行）は Redis ではなく Postgres に保存されます。しかし、Organization と共に移動するのは Organization シャード化されたターゲット行のみです — BBM スケジューラ、ジョブ、遷移ログのテーブル自体は `gitlab_shared_cell_local`（下記参照）であり、ソース Cell に残ります。

この ADR のポリシーは次のとおりです:

- **BBM は Cell ローカルの cron スキップルールに従う。** 他の Cell ローカル Sidekiq cron ワーカーと同様、BBM のスケジューリングは Cell がカットオーバーを初期化している間、Organization ごとにフィルタするのではなく全体としてスキップされます。BBM は Cell ローカルで Organization シャーディングキーに対して実行されるのではないため、適用すべき Organization ごとのフィルタは存在しません。cron 駆動のスケジューリングを一時停止することが、cron スキップルールの BBM 版です。
- **BBM は `maintenance_initialization` への移行の一部としてソース Cell 上で一時停止され、カットオーバー後に宛先 Cell 上で再開される。** BBM の進捗は Redis ではなく PostgreSQL（`batched_background_migrations`、`batched_background_migration_jobs`、`batched_background_migration_job_transition_logs`）に永続化されており、これがそもそもカットオーバー後の再開を実現可能にしている性質です。BBM のトラッキングテーブル自体（`batched_background_migrations`、`batched_background_migration_jobs`、`batched_background_migration_job_transition_logs`）はデータベース辞書で `gitlab_schema: gitlab_shared_cell_local` とマークされており（[`db/docs/batched_background_migrations.yml`](https://gitlab.com/gitlab-org/gitlab/-/blob/master/db/docs/batched_background_migrations.yml)、[`db/docs/batched_background_migration_jobs.yml`](https://gitlab.com/gitlab-org/gitlab/-/blob/master/db/docs/batched_background_migration_jobs.yml)、[`db/docs/batched_background_migration_job_transition_logs.yml`](https://gitlab.com/gitlab-org/gitlab/-/blob/master/db/docs/batched_background_migration_job_transition_logs.yml)）、Organization の移動中はソース Cell に留まります。宛先 Cell は移動したデータに対して進行中の BBM を明示的な引き継ぎステップとして再エンキューする必要があります。トラッキング履歴は転送されません。
- **進行中の BBM バッチはバッチの途中でキャンセルされない。** キャンセルはマイグレーションを部分的な状態に残すリスクがあります。準備状態チェックは、ソース Cell がドレインしたと見なされる前に現在のバッチが完了するのを待ちます。

カットオーバー準備状態チェックが BBM 進捗をどう読み取るかの完全なコントラクトは、Organization データ移行ブループリントと共有されており、[&20404](https://gitlab.com/groups/gitlab-org/-/epics/20404)で追跡されています。

#### 可観測性 {#observability}

スキップ、キャンセル、フィルタの各イベントは、`organization_id`、`worker`（クラス）、`jid` を含む構造化ログを発行します。同じデータを *カットオーバーの準備状態* エンドポイントが読み取るので、カットオーバーの判断と定常状態の可観測性は 1 つのシグナルを共有します。

この Sidekiq ポリシーは、すべてのバックグラウンドジョブの実行を継続させるインスタンス全体のメンテナンスモードよりも意図的に厳格です。

### CI/CD の挙動 {#cicd-behavior}

- メンテナンス中の Organization 配下のプロジェクトに対する新しいパイプラインの作成（UI、API、スケジュールトリガー、手動トリガー）はブロックされます。
- パイプラインやジョブの状態、ログ、アーティファクトの読み取りは、その Organization に対する他のすべてのリクエストと同様にブロックされます。
- **Organization がメンテナンスに入る前に開始されたジョブはキャンセルされます**。それらは長時間実行される可能性があり、そうしないとカットオーバーが無期限に保留されてしまうためです。キャンセルは、Organization がフリーズされた後は進行すべきでない破壊的操作（アーティファクト削除、レジストリへの push、保護された環境へのデプロイ）もカバーします。
- メンテナンス中の Organization から発生する新しいデプロイメント、環境変更、フィーチャーフラグの変更はブロックされます。

### 許可リストの原則 {#allowlist-principles}

Organization メンテナンスモード中にリクエストが**許可される**のは、以下の少なくとも 1 つが真である場合です:

- プラットフォームの稼働を維持するために必要な内部 API 呼び出しである。
- 移行または分離のコントロールプレーン（DMS、Topology Service、Organization 移行 / 分離エンドポイント）の一部である。

それ以外はすべてデフォルトで拒否されます。許可リストに載っているコントローラ、アクション、エンドポイントの具体的なリストは [#594327](https://gitlab.com/gitlab-org/gitlab/-/work_items/594327)に存在します。

### ユーザーに見える挙動 {#user-visible-behavior}

- Organization に対するすべてのリクエストがブロックされるため、バナーを表示するページはありません。代わりに、Organization が所有するページへのブラウザリクエストでは静的なメンテナンスページをレンダリングします。コピーは汎用的で、内部の理由やインフラの詳細（Cell、移行）は明らかにしません。例: *「この Organization は、必須メンテナンスの実施中であるため一時的に利用できません。しばらくしてから再試行してください。」*
- API レスポンスは、構造化されたエラーと適切な HTTP ステータス（時間制限のある理由には `Retry-After` 付きの `503 Service Unavailable`、時間制限のない理由には `403 Forbidden`）でフリーズ状態を通知します。正確なレスポンスボディとステータスのマトリックスは実装の詳細です（[#594327](https://gitlab.com/gitlab-org/gitlab/-/work_items/594327)を参照）。
- Git 操作は同等の汎用メッセージを返します: *「この Organization は現在メンテナンス中のため、この操作は許可されていません。」*

### 監査可能性と可観測性 {#auditability-and-observability}

`Organizations::Stateful` 上の既存の遷移ログおよびバリデーション mixin が再利用されます。新しい監査パイプラインは導入されません。`maintenance_initialization` および `maintenance` への各エントリと、それらからの各退出は、Organization ID、アクター（システム、ユーザー、自動化）、タイムスタンプ、理由を記録する Organization レベルの監査イベントを発行します。

### パフォーマンスとキャッシング {#performance-and-caching}

`Current.organization` はリクエストごとに 1 回解決されます。状態変化は既存の `after_transition` フックを介して任意のキャッシュを無効化します。

### ロールアウトとフィーチャーフラグ {#rollout-and-feature-flags}

- 仕組みは**単一の Organization スコープのフィーチャーフラグ**でゲートされており、コホートごとにロールアウトを進められます（アクター: Organization）。
- このフラグは**リスク低減フラグであり、運用フラグではありません**。強制コードのロールアウトを段階的に進めるためだけに存在し、仕組みのロールアウトが完了したら削除されます。コード内に無期限に残さなければならない、インスタンスまたは環境にスコープされた 2 つ目の運用フラグは、意図的に追加しません。
- メンテナンスの強制は Organization 自身の `maintenance` / `maintenance_initialization` 状態によってすでにゲートされているため、永続的な運用フラグは不要です。`active` な Organization は強制コードの影響を受けないため、状態自体が永続的な Organization ごとのオフスイッチとなります。また、これはフィーチャーフラグとは異なり、監査可能で元に戻せます。Organization のメンテナンスをオフにするには、フラグを切り替えるのではなく、Organization を `active` に戻します。
- GitLab.com では、まず内部/テスト Organization に対してフラグを有効化し、その後既存の Organization ロールアウトのコホートと並行して拡大し、最後にフラグを削除します。
- Self-Managed および Dedicated では、どの Organization もメンテナンスへ遷移しないため、実際にはこの仕組みは作動しません（*帰結*を参照）。

## 帰結 {#consequences}

- Organization の移行は、もはや Cell 全体（およびその結果として無関係な Organization 群）をインスタンス全体のメンテナンスモードに置く必要はありません。
- 同じ仕組みが分離有効化、インシデントスコーピング、請求/リーガルホールドをカバーし、ワンオフトグルの増殖を回避できます。
- 強制は多くのレイヤ（コントローラ、Grape、GraphQL、GitAccess、Sidekiq）にわたって複製されます。これは意図的なもの（多層防御）ですが、同期を保ち続けなければならないサーフェス領域が増えます。各新規エントリポイントは、Organization メンテナンスモードを尊重するかどうかを明示的に宣言しなければなりません。
- Cell 全体の cron ワーカーは、Organization 所有のデータを反復する際にアクティブな Organization フィルタを採用しなければならず、メンテナンス中の Organization が除外されることを表明するテストを持たなければなりません。これがないと、ロールアウト後に追加された新しい cron ワーカーが、まさに移動されようとしているデータをサイレントに変更してしまいます。
- 上記の強制レイヤをバイパスする任意のコードパス（例: マイグレーション内の生 SQL `UPDATE` や、コントローラ、Grape、GraphQL、`Gitlab::GitAccess` を通らない直接の ActiveRecord 書き込み）は、このイテレーションでは**カバーされません**。将来のイテレーションでは、多層防御としてサービスレイヤまたはモデルレイヤのガードが追加される可能性があります。
- インスタンス全体のメンテナンスモード（`Gitlab.maintenance_mode?`）は引き続き利用可能で、直交します。両方がアクティブな場合は、より制限的な状態が勝ちます。Organization メンテナンスモードは、インスタンスメンテナンスチェックをバイパスするコードパスを導入してはなりません。
- Self-Managed および Dedicated インスタンス（インスタンスごとに単一 Organization、[ADR 007](007_self_managed_dedicated_single_organization.md)を参照）は、追加実装なしでこの仕組みを利用できますが、実際には Organization 単位の分離による利点がないため、引き続きインスタンス全体のメンテナンスモードを使用すべきです。そこで休止状態を保つための永続的なトグルは不要です。これらのトポロジ上の単一 Organization は `active` 以外へ遷移しないため、強制コードは作動しません。
- フリーズ中は書き込みとともに読み取りもブロックされるため、ユーザーには Organization が完全に利用できない状態として見えます。汎用的なメンテナンスページと構造化された API エラーによって混乱を緩和します。[Cohort B の基準](../../organization-data-migration/cohorts/criteria_cohort_b.md)では、お客様が移行中の短時間の完全な利用不能を許容することを求めています。メンテナンスウィンドウに関するお客様向けメッセージは、引き続き合意し、製品ドキュメントに反映する必要があります。

## 検討した代替案 {#alternatives-considered}

### 1. ソース Cell でインスタンス全体のメンテナンスモードを再利用する {#1-reuse-instance-wide-maintenance-mode-on-the-source-cell}

ソース Cell で `Gitlab.maintenance_mode?` をトグルすれば書き込みはブロックされますが、その Cell 上の**すべての** Organization に対してそれらをブロックします。Cell が複数の Organization をホストすると、これは受け入れがたいものとなります。

### 2. `project.repository_read_only` のみに依存する {#2-rely-solely-on-projectrepository_read_only}

このフラグは現在存在し、リポジトリストレージの移動中に使用されています。これは単一プロジェクトの Git レベルの push のみをカバーします。REST、GraphQL、Sidekiq、コンテナレジストリ、パッケージ、または非リポジトリ状態はカバーしません。これを唯一の仕組みとして使用すると、移行中にほとんどの書き込みがサイレントに許可されてしまいます。

### 3. データベースレイヤでの単一チョークポイント {#3-single-chokepoint-at-the-database-layer}

シャーディングキーをキーとした `BEFORE UPDATE` トリガーは、すべての書き込みをキャッチします。シャーディングキー（`organization_id`、`project_id`、`namespace_id`）はまだすべてのデータテーブルに普遍的に存在しているわけではありませんが、コードベースはその方向に動いています。カバレッジが完了すれば、トリガーは書き込みごとに所有者の Organization を解決できるでしょう。注意点:

- トリガーから素朴に表面化される `PG::Error` はユーザー体験を悪化させますが、これは解決可能です: PostgreSQL の [`RAISE`](https://www.postgresql.org/docs/17/plpgsql-errors-and-messages.html#PLPGSQL-STATEMENTS-RAISE)によるカスタム `SQLSTATE` は、`pg` gem からは汎用的な `PG::ServerError` として表面化します（`pg` gem の型付きサブクラスは標準 SQLSTATE コードのみをカバーし、ユーザー定義のものはカバーしません）。その後 ActiveRecord の PostgreSQL アダプタは `translate_exception` を通じて例外をルーティングします。私たちはサブクラス化したアダプタでそれを拡張し、カスタム SQLSTATE にマッチさせて専用の `ActiveRecord::OrganizationMaintenanceError`（`ActiveRecord::ReadOnlyError` のサブクラス）として再 raise できます。アプリケーションは単一の型付き例外を rescue し、それをコントローラレイヤの強制と同じユーザー向けレスポンス形状に変換します。このマッピングが整っていれば、トリガーは実行可能な最終ラインのバックストップです。
- これは Sidekiq ジョブのエンキューや外部システムからのリクエスト発行を停止しないため、アプリケーションレイヤのフィードバックは依然として必要です。
- トリガーのパフォーマンスにはベンチマークが必要です。シャーディングキーがテーブル上に直接存在しない場合に join 経由で `organization_id` を解決する行ごとのトリガーは、特にホットな書き込みパスでは、その処理コストを無視できません。

シャーディングキーのカバレッジが普遍化したら**最終ライン**の安全網として再検討するかもしれませんが、それ単独では不十分です。

### 4. Topology Service / ルータでブロックする {#4-block-at-the-topology-service--router}

カットオーバー中に Organization の書き込みをソース Cell からルーティング先で逸らすことは移行設計の一部ですが、これだけが強制であってはなりません: インフライトのリクエスト、ソース Cell ですでにエンキューされた Sidekiq ジョブ、直接の admin アクセスは、依然としてアプリケーションレイヤで停止される必要があります。GraphQL もこの方法では簡単にブロックできません。なぜならスコープ内の Organization を判定するためにリクエストボディを検査しなければならないからです。

### 5. Rack / パスベースのミドルウェアによる強制 {#5-rack--path-based-middleware-enforcement}

URL を検査し、パスパターンに基づいて変更の可能性のあるエンドポイントをブロックする Rack または ingress ミドルウェアとして Organization メンテナンスモードを実装することは脆弱です: GraphQL だけでもパス/動詞のマッチングは不十分です（1 つのエンドポイントがクエリとミューテーションの両方を提供し、スコープ内の Organization は潜在的にバッチ化されたリクエストボディを解析した後にのみわかります）。代わりに使用するコントローラ / Grape / GraphQL / GitAccess アプローチについては *どこで強制されるか* を参照してください。

### 6. Organization 状態を持たないトップレベルグループ単位のメンテナンス {#6-top-level-group-maintenance-without-an-organization-state}

Organization ではなくトップレベルグループ / namespace レベルでメンテナンスを定義することは、Organization が正規のテナントである Organizations ロードマップと整合しません。このアプローチでは、Organization 自体は書き込み可能なままで、トップレベルグループのみがフリーズされます。これは Organization スコープのリソース（設定、監査イベント、その他 Organization 所有の状態）を移行中にミュータブルなまま残してしまい、フリーズの目的を打ち破ります。また、ルーティングおよびデータ移動のために Organization 抽象化をすでに前提としている Cell および分離作業を複雑化します。

### 7. Organization カラムではなくルート namespace からメンテナンス状態を導出する {#7-derive-maintenance-state-from-root-namespaces-instead-of-an-organization-column}

`Organizations::Organization` に `state` カラムを追加する代替案は、Organization のルート namespace の `effective_state` からメンテナンスを導出することです。これは短期的にはよりシンプル（スキーマ変更も新しい状態マシンも不要）であり、[#594327](https://gitlab.com/gitlab-org/gitlab/-/work_items/594327)のオープンクエスチョン 1 として提起されました。

これは以下の理由で却下されます:

- これは Organization レベルのメンテナンスを namespace 状態と結合します。namespace 状態は独自のライフサイクル（削除、移管、アーカイブ）を持ち、曖昧な複合状態を生み出します。
- 将来のマルチ TLG Organization では namespace 状態を集約しなければならず、集約ルール（any 対 all）自体が、Organization レベルで一度表現したほうがよいポリシー判断です。
- 監査、可観測性、カットオーバー準備状態コントラクトはすべて、「この Organization は今メンテナンスか?」という単一の権威あるシグナルを欲します。導出状態はそのシグナルを N 行に分散させてしまいます。
- 状態は Organization がメンテナンスである*理由*（migration、isolation、incident、billing、legal）も表現する必要があります。そのメタデータは各 namespace ではなく Organization に属します。

Organization レベルの状態カラムは、PoC [!228743](https://gitlab.com/gitlab-org/gitlab/-/merge_requests/228743)で出荷されるものです。

### 8. すべてのモデルに対する ActiveRecord の `before_create`/`update`/`destroy` フック {#8-activerecord-before_createupdatedestroy-hooks-on-every-model}

Organization に解決されるすべてのモデルに `before_create`、`before_update`、`before_destroy` コールバックを注入する concern を追加すれば、原理的にはコントローラ/Grape/GraphQL のカバレッジを網羅的にする必要なく、モデルレイヤで書き込みをキャッチできます。

私たちはこのアプローチを却下します。なぜなら ActiveRecord のコールバックは以下によってバイパスされるからです:

- `update_columns`、`update_all`、`delete_all`、`upsert`、`upsert_all`、`insert`、`insert_all` — これらはすべて設計上コールバックをスキップします。単数形の `insert` と `upsert` は `_all` 対応物にデリゲートする薄いラッパーであるため、コールバックとバリデーションを同様にスキップします。したがってバイパスのサーフェスは明示的なバルク形式（`update_all`、`delete_all`、`upsert_all`、`insert_all`）だけでなく、`update_columns`、単数形の `insert`/`upsert`、および接続経由で実行される任意の生 SQL もカバーします。
- 通常およびポストデプロイマイグレーションでの生 SQL。
- Rake タスクや Rails コンソールからの直接 `INSERT`/`UPDATE`。
- Arel や `exec_query` 経由のあらゆるもの。

コードベース内で最も一般的なバルク書き込みイディオムによってバイパスされるチョークポイントは、チョークポイントではありません。コールバックは、この ADR がカバーしようとしているものの大部分を占める非データベース書き込みサーフェス（Sidekiq エンキュー、Git push、コンテナレジストリ、LFS）でも役に立ちません。

データベースレイヤのトリガー（代替案 #3）はこれらすべての下に位置し、最終ラインの安全網に正しい形状を持ちます。

## 粒度 {#granularity}

Organization 単位のメンテナンスで十分です。[ADR 008](008_non_isolated_organizations_gitlab_com.md)によれば、GitLab.com 上のトップレベルグループは（デフォルトで 1:1 で）Organization に移管されつつあり、「影響を受ける単位」は常に Organization です。したがって、より細かい粒度のトップレベルグループ単位またはプロジェクト単位のメンテナンスモードは必要ありません。

### Cell 間移行のスコープ {#cell-to-cell-migration-scope}

Cell 間 Organization 移行（主要なユースケース）では、カットオーバーの期間中、ソース Cell 上で**Organization 全体**がメンテナンスに置かれます。これにはすべてのトップレベルグループ、namespace、プロジェクト、その他 Organization 所有のリソースが含まれます。部分的なメンテナンス（一部の TLG はフリーズ、他は書き込み可能）は明示的に**サポートされません**。理由は以下のとおりです:

- 移行は Organization 所有のデータをアトミックに移動します。任意のサブセットを書き込み可能なままにすると、宛先 Cell が調整できないクロス行の不整合が生じます。
- 上記のカットオーバー準備状態コントラクトは Organization レベルで動作します（Sidekiq キューは `organization_id` でフィルタされます）。
- ADR 008 の 1:1 TLG-to-Organization 不変条件は、現在 GitLab.com 上では Organization ごとに通常 1 つの TLG しかないことを意味するため、部分的なフリーズはまだ実用的なユースケースを持ちません。

## オープンクエスチョン {#open-questions}

- メンテナンス状態を GitLab-CLI とエディタ拡張機能に表面化する方法（別の `X-GitLab-Organization-Maintenance` レスポンスヘッダ?）。
- 状態変更の直前に開始された長時間実行の書き込み操作（大規模なインポート、エクスポート、bulk-rebase）の挙動: キャンセル、ドレイン、それとも失敗? 上記の CI ポリシーはパイプラインをカバーしますが、これらはカバーしません。
- アプリケーションレイヤの強制に加えて、データベースレベルのバックストップとして、移行中に Organization へのすべての書き込みをブロックするために Postgres の Row-Level Security (RLS) を使用すべきか?
- Organization 所有の行を変更する通常およびポストデプロイのスキーママイグレーションは、カットオーバーウィンドウとどう相互作用するか? 現時点の立場は「カットオーバー中はデプロイしない」を運用ルールとして扱い、シャーディングキーのカバレッジが普遍化したらデータベースレイヤのバックストップ（代替案 #3）を再検討するというものですが、これはマイグレーションツーリングの DRI と確認すべきです。
- BBM コントラクト: どの BBM がアクティブな Organization フィルタを必要とするか、そしてカットオーバー準備状態チェックは BBM 進捗をどう読み取るか? [gitlab-org/gitlab#546321](https://gitlab.com/gitlab-org/gitlab/-/work_items/546321)と [&20404](https://gitlab.com/groups/gitlab-org/-/epics/20404)で追跡されており、Organization データ移行ブループリントで解決される予定です。
- 移動した Organization の LFK 挙動（ソース Cell に残された親/子行、カットオーバー後のソース Cell の LFK ワーカー挙動）。[gitlab-org/gitlab#535508](https://gitlab.com/gitlab-org/gitlab/-/work_items/535508)で追跡されており、Organization データ移行ブループリントに属します。
