---
title: "サービスアカウントのパーソナルアクセストークン (PAT) のローテーション"
upstream_path: /handbook/security/product-security/security-platforms-architecture/product-security-engineering/runbooks/rotate-service-account-personal-access-tokens/
upstream_sha: 1e195b58b9f249ff10bd0e705106c320fee86141
translated_at: "2026-05-09T12:40:09Z"
translator: claude
stale: false
---

## サービスアカウントのパーソナルアクセストークン (PAT) ローテーション Runbook

この Runbook は、GitLab サービスアカウントのパーソナルアクセストークン (PAT) をローテーションするためのアプローチです。これらは、レガシー PAT (より広いスコープを使用) または fine-grained PAT (特定の境界とリソースにスコープされる) として設定できます。これ以降、パーソナルアクセストークンを PAT、単数形のパーソナルアクセストークンを PAT と呼びます。

### 1. なぜこれが重要か?

- サービスアカウントは PAT が期限切れになることがあり、その結果としてリソースへのアクセスが妨げられます。これにより API アクセス、パイプライン完了、個別のジョブの正常な実行と完了がブロックされます。
- この Runbook は、この問題に新しく対面する人を、または以前にこの問題に取り組んだことがあるが詳細を忘れた人をリマインダーとして、サービスアカウントの PAT ローテーションの問題を解決しようとする際の構造化された方法として意図されています。

### 2. 前提条件は?

- 影響を受けるサービスアカウントを見つけてください。あなたまたはチームの誰かが下のスクリーンショットのようなメールを受け取ることになるはずです:

![GitLab Security Service - Architecture - Inventory PAT Email](/images/security/product-security/security-platforms-and-architecture/security-service-architecture-inventory.png)

- まだ完了していない場合、[GitLab Security Service - Architecture - Inventory's PAT expired](https://gitlab.com/gitlab-com/gl-security/product-security/product-security-engineering/product-security-engineering-team/-/issues/262) のような Issue を作成してください。
- 下のように、1Password でサービスアカウントのログイン認証情報にアクセスできるか確認してください:

![Service Account in 1Password](/images/security/product-security/security-platforms-and-architecture/service-account-1password.png)

- アクセスがない場合、この [Issue](https://gitlab.com/gitlab-com/team-member-epics/access-requests/-/issues/36630) のようなアクセスリクエスト (AR) を提出してください。

### 3. 修正手順

1. ローテーションする前に、このトークンがレガシー PAT か fine-grained PAT かを確認してください。
1. GitLab.com で個人アカウントからログアウトしていることを確認してください。
1. 1Password のサービスアカウント認証情報を使用して、それらで GitLab.com にログインしてください。
1. MFA OTP には 1Password の `one-time password` パラメーターを使用してください。
1. 下のようなサービスアカウントのプロジェクトページに到達するはずです:

    ![Service Account Landing Page](/images/security/product-security/security-platforms-and-architecture/service-account-landing-page.png)

1. サービスアカウントのアイコンを選択し、下のように `Edit Profile` をクリックしてください:

    ![Service Account Edit Profile](/images/security/product-security/security-platforms-and-architecture/service-account-edit-profile.png)

1. `User settings` の `Access tokens` をクリックしてください:
    - **既存のトークンが fine-grained PAT で、その境界や権限を変更しない場合:** アクティブなトークンの隣で、縦の省略記号 (⋮) → **Duplicate** を選択してください。これにより、ほとんどの設定が事前に入力されたページに移動します。プロジェクト要件に応じてトークン名と有効期限を手動で調整する必要があります。標準的なトークンの有効期間は 1 年です。ステップ 8 に進んでください。
    - **そうでない場合** (レガシー PAT、または gPAT のスコープを変更する必要がある場合): `Add new token` ボタンをクリックし、ステップ 8 に進んでください。

    ![Service Account Access Token Page](/images/security/product-security/security-platforms-and-architecture/service-account-access-token-page.png)

1. 期限切れになった以前のトークンと一致する `Token name` を追加してください。この場合は `GitLab Security Service - Architecture - Inventory` です。**fine-grained PAT の場合**、Generate token のドロップダウンから "Fine-grained token" を選択してください。
1. トークンが何に使用されるかの `Description` を追加してください。
1. `Expiration Date` には未来の 365 日（最大有効期限）を設定してください。設定しない場合、レガシー PAT のデフォルトは 30 日で期限切れになります（gPAT のデフォルトは 365 日）。
1. アクセスを設定:
    - **レガシー PAT の場合:** 下の画像のように、サービスアカウントが必要とするアクセスに最も適合する `Select scopes` 権限レベル（この場合は API のみ）をクリックしてください:

    ![Service Account Personal Access Token](/images/security/product-security/security-platforms-and-architecture/service-account-personal-access-token.png)

    - **fine-grained PAT の場合:** **Boundary** (Group、Project、または User; 自動化が引き続き機能する範囲で最も制限的なものを選択) を選択し、右側のパネルでリソースごとに最小限の **permission** を選択してください。

1. `Create Token` をクリックする前に、下の画像のように、ページを下にスクロールして古いトークンを `Revoke` することを忘れないでください。ステップ 7 のインプレースの Rotate フローを使用した場合はスキップしてください。GitLab はすでに古いトークンを無効化しています。

    ![Service Account Revoke Old Personal Access Token](/images/security/product-security/security-platforms-and-architecture/service-account-revoke-old-personal-access-token.png)

1. その後、`Create token` ボタンをクリックし、新しいトークンが `Personal access tokens` ページの PAT リストにある確認を確認してください。

### 4. テスト手順

1. サービスアカウントからログアウトし、サービスアカウントの PAT に関連付けられた任意のパイプラインを再実行する権限を持つアカウントに再ログインしてください。
1. この特定のサービスアカウントについて、GitLab Inventory Builder はこのサービスアカウントの PAT を使用して API にアクセスします。
1. そのため、トークンエラーで以前に失敗していたそのリポジトリのパイプラインジョブを再実行することで、下の画像のように PAT ローテーションが成功したことを実証しました:

    ![GitLab Inventory Builder Weekly - Monday mornings Pipeline Build](/images/security/product-security/security-platforms-and-architecture/gitlab-inventory-builder-weekly-monday-mornings-pipeline-success.png)

1. パイプラインがパスしたら、おめでとうございます。Issue を成功で更新し、関係者に PAT ローテーションの成功を通知し、最後に関連する Issue をクローズしてください。
