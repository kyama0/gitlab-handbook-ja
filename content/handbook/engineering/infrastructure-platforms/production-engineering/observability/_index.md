---
title: "Observability チーム"
description: "Observability（可観測性）は、メトリクス、ロギング、トレーシングを担う技術要素と、これらのコンポーネントを活用するツールおよびプロセスを包括しています。"
upstream_path: "/handbook/engineering/infrastructure-platforms/production-engineering/observability/"
upstream_sha: "0e6f01390a34aeb6706ace17d8d3c50e74e82d0d"
translated_at: "2026-04-29T02:14:34Z"
translator: claude
stale: false
---

Observability（可観測性）は、メトリクス、ロギング、トレーシングを担う技術要素と、これらのコンポーネントを活用するツールおよびプロセスを包括しています。

## ミッション

私たちのミッションは、GitLab のチームメンバーに世界クラスの可観測性サービスと摩擦のない運用体験を提供・維持することです。

## 共通リンク

|                                |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
|--------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **ワークフロー**               | [チームワークフロー](/handbook/engineering/infrastructure-platforms/production-engineering/)                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| **GitLab.com**                 | `@gitlab-org/production-engineering/observability`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| **Issue トラッカー**           | [Observability トラッカー](https://gitlab.com/gitlab-com/gl-infra/observability/team/-/issues) <br/> [Tamland](https://gitlab.com/gitlab-com/gl-infra/tamland/-/issues)                                                                                                                                                                                                                                                                                                                                                                              |
| **チーム Slack チャンネル**    | [#g_observability](https://gitlab.slack.com/archives/g_observability) - チームチャンネル<br/> [#infrastructure_platforms_social](https://gitlab.enterprise.slack.com/archives/C062T669RFD) - ソーシャルチャンネル                                                                                                                                                                                                                                                                                                                                   |
| **情報 Slack チャンネル**      | [#infrastructure-lounge](https://gitlab.slack.com/archives/infrastructure-lounge)（インフラストラクチャグループチャンネル）<br/>[#incidents](https://gitlab.slack.com/archives/incidents)（インシデント管理）<br/>[#g_infra_observability_alerts](https://gitlab.slack.com/archives/g_infra_observability_alerts)（Observability Slack アラート）<br/>[#alerts-general](https://gitlab.slack.com/archives/alerts-general)（SLO アラート）<br/>[#mech_symp_alerts](https://gitlab.slack.com/archives/mech_symp_alerts)（Mechanical Sympathy アラート）|
| **ドキュメント**               | [ドキュメントハブ](https://gitlab-com.gitlab.io/gl-infra/observability/docs-hub/)                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |

## チームメンバー

以下は Observability チームのメンバーです。


<p class="my-3 text-sm text-gray-600 italic">チームメンバー情報は <a href="https://handbook.gitlab.com/handbook/engineering/infrastructure-platforms/production-engineering/observability/#team-members" rel="external noopener">原文 (英語)</a> を参照してください。</p>


チームは [さまざまなタイムゾーン](https://timezonewizard.com/ca-m2n) に分散して世界中に在籍しています。

## 技術的な原則、目標、責任

原則と目標の詳細については [技術ブループリント](/handbook/engineering/infrastructure-platforms/production-engineering/observability/technical_blueprint) を参照してください。

以下は私たちのスコープと所有領域の概要です。

1. [監視の基礎](https://gitlab.com/gitlab-com/runbooks/blob/e00eeb59937a9043c5db04314a35acb05c4e9288/docs/monitoring/README.md#L1)
   1. メトリクススタック
   1. ロギングスタック
1. [エラーバジェット](/handbook/engineering/infrastructure-platforms/production-engineering/observability/error_budgets/)
   1. コンセプトと実装の所有
   1. 月次エラーバジェットレポートの提供
1. [キャパシティプランニング](/handbook/engineering/infrastructure-platforms/production-engineering/observability/capacity_planning/)
   1. [.com のトリアージローテーション](/handbook/engineering/infrastructure-platforms/capacity-planning/#gitlabcom-capacity-planning)
   1. [GitLab Dedicated キャパシティプランニングの運用面](https://docs.gitlab.com/ee/architecture/blueprints/capacity_planning/)
   1. 予測ツール [Tamland](https://gitlab.com/gitlab-com/gl-infra/tamland) の開発
   1. [GitLab Dedicated のキャパシティレポート](https://gitlab.com/gitlab-com/gl-infra/capacity-planning-trackers/gitlab-dedicated)
1. GitLab.com の本番サービスをカバーする [サービス成熟度モデル](/handbook/engineering/infrastructure-platforms/service-maturity-model/)
1. [GitLab.com 可用性レポート](/handbook/engineering/monitoring/): 基礎データと集計数値の提供

### ドキュメント

私たちは可観測性サービスおよびプラットフォームを使用するチームに向けた技術ドキュメントと、チーム内部使用のドキュメントを提供する必要性を認識しています。

従来は所有または貢献しているプロジェクト内、または [runbooks プロジェクト](https://gitlab.com/gitlab-com/runbooks/-/tree/master/docs) でリファレンスドキュメントを提供してきました。
これらのプロジェクトが散在しているため、ユーザーが関連ドキュメントのさまざまな部分を発見することが困難でした。

ドキュメントを再構築するにあたり、以下のアイデアと原則に従います。

1. [インフラストラクチャ Observability ドキュメントハブ](https://gitlab-com.gitlab.io/gl-infra/observability/docs-hub/) が私たちが提供する可観測性関連ドキュメントのエントリーポイントです。
1. 丁寧に作成されたドキュメントは可観測性プラットフォームの中核的なプロダクトであり、後付けではありません。
1. ドキュメントハブは、私たちがプラットフォームとして提供する可観測性インターフェイスについてエンジニアリング全体と情報共有するための手段と考えています。
1. 特定のオーディエンスを対象としたガイドやチュートリアルを、リファレンスドキュメントに加えて提供することを目指します。
1. チームの内部利用のためにも、共通理解を作り全員がすべての領域で貢献できるよう、コンセプトやアーキテクチャを説明するためにドキュメントハブを使用します。

#### ドキュメントの種類ごとの保存場所

ドキュメントにはさまざまな種類があり、それぞれ異なる場所に属しています。

| 何を？                                                          | どこに？                                              |
|----------------------------------------------------------------|------------------------------------------------------|
| チームの組織、プロセス、その他のチームレベルの合意             | GitLab ハンドブック（このページ）                     |
| スタンドアロンプロジェクトの技術リファレンスドキュメント       | プロジェクト自体に、ドキュメントハブにもリンク         |
| GitLab として維持しているプロジェクトをどのように活用するか？ | ドキュメントハブ                                      |
| GitLab 固有のアーキテクチャはどのような形か？                 | ドキュメントハブ                                      |
| チュートリアル、ガイド、FAQ、コンセプト説明                    | ドキュメントハブ                                      |

ドキュメントハブ以外のドキュメントはそこからリンクされるべきで（だからこそ *ハブ* と呼ぶのです）、逆も同様です。これにより発見性の向上を図ります。

これは、あらゆるプロジェクト（オープンソースかどうかに関わらず）で期待されるように、リファレンスドキュメントをそれぞれのプロジェクトとともに提供する必要性を認識しています。
ここでのメリットは、機能の変更がマージリクエスト内でリファレンスドキュメントも更新できることです。

一方で、スタック内でこれらのプロジェクトを特定の形で使用する方法は、プロジェクト自体に含めるには特定的すぎます。
多くの場合、全体像とプロジェクトがどのように連携するかを理解したいのです。
これは特定のプロジェクトと共に提供する技術ドキュメントのスコープ外であり、そのためこの情報はドキュメントハブに置きます。

内部利用のために、所有するサービスとその運用方法について理由付けするのに役立つドキュメントハブを使用します。
チームにはさまざまなロールと視点があるため、これがチーム全員の助けになり共通理解を深めるのに役立つと期待しています。

ドキュメントのさまざまな種類とその整理方法についての推薦読み物は [Divio ドキュメントシステム](https://docs.divio.com/documentation-system/) です。

#### ドキュメントの作成方法

ドキュメントを再構築・構築するにあたり、ドキュメントハブはあらゆる貢献から恩恵を受けます。

1. 既存コンセプトの説明
1. 既存ドキュメントのリンク結合
1. 既存ドキュメントの統合と適切な場所への移動
1. システムアーキテクチャと運用原則に関する文章とグラフィック

私たちは [ハンドブックファースト](/handbook/company/culture/all-remote/handbook-first/) のマインドセットと同様に、ドキュメントを一次市民として作成・維持することを目指します。
例えば、チームメンバーからの特定の質問に個別に（Slack などで）答える代わりに、これをドキュメントの一部を書く機会として、レビューしてもらい活用する形にすることができます。

### 指標

このグループはインフラストラクチャ部門の指標に集約されるいくつかのパフォーマンス指標の所有者です。

1. GitLab.com の本番サービスをカバーする [サービス成熟度モデル](/handbook/engineering/infrastructure-platforms/service-maturity-model/)
1. [キャパシティプランニング](https://gitlab-com.gitlab.io/gl-infra/observability/docs-hub/capacity-planning/introduction/)はキャパシティ警告を使用してインシデントを防止します。

これらは組み合わされることで、チームプロジェクトのより良い優先順位付けを可能にします。

これらの指標がどのように使用されるかの非常に単純化した例（特定の順序なし）：

* サービス成熟度 - 可観測性スタックから受け取ったデータがサービスに対してどれだけ信頼できるかの詳細を提供します。レベルが低いほど、サービスの可観測性改善に注力する必要があります。
* キャパシティプランニング - 特定のサービスの予測を提供します

これらの異なるシグナルによって、GitLab.com のスケーリングニーズの優先順位付けを助けるために、過去・現在・未来への比較的（不）正確な視点を持つことができます。

### プロビジョニングするサービス

[tech_stack.yml](https://gitlab.com/gitlab-com/www-gitlab-com/-/blob/master/data/tech_stack.yml) ファイルに従い、チームは以下にリストされたサービスへのアクセスのプロビジョニングに責任があります。

1. **Kibana** は Okta を通じてアクセスします。チームメンバーは以下のいずれかの Okta グループに属している必要があります: `gl-engineering`（エンジニアリング部門全体）; `okta-kibana-users`。後者のグループは、エンジニアリング外のチームメンバーのアクセスをアドホックベースで管理するために使用されます（[コンテキスト](https://gitlab.com/gitlab-com/business-technology/change-management/-/issues/958)）。チームメンバーはアクセスリクエストを通じて（デ）プロビジョニングされるべきです（[例](https://gitlab.com/gitlab-com/team-member-epics/access-requests/-/issues/28421)）。アクセスリクエストが承認された場合、プロビジョニング担当者はユーザーを [このグループ](https://groups.google.com/a/gitlab.com/g/okta-kibana-users) に追加してください。これにより Okta の同名グループへ自動的に同期されます。
1. **Elastic Cloud** は Elastic スタックへの管理者アクセス用です。ログイン画面は [こちら](https://cloud.elastic.co/) で、Google SSO を通じてアクセスします。チームメンバーはアクセスリクエストを通じて（デ）プロビジョニングされるべきです（[例](https://gitlab.com/gitlab-com/team-member-epics/access-requests/-/issues/28457)）。承認された場合、プロビジョニング担当者は [メンバーページ](https://cloud.elastic.co/account/members) で必要なインスタンスへの適切な権限を持つメンバーを追加・削除できます。
1. **Grafana** は Okta を通じてアクセスします。ログイン画面は [こちら](https://dashboards.gitlab.net) から利用できます。すべての GitLab チームメンバーが Grafana にアクセスできます。プロビジョニングとデプロビジョニングは Okta を通じて処理されます。

## 働き方

私たちは GitLab の [バリュー](/handbook/values/) に沿ってデフォルトで作業し、より広い [インフラストラクチャプラットフォームセクション](/handbook/engineering/infrastructure-platforms/project-management/) のプロセスと [AI 使用原則](/handbook/engineering/infrastructure-platforms/ai_usage_principles/) に従います。
これに加えて、以下は Observability の働き方として特有または特に重要なプロセスです。

### ロードマップ

私たちはロードマップをこの [epic](https://gitlab.com/groups/gitlab-com/gl-infra/-/epics/1295) で透明性を持って優先順位付けしており、すべての Epic/Issue が `roadmap::` ラベルを使用してどのようにグループ化されているかが確認できます。

### プロジェクト管理

私たちが取り組むほとんどのプロジェクトは、複数の Issue を含む [Epic](https://gitlab.com/groups/gitlab-com/gl-infra/-/epics/) で表現されます。シンプルなタスクは親 Epic なしに [Issues](https://gitlab.com/gitlab-com/gl-infra/observability/team/-/issues) で作業することができます。

### プロジェクトサイジング

プロジェクトにはチームから少なくとも3人のエンジニアがスタッフとして配置され、できればSREとBEの両方のロールから選ばれます。これにより知識を共有し、人が不在のときもプロジェクトを前進させることができます。

チームの人数と KTLO およびオンコールの追加要求を考慮すると、同時に進行できるプロジェクトは2つまでです。

#### ラベル

チームに関連するすべての Epic/Issue には `~"group::Observability"` ラベルがあります。

チームの現在の優先事項を表すために以下の `roadmap::` ラベルを使用します。

* `roadmap::now` 現在取り組んでいる項目
* `roadmap::next` 次に取り上げる候補の項目
* `roadmap::later` 直接的な計画に含まれていない項目
* `roadmap::perpetual` バージョンアップグレードなど、常に関連する項目

作業項目の機能領域を表すために `Category:` ラベルを使用します。例として `Category:Logging` と `Category:Capacity Planning` があります。

作業の種類とその利益をグループ化するために `theme::` ラベルを使用します。ラベルには以下が含まれます。

* `theme::Operational Excellence` 本番環境でシステムを稼働させる運用プロセス
* `theme::Performance Enablement` 負荷変化への対応能力
* `theme::Reliability` 障害からの回復とシステム機能の継続能力
* `theme::Security` アプリケーションとデータの脅威からの保護
* `theme::Cost Optimization` 提供する価値を最大化するためのコスト管理
* `theme::Shift Left` 他のステージグループがセルフサービスできるよう促進する項目
* `theme::Enablement & Assistance` 他のステージグループへの直接支援が必要な項目。Shift Left によってこの作業を最小化するよう努めます。

最初の5つの `theme` ラベルは Well-Architected Frameworks がカバーする主要な柱をカバーしています。このトピックについては [こちら](https://gitlab.com/groups/gitlab-com/gl-infra/-/epics/1350) で詳しく読むことができます。

また、特定の Epic や Issue が作業サイクルのどこにあるかを示すために `workflow-infra::` ラベルも使用します。

さらに、すべての Issue にはサービスラベル、またはチームタスク、ディスカッション、キャパシティプランニングラベルのいずれかが必要です。

#### ボード

* [担当者別 Issue](https://gitlab.com/groups/gitlab-com/gl-infra/-/boards/7339126)
* [ワークフロー別 Epic](https://gitlab.com/groups/gitlab-com/gl-infra/-/epic_boards/38727?not%5Blabel_name%5D%5B%5D=roadmap&label_name%5B%5D=group::Observability)
* [ロードマップ別 Epic](https://gitlab.com/groups/gitlab-com/gl-infra/-/epic_boards/2077560?not%5Blabel_name%5D%5B%5D=roadmap&label_name%5B%5D=group::Observability)
* [テーマ別 Epic](https://gitlab.com/groups/gitlab-com/gl-infra/-/epic_boards/2077564?not%5Blabel_name%5D%5B%5D=roadmap&label_name%5B%5D=group::Observability)
* [カテゴリー別 Epic](https://gitlab.com/groups/gitlab-com/gl-infra/-/epic_boards/1060230?not%5Blabel_name%5D%5B%5D=roadmap&label_name%5B%5D=group::Observability)

#### アサイン

Issue のアサインは、その Issue の DRI が誰かを示すために使用します。
Issue のアサイニーはステータスを定期的に更新し、何が完了し何がまだ必要かを可能な限り明確にすることが期待されます。
Issue のアサイニーはその Issue を完了まで推進することが期待されます。
アサイン状態は通常、アサインされたチームメンバーが現在積極的に取り組んでいるか、比較的近い将来に戻る計画があることを表します。
数日以内に積極的に取り組む予定がない Issue からは自分自身をアサイン解除します。

#### グループレビュー

プロダクションエンジニアリンググループレビューは毎週木曜日に行われます。`roadmap::now` ラベルのついた全作業項目が毎週水曜日にステータスアップデートを持つことを確認します。アップデートを共有するためにこの [epic](https://gitlab.com/groups/gitlab-com/gl-infra/-/epics/1638) を使用しており、この [スクリプト](https://gitlab.com/gitlab-com/gl-infra/group-review-automator/) によって生成されます。

進行中のすべての作業の可視性向上のため、各チームメンバーは [グループレビュー epic](https://gitlab.com/groups/gitlab-com/gl-infra/-/epics/1638#-current-focus-roadmapnow) の `roadmap::now` セクションに表示される少なくとも1つのプロジェクトにアサインされていることが期待されます（DRI または参加者として）。

#### レトロスペクティブ

6週間ごとにチームレベルのレトロスペクティブ Issue が作成され、チームが定期的に振り返り、継続的な改善文化を促進します。レトロスペクティブ Issue の作成はエンジニアリングマネージャーの責任です。レトロスペクティブは [こちら](https://gitlab.com/gitlab-com/gl-infra/scalability/-/issues/?sort=created_date&state=all&label_name%5B%5D=team%3A%3AScalability-Observability&label_name%5B%5D=Retrospective&first_page_size=100) で確認できます。

### Slack でのアップデート

週次アップデートには [GeekBot](https://app.geekbot.com/dashboard/w/184476) を使用しており、#g_observability チャンネルに投稿されます。

アップデートを投稿する際は、興味のあるチームメンバーが自分で詳細を確認できるよう十分なコンテキスト（例：リンク）を提供することを心がけてください（[低コンテキスト](/handbook/communication/#low-context)）。

### チームの幸福度

毎週木曜日に Slack チャンネルでリマインダーが送られ、[このフォーム](https://forms.gle/xsToh7RzGBas2rkp8) を使用してチームメンバーがその週の幸福度をスコアリングします。チームメンバーは [このスプレッドシート](https://docs.google.com/spreadsheets/d/1JMYG9HCRMj6ZBMrqsRy2TCs3LwIBL3Hz44WtlbDTpQk/) で結果を確認できます（「Graph」シートにビジュアライゼーションもあります）。

### コスト管理

可観測性サービスの日々の運用コストの詳細については [Observability スタックのコスト](/handbook/engineering/infrastructure-platforms/production-engineering/observability/cost) ドキュメントを参照してください。このリソースにはアクセス手順とコスト内訳が含まれています。

## 歴史と実績

このセクションにはチームの歴史と実績に関するメモが含まれていますが、網羅的ではありません。

* 2024年2月、キャパシティプランニング: [飽和予測で見られたpostgres CPU急増の積極的な調査](https://gitlab.com/gitlab-com/gl-infra/capacity-planning-trackers/gitlab-com/-/issues/1668#note_1807225359)により[データベース設計の問題](https://gitlab.com/gitlab-org/gitlab/-/issues/435250)が発覚
* 2024年3月、キャパシティプランニング: [Tamland が redis CPU 飽和を予測し、Practices が積極的に Redis をスケールすることにつながった](https://gitlab.com/gitlab-com/gl-infra/capacity-planning-trackers/gitlab-com/-/issues/1712)（[スライド](https://docs.google.com/presentation/d/1y58mgaUrpu1dBO_bKVLfDUez9lz-ETLE7E1yksDjAbY/edit#slide=id.g2cc1c00d163_5_4)）
* 2024年5月、メトリクス: [Thanos から Mimir へのマイグレーションが完了](https://gitlab.com/groups/gitlab-com/gl-infra/-/epics/1107)し、メトリクスの精度とダッシュボードパフォーマンスが[大幅に向上](https://gitlab.com/groups/gitlab-com/gl-infra/-/epics/1107#outcome)

### 年間レビュー Issue

* [2024](https://gitlab.com/gitlab-com/gl-infra/observability/team/-/issues/4024)
