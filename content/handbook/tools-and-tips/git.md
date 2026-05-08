---
title: "git"
upstream_path: /handbook/tools-and-tips/git/
upstream_sha: 23c2fc5bd7f24c010a605fa6c69802a42ed0cfd0
translated_at: "2026-05-07T22:45:00Z"
translator: claude
stale: false
---

`git` が何かはご存じの通りです。 😄

## ref を理解する

- 現在のブランチ名を取得する
  - `git rev-parse --abbrev-ref HEAD`

## ファイルを一覧表示する

- HEAD コミットからファイルを一覧表示する
  - `git diff-tree --no-commit-id --name-only -r HEAD`
- 現在のワーキングツリーのファイルを一覧表示する
  - `git diff --name-only`
- `master` から変更されたファイルを一覧表示する
  - `git diff --name-only master`

## コミットを探す

- 指定されたコミットのマージコミットを探す
  - `commit=$0 git rev-list $commit..HEAD --ancestry-path | grep -E $(git rev-list $commit..HEAD --first-parent | paste -s -d \"|\" -) | tail -1`

## コミットをプッシュする

- コミットをプッシュするが、[CI パイプラインの実行はスキップする](https://docs.gitlab.com/ee/ci/pipelines/#skip-a-pipeline)
  - `git push -o ci.skip`
