---
title: "Search Marketing"
description: "Search Marketing は、GitLab の公開ウェブサイトへのトラフィックを増やし、コンバージョン率を改善することによって、GitLab の収益成長に注力します"
upstream_path: /handbook/marketing/inbound-marketing/search-marketing/
upstream_sha: 2d678e92f3fbc59843a2973bbfa95041c6aef07f
translated_at: "2026-05-01T12:25:17Z"
translator: claude
stale: false
lastmod: "2026-04-30T16:57:54+00:00"
---

## Search Marketing

Search Marketing チームは、GitLab の公開ウェブサイトへのトラフィックを増やし、訪問者が MQL (Marketing Qualified Lead: マーケティング有望リード) になるためのコンバージョンパスを改善することにより、GitLab の収益成長を支援することに注力しています。私たちは調査とデータを活用し、オーガニック検索での発見性向上と、about.gitlab.com 上のオファーが訪問者の期待にマッチすることを確認します。

## Search Marketing チームの紹介

[**Niall Cregan**](https://gitlab.com/niallcregan)

* 役職: Search Marketing Manager
* GitLab ハンドル: ncregan
* Slack ハンドル: @Niall Cregan

[**Hanif Smith-Watson**](https://gitlab.com/hsmith-watson)

* 役職: Search Marketing Manager
* GitLab ハンドル: hsmith-watson
* Slack ハンドル: @Hanif Smith-Watson

## 注力領域

* オーガニック検索での発見性
  * about.gitlab.com のサイトヘルス
  * キーワードリサーチ
  * 検索アーキテクチャ
* [コンバージョン改善のためのテスト](/handbook/marketing/inbound-marketing/search-marketing/testing/)
  * オンページ CTA (call to action)
  * A/B テスト

## 総合コンバージョン率

Search Marketing チームは、Sales 向けの新規アカウントとセルフサービスワークフローを生み出すトラフィックを増やすことで、GitLab の収益成長に注力しています。総合コンバージョン率を算出するには、ユニークなフォーム送信イベントを about.gitlab.com 上のユニークページビューで割ります。

私たちは総合コンバージョン率を毎月 dataStudio で公開しています。

<iframe width="600" height="450" src="https://datastudio.google.com/embed/reporting/0f5619db-31e3-4a48-8942-5c997367849d/page/4dMdB" frameborder="0" style="border:0" allowfullscreen></iframe>

## 私たちが管理するツール

* [Google Analytics](https://analytics.google.com/analytics/web/): Google Analytics は広告 ROI の測定を可能にし、Flash、ビデオ、ソーシャルネットワーキングサイトおよびアプリケーションを追跡できます。
* [Hotjar](https://www.hotjar.com/): Hotjar は、ユーザーのオンライン行動と声を明らかにする強力なツールです。分析とフィードバックの両方のツールを組み合わせることで、Hotjar はサイトのユーザーエクスペリエンスとパフォーマンス/コンバージョン率を向上させる「全体像」を提供します。
* [Google Optimize](https://optimize.google.com/optimize/home/): Google Website Optimizer は、無料のウェブサイト最適化ツールで、オンラインマーケターやウェブマスターが異なるウェブサイトコンテンツの組み合わせを継続的にテストすることで、訪問者のコンバージョン率と全体的な訪問者満足度を向上させるのを支援しました。
* [Sitebulb](/handbook/marketing/inbound-marketing/search-marketing/sitebulb/): Sitebulb は SEO のためのウェブサイト監査ツールです。

### オーガニック検索での発見性

gitlab.com およびすべてのサブドメインに入る人のほとんどは、検索エンジンから旅を始めます。私たちのチームの目標は、彼らがクエリに最も関連性が高く正確なマッチを発見できるよう支援することです。

私たちは人々や検索エンジンボットを欺くダークパターンには手を出しません。リンク切れページの制限、リダイレクトの追加、メタデータの更新、重複コンテンツの除去、GitLab 全体のチームへ関連調査を提供することで、サイトが送る技術的シグナルの改善に注力しています。このページの残りは、オーガニック検索での発見性全般を向上させるために従うプロセスに割いています。

### SEO Slack チャンネル

検索で何かに気づき、なぜそれが起きているか質問がある場合は、[#seo-improvement](https://gitlab.slack.com/archives/CPAPAKKA7) に質問を持ち込んでください。Search Marketing チームはそこで活動しており、検索の問題の調査を喜んで行います。

### カノニカル URL の設定

検索エンジンがページの複数のバージョンをクロールする際、[カノニカルバージョン](https://support.google.com/webmasters/answer/139066?hl=en) を設定しない限り、それらすべてを重複として扱います。about.gitlab.com では、ページにこのタグを追加するために `canonical_path` を使用しています。これをページに追加するには、ページパスとともに `canonical_path` をフロントマターに追加します。次のような形になります。

```yaml
canonical_path: "/sub-folder/page/"
```

過去には about.gitlab.com 全体でカノニカルを自動設定していましたが、ページが移動したときに問題が発生しました。ページが移動してもコンテンツのカノニカルが別のページのまま設定されていたため、ハンドブックで多くの問題が発生しました。これが現在カノニカルを手動管理している理由です。モノレポプロジェクトを進めて、ブログとハンドブックをマーケティングサイトから分離するにつれ、より自動化されたカノニカル管理を追加するかもしれません。

### about.gitlab.com 上のリンク

読者の役に立つリソースへリンクすべきです。ブログ投稿、ガイド、その他参考資料へのリンクを必ず含めてください。トピックに関連していれば、企業や製品のウェブサイトへのリンクを含めることもできます。これらのリンクが情報提供であれば、「nofollow」にする必要はありません。

ただし、製品やサービスの対価としてリンクを交換する場合は、[リンクの nofollow に関する Google のガイドライン](https://webmasters.googleblog.com/2016/03/best-practices-for-bloggers-reviewing.html) を使用すべきです。スポンサーシップを行いスポンサードコンテンツへのリンクを開示する場合、nofollow リンクをお願いするのもベストプラクティスです。

### ウェブサイトヘルスチェック

定期的なウェブサイトヘルスチェックを行うべきです。これらのチェックは、サイトへのトラフィックに問題を引き起こす可能性のあるウェブサイトの問題がないことを確認するためのものです。サイトの健全性を確認するためにチェックすべきものは以下のとおりです:

* [Google Search Console](https://search.google.com/search-console/welcome?hl=en)
* [Google Analytics](https://analytics.google.com/analytics/web/)

各ツールで確認すべき問題:

* **Google Search Console**: ダッシュボードとメッセージで、ウェブサイトに関する重要な通知がないか確認します。また、`Search Traffic` > `Manual Actions` の下で、スパムや有害コンテンツとして識別された URL がないか確認します。セキュリティ警告は Abuse チームに転送し、サポートチームと[DMCA 申し立てプロセス](/handbook/support/workflows/dmca/)に従ってください。
* **Google Analytics**: 直近の週とその前の週のオーガニックサイトトラフィックを比較し、大きな変動がないか確認します。

### robots メタデータを使った検索インデックスの管理

検索インデックスからページを除外する必要がある場合があります。例えば、広告キャンペーンのコンバージョンを向上させるためにページの大部分を複製する場合などです。これを使うことは比較的まれですが、オーガニックリーチと有料広告の効率を高めるための重要なツールです。

すべてのページはデフォルトで `meta name="robots" content="index, follow"` に設定されています。ページをインデックスから除外するには、フロントマターに `noindex: true` を追加します。これにより robots メタデータが `meta name="robots" content="noindex, follow"` に設定されます。

### about.gitlab.com のリダイレクト

時折、ウェブサイトの URL 構造を変更する必要があり、人々が必要なページを見つけられるようにしたいことがあります。適切な場合、人々を正しい URL へ送るために 301 リダイレクトを使用します。

#### about.gitlab.com リダイレクトポリシー

Google の検索インデックスに含まれる URL をリダイレクトします。ページがインデックスされているかどうかを確認する簡単なテストは、Google でサイト修飾子 `site:url` を使って URL を検索することです。

内部リダイレクトの数を減らしたいので、URL を変更したときには about.gitlab.com 全体のリンクを更新する必要があります。リダイレクトをリクエストするときは、移動するページについて about.gitlab.com 全体を検索し、リンクを更新できたかどうかを示してください。

#### about.gitlab.com リダイレクトのリクエスト

Digital Marketing Programs チームが about.gitlab.com のすべてのリダイレクトをセットアップし管理できます。

古くなったページをリダイレクトするには、[Growth Marketing プロジェクトの新規リダイレクトセットアップテンプレート](https://gitlab.com/gitlab-com/marketing/growth-marketing/growth/issues/new?issuable_template=set-up-a-new-redirect) で Issue をオープンします。以下を提供する必要があります:

* リダイレクトする必要がある古い URL
* ユーザーを送るべき新しい URL
* about.gitlab.com 全体で古い URL への既存リンクを更新できたかどうか

リダイレクトリクエストに関して質問や懸念があれば、Slack の [#inbound-mktg](https://gitlab.slack.com/archives/C012U3CASJ2) チャンネルでヘルプを求めてください。

#### リダイレクトプロセスのドキュメント

Digital Marketing Programs チームは、about.gitlab.com 上で[リダイレクトプロセスの技術詳細](https://gitlab.com/gitlab-com/www-gitlab-com/blob/master/doc/redirects_on_about_gitlab_com.md)を使用しています。
