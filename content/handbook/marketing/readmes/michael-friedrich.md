---
title: "Michael 'dnsmichi' Friedrich README（Principal Developer Advocate）"
description: "GitLab の Principal Developer Advocate である Michael 'dnsmichi' Friedrich とのコラボレーションについてご紹介します。"
job: "Principal Developer Advocate"
upstream_path: /handbook/marketing/readmes/michael-friedrich/
upstream_sha: 1e195b58b9f249ff10bd0e705106c320fee86141
translated_at: "2026-05-14T00:00:00Z"
translator: claude
stale: false
lastmod: "2026-03-25T21:10:14+01:00"
---

このページは、私がどのように働き、どう連絡を取り、どこで一番役に立てるかを理解してもらうためのものです。私は意図的にオープンで、フィードバックを受け入れる姿勢でいます。

このページへの貢献は、マージリクエストでお願いします。

> **透明性に関する注記:** この README は、読みやすさと構成を改善しつつ、私自身の声を保つために [GitLab Duo Agentic Chat](https://docs.gitlab.com/user/gitlab_duo_chat/agentic_chat/) と協働して編集しました。

---

## TL;DR – 私と働くには

- 私は **非同期ファースト** で働きます。アドホックな会議よりも、明確なコンテキストのある Issue/Epic/ハンドブックのドキュメントを基本にします。
- 私が他のことに取り組んでいる間でも他の人が続けられるよう、**ロー・コンテキストな書面コミュニケーション**を好みます。
- 私のフォーカス: **GitLab Duo / Agent Platform、エージェント型 AI、DevSecOps 効率、組込み DevSecOps**。AI が実際の制約（レガシーコード、遅いパイプライン、エッジ／組込み、主権）と出会う領域で巻き込んでください。
- **フォーカスタイムとエネルギー** を守ります（フォーカスブロック、出張＋休養）。インパクトを持続させるために、**No** と言ったり、スコープを下げたり、リダイレクトしたりします。
- **率直で親切なフィードバック** を大切にしており、私も率直にお返しします。私の情熱や率直さがうまく伝わっていない場合は教えてください。
- すべての質問や DM には答えられません。重要なことであれば、**Issue を開いて私を @-mention** してください。

---

## 自己紹介

私は **オーストリアの Linz** で育ち、コンピュータの仕組みに魅了されてきました。その好奇心が **ハードウェア／ソフトウェアシステム工学** へと私を導き、**Vienna 大学** でのネットワークや DNS の仕事、そして **11 年間のオープンソース監視プロジェクトのメンテナンス** へとつながりました。その過程で、ソフトウェアが本番環境でどう動くか、CVE が本当は何を意味するのか、そして健全なコミュニティと正直なフィードバックがいかに重要かを学びました。

オープンソースへの情熱は 2012 年に私を **ドイツのニュルンベルク** へ導き、今もそこの郊外に住んでいます。**2020 年 3 月**、私は **GitLab** に入社し、オール・リモートの冒険を始めました。

現在、私は **GitLab の Principal Developer Advocate** として、以下を専門にしています。

- GitLab Duo と Duo Agent Platform を使った **本番環境対応のエージェント型 AI ユースケース**。
- CI/CD、セキュリティ、開発者ワークフローにおける **DevSecOps 効率**。
- **組込み DevSecOps とエッジ研究** – Raspberry Pi、NVIDIA Jetson、Arduino、ハードウェアインザループ CI。

実際のお客様の制約（レガシーコード、遅いパイプライン、厳しい環境、エッジデバイス）を、講演、デモ、コンテンツ、製品フィードバックに変換し、製品と GTM 戦略に貢献しています。

仕事以外では、LEGO モデルを組み立てたり、組込みハードウェアでのホームオートメーション、自然探索、旅行を楽しんでいます。私についての詳細: https://dnsmichi.com/about/

### バイオグラフィーとヘッドショット

複数の長さと言語による詳細なバイオグラフィー、そしてプロフェッショナルなヘッドショットは、[この公開ドキュメント](https://docs.google.com/document/d/1UZVKbMgB-3dvOdahxpvSm94KBP6vu4fAHex937hlzQQ/edit#heading=h.2eg84apkwfv7) で利用できます。これは、イベント主催者が通常必要とするものです。

---

## 私の仕事の価値観

私は [GitLab の価値観](/handbook/values/) に従い、特に以下を大切にしています。

- **[Assume positive intent（善意を前提とする）](/handbook/values/#assume-positive-intent)**。誰もが正しいことをしようとしていると信じます。これにより議論が落ち着き、生産的になります。
- **[透明性](/handbook/values/#transparency) と SAFE。** デフォルトで公開の場で働き、決定を文書化し、コンテキストを共有しつつ、[SAFE](/handbook/legal/safe-framework/) の境界を尊重します。
- **[Managers of one](/handbook/leadership/#managers-of-one)。** アイデア、MR、アクションを提案するために許可を待ちません。優先順位を上げる必要がある場合は、**直接私に尋ね**、Issue で私をタグ付けしてください。
- **[Say why, not just what（何をするかだけでなく、なぜするかを伝える）](/handbook/values/#say-why-not-just-what)。** 決定の背後にある _なぜ_ とコンテキストを理解することで、アプローチを検証し、より良い提案ができます。他の人が反論、改善、貢献できるよう、推論を説明しようと努めています。
- **[Handbook first](/handbook/about/handbook-usage/#why-handbook-first)。** ハンドブックを **唯一の情報源** として扱い、欠けている情報は Issue/MR で修正します。
- **誰もがコントリビュートできる。** 複雑なトピック（技術的な問題やブロッカー、製品機能、ハンドブックの更新など）を誰にでも分かるように分解します。[正直で実行可能なフィードバック](/handbook/values/#give-feedback-effectively) が大好きです – 特に成長を助ける 1:1 でのフィードバック。
- **家族と友人が第一、仕事は第二。** 私は自分の仕事に情熱を持っていますが、柔軟な勤務時間と PTO、そしてリモートワークの自由を楽しんでおり、家族と友人を第一にすることができています。

### エネルギーとフォーカスの管理方法

- **フォーカスブロック** と **「お願いがあるとき以外はノーミーティング」** の時間を使います。これらをまたいでスケジュールする前に確認してください。
- **重い出張／イベント期間と前後の休養** を組み合わせます。そうした時期の前後は、応答スピードが変わることがあります。
- 文字通りデスクの上に [アイゼンハワーマトリックス](https://slab.com/blog/eisenhower-matrix/) を置き、時間をどこに投資するかを選ぶのに使っています。
- 私がオーバーコミットしていたり、完璧主義になっていたり、手を広げすぎているのを見かけたら、率直に教えてもらえるとありがたいです。

---

## 私と働くには

### コミュニケーション

- **非同期ファースト。** 同期通話よりも、GitLab Issue/Epic、GDoc、Slack での議論を好みます。
  - 私がオフラインだったり、他のタスクに集中している間でも他の人が続けられるよう、すべての必要なコンテキストを提供する [ロー・コンテキストなコミュニケーション](/handbook/communication/#low-context) を使ってください。
  - [お互いの時間を尊重し](/handbook/communication/#be-respectful-of-others-time)、Slack で `@here/@channel` メンションを避けてください。
- **私的より公開。**
  - 他の人が貢献できるよう、[公開 Slack チャンネル](/handbook/communication/#use-public-channels) や Issue で尋ねてください。
  - プライベート／機密の話題には DM を使ってください。その後、会話を公開チャンネル／Issue に移すよう私から依頼することがあります。
- **応答の期待値。**
  - メールトリアージは苦手で、複数プラットフォームから多くの DM を受け取っています。
  - DM で返事がない場合は、**Issue を開くか更新して、私を @-mention** してください。そこで優先的に対応します。
  - 社外フォローアップでは、リマインダーまたはトラッキング Issue が大いに役立ちます。

### 会議とカレンダー

- **タイムゾーン。**
  - 私は CET にいて、主に **AMER と EMEA** の重なりをカバーします。
  - 推奨される会議時間帯: **CET 13:30〜18:30**（太平洋時間 4:30〜9:30）。
  - 朝は集中作業や個人の用事のために確保しています。
- **アジェンダ必須。**
  - [アジェンダがなければ参加なし](/handbook/communication/#external-communication): アジェンダがなければ、招待を受け入れないことがあります。

- **柔軟な招待。**
  - 私のカレンダーの招待は GitLab チームメンバーが編集可能です。より良い時間に移動してください。
  - 直前のリスケも問題ありません。常に別の意味のある仕事を見つけます。
- **定期的な同期。**
  - 定期的なコーヒーチャットやトピック別の 1:1 が役立つなら、継続的なノート用のアジェンダドキュメントと共に提案してください。

### クロスファンクショナルなコラボレーション

**私の関与に最適なトピック:**

- **GitLab Duo / Duo Agent Platform / エージェント型 AI**
  - ユースケース設計、プロンプト、フロー、ガードレール、開発者体験。
  - 特に複雑な環境において、「現実的にどこまで可能か？」という質問対誇張への対応。
- **モダナイゼーションとレガシーコード**
  - C/C++、Java/Spring、COBOL、その他の言語をリファクタリングまたはマイグレートするための GitLab Duo の活用。
- **組込み／エッジ／ハードウェアインザループ**
  - Raspberry Pi、NVIDIA Jetson、Arduino などでの GitLab Runner と CI。
  - CI/CD、オブザーバビリティ、物理ハードウェアの組み合わせ。
- **講演、ワークショップ、デモ**
  - ストーリーライン、ライブデモ設計（「壊れるかもしれない」シナリオを含む）、5 分の成功モーメント。
- **DevRel とイベント戦略**
  - ナラティブ、ターゲットペルソナ、AI と組込みの角度、製品／フィールド／コミュニティの点と点をつなぐ。

不確かな場合は尋ねてください。より良い DRI にリダイレクトしたり、Issue でニーズを捉える方法を提案することがあります。

私のクロスファンクショナルな関与の例としては、[競合調査](https://internal.gitlab.com/handbook/marketing/developer-relations/developer-advocacy/competitive-research/)、AI SME（[Slack の `#sme-ai`](https://gitlab.enterprise.slack.com/archives/C05GK6M7FBQ)）、[GitLab Duo Agent Platform のローンチサポート](https://gitlab.com/gitlab-com/marketing/developer-relations/developer-advocacy/developer-advocacy-meta/-/issues/878)、[DevRel の FY27 イベント戦略](https://gitlab.com/groups/gitlab-com/marketing/developer-relations/-/epics/527) などがあります。

### フィードバックと DIB

- **率直で具体的なフィードバック** をありがたく思います。理想的にはまずプライベートで、例を添えてください。
- 私はとても熱心で [率直](/handbook/values/#directness) になることがあります。何かが押し付けがましく感じたり、威圧的に感じたら教えてください – 改善したいです。
- ダイバーシティ、インクルージョン、ビロンギングを深く大切にしています。[Global Voices TMRG](/handbook/company/culture/inclusion/tmrg-tmag/tmrg-global-voices/) と [Women TMRG メンターシッププログラム](/handbook/company/culture/inclusion/tmrg-tmag/tmrg-gitlab-women/mentorship-program/) でアクティブに活動しています。

---

## 連絡方法

私はほぼどこでも `dnsmichi` で通っています。

- **Slack:** [GitLab Slack プロファイル](https://gitlab.enterprise.slack.com/team/UUCF3K61G)
- **GitLab.com:** [https://gitlab.com/dnsmichi](https://gitlab.com/dnsmichi)
- **GitLab フォーラム:** [https://forum.gitlab.com/u/dnsmichi/summary](https://forum.gitlab.com/u/dnsmichi/summary)
- **ソーシャル＆ウェブサイト:** [https://dnsmichi.com/about/](https://dnsmichi.com/about/) と [https://dnsmichi.com](https://dnsmichi.com)

メールとカレンダーは、**Michael Friedrich** または **mfriedrich** で検索してください。

[LinkedIn](https://www.linkedin.com/in/dnsmichi/) でのつながりや、あなたの仕事（採用、製品／エンジニアリングのインサイト、マーケティングなど）の増幅も喜んで行います。ソーシャルメディアのガイダンスについては [Developer Advocacy on Social Media](/handbook/marketing/developer-relations/developer-advocacy/social-media/) を参照してください。

私の個人連絡先は社内では見られますが、外部で共有しないでください。フォームに電話番号が必要な場合は、[会社の電話番号](/handbook/communication/#company-phone-number) を使ってください。Slack が機能しない緊急インシデントの場合は、私の個人モバイルにテキストできます。

---

## 強みと成長領域

### 強み

- **速い学習者で適応力がある。** 新しい領域（AI、組込み、eBPF）に飛び込み、それを DevSecOps ワークフロー、お客様のニーズ、GTM 戦略に結びつけることを楽しんでいます。
- **システム思考とコネクターの役割。** お客様、フィールド、製品、UX、エンジニアリングを一貫したナラティブと提案にまとめるのが得意です。
- **公の場での学習。** 実験や質問を、他の人が再利用できるブログ、講演、ワークショップ、デモ、ドキュメントに変えます。
- **チームプレイヤー。** 他の人のブロック解除（レビュー、デバッグ、Duo の採用）と称賛の共有を優先します。

### 成長領域

- **オーバーコミット。** 今でも「はい」と言いすぎることがあります。アイゼンハワーマトリックスを使い、時には No と言ったり、スコープを下げたり、リダイレクトしたりします。
- **率直さと情熱。** 私の熱意は強く感じられることがあります。提案を指示ではなく招待として枠組みすることに取り組んでいます。
- **メール／DM の過負荷。** すべての DM やメールには対応できません。明確なコンテキストのある Issue が私に届く最良の方法です。
- **完璧主義。** 「すべてを記述する」ドキュメントよりも [最小限の価値ある変更](/handbook/product/product-principles/#the-minimal-valuable-change-mvc) とイテレーションを好むよう、自分自身を訓練しています。

### 私の学び方

私が専門家ではない領域で、誰かが助けを求めて、実際の解決すべき問題を提供してくれるとき、私はうまく成長します。たとえば、お客様から COBOL コードのモダナイゼーションについて尋ねられたことが、GitLab Duo Agent Platform を活用して COBOL を学び、マイグレーション戦略を特定するきっかけになりました。

また、予想外のことが起こりうるライブデモも大好きで、開発者が日常的に行うのと同じように、自分の経験を活用してデバッグし前進することが求められます。これは真正性と信頼を生み、ユーザーが直面するかもしれない問題について多くを学べます。多くのコンテンツアイデアの源にもなります。

私の GitLab 機能に関する知識は、[GitLab コミュニティフォーラム](https://forum.gitlab.com/u/dnsmichi/activity) でユーザーを助けたり、Slack で AI SME としてフィールドチームメンバーを助けたりすることから継続的に得られています。また [GitLab ハンドブックのバックエンドのメンテナンス](https://gitlab.com/groups/gitlab-com/content-sites/-/group_members?with_inherited_permissions=exclude) にも携わっており、安定稼働が必要な本番環境の運用を加えています。

---

## コンテンツとリソース

私の考え方や働き方を見たい方には、以下が良い出発点です。

- **講演:** https://dnsmichi.com/talks/

  - [Developer Advocacy のコンテンツライブラリのメンテナンス対象講演](/handbook/marketing/developer-relations/developer-advocacy/content/#maintained-talks) で確認できます。

- **ポートフォリオ:** https://dnsmichi.com/portfolio/
- **GitLab ブログ記事:** https://about.gitlab.com/blog/authors/dnsmichi/
- **個人ブログ（年次の振り返りと実験）:** https://dnsmichi.com

オール・リモートの振り返り:

1. ブログ: [One year worth for ten: My 6th year at GitLab](https://dnsmichi.com/2026/03/02/one-year-worth-for-ten-my-6th-year-at-gitlab/)
1. ブログ: [My 5th Year at GitLab: Developer Advocate Journey, AI Adventures, and Finding Balance](https://dnsmichi.at/2025/03/02/my-5th-year-at-gitlab-developer-advocate-journey-ai-adventures-and-finding-balance/)
1. ブログ: [Michi, Limited Edition - 4 years all-remote at GitLab](https://dnsmichi.at/2024/03/02/michi-limited-edition-4-years-all-remote-at-gitlab/)
1. ブログ: [Three years all-remote at GitLab: Know the unknown unknowns (growth, life, and work)](https://dnsmichi.at/2023/03/02/three-years-all-remote-at-gitlab-know-the-unknown-unknowns-growth-life-work/)
1. ブログ: [2 years all-remote and my 2022 vision](https://dnsmichi.at/2022/03/02/2-years-all-remote-and-2022-vision/)
1. ブログ: [My 1st year all-remote at GitLab](https://dnsmichi.at/2021/03/02/my-1st-year-all-remote-at-gitlab/)

---

## 読んでくれてありがとう

この README を読む時間を取ってくれてありがとうございます。もっと知りたい場合や、背景にあるイースターエッグを見つけたい場合は、[私のオール・リモート ワークスペース](https://dnsmichi.com/all-remote-workspace/) を見て、お気軽にコーヒーチャットをスケジュールしてください。
