---
title: "DAP ツールの SSoT としての MCP サーバー ADR 011：各ペアは同等性チェックに合格してから有効にする"
description: "各 MCP ツールは、置き換え可能なネイティブツールごとに true または false を宣言します。ネイティブツール名に対応する宣言がなければ、テストが失敗します。"
status: accepted
creation-date: "2026-11-16"
authors: [ "@terrichu" ]
toc_hide: true
upstream_path: /handbook/engineering/architecture/design-documents/mcp_server_ssot_for_dap_tools/decisions/011_turn_on_each_pair/
translator: codex
upstream_sha: 6a074296e089e7f9f68bce1aa5bd5f410a75d3cb
lastmod: "2026-11-18T13:21:18-08:00"
translated_at: "2026-11-19T21:12:30Z"
stale: false
---

## 背景 {#context}

一覧に表示される MCP ツールの名前またはエイリアスが組み込みツール名と一致すると、その時点でペアが成立します
（[決定 002](002_pairs_in_meta.md)）。この決定以前は、切り替えフラグが既存のペアをすべて有効にしていたため、
同等性チェックが完了するまで有効化を待たせる仕組みがありませんでした（[ルール 2](../_index.md#rules-that-apply-everywhere)）。

- フラグをオンにすると、[ペアのページ](../pairs.md)の「ネイティブ名がすでにエイリアスになっている」に属するすべてのペアが
  一斉に切り替わります。これには `action` が必須の `save_vulnerability` も含まれますが、そのエイリアスではこの引数を設定していません。
- ルール 2 は、アクセス範囲が広がるペアについて、[決定 009](009_accept_widening_under_governance.md)の
  事前承認ルールが整うまで待つよう求めていますが、それを強制する仕組みはありません。
- 名前の変更など、別の理由でエイリアスを追加した場合も、マージされた時点でペアが有効になります。

## 決定 {#decision}

- 各 MCP ツールは `native_tool_swaps` を宣言します。これは、そのツールが応答する組み込みツール名（自身の名前またはエイリアス）を
  それぞれ `true` または `false` に対応付けるハッシュです。`true` はペアが同等性チェックに合格したことを示します。デフォルトは空のハッシュです。
- `tool_aliases` の動作は従来どおりです。ネイティブツールと MCP ツールのどちらに由来するかを問わず、すべての古い名前を列挙し、
  MCP ツールにもガバナンスを適用します（[決定 002](002_pairs_in_meta.md)）。
- MCP サーバーは、`true` に設定された名前だけを `com.gitlab/replaces` に含めます。ペアは `true` に設定するマージリクエストが
  マージされた時点で有効になります。そのマージリクエストで同等性チェックを行います。
- すべての利用側は `true` に設定されたペアだけを使います。DWS は `com.gitlab/replaces` を通じて使い、AI Catalog のピッカーと
  保存済みエージェントの Rails 側の対応付け処理はペアを検索するときに使います（[決定 005](005_remove_built_ins.md)）。
- ピッカーと Rails の対応付け処理が `true` のペアを使うのは、ユーザーのガバナンスを管轄する名前空間で切り替えフラグと
  `duo_mcp_tool_governance` が両方オンの間だけです。これは `com.gitlab/replaces` と同じ条件です。それ以外の場合はピッカーに
  組み込みツールが引き続き表示され、Rails はその置き換え先の MCP ツールを送信しません。
- テストでは一覧に表示されるすべての MCP ツールを確認します。`native_tool_swaps` のキーは、そのツールの名前とエイリアスのうち
  組み込みツール名に該当するものと過不足なく一致し、各値は `true` または `false` でなければなりません。
- 既存のペアにエントリがないものが 1 つでもあれば、テストのマージ直後に失敗します。そのため最初のマージリクエストでは、
  テストと `native_tool_swaps` を一緒に追加します。現在存在するペアすべて、つまり[ペアのページ](../pairs.md)の
  「同じ名前」と「ネイティブ名がすでにエイリアスになっている」に属するすべてのペアにエントリを追加し、`false` に設定します
  （[フェーズ 2](../_index.md#phases)）。このマージリクエストで有効になるペアはありません。以降は、同等性チェックに合格したペアを
  マージリクエストごとに 1 組ずつ `true` に設定します。
- `native_tool_swaps` は AI Catalog のコードには置きません。テストでは、ガバナンスがペアの特定にすでに使用している
  `Ai::ToolRules::Registry.all_tool_names` を通じて組み込みツール名を取得します。

### 提案するコード {#proposed-code}

2 つのネイティブツール名に対応する MCP ツールの例です。一方のペアは同等性チェックに合格し、もう一方は `start_discussion` への対応を待っています。

```ruby
# app/services/mcp/tools/notes/save_note_service.rb
override :tool_aliases
def self.tool_aliases
  %w[create_merge_request_note create_workitem_note create_work_item_note]
end

override :native_tool_swaps
def self.native_tool_swaps
  { 'create_merge_request_note' => true, 'create_work_item_note' => false }
end
```

`create_workitem_note` は旧 MCP ツール名です。組み込みツール名には該当しないため、エントリはありません。

MCP ツールとネイティブツールが同じ名前のペアでは、MCP ツール自身の名前を列挙します。

```ruby
# app/services/mcp/tools/merge_requests/get_merge_request_service.rb
override :native_tool_swaps
def self.native_tool_swaps
  { 'get_merge_request' => false }
end
```

`BaseService` は `tool_aliases` のデフォルトと同じ箇所で空のハッシュを返します。REST を使用するツールは
`route_setting :mcp` 内の `tool_aliases` の隣でハッシュを宣言し、`ApiTool` はそこから読み取ります。

```ruby
# app/services/mcp/tools/base/base_service.rb
def self.native_tool_swaps
  {}
end

def native_tool_swaps
  self.class.native_tool_swaps
end

# app/services/mcp/tools/base/api_tool.rb
def native_tool_swaps
  (settings[:native_tool_swaps] || {}).transform_keys(&:to_s)
end
```

EE の `ListTools` ハンドラーは `true` に設定された名前をツールの `_meta` に追加します。これを行うのは、ユーザーのガバナンスを管轄する
名前空間で切り替えフラグと `duo_mcp_tool_governance` が両方オンの間だけです（[決定 002](002_pairs_in_meta.md)）。
`governed_tool_data` は、ガバナンスのチェックが早期リターンする前にこの処理を呼び出すため、他のフラグには左右されません。
Orbit のコマンドツールは `manager.tools` に含まれないため、エントリが付きません。

```ruby
# ee/lib/ee/api/mcp/handlers/list_tools.rb
override :governed_tool_data
def governed_tool_data(tool_data, tool_name, current_user)
  tool_data = tool_data.deep_merge(_meta: native_tool_swap_meta(tool_name, current_user))
  return super unless ::Ai::ToolRules::McpGovernance.enabled_anywhere? && governed_namespace(current_user)

  # ...the existing governance checks, unchanged
end

def native_tool_swap_meta(tool_name, current_user)
  tool = manager.tools[tool_name]
  return {} unless tool && native_tool_swap_enabled?(current_user)

  swapped = tool.native_tool_swaps.filter_map { |name, on| name if on }
  swapped.any? ? { 'com.gitlab/replaces' => swapped } : {}
end
```

テストでは、一覧に表示されるすべての MCP ツールを順に確認します。`Manager#list_tools` は一覧に表示しないツールも返すため、
決定 002 と同様に、それらを除外します。

```ruby
# ee/spec/services/mcp/tools/native_tool_swaps_spec.rb
RSpec.describe 'MCP tool native_tool_swaps', feature_category: :mcp_server do
  it 'has an entry for every built-in tool name a listed tool answers to' do
    built_in_names = Ai::ToolRules::Registry.all_tool_names

    mismatched = Mcp::Tools::Manager.new.list_tools.filter_map do |name, tool|
      next if tool.unlisted?

      expected = ([name, *tool.tool_aliases] & built_in_names).sort
      declared = tool.native_tool_swaps.keys.sort

      "#{name}: answers to #{expected}, native_tool_swaps has #{declared}" unless expected == declared
    end

    expect(mismatched).to be_empty, <<~MSG
      Add each built-in tool name to native_tool_swaps: true once the pair passes the
      parity check, false until then. Remove names the tool no longer answers to.
        #{mismatched.join("\n  ")}
    MSG
  end

  it 'sets every native_tool_swaps value to true or false' do
    values = Mcp::Tools::Manager.new.list_tools.values.flat_map { |tool| tool.native_tool_swaps.values }

    expect(values).to all(be_in([true, false]))
  end
end
```

最初の例の一致チェックは、次の 3 つのケースをカバーします。

1. ツールの名前やエイリアスに当たらないキー、または組み込みツール名に当たらないキーがあると失敗します。`true` に設定したペアが実在することを保証します。
2. エイリアスを削除した際に対応するキーが残っていると失敗するため、`native_tool_swaps` と `tool_aliases` の間にずれが生じません。
3. 組み込みツール名に該当するエイリアスを追加した場合は、マージリクエストで `true` または `false` を追加するまで失敗します。

2 つ目の例は、`nil` や文字列 `'false'` など、他の値が設定されると失敗します。`ListTools` は `nil` と `false` 以外の値を
すべてオンとして扱うため、文字列の `'false'` を設定するとペアが有効になってしまいます。

`ee/spec/lib/ee/api/mcp/handlers/list_tools_spec.rb` でも、`com.gitlab/replaces` には `true` に設定された名前だけが列挙され、
いずれかのフラグがオフの場合はこのフィールドが存在しないことを確認します。

## 影響 {#consequences}

- 各ペアは個別に有効になります。`create_work_item_note` の準備を待ちながら、`create_merge_request_note` を有効にできます。
- 切り替えフラグがオンになると、`true` に設定されたペアだけが切り替わります。2026 年 11 月 16 日時点で `native_tool_swaps` を
  宣言しているツールはないため、すべてのペアが `false` から始まります。
- Rails 側でペアを無効に戻す変更は、Self-Managed と Dedicated にはリリース時にのみ届きます。
  [決定 007](007_rollout_flags.md)の DWS 側の無効化スイッチを使えば、引き続き速やかに対処できます。
- `native_tool_swaps` には `tool_aliases` と重複する名前が含まれます。両者が一致しなくなるとテストが失敗します。

## 検討した代替案 {#alternatives-considered}

| 代替案 | 採用しない理由 |
|---|---|
| 準備ができたペアを 1 つの Rails 定数にまとめる | 対象ツールの定義とは別の場所にあるため、各ツールのファイルを見ても、どのペアが有効か分かりません。 |
| MCP ツールごとに 1 つの true または false を設定する | 1 つのツールのペアが一斉に有効になるため、1 組に不備があると他のペアも待たされます。`create_work_item_note` の `start_discussion` への対応を待つ間は `create_merge_request_note` も有効にできず、`search` の 8 つのスコープも一斉に有効になります。 |
| `tool_aliases` から有効化済みの名前の一覧に名前を移す | `tool_aliases` の意味が変わり、マネージャーとガバナンスがツールの名前を特定するために 2 つのメソッドを参照することになります。 |
| `built_in_tool_definitions.rb` の各ツールに true または false を設定する | このファイルは AI Catalog のコードであり、MCP サーバーチームの所有範囲外です。また、Python の DAP ツールがすべて列挙されているわけではありません。 |
