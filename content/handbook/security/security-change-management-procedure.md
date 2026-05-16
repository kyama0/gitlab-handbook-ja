---
title: "Security 変更管理手順"
description: "Security 部門の変更管理手順。"
upstream_path: /handbook/security/security-change-management-procedure/
upstream_sha: 1e195b58b9f249ff10bd0e705106c320fee86141
translated_at: "2026-05-09T14:00:00Z"
translator: claude
stale: false
lastmod: "2025-07-07T23:50:04+00:00"
---

## 目的

本ドキュメントの目的は、Security 部門に関連する手続き上の変更管理ステップを概説することです。

## 適用範囲

本ドキュメントは、Security が所有するシステムおよびアプリケーション、ならびに Security 部門が所有するプロセスに適用されます。

{{% note %}}
ユーザーアクセスと認可に関する変更については、引き続き [アクセスリクエスト](/handbook/security/corporate/end-user-services/access-requests/access-requests/) プロセスを通じて処理してください。
{{% /note %}}

Security では、以下の種類の変更を定義しています:

### マイナー変更 {#minor-change}

マイナー変更とは、ハンドブック更新など、業務の自然な流れの中で発生する非重要な変更のことです。マイナー変更は本番環境に直接実装され、財務的影響がなく、一般的なメンテナンスに関連し、容易に元に戻すことができます。

マイナー変更は変更管理 Issue を **必要とせず**、関連チーム内で内部的に処理できます。Security の最小権限アクセス制御は、マイナー変更の管理に必要なチェックとバランスをサポートします。

### 標準変更 {#standard-change}

標準変更とは、リスクが低く、比較的一般的で、構成変更、セキュリティパッチ、その他の通常のアプリケーション変更など、特定の手続きや作業指示に従う変更のことです。

標準変更は変更管理プロセスを経る必要があります。標準変更には **ピアレビュー**、**影響を受けるチームのマネジメント（または Code Owner）の承認**、および **実装後レビュー** が必要です。

{{% note %}}
マネージャーへ - 変更リクエストを承認する前に、正しい変更リクエストテンプレートが使用されていることを確認してください。
{{% /note %}}

### 包括的変更 {#comprehensive-change}

包括的変更とは、リスクが高い、影響が大きい、またはより複雑な手続きを伴う変更のことです。例えば、システムやアプリケーションの廃止、新規システムやアプリケーションのオンボーディング、または完全に新しい本番環境のアーキテクチャなどです。

- インフラストラクチャの変更は包括的変更とみなされます。包括的変更には、**ピアレビュー**、**影響を受けるチームのマネジメント（または Code Owner）の承認**、**技術オーナーの承認**、および **実装後レビュー** が必要です。

{{% note %}}
マネージャーへ - 変更リクエストを承認する前に、正しい変更リクエストテンプレートが使用されていることを確認してください。
{{% /note %}}

### 緊急変更 {#emergency-change}

