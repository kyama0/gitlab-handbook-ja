---
title: "GitLab with Git Fundamentals - ハンズオンラボ: プロジェクトと Issue を作成する"
description: "このハンズオンガイドでは、プロジェクト・Issue・ラベルの作成、およびクイックアクションの使い方を説明します。"
upstream_path: /handbook/customer-success/professional-services-engineering/education-services/gitbasicshandsonlab1/
upstream_sha: b4eeb07f0d5f46e2fc5f8572be1a2547261aed89
translated_at: "2026-04-26T03:52:14Z"
translator: claude
stale: false
---

> 完了までの推定時間: 30 分

## 目標

GitLab プロジェクトは、コードや設定ファイルなどの補助ファイルを保存するためのリポジトリです。プロジェクトを使って Issue を追跡したり、作業を計画したり、コードで共同作業したり、継続的なビルド・テスト・組み込みの CI/CD によるアプリのデプロイを行うこともできます。GitLab プロジェクトの詳細については [ドキュメント](https://docs.gitlab.com/ee/user/project/organize_work_with_projects.html) をご覧ください。

GitLab はプロジェクトの追跡と管理に役立つさまざまなツールを提供しています。このラボでは、プロジェクトの作成、Issue の作成、プロジェクトレベルでのラベルの作成、および Issue へのクイックアクションの適用方法を学びます。

## タスク A. トレーニンググループにアクセスする

1. ウェブブラウザで [**https://gitlabdemo.com/invite**](https://gitlabdemo.com/invite) にアクセスしてください。

1. **Invitation Code** フィールドに、インストラクターまたは LevelUp LMS から提供された招待コードを入力してください。

1. **Provision Training Environment** を選択してください。

1. **GitLab.com** のユーザー名が必要です。ユーザー名を確認するには、[GitLab](https://gitlab.com) にアクセスしてください。

1. 左サイドバーでプロフィール画像を選択してください。

1. 表示されるドロップダウンに `@` から始まる値があります。これが GitLab のユーザー名です。

1. 招待コードを入力すると、ポータルが **GitLab.com** のユーザー名を求めます。先頭の `@` を除いた GitLab.com ユーザー名を入力してください。

1. **Provision Training Environment** を選択してください。

1. ページ下部の **My Group** を選択してください。

1. GitLab.com の認証情報でサインインしてください。

1. トレーニングラボの手順を実行するためのサンドボックスとなる **My Test Group** グループにリダイレクトされます。

   > このグループには GitLab Ultimate ライセンスが付与されており、すべての機能を確認できます。個人のユーザー名前空間では、すべての機能にアクセスするために有料サブスクリプションまたは無料トライアルが必要です。
   >
   > グループにアクセスしたときに 404 エラーが表示される場合は、ラボのプロビジョニング時に入力したユーザー名が原因である可能性があります。GitLab ユーザー名が正しく入力されているかどうかを確認してください。

1. **My Test Group** トレーニングサブグループから **New project** ボタンをクリックしてください。

## タスク B. プロジェクトを作成する

1. **Create blank project** タイルを選択してください。

1. **Project name** フィールドに `Top Level Project` と入力してください。

   > プロジェクトスラッグは自動的に入力されます。自分のプロジェクトに合わせて短い文字列に変更することもできますが、このラボではデフォルトのままにしてください。

1. **Project URL** フィールドで URL の後半部分のドロップダウンをクリックし、**ユーザー名**ではなく**グループ名**を指していることを確認してください。このプロジェクトはユーザーの名前空間ではなく、グループ内に作成してください。

1. **Visibility Level** で **Private** が選択されていることを確認してください。

   > 上位グループがプライベートであるため、その下のすべての子グループとプロジェクトもプライベートになります。プロジェクトの可視性レベルの詳細については [ドキュメント](https://docs.gitlab.com/ee/user/public_access.html) をご覧ください。

1. **Initialize repository with a README** にチェックを入れてください。

1. **Create project** を選択してください。

## タスク C. Issue を作成する

> Issue は GitLab のコアとなるビルディングブロックであり、共同作業・ディスカッション・作業の計画とトラッキングを可能にします。Issue は**グループ**ではなく**プロジェクト**に属します。グループレベルで Issue を表示すると、そのグループ内のすべてのプロジェクトで作成された Issue を確認できます。詳細は[こちら](https://docs.gitlab.com/ee/user/project/issues/)をご覧ください。

1. 左側のナビゲーションペインで **Plan > Issues** に移動してください。

1. **New issue** ボタンをクリックしてください。

1. **Title** フィールドに `My first issue` と入力してください。

1. **Type** ドロップダウンで `Issue` が選択されていることを確認してください。

1. 説明はオプションですが、この Issue の説明を自由に入力してください。

   > 説明セクションには、テンプレートを選択するためのドロップダウンがあります。Issue の説明を標準化するためのテンプレートを作成できます。Issue テンプレートの詳細については[こちら](https://docs.gitlab.com/ee/user/project/description_templates.html)をご覧ください。

1. **Assignees** ドロップダウンを使用し、ドロップダウンをクリックしてから自分のユーザー名をクリックして、自分自身を Issue に割り当ててください。

   > または、Assignees ドロップダウンの隣にある **Assign to me** をクリックして自分自身に割り当てることもできます。

1. ここではオプションをそのままにしますが、それぞれの意味を理解しておくことが重要です:

   - **[Epic](https://docs.gitlab.com/ee/user/group/epics/):** Issue をエピックに関連付けます。エピックは 1 つ以上の子 Issue の親グループです。エピックをイニシアチブやメタレベルのトピックとして、Issue をそのイニシアチブの目標や詳細なタスクとして考えられます。

   - **[Milestone](https://docs.gitlab.com/ee/user/project/milestones/):** GitLab のマイルストーンは、特定の期間内に達成すべき広い目標に向けて作成された Issue とマージリクエストを追跡する方法です。通常はリリースやバージョン番号に関連付けられます。

   - **[Labels](https://docs.gitlab.com/ee/user/project/labels.html):** Issue にラベルを適用します。ラベルは Issue の並べ替えやフィルタリングに使用できるメタデータタグです。

   - **[Weight](https://docs.gitlab.com/ee/user/project/issues/issue_weight.html):** Issue に重み値を適用して、その Issue が持つ時間・複雑さ・価値を測定します。

   - **[Due date](https://docs.gitlab.com/ee/user/project/issues/due_dates.html):** Issue で締め切りを追跡し、機能が期限どおりに出荷されるようにするために使用します。Issue がまだクローズされていない場合、期限が近づくとメールリマインダーが届きます。

   - **[Iteration](https://docs.gitlab.com/ee/user/group/iterations/):** Issue をイテレーションに関連付けて、一定期間にわたって追跡します。これにより、チームは速度と変動性のメトリクスを追跡できます。

1. **Create issue** ボタンをクリックしてください。

## タスク D. カスタムラベルを作成する

> ラベルを使うと、作業を整理・タグ付けできます。ラベルを使用することで、動的フィルタリングなどの機能を使って関心のある Issue を追跡しやすくなります。ラベルの使用例としては、バグ・機能リクエスト・ドキュメントなど、色と説明的なタイトルを使ってエピック・Issue・マージリクエストを分類することなどがあります。ラベルの詳細については [ドキュメント](https://docs.gitlab.com/ee/user/project/labels.html) をご覧ください。

1. 左側のナビゲーションペインで **Manage > Labels** に移動してください。

1. **New label** ボタンをクリックしてください。

1. **Title** フィールドに `Opened` と入力してください。

1. **Description** フィールドはオプションで、ラベルの説明に使用します。このフィールドには何でも入力するか、空白のままにしてください。

1. 任意の背景色を選択してください。

1. **Create label** ボタンをクリックしてください。

   > プロジェクト内にラベルを作成すると、そのラベルはプロジェクトレベルで作成されます。つまり、他のプロジェクトではそのラベルを使用できません。グループレベルのラベルを作成することもでき、グループ内のすべてのプロジェクトで使用できます。

1. 前の 3 ステップを使用して、`Completed` と `Needs documentation` というタイトルの追加ラベルを 2 つ作成してください。これらのラベルには任意の背景色を設定できます。

1. これで、プロジェクト内の Issue・マージリクエスト・エピックに割り当てられる 3 つのラベルが用意できました。

## タスク E. Issue にラベルを割り当てる

1. **Plan > Issues** に移動してください。

1. `My first issue` のタイトルをクリックして Issue を開いてください。

1. **My first issue** の右サイドバーで **Labels > Edit** をクリックしてください。

1. 先ほど作成した **Opened** と **Needs documentation** ラベルをクリックしてください。

1. **Labels** セクション以外の場所をクリックしてください。Issue に両方のラベルが適用されていることを確認してください。

   > ラベルセクションからクリックして複数選択ボックスを閉じるまで、ラベルは Issue に適用されません。

## タスク F. クイックアクションを使用する

> **クイックアクション**は、GitLab のユーザーインターフェースでボタンやドロップダウンを選択して行う一般的な操作のテキストベースのショートカットです。これらのコマンドは、Issue・エピック・マージリクエスト・コミットの説明またはコメントに入力できます。
>
> クイックアクションの詳細と可能なクイックアクションの完全なリストについては、[ドキュメント](https://docs.gitlab.com/ee/user/project/quick_actions.html) をご覧ください。

1. 前のタスクの Issue のコメントフィールドに、クイックアクション `/spend 1 hour` を入力してください。

2. **Comment** ボタンをクリックしてください。

   > 右側の情報ペインの **Time tracking** に `Spent: 1h` が表示されていることを確認してください。テキストコメントを残す代わりに、クイックアクションが Issue の作業時間を更新しました。

## ラボガイド完了

このラボ演習が完了しました。このコースの他の[ラボガイド](/handbook/customer-success/professional-services-engineering/education-services/gitbasicshandson)をご覧いただけます。

## ご提案は？

ラボへの変更を提案したい場合は、マージリクエストを通じて送信してください。
