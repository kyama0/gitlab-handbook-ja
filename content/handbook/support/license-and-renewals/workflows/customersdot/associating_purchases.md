---
title: 購入を追加のアカウントと関連付ける
category: CustomersDot
description: サブスクリプションを他の CustomersDot ユーザーと関連付けたり、サブスクリプションオーナーを変更したりします。
upstream_path: /handbook/support/license-and-renewals/workflows/customersdot/associating_purchases/
upstream_sha: 6c73093986242c762a8f4a2769fbfba69b31fcf9
translated_at: "2026-05-08T13:00:00Z"
translator: claude
stale: false
lastmod: "2026-05-01T11:53:14+03:00"
---

---
サブスクリプションオーナー（`Sold To:` 連絡先）が、請求アカウント（および関連サブスクリプション）をより多くの CustomersDot ユーザーに関連付けたり、請求アカウント／サブスクリプションのオーナー権を移譲したりしたい場合があります。

このプロセスは、ライセンスを `Sold To:` 連絡先以外のメールアドレスに送信するリクエストにも当てはまります。

請求チームが `Sold To:` 詳細の変更について審査と支援を行うために、私たちのチームへリクエスト／チケットを転送してくる場合もあります。これらのチケットにも以下のプロセスが適用されます。

#### CustomersDot の変更が Zuora の Sold To 連絡先を更新することがある

**重要な注意事項:** Admin で CustomersDot ユーザーが編集されるたびに、その顧客に関連付けられた Zuora アカウントの連絡先も更新されます。同じメールアドレスを持つ Zuora の連絡先が存在しない場合、Zuora アカウントの `Sold To:` のアドレスが置き換えられます。

