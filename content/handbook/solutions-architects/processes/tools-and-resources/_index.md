---
title: ツールとリソース
description: "Solutions Architects が利用するツール、プラットフォーム、リソースのリファレンスインデックス"
upstream_path: /handbook/solutions-architects/processes/tools-and-resources/
upstream_sha: "fa96dbec1adcd6457e8819e6bd3d28fddfdddf4f"
lastmod: "2026-09-16T23:38:14-04:00"
translated_at: "2026-09-20T03:19:50+00:00"
translator: codex
stale: false
---

## ツールとリソース {#tools-and-resources}

このページは、Solutions Architects が利用するツール、プラットフォーム、リソースをグループ化したリファレンスインデックスです。エンドツーエンドのエンゲージメントガイドについては [SA エンゲージメントプレイブック](/handbook/solutions-architects/playbooks/)を参照してください。必須のプロセスステップについては [SA プロセス](/handbook/solutions-architects/processes/)を参照してください。

### デモおよびプレゼンテーションツール {#demo-and-presentation-tools}

GitLab Solutions Architects は、GitLab の見込み客や顧客が GitLab 製品と DevSecOps 機能を学ぶためのインタラクティブなイベントとして、ハンズオンワークショップを実施します。ワークショップはマーケティングイベントとして実施されることもあれば、特定の顧客向けに単独で実施されることもあります。詳細は[ハンズオンワークショップ](/handbook/solutions-architects/tools-and-resources/workshop/)ページを参照してください。

### カスタマーエンゲージメントとレコーディング {#customer-engagement-and-recording}

