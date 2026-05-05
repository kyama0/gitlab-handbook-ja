---
title: "GitLab Compliance - ハンズオンラボ: リポジトリ制御"
description: "このハンズオンガイドでは、リポジトリのアクセスと変更を制御する方法をデモンストレーションします。"
upstream_path: /handbook/customer-success/professional-services-engineering/education-services/ilt-labs/gitlabcompliancehandsonlab3/
upstream_sha: b4eeb07f0d5f46e2fc5f8572be1a2547261aed89
translated_at: "2026-04-26T00:00:00Z"
translator: claude
stale: false
---

> 完了までの推定時間: 15分

## 目標

学習者はリポジトリのアクセスと変更を管理するためのさまざまなリポジトリ制御を実装します。

## タスク A. プッシュルール

このタスクでは、プッシュが特定の基準に従うようにリポジトリでプッシュルールを有効にします。

1. プロジェクトに移動します。

1. 左サイドバーで **Settings > Repository** を選択し、**Push Rules** を展開します。

    > この例では、すべてのコミットがプロジェクト内の Issue を対象にしていることを確認したいとします。コミットメッセージに Issue ID が含まれていることで、Issue に関連するすべてのアクティビティが Issue に記録されます。これを実現するために、すべてのコミットメッセージにエピックまたは Issue ID が含まれるようにする正規表現を設定できます。

1. **Require expression in commit messages** に以下の正規表現を追加します:

    ```regex
    ^.*(#\d+|&\d+).*
    ```

    この正規表現は次のパターンに基づいて文字列を照合します:

    - ^ - 文字列の先頭に一致
    - .* - 任意の文字（改行を除く）に 0 回以上一致
    - (#\d+|&\d+) - 次のいずれかに一致するキャプチャグループ:
        - #\d+ - ハッシュ記号に続く 1 桁以上の数字
        - &\d+ - アンパサンド記号に続く 1 桁以上の数字
    - .* - 任意の文字（改行を除く）に 0 回以上一致
    - $ - 文字列の末尾に一致（この場合は暗黙的）

1. **Save push rules** を選択します。

    > これをテストするために、まずプロジェクトに新しい Issue を作成しましょう。

1. 左サイドバーで **Plan > Work items** を選択します。

1. **New item** を選択します。

1. **Type** フィールドが **Issue** に設定されていることを確認します。

1. Issue のタイトルに `Create compliance frameworks` と入力します。

1. 他のオプションはすべてデフォルトのままにして **Create issue** を選択します。

    > 次に、コミットを作成してプッシュルールがコミットメッセージに与える影響を確認しましょう。

1. 左サイドバーで **Code > Repository** を選択します。

1. **+ > New file** を選択します。

1. **Filename** に `compliance_plan.txt` と入力します。

1. **Commit message** や **Target Branch** を変更せずに **Commit changes** を選択します。

    > ここでは、コミットメッセージが適切なパターンに従っていないというエラーが表示されます。

1. **Commit message** に `Starting work on issue #1` と入力します。

1. **Commit changes** を選択します。

    > これでコミットが正常に完了します。ここからイシューに戻ると、コミットが Issue で追跡されていることが確認できます。

## タスク B. ブランチルールの設定

このタスクでは、リポジトリの main への直接プッシュを防ぐブランチルールを作成します。main がプロジェクトのデプロイターゲットである場合、適切なレビュープロセスを経たコードのみをデプロイしたいため、main への直接プッシュを防ぐのが理想的です。

1. プロジェクトに移動します。

1. 左サイドバーで **Settings > Repository** を選択します。

1. **Branch rules** セクションを展開します。

1. **main** の横にある **View Details** を選択します。

1. **Allowed to push and merge** の **Edit** を選択します。

1. `No one` オプションにチェックを入れ、**Save changes** を選択します。

    > この変更により、誰も main に直接プッシュできなくなります。main へのマージのみが許可されます。これをテストするには:

1. 左サイドバーで **Code > Repository** を選択します。

1. **+ > New file** を選択します。

1. 任意の **Filename** を追加し、ファイル本文に任意のコンテンツを追加します。

1. **Commit changes** を選択します。

    > main ブランチへのプッシュオプションがなくなったことに注目します。

1. **Target Branch** フィールド（現在は生成されたブランチ名が入っています）を `main` に変更して **Commit changes** を選択します。

    > このブランチへのプッシュは許可されていないというエラーが表示されます。

1. *オプションで* 別のブランチ名を追加して新しいコードをコミットします。

## タスク C. ルールのクリーンアップ

次のラボセットに進む前に、違反によるコミットの妨げを防ぐために、リポジトリのコミットメッセージルールと main ブランチへのプッシュを禁止するルールを削除することをお勧めします。

1. 左サイドバーで **Settings > Repository** を選択します。

1. **Push rules** セクションを展開します。

1. **Require expression in commit message** の内容を削除します。

1. **Save push rules** を選択します。

1. **Branch rules** セクションを展開します。

1. main ブランチの右側にある **View Details** オプションをクリックします。

1. "Allowed to push and merge" セクションの右側にある **Edit** オプションをクリックします。

1. 設定を **No one** から **Developers and Maintainers** に変更します。

1. **Save changes** ボタンをクリックします。

## ラボガイド完了

このラボ演習を完了しました。[このコースの他のラボガイド](/handbook/customer-success/professional-services-engineering/education-services/ilt-labs/gitlabcompliancehandson)を参照できます。

## ご提案はありますか?

ラボに変更を加えたい場合は、マージリクエストで変更内容を送信してください。
