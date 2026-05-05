---
title: "Postman"
description: "Postman の使用に関するガイドラインとベストプラクティス"
upstream_path: "/handbook/business-technology/tools/postman/"
upstream_sha: "b4eeb07f0d5f46e2fc5f8572be1a2547261aed89"
translated_at: "2026-04-25T09:00:00Z"
translator: claude
stale: false
---

<link rel="stylesheet" type="text/css" href="/stylesheets/biztech.css" />

## Postman ベストプラクティス

## Postman とは？

[Postman](https://www.postman.com/) は、開発者が開発・テスト中に HTTP API に対してリクエストを実行するのに役立つ優れたツールです。API ベースのインテグレーションを作成する際の R&D を加速させます。

## API 認証情報の共有に関するベストプラクティス

### 環境と API 認証情報の共有

Postman には、[Environments](https://learning.postman.com/docs/sending-requests/variables/managing-environments/) を使用して変数を共有する機能があります。

この機能を使用すると、認証情報の漏洩などのリスクが伴うことは明らかです。残念ながら、変数をユーザーに公開せずに環境を共有する方法はありません。そのため、推奨されるアプローチは、本番環境の認証情報が含まれる Postman 環境を**絶対に**共有しないことです。

本番環境の認証情報を Environment で使用する必要がある場合は問題ありませんが、共有ワークスペースには含めないようにしてください。その他の非本番環境については、他の開発者が素早く簡単に使用できるよう、それらの環境への閲覧者アクセスを共有することができます。

[Postman ドキュメント](https://learning.postman.com/docs/sending-requests/variables/managing-environments/#working-with-environments-as-a-team)には、チームで環境を管理する方法に関するさらなるガイダンスが含まれています。
