---
title: Issue を扱う
category: Handling tickets
description: サポートチームは、GitLab Issue の作成、更新、エスカレーションの際に、本ページに記載のプロセスとエスカレーションポイントを使用します。

upstream_path: /handbook/support/workflows/working-with-issues/
upstream_sha: c8fa138220d8c6d69f811b17242d6d2f08e4e409
translated_at: "2026-05-08T05:00:00Z"
translator: claude
stale: false
---

GitLab Issue を正しく作成、更新、エスカレーションすることは、迅速かつ正確な顧客サポートを提供する上で重要な要素です。サポートチームは、GitLab Issue を扱う際に本ページに記載のプロセスとエスカレーションポイントを使用します。

## Issue の優先順位付け

一般的に、Product チームはすべての Issue（顧客リクエストだけでなく）を、Issue のタイプと[製品の方向性](https://about.gitlab.com/direction/)に基づいて[優先順位付け](/handbook/product/product-processes/cross-functional-prioritization/)します。

サポートチームは、Issue や機能要望の **顧客への影響** を伝える役割を果たします。適切なテンプレートを使用し、ラベルを追加し、説明やコメントに関連情報を追加することで、チームはどの Issue が顧客に影響を与えるかを、その優先度や重大度とともに伝えることができます。各リリースのスケジューリング作業に参加することで、サポートチームは製品開発における顧客の追加の声を代表します。

### 追加のコンテキストと注記

Product チームに直接 Issue にコメントしてもらうことは、私たちの中核的な価値である透明性に従っており、顧客が自分たちの Issue がなぜ／いつ解決されるのかという背景を理解するのに役立ちます。また、Development および Product チームへの顧客からの直接的なフィードバックも提供します。

このように作業することで、顧客が報告した Issue がしばらく取り上げられない可能性があります（最初にスケジューリング、次に修正のための時間、次にリリースのスケジュール、など）。しかし、本当に緊急の Issue のほとんどは実際にはこのスケジューリングの問題を持たないリグレッションであるため、これは問題ないという考え方です。バグがリグレッションでない場合、それは顧客が指摘したときに 1 か月以上存在していたことを意味し、つまり誰もその Issue を緊急として報告することなく、少なくとも 1 か月が経過しているということです。

Issue は、Product がリリースマイルストーンに追加し *かつ* 開発者にアサインされない限り、特定のリリースにスケジュールされません。私たちはスケジュールされた成果物について現実的であることを目指し、特定のリリース内に提供できない Issue のスケジューリングを避けます。

## Issue の検索 {#searching-for-issues}

[Issue を作成する](#creating-issues)、または[既存の Issue にコメントを追加する](#adding-comments-on-existing-issues)前に、既存の Issue や関連する Issue を検索する必要があります。

ヒントをいくつか紹介します:

- Google などの外部検索エンジンを使用して検索します。
- Issue は、[main GitLab Rails プロジェクト](https://gitlab.com/gitlab-org/gitlab/-/issues)に加えて、いくつかのプロジェクトで作成されています。最も一般的なものをいくつか挙げます:
  - [Omnibus](https://gitlab.com/gitlab-org/omnibus-gitlab/-/issues) プロジェクトは、パッケージ化された GitLab および Docker に関連する Issue が作成される場所です。
    - `gitlab-ctl reconfigure` 中にエラーが発生した場合、データベースマイグレーションに関連する場合（その場合は通常 Rails プロジェクトの Issue トラッカーになります）を除き、おそらくここが Issue の最適な場所です。
  - Helm を使用した GitLab デプロイに関する Issue は[GitLab Chart プロジェクト](https://gitlab.com/gitlab-org/charts/gitlab/-/issues)に登録します。
  - Gitaly および Gitaly クラスターに関連する Issue は [Gitaly プロジェクト](https://gitlab.com/gitlab-org/gitaly/-/issues) を確認します。
- どのプロジェクトに Issue が登録されているかわからない場合は特に、[`gitlab.org` グループ全体](https://gitlab.com/groups/gitlab-org)を横断的に検索する価値があることが多いです。
- アドバンスド検索のヒント:
  - グループ全体の検索と組み合わせることで、アドバンスド検索は Epic も検索できるという利点があります。
  - 結果が得られたら、クローズされた Issue を除外できます。これは、未解決のバグや機能要望のみをチェックする場合によく役立ちます。
  - 製品が生成したエラーや他のテキストを検索する場合、すべてのコードリポジトリも検索します。
  - 特定のエラーや文字列を探している場合は、`"二重引用符"` で囲んでください。
  - その他に利用可能な構文オプションについては、[アドバンスド検索ドキュメント](https://docs.gitlab.com/user/search/advanced_search/#syntax)を参照してください
- 結果をフィルタリングできる場合、Issue ビューでの検索の方が通常は効率的です:
  - 特定の GitLab リリースで実装された変更を探している場合は、Milestone でフィルタリングしてください。
    - 各月次の GitLab リリースに対してマイルストーンを作成しています。
    - マイルストーンでマージリクエストも検索することを検討してください。特定のリリースで何かが変更されたと思われる場合、これによりそのリリースでの実際のコード変更が特定されます。Issue は、機能全体が最終的に提供された後のマイルストーンでクローズされている可能性があります。
  - 機能を担当する製品エリアがわかっている場合は、`~group::` ラベルでフィルタリングしてください。
    - [features by group ページ](/handbook/product/categories/features)は正しいグループを見つけるのに役立ちます。
    - もしくは、すでに見つけた関連する Issue や MR で使用されているラベルを参照します。
- ソート順: Issue ビューに多くの結果が表示される場合は、ソートのオプションを確認してください。たとえば、製品の最近のリグレッションを疑う場合は `Created date` がより関連性が高い場合があります。
- これまでに読んだ Issue の検索にはある程度時間を費やすことになるでしょう。
  - 出会ったすべての Issue や、自分が登録したものすべてにリアクションを追加することを検討してください。たとえば、`bookmark`、`reminder ribbon`、または非常に珍しいものを選びましょう！その後、`My-Reaction` でフィルタリングしてその結果内を検索できます。
  - ブラウザーの履歴を検索してみましょう。
  - 自分のコメントに基づいて素早く検索したい場合は、[User Contribution Search](https://gitlab.com/gitlab-com/cs-tools/gitlab-cs-tools/user-contribution-search) ツールの設定を検討してください。あなたのすべての貢献をインデックス化し、全文検索インターフェースを提供します。
- 製品ドキュメントの [GitLab での検索について](https://docs.gitlab.com/user/search/)も併せてお読みください。

## 既存の Issue へのコメントの追加 {#adding-comments-on-existing-issues}

Issue のタイプに関係なく、リンクと *一緒に* 関連情報を含めてください。また、[正しいラベル](#adding-labels)が適用されているかを確認してください。

[Product がフィーチャーリクエストに対して提供してほしい情報](/handbook/product/product-management/#customer-feature-requests)については、Product ハンドブックを参照してください

オプション:

`GitLab Issues` カスタムフィールドに基づいて Zendesk チケットを検索します。検索クエリへのリンクをコピーし、関連チケットの ZenDesk 検索への内部リンクであることを明記して Issue にコメントとして追加します。これにより、PM は何人の顧客がオープンなバグに遭遇しているか、または特定の機能をリクエストしているかについて、より深い洞察を得られます。

**注:** `GitLab Issues` フィールドのフィールド ID を取得するには、[このリポジトリファイル](https://gitlab.com/gitlab-com/support/support-ops/zendesk-global/ticket-forms-and-fields/-/blob/master/ticket_fields/active/GitLab%20Issues.yaml)を参照できます。

## ラベルの追加 {#adding-labels}

適切なラベルの使用は、Issue の可視性を確保し、関連する PM のレーダーに乗せるために *重要* です。

必須:

- [Group](https://gitlab.com/gitlab-org/gitlab-ce/blob/master/doc/development/contributing/issue_workflow.md#group-labels): どれかわからない？[ドキュメントメタデータ](https://docs.gitlab.com/development/documentation/metadata/)、[ラベルの説明](https://gitlab.com/gitlab-org/gitlab/-/labels)、[DevOps Stages](/handbook/product/categories/#devops-stages)、[ステージ別の機能リスト](https://about.gitlab.com/features/)、または類似の既存 Issue を確認してください。
- [Type Labels](/handbook/product/groups/product-analysis/engineering/metrics/#work-type-classification) はテンプレートで追加されているはずですが、不足している場合は *追加* してください。
- `~"Customer Interest`（ZenDesk リンクが追加されると、忘れていてもボットが自動的にこのラベルを追加します）
- 該当する場合は `~regression ##.x`、影響度の高いものについては `~"Next Patch Release"` を追加し、関連するリードおよびサブジェクトエリアの専門家にメンションしてください

`~"Customer Interest` および重大度を許容するラベル（最も一般的には `~"type::bug"`）でラベル付けされた Issue については、Severity の見積もりが必要です。欠けている場合は、PM の関心を Issue に集めるために追加してください:

- [Severity](/handbook/product-development/how-we-work/issue-triage/#severity): Severity を割り当てる際は、定義に最善を尽くして従ってください。`~severity::1` の場合は PM にメンションし、適切な Slack チャンネルへの投稿も検討してください。サポートはしばしば顧客への影響をよりよく把握しているため、Severity ラベルを割り当てる際にはコメントで影響を説明してください。顧客にもコメントを追加してもらい、重要だと感じる他のコンテキストを追加してもらってもかまいません。

オプションですが強く推奨:

- [Stage](https://gitlab.com/gitlab-org/gitlab-ce/blob/master/doc/development/contributing/issue_workflow.md#stage-labels)
- 該当する場合は `~Reproduced on GitLab.com`

L&R 関連の Issue については、[Fulfillment Issue に関する具体的なガイダンス](/handbook/support/license-and-renewals/workflows/managing_product_issues/)を参照してください。

## 新規および既存の Issue のエスカレーション

サポートチームは、コミュニケーションに役立つ可能性がある場合、Issue 上または #product Slack チャンネル（[DevOps Stages](/handbook/product/categories/#devops-stages) を参照）で PM に直接メンションできます。コメントには、顧客に代わって更新を求めることや、特に Severity や優先度を上げる必要がある場合の議論が含まれる場合があります。

## Issue の作成 {#creating-issues}

可能な限り Issue を再現し、ZD リンクを追加の例として参照する *公開* Issue を登録してください。

問題を報告する際は、`Bug` テンプレートを使用し、できる限りの情報を入力してください。[ラベルを追加](#adding-labels)してください。

Issue を書く際は、Issue を作成した後にコメントとして質問を追加することを検討してください。たとえば: 「@PM この Issue へのフィードバックをお願いします。これを修正／実装することに関心がありますか？どの程度重要だと考えますか？」

## クローズされた Issue の再オープンを避ける

現在抱えている顧客の問題と同じか類似する既存のクローズ済み Issue を見つけた場合、おそらくそのクローズ済み Issue を再オープンすべきではありません。クローズ済み Issue は実は無関係かもしれません。または、クローズ済み Issue が今あなたが見ているのと同じ問題を説明していても、根本原因が異なる可能性もあります。たとえまったく同じ問題であっても、再オープンすべきではない可能性があります。なぜなら、その Issue は以前のマイルストーンを持っているかもしれず、再オープンされた Issue は過去の無効なマイルストーンを持つことになるからです。

代わりに、新しい Issue を作成し、既存のクローズ済み Issue へのメンション／リンクを追加することを検討してください。Product および Engineering チームに新しい Issue をさらにトリアージしてもらい、重複の作成を心配しないでください。

### 機密性の維持

画像、ログ出力などが Issue に必要な場合は、自分のテスト画像を作成するようにしてください。問題を再現できず、顧客が提供した画像／情報を使用したい場合は、画像／情報には名前、グループ名、ユーザー名、コードなどの機密情報が（意図せず）含まれる可能性があるため、必ず顧客から *許可を得てください*。

公開 Issue が常に推奨されますが、顧客のログまたは他の情報を含める必要があり、顧客が公開ではなく内部的に共有する意思がある場合は、Issue を *confidential* にしてください。

### 情報収集

Issue テンプレートの *Application and environment information* セクションには、次を使用します:

- Omnibus: `sudo gitlab-rake gitlab:check`
- Source: `sudo -u git -H bundle exec rake gitlab:check RAILS_ENV=production SANITIZE=true`

および

- Omnibus: `sudo gitlab-rake gitlab:env:info`
- Source: `sudo -u git -H bundle exec rake gitlab:env:info RAILS_ENV=production`

## 機能提案の作成

私たちの[サポート方針](https://about.gitlab.com/support/statement-of-support/)に従い、サポートチームは通常、機能要望を作成するよう顧客に依頼します。顧客からの直接的なフィードバックを伴う機能要望は価値があります。なぜなら、顧客はしばしば自分のユースケース、要件、ニーズを最もよく説明できるからです。顧客に機能要望 Issue を作成してもらい、リンクを共有してもらうよう依頼してください。Issue リンクが利用可能になったら、[ラベルを追加](#adding-labels)し、関連する詳細を[コメント](#adding-comments-on-existing-issues)に追加し、[ソースをリンク](/handbook/product/product-management/#customer-feature-requests)します。

顧客に代わって機能提案を作成する場合は、`Feature Proposal` テンプレートを使用して、[Issue の作成](#creating-issues)と同じプロセスに従ってください。Issue を作成した後、Issue をフォローして貢献するよう顧客に促す返信でリンクを共有します。

**注:** GitLab には限られた開発リソースしかありません。さらに、機能が他のユーザーに対してどの程度広く適用可能であるかを考慮する必要があります。1 つの会社のワークフローに非常に固有のリクエストは却下される可能性が高くなります。機能が広く適用可能に見えても、機能提案をしばらく休眠状態にして、他のユーザーや顧客が同じく関心を持っているかを確認することがあります。複数の組織から関心を集める機能は、より迅速に検討されます。もちろん、これらの「ルール」には常に例外があります。この注記は、機能提案がすぐに実装されないかもしれないという期待値を設定することを目的としています。

## 機能エスカレーションポイント

| サービス／プロダクト  | エスカレーションタイプ                 | エスカレーションポイント                                        | 担当      |
|------------------|--------------------------------|-----------------------------------------------------------|------------------|
| GitLab           | バグ報告または機能提案 | [Bug](https://gitlab.com/gitlab-org/gitlab/-/issues/new?issuable_template=Bug) または [Feature proposal](https://gitlab.com/gitlab-org/gitlab/-/issues/new?issuable_template=Feature%20proposal%20-%20detailed)           | |
| Omnibus GitLab   | バグ報告、機能提案 | <https://gitlab.com/gitlab-org/omnibus-gitlab/issues/new>   | Omnibus GitLab スペシャリスト |
| GitLab Runner    | バグ報告、機能提案 | <https://gitlab.com/gitlab-org/gitlab-runner/issues/new>  | GitLab CI スペシャリスト |
| GitLab Workhorse | バグ報告、機能提案 | <https://gitlab.com/gitlab-org/gitlab/-/issues/new?issue%5bdescription%5d=%2flabel%20%7eworkhorse> | gitlab-workhorse のメンテナー |

**担当については [GitLab team page](/handbook/company/team/) を参照してください**

## 運用エスカレーションポイント

| サービス／プロダクト       | エスカレーションタイプ                                                                                  | エスカレーションポイント                                         |  担当      |
|-----------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------|----------------------- |
| GitLab Infrastructure | **GitLab.com の運用**、パフォーマンス、何かが壊れることに関するすべて                | <https://gitlab.com/gitlab-com/infrastructure/issues/new> | Production Lead/Senior Production Engineer |
| GitLab.com コンソールアクセス権を持つサポートエンジニア| **GitLab.com の使用**、admin アクセスでは実行できない操作に関するすべて  | [Console escalation requests](/handbook/support/workflows/internal_requests#gitlabcom-console-escalation) を参照 | `~"GitLab.com Console Escalation"` ラベルを使用 |
| GitLab Support        | GitLab ユーザーおよび顧客への顧客サービスの提供に関するあらゆる質問。 | <https://gitlab.com/gitlab-com/support/support-team-meta/issues/new>        | Support Team Lead/Senior Support Engineer |

**担当については [GitLab team page](/handbook/company/team/) を参照してください**

### Omnibus GitLab

- Omnibus GitLab パッケージングのみに関連します。
- GitLab [omnibus リリースパッケージ](https://packages.gitlab.com/gitlab)

### GitLab Runner

- [GitLab Runner](https://gitlab.com/gitlab-org/gitlab-runner#features) についての情報
- [Runner ドキュメント](https://docs.gitlab.com/ci/runners/)

### GitLab Workhorse

- [GitLab Workhorse](https://about.gitlab.com/blog/2016/04/12/a-brief-history-of-gitlab-workhorse/) についての情報
- **説明** *「GitLab-workhorse は GitLab のスマートなリバースプロキシです。ファイルのダウンロード、ファイルのアップロード、Git push/pull、Git アーカイブのダウンロードなど、「大きな」HTTP リクエストを処理します。」*

### GitLab Infrastructure

- [Slack](https://gitlab.slack.com/archives/infrastructure) でインフラチームに連絡できます
- [インフラストラクチャ](https://about.gitlab.com/blog/2016/04/29/look-into-gitlab-infrastructure/) に関する以前のブログ投稿

## 一般的な製品フィードバック

一般的な製品フィードバックを受け取り、それが Issue に関連するか、または Issue に属するかが明確でない場合は、私たちの [Product Feedback セクション](/handbook/support/workflows/feedbacks_and_complaints#product-feedback)に概説されているとおり、Product チームにフィードバックを伝えてください。
