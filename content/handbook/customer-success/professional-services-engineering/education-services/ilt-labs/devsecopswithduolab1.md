---
title: "GitLab Duo の原則 - ハンズオンラボ: GitLab Duo を使い始める"
description: "このハンズオンガイドでは、GitLab Duo を使って技術的な質問に回答する方法を順を追って説明します。"
upstream_path: /handbook/customer-success/professional-services-engineering/education-services/ilt-labs/devsecopswithduolab1/
upstream_sha: 5b642767a4478d09eeedd1689a94c1b164788f25
lastmod: 2026-06-09T10:04:35-04:00
translated_at: "2026-06-12T14:06:50Z"
translator: claude
stale: false
model: claude-opus-4-7
---

> 完了までの推定時間: 10分

## 目的 {#objectives}

GitLab Duo を使うと、GitLab 全体で AI 支援機能を利用できます。GitLab Duo を使い始めるには、まず作業するためのラボ環境を生成する必要があります。このラボ環境では、このコースでデモンストレーションする GitLab Duo のすべての機能を利用できます。

## タスク A. GitLab Duo Chat を使う {#task-a-working-with-gitlab-duo-chat}

1. GitLab グループに移動します。

1. **Create project** を選択します。

1. **Create blank project** を選択します。

1. プロジェクト名に `Duo Demo` と入力します。

1. その他のオプションはすべてデフォルトのままにして、**Create project** を選択します。

1. プロジェクトから、右上隅の **New Chat** ボタンをクリックします。

1. エージェントとして **GitLab Duo** を選択します。

1. 画面の右側に新しいチャットウィンドウが表示されます。チャットボックスの右下隅で、*Agentic* スイッチをクリックして GitLab Duo の Agentic モードを無効にします。いくつか質問してみて、GitLab Duo がどのように応答するか確認しましょう。

Duo に尋ねられるデモ用の質問をいくつか紹介します:

- `How do I move an issue from one project to another?`
- `What is a merged results pipeline?`
- `What is an example of a simple Python function?`

## タスク B. GitLab Duo Agentic Chat を使う {#task-b-using-gitlab-duo-agentic-chat}

GitLab Duo Agentic chat は、Issue の移動やプロジェクト間でのマージリクエストの移動など、あなたの代わりにタスクを実行できます。試してみましょう。

1. Duo Chat が現在開いていない場合は、右上隅の **GitLab Duo Chat** ボタンをクリックします。

1. Agentic chat を使用するために、右下の **Agentic Chat** オプションをオンに切り替えます。

1. Issue を作成してみましょう。たとえば次のように入力します: `Create an issue in this project that describes in detail how a team can implement a new security feature to improve their systems.`

1. GitLab Agentic chat がワークフロー項目の承認を求めてきます。**Approve** をクリックしてアクションを続行します。

1. アクションが完了すると、プロジェクトに Issue が作成されているのが確認できます。Issues ページを更新して、新しい Issue を確認してください。

1. Duo Chat ペインで、**Agentic Chat** オプションを再びオフに切り替えます。GitLab Duo の Agentic 機能については、コースの後半で改めて取り上げます。

## ラボガイド完了 {#lab-guide-complete}

このラボ演習を完了しました。[このコースのその他のラボガイド](/handbook/customer-success/professional-services-engineering/education-services/ilt-labs/devsecopswithduo)を参照できます。

## 提案はありますか？ {#suggestions}

このラボに変更を加えたい場合は、マージリクエストで変更を送信してください。
