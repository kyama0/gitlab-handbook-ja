---
stage: enablement
group: Tenant Scale
title: 'Cells: 利用規約'
toc_hide: true
upstream_path: /handbook/engineering/architecture/design-documents/cells/impacted_features/term-agreements/
upstream_sha: 6f812a8fec541dba51e50314e85d7890b9e71d7d
lastmod: "2026-05-28T15:55:17+12:00"
translated_at: "2026-05-28T21:12:16Z"
translator: claude
stale: false
---

{{% alert %}}
このドキュメントは作業中であり、Cells 設計の非常に初期の状態を表しています。重要な側面の多くはまだ文書化されていませんが、今後追加していく予定です。これは Cells のあり得るアーキテクチャの 1 つであり、どのアプローチを実装するか決定する前に、代替案と比較対照する予定です。このドキュメントは、たとえ実装しないと決定した場合でも、そのアプローチを選ばなかった理由を記録できるように残しておきます。
{{% /alert %}}

利用規約への同意 (term agreement) はセルローカルになります。その結果、別のセルに移行されたユーザーは、利用規約への再同意を求められます。

## 1. 定義

GitLab では、管理者がインスタンスを利用する前にすべてのユーザーに[利用規約](https://gitlab.com/-/users/terms)への同意を要求できます。同意はユーザーに関連付けられた term agreement として記録されます。

## 2. データフロー

term agreement はセルごとに保存されます。あるセルでユーザーが利用規約に同意すると、その同意はそのセル上にローカルに記録されるだけです。クラスター全体での利用規約同意の記録は存在しません。

## 3. 提案

### 3.1. セルローカルな term agreement

term agreement はセルローカルのままになります。ユーザーが新しいセルに移行されると、移行元セルでの term agreement は転送されません。ユーザーは処理を進める前に、移行先セルで利用規約への再同意を求められます。

このアプローチは、ユーザー向けのコンプライアンスアクションを、そのユーザーが現在操作しているセルにスコープしておくという考え方と一貫しています。判断の根拠については [Issue #595225](https://gitlab.com/gitlab-org/gitlab/-/work_items/595225#note_3390346693) を参照してください。

## 4. 評価

私たちはセルローカルな term agreement を選択します。

### 4.1. 長所

- term agreement の状態をセル間で同期する必要がありません。
- 利用規約への同意は、セルごとに監査可能かつ強制可能なまま保たれます。

### 4.2. 短所

- 別のセルに移行されたユーザーは利用規約に再同意する必要があり、これは予期しないものとなる可能性があります。
