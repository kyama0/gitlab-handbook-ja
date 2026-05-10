---
title: 'Calendly'
description: 'Calendly に関するドキュメント'
date: 2026-01-08
upstream_path: /handbook/security/customer-support-operations/calendly/
upstream_sha: 1e195b58b9f249ff10bd0e705106c320fee86141
translated_at: "2026-05-10T00:00:00Z"
translator: claude
stale: false
---

## Calendly を理解する

### Calendly とは

Calendly は、GitLab が使用しているオンラインアポイント・スケジューリングツールです。

## Calendly Webhook

### すべての Webhook を一覧表示する

これを行うには、[List Webhook Subscriptions](https://developer.calendly.com/api-docs/faac832d7c57d-list-webhook-subscriptions) を使用してその情報を取得します。これにはスコープと組織自体を指定する必要があります。これは次のようになります (「必須」ではありませんが、URL エンコードした値を指定すると便利です)。

```bash
curl -ss --request GET \
  --url 'https://api.calendly.com/webhook_subscriptions?organization=https%3A%2F%2Fapi.calendly.com%2Forganizations%2FAAAAAAAAAAAAAAAA&scope=organization' \
  --header 'Authorization: Bearer TOKEN_GOES_HERE' \
  --header 'Content-Type: application/json'
```

### Webhook を作成する

Calendly で Webhook を作成するには、API を使用する必要があります。

*最初に* 行う必要があるのは、Webhook 作成に必要となる組織情報を判別することです。

これを行うには、次のように [Get current user](https://developer.calendly.com/api-docs/005832c83aeae-get-current-user) API エンドポイントを使用する必要があります。

```bash
curl --request GET \
  --url https://api.calendly.com/users/me \
  --header 'Authorization: Bearer TOKEN_GOES_HERE' \
  --header 'Content-Type: application/json'
```

これにより、組織情報を含む出力が生成されます (あなたは私たちの組織の一員なので)。必要となる正確な値は `current_organization` の値です。[jq](https://jqlang.github.io/jq/) のようなものを使う場合、コマンド全体を次のように実行できます。

```bash
curl -ss --request GET --url https://api.calendly.com/users/me \
  --header 'Authorization: Bearer TOKEN_GOES_HERE' \
  --header 'Content-Type: application/json' \
  | jq '.resource.current_organization'
```

ユーザー参照 URL も必要で、これも同じエンドポイントから取得できます。この場合、出力から `uri` の値が必要です。[jq](https://jqlang.github.io/jq/) のようなものを使う場合、コマンド全体を次のように実行できます。

```bash
curl -ss --request GET --url https://api.calendly.com/users/me \
  --header 'Authorization: Bearer TOKEN_GOES_HERE' \
  --header 'Content-Type: application/json' \
  | jq '.resource.uri'
```

これで、Webhook 自体を作成できるようになります。これを行うには、[Create Webhook Subscription](https://developer.calendly.com/api-docs/c1ddc06ce1f1b-create-webhook-subscription) API エンドポイントを使用します。これは正しく動作させるために非常に特殊な情報が必要となるので、項目ごとに細かく見ていきましょう。

- `url`
  - これは Calendly からのペイロードの送信先 URL です。
- `events`
  - Webhook がトリガーする項目の配列です。現在のオプションは次のとおりです。
    - `invitee.created`
    - `invitee.canceled`
    - `invitee_no_show.created`
    - `routing_form_submission.created`
- `organization`
  - 組織の URL。この値の取得方法は上記を参照してください。
  - **注意** *完全な* URL を使用する必要があります。
- `user`
  - ユーザー参照 URL。この値の取得方法は上記を参照してください。
  - **注意** *完全な* URL を使用する必要があります。
- `scope`
  - これが実行されるスコープ。`user` または `organization` のいずれかを指定できます。

これらをまとめて、JSON 形式のデータで POST リクエストを行います。これを実現するには、送信するパラメータを含む JSON ファイルを作成し、[jq](https://jqlang.github.io/jq/) で検証してから、API 呼び出しを行うことをお勧めします。例は次のようになります。

```bash
echo '{' >> temp.json
echo '"url": "https://blah.foo/bar",' >> temp.json
echo '  "events": [' >> temp.json
echo '    "invitee.created",' >> temp.json
echo '    "invitee.canceled",' >> temp.json
echo '    "invitee_no_show.created"' >> temp.json
echo '  ],' >> temp.json
echo '  "organization": "https://api.calendly.com/organizations/AAAAAAAAAAAAAAAA",' >> temp.json
echo '  "user": "https://api.calendly.com/users/BBBBBBBBBBBBBBBB",' >> temp.json
echo '  "scope": "user"' >> temp.json
echo '}' >> temp.json
$ cat temp.json | jq
{
  "url": "https://blah.foo/bar",
  "events": [
    "invitee.created",
    "invitee.canceled",
    "invitee_no_show.created"
  ],
  "organization": "https://api.calendly.com/organizations/AAAAAAAAAAAAAAAA",
  "user": "https://api.calendly.com/users/BBBBBBBBBBBBBBBB",
  "scope": "user"
}

curl -ss --request POST \
  --url https://api.calendly.com/webhook_subscriptions \
  --header 'Authorization: Bearer TOKEN_GOES_HERE' \
  --header 'Content-Type: application/json' \
  --data @temp.json
```

これから返ってくるレスポンスは検証する必要がありますが、先ほどパラメータで使用した情報の多くを反映しているはずです。すべて正しいことを確認したら、Webhook が稼働します。

## Calendly イベントから gCal イベントへ

{{% alert title="技術的な詳細" color="primary" %}}

- デプロイメントタイプ: `アドホック`
- プロジェクトリポジトリ: [Calendly Events to gCal Events](https://gitlab.com/gitlab-support-readiness/calendly-events-to-gcal-events)

{{% /alert %}}

### Calendly Events to gCal Events とは

Calendly Events to gCal Events は、Calendly Webhook (組織レベルでイベント作成時にトリガー) からのペイロードを受け取り、Google カレンダーのエントリに変換するセットアップです。

### 仕組み

Calendly Webhook (組織レベルで実装) を介して、イベントが作成されると、(パイプライントリガーを介して) ペイロードがプロセスに送信されます。これにより `bin/process` スクリプトが実行され、次のことが行われます。

- ペイロードが存在することを確認します
- サポートチームの YAML ファイルからデータを読み取ります
- イベントがサポート米国政府のイベントかサポートグローバルのイベントかをチェックします
  - 次のすべての基準を満たす場合、サポート米国政府のイベントです。
    - 担当者が米国政府サポートエージェントである
    - スケジュールされたイベントの名前に次のいずれかの文字列が含まれている。
      - `US Federal`
      - `US Government`
  - 次のすべての基準を満たす場合、サポートグローバルのイベントです。
    - サポート米国政府のイベントではない
    - スケジュールされたイベントの名前に文字列 `Support` が含まれている (大文字小文字を区別しない)
- サポート米国政府のイベントの場合、`US Government Support` カレンダーに Google カレンダーイベントが追加されます
- サポートグローバルのイベントの場合、`GitLab Support` カレンダーに Google カレンダーイベントが追加されます
- どちらのタイプのイベントでもない場合、ステータスコード 0 で終了します

### Calendly Events to gCal Events を変更する

{{% alert title="注意" color="primary" %}}

- これには、[Calendly Events to gCal Events](https://gitlab.com/gitlab-support-readiness/calendly-events-to-gcal-events) プロジェクトへの少なくとも `Developer` アクセス権が必要です。
- これは、対応するリクエスト Issue (機能リクエスト、管理、バグなど) がある場合にのみ行うべきです。存在しない場合は、まず作成して (作業を行う前に標準プロセスを通します)。

{{% /alert %}}

Calendly Events to gCal Events に変更を加えるには、プロジェクトリポジトリで MR を作成する必要があります。実際の変更内容は、リクエスト自体によって異なります。

ピアレビューと承認の後、MR をマージできます (これにより、次回のスケジュール実行時に変更が適用されます)。

## 一般的な問題とトラブルシューティング

これは必要に応じて項目が追加される、生きたセクションです。
