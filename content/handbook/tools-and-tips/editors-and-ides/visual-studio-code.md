---
title: "Visual Studio Code (VS Code)"
upstream_path: /handbook/tools-and-tips/editors-and-ides/visual-studio-code/
upstream_sha: 18de125bd3131a62f0a7026bc69c7de124fc6c8a
translated_at: "2026-06-20T13:37:44Z"
translator: claude
stale: false
lastmod: "2026-03-04T12:58:14-05:00"
---

ウェブサイト: <https://code.visualstudio.com/>

得意分野: コード編集、GitLab 連携

強み:

- 非常に人気が高い
- 膨大な数の拡張機能。[GitLab 公式拡張機能](https://marketplace.visualstudio.com/items?itemName=gitlab.gitlab-workflow)も含まれます
- Language Server Protocol (LSP) は VS Code のために設計された

あらゆる種類の編集に適した強力なエディターで、学習曲線も緩やかです。LSP システムは VS Code のために設計されており、この変革をもたらす技術に対する VS Code のサポートは非常に優れています。

## セットアップと設定

VS Code は無料です。そのため、[JetBrains](./jetbrains-ides) のような有料 IDE 製品よりも、使い始めるために必要なセットアップは大幅に少なくなります。
ただし、特に GitLab モノレポのような私たちのソースコードで作業する開発者体験を改善する VS Code 拡張機能やユーザー／ワークスペース設定がいくつかあります。

### 拡張機能

#### ワークフロー

- 上記でも触れた [GitLab](https://marketplace.visualstudio.com/items?itemName=gitlab.gitlab-workflow) 拡張機能は、GitLab でホストされている任意の git リポジトリに対して、VS Code に多くの有用な情報と機能をもたらします。これには以下が含まれます。
  - エディター内での GitLab Duo agentic chat
  - 現在の git ブランチで直近に実行されたパイプラインに関する情報
  - コメントや MR 変更のワークフローを含む、Issue と MR へのアクセス
- [GitLens](https://marketplace.visualstudio.com/items?itemName=eamodio.gitlens) 拡張機能は、エディターから GitLab の特定のコミットや MR へのリンクに直接アクセスする便利な方法です。ただし、GitLab モノレポプロジェクトでは、この拡張機能がパフォーマンスを低下させる可能性がある点に注意してください。

#### 言語別

- [Vue](https://marketplace.visualstudio.com/items?itemName=Vue.volar) 拡張機能は、Vue ファイルの構文ハイライトと IntelliSense に不可欠です。
- [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) 拡張機能は、保存時に私たちの ESlint glob パターンに一致する任意のファイルをフォーマットするよう設定できます。これにより、修正可能な ESlint エラー（例えば、シングル／ダブルクォート、末尾カンマ、二重波括弧内のスペースなど）が自動修正されます。
- [Ruby LSP](https://marketplace.visualstudio.com/items?itemName=Shopify.ruby-lsp) は、Ruby ファイルに対して保存時の IntelliSense、オートコンプリート、RuboCop linting を提供します。
- [Tailwind CSS IntelliSense](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss) 拡張機能は、Pajamas で定義された GitLab 固有の Tailwind ユーティリティクラスに対して IntelliSense／オートコンプリートを提供します。

### ユーザーとワークスペースの設定

- GitLab モノレポは非常に大きいため、ユーザー設定またはワークスペース設定で `"typescript.tsserver.maxTsServerMemory"` の値を 8192 に設定すると便利な場合があります。
