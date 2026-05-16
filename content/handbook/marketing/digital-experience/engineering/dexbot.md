---
title: "Dex Bot"
description: "Digital Experience チームの Slack アプリケーション"
upstream_path: /handbook/marketing/digital-experience/engineering/dexbot/
upstream_sha: 2d678e92f3fbc59843a2973bbfa95041c6aef07f
translated_at: "2026-05-01T10:36:34Z"
translator: claude
stale: false
lastmod: "2025-01-07T16:47:36-08:00"
---

Digital Experience チームは、チームへの重要なメッセージとアラートを自動化するための Slack アプリケーションを作成しました。アプリの設定は[こちら](https://api.slack.com/apps/A06K6EK7VHP/general)で確認できます。

### コラボレーター

現在、このアプリケーションは Digital Experience チームの次のメンバーによって管理されています:

- [Nathan Dubord](https://gitlab.com/ndubord)
- [Lauren Barker](https://gitlab.com/laurenbarker)
- [Megan Filo](https://gitlab.com/meganfilo)
- [Laura Duggan](https://gitlab.com/lduggan)
- [Mateo Penagos](https://gitlab.com/mpenagos-ext)

### Contentful 連携

現在、このボットの主な用途は、CMS プラットフォーム上でメインページのいずれかが変更された際にチームに通知することです。これにより次の情報を含むメッセージがチームへ送信されます:

- エントリータイトル
- 変更を行ったユーザーのユーザー ID
- 更新時刻
- エントリー ID
- 変更後のエントリーバージョン

また、CMS で前のバージョンとの比較を開くボタンも含まれています。

![DexBot Message](/images/marketing/digital-experience/engineering/DexBot-message.png)

この連携は 2 つの Webhook を使用して行われています:

[Contentful Webhook](https://app.contentful.com/spaces/xz1dnu24egyd/settings/webhooks/0phOTSfD0tLisCEgn7hN53/settings) は、エントリー情報を含むカスタムペイロードを [Slack Webhook](https://api.slack.com/apps/A06K6EK7VHP/incoming-webhooks) へ送信するように設定されており、それが Slack ボットからのメッセージをトリガーします。このメッセージは Slack の `dex-alerts` チャンネルへ送信されます。

### Slack Block

送信されるメッセージは、Slack の [Block システム](https://api.slack.com/block-kit) を使って作成されました。これは事前構築された Slack UI コンポーネントを使ってメッセージを構造化し、入力やボタンの形でインタラクティビティを追加するものです。これは JSON 形式で構築されています。CMS アラートメッセージで使用されているペイロードは次のとおりです:

```json
{
  "blocks": [
    {
      "type": "header",
      "text": {
        "type": "plain_text",
        "text": "Monitored page content updated",
        "emoji": true
      }
    },
    {
      "type": "section",
      "text": {
        "type": "plain_text",
        "emoji": true,
        "text": "Entry title: {/payload/fields/title/en-US}"
      }
    },
    {
      "type": "divider"
    },
    {
      "type": "section",
      "text": {
        "type": "mrkdwn",
        "text": "*Updated by user:* {/payload/sys/updatedBy/sys/id} \n\n *Update time:* {/payload/sys/updatedAt} \n\n *Entry ID:* {/payload/sys/id} \n\n *Version*: {/payload/sys/revision}"
      },
      "accessory": {
        "type": "image",
        "image_url": "https://assets.stickpng.com/images/5a81af7d9123fa7bcc9b0793.png",
        "alt_text": "calendar thumbnail"
      }
    },
    {
      "type": "divider"
    },
    {
      "type": "section",
      "text": {
        "type": "mrkdwn",
        "text": "View changes in Contentful"
      },
      "accessory": {
        "type": "button",
        "text": {
          "type": "plain_text",
          "text": "View changes",
          "emoji": true
        },
        "url": "https://app.contentful.com/spaces/{/payload/sys/space/sys/id}/entries/{/payload/sys/id}/compare"
      }
    }
  ]
}

```
