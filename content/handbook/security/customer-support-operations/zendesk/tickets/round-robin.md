---
title: 'ラウンドロビン'
description: 'チケットのラウンドロビンに関するドキュメント'
upstream_path: /handbook/security/customer-support-operations/zendesk/tickets/round-robin/
upstream_sha: 78b430bc8e2a925f210024d512218ce1d8d42106
translated_at: "2026-05-09T22:41:14Z"
translator: claude
stale: false
lastmod: "2026-05-26T12:05:00-05:00"
---

このガイドでは、特定の基準に基づいてチケットの割り当てを行う自動化システムである、チケットのラウンドロビンについて説明します。

{{% alert title="技術詳細" color="primary" %}}

- デプロイメントタイプ: `Ad-hoc`
- プロジェクトリポジトリ: [Zendesk US Government](https://gitlab.com/gitlab-support-readiness/zendesk-us-government/tickets/round-robin)

**注意**: 現時点では Zendesk US Government にのみ適用されます。

{{% /alert %}}

## チケットラウンドロビンを理解する

### 仕組み

{{% alert title="技術詳細" color="primary" %}}

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
- 実行スケジュール: 月〜金、太平洋時間 0500-1659 の間 10 分ごと (`*/10 5-16 * * 1-5`)

{{% /alert %}}

各ジョブは実行前に、必要な処理を行えるようイメージをセットアップするためのアクションをいくつか実行します:

- [support-team](https://gitlab.com/gitlab-support-readiness/support-team) のリポジトリを `data/support-team` にクローン
- `ruby -v` コマンドの実行結果を出力
- `bundler` gem をインストール
- `bundle` コマンドを実行
- 環境変数 `SERVICE_CREDS` の値をファイル `data/config.json` に出力

その後、`./bin/round_robin` スクリプトが実行されます。

スクリプトは事前に作成されたビューを使ってラウンドロビン対象のチケット一覧を取得します。チケットがない場合、スクリプトはステータスコード 0 で終了します。

次にスクリプトは、[support-team](https://gitlab.com/gitlab-support-readiness/support-team) の情報をチェックして現在対応可能なエージェントを決定し、PTO 中のエージェントや勤務時間外のエージェントを除外します。対応可能なエージェントが存在しない場合、Support が管理する Slack incoming webhook 経由で Slack コントロールに通知を投稿します(そしてステータスコード 0 で終了します)。

現在対応可能なエージェントの一覧を使い、次にこれらのエージェントの現在のワークロードを判定します(これは、解決済み未満のステータスを持つ割り当て済みチケットを参照することで行われ、チケットの `Ticket Weight` フィールド(チケットの複雑さを示す数値)を使います)。

ラウンドロビンが必要なチケットを集めた後([Not round robined view](https://gitlab-federal-support.zendesk.com/agent/filters/360240736651) を使用)、スクリプトは最もワークロードの低いエージェントにそれらを割り当てます(そのエージェントのワークロードを 1 増分します)。

## 管理者向けタスク

### ラウンドロビンの変更

{{% alert title="警告" color="warning" %}}

- これは対応するリクエスト Issue (Feature Request、Administrative、Bug など) がある場合のみ行うべきです。存在しない場合は、まず作成してください(そして対応する前に通常のプロセスを通してください)。

{{% /alert %}}

ラウンドロビンを変更するには、プロジェクトリポジトリで MR を作成する必要があります。具体的な変更内容はリクエスト自体によって異なります。

ピアによるレビュー・承認後、MR をマージできます。マージされると、次回のスケジュールパイプライン実行時に使用されます。

## よくある問題とトラブルシューティング

このセクションは必要に応じて項目が追加されていく生きたセクションです。
