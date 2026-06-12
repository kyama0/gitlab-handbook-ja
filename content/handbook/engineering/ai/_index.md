---
title: AI Engineering
upstream_path: /handbook/engineering/ai/
upstream_sha: 5b642767a4478d09eeedd1689a94c1b164788f25
translated_at: "2026-06-12T13:26:18Z"
translator: claude
stale: false
model: claude-opus-4-7
lastmod: "2026-06-09T14:06:17+02:00"
---

## ビジョン {#vision}

 **私たちの目標は、単に機能をローンチすることではなく、それらが確実に定着し、お客様に真の価値を提供することを保証することです。** 私たちは、高品質な基準を満たしながら信頼性を確保し、多様なお客様のニーズに応える運用の容易さとスケーラビリティを維持することで、すべてのユーザーグループにわたって期待を上回る最高クラスの製品を開発するよう努めています。すべてのチームメンバーは、私たちが行うすべてのことにおいて、ターゲットとするお客様とサポートする複数のプラットフォームを常に意識すべきです。

私たちの製品が、特に大企業という主要なお客様の[組織アーキタイプ](/handbook/product/personas/organization-archetype/)に対して、あらゆる面で卓越したものになるようにします。これには、スケーラビリティ、適応性、シームレスなアップグレード経路が含まれます。機能を設計および実装する際は、self-managed、Dedicated、Software as a Service (SaaS) というすべてのデプロイオプションの互換性を常に念頭に置いてください。

[私たちのバリュー](/handbook/values/)と[独自の働き方](/handbook/company/culture/all-remote/guide/)を維持しながら、私たちの製品とお客様の成長を支える成果を推進するために、技術的で多様、かつグローバルなチームを育成します。

## ミッション {#mission}

GitLab の非同期に働く独自の方法、ハンドブックファーストの手法、私たちが開発する製品の活用、そしてバリューへの明確な集中によって、非常に高い生産性が実現されます。私たちは、最大限のお客様満足度に到達するために、製品の品質、使いやすさ、信頼性を絶えず改善することに注力しています。コミュニティへの貢献とお客様とのやり取りは、効率的かつ効果的なコミュニケーションに依存しています。私たちは、データ駆動型でカスタマーエクスペリエンス第一のオープンコア組織であり、安全で信頼性が高い世界をリードする 1 つの DevSecOps プラットフォームを提供しています。新しい基準を打ち立て、イノベーションを推進し、DevSecOps の限界を押し広げ、お客様に一貫して卓越した成果を提供する私たちに参加してください。

## 組織構造 {#organizational-structure}

```plantuml
@startwbs
* Tim Zallmann (VP of AI)
** Donald Cook - Editors, Chat & Client
*** Chat EM (open role)
**** Web Chat
**** Chat Engine
*** Amr Elhusseiny
**** Duo CLI
**** VSCode
*** Duo Client SDK
*** Erran Carey - Principal Engineer
** Martin Wortschack - Models, Gateway & Infra
*** Gateway Services
*** AI Health + Connectivity
*** Model Selection
*** Mohamed Hamda (Acting EM)
**** Duo Service Infra
**** Model Evaluation Infra
** Sebastian Rehm - Duo Agent Platform
*** Annie Ying
**** Agent Developer
**** Flow Components
*** Agent Execution EM (open role)
**** Agent Observability
**** Runner Execution
**** Agent Tools
*** Jafar Soltani
**** Flow Creation / Editing
**** AI Catalog Curation
**** External Agents
** Matt Nohr - Events, Code Review & Flows
*** DAP Events
*** DAP Code Review
*** DAP Repository Flows
*** François Rosé
**** Code Review 
** Direct ICs
*** Shekhar Patnaik
*** Liki Simonot
*** Denys Mishunov
*** Igor Drozdov
*** Jessie Young
*** Eduardo Bonet
@endwbs
```

## AI Engineering チーム {#ai-engineering-teams}

このセクションでは、AI 機能の実装と保守に取り組むすべてのチームの概要を提供します。私たちの AI ポートフォリオは、カテゴリーを横断する取り組みです。

これらが各チームです（情報が古くなっている場合は更新してください）。

