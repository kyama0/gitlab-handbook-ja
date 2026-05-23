---
title: "インフラストラクチャ環境"
upstream_path: "/handbook/engineering/infrastructure-platforms/environments/"
upstream_sha: "6a459a3ca969603754a3b5133342edb804d3012c"
translated_at: "2026-04-28T21:28:32Z"
translator: claude
stale: false
lastmod: "2026-01-22T18:18:00+01:00"
---

## 環境

環境の Terraform 設定は [`config-mgmt`](https://ops.gitlab.net/gitlab-com/gl-infra/config-mgmt/-/tree/main/environments) にあります。


{{% panel header="**インフラストラクチャ標準に関する今後のイテレーション**" header-bg="info" %}}
会社全体のインフラストラクチャ標準についてイテレーションを行う WIP イニシアチブがあります。詳しくは <a href="/handbook/infrastructure-standards">インフラストラクチャ標準ハンドブックページ</a> をご覧ください。

このページは、標準が文書化され、実装され、環境への変更が行われるにつれて段階的にリファクタリングされます。
{{% /panel %}}


### 開発

| **名前** | **URL** | **目的** | **デプロイ** | **データベース** | **ターミナルアクセス** |
| ---- | --- | ------- | ------ | -------- | --------------- |
| Development | さまざま | 開発 | 保存時 | フィクスチャ | 個別の開発者 |

開発はローカルマシンで行われます。そのため、SLA を提供する方法はありません。アクセスは個別の開発者に限定されます。開発者が取り組んでいる内容によって EE/CE のいずれかになります。

### デモ

| **名前** | **URL** | **目的** | **デプロイ** | **データベース** | **ターミナルアクセス** |
| ---- | --- | ------- | ------ | -------- | --------------- |
| Demo | "GitLab Sales Demo Domains - 内部のみ"（Google Drive 上にあります） | セールス | リリース | フィクスチャ | 本番チーム |

現在の EE リリースの完全な機能を持つバージョンである必要があります。常にセールスで利用できるようにするため、高い SLA と厳格なアクセス制限が設けられています。出荷しない機能（フィーチャーフラグ/カナリア/等）はありません。

### .org

| **名前** | **URL** | **目的** | **デプロイ** | **データベース** | **ターミナルアクセス** |
| ---- | --- | ------- | ------ | -------- | --------------- |
| .org | [dev.gitlab.org](https://dev.gitlab.org) | GitLab.com のツール | ナイトリー | 実際の作業 | 本番・ビルドチーム |

`.org` 環境の主な用途:

- 公式アーティファクトのビルド
- SOX コンプライアンスのためのビルド分離の提供（異なるインスタンスとインフラ上に配置）
- SBOM とプロベナンスの認証
- リリースの公開管理
- 公開後の Canonical との同期管理
- GitLab.com の完全な障害発生時に Self-Managed の顧客に対して GitLab をリリースする能力の確保

これはビルドアーティファクトにより常に増大し続ける重要なインフラです。ナイトリーの CE/EE ビルドをデプロイできる新しいビルドサーバーを作成するか、インフラリポジトリを別のホスト（gitlab.com とは別の EE インスタンス）に移動する議論があります。環境名のドメインに dev が含まれていますが、ローカル開発環境と混同される可能性があるため dev と呼ばないでください。

### Ops

| **名前** | **URL** | **目的** | **デプロイ** | **データベース** | **ターミナルアクセス** |
| ---- | --- | ------- | ------ | -------- | --------------- |
| ops | [ops.gitlab.net](https://ops.gitlab.net/) | GitLab.com 運用 | 公式 EE リリース | フィクスチャ | SRE |

ops 環境は GitLab.com インフラの管理に重要なすべてのインフラを保持しています。

現在は以下が含まれています:

- ElasticCloud のプロキシ。
- dashboards.gitlab.net を提供する内部監視インフラ。
- すべての運用関連 GitLab リポジトリのバックアップとして機能する分離された GitLab デプロイ。
- バックアップやメンテナンスなどの重要な運用タスクの CI/CD ジョブ。
- GitLab chatops などの本番インフラへの接続が必要なランナー。

### 本番

| **名前** | **省略名** | **URL** | **目的** | **デプロイ** | **データベース** | **ターミナルアクセス** |
| -------- | -------------- | ------- | ----------- | ---------- | ------------ | ------------------- |
| Production | `gprd` | [gitlab.com](https://gitlab.com/) | 本番 | リリース候補 | 本番 | 本番チーム |

本番はカナリアデプロイの能力を持つフルスケールおよびサイズです。本番へのアクセスは制限されています。
2 つのステージで構成されています:

- カナリアステージはコミュニティの限られたメンバーに到達するインフラのサブセットです。まずこのステージにデプロイします。詳細は[カナリアステージとその使用方法](/handbook/engineering/infrastructure-platforms/environments/canary-stage)を参照してください。
- メインステージはより広い GitLab コミュニティの残りのトラフィックを処理します。

### Production-Canary

| **名前** | **省略名** | **URL** | **目的** | **デプロイ** | **データベース** | **ターミナルアクセス** |
| -------- | -------------- | ------- | ----------- | ---------- | ------------ | ------------------- |
| Production-Canary | `gprd-cny` | [gitlab.com](https://gitlab.com/) | 本番のカナリア | リリース候補 | 本番 | 本番チーム |

Production-Canary は本番環境の環境サブセットまたはデプロイ「ステージ」であり、本番とほとんど同じインフラを共有しています。この追加ステージは、新しいリリースをエンドユーザーにより制御された方法でロールアウトし、ユーザーへの影響を最小化する形で問題を早期発見できるよう設計されています。

本番カナリアへのアクセス方法、使用方法、対象サービスについての情報は[カナリアステージ環境に関するハンドブックページ](/handbook/engineering/infrastructure-platforms/environments/canary-stage/)に記載されています。

### ステージング

| **名前** | **省略名** | **URL** | **目的** | **デプロイ** | **データベース** | **ターミナルアクセス** |
| -------- | -------------- | ------- | ----------- | ---------- | ------------ | ------------------- |
| Staging | `gstg` | [staging.gitlab.com](https://staging.gitlab.com/users/sign_in) | 本番前テスト | 頻繁に | [本番の仮名化](https://en.wikipedia.org/wiki/Pseudonymization) | すべてのエンジニア |

ステージングは本番と同じトポロジーを持ち、同じ [Terraform 設定](https://gitlab.com/gitlab-com/gl-infra/config-mgmt/-/tree/main/environments/gstg) を共有しているため、同じコンポーネントを含んでいます。

本番と同様のカナリア環境を持ち、新しいリリースはそれ以上進む前にまずその環境にデプロイされて検証されます。`Staging-Canary` 環境にはデプロイと使用に関して特記すべき追加機能があり、それ自身の環境エントリに詳細が記載されています。

ステージングのデプロイは[リリース](/handbook/engineering/releases)に説明されているように本番デプロイに先行しますが、ステージングははるかに頻繁にデプロイされます（ビルドがグリーンであれば少なくとも数時間ごとに）。これは仮名化された本番データベースを持つ静的環境です。DB は本番 DB のスナップショットです（マイグレーション時間を最小限に抑えるために必要な頻度でのみ更新）。

ステージングで自分に割り当てられた QA Issue をテストするためのアカウントが必要な場合、本番アカウントがステージングに移行されているため、すでにアカウントを持っている可能性があります。それ以外の場合、アカウントを作成する必要がある場合は [access-request プロジェクト](https://gitlab.com/gitlab-com/team-member-epics/access-requests#pick-a-template) に Issue を作成し、マネージャーにレビューを依頼してください。データベースとサーバー環境へのアクセスリクエストには、マネージャーと Infrastructure マネージャーのいずれかの承認が必要です。このタイプのアクセスを申請するためにも同じ [access-request トラッカー](https://gitlab.com/gitlab-com/team-member-epics/access-requests#pick-a-template) を使用してください。

### Staging-Canary

| **名前** | **省略名** | **URL** | **目的** | **デプロイ** | **データベース** | **ターミナルアクセス** |
| -------- | -------------- | ------- | ----------- | ---------- | ------------ | ------------------- |
| Staging-Canary | `gstg-cny` | [staging.gitlab.com](https://staging.gitlab.com/users/sign_in) | 本番前テスト | 頻繁に | [本番の仮名化](https://en.wikipedia.org/wiki/Pseudonymization) | すべてのエンジニア |

Staging-Canary はステージング環境の環境サブセットまたはデプロイ「ステージ」であり、ステージングとほとんど同じインフラを共有しています。この追加ステージは、データベースなどのサービスを共有する GitLab の複数バージョンを持つ混合デプロイ環境で発生する問題を早期発見するよう設計されています。アクセス方法、使用方法、対象サービスについての情報は[カナリアステージ環境に関するハンドブックページ](/handbook/engineering/infrastructure-platforms/environments/canary-stage/)に記載されています。

Staging-Canary のデプロイは[リリース](/handbook/engineering/releases)に説明されているようにステージングのデプロイに先行し、ステージングと同じ頻度でデプロイされます。デプロイ時に 2 セットのブロッキング `smoke` テストスイートが実行されることを注意してください。1 セットは Staging-Canary を対象としています。もう 1 セットはステージングを対象としています。**両セットのテストが合格する必要があります**。Staging-Canary のデプロイを成功させるために、これは混合バージョンのデプロイ環境から発生する問題を洗い出すために特別に設計されています。Downstream QA パイプラインを検査することで、どの環境でテストが失敗しているか判断できます。

### Staging Ref

| **名前** | **省略名** | **URL** | **目的** | **デプロイ** | **データベース** | **ターミナルアクセス** |
| -------- | -------------- | ------- | ----------- | ---------- | ------------ | ------------------- |
| Staging Ref | `gstg-ref` | [staging-ref.gitlab.com](https://staging-ref.gitlab.com/users/sign_in) | 本番前テスト | 頻繁に | 個別かつローカル | すべてのエンジニア |

Staging Ref は最新の Staging Canary コードの本番前テストに使用されるサンドボックス環境です。[3k Cloud Native Hybrid リファレンスアーキテクチャ](https://docs.gitlab.com/ee/administration/reference_architectures/3k_users.html#cloud-native-hybrid-reference-architecture-with-helm-charts-alternative)環境です。Staging Ref は [Staging Canary](#staging) と並行して [Deployer](https://ops.gitlab.net/gitlab-com/gl-infra/deployer) と [GitLab Environment Toolkit](https://gitlab.com/gitlab-org/gitlab-environment-toolkit) を使用してデプロイされます。環境は必要に応じて自動的に破棄・再構築できます。初期テストデータはデプロイ時に投入されます。詳細は [Staging Ref](/handbook/engineering/infrastructure-platforms/environments/staging-ref) ドキュメントを参照してください。

Staging Ref で自分に割り当てられた QA Issue をテストするためのアカウントが必要な場合、本番アカウントを使用してログインできます。それ以外でアカウントを作成する必要がある場合は [access-request プロジェクト](https://gitlab.com/gitlab-com/team-member-epics/access-requests#pick-a-template) に Issue を作成し、マネージャーにレビューを依頼してください。データベースとサーバー環境へのアクセスリクエストには、マネージャーと Infrastructure マネージャーのいずれかの承認が必要です。このタイプのアクセスを申請するためにも同じ [access-request トラッカー](https://gitlab.com/gitlab-com/team-member-epics/access-requests#pick-a-template) を使用してください。

### Pre

| **名前** | **省略名** | **URL** | **目的** | **デプロイ** | **データベース** | **ターミナルアクセス** |
| -------- | -------------- | ------- | ----------- | ---------- | ------------ | ------------------- |
| pre | `pre` | pre.gitlab.com | GitLab.com pre | リリース候補 | 個別かつローカル | SRE |

pre 環境は、最終的な Self-Managed リリースと本番パッチの準備に使用するリリース候補の検証に使用される環境です。完全な本番 HA トポロジーや本番データベースのコピーを持っていません。

さらに、`pre` 環境は SRE がインフラの変更を検証するためにも使用されるため、`staging` と `production` の設定と一致していることが重要です。

### リリース

| **名前** | **URL** | **目的** | **デプロイ** | **データベース** | **ターミナルアクセス** |
| ---- | --- | ------- | ------ | -------- | --------------- |
| release | release.gitlab.net | Self-Managed リリースのデプロイ | 最終月次・パッチ・セキュリティリリース | 個別かつローカル | SRE |

リリース環境はセキュリティリリース、Self-Managed の最終月次・パッチバージョンの検証に使用される環境です。完全な本番 HA トポロジーや本番データベースのコピーを持っていません。

`release` 環境は現在のマイルストーンのすべてのパッケージ、つまり 16.2.0 がタグ付けされるまでのすべての 16.1.X パッケージを受け取り、テストします。

### GitLab チームサービス

| **名前** | **URL** | **目的** | **デプロイ** | **データベース** | **ターミナルアクセス** |
| ---- | --- | ------- | ------ | -------- | --------------- |
| version | version.gitlab.com | GitLab サポートテスト | AutoDevOps / GKE | GCP CloudSQL | N/A  |
| customers | customers.gitlab.com | GitLab サポートテスト | Chef | フィクスチャ | SRE とサポートオーナー |
| design | design.gitlab.com | Pajamas / デザイン Web サイト | AutoDevOps / GKE | N/A | N/A  |
| docs | docs.gitlab.com | GitLab ドキュメントサイト | GitLab Pages | N/A | N/A SRE |

GitLab チームサービス環境は GitLab が運営するさまざまなサイトのサービスグループです。上記のサイトで構成されています。これらは Terraform で管理されておらず、Auto DevOps や GitLab Pages などの GitLab 機能をドッグフーディングしています。

### GitLap

| **名前** | **URL** | **目的** | **デプロイ** | **データベース** | **ターミナルアクセス** |
| ---- | --- | ------- | ------ | -------- | --------------- |
| gitlap | gitlap.com | GitLab サポートテスト | ?? | ?? | SRE |
| dev.gitlap | *.dev.gitlap.com | GitLab サポートテスト | N/A | N/A | SRE とサポートオーナー |
| do.gitlap | *.do.gitlap.com | GitLab サポートテスト | N/A | N/A | SRE とサポートオーナー |

GitLap 環境はサポートテスト用に主に使用される古いドメインです。
`*.dev.gitlap.com` と `*.do.gitlap.com` 配下のすべての DNS レコードは
[dev-resources リポジトリ](https://gitlab.com/gitlab-com/dev-resources/) の Terraform で管理されています。

唯一重要なシステムは `gitlab-runner-builder.gitlap.com` で、
[gitlab-runner プロジェクト](https://gitlab.com/gitlab-org/gitlab-runner) の CI ランナーとして使用されています。

### Env-Projects

| **名前** | **URL** | **目的** | **デプロイ** | **データベース** | **ターミナルアクセス** |
| ---- | --- | ------- | ------ | -------- | --------------- |
| Env-Projects | N/A | GCP のブートストラップ | N/A | N/A | N/A |

この環境は、gitlab.com のサポート/管理/ホスティングに使用されるすべての GCP プロジェクトがプロビジョニングされる起点プロジェクトとして使用されます。プロジェクトにコンピュートリソースは存在せず、GCP プロジェクトを一元管理し、それらのプロジェクト内でのインフラデプロイのための IAM ロール/サービスアカウントをプロビジョニングし、Infrastructure as Code（Terraform）を通じて各 GCP プロジェクトで有効になっている API を制御するためのメカニズムを提供するためにのみ使用されます。

参考: <https://ops.gitlab.net/gitlab-com/gl-infra/config-mgmt/-/tree/main/environments/env-projects>

## Self-Managed

| **名前** | **URL** | **目的** | **デプロイ** | **データベース** | **ターミナルアクセス** |
| ---- | --- | ------- | ------ | -------- | --------------- |
| Self-Managed | さまざま | CE & EE のセルフホストバージョン | ユーザー固有 | ユーザー固有 | ユーザー固有 |

これらはエンドユーザーによりオンプレミスで運用される環境です。私たちはこれらの環境に対して影響、アクセス、制御を持ちません。
