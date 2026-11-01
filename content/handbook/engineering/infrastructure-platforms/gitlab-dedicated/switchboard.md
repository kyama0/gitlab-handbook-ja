---
title: Switchboard チーム
upstream_path: /handbook/engineering/infrastructure-platforms/gitlab-dedicated/switchboard/
upstream_sha: "52419353ea755a1ac823553385f8636ff2fcde17"
translated_at: "2026-11-01T15:27:34.435677+00:00"
translator: codex
stale: false
lastmod: "2026-10-30T14:17:26-04:00"
---

## 概要 {#summary}

Switchboard は GitLab Dedicated のコントロールプレーンです。[Dedicated Group](/handbook/engineering/infrastructure-platforms/gitlab-dedicated/)内で密接に連携する 2 つのファンクショナルチーム、**Switchboard Orchestration API** と **Switchboard Customer Features** が開発しています。私たちに共通するミッションは、GitLab Dedicated のお客様がテナント環境で必要なあらゆる情報を確認し、変更できるようにするとともに、社内の運用担当者と自動化に、テナントを運用するための単一で安全な API インターフェースを提供することです。これにより、運用上のトイルを同じ割合で増やすことなく、GitLab Dedicated の提供規模を拡大します。

2 つのチームは単一のコードベースと作業プロセスを共有しているため、両チームの活動方針をこのページに記載しています。ここに明示的に記載されている違いを除き、私たちは [Dedicated Group](/handbook/engineering/infrastructure-platforms/gitlab-dedicated/)ページに記載されているプロセスに従います。

### リソース {#resources}