| チーム | 担当領域 |
|------|-----------------|
| [Agent Foundations](/handbook/engineering/ai/agent-foundations/) | エージェント可観測性 / 再利用可能なエージェントコンポーネント / Duo ワークフローサービス |
| [AI Coding](/handbook/engineering/ai/ai-coding/) | Code Suggestions、Duo Code Review、コード関連のスラッシュコマンド (/explain、/refactor、/tests、/fix)、Semantic Indexing、Duo Context Exclusion、Repository X-Ray |
| [AI Framework](/handbook/engineering/ai/ai-framework/) | 抽象化レイヤー / アプリケーションへの LLM 統合のための AI Gateway (GitLab Chat、Code Suggestions、その他の AI 機能) |
| [AI Framework](/handbook/engineering/ai/ai-framework/)（旧 Model Validation） | カスタム機能エバリュエーター、評価サポート、自動評価ツール |
| [Duo Chat](/handbook/engineering/ai/duo-chat/)  | VS Code および WebIDE 向けの GitLab Chat |
| [Editor Extensions: VS Code](/handbook/engineering/ai/editor-extensions-vscode/) | GitLab Workflow VS Code 拡張機能 ([メンテナー](https://gitlab-org.gitlab.io/gitlab-roulette/?currentProject=gitlab-vscode-extension&mode=show&hidden=reviewer))、[Web IDE](https://gitlab.com/gitlab-org/gitlab-web-ide) 拡張機能、[language server](https://gitlab.com/groups/gitlab-org/-/epics/2431) を保守します。また、GitLab Workflow 内の Code Suggestions の UX 改善にも貢献します。 |
| [Editor Extensions: Multi-Platform](/handbook/engineering/ai/editor-extensions-multi-platform/) | <ul><li>[JetBrains](https://gitlab.com/gitlab-org/editor-extensions/gitlab-jetbrains-plugin)、[Neovim](https://gitlab.com/gitlab-org/editor-extensions/gitlab.vim)、[Visual Studio](https://gitlab.com/gitlab-org/editor-extensions/gitlab-visual-studio-extension) のエディター拡張機能</li> <li>[Editor Extensions: VS Code](/handbook/engineering/ai/editor-extensions-vscode/) と [Language Server](https://gitlab.com/gitlab-org/editor-extensions/gitlab-lsp) を共同所有</li><li>Duo CLI (アイデア出し / MVC フェーズ)</li></ul>  |
| [Global Search](/handbook/engineering/ai/search/) | 抽象化レイヤー / ベクトルストレージ / セマンティック |
| [Infrastructure Platforms - Runway](/handbook/engineering/infrastructure-platforms/gitlab-delivery/runway/) | AI Gateway のスケーラビリティ / Runway インフラ |
| [Workflow Catalog](/handbook/engineering/ai/workflow-catalog) | AI Catalog / カスタムエージェント / カスタムフロー |

## カウンターパート {#counterparts}

AI 部門のエンジニアリング構造は、Product の構造とは異なります。私たちがどのように協力し、誰がカウンターパートであるかについては、[AI product のページ](/handbook/product/ai/)を参照してください。

## ClickHouse データストアの使用 {#clickhouse-datastore-usage}

[Analytics:Platform Insights グループによる ClickHouse の使用](/handbook/engineering/data-engineering/analytics/platform-insights/#clickhouse-datastore)

## AI の実験 {#ai-experimentation}

私たちは、チームメンバーが探求と学習の旅の一環として、AI 関連のプロジェクトを実験し開発することを強く奨励しています。これらの実験的な取り組みは、私たちの作業を加速し、AI チームが新たな課題と機会を受け入れることを可能にします。

既存のプロジェクトは、GitLab 管理のプロジェクトへの移行の可能性について、Product および Engineering チームによってケースバイケースでレビューされる場合があります。

透明性へのコミットメントを維持しながら GitLab のブランドを守るために、すべての実験的な AI プロジェクトは、README の冒頭に次の免責事項を目立つように表示する必要があります。

"⚠️ This is an unofficial project. It is not endorsed or supported by GitLab Inc. and is not recommended for use in production environments."
