---
title: "横断的ライブラリを gem に抽出する"
description: "GitLab が横断的で ActiveRecord 非依存のプラットフォームライブラリを lib/ と ee/lib から gems/ 配下の Ruby gem へ抽出する方法と理由。"
status: proposed
creation-date: "2026-06-12"
authors: [ "@fabiopitino", "@ayufan" ]
coach: [ ]
approvers: [ ]
owning-stage: ""
toc_hide: true
upstream_path: /handbook/engineering/architecture/design-documents/modular_monolith/library_extraction/
upstream_sha: 18de125bd3131a62f0a7026bc69c7de124fc6c8a
lastmod: "2026-06-15T16:29:33+01:00"
translated_at: "2026-06-20T14:25:50Z"
translator: codex
stale: false
---

このページは、横断的な **プラットフォーム**（ライブラリ）コードを `lib/` と `ee/lib` から `gems/` 配下の Ruby gem へ抽出するための単一の情報源です。この決定は [ADR-004: 横断的ライブラリを gem に抽出する](decisions/004_library_extraction/)に記録されています。

ここで扱うのは、汎用的で横断的なライブラリの抽出だけです。機能ドメインの抽出、トランスポート / レイヤーの gem、デプロイモードは **扱いません**。それらは[モジュラーモノリス設計](_index.md)の別の場所で説明される個別の関心事です。

## プラットフォームコードとは何か？ {#what-is-platform-code}

