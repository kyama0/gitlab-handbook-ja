---
owning-stage: "~devops::verify"
title: "Implementation details for CI Steps."
toc_hide: true
upstream_path: /handbook/engineering/architecture/design-documents/gitlab_steps/implementation/
upstream_sha: 9e852ac812142230dfe1e1db31be2862cd857cfd
translated_at: "2026-04-27T00:00:00Z"
translator: claude
stale: false
lastmod: "2024-08-23T13:02:20+00:00"
---

## Baseline Step Proto

Step Runner の内部はプロトコルバッファで定義されたベースラインステップ定義で動作します。すべての GitLab CI ステップ（および GitHub Actions などのサポートされる他のフォーマット）はベースラインステップにコンパイル/フォールドされます。`.gitlab-ci.yml` のステップ呼び出しと `step.yml` ファイルのステップ定義の両方がベースライン構造にコンパイルされます。このドキュメントの残りの部分では、「ステップ」は「ベースラインステップ」を意味します。

各ステップには URI の形式での参照 `ref` が含まれます。取得方法は URI のプロトコルによって決まります。

ステップとステップトレースには、inputs、outputs、
環境変数、環境エクスポートのフィールドがあります。
ステップがダウンロードされ `step.yml` が解析された後、
ステップ定義 `def` が追加されます。
ステップが複数の追加ステップを定義する場合、
トレースには各サブステップのサブトレースが含まれます。

```protobuf
message Step {
    string name = 1;
    string step = 2;
    map<string,string> env = 3;
    map<string,google.protobuf.Value> inputs = 4;
}

message Definition {
    DefinitionType type = 1;
    Exec exec = 2;
    repeated Step steps = 3;
    message Exec {
        repeated string command = 1;
        string work_dir = 2;
    }
}

enum DefinitionType {
    definition_type_unspecified = 0;
    exec = 1;
    steps = 2;
}

message Spec {
    Content spec = 1;
    message Content {
        map<string,Input> inputs = 1;
        message Input {
            InputType type = 1;
            google.protobuf.Value default = 2;
        }
    }
}

enum InputType {
    spec_type_unspecified = 0;
    string = 1;
    number = 2;
    bool = 3;
    struct = 4;
    list = 5;
}

message StepResult {
    Step step = 1;
    Spec spec = 2;
    Definition def = 3;
    enum Status {
        unspecified = 0;
        running = 1;
        success = 2;
        failure = 3;
    }
    Status status = 4;
    map<string,Output> outputs = 5;
    message Output {
        string key = 1;
        string value = 2;
        bool masked = 3;
    }
    map<string,string> exports = 6;
    int32 exit_code = 7;
    repeated StepResult children_step_results = 8;
}
```

## ステップキャッシュ

ステップは `location`（URL）、`version`、`hash` で構成されるキーによってローカルにキャッシュされます。これにより、まったく同じコンポーネントが複数回ダウンロードされることを防ぎます。ステップが最初に参照されるとダウンロードされ（ローカルでない場合）、キャッシュは `step.yml` と他のステップファイルを含むフォルダーへのパスを返します。同じステップが再度参照された場合、ダウンロードなしで同じフォルダーが返されます。

バージョンまたはハッシュが異なるステップが参照された場合、別のフォルダーにダウンロードされて別々にキャッシュされます。

## 実行コンテキスト

Step Runner は実行コンテキストの形式ですべてのステップにわたって状態を維持します。コンテキストには各ステップの出力、環境変数、全体的なジョブと環境のメタデータが含まれます。実行コンテキストはワークフロー作成者が提供する GitLab CI ステップの式から参照できます。

`.gitlab-ci.yml` の式で使用可能なコンテキストの例:

```yaml
steps:
  previous_step:
    outputs:
      name: "hello world"
env:
  EXAMPLE_VAR: "bar"
job:
  id: 1234
```

ステップ定義の式も実行コンテキストを参照できます。ただし、全体的なジョブと環境のメタデータ、および `step.yml` で定義された inputs のみにアクセスできます。前のステップの outputs にはアクセスできません。あるステップの出力を次のステップに渡すには、ステップの入力値に別のステップの出力を参照する式を含める必要があります。

`step.yml` の式で使用可能なコンテキストの例:

```yaml
inputs:
  name: "foo"
env:
  EXAMPLE_VAR: "bar"
job:
  id: 1234
```

例えば、これは `step.yml` ファイルでは許可されていません。ステップは相互に結合すべきでないためです。

```yaml
spec:
  inputs:
    name:
---
type: exec
exec:
  command: [echo, hello, ${{ steps.previous_step.outputs.name }}]
```

これは GitLab CI ステップの構文があるステップから別のステップにデータを渡すため許可されています:

```yaml
spec:
  inputs:
    name:
---
type: exec
exec:
  command: [echo, hello, ${{ inputs.name }}]
```

