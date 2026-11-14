---
title: "Duo Agent Platform ADR 014: ユーザーレベルのメモリー"
status: proposed
creation-date: "2026-11-02"
authors: [ "@junminghuang" ]
coach: [ ]
approvers: [ ]
owning-stage: "~devops::agent foundations"
participating-stages: []
toc_hide: true
description: "Duo Agent Platform におけるユーザーレベルのメモリーのアーキテクチャ決定記録。すべての DAP フローをパーソナライズする、永続的なユーザースコープの設定です。"
upstream_path: /handbook/engineering/architecture/design-documents/duo_workflow/decisions/014_user_level_memory/
upstream_sha: 8fce82673398dbfad74c667e7b35eb75d101d55d
lastmod: "2026-11-12T11:02:33+01:00"
translated_at: "2026-11-14T09:23:46+00:00"
translator: codex
stale: false
---

{{< engineering/design-document-header >}}

## 概要 {#summary}

DAP フローは、プロジェクトスコープの `AGENTS.md` とワークスペースエージェントを通じてパーソナライズします。プロジェクト、セッション、フローをまたいで保持される**ユーザースコープ**の設定の仕組みはありません。たとえば、好みのレビュー形式、チームのラベル、コーディング規約、言語の設定などです。

ユーザーレベルのメモリーは、この不足を補います。ユーザーが所有する短い自由形式のテキストブロックを、`AGENTS.md` とともにすべての DAP セッションへ自動的に挿入します。

## データモデル {#data-model}

`NamespaceFoundationalAgentStatus` / `OrganizationFoundationalAgentStatus` で使われている既存のパターンに従い、デプロイモデルごとに 1 つずつ、2 つのテーブルを用意します。

### `namespace_ai_user_memories` — GitLab.com {#namespace_ai_user_memories--gitlabcom}

| カラム | 型 | 備考 |
|---|---|---|
| `id` | bigint PK | |
| `user_id` | bigint FK NOT NULL | |
| `namespace_id` | bigint FK NOT NULL | ルート名前空間（トップレベルグループ）。シャーディングキーおよび検索キー |
| `content` | text NOT NULL | 最大 4,000 文字。メモリーをクリアすると行を削除するため、行が存在しない状態だけが「メモリーなし」を表します。 |
| `created_at` / `updated_at` | timestamps | |

**インデックス:** `(namespace_id, user_id)` の一意インデックス、`(user_id)`。`namespace_id` を先頭にすることで、一意性の保証と、グループ削除時の効率的な外部キーカスケード検索の両方に対応します。別の `(user_id)` インデックスは、`Users::DestroyService` によるユーザー削除時の検索に使います。`namespace_bans` のインデックスパターンに従います。

**モデル:** `ee/app/models/ai/namespace_user_memory.rb` の `Ai::NamespaceUserMemory`。

`gitlab_schema: gitlab_main_org`。シャーディングキー: `namespace_id`。推定テーブルサイズ: 小規模。ユーザー数 × トップレベルグループ数が上限で、組み合わせごとに最大 1 行、コンテンツは 4,000 文字までです。

### `organization_ai_user_memories` — Self-managed、Dedicated、将来の GitLab.com {#organization_ai_user_memories--self-managed-dedicated-and-future-gitlabcom}

| カラム | 型 | 備考 |
|---|---|---|
| `id` | bigint PK | |
| `user_id` | bigint FK NOT NULL | |
| `organization_id` | bigint FK NOT NULL | シャーディングキーおよび検索キー |
| `content` | text NOT NULL | 最大 4,000 文字。メモリーをクリアすると行を削除します。 |
| `created_at` / `updated_at` | timestamps | |

**インデックス:** `(organization_id, user_id)` の一意インデックス、`(user_id)`。名前空間のテーブルと同じパターンで、外部キーカスケードの効率を高めるため、シャーディングキーを先頭にします。

**モデル:** `ee/app/models/ai/organization_user_memory.rb` の `Ai::OrganizationUserMemory`。

