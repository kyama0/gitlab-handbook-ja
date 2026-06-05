---
title: "GitLab with Git Fundamentals - ハンズオンラボ: プロジェクトと Issue の作成"
description: "このハンズオンガイドでは、プロジェクト、Issue、ラベルの作成方法と、クイックアクションの使い方について説明します。"
upstream_path: /handbook/customer-success/professional-services-engineering/education-services/gitbasicshandsonlab1/
upstream_sha: 228e83810bd79bddf58ab0b0b518b1d52bd74fb7
translated_at: "2026-06-05T21:08:33Z"
translator: claude
stale: false
model: claude-opus-4-7
lastmod: "2026-06-05T16:14:13+01:00"
---

> 完了までの所要時間目安: 30 分

## 目的

GitLab プロジェクトは、コードや設定ファイルなどの補助ファイルを保存できるリポジトリです。プロジェクトは Issue の追跡、作業計画、コードでの共同作業、組み込み CI/CD によるアプリの継続的なビルド・テスト・デプロイにも使用できます。GitLab プロジェクトについての詳しい情報は[ドキュメント](https://docs.gitlab.com/ee/user/project/organize_work_with_projects.html)を参照してください。

GitLab は、プロジェクトを追跡・管理するためのさまざまなツールを提供します。このラボでは、プロジェクトの作成方法、Issue の作成方法、プロジェクトレベルでのラベル作成方法、Issue へのクイックアクションの適用方法を学びます。

## タスク A. トレーニンググループにアクセスする

1. Web ブラウザで [**https://gitlabdemo.com/invite**](https://gitlabdemo.com/invite) にアクセスします。

1. **Invitation Code** フィールドに、インストラクターまたは LevelUp LMS から提供された招待コードを入力します。

1. **Provision Training Environment** を選択します。

1. **GitLab.com** のユーザー名が必要になります。ユーザー名を確認するには、[GitLab](https://gitlab.com) にアクセスします。

1. 左サイドバーで自分のプロフィール画像を選択します。

1. 表示されるドロップダウンに、`@` で始まる値があります。これがあなたの GitLab ユーザー名です。

1. 招待コードを入力すると、ポータルが **GitLab.com** のユーザー名の入力を求めます。GitLab.com のユーザー名（先頭の `@` を除く）を該当フィールドに入力します。

1. **Provision Training Environment** を選択します。

1. ページ下部の **My Group** を選択します。

1. GitLab.com の認証情報でサインインします。

1. **My Test Group** グループにリダイレクトされ、ここがトレーニングラボのステップを実行するためのサンドボックスになります。

   > このグループはすべての機能を確認できるよう GitLab Ultimate ライセンスを持っています。個人ユーザー名のネームスペースで全機能にアクセスするには有料サブスクリプションまたは無料トライアルが必要です。
   >
   > グループにアクセスしたときに 404 エラーが表示される場合、ラボのプロビジョニング時に入力したユーザー名が原因である可能性が高いです。GitLab ユーザー名が正しく入力されているか再確認してください。

1. **My Test Group** トレーニングサブグループから、**New project** ボタンをクリックします。

## タスク B. プロジェクトを作成する

1. **Create blank project** タイルを選択します。

1. **Project name** フィールドに `Top Level Project` と入力します。

   > プロジェクトスラッグは自動入力されます。自身のプロジェクトでは必要に応じて短い文字列に変更できます。このラボではデフォルトのままにしておきます。

1. **Project URL** フィールドで、URL の後半部分のドロップダウンをクリックし、**ユーザー名**ではなく**グループ名**を指していることを確認します。このプロジェクトは、ユーザーのネームスペース直下ではなくグループ内に作成する必要があります。

1. **Visibility Level** で、**Private** が選択されていることを確認します。

   > 上位の親グループがプライベートなため、その下のすべての子グループおよびプロジェクトもプライベートになります。プロジェクトの公開レベルについては[ドキュメント](https://docs.gitlab.com/ee/user/public_access.html)で詳しく学べます。

1. **Initialize repository with a README** をチェックします。

1. **Create project** を選択します。

## タスク C. Issue を作成する

> Issue は GitLab における中核的な構成要素で、コラボレーション、ディスカッション、計画、作業追跡を可能にします。Issue は **プロジェクト** に属し、グループには属しません。グループレベルで Issue を表示すると、そのグループ内のすべてのプロジェクトで作成された Issue を確認できます。詳細は[こちら](https://docs.gitlab.com/ee/user/project/issues/)を参照してください。

1. 左側のナビゲーションペインで **Plan > Issues** に移動します。

1. **New issue** ボタンをクリックします。

1. **Title** フィールドに `My first issue` と入力します。

1. **Type** ドロップダウンで `Issue` が選択されていることを確認します。

1. description は任意の項目ですが、必要に応じてこの Issue の説明を入力してください。

   > description セクションには、テンプレートを選択するドロップダウンがあります。Issue の説明を標準化するためのテンプレートを作成できます。Issue テンプレートの詳細については、[こちら](https://docs.gitlab.com/ee/user/project/description_templates.html)をクリックしてください。

1. **Assignees** ドロップダウンを使って、ドロップダウンをクリックし、自分のユーザー名をクリックして自分自身に Issue をアサインします。

   > あるいは、Assignees ドロップダウンの横にある **Assign to me** を直接クリックして Issue を自分にアサインすることもできます。

1. ここではオプションを現状のままにしますが、それぞれが何をするものか理解しておくことは重要です:

   - **[Epic](https://docs.gitlab.com/ee/user/group/epics/):** Issue をエピックに紐付けます。エピックは 1 つ以上の子 Issue の親グルーピングです。エピックはイニシアチブやメタレベルのトピック、Issue はそのイニシアチブにおける目標や詳細タスクと考えてください。

   - **[Milestone](https://docs.gitlab.com/ee/user/project/milestones/):** GitLab のマイルストーンは、特定の期間内により広いゴールを達成するために作成された Issue やマージリクエストを追跡する方法で、通常はリリースやバージョン番号と関連付けられます。

   - **[Labels](https://docs.gitlab.com/ee/user/project/labels.html):** Issue にラベルを適用します。ラベルは Issue を並び替えたりフィルタリングしたりするのに使えるメタデータタグです。

   - **[Weight](https://docs.gitlab.com/ee/user/project/issues/issue_weight.html):** Issue にウェイト値を適用して、その Issue にかかる時間、複雑さ、価値を測ります。

   - **[Due date](https://docs.gitlab.com/ee/user/project/issues/due_dates.html):** Issue で期限を追跡し、機能が時間通りに出荷されるようにします。Issue がまだクローズされていない状態で期限が近づくと、メールでリマインダーが届きます。

   - **[Iteration](https://docs.gitlab.com/ee/user/group/iterations/):** Issue をイテレーションに紐付けて、ある期間にわたって追跡します。これにより、チームはベロシティおよびボラティリティの指標を追跡できます。

1. **Create issue** ボタンをクリックします。

## タスク D. カスタムラベルを作成する

> ラベルを使うと、作業を整理してタグ付けできます。ラベルを使うことで、動的フィルタリングのような機能を活用して、関心のある Issue を追いやすくなります。ラベルの使用例には、エピック、Issue、マージリクエストを bug、feature request、docs のような色と説明的なタイトルでカテゴリ分けすることが含まれます。ラベルの詳細は[ドキュメント](https://docs.gitlab.com/ee/user/project/labels.html)で確認できます。

1. 左側のナビゲーションペインで **Manage > Labels** に移動します。

1. **New label** ボタンをクリックします。

1. **Title** フィールドに `Opened` と入力します。

1. **Description** フィールドはラベルを説明するための任意のフィールドです。何か入力しても、空欄のままでもかまいません。

1. 任意の背景色を選択します。

1. **Create label** ボタンをクリックします。

   > プロジェクトでラベルを作成すると、そのラベルはプロジェクトレベルで作成されます。つまり、他のプロジェクトでは利用できません。グループレベルのラベルを作成することもでき、グループ内のすべてのプロジェクトで利用可能になります。

1. 前の 3 ステップを使って、`Completed` と `Needs documentation` というタイトルで追加のラベルを 2 つ作成します。これらのラベルには好きな背景色を付けてかまいません。

1. これで、プロジェクト内の任意の Issue、マージリクエスト、エピックにアサインできる 3 つのラベルが利用可能になりました。

## タスク E. Issue にラベルをアサインする

1. **Plan > Issues** に移動します。

1. `My first issue` のタイトルをクリックして Issue を開きます。

1. **My first issue** の右サイドバーで、**Labels > Edit** をクリックします。

1. 先ほど作成した **Opened** と **Needs documentation** のラベルをクリックします。

1. **Labels** セクションの外をクリックします。Issue に両方のラベルが適用されていることを確認します。

   > マルチセレクトボックスを閉じるためにラベルセクションの外をクリックするまで、ラベルは Issue に適用されません。

## タスク F. クイックアクションを使う

> **クイックアクション** は、通常 GitLab UI でボタンやドロップダウンを選択して行う一般的なアクションを実行するためのテキストベースのショートカットです。Issue、エピック、マージリクエスト、コミットの description やコメントにこれらのコマンドを入力できます。
>
> クイックアクションの詳細や、利用可能なクイックアクションの全リストについては、[ドキュメント](https://docs.gitlab.com/ee/user/project/quick_actions.html)を参照してください。

1. 前のタスクの Issue のコメントフィールドに、クイックアクション `/spend 1 hour` を入力します。

2. **Comment** ボタンをクリックします。

   > 右側の情報ペインで、**Time tracking** に `Spent: 1h` と表示されたことに注目してください。テキストコメントを残す代わりに、クイックアクションが Issue に費やした時間を更新したのです。

## ラボガイド完了

このラボ演習は完了です。このコースの他の[ラボガイド](/handbook/customer-success/professional-services-engineering/education-services/gitbasicshandson)を確認できます。
