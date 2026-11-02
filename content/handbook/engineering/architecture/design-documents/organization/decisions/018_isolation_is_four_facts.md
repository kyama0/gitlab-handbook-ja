---
owning-stage: "~devops::tenant scale"
title: 'Organizations ADR 018: 隔離は 1 つではなく 4 つの事実である'
description: "Organization の隔離を要求済み、強制適用中、確定済み、検証済みの隔離に分け、各ルールがどれを参照するかを明示する ADR。"
creation-date: "2026-10-23"
authors: [ "@alexpooley" ]
toc_hide: true
upstream_path: "/handbook/engineering/architecture/design-documents/organization/decisions/018_isolation_is_four_facts/"
upstream_sha: "d5f4e694763c3ac443cc3d58c6a9a81bafa06880"
lastmod: "2026-11-02T17:39:47+05:30"
translated_at: "2026-11-02T21:11:17+00:00"
stale: false
translator: codex
---

## 背景 {#context}

現在、Organization には `organization_isolations.isolated` という 1 つの隔離設定があり、true または false を取ります。コードは次の 3 つの異なる理由でこの設定を確認します。

- Organization の User が他の Organization に参加するのを防ぐため。
- 外部メンバーや MR の依存関係など、Organization の内外を結ぶ新しいリンクをブロックするため。
- バックグラウンドのバリデーターが Organization のデータを確認するかどうかを決めるため。バリデーターが Organization 間のリンクを検出すると、`isolated = false` を設定します。

1 つの設定では 3 つすべてに対応できません。たとえば、確定する前に新しいリンクのブロックを試したいオーナーは、`isolated = true` を設定する必要がありますが、それによって User もその Organization に固定されてしまいます。ドキュメントにも同じ問題があります。[リクエストコンテキスト](../contexts.md)と [ADR 016](016_user_context.md)は、「隔離済み」とだけ述べており、どの意味なのかを明示していません。

## 決定 {#decision}

隔離は 4 つの独立した事実から成ります。ドキュメントとコードでは、単に「隔離」と言わず「強制適用中の隔離」とするなど、どれを意味するかを常に明示します。

| 用語 | 意味 | 取り消し可能か |
|------|-------|------------|
| **要求済みの隔離** | オーナーが隔離を要求し、切り離し処理が始まった状態。 | 確定するまで可能 |
| **強制適用中の隔離** | GitLab が、Organization 間の新しいリンクを作成する書き込みをブロックする状態。 | 確定するまで可能 |
| **確定済みの隔離** | オーナーが確定し、切り離し処理が完了した状態。 | 不可 |
| **検証済みの隔離** | バックグラウンドのバリデーターが Organization 間のリンクを検出しなかった状態。 | ドリフトが生じると失われる |

確定済みの隔離には、要求済みの隔離と強制適用中の隔離が必要です。確定後は、隔離の強制適用が有効なまま維持されます。

次の表は、各事実について 1 つ以上のルールの例を示しています。これは例示であり、網羅的な一覧ではありません。隔離に依存するルールはほかにも数多くあり、それぞれが参照する事実を明示します。

| ルールの例 | 参照する事実 |
|--------------|-------|
| 切り離し処理の開始 | 要求済みの隔離 |
| Organization 間の新しいリンク（外部メンバー、MR の依存関係、インポート）のブロック | 強制適用中の隔離 |
| Organization コンテキスト（[リクエストコンテキスト](../contexts.md)） | 確定済みの隔離 |
| 排他的なメンバーシップと `organization_id` の再割り当て（[ADR 016](016_user_context.md)） | 確定済みの隔離 |
| Organization スコープの Finder に適用する Organization フィルター（[ADR 016](016_user_context.md)） | 確定済みの隔離 |
| オーナーへのドリフトの報告と、修正すべきリンクの明示 | 検証済みの隔離 |
| 別の Cell への移動 | 確定済みの隔離と検証済みの隔離 |

## 結果 {#consequences}

1. オーナーは、隔離の強制適用を有効にして試した後、再び無効にできます。メンバーシップ、User コンテキスト、クエリのフィルタリングは変わりません。
1. バリデーターが Organization 間の新しいリンクを検出した場合、失われるのは検証済みの隔離だけです。確定済みの隔離は維持されるため、オーナーがリンクを修正している間も、Organization は Organization コンテキスト、排他的なメンバーシップ、Organization フィルターを維持します。
1. `isolated?` の各呼び出し元は、その呼び出し元が意図する事実を参照するよう移行します。

## 検討した代替案 {#alternatives-considered}

1. **1 つのブール値**：プレビュー、切り離し処理、ドリフトに同じ答えを使うことを強制します。
1. **隔離のレベル**（Fully、Resource、Not Isolated）：どの程度データが内包されているかだけを表し、これは検証済みの隔離のみを意味します。
1. **確定済みの隔離を検証済みの隔離に統合する**：ドリフトによって、取り消しできない決定が覆されてしまいます。
