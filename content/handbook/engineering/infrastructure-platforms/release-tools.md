---
title: リリースツール
description: "GitLab の新規リリースのためのツールガイド"
upstream_path: "/handbook/engineering/infrastructure-platforms/release-tools/"
upstream_sha: "0e6f01390a34aeb6706ace17d8d3c50e74e82d0d"
translated_at: "2026-04-29T03:49:37Z"
translator: claude
stale: false
---

## はじめに

[Release Tools](https://gitlab.com/gitlab-org/release-tools/) は、[Delivery チーム](/handbook/engineering/infrastructure-platforms/gitlab-delivery/delivery/) によって管理されているプロジェクトであり、リリースマネージャーが GitLab およびそのコンポーネントのリリースを実行するために使用されます。Release Tools は、新しいリリースのタグ付けやデプロイに関するマージリクエストへの通知など、特定の目的のための CI パイプラインを実行することで機能します。これらのパイプラインの一部は自動的にトリガーされ（例: デプロイの一部として）、その他はユーザーによってトリガーされます（例: chatops コマンドを使用）。

## 共通リンク

| **GitLab.com プロジェクト** | <https://gitlab.com/gitlab-org/release-tools> |
| **ops.gitlab.net ミラー** | <https://ops.gitlab.net/gitlab-org/release/tools> |
| **開発者ドキュメント** | <https://gitlab.com/gitlab-org/release-tools/-/tree/master/doc> |

## リリースプロセスの概要

Release Tools がリリースを実行する際、大まかに以下の手順を実行します。

1. GitLab の `VERSION` ファイルなど、1つ以上のバージョンファイルを更新する
1. Helm チャートファイルなど、追加のファイルを更新する
1. 変更ログを生成する
1. 変更をコミットする
1. これらの変更に対してアノテーション付きタグを作成する
1. これらすべてを適切なプロジェクトにプッシュする

正確な手順はプロジェクトによって若干異なります。例えば、Gitaly のリリースでは、正しい Gitaly バージョンが使用されるよう GitLab 内のいくつかのファイルも更新する必要があります。

## Release Tools の使用

Release Tools は、現在アクティブなリリースマネージャーと、新機能のテストなど（テスト目的での）Delivery チームのメンバーのみが使用できます。Release Tools の使用は主に chatops と Slack を通じて行われます。例えば、セルフマネージドのリリースにタグを付けるには次を実行します。

```text
/chatops run release tag 42.0.0
```

これにより、GitLab バージョン 42.0.0 のリリースタグ付けプロセスが開始されます。

詳細については、[release/docs プロジェクト](https://gitlab.com/gitlab-org/release/docs/)を参照してください。
