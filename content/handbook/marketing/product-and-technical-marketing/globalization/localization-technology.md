---
title: "GitLab におけるローカリゼーションエンジニアリングおよび技術管理"
description: "GitLab のローカリゼーションエンジニアリングプロセス、技術エコシステム、ワークフロー、グローバルなコンテンツ配信を可能にする AI 駆動の翻訳インフラストラクチャの包括的な概要。"
upstream_path: /handbook/marketing/product-and-technical-marketing/globalization/localization-technology/
upstream_sha: bc76a1a59f8b471f304263e712307581bdc7d128
translated_at: "2026-09-04T21:00:56+09:00"
translator: claude
stale: false
lastmod: "2026-08-27T23:30:57+02:00"
---

このページでは、GitLab のローカリゼーションエンジニアリングプロセスと、GitLab のプロダクト、ドキュメント、マーケティングコンテンツを複数の言語で提供する技術スタックについて説明します。

## ミッションとビジョン

[GitLab におけるローカリゼーション技術 - ミッションとビジョン](https://gitlab.com/gitlab-com/localization/localization-team/-/issues/453)

## ローカリゼーション技術スタック - 概要

Globalization チームは、GitLab のグローバルコンテンツにわたって翻訳ワークフローを自動化・強化するために設計された、洗練された技術エコシステムを管理しています。私たちの技術スタックは、目的別に構築されたカスタムソリューション、商用の Language Technology Platform (LTP)、そして GitLab のプロダクト UI、マーケティングコンテンツ、プロダクトドキュメントのローカリゼーションを総合的に実現する新興の AI 駆動サービスで構成されています。Globalization チームはこのインフラストラクチャを所有し、その方向性と優先順位を決定します。エンジニアリング作業は、[Digital Experience (DEX)](/handbook/marketing/digital-experience/) チームに所属するローカリゼーションエンジニアが担当します。

## ローカライズ対象

1. **プロダクトドキュメント** (docs.gitlab.com): Argo オーケストレーションプラットフォーム、Phrase TMS、AI 駆動翻訳システムなど、国際化レイヤーと連携ツールを通じてローカライズされます。アーキテクチャの詳細については、[GitLab プロダクトドキュメントのローカリゼーション](/handbook/marketing/product-and-technical-marketing/globalization/tech-docs-localization/)を参照してください。
2. **マーケティングウェブサイト** (about.gitlab.com): 6 言語で継続的にローカライズされます。
3. **プロダクト UI**: [Crowdin](https://docs.gitlab.com/development/i18n/)を通じたコミュニティ主導の翻訳で、[GitLab <-> Crowdin sync](https://gitlab.com/gitlab-org/frontend/crowdin-translation-sync/-/blob/main/README.md) 統合を使用し、[GitLab String Search](https://gitlab.com/gitlab-com/localization/gitlab-string-search) と [Crowdin Automation](https://gitlab.com/gitlab-com/localization/crowdin-automation) が支援します。

## ローカリゼーション技術スタック - コンポーネント

詳細とビジュアルについては、[GitLab におけるローカリゼーション管理技術スタック](https://gitlab.com/gitlab-com/localization/localization-team/-/issues/452) Issue を参照してください。

### AI 駆動翻訳

- [Tech Docs AI-powered translation](https://gitlab.com/gitlab-com/localization/tech-docs-ai-powered-translation) - LLM を備えた Google Cloud Vertex AI が GitLab プロダクトドキュメントを処理し、高度な NLP、連鎖型プロンプトシステム、複数の用語集とスタイルガイドの注入、ファイル変換および検証を使用
- [GitLab Duo Agent Translation Platform](https://gitlab.com/gitlab-com/localization/gitlab-duo-agent-translation-platform) プロジェクト。カスタム [GitLab Translation Agent](https://gitlab.com/explore/ai-catalog/agents/532/) のための設定および仕様を保持します
- [CI Translation Components](https://gitlab.com/gitlab-com/localization/ci-translation-components) - 翻訳ワークフロー向けの GitLab CI コンポーネント。ソースコンテンツの変更を検出し、CI/CD パイプラインから翻訳エージェントをトリガーする再利用可能なジョブを提供
- 新興 AI ツール - プロトタイプの初期段階にある Claude のスタンドアロンプロジェクト

### コンテンツ管理システム統合

- [Decap CMS integration](https://gitlab.com/groups/gitlab-com/localization/-/epics/83) - GitLab リポジトリを通じたマーケティングウェブサイトコンテンツのワークフロー自動化
- レガシー統合: [Contentful](https://gitlab.com/groups/gitlab-com/localization/-/epics/27)

### Language Technology Platform との統合

- [Phrase TMS integration](https://gitlab.com/groups/gitlab-com/localization/-/epics/95) - Argos Multilingual 経由でプロダクトドキュメントを自動翻訳。AI 強化機能付き
- [Crowdin integration](/handbook/business-technology/tech-stack/#crowdincom) - コミュニティ主導のプロダクト UI 翻訳用
- [TranslationOS integration](https://gitlab.com/groups/gitlab-com/localization/-/epics/92) - Translated 経由でマーケティングコンテンツを半自動翻訳するワークフロー用

### オーケストレーションプラットフォーム

[Argo](https://gitlab.com/groups/gitlab-com/localization/-/epics/35) - 中央オーケストレーションハブとして機能するローカリゼーションリクエスト管理システムであり、以下の専門サービスから構成されます:

- Argo web client (UI) - ローカリゼーションプログラムマネージャー、ステークホルダー、ベンダーが使用する Argo Web UI
- Argo web services - バックエンド/API オーケストレーションエンジン
- Argo-Phrase integration - GitLab プロダクトドキュメントのローカリゼーションワークフロー用のサービス
- Argo-TOS integration - マーケティングローカリゼーションワークフロー用のサービス
- Argo-GitLab integration - Webhook を扱うサービス
- Argo GitLab agent - GitLab プロダクトドキュメントの Markdown ファイルを前処理するサービス
- Database & reporting - Argo UI 内で利用可能なビジネス分析と追跡

### GitLab 統合サービス

- [Argo GitLab Integration](https://gitlab.com/gitlab-com/localization/argo-gitlab-integration) - Webhook 自動化と Translation MR 配信を通じて、GitLab プロジェクトと翻訳管理システムを橋渡しする [GitLab Translation Service](/handbook/engineering/architecture/design-documents/gitlab_translation_service/)
- [Argo GitLab Agent](https://gitlab.com/gitlab-com/localization/argo-gitlab-agent) - GitLab Markdown の前処理およびその他のコンテンツ処理タスクのための専用サービス

### 補助ツールおよびサービス

- [GitLab String Search](https://gitlab.com/gitlab-com/localization/gitlab-string-search) - GitLab の翻訳可能なソースコード文字列を検索するための Web インターフェース。このウェブサイトは、Crowdin の広範なコミュニティ翻訳者によって使用されます。詳細については、この [実装エピック](https://gitlab.com/gitlab-com/localization/localization-team/-/issues/342) を参照してください
- [Crowdin Automation](https://gitlab.com/gitlab-com/localization/crowdin-automation) - Crowdin の文字列にコンテキストを追加し、翻訳者の貢献を追跡し、Crowdin のコメントを分析するための自動化スクリプト
- [Kalcium Quickterm](https://gitlab.com/groups/gitlab-com/localization/-/epics/51) - 用語管理システム

## ベンダーエンジニアリングパートナーシップ

- [Spartan Software](https://gitlab.com/groups/gitlab-com/localization/-/work_items/60): Argo オーケストレーションプラットフォームの開発と保守。
- [Argos Multilingual](https://gitlab.com/groups/gitlab-com/localization/-/work_items/60): AI 翻訳パイプラインおよびプロジェクト、言語サービス、翻訳管理システムの構成、Crowdin エンジニアリング。

## 中央コンテンツリポジトリ

すべてのローカリゼーションワークフローは、コンテンツ管理および翻訳の唯一の情報源として GitLab に集約されます。この GitLab 中心のアプローチにより、以下が保証されます:

- すべてのソースおよび翻訳済みコンテンツのバージョン管理
- Translation MR を通じた統一された配信メカニズム
- 一貫した品質ゲートおよび承認ワークフロー
- コンテンツ公開のための統合された CI/CD パイプライン

## レビューワークフロー

ローカリゼーションインフラストラクチャのマージリクエストレビューは、GitLab の [Code Review Guidelines](https://docs.gitlab.com/development/code_review/)に準拠します。

インフラストラクチャおよび [Translation MR](https://gitlab.com/gitlab-com/localization/argo-gitlab-integration/-/blob/main/doc/en-US/merge_requests.md?ref_type=heads#translation-mr) は、[Digital Experience (DEX)](/handbook/marketing/digital-experience/) チームのローカリゼーションエンジニアがレビューし、必要に応じて他の DEX エンジニアもレビューします。Translation MR は、Marketing ウェブサイトと GitLab プロダクトドキュメントの翻訳が Argo で完了すると、[@gitlab-argo-bot](https://gitlab.com/gitlab-argo-bot)によって作成されます。

ローカリゼーションエンジニアリングは、複数言語の [Blog](https://about.gitlab.com/blog/) を所有・保守する Localization Content Manager が Decap CMS で作成した MR のレビューも支援します。Decap からの Blog 更新 MR は通常、デプロイのアジリティ向上に役立つコンテンツのみの変更であり、軽量なレビュープロセスを使用できます。複雑な変更、コード、トラブルシューティングについては、Localization Content Manager がローカリゼーションエンジニアまたは別の DEX エンジニアにレビューを依頼できます。

## コミュニケーションチャンネル

- `#localization-engineering`: ローカリゼーションエンジニアリングの作業チャンネル
- `#localization-alerts`: フォーク同期パイプラインの自動障害レポートと Translation MR の通知
- `#spartan-software`: Spartan Software エンジニアリングチームとの直接コミュニケーション
- `#argos_multilingual`: Argos Multilingual エンジニアリングチームとの直接コミュニケーション
