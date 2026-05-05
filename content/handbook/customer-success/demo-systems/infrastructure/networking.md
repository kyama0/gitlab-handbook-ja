---
title: "デモシステムインフラ — ネットワーキング"
description: "デモシステムインフラのためのネットワーキングソリューションを解説します"
upstream_path: /handbook/customer-success/demo-systems/infrastructure/networking/
upstream_sha: b4eeb07f0d5f46e2fc5f8572be1a2547261aed89
translated_at: "2026-04-26T02:17:48Z"
translator: claude
stale: false
---

## グローバル CIDR 範囲

各リージョン/ゾーンの CIDR 範囲は `10.128.0.0/9` の CIDR 範囲内に存在します。私たちは `/9` の CIDR 範囲を各リージョン/ゾーン用の `/12` CIDR 範囲に分割しました。

| CIDR                | IP 範囲                     | （GitLab）割り当て先                             |
|---------------------|-----------------------------|-------------------------------------------------|
| 10.128.0.0 /12      | 10.128.0.0 - 10.143.255.255 | `demosys-saas-us-vpc`（GCP us-central1）         |
| 10.144.0.0 /12      | 10.144.0.0 - 10.159.255.255 | `demosys-saas-eu-vpc`（GCP eu-west1）            |
| 10.160.0.0 /12      | 10.160.0.0 - 10.175.255.255 | `demosys-saas-asia-vpc`（GCP asia-southeast1）   |
| 10.176.0.0 /12      | 10.176.0.0 - 10.191.255.255 | （GCP 拡張用予約）                               |
| 10.192.0.0 **/16**  | 10.192.0.0 - 10.192.255.255 | `demosys-mgmt-us-vpc`（GCP us-central1）         |
| 10.193.0.0 **/16**  | 10.193.0.0 - 10.193.255.255 | `demosys-mgmt-eu-vpc`（GCP eu-west1）            |
| 10.194.0.0 **/16**  | 10.194.0.0 - 10.194.255.255 | `demosys-mgmt-asia-vpc`（GCP asia-southeast1）   |
| 10.195.0.0 **/16**  | 10.195.0.0 - 10.195.255.255 | （将来の管理用予約）                              |
| 10.196.0.0 **/16**  | 10.196.0.0 - 10.196.255.255 | （将来の管理用予約）                              |
| 10.197.0.0 **/16**  | 10.197.0.0 - 10.197.255.255 | （将来の管理用予約）                              |
| 10.198.0.0 **/16**  | 10.198.0.0 - 10.198.255.255 | （将来の管理用予約）                              |
| 10.199.0.0 **/16**  | 10.199.0.0 - 10.199.255.255 | `demosys-mgmt-global-vpc`（GCP）                 |
| 10.200.0.0 **/13**  | 10.200.0.0 - 10.207.255.255 | （AWS 管理用予約）                               |
| 10.208.0.0 /12      | 10.208.0.0 - 10.223.255.255 | （AWS us-east-1 用予約）                         |
| 10.224.0.0 /12      | 10.224.0.0 - 10.239.255.255 | （AWS 拡張用予約）                               |
| 10.240.0.0 /12      | 10.240.0.0 - 10.255.255.255 | （AWS 拡張用予約）                               |


{{% panel header="**GitLab の実装例**" header-bg="info" %}}
私たちは人間にとって認識しやすいインフラ設計要素を好んでおり、`10.1xx.` のアドレス空間をすべて GCP に、`10.2xx.` の IP 空間をすべて AWS に割り当てています。これにより、問題のトラブルシューティング時にどちらのクラウドプロバイダーのコンソールにアクセスすべきかを簡単に識別できます。マルチクラウド実装でこのアイデアを採用することは自由ですが、必須ではありません。

管理インフラには大きな IP 範囲が必要ではないため、`10.192.0.0/12` の CIDR 範囲を 2 つの `/13` 範囲に分割し、GCP と AWS の管理インフラの IP 空間をきれいに分けました。GCP の `/13` をさらに複数の `/16` 範囲に分割し、冗長性のために複数リージョンに管理インフラをきれいに分割できるようにしました。
{{% /panel %}}


### サブネットの割り当て方法

