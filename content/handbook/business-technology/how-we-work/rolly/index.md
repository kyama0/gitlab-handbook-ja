---
title: "Rolly"
description: "大規模プロジェクトやプログラムのステータスロールアップ Issue を生成する便利な自動化ツール"
upstream_path: /handbook/business-technology/how-we-work/rolly/
upstream_sha: b4eeb07f0d5f46e2fc5f8572be1a2547261aed89
translated_at: "2026-04-25T08:00:00Z"
translator: claude
stale: false
lastmod: "2025-01-06T17:31:07+00:00"
---

<link rel="stylesheet" type="text/css" href="/stylesheets/biztech.css" />

## 課題

チームが大規模な作業プログラムに取り組む場合、部門長や e グループへの週次ステータスロールアップを行うことが煩雑になります。プログラムが全く異なるワークフローを持つ複数のチームや部門を巻き込んでいる場合、これは特に困難です。

## Rolly はどのように動作しますか？

Rolly は、プロジェクト/プログラムのエピック説明から主要なステータス情報を抽出し、1つの Issue にまとめる自動化ツールです。毎週月曜日の午前0時（PST）に実行されます。

### Rolly は実際にどのように動作しますか？

1. Rolly は、設定の `groupId` で指定されたグループを検索し、`label` ラベルが付いたすべてのエピックを探します。
1. 各エピックの説明に対して、Rolly はトークン `extractStatusStart` と `extractStatusEnd` の間にある Markdown を抽出します。

    ```markdown
    # My heading

    <!-- Status Start -->
    This part of the epic description would be extracted to be part of the rollup issue.
    The tokens that delimit this area are configurable.
    <!-- Status End -->

    This part of the description would not be included in the status rollup since it's outside of the extract tokens.
    ```

1. Rolly は、ID `rollupProjectId` のプロジェクトに、結合されたステータスアップデートを説明に含む Issue と追加情報を作成します。
1. `tags` のテキストが説明の末尾に追加され、Issue に `rollupLabel` のラベルが付与されます。
1. Rolly は ID `rollupProjectId` のプロジェクト内でタグ `rollupLabel` が付いたすべてのオープン Issue を見つけてクローズし、新しい Issue が唯一のオープンステータス Issue になるようにします。
1. 実行中に発生したエラーは、`errorEmails` に記載されたメールアドレスおよび BT Integrations Engineering チームにメールで報告されます。

#### ロールアップ Issue の例

![Example Rollup Issue](/images/business-technology/how-we-work/rolly/rollupissue.png)

### Rolly はどこにありますか？

Rolly のメインロジックは BT Enterprise Apps Workato 本番インスタンスにあります。Rolly の設定は[このプロジェクト](https://gitlab.com/gitlab-com/business-technology/enterprise-apps/integrations/rollup-bot-configuration)にあります。

## Rolly を自分のプロジェクトに使用できますか？

YES!! Rolly は誰でも使用できます。

### Rolly の使い方は？

Rolly の設定はとても簡単です：

1. [rollup-bot-configuration](https://gitlab.com/gitlab-com/business-technology/enterprise-apps/integrations/rollup-bot-configuration/-/blob/master/rollupconf.yml) の yaml ファイルに設定を追加した MR を送信してください。
2. `@bt_bot` がエピックを持つすべてのグループに少なくとも `Reporter` 権限を持ち、Issue を作成するためのステータスロールアッププロジェクトにも少なくとも `Reporter` 権限を持つことを確認してください。

### Rolly の設定でサポートが必要です

Rolly のサポートについては、[#bt-integrations](https://gitlab.slack.com/archives/C015U7R5XJ8) Slack チャンネルで BT Integrations Engineering チームにお問い合わせください。

## よくある質問

### Rolly を週に異なる時間に実行するよう設定できますか？

設定 yaml ファイルで Rolly を週の任意の曜日に実行するよう設定できますが、常にその曜日の午前0時（PST）に実行されます。将来的にカスタム時間のサポートを追加する予定です。

### Rolly はエピックではなく Issue からステータスアップデートを取得できますか？

いいえ、残念ながら現時点では Rolly はエピックからのみステータスアップデートを取得します。

### Rolly は1つのステータスロールアップで複数のトップレベルグループからステータスアップデートを取得できますか？

いいえ、現時点では Rolly は1つの親グループからのみエピックを取得します。`gitlab-com` と `gitlab-org` の両方のエピックのロールアップを設定したい場合は、2つの別々の Rolly 設定を作成する必要があり、毎週2つの Issue が生成されます。

### Rolly が実行に失敗した場合はどうなりますか？

Rolly は実行中にエラーが発生した場合、integrations engineering チームに連絡し、あなたに連絡するよう設定することもできます。エラー連絡先のメールアドレスは、[こちら](https://gitlab.com/gitlab-com/business-technology/enterprise-apps/integrations/rollup-bot-configuration/-/blob/master/rollupconf.yml)の Rolly 設定 yml ファイルで設定できます。

### Rolly を作ったのは誰ですか？

Rolly は、GitLab の Business Technology チームの [@dparker](https://gitlab.com/dparker) と [@lisvinueza](https://gitlab.com/lisvinueza) によって作られました。
