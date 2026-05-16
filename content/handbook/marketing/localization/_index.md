---
title: ローカリゼーション
description: Localization チームのビジョンとプロセスについて学びましょう。
upstream_path: /handbook/marketing/localization/
upstream_sha: 768e1a6af6ab56133195582e6a0b17d225df15f7
translated_at: "2026-05-01T00:00:00Z"
translator: claude
stale: false
lastmod: "2026-04-08T09:15:01-07:00"
---

## はじめに

Localization チームは、Marketing、Sales、Product、Engineering の各 [部門](/handbook/company/structure/#organizational-structure)、ならびに外部パートナー（ベンダー）や翻訳者の広範なコミュニティと協働し、Marketing (about.gitlab.com)、Editorial（ブログ）、Product、ドキュメント、Enablement（サポート、カスタマーサクセス等）といった主要な柱にわたり、GitLab のグローバルなリーチとユーザー体験を実現しています。

チームの主要なイニシアチブには、英語以外のブログ公開頻度とパフォーマンスの向上、マーケティングウェブサイトページのローカライズ、docs.gitlab.com のローカライズの実現、用語管理システムの立ち上げ、最先端の生成 AI および機械翻訳ソリューションの展開、サポートコンテンツやトレーニング・認定資料のローカライゼーションなど顧客向けプログラムへの拡大、さらに上記すべてをローカリゼーション技術プラットフォーム・ツールでサポートすることが含まれます。

ローカライズされたプロダクトドキュメント、マーケティングコンテンツ、カスタマーサクセス資料で地域チームを支援する私たちの能力は、GitLab のグローバル市場での成長能力に直接影響します。

## チームメンバー

- [Daniel Sullivan](https://gitlab.com/djsulliv), Director, Globalization & Localization
- [Oleksandr Pysaryuk](https://gitlab.com/opysaryuk), Senior Manager, Globalization Technology
- [María José Salmerón Ibanez](https://gitlab.com/mjsibanez), Senior Localization Program Manager
- [Megumi Uchikawa](https://gitlab.com/muchikawa), Senior Localization Content Manager
- [Maud Leuenberger](https://gitlab.com/maud-L), Senior Localization Content Manager, French
- [Hendrik Breuer](https://gitlab.com/hendrikbreuer), Senior Localization Content Manager, German
- [Rasam Hossain](https://gitlab.com/rasamhossain), Senior Fullstack Engineer
- [Lauren Barker](https://gitlab.com/laurenbarker), Staff Fullstack Engineer
- [Emi Kimura](https://gitlab.com/emikimura-ext), English-Japanese Linguist*
- [Yuko Yamamoto](https://gitlab.com/yyamamoto-ext), Localization Specialist, Japanese*

*臨時のサービスプロバイダー

## ローカリゼーション技術管理

Localization チームは、目的別に構築された複数のソリューションと、商用の Language Technology Platform (LTP) で構成される多様な技術スタックを管理し、GitLab プロダクト UI、マーケティングウェブサイト、GitLab プロダクトドキュメントのローカリゼーションを担っています:

- [GitLab Translation Agent](https://gitlab.com/explore/ai-catalog/agents/532) は、GitLab Duo Chat を活用した AI 翻訳アシスタントで、GitLab の社内ローカリゼーションワークフロー向けに最適化されています。GitLab Translation Agent は [GitLab Duo Agent Translation Platform](https://gitlab.com/gitlab-com/localization/gitlab-duo-agent-translation-platform) を使用して、ドイツ語、フランス語、イタリア語、日本語、ポルトガル語（ブラジル）、スペイン語の GitLab マーケティングコンテンツ（ウェブサイトページやブログなど）の翻訳を生成します。翻訳結果は公開前に GitLab のローカリゼーション Content Manager によってレビューおよび編集されます。
- [Localization Request Management システム](https://gitlab.com/groups/gitlab-com/localization/-/epics/35) と、その統合およびマイクロサービス群（別名: Argo）
- [GitLab Translation Service](/handbook/engineering/architecture/design-documents/gitlab_translation_service/) （別名: [Argo GitLab Integration](https://gitlab.com/gitlab-com/localization/argo-gitlab-integration)）
- [TranslationOS](https://gitlab.com/groups/gitlab-com/localization/-/epics/92) や [Phrase TMS](https://gitlab.com/groups/gitlab-com/localization/-/epics/95) などの LTP（Language Technology Platform）と、[Decap CMS](https://gitlab.com/groups/gitlab-com/localization/-/epics/83) などの GitLab プロジェクト・システムとの間における Argo の統合と自動化
- GitLab プロダクトドキュメント向けの、機械翻訳とローカリゼーション周辺タスクのための、目的別に構築されたカスタム AI 駆動ソリューション。プロジェクト [Tech Docs AI-powered translation](https://gitlab.com/gitlab-com/localization/tech-docs-ai-powered-translation) を参照
- [Crowdin](/handbook/business-technology/tech-stack/#crowdincom) を使用した、GitLab プロダクト UI のコンテキスト強化型ローカリゼーションのための、目的別に構築されたカスタムソリューション。プロジェクト [GitLab String Search](https://gitlab.com/gitlab-com/localization/gitlab-string-search)、エピック [Implement and launch the string search context-enhancement solution as Pages website](https://gitlab.com/gitlab-com/localization/localization-team/-/issues/342)、プロジェクト [Crowdin Automation](https://gitlab.com/gitlab-com/localization/crowdin-automation)、およびプロジェクト [crowdin-translation-sync](https://gitlab.com/gitlab-org/frontend/crowdin-translation-sync) を参照
- [Argo GitLab Agent](https://gitlab.com/gitlab-com/localization/argo-gitlab-agent): Argo エコシステムのコンポーネントとして、ファイルの前処理・後処理など特定のローカリゼーション関連タスクのために目的別に構築されたサービス
- 用語管理システム - [Kalcium Quickterm](https://gitlab.com/groups/gitlab-com/localization/-/epics/51)

## ローカリゼーションプログラム管理

### お問い合わせ

Localization チームは、ローカリゼーション関連の一般、言語別、パートナー別の Slack チャネルを管理しています:

- `#localization`: 翻訳・ローカリゼーションに関する質問、リクエスト、Localization チームとのコラボレーションの中央チャネル。
- `#tech-docs-localization`: 主に Localization チームと Technical Writing チームとの間のクイックなコミュニケーション・やり取りのためのチャネル。
- `#blog-localization-content`: 国際版ブログに関するコミュニケーションのためのチャネル
- `#translated-team`: 言語サービスプロバイダー [Translated](https://gitlab.com/groups/gitlab-com/localization/-/epics/11) とのコミュニケーション用。
- `#spartan-software`: 技術パートナー [Spartan Software](https://gitlab.com/gitlab-com/localization/localization-team/-/issues/41) とのコミュニケーション用。
- `#oban-international`: コピーライティングおよびデジタルマーケティングエージェンシー [Oban International](https://obaninternational.com/) とのコミュニケーション用。
- `#crowdin_gitlab`: プロダクト UI テキストのローカリゼーション技術プロバイダー [Crowdin](https://crowdin.com/) とのコミュニケーション用。
- `#argos_multilingual`: プロダクトおよびテクニカルドキュメントの言語サービス、ソリューション、技術プロバイダーである [Argos Multilingual](https://gitlab.com/gitlab-com/localization/localization-team/-/issues/60) とのコミュニケーション用。
- `#terminology`: 用語コンサルタント、ベンダー（Translated および Argos Multilingual）、用語管理システムの技術プロバイダー [Kaleidoscope](https://kaleidoscope.at/en/) とのコミュニケーション用。

GitLab のステークホルダーと Localization チームが言語別のイニシアチブで協力するためのチャネル:

- `#japan_localization_gitlab`
- `#french-localization`
- `#german-localization`
- `#italian-localization`
- `#portuguese-brazil-localization`
- `#spanish-localization`

### ラベル

#### ローカリゼーションリクエストのステータスラベル

| ラベル | 用途 |
| ------ | ------------ |
| `L10n-status::triage` | ローカリゼーションリクエストやイニシアチブをトリアージするため |
| `L10n-status::New Request` | 新規ローカリゼーションリクエストを示すため |
| `L10n-status:in progress` | ローカリゼーションリクエストが進行中であることを示すため |
| `L10n-status:Completed` | ローカリゼーションリクエストが完了したことを示すため |
| `L10n-status:LQA` | ローカリゼーションリクエストがローカリゼーション品質保証 (LQA) 中であることを示すため |
| `L10n-status-blocked`| ローカリゼーションリクエストがブロックされていることを示すため |
| `L10n:: business owner review` | リクエスト元のチーム/担当者が翻訳をレビューしていることを示すため。[内部レビュー](#internal-reviews) が行われている場合にも使用 |
| `L10n::backlog`| バックログ内の Issue を追跡するため |

#### 主要なローカリゼーション柱のラベル

| ラベル | 用途 |
| ------ | ------------ |
| `L10n-mktg` | マーケティングローカリゼーション関連の作業 |
| `L10n-infrastructure`| 当社のローカリゼーションインフラ・技術関連の作業 |
| `L10n-training` | GitLab におけるローカリゼーションに関する学習全般 |
| `L10n-partners` | ベンダー関連の作業を追跡するため |
| `L10n-docs`| GitLab ドキュメントのローカリゼーション関連の作業を追跡するため |
| `L10n-product`| GitLab プロダクト UI のローカリゼーション関連の作業を追跡するため |
| `L10n-terminology-mngmnt` | 用語管理プロセス、用語管理システムの実装、プロダクト翻訳のための Crowdin 上の用語集作業などに関連する作業 |

#### ロケールラベル

| ラベル | 用途 |
| ------ | ------------ |
| `fr-FR` | フランス語でのコンテンツおよびローカリゼーション作業の追跡 |
| `de-DE`| ドイツ語でのコンテンツおよびローカリゼーション作業の追跡 |
| `es-International`| スペイン語でのコンテンツおよびローカリゼーション作業の追跡 |
| `ja-JP` | 日本語でのコンテンツおよびローカリゼーション作業の追跡 |
| `pt-BR` | ブラジルポルトガル語でのコンテンツおよびローカリゼーション作業の追跡 |
| `it-IT` | イタリア語でのコンテンツおよびローカリゼーション作業の追跡 |

#### 翻訳エンジンのラベル

| ラベル | 用途 |
| ------ | ------------ |
| `translation::gdatp` | [GDATP](https://gitlab.com/gitlab-com/localization/gitlab-duo-agent-translation-platform) によって生成された Translation MR。 |
| `translation::aiqt` | AI Quick Translator（Claude ベースのプロジェクト）からのコンテンツが含まれる MR |
| `translation::argo-phrase` | Argo → Phrase TMS → Argos Multilingual パイプライン（継続的/ベンダー管理フロー）から作成された MR。 |
| `translation::argo-matecat` | Argo → TranslationOS → Matecat パイプラインから作成された MR。 |
| `translation::inhouse-linguist` | 機械エンジンを介さずに、GitLab の社内言語スタッフまたは Content Manager が手動で翻訳を行った MR。 |
| `translation::external-vendor` | Argo の自動化外で、ベンダーの言語担当者が手動で翻訳を提供した MR（単発のリクエスト、直接ファイルなど）。 |

## 翻訳依頼を Localization チームに提出する方法

**主な方法**
コンテンツがローカリゼーションまたはレビューの準備が整ったら、私たちの [Localization Issue Tracker](https://gitlab.com/gitlab-com/localization/issue-tracker/-/issues/new?issuable_template=localization-request) を通じて Issue を提出してください。

注意: Slack の `#translated-team` または `#argos_multilingual` で Translated や Argos Multilingual のチームに直接連絡することもできますが、Issue Tracker からの提出を推奨します。

**追加サポート**
ローカリゼーションに関する一般的な質問について:

- 私たちの `#localization` Slack チャネルにご参加ください
- Issue、エピック、マージリクエストに L10n-attention ラベルを追加してください
- 現在のローカリゼーションリクエストのステータスは、こちらでご確認いただけます: [Issue Tracker Board](https://gitlab.com/gitlab-com/localization/issue-tracker/-/boards/7726880)

### 私たちに連絡を取るタイミング

特に明確なタイムラインがあり、すべての地域のユーザーに影響するグローバルなイニシアチブについては、計画段階で早期に Localization チームに連絡することをおすすめします。コンテンツが確定し承認されるまで翻訳を開始することはできませんが、計画・設計段階での早期コラボレーションが成功の鍵となります。

### 内部レビュー

私たちは言語リードおよび契約者と協力して内部レビュープロセスを管理し、各市場の GitLab チームが通常業務に集中できるようにしています。ただし、新しいチームが立ち上がり、GitLab および現地の期待に沿った形でコンテンツをローカライズするために必要なコンテキストを構築する過程では、内部レビューチームを随時関与させる必要があるかもしれません。

私たちの内部レビュアーはボランティアの GitLab 従業員です。このタスクが本業に追加されたものであることを十分理解しており、引き続きそのことを尊重します。翻訳とレビューはともに Translated のツールで実施されます。レビューのプロセスは現在進行形で整備中です。

## GitLab プロダクトドキュメントサイト (docs.gitlab.com) のローカリゼーション

私たちは GitLab プロダクトドキュメントのローカリゼーションに取り組んでいます。詳細については、[GitLab プロダクトドキュメントのローカリゼーション](tech_docs_localization.md) ハンドブックページをご覧いただき、[Docs Site Localization プロジェクト](https://gitlab.com/gitlab-com/localization/docs-site-localization) および [Localization of GitLab Product Documentation エピック](https://gitlab.com/groups/gitlab-com/localization/-/epics/14) をフォローしてください。

## マーケティングローカリゼーション

GitLab のマーケティングウェブサイトは継続的にローカライズされ、6 言語で保守されています。GitLab の国際版ブログは日本語、フランス語、ドイツ語で提供されており、それぞれ専任の Content Manager がいます。詳細については [マーケティングローカリゼーション](marketing_localization.md) ハンドブックページをご覧ください。
