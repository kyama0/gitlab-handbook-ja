---
title: Product Category フィールド
description: "Product Category フィールドと ZenDuo プロンプトを使ってサポートチケットを分類する方法"
category: Closing tickets
upstream_path: /handbook/support/workflows/product_category_field/
upstream_sha: 5b8afe7d206f5c195e463506206021ee3c9a4491
translated_at: "2026-05-08T01:46:59Z"
translator: claude
stale: false
---

## 概要

このドキュメントでは、Zendesk のカスタムフィールド「Product Category」と、その入力方法について説明します。これはチケット処理のクロージングフェーズで実施することが期待されている作業です。

## Product Category フィールドとは？

Product Category フィールドは Zendesk の複数選択フィールドで、各サポートチケットの中心にある GitLab の製品領域を識別するのに役立ちます。このフィールドは、チケットを **Solved** ステータスに設定する前に必須ではありませんが、私たちのプロダクトおよび開発チームにカスタマーインサイトを提供する上で非常に有益なフィールドです。

このフィールドを通じて収集されるデータにより、以下が可能になります:

- どの GitLab 機能がサポートボリュームを最も多く生んでいるかの分析
- プロダクトチームへのフィードバック用のトレンド識別
- ナレッジマネジメントとドキュメンテーション優先順位付けの改善

このフィールドのオプションは [categories.yaml](https://gitlab.com/gitlab-com/www-gitlab-com/blob/master/data/categories.yml) ファイルから入力されています。

## Product Category フィールドの使い方

### フィールドを入力するタイミング

Product Category フィールドは、チケットクローズプロセスの一環として入力する必要がありますが、チケットをクローズする前であればいつでも更新できます。チケットを「Solved」に設定するタイミングが最も適切なことが多いです。なぜなら、チケットの解決過程で得られる情報により、お客様が経験した問題の主要原因が何だったかを私たちがよりよく理解できるようになるからです。

### フィールドの入力方法

Product Category フィールドは 2 つの方法で入力できます:

1. **手動選択**: チケットに該当するカテゴリーが明確に分かっている場合は、複数選択フィールドから直接適切なオプションを選択します。1 つのチケットには複数のカテゴリーが該当することもあります。

2. **ZenDuo の支援**: チケットのコンテンツに基づいて最も関連性の高いカテゴリーを特定するのに役立つ「Product Category」[ZenDuo プロンプト](#using-the-zenduo-product-category-prompt) を使用します。

3. **Engineering Directory ツールの支援**: チケットが関連する機能が分かっている場合は、[Engineering Directory](https://gitlab-com.gitlab.io/support/toolbox/engineering-directory/) を使ってその機能が属するカテゴリーを特定できます。

## ZenDuo の「Product Category」プロンプトの使い方 {#using-the-zenduo-product-category-prompt}

### ZenDuo Product Category プロンプトとは？

ZenDuo の「Product Category」プロンプトは、チケットコンテンツを分析し、適切な Product Category の選択肢を提案するために設計された専用プロンプトです。このプロンプトは、一貫性があり有用な分類提案を提供するために、広範なイテレーションを通じて開発されました。LLM ツールであるため常に正解を出すわけではありませんが、一般的には十分役に立つ程度には正確です。

### ZenDuo プロンプトの使い方

**注意**: このプロンプトの処理にはある程度の時間がかかります。少なくとも 4 つのデータチャンクを Duo Chat に送信し、チケットの複雑さによっては大幅に増えることがあります。別のタブで他のチケットに取り組んでいる間に実行しておくことをお勧めします。

ZenDuo Product Category プロンプトを使うには:

1. 分類したいチケットに移動する
2. ZenDuo App を開く
3. 「Product Category」プロンプトを選択し、提案カテゴリーを待つ。
4. 提案を使って Product Category フィールドを入力する。（現時点ではこれは手動ステップです。）

提案は次のフォーマットで ZenDuo によって報告されることが期待されます。ここで %（パーセンテージ）はチケットの原因にそのカテゴリーが関連している確信度の指標です。確信度が 76% を下回る提案は返されません。

```markdown
Pipeline Composition | 92% | Pipeline failed during merge request
Compliance Management | 78% | Branch protection rules not enforced
```

### 期待される動作と制限事項

- プロンプトはチケット会話全体を分析して関連する製品領域を特定します
- 結果は概ね一貫していますが、時には役に立たない提案を返すことがあります
- 処理時間はチケットの長さと複雑さによって変動します
- フィールド入力前に、提案を手動でレビューすることが常に推奨されます

### プロンプトがうまく機能しないとき

特定のタイプのチケットで ZenDuo プロンプトが一貫して役に立たない結果を返すことがある場合、[フィードバック Issue](https://gitlab.com/gitlab-com/support/support-team-meta/-/issues/7020) を通じてフィードバックを提供してください。これによりプロンプトの効果が時間とともに改善されます。

## トラブルシューティング

### よくある問題

- **「I'm sorry, you have not selected a default GitLab Duo namespace」**: [ユーザー設定](https://gitlab.com/-/profile/preferences) に移動して、**Default GitLab Duo namespace** を選択してください。どれを選べばよいか分からない場合は、`GitLab.com` を選択してください。
- **ZenDuo プロンプトに時間がかかりすぎる**: 複雑なチケットでは想定される動作です。チケット作業の早い段階や、他のタスクを処理しているときにプロンプトを開始することを検討してください。
- **プロンプトが無関係なカテゴリーを提案する**: 手動レビューと選択が常に推奨されます。判断を使って最も適切なカテゴリーを選択してください。プロンプトの調整が必要な可能性があるため、フィードバック Issue にフィードバックを提供してください。ZenDuo の Chat 機能を使って「those categories are not in the filtered-categories.yml file」のようなフォローアッププロンプトを追加することもできます

### ヘルプを得るには

Product Category フィールドや ZenDuo プロンプトで問題が発生した場合:

- 今後のイテレーションを改善するため、プロンプトの効果について [フィードバック Issue](https://gitlab.com/gitlab-com/support/support-team-meta/-/issues/7020) にフィードバックを提供する

### 参考資料

- これが導入された [ロードマップ Issue](https://gitlab.com/gitlab-com/support/support-team-meta/-/issues/6859)
