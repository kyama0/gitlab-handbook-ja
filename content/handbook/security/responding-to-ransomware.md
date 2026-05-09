---
title: ランサムウェアへの対応
upstream_path: /handbook/security/responding-to-ransomware/
upstream_sha: 1e195b58b9f249ff10bd0e705106c320fee86141
translated_at: "2026-05-09T12:00:00Z"
translator: claude
stale: false
---

ランサムウェアは GitLab を含む多くの組織にとって持続的な脅威です。GitLab 資産が関与するランサムウェア攻撃が発生した場合、既存の対応手順を把握しておくことが重要です。このような攻撃の標的は変動するため、既存の状況に適応し、身代金の支払いを避けるための災害復旧プロセスが整備されていることを理解することが重要です。GitLab のレッドチームは、影響を受ける可能性が最も高いターゲットを特定するために [広範な調査](https://gitlab.com/gitlab-com/gl-security/security-operations/gl-redteam/red-team-operations/-/issues/118) を実施しました。その結果、組織を保護するために効率的な対応をブートストラップするのに役立つ以下のガイドラインが用意されています。

***重要な最初のステップ:***

- ランサムウェア攻撃が検出されたらすぐに SIRT チームを関与させる
- SIRT チームは [インシデント対応ガイド](/handbook/security/security-operations/sirt/sec-incident-response/) と [インシデントコミュニケーション計画](/handbook/security/security-operations/sirt/security-incident-communication-plan/) に従い、[該当するランブック](https://gitlab.com/gitlab-com/gl-security/runbooks/-/blob/master/sirt/infrastructure/ransomware-attack.md) を参照する。
- 対応者は、緩和フェーズで GitLab の確立された [ラピッドエンジニアリングレスポンス](/handbook/engineering/workflow/#rapid-engineering-response) 計画を活用する必要があります。
- 関連情報については Business Continuity & Disaster Recovery Controls ハンドブックページを参照する必要があります。

***関連するチーム:***

影響を受けるリソースに応じて、以下のチームを関与させ、ラピッドエンジニアリングレスポンスのために作成された Issue について把握させる必要があります。これは影響を受ける資産に応じた網羅的なリストではないことに注意してください。

- [Database: Disaster Recovery Team](/handbook/engineering/infrastructure-platforms/database/disaster-recovery/) - PostgreSQL データベースの災害復旧戦略を担当。
- [Infrastructure Team](/handbook/engineering/infrastructure/team/) - GitLab SaaS ソフトウェアの可用性、信頼性、パフォーマンス、スケーラビリティ
- [Infrastructure Security Team](/handbook/security/product-security/infrastructure-security/) - クラウドインフラセキュリティ、ベストプラクティス、脆弱性管理に注力するインフラチームの安定したカウンターパート
- [Business Technology Engineering](/handbook/business-technology/) - エンドポイントとシステムアクセス管理
- [Support Team](https://about.gitlab.com/support/) - システム障害に関する顧客や従業員からの問い合わせへの対応
- [Legal & Corporate Affairs](/handbook/legal/)
- [Security Assurance](/handbook/security/security-assurance/) - エンタープライズアプリケーションとしての GitLab のセキュリティを保証
- [Marketing](/handbook/marketing/emergency-response/) - マーケティング、広告、販売資料における GitLab と当社製品を正確に表現する。

***コミュニケーション:***

インシデントについて外部に伝達する必要があると判断したら、SIMOC は [セキュリティインシデントコミュニケーション計画](/handbook/security/security-operations/sirt/security-incident-communication-plan/#communicating-externally) を開始し、[主要なステークホルダーが関与](/handbook/security/security-operations/sirt/security-incident-communication-plan/#designated-key-approvers) してすべての対外コミュニケーションについてコラボレーション、レビュー、承認を行います。 *注:* 顧客データが露出した場合、対外コミュニケーションが法律で必要となることがあります。
