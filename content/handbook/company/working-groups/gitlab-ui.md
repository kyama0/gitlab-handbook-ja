---
title: "gitlab-ui（CSS とリユーザブルコンポーネント）"
description: "gitlab-ui は CSS のクリーンアップ・再構成ロードマップと、デザインシステムに基づくリユーザブルコンポーネントの実装を推進します。"
upstream_path: "/handbook/company/working-groups/gitlab-ui/"
upstream_sha: "b4eeb07f0d5f46e2fc5f8572be1a2547261aed89"
translated_at: "2026-04-25T00:00:00Z"
translator: claude
stale: false
lastmod: "2025-02-10T07:09:07+00:00"
---

## 属性

| プロパティ     | 値 |
|--------------|-------|
| 作成日 | 2019年3月26日 |
| 終了日   | 2020年7月24日 |
| Slack        | [#wg_gitlab-ui](https://gitlab.slack.com/archives/CH9QG9TAQ/p1553587707000300)（社内からのみアクセス可能） |
| Google Doc   | [gitlab-ui ワーキンググループアジェンダ](https://docs.google.com/document/d/1CBg2XXH6l8h5sTKXSwQXEUD46HzEJVU8nsqYwZbW6O8/edit)（社内からのみアクセス可能） |
| Epic         | [gitlab-ui コードベース](https://gitlab.com/groups/gitlab-org/-/epics/950) |

## ビジネス目標

CSS のクリーンアップ・再構成とデザインシステムに基づくリユーザブルコンポーネントの実装という [gitlab-ui](https://gitlab.com/gitlab-org/gitlab-ui) のロードマップを推進します。gitlab-ui は今後、基本 CSS 実装とすべてのリユーザブルコンポーネントを 1 つのパッケージに集約し、汎用スタイリングに関するすべての取り組みを 1 つの UI プロジェクトに統合します。これにより、エンジニアリングの生産性向上と製品全体の一貫性が向上します。ワーキンググループの主な目標は、すべてを自ら実装することではなく、フロントエンドエンジニアリンググループ全体で取り組みを一定のペースで継続させ、重要なタスクを引き受けることです。

## 終了基準 {#exit-criteria}

メイン [Epic](https://gitlab.com/groups/gitlab-org/-/epics/950) のすべての To-Do リスト項目

特に以下の項目：

- デザインシステムに基づくユーティリティクラスライブラリを作成することで、汎用 CSS を GitLab UI とページ固有のものを CE/EE に分割する再構成をリード
- ユーティリティクラスライブラリが GitLab 内で利用可能かつ使用可能であることを確認し、クラスセット全体を競合なく GitLab にインポートできること、および使用方法に関するドキュメントが整備されていることを保証
- ワーキンググループのフロントエンドメンバーを GitLab UI のメンテナーとして確立
- 新しいコンポーネントをデザインシステムと製品にいつ、どのように導入すべきかについての明確なドキュメントを作成し、責任ある担当者を含める
- GitLab UI コンポーネントとユーティリティクラスの実装方法についての明確なドキュメントを整備

## 役割と責任

| ワーキンググループの役割    | 担当者                | 肩書き                          |
|-----------------------|-----------------------|--------------------------------|
| ファシリテーター           | Tim Zallmann          | Director of Engineering, Dev   |
| フロントエンドリード         | Enrique Alcántara     | Senior Frontend Engineer       |
| メンバー                | Sarah Groff Hennigh-Palermo | Senior Frontend Engineer |
| メンバー                | Denys Mishunov        | Senior Frontend Engineer       |
| UX リード               | Taurie Davis          | Staff Product Designer         |
| メンバー                | Jeremy Elder          | Senior Product Designer        |
| エグゼクティブステークホルダー | Christopher Lefelhocz | VP of Development |
| メンバー                | Paul Gascou-Vaillancourt | Frontend Engineer           |
| メンバー                | Justin Boyson         | Senior Frontend Engineer       |
