---
title: GitLab Cloud Native chart デプロイのトラブルシューティング
category: Self-managed
description: kubeSOS を使った GitLab Cloud Native chart デプロイのトラブルシューティング
upstream_path: /handbook/support/workflows/troubleshooting_kubernetes/
upstream_sha: c8fa138220d8c6d69f811b17242d6d2f08e4e409
translated_at: "2026-05-08T04:02:00Z"
translator: claude
stale: false
lastmod: "2025-01-04T01:51:25+00:00"
---

## KubeSOS とは

[KubeSos](https://gitlab.com/gitlab-com/support/toolbox/kubesos/-/tree/master) は、[kubectl](https://kubernetes.io/docs/tasks/tools/#kubectl) と [helm](https://helm.sh/) を使って GitLab Cloud Native chart デプロイから GitLab クラスタの構成情報やログを取得するツールです。これらの情報は tar ファイルに圧縮され、GitLab デプロイのトラブルシューティングを支援するためにサポートチームと共有されます。

### 必要要件

- kubectl クライアント v1.16+
- helm 3.3.1+

## 使い方

スクリプトをダウンロードする方法:

```bash
wget https://gitlab.com/gitlab-com/support/toolbox/kubesos/-/raw/master/kubeSOS.sh

chmod +x kubeSOS.sh
./kubeSOS.sh [flags]

```

または `curl` を使う方法:

```bash
curl https://gitlab.com/gitlab-com/support/toolbox/kubesos/raw/master/kubeSOS.sh | bash -s -- [flags]
```

| Flags | 説明 | 必須 | デフォルト |
| :---- | :---------- | :--------- | :------ |
| `-n`  | namespace   | いいえ | "default" |
| `-r`  | helm chart のリリース | いいえ | "gitlab" |
| `-l app`  | ログ取得対象とするアプリケーションラベル（複数指定可） | いいえ | |
| `-L` | ログ取得対象アプリをインタラクティブに選択 | いいえ | n/a |
| `-s time`  | 5s、2m、3h のような相対指定で、それより新しいログのみ返す | いいえ | 0=全ログ |
| `-t time_stamp`  | 指定日時（RFC3339）以降のログのみ返す | いいえ | 全ログ |
| `-m maxlines` | ログごとのデフォルト最大出力行数を上書き（-1 = 制限なし） | いいえ | 10000 |
| `-p` | ログ各行に Pod 名・コンテナ名を付加する | いいえ | n/a |
| `-w log_timeout` | ログ生成の待機時間（秒）。時間内にログ収集が終わらない場合は増やす | いいえ | 60 |

データは `kubesos-<timestamp>.tar.gz` にアーカイブされます。

### アーカイブの展開

`tar` Linux ユーティリティを使って、データをフォルダに展開します。

```bash
tar -zxvf kubesos-<timestamp>.tar.gz
```

## GitLab インストールのトラブルシューティング

GitLab のような Cloud Native アプリケーションをトラブルシューティングする際に確認すべき主な領域は 2 つあります:

- **クラスタのセットアップ**: クラスタが [推奨事項](https://docs.gitlab.com/charts/installation/cloud/) に従って正しくセットアップされ、ノードに十分なリソースが割り当てられていることを前提とします。これを確認するために役立ついくつかのコマンドを見ていきます。

- **アプリケーションの障害**: こちらが主な調査対象であり、なぜ GitLab が動作していない、または正しく動作していないのかを特定していきます。

## クラスタのセットアップ

8vCPU と 30GB の RAM を備えたクラスタを推奨しているため、ノードに十分なリソースがあるかを確認することがチェック項目になります。`top` や `free` といった Unix コマンドでこれを確認します。

ノードが正しく登録されているか、想定しているすべてのノードが存在し、すべて `Ready` 状態にあるかを確認します。

```bash
kubectl get nodes
```

クラスタ全体の健全性に関する詳細情報を取得するには、次のコマンドを使用します:

```bash
kubectl cluster-info dump
```

クラスタのトラブルシューティングをさらに掘り下げるには [Troubleshoot Clusters](https://kubernetes.io/docs/tasks/debug/debug-cluster/#looking-at-logs) を参照してください。確認すべきログに関する知見が得られます。

### GitLab の要件

Kubernetes 上に GitLab をデプロイするには、セットアップが [ドキュメントに記載された要件](https://docs.gitlab.com/charts/installation/tools.html#prerequisites) を満たしていることを確認してください。

## kubeSOS 出力の確認

### kubectl-check

インストールされている `kubectl` のバージョンを確認するには:

```bash
% more kubectl-check
```

### Helm version

```bash
% more helm-version
```

### Pod のデバッグ

`get_pods` ファイルを確認することで Pod の現在の状態を確認します。すべての Pod は `running` または `completed` であるべきです。

```bash
 % more get_pods
NAME                                                   READY   STATUS      RESTARTS   AGE
gitlab-gitaly-0                                        1/1     Running     0          12m
gitlab-gitlab-exporter-586ccff5fb-6g67t                1/1     Running     0          12m
gitlab-gitlab-grafana-app-6bf7db585b-75fgt             2/2     Running     0          12m
gitlab-gitlab-shell-7547c6457-54xm8                    1/1     Running     0          12m
gitlab-gitlab-shell-7547c6457-lmfb2                    1/1     Running     0          12m
gitlab-migrations-76-gq7pq                             0/1     Completed   0          12m
gitlab-nginx-ingress-controller-786f5f5ddd-ktwh5       1/1     Running     0          12m
gitlab-nginx-ingress-controller-786f5f5ddd-nqk2w       1/1     Running     0          12m
gitlab-nginx-ingress-default-backend-7ff88b95f-rv6jt   1/1     Running     0          12m
gitlab-prometheus-server-5b47c879b4-g9xvb              2/2     Running     0          12m
gitlab-redis-master-0                                  2/2     Running     0          12m
gitlab-registry-7f874b748d-bxtnh                       1/1     Running     0          12m
gitlab-registry-7f874b748d-rs246                       1/1     Running     0          12m
gitlab-sidekiq-all-in-1-v1-95cbfd5f7-546sq             1/1     Running     0          12m
gitlab-task-runner-6f7dcc8897-psscr                    1/1     Running     0          12m
gitlab-webservice-default-659fdddb9b-cmrbd             2/2     Running     0          12m
gitlab-webservice-default-659fdddb9b-hhctp             2/2     Running     0          12m
```

`pending` 状態の Pod があれば問題の可能性を示しており、`describe_pods` ファイルで直近のイベントを確認することで内容を特定できます。Pod が `Pending` のまま動かない場合、ノードへのスケジューリングができていないことを意味します。クラスタ内の CPU やメモリといったリソース不足が原因として考えられます。詳しくは [Debugging Pods](https://kubernetes.io/docs/tasks/debug/debug-application/debug-pods/#debugging-pods) を参照してください。

### Service

Service について確認すべき主な点は、`loadbalancer` に外部 IP が割り当てられており、`pending` 状態でないことです。

```bash
% more get_services | grep gitlab-nginx-ingress-controller | grep LoadBalancer

gitlab-nginx-ingress-controller LoadBalancer   172.20.34.155   36.0.0.25   80:32220/TCP,443:30038/TCP,22:30963/TCP   45d
```

または AWS の場合:

```bash
% more get_services | grep gitlab-nginx-ingress-controller | grep LoadBalancer

gitlab-nginx-ingress-controller LoadBalancer   172.20.164.155   a48.eu-west-5.elb.amazonaws.com   80:32220/TCP,443:30038/TCP,22:30963/TCP   45d
```

さらに、すべての Service に [endpoint](https://kubernetes.io/docs/tasks/debug/debug-application/debug-pods/#my-service-is-missing-endpoints) が割り当てられているかを確認します。

```bash
% more endpoints
NAME                                      ENDPOINTS                                           AGE
gitlab-cert-manager                       10.16.4.130:9402                                    23h
gitlab-gitaly                             10.16.4.164:8075                                    23h
gitlab-gitlab-exporter                    10.16.4.155:9168                                    23h
gitlab-gitlab-pages                       10.16.4.156:8090                                    23h
gitlab-gitlab-shell                       10.16.2.36:2222,10.16.4.162:2222                    23h
gitlab-grafana-app                        10.16.4.131:3000                                    23h
```

### Ingress

Ingress はクラスタ外部からクラスタ内の Service への HTTP / HTTPS ルートを公開します。トラフィックのルーティングは Ingress リソースに定義されたルールによって制御されます。ホストとアドレスが正しく設定されているか、Ingress に IP が割り当てられているかを確認します。

```bash
% kubectl get ingress
% more describe_ingress
```

### Deployment

セットアップ済みのアプリケーションを素早く確認するには、次のファイルを確認します:

```bash
% more get_deployments
NAME                                   READY   UP-TO-DATE   AVAILABLE   AGE
gitlab-cainjector                      1/1     1            1           9d
gitlab-cert-manager                    1/1     1            1           9d
gitlab-gitlab-exporter                 1/1     1            1           9d
gitlab-gitlab-pages                    1/1     1            1           9d
gitlab-gitlab-runner                   1/1     1            1           9d
gitlab-gitlab-shell                    2/2     2            2           9d
gitlab-grafana-app                     1/1     1            1           9d
gitlab-kas                             2/2     2            2           9d
gitlab-minio                           1/1     1            1           9d
gitlab-nginx-ingress-controller        2/2     2            2           9d
gitlab-nginx-ingress-default-backend   1/1     1            1           9d
gitlab-prometheus-server               1/1     1            1           9d
gitlab-registry                        2/2     2            2           9d
gitlab-sidekiq-all-in-1-v1             1/1     1            1           9d
gitlab-task-runner                     1/1     1            1           9d
gitlab-webservice-default              2/2     2            2           9d
```

いずれかの Deployment が ready になっていない場合は、`describe_deployments` ファイルで失敗の原因を確認します。`describe_pods` ファイルでエラーを確認することも有効です。

```bash
% more describe_deployments
```

### Persistent Volume と Persistent Volume Claim

GitLab はデータの保存に Persistent Volume を使用するため、いずれかの Pod が `pending` 状態にある場合は、ボリュームが存在し、その状態が `Bound` であるかを確認してください。各ボリュームに割り当てられた容量を確認し、必要であれば追加で割り当てます。

```bash
% more get_pvc
NAME                            STATUS   VOLUME        CAPACITY ACCESS MODES   STORAGECLASS   AGE
data-gitlab-postgresql-0        Bound    pvc-44c3643e-  8Gi        RWO         standard       9d
gitlab-minio                    Bound    pvc-8a739402-  10Gi       RWO         standard       9d
gitlab-prometheus-server        Bound    pvc-29fc7b9d-  8Gi        RWO         standard       9d
redis-data-gitlab-redis-master  Bound    pvc-b9b67a9d-  8Gi        RWO         standard       9d
repo-data-gitlab-gitaly-0       Bound    pvc-af7ca188-  50Gi       RWO         standard       9d
```

### ユーザー指定の値

helm のリビジョンが複数ある場合（`helm history <release>`）、各リビジョンの `user_supplied_values.yaml` と `all_values.yaml` を取得します。これは、リビジョン間で適用された変更内容を比較するのに有用です。例:

```diff
% diff user_supplied_values_rev_7.yaml user_supplied_values_rev_8.yaml
3,4d2
< certmanager-issuer:
<   email: gladmin@example.com
33a32,33
>   ingress:
>     configureCertmanager: false
```

上記は、リビジョン 7 と 8 の間で CertManager の設定が変更されたことを示しています。

YAML ファイルが存在しない場合、kubeSOS が正しい *namespace* または *release* に対して実行されなかった可能性があります。`helm list -A` ですべての helm デプロイ済みリリースを確認できます。`kubeSOS.sh` を実行する際は、必ず適切な `-n <namespace>` と `-r <release>` を指定してください。

### アプリケーションのログ

最後に、`kubeSOS.sh` は、特定アプリケーションの問題のデバッグに使えるすべてのアプリケーションログを生成します。

Kubernetes 環境ではログの取得には次のような制約があることに注意してください:

- デフォルトで、コンテナの現在のログサイズは 10Mb に制限されており、その時点でローテーションされます。
- Kubernetes はログをローテーションしますが、ローテーション後のログを `kubectl logs` 経由でリモートから取得することはできず、ノードへの直接アクセスが必要です（[追加のログ](#additional-logs) を参照）。
- Kubernetes は失敗したコンテナのログを保持しますが、これは直前の 1 インスタンス分のみに限定されます。

また、`kubeSOS.sh` は現在実行中の Pod／コンテナ（または init コンテナの完了済みのもの）からのみログを取得します。意図的にフィルタアウトしていないのにログが存在しない場合、その Pod は `kubeSOS.sh` 実行時にアクティブではなかった可能性が高いです。`get_pods` ファイルでアクティブだった Pod を確認してください。なお、空のログファイルはアーカイブに含まれません。

ログは*コンテナ*ごとにキャプチャされます。多くの Pod が複数のコンテナを実行しており、たとえば `webservice` では 5 つのログが返されることがあります:

```bash
-rw-r--r--@  1 chriss  staff  6022116 27 Jul 15:06 webservice_webservice.log
-rw-r--r--@  1 chriss  staff  4226942 27 Jul 15:06 webservice_gitlab-workhorse.log
-rw-r--r--@  1 chriss  staff     1354 27 Jul 15:06 webservice_dependencies.log
-rw-r--r--@  1 chriss  staff     5710 27 Jul 15:06 webservice_configure.log
-rw-r--r--@  1 chriss  staff      321 27 Jul 15:06 webservice_certificates.log
```

ログファイル名の構成は `application name`_`container name`.log です。`application name` は Pod に割り当てられた `app` メタデータラベルから決定されます。コンテナが失敗した場合はそのログが保持され、`kubeSOS.sh` は `kubectl logs --previous` オプション経由でこのログを取得し、ファイル名は `*_previous.log` で識別されます。

### 追加のログ {#additional-logs}

すでに述べた通り、`kubectl logs` で取得できるログには制限があります。コンテナをホストしているワーカーノード上にも追加のログが存在し、通常は次の場所にあります:

- ホストノードの `/var/log/containers`
