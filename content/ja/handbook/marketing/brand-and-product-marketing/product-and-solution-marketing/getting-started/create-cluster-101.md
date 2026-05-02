---
title: "101 - Kubernetes クラスターの作成"
upstream_path: /handbook/marketing/brand-and-product-marketing/product-and-solution-marketing/getting-started/create-cluster-101/
upstream_sha: ce0ccdac3443c7d547631da8cba8f3148892a0c3
translated_at: "2026-04-30T12:00:00Z"
translator: claude
stale: false
---

## 目的:  GitLab の Auto DevOps と組み合わせて使う Kubernetes クラスターを手動で作成する

GitLab の Auto DevOps 機能を使うには、Kubernetes クラスターが起動している必要があります。
これは、Google Cloud Platform で Kubernetes クラスターを手動で作成するためのステップ・バイ・ステップガイドです。

詳細は [Auto DevOps](https://docs.gitlab.com/ee/topics/autodevops/) を参照してください。

### 準備

Google Cloud Platform アカウントが必要です。GitLab の従業員はこれを持っています。GitLab のアカウントでログインしていることを確認してください。

### Kubernetes クラスターを作成する手順

|  **手順**   | **見え方** |
| 1. ブラウザを開いて [Google Kubernetes Engine](https://console.cloud.google.com/kubernetes) にログインします  |
| 2. GitLab の従業員 - GitLab メールアドレスでサインインします。  |  |
| 3. GitLab の従業員は gitlab-demos プロジェクトを使用してください。それ以外の方は、作業用のプロジェクトを選択または作成してください。| ![gitlab demos](/images/workshop/k8s/2_gitlab_demos.png)|
| 4. サイドバーの COMPUTE 配下から Kubernetes Engine -> Clusters を選択します。|  ![kubernetes engine](/images/workshop/k8s/3_clusters.png)|
| 5. CREATE CLUSTER をクリックします。 | ![kubernetes engine](/images/workshop/k8s/4_create_cluster.png)|
| 6. クラスター名を設定します。<br> GitLab Product and Solution Marketing の従業員は、命名規則は sm_\<yourname\>、Product Marketing サブグループの場合は pmm_\<yourname\>、Technical Marketing グループの場合は tmm_\<yourname\> です。全体の名前は短く（最大 16 文字）保ってください。<br>ノード数を 3 に設定し、追加設定のためページを展開します。| ![kubernetes engine](/images/workshop/k8s/5_name_pool.png)|
| 7. GitLab の従業員は Networking で 'demonet' ネットワークを選択してください。それ以外の方はネットワークを選択または作成してください。  | ![kubernetes engine](/images/workshop/k8s/6_cluster_network.png)|
| 8. レガシー認可を有効にします。 | ![kubernetes engine](/images/workshop/k8s/7_legacy_auth.png)|
| 9. クラスター作成の準備が整いました。Create をクリックします。 | ![kubernetes engine](/images/workshop/k8s/8_create.png)|
| 10. クラスターの作成には数分かかります。作成されると、リストに作成したばかりのクラスターが表示されます。| ![kubernetes engine](/images/workshop/k8s/9_cluster_list.png)|
| 11. これで、GitLab プロジェクトを Kubernetes と連携させ、Auto DevOps 機能を使う準備ができました。
| 12. クリーンアップ手順 PLACEHOLDER ||
