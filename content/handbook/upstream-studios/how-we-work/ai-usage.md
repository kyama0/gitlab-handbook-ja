---
title: "AI の利用"
description: "デザイン業務で AI を使うタイミングを学びます: ベストプラクティス、避けるべきこと、ユーザーを中心に据え続ける方法。"
date: 2026-06-15
upstream_path: /handbook/upstream-studios/how-we-work/ai-usage/
upstream_sha: 18de125bd3131a62f0a7026bc69c7de124fc6c8a
lastmod: 2026-06-18T10:24:03-05:00
translated_at: "2026-06-20T20:58:39+09:00"
translator: codex
stale: false
---

このページでは、リサーチ、デザイン、プロトタイピング、ドキュメント作成など、Upstream Studios の業務で AI を使う方法を説明します。

**AI エクスペリエンスに取り組む方法**を知りたい場合は、[こちらのリソース](/handbook/product/ai/#design-and-ux-research-for-ai-features)を参照してください。

## 始める前に

GitLab で AI ツールを使う前に、以下を読んでください:

- [AI 利用要件と FAQ](https://internal.gitlab.com/handbook/company/ai-at-gitlab/#usage-requirements-and-faqs)（内部）
- [汎用 AI ツール利用要件](https://internal.gitlab.com/handbook/ai-security-at-gitlab/ai-tool-usage-requirements/)（内部）
- [生成 AI ツールを使用する際のコミュニケーション](/handbook/communication/#communicating-when-using-generative-ai-tools)

## 承認済みツール

| ツール | 最適な用途 |
|---|---|
| Claude | リサーチ、執筆、分析、一般的なタスク |
| Claude Design | ビジュアルデザイン、プロトタイプ、スライド、ワイヤーフレーム、モックアップ |
| Claude Code | コーディングタスク、エージェント型開発、MR レビュー |
| Dovetail | インタビューの文字起こし |
| [FigJam](https://help.figma.com/hc/en-us/articles/16822138920343-Use-AI-tools-in-FigJam) | ホワイトボードと図表 |
| [Figma Design](https://help.figma.com/hc/en-us/articles/23870272542231-Use-AI-tools-in-Figma-Design) | コンテンツ、画像、デザイン、基本的なプロトタイプ |
| [GitLab Duo](https://docs.gitlab.com/user/gitlab_duo/) | GitLab とソフトウェア開発のタスク |
| Rally | インタビューの文字起こし |

**注:** Figma Make は、有料の Figma シートで利用できるプロトタイピングツールです。利用可能なクレジットを使い切らないよう、まず Claude Design または Claude Code を検討してください。
私たちの [Tech Stack](https://gitlab.com/gitlab-com/www-gitlab-com/-/blob/master/data/tech_stack.yml)には、利用できる AI 機能を持つ他のツールが記載されている場合があります。

## AI が得意なこと

AI は、判断やユーザーリサーチの代替ではなく、創造的な補助役かつ批評者として使ってください。

**フィードバック**

- Claude でドキュメント、画像、Figma リンクをレビューする
- [GitLab Duo Code Review](https://docs.gitlab.com/user/project/merge_requests/duo_in_merge_requests/#have-gitlab-duo-review-your-code)にマージリクエストのレビューを依頼する
- 同僚に専門的なレビューを依頼する前に、AI を使ってすばやくフィードバックを得る

**リサーチ**

- 調査計画、インタビューガイド、アンケート質問、ユーザビリティテストのタスクを下書きする（Claude）
- [Dovetail](https://docs.dovetail.com/help/transcribe-and-translate) または [Rally](https://help.rallyuxr.com/en/articles/9213503-observer-rooms) でインタビューを文字起こしし、その後 Claude で分析する
- 背景情報を要約し、参考資料を見つける（GitLab に関する情報は GitLab Duo、Web リサーチは Claude）
- データ内のパターンやテーマを見つける—主張を必ず検証し、出典を求める
- ペルソナやプロトペルソナを下書きする—仮説上のものは明確に示し、実際のユーザーで検証する

**デザイン**

- 複数のデザインの方向性、エッジケース、エラー状態をすばやく探索する
- エラーメッセージ、ツールチップ、空の状態、マイクロコピーなどの UI テキストを書き、イテレーションする
- [GitLab のブランドボイス](https://design.gitlab.com/content/voice-tone)に合うようにトーンを調整する
- プレースホルダーコンテンツを実際の UI テキストに置き換える
- ワイヤーフレームの出発点を生成する—最終デザインではなく、最初のドラフトとして扱う
- 色のコントラスト、フォーカス順序、ラベルの明確さなど、アクセシビリティ上の問題がないかデザインを確認する

**プロトタイピング**

- Figma Design で基本的なプロトタイプを作成する
- Figma Make（Pajamas コンポーネントをサポート）または Claude（汎用 UI）で機能するプロトタイプを作成する

**図表とワークショップ**

- FigJam でホワイトボードや付箋の演習を準備する
- 図表、マインドマップ、フローチャートを作成する。Claude と GitLab Duo は [GitLab Flavored Markdown diagrams](https://docs.gitlab.com/user/markdown/#diagrams-and-flowcharts)をサポートしています

**ドキュメント**

- Claude または GitLab Duo でドキュメントを下書き、改善、再構成する
- [GitLab ドキュメントに AI を使う方法](https://docs.gitlab.com/development/documentation/ai_guide/)を参照してください

リサーチ固有のプロンプトについては、[UX Research Prompts](https://gitlab.com/gitlab-com/office-of-the-ceo/ai-at-gitlab/ai-at-gitlab-usecases/-/issues/64)（内部）も参照してください。

## AI に向いていないこと

- **実際のユーザーの代替:** AI は実際の行動、感情、文脈をシミュレートできません。ユーザーリサーチの代わりに AI のフィードバックを使わないでください。
- **レビューなしの最終デザイン:** ユーザーに届く AI 生成デザインはすべて、人間がレビューし、磨き込み、責任を持つ必要があります。
- **機密性が高い、または重要度の高い意思決定:** セキュリティ、プライバシー、アクセシビリティには、人間による慎重な監督が必要です。
- **Pajamas を省略すること:** AI 生成のデザインパターンとコンポーネントが [Pajamas](https://design.gitlab.com/)に準拠していることを必ず確認してください。
- **確認なしのプロダクション出力:** AI 生成コンテンツを人間のレビューなしで出荷しないでください。
- **手作業の方が速いタスク:** プロンプトに 30 分費やしているなら、自分でやった方が速いかもしれません。

## AI をうまく使う

### 良いプロンプトを書く

すべてのプロンプトに豊富な文脈を含めてください:

| 含めるもの | 例 |
|---|---|
| **役割と対象者** | "あなたは DevSecOps プラットフォームの UX デザイナーです。ユーザーは CI/CD パイプラインを管理するシニアエンジニアです。" |
| **具体的なタスク** | "マージリクエストのパイプライン中にセキュリティスキャンが失敗した場合のエラーメッセージを 3 つ書いてください。" |
| **制約** | "GitLab の Pajamas デザインシステムに従ってください。Sentence case を使い、80 文字未満にしてください。" |
| **例** | "私たちが使用している既存のメッセージは X です。このトーンと形式に合わせてください。" |
| **成功基準** | "何が失敗したのか、それがなぜ重要なのか、ユーザーが次に何をできるのかを説明してください。" |

最初からやり直すのではなく、会話を通じてイテレーションしてください。3〜10 個のバリエーションを依頼し、最も良い部分を組み合わせます。

ペルソナ、デザイン原則、スタイルガイドのような永続的な文脈を保存するには、[Claude projects](https://support.anthropic.com/en/articles/9519177-how-can-i-create-and-manage-projects)を使ってください。

### すべてをレビューする

AI の出力を共有する前に:

- 自分のものにする。共有前にレビュー、編集し、責任を持つ
- すべての主張、数値、統計をファクトチェックする
- バイアスがないか確認する。どのグループかが誤って表現される可能性がないかを問う
- アクセシビリティの提案を [WCAG guidelines](https://www.w3.org/WAI/standards-guidelines/wcag/)に照らして検証し、支援技術でテストする
- 実際のユーザーでデザインを検証する。AI の出力は発見事項ではなく仮説です
- AI の関与を開示する。成果物のどの部分で AI の支援を使ったかを記載する（[開示要件](https://internal.gitlab.com/handbook/ai-security-at-gitlab/ai-tool-usage-requirements/#attribution-of-published-content)）

### 最新情報を追い、共有する

AI の状況は急速に変化します。学んだことをチームと共有してください:

- [AI at GitLab Tips](/handbook/tools-and-tips/ai/)
- [AI use cases and prompts project](https://gitlab.com/gitlab-com/office-of-the-ceo/ai-at-gitlab/ai-at-gitlab-usecases)（内部）
- [Company learning resources](/handbook/people-group/learning-and-development/#team-member-resources)
- 提案がありますか？ [GitLab Design project](https://gitlab.com/gitlab-org/gitlab-design/issues/) で Issue を作成してください
