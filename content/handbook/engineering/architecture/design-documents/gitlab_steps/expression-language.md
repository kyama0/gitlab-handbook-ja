---
owning-stage: "~devops::verify"
title: "The CI Steps Expression Language"
toc_hide: false
upstream_path: /handbook/engineering/architecture/design-documents/gitlab_steps/expression-language/
upstream_sha: 9e852ac812142230dfe1e1db31be2862cd857cfd
translated_at: "2026-04-27T00:00:00Z"
translator: claude
stale: false
lastmod: "2025-12-15T10:52:09+00:00"
---

## 概要

このドキュメントは、文字列操作、算術演算、比較、
論理演算、プロパティアクセス、および関数呼び出しを含む CI Steps 式言語の拡張を提案します。この言語を自社構築することを提案し、CI Components 式言語とどのように異なるかを説明します。

その後、CI Steps 式言語を正式に仕様として定義します。

## 用語

- **CI Steps 式言語**: ステップの作成者とユーザーがステップ内の変数を参照するために使用する構文。これらの式は `${{ }}` デリミターを使用します。例:
  - 入力へのアクセス: `${{ inputs.address }}`
  - ジョブ変数の参照: `${{ job.GITLAB_USER_NAME }}`
  - 前のステップの出力の取得: `${{ step.my_step.output.duration }}`
- **CI Components 式言語**: CI パイプラインと CI コンポーネント入力を参照するために使用する構文。これらの式は `$[[ ]]` デリミターを使用します。例えば、動的に名前付けされたジョブを持つコンポーネントを作成できます: `$[[ inputs.job-prefix ]]-scan-website:`
- **評価**: 式をその実際の値に解決するプロセス。例えば、式 `${{ inputs.speed_of_light_ms }}` はその値が入力として提供されると `299792458` に評価されます。

## 動機

CI Steps が他の CI ソリューションと差別化されるのは、個々のジョブタスク（ステップ）が再利用可能であることです。ユーザーはカスタムタスク（例: ステークホルダーへのメール送信）を実行する際に特定目的のステップを組み合わせ、一般的なタスク（例: ステップライブラリにホストされた Go コンパイルステップ）を実行する際に外部ソースのステップを使用して Steps CI ジョブを作成します。

ステップはステップ入力として式 `${{ [expression] }}` を使用してつなぎ合わされます。式はジョブ実行中に評価されるため、ジョブ変数や以前実行されたステップの出力にアクセスできます。
例えば、Docker `build` ステップが Docker イメージをビルドすると、後続の `release` ステップはビルドステップからのイメージリファレンス出力を使用して、正しいイメージがリリースされることを確認できます。

```yaml
build-and-release:
  run:
    - name: build
      step: steps/library/docker/build # this step has an output called 'image_ref', the repository and tag of the Docker image
      inputs:
        work_dir: .
        Dockerfile: ./Dockerfile
    - name: release
      step: steps/library/docker/promote
      inputs:
        from_image: ${{ steps.build.outputs.image_ref }} # expression evaluates to the name of the image created in the 'build' step
        to_image: registry.gitlab.com/my-product:1.0.1
```

上記の例はシンプルで、`image_ref` 出力は直接 `from_image` 入力に渡されます。
現実の多くの状況はより複雑なため、ユーザーは変数とステップ出力から入力値を作成するためのツールが必要です。例:

- 文字列操作: `build_image: ${{ job.CI_REGISTRY }}/my-build:${{ job.CI_PIPELINE_IID }}`
- 算術演算: `version: ${{ steps.versions.most_recent.major + 1 }}`
- 比較: `log_when: ${{ inputs.LOGLEVEL > 4 }}`
- 論理演算: `user: ${{ inputs.username || "default_username" }}`
- プロパティアクセス: `address_line2: ${{ user.address.street[2] }}`
- 関数呼び出し: `commit: ${{ replace(job.CI_COMMIT_DESCRIPTION, "\n", " ") }}`

これらの機能が式言語に追加されない場合、この変数/ステップ出力からステップ入力への変換の負担はステップの作成者に押し付けられます。これにより:

- ステップ作成者の生産性が低下し、
- ステップの再利用性が低下します（正しい入力形式がなければ使用できません）

## 目標

### 概要

CI Steps 式言語を拡張して、文字列操作、算術演算、比較、論理演算、プロパティアクセス、および関数呼び出しを可能にします。

