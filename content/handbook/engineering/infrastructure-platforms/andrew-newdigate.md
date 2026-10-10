---
title: 'Engineering Fellow, Infrastructure - Andrew Newdigate'
description: "Engineering Fellow, Infrastructure は Platforms Engineering の一員として、すべてのデプロイ先へ GitLab を一貫して提供するための組織全体のエンジニアリング活動を主導します。"
upstream_path: /handbook/engineering/infrastructure-platforms/andrew-newdigate/
upstream_sha: 2c77a1f5b8c8a80cb7b5151ff11cfad84f98bfbb
translated_at: "2026-10-10T06:53:00+00:00"
translator: claude
stale: false
lastmod: "2026-10-07T16:27:45+02:00"
---

![xkcd #670：わあ、1 ... ええと ... あたり 200 ドル未満だなんて、お買い得だ！](https://imgs.xkcd.com/comics/spinal_tap_amps.png)

画像：Randall Munroe、[xkcd.com](https://xkcd.com/670/)

## 自己紹介 {#about-me}

Andrew Newdigate です。南アフリカのケープタウン出身です。[ケープタウン大学](https://sit.uct.ac.za/)でコンピューターサイエンスの学位を取得し、
ヘルスケア、金融、通信、テック業界でソフトウェアエンジニアとして働いてきました。

いくつかの会社を創業しましたが、皆さんが耳にしたことがあるかもしれないのは [Gitter](https://gitter.im/)だけでしょう。開発者向けメッセージングのスタートアップで、共同創業者として CTO を務めました。
GitLab が 2017 年に Gitter を買収し、それを機に入社しました。

英国のロンドンに 17 年間住んでいましたが、2019 年にケープタウンに戻りました。仕事以外では、ものづくり、旅行、写真、音楽、大自然の中でのキャンプやハイキングが大好きです。

### GitLab での経歴 {#my-time-at-gitlab}

1. **Git Infrastructure Lead (2017)**：Rails のモノリスから切り出した Git RPC サービスである [Gitaly](https://gitlab.com/gitlab-org/gitaly)を構築するチームの創設時のリードとして、GitLab.com と Self-Managed 環境への展開までを担当しました。
1. **Interim Director of Infrastructure (2018)**：Gitaly チームと Database チームを管理し、[GitLab.com の Azure から Google Cloud への移行](https://about.gitlab.com/blog/gitlab-journey-from-azure-to-gcp/)を主導しました。GitLab Geo を使用して、約 200TB のデータをダウンタイムなしで移行しました。
1. **Staff Engineer, Infrastructure (2018)**：オブザーバビリティのデータを用い、GitLab.com のシステム群全体で、リソース飽和によるボトルネック、単一障害点、不安定性の原因を特定し、解消しました。
1. **Distinguished Engineer, Infrastructure (2019)**：Scalability チームの設立を支援し、2021 年の IPO に向けて GitLab.com の堅牢化を推進しました。また、[GitLab Dedicated](/handbook/engineering/infrastructure-platforms/gitlab-dedicated/)のアーキテクチャを定義し、自ら開発に携わりながら主導しました。
1. **Sr. Distinguished Engineer, Infrastructure (2023)**：Dedicated for Google Cloud と、2025 年に FedRAMP Moderate 認証を取得した GitLab Dedicated for Government を含む、GitLab Dedicated 製品群のアーキテクトを務めました。
1. **Engineering Fellow, Infrastructure (2026)**：GitLab のすべてのデプロイ先に、モジュール化されたコンポーネントを一貫して提供する取り組みを主導しています。

## 責任 {#responsibilities}

**[Engineering Fellow](/job-description-library/engineering/fellow/), Infrastructure** は Platforms Engineering の一員で、組織全体のエンジニアリング活動に責任を持ちます。
この役割は、全社のエンジニアリングリーダーシップと個人貢献者と協力し、技術的な方向性を定め、部門の目標を達成します。

### 現在の注力領域 {#current-areas-of-focus}

* **モジュール化されたコンポーネントと Theseus プラットフォームのビジョン**：GitLab は単一のコードベースを GitLab.com、Cells、Dedicated、Self-Managed に提供しています。
  [Theseus プラットフォームのビジョン](/handbook/engineering/architecture/design-documents/theseus_platform_vision/)は、これらすべてのデプロイ先に
  コンポーネントを提供するための共通のアーキテクチャ上の契約を定義します。アプリケーションは必要なものを宣言し、各プラットフォームがその実装を提供します。
* **デプロイインターフェース**：[Deployment Interfaces](/handbook/engineering/infrastructure-platforms/developer-experience/deployment-interfaces/) チームと協力して、
  [Runway](/handbook/engineering/architecture/design-documents/runway/)と [Fairway](https://gitlab.com/gitlab-com/gl-infra/platform/runway/fairway)、
  およびこれらと[コンポーネントのオーナーシップモデル](/handbook/engineering/infrastructure-platforms/production/component-ownership-model/)との関係に取り組んでいます。
* **プラットフォームの標準化**：共有 CI コンポーネント、プロジェクトテンプレート、[`common-ci-tasks`](https://gitlab.com/gitlab-com/gl-infra/common-ci-tasks)、
  Helm チャートの標準により、重複を減らし、チームが定型的なコードではなく機能の提供に集中できるようにします。
* **LabKit**：GitLab のサービス全体でログ、メトリクス、トレース、設定を標準化するため、[LabKit](https://gitlab.com/gitlab-org/labkit)を作成しました。
  [LabKit のノーススター戦略](/handbook/engineering/architecture/design-documents/labkit_north_star_strategy/)と
  [LabKit の設定](/handbook/engineering/architecture/design-documents/labkit_configuration/)に関する設計ドキュメントを参照してください。
* **本番環境に近いローカル開発**：[Caproni](https://gitlab.com/gitlab-org/caproni)は、Cloud Native GitLab Helm チャート上に構築された
  Kubernetes ネイティブの開発環境で、本番環境に即したローカル開発サイクルをエンジニアに提供することを目指しています。
  [Development Tooling](/handbook/engineering/infrastructure-platforms/developer-experience/development-tooling/)を参照してください。
* **新しいサービスの提供**：[Orbit](/handbook/engineering/architecture/design-documents/orbit/)、
  [Artifact Registry](/handbook/engineering/architecture/design-documents/artifact_registry/)、
  [AI Gateway](/handbook/engineering/architecture/design-documents/ai_gateway/) など、新しいサービスを構築するチームが、独自の提供経路ではなく共有プラットフォームを通じて、
  すべてのデプロイ先にサービスを提供する方法を判断できるよう支援します。
* **アーキテクチャのコーチング**：多くの[設計ドキュメント](/handbook/engineering/architecture/design-documents/)でコーチを務め、
  特にインフラストラクチャ、[Cells](/handbook/engineering/architecture/design-documents/cells/infrastructure/)、オブザーバビリティ、レート制限を扱っています。

### 長年の関心領域 {#long-standing-interests}

* **サービスレベルのモニタリング**：GitLab.com と GitLab Dedicated が SLI、記録ルール、
  アラート、ダッシュボードを宣言的に定義するために使うメトリクスカタログを設計しました。これは GitLab の SLI/SLO フレームワークの基盤です。また、
  ベンダーに依存しないオープンソースの SLO 仕様である [OpenSLO](https://github.com/OpenSLO/OpenSLO)のコアコミッターの 1 人でもありました。
* **リソースの飽和とキャパシティ計画**：GitLab.com が動作するクラウドインフラストラクチャは、私たちの用途ではほぼ無限に拡張可能です。
  スケーリングの能力を制限するのは、アプリケーションと関連インフラストラクチャのボトルネックと飽和点です。
  [Tamland](https://gitlab.com/gitlab-com/gl-infra/tamland)は、これらの限界に達する時期を予測し、チームが事前に作業の優先順位を付けられるようにします。
  [キャパシティ計画](/handbook/engineering/infrastructure-platforms/capacity-planning/)を参照してください。
* **オブザーバビリティ**：メトリクス、ログ、トレース。優れたオブザーバビリティにより、エンジニアはアプリケーションの
  内部状態をよりよく理解できます。その理解が、システム全体の可用性の向上につながります。
* **帰属の特定とオーナーシップ**：GitLab のモノリシックなアーキテクチャには多くの利点がありますが、特定の
  リグレッションやバグを引き起こした変更の帰属を特定するのは、このモデルではより困難です。帰属の特定とオーナーシップとは、コードベースの各領域の責任を特定の
  チームに割り当てることです（通常は `feature_categories` を使います）。これは双方向のプロセスです。開発チームに本番環境での自分たちの
  コードの実行に関与してもらい、インフラストラクチャチームから開発チームへ情報を伝えます。
* **GitLab.com のインシデント**：インシデント対応の通話に頻繁に参加します。主な目的は観察し、今後同様のインシデントを避けるために、
  私たちのシステムをイテレーションを通じて改善することです。

### メンタリング {#mentoring}

> Distinguished Engineer を形作るすべての資質の中で、他者を鼓舞し、支援するエンジニアであることが最も重要だと考えています。Distinguished Engineer は、どのようなプロジェクトでもチームの中心となれる人であり、他者の育成に時間をかけ、その人が以前よりもはるかに良い仕事をできるようにする人です。

<small>[10X エンジニアの神話と Distinguished Engineer の現実について、RedMonk](https://redmonk.com/fryan/2016/12/12/on-the-myth-of-the-10x-engineer-and-the-reality-of-the-distinguished-engineer/)から引用。</small>

ほかのエンジニアの育成に力を注いでいる取り組みの例です。

* **Staff+ と Principal+ のエンジニアリングデモ**：Infrastructure Platforms 全体の Staff+ エンジニアが参加する、
  隔週の実践コミュニティである Infrastructure Staff+ Engineering Demo を設立しました。これは後に全社の Principal+ Engineering Demo のひな型となりました。
* **Scalability Demo**：4 年以上にわたり、[GitLab Unfiltered](https://www.youtube.com/@GitLabUnfiltered)で週次の公開 Scalability Demo を運営し、
  180 本のエピソードを制作しました。
* **シニア技術者の採用**：Staff+ の技術者採用のために、GitLab の Principal Engineering バーレイザー面接プログラムを設計しました。
* **WeThinkCode_**：2022 年から、南アフリカの非営利団体 [WeThinkCode_](https://www.wethinkcode.co.za/)で研修中のエンジニアを指導しています。この団体は、
  十分な機会が与えられていない、または不利な背景を持つ若者がソフトウェアエンジニアリングの職に就けるよう育成しており、この指導は
  [GitLab と WeThinkCode_ のパートナーシップ](https://thenewstack.io/investing-in-the-next-generation-of-tech-talent/)の一環です。

### 顧客のニーズ {#customer-needs}

> Distinguished Engineer は、顧客への価値提供に徹底して集中します。顧客のニーズを理解し、新しい市場であれば潜在的なニーズを理解するために多くの時間を費やします。必要に応じて進路を調整し、チームとともに進みます。

<small>[10X エンジニアの神話と Distinguished Engineer の現実について、RedMonk](https://redmonk.com/fryan/2016/12/12/on-the-myth-of-the-10x-engineer-and-the-reality-of-the-distinguished-engineer/)から引用。</small>

GitLab.com が急成長した 2019 年から 2021 年にかけて、デモやプリセールスの議論を含む顧客や見込み客との対話に定期的に参加し、
GitLab.com のスケーリングを通じて得た学びを共有しました。

## 指針となる原則 {#north-star-principles}

[https://randsinrepose.com/archives/how-to-rands/](https://randsinrepose.com/archives/how-to-rands/)から着想を得ています。

**行動を強く重視する**

> 考えられる方向性を延々と議論する長いミーティングには、価値があることも多いですが、まず始めることが学びと前進の最良の方法だと考えます。これは常に正しい戦略とは限りません。議論を好む人にとっては、いら立つ戦略です。

**イテレーション**

前の点に関連して、大きくリスクの高い変更よりも、小さく、低リスクで、元に戻せる段階的な変更を頻繁に行うほうが、ほぼ常に望ましいです。
小さな段階的変更の積み重ねは、リスクを低く保ちながら大きな成果につながります。大きな変更はほぼ常に問題の兆候なので、
分割することを勧めます。

**フィードバック**

いつでもフィードバックを受け入れ、対応するために最善を尽くします。

## 講演 {#talks}

カンファレンスで講演することがあります。これまでの講演の一部を紹介します。

### SLOconf 2023 {#sloconf-2023}

> Tamland：GitLab が監視データを使ってキャパシティを予測する方法

[https://www.youtube.com/watch?v=EjrhMEvep-U](https://www.youtube.com/watch?v=EjrhMEvep-U)

<iframe width="560" height="315" src="https://www.youtube.com/embed/EjrhMEvep-U" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

### PromCon EU 2022 {#promcon-eu-2022}

> Tamland：GitLab.com が長期の監視データを使ってキャパシティを予測する方法
>
> Tamland は GitLab のオープンソースのキャパシティ計画ツールです。この講演では、長期的なメトリクスの保存に Thanos を、予測モデルに Facebook の Prophet ライブラリを使用し、数百か所の
> 飽和点にわたるキャパシティの課題をデータに基づいて予測する方法を紹介します。

[https://www.youtube.com/watch?v=2R42jW98MXg](https://www.youtube.com/watch?v=2R42jW98MXg)

<iframe width="560" height="315" src="https://www.youtube.com/embed/2R42jW98MXg" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

### KubeCon + CloudNativeCon North America 2022 {#kubecon--cloudnativecon-north-america-2022}

> Tamland：GitLab.com が長期の監視データを使ってキャパシティを予測する方法

[https://www.youtube.com/watch?v=Aa5IT3PWLO0](https://www.youtube.com/watch?v=Aa5IT3PWLO0)

<iframe width="560" height="315" src="https://www.youtube.com/embed/Aa5IT3PWLO0" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

### SLOconf 2022 {#sloconf-2022}

> 誰でも私たちの SLO に貢献できる、Bob Van Landuyt とともに
>
> SLI の定義を、そのサービスを提供するコードのすぐ隣に組み込むことで、GitLab がアプリケーションチーム全体に SLO のオーナーシップを広げた方法。

[https://www.youtube.com/watch?v=YXOm-8cpcyg](https://www.youtube.com/watch?v=YXOm-8cpcyg)

<iframe width="560" height="315" src="https://www.youtube.com/embed/YXOm-8cpcyg" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

### KubeCon + CloudNativeCon Europe 2021 {#kubecon--cloudnativecon-europe-2021}

> GitLab.com で大規模なメトリクスに取り組む方法
>
> GitLab.com の規模で Prometheus を運用する：Jsonnet ベースのメトリクスカタログと、GitLab.com のオブザーバビリティを支える SLI/SLO フレームワーク。

[https://www.youtube.com/watch?v=6sfr2IGJQXk](https://www.youtube.com/watch?v=6sfr2IGJQXk)

<iframe width="560" height="315" src="https://www.youtube.com/embed/6sfr2IGJQXk" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

### SLOconf 2021 {#sloconf-2021}

> GitLab の SLO モニタリングへの道のり
>
> GitLab による、原因ベースのアラートから、複数の時間枠とバーンレートを使った SLO ベースのアラートへの移行と、それが GitLab.com の信頼性およびオンコールのシグナル対ノイズ比に与えた影響。

[https://www.youtube.com/watch?v=CbX1nZL7biQ](https://www.youtube.com/watch?v=CbX1nZL7biQ)

<iframe width="560" height="315" src="https://www.youtube.com/embed/CbX1nZL7biQ" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

### ScaleConf 2020 {#scaleconf-2020}

> 良いオブザーバビリティは、スケールで複雑なシステムを管理するために重要です。質の高いメトリクスを持つことがこれの鍵です。しかし、システムが成長するにつれて、生成するメトリクスの数は急速に増加します。ダッシュボードとアラートは維持が困難になり、技術的負債につながる可能性があります。この講演では、これに取り組むために GitLab で使用している戦略について説明します。

[https://www.youtube.com/watch?v=2zL9DymXi1E](https://www.youtube.com/watch?v=2zL9DymXi1E)

<iframe width="560" height="315" src="https://www.youtube.com/embed/2zL9DymXi1E" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

### PromCon EU 2019 {#promcon-eu-2019}

> Prometheus を使用した実践的なキャパシティプランニング

[https://www.youtube.com/watch?v=swnj6KTRg08](https://www.youtube.com/watch?v=swnj6KTRg08)

<iframe width="560" height="315" src="https://www.youtube.com/embed/swnj6KTRg08" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

### Devopsdays Cape Town 2019 {#devopsdays-cape-town-2019}

> GitLab.com のモノリシックな Rails アプリケーションは、週次で大きなトラフィックの成長を経験しています。可用性を確保するために、GitLab の Infrastructure チームは、CPU、データベース接続プール、メモリ、ストレージ、その他多くの有限リソースなど、アプリケーションのキャパシティ制限にぶつからないように追跡し、前もって計画しています。これらの制限にぶつかると、回避策が講じられる間に、サービスが何時間も、または何日も劣化する可能性があります。
>
> これを念頭に置いて、チームは Prometheus 記録ルールとアラートの上にツールセットを構築し、最大 1 か月前まで、潜在的なリソース飽和の問題について十分に事前警告を提供するために必要な情報を提供することに着手しました。
>
> リソース飽和の問題にリアクティブに対応していると感じたことがあるなら、このセッションは、私たちが SRE チームのワークフローにリソース計画を構築する方法の実用的な例を提供します。私たちはオープンソースのソリューションを発表し、それが私たちにどのように機能するかを説明します。

[https://devopsdays.org/events/2019-cape-town/program/andrew-newdigate/](https://devopsdays.org/events/2019-cape-town/program/andrew-newdigate/)

<iframe width="560" height="315" src="https://www.youtube.com/embed/YHV0qkKBz7o" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

### Monitorama PDX 2019 {#monitorama-pdx-2019}

> Prometheus を使用した実践的な異常検知

[https://vimeo.com/341141334](https://vimeo.com/341141334)

<iframe src="https://player.vimeo.com/video/341141334?portrait=0" width="640" height="360" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>
<p><a href="https://vimeo.com/341141334">Monitorama PDX 2019 - Andrew Newdigate - Prometheus を使用した実践的な異常検知</a>、<a href="https://vimeo.com/monitorama">Monitorama</a> より、<a href="https://vimeo.com">Vimeo</a> にて。</p>

### Google Cloud Next 2019 {#google-cloud-next-2019}

> Google Cloud Next '19 で、GitLab Staff Engineer Andrew Newdigate は私たちの移行経験と、それを実現するために取った手順を発表しました。移行はめったに計画どおりにいきませんが、他の人がそのプロセスから学べることを願っています。

[https://about.gitlab.com/blog/2019/05/02/gitlab-journey-from-azure-to-gcp/](https://about.gitlab.com/blog/2019/05/02/gitlab-journey-from-azure-to-gcp/)

<iframe width="560" height="315" src="https://www.youtube.com/embed/Ve_9mbJHPXQ" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## 執筆 {#writing}

GitLab ブログに執筆した記事の一部です。

* [GitLab で GitLab を構築する：GitLab.com が Dedicated に与えた着想](https://about.gitlab.com/blog/building-gitlab-with-gitlabcom-how-gitlab-inspired-dedicated/) (2023)
* [GitLab の Azure から GCP への移行の道のり](https://about.gitlab.com/blog/gitlab-journey-from-azure-to-gcp/) (2019)
* [GCP 移行後の GitLab.com の安定性](https://about.gitlab.com/blog/gitlab-com-stability-post-gcp-migration/) (2018)
* [Azure から Google Cloud Platform に移行します](https://about.gitlab.com/blog/moving-to-gcp/) (2018)
* [Go 1.9 の修正によって Gitaly サービスが 30 倍高速化した仕組み](https://about.gitlab.com/blog/how-a-fix-in-go-19-sped-up-our-gitaly-service-by-30x/) (2018)
