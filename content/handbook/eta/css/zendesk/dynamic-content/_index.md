---
title: 'ダイナミックコンテンツ'
description: 'Zendesk ダイナミックコンテンツに関するドキュメント'
upstream_path: /handbook/eta/css/zendesk/dynamic-content/
upstream_sha: 1312dadbdf7381446077faefcfae17ba323692b6
translated_at: "2026-07-18T21:56:20Z"
translator: codex
stale: false
lastmod: "2026-07-14T15:22:25-05:00"
---

このガイドでは、GitLab における Zendesk ダイナミックコンテンツの作成、編集、管理方法について説明します（Zendesk Global でのみ使用）。管理者は[管理者タスク](#administrator-tasks)セクションを確認してください。

{{% alert title="技術的な詳細" color="primary" %}}

- デプロイメントタイプ: `Standard`
- 同期リポジトリ: [Zendesk Global](https://gitlab.com/gitlab-support-readiness/zendesk-global/dynamic-content)

{{% /alert %}}

## ダイナミックコンテンツを理解する

### ダイナミックコンテンツとは?

[Zendesk](https://support.zendesk.com/hc/en-us/articles/4408882999066-Providing-multiple-language-support-with-dynamic-content) によると:

> ダイナミックコンテンツは、テキストのデフォルトバージョン（通常はデフォルト言語と同じ言語）と、サポートするその他のすべての言語のバリアントの組み合わせです。

### 私たちのダイナミックコンテンツの管理方法

Zendesk は UI を通じてダイナミックコンテンツを完全に管理する方法を提供していますが、私たちはよりバージョン管理されたメソドロジーを採用しています。これにより、定められたレビュープロセス、必要に応じたロールバック実行などが可能になります。

そのため、私たちは同期リポジトリと管理コンテンツリポジトリを利用しています。

### テーマでダイナミックコンテンツを使用する

テーマでダイナミックコンテンツアイテムを呼び出すには、以下のヘルパーを使用します:

```plaintext
{{dc 'item_to_call'}}
```

`item_to_call` をアイテムの `placeholder` 属性（中括弧と `dc.` コンポーネントを除いたもの）に置き換えます。

### その他の領域でダイナミックコンテンツを使用する

テーマ以外でダイナミックコンテンツアイテムを呼び出すには、`raw` 属性内でダイナミックコンテンツアイテムの `placeholder` 属性を使用します。

使用する正確な `raw` 属性はアイテムごとに異なりますが、最も一般的な領域は次のとおりです:

- `raw_display_name` — チケットフォームでフォームの名前をダイナミックコンテンツアイテムとして表示する
- `raw_title_in_portal` — チケットフィールドでダイナミックコンテンツアイテムをフィールドのタイトルとして表示する
- `raw_description` — チケットフィールドでダイナミックコンテンツアイテムをフィールドの説明として表示する
- `raw_name` — チケットフィールドの `custom_field_options` 属性下のエントリで、ドロップダウンオプションをダイナミックコンテンツアイテムとして表示する

テキスト（コメントやメールなど）への挿入については、テキスト自体にダイナミックコンテンツアイテムの `placeholder` 属性を挿入するだけです。

## 管理者タスク {#administrator-tasks}

{{% alert title="注意" color="primary" %}}

- このセクションのすべての項目には、Zendesk への `Administrator` レベルのアクセスが必要です。

{{% /alert %}}

### ダイナミックコンテンツアイテムを作成する

{{% alert title="警告" color="warning" %}}

- これは、対応するリクエスト Issue（Feature Request、Administrative、Bug など）がある場合にのみ実施してください。存在しない場合は、まず Issue を作成してください（作業する前に標準プロセスを通過させます）。

{{% /alert %}}

ダイナミックコンテンツアイテムを作成するには、同期リポジトリで MR を作成する必要があります。行う正確な変更はリクエスト自体によって異なります。使用できる開始テンプレートは次のとおりです:

```yaml
---
name: 'Name of item here'
placeholder: 'placeholder item (see below)'
default_locale_id: 1 # English
variants:
- content: 'content_to_use'
  locale_id: 1 # English
  active: true
  default: true
```

`placeholder` 属性は次のように書式設定します:

1. 名前を小文字に変換する
1. スペースをアンダースコアに置き換える
1. `dc.` を接頭辞として付ける
1. 二重中括弧で囲む: `{{dc.placeholder_name}}`

たとえば、`Preferred Region for Support` は `{{dc.preferred_region_for_support}}` になります。

プレースホルダーがどのようになるか確信が持てない場合は、Zendesk インスタンスの Sandbox に入り、管理パネルでダイナミックコンテンツアイテムを作成してから、何が生成されるかを確認するのが便利な方法です（この操作を行った場合は、後で必ず削除してください）。

`default_locale_id` または `locale_id` のロケールについて詳しく知る必要がある場合は、[Zendesk API](https://developer.zendesk.com/api-reference/ticketing/account-configuration/locales/#list-locales) を使用してアクティブなロケールの一覧を取得できます。

ピアが MR をレビューして承認したら、MR をマージできます。次回のデプロイ時に、Zendesk と同期されます。

### ダイナミックコンテンツアイテムを編集する

{{% alert title="警告" color="warning" %}}

- これは、対応するリクエスト Issue（Feature Request、Administrative、Bug など）がある場合にのみ実施してください。存在しない場合は、まず Issue を作成してください（作業する前に標準プロセスを通過させます）。

{{% /alert %}}

ダイナミックコンテンツアイテムを編集するには、同期リポジトリで MR を作成する必要があります。行う正確な変更はリクエスト自体によって異なります。

ピアが MR をレビューして承認したら、MR をマージできます。次回のデプロイ時に、Zendesk と同期されます。

### ダイナミックコンテンツアイテムを削除する

{{% alert title="警告" color="warning" %}}

- これは、対応するリクエスト Issue（Feature Request、Administrative、Bug など）がある場合にのみ実施してください。存在しない場合は、まず Issue を作成してください（作業する前に標準プロセスを通過させます）。

{{% /alert %}}

同期リポジトリでは削除が実行されないため、Zendesk 自体でこれを行う必要があります。

ダイナミックコンテンツアイテムを削除するには:

1. Zendesk インスタンスの管理ダッシュボードに移動します
   - [Zendesk Global (production)](https://gitlab.zendesk.com/admin/home)
   - [Zendesk Global (sandbox)](https://gitlab1707170878.zendesk.com/admin/home)
1. `Workspaces > Agent tools > Dynamic content` に移動します
   - [Zendesk Global](https://gitlab.zendesk.com/admin/workspaces/agent-workspace/dynamic_content)
   - [Zendesk Global (sandbox)](https://gitlab1707170878.zendesk.com/admin/workspaces/agent-workspace/dynamic_content)
1. 削除するダイナミックコンテンツアイテムを見つけ、その横（右端）にある `delete` をクリックします
1. `OK` をクリックして変更を送信します

### 例外デプロイを実行する

ダイナミックコンテンツの例外デプロイを実行するには、該当するダイナミックコンテンツの同期プロジェクトに移動し、スケジュール済みパイプラインのページに移動して、同期アイテムの再生ボタンをクリックします。これにより、ダイナミックコンテンツの同期ジョブがトリガーされます。

## 一般的な問題とトラブルシューティング

### マージ後にダイナミックコンテンツの変更が表示されない

ダイナミックコンテンツは `Standard` デプロイメントタイプに従うため、通常のデプロイサイクル中（または例外デプロイが実行された場合）にのみデプロイされます。
