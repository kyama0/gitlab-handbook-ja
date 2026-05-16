---
title: "Step Runner for executing GitLab Steps"
status: proposed
creation-date: "2023-08-23"
authors: [ "@ayufan", "@josephburnett" ]
coach: "@grzesiek"
approvers: [ "@dhershkovitch", "@DarrenEastman", "@cheryl.li" ]
owning-stage: "~devops::verify"
participating-stages: [ ]
toc_hide: true
upstream_path: /handbook/engineering/architecture/design-documents/gitlab_steps/
upstream_sha: 9e852ac812142230dfe1e1db31be2862cd857cfd
translated_at: "2026-04-27T00:00:00Z"
translator: claude
stale: false
lastmod: "2025-04-28T10:53:04-07:00"
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
<td class="px-3 py-2 border border-gray-300"><span class="inline-block rounded px-2 py-0.5 text-xs font-medium bg-gray-100 text-gray-700">proposed</span></td>
<td class="px-3 py-2 border border-gray-300"><a href="https://gitlab.com/ayufan" class="text-blue-600 hover:underline">@ayufan</a>, <a href="https://gitlab.com/josephburnett" class="text-blue-600 hover:underline">@josephburnett</a></td>
<td class="px-3 py-2 border border-gray-300"><a href="https://gitlab.com/grzesiek" class="text-blue-600 hover:underline">@grzesiek</a></td>
<td class="px-3 py-2 border border-gray-300"><a href="https://gitlab.com/dhershkovitch" class="text-blue-600 hover:underline">@dhershkovitch</a>, <a href="https://gitlab.com/DarrenEastman" class="text-blue-600 hover:underline">@DarrenEastman</a>, <a href="https://gitlab.com/cheryl.li" class="text-blue-600 hover:underline">@cheryl.li</a></td>
<td class="px-3 py-2 border border-gray-300"><span class="inline-block rounded px-2 py-0.5 text-xs font-medium bg-gray-100 text-gray-700">~devops::verify</span></td>
<td class="px-3 py-2 border border-gray-300">2023-08-23</td>
</tr>
</tbody>
</table>
</div>


## 概要

このドキュメントは、Step Runner と呼ばれる新しいコンポーネントのアーキテクチャ、それが使用する GitLab Steps 構文、
および GitHub Actions のサポートをどのように実現するかについて説明します。

