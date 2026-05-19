---
title: "CI パイプライン処理の将来"
status: proposed
creation-date: "2023-05-15"
authors: [ "@furkanayhan" ]
coach: "@ayufan"
approvers: [ "@jreporter", "@cheryl.li" ]
owning-stage: "~devops::verify"
participating-stages: []
toc_hide: true
upstream_path: /handbook/engineering/architecture/design-documents/ci_pipeline_processing/
upstream_sha: 0ee1352c26e468fa8032143d735391a793de7086
translated_at: "2026-04-26T10:00:00Z"
translator: claude
stale: false
lastmod: "2025-04-28T10:53:04-07:00"
---


{{< engineering/design-document-header >}}


## 概要

GitLab CI は GitLab の中で最も古く、最も複雑な機能の 1 つです。長年にわたり、YAML 構文は規模と複雑さが大幅に増大しました。長年にわたって構文を高度に安定させるために、主に既存の設計とパターンに対して追加的な変更を行ってきました。ユーザーベースはここ数年で指数関数的に成長しました。それに伴い、ユースケースのサポートとワークフローのカスタマイズに対するニーズも高まっています。

長年にわたって大きな価値を提供してきた一方で、構文へのさまざまな追加的な変更は、パイプライン処理ロジックにおけるいくつかの驚くべき動作も引き起こしました。一部のキーワードは多くの責務を積み重ね、キーワード間のあいまいな重複が発見され、微妙な動作の違いが時間をかけて導入されました。現在の実装と YAML 構文は新機能の実装も困難にしています。

この設計ドキュメントでは、パイプラインの動作予測可能性を向上させ、ユーザーの設定負担を軽減するための合理化されたアプローチを概説し、最終的に GitLab の製品競争力を強化します。

## 目標

### ビジネス目標

- 製品競争力の強化: 設定の複雑さを削減してパイプラインの予測可能性を改善することにより、GitLab はより直感的で堅牢な CI/CD エクスペリエンスを提供します。これにより、GitLab が新規・既存ユーザーの両方にとって、特に非常に複雑なワークフローを持つユーザーを含めて、顧客を獲得・維持するための最良の選択肢として位置づけられます。
- 開発効率の向上: キーワードの責務を明確にし、パイプラインモデルを簡素化することでコードの複雑さが減り、保守性が向上し、将来の機能強化に必要な時間とリソースが削減されます。開発チームは新機能の実装と問題への迅速な対応においてより高いアジリティを持てるようになります。

### プロダクト目標

- あいまいさを減らし、ユーザーがパイプラインの動作をより正確に制御できる、明確で一貫したパイプライン設定モデルを提供します。
- ユーザーが予期しない動作のリスクなく両方をシームレスに統合できる、DAG と STAGE の設定に対する凝集した予測可能なモデルを作成します。
- GitLab CI のコードベースを簡素化して将来の改善をより管理しやすくし、GitLab エンジニアリングチームの保守負担を削減します。
- 破壊的変更を導入せずに既存のお客様の移行パスを促進します。

### 問題の説明