`gitlab_schema: gitlab_main_org`。シャーディングキー: `organization_id`。推定テーブルサイズ: 小規模。ユーザー数 × 組織数が上限で、組み合わせごとに最大 1 行、コンテンツは 4,000 文字までです。

### なぜ 2 つのテーブルにするのか？ {#why-two-tables}

- **ガバナンスを適用する名前空間は GitLab.com の概念です。** Self-managed と Dedicated のインスタンスでは、請求やガバナンスにこの名前空間を使いません。組織レベル（通常はデフォルト組織）で運用します。`namespace_id` を検索キーとする単一テーブルでは、Self-managed で機能しません。
- **明確なシャーディングキー。** 各テーブルは、デプロイモデルに適した NULL 不可のシャーディングキーをちょうど 1 つ持ちます。NULL を許容するカラム、一意制約での条件付きロジック、クエリでの `COALESCE` は不要です。
- **既存のパターン。** `NamespaceFoundationalAgentStatus` と `OrganizationFoundationalAgentStatus` も同じ理由で 2 テーブル方式を採用しています。GitLab.com では名前空間スコープ、Self-managed では組織スコープの設定にするためです。ルーティングは、単純な `Gitlab::Saas.feature_available?(:gitlab_com_subscriptions)` のチェックです。
- **移行はスキーマの変更ではなく、データの移動です。** GitLab.com が組織に完全移行するときは、`namespace_ai_user_memories` から `organization_ai_user_memories` にデータを移します。これは Self-managed がすでに使っているテーブルです。移行先で新しいスキーマは不要です。

### 共通インターフェース {#shared-interface}

両方のモデルは共通の concern（`Ai::UserMemoryable` など）を含め、メモリーコンテンツの読み書きに同じインターフェースを提供します。ルーティングのロジックは 1 つのメソッドに置きます。

```ruby
def user_memory_container(scope = nil)
  unless ::Gitlab::Saas.feature_available?(:gitlab_com_subscriptions)
    return scope&.organization || Current.organization ||
           Organizations::Organization.default_organization
  end

  root = scope&.root_ancestor
  return nil if root.nil? || root.user_namespace?
  return nil unless authorized_root_namespace?(root)

  root
end
```

これは意図的に `duo_foundational_agents_container` や `governing_namespace` と異なる動作にしています。これらはグループスコープがないときに `default_duo_namespace` にフォールバックします。メモリーはコンテキストに依存するデータであり、請求をひも付ける基準ではありません。グループ A の業務固有の設定（チームのラベル、規約、マネージャーへの言及）を無関係な個人プロジェクトに読み込むと、エージェントに誤ったコンテキストを与え、無関係な設定でグループ A のメモリーを上書きするおそれがあります。Self-managed では、スコープまたはリクエストのコンテキストから組織を推定し、最後の手段としてのみ `default_organization` にフォールバックします。これにより、将来の複数組織に対応した Self-managed に備えます。

## スコープと可視性 {#scope--visibility}

### GitLab.com — 名前空間スコープ {#gitlabcom--namespace-scoped}

ユーザーメモリーのスコープは、ユーザーごと、ルート名前空間（トップレベルグループ）ごとです。トップレベルグループ A で作業中に設定したメモリーは、トップレベルグループ B で作業するときには見えません。トップレベルグループ内では、どのサブグループやプロジェクトがフローをトリガーしたかにかかわらず、すべての DAP フローでメモリーを読み込みます。

これは、GitLab.com のほかのすべての Duo テナント境界の動作と一致します。請求、`duo_features_enabled`、`duo_availability`、ガバナンス、ツールアクセスのポリシーは、いずれも `governing_namespace` / `root_ancestor` を通じて解決します。

**なぜ GitLab.com では名前空間を使うのか？** GitLab.com では、まだ組織がデータの境界になっていません。現在、事実上すべてのトップレベルグループが 1 つのデフォルト組織に属しています。`organization_id` だけをスコープの基準にすると、会社 A と会社 B のトップレベルグループの両方に貢献するユーザーが 1 つのメモリーを共有することになり、テナント境界を越えてコンテキストが漏えいします。

### Self-managed / Dedicated — 組織スコープ {#self-managed--dedicated--organization-scoped}

