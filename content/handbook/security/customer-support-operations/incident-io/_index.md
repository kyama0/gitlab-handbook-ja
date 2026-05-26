---
title: 'Incident.io'
description: 'Incident.io に関するドキュメント'
upstream_path: /handbook/security/customer-support-operations/incident-io/
upstream_sha: 7405b4b85e7e4a5d61d4eff68e49976463e3dada
translated_at: "2026-05-10T00:00:00Z"
translator: claude
stale: false
lastmod: "2026-05-26T12:05:00-05:00"
---

{{% alert title="技術詳細" color="primary" %}}

- デプロイ種別: `Ad-hoc`

{{% /alert %}}

## Incident.io について

### Incident.io とは

Incident.io の [ホームページ](https://incident.io/) の説明によると:

> incident.io は、オンコールスケジュール、リアルタイムなインシデント対応、統合ステータスページを統一する一体型インシデント管理プラットフォームです。チームが問題をより迅速に解決し、ダウンタイムを削減するのを支援します。

### Incident.io 内のアイテムの管理方法

私たちは現在、Incident.io 内のすべてのアイテムを Incident.io 自体で管理しています。

### Customer Support Operations のステータスページにアクセスする

ステータスページにアクセスするには:

1. https://statuspage.incident.io/cust-support-ops/main のステータスページに移動します
1. 業務メールを入力します
   - 認証には gitlab.com のメールアドレスが必要であることに注意してください
1. メール受信箱を確認します
   - 件名は `Log in to Customer Support Operations` のはずです
1. `Log in to Customer Support Operations status page` ボタンをクリックします

## Customer Support Operations のセットアップ

### コンポーネントカタログ {#components-catalog}

<sup>ソース: [Customer Support Operations components](https://app.incident.io/gitlab/catalog/01JXZ8QTFEYF84RP0V80MG1VAP)</sup>

これらは、インシデントやメンテナンスの対象となりうるアイテムを反映しています。ステータスページ自体に含まれるアイテムだと考えてください。

数が多いため、上記のソースリンクを参照してください。

### グループカタログ {#groups-catalog}

<sup>ソース: [Customer Support Operations groups](https://app.incident.io/gitlab/catalog/01JXZ8X7HVN23T3773PGXB5NNR)</sup>

これらは、コンポーネントをグループ化するアイテムです。

私たちは現在、1 つのグループだけを利用しています。

- `Main`

### ステータスページ

<sup>ソース: [Customer Support Operations Status](https://app.incident.io/gitlab/status-pages/01JXZ9CT4V8HHVJYJDP7XY7B4T/overview/now)</sup>

これは私たちの実際のステータスページです。[グループ](#groups-catalog) (およびそのグループ内の [コンポーネント](#components-catalog)) を使用します。

- 基本設定
  - 基本設定
    - ページタイトル: `Customer Support Operations`
    - ベース URL: https://statuspage.incident.io/cust-support-ops
  - カスタマイズ
    - サポート URL: なし
    - Google Analytics タグ: なし
    - プライバシーポリシー: なし
    - 利用規約: なし
- カスタマーページ
  - カスタマーページ
    - [Customer Support Operations for Main](https://statuspage.incident.io/cust-support-ops/main)
  - 無効化されたサブページ: なし
- ページセットアップ
  - テーマ
    - ダークモード
    - 日付ビュー: カレンダー
- コンポーネント
  - コンポーネントの稼働率: 色付きバーと稼働率パーセント
- カスタムドメイン
  - カスタムドメイン: なし

## 管理者タスク

{{% alert title="警告" color="warning" %}}

- すべてのタスクは、対応するリクエスト Issue (機能リクエスト、管理タスク、バグなど) がある場合にのみ実施してください。存在しない場合は、まず Issue を作成してください (そして標準プロセスに沿って進めてから着手してください)。
- すべてのタスクは Customer Support Operations チームに特化したものであり、他のチームが管理者タスクをどのように行うかを反映するものではありません

{{% /alert %}}

### コンポーネントカタログを管理する

#### コンポーネントカタログを作成する {#creating-a-component-catalog}

私たちは Incident.io 内のすべてのアイテムを Incident.io 自体で管理しているため、システム自体でコンポーネントカタログを作成する必要があります。コンポーネントカタログを作成するには:

1. (Okta 経由で) Incident.io にログインします
1. [Catalog](https://app.incident.io/gitlab/catalog) に移動します
1. [Add a custom type](https://app.incident.io/gitlab/catalog/create) をクリックします
1. `Name` を入力します
1. `Description` を入力します
1. `Categories` の下で `+ Services` をクリックします
1. `Are entries of this type ranked?` チェックボックスがチェックされていることを確認します
1. `Reference entries by name` チェックボックスがチェックされていることを確認します
1. 右下の `Save` をクリックします

#### コンポーネントカタログを編集する {#editing-a-component-catalog}

私たちは Incident.io 内のすべてのアイテムを Incident.io 自体で管理しているため、システム自体でコンポーネントカタログを編集する必要があります。コンポーネントカタログを編集するには:

1. (Okta 経由で) Incident.io にログインします
1. [Catalog](https://app.incident.io/gitlab/catalog) に移動します
1. 編集対象のコンポーネントカタログをクリックします
1. ページ右上の `Edit type` をクリックします
1. 必要な変更を加えます
1. 右下の `Save` をクリックします

#### コンポーネントカタログにコンポーネントを追加する {#adding-a-component-to-a-component-catalog}

私たちは Incident.io 内のすべてのアイテムを Incident.io 自体で管理しているため、システム自体でコンポーネントカタログにコンポーネントを追加する必要があります。コンポーネントカタログにコンポーネントを追加するには:

1. (Okta 経由で) Incident.io にログインします
1. [Catalog](https://app.incident.io/gitlab/catalog) に移動します
1. コンポーネントを追加する対象のコンポーネントカタログをクリックします
1. ページ右上の `Create entry` をクリックします
1. 新しいコンポーネントの `Name` を入力します
1. 右下の `Create` をクリックします

#### コンポーネントカタログを削除する {#deleting-a-component-catalog}

私たちは Incident.io 内のすべてのアイテムを Incident.io 自体で管理しているため、システム自体でコンポーネントカタログを削除する必要があります。コンポーネントカタログを削除するには:

1. (Okta 経由で) Incident.io にログインします
1. [Catalog](https://app.incident.io/gitlab/catalog) に移動します
1. [Add a custom type](https://app.incident.io/gitlab/catalog/create) をクリックします
1. 削除するコンポーネントカタログをクリックします
1. ページ右上の `Delete type` をクリックします
1. ポップアップモーダルのテキストボックスに削除するコンポーネントカタログの名前を入力します
1. ポップアップモーダル右下の `Continue` をクリックします

### グループカタログを管理する

#### グループカタログを作成する

これは [コンポーネントカタログを作成する](#creating-a-component-catalog) と同じプロセスです。

#### グループカタログを編集する

これは [コンポーネントカタログを編集する](#editing-a-component-catalog) と同じプロセスです。

#### グループカタログにグループを追加する {#adding-a-group-to-a-group-catalog}

私たちは Incident.io 内のすべてのアイテムを Incident.io 自体で管理しているため、システム自体でグループカタログにグループを追加する必要があります。グループカタログにグループを追加するには:

1. (Okta 経由で) Incident.io にログインします
1. [Catalog](https://app.incident.io/gitlab/catalog) に移動します
1. グループを追加する対象のコンポーネントカタログをクリックします
1. ページ右上の `Create entry` をクリックします
1. 新しいコンポーネントの `Name` を入力します
1. `Components` エリアにグループのコンポーネントの一覧を入力します
1. `Email domain` に `gitlab.com` を入力します
1. 右下の `Create` をクリックします

#### グループカタログにコンポーネントを追加する {#adding-a-component-to-a-group-catalog}

これは [グループの編集](#editing-a-group) で行います。

#### グループカタログを削除する

これは [コンポーネントカタログを削除する](#deleting-a-component-catalog) と同じプロセスです。

### グループを管理する

#### グループを作成する

これは [グループカタログにグループを追加する](#adding-a-group-to-a-group-catalog) で行います。

#### グループを編集する {#editing-a-group}

私たちは Incident.io 内のすべてのアイテムを Incident.io 自体で管理しているため、システム自体でグループを編集する必要があります。グループを編集するには:

1. (Okta 経由で) Incident.io にログインします
1. [Catalog](https://app.incident.io/gitlab/catalog) に移動します
1. グループが含まれるカタログをクリックします
1. 編集対象のグループを見つけてクリックします
1. 右側サイドバー右上の鉛筆アイコンをクリックします
1. 変更を加えます
1. 右側サイドバー右下の `Save` をクリックします

#### グループを削除する

私たちは Incident.io 内のすべてのアイテムを Incident.io 自体で管理しているため、システム自体でグループを削除する必要があります。グループを削除するには:

1. (Okta 経由で) Incident.io にログインします
1. [Catalog](https://app.incident.io/gitlab/catalog) に移動します
1. グループが含まれるカタログをクリックします
1. 編集対象のグループを見つけてクリックします
1. 右側サイドバー右上のゴミ箱アイコンをクリックします
1. `Confirm` ボタンをクリックして削除を確定します

### コンポーネントを管理する

{{% alert title="警告" color="warning" %}}

- 私たちが使用するすべてのコンポーネントは、[Customer Support Operations System Criticality](/handbook/security/customer-support-operations/criticalities/#customer-support-operations-system-criticality) のアイテムと整合している必要があります。

{{% /alert %}}

#### コンポーネントを作成する

これは [コンポーネントカタログにコンポーネントを追加する](#adding-a-component-to-a-component-catalog) で行います。

#### コンポーネントを編集する

私たちは Incident.io 内のすべてのアイテムを Incident.io 自体で管理しているため、システム自体でコンポーネントを編集する必要があります。コンポーネントを編集するには:

1. (Okta 経由で) Incident.io にログインします
1. [Catalog](https://app.incident.io/gitlab/catalog) に移動します
1. コンポーネントが含まれるカタログをクリックします
1. 編集対象のコンポーネントを見つけてクリックします
1. 右側サイドバー右上の鉛筆アイコンをクリックします
1. 変更を加えます
1. 右側サイドバー右下の `Save` をクリックします

#### コンポーネントを削除する

私たちは Incident.io 内のすべてのアイテムを Incident.io 自体で管理しているため、システム自体でコンポーネントを削除する必要があります。コンポーネントを削除するには:

1. (Okta 経由で) Incident.io にログインします
1. [Catalog](https://app.incident.io/gitlab/catalog) に移動します
1. コンポーネントが含まれるカタログをクリックします
1. 編集対象のコンポーネントを見つけてクリックします
1. 右側サイドバー右上のゴミ箱アイコンをクリックします
1. `Confirm` ボタンをクリックして削除を確定します

### ステータスページを管理する

#### ステータスページを作成する

私たちは Incident.io 内のすべてのアイテムを Incident.io 自体で管理しているため、システム自体でステータスページを作成する必要があります。ステータスページを作成するには:

1. (Okta 経由で) Incident.io にログインします
1. [Status pages](https://app.incident.io/gitlab/status-pages) に移動します
1. [Create customer page](https://app.incident.io/gitlab/status-pages/customer/create) をクリックします
1. `Page title` を入力します
1. (自動生成のものを変更したい場合は) `Status page URL` を入力します
1. `Customer pages` の下で
   - `Use an existing catalog type` をクリックします
   - `Which catalog type defines the customers you'd like to create?` を使用するグループカタログに設定します
   - `Which catalog attribute represents your components?` を `Components` に設定します
   - `Which catalog attribute represents allowed email domains?` を `Email domains` に設定します
1. `Pages` の下で
   - `Page name` を設定します
   - `URL` を設定します
1. `Page setup` の下で
   - `Theming` を `Dark mode` に設定します
   - (希望する場合) `Company logo` を選択します
   - (希望する場合) `Favicon` を選択します
1. ページ右下の `Create status page` をクリックします

#### ステータスページを編集する

私たちは Incident.io 内のすべてのアイテムを Incident.io 自体で管理しているため、システム自体でステータスページを編集する必要があります。ステータスページを編集するには:

1. (Okta 経由で) Incident.io にログインします
1. [Status pages](https://app.incident.io/gitlab/status-pages) に移動します
1. 編集対象のステータスページの名前をクリックします
1. `Settings` タブをクリックします
1. 変更が必要なセクションに対して必要な変更を加えます (`Save` をクリックして変更を反映します)

#### ステータスページにコンポーネントを追加する

これは [グループカタログにコンポーネントを追加する](#adding-a-component-to-a-group-catalog) で行います。

#### ステータスページを削除する

私たちは Incident.io 内のすべてのアイテムを Incident.io 自体で管理しているため、システム自体でステータスページを削除する必要があります。ステータスページを削除するには:

1. (Okta 経由で) Incident.io にログインします
1. [Status pages](https://app.incident.io/gitlab/status-pages) に移動します
1. 編集対象のステータスページの名前をクリックします
1. `Settings` タブをクリックします
1. ページの一番下までスクロールして `Delete status page` をクリックします
1. 削除するステータスページの名前を入力します
1. `Delete status page` をクリックします

### インシデントを管理する

#### インシデントを作成する

インシデントを作成するには:

1. (Okta 経由で) Incident.io にログインします
1. [Status pages](https://app.incident.io/gitlab/status-pages) に移動します
1. インシデントを作成したいステータスページをクリックします
1. 右上の `Publish incident` をクリックします
1. 意味のある `Name` を入力します
1. インシデントの `Status` を設定します
   - Investigating: インシデントを報告
     - 通常はこれを開始点として使います
   - Identified: 問題が特定され、修正が行われている
   - Monitoring: 修正が実装され、状況を監視している
   - Resolved: すべて解決
1. インシデントの意味のある `Message` を設定します
   - ここにはインシデント Issue へのリンクを含めるべきです
1. `Affected components` への影響レベルを設定します (必要な値はインシデントの影響度によります)
   - No impact: インシデントはこのコンポーネントに影響しない
   - Degraded performance: コンポーネントは動作しているが標準的なパフォーマンス水準より低い
   - Partial outage: コンポーネントの大部分が動作していない
   - Full outage: コンポーネントが完全停止
1. `Review incident` をクリックします
1. すべての情報の正確性を確認します
1. `Publish incident` をクリックします

#### インシデントを更新する

インシデントを更新するには:

1. (Okta 経由で) Incident.io にログインします
1. [Status pages](https://app.incident.io/gitlab/status-pages) に移動します
1. インシデントが掲載されているステータスページをクリックします
1. 対象のインシデントをクリックします
1. 右上のステータスバー (現在のステータスを表示) をクリックします
1. 新しい `Status` を選択します
   - Identified: 問題が特定され、修正が行われている
   - Monitoring: 修正が実装され、状況を監視している
   - Resolved: すべて解決
1. 意味のあるメッセージを入力します
1. `Review update` をクリックします
1. すべての情報の正確性を確認します
1. `Publish update` をクリックします

### メンテナンスを管理する

#### メンテナンスイベントを作成する

メンテナンスイベントを作成するには:

1. (Okta 経由で) Incident.io にログインします
1. [Status pages](https://app.incident.io/gitlab/status-pages) に移動します
1. インシデントを作成したいステータスページをクリックします
1. `Maintenance` をクリックします
1. ページ右上の `Schedule maintenance` をクリックします
1. 意味のある `Name` を入力します
1. `Automatically update status` がチェックされていることを確認します
1. `Impact window` を設定します (ローカルタイムが使用される点に注意してください)
1. 意味のある `Message` を設定します
1. `Affected components` への影響レベルを設定します
   - No impact: メンテナンスはこのコンポーネントに影響しない
   - Under maintenance: メンテナンスはこのコンポーネントに影響する
1. `Review` をクリックします
1. すべての情報の正確性を確認します
1. `Publish maintenance` をクリックします

#### メンテナンスイベントを更新する

メンテナンスイベントを更新するには:

1. (Okta 経由で) Incident.io にログインします
1. [Status pages](https://app.incident.io/gitlab/status-pages) に移動します
1. インシデントを作成したいステータスページをクリックします
1. `Maintenance` をクリックします
1. 対象のメンテナンスをクリックします
1. 右上のステータスバー (現在のステータスを表示) をクリックします
1. 新しい `Status` を選択します
1. 意味のあるメッセージを入力します
1. `Review update` をクリックします
1. すべての情報の正確性を確認します
1. `Publish update` をクリックします
