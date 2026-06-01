---
title: プロダクトマネージャー向けティアリング戦略とガイダンス
upstream_path: /handbook/product/product-processes/tiering-guidance-for-features/
upstream_sha: 839c14e40e08e6fd4099a01ee623aaf85faafd12
translated_at: "2026-06-01T21:12:29Z"
translator: claude
stale: false
lastmod: "2026-06-01T12:55:15+02:00"
---

このページについて

## ティアリング戦略

Free は個人開発者をターゲットにしています。これは完全な DevOps ソリューションで、GitLab の 10 ステージすべての機能を含みます。

Premium はディレクターレベルのバイヤーをターゲットにしており、チーム向けです。Premium の価格設定テーマは、より速いコードレビュー、高度な CI/CD、エンタープライズアジャイル計画、リリースコントロール、セルフマネージドの信頼性です。Premium はチームがより速くイテレーションし、一緒にイノベーションを起こすのに役立ちます。

Ultimate はエグゼクティブレベルのバイヤーをターゲットにしており、組織向けです。Ultimate の価格設定テーマは、高度なセキュリティテスト、セキュリティリスクの軽減、コンプライアンス、ポートフォリオ管理、[Value stream management](https://about.gitlab.com/solutions/value-stream-management/) です。Ultimate は、エンタープライズ対応の計画、セキュリティ、コンプライアンスにより、組織がより良いソフトウェアをより速く提供するのに役立ちます。

## 価格設定ティアの決定方法

プロダクトマネージャーは、機能の最適なティアを決定し、維持するのを支援する責任があります。これを達成するため、プロダクトマネージャーは、GitLab の価格設定モデルの戦略、哲学、さまざまなコンポーネントを理解し、実装するために以下のサポートリソースを活用すべきです。

### 価格設定ティア

CEO は価格設定とティアの DRI です。これには、[アクティブユーザーの扱い方の変更](https://gitlab.com/gitlab-org/gitlab/issues/22257) など、ライセンシングモデルでどう顧客に課金するかに直接影響を与えるあらゆる変更が含まれます。GitLab はバイヤーベースのオープンコア価格設定モデルを活用しています。特定の機能がどのティアに属するべきかを判断する前に、[Stewardship](/handbook/company/stewardship/) ページをレビューしてください。

#### 新機能のティアを決定する

likely buyer (想定される買い手) がどのティアかを決定し、「誰がその機能を最も気にしているか」が最終的に likely buyer を決定します。当社の [Stewardship 原則](/handbook/company/stewardship/) も、何かが有料ティアに属するかどうかを判断するのに役立ちます。Issue の説明に決定の根拠をドキュメント化することを忘れずに、適切な場合は当社の [Stewardship ページ](/handbook/company/stewardship/) への参照を含めてください。

Issue に該当するティアを示すには、ティアに関連付けられたラベル（例: `GitLab Ultimate`）を適用してください。機能開発が始まる前にこれが定義されていることを確認してください。

#### オープンソースを活用して初期利用を促進する

成熟度の初期段階では、広範な認知と採用を促進するためにオープンソース版から機能を始めることを推奨します。早期採用はオープンソース貢献につながり、製品の新しい領域での成熟を加速するのに役立ちます。

#### 3 つのティアすべてを活用するラダー型ティアリング戦略を持つ

各製品領域は、各ティアに増分価値が含まれるラダー型ティアリング戦略を持つべきです。これにより、Free での広範な使用を促進し、その後、顧客が特定の製品領域の使用において洗練度が増すにつれて、Premium と Ultimate へのアップティアを促進できます。オープンソースで何を提供するかを検討する際は、後でマネタイズできる追加機能についても考えてください。オープンソースは主要機能の人気を促進しますが、その使用と露出をより高いティアで後により多くの ARR を促進するためにどう活用するつもりかを事前に理解することが重要です。

#### 機能をティア間で移動する、またはその他の価格設定変更

機能のティアを変更する、または顧客への課金方法に影響するその他の変更を提案するには、[Feature Tier or Pricing Change issue template](https://gitlab.com/gitlab-com/Product/issues/new?issuable_template=Feature-Tier-Or-Pricing-Change) に従ってください。これにより、GitLab の主要なステークホルダーとのコラボレーションと整合、および SSOT としての `features.yml` の維持が保証されます。
[オープンソース機能をソース利用可能 (source-available) にしないという私たちの約束](/handbook/company/stewardship/#existing-contributed-open-source-features-will-not-become-source-available) を忘れないでください。

#### 有料ティアの要件

すべての Premium および Ultimate 機能は次の条件を満たす必要があります:

- GitLab をセルフホストする顧客に対して容易に動作すること。すなわち、ライセンスの更新を必要とせず、新機能がインスタンスでデフォルトオンであること。
- GitLab.com Premium / Ultimate サブスクリプションで動作すること。これは、ネームスペースレベルで機能をトグルまたは使用する何らかの方法が必要であることを意味します。
- ドキュメントを持つこと。
- ローンチ時に [products](https://about.gitlab.com/stages-devops-lifecycle/) と [DevOps tools](https://about.gitlab.com/why-gitlab/) で取り上げられること。

プロダクトマネージャーがティアの決定で質問がある場合は、明確化のためにマネージャー、[プロダクトリーダーシップ](/handbook/product/product-leaders/product-leadership/)、または CEO と協力すべきです。価格設定 DRI の最新のリファレンスは [feature tier or pricing change template](https://gitlab.com/gitlab-com/Product/-/blob/main/.gitlab/issue_templates/Feature-Tier-Or-Pricing-Change.md) にあります。

### アップグレードの理由

顧客の購入決定には複数の考慮事項が関わります。プロダクトマネージャーが分析のためのさまざまなデータポイントを参照するために訪問できるさまざまなリソースを以下に示します:

- 購入後アンケート（リンクは利用不可になりました）

## 収益への影響をどう考慮するか

### 収益を促進する

プロダクトマネージャーは、GitLab の価格設定モデルに従って、自分のステージと GitLab の他のステージ全体の戦略と戦術に精通し、活用すべきです。役立つ例をいくつか示します:

- [Create ステージの人気を活用した収益促進](https://about.gitlab.com/direction/create/#pricing)
- [Plan ステージの利用とエンタープライズ採用のバランス](https://about.gitlab.com/direction/plan/#pricing)
- [Enablement セクションの使いやすさと規模のバランス](https://about.gitlab.com/direction/core_platform/#pricing)

### 投資の理解

GitLab は現在、[投資タイプ](https://internal.gitlab.com/handbook/product/investment/) で詳述されているように、製品全体で投資を割り当てる 3 つの方法を持っています。

### 学習機会

バイヤーベースモデル内での価格設定の調整は困難であり、時には直感に反することがあります。以下は、私たちが学ぶことができる成功した戦略／戦術と失敗した戦略／戦術の例です:

👍

- [Feature Flag を Core に移動](https://gitlab.com/gitlab-org/gitlab/-/issues/212318)
- 当社の SAST 機能はオープンソースツールにすぎず、どの顧客も無料で自分で実行できるという市場からのプレッシャーで、SAST アナライザを core に移動しました。私たちはこの批判をコミュニティ機能に変えることができ、それはコミュニティ貢献を増やし、[すべての顧客が当社のセキュリティツールを試す](https://docs.gitlab.com/user/application_security/sast/#making-sast-analyzers-available-to-all-gitlab-tiers) ためのエントリポイントを提供し、Ultimate への製品内アップグレードパスをいくつか作成しました。[エピック](https://gitlab.com/groups/gitlab-org/-/epics/2098)、[社内議論](https://gitlab.com/gitlab-com/Product/-/issues/315)、[リリース投稿](https://about.gitlab.com/releases/2020/08/22/gitlab-13-3-released/#sast-security-analyzers-available-for-all)
- [Kubernetes Agent の core への移動](https://gitlab.com/gitlab-com/Product/-/issues/2067) は、競合の圧力とフィードバックへの欲求がバイヤーベースのティアリングにどう挑戦できるかについての素晴らしい議論を生み出しました

👎

- [MR Diff コード品質アノテーション](https://gitlab.com/gitlab-org/gitlab/-/issues/2526) を Ultimate に価格設定することは、その機能が開発者によって使用されることから、当初は抵抗がありました。この機能は、チームがコード品質を左にシフトし、完全なコードレビュープロセスにもたらそうとする Transformation タイプのセールスに適合します。
- [Accessibility MR ウィジェット](https://docs.gitlab.com/ci/testing/accessibility_testing/) を Core に入れることは、新カテゴリで使用を得て、顧客がどんな追加機能を望むかを学ぶことが目的でした。
