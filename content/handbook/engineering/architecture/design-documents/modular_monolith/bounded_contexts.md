---
title: "バウンデッドコンテキストの定義"
status: proposed
creation-date: "2023-06-21"
authors: [ "@fabiopitino" ]
coach: [ ]
approvers: [ ]
owning-stage: ""
toc_hide: true
upstream_path: /handbook/engineering/architecture/design-documents/modular_monolith/bounded_contexts/
upstream_sha: 5fcdd102793f56146077c82f37a89171dea6d0ba
translated_at: "2026-04-27T13:25:33Z"
translator: claude
stale: false
lastmod: "2024-09-24T17:16:26+00:00"
---

## 歴史的なコンテキスト

2024 年 5 月まで、GitLab のコードベースには明確なドメイン構造がありませんでした。
最初のステップとして[いくつかのモジュールの作成を強制](https://gitlab.com/gitlab-org/gitlab/-/issues/212156)しましたが、一貫して実施するための明確に定義された戦略はありませんでした。

コードの大部分は適切に名前空間化・整理されていませんでした:

- 使用された Ruby 名前空間は常に SSoT を表しているわけではありませんでした。複数の名前空間に広がる重複した概念がありました。例えば: `Abuse::` と `Spam::`、または `Security::Orchestration::` と `Security::SecurityOrchestration`。
- 同じバウンデッドコンテキストに関連するドメインコードが複数のディレクトリに散在していました。
- ドメインコードが `lib/` ディレクトリに存在し、`app/` の同じドメインとは異なる名前空間の下にありました。
- 一部の名前空間は非常に浅く、少数のクラスしか含んでいない一方、他の名前空間は非常に深く大きいものでした。
- 古いコードの多くは名前空間化されておらず、使用されているコンテキストを理解することが困難でした。

2024 年 5 月に[バウンデッドコンテキストを定義・強制](decisions/002_bounded_contexts_definition.md)しました。

## 目標

1. バウンデッドコンテキストが持つべき特性のリストを定義する。例えば: 少なくとも 1 つの製品カテゴリに関連していること。
1. すべてのドメインコードが分解されるトップレベルのバウンデッドコンテキストのリストを持つ。
1. エンジニアが利用可能なバウンデッドコンテキストのリストを明確に確認し、新しいクラスとモジュールをどこに追加するかを簡単に決定できる。
1. アプリケーションに新しいバウンデッドコンテキストを追加するプロセスを定義する。これはあまり頻繁に発生すべきではなく、新しいバウンデッドコンテキストは以前に定義された特性に準拠する必要があります。
1. 承認されたもの以外に新しいトップレベル名前空間を使用できないようにバウンデッドコンテキストのリストを強制する。

## イテレーション

1. [`lib/` ディレクトリからライブラリを抽出する](https://gitlab.com/gitlab-org/gitlab/-/blob/4c6e120069abe751d3128c05ade45ea749a033df/doc/development/gems.md)。
    - このステップはモジュール化をブロックするものではありませんが、`lib/` に存在する汎用コードが少ないほど、バウンデッドコンテキストを特定・分離しやすくなります。
    - ドメインコードへの依存を防ぐために、別のプロジェクトに存在できるコードを分離する。

1. [ADR-001: アプリケーションドメインのモジュール化](decisions/001_modular_application_domain.md)? モジュール化から始める
1. [ADR-002: フィーチャーカテゴリを中心としたバウンデッドコンテキストの定義](decisions/002_bounded_contexts_definition.md)をコードの SSoT として。
1. [ADR-003: すべてのモジュールとライブラリへのスチュワードの割り当て](decisions/003_stewardship.md)。
1. [バウンデッドコンテキストのリストを公開する](https://docs.gitlab.com/ee/development/software_design.html#use-namespaces-to-define-bounded-contexts)。
    - バウンデッドコンテキストの SSoT リストを定義する。
    - RuboCop 静的解析ツールを使用してそれを強制する。
    - 指定されたリストに基づいて非標準の Rails ディレクトリをオートロードする。
