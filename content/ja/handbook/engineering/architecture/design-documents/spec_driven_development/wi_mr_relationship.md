---
title: "ワークアイテムとマージリクエストの関係"
description: "SDD が必要とするワークアイテムとマージリクエスト間の双方向リンクの設計。"
status: ongoing
maturity: mature
creation-date: "2026-04-16"
authors: [ "@fredericcaplette" ]
owning-stage: "~devops::plan"
toc_hide: true
upstream_path: /handbook/engineering/architecture/design-documents/spec_driven_development/wi_mr_relationship/
upstream_sha: d5f4aa38819ae2b572eb32e0d967394d0361a975
translated_at: "2026-04-27T10:00:00Z"
translator: claude
stale: false
---

SDD の詳細については [Spec-Driven Development](_index.md) をご覧ください。

**成熟度: 成熟**

## 概要

SDD では、ワークアイテムとマージリクエストの間に一級市民としての双方向関係が必要です。Agent プランはワークアイテム上に存在し、Duo Developer と Duo Review は MR を対象として動作します。強固なリンクがなければ、下流のエージェントはフォローすべきプランや検証すべきプランを確実に見つけることができません。

## 現状

現在、ワークアイテムと MR のリンクは緩い状態です：

- **クロージングリファレンス** — MR の説明に `Closes #123` が含まれると、クロージングリファレンスが追加されます。
- **メンションリファレンス** — コメントに Issue へのリンクが追加されると、`Mentioned` リファレンスが追加されます。
- **プログラム的なルックアップなし** — 「この MR を起源とするワークアイテムとその Agent プランはどれか？」を問い合わせる信頼できる API がありません。

## SDD が必要とするもの

1. **Duo Developer** がワークアイテムからコーディングセッションを開始します。生成された MR は、手動介入なしに関係が確立されるよう、そのワークアイテムに自動的にリンクされなければなりません。
2. **Duo Review** は MR を受け取り、起源となる Agent プランを取得する必要があります。MR -> リンクされたワークアイテム -> Agent プランウィジェットというパスを単一の確実な経路でたどれなければなりません。
3. **マージチェック** は最終的に MR をプランに対して検証する可能性があります。これにはリンクがマージリクエストページでクエリ可能であることが必要です。

## 提案されたアプローチ

既存のワークアイテム–MR アソシエーションを強化し、以下を実現します：

- **自動** — Duo Developer がワークアイテムから MR を作成すると、そのフローの一部としてリンクが作成されます。
- **明示的** — 関係は API および UI を通じて確立・削除できます。これにより、よりプログラム的な更新を可能にする優れた統合レイヤーが追加されます。
- **双方向** — ワークアイテム側（`workItem.mergeRequests`）と MR 側（`mergeRequest.workItems`）の両方からクエリ可能です。
- **型付き** — 他の MR リファレンスと区別可能です（例：「このプランからエージェントが作成した」vs「手動でリンクした」）。

正確なデータモデル（既存の `MergeRequestsClosingIssues` テーブルの拡張、新しいアソシエーションテーブル、またはワークアイテムリンクの活用）は TBD です。

## 下流への影響

- [下流コンシューマー](downstream_consumers.md) — Duo Developer のハンドオフと Duo Review の検証はいずれもこのリンクに依存しています。
- [MR でのマージチェック](_index.md#3-plan-validation) — マージ時にプランを検証するには、リンクが存在しクエリ可能である必要があります。
