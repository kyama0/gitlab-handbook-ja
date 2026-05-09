---
title: クラウドサービスのコスト最適化
category: Infrastructure for troubleshooting
description: "クラウドサービスをコスト効率よく利用するためのガイドライン"
upstream_path: /handbook/support/workflows/cost-optimizations-with-cloud-instances/
upstream_sha: 0353e616a41b1d1664a95cc83c80b01f990a912f
translated_at: "2026-05-08T20:30:00Z"
translator: claude
stale: false
---

クラウドサービスはサポート業務における貴重なリソースであり、GitLab や GitLab 関連のデプロイをさまざまな構成でホストできるようにしてくれます。私たちは恒久的なインスタンスを日常的なリソースとして使用したり、エフェメラルなデプロイを使ってテスト、検証、再現、新しいアイデアの探索を、CPU、メモリ、バッテリー寿命などのローカルリソースを消費せずに迅速に行えます。

非常に有用ではあるものの、クラウドサービスには時間単位または期間単位の料金が発生します。一見するとそのコストは最小限に思えるかもしれませんが、月額数千ドルにまで簡単に膨れ上がる可能性があります。

このページの目的は、既存のサポートワークフローへの影響を最小限に抑えつつ、[会社のお金を自分のお金のように使う](/handbook/finance/spending-company-money/#guidelines)ためのワークフローを提供することです。

## 「クラウドサービス」の定義

このページの文脈では、クラウドサービスとは Digital Ocean、Google Cloud Platform、Amazon Web Services のような IaaS プロバイダーから借りた、課金対象のインフラ製品を指します。

## コスト最適化のための一般的なヒント

- サービスがもう使われていない場合、破棄／終了できます
- サービスが現在は使われていないが、後で使う予定がある場合は、電源を切ることができます
- デプロイを削除した後でも、ロードバランサーやデータベースなど、依存する他のサービスがまだ稼働している可能性があり、それらをクリーンアップできます
- 可能な限り最小スペックのサービスにデプロイしましょう
- [Digital Ocean](https://www.digitalocean.com/pricing)、[Google Cloud Platform](https://cloud.google.com/pricing)、[Amazon Web Services](https://aws.amazon.com/pricing/) を選ぶ際は、料金を考慮しましょう
- デプロイの性質が恒久的な場合は、オンデマンドインスタンスよりもリザーブドインスタンスを使う方がほとんどの場合は安価になります

## Cloud Native GitLab Helm Chart

### Google Cloud Platform (GCP)

デフォルト構成では、[Cloud Native GitLab Helm Chart](https://gitlab.com/gitlab-org/charts/gitlab/-/tree/master) は可用性要件を満たすために、3 つの Kubernetes ノードに GitLab サービスをデプロイします。各ノードの推奨は `n1-standard-4` [マシンタイプ](https://cloud.google.com/compute/docs/machine-types) です。合計するとこのデプロイは、なんと 12 vCPU と 45GB のメモリを使用します。サポートに関連するほぼすべてのシナリオでは、これほど大きなデプロイは不要であり、最小スペックを代わりに使用できます。

Cloud Native GitLab Helm Chart を最小スペックでデプロイするには:

- [クラスタブートストラップスクリプト](https://docs.gitlab.com/charts/installation/cloud/gke.html#scripted-cluster-creation)を実行する際に、環境変数 `NUM_NODES=1` を設定します
- デプロイで [最小スペックの値](https://gitlab.com/gitlab-org/charts/gitlab/-/blob/master/examples/values-gke-minimum.yaml) を使用するように設定します。これにより、デプロイが単一のノードに収まるようになります。サポートでは task-runner がしばしば必要になるため、デプロイ前に最小スペック値で task-runner を有効にしておきましょう。

### Minikube

GCP は必須ではなく、デフォルトの helm chart は [Minikube を使ってローカルにデプロイ](https://docs.gitlab.com/charts/development/minikube/) することもできます。
