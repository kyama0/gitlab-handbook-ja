---
title: "GitLab Advanced CI/CD - ハンズオンラボ: ビルドパイプラインの最適化"
description: "このハンズオンガイドでは、ビルドパイプラインの最適化について説明します"
upstream_path: /handbook/customer-success/professional-services-engineering/education-services/ilt-labs/advgitlabcicdhandsonlab2/
upstream_sha: b4eeb07f0d5f46e2fc5f8572be1a2547261aed89
translated_at: "2026-04-26T00:00:00Z"
translator: claude
stale: false
lastmod: "2025-10-23T12:38:59+01:00"
---

このラボの目的は、GitLab CI/CD パイプラインにおけるキャッシングのメリットを実証することです。キャッシュとは、ジョブがダウンロードして保存する 1 つ以上のファイルのことです。同じキャッシュを使用する後続のジョブは、ファイルを再ダウンロードする必要がないため、より迅速に実行されます。キャッシュはアーティファクトとは異なり、GitLab には保存されません。

> 完了までの推定時間: 15 分

## 目標

このラボの目標:

- キャッシングのメリットを示す

## タスク A. 基本的なパイプラインを作成する

まず、パイプラインビルドのデモに使用する基本的な `Node.js` アプリケーションを作成します。

1. ILT グループ（"My Test Group - XXXXXXXX" という名前で、X がユーザー名に置き換えられます）に移動してください。

1. **New project** を選択してください。

1. **Create blank project** を選択してください。

1. プロジェクト名を **Node** に設定し、その他のオプションはすべてデフォルトのまま **Create project** を選択してください。

1. このプロジェクトで、**+ > New file** を選択してください。

1. ファイル名を `index.js` に設定し、次のコードを追加してください:

      ```js
      module.exports.binarySearch = function binarySearch(arr, val) {
          let start = 0;
          let end = arr.length - 1;
          while (start <= end) {
              let mid = Math.floor((start + end) / 2);
              if (arr[mid] === val) {
                  return mid;
              }
              if (val < arr[mid]) {
                  end = mid - 1;
              } else {
                  start = mid + 1;
              }
          }
          return -1;
      }

      module.exports.linearSearch = function linearSearch(arr, val){
        let index = 0;
        let found = false;
        while (!found && index < arr.length){
          if (arr[index] == val){
              found = true;
          }else{
            index += 1;
          }
          }

          if (!found){
              index = -1;
          }

        return index;
      }
      ```

      > このコードは単純な二分探索で、ソートされた配列の中から値を検索し、値が配列に存在する場合はそのインデックスを、見つからない場合は -1 を返します。

1. **Commit changes** を選択し、適切なコミットメッセージを追加して **Commit changes** を選択してください。

      Node プロジェクトを作成するには、`package.json` ファイルも作成する必要があります。

1. プロジェクトリポジトリに移動してください。

1. **+ > New file** を選択してください。

1. ファイル名を `package.json` に設定し、次のテキストを追加してください:

      ```json
      {
        "name": "ci-cd-demos",
        "version": "1.0.0",
        "description": "",
        "main": "index.js",
        "scripts": {
          "test": "echo \"Error: no test specified\" && exit 1"
        },
        "author": "",
        "license": "ISC"
      }
      ```

1. **Commit changes** を選択し、適切なコミットメッセージを追加して **Commit changes** を選択してください。

## タスク B. テストを作成する

キャッシングの概念を実証するために、アプリケーションにテストを追加してみましょう。まず、二分探索のテストを作成します。

1. コードリポジトリに移動してください。

1. **+ > New file** を選択してください。

1. ファイル名を `binarysearch.test.js` に設定し、次のコードを追加してください:

      ```js
      const {binarySearch} = require("./index.js");

      describe("Binary search tests", () => {
          test("Search should succeed on first element", () => {
              expect(binarySearch([1,2,3,4],1)).toBe(0);
          });

          test("Search should succeed on last element", () => {
              expect(binarySearch([1,2,3,4],4)).toBe(3);
          });

          test("Search should succeed on any element", () => {
              expect(binarySearch([1,2,3,4],2)).toBe(1);
          });

          test("Search should return -1 on not found", () => {
              expect(binarySearch([1,2,3,4],10)).toBe(-1);
          });

      });
      ```

1. **Commit changes** を選択し、適切なコミットメッセージを追加して **Commit changes** を選択してください。

