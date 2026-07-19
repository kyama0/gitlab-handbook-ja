---
title: 'ラウンドロビン'
description: 'チケットラウンドロビンに関するドキュメント'
upstream_path: "/handbook/eta/css/zendesk/tickets/round-robin/"
upstream_sha: "1c5f183add4a3220f2aa77e0c98565c4fad645e2"
translated_at: "2026-07-18T06:54:37+09:00"
translator: codex
stale: false
lastmod: "2026-07-14T15:22:25-05:00"
---

このガイドでは、特定の基準に基づいてチケットを割り当てる自動化システム、チケットラウンドロビンについて説明します。

{{% alert title="技術的な詳細" color="primary" %}}

- デプロイタイプ: `Ad-hoc`
- プロジェクトリポジトリ: [Zendesk US Government](https://gitlab.com/gitlab-support-readiness/zendesk-us-government/tickets/round-robin)

**注記**: 現時点では Zendesk US Government にのみ適用されます。

{{% /alert %}}

## チケットラウンドロビンを理解する

### 仕組み

{{% alert title="技術的な詳細" color="primary" %}}

- Ruby バージョン: `3.2.2`
- Gem 一覧:
  - [activesupport](https://rubygems.org/gems/activesupport)
  - [base64](https://rubygems.org/gems/base64)
  - [concurrent-ruby](https://rubygems.org/gems/concurrent-ruby)
  - [faraday](https://rubygems.org/gems/faraday)
  - [faraday-multipart](https://rubygems.org/gems/faraday-multipart)
  - [faraday-retry](https://rubygems.org/gems/faraday-retry)
  - [json](https://rubygems.org/gems/json)
  - [openssl](https://rubygems.org/gems/openssl)
  - [yaml](https://rubygems.org/gems/yaml)
- CI/CD イメージ:
  - `curlimages/curl:latest`
  - `ruby:3.2.2`
- スケジュールされた実行時間: 月曜日から金曜日まで 10 分ごと、0500-1659 Pacific（`*/10 5-16 * * 1-5`）

{{% /alert %}}

各ジョブの実行前に、必要なアクションを実行できるようイメージをセットアップするため、いくつかのアクションを実行します。

- [support-team](https://gitlab.com/gitlab-support-readiness/support-team) のリポジトリを `data/support-team` にクローンする
- コマンド `ruby -v` の実行結果を出力する
- `bundler` gem をインストールする
- `bundle` コマンドを実行する
- 環境変数 `SERVICE_CREDS` の値を `data/config.json` ファイルへ書き込む

この後、`./bin/round_robin` スクリプトを実行します。

作成済みのビューを使用して、スクリプトはラウンドロビンするチケットの一覧を取得します。チケットがない場合は、ステータスコード 0 で終了します。

次に、[support-team](https://gitlab.com/gitlab-support-readiness/support-team)の情報を確認して現在利用可能なエージェントを特定し、PTO 中のエージェントと、現在の勤務時間内ではないエージェントを除外します。利用可能なエージェントがいない場合は、Support 管理の Slack incoming Webhook を通じて Slack 制御に通知を投稿し、ステータスコード 0 で終了します。

現在利用可能なエージェントの一覧を使用して、スクリプトは検出したチケットの `Ticket Weight` フィールド（チケットの複雑さを示す数値）を使用し、各エージェントの現在の作業負荷を判断します。これは、ステータスが solved 未満の割り当て済みチケットを確認して行います。

[Not round robined ビュー](https://gitlab-federal-support.zendesk.com/agent/filters/360240736651)を使用してラウンドロビンが必要なチケットを収集した後、スクリプトはそれらを作業負荷が最も低いエージェントに割り当てます（作業負荷を 1 増やします）。

## 管理者のタスク

### ラウンドロビンの変更

{{% alert title="警告" color="warning" %}}

- これは、対応するリクエスト Issue（Feature Request、Administrative、Bug など）がある場合にのみ実行してください。存在しない場合は、最初に作成し、通常のプロセスを完了させてから対応してください。

{{% /alert %}}

ラウンドロビンを変更するには、プロジェクトリポジトリで MR を作成する必要があります。正確にどの変更を行うかは、リクエスト自体によって決まります。

同僚が MR をレビューして承認した後、MR をマージできます。マージ後、次回のスケジュールされたパイプライン実行で使用されます。

## よくある問題とトラブルシューティング

これは必要に応じて項目を追加する、生きたセクションです。
