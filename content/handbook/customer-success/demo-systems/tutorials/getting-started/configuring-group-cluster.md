---
title: "グループレベルの Kubernetes クラスターで GitLab を設定する"
description: "Google Kubernetes クラスターで GitLab を設定する方法"
upstream_path: /handbook/customer-success/demo-systems/tutorials/getting-started/configuring-group-cluster/
upstream_sha: b4eeb07f0d5f46e2fc5f8572be1a2547261aed89
translated_at: "2026-04-26T02:17:48Z"
translator: claude
stale: false
lastmod: "2025-01-04T01:51:25+00:00"
---

## 概要

GitLab デモクラウドのアカウントが作成されると、Runner と CI ジョブはデフォルトでインスタンスレベルの事前設定されたクラスターを使用します。インスタンスレベルのクラスターはバックグラウンドで透過的に動作するよう設計されており、デモシステムユーザーとしてのカスタマイズや管理・レポーティング機能はサポートされていません。

[GitLab Sandbox Cloud](/handbook/company/infrastructure-standards/realms/sandbox/#individual-aws-account-or-gcp-project) を使用してプロビジョニングできる独自の GCP プロジェクト内で、独自の Kubernetes クラスターを作成できます。独自のクラスターを持つことで、問題が発生した CI ジョブやポッドのトラブルシューティングのためにクラスターへの完全な管理者アクセスを持てます。

このチュートリアルでは、クラスターを作成して GitLab グループに接続する方法を紹介します。Google Cloud Platform（GCP）コンソールにアクセスしてクラスターを確認し、Google Cloud Shell を使用してクラスター上で `kubectl` コマンドを実行し、GitLab デモクラウド Omnibus インスタンスにアクセスして事前作成されたグループを Kubernetes クラスターで設定します。

クラスターリソースをより直感的な UI で管理するには、[K9s](https://k9scli.io/) の使用をお勧めします。

### 廃止予告

クラスターを接続するこの方法は GitLab v14.5 で廃止されました。このチュートリアルは教育目的のために保存されています。クラスターを GitLab に接続する新しい方法については、[Kubernetes エージェント](https://docs.gitlab.com/ee/user/clusters/agent/)のドキュメントをご参照ください。

### 前提条件

- [デモシステムアカウント](/handbook/customer-success/demo-systems/#access-shared-omnibus-instances)の作成とアクセス
- [GitLab Sandbox Cloud](/handbook/company/infrastructure-standards/realms/sandbox/#individual-aws-account-or-gcp-project) を使用して GCP プロジェクトを作成する

## ステップバイステップの手順

### タスク 1. Google Cloud Platform（GCP）コンソール（Web UI）を使用して Kubernetes クラスターを作成する

GCP プロジェクトへのアクセスについての追加サポートは、[GitLab Sandbox Cloud](/handbook/company/infrastructure-standards/realms/sandbox/#accessing-your-gcp-project) のハンドブック手順をご参照ください。

1. Web ブラウザで **新しいタブまたはウィンドウ** を開きます。

2. [https://console.cloud.google.com](https://console.cloud.google.com) にアクセスします。

3. まだサインインしていない場合は、GitLab のメールアカウントでサインインしてください。

4. 青いトップナビゲーションバーで、`Google Cloud Platform` タイトルの*右側*のドロップダウンメニューを見つけます。これはアクセス権を持つプロジェクト（認証レルム）です。プロジェクト（例：`jmartin-xxxxxxxx`）が選択されていることを確認してください。

5. 青いトップナビゲーションバーで、`Google Cloud Platform` タイトルの*左側*のハンバーガーメニューアイコンを見つけてクリックします。Google Cloud Platform で利用可能なすべてのサービスが表示されます。**コンピューティング** セクションで **Kubernetes Engine** または **Kubernetes Engine > クラスター** をクリックします。

   <img src="https://storage.googleapis.com/gitlab-demosys-docs-assets/tutorials/getting-started/configuring-group-cluster-19.png"  style="width: 50%" alt=""/>

6. *Kubernetes クラスター* ページで **有効にする** をクリックして Google API サービスを初期化します。*この操作には数分かかる場合があります。*

   <img src="https://storage.googleapis.com/gitlab-demosys-docs-assets/tutorials/getting-started/configuring-group-cluster-20.png"  style="width: 75%" alt=""/>

7. 新しいページで **作成** をクリックし、`GKE Standard` の*右側*の **設定** をクリックします。

   <img src="https://storage.googleapis.com/gitlab-demosys-docs-assets/tutorials/getting-started/configuring-group-cluster-22.png"  style="width: 75%" alt=""/>

   <img src="https://storage.googleapis.com/gitlab-demosys-docs-assets/tutorials/getting-started/configuring-group-cluster-21.png"  style="width: 50%" alt=""/>

8. *左側*のメニューで以下のセクションをクリックしてクラスターを設定します:

   - **クラスターの基本**: クラスター名（例：`jmartin-cluster`）を指定し、「ロケーションタイプ」として **ゾーン** を選択します。

     <img src="https://storage.googleapis.com/gitlab-demosys-docs-assets/tutorials/getting-started/configuring-group-cluster-23.png"  style="width: 75%" alt=""/>

   - **ノードプール > default-pool**: 「ノード数」に **1**（一つ）を指定します。

     <img src="https://storage.googleapis.com/gitlab-demosys-docs-assets/tutorials/getting-started/configuring-group-cluster-24.png"  style="width: 75%" alt=""/>

   - **ノードプール > default-pool > ノード**: 「マシンタイプ」に **e2-standard-2** を選択します（推奨）。

     <img src="https://storage.googleapis.com/gitlab-demosys-docs-assets/tutorials/getting-started/configuring-group-cluster-25.png"  style="width: 75%" alt=""/>

9. 下部のナビゲーションバーで **作成** をクリックします。クラスターが表示されたら、クラスター名をクリックします。

   ![クラスター選択](https://storage.googleapis.com/gitlab-demosys-docs-assets/tutorials/getting-started/configuring-group-cluster-3.png)

10. クラスターのダッシュボードが表示されます。将来のアクセスのためにこのページをブックマークすることをお勧めします。

### タスク 2. クラスター CA 証明書の取得

1. 一時参照のために値をコピー&ペーストできるよう、テキストエディターで新しいファイルを作成します。

1. クラスターのダッシュボード上部にあるクラスター名をテキストファイルにコピー&ペーストします（例：`jmartin-cluster`）。

1. GCP コンソールのクラスターダッシュボードのブラウザで、エンドポイント（IP アドレス値）の隣にある **認証情報を表示** リンクを見つけてクリックします。

   ![認証情報を表示リンク](https://storage.googleapis.com/gitlab-demosys-docs-assets/tutorials/getting-started/configuring-group-cluster-5.png)

1. *クラスターの認証情報* ポップアップモーダルウィンドウで、**各値をテキストエディターファイルにコピー&ペースト** します。クラスター CA 証明書の値については、`BEGIN CERTIFICATE` と `END CERTIFICATE` のハイフン行を含めるようにしてください。

1. 右下隅の **閉じる** ボタンをクリックします。

### タスク 3. `gitlab-admin` サービスアカウントを設定するための Google Cloud Shell への接続

> これらの手順は、デモシステムインフラの具体的な手順を示すために [GitLab ドキュメント](https://gitlab-core.us.gitlabdemo.cloud/help/user/project/clusters/add_remove_clusters#add-existing-cluster)からカスタマイズされています。

1. GCP コンソールのクラスターダッシュボードで、ページ上部（青いトップナビゲーションの検索バーの下）にある **接続** ボタンを見つけてクリックします。

1. *クラスターへの接続* ポップアップモーダルで、**クラウドシェルで実行** ボタンをクリックします。

   `kubectl` と `gcloud` コマンドラインツールの経験がある場合は、表示されているコマンドを任意で使用できます。ローカルで使用したい場合は、ここからインストールする必要があります（[kubectl](https://kubernetes.io/docs/tasks/tools/#install-with-homebrew-on-macos)、[gcloud](https://cloud.google.com/sdk/docs/downloads-versioned-archives#installation_instructions)）。

   ![クラウドシェルアクセス](https://storage.googleapis.com/gitlab-demosys-docs-assets/tutorials/getting-started/configuring-group-cluster-4.png)

1. ブラウザウィンドウの下部にターミナルウィンドウが表示されます。Cloud Shell のプロビジョニングが完了するまでに数分かかる場合があります。

   Cloud Shell は、ローカルマシンを設定せずにブラウザでターミナルアクセスができるよう Google が提供する小さなコンテナです。

1. Cloud Shell ターミナルが表示されると、最初の行にはロールベースのアクセス制御（RBAC）を使用してクラスターの資格情報を取得するコマンドが事前入力されています。**単に ENTER キーを押してください。**

   ```console
   jmartin@cloudshell:~ (jmartin-xxxxxxxx)$ gcloud container clusters get-credentials jmartin-cluster --zone us-central1-c --project jmartin-xxxxxxxx
   ```

   ```text
   Fetching cluster endpoint and auth data.
   kubeconfig entry generated for demosys-us-jmartin-cluster.
   ```

   上記の例に示す出力が表示されない場合は、GCP アカウントに権限の問題がある可能性があり、`#demo-systems` チームにサポートを依頼してください。

1. **以下のコマンドを使用して** API URL を取得し、**出力された URL をテキストファイルにコピー&ペースト** します。

   ```console
   kubectl cluster-info | grep 'Kubernetes master' | awk '/http/ {print $NF}'
   ```

   最近のバージョンの Kubernetes の場合:

   ```console
   kubectl cluster-info | grep 'Kubernetes control plane' | awk '/http/ {print $NF}'
   ```

   ```text
   https://35.239.222.203
   ```

   これにより、GCP コンソール Web UI で確認できるエンドポイント IP と同じ IP アドレスが `https://` プレフィックス付きで返されます。この URL はクラスターの Web UI を提供するわけではなく、API 用途のみに使用されることに注意してください。

   ![Cloud Shell の例](https://storage.googleapis.com/gitlab-demosys-docs-assets/tutorials/getting-started/configuring-group-cluster-13.png)

1. **以下のコマンドを使用して** サービスアカウントを作成します。

   ```console
   kubectl create sa gitlab-admin -n kube-system
   kubectl create clusterrolebinding gitlab-admin --serviceaccount=kube-system:gitlab-admin --clusterrole=cluster-admin
   ```

   確認メッセージが表示されます。

   ```text
   serviceaccount "gitlab-admin" created
   clusterrolebinding "gitlab-admin" created
   ```

1. **以下のコマンドを使用して** `gitlab-admin` サービスアカウントの API トークンを取得し、`token` の値をテキストエディターにコピー&ペーストします。

   ```console
   kubectl -n kube-system describe secret $(kubectl -n kube-system get secret | grep gitlab-admin | awk '{print $1}')
   ```

   ```text
   Name:         gitlab-admin-token-b5zv4
   Namespace:    kube-system
   Labels:       <none>
   Annotations:  kubernetes.io/service-account.name=gitlab-admin
                 kubernetes.io/service-account.uid=bcfe66ac-39be-11e8-97e8-026dce96b6e8

   Type:  kubernetes.io/service-account-token

   Data
   ====
   namespace:  11 bytes
   token:      eyJhbGciOiJSUzI1NiIsImtpZCI6ImFCSFZicS1DbUpYbkZDNnRBcnc0TzhYeDNXbnBJMWoxck93ZHI3UkhOYVUifQ.eyJpc3MiOiJrdWJlcm5ldGVzL3NlcnZpY2VhY2NvdW50Iiwia3ViZXJuZXRlcy5pby9zZXJ2aWNlYWNjb3VudC9uYW1lc3BhY2UiOiJrdWJlLXN5
   c3RlbSIsImt1YmVybmV0ZXMuaW8vc2VydmljZWFjY291bnQvc2VjcmV0Lm5hbWUiOiJnaXRsYWItYWRtaW4tdG9rZW4tanI1bTciLCJrdWJlcm5ldGVzLmlvL3NlcnZpY2VhY2NvdW50L3NlcnZpY2UtYWNjb3VudC5uYW1lIjoiZ2l0bGFiLWFkbWluIiwia3ViZXJuZXRlcy5pby9zZXJ
   2aWNlYWNjb3VudC9zZXJ2aWNlLWFjY291bnQudWlkIjoiOGZhODFkMzktZTM0NC00ZDQxLTkzMmEtZmNkYzViOGY5NTRkIiwic3ViIjoic3lzdGVtOnNlcnZpY2VhY2NvdW50Omt1YmUtc3lzdGVtOmdpdGxhYi1hZG1pbiJ9.loW-jWN9Ktvoi0z34y2jaTCcr9SiPH-v_X_pvXYMfeus7
   T84mSqIztkTBW9S8V2mZ_Be_QVbVMJERjUDrCyKwcvH1vwSJPNuYFJLCONDbevm1i9VgJz-ieCk_Qtl0FC1-gnCKZmJot76FEQpXjGrwRmZ0JQDxWtg680bLxEYqv7DZXcZzWNusdYOufziveiU9xE8b1XiprqeEj6Gy7BzI9jeCxGDAnC0Ff7D5rgAGi6GNayrGWZ8YXYvi1dhEekG-pW8
   MkZ8MTKopynxgLJ8ksv_vzCRSiwQ79H7mSR3TwTXoqjjzD3XOY2gIACGt2tpLRJu3mTuUQWkrL69bfLFnw
   ca.crt:     1115 bytes
   ```

1. テキストエディターで、**トークンの改行を削除して** 1 行にします。

   GitLab UI に貼り付ける際、改行はトークン内でスペースとして表示され、改行を削除しないと無効な資格情報による接続エラーが発生します。

   ![改行前](https://storage.googleapis.com/gitlab-demosys-docs-assets/tutorials/getting-started/configuring-group-cluster-6.png)

   ![改行後](https://storage.googleapis.com/gitlab-demosys-docs-assets/tutorials/getting-started/configuring-group-cluster-7.png)

1. クラスターを GitLab から接続するために必要な資格情報の取得が完了しました。

### タスク 4. GitLab インスタンスへのアクセス

GitLab Omnibus インスタンスへのアクセス方法は、[デモシステムハンドブックページ](/handbook/customer-success/demo-systems/#access-shared-omnibus-instances)の手順をご参照ください。

### タスク 6. GitLab グループに Kubernetes クラスターを追加する

管理セクションからではなく、必ず独自のグループ内でクラスターを設定することが重要です。管理セクションで変更を行うと、チーム全体に影響が出る破壊的変更になります。デモ目的でアカウントに付与されている管理者権限には十分注意してください。

1. グループ（例：`Jeff Martin`）の左側サイドバーで **Kubernetes** を見つけてクリックします。

1. Kubernetes ページには利用可能なクラスターの一覧が表示されます。グループクラスターを追加していない場合は、インスタンスクラスターのみが表示されます。

1. 右上隅の **Kubernetes クラスターを追加** ボタンをクリックします。

    ![クラスターを追加ボタン](https://storage.googleapis.com/gitlab-demosys-docs-assets/tutorials/getting-started/configuring-group-cluster-8.png)

1. *Kubernetes クラスターインテグレーションを追加* ページで **既存のクラスターを追加** タブをクリックします。

1. フォームフィールドに以下の値を使用し、テキストエディターから適切な値をコピー&ペーストします。

   ```text
   Kubernetes クラスター名:     （コピー&ペースト — 例：jmartin-cluster）
   環境スコープ:                 *
   API URL:                     （コピー&ペースト — 例：https://35.239.222.203）
   CA 証明書:                   （コピー&ペースト）
   サービストークン:             （コピー&ペースト）
   RBAC 対応クラスター:          チェック済み
   GitLab 管理クラスター:        チェック済み
   ```

1. **Kubernetes クラスターを追加** をクリックします。

    ![クラスターフォームの例](https://storage.googleapis.com/gitlab-demosys-docs-assets/tutorials/getting-started/configuring-group-cluster-9.png)

## まとめ

GitLab 上のグループで Kubernetes クラスターの設定が完了しました。

GCP コンソールのタブを閉じて、Kubernetes が統合された GitLab の使用を続けてください。
