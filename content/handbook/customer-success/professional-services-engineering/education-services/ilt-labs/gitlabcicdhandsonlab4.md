---
title: "GitLab CI/CD - ハンズオンラボ: CI/CD コンポーネントの操作"
description: "このハンズオンガイドでは、パイプラインに CI/CD コンポーネントを追加する方法を説明します。"
upstream_path: /handbook/customer-success/professional-services-engineering/education-services/ilt-labs/gitlabcicdhandsonlab4/
upstream_sha: 6eef8dbb6a0d15167aa5378f476b04cd38b78675
translated_at: "2026-07-10T20:55:48+09:00"
translator: codex
stale: false
lastmod: "2026-07-02T13:56:51+01:00"
---

> 完了までの推定時間: 15 分

## はじめに

Tanuki Enterprises が 1 つのプロジェクトから数十のプロジェクトに拡大するにつれて、同じ CI/CD 設定をすべてのリポジトリにコピー&ペーストしていることに気づきました。問題はすぐに倍増しました:

- **設定のドリフト**: 各プロジェクトには同じジョブのわずかに異なるバージョンがあり、一貫性の維持が不可能
- **メンテナンスの悪夢**: セキュリティアップデートで設定変更が必要な場合、チームは数十の .gitlab-ci.yml ファイルを手動で更新しなければならない
- **標準化がない**: 新しいプロジェクトがゼロから構築され、各開発者が共通タスクの独自バージョンを作成している
- **知識のサイロ化**: あるチームのベストプラクティスが他のチームに伝わらない（CI/CD パターンを共有する中央の方法がないため）
- **作業の無駄**: 開発者がアプリケーションコードに集中する代わりに、パイプラインの設定に何時間も費やしている

## 目標

このラボでは、プロジェクトとチーム間で共有できる再利用可能な CI/CD コンポーネントの作成を学びます。Tanuki Enterprises がパイプライン設定を標準化し、一元管理し、アプリケーションコードと同様にバージョン管理できるコンポーネントカタログを構築します。

## タスク A. コンポーネントを作成する

GitLab プロジェクトで使用するコンポーネントを作成しましょう。

1. ページ上部のパンくずリストで **My Test Group** をクリックして移動します。

1. GitLab の **My Test Group** から **New project** ボタンをクリックします。

1. **Create blank project** タイルをクリックします。

1. プロジェクト名を `Tanuki App Component` とします。

1. 他の値はすべてデフォルトのままにして **Create project** ボタンをクリックし、GitLab が新しいプロジェクトのメインページにリダイレクトするまで待ちます。

      次に、コンポーネントの設定をセットアップする必要があります。

1. Tanuki App Component プロジェクトのリポジトリで **+** ボタンをクリックし、**New Directory** オプションをクリックします。

1. ディレクトリ名として **templates** と入力します。小文字であることを確認してください。

1. **Commit changes** ボタンをクリックして、main ブランチにコミットします。

1. 新しい templates ディレクトリにいることを確認します。**+** ボタンをクリックして **New file** ボタンをクリックします。

1. ファイル名として **sample-template.yml** と入力します。

1. ファイルの本文に次のテキストをコピーしてサンプルコンポーネントを作成します:

      ```yaml
      spec:
        inputs:
          stage:
            default: test
      ---
      component-job:
        script: echo "The Tanuki Component is live"
        stage: $[[ inputs.stage ]]
      ```

      ここでは *stage* という入力を持つコンポーネントを作成しています。stage 入力のデフォルト値は 'test' で、別のプロジェクトで上書きします。

1. **Commit changes** をクリックし、ポップアップ画面で **Commit changes** をクリックします。

      コンポーネントファイルができましたが、コンポーネントを他のプロジェクトからアクセス可能にするには、コンポーネントを公開する必要があります。プロジェクトがプライベートであるため、あなただけがアクセスできます。

## タスク B. コンポーネントを公開する

1. 左側のツールバーで **Settings > General** を選択します。

1. すべてのコンポーネントにはプロジェクトの説明が必要です。プロジェクトの説明セクションに「This component is a Tanuki App Component, and is meant for demonstration purposes only.」と入力します。

1. **Save changes** をクリックして説明を保存します。

1. **Visibility, project features, permissions** を展開します。

1. CI/CD Catalog プロジェクトのトグルをオンにします。**Save changes** をクリックします。

      これにより、プロジェクトが CI/CD Catalog プロジェクトになります。*templates* ディレクトリ内の任意のテンプレートが、リリースを作成すればすべてのプロジェクトで利用可能になります。次に、新しいカスタムコンポーネントでリリースを作成するためにコンポーネントを使用します。

