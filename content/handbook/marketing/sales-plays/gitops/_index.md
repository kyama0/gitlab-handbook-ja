---
title: "セールスプレイ: GitOps によるインフラストラクチャ自動化"
upstream_path: /handbook/marketing/sales-plays/gitops/
upstream_sha: 1e195b58b9f249ff10bd0e705106c320fee86141
translated_at: "2026-05-14T00:00:00Z"
translator: claude
stale: false
---

## 概要

### なぜ GitOps を気にする必要があるのか

- [GitOps マーケティングキャンペーン](https://gitlab.com/gitlab-com/marketing/demand-generation/campaigns/-/issues/1183)は、2020 年 4 月のローンチ以来、すべてのセグメントで最も多くの線形 SAO を生み出しています
- [Kubecon EU の調査回答者](https://gitlab.com/gitlab-com/marketing/corporate_marketing/corporate-marketing/-/issues/4792)の 45% 以上が、GitOps は短期的に自分たちの組織の優先事項であると強調しています。
- GitOps トピックへの関心が非常に高かったため、CD カンファレンス（CNCF 主催）は別の[GitOps カンファレンス](https://events.ringcentral.com/events/gitops-con)を立ち上げる必要がありました
- GitOps はまったく新しいペルソナとユースケースをターゲットにでき、あなたのために[新しい Land and Expand の機会](https://gitlab.com/gitlab-com/marketing/demand-generation/campaigns/-/issues/1183#sample-deals-from-fy21)を開きます

### GitOps とは何か

上記が興味をそそった場合は、[こちら](https://docs.google.com/presentation/d/1o728pUdk1rrNqWAZpzZVdfZ3gzADvTXSssVzqL-6WB4/edit#slide=id.g8d846209b0_25_172)で、GitOps、それが顧客にとって重要である理由、そして私たちがどう違うかについてさらに詳しく学んでください。

簡単に言えば、GitOps は、バージョン管理、コラボレーション、コンプライアンス、CI/CD などのアプリケーション開発に使用される DevOps のベストプラクティスを取り入れ、インフラストラクチャ自動化に適用するものです。

### セールスプレイの目的

- 新しいペルソナとユースケースで新規案件を Land する
- 既存顧客を新しいチームとユースケースに拡張する

## このセールスプレイのナビゲーション

**ヒント**: ボックスをクリックすると関連セクションに直接移動します

<div class="mermaid">

graph TB
  Z1[Getting Started] -.- A1[Who to meet]
  A1 -.- B1[Keywords to listen for]
  B1 -.- C1[How to identify interest]
  click Z1 "./#getting-started"
  click A1 "./#who-to-meet"
  click B1 "./#keywords"
  click C1 "./#identify-interest"

  Z2[Value Discovery] -.- A2[Common pain]
  A2 -.- B2[Common benefits]
  B2 -.- C2[Required capabilities]
  C2 -.- D2[Positioning value]
  click Z2 "./value-discovery"
  click A2 "./#common-pains"
  click B2 "./#common-benefits"
  click C2 "./#required-capabilities"
  click D2 "./#positioning-value"

  Z3[Sales Tactics] -.- A3[SAEs / AEs]
  A3 -.- B3[SAs / CSMs]
  B3 -.- C3[SDRs]
  click Z3 "./#sales-tactics"
  click A3 "./#sals-aes"
  click B3 "./#sas-tams"
  click C3 "./#sdrs"

  Z4[Resources] -.- A4[Email Templates]
  A4 -.- B4[Customer Stories]
  B4 -.- C4[Identifying lead interest]
  C4 -.- D4[All collaterals]
  D4 -.- E4[Services]
  click Z4 "./#resources"
  click A4 "./#email-templates"
  click B4 "./#customer-stories"
  click C4 "./#lim-anchor"
  click D4 "./#resources-list"
  click E4 "./#services"

  classDef orange fill:#fca121,stroke:#333,stroke-width:1px;
  class Z1 orange
  class Z2 orange
  class Z3 orange
  class Z4 orange

</div>

## はじめに {#getting-started}

### 誰に会うべきか {#who-to-meet}

GitOps に関心を持つペルソナは、一般的に開発組織やエンジニアリング組織のものとは異なります。彼らは多くの場合、組織の運用、システム、インフラ、プラットフォーム、クラウド側の人たちです。

| | 典型的な役割 | 典型的な肩書き |
| - | ----------- | -------------- |
| **エコノミックバイヤー** | Director/VP/CIO of IT、Head of IT Infrastructure / Platform Engineering / Operations | SVP of Technology Operations、Sr. Manager Systems Engineering、Cloud Architect、Information Systems Architect |
| **ユーザー** | SRE、Infra Engineer、Sys Admin、Platform Engineer - 動的に変化する弾力的な環境をサポートするために、頻繁な繰り返しタスクを実行する必要がある | DevOps エンジニア、Architect、Team Lead、DevOps Ninja |

詳細は[こちら](/handbook/marketing/brand-and-product-marketing/product-and-solution-marketing/usecase-gtm/gitops/#personas)

### 注意すべきキーワード {#keywords}

| Infrastructure as code | GitOps | Infrastructure automation |
| Configuration as code | Policy as code | Approvals for infrastructure changes |
| Terraform | Ansible | AWS Cloud formation |
| Weaveworks Flux | Argo CD | Terraform Cloud |

#### アクティビティに基づく関心の見極め方 {#identify-interest}

顧客は、ウェブサイト、コラテラル、動画、キャンペーンからのコンテンツに関与します。彼らの最新のアクティビティに基づいて顧客の関心レベルを特定でき、それを SFDC で確認できます。

1. [Last Interesting Moment を特定する](#lim-anchor)
1. [Top consumed content とそれに費やした時間のトピックを特定する](#lim-anchor)

これらの両方に GitOps のキーワードや GitOps のトピックが含まれている場合は、GitOps の会話を必ず行ってください。

#### ターゲットされたリードが注意を待っている

マーケティングは関連するデマンドジェネレーションキャンペーンを実行しています。

- 異なるチャネル（LinkedIn、Facebook、Google 検索など）でデマンドジェネレーションキャンペーンが実行されており、Focus Account Lists、ICP Total Addressable Market、Volume アカウントから新しいリードを浮かび上がらせています。マーケティングキャンペーンのフローは[こちらの Figjam で確認できます](https://www.figma.com/file/R5rSFgNdyW5mSN9mSHORJo/Campaigns-%3E-GitOps-GTM-Campaign-Flow-FY22---FY23_2023-08-22_10-43-13?type=whiteboard&t=S9GSk8jFu3bJ28Iq-1)
- FY22 を通じて、新規および既存の Inquiries をターゲットにした一連のバーチャルイベントが予定されています。今後の Infrastructure Automation/GitOps GTM 関連のバーチャルイベントのスケジュールは、[FY22 All-Marketing Calendar SSoT](https://docs.google.com/spreadsheets/d/1c2V3Aj1l_UT5hEb54nczzinGUxtxswZBhZV8r9eErqM/edit#gid=571560493&fvid=1570851636) で確認できます

### 価値の発見 {#value-discovery}

### 共通の課題 {#common-pains}

| 課題「before シナリオ」 | だから何か？「ネガティブな結果」 |
| ----------------------------- | -------------------------------- |
| - インフラチームは、構成、ポリシー、変数などをインフラ全体で一貫して管理する方法をどうしていますか。 | 一貫性なし、知識共有なし、バージョン管理なし、クリックオプス |
| - 適切な担当者によって変更がレビュー・承認され、ステージング/本番環境への混乱を最小限に抑えられるようにできていますか。 | 不正な変更が本番環境にリリースされ、パフォーマンスの問題やダウンタイムが発生する可能性が高くなる、ハイスキル/高給なリソースが雑用をしている可能性がある |
| - インフラチームは、毎回環境をセットアップする手順を一貫して再現できますか。 | 標準化なし、手作業のプロセス - よりエラーが起きやすい |

その他の質問は[こちら](/handbook/marketing/brand-and-product-marketing/product-and-solution-marketing/usecase-gtm/gitops/#discovery-questions)

### 共通のベネフィット {#common-benefits}

| 望ましい将来の状態（「After シナリオ」） | だから何か？（「ポジティブなビジネス成果」） |
| ----------------------------- | -------------------------------- |
| より多くの自動化 | 手作業の繰り返しタスクはエラーが起きやすいため、リスクが低減 |
| 修復までの平均時間が短縮 | ロールバック前にトラブルシューティングするのではなく、動作するインフラの定義に迅速にロールバックでき、結果として修復までの時間が短縮 |
| 価値実現までの時間が短縮 | 手動のクリックオプスから GitOps に移行し、より頻繁にデプロイ |
| コンプライアント | すべての変更が追跡されるため、コンプライアンスが自動化 |
| セキュリティ露出の削減 | すべての変更をレビュー・承認でき、インフラコードのセキュリティをパイプラインに組み込める |

### 必要なケイパビリティ {#required-capabilities}

「GitOps = Infrastructure as Code + Merge Request + CI/CD」

| 必要なケイパビリティ | 顧客指標 |
| ----------------------------- | -------------------------------- |
| インフラコードのバージョン管理 | 価値実現までの時間の改善 - より少ない手作業、より少ないエラー、より多くの自動化 |
| インフラの変更管理とコラボレーション | 変更失敗率の低下 - より多くのコントロール、より多くのレビューと承認 |
| コンプライアンスと監査 | 監査にかかる時間の短縮、コンプライアンス問題の減少 |
| CI/CD - テスト自動化、パイプライン構成管理 | デプロイ頻度の向上 - より多くの自動化 |
| ロールバック | 修復までの平均時間の短縮 - トラブルシューティングの前にインフラの動作する定義にロールバックできる |

## 価値のポジショニング {#positioning-value}

### エレベーターピッチ

インフラのダウンタイムに直面したとき、誰が変更したのか、何が変更されたのか、誰が承認したのかをたどれない経験はありますか？GitLab を使ったインフラ自動化により、コラボレーション、バージョン管理、CI/CD、コンプライアンスというアプリケーション DevOps のベストプラクティスをインフラに持ち込むことができます。

### バリュープロポジション（GitLab はどうやってそれを実現するのか）

他のベンダーとは異なり、GitLab による GitOps は、物理、仮想、クラウドネイティブのインフラを管理するのに役立ちます。Terraform、AWS Cloud Formation などの業界をリードするインフラ自動化ツールとの緊密な統合を活用し、あなたの状況に合わせて対応します。これらすべてが 1 つのアプリケーションで実現します。

GitLab が市場要件をどのように満たしているかの詳細セクションは[こちら](/handbook/marketing/brand-and-product-marketing/product-and-solution-marketing/usecase-gtm/gitops/#market-requirements)

### 差別化要因（GitLab はどうやってそれをよりうまく実現するのか）

- ほとんどの競合ソリューションは、GitOps ワークフローを実現するために 5 〜 6 つの統合が必要です。GitLab はバージョン管理、CI/CD、コンテナレジストリを提供し、構成管理、オーケストレーション、インフラのプロビジョニングについても標準で統合できます。
- ワークフロー全体でのより優れたトレーサビリティ - GitLab はインフラのデプロイを変更まで遡って結びつけることができ、これは複数のソリューションで結びつけられたワークフローでは困難です。
- ほとんどの競合は主にクラウドネイティブをサポート - GitLab はオンプレミスとクラウド、物理、仮想、クラウドネイティブのインフラをサポートしながら顧客に対応します
- エージェントベースとエージェントレスのアプローチ - 顧客が自分の環境に合った正しいアプローチを選択できます

詳細は[こちら](/handbook/marketing/brand-and-product-marketing/product-and-solution-marketing/usecase-gtm/gitops/#top-3-differentiators)

### 競合

主要競合: Flux (Weaveworks)、Argo CD、Terraform Cloud
副次的競合: Codefresh、Transposit、Red Hat/IBM

主要競合に対する詳細な競合比較は[こちら](/handbook/marketing/brand-and-product-marketing/product-and-solution-marketing/usecase-gtm/gitops/#competitive-comparison)

### 反論への対処

典型的な質問:

- Kubernetes を使用していないので、GitOps は自分には関係ない
- 私たちの環境は GitOps には複雑すぎる
- GitOps は開発者にデプロイをいじる機会をより多く与えてしまい、インフラチームはそれに不安を感じる
- (Infra / DevOps Engineer) 自分の仕事と環境のコントロールを失ってしまう

詳細な Q&A 一覧は[こちら](/handbook/marketing/brand-and-product-marketing/product-and-solution-marketing/usecase-gtm/gitops/#objection-handling)

## セールスプレイの戦術 {#sales-tactics}

### SAE と AE {#sals-aes}

GitOps の会話で先導する必要があるかをどう判断するか。

#### 発見の前

1. 上記の GitOps セールスプレイに慣れ親しんでください - 最低限イネーブルメント動画を視聴してください。
1. 適切なペルソナと話していることを確認 - 通常これは開発者ではなく、チームリード、システムアーキテクト、クラウドアーキテクトなど、インフラ/運用側の人たちです。
1. SFDC の「Pathfactory for Sales」での Last Interesting Moment が GitOps に関連しているかを特定（キーワードを使って判断）
1. SFDC の「Pathfactory for Sales」で顧客が閲覧した上位コンテンツが GitOps のトピックに関連しているかを特定

#### 発見中

1. 上記のキーワードリストを使って、リードが GitOps の会話に関心があるかを特定
1. GitOps の上位の発見質問、反論への対処、差別化要因に慣れ親しんでください。**注意: 私たちが話すペルソナが異なるため、これは他の会話とは大きく異なります**
1. 発見中に必ずビジネスの目的と優先事項を特定できるようにしてください。これらは以下のいずれか 1 つ以上である可能性があります:

   - インフラ自動化
   - クラウドネイティブ環境の管理
   - マルチクラウド / Kubernetes 採用
   - インフラに関連するコンプライアンス

1. 通話後、GitOps の会話のためにカスタマイズされた[これらのメールテンプレート](https://docs.google.com/document/d/1uvZPw39OAExz7sIivIlPi3jNlUXKodVNy0mmIb-X0Cs/edit#)のいずれかを使って顧客にメールを送信することを検討してください。コールトゥアクションを[GitOps の Pathfactory トラック](https://learn.gitlab.com/l/gitops-gtm-content)の任意のアーティファクトに自由に更新してください

#### 評価中

1. GitOps 関連の[顧客リファレンス](#customer-stories)を共有
1. [GitOps の Pathfactory トラック](https://learn.gitlab.com/l/gitops-gtm-content)の一部であるテクニカルデモやウェビナーを共有
1. [Gartner Peer Insights](/handbook/marketing/brand-and-product-marketing/product-and-solution-marketing/usecase-gtm/gitops/#gartner-peer-insights) を共有
1. SA と協力して GitOps のテクニカルデモを披露
1. 通話後、GitOps の会話のためにカスタマイズされた[GitOps デモメールテンプレート](https://docs.google.com/document/d/1uvZPw39OAExz7sIivIlPi3jNlUXKodVNy0mmIb-X0Cs/edit#)を顧客にメールで送信することを検討してください。

#### 交渉 / 意思決定中

1. [私たちがどう違うかを示す](#differentiators-how-gitlab-does-it-better)
1. [GitOps の Pathfactory トラック](https://learn.gitlab.com/l/gitops-gtm-content)から Forrester TEI レポートを共有
1. [ROI 計算ツール](https://about.gitlab.com/calculator/)を使って、他のソリューションよりも単一のアプリケーションとして GitLab を使用する価値を披露

### SA {#sas-tams}

GitOps の会話で先導する必要があるかをどう判断するか。

#### 発見の前

1. 上記の GitOps セールスプレイに慣れ親しんでください - 最低限イネーブルメント動画を視聴してください。
1. 正しい[ユーザーペルソナ](#who-to-meet)の 1 人とミーティングすることを確認。
1. GitOps の上位の発見質問、反論への対処、差別化要因に慣れ親しんでください。

#### 発見中

1. [発見質問](#value-discovery)を尋ねます。顧客の話を聞いて、彼らの課題や苦労を理解してください。
1. 彼らの課題、苦労、ビジネスの目的、優先事項を聞きながら、彼ら自身の用語を使って、GitLab を使った GitOps が彼らをどう助けられるかを説明し始めてください。
1. 彼らの技術的要件を理解してください。たとえば、以下の技術的発見質問の回答を得るように努めてください:

   - 彼らのアプリケーションはハイブリッドクラウドインフラまたはマルチクラウドを必要としますか。
   - 彼らは Terraform や Ansible などの Infrastructure-as-Code ツールへの強い依存性がありますか。
   - 彼らは K8s、K8s 以外、またはその両方の GitOps を必要としますか。
   - K8s の場合、彼らのクラスターはファイアウォール外で利用可能ですか。

1. 競合への[反論への対処](#handling-objections)の準備をしておいてください

#### 評価中

1. SA CD ワークショップの[GitOps ラボ](https://gitlab.com/tech-marketing/workshops/cicd/cd-labs-instructions/-/blob/master/11.%20GitOps%20with%20GitLab.md)の手順に従って、デモ目的の自分自身の GitOps 環境を準備してください。このラボはクラウドプロバイダーとして AWS をカバーします。Google および/または Azure を追加したい場合は、公開向けの [GitOps デモ](https://gitlab.com/gitops-demo) を活用して環境を拡張できます。
1. [GitOps の Pathfactory トラック](https://learn.gitlab.com/l/gitops-gtm-content)の一部であるテクニカルデモやウェビナーを共有
1. 顧客から PoV への参加を求められた場合、PoV の要件を収集し、PoV を実行する準備をしてください。準備に役立つリソース:

   - #gitops Slack チャネル
   - #s_configure Slack チャネル
   - GitOps Engineering
   - GitOps TMM
   - GitOps PM

### SDR {#sdrs}

リードと GitOps の会話を行う必要があるかをどう判断するか。

#### アウトリーチ / 会話の前

1. リードがどこから来たかを特定 -> リードが GitOps 向けのターゲットリードを生成している GitOps キャンペーンから来ているかを確認
1. SFDC の「Pathfactory for Sales」での Last Interesting Moment が GitOps に関連しているかを特定（キーワードを使って判断）
1. SFDC の「Pathfactory for Sales」で顧客が閲覧した上位コンテンツが GitOps のトピックに関連しているかを特定
1. 上記のキーワードリストを使って、リードが GitOps の会話に関心があるかを特定
1. [正しいペルソナ](#who-to-meet)と話していることを確認 - 通常これは開発者ではなく、チームリード、システムアーキテクト、クラウドアーキテクトなど、インフラ/運用側の人たちです。
1. GitOps の上位の発見質問、反論への対処、差別化要因に慣れ親しんでください。**注意: 私たちが話すペルソナが異なるため、これは他の会話とは大きく異なります**

#### 顧客アウトリーチ / 会話

1. 多くのハイパフォーマンスなアウトリーチシーケンスが利用できます - すでに利用可能なものを使用し、必要に応じてカスタマイズしてください
1. [Land](https://docs.google.com/document/d/1MDeaKj4XHEQe73jqDWClNJBKXr61gsZu7qNzHiD4138/edit) / [Expand](https://docs.google.com/document/d/1am53Ijr3EFuoZWwQPxsXAXGIhSOBJ7hQeFQv4-5QVyo/edit)用の SDR Call Script を使用
1. [GitOps Pathfactory トラック](https://learn.gitlab.com/l/gitops-gtm-content)のコンテンツを使用してリードと共有してください。SFDC を通じて Pathfactory for Sales から直接コンテンツリンク（トラッキングを含む）を取得できます。顧客のジャーニーの段階別に分類されています。

## リソース {#resources}

### 推奨メールテンプレート {#email-templates}

顧客のジャーニーの段階に基づいて使用できる推奨メールテンプレートをいくつか紹介します。

- 認知: [インフラチームが開発のペースで動けるようになる方法はこちら](https://docs.google.com/document/d/1uvZPw39OAExz7sIivIlPi3jNlUXKodVNy0mmIb-X0Cs/edit#heading=h.tvxw4uololys)
- 検討: [GitOps でマルチクラウド・マルチ k8s デプロイメントを実現](https://docs.google.com/document/d/1uvZPw39OAExz7sIivIlPi3jNlUXKodVNy0mmIb-X0Cs/edit#heading=h.qb2mme6e6mph)
- 決定 / 購入: [Kiwi.com がインフラとアプリケーションを 3 分以内にデプロイする方法を学ぶ](https://docs.google.com/document/d/1uvZPw39OAExz7sIivIlPi3jNlUXKodVNy0mmIb-X0Cs/edit#heading=h.6fvbsmo2n7go)
- テクニカルデモ: [チームがインフラのデプロイメントを自動化する方法はこちら](https://docs.google.com/document/d/1uvZPw39OAExz7sIivIlPi3jNlUXKodVNy0mmIb-X0Cs/edit#heading=h.zedoh58debpr)

### サービス {#services}

GitLab プロフェッショナルサービスは、顧客が GitLab を素早く効率的に活用できるよう支援します。GitLab（または GitLab パートナー）は、顧客をサポートするためのさまざまなサービス提供を行っています。

GitOps セールスプレイでは、顧客の従業員の git、GitLab、GitLab CI への習熟度について尋ねることを検討してください。これらは GitOps の基礎要素です。これらのトピックすべてに強くない場合は、[GitLab with git Basics トレーニング](https://university.gitlab.com/pages/gitlab-fundamentals-training) および/または [GitLab CI/CD トレーニング](https://university.gitlab.com/pages/ci-cd-training/) を提案することを検討してください。

GitOps のロールアウトを支援するアドバイザリー/コンサルティングサービスは、今年後半にロールアウトされる予定です。GitOps アドバイザリーオファリングへの関心を[こちら](https://gitlab.com/gitlab-com/customer-success/professional-services-group/ps-leadership-team/ps-practice-management/-/issues/74)に登録して、PS が効果的に優先順位付けできるよう支援してください！

サービスをポジショニングする際には、[Services Pitch Deck](https://docs.google.com/presentation/d/1CFR8_ZyE9r4Dk_mjoWGe4ZkhtBimSdN0pylIPu-NAeU/edit#slide=id.g2823c3f9ca_0_9) を使用して PS と関わる価値を確立するのに役立てることができます。その他のサービスは、[プロフェッショナルサービス提供の完全一覧](https://about.gitlab.com/services/)で確認できます。

詳細は、[professional services Slack チャネル](/handbook/customer-success/professional-services-engineering/working-with/#slack)で @em と話してください。

### ウェビナー、e-book、ホワイトペーパー、動画 {#resources-list}

- 顧客と共有するための [GitOps の Pathfactory トラック](https://learn.gitlab.com/l/gitops-gtm-content)
- プレゼンテーション、Web ページ、ホワイトペーパー、ブログ、動画の完全な一覧は[こちら](/handbook/marketing/brand-and-product-marketing/product-and-solution-marketing/usecase-gtm/gitops/#resources)で利用可能です。
- GitOps [イネーブルメントプレゼンテーション](https://docs.google.com/presentation/d/1o728pUdk1rrNqWAZpzZVdfZ3gzADvTXSssVzqL-6WB4/edit#slide=id.g8d846209b0_25_172)

### 顧客事例 {#customer-stories}

- [BI Worldwide](https://learn.gitlab.com/gitops-gtm-all/bi-worldwide-gitlab?lx=AZeFEd)
- [Wag](https://learn.gitlab.com/gitops-gtm-all/wag-labs-blog-post?lx=AZeFEd)
- [Nebulaworks](https://learn.gitlab.com/gitops-gtm-all/nebulaworks?lx=AZeFEd)
- [SURF](https://learn.gitlab.com/gitops-gtm-all/surf?lx=AZeFEd)
- [kiwi.com](https://learn.gitlab.com/gitops-gtm-all/flying-base-native-clouds?lx=AZeFEd)
- [VMWare](https://learn.gitlab.com/gitops-gtm-all/infrastructure-code-iac-terraform-cloud?lx=AZeFEd)
- [ValidaTek](https://learn.gitlab.com/gitops-gtm-all/valida-tek-iac?lx=AZeFEd)
さらに多くは[こちら](https://learn.gitlab.com/l/gitops-gtm-content)

- [Gartner Peer Insights](/handbook/marketing/brand-and-product-marketing/product-and-solution-marketing/usecase-gtm/gitops/#gartner-peer-insights)

### SFDC での Last interesting moment と最も閲覧されたコンテンツの確認方法 {#lim-anchor}

- Last interesting moment は SFDC の Marketing info セクションにあります
![Last Interesting Moment](/images/marketing/sales-plays/gitops/gitops-last-interesting-moment.png)

- 時間で並べた最も消費されたコンテンツは SFDC の Pathfactory for sales セクションにあります
![Top Content Consumed](/images/marketing/sales-plays/gitops/gitops-top-content-consumed.png)
