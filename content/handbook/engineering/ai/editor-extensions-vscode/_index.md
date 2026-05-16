---
title: "エディター拡張機能: VS Code グループ"
description: 私たちは VS Code、WebIDE のコードエディター拡張機能を所有・保守し、Language Server にも貢献することで、GitLab のコア機能と AI 機能を開発者のワークフローに直接届けます。
upstream_path: /handbook/engineering/ai/editor-extensions-vscode/
upstream_sha: 1e195b58b9f249ff10bd0e705106c320fee86141
translated_at: "2026-05-14T00:00:00Z"
translator: claude
stale: false
lastmod: "2026-05-08T14:13:21-07:00"
---

**注:** [エディター拡張機能: マルチプラットフォーム](/handbook/engineering/ai/editor-extensions-multi-platform/) チームと共に、私たちは [DevOps ライフサイクル](/handbook/product/categories/#devops-stages) の [AI-Powered ステージ](/handbook/product/categories/#ai-powered-stage) における [エディター拡張機能グループ](/handbook/product/categories/#editor-extensions-group) に属する製品カテゴリーのあらゆる側面を担当しています。

## グループ概要

### グループメンバー


<p class="my-3 text-sm text-gray-600 italic">チームメンバー情報は <a href="https://handbook.gitlab.com/handbook/engineering/ai/editor-extensions-vscode/#group-members" rel="external noopener">原文 (英語)</a> を参照してください。</p>


### 安定したカウンターパート

以下のメンバーが AI-Powered:Editor Extensions グループの [安定したカウンターパート](/handbook/leadership/#stable-counterparts) です:


<p class="my-3 text-sm text-gray-600 italic">チームメンバー情報は <a href="https://handbook.gitlab.com/handbook/engineering/ai/editor-extensions-vscode/#group-members" rel="external noopener">原文 (英語)</a> を参照してください。</p>


### 製品カテゴリー

エディター拡張機能グループは以下の [製品カテゴリー](/handbook/product/categories/#editor-extensions-group) を担当します:

- [Editor Extensions](https://about.gitlab.com/direction/create/editor_extensions/)

## コミュニケーション

私たちはチームとして週に1回の同期ミーティング（[ノート（内部）](https://docs.google.com/document/d/1UJg-Prf5qGjiGImvaYl5HNjMcJddoeE4u33Ri6SxQ6g)）を、AMER/EMEA と AMER/APAC の時間帯を週ごとに交互に切り替えながら開催しています。
録画は GitLab Unfiltered の [Editor Extensions Category](https://www.youtube.com/playlist?list=PL05JrBw4t0KoC0pFfuNOAQjKxe4_ypFKc) プレイリストにアップロードされます。

議論が終わったら録画を停止し、残りの時間はそのままコールに残ってグループの [コーヒーチャット](/handbook/company/culture/all-remote/informal-communication/#coffee-chats) を行います。

- 私たちのチームと安定したカウンターパートは、以下の Slack チャンネルをよく利用しています:
  - [#ai-engineering](https://gitlab.slack.com/archives/C08TUAH45NG)
  - [#g_editor-extensions](https://gitlab.slack.com/archives/C058YCHP17C)
  - [#g_editor-extensions_social](https://gitlab.slack.com/archives/C062W19B8NR)
  - [#g_editor-extensions-standup](https://gitlab.slack.com/archives/C058YCWPKMG)
- 個別の機能については専用チャンネルで議論します:
  - Language Server: [#f_language_server](https://gitlab.slack.com/archives/C05B1PFHRPU)
  - VS Code 拡張機能: [#f_vscode_extension](https://gitlab.slack.com/archives/C013QJ9NEPL)
  - Web IDE: [#f_vscode_web_ide](https://gitlab.enterprise.slack.com/archives/C03CEHDPQGH)
  - Visual Studio 拡張機能: [#f_visual_studio_extension](https://gitlab.slack.com/archives/C0581SE363C)
  - Eclipse プラグイン: [#f_eclipse_plugin](https://gitlab.enterprise.slack.com/archives/C07MKHCFGHG)
  - JetBrains プラグイン: [#f_jetbrains_plugin](https://gitlab.slack.com/archives/C02UY9XKABH)
  - Neovim 拡張機能: [#f_neovim_plugin](https://gitlab.slack.com/archives/C05BF7L6PEX)

## 共有カレンダー

- Editor Extensions 共有カレンダー（カレンダー ID: c_673d889354d021f7fa9f20a003b5867185a9bf12989b5eaacbc8b537cc9ef27c@group.calendar.google.com）

## クロスグループのオーナーシップと境界

エディター拡張機能のシステムは、異なるグループが所有する機能やモジュールをホストしています。

[オーナーシップと境界](/handbook/engineering/ai/editor-extensions-vscode/ownership/) ページでは、私たちのシステムで機能を作成・保守するすべての関係者の間に明確さと期待値を提供しています。

## グループプロセス

私たちのグループプロセスは本セクションに文書化されています。
あるプロセスが使われているのにここに記載されていない場合は、[プロセスの進化](#evolving-the-process) のガイダンスに従って文書化してください。

私たちのグループは比較的新しく、現状ではプロセスは軽量です。
[プロダクト開発フロー](/handbook/product-development/how-we-work/product-development-flow/) や [エンジニアリングワークフロー](/handbook/engineering/workflow/) に文書化されている共通プロセスとは、いくつかの運用上の違いがあります。

### プロセスの進化

私たちはプロセスに対して [イテレーション](/handbook/values/#iteration) のアプローチを取ります。
すべてを一度に定義するのではなく、ギャップや問題が見えたときにプロセスを追加します。
[効率性](/handbook/values/#freedom-and-responsibility-over-rigidity) のため、役目を終えたプロセスを削除することも厭いません。

プロセスを進化させるには、このページに対して具体的な提案を含む [MR から始めて](/handbook/communication/#start-with-a-merge-request) フィードバックを求めてください。
議論には Issue のほうが向いている場合は、[`meta` プロジェクト](https://gitlab.com/gitlab-org/editor-extensions/meta/-/issues) で作成してください。

### Epic と Issue

私たちは計画された作業の [単一の信頼できる情報源として Issue/Epic の説明を排他的に使用](/handbook/product-development/how-we-work/product-development-flow/#issue-descriptions-as-the-single-source-of-truth-ssot) しています。

- Epics: [GitLab Epic 検索](https://gitlab.com/groups/gitlab-org/-/epics?state=opened&page=1&sort=start_date_desc&label_name[]=group::editor+extensions)
- Issues: [GitLab Issue 検索](https://gitlab.com/groups/gitlab-org/-/issues/?sort=due_date&state=opened&label_name%5B%5D=group%3A%3Aeditor%20extensions&first_page_size=20)

Epic と Issue は、可能な限り狭い範囲のスコープに合致するプロジェクトで作成します。以下のプロジェクトを使用しています:

- 単一の拡張機能または Language Server に固有の作業:
  - [Language Server](https://gitlab.com/gitlab-org/editor-extensions/gitlab-language-server-for-code-suggestions)
  - [Visual Studio Extension](https://gitlab.com/gitlab-org/editor-extensions/gitlab-visual-studio-extension)
  - [VS Code Extension](https://gitlab.com/gitlab-org/gitlab-vscode-extension)
  - [JetBrains Extension](https://gitlab.com/gitlab-org/editor-extensions/gitlab-jetbrains-plugin)
  - [Neovim Extension](https://gitlab.com/gitlab-org/editor-extensions/gitlab.vim)
- その他のプロジェクト:
  - [Editor Extensions Meta](https://gitlab.com/gitlab-org/editor-extensions/meta) - 単一の拡張機能に固有でない拡張機能の作業や、一般的なチーム関連の Issue
  - [Code Suggestions](https://gitlab.com/gitlab-org/modelops/applied-ml/code-suggestions) - 拡張機能に固有でない Code Suggestions の作業
  - [GitLab](https://gitlab.com/gitlab-org/gitlab) - モノリスの作業

### 優先順位付け

私たちは [マイルストーン計画 Issue](https://gitlab.com/gitlab-org/editor-extensions/meta/-/issues/?sort=created_date&state=all&label_name%5B%5D=Planning%20Issue) を使用して、現在/今後のマイルストーンの目標を定義します。
PM と EM が目標のすり合わせを担当します。
計画 Issue は毎月 [自動的に作成](https://gitlab.com/gitlab-org/editor-extensions/meta/-/tree/main#issue-creation-process) されます。

[Editor Extensions 優先度ボード](https://gitlab.com/groups/gitlab-org/-/boards/7088820?label_name[]=group%3A%3Aeditor%20extensions) を使用して、相対的な [Issue の優先度](/handbook/product/product-processes) を追跡します。列の上部にある Issue ほど優先度が高くなります。

別途、このグループのテクニカルライターはオープンな Issue を、ドキュメントや UI テキスト変更の可能性についてトリアージし、テクニカルライティングの [トリアージプロセス](https://docs.gitlab.com/development/documentation/workflow/#documentation-feedback-and-improvements) に従います。レビュー後、各 Issue には `~tw::triaged` ラベルが付けられます。

#### 技術的負債

技術的負債は `~tech-debt` ラベルでマークします。

##### Language Server ＋ VS Code Extension

技術的負債の優先順位付けは、月次の TypeScript Contributors ミーティング（[ミーティング Issue 例](https://gitlab.com/gitlab-org/editor-extensions/meta/-/issues/160)）で行います。
このミーティングはチームカレンダー（フロントエンドおよび Create ステージのカレンダーにも）で確認できます。

ミーティング設定の詳細プロセスは、こちらの [チームスニペット](https://gitlab.com/gitlab-org/editor-extensions/meta/-/snippets/4767546) で確認できます。

[すべての技術的負債 Issue](https://gitlab.com/groups/gitlab-org/-/issues/?sort=created_date&state=opened&label_name%5B%5D=tech-debt&or%5Blabel_name%5D%5B%5D=group%3A%3Aeditor+extensions&or%5Blabel_name%5D%5B%5D=Category%3AWeb+IDE&not%5Blabel_name%5D%5B%5D=Deliverable&first_page_size=100) に絵文字リアクションで投票し、優先度の高い Issue をミーティングで議論します。最も多くの票を得た Issue が（キャパシティが許せば）次のマイルストーンで優先されます。

### 見積もり

Issue の複雑さの大まかな見積もりを示すために、3つのウェイトを使用します。ウェイトは2つの要素から構成されます:

#### ベースウェイト

これらはコードベース／システムに精通している人向けの見積もりです。

- `1` - 1〜2日の作業
- `2` - 1週間の作業
- `3` - 1.5週間の作業

ベースウェイトが `3` を超えるものはすべてスパイクとして扱い、結果として見積もり付きの1つ以上の Issue を生成すべきです。

#### 主観的ウェイト

チーム／コードベース／システムに新しい場合は、ベースウェイトに `1` または `2` の追加ウェイトを足すことができます。

例:

- Bob はチームに新しく、ウェイト `1`（つまり単純な）の Issue を担当します。技術は知っていますが、私たちのシステムは知りません。`2` の主観的ウェイトを追加して、最終ウェイトは `3` になります。
- Alice はシステムに精通していますが、認証に触れる Issue（ウェイト `2`）を担当します。Alice は私たちの認証パターンに不慣れなので、既存のアプローチをレビューする時間を確保するため `1` の主観的ウェイトを追加します。最終ウェイトは `3` になります。

### 開発ワークフロー

進行中の作業は [ワークフローボード](https://gitlab.com/groups/gitlab-org/-/boards/7248909?milestone_title=16.8&label_name%5B%5D=group%3A%3Aeditor+extensions) でキャプチャされます。
Issue がこのボードに表示されるためには、`~"group::editor extensions"` ラベルと現在のマイルストーンが必要です。

Issue の作業時には [ワークアイテムステータス](https://docs.gitlab.com/user/work_items/status/) を使用します。

- `Planning breakdown` - Issue は優先順位付けの準備ができている。
- `Ready for development` - Issue は説明・見積もり・スケジュールが完了し、ピックアップされて作業される準備ができている。
- `In dev` - Issue には実装を開始した担当者が割り当てられている。
- `In review` - スパイク／実装が完了し、誰かがスパイク結果または最後の MR をレビューする必要がある（最後の MR と表現するのは、複数の MR を実装している場合、最後の MR のみがワークフローラベルの変更を引き起こすべきだからです）。

ワークアイテムステータスが利用できない場合は、スコープ付き `~workflow` ラベルを使用します:

- `~"workflow::ready for development"`
- `~"workflow::in dev"`
- `~"workflow::in review"`

### レトロスペクティブ


<!-- include omitted: includes/engineering/ai/editor-extensions-retrospectives.md (no localized version under content/ja/) -->


### コードレビュー

#### コメントの重大度レベル

私たちは MR レビューで以下のレベルのコメントを使用します。MR レビュアーは自分のコメントの重大度を判断し、その判断を MR 作成者と議論します。

immediate follow-up と follow-up のレベルには、より複雑なプロセスが付随しています。レビューでこのページにリンクすることで、フォローアップをどのように追跡し対処すべきか説明できます。

- **blocking** - `(blocking)` - 同じ MR で対処する必要があります。装飾子のないすべてのコメントは blocking 扱いなので、`(blocking)` 装飾子を追加するのは任意です。
- **immediate follow-up** - `(non-blocking, immediate follow-up)` - コメントが重要なため、修正は作成者が次に作る MR としてすぐに実装すべきです（クリティカルな本番バグなどの緊急事態はフォローアップより優先されます）。
- **follow-up** - `(non-blocking, follow-up)` - この問題は対処すべきですが、その重大度は他のすべての技術的負債やフォローアップとの兼ね合いで判断すべきです。
- **optional** - `(non-blocking)` - このコメントは個人的な好みか、MR に大きな影響を与えないものです。フォローアップ Issue を作成するかは任意です。

##### immediate follow-up を使用するタイミング

blocking コメントの代わりに immediate follow-up を選ぶ理由は次のとおりです:

- 元の MR が複雑すぎて再フォーカスを試みている場合 - MR レビューに多数のコメントが付き、何日も続いている場合、immediate follow-up に取り組むことで認知負荷を減らし、フォーカスを改善できます。
- **元の MR が緊急の場合** - MR が緊急／クリティカルな機能を提供しており、機能は動作するもののコードを私たちの基準に合わせて変更する必要がある場合。緊急性がなければ、同じ MR で作業することを好むでしょう。

##### immediate follow-up プロセス

未対処の immediate follow-up コメントを持つ MR がマージされた場合:

- MR 作成者はこのコメントに対する Issue を作成し、Issue が以下を満たすことを確認します:
  - MR 作成者がアサインされている
  - 作業を捉えるタイトルと説明がある
  - 元の MR に関連付けられた blocking issue としてマークされている
  - `~immediate` および `~follow-up` ラベルが付けられている
- immediate follow-up が実装されるまで、元の MR の GitLab Issue はクローズすべきではありません。

##### follow-up プロセス

1. MR 作成者は follow-up Issue を作成し、フォローアップが何についてのものかを **明確に文書化**（タイトルと説明に）し、`~follow-up` ラベルを追加します。
1. MR 作成者は [コード内の `// FIXME` コメント](#tracking-issues-in-code-with-fixme-comments) で Issue を参照します。

##### コメント例

> "(immediate follow-up): これはシングルトンを導入していますが、私たちはシステム全体でシングルトンから移行しようとしています（Issue リンク）。アンチパターンの拡散を防ぐため、これに迅速に対処すべきです。"

これらのコメントの重大度レベルは静的ではありません。例えば、最初は _blocking_ としてマークしたコメントを、MR 作成者との議論後、_follow-up_ に変更することに同意するかもしれません。

#### FIXME コメントによるコード内の Issue 追跡

私たちは `// FIXME` コメントを使ってコード内で既存の Issue を直接追跡します。これらのコメントは2つの方法で作成されます:

- エンジニアが開発中に _既存の_ Issue に気付き、すぐに修正できない場合。コードベースに `// FIXME` コメントを追加し、_任意で_ Issue を参照します。
- MR レビュー中に [フォローアップコメント](#follow-up-process) が作成され、このフォローアップを Issue と `// FIXME` コメントの両方で追跡する場合。

メンテナーは、レビューサイクルを増やさないため、マージ前の最後のコミットとして MR に `// FIXME` コメントを追加することが許可されています。

`FIXME` と `TODO` のコメントは互換的に使用します。

このアプローチのより詳細な説明と利点のリストについては、[提案](https://gitlab.com/gitlab-org/editor-extensions/meta/-/issues/142) を参照してください。

## 知識共有

このセクションには、各拡張機能で同じ情報を簡単に見つけられるようにするためのリンクがあります。
これは最初のイテレーションであり、最終的にはこのコンテンツは別の場所に置かれるでしょう。

### Code Suggestions がサポートする言語

各拡張機能はサポートする言語の配列を定義します。

- VS Code: [AI_ASSISTED_CODE_SUGGESTIONS_LANGUAGES](https://gitlab.com/gitlab-org/gitlab-vscode-extension/-/blob/f28a17478a41f554e1c620648237705007128d57/src/common/code_suggestions/constants.ts#L9-37)
- Visual Studio: [LanguageManager](https://gitlab.com/gitlab-org/editor-extensions/gitlab-visual-studio-extension/-/blob/a973ef56bac290ed0c2c5c69d20c5606a7198125/GitLab.Extension/CodeSuggestions/LanguageManager.cs#L17-42)
- JetBrains: [SUPPORTED_EXTENSIONS](https://gitlab.com/gitlab-org/editor-extensions/gitlab-jetbrains-plugin/-/blob/ec5b239e6dea3714139031a4d6a9a547142afffc/src/main/kotlin/com/gitlab/plugin/util/GitLabUtil.kt#L20-43)
- Neovim: [auto_filetypes](https://gitlab.com/gitlab-org/editor-extensions/gitlab.vim/-/blob/5b781dffbd047df7050064ad3255154ecef2524c/lua/gitlab/config/defaults.lua#L7-28)

### 使用中の Language Server バージョン

- Visual Studio: サーバーバイナリは直接バージョン管理されています: [GitLab.Extension/Resources/gitlab-lsp-win-x64.exe](https://gitlab.com/gitlab-org/editor-extensions/gitlab-visual-studio-extension/-/blob/a973ef56bac290ed0c2c5c69d20c5606a7198125/GitLab.Extension/Resources/gitlab-lsp-win-x64.exe)
- VS Code: サーバーはパッケージとしてプルされます: [package.json](https://gitlab.com/gitlab-org/gitlab-vscode-extension/-/blob/main/package.json)
- JetBrains: 該当なし - [Issue](https://gitlab.com/gitlab-org/editor-extensions/gitlab-jetbrains-plugin/-/issues/30) を参照
- Neovim: サーバーはパッケージとしてプルされます: [lsp/package.json](https://gitlab.com/gitlab-org/editor-extensions/gitlab.vim/-/blob/main/lsp/package.json)

## 採用情報

現在の募集職種については [求人ページ](https://about.gitlab.com/jobs/) をご覧ください。
