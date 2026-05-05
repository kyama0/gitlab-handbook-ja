---
title: "Rails アップグレード"
status: ongoing
creation-date: "2024-07-28"
authors: [ "@igor.drozdov" ]
coaches: [ ]
dris: [ ]
owning-stage: "~section::dev"
participating-stages: [ "~section::dev" ]
toc_hide: true
upstream_path: /handbook/engineering/architecture/design-documents/rails_upgrade/
upstream_sha: 4c7d94ca4f485376c886b7c2b9575091c8b7d3cf
translated_at: "2026-04-27T00:00:00Z"
translator: claude
stale: false
---

<!-- This renders the design document header on the detail page, so don't remove it-->

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
<td class="px-3 py-2 border border-gray-300"><a href="https://gitlab.com/igor.drozdov" class="text-blue-600 hover:underline">@igor.drozdov</a></td>
<td class="px-3 py-2 border border-gray-300"></td>
<td class="px-3 py-2 border border-gray-300"></td>
<td class="px-3 py-2 border border-gray-300"><span class="inline-block rounded px-2 py-0.5 text-xs font-medium bg-gray-100 text-gray-700">~section::dev</span></td>
<td class="px-3 py-2 border border-gray-300">2024-07-28</td>
</tr>
</tbody>
</table>
</div>


## 概要

Rails バージョンのアップグレードはボランティアによって進められます。作業は通常、特定のイベントが発生したときに優先されます:

