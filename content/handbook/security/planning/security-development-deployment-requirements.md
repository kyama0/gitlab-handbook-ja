---
title: "開発とデプロイメントのセキュリティ要件"
upstream_path: /handbook/security/planning/security-development-deployment-requirements/
upstream_sha: 1e195b58b9f249ff10bd0e705106c320fee86141
translated_at: "2026-05-10T00:00:00Z"
translator: claude
stale: false
lastmod: "2026-02-06T19:27:57-05:00"
---

## サマリー

Security Department とそのサブチームは、GitLab.com のサポートに関連して様々な種類の機密データを処理する多数のアプリケーションおよびその他のリソースに対して責任を負っています。

## 適用範囲

このページに文書化されている要件と慣行のスコープは、[RED](/handbook/security/policies_and_standards/data-classification-standard/#red) データを収集、処理、保存する Security Department のツールとリソースです。

## このページに含まれるもの

- RED データを収集、処理、保存するセキュリティチームのツール向けインフラ要件。

## このページに含まれないもの

- ネットワーク、ホスト、インフラセキュリティに関するセキュリティのベストプラクティスの網羅的なリスト。
- アプリケーション、データベース、クラウド関数、その他開発リソースに関するセキュリティのベストプラクティスの網羅的なリスト。
- 開発と変更管理に関する規範的なガイドライン。

### レビュープロセス

将来の作業: 現時点では、[AppSec Reviews](/handbook/security/product-security/security-platforms-architecture/application-security/appsec-reviews/) のようなアーキテクチャと実装のレビューに対する定義されたプロセスはありません。そのようなプロセスは将来の Security チームの責任となります。

## 要件

### 全体的なガイドライン

以下の要件は、3 つの高レベルなガイドラインによって駆動されます:

- [Least Privilege](/handbook/security/product-security/security-platforms-architecture/security-architecture/#assign-the-least-privilege-possible)
- [Zero Trust](/handbook/security/product-security/security-platforms-architecture/security-architecture/zero-trust/)
- [GitLab's Security Controls](/handbook/security/security-assurance/security-compliance/sec-controls/)

### アイデンティティ、認証、認可

#### アカウントとクレデンシャル

1. 共有ユーザーアカウントを使用してはいけません。
1. すべてのユーザーアカウントに対して多要素認証（MFA）を有効にしなければなりません。
1. サービスアカウントクレデンシャルへのアクセスは、クレデンシャルがアクセスを許可するリソースのアクセス制御に従わなければなりません。
1. サービスアカウントクレデンシャルは 365 日ごとにローテーションしなければなりません。
1. 非 MFA のユーザーアカウントクレデンシャル（例: API キー）は 90 日ごとにローテーションしなければなりません。

#### アイデンティティ

1. すべての外部アカウントに対してアイデンティティプロバイダを使用しなければなりません。

#### 認証

1. サービスアカウントは、API トークンや共有秘密鍵などの静的クレデンシャルを使用して認証することができます。

#### 認可

1. 機密データへのユーザーアクセスは、セキュリティグループを通じて付与しなければなりません。
1. ディザスタリカバリのための個別アクセスは、[tech stack tracking ファイル](https://gitlab.com/gitlab-com/www-gitlab-com/-/blob/master/data/tech_stack.yml) で指定されたシステムオーナーに付与することができます。

#### サービスアカウントの使用

1. サービスアカウント名は意味のあるものであるべきです。
1. RED データへのアクセスを持つサービスアカウントは、[Access Request](/handbook/security/corporate/end-user-services/access-requests/) プロセスに従わなければなりません。
1. RED データへのアクセスを持つサービスアカウントは、単一の論理スコープに制限しなければなりません。例えば単一の GCP プロジェクトなど。

#### ネットワークセキュリティ

1. すべてのネットワークファイアウォールは、デフォルトポリシーが DENY となるように構成しなければなりません。
1. ネットワークファイアウォールルールは、デフォルトで egress を拒否すべきです。
1. すべての外部通信は、最新のプロトコルと暗号を使用して転送中に暗号化しなければなりません。
1. すべての内部通信は、可能であれば転送中に暗号化されるべきです。

#### データの取り扱いと分離

1. データの[保持ポリシー](/handbook/security/policies_and_standards/records-retention-deletion/) を遵守しなければなりません。
1. データは保管時に暗号化しなければなりません。
   1. データはプロバイダが管理する鍵を使用して暗号化することができます。
1. 異なる種類のデータは保管時に論理的に分離しなければなりません。
1. 仮想ネットワーク（例: GCP の VPC）は、データとワークロードの分離のメカニズムとして使用することができます。

異なるデータ種別の例:

- リポジトリの内容や添付ファイルなどのユーザーコンテンツ
- ログなどの本番由来のデータ
- システムログやディスクイメージなどの DFIR（Digital Forensics and Incident Response）成果物

## 脆弱性とパッチ管理

1. リソースは [Security Vulnerability Management](../product-security/vulnerability-management/) プロセスでカバーされなければなりません。

## 変更管理と追跡

1. RED データを処理するシステムへの変更は、対応する Issue、マージリクエスト、またはその他のレビュー可能なプロセスで追跡しなければなりません。

## 監査ロギング

1. 環境監査ログは有効化し、[保持ポリシー](/handbook/security/policies_and_standards/records-retention-deletion/) に従って保管しなければなりません。
1. アプリケーション監査ログは、サポートされていて利用可能であれば、有効化し、[保持ポリシー](/handbook/security/policies_and_standards/records-retention-deletion/) に従って保管しなければなりません。
1. ログは、Security Operations などの任意の運用チームがアクセスできる中央集中的な場所に転送し処理しなければなりません。

## ベストプラクティス

以下の慣行は、上記基準を満たすためのより具体的な技術的実装例を提供することを意図しています。

### GCP の慣行

#### レガシーメタデータエンドポイントの無効化

レガシーメタデータエンドポイントは [すべてのプロジェクトで無効化されるべきです](https://cloud.google.com/compute/docs/storing-retrieving-metadata)。

#### 複数の環境

開発とデプロイメントは、ローカル開発に加えて、最低 2 つの環境で実施するべきです:

- 共有のテスト、統合、その他の非本番環境。
- このページの要件を満たすかそれを上回る本番環境。

ベストプラクティスとして、不整合な構成によるデプロイメント時のエラーを減らすため、環境はできるだけ近い形で構成すべきです。

#### GCP セキュリティグループ（gcp-*-sg@gitlab.com）の慣例

`gitlab.com` の組織リソースのセキュリティグループは、`gcp-:grouppurpose-sg@gitlab.com` という命名にすべきです。

#### デフォルトサービスアカウント権限の削除

サービスが有効化されると、デフォルトサービスアカウントが `project/editor` 権限で作成される可能性があります。

- このデフォルトのマッピングは削除すべきです。
- 各ワークロード用のサービスアカウントは、必要な最小権限でプロビジョニングすべきです。

#### GCS のライフサイクル管理の使用

保持要件の対象となるデータを保存するバケットは、削除を自動化するためにライフサイクル管理を使用すべきです。

```terraform
resource "google_storage_bucket" "system-logging-archive" {
  name          = "${var.project_id}-system-logging-archive"
  project       = var.project_id
  location      = "US"
  force_destroy = true

  lifecycle_rule {
    condition {
      age = "365"
    }
    action {
      type = "Delete"
    }
  }
}
```

#### Shielded VMs

Shielded VM はあらゆる場合で使用すべきです。これは組織またはフォルダーポリシーで強制できます。既存のワークロードのため既存の `gitlab.com` 組織には強制できないので、新しいフォルダーやプロジェクトに対してフォルダーまたはプロジェクトレベルで強制すべきです。

```terraform
resource "google_folder_organization_policy" "shielded_vm_policy" {
  folder     = "myfolder"
  constraint = "compute.requireShieldedVm"

  boolean_policy {
    enforced = true
  }
}

# Enable shielded VMs for k8s node pools
resource "google_container_node_pool" "nodes" {
  ...

  #enable_shielded_nodes = true
  node_config {
    ...

    shielded_instance_config {
      enable_secure_boot          = true
      #enable_vtpm                 = true
      enable_integrity_monitoring = true
    }

    metadata = {
      disable-legacy-endpoints = "true"
    }
  }

  lifecycle {
    ignore_changes = [
      node_config,
    ]
  }
}
```

#### VPC ファイアウォールルール

すべての VPC に対して、egress と ingress の両方にデフォルト DENY ルールを追加するべきです:

```terraform
resource "google_compute_network" "vpc" {
   ...
}

resource "google_compute_firewall" "deny-all-egress" {
  name      = "${google_compute_network.vpc.name}-deny-all-egress"
  project   = var.project_id
  network   = google_compute_network.vpc.self_link
  priority  = 65533
  direction = "EGRESS"

  deny {
    protocol = "all"
  }
}

resource "google_compute_firewall" "deny-all-ingress" {
  name      = "${google_compute_network.vpc.name}-deny-all-ingress"
  project   = var.project_id
  network   = google_compute_network.vpc.self_link
  priority  = 65533
  direction = "INGRESS"

  deny {
    protocol = "all"
  }
}
```

#### 最小権限レビュー

GCP には現在 [permission recommender](https://cloud.google.com/iam/docs/recommender-overview) があり、実際の使用に基づいて最小権限を推奨します。これは非本番環境で最小権限を判断するために使用できます。スケジュールされたレビューと保守の一環として、定期的にレビューすべきです。

## アイデンティティプロバイダ

[Okta](/handbook/security/corporate/end-user-services/okta/) は私たちの企業アイデンティティおよび認証プロバイダです。Okta を SAML プロバイダとするアプリケーション構成が望ましいソリューションです。これはアクティビティのセキュリティ監視のオペレーションニーズを満たし、標準的な Access Request プロセスを使用して IT Ops によりプロビジョニングできます。SAML サービスプロバイダとして動作するように設計されたアプリケーションは、将来変更があれば他のアイデンティティプロバイダでも動作できるべきです。

毎日の作業のためにシェルアクセスを必要とするアプリケーションには、ssh 認証のために [Okta ASA](https://gitlab.com/gitlab-cookbooks/gitlab_okta_asa) を実装するべきです。
