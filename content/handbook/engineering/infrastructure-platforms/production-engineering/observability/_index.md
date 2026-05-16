---
title: "Observability チーム"
description: "Observability は、メトリクス、ロギング、トレーシングを担う技術要素と、それらを活用するツールおよびプロセス全体を包含します。"
upstream_path: "/handbook/engineering/infrastructure-platforms/production-engineering/observability/"
upstream_sha: "1e195b58b9f249ff10bd0e705106c320fee86141"
translated_at: "2026-05-14T00:00:00Z"
translator: claude
stale: false
lastmod: "2026-05-01T07:28:41-06:00"
---

Observability は、メトリクス、ロギング、トレーシングを担う技術要素と、それらを活用するツールおよびプロセス全体を包含します。

## ミッション

私たちのミッションは、世界クラスの Observability の提供と、GitLab のチームメンバーにとって摩擦のない運用体験を提供し維持することです。

## 共通リンク

|                                |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
|--------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **ワークフロー**                   | [チームワークフロー](/handbook/engineering/infrastructure-platforms/production-engineering/)                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| **GitLab.com**                 | `@gitlab-org/production-engineering/observability`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| **Issue トラッカー**             | [Observability Tracker](https://gitlab.com/gitlab-com/gl-infra/observability/team/-/issues) <br/> [Tamland](https://gitlab.com/gitlab-com/gl-infra/tamland/-/issues)                                                                                                                                                                                                                                                                                                                                                                                 |
| **チーム Slack チャンネル**        | [#g_observability](https://gitlab.slack.com/archives/g_observability) - チームチャンネル<br/> [#infrastructure_platforms_social](https://gitlab.enterprise.slack.com/archives/C062T669RFD) - ソーシャルチャンネル                                                                                                                                                                                                                                                                                                                                              |
| **情報共有 Slack チャンネル** | [#infrastructure_platforms](https://gitlab.slack.com/archives/infrastructure_platforms) (Infrastructure グループチャンネル), <br/>[#incidents](https://gitlab.slack.com/archives/incidents) (インシデント管理),  <br/>[#g_infra_observability_alerts](https://gitlab.slack.com/archives/g_infra_observability_alerts) (Observability の Slack アラート), <br/>[#alerts-general](https://gitlab.slack.com/archives/alerts-general) (SLO アラート), <br/>[#mech_symp_alerts](https://gitlab.slack.com/archives/mech_symp_alerts) (Mechanical Sympathy アラート) |
| **ドキュメント**              | [ドキュメントハブ](https://gitlab-com.gitlab.io/gl-infra/observability/docs-hub/)                                                                                                                                                                                                                                                                                                                                                                                                                                 |

## チームメンバー

以下のメンバーが Observability チームに所属しています。

{{< team-by-manager-slug "liam-m" >}}

チームは世界中の[さまざまなタイムゾーン](https://timezonewizard.com/ca-m2n)に分散しています。

## 技術的な原則、目標、責務

私たちの原則と目標の詳細については、[テクニカルブループリント](/handbook/engineering/infrastructure-platforms/production-engineering/observability/technical_blueprint)を参照してください。

以下は、私たちのスコープとオーナーシップの概要です。

1. [モニタリングの基礎](https://gitlab.com/gitlab-com/runbooks/blob/e00eeb59937a9043c5db04314a35acb05c4e9288/docs/monitoring/README.md#L1)
   1. メトリクススタック
   1. ロギングスタック
1. [エラーバジェット](/handbook/engineering/infrastructure-platforms/production-engineering/observability/error_budgets/)
   1. コンセプトと実装のオーナーシップ
   1. 月次エラーバジェットレポートの提供
1. [キャパシティプランニング](/handbook/engineering/infrastructure-platforms/production-engineering/observability/capacity_planning/)
   1. [.com 向けトリアージローテーション](/handbook/engineering/infrastructure-platforms/capacity-planning/#gitlabcom-capacity-planning)
   1. [GitLab Dedicated キャパシティプランニングの運用面](https://docs.gitlab.com/ee/architecture/blueprints/capacity_planning/)
   1. 予測ツールである [Tamland](https://gitlab.com/gitlab-com/gl-infra/tamland) の開発
   1. [GitLab Dedicated のキャパシティレポート](https://gitlab.com/gitlab-com/gl-infra/capacity-planning-trackers/gitlab-dedicated)
1. GitLab.com のプロダクションサービスを対象とする[サービス成熟度モデル](/handbook/engineering/infrastructure-platforms/service-maturity-model/)。
1. [GitLab.com の可用性レポート](/handbook/engineering/monitoring/): 基盤となるデータと集計値の提供

### ドキュメント

私たちは、Observability サービスやプラットフォームを利用するチームと、自分たちのチーム内利用の両方に向けた技術ドキュメントを提供する必要性を認識しています。

これまでは、所有または貢献するプロジェクト、または [runbooks プロジェクト](https://gitlab.com/gitlab-com/runbooks/-/tree/master/docs)内でリファレンスドキュメントを提供してきました。
これらのプロジェクトが散在しているため、ユーザーにとって関連ドキュメントを発見するのはなかなか難しい状況です。

ドキュメントを再構築するにあたり、私たちは以下のアイデアと原則に従います。

1. [Infrastructure Observability ドキュメントハブ](https://gitlab-com.gitlab.io/gl-infra/observability/docs-hub/)は、私たちが提供する Observability 関連ドキュメントへのエントリポイントです。
1. 入念に作成されたドキュメントは、後付けではなく Observability プラットフォームのコアプロダクトです。
1. ドキュメントハブは、プラットフォームとして提供する Observability インターフェースについて Engineering 全体とコミュニケーションする手段だと考えています。
1. リファレンスドキュメントに加えて、特定の利用者層を対象としたガイドやチュートリアルなどのドキュメントを提供することを目指します。
1. ドキュメントハブはチーム内利用に向けてコンセプトやアーキテクチャを説明する場としても使い、共通理解を作り、全員がすべての領域に貢献できるようにします。

#### さまざまな種類のドキュメントをどこに置くか?

ドキュメントには様々な種類があり、それぞれ適切な置き場所があります。

| 何を?                                                        | どこに?                      |
|--------------------------------------------------------------|-----------------------------|
| チーム組織、プロセス、その他チームレベルの取り決め | GitLab ハンドブック（このページ） |
| スタンドアロンプロジェクトの技術リファレンスドキュメント    | プロジェクト本体に配置し、ドキュメントハブにリンク      |
| GitLab において、私たちが保守するプロジェクトをどのように活用しているか?    | ドキュメントハブ           |
| 私たちの GitLab 固有のアーキテクチャはどのようになっているか?         | ドキュメントハブ           |
| チュートリアル、ガイド、FAQ、概念的な説明          | ドキュメントハブ           |

ドキュメントハブの外にあるドキュメントは、ハブからリンクされる必要があります（だからこそ*ハブ*と呼んでいます）、逆もまたしかりで、発見可能性を高めることに役立ちます。

これは、（オープンソースかどうかにかかわらず）あらゆるプロジェクトに期待されるように、リファレンスドキュメントをそのプロジェクトと一緒に出荷する必要性を認識したものです。
ここでの利点は、機能の変更が同じマージリクエスト内でリファレンスドキュメントも更新できることです。

一方、これらのプロジェクトをスタック内でどのように利用するかについては、プロジェクト自体と一緒に出荷するには固有性が高すぎます。
多くの場合、私たちは大きな枠組みと、プロジェクト同士がどのように連携するかを理解したいと考えます。
これは特定のプロジェクトと一緒に出荷される技術ドキュメントのスコープ外なので、その情報はドキュメントハブに置きます。

チーム内利用の観点でも、所有するサービスとその運用方法について検討するためにドキュメントハブを使います。
これはチームの全員に役立ち、チーム内の様々な役割や視点を持つメンバーが共通理解を育むのに役立つと期待しています。

ドキュメントの種類とその整理方法に関するおすすめの読み物として、[Divio Documentation System](https://docs.divio.com/documentation-system/) があります。

#### どのようにドキュメントを作成するか?

ドキュメントを再構築・構築するにあたり、ドキュメントハブはあらゆる貢献から恩恵を受けます。

1. 既存のコンセプトを説明する
1. 既存ドキュメントを互いにリンクする
1. 既存ドキュメントを集約し、適切な場所に移動する
1. システムアーキテクチャや運用原則に関する文章・図の執筆

私たちは [Handbook First](/handbook/company/culture/all-remote/handbook-first/) の考え方と同じように、ドキュメントを主要な存在として作成・維持することを目指しています。
たとえば、チームメンバーからの個別の質問（Slack 上の質問など）に個別に答える代わりに、これをドキュメントを書く機会として捉え、書いたものをレビューしてもらい、それを使って作業してもらうことができます。

### 指標

このグループは、Infrastructure 部門の指標に積み上がるいくつかのパフォーマンス指標のオーナーです。

1. GitLab.com のプロダクションサービスを対象とする[サービス成熟度モデル](/handbook/engineering/infrastructure-platforms/service-maturity-model/)。
1. [キャパシティプランニング](https://gitlab-com.gitlab.io/gl-infra/observability/docs-hub/capacity-planning/introduction/)は、キャパシティ警告を用いてインシデントを未然に防ぎます。

これらを組み合わせることで、チームのプロジェクトをより適切に優先順位付けできるようになります。

これらの指標がどのように使われ得るかの過度に単純化した例（特定の順序ではない）:

* サービス成熟度 - サービスとの関連で Observability スタックから受け取るデータがどれだけ信頼できるかの詳細を提供する。レベルが低いほど、そのサービスの Observability 改善に注力する必要がある
* キャパシティプランニング - 特定のサービスの予測を提供する

これら異なるシグナルを合わせて、私たちは過去・現在・未来の比較的（不）正確な視野を持ち、GitLab.com のスケーリングニーズの優先順位付けに役立てています。

### プロビジョニングされたサービス

チームは、[tech_stack.yml](https://gitlab.com/gitlab-com/www-gitlab-com/-/blob/master/data/tech_stack.yml) ファイルに従って、以下のサービスへのアクセスのプロビジョニングを担当します。

1. **Kibana** は Okta 経由でアクセスします。チームメンバーは以下のいずれかの Okta グループに所属する必要があります: `gl-engineering`（Engineering 部門全体）、`okta-kibana-users`。後者は Engineering 外のチームメンバーへのアクセスをアドホックに管理するために使われます ([背景](https://gitlab.com/gitlab-com/business-technology/change-management/-/issues/958))。チームメンバーは Access Request ([例](https://gitlab.com/gitlab-com/team-member-epics/access-requests/-/issues/28421)) を通じてプロビジョニング／デプロビジョニングされる必要があります。アクセスリクエストが承認されたら、プロビジョナーがユーザーを[このグループ](https://groups.google.com/a/gitlab.com/g/okta-kibana-users)に追加すると、Okta 内の同名グループに自動同期されます。
1. **Elastic Cloud** は、Elastic スタックへの管理アクセスのためのものです。ログイン画面は[こちら](https://cloud.elastic.co/)で、Google SSO 経由でアクセスします。チームメンバーは Access Request ([例](https://gitlab.com/gitlab-com/team-member-epics/access-requests/-/issues/28457)) を通じてプロビジョニング／デプロビジョニングされる必要があります。承認されたら、プロビジョナーは[メンバーシップページ](https://cloud.elastic.co/account/members)でアクセスが必要なインスタンスに対する適切な権限とともにメンバーを追加/削除できます。
1. **Grafana** は Okta 経由でアクセスします。ログイン画面は[こちら](https://dashboards.gitlab.net)です。GitLab のチームメンバーであれば誰でも Grafana にアクセスできます。プロビジョニング／デプロビジョニングは Okta を通じて処理されます。

## 私たちの働き方

私たちは GitLab の[バリュー](/handbook/values/)に沿って働くことをデフォルトとし、より広い [Infrastructure Platforms セクション](/handbook/engineering/infrastructure-platforms/project-management/)のプロセスと、[AI 利用原則](/handbook/engineering/infrastructure-platforms/ai_usage_principles/)に従います。
これに加えて、Observability での働き方に特に固有または重要なプロセスを以下に挙げます。

### ロードマップ

私たちは透明性をもって、この[エピック](https://gitlab.com/groups/gitlab-com/gl-infra/-/epics/1295)でロードマップに優先順位を付けています。`roadmap::` ラベルですべてのエピック／Issue がどのようにグループ化されているかを確認できます。

### プロジェクト管理

私たちが取り組むほとんどのプロジェクトは、複数の Issue を含む[エピック](https://gitlab.com/groups/gitlab-com/gl-infra/-/epics/)で表現されます。シンプルなタスクは、親エピックなしの [Issue](https://gitlab.com/gitlab-com/gl-infra/observability/team/-/issues) で進められます。

### プロジェクトのサイジング

プロジェクトには、できれば SRE と BE の両方の役割から、チームの少なくとも 3 名のエンジニアがアサインされます。これにより、知識を共有し、人が不在のときでもプロジェクトを前進させられるようになります。

チームの人数と KTLO・オンコールの追加負荷を考えると、同時に進行できるプロジェクトは 2 件までです。

#### ラベル

私たちのチームに関連するすべてのエピック／Issue には `~"group::Observability"` ラベルが付いています。

チームの現在の優先順位を表すために、以下の `roadmap::` ラベルを使用します:

* `roadmap::now` 現在取り組んでいる項目
* `roadmap::next` 次に取り組む候補の項目
* `roadmap::later` 直接的に取り組む計画はない項目
* `roadmap::perpetual` バージョンアップグレードなど、常に関連する項目

`Category:` ラベルは、作業項目の機能領域を表すために使います。例として `Category:Logging` や `Category:Capacity Planning` があります。

`theme::` ラベルは作業の種類とその利点をグループ化するために使います。ラベルには以下があります:

* `theme::Operational Excellence` プロダクションでシステムを稼働させ続けるための運用プロセス
* `theme::Performance Enablement` システムが負荷変動に適応する能力
* `theme::Reliability` システムが障害から回復し機能を継続する能力
* `theme::Security` アプリケーションとデータを脅威から保護する
* `theme::Cost Optimization` 価値を最大化するためのコスト管理
* `theme::Shift Left` 他のステージグループのセルフサービスを促す項目
* `theme::Enablement & Assistance` 他ステージグループを直接支援する必要がある項目。Shift Left によりこの作業を最小化することを目指します。

最初の 5 つの `theme` ラベルは Well-Architected Frameworks がカバーする主要な柱に対応しています。詳しくは[こちら](https://gitlab.com/groups/gitlab-com/gl-infra/-/epics/1350)を参照してください。

特定のエピックや Issue が作業サイクル内のどこにあるかを示すために、`workflow-infra::` ラベルも使用します。

また、すべての Issue にはサービスラベルか、もしくは team-tasks、discussion、capacity planning のいずれかのラベルが必要です。

#### ボード

* [担当者別 Issue](https://gitlab.com/groups/gitlab-com/gl-infra/-/boards/7339126)
* [ワークフロー別エピック](https://gitlab.com/groups/gitlab-com/gl-infra/-/epic_boards/38727?not%5Blabel_name%5D%5B%5D=roadmap&label_name%5B%5D=group::Observability)
* [ロードマップ別エピック](https://gitlab.com/groups/gitlab-com/gl-infra/-/epic_boards/2077560?not%5Blabel_name%5D%5B%5D=roadmap&label_name%5B%5D=group::Observability)
* [テーマ別エピック](https://gitlab.com/groups/gitlab-com/gl-infra/-/epic_boards/2077564?not%5Blabel_name%5D%5B%5D=roadmap&label_name%5B%5D=group::Observability)
* [カテゴリ別エピック](https://gitlab.com/groups/gitlab-com/gl-infra/-/epic_boards/1060230?not%5Blabel_name%5D%5B%5D=roadmap&label_name%5B%5D=group::Observability)

#### 担当者

Issue の担当者割り当てによって、その Issue の DRI が誰かを示します。
Issue の担当者は、ステータスを定期的に Issue 上で更新し、何が完了し何が残っているかを可能な限り明確に示すことが期待されます。
担当者はその Issue を完了まで推進することが期待されます。
担当者ステータスは通常、そのチームメンバーが現在積極的に取り組んでいるか、比較的すぐに戻ってきて取り組む計画があることを意味します。
積極的に取り組んでいない、あるいは数日以内に再開する予定がない Issue については、担当を外します。

#### グループレビュー

Production Engineering グループレビューは毎週木曜日に開催されます。`roadmap::now` ラベルの付いた作業項目には、毎週水曜日にステータス更新があることを保証します。更新を共有するためにこの[エピック](https://gitlab.com/groups/gitlab-com/gl-infra/-/epics/1638)を使用します。このエピックはこの[スクリプト](https://gitlab.com/gitlab-com/gl-infra/group-review-automator/)で生成されます。

進行中のすべての作業の可視性を高めるため、各チームメンバーは [Group Review エピック](https://gitlab.com/groups/gitlab-com/gl-infra/-/epics/1638#-current-focus-roadmapnow)の `roadmap::now` セクションに表示される少なくとも 1 つのプロジェクトに、DRI または参加者としてアサインされることが期待されます。

#### レトロスペクティブ

チームレベルのレトロスペクティブ Issue は 6 週間ごとに作成され、チームが定期的に振り返りを行い、継続的改善の文化を促進できるようにします。レトロスペクティブ Issue の作成は、Engineering Manager の責任です。レトロスペクティブは[こちら](https://gitlab.com/gitlab-com/gl-infra/scalability/-/issues/?sort=created_date&state=all&label_name%5B%5D=team%3A%3AScalability-Observability&label_name%5B%5D=Retrospective&first_page_size=100)で確認できます。

### Slack での更新

週次更新には [GeekBot](https://app.geekbot.com/dashboard/w/184476) を使用しており、#g_observability チャンネルに投稿されます。

更新を投稿する際は、関心のあるチームメンバーが自身で深く調べられるように、十分なコンテキスト（リンクなど）を提供することを心がけてください ([low context](/handbook/communication/#low-context))。

### チームのハッピネス

毎週木曜日、Slack チャンネルでチームメンバーに対し、[このフォーム](https://forms.gle/xsToh7RzGBas2rkp8)を使ってその週のハッピネスをスコア付けするようリマインドが送られます。チームメンバーは結果を[このスプレッドシート](https://docs.google.com/spreadsheets/d/1JMYG9HCRMj6ZBMrqsRy2TCs3LwIBL3Hz44WtlbDTpQk/)で確認できます（'Graph' シートにビジュアライゼーションもあります）。

### コスト管理

私たちの Observability サービスの日々の運用コストの詳細については、[Observability スタックのコスト](/handbook/engineering/infrastructure-platforms/production-engineering/observability/cost)ドキュメントを参照してください。アクセス手順とコスト内訳が含まれています。

## 歴史と成果

このセクションには、チームの歴史と成果に関するメモが含まれます。網羅的なものではありません。

* 2024-02、キャパシティプランニング: [飽和度予測で見られた postgres CPU スパイクの先回り調査](https://gitlab.com/gitlab-com/gl-infra/capacity-planning-trackers/gitlab-com/-/issues/1668#note_1807225359)で[データベース設計の問題](https://gitlab.com/gitlab-org/gitlab/-/issues/435250)を発見
* 2024-03、キャパシティプランニング: [Tamland が redis CPU の飽和を予測し、Practices による Redis の先回りスケーリングにつながった](https://gitlab.com/gitlab-com/gl-infra/capacity-planning-trackers/gitlab-com/-/issues/1712) ([スライド](https://docs.google.com/presentation/d/1y58mgaUrpu1dBO_bKVLfDUez9lz-ETLE7E1yksDjAbY/edit#slide=id.g2cc1c00d163_5_4))
* 2024-05、メトリクス: [Thanos から Mimir への移行が完了](https://gitlab.com/groups/gitlab-com/gl-infra/-/epics/1107)し、メトリクスの精度とダッシュボードのパフォーマンスに[大きな改善](https://gitlab.com/groups/gitlab-com/gl-infra/-/epics/1107#outcome)をもたらしました。

### Year-in-Review の Issue

* [2024](https://gitlab.com/gitlab-com/gl-infra/observability/team/-/issues/4024)
