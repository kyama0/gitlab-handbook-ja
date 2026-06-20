---
title: "ドメイン層を分離する"
status: proposed
creation-date: "2026-06-12"
authors: [ "@fabiopitino", "@ayufan" ]
coach: [ ]
approvers: [ ]
owning-stage: ""
toc_hide: true
upstream_path: /handbook/engineering/architecture/design-documents/modular_monolith/domain_layer/
upstream_sha: 18de125bd3131a62f0a7026bc69c7de124fc6c8a
lastmod: "2026-06-15T16:29:33+01:00"
translated_at: "2026-06-20T14:25:50Z"
translator: codex
stale: false
---

このページは、[六角形モノリス](hexagonal_monolith/index.md)の中核にあるビジネスロジックである **アプリケーションドメイン** を、境界付けられ、独立して所有されるモジュールへ分離するための単一の情報源です。

ここで扱うのはドメインコードだけです。横断的な **プラットフォーム** コードの抽出は[横断的ライブラリを gem に抽出する](library_extraction.md)で扱い、**トランスポート層**（Web、REST、GraphQL、Sidekiq）の抽出は[トランスポート層をアダプターへ分解する](transport_layer.md)で扱います。ドメインをどのように識別し命名するかは、[バウンデッドコンテキストを定義する](bounded_contexts.md)で扱います。

ドメインの分離は、モジュール化で最も難しい部分です。プラットフォーム層とトランスポート層には比較的きれいな継ぎ目があります。ドメインは、結合が実際に存在している場所です。

## ドメイン分離が意味すること {#what-domain-isolation-means}

ドメインは、次の場合に分離されています:

- **パブリック API を通るもの以外は境界を越えない。** 他のドメインは、文書化され意図されたインターフェイスを呼び出します。内部、AR モデル、プライベートサービスには決して直接入り込みません。
- **自身のデータを排他的に所有する。** ドメインは自身のデータベーステーブルと、それらに対応する ActiveRecord モデルを所有します。他のドメインはそのテーブルをクエリしたり、そのモデルへの参照を保持したりしません。