式言語の拡張は:

- すでに使用されているプロパティルックアップ（例: `${{ inputs.my_variable }}`）と後方互換性がなければならず、現在の実装を置き換えられる **MUST**
- 実装前に言語をレビューできるよう、拡張バッカス・ナウア形式（EBNF）を使用してコンテキストフリー文法として仕様化 **MUST**
- 拡張可能でなければならない。追加の関数、操作、変換が将来の拡張として可能 **MUST**
- 使いやすく、エンジニアにとってある程度なじみ深い感じがすべき。JSON よりも強力で、JavaScript よりも複雑でない **SHOULD**

### 自社構築

式は再帰下降パーサーを使用して GitLab で自社構築されます。

既存の式言語とライブラリのレビューでは、CI Steps のニーズに適したものは見つかりませんでした。主な問題は:

- 機能が多すぎる、複雑すぎる、または GitLab ユーザーにはなじみがないと見なされる
- メタデータの受け渡しをサポートしていないため、Steps が評価された式が機密値から派生しているかどうかを判断できない

### スコープ外

この提案は以下を含みません:

- どの関数を定義すべきかではなく、関数を呼び出せることのみ
- どの名前空間/スコープ/コンテキスト/変数を定義すべきかではなく、使用できることのみ
- CI Components 式言語の変更
- 制御フローの実装方法の提案

## ユースケースの例

### バージョン管理

```yaml
# Extract and increment semantic versions
- name: bump-major-version
  step: ./steps/bump
  inputs:
    new_version: ${{ major_version(steps.get_current.outputs.version) + 1 }}.0.0
    tag_name: v${{ steps.get_current.outputs.version }}
```

### 環境固有の設定

```yaml
# Different registry URLs based on branch
- name: deploy
  step: ./steps/deploy
  inputs:
    registry: '${{ (job.CI_COMMIT_REF_NAME == "main" && "prod.registry.com") || "staging.registry.com" }}'
    replicas: '${{ (job.CI_COMMIT_REF_NAME == "main" && 5) || 2 }}'
```

### 条件付き実行ロジック

```yaml
# Skip steps based on file changes or conditions
- name: run-tests
  step: ./steps/run-tests
  inputs:
    skip_integration: '${{ !contains(steps.changes.outputs.files, "integration/") }}'
    test_command: '${{ (inputs.test_type == "full" && "npm run test:all") || "npm run test:unit" }}'
```

### セキュリティとコンプライアンス

```yaml
# Validate and transform security scan results
- name: security_gate
  step: ./security_gate
  inputs:
    proceed: ${{ steps.scan.outputs.critical_vulnerabilities == 0 && steps.scan.outputs.high_vulnerabilities < 5 }}
```

## CI Components からの逸脱

### 現状 - CI Components

CI Components 式言語:

- `$[[` と `]]` で囲まれる
- パイプライン作成時に評価される
- `.` を使用したプロパティアクセスをサポート（例: `inputs.rust_version`）
- `array`、`boolean`、`number`、`string` 型をサポート
- 文字列テンプレートをサポート（例: `echo $[[inputs.message]]`）
- パイプ `|` を使用した関数呼び出しをサポート（例: `$[[ inputs.test | expand_vars | truncate(5,8) ]]`）
  - パイプ関数は 3 つのみサポート
  - 定義済み関数のみサポートし、`expand_vars` と `truncate` の 2 つのみ

### 今後 - CI Steps

CI Steps 式言語は以下を **MUST**:

- `array`、`boolean`、`number`、`string`、**かつ** `struct` 型をサポート
- ジョブ実行中、最後の可能な瞬間に評価される
- 算術演算、文字列操作、論理演算、プロパティアクセスを使用して変数/ジョブ入力/ステップ出力をステップ入力に操作する強力な方法をサポート
- 制御フローのための比較をサポート
- 複雑な関数合成をサポート（例: `max(15, major_version(extract_version("postgres:13.4.1")))`）
- 文字列テンプレートをサポート
- `.` を使用したプロパティアクセスをサポート

### 今後の方向性

Steps と CI Components 式言語は、異なるコンテキストを使用して異なる時点で評価されるため、異なります。

- Steps は CI Components 式を使用できません。ユーザーがステップ入力値を作成するための十分に豊富なツールを提供していません。
- CI Components は Steps 式を使用できません。`env`、`output_file`、`work_dir`、`export_file` などのステップコンテキストはパイプライン作成時に利用できません。

