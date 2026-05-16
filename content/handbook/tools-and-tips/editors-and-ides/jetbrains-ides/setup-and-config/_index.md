---
title: "JetBrains 共通のセットアップと設定"
no_list: true
upstream_path: /handbook/tools-and-tips/editors-and-ides/jetbrains-ides/setup-and-config/
upstream_sha: 6f672d050777a6a6cb33fc5f31ccf71ebdd5b812
translated_at: "2026-05-08T00:00:00Z"
translator: claude
stale: false
lastmod: "2025-05-15T23:00:58-07:00"
---

## 概要

JetBrains IDE は標準化されているため、セットアップと設定情報の多くはすべての IDE に当てはまり、このページに集約されています。

個別の IDE 固有のセットアップ・設定・その他の情報は、[Individual IDEs](../individual-ides) 配下のサブページにあります。その場合は、特定の IDE のサブページの該当セクションへのリンクが提供されます。

## ヘルプを得る

1. ヘルプが必要な場合は、[Chat Groups](../#chat-groups) のいずれかで質問してください！

## IDE のインストール

1. 取り組むプロジェクトに使う IDE を決めます:
    - Ruby/Rails/JS には [RubyMine](../individual-ides/rubymine)
    - golang には [GoLand](../individual-ides/goland)
    - 純粋な JavaScript/TypeScript には [Webstorm](../individual-ides/webstorm)
    - JVM/Java/Kotlin には IDEA
    - Rust には CLion
1. GitLab 社員であれば、必要な IDE の [License](../licenses) を申請して取得できます。
1. [JetBrains Toolbox](https://www.jetbrains.com/toolbox-app/) をインストールします。
1. JetBrains Toolbox を使って必要な IDE をインストールします。

この時点で IDE を起動し、取り組むプロジェクトを開けるはずです。基本的なタスクの場合、ほとんどはデフォルトで「すぐに動作」します。これは JetBrains IDE を使う良いところの 1 つです！

**ただし、RubyMine 配下の GitLab Rails モノリスのような非常に大規模で複雑なプロジェクトは、その例外になることがあります。詳細についてはこのページの残りの手順を続けてください**。

## インデックス

インデックスに関連して最も重要なことは、適切な除外フォルダーをセットアップすることです。下記の [Set up excluded folders](#set-up-excluded-folders) セクションを参照してください。

### インデックス作成の概要

JetBrains IDE を強力にしている要素の 1 つは、独自のインデックス作成技術です。これによりプロジェクトと依存コードのすべてがインデックスされ、プロジェクト全体にわたる強力でほぼ瞬時の検索とナビゲーションが可能になります。

ただし、新しいプロジェクトを初めて開いたとき、またはプロジェクトに大きな更新を取り込んだときは、特に低速のマシンではインデックスの更新に時間がかかることがあります。

そして、200 万行を超える Ruby コードと、誰も知らないほど大量の gem コード依存を持つ GitLab Rails モノリスのような非常に大規模なプロジェクトでは、ごく最初のインデックス作成は *非常に* 長くかかることがあり、マシンによっては 15～20 分以上かかります。ただし、その初回のインデックス作成後は、新しい変更のプルやブランチ切り替え後の増分インデックス作成は通常 1 分程度で済みます。

[適切な除外フォルダーをセットアップ済み](#set-up-excluded-folders) であれば、ここでの最良のアドバイスはただ「忍耐強く待つ」ことです。良いニュースは、これがプロジェクトを最初に開いたときや新しい変更をプルしたときの一度きりで済むことです。この機会にちょっとした休憩を取り、ストレッチでもしてみましょう… 🧘🏼

### 共有インデックス

JetBrains は [RubyMine 用共有インデックス](https://www.jetbrains.com/help/ruby/shared-indexes.html)（および他の IDE 用）のサポートを提供しており、これは GitLab プロジェクトを初めてセットアップする人のインデックス作成時間を大幅に短縮できる可能性があります。

ただし、これは設定プロセスがかなり手間取るようです。共有インデックスのセットアップと保守を手伝いたい方は、ぜひ [Chat Groups](../#chat-groups) でお知らせください！

## 除外フォルダーのセットアップ

除外フォルダーをセットアップすることが重要です。さもないと、インデックス作成や検索に必要以上に時間がかかります。

これは RubyMine と GoLand では `Settings -> Project Structure`、WebStorm では `Settings -> Directories` の下にあります。

`gitlab` プロジェクトに対する RubyMine 除外フォルダーの現在の例を見たい場合は、Chad の `gitlab.iml` モジュールを次の場所で見つけ、`excludeFolder` を検索してください: <https://gitlab.com/jetbrains-ide-config/jetbrains-ide-config-gitlab/-/blob/master/dotidea/gitlab.iml>

または、[Configuration](#configuration) 配下の「他の人の設定をコピーする」アプローチのいずれかを使う場合、これらは設定に含まれます。

## テストルートのセットアップ

[テストソースルートディレクトリを適切にセットアップ](https://www.jetbrains.com/help/ruby/create-tests.html#mark_test_sources_root) すべきです。

`spec` と `ee/spec` の両方をテストルートとして追加してください。

これには、対象ファイルとテストファイルの間を簡単に行き来できる `Cmd-Shift-T` 「Go to Test Subject」アクションを動作させるなど、いくつかの効果があります。

既存のテストルートは `Settings -> Project Structure` で確認できます。

## メモリ設定で最大ヒープサイズを増やす

巨大な GitLab プロジェクトを扱うとき、RubyMine はインデックス作成／検索などで多くのメモリを使うことがあります。割り当てがあれば、**インデックス作成中にメモリ使用量が最大 10 ギガバイト以上に達する** ことも珍しくありません。

ワークステーションに余裕のあるメモリがあれば、多くのメモリを割り当てることでパフォーマンスが向上します。12 ギガバイトが良いスタートです。

1. `Help メニュー -> Change Memory Settings`
1. `Maximum heap size` を `12000` MiB、またはシステムパフォーマンスに支障をきたさずに割り当てられると思う値に変更します。64GB のメモリを積んだフルスペックの MacBook Pro なら、12GB の割り当てで問題ないでしょう。

## ターミナルから RubyMine でファイルを開く

これは OS レベルでセットアップでき、すべての種類のファイルで動作します。たとえば、すべての .rb ファイルを開くようにセットアップするには:
1, `Finder` で `*.rb` ファイルを開きます
2. 右クリックして `Get Info` を選択します
3, `Open With` を展開します
4. `RubyMine.app` を選択します
5. `Change All...` を選択します

## 設定

### UPDATE 2025-05

Toolbox Enterprise は [IDE Services スイートの IDE Provisioner](https://www.jetbrains.com/ide-services/ide-provisioner/) にリネームされました:

> *グローバル IDE 設定の伝播*
>
> *IDE Provisioner を使うと、組織内で実行されているすべての IDE インスタンスにグローバル IDE 設定を定義し伝播できます。カスタム VM オプションの設定、最大ヒープサイズの制限、デフォルトコードスタイルの定義、プロファイル単位、チーム単位、または会社全体でのその他のプロパティ管理が可能です。*

### UPDATE 2024-04

JetBrains はチーム設定共有を許可する取り組みの進捗を追える Issue として次を案内してくれました: [Make Settings Sync/new separate feature suitable for team settings sharing](https://youtrack.jetbrains.com/issue/IDEA-309002)

### UPDATE 2023-12

デモプレビューに基づくと、新しい [Toolbox Enterprise](https://www.jetbrains.com/ide-services/ide-provisioner/) の機能は、ついにチーム間で設定を共有する実用的で簡単な方法を提供してくれそうです。JetBrains は、私たちが必要とする機能は 2024 年中頃までに利用できるようになるはずだと述べています。ただし、その追加ライセンスコストは負担となる可能性があります。

### UPDATE 2023-11

Settings Repository 機能の非推奨化に伴い、JetBrains は [現時点ではチームメンバー間で設定を共有する、サポートされた非非推奨の方法は存在しない](https://youtrack.jetbrains.com/issue/IDEA-309002) ことを認めています。
これがその Issue の現在の説明です:

> The new Settings Sync works with the JetBrains account; it makes this solution inappropriate for team settings sharing when it's necessary to share only certain settings (code style, color schemes, etc) between team members (they have their own JB Accounts).
>
> We already have the Settings Repository plugin, but it can be used only with third-party sources, and we don't maintain this plugin for now.
> The import/export settings feature is not automated enough.
> This feature may be implemented along with making profiles for Settings Sync.

[`#jetbrains-ide-users` GitLab チームメンバー向けの内部 Slack チャンネル](https://gitlab.slack.com/archives/CR08PTQ6T) で、JetBrains は次のように示しています:
*"one of the possible solutions should be implemented in the scope of [Toolbox Enterprise](https://www.jetbrains.com/ide-services/ide-provisioner/), but AFAIK, there is no ETA for now"*

*ただし、自分の設定をリモート git リポジトリに同期したいだけで、必ずしも他者と共有する必要がない場合は、依然として可能です。*

Settings Repository プラグインの非推奨化（および修正予定がなさそうなバグがあること）に伴い、[Settings Sync 機能](https://www.jetbrains.com/help/ruby/sharing-your-ide-settings.html#IDE_settings_sync) がこれを行う選択肢のようです。これは下記の「JetBrains-supported option 1: Settings Sync」として記載されています。

TODO: したがって、この新しい情報を踏まえて以下のすべてのセクションは再編成と書き直しが必要かもしれません。

### TL;DR

JetBrains（RubyMine）を動作するように（特に GitLab で動作するように）設定したい場合:

1. もっとも確実なのは「Manual Option 1: Manually configure everything」でしょう。1 時間程度かかりますが、設定の使い方を学べます。
1. 急ぎの場合は「Manual option 2: Manually zip and copy IDE and Project config folders」を検討し、[Chat Groups](../#chat-groups) で誰かの設定フォルダーの zip を依頼してください。
1. 既存の設定をバックアップまたは転送したいだけなら、「JetBrains-supported option 1: Settings Sync」を検討してください。
1. JetBrains のパワーユーザーになる野望がある、またはすべての設定をソース管理下に置きたいタイプの人は、「JetBrains-supported option 2: Settings Repository」と「Manual option 3: Keep your `.idea` folder under source control」を参照してください。

### 概要

***注: この設定セクションは作業中です。特に、JetBrains の最近のバージョンで設定の管理／共有のオプションが変更されているためです。
持っているアップデートがあればぜひ貢献してください。***

JetBrains IDE ではほとんどの基本機能はすぐに動作しますが、コードスタイルとフォーマットに関する非常に具体的で厳密なルールを持つプロジェクト（GitLab など）に取り組む場合、プロジェクトの要件に合わせて IDE 設定を慎重にキュレートする必要があるかもしれません。たとえば、プロジェクトで定義されたすべてのコードフォーマットとリンティングルールに合わせるなどです。

理想的には、すでに誰かがキュレートし、プロジェクトに合わせて最新の状態を維持している既存の設定をインポートしたいでしょう。

残念ながら、これは思ったほど簡単ではなく、これは JetBrains IDE が大いに改善できる分野の 1 つです。これは下記でドキュメント化されている 5 つの異なるアプローチからも明らかです。

このセクションでは、これに対するいくつかの解決策を提供します。ただし、JetBrains を使い始めたばかりの方は、ぜひ [Chat Groups](../#chat-groups) でガイダンスやアドバイスを求めてください。

### 「IDE」設定 vs.「プロジェクト」設定

JetBrains は設定を 2 つの方法で保管します: 「IDE に保管」と「プロジェクトに保管」です:

- 「IDE」設定はホームディレクトリの下、たとえば次のようなディレクトリに保管されます:
`/Users/cwoolley/Library/Application Support/JetBrains/RubyMine2023.2`
- 「プロジェクト」設定はプロジェクトのルートにある `.idea` フォルダーに保管されます。

そして、一部の設定タイプではこれらのうちどちらを使うかを選択できます。可能なものはすべてプロジェクトに保管するのがおそらく良いでしょう。

セットアップ方法は以下のとおりです:

1. `Settings -> Editor -> Code Style -> Scheme -> "Project"`
1. `Settings -> Editor -> Inspections -> Scheme -> "Project Default"`
1. `Settings -> Editor -> File and Code Templates -> "Project"`

### Manual option 1: すべて手動で設定する

設定に手動で入り、すべての変更を自分で行うことができます。

Chad Woolley は、JetBrains IDE を最適かつ互換性のある方法で動作させる、特に GitLab モノレポのために手動で設定する方法のドキュメントを保守しています。

時間があれば、これがもっともシンプルなアプローチです。また、設定全体をコピーする他のアプローチよりも、より多くの制御を持つことができます。

これを行いたい場合は、これらの指示に従うだけです。30 分から 1 時間ほどかかるはずです。

- [Chad Woolley の JetBrains IDE セットアップノート](https://gitlab.com/cwoolley-gitlab/cwoolley-gitlab/-/blob/main/gitlab-workstation-setup-notes.md#jetbrains-ide-setup)
- [Chad Woolley のキュレーションされた JetBrains 上書き設定リスト](https://github.com/thewoolleyman/workstation/blob/master/README.md#jetbrains-overridden-settings)

これらは、複数年・複数プロジェクト・複数 IDE バージョンにわたって進化してきたため、やや散らかっています。Chad は、これらのすべての指示をこのページとサブページに移行・統合したいと考えています、できるだけ近いうちに™️。

### Manual option 2: 手動で IDE とプロジェクトの設定フォルダーを zip 化してコピーする

すでにプロジェクトを設定済みの誰かに、上記の IDE とプロジェクトの設定フォルダーの zip コピーをもらいます。これには辞書の上書きエントリ以外の個人情報は *含まれないはず* ですが、一部のプラグインは独自の設定に個人情報を保管することがあります。

また、両者がまったく同じ IDE 製品バージョンを使っていることを確認すべきです。

そうすれば、自分のフォルダーをバックアップ（念のため）し、IDE を閉じ、相手の zip を同じ場所に展開できます。これで理論的にはすべての設定が手に入るはずです。

また、Chad Woolley は `gitlab` プロジェクトの現在の `.idea` プロジェクト設定フォルダーをソース管理下にコミットして更新し続けています（次のセクションでこれを行う方法の指示を参照）。

ここから複製、またはこの設定からファイルをコピーできます:
<https://gitlab.com/jetbrains-ide-config/jetbrains-ide-config-gitlab/-/tree/master/dotidea>

### Manual option 3: `.idea` フォルダーをソース管理下に置く

プロジェクト（IDE 設定ではなく）設定をソース管理下に保ちたい場合、これを手動で行えます。Chad の指示はこちら:

<https://gitlab.com/jetbrains-ide-config/jetbrains-ide-config-gitlab/-/blob/master/README.md#project-level-config>

### JetBrains がサポートするオプション

JetBrains は設定を共有するための 3 つの異なるオプションを提供しており、次のページに記載されています（RubyMine を例として使用）:

<https://www.jetbrains.com/help/ruby/sharing-your-ide-settings.html>

1. Settings Sync
1. Settings Repository（非推奨）
1. Settings のエクスポート／インポート

それぞれにトレードオフがあります。詳細は次のセクションを参照してください。

#### JetBrains-supported option 1: Settings Sync

注: Settings Repository の非推奨化に伴い、これが JetBrains によってサポートされる、設定を git リポジトリに保管できる唯一のオプションです（上記の [`UPDATE 2023-11`](#update-2023-11) ノートを参照）。

このアプローチはここに記載されています: <https://www.jetbrains.com/help/ruby/sharing-your-ide-settings.html#IDE_settings_sync>

~~このアプローチの主な欠点は、これは JetBrains アカウントを通じて行われるため、他のチームメンバーと共有する方法はないように見えることです。そのため、自分の設定を他の人と共有したい、または相手の設定を自分と共有してほしい場合は、他のアプローチを使う必要があります。~~

更新: RubyMine 2022.3 以降、これは（Settings Repository と同様に）[IDE 設定ディレクトリ](https://www.jetbrains.com/help/idea/directories-used-by-the-ide-to-store-settings-caches-plugins-and-logs.html#config-directory) のディスク上のローカル git リポジトリにも設定を保管します。MacOS では次の場所にあります:
`/Users/cwoolley/Library/Application Support/JetBrains/<product><version>/settingsSync`。

リポジトリのリモートへの push を手動で管理することもでき、マシン外でバックアップしたい、または他のチームメンバーが個別の設定ファイルを閲覧／コピーできるようにしたい場合に使えます。

このアプローチの欠点は、これは依然として IDE レベルの設定のみを管理し、プロジェクトの `.idea` フォルダー内のプロジェクトレベルの設定は管理しないということです。`.idea` フォルダーもバックアップしたい場合は、上記のとおり手動で管理する必要があります。

#### JetBrains-supported option 2: Settings Repository

注: このオプションは現在 JetBrains によって非推奨化され、サポートされていません（上記の [`UPDATE 2023-11`](#update-2023-11) ノートを参照）。
サポートされている上記の Settings Sync オプションを使うべきです。

これは IDE レベルの設定（プロジェクトレベルではない）を git リポジトリに同期するものです。

このアプローチにはいくつかの欠点があります:

1. IDE レベルの設定のみを管理し、プロジェクトレベルの設定は管理しない
1. セットアップが複雑で、HTTPS 認証情報を持つカスタムリポジトリのセットアップが必要
1. すべての git 機能をサポートしない（例: `.gitignore` は無視されるようです）
1. JetBrains から十分にサポートされていないようです。特に、IDE にバンドルされなくなりプラグインになって以降。

利点は、IDE レベルの設定を、上記の「Settings Sync」のように JetBrains クラウドではなく、自分のリポジトリのソース管理下に置けることです。これは必要に応じて自分で共有できることも意味します。

ドキュメント:

1. ここに 2 番目のアプローチとして言及されています: <https://www.jetbrains.com/help/idea/sharing-your-ide-settings.html>
1. ...そこから、実際の指示の古いバージョンのドキュメントへリンクされます: <https://www.jetbrains.com/help/ruby/2022.2/sharing-your-ide-settings.html#settings-repository>
1. ...また、Chad がこれに関して書いた指示もここで見られます: <https://gitlab.com/jetbrains-ide-config/jetbrains-ide-config-gitlab/-/blob/master/README.md#ide-level-config>

#### JetBrains-supported option 3: 設定のエクスポート／インポート

このアプローチはここにドキュメント化されています: <https://www.jetbrains.com/help/ruby/sharing-your-ide-settings.html#import-export-settings>

これは `File -> Manage IDE Settings -> Import/Export Settings` の下にあります。

私（Chad）はこのアプローチをあまりテストしていません。*おそらく* IDE レベルの設定のみを扱うと思います。

これを試して詳細を学んだ場合は、ぜひこのセクションをアップデートしてください。
