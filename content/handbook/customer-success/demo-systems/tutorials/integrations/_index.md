---
title: "インテグレーション チュートリアル"
description: "GitLab デモシステムのインテグレーション チュートリアルでは、デモシステムインフラを第三者インテグレーションおよび関連技術インフラとともに使用するためのステップバイステップの手順を提供します。"
upstream_path: /handbook/customer-success/demo-systems/tutorials/integrations/
upstream_sha: b4eeb07f0d5f46e2fc5f8572be1a2547261aed89
translated_at: "2026-04-26T00:00:00Z"
translator: claude
stale: false
lastmod: "2024-08-08T22:55:54+00:00"
---

### Jenkins パイプラインの作成

[Jenkins パイプラインの作成](/handbook/customer-success/demo-systems/tutorials/integrations/create-jenkins-pipeline)

GitLab の Jenkins インテグレーションでは、リポジトリにコードをプッシュしたとき、またはマージリクエストが作成されたときに Jenkins ビルドをトリガーできます。さらに、マージリクエストウィジェットおよびプロジェクトのホームページでパイプラインのステータスを確認できます。

このチュートリアルでは、`Jenkinsfile` を含むプロジェクトの作成、Jenkins サーバー上でのプロジェクトの設定、GitLab Jenkins インテグレーション プラグインの設定、GitLab プロジェクトでのインテグレーションの有効化、そしてコミットを実行して GitLab と Jenkins 間でパイプラインがどのように連携するかを示す方法について説明します。