適切に設計されたドメインモジュールは **深い** ものでもあります。小さなインターフェイスの背後に大量の内部ロジック、状態、データをカプセル化します。また、説明する機能の単一の情報源として **凝集性** があります。[名前空間の命名に関するガイドライン](https://docs.gitlab.com/ee/development/software_design.html#use-namespaces-to-define-bounded-contexts)に従い、CRUD 用語ではなく[ユビキタス言語](https://docs.gitlab.com/ee/development/software_design.html#use-ubiquitous-language-instead-of-crud-terminology)を使用します。ドメインをどのように識別し、機能カテゴリへマッピングするかは、[バウンデッドコンテキストを定義する](bounded_contexts.md)で扱います。

以下はすべて、そこへ到達するために必要な作業についてです。

## 難しい部分: ドメイン間の結合 {#the-hard-part-cross-domain-coupling}

私たちのモジュラーモノリス調査では、これを難しくしている結合が明らかになりました。現在のコードベースでは:

- **ポリシーが他のポリシーに依存しています**。例えば `PipelinePolicy` は `ProjectPolicy` に委譲します。
- **サービスが共有コンポーネントに依存しています**。イベントの公開、メール送信、システムノート、監査などです。
- **ドメインが互いの AR モデルに依存しています**。明示的な依存（`Ci::Pipeline.find_by_id`）と、関連を通じた暗黙的な依存（`security_scan.pipeline`）の両方があります。
- **ドメイン間の循環依存** が一般的です。

これが、ドメイン分離をライブラリやトランスポートの抽出と同じような機械的なファイル移動にできない理由です。作業の大半はコードの移動ではなく、*結合を取り除くリファクタリング* です。

## データを所有する {#owning-the-data}

排他的なデータ所有は分離の中核です。各ドメインは自身のテーブルと、それに対応する AR モデルを所有し、それらをクエリできる唯一のコードになります。

そこから 2 つの強制上の問題が生じます:

**ドメイン間 AR 関連。** 今日では、どのドメインも `project.ci_pipelines` を呼び出して CI のデータへ直接入れます。分離には、ドメイン間関連を取り除き、代わりに所有ドメインのパブリック API、つまり `project.ci_pipelines` ではなく `Ci::Pipeline.all(project)` を通ることが必要です。前提条件は [Taming Omniscient Classes](https://docs.gitlab.com/development/software_design/#taming-omniscient-classes) です。`Project` や `User` のようなクラスは、あらゆるドメインから関連やメソッドを蓄積しており、スリム化する必要があります。

**直接的なモデル参照。** 関連がなくなっても、どのコードでも `Ci::Pipeline` を直接参照できます。1 つの選択肢は、例えば `Ci::Internal::Pipeline` のように AR モデルをドメイン内でプライベートに保ち、外部から参照できないようにし、パイプラインデータは `Ci::*` のパブリックインターフェイスを通じてのみ公開することです。

### Repository pattern の選択肢 {#repository-pattern-option}

より構造化された変種では、AR をドメインオブジェクトとは別の永続化 / repository 層として厳密に使用します:

```ruby
# Persistence only — scopes and AR persistence, nothing else. Private to the domain.
Ci::Repository::Pipeline

# Domain object wrapping the record, exposing behaviour. The public type.
Ci::Pipeline   # #builds, #cancelable?, ...
```

AR モデルはドメインオブジェクトの外では決して使われません。これにより、ドメインはテストで簡単にスタブでき、呼び出し元から AR への依存を取り除けます。コストは大きく、最終的に gem を抽出するかどうかにかかわらず、大規模で侵襲的なリファクタリングになります。

## ドメイン間データと共有モデル {#cross-domain-data-and-shared-models}

最も厄介な問いは、ほぼすべてのドメインが触れる `Project` や `User` のような共有エンティティをどう扱うかです。

**共有モデルを identity object まで削る。** ドメイン間アクセサーが完全な `Project` AR オブジェクトを返すと、そのオブジェクトの表面全体を引きずり込み、ドメインを再び結合させます。共有データは完全なモデルではなく、最小限の identity object へ減らすべきです。

**ドメイン固有の表現。** すべてのドメインが共有された `Project` を消費するのではなく、ドメインは必要なデータを自身の facade の背後でラップできます:

```ruby
project = Ci::Internal::Project.new(project_id) # PORO or record local to the CI domain
project.variables       # internal to CI
project.public_builds?  # CI-specific project setting
project.pipelines       # pipelines queried via Ci::Project, not Project
```

これにより、`project.pipelines` はグローバルな `Project` 上ではなく CI ドメインの内部に留まります。関連するアイデアとして、ドメインごとの owner object があります。例えば `user_id` をラップし、identity 固有の関心事についてのみ `User` へ委譲する `Ci::JobOwner` です。

**モノリスの callback よりも直接依存を優先する。** あるドメインが別ドメインのデータを必要とする場合、モノリスへ callback を配線するよりも、そのドメインのパブリックインターフェイスへの直接的で宣言された依存を優先します。直接依存は追跡可能です。ドメイン間依存グラフを描画し、CI で影響を受けるテストだけを実行するために利用できます。一方、callback は結合を隠します。

**後で gRPC に差し替えられる安定した client interface。** ドメインは最初から外部のものとして扱えます。Ruby client interface を公開し、それ以外をすべてプライベートに保ちます。そのインターフェイスの背後にあるバックエンドは、後で呼び出し元を変更せずに gRPC へ移行できます。

**おしゃべりなドメインを避ける。** 境界が強制されると、互いに依存しすぎているコンポーネントが見つかります。Rails は常にすべてを利用可能にするため、1 つのビジネストランザクションが多くのドメインを横断します。おしゃべりなドメイン間呼び出し（ドメインがサービスになると実際の問題になります）を避けるには、データの非正規化や複製、ローカル表現の保持、インターフェイス分離の適用が必要です。例えば、完全な `User` ではなく基本的な identity object をラップする薄い `Ci::Internal::User` です。

> すべてのドメインが必要とする共有の「足場」、つまり `Project`/`User` の lookup、権限チェックなどは、ドメインごとに注入されるのではなく、すべてのドメインが依存する粗い `gitlab-platform`/`gitlab-core` gem に置くほうがよいかもしれません。このトレードオフは、[ライブラリ抽出ページの未解決事項](library_extraction.md#open-questions)として追跡されています。

## 抽出前に解決すべきこと {#what-must-be-resolved-before-extraction}

ドメイン分離は、ほとんどが未回答の設計作業です。ドメインを gem **または** package へ抽出する前に、再現可能なガイドラインが必要です。少なくとも以下について、リファクタリングがエンジニアごと、またはエージェントごとの解釈に委ねられないようにするためです:

1. ドメイン間の **AR 関連** をどうするか。
1. **AR モデル** と **ドメインオブジェクト** のどちらにどのロジックを置くか。
1. どのデータが **境界を越える** ことを許されるか、またその形は何か。
1. 呼び出し元がデータオブジェクトを受け取ったが、**ドメインオブジェクト** 上のメソッド（例えば `Ci::Pipeline#merge_request`）が必要な場合にどうするか。おしゃべりなドメインやレスポンスの過剰なシリアライズ（REST における現在の痛み）を作らない形で。
1. **データベースマイグレーション** を誰が所有し、どこに置くか。
1. `Project` が **共有モデル** なのか、`Projects` **ドメイン** になるのか。
1. **EE と JH** エクステンションをドメインと並行してどのように分離するか。これはライブラリ層とトランスポート層が直面するのと同じエクステンション問題です。
1. **テスト** をどのように切り離すか。Factory はグローバルで強く結合しています。ドメインが切り離されるにつれ、各ドメインは spec / factory 向けのパブリックインターフェイスを公開するか、呼び出し元はドメイン間レコードを build するのではなく stub するべきです:

  ```ruby
  RSpec.describe Ci::Pipeline do
    let(:user)    { Gitlab::Platform::Specs.create_user }
    let(:project) { Gitlab::Platform::Specs.create_project }
  end
  ```

移行期間中にドメインを橋渡しする glue code は非常に大きくなる可能性があります。戦略にコミットする前に、実際に何が含まれるのかを学ぶためのプルーフオブコンセプトが必要になる可能性が高いです。

## ドメインコードの置き場所: `domains/` と `gems/` {#where-domain-code-lives-domains-vs-gems}

ドメインコードは、横断的ライブラリに使用される `gems/` ディレクトリとは別に、専用の `domains/` ディレクトリ配下に置くべきです。どちらも gem 形式を使用できますが、分けることで次の利点があります:

- 単一の `gems/` 配下で、責任の混在した gem が平たく広がることを避けられる。
- **ドメインコード** と **汎用コード** の明確な区別。
- **ドメイン間** 依存関係を、汎用ライブラリへの依存関係とは別に追跡・可視化できること。ドメイン関係のアーキテクチャレベルの図です。
- 強制可能なルール。ライブラリは別のライブラリに依存できますが、**ドメインには決して依存できません**。静的解析でこれを CI で強制できます。

ドメインは [`config/bounded_contexts.yml`](https://gitlab.com/gitlab-org/gitlab/-/blob/master/config/bounded_contexts.yml) に従い、バウンデッドコンテキストの名前空間（`Ci::`、`Packages::`）を直接使用します。`Gitlab::` プレフィックスは使いません。

任意で、大きなドメインをネストされたプライベートなサブドメイン gem に分割できます:

```ruby
# domains/ci/ci.gemspec  (the public domain gem)
spec.add_dependency "ci-pipelines"
spec.add_dependency "ci-runners"
spec.add_dependency "ci-catalog"
```

## そこへどう到達するか: gems、Packwerk、またはその両方 {#how-we-get-there-gems-packwerk-or-both}

**これは未決定です。** ドメイン分解に Ruby gem、[Packwerk](https://github.com/Shopify/packwerk) package、またはその組み合わせを使うかはまだ合意していません。上記の切り離しの課題が、仕組みの選択を支配するためです。

トレードオフは次のとおりです:

- **Gems** は強い分離と明示的で宣言された依存関係を提供します。ただし、gem 抽出は **アトミック** です。コードは 1 回のステップで完全に分離されている必要があります。これは、大きく複雑で密結合なドメインのように、段階的にしかほどけないものにはつらいものです。
- **Packwerk（任意）。** 静的解析は、ファイルを移動せずに package 境界を引き、プライバシーと依存関係の違反を表面化させ、ドメインの owner が時間をかけて違反を減らせるようにすることで、段階的でガイド付きの分離を *その場で* 支援できます。RBS type signature があれば、`Ci::Pipeline` が allowlist された定数でない場合に `security_scan.pipeline` のような暗黙的な依存を検出することさえできます。この方法でドメインが十分に分離されると、後の gem 抽出ははるかに簡単になります。

2 つは相互排他的ではありません。抽出済みの gem は、依存してよいものを強制し続けるために独自の Packwerk 設定を持てます。Packwerk は、段階的な経路のための **補完的で任意の** ツールです。コミット済みのアプローチではなく、gem の代替でもありません。

### Packwerk による任意の段階的経路 {#an-optional-gradual-path-with-packwerk}

段階的な経路を取る場合、以下のステップはそれがどのように機能しうるかを説明します。
これは **1 つの選択肢** であり、決定事項ではありません:

1. **まず名前空間。** [バウンデッドコンテキスト](bounded_contexts.md)のすべてのクラスとモジュールを同じ名前空間の下に置きます。ドメインの大まかな理解がなければ計画は不可能です。一貫した名前空間付けが前提条件です。
1. **Rails を Packwerk に備えさせる** — 一度だけのステップです。[この PoC](https://gitlab.com/gitlab-org/gitlab/-/merge_requests/129254/diffs#note_1512982957) のように autoloader が Packwerk のディレクトリレイアウトで動作するようにし、CI で [Danger-Packwerk](https://github.com/rubyatscale/danger-packwerk) を実行し、任意で pre-commit / pre-push check を追加します。
1. **ファイルを package に移動する** — package を作成し、ファイルを反復的に移動します。package 内では、定数は `app/` 配下でも `lib/` 配下でも autoload されます。このフェーズではコードが package と Rails ツリーの間で分かれるため、素早く進めます。
1. **境界を強制する** — package に[依存関係の明示的な宣言](https://github.com/Shopify/packwerk/blob/main/USAGE.md#enforcing-dependency-boundary)を求め、package の[パブリックインターフェイス](https://github.com/rubyatscale/packwerk-extensions#privacy-checker)にのみ依存させます。ファイル移動 *後* にプライバシーを強制すると、定数とドメイン間の実際の結合が、記録済みの違反（RuboCop TODO のようなもの）として明らかになります。
1. **記録済みの違反を減らす** — ドメインの DRI が育てる長期フェーズです。依存関係図を使って設計を導きながら、結合しすぎた定数をプライベートにする、定数をより適した package へ移す、または結合が強すぎる package をマージします。

ツールが整えば、新しく現れるドメインは最初から package として実装でき、すぐに分離と明確なインターフェイスを得られます。

## 関連 {#related}

- [バウンデッドコンテキストを定義する](bounded_contexts.md) — ドメインをどのように識別し命名するか。
- [六角形 Rails モノリス](hexagonal_monolith/index.md) — 3 層モデル。
