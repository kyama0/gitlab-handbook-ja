---
title: "AutoFlow - 自動化のためのワークフロー"
status: proposed
creation-date: "2024-02-16"
authors: [ "@ash2k", "@ntepluhina", "@timofurrer" ]
coach: "@grzesiek"
approvers: [ "@nagyv-gitlab", "@nmezzopera" ]
owning-stage: "~devops::deploy"
participating-stages: [ "~devops::plan" ]
toc_hide: true
upstream_path: /handbook/engineering/architecture/design-documents/autoflow/
upstream_sha: b4eeb07f0d5f46e2fc5f8572be1a2547261aed89
translated_at: "2026-04-26T03:00:00Z"
translator: claude
stale: false
lastmod: "2025-04-28T10:53:04-07:00"
---


{{< engineering/design-document-header >}}


GitLab AutoFlow を使用すると、DevSecOps ドメインオブジェクトと外部システム間の対話のワークフローをエンコードできます。

このデザインドキュメントは [AutoFlow design-doc プロジェクト](https://gitlab.com/gitlab-org/architecture/autoflow/design-doc) で公開されています。

## 関係者

<!-- vale gitlab.Spelling = NO -->

| 関係者            | 役割                       |
|-------------------|----------------------------|
| Grzegorz Bizon    | Distinguished Engineer     |
| Natalia Tepluhina | Principal Engineer         |
| Mikhail Mazurskiy | Staff Engineer             |
| Timo Furrer       | Senior Engineer            |

<!-- vale gitlab.Spelling = YES -->
