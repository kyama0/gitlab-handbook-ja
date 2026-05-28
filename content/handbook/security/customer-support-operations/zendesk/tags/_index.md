---
title: 'タグ'
description: 'Zendesk タグに関するドキュメント'
upstream_path: /handbook/security/customer-support-operations/zendesk/tags/
upstream_sha: 78b430bc8e2a925f210024d512218ce1d8d42106
translated_at: "2026-05-09T22:41:14Z"
translator: claude
stale: false
lastmod: "2026-05-26T12:05:00-05:00"
---

このガイドでは、GitLab における Zendesk タグの作成方法と使用方法について説明します。

{{% alert title="技術詳細" color="primary" %}}

- デプロイメントタイプ: `Ad-hoc`
  - **注意:** タグは現在 Zendesk で手動管理されています

{{% /alert %}}

## タグを理解する

### タグとは

[Zendesk](https://support.zendesk.com/hc/en-us/articles/4408888664474-About-tags) より:

> タグとは、チケットやトピックにより多くのコンテキストを追加するために使用できる、単語または単語の組み合わせです。タグはチケット、ユーザー、組織に適用できます。

その本質において、Zendesk はタグにかなり大きく依存しています。そのため、使用されているタグと、それらが Zendesk のチケットに対する処理にどのように関連付けられているかを完全に理解することがベストです。

### 私たちのタグ

タグは非常に多く、新しいものが頻繁に追加されるため、[Zendesk Tags Google sheet](https://docs.google.com/spreadsheets/d/1VUaXLcE3L--uBhKi2VrNk8wzaslkydF5AMTMsJMiQpU/edit?usp=sharing) (内部アクセスのみ) で管理しています。

Google シートがどのように生成されるかについては、[下記](#tag-list-generator) を参照してください。

## タグの使い方

{{% alert title="警告" color="warning" %}}

- タグは Zendesk で大きな影響力を持つため、影響を 100% 把握していない限り、チケットへのタグの追加・削除は避けるべきです。タグの用途は多岐にわたるため、データの一貫性問題を引き起こす程度の小さな影響から、チケットがシステムからパージされるほどの大きな影響まで起こりえます。

{{% /alert %}}

### 命名規則

Zendesk はタグに対して強制的な命名規則を持っていません(英数字、ハイフン、アンダースコアの使用を要求する以外には)が、私たち GitLab では以下のコンセプトに従ってタグを命名しようとしています:

- シンプルに保つ
- タグの意味を明確にする
- (Zendesk 項目については) 名前にどこから派生したのかも詳細を含めるようにする
- snake_case を使用する (例: `support_category_geo`)

### タグの作成

タグの作成は、Zendesk のチケット、組織、またはユーザーで単にそのタグを使うだけで完了します。

そのためには、対象の項目(チケット、組織、またはユーザー)に移動し、`Tags` ボックスをクリックして、タグを入力します(タグにスペースは存在しないことを覚えておいてください)。新しいタグを入力し終えたら、スペースバーを押してタグを「送信」します。対象のオブジェクトを更新すると、タグは今後存在することになります。

対象のオブジェクトを更新するには、以下の操作が必要です:

- チケットでは変更を送信する必要があります
- 組織では `Tags` ボックス外をクリックする必要があります
- ユーザーでは `Tags` ボックス外をクリックする必要があります

### 既存のタグをオブジェクトに追加する

既存のタグをオブジェクトに追加するには、対象のオブジェクトに移動し、`Tags` ボックスをクリックして、タグを入力し始めます。Zendesk は入力内容に一致する既存のタグをドロップダウンで表示します。使用したいタグが表示されたらクリックします。

対象のオブジェクトを更新すると、タグはそのオブジェクトに追加されます。

### オブジェクトからタグを削除する

オブジェクトから既存のタグを削除するには、対象のオブジェクトに移動し、`Tags` ボックスを見つけて、削除したいタグの右にある `x` 記号をクリックします。

対象のオブジェクトを更新すると、タグはそのオブジェクトから削除されます。

## タグリストジェネレーター {#tag-list-generator}

これは [Zendesk Tags Google sheet](https://docs.google.com/spreadsheets/d/1VUaXLcE3L--uBhKi2VrNk8wzaslkydF5AMTMsJMiQpU/edit?usp=sharing) (内部アクセスのみ) を生成するプロジェクトについて説明します。Zendesk 項目に由来するタグと、外部タグとして手動で設定したタグのみを対象とします (エージェントが追加したカスタムタグは含まれません)。

{{% alert title="技術詳細" color="primary" %}}

- デプロイメントタイプ: `Standard`
- プロジェクト:
  - [Zendesk Global](https://gitlab.com/gitlab-support-readiness/zendesk-global/tickets/tag-list-generator)
  - [Zendesk US Government](https://gitlab.com/gitlab-support-readiness/zendesk-us-government/tickets/tag-list-generator)

{{% /alert %}}

### 仕組み

スクリプトを実行すると、まず対象の Zendesk インスタンスからすべての Zendesk 自動化、マクロ、組織フィールド、チケットフィールド、トリガー、ユーザーフィールドを収集します。それぞれの項目を確認してタグの使用箇所を特定し、それらのタグを配列に格納します(由来を示すハッシュオブジェクトを介して)。

スクリプトは次に `data/external_tags.yaml` ファイルを読み込み、標準の Zendesk 項目に含まれていないタグ(エージェント sync、チケットプロセッサーなどの項目から)をロードして、タグの配列に追加します。

このリストを使い、スクリプトは関連する Google シートからすべての内容を削除します(現在の実行時の項目数が前回より少ない場合に備えて)。クリア後、スクリプトはすべてのタグデータを Google シートに追加します。

### 手動タグの追加リクエスト

手動で作成したタグを Google シートに追加するようリクエストするには、[Feature Request issue](https://gitlab.com/gitlab-com/gl-security/corp/cust-support-ops/issue-tracker/-/issues/new?description_template=Feature) を作成してください (Customer Support Operations チームによる手動対応が必要です)。

### 新しいタグの追加方法

{{% alert title="注意" color="primary" %}}

- このアクションには対象プロジェクトに対する `Developer` レベルのアクセス権が必要です。
- これは対応するリクエスト Issue (Feature Request、Administrative、Bug など) がある場合のみ行うべきです。存在しない場合は、まず作成してください(そして対応する前に通常のプロセスを通してください)。

{{% /alert %}}

仕組み上、このプロセスにタグを追加する必要があるのは外部タグの場合のみです。その場合、以下の形式を使って `data/external_tags.yaml` ファイルに新しいエントリを (MR 経由で) 追加します:

```yaml
- tag: 'Tag name to add'
  source: 'Source of tag'
```

ピアによるレビュー・承認後、MR をマージできます。次回のデプロイ時に Zendesk と同期されます。

### タグの削除方法

{{% alert title="注意" color="primary" %}}

- このセクションのすべての項目は、Zendesk への `Administrator` レベルのアクセス権を必要とします。

{{% /alert %}}

ここから削除可能なタグは外部タグのみです (それ以外は Zendesk 項目に由来するもので、対象の項目が削除されると自動的に削除されます)。それらは `data/external_tags.yaml` ファイルで管理されているため、対象のエントリを削除する MR を作成する必要があります。

ピアによるレビュー・承認後、MR をマージできます。次回のデプロイ時に Zendesk と同期されます。

### 例外デプロイメントの実行

タグリストジェネレーターの例外デプロイメントを実行するには、対象のタグリストジェネレータープロジェクトに移動し、スケジュールパイプラインのページに行き、sync 項目の再生ボタンをクリックします。これによりタグリストジェネレーターの sync ジョブがトリガーされます。

## よくある問題とトラブルシューティング

### マージ後、シートにタグが表示されない

タグリストジェネレーターは `Standard` デプロイメントタイプに従うため、通常のデプロイメントサイクル中(または例外デプロイメントが行われたとき)にのみデプロイされます。
