---
title: 'アプリ開発'
description: 'Zendesk アプリ開発に関するドキュメント'
upstream_path: "/handbook/eta/css/zendesk/apps/development/"
upstream_sha: "1312dadbdf7381446077faefcfae17ba323692b6"
lastmod: "2026-07-14T15:22:25-05:00"
translated_at: "2026-07-19T07:47:07+09:00"
translator: codex
stale: false
---

このガイドでは、GitLab における Zendesk アプリの開発について説明します。

{{% alert title="注記" color="primary" %}}

- これは、アプリ開発の過程で役立つと分かった一般的な情報です。唯一の情報源ではありません。
- Zendesk アプリの開発には、HTML、CSS、JavaScript のプログラミングを十分に理解していることが期待されます。

{{% /alert %}}

## Zendesk アプリを理解する

Zendesk でアプリの作成と編集を始める前に、Zendesk アプリと [Zendesk Apps framework](https://developer.zendesk.com/documentation/apps/app-developer-guide/using-the-apps-framework/)の両方の詳細を理解することが重要です。

ここには多くの要素があるため、さまざまな詳細を学ぶには Zendesk のドキュメントが最良のリソースです。このトレーニングドキュメントでは「最も重要」と見なされる部分を扱いますが、できるだけ頻繁に [Zendesk 開発者向けドキュメント](https://developer.zendesk.com/documentation/apps/app-developer-guide/getting_started/)を読み、参照することを強く推奨します。

## ZAT

ZAT（Zendesk App Tools）は、Zendesk アプリをローカルで扱う作業を大幅に容易にする Ruby gem です。コンピューターにインストールすることを強く推奨します。

```bash
gem install rake
gem install zendesk_apps_tools
```

更新するには、次を実行します。

```bash
gem update rake
gem update zendesk_apps_tools
```

Mac のターミナルでは、書き込み権限エラーが発生することがあります。その場合は、次を使用できます。

```bash
sudo gem update rake
sudo gem update zendesk_apps_tools
```

## manifest.json

このファイルはアプリケーションの設定に使用します。そのため、正確であることが非常に重要です。

一般的な設定は次のとおりです。

| 設定 | 役割 | 必須？ |
|---------|--------------|:---------:|
| name | アプリの名前を指定する | Y |
| author | アプリの作成者を指定する | Y |
| version | アプリのバージョンを指定する | Y |
| frameworkVersion | 使用するフレームワークのバージョンを指定する | Y |
| location | アプリを表示する場所を指定する | Y |
| defaultLocale | アプリのロケール（言語）を指定する | Y |
| parameters | インストール中にアプリへ渡すパラメーター | N |
| domainWhitelist  | セキュアパラメーターの使用を許可するドメイン | N |
| private | アプリをアプリ開発者のアカウントにのみインストールできるかどうかを指定する | N |

## 場所

この設定は、アプリを表示して実行する場所を決定します。これは非常に重要な設定です。最初の設定でプロダクトタイプの場所を決定し、その設定内でアプリを表示する物理的な場所など、多くの設定を指定できます。プロダクトタイプの場所には、常に `support` を使用します。

物理的な場所は次のとおりです。

| 文字列 | 場所／目的 |
|--------|------------------|
| `ticket_sidebar` | すべてのチケット表示ページの右側 |
| `new_ticket_sidebar` | 新しいチケット作成ページの右側 |
| `ticket_editor` | チケットエディターボックス上のボタン |
| `nav_bar` | 左側のナビゲーションバーのアイコン |
| `top_bar` | 上部メニューの右側のアイコン |
| `user_sidebar` | すべてのユーザー表示ページの右側 |
| `organization_sidebar` | すべての組織表示ページの右側 |
| `background` | UI を表示せずにアプリをバックグラウンドで実行する。イベントのリッスンまたはスケジュールされたタスクの実行だけが必要なアプリに使用する |
| `modal` | アプリがモーダルを作成するときに使用する |

物理的な場所の設定内には、さらに多くの設定を含めることができます。最も一般的なものは次のとおりです。

| 文字列 | 役割 | 変数の型 |
|--------|--------------|---------------|
| `autoHide` | 初回ロード時にアプリを自動で折りたたむよう指示する | Boolean |
| `autoLoad` | アプリを自動的にロードするよう指示する（デフォルトは true） | Boolean |
| `signed` | 署名付き URL を使用するかどうかを指定する | Boolean |
| `url` | アプリの iframe に表示するページの URL | String |
| `size` | アプリの初期サイズ（代わりにアプリ内で設定する） | JSON |

例として、チケットサイドバーで開始時の高さを 200px にして `https://google.com` を自動的にロードするには、設定ブロックは次のようになります。

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

別の例として、ローカルの `assets/iframe.html` ファイルをレンダリングしてアプリをユーザーページと組織ページの両方にロードするには、次のようにします。

```json
"location": {
  "support": {
    "user_sidebar": "assets/iframe.html",
    "organization_sidebar": "assets/iframe.html"
  }
}
```

## パラメーター

ここでは、インストール中にアプリで使用する変数を定義します。

### ドメインの許可リスト

アプリがセキュアパラメーターを使用し、Zendesk 外部へリクエストを送る予定である場合、該当ドメインを許可リストに登録する必要があります。例は次のとおりです。

```json
{
  "domainWhitelist": [
    "gitlab.com",
    "google.com"
  ]
}
```

### エントリ

各パラメーターエントリは、次を含むハッシュです。

- `name`: パラメーターの名前
- `type`: パラメーターの型
- `secure`: HTTP リクエストの作成時にユーザーが変数の値を確認できないようにする（これは*常に*使用してください）
- `required`: パラメーターがインストールに必須かどうかを指定する

例として、いずれも安全な方法で使用するテキストパラメーターである、必須の 2 つのパラメーター（`param1` と `param2`）を使用するには、次のようにします。

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

アプリのインストール中に、Zendesk はこれらのパラメーターの値を指定するよう求めます。アプリのコード内でこれを使用するには、次を使用します。

`{{setting.NAME_OF_PARAMETER}}`

ここで、`NAME_OF_PARAMETER` は manifest.json ファイルでパラメーターに付けた名前です。

## 必須の JavaScript ライブラリ

ZAT を使用するには、アプリの HTML ファイルに次の JavaScript を含める必要があります。

```html
<script src="https://static.zdassets.com/zendesk_app_framework_sdk/2.0/zaf_sdk.min.js"></script>
```

### init

ZAF（Zendesk App Framework）クライアントのクライアントインスタンスを作成するには、アプリの JavaScript に次が含まれていることを確認する必要があります。

```javascript
var zafclient = ZAFClient.init();
```

### アプリのリサイズ

実行時にアプリのサイズを変更するには、`invoke` クラスを使用し、`resize` 関数を呼び出すよう指定します。次のように行います。

```javascript
var zafclient = ZAFClient.init();
zafclient.invoke('resize', { width: '100%', height: '100px' });
```

### メタデータの取得

メタデータを取得してアプリで使用するには、ZAF クライアントの `get` 関数を使用する必要があります。これはチケットメタデータから取得する値の配列を取り、それを関数内で使用します。

例として、チケットリクエスターの名前とチケットの組織を取得してコンソールに記録するには、次のようにします。

```javascript
var zafclient = ZAFClient.init();
zafclient.get(['ticket.requester.name', 'ticket.organization']).then(function(data) {
  console.log("Ticket requester name: " + data['ticket.requester.name']);
  console.log("Ticket organization: " + data['ticket.organization.name']);
});
```

別の例として、チケットの期限日と期限日の注記（カスタムチケットフィールド）を取得してコンソールに記録するには、次のようにします。

```javascript
var zafclient = ZAFClient.init();
zafclient.get(['ticket.customField:due_date', 'ticket.customField:custom_field_360017383799']).then(function(data) {
  console.log("Due date": + data['ticket.customField:due_date']);
  console.log("Due date notes:" + data['ticket.customField:custom_field_360017383799']);
});
```

### リクエストの実行

アプリでは、"内部"（つまり Zendesk 内）または外部のリクエストを行う必要がある場合があります。これを行うには、クライアントオブジェクトの `request` 関数を使用します。

この形式は、jQuery での [AJAX リクエスト](https://api.jquery.com/jquery.ajax/)の作成形式に*非常に*近いものです。通常使用する形式は次のとおりです。

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

リクエスト内の正確なパラメーターは、リクエストごとに異なります。

例として、チケットの期限日を更新する場合は、次のようになります。

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

別の例として、アプリのインストール時に設定したセキュアパラメーターを使用して、ユーザー ID 987654 の情報を見つけるために gitlab.com へ GET リクエストを行う場合は、次のようになります。

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

## 人が読める形式への置換

現在、同期リポジトリでは、JavaScript および HTML ファイル内で、さまざまな項目を人が読める項目から "Zendesk" の同等項目へ置換できます。これには次が含まれます。

| 人が読める項目 | Zendesk フィールド項目 | 注記 |
|---------------------|--------------------|-------|
| `[[Field: XXX]]` | チケットフィールド ID | `XXX` をチケットフィールドのタイトルに置き換える |
| `[[Form: XXX]]` | チケットフォーム ID | `XXX` をチケットフォームの名前に置き換える |

例として、チケットフォーム `Support Ops` の ID を参照する場合は、次のようにします。

```javascript
var support_ops_form_id = [[Form: Support Ops]]
```

同様に、チケットフィールド `Customer Priority` の ID を参照する場合は、次のようにします。

```html
<div data-field-id='[[Field: Customer Priority]]'>
  <!-- Stuff goes here -->
</div>
```

これは JavaScript としては技術的に "無効" なコードであるため、`zat` を使用してローカルで実行するとエラーが発生することに注意してください。変換そのものを行うのは `sync` スタイルのスクリプトだけです。

## アプリをテストする

Zendesk アプリを本番環境に導入する前にテストする方法は 2 つあります。

### ローカル

{{% alert title="注記" color="primary" %}}

アプリがセキュアパラメーターを使用している場合、これは実行できません。代わりに、アプリを Sandbox にインストールして、そこでテストする必要があります。

{{% /alert %}}

アプリをローカルでテストするには、ローカルコンピューターのアプリディレクトリに cd してから、`zat server` コマンドを実行します。これによりコンピューター上で ZAT サーバーが起動します。起動したら、Zendesk URL に移動し、末尾に `?zat=true` を追加します。これにより、ローカルコンピューターのアプリがロードされ、ローカルでアプリをテストできます。

### Sandbox 経由

アプリがセキュアパラメーターを使用している場合は、代わりに Sandbox 経由でテストする必要があります。これは Sandbox にデプロイすることを意味します。詳細については、[Zendesk アプリ](../apps/)を参照してください。
