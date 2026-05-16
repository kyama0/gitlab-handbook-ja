---
title: "Hacker News"
upstream_path: /handbook/marketing/developer-relations/developer-advocacy/hacker-news/
upstream_sha: 1e195b58b9f249ff10bd0e705106c320fee86141
translated_at: "2026-05-14T00:00:00Z"
translator: claude
stale: false
lastmod: "2026-05-01T10:44:51-04:00"
---

## 概要

Hacker News は重要なソーシャルチャネルです。GitLab の構造、バリュー、製品ビジョン、その他の繊細なブログ記事や記事に言及するスレッドは重要として扱う必要があります。一方、Hacker News のフロントページに到達した GitLab に関する投稿は、重要かつ緊急として扱う必要があります。

Hacker News の投稿は、ウェブサイトへのトラフィック、コンテンツへのバックリンク、そして最も重要なのは、製品とプロセスへの貴重なフィードバックを生成できるため重要です。一例として、2022年1月の[このページに関する Hacker News 投稿](https://news.ycombinator.com/item?id=30003221)は、私たちのチームに貴重なフィードバックをもたらしました。

Hacker News での GitLab への言及は [#hn-mentions](https://gitlab.slack.com/messages/hn-mentions) Slack チャンネルで追跡されます。Hacker News のフロントページに到達した GitLab に関する投稿は、[#dev-advocacy-team](https://gitlab.slack.com/messages/dev-advocacy-team) で共有される通知を生成します。詳細は[自動化ドキュメント](/handbook/marketing/developer-relations/developer-advocacy/hacker-news/#automation)を参照してください。

## 何がうまくいくか

2020年に、GitLab に関する新しい投稿への興味を生み出すために複数の実験を実施しました。投稿がフロントページに到達するための鍵はコンテンツそのものであることを学びました。投稿が共有されるタイミングも役立つ場合がありますが、自分のコンテンツを投稿しないため、私たちのコントロール外です。Hacker News コミュニティからのオーガニックな興味なしに調整された応答を作成することは、投稿への興味を生み出すには効果的ではありませんでした。コンテンツが成功への鍵です。

GitLab に関するどのような種類の投稿が Hacker News のフロントページに到達したかを確認するために監査を実施しました。Hacker News で最も興味を引いた GitLab 関連のコンテンツの種類は次のとおりであることがわかりました:

- 資金調達、買収、機能のコアへの移行に関するアナウンスなどの主要な企業ニュース
- リリースポスト
- Gnome、KDE、WikiMedia などのオープンソースプログラムメンバーからのアナウンスやその他のオープンソース重視のコンテンツ
- 技術ブログ投稿
- ハンドブックページやリモートワークレポートを含むリモート重視のコンテンツ

ソーシャルメディアで公開するコンテンツの種類を検討する際、これらはすべて Twitter、LinkedIn、関連する Slack コミュニティ、その他のソーシャルチャネルで共有するのに適した投稿やページの種類です。

## リリース日

GitLab リリースポストは、Hacker News でよく好成績を収めます。投稿が[毎月](/handbook/engineering/releases/)リリースされることがわかっているため、これらの投稿には常に[コミュニティ対応](/handbook/marketing/developer-relations/developer-advocacy/community-response/)を計画する必要があります。リリース日には、対応を組織化するために次の手順に従います:

1. Director, Developer Advocacy が、リマインダーとして招待状の本文にハンドブックのこのセクションへのリンクを記載した、リリース日の繰り返しカレンダー招待を Developer Advocacy チームメンバーに送信します。
1. リリースポストが Hacker News フロントページに到達した通知が "Hacker News Front Page" ボットによって #dev-advocacy-team Slack チャンネルに投稿された場合、Developer Advocacy チームメンバーは、プロダクトマネージャーに警告するため、すばやくそのメッセージを #product チャンネルと #release-post チャンネルに再投稿する必要があります。
1. Hacker News の投稿に質問／コメントが追加された場合、Developer Advocate はすばやく対応してコミュニティのフィードバックに応答する必要があります。
1. Developer Advocate 自身で対応できない質問／コメントについては、すばやくエキスパートを巻き込むよう動く必要があります。エキスパートを巻き込む最も効率的な方法は、対応してほしいコメントへのリンクとともに #product チャンネルに作成されたスレッド内で `@` メンションを使用してプロダクトマネージャーに通知することです。注: コミュニティのフィードバックは、GitLab の改善に取り組むエキスパートにとっても貴重なものなので、エキスパートを巻き込むことを遠慮しないでください。

[リリースポストマネージャーのスケジュール](/handbook/marketing/blog/release-posts/managers/)を含む[リリースポスト](/handbook/marketing/blog/release-posts/)に関する詳細情報は、ハンドブックでご覧いただけます。

## Hacker News での対応

GitLab に関する新しい投稿やコメントが Hacker News に追加された場合、チームメンバーは [#hn-mentions](https://gitlab.slack.com/messages/hn-mentions) Slack チャンネルでこれらの投稿に関するアラートを見つけることができます。これらをディスカッションに参加したい可能性のある他のチームメンバーや、より広い GitLab コミュニティのメンバーと共有することは歓迎されます。質問、フロントページ投稿への対応の調整、対応に関するガイダンスなどについては、[#dev-advocacy-team](https://gitlab.slack.com/messages/dev-advocacy-team) Slack チャンネルにご参加ください。

[Developer Advocacy チームメンバー](/handbook/marketing/developer-relations/developer-advocacy/)は、適切な場合に新しい投稿のコメントや質問に対応することが奨励されています。

### 対応のワークフロー

1. "Hacker News Front Page Bot" によって GitLab を参照する記事が Hacker News のフロントページにあることが通知された場合、Developer Advocate は、レビュー、コメントの監視、適切な対応を行う DRI が投稿に割り当てられていることを確認するために調整する必要があります。
1. フロントページに到達した投稿は、対応したい可能性のあるチームメンバーの間でより広く可視性を確保するために、投稿のトピックに関連する Slack チャンネルで共有する必要があります。たとえば、リモートワークのブログは [#remote](https://gitlab.slack.com/messages/remote) チャンネルで、マーケティングサイトのトラッカーに関連する投稿は [#marketing](https://gitlab.slack.com/messages/marketing) で共有する必要があります。投稿が [#dev-advocacy-team](https://gitlab.slack.com/messages/dev-advocacy-team) 以外で共有された場合は、可視性と単一の情報源を作成するために、Slack コメントを `#dev-advocacy-team` のアラートスレッドにクロスリンクする必要があります。
1. Developer Advocate は、対応が必要な言及を確認するために、1日1〜2回 [#hn-mentions](https://gitlab.slack.com/messages/hn-mentions) Slack チャンネルもレビューする必要があります。すばやく対応／リソースを提供できる場合は、個人の Hacker News アカウントを使用して [news.ycombinator.com](https://news.ycombinator.com) で返信し、Slack コメントに :white_check_mark: を残すことで返信したことを示してください。_なお、[コメントを編集できるウィンドウは 2 時間](https://github.com/minimaxir/hacker-news-undocumented#editdelete-time-limits)であり、それ以降は Hacker News のコメントを編集または削除できません。_
1. 必要に応じて、より詳細または洞察に満ちたコメントを提供できる関連エキスパートとコメントを共有することもできます。追加の入力が必要だと判断した場合は、関連する投稿やコメントを適切な Slack チャンネルで共有することでこれを行うことができます。

### Hacker News での対応のベストプラクティス

Hacker News で GitLab に関する投稿に対応する場合:

- ほぼ同じ回答を投稿せず、代わりに元の回答にリンクします。
- 複数の側面を持つコメントには、それらを分解してポイント、番号付け、引用を使用して対応します。
- 誰かが Hacker News スレッドのリンクを投稿した場合、そのスレッドを手動で監視します。[#hn-mentions](https://gitlab.slack.com/messages/hn-mentions) チャンネルの通知を待たないでください。これらは数時間遅延することがあるためです。
  - ブラウザ（macOS では `cmd+f`）で `minutes ago` を検索して、過去 1 時間の最新の投稿をハイライトします。
- コメントに対する個人的な同意・不同意や、GitLab に対する批判的かどうかに基づいて upvote/downvote しないでください。代わりに、HN は好奇心旺盛な会話に関するものなので、思慮深く実質的かどうかに基づいて投票してください。

#### Hacker News のフォーマットのヒント

[フォーマットオプションのドキュメント](https://news.ycombinator.com/formatdoc)に従い、以下の追加のヒントを参考にしてください:

1. 特定の文や考えに返信する場合、`>` を使用して返信内のそのセクションを引用し、空行を追加して、その後にコメントを記載します。
2. シェルコマンドとコードをコードブロックとしてフォーマットするには、行を 2 つのスペースでインデントします（[このコメント](https://news.ycombinator.com/item?id=33108536)に感謝）
3. 3 つ以上の URL を共有する場合は、コメントの一番下に URL のリストを記載し、`[0]`、`[1]` などのアンカーを使用することを検討してください。リストが正しくレンダリングされるためには、項目間に空行が必要です。テキストから URL を分離することで、コメントの可読性と意図が向上し、URL の重要性が下がります（[例](https://news.ycombinator.com/item?id=32155848)）。

### 説得せずに伝える

あなたのコメントは、返信している相手よりも多くの人々に読まれていることを覚えておいてください。共有する情報がそれらの人々にも役立つことを確認してください。返信が、返信している相手だけでなく、会話に関わっているすべての人にとって価値のあるものになるように努めてください。批判や否定的なフィードバックに対応する場合、敵対的または意見の相違があるコメントや観点を持っている人の考えを変えることは可能性が低いですが、あなたの返信は、単に読んで学ぶためにそこにいる人々にとって価値のあるものになる可能性があります。

Hacker News の[コメント](https://news.ycombinator.com/item?id=30006193)は、「説得せずに伝える」ことに焦点を当てるよう提案して、これをよくまとめています。コメント投稿者は次のように提案しています、「事実を明確にし、意見の相違を指摘することを確保してください。あなたの動機と推論を共有してください。理解できないこと、または複数の解釈が可能な発言があった場合は、明確化を求めてください。意見の相違をそのままにし、合意に変えようと押し付けないでください。」

## ブログコメント

ブログコメントは、[フィードバックタグ](/handbook/marketing/developer-relations/workflows-tools/forum/#tags)でフォーラムのトピックをフィルタリングすることで簡単に監視できます。

## ソーシャルメディアのガイドライン

- GitLab のコンテンツを Hacker News に投稿してはいけません。GitLab 以外の Hacker News コミュニティメンバーが投稿した方が信頼性が増します。私たちは投稿することではなく、投稿を面白くすることに集中すべきです。
- 投票検出器が作動する可能性があるため、Hacker News のストーリー／コメントへのリンクを Slack や Twitter で共有して、他の人に upvote するよう求めないでください。
- Hacker News の投稿に最初のコメントをしないでください。人々がコメントを残したり質問したりできるようにしてください。
- 「PeopleOps」のような企業用語の使用は避けてください。
- 常に Hacker News コミュニティを対等な仲間として扱ってください。常に謙虚で感謝の気持ちを持って対応してください。
- 自分でコメントする場合は、興味深く関連性のあるものであることを確認してください。
- Hacker News の[ガイドライン](https://news.ycombinator.com/newsguidelines.html)と [FAQ](https://news.ycombinator.com/newsfaq.html)を確認してください。
- Hacker News の動作とモデレーションルールを理解するために、[A List of Hacker News's Undocumented Features and Behaviors](https://github.com/minimaxir/hacker-news-undocumented) に精通してください。
- 返信のトーンをチェックしてください: 防御的にならず、代わりにあなたの観点を共有してください。
- 人々がまだ知らない興味深いことを教えるように努めてください。
- データポイントや直接リンクで投稿に価値を加えてください。

**注:** GitLab に関するソーシャルメディアを使用する前に、[チームメンバーのソーシャルメディアポリシーをレビュー](/handbook/marketing/team-member-social-media-policy/)してください。

## 自動化

GitLab 用に設定されたキーワードの Hacker News での言及は、Slack の [RSS アプリ](https://slack.com/help/articles/218688467-Add-RSS-feeds-to-Slack)と [https://hnrss.github.io/](https://hnrss.github.io/) からの RSS フィードを使用して監視されます。

- キーワードの言及は [#hn-mentions](https://gitlab.slack.com/messages/hn-mentions) Slack チャンネルで追跡されます。
- フロントページ通知は [#dev-advocacy-team](https://gitlab.slack.com/messages/dev-advocacy-team) Slack チャンネルに投稿されます。