競合する CI 製品の [drone.io](https://www.drone.io/)、
[GitHub Actions](https://docs.github.com/en/actions/sharing-automations)
は、ステップまたはアクションの形式でコンポーザブルな CI ジョブ実行を提供しています。

これらの使用法と [GitLab Runner Plugins](https://gitlab.com/gitlab-org/gitlab/-/issues/15067) に関する私たちの事前評価は、
CI ジョブ実行を定義するより良い方法の必要性を示しています。

## 用語集

- GitLab Steps: 単一ジョブ実行コンテキスト内で再利用可能なコンポーネントを定義および使用する GitLab CI 機能の名称。
- Step Runner: GitHub Actions との互換性を提供する GitLab Steps の RFC 実装。
- GitHub Actions: GitLab Steps と同様に、GitHub で使用される再利用可能な実行コンポーネント。
- CI Catalog: 共有コンポーネントを発見して使用するためのパブリックまたはプライベートなコンポーネントカタログ。
- GitLab Rails: GitLab.com またはオンプレミスインストールで動作するパイプライン実行を担当するメインアプリケーション。

## 動機

現在の `.gitlab-ci.yml` ファイルはある程度柔軟ですが、複雑なワークフローをサポートしようとするとすぐに非常に複雑になります。この複雑さは、繰り返しのパターン、目的固有の構文、または実行する複雑なコマンドシーケンスとして表れます。

これは、CI ジョブ実行に対する詳細な調整や特別な動作を必要とするより複雑なワークフローで `.gitlab-ci.yml` ファイルが柔軟でないため、特に困難です。Git クローン処理方法、アーティファクトのダウンロード時期、シェルスクリプトの実行方法に関するその規範的なアプローチは、「標準的な」でないパイプラインや新機能が要求される場合に、システムの回避策が必要になることが多いです。

これは、[`secure files`](https://docs.gitlab.com/ee/ci/secure_files/index.html) や `release:` キーワードのような特定の機能をサポートするための新しい構文を `.gitlab-ci.yml` ファイルに追加しようとする場合に特に困難です。これらの特別な機能を構文レベルで追加すると、より複雑な設定になり、メンテナンスが困難になり、要件が変更された場合の技術的負債の処理がより複雑になります。

`drone.io` と `GitHub Actions` の例は、多くのワークフローが CI 構文の一部である必要がないことを示しています。代わりに、CI 設定で汎用的な方法で設定され、後で入力とパラメーターに従ってダウンロードおよび実行される再利用可能なコンポーネントの形式で提供できます。

GitLab Steps は、競合他社に類似したモデルに従い、ある程度互換性を維持することで、この製品ギャップを埋めることを目的としています。GitLab Steps は、特定の機能を処理するためのすべての目的固有の構文を置き換えることを目的としています。`.gitlab-ci.yml` の外部で構築され、バージョン管理され、必要に応じてリクエストされる再利用可能なコンポーネントを提供および使用することで、顧客にはるかに多くの柔軟性を与え、カタログをより迅速にイテレーションできるようになります。

CI ジョブ実行の一部である再利用可能なコンポーネントは、GitLab.com でパブリックにホストされているリポジトリ、オンプレミスのステップリポジトリ、またはローカルプロジェクトから使用できます。

各 CI ジョブは実行する `steps:` のリストを定義し、GitLab Steps または GitHub Actions を参照します。これらのステップはターゲット環境のコンテキストで step runner によって直接実行されます。GitLab Runner は GitLab.com（またはオンプレミスインストール）と Step Runner の間の接続を担当します。

### 目標

GitLab Steps:

- GitLab Steps は GitLab 固有の Steps 実装のための構文と構造を定義します。
- GitLab Steps は CI Catalog で公開されます。
- GitLab Steps はインスタンス間で使用できます（フェデレーション）。
- GitLab Steps は `inputs` と `outputs` を定義します。
- GitLab Steps は、期待されるパーミッションとともに機密情報を明示的にリクエストする必要があります。
  例: シークレット、変数、トークン。

GitLab Inc. が管理する GitLab Steps リポジトリ:

- GitLab Inc. は、現在のすべての目的固有の構文（`artifacts:`、`cache:`、`release:` など）のドロップイン置換となる GitLab Steps のリポジトリを提供します。
- GitLab Inc. は、さまざまなシェル（`bash`、`powershell`）をサポートする `shell` ステップを実行するための汎用ステップを提供します。
- 目的固有の構文の使用は、最終的にはステップを優先して非推奨になる可能性があります。

Step Runner:

- Step Runner は `https://gitlab.com/gitlab-org` の別プロジェクトにホストされています。
- Step Runner はほとんどの GitHub Actions を実行するために使用できます。
- Step Runner はターゲット環境でプロセスとして実行されます。
- Step Runner はユーザーがローカルマシンで、ローカルに保存された `.gitlab-ci.yml` の特定の CI ジョブのステップを実行するために使用できます。
- Step Runner は GitLab Runner の外部コンポーネントであり、GitLab Runner が環境を準備し、ペイロードを構築して Step Runner に実行を渡します。
- Step Runner は `clone`、`artifacts`、`caches`、`script`、`after_script`、およびさまざまなシェル（`bash`、`powershell`）のためのすべてのカスタム処理を GitLab Runner で置き換えます。
- Step Runner は GitLab Steps と GitHub Actions の解析とコンパイルを担当します。
- Step Runner は GitLab Steps と GitHub Actions が必要とするリポジトリのダウンロードと管理を担当します。
- Step Runner は個々の実行ステップの実行フローを制御および監視します。
- Step Runner はコマンドラインインターフェース（CLI）から実行可能である必要があります。つまり、設定ファイル、環境ファイルで設定するか、`.gitlab-ci.yml` を読み取れる必要があります。
- Step Runner は設定を実行したりトレースを取得したりするための gRPC またはその他のプログラム可能なインターフェースを公開できます。

ステップの実行:

- 各ステップは、公開済みまたはローカルに定義された GitLab Step、または GitHub Action の 1 つによって定義されます。
- 各ステップは、そのステップで定義された条件に応じて実行されます。
- 各ステップは最小限の情報が公開された状態で実行されます。ステップに公開される情報はステップによって明示的にリクエストされます。例えば、ステップによって明示的にリクエストされた環境変数のみがステップに渡されます。
- 各ステップは信頼されていないと見なされます。つまり、一部のステップが信頼されていても、システムが信頼を保証できないため、CI ジョブ全体が信頼されていないと見なされます。
- 各ステップはその実行を前提条件、使用されたバージョン、および生成された出力の形式で説明します。これは再現可能なビルドを作成する目的でステップの実行に署名できるようにするためです。

後方互換性:

- 現在実行可能なすべての構文（例: `before_script:`、`script:`、`artifacts:`、`cache:` など）は
  GitLab（Rails）によって変換可能である必要があります。

## 非目標

TBD

## 提案

Step Runner は `https://gitlab.com/gitlab-org/step-runner` に存在する新しい Go バイナリになります。
標準の proto 形式にコンパイルされる多くの入力フォーマットを受け付けます。
出力はビルドのデバッグと再現のための詳細を含む標準の proto トレースになります。

### 機能

- ステップの読み取り
  - 環境変数から
  - `.gitlab-ci.yml` ファイルから
  - step-runner の gRPC サーバーから
  - コマンドライン JSON 入力から
- GitLab Steps と GitHub Actions をベースラインステップ定義にコンパイル
  - 明示的な inputs と outputs
  - 明示的な環境とエクスポート
  - ベースラインステップは `exec` タイプまたはより多くのステップになれる
- 以下からステップをダウンロードして実行:
  - Git リポジトリ
  - zip ファイル
  - ローカルで提供されたもの
- ジョブはさまざまな種類のステップで構成できる
  - ステップは異なるソースから来て、異なる方法で実行できる
  - ステップは環境エクスポートと前のステップの出力にアクセスできる
- 実行のステップバイステップトレースを生成
  - 最終的な inputs と outputs を含む
  - 最終的な環境とエクスポートを含む
  - 各ステップのログを含む
  - 各ステップは使用された正確なランタイムとコンポーネント（ハッシュ）を指定する
  - （オプション）機密な inputs、outputs、環境とエクスポートのマスキング
- トレースの再生
  - トレースからの正確なランタイムとコンポーネントを再利用
  - ビルドが決定論的であれば、トレースの出力は同じトレースになる

### 呼び出しの例

#### コマンドライン

- `STEPS=$(cat steps.yml) step-runner ci`
- `step-runner local .gitlab-ci.yml --format gitlab-ci --job-name hello-world --output-file trace.json`
- `step-runner replay trace.json`
- `step-runner ci --port 8080`

#### GitLab CI

```yaml
hello-world:
  image: registry.gitlab.com/gitlab-org/step-runner
  variables:
    STEPS: |
      - step: gitlab.com/josephburnett/component-hello-steppy@master
        inputs:
          greeting: "hello ${{ env.name }}"
        env:
          name: world
  script:
    - /step-runner ci
  artifacts:
    paths:
      - trace.json
```

### 基本的なコンパイルと実行プロセス

GitLab CI で表現されたステップはベースラインステップ定義にコンパイルされます。
参照されたステップはロードされてコンパイルされ、`exec` コマンドを生成するか、
再帰的にコンパイルされる追加の GitLab CI ステップのリストを生成します。
各ステップはコンパイル直後に実行されるため、その出力は後続のコンパイルで利用可能になります。

![diagram of data during compilation](/images/engineering/architecture/design-documents/gitlab_steps/data.drawio.png)

ステップはファイルを通じて outputs とエクスポートを返し、各ステップ後に Step Runner によって収集されます。
最終的に各ステップのコンパイルされたすべての inputs と outputs がステップトレースに収集されます。

![sequenced diagram of step runner compilation and execution](/images/engineering/architecture/design-documents/gitlab_steps/step-runner-sequence.drawio.png)

### GitLab Steps の定義と構文

- [ステップ定義](step-definition.md)。
- [構文糖衣拡張](steps-syntactic-sugar.md)。

### GitLab Steps の統合

- [`.gitlab-ci.yml` での GitLab Steps の使用](gitlab-ci.md)。
- [Runner Integration](runner-integration.md)。

## 設計と実装の詳細

### 2023-11-28 - GitLab Steps ADR 001: Bootstrap Step Runner

- [GitLab Steps ADR 001: Bootstrap Step Runner](decisions/001_initial_support.md) を参照。
- [Baseline Step Proto](implementation.md) を参照。

## 参考文献

- [GitLab Issue #215511](https://gitlab.com/gitlab-org/gitlab/-/issues/215511)
- [Step Runner Code](https://gitlab.com/josephburnett/step-runner/-/tree/blueprint2)。
  このブループリントの作成中に作成された探索的なコードです。
  Step Runner バイナリの構造と各要素がどのように組み合わさるかを示しています。
  動作しますが、正しいことを完全には行いません（すべての TODO を参照）。
- [CI Steps / CI Events / Executors / Taskonaut (video)](https://youtu.be/nZoO547IISM)。
  これらの 4 つのブループリントが互いにどのように関連するかについての高レベルの議論。
  このMRに関するビデオの良い前編です。
- [Steps in Runner (video)](https://youtu.be/82WLQ4zHYts)。
  コードの観点から Step Runner の詳細を説明したもの。
- [CI YAML keywords](https://gitlab.com/gitlab-org/gitlab/-/issues/398129#note_1324467337)。
  影響を受けるキーワードのインベントリ。
- [GitLab Epic 11535](https://gitlab.com/groups/gitlab-org/-/epics/11535)