緊急変更は、[包括的](#comprehensive-change)変更と同じ承認プロセスに従います。

- 変更が本番環境に実装された後に、承認のために登録できます。
- 緊急変更は、ユーザーが業務を遂行できない、または重要なプロセスが動作しないような運用上またはセキュリティ上の問題を修正するための **即時の重要な** 必要性がある場合にのみ使用されることを意図しています。
- 緊急変更は、変更が実装された後にレビューおよび **すべての承認** を必要とします。

## 役割と責任

| 役割 | 責任 |
| ------ | ------ |
| **[Security Governance](security-assurance/governance/)** | 変更管理活動を受け付けて対応するためのセキュリティ変更管理手順を維持する |
| | メトリクスを維持する |
| **[Security Compliance](security-assurance/security-compliance/)** | 変更がコンプライアンス義務に従って行われていることを確認する監督を提供する |
| **依頼者** | 変更管理 Issue を完成させる |
| | 技術オーナーと協力して変更を文書化、テスト、および承認を取得する |
| **技術オーナー** | [tech stack](https://gitlab.com/gitlab-com/www-gitlab-com/-/blob/master/data/tech_stack.yml) に定義されている。変更が実装される前にレビューと承認を提供する |
| | 依頼者と協力して、要求された変更が文書化、テストされ、承認が完了していることを確認する |
| | 技術オーナー承認を提供する前にピアレビューが完了していることを確認する |
| | 変更管理活動中に特定されたリスクや傾向を文書化し報告する |
| **ピアレビュー** | 要求された変更が文書化されていること、および文書化されていない下流への影響がないことをレビューし確認する |
| **実装後レビュー** | 変更が行われた後の本番環境での変更をレビューし、すべてが期待通りに機能していることを確認する |

### 承認マトリクス {#approval-matrix}

| **承認タイプ** | **説明** | **[マイナー](#minor-change)** | **[標準](#standard-change)** | **[包括的](#comprehensive-change)** | **[緊急](#emergency-change)** |
| ----- | ----- | ----- | ----- | ----- | ----- |
| **ピアレビュー** | ピアレビューは変更依頼者のピアによって実施され、計画された変更や変更プロセスの潜在的な問題を特定することを目的としています。**注:** ピアレビュープロセスは、依頼者と実装者の職務分掌の欠如のリスクを軽減するために確立されました。レビューは、本番環境への変更が有効であるという安心感を提供します。 | いいえ | はい | はい | はい |
| **実装後レビュー** | 変更依頼者のピアによって実施され、変更が本番環境に実装された後に期待通りに機能していることを確認することを目的としています。 | いいえ | はい | はい | はい |
| **影響を受けるチームのマネジメント／Code Owner 承認** | 特定のシステムまたはアプリケーションの責任者であるマネジメントによる承認 | いいえ | はい | はい | はい |
| **技術オーナー承認** | [tech stack](https://gitlab.com/gitlab-com/www-gitlab-com/-/blob/master/data/tech_stack.yml) に定義されているシステムまたはアプリケーションの技術オーナーによる承認。 | いいえ | いいえ | はい | はい |

{{% note %}}
技術オーナーの承認は、システムまたはアプリケーションが既に tech stack に存在することに依存します。tech stack でまだ技術オーナーが割り当てられていない新しいシステムまたはアプリケーションについては、[Security Risk Team](/handbook/security/security-assurance/security-risk/) に連絡してください。
{{% /note %}}

## 手順

セキュリティ変更リクエストを送信するには、以下のいずれかのリンクを使用して変更リクエスト Issue を作成してください:

[標準変更リクエスト](https://gitlab.com/gitlab-com/gl-security/security-change-management/-/issues/new?issuable_template=standard_change_template)

[包括的変更リクエスト](https://gitlab.com/gitlab-com/gl-security/security-change-management/-/issues/new?issuable_template=comprehensive_change_template)

[緊急変更リクエスト](https://gitlab.com/gitlab-com/gl-security/security-change-management/-/issues/new?issuable_template=emergency_change_template)

[CorpSec 変更リクエスト](https://gitlab.com/gitlab-com/gl-security/corp/issue-tracker/-/issues/new?description_template=corpsec_normal_change)

該当する Issue テンプレートの指示に従って、以下を行います:

- リクエストに適切なレベルの詳細を追加する
- [役割と責任](/handbook/security/security-change-management-procedure/#roles--responsibilities) および [承認マトリクス](/handbook/security/security-change-management-procedure/#approval-matrix) のセクションに従って、適切なチームメンバーをリクエストにアサインする

[Security Change Management プロジェクト](https://gitlab.com/gitlab-com/gl-security/security-change-management)

[CorpSec Change Issues](https://gitlab.com/groups/gitlab-com/gl-security/corp/-/issues/?sort=created_date&state=opened&label_name%5B%5D=corpsec-metric%3A%3Achange&first_page_size=100)

### コミュニケーション

セキュリティ変更リクエストが **すべての GitLab チームメンバー** に影響する場合、変更が SAFE の対象であるか、または高度に機密と見なされる場合は `#whats-happening-at-gitlab` または `#company-fyi-private` に作業開始前および変更完了後に投稿することで、変更とその影響を伝えるようにしてください。

**変更、その理由、および影響を必ず伝えてください。**

セキュリティ変更リクエストが **すべての Security 部門のチームメンバー** に影響する場合、`#security-team-only` に作業開始前および変更完了後に投稿することで、変更とその影響を伝えるようにしてください。

**変更、その理由、および影響を必ず伝えてください。**

セキュリティ変更リクエストが **特定の Security 部門または個別のチームメンバー** に影響する場合、影響を受けるチームメンバーに適切な方法で変更とその影響を伝えるようにしてください。

## CorpSec - 大規模デプロイメントの展開

可能な限り、macOS のオペレーティングシステムアップグレード（Monterey から Ventura など）や全く新しいソフトウェアの展開などの大規模デプロイメントは、部門ごとに実施されます。セキュリティパッチや既存ソフトウェアのマイナーアップデートなどの小規模な変更は同じスケジュールの対象とはならず、Phase 1 のテストが完了した後にグローバルに展開できます。大規模デプロイメントの順序は以下の通りです:

Phase 1: アルファテスター

Phase 2: ベータテスター

ベータテスターグループに参加するボランティアを歓迎します！Slack の #corpsec-beta-testers チャンネルに参加してください。ベータテスターのリストは、そのチャンネルのチームメンバーのリストを使用してスクリプト経由で毎日自動的に更新されます。#corpsec-beta-testers チャンネルに参加するだけでテストには参加したくない場合は、いつでもチャンネルでその旨を述べて IT のメンバーにタグ付けするか、チャンネルから完全に退出することで、テストからオプトアウトする意思を表明してください。

ベータテスターは、特定の管轄区域では国全体での実装が承認されない可能性のあるアプリケーションのテストに参加することに同意しています。そのような管轄区域にいる場合、参加はベータテストに限定され、テスト完了後、GitLab がアプリケーションの国全体での実装の承認を受けるまで、アプリケーションへのアクセスと使用は取り消されます。

Phase 3: Security

Phase 4: Legal

Phase 5: Marketing、People Group、CEO Division

Phase 6: Engineering、Product

Phase 7: Sales、Finance

Phase 8: VIP

重大または破壊的な変更に対する VIP サポートは、Service Desk チームからの直接サポートを通じて処理されます。Service Desk チームは、最小限の混乱でアップデートやデプロイメントが成功するように、都合の良い時間に通話をスケジュールします。

## 例外

本手順への例外は、[情報セキュリティポリシー例外管理プロセス](/handbook/security/controlled-document-procedure/#exceptions) に従って追跡されます。

## 参考資料

- [変更管理ポリシー](/handbook/security/security-and-technology-policies/change-management-policy/)
- [管理対象ドキュメント手順](/handbook/security/controlled-document-procedure/)
- [管理対象ドキュメント年次レビュープログラム](/handbook/security/controlled-document-procedure/#review)
