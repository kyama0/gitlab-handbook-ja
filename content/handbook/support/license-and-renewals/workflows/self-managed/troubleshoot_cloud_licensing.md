---
title: クラウドライセンシングのトラブルシューティング
description: "クラウドライセンスに関する問題のトラブルシューティング方法"
category: GitLab Self-Managed licenses
upstream_path: /handbook/support/license-and-renewals/workflows/self-managed/troubleshoot_cloud_licensing/
upstream_sha: 6c73093986242c762a8f4a2769fbfba69b31fcf9
translated_at: "2026-05-08T12:45:20Z"
translator: claude
stale: false
---

## シナリオ

[バグ](https://gitlab.com/gitlab-com/sales-team/field-operations/systems/-/issues/1915) によりクラウドライセンシングにオプトインされ、インスタンスでクラウドライセンシングがアクティブ化された顧客に対して、エンティティの変更が発生し、新しいサブスクリプションがクラウドライセンシング対象になっていなかった場合。

### トラブルシューティングのワークフロー

1. 顧客がクラウドライセンシング対象であるべきかどうかを判断します。
1. **対象ではない場合**、次の手順を実行します:
    1. [rails console](https://docs.gitlab.com/administration/operations/rails_console/) 経由で次のコマンドを実行するよう顧客に依頼して、現在のクラウドライセンスを削除します: `l = License.find 123`、続いて `l.destroy`。最初のコマンドにはライセンス番号を指定する必要があります。この番号は customersdot のライセンスメニュー内のクラウドライセンスの URL から確認できます（例: <https://customers.gitlab.com/admin/license/123123123>）。
    1. ライセンスが削除されたら、顧客はインスタンスに標準ライセンスファイルをアップロードできるようになります。
1. **対象である場合**、次の手順を実行します:
    1. [新しいサブスクリプションをクラウドライセンス機能に切り替える](#how-to-switch-a-subscription-to-cloud-license-features)
    1. [rails console](https://docs.gitlab.com/administration/operations/rails_console/) 経由で次のコマンドを実行するよう顧客に依頼して、現在のクラウドライセンスを削除します: `l = License.find 123`、続いて `l.destroy`。最初のコマンドにはライセンス番号を指定する必要があります。この番号は customersdot のライセンスメニュー内のクラウドライセンスの URL から確認できます（例: <https://customers.gitlab.com/admin/license/123123123>）。
    1. ライセンスが削除されたら、サブスクリプションをクラウド機能に切り替えた際に生成・メール送信された新しいアクティベーションコードを顧客が入力できるようになります。
    1. [顧客がクラウドライセンシングを希望していたチケットの例はこちら](https://gitlab.zendesk.com/agent/tickets/236163)

## サブスクリプションをクラウドライセンス機能に切り替える方法 {#how-to-switch-a-subscription-to-cloud-license-features}

1. customersdot にある顧客の `Zuora Subscriptions` タブに移動します（URL の例: <https://customers.gitlab.com/admin/customer/123123/zuora_subscriptions>）。
1. 該当する機能のチェックボックスにチェックを入れます。`Cloud Licensing` チェックボックスにはチェックを入れないでください。`Update` ボタンをクリックします。
1. 更新ボタンの隣にあるクラウドアイコンをクリックして、サブスクリプションのアクティベーションコードを生成し、顧客にメール送信します。
1. `Cloud Activations` タブを表示してコードが生成されていることを確認します。コードが正しいサブスクリプションに対して生成されていることを確認します。
1. 顧客のポータルアカウントになりすまして、サブスクリプション用のアクティベーションコードが利用可能であることを確認します。
1. 顧客がインスタンスでアクティベーションコードを使用すると、クラウドライセンスが生成され（ライセンスセクションを確認）、ステップ 2 の `Cloud Licensing` チェックボックスがチェックされた状態になります。

## ネットワーク接続のトラブルシューティング

クラウドライセンシングは、ポート 443（HTTPS）経由で `customers.gitlab.com` への接続が必要であり、この接続はクラウドライセンス使用中ずっと利用可能である必要があります。GitLab サーバーは通常 1 日に 1 回、およびアクティベーション時に 1 回、また [手動同期が実行される](https://docs.gitlab.com/subscriptions/self_managed/#manually-synchronize-your-subscription-details) たびにチェックインを行います。一般的なネットワーキングは私たちがサポート可能な範囲外であることが多いですが、ユーザーが接続をブロックしている可能性のあるネットワークまたは HTTPS の問題を診断するのに役立つよう、簡単にテストできる項目がいくつかあります。

### DNS の確認

接続はホスト名 `customers.gitlab.com` に依存するため、DNS ルックアップが実行されます。customers.gitlab.com の IP アドレスは定期的に変更される可能性があるため、現在の IP アドレスを確認することが重要です。

例として、[dig](https://en.wikipedia.org/wiki/Dig_(command)) または `host` コマンドを使用します:

```sh
dig customers.gitlab.com

host customers.gitlab.com
```

ネットワークのトラブルシューティングでは、IPv6 が要因となる場合があることに注意してください。サーバーが IPv6 を IPv4 より優先するように構成されている場合、IPv6（AAAA）レコードを解決できることを確認してください:

```sh
dig AAAA customers.gitlab.com
host -t AAAA customers.gitlab.com
```

### 基本的な IP および TCP 接続性

ほとんどの場合、`ping` で IPv4 か IPv6 かに関わらず、IP アドレス経由で接続が利用可能であることを確認できます。現在の IP アドレスを取得した後:

```sh
ping 104.18.21.224
ping -6 2606:4700::6812:14e0  #ping6 も使用可能ですが、ping -6 のエイリアスです
```

ホスト名（`customers.gitlab.com`）への ping でも問題ありませんが、IP に直接 ping することで両方の IP が利用可能であることを確認できます。簡単なワンライナーで両方の IP に ping できます:

```sh
dig +short customers.gitlab.com | xargs -I% ping -c1 -W5 %
```

`ping` は厳密には TCP や UDP の接続ではなく ICMP であることに注意してください。ICMP はネットワークの様々な理由でブロックされることがあります。`nc`（推奨）または `telnet` を使用すれば、もう少し高度な手法で TCP 接続をテストできます:

```sh
$ nc -zv customers.gitlab.com 443

Connection to customers.gitlab.com 443 port [tcp/https] succeeded!
```

```sh
$ echo "." | telnet customers.gitlab.com 443

Trying 104.18.20.224...
Connected to customers.gitlab.com.
Escape character is '^]'.
Connection closed by foreign host.
```

### HTTP/S 接続の確認

これを確認する最もシンプルな方法は `curl` の使用です。具体的には `https://customers.gitlab.com` に [HEAD リクエスト](https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods/HEAD) を送信することで、TCP 接続性の確認と、安全な TLS 接続が利用可能であることの両方を確認できます:

```sh
curl -I https://customers.gitlab.com/
```

成功した応答は通常 `302`（Found）のようになり、接続が成功し、customers.gitlab.com がリダイレクションで応答したことを意味します。より簡潔には:

```sh
$ curl -IL -q https://customers.gitlab.com/ | grep -i location

location: https://customers.gitlab.com/customers/sign_in
```

これは成功を示します。

### SSL/TLS のトラブルシューティング

ほとんどの場合、システムの `curl` が動作していれば、TLS 設定をさらに確認する必要はありません。ただし GitLab では [様々な TLS および SSL 証明書設定の構成オプション](https://docs.gitlab.com/omnibus/settings/ssl/)（[カスタム認証局](https://docs.gitlab.com/omnibus/settings/ssl/#install-custom-public-certificates) を含む）が提供されているため、より高度な SSL/TLS のトラブルシューティングが必要な場合があります。

例えば、SSL パケットインスペクションが採用されている場合のように、顧客のサーバーがカスタム認証局（CA）を使用している場合、そのルート CA 証明書をサーバーの `/etc/gitlab/trusted-certs` に追加し、その後 [GitLab を再構成](https://docs.gitlab.com/administration/restart_gitlab/#omnibus-gitlab-reconfigure) する必要があります。

- 詳細については、[GitLab における SSL の動作方法](https://docs.gitlab.com/omnibus/settings/ssl/#details-on-how-gitlab-and-ssl-work) および [GitLab における SSL のトラブルシューティング](https://docs.gitlab.com/omnibus/settings/ssl/ssl_troubleshooting.html) のドキュメントを参照してください。特に、SSL 接続性を確認・検証するためにパッケージ版の `openssl` を利用することについて:

```sh
echo | /opt/gitlab/embedded/bin/openssl s_client -connect customers.gitlab.com:443
```

[SSL Server Test](https://www.ssllabs.com/ssltest/analyze.html?d=customers.gitlab.com&hideResults=on&latest) を実行し、そのページを顧客に提供することも有用かもしれません。このページの出力のほとんどは私たちのサポート範囲を超えていますが、提供することで顧客のネットワーク管理者が自分側で追加のトラブルシューティングを行う際に役立つかもしれません。

### アクティベーション中の DevTools > Network HAR ファイルの取得

ユーザーの [ブラウザの DevTools](https://developer.mozilla.org/en-US/docs/Learn_web_development/Howto/Tools_and_setup/What_are_browser_developer_tools) は、特に GitLab の内部 API（[graphql](https://docs.gitlab.com/api/graphql/)）レスポンスを表示できるため、クラウドライセンス接続の失敗を診断するのに非常に役立ちます。

1. DevTools を開き（通常 `ctrl+shift+i`）、Network タブに移動します。
1. `/admin/subscription` のページを（再）読み込みします。
1. クラウドライセンスコードのアクティベーションを試みます。
1. DevTools > Network で、`graphql` リソースを探し、Response ペインを表示します。ここにエラーが記録されている場合があるので、お気軽にご共有ください。

- 複数の `graphql` リソースが存在する可能性があり、すべてがクラウドライセンスのアクティベーションプロセスに関連しているわけではありません。

DevTools には大量の情報が表示されるため、顧客に [ネットワーク HAR ファイルを生成](https://support.zendesk.com/hc/en-us/articles/4408828867098-Generating-a-HAR-file-for-troubleshooting) してチケットに添付してもらい、私たちが詳しく検査することを提案してください。

注意: 記録した GitLab セッションのセッション認証情報を無効化するため、ユーザーにサインアウトするよう助言してください。
詳細は [sec.Okta.com/harfiles](https://sec.okta.com/harfiles) を参照してください。

### Rails アプリケーション内からクラウドライセンスの SeatLink 試行をシミュレーションする

`ping` や `curl` などのシステムツールやバイナリは便利ですが、GitLab は独自の多くのツールやバイナリをバンドルする非常に複雑なアプリケーションであることに注意してください。GitLab アプリケーションは、システム提供のバイナリとは少し異なる方法でアウトバウンド接続を処理する場合があります。これを確認する最良の方法は、[rails console](https://docs.gitlab.com/administration/operations/rails_console/) から直接接続が可能であることを確認することです。サーバーにログインし、`sudo gitlab-rails console` で rails console に入って次を実行します:

```ruby
URI_PATH = '/api/v1/seat_links'
base_uri = EE::SUBSCRIPTIONS_URL # GitLab バージョン 16.0.0 未満の場合
base_uri = ::Gitlab::Routing.url_helpers.subscription_portal_url # GitLab バージョン 16.0.0 以上の場合

head_resp = Gitlab::HTTP.head(base_uri)

pp head_resp
```

このコマンドは、典型的な `curl -I` が返すものと非常に似た出力を返しますが、内部の Ruby クラスを使用して GitLab と同じ方法でリクエストをルーティングするため、特に GitLab アプリケーション内で発生している潜在的な問題を明らかにします。

### `curl` を用いたクラウドライセンス SeatLink 試行のシミュレーション

GitLab がインストールされていない別のネットワークセグメントから SeatLink クエリが動作するかを確認する必要がある場合、Rails console を使用して同等の `curl` コマンドを生成できます。これを行うには、`sudo gitlab-rails console` で Rails console に入り、以下のコードスニペットを入力します:

```ruby
headers = Gitlab::SubscriptionPortal::Client.send(:json_headers)
base_url = Gitlab::SubscriptionPortal::Client.send(:base_url)
params = Gitlab::SeatLinkData.new.to_json
path = "api/v1/seat_links"
curl_cmd = ['curl --trace - --trace-time -X POST']
curl_cmd << "\"#{File.join(base_url, path)}\""
headers.each do |key, value|
curl_cmd << "-H \"#{key}: #{value}\""
end
curl_cmd << "-d '#{params}'"
puts curl_cmd.join(" \\\n  ")
```

結果は以下のようになります:

```shell
curl --trace - --trace-time -X POST \
  "https://customers.gitlab.com/api/v1/seat_links" \
  -H "User-Agent: GitLab/17.6.1-ee" \
  -H "Accept: application/json" \
  -H "Content-Type: application/json" \
  -d '{"gitlab_version":"17.6.1-ee","timestamp":"2025-01-21T12:00:11Z","license_key":"xxxx...\n","max_historical_user_count":2,"billable_users_count":2,"hostname":"gitlab.example.com","instance_id":"aaaaaaaa-0000-0000-aaaa-aaaaaaaaaaaa","add_on_metrics":[{"add_on_type":"duo_enterprise","purchased_seats":10,"assigned_seats":3}]}'
```

`--trace - --trace-time` パラメーターに注目してください。これにより `curl` は大量のデバッグ出力を生成します。必要に応じて `--proxy [protocol://]host[:port]` を追加することもできます。

### カスタムプロキシ設定

現時点でクラウドライセンシングは公式にはネットワークプロキシ、ディープパケットインスペクションなどをサポートしていません。ただし、顧客側のカスタムネットワークプロキシ設定を顧客が把握している場合、`no_proxy` 環境変数を介して GitLab がそれらを無視するよう構成できる場合があります。詳細は [カスタム環境変数の設定](https://docs.gitlab.com/omnibus/settings/environment-variables.html) のドキュメントで確認できます。

### GraphQL API でライセンスをアクティベートする

ライセンスのアクティベーション機能が利用できない場合（例: 課金ページで 500 エラーが発生している場合）、[GraphQL API](https://docs.gitlab.com/api/graphql/reference/) を使用して [`Mutation.gitlabSubscriptionActivate` エンドポイント](https://docs.gitlab.com/api/graphql/reference/#mutationgitlabsubscriptionactivate) でクラウドライセンスを直接アクティベートできます。この方法では、**インスタンスに既にアクティブなクラウドライセンスがある場合でも** サブスクリプションをアクティベートできます。この方法は、別のキーをアクティベートする前に UI 経由で既存のライセンスを削除することによって発生するダウンタイムを回避するのに有用です:

1. 顧客に `https://<their-self-managed-gitlab-site.com>/-/graphql-explorer` に移動してもらいます。
1. `<activation code>` を実際の 24 文字のクラウドアクティベーションコードに置き換えて、次のミューテーションを実行します:

```graphql
mutation {
  gitlabSubscriptionActivate(
    input: {
      activationCode: "<activation code>"
    }
  ) {
    errors
    license {
      id
      activatedAt
      startsAt
      usersInLicenseCount
      lastSync
    }
  }
}
```

エラーがない場合、ミューテーションは次の応答を返します:

```graphql
{
  "data": {
    "gitlabSubscriptionActivate": {
      "errors": [],
      "license": {
        "id": "gid://gitlab/License/12345",
        "activatedAt": "2023-07-28",
        "startsAt": "2023-07-04",
        "usersInLicenseCount": 10,
        "lastSync": "2023-07-28T18:34:14Z"
      }
    }
  }
}
```

## 一般的なヒント

1. 顧客の `Cloud Activations` タブで封筒ボタンをクリックすると、アクティベーションコードをメール経由で再送信できます。
