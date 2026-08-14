---
title: Plan:Portfolio Planning エンジニアリングチーム - 私たちの働き方
upstream_path: /handbook/engineering/devops/plan/portfolio-planning/how-we-work/
upstream_sha: e6de02eba910babdd302a4f920edec669cff51cf
translated_at: "2026-08-15T07:00:16+09:00"
translator: claude
stale: false
lastmod: "2026-08-14T14:39:01+02:00"
---

## イテレーション計画

> 19.0 と 19.1 では、計画を簡素化し進行中の作業を減らすために、2 週間のイテレーションを試験しています。

各マイルストーンは 2 つの 2 週間イテレーションに分割されます。マイルストーンが 5 週間ある場合、マイルストーンの最初の週は GitLab の開発者エクスペリエンスを改善することに専念します。

[Plan:Portfolio Planning ボード](https://gitlab.com/groups/gitlab-org/-/boards/1569369)は、現在の作業の唯一の情報源です:

- **Ready for development** — 現在のイテレーションのみ
- **Planning breakdown** — 次のイテレーション

近い将来取り組む予定がない場合、Issue はこれらのカラムに残るべきではありません。ボードにはこれを強制する WIP 制限があります。Issue が Ready for development に 2 週間以上、または Planning breakdown に 4 週間以上ある場合、すぐに着手する準備ができていない場合は、"New" に戻します。

私たちは[計画用 Issue](https://gitlab.com/gitlab-org/plan-stage/product/-/issues/?sort=title_asc&state=opened&label_name%5B%5D=group%3A%3Aportfolio%20planning&first_page_size=100)を使って、イテレーション計画を調整・議論します。各プロジェクトには、それを分解しイテレーションを計画する責任のある[DRI](/handbook/people-group/directly-responsible-individuals/)が割り当てられます。

### 品質ローテーション

各イテレーションで、1 名のエンジニアが[品質ローテーション DRI](https://gitlab.com/groups/gitlab-org/plan-stage/product-planning/-/wikis/Home/Engineering/QualityRotation)を務めます。品質 DRI はエラーバジェット、Sentry アラート、受信エスカレーションを監視し、緊急のアイテムがない時には高重大度のメンテナンス Issue に取り組みます。完全な範囲とダッシュボードについては wiki ページを参照してください。

### 作業の流れを保つ

進行中の作業を減らし Issue を動かし続けるために、いくつかのメカニズムを使用します:

- ボードカラムの **WIP 制限** は、任意のワークフローステージのオーバーロードを防ぎます。
- **ヘルスステータスエスカレーション** — Issue が 1 つのカラムに長く留まりすぎている場合、[ヘルスステータスを自動的にエスカレーションします](https://gitlab.com/gitlab-org/quality/triage-ops/-/merge_requests/3993)。ワークフロー状態が変わるとヘルスステータスは[クリアされます](https://gitlab.com/gitlab-org/quality/triage-ops/-/merge_requests/3994)。Issue は`~"Untrack Health Status"`ラベルでオプトアウトできます。
- **レビューを優先する** — より進んでいる作業を優先する: 自分の進行中の作業よりレビュー、新しいことを始めるより進行中の作業。可能な場合は、複雑なレビューをチーム内に保持し、立ち上げ時間を減らすために同じレビュアーに固執します。

## 作業の分解

デフォルトのワークアイテムタイプは **Issue** です。迷ったときは Issue を作成してください — 後でエピックまたはタスクに変換できます。

| タイプ | 対応するもの | タイムライン | 例 |
|------|---------------|----------|----------|
| **Issue** | 1 つのマージリクエスト、1 人、1 つのカテゴリー（FE または BE） | 1 週間未満 | "ボードカードコンポーネントを追加"、"保存ビュー API 用の`filter`クエリパラメーターを作成" |
| **エピック** | 複数の Issue をグループ化するスコープ化された成果物 | 1 週間から 3 マイルストーン | "保存ビューでの Boards Alpha"、"ワークアイテムカード" |
| **Task** | Issue 内のチェックリスト項目/リマインダー | — | "changelog を更新"、"ドキュメントを更新" |

より大きなプロジェクトでワークアイテムタイプをどう使うかについては、[プロジェクト例: Boards](../planning-views/project-example-boards.md)を参照してください。私たちはウェイトを使用しません。

### 良い Issue とは

- 1 人のエンジニアが 1 週間以下で完了できるほど小さい。それより大きい場合は、エピックに昇格するか、[スパイク](#spikes-and-proof-of-concepts)を作成して分解することを検討します。
- Issue を初めて見るチームメンバーが始めるのに十分な Issue 固有の詳細（要件、決定、制約）を含む。
- 要件または受け入れ基準へのリンク — Figma デザイン、wiki ページ、エピックの説明、または設計ドキュメント。Issue にコンテンツをコピーする必要はありません。
- 部門横断的なニーズをメモする — 例: "FE + BE が必要"、"UI テキスト用に TW レビューが必要"。
- 他の Issue とのブロックおよび関連関係をマークします。

### スパイクと概念実証

オープンな質問が多すぎる、またはスコープが不明確な Issue には、[Plan - Spike テンプレート](https://gitlab.com/gitlab-org/gitlab/-/blob/master/.gitlab/issue_templates/Plan%20-%20Spike.md)を使用してスパイクまたは PoC Issue を作成し、調査または試用実装にキャパシティを充てます。

目標は、エンジニアリング DRI、製品、UX の間で何を構築するか、それをどう構築するか、おおよそどのくらいの労力がかかるかについての共通理解です。これにより、プロジェクトを Issue に分解する、アルファバージョンの定義、または[設計ドキュメント](../_index.md#design-documents)につながる可能性があります。

## ミーティング

すべてのタイムゾーンをカバーするために、毎週月曜日に 3 つの週次同期ミーティングを開催します: APAC+EMEA、EMEA+AMER、AMER+APAC。誰でもトピックを持ち込むことができます — 現在のプロジェクト、質問、ブロッカー。

各マイルストーンの最初の週には、これらのミーティングをレトロスペクティブに使用します。3 つのセッションすべてが同じレトロボードを共有します。

## ドキュメント

機能フラグの背後にある機能であっても、進めるにつれてドキュメントを書きます。本番環境にまだ準備できていない機能をマークするには、[機能フラグドキュメントガイドライン](https://docs.gitlab.com/ee/development/documentation/feature_flags.html)を使用します。これにより、マイルストーンの終わりにドキュメントの急ぎ作業を回避できます。
