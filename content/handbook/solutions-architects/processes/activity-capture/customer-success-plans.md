---
# REVIEW: Possible overlap with processes/customer-success-plan/_index.md. See restructuring issue #628 for details.
title: カスタマーサクセスプラン
description: >-
  カスタマーサクセスプランは、技術評価基準、実装ロードマップ、サクセスメトリクスを文書化することで、販売前と販売後の活動を橋渡しします。これらのプランは顧客エンゲージメントの基盤として機能し、GitLab と顧客の目的の整合を確保し、評価フェーズと実装フェーズの両方を導く明確な文書を提供します。
upstream_path: /handbook/solutions-architects/processes/activity-capture/customer-success-plans/
upstream_sha: 1e195b58b9f249ff10bd0e705106c320fee86141
translated_at: "2026-05-09T00:00:00Z"
translator: claude
stale: false
lastmod: "2026-05-08T14:07:20+02:00"
---

**重要な注意:** このページは、SA ハンドブックを使いやすくするための再編成の最初のステップを表しており、そのため、このページではカスタマーサクセスプランをデータの観点から取り上げています。コンテンツとプランニングの観点からカスタマーサクセスプランに焦点を当てた [別のページ](/handbook/solutions-architects/processes/customer-success-plan) もあることに注意してください。

## 概要

カスタマーサクセスプラン（CSP）は、GitLab 顧客の期待される価値とその価値を実現するためのプランを文書化したものです。これは、集中型のアカウントプランニングデータセット（plan.yaml）から生成され、顧客のコンテキスト、技術要件、成功基準、および実装ロードマップを含みます。このプランは販売前に開始され、複数の主要な目的を果たします。

1. **顧客** にとって: GitLab の採用を通じてビジネス目的を達成するための、規範的でフェーズ別のアプローチを提供します。これには、アーキテクチャの推奨、デプロイメント戦略、移行計画、統合アプローチ、そして大規模なユーザーオンボーディングが含まれます。

2. **カスタマーサクセスチーム** にとって: 価値の目的、成功基準、次の 30 日、60 日、90 日以降のマイルストーンを文書化することで、販売後の関係の基盤を作成します。

3. **プロフェッショナルサービスチーム** にとって: 概説されたイニシアチブに基づき、ステートメントオブワーク（SOW）をスコープするためのコンテキストを提供します。

4. **Go-To-Market チーム** にとって: エグゼクティブやカスタマーサポートが顧客の目的、インタラクション、計画に関するコンテキストを必要とするときの真実の情報源として機能します。

## サクセスプランがいつ必要か

カスタマーサクセスプランは、以下のときに開始されるべきです:

1. 商談がステージ 3 の技術評価をテクニカルウィンとともに完了したとき
2. LAM が $2M 超のアカウントの提案ステージ（ステージ 4）以降のファーストオーダー商談
3. 提案ステージ（ステージ 4）以降の $100k net ARR 超のすべての新規または成長商談
4. ARR 基準が $100k 超の今後の更新を控えるすべての既存顧客

*注: SA マネージャーは、追加の商談を含めるか除外するかについての裁量を持ちます。*

## サクセスプランを作成・提示するベストプラクティス

1. **スコーピングステージの終わり**: CSP が作成され、ディスカバリー（Tech Stack、現状アーキテクチャ図）と主要なビジネス目的の情報をキャプチャします。
2. **技術評価ステージ**: 活動プランは、GitLab が主要なビジネス目的にどう応えるかを検証するアクション（デモ、POC など）をリストします。活動プランは評価の過程で更新されます。
3. **技術評価終了から交渉ステージへ**: CSP が顧客に提示され、各目的を達成するためのアクションプラン、購入後の提案された活動（移行、実装、イネーブルメントなど）を確認します。これは、販売後チームへのハンドオーバーとして使用でき、CSM/CSE、更新、PS、サポート部門の役割を紹介できます。

## ドキュメント構造

SA 組織は、一貫性と完全性を確保するために、カスタマーサクセスプランの標準スキーマを維持しています。スキーマは [AccountPlan.schema.json](https://gitlab.com/gitlab-com/customer-success/solutions-architecture/ap-automation/generators/-/blob/main/plan-schemas/accountPlan.schema.json) ファイルにあり、すべての必須およびオプションのフィールドとその説明が詳細に記載されています。

## Salesforce での追跡

以下のフィールドは Salesforce で維持される必要があります:

1. **Customer Success Plan**: プランへの URL
2. **CSM Ready**: プランが CSM レビュー用の準備ができたときにチェック
3. **Customer Accepted**: 顧客のレビューと承認の後にチェック

## 販売後への移行

販売時点で、CSP は販売後の実行に移行します。この移行は顧客タイプに応じて異なります。

### 新規顧客の移行

1. CSP が相互サクセスプラン（MSP）に変換される
2. MSP が顧客向け GitLab プロジェクトの GitLab Issue と Epic として実装される
3. オーナーシップが割り当てられたカスタマーサクセスチームメンバーに移される:
   - カスタマーサクセスマネージャー（CSM）
   - カスタマーサクセスアーキテクト（CSA）
   - カスタマーサクセスエンジニア（CSE）

### 既存顧客の成長

1. CSP コンテンツが既存の MSP に対して評価される
2. 関連要素が既存の MSP 構造に統合される
3. 追加の目的を追跡するために新しい Epic/Issue が作成される
4. 既存のカスタマーサクセスチームがオーナーシップを維持する

### 実装の詳細

CSP コンテンツは、実行可能な GitLab アイテムに変換されます:

- 成功基準は Epic のサクセスメトリクスになる
- 技術要件は特定の Issue に変換される
- タイムラインのマイルストーンは Epic の期限になる
- 実装フェーズは Epic グループとして整理される
- 顧客ステークホルダーがプロジェクトメンバーとして追加される

販売後のプラン管理と CSM の責任の詳細については、[CSM サクセスプランドキュメント](/handbook/customer-success/csm/success-plans/) を参照してください。

## リソース

- [相互カスタマーサクセスプラン情報](https://gitlab.com/gitlab-sales-continuous-planning/gitlab-profile/-/blob/main/README.md)
- [自動化されたカスタマーサクセスプランドキュメント](https://gitlab.com/gitlab-com/customer-success/solutions-architecture/ap-automation/generators/-/wikis/home)
- [アカウントプランニングデータスキーマ](https://gitlab.com/gitlab-com/customer-success/solutions-architecture/ap-automation/generators/-/blob/main/plan-schemas/accountPlan.schema.json)
- [自動化されたカスタマーサクセスプラン - AMER](https://gitlab.com/gitlab-customer-success-plans/accounts/amer)
- [自動化されたカスタマーサクセスプラン - APJ](https://gitlab.com/gitlab-customer-success-plans/accounts/apj)
- [自動化されたカスタマーサクセスプラン - EMEA](https://gitlab.com/gitlab-customer-success-plans/accounts/emea)
