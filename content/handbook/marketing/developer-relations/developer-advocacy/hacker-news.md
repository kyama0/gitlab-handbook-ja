---
title: "Hacker News"
upstream_path: /handbook/marketing/developer-relations/developer-advocacy/hacker-news/
upstream_sha: aadd07ec986f77b5bd259fb54f0f41d1f3397544
lastmod: "2026-06-16T12:33:40-04:00"
translated_at: "2026-06-18T05:33:51Z"
translator: claude
stale: false
---

## 概要

Hacker News は重要なソーシャルチャネルです。GitLab の組織構造、バリュー、製品ビジョン、その他のセンシティブなブログ記事や記事に言及するスレッドは重要として扱い、Hacker News のフロントページに到達した GitLab に関する投稿は重要かつ緊急として扱う必要があります。

Hacker News の投稿は、私たちのウェブサイトへのトラフィック、コンテンツへのバックリンク、そして何より、製品とプロセスへの貴重なフィードバックを生む可能性があるため重要です。一例として、2022 年 1 月の [このページに関する Hacker News の投稿](https://news.ycombinator.com/item?id=30003221) は、私たちのチームに貴重なフィードバックをもたらしました。

Hacker News での GitLab への言及は [#hn-mentions](https://gitlab.slack.com/messages/hn-mentions) Slack チャンネルで追跡されています。Hacker News のフロントページに到達した GitLab に関する投稿は通知を生成し、[#developer-advocacy](https://gitlab.slack.com/messages/developer-advocacy) で共有されます。詳細は [自動化のドキュメント](/handbook/marketing/developer-relations/developer-advocacy/hacker-news/#automation) を参照してください。

## どのような投稿が高評価を得るか

2020 年、GitLab に関する新しい投稿への関心を高めるために複数の実験を行いました。投稿がフロントページに到達するための鍵はコンテンツそのものであることが分かりました。投稿が共有されるタイミングも助けにはなりますが、私たちは自分たちのコンテンツを自ら投稿しないため、コントロールの範囲外です。Hacker News コミュニティからのオーガニックな関心がない状態で対応をコーディネートしても、投稿への関心を引き出す効果は得られませんでした。コンテンツが成功の鍵です。

GitLab に関するどのような種類の投稿が Hacker News のフロントページに到達したかを把握するために監査を行いました。その結果、Hacker News で最も関心を集めた GitLab 関連コンテンツの種類は次のとおりであることが分かりました。

- 資金調達、買収、機能の Core への移行に関するアナウンスといった、企業に関する主要なニュース
- リリースポスト
- Gnome、KDE、WikiMedia などのオープンソースプログラムメンバーからのアナウンスをはじめとする、オープンソースに焦点を当てたコンテンツ
- 技術系のブログ記事
- ハンドブックページや Remote Work レポートを含む、リモートに焦点を当てたコンテンツ

ソーシャルメディアで公開するコンテンツの種類を検討する際、これらはいずれも Twitter、LinkedIn、関連する Slack コミュニティ、その他のソーシャルチャネルで共有するのに適した投稿・ページの種類です。

## リリース日

GitLab のリリースポストは Hacker News で頻繁に良い反応を得ます。リリースポストが [毎月](/handbook/engineering/releases/) リリースされることが分かっているため、これらの投稿には常に [コミュニティレスポンス](/handbook/marketing/developer-relations/developer-advocacy/community-response/) を計画すべきです。リリース日には、対応を組織化するために次のステップに従います。

1. Director, Developer Advocacy が、招待状の本文にハンドブックのこのセクションへのリンクをリマインダーとして記載した、リリース日用のリピート型カレンダー招待を Developer Advocacy チームメンバーに送付します。
1. リリースポストが Hacker News のフロントページに到達した旨の通知が「Hacker News Front Page」ボットから #developer-advocacy Slack チャンネルに投稿されたら、Developer Advocacy のチームメンバーは、プロダクトマネージャーに知らせるため、すぐにそのメッセージを #product チャンネルと #release-post チャンネルに再投稿してください。
1. Hacker News の投稿に質問やコメントが追加されたら、Developer Advocate はすぐに対応し、コミュニティのフィードバックに応じます。
1. Developer Advocate 自身では対応できない質問やコメントについては、すぐに動いて専門家を巻き込みます。専門家を巻き込む最も効率的な方法は、#product チャンネル内に作成したスレッドで、対応すべきコメントへのリンクとともに `@` メンションでプロダクトマネージャーに通知することです。注: コミュニティのフィードバックは GitLab の改善に取り組む専門家にとっても価値があるため、専門家を巻き込むことを遠慮しないでください。

[リリースポスト](https://docs.gitlab.com/development/documentation/release_notes/) に関する詳細はドキュメントで確認できます。

## Hacker News での対応

GitLab に関する新しい投稿やコメントが Hacker News に追加されると、チームメンバーは [#hn-mentions](https://gitlab.slack.com/messages/hn-mentions) Slack チャンネルでそれらに関するアラートを確認できます。ディスカッションに参加したい他のチームメンバーや、より広い GitLab コミュニティのメンバーと共有することも歓迎します。質問、フロントページ投稿への対応の調整、対応に関するガイダンスなどについては、[#developer-advocacy](https://gitlab.slack.com/messages/developer-advocacy) Slack チャンネルにご参加ください。

[Developer Advocacy チームメンバー](/handbook/marketing/developer-relations/developer-advocacy/) は、適切な場合に新しい投稿のコメントや質問に対応することを推奨されています。

### 対応のワークフロー

1. 「Hacker News Front Page Bot」から、GitLab に言及した記事が Hacker News のフロントページに表示されている旨のアラートを受け取ったら、Developer Advocate は、レビュー、コメントの監視、そしてそれに応じた対応を行う DRI が投稿に割り当てられるよう調整する必要があります。
1. フロントページに到達した投稿は、対応したい可能性のあるチームメンバーが目にしやすいよう、投稿のトピックに関連する Slack チャンネルで共有すべきです。たとえば、リモートワークのブログは [#remote](https://gitlab.slack.com/messages/remote) チャンネルで、マーケティングサイトのトラッカーに関連する投稿は [#marketing](https://gitlab.slack.com/messages/marketing) で共有します。投稿を [#developer-advocacy](https://gitlab.slack.com/messages/developer-advocacy) 以外で共有した場合は、可視性と単一の情報源の確立のために、Slack のコメントを `#developer-advocacy` のアラートスレッドにクロスリンクしてください。
1. Developer Advocate は、対応が必要な言及を確認するために、1 日 1 〜 2 回 [#hn-mentions](https://gitlab.slack.com/messages/hn-mentions) Slack チャンネルもレビューする必要があります。素早く返信やリソースを提供できる場合は、個人の Hacker News アカウントを使って [news.ycombinator.com](https://news.ycombinator.com) で返信し、Slack のコメントに :white_check_mark: を残して返信済みであることを示してください。_なお、[コメントを編集できるウィンドウは 2 時間](https://github.com/minimaxir/hacker-news-undocumented#editdelete-time-limits) で、それ以降は Hacker News のコメントを編集・削除することはできません。_
1. 必要に応じて、より詳細または洞察に富んだコメントを提供できる関連する専門家とコメントを共有することもできます。追加のインプットが必要だと判断した場合は、関連する投稿やコメントを適切な Slack チャンネルで共有すれば良いでしょう。

### Hacker News で対応する際のベストプラクティス

Hacker News で GitLab に関する投稿に対応する際は:

- ほぼ同じ回答を繰り返し投稿しない。代わりに元の回答にリンクします。
- 複数の論点を含むコメントには、論点を分解し、ポイント、番号付け、引用を使って対応します。
- 誰かが Hacker News のスレッドリンクを投稿した場合は、そのスレッドを手動で監視してください。[#hn-mentions](https://gitlab.slack.com/messages/hn-mentions) チャンネルの通知は数時間遅れることがあるため、待たないでください。
  - ブラウザで `minutes ago` を検索（macOS では `cmd+f`）して、過去 1 時間の最新の投稿をハイライトします。
- コメントへの個人的な賛否や、GitLab に対して批判的かどうかに基づいて upvote/downvote しないでください。代わりに、HN は好奇心に満ちた会話の場であるため、思慮深く実質的かどうかに基づいて投票してください。

#### Hacker News のフォーマットのヒント

[フォーマットオプションのドキュメント](https://news.ycombinator.com/formatdoc) に従い、加えて次のヒントも参考にしてください。

1. 特定の文や考えに返信する場合は、`>` を使って返信内でその部分を引用し、空行を入れた後にコメントを書きます。
2. シェルコマンドやコードをコードブロックとしてフォーマットするには、行頭を半角スペース 2 つでインデントします（[このコメント](https://news.ycombinator.com/item?id=33108536) に感謝）
3. 2 つを超える URL を共有する場合は、コメント末尾に URL のリストを置き、`[0]`、`[1]` などのアンカーを使うことを検討してください。リストが正しくレンダリングされるためには、各項目の間に空行が必要です。URL をテキストから分離することで、コメントの可読性と意図が高まり、URL の主張は控えめになります（[例](https://news.ycombinator.com/item?id=32155848)）。

### 説得せずに伝える

あなたのコメントは、あなたが返信している相手よりも多くの人々に読まれていることを忘れないでください。共有する情報がそれらの人々にとっても役立つようにしてください。返信が、返信している相手だけでなく、会話に関わるすべての人にとって価値のあるものになるよう努めてください。批判や否定的なフィードバックに対応する場合、敵対的または相容れないコメントや視点を持つ人の考えを変えることは難しいですが、あなたの返信は、単に読んで学ぶためにそこにいる人々にとって価値あるものになり得ます。

Hacker News のある [コメント](https://news.ycombinator.com/item?id=30006193) は、「説得せずに伝える」ことに集中するよう提案し、これを上手くまとめています。コメント投稿者はこう提案しています。「事実を明確にし、意見の相違点を指摘してください。自分の動機と推論を共有してください。理解できないこと、または複数の解釈が可能なことを誰かが言ったときは、明確化を求めてください。意見の相違はそのままにし、無理に合意へ持っていこうとしないでください。」

## ブログのコメント

ブログのコメントは、フォーラムのトピックを [フィードバックタグ](/handbook/marketing/developer-relations/workflows-tools/forum/#tags) でフィルタリングすることで簡単に監視できます。

## ソーシャルメディアのガイドライン

- GitLab のコンテンツを Hacker News に投稿してはいけません。GitLab に属さない Hacker News コミュニティメンバーが投稿したほうが信頼性が高まるため、私たちは投稿することではなく、コンテンツを魅力的なものにすることに集中すべきです。
- Hacker News のストーリーやコメントへのリンクを Slack や Twitter で共有して upvote を依頼することはやめてください。投票検出機構が作動する可能性があるためです。
- Hacker News の投稿に最初のコメントをしないでください。他の人々がコメントを残したり質問をしたりできるようにしてください。
- 「PeopleOps」のような企業用語の使用は避けてください。
- 常に Hacker News コミュニティを対等な仲間として扱ってください。返信ではいつも謙虚で感謝の気持ちを忘れないでください。
- 自分でコメントする場合は、内容が興味深く関連性のあるものであることを確認してください。
- Hacker News の [ガイドライン](https://news.ycombinator.com/newsguidelines.html) と [FAQ](https://news.ycombinator.com/newsfaq.html) を確認してください。
- Hacker News の挙動やモデレーションルールを理解するため、[A List of Hacker News's Undocumented Features and Behaviors](https://github.com/minimaxir/hacker-news-undocumented) にも目を通しておいてください。
- 返信のトーンを確認してください: 防御的にならず、代わりに自分の視点を共有してください。
- 人々がまだ知らない興味深い何かを伝えるよう努めてください。
- データポイントや直接リンクで投稿に価値を加えてください。

**注:** GitLab に関連してソーシャルメディアを使う前に、[チームメンバー向けのソーシャルメディアポリシー](/handbook/marketing/team-member-social-media-policy/) を必ず確認してください。

## 自動化

GitLab 用に設定されたキーワードを含む Hacker News での言及は、Slack の [RSS アプリ](https://slack.com/help/articles/218688467-Add-RSS-feeds-to-Slack) と [https://hnrss.github.io/](https://hnrss.github.io/) からの RSS フィードを使って監視されます。

- キーワードへの言及は [#hn-mentions](https://gitlab.slack.com/messages/hn-mentions) Slack チャンネルで追跡されます。
- フロントページの通知は [#developer-advocacy](https://gitlab.slack.com/messages/developer-advocacy) Slack チャンネルに投稿されます。
