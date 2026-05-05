---
title: "GitLab 基礎 - ハンズオンラボ: アナリティクスの活用"
description: "このハンズオンガイドでは、GitLabでアナリティクスを活用するプロセスを学習します。"
upstream_path: /handbook/customer-success/professional-services-engineering/education-services/ilt-labs/gitlabfundamentalshandsonlab7/
upstream_sha: b4eeb07f0d5f46e2fc5f8572be1a2547261aed89
translated_at: "2026-04-26T00:00:00Z"
translator: claude
stale: false
---

> 完了までの推定時間: 20分

## 目標

このラボの目標は、GitLabで利用可能な様々なアナリティクスの概要を把握し、独自のバリューストリームアナリティクスボードを作成する方法を学ぶことです。

## タスク A. アナリティクスの確認

1. まず、`Cool App QA` プロジェクトに移動します。

1. 左サイドバーで **Analyze > Analytics Dashboard** を選択します。

1. **Value Streams Dashboard** を選択します。

    このレポートでは、現在のプロジェクトに関するさまざまなアナリティクスの詳細が表示されます。前のラボの後にここに表示される可能性のある詳細には、マージリクエストのスループットやマージまでの中央値時間などが含まれます。

1. 左サイドバーで **Analyze > CI/CD Analytics** を選択します。

    このレポートでは、CI/CDパイプラインの詳細が表示されます。プロジェクトで実行されたパイプラインの数、パイプラインの実行時間、パイプラインの失敗率を確認できます。

1. 他のアナリティクスボードを自由に探索して、分析できるさまざまなシステムを確認してください。終了したら、次のタスクに進みます。

## タスク B. バリューストリームアナリティクスダッシュボードの作成

このレポートでは、現在のプロジェクトに関するさまざまなアナリティクスの詳細が表示されます。このダッシュボードは高度にカスタマイズ可能です。

1. **Analyze > Value Stream Analytics** を選択します。

1. **New Value Stream** を選択します。

1. **Value Stream name** に `Issue Tracker Stream` と入力します。

1. デフォルトテンプレートから作成するオプションとテンプレートなしで作成するオプションの2つがあります。**Create from no template** を選択します。

1. ステージ1では、ステージ名に `Unassigned Issues` を入力し、開始イベントとして **Issue created** を選択します。これにより、このステージでIssueが最初に追跡されるタイミングがマークされます。

1. 終了イベントとして `Issue first assigned` を選択します。これにより、プロジェクトの作業を追跡するための最初のステージが作成されます。

1. **Add a stage** を選択します。2番目のステージでは、ステージ名に `Backlog` を入力し、開始イベントとして **Issue first assigned** を選択します。

1. 終了イベントとして **Issue First Associated with a Milestone** を選択します。これにより、プロジェクトの作業を追跡するための2番目のステージが作成されます。

1. **Add a stage** を選択します。3番目のステージでは、ステージ名に `In Progress` を入力し、開始イベントとして **Issue First Associated with a Milestone** を選択します。

1. 終了イベントとして **Issue closed** を選択します。これにより、プロジェクトの作業を追跡するための最終ステージが作成されます。

1. **New Value Stream** を選択します。バリューストリームアナリティクスが動作しているページに移動します。ストリームにデータが表示されない場合は、右上のセクションにある `Last updated X minutes ago` のメモを確認してください。既存のバリューストリームはおよそ10分ごとに更新されることに注意してください。これは新しいバリューストリームなので、最初の更新まで少し時間がかかる場合があります。

## ラボガイド完了

このラボの演習を完了しました。[このコースの他のラボガイド](/handbook/customer-success/professional-services-engineering/education-services/ilt-labs/gitlabfundamentalshandson)を確認できます。

## ご提案はありますか?

ラボへの変更を希望する場合は、マージリクエストで変更を送信してください。
