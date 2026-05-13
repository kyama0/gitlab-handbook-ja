---
title: "チャネルパートナー実装サービス"
upstream_path: /handbook/resellers/partner-enablement/partner-implementation-services/
upstream_sha: 1e195b58b9f249ff10bd0e705106c320fee86141
translated_at: "2026-05-13T00:00:00Z"
translator: claude
stale: false
---

<link rel="stylesheet" type="text/css" href="/stylesheets/biztech.css" />

## GitLab インスタンスの実装

- [GitLab Community Edition と Enterprise Edition のどちらにするか決める](#deciding-between-gitlab-community-and-enterprise-editions)
  - 最初に、お客様向けにどちらのエディションをインストールするかを決定する必要があります。以下に多くの情報があります。
- [Reference Architectures](https://docs.gitlab.com/ee/administration/reference_architectures/)
  - **このリファレンスアーキテクチャページに記載されているガイダンスを読み、理解し、従ってください。GitLab インスタンスの長期的な保守性にとって極めて重要です。**
- [GitLab Environment Toolkit (GET)](https://gitlab.com/gitlab-org/gitlab-environment-toolkit#documentation)
  - [Getting started 動画](https://partners.gitlab.com/prm/English/s/assets?id=543232&renderMode=Collection)
  - **これが GitLab をインストールする方法です。** GitLab Environment Toolkit (GET) は、リファレンスアーキテクチャに従って、スケールしたセルフマネージド GitLab 環境のデプロイを支援する、意見性のある Terraform および Ansible スクリプト群です。Quality Enablement チームによって構築され、積極的に保守されています。
- [Other Installation Methods](https://docs.gitlab.com/ee/install/install_methods.html)
  - GitLab を自動的にインストールする自動化を提供する場合は、Enterprise Edition をインストールすること、およびサポートされる構成を持つためにこれらのインストール方法論の 1 つをコアとして活用していることを確認してください。
- [Unsupported Designs](https://docs.gitlab.com/ee/administration/reference_architectures/#deviating-from-the-suggested-reference-architectures)
  - サポート要件に準拠していることを確認するため、これらのサポート対象外構成も確認してください。
- [Next Implementation Steps After Installation](https://docs.gitlab.com/ee/install/next_steps.html)
  - 製品をインストールしたら、インストールを運用上成功させるための追加ステップ（バックアップなど）を示します。
- [GitLab Performance Tool (GPT)](https://gitlab.com/gitlab-org/quality/performance)
  - インストール後に、GitLab 環境のサーバーパフォーマンスをテストするツールです。
- [Upgrading GitLab](https://docs.gitlab.com/ee/update/)
  - **アップグレードを得意になることは重要です。** GitLab は通常、メジャーリリースを毎年 5 月にスケジュールしています。GitLab はマイナーアップデートを毎月第 3 木曜日にリリースし、10 年以上にわたり毎月一貫してリリースを行っています。セキュリティパッチはより頻繁にリリースされます。GitLab.com は 1 日に複数回のアップデートがあります。
- [Upgrade Path Tool](https://gitlab-com.gitlab.io/support/toolbox/upgrade-path/)
  - [バッキングリポジトリ](https://gitlab.com/gitlab-com/support/toolbox/upgrade-path) — または右上の Tanuki アイコンをクリックします。
  - 容易にアップグレードを計画できます。この Web サイトは GitLab の更新を支援するために、サポートされるアップグレードパスを生成します。
- [Deprecations and removals by version](https://docs.gitlab.com/ee/update/deprecations.html) および [What's new since?](https://gitlab-com.gitlab.io/cs-tools/gitlab-cs-tools/what-is-new-since/?tab=features)
  - 特定の GitLab バージョンに何が含まれ、何がもう含まれていないかを把握するためにこれらのリソースを使用してください。
- [GitLab Runbooks](https://runbooks.gitlab.com/)
  - [バッキングリポジトリ](https://gitlab.com/gitlab-com/runbooks) — または右上の Tanuki アイコンをクリックします。
  - GitLab が gitlab.com をどのように運用しているかを学べます。当社のセットアップは独特で、リファレンスアーキテクチャとは異なるため、すべてがセルフマネージドインストールに直接転用できるわけではありません。それでも GitLab コンポーネントのトラブルシューティングに関する有用な情報を多数得られます。

## GitLab Runners の実装

- [GitLab Runner Overview](https://docs.gitlab.com/runner/)
  - GitLab Runner はシステムが生成する **最大のワークロード** を表します。Runner はすべての CI パイプラインを実行するソフトウェアです。固定インフラ上にデプロイすることも、クラウドプロバイダー上で自動スケール（上下とも）させることも可能です。
- [GitLab Runner Installation](https://docs.gitlab.com/runner/install/)
- [GitLab Runner Advanced Configuration](https://docs.gitlab.com/runner/configuration/)
- [GitLab Runner Fleet Scaling](https://docs.gitlab.com/runner/fleet_scaling/)
- [GitLab Runner Monitoring](https://docs.gitlab.com/runner/monitoring/) および [GitLab Runner Fleet Dashboards](https://docs.gitlab.com/ee/ci/runners/runner_fleet_dashboard.html)

## GitLab Community Edition と Enterprise Edition のどちらにするか決める

GitLab には 2 つのディストリビューションがあります。

- **Enterprise Edition (EE)**: [公式 GitLab リポジトリ](https://gitlab.com/gitlab-org/gitlab)からビルドされます。[すべてのサブスクリプション層](https://about.gitlab.com/pricing/)のコードを含み、Free のオープンソースコードと Premium および Ultimate のプロプライエタリコードの両方が含まれます。

- **Community Edition (CE)**: [GitLab のオープンソースフォーク](https://gitlab.com/rluna-gitlab/gitlab-ce)からビルドされます。上記の EE リポジトリの [MIT ライセンス](https://opensource.org/license/mit)コードのみを含み、push のたびに自動同期されます。

つまり両エディションは Free 機能の同一バージョンを含みますが、**EE のみが Premium および Ultimate 機能を含みます**。

### ディストリビューション × サブスクリプションマトリクス

このマトリクスは可能なすべての組み合わせを示します。アドオンは Premium および Ultimate サブスクリプションにのみ適用可能であるため、EE にのみ含まれます。

|        | Free   | Premium | Ultimate |
| ------ | ------ | ------  | -------- |
| CE     | x      |         |          |
| EE     | x      | x       | x        |

### 顧客にはどちらをインストールすればよいか?

#### Premium または Ultimate 顧客

選択の余地はありません。EE をインストールする必要があります。

#### Free 顧客

経験則: できない場合を除き、常に EE で進めましょう。

EE をインストールする利点:

1. Enterprise Edition はインプレースアップグレードをサポートしているため、お客様にとって推奨されるインストールオプションです。[マイグレーション](/handbook/resellers/partner-enablement/partner-migration-services/) なしで Premium または Ultimate にアップグレードできます。これにより、顧客の柔軟性が高まり、将来のスケーラビリティと要件を労なく満たせます。

2. オプションで [Registration Features Program](https://docs.gitlab.com/ee/administration/settings/usage_statistics.html#registration-features-program) を通じて Premium または Ultimate 機能の一部に無償でアクセスできます。詳細は [利用可能な機能のリスト](https://docs.gitlab.com/ee/administration/settings/usage_statistics.html#available-features) を参照してください。

**それではなぜ CE を選ぶ理由があるのか?**

社内ポリシーと互換性のあるライセンスを持つオープンソースツールの使用が義務付けられている顧客もいます。CE は極めて寛容な [MIT ライセンス](https://opensource.org/license/mit) でライセンスされているため、一般的にそのような要件を満たします。したがって CE をインストールする唯一の理由は、顧客が明示的に要求した場合です。そうでなければ EE から始めましょう。顧客が利用統計を共有しないと決めた場合でも、後から Premium または Ultimate にアップグレードするのはスイッチを切り替えるだけになります。

### 間違って違うエディションをインストールしてしまった

ご安心ください。代わりに [これらのガイド](https://docs.gitlab.com/update/#upgrading-between-editions) の 1 つに従ってください。