式言語の違いが残る一方で、可能な限り違いを最小化する努力をすべきです。今後、Steps 式は:

- `${{` と `}}` で囲まれ、使用される式言語とジョブ実行中に評価されることをユーザーに伝える
- 可能な場合は CI Components 式に準拠（例:
  - プロパティアクセス
  - `array`、`boolean`、`number`、`string` 型）
- 必要な場合は CI Components 式から逸脱（例:
  - `struct` のサポート
  - 算術演算、文字列操作、論理演算、比較のサポート
  - 関数呼び出しの方法、使用できる関数数の制限、呼び出し可能な関数）

CI Component と Steps 式言語を統一する取り組みを追うには https://gitlab.com/groups/gitlab-org/-/epics/18519+ を参照してください。

### 例

以下はステップを実行するジョブを含む CI コンポーネントの例です。ユーザーは 2 つの式構文を知る必要があります。

```yaml
spec:
  inputs:
    echo_version:
      type: string
---

build-job:
  run:
    - name: echo_step
      step: gitlab.com/steps/echo@$[[inputs.echo_version]]  # CI Component expression, evaluated when the pipeline is created
      inputs:
        message: 'Hello, ${{ remove_new_lines(jobs.CI_RUNNER_DESCRIPTION) }}' # CI Steps expression, evaluated during job execution
```

## 仕様

### コンテキストフリー文法

拡張バッカス・ナウア形式（EBNF）文法として定義された CI Steps 式言語。

```ebnf
// Lexical elements
unicode_char   = /* an arbitrary Unicode code point */ .
unicode_letter = /* a Unicode code point categorized as "Letter" */ .
unicode_digit  = /* a Unicode code point categorized as "Number, decimal digit" */ .

letter = unicode_letter | "_" .
digit  = "0" … "9" .

// String escape sequences
escaped_single  = `\` ( `\` | "'" ) .
escaped_double  = `\` ( "a" | "b" | "f" | "n" | "r" | "t" | "v" | `\` | "/" | `"` | "$" ) .
escaped_unicode = "u" digit digit digit digit .

// Template expressions
template = "${{" Expression "}}" .

// Tokens (lexical rules)
identifier = letter { letter | unicode_digit } . /* except reserved */
int_lit    = digit { digit } .
float_lit  = digit { digit } "." digit { digit } [ exponent ] .
exponent   = ( "e" | "E" ) [ "+" | "-" ] digit { digit } .
number     = int_lit | float_lit .

string_lit     = single_quoted | double_quoted .
single_quoted  = "'" { unicode_char | escaped_single } "'" .
double_quoted  = `"` { unicode_char | escaped_double | escaped_unicode | template } `"` .
string         = string_lit .

// Operators
binary_op = "||" | "&&" | rel_op | add_op | mul_op .
unary_op  = "+" | "-" | "!" .
rel_op    = "==" | "!=" | "<" | "<=" | ">" | ">=" .
add_op    = "+" | "-" .
mul_op    = "*" | "/" | "%" .

// Reserved words
reserved = "array" | "as" | "break" | "case" | "const" | "continue" |
    "default" | "else" | "fallthrough" | "float" | "for" | "func" |
    "function" | "goto" | "if" | "import" | "in" | "int" | "let" | "loop" |
    "map" | "namespace" | "number" | "object" | "package" | "range" |
    "return" | "string" | "struct" | "switch" | "type" | "var" | "void" |
    "while" .

// CI Steps Expression Language
Expression = OrExpression .

OrExpression = AndExpression { "||" AndExpression } .
AndExpression = ComparisonExpression { "&&" ComparisonExpression } .
ComparisonExpression = AdditiveExpression { rel_op AdditiveExpression } .
AdditiveExpression = MultiplicativeExpression { add_op MultiplicativeExpression } .
MultiplicativeExpression = UnaryExpression { mul_op UnaryExpression } .

UnaryExpression = unary_op UnaryExpression
                | PostfixExpression .

PostfixExpression = PrimaryExpression
                  { "." identifier
                  | "[" Expression "]"
                  | Call
                  } .

PrimaryExpression = Literal
                  | identifier
                  | "(" Expression ")"
                  | Array
                  | Object .

Literal = "null"
        | "true"
        | "false"
        | string
        | number .

