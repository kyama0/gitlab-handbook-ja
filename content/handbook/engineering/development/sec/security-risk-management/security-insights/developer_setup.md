---
title: 開発者向け脆弱性管理セットアップガイド
description: "GitLab の Security Insights グループは、お客様がセキュリティリスクを効果的かつ効率的に管理できるよう支援するソリューションの開発を担っています。"
upstream_path: /handbook/engineering/development/sec/security-risk-management/security-insights/developer_setup/
upstream_sha: 3480299851f7e2243d4f08b75dac452f89929636
translated_at: "2026-04-28T08:04:29Z"
translator: claude
stale: false
lastmod: "2026-03-02T07:33:04-05:00"
---

## 要件

### GDK のセットアップ

ローカルマシンで脆弱性管理を完全に実行するには、[GDK](https://gitlab.com/gitlab-org/gitlab-development-kit/-/blob/main/doc/index.md) をセットアップする必要があります。

### ランナーのセットアップ

脆弱性レポートを表示するには、ランナーをセットアップする必要があります。以下の手順に従ってください。

1. ブラウザで `http://gdk.test:3000/gitlab-org/security-reports` に移動します。
1. 左サイドバーで `Search or go to...` ボタンをクリックし、`Admin Area` を選択します。
1. 管理エリアで、左サイドバーから `CI/CD` > `Runners` を選択します。
1. `New instance runner` > `Run untagged jobs` > `Create Runner` を選択します。
1. お使いのオペレーティングシステムを選択し、`Step 1` の指示に従います。
1. マシンで Docker が実行されていることを確認します。
1. ターミナルを開き、`gdk start` を実行します。`gdk` が起動したら、`gitlab-runner run` コマンドを実行します。
1. ブラウザに戻り、`View runners` をクリックします。ランナーがランナーリストに表示され、`Online` と表示されるはずです。
1. `http://gdk.test:3000/gitlab-org/security-reports` の `Security Reports` プロジェクトに戻ります。
1. 左サイドバーで `Build` > `Pipelines` をクリックします。パイプラインがアクティブになっているはずです。

追加の詳細やトラブルシューティングについては、公式の[ランナーセットアップガイド](https://gitlab.com/gitlab-org/gitlab-development-kit/blob/main/doc/howto/runner.md#set-up-a-runner)を参照してください。

### EE ライセンスの確認

GitLab で脆弱性レポートと脆弱性管理ツールを表示するには、Enterprise Edition [(EE) ライセンス](https://gitlab.com/gitlab-org/gitlab-development-kit/blob/main/doc/index.md#use-gitlab-enterprise-features)が必要です。このライセンスにより、EE 階層に固有の機能が有効になります。EE 開発ライセンスを生成するには、以下の手順に従います。

1. EE 開発者ライセンスをリクエストします。[ハンドブック](/handbook/engineering/workflow/developer-onboarding/#working-on-gitlab-ee-developer-licenses)の手順に従います。
1. EE ライセンスをローカル環境に追加します。[ハンドブック](https://docs.gitlab.com/ee/administration/license_file.html#add-license-in-the-admin-area)の**管理エリアでライセンスを追加する**の手順に従います。

## リソースと例

### リポジトリ

脆弱性を簡単に追加するには、[**Security Reports** プロジェクト](https://gitlab.com/gitlab-examples/security/security-reports.git)を推奨します。これをローカル GDK 環境に追加するには：

1. ブラウザで `http://gdk.test:3000/` にアクセスします。
1. `New Project` > `Import Project` > `Repository by URL` をクリックします。
1. `Git repository URL` フィールドに `https://gitlab.com/gitlab-examples/security/security-reports.git` を入力します。
1. `Project URL` の下に名前空間を追加します（例：`gitlab-org`）。
1. `Project slug` に `security-reports` と入力します。
1. `Create project` をクリックします。
