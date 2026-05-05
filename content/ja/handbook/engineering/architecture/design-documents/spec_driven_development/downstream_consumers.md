---
title: "ダウンストリームコンシューマー"
description: "Duo Developer と Duo Review がエージェントプランを実行と検証のためにどのように消費するか。"
status: ongoing
maturity: still defining
creation-date: "2026-04-16"
authors: [ "@fredericcaplette" ]
owning-stage: "~devops::plan"
toc_hide: true
upstream_path: "/handbook/engineering/architecture/design-documents/spec_driven_development/downstream_consumers/"
upstream_sha: "86cfa2bd7d73df5a673fe5ebd33b028d0f540434"
translated_at: "2026-04-27T09:00:00Z"
translator: claude
stale: false
---

SDD の詳細は [Spec-Driven Development](index.md) をお読みください。

**成熟度：定義中**

## 概要

エージェントプランの価値はダウンストリームシステムによって消費されることから生まれます。このページでは Duo Developer と Duo Review がプランをどのように読み取り使用するかを解説します。

## Duo Developer へのハンドオフ

ユーザーがワークアイテムから Duo Developer を起動すると、エージェントはエージェントプランを読み取る必要があります。2 つのオプション：

1. フローの最初のステップがワークアイテム GraphQL API を通じてプランを取得する。
2. セッション作成時にプランがエージェントのコンテキストに注入される。

選択されたアプローチとその実装は TBD です。

## Duo Review による検証

Duo Review エージェントは MR の変更を元のエージェントプランに照らして検証します。MR とプランの間のリンクは[ワークアイテム ↔ MR 関係](wi_mr_relationship.md)を通じて確立されます。レビューエージェントはリンクされたワークアイテムからプランを取得し、評価基準として使用します。

エピック：[ワークストリーム 1 — MR スペック強制](https://gitlab.com/groups/gitlab-org/-/work_items/21514)

## MR でのマージチェック

マージ時のエージェントプランの検証（マージチェックとして）はまだ定義中です。これは SDD 内で直接構築するのではなく、[コードレビューライフサイクルの変革](https://docs.google.com/document/d/1BsdLonLqNyB0QSdEiUaJJ5GNQLkr-gKx_uQNTApdfCA/edit?tab=t.0)イニシアチブのワークストリームによってカバーされる可能性があります。

## API サーフェス

エージェントプランは標準のワークアイテムウィジェット GraphQL/REST API を通じて公開されます。外部ツール（`curl`、`glab`、IDE 拡張機能）はこのサーフェスを使用してプランを読み取り・書き込みできます。

## 構造化 vs 生 Markdown

ダウンストリームエージェントは現在プランを生の Markdown テキストとして消費します。プランがより豊かな構造（セクション、受け入れ基準、テストケース）に進化した場合、シリアライゼーションと後方互換性への対応が必要になります。

## 決定

| 日付 | 決定 | 誰が |
|------|----------|-----|
| 2026-04-17 | ダウンストリームエージェントが消費するエージェントプラン形式は **Markdown**（YAML や構造化 JSON ではない）。Markdown は人間可読であり、GitLab の説明文の一般的な形式であり、コンシューマーにとってシリアライゼーションのオーバーヘッドを避けられる。 | @fredericcaplette |
