---
title: CustomerDot アカウント関連の問題
category: CustomersDot
description: 社内リクエストでカスタマーコンソールを使うのは、既存ツールでは対応できない特殊なケースに限られます。
upstream_path: /handbook/support/license-and-renewals/workflows/customersdot/customerdot_account/
upstream_sha: 6c73093986242c762a8f4a2769fbfba69b31fcf9
translated_at: "2026-05-08T13:00:00Z"
translator: claude
stale: false
---

## 概要

顧客がアカウントへのアクセスに問題を抱えていることがあります。
CustomersDot のメールとパスワードによるログインは非推奨になりました。
代わりに、顧客は [次の手順](https://docs.gitlab.com/subscriptions/customers_portal/#sign-in-to-customers-portal) に従ってワンタイムサインインリンクでログインできます。

### 1. パスワードリセットしても顧客がサインインできない

これはパスワードリセットメールが [https://**gitlab.com**/users/password/new](https://gitlab.com/users/password/new) からリクエストされたためかもしれません。
mailgun のログを検索して確認できます。パスワードリセットメールを特定するには:

1. ご自身のアカウントで Mailgun にログインします
1. 左パネルで `Sending` を展開し、`Logs` に移動します
1. 左上で `Domain` ドロップダウンをクリックして `mg.gitlab.com` ドメインを選び、パスワードリセットメールが GitLab.com からリクエストされたことを確認します。
1. 顧客が GitLab.com アカウントでログインできない場合は、**ワンタイムサインインリンク** を使ってログインするよう依頼します。

### 2. CustomersDot アカウントが確認 (confirmation) されていない

アカウントが確認されていない場合、顧客はログインできません。アカウントが確認されているかを確認するには:

1. 管理者アカウントで CustomerDot にサインインします
1. 顧客アカウントを見つけます
1. 顧客アカウントの `i` アイコン、またはすでにアカウントを表示中なら `Show` をクリックします
1. 確認状態は `Confirmed at` フィールドに表示されます
1. 顧客がメール／アカウントを確認していない場合、[このフォーム](https://customers.gitlab.com/customers/confirmation/new) を使って確認メールを再送し、顧客に折り返すことができます。

### 3. 顧客が別のメールアドレスでサインインしようとしている

顧客が [カスタマーポータル](https://customers.gitlab.com/customers/sign_in) アカウントと GitLab.com アカウントで異なるメールアドレスを使っている場合があります。また、顧客が異なるメールアドレス（例: `firstname_lastname@organization.com` と `firstname.lastname@organization.com`）で複数回サインアップしている可能性もあります。このようなシナリオでは、違いを顧客に説明し、GitLab サブスクリプションに使用したメールアドレスを明確にしてください。

### 4. リンクされていない CustomersDot アカウント

たとえば顧客 X が以下のいずれかの理由で `<customerX@example.com>` というメールアドレスの既存のカスタマーポータルアカウントを持っているとします:

- GitLab SSO が強制される前に手動で作成されたレガシーカスタマーポータルアカウントを持っていた
- またはセールス支援購入の一環としてアカウントが作成された

🔧 顧客 X は、[メールに送信されたワンタイムサインインリンク](https://docs.gitlab.com/subscriptions/customers_portal/#sign-in-to-customers-portal) を使って [カスタマーポータル](https://customers.gitlab.com/customers/sign_in) アカウントにログインし、[GitLab アカウントをリンク](https://docs.gitlab.com/subscriptions/customers_portal/#link-a-gitlabcom-account) する必要があります。

### 5. セールス経由の購入でリンクされていない CustomersDot アカウント

顧客 Y がセールス経由でサブスクリプションを購入したとします。署名済みのオーダーフォームには **Sold To** 連絡先のメールが `<customerY@example.com>` として記載されています。
クォートが処理されると、Zuora の [callout サービス](https://gitlab.com/gitlab-org/customers-gitlab-com/-/blob/main/doc/zuora/zuora_callouts.md#purpose) がカスタマーポータル上でアカウント作成をトリガーします。このサービスは `Sold To` 連絡先の詳細を使ってアカウントを作成します。

さまざまな理由により、作成されたカスタマーポータルアカウントは GitLab アカウントとリンクされない場合があります。
たとえば:

- サブスクリプションがまだグループに適用されていない。
- サポートが [CustomersDot サポート管理ツールの force associate 回避策](/handbook/support/license-and-renewals/workflows/customersdot/support_tools#force-associate) を使って、サブスクリプション適用に GitLab アカウントのリンクが必要な要件を回避し、その後顧客が GitLab アカウントをリンクしなかった。

🔧 顧客 Y は、[メールに送信されたワンタイムサインインリンク](https://docs.gitlab.com/subscriptions/customers_portal/#sign-in-to-customers-portal) を使って [カスタマーポータル](https://customers.gitlab.com/customers/sign_in) アカウントにログインし、[GitLab アカウントをリンク](https://docs.gitlab.com/subscriptions/customers_portal/#link-a-gitlabcom-account) する必要があります。

### 6. リンクされたアカウントのメールが異なる

顧客 Z が、既存の購入または新規アカウント作成のいずれかにより、既存のカスタマーポータルアカウント（`<customerZ@example.com>`）を持っているとします。
そして、このカスタマーポータルアカウントが、メールアドレスが `<gitlabZ@example.com>` の GitLab アカウントとリンクされている場合（`GitLab Groups` タブで確認）。
*これは別の人の GitLab アカウントかもしれませんし、顧客 Z が複数の GitLab アカウントを持っている、もしくは GitLab アカウントに複数のメールがある可能性もあります。*

🔧 顧客 Z は [カスタマーポータル](https://customers.gitlab.com/customers/sign_in) アカウントにログインして、次のいずれかを行う必要があります:

- [リンク済み GitLab アカウントを変更](https://docs.gitlab.com/subscriptions/customers_portal/#change-the-linked-account) して、メールが `<customerZ@example.com>` の GitLab アカウントに切り替える
- またはカスタマーポータルアカウントのメールを、リンク済み GitLab アカウントのメール `<gitlabZ@example.com>` に合わせて更新する

CustomersDot アカウントのメールと GitLab アカウントのメールを 1 対 1 で対応させるよう努めているため、顧客の請求アカウントに複数の CustomersDot アカウントを追加することを提案するのも検討してください。

この場合、次の手順を推奨できます:

1. メール `<customerZ@example.com>` の CustomersDot アカウントから、メール `<gitlabZ@example.com>` の GitLab アカウントのリンクを解除します。
2. 顧客は次に、メール `<gitlabZ@example.com>` の GitLab アカウントを使って CustomersDot アカウントを作成します。
3. メール `<gitlabZ@example.com>` の新しい CustomersDot アカウントを請求アカウントに追加します。
4. さらに、顧客はメール `<customerZ@example.com>` の GitLab アカウントを作成して、[メール `<customerZ@example.com>` の CustomersDot アカウントにリンク](https://docs.gitlab.com/subscriptions/customers_portal/#link-a-gitlabcom-account) することもできます。

### 7. 顧客の GitLab.com アカウントがパスワード無効化されたエンタープライズユーザーである

ユーザーが [エンタープライズユーザー](https://docs.gitlab.com/user/enterprise_user/#restrict-authentication-methods) のクレームを持つ組織の一員である場合、その名前空間に所属しておらず SAML でセットアップされていなければ、自身の GitLab.com アカウントにアクセスできない可能性があります。GitLab.com アカウントを作成することはできますが、その後ログインしたりパスワードリセットを受け取ったりすることができません。

カスタマーポータルにアクセスするには、[レガシーログイン](https://customers.gitlab.com/customers/sign_in?legacy=true) を使う必要があります。

- カスタマーポータルアカウントを持っていない場合、レガシーログインは機能しません。これは、[sold to 連絡先を変更する](/handbook/support/license-and-renewals/workflows/customersdot/associating_purchases/#update-zuora-sold-to-contact-using-customersdot) を使って一時的に該当ユーザーのメールアドレスに変更し、その後元の連絡先に戻すことで対応できます。
