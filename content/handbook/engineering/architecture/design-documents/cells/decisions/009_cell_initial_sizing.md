---
owning-stage: "~devops::data stores"
title: 'Cells ADR 009: Cell の初期サイズ'
toc_hide: true
upstream_path: /handbook/engineering/architecture/design-documents/cells/decisions/009_cell_initial_sizing/
upstream_sha: b4eeb07f0d5f46e2fc5f8572be1a2547261aed89
translated_at: "2026-04-26T00:00:00Z"
translator: claude
stale: false
lastmod: "2024-08-23T13:02:20+00:00"
---

## コンテキスト

Cell をプロビジョニングする際、最初にどの[リファレンスアーキテクチャ](https://docs.gitlab.com/ee/administration/reference_architectures/index.html)を選択するかを決める必要があります。
その後、[フレキシブルアーキテクチャ](005_flexible_reference_architectures.md)に基づいてワークロードに応じてスケールします。

<https://gitlab.com/gitlab-com/gl-infra/scalability/-/issues/2838> では、最初にどのリファレンスアーキテクチャを選択すべきかについて調査を行いました。

## 決定事項

### Ring 0

Ring 0 では QA ジョブのみを実行し、顧客トラフィックを処理しません。
コスト効率の観点から、[3k リファレンスアーキテクチャ](https://docs.gitlab.com/ee/administration/reference_architectures/3k_users.html)を採用します。

### Ring 2 以上

最初の Cell は [社内顧客専用 / GitLab Inc.](007_internal_customers.md) として使用され、GitLab Inc. のすべてのリポジトリを一度に移行するのではなく段階的に行います。
この Cell を最初にプロビジョニングしてから GitLab Inc. 全体をオンボードするまでの期間はまだ不明なため、
中規模の [25k リファレンスアーキテクチャ](https://docs.gitlab.com/ee/administration/reference_architectures/25k_users.html)サイズの Cell から開始し、[50k リファレンスアーキテクチャ](https://docs.gitlab.com/ee/administration/reference_architectures/50k_users.html)にスケールアップします。

このリングおよびそれ以上の外側のリングでプロビジョニングするその他の Cell は、[50k リファレンスアーキテクチャ](https://docs.gitlab.com/ee/administration/reference_architectures/50k_users.html)から開始します。

## 結果

`Ring 0` の Cell については、現時点では影響は想定されていません。

GitLab Inc. にサービスを提供する Cell については、25k から 50k へのスケールアップが必要になる場合があり、
Gitaly、Database、Redis などのステートフルなサービスをリサイズする必要があるため[ダウンタイムが発生する](https://gitlab.com/gitlab-com/gl-infra/gitlab-dedicated/team/-/blob/main/runbooks/upgrading-tenant-reference-architectures.md?ref_type=heads)可能性があります。
このダウンタイムの時間はまだ不明であり未検証ですが、
AWS 上の Dedicated ではおよそ 20〜40 分程度です。
このダウンタイムが発生する場合は社内のみへの影響にとどまるため、
影響を最小化するために週末に実施することができます。

## 代替案

GitLab Inc. にサービスを提供する最初の Cell を最初から 50k リファレンスアーキテクチャで構築することも可能ですが、以下の理由から採用しませんでした。

- 全員をオンボードする際にこれらのリソースが必要かどうか不明です。
- 全員をいつオンボードするか不明なため、多くのコンピューティングリソースが無駄になります。
- [フレキシブルリファレンスアーキテクチャ](005_flexible_reference_architectures.md)を使用して、まずアーキテクチャ内の特定のホットスポットを解消することができます。
