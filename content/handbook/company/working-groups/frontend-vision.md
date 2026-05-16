---
title: "フロントエンドビジョングループ"
description: "3年後に GitLab フロントエンドで実現したいフロントエンドアーキテクチャの実践に関するガイドラインを作成します"
status: active
upstream_path: "/handbook/company/working-groups/frontend-vision/"
upstream_sha: "b4eeb07f0d5f46e2fc5f8572be1a2547261aed89"
translated_at: "2026-04-25T00:00:00Z"
translator: "claude"
stale: false
lastmod: "2024-07-13T01:07:30+00:00"
---

## 属性

| プロパティ          | 値                                                                                                                                                |
| ----------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- |
| 作成日      | 2023-03-27                                                                                                                                           |
| 目標終了日   | 未定                                                                                                                                                  |
| Slack             | #wg_frontend-vision（社内からのみアクセス可能）                                                                                        |
| Google Doc        | [アジェンダ](https://docs.google.com/document/d/1H0td5YZJROQG_aOkGJuIpXqxi4UEpiuCufvEAc27kMo/edit?usp=sharing)（社内からのみアクセス可能） |
| 概要と状況 | [終了基準の進捗](#exit-criteria-progress)を参照                                                                                                |

### コンテキスト

現在、私たちのフロントエンド開発ガイドラインは、*現在本番環境で使用している*機能と実践のみを文書化しています。GitLab のフロントエンドの望ましい状態についての明確な文書化も、非推奨にする予定の実践に関するガイドラインも存在していません。現時点から3年後の範囲でフロントエンドアーキテクチャ、技術スタック、ベストプラクティスに関する高レベルの期待値のセットを定義できると理想的です。議論すべきトピックの非網羅的なリストを以下に示します：

- シングルページアプリケーション vs マルチページアプリケーション vs ハイブリッドアプローチ（一部の機能を処理する複数の SPA）
- サーバーサイドレンダリング
- 技術スタック（フロントエンドフレームワーク、状態管理アプローチ、テストレベルとツール）
- リアルタイム機能、オプティミスティックアップデート、フロントエンドキャッシング、全体的な「スナッピーな GitLab 体験」
- メイン戦略から逸脱したツールを必要とするグループの例外プロセス

### 終了基準 {#exit-criteria}

更新は https://gitlab.com/gitlab-org/gitlab/-/issues/419576 内で隔週で追跡されています。

1. フロントエンドのドキュメントに、方向性とフロントエンドコードベース/アーキテクチャの高レベル概要を説明する導入ページを追加します。
1. 3年間のコードベースの進化を含めます。
1. 使用されているフロントエンド技術と、フロントエンドチームの作業を導くデザイン原則を一覧表示します。
1. 非推奨/削除計画を明確に定義し、これらの機能が非推奨になる理由を含めます。
1. 成果をより広いフロントエンド機能グループに伝達します。
1. ワーキンググループからのアップデートの頻度を含む、コミュニケーション計画を議論・文書化します。
1. GitLab UI 外の再利用可能なコンポーネントの要件を文書化します。
1. [フロントエンドドキュメントの特定部分に関する DRI を決定します。](https://gitlab.com/gitlab-org/gitlab/-/issues/381536)
1. メイン戦略の例外プロセスの仕組みと、「ワイルド」なアイデアのための別の領域が必要かどうかを決定します。
1. RFC の評価と意思決定プロセスを決定します。

#### 終了基準の進捗 {#exit-criteria-progress}

| 基準                                                                                                  | 開始日 | 完了日 | 進捗 | DRI     |
| --------------------------------------------------------------------------------------------------------- | ---------- | -------------- | -------- | ------- |
| フロントエンドのドキュメントに、方向性とフロントエンドコードベース/アーキテクチャの高レベル概要を説明する導入ページを追加します。              |            | 2023-06-28 | 100% | @f_caplette |
| 3年間のコードベースの進化を含めます。                                                  |            |                |          | @ntepluhina |
| 使用されているフロントエンド技術と、フロントエンドチームの作業を導くデザイン原則を一覧表示します。            |            |                |          | @leipert |
| 非推奨/削除計画を明確に定義し、これらの機能が非推奨になる理由を含めます。           |            |                |          |         |
| 成果をより広いフロントエンド機能グループに伝達します。                                             |            |                |          | @donaldcook |
| ワーキンググループからのアップデートの頻度を含む、コミュニケーション計画を議論・文書化します。       |            | 2023-08-07 | 100% | @donaldcook |
| GitLab UI 外の再利用可能なコンポーネントの要件を文書化します。                                                                    |            |                |          | @pslaughter |
| [フロントエンドドキュメントの特定部分に関する DRI を決定します。](https://gitlab.com/gitlab-org/gitlab/-/issues/381536) |            |                |          | @andrei.zubov |
| メイン戦略の例外プロセスの仕組みと、「ワイルド」なアイデアのための別の領域が必要かどうかを決定します。                |            |                |          | @ntepluhina |
| RFC の評価と意思決定プロセスを決定します。                                            |            |                |          |     @f_caplette     |

### 役割と責任

| ワーキンググループの役割 | 人物                   | 役職                                               |
| ------------------ | ------------------------ | --------------------------------------------------- |
| エグゼクティブスポンサー  | Christopher Lefelhocz    | VP of Development（Tim Zallmann に委任）      |
| エグゼクティブスポンサー  | Tim Zallmann             | Senior Director of Engineering                      |
| ファシリテーター        | Donald Cook              | Engineering Manager, Plan:Project Management        |
| 機能リード    | Natalia Tepluhina        | Principal Engineer, Plan                            |
| メンバー             | Vitaly Slobodin          | Staff Frontend Engineer, Fulfillment                |
| メンバー             | Paul Slaughter           | Staff Frontend Engineer, Create:Remote Development  |
| メンバー             | Mark Florian             | Staff Frontend Engineer, Manage:Foundations         |
| メンバー             | Lukas Eipert             | Senior Frontend Engineer, Manage:Foundations        |
| メンバー             | Frédéric Caplette        | Senior Frontend Engineer, Verify:Pipeline Authoring |
| メンバー             | Andrei Zubov             | Senior Frontend Engineer, Release                   |
| メンバー             | Stanislav Lashmanov      | Senior Frontend Engineer, Create:Source Code        |
| メンバー             | Florie Guibert           | Senior Frontend Engineer, Plan:Product planning     |
| メンバー             | Paul Gascou-Vaillancourt | Senior Frontend Engineer, Manage:Foundations        |
