---
title: "デザインコラボレーターのプレイブック"
description: "このページは、同期および非同期のコラボレーションのためのメンタルモデルをすばやく参照するためのものです。"
upstream_path: /handbook/product/ux/collaborators-playbook/
upstream_sha: 1e195b58b9f249ff10bd0e705106c320fee86141
translated_at: "2026-05-13T00:00:00Z"
translator: claude
stale: false
lastmod: "2026-02-23T15:35:45-08:00"
---

**何のためのもの？**
このページは、同期および非同期のコラボレーションのためのメンタルモデルをすばやく参照するためのものです。デザイナー、GitLab チームメンバー、そしてより広い GitLab コミュニティの間でのコラボレーションのための共通言語を作り出すことを目的としています。コラボレーションのパターンや、苦痛を感じるポイント、行き詰まる場所、そしてどのようにして行き詰まりから抜け出すかを理解しラベル付けするために使うべきものです。これは私たちの[デザインワークフロー](/handbook/product/ux/product-designer/)ではありません。

**なぜこれが重要なのか？**
[コラボレーション](/handbook/values/#collaboration)は GitLab の重要な価値観のひとつです。GitLab では、誰もがデザイナーであり、誰もが貢献できると信じています。これは、UX 部門がデザインの謙虚なファシリテーターであることを意味します。デザインチームは、[デザイン思考](https://en.wikipedia.org/wiki/Design_thinking)のマインドセット、手法、ツールを活用し共有することで、GitLab 全体（そして広範なコミュニティ）にわたるコラボレーションをサポートできます。

## メンタルモデル

### 2歩前進、1歩後退のデザイン

GitLab では[最小限の価値ある変更](/handbook/product/product-principles/#the-minimal-valuable-change-mvc)（MVC）を使ってリリースします。この文脈でのデザインは、大きな全体像と、そこに到達するためのステップの両方を考慮することが重要なため、新人にとってはしばしば混乱を招きます。この二項対立に対処するため、まず中期から長期のビジョンを考え、それから（愛されるかたちで）体験のスコープを縮小し、実装をより素早く行えるようにデザインします。言い換えれば、2歩前進して1歩後退するようにデザインします。

**アクション**

- このモデルをチームで使い、ビジョンを一連の小さな（MVC）Issue に分解しましょう

### 発散的思考と収束的思考

幼い頃から、私たちはできるだけ早く解決策に飛びつくよう訓練されることが多々あります。これは、すべての選択肢を十分に探る時間を取ることを妨げてしまいます。発散的思考と収束的思考を理解し活用することで、この課題を克服できます。これらは創造的な問題解決の基礎となる2つのモードです。

- 発散的思考（広く考える）: あまり制約を設けずに、たくさんの異なるアイデアを生み出し、選択肢を探索します。
- 収束的思考（焦点を絞る）: 選択肢やアイデアを振り返り、ユニークな方法で組み合わせ、分析し、（制約を念頭に置いて）解決策に収束します。

![img](https://pbs.twimg.com/media/Bmn3FOVCQAAt_r7.jpg)

**アクション**

- [短い動画を見る](https://www.youtube.com/watch?v=xjE2RV6IQzo)
- チームで発散すべき時か収束すべき時かを話し合いましょう
- 同期型の[コラボレーティブサイクル](https://play.vidyard.com/riqHqfWV8XFpXM9c1vYEEG)を活用しましょう
- 発散スレッドのテキストを要約し、解決策への収束を促しましょう（[例](https://gitlab.com/gitlab-org/gitlab-design/-/issues/817#note_335745932)）

### 抽象化のはしご

私たちは孤立してデザインすることはできません。私たちが下すすべての決定は、より広範なシステムの文脈の中で行われます。最高の仕事をするためには、システムとその構成要素の間でズームインとズームアウトを行う必要があります。残念ながら、人間はワーキングメモリにいつでも 5（プラスマイナス 2）個の情報しか保持できません（[認知負荷](https://www.mindtools.com/aqxwcpa/cognitive-load-theory)、[ミラーの法則](https://lawsofux.com/millers-law/)を参照）。したがって、この制限を管理するために、異なるレベルの抽象度で考える必要があります。抽象化のはしごは、現在自分がどの抽象度のレベルで取り組んでいるかを認識するのに役立つメンタルモデルです。「なぜ？」または「それはどういう意味？」と尋ねることで、はしごを上に登れます（より抽象的に）。「それはどう機能するの？」または「例を挙げてくれる？」と尋ねることで、はしごを下に降りられます。

**例:**

- 非常に抽象的: *「これは私の通勤方法です」*
- 中程度に抽象的: *「これは私の個人用交通機器です」*
- 具体的: *「これは自転車です」*

![img](https://miro.medium.com/max/1024/0*Z4Xl09fXVXepGCGD.png)

**アクション**

- 「[Up and Down the Ladder of Abstraction](https://medium.com/@tombarrett/up-and-down-the-ladder-of-abstraction-cb73533be751)」を読みましょう
- 抽象化のはしごを登るために「[5 Why エクササイズ](https://toolbox.hyperisland.com/the-5-whys)」を使いましょう
- 抽象化のはしごを降りるためにスケッチやプロトタイプを使いましょう

## リソース

- [Salesforce Workdifferently](https://www.salesforce.com/workdifferently/)
- [Salesforce Workdifferently: メソッドカード](https://www.salesforce.com/content/dam/web/en_us/workdifferently/documents/resources-methodcards-all.pdf)
- [IBM enterprise design thinking](https://www.ibm.com/design/thinking/)

## 協働的なエクササイズ

デザイナーとして、私たちは一般的にステージグループに組み込まれています。デザインを生み出す過程で、エンジニアリングやプロダクトのカウンターパートをアイデア出しのプロセスに含めることが役立つことがあります。協働的なエクササイズは、この目的にとても有用なことがあります。チーム内でこうしたエクササイズを定期的に実施することで、信頼を築き、賛同を得るのに役立ちます。また、デザインプロセスの後半ではなく早い段階で、アイデアや考慮すべき事柄を浮かび上がらせるのにも役立ちます。

私たちはグローバルに分散しているため、ゴールや望ましい成果に応じて、非同期または同期の協働エクササイズのどちらかを選ぶとよいでしょう。

以下は、デザインプロセスのどの段階にいるかで整理した、チームが実施したエクササイズの一部です。

### プロダクトの方向性とビジョン

プロダクトの方向性とビジョンを定義するときには、チームがアイデアをレビューし、自分のアイデアも追加できる非同期ボードをまとめておくと有用なことがあります。チームによっては、プロダクト方向性ワークショップを実施しているところもあり、ニーズに応じて[広範に](https://www.figma.com/board/vNxxMxNDcD9LgcJONuqpZt/GitLab-Duo-Chat-product-direction?node-id=0-1&t=1wZYG52QM1e72xWV-1)、または[より狭く焦点を絞って](https://www.figma.com/board/ito0oanIxHNL42HH2IWIxe/AI-Framework-small-sync?node-id=0-1&t=5AurIwjIdhrAK149-1)実施できます。

[高度エクササイズ](https://gitlab.com/gitlab-org/monitor/respond/-/issues/60)も別のアプローチです。高度エクササイズでは、衛星レベル、飛行機レベル、地上レベルでフィードバックを求めます。このエクササイズは、戦略と特定のデザインの詳細の両方について同時にフィードバックを集めるのに役立ちます。

### アイデア出し

デザインプロセスのアイデア出しの段階にいるなら、非同期の[アイデア出しワークショップ](https://www.figma.com/board/WATUtNyV1Vlsz9DIVOMDER/Measure-AI-accuracy?node-id=0-1&t=iPQSAnQOeGfH0d6M-1)を検討するとよいでしょう。チームで秤にかけたい複数の選択肢がある場合、同期の[ライトニング・ディシジョン・ジャム](https://about.gitlab.com/blog/2022/01/19/collaboration-techniques-for-distributed-teams/)がチームを前進する方向で一致させるのに役立ちます。

### 特定のデザインフィードバック

デザインの方向性を決め、チームに同期で質問する場を与えたい場合は、「何でも聞いてください」スタイルのミーティングが役立ちます。このタイプのセッションを実施する際は、ミーティングの前にデザインの方向性を共有して、全員にレビューする機会を与え、最良のフィードバックを集められるようにしましょう。

あるいは、よくある[混乱](https://www.figma.com/board/1ikV7tqYaPV1g4gvWr4QbQ/AI-Settings-discussion-2024-04-25?node-id=0-1&t=47R6xGzEbcaJhx8g-1)の領域や、提案の[技術的実現可能性](https://www.figma.com/board/WATUtNyV1Vlsz9DIVOMDER/Measure-AI-accuracy?node-id=0-1&t=4rChZf7wyE7d6zn0-1)についてフィードバックがほしい場合は、チームがレビューする非同期ボードをまとめておくと、こうした会話を始める良い方法になります。
