---
title: "GitLab Duo Principles - ハンズオンラボ: GitLab Duo をはじめる"
description: "このハンズオンガイドでは、GitLab Duo を使って技術的な質問に回答する手順を説明します。"
upstream_path: /handbook/customer-success/professional-services-engineering/education-services/ilt-labs/devsecopswithduolab1/
upstream_sha: 0505a0f5a670366af5dd620eb2b9f12ebd7a79fe
lastmod: 2026-06-09T10:04:35-04:00
translated_at: "2026-06-12T21:16:06Z"
translator: claude
stale: false
---

> 所要時間の目安: 10 分

## 目標

GitLab Duo を使うと、GitLab 全体で AI 支援機能を利用できます。GitLab Duo をはじめるには、まず作業用のラボ環境を生成する必要があります。このラボ環境では、このコースで紹介する GitLab Duo のすべての機能を利用できます。

## タスク A. GitLab Duo Chat を使う

1. GitLab グループに移動します。

1. **Create project** を選択します。

1. **Create blank project** を選択します。

1. プロジェクト名に `Duo Demo` と入力します。

1. その他のオプションはすべてデフォルトのままにして、**Create project** を選択します。

1. プロジェクトから、右上隅の **New Chat** ボタンをクリックします。

1. エージェントとして **GitLab Duo** を選択します。

1. 画面の右側に新しいチャットウィンドウが表示されます。チャットボックスの右下隅にある *Agentic* スイッチをクリックして、GitLab Duo の Agentic モードを無効にします。いくつか質問してみて、GitLab Duo がどのように応答するか確認してみましょう！

Duo に尋ねられるデモ用の質問をいくつか紹介します:

- `How do I move an issue from one project to another?`
- `What is a merged results pipeline?`
- `What is an example of a simple Python function?`

## タスク B. GitLab Duo Agentic Chat を使う

GitLab Duo Agentic chat は、Issue の移動やプロジェクト間でのマージリクエストの移動など、さまざまなタスクをあなたの代わりに実行できます。試してみましょう！

1. Duo Chat が現在開いていない場合は、右上隅の **GitLab Duo Chat** ボタンをクリックします。

1. 右下の **Agentic Chat** オプションをオンに切り替えて、Agentic chat を使用している状態にします。

1. Issue を作成してみましょう。次のような内容を入力します: `Create an issue in this project that describes in detail how a team can implement a new security feature to improve their systems.`

1. GitLab Agentic chat がワークフロー項目の承認を求めてきます。**Approve** をクリックしてアクションを続行します。

1. アクションが完了すると、プロジェクトに Issue が作成されているのが分かります。Issues ページを更新して、新しい Issue を確認しましょう。

1. Duo Chat ペインで、**Agentic Chat** オプションを再びオフに切り替えます。GitLab Duo の agentic な側面については、コースの後半で改めて取り上げます。

## ラボガイド完了

このラボ演習は完了です。[このコースの他のラボガイド](/handbook/customer-success/professional-services-engineering/education-services/ilt-labs/devsecopswithduo)を確認できます。

## ご提案はありますか？

ラボに変更を加えたい場合は、マージリクエストで変更を提出してください。
