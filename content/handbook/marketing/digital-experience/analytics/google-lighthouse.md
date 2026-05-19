---
title: "Google Lighthouse"
description: "Google Lighthouse は、Buyer Experience サイトのパフォーマンスを経時的に測定するために使用されています。"
upstream_path: /handbook/marketing/digital-experience/analytics/google-lighthouse/
upstream_sha: 2d678e92f3fbc59843a2973bbfa95041c6aef07f
translated_at: "2026-04-30T00:00:00Z"
translator: claude
stale: false
lastmod: "2024-07-17T16:43:47+00:00"
---

関連リンク

* GitLab 上のプロジェクトリンク: <https://gitlab.com/gitlab-com/marketing/digital-experience/lighthouse-ci-server>
* ドキュメント: <https://github.com/GoogleChrome/lighthouse-ci/blob/main/docs/server.md>

### Google Lighthouse CI サーバーとは？

* これは、さまざまなコミットに紐付いた過去の lighthouse スコアを保持する Web アプリです。現状、ホームページと pricing ページで実行するように設定されています。
  * `main` へのマージごとに lighthouse を実行します

### lighthouse スコアで何を見るか？

* Lighthouse はより良いサイトを作るためのツールです。すべての項目で 100 点を取ることに頭を悩ませるよりも、もっと有意義な使い方があります。
* 主要ページを改善・モニタリングするための、簡単に手が届く改善対象を見つけるのに使います。
* より大きなサイトプロジェクトのエビデンスとして使います。

### この Web プロジェクトのコードはどこにありますか？

* https://gitlab.com/gitlab-com/marketing/digital-experience/lighthouse-ci-server main ブランチが更新されたときには、新しいバージョンを Heroku にアップロードする必要があります。詳細は [Heroku レシピ](https://github.com/GoogleChrome/lighthouse-ci/blob/main/docs/recipes/heroku-server/README.md) を参照してください

### この Web アプリにかかるコストはどのようなものですか？

* Heroku は無料枠を廃止しました。ただし、価格はかなり穏当です。Dyno は上限を設定すべきで、この金額以上を支払うことはありません。データベースエントリが多くなりすぎた場合はアップグレードが必要かもしれません。その時点でセルフホスティングを検討すべきでしょう。GitLab はこのような Web アプリを動かす適切なインフラを保有しています。
  * サーバーの最低有料プラン（$7 USD/月）
  * Postgres database mini（$5 USD/月）10k 行
    * いずれは超過するでしょう。$9/月で 1,000 万行が使えます。現在の本番スコープではおそらくこちらが必要になります。データベースサイズ無制限の最低プランは $50/月で、それも選択肢になります。

### このプロジェクトに必要な build トークンや admin トークンなどの認証情報はどこにありますか？

* これらは Buyer Experience プロジェクトに CI 変数として追加されています。現在、build 変数と URI 変数が使用されています。admin 変数は現在は目的なしに置かれており、純粋に利便性のために使われています。これにより、BE プロジェクトで maintainer 権限を持つ人なら誰でも、必要に応じてそこから取得できます。
* CI 変数はマスクされ、保護ブランチで実行できるよう許可されていることを確認してください: https://docs.gitlab.com/ee/ci/variables/index.html#mask-a-cicd-variable
  * 変更される可能性はありますが、再評価できます。

### このプロジェクトの Heroku アカウントは誰が保有していますか？

* この Heroku アカウントは `jgarcia@gitlab.com` に紐付いています。
