---
title: コンピュート分とストレージの取り扱い
description: コンピュート分とストレージの調整
category: GitLab.com subscriptions & purchases
upstream_path: /handbook/support/license-and-renewals/workflows/saas/compute_minutes_and_storage/
upstream_sha: 6c73093986242c762a8f4a2769fbfba69b31fcf9
translated_at: "2026-05-08T12:45:20Z"
translator: claude
stale: false
lastmod: "2026-02-27T11:47:23+01:00"
---

## 追加コンピュート分の追加

随時、名前空間の通常の月間クォータに *影響を与えずに* 追加のコンピュート分を付与する必要が生じることがあります。

<details>
<summary>GitLab.com ChatOps の使用</summary>

詳細については <a href="/handbook/support/workflows/chatops/#setting-additional-minutes-quota-for-a-namespace">
Support ChatOps のドキュメント</a> を参照してください。
</details>

<details>
<summary>CustomersDot Support Admin Tools</summary>

CustomersDot Support Admin Tools の [Set extra CI minutes](/handbook/support/license-and-renewals/workflows/customersdot/support_tools#set-extra-ci-minutes) ワークフローを使用します。

</details>

## ストレージの追加

<details>
<summary>CustomersDot Support Admin Tools</summary>

CustomersDot Support Admin Tools の [Set additional storage](/handbook/support/license-and-renewals/workflows/customersdot/support_tools#set-additional-storage) ワークフローを使用します。

</details>

このツールを使用したストレージの追加は、一時的な解決策として使用してください。恒久的な解決策が実施された後にストレージを削除するには、[内部リクエスト / Repo size change](https://gitlab.com/gitlab-com/support/internal-requests/-/issues/new?issuable_template=Repo%2520Size%2520Limit%2520Change#) を作成してください。実際に変更を元に戻す前に、名前空間が保有すべき量と、名前空間上の実際の量を必ず確認してください。

### 善意の行為として顧客に追加コンピュート分を承認するプロセス

- 既存の顧客に対して、サポートは以下のシナリオで善意の行為としてコンピュート分を発行できます:
  - [Channel Ops ハンドブック](/handbook/sales/field-operations/channel-operations/partner-faq/#post-sale) に従った調達遅延中のセールス AE からのリクエスト。
  - 顧客がコンピュート分に関連する製品バグに遭遇した。
  - 顧客が GitLab.com の予期しないダウンタイムを経験した。

- リクエストが上記の例の範囲外である場合、追加のコンピュート分は支払いが必要です。不明な場合は Slack の [#support_leadership](https://gitlab.slack.com/archives/C01F9S37AKT) チャンネルで確認してください。

#### 調達遅延中のセールスからのリクエスト

- 顧客が追加分を購入する調達プロセスにあり、現在使用可能なクォータが切れて作業がブロックされている場合、セールスのアカウントマネージャーがサポートチームに分を追加するよう内部リクエストを起票することがあります。
- リクエストは顧客のブロックを解除するために妥当な量である必要があります。この場合の妥当な量は顧客の使用状況に応じて変わります。使用状況ページの確認や履歴の確認は、ニーズを判断する良い方法です。
- SFDC に進行中の案件が存在する必要があります。

#### 製品バグまたは予期しないダウンタイムの影響を受けた顧客

- 必要に応じて [GitLab Status ページ](https://status.gitlab.com/) を参照しながら、バグまたは最近のダウンタイムイベントを確認します。
- Issue またはインシデント ID をチケットに記録します。
- 影響を受けたプロジェクトのリストを顧客にリクエストし、次の手順を実行します:
  1. 適用するコンピュート分を示す内部メモをチケットに投稿します。次の式を使用します:
  - `合計コンピュート分 = 現在のコンピュート分 + (2 × 失敗したジョブすべてのコンピュート分の合計)`
  1. **マネージャー承認が必要かを判断します:**
     - **承認は不要:** 分の使用が顧客の制御外の製品問題（例: 確認済みのバグ、[GitLab Status ページ](https://status.gitlab.com/) で文書化された障害）に明確に起因している場合、進めて参考のために内部メモを残してかまいません。
     - **承認が必要:** 状況が不明確であるか、根本原因の特定が困難な場合（例: 顧客の構成ミスの可能性、製品関連かどうか不明、または異常な使用パターン）、Slack の [#support_leadership](https://gitlab.slack.com/archives/C01F9S37AKT) チャンネルで `Restore Compute Minutes as an act of goodwill` のマネージャー承認をリクエストします。
       - マネージャー: Slack で承認を確認し、チケットの内部メモで承認を投稿します。
  1. [CustomersDot Support Admin Tools の Set extra CI minutes](/handbook/support/license-and-renewals/workflows/customersdot/support_tools#set-extra-ci-minutes) を使用してコンピュート分を復元します。
- これにより、失われたコンピュート分の回復に加えて、顧客に与えた不便への配慮として追加分が提供されます。

- ([チケット例 1](https://gitlab.zendesk.com/agent/tickets/294974)
| [チケット例 2](https://gitlab.zendesk.com/agent/tickets/391109))

### GitLab トライアル顧客に対する追加コンピュート分の承認プロセス

- すべての GitLab トライアルプランはデフォルトで 400 分です。トライアルユーザーが追加分をリクエストするためにサポートチームに連絡してきた場合は、詳しい議論のためにセールス担当者に紹介してください。

- GitLab セールスチームのメンバーは、クォータの増加をリクエストするために `Change Existing Trial Plan` の内部リクエストを起票できます。これらのリクエストは、有償プランの標準割り当てに制限されます: Premium トライアルでは 10,000 分、Ultimate トライアルでは 50,000 分です。
  - 注: トライアル終了時に追加分は自動的には削除されません。顧客はすべて使い切るまで使用できます。

- それ以外の場合、追加のコンピュート分やストレージは支払いが必要です。質問がある場合は `#support_leadership` Slack チャンネルで尋ねてください。

### 購入したコンピュート分が顧客のグループに関連付けられていない

ユーザーの個人名前空間からグループ名前空間にコンピュート分を移動するには、[CustomersDot Support Admin Tools / Namespace control (SaaS) / Force Associate](/handbook/support/license-and-renewals/workflows/customersdot/support_tools/#force-associate) を使用します。

**強制関連付けが機能しない場合**、顧客に返金をリクエストする必要があります。この場合:

- [CDOT 内の注文](https://customers.gitlab.com/admin/order) の「Gl namespace」を確認して、コンピュート分が *確かに* ユーザーの個人名前空間に関連付けられていることを確認します。
- 個人名前空間に関連付けられたコンピュート分が消費されていないことを確認します。これはユーザーの個人プロファイルの Usage Quotas で確認できます。注: コンピュート分がプロジェクトやパイプラインのない個人名前空間に割り当てられている場合、Usage Quotas は表示されません。この場合、分は消費されている可能性はありません。
  - **消費されていない場合**、コンピュート分の購入時にグループではなく個人名前空間を選択してしまったことを顧客に伝え、返金処理のためにチケットを [billing チーム](/handbook/support/license-and-renewals/workflows/billing_contact_change_payments#refunds) に渡します。その後、顧客はグループ用にコンピュート分を再購入できます。
  - **消費されている場合**、顧客は返金の対象外です。購入したコンピュート分を既に使用していることを顧客に伝え、グループに対応する新しいコンピュート分パックを購入するよう顧客を誘導します。

### 購入時に GitLab.com グループが表示されない

- コンピュート分を購入する際、課金ページにはコンピュート分を関連付ける名前空間を選択するドロップダウンメニューが表示されます。ユーザーが購入時に必要なグループを表示または選択できない場合、その GitLab ユーザーがそのグループのオーナーではない可能性があります。ユーザーに対して、課金ページでグループを選択できるようオーナーに権限を更新してもらう必要があるか、または既存のグループのオーナーに自分の顧客ポータルアカウントを使用してコンピュート分を購入してもらうようリクエストする必要がある旨を返信してください。

## コンピュート分の有効化

### コミュニティコントリビューターの手動クレジットカード検証

要件:

1. 依頼者が [内部リクエスト](https://support-super-form-gitlab-com-support-support-op-651f22e90ce6d7.gitlab.io/) または ZenDesk チケットを起票してリクエストを追跡している。
1. リクエストが [Community Relations](/handbook/marketing/developer-relations/#i-classfas-fa-users-fa-fw-color-orange-font-awesomei-meet-the-team) または [Developer Relations Engineering](/handbook/marketing/developer-relations/engineering/#team-members) のチームメンバーによって承認または作成されている。
1. GitLab.com 管理者アカウントを保有している。

確認後、次の手順を実行します:

1. ユーザーアカウントを編集します `https://gitlab.com/admin/users/USERNAME/edit`。
1. `Validate user account` チェックボックスを選択します。
1. [Admin note](/handbook/support/workflows/admin_note/) を追加します。
1. `Save changes`。

### セールス支援トライアルでのコンピュート分の有効化

以下のプロセスにより、セールス支援トライアルに参加しているグループでコンピュート分を使用する際の制限を解除します。

### 手順

#### CustomersDot Support Admin Tools の使用

[Bypassing credit card validation for pipeline execution via CustomersDot Support Admin Tools](/handbook/support/license-and-renewals/workflows/customersdot/support_tools#bypassing-credit-card-validation-for-pipeline-execution) を使用します。

#### customerDot Console の使用

customerDot Console から次の関数を実行します:

##### セールス支援トライアル向け

```ruby
irb(main) enable_ci_minutes_trial('namespace')

=> "{\"status\":\"success\",\"message\":\"namespace members are now enabled to run compute minutes\"}"
```

### クレジットカード検証の失敗の対応

共有ランナーでコンピュート分を使用するには、顧客がアイデンティティを検証する必要がある場合があります。一部の顧客はそのためにクレジットカードを使用する必要があります。検証用にクレジットカードを使用しようとしてエラーが発生したと顧客がサポートに報告してきた場合、以下の手順に従う必要があります。検証プロセスではクレジットカードに対して請求は発生せず、1 ドルのオーソリゼーション取引が使用されます。

1. Zendesk マクロ `Support::L&R::Credit Card Authorisation Failed` を使用してチケットに応答します。
1. 24 時間後に顧客が依然として進行できない、しかし GitLab.com 以外でクレジットカードが動作することを確認していると伝えてきた場合、追加のガイダンスのために Trust and Safety に紹介します。Trust and Safety チームの連絡先の詳細はハンドブックで確認できます: [GitLab Trust and Safety チームと連携する](/handbook/security/security-operations/trustandsafety/#working-with-gitlab-trust-and-safety-team)。
