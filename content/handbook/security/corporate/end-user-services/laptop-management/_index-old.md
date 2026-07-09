---
title: "GitLab ノートパソコン管理"
build:
    list: never
    render: never
upstream_path: /handbook/security/corporate/end-user-services/laptop-management/_index-old/
upstream_sha: 82fbf0e2626c904de9d6bd562ea4359a0c7e8ab2
translated_at: "2026-07-09T10:14:49+09:00"
translator: claude
stale: false
lastmod: "2026-07-08T14:46:05-04:00"
---

### 新しいノートパソコンと Apple ID の設定

新しいノートパソコンはセキュリティを念頭に置いて設定する必要があります。

@gitlab.com の Apple ID を使用することが必要であり、これは個人の Apple ID とは別のものでなければなりません。
理由には次のようなものが含まれます。

#### チームメンバーの退職直後に続く手順

* 退職したチームメンバー（FTM）はすべての Google グループから削除される
* 退職したチームメンバー（FTM）はノートパソコンへのアクセスがロックされる
* 退職したチームメンバー（FTM）は Okta アカウントにリンクされたすべての GitLab プロビジョニング済みサービスへのアクセスから削除される
* 退職したチームメンバー（FTM）は Okta アカウントにリンクされていないすべての GitLab プロビジョニング済みサービスへのアクセスから削除される
* ノートパソコンに法的保留がない限り、ノートパソコンは安全にワイプされる
* FTM のマネージャーは Gmail と Google カレンダーの代理人として設定される
* FTM のマネージャーはすべての「マイドライブ」Google ドライブファイルへのエディター権限を取得する
* FTM のアカウントは元チームメンバー OU に移動される
* FTM アカウントをグローバルアドレスリストから削除する
* アカウントのサインインクッキー／セッションがすべてクリアされ、アカウントパスワードがランダムな 64 文字のパスワードにリセットされる
* アカウントの復旧メールが null に設定される
* アカウントの復旧電話番号が null に設定される
* FTM の自動応答メールメッセージが設定される

#### 元チームメンバーが退職してから 90 日後に続く手順

* 退職したチームメンバー（FTM）のすべてのエイリアスが削除される
* オーナーとマークされているマイドライブ内のすべての Google ドライブファイルがアーカイブされる
* これらは Offboarded Users Drive Archive に保存される
* 各ユーザーは、`<emailUsername>_google_drive` という形式で独自のフォルダを持つ
* FTM のアカウントが停止される
* FTM のアカウントは NoGSuiteLicense OU に移動される
* Google Workspace ライセンスがアカウントから削除される

#### 以下の通知が Slack 経由で FTM のマネージャーと IT に送信される

**即時 Slack 通知:**

> こんにちは `<Manager Firstname>``<Manager Lastname>` さん、あなたの直属の部下の 1 人 `<Firstname>``<LastName>` さんが GitLab の Google Workspace からデプロビジョニングされたことをお知らせするためにこの通知をお送りしています。当社の標準オフボーディングポリシーに従い、このユーザーの Google ドライブデータのコピーと、その方のメールおよびカレンダーアカウントへの代理アクセスが提供されます。この代理アクセスは 90 日間利用可能で、その後アカウントは閉鎖され、すべてのデータがアーカイブされます。この期限までに、保存しておきたいものは必ずご自身のアカウントにコピーしてください。このデータへのアクセス方法に関する詳細については、このハンドブックページを参照してください（リンクを提供）。
>
> このアカウントが閉鎖される 30 日前にもう 1 回、そして 1 週間前に最終通知をお送りします。このプロセスについてのご質問や、データへのアクセスに関するサポートが必要な場合は、Slack の Compass app（上部の検索バーに「Compass」と入力して見つけます）または it-help@gitlab.com 経由で IT にお問い合わせください。

**30 日 Slack 通知**

> こんにちは `<Manager Firstname>``<Manager Lastname>` さん、あなたの直属の部下の 1 人 `<Firstname>``<LastName>` さんが 60 日前に GitLab の Google Workspace からデプロビジョニングされたことをお知らせするためにこの通知をお送りしています。当社の標準オフボーディングポリシーに従い、その方のメールおよびカレンダーアカウントへの代理アクセスはあと 30 日間継続し、その後アカウントは閉鎖され、すべてのデータがアーカイブされます。この期限までに、保存しておきたいものは必ずご自身のアカウントにコピーしてください。このデータへのアクセス方法に関する詳細については、このハンドブックページを参照してください（リンクを提供）。
>
このアカウントが閉鎖される 1 週間前にもう 1 回通知をお送りします。このプロセスについてのご質問や、データへのアクセスに関するサポートが必要な場合は、Slack の Compass app（上部の検索バーに「Compass」と入力して見つけます）または it-help@gitlab.com 経由で IT にお問い合わせください。

**7 日 Slack 通知**

> こんにちは `<Manager Firstname>``<Manager Lastname>` さん、あなたの直属の部下の 1 人 `<Firstname>``<LastName>` さんが 83 日前に GitLab の Google Workspace からデプロビジョニングされたことをお知らせするためにこの通知をお送りしています。当社の標準オフボーディングポリシーに従い、その方のメールおよびカレンダーアカウントへの代理アクセスはあと 7 日間継続し、その後アカウントは閉鎖され、すべてのデータがアーカイブされます。この期限までに、保存しておきたいものは必ずご自身のアカウントにコピーしてください。このデータへのアクセス方法に関する詳細については、このハンドブックページを参照してください（リンクを提供）。
>
> これは最終通知です。このプロセスについてのご質問や、データへのアクセスに関するサポートが必要な場合は、Slack の Compass app（上部の検索バーに「Compass」と入力して見つけます）または it-help@gitlab.com 経由で IT にお問い合わせください。

**最終 Slack 通知**

> `<Firstname>``<LastName>` さんの GitLab Google Workspace アカウントは、当社の標準オフボーディングポリシーに従い 90 日後にアーカイブされました。

## 例外

この手順に対する例外は、[情報セキュリティポリシー例外管理プロセス](/handbook/security/controlled-document-procedure/#exceptions)に従って追跡されます。

## 参考文献

* [Controlled Document Procedure](/handbook/security/controlled-document-procedure/)
<!--- "controlled document: true"  flag was present but the file was not included in CODEOWNERS -->
