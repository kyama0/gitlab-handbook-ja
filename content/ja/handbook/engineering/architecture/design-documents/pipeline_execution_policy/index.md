---
title: "パイプライン実行ポリシー"
status: ongoing
creation-date: "2023-11-23"
authors: [ "@Andysoiron", "@g.hickman", "@mcavoj" ]
coach: "@fabiopitino"
approvers: [ "@g.hickman" ]
owning-stage: "~devops::govern"
participating-stages: ["~devops::verify"]
toc_hide: true
upstream_path: /handbook/engineering/architecture/design-documents/pipeline_execution_policy/
upstream_sha: 4c7d94ca4f485376c886b7c2b9575091c8b7d3cf
translated_at: "2026-04-27T06:00:00Z"
translator: claude
stale: false
---


<div class="my-3 border-l-4 border-blue-500 bg-blue-50 px-4 py-3 rounded-r text-sm text-blue-800">
このページには今後予定されている製品・機能・機能性に関する情報が含まれています。ここに示す情報は参考目的のみです。購入・計画の決定にこの情報を使用しないでください。製品・機能・機能性の開発、リリース、タイミングは変更または延期される可能性があり、GitLab Inc. の独自の判断に委ねられています。
</div>

<div class="overflow-x-auto my-4">
<table class="w-full text-sm border-collapse">
<thead>
<tr class="bg-gray-100 text-left">
<th class="px-3 py-2 border border-gray-300">Status</th>
<th class="px-3 py-2 border border-gray-300">Authors</th>
<th class="px-3 py-2 border border-gray-300">Coach</th>
<th class="px-3 py-2 border border-gray-300">DRIs</th>
<th class="px-3 py-2 border border-gray-300">Owning Stage</th>
<th class="px-3 py-2 border border-gray-300">Created</th>
</tr>
</thead>
<tbody>
<tr>
<td class="px-3 py-2 border border-gray-300"><span class="inline-block rounded px-2 py-0.5 text-xs font-medium bg-gray-100 text-gray-700">ongoing</span></td>
<td class="px-3 py-2 border border-gray-300"><a href="https://gitlab.com/Andysoiron" class="text-blue-600 hover:underline">@Andysoiron</a>, <a href="https://gitlab.com/g.hickman" class="text-blue-600 hover:underline">@g.hickman</a>, <a href="https://gitlab.com/mcavoj" class="text-blue-600 hover:underline">@mcavoj</a></td>
<td class="px-3 py-2 border border-gray-300"><a href="https://gitlab.com/fabiopitino" class="text-blue-600 hover:underline">@fabiopitino</a></td>
<td class="px-3 py-2 border border-gray-300"><a href="https://gitlab.com/g.hickman" class="text-blue-600 hover:underline">@g.hickman</a></td>
<td class="px-3 py-2 border border-gray-300"><span class="inline-block rounded px-2 py-0.5 text-xs font-medium bg-gray-100 text-gray-700">~devops::govern</span></td>
<td class="px-3 py-2 border border-gray-300">2023-11-23</td>
</tr>
</tbody>
</table>
</div>


このドキュメントは作成中であり、プロジェクトパイプラインの一部として CI ジョブの実行を強制し、セキュリティポリシーとコンプライアンスフレームワークを使用してそれらのジョブをプロジェクトにリンク/スコープするためのビジョンの現在の状態を表しています。

## 概要

