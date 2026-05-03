---
title: "Twitter 対応ワークフロー"
upstream_path: /handbook/marketing/developer-relations/workflows-tools/twitter/
upstream_sha: 2d678e92f3fbc59843a2973bbfa95041c6aef07f
translated_at: "2026-04-30T00:00:00Z"
translator: claude
stale: false
---

## 概要

### ソーシャルチャンネルのハンドル

| TWITTER ハンドル | 返信元 | ガイドライン |
| - | - | - |
| [@GitLabStatus](https://twitter.com/GitLabStatus) | Zendesk | サービス更新を投稿 |
| [@GitLab](https://twitter.com/GitLab) | Zendesk | メンションや質問に返信 |

- [@GitLabStatus](https://twitter.com/GitLabStatus) アカウントは、[GitLab.com](https://gitlab.com) の可用性に関するアップデートを伝えるとき、または [GitLab.com](https://gitlab.com) が利用できないと報告しているユーザーへのフォローアップや、[@GitLabStatus](https://twitter.com/GitLabStatus) で過去に投稿された可用性アップデートへの返信用にのみ使用してください。
- [@GitLabStatus](https://twitter.com/GitLabStatus) にアップデートを投稿するのは、infrastructure チームのみです。誰がどのように行い、どのチャンネルにアラートを出すかについて、[定義済みのプロセス](/handbook/engineering/infrastructure-platforms/incident-management/) があります。

## ワークフロー

- Community Operations は次の 2 つのケースにおいて、最善の判断のもとツイートに返信してください:

1. ユーザーが技術的な問題や問い合わせのヘルプを必要としている場合に、フォーラムへ誘導する
1. Social Media Team または Communications Team から明示的に依頼された場合に、ツイートのコンテンツを発信する

Community Operations は、Twitter 上の GitLab に対するすべてのメンションを Zapier 経由で Zendesk に取り込みます。Zendesk で Twitter のチケットを解決する際は次のことを行ってください:

1. 技術的な質問を探し、Zendesk から Twitter で返信してフォーラムに誘導します
1. Social Media Team が興味を持ちそうなリツイート機会を探します
1. 期待された／予期しない GitLab の変更に対する、コミュニティからの否定的な反応を示すネガティブセンチメントのパターンを探します
1. 専門家を巻き込むワークフローを通じて、Developer Evangelists や他の専門家を巻き込む機会を探します

## ベストプラクティス

### GitLab のダウンタイムに関するツイート

[GitLab System Status](https://status.gitlab.com/) ページで現在システムに問題が発生していないか、また [Twitter GitLab.com Status](https://twitter.com/gitlabstatus/) プロフィールで公式アップデートがないか確認します。関連する事象が見つかった場合、そのリンクをユーザーへ転送し、依然として問題が発生しているか尋ねてください。

### サポート関連の質問

ユーザーが、サポート関連の質問をメインの @gitlab アカウントにツイートすることがよくあります。Twitter でサポート関連の質問を解決するのは推奨される方法ではありません。文字数制限のため作業しづらく、解決内容が将来の参照用に失われてしまう可能性があるためです。

代わりに、ユーザーには [GitLab フォーラム](https://forum.gitlab.com/) に質問を投稿するよう案内してください。

#### ユーザーをフォーラムへ誘導する

フォーラムで関連するトピック（できれば解決済みのもの！）を探し、直接リンクを共有しましょう。類似のトピックがない場合は、もっとも適切なフォーラムカテゴリへのリンクを共有してください。

フォーラムの利用を促すために、ツイートでは次のような文言の利用を検討してください:

- `Posting in the forum allows the GitLab team and the wider community to help find solutions for your needs, create issues for long-term solutions, and update our documentation.`
- `In order to troubleshoot your issue, please post your question in our forum at https://forum.gitlab.com! This way you'll have the whole power of the community to help.`
- `It's likely these community experts will be able to help: (link to forum topic) since they have worked through something similar before. Post your question and we'll check in on it!`

## 自動化

[@GitLab](https://twitter.com/GitLab) または [@GitLabStatus](https://twitter.com/GitLabStatus) にメンションするツイートは、Zendesk 内にチケットを作成し、「Twitter」ビューに表示されます。

ツイートに TweetDeck から返信すると、重複応答のリスクがあります。Zendesk から返信することで、応答時間を [社内 SLA](/handbook/support/#sla) に対して追跡することも可能になります。

## Tweetdeck

Zendesk から誤って送信されたツイートを削除するために、Tweetdeck を使用できます。@GitLab ハンドルから誤って送信した場合は、できるだけ早く #social_media_action Slack チャンネルから Social Media チームに通知してください。
