---
title: 'プロジェクトのセットアップ'
description: 'プロジェクトのセットアップに関するドキュメント'
upstream_path: "/handbook/eta/css/gitlab/project-setup/"
upstream_sha: "1312dadbdf7381446077faefcfae17ba323692b6"
translated_at: "2026-07-19T08:28:00+09:00"
translator: codex
stale: false
lastmod: "2026-07-14T15:22:25-05:00"
---

このページでは、Customer Support Systems 向けの新しい GitLab プロジェクトを作成および設定する完全なプロセスについて説明します。

{{% alert title="警告" color="warning" %}}

- 新しいプロジェクトを作成するすべての Customer Support Systems チームメンバーは、プロジェクトが安全かつ保守可能な方法で正しくセットアップされるよう、このプロセスに従う必要があります。
- 対応するリクエスト Issue（Feature Request、Administrative、Bug など）が存在する場合にのみ実行してください。存在しない場合は、まず作成し（対応する前に標準プロセスを通過させます）。

{{% /alert %}}

## プロセス

プロセスは 7 つのステップで構成されます。

1. プロジェクトを作成する
1. プロジェクト設定を調整する
1. 適切なグループを招待する
1. 初期ファイルを追加する
1. CI/CD 変数をセットアップする
1. 追加要件を設定する（必要な場合）
1. プロジェクトを文書化する

### ステップ 1 - プロジェクトを作成する

ここからプロジェクト自体を作成します。その際、次の事項を考慮する必要があります。

- プロジェクトの場所
- プロジェクトの名前
- プロジェクトのスラッグ

#### プロジェクトの場所

プロジェクトを作成するには、プロジェクトを置く_場所_を把握する必要があります。可能な場合は、類似するプロジェクトをまとめます。これにより、多くの場合、プロジェクトを配置する既存のサブグループを見つけられます。

たとえば、Zendesk Global 用の同期リポジトリを作成する場合、次の理由からサブグループ `gitlab-support-readiness/zendesk-global` 内に配置します。

- Customer Support Systems の非公開プロジェクトであるため（私たちのプライベートネームスペース `gitlab-support-readiness` 内）
- Zendesk Global に関連するため（サブグループ `zendesk-global` 内）

作成する同期リポジトリがチケット属性またはメタデータ（チケットフォーム、チケットフィールドなど）に関連する場合は、`gitlab-support-readiness/zendesk-global/tickets` サブグループ内に作成します。

プロジェクトを配置する既存のサブグループが見つからない場合は、チームに相談して、プロジェクトを作成する最適な場所を決定してください。

#### プロジェクトの名前

