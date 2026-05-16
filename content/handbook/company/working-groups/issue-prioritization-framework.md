---
title: "Issue 優先度付けフレームワーク"
description: "ビジネスゴール、IACV、コストを共通の定量化可能な表現に組み込むことで、Issue 優先度付けフレームワークを改善します"
status: active
upstream_path: "/handbook/company/working-groups/issue-prioritization-framework/"
upstream_sha: "b4eeb07f0d5f46e2fc5f8572be1a2547261aed89"
translated_at: "2026-04-25T12:00:00Z"
translator: claude
stale: false
lastmod: "2024-08-08T22:55:54+00:00"
---

## 属性

| プロパティ      | 値              |
|-----------------|-----------------|
| 作成日          | 2020年8月6日    |
| 目標終了日      | 2022年12月30日  |
| Slack           | [#wg_issue-prioritization](https://join.slack.com/share/zt-etotbmm9-FzhcHH0BGbw3~D4Xe5rAyg)（社内からのみアクセス可能） |
| Google Doc      | [ワーキンググループ アジェンダ](https://docs.google.com/document/d/1oBWNxBSOJKrh3ubHwN5pI8243vBjJ-Y_Cax17A5abII/edit)（社内からのみアクセス可能） |
| ドキュメント    | [ハンドブックページ](/handbook/product/product-processes/customer-issues-prioritization-framework) |
| 関連 Issue     | [顧客リクエストへのコンテキスト追加](https://gitlab.com/gitlab-com/sales-team/field-operations/sales-operations/-/issues/907) |
| 関連 OKR       | [TMAU および有料 TMAU の増加](https://gitlab.com/gitlab-com/office-of-the-ceo/cos-team/-/issues/80) |

## 解決すべき問題

- 現在、「あると便利」「ブロッカー」「ダウングレード・チャーン・アップセル阻害の原因になる可能性が高い」の区別ができていません。ある顧客にとって機能 ABC はあると便利なものかもしれませんが、別の顧客にとっては絶対に必要なものかもしれません。この情報を収集し、転送し、部門間で共有するのに必要な時間は非効率でエラーが起きやすくなります。また、保持 ARR や純新規 ARR への影響といった定量化可能なデータに基づいて、全ステージを横断した相対的な優先度を決定する標準化されたモデルを解決することにもなりません。
- 現在、部門間で情報を転送する橋渡し役として個人が行動する[非常に手動的なプロセスを提案しています](https://gitlab.com/gitlab-com/customer-success/okrs/-/issues/23)。
- 既存のデータを十分に活用できていません。その理由を理解し、解決します。

## ビジネスゴール

- 定量化可能なデータに基づく標準化された優先度付けフレームワークを作成し、スケールとスピードで Issue/Epic ごとの緊急性・価値を決定できるようにします。これにより、Product、Sales、Customer Success が優先度付けのトレードオフを議論する際に共通の言語とモデルを使用できます。
- Product DRI がより正確な情報をもとにデリバリーバックログをグローバルに最適化でき、顧客維持率と顧客獲得率が向上します。
- 純 ARR 成長にポジティブな影響を与え、既存 ARR の維持を改善します。
- 部門間の優先度付けフィードバックの精度を向上させます。
- Customer Success、Sales、Product 間の効果的な橋渡しプロセスをさらに運用化します。

### 完了基準

（✅ 完了、✏️ 進行中）

#### ステップ 1: 実行可能なモデルを決定する `=> 90%`

[Issue](https://gitlab.com/gitlab-com/Product/-/issues/1457)

- ✅  `コスト・オブ・ディレイ / 期間` をパイロット実施の主要モデルとして使用します。
- ✅  SFDC へのリンクがある Issue に対して金銭的価値を割り当てる方法を決定しました。
- ✏️ [SFDC リンクがない Issue のモデル入力を決定する](https://gitlab.com/gitlab-com/Product/-/issues/1639)。
- ✅ [CSM 入力を定義する](https://gitlab.com/gitlab-com/Product/-/issues/1635)。

#### ステップ 2: モデルを実装・検証する `=> 100%`

[Issue](https://gitlab.com/gitlab-com/Product/-/issues/1563)

- ✅ 初期パイロットを設計し、タスクと DRI に分解する。
- ✅ データ関連タスクを完了できる DRI を特定する。
- ✅ [パイロットを実装する](https://gitlab.com/gitlab-com/Product/-/issues/1563)。
- ✅ 結果と成果を評価する。合格の場合はステップ 3 へ。不合格の場合は WG を終了するかステップ 1 に戻る。

#### ステップ 3: スケールで検証し成果を測定する `=> 15%`

[Issue](https://gitlab.com/gitlab-com/Product/-/issues/3546)

要約: 検証後、Product/CS/Sales 全体での導入を推進し、このモデルが望ましいビジネス成果を生み出していることを確認するための測定を収集します。そうでない場合は、ステップ 1 に戻るか終了するかを決定します。

限定パイロット（特定の IC PM）:

- パイロットに参加しているすべてのステージ。
  - 現状: `0 / 15`
- Issue/Epic をテーマや製品投資にマッピングするプロセスが確定・文書化され、Product、Sales、Customer Success の支持を得ている。
  - 現状: `なし`

スケールパイロット（IC PM / CSM 中心）の成功指標:

- `80%` 以上の Product Manager がフレームワークを活用したダッシュボードを定期的に使用し、四半期ごとのアンケート回答によって優先度付けフレームワークを貴重な感知メカニズムとして評価している。
  - 現状: N/A
- `80%` 以上の Customer Success Manager がフレームワークを活用したダッシュボードを定期的に使用し、CSM ダッシュボード活用により顧客要求 Issue のレポート効率が `30%` 以上向上したと四半期ごとのアンケートで報告している。
  - 現状: N/A

スケールで検証・測定:

- 上位 25% の顧客要求 Issue のリードタイムを `x` から `y` に改善する。
  - 現状: N/A
- 優先度付けモデルとダッシュボードが、スプレッドシートを使ったトップ ARR ドライバーの管理・追跡の有効な代替手段として採用される。
  - 現状: N/A
- 月次または四半期ごとにタグ付けされた機能要求が `20%` 増加する。
  - 現状: N/A
- 機能要求にタグ付けする Sales チームメンバーが月次または四半期ごとに `20%` 増加する。
  - 現状: N/A

## 役割と責任

| ワーキンググループの役割 | 担当者                   | 役職                           |
|-----------------------|--------------------------|--------------------------------|
| Executive Sponsor     | David Sakamoto           | VP Customer Success            |
| ファシリテーター       | Gabe Weaver              | Senior Product Manager, Plan   |
| Functional Lead       | Israel Weeks             | Manager, Data                  |
| Functional Lead       | Jeff Beaumont            | Senior Manager, CS Ops         |
| Functional Lead       | TBD (Sales)              | TBD                            |
| メンバー              | Patrick Harlan           | Manager, Customer Success Managers (Commercial) |
| メンバー              | Sophie Pouliquen         | Senior Techical Account Manager |
| メンバー              | Martin Brümmer           | Senior Techical Account Manager |
| メンバー              | Mek Stittri              | Director of Quality Engineering |
| メンバー              | Farnoosh Seifoddini      | Product Operations             |
| メンバー              | Jonathan Fullam          | Solutions Architecture         |
| メンバー              | Sherrod Patching         | Director, Customer Success Managers |

## ミーティング

このワーキンググループは隔週（2週間ごと）で開催されます。

ミーティングは録画され、[Working Group - Issue Prioritization Framework](https://www.youtube.com/playlist?list=PL05JrBw4t0KrKoeXjf5Bdtapu9Cl3T7gI) プレイリストとして YouTube で公開されています。
このワーキンググループの性質上、すべての同期ミーティングで機密顧客情報が議論される可能性が高いため、プレイリストは非公開で GitLab チームメンバーのみがアクセスできます。
