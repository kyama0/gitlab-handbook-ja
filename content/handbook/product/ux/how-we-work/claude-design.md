---
title: "UX における Claude Design"
description: "GitLab の UX 業務における Claude Design の活用ベストプラクティスとガイドライン。いつ・どのように効果的に使うか、何を避けるべきか、品質と透明性をどのように保つかを学べます。"
date: 2026-05-05 # last meaningful change
upstream_path: /handbook/product/ux/how-we-work/claude-design/
upstream_sha: 1e195b58b9f249ff10bd0e705106c320fee86141
translated_at: "2026-05-13T12:00:00Z"
translator: claude
stale: false
---

このページは、GitLab の UX 業務における **Claude Design の活用ベストプラクティスとガイドライン**について説明します。
より広範な [UX における AI 利用](/handbook/product/ux/how-we-work/ai-usage/) ガイダンスを補完するもので、Claude のデザイン関連能力に固有のアドバイスを提供します。

Claude Design とは、UI のコンセプト生成、デザインレビュー、UI テキストの作成、プロトタイプの作成、エンドツーエンドのデザインプロセスのサポートといったデザイン関連タスクに Claude（Anthropic の AI アシスタント）を使うことを指します。

## はじめに

Claude Design を使う前に、必ず以下を読んでください。

