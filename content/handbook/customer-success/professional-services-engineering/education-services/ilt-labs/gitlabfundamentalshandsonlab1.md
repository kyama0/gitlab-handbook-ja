---
title: "GitLab Fundamentals - ハンズオンラボ: GitLab で作業を整理する"
description: "このハンズオンガイドでは、GitLab で作業を整理・構造化する基本を説明します。"
upstream_path: /handbook/customer-success/professional-services-engineering/education-services/ilt-labs/gitlabfundamentalshandsonlab1/
upstream_sha: 4253b2ab72b0791916a54411ca71a25276e128bd
translated_at: "2026-07-02T06:06:16+09:00"
translator: codex
stale: false
lastmod: 2026-06-26T10:02:20-04:00
---

> 完了までの推定時間: 30 分

## 目的

このラボでは、グループ、サブグループ、プロジェクトを使って GitLab で作業を整理する方法を探ります。

## タスク A. グループ構造を表示する

まず、左サイドバーで **Groups** を選択します。

1. **Groups** セクションで、**Events** の左にあるドロップダウン矢印を選択します。

1. **Events** の下に、**Session XXXXXXXX** のような名前のグループが表示されているはずです。

1. **Session** グループの隣にあるドロップダウン矢印をクリックします。**Group XXXXXXXX** という名前のグループが表示されているはずです。このグループをクリックしてアクセスします。

このナビゲーションは、グループとサブグループの例を示しています。ILT GitLab インスタンスでは、**Events** グループはトップレベルグループです。これは、インスタンス内の他のグループの一部ではないことを意味します。**Events** グループには、インスタンスで実行中のクラスを表すサブグループのセットが含まれます。これらのサブグループには、それぞれ **Session XXXXXXXX** のような名前が付けられます。これらのグループの中には、クラスの各受講者に対して 1 つずつのサブグループのセットがあります。**Group XXXXXXX** サブグループはあなた自身のグループで、好きなように整理および変更できます。

## タスク B. グループ構造を作成する

まず、**Group XXXXXXX** サブグループ内にいることを確認します。このタスクでは、Development と QA の 2 部門がある会社で働いていると想像します。これらの部門には以下のプロジェクトがあります。

- Development: `Cool App` という名前のアプリケーションのモバイル版とデスクトップ版。`Cool App` には両バージョンで多くのリポジトリに分散した多くのマイクロサービスが含まれています。
- QA: 2 つのテストフレームワーク。1 つは `Cool App` のモバイル版用、もう 1 つはデスクトップ版用です。両方のフレームワークはモノリシックで、単一のプロジェクトに格納されています。

これら 2 つのチームの構造を考えるために少し時間を取ります。オプションを検討した後、可能な解決策については以下のステップをご覧ください。

1. チームが 2 つあるので、各チーム用にグループを作成しましょう。**Create subgroup** を選択します。

1. **Subgroup name** に `Development` と入力します。他のすべてのオプションをデフォルトのままにして **Create subgroup** を選択します。

1. ページの上部に、アプリケーション内の場所を示すパンくずリストのセットが表示されます。**Group XXXXXXX** をクリックしてメイングループに戻ります。

1. ここから `Development` グループが表示されます。QA 用のグループを作成するために **Create subgroup** を選択します。

1. **Subgroup name** に `QA` と入力します。他のすべてのオプションをデフォルトのままにして **Create subgroup** を選択します。

1. パンくずリストから再度 **Group XXXXXXX** を選択してメイングループに戻ります。`Development` と `QA` の 2 つのグループが表示されます。

    次に、両チームのプロジェクト用にサブグループを構造化できます。Development のアプリケーションには多くのプロジェクトがあるので、プロジェクトタイプごとにサブグループを作成するのが理にかなっています。

1. `Development` グループを選択します。

1. **Create subgroup** を選択します。

1. **Subgroup name** に `Cool App Desktop` という名前を入力します。**Create subgroup** を選択します。

1. パンくずリストで **Development** を選択して Development グループに戻ります。

1. **Create subgroup** を選択します。

