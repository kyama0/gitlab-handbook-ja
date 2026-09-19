---
title: GitLab Dedicated Switchboard のトラブルシューティング
category: GitLab Dedicated
description: "GitLab Dedicated サポート - Switchboard"
upstream_path: /handbook/support/workflows/dedicated_switchboard/
upstream_sha: "fa96dbec1adcd6457e8819e6bd3d28fddfdddf4f"
translated_at: "2026-09-19T21:13:38+00:00"
translator: claude
stale: false
lastmod: "2026-09-14T11:39:01+08:00"
---

## 概要

Switchboard は、顧客が自社の GitLab Dedicated インスタンスを管理するために使用するポータルです。一部の GitLab チームメンバーが Switchboard へのアクセス権を持っています。
Switchboard の目標について詳しくは [Switchboard ハンドブックページ](/handbook/engineering/infrastructure-platforms/gitlab-dedicated/switchboard/)を参照してください。

## Switchboard へのアクセス {#accessing-switchboard}

GitLab サポートエンジニアは、[Okta](/handbook/eta/corporate-it/end-user-services/okta/)ホームページで **Switchboard (production)** を検索することで、[Switchboard](/handbook/engineering/infrastructure-platforms/gitlab-dedicated/switchboard/)アプリケーションにアクセスできます。

直接アクセスすることもできます:

1. https://console.gitlab-dedicated.com に移動
1. GitLab のメールアドレスを入力し **Continue** をクリック
1. Okta 経由で Switchboard にサインインしているはずです

