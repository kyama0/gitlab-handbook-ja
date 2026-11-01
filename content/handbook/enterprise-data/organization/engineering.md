---
title: "GitLab における Data Platform"
description: "GitLab Data Platform チームのハンドブック"
upstream_path: "/handbook/enterprise-data/organization/engineering/"
upstream_sha: "52419353ea755a1ac823553385f8636ff2fcde17"
translated_at: "2026-11-01T05:03:57+00:00"
translator: claude
stale: false
lastmod: "2026-10-30T14:17:26-04:00"
---

Data Platform チームのミッションは、**誰もがアナリストになれる**ような安全で信頼性の高いデータプラットフォームを構築することです。私たちの限界はデータまたはアナリスト自身*のみ*です。私たちは、**GitLab のバリューに従い**、 **[Data Team の原則](/handbook/enterprise-data/#data-team-principles)** に基づいてこれを実現します。

## Data Platform の責務 {#data-platform-responsibilities}

Data Platform チームは以下の事項に直接責任を持ちます:

- 分析対象領域・アクティビティ・プロセスの分析を可能にするための新しいデータソースの統合
- 確立された[サービスレベル目標とティア](/handbook/enterprise-data/platform/#data-sources)に従ってデータソースを稼働させ続ける
- 増大するデータ量に対応するためのパイプラインとプロセスのスケーラビリティ拡大
- プラットフォームをよりスケーラブルかつ効率的にするための新しい技術の評価

## Data Platform チームにおけるハンドブックファースト {#handbook-first-on-the-data-platform-team}

GitLab では[ハンドブックファースト](/handbook/about/handbook-usage/#why-handbook-first)を実践しています。コードベースやプロセスへの変更は、作業を開始する前、またはコードを変更するマージリクエストと並行して、ハンドブックの MR を作成する必要があります。

例えば: データソースを追加する場合、まず[抽出とロード](/handbook/enterprise-data/platform/)と[システム図](/handbook/enterprise-data/platform/)セクションを更新するマージリクエストを作成します。この MR は変更が作成されてコードの変更とともにマージされる過程で更新できます。

## Data Platform チームのナレッジセッション {#data-platform-team-knowledge-sessions}

私たちは Data Platform チームとして常に多くの知識を得たいと考えており、利用可能な最新ソリューションを求めています。そのため、2 ヶ月に 1 回の Data Platform チームミーティングの（半分の）時間を外部スピーカーを招くために割り当てています。Data Platform チームミーティングは毎週火曜日の 14:00 UTC であり、偶数月の第 1 火曜日にソリューションプロバイダーを招いてデータとテクノロジーについて話し合います。[Issue を開いて](https://gitlab.com/groups/gitlab-data/engineers/-/issues)または Data Platform チームメンバー（メールや LinkedIn 経由）に連絡することで、チームミーティングの 1 つに積極的に参加していただけます。

| 日付 | 議論トピック |
| ---------- | ------ |
| 2022-10-04 | 未定 |
| 2022-12-06 | 未定 |
| 2023-02-01 | 未定 |
| 2023-04-05 | 未定 |
| 2023-06-07 | 未定 |

---

## Data Platform チームのロール {#data-platform-team-roles}

チームとして効率的に運営するために、Data Platform チームのメンバーに以下の責務を指定・割り当てています。これらの割り当ては恒久的なものではありませんが、これらの責務についてのチームの直接責任者（DRI）を設けます。担当エンジニアはこれらの責務にわたってメンテナンスとイテレーションによる改善の両方に責任を持ちます。

### 本番運用 {#production-operations}

本番運用は常に Data Platform チームの[最優先事項](/handbook/enterprise-data/how-we-work/#standing-priorities)であり、本番環境とそれが支援する SLO に影響するすべての技術的な運用が含まれます。これには、監視・テスト・デプロイ・コードレビュー・DevOps 全般が含まれますが、これらに限定されません。

### プロジェクト管理と計画 {#project-management-and-planning}

プロジェクト管理と計画の責務を担当するエンジニアは、私たちの[ワークフロープロセス](/handbook/enterprise-data/how-we-work/#workflow-summary)・[イテレーション計画](/handbook/enterprise-data/how-we-work/#quarterly-and-iteration-planning)・Issue トリアージを監督・指揮・改善します。作業が効率的に計画・完了されること、および実施される作業が Data Team と GitLab 双方の目標を適切に支援・実現していることを確保します。

### ユーザーエクスペリエンス {#user-experience}

このエンジニアは私たちのデータプラットフォームの使いやすさに責任を持ちます。Data Platform のミッションに述べられているように、私たちはすべての人のためにプラットフォームを構築しています。担当エンジニアは私たちのデータプラットフォームに関する問題を積極的に発見し、特に最も使いにくいエクスペリエンスに焦点を当てて解決策を模索します。

### セキュリティ・コンプライアンス・プライバシー {#security-compliance--privacy}

このロールはプラットフォームをセキュアに・プライベートに・コンプライアントに保ち、監査に関する質問の窓口となるとともに、データプラットフォームのセキュリティとプライバシーに影響する変更をレビューする主要なエンジニアとなります。また、プラットフォームのセキュリティ機能をイテレーションを通じて改善していきます。

### データウェアハウスアーキテクチャ {#data-warehouse-architecture}

イテレーションのコストを抑えてウェアハウスの使いやすさを高めるために、ディメンショナルウェアハウスを実装することにしました。このエンジニアはウェアハウスアーキテクチャの整合性を守り、アーキテクチャが改善される必要がある箇所についてのビジョンをリードします。これらの変更と保護はすべて、内部・外部を問わず顧客を主要なフォーカスとして保つべきです。
