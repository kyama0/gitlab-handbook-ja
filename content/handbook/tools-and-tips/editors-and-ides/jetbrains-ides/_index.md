---
title: "JetBrains IDE"
simple_list: true
upstream_path: /handbook/tools-and-tips/editors-and-ides/jetbrains-ides/
upstream_sha: 6f672d050777a6a6cb33fc5f31ccf71ebdd5b812
translated_at: "2026-05-08T00:00:00Z"
translator: claude
stale: false
lastmod: "2025-04-28T10:53:04-07:00"
---

## サブページ

JetBrains IDE 全般の設定と利用方法、および特定の IDE の使用方法については、サブページを参照してください。

## 概要

JetBrains は、主要なソフトウェア開発エコシステムすべてに対応した [強力な統合開発環境 (IDE) のスイート](https://www.jetbrains.com/products/) を提供しています。

学習曲線はやや急峻ですが、JetBrains IDE には投資に見合うだけの多くのメリットがあります。

1. **共通の UI**: 個別のアプリケーションでありながら、各 IDE は共通の UI と操作系を共有しているため、UX やキーバインドを学び直すことなく簡単に切り替えられます。
1. **強力な独自機能**: リファクタリング、インデックス作成、検索、型チェック、コードナビゲーションなどの独自サポートは、特に公式の言語サーバーサポートがない言語において、他のエディターエコシステムで利用できるものよりはるかに強力で高速なことが多いです。
1. **すぐに使える**: 言語／エコシステム特化型なので、多くの機能はカスタムプラグインや拡張を見つけたりインストールしたり設定したりすることなく「すぐに動作」します。たとえば ESLint や RuboCop はネイティブサポートされており、プラグインは不要です。ただし、「パワーユーザー」や複雑なプロジェクトでは設定をカスタマイズしたくなることが多いでしょう。
1. **キュレーションされたプラグインエコシステム** JetBrains のプラグインエコシステムは（主観的には）他のエディターエコシステムよりも「キュレーション」されています。IDE に組み込まれていない重要なツールのほとんどは JetBrains が公式にサポートするプラグインを提供しており（例: VueJS、Prettier、NodeJS など）、人気のある JetBrains 製以外のプラグインも 1 つか少数の選択肢しかありません。これは VS Code のように、各主要ツールやライブラリに対して数十の異なるプラグインがあり、明確な選択基準がなく、ときにキーバインドや動作で互いに衝突するエコシステムとは対照的です。

JetBrains IDE は多くの開発者に広く使われています。実際の利用者数は解釈が難しいことが多いです。なぜなら、ほとんどの調査や投票では各個別の IDE（例: RubyMine vs. PyCharm vs. IDEA）を、他の汎用エディター（例: vim、emacs、VS Code）と比較するからです。とはいえ、最近の調査に基づくと、現在のプロのソフトウェア開発者の約 15% が 1 つ以上の JetBrains IDE を使用しているとおおまかに推定されます。

## セットアップと設定

JetBrains IDE のインストールと設定方法については、[共通の JetBrains セットアップと設定](setup-and-config) ページを参照してください。

## 推奨事項

**セキュリティ上の理由から、プラグインで個人アクセストークン (PAT) を使用しないでください。GitLab Duo については、`ai_features` スコープを持つ API トークンを使用してください**

## デバッグ

デバッグのヒントについては、以下の IDE 別ページを参照してください。

- [RubyMine デバッグ](individual-ides/rubymine#using-rubymine-debugger-for-gitlab-running-under-gdk)

## キーマップ

JetBrains IDE には多くのキーバインドがあります。RubyMine 用のリストはこちら: <https://www.jetbrains.com/help/ruby/mastering-keyboard-shortcuts.html>。他の IDE 用のものも見つけられます。

ただし、JetBrains で 1 つだけキーボードショートカットを覚えるなら、これにしてください。

- 「Find Action」: `Cmd-Shift-A`（Windows/Linux では `Ctrl-Shift-A`）

これにより、コマンドを見つけて実行したり、ツールウィンドウを開いたり、設定を検索したりすることが、その名前を入力するだけでできます。さらにメニューの場所と（定義されていれば）ショートカットも横に表示されます。VS Code の「Command Palette」（`Cmd-Shift-P`）と似ています。

デフォルトのキーマップを学ぶことは良い習慣ですが、おそらく一部のキーマップをカスタマイズしたくなるでしょう。独自のキーマップ追加／上書きを設定する方法、もしくは他の人のものをコピーする方法の詳細と例については、[Configuration](setup-and-config/#configuration) セクションを参照してください。

## コードインスペクション

JetBrains IDE の強力で生産性を高める機能の 1 つが [コードインスペクション](https://www.jetbrains.com/help/ruby/running-inspections.html) です。

詳しくは [Code Inspection](code-inspection) を参照してください。

## 追跡している JetBrains Issue

GitLab に関連し、いつか修正されることを期待してフォローや投票をしておきたい JetBrains Issue の一覧を保管しています。

リストはこちら: [Tracked JetBrains Issues](tracked-jetbrains-issues)

## ヘルプを得る

ヘルプが必要な場合は、[Chat Groups](#chat-groups) のいずれかで質問してください！

## チャットグループ

- [`#jetbrains-ide-users` GitLab チームメンバー向けの内部 Slack チャンネル](https://gitlab.slack.com/archives/CR08PTQ6T)。
- [`#ext-jetbrains-gitlab-support`] JetBrains と [GitLab チームメンバー](https://gitlab.slack.com/archives/C05KXC04AAX) 向けの共有 Slack チャンネル。これはプライベートチャンネルで、`#jetbrains-ide-users` チャンネルでアクセスを依頼できます。

## ライセンス

GitLab チームメンバーの場合、JetBrains IDE のライセンスを取得する方法の詳細については [Licenses](licenses) ページを参照してください。
