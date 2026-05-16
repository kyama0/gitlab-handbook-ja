---
owning-stage: "~devops::verify"
title: "GitLab Steps のステップ定義"
toc_hide: true
upstream_path: "/handbook/engineering/architecture/design-documents/gitlab_steps/step-definition/"
upstream_sha: "94fe412d61c1d75e0a7a0fe4b90222476478db38"
translated_at: "2026-04-27T11:51:33Z"
translator: claude
stale: false
lastmod: "2025-08-21T11:24:20+01:00"
---

ステップはユーザーが提供できる最小の実行単位であり、`step.yml` ファイルで定義されます。

以下のステップ定義は、サポートされる最小限の構文を示しています。
この構文は[シンタクティックシュガー](steps-syntactic-sugar.md)によって拡張されます。

ステップ定義は 2 つのドキュメントで構成されています。ドキュメントを分割する目的は、
宣言と実装を区別するためです:

1. [仕様 / 宣言](#step-specification):

   ステップの入出力を説明する仕様、および将来ステップが必要とする可能性のあるその他のメタデータ（ライセンス、作成者など）を提供します。
   プログラミング言語の用語でいえば、引数と戻り値を持つ関数の宣言に相当します。

1. [実装](#step-implementation):

   ドキュメントの実装部分は、環境の設定方法やアクションの設定方法など、ステップの実行方法を説明します。

## stdout にメッセージを出力するステップの例

次のステップ例では:

1. 宣言で、ステップが `message` という名前の単一の入力を受け付けることを指定しています。
   `message` は `default:` が定義されていないため、ステップの実行時に提供が必要な必須引数です。
1. 実装セクションでは、ステップのタイプが `exec` であることを指定しています。実行時に、このステップは
   単一の引数（`message` の値）とともに `echo` コマンドを実行します。

```yaml
# .gitlab/ci/steps/exec-echo.yaml
spec:
  inputs:
    message:
---
type: exec
exec:
  command: [echo, "${{inputs.message}}"]
```

## ステップ仕様 {#step-specification}

ステップ仕様は現在、入力と出力のみを定義しています:

- 入力:
  - 必須またはオプションのどちらかを指定できます。
  - 名前を持ち、説明を追加できます。
  - 受け入れ可能なオプションのリストを含めることができます。オプションは入力に指定できる値を制限します。
  - マッチング用の正規表現を定義できます。マッチング用の正規表現は入力に指定できる値を制限します。
  - `${{ inputs.input_name }}` という構文を使用して展開できます。
- `type: exec` が使用される場合、すべての**入力値**は、実行コンテキストに関する情報を提供する `$STEP_JSON` ファイルをデコードすることでアクセスできます。
- 出力:
  - 名前を持ち、説明を追加できます。
  - `output_name=VALUE` の形式で、`$OUTPUT_FILE` という名前の特別な [dotenv](https://github.com/bkeepers/dotenv) ファイルに書き込むことで設定できます。

例:

```yaml
spec:
  inputs:
    message_with_default:
      default: "Hello World"
    message_that_is_required:
      description: "この説明はデフォルト値が指定されていないため入力が必須であることを示します"
    type_with_limited_options:
      options: [bash, powershell, detect]
    type_with_default_and_limited_options:
      default: bash
      options: [bash, powershell, detect]
      description: "オプションが指定されている場合、default: はオプションのいずれかである必要があります"
    version_with_matching_regexp:
      match: ^v\d+\.\d+$
      description: "マッチパターンは `v1.2` のような値のみを許可します"
  outputs:
    code_coverage:
      description: "ステップの一部として計算されたコードカバレッジ"
---
type: steps
steps:
  - step: ./bash-script.yaml
    inputs:
      script: "echo Code Coverage = 95.4% >> $OUTPUT_FILE"
```

## ステップ実装 {#step-implementation}

ステップ定義では、以下のタイプを使用してステップを実装できます:

- `type: exec`: バイナリコマンドを実行し、STDOUT/STDERR を使用して実行プロセスをトレースします。
- `type: steps`: ステップのシーケンスを実行します。
- `type: parallel`（計画中）: すべてのステップを並行して実行し、すべて完了するまで待機します。
- `type: grpc`（計画中）: バイナリコマンドを実行しますが、プロセス間通信に gRPC を使用します。
- `type: container`（計画中）: 選択したコンテナイメージ内でネストされた Step Runner を実行し、
  すべての実行フローを転送します。

### `exec` ステップタイプ

バイナリコマンドを実行する機能は、プリミティブ関数の 1 つです:

- 実行するコマンドは `exec:` セクションで定義されます。
- 実行結果は、デフォルトの動作が上書きされない限り、実行するコマンドの終了コードです。
- コマンドが実行されるデフォルトの作業ディレクトリは、ステップが配置されているディレクトリです。
- デフォルトではコマンドに時間制限はありませんが、`timeout:` でジョブ実行中に時間制限を設けることができます。

例として、入力なしの `exec` ステップ:

```yaml
spec:
---
type: exec
exec:
  command: [/bin/bash, ./my-script.sh]
  timeout: 30m
  workdir: /tmp
```

#### ユーザー定義コマンドを実行するステップの例

次の例は、ユーザーが指定したコマンドを実行する最小限のステップ定義です:

- 宣言セクションでは、ステップが `script` という名前の単一の入力を受け付けることを指定しています。
- `script` 入力は `default:` が定義されていないため、ステップの実行時に提供が必要な必須引数です。
- 実装セクションでは、ステップのタイプが `exec` であることを指定しています。実行時に、ステップは
  `-c` 引数でユーザーのコマンドを渡して `bash` で実行します。
- 実行するコマンドには、実行をジョブログに出力して最初の失敗で終了するよう `set -veo pipefail` が前置されます。

```yaml
# .gitlab/ci/steps/exec-script.yaml

spec:
  inputs:
    script:
      description: 'ユーザースクリプトを実行します。'
---
type: exec
exec:
  command: [/usr/bin/env, bash, -c, "set -veo pipefail; ${{inputs.script}}"]
```

### `steps` ステップタイプ

複数のステップをシーケンスで実行する機能は、プリミティブ関数の 1 つです:

- ステップのシーケンスは、ステップ参照の配列で定義されます: `steps: []`。
- 次のステップは、デフォルトの動作が上書きされない限り、前のステップが成功した場合にのみ実行されます。
- 実行結果は以下のいずれかです:
  - 最初に失敗したステップでの失敗。
  - シーケンス内のすべてのステップが成功した場合の成功。

#### 他のステップを使用するステップ

`steps` タイプは、他のステップを使用できることに大きく依存しています。
シーケンス内の各アイテムは、他の外部ステップを参照できます。例えば:

```yaml
spec:
---
type: steps
steps:
  - step: ./.gitlab/ci/steps/ruby/install.yml
    inputs:
      version: 3.1
    env:
      HTTP_TIMEOUT: 10s
  - step: gitlab.com/gitlab-org/components/bash/script@v1.0
    inputs:
      script: echo Hello World
```

`step:` の値は、ステップ定義の場所を示す文字列です:

- **ローカル**: 定義は `step: ./path/to/local/step.yml` でローカルソースから取得できます。
  パスが `./` または `../` で始まる場合、ローカル参照が使用されます。
  別のローカルステップへの解決されたパスは、常に現在のステップの場所から**相対**パスです。
  リポジトリ内でステップが配置される場所に制限はありません。
- **リモート**: 定義は `step: gitlab.com/gitlab-org/components/bash/script@v1.0` でリモートソースから取得することもできます。
  FQDN を使用すると、Step Runner は `@` の後に指定されたバージョンを使用して、
  ステップを含むリポジトリまたはアーカイブをプルします。

`inputs:` セクションはキーと値のペアのリストです。`inputs:` は[ステップ仕様](#step-specification)に対して渡され、照合される値を指定します。

`env:` セクションはキーと値のペアのリストです。`env:` は指定された環境変数を、[`type: exec`](#the-exec-step-type) や [`type: steps`](#the-steps-step-type) を含むすべての子ステップに公開します。

#### リモートステップ

`step: gitlab.com/gitlab-org/components/bash/script@v1.0` でリモートステップを使用するには、
ステップ定義を構造化された方法で保存する必要があります。ステップ定義は:

- `steps/` フォルダーに保存する必要があります。
- サブディレクトリにネストできます。
- ステップ定義が `step.yml` ファイルに保存されている場合、ディレクトリ名のみで参照できます。

例えば、`git clone https://gitlab.com/gitlab-org/components.git` でホストされているリポジトリのファイル構造:

```plaintext
├── steps/
├── ├── secret_detection.yml
|   ├── sast/
│   |   └── step.yml
│   └── dast
│       ├── java.yml
│       └── ruby.yml
```

この構造では以下のステップが公開されます:

- `step: gitlab.com/gitlab-org/components/secret_detection@v1.0`: `steps/secret_detection.yml` に保存された定義から。
- `step: gitlab.com/gitlab-org/components/sast@v1.0`: `steps/sast/step.yml` に保存された定義から。
- `step: gitlab.com/gitlab-org/components/dast/java@v1.0`: `steps/dast/java.yml` に保存された定義から。
- `step: gitlab.com/gitlab-org/components/dast/ruby@v1.0`: `steps/dast/ruby.yml` に保存された定義から。

#### 他のステップを実行するステップの例

次の例は、現在のステップにローカルな他のステップを実行する最小限のステップ定義です。

- 宣言では、ステップがそれぞれデフォルト値を持つ 2 つの入力を受け付けることを指定しています。
- 実装セクションでは、ステップのタイプが `steps` であることを指定しています。つまり、
  ステップはリストされたステップをシーケンスで実行します。トップレベルの `env:` を使用することで、
  `HTTP_TIMEOUT` 変数がすべての実行ステップで使用可能になります。

```yaml
spec:
  inputs:
    ruby_version:
      default: 3.1
    http_timeout:
      default: 10s
---
type: steps
env:
  HTTP_TIMEOUT: ${{inputs.http_timeout}}
steps:
  - step: ./.gitlab/ci/steps/exec-echo.yaml
    inputs:
      message: "Installing Ruby ${{inputs.ruby_version}}..."
  - step: ./.gitlab/ci/ruby/install.yaml
    inputs:
      version: ${{inputs.ruby_version}}
```

## コンテキストと補間

すべてのステップ定義は、ステップ定義が使用できる以下の情報を格納するコンテキストオブジェクト内で実行されます:

- `inputs`: ユーザーが指定したものやデフォルト値を含む入力のリスト。
- `outputs`: 期待される出力のリスト。
- `env`: 現在の環境変数の値。
- `job`: 現在実行中のジョブに関するメタデータ。
  - `job.project`: プロジェクトに関する情報（例: ID、名前、フルパス）。
  - `job.variables`: プロジェクト変数、事前定義変数などを含む、CI/CD 実行によって提供されるすべての [CI/CD 変数](https://docs.gitlab.com/ee/ci/variables/predefined_variables.html)。
  - `job.pipeline`: 現在実行中のパイプラインに関する情報（ID、名前、フルパスなど）。
- `step`: 現在実行中のステップに関する情報（ステップの場所、使用バージョン、[仕様](#step-specification)など）。
- `steps`（`type: exec` の場合のみ）: シーケンスで実行される各ステップに関する情報。ステップの実行結果（ステータスやトレースログなど）の情報が含まれます。
  - `steps.<name-of-the-step>.status`: ステップのステータス（`success` または `failed` など）。
  - `steps.<name-of-the-step>.outputs.<output-name>`: ステップが提供した出力を取得するため。

コンテキストオブジェクトは、`${{ <value> }}` の形式での補間をサポートするために使用されます。

補間:

- [ステップ仕様](#step-specification)セクションでは禁止されています。
  仕様は静的な設定であり、ランタイム環境に影響されるべきではありません。
- [ステップ実装](#step-implementation)セクションでは使用できます。実装は、
  ステップをどのように実行するかというランタイムの命令セットを説明します。
- 各データ構造のハッシュのすべての値に適用されます。
- 現時点では各ハッシュの*値*に対してのみ可能です。*キー*の補間は禁止されています。
- 設定が読み込まれた時点ではなく、特定のステップに制御が移る際に実行されます。これにより、出力を入力にチェーンしたり、ステップを以前のステップの実行に依存させたりすることができます。
- 表現力豊かな[式言語](expression-language.md)によってサポートされています。

例:

```yaml
# .gitlab/ci/steps/exec-echo.yaml
spec:
  inputs:
    timeout:
      default: 10s
    bash_support_version:
---
type: steps
env:
  HTTP_TIMEOUT: ${{inputs.timeout}}
  PROJECT_ID: ${{job.project.id}}
steps:
  - step: ./my/local/step/to/echo.yml
    inputs:
      message: "I'm currently building a project: ${{job.project.full_path}}"
  - step: gitlab.com/gitlab-org/components/bash/script@v${{inputs.bash_support_version}}
```

## YAML ドキュメントを説明する参照データ構造

```go
package main

type StepEnvironment map[string]string

type StepSpecInput struct {
    Default     *string   `yaml:"default"`
    Description string    `yaml:"description"`
    Options     *[]string `yaml:"options"`
    Match       *string   `yaml:"match"`
}

type StepSpecOutput struct {
}

type StepSpecInputs map[string]StepSpecInput
type StepSpecOutputs map[string]StepSpecOutput

type StepSpec struct {
    Inputs  StepSpecInput   `yaml:"inputs"`
    Outputs StepSpecOutputs `yaml:"outputs"`
}

type StepSpecDoc struct {
    Spec StepSpec `yaml:"spec"`
}

type StepType string

const StepTypeExec StepType = "exec"
const StepTypeSteps StepType = "steps"

type StepDefinition struct {
    Def   StepSpecDoc             `yaml:"-"`
    Env   StepEnvironment         `yaml:"env"`
    Steps *StepDefinitionSequence `yaml:"steps"`
    Exec  *StepDefinitionExec     `yaml:"exec"`
}

type StepDefinitionExec struct {
    Command    []string       `yaml:"command"`
    WorkingDir *string        `yaml:"working_dir"`
    Timeout    *time.Duration `yaml:"timeout"`
}

type StepDefinitionSequence []StepReference

type StepReferenceInputs map[string]string

type StepReference struct {
    Step   string              `yaml:"step"`
    Inputs StepReferenceInputs `yaml:"inputs"`
    Env    StepEnvironment     `yaml:"env"`
}
```