1. **Subgroup name** に `Cool App Mobile` という名前を入力します。**Create subgroup** を選択します。

1. パンくずリストで **Development** を選択して Development グループに戻ります。

これで `Development` グループには、両アプリケーションに関連するプロジェクトを格納できる `Cool App Desktop` と `Cool App Mobile` のサブグループが表示されます。

QA チームには単一のプロジェクトがあります。このチームを構造化するには 2 つの主なオプションがあります。プロジェクトを格納する `Cool App Testing` 用のグループを作成するか、サブグループに直接プロジェクトを作成することができます。

## タスク C. リポジトリを作成する

QA チーム用に新しいリポジトリを作成しましょう。**Group XXXXXXX** で `QA` グループを選択します。ここから:

1. **Create project** を選択します。

1. **Create blank project** を選択します。

1. **Project name** に `Cool App QA` と入力します。

1. **Initialize repository with a README** がオンになっていることを確認します。これにより、プロジェクトに README ファイルが出発点として作成されます。

1. **Create project** を選択します。

プロジェクトを作成した後、プロジェクトのリポジトリに移動します。`README.md` というタイトルの単一のファイルが表示され、これには基本的な README テンプレートが含まれています。このプロジェクトでの作業を始めるために、Issue を作成しましょう。

## タスク D. プロジェクト内に Issue を作成する

GitLab で Issue を作成する基本を学びましょう。

1. **Cool App QA** プロジェクトに移動します。

1. 左サイドバーで **Plan > Work items** を選択します。

1. **New item** を選択します。

1. **Type** フィールドが **Issue** に設定されていることを確認します

1. タイトルに `First issue` と入力します。

1. 好きな説明を入力します。

1. **Create issue** を選択します。

1. Issue リスト内の Issue の名前をクリックして、新しい Issue を開きます。これによって、画面の右側のサイドペインで開きます。

このプロセスに従って、**Cool App QA** プロジェクトに関連する Issue を作成しました。Issue に関連するいくつかの詳細について議論しましょう。中央には、Issue の説明と、Issue のアクティビティおよびコメントとディスカッションを追加する領域が表示されます。すべての Issue には、Issue に関連する小さなタスクである子アイテムを持つことができます。Issue は、Issue 間の関係を示すために他の Issue にリンクすることもできます。

右サイドバーには、Issue に関連するメタデータが表示されます。

- **Assignee** は現在 Issue に取り組んでいる人々のセットです。

- **Labels** を Issue に追加して、Issue を類似のカテゴリやタイプに整理するのに役立てることができます。

- **Parent** は、この Issue が属しているエピックを指します。現時点では、親として設定するエピックはありません。

- **Weight** は Issue に関連付けられた作業量を定義します。Issue にいつまでに完了すべきかの期日を設定できます。

- **Milestone** では、Issue を完了までのタイムラインに関連付けることができます。マイルストーンは、四半期などの長期的なタイムラインを対象としています。

- **Iteration** では、Issue を完了までのタイムラインに関連付けることができます。イテレーションは、スプリントなどの短期的なタイムラインを対象としています。

- **Dates** では、Issue の開始日と終了日を設定できます。

- **Health Status** は、Issue にステータスを適用し、現在の状態（On Track、Needs Attention、At Risk）をすばやく簡単に確認できるように追跡します。

- **Time tracking** は Issue を完了するのにかかった時間を追跡できます。

- **Contacts** は、請求およびレポート目的で Issue を顧客に関連付けます。

しばしば、私たちは Issue を、単一のイテレーションやスプリントで完了する可能性のある小さな単位の作業を表すために使用します。より大きな作業セットには、エピックの概念を使用しますが、これは後のラボで議論します。

## ラボガイド完了

このラボの演習を完了しました。[このコースの他のラボガイド](/handbook/customer-success/professional-services-engineering/education-services/ilt-labs/gitlabfundamentalshandson)を見ることができます。

## 提案?

ラボへの変更を加えたい場合は、マージリクエスト経由で変更を提出してください。