ユーザーメモリーのスコープは、ユーザーごと、組織ごとです。ほとんどの Self-managed インスタンスでは、これはユーザーごとに 1 つのメモリー（単一のデフォルト組織）を意味し、適切で単純な動作です。

### GitLab.com の組織レベルのスコープへの移行経路 {#migration-path-to-organization-level-scoping-on-gitlabcom}

GitLab.com で組織が全面展開され、実際のデータ境界になったら、`namespace_ai_user_memories` テーブルを廃止し、GitLab.com で `organization_ai_user_memories` を使えます。これは Self-managed がすでに使っているテーブルです。2 テーブルの設計により、v1 のスキーマ負債を生むことなく、この移行に備えられます。

移行の詳細は、組織が実際の境界になるまで先送りします。その時点で解決すべき未決事項は次のとおりです。

- **段階的な切り替え:** グループはデフォルト組織から徐々に離れるため、移行中は両方のテーブルを共存させる必要があります。ルーティングロジック（`user_memory_container`）は、インスタンス全体の切り替えを必要とせず、各トップレベルグループの移管に合わせて名前空間ごとに切り替えられます。
- **統合:** 同じ組織内の複数のトップレベルグループにメモリーを持つユーザーは、組織テーブルで統合された 1 行を必要とします。バッチ化されたバックグラウンド移行はユーザーの確認を待って停止できないため、決定的な方針が必要です（たとえば、最も最近更新されたメモリーを残す、または連結して 4,000 文字の上限で切り詰めるなど）。
- **競合の解決:** 統合したコンテンツが 4,000 文字の上限を超える可能性があります。移行では、切り詰めまたは選択のポリシーを定義する必要があります。

| シナリオ | v1 の動作 | 将来（組織への移行後） |
|---|---|---|
| **GitLab.com（現在）** | トップレベルグループごとのメモリー。会社 A と会社 B は分離されます。 | 組織ごとのメモリー。同じ組織のトップレベルグループはメモリーを共有します。 |
| **Self-managed / Dedicated** | 組織ごとのメモリー。単一組織のインスタンスではユーザーごとに 1 つのメモリーです。 | 同じです。すでに組織スコープです。 |
| **複数組織の .com（将来）** | すでにトップレベルグループごとに分離されています。 | 準備が整った段階で組織レベルに緩和します。 |

### 名前空間の解決（GitLab.com） {#namespace-resolution-gitlabcom}

ルート名前空間は、`governing_namespace` のフォールバックチェーンを経由せず、セッションのスコープ（`scope.root_ancestor`）から直接解決します。つまり、セッションに明示的なグループのコンテキストがある場合にのみ、メモリーを読み込みます。

**メモリーを読み込む場合:**

- グループのプロジェクトで作業する → `scope.root_ancestor` がトップレベルグループに解決される → メモリーを読み込みます
- グループ/プロジェクトのスコープを持つ Duo Chat または Duo CLI → メモリーを読み込みます
- Slack Duo インテグレーション → ワークスペースの Duo グループ、またはユーザーのデフォルト Duo 名前空間のワークスペースプロジェクトでセッションが実行される → スコープが明示的である → メモリーを読み込みます

**メモリーを読み込まない場合:**

- 個人の名前空間のプロジェクト → `root_ancestor` がユーザーの名前空間である → メモリーを読み込みません
- スコープがまったくない（たとえば、プロジェクトのコンテキストなしでグローバルナビゲーションから Duo Chat を開く場合） → メモリーを読み込みません

どちらの場合も、ユーザーメモリーなしでセッションを続行します。これは意図的な製品上の判断です。個人プロジェクトはグループに属さないため、グループのメモリーを読み込むと、誤ったコンテキスト（グループ固有のチームのラベル、規約、人物）が適用され、無関係な設定でグループのメモリーを上書きするおそれがあります。

## GitLab MCP サーバーを通じたメモリー操作 {#memory-operations-through-gitlab-mcp-server}

