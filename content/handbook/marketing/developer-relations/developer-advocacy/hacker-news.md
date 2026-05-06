---
title: "Hacker News"
upstream_path: /handbook/marketing/developer-relations/developer-advocacy/hacker-news/
upstream_sha: 12455b65f7f70cf1c18488a44bbab3cff0097c8a
translated_at: "2026-05-01T00:00:00Z"
translator: claude
stale: false
---

## 概要

Hacker News は重要なソーシャルチャネルです。GitLab の構造、バリュー、製品ビジョン、その他の繊細なブログ記事や記事に言及するスレッドは重要として扱う必要があります。一方、Hacker News のフロントページに到達した GitLab に関する投稿は、重要かつ緊急として扱う必要があります。

Hacker News の投稿は、ウェブサイトへのトラフィック、コンテンツへのバックリンク、そして最も重要なのは、製品とプロセスへの貴重なフィードバックを生成できるため重要です。一例として、2022年1月に[このページに関する Hacker News 投稿](https://news.ycombinator.com/item?id=30003221) は、私たちのチームに貴重なフィードバックをもたらしました。

Hacker News での GitLab への言及は [#hn-mentions](https://gitlab.slack.com/messages/hn-mentions) Slack チャンネルで追跡されます。Hacker News のフロントページに到達した GitLab に関する投稿は、[#dev-advocacy-team](https://gitlab.slack.com/messages/dev-advocacy-team) で共有される通知を生成します。詳細は[自動化ドキュメント](/handbook/marketing/developer-relations/developer-advocacy/hacker-news/#automation) を参照してください。

## 何がうまくいくか

2020年に、GitLab に関する新しい投稿への興味を生み出すために複数の実験を実施しました。投稿がフロントページに到達するための鍵はコンテンツそのものであることを学びました。投稿が共有されるタイミングも役立つ場合がありますが、自分のコンテンツを投稿しないため、私たちのコントロール外です。Hacker News コミュニティからのオーガニックな興味なしに調整された応答を作成することは、投稿への興味を生み出すには効果的ではありませんでした。コンテンツが成功への鍵です。

GitLab に関する投稿のうちどのタイプが Hacker News のフロントページに到達したかを確認するために監査を行いました。次のタイプの GitLab 関連コンテンツが Hacker News で最も多くの興味を生み出したことを学びました:

- 資金調達、買収、機能のコアへの移動などに関する発表のような主要な企業ニュース
- リリース投稿
- Gnome、KDE、WikiMedia などのオープンソースプログラムメンバーからの発表、その他オープンソースに焦点を当てたコンテンツ
- 技術ブログ記事
- ハンドブックページや Remote Work レポートを含むリモートに焦点を当てたコンテンツ

ソーシャルメディアで公開するコンテンツのタイプを検討する際、これらはすべて、Twitter、LinkedIn、関連する Slack コミュニティ、その他のソーシャルチャネルで共有するのに適した投稿とページのタイプです。

## リリース日

GitLab のリリース投稿は、Hacker News で頻繁に好成績を収めています。投稿が[毎月](/handbook/engineering/releases/) リリースされることを知っているため、これらの投稿には常に [コミュニティ対応](/handbook/marketing/developer-relations/developer-advocacy/community-response/) が必要となるよう計画する必要があります。リリース日には、対応を整理するために次のステップに従います:

1. Director, Developer Advocacy は、リマインダーとしてハンドブックのこのセクションへのリンクを本文に含む、リリース日の繰り返しカレンダー招待を、デベロッパーアドボカシーチームメンバーに送信します。
1. リリース投稿が Hacker News フロントページに到達したという通知が、"Hacker News Front Page" ボットによって #dev-advocacy-team Slack チャンネルに投稿された場合、デベロッパーアドボカシーチームメンバーは、製品マネージャーに警告するためにメッセージを #product と #release-post チャンネルに迅速に再投稿する必要があります。
1. Hacker News 投稿に質問・コメントが追加されたら、デベロッパーアドボケイトはコミュニティのフィードバックに対処するために迅速に応答する必要があります。
1. デベロッパーアドボケイトが自分で対処できない質問・コメントについては、専門家を巻き込むために迅速にアクティベートする必要があります。専門家を巻き込む最も効率的な方法は、対処すべきコメントへのリンク付きで、#product チャンネルで作成されたスレッドに `@` メンションで製品マネージャーに通知することです。注: コミュニティのフィードバックは、GitLab を改善する作業を行う上で彼らにとって価値があるため、専門家を巻き込むことを躊躇しないでください。

[Release Posts](/handbook/marketing/blog/release-posts/)（[Release Post Managers schedule](/handbook/marketing/blog/release-posts/managers/) を含む）に関する詳細情報は、ハンドブックで利用できます。

## Hacker News での応答

GitLab に関する新しい投稿やコメントが Hacker News に追加されたとき、チームメンバーはこれらの投稿に関するアラートを [#hn-mentions](https://gitlab.slack.com/messages/hn-mentions) Slack チャンネルで見つけることができます。議論に参加したい他のチームメンバーや、より広範な GitLab コミュニティのメンバーと共有してください。質問、フロントページ投稿の応答調整、応答に関するガイダンスなどについては、[#dev-advocacy-team](https://gitlab.slack.com/messages/dev-advocacy-team) Slack チャンネルに参加してください。

[デベロッパーアドボカシーチームメンバー](/handbook/marketing/developer-relations/developer-advocacy/) は、適切な場合に新しい投稿のコメントや質問に対処することが推奨されます。

### 応答ワークフロー

1. GitLab に言及する記事が Hacker News のフロントページにあると "Hacker News Front Page Bot" によってアラートが届いたとき、デベロッパーアドボケイトは、投稿のレビュー、コメントの監視、および適切な応答のために DRI が割り当てられるように調整する必要があります。
1. フロントページに到達した投稿は、応答したいと思うチームメンバーの可視性を高めるため、投稿のトピックに関連する Slack チャンネルで共有する必要があります。たとえば、リモートワークのブログは [#remote](https://gitlab.slack.com/messages/remote) チャンネルで共有し、マーケティングサイトのトラッカーに関連する投稿は [#marketing](https://gitlab.slack.com/messages/marketing) で共有します。投稿が [#dev-advocacy-team](https://gitlab.slack.com/messages/dev-advocacy-team) 以外で共有される場合は常に、Slack コメントは可視性のため、そして単一の信頼できる情報源を作るために `#dev-advocacy-team` のアラートスレッドにクロスリンクされる必要があります。
1. デベロッパーアドボケイトは、応答が必要な言及を見つけるために、[#hn-mentions](https://gitlab.slack.com/messages/hn-mentions) Slack チャンネルを1日1～2回レビューする必要があります。迅速な応答・リソースを提供できる場合は、個人の Hacker News アカウントを使用して [news.ycombinator.com](https://news.ycombinator.com) で返信し、Slack コメントに :white_check_mark: を残して返信したことを示します。_[コメントの編集ウィンドウは2時間](https://github.com/minimaxir/hacker-news-undocumented#editdelete-time-limits) であり、その後は Hacker News コメントを編集または削除できないことに注意してください。_
1. 必要に応じて、より詳細または洞察に富んだコメントを提供できる関連する専門家とコメントを共有することもできます。これは、追加の入力が必要だと判断した場合に、適切な Slack チャンネルで関連する投稿やコメントを共有することで行えます。

### Hacker News での応答のベストプラクティス

GitLab に関する Hacker News の投稿に応答する際:

- ほぼ同じ回答を投稿しないでください。代わりに元の回答にリンクしてください。
- 多面的なコメントを分解し、ポイント、番号付け、引用を使用して対処してください。
- 誰かが Hacker News のスレッドリンクを投稿したら、そのスレッドを手動で監視してください。[#hn-mentions](https://gitlab.slack.com/messages/hn-mentions) チャンネルの通知を待たないでください。通知が数時間遅れることがあるためです。
  - 過去1時間の最新投稿を強調表示するために、ブラウザ（macOS では `cmd+f`）で `minutes ago` を検索してください。
- コメントに個人的に同意するかどうか、または GitLab に批判的かどうかに基づいて、コメントをアップ投票・ダウン投票しないでください。代わりに、HN は好奇心のある会話に関するものであるため、思慮深く実質的かどうかに基づいて投票してください。

#### Hacker News のフォーマットのヒント

[フォーマットオプションのドキュメント](https://news.ycombinator.com/formatdoc) に従い、以下に追加のヒントを示します:

1. 特定の文や考えに返信する場合、`>` を使用して返信内のセクションを引用し、空行を追加してから、コメントを記述します。
2. 行を2つのスペースでインデントして、シェルコマンドとコードをコードブロックとしてフォーマットします（[このコメント](https://news.ycombinator.com/item?id=33108536) のおかげで）
3. 2つを超える URL を共有する場合、コメント下部の URL リストとともに `[0]`、`[1]` などのアンカーを使用することを検討してください。リストは正しくレンダリングされるためにアイテム間に空行が必要です。テキストから URL を分離することで、コメントの可読性と意図を高め、URL の重要性を低くすることができます（[例](https://news.ycombinator.com/item?id=32155848)）。

### 説得せずに伝える

あなたのコメントは、応答している人物以外の多くの人にも読まれていることを覚えておいてください。あなたが共有する情報がそれらの人々にも役立つようにしてください。返信は、応答している人物だけでなく、会話に関わるすべての人にとって価値あるものを目指してください。批判やネガティブなフィードバックに対処するとき、コメントや視点が敵対的または不快な人の心を変えることはほとんど不可能ですが、あなたの返信は、単に読んで学ぶためにそこにいる人にとって価値があり得ます。

Hacker News の[コメント](https://news.ycombinator.com/item?id=30006193) は、「説得せずに伝えること」に焦点を当てるように提案することで、これをよくまとめています。コメンテーターは「事実を明確にし、不一致を指摘してください。動機と理由を共有してください。理解できないこと、または複数の解釈ができることを誰かが言ったときには明確化を求めてください。不一致をそのままにし、それを同意に変えるために押し付けないでください」と提案しています。

## ブログコメント

ブログコメントは、フォーラムトピックを [feedback タグ](/handbook/marketing/developer-relations/workflows-tools/forum/#tags) でフィルタリングすることで簡単にモニタリングできます。

## ソーシャルメディアガイドライン

- GitLab のコンテンツを Hacker News に投稿しないでください。GitLab 以外の Hacker News コミュニティメンバーが投稿した方が信頼性が高くなります。投稿することではなく、投稿を興味深くすることに焦点を当てるべきです。
- Slack や Twitter で Hacker News のストーリーやコメントへのリンクを共有して、他者にアップ投票を依頼しないでください。投票検出器が反応する可能性があります。
- Hacker News の投稿に最初のコメントをしないでください。人々がコメントを残し、質問するのを許可してください。
- 「PeopleOps」などの企業ジャーゴンを避けてください。
- Hacker News コミュニティを常にピアとして扱ってください。応答では常に謙虚で感謝の念を持つようにしてください。
- 自分でコメントする場合は、興味深く関連性のあるものであることを確認してください。
- Hacker News の[ガイドライン](https://news.ycombinator.com/newsguidelines.html) と [FAQ](https://news.ycombinator.com/newsfaq.html) をレビューしてください。
- Hacker News の動作とモデレーションルールを理解するために、[A List of Hacker News's Undocumented Features and Behaviors](https://github.com/minimaxir/hacker-news-undocumented) に精通してください。
- 応答のトーンを確認してください: 防御的にならず、自分の視点を共有してください。
- 人々がまだ知らない興味深いことを教えるようにしてください。
- データポイントや直接リンクで投稿に価値を加えてください。

**注:** GitLab に関連するソーシャルメディアを使用する前に、[チームメンバーソーシャルメディアポリシー](/handbook/marketing/team-member-social-media-policy/) をレビューしてください。

## 自動化

GitLab に関する設定済みキーワードの Hacker News 言及は、[Zapier](https://zapier.com) ワークフローを使用して監視されています。

- キーワード言及は、[#hn-mentions](https://gitlab.slack.com/messages/hn-mentions) Slack チャンネルで追跡されます。
- フロントページ通知は、[#dev-advocacy-team](https://gitlab.slack.com/messages/dev-advocacy-team) Slack チャンネルに投稿されます。

キーワードを持つすべての Zapier ワークフローは、[Hacker News の Algolia Search の使用方法](/handbook/marketing/developer-relations/workflows-tools/zapier/#zaps-for-hacker-news) を含む詳細とともに、[デベロッパーリレーションズハンドブック](/handbook/marketing/developer-relations/workflows-tools/zapier/#current-zaps) でドキュメント化されています。
