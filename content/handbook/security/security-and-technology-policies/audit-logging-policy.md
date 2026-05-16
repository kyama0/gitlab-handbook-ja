---
title: "GitLab 監査ログポリシー"
controlled_document: true
tags:
  - security_policy
  - security_policy_au
upstream_path: /handbook/security/security-and-technology-policies/audit-logging-policy/
upstream_sha: 1e195b58b9f249ff10bd0e705106c320fee86141
translated_at: "2026-05-09T12:00:00Z"
translator: claude
stale: false
lastmod: "2026-01-23T12:25:37-06:00"
---

{{< label name="Visibility: Audit" color="#E24329" >}}

## 目的

GitLab.com の適切な運用とセキュリティを保証するため、GitLab は重要な情報システム活動を記録します。

## スコープ

監査ログポリシーは、本番環境内のすべてのシステムに適用されます。本番環境には、GitLab.com およびそのサブドメインのホスティングに使用されるすべてのエンドポイントとクラウドアセットが含まれます。これには、GitLab.com の事業をサポートするサードパーティシステムが含まれることがあります。

## 役割と責任

| 役割 | 責任 |
| --- | --- |
| GitLab チームメンバー | このポリシーの要件の遵守に責任を負う |
| Security チーム | このポリシーの実装と実行に責任を負う |
| システムオーナー | 個別の監査ログ基準の定義、システム監査ログ手順の定義と実行 |
| Security マネジメント（コードオーナー） | このポリシーに対する重大な変更や例外の承認に責任を負う |

## ポリシー

- GitLab は重要な情報システム活動を記録および監視するものとします。
- ログは定義された期間保持される必要があります。
- ログは変更または削除されてはなりません。
- 監査ログデータへのアクセスは、最小権限の原則に基づいて制限される必要があります。

GitLab の継続的監視コントロールに沿って、システムオーナーは、各自の経験と専門的判断に基づき、それぞれのシステムにおいて何が「重要な情報システム活動」を構成するかを決定する責任を負います。

そのような活動は、適切な方であれば、ハンドブックまたはランブックのいずれかに文書化されます。

監査ログプロセスは、所定のシステムを担当する部門またはチームによって作成および実装される必要があります。

## 例外

このポリシーに対する例外は、[情報セキュリティポリシー例外管理プロセス](/handbook/security/controlled-document-procedure/#exceptions)に従って追跡されます。

## 参考

- [本番環境とみなされるもの](https://gitlab.com/gitlab-com/gl-security/security-assurance/sec-compliance/compliance/-/blob/master/production_definition.md)
- [本番アーキテクチャ](/handbook/engineering/infrastructure-platforms/production/architecture/)
- 構成管理
