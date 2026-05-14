---
title: "イベントストリーム ワーキンググループ"
description: "GitLab のためのシステム全体のイベントストリームを実装する計画を策定します。"
status: active
upstream_path: /handbook/company/working-groups/event-stream/
upstream_sha: b4eeb07f0d5f46e2fc5f8572be1a2547261aed89
translated_at: "2026-04-25T12:00:00Z"
translator: claude
stale: false
---

## 属性

| プロパティ        | 値           |
|-----------------|-----------------|
| 作成日          | 2021-09-20 |
| 目標終了日       | 2023-04-01 |
| Slack           | #wg_event-stream（社内からのみアクセス可） |
| Google Doc      | [イベントストリーム ワーキンググループ アジェンダ](https://docs.google.com/document/d/1unlrVd1M1N-d3GI2DP7R9gXJxBXHjY2rOKR5hsGHuKI/edit?usp=sharing)（社内からのみアクセス可） |
| Issue ラベル | ~WorkingGroup::EventStream |

## コンテキスト

現在、GitLab 製品内でイベントを発行・購読するための方法が 3 つ以上存在します。
イベントに関する単一の標準はなく、他の GitLab システムやサービスからイベントを発行・購読するための標準的な方法もありません。

GitLab.com とセルフマネージドインストールの両方において、イベントとその発行・消費方法を標準化する必要性が高まっています。

## ワーキンググループのゴール

このワーキンググループは以下のゴールを持ちます:

 1. 現在のイベントシステムをドキュメント化する
 1. イベントストリームに対する現在確認されているユースケースをドキュメント化する
 1. 標準化されたイベントストリームとイベントのためのアーキテクチャを定義・展開する
    1. GitLab 内およびセルフマネージドでのイベントストリーム利用に関するアーキテクチャブループリント
    1. 安全でセキュアなデフォルトを定義する。セキュリティの推奨事項とガイドラインを提供する。
 1. ロールアウト戦略と計画を定義する
    1. 現在のユースケースに対する SaaS ロールアウト戦略
    1. リファレンスアーキテクチャにイベントストリームを追加するための基盤を整備する
 1. ワーキンググループの成果を展開するためのコミュニケーション計画を策定する

### 終了基準の進捗

| 基準                                 | 開始日   | 完了日   | 進捗   | DRI   |
| ----------                               | ------------ | ---------------- | ---------- | ----- |
| 現在のイベントシステムのドキュメント化           |              |                  |            |       |
| ユースケースのドキュメント化                       |              |                  |            |       |
| アーキテクチャ戦略の策定と展開 |              |                  |            |       |
| ロールアウト戦略の策定                 |              |                  |            |       |
| コミュニケーション計画の策定と実施 |              |                  |            |       |

## 定義

### イベントストリームとは

イベントストリームとは、製品内で発生するイベントのストリームです。より具体的には、GitLab においては、製品のソフトウェア変更、イベントスキーマとプロトコル、およびインフラストラクチャが含まれます。

### 潜在的なツール/サービス

他の企業がこの目的で使用しているツール/サービスがいくつかあります。

1. [Kafka](https://kafka.apache.org)
1. [NSQD](https://nsq.io)
1. [RabbitMQ](https://www.rabbitmq.com/)
1. [GCP PubSub](https://cloud.google.com/pubsub)

### 関連する GitLab ドキュメントまたは Issue

- https://gitlab.com/gitlab-org/gitlab/-/merge_requests/34042
- https://gitlab.com/gitlab-org/gitlab/-/issues/338454
- [監査イベントのストリーミング](https://gitlab.com/groups/gitlab-org/-/epics/5925)

## 終了基準 {#exit-criteria}

イベントストリームの実装が決定された場合、終了基準は以下のとおりです:

1. SaaS とオンプレミスで使用するツール/サービスを定義する（それぞれ異なる場合がある）
1. システムアーキテクチャを定義する
1. 実装計画と哲学を定義する
1. イベント構造を定義する

## ロールと責任

| ワーキンググループのロール | 担当者             | 役職                                           |
|--------------------|--------------------|-------------------------------------------------|
| ファシリテーター        | Alex Groleau       | Security Automation Manager                     |
| ファンクショナルリード    | Juliet Wanjohi     | Security Engineer, Security Automation          |
| ファンクショナルリード    | Ethan Urie         | Senior Backend Engineer, Security Automation    |
| ファンクショナルリード    | Jayson Salazar     | Senior Security Engineer, Security Automation   |
| ファンクショナルリード    | Alexander Chueshev | Senior Backend Engineer, AI Framework           |
| メンバー             | David DeSanto      | Senior Director, Product Management - Dev & Sec |
| メンバー             | Taylor McCaslin    | Principal Product Manager, Secure               |
| メンバー             | Alexander Dietrich | Senior Security Engineer, Security Automation   |
| メンバー             | Wayne Haber        | Engineering director                            |
| メンバー             | Bartek Marnane     | VP, Incubation Engineering                      |
| メンバー             | Roger Ostrander    | Senior Security Engineer, Trust & Safety        |
| メンバー             | Shawn Sichak       | Senior Security Engineer, Trust & Safety        |
| メンバー             | Chad Woolley       | Senior Backend Engineer, Create::Editor         |
