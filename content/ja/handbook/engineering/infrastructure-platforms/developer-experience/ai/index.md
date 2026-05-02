---
title: "Developer Experience における AI"
description: "Developer Experience チームがエンジニアリングワークフロー改善のために AI ツールとプラクティスをどのように活用しているか"
upstream_path: "/handbook/engineering/infrastructure-platforms/developer-experience/ai/"
upstream_sha: "6a459a3ca969603754a3b5133342edb804d3012c"
translated_at: "2026-04-28T16:51:32Z"
translator: claude
stale: false
---

Developer Experience チームは、自分たちの作業を加速させ、開発者の視点から GitLab の AI 機能を検証し、効果的な AI 支援エンジニアリングワークフローに関する組織的な知識を構築するために、AI を積極的に活用しています。このページでは、私たちのツール、ガイドライン、プラクティスを記載しています。

## 使用ツール

| ツール | 目的 | 主な用途 |
|------|---------|-------------------|
| **GitLab Duo** | GitLab のネイティブ AI アシスタント | コードサジェスト、コードレビュー、マージリクエストサマリー、根本原因分析 |
| **Claude (Anthropic)** | 複雑なタスク向け AI アシスタント | ライティング、リサーチ、アーキテクチャの議論、長文ドキュメント |
| **gitlab-mcp** | GitLab を AI ツールに接続する MCP サーバー | AI アシスタントに GitLab プロジェクト、Issue、MR、パイプラインへのライブアクセスを提供 |

GitLab の開発者体験チームとして、GitLab Duo を主要な AI ツールとして優先しています — 自社製品であることと、カスタマーゼロとして使用することで、すべてのエンジニアのために改善できる直接的なフィードバックが得られるためです。

## ガイドラインと原則

### 推奨すること

- **まず GitLab Duo をドッグフーディングする。** AI タスクを GitLab Duo で実行できる場合はそれを使用します。これにより実際の使用データが生成され、摩擦ポイントが浮き彫りになり、対応できるフィードバックが得られます。
- **AI 支援によるレビュー（AI による置き換えではなく）。** AI を使って問題をより速く特定しますが、正確性やセキュリティに関する人間の判断を省略しません。
- **効果的なものを共有する。** 有用なプロンプト、ワークフロー、テクニックを見つけたら、ここに記録するか、チームチャンネルで共有して、チーム全体が恩恵を受けられるようにします。
- **協力者への透明性。** AI がドキュメント、設計、コードなどの成果物に大きく貢献した場合、協力者がコンテキストを理解できるよう明記します。

### AI 支援レベルラベル

AI が私たちの作業にどのように影響しているかをより明確に把握するために、すべてのマージリクエスト作成者はマージ前に **`devex-ai-assistance`** スコープラベルを適用することが求められています。このラベルは AI が MR にどの程度貢献したかを示す 1 〜 5 のシンプルなスケールです:

| ラベル | 意味 |
|---|---|
| `devex-ai-assistance::1` | **AI 不使用。** MR は AI 支援なしで人間が完全に作成しました。 |
| `devex-ai-assistance::2` | **軽微な AI 支援。** AI は構文の調査、コミットメッセージの生成、数行の自動補完など、小規模で局所的なタスクに使用されました。人間が作業を主導しました。 |
| `devex-ai-assistance::3` | **中程度の AI 支援。** AI はコードのセクションの下書き、テストの生成、ドキュメントの構造化など、MR の一部に意味のある貢献をしましたが、人間が重要な意思決定を行い、大幅な編集を実施しました。 |
| `devex-ai-assistance::4` | **大きな AI 支援。** MR コンテンツの大部分が AI によって生成または大きく誘導されました。人間の役割は主に指示、レビュー、出力の改善でした。 |
| `devex-ai-assistance::5` | **完全 AI 主導。** AI はプロンプトと最終レビュー以外に最小限の人間の入力でタスクのすべての要素に使用されました。 |

**なぜこれを行うか:**

- AI が最も効果的な場所とそうでない場所を理解するためのデータが得られます。
- 透明性の原則を支援します — レビュアーや協力者は、作業がどのように作成されたかを一目で確認できます。
- 時間の経過とともに、AI 支援が多い MR のレビュー深度に関する期待値をチームがキャリブレーションするのに役立ちます。

