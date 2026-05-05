---
title: "GitLab シークレット検出 ADR 002: シークレット検出Gemを同じリポジトリに保存する"
upstream_path: /handbook/engineering/architecture/design-documents/secret_detection/decisions/002_store_the_secret_detection_gem_in_the_same_repository/
upstream_sha: 86cfa2bd7d73df5a673fe5ebd33b028d0f540434
translated_at: "2026-04-27T18:56:37Z"
translator: claude
stale: false
---

## 背景

[フェーズ1](../index.md#phase-1---ruby-pushcheck-pre-receive-integration)において、リポジトリへのシークレットのコミットをブロックするために[Rubyベースのpush checkアプローチ](../decisions/001_use_ruby_push_check_approach_within_monolith.md)を採用することを選択し、シークレットのスキャンはGitLab内部でこの目的のために開発されたライブラリ（またはRubyGem）によって実行されることになりました。

このライブラリを作成してRailsモノリス内で使用できるようにするプロセスの一部として、ライブラリを配布する最善の方法について決定を下す必要がありました。

## アプローチ

2つの可能なアプローチを評価しました:

1. ライブラリをモノリスと[同じリポジトリ](https://docs.gitlab.com/ee/development/gems.html#in-the-same-repo)に保存する。
1. ライブラリを[外部リポジトリ](https://docs.gitlab.com/ee/development/gems.html#in-the-external-repo)に保存する。

各アプローチには、主に配布、一貫性、保守性、レビューとリリースワークフローや類似プロセスの設定オーバーヘッドに関していくつかの利点と欠点がありました。詳細については以下を参照してください。

### モノリスと同じリポジトリ内

Gemをモノリスと同じリポジトリで開発・保存することは、GitLabモノリス自体にパッケージ化され、外部依存関係としてインストールする必要がないことを意味しました。これにより、ワークフローやプロセスをゼロから定義するという保守オーバーヘッドも削減されます。一方で、ライブラリは公開または広いコミュニティに公開されないため、可視性が低下します。

### 外部リポジトリ内

外部リポジトリにライブラリを保存することは、特にGemがRubyGems.orgに公開されることでより多くの可視性を意味し、コミュニティからより多くの関心を集め、機能への貢献を引き出す可能性があります。さらに、Gemは他のプロジェクトやアプリケーションでも使用できるようになります。しかし、そうすることで保守オーバーヘッドが大幅に増加します。理由は以下の通りです:

- 新しいバージョンがリリースされる際に、複数のリポジトリ間で変更を調整する必要があります。
- レビューとリリースのワークフローや類似プロセスを別途定義する必要があります。

## 決定

GitLabにパッケージ化されて外部依存関係をインストールせずにすぐに利用可能になることで簡単な配布を確保するため、最初のフェーズではライブラリを同じリポジトリに保存することが決定されました。

その上で、名前を乗っ取る者が名前を取得して悪意のあるコードをサードパーティに提供することを避けるために、[RubyGems.org上でGemの名前を予約するプロセス](https://docs.gitlab.com/ee/development/gems.html#reserve-a-gem-name)に従い、[RubyGems.org](https://rubygems.org/gems/gitlab-secret_detection)に予約しました。

スタンドアロンサービスを構築することを検討し始める[フェーズ2](../_index.md#phase-2---standalone-secret-detection-service)まで、外部にGemを公開する計画はありません。
