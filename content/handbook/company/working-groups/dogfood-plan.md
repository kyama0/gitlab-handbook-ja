---
title: "ドッグフード計画 ワーキンググループ"
description: "このワーキンググループは、GitLab 自身のアジャイル計画プロセスに Plan ステージの新機能を統合します。"
upstream_path: /handbook/company/working-groups/dogfood-plan/
upstream_sha: b4eeb07f0d5f46e2fc5f8572be1a2547261aed89
translated_at: "2026-04-25T12:00:00Z"
translator: claude
stale: false
lastmod: "2024-06-27T22:14:31+00:00"
---

## 属性

| プロパティ     | 値            |
|--------------|------------------|
| 作成日       | 2020年8月1日   |
| 終了日       | 2020年12月15日|
| Slack        | [#wg_dogfood_plan](https://gitlab.slack.com/archives/C0188LMC2LQ)（社内のみ） |
| Google Doc   | [ドッグフード計画 ワーキンググループ アジェンダ](https://docs.google.com/document/d/1x7WZd_ilH9N4TvbUwdFKw2hcdlQ80SaN2CmHdNwnEzI/edit)（社内のみ） |

## ビジネスゴール

このワーキンググループは、GitLab 自身のアジャイル計画プロセスに Plan ステージの新機能を統合します。また、既存の機能を活用できるものもあるかもしれません。まず Plan ステージグループ自体から始め、機能を担当するメンバーに対してその機能を自身のチームで実際に使用してもらいます。うまくいけば、将来のイテレーションで R&D 全体（他のステージ）に展開することも検討します。期待される効果は以下のとおりです:

- 現在のプロセスは標準化されておらず、一部のチームはリリース計画を最適ではない方法（効率的・透明・非同期でない等）で行っている可能性があり、他のチームが有効と判断したことを活かせていない
- ドッグフーディング
  - ツールを標準化するなら自社製品を使うべき
  - ユーザー・顧客に向けた製品改善につながる
- GitLab が顧客組織に根付いた他の計画ツールと統合しつつも、自社の計画機能セットにどれほど投資しているかをチーム・ユーザー・顧客に改めて示すことができる

## 終了基準 {#exit-criteria}

- [x] ドッグフーディングに使う Plan 内の機能を決定する
  - [イテレーション](https://docs.gitlab.com/ee/user/group/iterations/) => **完了** Plan 内でイテレーションを選択し、四半期を通じて内部的に推進した
- [x] Q3 OKR の確定 => **完了**
  - [FY21-Q3 エンジニアリング部門 OKR](https://gitlab.com/gitlab-com/www-gitlab-com/-/issues/8303)
  - 開発: [KR: プロジェクト計画 & ポートフォリオ管理](https://gitlab.com/gitlab-com/www-gitlab-com/-/issues/8429)
    - [KR: ~devops::plan ~"type::feature" の Issue で "workflow::In Dev" に移行したものの 50% にイテレーションが割り当てられていること](https://gitlab.com/gitlab-com/www-gitlab-com/-/issues/9058) => 86%
    - [KR: ~devops::plan の Issue のうち単一イテレーション内の 50% がバーンダウンされていること](https://gitlab.com/gitlab-com/www-gitlab-com/-/issues/9059) => 100%
  - UX: [KR: Plan の Iterations 機能をドッグフードし、Issue が workflow::design に滞留する時間を短縮する](https://gitlab.com/gitlab-com/www-gitlab-com/-/issues/8436)
  - Quality: [KR: プロアクティブな品質テスト計画プロセスのためにプロジェクト計画・管理機能をドッグフードする](https://gitlab.com/gitlab-com/www-gitlab-com/-/issues/8369)
  - PM: [KR: イテレーションをドッグフードする](https://gitlab.com/gitlab-com/Product/-/issues/1406)
- [x] GitLab 組織全体でイテレーションを効果的に使用するために必要な Issue をまとめたエピックを作成する => **完了**
  - [GitLab でのイテレーション](https://gitlab.com/groups/gitlab-org/-/epics/2422)
- [x] 全ステージに展開するためのドッグフード対象となる将来の Plan 機能を定義する => **完了**
  - Q4 では Epic Swimlane を全ステージに導入し、四半期末までに 13 ステージでの使用を目指す
- [x] 他のステージが自チームのプロセスをイテレーション対応に変える方法を教えるための YouTube デモ動画を録画する => **より重要な機能が追加された後に実施予定**

## ロールと責任

| ワーキンググループのロール          | 担当者            | 役職                        |
|-----------------------------|-------------------|------------------------------|
| ファシリテーター                 | Tim Zallmann      | Director of Engineering      |
| 開発部門リード | Donald Cook       | Frontend Engineering Manager |
| UX 部門リード          | Mike Long         | Product Design Manager       |
| Quality 部門リード     | Ramya Authappan   | Quality Engineering Manager  |
| PM 部門リード            | Jeremy Watson     | Group Manager, PM            |
| メンバー                      | Gabe Weaver       | Senior Product Manager       |
| メンバー                      | Keanon O'Keefe    | Senior Product Manager       |
| メンバー                      | Mark Wood         | Senior Product Manager       |
| メンバー                      | John Hope         | Backend Engineering Manager  |
| メンバー                      | Jake Lear         | Backend Engineering Manager  |
| エグゼクティブスポンサー           | Christopher Lefelhocz | VP of Development        |

## 成果物

- Plan チームを含む数チームが現在積極的にイテレーションを使用している
- 機能についての「うまくいくこと・うまくいかないこと」の明確な理解が生まれた
- ドッグフーディング活動を継続するため、チュートリアル動画・オフィスアワー・アナウンスを通じて Epic Swimlane を導入しながら、隔週の作業ミーティングを継続することに合意した