1. 線形探索についても同様のテストセットを作成します。`linearsearch.test.js` という名前の新しいファイルを作成し、次のコードを追加してください:

      ```js
      const {linearSearch} = require("./index.js");

      describe("Linear search tests", () => {
          test("Search should succeed on first element", () => {
              expect(linearSearch([1,2,3,4],1)).toBe(0);
          });

          test("Search should succeed on last element", () => {
              expect(linearSearch([1,2,3,4],4)).toBe(3);
          });

          test("Search should succeed on any element", () => {
              expect(linearSearch([1,2,3,4],2)).toBe(1);
          });

          test("Search should return -1 on not found", () => {
              expect(linearSearch([1,2,3,4],10)).toBe(-1);
          });

      });
      ```

1. `linearsearch.test.js` ファイルをコミットしてください。

      次に、テストを定義する `.gitlab-ci.yml` ファイルを作成します。

1. プロジェクトリポジトリに移動してください。

1. **+ > New file** を選択してください。

1. ファイル名に `.gitlab-ci.yml` と入力してください。

1. ファイルに次のジョブ定義を追加してください:

      ```yml
      stages:
        - test

      default:
        image: node:latest

      test binarysearch:
        stage: test
        script:
          - npm install jest
          - node_modules/.bin/jest binarysearch.test.js

      test linearsearch:
        stage: test
        script:
          - npm install jest
          - node_modules/.bin/jest linearsearch.test.js
      ```

1. **Commit changes** を選択し、適切なコミットメッセージを追加して **Commit changes** を選択してください。

## タスク C. キャッシングを使用してジョブを最適化する

このジョブ定義のセットを確認して、より効率的にできるかどうかを見てみましょう。よくある最適化の一つは、ジョブ実行中のスクリプトの繰り返しを探すことです。この例では、両方のジョブで npm を使って `jest-junit` パッケージをインストールする必要があります。`jest-junit` を 2 回インストールする代わりに、ジョブ間でパッケージをキャッシュできます。

1. `.gitlab-ci.yml` ファイルに、次のジョブを追加してください:

      ```yml
      install deps:
        stage: deps
        script:
          - npm install jest
        cache:
          key: $CI_COMMIT_REF_SLUG
          paths:
            - node_modules
      ```

1. 次に、テストスクリプトが実行される前に依存関係がキャッシュされるよう、test ステージの前に 'deps' ステージを追加してください:

      ```yml
      stages:
        - deps
        - test
      ```

      `.gitlab-ci.yml` ファイルは次のようになります:

      ```yml
      stages:
        - deps
        - test

      default:
        image: node:latest

      install deps:
        stage: deps
        script:
          - npm install jest
        cache:
          key: $CI_COMMIT_REF_SLUG
          paths:
            - node_modules

      test binarysearch:
        stage: test
        script:
          - npm install jest
          - node_modules/.bin/jest binarysearch.test.js

      test linearsearch:
        stage: test
        script:
          - npm install jest
          - node_modules/.bin/jest linearsearch.test.js
      ```

      > この定義では、`CI_COMMIT_REF_SLUG` に一致するキーを持つキャッシュを作成します。これにより、各ジョブが一意のキャッシュを受け取ることが保証されます。キャッシュされるデータは `node_modules` フォルダーです。キャッシュを使用するためにセットアップするには、テストの実行に使用する `jest` パッケージのインストールコマンドをスクリプトで実行します。

      キャッシュが定義されたので、各ジョブから `jest` パッケージのインストールを削除できます。

1. ジョブから `npm install jest` コマンドを削除し、キャッシュ参照に置き換えてください。以下は完成した `.gitlab-ci.yml` ファイルの例です:

      ```yml
      stages:
        - deps
        - test

      default:
        image: node:latest

      install deps:
        stage: deps
        script:
          - npm install jest
        cache:
          key: $CI_COMMIT_REF_SLUG
          paths:
            - node_modules

      test binarysearch:
        stage: test
        script:
          - node_modules/.bin/jest binarysearch.test.js
        cache:
          key: $CI_COMMIT_REF_SLUG
          paths:
            - node_modules

      test linearsearch:
        stage: test
        script:
          - node_modules/.bin/jest linearsearch.test.js
        cache:
          key: $CI_COMMIT_REF_SLUG
          paths:
            - node_modules
      ```

1. 変更を `main` にコミットしてください。

1. パイプラインに移動して、テストジョブが正常に実行されることを確認してください。

## ラボガイドの完了

このラボ演習が完了しました。[このコースの他のラボガイド](/handbook/customer-success/professional-services-engineering/education-services/ilt-labs/advgitlabcicdhandson)を参照できます。

## ご提案は?

ラボへの変更をご希望の場合は、マージリクエストで変更内容を送信してください。
