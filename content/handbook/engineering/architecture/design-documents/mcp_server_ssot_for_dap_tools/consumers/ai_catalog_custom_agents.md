---
title: "DAP ツールの SSoT としての MCP サーバー: AI Catalog のカスタムエージェント"
description: "AI Catalog のカスタムエージェントを、組み込みツールからその置き換えとなる MCP ツールに移行する方法です。"
toc_hide: true
upstream_path: /handbook/engineering/architecture/design-documents/mcp_server_ssot_for_dap_tools/consumers/ai_catalog_custom_agents/
upstream_sha: 8fce82673398dbfad74c667e7b35eb75d101d55d
lastmod: 2026-11-12T21:20:00-08:00
translated_at: "2026-11-14T09:16:01+00:00"
translator: codex
stale: false
---

AI Catalog のカスタムエージェントは、使用可能なツールを保存します。組み込みツールは ID で、MCP ツールは名前で保存します。

## 現状 {#today}

- ツールピッカーは、組み込みツールと MCP ツールを統合した 1 つのリストを表示するため、同じ機能が 2 回表示される場合があります。たとえば、`get_job_logs`（[組み込みツール](https://gitlab.com/gitlab-org/gitlab/-/blob/cfe6dfa7ae987c50c48d6cc64b87985170a12e21/ee/lib/ai/catalog/built_in_tool_definitions.rb#L129-134)、[DWS ツール](https://gitlab.com/gitlab-org/modelops/applied-ml/code-suggestions/ai-assist/-/blob/304bfc29079a0fbb3fce1eb0d97dd8be74808e19/duo_workflow_service/tools/job.py#L42)）と `get_job`（[MCP ツール](https://gitlab.com/gitlab-org/gitlab/-/blob/cfe6dfa7ae987c50c48d6cc64b87985170a12e21/app/services/mcp/tools/jobs/get_job_service.rb)）です。
- [`duo_agentic_chat_prefer_mcp_tools`](https://gitlab.com/gitlab-org/gitlab/-/blob/cfe6dfa7ae987c50c48d6cc64b87985170a12e21/config/feature_flags/gitlab_com_derisk/duo_agentic_chat_prefer_mcp_tools.yml)フラグ（[ロールアウトの Issue](https://gitlab.com/gitlab-org/gitlab/-/issues/598593)）は、タイトルを比較してピッカー内の一部の重複を非表示にします。デフォルトでは無効で、エイリアスを無視し、実行時の動作は何も変更しません。
- エージェントが MCP ツールと名前の一致する組み込みツールを選択すると、Rails は MCP ツールも配信するため、エージェントには両方が渡されます。
- エージェントを保存する方法は、GraphQL の作成と更新のミューテーションだけです。これらは任意の組み込みツール ID を受け付けます。
- Rails はリリース済みのエージェントバージョンへの変更を拒否します（[`validate_readonly`](https://gitlab.com/gitlab-org/gitlab/-/blob/cfe6dfa7ae987c50c48d6cc64b87985170a12e21/ee/app/models/ai/catalog/item_version.rb#L170-175)）。マイグレーションがリリース済みバージョンを SQL で書き換えたことはありますが、GitLab が保守する外部エージェントのみが対象です。たとえば、[Codex モデルの更新](https://gitlab.com/gitlab-org/gitlab/-/blob/cfe6dfa7ae987c50c48d6cc64b87985170a12e21/db/post_migrate/20260804093637_update_codex_agent_model_to_gpt53.rb)があります。ユーザーが作成したエージェントを変更した例はありません。この計画では保存済みバージョンを書き換えません。

## 計画 {#plan}

Rails は保存済みの各組み込みツールを、その置き換えとなる MCP ツールに対応付け、DWS は Chat と同じコードで置き換えます（[決定 005](../decisions/005_remove_built_ins.md)）。どちらも置き換えフラグで制御します（[決定 007](../decisions/007_rollout_flags.md)）。

1. ピッカーは、MCP ツールによって置き換えられる組み込みツールの列挙をやめます。MCP ツールの名前とエイリアスからペアを読み取るため（[決定 002](../decisions/002_pairs_in_meta.md)）、タイトルの比較と `duo_agentic_chat_prefer_mcp_tools` フラグを廃止できます。
1. 置き換え対象の組み込みツール ID を指定する作成または更新リクエストでも、引き続きその ID を保存するため、API スクリプトは動作し続けます。レスポンスには、置き換えとなる MCP ツールの名前を示す警告を含めます。それ以降、このエージェントは他の保存済みエージェントと同じように扱います（項目 3）。
1. 保存済みバージョンは、保存時の ID を維持します。セッションが開始すると、Rails は保存済みの各組み込みツールと並べて、その置き換えとなる MCP ツールを送信します。その後、DWS は[ルール 1](../_index.md#rules-that-apply-everywhere)を適用します。MCP ツールが到着した場合はそれを使用し、それ以外の場合はネイティブツールを使用します。エージェントの次のセッション以降、エージェントを編集できるすべての人に、AI Catalog のエージェントページ上で置き換えに関する通知を表示します。誰もこれを承諾する必要はありません。現在、Rails がエイリアスを解決するのはエージェントの MCP ツールのみで、組み込みツールではないため、この対応付けは新しいものです。
1. モデルには MCP ツール自身の名前である `gitlab_get_job` が表示され、説明には「`get_job_logs` を置き換えます。」が追加されます（[決定 004](../decisions/004_tool_name.md)）。「`get_job_logs` を使用してください」というエージェントのプロンプトでも、モデルを適切なツールに導きます。

## ロールアウト {#rollout}

カスタムエージェントは Chat の後に移行します。

## 未解決の問題 {#open-questions}

1. **エージェントページの通知をどのように表示しますか？**
   - 情報メッセージ、たとえば誰かがツールをクリックして開いたときに表示する小さなウィンドウにしますか。それとも警告にしますか？
   - 誰かが閉じるまで表示し続けますか。それともエージェントを再度保存するまで表示しますか？
1. **破壊的な相違がある入力スキーマをどのように扱いますか？** 各ペアの MCP ツールの引数は、ネイティブツールと異なる場合があります。引数の名前の変更、削除、新たな必須化、型や列挙値の変更です。選択肢は次のとおりです。
   - 可能な場合は呼び出しを変換します。たとえば `id` を `project_id` に、または `list_merge_request_diffs` を `include: ["diffs"]` を指定した `get_merge_request` に変換します。
   - 新しい引数の名前を示すエラーをエージェントに返します。その後、モデルは再試行しますが、毎回最初の呼び出しでトークンを消費します。
1. **アクセスを拡大する統合をどのように扱いますか？** `get_merge_request_conflicts` を選択したエージェントには、`get_merge_request` 全体が渡されます。[決定 009](../decisions/009_accept_widening_under_governance.md)は、ツールガバナンスが対応する場合にこれを受け入れることを提案しています。
