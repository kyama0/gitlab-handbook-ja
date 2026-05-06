---
title: "コンテンツウェブサイト"
upstream_path: /handbook/about/maintenance/
upstream_sha: b4eeb07f0d5f46e2fc5f8572be1a2547261aed89
translated_at: "2026-04-25T04:59:08Z"
translator: claude
stale: false
---

## 概要

この領域は従来「ハンドブック」と呼ばれてきましたが、時を経て複数のサイト、プロジェクト、リポジトリ、コンテンツの種類を含むまでに範囲が拡大しています。

そのため、曖昧さを避けてこの責任範囲に関する議論を適切に組み立てるために、ここでは「コンテンツウェブサイト」という用語を使用します。

詳細については[方向性ページ](direction.md)をご覧ください。

ヘルプが必要な場合は、[ハンドブック編集セクション](editing-handbook/_index.md#need-help)をご覧ください。緊急の場合は[エスカレーション情報](../about/escalation.md)をご確認ください。

## チーム構成

このページのメンテナー（サイドバーに表示）は、GitLab の「コンテンツウェブサイト」の [DRI](/handbook/people-group/directly-responsible-individuals/) と見なされます。現在、役割と責任は以下のとおりです：

| 役割 | オーナー | 現在の担当者 | 責任 |
| ------ | ------ | ------ | ------ |
| ハンドブック DRI | Learning & Development | Tre Ely、Jamie Allen | トリアージ、戦略と計画立案、主要な変更の調整 |
| ハンドブック テクニカル DRI | Enterprise Applications | Marc Di Sabatino、Nitin Garg | 技術的な意思決定、保守 |
| パイプラインのグリーン維持 | ボランティアグループ | [`@gitlab-com/content-sites/keep-main-green`](https://gitlab.com/groups/gitlab-com/content-sites/keep-main-green/-/group_members?with_inherited_permissions=exclude) | ジョブが失敗した場合のパイプライン修正支援（必要に応じて） |
| コードレビュアー | ボランティアグループ | DRI、および [`@gitlab-com/content-sites/handbook-tools`](https://gitlab.com/groups/gitlab-com/content-sites/handbook-tools/-/group_members?with_inherited_permissions=exclude) | コードレビュー、「パイプラインのグリーン維持」グループのエスカレーション窓口、および時間の許す範囲での開発作業 |

注意：両ボランティアグループとも、エスカレーションを解決するために `content-sites` グループでオーナーロールを持っています。

## コンテンツウェブサイトとは

1. 公開されている [`handbook.gitlab.com`](/) ウェブサイト：
   1. しばしば「ハンドブック」と呼ばれますが、このウェブサイトは[求人説明ライブラリ](/job-description-library/)や [TeamOps](/teamops) ページなど、多様なその他のコンテンツも提供しています。
   1. `handbook.gitlab.com` は主に [`gitlab-com/content-sites/handbook`](https://gitlab.com/gitlab-com/content-sites/handbook/) プロジェクトとリポジトリによって支えられています。
   1. データ（YML）ファイルは現在 [`gitlab-com/www-gitlab-com`](https://gitlab.com/gitlab-com/www-gitlab-com) リポジトリに置かれています。
1. [`internal.gitlab.com` の「内部ハンドブック」](https://internal.gitlab.com/)：
   1. このウェブサイトには[非公開](/handbook/communication/confidentiality-levels/#not-public)カテゴリに該当するコンテンツが含まれています。詳細は[内部ハンドブック使用ページ](/handbook/about/handbook-usage/#the-internal-handbook)をご覧ください。
   1. 内部ハンドブックは [`gitlab-com/content-sites/internal-handbook`](https://gitlab.com/gitlab-com/content-sites/internal-handbook) プロジェクトとリポジトリによって支えられています。
1. ハンドブックサイトのテーマは [`gitlab-com/content-sites/docsy-gitlab`](https://gitlab.com/gitlab-com/content-sites/docsy-gitlab) プロジェクトにあります。

### コンテンツウェブサイトに該当しないもの

1. [`about.gitlab.com`](https://about.gitlab.com) マーケティングウェブサイト。
1. [`gitlab.com`](https://gitlab.com) サイト。
1. [`docs.gitlab.com`](https://docs.gitlab.com) 製品ドキュメントサイト。
1. 上記以外の GitLab が管理または所有するウェブサイト。

## Issueトリアージ

以下のガイドラインは、[コンテンツサイトプロジェクト](https://gitlab.com/gitlab-com/content-sites/)における[対象範囲内](#what-are-the-content-websites)のIssueのトリアージに使用されます。

トリアージガイドラインは[製品のIssueトリアージ](/handbook/product-development/how-we-work/issue-triage/#priority)情報を基準としています。ただし、コンテンツサイトではグループ構造とリソースが異なるため、ガイドラインも異なります。

Issueのトリアージを支援するための[トリアージbot](https://gitlab.com/gitlab-com/content-sites/handbook-tools/triage-bot)が存在します。

### Issueの種類とリソース配分

ハンドブックのIssueは通常、以下のいずれかに分類されます：

1. コンテンツ：必要な修正を含む、ハンドブックのテキスト更新に関連するすべて。
1. フィーチャー：テーマやショートコードなど、ハンドブックの動作に関する新機能や改善。
1. オペレーション：テーマ、パイプライン、ローカル開発、リンター、その他のメンテナンス、および関連ドキュメント。

Issueは、該当する場合にカテゴリとは別にバグとして扱われることがあります（フィーチャーではない場合）。

コンテンツウェブサイトを監督するチームは、Issueがハンドブックへの貢献や使用のブロッカーでない限り、一般的にオペレーションのIssueのみにリソースを配分します。

### 優先度

優先度ラベルはIssueの重要性を示し、スケジューリングを導くために使用されます。
優先度ラベルは GitLab のニーズに基づいて設定することが期待されています。
優先度はあらゆる種類のIssueに適用できます。

バグIssueの場合、優先度は通常[深刻度](#severity)と一致します。
不明な場合は優先度を深刻度に合わせてください。

| 優先度 | 重要性 | 意図 |
| -------- | ---------- | --------- |
| `~"hb-priority::1"` | 緊急 | チーム容量の制限に関わらず、できる限り早急に対応します。目標解決時間は30日です。 |
| `~"hb-priority::2"` | 高 | 近いうちに対応し、チームのリソースを提供します。目標解決時間は30〜90日です。 |
| `~"hb-priority::3"` | 中 | 対応を望んでいますが、いつ対応できるかは不明です。期限は設定されていません。 |
| `~"hb-priority::4"` | 低 | いつ対応できるかは不明です。期限は設定されていません。 |

早期に対応するために、すべてのIssue、特に優先度3と4のIssueへの貢献を歓迎します。

### 深刻度

深刻度ラベルは、`~"Handbook::Operations"` IssueのユーザーへのImpactを緊急性と明確に伝えるために役立ちます。

深刻度は以下の表のさまざまな要因に基づいて決定してください。
IssueがImpact複数のカテゴリに該当する場合は、最善の判断を使用してください。

Issueの深刻度を決定したら、なぜその深刻度を選択したかを要約したメモを追加してください。これにより、将来のチームメンバーがあなたの根拠を理解し、Issueにどう対処するかを把握できます。

| `~"Handbook::Operations" ~"type::bug"` | `~"hb-severity::1"`: ブロッカー | `~"hb-severity::2"`: 高 | `~"hb-severity::3"`: 中 | `~"hb-severity::4"`: 低 |
|----------------|--------------------------|---------------------------|-------------------------|----------------------|
| 一般的なバグ | 回避策のない機能の障害、またはデータ損失。 | 受け入れがたく複雑な回避策のある機能の障害。 | 回避策のある機能の障害。 | 機能が使いにくい状態。 |
| ユーザーへのImpact | 利用可能な回避策なしで20%以上のユーザーに影響 | 20%以上のユーザーに影響するが合理的な回避策が利用可能<br/><br/>**かつ/または**<br/><br/>回避策なしで5〜20%のユーザーに影響 | 合理的な回避策がある、または回避策が不要な場合で最大20%のユーザーに影響。 | 典型的なユーザーのワークフローへの影響が最小限。回避策が利用可能、または不要。 |
| ユーザーエクスペリエンスの問題 | ユーザーがブロックされ、リスクのあるエラーを犯す可能性が高い。 | 利用可能な回避策によってユーザーが大幅に遅延している。 | ユーザーは回避策を使用してタスクを自力で完了できるが、多少の遅延が生じる可能性がある。 | ユーザビリティが理想的でないか、小さな見た目の問題がある。 |

解決のタイムラインは[優先度](#priority)に基づきます。

### トリアージbot

実装情報については、関連するプロジェクトの readme をご覧ください。
