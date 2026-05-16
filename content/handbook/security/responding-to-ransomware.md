---
title: ランサムウェアへの対応
upstream_path: /handbook/security/responding-to-ransomware/
upstream_sha: "1e195b58b9f249ff10bd0e705106c320fee86141"
translated_at: "2026-05-14T00:00:00Z"
translator: claude
stale: false
lastmod: "2025-08-27T18:17:37+00:00"
---

ランサムウェアは GitLab を含む多くの組織にとって持続的な脅威です。GitLab 資産が関与するランサムウェア攻撃が発生した場合、既存の対応手順を把握しておくことが重要です。このような攻撃の標的は変動するため、既存の状況に適応し、身代金の支払いを避けるための災害復旧プロセスが整備されていることを理解することが重要です。GitLab のレッドチームは、影響を受ける可能性が最も高いターゲットを特定するために [広範な調査](https://gitlab.com/gitlab-com/gl-security/security-operations/gl-redteam/red-team-operations/-/issues/118) を実施しました。その結果、組織を保護するために効率的な対応をブートストラップするのに役立つ以下のガイドラインが用意されています。

***最初の重要なステップ:***

- ランサムウェア攻撃が検出され次第、SIRT チームを関与させます
- SIRT チームは [インシデント対応ガイド](/handbook/security/security-operations/sirt/sec-incident-response/) と [インシデント コミュニケーション プラン](/handbook/security/security-operations/sirt/security-incident-communication-plan/) に従い、[関連する run book](https://gitlab.com/gitlab-com/gl-security/runbooks/-/blob/master/sirt/infrastructure/ransomware-attack.md) を参照します。
- 対応者は、緩和フェーズで GitLab の確立された [迅速エンジニアリング対応](/handbook/engineering/workflow/#rapid-engineering-response) 計画を活用すべきです。
- 関連する情報については、Business Continuity & Disaster Recovery Controls ハンドブックページを参照すべきです。

***関連するチーム:***

影響を受けるリソースに応じて、以下のチームを関与させ、迅速エンジニアリング対応のために作成された Issue を認識させる必要があります。影響を受ける資産によっては、これは包括的なリストではない点に注意してください。

- [Database: Disaster Recovery Team](/handbook/engineering/infrastructure-platforms/database/disaster-recovery/) - PostgreSQL データベースの災害復旧戦略を担当。
- [Infrastructure Team](/handbook/engineering/infrastructure-platforms/) - GitLab SaaS ソフトウェアの可用性、信頼性、パフォーマンス、スケーラビリティ
- [Infrastructure Security Team](/handbook/security/product-security/infrastructure-security/) - クラウドインフラセキュリティ、ベストプラクティス、脆弱性管理に焦点を当てた、インフラチームの安定したカウンターパート
- [Business Technology Engineering](/handbook/business-technology/) - エンドポイントおよびシステムアクセス管理
- [Support Team](https://about.gitlab.com/support/) - システム障害に関するお客様または従業員からの問い合わせへの対応
- [Legal & Corporate Affairs](/handbook/legal/)
- [Security Assurance](/handbook/security/security-assurance/) - エンタープライズアプリケーションとしての GitLab のセキュリティを保証
- [Marketing](/handbook/marketing/emergency-response/) - マーケティング、広告、セールス資料における GitLab と当社製品の正確な表現。

***コミュニケーション:***

インシデントについて外部にコミュニケーションする必要があると判断した場合、SIMOC は [セキュリティ インシデント コミュニケーション プラン](/handbook/security/security-operations/sirt/security-incident-communication-plan/#communicating-externally) を開始し、外部向けのコミュニケーションのコラボレーション、レビュー、承認のために [主要なステークホルダーが関与](/handbook/security/security-operations/sirt/security-incident-communication-plan/#designated-key-approvers) します。 *注:* 顧客データが露出した場合、外部コミュニケーションは法律で要求されることがあります。
