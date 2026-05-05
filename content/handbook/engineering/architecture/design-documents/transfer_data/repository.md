---
title: "リポジトリエグレス"
status: proposed
creation-date: "2023-09-07"
authors: [ "@vyaklushin" ]
approvers: [ "@ofernandez2", "@sean_carroll" ]
coach: ["@andrewn", "@grzesiek"]
owning-stage: "~group::source_code"
participating-stages: []
toc_hide: true
upstream_path: /handbook/engineering/architecture/design-documents/transfer_data/repository/
upstream_sha: d5f4aa38819ae2b572eb32e0d967394d0361a975
translated_at: "2026-04-27T00:00:00Z"
translator: claude
stale: false
---

ユーザーは Git のすべての fetch 操作でリポジトリエグレスイベントを生成します。これには `git clone`、`git fetch`、`git pull` などのコマンドが含まれます。これらはすべて、エンドユーザーに配信する必要があるデータを Gitaly からリクエストするためです。

Gitaly トラフィックの主な 2 つのクライアントは、
[GitLab Shell](https://gitlab.com/gitlab-org/gitlab-shell)（SSH トラフィック用）と
[Workhorse](https://gitlab.com/gitlab-org/gitlab/-/tree/master/workhorse)
（HTTP トラフィック用）です。

どちらのクライアントも Gitaly に `git-upload-pack` コマンドを送信し、リクエストされた変更を含む Git レスポンスをストリームバックします。

## 現在のメトリクス

| サービス      | `git-upload-pack` イベント数（1日あたり） |
|--------------|----------------------------------------------|
| Workhorse    | 約8,000万                                   |
| GitLab Shell | 約8,500万                                   |
| Gitaly       | 約1億6,500万（合計トラフィック）             |

各サービスの現在のメトリクスを確認できる Kibana リンク:

- [Workhorse](https://log.gprd.gitlab.net/goto/cf799060-e2b2-11ed-8afc-c9851e4645c0)
- [GitLab Shell](https://log.gprd.gitlab.net/goto/bd93f5c0-e2b2-11ed-a017-0d32180b1390)
- [Gitaly](https://log.gprd.gitlab.net/goto/9221c230-e2b4-11ed-8afc-c9851e4645c0)

合計イベント数:

- 1日あたり1億6,500万
- 1時間あたり750万
- 1分あたり12万

## ログ構造

### HTTP トラフィック

Workhorse ログにキャプチャされます。

| フィールド     | 説明                          |
|---------------|-------------------------------|
| written_bytes | 転送バイト数                  |
| uri           | 名前空間とプロジェクト名      |
| timestamp     | エグレスイベントのタイムスタンプ |

### SSH トラフィック

GitLab Shell ログにキャプチャされます。

| フィールド     | 説明                          |
|---------------|-------------------------------|
| written_bytes | 転送バイト数                  |
| project       | フルプロジェクト名            |
| root_namspace | ルート名前空間                |
| timestamp     | エグレスイベントのタイムスタンプ |
