---
title: 'GitLab'
description: 'GitLab システムチェッカーのドキュメント'
upstream_path: "/handbook/eta/css/system-checkers/gitlab/"
upstream_sha: "1c5f183add4a3220f2aa77e0c98565c4fad645e2"
translated_at: "2026-07-18T06:43:41+09:00"
translator: codex
stale: false
lastmod: "2026-07-14T15:22:25-05:00"
---

<sup>[gitlab-com/support/support-ops/support-ops-project#1895](https://gitlab.com/gitlab-com/support/support-ops/support-ops-project/-/issues/1895)で導入</sup>

{{% alert title="技術的な詳細" color="primary" %}}

- デプロイタイプ: `Ad-hoc`
- プロジェクトリポジトリ: [gitlab-support-readiness/system-checkers/gitlab](https://gitlab.com/gitlab-support-readiness/system-checkers/gitlab)

{{% /alert %}}

## GitLab システムチェッカーを理解する

### GitLab システムチェッカーとは

GitLab システムチェッカーは、GitLab の状態を確認するためにスケジュールされたパイプラインを使用する仕組みです。具体的には、次を確認します。

- 保留中の CI/CD ジョブが 50 件を超える Customer Support Systems プロジェクト
- 実行時間が 25 分を超えている CI/CD ジョブを含む Customer Support Systems プロジェクト

[#css-audit-events Slack チャンネル](https://gitlab.enterprise.slack.com/archives/C04A6E1KB89)に投稿します。

### 仕組み

毎時 UTC の開始時（`0 * * * *`）に、スケジュールされたパイプラインが `bin/run` スクリプトを実行します。このスクリプトは次を行います。

- プロジェクトの一覧を反復処理して、次を確認する:
  - 保留中の CI/CD ジョブ数
    - 値が 50 を超える場合、問題の配列に情報を保存する
  - 実行時間が 25 分を超えている実行中の CI/CD ジョブ数
    - 該当するものがあれば、問題の配列に情報を保存する
- 問題の配列内の各情報について、[#css-audit-events Slack チャンネル](https://gitlab.enterprise.slack.com/archives/C04A6E1KB89)に投稿する

## GitLab システムチェッカーの変更

{{% alert title="注記" color="primary" %}}

- プロジェクトに対する少なくとも `Developer` アクセスが必要です。
- これは、対応するリクエスト Issue（Feature Request、Administrative、Bug など）がある場合にのみ実行してください。存在しない場合は、最初に作成し、通常のプロセスを完了させてから対応してください。

{{% /alert %}}

GitLab システムチェッカーを変更するには、プロジェクトリポジトリで MR を作成する必要があります。正確にどの変更を行うかは、リクエスト自体によって決まります。

同僚が MR をレビューして承認した後、MR をマージできます（次のトリガー実行時に変更が適用されます）。

## よくある問題とトラブルシューティング

これは必要に応じて項目を追加する、生きたセクションです。
