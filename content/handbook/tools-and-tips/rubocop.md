---
title: "RuboCop"
upstream_path: /handbook/tools-and-tips/rubocop/
upstream_sha: 68af60af15ea4dcb51c3d985f7473b212e4f2cb4
translated_at: "2026-05-07T15:33:18Z"
translator: claude
stale: false
---

[RuboCop](https://rubocop.org/) は [Ruby](https://www.ruby-lang.org/en/) のコードに対して静的コード解析を実行するために使用されます。

## "魔法" のワンライナー

### 一連のファイルを RuboCop する

[Git ページ](/handbook/tools-and-tips/git/#listing-files) のファイル一覧表示のヒントを RuboCop と組み合わせられます。

- 現在のコミットを RuboCop する - `git diff-tree --no-commit-id --name-only -r HEAD --diff-filter AMT | xargs bundle exec rubocop`
- 作業ツリーの変更を RuboCop する - `git diff --name-only --diff-filter AMT | xargs bundle exec rubocop`
- ブランチからのすべての変更を RuboCop する - `git diff --name-only master --diff-filter AMT | xargs bundle exec rubocop`
