---
title: 'Zendesk'
description: 'Zendesk に関するドキュメント'
upstream_path: /handbook/security/customer-support-operations/zendesk/
upstream_sha: 7405b4b85e7e4a5d61d4eff68e49976463e3dada
translated_at: "2026-05-09T21:03:24Z"
translator: claude
stale: false
lastmod: "2026-05-26T12:05:00-05:00"
---

## インスタンス {#instances}

### Zendesk Global {#zendesk-global}

これは私たちのメイン（かつ最初の）Zendesk インスタンスです。GitLab サポートとやり取りするほとんどの方がこのインスタンスを使用します。

- アクセス可能な対象: 全員
- 本番ドメイン: `gitlab`
  - ポータルアクセス: https://support.gitlab.com/hc
  - エージェントアクセス: https://gitlab.zendesk.com/agent
  - 内部ブランドアクセス: https://gitlab-internal.zendesk.com/hc
    - 注意: まずエージェントアクセスのリンクからサインインする必要があります
- サンドボックスドメイン: `gitlab1707170878`
  - ポータルアクセス: https://gitlab1707170878.zendesk.com/hc
  - エージェントアクセス: https://gitlab1707170878.zendesk.com/agent
  - 内部ブランドアクセス: https://gitlab1707170878-internal.zendesk.com/hc
    - 注意: まずエージェントアクセスのリンクからサインインする必要があります

### Zendesk US Government {#zendesk-us-government}

これは Self-Managed のパブリックセクターユーザー向けに特別に作られた Zendesk インスタンスです。多くの制限があり、事前承認なしでは一般的に使用できません。

- アクセス可能な対象: 米国市民のみ
- 本番ドメイン: `gitlab-federal-support`
  - ポータルアクセス: https://federal-support.gitlab.com/hc
  - エージェントアクセス: https://gitlab-federal-support.zendesk.com/agent
  - 内部ブランドアクセス: https://gitlab-federal-internal.zendesk.com/hc
    - 注意: まずエージェントアクセスのリンクからサインインする必要があります
- サンドボックスドメイン: `gitlabfederalsupport1585318082`
  - ポータルアクセス: https://gitlabfederalsupport1585318082.zendesk.com/hc
  - エージェントアクセス: https://gitlabfederalsupport1585318082.zendesk.com/agent
  - 内部ブランドアクセス: https://gitlabfederalsupport1585318082-internal.zendesk.com/hc
    - 注意: まずエージェントアクセスのリンクからサインインする必要があります