メモリーの読み書きは、`Mcp::Tools::Manager` を通じて `EE_GRAPHQL_TOOLS` に登録する、**既存の GitLab MCP サーバー上の MCP ツール**（`POST /api/v4/mcp`）として公開します。これにより、DAP のエージェント型チャット、Duo CLI、**および** GitLab MCP サーバーに接続するサードパーティーのエージェント（Cursor、Claude Code など）からメモリーにアクセスできます。単一の実装で複数の利用元に対応します。

| MCP ツール | 操作 | 事前承認済み？ | 備考 |
|---|---|---|---|
| `get_user_memory` | セッションのスコープの現在のメモリーを読み取ります | はい | 読み取り専用で、副作用はありません |
| `save_user_memory` | メモリーコンテンツを完全に上書きします | いいえ | DWS の既存の仕組みを通じて、人間による承認をトリガーします |

MCP ツールは内部で `user_memory_container` ルーティングメソッドを使うため、呼び出し元はどちらのテーブルを使っているかを知る必要がありません。

### なぜ新しいサーバーではなく GitLab MCP サーバーなのか？ {#why-the-gitlab-mcp-server-not-a-new-one}

Rails には 3 つの MCP サーバーがあります。GitLab（`/api/v4/mcp`、約 40 以上のプラットフォームツール）、Orbit（`/api/v4/orbit/mcp`、Knowledge Graph クエリ）、AI Catalog サーバー（外部、設定駆動）です。メモリーツールは、Rails DB のユーザーデータを読み書きする GitLab プラットフォームの操作です。これは GitLab MCP サーバーの役割です。Orbit が別になっているのは、まったく異なるバックエンド（Knowledge Graph gRPC）にプロキシするためです。新しいサーバーを作ると、新しいエンドポイント、認証スコープ、`McpConfigService` エントリが必要になります。2 つのツールのために、これらはすべて不要です。

マネージャーに登録することで、メモリーツールは、ツールの一覧表示とバージョン管理、MCP ガバナンス（`McpGovernance` の deny/ask/allow）、内部イベント追跡（`start_mcp_tool_call` / `finish_mcp_tool_call`）、`X-Gitlab-Enabled-Mcp-Server-Tools` ヘッダーによる制御を引き継ぎます。

`McpConfigService` の**事前承認設定**: `get_user_memory` は `PreApprovedTools` に追加します（読み取り専用）。`save_user_memory` は追加しません。DWS の `HumanApprovalCheckExecutor` が、事前承認されていない MCP ツールの呼び出しに承認を求めます。自動承認を設定しているユーザーの書き込みは、自動的に承認されます。

## 編集 {#editing}

2 つの経路があり、v1 ではいずれも**コンテンツの完全な上書き**になります。

**1. 設定 UI** — ユーザーの Duo 設定内のテキストエリアで、ユーザーが権限を持つルート名前空間を一覧表示するグループセレクターを備えます。`AiUserMemoryUpdate` GraphQL ミューテーションは必須の `namespaceId` 引数を受け取り、`authorized_root_namespace?` で検証します。GitLab.com では、`namespaceId` は名前空間テーブルに直接対応します。Self-managed では、ルーティング層が `namespace.organization` を解決して組織テーブルに対応付けます。GitLab.com の組織への移行後は、同じ `namespaceId` 入力が組織テーブルに解決されます。API のインターフェースは、デプロイ形態や移行の状態を通じて同じままです。標準の GraphQL レート制限を適用します。

**2. 会話（Duo Chat / Duo CLI / サードパーティーのエージェント）** — 自然言語（`"remember my team label is ~backend"`）または決定的な `/remember` コマンドを使います。フローは次のとおりです。

1. 現在のメモリーはすでにコンテキストに含まれています（セッション開始時に `BuildAdditionalContextService` を通じて追加コンテキストのエンベロープとして読み込まれます）。
1. LLM が、ユーザーのリクエストを取り込んだ更新後の全文を提案します。
1. `save_user_memory` MCP ツールを呼び出します → 人間による承認が適用されます（事前承認されていないツール呼び出し）。

