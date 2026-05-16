---
title: ハンドブック埋め込みデモページ
type: docs
upstream_path: "/handbook/enterprise-data/platform/tableau/embed-demo/"
upstream_sha: "b751749fb746d2e0131db68b13218fc2e08cf6b2"
translated_at: "2026-04-29T10:00:00Z"
translator: claude
stale: false
lastmod: "2025-10-14T17:59:32+00:00"
---

これは Tableau 埋め込みデモページです。Tableau のビジュアライゼーションを内部ハンドブックに埋め込む方法を示すために使用されます。均一なエクスペリエンスとプレゼンテーションを実現するために、Tableau チャートとダッシュボードを埋め込む[ショートコード](http://handbook.gitlab.com/docs/shortcodes/#tableau-embeds)を使用します。

**重要:** 埋め込みコンテンツを表示するには、ユーザーに Tableau ライセンスが必要です。適切なライセンスを持たないユーザーにはダッシュボードが読み込まれません。

内部ハンドブックに埋め込まれたチャートを表示するには、ブラウザでサードパーティ Cookie を有効にする必要があります。内部ハンドブックサイトがパブリック Tableau サイトに接続する必要があり、このためにCookieを使用するためです。

## YML ファイルなしでハンドブックに直接埋め込む

### 内部 Tableau サイトからのビジュアライゼーション

この[埋め込み方法のデモ動画](https://youtu.be/Vry_yqUP2C8)をご覧ください。なお、現在は廃止されたレガシー Tableau Public サイトへの埋め込みに関する情報が含まれています。トレーニングの多くは内部ハンドブックへの埋め込みにも引き続き関連しています。

内部 Tableau サイトのビューのソース URL は、ビューに移動して画面上部の `Share` オプションを選択し、`Copy Link` オプションを選択することで確認できます。埋め込みチャートは Tableau サイトへのログインのみが必要で、Tableau ライセンスを持つユーザーにのみ表示されます。GitLab チームメンバーは OKTA SSO でログインしてください。

![tableau share](/images/enterprise-data/platform/tableau/embed-demo/tableau_view_share.png)

![tableau link](/images/enterprise-data/platform/tableau/embed-demo/tableau_view_link.png)

## YML ファイルを使用したパフォーマンスインジケーターまたはその他のビューの埋め込み

[内部ビューの YML ファイルを使用した PI 埋め込みプロセス全体を説明する動画はこちらです。](https://gitlab.zoom.us/rec/share/rK5olD88X0ZEzbbSmVFXB-jsMYfaD7V9j_ALTL89WJ4JZM1m_CugxAp_T1C5m87n.XK69XZAoRmndQglk?startTime=1706031218000)
パスコード: 6yz?njYI

YML ファイルを使用してビューを埋め込むには追加のステップがいくつかあります。実際のビューが表示されるハンドブックページにショートコードを直接追加しないためです。手順は以下のとおりです。

1. Tableau でビューの通常の URL を使用してください。埋め込みたい特定のビューに移動して「share」をクリックし、その URL をコピーして取得してください — ページ上部の通常の URL バーの URL では動作しない場合があります。

2. プロセスが正しく機能するためには、データソースを「live」接続ではなく「extract」接続にする必要があります。

3. YML ファイルを更新する準備ができました。PI を更新したいハンドブックページに移動してページを編集します。そこで更新しようとしているファイルの名前がわかります。次のように表示されます：

    ```md
      {{</* performance-indicators "developer_relations_department" /*/>}}
    ```

4. [Gitlab.com リポジトリ](https://gitlab.com/gitlab-com/www-gitlab-com)に移動して、そのファイル名を「find file」で検索します。YML ファイルである必要があります。

5. マージリクエストを使用して、[パフォーマンスインジケーター YML ファイルのガイドライン](/handbook/enterprise-data/platform/tableau/tableau-developer-guide/#yml)に従って YML ファイルを更新してください。
