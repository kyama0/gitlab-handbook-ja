---
title: GitLab.com 上の IP ブロックの原因の特定
description: "IP アドレスのブロックを引き起こした原因を特定し、その情報をユーザーへ伝えるためのワークフロー。"
category: GitLab.com
subcategory: Troubleshooting
upstream_path: /handbook/support/workflows/ip-blocks/
upstream_sha: 5b8afe7d206f5c195e463506206021ee3c9a4491
translated_at: "2026-05-08T00:00:00Z"
translator: claude
stale: false
---

GitLab.com のユーザーは、レート制限により自身の IP アドレスがブロックされていることに気付くことがあります。現在、GitLab.com のレート制限パラメータは [GitLab.com 設定ドキュメントページ](https://docs.gitlab.com/user/gitlab_com/#account-and-limit-settings) で最も適切に説明されています。GitLab.com のレート制限の単一の信頼できる情報源は、[インフラストラクチャのレート制限ドキュメント](/handbook/engineering/infrastructure-platforms/rate-limiting/) にあります。このページは、サポートエンジニアがレート制限と IP ブロックに関連する Issue をトラブルシューティングする際の助けになることを目的としています。

## 対応

標準的な応答はマクロとして利用できます: [`Support::SaaS::Gitlab.com::Temp IP Ban`](https://gitlab.com/gitlab-com/support/zendesk-global/macros/-/blob/master/active/Support/SaaS/GitLab.com/Temp%20IP%20Ban.md?ref_type=heads)

応答時にどのような情報を提供できるかについては、[ログリクエストのワークフロー](/handbook/support/workflows/log_requests) も参照してください。

## 検索

### 検索条件

ユーザーから提供された IP アドレスについて、`json.meta.remote_ip` への positive フィルタを追加することから始めます:

![Add remote_ip filter](/images/support/ipblocks_add_remoteip_filter.png)

そこから、[フィールド](#fields) 上で positive および negative フィルタを使ってドリルダウンし、最良の結果を得ることができます。

### Rack Attack ブロックのチェック

ユーザーが [Rack Attack](https://docs.gitlab.com/development/application_limits/#implement-rate-limits-using-rackattack) によってブロックされている場合、その理由でブロックされたリクエストを Kibana で見つけることができるはずです。

そのためには、IP アドレスをメイン検索フィールドに入力し、`json.message` に `Rack_Attack` の positive フィルタを設定します。

![Searching for an IP](/images/support/ipblocks_rack_attack_search.png)

次のような結果が表示されるはずです:

![Checking Rack Attack results](/images/support/ipblocks_rack_attack_results.png)

これらの結果が存在することは、このユーザーが Rack Attack によってブロックされたことを示しており、`json.fullpath` フィールドを追加して、各リクエストが GitLab.com 上のどの正確なパスにアクセスしようとしたのかを確認できます。

複数の認証失敗リクエスト（401）が Rack Attack ブロックを引き起こし、403 Forbidden メッセージを生じさせるのはよくあることです。[1 つの IP から 1 分間に 300 回の失敗リクエスト](https://docs.gitlab.com/user/gitlab_com/#git-and-container-registry-failed-authentication-ban) を受け取ると IP アドレスをブロックします。デフォルトでは Git 操作は最初に認証なしで試行されるため、Git 操作のたびに 2 つの 401 応答が見られるのが通常です。

Rack Attack はトラフィックを *スロットル* することもできます。その場合、HTTP 429 応答コードで認識できます。これに対する推奨される解決策は、ユーザーにより少ないリクエストを行ってもらうことです。詳細は [Bypass Policy](ip-blocks.md#bypass-policy) を参照してください。

### アプリケーションレートリミッターのチェック

Rack Attack でブロックを見つけられない場合は、アプリケーションレート制限を確認してみてください。Kibana でこれを検索でき、`json.message.keyword` が `Application_Rate_limiter_Request` です。`json.env` でさまざまな上限を識別でき、`json.meta.user` および `json.meta.remote_ip` でフィルタリングすることもできます。

![Checking Application Rate Limiter](/images/support/application_rate_limit.png)

### フィールド {#fields}

#### 主要なフィールド

以下のフィールドは、複数のリクエストの最も重要な詳細を一目で取得するため、検索クエリに追加するのに最適です。

- `json.status` - リクエストに対して返された HTTP ステータスコードを出力します。通常は `401`（Unauthorized）および／または `403`（Forbidden）を探しています。
- `json.path` - リクエストによってアクセスされた GitLab.com 上のパス、または使用された API エンドポイント。
- `json.method` - `GET`、`POST`、`PUT`、`PATCH`、または `DELETE` のいずれかになります。最初の 3 つが最も一般的です。
- `json.env` - `blocklist`、`throttle`、`track` のいずれかになります。`track` はレート制限設定を変更する際の診断に使用され、ユーザーには影響しません: サポートの観点からは `track` は無視してください。`blocklist` は、例えば自動化された Git HTTP トラフィックのように、認証失敗が多すぎることへの反応として発生します。`throttle` はユーザーまたは IP が 1 分あたりのリクエスト数が多すぎることを意味します。

#### 二次的なフィールド

これらのフィールドは役立つことがありますが、必須ではありません。

- `json.controller` - 特定のリクエストが GitLab.com のどの部分にアクセスしていたかの手がかりを提供します。
- `json.params` - どのユーザーがリクエストを行ったか、どのアクションが実行されたか、どのリソースに対して実行されたかを示します。コンテナレジストリへのリクエストの場合、このフィールドはどのリポジトリが対象だったかを示します。
- `json.matched` - これは、このリクエストを制限するために使用された Rack Attack ルールの名前です（`json.env` が `throttle` の場合）。これは、リクエストが [現在の上限](https://docs.gitlab.com/user/gitlab_com/#gitlabcom-specific-rate-limits) のどれを超過したかを把握するのに役立ちます。

## 一般的な原因

### コンテナレジストリ

`registry.gitlab.com` への push または pull の失敗が多数あると、IP ブロックを引き起こす可能性があります。[ドキュメント](https://docs.gitlab.com/user/gitlab_com/#git-and-container-registry-failed-authentication-ban) より:

> GitLab.com responds with HTTP status code 403 for 1 hour, if 30 failed authentication requests were received in a 3-minute period from a single IP address.

提供された IP アドレスを検索し、`json.path` に `/jwt/auth` の positive フィルタを設定することで、コンテナレジストリへのヒットに関するすべてのログ結果をリストできます。

#### 役立つフィールド

- `json.status`
- `json.path`
- `json.params`
- `json.controller`

#### push と pull の失敗の例

##### push

レジストリへの失敗した push は常に `json.controller` フィールドが `JwtController` で、`json.path` フィールドが `/jwt/auth` になります。`json.params` フィールドの `:push,pull` に注目してください。これはリクエストが push であることを示しています。

失敗した push は Kibana で以下のように見えます。

![Failed Push](/images/support/ipblocks_registry_failed_push.png)

##### pull

push と同様に、レジストリからの失敗した pull は常に `json.controller` フィールドが `JwtController` で、`json.path` フィールドが `/jwt/auth` になります。ただし、`json.params` には `:pull` のみが存在します。

失敗した pull は Kibana で以下のように見えます。

![Failed Pull](/images/support/ipblocks_registry_failed_pull.png)

#### `gitlab-ci-token` の pull

`gitlab-ci-token` ユーザーは [レート制限](https://docs.gitlab.com/user/gitlab_com/#git-and-container-registry-failed-authentication-ban) から除外されています。

### LFS

LFS オブジェクトを含むリポジトリへの push または pull は、ユーザーが認可されていない場合に IP ブロックを引き起こす可能性があります。

#### 役立つフィールド

- `json.action`
- `json.controller`
- `json.method`
- `json.status`

#### 例

##### push

失敗した LFS push は常に `json.action` フィールドが `upload_authorize`、`json.controller` フィールドが `Projects::LfsStorageController`、`json.method` が `PUT` になります。

失敗した LFS push は Kibana で以下のように見えます。

![Failed LFS Push](/images/support/ipblocks_lfs_failed_push.png)

### クローンの失敗

リポジトリが認証なしで HTTPS 経由で十分な回数クローンされると、IP がブロックされる可能性があります。

リクエストは以下のように見えます:

![Log results for a failed clone](/images/support/ipblocks_failed_clone.png)

#### 役立つフィールド

- `json.status`: `401`

- `json.controller`: `Projects::GitHttpController`

- `json.action`: `info_refs`

- `json.path`: `/namespace/project.git/info/refs`

- `json.ua`: リクエストがブラウザからのものでない場合、これによりクローンを試みたマシンのオペレーティングシステムと、そこにインストールされている Git のバージョンが明らかになります。例: `git/2.11.1.windows.1`、`git/2.17.2 (Apple Git-113)`、`git/2.17.1` (Ubuntu 18.04 LTS) など。

`json.params` フィールドにも `git-upload-pack` が表示されるはずです。

### プロジェクトエクスポートのレート制限

お客様がプロジェクトエクスポートやエクスポートのダウンロードを急速に行いすぎると、IP がレート制限される可能性があります。[Project Import/Export](https://docs.gitlab.com/user/project/settings/import_export/#rate-limits) を参照してください。

#### 役立つフィールド

- `json.method`: `Application_Rate_Limiter_Request`

- `json.controller`: `ProjectsController`

- `json.action`: `download_export`

- `json.path`: `/namespace/project/download_export`

### メール検証プロセス

特定のケースで、お客様がパイプラインを実行するために共有ユーザーアカウントを使用している場合、新しい IP アドレスからのサインインが [アカウントメール検証](https://docs.gitlab.com/security/email_verification/) をトリガーします。これにより、サインインが検証されるまでアカウントとすべてのトークンがブロックされます。これにより、[IP ブロック](https://docs.gitlab.com/user/gitlab_com/#ip-blocks) を引き起こすのに十分な `401` エラーが発生する可能性があります。

#### 役立つフィールド

- `json.details.custom_message` : `User access locked - sign in from untrusted IP address`
- `json.custom_message`: `User access locked - sign in from untrusted IP address`
- `json.entity_path` - アカウントのユーザー名

### Cloudflare のトラブルシューティング

ユーザーが Cloudflare によってブロックまたはレート制限されているケースもあります。Kibana にログがない、または `RateLimit-*` ヘッダーがないことは、通常、Cloudflare レベルで調査することを示唆しています。Cloudflare の "Access Denied" ページのスクリーンショットを依頼するか、お客様に `-i` フラグ付きの `curl` を実行してもらい、関連するヘッダーを取得できます:

![Access Denied](/images/support/workflows/assets/AccessDenied.png)

```text
curl -i --header "PRIVATE-TOKEN: *****" https://gitlab.com

HTTP/2 403
date: Thu, 18 Nov 2021 13:48:09 GMT
content-type: text/plain; charset=UTF-8
content-length: 16
x-frame-options: SAMEORIGIN
referrer-policy: same-origin
cache-control: private, max-age=0, no-store, no-cache, must-revalidate, post-check=0, pre-check=0
expires: Thu, 01 Jan 1970 00:00:01 GMT
expect-ct: max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"
report-to: {"endpoints":[{"url":"https:\/\/a.nel.cloudflare.com\/report\/v3?s=AbCdeFgXXXXX"}],"group":"cf-nel","max_age":604800}
nel: {"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}
strict-transport-security: max-age=31536000
x-content-type-options: nosniff
server: cloudflare
cf-ray: 6b01a12345abcde-KBP
error code: 1020
```

`HTTP 403` 応答と `error code 1020` に注目してください。Cloudflare ダッシュボードで使用するため、`cf-ray` ID もメモしておくべきです。

この情報を取得したら、Cloudflare のトラブルシューティングのため [私たちのガイド](../../engineering/infrastructure-platforms/rate-limiting/troubleshooting.md) に従ってください。一部のブロックは緩和措置の結果として発生する可能性があるため、内部ボードで [contact request](https://gitlab.com/gitlab-com/support/internal-requests/-/issues) が開かれていないかを確認するとよいでしょう。

[私たちの利用規約](/handbook/legal/subscription-agreement/) に従い、IP アドレスが [現在の米国禁輸国](https://ofac.treasury.gov/sanctions-programs-and-country-information) からのものとして識別された場合、ブロックされる可能性があります。ブロックは Cloudflare の GeoLocation ブロック方法を通じて自動的に行われ、変更できません。[IP アドレスを入力](https://www.maxmind.com/en/geoip2-precision-demo) してどのように分類されているかを確認し、[国のリスト](/handbook/legal/trade-compliance/) と照合できます。ユーザーは IP アドレスの [データ修正のリクエスト](https://www.maxmind.com/en/geoip-data-correction-request) を検討できますが、それは保証されておらず、GitLab はこのプロセスを管理することができません。

## Cloudflare や Kibana にログエントリが見つからない場合

IP ブロックについて Cloudflare または Kibana にログエントリが見つからない場合、Production Engineering チームに連絡が必要な場合があります。このようなシナリオでは [Production Engineering チームに追加の支援を要請](/handbook/engineering/infrastructure-platforms/rate-limiting/troubleshooting/#requesting-further-assistance) できます。

## 誤検知の IP ジオロケーションブロック

ユーザーが GitLab.com へのアクセスをブロックされており、誤検知のジオロケーションブロックの疑いがある場合、[Production Engineering チームに追加の支援を要請](/handbook/engineering/infrastructure-platforms/rate-limiting/troubleshooting/#requesting-further-assistance) できます。

## バイパスポリシー {#bypass-policy}

お客様がレート制限について懸念を持っている場合、可能な限り単一の IP アドレスからのトラフィックを減らすよう協力してください。

詳細は [バイパスポリシー](../../engineering/infrastructure-platforms/rate-limiting/bypass-policy.md) を参照してください。
