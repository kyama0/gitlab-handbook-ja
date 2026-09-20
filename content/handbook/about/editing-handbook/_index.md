---
title: "ハンドブックの編集"
description: "編集方法を選び、変更をプレビューして、ハンドブックのマージリクエストを準備します。"
upstream_path: /handbook/about/editing-handbook/
upstream_sha: "fa96dbec1adcd6457e8819e6bd3d28fddfdddf4f"
lastmod: "2026-09-17T22:07:50+02:00"
translated_at: "2026-09-20T03:36:02+00:00"
translator: codex
stale: false
---

改善したいハンドブックのページから始めてください。ブラウザーで編集する、
ローカルエディターを使う、エージェントに支援を依頼するという方法があります。どの方法でもマージリクエスト
（MR）を作成し、変更を確認して適切な承認を依頼できます。
ハンドブックをどのように、なぜ使うかについては、[ハンドブックの使い方](../handbook-usage.md)を参照してください。

## 編集方法を選ぶ {#choose-how-to-edit}

作業の出発点を選びます。作業中に方法を切り替えることもできます。

### 変更する {#make-a-change}

| 行いたいこと | ここから始める |
| --- | --- |
| 1 ページの文章やリンクを修正する | [単一ファイルエディター](#edit-one-file-in-your-browser) |
| ブラウザーで複数のファイルを編集する | [Web IDE](#use-the-web-ide-to-edit-the-handbook) |
| ページを移動し、そのリンクを更新する | [ページを移動または名前変更する](#move-or-rename-a-page) |
| エージェント、アプリ、ローカルエディターを使う | [編集環境を選ぶ](#choose-your-editing-environment) |

### MR を確認または仕上げる {#check-or-finish-an-mr}

| 行いたいこと | ここから始める |
| --- | --- |
| 変更をプレビューする | [レビューアプリ](#preview-changes-on-gitlab-pages)または[ローカルプレビュー](#local-live-preview) |
| 書式やリンクチェックのエラーを修正する | [リンターエラーを修正する](#fix-linter-errors) |
| 変更の競合を解消する | [マージコンフリクトを解消する](#fix-merge-conflicts) |
| レビューとマージを依頼する | [変更を確認して提出する](#review-and-submit-your-change) |

### 編集環境を選ぶ {#choose-your-editing-environment}

普段作業している場所から始めてください。

- **GitLab または接続アプリ内：**
  - GitLab プロジェクト内 → [Agentic Chat または Developer Flow](#ask-an-agent-in-gitlab)。
  - Glean 内 → [Glean デスクトップアプリ](#handbook-edits-with-glean)。
  - Claude 内 → [Claude Desktop](#handbook-edits-with-claude-desktop)。
  - Slack での議論中 → [Slack の GitLab Duo](#turn-slack-discussions-into-handbook-updates)。
- **ローカルのチェックアウト内：**
  - 自分でファイルを編集する → [ローカルで編集し、GitLab で変更をチェックする](#edit-locally-and-let-gitlab-check-your-changes)。
  - エージェントに編集を依頼する → [VS Code、GitLab Duo CLI、Claude Code](#use-an-agent-in-your-editor-or-terminal)。
  - 編集しながら変更を確認する → [ローカルのライブプレビュー](#local-live-preview)。

公開コンテンツには[公開ハンドブックリポジトリ](https://gitlab.com/gitlab-com/content-sites/handbook)を、
内部コンテンツには[内部ハンドブック](https://gitlab.com/gitlab-com/content-sites/internal-handbook)の
リポジトリを使用してください。共通テーマと開発ドキュメントは
[Docsy GitLab](https://gitlab.com/gitlab-com/content-sites/docsy-gitlab)にあります。
内部情報を公開コンテンツに移す前に、[SAFE フレームワーク](/handbook/legal/safe-framework/)を確認してください。

> **ヒント**：ページの **View page source** アクションでソースを特定できます。
> ページのメンテナーも確認できるため、後でレビュアーを割り当てる際に役立ちます。

![右上に View page source が表示されたハンドブックのページ](/images/handbook/about/editing-handbook/handbook-edit-page-upper-right-corner.png)

### ヘルプが必要ですか？ {#need-help}

👋 GitLab ハンドブックの編集で問題が発生した場合は、支援を受けられます。

[MR Buddies](/handbook/people-group/general-onboarding/mr-buddies/)と呼ばれるチームメンバーが、
マージリクエストの作成や、GitLab ハンドブックの更新中に発生した問題の
デバッグを支援します。リンクを添えて、[`#mr-buddies`](https://gitlab.slack.com/archives/CLM8K5LF4/p1678812429884979)の
Slack チャンネルに依頼を投稿してください。

ハンドブックに関する一般的な質問は、[#handbook Slack チャンネル](https://gitlab.enterprise.slack.com/archives/C81PT2ALD)に投稿してください。
より緊急性の高い問題、特に期限が迫っている場合や重要な情報へのアクセスが
妨げられている場合には、問題解決を支援できるチームメンバーに連絡するための
[エスカレーションプロセス](../escalation.md#when-to-escalate-an-issue)があります。

## よく使う編集ワークフロー {#common-editing-workflows}

場所が分かっているページを少し修正する場合は、単一ファイルエディターですぐに始められます。
適切なファイルを探す、複数ページを更新する、失敗したチェックを調査するといった作業は、
エージェントが支援できます。使いやすい方法を選び、
出来上がった変更を確認してください。

> これらの例は、FY27 にエージェントを使ったワークフローを幅広く実践した経験に基づいています。ツールやインターフェースは
> 変わることがあります。より良い方法や動かなくなった箇所を見つけたら、学んだことを
> このガイドに反映し、MR を
> [#handbook Slack](https://gitlab.enterprise.slack.com/archives/C81PT2ALD)で共有してください。ありがとうございます！
>
> 一緒に学びませんか？
> [Michael Friedrich（@dnsmichi）](https://gitlab.com/dnsmichi)とのコーヒーチャットを設定し、これらのワークフローを試してください。

### ブラウザーで 1 つのファイルを編集する {#edit-one-file-in-your-browser}

複数のファイルをまとめて更新する必要がない、小さな変更に使ってください。

1. ハンドブックのページで **View page source** を選択します。
1. GitLab で **Edit > Edit single file** を選択します。

   ![GitLab での単一ファイルの編集](/images/handbook/about/editing-handbook/handbook-edit-single-file-source-edit.png)

1. 修正し、差分を確認します。
1. 新しい Git ブランチにコミットし、MR を作成します。説明欄に変更が必要な理由を記載してください。
1. [変更を確認して提出する](#review-and-submit-your-change)に従います。

追加の編集では、既存の MR ブランチにあるファイルを開きます。ページの移動やそのページへのリンクなど、
複数ファイルにまたがる変更には Web IDE またはエージェントを使用してください。
[Web Editor のドキュメント](https://docs.gitlab.com/user/project/repository/web_editor/)を参照してください。

### UI で GitLab Duo を使って編集する {#edit-with-gitlab-duo-in-the-ui}

ブラウザーのハンドブックプロジェクトから直接、GitLab Duo に適切なページの検索、
更新の計画、変更の支援を依頼します。

> **リポジトリの指示：** ハンドブックには、エージェントによる編集と検証のための [AGENTS.md](https://gitlab.com/gitlab-com/content-sites/handbook/-/blob/main/AGENTS.md)と、
> MR のレビューのための [Duo コードレビュー指示](https://gitlab.com/gitlab-com/content-sites/handbook/-/blob/main/.gitlab/duo/mr-review-instructions.yaml)が
> 用意されています。GitLab Duo はこれらの指示を自動的に読み込むため、
> プロンプトでは目的の変更に集中できます。

#### GitLab でエージェントに依頼する {#ask-an-agent-in-gitlab}

GitLab でハンドブックプロジェクトを開きます。右側のパネルで [GitLab Duo Agentic Chat](https://docs.gitlab.com/user/gitlab_duo_chat/agentic_chat/)を開き、
質問を入力してください。

1. 具体的な作業の支援や、大規模な更新を適切に計画する方法について尋ねます。
   プロンプトの例：

   ```markdown
   I want to add the #gitlab-gtm Slack channel to Product and Technical Marketing in https://handbook.gitlab.com/handbook/marketing/
   Can you help me make the handbook changes please?
   ```

1. Git のコミット履歴やマージリクエストを検索し、変更の理由を調べます。
   Elsje Smart と Michael Friedrich の会話に基づくプロンプトの例：

   ```markdown
   I need to find a Git change to the sales development handbook page, which lived in marketing and was recently moved to sales.

   The change is around performance management, made by Brian Tabbert. Time around Jan 2024 and Feb 2025.
   ```

1. 既存のマージリクエストや提案中の変更を探し、作業の重複を避けます。
   プロンプトの例：

   ```markdown
   Is there work underway to update the engineering DRIs in the AI section?
   ```

1. マージリクエストのレビューを依頼したり、議論に参加してもらったりする DRI を探します。
   プロンプトの例：

   ```markdown
   Can you help me find the DRI for the AI section, specifically the GitLab Duo Slack integration.
   ```

![Agentic Chat と Developer Flow への引き継ぎが表示された GitLab UI のサイドパネル](/images/handbook/about/editing-handbook/handbook-edit-ui-gitlab-duo-agentic-chat-dev-flow.png)

#### Agentic Chat でページを移動する {#move-a-page-with-agentic-chat}

GitLab のハンドブックプロジェクトで [GitLab Duo Agentic Chat](https://docs.gitlab.com/user/gitlab_duo_chat/agentic_chat/)を開き、
関連するプロジェクトの背景情報と期待する結果を伝えます。例：

```text
Create a plan to move <page URL> to <new location>, preserving its content.
Include updates to affected links, navigation, and CODEOWNERS, and a redirect
from the old URL.
```

#### Developer Flow で大規模な変更を計画する {#plan-larger-changes-with-developer-flow}

大規模な編集では、Agentic Chat に[作業を Developer Flow へ委譲する](https://docs.gitlab.com/user/duo_agent_platform/flows/foundational_flows/developer/#use-the-flow-in-agentic-chat)よう依頼することもできます。
Developer Flow はバックグラウンドでセッションを実行し、完了時に通知します。通常は
最初に計画を作成し、阻害要因がある場合は人間に入力を求めます。

別の方法として、適切なハンドブックプロジェクトで Issue を作成し、
[Developer Flow の操作方法](https://docs.gitlab.com/user/duo_agent_platform/flows/foundational_flows/developer/#use-the-flow)のいずれかを使用します。

1. **Implement work item** を選択する、または
1. 設定済みの Duo Developer サービスアカウント `@duo-developer-gitlab-com` を割り当てる、または
1. コメントでアカウントにメンションする：`@duo-developer-gitlab-com Please help me implement this change`

**AI > Sessions** で進捗を確認し、作成された MR と検証結果をレビューしてください。

> **ヒント**：Duo Developer に、MR のレビューフィードバックへの対応や、リンターエラーの修正を依頼することもできます。

![変更に対応するようコメントで Duo Developer にメンションする](/images/handbook/about/editing-handbook/handbook-edit-duo-developer-at-mention.png)

### Web IDE を使ってハンドブックを編集する {#use-the-web-ide-to-edit-the-handbook}

[GitLab Web IDE](https://docs.gitlab.com/user/project/web_ide/)では、ブラウザーで複数のファイルを編集し、
まとめてコミットできます。リポジトリのクローンや Hugo のローカルインストールは不要です。

次の手順に従ってください。

1. ハンドブックのページで **Edit this page** を選択します。または、GitLab でソースを
   開き、**Edit > Open in Web IDE** を選択します。
1. ページを編集します。
   - **File Explorer** パネルで関連ファイルを開きます。
   - [画像のガイド](https://handbook.gitlab.com/docs/markdown-guide/#images)に従って、画像を
   `static/images/handbook/` にアップロードすることもできます。

   ![Web IDE - エディターとファイルエクスプローラー](/images/handbook/about/editing-handbook/handbook-edit-web-ide-editor-overview.png)

   ![Web IDE - ファイルのアップロード](/images/handbook/about/editing-handbook/handbook-edit-web-ide-upload-file.png)

1. **Source Control** を開き、変更したファイルを 1 つずつ確認します。
1. 短いコミットメッセージを入力し、コミット時に **Create a new branch** を選択します。
   - Git ブランチの入力欄を空のまま **Enter** を押すと、デフォルトのブランチ名を使用できます。

   ![Web IDE - Git ブランチを作成してコミットする](/images/handbook/about/editing-handbook/handbook-edit-web-ide-source-control-git-commit-branch.png)

1. 通知の **Create MR** を選択し、[変更を確認して提出します](#review-and-submit-your-change)。
   - この操作で、GitLab のマージリクエスト作成フォームが新しいタブで開きます。

   ![Web IDE - マージリクエストの作成](/images/handbook/about/editing-handbook/handbook-edit-web-ide-create-merge-request.png)

#### 既存の MR を編集する {#edit-an-existing-mr}

1. MR を開き、**Code > Open in Web IDE** を選択します。
1. ファイルを編集し、**Source Control** で差分を確認します。
1. 既存の MR ブランチにコミットします。

#### 簡単なヒント {#quick-tips}

- **ファイルを探す：** **Go to File**（macOS では `Command+P`）。
- **コマンドを探す：** コマンドパレット（macOS では `Shift+Command+P`）。
- **Create MR の通知を再表示する：** ステータスバーのベルアイコンを選択します。

検索の対象は開いているファイルのみです。リポジトリ全体の検索には、ローカルのチェックアウトまたは
エージェントを使用してください。Hugo のショートコードとハンドブックのテーマをプレビューするには、
[レビューアプリ](#preview-changes-on-gitlab-pages)を使用します。
その他の機能は [Web IDE のドキュメント](https://docs.gitlab.com/user/project/web_ide/)を参照してください。

### 接続アプリで編集する {#edit-with-connected-apps}

Glean、Claude、Slack など、普段使っているアプリから始めます。ページと
目的の変更を伝えて、質問や議論の内容をハンドブックの更新につなげます。

#### Glean でハンドブックを編集する {#handbook-edits-with-glean}

[Glean デスクトップアプリ](/handbook/eta/ai/tools/glean/#access)をインストールします。GitLab の内部コンテキストは事前に設定済みなので、
すぐにハンドブックの更新に取りかかれます。

プロンプトの例：

```markdown
I want to add the #gitlab-gtm Slack channel to Product and Technical Marketing. Can you help me make the handbook changes please?

https://handbook.gitlab.com/handbook/marketing/
```

![Glean デスクトップ - GitLab MCP でハンドブックを編集する](/images/handbook/about/editing-handbook/handbook-edit-glean-desktop-chat-mcp.png)

#### Claude Desktop でハンドブックを編集する {#handbook-edits-with-claude-desktop}

[Claude for Desktop アプリ](/handbook/tools-and-tips/ai/claude/#applications-and-cli)をインストールし、
[GitLab MCP Server](https://docs.gitlab.com/user/model_context_protocol/mcp_server/)が
**Settings > Connectors > GitLab** で設定され、接続されていることを確認してください。

小さな変更は **Chat** の会話で、GitLab MCP コネクターを使って
リモートの MR を作成します。

プロンプトの例：

```markdown
I want to add the #gitlab-gtm Slack channel to Product and Technical Marketing. Can you help me make the handbook changes please?

https://handbook.gitlab.com/handbook/marketing/
```

![Claude for Desktop - Chat から変更する](/images/handbook/about/editing-handbook/handbook-edit-claude-desktop-chat.png)

大きな変更では **Cowork** に切り替え、クローンした Git リポジトリの
フォルダーを追加し、Claude が変更と結果の検証を行えるようにします。

![Claude for Desktop - ハンドブックのフォルダーを使った Cowork](/images/handbook/about/editing-handbook/handbook-edit-claude-desktop-cowork-local-folder.png)

**Code** タブを使い、ローカル環境のハンドブックファイルで
Claude Code と作業することもできます。

#### Slack の議論をハンドブックの更新につなげる {#turn-slack-discussions-into-handbook-updates}

[GitLab Duo の Slack インテグレーション](https://docs.gitlab.com/user/project/integrations/gitlab_slack_application/#gitlab-duo)が
チャンネルで有効になっていることを確認し、リポジトリの URL、ページの URL、
合意した変更、求める成果物を添えて `@GitLab` にメンションします。例：

```text
@GitLab In <repository URL>, update <page URL> with the agreed decision:
<public-safe summary and source>. Create a draft MR with a focused change.
Explain what was validated. Do not merge or assign reviewers.
```

GitLab Duo はスレッドと最近のチャンネル履歴をコンテキストとして使用できます。インテグレーションと
対象リポジトリに適した情報を含むスレッドのみを使用してください。
アカウントのリンクと利用可否については、[Slack での GitLab Duo の設定](https://docs.gitlab.com/user/project/integrations/gitlab_slack_application/#gitlab-duo)に
従ってください。承認を依頼する前に、返された MR をレビューします。

プロンプトの例：

```markdown
@GitLab I want to add the `#gitlab-gtm` Slack channel to Product and Technical Marketing. Can you help me make the handbook changes please?

https://handbook.gitlab.com/handbook/marketing/
```

![ハンドブックの更新に取り組む GitLab が表示された Slack スレッド](/images/handbook/about/editing-handbook/handbook-edit-slack-gitlab-duo-app.png)

### エディターやエージェントでローカル編集する {#editing-the-handbook-locally}

[VS Code などのエディター](/handbook/tools-and-tips/editors-and-ides/)を使い、ノートパソコン上にあるハンドブックのコピーで
作業します。自分でファイルを編集するかエージェントに支援を依頼し、その後
GitLab で変更をレビューしてチェックします。

#### ローカルで編集し、GitLab で変更をチェックする {#edit-locally-and-let-gitlab-check-your-changes}

Hugo、Docker、プレビューツールをインストールせずに、ノートパソコンでハンドブックのファイルを
編集できます。[リポジトリをクローン](https://handbook.gitlab.com/docs/development/#clone-the-handbook-git-repository)し、
エディターで開き、新しいブランチで変更します。変更をコミットしてプッシュし、
マージリクエストを作成してください。GitLab がチェックを実行し、問題があればそこで報告します。

![git clone を実行するターミナル](/images/handbook/about/editing-handbook/handbook-edit-local-clone.png)

クローンした `handbook` フォルダーをエディターで開きます。ファイルエクスプローラーでページを探し、
Markdown の編集を始めます。

VS Code を使用する場合は、
[GitLab for VS Code 拡張機能](https://docs.gitlab.com/editor_extensions/visual_studio_code/setup/)をインストールし、
設定ガイドに従って GitLab.com にサインインしてプロジェクトを接続してください。
これにより、エディターから Issue、マージリクエスト、パイプラインのステータスを扱えます。

![ハンドブックプロジェクトを開いた VS Code](/images/handbook/about/editing-handbook/handbook-edit-local-vscode.png)

マージ前に[レビューアプリ](#preview-changes-on-gitlab-pages)を使ってページの表示を確認できます。

> **ヒント：** エージェントは、リポジトリのクローン、ブランチの作成、変更のプッシュを支援できます。
プッシュする前に変更を見せるよう依頼してください。

#### エディターやターミナルでエージェントを使う {#use-an-agent-in-your-editor-or-terminal}

[GitLab Duo Agentic Chat を備えた VS Code](https://docs.gitlab.com/user/gitlab_duo_chat/agentic_chat/)、[GitLab Duo CLI](https://docs.gitlab.com/user/gitlab_duo_cli/)、Claude Code、その他の承認済み AI ツールでチェックアウトを開きます。開始前に、そのツールの設定手順に従ってください。

まず、クローンしたリポジトリをエージェントツールで開きます。GitLab MCP へのアクセスがなくても、
ローカルファイルを編集できます。

Issue の読み取り、パイプラインの確認、MR の作成を行うには、
[MCP](https://docs.gitlab.com/user/model_context_protocol/mcp_server/)または
[glab](https://docs.gitlab.com/cli/)を通じて GitLab に接続します。GitLab Duo のツールは、既存の GitLab 接続を使用します。

ローカルのビルドツールは任意です。プッシュ後に [GitLab CI で変更をチェックする](#fix-linter-errors)か、
ノートパソコンでチェックやプレビューを行いたい場合は [Docker](#local-live-preview)または
[ローカルツール](https://handbook.gitlab.com/docs/development/running-locally/)を
設定してください。

作業を支援するようエージェントに依頼します。例：

```text
Update <page URL> to reflect <change>, using <source link or agreed wording>.
Flag anything unclear, validate the edit, and show me the diff and checks run.
Keep the changes local for now.
```

リポジトリの `AGENTS.md` にハンドブックのスタイルガイドと検証手順（例：[ハンドブックの AGENTS.md](https://gitlab.com/gitlab-com/content-sites/handbook/-/blob/main/AGENTS.md?ref_type=heads)）があるため、プロンプトでは作業に集中できます。

GitLab Duo CLI での例：

```markdown
I want to add the #gitlab-gtm Slack channel to Product and Technical Marketing. Can you help me make the handbook changes please?

https://handbook.gitlab.com/handbook/marketing/
```

![GitLab Duo CLI の編集プロンプト](/images/handbook/about/editing-handbook/handbook-edit-local-gitlab-duo-cli-01.png)

![GitLab Duo CLI - 依頼した変更をローカルで検証](/images/handbook/about/editing-handbook/handbook-edit-local-gitlab-duo-cli-02.png)

#### ローカルのライブプレビュー {#local-live-preview}

ライブプレビューを行うには、[Compose を備えた Docker 互換ランタイム](https://handbook.gitlab.com/docs/development/running-in-docker/)をインストールして起動し、新しいターミナルを開いてハンドブックリポジトリのルートで次のコマンドを実行します。

```shell
docker compose up
```

![依存関係をインストールし Hugo プレビューを開始する Docker Compose](/images/handbook/about/editing-handbook/handbook-edit-docker-compose-up.png)

Hugo のビルド完了を待ち、ブラウザーで <http://localhost:1313/> を開きます。
エディターでファイルを編集してください。変更を保存すると自動的に再ビルドされ、ブラウザー内の
Web サイトが再読み込みされます。コンテナーがバージョン固定のツール、npm の依存関係、必要なデータを準備します。
初回起動には時間がかかります。停止するには **Control+C** を押します。

詳しい手順、Git worktree、手動の Docker 実行方法については、[Docker の設定](https://handbook.gitlab.com/docs/development/running-in-docker/)を
参照してください。Rancher Desktop で Docker CLI のワークフローを使用する場合は、
[Moby（dockerd）エンジン](https://docs.rancherdesktop.io/ui/preferences/container-engine/general/)を使用してください。

ノートパソコンにインストールしたツールを使いたい場合は、
[ネイティブ環境の設定とプレビューコマンド](https://handbook.gitlab.com/docs/development/running-locally/#running-hugo)に従ってください。
これには、Hugo の実行前に npm の依存関係をインストールし、`./scripts/sync-data.sh` を実行する手順が含まれます。
Make がインストールされていれば、`make view` がこの準備を自動的に行います。どちらの構成でも、エージェントは
リポジトリの Makefile ターゲットまたは直接のコマンドを使用できます。

エージェントにプレビューの起動を手伝ってもらうこともできます。

```text
Preview <page URL> using this repository's existing local setup.
Reuse an existing preview if available, or help me start one.
Give me the exact local page URL.
```

追加の確認やページの移動には、以下の[ハンドブックでよく行う作業](#common-handbook-tasks)を
参照してください。差分を確認して提出の準備ができるまでは、変更をローカルに保持します。

## 変更を確認して提出する {#review-and-submit-your-change}

マージ前に、変更が意図した内容を伝え、読者にとって正しく機能することを確認してください。
どの編集方法を使った場合でも、これらの手順は共通です。

1. リンク、画像、エージェントが生成した文章を含め、差分全体を確認します。
1. MR の説明欄に変更が必要な理由を記載します。公開 MR に機密の背景情報を含めないでください。
1. CI/CD パイプラインを確認し、ページ構造やレンダリングを変更した場合はプレビューを確認します。
1. 適切な[レビューと承認](../handbook-usage.md#when-to-get-approval)を依頼します。
1. 同じ MR でフィードバックに対応します。必要なチェックと承認を満たした場合にのみ、マージするか自動マージを有効にします。

### GitLab Pages で変更をプレビューする {#preview-changes-on-gitlab-pages}

レビューアプリを使うと、マージ前にブラウザーでレンダリングされたハンドブックのページを確認できます。
ローカルのプレビュー環境は不要です。

1. MR のビルドとチェックが成功するまで待ちます。
1. CI/CD ウィジェットの **Deploy** ボタンをクリックします。

   ![レビューアプリのデプロイ操作が表示された GitLab MR](/images/handbook/about/editing-handbook/handbook-edit-preview-changes-review-app-gitlab-pages.png)

   これにより `pages` CI/CD ジョブが開始され、この MR 用の GitLab Pages プレビューがデプロイされます。
1. デプロイを待ち、MR の **View app** を選択します。ジョブ完了後、利用できるまでに時間がかかる場合があります。

   ![レビューアプリのデプロイ成功後に表示される View app ボタン](/images/handbook/about/editing-handbook/handbook-edit-preview-changes-review-app-gitlab-pages-view-app.png)

1. レビューアプリ内で変更したページに移動します。リンクをたどる場合や作成する場合は、
   レビュー URL のプレフィックスを保持してください。

   ![ブラウザーの URL に MR 番号が表示されたハンドブックのレビューアプリ](/images/handbook/about/editing-handbook/handbook-edit-preview-changes-review-app-gitlab-pages-handbook-mr.png)

`deploy-review-app-always` ラベルを付けると、MR の更新ごとにデプロイが要求されます。
技術的な詳細は [Pages のデプロイ](https://handbook.gitlab.com/docs/development/#gitlab-pages-deployment)を参照してください。

## ハンドブックでよく行う作業 {#common-handbook-tasks}

文章の更新、ページの移動、画像の追加、ページメンテナーの変更に、これらの例を使用してください。
作業に合う手順やエージェント向けプロンプトを選びます。

### チームページに自分を追加する {#add-yourself-to-the-team-page}

[チームページのガイド](edit-team-page.md)を使ってプロフィールを編集するか、
[エージェントに YAML エントリのレビューと更新を依頼](edit-team-page.md#ask-an-agent-for-help)してください。

### Markdown の書式設定 {#markdown-formatting}

書式、画像、ショートコードについては、[Markdown ガイド](https://handbook.gitlab.com/docs/markdown-guide/)を使用してください。

エージェント向けプロンプトの例：

```text
Format <page URL or file> using the handbook Markdown guide.
Preserve the wording, fix formatting issues, and validate the changes.
Show me the diff before committing.
```

### コンテンツを検索して置換する {#find-and-replace-content}

チーム名の変更、リソースへのリンクの更新、複数のページに出てくる用語の変更に
使用します。置換前に一致箇所を確認してください。過去の記述では、
元の表現を保持する必要がある場合があります。

#### Visual Studio Code を使う {#using-visual-studio-code}

1. ハンドブックのチェックアウトを開き、**Source Control** でブランチを作成します。
1. **Search** を開き、既存の文章または URL を入力します。
1. **Files to include** を `content/handbook/marketing/` などの対象フォルダーに限定します。
1. **Replace** を展開して新しい文章を入力し、提案された置換を 1 つずつ確認します。
1. 一致箇所を個別に置換するか、すべての一致箇所で置換が適切な場合は **Replace All** を使用します。
1. **Source Control** で変更したすべてのファイルを確認し、関連するチェックを実行します。
1. 意図したファイルをコミットし、[MR を準備](#review-and-submit-your-change)します。

#### エージェントに依頼する {#ask-an-agent}

```text
Replace <old text or URL> with <new text or URL> within <scope>.
Review the matches first and flag historical references or ambiguous wording.
Preserve unrelated work. Show the diff and run the relevant checks.
Do not commit or push yet.
```

### ページを移動または名前変更する {#move-or-rename-a-page}

ファイル名やディレクトリを変更すると、公開 URL が変わることがあります。ページの
`title` の変更は別で、表示される見出しを変更し、URL は変わらない場合があります。
ファイルを移動する前に、どの結果を求めているかを説明してください。

#### エディターを使う {#use-an-editor}

1. ページを見つけてブランチを作成します。ページバンドルの場合は、ディレクトリを移動する前に、
   画像やその他のリソースを確認します。
1. VS Code の Explorer で **Rename** を使用するか、ファイルやフォルダーを新しい場所に移動します。
1. リポジトリ内で旧ファイルパスと公開 URL を検索します。そのページへのリンク、
   ナビゲーション、影響を受ける CODEOWNERS エントリを更新します。アクセス可能な場合は両方のハンドブックを
   確認し、外部からの参照はその責任者に伝えてください。移動したページからの
   相対リンクも確認します。
1. 旧公開 URL から引き続きページにアクセスできるよう、適切な[リダイレクト](https://handbook.gitlab.com/docs/development/#redirects)を
   追加します。エディターがリダイレクトを作成してくれるとは考えないでください。
1. 関連するチェックを実行し、新しいページをプレビューして、リダイレクトを提供する
   環境で動作を確認します。ローカルのコンテンツプレビューだけでは、
   GitLab Pages のリダイレクトを検証できない場合があります。
1. 差分全体を確認して MR を作成します。

#### Agentic Chat または Issue を使う {#use-agentic-chat-or-an-issue}

GitLab Duo Agentic Chat で関連するプロジェクトのコンテキストを選び、
Developer Flow を使うよう依頼します。例：

```text
Use Developer Flow to move <page URL> to <new location> in <repository URL>.
Preserve the content and page resources. Update incoming links, relative links,
navigation, and affected CODEOWNERS paths. Add a redirect from the old URL
and check links to headings. Do not merge or assign reviewers.
```

または、同じ作業を記載した Issue を作成し、利用可能な場合は **Implement work item** を
選択します。利用可否については [Agentic Chat での Developer Flow](https://docs.gitlab.com/user/duo_agent_platform/flows/foundational_flows/developer/#use-the-flow-in-agentic-chat)、
[Issue のワークフロー](#ask-an-agent-in-gitlab)を参照してください。
ローカルのチェックアウトで、Duo CLI、Claude Code、または Duo Agent Platform を備えた VS Code に
作業を依頼することもできます。どの方法で始めた場合も、出来上がった変更を確認してください。

### 画像を追加する {#add-images}

スクリーンショットやイラストが手順の理解に役立つ場合は、使用してください。
ページに表示できるよう、リポジトリに追加します。

1. ページに対応するディレクトリの `static/images/handbook/` 配下に画像を追加します。
   Web IDE の **Upload** アクションを使うか、ローカルエディターでファイルをコピーします。

   ![Web IDE - ファイルのアップロード](/images/handbook/about/editing-handbook/handbook-edit-web-ide-upload-file.png)

1. 内容を説明する代替テキストを付けた Markdown 画像を挿入します。公開パスは
   `/images/` で始まり、`static/` は含めません。
1. ファイルサイズや書式については、[画像のガイド](https://handbook.gitlab.com/docs/markdown-guide/#images)に従ってください。
1. ページをプレビューし、デスクトップ画面でも幅の狭い画面でも画像が収まることを確認します。

```text
Add <image file> to <page URL> with suitable alternative text.
Follow the handbook image guidelines and show me the rendered page.
Keep the changes local for review.
```

Claude Cowork や Glean などのアプリでは、アップロードした画像をプロンプトで参照し、
マージリクエストにアップロードできます。

### ページの命名とフォルダー構造 {#naming-pages-and-folder-structure}

このサイトでは、ページバンドル、セクション、リーフページの概念を使用しています。セクションには複数のリーフページを含めることができ、その場合はセクション用の `_index.md` が必要です。ページバンドルは画像のグループを伴う単一のページで、`index.md` にすることができます。

一般に、ハンドブックの URL は内容を説明するもので、できるだけ簡潔で覚えやすいものにしてください。

ディレクトリ（フォルダー）とページには、小文字の `a-z`、ハイフン `-`、アンダースコア `_` を使用してください。
Git と Hugo はファイルパスに任意の UTF-8 文字を使用できますが、他の文字（スペースなど）を使うとパイプラインに問題が生じる可能性があるため、許可していません。

セクション：

```plain
section-dir/
|- _index.md
|- leaf-page1.md
|- leaf-page2.md
```

ページバンドル：

```plain
page-name/
|- index.md
|- image1.png
|- image2.png
```

ページバンドルを含むセクション：

```plain
section-dir/
|- _index.md
|- leaf-page1.md
|- leaf-page2/
|  |- index.md
|  |- image.pmg
|- leaf-page3.md
```

#### ページの移動、削除、名前変更 {#moving-deleting-or-renaming-a-page}

[ページ移動のチェックリスト](#move-or-rename-a-page)に従ってください。削除する場合は、適切な代替先を
選び、リダイレクトを追加する前に、そのページへのリンクを更新します。

### ページのメンテナーを編集する {#editing-page-maintainers}

ページの右側には「Maintainers」というリストがあります。

このリストは、[ハンドブックリポジトリ](https://gitlab.com/gitlab-com/content-sites/handbook/-/blob/main/.gitlab/CODEOWNERS)など、該当リポジトリの `CODEOWNERS` ファイルから生成されます。

- 指定されたユーザーのみが表示されます。グループのメンバーは表示されません。
- リストは最も具体的なパスに基づいて生成されます。

  - ディレクトリにユーザーが指定され、さらにそのディレクトリ内の特定のページにもユーザーが指定されている場合、
    リストには特定のページに指定されたユーザーのみが含まれます。
  - 特定のページにグループやサブグループが指定されていても、個別のユーザーが指定されていない場合、
    メンテナーのリストは空になります。

`.gitlab/CODEOWNERS` ファイルの変更には承認が必要です。
適切な承認の取得方法については、ボットのコメントを確認してください。

### ショートコードが表示するコンテンツを編集する {#editing-content-from-shortcodes}

インクルード、ショートコード、インポートされたデータからコンテンツを表示するページもあります。生成された出力ではなく、
正式なソースを編集してください。エージェントに表示されている文章のソースをたどるよう
依頼するか、[#handbook](https://gitlab.enterprise.slack.com/archives/C81PT2ALD)で質問してください。
仕組みについては、[ショートコードのガイド](https://handbook.gitlab.com/docs/shortcodes/)を参照してください。

### チームメンバーのマージリクエストがコミュニティからの貢献としてラベル付けされる場合 {#team-member-merge-requests-being-labeled-as-community-contributions}

最近作成したマージリクエストがコミュニティからの貢献としてラベル付けされた場合、チームメンバーディレクトリの自分のエントリにある GitLab ユーザー名を、業務で使用する GitLab アカウントと一致するように更新すると、今後の誤ったラベル付けを解消できます。

[チームページの編集手順](edit-team-page.md)に従って自分のチームページのエントリファイルを探し、`gitlab` 属性（通常は 10 行目）を、業務で使用する GitLab.com ユーザー名と**完全に一致する**ように更新してください。

## マージリクエストでの作業 {#working-with-merge-requests}

MR のチェックが失敗したり、何か問題があるように見えたりする場合は、以下の手順で修正してください。
自分で修正することも、エージェントに支援を依頼することもできます。

### リンターエラーを修正する {#fix-linter-errors}

リンターエラーは通常、特定のスタイルガイドの規則に従っていない場合に発生します。
たとえば、行末に余分な空白がある場合や、
URL アンカーの形式が正しくない場合などです。ハンドブックプロジェクトでは、スタイルガイドに沿っていることを保証するために
さまざまなツールを使用し、マージリクエストで自動的に実行しています。ツールは
新しいコメントとして要約レポートを作成します。

以下は、さまざまな種類のエラーの例です。表の各項目は、インラインの修正提案を作成・適用できる
具体的なファイルと行にリンクしています。注：この方法は、小さな変更で特に有効です。

![リンターエラーの表が表示された MR コメント](/images/handbook/about/editing-handbook/merge-request-linter-errors.png)

エージェントの支援でリンターエラーを修正する方法はいくつかあります。

1. コメントの URL をコピーし、エージェントとのチャットのプロンプトに追加します。
   - GitLab UI の Agentic Chat、アプリ（Glean、Claude、Slack）、ローカルのエディターと CLI ツール（GitLab Duo CLI、Claude Code など）で動作を確認済みです

   ```markdown
   Please help me fix the linter errors in https://gitlab.com/gitlab-com/content-sites/handbook/-/merge_requests/21126#note_3839248743
   ```

1. コメントスレッドで Developer Flow にメンションして支援を依頼します。

   ```markdown
   @duo-developer-gitlab-com Please help me fix the linter errors in this MR
   ```

   ![リンターエラーを修正するようコメントで Duo Developer にメンションする](/images/handbook/about/editing-handbook/handbook-edit-duo-developer-at-mention.png)

手動で編集する方法：

1. GitLab UI で：
   - エラーレポートの行の URL を開く、または
   - MR の `changes` タブを開き、[コード品質の指摘](https://docs.gitlab.com/ci/testing/code_quality/#merge-request-changes-view)を確認する
   - [変更の提案を含むコメント](https://docs.gitlab.com/user/project/merge_requests/reviews/suggestions/)を追加する。
1. 単一ファイルエディター、Web IDE、またはローカルのエディターで編集します。

### 読み込まれない画像を修正する {#fix-images-that-do-not-load}

プレビューに画像が表示されない場合は、ページの URL と MR の URL、
またはローカルのチェックアウトをエージェントに渡します。画像ファイルとその参照を確認するよう依頼してください。よくある原因は、
ファイル名の誤字、大文字と小文字の違い、`.png.png` のような拡張子の
重複、画像が MR に追加されていないことなどです。

```text
Fix the image that does not load on <page URL> in <MR URL or local checkout>.
Check that the image file exists and the page references the correct path.
Verify that it loads in a local preview or review app. Show the diff and report
anything you could not verify.
```

`static/images/` 配下のファイルの公開 URL は `/images/` で始まります。
ページバンドルの場合は、ページからの相対的な画像パスを確認してください。画像ファイルが
ない場合は、エージェントに代わりの画像を考えさせず、意図した画像を提供してください。
[画像のガイド](https://handbook.gitlab.com/docs/markdown-guide/#images)を参照してください。

### マージコンフリクトを解消する {#fix-merge-conflicts}

マージリクエストでマージコンフリクトが示される場合、その MR の変更がデフォルトの main ブランチの変更と競合しています。
解消するには、main ブランチの変更を含むように自分のブランチを更新する必要があります。

ブランチが単に `main` より遅れているだけでマージコンフリクトがない場合は、新しい MR コメントで
[`/rebase` クイックアクション](https://docs.gitlab.com/user/project/merge_requests/conflicts/#rebase-in-the-gitlab-ui)を
使用します。GitLab UI のリベースには、コンフリクトのないブランチが必要です。

実際にマージコンフリクトがある場合：

1. 新しい [GitLab Duo によるコンフリクトの解消](https://docs.gitlab.com/user/project/merge_requests/conflicts/#resolve-conflicts-with-gitlab-duo)を使用します。
   - マージリクエストのボタンをクリックします。
   - この操作により、専用の Developer Flow が起動し、修正を実装してマージリクエストにコミットしようとします。目的を達成できない場合は、要約をコメントします。
1. UI またはローカルのエディターでコンフリクトを解消します。

## コントリビューション {#contributing}

### エージェントの指示とスキルを改善する {#improve-agent-instructions-and-skills}

エージェントが何度も同じ手順を見落とす場合は、共通のガイダンスの改善に協力してください。
`AGENTS.md`、コードレビューの指示、スキルへのコントリビューションについては、[Docsy のメンテナンスガイド](https://handbook.gitlab.com/docs/development/maintenance/)を
参照してください。ハンドブックの各プロジェクト間での変更のテストと同期も
含まれます。

<!-- Preserve links from existing pipeline comments and escalation references. -->
<span id="failing-pipelines"></span>
<span id="link-and-anchor-errors"></span>

## トラブルシューティング {#troubleshooting}

[トラブルシューティングガイド](troubleshooting.md)を参照してください。
[パイプラインの失敗](troubleshooting.md#failing-pipelines)と
[リンクとアンカーのエラー](troubleshooting.md#link-and-anchor-errors)を含みます。