ユーザーはプロジェクトパイプラインの一部としてジョブの実行を強制するための単一のソリューションを必要としています。ユーザーは[コンプライアンスフレームワークパイプライン](https://docs.gitlab.com/ee/user/group/compliance_pipelines.html)の柔軟性と[スキャン実行ポリシー](https://docs.gitlab.com/ee/user/application_security/policies/scan_execution_policies.html#scan-execution-policies-schema)のシンプルさを組み合わせる方法を望んでいます。

パイプライン実行ポリシーを使用してポリシールールを定義することで対処できる多くのケースがありますが、これまでに聞いた最も一般的なケースをいくつか示します:

1. `include` ステートメントを使用して CI テンプレートを含め、`.latest` セキュリティスキャナーテンプレートなどのテンプレートを取り込みたい。[CI テンプレート](https://gitlab.com/gitlab-org/gitlab/-/tree/master/lib/gitlab/ci/templates)を参照。
1. サードパーティのスキャナーの実行を強制し、追加のセキュリティ結果をキャプチャして、脆弱性レポートで GitLab スキャナーの結果と並べて管理したい。
1. コンプライアンスのためのカスタムスクリプト/チェックを強制したい。
1. GitLab に保存されたコードを分析するためのスキャナーを強制したいが、パイプラインを継続するためにサードパーティの CI ツールを呼び出したい。これは GitLab に移行しているユーザーにとって一般的なケースかもしれないが、一部のチームはその間もサードパーティの CI ツールを使用し続ける可能性がある。
1. スキャナーからの結果をサードパーティのツールにエクスポートしたい。
1. 外部ツールでの UAT が完了するまで MR をブロックし（品質ゲート）、本番コードへの変更の品質を確保したい。
1. プロジェクトのユーザーに、どのセキュリティポリシーが有効になっているか、特定のスキャン結果によってパイプラインがブロックされているかどうかを素早く伝えるカスタムプロジェクトバッジを標準化し、セキュリティチームと開発チームがプロジェクトのセキュリティ状態を簡単に把握できるようにしたい。
1. プロジェクトにカスタムバッジを作成してセキュリティグレードを伝え、チームメンバーがスコアを高く保つよう動機付けしたい。

## 動機

### ゴール

1. コンプライアンスパイプラインの適切な代替品を提供し、16.9 でのコンプライアンスパイプラインの廃止と 17.0 での削除を目標とする。
1. 既知のコンプライアンスパイプラインの Issue と、組織全体でスキャン実行をグローバルに強制する際の顧客の痛みのポイントを解決するように機能を強化できるアーキテクチャを設定する。

既知のコンプライアンスパイプラインの Issue:

- [外部設定ファイルまたは設定ファイルなしのプロジェクトをサポートできない](https://gitlab.com/gitlab-org/gitlab/-/issues/416104#1-unable-to-support-a-project-with-an-external-config-file-or-no-config-file)
- [コンプライアンス設定の CI 変数が上書きされる可能性がある](https://gitlab.com/gitlab-org/gitlab/-/issues/416104#2-ci-variables-in-the-compliance-config-can-be-overwritten)
- [コンプライアンスジョブがターゲットリポジトリによって上書きされる可能性がある](https://gitlab.com/gitlab-org/gitlab/-/issues/416104#3-compliance-jobs-can-be-overwritten-by-target-repository)
- [トップレベルのグローバルキーワードとの競合](https://gitlab.com/gitlab-org/gitlab/-/issues/416104#4-conflict-with-top-level-global-keywords-eg-stages)
- [コンプライアンスジョブが常に実行されることを保証しなければならない](https://gitlab.com/gitlab-org/gitlab/-/issues/416104#5-must-ensure-compliance-jobs-are-always-run)
- [手動でパイプラインを開始する際に事前入力された変数が表示されない](https://gitlab.com/gitlab-org/gitlab/-/issues/416104#6-prefilled-variables-are-not-shown-when-manually-starting-pipeline)
- [スキャン実行ポリシーとコンプライアンスフレームワークを統合する必要がある](https://gitlab.com/gitlab-org/gitlab/-/issues/416104#7-need-to-unify-scan-execution-policies-and-compliance-framework)
- [コンプライアンスフレームワークが見つからないまたはアクセス拒否](https://gitlab.com/gitlab-org/gitlab/-/issues/404707)
- [GitLab がプロジェクトのパイプライン設定のみを確認するために、特定の状況でコンプライアンスパイプラインジョブが実行されない](https://gitlab.com/gitlab-org/gitlab/-/issues/412279)
- [.pre/.post ジョブを空のパイプラインでオプションとして許可する](https://gitlab.com/gitlab-org/gitlab/-/issues/420339)
- [コンプライアンスパイプラインが include ファイルから設定された値を一定に保つことを許可する](https://gitlab.com/gitlab-org/gitlab/-/issues/365381)
- [CF ラベル付きプロジェクトのフォークから発生した MR でコンプライアンスフレームワークパイプラインを実行する](https://gitlab.com/gitlab-org/gitlab/-/issues/374099)
- [コンプライアンスパイプラインの設定が merged_YAML に公開されない](https://gitlab.com/gitlab-org/gitlab/-/issues/367247)

## 提案

現在、セキュリティポリシーは複数のスキャンアクションを含めることができます。各スキャンアクションはプロジェクト CI パイプラインに注入される CI ジョブになります。新しいポリシータイプであるパイプライン実行ポリシーにより、ユーザーはプロジェクト CI パイプラインに注入されるカスタム CI ジョブも定義できます。[コンプライアンスフレームワーク](https://docs.gitlab.com/ee/user/group/compliance_frameworks.html)が必要とする同じ柔軟性を提供するために、セキュリティポリシーアプローチを一般化したいと考えています。2 つの機能の組み合わせにより、セキュリティポリシーをコンプライアンスフレームワークにスコープし、カスタム CI ジョブの存在を強制できます。

スキャン実行ポリシーと同様に、パイプライン実行ポリシーのジョブはプロジェクトに適用されたコンプライアンスフレームワークに[スコープ](https://docs.gitlab.com/ee/user/application_security/policies/scan_execution_policies.html#policy_scope-scope-type)できます。既存の[ワークフロールール](https://docs.gitlab.com/ee/ci/yaml/workflow.html)を使用してポリシージョブが強制されるタイミングを制御できるようにする必要があります。ユーザーは、パイプラインのニーズに応じてジョブを配置するために、事前定義されたセキュリティポリシーステージの 1 つを活用できます。コンプライアンスパイプラインから新機能への移行はできるだけスムーズにする必要があります。

## 設計と実装の詳細

### パイプライン実行ポリシー MVC

パイプライン実行ポリシー MVC はコンプライアンスパイプラインからの移行を可能にします。

- セキュリティポリシーにカスタム CI YAML を追加できるようにする必要があります。シンプルさのために、カスタム CI YAML は `.gitlab-ci.yml` ファイルと同じ設定をサポートし、同じスキーマに従う必要があります。パイプラインが開始されると、カスタム CI はプロジェクト CI とマージされます。
- セキュリティポリシースキーマは、プロジェクトとファイルパスを追加することで、カスタム CI を外部ファイルで定義できるようにする必要があります。
- パイプライン実行ポリシーは、ターゲットプロジェクトのパイプラインにマージされる孤立したパイプラインでジョブを作成することで、カスタム CI YAML を実行する必要があります。
- 組織はさまざまなユースケースのためにグローバルに強制するために異なる CI 設定/テンプレートを必要とする場合があります。一般的に、一部のプロジェクトはコードに集中し、デプロイメントを実行しません。これらのプロジェクトは、ビルドとデプロイメントステップを実行する他のプロジェクトと比べて異なるセキュリティ/コンプライアンス要件を持つ可能性があります。パイプライン実行ポリシーはこのニーズをサポートできなければならず、プロジェクトのタイプに応じた変数設定が可能でなければなりません。したがって、レベルごとに複数のパイプライン実行ポリシーをサポートする必要があるかもしれません（例：グループレベルで複数のポリシー）。ただし、ポリシースコープを活用して、1 つのプロジェクトに対してレベルごとに強制される設定の数を制限できるかもしれません。
- パイプライン実行ポリシーの制限を考慮する際の別のユースケースは、階層的な強制です。ポリシーはグローバルに強制される場合があります（1 つのトップレベルグループで定義され、他のすべてのグループ/プロジェクトを強制）。ポリシーはビジネスの階層の 1 つ低いレベルでも強制される場合があります（個々のビジネスユニットなど）。各 BU は満たすべき固有の要件を持つ場合があります。衝突の機会を制限したいですが、トップダウンの強制のニーズを満たすソリューションを特定できるかもしれません。一部の顧客はツリー/階層の下に強制を追加/拡張するメカニズムを模索しています。また、より低い制限から始め、ツリーの上位にあるトップレベルグループとサブグループがプロジェクトやより低い階層のサブグループよりも優先されるようにすることもできます。
- 少なくとも、パイプライン実行ポリシーのジョブは[既存の CI 変数の優先順位](https://docs.gitlab.com/ee/ci/variables/index.html#cicd-variable-precedence)に従う必要があります。理想的には、パイプライン実行ポリシーのジョブは、ポリシーが属するグループまたはプロジェクトで定義されたもの以外のユーザー定義変数を取得すべきではありません。
- ジョブはパイプライン内でユーザーに見える形で実行され、プロジェクトジョブがポリシージョブを上書きできないようにする必要があります。現在のスキャン実行ポリシーでは、同じ名前のジョブが存在する場合にジョブ名をインクリメントするためにインデックスパターン（-0, -1, -2, ...）を使用しています。これにより、どのジョブがセキュリティポリシーによって実行されているかが若干分かりやすくなります。パイプライン実行ポリシーのジョブにも同じパターンを使用する必要があります。
- ポリシーから来るジョブは、例えばビルドメタデータを使用して、データベースでそのようなものとしてマークされ、区別できるようにする必要があります。これにより、runner によるジョブと対応する変数の異なる処理が可能になります。
- ユーザーはジョブが実行するステージを定義できるようにする必要があり、パイプライン実行ポリシーには優先順位を処理する方法が必要です。たとえば、セキュリティ/コンプライアンスチームはビルドステージの後に一般的に実行されるジョブを強制したい場合があります。ステージとジョブは、パイプライン実行ポリシーによって強制されると開発チームによって定義されたものと干渉してはなりません。
- パイプライン実行ポリシーは、既存の CI 設定を含まないプロジェクトでジョブが強制されることを許可する必要があります。
- 複雑さを軽減するために、パイプライン実行ポリシーの `content` は[プロジェクトからの単一の CI ファイル](https://docs.gitlab.com/ee/ci/yaml/index.html#includeproject)の包含のみにすることができます。

MVC 構文例:

```yaml
type: pipeline_execution_policy
name: PEP example
description: 'PEP example'
enabled: true
pipeline_config_strategy: inject_ci
content:
  include:
    - project: namespace-path/project-path
      file: policy_ci.yml
      ref: main
```

### ステージ管理戦略

ユーザーがプロジェクトパイプラインの特定の CI ステージの前後にジョブを実行できるようにしたいと考えています。これを実現するために、パイプライン実行ポリシーのみが使用でき、プロジェクトパイプラインに注入される 2 つの予約済みステージを導入したいと思います:

1. `.pipeline-policy-pre` ステージは `.pre` ステージの前、パイプラインの最初に実行されます。
1. `.pipeline-policy-post` ステージは `.post` ステージの後、パイプラインの最後に実行されます。

これらのステージのいずれかでジョブを注入することは、常に機能することが保証されています。実行ポリシーのジョブは、標準のステージ（`build`、`test`、`deploy`）またはユーザー宣言のステージに割り当てることもできます。ただし、この場合、ジョブはプロジェクトパイプラインの設定によっては無視される可能性があります。

このアプローチを実験フェーズの一部として試みます。また、試みたいかもしれない以下の戦略についても議論しました:

#### 1. セキュリティポリシーステージの順序を優先させる

パイプライン実行ポリシーは `stages` キーワードを使用してステージを再定義することでステージを変更できます。パイプライン実行ポリシーで定義されたステージの順序は、プロジェクト CI で定義された順序よりも優先されます。

パイプライン実行ポリシーが `test` ステージの後にジョブを注入したい場合、ステージを次のように再定義できます:

```yaml
stages:
  - test
  - policy_after_test
```

このソリューションはユーザーにカスタムステージを定義する柔軟性を提供します。欠点は、ステージの順序に単一の情報源がなくなることです。プロジェクト CI がパイプライン実行ポリシーで定義されていないカスタムステージを定義している場合、パイプライン実行ポリシーのステージの前後どちらで実行すべきかがわかりません。

#### 2. `pre` と `post` キーワードを導入する

セキュリティポリシーは `pre_[stage_name]` と `post_[stage_name]` ステージを使用して、特定のステージの前後にジョブを注入できます。たとえば、`pre_test` は `test` ステージの前に実行されます。この方法では、セキュリティポリシーがプロジェクト CI を混乱させる可能性が低くなります。欠点は、ポリシー作成者がプロジェクトで使用されるステージを把握している必要があり、たとえば `test` ステージを `test_2` に改名することでポリシーステージをスキップできてしまうことです。

#### 3. 高度なステージルールを導入する

パイプライン実行ポリシーステージ用の高度な API により、他のステージの存在に応じてステージを注入できます。スキーマ例:

```yaml
compliance_stages:
- stage_name: qa
  after:
  - release
  if:
  - stage_exist: deploy
```

これにより柔軟性が提供され、ユーザーは異なるプロジェクト CI ステージのセットアップに対する動作を定義できます。

#### 4. デフォルトステージですべてのジョブを実行する

パイプライン実行ポリシーで定義されたジョブは `pipeline-policy` ステージで実行されます。このステージは `test` ステージの後に注入されます。`test` ステージが存在しない場合は、`build` ステージの後に注入されます。`build` ステージが存在しない場合は、パイプラインの先頭に注入されます。

### パイプライン設定戦略

パイプライン実行ポリシーでのパイプライン設定を処理するための 2 つの戦略があります:

1. `inject_ci`: この戦略により、プロジェクトの元の CI 設定を完全に置き換えることなく、既存のプロジェクトパイプラインにカスタム CI 設定を追加できます。新しいセキュリティスキャン、コンプライアンスチェック、またはカスタムスクリプトの追加など、追加のステップで現在のパイプラインを強化または拡張することを目標とする場合に適しています。
1. `override_project_ci`: この戦略は、プロジェクトの既存の CI 設定をパイプライン実行ポリシーによって定義された新しい設定で完全に置き換えます。組織全体の CI/CD 標準やコンプライアンス要件を強制するなど、パイプライン全体を標準化または置き換える必要がある場合に最適です。複数のポリシーがプロジェクトに適用されている場合、1 つのポリシーが `override_project_ci` 戦略を使用すると、この戦略は他のすべてのポリシー戦略よりも優先されます。

### ポリシーパイプラインのコンテキスト

プロジェクトにアタッチされた各ポリシーパイプラインについて、ジョブを構築する際にメインパイプラインと同じコンテキストを使用します。これには、パイプラインソース、コミット SHA、マージリクエスト/パイプラインスケジューラーのコンテキストなどが含まれます。これにより、ポリシーパイプラインがメインパイプラインと同じように動作することが保証されます。ポリシー作成者は、ポリシーパイプラインが独立したパイプラインではなく、プロジェクトパイプラインにマージされ、メインパイプラインと同じルールを使用するジョブのセットであることを知ることができます。

たとえば、メインパイプラインのソースは、ポリシーパイプラインがこれらの設定を持てるように、それらを構築する際にポリシーに渡されます:

```yaml
workflow:
  rules:
    - if: $CI_PIPELINE_SOURCE == 'schedule'
    - if: $CI_PIPELINE_SOURCE == 'push'
    - if: $CI_PIPELINE_SOURCE == 'merge_request_event'
```

#### ポリシー強制から除外されるパイプライン

一部のパイプラインソースはポリシー強制から除外されており、パイプライン実行ポリシーはこれらのソースを持つパイプラインに注入されません。これらのパイプラインソースは["dangling"（ぶら下がり）](https://gitlab.com/gitlab-org/gitlab/-/blob/fa7bb30a04dd2eab582ff209e119ebfa1fcb9228/app/models/concerns/enums/ci/pipeline.rb#L56-69)と呼ばれます: `webide`、`parent_pipeline`、`ondemand_dast_scan`、`ondemand_dast_validation`、`security_orchestration_policy`、`container_registry_push`。

これらはポリシー強制からスキップしても安全です。なぜなら、コンテンツの観点から安全と見なされる（オンデマンド DAST スキャン、SEP パイプラインなど）か、上流でポリシーを強制しているか（例：子パイプラインの代わりに親パイプラインで）のどちらかだからです。

## リンク

- [パイプライン実行ポリシータイプ](https://gitlab.com/groups/gitlab-org/-/epics/13266#top)
- [スキャン実行ポリシータイプのパイプライン実行アクション（カスタム CI YAML サポート）](https://gitlab.com/groups/gitlab-org/-/epics/7312)