1. Tanuki App Component プロジェクトのリポジトリで **+** ボタンをクリックし、**New File** オプションをクリックします。

1. ファイルのタイトルを `.gitlab-ci.yml` にします。

1. `.gitlab-ci.yml` ファイルに次のコードスニペットを追加します。

      ```yaml
      stages:
        - release
        
      release component:
        stage: release
        image: registry.gitlab.com/gitlab-org/release-cli:latest
        script:
          - echo "Releasing the latest version of our component."
        release: 
          tag_name: '1.0.$CI_PIPELINE_IID'
          description: 'The latest component release.'
        rules:
          - if: $CI_COMMIT_REF_NAME == $CI_DEFAULT_BRANCH
      ```

      このコードは以前のラボで作成したリリースジョブに似ていますが、重要な違いが 1 つあります。コンポーネントリリースはセマンティックバージョニング（Major.Minor.Patch）形式のリリースが必要です。各コミットを区別するために Patch バージョンを使用します。

1. **Commit changes** をクリックし、ポップアップ画面で **Commit changes** をクリックします。

1. パイプラインが完了するまで待ちます。

1. リリースが正常に完了したことを確認するために **Deploy > Releases** に移動して、コンポーネントのリリースバージョンを確認します。

## タスク C. 作成したコンポーネントをプロジェクトに追加する

1. 検索バーをクリックして **Explore** オプションをクリックして CI/CD Catalog に移動します。

1. 左側の **CI/CD Catalog** オプションをクリックします。

1. **Tanuki App Component** コンポーネントをクリックします。このコンポーネントはあなただけに表示されます。

1. コンポーネントの `include` ステートメントをコピーします。次のようになります:

      ```yaml

      include:
        - component: $CI_SERVER_FQDN/training-users/session-0a9ee9b9/iuhrhhmd/example-component/sample-template@v0.4.0

      ```

1. ページの左上の Tanuki ロゴをクリックして CI/CD プロジェクトに移動し、**Projects** をクリックします。CI/CD プロジェクト（コンポーネントプロジェクトではない方）をクリックします。

1. **Build > Pipeline Editor** を選択します。

1. ファイルの先頭、image の下に、先ほど作成したカスタムコンポーネントを追加します。

      `.gitlab-ci.yml` ファイルの先頭は次のようになります:

      ```yaml
      workflow:
        rules:
          - if: $CI_COMMIT_TAG
            when: never 
          - when: always

      default:
        image: golang

      include:
        - component: $CI_SERVER_FQDN/training-users/session-0a9ee9b9/iuhrhhmd/example-component/sample-template@v0.4.0
      ```

1. **Commit changes** を選択します。

1. 変更をコミットした後、コミット用に作成されたパイプラインに移動します。*component-job* という新しいジョブが表示されます。このジョブは `include` キーワードを使用してインポートしたカスタムジョブです。

1. 次のコードを `.gitlab-ci.yml` ファイルに追加して、代わりに build ステージで実行するようにステージを上書きしてみましょう:

    ```yaml
      include:
        - component: $CI_SERVER_FQDN/training-users/session-0a9ee9b9/iu6t0rjr/example-component/sample-template@v0.36.0
          inputs:
            stage: build
    ```

1. **Commit changes** を選択して、*component-job* が build ステージで実行されるのを確認します。

## まとめ

CI/CD コンポーネントを実装したことで、Tanuki Enterprises はパイプラインインフラを断片化した状態から標準化された状態に変革しました。チームはすべてのプロジェクトで再利用可能なパイプライン設定が公開、バージョン管理、共有される中央コンポーネントカタログを作成できるようになりました。セキュリティアップデートやベストプラクティスの変更が必要な場合、単一のコンポーネントを更新してバージョンを上げるだけです。プロジェクトはコンポーネント参照を更新することで自動的に改善を取得します。`inputs` 機能により、コアの標準化されたロジックを維持しながらチームが特定のニーズにコンポーネントをカスタマイズできるため、柔軟性と一貫性の理想的なバランスが取れています。このアプローチにより、新しいプロジェクトのパイプライン設定時間が 80% 削減され、すべてのリポジトリで一貫したセキュリティと品質の標準が確保され、チームが CI/CD のボイラープレートを管理する代わりに機能の構築に集中できるようになりました。

## ラボガイド完了

このラボ演習が完了しました。[このコースの他のラボガイド](/handbook/customer-success/professional-services-engineering/education-services/ilt-labs/gitlabcicdhandson)を参照できます。

## ご提案について

ラボに変更を加えたい場合は、マージリクエスト経由で変更を送信してください。
