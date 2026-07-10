---
title: Fulfillment Provision チーム
description: "GitLab の Fulfillment サブ部門の Provision チーム"
upstream_path: /handbook/engineering/development/fulfillment/provision/
upstream_sha: 6eef8dbb6a0d15167aa5378f476b04cd38b78675
translated_at: "2026-07-10T07:03:07+09:00"
translator: claude
stale: false
lastmod: "2026-07-03T00:57:12+00:00"
---

## ビジョン

Fulfillment のプロダクトビジョンの詳細については、[Fulfillment](https://about.gitlab.com/direction/fulfillment/) ページを参照してください。

Provision グループは [Provision カテゴリ](/handbook/product/categories/#provision-group) を管理しています。

## チームメンバー


<p class="my-3 text-sm text-gray-600 italic">チームメンバー情報は <a href="https://handbook.gitlab.com/handbook/engineering/development/fulfillment/provision/#team-members" rel="external noopener">原文 (英語)</a> を参照してください。</p>


## 安定したカウンターパート


<p class="my-3 text-sm text-gray-600 italic">チームメンバー情報は <a href="https://handbook.gitlab.com/handbook/engineering/development/fulfillment/provision/#team-members" rel="external noopener">原文 (英語)</a> を参照してください。</p>


## プロジェクト管理プロセス

Provision のプロジェクト管理プロセスは、Fulfillment の一般的な [プロジェクト管理プロセス](/handbook/engineering/development/fulfillment/#project-management-process) を引き継ぎ、Provision チームが行う作業に固有のいくつかの追加要素を加えています。

### 計画

マイルストーン計画プロセスは、マイルストーンの [計画 Issue](https://gitlab.com/gitlab-org/fulfillment-meta/-/issues/?sort=milestone_due_desc&state=opened&label_name%5B%5D=Planning%20Issue&label_name%5B%5D=group%3A%3Aprovision) を中心に構築されています。これらの Issue は、次のマイルストーンで取り組む Issue の概要、それらの Issue がどのように優先順位付けられているか、包括的な目標とどのように一致しているかについての解説、および提案された作業が翌月の容量にどのように収まるかを示します。Provision チームは計画 Issue に [このテンプレート](https://gitlab.com/gitlab-org/fulfillment-meta/-/blob/master/.gitlab/issue_templates/provision_planning.md) を使用します。

#### 計画タイムライン

チームのエンジニアリングマネージャーとそのプロダクトマネジメントのカウンターパートは、マイルストーン計画プロセスの実施に責任があります。各マイルストーンに必要なすべての準備作業を完了するために、Provision チームは以下のスケジュールを使用します:

- 月の 1 日: 新しい計画 Issue を作成し、翌月の [監視可用性カレンダー](https://gitlab.com/gitlab-org/fulfillment-meta/-/issues/882) がチームメンバーによって記入されていることを確認する
- 月の 9 日: エンジニアの入力と候補 Issue の精査を依頼する
- 月の 13 日: PTS と Sentry 監視スケジュールを確定する
- 月の 14 日: 精査された Issue の最終容量計画を行う
- 月の 18 日: マイルストーン開始

#### 精査

精査プロセスは、すべての計画された作業がスケジュールされたマイルストーン内で完了できることを確保することを目的としています。精査フェーズでは、Issue がエンジニアに配布され、3 つの質問に答えます:

- この Issue を `workflow::ready for development` としてマークすることを妨げる未解決の質問はありますか？
- この Issue を実装する際に予測可能なブロッカーを引き起こす可能性のある設計上の問題はありますか？
- この Issue に対してどのウェイト見積もりを付けますか？

予測可能なブロッカーを解消することで、すべてのスケジュールされた作業が行き詰まらずに完了できるようにします。設計上の考慮事項により完了できない Issue がある場合は、容量が次のマイルストーンで届けられる Issue に向けられるようにするために、将来のマイルストーンに戻す必要があります。計画された Issue に必要な作業の正確な見積もりを持つことは、チーム容量を考慮してすべての計画された作業が完了できるようにするために重要です。

### 容量計画

Provision チームは主に開発チームですが、チームの作業の性質上、チームメンバーが純粋な開発タスクから時間を取られる追加の運用上の懸念事項が定期的に発生します。チームメンバーの時間を取る主な定期タスクは:

- [Provision トラッキングシステムの監視](https://gitlab.com/gitlab-org/customers-gitlab-com/-/blob/main/doc/provision_tracking_system/failure_monitoring.md)
- [インテグレーション関連エラーの Sentry 監視](https://gitlab.com/gitlab-org/customers-gitlab-com/-/blob/main/doc/process/salesforce_and_zuora_sentry_issue_monitor.md)
- 顧客に影響するライセンス問題のトリアージ

各マイルストーンでの継続的な運用プロセスによって消費される時間を考慮するために、Sentry 監視に対してウェイト `3` の Issue が作成され、マイルストーンでそのプロセスの DRI であるエンジニアに割り当てられます。Provision トラッキング監視には、マイルストーンの Provision トラッキング監視スケジュールに基づいてエンジニアに割り当てられる、それぞれウェイト `1` の 4 つの Issue が作成されます。

マイルストーン中にクローズされた Issue の目標ウェイトは `0.5 * (休暇を考慮した総稼働日数)` です。容量計画をエンジニア単位の粒度に移行する方法を議論する [オープン Issue](https://gitlab.com/gitlab-org/fulfillment-meta/-/issues/1469) があります。

### 変更管理

[イテレーション](/handbook/values/#iteration) と [コラボレーション](/handbook/values/#collaboration) の精神で、これらのプロセスは進行中のものです。改善の提案や試すべき新しいプロセスは [このエピック](https://gitlab.com/groups/gitlab-org/-/epics/8387) の下で提案できます。

### トライアルに関する Growth チームとのコラボレーション

Provision チームはトライアル作業に関して Growth チームとコラボレーションしています。Growth は、GitLab 内のトライアル開始画面と、CustomersDot の薄いトライアルエントリーエンドポイントおよび基本的なコントローラーという、トライアルのエントリーポイントを所有します。一方、Fulfillment/Monetization は、より深いトライアルコードベース（プロビジョニング、エンタイトルメント、課金、ライフサイクル、共有サービス）に加え、CustomersDot のすべての運用サポートとオンコールを所有します。詳細なオーナーシップの境界とコラボレーションガイドラインについては、[トライアルのオーナーシップとコラボレーションフレームワーク](/handbook/engineering/development/growth/trials-ownership/)を参照してください。Growth エンジニアがトライアル作業のために CustomersDot にコントリビュートする必要がある場合は、そこに記載されている意思決定フレームワークに従う必要があります。質問やコラボレーションリクエストについては、[#s_fulfillment](https://gitlab.slack.com/channels/s_fulfillment) または [#s_growth](https://gitlab.slack.com/channels/s_growth) Slack チャンネルに連絡してください。

### 過去の容量

チームが過去のマイルストーンで達成したウェイトポイント。これにより、将来のマイルストーンで何を届けられるかをより正確に見積もれます。完全なチャートは [移行予定](https://gitlab.com/gitlab-data/tableau/-/issues/685) です。

## パフォーマンス指標


<p class="my-3 text-sm text-gray-600 italic">ダッシュボードは <a href="https://handbook.gitlab.com/handbook/engineering/development/fulfillment/provision/" rel="external noopener">原文 (英語)</a> を参照してください。</p>


### OKR

エンジニアリングマネージャーは [OKR](/handbook/company/okrs/) の進捗を 2 週間ごとに報告します。現在の OKR: [FY22-Q1](https://gitlab.com/gitlab-com/www-gitlab-com/-/issues/10680)

## 共通リンク

- [トライアルのオーナーシップとコラボレーションフレームワーク](/handbook/engineering/development/growth/trials-ownership/) - Growth と Fulfillment/Monetization にまたがるトライアル作業の概念的なオーナーシップモデルと意思決定フレームワーク
