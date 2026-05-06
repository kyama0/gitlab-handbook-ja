---
title: "GitLab Fundamentals - ハンズオンラボ: GitLab での作業の整理"
description: "このハンズオンガイドでは、GitLab で作業を整理・構造化する基本を説明します。"
upstream_path: /handbook/customer-success/professional-services-engineering/education-services/ilt-labs/gitlabfundamentalshandsonlab1/
upstream_sha: b4eeb07f0d5f46e2fc5f8572be1a2547261aed89
translated_at: "2026-04-26T04:51:58Z"
translator: claude
stale: false
---

> 完了目安時間: 30 分

## 目標

このラボでは、グループ、サブグループ、プロジェクトを使用して GitLab で作業を整理する方法を探求します。

## タスク A. グループ構造を確認する

まず、左サイドバーで **Groups** を選択します。

1. **Groups** セクションで、**Events** の左側のドロップダウン矢印を選択します。

1. **Events** の下に **Session XXXXXXXX** のような名前のグループが表示されます。

1. **Session** グループの隣のドロップダウン矢印をクリックします。**Group XXXXXXXX** という名前のグループが表示されます。このグループをクリックしてアクセスします。

このナビゲーションはグループとサブグループの例を示しています。ILT GitLab インスタンスでは、**Events** グループはトップレベルグループです。これはインスタンス内の他のグループの一部ではないことを意味します。**Events** グループにはサブグループのセットが含まれており、インスタンスで実行中のクラスを表しています。これらの各サブグループには **Session XXXXXXXX** のような名前が付けられています。これらのグループの内部には、クラスの各生徒のグループが 1 つずつあります。**Group XXXXXXX** サブグループはあなた自身のグループで、好きなように整理・変更できます。

## タスク B. グループ構造を作成する

まず、**Group XXXXXXX** サブグループにいることを確認します。このタスクでは、開発と QA という 2 つの部署を持つ会社で働いていると想像してください。これらの部署には以下のプロジェクトがあります。

- 開発: `Cool App` という名前のアプリケーションのモバイルおよびデスクトップバージョン。特に `Cool App` には、両バージョンにわたって多くのリポジトリに分散した多くのマイクロサービスが含まれています。
- QA: 2 つのテストフレームワーク（`Cool App` のモバイルバージョン用とデスクトップバージョン用）。どちらのフレームワークもモノリシックで、単一プロジェクトに保存されています。

ここで少し時間をとって、これら 2 つのチームの構造を検討してください。オプションを検討した後、考えられる解決策について以下の手順を参照してください。

1. 2 つのチームがいるので、各チームのグループを作成しましょう。**New subgroup** を選択します。

1. **Subgroup name** に `Development` と入力します。その他のオプションはデフォルトのままにして **Create subgroup** を選択します。

1. ページの上部にアプリケーション内の場所を示すパンくずリストが表示されます。**Group XXXXXXX** をクリックしてメイングループに戻ります。

1. ここから `Development` グループが表示されます。**New subgroup** を選択して QA のグループを作成します。

1. **Subgroup name** に `QA` と入力します。その他のオプションはデフォルトのままにして **Create subgroup** を選択します。

1. パンくずリストから **Group XXXXXXX** を再度選択してメイングループに戻ります。これで `Development` と `QA` の 2 つのグループが表示されます。

    次に、両チームのプロジェクトのサブグループを構成できます。開発アプリケーションには多くのプロジェクトがあるため、プロジェクトタイプごとにサブグループを作成するのが合理的です。

1. `Development` グループを選択します。

1. **New subgroup** を選択します。

1. **Subgroup name** に `Cool App Desktop` と入力します。**Create subgroup** を選択します。

1. パンくずリストで **Development** を選択して development グループに戻ります。

1. **New subgroup** を選択します。

1. **Subgroup name** に `Cool App Mobile` と入力します。**Create subgroup** を選択します。

1. パンくずリストで **Development** を選択して development グループに戻ります。

`Development` グループに `Cool App Desktop` と `Cool App Mobile` のサブグループが表示され、両アプリケーションに関連するプロジェクトを格納する準備ができています。

QA チームには単一のプロジェクトがあります。このチームを構成する主なオプションは 2 つあります。プロジェクトを格納する `Cool App Testing` グループを作成するか、サブグループ内にプロジェクトを作成するかです。

## タスク C. リポジトリを作成する

QA チームの新しいリポジトリを作成しましょう。**Group XXXXXXX** の `QA` グループを選択します。ここから:

1. **New project** を選択します。

1. **Create blank project** を選択します。

1. **Project name** に `Cool App QA` と入力します。

1. **Initialize repository with a README** がオンになっていることを確認します。これにより、プロジェクトの出発点として README ファイルが作成されます。

1. **Create project** を選択します。

プロジェクトを作成すると、プロジェクトのリポジトリに移動します。基本的な README テンプレートを含む `README.md` という単一のファイルが表示されます。このプロジェクトの作業を開始するために、Issue を作成しましょう。

## タスク D. プロジェクトで Issue を作成する

GitLab での Issue 作成の基本を学びましょう。

1. **Cool App QA** プロジェクトに移動します。

1. 左サイドバーで **Plan > Work items** を選択します。

1. **New item** を選択します。

1. **Type** フィールドが **Issue** に設定されていることを確認します。

1. タイトルに `First issue` と入力します。

1. 好みの説明を入力します。

1. **Create issue** を選択します。

1. Issue リストの Issue 名をクリックして新しい Issue を開きます。画面の右側のサイドパネルに表示されます。

このプロセスに従って、**Cool App QA** プロジェクトに関連する Issue を作成しました。Issue に関するいくつかの詳細について説明します。中央には Issue の説明、Issue のアクティビティ、コメントとディスカッションを追加するエリアが表示されます。すべての Issue は、Issue に関連する小さなタスクである子アイテムを持つことができます。Issue は他の Issue にリンクして Issue 間の関係を示すこともできます。

右サイドバーには Issue に関連するメタデータが表示されます。

- **Assignee** は現在 Issue に取り組んでいる人のセットです。Issue がエピック、マイルストーン、またはイテレーションに関連付けられている場合、これらの詳細がここに表示されます。

- **Labels** は Issue を同様のカテゴリやタイプに整理するために Issue に追加できます。

- **Weight** は Issue に関連する作業量を定義します。Issue の完了期日を設定できます。

- **Time tracking** は Issue の完了にかかった時間を追跡できます。Health status は Issue がどのように進行しているかのステータスを設定できます。

多くの場合、Issue は 1 回のイテレーションやスプリントで完了できる小さな作業の単位を表すために使用します。より大きな作業のセットには、後のラボで説明するエピックの概念を使用します。

## ラボガイド完了

このラボ演習を完了しました。このコースの他の[ラボガイド](/handbook/customer-success/professional-services-engineering/education-services/ilt-labs/gitlabfundamentalshandson)を確認できます。

## ご意見・ご提案

ラボへの変更を希望する場合は、マージリクエスト経由で変更を送信してください。