- [Switchboard ハンドブックページ](/handbook/engineering/infrastructure-platforms/gitlab-dedicated/switchboard/)
- [Switchboard デモライブラリ](https://gitlab.com/gitlab-com/gl-infra/gitlab-dedicated/switchboard/-/blob/main/docs/walkthrough-library.md)
- [Dedicated Group のファンクショナルチームの活動方針](https://docs.google.com/document/d/1hZmZWgLOcJD0aZaUj5yubT0fBlhRyHXRzTYlXKwlX48/edit)（社内向け）

## チームの活動方針 {#team-charters}

Switchboard は Dedicated Group のファンクショナルチームモデルに従います。近接するタイムゾーンにいる少人数のチーム、各チームに 1 人ずつの Tech Lead、Manager、Product Manager、成果物の明確なオーナーシップ、各チームを定義する継続的な課題領域からなるモデルです。以下のセクションでは、各 Switchboard チームのミッション、範囲、メンバー、成功基準を説明します。2 つのチームは、Dedicated フリートの維持に使用する API と自動化ツール、およびその上に構築されるお客様向け UI の境界で分かれています。ただし、機能チームが開発する一部の機能は社内のお客様にも提供され、機能チームは Dedicated のお客様がプログラムからテナントを管理するための API も保守しています。

### Switchboard Orchestration API {#switchboard-orchestration-api}

#### ミッション {#mission}

GitLab Dedicated テナントの運用に必要なあらゆる作業に対応する、適切に管理された API インターフェースとツール / サービス群を提供します。これにより、社内の運用担当者、自動化、お客様向け機能のすべてが、同じ安全で一貫したインターフェースを通じてテナントを操作します。

#### 活動方針 {#charter}

Switchboard Orchestration API チームは、Switchboard API とその背後のオーケストレーションのやり取りを所有します。チームは Dedicated テナントの運用に必要なすべてのやり取りを統合し、他のチームが依存するテナントモデルの各部分のオーナーシップと制御を定義します。また、ビジネスロジックをフロントエンドから API に移し、人と自動化のどちらの利用者にも同じ動作を提供します。

- **対象範囲：** Switchboard Orchestration API と、運用担当者および自動化が使用する統合されたテナント運用ツール群。
- **対象範囲外：** 社内外のお客様向け UI とワークフロー（Switchboard Customer Features が所有）。Amp と Instrumentor（DevOps Dedicated Orchestration Automation が所有）。

#### FY27 の優先事項 {#fy27-priorities}

- API ファーストのアプローチの採用を完了し、Orchestration API をテナント運用の動作を定義する唯一の情報源にします。FY27 の終わりまでに、API に表現されていないものを残さないようにします。Hosted Runner は、移行が必要だった大規模な機能の代表例です。
- API と成果物のオーナーシップ、およびテナントモデルの各部分の制御を定義し、他の Dedicated チームが安全にセルフサービスを利用できるようにします
- DevOps Dedicated Orchestration Automation と Switchboard Customer Features の両チームを、API の主要なお客様として扱います

#### チームメンバー {#team-members}

{{< team-by-manager-slug manager="o-lluch" department="Dedicated Switchboard Team" >}}

#### 責任 {#responsibilities}

チームが支援する対象：

- API が駆動するオーケストレーションプラットフォームを所有する DevOps Dedicated Orchestration Automation
- API 上にワークフローを構築する Switchboard Customer Features
- Dedicated テナントを操作する必要がある社内の運用担当者と自動化

チームはこれらのチームと責任範囲の境界を調整し、Service Delivery Platform および Cells の運用チームとの対話を継続します。

所有する成果物：

- Switchboard Orchestration API
- テナントモデルの各部分のオーナーシップ、スキーマ、アクセス制御
- 統合されたテナント運用のやり取り
- ワークフローエンジン

#### 成功の姿 {#what-success-looks-like}

- Switchboard API が Dedicated のすべてのオーケストレーションのニーズに対応します
- Dedicated のファンクショナルチームが、確立されたユースケースの変化に応じて、カスタマイズされた Switchboard の実装を待たずに、Switchboard の API と機能を独立して利用できます。

影響は [Switchboard パフォーマンス指標（PI）ダッシュボード](https://share-d4dd0a.gitlab.io/switchboard-pi/)でも追跡します。

### Switchboard Features {#switchboard-features}

#### ミッション {#mission-1}

GitLab Dedicated のお客様に、一般的なテナント設定をセルフサービスで制御する機能と全体的な可視性を提供します。日常的な変更から人手を取り除き、SRE のトイルや手動プロセスを増やすことなく Dedicated のテナント数を拡大できるようにします。

#### 活動方針 {#charter-1}

Switchboard Customer Features チームは、お客様向けの Switchboard 製品を所有します。これは、設定とワークフローを自動化する、Dedicated テナント向けのセルフサービス変更管理コンソールです。日常的な変更から人手を取り除き、運用上のトイルを同じ割合で増やすことなくテナント数を増やせることを成功とします。

- **対象範囲：** Tenant Management Console UI、お客様向けのセルフサービス設定、お客様向けのステータスと SLA 情報、セルフサービス移行における顧客体験、SLA と設定へのプログラムによるアクセスを提供する Tenant Admin API。
- **対象範囲外：** Orchestration API 自体とテナントモデルのガバナンス（Switchboard Orchestration API が所有）、社内の対応担当者向けツール（DevOps Dedicated Responder Automation が所有）。また、基盤となるインフラストラクチャではなく、GitLab アプリケーションやモジュール型機能を設定するための機能は、原則として Switchboard ではなく GitLab Admin UI に追加します。

#### FY27 の優先事項 {#fy27-priorities-1}

- セルフサービスの Geo 移行
- SLA データとお客様向けのステータスページ
- GitLab チームメンバーが関与せずにお客様が行えるテナント設定変更の拡充

#### チームメンバー {#team-members-1}

{{< team-by-manager-slug manager="mckgl" department="Dedicated Switchboard Team" >}}

#### 責任 {#responsibilities-1}

チームが支援する対象：

- Dedicated テナントで確認や変更が必要なあらゆる事項についての GitLab Dedicated のお客様
- Dedicated のエンジニアリングチームおよび Dedicated のお客様と連携する GitLab Dedicated の顧客アカウントチーム（Support Engineering、Customer Success、Solution Architects、Professional Services）

チームは、特に FY28 にさらに多くのモジュール型機能が導入されることを踏まえ、Switchboard Orchestration API、DevOps Dedicated Responder Automation、Orchestration Automation チームと緊密に連携します。

所有する成果物：

- Tenant Management Console UI（Switchboard）
- お客様向けのセルフサービス設定ワークフロー（Temporal 上に構築）
- お客様向けのステータスページと SLA データ
- 社内の運用ワークフロー（メンテナンスなど。こちらも Temporal 上に構築）
- Tenant Admin API
- 認証とユーザー管理
- BigQuery での Switchboard データの利用可能性

#### 成功の姿 {#what-success-looks-like-1}

Dedicated がトイルを増やさずにテナント数を拡大します。日常的な変更はお客様が Switchboard を通じて開始し、完了させ、通常業務の設定変更に GitLab の人手を介入させません。

### 成功指標 {#success-metrics}

[Switchboard パフォーマンス指標（PI）ダッシュボード](https://share-d4dd0a.gitlab.io/switchboard-pi/)で追跡します。

## 私たちとの連携方法 {#working-with-us}

Switchboard チームと関わるには：

- GitLab Dedicated チーム Issue トラッカーで [Issue を作成する](https://gitlab.com/gitlab-com/gl-infra/gitlab-dedicated/team/-/issues/new)
- Issue に以下のラベルを付ける：
  - `component::Switchboard`
  - `workflow-infra::Triage`
  - `group::switchboard`
- Issue を作成する際は、誰かに `@` でメンションする必要はありません
- 注意を引きたい場合は、[Dedicated グループ階層](/handbook/engineering/infrastructure-platforms/gitlab-dedicated/#gitlab-group-hierarchy)で定義されている特定のチームハンドル `@gitlab-dedicated/switchboard` を使用してください
- クロスファンクショナルチームとして、Switchboard は内部で `@gitlab-dedicated/switchboard/frontend-engineers` と `@gitlab-dedicated/switchboard/backend-engineers` を使用し、特定の専門知識を持つエンジニアからのインプットを求めます
- [Switchboard Issue ボード](https://gitlab.com/groups/gitlab-com/gl-infra/gitlab-dedicated/-/boards/4498935?label_name[]=component%3A%3ASwitchboard)はチームの現在のすべての作業を追跡しています

- Slack チャンネル
  - Switchboard 固有の質問は [#g_dedicated-switchboard-team](https://gitlab.slack.com/archives/C04DG7DR1LG)で見つけられます
  - 私たちの Slack グループハンドルは `@dedicated-switchboard-team` です
  - 広い Dedicated グループに関連する Issue は [#g_dedicated-team](https://gitlab.slack.com/archives/C025LECQY0M)で提起できます
  - Dedicated グループ内の他のチームには、チーム作業のディスカッション用の独自の作業チャンネルがあります：
    - [#g_dedicated-environment-automation-team](https://gitlab.slack.com/archives/C074L0W77V0)
    - [#g_dedicated-us-pubsec](https://gitlab.slack.com/archives/C03R5837WCV)

## Switchboard アプリケーションへのアクセスのリクエスト {#requesting-access-to-the-switchboard-application}

アクセスのプロビジョニングは環境によって異なります：

### Test 環境 {#test-environment}

**Test** 環境へのアクセスは **[Lumos](https://app.lumos.app/)** を通じてプロビジョニングされます。Test アクセスに以前使用されていた Okta グループはもう存在しません。

1. `Switchboard Test` の Lumos アクセスリクエストを開きます。
1. 必要なロールを指定します（下記の [ロールの説明](#roles)を参照）。
1. **Permissions** では、**Other** を選択します（`Dedicated Team Users` が特に必要な場合を除く）。
1. アクセスの正当性を記載します。

### Beta および Production 環境 {#beta-and-production-environments}

**Beta** および **Production** 環境へのアクセスでは、引き続き既存の Google/Okta グループプロセスを使用します：

- 以下を指定して [Access Request](https://gitlab.com/gitlab-com/team-member-epics/access-requests/-/issues/new?issuable_template=Individual_Bulk_Access_Request)を作成
  - 特定の環境 (Beta / Production)
  - 必要なロール (下記の [ロールの説明](#roles)を参照)
  - アクセスの正当性
- アプリケーションのアクセス＆プロビジョニングの詳細は [Tech Stack](/handbook/business-technology/tech-stack-applications/)の `Switchboard - GitLab Dedicated` セクションにあります

<details><summary>Switchboard 内部ロールと権限</summary>

### ロール {#roles}

- **Read only**: テナントインスタンスを表示のみ可能。例： CSM、Compliance チームメンバー。
- **Provisioner**: アカウントをプロビジョニングし、ユーザーを管理。
- **Support**: テナントインスタンスを表示し、ユーザーを管理。例： Professional Services (PS)、Support チームメンバー。
- **Migration Operator**: マイグレーション準備のためにテナントインスタンスを一時的に運用。このロールは Site Reliability Engineers (SRE) と Switchboard チームメンバーに制限されています。
- **Hosted Runner Operator**: テナントインスタンスを表示し、Hosted Runner の設定を管理。このロールは Site Reliability Engineers (SRE) と Switchboard チームメンバーに制限されています。
- **Operator**: テナントインスタンスを運用。このロールは Site Reliability Engineers (SRE) と Switchboard チームメンバーに制限されています。

### 権限 {#permissions}

| **ロール**                   | テナントの作成 | テナントの表示            | テナント設定の編集 | ジョブの作成        | GitLab ユーザーの追加/変更 | テナントユーザーの追加/変更 | メール/パスワードでログイン | 読み取り専用 API トークンの作成 | 読み取り専用 API アクセス |
|----------------------------|---------------|-------------------------|--------------------|--------------------|---------------------------|---------------------------|---------------------------|------------|------------|
| **Read only**              | いいえ            | はい                     | いいえ                 | いいえ                 | いいえ                        | いいえ                        | いいえ                        | はい        | はい        |
| **Provisioner**            | はい           | はい                     | いいえ                 | いいえ                 | いいえ                        | はい                       | いいえ                        | はい        | はい        |
| **Support**                | いいえ            | はい                     | いいえ                 | いいえ                 | いいえ                        | はい                       | いいえ                        | はい        | はい        |
| **Migration Operator**     | はい           | 特定のテナントのみ | はい                | はい                | はい                       | はい                       | いいえ                        | はい        | はい        |
| **Hosted Runner Operator** | いいえ            | はい                     | いいえ                 | Hosted Runner のみ | いいえ                        | いいえ                        | いいえ                        | はい        | はい        |
| **Operator**               | はい           | はい                     | はい                | はい                | はい                       | はい                       | はい                       | はい        | はい        |

</details>

## 私たちの働き方 {#how-we-work}

### ミーティングとスケジュールされた通話 {#meetings-and-scheduled-calls}

私たちは、[プロジェクト管理セクション](/handbook/engineering/infrastructure-platforms/gitlab-dedicated/#project-management)で説明されているように、プロジェクトの Issue トラッカー内で非同期に作業することを優先します。

チームには、いくつかの定期的な同期通話があります：

- `Switchboard Sync` - この通話中、私たちはチームメンバーの日々の作業に関する重要な情報や、同期ディスカッションが必要なプロジェクト項目を共有します
- Individual Contributor と Engineering Manager との 1 対 1

個人間の Switchboard 作業を議論するための即興 Zoom ミーティングが必要に応じて作成されます。
これらのミーティングはプライベートでストリーミングされるか、録画され (1*)、[GitLab Unfiltered プレイリスト](https://www.youtube.com/playlist?list=PL05JrBw4t0Kp3NBMl7c0DGXCjW5rSPeOK)にアップロードされることが期待されます。
通話の結果は永続的な場所で共有されます (Slack は永続的ではありません)。これは、チームが成長するにつれて、初期段階で行われた決定がチームが大きくなった後の段階で疑問視されるため、特に重要です。

`1*` 録画ルールの例外は： 1 対 1 通話、プロジェクト以外の作業に関するディスカッション、当事者が録画に快適でない場合や議論されているコンテンツの性質から録画できない場合。ただし、例外があっても、プロジェクト関連のディスカッションの結果は、メインの Issue トラッカーなどの永続的な場所に記録される必要があります。

### プロジェクトの追跡、計画、デリバリー {#tracking-planning--delivering-projects}

#### リソース {#resources-1}

- [Switchboard チームロードマップ](https://gitlab.com/groups/gitlab-com/gl-infra/gitlab-dedicated/-/roadmap?state=all&sort=start_date_asc&layout=WEEKS&timeframe_range_type=CURRENT_QUARTER&label_name[]=group::switchboard&progress=COUNT&show_progress=true&show_milestones=false&milestones_type=ALL&show_labels=false)
- [Switchboard チームトップレベルエピック](https://gitlab.com/groups/gitlab-com/gl-infra/-/epics/1048)
- [Switchboard チーム Issue ボード](https://gitlab.com/groups/gitlab-com/gl-infra/gitlab-dedicated/-/boards/4498935?label_name[]=team%3A%3ASwitchboard)
- [Switchboard テクニカルライティングボード](https://gitlab.com/groups/gitlab-com/gl-infra/gitlab-dedicated/-/boards/7068209?label_name[]=component%3A%3ASwitchboard&label_name[]=Technical%20Writing)
- [Dedicated Issue トラッカー](https://gitlab.com/gitlab-com/gl-infra/gitlab-dedicated/team/-/issues/?sort=created_date&state=opened&first_page_size=100)

#### 四半期計画 {#quarterly-planning}

四半期計画は、Switchboard EM と PM によって所有および推進されます。

1. EM または PM は、Dedicated の `quarterly_planning` Issue テンプレートを使って四半期計画 Issue を作成します。
    - Issue のタイトルを `Switchboard - FYXXQY planning` に設定する (XX は年、Y は四半期)
    - 理想的には、計画は少なくとも 1 四半期前に開始する必要があります。次の四半期の計画 Issue は、現在の四半期の第 2 月の 1 日目までに作成されるべきです

2. EM と PM が Issue 上で非同期にブレインストーミングします
3. 現在の四半期の第 3 月に、EM または PM は
   - チームにインプットを求める
   - すべての依存関係が関連チームに伝達されていることを確保する
   - 目標に優先順位を付ける
   - 関連エピックを文書化する
4. EM は、Grand Review で使用される四半期のデリバリーエピックを作成し、この変更を反映するように epic-summaries ボットを更新します

#### Directly Responsible Individuals (DRIs) {#directly-responsible-individuals-dris}

各プロジェクトは、Directly Responsible Individual または [DRI](/handbook/people-group/directly-responsible-individuals/)によって所有および推進されます。
Switchboard はクロスファンクショナルチームですが、DRI は、自分の専門知識に関係なく、UX デザイン、製品の決定、フロントエンドおよびバックエンドの実装と、その他のすべてのデリバラブルを含むプロジェクトの出力を提供する責任を負います。
例えば、DRI がバックエンドエンジニアの場合、すべての Issue を直接実装するわけではないかもしれませんが、他のチームメンバーがプロジェクトを達成するために必要な情報にアクセスできるように、進捗を確認する責任があります。
DRI はプロジェクトのすべての部分を直接実装するわけではありませんが、確実に提供する責任を負います。これには、エンジニアリングチーム内で Issue が優先順位付けされることを確保するための EM とのコラボレーション、チーム内のさまざまな機能 (UX、フロントエンド、バックエンド、製品など)と協力してプロジェクトを達成するのに必要な情報にアクセスできるようにする、可能性のあるリスクを強調する、チーム全体での足並みを揃えるなどが含まれます。

私たちは、アイデアについてコラボレーションし、問題を解決するために Issue を使用します。Issue で作業しているすべての人は、最新の決定で説明 (SSoT)を最新の状態に保ち、結果として生じるフォローアップ作業が追跡されていることを確保する責任があります。DRI は、ディスカッションスレッドが決定に達することを確保する責任があります。DRI はまた、スレッドがタイムリーな結論を得ていない場合、同期ディスカッションへの転換を推進すべきです。UX デザインが実装前に合意されている場合、DRI は、MR デリバラブルが Figma で提供されたデザインと一致し、それに応じて承認することを確認することにより、MR レビュープロセスを加速し、PM と UX Designer の作業量を削減できます。

プロジェクトの開始時に DRI が従うエピックのリファインメントプロセスは、以下の [エピックのリファインメント](#epic-refinement)セクションで説明されています。DRI は、週次ステータス更新 ([詳細](/handbook/engineering/infrastructure-platforms/project-management/#projects-are-reviewed-weekly-in-the-grand-review))と、エピックにデモリンクが添付されることを確保する責任もあります ([Switchboard デモ](#switchboard-demos)を参照)。最終のステータス更新を提供し、エピックを閉じる手順は [ここ](/handbook/engineering/infrastructure-platforms/project-management/#when-a-project-is-finished)にあります。

#### エピックのリファインメント {#epic-refinement}

Switchboard チームがエピックをリファインメントするプロセス：

1. エピックの [DRI](/handbook/people-group/directly-responsible-individuals/)を特定
   - チームメンバーが志願するか、EM が特定のチームメンバーに DRI として活動するよう求めることができます
1. 不足している要件を特定
   - すべてのチームメンバーは、エッジケースを引き出すためにこの Issue のコメントで質問します
1. DRI がエピックに ~"workflow-infra::Ready" のラベルを付ける
1. DRI はエピックキックオフが完了していることを確認 - [エピックテンプレート](#epic-template)を参照
1. 期限と開始日を割り当てる
   - DRI、EM、PM が協力して、チームのキャパシティ、外部の期限、関与する作業量に基づいて期限を割り当てる
1. DRI はエピックで提供される少なくとも 1 つのデモを特定し、エピックの説明に簡単な概要を追加する ([Switchboard デモ](#switchboard-demos)を参照)。
1. 大幅なコード修正やアーキテクチャの追加の場合、DRI は開発作業が始まる前に、可能であればチームと早期に技術文書ドラフトを作成して共有します。
   1. 文書ドラフトには、新しいシステムの高レベルの技術的説明と、それがどのように機能するように意図されているかを含めるべきです
   1. シーケンス図のようなイラストの図が推奨されます
   1. 技術文書は、現在 `./docs` ディレクトリの下にある switchboard プロジェクトに追加できます
1. EM または DRI が個々の Issue に ~"workflow-infra::Triage" のラベルを付ける
1. DRI は、可能な限り Issue が並行して取り組まれるようにし、複数のエンジニアが単一のエピックに貢献できるようにする
1. エピックがフロントエンドとバックエンドの両方の実装を含む場合、Issue はそれに応じてラベル付けされるべきです
1. チームメンバーは Issue を取り上げ、それらに取り組み始める
1. チームメンバーは個々の Issue で進捗を追跡するために Progress Threads を使用する
1. チームは Switchboard Sync 中に進捗を確認する
   - 提起する Issue のないエピックは読み取り専用にできる
   - 最も近い期限に基づいて、エピックのディスカッションに優先順位を付ける
1. 期限が現実的でない場合、チームメンバーは、チームが一緒にこれに対処できるように、できるだけ早く Issue にコメントする

注： 1、2、4 は並行して実行できます

#### Issue のリファインメント {#issue-refinement}

Switchboard チームが Issue をリファインメントするプロセス：

1. Issue が作成され、リファインメントの準備ができたら、~"workflow-infra::Triage" ラベルを付ける
1. PM と EM は、`Open` と ~"workflow-infra::Ready" のカラムが優先されることを確認する
1. チームメンバーは [Issue ボード](https://gitlab.com/groups/gitlab-com/gl-infra/gitlab-dedicated/-/boards/4498935?label_name[]=team%3A%3ASwitchboard)の `Open` カラムの Issue を見て、明確性を高めるために Issue で質問する
1. Issue に未解決の質問がない場合、~"workflow-infra::Ready" のラベルを付けることができ、自動的に `Ready` カラムに移動します
1. Issue が何らかの方法でユーザーにテキストを公開する場合、`technical writing` ラベルを追加する必要があります。例えば、Issue が UI テキストを変更する、エラーメッセージを表示する、フィールドを追加するなどの場合です
1. Issue がフロントエンド実装を必要とする場合、`frontend` ラベルを使用するべきです
1. DRI は、可能な限り Issue が並行して取り組まれるようにし、複数のエンジニアが単一のエピックに貢献できるようにする
1. デフォルトは、ディスカッションが中央集中化され、実装が並行して実行され、フロントエンドとバックエンドのエンジニアが同期されるように、単一の機能のフロントエンドとバックエンドの実装の両方を同じ Issue に保持することです
1. 実装が API エンドポイントの修正または作成を必要とする場合、再作業を避けるために、エンドポイント、パラメータ構造、戻りデータ構造の計画は、フロントエンドとバックエンドの間でできるだけ早く合意されるべきです。
1. フロントエンドとバックエンドの実装は、別々の MR で提供されるべきです
1. 実装が並行して行えない場合、またはバックエンドとフロントエンドの実装の間に有意な遅延がある可能性がある場合、またはバックエンドが独立して価値を提供できる場合、Issue を分割し、関係を関連する Issue をリンクすることで明確に特定する必要があります
1. SRE 依存関係は、Issue に明確に文書化された要件で、できるだけ早く呼び出されるべきです ([SRE 依存関係 Issue の例](https://gitlab.com/gitlab-com/gl-infra/gitlab-dedicated/team/-/issues/2798))

#### Issue とエピックの追跡 {#issue--epic-tracking}

1. エンジニアは、非同期方式で進捗を共有するために Progress Threads を使用する
1. Switchboard Sync の開始時に、チームは ~"workflow-infra::In Progress" または ~"workflow-infra::Triage" のラベルが付いたエピックを確認して、期限が適切であることを確認し、ブロッカーを強調する
1. エピックの DRI は、[Grand Review](/handbook/engineering/infrastructure-platforms/project-management/#projects-are-reviewed-weekly-in-the-grand-review)の準備のために毎週水曜日にエピック説明のステータスを更新する
1. エピックの DRI は毎週期限をレビューする。エピックのステータス更新には、期限における DRI の信頼レベルと、デリバリーへのリスクが含まれるべきです

#### 作業の選択／次に何をするか {#picking-up-work--what-to-work-on-next}

1. [Issue ボード](https://gitlab.com/groups/gitlab-com/gl-infra/gitlab-dedicated/-/boards)の ~"workflow-infra::Ready" カラム
   1. [Issue ボード](https://gitlab.com/groups/gitlab-com/gl-infra/gitlab-dedicated/-/boards/4498935?label_name[]=team%3A%3ASwitchboard)の ~"workflow-infra::Ready" カラムから Issue を選択する
   1. Issue を自分に割り当て、~"workflow-infra::In Progress" に設定する
   1. 該当する場合、Issue の説明に `Implementation Plan` を更新する
   1. Issue に `Progress Thread` を作成し、毎日更新する

1. [Switchboard チームトップレベルエピック](https://gitlab.com/groups/gitlab-com/gl-infra/-/epics/1048)
    1. Switchboard のトップレベルエピックを見て、最も近い期限の Issue に取り組むことを申し出る
    1. ガイダンスとして [Switchboard チームロードマップ](https://gitlab.com/groups/gitlab-com/gl-infra/gitlab-dedicated/-/roadmap?state=all&sort=start_date_asc&layout=WEEKS&timeframe_range_type=CURRENT_QUARTER&label_name[]=group::switchboard&progress=COUNT&show_progress=true&show_milestones=false&milestones_type=ALL&show_labels=false)を使用する

1. [Issue ボード](https://gitlab.com/groups/gitlab-com/gl-infra/gitlab-dedicated/-/boards/4498935?label_name[]=team%3A%3ASwitchboard)の `Open` カラム
   1. `Open` カラムの一番上にある Issue を見る
   1. 各 Issue について、不足している情報を特定するために質問しディスカッションを推進する
   1. 取り組む準備ができている場合は Issue を ~"workflow-infra::Ready" としてマークするか、それを行う自信がない場合は EM を @メンションする

#### Switchboard デモ {#switchboard-demos}

デモにより、チームメンバーは Issue またはエピックの進捗または最終的な出力を共有できます。フォーカスは情報の共有であり、オスカー受賞ドキュメンタリーを作成することではないので、チームとして私たちは画面録画、録画された Zoom ミーティング、Loom のいずれかの退屈なソリューションを使用します。録画へのリンクはエピック説明に追加されます。

エピックの [DRI](/handbook/people-group/directly-responsible-individuals/)は、エピックがキックオフされるときにエピックで提供される少なくとも 1 つのデモを特定する責任を負います。例えば _機能 x が提供されたとき (または Issue y が Done になったとき)、機能 x をデモする_。
チームメンバーは、すでに予約されている時間中に同期 Q&A が行える可能性があるように、隔週の Switchboard チーム同期の直前にデモを提供するタイミングを取ることが推奨されます。
チームメンバーは、進捗またはデリバリーマイルストンを共有するための追加のデモを作成することを選択できます。

#### Issue テンプレート {#issue-templates}

Switchboard は以下の Issue テンプレートを保守します：

| テンプレート                                    | 利用者                    | 用途                                                                                                                              | 詳細                                                                                                                     |
|---------------------------------------------|-------------------------|---------------------------------------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------|
| `switchboard_bug.md`                        | GitLab チームメンバー     | Switchboard アプリケーションのバグの報告                                                                                        | 通常 EA と Switchboard チームメンバーが使用                                                                                     |
| `feature_proposal_switchboard.md`           | GitLab チームメンバー     | 新しい機能の提案                                                                                                                | 通常 Switchboard チームメンバーが使用。エピックテンプレートで置き換える可能性、またはより多くのフィールドをオプションにするように更新する可能性がある |
| `switchboard-feedback.md`                   | GitLab チームメンバー     | これは、Switchboard に提案とフィードバックを行うために使用されます。EM と PM が優先順位を付ける EA Requests エピックに供給されます | このテンプレートは、EA チームメンバーがフィードバックを提供するために定期的に使用されます                                                              |
| `switchboard_tenant_model_schema_update.md` | EA チームメンバー         | テナントモデルスキーマ更新                                                                                                            |                                                                                                                                     |
| `switchboard_tenant_onboarding_request.md`  | Onboarding DRI          | Dedicated オンボーディングプロセスを開始                                                                                             | 通常 Dedicated PM が使用                                                                                                     |
| `create_onboarding_tenant_model_request.md` | Onboarding DRI          | 新しい Dedicated 顧客のオンボーディング準備のために OnboardingTenant の作成を追跡するために使用                             | 通常 Dedicated PM が使用                                                                                                     |
| `request_for_switchboard_help.md`           | Support Engineers       | Issue を強調し、Switchboard チームメンバーからのヘルプをリクエスト                                                                     |                                                                                                                                     |
| `switchboard_team_member_onboarding.md`     | Switchboard EM          | 新しいチームメンバーを Switchboard チームにオンボード                                                                                     |                                                                                                                                     |
| `switchboard_internal_issue.md`             | Switchboard チームメンバー | このテンプレートは、DRI が既存の明確に定義されたエピックに Issue を作成するために使用されます                                                     |                                                                                                                                     |

### マージリクエストレビューガイドライン {#merge-request-review-guidelines}

私たちは特に [GitLab コードレビューガイドライン](#gitlab-code-review-guidelines)に従い、マージリクエストレビューをリクエストする際は
[Dedicated グループ原則](/handbook/engineering/infrastructure-platforms/gitlab-dedicated/#merge-requests)に従います。

#### マージリクエストレビュープロセス {#merge-request-review-process}

Switchboard チームは現在小規模なので、'承認してマージ' アプローチを使用します：

1. マージリクエストのレビューの準備ができたら、1 つ以上の [Switchboard のレビュアー](https://gitlab.com/groups/gitlab-dedicated/switchboard/reviewers/-/group_members)を選択します。
   - 誰を選択するかが確実でない場合、[reviewer roulette](#reviewer-roulette)を使ってランダムにレビューアを選択できます。
   - Issue に `technical writing` のラベルが付いている場合、Switchboard Technical Writer をレビューアとして追加します
1. レビューアは [マージリクエストレビューのガイドライン](https://docs.gitlab.com/ee/development/code_review.html#reviewing-a-merge-request)に基づいてレビューを実行します。
1. 満足していれば、レビューアは他のレビューアが対処されていない質問や提案を持っていない限り、承認してマージします。
1. マージリクエストが必要な承認を持っている場合、レビューアはパイプラインをトリガーし、自動マージを設定します。
   - レビューアにマージ権限がない場合、マージするためにメンテナを探すべきです。

##### 追加の UI レビュープロセス {#additional-ui-review-process}

上記に加えて、UI への変更が提案される際は、以下の追加手順に従う必要があります：

**社内 GitLab ユーザーに見える UI 変更：**

1. MR 作成者は PM と UX Designer を MR で cc しますが、PM と UX Designer はレビューアまたはマージのブロッカーではありません
1. 提案がある場合、MR で対処するか、MR 作成者の裁量で後の MR で対処できます
1. 最終的に PM と UX Designer は社内可視 UI 更新のレビューアになりますが、私たちのプロセスはまだそこに達しておらず、PM と UX Designer のキャパシティもありません
1. UX またはコピーに関するヘルプやガイダンスが必要な場合、Issue の実装が始まる **前に** 質問してください

**外部の顧客に見える UI 変更：**

1. デザイン変更、コピー変更、製品要件など、Issue 上の未解決の質問を特定することは非常に重要で、MR 段階での曖昧さを避けます。これは、UI コード変更が開始される前に、Issue 内でのデザインディスカッションを通じて具体的な結論を出す必要があります。
1. MR 段階で UX/製品の部分が欠けている場合、DRI と Issue の担当者は、欠けている部分が MR で解決できるか、解決のために Issue に戻す必要があるかを決定するためにコラボレーションします。これは [DRI の定義](/handbook/people-group/directly-responsible-individuals/#empowering-dris)に従ったものです。
1. PM と Designer は、これらのリクエストを最優先で処理します。
1. PM をレビューアとして MR に追加し、最新情報を伝えます。このレビューは MR の進捗を妨げず、PM はそれを高い優先度で処理します。理想的には、製品要件は Issue で確定すべきです。
1. 新しいコピーの変更がある場合は、Technical Writer をレビューアとして追加して情報を提供し、これはブロックしません (コピーは Issue で合意するべきです)。さらに、`Technical Writing` タグを MR に追加します。
1. UX Designer を MR で cc し、UX Designer がコアレビューアになる準備ができたら、そのことがチームに伝えられます

 **注：** UI 変更 (社内または顧客向け)で MR がオープンされた後にかなりのディスカッションが必要になった場合、そのディスカッションは解決のために Issue に戻され、MR はブロックされたとマークされるべきです。これらのディスカッションは解決の優先度が高く、MR で進捗を再開できるまで Issue は PM と Designer に割り当てるべきです。
注：

- 私たちは、これをサポートするチームメンバーがあり次第、2 つのレビューを必要とする典型的な 'レビューアとメンテナ' アプローチに移行することを意図しています。
- マージリクエストは [承認ガイドライン](#approval-guidelines)に基づいて承認されるべきです。
- [GitLab レビューガイドライン](https://docs.gitlab.com/ee/development/code_review.html#merging-a-merge-request)に従って、作成者がマージリクエストをマージするのが適切なシナリオがあります： ブロッキングコメントがなく、マージリクエストが必要なすべての承認を持っている場合、作成者またはメンテナがマージできます。
- Switchboard プロジェクトは [マージ結果パイプライン](https://docs.gitlab.com/ee/ci/pipelines/merged_results_pipelines.html)を使用するように設定されており、つまり、レビューアは更新が最新の main ブランチと互換性があることを保証するために、マージ前にパイプラインを実行する必要があります。
- マージリクエストをレビューするとき、レビューアは意図を伝えるために [Conventional Comments のラベル](https://conventionalcomments.org/#labels)を使用すべきです。
  - 疑念を避けるために、`Suggestion:`、`Issue:`、`Chore:` のコメントはすべてブロッキングです。`(non-blocking)` ステートメントで装飾されている場合を除きます。
- マージリクエストは、[GitLab ドキュメント](https://gitlab.com/gitlab-org/gitlab-foss/-/blob/master/doc/development/labels/index.md)にある [専門分野ラベル](https://gitlab.com/gitlab-org/gitlab-foss/-/blob/master/doc/development/labels/index.md#specialization-labels)を使ってラベル付けします。MR は ~"frontend"、~"backend"、または ~"documentation" のラベルが付くべきです

#### 承認ガイドライン {#approval-guidelines}

| マージリクエストに以下が含まれる場合  | 以下によって承認される必要があります |
| ------------------------------- | ------------------------ |
| `~backend` の変更        | [Backend maintainer](https://gitlab.com/groups/gitlab-dedicated/switchboard/maintainers/-/group_members)。 |
| `~frontend` の変更       | [Frontend maintainer](https://gitlab.com/groups/gitlab-dedicated/switchboard/maintainers/-/group_members)。 |

#### Reviewer roulette {#reviewer-roulette}

Reviewer roulette は、GitLab.com プロジェクトで使用される内部ツールで、コードベースの各領域に対してメンテナをランダムに選択します。メンテナを選択するには：

1. [reviewer roulette](https://gitlab-org.gitlab.io/gitlab-roulette/?currentProject=switchboard&sortKey=stats.avg30&mode=show&order=-1)ページに移動します。
1. Switchboard プロジェクトを選択します。
1. 目的のロールを選択します： `~maintainer::frontend`、`~maintainer::backend`、`~reviewer::backend`、`~reviewer::frontend`。
1. `Spin the wheel` をクリックします。

#### GitLab コードレビューガイドライン {#gitlab-code-review-guidelines}

- [マージリクエストのレビューを依頼する](https://docs.gitlab.com/ee/development/code_review.html#having-your-merge-request-reviewed)
- [マージリクエストをレビューする](https://docs.gitlab.com/ee/development/code_review.html#reviewing-a-merge-request)
- [適切なバランス](https://docs.gitlab.com/ee/development/code_review.html#the-right-balance)
- [品質](https://docs.gitlab.com/ee/development/code_review.html#quality)
- [パフォーマンス、信頼性、可用性](https://docs.gitlab.com/ee/development/code_review.html#performance-reliability-and-availability)
- [マージリクエストのパフォーマンスガイドライン](https://docs.gitlab.com/ee/development/merge_request_concepts/performance.html)

### レビュアーとメンテナー {#reviewers-and-maintainers}

Switchboard には、[Reviewer と Maintainer](https://gitlab.com/gitlab-dedicated/switchboard)の 2 つのグループがあります：

- すべての Switchboard チームメンバーは `Reviewer` グループに含まれます。
- チームメンバーが完全にオンボードされ、コードベースに関する知識に自信を持つようになったら、Maintainer グループに招待されます。

### フィーチャーフラグ {#feature-flags}

#### 目的 {#purpose}

Switchboard のフィーチャーフラグは、新機能の安全で段階的なロールアウトを可能にし、問題が発生したときの迅速なロールバックのためのキルスイッチを提供します。

#### 完了の定義 {#definition-of-done}

**フィーチャーフラグコードは、ロールアウト成功後に削除する必要があります。** 機能は、以下を満たすまで完了とは見なされません：

- 機能が該当するテナントの 100% にロールアウトされた
- 機能が事前に合意された時間 (通常はエピック計画レベルで決定され、最低 1 週間)にわたり安定している
- すべてのフィーチャーフラグの条件分岐がコードベースから削除された

#### フィーチャーフラグを扱う {#working-with-feature-flags}

- **オーナーを割り当てる** - すべてのフィーチャーフラグには、その削除を担当する指定されたオーナーが必要です。オーナーは削除 Issue の担当者として設定されます。
- **クリーンアップ Issue を事前に作成する** - フィーチャーフラグを導入する際は、すぐに削除のためのフォローアップ Issue を作成し、実装 Issue にリンクする
- **エピックで削除計画を文書化する** - フィーチャーフラグを導入するエピックは、フィーチャーフラグセクションに予想される削除タイムラインとクリーンアップ基準を含める必要があります
- **短命をデフォルトとする** - フラグは通常 100% ロールアウト後 1-2 週間以内に削除されるべきです

陳腐化したフィーチャーフラグは、技術的負債を生み出し、システムの意図された動作を不明瞭にします。タイムリーなクリーンアップは、コード品質の維持に不可欠です。

#### エピックテンプレート {#epic-template}

<details><summary>エピックテンプレート</summary>

```markdown
### :levitate: DRI
- TBD

### :busts_in_silhouette: Participants 

- Frontend Engineer:
- Backend Engineer:
- SRE:
- Product Designer:
- PM:
- Technical Writer:
- EM:


### :thinking: Problem to solve
<!-- Describe the problem or opportunity this feature addresses. What is broken, missing, or inefficient? Focus on the "why" — what user or business need is driving this work? -->



### :bust_in_silhouette: Target users
<!-- Who will benefit from this change? Describe the Switchboard user groups affected (e.g., customer tenant admins, internal operators, internal support users, etc). Include any relevant context about their workflows.-->



### :bulb: Proposal
<!--Describe the proposed solution at a high level.-->



### :crystal_ball: Design spec

* Spec issue:
* Walkthrough video:
* Prototype:
* Figma:

### :link: Dependencies

### :book: Documentation

* Public docs:
* Internal docs:

### :key: User permissions

| User role | Visible | Notes |
|-----------|---------|-------|
| [Internal - Operator / Migration Operator](/handbook/engineering/infrastructure-platforms/gitlab-dedicated/switchboard/#roles) |  |  |
| [Internal - Hosted Runner Operator](/handbook/engineering/infrastructure-platforms/gitlab-dedicated/switchboard/#roles) |  |  |
| [Internal - Provisioner](/handbook/engineering/infrastructure-platforms/gitlab-dedicated/switchboard/#roles) |  |  |
| [Internal - Support](/handbook/engineering/infrastructure-platforms/gitlab-dedicated/switchboard/#roles) |  |  |
| [Internal - Read Only](/handbook/engineering/infrastructure-platforms/gitlab-dedicated/switchboard/#roles) |  |  |
| [External - Tenant Admin](https://docs.gitlab.com/ee/administration/dedicated/configure_instance.html#add-users-to-an-instance) |  |  |
| [External - Read Only](https://docs.gitlab.com/ee/administration/dedicated/configure_instance.html#add-users-to-an-instance) |  |  |

| Functionality | Roles with Access | Fleet-Level (Y/N) | Permission Name (set by Engineering) |
|---------------|-------------------|-------------------|--------------------------------------|
| e.g. View runner |  |  |  |
| e.g. Create runner |  |  |  |

### :flag_white: Feature flags
<!--This table should document any feature flags that were added or removed by the epic.-->

| Feature flag | Details | Removal Issue |
|--------------|---------|---------------|
|  |  |  |

### :arrow_right: Rollout and customer communications (optional)

_Use this section if the epic needs a rollout or customer communications after the build is complete. The DRI and the PM do this work together. Remove this section if it is not necessary._

- [ ] Make the rollout plan with the PM, for example internal users first and then all tenants.
- [ ] Tell the account teams before the release.
- [ ] Write the customer communications with the PM. Post them in #dedicated-customer-hub.
- [ ] If the change can disrupt customers, get approval from the account teams before the release.

### :books: Resources

### :arrow_forward: Demo

https://handbook.gitlab.com/handbook/engineering/infrastructure-platforms/gitlab-dedicated/switchboard/#switchboard-demos

---

<!-- STATUS NOTE START -->

<!-- STATUS NOTE END -->

/label ~"group::switchboard" ~"workflow-infra::Triage"
/confidential

```

</details>
