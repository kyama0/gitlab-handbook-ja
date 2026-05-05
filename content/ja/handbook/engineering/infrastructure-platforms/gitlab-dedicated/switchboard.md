---
title: Switchboard チーム
upstream_path: /handbook/engineering/infrastructure-platforms/gitlab-dedicated/switchboard/
upstream_sha: 0e6f01390a34aeb6706ace17d8d3c50e74e82d0d
translated_at: "2026-04-28T22:31:40Z"
translator: claude
stale: false
---

## 概要

Switchboard は [Dedicated グループ](/handbook/engineering/infrastructure-platforms/gitlab-dedicated/)内のチームです。私たちのミッションは、外部の GitLab Dedicated カスタマーがテナント環境を管理できるようにし、GitLab Dedicated オファリングをスケールアップできるよう Environment Automation チームの運用負荷を軽減することです。このページに明示的に記載されている差異がない限り、[Dedicated グループ](/handbook/engineering/infrastructure-platforms/gitlab-dedicated/)に記載されているのと同じプロセスに従います。

### リソース

- [Switchboard ハンドブックページ](/handbook/engineering/infrastructure-platforms/gitlab-dedicated/switchboard/)
- [Switchboard デモライブラリ](https://gitlab.com/gitlab-com/gl-infra/gitlab-dedicated/switchboard/-/blob/main/docs/walkthrough-library.md)

## チームメンバー


<p class="my-3 text-sm text-gray-600 italic">チームメンバー情報は <a href="https://handbook.gitlab.com/handbook/engineering/infrastructure-platforms/gitlab-dedicated/switchboard/#team-members" rel="external noopener">原文 (英語)</a> を参照してください。</p>


プロダクトマネージャー: [Loryn Bortins](/handbook/company/team/#lbortins)
テクニカルライター: [Lysanne Pinto](/handbook/company/team/#lyspin)
プロダクトデザイナー: [Jesse Hoek](/handbook/company/team/#jhoek)

## 私たちとの連携方法

Switchboard チームと連携するには:

- GitLab Dedicated チームの Issue トラッカーで[Issue を作成する](https://gitlab.com/gitlab-com/gl-infra/gitlab-dedicated/team/-/issues/new)
- Issue に以下のラベルを付ける:
  - `component::Switchboard`
  - `workflow-infra::Triage`
  - `group::switchboard`
- Issue 作成時に誰かを `@` メンションする必要はありません
- 注意を引きたい場合は、[Dedicated グループ階層](/handbook/engineering/infrastructure-platforms/gitlab-dedicated/#gitlab-group-hierarchy)で定義されているチーム固有のハンドル `@gitlab-dedicated/switchboard` を使用してください
- クロスファンクショナルチームとして、Switchboard は特定の専門知識を持つエンジニアの意見を求める際に `@gitlab-dedicated/switchboard/frontend-engineers` と `@gitlab-dedicated/switchboard/backend-engineers` を内部的に使用しています
- [Switchboard Issue ボード](https://gitlab.com/groups/gitlab-com/gl-infra/gitlab-dedicated/-/boards/4498935?label_name[]=component%3A%3ASwitchboard)でチームの現在の作業をすべて追跡しています

- Slack チャンネル
  - Switchboard 固有の質問は [#g_dedicated-switchboard-team](https://gitlab.slack.com/archives/C04DG7DR1LG) で見つけることができます
  - Slack グループハンドルは `@dedicated-switchboard-team` です
  - Dedicated グループ全体に関連する Issue は [#g_dedicated-team](https://gitlab.slack.com/archives/C025LECQY0M) で提起できます
  - Dedicated グループ内の他のチームには、チームワークのディスカッション用の独自の作業チャンネルがあります:
    - [#g_dedicated-environment-automation-team](https://gitlab.slack.com/archives/C074L0W77V0)
    - [#g_dedicated-us-pubsec](https://gitlab.slack.com/archives/C03R5837WCV)

## Switchboard アプリケーションへのアクセスリクエスト

- [アクセスリクエスト](https://gitlab.com/gitlab-com/team-member-epics/access-requests/-/issues/new?issuable_template=Individual_Bulk_Access_Request)を作成し、以下を明記する:
  - 対象環境（Test / Beta / Production）
  - 必要な役割（[以下の役割説明](#roles)を参照）
  - アクセスの正当な理由
- アプリケーションのアクセス＆プロビジョニング詳細は[テックスタック](https://gitlab.com/gitlab-com/www-gitlab-com/-/blob/master/data/tech_stack.yml)の「Switchboard - GitLab Dedicated」セクションに記載されています

<details><summary>Switchboard 内部の役割と権限</summary>

### 役割 {#roles}

- **読み取り専用**: テナントインスタンスの表示のみ。例: CSM やコンプライアンスチームのメンバー。
- **プロビジョナー**: アカウントのプロビジョニングとユーザー管理。
- **サポート**: テナントインスタンスの表示とユーザー管理。例: Professional Services（PS）とサポートチームのメンバー。
- **Migration Operator**: マイグレーションの準備としてテナントインスタンスを一時的に操作します。この役割は SRE（Site Reliability Engineer）と Switchboard チームメンバーに限定されています。
- **Hosted Runner Operator**: テナントインスタンスの表示とホストランナー設定の管理。この役割は SRE と Switchboard チームメンバーに限定されています。
- **Operator**: テナントインスタンスの操作。この役割は SRE と Switchboard チームメンバーに限定されています。

### 権限

| **役割**                    | テナント作成 | テナント表示             | テナント設定の編集 | ジョブ作成         | GitLab ユーザーの追加/変更 | テナントユーザーの追加/変更 | メール/パスワードでログイン | API 読み取り専用トークン作成 | 読み取り専用 API アクセス |
|-----------------------------|--------------|--------------------------|--------------------|--------------------|----------------------------|-----------------------------|-----------------------------|------------------------------|---------------------------|
| **読み取り専用**            | 不可         | 可                       | 不可               | 不可               | 不可                       | 不可                        | 不可                        | 可                           | 可                        |
| **プロビジョナー**          | 可           | 可                       | 不可               | 不可               | 不可                       | 可                          | 不可                        | 可                           | 可                        |
| **サポート**                | 不可         | 可                       | 不可               | 不可               | 不可                       | 可                          | 不可                        | 可                           | 可                        |
| **Migration Operator**      | 可           | 特定テナントのみ         | 可                 | 可                 | 可                         | 可                          | 不可                        | 可                           | 可                        |
| **Hosted Runner Operator**  | 不可         | 可                       | 不可               | ホストランナーのみ | 不可                       | 不可                        | 不可                        | 可                           | 可                        |
| **Operator**                | 可           | 可                       | 可                 | 可                 | 可                         | 可                          | 可                          | 可                           | 可                        |

</details>

## 作業の進め方

### ミーティングと定例コール

私たちは[プロジェクト管理セクション](/handbook/engineering/infrastructure-platforms/gitlab-dedicated/#project-management)で説明されているように、プロジェクト Issue トラッカー内で非同期的に作業することを好みます。

チームには定期的な同期コールのセットがあります:

- `Switchboard Sync` — このコールでは、チームメンバーの日常業務に関する重要な情報を共有し、同期的なディスカッションが必要なプロジェクト項目を議論します
- 個々のコントリビューターとエンジニアリングマネージャーの 1 対 1

個人間の Switchboard 作業について議論するための臨時 Zoom ミーティングは必要に応じて作成されます。
これらのミーティングはプライベートストリーミング、または録画(1*)されて [GitLab Unfiltered プレイリスト](https://www.youtube.com/playlist?list=PL05JrBw4t0Kp3NBMl7c0DGXCjW5rSPeOK)にアップロードされることが期待されています。
コールの結果は永続的な場所に共有されます（Slack は永続的ではありません）。チームが成長するにつれて特に重要です。なぜなら、初期段階で行われた決定は、チームが大きくなった後期段階で問い直されることになるからです。

`1*` 録画ルールの例外: 1 対 1 のコール、プロジェクト外の業務に関するディスカッション、録画に不快を感じる当事者がいる場合、または議論の性質上録画できない場合。ただし例外があっても、プロジェクト関連のディスカッションの結果は、メインの Issue トラッカーなどの永続的な場所に記録する必要があります。

### プロジェクトの追跡、計画、デリバリー

#### リソース

- [Switchboard チームロードマップ](https://gitlab.com/groups/gitlab-com/gl-infra/gitlab-dedicated/-/roadmap?state=all&sort=start_date_asc&layout=WEEKS&timeframe_range_type=CURRENT_QUARTER&label_name[]=group::switchboard&progress=COUNT&show_progress=true&show_milestones=false&milestones_type=ALL&show_labels=false)
- [Switchboard チームトップレベルエピック](https://gitlab.com/groups/gitlab-com/gl-infra/-/epics/1048)
- [Switchboard チーム Issue ボード](https://gitlab.com/groups/gitlab-com/gl-infra/gitlab-dedicated/-/boards/4498935?label_name[]=team%3A%3ASwitchboard)
- [Switchboard テクニカルライティングボード](https://gitlab.com/groups/gitlab-com/gl-infra/gitlab-dedicated/-/boards/7068209?label_name[]=component%3A%3ASwitchboard&label_name[]=Technical%20Writing)
- [Dedicated Issue トラッカー](https://gitlab.com/gitlab-com/gl-infra/gitlab-dedicated/team/-/issues/?sort=created_date&state=opened&first_page_size=100)

#### 四半期計画

四半期計画は Switchboard EM と PM が主導します。

1. EM または PM が Dedicated `quarterly_planning` Issue テンプレートを使用して四半期計画 Issue を作成します。
    - Issue タイトルを `Switchboard - FYXXQY planning`（XX は年、Y は四半期）に設定する
    - 理想的には計画は少なくとも 1 四半期前に開始すべきです。次の四半期の計画 Issue は現在の四半期の第 2 ヶ月の初日以前に作成すべきです

2. EM と PM が Issue 上で非同期にブレインストーミングを行います
3. 現在の四半期の第 3 ヶ月に EM または PM は:
   - チームに意見を求める
   - すべての依存関係が関連チームに伝達されていることを確認する
   - 目標に優先順位を付ける
   - 関連エピックを文書化する
4. EM は Grand Review で使用される四半期のデリバリーエピックを作成し、このエピックの変更を反映するために epic-summaries ボットを更新します

#### DRI（Directly Responsible Individuals）

すべてのプロジェクトは、DRI（[Directly Responsible Individual](/handbook/people-group/directly-responsible-individuals/)）が担当し主導します。
Switchboard はクロスファンクショナルチームですが、DRI は UX デザイン、プロダクト上の決定、フロントエンドとバックエンドの実装、その他すべての成果物を含むプロジェクトのアウトプットをデリバリーする責任を負います。専門外であっても例外ではありません。
例えば DRI がバックエンドエンジニアの場合、すべての Issue を直接実装しないかもしれませんが、他のチームメンバーがプロジェクトを遂行するために必要な情報にアクセスできることを確認するために進捗を確認する責任があります。
DRI はプロジェクトのすべての部分を直接実装するわけではありませんが、デリバリーの責任を負います。これには、エンジニアリングチーム内で Issue が優先されるよう EM と協力すること、チーム内のさまざまな機能（UX、フロントエンド、バックエンド、プロダクトなど）がプロジェクトを遂行するために必要な情報にアクセスできるよう確認すること、考えられるリスクを強調してチーム全体での調整を確保することが含まれます。

私たちは Issue を使ってアイデアについて協力し問題を解決します。Issue に取り組むすべての人は、最新の決定でその説明（SSOT）を最新の状態に保ち、フォローアップの作業が追跡されていることを確認する責任があります。DRI はディスカッションスレッドが決定に至ることを確保する責任があります。
DRI はスレッドが適時な結論に至らない場合、[非同期から同期ディスカッションへの切り替え](/handbook/company/culture/all-remote/asynchronous/#when-to-pivot-from-asynchronous-to-synchronous)も主導すべきです。
実装前に UX デザインが合意されている場合、DRI は MR のレビュープロセスを加速させ PM と UX デザイナーの作業負担を軽減するため、MR の成果物が Figma で提供されたデザインと一致していることを確認し、適切に承認することができます。

エピック開始時に DRI が行うエピックリファインメントプロセスは、以下の[エピックリファインメント](#epic-refinement)セクションに説明されています。
DRI はまた、週次ステータス更新（[詳細](/handbook/engineering/infrastructure-platforms/project-management/#projects-are-reviewed-weekly-in-the-grand-review)）を担当し、エピックにデモリンクが添付されていることを確認します（[Switchboard デモ](#switchboard-demos)を参照）。
最終ステータス更新のデリバリーとエピックのクローズに関する指示は[こちら](/handbook/engineering/infrastructure-platforms/project-management/#when-a-project-is-finished)にあります。

#### エピックリファインメント {#epic-refinement}

Switchboard チームのエピックリファインメントプロセス:

1. エピックの [DRI](/handbook/people-group/directly-responsible-individuals/) を特定する
   - チームメンバーが自発的に名乗り出るか、EM が特定のチームメンバーに DRI を依頼することがあります
1. 不足している要件を特定する
   - すべてのチームメンバーが Issue のコメントに質問して、エッジケースを洗い出します
1. DRI がエピックに ~"workflow-infra::Ready" のラベルを付ける
1. DRI がエピックキックオフを完了していることを確認する — [エピックテンプレート](#epic-template)を参照
1. 期限と開始日を割り当てる
   - DRI、EM、PM がチームのキャパシティ、外部デッドライン、および作業量に基づいて期限を決定するために協力します
1. DRI がエピックとともにデリバリーされる少なくとも 1 つのデモを特定し、エピックの説明に簡単なアウトラインを追加します（[Switchboard デモ](#switchboard-demos)を参照）。
1. 大規模なコード変更やアーキテクチャの追加の場合、DRI は可能であれば開発作業開始前にドラフトの技術ドキュメントを早期にチームと共有します。
   1. ドラフトドキュメントには、新しいシステムの高レベルの技術的説明とその動作方法を含める必要があります
   1. シーケンス図のようなイラスト的な図が推奨されます
   1. 技術ドキュメントは `./docs` ディレクトリ下にある Switchboard プロジェクトに追加できます
1. EM または DRI が個々の Issue に ~"workflow-infra::Triage" ラベルを付ける
1. DRI は複数のエンジニアが 1 つのエピックに貢献できるよう、可能な限り Issue を並行して進められるようにします
1. エピックにフロントエンドとバックエンドの両方の実装が含まれる場合、Issue に適切なラベルを付ける
1. チームメンバーが Issue を拾い作業を開始します
1. チームメンバーは個々の Issue で進捗を追跡するためにプログレスレッドを使用します
1. チームは Switchboard Sync 中に進捗を確認します
   - 提起すべき Issue のないエピックは読み取り専用でもかまいません
   - 最も近い期限のエピックのディスカッションが優先されます
1. 期限が現実的でない場合、チームメンバーはできるだけ早く Issue にコメントし、チームが対応できるよう協力します

注: 1、2、4 は並行して行うことができます

#### Issue リファインメント

Switchboard チームの Issue リファインメントプロセス:

1. Issue が作成されリファインメント準備ができたら、~"workflow-infra::Triage" ラベルが付けられます
1. PM と EM は `Open` と ~"workflow-infra::Ready" カラムが優先されていることを確認します
1. チームメンバーは [Issue ボード](https://gitlab.com/groups/gitlab-com/gl-infra/gitlab-dedicated/-/boards/4498935?label_name[]=team%3A%3ASwitchboard)の `Open` カラムの Issue を確認し、明確化のための質問を Issue にコメントします
1. Issue に未解決の質問がない場合、~"workflow-infra::Ready" ラベルを付けると自動的に `Ready` カラムに移動します
1. Issue がユーザーにテキストを表示する場合、`technical writing` ラベルを追加する必要があります。例えば、Issue が UI テキストを変更する、エラーメッセージを表示する、フィールドを追加するなどの場合
1. Issue がフロントエンドの実装を必要とする場合、`frontend` ラベルを使用する
1. DRI は複数のエンジニアが 1 つのエピックに貢献できるよう、可能な限り Issue を並行して進められるようにします
1. デフォルトは、1 つの機能のフロントエンドとバックエンドの実装を同じ Issue に保持して、ディスカッションが集中し、実装が並行して行われ、フロントエンドとバックエンドエンジニアが同期できるようにすることです
1. 実装が API エンドポイントの変更または作成を必要とする場合、エンドポイント、パラメーター構造、返却データ構造の計画について、フロントエンドとバックエンドの間でできるだけ早く合意する必要があります（手戻りを避けるため）。
1. フロントエンドとバックエンドの実装は別々の MR でデリバリーする必要があります
1. 実装が並行して行えない場合、またはバックエンドとフロントエンドの実装の間に大きな遅延が生じる可能性がある場合、またはバックエンドが独立して価値を提供できる場合、Issue を分割してリンクで関係を明確に特定する必要があります
1. SRE の依存関係はできるだけ早く明確にし、要件を Issue に明確に文書化する必要があります（[SRE 依存関係 Issue の例](https://gitlab.com/gitlab-com/gl-infra/gitlab-dedicated/team/-/issues/2798)）

#### Issue とエピックの追跡

1. エンジニアはプログレスレッドを使用して非同期で進捗を共有します
1. Switchboard Sync の開始時に、チームは ~"workflow-infra::In Progress" または ~"workflow-infra::Triage" ラベルが付いたエピックを確認し、期限が適切であることを確認し、ブロッカーを強調します
1. エピック DRI は [Grand Review](/handbook/engineering/infrastructure-platforms/project-management/#projects-are-reviewed-weekly-in-the-grand-review) の準備として毎週水曜日にエピックの説明のステータスを更新します
1. エピック DRI は毎週期限をレビューします。エピックのステータス更新には、DRI の期限に対する信頼度と、デリバリーへのリスクを含める必要があります

#### 作業の選択 / 次に何に取り組むか

1. [Issue ボード](https://gitlab.com/groups/gitlab-com/gl-infra/gitlab-dedicated/-/boards)の ~"workflow-infra::Ready" カラム
   1. [Issue ボード](https://gitlab.com/groups/gitlab-com/gl-infra/gitlab-dedicated/-/boards/4498935?label_name[]=team%3A%3ASwitchboard)の ~"workflow-infra::Ready" カラムから Issue を選ぶ
   1. Issue を自分にアサインして ~"workflow-infra::In Progress" に設定する
   1. 関連する場合は `Implementation Plan` で Issue の説明を更新する
   1. Issue に `Progress Thread` を作成して毎日更新する

1. [Switchboard チームトップレベルエピック](https://gitlab.com/groups/gitlab-com/gl-infra/-/epics/1048)
    1. Switchboard トップレベルエピックを確認し、最も近い期限の Issue に取り組む申し出をする
    1. ガイダンスのために [Switchboard チームロードマップ](https://gitlab.com/groups/gitlab-com/gl-infra/gitlab-dedicated/-/roadmap?state=all&sort=start_date_asc&layout=WEEKS&timeframe_range_type=CURRENT_QUARTER&label_name[]=group::switchboard&progress=COUNT&show_progress=true&show_milestones=false&milestones_type=ALL&show_labels=false)を使用する

1. [Issue ボード](https://gitlab.com/groups/gitlab-com/gl-infra/gitlab-dedicated/-/boards/4498935?label_name[]=team%3A%3ASwitchboard)の `Open` カラム
   1. `Open` カラムの上部にある Issue を確認する
   1. 各 Issue について質問して、不足している情報を特定するためのディスカッションを進める
   1. 取り組む準備ができていれば ~"workflow-infra::Ready" としてマーク、自信がなければ EM を @メンションする

#### Switchboard デモ {#switchboard-demos}

デモにより、チームメンバーは Issue またはエピックの進捗や最終アウトプットを共有できます。目的は情報共有であり、アカデミー賞級のドキュメンタリー作成ではないため、チームとして[退屈なソリューション](/handbook/values/#boring-solutions)を採用しています — スクリーン録画、録画された Zoom ミーティング、または Loom のいずれかを使用します。録画へのリンクはエピックの説明に追加されます。

エピック [DRI](/handbook/people-group/directly-responsible-individuals/) は、エピックのキックオフ時にエピックとともにデリバリーされる少なくとも 1 つのデモを特定する責任があります。例: _機能 x がデリバリーされたとき（または Issue y が完了したとき）、機能 x をデモします_。
 チームメンバーは、すでに予約された時間中に同期的な Q&A が行えるよう、隔週の Switchboard チームシンクの直前にデモをデリバリーするようタイミングを合わせることが奨励されています。
チームメンバーは進捗やデリバリーマイルストーンを共有するために追加のデモを作成することを選択することもできます。

#### Issue テンプレート

Switchboard は以下の Issue テンプレートを管理しています:

| テンプレート                                | 使用者                  | ユースケース                                                                                                                             | 詳細                                                                                                                                |
|---------------------------------------------|-------------------------|------------------------------------------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------|
| `switchboard_bug.md`                        | GitLab チームメンバー   | Switchboard アプリケーションのバグを報告する                                                                                             | 通常 EA と Switchboard チームメンバーが使用します                                                                                  |
| `feature_proposal_switchboard.md`           | GitLab チームメンバー   | 新機能を提案する                                                                                                                         | 通常 Switchboard チームメンバーが使用します。エピックテンプレートに置き換えられるか、より多くのフィールドをオプションにするよう更新される可能性があります |
| `switchboard-feedback.md`                   | GitLab チームメンバー   | Switchboard への提案とフィードバックを行うために使用します。EM と PM が優先順位付けする EA リクエストエピックにフィードされます          | このテンプレートは EA チームメンバーがフィードバックを提供するために定期的に使用されています                                        |
| `switchboard_tenant_model_schema_update.md` | EA チームメンバー       | テナントモデルスキーマの更新                                                                                                             |                                                                                                                                     |
| `switchboard_tenant_onboarding_request.md`  | オンボーディング DRI     | Dedicated オンボーディングプロセスを開始する                                                                                             | 通常 Dedicated PM が使用します                                                                                                      |
| `create_onboarding_tenant_model_request.md` | オンボーディング DRI     | 新しい Dedicated カスタマーのオンボーディング準備として OnboardingTenant の作成を追跡するために使用します                                | 通常 Dedicated PM が使用します                                                                                                      |
| `request_for_switchboard_help.md`           | サポートエンジニア      | Issue を強調表示し、Switchboard チームメンバーへのヘルプをリクエストします                                                               |                                                                                                                                     |
| `switchboard_team_member_onboarding.md`     | Switchboard EM          | 新しいチームメンバーを Switchboard チームにオンボードする                                                                                |                                                                                                                                     |
| `switchboard_internal_issue.md`             | Switchboard チームメンバー | DRI が既存の明確なエピックに Issue を作成するために使用するテンプレートです                                                            |                                                                                                                                     |

### マージリクエストレビューガイドライン

私たちは具体的に [GitLab コードレビューガイドライン](#gitlab-code-review-guidelines)に従い、マージリクエストのレビューをリクエストする際は [Dedicated グループ原則](/handbook/engineering/infrastructure-platforms/gitlab-dedicated/#merge-requests)に従います。

#### マージリクエストのレビュープロセス

Switchboard チームは現在小規模なため、「承認してマージ」アプローチを採用しています:

1. マージリクエストのレビューを受ける準備ができたら、1 人以上の [Switchboard レビュアー](https://gitlab.com/groups/gitlab-dedicated/switchboard/reviewers/-/group_members)を選択します。
   - 誰を選べばよいかわからない場合は、[レビュアールーレット](#reviewer-roulette)を使用してランダムにレビュアーを選択できます。
   - Issue に `technical writing` ラベルが付いている場合は、Switchboard テクニカルライターをレビュアーとして追加してください
1. レビュアーは[マージリクエストのレビューガイドライン](https://docs.gitlab.com/ee/development/code_review.html#reviewing-a-merge-request)に基づいてレビューを行います。
1. 問題がなければ、他のレビュアーが対応していない質問や提案がない限り、レビュアーは承認してマージします。
1. マージリクエストに必要な承認がある場合、レビュアーはパイプラインを実行して自動マージを設定します。
   - レビュアーがマージ権限を持っていない場合、マージのためにメンテナーを探す必要があります。

##### 追加の UI レビュープロセス

UI に変更が提案されている場合、上記に加えて以下の追加手順に従う必要があります:

**GitLab 内部ユーザーに見える UI 変更:**

1. MR 作成者は MR で PM と UX デザイナーに cc しますが、彼らはレビュアーでもマージのブロッカーでもありません
1. 提案がある場合は MR 上で対応するか、MR 作成者の判断で後続の MR で対応できます
1. 最終的に PM と UX デザイナーは内部向け UI 更新のレビュアーになりますが、プロセスはまだそこまで至っておらず、キャパシティもありません
1. 実装開始前に UX やコピーについてヘルプやガイダンスが必要な場合は、**実装開始前に**聞いてください

**外部カスタマーに見える UI 変更:**

1. MR 段階での曖昧さを避けるため、UX の変更、コピーの変更、プロダクト要件など Issue の未解決の質問をすべて把握することが非常に重要です。これは UI コードの変更を開始する前に、Issue でのデザインディスカッションを具体的な結論に至らせることを意味します。
1. MR 段階で UX/プロダクトの要素が欠けている場合、DRI と Issue のアサイニーが協力して、欠けている要素を MR で解決できるか、解決のために Issue に戻す必要があるかを判断します。これは [DRI の定義](/handbook/people-group/directly-responsible-individuals/#empowering-dris)に従ったものです。
1. PM とデザイナーはこれらのリクエストを最優先で処理します。
1. MR を PM をレビュアーとして追加し、最新情報を提供します。このレビューは MR の進行を妨げず、PM は高優先度として処理します。理想的には、プロダクト要件は Issue で確定しておくべきです。
1. 新しいコピーの変更がある場合、テクニカルライターをレビュアーとして追加して情報を共有します。これはノンブロッキングです（コピーは理想的に Issue で合意されているべきです）。また MR に `Technical Writing` タグを追加してください。
1. MR で UX デザイナーを cc し、彼らがコアレビュアーになる準備ができたらチームにその旨が伝えられます

 **注意:** MR 開設後に UI 変更（内部向けまたは外部カスタマー向け）で大幅なディスカッションが必要になった場合、そのディスカッションを解決のために Issue に戻し、MR をブロックとしてマークしてください。これらのディスカッションは高優先度で解決され、MR の進行が再開できるまで Issue を PM とデザイナーにアサインしておく必要があります。
注意:

- 私たちは、これをサポートできるチームメンバーが揃い次第、2 つのレビューが必要な典型的な「レビュアーとメンテナー」アプローチに移行することを意図しています。
- マージリクエストは[承認ガイドライン](#approval-guidelines)に基づいて承認される必要があります。
- [GitLab レビューガイドライン](https://docs.gitlab.com/ee/development/code_review.html#merging-a-merge-request)によると、MR 作成者がマージリクエストをマージするのが適切なシナリオがあります: ブロッキングコメントがなく、マージリクエストに必要な承認がすべてある場合、作成者またはメンテナーはマージできます。
- Switchboard プロジェクトは[マージされた結果のパイプライン](https://docs.gitlab.com/ee/ci/pipelines/merged_results_pipelines.html)を使用するよう設定されており、レビュアーはマージ前にパイプラインを実行して、更新が最新のメインブランチと互換性があることを保証する必要があります。
- マージリクエストをレビューする際、レビュアーは意図を伝えるために [Conventional Comment ラベル](https://conventionalcomments.org/#labels)を使用してください。
  - 明確化のため、`Suggestion:`、`Issue:`、`Chore:` のコメントは、`(non-blocking)` の記述がない限り、すべてブロッキングです。
- マージリクエストには、[GitLab ドキュメント](https://gitlab.com/gitlab-org/gitlab-foss/-/blob/master/doc/development/labels/index.md)にある[特化ラベル](https://gitlab.com/gitlab-org/gitlab-foss/-/blob/master/doc/development/labels/index.md#specialization-labels)を使用してラベル付けします。MR には ~"frontend"、~"backend"、または ~"documentation" のラベルを付ける必要があります

#### 承認ガイドライン {#approval-guidelines}

| MR に含まれる変更         | 承認者                   |
| -------------------------- | ------------------------ |
| `~backend` の変更          | [バックエンドメンテナー](https://gitlab.com/groups/gitlab-dedicated/switchboard/maintainers/-/group_members)。 |
| `~frontend` の変更         | [フロントエンドメンテナー](https://gitlab.com/groups/gitlab-dedicated/switchboard/maintainers/-/group_members)。 |

#### レビュアールーレット {#reviewer-roulette}

レビュアールーレットは GitLab.com プロジェクトで使用する内部ツールで、コードベースの各エリアのメンテナーをランダムに選択します。メンテナーを選択するには:

1. [レビュアールーレット](https://gitlab-org.gitlab.io/gitlab-roulette/?currentProject=switchboard&sortKey=stats.avg30&mode=show&order=-1)ページに移動する。
1. Switchboard プロジェクトを選択する。
1. 希望する役割を選択する: `~maintainer::frontend`、`~maintainer::backend`、`~reviewer::backend`、`~reviewer::frontend`。
1. `Spin the wheel` をクリックする。

#### GitLab コードレビューガイドライン {#gitlab-code-review-guidelines}

- [マージリクエストのレビューを受ける](https://docs.gitlab.com/ee/development/code_review.html#having-your-merge-request-reviewed)
- [マージリクエストをレビューする](https://docs.gitlab.com/ee/development/code_review.html#reviewing-a-merge-request)
- [適切なバランス](https://docs.gitlab.com/ee/development/code_review.html#the-right-balance)
- [品質](https://docs.gitlab.com/ee/development/code_review.html#quality)
- [パフォーマンス、信頼性、可用性](https://docs.gitlab.com/ee/development/code_review.html#performance-reliability-and-availability)
- [マージリクエストのパフォーマンスガイドライン](https://docs.gitlab.com/ee/development/merge_request_concepts/performance.html)

### レビュアーとメンテナー

Switchboard には [レビュアーとメンテナー](https://gitlab.com/gitlab-dedicated/switchboard)の 2 つのグループがあります:

- すべての Switchboard チームメンバーは `Reviewer` グループに含まれています。
- チームメンバーが完全にオンボードされ、コードベースに自信を持てるようになったら、Maintainer グループに招待されます。

### フィーチャーフラグ

#### 目的

Switchboard のフィーチャーフラグにより、新機能の安全で段階的なロールアウトが可能になり、問題発生時の迅速なロールバックのためのキルスイッチが提供されます。

#### 完了の定義

**フィーチャーフラグのコードはロールアウト成功後に削除する必要があります。** 機能は以下が完了するまで完了とは見なされません:

- 機能が対象テナントの 100% にロールアウトされた
- 機能が事前に合意された期間（通常エピック計画レベルで決定、最低 1 週間）安定していた
- すべてのフィーチャーフラグの条件文がコードベースから削除された

#### フィーチャーフラグの操作

- **オーナーを割り当てる** — すべてのフィーチャーフラグには、削除に責任を持つ指定オーナーが必要です。オーナーは削除 Issue のアサイニーとして設定されます。
- **クリーンアップ Issue を事前に作成する** — フィーチャーフラグを導入する際は、フラグ削除のフォローアップ Issue をすぐに作成し、実装 Issue にリンクしてください
- **エピックで削除計画を文書化する** — フィーチャーフラグを導入するエピックには、フィーチャーフラグセクションに予想される削除タイムラインとクリーンアップの基準を含める必要があります
- **短命をデフォルトとする** — フラグは通常、100% ロールアウトから 1〜2 週間以内に削除する必要があります

古いフィーチャーフラグは技術的負債を生み出し、システムの意図された動作を不明瞭にします。タイムリーなクリーンアップはコード品質の維持に不可欠です。

#### エピックテンプレート {#epic-template}

<details><summary>エピックテンプレート</summary>

```markdown
### DRI :levitate:
- TBC

### Participants :busts_in_silhouette:

- Frontend Engineer:
- Backend Engineer:
- SRE:
- UX Designer:
- PM:
- Technical Writer:
- EM:
-

### Problem to solve :thinking:

### Video Walkthrough from Product :video_camera:

### Intended users :bust_in_silhouette:

| User | Visible | Description |
|----------|----------|-------------------|
| [Internal - Operator](/handbook/engineering/infrastructure-platforms/gitlab-dedicated/switchboard/#roles) |  |  |
| [Internal - Support](/handbook/engineering/infrastructure-platforms/gitlab-dedicated/switchboard/#roles) |  |  |
| [Internal - Provisioner](/handbook/engineering/infrastructure-platforms/gitlab-dedicated/switchboard/#roles) |  |  |
| [Internal - Read Only](/handbook/engineering/infrastructure-platforms/gitlab-dedicated/switchboard/#roles) |  |  |
| [External - Tenant Admin](https://docs.gitlab.com/ee/administration/dedicated/configure_instance.html#add-users-to-an-instance) |  |  |
| [Internal - Read Only](https://docs.gitlab.com/ee/administration/dedicated/configure_instance.html#add-users-to-an-instance) |  |  |

### User Permissions

| Functionality | Roles with Access | Fleet-Level (Y/N) | Permission Name (set by Engineering) |
|---------------|-------------------|-------------------|--------------------------------------|
| e.g. View runner |  |  |  |
| e.g. Create runner |  |  |  |

### User experience goal :goal:


<!-- Overview of user experience goal -->

### UX Design Spec :paintbrush:
- Figma Link:
- Dev mode:
- Any other details

### Proposal :bulb:

### Open Questions :question:
| Question | Added by | Discussion thread | Resolved |
|----------|----------|-------------------| -------- |
|  |  |  |  |

### Feature flags

<!-- This table should document any feature flags that were added or removed by the epic -->

| Feature flag | Details | Removal Issue |
| ------------ | ------- | ------------ |
| | | |

### Further details :mag:

### Dependencies :link:

### Permissions and Security :link:

### Documentation :book:

* Publicly Accessible Documentation:

### Epic Kick-Off :ballot_box_with_check:

* [ ] Video walkthrough from Product outlining expectations
* [ ] DRI identified
* [ ] Roll out plan agreed
* [ ] External customer communication plan defined
* [ ] Copy Requirements are highlighted to the Technical Writer
* [ ] UX Requirements are highlighted UX Designer
* [ ] Issue created to track Documentation requirements
* [ ] Outstanding Questions captured in threads for resolution
* [ ] Frontend, Backend and SRE dependencies highlighted and / or unknowns highlighted

### Roll out Plan :speaker:
<!--
If visible to external customers please provide the following information:
    - What communication is required ahead of release?
      - [ ] Internal communication to account teams
      - [ ] Customer communication in release post
      - [ ] Sign off from account teams before release - this should be reserved for features with the potential to be disruptive to users
    - Will this be rolled out to customers in pieces as implemented or available internally first?
-->


### Links / references :books:

*

## Demo Description :movie_camera: #

Demo Link - see https://handbook.gitlab.com/handbook/engineering/infrastructure-platforms/gitlab-dedicated/switchboard/#switchboard-demos

---

<!-- STATUS NOTE START -->

<!-- STATUS NOTE END -->

/label ~"group::switchboard" ~"workflow-infra::Triage"
/confidential

```

</details>
