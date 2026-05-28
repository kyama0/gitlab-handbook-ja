---
title: 'プロビジョニング'
description: 'Zendesk のユーザープロビジョニングに関するドキュメント'
upstream_path: /handbook/security/customer-support-operations/zendesk/users/provisioning/
upstream_sha: 6f812a8fec541dba51e50314e85d7890b9e71d7d
translated_at: "2026-05-28T21:12:16Z"
translator: claude
stale: false
lastmod: "2026-05-26T12:05:00-05:00"
---

このドキュメントでは、Zendesk におけるエージェントのプロビジョニングおよびデプロビジョニングのプロセスについて詳述します。

{{% alert title="注意" color="primary" %}}

- このセクションのすべての項目は、Zendesk への `Administrator` レベルのアクセスが必要です。

{{% /alert %}}

## ロールベースのエンタイトルメント {#role-based-entitlement}

GitLab で誰かが業務を開始してから 2 日後、そのロールベースのエンタイトルメントに基づいてアクセスリクエスト Issue が生成されます。リクエスト自体に基づいて手動でユーザーをプロビジョニングします。

これを行うには、以下が必要です。

1. Zendesk にユーザーを作成（使用するロールはロールベースのエンタイトルメントのアクセスリクエスト Issue に含まれているはずです）。グループやその他の設定が正確であることを確認してください（アクセスリクエスト Issue を参照）。ユーザー作成の詳細については、[エージェントを手動で作成する](/handbook/security/customer-support-operations/zendesk/users/agents#manually-creating-an-agent)を参照してください。
1. 必要な場合は Okta で適切なアプリを関連付け（詳細については [Okta 経由でアプリを割り当てる](#assigning-an-app-via-okta)を参照）。

完了したら、アクセスリクエスト Issue 内の項目をチェックオフします。

## 特別リクエスト

ロールベースのエンタイトルメントに関係しない、いずれかの Zendesk インスタンス上でのプロビジョニングに関する特別リクエスト Issue は、アクセスリクエスト Issue 経由で行う必要があります。続行するには Zendesk システムオーナーの承認が必要であることに注意してください。

プロビジョニングのタイミングで何をすべきかについては、[ロールベースのエンタイトルメント](#role-based-entitlement)を参照してください。

## Zendesk Global ライトエージェント

これは、依頼者が [Lumos](https://app.lumosidentity.com/app_store?domainAppId=1115644&permissionIds=6102631) 経由で依頼することで処理されます。これにより、[Light Agent Provisioning プロジェクト](https://gitlab.com/gitlab-support-readiness/zendesk-global/users/light-agent-provisioning)に CI/CD パイプラインが作成されます。

これは `bin/process_via_lumos` スクリプトをトリガーし、以下を行います。

1. 依頼者のメールが `gitlab.com` ドメインを持っているかを確認
   - 持っていない場合は、続行しません
1. メールが現在 Zendesk のユーザーで使用中かを確認
1. ユーザーが存在する場合、すでにエージェントになっているかを確認
   - すでにエージェントである場合は、その旨のメッセージを出力して続行しません
1. 必要なメタデータを持つエージェントとしてユーザーを作成または更新するアクションを実行

### 専門化された Zendesk Global ライトエージェント

{{% alert title="注意" color="primary" %}}

- 依頼者は、まず完全に作成されたライトエージェントアカウントを持っている必要があります。持っていない場合は、まず作成するように案内してください。

{{% /alert %}}

専門化されたライトエージェントのグループは、特定のタイプの内部リクエストを提出することが許可されています。これらのエージェントは、チームに基づいて特定のタグの追加または削除が必要です。

| チーム | 必要なタグ |
|------|--------------|
| Partner Support | `partner_support_agent` |
| Order Management | `order_management_team` |
| OEM Management | `oem_management_team` |

依頼されるのは、そのタグの追加または削除のみとなります（そしてアクセスリクエスト Issue 経由でなければなりません）。

## Zendesk US Government ライトエージェント

これらは技術スタックプロビジョナーが手動でプロビジョニングする必要があるため、[アクセスリクエスト Issue](https://gitlab.com/gitlab-com/team-member-epics/access-requests/-/issues/new) が必要です。

受領され承認された後、プロセスは以下のように進みます。

1. People チームのドロップダウンの下から `Background Checks` を選択して HelpLab リクエストを送信します。次のページで、`What type of support do you need?` ドロップダウンから `Identity Verification` または `Other` を選択し、以下のプロンプトを使用してリクエストを記入します。
   > Greetings all!
   >
   > Can you verify if NAME is a US Citizen? They are requesting access to the US Government Zendesk instance via ISSUE which does require it.
   >
   > Thanks!
   - NAME を依頼者の名前に置き換える
   - ISSUE をアクセスリクエスト Issue へのリンクに置き換える
   - [このフォームへの直接リンク](https://helplab.gitlab.systems/esc?id=sc_cat_item&sys_id=3641564f47977550dff2c5a4f16d4326)
1. アクセスリクエスト Issue に、米国市民権確認のため People チームに連絡したことをノートします。
1. People チームの応答に応じて、次のアクションが変わります。
   - People チームが市民権を確認した場合:
     - Zendesk US Government インスタンスにライトエージェントを手動で作成
     - Okta で Zendesk US Government アプリを関連付け（詳細については [Okta 経由でアプリを割り当てる](#assigning-an-app-via-okta)を参照）
     - プロビジョニング済みであることを Issue に更新
   - People チームが市民権を確認できない場合:
     - アクセスリクエスト Issue に、市民権が確認できなかったため Issue がクローズされる旨をコメントします。People チームからの確認なしには、これ以上のアクションは取れません。

## デプロビジョニング

時折、エージェントのデプロビジョニングを依頼されることがあります（これらのほとんどはオフボーディングタスクから来ます）。エージェントをデプロビジョニングするには、Zendesk でそのエージェントのページに移動し、以下を行います。

- そのエージェントからアクティブなチケット（Closed 未満）の割り当てを解除（マネージャーに割り当て）
- ユーザーに関連付けられた [Support Team](https://gitlab.com/gitlab-support-readiness/support-team) ファイルを削除（該当する場合）
- Zendesk からユーザーを削除
- 完了したら、デプロビジョニングを依頼している Issue で以下を実施
  - 依頼 Issue の対応するボックスをチェック

## Okta 経由でアプリを割り当てる {#assigning-an-app-via-okta}

Okta 経由でアプリを関連付けるには、対応する Google グループに対象者のメールをメンバーとして追加します。

- [Zendesk US Government](https://groups.google.com/a/gitlab.com/g/okta-zendeskfederal-users/members)

対象者を削除する必要がある場合は、グループ内で見つけて Unassign オプションをクリックします。
