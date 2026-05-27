---
title: 'アプリ開発'
description: 'Zendesk アプリ開発に関するドキュメント'
date: 2025-12-23
upstream_path: /handbook/security/customer-support-operations/zendesk/apps/development/
upstream_sha: "154fb2bd6436508aa2d90583cc235d5fe28b1705"
translated_at: "2026-05-27T00:00:00Z"
translator: claude
stale: false
lastmod: "2026-05-26T12:05:00-05:00"
---

このガイドでは、GitLab における Zendesk アプリの開発について説明します。

{{% alert title="Note" color="primary" %}}

- これはアプリ開発の過程で役に立つと判断された一般的な情報であり、唯一の信頼できる情報源ではありません。
- Zendesk アプリを開発するには、HTML、CSS、および JavaScript のプログラミングについて確かな理解があることが想定されています。

{{% /alert %}}

## Zendesk アプリを理解する

Zendesk でアプリの作成や編集を始める前に、Zendesk アプリと [Zendesk Apps framework](https://developer.zendesk.com/documentation/apps/app-developer-guide/using-the-apps-framework/) の両方の詳細を理解しておくことが重要です。

これには多くの内容があるため、Zendesk のドキュメントがさまざまな詳細を学ぶための最良のリソースです。このトレーニングドキュメントでは「最も重要」と見なされる部分を扱いますが、できる限り頻繁に [Zendesk 開発者ドキュメント](https://developer.zendesk.com/documentation/apps/app-developer-guide/getting_started/)を読んで参照することを強く推奨します。

## ZAT

ZAT（Zendesk App Tools）は、Zendesk アプリをローカルで扱う作業を大幅に容易にする ruby gem です。お使いのコンピューターにインストールすることを強く推奨します。

```bash
gem install rake
gem install zendesk_apps_tools
```

更新するには:

```bash
gem update rake
gem update zendesk_apps_tools
```

Mac のターミナルでは、書き込み権限エラーが出ることがあります。その場合は次を使用できます。

```bash
sudo gem update rake
sudo gem update zendesk_apps_tools
```

## manifest.json

このファイルはアプリケーションの設定に使用されます。そのため非常に重要であり、正確であることが不可欠です。

一般的な設定項目は次のとおりです。

| 設定 | 役割 | 必須？ |
|---------|--------------|:---------:|
| name | アプリの名前を指定します | Y |
| author | アプリの作者を指定します | Y |
| version | アプリのバージョンを指定します | Y |
| frameworkVersion | 使用するフレームワークのバージョンを指定します | Y |
| location | アプリが表示される場所を指定します | Y |
| defaultLocale | アプリのロケール（言語）を指定します | Y |
| parameters | インストール時にアプリに渡すパラメータ | N |
| domainWhitelist  | セキュアパラメータの使用を許可するドメイン | N |
| private | アプリをアプリ開発者のアカウントのみにインストールできるかどうかを指定します | N |

## Location

この設定は、アプリが表示され実行される場所を決定します。これは非常に重要な設定です。最初の設定はプロダクトタイプの location を決定し、その設定内で、アプリが表示される物理的な場所を含む、他の多くの設定を指定できます。プロダクトタイプの location には、私たちは常に `support` を使用します。

物理的な場所は次のとおりです。

| 文字列 | 場所/目的 |
|--------|------------------|
| `ticket_sidebar` | すべてのチケット表示ページの右側 |
| `new_ticket_sidebar` | 新規チケット作成ページの右側 |
| `ticket_editor` | チケットエディターボックス上のボタン |
| `nav_bar` | 左側のナビゲーションバー上のアイコン |
| `top_bar` | トップメニューの右側のアイコン |
| `user_sidebar` | すべてのユーザー表示ページの右側 |
| `organization_sidebar` | すべての組織表示ページの右側 |
| `background` | アプリは UI を表示せずバックグラウンドで実行されます。イベントをリッスンするだけ、またはスケジュールされたタスクを実行するだけのアプリに使用します |
| `modal` | アプリがモーダルを作成する場合に使用します |

物理的な場所の設定内には、さらに設定項目を含めることができ、最も一般的なものは次のとおりです。

| 文字列 | 役割 | 変数の型 |
|--------|--------------|---------------|
| `autoHide` | アプリに初回ロード時に自動的に折りたたむよう指示します | Boolean |
| `autoLoad` | アプリに自動的にロードするよう指示します（デフォルトは true） | Boolean |
| `signed` | 署名付き URL を使用するかどうかを指定します | Boolean |
| `url` | アプリの iframe に表示するページの URL | String |
| `size` | アプリの初期サイズ（代わりにアプリ内で設定します） | JSON |

例として、`https://google.com` をチケットサイドバーに開始時の高さ 200px で自動的にロードするアプリにするには、設定ブロックは次のようになります。

```json
"location": {
  "support": {
    "ticket_sidebar": {
      "autoLoad": true,
      "url": "https://google.com/",
      "size": {
        "height": "200px"
      }
    }
  }
}
```

別の例として、ローカルの `assets/iframe.html` ファイルをレンダリングして、ユーザーページと組織ページの両方でアプリをロードするには、次のようにします。

```json
"location": {
  "support": {
    "user_sidebar": "assets/iframe.html",
    "organization_sidebar": "assets/iframe.html"
  }
}
```

## Parameters

ここは、インストール時にアプリに使用させたい変数を定義する場所です。

### ドメインホワイトリスト

アプリがセキュアパラメータを使用しており、Zendesk の外部にリクエストを行う予定がある場合は、対象のドメインをホワイトリストに登録する必要があります。これを行う例は次のようになります。

```json
{
  "domainWhitelist": [
    "gitlab.com",
    "google.com"
  ]
}
```

### エントリ

各パラメータエントリは、次の内容を含むハッシュです。

- `name`: パラメータの名前
- `type`: パラメータの型
- `secure`: HTTP リクエストを行う際にユーザーが変数の値を見られないようにします（*必ず* これを使用してください）
- `required`: パラメータがインストールに必須かどうかを指定します

例として、2 つの必須パラメータ（`param1` と `param2`）を使用し、両方ともテキストパラメータでセキュアな方法で使用するには、次のようにします。

```json
{
  "parameters": [
    {
      "name": "param1",
      "type": "text",
      "secure": true,
      "required": true
    },
    {
      "name": "param2",
      "type": "text",
      "secure": true,
      "required": true
    }
  ]
}
```

アプリのインストール時に、Zendesk はこれらのパラメータの値を入力するよう求めます。これをアプリのコードで利用するには、次を使用します。

`{{setting.NAME_OF_PARAMETER}}`

ここで `NAME_OF_PARAMETER` は、manifest.json ファイルでパラメータに付けた名前です。

## 必須の JavaScript ライブラリ

ZAT を利用するには、アプリの HTML ファイルに次の javascript を含める必要があります。

```html
<script src="https://static.zdassets.com/zendesk_app_framework_sdk/2.0/zaf_sdk.min.js"></script>
```

### init

ZAF（Zendesk App Framework）クライアントのクライアントインスタンスを作成するには、アプリの javascript に次が存在することを確認する必要があります。

```javascript
var zafclient = ZAFClient.init();
```

### アプリのリサイズ

実行時にアプリをリサイズするには、`resize` 関数を呼び出したいことを指定して、`invoke` クラスを使用します。これは次のように行います。

```javascript
var zafclient = ZAFClient.init();
zafclient.invoke('resize', { width: '100%', height: '100px' });
```

### メタデータの取得

メタデータを取得してアプリで使用するには、ZAF クライアントの `get` 関数を使用する必要があります。これは、チケットのメタデータから取得する値の配列を取り、それを関数内で使用します。

例として、チケットの依頼者の名前とチケットの組織を取得し、それらをコンソールにログ出力するには、次のようにします。

```javascript
var zafclient = ZAFClient.init();
zafclient.get(['ticket.requester.name', 'ticket.organization']).then(function(data) {
  console.log("Ticket requester name: " + data['ticket.requester.name']);
  console.log("Ticket organization: " + data['ticket.organization.name']);
});
```

別の例として、チケットの期限と期限のメモ（カスタムチケットフィールド）を取得し、それらをコンソールにログ出力するには、次のようにします。

```javascript
var zafclient = ZAFClient.init();
zafclient.get(['ticket.customField:due_date', 'ticket.customField:custom_field_360017383799']).then(function(data) {
  console.log("Due date": + data['ticket.customField:due_date']);
  console.log("Due date notes:" + data['ticket.customField:custom_field_360017383799']);
});
```

### リクエストの実行

アプリは、「内部」（つまり Zendesk 自体の内部）であれ外部であれ、リクエストを行う必要がある場合があります。これを行うには、クライアントオブジェクトの `request` 関数を使用します。

この形式は、jQuery で [AJAX リクエスト](https://api.jquery.com/jquery.ajax/)を行うものに *非常に* 近いです。通常使用する形式は次のとおりです。

```javascript
var zafclient = ZAFClient.init();
zafclient.request({
  method: 'REQUEST_TYPE',
  url: 'URL_TO_USE',
  contentType: 'CONTENT_MEDIA_TO_SEND',
  data: DATA_OBJECT,
  secure: BOOLEAN,
  headers: HEADERS_OBJECT
}).then(function(data) {
  // do stuff
}).catch(function(error) {
  console.error('Request failed:', error);
});
```

リクエスト内の正確なパラメータは、リクエストごとに異なります。

例として、チケットの期限を更新したい場合は、次のようにします。

```javascript
var zafclient = ZAFClient.init();
zafclient.request({
  method: 'PUT',
  url: '/api/v2/tickets/123456.json',
  contentType: 'application/json',
  data: JSON.stringify({
    due_at: new Date('2021-01-01').toISOString()
  }),
  secure: BOOLEAN,
  headers: HEADERS_OBJECT
}).then(function(data) {
  console.log('Due date updated to 2021-01-01');
});
```

別の例として、アプリのインストール時のセキュアパラメータを使用して、ユーザー ID 987654 に関する情報を見つけるために gitlab.com に GET リクエストを行いたい場合は、次のようにします。

```javascript
var zafclient = ZAFClient.init();
zafclient.request({
  method: "GET",
  url: 'https://gitlab.com/api/v4/users/987654?private_token={{setting.GitLab_token}}',
  secure: true
}).then(function(data) {
  console.log('User email: ' + data.email);
});
```

## 人間可読の置換

現在、同期リポジトリは、JavaScript ファイルや HTML ファイル内のさまざまな項目を、人間可読の項目から「Zendesk」相当の項目へ置換できます。これには次のものが含まれます。

| 人間可読の項目 | Zendesk フィールド項目 | 備考 |
|---------------------|--------------------|-------|
| `[[Field: XXX]]` | チケットフィールド ID | `XXX` をチケットフィールドの title に置き換えます |
| `[[Form: XXX]]` | チケットフォーム ID | `XXX` をチケットフォームの name に置き換えます |

例として、`Support Ops` というチケットフォームの ID を参照したい場合は、次のようにします。

```javascript
var support_ops_form_id = [[Form: Support Ops]]
```

同様に、`Customer Priority` というチケットフィールドの ID を参照するには、次のようにします。

```html
<div data-field-id='[[Field: Customer Priority]]'>
  <!-- Stuff goes here -->
</div>
```

これは技術的には Javascript で「無効な」コードであることに注意してください。そのため、`zat` を使用してローカルで実行すると、エラーを引き起こします。変換自体を行うのは `sync` スタイルのスクリプトのみです。

## アプリのテスト

Zendesk アプリを本番環境に投入する前にテストする方法は 2 つあります。

### ローカルで

{{% alert title="Note" color="primary" %}}

アプリがセキュアパラメータを使用している場合、これはできません。代わりに、アプリをサンドボックスにインストールしてそこからテストする必要があります。

{{% /alert %}}

アプリをローカルでテストするには、ローカルコンピューター上のアプリディレクトリに cd で移動してから `zat server` コマンドを実行します。これにより、コンピューター上で ZAT サーバーが起動します。起動したら、Zendesk の URL に移動し、末尾に `?zat=true` を付けます。これにより、ローカルコンピューターからアプリがロードされ、アプリをローカルでテストできるようになります。

### サンドボックス経由で

アプリがセキュアパラメータを使用している場合は、代わりにサンドボックス経由でテストする必要があります。これは、アプリをサンドボックスにデプロイすることを意味します。詳細については [Zendesk アプリ](../apps/)を参照してください。