- [UX における AI 利用](/handbook/product/ux/how-we-work/ai-usage/) — GitLab の UX 業務における一般的な AI ガイダンス
- [AI 利用要件と FAQ](https://internal.gitlab.com/handbook/company/ai-at-gitlab/#usage-requirements-and-faqs)
- [汎用 AI ツール利用要件](https://internal.gitlab.com/handbook/ai-security-at-gitlab/ai-tool-usage-requirements/)

Claude は私たちの [承認済み AI ツール](https://internal.gitlab.com/handbook/company/ai-at-gitlab/#approved-ai-tools) の 1 つです。そこで定義されたデータ分類レベルを必ず尊重してください。

## Claude Design をいつ使うか

Claude Design は、デザイン判断やユーザーリサーチの代わりではなく、**クリエイティブの加速装置や思考のパートナー**として最もよく機能します。

### アイデア出しと探索

- 方向性を決める前に、複数のデザイン方向性を素早く生成して問題空間を探索する。
- 見落としていそうなエッジケース、エラー状態、空の状態についてブレインストーミングする。
- 議論の出発点としてユーザーフローやインタラクションパターンの草案を作る。
- 異なるユーザーコンテキストやペルソナでフィーチャーがどう見えるかを探索する。

### UI テキストとコンテンツ

- エラーメッセージ、ツールチップ、空の状態、マイクロコピーを書いて改善する。
- [GitLab のブランドボイス](https://design.gitlab.com/content/voice-tone) に合うようトーンを調整する — Claude にコンテンツをより明確に、より短く、より人間的にするよう依頼してください。
- 実験のために UI テキストの A/B テストバリエーションを生成する。
- ドキュメントやハンドオフメモのためにデザインの意図を平易な言葉に変換する。

## Claude Design を使うべきでないとき

- **ユーザーリサーチを置き換えてはいけません**: Claude は実際のユーザーの行動、感情、コンテキストをシミュレートできません。デザインの意思決定は必ず実際のユーザーで検証してください。
- **初期の AI 出力を最終デザインとして使わない**: Claude の出力は出発点として扱ってください。ユーザーに届くすべてのデザインは、人間のデザイナーによってレビュー・改善され、責任を持たれる必要があります。
- **センシティブまたは重大な意思決定には使わない**: セキュリティ、プライバシー、または脆弱なユーザーのアクセシビリティに影響を与えるデザインには、慎重な人間の監督が必要です。
- **Pajamas Design System を飛ばさない**: Claude は [Pajamas](https://design.gitlab.com/) に沿わないパターンを提案することがあります。出力が私たちのデザインシステムに合致しているか必ず確認してください。

## ベストプラクティス

### 効果的なデザインプロンプトを書く

Claude の出力品質はプロンプトの品質に大きく依存します。豊富なコンテキストを提供してください。

| 含める要素 | 例 |
|---|---|
| **役割と対象者** | "You are a UX designer working on a DevSecOps platform. The user is a senior software engineer managing CI/CD pipelines." |
| **具体的なタスク** | "Write three versions of an error message for when a security scan fails during a merge request pipeline." |
| **デザイン上の制約** | "Follow GitLab's Pajamas design system. Use sentence case. Keep the message under 80 characters." |
| **例** | "Here is an existing error message we use: '…'. Match this tone and format." |
| **成功基準** | "The message should explain what failed, why it matters, and what the user can do next." |

最初からやり直すのではなく、会話を通じてプロンプトをイテレーションしてください。フォローアップの質問をして出力を洗練させてください。

### デザインの品質を維持する

- **アウトプットに責任を持つ**: Claude が生成したデザインコンテンツを共有する前に、レビュー・編集し、責任を引き受けてください。
- **Pajamas との整合性をチェックする**: 提案されたコンポーネント、パターン、言葉遣いが [Pajamas Design System](https://design.gitlab.com/) に合致しているか確認してください。
- **実ユーザーでテストする**: AI が生成したデザインは仮説です。ユーザビリティテストや他のリサーチ手法で検証してください。
- **アクセシビリティの主張は事実確認する**: Claude はアクセシビリティ改善を提案することがありますが、必ず [WCAG ガイドライン](https://www.w3.org/WAI/standards-guidelines/wcag/) と照らし合わせ、支援技術でテストしてください。
- **テンプレートのような出力を避ける**: Claude の出力が一般的すぎると感じる場合は、実際のプロダクトから具体的なコンテキストや例を追加してください。

### 協働と共有

- レビュアーがプロセスを理解できるよう、Claude を活用したデザインの意思決定を Issue や MR に文書化してください。
- 集合的な知識を構築するために、成功と失敗の両方をチームに共有してください。

### 透明性を保つ

一般的な AI 利用ガイドの [透明性のベストプラクティス](/handbook/product/ux/how-we-work/ai-usage/#transparency) に従ってください。

- 成果物のどの部分で Claude の助けを使ったかを記載する。
- リサーチレポート、デザイン仕様、ユーザー向けの意思決定における AI の関与を開示する。
- AI の使用は価値を加えるために言及し、品質の低さや責任回避の言い訳にしない。

## アクセシビリティへの配慮

Claude Design はアクセシビリティの問題の特定には役立ちますが、適切なアクセシビリティテストの代わりにはなりません。

- 一般的なアクセシビリティ問題（色のコントラスト、フォーカス順序、ラベルの明瞭さ）についてデザインをレビューするよう Claude に依頼してください。
- 提案は必ず [GitLab のアクセシビリティガイドライン](/handbook/product/ux/accessibility/) と [Pajamas のアクセシビリティドキュメント](https://design.gitlab.com/accessibility/overview) と照らし合わせて検証してください。
- 実際の支援技術でテストし、可能であれば障害を持つユーザーでテストしてください。
- Claude を、アクセシブルな UI テキストの代替案（alt テキスト、ARIA ラベル、説明的なボタンラベル）の出発点として使い、その後レビューしてください。

## 推奨事項

| ✅ やるべきこと | ❌ やってはいけないこと |
|---|---|
| アイデア出しと探索を加速するために Claude を使う | レビューせずに Claude の出力を最終デザインとして使う |
| プロンプトに豊富で具体的なコンテキストを提供する | 曖昧なプロンプトを使って最初の結果を受け入れる |
| Pajamas や GitLab ガイドラインと出力を照合する | デザインシステムのチェックを飛ばす |
| 実ユーザーでデザインを検証する | Claude の出力をユーザー検証として扱う |
| プロンプトや学びを文書化して共有する | 成功したプロンプトを自分だけで抱える |
| 自分の業務における AI の関与を開示する | Claude を使ったことを隠す |
| 会話を通じてイテレーションし結果を改善する | 毎回ゼロからやり直す |
| Claude を生成役だけでなく批評役としても使う | Claude を生成だけに使い、レビューには使わない |
