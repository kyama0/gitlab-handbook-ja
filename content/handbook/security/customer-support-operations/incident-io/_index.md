---
title: 'Incident.io'
description: 'Incident.io に関するドキュメント'
date: 2026-02-13
upstream_path: /handbook/security/customer-support-operations/incident-io/
upstream_sha: "154fb2bd6436508aa2d90583cc235d5fe28b1705"
lastmod: 2026-05-26T12:05:00-05:00
translated_at: "2026-05-27T00:00:00Z"
translator: claude
stale: false
---

{{% alert title="Technical Details" color="primary" %}}

- デプロイタイプ: `Ad-hoc`

{{% /alert %}}

## Incident.io を理解する

### Incident.io とは

Incident.io の[ホームページ](https://incident.io/)の説明より:

> incident.io は、オンコールスケジューリング、リアルタイムのインシデント対応、統合されたステータスページを 1 つにまとめたオールインワンのインシデント管理プラットフォームです。チームが問題をより速く解決し、ダウンタイムを削減するのに役立ちます。

### Incident.io 内の項目を管理する方法

私たちは現在、すべての Incident.io 項目を Incident.io 内で管理しています。

### Customer Support Operations のステータスページへのアクセス

ステータスページにアクセスするには:

1. ステータスページ https://statuspage.incident.io/cust-support-ops/main に移動します
1. 業務用メールアドレスを入力します
   - 認証には gitlab.com のメールアドレスを使用する必要があることに注意してください
1. メールの受信箱を確認します
   - 件名は `Log in to Customer Support Operations` になっているはずです
1. `Log in to Customer Support Operations status page` ボタンをクリックします

## Customer Support Operations のセットアップ

### コンポーネントカタログ

<sup>ソース: [Customer Support Operations components](https://app.incident.io/gitlab/catalog/01JXZ8QTFEYF84RP0V80MG1VAP)</sup>

これらは、インシデントやメンテナンスを発生させることができる項目を反映しています。ステータスページ自体に含まれる項目だと考えてください。

これに含まれる項目は膨大なリストになるため、上記のソースリンクを参照してください。

### グループカタログ

<sup>ソース: [Customer Support Operations groups](https://app.incident.io/gitlab/catalog/01JXZ8X7HVN23T3773PGXB5NNR)</sup>

これらは、コンポーネントをまとめてグループ化する項目です。

私たちは現在、1 つのグループのみを使用しています:

- `Main`

### ステータスページ

<sup>ソース: [Customer Support Operations Status](https://app.incident.io/gitlab/status-pages/01JXZ9CT4V8HHVJYJDP7XY7B4T/overview/now)</sup>

これが私たちの実際のステータスページです。[グループ](#groups-catalog)（およびそのグループ内の[コンポーネント](#components-catalog)）を使用しています。

- Basic settings
  - Basic settings
    - Page title: `Customer Support Operations`
    - Base URL: https://statuspage.incident.io/cust-support-ops
  - Customization
    - Support URL: none
    - Google Analytics tag: none
    - Privacy policy: none
    - Terms of service: none
- Customer pages
  - Customer pages
    - [Customer Support Operations for Main](https://statuspage.incident.io/cust-support-ops/main)
  - Disabled sub-pages: none
- Page setup
  - Theming
    - Dark mode
    - Date view: Calendar
- Components
  - Component uptimes: Coloured bars and uptime percentage
- Custom domain
  - Custom domain: none

## 管理者タスク

{{% alert title="Warning" color="warning" %}}

- すべてのタスクは、対応するリクエスト Issue（Feature Request、Administrative、Bug など）が存在する場合にのみ実行してください。存在しない場合は、まず作成してください（そして作業を始める前に標準プロセスを通してください）。
- すべてのタスクは Customer Support Operations チーム向けに特化したものであり、他のチームがどのように管理者タスクを実行するかを反映するものではありません

{{% /alert %}}

### コンポーネントカタログの管理

#### コンポーネントカタログの作成

すべての Incident.io 項目を Incident.io 内で管理しているため、システム自体でコンポーネントカタログを作成する必要があります。コンポーネントカタログを作成するには:

1. （Okta 経由で）Incident.io にログインします
1. [Catalog](https://app.incident.io/gitlab/catalog) に移動します
1. [Add a custom type](https://app.incident.io/gitlab/catalog/create) をクリックします
1. `Name` を入力します
1. `Description` を入力します
1. `Categories` の下で `+ Services` をクリックします
1. `Are entries of this type ranked?` のチェックボックスがオンになっていることを確認します
1. `Reference entries by name` のチェックボックスがオンになっていることを確認します
1. 右下の `Save` をクリックします

#### コンポーネントカタログの編集

すべての Incident.io 項目を Incident.io 内で管理しているため、システム自体でコンポーネントカタログを編集する必要があります。コンポーネントカタログを編集するには:

1. （Okta 経由で）Incident.io にログインします
1. [Catalog](https://app.incident.io/gitlab/catalog) に移動します
1. 編集するコンポーネントカタログをクリックします
1. ページ右上の `Edit type` をクリックします
1. 必要な変更を行います
1. 右下の `Save` をクリックします

#### コンポーネントカタログへのコンポーネントの追加

すべての Incident.io 項目を Incident.io 内で管理しているため、システム自体でコンポーネントカタログにコンポーネントを追加する必要があります。コンポーネントカタログにコンポーネントを追加するには:

1. （Okta 経由で）Incident.io にログインします
1. [Catalog](https://app.incident.io/gitlab/catalog) に移動します
1. コンポーネントを追加するコンポーネントカタログをクリックします
1. ページ右上の `Create entry` をクリックします
1. 新しいコンポーネントの `Name` を入力します
1. 右下の `Create` をクリックします

#### コンポーネントカタログの削除

すべての Incident.io 項目を Incident.io 内で管理しているため、システム自体でコンポーネントカタログを削除する必要があります。コンポーネントカタログを削除するには:

1. （Okta 経由で）Incident.io にログインします
1. [Catalog](https://app.incident.io/gitlab/catalog) に移動します
1. [Add a custom type](https://app.incident.io/gitlab/catalog/create) をクリックします
1. 削除するコンポーネントカタログをクリックします
1. ページ右上の `Delete type` をクリックします
1. ポップアップモーダルのテキストボックスに、削除するコンポーネントカタログの名前を入力します
1. ポップアップモーダル右下の `Continue` をクリックします

### グループカタログの管理

#### グループカタログの作成

これは[コンポーネントカタログの作成](#creating-a-component-catalog)と同じプロセスです。

#### グループカタログの編集

これは[コンポーネントカタログの編集](#editing-a-component-catalog)と同じプロセスです。

#### グループカタログへのグループの追加

すべての Incident.io 項目を Incident.io 内で管理しているため、システム自体でグループカタログにグループを追加する必要があります。グループカタログにグループを追加するには:

1. （Okta 経由で）Incident.io にログインします
1. [Catalog](https://app.incident.io/gitlab/catalog) に移動します
1. グループを追加するコンポーネントカタログをクリックします
1. ページ右上の `Create entry` をクリックします
1. 新しいコンポーネントの `Name` を入力します
1. `Components` エリアにグループのコンポーネントのリストを入力します
1. `Email domain` に `gitlab.com` を入力します
1. 右下の `Create` をクリックします

#### グループカタログへのコンポーネントの追加

これは[グループの編集](#editing-a-group)で行います。

#### グループカタログの削除

これは[コンポーネントカタログの削除](#deleting-a-component-catalog)と同じプロセスです。

### グループの管理

#### グループの作成

これは[グループカタログへのグループの追加](#adding-a-group-to-a-group-catalog)で行います。

#### グループの編集

すべての Incident.io 項目を Incident.io 内で管理しているため、システム自体でグループを編集する必要があります。グループを編集するには:

1. （Okta 経由で）Incident.io にログインします
1. [Catalog](https://app.incident.io/gitlab/catalog) に移動します
1. グループが含まれているカタログをクリックします
1. 編集対象のグループを見つけてクリックします
1. 右側サイドバーの右上にある鉛筆アイコンをクリックします
1. 変更を行います
1. 右側サイドバーの右下にある `Save` をクリックします

#### グループの削除

すべての Incident.io 項目を Incident.io 内で管理しているため、システム自体でグループを削除する必要があります。グループを削除するには:

1. （Okta 経由で）Incident.io にログインします
1. [Catalog](https://app.incident.io/gitlab/catalog) に移動します
1. グループが含まれているカタログをクリックします
1. 編集対象のグループを見つけてクリックします
1. 右側サイドバーの右上にあるゴミ箱アイコンをクリックします
1. `Confirm` ボタンをクリックして削除を確定します

### コンポーネントの管理

{{% alert title="Warning" color="warning" %}}

- 私たちが使用するすべてのコンポーネントは、[Customer Support Operations System Criticality](/handbook/security/customer-support-operations/criticalities/#customer-support-operations-system-criticality) の項目と一致している必要があります。

{{% /alert %}}

#### コンポーネントの作成

これは[コンポーネントカタログへのコンポーネントの追加](#adding-a-component-to-a-component-catalog)で行います。

#### コンポーネントの編集

すべての Incident.io 項目を Incident.io 内で管理しているため、システム自体でコンポーネントを編集する必要があります。コンポーネントを編集するには:

1. （Okta 経由で）Incident.io にログインします
1. [Catalog](https://app.incident.io/gitlab/catalog) に移動します
1. コンポーネントが含まれているカタログをクリックします
1. 編集対象のコンポーネントを見つけてクリックします
1. 右側サイドバーの右上にある鉛筆アイコンをクリックします
1. 変更を行います
1. 右側サイドバーの右下にある `Save` をクリックします

#### コンポーネントの削除

すべての Incident.io 項目を Incident.io 内で管理しているため、システム自体でコンポーネントを削除する必要があります。コンポーネントを削除するには:

1. （Okta 経由で）Incident.io にログインします
1. [Catalog](https://app.incident.io/gitlab/catalog) に移動します
1. コンポーネントが含まれているカタログをクリックします
1. 編集対象のコンポーネントを見つけてクリックします
1. 右側サイドバーの右上にあるゴミ箱アイコンをクリックします
1. `Confirm` ボタンをクリックして削除を確定します

### ステータスページの管理

#### ステータスページの作成

すべての Incident.io 項目を Incident.io 内で管理しているため、システム自体でステータスページを作成する必要があります。ステータスページを作成するには:

1. （Okta 経由で）Incident.io にログインします
1. [Status pages](https://app.incident.io/gitlab/status-pages) に移動します
1. [Create customer page](https://app.incident.io/gitlab/status-pages/customer/create) をクリックします
1. `Page title` を入力します
1. `Status page URL` を入力します（自動生成されたものを変更したい場合）
1. `Customer pages` の下で
   - `Use an existing catalog type` をクリックします
   - `Which catalog type defines the customers you'd like to create?` を、使用したいグループカタログに設定します
   - `Which catalog attribute represents your components?` を `Components` に設定します
   - `Which catalog attribute represents allowed email domains?` を `Email domains` に設定します
1. `Pages` の下で
   - `Page name` を設定します
   - `URL` を設定します
1. `Page setup` の下で
   - `Theming` を `Dark mode` に設定します
   - `Company logo` を選択します（必要な場合）
   - `Favicon` を選択します（必要な場合）
1. ページ右下の `Create status page` をクリックします

#### ステータスページの編集

すべての Incident.io 項目を Incident.io 内で管理しているため、システム自体でステータスページを編集する必要があります。ステータスページを編集するには:

1. （Okta 経由で）Incident.io にログインします
1. [Status pages](https://app.incident.io/gitlab/status-pages) に移動します
1. 編集するステータスページの名前をクリックします
1. `Settings` タブをクリックします
1. 変更が必要なセクションに対して必要な変更を行います（そして変更を反映するために `Save` をクリックします）

#### ステータスページへのコンポーネントの追加

これは[グループカタログへのコンポーネントの追加](#adding-a-component-to-a-group-catalog)で行います。

#### ステータスページの削除

すべての Incident.io 項目を Incident.io 内で管理しているため、システム自体でステータスページを削除する必要があります。ステータスページを削除するには:

1. （Okta 経由で）Incident.io にログインします
1. [Status pages](https://app.incident.io/gitlab/status-pages) に移動します
1. 編集するステータスページの名前をクリックします
1. `Settings` タブをクリックします
1. ページの一番下までスクロールして `Delete status page` をクリックします
1. ステータスページの名前を入力します
1. `Delete status page` をクリックします

### インシデントの管理

#### インシデントの作成

インシデントを作成するには:

1. （Okta 経由で）Incident.io にログインします
1. [Status pages](https://app.incident.io/gitlab/status-pages) に移動します
1. インシデントを発生させたいステータスページをクリックします
1. 右上の `Publish incident` をクリックします
1. わかりやすい `Name` を記入します
1. インシデントの `Status` を設定します
   - Investigating: インシデントを報告する
     - これは通常、最初の出発点として使用するものです
   - Identified: 問題が特定され、修正が行われている
   - Monitoring: 修正が実装され、状況を監視している
   - Resolved: すべて問題ない
1. インシデントにわかりやすい `Message` を設定します
   - ここにインシデント Issue へのリンクを含めるべきです
1. `Affected components`（影響を受けるコンポーネント）に対する影響レベルを設定します（必要な値はインシデントの影響によって異なります）
   - No impact: インシデントはこのコンポーネントに影響を与えない
   - Degraded performance: コンポーネントは動作しているが、標準より低いパフォーマンスレベルである
   - Partial outage: コンポーネントの大部分が動作していない
   - Full outage: コンポーネントが完全にダウンしている
1. `Review incident` をクリックします
1. すべての情報が正確かどうか確認します
1. `Publish incident` をクリックします

#### インシデントの更新

インシデントを更新するには:

1. （Okta 経由で）Incident.io にログインします
1. [Status pages](https://app.incident.io/gitlab/status-pages) に移動します
1. インシデントがあるステータスページをクリックします
1. 該当するインシデントをクリックします
1. 右上のステータスバー（現在のステータスが表示されている）をクリックします
1. 新しい `Status` を選択します
   - Identified: 問題が特定され、修正が行われている
   - Monitoring: 修正が実装され、状況を監視している
   - Resolved: すべて問題ない
1. わかりやすいメッセージを入力します
1. `Review update` をクリックします
1. すべての情報が正確かどうか確認します
1. `Publish update` をクリックします

### メンテナンスの管理

#### メンテナンスイベントの作成

メンテナンスイベントを作成するには:

1. （Okta 経由で）Incident.io にログインします
1. [Status pages](https://app.incident.io/gitlab/status-pages) に移動します
1. インシデントを発生させたいステータスページをクリックします
1. `Maintenance` をクリックします
1. ページ右上の `Schedule maintenance` をクリックします
1. わかりやすい `Name` を記入します
1. `Automatically update status` がオンになっていることを確認します
1. `Impact window` を設定します（ローカルタイムを使用していることに注意してください）
1. わかりやすい `Message` を設定します
1. `Affected components`（影響を受けるコンポーネント）に対する影響レベルを設定します
   - No impact: メンテナンスはこのコンポーネントに影響を与えない
   - Under maintenance: メンテナンスはこのコンポーネントに影響を与える
1. `Review` をクリックします
1. すべての情報が正確かどうか確認します
1. `Publish maintenance` をクリックします

#### メンテナンスイベントの更新

メンテナンスイベントを更新するには:

1. （Okta 経由で）Incident.io にログインします
1. [Status pages](https://app.incident.io/gitlab/status-pages) に移動します
1. インシデントを発生させたいステータスページをクリックします
1. `Maintenance` をクリックします
1. 該当するメンテナンスをクリックします
1. 右上のステータスバー（現在のステータスが表示されている）をクリックします
1. 新しい `Status` を選択します
1. わかりやすいメッセージを入力します
1. `Review update` をクリックします
1. すべての情報が正確かどうか確認します
1. `Publish update` をクリックします
