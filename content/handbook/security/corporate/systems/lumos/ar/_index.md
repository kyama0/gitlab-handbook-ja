---
title: Lumos アクセスリクエストガイド
upstream_path: /handbook/security/corporate/systems/lumos/ar/
upstream_sha: 1e195b58b9f249ff10bd0e705106c320fee86141
translated_at: "2026-05-10T00:00:00Z"
translator: claude
stale: false
lastmod: "2026-04-09T20:14:47+00:00"
---

## 概要

[Lumos App Store](https://app.lumosidentity.com/app_store) でアクセスリクエストを作成することで、アプリケーションへのアクセスをリクエストできます。

Lumos は、マネージャー、システムオーナー、その他必要な承認者から自動的に通知し承認を取得します。

プロビジョニング自動化が存在する場合、Lumos は自動的にアプリのプロビジョニングを実行します。存在しない場合、Lumos はシステムオーナーに手動プロビジョニング手順の実行を通知し、システムオーナーがプロビジョニング完了を確認した時点で報告します。

私たちは tech stack アプリケーションを Lumos へイテレーション的に移行している段階で、すべてのアプリがまだ利用可能なわけではありません。プロビジョニング自動化機能や、アクセスリクエストの量が多いアプリケーションを優先しています。

## アクセスリクエストの作成

1. Okta タイルまたは Slack サイドバーから Lumos を開きます
2. リストからアプリを選択します
3. 以下のオプションを選択します:

    - アクセスを受ける対象者
    - 必要な権限
    - アクセス期間
    - ビジネス上の正当な理由 — アクセスが必要な「理由」

    <img src="/images/security/corporate/systems/lumos/ar/lumos_appstore_and_app.png" alt="Lumos App Store とアクセスリクエスト" width="600"/><br>

### または Slack で

1. Lumos アプリを見つけます
2. **Request Access** をクリックします
3. アプリ、権限、対象ユーザーを選択します

<img src="/images/security/corporate/systems/lumos/ar/lumos_appstore_slack.png" alt="Slack 内の Lumos App Store" width="400"/><br>

すべての承認が完了すると、Lumos からアクセスが付与されたことが通知されます。

## アクセスリクエストの承認

1. Slack またはメールで受信したメッセージを開くか、Okta タイルから Lumos にアクセスします
2. Slack の場合、Approve をクリック、コメントを追加、または Deny をクリックします
3. または、メールから **View Request on Lumos** をクリックして、Approve、コメントを追加、または Deny をクリックします

    <img src="/images/security/corporate/systems/lumos/ar/lumos_appstore_slack_approve.png" alt="Slack での Lumos 承認" width="600"/><br>

    <img src="/images/security/corporate/systems/lumos/ar/lumos_appstore_email_approve.png" alt="メールでの Lumos 承認" width="600"/><br>

    <img src="/images/security/corporate/systems/lumos/ar/lumos_appstore_web_approve.png" alt="Lumos でのリクエスト承認" width="600"/><br>

{{% alert title="承認前に付与するアクセスのレベルを変更できますか?" color="warning" %}}

はい！ Slack 承認リクエストの「Edit」ボタンをクリックするか、Lumos の承認リクエストをクリックして、ユーザーがリクエストしたグループを変更します。

「admin」グループに追加されているがそのグループに所属すべきでない人がいる場合に、これを行う必要があるかもしれません。ユーザーがアクセスを全く持つべきでない場合は、リクエストを拒否してください！

{{% /alert %}}

## アプリのプロビジョニング

**注:** 手動プロビジョニングのアプリの場合、アプリ管理者にプロビジョニングが実行されたことの確認が求められます。

1. Slack またはメールで受信したメッセージを開くか、Okta タイルから Lumos にアクセスします
2. アプリの管理者インターフェイス内でユーザー作成を実行します
3. Lumos に戻り、ユーザーが作成されたことを確認します

    <img src="/images/security/corporate/systems/lumos/ar/lumos_appstore_slack_provision.png" alt="アプリでのユーザープロビジョニングを確認" width="600"/><br>

## 自分の Lumos アクセスリクエストのステータスは?

自分の Lumos アクセスリクエストのステータスは、Lumos Slack アプリの *Messages* タブで確認できます。これまでに行ったすべてのリクエストは Messages タブに表示され、ステータスの変化に応じて動的に更新されます。

アクセスリクエストが完了すると、リクエストのステータスはアクセスが付与されたことを示すように更新されます。

  <img src="/images/security/corporate/systems/lumos/ar/lumos_access_granted.png" alt="アプリアクセスリクエストの成功を示すメッセージ" width="600"/><br>

## Lumos App Store にアプリを追加するリクエスト

- Okta ログイン可能な任意のアプリを Lumos に追加できます。最適な候補は、Okta グループによって制御されるロールベースのアクセス権限を持つアプリです。今後のイテレーションでスケジュールされるよう、[Issue を起票してください](https://gitlab.com/gitlab-com/gl-security/corp/issue-tracker/-/issues/new?issuable_template=lumos_appstore_add_app)。
