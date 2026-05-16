---
title: "GitLab デモ用の AWS EKS クラスタを作成する"
upstream_path: /handbook/marketing/developer-relations/technical-marketing/howto/eks-cluster-for-demo/
upstream_sha: 12455b65f7f70cf1c18488a44bbab3cff0097c8a
translated_at: "2026-05-01T00:00:00Z"
translator: claude
stale: false
lastmod: "2024-05-30T08:11:40+00:00"
---

## アカウント情報

現時点では、AWS リソースを利用するための共有 AWS アカウントは用意されていません。当面は個人のクレジットカードでアカウントを開設し、経費精算してください。無料トライアルから始めることもできます。チーム共有アカウントについては検討中です。

## クラスタの作成

EKS でクラスタをセットアップするには多くの手順がありますが、作業をオーケストレーションするのにかなり優れたサードパーティ製スクリプトが見つかりました。それは [eksctl](https://eksctl.io/) と呼ばれるものです。スクリプトを実行する場所のローカルにこれが必要です。また、クラスタの作成と GitLab のデモ用設定の手間を軽減するために私たちが作成したユーティリティ群（単なるシェルスクリプト）もあります。これらは https://gitlab.com/dangordon/eks-utils.git にあります。

これらのスクリプトのうち、`create-cluster.sh` スクリプトは、使用するクラスタを作成するための eksctl のラッパーとして利用できます。

## クラスタを GitLab にアタッチする

GitLab には現在、Kubernetes クラスタをアタッチするための AWS EKS への組み込みインテグレーションはありません。EKS クラスタを GitLab にアタッチするには、Kubernetes の「Add Kubernetes Cluster」ページで「Add existing cluster」オプションを使用する必要があります。

これを行うには、クラスタ固有の情報（API URL エンドポイント、CA 証明書、Service Token）が必要です。[eks-utils スクリプト](https://gitlab.com/dangordon/eks-utils.git) は、必要な詳細情報を取得するために作成されました。また、クラスタ名も必要です。これは GitLab が参照するためのものなので何でもかまいませんが、両者を関連付けやすくするため、EKS で命名したクラスタ名と同じにすることをお勧めします。

このプロセスとドキュメントは進化させる必要があり、また進化していくべきです。これは MVC です。可能性としては、たとえば eks-utils の代わりに、クラスタの作成と GitLab への追加を行う kubectl プラグインとして書き直すことが考えられます。DigitalOcean の Eddie Zaneski 氏が彼の [GitLab Commit デモ](https://youtu.be/-shvwiBwFVI) のために [書いたもの](https://gitlab.com/eddiezane/kubectl-gitlab_bootstrap.git) を参考にしてください。
