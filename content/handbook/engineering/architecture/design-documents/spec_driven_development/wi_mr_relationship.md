---
title: "ワークアイテムとマージリクエストの関係"
description: "SDD が必要とする、ワークアイテムとマージリクエスト間の双方向リンクの設計。"
status: ongoing
maturity: not for now
creation-date: "2026-04-16"
authors: [ "@fredericcaplette" ]
owning-stage: "~devops::plan"
toc_hide: true
upstream_path: "/handbook/engineering/architecture/design-documents/spec_driven_development/wi_mr_relationship/"
upstream_sha: "2de6fd8dc3b16760e36ce5d9b9fbfcd697d431d8"
lastmod: "2026-10-20T13:32:50-04:00"
translated_at: "2026-10-20T21:12:55Z"
translator: "claude"
stale: false
---

SDD の詳細は、[Spec-Driven Development](_index.md)を参照してください。

**成熟度：現時点では対象外**

この設計は先送りされています。現在の[親エピック](https://gitlab.com/groups/gitlab-org/-/work_items/22445)には含まれません。Workplan に照らした Duo Review による検証やマージチェックに着手する際に備えて残しています。

## 概要 {#summary}

SDD には、ワークアイテムとマージリクエストの間に、第一級の機能として双方向の関係が必要です。Workplan はワークアイテム上に存在します。Duo Developer と Duo Review は、マージリクエスト上で動作します。強固なリンクがなければ、下流のエージェントは、従うべき、あるいは検証の基準とすべき Workplan を確実に見つけられません。

## 現状 {#current-state}

現在、ワークアイテムとマージリクエストのリンクは緩やかなものです。

- **クローズ参照**：マージリクエストの説明に `Closes #123` が含まれると、クローズ参照が追加されます。
- **メンション参照**：コメントが Issue にリンクすると、`Mentioned` 参照が追加されます。
- **プログラムによる検索手段がない**：「このマージリクエストの元となるワークアイテムとその Workplan は何か」を問い合わせる信頼できる API はありません。

現在のイテレーションでは、ワークアイテムから Duo Developer への引き渡しにより、ワークアイテムの **Development** セクションを通じてマージリクエストがリンクされます。Implementation ウィジェットでのマージリクエストのステータス表示は、[WS-2](https://gitlab.com/groups/gitlab-org/-/work_items/22703)に含まれます。

## SDD に必要なもの {#what-sdd-needs}

1. **Duo Developer** は、ワークアイテムからコーディングセッションを開始します。その結果生成されるマージリクエストは、元のワークアイテムに自動的にリンクされる必要があります。
1. **Duo Review** は、マージリクエストを受け取り、元の Workplan を取得する必要があります。マージリクエスト、リンクされたワークアイテム、Workplan を、単一の確定的な経路でたどれる必要があります。
1. **マージチェック**は、将来的に Workplan に照らしてマージリクエストを検証する可能性があります。このためには、マージリクエストのページからリンクを問い合わせられる必要があります。

## 提案するアプローチ {#proposed-approach}

既存のワークアイテムとマージリクエストの関連付けを強化し、次の性質を持たせます。

- **自動的**：Duo Developer がワークアイテムからマージリクエストを作成するときに、フローの一部としてリンクを作成します。
- **明示的**：API と UI を通じて関係を作成または削除できます。
- **双方向**：ワークアイテム側（`workItem.mergeRequests`）とマージリクエスト側（`mergeRequest.workItems`）の両方から問い合わせできます。
- **種類を区別できる**：「この計画からエージェントが作成したもの」や「手動でリンクしたもの」など、他のマージリクエスト参照と区別できます。

正確なデータモデル（既存の `MergeRequestsClosingIssues` テーブルの拡張、新しい関連付けテーブル、ワークアイテムのリンクのいずれか）は、未定です。

## 下流への影響 {#downstream-impact}

- [下流の利用者](downstream_consumers.md)：Duo Review による検証とマージチェックは、このリンクに依存します。