これは[スコープラベル](https://docs.gitlab.com/ee/user/project/labels.html#scoped-labels)であるため、一度に 1 つのレベルのみ適用できます。どのレベルが適切かわからない場合は、最も近いものを選んでください — 習慣を身につけることが精度よりも重要です。

### 避けること

- **レビューなしで AI 生成コードをコミットすること。** AI 支援かどうかにかかわらず、すべてのコードは標準的なレビューを経ます。AI の出力は自信を持って間違えることがあります。
- **外部 AI ツールに機密データを共有すること。** 内部顧客データ、未リリース機能の詳細、その他の機密情報を GitLab の境界外の AI ツールに貼り付けないでください。[GitLab の AI 使用許可ポリシー](/handbook/legal/acceptable-use-policy/) に従ってください。
- **セキュリティに敏感な作業を AI に過度に依存すること。** セキュリティの決定には人間の専門知識が必要です。AI は出発点として使用し、最終的な判断として扱わないでください。

## ワークフロー

### コードレビュー支援

GitLab Duo コードレビューを使用して、人間のレビュアーを割り当てる前に AI 生成のサマリーと初期フィードバックを取得します。これにより、レビュアーは機械的な問題ではなく、より高レベルな懸念事項に集中できます。

**使い方:**

1. マージリクエストを開き、Duo のコードレビューサマリーをトリガーする
2. フラグされた単純な問題（タイポ、明らかなスタイル問題）に対処する
3. AI サマリーをコンテキストとして利用可能にして人間のレビュアーをアサインする

### テスト生成

新機能とバグ修正に対して、AI を使用してテストのスキャフォールディングを加速します — 関数のシグネチャや仕様から初期テストケースを生成し、その後改良します。

**有用なプロンプト:**

- 「このメソッドの RSpec ユニットテストを生成してください。nil 入力と境界値のエッジケースを網羅してください」
- 「この失敗したテスト出力から、根本原因と修正方法を提案してください」

### ドキュメントの下書き

ハンドブックページ、ランブック、設計ドキュメントに対して、AI を使用して構造とボイラープレートを下書きし、その後チーム固有の知識と決定で改良します。

### インシデント分析

インシデント中および後に、失敗したパイプラインに対して GitLab Duo の根本原因分析機能を使用し、AI アシスタントを使用して大きなログ出力を解析してパターンを特定します。

### MR レビュー指示による標準のコード化

GitLab Duo の[カスタム MR レビュー指示](https://docs.gitlab.com/user/gitlab_duo/customize_duo/review_instructions/)により、すべてのマージリクエストレビューで Duo が自動的に適用するプロジェクト固有の標準を定義できます。レビュアーが同じパターンを繰り返しキャッチすることに頼るのではなく、ルールを一度書けば Duo が一貫して適用します。

**仕組み:**

リポジトリに `.gitlab/duo/mr-review-instructions.yaml` ファイルを作成します。Duo は MR をレビューするたびにこれを読み込み、カスタムルールを標準のレビュー基準に追加します。違反を見つけた場合、「'[ルール名]' のカスタム指示に従って: [フィードバック]」とコメントします。

**例 — DevEx の規約を適用する:**

```yaml
instructions:
  - name: Test quality
    fileFilters:
      - "spec/**/*.rb"
    instructions: |
      1. Every `it` block description must read as a complete sentence that
         describes behaviour, not implementation (e.g. "returns an empty array
         when the user has no projects", not "empty array")
      2. Shared examples should be named so their inclusion reads naturally
         (e.g. `it_behaves_like "a paginated endpoint"`)
      3. Flag tests that assert on too many things at once — suggest splitting
         into focused examples

  - name: Code review clarity
    fileFilters:
      - "**/*.rb"
    instructions: |
      1. Highlight where intent is unclear and suggest a rename or a comment
         to explain the why
      2. If error handling swallows exceptions silently, flag it and ask
         whether the failure should be surfaced
```

**コード化すべきこととそうでないこと:**

MR レビュー指示は、評価するために判断やコンテキストが必要なものに使用します:

- 読みやすさと意図（「この説明は文として読めるか?」）
- アーキテクチャの適合性（「これはサービスオブジェクトかモデルか?」）
- リントルールとして表現しにくいパターン

静的解析で既にカバーされているチェックを重複させることは避けてください。RuboCop や Danger が確定的にキャッチできるなら、そちらに任せましょう — 安価で、決定論的で、MR が開かれる前に IDE で直接表示されます。リンターとの重複は価値なく騒音を増やすだけです。

**ヒント:**

- `fileFilters` を使用してルールを適切なファイルにスコープします — 広範なルールをどこにでも適用すると騒音が発生します
- 指示に番号を付けて、Duo のフィードバックが明確に参照できるようにします
- 少数の高価値なルールセットから始め、人間のレビュアーがまだキャッチしているものに基づいて時間をかけて拡張します
- 完全な YAML リファレンスについては [GitLab Duo MR レビュー指示ドキュメント](https://docs.gitlab.com/user/gitlab_duo/customize_duo/review_instructions/) を確認してください

### CLAUDE.md と AGENTS.md でリポジトリにコンテキストを組み込む

AI コーディングエージェントは、プロジェクトの規約を事前に理解しているときに最も効果的に機能します。会話のたびにコードベースを説明する代わりに、エージェントがリポジトリで作業するたびに自動的に読み込む指示ファイルをコミットできます。

**CLAUDE.md** はすべてのセッションの開始時に Claude Code に読み込まれます。リポジトリのルートに配置すると、Claude は作業を行う前に読み込みます — プロンプトは不要です。サブディレクトリにも CLAUDE.md ファイルを追加できます; そのディレクトリのファイルを Claude が読み込む際にオンデマンドで読み込まれます。これはモノレポで役立ちます。

**AGENTS.md** は OpenAI Codex、Cursor、Windsurf など複数のツールがサポートする[オープンスタンダード](https://agents.md/)です。CLAUDE.md と同じ目的を果たしますが、より広いエージェントセットに対応しています。ツール間で機能するエージェント指示が必要な場合、AGENTS.md がより良い選択です。

両ファイルは同じリポジトリに共存でき、競合しません。

**含めるべき内容:**

```markdown
# Commands
- Run tests: `bundle exec rspec`
- Lint: `bundle exec rubocop`

# Code Style
- Prefer keyword arguments for methods with 3+ parameters

# Repository Structure
- Feature code lives in `app/`, specs mirror this in `spec/`
- Shared test helpers go in `spec/support/`

# Workflow
- Branch naming: `<type>/<issue-id>-short-description`
- Always link MRs to an issue
- Never commit directly to the default branch (`main` or `master`)

# Off Limits
- Do not modify files in `db/migrate/` unless explicitly asked
- Do not change `.gitlab-ci.yml` without checking with the team
```

**ヒント:**

- ファイルは 200 行以下に保ちます — エージェントは長いファイルに少ない重みを付けます
- ツール名だけでなく、実際に実行するコマンドを含めます
- 機密性の高いファイル（マイグレーション、CI 設定、シークレット）をエージェントが変更しないようにするための「立入禁止」または「触れてはいけない」セクションを使用します
- モノレポには、共有規約を持つルートレベルのファイルと、パッケージ固有のルールを持つパッケージごとのファイルを配置します

**Claude Code で出発点を生成する:**

リポジトリのルートから Claude Code で `/init` を実行すると、コードベースを分析して改良可能な CLAUDE.md の下書きを生成します。

### GitLab MCP サーバー

[GitLab MCP サーバー](https://docs.gitlab.com/user/gitlab_duo/model_context_protocol/mcp_server/) は [Model Context Protocol](https://modelcontextprotocol.io/) (MCP) を実装しています。これは AI アシスタントが外部ツールやデータソースに接続するための標準プロトコルです。設定すると、Claude Code などの AI ツールが手動でコンテキストをコピー&ペーストすることなく、GitLab から直接 Issue、マージリクエスト、パイプライン、プロジェクトデータを読み取れるようになります。

**実現できること:**

- エディタを離れずに、オープンな Issue や MR のステータスについて AI アシスタントに質問できる
- AI に Issue を作成させたり、MR にコメントしたり、会話に基づいてアクションをトリガーさせたりできる
- デバッグや作業計画時に AI にライブのプロジェクトコンテキストを提供できる

**セットアップ方法**

GitLab の MCP サーバーは `https://gitlab.com/api/v4/mcp` で利用可能で、OAuth を使用して認証します。HTTP トランスポートが推奨されるアプローチです — 追加の依存関係は不要です。

_Claude Code:_

```shell
claude mcp add --transport http GitLab https://gitlab.com/api/v4/mcp
```

_Claude Desktop:_ `~/Library/Application Support/Claude/claude_desktop_config.json` に以下を追加してください:

```json
{
  "mcpServers": {
    "GitLab": {
      "type": "http",
      "url": "https://gitlab.com/api/v4/mcp"
    }
  }
}
```

サーバーを追加した後、初回使用時にブラウザベースの OAuth で認証するよう求められます。

**glab mcp（代替手段）**

GitLab CLI は `glab mcp serve` を通じて実験的な MCP サーバーを提供しており、stdio トランスポートを介して同様の GitLab 機能を公開します。これは、ローカルでサーバーを実行したい場合や、セルフマネージドインスタンスに接続する必要がある場合に役立ちます。この機能は実験的とマークされており、変更される可能性があります。

## 実験とドッグフーディング

DevEx チームとして、私たちは一般的なエンジニアリングチームと同様に GitLab の AI 機能を体験するというユニークな責任を持っています。これは私たち自身のロードマップと GitLab 製品チームへのフィードバックの両方に役立ちます。

### ドッグフーディングの方法

- 日常業務で GitLab Duo を使用し、摩擦ポイントや欠けている機能について Issue を提出します
- 新しい Duo 機能がリリースされたら、スプリント内に実際の作業で試用し、チームのレトロスペクティブで結果を共有することを目指します

## リソース

- [AGENTS.md オープンスタンダード](https://agents.md/)
- [GitLab Duo ドキュメント](https://docs.gitlab.com/ee/user/gitlab_duo/)
- [GitLab MCP サーバードキュメント](https://docs.gitlab.com/user/gitlab_duo/model_context_protocol/mcp_server/)
- [glab mcp ドキュメント](https://docs.gitlab.com/cli/mcp/)
- [GitLab AI 使用許可ポリシー](/handbook/legal/acceptable-use-policy/)
- [GitLab の AI に対するアプローチ](/handbook/product/ai/)
