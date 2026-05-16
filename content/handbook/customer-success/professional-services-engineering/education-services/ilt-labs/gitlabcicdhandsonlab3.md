---
title: "GitLab CI/CD - ハンズオンラボ: パイプラインテストの設定"
description: "このハンズオンガイドでは、バイナリのテストを設定する方法を説明します。"
upstream_path: /handbook/customer-success/professional-services-engineering/education-services/ilt-labs/gitlabcicdhandsonlab3/
upstream_sha: b4eeb07f0d5f46e2fc5f8572be1a2547261aed89
translated_at: 2026-04-26T04:33:12Z
translator: claude
stale: false
lastmod: "2026-03-25T17:26:37+00:00"
---

> 完了までの推定時間: 15 分

## はじめに

自動ビルドと制御されたマージリクエストパイプラインが整った後、チームは重大な問題に気づきました: 自動化された品質チェックなしにコードをビルドしてデプロイしていました。問題はすぐに明らかになりました:

- **本番環境へのバグの混入**: コンパイルに成功するコードでも、機能を壊す論理エラーが含まれている
- **テストの自動化がない**: 開発者がローカルマシンで手動テストを実行しており、カバレッジが一貫していない
- **パイプラインの全停止**: 実験的なテストが失敗すると、コアの機能が動作している場合でもパイプライン全体が停止してリリースが妨げられる
- **コード品質の可視性がゼロ**: 経営陣にテストカバレッジやコードの健全性に関する指標がない
- **バグの発見が遅い**: 本番環境でユーザーによって問題が発見される（開発初期に検出すべき問題）

## 目標

このラボでは、Go アプリケーションのユニットテストを含む自動テストを CI/CD パイプラインに実装します。さまざまなテストタイプの整理方法、`allow_failure` キーワードを使ったテスト失敗のグレースフルな処理、および本番環境に到達する前にバグをキャッチする包括的な品質ゲートの基盤を確立する方法を学びます。

## タスク A. コードとテストを作成する

テスト対象のコードと、そのコードのユニットテストを導入しましょう。

1. プロジェクトに移動します。

1. **+ > New directory** を選択します。

1. ディレクトリ名を **ArrayUtils** に設定します。

1. **Commit to the current main branch** が選択されていることを確認し、**Commit changes** をクリックします。

1. **ArrayUtils** ディレクトリで **+ > New file** を選択します。

1. ファイル名を `ArrayUtils.go` とします。ファイルに次のコードを追加します:

    ```go
    package ArrayUtils

    func SearchArray(a []int, x int) bool{
      var found bool
      found = false

      for i := 0; i < len(a); i++{
        if a[i] == x{
          found = true
        }
      }

      return found
    }
    ```

1. **Commit changes** を選択し、適切なコミットメッセージを追加して **Commit changes** を選択します。

1. `ArrayUtils` ディレクトリで **+ > New file** を選択します。

1. ファイル名を `ArrayUtils_test.go` とします。このファイルにユニットテストを追加します:

    ```go
    package ArrayUtils

    import(
      "testing"
    )

    func TestArraySearch(t *testing.T){
      var a = []int{1,2,3}
      var result bool 
      
      result = SearchArray(a,3)

      if !result{
        t.Fatalf("Expected to find value!");
      }
      
      result = SearchArray(a,5)

      if result{
        t.Fatalf("Expected to not find value!");
      }

    }
    ```

1. **Commit changes** を選択し、適切なコミットメッセージを追加して **Commit changes** を選択します。

      これらのテストを実行するには、コマンド `go test array/ArrayUtils` を使用します。これらのテストを CI/CD パイプラインに組み込む方法を確認しましょう。

## タスク B. .gitlab-ci.yml でテストステージとジョブを作成する

一般的に、テストは CI/CD プロセスのテストステージで実行されます。

1. **Build > Pipeline Editor** を選択します。

