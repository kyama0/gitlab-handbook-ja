---
title: ワークフローの書き方
category: References
description: 良いワークフローページを書くためのガイドライン、根拠、リソース。
upstream_path: /handbook/support/workflows/writing_workflows/
upstream_sha: c8fa138220d8c6d69f811b17242d6d2f08e4e409
translated_at: "2026-05-08T05:00:00Z"
translator: claude
stale: false
lastmod: "2025-02-24T23:06:08+00:00"
---

## 概要

このページは、新規ワークフローを作成したり既存ワークフローを更新したりする際の、ワークフローページの書き方に関するガイダンスを提供することを目的としています。

このページ自体のガイダンスの精神に則り、読みやすく、ざっと目を通せるように作成しています。

## なぜ重要なのか

情報を書き留めておくことには多くのメリットがありますが、必要な情報を見つけてもらうためには、整理された状態であることも必要です。

特にワークフローでは整理が重要です。なぜなら、プロセスの手順は一部のケースにのみ適用されることが多いからです。
チームメンバーがプロセスに従いやすくしつつ、タスクを完了するために必要な部分だけを読めるようにすることは、効率のために必要です。

ワークフローを作成、更新、改善することは [GitLab values]/handbook/values/) と一致しており、以下を含む多くの私たちの運営原則とアプローチを強調しています:

- [Handbook first](/handbook/about/handbook-usage/#why-handbook-first)
- [See something, say something](/handbook/values/#see-something-say-something)
- [Everyone can contribute](/handbook/values/#mission)

このページ自体は、[サポート効率化に関する議論](https://gitlab.com/gitlab-com/support/support-team-meta/-/issues/2927)から生まれました。

## 基本的なガイドライン {#basic-guidelines}

良いワークフローには以下が備わっています:

1. タイトルに関連する情報。
    - 新しい情報を含めようとしている場合、それはどのワークフローに最もよく当てはまりますか？どこにも当てはまらない場合は、新しいワークフローを検討してください。
1. 小さなセクションに分割された情報。
    - 追加しようとしているものはプロセスの個別のステップですか？リストの一部であることを確認してください。具体的なユースケースですか？見出しを使ってそれを分離してください。
1. 情報を探しやすくするための、よく整理された記述的な見出し。
    - どのレベルの見出しが適切ですか？すでに他のもの（たとえば h3）が多くありますか？もしそうなら、より高いレベルの見出し（たとえば h2）の追加を検討してください。
1. 他の関連ワークフローやドキュメントへのリンク。
    - 私たちのワークフローの多くは関連していますが、情報の重複は避けるべきです。代わりにリンクしてください。
1. 適切な長さ。
    - ワークフローページが長すぎると思うなら、おそらくその通りです。分割できるか、再編成が必要かを検討してください。
1. 必要に応じて、フローチャートなどの視覚的な補助。
    - 視覚的な学習者を助けるために、[mermaid チャート](https://docs.gitlab.com/user/markdown/#mermaid)や画像の追加を検討してください。

包括的言語の使用や Markdown の使用を含む一般的な記述慣行については、[GitLab ドキュメンテーションガイドライン](https://docs.gitlab.com/development/documentation/styleguide/)に従うことを検討してください。

### "そこそこ" から "より良い" への例

[Support Time Off ページ](/handbook/support/support-time-off)を例として取り上げてみましょう（ワークフローページではありませんが、プロセス関連です）。

[元のバージョン](https://gitlab.com/gitlab-com/www-gitlab-com/-/blob/7d9466ea0400d3e7739f280c7568b3f030fa2562/sites/handbook/source/handbook/support/support-time-off.html.md#taking-off-less-than-half-a-day)では、休暇の日数を「区切り」として情報を整理していました。

1. 半日未満
1. 半日以上
    1. Workday を使用
    1. PagerDuty シフト
    1. ミーティング
1. 1〜2 日
    1. 顧客への確認
    1. キューの整理
1. 3 日以上
    1. チームへの通知
    1. チケットワークフローの変更
    1. 自分のチケットの新しいアサイン担当者を見つける

それは理解できる構成ですが、すべてのサポートチームメンバーが PagerDuty シフトやアサインされたチケットを持っているわけではないため（Support Ops を考えてください）、個人にとってどの部分が関連するかをざっと見るのが難しいです。
さらに、いくつかの部分は会社のハンドブック情報と重複していました。

[改訂版](https://gitlab.com/gitlab-com/www-gitlab-com/-/blob/7d9466ea0400d3e7739f280c7568b3f030fa2562/sites/handbook/source/handbook/support/support-time-off.html.md#taking-off-less-than-half-a-day)では、ページが責任に焦点を当てて再編成され、チームメンバーが自分に関係のないセクションをスキップできるようになりました。

1. 休暇の記録
    - 関連する会社ハンドブックセクションへのリンク付き
1. PagerDuty のカバレッジ
1. チケットのカバレッジ
    1. キューの整理
    1. 顧客への確認
    1. 3 日以上の追加対応
        1. チームへの通知と新しいアサイン担当者の特定
        1. チケットワークフローの変更

これは小さな例ですが、コンテンツの整理方法の違いが、読み手にとってどのように読みやすく効率的になるかを示す良い例だと願っています。

## 新規ワークフローの作成

新規ワークフローを作成する際は、[上記のガイドライン](#basic-guidelines)を念頭に置き、以下のプロセスを検討してください:

1. アウトラインで順序付けと整理を行う。
1. アウトラインをレビューしてもらう。
1. 完全なコンテンツを書く。
1. 1 人または複数のレビュアーに、レビューで以下のいずれかに焦点を当ててもらう:
    1. 整理と構造。
    1. 明瞭さと簡潔さ。

### テンプレート

ワークフローには特定のテンプレートはありません（以下に記載のメタデータを除く）。始めるためのいくつかの場所:

1. 別のワークフローをテンプレートとして使用する。
1. [GitLab ドキュメンテーションの構造とテンプレート](https://docs.gitlab.com/development/documentation/site_architecture/folder_structure/)を使用する。

#### メタデータ

以下のメタデータと目次の項目はすべてのワークフローページの上部にあるべきです。

注意:

1. 削除可能（オプション）なメタデータ行は `subcategory` のみです。それ以外はすべて埋める必要があります。
1. 既存のカテゴリーは既存のワークフローを参照してください。

```text
---
title:
description:
category:
subcategory:
last-reviewed: YYYY-MM-DD
---

## First heading
```
