---
title: "Rolly"
description: "大規模プロジェクトやプログラムのステータスロールアップ Issue を生成する便利な自動化ツール"
upstream_path: /handbook/business-technology/how-we-work/rolly/
upstream_sha: "74bb2fbdef354f57211295638ac65cfae7c767f8"
translated_at: "2026-11-04T21:06:40.701523+00:00"
translator: claude
stale: false
lastmod: "2026-11-04T20:19:30+01:00"
---

## 課題 {#problem}

チームが大規模な作業プログラムに取り組む場合、部門長や e グループへの週次ステータスロールアップを行うことが煩雑になります。プログラムが全く異なるワークフローを持つ複数のチームや部門を巻き込んでいる場合、これは特に困難です。

## Rolly はどのように動作しますか？ {#how-does-rolly-work}

Rolly は、プロジェクト/プログラムのエピック説明から主要なステータス情報を抽出し、1 つの Issue にまとめる自動化ツールです。毎週月曜日の午前 0 時（PST）に実行されます。

### Rolly は実際にどのように動作しますか？ {#but-how-does-rolly-really-work}

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

1. Rolly は、ID `rollupProjectId` のプロジェクトに、統合したステータス更新と追加情報を説明に含めた Issue を作成します。
1. `tags` のテキストが説明の末尾に追加され、Issue に `rollupLabel` のラベルが付与されます。
1. Rolly は ID `rollupProjectId` のプロジェクト内でタグ `rollupLabel` が付いたすべてのオープン Issue を見つけてクローズし、新しい Issue が唯一のオープンステータス Issue になるようにします。
1. 実行中に発生したエラーは、`errorEmails` に記載されたメールアドレスおよび BT Integrations Engineering チームにメールで報告されます。

#### ロールアップ Issue の例 {#example-rollup-issue}

![ロールアップ Issue の例](/images/business-technology/how-we-work/rolly/rollupissue.png)

### Rolly はどこにありますか？ {#where-does-rolly-live}

Rolly のメインロジックは BT Enterprise Apps Workato 本番インスタンスにあります。Rolly の設定は[このプロジェクト](https://gitlab.com/gitlab-com/business-technology/enterprise-apps/integrations/rollup-bot-configuration)にあります。

## Rolly を自分のプロジェクトに使用できますか？ {#can-i-use-rolly-for-my-projects}

はい!! Rolly は誰でも使用できます。

### Rolly の使い方は？ {#how-do-i-use-rolly}

Rolly の設定はとても簡単です：

1. [rollup-bot-configuration](https://gitlab.com/gitlab-com/business-technology/enterprise-apps/integrations/rollup-bot-configuration/-/blob/master/rollupconf.yml) の yaml ファイルに設定を追加した MR を送信してください。
2. `@bt_bot` がエピックを持つすべてのグループに少なくとも `Reporter` 権限を持ち、Issue を作成するためのステータスロールアッププロジェクトにも少なくとも `Reporter` 権限を持つことを確認してください。

### Rolly の設定でサポートが必要です {#i-need-help-configuring-rolly}

Rolly のサポートについては、[#bt-integrations](https://gitlab.slack.com/archives/C015U7R5XJ8) Slack チャンネルで BT Integrations Engineering チームにお問い合わせください。

## よくある質問 {#faqs}

### Rolly を週に異なる時間に実行するよう設定できますか？ {#can-i-configure-rolly-to-run-at-a-different-time-each-week}

設定 yaml ファイルで Rolly を週の任意の曜日に実行するよう設定できますが、常にその曜日の午前 0 時（PST）に実行されます。将来、カスタム時刻のサポートを追加する可能性もあります。

### Rolly はエピックではなく Issue からステータスアップデートを取得できますか？ {#can-rolly-fetch-status-updates-from-issues-instead-of-epics}

いいえ、残念ながら現時点では Rolly はエピックからのみステータスアップデートを取得します。

### Rolly は 1 つのステータスロールアップで複数のトップレベルグループからステータスアップデートを取得できますか？ {#can-rolly-fetch-status-updates-from-multiple-top-level-groups-in-a-single-status-rollup}

いいえ、現時点では Rolly は 1 つの親グループからのみエピックを取得します。`gitlab-com` と `gitlab-org` の両方のエピックのロールアップを設定したい場合は、2 つの別々の Rolly 設定を作成する必要があり、毎週 2 つの Issue が生成されます。

### Rolly が実行に失敗した場合はどうなりますか？ {#what-happens-if-rolly-fails-to-run}

Rolly は実行中にエラーが発生した場合、Integrations Engineering チームに連絡し、あなたに連絡するよう設定することもできます。エラー連絡先のメールアドレスは、[こちら](https://gitlab.com/gitlab-com/business-technology/enterprise-apps/integrations/rollup-bot-configuration/-/blob/master/rollupconf.yml)の Rolly 設定 yml ファイルで設定できます。

### Rolly を作ったのは誰ですか？ {#who-built-rolly}

Rolly は、GitLab の Business Technology チームの [@dparker](https://gitlab.com/dparker) と [@lisvinueza](https://gitlab.com/lisvinueza) によって作られました。
