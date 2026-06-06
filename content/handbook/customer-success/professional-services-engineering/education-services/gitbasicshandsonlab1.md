---
title: "GitLab with Git Fundamentals - ハンズオンラボ: プロジェクトと Issue を作成する"
description: "このハンズオンガイドでは、プロジェクト・Issue・ラベルの作成、およびクイックアクションの使い方を説明します。"
upstream_path: /handbook/customer-success/professional-services-engineering/education-services/gitbasicshandsonlab1/
upstream_sha: 7b4218e2684ab0e2d919cef32fcfba84065bf46b
lastmod: 2026-06-05T16:14:13+01:00
translated_at: "2026-06-06T12:00:00Z"
translator: claude
stale: false
---

> 完了までの推定時間: 30 分

## 目標

GitLab のプロジェクトは、コードや、設定ファイルなどの補助的なファイルを保存できるリポジトリです。プロジェクトを使って、Issue の追跡、作業の計画、コードの共同作業を行い、組み込みの CI/CD を使って継続的にアプリのビルド、テスト、デプロイを行うこともできます。GitLab のプロジェクトの詳細は[ドキュメント](https://docs.gitlab.com/ee/user/project/organize_work_with_projects.html)で確認できます。

GitLab は、プロジェクトを追跡・管理するためのさまざまなツールを提供します。このラボでは、プロジェクトの作成、Issue の作成、プロジェクトレベルでのラベルの作成、そして Issue へのクイックアクションの適用方法を学びます。

## タスク A. Training Group にアクセスする

1. ウェブブラウザで [**https://gitlabdemo.com/invite**](https://gitlabdemo.com/invite) に移動します。

1. **Invitation Code** フィールドに、講師から提供されたか、LevelUp LMS にある招待コードを入力します。

1. **Provision Training Environment** を選択します。

1. **GitLab.com** のユーザー名が必要になります。ユーザー名を見つけるには、[Gitlab](https://gitlab.com) に移動します。

1. 左サイドバーで、自分のプロフィール画像を選択します。

1. 表示されたドロップダウンに、`@` で始まる値が見えます。これがあなたの GitLab のユーザー名です。

1. 招待コードを入力すると、ポータルが **GitLab.com** のユーザー名の入力を求めます。提供されたフィールドに、（先頭の `@` 記号を除いた）あなたの GitLab.com のユーザーを入力します。

1. **Provision Training Environment** を選択します。

1. ページの下部で **My Group** を選択します。

1. あなたの GitLab.com の認証情報でサインインします。

1. トレーニングのラボの手順を実行するためのサンドボックスを提供する **My Test Group** グループにリダイレクトされます。

   > このグループには、すべての機能を見られるように GitLab Ultimate ライセンスがありますが、あなた個人のユーザー名のネームスペースでは、すべての機能にアクセスするには有料サブスクリプションまたは無料トライアルが必要です。
   >
   > グループにアクセスする際に 404 エラーが表示された場合は、ラボのプロビジョニング中に入力したユーザー名が原因である可能性が高いです。GitLab のユーザー名が正しく入力されているか、再度確認してください。

1. あなたの **My Test Group** トレーニングサブグループから、**New project** ボタンをクリックします。

## タスク B. プロジェクトを作成する

1. **Create blank project** タイルを選択します。

1. **Project name** フィールドに `Top Level Project` と入力します。

   > プロジェクトのスラッグは自動的に入力されます。自分のプロジェクト用に、必要であればこれをより短い文字列に変更できます。このラボではデフォルトのままにします。

1. **Project URL** フィールドで、URL の後半部分のドロップダウンをクリックして、それが**ユーザー名**ではなく**グループ名**を指していることを確認します。このプロジェクトは、ユーザーのネームスペース内に直接ではなく、グループ内に作成すべきです。

1. **Visibility Level** の下で、**Private** が選択されていることを確認します。

   > あなたのグループの上位にある親グループが private であるため、その下のすべての子グループとプロジェクトは private になります。プロジェクトの可視性レベルの詳細は[ドキュメント](https://docs.gitlab.com/ee/user/public_access.html)で学べます。

1. **Initialize repository with a README** をオンにします。

1. **Create project** を選択します。

## タスク C. Issue を作成する

> Issue は、共同作業、ディスカッション、計画、作業の追跡を可能にする GitLab の中核的な構成要素です。Issue は **Project** に属し、Group には**属しません**。グループレベルで Issue を表示すると、そのグループ内のすべてのプロジェクトにまたがって作成されたすべての Issue を見られます。詳しくは[こちら](https://docs.gitlab.com/ee/user/project/issues/)で読めます。

1. 左側のナビゲーションペインで、**Plan > Issues** に移動します。

1. **New issue** ボタンをクリックします。

1. **Title** フィールドに `My first issue` と入力します。

1. **Type** ドロップダウンで、`Issue` が選択されていることを確認します。

1. 説明は任意のセクションですが、この Issue に自分の説明を自由に入力してかまいません。

   > 説明セクションには、テンプレートを選択するためのドロップダウンがあります。Issue の説明を標準化するのに役立つテンプレートを作成できます。Issue テンプレートの詳細は[こちら](https://docs.gitlab.com/ee/user/project/description_templates.html)をクリックして学べます。

1. **Assignees** ドロップダウンを使って、ドロップダウンをクリックしてから自分のユーザー名をクリックすることで、Issue を自分自身に割り当てます。

   > あるいは、Assignees ドロップダウンのすぐ隣にある **Assign to me** をクリックして、Issue を自分自身に割り当てることもできます。

1. 今のところオプションはそのままにしますが、それらが何をするかを理解することは重要です。

   - **[Epic](https://docs.gitlab.com/ee/user/group/epics/):** Issue をエピックに関連付けます。エピックは、1 つ以上の子 Issue の親となるグループ化です。エピックをイニシアチブやメタレベルのトピックと考え、Issue をそのイニシアチブの目標または詳細なタスクと考えるとよいでしょう。

   - **[Milestone](https://docs.gitlab.com/ee/user/project/milestones/):** GitLab のマイルストーンは、通常はリリースおよび／またはバージョン番号に関連付けられる、一定期間内のより広い目標を達成するために作成された Issue やマージリクエストを追跡する方法です。

   - **[Labels](https://docs.gitlab.com/ee/user/project/labels.html):** Issue にラベルを適用します。ラベルは、Issue の並べ替えやフィルタリングに使えるメタデータのタグです。

   - **[Weight](https://docs.gitlab.com/ee/user/project/issues/issue_weight.html):** Issue にウェイトの値を適用して、その Issue が持つ、あるいは要する時間、複雑さ、価値を測定します。

   - **[Due date](https://docs.gitlab.com/ee/user/project/issues/due_dates.html):** Issue で締め切りを把握し、機能が期限どおりに出荷されるようにするために使います。Issue の期日が近づいているのにまだクローズされていない場合、メールのリマインダーを受け取ります。

   - **[Iteration](https://docs.gitlab.com/ee/user/group/iterations/):** Issue をイテレーションに関連付けて、一定期間にわたって追跡します。これにより、チームはベロシティとボラティリティのメトリクスを追跡できます。

1. **Create issue** ボタンをクリックします。

## タスク D. カスタムラベルを作成する

> ラベルを使うと、作業を整理してタグ付けできます。ラベルを使うことで、動的なフィルタリングのような機能を使って、関心のある Issue を追跡しやすくなります。ラベルの使用例には、色と、bug、feature request、docs のような説明的なタイトルを使ってエピック、Issue、マージリクエストを分類することなどがあります。ラベルの詳細は[ドキュメント](https://docs.gitlab.com/ee/user/project/labels.html)で読めます。

1. 左側のナビゲーションペインで、**Manage > Labels** に移動します。

1. **New label** ボタンをクリックします。

1. **Title** フィールドに `Opened` と入力します。

1. **Description** フィールドは、ラベルを説明するために使う任意のフィールドです。このフィールドには何を入力してもよく、空白のままにしてもかまいません。

1. 任意の背景色を選択します。

1. **Create label** ボタンをクリックします。

   > プロジェクトでラベルを作成すると、そのラベルはプロジェクトレベルで作成されます。これは、そのラベルが他のどのプロジェクトでも利用できないことを意味します。グループ内のすべてのプロジェクトで利用できるグループレベルのラベルを作成することも可能です。

1. 直前の 3 つのステップを使って、`Completed` と `Needs documentation` というタイトルの追加のラベルを 2 つ作成します。これらのラベルには、好きな背景色を付けてかまいません。

1. これで、プロジェクト内の任意の Issue、マージリクエスト、エピックに割り当てられるラベルが 3 つ用意できました。

## タスク E. Issue にラベルを割り当てる

1. **Plan > Issues** に移動します。

1. `My first issue` のタイトルをクリックして Issue を開きます。

1. **My first issue** の右サイドバーで、**Labels > Edit** をクリックします。

1. 先ほど作成した **Opened** と **Needs documentation** のラベルをクリックします。

1. **Labels** セクションから離れた場所をクリックします。Issue に両方のラベルが適用されたことに注目します。

   > マルチセレクトボックスを閉じるためにラベルセクションから離れた場所をクリックするまで、ラベルは Issue に適用されません。

## タスク F. クイックアクションを使う

> **クイックアクション**は、通常は GitLab のユーザーインターフェースでボタンやドロップダウンを選択して行う一般的なアクションの、テキストベースのショートカットです。これらのコマンドは、Issue、エピック、マージリクエスト、コミットの説明やコメントに入力できます。
>
> クイックアクションの詳細と、利用可能なクイックアクションの完全な一覧については、[ドキュメント](https://docs.gitlab.com/ee/user/project/quick_actions.html)を参照してください。

1. 前のタスクの Issue のコメントフィールドに、クイックアクション `/spend 1 hour` を入力します。

2. **Comment** ボタンをクリックします。

   > 右側の情報ペインで、**Time tracking** が `Spent: 1h` を表示するようになったことに注目します。テキストコメントを残す代わりに、クイックアクションが Issue にかけた作業時間を更新しました。

## ラボガイド完了

このラボの演習を完了しました。[このコースの他のラボガイド](/handbook/customer-success/professional-services-engineering/education-services/gitbasicshandson)を見ることができます。
