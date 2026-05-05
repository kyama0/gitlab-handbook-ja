---
title: 'GitLab CI Events ADR 001: 階層的イベントの使用'
toc_hide: true
upstream_path: /handbook/engineering/architecture/design-documents/gitlab_ci_events/decisions/001_hierarchical_events/
upstream_sha: 9e852ac812142230dfe1e1db31be2862cd857cfd
translated_at: "2026-04-27T00:00:00Z"
translator: claude
stale: false
---

## コンテキスト

CI イベントへのサブスクリプションに基づいて CI パイプラインを実行するための複数のユースケースについて、[Issue](https://gitlab.com/gitlab-org/gitlab/-/issues/424865) でブレインストーミングを行いました。階層的イベントを使用するパターンが浮かび上がり、イベントはタイプや起源によってグループ化できることが明らかになりました。

例えば:

```yaml
annotate:
  on: issue/created
  script: ./annotate $[[ event.issue.id ]]

summarize:
  on: issue/closed
  script: ./summarize $[[ event.issue.id ]]
```

この決定を行う際、私たちはまだ構文に焦点を当てておらず、イベントのグループ化がほとんどのユースケースで有用であることに着目しました。

ユーザーがグループ内の複数のイベントを一度にサブスクライブできるようにすることも検討しました。

```yaml
audit:
  on: events/gitlab/gitlab-org/audit/*
  script: ./audit $[[ event.operation.name ]]
```

この意味するところは、同じグループ内のイベントは同じフィールド/スキーマ定義を共有する必要があるということです。

## 決定

階層的イベントを使用します。すなわち、グループ化でき、安定したコントラクトに従って同じフィールドを共有するイベントです。例えば: すべての _issue_ イベントには `issue.iid` フィールドが含まれます。

イベントのグループ化方法はまだ決定されておらず、ラベリングまたはパス形式の構文を使用したグループ化のどちらかを選択できます。

## 結果

この意味するところは、イベントのペイロードおよび/またはスキーマを説明する安定したインターフェースを持つシステムを構築する必要があるということです。

## 代替案

代替案は階層的イベントを使用せず、すべてのイベントを個別にサブスクライブする必要があり、異なるイベントの共通スキーマに関してユーザーへの保証が与えられない方法です。これは、自然に特定のグループに属し、ユーザーが監査イベントのような共通スキーマを期待するイベントに対して特に問題となります。
