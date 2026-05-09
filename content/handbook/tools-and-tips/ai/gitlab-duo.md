---
title: "GitLab Duo のヒント"
upstream_path: /handbook/tools-and-tips/ai/gitlab-duo/
upstream_sha: 6f672d050777a6a6cb33fc5f31ccf71ebdd5b812
translated_at: "2026-05-08T00:00:00Z"
translator: claude
stale: false
---

AI 駆動の GitLab Duo Chat、Code Suggestions などを使って DevSecOps ワークフローを高速化する方法を学びましょう。

## アクセス

gitlab-com [グループ](https://gitlab.com/gitlab-com) で GitLab Duo へのアクセスが必要な場合は、[HelpLab チケット](/handbook/business-technology/enterprise-applications/guides/helplab-guide/#create-a-ticket--request) を作成して IT と連携し、グループに対して GitLab Duo を有効化してもらってください。

GitLab のコントリビューターおよび co-creator も AI 駆動の GitLab Duo を活用できます。[contributors.gitlab.com/](https://contributors.gitlab.com/) のオンボーディングプロセスから始めてください。

GitLab.com の顧客デモグループでチームメンバーがアクセスを必要とする場合は、`GitlabCom_Licensed_Demo_Group_Request` テンプレートを使って [Access Request](/handbook/security/corporate/end-user-services/access-requests/access-requests/) を作成してください。

オンボーディングについては、[Getting Started](https://docs.gitlab.com/ee/user/get_started/getting_started_gitlab_duo.html) ドキュメントを参照してください。

## IDE での GitLab Duo

GitLab Duo の拡張機能を介した IDE 統合については、[エディター拡張ドキュメント](https://docs.gitlab.com/ee/editor_extensions/#available-extensions) を参照してください。

## 関連リソース

- [GitLab Duo ドキュメント](https://docs.gitlab.com/ee/user/gitlab_duo/)
  - [Getting Started](https://docs.gitlab.com/ee/user/get_started/getting_started_gitlab_duo.html)
  - [ユースケース](https://docs.gitlab.com/ee/user/gitlab_duo/use_cases.html)
  - [Duo Code Suggestions](https://docs.gitlab.com/ee/user/project/repository/code_suggestions/)
  - [Duo Chat](https://docs.gitlab.com/ee/user/gitlab_duo_chat/)
- [GitLab University](https://university.gitlab.com)
  - [AI および GitLab Duo コース](https://university.gitlab.com/learn/dashboard?labels=%5B%22Topic%22%5D&values=%5B%22AI%22%5D)
  - [GitLab Duo Enterprise ラーニングパス](https://university.gitlab.com/learn/learning-path/gitlab-duo-enterprise-learning-path)
- [Developer Advocacy リソース](/handbook/marketing/developer-relations/developer-advocacy/)
  - [コンテンツライブラリ](/handbook/marketing/developer-relations/developer-advocacy/content/)（GitLab Duo のデモ、ユースケース、製品ツアー、トーク、ワークショップ、レコーディングなど）
- [Highspot: フィールドガイド](https://gitlab.highspot.com/items/6459a4f9a583c8ebe9aa5a64)（社内のみ、フィールドチーム向け）
- ドッグフーディング: [GitLab Duo の開発に関するブログチュートリアルシリーズ](https://about.gitlab.com/blog/2024/06/03/developing-gitlab-duo-series/)

## ヒント

GitLab Duo Chat は GitLab、プログラミング言語、テクノロジーなどに関する多くの質問に答えてくれます。複数のブラウザ検索タブを開く代わりに、これを活用し、質問の仕方やフォローアップの会話を作る練習をしてみましょう。チャットプロンプトと応答を試行錯誤しイテレーションしてみてください。詳しくはブログ記事 [10 best practices for AI-powered GitLab Duo Chat](https://about.gitlab.com/blog/2024/04/02/10-best-practices-for-using-ai-powered-gitlab-duo-chat/) で学べます。

GitLab Duo を使ってコードを書く場合は、ブログ記事 [Top tips for efficient AI-powered Code Suggestions with GitLab Duo](https://about.gitlab.com/blog/2024/06/11/top-tips-for-efficient-ai-powered-code-suggestions-with-gitlab-duo/) も参照してください。

GitLab チームメンバーや co-creator 向けに、本ハンドブックページのユースケースを探求してみてください。さらなるユースケースとワークフローは [GitLab Duo ドキュメント](https://docs.gitlab.com/ee/user/gitlab_duo/) に記載されています。

オープンな機能リクエスト:

1. [GitLab Duo Chat でハンドブックの質問に回答できるようにする](https://gitlab.com/gitlab-com/content-sites/handbook/-/issues/212)

## ハンドブックのユースケース

### ハンドブック編集の準備手順

GitLab Duo Chat が [お使いの IDE または GitLab UI で動作する](https://docs.gitlab.com/ee/user/get_started/getting_started_gitlab_duo.html#step-4-prepare-to-use-gitlab-duo-in-your-ide) ことを確認してください。

1. [GitLab UI](https://docs.gitlab.com/ee/user/gitlab_duo_chat/#use-gitlab-duo-chat-in-the-gitlab-ui)
1. [Web IDE](https://docs.gitlab.com/ee/user/gitlab_duo_chat/#use-gitlab-duo-chat-in-the-web-ide)
1. [VS Code](https://docs.gitlab.com/ee/user/gitlab_duo_chat/#use-gitlab-duo-chat-in-vs-code)
1. [JetBrains IDE](https://docs.gitlab.com/ee/user/gitlab_duo_chat/#use-gitlab-duo-chat-in-jetbrains-ides)（IntelliJ IDEA、PyCharm など）

VS Code/Web IDE で Duo Chat にアクセスするキーボードショートカット:

1. `cmd shift p`（macOS）でコマンドパレットを開きます。
1. `GitLab Duo Chat` を検索して Enter を押します。
1. 任意: Duo Chat を右側パネルにドラッグして移動できます（[このビデオ](https://www.youtube.com/watch?v=foZpUvWPRJQ) で説明されています）。

Code Suggestions を使って Markdown コンテンツを書いて補完したい場合は、[IDE 拡張設定の追加言語として](https://docs.gitlab.com/ee/user/project/repository/code_suggestions/supported_extensions.html#add-support-for-more-languages) `markdown` を設定する必要があります。ヒント: 複数のタブを開きファイルコンテンツを増やすことで、提案の[コンテキスト](https://docs.gitlab.com/ee/user/project/repository/code_suggestions/#advanced-context) と品質を高められます。ハンドブックのバックエンドメンテナーである @dnsmichi とコーヒーチャットを設定して、ライブ画面共有での学習セッションをリクエストしましょう。

### Markdown のテーブルを作成する

解決したい問題: `web IDE 経由でハンドブックページにテーブルを追加する方法はありますか？`

以下のプロンプトを使って、事前定義のデータカラムでテーブルを作成します:

```markdown
Create a Markdown table with the following data set
Header: Cloud, GPU type, Costs, Spec, Notes
Fill the entries with sample data for 3 rows.
```

GitLab Duo Chat は Markdown テーブルを可視化することがあります。これを活用して結果が期待どおりであることを確認し、出力フォーマットを raw Markdown に指定するフォローアッププロンプトに進みます。

```markdown
Show the raw Markdown in a code block
```

> 注: 同じワークフローは GitLab Duo Chat の [Duo 拡張機能を備えたローカル IDE](https://docs.gitlab.com/ee/user/get_started/getting_started_gitlab_duo.html#step-4-prepare-to-use-gitlab-duo-in-your-ide) でも利用できます。

### Markdown テーブルの更新やリファクタリング

ときには、Markdown テーブルを複数のテーブルに分割したり、1 つに統合したり、追加の列を加える必要があります。

1. IDE を開き、更新／リファクタリング対象のテーブルを選択します。
1. GitLab Duo Chat に次のプロンプトを尋ねます:

   ```markdown
   /refactor the table for better readability. Split it by the first column into separate tables.
   ```

1. Duo Chat が応答内でテーブルを可視化したら、これを使ってテーブルが正しく分割されていることを確認します。raw 出力を求めるフォローアッププロンプトを送ることもできます:

   ```markdown
   Only show the refactored table as raw Markdown code blocks
   ```

## 開発のユースケース

ブログ記事 [Developing GitLab Duo: How we are dogfooding our AI features](https://about.gitlab.com/blog/2024/05/20/developing-gitlab-duo-how-we-are-dogfooding-our-ai-features/) を読み、以下の方法を学んでください:

1. コードレビューのプロセスを効率化する
1. コメントスレッドを凝縮する
1. 新しいドキュメントを作成する
1. リリースノートを作成する
1. ドキュメントサイトのナビゲーションを最適化する
1. その他

### 失敗した CI/CD パイプラインのトラブルシューティング

1. 失敗したパイプラインのジョブビューに移動し、ログを確認します。[ドキュメントのステップ](https://docs.gitlab.com/ee/user/gitlab_duo_chat/examples.html#troubleshoot-failed-cicd-jobs-with-root-cause-analysis) に従って Root Cause Analysis を開始します。
1. チャットプロンプトでフォローアップの質問を行います。たとえば、長期的にこのエラーを防ぐ方法を尋ねます。

これらのユースケースは以下で探求できます:

1. [Developer Advocacy チーム](/handbook/marketing/developer-relations/developer-advocacy/projects/#organisation-structure) が保守する [Duo Enterprise 製品ツアー](/handbook/marketing/developer-relations/developer-advocacy/content/#product-tours) と [Root Cause Analysis チャレンジ](https://gitlab.com/gitlab-da/use-cases/ai/ai-workflows/gitlab-duo-challenges/root-cause-analysis)
1. [GitLab University: GitLab Duo Enterprise コース](https://university.gitlab.com/courses/gitlab-duo-enterprise)

### オンボーディングと貢献

チームメンバーやコミュニティコントリビューターは、AI 駆動のワークフローを活用して、迅速なオンボーディング、コードベースや GitLab に関する学習、より速いレビューサイクルでの貢献ができます。

1. ソースコードベースを学び、特定の機能提案やバグ修正の実装方法を探求する。
1. マージリクエストの要約とコードレビューをスピードアップする。
1. 失敗する CI/CD パイプラインのトラブルシューティング。

詳しくは [GitLab Duo ユースケースのドキュメント](https://docs.gitlab.com/ee/user/gitlab_duo/use_cases.html#use-gitlab-duo-to-contribute-to-gitlab) を参照してください。

## GitLab Duo Quick Chat とターミナルの統合

### 解決したい問題

コマンドラインの引数を覚えるのは難しく、man ページを検索するのは時間がかかります。

### 解決策

GitLab Duo Quick Chat をターミナルと統合して、コマンドラインの操作を支援します。

### セットアップ方法

1. シェルプロファイル（`.bashrc`、`.zshrc` など）に以下を追加して、ターミナルがデフォルトエディターとして VSCode を使うように設定します:

   ```bash
   export EDITOR="code --wait"
   ```

2. コマンドのヘルプが必要なときは:
   - ターミナルでコマンドを入力し始めます（例: `git rebase -i`）
   - <kbd>Ctrl</kbd>+<kbd>x</kbd> <kbd>Ctrl</kbd>+<kbd>e</kbd> を押して、現在のコマンドラインを VSCode で開きます

3. VSCode で:
   - 入力していたコマンドが新しい一時ファイルに表示されます
   - GitLab Duo Chat を開きます（macOS では <kbd>Cmd</kbd>+<kbd>Shift</kbd>+<kbd>P</kbd>、Windows/Linux では <kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>P</kbd> を使い、"GitLab Duo Chat" と入力します）
   - コマンドのテキストを選択（または削除）し、目的を達成するための支援を Duo に求めます。例: 「Help me write a git command to squash my last 3 commits into one」や、「I need a command to rebase my current branch onto main and resolve conflicts interactively」

4. Duo の応答を活用:
   - Duo が改善されたコマンドを生成したら、応答内の **Insert Snippet** ボタンをクリックします
   - ファイルを保存して（<kbd>Cmd</kbd>+<kbd>S</kbd> または <kbd>Ctrl</kbd>+<kbd>S</kbd>）、タブを閉じます
   - 編集されたコマンドがターミナルに表示され、実行可能な状態になります

### 補足

- このワークフローは VSCode の統合ターミナルでも動作します
- キーボードショートカット <kbd>C-x</kbd> <kbd>C-e</kbd> は bash/zsh の標準機能で、現在のコマンドラインを編集するためのもので、Duo 固有のものではありません
