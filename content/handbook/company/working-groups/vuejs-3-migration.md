---
title: "Vue.js 3 マイグレーションワーキンググループ"
description: "Vue.js 3 マイグレーションワーキンググループの属性、目標、役割と責任について説明します。"
status: disbanded
upstream_path: /handbook/company/working-groups/vuejs-3-migration/
upstream_sha: b4eeb07f0d5f46e2fc5f8572be1a2547261aed89
translated_at: "2026-04-25T23:40:34Z"
translator: claude
stale: false
lastmod: "2025-11-12T18:16:53+01:00"
---

## 属性

| プロパティ         | 値                                                                                                                                   |
| ----------------- | ------------------------------------------------------------------------------------------------------------------------------------ |
| 作成日            | 2023-02-10                                                                                                                           |
| 目標終了日        | 2025-12-31                                                                                                                           |
| 終了日            | 2024-10-10                                                                                                                           |
| Slack             | #wg_vue3_migration（社内のみアクセス可能）                                                                                           |
| Google Doc        | [議事録](https://docs.google.com/document/d/1Ad8mbz5HzMsBI2sR6DgQ34afOn1L1OJy5m_RrrpXaqE)（社内のみアクセス可能）                    |
| Epic              | [gitlab-org/&2652](https://gitlab.com/groups/gitlab-org/-/epics/6252)                                                                |
| 概要 & ステータス | [終了基準](#exit-criteria) を参照                                                                                                     |

### 解散について

2024 年 10 月 10 日、Vue 3 ワーキンググループは、より小規模で集中度の高いタスクグループを優先するために解散されました。この日時点で、Vue 3 へのマイグレーションは完了しておらず、まだ多くの作業が残っています。未完了の項目については、[終了基準](#exit-criteria) をご参照ください。

### コンテキスト

[Vue.js 3](https://vuejs.org) は GitLab が使用するフロントエンドフレームワークの最新バージョンです。

2023 年 12 月 31 日をもって [Vue.js 2](https://v2.vuejs.org/lts/)（現在 GitLab が使用しているバージョン）は公式にサポート終了となり、セキュリティアップデートとブラウザ互換性のサポートが終了します。これは GitLab の全ユーザーに影響する可能性があります。

また、現在の GitLab コードベースは Vue 3 との互換性がないライブラリのサブセットに依存しており、マイグレーション時に追加のリスクを生じさせる可能性があります。

私たちはメンテナンスされていないバージョンのフレームワークを使用することでユーザーに追加のセキュリティリスクを生じさせないようにしたいと考えています。同時に、最新バージョンの新機能を活用することで開発者の生産性を向上させます。また、Vue.js 3 へのアップグレードにより、アプリケーション全体で 20〜30% のパフォーマンス改善が期待でき、たとえばコードレビューのようなフロントエンドを多用するアプリケーションでは、さらに大きな効果が見込まれます。

### 目標

このワーキンググループには以下の目標があります:

1. すべての GitLab プロジェクト（GitLab.com、カスタマーポータル、ステータスページ等を含むがこれに限らない）が最新の Vue.js バージョンを使用していることを確認する
1. Vue.js 3 へのアップグレード戦略を策定・周知する。
   1. アップグレードをブロックしている依存関係を特定し、これらの依存関係に関する意思決定が適時に行われることを確保する。
   1. アプリケーション単位でのアップグレードプロセスの可視性を確保する
   1. 新しいパターンを推進し、新しいフレームワークバージョンに適したガイドラインでハンドブックを更新する
1. 段階的なマイグレーションのロールアウト戦略と計画を策定する
   1. マイグレーションプロセス中に本番環境で両バージョンのフレームワークを使用できるツールと適切なインフラを構築する。
   1. イテレーションの価値を大切にし、コードベースを Vue.js 3 に段階的にマイグレーションできるよう、両バージョンの Vue.js でテストスイートを実行できることを確保する
   1. フレームワークバージョン間の違いを統一する互換性レイヤーを実装する
   1. 既存の Vue.js 2 コードを最新のフレームワークバージョンに対応させるための自動化ツール（適用可能な場合）を作成する
   1. Vue.js 3 に対応していないパターンとソリューションについて、他チームへの廃止予定の戦略を作成する
1. ワーキンググループの成果に関するコミュニケーション計画を策定・実施する。

#### 終了基準 {#exit-criteria}

このグループは解散したため、すべての終了基準は達成されていません。主な項目は関連するタスクグループに引き継がれました。残りの 2 項目は、ブロッキング要因が解消され次第引き継がれます。

| 基準 | 開始日 | 終了日 | 進捗 | DRI | 継続先 |
| -------- | ---------- | -------- | -------- | --- | --------- |
| [BootstrapVue を Vue Compat モード 2 で動作させる](https://gitlab.com/groups/gitlab-org/-/epics/12385) | 2021-06-21 | 2022-10-25 | 100% | `@xanf` | 完了 |
| [GitLab UI を Vue Compat モード 2 で動作させる](https://gitlab.com/groups/gitlab-org/-/epics/12386) | 2021-06-21 | - | 70% | `@markrian` | [GitLab UI タスクグループ](/handbook/company/working-groups/task-groups/gitlab-ui-vue-compat/) |
| [GitLab Main で vue-router を Vue Compat モードで動作させる](https://gitlab.com/groups/gitlab-org/-/epics/10046) | 2023-05-18 | - | 50% | TBD | ??? |
| [メインリポジトリで Vue.js 3 を使ったテストスイートを実行する](https://gitlab.com/groups/gitlab-org/-/epics/9862) | 2023-05-18 | - | 30% | `@xanf` | 会社の責任 |
| [CustomersDot を Vue Compat モード 2 で動作させる](https://gitlab.com/groups/gitlab-org/-/epics/12388) | 2024-02-01 | - | 0% | `@vitallium` | ??? |
| [Vue Compat をモード 2 からモード 3 に切り替える](https://gitlab.com/groups/gitlab-org/-/epics/12389) | - | - | 0% | TBD | TBD |
| [Vue 3 本体に切り替える](https://gitlab.com/groups/gitlab-org/-/epics/12390) | - | - | 0% | TBD | TBD |

### 役割と責任

| ワーキンググループでの役割 | 氏名                    | 役職                                                                 |
| -------------------- | ------------------- | -------------------------------------------------------------------- |
| エグゼクティブスポンサー   | Tim Zallmann        | Senior Director of Engineering                                       |
| ファシリテーター            | Sam Beckham         | Engineering Manager, Manage:Foundations                              |
| ファンクショナルリード      | Illya Klymov        | Senior Frontend Engineer, Security Risk Management:Compliance        |
| ファンクショナルリード      | Natalia Tepluhina   | Principal Engineer, Plan                                             |
| ファンクショナルリード      | Stanislav Lashmanov | Senior Frontend Engineer, Create: Code Review                        |
| ファンクショナルリード      | Andrew Fontaine     | Senior Frontend Engineer, Deploy:Environments                        |
| ファンクショナルリード      | Artur Fedorov       | Senior Frontend Engineer, Security Risk Management:Security Policies |
| メンバー                   | Mark Florian        | Staff Frontend Engineer, Foundations:Design System                   |
| メンバー                   | Andrei Zubov        | Frontend Engineer, Deploy:Environments                               |
| メンバー                   | Frédéric Caplette   | Senior Frontend Engineer, Verify:Pipeline Authoring                  |
| メンバー                   | Alexander Turinske  | Staff Frontend Engineer, Security Risk Management:Security Policies  |
| メンバー                   | Marina Mosti        | Senior Frontend Engineer, Switchboard                                |
| メンバー                   | Nathan Dubord       | Senior Frontend Engineer, about.gitlab.com                           |
| メンバー                   | Vanessa Otto        | Senior Frontend Engineer, AI-Powered:Workflow Catalog                |
| メンバー                   | Vitaly Slobodin     | Staff Frontend Engineer, Fulfillment                                 |
