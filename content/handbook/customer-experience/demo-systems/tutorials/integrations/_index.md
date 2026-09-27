---
title: "インテグレーション チュートリアル"
description: "GitLab デモシステムのインテグレーション チュートリアルでは、デモシステムインフラを第三者インテグレーションおよび関連技術インフラとともに使用するためのステップバイステップの手順を提供します。"
upstream_path: /handbook/customer-experience/demo-systems/tutorials/integrations/
upstream_sha: 7a2e264cb798305fd5c92b586ef9fe633a730244
translated_at: "2026-09-27T00:10:26+00:00"
translator: codex
stale: false
lastmod: "2026-09-24T21:34:11+02:00"
---

### Jenkins パイプラインの作成

[Jenkins パイプラインの作成](/handbook/customer-experience/demo-systems/tutorials/integrations/create-jenkins-pipeline)

GitLab の Jenkins インテグレーションでは、リポジトリにコードをプッシュしたとき、またはマージリクエストが作成されたときに Jenkins ビルドをトリガーできます。さらに、マージリクエストウィジェットおよびプロジェクトのホームページでパイプラインのステータスを確認できます。

このチュートリアルでは、`Jenkinsfile` を含むプロジェクトの作成、Jenkins サーバー上でのプロジェクトの設定、GitLab Jenkins インテグレーション プラグインの設定、GitLab プロジェクトでのインテグレーションの有効化、そしてコミットを実行して GitLab と Jenkins 間でパイプラインがどのように連携するかを示す方法について説明します。
