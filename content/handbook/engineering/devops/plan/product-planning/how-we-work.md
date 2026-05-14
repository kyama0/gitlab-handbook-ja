---
title: Plan:Product Planningエンジニアリングチーム - 私たちの働き方
upstream_path: /handbook/engineering/devops/plan/product-planning/how-we-work/
upstream_sha: 1e195b58b9f249ff10bd0e705106c320fee86141
translated_at: "2026-05-14T00:00:00Z"
translator: claude
stale: false
---

## イテレーション計画

> 19.0と19.1では、計画を簡素化し進行中の作業を減らすために、2週間のイテレーションを試験しています。

各マイルストーンは2つの2週間イテレーションに分割されます。マイルストーンが5週間ある場合、マイルストーンの最初の週はGitLabの開発者エクスペリエンスを改善することに専念します。

[Plan:Product Planningボード](https://gitlab.com/groups/gitlab-org/-/boards/1569369)は、現在の作業の唯一の情報源です:

- **Ready for development** — 現在のイテレーションのみ
- **Planning breakdown** — 次のイテレーション

近い将来取り組む予定がない場合、Issueはこれらのカラムに残るべきではありません。ボードにはこれを強制するWIP制限があります。IssueがReady for developmentに2週間以上、またはPlanning breakdownに4週間以上ある場合、すぐに着手する準備ができていない場合は、"New" に戻します。

私たちは[計画用Issue](https://gitlab.com/gitlab-org/plan-stage/product/-/issues/?sort=title_asc&state=opened&label_name%5B%5D=group%3A%3Aproduct%20planning&first_page_size=100)を使って、イテレーション計画を調整・議論します。各プロジェクトには、それを分解しイテレーションを計画する責任のある[DRI](/handbook/people-group/directly-responsible-individuals/)が割り当てられます。

### 品質ローテーション

各イテレーションで、1名のエンジニアが[品質ローテーションDRI](https://gitlab.com/groups/gitlab-org/plan-stage/product-planning/-/wikis/Home/Engineering/QualityRotation)を務めます。品質DRIはエラーバジェット、Sentryアラート、受信エスカレーションを監視し、緊急のアイテムがない時には高重大度のメンテナンスIssueに取り組みます。完全な範囲とダッシュボードについてはwikiページを参照してください。

### 作業の流れを保つ

進行中の作業を減らしIssueを動かし続けるために、いくつかのメカニズムを使用します:

- ボードカラムの**WIP制限**は、任意のワークフローステージのオーバーロードを防ぎます。
- **ヘルスステータスエスカレーション** — Issueが1つのカラムに長く留まりすぎている場合、[ヘルスステータスを自動的にエスカレーションします](https://gitlab.com/gitlab-org/quality/triage-ops/-/merge_requests/3993)。ワークフロー状態が変わるとヘルスステータスは[クリアされます](https://gitlab.com/gitlab-org/quality/triage-ops/-/merge_requests/3994)。Issueは`~"Untrack Health Status"`ラベルでオプトアウトできます。
- **レビューを優先する** — より進んでいる作業を優先する: 自分の進行中の作業よりレビュー、新しいことを始めるより進行中の作業。可能な場合は、複雑なレビューをチーム内に保持し、立ち上げ時間を減らすために同じレビュアーに固執します。

## 作業の分解

デフォルトのワークアイテムタイプは**issue**です。迷ったときはIssueを作成してください — 後でエピックまたはタスクに変換できます。

| タイプ | 対応するもの | タイムライン | 例 |
|------|---------------|----------|----------|
| **Issue** | 1つのマージリクエスト、1人、1つのカテゴリー（FEまたはBE） | 1週間未満 | "ボードカードコンポーネントを追加"、"保存ビューAPI用の`filter`クエリパラメーターを作成" |
| **Epic** | 複数のIssueをグループ化するスコープ化された成果物 | 1週間から3マイルストーン | "保存ビューでのBoards Alpha"、"ワークアイテムカード" |
| **Task** | Issue内のチェックリスト項目/リマインダー | — | "changelogを更新"、"ドキュメントを更新" |

より大きなプロジェクトでワークアイテムタイプをどう使うかについては、[プロジェクト例: Boards](./project-example-boards.md)を参照してください。私たちはウェイトを使用しません。

### 良いIssueとは

- 1人のエンジニアが1週間以下で完了できるほど小さい。それより大きい場合は、エピックに昇格するか、[スパイク](#spikes-and-proof-of-concepts)を作成して分解することを検討します。
- Issueを初めて見るチームメンバーが始めるのに十分なIssue固有の詳細（要件、決定、制約）を含む。
- 要件または受け入れ基準へのリンク — Figmaデザイン、wikiページ、エピックの説明、または設計ドキュメント。Issueにコンテンツをコピーする必要はありません。
- 部門横断的なニーズをメモする — 例: "FE + BEが必要"、"UIテキスト用にTWレビューが必要"。
- 他のIssueとのブロックおよび関連関係をマークします。

### スパイクと概念実証

オープンな質問が多すぎる、またはスコープが不明確なIssueには、[Plan - Spikeテンプレート](https://gitlab.com/gitlab-org/gitlab/-/blob/master/.gitlab/issue_templates/Plan%20-%20Spike.md)を使用してスパイクまたはPoC Issueを作成し、調査または試用実装にキャパシティを充てます。

目標は、エンジニアリングDRI、製品、UXの間で何を構築するか、それをどう構築するか、おおよそどのくらいの労力がかかるかについての共通理解です。これにより、プロジェクトをIssueに分解する、アルファバージョンの定義、または[設計ドキュメント](../_index.md#design-documents)につながる可能性があります。

## ミーティング

すべてのタイムゾーンをカバーするために、毎週月曜日に3つの週次同期ミーティングを開催します: APAC+EMEA、EMEA+AMER、AMER+APAC。誰でもトピックを持ち込むことができます — 現在のプロジェクト、質問、ブロッカー。

各マイルストーンの最初の週には、これらのミーティングをレトロスペクティブに使用します。3つのセッションすべてが同じレトロボードを共有します。

## ドキュメント

機能フラグの背後にある機能であっても、進めるにつれてドキュメントを書きます。本番環境にまだ準備できていない機能をマークするには、[機能フラグドキュメントガイドライン](https://docs.gitlab.com/ee/development/documentation/feature_flags.html)を使用します。これにより、マイルストーンの終わりにドキュメントの急ぎ作業を回避できます。
