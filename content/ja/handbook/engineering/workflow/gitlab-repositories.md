---
title: GitLab リポジトリ
upstream_path: /handbook/engineering/workflow/gitlab-repositories/
upstream_sha: 0e6f01390a34aeb6706ace17d8d3c50e74e82d0d
translated_at: "2026-04-29T00:00:00Z"
translator: claude
stale: false
---

GitLab は多くのサブプロジェクトで構成されています。GitLab プロジェクトの厳選されたリストは [GitLab エンジニアリングプロジェクト](/handbook/engineering/projects/)ページで確認できます。

## 目的

このページの目的は、組織内で GitLab リポジトリを作成・管理するための包括的なガイダンスを提供することです。すべての GitLab プロジェクトが一貫したセキュリティ、ガバナンス、運用要件に準拠するよう、標準化された手順とベストプラクティスを定めています。これらのガイドラインに従うことで、チームはリポジトリを適切に構造化し、適切なアクセス制御を実装し、必須の CI/CD 設定を構成し、コードベースとより広い GitLab エコシステムを保護するセキュリティ対策を組み込むことができます。

## 新しいプロジェクトの作成

新しいプロジェクトを作成する際は、以下のステップに従ってください:

1. [ドッグフーディング](/handbook/engineering/development/principles/#dogfooding)に関する私たちのスタンスを読んで理解してください。私たちのような人々のためのツールを構築する製品開発組織の一員として、GitLab プロジェクトに機能やツールを追加することがデフォルトです。これは労力が 2〜5 倍かかる場合でも同様です。それでも GitLab 外にプロジェクトを作成する必要があると感じる場合は、このプロセスに従って[決定を記録](/handbook/product/product-processes/dogfooding-for-r-d/)してください。
1. プロジェクトが以下のサブグループ配下にあることを確認してください:
   * アプリケーションに関連するものには [`gitlab-org`](https://gitlab.com/gitlab-org)
   * 厳密に会社関連のものには [`gitlab-com`](https://gitlab.com/gitlab-com)

   コンテキストと権限継承の複雑さを避けるため、これらのルートネームスペース直下（例: `gitlab-org/NEW_PROJECT`）にプロジェクトを作成することは推奨されません。必要な場合はメンテナーのみが作成できますが、前述の理由から避けるべきです。
   作成権限がない場合は、[アクセスリクエスト Issue](/handbook/security/corporate/end-user-services/access-requests/#individual-or-bulk-access-request) を作成し、メンテナー（[gitlab-org](https://gitlab.com/groups/gitlab-org/-/group_members?sort=access_level_desc) および [gitlab-com](https://gitlab.com/groups/gitlab-com/-/group_members?sort=access_level_desc)）に承認を求めてください。
1. プロジェクトリポジトリのデフォルトブランチ名として `main` を使用するよう設定します。
1. [`projects.yml` の GitLab プロジェクト一覧にプロジェクトを追加します](https://gitlab.com/gitlab-com/www-gitlab-com/blob/master/doc/projects.md)。
1. リポジトリにライセンスを追加してください。どのライセンスを追加するかは #legal に確認してください。サンプルライセンスはこちらです: [`gitlab-org/gitlab` MIT License](https://gitlab.com/gitlab-org/gitlab/blob/master/LICENSE)ただし使用前に法務に確認してください。
1. リポジトリの `CONTRIBUTING.md` に「Developer Certificate of Origin and License」というセクションを追加してください。[`gitlab-org/gitaly` DCO + License セクション](https://gitlab.com/gitlab-org/gitaly/-/blob/master/CONTRIBUTING.md#developer-certificate-of-origin-license)をそのままコピー&ペーストするのが最も簡単です。
1. コントリビューションガイドに関連する詳細情報を追加してください。[コントリビューション例](https://gitlab.com/gitlab-org/gitlab/blob/master/CONTRIBUTING.md)を参照してください。
1. プロジェクトの `README.md` から `CONTRIBUTING.md` へのリンクを追加してください。
1. [CODEOWNERS](https://docs.gitlab.com/ee/user/project/codeowners/) ファイルを追加して、コントリビューターが変更のレビューに最適なチームを見つけやすくしてください。
    * 時間の経過とともに自動更新され、休暇を取る人にも対応できるよう、個人ではなくチームをオーナーとして使用してください
    * 所有権をサブディレクトリや個別ファイルにスコープできますが、少なくとも新しいファイルや明示的に記載されていないファイルのトップレベルのキャッチオールを含めてください。
1. 可能であれば、プロジェクトで以下の[マージリクエスト設定を有効](https://docs.gitlab.com/ee/user/project/settings/#delete-the-source-branch-on-merge-by-default)にしてください:
    * [マージトレイン](https://docs.gitlab.com/ee/ci/pipelines/merge_trains.html)
    * [マージ後にソースブランチを削除](https://docs.gitlab.com/ee/user/project/settings/)
    * [パイプラインが成功した場合のみマージ](https://docs.gitlab.com/ee/user/project/merge_requests/auto_merge.html)
    * [すべてのスレッドが解決された場合のみマージ](https://docs.gitlab.com/ee/user/discussions/index.html#only-allow-merge-requests-to-be-merged-if-all-threads-are-resolved)
1. 可能であれば、プロジェクトで以下の[パイプライン設定を有効](https://docs.gitlab.com/ee/ci/pipelines/settings.html)にしてください:
    * [保留中のパイプラインを自動キャンセル](https://docs.gitlab.com/ee/ci/pipelines/settings.html#auto-cancel-pending-pipelines)
1. プロジェクトには、[MR 承認ルールと保護ブランチ設定の最小ベースライン設定](/handbook/security/policies_and_standards/gitlab_projects_baseline_requirements/)が必要です。
1. プロジェクトには[`ユーザーがアクセスをリクエストできる`設定を無効化](https://docs.gitlab.com/ee/user/project/members/index.html#prevent-users-from-requesting-access-to-a-project)して、意図しない外部アクセスの付与を防ぎます。
1. 必要に応じて、[デフォルトの CI/CD 設定をセットアップ](#cicd-configuration)してください。
1. プロジェクトが顧客に出荷される作業の一部である場合、そのファイルへの MR を開くか[エンジニアリングプロダクティビティの定めるプロセス](/handbook/product/groups/product-analysis/engineering/dashboards)に従って [projects_part_of_product.csv](https://gitlab.com/gitlab-data/analytics/blob/master/transform%2Fsnowflake-dbt%2Fdata%2Fprojects_part_of_product.csv) に追加してください。
1. [AppSec](/handbook/security/product-security/security-platforms-architecture/application-security/) が[新しいプロジェクトを分類](/handbook/security/product-security/security-platforms-architecture/application-security/inventory.md#how-to-categorize-projects)できるよう協力してください。
1. 適切な[セキュリティスキャナー](https://docs.gitlab.com/ee/user/application_security/)を有効にしてください。
1. Renovate へのオンボーディング（<https://gitlab.com/gitlab-org/frontend/renovate-gitlab-bot>）と、定期的に発見事項をトリアージして依存関係を更新するプロセスのセットアップをしてください。
1. リポジトリが公開の場合は、[セキュリティミラー](https://gitlab.com/gitlab-org/release/docs/blob/master/general/security/mirrors.md)を設定してください。
   これはセキュリティ脆弱性が修正される前に公開されることなく対処するために必要です。

既存のリポジトリの設定を変更する際は、[コミュニケーション](/handbook/engineering/workflow/engineering-comms/#communication)を念頭に置くことが重要です。Issue で変更を議論し、関連するチャットチャンネル（例: `#development`）でアナウンスするだけでなく、[Engineering Week-in-Review ドキュメント](/handbook/engineering/workflow/engineering-comms/#communication)でのアナウンスも検討してください。これは [GitLab](https://gitlab.com/gitlab-org/gitlab) リポジトリへの変更では特に重要です。

### CI/CD 設定 {#cicd-configuration}

以下は、`gitlab-org` および `gitlab-com` グループ配下のすべてのプロジェクトで使用すべきデフォルトの `.gitlab-ci.yml` 設定です:

``` yaml
include:
  - template: 'Workflows/MergeRequest-Pipelines.gitlab-ci.yml'

default:
  tags:
    - gitlab-org
```

stable/security ブランチをサポートする必要があるプロジェクトは、代わりに以下を使用してください:

```yaml
workflow:
  rules:
    # For merge requests, create a pipeline.
    - if: '$CI_MERGE_REQUEST_IID'
    # For `master` branch, create a pipeline (this includes on schedules, pushes, merges, etc.).
    - if: '$CI_COMMIT_BRANCH == $CI_DEFAULT_BRANCH'
    # For tags, create a pipeline.
    - if: '$CI_COMMIT_TAG'
    # For stable, and security branches, create a pipeline.
    - if: '$CI_COMMIT_BRANCH =~ /^[\d-]+-stable(-ee)?$/'
    - if: '$CI_COMMIT_BRANCH =~ /^security\//'

default:
  tags:
    - gitlab-org
```

これにより:

1. MR、`master`、タグのみでパイプラインを作成する [`workflow`](https://docs.gitlab.com/ee/ci/yaml/#workflowrules-templates) が含まれます。
1. デフォルトで使用される `gitlab-org` タグが定義されます。これはコスト最適化されたランナーに対応し、Docker サポートはありません。Docker サポートが必要なジョブは `gitlab-org-docker` タグを使用します。

Docker の使用が必要なジョブは、`gitlab-org-docker` タグを使用して特定のジョブのコンテキストのみで定義する必要があります:

``` yaml
sast:
  tags:
    - gitlab-org-docker
```

Windows の使用が必要なジョブは、Windows 上の SaaS ランナーを使用してください。正確な設定については、[Windows 上の SaaS ランナーのドキュメント](https://docs.gitlab.com/ee/ci/runners/hosted_runners/windows.html#machine-types-available-for-windows)を参照してください。

### プロジェクトの公開

プロジェクトをパッケージリポジトリに公開するには、[これらの手順](/handbook/engineering/workflow/developer-onboarding/#ruby-gems)に従ってください。

### さらなるセキュリティに関する推奨事項

1. シークレットをプレーンテキスト変数として保存したり、包括的なシークレット管理のためにマスクされた環境変数に依存したりしないでください。代わりに[外部シークレットストレージソリューション](/handbook/security/external-secret-storage)を設定してください。
1. プロジェクトの[脅威モデルの作成](/handbook/security/product-security/security-platforms-architecture/application-security/threat-modeling/howto/)を強く検討してください。
1. プロジェクトが成熟したら、[AppSec レビュー](/handbook/security/product-security/security-platforms-architecture/application-security/appsec-reviews/)のリクエストを検討してください。
1. さらなる質問については、AppSec チーム（`@gitlab-com/gl-security/appsec` および `#security_help`）に連絡してください。