プラットフォームコードは、[六角形モノリス](hexagonal_monolith/index.md)の第 3 の層であり、[アプリケーションドメイン](hexagonal_monolith/index.md#application-domain)と[アプリケーションアダプター](hexagonal_monolith/index.md#transport-layer)に並ぶものです。これは、ドメインとアダプターが実行するために依存するが、それ自体にはビジネスロジックを持たないクラスやモジュールの集合です。

これらは本物の **横断的関心事** です。ロギング、エラーレポート、メトリクス、レートリミッター、パーサー、`Banzai` のような汎用ユーティリティです。特定のドメインについて何も知らないからこそ、多くのドメインに役立ちます。

真のプラットフォームコードの定義的な性質は、**ActiveRecord モデルに依存しない** ことです。コードが `Project`、`User`、service、または任意の AR モデルに手を伸ばすなら、それはほぼ確実に **ドメインコード** です。`gems/` ではなく、そのドメインに属します。[「汎用」を疑う](#be-skeptical-of-generic)を参照してください。

## 問題 {#the-problem}

Rails の `lib/gitlab/` ディレクトリは「何でも入れ」になっています。約 3,100 ファイル（約 94,000 行）があり、非常に異なる 3 種類のコードが混在しています:

1. **汎用 / universal** — ActiveRecord 依存のないユーティリティ、パーサー、データ構造。真のプラットフォームコードです。
1. **GitLab 固有だが分離済み** — GitLab の概念を参照するがアプリケーションモデルは参照しないライブラリ。これも抽出可能です。
1. **密結合** — AR モデル、service、Rails ランタイムに依存するコード。これは `lib/` のふりをしたドメインコードです。

カテゴリ 1 には間違いなく抽出候補が含まれます。カテゴリ 2 は、ドメイン固有ライブラリをどのようにグループ化するかの決定次第です。カテゴリ 3 は違います。[バウンデッドコンテキスト](bounded_contexts.md)へ移すべきです。

この混在は依存関係を隠し、所有権を曖昧にし、汎用に見えるコードが静かにアプリケーションへ結合することを許します。

## 目標 {#goals}

1. **強制された分離** — gem は依存関係を明示的に宣言します。隠れた依存関係は、静かな結合ではなく見えるエラーになります。
1. **より明確な所有権** — 各 gem は明示的な `feature_category:` を持ち、チーム境界へマッピングされます。
1. **パターンとツールを確立する** — 後続の分解作業で再利用できる、繰り返し可能な抽出レシピと CI の配線。
1. **より速い CI** — 実際の、ただし限定的なメリットです。[下記の注意点](#a-note-on-ci-speedups)を参照してください。

## 「汎用」を疑う {#be-skeptical-of-generic}

汎用に見えるものすべてを抽出すべきではありません。「ライブラリ」が実はドメインロジックであることを示す最も強い匂いは、それを動作させるために **AR データを注入する** 必要があることです。

誘惑されるパターンは、gem から AR 依存を外しておくために、モノリスが callback を通じて専用のデータ構造を与えることです:

```ruby
# The gem defines the shape of data it needs
Gitlab::Diff::FileInfo = Struct.new(:path, :content, :size, keyword_init: true)

# The monolith wires a lambda that maps an AR object to that shape
Gitlab::Diff.config.find_file = ->(id) {
  blob = Repository.find_blob(id)
  Gitlab::Diff::FileInfo.new(path: blob.path, content: blob.data, size: blob.size)
}
```

これは慎重に扱ってください。「汎用ライブラリ」に AR 由来データを与えるために dependency injection や callback に手を伸ばしているなら、そのコードは通常、まったく汎用ではないというサインです。それはバウンデッドコンテキストへ移すべきドメインロジックです。callback は慎重かつ意図的に使い、すべての抽出の happy path にしないでください。

## 名前空間 {#namespacing}

抽出は、コードに適切な名前空間を与える機会です。

- **プラットフォーム / 非ドメインコード** は `Gitlab::` 名前空間を保持できます。ただし、`Gitlab::` は衝突回避以上の価値をほとんど加えないという継続中の議論があります。コードが何をするものかは何も伝えません。
- **`lib/gitlab/` から取り出されたドメインコード** は `Gitlab::` を **保持すべきではありません**。[`config/bounded_contexts.yml`](https://gitlab.com/gitlab-org/gitlab/-/blob/master/config/bounded_contexts.yml) に従って、明示的な[バウンデッドコンテキスト](bounded_contexts.md)の名前空間へ移すべきです。

## 抽出パターン {#extraction-pattern}

リポジトリ内のすべての gem は `gems/` に存在し、Gemfile から `path:` で参照されます。

1. **ファイルを移動する** — `lib/gitlab/<name>/`（および任意の `ee/lib/gitlab/<name>/`）を `gems/gitlab-<name>/` へ移します。プラットフォームコードは名前空間を保持し、ドメインコードは名前空間を付け直します（[名前空間](#namespacing)を参照）。

1. **AR 非依存を保つ** — ライブラリ gem は AR モデルを参照してはいけません。アプリケーションデータが必要な場合、そのコードが本当にライブラリなのかを[再考するシグナル](#be-skeptical-of-generic)です。

1. **Gemfile へ配線する**

   ```ruby
   gem 'gitlab-<name>', path: 'gems/gitlab-<name>',
     require: false, feature_category: :<category>
   ```

1. **EE extensions** — EE コードは gem ディレクトリ内の `ee/` フォルダーに置きます。gem のエントリーポイントは、EE コンテキストで条件付きに `ee/` ツリーをロードします。

   ```text
   gems/gitlab-<name>/
     lib/
       gitlab/<name>/...
     ee/
       gitlab/<name>/...     # EE overrides
     spec/
   ```

1. **gem ごとの CI** — 各 gem は `gems/<name>/.gitlab-ci.yml` と `.gitlab/ci/gitlab-gems.gitlab-ci.yml` の entry を持ち、独自の分離されたテストスイートを実行します。

## 候補 {#candidates}

以下の候補は、モノリスからどれだけきれいに分離できるかの順に並べた例示的な階層です。Tier 1 と Tier 2 の AR 非依存部分だけが真のライブラリ候補です。密結合なコードは自身のドメインに属します。

### Tier 1 — 低結合、高価値 {#tier-1--low-coupling-high-value}

| ライブラリ | 現在の場所 | メモ |
|---------|------------------|-------|
| `ci/parsers` + `ci/reports` | `lib/gitlab/ci/parsers/`, `lib/gitlab/ci/reports/` | 解析 / report データ構造 |
| `regex` | `lib/gitlab/regex/` | Pure Ruby |
| `slug` | `lib/gitlab/slug/` | Pure utility |
| `json` | `lib/gitlab/json/` | Oj/JSON の wrapper |
| `sanitizers` | `lib/gitlab/sanitizers/` | HTML / text sanitization |
| `diff` | `lib/gitlab/diff/` | Diff parsing and formatting |
| `template_parser` | `lib/gitlab/template_parser/` | Template parsing logic |
| `word_diff` | `lib/gitlab/word_diff/` | Word-level diff |

### Tier 2 — 中程度の結合、明確な継ぎ目 {#tier-2--moderate-coupling-clear-seams}

これらには、分離可能な汎用 core と AR 結合の glue が含まれます。汎用 core だけを抽出し、AR 結合部分はそのドメインに残します。

| ライブラリ | 現在の場所 | 残すもの |
|---------|------------------|-------------------|
| `pagination` | `lib/gitlab/pagination/` | Keyset pagination は汎用。AR scope は残す |
| `search` | `lib/gitlab/search/` | Query building は AR scope から分離可能 |
| `changelog` | `lib/gitlab/changelog/` | Templating は汎用。commit / repository access は残す |

### Tier 3 — AR に結合しているが可能性はある {#tier-3--coupled-to-ar-but-still-possible}

このコードは AR モデル、Rails ランタイム、またはすべてのドメインを横断するものに依存しています。これはライブラリでは **ありません**。モノリスに残るか、バウンデッドコンテキストへ移ります。

| ライブラリ | 理由 |
|---------|--------|
| `auth` | Devise、OmniAuth、session、すべての model に触れる |
| `background_migration` | AR を継承し、schema を直接参照する |
| `event_store` | すべてのドメインをまたいで publish / subscribe する |
| `sidekiq_middleware` | Rails middleware stack に依存する |

## 順序付けと循環依存 {#sequencing-and-circular-dependencies}

コードを gem へ抽出することは **アトミックなリファクタリング** です。1 回のステップで、コードはすべての依存関係を宣言し、完全に分離されていなければなりません。その厳密さこそが、gem を明示的な依存関係の強制に適したものにしています。しかし、大規模または複雑で、段階的にしか分離できないコードにはつらいものです。

そこから 2 つのガイダンスが得られます。

**下から始める。** 依存関係を持たない最下層のコードから始め、上に向かって進みます。これにより、半分だけ抽出された gem 間で循環依存を作ることを避けられます。

**粗くではなく細かく始める。** 小さく焦点を絞った gem を 1 つずつ抽出します。きれいに分離できる [Tier 1](#tier-1--low-coupling-high-value) ライブラリにはすでに良い継ぎ目があるため、それぞれは land、test、revert しやすい小さなアトミックリファクタリングです。これにより、抽出パターンと CI 配線をより早く実証できます。

### 任意: Packwerk 支援の段階的分離 {#optional-packwerk-assisted-gradual-isolation}

1 回のアトミックな移動では分離できないコードについては、[Packwerk](https://github.com/Shopify/packwerk)（静的解析）が段階的な経路を **支援** できます。ファイルを移動せず、ランタイム挙動を変えずに package 境界を引き、依存関係とプライバシーの違反を表面化できます。十分な分離が達成されると、最終的な gem 抽出ははるかに単純になります。

Packwerk が生成する明示的な依存関係とプライバシーのグラフは、**AI エージェント型リファクタリング** にも有用です。コード片が何に依存し、何がそれに依存しているかについて、正確で機械可読な地図をエージェントに与えるため、エージェントは暗黙的な結合から推測するのではなく、抽出の影響範囲を推論できます。これにより、Packwerk はエージェント駆動の抽出作業に役立つ支援になります。

Packwerk は段階的な経路のための **任意で補完的な** ツールであり、主要なアプローチではありません。そして handbook はこれを[プルーフオブコンセプト / 提案](proof_of_concepts.md#use-packwerk-to-enforce-module-boundaries)として扱い、コミット済みのアプローチとはしていません。主要な経路は、最下層のコードから始める直接的でアトミックな gem 抽出のままです。

## CI 高速化に関する注意 {#a-note-on-ci-speedups}

コードを gem に分離すると、それが変更されたとき、またはそれが依存するものが変更されたときだけ CI でテストできます。毎回モノリスのスイートの一部として再実行する必要がなくなります。これこそ、**安定した** コードの分離に価値がある理由です。`lib/gitlab/` のライブラリはおおむね安定しており、ほとんど変更されません。そのため、gem 境界の背後に置かれると、そのスイートを実行する必要はほとんどなくなります。安定して変更頻度の低いコードは、この種の CI 節約に最も適した候補であり、最悪の候補ではありません。

メリットは実際にありますが、無制限ではありません。密結合なシステムでは gem 同士の相互接続が残ります。多くのドメインが CI に依存し、CI も多くの gem に依存します。そのため、多くから依存される gem が変更された場合、その pipeline は依然としてすべての依存先へ cascading します。効果は、変更頻度の低いコードを分離して、その cascade をほとんど起こさないようにすることから生まれます。cascade そのものをなくすことからではありません。

## 未解決事項 {#open-questions}

- **gem ごとの明示的な依存関係か、共有 platform gem か？** すべてのドメイン gem またはモジュールが、例えば gemspec 内ですべての依存関係を明示的に宣言すべきでしょうか。それとも、ドメインが実行に必要とする基本的な tooling（ロギング、エラーレポート、observability、strong-memoize など）を提供する単一の "platform" gem、[LabKit](https://gitlab.com/gitlab-org/labkit-ruby) または類似のものに依存すべきでしょうか。明示的な依存関係は結合を完全に可視化し、各 gem を最小に保ちます。共有 platform gem は boilerplate を減らし、すべてのドメインに一貫した baseline を与えますが、粗く広く依存される依存関係というコストがあります。
- **EE extensions はどのように扱うか？** 各 gem は EE コードを `ee/` フォルダーに持ちますが、EE only の **依存関係** をどのように宣言するかは未解決です。gem が `ee/` ツリーでだけ使用する依存関係を必要とする場合、それは gemspec で無条件に宣言するのでしょうか、それとも条件付きでしょうか。そしてそれは `Gemfile` と `Gemfile.ee` の分割を意味するのでしょうか。これは GitLab FOSS と EE をどのように package するかに依存する可能性が高いです。