1. stages セクションで `build` ステージの前に `test` ステージを追加します:

    ```yaml
    stages:
      - test
      - build
      - run
      - release
    ```

1. ArrayUtils 用に作成したテストを実行するジョブをテストステージに作成します。

    ```yaml
    test go:
      stage: test
      script: go test array/ArrayUtils
    ```

1. これらの変更を追加したら **Commit changes** を選択します。

1. 結果のパイプラインを確認します。テストステージが表示されるようになります。テストステージには作成したテストジョブが表示されます。テストジョブを選択すると、`go test array/ArrayUtils` コマンドが実行されているのが確認できます。コードが正しければ、このステージはエラーなく成功するはずです。

      stages ブロックの先頭にテストステージを追加すると、release などの他のステージよりも前に実行されることに注意してください。このセットアップでは、何らかの理由でテストが失敗すると、後続のステージは実行されません。現在のジョブが失敗しても後続のステージを実行したい場合があります。次のタスクではその方法を説明します。

## タスク C. 失敗を許可するジョブを作成する

1. ジョブの失敗を許可するには、ジョブに `allow_failure` 属性を追加します。テストジョブが次のコードのようになるよう `allow_failure` 属性を追加します:

    ```yaml
    test go:
      stage: test
      script: go test array/ArrayUtils
      allow_failure: true
    ```

1. これを確認するために、常に失敗する新しいテストを追加してみましょう。テストの書き方がわからない場合は、`ArrayUtils_test.go` ファイルを編集して次のコードをコピーしてください。

    ```go
    package ArrayUtils

    import(
      "testing"
    )

    func TestArraySearch(t *testing.T){
      var a = []int{1,2,3}
      var result bool 
      
      result = SearchArray(a,3)

      if !result{
        t.Fatalf("Expected to find value!");
      }
      
      result = SearchArray(a,5)

      if result{
        t.Fatalf("Expected to not find value!");
      }

      result = SearchArray(a,7)

      if !result{
        t.Fatalf("Expected to find value!");
      }

    }
    ```

    この例では、最後のテストが配列に存在しない値を検索しているにもかかわらず、値が見つかることを期待しています。誤った結果を期待しているため、このテストは常に失敗します。

1. **Commit changes** を選択し、`failable-tests-branch` という新しいブランチに変更をコミットします。マージリクエストなしでコードをコミットします。

1. テストジョブの進捗を監視します。

    > テストジョブが完了すると、ジョブが失敗したことがわかります。失敗した場合、赤いバツ印ではなく黄色い感嘆符が表示されます。これはジョブが警告として失敗したことを示し、後続のステージが実行されることを意味します。失敗があっても次のステージが実行されることを確認できます。

1. **Build > Jobs** に移動します。テストジョブが `Allowed to fail` としてタグ付けされているのが確認できます。これにより、パイプライン内でジョブが失敗を許可されているかどうかを簡単に確認できます。

## まとめ

自動テストを実装したことで、チームは「うまくいくといいな」から「うまくいくことがわかっている」デプロイメントに移行しました。ユニットテストがすべてのコードコミットで自動的に実行されるようになり、コードがビルドステージに到達する前に論理エラーやエッジケースをキャッチします。テストステージはパイプラインの最初に実行されるため、壊れたコードが不必要なビルドやリリースにリソースを無駄にすることがなくなります。チームが実験的または重要でないテストに `allow_failure` 属性を導入したことで、柔軟性が向上しました。オプションのテストが失敗してもパイプラインを完了させながら、警告インジケーターを通じて潜在的な問題の可視性を維持できるようになりました。

## ラボガイド完了

このラボ演習が完了しました。[このコースの他のラボガイド](/handbook/customer-success/professional-services-engineering/education-services/ilt-labs/gitlabcicdhandson)を参照できます。

## ご提案について

ラボに変更を加えたい場合は、マージリクエスト経由で変更を送信してください。
