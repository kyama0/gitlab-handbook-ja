---
title: ブラウザ拡張機能
description: GitLab サポートチーム向けのブラウザ拡張機能の管理、開発、公開に関するドキュメント
upstream_path: /handbook/support/browser-extensions/
upstream_sha: cf317047d2c9678524c0db59ab7ed8c050713245
translated_at: "2026-05-09T00:00:00Z"
translator: claude
stale: false
lastmod: "2026-05-05T14:58:07-04:00"
---

GitLab サポートチームは、サポートエンジニアの日常業務に役立ついくつかのブラウザ拡張機能を管理しています。このページでは、これらの拡張機能がどのように管理、開発、公開されているかをドキュメント化しています。

## 現在の拡張機能

サポートチームが現在保守しており、一般公開されているブラウザ拡張機能:

| 拡張機能名 | ブラウザ | 説明 | URL |
|---------------|---------|------------|------|
| [Zendesk Download Router](https://gitlab.com/gitlab-com/support/toolbox/zd-dl-router) | Chrome | Zendesk のダウンロードをチケット番号ごとに別フォルダへ自動振り分けします | [Chrome Web Store](https://chromewebstore.google.com/detail/zendesk-download-router/pgfhacdbkdeppdjgighdeejjfneifkml) |
| [GitLab API Helper](https://gitlab.com/gitlab-com/support/toolbox/gitlab-api-helper) | Chrome | 表示中の内容に応じて関連する API エンドポイントを表示し、すばやい API クエリを可能にします | [Chrome Web Store](https://chromewebstore.google.com/detail/gitlab-api-helper/eahadajgihknngdbmbnaodnaoghndknd) |

推奨拡張機能のより充実した一覧は、[便利なブラウザ拡張機能](../engineering/_index.md#useful-browser-extensions)をご覧ください。

## 拡張機能の公開

拡張機能の開発が完了したら、ブラウザ拡張機能ストアに公開して一般配布できます。

Chrome 拡張機能は、Chrome Web Store の共有「GitLab Inc」発行者アカウントを通じて公開・管理されます。これを利用したい場合は、[アクセスをリクエスト](#requesting-access)してください。

## Chrome Web Store 開発者ダッシュボードへのアクセス

共有「GitLab Inc」発行者アカウントの Chrome Web Store (CWA) 開発者ダッシュボードには、[Chrome Web Store 開発者コンソール](https://chrome.google.com/webstore/devconsole/5df5edac-ebab-45e2-9001-f6fb6fec07af)からアクセスできます。

## アクセス管理

### Chrome Web Store の発行者アクセス

共有「GitLab Inc」発行者アカウントは法務チームの審査を経ており、[Chrome Web Store の事業者開示要件](https://developer.chrome.com/docs/webstore/program-policies/trader-disclosure)に従って事業者アカウントとして開示されています。したがって、シンプルさのため、すべての Chrome 拡張機能はこのアカウントを使用して公開するのが最善です。

`browser-extensions@gitlab.com` という Google グループがあり、このグループの全メンバーがグループ発行者アカウントを使用して Chrome 拡張機能を公開できます。

#### アクセスのリクエスト {#requesting-access}

Chrome Web Store 発行者アカウントへのアクセスをリクエストするには:

1. GitLab の Google アカウントを使用して、[開発者アカウントを登録](https://developer.chrome.com/docs/webstore/register)し、5 米ドルの登録料を支払います。
   - ⚠️ **登録プロセス中に[事業者検証](https://developer.chrome.com/docs/webstore/program-policies/trader-disclosure)フォームの入力を求められても、入力しないでください**。
1. Anton Smith (Slack の `@anton`) に連絡し、共有「GitLab Inc」発行者アカウントへのアクセスをリクエストしてください。

なお、[アクセスリクエスト](/handbook/security/corporate/end-user-services/access-requests/access-requests/)は不要です。

#### アクセス管理

`browser-extensions@gitlab.com` グループにユーザーを追加または削除するには:

1. [browser-extensions グループのメンバーページ](https://groups.google.com/a/gitlab.com/g/browser-extensions/members)に移動します
2. 必要に応じてメンバーを追加・削除します（グループで `Manager` ロールが必要）
3. [Chrome Web Store 開発者ダッシュボードの設定](https://chrome.google.com/webstore/devconsole/5df5edac-ebab-45e2-9001-f6fb6fec07af/settings)にアクセスします
4. 「Group publisher memberships」で「Sync」をクリックして権限を更新します
