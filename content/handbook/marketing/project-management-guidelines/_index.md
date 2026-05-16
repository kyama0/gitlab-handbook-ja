---
title: "マーケティングプロジェクト管理ガイドライン"
upstream_path: /handbook/marketing/project-management-guidelines/
upstream_sha: eb9c7122b4259a2111ed65628e5384768922a597
translated_at: "2026-04-30T12:00:00Z"
translator: claude
stale: false
lastmod: "2025-09-17T18:25:42+00:00"
---

### サブページ

1. 組織化 - [グループとプロジェクト](/handbook/marketing/project-management-guidelines/groups/)
2. [ラベル](/handbook/marketing/project-management-guidelines/labels/)
3. [Epics](/handbook/marketing/project-management-guidelines/epics/)
4. [マイルストーン](/handbook/marketing/project-management-guidelines/milestones/)
5. [コミットメントの管理](/handbook/marketing/project-management-guidelines/commitment/)
6. [Issues](/handbook/marketing/project-management-guidelines/issues/)
7. [ボード](/handbook/marketing/project-management-guidelines/boards/)

## <i class="fas fa-toolbox fa-fw color-orange font-awesome"></i> マーケティングプロジェクト管理ガイドライン

マーケティングは、[グループ](https://docs.gitlab.com/ee/user/group/)、[プロジェクト](https://docs.gitlab.com/ee/user/project/)、[Epic](https://docs.gitlab.com/ee/user/group/epics/)、[ロードマップ](https://docs.gitlab.com/ee/user/group/roadmap/)、[Issue](https://docs.gitlab.com/ee/user/project/issues/)、[ラベル](https://docs.gitlab.com/ee/user/project/labels.html)、[ボード](https://docs.gitlab.com/ee/user/project/issue_board.html)を含むアジャイルプロジェクト管理に GitLab を使用しています。これらの GitLab 機能に馴染みがない場合は、各ドキュメントを通読してください。

## 統合キャンペーン

マーケティング部門は、統合キャンペーン（Integrated Campaign）の制作に協働します。統合キャンペーンとは、ブログ記事、メール、イベント、広告、about.gitlab.com 上のコンテンツ、動画、ケーススタディ、ホワイトペーパー、調査、ソーシャルアウトリーチ、ウェブキャストなど、複数のキャンペーン施策を含むコミュニケーション活動です。統合キャンペーンには、市場に伝えるメッセージを要約するキャンペーンテーマがあります。

### アクティブな統合キャンペーン

[アクティブな統合キャンペーン](/handbook/marketing/campaigns/#active-marketing-campaigns)

**新しいキャンペーンのアイデアがありますか？** [提案する](/handbook/marketing/campaigns#new-ideas-for-marketing-campaigns-or-events)

## プロジェクト管理プロセス

マーケティング活動の計画、コラボレーション、実行を GitLab で管理することにより、私たち自身の製品への深い理解を養います。

[最新のプロジェクト管理に関する推奨事項はこちらから](/handbook/marketing/project-management-guidelines)（FY21-Q2 アジリティプロジェクト由来）

### マイルストーン

[マイルストーンに関する最新の推奨事項](/handbook/marketing/project-management-guidelines/milestones/)（FY21-Q2 アジリティプロジェクト由来）

#### ウィークリースプリント

www-gitlab-com リポジトリ（マーケティングの親リポジトリ）内には、一部のチームが週次のスプリントケイデンスを計画するために使用する週次マイルストーンがあります。これらのスプリントの各々は、スプリントが終了する金曜日を示す「Fri:**」で始まり、[こちらのリストで検索可能](https://gitlab.com/groups/gitlab-com/-/milestones?utf8=%E2%9C%93&search_title=fri%3A&state=&sort=)です。

毎週月曜日、前週のマイルストーンに割り当てられたままの未クローズの MR と Issue は次週へ一括で移動され、前のマイルストーンはクローズされます。**これは現在 Danielle が手動で実施しているプロセスです。**

### グループとプロジェクト

[グループとプロジェクトに関する最新の推奨事項](/handbook/marketing/project-management-guidelines/groups/)（FY21-Q2 アジリティプロジェクト由来）

1. マーケティンググループには、すべてのマーケティングプロジェクトが格納されています。
1. ラベルは**グループ**レベルで作成して、マーケティンググループ内のすべてのプロジェクトで使用できるようにするべきです。
    - ラベルを個々のプロジェクトで重複して作成**しない**でください。ボード/トラッキングの競合を引き起こします。
1. 以下が承認済みのマーケティングプロジェクトであり、新しいプロジェクトを開始するには [CMO 承認](/handbook/marketing/cmo/)が必要です。
    - [Product Marketing](https://gitlab.com/gitlab-com/marketing/strategic-marketing)（PMM, TMM, Market Insights を含む）
    - [Developer Relations](https://gitlab.com/gitlab-com/marketing/community-relations)
    - [Digital Marketing Programs](https://gitlab.com/gitlab-com/marketing/demand-generation/digital-marketing)
    - [Demand Generation](https://gitlab.com/gitlab-com/marketing/demand-generation)
    - [Corporate Marketing](https://gitlab.com/gitlab-com/marketing/corporate_marketing/corporate-marketing)（コンテンツ、ウェブサイト、コーポレートイベント、ブランド等を含む - 廃止予定グループ内の旧ロケーション、更新予定）
    - [Marketing Operations](https://gitlab.com/gitlab-com/marketing/marketing-operations)
    - [Regional Marketing](https://gitlab.com/gitlab-com/marketing/regional-marketing)
    - [Account Based Strategy](https://gitlab.com/gitlab-com/marketing/account-based-strategy)
    - [Sales Development Organization](https://gitlab.com/gitlab-com/marketing/sdr)
    - [Digital Advertising](https://gitlab.com/gitlab-com/marketing/digital-advertising) - 外部広告代理店向けに使用
    - [Onboarding](https://gitlab.com/gitlab-com/marketing/onboarding)
    - [Contribute](https://gitlab.com/gitlab-com/marketing/contribute) - これは各 Contribute イベントのプロジェクトすべてを含むサブグループです
    - [Growth Marketing](https://gitlab.com/gitlab-com/marketing/growth-marketing)
    - [Partner Marketing](https://gitlab.com/gitlab-com/marketing/partner-marketing)（テックパートナーマーケティングとチャネルマーケティングの両方を含む）
1. Issue は、要求された作業を最終的に完了する責任があるチームのプロジェクトに記録されるべきです。（例: SDR がリストのアップロードを必要とする場合 → マーケティングオペレーションプロジェクトに Issue を作成。）

### Issue、マイルストーン、Epic

[Epic に関する最新の推奨事項](/handbook/marketing/project-management-guidelines/epics/)と[Issue に関する最新の推奨事項](/handbook/marketing/project-management-guidelines/issues/)（FY21-Q2 アジリティプロジェクト由来）

1. 各 Issue は、成果物を伴う作業の単位を表します。例 [1](https://gitlab.com/gitlab-com/marketing/product-marketing/issues/10) [2](https://gitlab.com/gitlab-com/marketing/digital-marketing-programs/-/issues/36) [3](https://gitlab.com/gitlab-com/marketing/general/-/issues/2574)
1. すべての MR には、Issue ボード上で追跡できるように Issue を持たせるべきです。
1. マイルストーンは、特定の時間枠内で完了すべき作業の単位を表し、スプリントと呼ばれることもあります。共通の期日を持つ複数の Issue で構成され、大規模なプロジェクトをより管理しやすい部分に分割するのに役立ちます。
1. Epic は、複数の Issue で構成されるプロジェクトを表します。（この目的で「メタ」 Issue を使用しないでください。既存のメタ Issue がある場合は、`/promote` クイックコマンドを使って Epic に昇格できます。）
    - Epic はグループレベルに存在します（例: 複数のマーケティングプロジェクトの Issue を Epic に追加できます。）
    - Epic には、Epic を所有するチームのグループラベルが付けられます。
1. トップ 3〜5 の戦略的イニシアチブは、`CMO` ラベルを使った Epic で追跡されます。（CMO ラベルを他の Epic に適用しないでください。）
1. ロードマップは、開始日と終了日を持つ Epic を時間ベースで表示するために使用されます。（例: イベントや時間ベースのキャンペーン。）

### ボードとラベル

[ラベルに関する最新の推奨事項](/handbook/marketing/project-management-guidelines/labels/)と[ボードに関する最新の推奨事項](/handbook/marketing/project-management-guidelines/boards/)（FY21-Q2 アジリティプロジェクト由来）

1. 各チームには、進行中のワークストリームを追跡する 1 つ以上のボードがあります。
1. 一般的に、機能ごとにボードを作成します。（例えば、PMM は Sales Enablement、Analyst Relations、Customer Relations 等のためのボードを持っています。）
1. 各ボードは標準的な列/ラベルのセットを使用し、他のチームのボードで何が起きているかを簡単に理解できるようにしています。
1. ボードラベルは `mktg-status::` のグループ_スコープ_ラベルと 4 つのステータスのいずれかを使用します。ステータスラベルは、マーケティンググループ内のすべての Issue に対して使用するべきです:
    - `mktg-status::plan` - 提案された、探索的な状態の作業。
        - plan ステージを抜けるには、作業が DRI に割り当てられている必要があります。
        - DRI はラベルを `mktg-status::plan` から `mktg-status::wip` に変更し、必要に応じてマージリクエスト (MR) を作成することで、タスクの責任を引き受けます。plan ステータスは任意であり、正式な計画を必要としない Issue は、開かれて `mktg-status::wip` のラベルを付けられる場合があります。
    - `mktg-status::wip` - 受け入れられ、DRI に割り当てられた作業中の作業。
        - このステージの作業はマージしないでください。
        - マージリクエスト (MR) は `WIP:` を先頭に付けるべきです。GitLab では、作業が完了する前にレビュアーがすぐにレビューを開始することを許可しています。
        - [MVC](/handbook/values/#iteration)を使用してください: いつでも、現状よりマージしたほうが良い程度に作業が完了したら、Issue に `mktg-status::review` のラベルを付け、タイトルから `WIP:` を削除するべきです。
    - **オプション***: `mktg-status::review` - 正式なレビューと承認の準備ができている程度に作業が完了している。
        - 承認された作業は、マージするかスケジュールするかのいずれかが可能です。
        - review ステータスは任意です。
        - レビューを必要としない作業は、単純にマージ/クローズできます。
    - **オプション**: `mktg-status::scheduled` - 作業は完了しているが、将来の日付にスケジュールするべき作業。
        - すべての作業がスケジュールを必要とするわけではないため、scheduled ステータスは任意です。
    - `closed` - 作業が提供された時点で、Issue はクローズされるべきです。
1. **ステータスラベルをプロジェクトレベルで重複させないでください。** 可能な限りグループラベル（マーケティンググループレベルで）を使用してください。

### 部門ラベル

マーケティング内の各部門は「追加的」ラベルを持つことができます。これは、それぞれのチームのトラッキングとワークフローを強化するために使用されることを意味します。これらの「追加的」ラベルは、より広範な[マーケティングラベル](#boards-and-labels)と組み合わせて使用されます。部門ラベルの使用方法は、それぞれのハンドブックページに文書化されています:

- [Marketing Programs](/handbook/marketing/integrated-marketing/digital-strategy/)
- [Operations](/handbook/marketing/marketing-operations/)
- [Sales Development Organization](/handbook/marketing/sales-development/)
- [Account Based Marketing](/handbook/marketing/account-based-marketing/)

### デフォルト Issue テキスト

[マーケティングサブグループ](https://gitlab.com/gitlab-com/marketing)内のすべてのプロジェクトには、部門ラベルが一貫して適用され、[グローバルマーケティングラベル](#boards-and-labels)のより広範な採用を確保するために、**デフォルト Issue テキスト**が含まれています。

#### デフォルト Issue テキストの使用

_任意の_ プロジェクトで新しい Issue が開かれると、Issue の説明には、そのチームのラベルとマーケティングスコープの `mktg-status::plan` ラベルを適用する小さなテキストスニペットが含まれます。

![''](/images/handbook/marketing/example_default_issue_text.png)

- テンプレートを選択した場合、Issue 説明内のテキストを変更したいかを確認するメッセージが表示されます。`Apply Template` をクリックして通常通り続行します。

![''](/images/handbook/marketing/template_change_message.png)

#### デフォルト Issue テキストの更新

デフォルトテキストは最小限で汎用的です。任意のチームが集合的にテキストを更新する決定を行うことができます。テキストを変更するアクセス権はグループ/プロジェクトの権限レベルに基づいて制限される場合があります。`General` 設定セクションへのアクセス権がない場合は、Slack で `@mktg-ops` に連絡してください。
_注意_ これは Issue ボットではなく、動的な機能はありません。デフォルト Issue テキストは、そのプロジェクト内で開かれるすべての Issue に適用されます。テキストは、そのチーム内のロールを包含できる程度に広範であるべきです。

1. 更新するプロジェクトに移動します
1. 左サイドメニューで、ホイールウィジェット（最後のアイコン）の上にホバー -> `General` を選択
1. スクロールダウンして **Default Issue Template** の隣の `Expand` を選択
1. テキストボックスでは、任意の Markdown フォーマットを追加してテキストを変更できます。追加されたテキストにはその上に複数行が含まれているので、_見た目には_空のボックスのように見えるかもしれません。スクロールダウンしたり、そのテキストボックスを展開して、完全なテキストを表示してください。
    - ラベルセクションを削除**しない**でください。
    - ラベルセクションは、より多くのラベルを含めたり、部門ラベルを切り替えたりするために更新できます
    - そのセクションには `mktg-status::plan` ラベルを_残す_ことが重要です
1. 編集が完了したら、`Save changes` をクリックします。変更は**新しく開かれるすべての Issue** に即座に適用されます。
    - すでに開かれた Issue には影響しません。

問題や質問があれば、Slack で MktgOps チーム (`@mktg-ops`) に連絡してください。

### すべての関係性

ボード、Epic、ラベルをどこでどう作成するかを理解することは混乱しやすいかもしれません。以下の図は、すべての要素の関係性を非常に高レベルで示した例です。質問があれば、[#mktgops Slack チャンネル](https://gitlab.slack.com/messages/CGL35F20G)で尋ねてください（*アクティブなリンクは GitLab チームメンバーである必要があります）。

<img src="https://docs.google.com/drawings/d/e/2PACX-1vRNvAJ7LoK-6nvbOGEX-T5-tRD7PK3dU4OVbfBWwr6orNwnEo4LJBSCDCenfDfFcQwSTeOWFDS8FE15/pub?w=1056&amp;h=1344" alt="">