Array = "[" [ ArrayElements ] "]" .
ArrayElements = Expression { "," Expression } [ "," ] .

Object = "{" [ ObjectElements ] "}" .
ObjectElements = ObjectElement { "," ObjectElement } [ "," ] .
ObjectElement = Expression ":" Expression .

Call = "(" [ Expression { "," Expression } ] ")" .
```

### ドラフト実装

- [式プレイグラウンド](https://storage.googleapis.com/directory-io/playground/index.html)
- [Draft: Add specification](https://gitlab.com/gitlab-org/step-runner/-/merge_requests/239)
- [Draft: Implement expression lexer](https://gitlab.com/gitlab-org/step-runner/-/merge_requests/234)
- [Draft: Implement expression value/type system](https://gitlab.com/gitlab-org/step-runner/-/merge_requests/242)
- [Draft: Implement expression parser](https://gitlab.com/gitlab-org/step-runner/-/merge_requests/243)
- [Draft: Implement expression evaluator](https://gitlab.com/gitlab-org/step-runner/-/merge_requests/244)

### 詳細と例

#### ソースコード表現

ソースコードは UTF-8 でエンコードされた Unicode テキストです。テキストは正規化されないため、単一のアクセント付きコードポイントは、アクセントと文字を組み合わせて構築された同じ文字とは異なります。

##### 文字

```ebnf
unicode_char   = /* an arbitrary Unicode code point */ .
unicode_letter = /* a Unicode code point categorized as "Letter" */ .
unicode_digit  = /* a Unicode code point categorized as "Number, decimal digit" */ .
```

##### 文字と数字

```ebnf
letter = unicode_letter | "_" .
digit  = "0" … "9" .
```

#### 字句要素

##### コメント

現在、言語はコメントをサポートしていません。

##### トークン

トークンは言語の語彙を形成します。識別子、キーワード、演算子と句読点、リテラルの 4 つのクラスがあります。

##### 識別子

識別子は変数と関数に名前を付けます。

```ebnf
identifier = letter { letter | unicode_digit } .
```

識別子はキーワードであってはなりません。識別子は大文字と小文字を区別します: `foo`、`Foo`、`FOO` は 3 つの異なる識別子です。

##### キーワード

以下のキーワードは予約されており、識別子として使用できません:

```text
array       as          break       case        const
continue    default     else        fallthrough float
for         func        function    goto        if
import      in          int         let         loop
map         namespace   number      object      package
range       return      string      struct      switch
type        var         void        while
```

さらに、以下のリテラルキーワードが認識されます:

```text
false       null        true
```

##### 演算子と句読点

以下の文字シーケンスは演算子と句読点を表します:

```text
+    &&    ==    !=    (    )
-    ||    <     <=    [    ]
*    !     >     >=    {    }
/    %     .     ,     :
```

##### 整数リテラル

整数リテラルは数字のシーケンスです。先頭のゼロは許可されます。

```ebnf
int_lit = digit { digit } .
```

##### 浮動小数点リテラル

浮動小数点リテラルは、整数部、小数点、小数部、およびオプションの指数部で構成されます。

```ebnf
float_lit = digit { digit } "." digit { digit } [ exponent ] .
exponent  = ( "e" | "E" ) [ "+" | "-" ] digit { digit } .
```

##### 数値リテラル

数値リテラルは整数または浮動小数点リテラルのいずれかです。

```ebnf
number = int_lit | float_lit .
```

##### 文字列リテラル

文字列リテラルは文字列定数を表し、シングルクォートとダブルクォートの 2 つの形式があります。両方とも複数の文字を許可しますが、エスケープシーケンスとテンプレート式の処理方法が異なります。

シングルクォート文字列は生の文字列リテラルです。解釈を最小限に抑えた文字列が必要な場合はシングルクォートを使用してください。

- テンプレート式やほとんどのエスケープシーケンスをサポートしない
- 最小限のエスケープシーケンスをサポート
  - `\\` - バックスラッシュ
  - `\'` - シングルクォート

ダブルクォート文字列は以下をサポートします:

