---
title: ロック・ブロック・BAN されたアカウント
category: GitLab.com
subcategory: Security
description: ブロックされたユーザーを復活させられるか判断する方法
upstream_path: /handbook/support/workflows/reinstating-blocked-accounts/
upstream_sha: 5b8afe7d206f5c195e463506206021ee3c9a4491
translated_at: "2026-05-08T01:46:59Z"
translator: claude
stale: false
lastmod: "2026-03-06T16:08:49-08:00"
---

このワークフローページでは、**Locked**、**Blocked**、および **Banned** アカウントへの対応方法を説明します。ユーザーは自分がブロックされていると思っていても、実際にはアカウントがロックされているだけというケースがあります。これを確認する方法はいくつかあります:

1. この情報を確認する最良の方法は、[Zendesk User Lookup app（GitLab Super App の一部）](/handbook/security/customer-support-operations/zendesk/apps/global#gitlab-super-app) の `Locked` および `State` フィールドを使うことです。
1. 管理ユーザー UI の `/admin/user/USERNAME` には、上部の名前の隣に `(Locked)`、`(Blocked)`、または `(Banned)` と表示されます。
1. [Users API](https://docs.gitlab.com/api/users/#get-a-single-user) を使って、管理ユーザーとしてログインしている状態でブラウザから URL `https://gitlab.com/api/v4/users/<user_id>` を開くと、ユーザーの `locked` および `state` ステータスも確認できます。

私たちが実装している [Arkose Protect](https://docs.gitlab.com/integration/arkose/#arkose-protect) は、アカウントロックには影響を与え *ません* が、代わりにユーザーがチャレンジを解決せずにサインインするのを防ぐことができます。

## ロックされたアカウント

ユーザーがロックされていることが判明した場合、[`Support::SaaS::Account Locked` マクロ](https://gitlab.com/gitlab-com/support/zendesk-global/macros/-/blob/master/active/Support/SaaS/GitLab.com/Account%20Locked.md?ref_type=heads) を使用してユーザーに状況を説明できます。ユーザーがロックされる条件は次のとおりです:

2FA が **無効** の場合:

- 2FA が有効になっておらず、24 時間以内に 3 回以上のログイン失敗があった。
- アカウントは自動的にはロック解除 **されません**。ログインに成功した *後*、ユーザーは 6 桁のロック解除コードを記載したメールを受信します。次に検証ページにリダイレクトされ、コードを入力してアカウントのロックを解除できます。コードの有効期限は 60 分のみですが、検証ページのリンクをクリックすることで新しいコードをリクエストできます。

2FA が **有効** の場合:

- 10 分以内に 5 回以上のログイン失敗があった。
- アカウントは 10 分間の待機期間後に自動的にロック解除されます。

ユーザーが 6 桁のコードを含む検証メールを受信できない場合は、プライマリメールアドレスが無効か、アクセスできない可能性が高いです。ユーザーがプライマリメールアドレスにアクセスできない場合、アカウントのロック解除やパスワードリセットができません。ユーザーがプライマリメールにアクセスできない場合は、[メールアドレスの入れ替え](/handbook/support/workflows/account_changes#account-access-requests) などの他のワークフローを検討してください。

ロック解除コードを含むすべての検証メールおよびパスワードリセットメールは、Mailgun のサプレッションをバイパスします。これらのメールの配信状況は Mailgun でも確認できます。

[Kibana](/handbook/support/workflows/kibana/) で `json.message: Account Locked` を検索することで、`Account Locked` の状態を確認できます。Kibana での見え方の例は次のとおりです:

![locked_account](/images/support/locked_example.png)

### 手動ロック解除

ユーザーはまずすべてのセルフサーブ手段を試すべきです。

セルフサーブ手段が尽きており、有償サブスクリプションを持つグループのメンバーがそれでもアカウントにアクセスできない場合、必要に応じて手動ロック解除を検討できます。例えば、ユーザーが外部メールを受信できずコードを取得できない場合、手動ロック解除が必要になることがあります。SaaS では管理ユーザーのみがユーザーアカウントを変更できることに注意してください。

プロセス:

1. 上記のロックされたアカウントワークフローに従い、ユーザーがすべてのセルフサーブ手段を尽くしていることを確認します。
1. それ以外のケースでは、必要に応じて [コメントするか Issue を作成](/handbook/support/workflows/working-with-issues/) します。
1. [アカウント所有権の検証](/handbook/support/workflows/account_verification/) を行います。
1. [管理エリアからアカウントのロックを解除](https://docs.gitlab.com/security/unlock_user/#unlock-user-accounts-from-the-admin-area) します。
1. [admin note を追加](/handbook/support/workflows/admin_note/) します。

グループオーナーがセルフサーブで対応できるようにする機能リクエストは [anti-abuse#339](https://gitlab.com/gitlab-org/modelops/anti-abuse/team-tasks/-/issues/339) にあります。

### Identity verification 例外リクエスト

### クレジットカードや電話番号での検証に問題が発生しているアカウント

ユーザーがクレジットカードや電話番号の検証を完了できない場合。

サポートチームメンバーは、[Internal Handbook](https://internal.gitlab.com/handbook/support/workflows/identity-verification-exemptions/) に記載されている手順に従って例外を作成できます。

## ブロックされたアカウント

このワークフローは、ブロックまたは BAN されたユーザーを復活できるかを判断するために使用します。すべてのブロックされたアカウントには、関連 Issue へのリンクを含む admin note が記載されているはずです。

### なぜアカウントがブロックされたか？

アカウントがブロックされている場合、admin note を確認してブロックされた理由を調べてください。
    - Zendesk の [GitLab user lookup app](/handbook/security/customer-support-operations/zendesk/apps/global#gitlab-super-app) は、ユーザーがアカウントに紐づくメールアドレスでサポートに問い合わせた場合に、そのユーザーの admin notes を表示します。あるいは、
    - ChatOps へのアクセス権がある場合は、chatops が有効な任意の Slack チャンネルで以下のコマンドを使ってユーザーの admin notes を読むことができます。
        > `/chatops run user find <username or email>`

### ユーザー起点のセルフサーブ削除

Admin Note が `User deleted own account on {timestamp}` の場合、これはユーザーがセルフサーブ削除を起動したことを意味します。[遅延アカウント削除のキャンセル](#cancelling-delayed-account-deletion) を参照してください。

1. **Free ユーザー** のアカウントは、削除リクエストの当日から 7 日間待ってから、同じメールアドレスやユーザー名で新しいアカウントを作成する必要があります。[`Support::SaaS::Gitlab.com::Blocked Accounts::Blocked due to account deletion`](https://gitlab.com/gitlab-com/support/zendesk-global/macros/-/blob/master/active/Support/SaaS/GitLab.com/Blocked%20Accounts/Blocked%20due%20to%20account%20deletion.md?ref_type=heads) マクロを使ってください。
1. **サポートが強制削除を実行できる例外** - ユーザーが有償ネームスペースの一員ではないが有償ネームスペースに追加される必要がある場合（ユーザーまたはトップレベルグループオーナーがチケットを作成）、または有償ユーザーがトップレベルグループ配下に追加されてもなお 7 日間の遅延期間に従う場合（[この Issue](https://gitlab.com/gitlab-org/gitlab/-/issues/416651) が修正されるまで該当）: サポートは以下の手順で 7 日間の遅延をバイパスできます:
   - [`Support::SaaS::Gitlab.com::Blocked Accounts::Blocked due to account deletion`](https://gitlab.com/gitlab-com/support/zendesk-global/macros/-/blob/master/active/Support/SaaS/GitLab.com/Blocked%20Accounts/Blocked%20due%20to%20account%20deletion.md?ref_type=heads) マクロを使い、7 日間の待機期間をバイパスしてアカウントを削除する明示的な許可をユーザーに依頼します。
   - 確認が得られたら、SE（Admin アクセス権あり）がアカウントを削除します。
   - SE は削除の結果でチケットを更新します。
1. **有償ユーザー** のアカウントで、トップレベル有償ネームスペースの直接メンバーである場合は削除遅延がなく、アカウントは即座に（1 時間以内に）削除されます。詳細は [この MR](https://gitlab.com/gitlab-org/gitlab/-/merge_requests/121912) を参照。

### 禁輸国

ブロックや苦情が禁輸国からのアクセスに関するものである場合、[`Support::SaaS::Gitlab.com::Abuse::TOS Section 10 (Embargoed Countries)`](https://gitlab.com/gitlab-com/support/zendesk-global/macros/-/blob/master/active/Support/SaaS/GitLab.com/Abuse/TOS%20Section%2010%20(Embargoed%20Countries).md?ref_type=heads) マクロを使ってください。
    - ユーザーが要求された情報を提供する場合は、Trust and Safety Operations トラッカーで `Trust and Safety` の [Account Reinstatement Request](https://gitlab.com/gitlab-com/gl-security/security-operations/trust-and-safety/TS_Operations/account-reinstatements/-/issues/new?issuable_template=Account%20Reinstatement) テンプレートを完成させます。それ以外の場合は、ブロックは解除できないことを再度伝えます。
    - **Free** および **有償** の両方のユーザーに対してこのアクションを実施します。

### ビジネス上および規制上の義務（中国地域）

中国本土、香港、マカオでのビジネス上および規制上の義務を遵守するためにユーザーがブロックされる場合があります。これはユーザーアカウントの admin note に反映されます。

これらのアカウントの詳細情報とサポートワークフローについては、[Internal Handbook](https://internal.gitlab.com/handbook/support/workflows/regulatory-region-blocks/) を参照してください。

### Professional Services マイグレーション

Professional Services マイグレーションも、プロセスの一環としてユーザーをブロックすることがあります。マイグレーション用の admin notes は `2022-08-19` から [この Issue](https://gitlab.com/gitlab-org/professional-services-automation/tools/migration/congregate/-/issues/818) を通じて追加されています。それより前にマイグレーションされたアカウントには admin note がない場合があります。`2024-09-18` 時点では、Professional Services マイグレーションでブロックされたアカウントのブロック解除リクエストは自動的に処理されます（[STM #6336](https://gitlab.com/gitlab-com/support/support-team-meta/-/issues/6336) を参照）。

ブロック解除リクエストのチケットを受け取り、自動処理されるべきだったと考える場合は、次の対応をしてください:

1. すべてのチケットフィールドが期待値どおりであることを確認する
1. Support Operations に通知して調査してもらう
1. 依頼者への迅速な解決を確保するため、以下のガイダンスを使ってチケットを手動で処理する

チケットが自動処理されなかった場合、サポートは次のケースでユーザーを手動でブロック解除できます:

- ブロックされたユーザーまたはトップレベルグループオーナーは、ブロック解除のためにサポートチケットを送信できます。顧客が [検証された](/handbook/support/workflows/account_verification) 後、ユーザーをブロック解除できます。ユーザーに [admin note](/handbook/support/workflows/admin_note) を残し、ブロック解除されたこと、日付、チケット番号を記載します。
- [Enterprise users](/handbook/support/workflows/gitlab-com_overview/#enterprise-users) の場合、ユーザーが所属するトップレベルネームスペースの `owner` がチケットを送信できます。[アカウント検証](/handbook/support/workflows/account_verification/) に従い、通常どおり [admin note](/handbook/support/workflows/admin_note/) を追加してください。ユーザーまたはオーナーのどちらがリクエストしたかも含めます。
- 必要に応じて、[#professional_services](https://gitlab.slack.com/archives/CFRLYG77X) チャンネルで明確化や支援を求めることもできます。
- **Free** および **有償** の両方のユーザーに対してこのアクションを実施します。

### admin note がなく、上記のいずれにも該当しない場合

PS マイグレーションの一部ではなく admin notes がない場合を含む、それ以外のすべてのケースでは、Trust and Safety Operations トラッカーで [Account Reinstatement Request](https://gitlab.com/gitlab-com/gl-security/security-operations/trust-and-safety/TS_Operations/account-reinstatements/-/issues/new?issuable_template=Account%20Reinstatement) テンプレートを完成させます。チームのセキュリティメンバーが 24 時間以内にリクエストをレビューします。リクエストが緊急の場合は、[#abuse](https://gitlab.enterprise.slack.com/archives/C0HPYBJ3D) Slack チャンネルに連絡してください。

1. ユーザーへの初回応答には [`Support::SaaS::Gitlab.com::Blocked Accounts::Escalated-TrustAndSafety`](https://gitlab.com/gitlab-com/support/zendesk-global/macros/-/blob/master/active/Support/SaaS/GitLab.com/Blocked%20Accounts/Escalated-TrustAndSafety.md?ref_type=heads) マクロを送信します。
1. Trust and Safety によるブロックではないこと、または SM-to-SaaS マイグレーション（Professional Services の有無にかかわらず実施されたもの）の結果としてブロックされていることが確立し、かつそれらが [検証されている](/handbook/support/workflows/account_verification) 場合:
    - **有償アカウント** はトップレベルネームスペースの Owner ロールを持つユーザーの承認でブロック解除できます。
    - **Free アカウント** は例外的な状況の場合、かつリーダーシップの承認との組み合わせでのみブロック解除できます。

### アカウントが正常にブロック解除された

アカウントがブロック解除された場合、[`Support::SaaS::Gitlab.com::Blocked Accounts::Account Reinstated- Success`](https://gitlab.com/gitlab-com/support/zendesk-global/macros/-/blob/master/active/Support/SaaS/GitLab.com/Blocked%20Accounts/Account%20Reinstated-%20Success.md?ref_type=heads) マクロを使って、アカウントがブロック解除されたことをユーザーに通知します。

### アカウントをブロック状態のままにする（復活させない）

Trust and Safety からの最終決定が、ユーザーアカウントを復活しないことになった場合、[`Support::SaaS::Gitlab.com::Blocked Accounts::RemainBlocked`](https://gitlab.com/gitlab-com/support/zendesk-global/macros/-/blob/master/active/Support/SaaS/GitLab.com/Blocked%20Accounts/RemainBlocked.md) マクロを適用します。これによりユーザーには標準的な文言が伝えられ、チケットは **クローズされます**。

このマクロを適用すると、既存のチケットを通じてユーザーが返答する機会は提供されません。これが意図したアクションであることを確認した上で、慎重に適用してください。

## BAN されたアカウント

1. 次の少なくとも 1 つのシナリオが成立する場合 **のみ** 次のステップに進んでください:
    1. ユーザーがリクエストを送るために使用したメールアドレスが、リクエストが対象とするアカウントに紐づくメールアドレスと一致する。この基準は Free ユーザーにもカスタマーにも適用できます。
    1. ユーザーアカウントが [Enterprise user](/handbook/support/workflows/gitlab-com_overview#enterprise-users) として分類されており、トップレベルグループのオーナーがチケットを起票している。
1. Trust and Safety Operations トラッカーで `Trust and Safety` の [Account Reinstatement Request](https://gitlab.com/gitlab-com/gl-security/security-operations/trust-and-safety/TS_Operations/account-reinstatements/-/issues/new?issuable_template=Account%20Reinstatement) テンプレートを完成させます。チームのセキュリティメンバーが 24 時間以内にリクエストをレビューします。リクエストが緊急の場合は #abuse Slack チャンネルに連絡してください。
1. ユーザーへの初回応答には [`Support::SaaS::Gitlab.com::Blocked Accounts::Escalated-TrustAndSafety`](https://gitlab.com/gitlab-com/support/zendesk-global/macros/-/blob/master/active/Support/SaaS/GitLab.com/Blocked%20Accounts/Escalated-TrustAndSafety.md?ref_type=heads) マクロを送信します。
1. アカウントが復元された場合は、[`Support::SaaS::Gitlab.com::Blocked Accounts::Account Reinstated- Success`](https://gitlab.com/gitlab-com/support/zendesk-global/macros/-/blob/master/active/Support/SaaS/GitLab.com/Blocked%20Accounts/Account%20Reinstated-%20Success.md?ref_type=heads) マクロを使って、アカウントが復元されたことをユーザーに通知します。それ以外の場合は、Reinstatement Request からの理由を提示し、なぜアカウントが BAN されたままになるかを説明します。

## 遅延アカウント削除のキャンセル {#cancelling-delayed-account-deletion}

ユーザー自身による開始のアカウント削除は、7 日間の遅延期間内であればキャンセルすることが可能です。[Unblocking the account will cancel the account deletion](https://gitlab.com/gitlab-org/modelops/anti-abuse/team-tasks/-/issues/423) を参照してください。

アカウント削除のキャンセルリクエストは、*有償* グループのメンバー、またはユーザーが [Enterprise user](/handbook/support/workflows/gitlab-com_overview#enterprise-users) の場合はトップレベルオーナーが行うことができます。Free ユーザーに対してはアカウント削除のキャンセルは行いません。

プロセス:

1. 有償ユーザーまたはトップレベルオーナーは、[アカウント検証](/handbook/support/workflows/account_verification) に合格する必要があります。
1. [ユーザーをブロック解除](https://docs.gitlab.com/administration/moderate_users/#unblock-a-user) し、ユーザーに [admin note](/handbook/support/workflows/admin_note) を残してブロック解除されたこと、日付、チケット番号を記載します。

### ネームスペース管理者が claim 済みユーザーの削除キャンセルをリクエストする場合

ネームスペース管理者（トップレベルグループの Owner）は、7 日間の遅延期間内に [claim された（Enterprise）ユーザー](/handbook/support/workflows/gitlab-com_overview#enterprise-users) の保留中のアカウント削除のキャンセルをリクエストできます。これは、ユーザーがセルフサーブ削除を開始したが、ネームスペース管理者が業務継続性のためにアカウントを残しておく必要がある場合に該当します。

**シナリオ例:** `acme-corp` トップレベルグループ配下の Enterprise user である開発者（`@dev-user`）がセルフサーブのアカウント削除を開始しました。グループの Owner（`@acme-admin`）が保留中の削除に気づき、そのユーザーがまだ必要であるためキャンセルを依頼するサポートチケットを送信しました。

プロセス:

1. リクエスター が、そのユーザーを claim しているトップレベルグループの Owner であることを確認します。Owner ロールを確認するには [GitLab user lookup app](/handbook/security/customer-support-operations/zendesk/apps/global#gitlab-super-app) または [Members API](https://docs.gitlab.com/api/members/) を使います。
1. 対象アカウントが、リクエスターのネームスペースが claim している [Enterprise user](/handbook/support/workflows/gitlab-com_overview#enterprise-users) であることを確認します。
1. ネームスペース Owner は [アカウント検証](/handbook/support/workflows/account_verification) に合格する必要があります。
1. [ユーザーをブロック解除](https://docs.gitlab.com/administration/moderate_users/#unblock-a-user) して保留中の削除をキャンセルします。
1. ユーザーに [admin note](/handbook/support/workflows/admin_note) を残し、ネームスペース Owner のリクエストにより削除がキャンセルされたこと、日付、チケット番号を記載します。
1. ネームスペース Owner に削除がキャンセルされたことを通知します。

> **注意:** Enterprise users のアカウントはネームスペース管理者によって管理されているため、このアクションにユーザー本人の同意は必要ありません。ただし、ユーザーが後から削除を再開始する場合は、ネームスペース管理者がその根本原因についてユーザーと直接話す必要がある可能性があります。

---

NOTE:
このページの残りの部分は **参考** のためだけのものであり、Security のワークフローを指すように更新する必要があります。

### ポリシー参照

1. アカウントの復活に関するすべての決定は最終的なものであり、不服申し立てのプロセスはありません。
1. これらの基準は **あくまで例として** 取り扱うものであり、**拘束力のある原則** ではありません。
1. アカウントが 12 ヶ月以内に再び ToS に違反した場合は、永久 BAN になる可能性があります。

#### アカウントが復活できる場合

1. ユーザーが要求された期間内に該当コンテンツを削除することに同意した場合。
1. ユーザーが私たちの利用規約に違反した十分な理由を提供した場合。
1. ユーザーが 24 時間以内に GitLab.com からコンテンツを削除またはエクスポートすることに同意した場合。
1. DMCA／商標苦情が解決された場合。

#### アカウントを復活 **できない** 場合

1. ユーザーがアカウントに対する是正措置を拒否する場合。
1. ユーザーが私たちの ToS に違反し続ける場合。
1. ユーザーが意図的に私たちの ToS に違反する場合。
1. サポートエンジニアに対する罵詈雑言や敵対的な行為があった場合。
1. アカウントが GitLab のビジネスやブランドに損害を与える場合。
