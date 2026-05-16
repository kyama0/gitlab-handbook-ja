---
title: "GitLab Web IDE での作業"
description: "このハンドブックページは、データチームプロジェクト向けに GitLab 統合開発環境（IDE）を使用するための包括的なガイドを提供します。データ分析作業に特化した基本機能、ベストプラクティス、ワークフローについて説明します。"
upstream_path: "/handbook/enterprise-data/how-we-work/practical-guide/web-ide/"
upstream_sha: "0e6f01390a34aeb6706ace17d8d3c50e74e82d0d"
translated_at: "2026-04-29T00:00:00Z"
translator: claude
stale: false
lastmod: "2024-12-12T19:58:38+00:00"
---

## はじめに

GitLab IDE は、GitLab インスタンス内で直接コードを記述、テスト、デバッグできる強力なツールです。データチームにとっては、GitLab 環境を離れることなく、dbt モデルやその他のデータ関連コードを効率的に操作できることを意味します。

始める前に、適切なテンプレートを使用して Issue を作成していることを確認してください。多くの場合は「Standard Data Team Issue」テンプレートが適切です。

### 新しいブランチを作成する

*非秘密の Issue*

非秘密の Issue からブランチとマージリクエストを作成するには、Issue の「Create merge request」ボタンをクリックするだけです。

<img src="/images/handbook/enterprise-data/create-merge-request.png" alt="Create merge request" width="900"/>

マージリクエストを作成せずブランチのみを作成したり、「Create merge request」ボタン横のドロップダウンを使用してブランチ名とソースを更新したりすることもできますが、デフォルトのブランチ名とソース（master）を使用してマージリクエストとブランチを同時に作成することをお勧めします。

*秘密の Issue*

秘密の Issue に取り組む場合、プロジェクト内で直接 MR を作成できないことに気づくかもしれません。代わりに、フォークでブランチと MR を作成するオプションのみが表示されます。

<img src="/images/handbook/enterprise-data/confidential-issue-mr.png" alt="Confidential issue MR" width="900"/>

ただし、作業のためにプロジェクト内にブランチを作成することはできます。これを行うには、左サイドバーの「Code」をクリックし、「Branches」を選択します。

<img src="/images/handbook/enterprise-data/branches.png" alt="Branches" width="250"/>

そこから「New branch」ボタンをクリックしてブランチの作成を開始します。

<img src="/images/handbook/enterprise-data/create-branch.png" alt="Create branch" width="900"/>

新しいブランチを作成する際は、命名規則を考慮する必要があります。既存の Issue に将来の MR を自動的にリンクするために、Issue ID（例：`21949-`）でブランチ名を始めます。その後に Issue と密接に合致する説明的な名前を続けます。一貫性のために、`snake_case` または `kebab-case` を使用します（例：`21949-creating-a-branch-and-mr-from-confidential-issue`）。また、新しいブランチを作成するソースブランチを選択する必要があります。ほとんどの場合、これはデフォルトブランチ「master」になります。

<img src="/images/handbook/enterprise-data/branch-name.png" alt="Choose branch name" width="600"/>

この秘密の Issue のためのブランチを作成したら、通常は次の画面でマージリクエストを作成するように求められます。このプロンプトが表示されない場合でも心配いりません。左サイドバーの「Merge requests」に移動すると、最近作成したブランチの「Create merge request」オプションが表示されます。あるいは、「New merge request」をクリックして、新しく作成したブランチをソースブランチとして選択することもできます。どちらの方法でもマージリクエストプロセスを開始できます。

<img src="/images/handbook/enterprise-data/merge-request-create.png" alt="Create merge request" width="900"/>