プリセールスサイクル中（例: POV エクササイズや潜在的な新規取引を追求中の顧客対応時など）にサポートが必要な場合、Solutions Architects はまず Zendesk にログインしてください。次に、[Zendesk Internal Request Form](https://gitlab-internal.zendesk.com/hc/en-us/requests/new?ticket_form_id=22783651259548)を使用し、「What is this request concerning?」の下で「Request assistance from support」を選択してください。

既存顧客に関するその他すべての状況においては、Solutions Architects は顧客自身がサポートチケットを開くようにアドバイスしてください。

そのチケットが後に優先度の高いものとなった場合、担当の Support Engineer が [GitLab Request for Help](https://gitlab.com/gitlab-com/request-for-help/) (RFH) Issue を通じて担当のバックエンドエンジニアリングチームへエスカレーションできます。クロージングを妨げる可能性のあるブロッカーなど例外的な状況においては、Solutions Architects が直接 RFH Issue を起票することもできます。その際は、[RFH README](https://gitlab.com/gitlab-com/request-for-help/-/blob/main/README.md)に記載されたプロセスを慎重に守り、Issue をクローズする際にはレポーティング要件に沿った正しい[クロージャーラベル](https://gitlab.com/gitlab-com/request-for-help/-/blob/main/README.md#applying-the-correct-closure-labels)を付与してください。

### データシードとデモ環境 {#data-seeding-and-demo-environments}

DAP トライアル、POV、または顧客デプロイ中に SA がバグや顧客の作業を妨げる問題 を発見した場合は、[DAP Rapid フィールド報告プロセス](/handbook/solutions-architects/tools-and-resources/dap-issue-reporting/)を使用し、適切な重大度とトラッキングラベルを付けてエンジニアリングへルーティングしてください。SA は Zendesk チケットなしで直接バグを起票できます。

### 既存顧客向け SaaS トライアル {#saas-trials-for-existing-customers}

有償顧客が Ultimate をトライアルする際は、SaaS 上に新しいネームスペースを作成する必要があります。主な理由は 2 点あります:

1. 一部の有償機能はトライアルでは利用できないため、トライアルライセンスを適用すると顧客が利用していた機能を失う可能性があります
2. GitLab には、トライアル期限切れ時にネームスペースが Free に戻ってしまう可能性なしに、SaaS 上でトライアルライセンスを適用・解除するための適切な仕組みがありません ([Issue を参照](https://gitlab.com/gitlab-org/gitlab/-/issues/12186))

いずれの状況でも、SaaS ネームスペースにトライアルを適用すると顧客の本番 GitLab 利用がリスクにさらされます。

代わりに、顧客は新しいネームスペースを作成し、そこでトライアルする必要があります。プロセスを顧客にとってできるだけスムーズにするための[トライアルガイドライン](/handbook/solutions-architects/tools-and-resources/trial-guidelines/)をまとめています。

### 学習プラットフォーム {#learning-platforms}

Solutions Architect として、製品や関連業界トピックについて継続的に学び続けることは重要です。[エデュケーション＆イネーブルメントハンドブックページ](/handbook/customer-success/education-enablement/)には、習熟のためにご活用いただける集約リソースのダッシュボードが用意されています。

### 製品リリース {#product-releases}

Solutions Architects は、GitLab の月次製品リリースのペースに追随し、見込み客や顧客のニーズに合わせた機能セットや能力をポジショニングすると同時に、市場リーダーとしての地位を示す必要があります。

技術的な議論や技術評価を支援するため、以下のリンクから製品リリース情報を確認できます。

- [今後のリリース](https://about.gitlab.com/upcoming-releases/)
- [過去のリリース](https://gitlab.com/gitlab-org/gitlab/-/releases)
- [リリースブログ](https://about.gitlab.com/releases/categories/releases/)
- [What is New Since? リリース機能オーバービューツール](https://gitlab-com.gitlab.io/cs-tools/gitlab-cs-tools/what-is-new-since/?)で 2 つのリリースを比較

### 顧客対応ミーティングツール {#customer-facing-meeting-tools}

Solutions Architects は、デモ、プレゼンテーション、Q&A のために頻繁に顧客とやり取りします。これらのコールでは、顧客が混乱や中断なしに GitLab の価値を明確に体感できるようにするべきです。以下のツールリストは、よく使われるソリューションとして GitLab SA チームがまとめたものです。これらの利用が必須ということでもなく、特定製品の推薦でもありません。

- [Muzzle](https://muzzleapp.com/) — コール開始前にすべての通知をミュート
- [Tab Resize Chrome plugin](https://chrome.google.com/webstore/detail/tab-resize-split-screen-l/bkpenclhmiealbebdopglffmfdiilejc?hl=en-US) — タブを分割画面表示に
- [Screenbrush](https://screenbrush.imagestudiopro.com/) — 画面に直接書き込み
- [Toby](https://www.gettoby.com/)や [Tabs Outliner](https://chrome.google.com/webstore/detail/tabs-outliner/eggkanocgddhmamlbiijnphhppkpkmkl) — プリセットしたタブを一括起動
- [Station](https://getstation.com/) — スマートドックでアプリ別にページをグループ化
- [MouseBeam](https://geeky.gent/tag/mousebeam/) — マウスカーソルが複数画面を円のように移動
- [Rectangle](https://rectangleapp.com/) — macOS でキーボードショートカットやスナップ領域でウィンドウを素早く移動・リサイズ
- [Dark Reader](https://darkreader.org/) — 部屋の照明に合わせてブラウザのダークモードを有効化
- [Postman](https://www.postman.com/) — API 操作用
- [VSCodium](https://vscodium.com/) — 一部 SA が好んで使うデモ・開発向けオープンソース IDE
- [Visual Studio Code](https://code.visualstudio.com/) — 軽量 IDE テキストエディタ

#### 関連する macOS のヒント {#related-macos-tips}

- トラックパッド、Command キー、その他のオプションを使った[フルスクリーンアプリケーション間の切り替え](https://www.intego.com/mac-security-blog/how-to-enter-and-exit-full-screen-mode-in-macos/)
- 画面の特定箇所をズームするための [Zoom アクセシビリティ機能](https://www.imore.com/how-use-zoom-mac)を使う
- [単一モニタで複数の Spaces を使う](https://support.apple.com/en-gb/guide/mac-help/mh14112/mac)ことで、複数のアプリウィンドウやブラウザタブをフルスクリーンで開いておく
  - トラックパッドのジェスチャでウィンドウやタブを切り替えられ、ディスプレイ画面をすっきり保てます

### 役立つ顧客向けプレゼンテーション {#useful-customer-facing-presentations}

まったく同じプレゼンテーションはなく、顧客のジャーニーに合わせてコンテンツを組み合わせることがよくあります。すべてのフィールドおよび顧客向けコラテラルは以下にホストされています。

- [HighSpot](https://gitlab.highspot.com/) (フィールドチーム向け)
- [Solution Pages](https://about.gitlab.com/solutions/) (Web ユーザー向け)

### 学習プラットフォーム {#learning-platform}

詳細は [カスタマーサクセス エデュケーション＆イネーブルメントページ](/handbook/customer-success/education-enablement/)で確認できます。

### LinkedIn Learning プラットフォーム {#linkedin-learning-platform}

LinkedIn Learning は、SA のオンボーディングジャーニーを支援する様々なリソースを備えたもう 1 つのプラットフォームです。

### associate SA として始める {#getting-started-as-an-associate-sa}

以下は、associate SAs のオンボーディングプロセスを支援し、ロールに必要な技術概念に素早く追いつくためのコースです。

**GitLab メンバーは無料**

- 学習パス [Become a DevOps Engineer](https://www.linkedin.com/learning/paths/getting-started-with-devops)。特に以下のセクション:
  - [DevOps Foundations](https://www.linkedin.com/learning/devops-foundations-23454205)
  - [Learning Docker](https://www.linkedin.com/learning/learning-docker-17236240)
  - [DevOps Foundations - CI/CD](https://www.linkedin.com/learning/devops-foundations-continuous-delivery-continuous-integration-14449917)

- [Docker for the Absolute Beginner - Hands-On](https://learning.oreilly.com/videos/docker-for-the/9781788991315/)

**有料**
有料コースは [Growth and Development の福利厚生](/handbook/people-group/learning-and-development/growth-and-development/)の一環として経費精算できます

- Coursera の IBM コース: [Information Technology (IT) and Cloud Fundamentals Specialization](https://www.coursera.org/specializations/it-cloud-fundamentals)
特にモジュール [Introduction to Cloud Computing](https://www.coursera.org/learn/introduction-to-cloud?specialization=it-cloud-fundamentals)

### データシード (デモデータ) {#data-seeding-demo-data}

[GitLab Data Seeder](https://docs.gitlab.com/ee/development/data_seeder.html)は、Solutions Architects が GitLab で「良いデータがどう見えるか」を顧客にお見せするために使えるツールです。
生成されるデータはカスタマイズ可能で、時間に対して相対的であり、デモ用にオンデマンドでデータを生成できます。

デモデータは Docker、GDK、顧客環境など、あらゆる セルフマネージドインスタンス上でお見せできます。

### ダイアグラミングツール {#diagramming-tools}

現状と将来のワークフローやアーキテクチャをダイアグラム化できることは、Solutions Architects が GitLab の DevSecOps トランスフォーメーションの主要なベネフィットを伝えるための重要な戦術です。GitLab は SA が利用できるよう FigJam を提供しており、ダイアグラムを保存するための [Solutions Architecture Workspace](https://www.figma.com/files/972612628770206748/workspace/1338898741676176280/directory/teams?fuid=1339310988336517144)を用意しています。
