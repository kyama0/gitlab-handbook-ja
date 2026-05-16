---
title: "ADR 004: cosign を GitLab Rails にバンドルし、GitLab Rails バックエンドでアテステーションを行う"
description: "アテステーションの場所と署名の技術的手段の変更に関するアーキテクチャ決定レコード"
upstream_path: "/handbook/engineering/architecture/design-documents/slsa_level_3/decisions/004_attestation_in_sidekiq/"
upstream_sha: "86cfa2bd7d73df5a673fe5ebd33b028d0f540434"
translated_at: "2026-04-27T09:00:00Z"
translator: claude
stale: false
lastmod: "2025-10-22T08:07:11+00:00"
---

## コンテキスト

この ADR は、プロベナンスステートメントの署名場所に関して [ADR 003](003_attest_sign_location.md) で下された決定を改訂するものです。glgo サービスで署名を行う決定は、リンクされた ADR に詳しく記載されています。要約すると、glgo が選ばれた理由は、SLSA Level 3 準拠を達成するための実現可能な手段であり、gitlab.com のお客様向けにアテステーションを提供でき、追加のサービスやインフラストラクチャが不要だったためです。

Rails と glgo の統合オプションを検討する中で、cosign プロジェクトを直接インポートした場合に glgo に追加される[依存関係の数](https://gitlab.com/gitlab-org/gitlab/-/issues/551210#note_2611268806)についての懸念が提起されました。

代替アプローチとして、Sidekiq ワーカー内で署名を行う方法が評価されました。この ADR には、`cosign` バイナリを埋め込む複数の方法が含まれており、ソフトウェアアテステーションの生成を可能にするものです。

## 検討したオプション

### 1. `cosign` を GitLab ディストリビューションに含める

`cosign` は [Go プロジェクト](https://github.com/sigstore/cosign) であり、sigstore プロジェクトの一部として開発されています。Sigstore を使用して OCI コンテナ（およびその他のアーティファクト）に署名できます。Cosign には [in-toto アテステーション](https://github.com/sigstore/cosign?tab=readme-ov-file#in-toto-attestations) の組み込みサポートもあります。
概念実証のアテステーションプログラムが[このマージリクエスト](https://gitlab.com/darbyfrey/demodemo/-/merge_requests/4/diffs#717ea309f1716e0f92cc07090402218cd8d142cc)で利用可能です。

**メリット:**

* 開発工数の面で最もシンプルなオプション。
* cosign バイナリは機能が完全。例えば、検証のみをサポートしている [sigstore-ruby](https://github.com/sigstore/sigstore-ruby) とは対照的。
* `cosign` は sigstore と連携する最も広く使われている手段であり、問題が発生した場合のドキュメントとサポートが利用可能。
* バイナリの出荷により、[Renovate](/handbook/engineering/infrastructure-platforms/gitlab-delivery/build/maintenance/renovate/) などの既存ツールを使って依存関係を管理できる。
* `cosign` を呼び出すと別プロセスとして実行されるため、Rails バックエンドの依存関係や関心事からある程度分離される。

**デメリット:**

* ディストリビューションは実現可能だが、自明ではない。CNG と Linux パッケージを[作成する必要がある](https://gitlab.com/gitlab-org/gitlab/-/issues/554600#note_2618812171)。

### 2. ターゲットプラットフォーム向けに cosign をビルドする Ruby gem を作成する

**デメリット:**

* ディストリビューションの潜在的な困難に対するワークアラウンドに過ぎない。小規模でよく知られた Go バイナリのディストリビューションは[比較的容易](https://gitlab.com/gitlab-org/gitlab/-/issues/554600#note_2618812171)なので、これは不要。
* 代替案よりも複雑。
* Ruby パッケージングの複雑さへの対応が必要。
* cosign バイナリの更新を追跡し、セキュリティ脆弱性がある場合に更新する必要がある。

### 3. cosign のネイティブ Ruby 実装を使用する

**メリット:**

* 依存関係の数が削減される可能性がある。
* ディストリビューションの複雑さをもたらさない。

**デメリット:**

* 現在の [sigstore ruby](https://docs.sigstore.dev/language_clients/ruby/) バージョンは cosign が提供する機能の非常に限られたサブセットのみを提供している。
* 相当な開発時間が必要。
* 複数のサードパーティプロバイダーとの非自明な統合コードが必要。
* 標準やサードパーティ API の変更に追従するメンテナンス作業が必要。

## 決定

**cosign を GitLab ディストリビューションに含める方向で進めます。**

このオプションはインフラストラクチャの複雑さの面で最もシンプルであり、広く使われているクライアントを通じてすべての sigstore 機能を適切にサポートします。

さらに、バックグラウンドワーカーはこの種のワークロードに適した選択であり、外部サービスとの連携を避けることで障害点を大幅に削減できます。これにより実装の可用性が高まります。

セキュリティの観点からは、Rails での外部バイナリとの連携に関する[確立された方法論](https://docs.gitlab.com/development/shell_commands/)があり、2つのサービス間でプロベナンスステートメントの整合性を確保する必要もありません。

## 結果

### ポジティブ

* 全体的な複雑さが軽減される。
* `cosign` が非常に広く使われているため、必要なすべてのユースケースをサポートできる可能性が高い。また、利用可能な充実したドキュメントを活用できる。
* `glgo` への依存を除去することでディストリビューションの複雑さが軽減される。このサービスは現時点ではすべてのタイプの GitLab インストールで利用可能ではない。
* [Renovate](/handbook/engineering/infrastructure-platforms/gitlab-delivery/build/maintenance/renovate/) などの依存関係管理の既存ツールを使用できる。

### ネガティブ

* コマンドラインツールとの連携はリスクが高い。当初はツールに渡すパラメーターはユーザーが制御できないが、要件によっては後で変更される可能性がある。このネガティブな結果は、[シェルコマンド開発ガイドラインページ](https://docs.gitlab.com/development/shell_commands/)に記載された確立された手順に従うことで軽減できる。

## パフォーマンスと可用性

高い可用性と堅牢なパフォーマンスを確保するため、`SSCS: Pipeline Security` チームがいくつかの措置を講じます。

まず、本番環境での `cosign` 呼び出しのパフォーマンスを評価するため、バイナリをインストルメント化します。これにより、高レベルでのバイナリパフォーマンスの詳細な観察と、実行中の潜在的なボトルネックの詳細な分析が可能になります。

次に、この機能のロールアウトはフィーチャーフラグの後ろで行われ、スケールアップに応じてパフォーマンスへの影響を測定できます。さらに、[アーキテクチャ決定](https://gitlab.com/gitlab-org/gitlab/-/issues/547903#note_2574511236)が確定していない段階では、この機能は明示的にオプトインしたユーザーのみに有効化されます。

また、Sidekiq ジョブは[適切に](https://docs.gitlab.com/development/sidekiq/#retries) リトライするよう設定され、sigstore インフラストラクチャの断続的な障害が SLSA アテステーション生成の継続的な失敗につながらないようにします。

### ベンチマーク

Golang と GitLab Rails での署名の相対的なパフォーマンス差が[分析されました](https://gitlab.com/gitlab-org/gitlab/-/issues/556202)。どちらの場合も、テストは署名を実行して `Rekor` にレコードを公開する処理を**2回**行います。

分析の結果、Golang が GitLab Rails に比べてパフォーマンスで有意な優位性を持つことは示されませんでした。

#### GitLab Rails

```console
Command: ["cosign", "attest-blob", "--yes", "--new-bundle-format",
"--predicate", "-", "--bundle", "demodemo.gem.sigstore.json", "--oidc-issuer",
"https://gitlab.com", "--identity-token", "[MASKED]", "--hash",
"7a313044bd530eef848b8cce175073e90ef2287e4290ac805cedbb7d42bc580e",
"file://demodemo.gem"]

...

--- Execution Time ---
Wall clock time: 0.506 seconds
Monotonic time: 0.506 seconds
Duration (ms): 506.1 milliseconds
```

#### Golang

```console
--- Execution Time ---
Execution time: 0.491 seconds (490.6 ms)
Total time: 0.491 seconds (490.6 ms)

```

## 関連リンク

* [Evaluate options to bundle cosign with GitLab Rails](https://gitlab.com/gitlab-org/gitlab/-/issues/554600)
* [Evaluate options to limit dependencies or sandbox execution of cosign in glgo](https://gitlab.com/gitlab-org/gitlab/-/issues/554596)
