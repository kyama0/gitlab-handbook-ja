---
title: 'シニア・ディスティングイッシュドエンジニア、インフラストラクチャ - Andrew Newdigate'
description: "シニア・ディスティングイッシュドエンジニア、インフラストラクチャはインフラストラクチャチームのメンバーであり、部門のリーダーシップと個々のコントリビューター双方と協力して部門の目標を達成します。"
upstream_path: /handbook/engineering/infrastructure-platforms/andrew-newdigate/
upstream_sha: 6a459a3ca969603754a3b5133342edb804d3012c
translated_at: "2026-04-28T15:53:35Z"
translator: claude
stale: false
---

![xkcd #670: Wow, that's less than $200 per ... uh ... that's a good deal!](https://imgs.xkcd.com/comics/spinal_tap_amps.png)

画像: Randall Munroe 著、[xkcd.com](https://xkcd.com/670/)

## 私について

私は Andrew Newdigate です。南アフリカのケープタウン出身で、[ケープタウン大学](https://sit.uct.ac.za/)でコンピューターサイエンスの学位を取得しており、医療、金融、通信、テクノロジー分野でソフトウェアエンジニアとして働いてきました。

いくつかの会社を設立しましたが、皆さんがご存知かもしれないのは [Gitter](https://gitter.im/) という会社で、2017年に GitLab に買収されました。これが私が GitLab に入社したきっかけです。

イギリスのロンドンに17年間住んでいましたが、2019年にケープタウンに戻りました。仕事以外では、ものづくり、旅行、写真、音楽、そして大自然でのキャンプやハイキングが大好きです。

GitLab 以外での活動の詳細については、PolyWork の [andrew.newdigate.me](https://andrew.newdigate.me/) をご覧ください。

## 責任

**シニア・ディスティングイッシュドエンジニア、インフラストラクチャ**はインフラストラクチャチームのメンバーであり、部門のリーダーシップと個々のコントリビューター双方と協力して部門の目標を達成します。

### インフラストラクチャ部門における特定の注力領域と関心事

* **チームアライメント**: 主に [Production Engineering](/handbook/engineering/infrastructure-platforms/production-engineering/)、[Observability](/handbook/engineering/infrastructure/team/)、[Datastores](/handbook/engineering/infrastructure/team/)、および [Delivery](/handbook/engineering/infrastructure-platforms/gitlab-delivery/delivery/) チームとの協力に注力しています。
* **可用性**: GitLab.com が可用性目標を達成できるようにすることが、私の優先順位の要となります。これらの目標を達成しているかどうかは、サービスレベルモニタリングによって判断されます。
* **技術的負債**: 可用性に影響を与えている技術的負債のトリアージを支援します。主に [Infradev プロセス](/handbook/engineering/workflow/#a-guide-to-creating-effective-infradev-issues)を通じて行います。現状は [毎週の Infradev レポート](https://gitlab.com/gitlab-org/infradev-reports/-/issues?label_name[]=Infradev%20Status%20Report)で確認できます。
* **サービスレベルモニタリング**: サービスレベルモニタリングを定義し、GitLab フリート全体に導入するために特定のチームと協力することが私の責任です。
* **リソース利用率と飽和**: GitLab.com を運用するクラウドインフラストラクチャは私たちの目的からすればほぼ無限に拡張可能ですが、スケールアップする能力はアプリケーションと関連インフラストラクチャのボトルネックや飽和点によって制限されます。DE、インフラストラクチャとして、これらの重要なコンポーネントを理解し、モデル化し、モニタリングし、伝達することが私の責任です。
* **キャパシティプランニング**: リソース利用率と飽和に関連して、キャパシティプランニングはいつ重大なボトルネックに達するかを理解することについてです。理解した上で、特定のステークホルダーと協力して作業に優先順位を付けることが私の責任です。このために主に使用するツールは [Tamland レポート](https://gitlab-com.gitlab.io/gl-infra/tamland/patroni.html)で、Facebook の Prophet 予測ライブラリを使用して潜在的なキャパシティ問題を予測します。

### その他の注力事項と関心事

* **Observability**: メトリクス、ログ、トレース。優れた Observability により、エンジニアはアプリケーションの内部状態をより深く理解できます。その結果、より深い理解がシステム全体の可用性向上につながります。
* **アトリビューション & オーナーシップ**: GitLab のモノリシックなアーキテクチャには多くのメリットがありますが、このモデルでは特定の変更を原因として回帰やバグに帰属させることがより困難です。Gitaly や Pages などの一部のコンポーネントは担当チームに帰属させやすいですが、ほとんどの変更はそうではありません。アトリビューション & オーナーシップとは、コードベースの特定領域の責任を特定のチーム（通常は `feature_categories` を通じて）に割り当てることです。これは双方向のプロセスで、開発チームが本番環境でのコード実行に関与するよう促すことと、インフラストラクチャチームが開発チームにフィードバックすることの両面があります。
* **GitLab.com インシデント**: インシデントコールに頻繁に参加します。主に観察者として参加し、将来的に同様のインシデントを避けるためにシステムをイテレーティブに改善できるようにします。

### メンタリング

> ディスティングイッシュドエンジニアを構成するすべての属性の中で、他者にインスピレーションを与え助けるエンジニアであることが、私にとって最も重要な一つです。ディスティングイッシュドエンジニアとは、どんなプロジェクトでもチームが中心に据えることができる人物であり、他者を育て、彼らが以前よりもはるかに優れた仕事ができるようにするために時間を費やす人です。

<small>出典: [On the Myth of the 10X Engineer and the Reality of the Distinguished Engineer, RedMonk](https://redmonk.com/fryan/2016/12/12/on-the-myth-of-the-10x-engineer-and-the-reality-of-the-distinguished-engineer/)</small>

エンジニアリング IC の方々は、正式または非公式な形でキャリア開発やメンタリングについて相談することを歓迎します。コーヒーチャットを設定するか、Slack でご連絡ください。

### 顧客ニーズ

> ディスティングイッシュドエンジニアは、顧客に価値を届けることへの揺るぎないフォーカスをもたらします。彼らは顧客のニーズを理解し、新しい市場においては潜在的なニーズを理解しようと多くの時間を費やします。必要に応じてコースを修正し、チームを引き連れていきます。

<small>出典: [On the Myth of the 10X Engineer and the Reality of the Distinguished Engineer, RedMonk](https://redmonk.com/fryan/2016/12/12/on-the-myth-of-the-10x-engineer-and-the-reality-of-the-distinguished-engineer/)</small>

見込み客やクライアントの技術チームとの関わりを喜んでお受けします。アカウントマネージャーは私のカレンダーに時間を予約していただいて構いません。

## 北極星の原則

インスピレーション元: [https://randsinrepose.com/archives/how-to-rands/](https://randsinrepose.com/archives/how-to-rands/)

**行動への強い偏向**

> 方向性を延々と議論する長い会議は価値があることも多いですが、始めることが学びを得て進歩するための最善の方法だと信じています。これが常に正しい戦略とは限りません。この戦略は議論を好む人々を苛立たせることがあります。

**イテレーション**

前の点に関連して、頻繁で小さく、低リスクで可逆的な段階的変更は、ほぼ常に大きなリスクのある変更よりも好ましいです。小さな段階的変更の複利効果は、リスクを低く抑えながら大きな成果をもたらします。大きな変更はほぼ常に問題の兆候であり、私は積極的に促します

**フィードバック**

フィードバックを常に受け入れる準備ができており、最善を尽くして対処します。Slack で DM するか、さらに良ければ通話を設定してください。

## 講演

時折、カンファレンスで講演します。これまでに行った講演のいくつかを紹介します。

### ScaleConf 2020

> 複雑なシステムを大規模に管理するためには、優れた Observability が不可欠です。質の高いメトリクスはその鍵となります。しかしシステムが成長するにつれて、生成されるメトリクスの数は急速に増加します。ダッシュボードとアラートは維持が困難になり、技術的負債につながる可能性があります。この講演では、GitLab でこれに取り組むために使用している戦略を説明します。

[https://www.youtube.com/watch?v=2zL9DymXi1E](https://www.youtube.com/watch?v=2zL9DymXi1E)

<iframe width="560" height="315" src="https://www.youtube.com/embed/2zL9DymXi1E" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

### PromCon EU 2019

> Prometheus を使った実践的なキャパシティプランニング

[https://www.youtube.com/watch?v=swnj6KTRg08](https://www.youtube.com/watch?v=swnj6KTRg08)

<iframe width="560" height="315" src="https://www.youtube.com/embed/swnj6KTRg08" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

### Devopsdays Cape Town 2019

> GitLab.com のモノリシックな Rails アプリケーションは、週ごとに高いトラフィック増加を経験しています。可用性を確保するため、GitLab のインフラストラクチャチームはアプリケーションのキャパシティ制限（CPU、データベース接続プール、メモリ、ストレージ、その他多数の有限リソースなど）に達することを避けるため、事前に追跡し計画を立てています。これらの制限に達すると、回避策が整備されるまで数時間または数日にわたるサービス低下が生じる可能性があります。
>
> これを念頭に置いて、チームは Prometheus のレコーディングルールとアラートを基盤とした一連のツールを構築し、最大1か月前に潜在的なリソース飽和問題について十分な警告を受けるために必要な情報を提供しています。
>
> もしリソース飽和の問題に対して事後対応的に対応していると感じたことがあれば、このセッションではリソースプランニングを SRE チームのワークフローに組み込む方法についての実践的な例を提供します。オープンソースソリューションを紹介し、それがどのように機能するかを説明します。

[https://devopsdays.org/events/2019-cape-town/program/andrew-newdigate/](https://devopsdays.org/events/2019-cape-town/program/andrew-newdigate/)

<iframe width="560" height="315" src="https://www.youtube.com/embed/YHV0qkKBz7o" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

### Monitorama PDX 2019

> Prometheus を使った実践的な異常検知

[https://vimeo.com/341141334](https://vimeo.com/341141334)

<iframe src="https://player.vimeo.com/video/341141334?portrait=0" width="640" height="360" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>
<p><a href="https://vimeo.com/341141334">Monitorama PDX 2019 - Andrew Newdigate - Practical Anomaly Detection using Prometheus</a> from <a href="https://vimeo.com/monitorama">Monitorama</a> on <a href="https://vimeo.com">Vimeo</a>.</p>

### Google Cloud Next 2019

> Google Cloud Next '19 で、GitLab スタッフエンジニアの Andrew Newdigate が移行経験と実行した手順を発表しました。移行は計画どおりに進むことはまれですが、このプロセスから他の人が学べることを願っています。

[https://about.gitlab.com/blog/2019/05/02/gitlab-journey-from-azure-to-gcp/](https://about.gitlab.com/blog/2019/05/02/gitlab-journey-from-azure-to-gcp/)

<iframe width="560" height="315" src="https://www.youtube.com/embed/Ve_9mbJHPXQ" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## Andrew への連絡

1. [インフラストラクチャトラッカー](https://gitlab.com/gitlab-com/gl-infra/infrastucture/issues/new)で Issue を開始してください。
1. [#infrastucture](https://gitlab.slack.com/archives/g_infrastructure) チャンネルで Slack メッセージを送ってフォローアップすることも歓迎します。
1. カレンダーに時間を確保してください。カレンダー管理には [Clockwise](https://www.getclockwise.com/) を使用しています。Clockwise は空き時間を「Focus Time」として予約します。これらのブロックに上書き予約していただいて構いません。
1. より良い代替案が見つからない場合、夕方のミーティングは通常問題ありません。早朝は親としての責任があるため、より困難な場合があります。
