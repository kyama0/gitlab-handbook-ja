---
title: "依存関係スキャンアナライザー"
status: ongoing
creation-date: "2024-08-14"
authors: [ "@hacks4oats", "@gonzoyumo" ]
coaches: [ ]
dris: [ "@johncrowley", "@thiagocsf", "@nilieskou" ]
owning-stage: "~devops::application security testing"
participating-stages: []
# Hides this page in the left sidebar. Recommended so we don't pollute it.
toc_hide: true
upstream_path: /handbook/engineering/architecture/design-documents/dependency_scanning_analyzer/
upstream_sha: 0ee1352c26e468fa8032143d735391a793de7086
translated_at: "2026-04-27T00:00:00Z"
translator: claude
stale: false
lastmod: "2026-02-23T17:17:32-05:00"
---

<!-- This renders the design document header on the detail page, so don't remove it-->

{{< engineering/design-document-header >}}


<!--
Don't add a h1 headline. It'll be added automatically from the title front matter attribute.
For long pages, consider creating a table of contents.
-->

## サマリー

依存関係スキャン機能は、歴史的に `gemnasium`、`gemnasium-maven`、`gemnasium-python` というアナライザーのセットによって実現されてきました。CI テンプレートと関連付けられたこれらのアナライザーは、サポートされているプロジェクトの検出、必要に応じた依存関係グラフやリストの構築、検出された依存関係の解析、そして最終的に CycloneDX SBOM とともに検出された脆弱性を含むセキュリティレポートを生成する責任を担っています。このアプローチは適切に機能してきましたが、時間の経過とともに、プロジェクトの依存関係グラフエクスポートを構築するために必要なアクションが非常に複雑であることが明らかになりました。この複雑さは、機能のメンテナンスと開発、および依存関係スキャンアナライザーのセットアップと維持のユーザーエクスペリエンスに悪影響を与えています。

