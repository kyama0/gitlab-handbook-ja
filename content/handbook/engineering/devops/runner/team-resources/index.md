---
title: Runner グループ - チームリソース
description: "このページの目的は、Runner グループの日々の業務に必要なリソースをドキュメント化することです。"
upstream_path: "/handbook/engineering/devops/runner/team-resources/"
upstream_sha: "1065c86ab1ba75adefbb07560d726608885e6d4e"
translated_at: "2026-04-28T14:02:31Z"
translator: claude
stale: false
lastmod: "2025-12-18T11:38:32-06:00"
---

## 概要

このページの目的は、Runner グループの日々の業務に必要なリソースをドキュメント化することです。

## おすすめのブックマーク

- [チームハンドブック](/handbook/engineering/devops/runner/)
- [社内エンジニアリングハンドブック](https://internal.gitlab.com/handbook/engineering/)
- [Runner SaaS HQ Issue](https://gitlab.com/groups/gitlab-org/-/epics/9969)
- [公開 Runner ドキュメント](https://docs.gitlab.com/runner/)
- [公開開発ドキュメント](https://docs.gitlab.com/runner/development/)
- [Runner ランブック](https://gitlab.com/gitlab-com/runbooks/-/tree/master/docs/ci-runners)
- [GitLab.com トリアージ](https://dashboards.gitlab.net/d/RZmbBr7mk/gitlab-triage?orgId=1)（状況把握用）
- [ブループリント](https://gitlab.com/gitlab-org/gitlab/-/tree/master/doc/architecture/blueprints)（`runner` で検索）

## 私たちがメンテナンスするプロジェクト

チームとして複数のプロジェクトをメンテナンスしています。<https://gitlab.com/gitlab-com/runner-maintainers> グループは各プロジェクトにメンテナー権限で追加されています。また、各プロジェクト間でツールとバージョンを統一するよう努めています。

### プロダクトプロジェクト

- [GitLab Runner](https://gitlab.com/gitlab-org/gitlab-runner)
- [GitLab Runner Operator for Kubernetes](https://gitlab.com/gitlab-org/gl-openshift/gitlab-runner-operator)
- [GitLab Runner Helm Chart](https://gitlab.com/gitlab-org/charts/gitlab-runner)
- [GitLab Runner UBI オフラインビルド](https://gitlab.com/gitlab-org/ci-cd/gitlab-runner-ubi-images)

### Runner コンポーネントプロジェクト

- [Taskscaler](https://gitlab.com/gitlab-org/fleeting/taskscaler)
- [Fleeting](https://gitlab.com/gitlab-org/fleeting/fleeting)
- [Fleeting Plugin AWS](https://gitlab.com/gitlab-org/fleeting/fleeting-plugin-aws)
- [Fleeting Plugin Google Compute](https://gitlab.com/gitlab-org/fleeting/fleeting-plugin-googlecompute)
- [Fleeting Plugin Azure](https://gitlab.com/gitlab-org/fleeting/fleeting-plugin-azure)
- [Fleeting Plugin Static](https://gitlab.com/gitlab-org/fleeting/fleeting-plugin-static)
- [Nesting](https://gitlab.com/gitlab-org/fleeting/nesting)
- [Docker Machine（フォーク）](https://gitlab.com/gitlab-org/ci-cd/docker-machine)
- [Custom Executor Autoscaler](https://gitlab.com/gitlab-org/ci-cd/custom-executor-drivers/autoscaler)

### CI Steps プロジェクト

- [Step Runner](https://gitlab.com/gitlab-org/step-runner)
- [Action Runner](https://gitlab.com/gitlab-org/components/action-runner)

### ヘルパープロジェクト

- リンター
  - [Runner linters Docker イメージ](https://gitlab.com/gitlab-org/ci-cd/runner-tools/runner-linters)
  - [goargs リンター](https://gitlab.com/gitlab-org/language-tools/go/linters/goargs)
- テスト
  - [DinD イメージテスト](https://gitlab.com/gitlab-org/ci-cd/tests/dind-image-tests)
  - [SaaS Runner テスト](https://gitlab.com/gitlab-org/ci-cd/tests/saas-runners-tests/)
- リリース
  - [プロセス](https://gitlab.com/gitlab-org/ci-cd/runner-tools/releases)
  - [リリースツール](https://gitlab.com/gitlab-org/ci-cd/runner-tools/releaser)
  - [GitLab Changelog](https://gitlab.com/gitlab-org/ci-cd/runner-tools/gitlab-changelog)
  - [リリースインデックスジェネレーター](https://gitlab.com/gitlab-org/ci-cd/runner-tools/release-index-generator)
- メンテナンス
  - [Runner Pod クリーンアップ](https://gitlab.com/gitlab-org/ci-cd/gitlab-runner-pod-cleanup)

### Runner の公開 API に依存する GitLab プロジェクト

以下のプロジェクトは Runner の公開 API に依存しており、公開 API への変更・廃止を行う際にはその範囲として考慮する必要があります:

| プロジェクト | API |
|---------| --- |
| [GitLab Terraform プロバイダー](https://gitlab.com/gitlab-org/terraform-provider-gitlab) | [REST API](https://docs.gitlab.com/ee/api/api_resources.html) |
| [GitLab CLI](https://gitlab.com/gitlab-org/cli) | [REST API](https://docs.gitlab.com/ee/api/api_resources.html) |

## セキュリティプロセス（CVE 脆弱性報告 Issue の管理）

CVE 脆弱性 Issue の管理は、GitLab の脆弱性管理の取り組み
([1](https://internal.gitlab.com/handbook/security/product_security/vulnerability_management/)、
[2](/handbook/security/product-security/vulnerability-management/))の一部であり、
GitLab FedRAMP 認証を維持するための重要な要素です。

[`container-scanners`](https://gitlab.com/gitlab-com/gl-security/appsec/container-scanners) プロジェクトを使用して、GitLab は私たちが生成するすべてのイメージをスキャンし、CVE 脆弱性を検出します。これらのスキャンから、
[`vulnmapper`](https://gitlab.com/gitlab-com/gl-security/product-security/vulnerability-management/vulnerability-management-internal/vulnmapper)
プロジェクトが脆弱なイメージを作成したプロジェクトに Issue を作成し、遵守すべき [SLA](/handbook/security/product-security/vulnerability-management/sla/) を含みます。
週次チームタスクで `Support & Security Responder` の役割を担当する Runner チームメンバーが CVE のリストをトリアージし、レビューして、適切に Issue に対処する必要があります:

- `Critical`（重大）の severity の Issue は即座に対処する必要があります。
- `High`（高）、`Medium`（中）、`Low`（低）の severity の Issue は、[修正 SLA](/handbook/security/product-security/vulnerability-management/sla/) の優先順位に従って対処する必要があります。

CVE Issue への対処手順は次のとおりです:

### アクティブな脆弱性報告の表示

- 次のいずれかを使用して、チームに割り当てられたアクティブな CVE Issue を表示します:
  - [Issue 検索](https://gitlab.com/groups/gitlab-org/-/issues/?sort=created_date&state=opened&label_name%5B%5D=FedRAMP%3A%3AVulnerability&label_name%5B%5D=group%3A%3Arunner&not%5Blabel_name%5D%5B%5D=FedRAMP%3A%3ADR%20Status%3A%3AAccepted&not%5Blabel_name%5D%5B%5D=FedRAMP%3A%3ADR%20Status%3A%3AOpen&first_page_size=50)
  - [`gitlab-dashboard cves`](https://gitlab.com/avonbertoldi/gitlab-dashboard) コマンド
  - [`cver imageVulns`](https://gitlab.com/gitlab-org/ci-cd/runner-tools/cver.git) コマンド

     多くの Issue が同じ CVE 脆弱性報告を参照しています。同じ脆弱性報告の Issue をグループ化してまとめて対処するのが最善です。
- CVE 報告を優先順位に従って対処し、`critical`、`high`、`medium` の severity を最初に処理します。以下の手順に従ってください:
  1. 共通 / 関連する Issue のグループごとに、関連する CVE がまだ有効かどうかを確認します。これは、
     [`trivy`](https://trivy.dev/) や [`grype`](https://github.com/anchore/grype) などのツールで Issue に示された画像の `latest` バージョンをスキャンし、`trivy` や `grype` のスキャンに Issue で参照されている CVE が現れるかどうかを確認することで行えます。
  1. 関連する画像の `trivy` または `grype` スキャンで脆弱性が報告されなくなった場合、Issue をクローズできます。上記の `cver` 内部ツールはこのタスクをほぼ自動化しており、関連する Issue のクローズも含まれます（ドキュメントを参照）。
  1. 関連する画像に脆弱性が**まだ**存在する場合は対処する必要があります。

`gitlab-runner` または `gitlab-runner-helper` 画像の `ubi-fips` フレーバーを参照する Issue は、他の画像フレーバー（`alpine` や `ubuntu` など）よりも優先されます。これは GitLab FedRAMP 認証が `ubi-fips` 画像のみに依存しているためです。

### アクティブな脆弱性報告への対処

脆弱性は通常、以下の 3 つのタイプのいずれか（発生頻度の高い順）で現れます:

- サードパーティ OS パッケージ（`git` や `git-lfs` など）に脆弱性が存在する
- `gitlab-runner` の依存関係に脆弱性が存在する
- `gitlab-runner` の私たちが書いたコードに脆弱性が存在する

#### サードパーティ OS パッケージ

この場合、脆弱性は:

- アップストリームで修正されていない
- アップストリームで修正されているが、修正を含む OS パッケージがまだ作成・公開されていない
- アップストリームで修正されない予定

主な対処方針は、[`deviation request issue`](https://gitlab.com/gitlab-com/gl-security/security-assurance/team-security-dedicated-compliance/poam-deviation-requests/-/issues)
を作成することです（
<https://handbook.gitlab.com/handbook/security/security-assurance/security-compliance/poam-deviation-request-procedure/>
を参照）。一般に、問題のあるソフトウェアモジュール（例: `git-lfs` や `libcurl`）ごとに 1 つの deviation request Issue を作成します。Issue を作成する際は、必ず `operational_requirement_template` をテンプレートとして選択し、以下のセクションを記入してください:

- 影響を受けるイメージ
- 脆弱性の詳細（関連する CVE 報告ごとに 1 行）
- 関連する `vulnmapper` Issue
- 理由

deviation request Issue が作成されたら、次を追加してください:

- 関連するすべての `gitlab-runner` Issue への deviation request Issue へのメモ
- ラベル `FedRAMP::DR Status::Open`
- このリストから[最も関連性の高いラベル](/handbook/security/product-security/vulnerability-management/labels/):

  - `Vulnerability::Vendor Base Container::Fix Unavailable`
  - `Vulnerability::Vendor Base Container::Will Not Be Fixed`
  - `Vulnerability::Vendor Package::Fix Unavailable`
  - `Vulnerability::Vendor Package::Will Not Be Fixed`

最終的に、問題のあるパッケージの修正が OS パッケージマネージャーに反映されると、`gitlab-runner` と deviation request 両方の Issue をクローズできます。

#### `gitlab-runner` の依存関係

ここで最もシンプルな対処方針は、依存関係を最新の互換バージョン（または少なくとも脆弱性に対処したバージョン）に更新することです。依存関係の更新を含む MR がマージされると、`gitlab-runner` の Issue をクローズできます。

依存関係が脆弱性に対処しない場合、考えられる対処方針は:

- 脆弱性に対処した依存関係のフォークが存在する場合、Go モジュールの `replace` ディレクティブで使用します。この場合、アップストリームの依存関係で脆弱性が対処された際に元に戻すタスクを必ず作成してください。
- 可能であれば、その依存関係を使用しないか、別の同様の依存関係に置き換えることを検討します。
- [deviation request Issue](#サードパーティ-os-パッケージ)を作成します。

#### `gitlab-runner` のソースコード

ここでの唯一の対処方針は、脆弱なコードを修正することです。修正が単純でなく実装に時間がかかる場合（CVE の SLA を満たせない可能性がある場合）、[deviation request Issue](#サードパーティ-os-パッケージ)の作成が必要になる場合があります。

### セキュリティフォークを使用した作業

Issue が機密扱いになっている場合、Issue を修正する MR はプロジェクトのセキュリティフォークで作成する必要があります（[security-forks](https://gitlab.com/gitlab-org/security?filter=gitlab%20runner)を参照）。一般的にプロセスは正規プロジェクトリポジトリでの MR 作成・マージと同じですが、いくつかの重要な相違点があります。

セキュリティリポジトリの MR は、Runner コードオーナーに加えて、セキュリティの対応者によるレビュー / 承認が**必須**であることに注意してください。

以下の例は [GitLab Runner](https://gitlab.com/gitlab-org/gitlab-runner) プロジェクトを対象としていますが、[セキュリティフォークを持つすべての Runner 関連プロジェクト](https://gitlab.com/gitlab-org/security?filter=gitlab%20runner)にも同様に適用されます。

#### セキュリティフォークを正規リポジトリと同期する

セキュリティフォークは正規リポジトリと自動的に同期するよう設定されていますが、セキュリティフォークの `main` ブランチに正規リポジトリの `main` ブランチに存在しない変更がある場合、無効になることがあります。これは通常、セキュリティ MR がセキュリティフォークの `main` にマージされたが、正規リポジトリの `main` にはマージされていない場合に発生します。この場合、セキュリティフォークを正規リポジトリと手動で同期させる必要があります。

チェックアウト済みの正規リポジトリから:

```shell
git fetch # 正規リポジトリの最新変更があることを確認します
git remote add security git@gitlab.com:gitlab-org/security/gitlab-runner.git # セキュリティリポジトリをリモートとして追加します。git URL を使用してください
git fetch security # セキュリティフォークのリポジトリ参照をフェッチします
git checkout -b security-main security/main # セキュリティフォークの main ブランチをチェックアウトします
git rebase --rebase-merges origin/main # 正規の main をセキュリティの main にリベースします
git log --color --topo-order --oneline # 結果の履歴が正常であることを確認します
git push --force # 結果のローカル security main ブランチをセキュリティリモートリポジトリにプッシュします
```

注意:

1. これらの手順では、セキュリティリポジトリと正規リポジトリを双方向に完全同期させません。正規リポジトリにのみ存在する変更をセキュリティリポジトリに取り込むだけです。逆方向の同期は以下で説明します。
2. セキュリティリポジトリは `main` ブランチに force-push ブランチ保護を持つべきではありませんが、作業中のものに保護がある場合は、最後のステップを実行できるように一時的に無効にしてください。
3. セキュリティフォーク `main` ブランチが正規リポジトリ `main` ブランチと大幅に乖離した場合（特にセキュリティリポジトリのみに存在する変更について）、正規リポジトリをセキュリティフォークにリベースする際にマージの競合が発生する可能性があります。それらを解決する必要があります。

#### セキュリティ MR を正規リポジトリにマージバック

セキュリティリポジトリで作成された MR がマージされると（セキュリティリポジトリの `main` ブランチへ）、セキュリティリポジトリと正規リポジトリは非同期になります。セキュリティフォークから正規リポジトリへの MR のマージは手動プロセスです。開発者が正規リポジトリに取り込みたいセキュリティリポジトリの各 MR は、正規リポジトリへの新しい MR を通じて手動で行う必要があります。この手順が手動なのは、開発者がこれらのマージをいつ行うか制御できるようにするためです。

セキュリティフォークの `main` ブランチにすでにマージされた MR を正規リポジトリにマージするには、次の手順に従ってください:

チェックアウト済みの正規リポジトリから:

```shell
git fetch # 正規リポジトリの最新変更があることを確認します
git remote add security git@gitlab.com:gitlab-org/security/gitlab-runner.git # セキュリティリポジトリをリモートとして追加します。git URL を使用してください
git fetch security # セキュリティフォークのリポジトリ参照をフェッチします
git checkout -b name-of-working-branch origin/main # セキュリティリポジトリからコミットをチェリーピックするための新しいブランチを作成します
git cherry-pick sha-of-commit-in-security-repo # セキュリティリポジトリから関連 MR のすべてのコミットをブランチにチェリーピックします
```

最後のステップを関連 MR のすべてのコミットについて、トポロジカル順に、**マージコミットを除いて**繰り返します。MR のマージコミットをチェリーピックされたコミットに含めないでください。

最後に、このブランチから通常どおり正規リポジトリに MR を作成します。

注意:

1. セキュリティフォークが正規リポジトリと大幅に乖離した場合、コミットのチェリーピック時にマージの競合が発生する可能性があります。それらを解決する必要があります。
2. MR が正規の main にマージされた直後に、上記のようにセキュリティリポジトリを手動で同期させる必要があります。
3. これらの手順の目的は、セキュリティリポジトリと正規リポジトリを双方向に完全同期させることではありません。完全な同期は、セキュリティリポジトリからすべての MR を正規リポジトリにマージする副産物として発生します。各 MR についていつこれが行われるかは開発者の裁量に委ねられています。

## メトリクスとログ

- ダッシュボード
  - [Runner サービス概要](https://dashboards.gitlab.net/d/ci-runners-main/ci-runners-overview?orgId=1)
  - 追加のダッシュボードはトップバーのドロップダウンにあります:

![runner-dashboards](/images/engineering/devops/ops/verify/runner/team-resources/runner-dashboards.png)

- メトリクス
  - [Runner メトリクス](https://docs.gitlab.com/runner/monitoring/index.html)
- ログ
  - [Runner ログ](https://log.gprd.gitlab.net/goto/3d8891e0-2035-11ee-8afc-c9851e4645c0)（シャードでフィルタリング）
  - シャードのリストはサービスダッシュボードのトップバーのドロップダウンにあります:

![runner-shards](/images/engineering/devops/ops/verify/runner/team-resources/runner-shards.png)

## 内部ツール

### マージリクエストボット

[`gitlab-org/gitlab-runner`](https://gitlab.com/gitlab-org/gitlab-runner)
には、[マージリクエストボット](https://gitlab.com/merge-request-bot/merge-request-bot)が有効になっており、
[コミュニティコントリビューションにコメント](https://gitlab.com/gitlab-org/gitlab-runner/-/merge_requests/2407#note_411098266)を投稿します。
これは[マージリクエスト Webhook イベント](https://gitlab.com/gitlab-org/gitlab-runner/hooks)を通じて設定されています。

- [アプリケーションコード](https://gitlab.com/merge-request-bot/merge-request-bot)
- [CloudRun デプロイメント](https://gitlab.com/gitlab-org/ci-cd/merge-request-bot/infrastructure/cloud-run)
- [ログ](https://console.cloud.google.com/logs/query;query=resource.type%20%3D%20%22cloud_run_revision%22%0Aresource.labels.service_name%20%3D%20%22merge-request-bot%22%0Aresource.labels.location%20%3D%20%22europe-west4%22%0A%20severity%3E%3DDEFAULT%0Atimestamp%3E%3D%222020-09-11T10:25:17.532Z%22%20timestamp%3C%3D%222020-09-11T11:25:17.532Z%22;timeRange=PT1H;summaryFields=:true:32:beginning?customFacets=&scrollTimestamp=2020-09-11T11:25:01.157050000Z&project=group-verify-df9383)

## Windows での開発 / テスト

[Windows の開発ドキュメント](https://docs.gitlab.com/runner/development/#developing-for-windows-on-a-non-windows-environment)では Vagrant と Virtualbox の使用を推奨しています。
ただし、最も簡単な方法は Google Compute Engine の Windows インスタンスを作成して RDP 接続することです。
[この特別なイメージ](https://console.cloud.google.com/compute/imagesDetail/projects/group-verify-df9383/global/images/runners-windows-2004-core-containers-beta?project=group-verify-df9383)からインスタンスを作成してください。

### サポート対象バージョン

[LTSC](https://learn.microsoft.com/en-us/lifecycle/products/windows-10-enterprise-ltsc-2019)であるため、かなり古いバージョンの Windows をサポートしています。

## サードパーティインフラ

### IBM Z/OS でのテスト

`s390x` アーキテクチャのアーティファクトのテストを容易にするため、
GitLab チームメンバーが利用できる Z/OS VM があります。

#### ログイン

1. [1Password](/handbook/security/corporate/systems/1password/) の
   `Verify` ボールトで、`zOS login - gitlabkey02.pem` ファイルをダウンロードします。
1. 同じボールトの `zOS login` エントリから、`user` と `address` フィールドを確認します。
1. Z/OS VM に SSH 接続します:

    ```shell
    ssh -i "zOS login - gitlabkey02.pem" <user>@<address>
    ```

   注意: .pem ファイルのロック解除にパスワードが求められます。`zOS login - gitlabkey02.pem` エントリに付属のパスワードを入力してください。

#### ヘルパーイメージのテスト

CI/CD パイプラインで生成された `prebuilt-s390x.tar.xz` イメージをテストしたい場合、かつ[前の手順](#ログイン)の .pem ファイルをすでに持っている場合、手順は次のとおりです:

1. `prebuilt-s390x.tar.xz` ファイルを Z/OS VM にコピーします:

    ```shell script
    scp -i "zOS login - gitlabkey02.pem" prebuilt-s390x.tar.xz <user>@<address>:/home/ubuntu/
    ```

   注意: .pem ファイルのロック解除にパスワードが求められます。`zOS login - gitlabkey02.pem` エントリに付属のパスワードを入力してください。

1. VM に SSH 接続します:

    ```shell
    ssh -i "zOS login - gitlabkey02.pem" <user>@<address>
    ```

1. イメージをインポートして実行します:

    ```shell
    sudo docker import ./prebuilt-s390x.tar.xz gitlab/gitlab-runner-helper:s390x-dev
    sudo docker run -it gitlab/gitlab-runner-helper:s390x-dev bash
    gitlab-runner-helper help
    ```

## Mac Runner AWS 環境へのアクセス

GitLab SaaS Mac Runners は AWS 上で稼働しています。
本番、ステージング、チームサンドボックス、個人サンドボックスの環境があります。
個人サンドボックスは [Hackystack(https://gitlabsandbox.cloud/cloud)] から作成できます。
コスト削減のために未使用リソースには注意してください。[oh-my-cost](https://gitlab.com/josephburnett/oh-my-cost) が役立ちます。
Hackystack には [チームサンドボックス](https://gitlabsandbox.cloud/cloud/accounts/5442c67c-1673-4351-b85d-e366c328bfea)もあり、Mac ジョブイメージビルダーインスタンスのホストに使用されています。
チームサンドボックスへのアクセスはアクセスリクエストで取得できます。
チームサンドボックス内には、ステージングと本番の Mac 環境にアクセスできるロールもあります。

### Mac Runner ステージングへのアクセス

チームサンドボックスから、アカウント ID `251165465090`（ステージング）の `eng_dev_verify_runner` というロールを有効化します。

### Mac Runner 本番へのアクセス

チームサンドボックスから、アカウント ID `215928322474`（本番）の `eng_dev_verify_runner` というロールを有効化します。

## 負荷テスト

グループ [`gitlab-runner-stress`](https://gitlab.com/gitlab-org/ci-cd/gitlab-runner-stress) には GitLab と Runner インスタンスのストレステスト用ツール一式があります。
Mac Runners の標準ベンチマークは [`XcodeBenchmark`](https://gitlab.com/gitlab-org/ci-cd/tests/saas-runners-tests/macos-platform/XcodeBenchmark)（私たちのフォーク）です。

## Runner ベンディングマシン（AWS Cloud Formation テンプレート）

Partner Solution グループは、AWS での Runner デプロイ用の厳選された AWS Cloud Formation テンプレートのコレクションを ["Runner Vending Machine"](https://gitlab.com/guided-explorations/aws/gitlab-runner-autoscaling-aws-asg#easy-buttons-provided) として管理しています。
Runner の動作やデプロイ方法を変更する際はループに入れて、これらのテンプレートを最新の状態に保てるよう連絡してください。
担当者は [DarwinJS](https://gitlab.slack.com/team/UPCBGABMK) です。

## シークレット

Runner のシークレットをどのように管理し、適切な場所に格納するかについては詳細なドキュメントが必要です。
ドキュメント化が必要: https://gitlab.com/gitlab-org/gitlab-runner/-/issues/29823
