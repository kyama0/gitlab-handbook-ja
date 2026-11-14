---
title: "DAP ツールの唯一の情報源としての GitLab MCP サーバー"
description: "GitLab MCP サーバーを DAP の GitLab ツールの唯一の提供元にする計画：現在ツールが重複している箇所、ネイティブツールを置き換えるルール、利用側ごとの計画、決定事項。"
status: proposed
creation-date: "2026-10-28"
authors: [ "@terrichu" ]
coaches: [ "@jessieay" ]
dris: [ "@fdegier", "@amandarueda" ]
owning-stage: "~devops::agent foundations"
participating-stages: []
toc_hide: true
upstream_path: /handbook/engineering/architecture/design-documents/mcp_server_ssot_for_dap_tools/
upstream_sha: 8fce82673398dbfad74c667e7b35eb75d101d55d
lastmod: 2026-11-12T21:20:00-08:00
translated_at: "2026-11-14T09:06:35+00:00"
translator: codex
stale: false
---

<!-- Design Documents often contain forward-looking statements -->
<!-- vale gitlab.FutureTense = NO -->

{{< engineering/design-document-header >}}

## 概要 {#summary}

GitLab Duo Agent Platform（DAP）には、GitLab ツールのセットが 2 つあります。Duo Workflow Service（DWS）はネイティブツールを
Python で実装し、Rails は
[GitLab MCP サーバー](https://docs.gitlab.com/user/model_context_protocol/mcp_server/)のツールを提供します。ネイティブの `get_job_logs` と MCP ツールの `get_job` など、多くは同じ役割を果たします。
このドキュメントでは、ネイティブツールと、それを置き換える MCP ツールの組み合わせを**ペア**と呼びます。

このドキュメントは、破壊的変更を起こさずに、すべての利用側で DAP が GitLab ツールを取得する場所を
MCP サーバーに一本化するための計画です。MCP サーバーは一般提供済みのため、このドキュメントでは
サーバー自体を説明しません。[エピック &23947](https://gitlab.com/groups/gitlab-org/-/work_items/23947)の作業だけを扱います。作業を行う Issue はエピックにまとめます。
このドキュメントには、目標、利用側ごとの計画、決定事項を記載します。

## 目標 {#goals}

- Chat、AI Catalog のカスタムエージェント、基盤エージェントが GitLab ツールを MCP サーバーから取得します。
- MCP ツールがネイティブツールを置き換えるとき、DAP は両方ではなく、どちらか一方を提供します。
- Rails は、置き換えられたネイティブツールの提供を停止し、後で削除します。
- MCP サーバー内の重複するツール自体も、置き換え先のツールのエイリアスに統合します。
- 何も壊さないようにします。保存済みのエージェントとフロー、エージェントを作成する API スクリプト、古いツール名を指定するプロンプトは、
  引き続き動作します。

### 目標に含めないこと {#non-goals}

- 古いツール名がエイリアスになることと、`_meta` に新しい `com.gitlab/replaces` キーが入ることを除き、
  外部 MCP クライアント（Claude Code、Cursor、IDE）から見えるものを変更すること。
- サポート対象の GitLab バージョンが必要としている間に、DWS からネイティブツールを削除すること。
- DWS の従来の Python ワークフロー。
- フローに MCP ツールを提供すること。現在、フローには MCP ツールが提供されないため、重複はありません。ADR-005 で私たちの MCP サーバーを提供し、
  ペアが存在するまでは、ツール名による選択でネイティブツールを優先します（[フロー](consumers/flows.md)）。
- DAP を私たちの MCP サーバーの `orbit` ツールセットへ移行すること。DWS は別の Orbit MCP サーバーから Orbit のツールを取得しており、
  そのサーバーを廃止するには Orbit チーム、DWS のオーナー、請求側の対応が必要です
  （[&23430](https://gitlab.com/groups/gitlab-org/-/work_items/23430)、
  [&24456](https://gitlab.com/groups/gitlab-org/-/work_items/24456)）。

## 現在ツールが重複している箇所 {#where-tools-are-duplicated-today}

| # | 箇所 | 現状 |
|---|---|---|
| 1 | MCP サーバー内 | 一覧に表示しない 10 個のツールが、その置き換え先のツールと併存しています。たとえば `get_merge_request_diffs` と、`include: ["diffs"]` を指定する `get_merge_request` です。 |
| 2 | DAP Chat | GitLab.com では、Chat が同じ役割のネイティブツールと MCP ツールのペアを約 20 組取得します。重複を排除するのは `search` のみで、従来の `chat` ワークフローに限られ、チェックでは MCP ツールが届いたかを確認しません。 |
| 3 | AI Catalog のカスタムエージェント | ツール選択画面には両方が表示されます。MCP ツールと同じ名前の組み込みツールを選択したエージェントは、実行時に両方を取得します。 |
| 4 | 基盤エージェント | ネイティブツールに加え、そのエージェントに AI Catalog のバージョンがある場合は、そのバージョンに列挙された MCP ツールを取得します。 |
| 5 | フロー | ネイティブツールのみです。フローは MCP ツールを取得しないため、重複はありません。 |
| 6 | Orbit | Orbit のコマンドツールは MCP サーバーの `orbit` ツールセット内にありますが、DAP は別の Orbit MCP サーバー（`api/v4/orbit/mcp`）から取得します。 |
| 7 | 新しい MCP ツール | 新しい MCP ツールがネイティブツールと重複する場合があります。たとえば `search_documentation` とネイティブの `gitlab_documentation_search` です。 |

## すべてに適用するルール {#rules-that-apply-everywhere}

1. **両方のツールが存在する間は、私たちの MCP ツールが届いた場合にのみ切り替えます。** DAP は、置き換え先の MCP ツールが登録され、
   私たちの MCP サーバーから提供され、ガバナンスを通過した場合にのみ、ネイティブツールを除外します。それ以外の場合、セッションは
   現在と同じくネイティブツールを維持します。このルールは移行中にのみ適用します。ネイティブツールを削除した後は
   （ルール 5）、MCP ツールだけになります。
   - 古い GitLab バージョンや、[ロールアウトのゲート](#rollout-gates)がオフのインスタンスでは、セッションは
     ネイティブツールを維持します。
   - 切り替えフラグ（[決定 007](decisions/007_rollout_flags.md)）は、
     `duo_workflow_local_tool_governance`（[#613544](https://gitlab.com/gitlab-org/gitlab/-/issues/613544)）がオンの場所でのみロールアウトし、
     DWS はツールガバナンスが有効なセッションでのみ切り替えるため、両方のツールに同じルールが適用されます。
   - #613544 がフェーズ 3 に間に合わない場合、提供されるまでの代替策として、ツールガバナンスがないセッションでは
     読み取り専用のペアのみを切り替えます。
2. **同等性がなければ切り替えません。** ペアは、MCP ツールが次の点でネイティブツールをカバーする場合にのみ有効になります。
   - 引数と出力
   - 読み取りか書き込みか。承認の扱いが変わらないようにします。Rails は `readOnlyHint` が true の MCP ツールを事前承認し
     （[`preapproved_tools_from_annotations`](https://gitlab.com/gitlab-org/gitlab/-/blob/457086d081040a46b5c4ece463b084bb350b554b/ee/app/services/ai/duo_workflows/mcp_config_service.rb#L180-191)）、
     DWS は `read_only_gitlab` に含まれるネイティブツールを事前承認します
     （[`_READ_ONLY_GITLAB_TOOLS`](https://gitlab.com/gitlab-org/modelops/applied-ml/code-suggestions/ai-assist/-/blob/e805bf7877976975dc70a5d3c549cd38ff6ab39f/duo_workflow_service/components/tools_registry.py#L143-201)）。
     この 2 つは一致する必要があります。
   - 差分の除外など、現在 DWS が行う出力処理
   - アクセス範囲。ツールガバナンスが拡大分をカバーしない限り、MCP ツールがネイティブツールを超える範囲にアクセスしてはなりません
     （[決定 009](decisions/009_accept_widening_under_governance.md)）。アクセス範囲が広がるペアは、
     決定 009 の事前承認ルールも待ちます。

   ネイティブツールにツールオプションを設定するフローコンポーネントは、オプションが MCP ツールへ引き継がれないため、
   ネイティブツールを維持します。他のコンポーネントと Chat は切り替えます。2026 年 11 月 9 日時点では、`workplan` が
   `create_work_item_note` に、`fix_pipeline` が `get_pipeline_failing_jobs` と `get_job_logs` にオプションを設定しています。コンポーネントは、
   MCP ツールが同じオプションを受け取れ、
   [提案中の ADR-005](https://gitlab.com/gitlab-org/modelops/applied-ml/code-suggestions/ai-assist/-/blob/59a7d5abb8a2cfeb15fdbd966b5bd03bfe251a43/docs/flow_registry/decisions/adr-005-toolset-selectors.md#L84-88)で
   MCP ツールにオプション（`ops`）を設定できるようになってから、新しいメジャーフローバージョンで MCP ツールへ移行します。

   ガバナンスについて別途チェックする必要はありません。ペアが存在するのは、ネイティブ名が一覧に表示される MCP ツールの名前か、
   そのエイリアスのいずれかである場合だけであり（[決定 002](decisions/002_pairs_in_meta.md)）、ペアを切り替えるのはツールガバナンスが有効な場所だけです
   （ルール 1）。
3. **保存済みのものは書き換えません。** 保存済みのエージェントとフローのバージョンは、保存時のツール名を維持します。保存済み
   エージェントは Chat と同じ切り替えによって MCP ツールを取得し、その編集権限を持つ人に通知します。決定論的なフローの
   ステップは、新しいメジャーフローバージョンでのみ変更します。
4. **ネイティブツールと重複する新しい MCP ツールは、ペアとともにリリースします。** MCP ツールを追加する MR は、そのペアを
   [ペアのページ](pairs.md)に記載します。ペアを成立させるエイリアスは、そのペアが同等性チェックに合格してからマージし、
   それによってペアが有効になります。ネイティブツールと同じ名前の MCP ツールは、マージと同時にペアになるため、先に同等性チェックに
   合格する必要があります。
5. **Rails は置き換えられたネイティブツールを削除します。DWS は古い GitLab のためにのみ Python コードを残します。**
   - Rails は、その GitLab バージョンのすべてのセッションに置き換え先の MCP ツールが届くようになると、ネイティブツールの提供を停止します。
   - DWS はホストされており、古い Self-Managed と Dedicated のバージョンにもサービスを提供するため、それらの
     バージョンのサポートが終了するまで Python ツールを残します。
   - 削除はコード内で追跡します。置き換えられた各 Python ツールは、置き換え先の MCP ツールと、それが全セッションに届く最初の GitLab
     バージョンを宣言します。チェックは、サポート対象のどの GitLab バージョンも必要としなくなったツールを報告します。
     Rails の `ignore_column ... remove_with:` と `rake db:obsolete_ignored_columns` と同様の仕組みです。
   - 現在、DWS は提供先の最も古い GitLab バージョンを記録しておらず、機能ごとのバージョンチェックのみを行っています。この計画では、
     チェックが参照できるようにそれを追加します。
   - 削除後、Workhorse が私たちの MCP サーバーにアクセスできないセッションでは、どちらのツールも使えなくなります。この計画はそれを受け入れます。
     Workhorse はすでに、
     [`gitlab_workhorse_duo_workflow_mcp_init_failures_total`](https://gitlab.com/gitlab-org/gitlab/-/blob/18c49b16b974d50620daf7f5c7a88daf11e51df4/workhorse/internal/ai_assist/duoworkflow/metrics.go#L151-154)
     メトリクス（`server="gitlab"`）でこれをカウントし、
     ["Failed to initialize MCP server"](https://gitlab.com/gitlab-org/gitlab/-/blob/18c49b16b974d50620daf7f5c7a88daf11e51df4/workhorse/internal/ai_assist/duoworkflow/mcp.go#L410-413)
     として `workflow_id` とともにログへ記録しています。
6. **新しい GitLab ツールは私たちの MCP サーバーに実装します。** フェーズ 1 以降、GitLab データを読み書きする新しいツールは、
   DWS ではなく私たちの MCP サーバーに実装します。最も早い段階がフェーズ 1 なのは、それ以前は MCP 専用ツールが
   [ロールアウトのゲート](#rollout-gates)の内側のセッションに届かないためです。
   - ai-assist のチェックは、新しいツールが GitLab API を呼び出し、現在のネイティブツールのリストに載っていなければ失敗します。
   - リストは、ルール 5 によるネイティブツールの削除に従って短くなる一方です。

## 利用側ごとの計画 {#plan-by-consumer}

| 利用側 | 変更内容 | 依存するもの | 時期 |
|---|---|---|---|
| [外部 MCP クライアント](consumers/external_mcp_clients.md) | 非推奨ツールは、`replaced_by` で置き換え先を宣言する、一覧に表示しないツールです。その後、引数のデフォルト値を伴う置き換え先のエイリアスに統合します。クライアントは古い名前で呼び出し続けます。 | エイリアスの引数のデフォルト値 | 他の作業と並行して進めます |
| [AI Catalog のカスタムエージェント](consumers/ai_catalog_custom_agents.md) | 選択画面は置き換えられたネイティブツールの表示を停止します。Rails は保存済みの各組み込みツールとともに MCP ツールを送り、DWS は Chat と同様に切り替え、エージェントの編集者に通知します。 | `_meta` で DWS に渡すペア情報 | フェーズ 3 〜 5、2 番目 |
| [DAP Chat](consumers/dap_chat.md) | DWS は置き換え先自体をキーにして、各ネイティブツールをその置き換え先の MCP ツールに切り替えます。 | `_meta` で DWS に渡すペア情報 | フェーズ 3 〜 5、1 番目 |
| [基盤エージェント](consumers/foundational_agents.md) | 各エージェントは、ネイティブツールとともに置き換え先の MCP ツールを列挙します。切り替え処理は、セッションごとに一方を選びます。 | Chat で検証済みのペア | フェーズ 3 〜 5、3 番目 |
| [フロー](consumers/flows.md) | まだ変更はありません。現在、フローは MCP ツールを取得しません。取得するようになれば、エージェントコンポーネントで切り替えを実行します。 | フローが私たちの MCP ツールを取得すること（[提案中の ADR-005](https://gitlab.com/gitlab-org/modelops/applied-ml/code-suggestions/ai-assist/-/merge_requests/7550) フェーズ B） | フェーズに含めません |

ペアを、必要な作業量ごとにまとめた一覧は、[ペアのページ](pairs.md)にあります。

## フェーズ {#phases}

- **フェーズ 1、私たちの MCP サーバーを
  [ロールアウトのゲート](#rollout-gates)の外へ出します。** DWS は、私たちの MCP サーバーの信頼されたツールを
  **Allow external MCP tools** の適用対象から除外します。これは
  [Orbit にすでに適用している](https://gitlab.com/gitlab-org/modelops/applied-ml/code-suggestions/ai-assist/-/merge_requests/7058)扱いと同じです。
  また、`mcp_client` をデフォルトでオンにします（[決定 006](decisions/006_no_opt_in_for_our_mcp_server.md)）。リリースするのは、
  [#613544](https://gitlab.com/gitlab-org/gitlab/-/issues/613544)によってツールガバナンスがオンになる場所のみとし、
  [ルール 6](#rules-that-apply-everywhere)の ai-assist チェックを追加します。これをリリースするまで、
  [ルール 5](#rules-that-apply-everywhere)による Python ツールの削除を含め、どのコードもネイティブツールを削除しません。
- **フェーズ 2、動作の変更はありません。** MCP ツールの名前とエイリアスからペアのリストを作ります。
  [#635112](https://gitlab.com/gitlab-org/gitlab/-/work_items/635112)（機密）の契約変更をリリースし、Workhorse が DWS へ各
  ツールのサーバー、オリジン、`com.gitlab/replaces` を送るようにします。DWS の切り替え処理と説明行を追加します。同等性の
  チェックリストを書きます。
- **フェーズ 3、準備ができているペア。** [ペアのページ](pairs.md)の「同じ名前」と「ネイティブ名がすでにエイリアスになっている」の
  グループを、すべての利用側で扱います。これらのペアはすでに存在するため、切り替えフラグをオンにするとまとめて有効になり、
  それぞれが事前に同等性チェックに合格します。利用側は作業が完成した順に有効にします。最初は DAP Chat、
  次に AI Catalog のカスタムエージェント、その次が基盤エージェントです。Chat の対応には `search` の修正が含まれるため、DWS は
  MCP の `search` ツールが届いた場合にのみ、ネイティブの検索ツールを除外します。このフェーズは、ガバナンスが有効な DAP セッションが
  これらのペアについてネイティブツールと置き換え先の MCP ツールの両方を提供することがなくなり、AI Catalog のツール選択画面が MCP ツールのみを提供するようになった時点で完了します。
- **フェーズ 4、先に作業が必要なペア。** 「先に作業が必要」のグループの各ペアは、その作業が完成し、
  ペアを成立させるエイリアスをマージした時点で有効になります。
- **フェーズ 5、統合を待つペア。** 「統合待ち」のグループの各ペアは、MCP ツールを
  統合した後で有効になり、統合先のツールを指すようになります。

フロー、Orbit、Python コードの削除はフェーズに含めません。フローは私たちの MCP ツールを取得できるまで待ち
（[フローのページ](consumers/flows.md)）、Orbit は[目標に含めず](#non-goals)、Python コードは
[ルール 5](#rules-that-apply-everywhere)に従って削除します。

1 つのフィーチャーフラグで、すべての場所の切り替えをオン・オフします（[決定 007](decisions/007_rollout_flags.md)）。

## ロールアウトのゲート {#rollout-gates}

私たちの MCP ツールが DAP セッションに届くには、次の両方がオンである必要があります。Rails がフラグを確認し、DWS が設定を確認します。
どちらもデフォルトではオフのため、ユーザーに対してフラグがオンで、グループの Owner が
設定をオンにした場合にのみ、セッションは私たちの MCP ツールを取得します。いずれかのゲートが私たちの MCP サーバーに適用されている間にネイティブツールを削除すると、
そのユーザーからツールを取り上げることになります（[決定 006](decisions/006_no_opt_in_for_our_mcp_server.md)）。

| ゲート | 種類 | デフォルト | 読み取る場所 |
|---|---|---|---|
| `mcp_client` | フィーチャーフラグ（`gitlab_com_derisk`）、[ロールアウトの Issue](https://gitlab.com/gitlab-org/gitlab/-/work_items/572340) | オフ | ユーザーごとに `Ai::DuoWorkflows::McpConfigService` 内で読み取ります |
| `duo_workflow_mcp_enabled` | トップレベルグループの設定、[**Allow external MCP tools**](https://docs.gitlab.com/user/gitlab_duo/model_context_protocol/mcp_clients/#allow-external-mcp-tools) | オフ | `Ai::DuoWorkflows::Workflow#mcp_enabled?`、その後 DWS の `_permitted_mcp_tools` |

このグループ設定は、ユーザーが IDE で設定するサードパーティーの MCP サーバー向けに 2025 年に追加されました。私たちの MCP サーバーの
ツールは、後から同じ経路で DAP に届くようになったため、現在はこの設定がそれらにも適用されています。信頼された Orbit ツールは
[すでに適用対象から除外されています](https://gitlab.com/gitlab-org/modelops/applied-ml/code-suggestions/ai-assist/-/merge_requests/7058)。
この計画は、最初のフェーズとして、私たちの MCP サーバーにも同じ除外を提案します
（[決定 006](decisions/006_no_opt_in_for_our_mcp_server.md)）。

## 決定事項 {#decisions}

1. [001：置き換えられた MCP ツールをエイリアスに統合する](decisions/001_fold_into_alias.md)
1. [002：ネイティブツールと MCP ツールの各ペアを一度だけ宣言し、`_meta` で DWS に渡す](decisions/002_pairs_in_meta.md)
1. [003：ネイティブツールを置き換えられるのは、私たちの MCP サーバーの 1 つのツールのみ](decisions/003_origin_rule.md)
1. [004：モデルには MCP ツール自身の名前を見せる](decisions/004_tool_name.md)
1. [005：Rails は置き換えられたネイティブツールを削除し、古い名前は引き続き機能する](decisions/005_remove_built_ins.md)
1. [006：私たちの MCP サーバーには MCP のオプトインスイッチを適用しない](decisions/006_no_opt_in_for_our_mcp_server.md)
1. [007：ネイティブツールの切り替えに 1 つのフィーチャーフラグを使う](decisions/007_rollout_flags.md)
1. [008：フローは Workhorse を通じて MCP ツールを実行する](decisions/008_flows_through_workhorse.md)
1. [009：ガバナンスがカバーする場合、アクセス範囲の拡大を受け入れる](decisions/009_accept_widening_under_governance.md)
1. [010：DWS は `toolset:` と `tools:` コンポーネントでツールを切り替える](decisions/010_swap_in_toolset_and_tools_components.md)

## 基本的な設計上の論点 {#fundamental-design-areas}

これらは決定が必要です。未解決の間も作業を始められるよう、ここに記載します。

1. **破壊的な違いがある入力スキーマをどう扱いますか？** 各ペアについて、違いは名前だけでしょうか。
   それとも、MCP ツールの入力スキーマによって、ネイティブツール向けに書かれた呼び出しが壊れるのでしょうか。選択肢は
   [カスタムエージェントのページ](consumers/ai_catalog_custom_agents.md#open-questions)にあります。
1. **出力の変更は破壊的変更ですか？** 統合後に、古いツールと同じ出力を常に返せるとは限りません。
   [外部 MCP クライアントのページ](consumers/external_mcp_clients.md#open-questions)を参照してください。
1. **カスタムエージェントの編集者への通知はどのようなものにしますか？**
   [カスタムエージェントのページ](consumers/ai_catalog_custom_agents.md#open-questions)を参照してください。
1. **エイリアスはいつ、どれだけの事前通知をして削除できますか？** エイリアスを削除すると、
   古い名前を使い続けているすべての呼び出し元が壊れます。MCP サーバーの非推奨化ポリシーは
   [#634007](https://gitlab.com/gitlab-org/gitlab/-/work_items/634007)（機密）で提案されており、まだ承認されていません。
1. **決定論的なフローのステップをどのように MCP ツールへ移行しますか？** `tool_name:` ステップは、モデルを介さず、固定の引数で
   1 つのツールを呼び出すため、その引数が MCP ツールに合わなければ実行が失敗します。GitLab のフローにも、AI
   Catalog のカスタムフローにも、このステップがあります。
   [提案中の ADR-005](https://gitlab.com/gitlab-org/modelops/applied-ml/code-suggestions/ai-assist/-/blob/59a7d5abb8a2cfeb15fdbd966b5bd03bfe251a43/docs/flow_registry/decisions/adr-005-toolset-selectors.md#L450-451)でも、
   同じ問いが未解決のままです。
   [提案中の gitlab!256213](https://gitlab.com/gitlab-org/gitlab/-/merge_requests/256213)によって呼び出し元がバージョンを指定できるようになっても、ツールのバージョンはステップの出力を保護しません。
   出力スキーマを宣言する MCP ツールはなく、ツール自体がその場で変更されるため、ツールの出力を読み取るステップには、まず
   出力の契約が必要です。検討する
   選択肢：
   - 切り替えない。新しいメジャーフローバージョンで、各ステップが MCP ツールを指すようにし、その入力を MCP
     ツールの引数へマッピングします。現時点では何も壊れず、
     [ai-assist#2272](https://gitlab.com/gitlab-org/modelops/applied-ml/code-suggestions/ai-assist/-/work_items/2272)も
     同じ結論に達しました。カスタムフローは、
     [ルール 5](#rules-that-apply-everywhere)で削除するまでネイティブツールを維持し、削除するとステップが壊れます。
   - ペアの切り替え時に変換する。各ペアがネイティブツールの引数と出力を MCP ツールのものへマッピングし、
     カスタムフローが新しいバージョンなしで動作し続けるようにします。各ペアに固有のマッピングが必要であり、後続ステップが出力を読み取るため、
     出力のほうが難しい部分です。現在、MCP サーバーは `id` と `project_id` を変換しています
     （[`LegacyProjectArgument`](https://gitlab.com/gitlab-org/gitlab/-/blob/5447010839f05c7abb4a92798cc1f0219cb14a00/lib/gitlab/mcp/legacy_project_argument.rb)）。
     読み取り専用の作業アイテムツールでは、`id` を `work_item_iid` にも変換しています
     （[`WorkItemIdArgument`](https://gitlab.com/gitlab-org/gitlab/-/blob/5447010839f05c7abb4a92798cc1f0219cb14a00/lib/gitlab/mcp/work_item_id_argument.rb)）。
1. **ツールオプションを設定するカスタムフローをどのように MCP ツールへ移行しますか？** AI Catalog のカスタムフローは、どのツールにも
   ツールオプションを設定でき、フロースキーマ自身の例も `create_merge_request_note` にオプションを設定しています
   （[`flow_v2.json`](https://gitlab.com/gitlab-org/gitlab/-/blob/36e721d689b365aed28a554bd8a6477821d7b83c/app/validators/json_schemas/ai_catalog/flow_v2.json#L261)）。
   ルール 2 はそれらのコンポーネントでネイティブツールを維持するため、[ルール 5](#rules-that-apply-everywhere)で
   削除すると壊れます。検討する選択肢：
   - ADR-005 の `ops` で MCP ツールにオプションを設定できるようになった時点で、カスタムエージェントと同様の通知を使い、
     フローの編集者に MCP ツールへの移行を伝えます（[決定 005](decisions/005_remove_built_ins.md)）。
   - `internal` など、両方のツールが同じオプションを持つ場合は切り替え時にオプションを引き継ぎ、同じオプションがない場合は
     ネイティブツールを維持します。
1. **チャットはセッション全体を通じて同じツールを維持できますか？** 切り替えがオンまたはオフになった後に再開したチャットは、
   異なるツールを見ることになり、モデルが以前の呼び出しは間違いだったとユーザーに伝える場合があります
   （[DAP Chat](consumers/dap_chat.md#today)）。DWS は、セッション開始時に各ペアについて選んだツールを保存し、
   セッション再開時に再利用することもできます。難しいのは、ペアをオフにする場合です。MCP ツールを保存したチャットは
   それを使い続けることになり、Rails がチェックポイントを 30 日間保持するため、チャットは最大 30 日後まで再開できます
   （[`CHECKPOINT_RETENTION_DAYS`](https://gitlab.com/gitlab-org/gitlab/-/blob/36e721d689b365aed28a554bd8a6477821d7b83c/ee/app/models/ai/duo_workflows/checkpoint.rb#L5)）。
   したがって、オフにするスイッチは、保存済みの選択より優先されなければなりません。

## 脅威モデル {#threat-model}

暫定的なものです。この作業によって変わる問いは、「モデルが GitLab ツールを呼び出すときに、どのコードが、誰の
ルールの下で実行されるか」です。

セキュリティ境界：

- 私たちの MCP サーバーのように Rails が設定するサーバーは、インスタンス側にあります。Rails が `trusted` を設定するのは、私たちの
  MCP サーバーと Orbit のみです。
- Workhorse は、クライアントが送るツールをクライアントから注入されたものとしてマークし、その `trusted` を解除します。
  [#635112](https://gitlab.com/gitlab-org/gitlab/-/work_items/635112)（機密）の契約変更により、各ツールのサーバーと
  オリジンも送るようになります。
- DWS がツールのサーバーとオリジンを読み取るのは、Workhorse が処理したリクエストのみであり、その他の
  リクエスト上のツールはすべて、クライアント由来として扱います。DWS はトークンで両者を区別します。CI ジョブなど、
  DWS へ直接接続するコードは、DWS が発行したトークンを保持します
  （[提案中の ADR-005](https://gitlab.com/gitlab-org/modelops/applied-ml/code-suggestions/ai-assist/-/merge_requests/7550)）。

| 脅威 | 緩和策 |
|---|---|
| クライアントや別の MCP サーバーが私たちのツールと同じ名前のツールを提供し、DAP がネイティブツールをそれに切り替える | その名前のツールがちょうど 1 つであり、そのサーバーが私たちの MCP サーバーで、オリジンがクライアントでない場合にのみ切り替えます（[決定 003](decisions/003_origin_rule.md)）。 |
| クライアントや別の MCP サーバーが、自分のツールに `com.gitlab/replaces` を設定して、ネイティブツールを隠す | Workhorse は、私たちの MCP サーバーからの `com.gitlab/replaces` のみを転送し、クライアントのツールでは、すでに `trusted` を解除している箇所でこれも解除します。DWS も、[決定 003](decisions/003_origin_rule.md)の条件を満たすツールでのみ読み取ります。 |
| 管理者がネイティブツールを拒否しているのに、MCP ツールがそのルールを迂回する | ペアが存在するのは、ネイティブ名が一覧に表示される MCP ツールの名前かエイリアスである場合だけなので、ツールガバナンスは同じルールを MCP ツールにも適用します。MCP サーバーは、`duo_mcp_tool_governance` がオンの間だけ `com.gitlab/replaces` を追加します。Rails は拒否された MCP ツールを提供せず、ネイティブツールも拒否されたままです。切り替えはツールガバナンスが有効な場所でのみ実行します（ルール 1）。 |
| 切り替えにより、読み取りツールが承認を必要とするツールに変わる、またはその逆になる | 読み取りか書き込みかは、同等性チェックの一部です。 |
| 切り替えや統合によって、保存済みエージェントがアクセスできる範囲が広がる | ガバナンスがカバーする場所でのみ受け入れます。古い名前のルールは新しいツール全体に適用し、管理者のルールが許可しない限り、書き込み呼び出しには引き続き承認が必要です（[決定 009](decisions/009_accept_widening_under_governance.md)）。 |
| シェルコマンドを実行するリモートフローなど、ワークフロートークンを保持するコードが GitLab REST ルートを直接呼び出し、ツールガバナンスを迂回する | 現時点では受け入れます。これは新しい問題ではありません。現在、ネイティブツールは同じトークンでこれらのルートを呼び出すため、ペアが切り替わるまで、そのトークンにはこれらのルートが必要です。[#638125](https://gitlab.com/gitlab-org/gitlab/-/work_items/638125)は `mcp` スコープの同じ抜け道を塞ぎますが、`ai_workflows` は対象外です。 |

Application Security がこの脅威モデルをレビューします。

### DAP セッションに適用するルール {#which-rules-apply-in-a-dap-session}

- ネイティブの DWS ツールは、Rails がセッションについて解決したツールアクセスポリシーに従います。IDE、`chat`、
  `chat_partial` のセッションは、`duo_workflow_local_tool_governance`
  （[#613544](https://gitlab.com/gitlab-org/gitlab/-/issues/613544)）がオフの間、ガバナンスの対象にならず
  （[`GovernanceSurface`](https://gitlab.com/gitlab-org/gitlab/-/blob/852a771fd312e8eaa291ad85e111cecbe108b8e4/ee/app/services/ai/tool_rules/governance_surface.rb#L55-61)）、
  その場合、Rails は DWS にポリシーを送りません
  （[`tool_access_policies`](https://gitlab.com/gitlab-org/gitlab/-/blob/852a771fd312e8eaa291ad85e111cecbe108b8e4/ee/app/services/ai/duo_workflows/connection_config_service.rb#L267-270)）。
- Rails は、セッションのポリシーが拒否する MCP ツールを提供しないため、ガバナンスが有効なセッションでは、両方のツールに同じルールが適用されます。
- `duo_mcp_server_governance_rule_enforcement` がオンの間、MCP サーバー自身も Deny を強制します
  （[`McpGovernance.governs?`](https://gitlab.com/gitlab-org/gitlab/-/blob/eb66099f2a19c1c498ab6e7824fbb4d0ceab55e4/ee/lib/ai/tool_rules/mcp_governance.rb#L15-17)）。
  [gitlab!266221](https://gitlab.com/gitlab-org/gitlab/-/merge_requests/266221)は、
  `duo_workflow_local_tool_governance` のチェックを削除し、[gitlab!266252](https://gitlab.com/gitlab-org/gitlab/-/merge_requests/266252)は
  呼び出し元のトークンからルールの列を選びます。そのため、IDE セッションでは Local Deny が MCP ツールに適用される一方、
  そこのネイティブツールには依然としてルールがありません。
- DWS は、セッションのポリシーによってガバナンスが有効な場所でのみ切り替えます
  （[`governance_active`](https://gitlab.com/gitlab-org/modelops/applied-ml/code-suggestions/ai-assist/-/blob/f0df201b253e14cb7441e912d2e36924fb2b483a/duo_workflow_service/workflows/abstract_workflow.py#L548-554)）。
  そのため、切り替え対象の両方のツールに同じルールが適用されます（ルール 1）。

## 意見を求める相手 {#who-is-consulted}

DRI が決定します。Application Security は脅威モデルを理由に進行を止められます。以下のグループに意見を求めます。

- Agent Tools（MCP サーバー）
- Duo Workflow Service のメンテナー
- Flow Components（フローレジストリの設定）
- AI Catalog
- AI Governance
- Workhorse のメンテナー
- Orbit（`@gitlab-org/orbit`）

## 参考資料 {#references}

- [エピック &23947：DAP のツールの唯一の情報源としての MCP サーバー](https://gitlab.com/groups/gitlab-org/-/work_items/23947)
- [Issue #609451：既存の MCP ツールと DAP ツールを移行するための計画を策定する](https://gitlab.com/gitlab-org/gitlab/-/work_items/609451)
- [提案中の ADR-005：MCP ツールは明示的な `tools:` セレクターを通じてのみフローに届く](https://gitlab.com/gitlab-org/modelops/applied-ml/code-suggestions/ai-assist/-/merge_requests/7550)（未マージ）
- [Duo Agent Platform の決定事項](../duo_workflow/_index.md)
- [GitLab MCP サーバーのツール](https://docs.gitlab.com/user/model_context_protocol/mcp_server_tools/)
