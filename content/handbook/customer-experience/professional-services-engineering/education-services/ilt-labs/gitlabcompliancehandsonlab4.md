---
title: "GitLab Compliance - ハンズオンラボ: リポジトリ制御"
description: "このハンズオンガイドでは、リポジトリへのアクセスや変更を制御する方法を説明します。"
upstream_path: /handbook/customer-experience/professional-services-engineering/education-services/ilt-labs/gitlabcompliancehandsonlab4/
upstream_sha: ab93800e4c241789ac67785899fa20ffa1eb0854
translated_at: "2026-11-05T15:23:57.350605+00:00"
translator: claude
stale: false
lastmod: "2026-11-04T12:01:28-05:00"
---

> 完了までの推定時間: 15 分

## 目標 {#objectives}

受講者は、リポジトリへのアクセスや変更を管理するために、さまざまなリポジトリ制御を実装します。

## タスク A. プッシュルール {#task-a-push-rules}

このタスクでは、リポジトリのプッシュルールを有効にして、プッシュが特定の基準に従うようにします。

1. プロジェクトに移動します。

1. 左サイドバーで **Settings > Repository** を選択し、**Push Rules** を展開します。

      > この例では、すべてのコミットがプロジェクト内の Issue を対象とするようにします。コミットメッセージに Issue ID があれば、Issue に関連するすべてのアクティビティがその Issue に記録されます。そのために、すべてのコミットメッセージにエピックまたは Issue の ID を含める正規表現を強制できます。

1. **Require expression in commit messages** に、次の正規表現を追加します。

      ```regex
      ^.*(#\d+|&\d+).*
      ```

      この正規表現は、次のパターンに基づいて文字列にマッチします。

      - ^ - 文字列の先頭にマッチします
      - .* - 任意の文字（改行を除く）の 0 回以上の繰り返しにマッチします
      - (#\d+|&\d+) - 次のいずれかにマッチするキャプチャグループです。
          - #\d+ - ハッシュ記号の後に 1 桁以上の数字が続くパターン
          - &\d+ - アンパサンド記号の後に 1 桁以上の数字が続くパターン
      - .* - 任意の文字（改行を除く）の 0 回以上の繰り返しにマッチします
      - $ - 文字列の末尾にマッチします（この場合は暗黙的です）

1. **Save push rules** を選択します。

      > これをテストするために、まずプロジェクトに新しい Issue を作成しましょう。

1. 左サイドバーで **Plan > Work items** を選択します。

1. **New item** を選択します。

1. **Type** フィールドが **Issue** に設定されていることを確認します

1. Issue のタイトルに `Create compliance frameworks` と入力します。

1. 他のすべてのオプションをデフォルトのままにし、**Create issue** を選択します。

      > 次に、コミットを作成して、プッシュルールがコミットメッセージにどう影響するか確認しましょう。

1. 左サイドバーで **Code > Repository** を選択します。

1. **+ > New file** を選択します。

1. **Filename** に、`compliance_plan.txt` という名前を入力します。

1. **Commit message** や **Target Branch** を変更せず、**Commit changes** を選択します。

      > コミットメッセージが適切なパターンに従っていないというエラーが表示されることを確認してください。

1. **Commit message** に、`Starting work on issue #1` と入力します。

1. **Commit changes** を選択します。

      > これで、コミットは正常に完了します。ここから Issue に戻り、その Issue でコミットが追跡されていることを確認できます。

## タスク B. ブランチルールの設定 {#task-b-setting-branch-rules}

このタスクでは、リポジトリの main への直接プッシュを禁止するブランチルールを作成します。main がプロジェクトのデプロイ先の場合、適切なレビュープロセスを経たコードだけをデプロイしたいため、main への直接プッシュを禁止するのが望ましい場合が多くあります。

1. プロジェクトに移動します。

1. 左サイドバーで **Settings > Repository** を選択します。

1. **Branch rules** セクションを展開します。

1. **main** の横にある **View Details** を選択します。

1. **Allowed to push and merge** の **Edit** を選択します。

1. `No one` オプションにチェックを入れ、**Save changes** を選択します。

      > この変更により、誰も main に直接プッシュできなくなります。main へのマージだけが許可されます。これをテストするには、次の操作を行います。

1. 左サイドバーで **Code > Repository** を選択します。

1. **+ > New file** を選択します。

1. 任意の **Filename** を入力し、ファイルの本文に任意の内容を追加します。

1. **Commit changes** を選択します。

      > main ブランチへのプッシュを選択できなくなっていることを確認してください。

1. **Target Branch** フィールド（現在は生成されたブランチ名が入っています）を `main` に変更し、**Commit changes** を選択します。

      > このブランチへのプッシュが許可されていないというエラーが表示されます。

1. *任意で*別のブランチ名を追加し、新しいコードをコミットします。

## タスク C. ルールのクリーンアップ {#task-c-cleaning-up-rules}

次のラボに進む前に、リポジトリのコミットメッセージルールと、main ブランチへのプッシュを禁止するルールを削除することをお勧めします。これにより、ルール違反によってコミットできなくなる問題を防げます。

1. 左サイドバーで **Settings > Repository** を選択します。

1. **Push rules** セクションを展開します。

1. **Require expression in commit message** の内容を削除します。

1. **Save push rules** を選択します。

1. **Branch rules** セクションを展開します。

1. main ブランチの右側にある **View Details** オプションをクリックします。

1. 'Allowed to push and merge' セクションの右側にある **Edit** オプションをクリックします。

1. 設定を **No one** から **Developers and Maintainers** に変更します。

1. **Save changes** ボタンをクリックします。

## ラボガイド完了 {#lab-guide-complete}

このラボ演習を完了しました。[このコースの他のラボガイド](/handbook/customer-experience/professional-services-engineering/education-services/ilt-labs/gitlabcompliancehandson)を参照できます。

## ご提案はありますか? {#suggestions}

このラボに変更を加えたい場合は、マージリクエストを通じて変更内容を送信してください。
