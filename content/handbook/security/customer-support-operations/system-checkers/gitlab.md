---
title: 'GitLab'
description: 'GitLab のシステムチェッカーに関するドキュメント'
date: 2026-01-06
upstream_path: /handbook/security/customer-support-operations/system-checkers/gitlab/
upstream_sha: 1e195b58b9f249ff10bd0e705106c320fee86141
translated_at: "2026-05-10T00:00:00Z"
translator: claude
stale: false
lastmod: "2026-01-21T12:28:59-06:00"
---

<sup>[gitlab-com/support/support-ops/support-ops-project#1895](https://gitlab.com/gitlab-com/support/support-ops/support-ops-project/-/issues/1895) を経て導入</sup>

{{% alert title="技術的詳細" color="primary" %}}

- デプロイメントタイプ: `Ad-hoc`
- プロジェクトリポジトリ: [gitlab-support-readiness/system-checkers/gitlab](https://gitlab.com/gitlab-support-readiness/system-checkers/gitlab)

{{% /alert %}}

## GitLab のシステムチェッカーを理解する

### GitLab のシステムチェッカーとは

GitLab のシステムチェッカーは、スケジュール済みパイプラインを使って GitLab のステータスをチェックする仕組みです。具体的には以下をチェックしています。

- 50 件を超える pending CI/CD ジョブを抱えるカスタマーサポートオペレーションのプロジェクト
- 25 分を超えて実行されている CI/CD ジョブを抱えるカスタマーサポートオペレーションのプロジェクト

[#support_ops-audit-events Slack チャンネル](https://gitlab.enterprise.slack.com/archives/C04A6E1KB89) に投稿します。

### 仕組み

毎時 0 分（UTC、`0 * * * *`）に、スケジュール済みパイプラインが `bin/run` スクリプトを実行します。これにより以下が実施されます。

- プロジェクトのリストに対して反復処理を行い、以下をチェックします:
  - pending な CI/CD ジョブの件数
    - 値が 50 を超えていれば、その情報を問題（problems）の配列に保存します
  - 実行時間が 25 分を超えている CI/CD ジョブの件数
    - 該当があれば、その情報を問題（problems）の配列に保存します
- 問題の配列内の各情報について、[#support_ops-audit-events Slack チャンネル](https://gitlab.enterprise.slack.com/archives/C04A6E1KB89) に投稿します

## GitLab のシステムチェッカーを変更する

{{% alert title="注意" color="primary" %}}

- これにはプロジェクトに対して少なくとも `Developer` 権限が必要です。
- 対応する依頼 Issue（機能リクエスト、管理上のもの、バグなど）が存在する場合に限り実施するべきです。存在しない場合は、まず作成し、標準のプロセスを経てから対応してください。

{{% /alert %}}

GitLab のシステムチェッカーに変更を加えるには、プロジェクトリポジトリでマージリクエストを作成する必要があります。具体的な変更内容は依頼そのものによって異なります。

ピアによるレビューと承認を受けたら、マージリクエストをマージできます（次回のトリガー実行時に変更が適用されます）。

## よくある問題とトラブルシューティング

このセクションは必要に応じて項目が追加されていくリビングドキュメントです。