- [サポート終了](https://endoflife.date/rails) 日程
- 次の Rails バージョンが次の Ruby バージョンのサポートを提供する場合（Ruby 3 アップグレード）
- 次の Rails バージョンに特定のグループが関心を持つ機能が含まれており、Rails をパッチするよりもアップグレードする方が現実的な場合

プロセスは通常、以下のステップで構成されます:

- Rails をドラフトマージリクエストで次のバージョンにバンプする
- 失敗した CI ジョブとテストをマージリクエストにコミットをプッシュすることで修正する
- コミットをマージリクエストから別々の MR に抽出してデフォルトブランチにマージする
  - 変更が次の Rails バージョンにのみ適用可能（変更/削除されたパッチなど）な場合は不可能なこともある
- 差分が可能な限り小さくなったとき、マージを検討します:
  - Rails 7 アップグレードでは、Delivery が[実験的なロールアウト](https://gitlab.com/groups/gitlab-org/-/epics/7875#note_1341821006)を提案・実行しました: Rails 7 の変更を含むコミットが auto-deploy にチェリーピックされ、数時間 `gprd-cny` および `gprd` にデプロイされました

## 動機

現在のプロセスでは、以下の課題があります:

- メイン MR のマージは、実験的なロールアウトを実行してリスクのある変更の範囲を縮小するために Delivery と調整する必要があります。ブロッカーの例:
  - Delivery グループのキャパシティ
  - Ruby バージョンアップグレード
  - GitLab のメジャーリリース
- MR のグリーン CI を達成・維持する必要がある一方で、ターゲットブランチは急速に進んでいきます。これによりグリーン CI の達成が動く的になります。
  - [Rails 7.1 MR](https://gitlab.com/gitlab-org/gitlab/-/merge_requests/124004) は 6 か月前にグリーンになりましたが、上記のブロッカーにより延期されました。MR が 1 か月前にリベースされたとき、CI は約 80 の失敗ジョブと約 200 のテストで失敗し、グリーンにするために多大な努力が必要でした。
- MR の差分が可能な限り小さくても、依然として相当な規模であり、さまざまな領域の変更が含まれています:
  - [Rails 7.1 MR](https://gitlab.com/gitlab-org/gitlab/-/merge_requests/124004) は約 100 ファイルを変更します
- エンジニアリングの取り組みを並列化・同期させることが困難です
  - エンジニアは単一の MR でコラボレーションするか、別々の MR を持って変更を比較する必要があります

主な目標は、上記の課題に対処するプロセスを促進することです。

## 提案

提案は、現在と次の Rails バージョンを Gemfile に含め、両方のバージョンに対して単一のコードベースを維持することです。gem バージョンとアプリの動作の違いは環境変数によって制御されます。このアプローチには以下の**利点**があります:

### 開発

- プロセスは単一の大きな MR を必要としなくなります。次の Rails バージョンが導入され、修正がメインコードベースに一つずつマージされます。
- 現在の Rails バージョンと互換性がない場合でも、修正は小さなマージリクエストを通じて導入・マージされます。
- Issue は異なるチームが各自の専門分野で並行して修正され、変更は通常の開発と同様にメインブランチで同期されます

### 品質

- 次の Rails バージョンに対してテストとチェックを実行する CI パイプラインを導入できます
  - パイプラインは新しい失敗が発生しないよう制御するため、特定の Rails バージョンのグリーン CI の達成は動く的ではなくなります
  - パイプラインは複数のチームが導入したすべての修正を同期し、次の Rails バージョンで実行するアプリの現状を反映します

### Delivery

- 次の Rails バージョンに関連する変更のマージは、Delivery との調整が不要になります。変更はマージされますが、環境変数を切り替えて次の Rails バージョンを有効にしたときのみ実行されます。
- 実験的なロールアウトプロセスは環境変数の切り替えに簡素化されます。Issue が発生した場合、以前の Rails バージョンへのより簡単なロールバックが可能になります。

## 設計と実装の詳細

提案を実装するには、`Gemfile` で 2 つの `rails` バージョンを指定できます:

```ruby
def next?
  File.basename(__FILE__) == "Gemfile.next"
end

if next?
  gem 'rails', '~> 7.1.3.4', feature_category: :shared
else
  gem 'rails', '~> 7.0.8.4', feature_category: :shared
end
```

`Gemfile.next` は `Gemfile` へのシンボリックリンクです。以下を実行した後:

```bash
BUNDLE_GEMFILE=Gemfile.next BUNDLE_CACHE_PATH=vendor/cache.next bundle install
BUNDLE_GEMFILE=Gemfile.next BUNDLE_CACHE_PATH=vendor/cache.next bundle exec bundler-checksum lint
```

以下のファイルセットが得られます:

```bash
Gemfile
Gemfile.lock
Gemfile.checksum
Gemfile.next
Gemfile.next.lock
Gemfile.next.checksum
```

コードベースの異なるパスは `Gitlab.next_rails?` フラグによって制御されます:

```ruby
def self.next_rails?
  return @next_bundle_gemfile unless @next_bundle_gemfile.nil?

  @next_bundle_gemfile = File.exist?(ENV["BUNDLE_GEMFILE"]) && File.basename(ENV["BUNDLE_GEMFILE"]) == "Gemfile.next"
end
```

テストが現在と次の Rails バージョンの両方に対して修正された場合、以下のように検証できます:

```bash
bundle exec rspec <test_file_spec.rb>
BUNDLE_GEMFILE=Gemfile.next BUNDLE_CACHE_PATH=vendor/cache.next bundle exec rspec <test_file_spec.rb>
```

### PoC

同一のコードベースを持つ 2 つの MR があります:

- `7.0.8.4` バージョンが有効（デフォルト）でテストを実行する[こちら](https://gitlab.com/gitlab-org/gitlab/-/merge_requests/160895)
- `BUNDLE_GEMFILE` 環境変数を指定して `7.1.3.4` バージョンが有効でテストを実行する[こちら](https://gitlab.com/gitlab-org/gitlab/-/merge_requests/160896)

両方のパイプラインはグリーンです。

### 分析

- `7.0.8.4 -> 7.1.3.4` 更新に対して約 40 の `Gitlab.next_rails?` エントリ
  - GitLab Rails のような大規模なコードベースにとっては大きな数字ではありません
  - すべてのチェックは次の Rails バージョンがデプロイされた後に削除されます。つまり、成功したアップグレードごとに `Gitlab.next_rails?` エントリの数はゼロにリセットされます。これにより、アップグレード後に振り返りを行い、このアプローチを今後使いたくない場合に簡単に変更できます。
- `bundler-checksum` は `Gemfile.next` に対して実行されたときに `Gemfile.next.checksum` を作成するように変更されます
- `gems` ディレクトリのローカル gem（`activerecord-gitlab` のように `rails` gem をパッチするものなど）の互換性を調査する必要があります。パイプラインは CI でパスしますが、結果が信頼できるかどうかを調査する必要があります。
- gem が更新されると、`Gemfile.lock` と `Gemfile.next.lock` の両方を更新する必要があります。現時点では手動で行う必要がありますが、このプロセスの促進を検討できます。

## イテレーション計画

### Rails 7.1 アップグレード

主な目標は `7.0.8.4 -> 7.1.3.4` MR のパイプラインをグリーンに保つことです。

- メイン MR または `id-next-rails` PoC から変更を抽出し、メイン MR のすべての変更がメインブランチに入るまでマージします。
- 次の Rails バージョンに対してテストスイートを実行する CI パイプラインを定義します。`7.1.3.4` バージョンのグリーンステータスを維持するために、パイプラインは失敗を許容しません。
- Delivery とロールアウトの日程を調整します。
- 成功したロールアウトの後、条件付き `Gitlab.next_rails?` チェックを削除します
- アプローチが実現可能であり、将来のアップグレードに使用できるかどうかを評価します
- ドキュメントを更新します

### 将来の Rails アップグレード

実装の詳細は議論する必要がありますが、潜在的なプロセスは以下の通りです:

- 非推奨の警告を修正します
- 次の Rails バージョンをコードベースに導入し、起動時のすべての Issue を修正します
- 次の Rails バージョンに対してテストスイートを実行する CI パイプラインを定義します。パイプラインは既存の失敗にのみ失敗を許容します。新しい失敗はパイプラインを失敗させます。
- Issue を修正して、次の Rails バージョンのパイプラインがグリーンになるまでメインブランチにマージします。
- Delivery とロールアウトの日程を調整します。
