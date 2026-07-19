---
title: 'Incident.io'
description: 'Incident.io に関するドキュメント'
upstream_path: "/handbook/eta/css/incident-io/"
upstream_sha: "1312dadbdf7381446077faefcfae17ba323692b6"
lastmod: "2026-07-14T15:22:25-05:00"
translated_at: "2026-07-19T08:01:00+09:00"
translator: codex
stale: false
---

{{% alert title="技術的な詳細" color="primary" %}}

- デプロイタイプ: `Ad-hoc`

{{% /alert %}}

## Incident.io を理解する

### Incident.io とは

Incident.io の[ホームページ](https://incident.io/)の説明によると:

> incident.io は、オンコールスケジューリング、リアルタイムのインシデント対応、統合されたステータスページを統合するオールインワンのインシデント管理プラットフォームです。チームが問題をより迅速に解決し、ダウンタイムを削減できるよう支援します。

### Incident.io の項目の管理方法

現在、すべての Incident.io 項目を Incident.io 自体で管理しています。

### Customer Support Systems ステータスページへのアクセス

ステータスページにアクセスするには:

1. https://statuspage.incident.io/cust-support-ops/main のステータスページに移動します
1. 仕事用メールアドレスを入力します
   - 認証には gitlab.com のメールアドレスを使用する必要があります
1. メールの受信トレイを確認します
   - 件名は `Log in to Customer Support Operations` です
1. `Log in to Customer Support Operations status page` ボタンをクリックします

## Customer Support Systems の設定

### コンポーネントカタログ

<sup>ソース: [Customer Support Operations コンポーネント](https://app.incident.io/gitlab/catalog/01JXZ8QTFEYF84RP0V80MG1VAP)</sup>

これらは、インシデントまたはメンテナンスが発生しうる項目を表します。ステータスページ自体に含まれる項目と考えてください。

このカタログには多数の項目が含まれているため、上記のソースリンクを参照してください。

### グループカタログ

<sup>ソース: [Customer Support Operations グループ](https://app.incident.io/gitlab/catalog/01JXZ8X7HVN23T3773PGXB5NNR)</sup>

これらはコンポーネントをグループ化する項目です。

現在使用しているグループは 1 つだけです:

- `Main`

### ステータスページ

<sup>ソース: [Customer Support Operations ステータス](https://app.incident.io/gitlab/status-pages/01JXZ9CT4V8HHVJYJDP7XY7B4T/overview/now)</sup>

これは実際のステータスページです。[グループ](#groups-catalog)（および当該グループ内の[コンポーネント](#components-catalog)）を使用します。

- 基本設定
  - 基本設定
    - ページタイトル: `Customer Support Operations`
    - ベース URL: https://statuspage.incident.io/cust-support-ops
  - カスタマイズ
    - サポート URL: なし
    - Google Analytics タグ: なし
    - プライバシーポリシー: なし
    - 利用規約: なし
- 顧客ページ
  - 顧客ページ
    - [Main 向け Customer Support Operations](https://statuspage.incident.io/cust-support-ops/main)
  - 無効なサブページ: なし
- ページ設定
  - テーマ設定
    - ダークモード
    - 日付表示: カレンダー
- コンポーネント
  - コンポーネント稼働時間: 色付きバーと稼働時間の割合
- カスタムドメイン
  - カスタムドメイン: なし

## 管理者タスク

{{% alert title="警告" color="warning" %}}

- すべてのタスクは、対応するリクエスト Issue（機能リクエスト、管理、バグなど）がある場合にのみ実行してください。存在しない場合は、まず作成し、作業を開始する前に標準プロセスを経る必要があります。
- すべてのタスクは Customer Support Systems チームに固有のものであり、他チームが管理者タスクを実行する方法を反映するものではありません

{{% /alert %}}

### コンポーネントカタログを管理する

#### コンポーネントカタログを作成する

すべての Incident.io 項目を Incident.io 自体で管理しているため、システム自体でコンポーネントカタログを作成する必要があります。コンポーネントカタログを作成するには:

1. Incident.io にログインします（Okta 経由）
1. [Catalog](https://app.incident.io/gitlab/catalog)に移動します
1. [Add a custom type](https://app.incident.io/gitlab/catalog/create)をクリックします
1. `Name` を入力します
1. `Description` を入力します
1. `Categories` で `+ Services` をクリックします
1. `Are entries of this type ranked?` チェックボックスがオンであることを確認します
1. `Reference entries by name` チェックボックスがオンであることを確認します
1. 右下の `Save` をクリックします

#### コンポーネントカタログを編集する

すべての Incident.io 項目を Incident.io 自体で管理しているため、システム自体でコンポーネントカタログを編集する必要があります。コンポーネントカタログを編集するには:

1. Incident.io にログインします（Okta 経由）
1. [Catalog](https://app.incident.io/gitlab/catalog)に移動します
1. 編集するコンポーネントカタログをクリックします
1. ページ右上の `Edit type` をクリックします
1. 必要な変更を行います
1. 右下の `Save` をクリックします

#### コンポーネントカタログにコンポーネントを追加する

すべての Incident.io 項目を Incident.io 自体で管理しているため、システム自体でコンポーネントカタログにコンポーネントを追加する必要があります。コンポーネントカタログにコンポーネントを追加するには:

1. Incident.io にログインします（Okta 経由）
1. [Catalog](https://app.incident.io/gitlab/catalog)に移動します
1. コンポーネントを追加するコンポーネントカタログをクリックします
1. ページ右上の `Create entry` をクリックします
1. 新しいコンポーネントの `Name` を入力します
1. 右下の `Create` をクリックします

#### コンポーネントカタログを削除する

すべての Incident.io 項目を Incident.io 自体で管理しているため、システム自体でコンポーネントカタログを削除する必要があります。コンポーネントカタログを削除するには:

1. Incident.io にログインします（Okta 経由）
1. [Catalog](https://app.incident.io/gitlab/catalog)に移動します
1. [Add a custom type](https://app.incident.io/gitlab/catalog/create)をクリックします
1. 削除するコンポーネントカタログをクリックします
1. ページ右上の `Delete type` をクリックします
1. ポップアップモーダルのテキストボックスに削除するコンポーネントカタログの名前を入力します
1. ポップアップモーダル右下の `Continue` をクリックします

### グループカタログを管理する

#### グループカタログを作成する

これは[コンポーネントカタログを作成する](#creating-a-component-catalog)場合と同じプロセスです。

#### グループカタログを編集する

これは[コンポーネントカタログを編集する](#editing-a-component-catalog)場合と同じプロセスです。

#### グループカタログにグループを追加する

すべての Incident.io 項目を Incident.io 自体で管理しているため、システム自体でグループカタログにグループを追加する必要があります。グループカタログにグループを追加するには:

1. Incident.io にログインします（Okta 経由）
1. [Catalog](https://app.incident.io/gitlab/catalog)に移動します
1. グループを追加するコンポーネントカタログをクリックします
1. ページ右上の `Create entry` をクリックします
1. 新しいコンポーネントの `Name` を入力します
1. `Components` 領域でグループのコンポーネントリストを入力します
1. `gitlab.com` の `Email domain` を入力します
1. 右下の `Create` をクリックします

#### グループカタログにコンポーネントを追加する

これは[グループを編集する](#editing-a-group)場合に実行します。

#### グループカタログを削除する

これは[コンポーネントカタログを削除する](#deleting-a-component-catalog)場合と同じプロセスです。

### グループを管理する

#### グループを作成する

これは[グループカタログにグループを追加する](#adding-a-group-to-a-group-catalog)場合に実行します。

#### グループを編集する

すべての Incident.io 項目を Incident.io 自体で管理しているため、システム自体でグループを編集する必要があります。グループを編集するには:

1. Incident.io にログインします（Okta 経由）
1. [Catalog](https://app.incident.io/gitlab/catalog)に移動します
1. グループが属するカタログをクリックします
1. 編集する対象グループを見つけてクリックします
1. 右側サイドバーの右上にある鉛筆アイコンをクリックします
1. 変更を行います
1. 右側サイドバーの右下にある `Save` をクリックします

#### グループを削除する

すべての Incident.io 項目を Incident.io 自体で管理しているため、システム自体でグループを削除する必要があります。グループを削除するには:

1. Incident.io にログインします（Okta 経由）
1. [Catalog](https://app.incident.io/gitlab/catalog)に移動します
1. グループが属するカタログをクリックします
1. 編集する対象グループを見つけてクリックします
1. 右側サイドバーの右上にあるゴミ箱アイコンをクリックします
1. 削除を確認するために `Confirm` ボタンをクリックします

### コンポーネントを管理する

{{% alert title="警告" color="warning" %}}

- 使用するすべてのコンポーネントは、[Customer Support Systems Criticality](/handbook/eta/css/criticalities/#customer-support-systems-system-criticality)の項目に従う必要があります。

{{% /alert %}}

#### コンポーネントを作成する

これは[コンポーネントカタログにコンポーネントを追加する](#adding-a-component-to-a-component-catalog)場合に実行します。

#### コンポーネントを編集する

すべての Incident.io 項目を Incident.io 自体で管理しているため、システム自体でコンポーネントを編集する必要があります。コンポーネントを編集するには:

1. Incident.io にログインします（Okta 経由）
1. [Catalog](https://app.incident.io/gitlab/catalog)に移動します
1. コンポーネントが属するカタログをクリックします
1. 編集する対象コンポーネントを見つけてクリックします
1. 右側サイドバーの右上にある鉛筆アイコンをクリックします
1. 変更を行います
1. 右側サイドバーの右下にある `Save` をクリックします

#### コンポーネントを削除する

すべての Incident.io 項目を Incident.io 自体で管理しているため、システム自体でコンポーネントを削除する必要があります。コンポーネントを削除するには:

1. Incident.io にログインします（Okta 経由）
1. [Catalog](https://app.incident.io/gitlab/catalog)に移動します
1. コンポーネントが属するカタログをクリックします
1. 編集する対象コンポーネントを見つけてクリックします
1. 右側サイドバーの右上にあるゴミ箱アイコンをクリックします
1. 削除を確認するために `Confirm` ボタンをクリックします

### ステータスページを管理する

#### ステータスページを作成する

すべての Incident.io 項目を Incident.io 自体で管理しているため、システム自体でステータスページを作成する必要があります。ステータスページを作成するには:

1. Incident.io にログインします（Okta 経由）
1. [Status pages](https://app.incident.io/gitlab/status-pages)に移動します
1. [Create customer page](https://app.incident.io/gitlab/status-pages/customer/create)をクリックします
1. `Page title` を入力します
1. `Status page URL` を入力します（自動生成された URL を変更する場合）
1. `Customer pages` で次を実行します
   - `Use an existing catalog type` をクリックします
   - `Which catalog type defines the customers you'd like to create?` を、使用するグループカタログに設定します
   - `Which catalog attribute represents your components?` を `Components` に設定します
   - `Which catalog attribute represents allowed email domains?` を `Email domains` に設定します
1. `Pages` で次を実行します
   - `Page name` を設定します
   - `URL` を設定します
1. `Page setup` で次を実行します
   - `Theming` を `Dark mode` に設定します
   - `Company logo` を選択します（必要な場合）
   - `Favicon` を選択します（必要な場合）
1. ページ右下の `Create status page` をクリックします

#### ステータスページを編集する

すべての Incident.io 項目を Incident.io 自体で管理しているため、システム自体でステータスページを編集する必要があります。ステータスページを編集するには:

1. Incident.io にログインします（Okta 経由）
1. [Status pages](https://app.incident.io/gitlab/status-pages)に移動します
1. 編集するステータスページの名前をクリックします
1. `Settings` タブをクリックします
1. 変更するセクションに必要な変更を行います（変更を適用するには `Save` をクリックします）

#### ステータスページにコンポーネントを追加する

これは[グループカタログにコンポーネントを追加する](#adding-a-component-to-a-group-catalog)場合に実行します。

#### ステータスページを削除する

すべての Incident.io 項目を Incident.io 自体で管理しているため、システム自体でステータスページを削除する必要があります。ステータスページを削除するには:

1. Incident.io にログインします（Okta 経由）
1. [Status pages](https://app.incident.io/gitlab/status-pages)に移動します
1. 編集するステータスページの名前をクリックします
1. `Settings` タブをクリックします
1. ページ下部までスクロールして `Delete status page` をクリックします
1. ステータスページの名前を入力します
1. `Delete status page` をクリックします

### インシデントを管理する

#### インシデントを作成する

インシデントを作成するには:

1. Incident.io にログインします（Okta 経由）
1. [Status pages](https://app.incident.io/gitlab/status-pages)に移動します
1. インシデントを作成するステータスページをクリックします
1. 右上の `Publish incident` をクリックします
1. 意味のある `Name` を入力します
1. インシデントの `Status` を設定します
   - Investigating: インシデントを報告します
     - 通常はこれを開始点として使用します
   - Identified: 問題が特定され、修正を実施しています
   - Monitoring: 修正が実装され、状況を監視しています
   - Resolved: すべて問題ありません
1. インシデントに意味のある `Message` を設定します
   - ここにはインシデント Issue へのリンクを含める必要があります
1. `Affected components` への影響レベルを設定します（必要な値はインシデントの影響によって異なります）
   - No impact: このインシデントはこのコンポーネントに影響しません
   - Degraded performance: コンポーネントは動作していますが、標準より低いパフォーマンスレベルです
   - Partial outage: コンポーネントの重要な部分が動作していません
   - Full outage: コンポーネントは完全に停止しています
1. `Review incident` をクリックします
1. すべての情報が正確か確認します
1. `Publish incident` をクリックします

#### インシデントを更新する

インシデントを更新するには:

1. Incident.io にログインします（Okta 経由）
1. [Status pages](https://app.incident.io/gitlab/status-pages)に移動します
1. インシデントがあるステータスページをクリックします
1. 対象のインシデントをクリックします
1. 右上のステータスバー（現在のステータスを示します）をクリックします
1. 新しい `Status` を選択します
   - Identified: 問題が特定され、修正を実施しています
   - Monitoring: 修正が実装され、状況を監視しています
   - Resolved: すべて問題ありません
1. 意味のあるメッセージを入力します
1. `Review update` をクリックします
1. すべての情報が正確か確認します
1. `Publish update` をクリックします

### メンテナンスを管理する

#### メンテナンスイベントを作成する

メンテナンスイベントを作成するには:

1. Incident.io にログインします（Okta 経由）
1. [Status pages](https://app.incident.io/gitlab/status-pages)に移動します
1. インシデントを作成するステータスページをクリックします
1. `Maintenance` をクリックします
1. ページ右上の `Schedule maintenance` をクリックします
1. 意味のある `Name` を入力します
1. `Automatically update status` がオンであることを確認します
1. `Impact window` を設定します（ローカル時刻を使用していることに注意してください）
1. 意味のある `Message` を設定します
1. `Affected components` への影響レベルを設定します
   - No impact: メンテナンスはこのコンポーネントに影響しません
   - Under maintenance: メンテナンスはこのコンポーネントに影響します
1. `Review` をクリックします
1. すべての情報が正確か確認します
1. `Publish maintenance` をクリックします

#### メンテナンスイベントを更新する

メンテナンスイベントを更新するには:

1. Incident.io にログインします（Okta 経由）
1. [Status pages](https://app.incident.io/gitlab/status-pages)に移動します
1. インシデントを作成するステータスページをクリックします
1. `Maintenance` をクリックします
1. 対象のメンテナンスをクリックします
1. 右上のステータスバー（現在のステータスを示します）をクリックします
1. 新しい `Status` を選択します
1. 意味のあるメッセージを入力します
1. `Review update` をクリックします
1. すべての情報が正確か確認します
1. `Publish update` をクリックします
