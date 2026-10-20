---
title: Auto DevOps
description: "Auto DevOps はDevOps ベストプラクティスの自動適用を可能にするテクノロジーです。"
upstream_path: /handbook/engineering/devops/runner/environments/autodevops/
upstream_sha: 2de6fd8dc3b16760e36ce5d9b9fbfcd697d431d8
translated_at: "2026-10-20T20:57:57Z"
translator: codex
stale: false
lastmod: "2026-10-20T14:59:33+02:00"
---

## 現在のエンドツーエンドテスト

このエントリを作成した時点では、2 つのエンドツーエンドテストファイルがあります。

- [`auto_devops_templates_spec.rb`](https://gitlab.com/gitlab-org/gitlab/-/blob/master/qa/qa/specs/features/browser_ui/7_configure/auto_devops/auto_devops_templates_spec.rb)
- [`create_project_with_auto_devops_spec.rb`](https://gitlab.com/gitlab-org/gitlab/-/blob/master/qa/qa/specs/features/browser_ui/7_configure/auto_devops/create_project_with_auto_devops_spec.rb)

qa ディレクトリの [`qa/specs/features/browser_ui/7_configure`](https://gitlab.com/gitlab-org/gitlab/-/tree/master/qa/qa/specs/features/browser_ui/7_configure) フォルダ配下にあります。現在、エンドツーエンドの API ベースのテストはありません。

### テストの実行場所

#### 非隔離テストの実行環境

`Configure AutoDevOps Templates template: express|rails|spring works with Auto DevOps` テストは [`:staging`](https://ops.gitlab.net/gitlab-org/quality/staging/-/pipelines) 環境のみで実行するようにタグ付けされており、そのため以下で実行されます。

- [`staging`](https://ops.gitlab.net/gitlab-org/quality/staging/-/pipelines)
    -`qa-triggers-browser_ui-7_configure`

#### 隔離済みテスト

以下のテストは `quarantine` タグが付いている場合、これらの環境で実行されます。

`Configure AutoDevOps Templates template: express|rails|spring works with Auto DevOps`

- [`staging`](https://ops.gitlab.net/gitlab-org/quality/staging/-/pipelines)
  - `qa-triggers-browser_ui-quarantine`

## テスト実行のための GDK 設定 {#configure-your-gdk-to-run-the-tests}

[GKE クラスターで GDK を使用する方法](https://gitlab.com/gitlab-org/gitlab-development-kit/-/tree/master/doc/howto/kubernetes#use-gdk-with-a-gke-cluster) に関するドキュメントに従ってください。

注意: 以下のデフォルト手順では、開発とテストに「`gitlab-internal-153318` という GCP プロジェクト」を使用するよう規定されていますが、そのプロジェクトでクラスターを作成するには私が持っていない権限セットが必要でした。代わりに `gitlab-qa-resources` プロジェクトを使用することが私の権限セットと適合しやすいことがわかりました。

### テストの実行

`create_project_with_auto_devops_spec` テストを実行するには、GKE クラスターを実行するための GDK が設定されていることを確認し（[上記の手順](#configure-your-gdk-to-run-the-tests)を参照）、`../gitlab/qa/` ディレクトリからテストを呼び出してください。

例: `CHROME_HEADLESS=true bundle exec bin/qa Test::Instance::All https://gdk.test:3000 -- qa/specs/features/browser_ui/7_configure/auto_devops/create_project_with_auto_devops_spec.rb --tag orchestrated --tag kubernetes`

または

[オーケストレーション](https://gitlab.com/gitlab-org/gitlab-qa/-/blob/master/docs/what_tests_can_be_run.md#orchestrated-tests) を実行するには `gitlab-qa Test::Instance::Image EE -- qa/specs/features/browser_ui/7_configure/auto_devops/create_project_with_auto_devops_spec.rb --tag orchestrated --tag kubernetes`。

`auto_devops_templates_spec.rb` テストを実行するには、環境変数の設定に関する[これらの手順](https://gitlab.com/gitlab-org/gitlab-qa/-/blob/master/docs/what_tests_can_be_run.md#testinstancestaging)に従って [staging](https://staging.gitlab.com/) 環境に対してテストを実行することが最も簡単です。
注意: 1password の "QA Vault" へのアクセスが必要です。アクセスが必要な場合は、[こちら](/handbook/eta/corporate-it/end-user-services/access-requests/#individual-or-bulk-access-request)から個人アクセスリクエストを記入できます。

例: [オーケストレーション](https://gitlab.com/gitlab-org/gitlab-qa/-/blob/master/docs/what_tests_can_be_run.md#orchestrated-tests) を実行するには `gitlab-qa Test::Instance::Staging -- qa/specs/features/browser_ui/7_configure/auto_devops/auto_devops_templates_spec.rb`（隔離されたテストを実行するには `--tag quarantine` を追加してください）。

### Auto DevOps へのコントリビューションに役立つリンク

- [ヒントとトラブルシューティング](https://gitlab-org.gitlab.io/gitlab-development-kit/howto/kubernetes/tips_and_troubleshooting/)
- [便利なコマンド](https://gitlab-org.gitlab.io/gitlab-development-kit/howto/kubernetes/useful_commands/)
- [開発目的でのプレミアム機能の有効化](/handbook/engineering/workflow/developer-onboarding/#working-on-gitlab-ee-developer-licenses)
- [完全な Auto DevOps パイプラインの Grafana クエリ](https://dashboards.gitlab.net/goto/Jn7bY_aHg?orgId=1)

<sup>*</sup> `qa-mirror` でマスターパイプラインを実行している理由については、以下の Issue をご覧ください。

- [https://gitlab.com/gitlab-org/gitlab-qa/-/issues/423](https://gitlab.com/gitlab-org/gitlab-qa/-/issues/423)
- [https://gitlab.com/gitlab-org/omnibus-gitlab/-/issues/4717](https://gitlab.com/gitlab-org/omnibus-gitlab/-/issues/4717)