プロジェクトを作成するときは、簡潔で自己説明的な名前を目指す必要があります。このためには、[場所](#location-of-the-project)を活用します。

たとえば、Zendesk US Government のチケット処理を扱うプロジェクトを作成する場合、[場所](#location-of-the-project)を決定することで、サブグループ `gitlab-support-readiness/zendesk-us-government/tickets` 内に置かれることが分かります。これが分かれば、場所のパスから Zendesk US Government のチケットに関連していることがすでに分かるため、プロジェクト名は単に `Processor` とできます。

プロジェクト名に迷う場合は、チームに相談して使用する最適な名前を決定してください。

#### プロジェクトのスラッグ

[名前](#name-of-the-project)を決定するときと同様に、スラッグもパスと組み合わせて、簡潔で自己説明的なものにします。ほとんどの場合、GitLab が生成するスラッグでこの目的を満たせます。

プロジェクトのスラッグに迷う場合は、チームに相談して使用する最適なスラッグを決定してください。

### ステップ 2 - 設定を調整する

プロジェクトを作成したら、次のように設定を手動で調整する必要があります。

<details>
<summary>一般</summary>

- 可視性、プロジェクト機能、権限
  - プロジェクトの可視性: Private
  - 追加オプション
    - [x] メディアファイルの閲覧に認証を必須にする
  - Issues: 無効
  - リポジトリ: 有効
    - マージリクエスト: 有効
    - フォーク: 無効
    - Git Large File Storage (LFS): 無効
    - CI/CD: 有効
  - コンテナレジストリ: 無効
  - 分析: 無効
  - 要件: 無効
  - Security and Compliance: 無効
  - Wiki: 無効
  - Snippets: 有効
  - パッケージレジストリ: 無効
  - モデル実験: 無効
  - モデルレジストリ: 無効
  - Pages: 無効
  - 監視: 無効
  - 環境: 無効
  - 機能フラグ: 無効
  - インフラストラクチャ: 無効
  - リリース: 無効
  - メール通知
    - [x] メール通知を有効にする
      - [x] 差分プレビューを含める
    - [x] デフォルトの絵文字リアクションを表示する
    - [x] Potentially Unwanted Characters について警告する
  - CI/CD Catalog プロジェクト: 無効
- バッジ
  - なし
- GitLab Duo
  - GitLab Duo: 有効
  - フロー実行を許可: 有効
- Service Desk
  - 無効

</details>
<details>
<summary>統合</summary>

- なし

</details>
<details>
<summary>Webhook</summary>

- なし

</details>
<details>
<summary>アクセストークン</summary>

- なし

</details>
<details>
<summary>リポジトリ</summary>

- ブランチのデフォルト
  - デフォルトブランチ: master
  - [x] デフォルトブランチで参照された Issue を自動クローズする
- ブランチルール
  - すべてのブランチ
    - コミットを squash: 必須
  - master
    - CODEOWNERS の承認が必要
    - マージを許可: Developers+Maintainers
    - プッシュとマージを許可: 1 ユーザー
      - **注記**: ここでの 1 ユーザーは `gl-support-bot` ユーザーです。
- プッシュルール
  - [ ] 未検証ユーザーを拒否する
  - [ ] 一貫性のないユーザー名を拒否する
  - [ ] 署名されていないコミットを拒否する
  - [ ] DCO 認定されていないコミットを拒否する
  - [ ] git push による Git タグの削除をユーザーに許可しない
  - [ ] コミット作成者が GitLab ユーザーかどうかを確認する
  - [ ] シークレットファイルのプッシュを防止する
  - コミットメッセージで必須の式: 空白
  - コミットメッセージで拒否する式: 空白
  - ブランチ名: 空白
  - コミット作成者のメールアドレス: 空白
  - 禁止ファイル名: 空白
  - 最大ファイルサイズ（MB）: 0
- リポジトリのミラーリング
  - なし
- 保護ブランチ
  - master
    - マージを許可: Maintainers
    - プッシュとマージを許可: GitLab Support Bot
    - 強制プッシュを許可: 無効
    - コードオーナーの承認: 有効
- 保護タグ
  - なし
- デプロイトークン
  - なし
- デプロイキー
  - なし

</details>
<details>
<summary>マージリクエスト</summary>

- マージリクエスト
  - マージ方法: マージコミット
  - マージオプション
    - [ ] マージ結果パイプラインを有効にする
      - 注記: まれに有効になる場合がありますが、デフォルトでは決して有効にしません。
    - [ ] 古くなったマージリクエストの差分スレッドを自動解決する
    - [x] コマンドラインからプッシュするときに、マージリクエストを作成または表示するリンクを表示する
    - [x] デフォルトで「ソースブランチを削除」オプションを有効にする
  - マージ時にコミットを squash: 必須
  - マージチェック
    - [x] パイプラインが成功する必要がある
      - 注記: これはプロジェクトテンプレートのタイプにより異なります。
    - [x] すべてのスレッドを解決する必要がある
    - [ ] ステータスチェックが成功する必要がある
  - ステータスチェック
    - なし
  - マージ候補: 空白
  - マージコミットメッセージテンプレート

    ```plaintext
    Merge branch '%{source_branch}' into '%{target_branch}'

    %{title}

    %{issues}

    See merge request %{reference}
    ```

  - squash コミットメッセージテンプレート

    ```plaintext
    %{title}
    ```

  - マージリクエストのデフォルト説明テンプレート: 空白
- マージリクエスト承認
  - Coverage-Check: 無効
  - 最低必要承認数: 0
  - 承認設定
    - [x] 作成者による承認を防止する
    - [x] コミットを追加したユーザーによる承認を防止する
    - [x] マージリクエストでの承認ルールの編集を防止する
    - [ ] 承認にユーザーの再認証（パスワードまたは SAML）を必須にする
  - コミットが追加されたとき: すべての承認を削除
- マージリクエストのブランチワークフロー
  - なし

</details>
<details>
<summary>CI/CD</summary>

- 一般パイプライン
  - [x] プロジェクトベースのパイプライン可視性
  - [x] 冗長なパイプラインを自動キャンセルする
  - [x] 古くなったデプロイジョブを防止する
    - [x] デプロイジョブが古くなっている場合でも、ジョブの再試行を許可する。
  - [x] 保護ブランチ用に別々のキャッシュを使用する
  - パイプラインまたはジョブをキャンセルするために必要な最小ロール: Developer
  - CI/CD 設定ファイル: 空白
  - Git 戦略: git fetch
  - Git 浅いクローン: 20
  - タイムアウト: 15m
    - **注記**: プロジェクトが実際に行う内容に応じて、これを調整する必要がある場合があります。
  - 自動パイプラインクリーンアップ: 5d
- Auto DevOps
  - [ ] デフォルトで Auto DevOps パイプラインを使用する
- 保護環境
  - なし
- パイプライントリガートークン
  - なし
- 自動デプロイロールバック
  - [ ] 自動ロールバックを有効にする
- デプロイフリーズ
  - なし
- ジョブトークンの権限
  - 承認されたグループとプロジェクト: このプロジェクトおよび許可リスト内のすべてのグループとプロジェクトのみ
  - CI/CD ジョブトークン許可リスト
    - リストにはプロジェクト自体のみを含める必要があります。
  - このプロジェクトからのアクセスを制限（非推奨）: 無効
  - 既存プロジェクトをスコープに追加
    - リストにはプロジェクト自体のみを含める必要があります。
- セキュアファイル
  - なし
- パイプラインサブスクリプション
  - サブスクリプション
    - なし
  - このプロジェクトをサブスクライブ済み
    - なし

</details>
<details>
<summary>監視</summary>

- エラートラッキング
  - エラートラッキングを有効にする
    - [ ] Active
  - エラートラッキングバックエンド: GitLab
- アラート
  - なし
- インシデント
  - Active: 無効
- ステータスページ
  - [ ] Active
  - ステータスページ URL: 空白
  - S3 バケット名: 空白
  - AWS リージョン: 空白
  - AWS アクセスキー ID: 空白
  - AWS シークレットアクセスキー: 空白

</details>

### ステップ 3 - 適切なグループを招待する

新しいプロジェクトの設定を調整した後、適切なグループをメンバーとして招待する必要があります。継承の設定により、プロジェクトの_アクセス_はグループメンバーシップを通じて自動的に処理されます。そのため、これは実際には、マージリクエストの承認で [CODEOWNERS ファイル](https://docs.gitlab.com/user/project/codeowners/)が使用する対象に関するものです。

- Customer Support Systems のリーダーシップを必要とする対象に関するプロジェクトには、[gitlab-support-readiness/cust_support_ops_critical_access](https://gitlab.com/gitlab-support-readiness/cust_support_ops_critical_access) を招待します。
- 米国市民権を_必要とする_プロジェクトには、[gitlab-support-readiness/cust_support_ops_team_us_citizens](https://gitlab.com/gitlab-support-readiness/cust_support_ops_team_us_citizens) を招待します。
  - **注記** 特定の市民権を必要とするプロジェクトがないよう努めるべきです。プロジェクトで市民権が必要な場合は、プロジェクト内の何らかの出力（コード、CI/CD など）に市民権で保護されるデータが含まれていることを示します。常に回避できるわけではありませんが、gitlab.com 内に市民権で保護されるデータを_含めない_よう常に努めてください。
- その他の場合は、[gitlab-support-readiness/cust_support_ops_team](https://gitlab.com/gitlab-support-readiness/cust_support_ops_team) を招待します。

招待するグループに迷う場合は、チームに支援を求めてください。

### ステップ 4 - ファイルを追加する

このステージでは、プロジェクトにファイルを追加するための初回コミットを行います。追加する必要がある正確なファイルは、プロジェクトの目的（およびその機能）に応じて異なります。プロジェクトのセットアップ方法に沿うよう、さまざまなファイルについて以下のガイドラインを確認してください。

- `.gitlab/CODEOWNERS`
  - 内容は使用するコードに応じて異なりますが、常に次を開始点とします。

  ```plaintext
  [Customer Support Systems]
  * @GROUP_TO_INVITE
  ```

  - `GROUP_TO_INVITE` の値の詳細については、[ステップ 3](#step-3---invite-the-correct-groups)を参照してください。
- `bin/post_in_slack.sh`
  - このファイルには常に実行権限を設定します。
  - このファイルの内容は常に次のとおりです。

  ```bash
  curl -ss $SLACK_URL_PIPELINE_FAIL \
    -X POST \
    -H 'Content-type: application/json' \
    --data "{\"text\": \"<$CI_PROJECT_URL|$CI_PROJECT_PATH> pipeline <$CI_PIPELINE_URL|#$CI_PIPELINE_ID> failed $DATE\", \"mrkdwn\": true }"
  ```

- `.gitlab-ci.yml`
  - 内容は使用するコードに応じて異なりますが、一般的なプロジェクトタイプでは、次の開始テンプレートを使用できます。

    <details>
    <summary>同期リポジトリ</summary>

    ```yaml
    image: "registry.gitlab.com/gitlab-support-readiness/images/ruby:3.2.2"

    stages:
    - compare
    - sync
    - notify

    before_script:
    - ruby -v
    - gem install bundler
    - bundle install

    compare:
      stage: compare
      script:
      - ./bin/compare
      rules:
      - if: $CI_PIPELINE_SOURCE == 'merge_request_event'
      retry:
        max: 2
        when:
        - runner_system_failure
        - stuck_or_timeout_failure

    sync:
      stage: sync
      script:
      - ./bin/sync
      rules:
      - if: $CI_PIPELINE_SOURCE == 'trigger'
      retry:
        max: 2
        when:
        - runner_system_failure
        - stuck_or_timeout_failure

    post_in_slack_on_failure:
      before_script: ''
      stage: notify
      when: on_failure
      image: registry.gitlab.com/gitlab-support-readiness/images/curl:latest
      script:
      - ./bin/post_in_slack.sh
    ```

    </details>
    <details>
    <summary>Zendesk アプリ</summary>

    ```yaml
    image: "registry.gitlab.com/gitlab-support-readiness/images/ruby:3.2.2"

    stages:
    - compare
    - sync
    - notify

    before_script:
    - ruby -v
    - gem install bundler
    - bundle install

    compare_instances:
      stage: compare
      script:
      - ./bin/compare_sandbox
      - ./bin/compare_production
      rules:
      - if: $CI_PIPELINE_SOURCE == 'merge_request_event'
      retry:
        max: 2
        when:
        - runner_system_failure
        - stuck_or_timeout_failure

    force_sandbox_sync:
      stage: sync
      script:
      - ./bin/sync_sandbox force
      needs: ['compare_instances']
      when: manual
      rules:
      - if: $CI_PIPELINE_SOURCE == 'merge_request_event'
      retry:
        max: 2
        when:
        - runner_system_failure
        - stuck_or_timeout_failure

    perform_sandbox_sync:
      stage: sync
      script:
      - ./bin/sync_sandbox
      rules:
      - if: $CI_PIPELINE_SOURCE == 'schedule' && $SANDBOX == 'true'
      retry:
        max: 2
        when:
        - runner_system_failure
        - stuck_or_timeout_failure

    perform_production_sync:
      stage: sync
      script:
      - ./bin/sync_production
      rules:
      - if: $CI_PIPELINE_SOURCE == 'schedule' && $SANDBOX == 'false'
      retry:
        max: 2
        when:
        - runner_system_failure
        - stuck_or_timeout_failure

    post_in_slack_on_failure:
      before_script: ''
      stage: notify
      when: on_failure
      image: registry.gitlab.com/gitlab-support-readiness/images/curl:latest
      script:
      - ./bin/post_in_slack.sh
    ```

    </details>

  - ここに何を含めるべきか迷う場合は、チームの他のメンバーに支援を求めてください。
- `.rubocop.yml`
  - このファイルの内容は、現在使用している Ruby バージョンと常に一致させる必要があります。つまり、次のとおりにします。

  ```yaml
  AllCops:
    NewCops: enable
    TargetRubyVersion: 3.2.2
  ```

- `.ruby-version`
  - このファイルの内容は、現在使用している Ruby バージョンと常に一致させる必要があります。つまり、次のとおりにします。

  ```plaintext
  3.2.2
  ```

- `Gemfile`
  - gem のリストはアルファベット順にします。
  - 必要な gem は使用するコードに応じて異なりますが、常に次を開始点とします。

  ```ruby
  # frozen_string_literal: true

  source 'https://rubygems.org'
  ```

- `README.md`
  - 正確な内容は異なりますが、README.md ファイルに次の事項が記載されていることを確認してください。
    - プロジェクト名
    - 簡単な説明
    - ファイルツリーのレイアウト
    - 要件
    - CI/CD パイプライン情報
  - ここに何を含めるべきか迷う場合は、チームの他のメンバーに支援を求めてください。

### ステップ 5 - CI/CD 変数をセットアップする

プロジェクトに必要な CI/CD 変数を設定します。多くの変数は親ネームスペースから継承されるため、プロジェクト固有の値に集中してください。

**追加する共通変数:**

- API トークンの値（例: `ZD_TOKEN`、`GL_TOKEN`、`CALENDLY_API_TOKEN` など）
- Slack Webhook（継承される `SLACK_URL_PIPELINE_FAIL` を除く）

**継承された変数を確認するには:**

1. プロジェクトで Settings > CI/CD > Variables に移動します。
1. `Inherited from group` セクションを確認して、すでに利用できる項目を確認します。
1. 親ネームスペースからすでに提供されていない変数のみを追加します。

**変数の保護:**

- 機密トークンを `Masked` としてマークします。

### ステップ 6 - 追加設定（必要な場合）

ほとんどのプロジェクトでは、ステップ 1 から 5 で十分です。ただし、一部のプロジェクトでは次のような追加設定が必要になる場合があります。

- 外部統合用の Webhook をセットアップする
- [コードを別のプロジェクトにミラーリングする](/handbook/eta/css/gitlab/mirroring)
- 外部サービス統合を設定する
- スケジュール済みパイプラインをセットアップする

追加設定が必要かどうか迷う場合は、チームに相談してください。

### ステップ 7 - 文書化する

プロジェクト作成の最終ステップは、プロジェクトに関する情報でハンドブックページを更新することです。次の事項を含めます。

- 何であるか
- 何をするか
- どのように機能するか
- 使用するデプロイ戦略の種類
- 変更方法
- トラブルシューティング情報

## プロジェクト作成後

プロジェクトを作成して文書化したら、次の状態になります。

- プロジェクトはグループメンバーシップに基づき、適切なチームメンバーがアクセス可能になります。
- CI/CD パイプラインは設定されたルールに従って実行されます。
- 変更には、CODEOWNERS の承認を伴うマージリクエストが必要です。
- プロジェクトの初期パイプラインを監視し、すべてが正しく設定されていることを確認します。
