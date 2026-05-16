---
title: "Jupyterガイド"
description: "JupyterLabのセットアップに関するガイダンス"
upstream_path: /handbook/enterprise-data/platform/jupyter-guide/
upstream_sha: d638a3d5418a620365f135648ea547e0992abbf1
translated_at: "2026-04-29T00:00:00Z"
translator: claude
stale: false
lastmod: "2025-10-14T17:59:32+00:00"
---

---
関連する[リポジトリ](https://gitlab.com/gitlab-data/data-science)を参照してください。

## 機能

- 最も便利な拡張機能がプリインストールされた仮想環境のJupyterLabのインストール
- 一般的なPython DS/MLライブラリ（pandas、scikit-learn、sci-pyなど）
- dbtの認証情報を使用してSnowflakeにネイティブに接続（ログイン不要）
- Git機能: JupyterLab内でGitリポジトリへのプッシュ/プル（[SSH認証情報が必要](https://docs.gitlab.com/ee/user/ssh.html)）
- ローカルマシンまたはGitLabリポジトリのいずれかからPythonファイルまたはノートブックを実行
- VS CodeでのJupyterの実行をサポート
- 使用しているが見当たらない機能が必要な場合は[#bt-data-science](https://gitlab.slack.com/archives/C027285JQ4E)でお知らせください

## はじめに

JupyterLabはローカルマシンの[仮想環境](https://docs.python.org/3/library/venv.html)で実行するように設定されています。仮想環境のセットアップを希望しない場合は、CUDAサポートのある[data science dockerイメージ](https://gitlab.com/gitlab-data/data-science/container_registry/6712928)を使用することもできます。

JupyterLabのセットアップ時に以下が行われます:

- [uv](https://astral.sh/blog/uv)は`.venv/`に必要なすべてのパッケージを含むPython仮想環境を作成・管理します。uvは非常に高速で、多くの一般的なPythonツール（pipenv、pip-compile、installなど）の優れた代替ツールです。
- uvと[pyproject.toml](https://gitlab.com/gitlab-data/data-science/-/blob/main/pyproject.toml)で定義されたPythonバージョンとパッケージを使用してPython仮想環境が作成されます
- JupyterLabはvenv内でビルドされます

## インストール手順

**注意:** このセットアップはMacOSを対象としています。コードはLinuxやWindowsでも一部の変更で動作する場合があります。

1. 前提条件 - インストール前に以下がローカルマシンにインストールされていることを確認してください:
   - [Python3.11+](https://www.python.org/)
   - [Pip3](https://pypi.org/project/pip/)（通常`pip`としてエイリアスされます）
   - [Git](https://git-scm.com/downloads/mac)
   - 特定のバージョンのMacOSはXcode Command Line Toolsのインストールが必要な場合があります。コマンドラインから`xcode-select --install`を実行してください
1. data-scienceリポジトリをローカルマシンにクローンします: `git clone git@gitlab.com:gitlab-data/data-science.git`
1. ディレクトリに移動します: `cd data-science`
1. 以下のコマンドを実行します: `make setup`。これにより以下が行われます:
   - brew、node.js、uv、および特定のPythonパッケージがローカルマシンにインストールされているか確認し、必要に応じてインストール/更新します
   - `data-science`ディレクトリに仮想環境をセットアップします
1. Jupyterを起動します
   - JupyterLabを起動するには: `make jupyter`
   - Jupyter ServerでVS Codeを起動するには: `make jupyter-vscode`、その後ターミナルの指示に従います

### Dockerから実行する

仮想環境からJupyterLabを実行することをお勧めしますが、それが常に可能とは限りません。そのような場合に使用できるDockerイメージを作成しました。

1. イメージ`registry.gitlab.com/gitlab-data/data-science/datascienceimage:latest`をコンテナマネージャー（[Rancher Desktop](https://rancherdesktop.io/)を推奨）にプルします
1. [docker-compose.yml](https://gitlab.com/gitlab-data/data-science/-/blob/main/docker-compose.yml)を使用してJupyterLabを起動します。ターミナルでローカルマシンのdata-scienceリポジトリの場所に移動し、`make jupyter-docker`と入力します
1. JupyterLabを読み込むには、ターミナルに表示されたURLを手動でコピーしてWebブラウザに貼り付ける必要があります

### ローカルディレクトリのマウント

デフォルトでは、ローカルインストールは`data-science`フォルダーをJupyterLabのルートディレクトリとして使用します。コード、データ、ノートブックが他の場所にある場合は役立ちません。変更するには、Jupyter Notebookの設定ファイルを作成して変更する必要があります:

1. ターミナルを開き、data-scienceリポジトリに移動します（例: `cd repos/data-science`）
1. `./.venv/bin/jupyter lab --generate-config`を実行すると`/Users/{your_user_name}/.jupyter/jupyter_lab_config.py`が生成されます
1. ファイルの場所を参照してテキストエディターで開きます
1. ファイル内の次の行を検索します: `#c.ServerApp.root_dir = ''`を`c.ServerApp.root_dir = '/the/path/to/other/folder/'`に変更します。不明な場合は、リポジトリディレクトリを設定します（例: `c.ServerApp.root_dir = '/Users/{your_user_name}/repos'`）。行の先頭の`#`を削除してください。
1. パスには必ずフォワードスラッシュを使用してください
1. data-scienceディレクトリから`make jupyter`を再実行すると、ルートディレクトリが上記で指定したものに変更されます

### Jupyterテンプレートの有効化

データサイエンスチームは、ゼロからPythonコードを書くことなく予測モデルを簡単に構築できるモデリングテンプレートを作成しました。これらのテンプレートを有効にするには:

- [ローカルディレクトリのマウント](/handbook/enterprise-data/platform/jupyter-guide/#mounting-a-local-directory)の一部として作成した`jupyter_lab_config.py`に以下の行を追加します（`/Users/{your_user_name}/repos/`をローカルマシンの`data-science/templates`リポジトリへのパスに置き換えます）:

```py
c.JupyterLabTemplates.template_dirs = ['/Users/{your_user_name}/repos/data-science/templates']
c.JupyterLabTemplates.include_default = False
```

- JupyterLabを起動すると、新しい*テンプレート*アイコンが表示されます。アイコンをクリックして使用したいテンプレートを選択します。
![alt text](/images/enterprise-data/platform/jupyter-guide/jupyter-screen-shot.png)

### Jupyter拡張機能のセットアップ

- data-scienceリポジトリには、[git](https://github.com/jupyterlab/jupyterlab-git)、[execute time](https://github.com/deshaw/jupyterlab-execute-time)、[system monitor](https://github.com/jtpio/jupyterlab-system-monitor)など、多くの便利なJupyterLab拡張機能がプリインストールされています。
- これらを最大限に活用するために（毎回コンテナを実行するたびに設定しなくても済むように）、次のファイルを作成します: `/Users/{your_user_name}/.jupyter/lab/user-settings/@jupyterlab/notebook-extension/tracker.jupyterlab-settings`
- そのファイル内に以下を貼り付けて保存します:

```json
{
    "codeCellConfig": {
        "codeFolding": true,
        "lineNumbers": true,
    },

    "recordTiming": true,

}
```

### 仮想環境の更新

1. data-scienceリポジトリから最新の変更をローカルマシンにプルします: `git pull`
1. ***オプション:*** `make recompile`コマンドを使用して依存関係を更新するか、`make add-packages`と`make remove-packages`を使用して依存関係を追加/削除できます
1. `make setup`を再実行します
1. `make jupyter`または`make jupyter-vscode`でJupyterLabを起動します

## Snowflakeへの接続

1. ローカルマシンに`/Users/{your_user_name}/.dbt/profiles.yml`ファイルがセットアップされていることを確認してください（パスワードを含めない）。`profiles.yml`は「ホーム」ディレクトリのこのディレクトリに配置する必要があります。参考として[サンプルプロファイル](https://gitlab.com/gitlab-data/analytics/-/blob/master/admin/sample_profiles.yml)を使用できます
1. リポジトリの[auth_exampleノートブック](https://gitlab.com/gitlab-data/data-science/-/blob/main/examples/auth_example.ipynb)を実行して、すべてが正しく設定されていることを確認します。OktaでSnowflakeの認証情報を認証するためにブラウザがリダイレクトされます。
1. エラーが発生した場合は、おそらくマシンでSnowflakeが適切に設定されていません。[データオンボーディングIssue](https://gitlab.com/gitlab-data/analytics/-/blob/master/.gitlab/issue_templates/Team%3A%20Data%20Onboarding.md)のSnowflakeとdbtのセクションを参照してください。おそらく`.dbt/profiles.yml`が正しく設定されていません。

## GitLab Model Experiments（MLFlow統合）への接続

1. GitLabのプロファイルで、API権限を持つ個人アクセストークンを作成します
1. GitLabのプロジェクトで**Settings -> General -> Visibility, project features, permissions**の下で**Model experiments**がオンになっていることを確認します
1. **Settings -> General**の下でプロジェクトのプロジェクトIDを見つけます
1. ローカルマシンで2つの新しい環境変数`MLFLOW_TRACKING_TOKEN`と`MLFLOW_TRACKING_URI`を作成する必要があります
   1. ローカルマシンのホームディレクトリにあるシェルリソースファイル（例: `.zshrc`）を開きます
   1. 次の行を追加します: `export MLFLOW_TRACKING_TOKEN="your-access-token"`
   1. プロジェクトIDを含む次の行を追加します: `export MLFLOW_TRACKING_URI="https://gitlab.com/api/v4/projects/{your-project-id}/ml/mlflow"`。また、ノートブックに直接配置することもできます。
   1. ファイルを保存します
   1. ファイルをソースします（例: `source ./zshrc`）またはターミナルを終了して再起動します
1. JupyterLabを起動します。JupyterLabで`mlflow.set_tracking_uri(os.getenv('MLFLOW_TRACKING_URI'))`コマンドで実験トラッカーを初期化できるようになります

**注意:** CIを使用してModel Experimentsに接続しようとしている場合は、[モデルトレーニングのステップバイステップ手順](/handbook/enterprise-data/platform/ci-for-ds-pipelines#model-training-step-by-step-instructions)を参照してください

## 含まれる興味深いライブラリ

### データとモデル管理

- [GitLabDS](https://pypi.org/project/gitlabds/): 一般的なEDAタスクをすばやく実行するためのツール
- [MLFlow](https://mlflow.org/docs/latest/index.html): 実験追跡とモデルレジストリ
- [Feast](https://feast.dev/): オープンソースのフィーチャーストア
- [Papermill](https://papermill.readthedocs.io/en/latest/): Jupyter Notebookのパラメーター化、実行、分析
- [interpret](https://pypi.org/project/interpret/): 解釈可能なモデル開発

### 可視化ツール

- [Plotly](https://plotly.com/python/)
- [Seaborn](https://seaborn.pydata.org/)
- [ydata-profiling](https://docs.profiling.ydata.ai/latest/): データプロファイリング

### MLライブラリ

- [Scikit-Learn](https://scikit-learn.org/stable/index.html): 一般的に使用されるアルゴリズムのスイート
- [AutoTS](https://pypi.org/project/AutoTS/): 自動時系列予測
- [XGBoost](https://xgboost.readthedocs.io/en/latest/python/python_intro.html) + [Optuna](https://optuna.org/): 自動ハイパーパラメーター最適化を備えた強力なブラックボックス法
- [Tensorflow and Keras](https://www.tensorflow.org/api_docs/python/tf): ディープラーニングとニューラルネットワーク
- [Lifelines](https://lifelines.readthedocs.io/en/latest/): 生存分析ツール
