---
title: "Navigation リポジトリ"
upstream_path: /handbook/marketing/digital-experience/engineering/navigation-repository/
upstream_sha: 2d678e92f3fbc59843a2973bbfa95041c6aef07f
translated_at: "2026-04-30T12:00:00Z"
translator: claude
stale: false
lastmod: "2025-10-01T15:53:53-04:00"
---

[Navigation リポジトリ](https://gitlab.com/gitlab-com/marketing/digital-experience/navigation)（`be-navigation` とも呼ばれます）は、マーケティング Web サイトの他の部分とは独立して更新・保守される別パッケージです。これにより、1 か所で変更を加えれば、消費するリポジトリが単一のソース・オブ・トゥルースから取り込めるようになります。Navigation は現在、[Digital Experience チーム](/handbook/marketing/digital-experience/)が保守しています。

Navigation は[セマンティックバージョニング](https://semver.org/)に従っています。現在のリリース済みバージョンは、この [npm ページ](https://www.npmjs.com/package/be-navigation)の `Versions` で確認できます。

## 変更を加える

Navigation データは Navigation のコードとは別物で、Contentful から取得されます。変更を反映するには、変更の性質に応じて 2 つの方法があります。

### コンテンツの変更

Navigation データは Contentful 内に保管され、Navigation リポジトリに依存するプロジェクトで利用されます。その後、このデータは Navigation コンポーネントに転送されます。以下に、Contentful 内のナビゲーション用データを含む 2 つのエントリを示します。

1. [Navigation Entry](https://app.contentful.com/spaces/g1m12f5de7m9/entries/4ANorm7zz94uE5N6oexbdi)
2. [Footer Entry](https://app.contentful.com/spaces/g1m12f5de7m9/entries/QxdoqHd5ixKTwFjIHYvYI)

ローカライゼーションデータはこのコンテキスト内で管理されており、子エントリは言語別に整理され、各エントリは `[fr-fr] - Name of the entry` のように対応する言語コード形式で命名されます。

変更を本番環境で反映させるには、Contentful でデータを **publish** する必要があります。その後、対応するプロジェクトのパイプラインが正常に実行されると、数分以内に更新されたデータが Web サイトでアクセス可能になります。

### 構造的な変更

Navigation リポジトリへの変更をリクエストするには、[こちら](https://gitlab.com/gitlab-com/marketing/digital-experience/navigation/-/issues/new)で Issue を作成し、Digital Experience チームによってトリアージされるようにしてください。

ナビゲーションの変更をセルフサーブで行いたい場合は、[readme](https://gitlab.com/gitlab-com/marketing/digital-experience/navigation/-/blob/main/README.md) の指示に従ってプロジェクトをローカルにクローンしてください。変更を加えたら、[Digital Experience チーム](/handbook/marketing/digital-experience/#groups-metrics--team-members)のメンバーをタグ付けして MR をレビューしてもらってください。私たちはナビゲーションリンクのテストを継続的に実施し、ナビゲーション変更に関する研究やデザインスパイクを行っているので、すべての変更は私たちのチームメンバーの承認が必要です。

**ナビゲーションを変更する際は、AB テストの存在を必ず確認してください**。最も手早い確認方法は、Navigation リポジトリのファイルシステムを見ることです。`Navigation` フォルダーに加えて `NavigationB`（または類似ファイルを含む別の重複名）のフォルダーはありますか? もしあれば、両方のフォルダーで変更を加えて、両方のバリアントが更新を反映するようにしてください。

**注意**: 2 つの JSON ファイルが **mocks** という名前のフォルダーに保管されています。このフォルダー内のデータはテスト目的専用であり、変更しても本番データには影響しません。

## リリース

現在、私たちのチームは新しいナビゲーション変更を **水曜日** にバンドルでリリースしています。これは必要に応じて調整可能で、大きな破壊的変更は通常、独自のバージョンとしてリリースすることを選択します。

リリースポストの日にはナビゲーションのマイナーリリースやメジャーリリースのデプロイは避けています。

### リリースには主に 4 つのステップがあります

1. リリース用の Issue 準備
2. npm への新バージョンのパブリッシュ
3. ナビゲーションを消費するリポジトリを新バージョンにポイントするように更新
4. Contentful で行った変更のパブリッシュ

### 詳細手順

1. `Navigation release: Version x.x.xx` というタイトルの新しい Issue を作成し、このリリースに含まれる MR と Issue へのリンクを含めます。この Navigation Issue は、四半期のナビゲーションリリースエピック（例: [FY23Q3 epic](https://gitlab.com/groups/gitlab-com/marketing/digital-experience/-/epics/155)）に追加するべきです。すでに自分にアサインされている場合は、このステップをスキップできます。
1. `main` から、すべての変更を含む新しいブランチを作成します。
1. `package.json` のバージョン番号をインクリメントします。
1. /dist フォルダーをビルドします - ```yarn build```（オプションで [yarn link を使った詳細なローカルレビュー](#detailed-local-review-before-a-nav-release-with-yarn-link)を使用）
1. npm にパブリッシュします - ```npm publish```（注意: ```npm login``` で npm の認証情報を使ってログインする必要があるかもしれません）
1. 変更を `origin/main` にマージします。
1. パッケージがパブリッシュされると、[消費するリポジトリで更新](#using-navigation-in-other-repositories)できる状態になります。これには `Buyer Experience` と `www` リポジトリが含まれます。これらのリポジトリで `navigation-change` description テンプレートを使って MR を開きます。それらの MR へのリンクをアサインされた Navigation Release Issue に含めます。
1. Navigation Release Issue をクローズします。

「Please Choose a version of be-navigation from this list:」と表示される場合、これは指定した npm パッケージバージョンに問題があることを意味します。パッケージがパブリッシュされていることと、`package.json` に正しい `be-navigation` のバージョンが含まれていることを再度確認してください。

## 他のリポジトリで Navigation を使用する

ナビゲーションを消費するリポジトリ（たとえば www-gitlab-com や buyer-experience）でナビゲーションを更新するには:

- `package.json` に移動し、`be-navigation` の行を見つけ、最新バージョンにインクリメントします
- `npm install` を実行してパッケージを更新します
- 変更をコミットして、レビューアプリで広範囲にテストできるようにします
- レビューアプリがビルドされたら、バグや奇妙な挙動について以下を確認します。このコンポーネントはサイト全体のすべてのページにあることを覚えておいてください:
  - すべてのトップレベルナビゲーションヘッダーをクリックします。メニューは正しく表示されますか?
  - キーボードを使ってナビゲーションセクションのいずれかをタブで一通り操作します
  - Close、Login、Support の各ボタンが期待通りに動作するか確認します
  - Alliance Partners のロゴが正しく見えるか、Resources -> Get Started のアイコンが揃っているか確認します
  - フッターまでスクロールし、通常のリンク、`Cookie Preferences`、`Edit in Web IDE` をクリックして期待通りに動作するか確認します
  - モバイルビューに移動し、すべてのリンクをクリックします
- 何かおかしい点はありますか? 機能が壊れている場合は、Navigation リポジトリで Hotfix し、新バージョンをリリースします。軽微なバグの場合は、トリアージするための新しい Issue を作成します。

## メジャーリリース ナビゲーションチェックリスト

Buyer Experience リポジトリの「navigation change」というタイトルの MR テンプレートを使用できます。これには、ナビゲーションを徹底的に確認するための以下のチェック項目が含まれています:

_Chrome_

- [ ] **デスクトップ** ヘッダーの各ドロップダウンのリンクをテストする（特に login／free trial ボタン）
- [ ] **デスクトップ** フッターの各セクションのリンクをテストする（特に Edit in IDE／Page source リンク）
- [ ] **モバイル** ヘッダーの各セクションのリンクをテストする
- [ ] **モバイル** フッターの各セクションのリンクをテストする
- [ ] デスクトップで検索をテストする
- [ ] モバイルで検索をテストする
- [ ] ヘッダーのリンクをタブで操作してテストする
- [ ] フッターのリンクをタブで操作してテストする

_Safari_

- [ ] **デスクトップ** ヘッダーの各ドロップダウンのリンクをテストする（特に login／free trial ボタン）
- [ ] **デスクトップ** フッターの各セクションのリンクをテストする（特に Edit in IDE／Page source リンク）
- [ ] **モバイル** ヘッダーの各セクションのリンクをテストする
- [ ] **モバイル** フッターの各セクションのリンクをテストする
- [ ] デスクトップで検索をテストする
- [ ] モバイルで検索をテストする
- [ ] ヘッダーのリンクをタブで操作してテストする
- [ ] フッターのリンクをタブで操作してテストする

_Firefox_

- [ ] **デスクトップ** ヘッダーの各ドロップダウンのリンクをテストする（特に login／free trial ボタン）
- [ ] **デスクトップ** フッターの各セクションのリンクをテストする（特に Edit in IDE／Page source リンク）
- [ ] **モバイル** ヘッダーの各セクションのリンクをテストする
- [ ] **モバイル** フッターの各セクションのリンクをテストする
- [ ] デスクトップで検索をテストする
- [ ] モバイルで検索をテストする
- [ ] ヘッダーのリンクをタブで操作してテストする
- [ ] フッターのリンクをタブで操作してテストする

_注意: ナビゲーション変更を確認するためには、そのリポジトリでビルドされたページにアクセスする必要があります。たとえば、Web サイトの[ホームページ](https://about.gitlab.com)は `Buyer Experience` でビルドされるため、ナビゲーション変更を確認するにはレビューアプリのホームページを訪問できます。一方、[ハンドブック](/handbook/)は `www-gitlab-com` でビルドされるため、`www` レビューアプリでナビゲーション変更をテストするにはハンドブックページに移動する必要があります。_

## メジャー 5.0.0 ナビゲーションリリース

このバージョンには、以下のような大きな更新があります:

- Vue ライブラリを `2.6.x` から `2.7.x` に更新
- ローカル環境で `http://localhost:YOUR_PORT_NUMBER_HERE/stats.html` にアクセスすることでプロジェクトのバンドルサイズを確認できるようになりました。
- プロジェクトバンドラーが Webpack から Vite に変更され、バンドルサイズが 90% 削減されました。
- いくつかの軽微な変更があり、[こちら](https://gitlab.com/gitlab-com/marketing/digital-experience/navigation/-/issues/167)で確認できます。
- BE リポジトリの nuxt.config.js を更新しました。`be-navigation/dist/be-navigation.css` という行が `be-navigation/dist/style.css` に変更されました。
- 新しいバージョンの Navigation リポジトリを実行すると、ユーザーがすでに古いバージョンのリポジトリをインストール済みの場合に `dist` フォルダーの内容が更新されない問題に遭遇しました。これを修正するには、`dist` フォルダーを削除して再度 `yarn` を実行してください。
- このバージョン以降、**www-repo の nav プロジェクトはサポートされなくなります**。これは www-gitlab-com が **メジャーバージョン 4 に固定されなければならない** ことを意味します。最新のナビゲーションを使用したい場合は、[about.gitlab.com に Issue を開いてページを移行する](https://gitlab.com/gitlab-com/marketing/digital-experience/about-gitlab-com/-/issues/new?type=ISSUE)必要があります。

## www-gitlab-com リポジトリでナビゲーションを更新する方法

www と Buyer Experience を別々に更新するために、Navigation リポジトリに[新しい main ブランチ](https://gitlab.com/gitlab-com/marketing/digital-experience/navigation/-/tree/legacy-navigation-main)を作成しました。

- `legacy-navigation-main` から **fork** して、Navigation リポジトリで新しい MR を作成します
- 更新を完了し、`legacy-navigation-main` にマージします（または権限を持つ人にマージしてもらいます）
- すべての Issue がマージされ `legacy-navigation-main` の準備ができたら、`package.lock` ファイルでバージョンを更新します
- `npm publish` を実行して npm にバージョンをパブリッシュするか、誰かに依頼します
- [www リポジトリ](https://gitlab.com/gitlab-com/www-gitlab-com)で `package.lock` のナビゲーションバージョンを更新する新しい MR を開きます
- `yarn` コマンドを実行して yarn.lock ファイルを生成し、yarn.lock と package.lock の両方をコミットします
- レビュー／マージを依頼します

### 注意

www リポジトリのパッケージバージョンは **メジャーであってはなりません**。つまり `4.x.x` を超える値にはできません。

### yarn link によるナビゲーションリリース前の詳細なローカルレビュー

ナビゲーションへの変更をローカルでレビューしたい場合:

1. navigation フォルダーに cd します
1. `yarn build` を実行してプロジェクトをローカルでビルドします。
1. `yarn link` を実行してビルドされたパッケージを yarn にリンクします。
1. ナビゲーションを使用したいリポジトリに cd します
1. `yarn link be-navigation` を実行します。
1. `yarn && yarn dev` を実行してパッケージをインストールし、プロジェクトを開始します

ナビゲーションへの変更が BE または Dub リポジトリで利用可能になり、ローカル環境で広範にテストできるはずです。

## セマンティックバージョニングと alpha バージョンのリリース

ナビゲーションのより大きなバージョン（リンク追加程度を超えるもの）をリリースする場合、セマンティックバージョニングの [alpha ディレクティブ](https://semver.org/#spec-item-9)の使用を推奨します。

たとえば、ナビゲーションの `1.1.0` バージョンをリリースしようとしている場合、代わりに `1.1.0-alpha` バージョンをリリースすることを検討してください。その後、alpha バージョンを Buyer Experience などの消費するリポジトリに取り込んで、テストできます。

問題があれば、Navigation リポジトリで変更を加え、それらの変更を `1.1.0-beta` や `1.1.0-alpha.1` としてリリースし、テストし、というように、リリースに満足するまで「不安定な」alpha バージョンを継続的にリリースできます。

バグが修正されたら、同じコードを `1.1.0` というバージョンとして npm に再リリースし、すべてをマージします。

これは、同一のコードを新しいバージョンとして npm に再リリースすることを意味しますが、1 つのリリースで複数のマイナーバージョンをインクリメントしなくて済みます。

## ナビゲーションでの A/B テスト実行

私たちは LaunchDarkly を AB テストツールとして使用しています。ナビゲーションがバンドルされて他のリポジトリに取り込まれる仕組みのため、Navigation リポジトリ内の特定のアイテムをテスト用にターゲットすることはできません。ナビゲーション内で何かをテストしたい場合は、ナビゲーションコンポーネント全体の重複を作成し、その重複バージョンで変更を加え、完全に独立した 2 つのナビゲーションをリリースする必要があります。ABC テストを実施する場合は、ナビゲーションを 3 回重複する必要があります。

これは、変更があった場合に 2 つ以上の異なるナビゲーションを最新の状態に保つ必要があるため、複雑さの層が増えます。また、比較的軽量なパッケージのサイズが倍になります。このため、ナビゲーションテストを実施する場合は、**チームが本当に切実に持っている疑問** をテストするべきです。意思決定を駆動するためにデータが本当に必要なテストを実施するべきです（つまり、この変更は「とにかくやる」ものであり得ないか?）

2 つのナビゲーションコンポーネントがリリースされたら、Buyer Experience リポジトリで以下のように使用できます:

```text
<LaunchDarkly feature-flag="some-ab-test-id">

  <template #control>
    <SlpNavigation />
  </template>

  <template #experiment>
    <SlpNavigationB />
  </template>

</LaunchDarkly>
```

求めているデータによっては、ナビゲーション内の要素にクリックイベントを追加する必要があるかもしれません。これに関する質問は #digital-experience-team Slack チャンネルへどうぞ。現時点では `www-gitlab-com` リポジトリでテストを実行できる体制にはなっていません。
