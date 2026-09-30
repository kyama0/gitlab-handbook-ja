---
title: "Create:Repository Services チーム"
description: GitLab のリポジトリ領域を担当し、Gitaly チームの基本機能の上にアクセスレイヤーを構築する、常設の Source Code チーム。
upstream_path: /handbook/engineering/devops/create/source-code/repository-services/
upstream_sha: 06f4e849c04bda6918ddb0bbe7ec9ea3f55eb5e9
lastmod: "2026-09-28T11:04:43+01:00"
translated_at: "2026-09-30T21:07:20+00:00"
stale: false
translator: codex
---

## 私たちの役割 {#what-we-do}

Repository Services は、Source Code のリポジトリ領域を担当するバックエンドチームです。ミッションの一部は決まっています。Gitaly チームの基本機能の上に、製品やエージェントが利用できるアクセスレイヤーを構築することです。ミッション全体の定義は現在進行中で、ここに公開する予定です。チームは、既存システムの運用維持（KTLO）とサポートに重点を置いて活動を始めます。

現在の取り組み：

- SSH 証明書
- レート制限
- ブランチルール（保留中ですが、引き続きこのチームが担当します）

## 担当する予定の領域 {#what-we-expect-to-own}

Source Code の領域を 4 チーム間でどう分担するかについては、Source Code Triage、Source Code Investigation、Hardening & Modernization の各チームと引き続き合意に向けて調整中です。以下は Repository Services に移管される予定の機能です。バックログの移管が完了したら、このリストを更新します。

- リポジトリミラーリング（プッシュ、プル、双方向）
- Git LFS
- 保護ブランチとブランチルール（ブランチルールは保留中ですが、引き続きこのチームが担当します）
- プッシュルール
- コードオーナー（Create:Code Review と共同で担当）
- コミットとタグの署名：GPG、SSH、X.509 または S/MIME の署名、Web ベースのコミット署名、署名のないコミットの拒否

## 担当しない領域 {#what-we-do-not-own}

- **Source Code のその他の領域。** 分担について合意するまでは、Source Code Triage と Source Code Investigation の各チームが、上記のリストに含まれない Source Code の機能を担当します。
- **構造的なセキュリティ対策とフロントエンドのモダナイゼーション。** 一時的に設置された [Source Code Hardening & Modernization チーム](/handbook/engineering/devops/create/source-code/hardening-and-modernization/)がこの作業を担当し、成果を機能担当チームに引き渡します。
- **Gitaly 自体。** [Gitaly チーム](/handbook/engineering/infrastructure-platforms/tenant-scale/gitaly/)が Gitaly を担当します。私たちはその基本機能の上に構築します。

## チームメンバー {#team-members}

{{< team-by-manager-role role="Manager, Engineering(.*)Create:Repository Services" team="Create:Repository Services" >}}

EMEA の Backend Engineer を 1 名募集中です。

## ステーブルカウンターパート {#stable-counterparts}

{{< engineering/stable-counterparts manager-role="Manager, Engineering(.*)Create:Repository Services" role="(Product Manager|Product Designer)(.*)Create:Source Code(,|$)|Director of Engineering(.*), Plan$" >}}

Technical Writer：Brendan Lynch（他の Source Code チームと兼任）。

## 私たちの働き方 {#how-we-work}

- **計画。** 19.6 から、毎月 [gitlab-org/create-stage](https://gitlab.com/gitlab-org/create-stage/-/issues)に `Repository Services <MILESTONE> Planning` というタイトルの計画用 Issue を生成します。以下のボードで計画します。
- **振り返り。** [async-retrospectives](https://gitlab.com/gitlab-org/async-retrospectives)が、他の Source Code チームと共有する [gl-retrospectives/create-stage/source-code](https://gitlab.com/gl-retrospectives/create-stage/source-code)に私たちの振り返りを生成します。今後、専用のプロジェクトを設ける可能性があります。
- **Gitaly との情報共有。** 私たちは Gitaly の基本機能の上に構築するため、Gitaly チームと定期的に情報を共有します。要件を Gitaly に伝える方法は引き続き合意に向けて調整中で、ここに文書化する予定です。
- **機能カテゴリとエラーバジェット。** まだ割り当てられていません。Source Code の単一の機能カテゴリである `source_code_management` は、分割されるまで Source Code Investigation が担当します。分割と、それに伴うエラーバジェットは、[設立準備の Issue](https://gitlab.com/gitlab-org/create-stage/-/work_items/13314)で追跡します。

## ボード {#boards}

すべてのボードは `group::repository services` ラベルで絞り込みます。

- [SCM 計画ボード - 複数のマイルストーン](https://gitlab.com/groups/gitlab-org/-/boards/7577682?label_name%5B%5D=group%3A%3Arepository%20services)
- [Create:Source Code - scm-backlog](https://gitlab.com/groups/gitlab-org/-/boards/7657028?label_name%5B%5D=group%3A%3Arepository%20services&label_name%5B%5D=scm-backlog)
- [SCM マイルストーン計画](https://gitlab.com/groups/gitlab-org/-/boards/7658776?label_name%5B%5D=group%3A%3Arepository%20services)
- [SCM BE 計画ボード](https://gitlab.com/groups/gitlab-org/-/boards/7577683?label_name%5B%5D=group%3A%3Arepository%20services&label_name%5B%5D=backend)
- [SCM 今後 1 〜 3 マイルストーン](https://gitlab.com/groups/gitlab-org/-/boards/7153926?label_name%5B%5D=group%3A%3Arepository%20services&label_name%5B%5D=backend&milestone_title=Next%201-3%20releases)
- [SCM UX 計画ボード](https://gitlab.com/groups/gitlab-org/-/boards/5092292?label_name%5B%5D=group%3A%3Arepository%20services)
- [Create: Source Code Infradev](https://gitlab.com/gitlab-org/gitlab/-/boards/706619?label_name%5B%5D=group%3A%3Arepository%20services)
- [作業アイテム](https://gitlab.com/groups/gitlab-org/-/work_items?label_name%5B%5D=group%3A%3Arepository%20services&label_name%5B%5D=devops%3A%3Acreate)

## リンク {#links}

- [追跡用 Issue](https://gitlab.com/gitlab-org/create-stage/-/work_items/13314)（非公開）
- [親エピック](https://gitlab.com/groups/gitlab-org/-/work_items/23672)
- [Create:Source Code チーム](/handbook/engineering/devops/create/source-code/)
- [Gitaly チーム](/handbook/engineering/infrastructure-platforms/tenant-scale/gitaly/)
- Slack：`#g_create_repository-services`（未作成）
