---
title: "GitLab ラップトップ管理"
build:
    list: never
    render: never
aliases:
  - /handbook/security/corporate/end-user-services/laptop-management/_index-old/
upstream_path: /handbook/eta/corporate-it/end-user-services/laptop-management/_index-old/
upstream_sha: "c75ccd81af7d76262c8cb188bf7e7e2a7f838894"
lastmod: "2026-07-28T15:04:15+01:00"
translated_at: "2026-07-31T07:14:51+09:00"
translator: codex
stale: false
---

### 新しいラップトップと Apple ID の設定

新しいラップトップは、セキュリティを考慮して設定する必要があります。

個人用 Apple ID とは別の @gitlab.com Apple ID を使用する必要があります。
その理由には次のものが含まれます:

#### チームメンバーの退職直後に実行される手順

* 元チームメンバー（FTM）をすべての Google Groups から削除する
* 元チームメンバー（FTM）のラップトップへのアクセスをロックする
* 元チームメンバー（FTM）を、その Okta アカウントにリンクされているすべての GitLab プロビジョニング済みサービスへのアクセスから削除する
* 元チームメンバー（FTM）を、その Okta アカウントにリンクされていないすべての GitLab プロビジョニング済みサービスへのアクセスから削除する
* ラップトップに法的保留がない限り、ラップトップを安全にワイプする
* FTM のマネージャーを、その Gmail と Google Calendar の委任者として設定する
* FTM のマネージャーに、すべての "My Drive" Google Drive ファイルの編集者権限を付与する
* FTM のアカウントを Former Team Members OU に移動する
* FTM アカウントを Global Address List から削除する
* アカウントのすべてのサインイン Cookie／セッションをクリアし、アカウントパスワードをランダムな 64 文字のパスワードにリセットする
* アカウントの復旧用メールアドレスを null に設定する
* アカウントの復旧用電話番号を null に設定する
* FTM の自動返信メールメッセージを設定する。

#### 元チームメンバーが退職してから 90 日後に実行される手順

* 元チームメンバー（FTM）のすべてのエイリアスを削除する
* 所有者としてマークされたユーザーの My Drive 内のすべての Google Drive ファイルをアーカイブする
* これらは Offboarded Users Drive Archive に保存される
* 各ユーザーには `<emailUsername>_google_drive` 形式の独自フォルダーがある
* FTM アカウントを停止する
* FTM アカウントを NoGSuiteLicense OU に移動する
* アカウントから Google Workspace ライセンスを削除する

#### 以下の通知を FTM のマネージャーと IT に Slack で送信する

**即時 Slack 通知:**

> こんにちは `<Manager Firstname>``<Manager Lastname>`。直属の部下 `<Firstname>``<LastName>` の 1 人が GitLab の Google Workspace からプロビジョニング解除されたことをお知らせします。標準のオフボーディングポリシーに従い、このユーザーの Google Drive データのコピーと、そのメールおよびカレンダーアカウントへの委任アクセスが付与されます。この委任アクセスは 90 日間利用可能で、その後アカウントは閉鎖され、すべてのデータがアーカイブされます。この期間前に保持したいものを自分のアカウントへ必ずコピーしてください。このデータへのアクセス方法については、このハンドブックページの情報を参照してください（リンクを提供）。
>
> このアカウントが閉鎖される 30 日前と 1 週間前に、さらに通知を受け取ります。このプロセスについて質問がある場合、またはデータへのアクセスに支援が必要な場合は、Slack の Compass アプリ（上部の検索バーに "Compass" と入力して見つけます）または it-help@gitlab.com へメールで IT に連絡してください。

**30 日 Slack 通知**

> こんにちは `<Manager Firstname>``<Manager Lastname>`。直属の部下 `<Firstname>``<LastName>` の 1 人が 60 日前に GitLab の Google Workspace からプロビジョニング解除されたことをお知らせします。標準のオフボーディングポリシーに従い、今後 30 日間、そのメールおよびカレンダーアカウントへの委任アクセスを継続できます。その後アカウントは閉鎖され、すべてのデータがアーカイブされます。この期間前に保持したいものを自分のアカウントへ必ずコピーしてください。このデータへのアクセス方法については、このハンドブックページの情報を参照してください（リンクを提供）。
>
このアカウントが閉鎖される 1 週間前に、さらに通知を受け取ります。このプロセスについて質問がある場合、またはデータへのアクセスに支援が必要な場合は、Slack の Compass アプリ（上部の検索バーに "Compass" と入力して見つけます）または it-help@gitlab.com へメールで IT に連絡してください。

**7 日 Slack 通知**

> こんにちは `<Manager Firstname>``<Manager Lastname>`。直属の部下 `<Firstname>``<LastName>` の 1 人が 83 日前に GitLab の Google Workspace からプロビジョニング解除されたことをお知らせします。標準のオフボーディングポリシーに従い、今後 7 日間、そのメールおよびカレンダーアカウントへの委任アクセスを継続できます。その後アカウントは閉鎖され、すべてのデータがアーカイブされます。この期間前に保持したいものを自分のアカウントへ必ずコピーしてください。このデータへのアクセス方法については、このハンドブックページの情報を参照してください（リンクを提供）。
>
> これは最終通知です。このプロセスについて質問がある場合、またはデータへのアクセスに支援が必要な場合は、Slack の Compass アプリ（上部の検索バーに "Compass" と入力して見つけます）または it-help@gitlab.com へメールで IT に連絡してください。

**最終 Slack 通知**

> `<Firstname>``<LastName>` の GitLab Google Workspace アカウントは、標準のオフボーディングポリシーに従い 90 日後にアーカイブされました。

## 例外

この手順の例外は、[情報セキュリティポリシー例外管理プロセス](/handbook/security/controlled-document-procedure/#exceptions)に従って追跡されます。

## 参照

* [Controlled Document Procedure](/handbook/security/controlled-document-procedure/)
<!--- "controlled document: true"  フラグは存在しましたが、ファイルは CODEOWNERS に含まれていませんでした -->
