---
title: "マージリクエスト レポートウィジェット ワーキンググループ"
description: "GitLab マージリクエスト レポートウィジェット ワーキンググループは、MR を拡張機能で拡張するために作成された UX フレームワークの実装を支援することを目的としています。詳細をご覧ください！"
upstream_path: "/handbook/company/working-groups/merge-request-report-widgets/"
upstream_sha: "b4eeb07f0d5f46e2fc5f8572be1a2547261aed89"
translated_at: "2026-04-25T12:00:00Z"
translator: "claude"
stale: false
---

## 属性

| プロパティ        | 値           |
|-----------------|-----------------|
| 作成日    | 2021年8月1日 |
| 目標終了日 | 2022年1月31日 |
| 実際の終了日 | 2022年8月18日 |
| Slack           | [#wg_merge-request-report-widgets](https://gitlab.slack.com/archives/CV2M96LJG)（社内からのみアクセス可能） |
| Google Doc      | [Merge Request Report Widgets Working Group Agenda](https://docs.google.com/document/d/1bcch8UUkwmgEHFolTWDrQFJtUiiXlv_yQFAGwSSDSUE/edit?usp=sharing)（社内からのみアクセス可能） |
| 実装ディスカッション | [gitlab#333975](https://gitlab.com/gitlab-org/gitlab/-/issues/333975) |
| Pajamas ドキュメント | [Region: Merge request reports](https://design.gitlab.com/patterns/merge-request-reports/) |
| デザイン仕様 | [Pajamas UI Kit](https://www.figma.com/file/qEddyqCrI7kPSBjGmwkZzQ/Component-library?node-id=38193%3A30482) |
| 関連 OKR | [product#2872](https://gitlab.com/gitlab-com/Product/-/issues/2872) |
| 各ウィジェットの DRI | [DRI リスト](/handbook/engineering/devops/create/code-review/report-widgets-dri-list/) |

## チャーター

このワーキンググループは、すべてのマージリクエスト（MR）レポートウィジェットの一貫した調整と開発を確保します。独立して作成されたウィジェットのコレクションを単一のレポートリージョンに同期させることで、コードレビュアーがマージリクエストの分析を確認し、次のステップを決定しやすくなります。

ワーキンググループは、一貫性が各ウィジェットの中核にある共同コードベースを構築する任務を担っています。これはコードベースと確立された API によって強制・実現されます。

## ビジネス目標

[UX フレームワーク](https://gitlab.com/groups/gitlab-org/-/epics/5710)に従うことで、[FY22-Q3 の Product と UX の間の共有 KR](https://gitlab.com/gitlab-com/Product/-/issues/2872) にポジティブな影響を与えるマージリクエストへの改善を促進することにより、[ユーザビリティによる採用目標](https://gitlab.com/gitlab-com/Product/-/issues/2697)を推進します。これにより、マージリクエストを扱う顧客が期待する成熟度レベルを確保します。今後は、MR ウィジェットエコシステムの持続可能で一貫した成長を確保するための明確で厳格なガイダンスを持ちます。

ワーキンググループの主な目標は、自分たちですべてを実装することではなく、フロントエンドエンジニアリングと UX グループ全体で取り組みを一定のペースで維持し、主要タスクを担当することです。

## スコープと定義

**マージリクエスト レポートリージョン**

- 実施された分析と提案された変更の概要を示すマージリクエストのエリア。このエリアは**概要**タブ内、説明とコメントまたはシステムノートの間に位置します。

**マージリクエスト ウィジェット拡張機能**

- 実施された分析の要約情報を提供するソフトウェアの各部分。

**マージリクエスト ウィジェット拡張コンポーネント（<a href="https://docs.gitlab.com/ee/development/fe_guide/merge_request_widgets.html">docs</a>）**

- 各拡張機能が情報の提示をカスタマイズできるようにしながら、マージリクエストに添付されたすべての拡張機能に一貫したユーザー・開発者体験を確保する再利用可能なコンポーネント。

## 終了基準

- 新しい共有 MR ウィジェット拡張コンポーネントを完全に使用するようにポートされる [10件の拡張機能（完全なリスト）](https://gitlab.com/groups/gitlab-org/-/epics/6548)の実装とリデザインを主導します。
- 共有コンポーネントは、Pajamas デザインシステムで定義された[レポートリージョンデザインガイドライン](https://design.gitlab.com/patterns/merge-request-reports/)に従います。
- ドキュメントが共有コンポーネントの機能を反映しています。
- コンポーネントの拡張に関する明確なドキュメントが記述されていることを確認します。

### 成果

#### ドキュメントの成果

- [DRI リスト（エンジニアリングおよび UX）](/handbook/engineering/devops/create/code-review/report-widgets-dri-list/)
- [コンポーネントの技術ドキュメント](https://docs.gitlab.com/ee/development/fe_guide/merge_request_widgets.html)
- [さらなる貢献と拡張](/handbook/product/cross-stage-features/merge-requests/)

#### プロダクトの成果

以下のスクリーンショットは、ワーキンググループが提供した成果の前後におけるマージリクエスト レポートウィジェットを示しています。


{{< cardpane >}}
{{% card header="**Before**" %}}
![MR Widgets Before](/images/company/working-groups/MR_Widgets_Before.png)
{{% /card %}}


{{% card header="**After**" %}}
![MR Widgets After](/images/company/working-groups/MR_Widgets_After.png)
{{% /card %}}
{{< /cardpane >}}


## 役割と責任

ファンクショナルリードは以下の責任を担います:

- 自分の部門/サブ部門の個々のステークホルダーのニーズを代表します。
- 自分の部門/サブ部門からの特定の提案に関するフィードバックを収集・統合します。
- ワーキンググループからのアウトプット（もしあれば）を伝達し、自分の部門/サブ部門からの質問に回答します。

理想的には、ファンクショナルリードは影響を受けるグループで働く IC（個人貢献者）ですが、上記の方法でグループ、部門、またはサブ部門を代表できる人であれば誰でも歓迎します。

| ワーキンググループの役割 | 担当者                   | ステークホルダー部門         | 役職                                         |
| ------------------ | ------------------------ | ------------------------- | --------------------------------------------- |
| エグゼクティブスポンサー  | Tim Zallmann             | Dev                       | Director of Engineering, Dev                  |
| ファシリテーター        | André Luís               | Dev, Create:Code Review   | Frontend Engineering Manager                  |
| ファンクショナルリード    | Tim Noah                 | UX                        | Senior Product Designer                       |
| ファンクショナルリード    | Phil Hughes              | Create:Code Review        | Staff Frontend Engineer                       |
| ファンクショナルリード    | José Iván Vargas López   | Verify:Pipeline Execution | Senior Frontend Engineer                      |
| ファンクショナルリード    | Scott Hampton            | Verify:Pipeline Security  | Engineering Manager                           |
| ファンクショナルリード    | Savas Vedova             | Govern:Threat Insights    | Senior Frontend Engineer                      |
| ファンクショナルリード    | Mark Florian             | Foundations               | Senior Frontend Engineer                      |
| ファンクショナルリード    | Jannik Lehmann           | Secure                    | Frontend Engineer                             |
| ファンクショナルリード    | Jeremy Elder             | UX                        | Staff Product Designer                        |
| メンバー             | Marcel van Remmerden     | UX                        | Product Design Manager, Create                |
| メンバー             | Kai Armstrong            | Product                   | Sr. Product Manager, Create:Code Review       |
| メンバー             | Rayana Verissimo         | UX                        | Product Design Manager, CI/CD                 |
| メンバー             | Payton Burdette          | Verify:Pipeline Execution | Senior Frontend Engineer                      |
| メンバー             | Pedro Moreira da Silva   | UX                        | Staff Product Designer, Create:Code Review    |
| メンバー             | Tomislav Nikić           | Quality                   | Software Engineer in Test, Create:Code Review |
| メンバー             | Gina Doyle               | UX                        | Senior Product Designer, Runner               |
