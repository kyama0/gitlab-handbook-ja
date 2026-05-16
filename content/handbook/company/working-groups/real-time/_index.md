---
title: "リアルタイム ワーキンググループ"
description: "GitLab リアルタイム ワーキンググループは、セルフマネージドのお客様にリアルタイム機能を1つ提供することを目的としています。詳細はこちら！"
no_list: true
upstream_path: "/handbook/company/working-groups/real-time/"
upstream_sha: "b4eeb07f0d5f46e2fc5f8572be1a2547261aed89"
translated_at: "2026-04-25T23:18:21Z"
translator: "claude"
stale: false
lastmod: "2024-08-16T09:29:41+00:00"
---

## 属性

| プロパティ       | 値              |
|-----------------|-----------------|
| 作成日          | 2020年3月12日 |
| クローズ日       | 2021年11月1日 |
| Slack           | [#wg_real-time](https://app.slack.com/client/T02592416/CUX9Z2N66)（社内からのみアクセス可能） |
| Google Doc      | [リアルタイム ワーキンググループ アジェンダ](https://docs.google.com/document/d/1eqwiGKifpnE4XTog0dB4Lgb-Bx0cc8g8OejmWDoZabs/edit#)（社内からのみアクセス可能） |
| Epic & 設計書    | [リアルタイム機能に ActionCable を使用](https://gitlab.com/groups/gitlab-org/-/epics/3056) |
| 機能 Issue       | [Issue / マージリクエストのサイドバーでアサイニーのリアルタイム更新を表示](https://gitlab.com/gitlab-org/gitlab/-/issues/17589) |
| 関連 OKR        | [Plan: 段階的な ACV の支援](https://gitlab.com/gitlab-com/www-gitlab-com/issues/6594) |

## ビジネス目標

セルフマネージドのお客様にリアルタイム機能を1つ提供します。

## 完了基準 - フェーズ1

（✅ 完了、✏️ 進行中）

### リアルタイム機能1つ、シングルインスタンス / 小規模クラスターのセルフホスティングのお客様が利用可能 `=> 100%`

[Issue](https://gitlab.com/gitlab-org/gitlab/issues/17589)

- [Action Cable の組み込みモードでの起動をサポート](https://gitlab.com/gitlab-org/gitlab/-/issues/214061) ✅
- [Omnibus が config/cable.yml で組み込み Action Cable を起動する機能を追加](https://gitlab.com/gitlab-org/omnibus-gitlab/-/merge_requests/4066) ✅
- [GDK が Action Cable の設定をサポート](https://gitlab.com/gitlab-org/gitlab-development-kit/-/merge_requests/1318) ✅
- Workhorse が Action Cable リクエストをプロキシ ✅
- アサイニーが Issue で更新された際に WebSocket 接続をアップグレードしシグナルをプッシュするバックエンドの作業が完了 ✅
- WebSocket に応答してサイドバーを更新するフロントエンドの作業が完了 ✅
- [Action Cable の設定を Prometheus にエクスポート](https://gitlab.com/gitlab-org/gitlab/-/issues/217314) ✅
- [ActionCable の設定を Usage Ping で追跡](https://gitlab.com/gitlab-org/gitlab/-/issues/232807) ✅
- [小規模デプロイメントでの機能利用方法をお客様に案内するドキュメントを整備](https://gitlab.com/gitlab-org/gitlab/-/merge_requests/40500) ✅
- [Action Cable が有効な場合に条件付きで機能を利用可能](https://gitlab.com/gitlab-org/gitlab/-/merge_requests/38204) ✅

## 完了基準 - フェーズ2

（✅ 完了、✏️ 進行中）

### リアルタイム機能1つ、大規模デプロイメントで利用可能 `=> 100%`

[Issue](https://gitlab.com/gitlab-org/gitlab/issues/17589)

- Omnibus が config/cable.yml でスタンドアロンの Action Cable Puma Server を起動する機能を追加 ✅
- GDK がスタンドアロンの Action Cable 設定を許可し Puma サーバーを起動 ✅
- Workhorse が Action Cable リクエストをプロキシ ✅
- [大規模な WebSocket 接続をサポートするリファレンスアーキテクチャの確立](https://gitlab.com/gitlab-org/quality/performance/-/issues/256#note_348137517) ✅
- [Helm チャートが `webservice` サービスでの組み込み Action Cable 設定を許可](https://gitlab.com/gitlab-org/charts/gitlab/-/issues/2286) ✅
- [初期機能テストのための QA 作業完了](https://gitlab.com/gitlab-org/quality/testcases/-/issues/1048) ✅
- [フィーチャーフラグをデフォルトでオンに設定し、適切なフォールバックを実装](https://gitlab.com/gitlab-org/gitlab/-/merge_requests/71953) ✅

### .com で動作するリアルタイム機能が利用可能 `=> 100%`

[Epic](https://gitlab.com/groups/gitlab-com/gl-infra/-/epics/228)

- [Action Cable および Puma を含むリアルタイム機能のコンテナ化](https://gitlab.com/gitlab-org/gitlab/-/issues/213861) ✅
- [複数の Redis インスタンスの使用を可能にする Helm チャートの更新](https://gitlab.com/gitlab-org/charts/gitlab/-/merge_requests/1287) ✅
- [Kubernetes での WebSocket リクエストのサポート](https://gitlab.com/gitlab-com/gl-infra/production/-/issues/2702) ✅
- [手動でのフルスタックテストのための非本番環境へのデプロイ](https://gitlab.com/gitlab-com/gl-infra/delivery/-/issues/878) ✅
- [ステージング環境の Kubernetes Pod が Action Cable リクエストを処理](https://gitlab.com/groups/gitlab-com/gl-infra/-/epics/228#note_413686741) ✅
- [Canary 環境の Kubernetes Pod が Action Cable リクエストを処理](https://gitlab.com/groups/gitlab-com/gl-infra/-/epics/228#note_413686741) ✅
- [可観測性の確保とリスク抑制のためのレディネスレビュー完了](https://gitlab.com/groups/gitlab-com/gl-infra/-/epics/355#note_455583247) ✅
- [本番環境の Kubernetes Pod が Action Cable リクエストを処理](https://gitlab.com/groups/gitlab-com/gl-infra/-/epics/228#note_413686741) ✅
- [組み込み Action Cable をデフォルトで有効化](https://gitlab.com/gitlab-com/gl-infra/delivery/-/issues/1210) ✅

## 設計書

技術的な決定とその根拠は[この設計書](design_document)に記録されています。

## 役割と責任

| ワーキンググループの役割 | 担当者                | 職位                            |
|-----------------------|-----------------------|--------------------------------|
| エグゼクティブスポンサー | Christopher Lefelhocz | VP of Development |
| ファシリテーター        | John Hope             | Engineering Manager, Plan      |
| 機能リード             | Heinrich Lee Yu       | Senior Backend Engineer, Plan  |
| 機能リード             | Gabe Weaver           | Senior Product Manager, Plan   |
| 機能リード             | Sean McGivern         | Staff Backend Engineer, Scalability |
| メンバー               | Scott Stern           | Frontend Engineer, Plan        |
| メンバー               | Ben Kochie            | Site Reliability Engineer      |
| メンバー               | Natalia Tepluhina     | Staff Frontend Engineer, Plan |
| メンバー               | Matthias Käppler      | Senior Engineer, Memory        |
| メンバー               | Jake Lear             | Engineering manager, Plan      |

## ミーティング

ミーティングは録画され、YouTube の [リアルタイム ワーキンググループ プレイリスト](https://www.youtube.com/playlist?list=PL05JrBw4t0KoMOc_LID1fKWWR4H_2n2hQ) で公開されています。

<iframe width="560" height="315" src="https://www.youtube.com/embed/videoseries?list=PL05JrBw4t0KoMOc_LID1fKWWR4H_2n2hQ" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