**なぜ完全な上書きなのか？** 最初のイテレーションを単純にし、際限のない増加や重複排除を避けるためです。追記専用方式とバックグラウンドでの統合は、自然な次の対応です。追記専用方式では、増加の単位がユーザーごとから書き込みごとに変わる点に注意してください。サイズと保存に関する検討事項は、[検討した代替案](#alternatives-considered)を参照してください。

**同時書き込み:** v1 では、最後の書き込みを優先する方式を意図的に採用します。同時に書き込む 2 つの利用元（たとえば、セッションの `save_user_memory` MCP ツールと設定 UI）が互いを上書きする可能性があります。4,000 文字で、想定される書き込み頻度も低いため、競合はまれで影響も小さいと考えられます。利用パターンから競合が確認された場合は、楽観的ロック（`lock_version`）を次の対応とします。

## 取得 {#retrieval}

ユーザーメモリーは**セッション開始時**に読み込み、`BuildAdditionalContextService` を通じて追加コンテキストのエンベロープとして挿入します。これは、`AGENTS.md`、標準コンテキスト、リソースのコンテキストを DWS に届けるのと同じパイプラインです。

**Rails 側:** 新しいコンテキストビルダー（`StandardContextBuilder`、`FoundationalFlowContextBuilder` と同列のもの）が `user_memory_container` を通じてメモリーのコンテナを解決し、適切なテーブルからユーザーのメモリーを読み取り、カテゴリ `"user_memory"` とバージョン文字列を持つ `Envelope` で包みます。

`"user_memory"` カテゴリを `DWS_RESERVED_CATEGORIES` に追加する必要があります。この配列は、どの追加コンテキストカテゴリを **Rails が管理するか**を制御します。`caller_context` は、このリストにカテゴリが含まれる呼び出し元提供のエンベロープをすべて取り除くため、Rails が構築したバージョンが常に優先されます。これがないと、細工されたクライアントのリクエストが `user_memory` のコンテンツを挿入または上書きし、ユーザーが実際に保存した内容を迂回できてしまいます。

**AI Gateway / DWS 側:** 専用の抽出関数（`process_agents_dot_md` のようなもの）が、カテゴリ名を使って `additional_context` から `user_memory` エンベロープを取り出し、テンプレート変数として公開します。これは、`agent_user_environment.py` の `_CONTEXT_REGISTRY` マッチングより明快です。そちらは構造化された型付きコンテキスト向けに設計されており、メモリーは単なるテキストの塊です。

**セッション途中の更新:** 会話中に `save_user_memory` MCP ツールを通じてメモリーを更新すると、更新後のコンテンツがツール呼び出しの応答として会話履歴に現れます。LLM はセッションの残りの間、新しいコンテンツを参照します。再読み込みは不要です。

## ガバナンス {#governance}

管理者の切り替え設定は、データのスコープに合わせ、デプロイモデルに従います。

| 制御 | 実行者 | 仕組み |
|---|---|---|
| インスタンス/組織レベルの切り替え | インスタンスまたは組織の管理者 | `duo_cli_enabled` のパターンに従い、`Ai::Setting` の `feature_settings` JSONB にブール値（たとえば `user_memory_enabled`）を置きます。GitLab.com と Self-managed の両方で、インスタンス全体の無効化スイッチになります。 |
| 名前空間レベルの切り替え（GitLab.com） | トップレベルグループのオーナー | `Ai::NamespaceSetting` の単純なブール値（たとえば `user_memory_enabled`）。ユーザーメモリーはトップレベルグループのみに適用されるため（サブグループには適用されません）、`lock_*` カラムを伴う `duo_features_enabled` のカスケードパターンは不要です。単純なブール値で十分です。インスタンスレベルの切り替えがオンの場合にのみ有効です。 |

現在の GitLab.com では、すべてのトップレベルグループがデフォルト組織を共有するため、組織レベルだけの切り替えではインスタンス全体のスイッチとなり、顧客ごとの制御ができません。名前空間レベルの切り替えにより、トップレベルグループのオーナーは、名前空間をスコープとするデータ境界に合ったセルフサービスのガバナンスを行えます。Self-managed では組織がデータの境界なので、組織レベルの切り替えで十分です。

管理者が無効にした場合: 既存のレコードは保持しますが、セッションには読み込みません。編集経路では、「管理者によって無効にされています」という明確なエラーを返します。

## 人間による承認 {#human-in-the-loop}

会話フロー内でのメモリー書き込みは、**事前承認されていない** `save_user_memory` MCP ツールを通じて行います。DWS の既存の `HumanApprovalCheckExecutor` → `interrupt` → ユーザーによる承認/拒否というフローを、そのまま適用します。自動承認を設定しているユーザーのメモリー書き込みは、ほかのすべての事前承認されていない MCP ツールと同様に、自動的に承認されます。

**自動承認のリスクについて:** 出力がデータとして扱われるほかの `save_*` ツールとは異なり、メモリーはセッション開始時に `BuildAdditionalContextService` を通じてエージェントのコンテキストとして挿入され、そのスコープ内の以降のすべてのセッションに影響します。自動承認を有効にするユーザーは、プロンプトインジェクション（たとえば、Issue やファイル内の悪意あるテキスト）により、明示的な承認手順なしで永続的な指示がメモリーに書き込まれる可能性を認識する必要があります。緩和策として、監査イベントはすべての書き込みを記録します（メタデータのみ）。また、ユーザーは設定 UI からいつでもメモリーを確認し、クリアできます。

UI の設定経路は、ユーザーが意図して直接保存する操作なので、別途の承認は不要です。

## 監査とコンプライアンス {#audit--compliance}

メモリーの書き込みでは、`Ai::Governance::Session` のパターンに従って監査イベントを発行する必要があります。ミューテーションとツール呼び出しの経路では、**メモリーコンテンツ自体ではなく、メタデータのみ**を記録する必要があります。そうしないと、コンテンツがデータライフサイクルに基づく削除後も残ってしまいます。記録するフィールドは次のとおりです。

- 誰がメモリーを更新したか
- いつ更新したか
- スコープのコンテキスト: GitLab.com ではガバナンスを適用する名前空間（実際のテナント境界。複数のトップレベルグループがデフォルト組織を共有する場合、組織だけを記録しても、どのトップレベルグループのメモリーが変わったかを区別できません）、Self-managed では組織

## データライフサイクル {#data-lifecycle}

**データ保持:** `retained_data`。ユーザーが明示的に削除するか、所有するユーザー/名前空間/組織が削除されるまで保持する、ユーザー作成のコンテンツです。メモリーに自然な有効期限はないため、`transient_data` ではありません。

**ユーザーがグループを離れた場合:** ユーザーがルート名前空間へのアクセスを失った場合（たとえば、トップレベルグループから削除された場合）、その名前空間のメモリー行は保持します。ユーザーの削除も名前空間の削除もトリガーされないためです。その行には到達できなくなりますが（そのグループのセッションは読み込まず、設定 UI にも表示されません）、害はありません。ユーザーごと、名前空間ごとに小さな 1 行が上限で、後でユーザーまたは名前空間が削除されるとクリーンアップされます。保存の状況から必要と判断した場合は、メンバーシップの変更時に積極的にクリーンアップすることを次の対応とします。

ユーザーメモリーは、ユーザーが生成したコンテンツです。

- **ユーザーの削除:** ユーザーデータのエクスポート（GDPR）に含めます。[依存データの削除ガイドライン](https://docs.gitlab.com/development/database/foreign_keys/#dependent-removals)に従い、`Users::DestroyService` が両方のテーブルから行を削除し、それぞれに `handles_removal_of` を宣言します。`user_id` のカスケード外部キーは補助的な手段にすぎず、主要な削除の仕組みではありません。
- **名前空間の削除（GitLab.com）:** `namespace_id`（シャーディングキー）のカスケード外部キーが、トップレベルグループの削除時に自動的にクリーンアップします。
- **名前空間の再編（GitLab.com）:** トップレベルグループが別のルート祖先の下に移動した場合、古い `namespace_id` をキーとする既存のメモリー行には到達できなくなります。取得クエリ（`scope.root_ancestor`）は、古いグループではなく新しいルートを解決するためです。v1 では、グループ移管の経路で `namespace_id` インデックスを使い、孤立した行を非同期で削除します。確認を伴う統合は試みません。
- **組織の移管:** `organization_ai_user_memories` テーブルでは `organization_id` がシャーディングキーなので、セル移行時にメモリーは組織のデータと一緒に移動し、特別な処理は不要です。`namespace_ai_user_memories` テーブルでは、トップレベルグループが別の組織に移管されても、名前空間スコープの行は引き続き有効です（名前空間は引き続き存在するため）。組織レベルの考慮事項は、このテーブルには適用されません。

## 検討した代替案 {#alternatives-considered}

| 代替案 | 採用しない理由 |
|---|---|
| NULL を許容する `namespace_id` を持つ単一テーブル | NULL を許容するシャーディングキーは一意制約（部分インデックス）を複雑にし、クエリには条件付きロジックが必要になり、スキーマが「状況による」という関係を曖昧に表します。2 つのテーブルにすることで意図が明確になります。 |
| `user_preferences` に保存 | 名前空間スコープではなく、ユーザーごとに単一の行です。 |
| `ai_settings` に保存 | ユーザーごとではなく、組織ごと（1 行）です。 |
| 単一テーブルで `organization_id` だけをスコープの基準にする | 現在の GitLab.com では、すべてのトップレベルグループがデフォルト組織を共有しているため、テナント境界を越えてメモリーが漏えいします。 |
| デフォルト以外の組織でのみ有効にする | 組織のスコープは明確になりますが、ほとんどの GitLab.com ユーザーは、トップレベルグループを自分の組織に移管するまで機能を利用できません。 |
| DWS ネイティブのツール、またはシステム指示とコマンドツール | DWS フロー内でのみ動作します。サードパーティーのエージェント（Cursor、Claude Code など）は使えません。GitLab サーバー上の MCP ツールなら、すべての利用元に単一の実装を提供できます。 |
| メモリー専用の MCP サーバー | 2 つのツールのために新しいエンドポイント、認証スコープ、設定エントリが必要となり、不要なオーバーヘッドが生じます。メモリーは GitLab プラットフォームの操作であり、ほかのデータツールとともに既存の GitLab MCP サーバーに置くべきものです。 |
| 初日から追記専用にする | 有用性の手掛かりが得られる前に複雑さを持ち込むことになります。手動編集には完全な上書きが適切です。注意: 追記専用方式では、増加の単位がユーザーごと・スコープごと（上限あり）から書き込みごと（上限なし）に変わります。採用する場合は、これらのテーブルを増大させるより、履歴用のオブジェクトストレージを検討してください。 |
| プロジェクトごとのメモリー | スコープが異なり、プロジェクトレベルはすでに `AGENTS.md` が扱っています。 |

## 結果 {#consequences}

- ユーザーはスコープの境界内（GitLab.com ではトップレベルグループ、Self-managed では組織）のすべての DAP フローで、永続的なパーソナライズを利用できます。
- 管理者は、インスタンス/組織レベルの無効化スイッチと、名前空間レベルの顧客ごとの切り替え（GitLab.com）を通じて制御を維持します。ユーザーレベルの切り替えはありません。管理者が機能を有効にすると、スコープ内のすべてのユーザーが利用できます。
- 新しいインフラは最小限です。GitLab MCP サーバー、追加コンテキストのパイプライン、ツール呼び出しの承認、ガバナンスのパターンを再利用します。
- MCP ベースのメモリーツールは、1 つの実装で DAP のエージェント型チャット、Duo CLI、サードパーティーのエージェント（Cursor、Claude Code など）に対応します。
- 2 テーブルの設計は既存のパターン（`NamespaceFoundationalAgentStatus` / `OrganizationFoundationalAgentStatus`）に従い、それぞれのデプロイモデルに明確なシャーディングキーを用意します。
- GitLab.com の名前空間スコープは、現在のテナント境界を尊重します。テナント間のデータ漏えいはありません。
- 明確な移行経路があります。GitLab.com が組織に移行するときは、名前空間テーブルから組織テーブルにデータを移します。これは Self-managed がすでに使っているテーブルです。
