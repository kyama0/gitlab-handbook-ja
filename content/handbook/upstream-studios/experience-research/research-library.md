---
title: GitLab Research Library
description: UX リサーチのインサイト、発見、知識発見のための中心ハブ。
upstream_path: /handbook/upstream-studios/experience-research/research-library/
upstream_sha: a15c0bfc1dd89fbbe4aff8969605eb60ab63f1ca
lastmod: "2026-07-16T17:32:42-03:00"
translated_at: "2026-07-17T07:37:26+09:00"
translator: codex
stale: false
---

GitLab Research Library は、チームメンバーが GitLab のプロダクト領域全体で UX リサーチのインサイトを発見、整理、活用するのを支援する、インテリジェントなリサーチリポジトリです。

Library は [uxr-library.com](https://uxr-library.com)（内部リンク）にあります。以下は、サイトに含まれる内容と実行できることの簡単な概要です。

サイトのリポジトリは[こちら](https://gitlab.com/gitlab-com/ux/ux-research-library/ux-research-library)にあり、Library にコードを提供するための README は[こちら](https://gitlab.com/gitlab-com/ux/ux-research-library/ux-research-library/-/blob/production/CONTRIBUTE.md?ref_type=heads)にあります。

## ナビゲーション {#navigation}

### 概要 {#overview}

Library のホームページには、クイックアクションのショートカット、最新のリサーチエントリ 6 件、注目のリサーチテーマ、投資上位領域が表示されます。このランディングページには、リサーチエントリ総数、最近の追加、コントリビューター、ユニークタグというハイレベルな統計も表示されます。

### 検索と閲覧 {#search--browse}

リサーチを見つける主な方法です。キーワードを入力すると、タイトル、説明、発見、推奨事項を横断して検索できます。フィルターパネルを使用して、投資領域、リサーチ手法、職務実行者、参加者ティア、事業規模、プラットフォーム、日付範囲で絞り込めます。結果には、分類バッジ、説明、主要なメタデータが表示されます。

### Research Agent {#research-agent}

AI 搭載の会話型インターフェースです。リサーチライブラリについて自然言語で質問してください。たとえば、*「CI/CD のユーザビリティについて何が分かっていますか？」*や*「エンタープライズユーザーはどのようなペインポイントに言及していますか？」*などです。エージェントは、複数の内部 UX リサーチエントリにまたがる発見を統合し、Dovetail、Zendesk チケット、Gong コール要約から関連するカスタマーの発話を表示することもできます。応答には、ソース資料へ戻る引用リンクが含まれます。会話は自動保存され、履歴ドロップダウンから再開できます。

**注：**Research Agent を通じて表示されるすべてのカスタマーの発話は、同意を得たリサーチセッション（および Zendesk と Gong をどのように分類するか）から取得し、表示前に匿名化されています。基礎データまたはその出所について質問がある場合は、Experience Research Team に連絡してください。

### Insights Explorer {#insights-explorer}

すべてのリサーチエントリを横断してテーマごとにグループ化した、原子的インサイト（発見、推奨事項、リサーチ質問）の AI 生成クラスターを表示します。個別のエントリを読まずに、繰り返し現れるパターンと調査横断のテーマを見つけるのに役立ちます。

- **グリッドビュー**：件数と内訳を伴う、カテゴリごとのクラスター
- **すべてビュー**：サイズ、最新性、テーマで並べ替えできる、すべてのクラスターのフラットリスト
- **検索ビュー**：キーワードでクラスターをフィルターし、関連するテーマを素早く見つける

各クラスターには、含まれる発見、推奨事項、質問の数に加え、関連する Dovetail 引用、Zendesk チケット、Gong コールの数が表示されます。

### 仮説バリデーター {#hypothesis-validator}

内部リサーチレポートのインサイト、Dovetail のカスタマー引用、Gong コール、Zendesk サポートチケットという 4 つのソースから得られる既存のエビデンスに対して、リサーチ仮説をテストします。

10〜500 文字の仮説を入力すると、ツールは次を返します：

- 支持するエビデンスと矛盾するエビデンスの比率に基づく**検証スコア**（0〜100）
- ソースごとに支持、矛盾、中立の項目を表示する**エビデンス内訳**
- 最も関連性の高いエビデンスの**テーマ別グループ化**
- 統合、確信の評価、特定したギャップを含む**AI 生成の要約**
- 過去の実行に戻るための検証履歴

### リサーチを追加する {#add-research}

URL からインポートするか、フォームに手動で入力して、Library に新しいリサーチエントリを追加します。一般に、Experience Research、Product Design、Product Management のメンバーが主な作成者であり、完了したリサーチを Library に追加する責任があります。

有効で高品質なリサーチレポートを持つ他のチームメンバーにも、リサーチを追加することを推奨します。リサーチを追加すべきかの判断に支援が必要な場合（または追加する支援が必要な場合）は、#gitlab-research-library Slack チャンネルに連絡してください。

**URL からインポートする**（推奨）：GitLab work item または Google Drive ドキュメントへのリンクを貼り付けます。AI がコンテンツを読み取り、リサーチ質問、発見、推奨事項、タグ、プロダクト分類、GitLab ティア、プラットフォーム、事業規模、関連する業種を自動で抽出します。保存する前に、事前入力されたフォームをレビューしてください。

**注：**GitLab から直接インポートするには、有効な GitLab [Personal Access Token（PAT）](https://docs.gitlab.com/user/profile/personal_access_tokens/)を入力する必要があります。Drive からのインポートを機能させるには、Google Drive の認証も必要です。

**対応ソース**：GitLab work item、Google Docs、Google Sheets、Google Slides。

**手動入力**：インポート元の URL がない場合は、フォームに直接入力してください。

### 分析 {#analytics}

リサーチライブラリの健全性ダッシュボードです。次を表示します：

- **概要統計**：エントリ総数、最近の追加、コントリビューター、ユニークタグ、発見、推奨事項、質問
- **インサイト統計**：Dovetail 引用、Zendesk チケットリンク、Gong コール要約、クラスター数
- **月次アクティビティグラフ**：過去 6 か月に追加されたリサーチ
- **投資領域別リサーチ**：プロダクト領域全体のカバレッジ内訳
- **上位コントリビューター、ステージグループ、タグ**：相対的な使用量バーを伴うランキングリスト

## 認証 {#authentication}

GitLab Okta アカウントでサインインしてください。すべてのページで認証が必要です。

*質問またはフィードバックがありますか？Slack の #gitlab_research_library で UX Research チームに連絡するか、[フィードバック Issue](https://gitlab.com/gitlab-org/ux-research/-/work_items/3698)にコメントしてください。*
