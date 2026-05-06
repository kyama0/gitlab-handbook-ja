---
title: 脆弱性の説明と脆弱性の解決のトラブルシューティング
upstream_path: /handbook/engineering/development/sec/security-risk-management/security-insights/ve_vr_troubleshooting/
upstream_sha: 3480299851f7e2243d4f08b75dac452f89929636
translated_at: "2026-04-28T08:04:29Z"
translator: claude
stale: false
---

## VE と VR のトラブルシューティングリソースガイド

脆弱性の解決と脆弱性の説明を使用していると、エラーが発生することがあります。最も一般的な問題はこのセクションに文書化されています。
文書化されていない問題が見つかった場合は、解決策を見つけた後にこのセクションに文書化してください。

ローカルでの開発やテストのサポートが必要な場合は、[セットアップガイド](ve_vr_setup)を参照してください。

これらの機能の利用可能性については、まずこちらに記載された前提条件を確認してください：[脆弱性の説明](https://docs.gitlab.com/ee/user/application_security/vulnerabilities/#vulnerability-explanation)および[脆弱性の解決](https://docs.gitlab.com/ee/user/application_security/vulnerabilities/#vulnerability-resolution)。

また確認してください：[VR トラブルシューティングガイド](https://docs.gitlab.com/ee/user/application_security/vulnerabilities/#troubleshooting)。

| 問題 | 解決策 |
|-----------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Duo / VR 機能が利用できない | グループ/プロジェクトに Duo シートが割り当てられていない可能性があります。[Duo サブスクリプションアドオンの手順](https://docs.gitlab.com/ee/subscriptions/subscription-add-ons.html#assign-gitlab-duo-seats)に従ってください。|
| 「The upstream AI provider request timed out without responding」などのアップストリームエラー | サードパーティ AI に問題がある可能性があります。Anthropic の障害が考えられます - [ステータス](https://status.anthropic.com/)を確認してください。|
| 「an unexpected error has occurred」のような特定の繰り返しエラー | diff パッチまたは MR の作成に問題がある可能性があります。[エラーハンドリングコード](https://gitlab.com/gitlab-org/gitlab/-/blob/master/ee/lib/gitlab/llm/completions/resolve_vulnerability/helpers.rb)を参照してください。|
| 偽陽性エラー | 空のレスポンスと空の <fixed_code> を偽陽性として処理しています。[ドキュメント](https://docs.gitlab.com/ee/user/application_security/vulnerabilities/#troubleshooting)、[レスポンス修飾コード](https://gitlab.com/gitlab-org/gitlab/-/blob/master/ee/lib/gitlab/llm/response_modifiers/resolve_vulnerability.rb)を参照してください。|
| VR ボタンが無効になっている場合、その CWE は現時点でサポートされているリストに含まれていません。| 機能カバレッジの制限：VR は一連の CWE でのみ利用可能です。SSOT [ドキュメント](https://docs.gitlab.com/user/application_security/vulnerabilities/#supported-vulnerabilities-for-vulnerability-resolution)および[スプレッドシート](https://docs.google.com/spreadsheets/d/1G5zN4s4Inw2xhcyZP1U1oDW1erJuxL7QZsXSoOGNKeI/edit?gid=1605042126#gid=1605042126)を確認してください。|
| Elastic でカスタムエラーをクエリする | さらなる調査のためにこの[ダッシュボード](https://log.gprd.gitlab.net/app/r/s/8no4f)を確認してください。|

### CWE サポート

#### 脆弱性の説明

脆弱性の説明は、すべての SAST 脆弱性で有効になっています。

#### 脆弱性の解決

脆弱性の解決は SAST 脆弱性に対して有効になっていますが、[脆弱性の解決でサポートされる脆弱性](https://docs.gitlab.com/user/application_security/vulnerabilities/#supported-vulnerabilities-for-vulnerability-resolution)に文書化された特定の CWE セットのみです。

脆弱性が脆弱性の解決をサポートするかどうかは、CWE 識別子に基づいて判断します。このサポートは 2 つのメカニズムで追跡されます。

1. 脆弱性レコードのデータベースフィールド `has_vulnerability_resolution`

   このデータベースフィールドは[インジェスト](https://gitlab.com/gitlab-org/gitlab/-/blob/master/ee/app/services/security/ingestion/tasks/ingest_vulnerability_reads/update.rb)中に追加およびバックフィルされます。つまり、CWE リスト更新後のデフォルトブランチでパイプラインを正常に実行すれば、最新の値が含まれるようになります。

   このフィールドは例えば以下で使用されます：
   - 脆弱性レポート（フィルタリングと表示）
   - 脆弱性の詳細（例：「AI で解決」の利用可能性）

   > **注意：** バックグラウンドマイグレーションはこの値をバックフィルするために厳密には必要ではありませんが、現在は確立されたワークフローの一部です（[マイグレーション例](https://gitlab.com/gitlab-org/gitlab/-/merge_requests/188420)を参照）。このプロセスへの変更は明確に文書化する必要があります。
1. [ハードコードされたリスト](https://gitlab.com/gitlab-org/gitlab/-/blob/master/ee/app/models/vulnerabilities/finding.rb?ref_type=heads#L25)
   - パイプラインの検出結果（例：マージリクエスト内）で使用されます。これらはまだ脆弱性レコードとして完全にインジェストされておらず、データベースの `has_vulnerability_resolution` フィールドが未設定のままです。

> **注意：** サポートされていない CWE は、プロジェクトレベルで `ignore_supported_cwe_list_check` フィーチャーフラグを有効にすることでテストできます（[MR](https://gitlab.com/gitlab-org/gitlab/-/merge_requests/175608)）。

### ログを確認するダッシュボード

1. [本番ログダッシュボード](https://log.gprd.gitlab.net/app/r/s/Ke9id) - duo リクエストのタイミングに関するリクエスト/レスポンス/エラーと p50/p90/p99 を表示します。
1. [ステージングログダッシュボード](https://nonprod-log.gitlab.net/app/r/s/2OKmz)

### VR アラートの監視

1. [Elastic ウォッチャー](https://log.gprd.gitlab.net/app/management/insightsAndAlerting/watcher/watches/watch/test_g_srm_security_insights_ai_error_watcher/status)
1. アラートを確認する Slack チャンネル：[`#g_srm_security_insights_ai_error_alerts`](https://gitlab.enterprise.slack.com/archives/C07V46USRHT)
1. ウォッチャーで使用される Elastic ログ：https://log.gprd.gitlab.net/app/r/s/foNLr
1. IaC リポジトリのエラーウォッチャー：https://gitlab.com/gitlab-com/runbooks/-/blob/master/elastic/managed-objects/log_gprd/watches/test_g_srm_security_insights_ai_error_watcher.jsonnet
1. このウォッチャーのアラート閾値は過去 90 分間で 5 エラーです。必要に応じてウォッチャーを[このページ](https://log.gprd.gitlab.net/app/management/insightsAndAlerting/watcher/watches/watch/test_g_srm_security_insights_ai_error_watcher/status)から非アクティブ化できます。閾値の値は[編集ページ](https://log.gprd.gitlab.net/app/management/insightsAndAlerting/watcher/watches/watch/test_g_srm_security_insights_ai_error_watcher/edit)から変更できます。

### リソース

1. ドキュメント
   - [脆弱性の解決](https://docs.gitlab.com/ee/user/application_security/vulnerabilities/#vulnerability-resolution)
   - [マージリクエストでの脆弱性の解決](https://docs.gitlab.com/ee/user/application_security/vulnerabilities/#vulnerability-resolution-in-a-merge-request)
1. [VE と RV の LLM プロンプト](https://gitlab.com/gitlab-org/gitlab/-/tree/master/ee/lib/gitlab/llm/templates/vulnerabilities)
