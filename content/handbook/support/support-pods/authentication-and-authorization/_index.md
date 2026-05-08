---
title: 認証および認可サポート Pod
description: OmniAuth、SAML、SCIM、LDAP、その他の認証関連事項のチケットで協働します。
upstream_path: /handbook/support/support-pods/authentication-and-authorization/
upstream_sha: 1426909c018f3e75bf94ea36ef7e2a30be77e167
translated_at: "2026-05-08T00:00:00Z"
translator: claude
stale: false
---

## 目的

EMEA で行われている SAML スタディグループを補完し、異なるリージョンのチケットで協働するための時間を確保することで、他の OAuth プロバイダーに関する知識を深め、リージョンを越えて知識を共有できるようにします。

## 現在の目標

- OmniAuth、SAML、SCIM、LDAP、その他の認証関連事項のチケットで協働する

- さまざまなセットアップを試したり再現したりする

- 知識の獲得と共有

- ドキュメントの更新

## サポート Pod のメンバー

- リード: {{< member-by-name "Asmaa Hassan Ahmed Ali" >}} (`@asmaa.hassan`)
- リード: {{< member-by-name "Gerardo Gutierrez" >}} (`@gerardo`)
- リード: {{< member-by-name "Jio Castillo" >}} (`@j.castillo`)
- リード: {{< member-by-name "Alejandro Guerrero de Alba" >}} (`@alejguer`)
- {{< member-by-name "Sabine Carpenter" >}} (`@sabinecarpenter`)
- {{< member-by-name "Firdaws Farukh" >}} (`@ffarukh`)
- {{< member-by-name "Tristan Williams" >}} (`@tristan`)
- {{< member-by-name "Michael Gibson" >}} (`@mgibsongl`)
- {{< member-by-name "Austin Pierce" >}} (`@Austin_Pierce`)
- {{< member-by-name "Michael Lussier" >}} (`@m_lussier`)
- {{< member-by-name "Daphne Kua" >}} (`@dkua1`)
- {{< member-by-name "Armin Hergenhan" >}} (`@ahergenhan`)
- {{< member-by-name "Bruno Freitas" >}} (`@bfreitas`)
- {{< member-by-name "Chris Stone" >}} (`@cms`)
- {{< member-by-name "Brie Carranza" >}} (`@bcarranza`)

## コラボレーションチャネル

- [#spt_pod_auth](https://gitlab.slack.com/archives/C01NGKZQ2F2) Slack チャネル
- 隔週ミーティング:
  - APAC/EMEA 向け: 隔週火曜 9 AM UTC
  - EMEA/AMER 向け: 隔週火曜 1 PM UTC
  - AMER/APAC 向け: 月の第4週

## Zendesk ビュー

すべての認証および認可関連のチケットを表示するための Zendesk ビューが作成されました。ビューにアクセスするには、[Support Team データ](https://gitlab.com/gitlab-support-readiness/support-team/-/tree/master/data/agents?ref_type=heads) の `zendesk:` セクションの下に `- 'Support Focus: Authentication and Authorization` を追加してください。

例:

```yaml
 zendesk:
    main:
      id: xxxxxxxxxx
      groups:
      - 'Support Focus: Authentication and Authorization'
```
