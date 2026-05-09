---
title: ハンズオンワークショップ
description: ハンズオンワークショップ
# REVIEW: Possible overlap with sa-practices/workshops.md. See restructuring issue #628 for details.
upstream_path: /handbook/solutions-architects/tools-and-resources/workshop/
upstream_sha: 5449127cc9a1f5b32ba83e3cf8ddab79eac1e3e8
translated_at: "2026-05-08T17:29:46Z"
translator: claude
stale: false
---

## ハンズオンワークショップ

ハンズオン GitLab ワークショップは、GitLab の見込み客や顧客が GitLab について学び、提供される GitLab 環境内でその知識をハンズオンで実践できるインタラクティブなイベントです。GitLab ソリューションアーキテクトは、DevOps オートメーション、ポートフォリオ＆プロジェクト管理、セキュリティ、Advanced CI/CD などのトピックでワークショップを実施することがよくあります。安定した作業環境を提供し、参加者からの Q&A にタイムリーに対応できるよう、ワークショップは理想的には 200 人以下に限定します。

ハンズオンワークショップを実施するには、参加者が演習を行うための GitLab インスタンスを立ち上げる必要があります。クラスのプロジェクトと Issue トラッキングのワークフローをセットアップするため、追加の準備が必要です。

## ワークショップインスタンスの作成

ワークショップのインスタンスを作成するには、GitLab の[Workshop Classes](https://gitlab.com/gitlab-com/customer-success/workshops/classes)グループに移動します。

1. 「New Project」ボタンをクリック
1. 「Create from template」を選択
1. 「Group」を選択し、必要なワークショップテンプレートを選択
1. 以下の命名規則に従ったプロジェクト名を入力:
[ワークショップの日付]-[ワークショップ名]-[クライアント名 (該当する場合)]
例: 「20210112-Advanced CI CD-GitLab」
1. 「Create project」ボタンをクリック

## ワークショップテンプレートの使い方

テンプレートは複数の主要パートで構成されています。

### プロジェクトリポジトリ

プロジェクトの Repo には、ワークショップの実施に必要なすべての資料が含まれています。

### Readme ファイル

プロジェクトリポジトリ内の Readme ファイルには、ワークショップの要件と実施情報が記載されています。

### トラッキング Issue

ワークショップの設定、トラッキング、実施を支援するために 7 つの Issue が作成されています

Task 1 がコア Issue です。これを使ってチームとの集約と調整を行うことをお勧めします。チームメンバーをこの Issue に誘導し、特定のワークショップインスタンスに関する情報を得てもらいます。タイムラインを設定し、対象の実施日に合わせてすべての Issue の日付を設定してください。

### トラッキングマイルストーン

マイルストーンはワークショップ設定の進捗を確認するために使われます。複数のワークショップ実行をまたいで全体を見るためのグループロールアップの一部としても利用できます。

### トラッキングボード

ワークショップを管理するための以下のボードが作成されています。必要に応じて新しいボードを自由に作成してください。

- Tracking — このボードでは、スコープ付きラベルのフロー (Waiting to Start、In Progress、Under Review) を使用します
- Assistance Needed — ワークショップの設定や実施に影響するブロッキング Issue を追跡するボード

### ラベル

プロジェクトレベルで以下のラベルが利用可能です。必要に応じて新しいラベルを追加してかまいませんが、これらのラベルは削除しないでください。

- Assistance Needed: Issue の解決のためにチームやマネジメントの支援が必要なときにフラグを立てるラベル
- Content Creation — コンテンツが作成または更新中であることを示すラベル
- Waiting to Start — 現時点で作業の進捗がないことを示すラベル
- In Progress
- Under Review
