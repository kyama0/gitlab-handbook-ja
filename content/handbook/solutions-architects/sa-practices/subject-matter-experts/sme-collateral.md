---
title: SME コラテラルとリソース

description: 各 SME 領域のコラテラルを維持する
upstream_path: /handbook/solutions-architects/sa-practices/subject-matter-experts/sme-collateral/
upstream_sha: fb150f3a4f831172cf23c7f0d75b0d6310a68972
translated_at: "2026-05-08T18:59:21Z"
translator: claude
stale: false
lastmod: "2026-05-08T14:07:20+02:00"
---

## SME コンテンツとコラテラル（TBD）

\*注：現在、CSM SME は各 SME 領域のリソースと素材を集めています。これらは Highspot の [CS SME Hub of content](https://gitlab.highspot.com/items/667095b95cc9b08c87d40b68?lfrm=srp.0) で維持されています。

これは、各 SME 領域のコラテラル収集をリードしている [CS SME プログラムの説明](https://gitlab.com/gitlab-com/customer-success/subject-matter-experts/cs-subject-matter-experts/-/tree/main) です

SME の知識を効果的に整理しスケールするために、以下の構造を実装できます：

1. ディスカバリ質問
   - 各 SME 領域の包括的なディスカバリ質問のリストを開発する
   - トピック、複雑さ、顧客セグメントごとに質問をカテゴリー化する
   - 顧客とのやり取りに基づいて質問を定期的に更新および洗練する

2. よくある質問（FAQ）
   - 各 SME ドメインの FAQ をまとめる
   - 関連する例とともに、明確で簡潔な回答を提供する
   - 追加リソースやドキュメントへのリンクを含める

3. 標準デモ
   - 一般的なユースケース用の標準化されたデモのライブラリを作成する
   - 特定の顧客ニーズに合わせて簡単にカスタマイズできるようにする
   - バージョン管理を維持し、デモを定期的に更新する

4. 知識ベース
   - SME 知識のための一元化されたリポジトリを開発する
   - トピック、プロダクト領域、難易度別にコンテンツを整理する
   - ベストプラクティス、トラブルシューティングガイド、ケーススタディを含める

5. 学習パス
   - 各 SME 領域用に構造化された学習パスを設計する
   - 推奨リソース、トレーニング素材、ハンズオン演習を含める
   - 進捗を追跡するためのマイルストーンとアセスメントを定義する

6. コラボレーションツール
   - SME が知識を共有し協働するためのツールを実装する
   - 定期的な知識共有セッションとワークショップをセットアップする
   - SME と他のチームの間でクロスファンクショナルな協働を促進する

7. メンターシッププログラム
   - 経験豊富な SME と将来のエキスパートをペアにするメンターシッププログラムを確立する
   - メンターとメンティーのための明確なゴールと期待を定義する
   - 進捗を追跡し、メンターシップ関係についてフィードバックを提供する

8. 継続的改善
   - SA と顧客から洞察を集めるためのフィードバックループを実装する
   - フィードバックと業界のトレンドに基づいて SME コンテンツを定期的にレビューおよび更新する
   - SME リソースの効果を測定し、それに応じて戦略を調整する

この構造を実装することで、SME 知識を効果的にスケールし、スキル開発のための明確なパスを提供し、すべての SME 領域で顧客に対する一貫した高品質のサポートを確保できます。

CS 組織はすでにコンテンツ収集とコンテンツ作成を開始しています。彼らはこれを達成するために Pod でミーティングを行ってきました。

[CS SME Hub of content](https://gitlab.highspot.com/items/667095b95cc9b08c87d40b68?lfrm=srp.0) の HighSpot ページはこちらです。バージョン管理されたイネーブルメントコンテンツの問題解決について語る [CS SME Charter](https://gitlab.com/gitlab-com/customer-success/subject-matter-experts/cs-subject-matter-experts) はこちらです。

SA はどう支援できるか：私たちは SME を超えて SME 知識をスケールするプロセスも持つ必要があります。たとえば：ディスカバリ質問の作成、顧客から頻繁にされる質問の作成、いくつかの標準デモの作成や使用など。

Enablement はどう支援できるか：誰かが SME になりたい場合にパスがあるようにコンテンツを構造化するために Enablement にアプローチできます。これは長期的な成果です。

[Technical Skills Exchange イニシアチブ](/handbook/solutions-architects/sa-practices/subject-matter-experts/sme-cadences/#sme-tech-skills) は、その目的のために活用できます

### AI / Duo Agent Platform (DAP) — SA 可視性ダッシュボード

これらのダッシュボードは、SA に顧客の Duo および DAP の使用、採用、エンゲージメントの可視性を提供します。顧客のヘルスチェック、POV トラッキング、サクセスプラン、QBR 準備に活用してください。

#### Usage Billing Analytics

{{% alert title="ドラフトダッシュボード" color="info" %}}このワークブックは Product Data Insights チームによって積極的に開発中です。ビューと指標が変更される可能性があります。ステータスについては [gitlab-data/product-analytics#3227](https://gitlab.com/gitlab-data/product-analytics/-/issues/3227) を参照してください。{{% /alert %}}

ワークブック：[Usage Billing Analytics](https://10az.online.tableau.com/#/site/gitlab/workbooks/3888582/views)

| ダッシュボード | 目的 | リンク |
|-----------|---------|------|
| Duo KPI Dashboard | Duo 採用の主要なパフォーマンス指標 | [Duo KPI Dashboard](https://10az.online.tableau.com/#/site/gitlab/views/UsageBillingAnalytics_17685202519710/DuoKPIDashboard?:iid=2) |
| Consumption Deep Dive Metrics | 詳細なクレジット消費の内訳 | [Consumption Deep Dive Metrics](https://10az.online.tableau.com/#/site/gitlab/views/UsageBillingAnalytics_17685202519710/ConsumptionDeepDiveMetrics?:iid=3) |
| Customer Report Dashboard | 顧客ごとの消費レポート | [Customer Report Dashboard](https://10az.online.tableau.com/#/site/gitlab/views/UsageBillingAnalytics_17685202519710/CustomerReportDashboard?:iid=4) |

#### DAP Usage & Engagement

| ダッシュボード | 目的 | リンク |
|-----------|---------|------|
| Duo Daily Usage | 日次 DAP 使用トレンド | [Duo Daily Usage](https://10az.online.tableau.com/#/site/gitlab/views/DAPUsage/DuoDailyUsage?:iid=1) |
| Agent Success Metrics | エージェントタスクの完了率、成功/失敗の内訳 | [Agent Success Metrics](https://10az.online.tableau.com/#/site/gitlab/views/AgentUsageEngagement/AgentSuccessMetrics?:iid=2) |
| Agent Engagement Trends | 使用トレンド、採用曲線、エンゲージメントパターン | [Agent Engagement Trends](https://10az.online.tableau.com/#/site/gitlab/views/AgentUsageEngagement/AgentEngagementTrends?:iid=1) |

#### DAP Monetization Metrics

ワークブック：[DAP Monetization Metrics](https://10az.online.tableau.com/#/site/gitlab/workbooks/3489989/views)

| ダッシュボード | 目的 | リンク |
|-----------|---------|------|
| DAP Monetization Insights | エージェントタイプ別のクレジット消費、コストトレンド | [DAP Monetization Insights](https://10az.online.tableau.com/#/site/gitlab/views/DuoAgentPlatformMonetizationMetrics/DuoAgentPlatformMonetizationInsights?:iid=2) |
| Full Report Dashboard | 包括的な DAP マネタイゼーションレポート | [Full Report Dashboard](https://10az.online.tableau.com/#/site/gitlab/views/DuoAgentPlatformMonetizationMetrics/FullReportDashboard?:iid=2) |
| Token Consumption Metrics | トークンレベルの消費分析 | [Token Consumption Metrics](https://10az.online.tableau.com/#/site/gitlab/views/DuoAgentPlatformMonetizationMetrics/TokenConsumptionMetrics?:iid=1) |

#### AI Gateway Reporting

| ダッシュボード | 目的 | リンク |
|-----------|---------|------|
| AI Gateway Overview | AI Gateway のリクエスト量、レイテンシ、エラー率 | [AI Gateway Overview](https://10az.online.tableau.com/#/site/gitlab/views/AIGatewayReporting/Overview?:iid=1) |

#### Duo Subscription Utilization

ワークブック：[Duo Subscription Utilization](https://10az.online.tableau.com/#/site/gitlab/workbooks/2484649/views)

| ダッシュボード | 目的 | リンク |
|-----------|---------|------|
| Duo Subscription Utilization | シート使用率、アクティベーション率、サブスクリプションのヘルス | [Duo Subscription Utilization](https://10az.online.tableau.com/#/site/gitlab/views/DuoProSubscriptionUtilization/DuoSubscriptionUtilization?:iid=2) |
| Tier Enabled Duo Core Utilization | ティア別の Duo Core 機能の利用率 | [Tier Enabled Duo Core Utilization](https://10az.online.tableau.com/#/site/gitlab/views/DuoProSubscriptionUtilization/TierEnabledDuoCoreUtilization?:iid=3) |
| Duo Subscription Account Report | アカウント別のサブスクリプションレポート | [Duo Subscription Account Report](https://10az.online.tableau.com/#/site/gitlab/views/DuoProSubscriptionUtilization/DuoProSubscriptionUtilizationReport?:iid=1) |

#### Duo Feedback

| ダッシュボード | 目的 | リンク |
|-----------|---------|------|
| Duo Feedback Dashboard | ユーザーフィードバック、満足度シグナル、機能リクエスト | [Duo Feedback Dashboard](https://10az.online.tableau.com/#/site/gitlab/views/DuoFeedbackDashboard/DuoFeedbackDashboard?:iid=1) |

#### プロダクトロードマップリファレンス

- [DAP Product Roadmap Q1 FY27](https://gitlab.com/groups/gitlab-operating-model/-/work_items/41) — Company Priority 3：AI モダナイゼーションジャーニー。主要な結果：プールクレジット NARR、400K のエージェント型チャット LLM リクエスト、250K のカスタムエージェントリクエスト、200K の外部エージェントリクエスト、ガバナンスの実装。
- **DAP トライアルプレイブック：** 完全な 8 ステップの評価ワークフローについては、[DAP Customer Trial プロセス](/handbook/solutions-architects/playbooks/pov/ai/#dap-customer-trial) を参照してください。

### StackOverflow（TBD）

SME として指定された人物が、Stack Overflow にそのように記載されていることを確認してください。これにより、それらの関連トピックでタグ付けされた質問が適切な人々にルーティングされます。

定期的な厳格な作業の一環として、SME は Slack（特に #cs-questions）と Stack Overflow の質問をレビューし、新しい変更/機能がリリースされる際に回答が支持され関連性があることを確認するべきです。

Stack Overflow を、これらの特定の領域に関する FAQ や記事にも使用できます。