- **あいまいさとキーワード役割の重複**: `when` や `allow_failure` などの一部のキーワードは重複する複数の役割を持ち、予測不可能な動作につながります。ユーザーは特に複雑なパイプラインで結果を予測することが困難です。このあいまいさはサポートケースを増加させ、代替ソリューションを求めるユーザーを苛立たせます。
  - *関連 Issue*: [#233876](https://gitlab.com/gitlab-org/gitlab/-/issues/233876), [#382179](https://gitlab.com/gitlab-org/gitlab/-/issues/382179),
    [Epic](https://gitlab.com/groups/gitlab-org/-/epics/6788#note_2202988134),
    [#17759](https://gitlab.com/gitlab-org/gitlab/-/issues/17759), [#17397](https://gitlab.com/gitlab-org/gitlab/-/issues/17397).
- **一貫性のないパイプラインモデル**: STAGE と DAG モデルは常に一貫した動作をするわけではなく、意図しない副作用なく両方のモデルを使用するパイプラインを設定することが困難です。この不一致は学習コストを増加させ、複雑なパイプラインのニーズに対する GitLab の魅力を低下させます。
  - *関連 Issue*: [#233712](https://gitlab.com/gitlab-org/gitlab/-/issues/233712), [#219371](https://gitlab.com/gitlab-org/gitlab/-/issues/219371),
    [#388866](https://gitlab.com/gitlab-org/gitlab/-/issues/388866), [#20237](https://gitlab.com/gitlab-org/gitlab/-/issues/20237).

## 非目標

現時点では破壊的変更を回避する方法については議論しません。

## 動機

問題のリストがこの設計ドキュメントの主な動機です。これらの問題のほとんどは以前にも議論されており、["CI ジョブの when キーワードの再構築"](https://gitlab.com/groups/gitlab-org/-/epics/6788) Epic でまとめられています。

### 問題 1: `when` キーワードの責務

現在、[`when`](https://docs.gitlab.com/ee/ci/yaml/index.html#when) キーワードには多くの責務があります:

> - `on_success`（デフォルト）: 以前のステージのジョブが失敗しないか、`allow_failure: true` を持つ場合のみジョブを実行します。
> - `on_failure`: 以前のステージの少なくとも 1 つのジョブが失敗した場合のみジョブを実行します。`allow_failure: true` を持つ以前のステージのジョブは常に成功とみなされます。
> - `never`: 以前のステージのジョブの状態に関わらずジョブを実行しません。[`rules`](https://docs.gitlab.com/ee/ci/yaml/index.html#rules) セクションまたは `workflow: rules` でのみ使用できます。
> - `always`: 以前のステージのジョブの状態に関わらずジョブを実行します。`workflow:rules` でも使用できます。
> - `manual`: [手動でトリガーされた場合](https://docs.gitlab.com/ee/ci/jobs/job_control.html#create-a-job-that-must-be-run-manually)のみジョブを実行します。
> - `delayed`: 指定された時間だけジョブの実行を[遅延させます](https://docs.gitlab.com/ee/ci/jobs/job_control.html#run-a-job-after-a-delay)。

これは 3 つの質問に答えています:

- 実行するための条件は何か？ => `on_success`, `on_failure`, `always`
- どのように実行するか？ => `manual`, `delayed`
- パイプラインに追加するか？ => `never`

その結果、例えば `when: on_failure` で `manual` ジョブを作成することができません。これは、失敗時にのみ利用可能で、手動で実行する必要があるジョブを作成したい場合に便利です（専用ページや専用の外部サービスへの失敗の公開など）。

### 問題 2: `allow_failure` キーワードの乱用

[`allow_failure`](https://docs.gitlab.com/ee/ci/yaml/index.html#allow_failure) キーワードによって、手動ジョブのブロッカー動作を制御しています。実際には他の責務もあります: *「ジョブが失敗したときにパイプラインが実行を継続するかどうかを決定する」*。

現在、[手動ジョブ](https://docs.gitlab.com/ee/ci/jobs/job_control.html#create-a-job-that-must-be-run-manually):

- `allow_failure: true`（デフォルト）の場合はブロッカーではありません
- `allow_failure: false` の場合はブロッカーです

その結果、例えば `allow_failure: false` でかつブロッカーでない `manual` ジョブを作成することができません。

```yaml
job1:
  stage: test
  when: manual
  allow_failure: true # default
  script: exit 0

job2:
  stage: deploy
  script: exit 0
```

![問題 2 例 1](/images/handbook/engineering/architecture/design-documents/ci_pipeline_processing/problem-2-example-1.png)

現在:

- `job1` はスキップされます。
- `job2` は `job1` が `allow_failure: true` を持つため無視されて実行されます。
- `job1` を実行/再生すると:
  - 失敗した場合、「警告付き成功」とマークされます。

#### `rules` と組み合わせた `allow_failure`

`allow_failure` は `rules` と一緒に使用するとさらに混乱します。

[ドキュメント](https://docs.gitlab.com/ee/ci/yaml/index.html#when)より:

> `when: manual` を使用すると `allow_failure` のデフォルト動作が true に変わります。ただし、`rules` と組み合わせて `when: manual` を使用すると、`allow_failure` のデフォルトは `false` になります。

[ドキュメント](https://docs.gitlab.com/ee/ci/yaml/index.html#allow_failure)より:

> `allow_failure` のデフォルト値:
>
> - 手動ジョブの場合は `true`。
> - `rules` 内で `when: manual` を使用するジョブの場合は `false`。
> - その他すべての場合は `false`。

例えば:

```yaml
job1:
  stage: build
  script: ls
  when: manual

next_job1:
  stage: test
  script: exit 0

job2:
  stage: test
  script: ls
  rules:
    - if: $ALWAYS_TRUE != "asdsad"
      when: manual

next_job2:
  stage: deploy
  script: exit 0
```

![問題 2 例 2](/images/handbook/engineering/architecture/design-documents/ci_pipeline_processing/problem-2-example-2.png)

`job1` と `job2` の動作は異なります:

- `job1` はデフォルトで `allow_failure: true` を持つためブロッカーではありません。
- `job2` は `rules: when: manual` がデフォルトで `allow_failure: true` を返さないためブロッカーです。

### 問題 3: DAG/needs での異なる動作

DAG と STAGE の主な動作の違いは、「スキップ」と「無視」の状態についてです。

**背景情報:**

- スキップ:
  - ジョブが `when: on_success` で前の状態が失敗の場合、スキップされます。
  - ジョブが `when: on_failure` で前の状態が「失敗」でない場合、スキップされます。
- 無視:
  - ジョブが `allow_failure: true` の `when: manual` の場合、無視されます。

**問題:**

「スキップ」と「無視」の状態は STAGE 処理では成功とみなされますが、DAG 処理ではみなされません。

#### 問題 3.1. 手動ジョブでの無視ステータスの処理

**例 1:**

```yaml
build:
  stage: build
  script: exit 0
  when: manual
  allow_failure: true # by default

test:
  stage: test
  script: exit 0
  needs: [build]
```

![問題 3-1 例 1](/images/handbook/engineering/architecture/design-documents/ci_pipeline_processing/problem-3-1-example-1.png)

- `build` は `allow_failure: true` の `when: manual` であるため無視（スキップ）されます。
- `test` は DAG 処理で「無視」が成功状態でないためスキップされます。

**例 2:**

```yaml
build:
  stage: build
  script: exit 0
  when: manual
  allow_failure: true # by default

test:
  stage: test
  script: exit 0
```

![問題 3-1 例 2](/images/handbook/engineering/architecture/design-documents/ci_pipeline_processing/problem-3-1-example-2.png)

- `build` は `allow_failure: true` の `when: manual` であるため無視（スキップ）されます。
- `test2` は実行されて成功します。

#### 問題 3.2. when: on_failure でのスキップステータスの処理

**例 1:**

```yaml
build_job:
  stage: build
  script: exit 1

test_job:
  stage: test
  script: exit 0

rollback_job:
  stage: deploy
  needs: [build_job, test_job]
  script: exit 0
  when: on_failure
```

![問題 3-2 例 1](/images/handbook/engineering/architecture/design-documents/ci_pipeline_processing/problem-3-2-example-1.png)

- `build_job` は実行されて失敗します。
- `test_job` はスキップされます。
- `rollback_job` は `when: on_failure` で失敗したジョブが存在するにもかかわらず、`needs` リストに「スキップ」されたジョブがあるためスキップされます。

**例 2:**

```yaml
build_job:
  stage: build
  script: exit 1

test_job:
  stage: test
  script: exit 0

rollback_job:
  stage: deploy
  script: exit 0
  when: on_failure
```

![問題 3-2 例 2](/images/handbook/engineering/architecture/design-documents/ci_pipeline_processing/problem-3-2-example-2.png)

- `build_job` は実行されて失敗します。
- `test_job` はスキップされます。
- `rollback_job` は前に失敗したジョブがあるため実行されます。

### 問題 4: スキップと無視の状態

問題 3 を解決して「スキップ」と「無視」の状態が DAG と STAGE で異ならないとした場合、それらは一般的にどのように動作すべきでしょうか？それらは成功ですか、そうでないですか？「スキップ」と「無視」は異なるべきでしょうか？いくつかの例を見てみましょう:

**例 4.1. 手動ジョブでの無視ステータス**

```yaml
build:
  stage: build
  script: exit 0
  when: manual
  allow_failure: true # by default

test:
  stage: test
  script: exit 0
```

![問題 4-1 例 1](/images/handbook/engineering/architecture/design-documents/ci_pipeline_processing/problem-4-1-example-1.png)

- `build` は「手動」状態ですが、パイプライン処理では「スキップ」（無視）とみなされます。
- `test` は「スキップ」が成功状態であるため実行されます。

あるいは:

```yaml
build1:
  stage: build
  script: exit 0
  when: manual
  allow_failure: true # by default

build2:
  stage: build
  script: exit 0

test:
  stage: test
  script: exit 0
```

![問題 4-1 例 2](/images/handbook/engineering/architecture/design-documents/ci_pipeline_processing/problem-4-1-example-2.png)

- `build1` は「手動」状態ですが、パイプライン処理では「スキップ」（無視）とみなされます。
- `build2` は実行されて成功します。
- `test` は「成功」+「スキップ」が成功状態であるため実行されます。

**例 4.2. when: on_failure でのスキップステータス**

```yaml
build:
  stage: build
  script: exit 0
  when: on_failure

test:
  stage: test
  script: exit 0
```

![問題 4-2 例 1](/images/handbook/engineering/architecture/design-documents/ci_pipeline_processing/problem-4-2-example-1.png)

- `build` は `when: on_failure` で前の状態が「失敗」でないためスキップされます。
- `test` は「スキップ」が成功状態であるため実行されます。

あるいは:

```yaml
build1:
  stage: build
  script: exit 0
  when: on_failure

build2:
  stage: build
  script: exit 0

test:
  stage: test
  script: exit 0
```

![問題 4-2 例 2](/images/handbook/engineering/architecture/design-documents/ci_pipeline_processing/problem-4-2-example-2.png)

- `build1` は `when: on_failure` で前の状態が「失敗」でないためスキップされます。
- `build2` は実行されて成功します。
- `test` は「成功」+「スキップ」が成功状態であるため実行されます。

### 問題 5: `dependencies` キーワード

[`dependencies`](https://docs.gitlab.com/ee/ci/yaml/index.html#dependencies) キーワードは[アーティファクト](https://docs.gitlab.com/ee/ci/yaml/index.html#artifacts)をフェッチするジョブのリストを定義するために使用されます。これは `needs` キーワードと責務を共有しています。さらに、同じジョブで一緒に使用することもできます。すべての可能なシナリオを議論する必要はないかもしれませんが、この例は混乱を示すのに十分です:

```yaml
test2:
  script: exit 0
  dependencies: [test1]
  needs:
    - job: test1
      artifacts: false
```

### 情報 1: キャンセルされたジョブ

キャンセルされたジョブと失敗したジョブは同じですか？多くの違いがあるため「いいえ」と言えます。ただし、1 つの類似点があります: どちらも「失敗を許可」できます。

まず違いを定義しましょう:

- キャンセルされたジョブ:
  - 完了したジョブではありません。
  - キャンセルはユーザーが要求したジョブの中断です。意図はジョブを中止するかパイプライン処理をできるだけ早く停止することです。
  - 結果は不明で、アーティファクトなどはありません。
  - 最終的な状態は「キャンセル」であるため、その後ジョブは実行できません。
    - `when: on_canceled` はありません。
    - `when: always` でも実行されません。
- 失敗したジョブ:
  - ジョブコンテンツを実行した CI システムのマシン応答です。実行が何らかの理由で失敗したことを示します。
  - これは成功と同等のシステム応答です。何かが失敗しているという事実は相対的で、テストを実行する場合など CI 実行の望ましい結果である可能性があります。
  - 結果はわかっており、[アーティファクトが存在する可能性があります](https://docs.gitlab.com/ee/ci/yaml/index.html#artifactswhen)。
  - 最終的な状態は「失敗」であるため、後続のジョブは `when` の値に応じて実行できます。
    - `when: on_failure` と `when: always` が実行されます。

**1 つの類似点は: どちらも「失敗を許可」できることです。**

```yaml
build:
  stage: build
  script:
    - sleep 10
    - exit 1
  allow_failure: true

test:
  stage: test
  script: exit 0
  when: on_success # default
```

`build` が実行されて `canceled` になると、`test` は実行されます。

![情報 1 例 1-a](/images/handbook/engineering/architecture/design-documents/ci_pipeline_processing/information-1-example-1-a.png)

`build` が実行されて `failed` になると、`test` は実行されます。

![情報 1 例 1-b](/images/handbook/engineering/architecture/design-documents/ci_pipeline_processing/information-1-example-1-b.png)

#### 一部のケースで `failed` の代わりに `canceled` を使用するアイデア

別の側面があります。例えば、ネームスペースのコンピュート分が不足した場合や制限を超えた場合など、ジョブが実行される前に `failure_reason` で頻繁にジョブをドロップします。`failed` 状態でジョブをドロップすることは、より良いフィードバックのために `failure_reason` をユーザーに通知できるため便利でした。さまざまな理由でジョブをキャンセルする場合、それを示す方法がありません。パイプラインの実行中にユーザーのコンピュートクレジットが不足したため、または別のパイプラインや他の理由によりパイプラインが自動キャンセルされたためにジョブをキャンセルします。`failure_reason` の代わりに `stop_reason` があれば、キャンセルされたジョブと失敗したジョブの両方に使用でき、`canceled` ステータスをより適切に使用できます。

### 情報 2: 空の状態

[`when` キーワード](https://docs.gitlab.com/ee/ci/yaml/index.html#when)の明確化のために[最近ドキュメントを更新しました](https://gitlab.com/gitlab-org/gitlab/-/merge_requests/117856):

> - `on_success`: 以前のステージのジョブが失敗しないか、`allow_failure: true` を持つ場合のみジョブを実行します。
> - `on_failure`: 以前のステージの少なくとも 1 つのジョブが失敗した場合のみジョブを実行します。

例えば:

```yaml
test1:
  when: on_success
  script: exit 0
  # needs: [] would lead to the same result

test2:
  when: on_failure
  script: exit 0
  # needs: [] would lead to the same result
```

![情報 2 例 1](/images/handbook/engineering/architecture/design-documents/ci_pipeline_processing/information-2-example-1.png)

- `test1` は前のステージで失敗したジョブがないため実行されます。
- `test2` は前のステージで失敗したジョブがないため実行されません。

`on_success` は「何も失敗しなかった」ことを意味し、すべてが成功したことを意味するわけではありません。同様に `on_failure` はすべてが失敗したことではなく、「何かが失敗した」ことを意味します。このセマンティクスは、パイプラインが成功することを期待し、それがハッピーパスであるという前提によります。パイプラインが失敗することを期待するのではなく、その場合はユーザーが修正するための介入が必要です。

## 技術的な期待

すべての提案または将来の決定は、以下の目標に従う必要があります:

1. `allow_failure` キーワードは**失敗した**ジョブを「警告付き成功」としてマークすることのみを担当しなければなりません。
    - 理由: 手動ジョブがブロッカーかどうかを決定するなど、他の責務を持つべきではありません。
    - 方法: 手動ジョブのブロッカー動作を制御するための別のキーワードが導入されます。
1. `allow_failure` を使用しても、**キャンセルされた**ジョブは「警告付き成功」としてマークされてはなりません。
    - 理由: 「キャンセル」は「失敗」とは異なる状態です。
    - 方法: `allow_failure: true` でキャンセルされたジョブは「警告付き成功」としてマークされません。
1. `when` キーワードは「実行するための条件は何か？」という質問にのみ答えなければなりません。そして、ジョブを実行するかどうかを決定する唯一の情報源でなければなりません。
1. `when` キーワードはジョブをパイプラインに追加するかどうかを制御してはなりません。
    - 理由: それはその責務ではありません。
    - 方法: ジョブをパイプラインに追加するかどうかを制御するための別のキーワードが導入されます。
1. 「スキップ」と「無視」の状態は再考されなければなりません。
    - TODO: この点についてさらに議論する必要があります。
1. ジョブが「自動」「手動」または「遅延」ジョブであるかを指定するための新しいキーワード構造を導入しなければなりません。
    - 理由: `when` キーワードの責務ではありません。
    - 方法: ジョブの動作を制御するための新しいキーワードが導入されます。
1. `needs` キーワードはジョブの順序のみを制御しなければなりません。ジョブの動作を制御したり、ジョブを実行するかどうかを決定するために使用してはなりません。DAG と STAGE の動作は同じでなければなりません。
    - 理由: 異なる動作につながり、ユーザーを混乱させます。
    - 方法: `needs` キーワードはステージと同様に前のジョブのみを定義します。
1. `needs` と `dependencies` キーワードを同じジョブで一緒に使用してはなりません。
    - 理由: 混乱を招きます。
    - 方法: `needs` と `dependencies` キーワードは相互に排他的になります。

## 提案

N/A

## 設計と実装の詳細

提案が承認された後に決定されます。
この段階では破壊的変更、実装の詳細、移行パスが議論されます。

## フィードバック

[フィードバック Issue](https://gitlab.com/gitlab-org/gitlab/-/issues/420616) でフィードバックをお寄せください。