Switchboard の URL の完全なリストは [Switchboard プロジェクトのドキュメント](https://gitlab.com/gitlab-com/gl-infra/gitlab-dedicated/switchboard/-/blob/main/README.md#deployed-environments)で確認できます。

[オンボーディング](https://docs.gitlab.com/administration/dedicated/#onboarding-to-gitlab-dedicated-using-switchboard)中に、GitLab Dedicated の顧客は Switchboard へのアクセス権を取得します。一時的な認証情報がメールで顧客に送信されます。これらの認証情報の有効期限が切れた場合、顧客はサポートチケットを開くことがあります。サポートエンジニアは Switchboard に [支援リクエスト](https://gitlab.com/gitlab-com/request-for-help/-/issues/new?issuable_template=SupportRequestTemplate-Switchboard)を開く必要があります。

### Dedicated Preprod デプロイメントを持つ顧客 {#customers-with-dedicated-preprod-deployments}

GitLab サポートエンジニアは、[Preprod 用 Switchboard](https://console.gitlab-dedicated.systems/)のデプロイメントにアクセスできます。Okta で **Switchboard Preprod Dedicated** タイルを探してください。

### 顧客と同じ視点での Switchboard の表示

顧客とまったく同じように Switchboard を表示するために、テスト用テナント管理者アカウント（`supportsandbox`）を使用できます。認証情報は 1Password の **GitLab Dedicated - Support** 保管庫に保存されています。詳細は[作業アイテム 13573](https://gitlab.com/gitlab-com/gl-infra/gitlab-dedicated/team/-/work_items/13573)を参照してください。

### パスワードリセット

外部 Switchboard ユーザーは Switchboard アプリケーションを使って自分でパスワードをリセットできます。

### 多要素認証 (MFA) のリセット

Switchboard ユーザーは自分で MFA をリセットできません。

MFA をリセットするには、Switchboard チーム向けに [支援リクエストの Issue](https://gitlab.com/gitlab-com/request-for-help/-/issues/new?issuable_template=SupportRequestTemplate-Switchboard)を作成してください。

## 顧客の構成へのアクセス {#accessing-customer-configuration}

Switchboard を起動すると、デフォルトでテナント顧客のリストを含む `/tenants` ページに移動するはずです。
**Name**、**Identifier**、**Internal reference**、**External URL** がテーブルに表示されます。
**Manage** をクリックすると、その顧客の設定を表示できます。

### テナントステータスインジケータの理解

Switchboard の Overview ページには、各 GitLab Dedicated インスタンスのリアルタイムステータス情報が表示されます。顧客から報告されたインシデントをトラブルシューティングする際、サポートエンジニアはこれらのステータスインジケータを理解するために [GitLab ドキュメント](https://docs.gitlab.com/administration/dedicated/tenant_overview/#tenant-status)を参照してください。

[YouTube のデモ](https://www.youtube.com/watch?v=RANeaAeitsU)を視聴して、テナントステータスインジケータが顧客と内部ユーザー（サポートおよび Dedicated SRE）にどのように表示されるかを確認してください。

#### 顧客から報告されたインシデントへのサポートのアクション

顧客から報告されたインシデントに対応する場合:

1. [Switchboard にログイン](dedicated_switchboard.md#accessing-switchboard)
1. 影響を受けているテナントを選択
1. テナントのステータスを確認し、適切なアクションを取る:

**Normal status:**

- 既知の内部インシデントなし
- Dedicated SRE on-call をエンゲージするために [Dedicated インシデントを発生](dedicated.md#raise-a-dedicated-incident)

**Degraded Performance** または **Service Disruption:**

- **Active incidents** をレビューして、顧客から報告された影響が内部インシデントと一致するかを判断する

  - **関連するインシデントが存在する場合:** SRE が積極的に調査中であること、また顧客が [Switchboard を通じて継続的なインシデント更新](dedicated_cmoc.md#providing-ongoing-incident-updates-using-switchboard)を受け取ることを顧客に通知する
  - **関連するインシデントが存在しない場合:** Dedicated SRE on-call をエンゲージするために [Dedicated インシデントを発生](dedicated.md#raise-a-dedicated-incident)

#### サポートにおける重要な注意事項

- ステータスインジケータは **情報提供のみ** であり、SLA 計算には影響しません
- インシデントの状態変更後、ステータスの更新が表示されるまで 1 〜 2 分かかる場合があります
- Severity 3 または 4 のインシデントは表示されません（顧客への影響が最小限）
- 影響しないライフサイクルステージのインシデントは表示されません
- メンテナンス中にインシデントが発生した場合、インシデントとメンテナンスの両方のステータスが表示されます

### Switchboard 内の過去の通知の確認

Switchboard では [Communications Lead](/handbook/engineering/infrastructure-platforms/incident-management/roles/communications-lead/)がアウトバウンドのコミュニケーションを作成できます（[Switchboard を使用した通知の送信](dedicated_cmoc/#sending-notifications-using-switchboard)を参照）。Dedicated サポートチケットをトラブルシューティングする際、通知が送信されたかどうかを確認することは便利な最初のステップです。

すべての顧客通知は Switchboard に記録されます。過去の通知を表示するには:

1. 左上隅のプロフィールをクリック
2. `Customer notifications` を選択
3. 関連する通知のタイトルをクリックして、メッセージとその受信者を表示

これらの通知がどのように作成され、Switchboard でどのように表示できるかについての [YouTube の概要](https://www.youtube.com/watch?v=e2ZRD8csjow)を視聴してください。

- **顧客の視点でメールがどのように見えるかの可視化**

  以下はインシデントに関する通知の例です。テスト環境のものですが、書式は同じです。

  ![通知メールのスクリーンショット例](/images/support/switchboard_comms_email_example.png)

- **送信者のメールアドレス**

  送信者のメールアドレスは Switchboard 環境によって異なります。顧客テナントに使用される 2 つのメールアドレスは以下のとおりです:

  - Production: `switchboard@gitlab-dedicated.com`
  - Preprod: `switchboard@gitlab-dedicated.systems`

- **使用されるメール件名**

  - お客様の GitLab Dedicated インスタンスのアラートを調査中
  - 更新：お客様の GitLab Dedicated インスタンスを調査中
  - 更新：お客様の GitLab Dedicated インスタンスへの優先度の高い対応
  - 更新：お客様の GitLab Dedicated インスタンスの問題解決に取り組んでいます
  - 解決済み：お客様の GitLab Dedicated インスタンスは稼働しています
  - お客様の GitLab Dedicated インスタンスの緊急メンテナンスを予定しています
  - 緊急メンテナンスが完了しました

  これらは [テンプレート](https://gitlab.com/gitlab-com/gl-infra/gitlab-dedicated/switchboard/-/tree/main/lib/tenants/notification_templates)でも確認でき、新しいものが時間とともに追加されることがあります。

- **顧客のメールサーバーにメールが配信されたかを確認する可能なバックエンドチェック**

  これは利用できません。Switchboard はメールが送信されたことを確認でき、Switchboard を使って過去の通知にアクセスできますが、メールが顧客のメールサーバーに正常に配信されたかどうかは確認できません。送信されたことのみ確認できます。

### バージョン情報

`Tenant Details` 折りたたみセクションを確認してください。

### メンテナンススケジュール

`Maintenance` 折りたたみセクションを確認してください。

### Opensearch リンク

これらは Tenant Overview ページでサポートチームメンバーに利用可能です。

### 顧客の連絡先

Tenant Overview ページの `Customer Communication` セクションを確認してください。

このセクションには、顧客の CSM（旧 TAM）も含まれます。

### AWS リージョン

Tenant Overview ページを確認してください。

### 履歴の表示

- ページ上部の **Audit Logs** リンクをクリックします。
- `Tenant` でフィルタします。
- 変更を表示するには、**Tenant#<tenant_id>** レコードを確認します。

## GitLab Dedicated Switchboard SSO のプロビジョニング

Switchboard 経由で GitLab Dedicated 顧客の SSO をプロビジョニングするには:

1. `SupportRequestTemplate-Switchboard-SSO` テンプレートを使って [Request for Help](https://gitlab.com/gitlab-com/request-for-help/-/issues/new?issuable_template=SupportRequestTemplate-Switchboard-SSO) Issue トラッカーで Issue を開きます。
1. Switchboard のエンジニアが SSO 構成を実行・プロビジョニングし、顧客の準備が整ったときにサポートが有効化できる状態にします。
1. サポートエンジニアは Switchboard のテナント構成ページで SSO 構成にアクセスできます:
   1. **Edit** をクリック
   1. **Enabled** チェックボックスをクリック
   1. **Save** をクリック
1. SSO 構成は Tenant に対して直ちに有効になります。

   **⚠️ 重要:** 一度有効にすると、テナントユーザーは無効化されない限り、SSO 経由で自社の Identity Provider 経由で **のみ** ログインできるようになります。有効化する前に、顧客がこの変更の準備ができていることを確認してください。
