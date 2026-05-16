---
title: NPM GitLab レジストリの利用
upstream_path: /handbook/support/workflows/how-to-create-npm-package/
upstream_sha: 47fdb6582389288bed0f04a23aa5d972c3ce1ff5
translated_at: "2026-05-08T00:00:00Z"
translator: claude
stale: false
lastmod: "2025-02-24T23:06:08+00:00"
---

## 概要

このワークフローの目的は、パッケージにアクセスできるようにすることで、よくある顧客のシナリオを簡単（あるいはより簡単）にテストできるようにすることです。以下に示す手順に従ってパッケージを作成するか、[こちら](https://gitlab.com/sahbabou/test-package)を利用できます。パッケージを公開する際は、正しいプロジェクト ID を参照することを忘れないでください [(ステップ 3)](#3-publishing-the-scoped-package)。

## スコープ付きパッケージの作成

- スコープ付きパッケージとは、スコープの下で利用可能なパッケージのことです（*ここで「言わなくてもわかる」ミーム挿入*）。スコープは名前空間で使用され、通常はパッケージのホスト先に応じて、組織またはユーザー名を参照します。たとえば、私がパッケージを作成して GitLab アカウントの下でホストする場合、スコープは `@sahbabou/name-of-my-package` になります。

**注:** [現在、`subgroup/project` からのパッケージ公開はサポートされていません](https://gitlab.com/gitlab-org/gitlab-ee/issues/9960)

このワークフローの目的では、パッケージはインストールされたことを確認する以外の機能は持たないため、特別な機能はありません。その結果、`package.json` ファイルだけが必要になります。

### ステップ 1: パッケージ用のディレクトリを作成

- `mkdir npm-package`

### ステップ 2: git でプロジェクトを初期化

- `git init`
- `git remote add origin <your_git_url>`

### ステップ 3: npm-package ディレクトリに移動し、組織/ユーザー名の下で npm パッケージを初期化

これにより `package.json` が作成されます

- `npm init --scope=<your_group/username>`

### ステップ 4: プロンプトの手順に従う

ライセンスやキーワードなどを追加する必要はありません。重要なのは以下の点です:

- パッケージ名が正しいスコープを持っていること
- 正しい git URL を指していること
- コマンドを尋ねられた場合、`npm start` を渡してもよく、そうでなければ `package.json` にエラーコマンドが表示されますが、現時点では問題ありません

 NOTE **注**: `package.json` の値はいつでも変更できます

1. `.npmrc` ファイルを作成・設定します

`npmrc` ファイルは、npm が設定を取得する場所の 1 つです。今回のケースでは、公式の [GitLab NPM レジストリのドキュメント](https://docs.gitlab.com/user/packages/npm_registry/)に従い、特定のスコープのパッケージを探す場所と、パッケージをプッシュ/プルするための現在のユーザーの認証情報が保持されます。

### ステップ 1: ~/.npmrc ファイルを作成

- ~/.npmrc は通常ホームディレクトリに置かれますが、プロジェクトのルートディレクトリ内に作成されることもあります。ただし、グローバルにインストールされるパッケージ（`npm install -g`）には影響しません

### ステップ 2: ~/.npmrc ファイルを設定 <a name="create-npmrc-file"></a>

- スコープにレジストリを追加して、npm が @nameofyourscope で始まるパッケージを探す場所を知るようにします。
  例:
  - `@sahbabou:registry=https://gitlab.ahbabou.com/api/v4/packages/npm`
- OAuth トークンを追加します（持っていない場合は[こちら](https://docs.gitlab.com/api/oauth2/#resource-owner-password-credentials-flow)で作成してください）。次の形式で追加します:
  - `//gitlab.ahbabou.com/api/v4/packages/npm/:_authToken=<Oauth Token>`

 NOTE **注**: これは、`npm install` を実行する際にそのリポジトリからパッケージをプルできるようにするためです。

- パッケージを公開するための URL に認証トークンを追加します:

  - `//gitlab.ahbabou.com/api/v4/projects/<project_id>/packages/npm/:_authToken=<Oauth Token>`

NOTE **注**: この特定のプロジェクトはまだインストールも公開もできません。なぜなら、パッケージに公開先を伝える必要があるためです。

## 3. スコープ付きパッケージの公開 {#3-publishing-the-scoped-package}

- `package.json` に以下を追加します:

  `"publishConfig": {
      "@your_scope:registry":"<yourgiturl>/api/v4/projects/<project_Id>/packages/npm/"
    },`

- `npm publish` を実行
- パッケージのリポジトリの Packages セクションを確認して、公開されたことを確認します

 `your-gitlab-url/package-project/-/packages`

## 4. GitLab の NPM レジストリからスコープ付きパッケージを取得

- 他の任意の npm プロジェクト（このプロジェクトを含む）から `npm install` を実行できます。または、[このプロジェクト](https://gitlab.com/sahbabou/npm-test-project)をクローンしてから、プロジェクトのディレクトリで `npm install` を実行し、パッケージをインストールできるかを確認します。

## 5. 一般的なトラブルシューティングのヒント

注: **注**: 11.9 未満の場合、[パッケージ名にドットが含まれるパッケージは npm install で 403 が返されます](https://gitlab.com/gitlab-org/gitlab-ee/issues/10248) @test.group/project は @test として読み取られます。回避策は次のいずれかです:

- グループ/ユーザー名を変更して URL にドットを含めないようにします（sara-ahbabou/saraahbabou）
- 新しいスコープでパッケージを再公開します。`package.json` の `publichConfig` の値を更新することを忘れないでください:

    `"publishConfig": {
        "@username-dash:registry":"http://localhost:3001/api/v4/projects/24/packages/npm/"
    }`

- `.npmrc` ファイルを更新して、新しいグループ名/ユーザー名を反映させます（@sara-ahbabou:registry または @saraahbabou:registry）

40x エラーが発生した場合は、`--verbose` フラグを付けて同じコマンドを再実行し、正しいレジストリにアクセスしているかを確認します

- 401: `~/.npmrc` 内の URL の末尾にスラッシュ / がないことを確認します
- 403: 適切な権限を持つ正しいトークンを使用していることを確認します
- 特に Self-Managed の場合、git リポジトリへの URL に http/https が含まれているかを再確認することも有用です
- Premium/Ultimate ライセンスを使用していることを確認してください。特に古いライセンスを使用している場合 :)

## 6. GitLab CI を介して GitLab の NPM レジストリにパッケージを公開する

ジョブ内でパッケージを公開するジョブを実行するには、以下のスニペットを `gitlab-ci.yml` に貼り付けます。ジョブを成功させるには、以下が必要です:

1. パッケージのリポジトリから実行する
1. 個人アクセストークンと OAuth アクセストークンを環境変数として追加する（このスクリプトでは、`PERSONAL_ACCESS_TOKEN` および `OAUTH_TOKEN` という名前を付けていることを前提としています）
1. コミットメッセージにパッケージのバージョンと名前が含まれるよう、`package.json` の `script` に以下の行を追加します:

  ```text
  "scripts": {
         "getName": "echo  $npm_package_name"
         "getVersion": "echo  $npm_package_version",
       }

  ```

```text
image: node:latest

# This template assumes you have the following settings configured
# OAUTH Access Token generated and added as an Environment Variable under Project -> Settings -> CI/CD https://docs.gitlab.com/api/oauth2/
# Personal Access Token added as an Environment Variable in order to update your package.json with the new version value
# Your package.json contains the path to your private NPM Registry on GitLab. https://docs.gitlab.com/user/packages/npm_registry/#uploading-packages
######
######

cache:
  paths:
    - node_modules/

build:create_npmrc:
  stage: build
  script:
    - |
      if [ ! -f .npmrc ]; then echo .npmrc missing. Creating one now. Please review the following link for more information https://docs.gitlab.com/user/packages/npm_registry/#authenticating-with-an-oauth-token;
          export NPM_PROJECT_URL=$(echo "$CI_PROJECT_URL" | sed "s/${CI_PROJECT_PATH//\//\\/}/api\/v4/g")
          export NPM_REGISTRY_PATHS=$(echo "$CI_PROJECT_URL" | sed "s/${CI_PROJECT_PATH//\//\\/}/api\/v4/g")
          export NPMRC_URL=$(echo "$NPM_REGISTRY_PATHS" |  sed 's/[^:]*[:]//')
          export NPMRC_INSTALL_URL=$(echo "$NPMRC_URL/packages/npm/:_authToken=$OAUTH_TOKEN")
          export NPMRC_PUBLISH_URL=$(echo "$NPMRC_URL/projects/$CI_PROJECT_ID/packages/npm/:_authToken=$OAUTH_TOKEN")
          export NPM_SCOPE=$(echo "$CI_PROJECT_PATH" | sed 's/[/].*$//')
          echo "@$NPM_SCOPE:registry=$NPM_REGISTRY_PATHS/npm/" >> .npmrc
          echo "$NPMRC_INSTALL_URL" >> .npmrc
          echo "$NPMRC_PUBLISH_URL" >> .npmrc
      fi
  artifacts:
    paths:
      - .npmrc
    expire_in: 1 week

build_package:
  before_script:
    - 'which ssh-agent || ( apt-get update -y && apt-get install openssh-client -y )'
    - eval $(ssh-agent -s)
    - ssh-add <(echo "$GIT_SSH_PRIV_KEY")
    - git config --global user.name "${GITLAB_USER_NAME}"
    - git config --global user.email "${GITLAB_USER_EMAIL}"
    - mkdir -p ~/.ssh
    - ssh-keyscan my-gitlab-machine >> gitlab-known-hosts
    - cat gitlab-known-hosts >> ~/.ssh/known_hosts
  script:
    - npm version minor --git-tag-version=false
    - npm publish
    - git status
    - git add package.json
    ## You can add a getName and getVersion key under scripts in your package.json to return the name and version of your package and add it to the commit message
    #
    # "scripts": {
    #     "getVersion": "echo  $npm_package_version",
    #     "getName": "echo  $npm_package_name"
    #   },
    - git commit -m "[ci skip] updated $(npm run getName -s) version to $(npm run getVersion)
    - git push -o ci.skip http://<USERNAME>:<$PERSONAL_ACCESS_TOKEN>@gitlab.example/username/project_name.git HEAD:master
  dependencies:
    - build:create_npmrc
```
