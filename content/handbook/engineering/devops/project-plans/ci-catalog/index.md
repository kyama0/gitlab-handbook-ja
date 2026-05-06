---
title: "CI Catalog"
description: "CI Catalog - 週次プロジェクト計画 - Pipeline Authoring グループ"
upstream_path: /handbook/engineering/devops/project-plans/ci-catalog/
upstream_sha: bb4e4d0fc1a355c00a1d82b1528ff729c83af189
translated_at: "2026-04-28T13:03:31Z"
translator: claude
stale: false
---


{{% alert title="注記" %}}
このページには、今後リリース予定の製品、機能、機能性に関する情報が含まれている場合があります。ここに記載されている情報は情報提供のみを目的としており、購入計画や導入計画の根拠としないでください。すべてのプロジェクトと同様に、ここで言及されている項目は変更または遅延する可能性があり、製品・機能・機能性の開発、リリース、タイミングはすべて GitLab Inc. の単独の裁量に委ねられています。
{{% /alert %}}


[CI Catalog は 17.0 で一般提供（GA）としてリリースされました。](https://about.gitlab.com/releases/2024/05/16/gitlab-17-0-released/#cicd-catalog-with-components-and-inputs-now-generally-available)
[CI コンポーネントおよび Catalog のプロダクト方向性](https://about.gitlab.com/direction/verify/component_catalog/)

### 現在のマイルストーン目標

- 現在のマイルストーン目標とフォーカスは[ボード](https://gitlab.com/gitlab-org/gitlab/-/boards/5726606?label_name[]=group%3A%3Apipeline%20authoring&label_name[]=Category%3AComponent%20Catalog&milestone_title=Started)で確認できます。

### アーカイブ

<details markdown="1">

<summary markdown="span">過去のマイルストーン</summary>

### 9月〜10月（マイルストーン 17.5）

### マイルストーン 17.5（2024年9月14日〜10月11日）

#### 目標

- コンポーネントが使用されている場所の可視化 - [Epic](https://gitlab.com/groups/gitlab-org/-/epics/14027)
  - パイプラインでコンポーネントが使用されたプロジェクト一覧を返すフィールドを作成する - [#466575](https://gitlab.com/gitlab-org/gitlab/-/issues/466575)（開発中）
- CI Catalog 向けセキュリティ & コンプライアンスワークフロー [epic](https://gitlab.com/groups/gitlab-org/-/epics/14060)
  - スパイク + POC: セキュリティポリシー - CI コンポーネントのパブリッシュと利用 - [#474093](https://gitlab.com/gitlab-org/gitlab/-/issues/474093)
- リリース/パブリッシュ 2.0 [拡張](https://gitlab.com/groups/gitlab-org/-/epics/12788)
  - 入力パラメータを持つ新しいパブリッシュ API エンドポイントを追加する - [#442783](https://gitlab.com/gitlab-org/gitlab/-/issues/442783)（レビュー中）
  - `release-cli` でメタデータを抽出・検証する - [#442785](https://gitlab.com/gitlab-org/gitlab/-/issues/442785)
  - リリースが catalog に登録されるかどうかを示すインジケーターを追加する - [#438958](https://gitlab.com/gitlab-org/gitlab/-/issues/438958)
- インデックス/詳細ページの拡張
  - CI/CD Catalog インデックスページのフィルタリングオプションを更新する（バックエンド部分）- [#437643](https://gitlab.com/gitlab-org/gitlab/-/issues/437643)
  - プロジェクトの説明が長い場合の表示改善 - [#448385](https://gitlab.com/gitlab-org/gitlab/-/issues/448385)
- 検索/フィルターの拡張
  - `/explore` のソートドロップダウンに「公開日順」オプションを追加する - [#440508](https://gitlab.com/gitlab-org/gitlab/-/issues/440508)
  - 検索結果ページにイラストを追加する - [#466412](https://gitlab.com/gitlab-org/gitlab/-/issues/466412)

### 8月〜9月（マイルストーン 17.4）

### マイルストーン 17.4（2024年8月9日〜9月13日）

#### 目標

- コンポーネントが使用されている場所の可視化 - [Epic](https://gitlab.com/groups/gitlab-org/-/epics/14027)
  - パイプラインでコンポーネントが使用されたプロジェクト一覧を返すフィールドを作成する - [#466575](https://gitlab.com/gitlab-org/gitlab/-/issues/466575)（開発中）
- リリース/パブリッシュ 2.0 [拡張](https://gitlab.com/groups/gitlab-org/-/epics/12788)
  - 入力パラメータを持つ新しいパブリッシュ API エンドポイントを追加する - [#442783](https://gitlab.com/gitlab-org/gitlab/-/issues/442783)（レビュー中）
- Inputs の拡張
  - ローカルコンテキストデータを使用した補間を許可する - [#438275](https://gitlab.com/gitlab-org/gitlab/-/issues/438275)（開発中）
  - `spec` キーワードの JSON スキーマ SSOT を作成する POC - [#467375](https://gitlab.com/gitlab-org/gitlab/-/issues/467375)（完了）

### 7月〜8月（マイルストーン 17.3）

### マイルストーン 17.3（2024年7月13日〜8月9日）

#### 目標

- 管理者が CI/CD Catalog へのパブリッシュを[ユーザーに対して制限](https://gitlab.com/groups/gitlab-org/-/epics/14060)できるようにする
  - GraphQL のミューテーションとポリシータイプを追加する [#465265](https://gitlab.com/gitlab-org/gitlab/-/issues/465265)（POC 結果を待ってブロック中）
- Inputs の拡張
  - ローカルコンテキストデータを使用した補間を許可する - [#438275](https://gitlab.com/gitlab-org/gitlab/-/issues/438275)（開発中）
  - `spec` キーワードの JSON スキーマ SSOT を作成する POC - [#467375](https://gitlab.com/gitlab-org/gitlab/-/issues/467375)（開発中）

### 6月〜7月（マイルストーン 17.2）

### マイルストーン 17.2（2024年6月15日〜7月12日）

#### 目標

- インデックス/詳細ページの拡張
  - 検索結果ページにイラストを追加する - [#466412](https://gitlab.com/gitlab-org/gitlab/-/issues/466412)（`candidate::17.4` に延期）
  - コンポーネントタブの InputType に `type` と `description` を追加する - [#466669](https://gitlab.com/gitlab-org/gitlab/-/issues/466669)（完了）
- リリース/パブリッシュ 2.0 [拡張](https://gitlab.com/groups/gitlab-org/-/epics/12788) - 複数マイルストーンにわたる
  - 入力パラメータを持つ新しいパブリッシュ API エンドポイントを追加する - [#442783](https://gitlab.com/gitlab-org/gitlab/-/issues/442783)（`17.3` に継続）
- CI/CD Catalog における管理者[機能](https://gitlab.com/groups/gitlab-org/-/epics/12713) - 複数マイルストーンにわたる
  - ci_component_source_policy JSON スキーマを追加する - [#465264](https://gitlab.com/gitlab-org/gitlab/-/issues/465264)（完了）
- Inputs の拡張
  - ローカルコンテキストデータを使用した補間を許可する - [#438275](https://gitlab.com/gitlab-org/gitlab/-/issues/438275)（`17.3` から開始）
  - `spec` キーワードの JSON スキーマ SSOT を作成する POC - [#467375](https://gitlab.com/gitlab-org/gitlab/-/issues/467375)（`17.3` に継続）

### 5月〜6月（マイルストーン 17.1）

### マイルストーン 17.1（2024年5月11日〜6月14日）

#### 目標

- [バッジ追加の将来的なリクエストをサポートする API を作成する](https://gitlab.com/gitlab-org/gitlab/-/issues/451509)（完了）
- [異なる Cell のコンポーネントを使用する方法](https://gitlab.com/gitlab-org/gitlab/-/issues/456843)（進行中）
  - 最近の[議論](https://gitlab.com/gitlab-org/gitlab/-/issues/442195#note_1917201790)から、CI Catalog サポートを現時点では Cells 1.5 に延期できるかどうかを検討中。
- GA 後のフォローアップ/技術的負債
  - [catalog・latest タグ・省略形フェッチからプレリリースを除外する](https://gitlab.com/gitlab-org/gitlab/-/issues/460873)（完了）
  - [semver の懸念に対してプレリリース向けのソートオプションを追加する](https://gitlab.com/gitlab-org/gitlab/-/issues/441266)（保留中）
  - [catalog_resource_components の inputs と path の無視ルールを削除する](https://gitlab.com/gitlab-org/gitlab/-/issues/455431)（完了）
  - 「パイプラインにコンポーネントが含まれたときに CI コンポーネント利用レコードを作成する」の GA フォローアップ - [1](https://gitlab.com/gitlab-org/gitlab/-/issues/460776)（完了）と [2](https://gitlab.com/gitlab-org/gitlab/-/issues/460490)（完了）
- Tableau コンポーネント利用可視化作業 - [1](https://gitlab.com/gitlab-org/gitlab/-/issues/452545)（完了）と [2](https://gitlab.com/gitlab-org/gitlab/-/issues/454912)（完了）

### 4月〜5月（マイルストーン 17.0）

CI Catalog GA に向けた成果物がすべて完了しました。

- 残りの GA 移行作業を完了する
  - [CI/CD Catalog のベータラベルを削除する](https://gitlab.com/gitlab-org/gitlab/-/issues/454306)（完了）
  - [catalog resource トグルのベータラベルを削除する](https://gitlab.com/gitlab-org/gitlab/-/issues/460260)（完了）
  - GA に向けた[リリースプロセスの改善](https://gitlab.com/groups/gitlab-org/-/epics/12338)
    - `release-cli` の GA 前[タスク](https://gitlab.com/gitlab-org/gitlab/-/issues/442066)（完了）
  - GA に向けた[詳細ページ](https://gitlab.com/groups/gitlab-org/-/epics/12336)
    - [相対 URL が CI/CD コンポーネント catalog のプロジェクト参照を壊す](https://gitlab.com/gitlab-org/gitlab/-/issues/450914)（完了）
    - [ReadMe タブで画像がレンダリングされない問題を修正する](https://gitlab.com/gitlab-org/gitlab/-/issues/455516)（完了）
- 残りの初期バッジ読み込み作業を完了する
  - [パブリッシュ時に verification_level を設定し enum の不一致を修正する](https://gitlab.com/gitlab-org/gitlab/-/issues/455530)（完了）
  - [サービスオブジェクトが `VerifiedNamespace` レコードを作成できるようにする](https://gitlab.com/gitlab-org/gitlab/-/issues/451507)（完了）
  - [バッジ追加の将来的なリクエストをサポートする API を作成する](https://gitlab.com/gitlab-org/gitlab/-/issues/451509)
  - 注: 初期バッジ読み込みは[リクエスト](https://gitlab.com/gitlab-com/gl-infra/production/-/issues/17746)経由で開始されました

### 3月〜4月（マイルストーン 16.11）

#### 目標

- GA 移行作業
  - GA に向けた [Inputs](https://gitlab.com/groups/gitlab-org/-/epics/12464)（完了）
    - ~~[catalog_resource_components.inputs を spec に変更する](https://gitlab.com/gitlab-org/gitlab/-/issues/443662)~~（完了）
    - ~~[配列の CI 補間](https://gitlab.com/gitlab-org/gitlab/-/issues/407176)~~（完了）
  - GA に向けた[インストルメンテーション](https://gitlab.com/groups/gitlab-org/-/epics/12415)（完了）
    - ~~[コンポーネント利用追跡用のテーブル作成](https://gitlab.com/gitlab-org/gitlab/-/issues/440382)~~（完了）
  - GA に向けた[リリースプロセスの改善](https://gitlab.com/groups/gitlab-org/-/epics/12338)
    - `release-cli` の GA 前[タスク](https://gitlab.com/gitlab-org/gitlab/-/issues/442066)（検証中）
    - ~~[セルフマネージドコンポーネントのサポート](https://gitlab.com/gitlab-org/gitlab/-/issues/434260)~~（完了）
  - GA に向けた[詳細ページ](https://gitlab.com/groups/gitlab-org/-/epics/12336)
    - [相対 URL が CI/CD コンポーネント catalog のプロジェクト参照を壊す](https://gitlab.com/gitlab-org/gitlab/-/issues/450914)（FE 作業レビュー中 / BE 作業完了）
    - ~~[コンポーネントパスをデータベースから取得するのをやめ、パーツから構築する](https://gitlab.com/gitlab-org/gitlab/-/issues/441666)~~（完了）
    - ~~[コンポーネントタブの実験的ラベルを削除する](https://gitlab.com/gitlab-org/gitlab/-/issues/446052)~~（完了）
- CI Catalog UX 改善
  - ~~[コンポーネントにバッジを追加する](https://gitlab.com/gitlab-org/gitlab/-/issues/437893)~~（完了）
    - 注: バッジが CI Catalog に表示されるようになる前に、バックエンドの [Issue](https://gitlab.com/gitlab-org/gitlab/-/issues/451507) が残っています。
  - [詳細の情報を再整理する](https://gitlab.com/gitlab-org/gitlab/-/issues/438262)（レビュー中）

### 2月〜3月（マイルストーン 16.10）

#### 目標

- GA 移行作業
  - セルフマネージドユーザー向けコンポーネントを配布するための[セルフマネージドコンポーネントのサポート](https://gitlab.com/gitlab-org/gitlab/-/issues/434260#note_1783243937)（検証中）
  - [セマンティックバージョニング](https://gitlab.com/gitlab-org/gitlab/-/issues/427286)（完了）
  - Inputs の拡張
    - Boolean と数値の[サポート](https://gitlab.com/gitlab-org/gitlab/-/issues/434826)（完了）
    - [配列](https://gitlab.com/gitlab-org/gitlab/-/issues/407176)を使用したテキスト補間（検証中）
  - `release-cli` の GA 前[タスク](https://gitlab.com/gitlab-org/gitlab/-/issues/442066)（FE 完了 / BE 開発中）
- GA 向けテレメトリインストルメンテーション
  - [リリース実行時間のトラッキングを実装する](https://gitlab.com/gitlab-org/gitlab/-/issues/440474)（完了）
  - [コンポーネント利用追跡用のテーブル作成](https://gitlab.com/gitlab-org/gitlab/-/issues/440382)（開発中）
- [CI/CD コンポーネント](https://gitlab.com/groups/gitlab-org/-/epics/12336)の GA 対応
  - [`~latest` が最新のセマンティックバージョンを返す](https://gitlab.com/gitlab-org/gitlab/-/issues/442238)（完了）
  - [バージョンを SemVer 規則に従って移行する](https://gitlab.com/gitlab-org/gitlab/-/issues/444303)（完了）

### 1月〜2月（マイルストーン 16.9）

#### 現在の GA 移行リストの更新

- [セマンティックバージョニングの強制](https://gitlab.com/gitlab-org/gitlab/-/issues/427286)
  - [POC](https://gitlab.com/gitlab-org/gitlab/-/issues/427286#note_1753449388) が現在進行中でレビュー中 - `16.10` に継続
- 配列を使用した CI 補間のサポート
  - [テキスト補間を実装する](https://gitlab.com/gitlab-org/gitlab/-/issues/433002) - （完了）
  - [配列を使用した CI 補間](https://gitlab.com/gitlab-org/gitlab/-/issues/407176) - 優先度の高い[ブロッカー](https://gitlab.com/gitlab-org/gitlab/-/issues/434826)の後で `16.10` に継続
- スパイク
  - セルフマネージドユーザー向けにコンポーネントを配布するための[スパイク Issue](https://gitlab.com/gitlab-org/gitlab/-/issues/434260)
  - コンポーネントの使用回数を計算するための[スパイク Issue](https://gitlab.com/gitlab-org/gitlab/-/issues/438409)
- セキュリティに提供するための[脅威モデル](https://gitlab.com/gitlab-com/gl-security/product-security/appsec/threat-models/-/issues/43#note_1738526551)図が進行中 - セキュリティのフィードバック待ち。

#### その他のマイルストーン目標

- CI/CD catalog の UX を改善する
  - [デフォルトのソートをスター評価にする](https://gitlab.com/gitlab-org/gitlab/-/issues/437897) - キャパシティにより `16.10` に継続
  - [CI/CD Catalog で Markdown がレンダリングされない問題を修正する](https://gitlab.com/gitlab-org/gitlab/-/issues/431899)（完了）
- コンポーネントのヘルパー作業
  - [他のコンポーネントをテストするためのヘルパーとしてコンポーネントを提供する](https://gitlab.com/gitlab-org/gitlab/-/issues/430818) - `16.10` の優先度についてプロダクトの確認待ち
  - [GitLab が管理するコンポーネントをテストするためのコンポーネントツールキット](https://gitlab.com/gitlab-org/gitlab/-/issues/432772)（完了）
- バッジ
  - [catalog_verified_namespaces テーブルを作成する](https://gitlab.com/gitlab-org/gitlab/-/merge_requests/143003#note_1755745216)（完了）

### 12月〜1月（マイルストーン 16.8）

#### 目標

- コンポーネントへの初期テンプレート移行[リスト](https://gitlab.com/groups/gitlab-org/-/epics/12289#list)を完了する。
  - AutoDevOps の [Build コンポーネント](https://gitlab.com/components/autodevops/-/blob/main/templates/build.yml?ref_type=heads)と [Test コンポーネント](https://gitlab.com/gitlab-org/gitlab/-/issues/433265)は完了しているが、将来の非推奨化により `Test` が存在すべきかどうかについて議論中。
- Catalog 詳細ページの UI を改善する [[1](https://gitlab.com/gitlab-org/gitlab/-/issues/421922), [2](https://gitlab.com/gitlab-org/gitlab/-/issues/431899)]
- インデックスページに[「あなたのリソース」](https://gitlab.com/gitlab-org/gitlab/-/issues/433013)タブを実装する
- catalog 詳細ページに[コンポーネント](https://gitlab.com/gitlab-org/gitlab/-/issues/424967)タブを追加する
  - [フィーチャーフラグ](https://gitlab.com/gitlab-org/gitlab/-/issues/426443)を展開する前に BE/FE のコラボレーションが必要。
- [配列と !reference のテキスト補間](https://gitlab.com/gitlab-org/gitlab/-/issues/433002)を完了させて Inputs を GA 対応にする。

### 11月〜12月（マイルストーン 16.7）

[CI Catalog - ページ & ナビゲーション](https://gitlab.com/groups/gitlab-org/-/epics/11841)

- 100% 完了、`16.7` で提供
- ステータス: 2023-12-08 時点で、最後の [MR](https://gitlab.com/gitlab-org/gitlab/-/merge_requests/135403) がマージされ、Catalog が `explore` ナビゲーションに恒久的に表示されるようになりました。

[CI Catalog - 検索 & フィルター](https://gitlab.com/groups/gitlab-org/-/epics/10918)

- 100% 完了、`16.7` で提供
- ステータス: すべてのベータ作業が本番稼動中。
- リスク/ブロッカー: ベータ作業完了。

[CI Catalog - リリースプロセスの改善](https://gitlab.com/groups/gitlab-org/-/epics/11842)

- 100% 完了、`16.7` で提供
- ステータス: 2023-12-01 に、オンとオフの切り替えが完了し、すべてのベータ作業を完了するため本番稼動しました。
- リスク/ブロッカー: ベータ作業完了。

### 10月〜11月（マイルストーン 16.6）

- CI Catalog - ページ & ナビゲーション
  - [x] [共有コンポーネントを Free ティアに移動する](https://gitlab.com/gitlab-org/gitlab/-/issues/428068)
  - [x] [グローバル CI/CD Catalog のルートとナビゲーションを追加する](https://gitlab.com/gitlab-org/gitlab/-/issues/427938)
  - [x] [グローバル catalog を Explore ナビゲーションに追加することについて Foundations と調整する](https://gitlab.com/gitlab-org/gitlab/-/issues/428145#note_1617272549)
  - [x] [コンポーネントの README タブをデフォルトビューにする](https://gitlab.com/gitlab-org/gitlab/-/issues/428936)
  - [x] [catalog resource プロジェクトにインジケーターを追加する](https://gitlab.com/gitlab-org/gitlab/-/issues/394818)
  - [x] [グローバル CI Catalog に向けて Ci::Catalog::Listing を準備する](https://gitlab.com/gitlab-org/gitlab/-/issues/428444)
  - [x] [GraphQL Catalog コードを FOSS に移動する](https://gitlab.com/gitlab-org/gitlab/-/issues/427927)
  - [x] [Catalog 詳細ページからフォーク数を削除する](https://gitlab.com/gitlab-org/gitlab/-/issues/428064)
  - [x] [コンポーネントタブのコードスニペットにコピーボタンを追加する](https://gitlab.com/gitlab-org/gitlab/-/issues/426755)
  - [x] [コンポーネント詳細のメタデータがない場合の空の状態](https://gitlab.com/gitlab-org/gitlab/-/issues/429273)
  - [x] [GraphQL にグローバル Catalog 引数を追加する](https://gitlab.com/gitlab-org/gitlab/-/issues/429103)
  - [ ] [グローバルページの Vue アプリケーションを追加する](https://gitlab.com/gitlab-org/gitlab/-/issues/427939) `~workflow::in review`
  - [ ] [ciCatalogResource が fullpath 引数を受け入れるようにする](https://gitlab.com/gitlab-org/gitlab/-/issues/429100) `~workflow::in dev`
  - [ ] [ciCatalogResource に components フィールドを追加する](https://gitlab.com/gitlab-org/gitlab/-/issues/425726) `~workflow::in dev`
  - [ ] [新しいコンポーネントタブを追加する](https://gitlab.com/gitlab-org/gitlab/-/issues/424967)
  - [ ] [FF ロールアウト ci_catalog_components_tab](https://gitlab.com/gitlab-org/gitlab/-/issues/426443)
  - [ ] [Catalog resources クエリのスコープに名前空間を追加する](https://gitlab.com/gitlab-org/gitlab/-/issues/429382)
  - [ ] [ciCatalogResources から projectPath 引数を削除する](https://gitlab.com/gitlab-org/gitlab/-/issues/429636)
- CI Catalog - 検索 & フィルター
  - [x] [GraphQL 検索フィルターと created_at による ciCatalogResources のソートを追加する](https://gitlab.com/gitlab-org/gitlab/-/issues/429117)
  - [x] [CI Catalog のデータベースインデックスを作成する](https://gitlab.com/gitlab-org/gitlab/-/issues/428443)
  - [x] [Ci::Catalog::Listing で名前と説明を非正規化する](https://gitlab.com/gitlab-org/gitlab/-/issues/427928)
  - [ ] [検索バーを追加する](https://gitlab.com/gitlab-org/gitlab/-/issues/393214) `~workflow::in review`
  - [ ] [バージョンが作成/削除されたときに catalog_resource.latest_released_at を更新する](https://gitlab.com/gitlab-org/gitlab/-/issues/427791)
- CI Catalog - リリースプロセスの改善
  - [x] [catalog resource をドラフトとしてマークするためのミューテーションを追加する](https://gitlab.com/gitlab-org/gitlab/-/issues/428439)
  - [x] [コンポーネント YAML ファイルへのフルパスを保持する path カラムを追加する](https://gitlab.com/gitlab-org/gitlab/-/issues/429256)
  - [x] [リリースに推奨される方法を反映するようにドキュメントを更新する](https://gitlab.com/gitlab-org/gitlab/-/issues/429271)
  - [x] [コンポーネントファイルをスキャンする正規表現を修正する](https://gitlab.com/gitlab-org/gitlab/-/issues/430344)
  - [x] [リリース作成時にカタログリソースのコンポーネントをスキャンしてメタデータを収集する](https://gitlab.com/gitlab-org/gitlab/-/issues/415413)
  - [ ] [Version アソシエーションを使用するように catalog resources のリリースロジックを更新する](https://gitlab.com/gitlab-org/gitlab/-/issues/429707) `~workflow::in review`
  - [ ] [既存の catalog resources に状態を更新しメタデータを追加するマイグレーションを作成する](https://gitlab.com/gitlab-org/gitlab/-/issues/416292)
- [Inputs の拡張]の完了
  - [x] [入力に default: 値を定義する options: をサポートする](https://gitlab.com/gitlab-org/gitlab/-/issues/393401)

### 2023年10月2日の週

#### 目標

- [フロントエンド CI Catalog 詳細ページの作業](https://gitlab.com/gitlab-org/gitlab/-/issues/?sort=popularity&state=opened&label_name%5B%5D=group%3A%3Apipeline%20authoring&label_name%5B%5D=Category%3AComponent%20Catalog&label_name%5B%5D=frontend&milestone_title=16.5&or%5Blabel_name%5D%5B%5D=workflow%3A%3Ain%20dev&or%5Blabel_name%5D%5B%5D=workflow%3A%3Ain%20review&first_page_size=20)
- [リリース時にコンポーネントをスキャンする](https://gitlab.com/gitlab-org/gitlab/-/issues/415413)と[リリースソートを追加する](https://gitlab.com/gitlab-org/gitlab/-/issues/408382)

### 2023年9月25日の週（マイルストーン 16.5）

#### チームキャパシティ

- バックエンドエンジニア 3名（Leaminn、Avielle、Laura）
- フロントエンドエンジニア 1名（Frédéric）

#### 目標

- [x] [https://gitlab.com/gitlab-org/gitlab/-/issues/387632](https://gitlab.com/gitlab-org/gitlab/-/issues/387632) `expand_vars` が使用された場合にセキュリティ上の理由でエラーが発生するよう、`inputs:` 構文で変数のサポートを追加する。~workflow::in review
- [ ] [https://gitlab.com/gitlab-org/gitlab/-/issues/408382](https://gitlab.com/gitlab-org/gitlab/-/issues/408382) CI Catalog に `released` ソートを追加する。
- [ ] [https://gitlab.com/gitlab-org/gitlab/-/issues/411438](https://gitlab.com/gitlab-org/gitlab/-/issues/411438) 配列を使用した CI 補間をサポートする。
- [ ] [https://gitlab.com/gitlab-org/gitlab/-/issues/415413](https://gitlab.com/gitlab-org/gitlab/-/issues/415413) リリース作成時に catalog resource のコンポーネントをスキャンする。
- [ ] [https://gitlab.com/gitlab-org/gitlab/-/issues/424962](https://gitlab.com/gitlab-org/gitlab/-/issues/424962) 現在の右側カラムを Catalog ヘッダーに配置する。- ~workflow::in review
- [ ] [https://gitlab.com/gitlab-org/gitlab/-/issues/424966](https://gitlab.com/gitlab-org/gitlab/-/issues/424966) 現在のコンテンツを含む README タブを追加する。

### 2023年9月18日の週（マイルストーン 16.5 の最初の週）

#### チームキャパシティ

- バックエンドエンジニア 4名（Avielle、Laura、Kasia、Leaminn）
- フロントエンドエンジニア 1名（Fred）

#### 目標

- [ ] [https://gitlab.com/gitlab-org/gitlab/-/issues/387632](https://gitlab.com/gitlab-org/gitlab/-/issues/387632) `expand_vars` が使用された場合にセキュリティ上の理由でエラーが発生するよう、`inputs:` 構文で変数のサポートを追加する。~workflow::in review
- [ ] [https://gitlab.com/gitlab-org/gitlab/-/issues/415413](https://gitlab.com/gitlab-org/gitlab/-/issues/415413) リリース作成時に catalog resource のコンポーネントをスキャンする。
- [ ] [https://gitlab.com/gitlab-org/gitlab/-/issues/408382](https://gitlab.com/gitlab-org/gitlab/-/issues/408382) CI Catalog に `released` ソートを追加する。
- [ ] [https://gitlab.com/gitlab-org/gitlab/-/issues/424962](https://gitlab.com/gitlab-org/gitlab/-/issues/424962) 現在の右側カラムを Catalog ヘッダーに配置する - ~workflow::in review
- [ ] [https://gitlab.com/gitlab-org/gitlab/-/issues/415637](https://gitlab.com/gitlab-org/gitlab/-/issues/415637) 入力の下にオプションの説明フィールドを追加する - コミュニティコントリビューターが担当

### 2023年9月11日の週（マイルストーン 16.4 の最終週）

#### チームキャパシティ

- バックエンドエンジニア 2名
- %16.4 の `security` 優先事項はほぼ完了しているため、%16.4 後半はよりバックエンドにフォーカスします

#### 目標

- [ ] [https://gitlab.com/gitlab-org/gitlab/-/issues/415413](https://gitlab.com/gitlab-org/gitlab/-/issues/415413) リリース作成時に catalog resource のコンポーネントをスキャンする。
- [ ] [https://gitlab.com/gitlab-org/gitlab/-/issues/411438](https://gitlab.com/gitlab-org/gitlab/-/issues/411438) へのスパイクフォローアップ

### 2023年9月4日の週（マイルストーン 16.4）

#### チームキャパシティ

- バックエンドエンジニア 0.5名
  - %16.4 の `security` 優先事項のため、そちらへのフォーカスにより週次目標リストが短くなります。
  - `needs: parallel: matrix` の機能追加として [https://gitlab.com/gitlab-org/gitlab/-/issues/423456](https://gitlab.com/gitlab-org/gitlab/-/issues/423456) に取り組んでいます。

#### 目標

- [x] [https://gitlab.com/gitlab-org/gitlab/-/issues/418996](https://gitlab.com/gitlab-org/gitlab/-/issues/418996) 最終バージョンが削除された場合に catalog resource をドラフトとしてマークする。

### 2023年8月28日の週（マイルストーン 16.4）

#### チームキャパシティ

- バックエンドエンジニア 1.5名
  - %16.4 の `security` 優先事項のため、そちらへのフォーカスにより週次目標リストが短くなります。
  - `needs: parallel: matrix` の機能追加として [https://gitlab.com/gitlab-org/gitlab/-/issues/423456](https://gitlab.com/gitlab-org/gitlab/-/issues/423456) に取り組んでいます。

#### 目標

- [x] [https://gitlab.com/gitlab-org/gitlab/-/issues/411394](https://gitlab.com/gitlab-org/gitlab/-/issues/411394) 使用されているコンポーネント数のインストルメンテーションを追加する。
- [ ] [https://gitlab.com/gitlab-org/gitlab/-/issues/418996](https://gitlab.com/gitlab-org/gitlab/-/issues/418996) 最終バージョンが削除された場合に catalog resource をドラフトとしてマークする。

### 2023年8月21日の週（マイルストーン 16.4 開始）

#### チームキャパシティ

- バックエンドエンジニア 3名

#### 目標

- [ ] [https://gitlab.com/gitlab-org/gitlab/-/issues/411394](https://gitlab.com/gitlab-org/gitlab/-/issues/411394) 使用されているコンポーネント数のインストルメンテーションを追加する。
- [x] [https://gitlab.com/gitlab-org/gitlab/-/issues/415853](https://gitlab.com/gitlab-org/gitlab/-/issues/415853) 更新されたディレクトリ構造に対応する CI コンポーネントフェッチを更新する - 今週中にマージ予定。
- [ ] [https://gitlab.com/gitlab-org/gitlab/-/issues/409846](https://gitlab.com/gitlab-org/gitlab/-/issues/409846) CI 設定読み込みの SSOT を作成する作業を継続する
- [ ] [https://gitlab.com/gitlab-org/gitlab/-/issues/411438](https://gitlab.com/gitlab-org/gitlab/-/issues/411438) 配列を使用した CI 補間スパイク作業を継続する。

### 2023年8月14日の週（マイルストーン 16.3 終了）

#### チームキャパシティ

- バックエンドエンジニア 3名
- フロントエンドエンジニア 2名

#### 目標

- [x] [https://gitlab.com/gitlab-org/gitlab/-/issues/409041](https://gitlab.com/gitlab-org/gitlab/-/issues/409041) catalog resource の最新バージョンのパイプラインステータスを表示する。
- [x] [https://gitlab.com/gitlab-org/gitlab/-/issues/415287](https://gitlab.com/gitlab-org/gitlab/-/issues/415287) 他の Issue をアンブロックするために catalog_resource_components テーブルを作成する。
- [ ] [https://gitlab.com/gitlab-org/gitlab/-/issues/412948](https://gitlab.com/gitlab-org/gitlab/-/issues/412948) 名前空間 catalog の権限を更新してリゾルバーを更新する
- [ ] [https://gitlab.com/gitlab-org/gitlab/-/issues/409846](https://gitlab.com/gitlab-org/gitlab/-/issues/409846) CI 設定読み込みの最後の [MR](https://gitlab.com/gitlab-org/gitlab/-/issues/409846#implementation-plan) を完了する

### 2023年8月7日の週（マイルストーン 16.3）

#### チームキャパシティ

- バックエンドエンジニア 1.5名
- フロントエンドエンジニア 2名

#### 目標

- [x] [https://gitlab.com/gitlab-org/gitlab/-/issues/418785](https://gitlab.com/gitlab-org/gitlab/-/issues/418785) CI Catalog を premium 機能にする。
- [x] [https://gitlab.com/gitlab-org/gitlab/-/issues/390458](https://gitlab.com/gitlab-org/gitlab/-/issues/390458) 入力タイプのバリデーション。
- [ ] [https://gitlab.com/gitlab-org/gitlab/-/issues/409041](https://gitlab.com/gitlab-org/gitlab/-/issues/409041) catalog resource の最新バージョンのパイプラインステータスを表示することに関連する。
- [ ] [https://gitlab.com/gitlab-org/gitlab/-/issues/415287](https://gitlab.com/gitlab-org/gitlab/-/issues/415287) 他の Issue をアンブロックするために catalog_resource_components テーブルを作成する。
- [ ] [https://gitlab.com/gitlab-org/gitlab/-/issues/415853](https://gitlab.com/gitlab-org/gitlab/-/issues/415853) 更新されたディレクトリ構造に対応する CI コンポーネントフェッチを更新する。

</details>
