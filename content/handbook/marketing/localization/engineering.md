---
title: ローカリゼーションエンジニアリング
description: GitLab のローカリゼーションインフラとエンジニアリングプロセスの技術的詳細。
upstream_path: /handbook/marketing/localization/engineering/
upstream_sha: c649549e971e74175edf1d5bc1190fcc86e359e6
translated_at: "2026-08-14T10:32:00+09:00"
translator: claude
stale: false
lastmod: "2026-08-13T19:19:31-04:00"
---

ドキュメントとプロダクトインターフェースをまたぐ、GitLab のローカリゼーションインフラおよびエンジニアリングプロセスの技術的概要です。翻訳環境、ブランチ管理、開発ワークフロー、国際化されたコンテンツのプレビューシステムを含みます。

ローカリゼーション技術スタックの全体像については、[GitLab におけるローカリゼーション技術管理](/handbook/marketing/localization/localization_technology/)を参照してください。プロダクトドキュメントのローカリゼーションアーキテクチャおよびワークフローについては、[GitLab プロダクトドキュメントのローカリゼーション](/handbook/marketing/localization/tech_docs_localization/)を参照してください。

### コミュニケーションチャネル

- `#localization-engineering`： ローカリゼーションエンジニアリングチームの作業チャネル
- `#localization-alerts`： フォーク同期パイプラインの自動失敗レポートおよび Translation MR 通知
- `#spartan-software`： Spartan Software エンジニアリングチームとの直接のコミュニケーション
- `#argos_multilingual`： Argos Multilingual エンジニアリングチームとの直接のコミュニケーション

ローカリゼーション関連の Slack チャネルの完全なリストについては、[Localization handbook](/handbook/marketing/localization/#contact-us)を参照してください。

### 範囲

ローカリゼーションエンジニアリングチームは、GitLab のコンテンツとプロダクトを複数の言語で配信できるようにするインフラストラクチャを所有・保守しています。

**サポートしているコンテンツストリーム：**

- **GDATP / [GitLab Translation Agent](https://gitlab.com/explore/ai-catalog/agents/532/)**： Duo Agent Platform 上に構築された GitLab ネイティブの AI 翻訳プラットフォームです。アドホックかつインパクトの大きいマーケティングコンテンツ（料金ページ、ランディングページ、ブログ、複数言語同時のコーディネートされたローンチなど）の翻訳に使用されます。Content Manager、Program Manager、Engineer がセルフサービス型の翻訳ツールとして GDATP を使用します。エンジニアリングチームはプラットフォーム、システムプロンプトのアーキテクチャ、言語仕様、ワークフロー開発を所有しています。
- **プロダクトドキュメント** (docs.gitlab.com)： 国際化レイヤーと、Argo オーケストレーションプラットフォーム、Phrase TMS、AI 駆動の翻訳といった連携ツールを備えたローカリゼーションアーキテクチャ。エンジニアリングチームはフォーク同期の自動化、Translation MR の作成、アップストリームへのプッシュプロセスとその自動化、Hugo の国際化設定、継続的ローカリゼーションパイプラインの開発を所有しています。アーキテクチャの詳細については、[GitLab プロダクトドキュメントのローカリゼーション](/handbook/marketing/localization/tech_docs_localization/)を参照してください。
- **マーケティングウェブサイト** (about.gitlab.com)： 新規ページや注目度の高いコンテンツについては GDATP、ボリュームの大きい更新や非同期更新については Argo-Phrase パイプラインを通じて、6 言語にわたる継続的ローカリゼーションを実施しています。
- **プロダクト UI**： [Crowdin](https://docs.gitlab.com/development/i18n/)によるコミュニティ主導の翻訳。[GitLab String Search](https://gitlab.com/gitlab-com/localization/gitlab-string-search) ツールおよび [Crowdin Automation](https://gitlab.com/gitlab-com/localization/crowdin-automation) スクリプトでサポートされています。

### レビューワークフロー

ローカリゼーションエンジニアリングチームによるマージリクエストレビュープロセスは、GitLab の[コードレビューガイドライン](https://docs.gitlab.com/development/code_review/)に沿って行われます。

ローカリゼーションエンジニアリングチームは、お互いのマージリクエストおよび [Translation MR](https://gitlab.com/gitlab-com/localization/argo-gitlab-integration/-/blob/main/doc/en-US/merge_requests.md?ref_type=heads#translation-mr)をレビューします。Translation MR は、マーケティングウェブサイトおよび GitLab プロダクトドキュメントについて Argo で翻訳が完了したときに [@gitlab-argo-bot](https://gitlab.com/gitlab-argo-bot)によって作成されます。

ローカリゼーションエンジニアリングは、複数言語で [Blog](https://about.gitlab.com/blog/)を所有・保守しているローカリゼーション Content Manager が Decap CMS で作成した MR のレビューを支援します。Decap からのブログ更新 MR は通常、デプロイの俊敏性に資するコンテンツのみの変更であり、軽量なレビュープロセスで対応できます。Content Manager は、複雑な変更、コード、トラブルシューティングが必要な場合は、ローカリゼーションエンジニアまたは [Digital Experience (DEX)](/handbook/marketing/digital-experience/) エンジニアにレビューを依頼することがあります。

### ベンダーエンジニアリングパートナーシップ

- [Spartan Software](https://gitlab.com/groups/gitlab-com/localization/-/work_items/60) - Argo オーケストレーションプラットフォームの開発と保守
- [Argos Multilingual](https://gitlab.com/groups/gitlab-com/localization/-/work_items/60) - AI 翻訳パイプラインおよびプロジェクト、言語サービス、翻訳管理システムの設定、Crowdin エンジニアリング
