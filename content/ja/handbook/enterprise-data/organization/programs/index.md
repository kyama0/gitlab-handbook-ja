---
title: "データチームプログラム"
upstream_path: /handbook/enterprise-data/organization/programs/
upstream_sha: 0e6f01390a34aeb6706ace17d8d3c50e74e82d0d
translated_at: "2026-04-29T08:00:00Z"
translator: claude
stale: false
---

<link rel="stylesheet" type="text/css" href="/stylesheets/biztech.css" />

## <i id="biz-tech-icons" class="far fa-paper-plane"></i>はじめに

**データプログラム**のページへようこそ。ここでは、GitLab 全体のさまざまなデータプログラムと、データチームがサポートするプログラムに関する情報を掲載しています。オンボーディングから日常業務まで幅広く対応しています。

- **[データ Slack チャンネル](/handbook/enterprise-data/#data-slack-channels)**
- **主要なデータ Slack チャンネル**: `#data`
- **データラウンジチャンネル**: `#data-lounge`

## <i class="far fa-newspaper" id="biz-tech-icons"></i> Show-n-Tell とデモ

過去のデモの録画は [GitLab Unfiltered データチームプレイリスト](https://www.youtube.com/playlist?list=PL05JrBw4t0KrRVTZY33WEHv8SjlA_-keI)に掲載されています。

## <i class="far fa-newspaper" id="biz-tech-icons"></i> データオンボーディング

GitLab にオンボーディングし、エンジニア、アナリスト、またはデベロッパーとしてデータプログラムで作業する場合は、以下の手順に従ってください。

1. [GitLab Data Analytics](https://gitlab.com/gitlab-data/analytics/-/issues) で `Data Onboarding` テンプレートを使用して新しい Issue を開きます。
1. Issue にわかりやすい名前を付けます: `あなたの名前 - Data Onboarding`
1. 関連コンテンツを追加・削除するためにマネージャーに Issue を割り当てます

## <i class="far fa-newspaper" id="biz-tech-icons"></i> データ PoV（Proof of Value）ガイド

データチームは、[データプラットフォーム](/handbook/enterprise-data/platform)または幅広い[テクノロジースタック](/handbook/business-technology/tech-stack-applications/)への追加を検討しているすべての新技術に対して、Proof of Value 評価（PoV）を実施します。このガイドは、PoV を効率的かつ優れた結果で実施するための参考としてご活用ください。

### フェーズ 1: 価値の算出と要件の定義

1. テクノロジーが GitLab に提供できる価値を確立します。価値は、効率性から売上増加、コンピュートの削減まで、さまざまな方法で測定できます。
1. テクノロジーが成功するために満たさなければならないビジネス要件と技術要件を定義する要件ドキュメントを作成します。各要件が `Must Have`（必須）か `Nice to Have`（あれば望ましい）かを明示します。[データビジュアライゼーション PoV](https://docs.google.com/spreadsheets/d/19YGQHXb35juGRvJn-p2Xe4nNfctOJ7Ga38B0HcP2no8/edit#gid=361948716) と[プロダクトアナリティクス PoV](https://docs.google.com/spreadsheets/d/1_IQbyRbde-U29v8amTv50nLe23BcUr83v0JYQpuRfP8/edit#gid=1640029289) で使用したテンプレートがあります。

### フェーズ 2: スコーピングとポリシーの把握

1. [調達の新ソフトウェアガイド](https://internal.gitlab.com/handbook/finance/procurement/)を確認し、従うべき最新の調達プロセスを理解します。
1. 評価に含まれる各ベンダーと[NDA](/handbook/legal/nda/)を締結します。
1. 確立された予算を検証するために事前の価格情報を取得します。既存の予算が確立されていない場合は、部門リードと協力してプロジェクトが実現可能かどうかを判断します。資金調達できないプロジェクトに時間とエネルギーを無駄にしないようにしましょう。

### フェーズ 3: 評価設計

評価設計は PoV の中で最も複雑な部分です。

1. 定義された要件に対してテクノロジーをどのようにテストするかを決定します。データテクノロジーのテストを成功させるには、多くの場合、本番ワークロードをシミュレートする必要があり、「本番レベルの SAFE ワークロード」を構築することがデータ PoV プロジェクトにおける重要な課題です。
     - [レッドデータ](/handbook/security/policies_and_standards/data-classification-standard/#red)も[オレンジデータ](/handbook/security/policies_and_standards/data-classification-standard/#orange)も、PoV への含めには一切適していません。

### フェーズ 4: 調達

1. 要件設計をガイドとして使用しながら、ベンダーと協力して作業明細書（SoW）を作成します。
     - 作業明細書には成功基準、期待値、プロジェクトタイムラインを含めるべきです
     - 私たちは PoV の費用は支払わず、すべて $0 コストとします
1. SoW とともに、ベンダーにマスターサービス契約書（MSA）を送付するよう依頼します。
1. $0 の金額によるリクエストは Coupa でサポートされていないため、SoW と MSA を GitLab の調達[プロジェクト](https://gitlab.com/gitlab-com/Finance-Division/procurement-team/procurement/-/issues)経由で調達チームに提出する必要があります。
   - PoV 金額が $0 でない場合は、この[新規ソフトウェア購入リクエストを提出する方法は？](https://internal.gitlab.com/handbook/finance/procurement/)ガイドに従って Coupa 経由で SoW と MSA を調達チームに提出します。
      - セキュリティ承認を取得するプロセスは Coupa でサポートされています。

### フェーズ 5: 評価

1. ベンダーと PoV を調整するための共有 Slack チャンネルを作成します。
1. 参照チェックのスケジュールを設定するためにベンダーに参照先を求めます。参照チェックでは以下のことができます：
    - テクノロジーとの経験について聞く。
    - 得られた教訓について聞く。
    - 成功するためのセットアップ方法について聞く。

### フェーズ 6: まとめ

`未定義`

## <i class="far fa-newspaper" id="biz-tech-icons"></i> データガイドと関連リソース

| プログラム名 | 目的 |
| :--- | :--- |
| [データカタログ](/handbook/enterprise-data/data-governance/data-catalog/) | ダッシュボード、データセット、分析プロジェクトのカタログ |
| [プロダクトマネージャー向けデータ](/handbook/enterprise-data/organization/programs/data-for-product-managers/) | プロダクトマネージャーを支援するための情報 |
| [プロダクト分析向けデータ](/handbook/product/groups/product-analysis/) | プロダクトアナリストを支援するための情報 |
| [Analytics Instrumentation グループ](/handbook/engineering/data-engineering/analytics/analytics-instrumentation/) | Analytics Instrumentation チームに関する情報 |
| [マーケティングアナリスト向けデータ](/handbook/enterprise-data/marketing-analytics/) | マーケティングアナリストを支援するための情報 |
| [セールスアナリスト向けデータ](/handbook/sales/field-operations/sales-strategy/) | セールスアナリストを支援するための情報 |
| [データトリアージ](/handbook/enterprise-data/how-we-work/triage/) | 分析用のデータプラットフォームの可用性を確保するための日次プロセス |
