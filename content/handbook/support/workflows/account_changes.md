---
title: ユーザーに代わって変更とアクションを実行する
category: GitLab.com
subcategory: Accounts
description: GitLab.com ユーザーに代わって変更を加えるかアクションを取るというリクエストへの対応のためのワークフロー
upstream_path: /handbook/support/workflows/account_changes/
upstream_sha: 0353e616a41b1d1664a95cc83c80b01f990a912f
translated_at: "2026-05-08T19:23:50Z"
translator: claude
stale: false
---

## 概要

このワークフローは、サポートチームが GitLab.com ユーザーに代わってアクションを実行する必要があるときのプロセスに焦点を当てています。

ユーザーに代わってアクションを実行する必要がある主な状況:

1. プロジェクト／グループの変更
1. アカウントアクセスのリクエスト
1. メールアドレスの解放
1. Enterprise ユーザーのプライマリーメール変更
1. SCIM や SAML の構成ミスによりログインできないユーザーのアカウント変更

### ユーザーアクションを最優先

[「GitLab のあなたのプライベートリポジトリへのアクセス」に関するセキュリティポリシー](https://about.gitlab.com/security/faq/) に従い、可能な限りアクションは常にユーザー自身が行うべきです。

例えば、ユーザーは自分のプロジェクトを自分で削除すべきですが、すべての試行でエラーが発生し回避策がない場合は、サポートが [許可を得て](#asking-permission) 介入できます。

判断に迷う場合は、サポートマネージャーにレビューを依頼してください。

## プロジェクト／グループの変更

サポートがトラブルシューティング目的などでプロジェクトやグループに対してアクションを取る必要がある場合、サポートは 2 つのことを行うべきです:

1. ユーザーがグループの *Owner* またはプロジェクトの *Maintainer* であることを確認します。そうでない場合、Owner／Maintainer に連絡してもらうようユーザーに依頼します。
1. アクションを取る許可を求めます。以下の [許可を求める](#asking-permission) セクションを参照してください。
1. 将来的にサポートがアクションが取られたことを知る必要があるかもしれない場合は、グループの管理ページに [Admin Note](/handbook/support/workflows/admin_note) を追加することを検討します。

Owner／Maintainer が許可を提供したら、それが希望であれば元のリクエスターと作業を続行できます。

## アカウントアクセスのリクエスト

ユーザーがアカウントへのアクセスを失った場合、まず他のすべてのオプション（SSH リカバリーコード、パスワードリセットなど）を尽くす必要があります。

未確認のアカウントの場合、サポートが通常取るアカウントアクションは [メールタイプミスの修正](/handbook/support/workflows/confirmation_emails/#typo-fix) のみです。

確認済みアカウントに対していかなるアクションを取る前にも、[アカウント所有権の確認](/handbook/support/workflows/account_verification) ワークフローを使用してアカウントオーナーを確認していることを確認してください。

所有権が確認できたら:

1. [変更の許可を確認](#asking-permission) します。
1. ユーザーのアカウントに [Admin Note](/handbook/support/workflows/admin_note) を追加します。

例:

- ユーザーアカウントに紐づいた ID の削除。これらの場合は ID も検証する必要があります。
- セキュリティメールが何らかの理由で配信できない場合などに、有償ユーザーのアカウントへのセカンダリーメールアドレスの追加。

## メールアドレスの解放

**アカウントアクセスのリクエスト** と同様に、ユーザーがアカウントへのアクセスを失い、そのアカウントの履歴に **アクティビティがない** 場合、ユーザーが新しいアカウントを作成するためにメールアドレスを解放することを検討できます。

このワークフローは、ユーザーがメールアドレスをアカウントに追加できないときにも使用できます。これは、そのメールが別のアカウントにあり、*かつ* 未検証である場合です。これは、ユーザーがシングルサインオン登録方法のいずれかを使用して誤ってアカウントを作成した、またはアカウントを作成したことを思い出せない場合によく発生します。

未検証／未確認のアカウントの詳細については、[confirmation emails](/handbook/support/workflows/confirmation_emails/) ワークフローを参照してください。

プライマリーおよびセカンダリーメールは、有償ユーザーに対してのみ、以下のいずれかのプロセスに従って解放できます。

### 未検証のセカンダリーメールアドレスの解放

1. メールアドレスが未検証のセカンダリーメールアドレスであることを確認します。
1. チケットリクエスターのメールが一致しない場合、お客様にセカンダリーメールからチケットにコメントするよう依頼してメール検証を行います。
1. ユーザーがメールアドレスを所有していることを確認するために返信したら、アカウントからセカンダリーメールを削除します
1. ユーザーのアカウントに Admin Note を追加します: `2024-01-30 | removed secondary unverified email address from the account john@xyz.com| https://gitlab.zendesk.com/agent/tickets/`
1. ユーザーに、メールアドレスが解放されたので新しいアカウントの作成に使用できると返信します。

### 非アクティブなアカウントのメールアドレスの解放

#### アカウントのステータスと所有権の確認

ユーザーのアクティビティページを確認します:

1. 任意のタイプの貢献（スニペット、プロジェクトやグループ内のコメントなど）に関連するアクティビティがアカウントに表示される場合、[アカウント所有権の確認](/handbook/support/workflows/account_verification/) ワークフローを使用して所有権を確認します。
1. アカウントに **アクティビティが表示されない** 場合:
   1. ユーザーが追加しようとしているメールアドレスが別のアカウントに存在することを確認します。
   1. アカウントに **アクティビティがなく**、いかなるプロジェクトやグループのメンバーでもないことを確認します。さらに、以下が真であることを確認します:
     - ユーザーは未検証
     - ユーザーは一度もログインしていない
     - ユーザーにデータがない（グループまたはプロジェクトがない）
1. アカウントが **検証済み** であるかデータが存在する場合、メールが解放対象 **でない** ことを元のリクエスターに伝えます。必要であれば、[アカウント削除をリクエスト](/handbook/support/workflows/personal_data_access_account_deletion#zendesk) できます。

#### メール解放の対象になる場合

1. 該当する場合、新しいメールアドレスを CC としてチケットに追加し、追加したいメールアドレスからチケットに返信するようユーザーに依頼します。
1. ユーザーがメールアドレスを所有していることを確認するために返信したら、メールアドレスを `+release` で更新します。例えば、メールアドレスが `johndoe@example.com` の場合、アカウントのメールアドレスを `johndoe+release@example.com` に更新します。
    - これは Admin アクセスまたは [Chatops 経由](/handbook/support/workflows/chatops/#user) で実行できます
    - UI を通じて解放を行う場合、元のメールをセカンダリーメールのリストから削除する必要があります。
      Chatops はこれを自動的に処理します。
1. ユーザーのアカウントに [Admin Note](/handbook/support/workflows/admin_note/) を追加します。
1. お客様に、新しく解放されたメールアドレスをプライマリーアカウントに再度追加するよう案内します。
1. [この feature request](https://gitlab.com/gitlab-org/gitlab/-/issues/352514) にコメントすることを検討します

## Enterprise ユーザーのプライマリーメールアドレスの変更

Enterprise ユーザーは [プライマリーメールアドレスを未検証ドメインのメールに変更できません](https://docs.gitlab.com/user/enterprise_user/#primary-email-change)。Enterprise ユーザーは、検証済みドメインに従って組織が所有するメールアドレスにのみプライマリーメールを変更できます。Enterprise ユーザーまたはトップレベルグループのオーナーは、プライマリーメールアドレスの変更をリクエストするためにサポートに連絡できます。
**プライマリーメールアドレスをグループドメイン検証の一部ではないメールに変更すると、[ユーザーが切り離されます](https://docs.gitlab.com/user/enterprise_user/#remove-enterprise-management-features-from-an-account)**: ユーザーは Enterprise ユーザーではなくなります。

### トップレベルグループオーナーからのリクエスト

[Issue 412966](https://gitlab.com/gitlab-org/gitlab/-/issues/412966) が実装されるまでは、トップレベルグループのオーナーは Enterprise ユーザーのプライマリーメールアドレスを変更できません。彼らはサポートに 1 人以上の Enterprise ユーザーのプライマリーメールアドレスの変更をリクエストできます。

1. [アカウント認証マトリクス](/handbook/support/workflows/account_verification#account-verification-matrix) で適格性を確認します。
1. [アカウント所有権検証ワークフロー](/handbook/support/workflows/account_verification) を使用して所有権を確認します。
1. admin アカウントから [Pages Domain API](https://docs.gitlab.com/api/pages_domains/#list-all-pages-domains) を使用して、新しいメールドメインが別のグループによって検証されているかを確認します。検証されている場合は、チケットに **内部ノート** を追加します。
1. マネージャーの承認を得て続行し、お客様に返答します:

   > Greetings,
   >
   > Thank you, we were able to verify your identity as account owner.
   >
   > Could you please confirm that you would like us to change the enterprise user primary address from example@primary-email.address to example@new-primary-email address? Replying in this ticket stating you provide permission will be sufficient.
   >
   > [**Important notice**](https://docs.gitlab.com/user/enterprise_user/#remove-enterprise-management-features-from-an-account): Changing an enterprise user's primary email to an email with a non-verified domain automatically disassociates them from their enterprise group. As a result of the change, your organization will **not** be able to manage the user account and GitLab Support will not intervene for any reason.
   >
   > **If this domain is verified by another organization:** Updating a user's primary email address to an email with a domain that is verified by another organization can result in the user being claimed as an enterprise user of the other organization. If the organization has [restricted authentication methods](https://docs.gitlab.com/user/enterprise_user/#restrict-authentication-methods), the user may lose access to their account.

1. UI と admin アカウントを使用して Enterprise ユーザーのプライマリーメールアドレスを更新し、ユーザーのアカウントに Admin Note を追加します。
1. 変更するユーザー数が手動修正には実用的でない量の場合は、[コンソールエスカレーションリクエスト](https://gitlab.com/gitlab-com/support/internal-requests/-/issues/new?description_template=GitLab.com%20Console%20Escalation) を作成し、[このスニペット](https://gitlab.com/gitlab-com/support/runbooks/-/commit/5870a924c936bf33f7f5a74e49d398b9b87de217) を使用するよう依頼することを検討します。

### グループに所属しているかもしれない／していないかもしれない Enterprise ユーザーからのリクエスト

Enterprise ユーザーは、GitLab サブスクリプションを購入した組織によって管理されるユーザーアカウントを持っています。これは、サポートがトップレベルグループのオーナーの 1 人からの明示的な許可なしにアクションを取らないことを意味します。

1. admin アカウントから [Pages Domain API](https://docs.gitlab.com/api/pages_domains/#list-all-pages-domains) を使用して、新しいメールドメインが別のグループによって検証されているかを確認します。検証されている場合は、チケットに **内部ノート** を追加します。
1. ユーザーに最初の応答を送信します:

   > Greetings,
   >
   > Your account is an enterprise user account, [enterprise users cannot modify their primary email address to an email with a non-verified domain](https://docs.gitlab.com/user/enterprise_user/#primary-email-change). An enterprise user can only change their primary email to an email their organization owns as per its verified domains.
   >
   > Updating your primary email address to an email with a non-verified domain will automatically disassociate you from your enterprise group. **If the new domain is verified by another organization** and your account meets the [criteria](https://docs.gitlab.com/user/enterprise_user/#automatic-claims-of-enterprise-users) after the email change, it will be claimed as an enterprise user of the organization that owns the new domain.
   >
   > If you still wish to update your primary email address, please note it will require involvement of a top level group owner. Please let us know if you wish to proceed.

1. 続行したいと回答した場合、[アカウント所有権検証ワークフロー](/handbook/support/workflows/account_verification) を使用して所有権を確認します。

1. プライマリーメールが唯一の検証済みメールである場合は、続行するためにマネージャーの承認を求めます（メール交換リクエストの場合はこのステップをスキップします）。

1. 成功した場合、Owner に連絡します:

- [チケットとユーザーを作成するための特定のワークフロー](/handbook/support/workflows/sending_notices#how-to-send-notices) に従って、トップレベルグループのオーナーのメールアドレス（admin で見つかる）をリクエスターとして新しい Zendesk チケットを作成します
- 新しいチケットが適切にルーティングされ、連絡したいエンドユーザーに正しい通知が送信されるよう、`General::Outbound Contact Request` マクロを適用します。
- 以下のスニペットをコピーし、チケットを `On-hold` としてマークします:

   > Hi,
   >
   > We're contacting you because we've received a request from one of your enterprise users <username and email address> to modify their primary email address to an email address with a domain that is verified by another organization. This will disassociate the user from your organization.
   >
   > **If this domain is verified by another organization:** Updating a user's primary email address to an email with a domain that is verified by another organization can result in the user being claimed as an enterprise user of the other organization. If the organization has [restricted authentication methods](https://docs.gitlab.com/user/enterprise_user/#restrict-authentication-methods), the user may lose access to their account.
   >
   > As you will lose any current and future administration of the user account following this change, we are asking for your permission.
   >
   > Replying in this ticket stating you provide permission will be sufficient.

- リクエスターのチケットへのリンクを提供する内部コメントを作成します。
- グループに複数のオーナーが含まれる場合、1 人のオーナー（できれば既存のサポート連絡先）をリクエスターとして選び、他のオーナーを CC します。5 人を超える場合は 5 人に制限します（`https://gitlab.com/groups/<group_name>/-/group_members` ページで Last activity が最も新しいオーナー、および／または Source としてリストされているオーナーを選べます）。

1. リクエスターのチケット:

   - 上記で作成したチケットへの内部コメントを追加します。
   - 以下のスニペットでリクエスターに返答し、チケットを `On-hold` としてマークします。

   > Hi,
   >
   > Thanks for verifying your account with us. We are now waiting for permission from your organization to release the account by updating your primary email address.
   > We will keep you updated.

1. オーナーの 1 人が承認した場合、該当する場合はセカンダリーと交換することで Enterprise ユーザーのプライマリーメールアドレスを更新します。
1. ユーザーのアカウントに [Admin Note](/handbook/support/workflows/admin_note) を追加します。

## アカウント所有権の変更

GitLab とビジネス関係を持つ会社から所有権の変更がリクエストされる条件があります。私たちの [サポートページ](https://support.gitlab.com/hc/en-us/articles/11626493890844-GitLab-com-Specific-Support-Policies#ownership-disputes) では、これらのプロセスは無償グループには利用できないと説明されています。

リクエストが成功した結果、ネームスペース内の新規または既存のユーザーが Owner ロールを持つことになります。

### 有償グループのアカウント所有権変更リクエスト

アカウント所有権変更リクエストは、グループの唯一のオーナーが会社を退職し、会社の権限のある代表者がコントロールを取り戻そうとする場合に開始されます。このプロセスは最後の手段であるべきで、まずセルフサービスのオプションを検討する必要があります。

**リクエストを受け取った場合、以下を確認します:**

1. 現在の有償サブスクリプションがネームスペースに適用されている。
1. 唯一のオーナーのプライマリーメールアドレスが会社のドメインと一致する。
1. リクエスターが GitLab.com アカウントを持つ。通常、このユーザーはすでにメンバーですが Owner ではありません。

**リクエスターがすべてのセルフサービスのオプションを使い切ったことを確認します:**

- 既存のオーナーのアカウントが 2FA を有効化していない場合、リクエスターに既存のオーナーのアカウントにパスワードリセットを発行し、[アカウントをクレームする](https://docs.gitlab.com/user/group/manage/#change-the-owner-of-a-group) よう提案します。
- 既存のオーナーのアカウントが 2FA を有効化している場合、リクエスターに既存のオーナーに連絡して、リクエスターがアクセスを取り戻して [アカウントをクレームする](https://docs.gitlab.com/user/group/manage/#change-the-owner-of-a-group) ためにワンタイムパスワード、バックアップコード、プライベート ssh キーを既存のオーナーから提供してもらうよう提案します。

**セルフサービスのオプションが実行可能でない場合、以下の手順に従います:**

1. 可能であればアカウントオーナーまたはアカウントマネージャーを CC に追加して、`Support::SaaS::Gitlab.com::Account Ownership Change Request (Self-Service Not Possible)` [マクロ](https://gitlab.com/gitlab-com/support/zendesk-global/macros/-/blob/master/active/Support/SaaS/GitLab.com/Account%20Ownership%20Change%20Request%20(Self-Service%20Not%20Possible).md?ref_type=heads) を使用します。
1. リクエストされたドキュメントを受け取ったら、すべての必要な情報が含まれていることを確認します。そうでない場合は、リクエスターにフォローアップして未解決の情報を取得します。必要な情報が取得できたら、慎重に次の手順に従います。
1. リクエストを評価して以下の基準が満たされているかを確認します:
   1. セルフサービスのオプションが提案されたが実行可能でない。
   1. リクエストされたドキュメントが完全かつ正確に記入されており、適切なレターヘッドにある。
   1. 既存のオーナーが過去 90 日間アクティブでない。
   1. リクエスターが既存のオーナーと同じ顧客メールドメインのメールアドレスを使用している。
   1. リクエスターがグループ内ですでに Maintainer ロールを持つ。
   1. 独立したオンライン検索分析が、提供された情報を裏付ける（既存のオーナーがもはやお客様のために働いていない、リクエスターと署名者が組織で持つロールと役職、リクエスターと既存のオーナーの間の内部紛争の兆候がない、など）。
1. **すべての基準が満たされている場合:** [リクエスターを Owner ロールに昇格させます](#how-to-elevate-the-requestor-to-the-owner-role)。
1. **いずれかの基準が満たされていない場合:**
   1. [Legal and Compliance プロジェクト](https://gitlab.com/gitlab-com/legal-and-compliance) で [Group Owner Change issue](https://gitlab.com/gitlab-com/legal-and-compliance/-/issues/new?issuable_template=group-owner-change) を新規作成します。
   1. Issue へのリンクを Zendesk チケットに追加します。
   1. `Legal::General` [マクロ](https://gitlab.com/search?utf8=%E2%9C%93&group_id=2573624&project_id=17008590&scope=&search_code=true&snippets=false&repository_ref=master&nav_source=navbar&search=id%3A+360056569419) を使ってリクエスターに返信し、チケットを「On-Hold」に設定します。On-Hold チケットがオープンに戻った後（4 日後）に返信を受け取らない場合、`#legal` [Slack チャンネル](https://app.slack.com/client/T02592416/C78E74A6L) で連絡します。
   1. Legal から承認を受け取った後、[リクエスターを Owner ロールに昇格させます](#how-to-elevate-the-requestor-to-the-owner-role)。
1. グループの管理ページに [Admin note](/handbook/support/workflows/admin_note/) を追加します。

#### リクエスターを Owner ロールに昇格させる方法 {#how-to-elevate-the-requestor-to-the-owner-role}

1. GitLab `Admin Account` を使用して、リクエスターの「Namespace - Group - Members」セクションに移動します。
1. 名前またはメールアドレスでメンバーを検索し、`Max role` 列でリクエスターのロールを `Owner` に変更します。
1. リクエスターがグループのメンバーでない場合は、右上の `Invite members` ボタンを押し、リクエスターのメールアドレスを入力し、ロールを `Owner` に設定します。`Invite` ボタンを押して変更を保存します。

## トラブルシューティングのための許可はどうやって与えられるか？

サポートチームは、Issue の解決に必要でない限り、いかなるプライベート情報も閲覧しません。通常、Issue は [「GitLab のあなたのプライベートリポジトリへのアクセス」に関するセキュリティポリシー](https://about.gitlab.com/security/faq/) で概説されているように、トラブルシューティング目的でアカウント保有者（ユーザー向け）またはネームスペースの有効なメンバー（プロジェクトとグループ向け）によってサポートチケット経由で提出されます。

サポートチームメンバーは、リクエストで明示的に言及されていないページの情報を見ることがありますが、レビューの範囲は問題を解決するために必要な最小限のアクセスに制限されます。

サポートチームは、リクエスターが以下に当てはまる場合にのみリクエスターからのアクションを受け付けます:

- ネームスペースのメンバーである。
- サポートが調査する必要がある問題を持つ。
- ネームスペースへのリンクを提供する。
  - このリンクは初期フォーム提出またはチケットへの返信から提供できます。

私たちは、Issue を調査する際に関連するビューとログに焦点を当てるため、ユーザーが特定のリンクを提供することを期待しています。例えば、CI/CD エラーを調査するリクエストには、関連するジョブログ、パイプライン、および／または CI YAML ファイルへのリンクを含める必要があります。

ユーザーデータをダウンロードする必要がある場合（リポジトリのクローンなど）、または機密情報を明らかにする必要がある場合（[CI/CD 変数](https://docs.gitlab.com/ci/variables/) など）、トラブルシューティングをさらに進めるためには、続行する前に [明示的な許可](#asking-permission) が必要です。再現目的でダウンロードされたユーザーデータは、Issue が解決された時点で削除する必要があります。例えば、[`zd-dl-wiper` ツール](https://gitlab.com/gitlab-com/support/toolbox/zd-dl-wiper#zd-dl-wiper) を使って削除できます。

## 許可を求める {#asking-permission}

いかなるアクションを取る前にも、必要なアクションを取るための明示的な許可をリクエストしてください。混乱がないようにできるだけ具体的にしてください。

ユーザーから許可が確認されたら、進めることができます。

サンプルフレーズ:

> Could you please provide permission for Support to ... ?

または

> Could you please confirm that you would like us to ... ?

例:

> Could you please provide permission for Support to re-run one or more pipelines in project `xyz` to investigate the issue you've described? Replying in this ticket stating you provide permission will be sufficient.
>
> Could you please provide permission for our Support Engineers to look at the CI/CD variables in the project so that we confirm they are correct? Replying in this ticket stating you provide permission will be sufficient.
>
> Could you please confirm that you would like us to exchange your primary address `example@primary-email.address` and secondary address `example@secondary-email.address` on your account? Replying in this ticket stating you provide permission will be sufficient.

### なりすまし

ユーザーへのなりすましは別のアカウントとしてアクションを実行することとみなされます。なりすましは、なりすまされたユーザーの **Current sign-in IP** と **Current sign-in at** を更新します。

ユーザーになりすますとき、管理者アカウントは **SIRTbot** アプリから、なりすましが正当なアクションだったかを確認するための Slack メッセージを受け取ります。

なりすましのアクションは [サブスクリプション契約の機密性条項](/handbook/legal/subscription-agreement/#7-confidentiality) に準拠しています。

## SCIM や SAML の構成ミスによりログインできないユーザーのアカウント変更

ユーザーが IdP によって再プロビジョニングされるためにユーザー名を変更したりアカウントを削除するためにサポートに連絡してきた場合、まず常にセルフサービスのオプションに戻してください:

### セルフサービスのオプション

- パスワードリセットを使ってユーザー名／パスワードで認証し、ユーザーがセルフサービス削除を使用するか、ユーザー名を自分で変更できるようにします。
- または、トークン化された GitLab シングルサインオン URL を使ってグループに直接ログインすることで、ユーザーの既存のアカウントを SAML ID にリンクし、アカウントを削除しないようにします。

### パスワードリセットが受信されない場合

トップレベルグループで [「Disable password authentication for enterprise users」](https://docs.gitlab.com/user/group/saml_sso/#disable-password-authentication-for-enterprise-users) オプションが有効化されているためにユーザーがセルフサービスできない場合、以下の手順に従ってください:

1. トップレベルグループで「Disable password authentication for enterprise users」が有効になっていることを確認します。
1. オーナーにグループでこのオプションを一時的に無効化するよう依頼して、ユーザーがアクセスを取り戻せるようにします。
1. オーナーが拒否した場合は、[アカウント所有権の確認](/handbook/support/workflows/account_verification) ワークフローに進みます（Enterprise ユーザーアカウントの変更については、所有権検証はトップレベルグループのオーナーが行う必要があります）。
1. 検証が成功した後、アカウントへの変更を加える許可を求めます。削除リクエストの場合、コントリビューションを含むユーザー削除は [有償ネームスペースの Issue とマージリクエストの削除につながる可能性がある](https://docs.gitlab.com/user/profile/account/delete_account#associated-records) ため、シンプル削除（ユーザーのみ）を行います。
