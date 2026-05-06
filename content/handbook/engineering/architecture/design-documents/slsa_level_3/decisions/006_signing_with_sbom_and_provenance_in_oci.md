---
layout: handbook-page-toc
title: "ADR 006: OCI イメージに対する SLSA Level 3 アテステーションの作成を有効にする"
description: "この ADR は、コントロールプレーン内で OCI レジストリのイメージのアテステーションを実行するための技術的メカニズムを確立します。"
upstream_path: "/handbook/engineering/architecture/design-documents/slsa_level_3/decisions/006_signing_with_sbom_and_provenance_in_oci/"
upstream_sha: "86cfa2bd7d73df5a673fe5ebd33b028d0f540434"
translated_at: "2026-04-27T09:00:00Z"
translator: claude
stale: false
---

## 背景

GitLab は [GitLab で SLSA Level 2 準拠を達成する](https://about.gitlab.com/blog/achieve-slsa-level-2-compliance-with-gitlab/) ブログ記事で言及されているように、ユーザーが SLSA Level 2 アテステーションを生成するためのメカニズムを提供しています。
また、GitLab は [SLSA Level 3 プロベナンスアテステーション](/handbook/engineering/architecture/design-documents/slsa_level_3/) エピックで文書化されているように、ユーザーが Level 3 アテステーションを実行できる方法を提供するための取り組みを進めています。

これを達成するには、SLSA Level 3 の要件として、アテステーションをビルド外で、かつコントロールプレーン内で生成する必要があります。この方法でアーティファクトを認証するメカニズムは、[アテステーション API](https://docs.gitlab.com/api/attestations/) と [GitLab SLSA](https://docs.gitlab.com/ci/pipeline_security/slsa/) ページに記載されているように、フィーチャーフラグの後ろでリリース済みです。

この ADR は、コントロールプレーン内で Open Container Initiative（OCI）レジストリのイメージのアテステーションを実行するための技術的メカニズムを確立します。また、この機能をサポートすることに関心を持つ理由も文書化しています。

この ADR の範囲は、アーティファクトのアテステーションと同じ制約に限定されています。具体的には、GitLab.com の[パブリックグッド](https://openssf.org/blog/2023/10/03/running-sigstore-as-a-managed-service-a-tour-of-sigstores-public-good-instance/) Sigstore インフラストラクチャを使用するパブリックプロジェクトのみがサポートされます。

### なぜこの変更が必要か？

アーティファクトの SLSA Level 3 アテステーションを行う以前の作業を踏まえ、以前の統合の側面を活用してこの非常に一般的なシナリオのサポートを提供できます。SLSA Level 3 アーティファクトとコンテナイメージの生産を促進する根拠についての詳細は、[エピックページ](/handbook/engineering/architecture/design-documents/slsa_level_3/#goals)を参照してください。

SLSA Level 3 準拠の観点では、この変更は以下に文書化されているように必要です。

## 高レベルの概要

高レベルでは、使用する OCI レジストリに関わらず、レジストリイメージのアテステーションプロセスは以下のとおりです：

- ビルドがイメージを生成してレジストリにアップロードする。例えば、[コンテナレジストリへのコンテナイメージのビルドとプッシュ](https://docs.gitlab.com/user/packages/container_registry/build_and_push_images/)に記載のとおり。
- ビルドが必要な環境変数（具体的には `ATTEST_CONTAINER_IMAGES` と `IMAGE_DIGEST`）を渡す。
- `Ci::BuildFinishedWorker` が呼び出され、`SupplyChain::publish_provenance_for_build?` が true の場合に [`Ci::Slsa::PublishProvenanceService`](https://gitlab.com/gitlab-org/gitlab/-/blob/master/app/services/ci/slsa/publish_provenance_service.rb) を呼び出す。
- このサービス内で設定が確認され、適切な場合はアテステーションが実行される。
- このアテステーションに関する情報が `Ci::Slsa::Attestation` モデルに永続化される。
- ユーザーは `glab` を使用してこのアテステーションを検証できる。

### 必要な UX の変更

[UX ディスカッションの提案](https://gitlab.com/gitlab-org/gitlab/-/work_items/547903#note_2748278333) では高レベルのアプローチを概説しています。概念実証に基づいていくつかの変更を加えた後、最終的な UX は以下のようになります：

```yaml
build-gitlab-registry:
  stage: build
  variables:
    ATTEST_CONTAINER_IMAGES: true
  script:
    - DOCKER_IMAGE_NAME=registry.test:5100/root/control-plane-container
    - echo "$CI_REGISTRY_PASSWORD" | docker login $CI_REGISTRY -u $CI_REGISTRY_USER --password-stdin
    - docker build -t $DOCKER_IMAGE_NAME .
    - docker push $DOCKER_IMAGE_NAME

    - IMAGE_DIGEST="$(docker inspect --format='{{index .Id}}' "$DOCKER_IMAGE_NAME")" # SHA256 ハッシュを返す
    - echo "IMAGE_DIGEST=$IMAGE_DIGEST" >> build.env
  artifacts:
    reports:
      dotenv: build.env
```

以下の条件が満たされた場合にアテステーションが実行されます：

- `ATTEST_CONTAINER_IMAGES` が true。
- IMAGE_DIGEST が存在する。
- `project.public?` が true。
- ステージ名が `build`。

`IMAGE_DIGEST` 変数は以下の形式で渡せます：

```plaintext
sha256:9bf00f5090086aba643d21f8ed663576855add63b7b780b4eaffc5124812c3c9
sroqueworcel/test-slsa-sbom@sha256:9bf00f5090086aba643d21f8ed663576855add63b7b780b4eaffc5124812c3c9
9bf00f5090086aba643d21f8ed663576855add63b7b780b4eaffc5124812c3c9
```

### 参照

- [Open Container Initiative - Open Container Initiative](https://opencontainers.org/)
- [SLSA • Build: Requirements for producing artifacts](https://slsa.dev/spec/v1.2/build-requirements)
- [Registry Support - Sigstore](https://docs.sigstore.dev/cosign/system_config/registry_support/)
- [GitHub - google/go-containerregistry: Go library and CLIs for working with container registries](https://github.com/google/go-containerregistry)
- [How to Sign a Container with Cosign — Chainguard Academy](https://edu.chainguard.dev/open-source/sigstore/cosign/how-to-sign-a-container-with-cosign/)
- [Signing artifacts, attesting builds, and why you should do both](https://some-natalie.dev/blog/signing-attesting-builds/)
- [Calculate sha256 digest of artifact on PublishProvenanceService](https://gitlab.com/gitlab-org/gitlab/-/issues/559267)
- [[Discussion] UX to enable SLSA provenance generation (#547903)](https://gitlab.com/gitlab-org/gitlab/-/work_items/547903#note_2748278333)
- [Cosign Image Signatures. The protocol format explained!](https://medium.com/sigstore/cosign-image-signatures-77bab238a93)

## 技術的背景

### SLSA L3 要件

コントロールプレーン内でアテステーションを実行することで、[プロベナンスは偽造不可能](https://slsa.dev/spec/v1.2/build-requirements#provenance-unforgeable)という要件を満たすことを目指しています：

> プロベナンス内のすべてのフィールドは、信頼できるコントロールプレーン内のビルドプラットフォームによって生成または検証されなければならない。ユーザーが制御するビルドステップは、プロベナンスは本物である（Provenance is Authentic）に記載されている場合を除き、内容を注入または変更することができない。

このトピックの詳細については、[アーキテクチャ決定：SLSA プロベナンスをどこで生成するか？(#537049)](https://gitlab.com/gitlab-org/gitlab/-/work_items/537049) ADR と [Build L3 でのプロベナンスは偽造不可能要件の明確化 (#986)](https://github.com/slsa-framework/slsa/issues/986) を参照してください。

コントロールプレーンは次のように[定義](https://github.com/slsa-framework/slsa/blob/56e4016f3c3332d64caf19ef629a1e06ccc7d407/docs/spec/v1.2/terminology.md)されています：

> 各独立したビルドの実行を調整し、プロベナンスを生成するビルドプラットフォームのコンポーネント。コントロールプレーンは管理者によって管理され、テナントの制御外にある信頼できる存在です。

### クロスレジストリサポート

クロスレジストリサポートの情報は[レジストリサポート](https://docs.sigstore.dev/cosign/system_config/registry_support/)ページで確認できます。`cosign` はレジストリ連携に [`google/go-containerregistry`](https://github.com/google/go-containerregistry) を使用しており、広範な互換性があります。

GitLab コンテナレジストリと DockerHub の統合例は [POC: Cosign artifact signing with SBOM and Provenance in OCI registries](https://gitlab.com/gitlab-org/gitlab/-/merge_requests/219448) で確認できます。

## 主要決定：認証

### `cosign attest` でレジストリに対して認証する

上述のとおり、`cosign` はレジストリとの統合に `go-containerregistry` を使用しています。このパッケージが認証を処理する方法は [README ファイル](https://github.com/google/go-containerregistry/blob/main/pkg/authn/README.md)に記載されています。

> `DefaultKeychain` は Docker 設定ファイル（通常は `~/.docker/config.json`、Windows では `%USERPROFILE%\.docker\config.json`）、または `DOCKER_CONFIG` 環境変数が設定されている場合はそこに記載された場所に記述された認証情報を使用します。

実際には、バックエンドジョブで以下のように認証できます：

- `docker login` が使用するのと同じ手法を使い、`cosign login` を活用する。デフォルトでは、この認証方法は認証情報をグローバルな場所（具体的には `~/.docker/config.json`）に保存する。上記のように `DOCKER_CONFIG` をオーバーライドすることで、この動作を変更できる。
- `cosign` コマンドの `--registry*` パラメーター（`--registry-password`、`--registry-server-name`、`--registry-token`、`--registry-username`）を使用する。コマンドラインパラメーターでパスワードを渡すとその開示につながる可能性があるという欠点がある。[コマンドラインで ps/wmic に露出せずにパスワードを安全に送信する](https://stackoverflow.com/questions/50960822/sending-passwords-securely-via-command-line-without-being-exposed-in-ps-wmic-wi)を参照。

これら 2 つのうち、一時ディレクトリと組み合わせた `DOCKER_CONFIG` 環境変数のオーバーライドが最も実行可能なアプローチのようです。この例は[コンテナアテステーションの概念実証](https://gitlab.com/gitlab-org/gitlab/-/blob/0a81968df87d0f18e648b3c81db47ba8a7f68886/app/services/ci/slsa/publish_provenance_service.rb#L70)で確認できます。

認証に関する追加ドキュメント：

- [コンテナレジストリで認証する](https://docs.gitlab.com/user/packages/container_registry/authenticate_with_container_registry/#use-gitlab-cicd-to-authenticate)
- [`docker login`](https://docs.docker.com/reference/cli/docker/login/)
- [個人アクセストークン](https://docs.docker.com/security/access-tokens/#use-personal-access-tokens)
- [Amazon ECR でのプライベートレジストリ認証 - Amazon ECR](https://docs.aws.amazon.com/AmazonECR/latest/userguide/registry_auth.html)

### レジストリに接続せずにアテステーションする

`cosign attest` は 2 つの理由から OCI レジストリ認証を必要とします：

- OCI リモート文字列を SHA256 ダイジェストに変換するため。
- アテステーションをリモート OCI レジストリに保存するため。

ジョブ自体で SHA256 を取得できること、またバンドルを私たち自身で保存することがデータベースモデルとより適切に一致することから、コンテナをブロブとしてアテステーションできます。これにより、レジストリへのアクセスが不要になり、はるかにシンプルになります。

```shell
./cosign attest-blob --predicate ~/predicate.txt --type slsaprovenance1 --hash 127dfd758f2cf2ebab7ba7766bbf605694d7cc8ba68bc4f73386ac94e56d7eef --new-bundle-format --bundle container-blob.bundle index.docker.io/sroqueworcel/test-slsa-sbom
Using payload from: /Users/samroque-worcel/predicate.txt
Generating ephemeral keys...
Wrote bundle to file container-blob.bundle
~/code/cosign % ./cosign verify-blob --new-bundle-format --bundle container-blob.bundle --certificate-identity sroque-worcel@gitlab.com --certificate-oidc-issuer https://accounts.google.com /tmp/lol/blobs/sha256/127dfd758f2cf2ebab7ba7766bbf605694d7cc8ba68bc4f73386ac94e56d7eef
Verified OK

% cat container-blob.bundle | jq -r '.dsseEnvelope.payload' | base64 -d | jq  | head -n 15                                                                                                                                                                   {
  "_type": "https://in-toto.io/Statement/v0.1",
  "predicateType": "https://slsa.dev/provenance/v1",
  "subject": [
    {
      "name": "test-slsa-sbom",
      "digest": {
        "sha256": "127dfd758f2cf2ebab7ba7766bbf605694d7cc8ba68bc4f73386ac94e56d7eef"
      }
    }
  ],
  "predicate": {
    "buildDefinition": {
      "buildType": "https://docs.gitlab.com/ci/pipeline_security/slsa/provenance_v1",
      "externalParameters": {
```

このアプローチにはいくつかの利点があります：

- いかなる OCI レジストリとの統合も必要ない。レジストリにアクセスせずにアテステーションを生成できる。
- `cosign` のアップグレードが不要。

### レジストリに接続してアテステーションする

OCI コンテナに接続するが（ファイルをアップロードしない）プロベナンスアテステーションの例は以下のとおりです：

```shell
# cosign v3.0.3 以降が必要。
% ./cosign attest --predicate ~/predicate.txt --type slsaprovenance1 docker.io/sroqueworcel/test-slsa-sbom@sha256:127dfd758f2cf2ebab7ba7766bbf605694d7cc8ba68bc4f73386ac94e56d7eef --new-bundle-format --bundle container.bundle

% cat container.bundle | jq -r '.dsseEnvelope.payload' | base64 -d | jq | head -n 15
{
  "_type": "https://in-toto.io/Statement/v0.1",
  "predicateType": "https://slsa.dev/provenance/v1",
  "subject": [
    {
      "name": "index.docker.io/sroqueworcel/test-slsa-sbom",
      "digest": {
        "sha256": "127dfd758f2cf2ebab7ba7766bbf605694d7cc8ba68bc4f73386ac94e56d7eef"
      }
    }
  ],
  "predicate": {
    "buildDefinition": {
      "buildType": "https://docs.gitlab.com/ci/pipeline_security/slsa/provenance_v1",
      "externalParameters": {
```

アテステーションは SHA256 のみによって照合されるため、このアテステーションは `cosign attest` コマンドで生成されたアテステーションと同様に検証できます。

### `Ci::Slsa::Attestation` と `glab` との統合

上記で生成されたバンドルファイルは `Ci::Slsa::Attestation` モデルと互換性があります。これは、アーティファクトをアテステーションする方法も Sigstore バンドルを生成するためです。

上記のバンドルファイルの内容をそのモデル内に保存することで、アーティファクトアテステーションと同じ方法で取得できます。このアプローチでは `glab` もモデル自体も変更する必要はありませんが、使用方法のドキュメント化が必要です：

```shell
% ./cosign save docker.io/sroqueworcel/test-slsa-sbom@sha256:127dfd758f2cf2ebab7ba7766bbf605694d7cc8ba68bc4f73386ac94e56d7eef --dir /tmp/dir
% glab verify attestation project/project /tmp/dir/blobs/sha256/127dfd758f2cf2ebab7ba7766bbf605694d7cc8ba68bc4f73386ac94e56d7eef
```

`cosign` を使用した検証には以下のコードが必要です：

```shell
% ./cosign save docker.io/sroqueworcel/test-slsa-sbom@sha256:127dfd758f2cf2ebab7ba7766bbf605694d7cc8ba68bc4f73386ac94e56d7eef --dir /tmp/dir
% ./cosign verify-blob --new-bundle-format --bundle container.bundle --certificate-identity sroque-worcel@gitlab.com --certificate-oidc-issuer https://accounts.google.com /tmp/dir/blobs/sha256/127dfd758f2cf2ebab7ba7766bbf605694d7cc8ba68bc4f73386ac94e56d7eef
Verified OK
```

代わりに、ファイルをディスクにダウンロードせずに済む以下の手法も使用できます：

```shell
./cosign verify-blob-attestation --bundle container.bundle --type=slsaprovenance1 --digest="127dfd758f2cf2ebab7ba7766bbf605694d7cc8ba68bc4f73386ac94e56d7eef" --digestAlg="sha256" --certificate-identity=sroque-worcel@gitlab.com --certificate-oidc-issuer=https://accounts.google.com
Verified OK
```

上記の機能は `attest` を使用する場合、v3.0.3 以降が必要です。これは `--bundle` フラグのサポートがそこで導入されたためです。そのリリースの[変更履歴](https://github.com/sigstore/cosign/blob/main/CHANGELOG.md#v303)には以下の注記があります：

> Cosign v3 へのすべてのフィードバックありがとうございます！v3.0.3 はコミュニティから報告された多くのバグを修正し、新しいバンドル形式と OCI でのアテステーションストレージのサポートを追加コマンドに追加しました。残りのコマンドとの互換性に取り組み続け、まもなく新しいリリースを行います。問題が発生した場合は、[Issue を作成](https://github.com/sigstore/cosign/issues)してください。

近い将来、`verify-attestation` コマンドに `--bundle` フラグを直接渡せるようになる可能性があり、`cosign` のユーザーは上記の例のようにイメージをディスクにダウンロードせずにアテステーションを検証できるようになります。

### 決定

パイプラインセキュリティチームは、[レジストリに接続せずにアテステーションする](#レジストリに接続せずにアテステーションする)で議論されているように、レジストリに接続せずにアテステーションを行うことを決定しました。

#### ポジティブな結果

- 実装時間が大幅に短縮される。
- 外部インフラストラクチャへの依存が軽減される。
- すべての OCR レジストリおよびすべての認証メカニズムに対して認証をテストする必要がない。
- 認証情報の取り扱いに関するセキュリティ上の懸念に対処する必要がない。
- レジストリのユーザー名、パスワード、トークンを扱う必要がないため、UX がシンプル。

#### ネガティブな結果

- このアプローチでは OCI レジストリへのアテステーションのアップロードが許可されない。アテステーションを `Ci::Slsa::Attestation` モデルに保存する計画なので、これは私たちには影響しない。将来的に必要な場合は、`cosign attach attestation` を使用してアテステーションをアップロードできる。

## 主要決定：新しいワーカー対既存ワーカーの変更

[Cosign artifact signing with SBOM and Provenance in OCI registries](https://gitlab.com/gitlab-org/gitlab/-/merge_requests/219448) の概念実証では、OCI イメージのアテステーションを実行するために `cosign` と統合するコードが `Ci::Slsa::PublishProvenanceService` に直接書かれています。新しいワーカーとサービスも選択肢でしたが、以下の理由から現在のワーカーの変更が選択されました：

- 実装の容易さ：`cosign` を実行して出力を取得するために必要なすべてのメカニズムがこのファイル内に存在する。
- アーキテクチャのシンプルさ：追加のワーカーとそれに関連するサービスを作成することを避けることで、よりシンプルな設計が実現できる。
- ワーカーの命名は複数種類のオブジェクトのアテステーションに適している。
- 2 種類のアテステーション間には強い重複がある。例えば、どちらのアテステーションタイプもバンドルファイルを生成し、そのバンドルに基づくアテステーションの作成が必要。
- 単一のビルドが OCI コンテナとアーティファクトの両方のアテステーションを生成する場合、これは [SLSA アテステーション生成エラーを CI ビルド UI に追加 (#570341)](https://gitlab.com/gitlab-org/gitlab/-/work_items/570341) で採用されたアプローチと互換性があり、ユーザーへのエラー報告が簡素化される。

この設計には欠点があります：各単一ビルドに対して、アーティファクトとコンテナのアテステーションは同じバックグラウンドジョブで行われます。この分離の欠如は、OCI イメージのアテステーションが失敗した場合、その失敗が同じビルド内のアーティファクトのアテステーションに波及する可能性があることを意味します。他のビルドは影響を受けません。

これは適切な[例外処理](https://docs.gitlab.com/development/logging/#exception-handling)と[適切な抽象化](https://docs.gitlab.com/development/reusing_abstractions/)によって軽減できます。

最終実装のために適切な抽象化と再利用可能なコードが作成されます。

## テスト、パフォーマンス、可用性

高い可用性と堅牢なパフォーマンスを確保するため、SSCS ステージのパイプラインセキュリティチームがいくつかの措置を講じます：

- フィーチャーフラグの後ろで本番環境のアテステーションプロセスを手動テストし、他の GitLab ユーザーへの偶発的な影響を防ぐ。
- `cosign` 統合のエンドツーエンドテストにより、`cosign` のアップグレードの保証を提供する。
- 特にレジストリ障害や Sigstore 障害を含むシナリオに対して広範なテストカバレッジを実装する。これにより、障害を適切に処理するための適切な措置が整っていることを確認できる。
- sigstore インフラストラクチャやレジストリの断続的な障害が SLSA アテステーション生成の継続的な失敗につながらないよう、Sidekiq ジョブを適切にリトライするよう設定する。
- この機能は明示的にオプトインしたユーザーのみに有効化する。
- Sigstore の一時的な障害への対処に Sidekiq のデフォルトの[リトライ設定](https://docs.gitlab.com/development/sidekiq/#retries)を使用する。また、[外部依存関係](https://docs.gitlab.com/development/sidekiq/worker_attributes/#jobs-with-external-dependencies)を持つワーカーとしてフラグを設定した。
