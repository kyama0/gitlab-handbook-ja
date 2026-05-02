---
title: "ADR 005: PublishProvenanceService で SHA-256 計算を行う"
description: "プロベナンスアテステーションに必要なアーティファクトファイルの SHA-256 ハッシュを計算する適切な場所に関するアーキテクチャ決定レコード"
upstream_path: "/handbook/engineering/architecture/design-documents/slsa_level_3/decisions/005_perform_sha256_in_service/"
upstream_sha: "86cfa2bd7d73df5a673fe5ebd33b028d0f540434"
translated_at: "2026-04-27T09:00:00Z"
translator: claude
stale: false
---

## コンテキスト

パイプラインセキュリティグループは、ユーザーに [SLSA Level 3 プロベナンスアテステーション](/handbook/engineering/architecture/design-documents/slsa_level_3/) を提供する取り組みを進めています。

[設計ドキュメントに記載されているように](/handbook/engineering/architecture/design-documents/slsa_level_3/)、プロベナンスステートメントとは、アーティファクトの SHA-256 とビルド情報を関連付ける JSON ドキュメントです。その後、ワーカーが[デジタル署名](/handbook/engineering/architecture/design-documents/slsa_level_3/decisions/004_attestation_in_sidekiq/)を行い、これがプロベナンスアテステーションと呼ばれます。この SHA-256 は、サブジェクトとも呼ばれるアーティファクトを識別する唯一の手段です。詳細については[サブジェクトのドキュメント](https://github.com/in-toto/attestation/blob/7aefca35a0f74a6e0cb397a8c4a76558f54de571/spec/v1/statement.md)を参照してください。このドキュメントはジョブアーティファクトの SHA-256 ハッシュを計算する最適な場所を特定することを目的としています。

## 定義

- ジョブアーティファクト：CI ジョブによって生成され、CI 設定の [artifacts ディレクティブ](https://docs.gitlab.com/ci/yaml/#artifacts)で宣言されたジョブアーティファクトとして保存される 1 つ以上のファイル。
- アーティファクトバンドル：GitLab がバックエンドでジョブアーティファクトを永続化するために使用する内部ストレージメカニズム。バンドルは特定のジョブのすべての個別ジョブアーティファクトの zip ファイル。

## なぜこの変更が必要か？

特定のアーティファクトのハッシュとビルド情報を関連付けるプロベナンスアテステーションを生成する必要があります。[現在の実装](https://gitlab.com/gitlab-org/gitlab/-/blob/60c0127f07bfed7c3e83a96df232cb3c1471e3da/app/models/ci/slsa/provenance_statement.rb#L17)はアーティファクトバンドルのアテステーションを行っていますが、これには多くの欠点があります：

- 「アーティファクトバンドル」は GitLab が内部で使用するメカニズムであり、ユーザーには意味がない。例えば、通常ユーザーはこのバンドルを配布するのではなく、アーティファクト自体を配布する。
- アーティファクトの SHA-256 とアーティファクトバンドルの相関関係を現在保存していないため、[目的のアーキテクチャ](/handbook/engineering/architecture/design-documents/slsa_level_3/)を実現することが不可能。特に「API はアーティファクトの SHA-256 で照会され、見つかった場合は Sigstore バンドルを返す」などの要件を満たせない。

## 技術的背景

GitLab では、ジョブアーティファクトはオブジェクトストレージ内の zip ファイル（上述の「アーティファクトバンドル」）に保存されます。ジョブアーティファクトの SHA-256 計算を実行するには、アーティファクトバンドルを取得してその中のジョブアーティファクトを読み取る必要があります。以下のコード例で示します：

```ruby
> file = Ci::Build.last.job_artifacts.filter { |a| a.file_type == "archive"
> }[0].file.file
> entry = Zip::File.open(file).entries[0]
> Digest::SHA256.hexdigest(entry.get_input_stream.read)
3c5bba498d6f7a2cb4c195cf0873c8b68c9407f04dfa9acaad7fe4875e5e93f1
```

この ADR は「[PublishProvenanceService でアーティファクトの sha256 ダイジェストを計算する](https://gitlab.com/gitlab-org/gitlab/-/issues/559267)」Issue のリファインメント中に下された決定を文書化したものです。当初、パイプラインセキュリティチームは[アーティファクトメタデータファイル](https://docs.gitlab.com/ci/jobs/job_artifacts/#view-all-job-artifacts-in-a-project)を生成する Workhorse エンドポイント内でジョブアーティファクトの SHA-256 計算を行うことを決定しました。その理由は、この段階でハッシュを計算することでファイルのダウンロードを回避できると考えたためです。

ハッシュ計算のために Workhorse 内の適切な場所を検討する中で、チームメンバーからハッシュ用のファイル取得に使用するメカニズムもオブジェクトストレージからの取得を引き起こすというフィードバックが寄せられました。また、[このエンドポイントはすでに大幅な遅延の問題を抱えており](https://gitlab.com/gitlab-org/gitlab-runner/-/issues/37220)、メタデータ生成はそこから切り離される予定です。

## 検討したオプション

### 1. Workhorse 内で SHA-256 計算を行う

**メリット:**

- Workhorse はこのような計算負荷の高いタスク向けに特別設計されている。
- Workhorse はすでにアーティファクトバンドルをオブジェクトストレージに直接アップロードし（https://docs.gitlab.com/development/workhorse/#specialized-task-handling）、Rails Web アプリケーションワーカーへの負荷を避けるため、ファイルのストリーミング中に MD5/SHA-256 ハッシュをすでに計算している。
- Workhorse は gitlab-zip-metadata でアーティファクトバンドルの前処理を行う。HTTP Range リクエストを使用してアーティファクトのファイルリストを生成し、ファイル全体のダウンロードを避けている。

**デメリット:**

- 上述のように、このエンドポイントへの追加レイテンシ増加に関する重大な懸念がある。
- このエンドポイントには大きな変更が計画されている。お客様はランナーがマルチパートアップロードでアーティファクトをアップロードできるよう要望しており、私たちが提案している変更はこれと[互換性がない](https://gitlab.com/gitlab-org/gitlab/-/issues/559267#note_2684581152)。
- この重要なコードパス内の変更は、パフォーマンスのボトルネックやアーティファクト生成の問題を引き起こさないよう、慎重にレビューする必要がある。
- アーティファクトのアップロードを処理するエンドポイントはファイルを扱わず、アップロードを直接オブジェクトストレージにストリーミングする。これにより、[zip ファイル形式](https://en.wikipedia.org/wiki/ZIP_(file_format))の複雑さから、zip 内のファイルの SHA-256 計算が[特に困難](https://gitlab.com/gitlab-org/gitlab/-/issues/559267#note_2684581152)になる。
- Workhorse ノードにはこの手順に必要な[一時ストレージが不足している](https://gitlab.com/gitlab-org/gitlab/-/issues/559267#note_2686321918)。

### 2. Runner 内でハッシュ計算を行う

**メリット:**

- 圧縮前にファイルにアクセスできるため、ファイルのハッシュ計算は非常に容易。

**デメリット:**

- セキュリティの観点から、Runner は信頼されていないコードを実行する。そのため、ファイルハッシュ計算などのセキュリティ上重要な操作を行う適切な場所ではない。
- Runner は[信頼できるコントロールプレーン](https://slsa.dev/spec/v1.0/verifying-systems#control-plane)の一部ではない。コントロールプレーン外での SHA-256 計算が SLSA Level 3 で許容可能かどうか確認が必要。
- オブジェクトストレージへの転送中のデータ整合性に関する懸念があり、データの破損によるファイル変更を防ぐ必要がある。
- これらのハッシュを zip ファイルと一緒に送信する必要があるが、アップロードからメタデータ生成までの間に複数の中間ステップがあるため、これは自明ではない。

### 3. PublishProvenanceService サービス内で署名を行う

このサービスは `PublishProvenanceWorker` Sidekiq ワーカーによって呼び出されます。この実装の[概念実証](https://gitlab.com/gitlab-org/gitlab/-/merge_requests/201393)が利用可能です。

**メリット:**

- `cosign attest-blob` コマンドには必須の `<BLOB>` パラメーターがあり、この場合はジョブアーティファクトになる。ハッシュ計算のためにジョブアーティファクトを取得するため、ファイルを再利用できる。Workhorse でハッシュ計算を行った場合でも、アテステーションのためにブロブをダウンロードする必要がある。
- 導入されるレイテンシは Workhorse のアーティファクト生成に影響を与えない。
- 実装に必要なコードはパイプラインセキュリティ開発者が熟練している Ruby で書ける。
- 解決策が比較的シンプル。
- アーティファクトの取得と読み取りの[メカニズムはすでに存在](https://gitlab.com/gitlab-org/gitlab/-/blob/master/lib/gitlab/ci/artifact_file_reader.rb)しており、例として使用できる。
- [zip ファイルを扱うためのセキュアコーディングガイドライン](https://docs.gitlab.com/development/secure_coding_guidelines/#working-with-archive-files)は GitLab Rails 内で容易に実装できる。

**デメリット:**

- アーティファクトファイルのダウンロードが必要。
- アーティファクトファイル自体の一時ストレージが必要。

## 決定

パイプラインセキュリティチームは、アーティファクトの SHA-256 を計算する場所として `PublishProvenanceService` を選択しました。これは主に、上述のとおり Workhorse 内での実装を妨げる制限事項のためです。

## 結果

### ポジティブ

- `gitlab-runner` と Workhorse を変更するための複雑なマージリクエストをいくつか作成する必要がない。
- 帯域幅と一時ストレージスペースに関する懸念を容易に軽減できれば、実装時間が大幅に短縮される可能性がある。

### ネガティブ

- アーティファクトファイルを取得して一時ストレージに保存して読み取る必要がある。この影響は最大ファイルサイズを制限することで軽減され、十分な[ストレージが利用可能](https://gitlab.com/gitlab-org/gitlab/-/issues/559267#note_2689129685)であることを確認するためのファイルの事前割り当てによっても軽減される。
- SHA-256 が複数回必要な場合、永続化またはキャッシュが必要。現時点ではプロベナンスステートメント作成のためにハッシュが 1 回だけ必要なため、これは現在の懸念事項ではない。
- [アップロード前にアーティファクトをハッシュ化する](https://gitlab.com/gitlab-org/gitlab-runner/-/issues/2473)などの問題には対処しない。

## 関連リンク

- [Calculate sha256 digest of artifact on PublishProvenanceService](https://gitlab.com/gitlab-org/gitlab/-/issues/559267)
