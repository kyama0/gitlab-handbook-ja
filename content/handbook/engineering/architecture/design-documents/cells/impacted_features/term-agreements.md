---
stage: enablement
group: Tenant Scale
title: 'Cells: Term Agreements'
toc_hide: true
upstream_path: /handbook/engineering/architecture/design-documents/cells/impacted_features/term-agreements/
upstream_sha: 78b430bc8e2a925f210024d512218ce1d8d42106
lastmod: "2026-05-28T15:55:17+12:00"
translated_at: "2026-05-28T00:00:00Z"
translator: claude
stale: false
---

{{% alert %}}
このドキュメントは作成中であり、Cells 設計の非常に初期の状態を表しています。
重要な側面の多くはまだ文書化されていませんが、将来的に追加していく予定です。
これは Cells の 1 つの可能なアーキテクチャであり、どのアプローチを実装するかを決定する前に、
これを代替案と比較するつもりです。
このアプローチを実装しないと決定した場合でも、このアプローチを選ばなかった理由を文書化できるように、
このドキュメントは保持されます。
{{% /alert %}}

Term agreement はセルローカルになります。その結果、別のセルに移行されたユーザーは、利用規約を再受諾するよう求められます。

## 1. 定義

GitLab では、管理者がすべてのユーザーに対し、インスタンスを使用する前に[利用規約](https://gitlab.com/-/users/terms)への同意を必須にできます。同意は、ユーザーに関連付けられた term agreement として記録されます。

## 2. データフロー

Term agreement はセルごとに保存されます。ユーザーが特定のセルで規約に同意すると、その同意はそのセル上にローカルにのみ記録されます。term の受諾に関するクラスター全体の記録は存在しません。

## 3. 提案

### 3.1. セルローカルな term agreement

Term agreement はセルローカルのままになります。ユーザーが新しいセルに移行されると、ソースセルからの term agreement は引き継がれません。ユーザーは、処理を進める前に、移行先のセルで規約を再受諾するよう求められます。

このアプローチは、ユーザー向けのコンプライアンス対応を、ユーザーが現在操作しているセルにスコープ付けして維持するという方針と一貫しています。決定の根拠については [Issue #595225](https://gitlab.com/gitlab-org/gitlab/-/work_items/595225#note_3390346693) を参照してください。

## 4. 評価

私たちはセルローカルな term agreement を選択します。

### 4.1. 利点

- term agreement の状態をセル間で同期する必要がありません。
- term の受諾は、セルごとに監査可能かつ強制可能なままです。

### 4.2. 欠点

- 別のセルに移行されたユーザーは規約を再受諾する必要があり、これは予期しないものかもしれません。
