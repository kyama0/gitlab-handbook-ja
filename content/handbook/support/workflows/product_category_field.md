---
title: Product Category フィールド
description: "Product Category フィールドと Glean agent を使ってサポートチケットを分類する方法"
category: Closing tickets
upstream_path: /handbook/support/workflows/product_category_field/
upstream_sha: 05f1dda85e84923d830b0bf74ffd3f63fddbd830
translated_at: "2026-07-06T21:06:15Z"
translator: codex
stale: false
lastmod: "2026-07-06T16:09:41+10:00"
---

## 概要

このドキュメントでは、Zendesk のカスタムフィールド「Product Category」と、その入力方法について説明します。これはチケット処理のクロージングフェーズで実施することが期待されている作業です。

## Product Category フィールドとは？

Product Category フィールドは Zendesk の複数選択フィールドで、各サポートチケットの中心にある GitLab の製品領域を識別するのに役立ちます。このフィールドは、チケットを **Solved** に設定する前に入力が必須です。このデータは、私たちのプロダクトおよび開発チームにカスタマーインサイトを提供する上で非常に有益です。

このフィールドを通じて収集されるデータにより、以下が可能になります:

- どの GitLab 機能がサポートボリュームを最も多く生んでいるかの分析
- プロダクトチームへのフィードバック用のトレンド識別
- ナレッジマネジメントとドキュメンテーション優先順位付けの改善

このフィールドのオプションは、アクティブに開発されているカテゴリーについては [categories.yaml](https://gitlab.com/gitlab-com/www-gitlab-com/blob/master/data/categories.yml) ファイルから、また [stages.yaml](https://gitlab.com/gitlab-com/www-gitlab-com/blob/master/data/stages.yml) ファイルに記載されている `maintained` カテゴリーから入力されています。

## Product Category フィールドの使い方

### フィールドを入力するタイミング

Product Category フィールドは、チケットクローズプロセスの一環として入力する必要がありますが、チケットをクローズする前であればいつでも更新できます。チケットを「Solved」に設定するタイミングが最も適切なことが多いです。なぜなら、チケットの解決過程で得られる情報により、お客様が経験した問題の主要原因が何だったかを私たちがよりよく理解できるようになるからです。

### フィールドの入力方法

Product Category フィールドは 2 つの方法で入力できます:

1. **手動選択**: チケットに該当するカテゴリーが明確に分かっている場合は、複数選択フィールドから直接適切なオプションを選択します。1 つのチケットには複数のカテゴリーが該当することもあります。

2. **Glean agent の支援**: チケットのコンテンツに基づいて最も関連性の高いカテゴリーを特定するのに役立つ「Zendesk Product Category」[agent](#using-the-glean-zendesk-product-category-agent) を使用します。

3. **Engineering Directory ツールの支援**: チケットが関連する機能が分かっている場合は、[Engineering Directory](https://gitlab-com.gitlab.io/support/toolbox/engineering-directory/) を使ってその機能が属するカテゴリーを特定できます。

## Glean の「Zendesk Product Category」agent の使い方 {#using-the-glean-zendesk-product-category-agent}

### Glean Product Category agent とは？

Glean の「Zendesk Product Category」agent は、チケットコンテンツを分析し、適切な Product Category の選択肢を提案するために設計された専用プロンプトです。このプロンプトは、一貫性があり有用な分類提案を提供するために、広範なイテレーションを通じて開発されました。LLM ツールであるため常に正解を出すわけではありませんが、一般的には十分役に立つ程度には正確です。agent の詳細は、Glean に移動し、左メニューバーから `Agents` を選択し、`Zendesk Product Category` を検索してから、その agent のポップアップボックスで `View agent setup` をクリックすると確認できます。

### Glean agent の使い方

Product Category agent を使うには:

1. 分類したいチケットに移動する
2. Zendesk から Glean app を開く
3. app のホーム画面から「Zendesk Product Category」を選択する
4. `Run agent` をクリックする
5. 提案を使って Product Category フィールドを入力する。（現時点ではこれは手動ステップです。）

提案は次のフォーマットで報告されることが期待されます。ここで %（パーセンテージ）はチケットの原因にそのカテゴリーが関連している確信度の指標です。確信度が 76% を下回る提案は返されません。

```markdown
Pipeline Composition | 92% | Pipeline failed during merge request
Compliance Management | 78% | Branch protection rules not enforced
```

### 期待される動作と制限事項

- agent はチケット会話全体を分析して関連する製品領域を特定します
- 結果は概ね一貫していますが、時には役に立たない提案を返すことがあります
- フィールド入力前に、提案を手動でレビューすることが常に推奨されます
- agent は通常、有効な項目のみを提案するのが得意です。ただし、フィールドで利用可能なオプションを更新するプロセスは現在手動であり、プロダクトの変更に遅れることがあります。この問題が発生している場合は、Slack で `Jane G` に ping してください。

### agent がうまく機能しないとき

特定のタイプのチケットで agent が一貫して役に立たない結果を返すことがある場合、[フィードバック Issue](https://gitlab.com/gitlab-com/support/support-team-meta/-/issues/7020) を通じてフィードバックを提供してください。これにより agent の効果が時間とともに改善されます。

## トラブルシューティング

### よくある問題

- **Glean が無関係なカテゴリーを提案する**: 手動レビューと選択が常に推奨されます。判断を使って最も適切なカテゴリーを選択してください。プロンプトの調整が必要な可能性があるため、フィードバック Issue にフィードバックを提供してください。Glean app の Chat 機能（`Ask anything`）を使って「those categories are not in the filtered-categories.yml file」のようなフォローアッププロンプトを追加することもできます

### ヘルプを得るには

Product Category フィールドや Glean agent で問題が発生した場合:

- 今後のイテレーションを改善するため、プロンプトの効果について [フィードバック Issue](https://gitlab.com/gitlab-com/support/support-team-meta/-/issues/7020) にフィードバックを提供する

### 参考資料

- これが導入された [ロードマップ Issue](https://gitlab.com/gitlab-com/support/support-team-meta/-/issues/6859)
