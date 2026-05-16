---
title: "開発環境のセットアップ"
description: "プロフェッショナルサービスの開発環境セットアップに関するチュートリアル"
upstream_path: /handbook/customer-success/professional-services-engineering/development-environment/
upstream_sha: b4eeb07f0d5f46e2fc5f8572be1a2547261aed89
translated_at: "2026-04-26T03:19:14Z"
translator: claude
stale: false
lastmod: "2024-06-27T22:14:31+00:00"
---

このチュートリアルでは、プロフェッショナルサービスで使用する以下の基盤技術のセットアップ手順を説明します:

- Python
- Poetry
- Node
- NPM
- Ruby

これらのツールをパッケージマネージャーやソースからのコンパイルで直接インストールする代わりに、できる限りバージョンマネージャーを活用します。

## Pyenv を使った Python のインストール

[Pyenv](https://github.com/pyenv/pyenv) は Python のバージョンマネージャーで、シンプルな CLI を通じて 1 台のマシン上で複数の Python バージョンを管理できます。

1. Pyenv の GitHub にある [インストール手順](https://github.com/pyenv/pyenv#installation) に従ってください。
2. Pyenv のインストールが完了したら、`pyenv install 3.8` を実行します。これにより Python 3.8 と追加の Python パッケージをインストールするための Pip がインストールされます。
3. 以下のコマンドを実行して Python と pip がインストールされていることを確認します。

```bash
python3 --version
pip3 --version
```

*注: Pyenv で Python のインストール中に問題が発生した場合は、Pyenv の [一般的なビルドの問題](https://github.com/pyenv/pyenv/wiki/Common-build-problems) Wiki の記事を参照し、その後 Slack の #ps-practice でご質問ください。*

## Poetry のインストール

[Poetry](https://python-poetry.org/) は Python アプリケーション向けのデフォルトの依存関係マネージャーです。Poetry はいくつかの便利なタスクを 1 つのツールにまとめています:

- Python [仮想環境](https://python-poetry.org/docs/basic-usage/#using-your-virtual-environment)
- パッケージ [依存関係](https://python-poetry.org/docs/basic-usage/#installing-dependencies)
- PyPi への [ビルド](https://python-poetry.org/docs/cli/#build) と [パブリッシュ](https://python-poetry.org/docs/cli/#publish)
- パッケージインストール時にインストールされる [カスタムスクリプト](https://python-poetry.org/docs/pyproject/#scripts) または実行ファイル

1. Poetry の [公式インストーラー](https://python-poetry.org/docs/#installing-with-the-official-installer) を使用するか、`pip install poetry` を実行して pip でインストールします。
1. 以下のコマンドを実行して Poetry がインストールされていることを確認します。

```bash
poetry --version
# または
python3 -m poetry --version
```

## NVM を使った Node と NPM のインストール

[NVM](https://github.com/nvm-sh/nvm) は Node と NPM のバージョンマネージャーで、Pyenv と同様に単一の CLI で簡単にバージョンを最新の状態に保つことができます。

1. NVM の GitHub にある [インストール手順](https://github.com/nvm-sh/nvm#installing-and-updating) に従ってください。
2. NVM が $PATH に含まれていることを確認します。`~/.bashrc`、`~/.bash_profile` などのファイルで確認できますが、使用するシェルによってファイル名が異なる場合があります。
3. `nvm install node` を実行して Node と NPM の最新バージョンをインストールします。`nvm install 14.7.0` のようなコマンドで Node のバージョンを指定することもできます。その他の使い方は NVM README の [Usage](https://github.com/nvm-sh/nvm#usage) セクションで確認できます。
4. 以下のコマンドを実行して Node と NPM がインストールされていることを確認します:

```bash
node --version
npm --version
```

## RVM を使った Ruby のインストール

プロフェッショナルサービスでは Ruby 開発はあまり行いませんが、GitLab のコードベース自体で直接作業が必要になった場合に備えて、Ruby をインストールしておくことが重要です。

このセクションでは、Ruby のインストールを管理するための RVM のインストールのみを説明します。GitLab のコードベースで作業する場合は、[GDK](https://gitlab.com/gitlab-org/gitlab-development-kit#installation) プロジェクトとそのインストール手順を参照してください。

1. [RVM](https://rvm.io/) ウェブサイトのインストール手順に従ってください。
2. RVM が $PATH に含まれていることを確認します。
3. 以下のコマンドを実行して、GitLab の [.ruby-version](https://gitlab.com/gitlab-org/gitlab/-/blob/master/.ruby-version) ファイルに指定されている Ruby のバージョンをインストールします。

```bash
rvm install <version-specified>
```

RVM が `RVM is not a function` というエラーを表示する場合は、`/bin/bash --login` を実行する必要があるかもしれません。

## オプションの次のステップ

### サービスデリバリーワークショップ

- [マイグレーションワークショップ](https://gitlab.com/gitlab-org/professional-services-automation/tools/migration/congregate-onboarding-workshop) - Congregate を使用して 1 つの GitLab インスタンスから別のインスタンスにデータを移行する方法を学ぶ
- [GET デプロイメントワークショップ](https://gitlab.com/gitlab-org/professional-services-automation/tools/implementation/get-deployment-workshop) - GET を設定して使用し、AWS で高可用性 GitLab インスタンスを起動する

### アプリケーション固有の開発環境

- [Congregate](https://gitlab-org.gitlab.io/professional-services-automation/tools/migration/congregate/setup-dev-env/)
- [GitLab](https://gitlab.com/gitlab-org/gitlab-development-kit)
