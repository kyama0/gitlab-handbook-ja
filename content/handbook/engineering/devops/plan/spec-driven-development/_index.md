---
title: "Plan:Spec-Driven Development Engineering チーム"
description: "Plan:Spec-Driven Development グループのエンジニアリングチームのページ。"
upstream_path: /handbook/engineering/devops/plan/spec-driven-development/
upstream_sha: 48abec5939783dec7dd722f4427e0eba53023f6f
lastmod: "2026-10-06T15:47:25+03:00"
translated_at: "2026-10-09T21:10:17+00:00"
translator: codex
stale: false
---

## Plan:Spec-Driven Development チーム {#planspec-driven-development-team}

Plan:Spec-Driven Development チームは、
[Plan ステージ](/handbook/engineering/devops/plan/)の GitLab の [Spec-Driven Development グループ](/handbook/product/categories/#spec-driven-development-group)に取り組みます。
ラベルは ~"group::spec-driven development"、Slack チャンネルは [#g_spec-driven-development](https://gitlab.slack.com/archives/g_spec-driven-development)です。

### ビジョン {#vision}

Spec-Driven Development グループのビジョンは Intent-to-Code です。人が実現したいことを示し、GitLab がそれをレビュー済みで動作するコードに変える支援をします。

仕様駆動開発では、コードを書く前に構造化された仕様を作成し、人と AI の両方にとって信頼できる情報源として扱います。私たちは仕様をワークアイテム内に保持することで、人とエージェントが、何を、なぜ、どのように構築するかについて、単一の信頼できる情報源に基づいて作業できるようにします。仕様は継続的に更新され、機能とともに変化します。ワークアイテムには、意図、議論、決定、計画、ステータス、リンクされたマージリクエストを保持します。Plan は、コードを書く前に作業内容を理解し、合意する場です。

ワークフローには、いくつかの手順があります。

- 何が、なぜ必要なのかを示すように説明を詳細化します。
- どのように実現するかを示す計画を生成します。
- 意思決定ログを記録します。
- 未解決の疑問を一緒に解消します。
- 作業の準備が整っているか確認します。
- エージェントが作業中か、入力を待っているかを表示します。

各手順は、チームがその結果をどの程度信頼しているかに応じて、人が関与する形でも、自律的にも実行できます。

人とエージェントは作業を分担します。人は意図、受け入れ基準、ガードレールを設定し、重大な意思決定を行い、成果に責任を持ちます。エージェントは背景情報を収集し、要件を詳細化し、計画の草案を作成し、コードとテストを書き、計画に照らして結果をレビューします。

これは GitLab の Software Factory の方向性への入り口です。人がすべての変更を手作業で調整する代わりに、エージェントが提供サイクルを実行し、人はそれを統制して承認の権限を保持します。

### 私たちが取り組むこと {#what-we-work-on}

このグループは、ワークアイテムを AI エージェントに引き渡せるようにする、ワークアイテム上の計画レイヤーを担当します。製品カテゴリの一覧に、独自のカテゴリはありません。

- ワークアイテム上の Workplan。作業をどのように進めるかを示す計画です。[ユーザードキュメント](https://docs.gitlab.com/user/work_items/workplan/)を参照してください。
- 意思決定ログ。ワークアイテムに関する決定の記録です。
- 準備状況スコア（ドキュメントでは信頼度スコアと呼ばれています）。計画をエージェントが実行できる状態かどうかを示します。
- 準備が整ったワークアイテムを Duo Developer と Duo Review に引き渡すフロー。

### 設計ドキュメント {#design-documents}

[設計ドキュメント](/handbook/engineering/architecture/design-documents/spec_driven_development/)では、製品で Workplan と呼んでいるものに「Agent plan」という名称を使用しています。

- [作業計画](/handbook/engineering/architecture/design-documents/spec_driven_development/work_plan/)：計画を保存するウィジェット。
- [意思決定ログ](/handbook/engineering/architecture/design-documents/spec_driven_development/decision_log/)：構造化された決定を扱うウィジェット。
- [スコアリング](/handbook/engineering/architecture/design-documents/spec_driven_development/scoring/)：準備状況スコア。
- [メモリ](/handbook/engineering/architecture/design-documents/spec_driven_development/memory/)：計画の生成に投入するプロジェクトの背景情報とメモリ。
- [対話型ビルダー](/handbook/engineering/architecture/design-documents/spec_driven_development/interactive_builder/)：出力を繰り返し改善するための Duo Chat とライブプレビューの UI。
- [下流の利用者](/handbook/engineering/architecture/design-documents/spec_driven_development/downstream_consumers/)：Duo Developer と Duo Review が計画をどのように使用するか。
- [ワークアイテムとマージリクエストの関係](/handbook/engineering/architecture/design-documents/spec_driven_development/wi_mr_relationship/)：SDD に必要な双方向リンク。
- [テストシナリオ](/handbook/engineering/architecture/design-documents/spec_driven_development/test_scenarios/)：テスト要件。

### チームメンバー {#team-members}

{{< team-by-manager-role role="Engineering Manager(.*)Plan:Spec-Driven Development" team="Spec-Driven Development">}}

### 固定の連携担当者 {#stable-counterparts}

{{% engineering/stable-counterparts manager-role="Engineering Manager(.*)Plan:Spec-Driven Development" role="Spec-Driven Development|Security(.*)Plan( |:|,|$)|Principal(.*)Plan$" %}}

Technical Writer は Brendan Lynch です。

## 私たちの働き方 {#how-we-work}

このグループの Engineering Manager は Plan:Work Items と共通のため、[Work Items チームのページ](/handbook/engineering/devops/plan/work-items/)に記載されたプロセスがここにも適用されます。[Plan ステージのページ](/handbook/engineering/devops/plan/)には、ステージ全体のワークフローが記載されています。

## 便利なリンク {#useful-links}

- [`group::spec-driven development` ラベルが付いた Issue](https://gitlab.com/groups/gitlab-org/-/issues/?label_name%5B%5D=group%3A%3Aspec-driven%20development)
- Slack の [#g_spec-driven-development](https://gitlab.slack.com/archives/g_spec-driven-development)
- [Plan Stage - Intent-to-Code エピック](https://gitlab.com/groups/gitlab-org/-/work_items/21218)
- [設計ドキュメント](/handbook/engineering/architecture/design-documents/spec_driven_development/)
- [グループの Wiki](https://gitlab.com/groups/gitlab-org/plan-stage/sdd/-/wikis/_Home)（社内向け）
- [ベンチマークダッシュボードのプロジェクト](https://gitlab.com/gitlab-org/plan-stage/sdd/spec-driven-development-evaluation-dashboard)（社内向け）
