---
title: "新規 GitLab.com 顧客向けクイックスタート"
description: "サブスクリプション開始時に完了すべきタスク"
upstream_path: /handbook/customer-success/customer-onboarding/
upstream_sha: b4eeb07f0d5f46e2fc5f8572be1a2547261aed89
translated_at: "2026-04-26T01:56:09Z"
translator: claude
stale: false
lastmod: "2024-08-21T16:14:24-07:00"
---
<link rel="stylesheet" type="text/css" href="/stylesheets/biztech.css" />

## 新規 GitLab.com 顧客向けクイックスタート

新しい GitLab サブスクリプションおめでとうございます！新規顧客としてのオンボーディングを成功させるために完了すべき手順をご紹介します。始める際のハブとして活用してください。

## 主要な用語

| 用語 | 定義 |
|------|----------- |
| [GitLab.com](https://gitlab.com/gitlab-org/gitlab) | マルチテナント SaaS、サブスクリプションベースの GitLab プラットフォーム |
| [Namespace](https://docs.gitlab.com/ee/user/namespace/) | 異なるプロジェクトを整理するための場所で、グループまたは個人の Namespace がある |
| [グループ](https://docs.gitlab.com/ee/user/group/) | 複数のプロジェクトとサブグループを管理できる |
| [プロジェクト](https://docs.gitlab.com/ee/user/project/) | ソースコード管理（SCM）リポジトリ |
| [メンバー](https://docs.gitlab.com/ee/user/project/members/) | グループやプロジェクトにアクセスできるユーザー |
| [Customer Portal](https://docs.gitlab.com/ee/subscriptions/customers_portal.html) | アカウント管理に関するタスク（シートや CI/CD 分の追加購入など）を完了する場所 |

## カスタマーポータルにサインインする

[カスタマーポータル](https://customers.gitlab.com)には GitLab.com アカウントでサインインできます。これは [GitLab.com](https://gitlab.com) にサインインするために使用するものと同じです。

### （オプション）サブスクリプションと請求連絡先を更新する

- サブスクリプション連絡先: サブスクリプション連絡先は、請求アカウントの主要な連絡先です。
- 請求連絡先: 請求連絡先はすべての請求書とサブスクリプションイベント通知を受け取ります。

GitLab サブスクリプションの主要な管理オーナー（サブスクリプション連絡先）または請求書の受信者（請求連絡先）を別のユーザーにしたい場合があります。[これらの手順](https://docs.gitlab.com/ee/subscriptions/customers_portal.html#subscription-and-billing-contacts)に従って、サブスクリプションと請求連絡先を編集できます。

## Namespace をサブスクリプションにリンクする

新しい GitLab サブスクリプションを使用するために、サブスクリプションをグループタイプの Namespace にリンクしてください。

[こちらの手順に従って](https://docs.gitlab.com/ee/subscriptions/gitlab_com/#change-the-linked-namespace)、サブスクリプションをグループにリンクします。

グループに移動して Settings > Billing を選択してリンクを確認します。

## （有料顧客のみ）サポート権限を確認する

サポートポータルで[アカウントが作成される](https://about.gitlab.com/support/portal/#creating-a-support-portal-account)方法がいくつかあります。サポートポータルにアクセスするには、まずパスワードのリセットを試みて、アカウントが作成されているかどうかを確認してください。あなたがサブスクリプションの指定連絡先である場合、メールでチケットを提出した場合、または組織の誰かがサポート連絡先として追加した場合、バックエンドでアカウントが作成されている可能性があります。リセット手順に従ってサインインしてください。

既存のアカウントがない場合は、手動でアカウントを作成してサインインしてください。

サポートポータルには[こちら](https://support.gitlab.com/hc/en-us)からアクセスできます。

### サポート連絡先の管理

#### チケット経由

[サポートポータル関連事項フォーム](https://support.gitlab.com/hc/en-us/requests/new?ticket_form_id=360001801419)をクリックして問題タイプとして `Manage my organization's contacts` を選択することで、チケット経由でサポート連絡先を追加できます。これは組織ごとに 30 連絡先の制限があります。同じ `Support portal related matters` フォームを使用した新しいチケットで連絡先を追加できます。

### 連絡先管理プロジェクト（CMP）経由

別の方法として、CMP の作成をリクエストしてください。このプロジェクトは、編集してサポート連絡先を追加・削除できる `contacts.yaml` というファイルを通じてサポート連絡先を管理します。開始するには、[サポートポータル関連事項フォーム](https://support.gitlab.com/hc/en-us/requests/new?ticket_form_id=360001801419)を使用して問題タイプとして `Contacts management project setup/questions` を選択してください。将来 CMP を無効にすることを選択した場合、再度有効にすることはできないことにご注意ください。

サポート連絡先の管理の詳細については[こちら](https://about.gitlab.com/support/managing-support-contacts/)をお読みください。

## GitLab グループを作成する

この時点でグループ構造を定義することをお勧めします。グループはプロジェクトのコレクションであり、プロジェクトはスタンドアロンサービスまたはマイクロサービスとして機能する個別のリポジトリです。

デフォルトでメンバーシップはネストされたサブグループとプロジェクト内のトップレベルグループから継承されるため、メンバーシップもこの時点で検討する必要があります。

### 推奨されるグループ構造の設定

組織のニーズに基づいてグループを整理する方法について、[こちら](https://docs.gitlab.com/ee/user/group/#group-structure)にいくつかの推奨モデルを詳細に記載しています。いくつかの推奨事項には、ビジネスユニット、クライアント、または機能性・アプリケーションによるグループの構造化が含まれます。

グループ構造を定義する際、各サブグループレベルでの直接メンバーシップを通じてメンバーシップをより許可的に更新できることを念頭に置いてください。

### （オプション）外部 SCM ソースからプロジェクトをインポートする

BitBucket や GitHub などの別の SCM ツールから GitLab に移行する場合、いくつかの方法があり、それぞれ異なる考慮事項があります。

サポートされているインポートソースは[こちら](https://docs.gitlab.com/ee/user/project/import/#supported-import-sources)に記載されています。

Congregate というツールを使用した移行のために、[GitLab プロフェッショナルサービス](https://about.gitlab.com/services/#migration-services)を活用することもできます。移行サービスの詳細については、Account Executive にお問い合わせください。

また、[Direct Transfer](https://docs.gitlab.com/ee/user/group/import/) を使用して GitLab インスタンス間（たとえば GitLab セルフホストから GitLab.com）でグループとプロジェクトを移行することもできます（[こちら](https://docs.gitlab.com/ee/user/group/import/#limits)に記載されているレート制限が適用されます）。

## ユーザーをプロビジョニングする

招待によって手動でユーザーを追加する代わりに、GitLab トップレベルグループの SAML SSO を設定できます。SCIM は GitLab グループへのユーザーの自動追加と削除、およびサブグループとプロジェクトを可能にします。

アイデンティティプロバイダーでユーザーを無効にしても GitLab.com のユーザーは無効化されないことに注意してください。グループへのアクセスが削除されます。

GitLab.com での設定リソース:

- [GitLab.com グループ向け SAML SSO](https://docs.gitlab.com/ee/user/group/saml_sso/)
- [GitLab.com グループ向け SCIM の設定](https://docs.gitlab.com/ee/user/group/saml_sso/scim_setup.html)

### 権限設定

[こちら](https://docs.gitlab.com/ee/user/permissions.html)に記載されている GitLab の権限を確認してください。ユーザーにアクセスを提供する際は、最小権限の原則に従うことをお勧めします。

ユーザーがトップレベルグループだけでなくサブグループとプロジェクトにも自動的に読み取り専用アクセスを持つようにしたい場合は、デフォルトロールを `Guest` に設定することをお勧めします。注: Ultimate の顧客は無制限の数の `Guest` ユーザーを持てます。デフォルトロールは Settings > SAML Single Sign On Settings > Configuration で設定できます。

ユーザーが明示的な招待なしにサブグループやプロジェクトにアクセスできないように制限したい場合は、デフォルトロールを `Minimal Access` に設定することをお勧めします。注: `Minimal Access` ユーザーは課金対象です。

#### カスタムロールを定義する

ユーザーが持てるロールをカスタマイズしたい場合があります。[こちら](https://docs.gitlab.com/ee/user/custom_roles.html#available-permissions)に記載されている任意の権限を持つ `カスタムロール` をベースロールに追加して作成できます。

グループの Owner でなければカスタムロールを定義できないことに注意してください。UI または API を通じて既存のユーザーにカスタムロールを割り当てることができます。

## ステータス更新をサブスクライブする

GitLab.com のステータスは [status.gitlab.com](https://status.gitlab.com/) で監視できます。ページの右上にある `Subscribe` ボタンをクリックして、メール、Webhook、RSS などで更新を受け取ることができます。

## 追加リソース

- [プロフェッショナルサービスカタログ](https://about.gitlab.com/services/catalog/)
- [エンタープライズ向けスタートガイド](https://about.gitlab.com/get-started/enterprise/)
- [カスタマーポータルドキュメント](https://docs.gitlab.com/ee/subscriptions/customers_portal.html)
- [GitLab SaaS 管理ウェビナー](https://www.youtube.com/watch?v=SWMD27dlnEc)
