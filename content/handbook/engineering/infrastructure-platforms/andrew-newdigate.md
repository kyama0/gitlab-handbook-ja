---
title: 'シニア・ディスティングイッシュドエンジニア、インフラストラクチャ - Andrew Newdigate'
description: "シニア・ディスティングイッシュドエンジニア、インフラストラクチャはインフラストラクチャチームのメンバーであり、部門のリーダーシップと個々のコントリビューター双方と協力して部門の目標を達成します。"
upstream_path: /handbook/engineering/infrastructure-platforms/andrew-newdigate/
upstream_sha: 1e195b58b9f249ff10bd0e705106c320fee86141
translated_at: "2026-05-14T00:00:00Z"
translator: claude
stale: false
---

![xkcd #670: Wow, that's less than $200 per ... uh ... that's a good deal!](https://imgs.xkcd.com/comics/spinal_tap_amps.png)

画像: Randall Munroe 著、[xkcd.com](https://xkcd.com/670/)

## 私について

私は Andrew Newdigate です。南アフリカのケープタウン出身です。[ケープタウン大学](https://sit.uct.ac.za/) でコンピューターサイエンスの学位を取得しており、ヘルスケア、金融、通信、テック業界でソフトウェアエンジニアとして働いてきました。

いくつかの会社を創業しましたが、皆さんがご存知かもしれない唯一の会社は [Gitter](https://gitter.im/) で、2017年に GitLab に買収されました。これが私が会社に参加した経緯です。

英国のロンドンに17年間住んでいましたが、2019年にケープタウンに戻りました。仕事をしていないときは、ものづくり、旅行、写真、音楽、大自然の中でのキャンプやハイキングが大好きです。

GitLab 外での私の活動の詳細については、私の PolyWork [andrew.newdigate.me](https://andrew.newdigate.me/) をご覧ください。

## 責務

**シニア・ディスティングイッシュドエンジニア、インフラストラクチャ** はインフラストラクチャチームのメンバーであり、部門のリーダーシップと個々のコントリビューター双方と協力して、部門の目標を達成します。

### インフラストラクチャ部門内の特定の注力領域と関心

* **チームアラインメント**: 主に、[Production Engineering](/handbook/engineering/infrastructure-platforms/production-engineering/)、[Observability](/handbook/engineering/infrastructure-platforms/production-engineering/observability/)、[Datastores](/handbook/engineering/infrastructure-platforms/)、[Delivery](/handbook/engineering/infrastructure-platforms/gitlab-delivery/delivery/) チームと協力することに焦点を当てています。
* **可用性**: GitLab.com が可用性目標を達成していることを保証することが、フォーカスの優先順位付け方法の鍵です。これらの目標に到達しているかどうかを知ることは、サービスレベルモニタリングによって決定されます。
* **技術的負債**: 主に [Infradev プロセス](/handbook/engineering/workflow/#a-guide-to-creating-effective-infradev-issues) を通じて、可用性に影響を与える技術的負債のトリアージを支援します。現在の状態は [週次 Infradev レポート](https://gitlab.com/gitlab-org/infradev-reports/-/issues?label_name[]=Infradev%20Status%20Report) で確認できます。
* **サービスレベルモニタリング**: 私の責任は、GitLab フリート全体でサービスレベルモニタリングを定義し、特定のチームと協力して導入することです。
* **リソース使用率と飽和**: GitLab.com を実行するクラウドインフラストラクチャは、私たちの目的では、
  ほぼ無限に拡張可能ですが、スケールアップする能力は、アプリケーションと関連インフラストラクチャの
  ボトルネックと飽和点によって制限されています。DE、インフラストラクチャとして、これらの重要な
  コンポーネントを理解、モデル化、モニター、伝達することが私の責任です。
* **キャパシティプランニング**: リソース使用率と飽和に関連して、キャパシティプランニングとは
  クリティカルなボトルネックにいつ到達するかを理解することであり、理解した上で、特定のステークホルダーと協力して作業を優先順位付けすることが私の責任です。
  これに使用する主要なツールは、Facebook の Prophet 予測ライブラリを使用して
  潜在的なキャパシティ問題を予測する [Tamland レポート](https://gitlab-com.gitlab.io/gl-infra/tamland/patroni.html) です。

### その他のフォーカスと関心

* **オブザーバビリティ**: メトリクス、ログ、トレース。良いオブザーバビリティは、エンジニアがアプリケーションの
  内部状態をよりよく理解できるようにします。次に、より良い理解は、システム全体の可用性を改善するのに役立ちます。
* **アトリビューションとオーナーシップ**: GitLab のモノリシックなアーキテクチャは多くの利点を提供しますが、特定の
  リグレッションやバグにつながる変更を属性付けることは、このモデルではより困難です。Gitaly や Pages のような一部のコンポーネントは
  責任あるチームに容易に属性付けられますが、ほとんどの変更はそうではありません。アトリビューションとオーナーシップとは
  コードベースの領域の責任を特定のチームに割り当てることです (通常は `feature_categories` を介して)。
  これは双方向のプロセスです: 開発チームに本番でのコードの実行に関与することを促し、インフラストラクチャチームが
  開発チームにフィードバックを伝達することです。
* **GitLab.com インシデント**: 私はインシデントコールに頻繁に参加します。主に観察するためで、これによって今後の
  同様のインシデントを避けるためにシステムをイテラティブに改善できます。

### メンタリング

> ディスティングイッシュドエンジニアを構成するすべての属性の中で、他者を鼓舞し助けるエンジニアであることは、私にとって最も重要な単一のものです。ディスティングイッシュドエンジニアは、チームが任意のプロジェクトに対して周りに構築できる人、他者を育成し、以前よりもはるかに仕事が上手くなるよう時間を費やす人です。

<small>[10X エンジニアの神話とディスティングイッシュドエンジニアの現実について、RedMonk](https://redmonk.com/fryan/2016/12/12/on-the-myth-of-the-10x-engineer-and-the-reality-of-the-distinguished-engineer/) より引用。</small>

エンジニアリングの IC は、形式的または非公式のいずれかでキャリア開発、メンタリングについて話し合うために連絡することを歓迎します。コーヒーチャットをセットアップするか、ディスカッションを始めるために Slack で私を見つけてください。

### お客様のニーズ

> ディスティングイッシュドエンジニアは、お客様への価値提供に対する執拗なフォーカスをもたらします。お客様のニーズを理解しており、新しい市場の場合は、潜在的なニーズが何であるかを理解しようとして多くの時間を費やします。必要なときにコース調整し、チームを連れて行きます。

<small>[10X エンジニアの神話とディスティングイッシュドエンジニアの現実について、RedMonk](https://redmonk.com/fryan/2016/12/12/on-the-myth-of-the-10x-engineer-and-the-reality-of-the-distinguished-engineer/) より引用。</small>

見込みのお客様や既存のお客様の技術チームと関わることに喜んで応じます。アカウントマネージャーは、これのために私のカレンダーに時間を予約することを歓迎します。

## ノーススタープリンシパル

[https://randsinrepose.com/archives/how-to-rands/](https://randsinrepose.com/archives/how-to-rands/) からインスピレーションを得ています。

**アクションへの強いバイアス**

> 潜在的な方向性を延々と議論する長いミーティングはしばしば価値がありますが、私は始めることが学習と進歩を始める最良の方法だと信じています。これは常に正しい戦略ではありません。この戦略はディベートを好む人を悩ませます。

**イテレーション**

前のポイントに関連して、頻繁で、小さく、低リスクで可逆的な漸進的変更は、大きなリスクのある変更よりほぼ常に好ましいです。
複合的に積み上げられる小さな漸進的変更は、リスクを低く保ちながら大きな成果につながります。大きな変更はほとんど常にスメル (匂い) であり、私は奨励します。

**フィードバック**

私は常にフィードバックを受け入れる意志があり、最善を尽くしてそれに対処しようとします。Slack で私に DM するか、できればコールをセットアップしてください。

## 講演

時折、私はカンファレンスで話します。これまで私が行った講演のいくつかを以下に示します:

### ScaleConf 2020

> 良いオブザーバビリティは、スケールで複雑なシステムを管理するために重要です。質の高いメトリクスを持つことがこれの鍵です。しかし、システムが成長するにつれて、生成するメトリクスの数は急速に増加します。ダッシュボードとアラートは維持が困難になり、技術的負債につながる可能性があります。この講演では、これに取り組むために GitLab で使用している戦略について説明します。

[https://www.youtube.com/watch?v=2zL9DymXi1E](https://www.youtube.com/watch?v=2zL9DymXi1E)

<iframe width="560" height="315" src="https://www.youtube.com/embed/2zL9DymXi1E" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

### PromCon EU 2019

> Prometheus を使用した実践的なキャパシティプランニング

[https://www.youtube.com/watch?v=swnj6KTRg08](https://www.youtube.com/watch?v=swnj6KTRg08)

<iframe width="560" height="315" src="https://www.youtube.com/embed/swnj6KTRg08" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

### Devopsdays Cape Town 2019

> GitLab.com のモノリシックな Rails アプリケーションは、週次で大きなトラフィックの成長を経験しています。可用性を確保するために、GitLab のインフラストラクチャチームは、CPU、データベース接続プール、メモリ、ストレージ、その他多くの有限リソースなど、アプリケーションのキャパシティ制限にぶつからないように追跡し、前もって計画しています。これらの制限にぶつかると、回避策が講じられる間に、サービスが何時間も、または何日も劣化する可能性があります。
>
> これを念頭に置いて、チームは Prometheus 記録ルールとアラートの上にツールセットを構築し、最大1か月前まで、潜在的なリソース飽和の問題について十分に事前警告を提供するために必要な情報を提供することに着手しました。
>
> リソース飽和の問題にリアクティブに対応していると感じたことがあるなら、このセッションは、私たちが SRE チームのワークフローにリソース計画を構築する方法の実用的な例を提供します。私たちはオープンソースのソリューションを発表し、それが私たちにどのように機能するかを説明します。

[https://devopsdays.org/events/2019-cape-town/program/andrew-newdigate/](https://devopsdays.org/events/2019-cape-town/program/andrew-newdigate/)

<iframe width="560" height="315" src="https://www.youtube.com/embed/YHV0qkKBz7o" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

### Monitorama PDX 2019

> Prometheus を使用した実践的な異常検知

[https://vimeo.com/341141334](https://vimeo.com/341141334)

<iframe src="https://player.vimeo.com/video/341141334?portrait=0" width="640" height="360" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>
<p><a href="https://vimeo.com/341141334">Monitorama PDX 2019 - Andrew Newdigate - Practical Anomaly Detection using Prometheus</a> from <a href="https://vimeo.com/monitorama">Monitorama</a> on <a href="https://vimeo.com">Vimeo</a>.</p>

### Google Cloud Next 2019 -

> Google Cloud Next '19 で、GitLab スタッフエンジニア Andrew Newdigate は私たちの移行経験と、それを実現するために取った手順を発表しました。移行はめったに計画どおりにいきませんが、他の人がそのプロセスから学べることを願っています。

[https://about.gitlab.com/blog/2019/05/02/gitlab-journey-from-azure-to-gcp/](https://about.gitlab.com/blog/2019/05/02/gitlab-journey-from-azure-to-gcp/)

<iframe width="560" height="315" src="https://www.youtube.com/embed/Ve_9mbJHPXQ" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## Andrew との関わり方

1. [Infrastructure トラッカー](https://gitlab.com/gitlab-com/gl-infra/infrastucture/issues/new) で Issue を作成することから始めてください。
1. これに続いて [#infrastucture](https://gitlab.slack.com/archives/g_infrastructure) で Slack メッセージを送るのを歓迎します。
1. 私のカレンダーで時間を確保してください。私はカレンダーを管理するために [Clockwise](https://www.getclockwise.com/) を使用しています。Clockwise は空き時間を「Focus Time」として予約します。
    これらのブロックを上書きして予約することを歓迎します。
1. より良い代替手段を見つけられない場合、夕方のミーティングは通常問題ありません。早朝は子育ての都合により難しいです。
