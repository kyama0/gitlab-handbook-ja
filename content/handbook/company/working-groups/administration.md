---
title: "GitLab 管理ワーキンググループ"
description: "GitLab 管理ワーキンググループの属性、目標、ロールと責任について詳しく説明します。"
upstream_path: /handbook/company/working-groups/administration/
upstream_sha: b4eeb07f0d5f46e2fc5f8572be1a2547261aed89
translated_at: "2026-04-25T09:00:00Z"
translator: claude
stale: false
lastmod: "2023-11-02T14:28:23+00:00"
---

## 属性

| プロパティ       | 値                                                        |
| -------------- | ------------------------------------------------------------ |
| 作成日          | 2023-03-01                                                   |
| 終了日          | 2023-07-27                                                   |
| Slack          | #wg_administration（社内からのみアクセス可能） |
| Google ドキュメント | [ワーキンググループアジェンダ](https://docs.google.com/document/d/1WKxclMpCIXzXJUcQ0WfsjT_x8ytXuw40KHCoR2LUMzk/edit# )|
| Issue ボード    | [管理ワーキンググループ](https://gitlab.com/groups/gitlab-org/-/boards/5461629?label_name[]=WorkingGroup%3A%3AAdministration) |
| エピック           | [GitLab 管理ワーキンググループ](https://gitlab.com/groups/gitlab-org/-/epics/10067) |
| 概要 & ステータス | クローズ |

### 憲章

GitLab 管理ワーキンググループは、[GitLab 管理者](https://docs.gitlab.com/ee/administration/)機能を健全に維持するために必要な作業を決定し、リクエストのオーナーグループを特定し、解決のために対応するグループに Issue を転送します。このグループは、永続的なオーナーを担うチームが設立されるまで、すべての GitLab 管理者機能の一時的なオーナーです。

### コンテキスト

GitLab 管理機能のメンテナンスと改善は、開発グループ間での共有責任となっています。これにより、共有責任についての同じ質問、つまり「誰がこれを所有しているのか、誰がこれに取り組むべきか」が頻繁に発生します。開発オーナーグループが特定される前に、ワーキンググループが GitLab（ソフトウェア）をスムーズに実行するための関連機能を維持するのに役立ちます。

### 終了基準 {#exit-criteria}

1. GitLab の管理エリアの項目のオーナーが特定され、認定され、ハンドブックに文書化されている。=> **完了** オーナーリストは[Issue](https://gitlab.com/gitlab-org/gitlab/-/issues/396707)の説明にあり、私たち（GitLab 全体）は残りの未所有エリアの明確化を継続します。その間、未所有エリアについては[共有責任機能](/handbook/product/categories/#shared-responsibility-functionality)に従い続けてください。
1. インスタンス管理（アップグレード、バックアップとリストア、メトリクス、パフォーマンス）および設定に関連する項目のオーナーが特定され、認定され、ハンドブックに文書化されている。=> **スキップ** 他の優先事項により調査しませんでした。
1. GitLab 管理者機能の特定の項目に対して新しいチームが必要な場合の提案。上記 2 つの項目がすべての機能をカバーしている場合、これは不要な可能性があります。=> **スキップ** 他の優先事項により調査しませんでした。
1. 将来の管理機能のオーナーを特定するプロセスがハンドブックに文書化されている。=> **完了** 新しい管理セクションの追加プロセスを含む[ハンドブックページを更新](https://gitlab.com/gitlab-org/gitlab/-/merge_requests/116711)しました。

## ロールと責任

| ワーキンググループのロール                       | 担当者                           | 役職                                                          |
|------------------------------------------|----------------------------------|----------------------------------------------------------------|
| エグゼクティブステークホルダー                    | Christopher Lefelhocz (@clefelhocz1)           | VP、開発 |
| ファシリテーター/DRI                          | Peter Lu (@plu8)                 | エンジニアリングマネージャー、Distribution:Deploy |
| プロダクトマネジメント DRI                   | Dilan Orrino (@dorrino)         | プロダクトマネージャー Distribution |
| メンバー                                   | Gosia Ksionek (@mksionek)        | バックエンドエンジニア、Manage::Authentication & Authorization       |
| メンバー                                   | Christina Lohr (@lohrc)        |  シニアプロダクトマネージャー、Data Stores::Tenant Scale               |
| メンバー                                   | Joseph Longo (@jlongo_gitlab)  | マネージャー、ガバナンス & フィールドセキュリティ |
| メンバー                                   | Oriol Lluch Parellada (@o-lluch)  | エンジニアリングマネージャー、インフラストラクチャ |
| メンバー                                   | Hannah Sutor (@hsutor)  | シニアプロダクトマネージャー - Auth |
| メンバー                                   | Falko Sieverding (@fsieverding)  | カスタマーサクセスマネージャー、EMEA |
| メンバー                                   | Shawn Sichak (@ssichak)  | シニアセキュリティエンジニア、Trust and Safety |
| メンバー                                   | Manuel Kraft (@manuel.kraft)  | カスタマーサクセスマネージャー、EMEA |
| メンバー                                   | Sean Carroll (@sean_carroll) | エンジニアリングマネージャー、Create::Source Code |
