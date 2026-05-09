---
title: "インフラストラクチャセキュリティ"
description: "GitLab のインフラストラクチャセキュリティチームは、SaaS のセキュリティ監督を提供します。"
upstream_path: /handbook/security/product-security/infrastructure-security/
upstream_sha: 1e195b58b9f249ff10bd0e705106c320fee86141
translated_at: "2026-05-09T17:22:11Z"
translator: claude
stale: false
---

## チームのアイデンティティ

GitLab のインフラストラクチャセキュリティチームは、GitLab のインフラストラクチャセキュリティに固有の取り組みの計画、実行、サポートを担当します。

セキュリティ部門のステーブルカウンターパートとして、チームメンバーはクラウドおよびインフラストラクチャソリューションに大きく依存する特定の[製品カテゴリー](https://gitlab.com/search?group_id=6543&project_id=7764&scope=blobs&search=infrasec+file%3Astages%5C.yml%24&regex=false)をサポートします。さまざまな製品カテゴリーにわたる Development、Infrastructure、Security の各チームと連携します。

インフラストラクチャセキュリティのエンゲージメントは、インフラストラクチャ変更レビュー、SaaS インフラストラクチャアクセスおよびパーミッションモデル、クラウドセキュリティのベストプラクティス、オペレーティングシステムセキュリティ、ホストおよびコンテナレベルでのセキュリティモニタリング、脆弱性管理、およびパッチ適用ポリシーの形で行われます。

チームの優先度の高い取り組みには次のものがあります:

- データ収集機能を改善するためのツール (例: Wiz、OSQuery) のデプロイ
- カウンターパートワーク (例: Dedicated、FedRAMP、Cells、AI)
- セキュリティレビュー (例: 準備状況レビュー、設計レビュー)
- クラウド環境全体での設定ミスの特定と修正
- 予防的コントロールの作成とデプロイ (例: AWS/GCP Organization のハードニング、Terraform のハードニング)

詳細は[ジョブファミリーの説明](/job-description-library/security/infrastructure-security)を参照してください。

## チームメンバー

<table>
<thead>
<tr>
<th>担当者</th>
<th>役割</th>
</tr>
</thead>
<tbody>
<tr>
<td>Julie Davila</td>
<td><a href="/job-description-library/security/security-leadership#vice-president-vp-security">VP, Product Security</a></td>
</tr>
<tr>
<td>Jacob Jernigan</td>
<td><a href="/job-description-library/security/security-leadership#senior-manager-infrastructure-security">Senior Manager, Infrastructure Security</a></td>
</tr>
<tr>
<td>Dennis Salzmann</td>
<td><a href="/job-description-library/security/security-leadership#senior-manager-infrastructure-security">Manager, Infrastructure Security</a></td>
</tr>
<tr>
<td>Matt Morrison</td>
<td><a href="/job-description-library/security/infrastructure-security#senior-infrastructure-security-engineer">Staff Security Engineer, Infrastructure Security</a></td>
</tr>
<tr>
<td>Dhruv Jain</td>
<td><a href="/job-description-library/security/infrastructure-security#senior-infrastructure-security-engineer">Senior Security Engineer, Infrastructure Security</a></td>
</tr>
<tr>
<td>Lizzie Moratti</td>
<td><a href="/job-description-library/security/infrastructure-security/#infrastructure-security-engineer-intermediate">Intermediate Security Engineer, Infrastructure Security</a></td>
</tr>
<tr>
<td>Justin Shields</td>
<td><a href="/job-description-library/security/infrastructure-security/#infrastructure-security-engineer-intermediate">Intermediate Security Engineer, Infrastructure Security</a></td>
</tr>
<tr>
<td>Yang Lyu</td>
<td><a href="/job-description-library/security/infrastructure-security/#infrastructure-security-engineer-intermediate">Intermediate Security Engineer, Infrastructure Security</a></td>
</tr>
<tr>
<td>Joey Wu</td>
<td><a href="/job-description-library/security/infrastructure-security/#infrastructure-security-engineer-intermediate">Intermediate Security Engineer, Infrastructure Security</a></td>
</tr>
</tbody>
</table>

## 私たちと一緒に働く

1. **インフラストラクチャセキュリティレビュー**を依頼するには、[セキュリティレビューテンプレート](https://gitlab.com/gitlab-com/gl-security/product-security/product-security-engagements/product-security-requests/-/issues/new?description_template=infrasec-security-review)を使用して Issue を作成してください
1. **本番環境準備状況レビュー**を依頼するには、[本番環境準備状況テンプレート](https://gitlab.com/gitlab-com/gl-security/product-security/product-security-engagements/product-security-requests/-/issues/new?description_template=infrasec-production-readiness)を使用して Issue を作成してください
1. **Teleport** に関するバグ報告や変更依頼については、[Teleport Issue テンプレート](https://gitlab.com/gitlab-com/gl-security/product-security/product-security-engagements/product-security-requests/-/issues/new?description_template=infrasec-teleport)を使用して Issue を作成してください
1. その他すべてについては、[汎用 Issue テンプレート](https://gitlab.com/gitlab-com/gl-security/product-security/product-security-engagements/product-security-requests/-/issues/new?description_template=infrasec-other-request)を使用して Issue を作成してください

- 個人を `@mention` するのは控えてください。代わりに GitLab.com で `@gitlab-com/gl-security/product-security/infrastructure-security` ハンドルを使用してください。
- Slack の専用チャンネル `#security-infrasec` で、または `@infrasec-team` をタグ付けしてチャットすることもできます。
- チームは毎日、すべての受信リクエストをトリアージし (適切に優先順位付け) します。
- 緊急の依頼があり、通常のトリアージを待てない場合は、Slack チャンネルで連絡をしてお知らせください。

## 私たちの働き方

### ミーティングとスケジュール済みコール

私たちの好みは、後述の[プロジェクト管理セクション](#project-management)で説明するように、プロジェクトの Issue トラッカー内で非同期に作業することです。

チームには定例の同期コールがあります:

- 進捗、ブロッカー、InfraSec チームに関連するすべてを議論する隔週のチームシンク。
  - 会社の誰でも参加を歓迎します。
  - [アジェンダは GitLab 内で公開](https://docs.google.com/document/d/1mvmPrG66JpTkj3dbDpnhNybADrUVQwP96DM1trQT89Y)されています。
- 前四半期にうまくいったことを振り返り、今後改善できることを議論する四半期ごとのチームレトロスペクティブ。
- 個人貢献者とエンジニアリングマネージャー間の 1-1。

### チームページ

- チームに関する一般的な情報を含む[ハンドブックページ](/handbook/security/product-security/infrastructure-security/)
- チームの運用上の信頼できる唯一の情報源である[内部ハンドブック](https://internal.gitlab.com/handbook/security/product_security/infrastructure_security/)。チーム情報については、誰もが**確認することが推奨**されます
- EPIC とリポジトリを含む [Infrastructure Security GitLab サブグループ](https://gitlab.com/gitlab-com/gl-security/product-security/infrastructure-security)
- 公開されているリソース (例: Docker イメージなど) を含む [Infrastructure Security **Public** サブグループ](https://gitlab.com/gitlab-com/gl-security/security-operations/infrastructure-security-public)

### プロジェクト管理 {#project-management}

私たちは、Epic、Issue、Issue ボードを使用して作業を整理しています。これらは互いに補完し合うためです:

- エンジニアリング作業の信頼できる唯一の情報源は [GitLab の InfraSec サブグループ](https://gitlab.com/groups/gitlab-com/gl-security/product-security/infrastructure-security/-/epics)です。**すべての Epic はこのレベルで収集されます**
- このレベルですべてのプロジェクトを持つことで、優先順位付けに単一のリストを使用でき、異なるサービスの作業を並行して優先順位付けできます
- プロジェクトは [InfraSec の目標](https://gitlab.com/groups/gitlab-com/gl-security/product-security/infrastructure-security/-/wikis/InfraSec-Goals)に沿って優先順位付けされます

#### チーム計画

- InfraSec チームの**長期戦略**については、以下を参照してください:
  - 🎯 [InfraSec の目標](https://gitlab.com/groups/gitlab-com/gl-security/product-security/infrastructure-security/-/wikis/InfraSec-Goals)
- **戦術的な観点**からは、以下を参照してください:
  - 🎛 [InfraSec 計画ボード](https://gitlab.com/groups/gitlab-com/-/boards/7549315?label_name%5B%5D=Department%3A%3AInfraSec) (現在取り組んでいるタスク)

#### プロジェクトオーナーシップ

各プロジェクトには、プロジェクトの提供に責任を持つオーナーがいます。

オーナーは次のことを行う必要があります:

1. Epic の説明とマイルストーンのステータスを定期的に更新する。
1. 他のメンバーと協力して、プロジェクトの Issue をボード間で移動させる。

#### ラベル

**プロジェクトワークのみ**には、以下のラベルを使用してください:

| ラベル                       | ユースケース                                                        |
| --------------------------- | --------------------------------------------------------------- |
| `~"Department::Product Security"`   | 部門ラベル    |
| `~"Infrastructure Security Team"`   | チームラベル          |
| `~"InfraSec::triage"`       | トリアージが必要な新しい Issue 用                         |

### デザインドキュメント

新しいプロジェクトを開始する前に、チームはデザインドキュメントを通じてソフトウェア設計を定義することが**推奨**されます。
これらのデザインドキュメントは、高レベルの実装戦略と主要な設計上の決定を文書化し、それらの決定の際に検討されたトレードオフに重点を置きます。

新しいデザインの議論を開始するには:

1. デザイン提案を含む新しい MR を [InfraSec チームチャーターリポジトリ](https://gitlab.com/gitlab-com/gl-security/product-security/infrastructure-security/team-charter/-/tree/main/designs)に作成します。デザインドキュメントの構造の参考として、[このテンプレート](https://gitlab.com/gitlab-com/gl-security/product-security/infrastructure-security/team-charter/-/blob/main/.gitlab/issue_templates/design_doc.md)を使用できます。
2. 要求されるデータを記入します
3. チームの他のメンバーをレビュアーとしてマークします

## 追加リソース

### オンボーディング

- インフラストラクチャセキュリティチームの[オンボーディングテンプレート](https://gitlab.com/gitlab-com/gl-security/product-security/infrastructure-security/team-charter/-/blob/master/onboarding/onboarding_template.md)
- [InfraSec エンタイトルメントテンプレート](https://gitlab.com/gitlab-com/team-member-epics/access-requests/-/blob/master/.gitlab/issue_templates/role_baseline_access_request_tasks/department_security/role_security_engineer_infrastructure_security.md)