```yaml
steps:
- name: previous_step
  ... 
- name: greeting
  inputs:
    name: ${{ steps.previous_step.outputs.name }}
```

したがって、式の評価は 2 種類の異なるコンテキストで行われます。1 つは GitLab CI Step として、もう 1 つはステップ定義として。

### ステップ Inputs

ステップの inputs はいくつかの方法で与えることができます。`exec` コマンドの式に直接埋め込むことができます（上記のように）。または exec 時に設定される環境変数の式に埋め込むことができます:

```yaml
spec:
  inputs:
    name:
---
type: exec
exec:
  command: [greeting.sh]
env:
  NAME: ${{ inputs.name }}
```

### Input の型

Input の値は文字列として保存されます。ただし、それに関連付けられた型を持つことができます。サポートされている型は:

- `string`
- `bool`
- `number`
- `object`

文字列型の値は任意の文字列にできます。ブール型の値は JSON として解析した場合に `true` または `false` でなければなりません。数値型の値は JSON として解析した場合に有効な float64 でなければなりません。オブジェクト型は YAML 入力構造の JSON シリアライゼーションになります。

例えば、これらは有効な inputs です:

```yaml
steps:
- name: my_step
  inputs:
    foo: bar
    baz: true
    bam: 1
```

このステップ定義の場合:

```yaml
spec:
  inputs:
    foo:
      type: string
    baz:
      type: bool
    bam:
      type: number
---
type: exec
exec:
  command: [echo, ${{ inputs.foo }}, ${{ inputs.baz }}, ${{ inputs.bam }}]
```

出力は `bar true 1` になります。

オブジェクト型の場合、これらは有効な inputs です:

```yaml
steps:
  name: my_step
  inputs:
    foo:
      steps:
      - name: my_inner_step
        inputs:
          name: steppy
```

このステップ定義の場合:

```yaml
spec:
  inputs:
    foo:
      type: object
---
type: exec
exec:
  command: [echo, ${{ inputs.foo }}]
```

出力は `{"steps":[{"name":"my_inner_step","inputs":{"name":"steppy"}}]}` になります。

### Outputs

出力ファイルが作成され、ステップはそこに出力と環境変数のエクスポートを書き込めます。ファイルの場所は `OUTPUT_FILE` と `ENV_FILE` 環境変数で提供されます。

実行後、Step Runner は出力と環境変数ファイルを読み取り、その値でトレースを埋めます。出力は実行されたステップのコンテキスト下に保存されます。エクスポートされた環境変数は次のステップに提供される環境にマージされます。

一部のステップは `steps` タイプで、一連の GitLab CI ステップで構成できます。これらは順番にコンパイルおよび実行されます。ネストされたステップによってエクスポートされた環境変数は後続のステップで使用可能です。そして、ネストされたステップが完了すると上位ステップでも使用可能になります。例えば、ネストされたステップに入ることで新しい「スコープ」またはコンテキストオブジェクトが作成されるわけではありません。環境変数はグローバルです。

## コンテナ

コンテナでステップを実行するいくつかのアプローチを試みました。
最終的に、コンテナ内の step runner にステップを完全に委任することにしました。

検討されたオプションは以下の通りです:

### 委任（選択したオプション）

複雑な構造をステップに渡すための準備として、JSON としてシリアライズする方法があります（上記の Inputs を参照）。これにより、実際に実行するステップはコンテナで動作する step running のパラメーターにすぎません。つまり、外側のステップは `steps` 入力パラメーターを使用して `step-runner` を実行するコマンドを持つ `docker/run` ステップです。`docker/run` ステップはコンテナを実行し、コンテナから出力ファイルを抽出して外側のステップに再発行します。

この同じ技法は、VM や他の何かでステップを実行するためにも機能します。Step Runner はコンテナ化やステップの分離について何も知る必要がありません。

### 特別なコンパイル（却下されたオプション）

GitLab CI ステップで `image` キーワードを見ると、「ターゲット」ステップをダウンロードしてコンパイルします。次に `docker/run` ステップを製造し、コンパイルされた `exec` コマンドを入力として渡します。そして `docker/run` ステップをコンパイルして実行します。

ただし、これは Step Runner が `docker/run` ステップの構築方法を知る必要があります。これは Step Runner を分離方法と結合させ、VM や他の方法での分離をより複雑にします。

### ネイティブ Docker（却下されたオプション）

ベースラインステップには、Docker コンテナでステップを実行するための準備を含めることができます。例えば、ステップに `ref` の「ターゲット」フィールドと `image` フィールドを含めることができます。

ただし、これも Step Runner と Docker を結合させ、Step Runner の役割を拡大します。Docker を Step Runner が他のステップと同様に exec する外部ステップにする方が望ましいです。
