---
title: Google Workspace アプリ
upstream_path: /handbook/security/corporate/systems/google/apps/
upstream_sha: 1e195b58b9f249ff10bd0e705106c320fee86141
translated_at: "2026-05-10T00:00:00Z"
translator: claude
stale: false
---

2024-06-26 より、OAuth 経由で接続する Google Workspace アプリケーションは、事前承認なしではブロックされます。サインインのみに Google を使用する場合は、このポリシーの対象外です。

### 外部 OAuth アプリケーションを Google Workspace に追加する

アプリケーション統合の依頼は、`application_integration_request` テンプレートを使用して [こちら](https://gitlab.com/gitlab-com/gl-security/corp/issue-tracker/-/issues/new?issuable_template=application_integration_request) から提出できます。

### 内部アプリ／アプリスクリプトを Google Workspace に追加する

特に Google Doc/Sheet/Slides から実行する場合、内部用の Google Apps Script の使用がブロックされる可能性があります。スクリプトの認可を取得するには、次の手順を実行してください。

1. [Sandbox Cloud アカウント](/handbook/company/infrastructure-standards/realms/sandbox/) をまだお持ちでない場合は、[アカウント](/handbook/company/infrastructure-standards/realms/sandbox/#individual-aws-account-or-gcp-project) を作成し、GCP プロジェクトの作成を依頼してください。
1. [GCP プロジェクトにアクセスします](/handbook/company/infrastructure-standards/realms/sandbox/#accessing-your-gcp-project)
1. 新しく作成された GCP プロジェクト ({emailHandle}-{cloudAccountShortId} という形式) 内で、**OAuth consent screen** を検索します。
1. **Internal** を選択します。
1. **Create** を選択します。
1. アプリ名、サポートメール、開発者用メールを入力します。両方のメールはあなたの業務用メールにしてください。
1. **Save and Continue** を選択します。
1. **Save and Continue** を選択します（スコープを追加する必要がない場合があります）。
1. 画面左上の **Google Cloud** ロゴをクリックし、**Project ID** をコピーします。
1. 続いて Google Doc/Sheet/Slides で次を実行します:
   1. **Extensions > Apps scripts** を選択します。
   1. **Settings wheel（歯車）-> Project settings** を選択します。
   1. Google Cloud Platform (GCP) Project の見出しの下で、**Change Project** を選択し **Project ID** を貼り付けてから、**Set project** をクリックします。

#### トラブルシューティング

1. 上記を完了した後も認可エラーが続く場合:
   1. スクリプトエディタコンソールを開き、スクリプトを手動で実行します。
   1. OAuth アクセスダイアログと認可を手動で承認します。