ワークフローで Admin から CustomersDot ユーザー（顧客レコード）を編集する必要がある場合、元の `Sold To:` 連絡先と同じメールアドレスのユーザーに対しては **最後に** `Save` をクリックして、その人物が Zuora アカウントの `Sold To:` のままになるようにしてください。詳細はワークフロー [CustomersDot を使って Zuora の Sold To 連絡先を更新する](#update-zuora-sold-to-contact-using-customersdot) を参照してください。

ユーザーに対して新しい請求アカウントメンバーシップを作成しても、Zuora の `Sold To:` 連絡先は更新されません。

## サブスクリプション管理連絡先を追加する {#add-subscription-management-contact}

請求アカウントメンバーシップを作成して、追加の CustomersDot ユーザーにサブスクリプションへのアクセスを提供します。

1. [所有権の確認](#ownership-verification) に記載の通り、リクエスト者の本人確認を行います。
1. リクエスト者が [CustomersDot](https://customers.gitlab.com) に顧客レコードを持っていることを確認します。
1. 提供された Zuora アカウントに対応する CustomersDot 請求アカウントを特定し、後続のステップで使用するためにユーザー名と請求アカウント名を保存します。
1. 左側のナビゲーション領域にある `Billing account memberships` セクションへ移動します。
1. `+ Add new` アクションを選択します。
1. 先ほど保存した情報を使って、新しいサブスクリプション管理リクエストに対応する正しい `CustomersDot` ユーザーと `CustomersDot billing account` を選択します。CustomersDot ユーザーは `Email` で、billing_account は `zuora_account_id` で一意に特定できます。
1. `Save` をクリックします。
1. CustomersDot ユーザーの `Login activated` チェックボックスが **チェックされている** ことを確認します。チェックされていない場合は、[CustomersDot アカウントのログイン状態を確認する](#confirm-the-customersdot-account-login-status) を実施します。

**注意:** すでに CustomersDot ユーザーが請求アカウントメンバーシップを持っている場合、現時点では同じユーザーに対して 2 つ目の請求アカウントメンバーシップを作成できません。既存の CustomersDot ユーザーに、既存サブスクリプションの管理を停止するかを確認したうえで、[既存の請求アカウントメンバーシップを削除する](#remove-a-billing-account-membership) を実施してください。

## サブスクリプション管理連絡先の変更ワークフロー

サブスクリプションオーナーの変更、所有権移譲、組織からすでに離脱した別の人がセットアップしたサブスクリプションへのアクセス回復のリクエストには、このワークフローを使用します。

### セルフサービスオプション {#self-service-option}

[Support::L&R::Change Customers Portal Contact](https://gitlab.com/gitlab-com/support/support-ops/zendesk-global/macros/-/blob/master/macros/active/Support/Self-Managed/Change%20Customers%20Portal%20Contact.yaml) マクロを使ってリクエスト者がセルフサービスで対応できるように検討してください。**重要:** 既存の `Sold To:` 連絡先を CC として追加してはいけません。リクエスト者にメールアドレスが見えてしまうと、個人データ漏えいとみなされます。

リクエスト者が **Customers Portal アカウントを持っていない** が、以前のオーナーの Customers Portal アカウントまたはメールアドレスにアクセスできる場合、以下のように案内します:

1. 既存オーナーのメールアドレスに [ワンタイムサインインリンク](https://customers.gitlab.com/customers/sign_in?legacy=true) を送信させます。
1. プロフィールオーナーの詳細を変更して [アカウントを引き継ぎ](https://docs.gitlab.com/subscriptions/customers_portal/#change-profile-owner-information) ます。
1. 認証用に [GitLab アカウントを Customers Portal アカウントにリンク](https://docs.gitlab.com/subscriptions/customers_portal/#link-a-gitlabcom-account) するか、[リンク済みアカウントを変更](https://docs.gitlab.com/subscriptions/customers_portal/#change-the-linked-account) します。
1. リクエスト者が Customers Portal でアカウントを更新したら、Zuora アカウントの `Sold To:` 連絡先が Customers Portal アカウントと一致していることを確認します。一致していない場合は、[CustomersDot を使って Zuora の Sold To 連絡先を更新するワークフロー](#update-zuora-sold-to-contact-using-customersdot) に従ってください。

リクエスト者がすでに Customers Portal アカウントを持っている場合は、現在のサブスクリプション連絡先に [請求アカウントマネージャーとして招待してもらう](https://docs.gitlab.com/subscriptions/customers_portal/#add-a-billing-account-manager) よう依頼できます。

#### エラー: グループオーナーがサブスクリプションの請求アカウントへのアクセス権を持っていない

**注意:** これらのメッセージは、CustomersDot ユーザー向けの [複数の BillingAccount メンバーシップ](https://gitlab.com/groups/gitlab-org/-/work_items/8986) を実装するまでの一時的なものです。

顧客が Customers Portal で次のフレーズを含むメッセージを受け取ることがあります:

> You're signed in as a GitLab group Owner, but either this subscription doesn't exist or you don't have access to manage its billing account.

**原因:**

このメッセージは、顧客がリンク済みサブスクリプションを持つグループのオーナーであるものの、その Customers Portal アカウントが次のいずれかに該当する場合に表示されます:

- そのサブスクリプションへのアクセス権がない
- 別の請求アカウントの請求アカウントマネージャーである
- 無効または不正確なサブスクリプション名を含む URL にアクセスしようとしている
- サブスクリプションが存在しない、または見つけられない

**解決手順:**

1. [所有権の確認](#ownership-verification) プロセスを完了します。
1. 顧客がアクセスしようとしているサブスクリプションに関連付けられた請求アカウントを特定します。
1. **サブスクリプションが存在しない場合:**
   - 正しいサブスクリプションと次のステップを判断するか、
   - [spt_pod_licensing-subscription](https://gitlab.enterprise.slack.com/archives/C0ANNKJSNBE) チャンネルで支援を要請します。
1. **サブスクリプションが存在し**、顧客が別の請求アカウントを管理している場合:
   1. 現在の請求アカウントへのアクセスを失うことを顧客が受け入れるかを確認します。
   1. **受け入れる場合:** [請求アカウントメンバーシップを削除するワークフロー](#remove-a-billing-account-membership) に従って、現在の請求アカウントとの関連付けを削除します。
   1. **受け入れない場合:** 代替案を提示するか、[spt_pod_licensing-subscription](https://gitlab.enterprise.slack.com/archives/C0ANNKJSNBE) チャンネルで支援を要請します。
1. [サブスクリプション管理連絡先を追加するワークフロー](#add-subscription-management-contact) に従って、顧客を正しい請求アカウントに関連付けます。

#### メッセージ「Your account is already linked to another billing account」が報告された

顧客が以下のメッセージを含むメールを受け取ります:

> <Contact Name> has invited you to manage the GitLab subscription for <Company Name>.
> However, your account is already linked to another billing account, and cannot be associated with two billing accounts at the same time. Please contact GitLab Support for assistance.

これは、顧客が別の請求アカウントの請求アカウントマネージャーである場合に発生します。

1. チケットのリクエスト者が既存の請求アカウントマネージャー、または招待された連絡先である場合
   - [`Billing account invites` ページ](https://customers.gitlab.com/admin/billing_account_invite) へ移動します。
   - 招待された連絡先のメールに関連する招待を見つけます。
   - 招待内の `Email` または `Billing Account` のいずれかがリクエスト者の CustomersDot アカウントの詳細と一致することを確認したうえで、ステップ 3 に進みます。
   - 詳細が一致しない場合はステップ 2 に進みます。
1. チケットのリクエスト者が既存の請求アカウントマネージャー **でも** 招待された連絡先 **でもない** 場合（例: リセラーがチケットを開いた、またはチケットが顧客対応の社内リクエストである）、まず [所有権の確認](#ownership-verification) プロセスに従います。
1. [請求アカウントメンバーシップを削除するワークフロー](#remove-a-billing-account-membership) に従って、連絡先の現在の請求アカウントとの関連付けを削除します。
1. [サブスクリプション管理連絡先を追加するワークフロー](#add-subscription-management-contact) に従って、顧客が招待された請求アカウントに関連付けます。

#### エラー「Email has already been taken」が報告された

リクエスト者が [セルフサービスオプション](#self-service-option) に従って「Email has already been taken」というエラーを受け取った場合、これは新しいアカウントオーナーが既存の CustomersDot アカウントを持っていることを示しています。代わりに [請求アカウントマネージャーを追加する](https://docs.gitlab.com/subscriptions/customers_portal/#add-a-billing-account-manager) 手順に従うよう案内してください。

### サポート支援オプション

このプロセスは、**すべての顧客**（リセラー顧客を含む）にとって最後の手段となります。上記の [セルフサービスオプション](#self-service-option) を除外したうえでのみ、リクエストされたオーナー権変更を検討します。

まず、[所有権の確認](#ownership-verification) に記載の通り顧客の本人確認を行います。

#### 既存の CustomersDot ユーザーの場合のプロセス

**警告**: 請求アカウント連絡先を、まだ顧客レコードが存在しないメールアドレスに更新すると、新しい `Customer` レコードが作成されます。この副作用を避けるため、提示された順番でステップに従うか、リクエスト者が既存の CustomersDot ユーザーでない場合は [既存でない CustomersDot ユーザーの場合のプロセス](#process-for-non-existing-customersdot-user) に従ってください。

メール検索でリクエスト者が既存の CustomersDot ユーザーである場合:

1. [サブスクリプション管理連絡先を追加するワークフロー](#add-subscription-management-contact) に従います。
1. [請求アカウントメンバーシップを削除するワークフロー](#remove-a-billing-account-membership) に従って、以前の `Sold To:` 連絡先のサブスクリプションとの関連付けを削除します。
1. [CustomersDot を使って Zuora の Sold To 連絡先を更新するワークフロー](#update-zuora-sold-to-contact-using-customersdot) に従います。

#### 既存でない CustomersDot ユーザーの場合のプロセス {#process-for-non-existing-customersdot-user}

メール検索でリクエスト者が既存の CustomersDot ユーザーでない場合:

1. 現在の `Sold To:` 連絡先の CustomersDot 顧客アカウントの `Name` と `Email` を新しい連絡先に編集し、`Skip email confirmation` のチェックボックスにチェックを入れて `Save` をクリックします。
1. CustomersDot アカウントが GitLab.com アカウントにリンクされているかを確認します:
      - CustomersDot アカウントで `Show` タブに移動し、`Uid` の下に値があるかを確認します。`Uid` は GitLab アカウントの ID で、Users API `https://gitlab.com/api/v4/users/<Uid>` から確認できます。
      - CustomersDot アカウントで **Unlink GitLab User** タブを選択して GitLab ユーザーアカウントのリンクを解除します。これにより、リンク解除する GitLab ユーザー名と関連アカウントが事前入力されるはずです。
1. 新しいメールアドレスに [ワンタイムサインインリンク](https://customers.gitlab.com/customers/sign_in?legacy=true) を送信します。顧客に [GitLab アカウントを CustomersDot アカウントにリンク](https://docs.gitlab.com/subscriptions/customers_portal/#link-a-gitlabcom-account) するよう依頼します。
1. 請求アカウントの `Sold To:` 連絡先も更新されていることを確認します。更新されていない場合は [CustomersDot を使って Zuora の Sold To 連絡先を更新するワークフロー](#update-zuora-sold-to-contact-using-customersdot) に従ってください。

## CustomersDot を伴うその他の重要なワークフロー

### 所有権の確認 {#ownership-verification}

**注意 1:** 以下のいずれのオプションでも、既存の `Sold To:` 連絡先を CC として追加しないでください。リクエスト者にメールアドレスが見えてしまうと、個人データ漏えいとみなされます。

**注意 2:** GitLab チームメンバー（SFDC に記載のアカウントオーナーを含む）からの保証は、顧客とサブスクリプションの関連の証拠としては受け付けません。

**注意 3:** 所有権確認のリクエストを Legal and Compliance チームへエスカレートする必要がある場合は、[Subscription-Ownership-Change-Escalation](https://gitlab.com/gitlab-com/legal-and-compliance/-/issues/new?issuable_template=Subscription-Ownership-Change-Escalation) Issue を起票してください。

**注意 4:** このプロセスは [サポート連絡先管理権限の証明](https://support.gitlab.com/hc/en-us/articles/11626528150172) の手順よりも若干厳格です。特に、サブスクリプション管理アクセスの権限証明にはスクリーンショットを受け付けません。

サブスクリプション所有権変更の資格を確認するため、以下の **いずれか 1 つ** が必要です:

1. 既存の連絡先からの承認
   - 請求アカウントの `Sold To:` と `Bill To:` の連絡先が異なる場合、既存の `Sold To:` 連絡先からの承認のみ受け付けます。
   - `Bill To:` 連絡先は最近の GitLab 請求書を提出する必要があります。
1. 過去のサブスクリプション契約書
1. 最近の GitLab 請求書（直近 12 ヵ月）
   - このオプションはリセラー経由で購入した顧客には利用できません。リクエスト時点でライセンスキーが未アクティベーションの場合は下記のオプション 6 を参照してください。ライセンスがすでにアクティベートされている場合、リセラーがこのリクエストでチケットを開くか、顧客がリセラーを CC に入れチケットへのリセラー参加を許可する旨を確認できます。その場合、リセラーは本人確認の証拠として請求書を提供できます。
1. 最後にロードしたライセンスのコピー（Self-Managed のみ）。テキスト形式に限る。
   - スクリーンショットは無効です
   - ライセンスコードを取得するには:
     - GitLab バージョン 14.2 以上: [ライセンス使用状況のエクスポート](https://docs.gitlab.com/administration/license_usage/#export-license-usage) を使います。
     - GitLab バージョン 14.1 では GitLab インスタンス上で `sudo gitlab-rails runner 'print License.current.data'` を実行します。注意: このコマンドは完了まで数分かかることがあります。
     - GitLab バージョン 14.1 より古い場合は、`管理者エリア > ライセンス` ページの `Download license` を使います。
   - ライセンスファイルは customersDot の `Licenses` -> `Validate License`（`/admin/license/validate_license`）でデコードできます
   - **ライセンスアクティベーションコードのメールのコピー** は許可される証拠ではありません。
      - クラウドアクティベーションコードのメールが提供された場合は、Redaction Zendesk アプリを使ってアクティベーションコードを伏せ字にしてください。
1. SaaS 顧客の場合、サブスクリプションに紐付いた名前空間でチケットリクエスト者がオーナーであることを以下の方法で確認できます:
   1. リクエスト者に以下を依頼します:
      1. グループオーナーとして自身の gitlab.com 名前空間にログインする。
      1. 名前空間の URL に対して API 呼び出しを開く: 「https://gitlab.com/api/v4/namespaces/<customer_namespace>/gitlab_subscription」。
      1. 返されたデータをコピー＆ペーストしてサポートチケットに添付する。
   1. gitlab.com 管理者アカウントを使って提供されたサブスクリプションデータの正確性を確認し、リクエストを承認または却下します。
1. リセラー経由で購入された未アクティベーションライセンス専用のオプション: リセラーは、チケットリクエスト経由でアカウント所有権変更を保証できます。リセラーがチケットを開くか、または顧客がリセラーを CC に入れてリクエストを認可することができます。
   1. [サブスクリプションがリセラー経由で購入されたかを確認します](/handbook/support/license-and-renewals/workflows/working_with_reseller_related_requests#identifying-whether-a-customer-purchased-through-reseller)
   1. チケットリクエスト者のメールアドレスのドメインが、関連する [legal compliance Issue](https://gitlab.com/gitlab-com/legal-and-compliance/-/issues/1564#note_1451657920) に詳述されているとおり、Zuora 上の `Invoice Owner` アカウントの `Sold To` メールドメインと一致することを確認します。顧客が複数のリセラーを介して購入した場合、Zuora 上でサブスクリプションの `Invoice owner` として識別されたメールドメインに一致するリセラーを使って確認すべきです。

### タイポの修正

サポートには、顧客のメールアドレスのタイポを修正し、有効なアドレスにライセンスまたはアクティベーションコードを再送するための [社内リクエスト](/handbook/support/license-and-renewals/workflows/working_internal_requests/) が届くことがあります。変更を加える前に、次のワークフローを使ってリクエストを検証してください:

1. （クラウドライセンス専用、オフライン／レガシーの場合はステップ 2 へ進む）CustomersDot で [Cloud Activation](https://customers.gitlab.com/admin/cloud_activation) ページのサブスクリプション名を見つけます。アクティベーションコードが使用されていないことを確認します。まだアクティベートされていない場合、このクラウドアクティベーションには「Self Managed Instance Activations」タブは存在しません。
1. [Mailgun のログを確認](/handbook/support/license-and-renewals/workflows/customersdot/troubleshoot_errors_while_making_purchases/#troubleshooting-email-delivery-from-customerdot) して、ライセンスメールが送信されたが意図した顧客に届かなかったことを確認します。タイポを含むメールが存在しない場合、Mailgun ログのエントリにはメール送信失敗（一般に **550 エラーコード** として表示されます）が記録されています。
1. Mailgun ログをテキスト形式でチケットに添付してエラーを記録します。
1. タイポを修正する前に、リクエストを送信したアカウントマネージャーに正しいメールアドレスを書面で確認します。
1. 請求アカウントの Sold to 連絡先のメールアドレスと、関連する Customers Portal アカウントを更新します。
1. ライセンスまたはアクティベーションコードを修正後のメールアドレスに再送します。
1. アカウントマネージャーに、SFDC 上の連絡先のメールアドレスを更新するよう案内します。

### CustomersDot を使って Zuora の Sold To 連絡先を更新する {#update-zuora-sold-to-contact-using-customersdot}

1. `CustomersDot Admin` ページの `Billing account contacts` セクションへ移動します。
1. そこから、レコード上の `Bill To:` または `Sold To:` の既存メールアドレスで検索することで、Zuora で更新するアカウントを検索できます。
1. アカウントが見つかったら、ページの右側にある小さな鉛筆アイコンを選択して編集できます。
1. 編集ページの上部近くにハイライトされた警告バナーが表示され、`sold to contact`、`bill to contact`、または `sold to and bill to contact` のどれを編集するのかが示されます。
1. `CustomerDot Admin` ページの `Billing account contacts` セクションで正しいアカウントを確認したら、関連フィールドを更新できます。通常は `First name`、`Last name`、`Email address` です。希望すれば物理アドレスもここで更新できます。
1. 変更が完了したら、ページ下部の `Save` ボタンをクリックします。
1. 変更が正しく伝播したかを確認するには、Zuora で `Sold To:` および／または `Bill To:` の連絡先が更新されていることを確認します。

Zuora の情報が正しく更新されない場合、または `Bill To:` と `Sold To:` レコードが同じアカウントで顧客がそれらを別々の人にする必要がある場合は、[Zuora 連絡先変更ワークフロー](/handbook/support/license-and-renewals/workflows/billing_contact_change_payments/#zuora-contact-change) を使って関連情報を更新するため、チケットを請求チームに引き渡せます。

### 請求アカウントメンバーシップを削除する {#remove-a-billing-account-membership}

#### セルフサービスオプション {#self-service-option-1}

サブスクリプション連絡先には、[請求情報にすでにアクセス権を持つ既存の請求アカウントマネージャーを削除する機能](https://docs.gitlab.com/subscriptions/customers_portal/#remove-a-billing-account-manager) があります。

既存の請求アカウントマネージャーは、[まだ受け入れられていない請求アカウントマネージャー候補への招待をキャンセル](https://docs.gitlab.com/subscriptions/customers_portal/#revoke-a-billing-account-manager-invitation) することもできます。

#### サポート支援オプション

このプロセスは、**すべての顧客**（リセラー顧客を含む）にとって最後の手段となります。上記の [セルフサービスオプション](#self-service-option-1) を除外したうえでのみ、リクエストされた変更を検討します。

既存の請求アカウントメンバーシップを削除する前に、まず [所有権の確認](#ownership-verification) に記載の通り顧客の本人確認を行います:

1. `Billing account memberships` セクションへ移動します。
1. CustomersDot ユーザーのメールアドレスで検索して、正しい請求アカウントメンバーシップを特定します。
1. 請求アカウントメンバーシップを開き、`x Delete` アクションを選択します。
1. 正しい請求アカウントメンバーシップが選択されていることを確認します。
1. `Yes, I'm sure` を選択します。
1. `Billing account membership successfully deleted` の成功通知を確認します。
1. CustomersDot ユーザーに新しい請求アカウントメンバーシップを追加したい場合は、[サブスクリプション管理連絡先を追加する](#add-subscription-management-contact) を参照してください。

**注意:** 削除される請求アカウントメンバーシップが、その請求アカウントに関連付けられた唯一のものである場合、その状態が望ましいかを必ず確認してください。

### CustomersDot アカウントのログイン状態を確認する {#confirm-the-customersdot-account-login-status}

CustomersDot アカウントの `Login activated` チェックボックスが **チェックされていない** 場合は:

1. `History` タブをクリックして `login_activated = false` を検索します。`create` のエントリより **後** の日付のエントリが見つかった場合、その顧客のログインを意図的に無効化した可能性があることを示します。確信が持てない限り、ログインを有効化しないでください。判断に迷う場合は `#support_licensing_subscription channel` でガイダンスを求めてください。
1. 顧客のログインを有効化するには:
   1. `Edit` タブをクリックします
   1. `Login activated` チェックボックスにチェックを入れます
   1. `Save` をクリックします
   1. CustomersDot で元の `Sold To:` 連絡先を特定し、`Edit` ページで `Save` をクリックして、その連絡先が `Sold To:` のままであることを確認します
