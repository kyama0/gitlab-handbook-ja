---
title: "Create:Source Code AI プロンプト"
description: より効率的に作業するために Duo Chat で使用できる共通プロンプト
upstream_path: /handbook/engineering/devops/create/source-code/ai-prompts/
upstream_sha: 81a617744130f76604f641d4483828edd0d60d2f
translated_at: "2026-04-28T11:23:44Z"
translator: claude
stale: false
---

## GitLab のディスカッションからアクションへ

### ユースケース / インパクト

スレッド/ディスカッションから詳細な Issue を生成する。

インパクト: 詳細なディスカッションを要約してフォローアップ Issue に記録することで、各ステップのイテレーションとマージまでの時間が改善されます。

（levelup の[デモ](https://levelup.edcast.com/insights/23921833)を参照）

### プロンプト

使用するディスカッションを特定し、スレッドの最初のコメントへの URL をコピーします（タイムスタンプを右クリックしてリンクをコピー）。

```markdown
Can you transform the following discussion TOP_COMMENT_LINK into an issue description? Keep it concise and useful for an engineer.
```

## MR のセキュリティ脆弱性の検出

### ユースケース / インパクト

MR に取り組んでいるときにセキュリティ上の脆弱性を見逃していないか確認したい場合に、このプロンプトを使用してそれらを特定できます。

インパクト: レビュー時間の短縮や、コードに含まれる脆弱性の減少につながる可能性があります。

（levelup の[デモ](https://levelup.edcast.com/insights/23921833)を参照）

### プロンプト

マージリクエストページ上で、エージェント型 Duo Chat にこのプロンプトを入力してください:

```markdown
Can you detect any security concerns that are against OWASP's top 10 vulnerabilities in these MR changes? Provide examples.
```

## 複雑な MR フィードバックのデコード

### ユースケース / インパクト

すぐに完全に理解できないフィードバックを受け取ることがあります。このプロンプトはそのフィードバックをデコードして分解し、理解して対応しやすくするのに役立ちます。

インパクト: 著者（あなた）とレビュアーの間のディスカッションを加速することでレビュー時間を短縮できます。

（levelup の[デモ](https://levelup.edcast.com/insights/23921833)を参照）

### プロンプト

* 確認したいコメントへのリンクを取得します。
* そのコメントの意味についての自分の解釈を書き留めます。

この情報を使って次のようなプロンプトを作成します:

```markdown
From the reviewers comment LINK_TO_COMMENT, I understand the following YOUR_INTERPRETATION. Does this make sense? Am I missing something?
```

## レガシーコードのデバッグ

### ユースケース / インパクト

私たちのグループ（group::source code）にとって最も難しいことの一つは、現在のコーディング標準からかなりかけ離れてしまったレガシーコードを扱うことです。多くの場合、何かを修正するにはコードベース全体で共有されているユーティリティを触る必要があります。このような広い影響範囲は、リグレッションを避けるための修正の検証に非常に時間がかかることを意味します。

### プロンプト

```markdown
Can you give me an overview of the code logic for [COMPONENT_NAME]?
```

```markdown
There is an potential xss issue, can you locate the problematic file/method?
```

```markdown
Can you tell me where we use this method and which product feature it covers? 
```

<!-- テンプレートを以下から使用してください。コピー＆ペーストして独自のものを追加してください:

## PROMPT_TITLE

### ユースケース / インパクト

REPLACE_WITH_DESCRIPTION

### プロンプト

REPLACE_WITH_INTRO_STEPS

```markdown
REPLACE_WITH_PROMPT
```
-->
