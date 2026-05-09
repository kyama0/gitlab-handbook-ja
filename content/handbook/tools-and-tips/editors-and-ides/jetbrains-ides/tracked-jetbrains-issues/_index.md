---
title: "追跡している JetBrains Issue"
no_list: true
upstream_path: /handbook/tools-and-tips/editors-and-ides/jetbrains-ides/tracked-jetbrains-issues/
upstream_sha: 6f672d050777a6a6cb33fc5f31ccf71ebdd5b812
translated_at: "2026-05-08T00:00:00Z"
translator: claude
stale: false
---

## 概要

これは、GitLab に関連し、いつか修正されることを期待してフォローや投票をしておきたい JetBrains Issue の一覧です。

新しい Issue を報告する前に既存の Issue を探すための主要な Issue トラッカーは次のとおりです。

- RubyMine: <https://youtrack.jetbrains.com/issues/RUBY>
- GoLand: <https://youtrack.jetbrains.com/issues/GO>
- WebStorm: <https://youtrack.jetbrains.com/issues/WEB>

追跡する各 Issue は、下記の [Open Issues](#open-issues) セクションの下に `H3` セクションを持つ必要があります。テーブル形式でも書けますが、Markdown のテーブルは保守が大変で、見出しには自動的にアンカーリンクが付きます。

テンプレート例:

```markdown
### RUBY-30422

- Title: Rename can be invoked in empty string shared_examples
- Link: https://youtrack.jetbrains.com/issue/RUBY-30422/Rename-can-be-invoked-in-empty-string-sharedexamples
- Available In: 2022.3 (if the issue is closed, omit this line if the issue is still open)
- Notes: (anything for easy searching within this page, e.g. mention `noinspection` if this is a
  bug for a false positive `noinspection` comment.
```

Issue が修正されたら、自分自身で確認し、その Issue のエントリを [Open Issues](#open-issues) から [Closed Issues](#closed-issues) セクションに移動して、まだ古い IDE バージョンを使っているかもしれない人のために参照できるようにしてください。1～2 回の IDE リリースで修正された後は削除して構いません。

## `noinspection` コメント関連の Issue の取り扱い

これらの Issue の多くは [`# noinspection ...` コメントによるコードインスペクションの誤検知の抑制](/handbook/tools-and-tips/editors-and-ides/jetbrains-ides/code-inspection/#suppressing-false-positives-with-noinspection-comments) に関連しています。

`noinspection` 関連の Issue が解決され、リリース版の IDE に含まれた場合:

1. その Issue ID（例: `RUBY-25400`）を使ってコードベース内の対応する `noinspection` を検索します。
1. `noinspection` コメントを削除し、ファイルに対して `Inspect Code` を実行して修正されたことを確認します。
1. 上記のとおり、Issue のエントリを [Open Issues](#open-issues) から [Closed Issues](#closed-issues) セクションに移動します。

## Open Issues

これらのセクションはアルファベット順に並べてください。直接リンクできるよう見出しになっています。

### IDEA-337625

- Title: DIRC checksum mismatch error in Settings Sync
- Link: https://youtrack.jetbrains.com/issue/IDEA-337625
- Notes: Settings Sync 機能は現時点で動作しません。これは [JetBrains が以前の代替であった Settings Repository プラグインも非推奨化している](/handbook/tools-and-tips/editors-and-ides/jetbrains-ides/setup-and-config/#update-2023-11) ため問題です。

### RUBY-25400

- Title: Programmatically defined constants always produce 'Unresolved reference' error
- Link: <https://youtrack.jetbrains.com/issue/RUBY-25400/Programmatically-defined-constants-always-produce-Unresolved-reference-error#focus=Comments-27-7812554.0-0>
- Notes:
  - `# noinspection RubyResolve` が必要です
  - UPDATE 2023-07-10: JetBrains からの返答がここにあります: <https://youtrack.jetbrains.com/issue/RUBY-25400/Programmatically-defined-constants-always-produce-Unresolved-reference-error#focus=Comments-27-7813280.0-0>。制限事項と回避策の可能性が述べられています。
  - UPDATE 2023-01-06: これは依然として一部のケースで発生しており、特に Declarative Policy DSL で顕著です。このケース固有の Issue を追跡できるか問い合わせ中:
    https://youtrack.jetbrains.com/issue/RUBY-25400/Programmatically-defined-constants-always-produce-Unresolved-reference-error#focus=Comments-27-8744732.0-0

### RUBY-25600

- Title: Code style: compatibility with Rubocop's Layout/MultilineOperationIndentation
- Link: https://youtrack.jetbrains.com/issue/RUBY-25600
- Notes:
  - この Issue により、RubyMine の自動フォーマットを GitLab の RuboCop 設定に合わせることが不可能になっており、私たちはデフォルト設定を変更したくないと判断しています。
  - この Issue に注目を集めるため、ぜひ投票（thumbs-up）してください！

### RUBY-31542

- Title: Cannot resolve attributes on ActiveRecord model which is not in standard location
- Link: <https://youtrack.jetbrains.com/issue/RUBY-31542/Cannot-resolve-attributes-on-ActiveRecord-model-which-is-not-in-standard-location>
- Notes:
  - `# noinspection SqlResolve` が必要、もしくは時には `# noinspection RubyResolve` も必要なことがあります（例: Rspec を経由して間接的にアクセスする場合など）。
  - UPDATE 2023-07-10: JetBrains からの返答がここにあります: <https://youtrack.jetbrains.com/issue/RUBY-31542/Cannot-resolve-attributes-on-ActiveRecord-model-which-is-not-in-standard-location#focus=Comments-27-7813387.0-0>。情報の提供と、追加情報・フォローアップの依頼が含まれています。
  - UPDATE 2024-01-06: JetBrains はこの Issue を解決済みとマークしましたが、関連すると思われるエラーが依然として確認されています。こちらのコメントを参照してください:
    https://youtrack.jetbrains.com/issue/RUBY-31542/Cannot-resolve-attributes-on-ActiveRecord-model-which-is-not-in-standard-location#focus=Comments-27-8744712.0-0

### RUBY-32287

- Title: RubyResolve error when calling ActiveRecord dynamically defined attribute methods from within an `if` block on ActiveRecord lifecycle methods
- Link: <https://youtrack.jetbrains.com/issue/RUBY-32287>

### RUBY-32288

- Title: "Go To Declaration" shows libraries from gems in non-current SDK
- Link: https://youtrack.jetbrains.com/issue/RUBY-32288
- Notes:
  - この問題の本質は、`gems` 配下のベンダリングされたすべての gem に対して RubyMine がモジュールを作成しないようにしたいということですが、デフォルトではモジュール作成のプロンプトが常に出てしまいます。すると、これらのモジュールのインタプリタが古くなってしまうという関連問題も発生します。
  - 回避策については次のコメントを参照してください: https://youtrack.jetbrains.com/issue/RUBY-32288/Go-To-Declaration-shows-libraries-from-gems-in-non-current-SDK#focus=Comments-27-8922166.0-0

### RUBY-32301

- Title: Unable to find associated model/association in GitLab application
- Link: https://youtrack.jetbrains.com/issue/RUBY-32301
- Notes:
  - これは現時点では解決不可能です。`EE` モジュールの mix-in に関わるメタプログラミングと間接化の量が原因です。
  - JetBrains からの Issue へのコメント:
    *"...it looks like RubyMine is unable to understand the relationship here due to the alternative definition approach with `prepended` from `ee/app/models/ee/clusters/agent.rb`. `Prependable` seems to be a custom approach to prepending code in GitLab,
    and we don't have any recognition of it. Unfortunately I don't have any workarounds for this right now, but we can leave the ticket open in case we think of something."*

### RUBY-32336

- Title: Add support for declarative_policy
- Link: https://youtrack.jetbrains.com/issue/RUBY-32336
- Notes:
  - declarative_policy gem 内の大規模なメタプログラミングが「Unresolved reference」エラーを引き起こします。
  - https://youtrack.jetbrains.com/issue/RUBY-25400/Programmatically-defined-constants-always-produce-Unresolved-reference-error#focus=Comments-27-8805699.0-0 も参照してください:
    - "I'm afraid there is no existing issue. I think this is something that we can't really address without implementing custom support for this library, just due to how
      it has written its own DSL. We'll create an issue requesting support for this library (so that you can mention it in your comments), but there isn't any timeframe
      on implementing it right now sorry."

### RUBY-32975

- Title: Update unconventional name inspections to match RuboCop further
- Link: https://youtrack.jetbrains.com/issue/RUBY-32975
- Notes:
  - `# noinspection RubyClassModuleNamingConvention` が必要です
  - `EE` のような 2 文字のモジュール名を許可するために必要です

## Closed Issues

### RUBY-31540

- Title: Invalid RailsParamDefResolve warning when table name does not match class name
- Link: <https://youtrack.jetbrains.com/issue/RUBY-31540/Invalid-RailsParamDefResolve-warning-when-table-name-does-not-match-class-name>
- Notes:
  - `# noinspection RailsParamDefResolve` などの noinspection コメントが必要です。
  - これはおそらく、`Clusters::Agent` モデルの非標準的な命名に起因しています。テーブル名が `cluster_agents` で、`self.table_name = 'cluster_agents'` でオーバーライドする必要があります。これは GraphQL ミューテーションでもオーバーライドや非標準の処理を必要とします。私たちはこのテーブル名またはモデル名を、Rails の標準的な命名規則に合わせてリネームすることを検討すべきです。

### RUBY-31544

- Title: Cannot find fixtures defined with `RSpec::Parameterized::TableSyntax`, causes `RubyResolve` warning
- Link: <https://youtrack.jetbrains.com/issue/RUBY-31544/Cannot-find-fixtures-defined-with-RSpecParameterizedTableSyntax-causes-RubyResolve-warning>
- Notes: `# noinspection RubyResolve` が必要です

### RUBY-32041

- Title: Mismatched argument type inspection false positive on RSpec parameterized table syntax
- Link: <https://youtrack.jetbrains.com/issue/RUBY-32041>
- Notes: `# noinspection RubyMismatchedArgumentType` が必要です。
  これは <#ruby-31544>（<https://youtrack.jetbrains.com/issue/RUBY-31544/Cannot-find-fixtures-defined-with-RSpecParameterizedTableSyntax-causes-RubyResolve-warning>）とは異なり、後者は最新の EAP で修正されたようです。
  RUBY-32041 は `RSpec::Parameterized::TableSyntax` で `Array` 型を使う場合に固有のようです。

### RUBY-31543

- Title: Fixtures declared with `let_it_be` from `test-prof` gem cannot be found, and give `RubyResolve` warning
- Link: <https://youtrack.jetbrains.com/issue/RUBY-31543/Fixtures-declared-with-letitbe-from-test-prof-gem-cannot-be-found-and-give-RubyResolve-warning>
- Notes: `# noinspection RubyResolve` が必要です