- `${{ ... }}` 構文を使用したテンプレート式。テンプレート内の式は文字列に評価される必要があります。詳細は[テンプレート式](#テンプレート式)を参照
- 完全なエスケープシーケンスのセット
  - `\a` - アラートまたはベル
  - `\b` - バックスペース
  - `\f` - フォームフィード
  - `\n` - 改行
  - `\r` - キャリッジリターン
  - `\t` - 水平タブ
  - `\v` - 垂直タブ
  - `\\` - バックスラッシュ
  - `\/` - スラッシュ
  - `\"` - ダブルクォート
  - `\$` - 単一のドル記号

```ebnf
string_lit         = single_quoted | double_quoted .
single_quoted      = "'" { unicode_char | escaped_single } "'" .
double_quoted      = `"` { unicode_char | escaped_double | escaped_unicode | template } `"` .
escaped_single     = `\` ( `\` | "'" ) .
escaped_double     = `\` ( "a" | "b" | "f" | "n" | "r" | "t" | "v" | `\` | "/" | `"` | "$" ) .
escaped_unicode    = "u" digit digit digit digit .
template           = "${{" Expression "}}" .
```

例:

```js
// Single-quoted strings
'Hello, world!'
'It\'s a beautiful day'  // Escaped single quote
'Path: C:\\Users\\Alice' // Escaped backslashes
'${{ "hello" }}'         // Treated literally, does not evaluate

// Double-quoted strings
"Hello, world!"
"She said, \"Hello!\""   // Escaped double quotes
"Line 1\nLine 2\nLine 3" // Newline characters
"Name:\tJohn\nAge:\t30"  // Tab and newline
"Alert\a\tBackspace\b"   // Special characters

// Template expressions
"Hello, ${{ name }}!"                                 // Simple variable interpolation
"Path: ${{ dir }}/${{ file }}"                       // Multiple templates
```

#### 型

この言語は以下の型をサポートしています:

##### Boolean

ブール値は定義済み定数 `true` と `false` で表されます。

##### Null

null 値は定義済み定数 `null` で表されます。

##### Number

数値は IEEE 754 倍精度浮動小数点値（53 ビットの精度）です。

##### String

文字列は Unicode コードポイントの不変シーケンスです。

##### Array

配列は値の順序付きシーケンスです。要素は任意の型にでき、配列内で型を混在させることができます。

##### Object

オブジェクトはキーと値のペアの順序なしコレクションです。キーは文字列（文字列リテラルまたは文字列に評価される式）でなければなりません。値は任意の型にできます。

#### 型演算

このセクションでは、異なる型間でどの演算が有効かとその動作を説明します。

##### 型互換性テーブル

| 演算         | 有効な型        | 結果の型    | 注記                                 |
|--------------|-----------------|-------------|--------------------------------------|
| `+` (二項)   | number + number | number      | 加算                                 |
| `+` (二項)   | string + string | string      | 連結                                 |
| `-` (二項)   | number - number | number      | 減算                                 |
| `*`          | number * number | number      | 乗算                                 |
| `/`          | number / number | number      | 除算（ゼロ除算でエラー）             |
| `%`          | number % number | number      | 剰余（ゼロ剰余でエラー）             |
| `+` (単項)   | number          | number      | 恒等式（変更なしで返す）             |
| `-` (単項)   | number          | number      | 否定                                 |
| `!`          | any             | boolean     | 真偽に基づく論理 NOT                 |
| `==`         | any == any      | boolean     | 等価比較                             |
| `!=`         | any != any      | boolean     | 不等価比較                           |
| `<`          | any < any       | boolean     | 未満（比較セマンティクスを参照）     |
| `<=`         | any <= any      | boolean     | 以下                                 |
| `>`          | any > any       | boolean     | 超過                                 |
| `>=`         | any >= any      | boolean     | 以上                                 |
| `&&`         | any && any      | any         | 最初の偽の値または最後の値を返す     |
| `\|\|`       | any \|\| any    | any         | 最初の真の値または最後の値を返す     |
| `.`          | object/array    | any         | プロパティ/メソッドアクセス          |
| `[]`         | object[string]  | any         | オブジェクトプロパティアクセス       |
| `[]`         | array[number]   | any         | 配列要素アクセス                     |
| `()`         | function        | any         | 関数呼び出し                         |

##### 等価セマンティクス

`==` と `!=` 演算子は次のように値を比較します:

- **null**: `null` とのみ等価
- **boolean**: 同じ値を持つブール値とのみ等価
- **number**: 同じ数値を持つ数値と等価
- **string**: 同一の UTF-8 バイトシーケンスを持つ文字列と等価
- **array**: 同じ長さと等価な要素を持つ配列と等価（深い比較）
- **object**: 同じキーと等価な値を持つオブジェクトと等価（深い比較、キーの順序は無関係）

##### 比較セマンティクス

比較演算子 `<`、`<=`、`>`、`>=` は任意の型を比較できます。値を比較する場合:

1. **同じ型の比較**:
    - **numbers**: 数値比較
    - **strings**: 辞書順比較（UTF-8 バイト順）
    - **booleans**: `false < true`
    - **arrays**: 要素を順番に比較。要素が少ない配列は要素が多い配列より小さい
    - **objects**: ソートされたキー順で要素を比較。要素が少ないオブジェクトは要素が多いオブジェクトより小さい
    - **null**: すべての null 値は等価

2. **異なる型の比較**:

   異なる型の値を比較する場合、型は次のように順序付けられます:

   - `null`
   - `boolean`
   - `number`
   - `string`
   - `array`
   - `object`

   例えば:

   ```js
   null < true      // true (null has order 0, boolean has order 1)
   42 < "hello"     // true (number has order 2, string has order 3)
   [1,2,3] > "text" // true (array has order 4, string has order 3)
   ```

##### 短絡評価

論理演算子 `&&` と `||` は短絡評価を使用します:

- `&&`: 左オペランドが偽であれば、右オペランドは評価されない
- `||`: 左オペランドが真であれば、右オペランドは評価されない

#### 式

##### 主要な式

主要な式は単項式と二項式のオペランドです。

```ebnf
PrimaryExpression = Literal | identifier | "(" Expression ")" | Array | Object .
Literal           = "null" | "true" | "false" | string_lit | number .
```

括弧を使用して式をグループ化し、演算子の優先順位をオーバーライドできます:

```js
2 + 3 * 4        // evaluates to 14
(2 + 3) * 4      // evaluates to 20
```

##### 配列リテラル

配列リテラルは配列値を構築します。

```ebnf
Array         = "[" [ ArrayElements ] "]" .
ArrayElements = Expression { "," Expression } [ "," ] .
```

例:

```js
[1, 2, 3]
["a", 1, true, null]
[1, 2, 3,]  // trailing comma allowed
```

##### オブジェクトリテラル

オブジェクトリテラルはオブジェクト値を構築します。キーは文字列リテラルまたは文字列に評価される式にできます。

```ebnf
Object         = "{" [ ObjectElements ] "}" .
ObjectElements = ObjectElement { "," ObjectElement } [ "," ] .
ObjectElement  = Expression ":" Expression .
```

例:

```js
{"name": "John", "age": 30}
{"key": value}
{computed_key: value}          // computed_key must evaluate to string
{"prefix" + "_suffix": value}  // expressions that produce strings
{obj.prop: value,}             // trailing comma allowed
```

注意: オブジェクトキーは実行時に文字列に評価される必要があります。非文字列キーは実行時エラーになります。

##### セレクター

セレクターは値のプロパティまたは要素にアクセスします。

```ebnf
Selector = "." identifier | "[" Expression "]" .
```

`.` を使用したプロパティアクセスには識別子が必要です。`[]` を使用した計算プロパティアクセスは任意の式を受け付けます。

例:

```js
obj.property
obj["property"]
my_array[0]
my_array[index]
```

##### 関数呼び出し

関数呼び出しは 0 個以上の引数で関数を呼び出します。

```ebnf
Call = "(" [ Expression { "," Expression } ] ")" .
```

例:

```js
my_func()
my_func(1, 2, 3)
obj.method()
my_array[0]()  // if my_array[0] contains a function
```

##### 単項演算子

単項演算子は最も高い優先度を持ちます。

```ebnf
UnaryExpression = unary_op UnaryExpression | PostfixExpression .
unary_op        = "+" | "-" | "!" .
```

| 演算子 | 名前 | 型 | 説明 |
|--------|------|-----|------|
| `+` | 単項プラス | number | 数値の恒等式 |
| `-` | 単項マイナス | number | 数値の否定 |
| `!` | 論理 NOT | any | 論理否定（真偽に基づく） |

##### 二項演算子

二項演算子は左結合であり、標準の優先順位規則に従います。

| 優先度 | 演算子 | 結合性 |
|--------|--------|--------|
| 5 | `*` `/` `%` | 左 |
| 4 | `+` `-` | 左 |
| 3 | `==` `!=` `<` `<=` `>` `>=` | 左 |
| 2 | `&&` | 左 |
| 1 | `\|\|` | 左 |

##### 算術演算子

| 演算子 | 名前 | 型 | 結果 |
|--------|------|-----|------|
| `+` | 加算 | number + number | number |
| `+` | 連結 | string + string | string |
| `-` | 減算 | number - number | number |
| `*` | 乗算 | number * number | number |
| `/` | 除算 | number / number | number |
| `%` | 剰余 | number % number | number |

注意: ゼロ除算は実行時エラーになります。`+` 演算子は数値に対しては加算を、文字列に対しては連結を行います。暗黙の型変換は行われません - `"hello" + 42` はエラーです。

##### 比較演算子

| 演算子 | 名前 | 型 | 結果 |
|--------|------|-----|------|
| `==` | 等価 | any == any | boolean |
| `!=` | 不等価 | any != any | boolean |
| `<` | 未満 | any < any | boolean |
| `<=` | 以下 | any <= any | boolean |
| `>` | 超過 | any > any | boolean |
| `>=` | 以上 | any >= any | boolean |

注意: 比較演算子は任意の型の値を比較できます。異なる型の比較方法の詳細は[比較セマンティクス](#比較セマンティクス)を参照してください。

##### 論理演算子

| 演算子 | 名前 | 説明 |
|--------|------|------|
| `&&` | 論理 AND | 左が真なら右オペランドを返し、そうでなければ左を返す |
| `\|\|` | 論理 OR | 左が真なら左オペランドを返し、そうでなければ右を返す |

注意: 論理演算子は短絡評価を使用し、実際のオペランド値を返します（ブール値ではありません）。

**特別な `||` の動作**: 左オペランドがプロパティ未検出またはインデックス範囲外エラーになる場合、`||` はこれを偽の値として扱い、エラーを伝播するのではなく右オペランドを評価します。

例:

```js
"foo" && "bar"     // "bar" (returns right when left is truthy)
null && "bar"      // null (returns left when left is falsy)
"foo" || "bar"     // "foo" (returns left when left is truthy)
false || "default" // "default" (returns right when left is falsy)

// Special || error handling
obj.missing || "default"    // "default" (missing property treated as falsy)
array[999] || "fallback"    // "fallback" (out of bounds treated as falsy)
obj.exists || "default"     // obj.exists value
```

##### テンプレート式

テンプレート式は `${{ }}` 構文を使用して文字列リテラル内に式を埋め込むことができます。ダブルクォート文字列のみがテンプレートをサポートします。

```ebnf
template = "${{" Expression "}}" .
```

テンプレート内の式は実行時に文字列に評価される必要があります。非文字列値は実行時エラーになります。`\${{` を使用してテンプレート式をエスケープできます。

例:

```js
// Simple variable interpolation
"Hello, ${{ name }}!"                    // "Hello, Alice!"
'Welcome ${{ user }}'                    // "Welcome Bob"

// Expressions with operators
"Full name: ${{ firstName + " " + lastName }}"
"Path: ${{ dir }}/${{ file }}"

// Multiple templates in one string
"${{ greeting }}, ${{ name }}! Today is ${{ day }}."

// Complex expressions
"User: ${{ user.firstName }} (${{ user.role }})"
"Items: ${{ items[0] }}, ${{ items[1] }}"

// Escape template
"Hello, \${{ \"world!\" }}"             // "Hello, ${{ \"world!\" }}"

// Errors - expression must return string
"Count: ${{ 42 }}"                      // Error: number not string
"Total: ${{ price + tax }}"             // Error: number not string
```

##### 真偽性

以下の値は「偽」と見なされます:

- `false`
- `null`
- `0`（数値ゼロ）
- `""`（空の文字列）
- `[]`（空の配列）
- `{}`（空のオブジェクト）

他のすべての値は「真」と見なされます。

##### 演算子の優先順位

演算子の優先順位は文法に反映されています。最低から最高:

1. `||`（論理 OR）
2. `&&`（論理 AND）
3. `==`、`!=`、`<`、`<=`、`>`、`>=`（比較）
4. `+`、`-`（加算、減算）
5. `*`、`/`、`%`（乗算、除算、剰余）
6. `+`、`-`、`!`（単項演算子）
7. `.`、`[]`、`()`（後置演算子）