これらの課題に対処するため、私たちは依存関係スキャンアナライザーを再設計し、精度と使いやすさのバランスを取るマルチティアアプローチに移行します。このドキュメントでは新しいアナライザーの全体的なビジョンとアーキテクチャを概説し、具体的な実装の決定事項は[アーキテクチャ決定レコード（ADR）](#decisions)セクションに記載します。

## モチベーション

依存関係グラフ/リストエクスポートの構築に関連する高コストが、依存関係スキャン機能の構造を見直す動機となっています。アナライザー内でお客様に代わってプロジェクトの依存関係グラフやリストを構築する代わりに、この責任をアナライザーより前に実行するジョブに委任できます。ビルドステージは開発サイクルの非常に一般的な部分であり、このステージで依存関係アーティファクトを生成することは、gemnasium アナライザーセットで使用されている設定値に既存のビルドシステム設定値をマッピングするよりもはるかに簡単です。

依存関係グラフ/リストエクスポートの構築に関連する高いメンテナンスコストが、依存関係スキャン機能の構造を見直す動機となっています。アナライザー内でお客様に代わってプロジェクトの依存関係グラフやリストを構築する代わりに、この責任をアナライザーより前に実行するジョブに委任できます。ビルドステージは開発サイクルの非常に一般的な部分であり、このステージで依存関係アーティファクトを生成することは、gemnasium アナライザーセットで使用される設定値に既存のビルドシステム設定値をマッピングするよりもはるかに簡単です。そこで当初は、これをユーザーに完全に委ねることを検討しました（[ADR 001: グラフエクスポートのみ](./decisions/001_graph_export_only.md)を参照）が、最終的にはお客様のフィードバックやその他の課題に直面し、この設計を再検討せざるを得ませんでした。

## 目標

- 攻撃対象領域とメンテナンス負担を軽減する、シンプルで保守可能なアナライザーを提供する
- 異なるプロジェクト設定に対応するため、複数の依存関係検出戦略をサポートする
- コミット済みのロックファイルまたはグラフファイルを持つプロジェクトの依存関係スキャンをすぐに利用できるよう有効化する
- ビルドステップを必要とするプロジェクトの自動依存関係解決をサポートする
- 事前生成された依存関係アーティファクトがないプロジェクトへのフォールバックメカニズムを提供する
- アナライザーイメージからバンドルされたランタイムとパッケージマネージャーを排除することで、セキュリティメンテナンスコストを削減する
- Java と Python のモノレポに対する単一プロジェクト分析などの過去の制限を除去する

## 非目標

- サードパーティ SBOM ジェネレーターのサポート。これは将来のイテレーションでサポートできます。

## 提案

### 設計原則

- **関心の分離**: 依存関係の検出（どのコンポーネントが存在するか）は脆弱性分析（どのコンポーネントに脆弱性があるか）から分離されます
- **最小イメージフットプリント**: アナライザーイメージにはスキャンロジックのみが含まれ、ビルドツールやランタイムは含まれません
- **柔軟性**: 異なるプロジェクトはニーズに基づいて異なる依存関係検出戦略を使用できます

### 依存関係の検出

新しい依存関係スキャンアナライザーは、精度を維持しながら柔軟性を提供するマルチティアアプローチで依存関係を検出します。

サービスベースの解決パターンとマニフェスト解析実装を含む依存関係検出アプローチの詳細については、[ADR 003: 依存関係解決とマニフェストスキャン](./decisions/003_dependency_resolution_and_manifest_scanning.md)を参照してください。

#### ティア1：ロックファイル/グラフファイルが存在する場合（最高精度）

プロジェクトがコミット済みまたは事前生成されたロックファイルまたはグラフファイルを持つ場合、アナライザーはそれらを直接消費します。これにより、最小限の処理オーバーヘッドで最も正確な依存関係情報が得られます。

#### ティア2：自動依存関係解決

依存関係アーティファクトを生成するためにビルドステップを必要とするプロジェクトに対し、アナライザーは `.pre` ステージで実行する先行 CI ジョブを通じた自動依存関係解決をサポートします。これらのジョブは：

- エコシステムネイティブツール（Maven、Gradle、Python の `uv`）を標準的なパブリックイメージで使用する
- 必要な検出ロジックを提供し依存関係解決のための指示を生成するために、CI サービスとして Dependency Scanning アナライザーを実行する
- これらの指示を実行してロックファイルまたはグラフファイルを生成し、DS アナライザー CI ジョブが消費するアーティファクトとしてエクスポートする

このアプローチにより、複数のランタイムとパッケージマネージャーをアナライザーイメージにバンドルすることを回避し、メンテナンス負担とセキュリティ対象領域を削減できます。

#### ティア3：マニフェスト解析フォールバック（最低精度）

ロックファイルもグラフファイルも利用できない場合、アナライザーは依存関係マニフェストを直接解析して最小限の依存関係情報を抽出できます。これにより、事前生成されたアーティファクトがないプロジェクトに対する基本的なカバレッジが提供されますが、推移的な依存関係と実際に使用されているバージョンをキャプチャできないため、ロックファイルよりも精度と網羅性が低くなります。

### 脆弱性スキャン

アナライザーは CI パイプラインに脆弱性スキャンを直接統合し、開発者に即時のセキュリティフィードバックを提供します。検出された依存関係から CycloneDX SBOM を生成した後、アナライザーは：

1. **GitLab SBOM Scan API に SBOM をアップロードする**: 生成された SBOM ファイルが GitLab のバックエンド脆弱性スキャンサービスに送信される
2. **スキャン結果のポーリング**: アナライザーが統合された GitLab SBOM Vulnerability Scanner を使用してバックエンドが脆弱性分析を完了するのを待つ
3. **発見事項の集約**: 複数の SBOM からの結果が単一のセキュリティレポートに結合される
4. **セキュリティレポートの生成**: 検出された脆弱性を含む標準化された GitLab 依存関係スキャンレポートが生成される

このアプローチは、[GitLab SBOM Vulnerability Scanner](../dependency_scanning_engine/decisions/001_gitlab_sbom_vulnerability_scanner.md) を使用した統合された Dependency Scanning エンジンに実際の脆弱性検出ロジックを委任することで関心の分離を維持し、アナライザーはオーケストレーションと結果の集約を処理します。

脆弱性スキャンの実装（エラー処理戦略、リトライロジック、並行処理モデルを含む）の詳細については、[ADR 002: SBOM Scan API を使用した脆弱性スキャン](./decisions/002_vulnerability_scanning.md)を参照してください。

## 決定事項 {#decisions}

- [ADR 001: グラフエクスポートのみ](./decisions/001_graph_export_only.md) - ロックファイルとグラフファイルのみをサポートする初期ビジョンを記録
- [ADR 002: SBOM Scan API を使用した脆弱性スキャン](./decisions/002_vulnerability_scanning.md) - DS アナライザー内に脆弱性スキャン機能を再導入する決定を記録
- [ADR 003: 依存関係解決とマニフェストスキャン](./decisions/003_dependency_resolution_and_manifest_scanning.md) - 自動依存関係解決とマニフェスト解析フォールバックを用いたアプローチを記録

## 付録

- [依存関係グラフエクスポート](https://docs.gitlab.com/ee/user/application_security/terminology/#dependency-graph-export)
- [パッケージマネージャー](https://docs.gitlab.com/ee/user/application_security/terminology/#package-managers)
- [ロックファイル](https://docs.gitlab.com/ee/user/application_security/terminology/#lock-file)

## 参考資料

- [セキュリティスキャン結果を Dependency Scanning CI ジョブに戻すエピック](https://gitlab.com/groups/gitlab-org/-/work_items/17150)
- [依存関係解決エピック](https://gitlab.com/groups/gitlab-org/-/work_items/20461)
- [マニフェストスキャンエピック](https://gitlab.com/groups/gitlab-org/-/work_items/20457)
- [Dependency Scanning エンジン](../dependency_scanning_engine/_index.md)
- [Dependency Scanning Engine ADR003: CI パイプライン向け SBOM ベーススキャン](../dependency_scanning_engine/decisions/003_sbom_based_scans_for_ci_pipelines.md)
