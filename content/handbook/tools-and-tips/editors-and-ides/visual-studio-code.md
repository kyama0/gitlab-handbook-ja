---
title: "Visual Studio Code (VS Code)"
upstream_path: /handbook/tools-and-tips/editors-and-ides/visual-studio-code/
upstream_sha: aadd07ec986f77b5bd259fb54f0f41d1f3397544
translated_at: "2026-06-18T05:33:51Z"
translator: claude
stale: false
lastmod: 2026-03-04T12:58:14-05:00
---

ウェブサイト: <https://code.visualstudio.com/>

得意分野: コード編集、GitLab 連携

強み:

- 非常に人気が高い
- 膨大な数の拡張機能。[GitLab 公式拡張機能](https://marketplace.visualstudio.com/items?itemName=gitlab.gitlab-workflow)も含まれます
- Language Server Protocol (LSP) は VS Code のために設計された

あらゆる種類の編集に適した強力なエディターで、学習曲線も緩やかです。LSP システムは VS Code のために設計されており、この変革をもたらす技術に対する VS Code のサポートは非常に優れています。

## セットアップと設定

VS Code は無料であり、[JetBrains](./jetbrains-ides) 製品のような有料 IDE 製品と比べて、使い始めるために必要なセットアップが大幅に少なくて済みます。
ただし、私たちのソースコード、とりわけ GitLab モノレポでの開発体験を向上させる VS Code 拡張機能や、いくつかのユーザー/ワークスペース設定があります。

### 拡張機能

#### ワークフロー

- 前述の [GitLab](https://marketplace.visualstudio.com/items?itemName=gitlab.gitlab-workflow) 拡張機能は、GitLab でホストされているあらゆる git リポジトリに対して、多くの有用な情報と機能を VS Code にもたらします。具体的には次のとおりです。
  - エディター内での GitLab Duo agentic chat
  - 現在の git ブランチで直近に実行されたパイプラインの情報
  - Issue や MR へのアクセス（コメントや MR 変更のワークフローを含む）
- [GitLens](https://marketplace.visualstudio.com/items?itemName=eamodio.gitlens) 拡張機能は、GitLab 内の特定のコミットや MR へのリンクをエディターから直接利用できる便利な手段です。ただし GitLab モノレポのプロジェクトでは、この拡張機能がパフォーマンスを低下させる場合があります。

#### 言語別

- [Vue](https://marketplace.visualstudio.com/items?itemName=Vue.volar) 拡張機能は、Vue ファイルのシンタックスハイライトと IntelliSense に不可欠です。
- [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) 拡張機能は、私たちの ESlint glob パターンに一致するファイルを保存時にフォーマットするよう設定でき、修正可能な ESlint エラー（例: シングル/ダブルクォート、末尾のカンマ、二重波括弧内のスペースなど）を自動修正します。
- [Ruby LSP](https://marketplace.visualstudio.com/items?itemName=Shopify.ruby-lsp) は、Ruby ファイルに対して IntelliSense、オートコンプリート、保存時の Rubocop によるリンティングを提供します。
- [Tailwind CSS IntelliSense](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss) 拡張機能は、Pajamas で定義された GitLab 固有の Tailwind ユーティリティクラスに対して IntelliSense/オートコンプリートを提供します。

### ユーザーおよびワークスペースの設定

- GitLab モノレポは非常に巨大なため、ユーザー設定またはワークスペース設定で `"typescript.tsserver.maxTsServerMemory"` の値を 8192 に設定すると便利な場合があります。
