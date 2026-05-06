---
title: "はじめ方チュートリアル"
description: "GitLab デモシステムのはじめ方チュートリアルは、インフラへのアクセスと使用方法、および関連するビジネスプロセスについてのステップバイステップの手順を提供します。"
upstream_path: /handbook/customer-success/demo-systems/tutorials/getting-started/
upstream_sha: b4eeb07f0d5f46e2fc5f8572be1a2547261aed89
translated_at: "2026-04-26T02:17:48Z"
translator: claude
stale: false
---

### グループレベルの Kubernetes クラスターで GitLab を設定する

[グループレベルの Kubernetes クラスターで GitLab を設定する](/handbook/customer-success/demo-systems/tutorials/getting-started/configuring-group-cluster)

GitLab デモクラウドのアカウントが作成されると、Runner と CI ジョブはデフォルトでインスタンスレベルの事前設定されたクラスターを使用します。インスタンスレベルのクラスターはバックグラウンドで透過的に動作するよう設計されており、デモシステムユーザーとしてのカスタマイズや管理・レポーティング機能はサポートされていません。

デモシステムチームが Google Cloud の Google Kubernetes Engine（GKE）サービスにプロビジョニングした独自の Kubernetes クラスターをリクエストできます。独自のクラスターを持つことで、問題が発生した CI ジョブやポッドのトラブルシューティングのためにクラスターへの完全な管理者アクセスを持てます。

このチュートリアルでは、クラスターの準備完了通知を受け取った後、クラスターを GitLab グループに接続する方法を紹介します。Google Cloud Platform（GCP）コンソールにアクセスしてクラスターを確認し、Google Cloud Shell を使用してクラスター上で `kubectl` コマンドを実行し、GitLab デモクラウド Omnibus インスタンスにアクセスして事前作成されたグループを Kubernetes クラスターで設定します。クラスターを追加した後、Helm・Prometheus をインストールし、独自の GitLab Runner をインストールします。
