---
title: "フィーチャーフラグ使用ワーキンググループ"
description: "フィーチャーフラグ使用ワーキンググループは、GitLab の開発におけるフィーチャーフラグの使用に関するグローバルなポリシーとプロセスを確立することを目的としています"
upstream_path: "/handbook/company/working-groups/feature-flag-usage/"
upstream_sha: "b4eeb07f0d5f46e2fc5f8572be1a2547261aed89"
translated_at: "2026-04-25T00:00:00Z"
translator: "claude"
stale: false
---

## 属性

| プロパティ     | 値                                                                                                                  |
|:-------------|:-----------------------------------------------------------------------------------------------------------------------|
| 作成日 | 2020年12月3日 |
| 終了日     | 2021年7月28日 |
| Slack        | [#wg_feature-flag-usage](https://gitlab.slack.com/archives/C01GACLFVT3)（社内からのみアクセス可能） |
| Google Doc   | [ワーキンググループアジェンダ](https://docs.google.com/document/d/1Q_GyFSMep0SXGxnNW_PgrX2Xzq6EOOx7ZFbtyR_9DvY/edit#)（社内からのみアクセス可能）  |

### チャーター

このワーキンググループは、GitLab の開発におけるフィーチャーフラグの使用を改善するための取り組みを調整・組織化します。フィーチャーフラグの内部使用に関して、組織内で多くの非同期的かつ現在進行中の議論が存在します。私たちはこれらの議論を収集・調整し、GitLab 内でのフィーチャーフラグ使用に関する統一的なポリシーとプロセスを作成することを目的としています。こうしたポリシーの統一性は、内部のステークホルダー、コミュニティメンバー、そして顧客が GitLab 機能の利用可能性についてより一貫した洞察を得るために不可欠です。

### スコープと定義

このグループは、エンジニアがフィーチャーフラグを使用する方法がすべてのステークホルダーのニーズを満たすように、できる限りリーンなプロセスとポリシーを作成します。フィーチャーフラグのステークホルダーは一般的に、GitLab.com および特定バージョンのセルフマネージド GitLab インスタンス上の機能の現状を気にする人々です。

#### 定義

- **フィーチャーフラグ** - これは必ずしも[フィーチャーフラグ機能](https://docs.gitlab.com/ee/operations/feature_flags.html)を指すのではなく、[GitLab の開発においてフィーチャーフラグを使用する方法](https://docs.gitlab.com/ee/development/feature_flags/index.html)を指します。

### 終了基準 {#exit-criteria}

1. ✅ フィーチャーフラグの[アーキテクチャーブループリント](https://docs.gitlab.com/ee/architecture/blueprints/feature_flags_development/)の達成
1. ✅ [GitLab.org](https://gitlab.com/groups/gitlab-org/-/issues?scope=all&utf8=%E2%9C%93&state=opened&label_name[]=WorkingGroup%3A%3AFeatureFlagUsage) および [GitLab.com](https://gitlab.com/groups/gitlab-com/-/issues?scope=all&utf8=%E2%9C%93&state=opened&label_name[]=WorkingGroup%3A%3AFeatureFlagUsage) 上のワーキンググループスコープラベルが付いたすべての Issue の完了
1. ✅ GitLab エンジニア向けの[フィーチャーフラグトレーニング](https://gitlab.com/gitlab-com/www-gitlab-com/-/blob/80476d9861756b3a9c8a062267288f36ff6156ca/.gitlab/issue_templates/feature-flag-training.md)および[フィーチャーフラグ監視トレーニング](https://gitlab.com/gitlab-com/www-gitlab-com/-/blob/80476d9861756b3a9c8a062267288f36ff6156ca/.gitlab/issue_templates/monitoring-training.md)の改良と割り当て
1. ✅ [GitLab 開発におけるフィーチャーフラグドキュメント](https://docs.gitlab.com/ee/development/feature_flags/)の監査・改良・周知
1. ✅ GitLab の開発に置かれているフィーチャーフラグプロセスの状態に対して[各機能リードが満足している](https://gitlab.com/gitlab-org/gitlab/-/issues/336142)こと
1. ✅ フィーチャーフラグのライフサイクルを監視し、適切なタイミングで対応できるよう、長期的なフィーチャーフラグ管理を支援するデータの提供

### 進行中の作業

- [現在のフィーチャーフラグライフサイクルの把握](/handbook/product-development/how-we-work/product-development-flow/feature-flag-lifecycle/)

## 役割と責任

機能リードの責任：

- 各部門/サブ部門の個々のステークホルダーのニーズを代表すること
- 各部門/サブ部門から特定の提案に対するフィードバックを収集・統合すること
- ワーキンググループの成果（あれば）を伝達し、各部門/サブ部門からの質問に回答すること

機能リードは理想的には、策定されるポリシーの影響を受ける可能性のある IC（個人貢献者）であることが望ましいですが、上記の方法で部門やサブ部門を代表できる人であれば誰でも歓迎します。

以下の表のステークホルダー部門は[アーキテクチャーブループリント](https://docs.gitlab.com/ee/architecture/blueprints/feature_flags_development/)で特定されたものであり、参考として記載しています：エンジニア、エンジニアリングマネージャー、エンジニアリングディレクター、プロダクトマネージャー、テクニカルライター、デリバリーエンジニア、SRE。

| ワーキンググループの役割 | 人物 | ステークホルダー部門 | 役職 |
|:---------------------------------------|:-------|:------|:------|
| エグゼクティブスポンサー                      | Christopher Lefelhocz |  | VP of Development           |
| ファシリテーター                            | Ricky Wiens | Engineering Manager | Backend Engineering Manager, Verify:Testing        |
| 機能リード                        | Kamil Trzciński | Engineer | Distinguished Engineer, Ops and Enablement     |
| 機能リード                        | Kenny Johnston | Product Manager | Senior Director of Product Management, Ops |
| 機能リード                        | James Heimbuck | Product Manager | Senior Product Manager, Verify:Pipeline Execution          |
| メンバー                                 | Grzegorz Bizon | Engineer | Staff Backend Engineer, Verify                  |
| メンバー                                 | Craig Gomes | Engineering Manager | Backend Engineering Manager, Memory and Database   |
| メンバー                                 | Michelle Gill | Engineering Manager | Engineering Manager, Create:Source Code          |
| メンバー                                 | Doug Stull | Engineer | Senior Fullstack Engineer, Growth:Expansion         |
| メンバー                                 | Andrew Fontaine | Engineer | Senior Frontend Engineer, Release              |
| メンバー                                 | Rémy Coutable | Engineer | Staff Backend Engineer, Engineering Productivity |
| メンバー                                 | Marin Jankovski | Delivery Engineer | Senior Engineering Manager, Infrastructure, Delivery & Scalability |
| メンバー                                 | Marcia Ramos | Technical Writing | Senior Technical Writer, Create, Development Guidelines |
