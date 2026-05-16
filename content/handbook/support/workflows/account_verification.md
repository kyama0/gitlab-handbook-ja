---
title: アカウント所有権の確認
category: GitLab.com
subcategory: Accounts
description: "2FA 解除を含む、アカウント所有権を確認する方法と時期を詳述するワークフロー"
upstream_path: /handbook/support/workflows/account_verification/
upstream_sha: 0353e616a41b1d1664a95cc83c80b01f990a912f
translated_at: "2026-05-08T19:23:50Z"
translator: claude
stale: false
lastmod: "2026-01-21T12:28:59-06:00"
---

## 概要

このワークフローは、ユーザーがアカウント検証を提供する方法をカバーしています。あらゆる [アカウント変更](../workflows/account_changes.md) に使用すべきです。

アカウントアクションは、以下の[ワークフロー](#workflow)が成功した場合にのみ完了できます。

## 関連トピック

### ユーザーアカウントの検証

GitLab.com では、2FA を有効化していないユーザーがログイン試行で特定のリスクの高い基準を満たした場合、メールアドレスを検証することが要求されます。メールアドレスがもう有効でなくメールを受信できないユーザーがサポートをリクエストする場合は、[メールアカウント喪失ワークフロー](/handbook/support/workflows/lost_emails) を参照してください。

ユーザーが GitLab が要求するメール、電話、クレジットカードによる検証に関して質問がある場合は、従うべき [Internal Handbook のワークフロー](https://internal.gitlab.com/handbook/support/workflows/phone-number-verification/) を参照してください。

### GitLab チームメンバー

ユーザーが GitLab チームメンバーである場合は、[IT Ops に連絡](/handbook/security/corporate/end-user-services/_index.md)してもらってください。

## GitLab 内での 2FA 解除

2FA 解除リクエストを処理する手順については、[2FA 解除ワークフロー](../workflows/2fa-removal.md) を参照してください。

## ワークフロー {#workflow}

このワークフローは、2FA 解除以外でアカウント検証が必要なすべてのケースに適用されます。

### チケットを簡潔かつ正確に保つ

所有権検証チケットは記録の対象であるため、チケットは簡潔で、正確で、アクセス問題に厳密にフォーカスしている必要があります。
お客様が無関係なトピックを持ち込むことを許してはいけません。

### Step 0: チケットのメタデータ

チケットのフォーム、カテゴリ、サブカテゴリ、トピックが正確であることを確認します。

ほとんどの SaaS アカウントカテゴリには自動化やトリガーがあります。

#### アカウント認証マトリクス {#account-verification-matrix}

以下のテーブルは、オーナーとユーザーのタイプに基づいて利用可能な検証オプションの概要を示します:

| リクエスター | ターゲット | チャレンジ | Support PIN | 注 |
| --- | --- | --- | --- | --- |
| Enterprise オーナー | 自分のアカウント | オーナーが自分のアカウントでチャレンジに合格する | Support PIN は別のオーナーから提供されなければならない | 保証してくれる別のオーナーがいない場合、他のチャレンジについては [internal handbook](https://internal.gitlab.com/handbook/support/#account-verification-challenge-questions) を参照。 |
| Enterprise オーナー | Enterprise ユーザー | オーナーまたはターゲットユーザーが自分のアカウントでチャレンジに合格する | Support PIN はリクエストするオーナーから提供される |  1 チケットあたり複数の Enterprise ユーザーを処理できる。ターゲットユーザーをチケットに CC する必要はない。 |
| オーナー | 非 Enterprise ユーザー（オーナーの有償グループのメンバー、または追加される予定の人） | ターゲットユーザーが自分のアカウントでチャレンジに合格する | オーナーから Support PIN が提供される | 1 チケットあたり 1 ユーザー。コミュニケーションはチケットに CC される必要があるターゲットユーザーから直接行われる。 |
| 有償ユーザー | 自分のアカウント | ユーザーが自分のアカウントでチャレンジに合格する | N/A | オーナーが必要な場合、オーナーは新しいチケットを開かなければならない。 |
| 有償ユーザー | 同じ有償グループの他のメンバー | ターゲットユーザーが自分のアカウントでチャレンジに合格する | N/A | オーナーが必要な場合、オーナーは新しいチケットを開かなければならない。|
| 無償ユーザー | グループの非メンバーで追加される予定の人 | 不可 - リクエストはグループオーナーから来なければならない | オーナーの保証が必要 |  |

Enterprise オーナーは、Enterprise ユーザーがいる有償グループのトップレベルでの `owner` です。さらに Enterprise ユーザーでもある必要があります。
ユーザーが Enterprise ユーザーかどうかを識別する方法については、[Enterprise ユーザーセクション](../workflows/gitlab-com_overview.md#enterprise-users) を参照してください。

### Step 1: チャレンジの送信

チャレンジを送信する前に、チケットが Enterprise オーナーによって開かれたかを判定します。そうであれば、[`Support::SaaS::GitLab.com::Account Ownership Verification - GitLab.com - Enterprise Owner` マクロ](https://gitlab.com/gitlab-com/support/zendesk-global/macros/-/blob/master/active/Support/SaaS/GitLab.com/Account%20Ownership%20Verification%20-%20GitLab.com%20Enterprise%20Owner.md?ref_type=heads) を使用してください。
そうでなければ、[`Support::SaaS::GitLab.com::Account Ownership Verification - GitLab.com` マクロ](https://gitlab.com/gitlab-com/support/zendesk-global/macros/-/blob/master/active/Support/SaaS/GitLab.com/Account%20Ownership%20Verification%20-%20GitLab.com.md?ref_type=heads) を使用します。

### Step 2: チャレンジの回答を確認する {#step-2-checking-challenge-answers}

> **注**: ユーザーが返してきた情報がごく僅かで、明らかに不十分または曖昧な場合は、その回答後すぐに追加情報を求める返信を行ってください。「コミットの正確な日付と時刻を提供してください、おおよそのものでなく」など、追加のガイダンスを提供できます。

1. チャレンジの回答を検証するには、Zendesk GitLab User Lookup App を使用するか、admin アクセスがある人は `https://gitlab.com/admin/users/USERNAME` で確認します。
1. ZenDesk [GitLab Super App](/handbook/security/customer-support-operations/zendesk/apps/global#gitlab-super-app) の `2FA Helper` を使用して、ユーザーの回答に基づいて [リスクファクター](https://internal.gitlab.com/handbook/support/#risk-factors-for-account-ownership-verification) （GitLab 内部）を判定します。データ分類基準と注釈は [GitLab Internal Handbook - Data Classification table](https://internal.gitlab.com/handbook/support/#data-classification) にあり、これが情報源として扱われます。
   - ユーザーが有償ネームスペースのメンバーである場合、チャレンジの回答は有償ネームスペースに対して評価する必要があります。ユーザーが有償ネームスペースのメンバーでない場合は、追加のガイダンスのために [2FA リセット検討の条件](../workflows/2fa-removal.md#conditions-when-account-is-used-to-access-customers-portal) を参照してください。
   - グループオーナーが [Enterprise ユーザー](/handbook/support/workflows/gitlab-com_overview#enterprise-users) に代わって回答している場合、回答をどのアカウントに対して評価するかは [アカウント認証マトリクス](#account-verification-matrix) を参照してください。Enterprise ユーザーが現在の有償ネームスペースのメンバーでない場合でも、データ分類は RED です。
   - アプリ経由ではなく手動でコメントを残す必要がある場合は、[`Support::SaaS::GitLab.com::2FA::2FA Internal Note` マクロ](https://gitlab.com/gitlab-com/support/zendesk-global/macros/-/blob/master/active/Support/SaaS/GitLab.com/2FA/2FA%20Internal%20Note.md?ref_type=heads) を使用してチケットに内部ノートを追加してください。

1. **検証に合格した場合:** Slack `#support_gitlab-com` でチームの別のメンバーに自分の決定をピアレビューしてもらうようリクエストします。彼らが 3a の手順を実行します
1. **検証に失敗した場合**: Step 3b に進みます

### Step 3a: ユーザーがアカウント所有権の証明に成功した場合

このセクションは通常ピアレビュアーが行います。必要であれば、ピアレビュアー（または承認マネージャー）が承認ノートを残し、その場合は元のレビュアーがアクションを実行します。

1. その決定に同意する場合、admin アカウントにサインインしてユーザーテーブルからユーザー名を見つけるか、`https://gitlab.com/admin/users/usernamegoeshere` に移動します
      1. [Account Changes ワークフロー](../workflows/account_changes.md) を参照してください。
      1. account タブで `Edit` をクリックし、[Admin Note](../workflows/admin_note.md) を追加して保存します。

### Step 3b: ユーザーがアカウント所有権の証明に失敗した場合

> **注**: 回答へのヒントを提供したり、どのチャレンジが正しかった／間違っていたかをユーザーに伝えたりしては *いけません*。それがソーシャルエンジニアリングの仕組みです！

1. ユーザーがリスクファクターをパスできなくても、適用可能なすべてのチャレンジを提供していない場合、追加のチャレンジを提供できます。これはオーナーを含むすべてのユーザーに当てはまります。
   - 最も一般的なのは、`トップレベルネームスペースのオーナー`（有効なサブスクリプション付き）の保証がリクエストされることです。[`Support::SaaS::GitLab.com::2FA::2FA ask owner vouch` マクロ](https://gitlab.com/gitlab-com/support/zendesk-global/macros/-/blob/master/active/Support/SaaS/GitLab.com/2FA/2FA%20Ask%20owner%20vouch.md?ref_type=heads) を使用します。詳細は [オーナー保証の検証セクション](#authenticating-an-owner-vouch) を参照してください。このリクエストの発信元メールはオーナーアカウントの検証済みメールと一致する必要があります。ユーザーが Owner の場合、保証は別の Owner からでなければなりません。
   - 同僚の助けを借りて回答できるチャレンジもあります。[`Support::SaaS::GitLab.com::2FA::2FA Removal Verification - GitLab.com - Failed - Ask colleagues for help` マクロ](https://gitlab.com/gitlab-com/support/zendesk-global/macros/-/blob/master/active/Support/SaaS/GitLab.com/2FA/2FA%20Removal%20Verification%20-%20GitLab.com%20-%20Failed%20-%20Ask%20colleagues%20for%20help.md?ref_type=heads) を使用して、同僚と協力して回答できるチャレンジを伝えます。
   - 後続の応答を受け取ったら、[チャレンジの評価](#step-2-checking-challenge-answers) に戻り、合格するかを確認します。
1. ユーザーが利用可能なチャレンジをパスできない場合:
   1. 検証なしではアカウントに対していかなるアクションも取れないことを伝えます。2FA については、[`Support::SaaS::GitLab.com::2FA::2FA Removal Verification - GitLab.com - Failed - Final Response` マクロ](https://gitlab.com/gitlab-com/support/zendesk-global/macros/-/blob/master/active/Support/SaaS/GitLab.com/2FA/2FA%20Removal%20Verification%20-%20GitLab.com%20-%20Failed%20-%20Final%20Response.md?ref_type=heads) を使用します。
   1. チケットを「Solved」としてマークします。

#### オーナー保証の認証 {#authenticating-an-owner-vouch}

有償ネームスペース内: ユーザーが Owner にリクエストの保証をしてもらうことを選んだ場合、[`Support::SaaS::GitLab.com::2FA::2FA ask owner vouch`](https://gitlab.com/gitlab-com/support/zendesk-global/macros/-/blob/master/active/Support/SaaS/GitLab.com/2FA/2FA%20Ask%20owner%20vouch.md?ref_type=heads) マクロを適用します。これによりリクエスターは、Support が提供した文字列を含むスニペットを Owner（トップレベル）に作成してもらうように案内されます。それを行ったことを確認する返信を受け取ったら:

1. Admin または Auditor アカウントを使用して、提供されたスニペット（例: `https://gitlab.com/-/snippets/2057341`）にブラウズします
   - スニペットのテキストが指定した文字列と一致することを確認します
   - スニペットの作成者がトップレベル有償グループの直接メンバーである Owner であることを確認します
1. Owner が合格すれば、これをアカウント検証チャレンジに加算できます。

なお、Enterprise オーナーが自分の [Support PIN](https://docs.gitlab.com/user/profile/#generate-or-change-your-support-pin) を作成して共有してもらうことも、Owner 保証の一形式としてリクエストできます。

注: この [bug](https://gitlab.com/gitlab-org/gitlab/-/issues/337939) により、一部のグループオーナーはスニペットを作成できません。その場合、代わりに Owner に [Support PIN](https://docs.gitlab.com/user/profile/#generate-or-change-your-support-pin) を生成して共有してもらうように依頼できます。

> **注**: 別のユーザーがチケットに CC されている場合、PIN を検証したらユーザーに新しい PIN を生成して以前のものを無効化するよう依頼してください。

## アカウント所有権の変更

このセクションは [Account Changes ワークフロー](../workflows/account_changes.md#account-ownership-changes) に移動しました。