GCP [VPC 自動サブネットモード](https://cloud.google.com/vpc/docs/vpc#auto-mode-considerations)の標準サブネット範囲は `10.128.0.0/9` です。これにより、通常は企業ネットワーク（GitLab には該当しない）に使用される `10.0.0.0/9` 範囲が未使用のまま残ります。直感的には、自動作成されたサブネットとの競合を避け、`10.0.0.0/9` 範囲のネットワークを使用し続けることが望ましいです。

各 VPC ネットワークには独自のサブネットがあるため、「自動サブネットモード」を使用しない限り、`10.0.0.0/8` 範囲全体を問題なく使用できます。多くの企業に適用できるオープンソース設計の精神に則り、企業ネットワークとの潜在的な競合を避けるために `10.128.0.0/9` のサブネット範囲を使用します。

### グローバルルーティングテーブルとリージョナルルーティングテーブル

VPC ネットワークとルーティングテーブルを設定する際、`10.128.0.0/9` のグローバルルーティングテーブルと互いに通信できる各リージョン/ゾーンのサブネットを作成するか、各リージョン/ゾーンが `/12` ルーティングテーブルで独立して動作するよう設定するかを選択できます。用語の使用方法はクラウドプロバイダーによって異なることに注意してください。例えば、GCP の VPC はグローバルリソースであり、AWS の VPC はクロスリージョンネットワーク設計に関して異なる多くのオプションを持ちます。


{{% panel header="**GitLab の実装例**" header-bg="info" %}}
私たちは各リージョンを独立させるために、リージョンごとに別個の VPC ネットワークを作成しています。これにより、何か問題が発生しても、リージョン間の汚染が起きる心配がありません。IaC ツールで解決している管理の容易さとのトレードオフはありますが、最上位リソースへの影響を心配せずにリージョン全体をビルド/破棄/再構築できるため、このアプローチを好んでいます。
{{% /panel %}}


### リージョン内の複数のアベイラビリティゾーンによる高可用性

リージョン内で高可用性/フォールトトレラントな環境を設計し、複数のアベイラビリティゾーンを使用する場合、ゾーンごとに `/12` CIDR 範囲を使用する（シンプルさのために推奨）か、`/12` CIDR 範囲を `/13`（2 ゾーン）または `/14`（3〜4 ゾーン）に分割するかを選択できます。このドキュメントでは、ゾーンごとに `/12` を使用することを前提としています。


{{% panel header="**GitLab の実装例**" header-bg="info" %}}
私たちは人間にとって認識しやすいインフラ設計要素を好んでおり、`10.1xx.` のアドレス空間をすべて GCP に、`10.2xx.` の IP 空間をすべて AWS に割り当てています。これにより、問題のトラブルシューティング時にどちらのクラウドプロバイダーのコンソールにアクセスすべきかを簡単に識別できます。マルチクラウド実装でこのアイデアを採用することは自由ですが、必須ではありません。

デモ環境は複数のリージョンで複製されているため、リージョン内でのマルチゾーン冗長性は不要（またはコンピュートコストに見合わない）と考えています。リージョンに問題が発生した場合は、ユーザーを別のリージョンにリダイレクトします。
{{% /panel %}}


## リージョン/ゾーンのサブネット範囲

各リージョン/ゾーンの `/12` CIDR には 16 の `/16` CIDR 範囲が含まれます。言い換えると、IP アドレスの第 2 オクテットに 16 の値が利用可能で、サブネットあたり 65,536 IP が提供されます。16 の利用可能な値を表すために `a` から `p` のアルファ文字を割り当てています。

| サブネット CIDR   | 説明                                               |
|------------------|----------------------------------------------------|
| 10.a.10.0 /24    | demosys-{regionAbbrev}-mgmt-red-subnet             |
| 10.a.20.0 /24    | demosys-{regionAbbrev}-mgmt-yellow-subnet          |
| 10.a.30.0 /24    | demosys-{regionAbbrev}-app-red-subnet              |
| 10.a.40.0 /24    | demosys-{regionAbbrev}-app-yellow-subnet           |
| 10.b.0.0 /16    | （将来の予約）                                      |
| 10.c.0.0 /20    | gke-{regionAbbrev}-gl-shared-runners               |
| 10.c.16.0 /20   | gke-{regionAbbrev}-gl-dedicated-runners            |
| 10.c.32.0 /20   | （将来のサービス用予約）                             |
| 10.c.48.0 /20   | （将来のサービス用予約）                             |
| 10.c.64.0 /20   | （将来のサービス用予約）                             |
| 10.c.80.0 /20   | （将来のサービス用予約）                             |
| 10.c.96.0 /20   | （将来のサービス用予約）                             |
| 10.c.112.0 /20  | （将来のサービス用予約）                             |
| 10.c.128.0 /20  | （将来のサービス用予約）                             |
| 10.c.144.0 /20  | （将来のサービス用予約）                             |
| 10.c.160.0 /20  | （将来のサービス用予約）                             |
| 10.c.176.0 /20  | （将来のサービス用予約）                             |
| 10.c.192.0 /20  | （将来のサービス用予約）                             |
| 10.c.208.0 /20  | （将来のサービス用予約）                             |
| 10.c.224.0 /20  | （将来のサービス用予約）                             |
| 10.c.240.0 /20  | （将来のサービス用予約）                             |
| 10.d.0.0 /16    | gke-{regionAbbrev}-gl-omnibus-instance             |
| 10.e.0.0 /16    | （将来の予約）                                      |
| 10.f.0.0 /16    | （将来の予約）                                      |
| 10.g.0.0 /16    | （将来の予約）                                      |
| 10.h.0.0 /16    | （将来の予約）                                      |
| 10.i.0.0 /16    | （将来の予約）                                      |
| 10.j.0.0 /16    | （将来の予約）                                      |
| 10.k.0.0 /16    | （将来の予約）                                      |
| 10.l.0.0 /16    | （将来の予約）                                      |
| 10.m.0.0 /16    | （255）demosys-{regionAbbrev}-k8s-sandbox-{rsvpID} |
| 10.n.0.0 /16    | （255）demosys-{regionAbbrev}-k8s-sandbox-{rsvpID} |
| 10.o.0.0 /16    | （255）demosys-{regionAbbrev}-k8s-sandbox-{rsvpID} |
| 10.p.0.0 /16    | （255）demosys-{regionAbbrev}-k8s-sandbox-{rsvpID} |


{{% panel header="**GitLab の実装例**" header-bg="info" %}}
ここからネットワーク設計の「場合による」シナリオが始まります。サブネットのパーティション分割や結合など、この IP 空間は自由に割り当てることができます。すべてのドキュメントは、私たちのユースケースに基づいて GitLab でどのように実装したかをモデルとしています。
{{% /panel %}}


### デモシステム管理

`demosys-mgmt-vpc`

| VPC 名                 | リージョン             | CIDR                 |
|------------------------|----------------------|----------------------|
| demosys-mgmt-us-vpc    | (gcp) us-central1-c  | 10.192.0.0 /16       |

#### サブネット

| サブネット CIDR       | サブネット名                                        |
|-------------------|----------------------------------------------------|
| 10.192.10.0 /24   | `demosys-mgmt-us-mgmt-red-subnet`                   |
| 10.192.20.0 /24   | `demosys-mgmt-us-mgmt-yellow-subnet`                |

#### Terraform 設定

詳細は [Terraform US リージョン設定](https://gitlab.com/gitlab-com/customer-success/demo-systems/infrastructure/demosys-terraform/environments/demosys-mgmt/us)と [Terraform リージョン VPC モジュール](https://gitlab.com/gitlab-com/customer-success/demo-systems/infrastructure/demosys-terraform/modules/demosys-mgmt/region-vpc)をご参照ください。

```console
cd ~/Sites/gitlab-com/customer-success/demo-systems/infrastructure/demosys-terraform
cd environments/demosys-mgmt/us
terraform init
terraform plan
terraform apply
```

### US デモリソース

| VPC 名                 | リージョン             | CIDR                 |
|------------------------|----------------------|----------------------|
| demosys-saas-us-vpc    | (gcp) us-central1-c  | 10.128.0.0 /12       |

#### サブネット

| サブネット CIDR       | サブネット名                                        |
|-------------------|----------------------------------------------------|
| 10.128.30.0 /24   | `demosys-saas-us-app-red-subnet`                   |
| 10.128.40.0 /24   | `demosys-saas-us-app-yellow-subnet`                |
| 10.130.0.0 /20    | `gke-us-k8s-gl-shared-runners-subnet-*`            |
| 10.130.16.0 /20   | `gke-us-k8s-gl-dedicated-runners-subnet-*`         |
| 10.131.0.0 /16    | `gke-us-k8s-gl-omnibus-instance-subnet-*`          |
| 10.140.0.0 /16    | （255）demosys-us-k8s-sandbox-{rsvpID}              |
| 10.141.0.0 /16    | （255）demosys-us-k8s-sandbox-{rsvpID}              |
| 10.142.0.0 /16    | （255）demosys-us-k8s-sandbox-{rsvpID}              |
| 10.143.0.0 /16    | （255）demosys-us-k8s-sandbox-{rsvpID}              |

#### Terraform 設定

詳細は [Terraform US リージョン設定](https://gitlab.com/gitlab-com/customer-success/demo-systems/infrastructure/demosys-terraform/environments/demosys-saas/us)と [Terraform リージョン VPC モジュール](https://gitlab.com/gitlab-com/customer-success/demo-systems/infrastructure/demosys-terraform/modules/demosys-saas/region-vpc)をご参照ください。

```console
cd ~/Sites/gitlab-com/customer-success/demo-systems/infrastructure/demosys-terraform
cd environments/demosys-saas/us
terraform init
terraform plan
terraform apply
```

### EU デモリソース

`demosys-eu-vpc`

TODO

### アジアデモリソース

`demosys-asia-vpc`

TODO

## 将来の計画に関する考慮事項

私たちが目指すべきこと:

1. スケーラブルなサービスであれば、現在の要件の 10〜100 倍の IP 範囲容量を持つ。
1. 複雑さを減らし、成長に備えるために、より大きな CIDR 範囲を持つより少ないサブネットを持つ。
1. セキュリティやサンドボックスのリスクをもたらす各サービスに対して別個のサブネットを持つ。例えば、ユーザーが作成したり使用したりする Kubernetes ポッド用の別個のサブネットを持つべき。
1. 人間の混乱や内部 IP アドレスの重複を防ぐために、複数の VPC 間でサブネットを再利用しない。Google Cloud は内部 DNS を使用してサブネットの重複に関する問題を回避していますが、これはベンダー固有の技術であり、ベンダー非依存の設計では依存すべきではありません。
