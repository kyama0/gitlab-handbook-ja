---
title: "GitLab Teleport アクセスポリシー"
tags:
  - security_policy
  - security_policy_au
  - security_policy_acia
upstream_path: "/handbook/engineering/gitlab-com/policies/teleport/"
upstream_sha: "27d1e9b21984fe11eff53db49a85c2ba08ef901c"
translated_at: "2026-04-28T15:26:32Z"
translator: claude
stale: false
lastmod: "2026-01-23T12:25:37-06:00"
---

## 目的

[データベースアクセス](https://gitlab.com/gitlab-com/runbooks/-/blob/master/docs/teleport/Connect_to_Database_Console_via_Teleport.md)や [Rails コンソール](https://gitlab.com/gitlab-com/runbooks/-/blob/master/docs/teleport/Connect_to_Rails_Console_via_Teleport.md)などのターミナル/CLI ツールへの監査済みアクセスを確保するために、GitLab は Teleport を使用しています。

## スコープ

Teleport アクセスポリシーは、ターミナルまたは CLI アクセスを必要とする本番環境内のすべてのシステムに適用されます。

## 役割と責任

| 役割 | 責任 |
| --- | --- |
| GitLab チームメンバー | このポリシーの要件に従う責任を負う |
| システムオーナー | このポリシーへの準拠 |
| コードオーナー | このポリシーへの変更および例外を承認する責任を負う |

## 手順

- Teleport アクセスは [Okta](/handbook/security/corporate/end-user-services/okta/) を通じて管理され、ロールのベースライングループ割り当ての一部として、または適切な承認を受けた[アクセスリクエスト](/handbook/security/corporate/services/access-requests/)を通じて提供されます
- アクセスレビューはすべてのユーザーが適切であり、適切なアクセスレベルを持っていることを確認するために四半期ごとに実施されます
- Teleport 監査ログは 1 年間という定められた期間保持されなければなりません
- Teleport 監査ログは 1 年間という定められた期間が経過する前に変更または削除されてはなりません
- Teleport 監査ログデータへのアクセスは最小権限の原則に基づいて制限されなければなりません

## 例外

このポリシーの例外は[情報セキュリティポリシー例外管理プロセス](/handbook/security/#information-security-policy-exception-management-process)に従って追跡されます

## 参考資料

- [本番環境と見なされるものとは](https://gitlab.com/gitlab-com/gl-security/security-assurance/sec-compliance/compliance/-/blob/master/production_definition.md)
- [本番アーキテクチャ](/handbook/engineering/infrastructure-platforms/production/architecture/)
- [ランブック: Teleport を使用してデータベースコンソールに接続する方法](https://gitlab.com/gitlab-com/runbooks/-/blob/master/docs/teleport/Connect_to_Database_Console_via_Teleport.md)
- [ランブック: Teleport を使用して Rails コンソールに接続する方法](https://gitlab.com/gitlab-com/runbooks/-/blob/master/docs/teleport/Connect_to_Rails_Console_via_Teleport.md)
- [Teleport](https://goteleport.com/docs/)
