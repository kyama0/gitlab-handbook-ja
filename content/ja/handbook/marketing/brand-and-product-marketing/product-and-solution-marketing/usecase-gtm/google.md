---
title: "ユースケース: GitLab + Google Cloud"
upstream_path: /handbook/marketing/brand-and-product-marketing/product-and-solution-marketing/usecase-gtm/google/
upstream_sha: 12455b65f7f70cf1c18488a44bbab3cff0097c8a
translated_at: "2026-04-30T00:00:00Z"
translator: claude
stale: false
---

#### 連絡先

| Partner Marketing | Product Marketing |
| ---- | --- |
| [Sara E. Davila](https://gitlab.com/saraedavila) | [William Chia](https://gitlab.com/williamchia) |

## 市場の視点

ソフトウェア開発の状況は変化しています。今日のユーザーは、常に稼働しあらゆるデバイスからアクセスできるソフトウェアアプリケーションとの対話を期待しています。これに追いつくため、従来は集中型でモノリシックなアプリケーションを構築・管理してきたあらゆる規模の企業が、分散型のクラウドサービスへと移行しています。そしてこれらのサービスは、世界中に分散したチームによって構築・運用されています。IT を通じてビジネスを近代化することは、文化的かつ技術的なシフトです。

このような複雑性が増す中、ソフトウェアチームは、クラウドインフラと連携してより速く効率的に、かつ安全で信頼性の高い形で動作する DevOps ツールを必要としています。

ソフトウェア開発に影響を与える現代のトレンド

- 最新のインフラ自動化のための **GitOps**
- 最高の人材を惹きつけ維持し、生産性を向上させるための**開発者体験の改善**へのビジネス上の重視
- ハイブリッドおよび**マルチクラウド**
- **クラウドネイティブ**なアプリケーションアーキテクチャとレガシーな**アプリケーションのモダナイゼーション**
- **デジタルトランスフォーメーション**
- プラットフォームのモダナイゼーション
- アプリ開発・配信の加速
- エッジでのアプリ開発

## ペルソナ

### ユーザーペルソナ

Sam, the SRE: Sam は、クラウドインフラ上で稼働するアプリケーションソフトウェアの稼働時間と信頼性に責任を負っています。彼は SLA(Service Level Agreements)と SLO(Service Level Objectives)を達成するため、Google Cloud のサービスと直接やり取りします。彼は SRE 専任チームに所属することも、開発者と一緒に製品/サービスチームに組み込まれることもあります。

[Devon, the DevOps Engineer](/handbook/product/personas/): Devon は、開発チームに対する Ops のインターフェースとなることが多いです。彼はインフラ、環境、統合のサポートを提供します。Devon はコードにかなり精通しており、多種多様なツールやコンテキスト切り替えではなく、コードを通じてインフラを管理することを好みます。

[Priyanka, the Platform Operator](/handbook/product/personas/#priyanka-platform-engineer): インフラ管理は、プラットフォームチームの主要な責務の 1 つです。Priyanka は、開発チームがソフトウェアをより迅速に出荷・運用するために利用する共有プラットフォーム(従来型または最新のクラウドプラットフォーム)を提供、保守、運用する責任を負っています。

[Sydney, the System Administrator](/handbook/product/personas/#sidney-systems-administrator): Sydney はアプリケーションチームのインフラと構成を定義、保守、スケールします。彼女は同じタスクに対して繰り返しの依頼を受けることがよくあります。Sydney の主な動機は、エラーを最小化し時間を節約するために繰り返し作業を自動化すること、そしてインフラと構成を変更が追跡できる形で定義し、インフラ変更が[ワイルドウェスト](https://en.wikipedia.org/wiki/Cowboy_coding)状態になるのを防ぐことです。

### バイヤーペルソナ

[Infrastructure Engineering Director](/handbook/marketing/brand-and-product-marketing/product-and-solution-marketing/roles-personas/buyer-persona/), Kennedy

Infrastructure Engineering Director は、高可用な環境の構築とスケーリングに責任を負っています。彼らは組織においてクラウドイニシアチブやコスト最適化のアジェンダを持つことが多いです。

[Release and Change Management Director](/handbook/marketing/brand-and-product-marketing/product-and-solution-marketing/roles-personas/buyer-persona/), Casey

Release and Change Management Director は、構想から提供までの複雑なリリースを管理する責任を負っています。最終的な意思決定者またはバイヤーは CIO の場合もありますが、Release and Change Management Director は購買プロセスにおいて大きな影響力を持っています。

## GitLab ソリューション

## メッセージングとポジショニング

### ポジショニングステートメント

DevOps 成熟度が拡大するにつれ、ソフトウェアチームは計画・開発から提供・運用までのソフトウェアライフサイクルを統合するソリューションを求めています。今日の市場には、クラウドインフラと連携するように設計されていなかったり、Google Cloud 以外のクラウドプロバイダーと密接に結合しすぎていたりするサイロ化されたツールが溢れています。企業は、広大なファイバーネットワーク、コスト効率、そして ML や Kubernetes のような高度な機能を理由に Google Cloud を選択しています。GitLab と Google Cloud は提携し、緊密な技術的統合を備えた統合ソリューションを提供することで、シームレスな体験への自信をチームに与えています。

GitLab と Google Cloud は、いくつかの方法でより良く連携します。GitLab の Self-managed インスタンスと GitLab Runner を Google Cloud のインフラ上にインストールできます。また、Self-managed の GitLab インスタンスや GitLab.com(GitLab の SaaS サービス、こちらも Google Cloud 上で稼働)を使用して、GitLab CI/CD で Google Cloud インフラへソフトウェアをデプロイできます。Anthos や Cloud Run から Compute Engine、Kubernetes Engine まで、GitLab は様々な Google Cloud サービスと素晴らしく連携します。GitLab と Google Cloud の合同ソリューション機能の全容については、[`https://about.gitlab.com/gcp`](https://about.gitlab.com/partners/technology-partners/google-cloud-platform/) を参照してください。

### ショートディスクリプション

GitLab と Google Cloud は、最新のソフトウェアアプリケーションを速度、効率、信頼性をもって開発、提供、運用するための統合ソリューションを提供します。

### ロングディスクリプション

GitLab は、単一アプリケーションとして提供される完全な DevOps プラットフォームです。Google Cloud は、Anthos、Cloud Run、Google Kubernetes Engine などのクラウドコンピューティングサービスを提供しています。GitLab と Google Cloud を組み合わせることで、最新のソフトウェアアプリケーションを速度、効率、信頼性をもって開発、提供、運用するための統合ソリューションを実現します。

レガシーアプリケーションをコンテナ、サービスメッシュ、マイクロサービスを使用したクラウドネイティブアーキテクチャへ近代化することから、GitOps を使用した複雑な分散アプリケーションの運用まで、GitLab と Google Cloud に任せれば、ビジネスの課題に正面から取り組むことができます。

GitLab と Google Cloud の合同ソリューション機能の全容については、[`https://about.gitlab.com/gcp`](https://about.gitlab.com/partners/technology-partners/google-cloud-platform/) を参照してください。

| **キーバリュー** | **スピード** | **効率** | **信頼** |
|--------------|----------------------------------------------------------|--------------|--------------|
| **Promise** | スピードに関する Promise | 効率に関する Promise | 信頼に関する Promise |
| **Pain points** | one | two | three |
| **Why GitLab** |  one | two| three |

## プルーフポイント

[一般的なプルーフポイント](/handbook/sales/command-of-the-message/proof-points/)と [Customer Recognition](https://about.gitlab.com/customers/)

### 引用とレビュー

### 事例

## リソース
