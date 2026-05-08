---
title: Zendesk エージェントのパーソナライズ
description: サポートチームメンバー向けに Zendesk でパーソナライズできるエージェント表示オプションについて説明します
category: Zendesk
subcategory:
last-reviewed: 2024-05-23
upstream_path: /handbook/support/workflows/zendesk_agent_personalization/
upstream_sha: c8fa138220d8c6d69f811b17242d6d2f08e4e409
translated_at: "2026-05-08T05:34:58Z"
translator: claude
stale: false
---

## Zendesk エージェントのパーソナライズ

サポートエンジニアとして、Zendesk でパーソナライズできる項目はいくつかあります。たとえば、オンボーディング中にプロフィール画像を更新するよう案内されます。support-team の YAML エントリを編集することで変更できる項目もあります。このページでは、パーソナライズできる項目と変更方法について説明します。

support-team.yaml で編集可能な Zendesk のフィールドの詳細については、[support team wiki](https://gitlab.com/gitlab-support-readiness/support-team/-/wikis/Support-team-entry/Zendesk) を参照してください。

### 表示名

デフォルトでは、Zendesk でのあなたの表示名は `Firstname Lastname` になります。エイリアスを設定することで、チケットへの返信や署名に表示される表示名をパーソナライズできます。

エイリアスを使って表示名を変更するには:

1. [support-team プロジェクトのエントリ](https://gitlab.com/gitlab-support-readiness/support-team/-/tree/master/data/agents) ページを編集します。
2. 更新したい Zendesk インスタンス（Global の場合は `main`、US Government の場合は `us-federal`）のセクションを見つけます。
3. `alias` 行を、エイリアスとして使用したい名前に更新します。

顧客に表示される名前には他にも考慮すべき方法があることに注意してください。たとえば次のものです:

* Zoom の[表示名](/handbook/support/#zoom-name-format)
* Calendly の[Personal Link](https://calendly.com/app/personal/link) URL
* GitLab の[ユーザー名](/handbook/tools-and-tips/#change-your-username-at-gitlabcom)

### Zendesk 署名に表示される GitLab ハンドル

デフォルトでは、Zendesk の署名に GitLab ハンドルは表示されません。表示したい場合は、次の手順で設定できます:

1. [support-team プロジェクトのエントリ](https://gitlab.com/gitlab-support-readiness/support-team/-/tree/master/data/agents) ページを編集します。
2. 更新したい Zendesk インスタンス（Global の場合は `main`、US Government の場合は `us-federal`）のセクションを見つけます。
3. `show_in_signature:,  gitlab_handle:` セクションを `false` から `true` に更新します。

### 挨拶文 (Salutations)

チケット更新時に署名の前に常に挿入される、パーソナライズされた挨拶文を設定できます。たとえば `Regards,` のようなものです。私たちは一般的に、デフォルトの挨拶文を作成せず、対応中のチケットの状況に合わせて挨拶文を選ぶことを推奨します。ただし、設定したい場合は次の手順で行えます:

1. [support-team.yaml](https://gitlab.com/gitlab-com/support/team/-/blob/master/data/agents/) ページを編集します。
2. 更新したい Zendesk インスタンス（Global の場合は `main`、US Government の場合は `us-federal`）のセクションを見つけます。
3. `salutations:` 行を希望のフレーズに更新します。
