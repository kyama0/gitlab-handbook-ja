---
title: 'アプリ開発'
description: 'Zendesk アプリ開発に関するドキュメント'
upstream_path: /handbook/security/customer-support-operations/zendesk/apps/development/
upstream_sha: 78b430bc8e2a925f210024d512218ce1d8d42106
translated_at: "2026-05-10T00:00:00Z"
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

Zendesk でアプリの作成や編集を始める前に、Zendesk アプリと [Zendesk Apps framework](https://developer.zendesk.com/documentation/apps/app-developer-guide/using-the-apps-framework/) の両方について、その細かな点まで理解しておくことが重要です。

これには非常に多くの内容があるため、Zendesk のドキュメントが学習のための最良のリソースとなります。このトレーニングドキュメントでは「最も重要」と見なされる部分をカバーしますが、可能な限り頻繁に [Zendesk 開発者ドキュメント](https://developer.zendesk.com/documentation/apps/app-developer-guide/getting_started/) を読み参照することを強くおすすめします。

## ZAT

ZAT、すなわち Zendesk App Tools は、Zendesk アプリをローカルで扱う作業を大幅に容易にする ruby gem です。コンピューターにインストールしておくことを強くおすすめします:

```bash
gem install rake
gem install zendesk_apps_tools
```

更新するには:

```bash
gem update rake
gem update zendesk_apps_tools
```

Mac のターミナルでは、書き込み権限エラーが発生することがあります。その場合は次を使用できます:

```bash
sudo gem update rake
sudo gem update zendesk_apps_tools
```

## manifest.json

このファイルはアプリケーションの設定に使用されます。そのため、正確であることが非常に重要かつ不可欠です。

一般的な設定項目は次のとおりです:

| 設定項目 | 内容 | 必須? |
|---------|--------------|:---------:|
| name | アプリの名前を指定します | Y |
| author | アプリの作者を指定します | Y |
| version | アプリのバージョンを指定します | Y |
| frameworkVersion | 使用するフレームワークバージョンを指定します | Y |
| location | アプリが表示される場所を指定します | Y |
| defaultLocale | アプリのロケール (言語) を指定します | Y |
| parameters | インストール時にアプリへ渡すパラメーター | N |
| domainWhitelist  | セキュアパラメーターの利用を許可するドメイン | N |
| private | アプリの開発者アカウントでのみインストール可能かどうかを指定します | N |

## Location

この設定は、アプリが表示および実行される場所を決定します。これは非常に重要な設定です。1 番目の設定はプロダクトタイプの場所を決定し、その設定の中で、アプリが表示される物理的な場所を含む多くの追加設定を指定できます。プロダクトタイプの場所には、常に `support` を使用します。

物理的な場所は次のとおりです:

| 文字列 | 場所/用途 |
|--------|------------------|
| `ticket_sidebar` | すべてのチケットビューページの右側 |
| `new_ticket_sidebar` | 新規チケット作成ページの右側 |
| `ticket_editor` | チケットエディターボックス上のボタン |
| `nav_bar` | 左側ナビゲーションバー上のアイコン |
| `top_bar` | 上部メニューの右側にあるアイコン |
| `user_sidebar` | すべてのユーザービューページの右側 |
| `organization_sidebar` | すべての組織ビューページの右側 |
| `background` | UI を表示せずバックグラウンドで動作するアプリ。イベントの待ち受けやスケジュールタスクの実行のみが必要なアプリで使用します |
| `modal` | アプリがモーダルを生成する場合に使用します |

物理的な場所の設定の中では、さらに多くの設定を含められます。よく使用されるものは次のとおりです:

| 文字列 | 内容 | 変数の型 |
|--------|--------------|---------------|
| `autoHide` | 初回読み込み時にアプリを自動的に折りたたむよう指示します | Boolean |
| `autoLoad` | アプリを自動的に読み込むよう指示します (デフォルトは true) | Boolean |
| `signed` | 署名付き URL を使用するかどうかを指定します | Boolean |
| `url` | アプリの iframe に表示するページの URL | String |
| `size` | アプリの初期サイズ (代わりにアプリ側で設定してください) | JSON |

例として、`https://google.com` を高さ 200px でチケットサイドバーに自動読み込みするには、設定ブロックは次のようになります:

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

別の例として、ローカルの `assets/iframe.html` ファイルを描画して、アプリをユーザーページと組織ページの両方に読み込むには次のようにします:

```json
"location": {
  "support": {
    "user_sidebar": "assets/iframe.html",
    "organization_sidebar": "assets/iframe.html"
  }
}
```

## Parameters

これは、インストール時にアプリで使用したい変数を定義する場所です。

### Domain whitelists

アプリがセキュアパラメーターを使用しており、Zendesk の外部にリクエストを送る予定がある場合は、対象のドメインをホワイトリストに登録する必要があります。例は次のようになります:

```json
{
  "domainWhitelist": [
    "gitlab.com",
    "google.com"
  ]
}
```

### Entries

各パラメーターエントリは次の項目を含むハッシュです:

- `name`: パラメーターの名前
- `type`: パラメーターのタイプ
- `secure`: HTTP リクエスト時にユーザーが変数値を確認できないようにします (*常に* これを使用してください)
- `required`: パラメーターがインストール時に必須かどうかを指定します

例として、テキストパラメーター 2 つ (`param1` と `param2`) をいずれもセキュアな方法で必須として使用するには、次のようにします:

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

アプリのインストール時、Zendesk はこれらのパラメーターの値を尋ねます。アプリのコード内でこれを利用するには、次のように記述します:

`{{setting.NAME_OF_PARAMETER}}`

ここで `NAME_OF_PARAMETER` は manifest.json ファイルで指定したパラメーター名です。

## 必須の JavaScript ライブラリ

ZAT を利用するには、アプリの HTML ファイルに次の JavaScript を含める必要があります:

```html
<script src="https://static.zdassets.com/zendesk_app_framework_sdk/2.0/zaf_sdk.min.js"></script>
```

### init

ZAF (Zendesk App Framework) クライアントのクライアントインスタンスを作成するには、アプリの JavaScript に次の記述があることを確認する必要があります:

```javascript
var zafclient = ZAFClient.init();
```

### アプリのリサイズ

ランタイム中にアプリをリサイズするには、`invoke` クラスを使い、`resize` 関数を呼び出すよう指定します。次のように行います:

```javascript
var zafclient = ZAFClient.init();
zafclient.invoke('resize', { width: '100%', height: '100px' });
```

### メタデータの取得

メタデータを取得しアプリ内で使うには、ZAF クライアントの `get` 関数を使う必要があります。これはチケットメタデータから取得したい値の配列を受け取り、関数内で使用します。

例として、チケットの依頼者の名前とチケットの組織を取得し、それらをコンソールに出力するには、次のようにします:

```javascript
var zafclient = ZAFClient.init();
zafclient.get(['ticket.requester.name', 'ticket.organization']).then(function(data) {
  console.log("Ticket requester name: " + data['ticket.requester.name']);
  console.log("Ticket organization: " + data['ticket.organization.name']);
});
```

別の例として、チケットの期限日と期限日メモ (カスタムチケットフィールド) を取得し、それらをコンソールに出力するには、次のようにします:

```javascript
var zafclient = ZAFClient.init();
zafclient.get(['ticket.customField:due_date', 'ticket.customField:custom_field_360017383799']).then(function(data) {
  console.log("Due date": + data['ticket.customField:due_date']);
  console.log("Due date notes:" + data['ticket.customField:custom_field_360017383799']);
});
```

### リクエストの実行

アプリは「内部」(つまり Zendesk 自身の中) または外部のリクエストを実行する必要があるかもしれません。これを行うには、クライアントオブジェクトの `request` 関数を使用します。

形式は jQuery で [AJAX リクエスト](https://api.jquery.com/jquery.ajax/) を行う場合に *非常に* 近いものです。通常使う形式は次のとおりです:

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

リクエストの正確なパラメーターはリクエストごとに異なります。

例として、チケットの期限日を更新したい場合は次のように記述します:

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

別の例として、アプリインストール時のセキュアパラメーターを使って、ユーザー ID 987654 に関する情報を取得するために gitlab.com に GET リクエストを送る場合、次のように記述します:

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

## 人間が読める形式の置換

現在、sync リポジトリは JavaScript および HTML ファイル内のさまざまな項目を、人間が読める形式から「Zendesk」相当の項目へ置換できます。これには次が含まれます:

| 人間が読める項目 | Zendesk のフィールド項目 | 備考 |
|---------------------|--------------------|-------|
| `[[Field: XXX]]` | チケットフィールド ID | `XXX` をチケットフィールドのタイトルに置き換えます |
| `[[Form: XXX]]` | チケットフォーム ID | `XXX` をチケットフォームの名前に置き換えます |

例として、チケットフォーム `Support Ops` の ID を参照したい場合、次のようにします:

```javascript
var support_ops_form_id = [[Form: Support Ops]]
```

同様に、チケットフィールド `Customer Priority` の ID を参照する場合、次のようにします:

```html
<div data-field-id='[[Field: Customer Priority]]'>
  <!-- Stuff goes here -->
</div>
```

これは厳密には JavaScript として「無効」なコードであるため、`zat` を使ってローカルで実行するとエラーになることに留意してください。変換そのものを行うのは `sync` 系スクリプトのみです。

## アプリのテスト

Zendesk アプリを本番環境に投入する前にテストする方法は 2 つあります。

### ローカル

{{% alert title="Note" color="primary" %}}

アプリがセキュアパラメーターを使用している場合、これは行えません。代わりに、アプリを Sandbox にインストールし、そこからテストする必要があります。

{{% /alert %}}

アプリをローカルでテストするには、ローカルコンピューターでアプリのディレクトリへ cd し、`zat server` コマンドを実行します。これにより、コンピューター上で ZAT サーバーが起動します。起動後、Zendesk URL にアクセスし、末尾に `?zat=true` を付与します。これでローカルコンピューターからアプリが読み込まれ、ローカルでアプリをテストできるようになります。

### Sandbox 経由

アプリがセキュアパラメーターを使用している場合は、代わりに Sandbox 経由でテストする必要があります。これは、アプリを Sandbox にデプロイすることを意味します。詳細は [Zendesk Apps](../apps/) を参照してください。
