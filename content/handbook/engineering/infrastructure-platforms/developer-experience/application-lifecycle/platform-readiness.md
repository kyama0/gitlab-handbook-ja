---
title: "Developer Experience: Application Lifecycle / Platform Readiness"
description: "Platform Readiness チームは、すべてのデプロイ環境で GitLab の機能や能力を信頼性高く運用する準備が整っているかを評価するためのプロセス、要件、自動化、インフラストラクチャを担当します。"
upstream_path: "/handbook/engineering/infrastructure-platforms/developer-experience/application-lifecycle/platform-readiness/"
upstream_sha: d717b9da633f2989a0b1854384a69a0c31bae680
lastmod: "2026-11-06T22:28:34Z"
translated_at: "2026-11-07T10:41:52Z"
translator: codex
stale: false
---

Platform Readiness チームは、さまざまなデプロイ環境で GitLab の機能や能力を信頼性高く運用する準備が整っているかを評価するためのプロセス、要件、自動化、インフラストラクチャを担当します。主力プロジェクトは [Platform Readiness Enablement Process（PREP）](../../production/prep.md)です。

## 概要 {#overview}

他の Application Lifecycle チームが GitLab を _デプロイして運用する_ ツールを構築する一方で、Platform Readiness は、そもそも _何かをデプロイして運用する準備が整っているかを判断する_ 能力を構築します。GitLab の準備状況は、領域を横断する関心事です。同じ機能でも GitLab.com では安全で、Self-Managed では安全でないことがあります。これまで、こうしたギャップはスケジュールを確約した後、ときにはロールアウト後になって初めて表面化していました。このチームは、そうしたギャップを早期に、一貫して発見するために存在します。

私たちは、準備状況の確認をレビューの一工程としてではなく、システムとして捉えます。チームは標準（保守可能な要件として表した「準備完了」の意味）、その標準を適用するプロセス、それを大規模に実施するための自動化、そしてそれを稼働させるインフラストラクチャを担当します。私たちが目指すのは、準備状況の評価を、専門家が介在する機能ごとのレビューから、GitLab の開発ライフサイクルに組み込まれた、証拠に基づく大部分が自動化された能力へと移行することです。人間の判断を必要とする意思決定では、その判断を維持します。

### 私たちは PREP を担当しますが、PREP そのものではありません {#we-own-prep-we-are-not-prep}

この区別は、各チームが私たちとどのように関わるかを考えるうえで重要です。PREP は、GitLab が機能の準備状況を評価するために使用する _プロセス_ であり、評価を行う機能チーム向けに専用の [PREP ハンドブックページ](../../production/prep.md)があります。Feature Readiness は、そのプロセスと、それを支える要件モデル、自動化、インフラストラクチャを担当し、運用と進化に取り組む _チーム_ です。評価を行う場合は、PREP ページから始めてください。要件の追加、プロセスの変更、ロードマップについての質問は、このチームが窓口です。

## 私たちが担当するもの {#what-we-own}

- **プロセス。** GA の準備状況を確認するゲート、要件を最新に保つための評価とガバナンスのワークフロー、評価が正確で有用かを測る品質管理を含め、PREP 評価プロセス全体を担当します。プロセスの設計については、[PREP アーキテクチャ](../../../architecture/design-documents/prep/_index.md)を参照してください。
- **要件。** プラットフォーム要件モデルとそのナレッジベースを担当します。これには、スキーマ、要件のライフサイクル、Infrastructure Platforms の各ドメインと Security が提供した要件の、単一の共有モデルへの統合が含まれます。
- **自動化。** エージェントによる評価ワークフローとそのオーケストレーション、要件の作成を支援する Requirements Agent、組織全体の準備状況を報告するメトリクスと監視を担当します。
- **インフラストラクチャ。** 評価を実行し、結果を公開し、要件のナレッジベースと自動化を運用可能に保つためのリポジトリ、パイプライン、ツールを担当します。

## 私たちの担当外のもの {#what-we-do-not-own}

準備状況の確認には協力が必要であり、担当範囲は意図的に定められています。

