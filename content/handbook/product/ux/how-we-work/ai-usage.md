---
title: "UX での AI 利用"
description: "UX 活動で AI をどう活用するか。いつ AI を使うべきか、ベストプラクティス、避けるべきこと、ユーザーを中心に据えながら AI を助手として活用する方法を学べます。"
date: 2026-01-13 # last meaningful change
upstream_path: /handbook/product/ux/how-we-work/ai-usage/
upstream_sha: 1e195b58b9f249ff10bd0e705106c320fee86141
translated_at: "2026-05-13T12:00:00Z"
translator: claude
stale: false
---

このページでは、**ユーザーエクスペリエンス（UX）活動に AI をどう使うか**を示します。
これは私たちの一般的な AI ガイダンスを補完するもので、部門を問わず GitLab で UX 業務を行うすべての人を対象としています。

**AI 体験を作る**方法について知りたい場合は、[こちらのリソース](/handbook/product/ai/#design-and-ux-research-for-ai-features)を参照してください。

## はじめに

まず、私たちのハンドブックにある一般的なガイダンスを読んでください。

- [AI 利用要件と FAQ](https://internal.gitlab.com/handbook/company/ai-at-gitlab/#usage-requirements-and-faqs)（内部向け）
- [汎用 AI ツール利用要件](https://internal.gitlab.com/handbook/ai-security-at-gitlab/ai-tool-usage-requirements/)（内部向け）
- [生成 AI ツールを使う際のコミュニケーション](/handbook/communication/#communicating-when-using-generative-ai-tools)

このページの情報は、その一般的なガイダンスを補完し、UX 活動を行うすべての人向けのアドバイスを追加するものです。

### AI ツールについて

このガイドはどの AI ツールでも機能するように書かれていますが、AI の利用は使えるツールによって変わります。
このページは新しいツールが利用可能になるたびに更新されます。

[承認済みの AI ツール](https://internal.gitlab.com/handbook/company/ai-at-gitlab/#approved-ai-tools)（内部向け）に基づくと、GitLab の UX 業務における主な AI ツールは以下のとおりです。

- Claude（汎用）
- Dovetail（インタビューの文字起こし）
- [FigJam](https://help.figma.com/hc/en-us/articles/16822138920343-Use-AI-tools-in-FigJam)（ホワイトボードと図）
- [Figma Design](https://help.figma.com/hc/en-us/articles/23870272542231-Use-AI-tools-in-Figma-Design)（コンテンツ、画像、デザイン、基本的なプロトタイプ）
- [Figma Make](https://help.figma.com/hc/en-us/articles/31304412302231-Explore-Figma-Make)（機能するプロトタイプと Web アプリ）
- [GitLab Duo](https://docs.gitlab.com/user/gitlab_duo/)（GitLab とソフトウェア開発）
- Rally（インタビューの文字起こし）

私たちの [Tech Stack](https://gitlab.com/gitlab-com/www-gitlab-com/-/blob/master/data/tech_stack.yml) には、UX 業務に使える AI 機能を持つ他のツールが含まれている可能性があります。

### 大原則: AI は助手であり、置き換えではない

AI は、ユーザー中心の思考を置き換えるのではなく、人間のスキルを強化するクリエイティブな助手として最もよく機能します。
[UX プロフェッショナルの 47% が AI に助けられていると答えており](https://www.nngroup.com/articles/ux-reset-2025/)、うまく使ったチームは [250% 速く](https://www.stepsize.com/blog/ai-adoption-strategy-for-software-teams) 仕事が進むと言われています。
成功するには、AI を賢く使いながら、人間の判断を保ち、ユーザーに焦点を当て続けることが必要です。

## AI を使うべきとき

### フィードバックを得る

AI を生成役だけでなく、批評役としても使ってください。
物事を素早く片づけるのに役立つだけでなく、自分の仕事をより速く改善するのにも役立ちます。
同僚にエキスパートレビューを依頼する前に、コスト効率よくフィードバックを得る方法になり得ます。

自分の仕事にフィードバックを得るには:

- **一般**: ドキュメント、画像、リンクを追加して Claude にレビューしてもらう。
  [Google Drive 連携](https://support.anthropic.com/en/articles/10166901-using-the-google-drive-integration) を使ってください。
- **GitLab**: マージリクエストのレビューを [GitLab Duo Code Review](https://docs.gitlab.com/user/project/merge_requests/duo_in_merge_requests/#have-gitlab-duo-review-your-code) に依頼する。
- **デザイン**: 画像または Figma Design のリンクを追加して Claude にレビューしてもらう。
  Figma Design については、まず [Figma Dev Mode デスクトップ拡張機能を Claude Desktop にインストール](https://intercom.help/anthropic-6f71807d7c3e/en/articles/10949351-getting-started-with-local-mcp-servers-on-claude-desktop#h_df27ba7397) し、[Figma で MCP サーバーを有効化](https://help.figma.com/hc/en-us/articles/32132100833559-Guide-to-the-Dev-Mode-MCP-Server) してください。

### リサーチを計画する

**ツール**: Claude。

- **調査計画**: リサーチ質問、サーベイ質問、インタビューガイド、ユーザビリティテストのタスクを作成する。
- **アイデア出しのサポート**: 調査中に参加者が使うコンテンツを生成する。
- **参加者リクルート**: リクルートメールやスクリーナーを起草する。
- **ロールプレイ - 注意**: 調査計画をテストするために参加者の反応やインタラクションをシミュレートする。
  AI は実際の人間の行動を予測したり置き換えたりすることはできないので、リリース前に必ず実際のユーザーでテストするか小規模なパイロットを実施してください。

### データを収集する

**プロンプト**: [UX リサーチプロンプト](https://gitlab.com/gitlab-com/office-of-the-ceo/ai-at-gitlab/ai-at-gitlab-usecases/-/issues/64)（内部向け）を参照してください。

**ツール**: Claude、Dovetail、GitLab Duo、Rally。

- **文字起こし**: [Dovetail](https://docs.dovetail.com/help/transcribe-and-translate) または [Rally](https://help.rallyuxr.com/en/articles/9213503-observer-rooms) を使って動画インタビューをテキスト（文字起こし）に変換する。
   文字起こしをダウンロードして Claude で分析する。
- **デスクリサーチ**: 背景情報や関連調査を素早く要約し、参考文献を見つける。
  [GitLab 情報なら GitLab Duo Chat](https://docs.gitlab.com/user/gitlab_duo_chat/examples/)、[Web 検索やリサーチなら Claude](https://support.anthropic.com/en/articles/11095361-when-should-i-use-web-search-extended-thinking-and-research)。

### データを分析する

**プロンプト**: [UX リサーチプロンプト](https://gitlab.com/gitlab-com/office-of-the-ceo/ai-at-gitlab/ai-at-gitlab-usecases/-/issues/64)（内部向け）を参照してください。

**ツール**: Claude（他のものはより誤りが多い傾向があります）。

- **パターン発見 - 注意**: 異なるデータやユーザーセッションを横断してトレンドを見つける。
  すべての主張を必ず[レビュー](#review)し、ソースを尋ねてください。
- **初期コーディング - 注意**: リサーチデータから出発点となるテーマを作る。
  すべての主張を必ず[レビュー](#review)し、ソースを尋ねてください。
- **スプレッドシートの数式**: Google Sheets などのツールでデータ分析に使う数式を生成する。
- **レポーティング**: ストーリーテリング、レポートのアウトライン、リサーチ結果の要約をサポートしてもらう。
- **ペルソナのコンテンツ**: リサーチのインサイトをペルソナのストーリーに変える。
- **プロトペルソナ**: 仮説的なペルソナを起草する。
  「仮定に基づく」と明記し、後で実際のユーザーでテストする計画を立ててください。

### ホワイトボードと図

**ツール**: Claude、FigJam、GitLab Duo。

- **ホワイトボード**: チームのエクササイズや会議用のボードを準備する。
- **図**: 図、マインドマップ、フローチャート、タイムラインなどの視覚的なサポートを作成する。
  Claude と GitLab Duo は [GitLab Flavored Markdown 用の図](https://docs.gitlab.com/user/markdown/#diagrams-and-flowcharts) を作成できます。
- **付箋**: 付箋を素早く整理・分類して、合意形成と次のステップの概要を作成する。
- **画像**: FigJam を使ってテキストや付箋を超えた画像を生成・編集する。

### UI テキスト

**ツール**: Claude、Figma Design。

- **UI テキストの作成**: エラーメッセージ、ツールチップ、UI テキストの異なるバージョンを作成する。
- **トーンの変更**: コンテンツをより明確に、より短く、またはブランドの声に合うように調整する。
- **A/B テストのバージョン**: テスト用に異なる言い回しを生成する。

### デザイン

**ツール**: Claude、Figma Design。

- **アイデアの探索**: 多くのデザインの方向性、ユースケース、シナリオを素早く作成する。
  テキストでのアイデアは Claude、視覚的なアイデアは Figma Design。
- **実コンテンツ**: プレースホルダーテキストを実際の UI テキストに置き換える。
- **ワイヤフレームの出発点**: 最終デザインではなく最初のコンセプトとして使う。
- **ビジュアルアセット**: Figma Design で素早くアイコン、イラスト、コンセプトアートを作成する。
- **ダミーデータ — 注意**: テスト用のユーザー入力（フォーム入力やユーザープロフィールなど）を作る。
  AI は実際の人間の行動を予測したり置き換えたりすることはできないので、必ず実際のユーザーでテストしてください。

### プロトタイプ

私たちは現在、AI プロトタイピングのツールを [この機密 Issue](https://gitlab.com/gitlab-org/gitlab-design/-/issues/2816) でテスト・選定しています。

**ツール**: Claude、Figma Design、Figma Make。

- **基本的なプロトタイプ**: Figma Design で素早くインタラクションを追加してデザインを基本的なプロトタイプにする。
- **機能するプロトタイプ**: アイデアを素早く示す機能するプロトタイプを作成する。
  Figma Make は Pajamas コンポーネントを使え、Claude は汎用の UI コンポーネントを使います。

### プロダクトドキュメント

**ツール**: Claude、GitLab Duo。

- **ドキュメントを書いて改善する**: 草案を作る、リストを表に変換する、コンテンツを読みやすくする。
- **技術的なタスク**: 壊れたパイプラインを修正する、データ分析のスクリプトを書く、[Mermaid 図](https://docs.gitlab.com/user/markdown/#mermaid) を作る。
- **分析とリサーチ**: 改善点を見つけるためにドキュメントをレビューする、長いドキュメントを要約する、トピック別にコンテンツを整理する。

詳しくは [GitLab ドキュメントへの AI の使い方](https://docs.gitlab.com/development/documentation/ai_guide/) を参照してください。

## AI を使うべきでないとき

- **実ユーザーを置き換えてはいけません**:
  - AI のフィードバックをユーザーフィードバックのふりをしたり、偽のリサーチデータを作ったりしないでください。
  - AI は、ユーザーのウェルビーイングに実際に影響する意思決定に必要な感情やコンテキストを理解しません。
  - 実際の人間の行動を正確に予測できる AI はありません。
- **重要な意思決定**: ソフトウェアセキュリティや個人データなど、繊細な状況には AI には提供できない慎重な人間の監督が必要です。
- **レビューなしのプロダクション利用**:
  - 人間のチェックなしに、AI が作成したアウトプットをユーザーに渡さないでください。
  - AI ツールは、具体的な指示があってもジェネリックでテンプレート的な出力を作ることがあります。
- **手動の方が速い場合**:
  - AI プロンプトに苦戦するほうが、自分でやるよりも時間がかかることがあります。
  - 30 分かけてとても具体的なアイデアを AI に作らせようとするくらいなら、手描きでスケッチしたほうが速いかもしれません。
  - AI が明らかにスピードや創造性に役立つ場面で使い、難しいなら通常のやり方に戻ってください。

## 推奨事項

| ✅ やるべきこと | ❌ やってはいけないこと |
| --- | --- |
| 退屈な作業やブレインストーミングに AI を使う | ユーザーリサーチやテストを飛ばす |
| タスクに適した AI モードを選ぶ | 何でも同じ AI モードを使う |
| 各ステップで人間が関与し続ける | AI の出力を盲信する |
| 実データでインサイトを確認する | 未知のツールに機密データを入れる |
| 詳細でコンテキスト豊富なプロンプトを書く | 編集せずに AI のコンテンツを使う |
| いつどのように AI を使ったかを文書化する | AI を使ったことを隠す |
| 異なるバージョンを試して実験する | 1 回の試行で十分と考える |
| 倫理基準に従う | 会社のガイドラインを無視する |
| 中核となる UX スキルを磨き続ける | AI に依存する |

## ベストプラクティス

AI を使うときの一般的な問題を避けるために、ベストプラクティスの適用方法を学んでください。

### データの安全と法務

**問題**: AI 企業に対する多くの訴訟は著作権リスクを示しています。
多くの AI サービスは入力データを保持してモデルの学習に使うため、プライベートな情報が漏れる可能性があります。

**ベストプラクティス**:

- [汎用 AI ツール利用要件](https://internal.gitlab.com/handbook/ai-security-at-gitlab/ai-tool-usage-requirements/)（内部向け）に従ってください。
- [承認済みの AI ツール](https://internal.gitlab.com/handbook/company/ai-at-gitlab/#approved-ai-tools)（内部向け）のみを使い、データ分類レベルを尊重してください。
  Figma など承認済み UX ツールの一部の AI 機能は、[Tech Stack](https://gitlab.com/gitlab-com/www-gitlab-com/-/blob/master/data/tech_stack.yml) のデータ分類レベルに従って使えます。
- 競合分析のために他の AI ツールをテストする場合は、[ベンチマーキングガイドライン](https://internal.gitlab.com/handbook/legal-and-corporate-affairs/legal-product-ip/third-party-benchmarking-guidelines/)（内部向け）と [公開ディスカッションのガイドライン](/handbook/legal/competitor-discussion-guidelines/) に従ってください。
- 承認されていないツールには、機微情報や個人情報を送らないでください。

### モード

**問題**: すべてのタスクに同じ AI モードを使うと、時間を無駄にしたり結果が悪くなったりします。
シンプルなタスクにリサーチモードを使うと時間の無駄であり、複雑な作業に標準モードを使うと重要なインサイトを見逃すことがあります。

**ベストプラクティス**: タスクに合った AI モードを選んでください。
モードを選択するには、設定をオンにするか、別のモデルを選ぶ必要があるかもしれません。

| モード | 使いどき | 例 |
|------|-------|----------|
| **標準／small／mini**<br>素早い応答にはより小さいモードに切り替える | 明確な答えと十分なコンテキストがあるシンプルな質問 | - ボタンテキストの作成<br>- テストスクリプトの起草<br>- 素早いブレスト |
| **Web 検索**<br>通常デフォルトでオン | AI の学習データを超える最新情報が必要 | - 最新のコーディングプラクティス<br>- 最近のセキュリティ問題<br>- 競合の動き |
| **リサーチ** | 複数ソースを必要とする深い分析（10 分以上） | - 競合分析レポート<br>- 業界のベストプラクティス<br>- 戦略計画 |
| **思考／推論** | ステップごとの作業が必要な複雑な問題（20〜60 秒、多くの UX 業務にとって価値あり） | - アクセシビリティ計画<br>- 情報アーキテクチャ計画<br>- ユーザーフローマッピング |

### コンテキストと要件

**問題**: AI は、アクセスできる情報をあなたが管理しない限り、プロジェクトの詳細、好み、知識を知りません。
これがないと、結果は一般的すぎて、ニーズに合いません。

**ベストプラクティス**: コンテキストエンジニアリングとは、各タスクに対して適切なタイミングで適切な情報を AI に与えることです。
良いプロンプトを書くだけでなく、AI の知識を管理することにもなります。

**1. コンテキストを書く**: 繰り返しを避けるためにプロジェクトの知識を保存するファイルを使ってください。
例:

- ユーザーペルソナとリサーチの発見事項
- デザイン原則とガイドライン
- 技術的な制約と要件
- スタイルガイドとコンポーネントのルール

Claude では、[知識と指示を持つプロジェクトを作成](https://support.anthropic.com/en/articles/9519177-how-can-i-create-and-manage-projects) できます。他のツールでは、新しいタスクを始めるときに参照したり AI に共有したりできる、キーファイルが入った「プロジェクトコンテキスト」フォルダを保管してください。

**2. コンテキストを選ぶ**: 現在のタスクに基づいて、適切な情報を各会話に取り込んでください。

| 含める要素 | 例 |
| --- | --- |
| 役割 | "You're a UX designer for developer tools with deep understanding of CI/CD workflows"<br>"Act as a DevSecOps engineer reviewing the merge request interface for security scanning results" |
| コンテキスト付きの具体的なタスク | "Write 3 error messages for when a CI/CD pipeline fails because security problems were found during SAST scanning"<br>"Create 5 usability test tasks for developers setting up their first GitLab Runner" |
| 完全な背景情報 | "Our users are software developers with 3–10 years experience who manage multiple repositories. They want clear feedback on build status and quick access to logs"<br>"This is for a DevSecOps platform. Users range from junior developers to senior SREs managing production deployments across multiple environments" |
| 例 | "Here's a good error message from our app: …"<br>"Follow the style of these existing personas: …" |
| 形式 | "Use this template format"<br>"Format as a table with columns: …" |
| 成功基準 | "Include the failed stage, use standard Git terms, use clear language, give next steps"<br>"Follow GitLab's design system, be easy to scan, and include error codes" |

**3. コンテキストを圧縮する**: チャットが長くなったら、すべてを繰り返すのではなく、重要な決定を要約してください。
例:

- "Based on our discussion, we decided: (key points)"
- "Main user problems: slow feedback, unclear errors"
- "Using the guidelines we established earlier…"

Claude では、[過去のチャットを検索・参照できます](https://support.anthropic.com/en/articles/10185728-understanding-claude-s-personalization-features#h_4afb5dcf4b)。

**4. コンテキストを分離する**: 混乱を避けるために、異なる種類の作業には異なる会話を使ってください。アプローチ:

- リサーチ／デザイン／テスト用にチャットを分ける。
- 各ユーザータイプやフィーチャーごとに別のセッションにする。
- 会話ごとに AI の「役割」を切り替える（リサーチャー／デザイナー／ライター）。

### 改善

**問題**: 最初の AI 応答をそのまま使うと、より良い結果を得る機会を逃します。
AI は多くのバリエーションを作れますが、チームはこの能力を十分に活用していないことが多いです。

**ベストプラクティス**:

- 複数の選択肢を求める（通常 3〜10 のバリエーションで十分）。
- ベストな部分（フレーズ、構造、コンセプト）を組み合わせる。
- 会話を通じて改善する: フォローアップを尋ね、前の応答を洗練させる。
- 共有する前に、必ず人間の編集と専門知識を加える。

**例**:

1. ラウンド 1: 「CI/CD パイプラインステータス用のツールチップを作って」。
1. ラウンド 2: 「もっと短くして、最新のコミットに言及して」。
1. ラウンド 3: 「ジョブアーティファクトについて GitLab 固有の用語を使って」。
1. ラウンド 4: ベストな部分を組み合わせ、チームのスタイルガイド要件を追加する。
1. 最終: 明確さとブランドの一貫性のために人間が仕上げる。

### レビュー

**問題**: コンテキストがあっても、AI の結果は不正確、不適切、不完全なことがあります。
これらのツールは長くて繰り返しの多いコンテンツも生成することがあります。
AI の説明は、実は人間の判断を強めるのではなく、AI への依存を強めることがあります。

**ベストプラクティス**:

- 共有する前にアウトプットの所有者となる。
- 簡潔さと明瞭さのために編集する。
- すべての主張を事実確認し、ソースを尋ねる。
- カウント、パーセンテージ、その他の数字を二重チェックする。
- 確立された UX 原則と比較する。
- 可能なら実際のユーザーでテストする。
- ペルソナや推奨事項のバイアスをレビューする。
- AI をインターンのように扱う: 役立つが監督が必要。
- どんな AI の貢献に対しても、プロセスにレビュー時間を組み込む。

### バイアス

**問題**: AI は学習データに存在するバイアスを反映し、悪化させることがあります。
これにより、代表性のない、または特定のグループを不利にする推奨が生まれます。

**ベストプラクティス**:

- すべての AI 出力に「インクルーシビティチェック」を行う。
- [インクルーシブな言葉遣い](/handbook/values/#inclusive-language--pronouns) を使う。
- 自問する: これによって誤って表現されたり傷つくグループはないか？
- ペルソナやユーザーシナリオを作るときに多様性を求める。
- 多様なユーザーグループで出力をテストする。
- 言語と画像における文化的な前提に注意する。
- AI にセルフチェックを求めることも検討する: "Does this contain any biased assumptions?"

### 透明性

**問題**: ステークホルダーやチームメンバーは、リサーチとデザインの作業で AI がいつどのように使われたかを知らないことがあり、信頼の問題やインサイトの品質を適切に判断できない事態を引き起こします。
このオープンさの欠如は、ユーザー向けの意思決定における隠れた AI の関与について倫理的な懸念を生むこともあります。

**ベストプラクティス**:

- 成果物のどの部分で AI の助けを使ったかを記載する。
- リサーチレポートやユーザー向けの意思決定など、[公開コンテンツでの AI の関与を開示する](https://internal.gitlab.com/handbook/ai-security-at-gitlab/ai-tool-usage-requirements/#attribution-of-published-content)。
  例:
  - "Analysis for these interviews was done using Claude, checked by @username"
  - "UI text variations created by Figma, reviewed and edited by @username"
- 価値を加えるために AI 使用を言及し、品質の低さや責任回避の言い訳にしない。
- 成功したプロンプトのコピーを共有ドキュメントに保管する。
- AI の成功と失敗の両方をチームに共有して、グループの知識を構築する。
  [ドキュメンテーションと知識共有](#documentation-and-knowledge-sharing) を参照。

## 次は何をするか

### 最新を保つ

AI の世界は急速に変化しており、新しい能力やツールが絶えず登場しています。
あなたの仕事に関連する AI の発展について最新の状態を保つために、継続的な学習に投資すべきです。
[UX 部門の学習ページ](/handbook/product/ux/learning-and-development/) や、利用可能な[全社の学習リソース](/handbook/people-group/learning-and-development/#team-member-resources) を参照し、マネージャーと相談してください。

### ドキュメンテーションと知識共有

私たちは、GitLab の UX 業務における AI 利用の成功と失敗の両方から学びたいと考えています。

以下のリソースをチェックし、貢献してください。

- [GitLab の AI Tips](/handbook/tools-and-tips/ai/)
- [UX リサーチプロンプト](https://gitlab.com/gitlab-com/office-of-the-ceo/ai-at-gitlab/ai-at-gitlab-usecases/-/issues/64)（内部向け）
- [AI ユースケースとプロンプトプロジェクト](https://gitlab.com/gitlab-com/office-of-the-ceo/ai-at-gitlab/ai-at-gitlab-usecases)
- このページを改善する！

### ツールの評価と選定

UX 業務で AI をうまく使えるようにするには、既存のワークフローに対する新しい AI 能力の継続的な評価が必要です。
アイデアや提案があれば、[GitLab Design プロジェクト](https://gitlab.com/gitlab-org/gitlab-design/issues/) で Issue を作成してください。
