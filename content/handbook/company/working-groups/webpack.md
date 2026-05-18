---
title: "webpack"
description: "GitLab Webpack はフロントエンドビルドツールを修正・改善することでエンジニアの生産性を向上させ、パフォーマンスと保守性のベストプラクティスを実施するためのガイドラインと自動化プロセスを整備します"
upstream_path: /handbook/company/working-groups/webpack/
upstream_sha: b4eeb07f0d5f46e2fc5f8572be1a2547261aed89
translated_at: "2026-04-25T23:40:34Z"
translator: claude
stale: false
lastmod: "2025-01-04T01:51:25+00:00"
---

## 属性

| プロパティ   | 値                                                                                                                                                                            |
|-------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| 作成日      | 2019 年 6 月 24 日                                                                                                                                                                 |
| 終了日      | 2020 年 2 月 20 日                                                                                                                                                                 |
| Slack       | [#wg_webpack](https://gitlab.slack.com/archives/CKX0P3MHU/p1561408727000200)（社内のみアクセス可能）                                                                         |
| Google Doc  | [Webpack ワーキンググループ議事録](https://docs.google.com/document/d/1moJhc9pdJMibRNQERlI7tMN51u_fu1_BicCYPURuy6g/edit#)（社内のみアクセス可能）                              |
| Epic        | [Webpack ワーキンググループ](https://gitlab.com/groups/gitlab-org/-/epics/1541)                                                                                              |

## 背景

GitLab は 3 年間 [webpack](https://webpack.js.org) を使ってフロントエンドのアセットをバンドルしており、それにより素晴らしいことを実現できましたが、同時にその強み（例: [コード分割](https://webpack.js.org/guides/code-splitting/)や[パフォーマンス改善](https://twitter.com/TheLarkInn/status/1012429019063578624)）を十分に活用できていません。スケールに伴う問題（[高いリソース消費](https://gitlab.com/gitlab-org/gitlab-ce/issues/32893)、[クラッシュ](https://gitlab.com/gitlab-org/gitlab-development-kit/issues/458)、[デバッグツールの不具合](https://gitlab.com/gitlab-org/gitlab-ce/issues/46524)等）に適切に対処してこなかったため、開発者の生産性を妨げる原因にもなっています。このワーキンググループは、フロントエンドビルドツールの最も深刻な問題を修正するとともに、webpack の活用されていない機能を使ったパフォーマンスと保守性のベストプラクティスを推進するようフロントエンド開発ガイドラインを再整備することを目指します。

## ビジネス目標

フロントエンドビルドツールを修正・改善することでエンジニアの生産性を向上させ、パフォーマンスと保守性についてベストプラクティスが守られるようなガイドラインと自動化プロセスを整備します。

## 終了基準 {#exit-criteria}

- GitLab の開発環境を改善する。
  - webpack/sprockets のビルドプロセスを改善して GDK の Node プロセス全体のメモリ使用量を 30% 削減し、時間とともに無制限に増大しないよう消費量を追跡する仕組みを整備する。=> これまでに 22% 削減
- GitLab の全体的なフロントエンドパフォーマンスを改善する。
  - モダンブラウザとレガシーブラウザ（それぞれ [`<script type="module">` に対応しているものとしていないもの](https://jakearchibald.com/2017/es-modules-in-browsers/#nomodule-for-backwards-compatibility)として定義）向けのターゲットビルドを実装し、各ターゲットに必要なコード変換とポリフィルのみを適用する。
  - コード分割のポリシーを文書化し、フロントエンドエンジニア向けのトレーニングワークショップをまとめて YouTube にアップロードする。
  - webpack の出力統計を活用してパフォーマンス改善を推進する
    - 追跡・監視すべき webpack 出力統計を決定する（エントリポイントのバンドルサイズ、エントリポイントの数、初期ページロードのコードカバレッジ、バンドル間の重複モジュール）
    - webpack 出力統計を追跡する仕組みを実装する（[gitlab-ce!31537](https://gitlab.com/gitlab-org/gitlab-ce/merge_requests/31537)）
    - これらの指標の上限値と削減目標値を定める。
    - これらが増加した際に開発者に警告し、ベストプラクティスを強制する CI ジョブを整備する。

## 結論

この取り組みは現在 [Manage:Foundations グループ](https://about.gitlab.com/direction/foundations/personal_productivity/) が担当しています。

## 役割と責任

| ワーキンググループでの役割 | 氏名                    | 役職                            |
|---------------------------|------------------------|---------------------------------|
| フロントエンドリード        | Mike Greiling          | Senior Frontend Engineer        |
| ファシリテーター            | Lukas 'Eipi' Eipert    | Senior Frontend Engineer        |
| メンバー                   | Jake Burden             | Frontend Engineer               |
| メンバー                   | Tristan Read            | Senior Frontend Engineer        |
| メンバー                   | David 'DJ' Mountney    | Senior Distribution Engineer    |
| エグゼクティブステークホルダー | Christopher Lefelhocz | VP of Development               |