- **機能チームは自らの評価を担当し**、その裏付けとなる実装の証拠（コンテナ、チャート、構成、ドキュメント）にも責任を持ちます。私たちはプロセス、要件、ツールを提供します。各チームに代わって評価を完了することはありません。
- **プラットフォームチームとセキュリティチームは、各自の要件の内容を担当します。** 要件が最新であり、適用可能で、正しく記述されているかについては、これらのチームが判断の権限を持ちます。私たちが担当するのは、要件を格納するモデルであり、その中にある各ドメインの事実ではありません。
- **デプロイツールは、私たちの兄弟チームが担当します。** [Lifecycle Management](lifecycle-management.md)は Helm チャート、プラットフォームチャート、Operator、Bridge を担当し、[Instance Configuration](instance-configuration.md)は構成のエクスペリエンスを担当します。私たちは、これらのチームが実現する環境全体の準備状況を評価します。デプロイツール自体は担当しません。
- **アーキテクチャガイドラインとプロダクトライフサイクル**は、私たちが連携し、情報を取り入れる隣接するプロセスであり、私たちが管理するものではありません。

## チームとの協働 {#working-with-the-team}

Application Lifecycle 共通の受付と、一般的な支援依頼のプロセスについては、[Application Lifecycle ページ](_index.md)を参照してください。それ以外に、各チームが Platform Readiness と関わる主な方法は次のとおりです。

- **機能の準備状況の評価を行う。** [PREP ハンドブックページ](../../production/prep.md)と[readiness プロジェクト](https://gitlab.com/gitlab-org/architecture/readiness)の README に従ってください。機能を GA に昇格させるには、PREP の完了と承認が必要です。
- **要件を追加または更新する。** プラットフォームとセキュリティの各ドメインは、個別のチェックリストを維持するのではなく、共有の要件モデルを拡張します。適切な配置を支援し、重複を避けられるよう、新しい要件を作成する前にご連絡ください。
- **プロセスやロードマップについて質問する。** 評価やプロセスについての質問は `#prep-support`、チーム全体に関わる話題は `#g_application_lifecycle` で質問してください。

## プロジェクトとリソース {#projects-and-resources}

作業は [`gitlab-com/gl-infra/prep`](https://gitlab.com/gitlab-com/gl-infra/prep) グループで公開して進めています。主な参照先は次のとおりです。

- **PREP プロセス（機能チーム向け）：** [PREP ハンドブックページ](../../production/prep.md)と[readiness プロジェクト](https://gitlab.com/gitlab-org/architecture/readiness)（テンプレート、例、現在のチェックリストに基づく評価）。
- **PREP Hub：** [`prep/meta`](https://gitlab.com/gitlab-com/gl-infra/prep/meta) — チームの Issue トラッカーとアーキテクチャ上の決定。
- **要件モデルとドメインのナレッジベース：** 要件スキーマと、評価で照合するプラットフォーム要件の集合。
- **自動化：** [`prep/workflows`](https://gitlab.com/gitlab-com/gl-infra/prep/workflows) — エージェントによる評価ワークフローと支援ツール。

## チームメンバー {#team-members}

以下の人々がチームのメンバーです。

{{< team-by-manager-slug manager="cjwilburn" team="Platform Readiness">}}

Product Manager：[Martin Brümmer](https://gitlab.com/mbruemmer)

## ステークホルダーと部門横断のパートナー {#stakeholders-and-cross-functional-partners}

- **機能チームとプロダクトチーム** — 準備状況の評価の主な利用者です。
- **プラットフォームチーム（Infrastructure Platforms の各ドメイン）** — プラットフォーム要件を担当して提供し、GA ゲートでレビューを行うステークホルダーとなります。
- **Security** — 要件の主要な提供者であり、レビューを行うステークホルダーです。
- **Theseus / Developer Experience** — 準備状況をコードとして扱う社内開発者プラットフォームの方向性です。私たちの要件モデルは、その取り組みが想定するレイヤーにあたります。
- **AI Frameworks and AI Foundations / Duo Agent Platform** — 私たちの自動化が稼働するプラットフォームです。私たちは、高い要求を持つ最初の顧客です。
- **Architecture Board** — PREP が解決の指針として取り入れるアーキテクチャガイドラインを担当します。
