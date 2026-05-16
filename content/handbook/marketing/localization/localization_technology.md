---
title: "GitLab におけるローカリゼーション技術管理"
description: "GitLab のローカリゼーション技術エコシステム、ワークフロー、グローバルなコンテンツ配信を可能にする AI 駆動の翻訳インフラストラクチャの包括的な概要。"
upstream_path: /handbook/marketing/localization/localization_technology/
upstream_sha: 768e1a6af6ab56133195582e6a0b17d225df15f7
translated_at: "2026-05-01T00:00:00Z"
translator: claude
stale: false
lastmod: "2026-01-27T17:14:51-05:00"
---

## ミッションとビジョン

[GitLab におけるローカリゼーション技術 - ミッションとビジョン](https://gitlab.com/gitlab-com/localization/localization-team/-/issues/453)

## ローカリゼーション技術スタック - 概要

Localization チームは、GitLab のグローバルコンテンツにわたって翻訳ワークフローを自動化・強化するために設計された、洗練された技術エコシステムを管理しています。私たちの技術スタックは、目的別に構築されたカスタムソリューション、商用の Language Technology Platform (LTP)、そして GitLab のプロダクト UI、マーケティングコンテンツ、プロダクトドキュメントのローカリゼーションを総合的に実現する新興の AI 駆動サービスで構成されています。

## ローカリゼーション技術スタック - コンポーネント

詳細とビジュアルについては、[GitLab におけるローカリゼーション管理技術スタック](https://gitlab.com/gitlab-com/localization/localization-team/-/issues/452) Issue を参照してください。

### ツールインベントリ

商用ツール:

- プラットフォームとしての Argo（別名: Request Management System）およびそのコンポーネント（Spartan Software による）
- Phrase TMS（Phrase 社による）
- TranslationOS (TOS) および Matecat（Translated 社による）
- Crowdin（Crowdin 社による）

GitLab 内:

- ai-machine-transl プロジェクトを持つ Google Cloud Platform サンドボックス
- 新興のスタンドアロンプロジェクトを伴う Anthropic Claude UI

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

### Language Technology Platform との統合

- [TranslationOS integration](https://gitlab.com/groups/gitlab-com/localization/-/epics/92) - Translated 社経由でマーケティングコンテンツの半自動化された翻訳ワークフロー用
- [Phrase TMS integration](https://gitlab.com/groups/gitlab-com/localization/-/epics/95) - Argos Multilingual 経由でプロダクトドキュメントを自動翻訳。AI 強化機能付き
- [Crowdin integration](/handbook/business-technology/tech-stack/#crowdincom) - コミュニティ主導のプロダクト UI 翻訳用

### AI 駆動翻訳

- [Tech Docs AI-powered translation](https://gitlab.com/gitlab-com/localization/tech-docs-ai-powered-translation) - Gemini LLM を備えた Google Cloud Vertex AI が GitLab プロダクトドキュメントを処理し、高度な NLP、チェイン化されたプロンプトシステム、複数の用語集とスタイルガイドの注入、ファイル変換および検証を使用
- カスタム [GitLab Translation Agent](https://gitlab.com/explore/ai-catalog/agents/532/) のための設定および仕様を保持する [GitLab Duo Agent Translation Platform](https://gitlab.com/gitlab-com/localization/gitlab-duo-agent-translation-platform) プロジェクト
- 新興 AI ツール - プロトタイプの初期段階にある Claude のスタンドアロンプロジェクト

### コンテンツ管理システム統合

- [Decap CMS integration](https://gitlab.com/groups/gitlab-com/localization/-/epics/83) - GitLab リポジトリを通じたマーケティングウェブサイトコンテンツのワークフロー自動化
- レガシー統合: [Contentful](https://gitlab.com/groups/gitlab-com/localization/-/epics/27)

### 補助ツールおよびサービス

- [GitLab String Search](https://gitlab.com/gitlab-com/localization/gitlab-string-search) - GitLab の翻訳可能なソースコード文字列を検索するための Web インターフェース。このウェブサイトは、Crowdin の広範なコミュニティ翻訳者によって使用されます。詳細については、この [実装エピック](https://gitlab.com/gitlab-com/localization/localization-team/-/issues/342) を参照してください
- [Crowdin Automation](https://gitlab.com/gitlab-com/localization/crowdin-automation) - Crowdin の文字列にコンテキストを追加し、翻訳者の貢献を追跡し、Crowdin のコメントを分析するための自動化スクリプト
- [Kalcium Quickterm](https://gitlab.com/groups/gitlab-com/localization/-/epics/51) - 用語管理システム

## 中央コンテンツリポジトリ

すべてのローカリゼーションワークフローは、コンテンツ管理および翻訳の唯一の情報源として GitLab に集約されます。この GitLab 中心のアプローチにより、以下が保証されます:

- すべてのソースおよび翻訳済みコンテンツのバージョン管理
- Translation MR を通じた統一された配信メカニズム
- 一貫した品質ゲートおよび承認ワークフロー
- コンテンツ公開のための統合された CI/CD パイプライン
