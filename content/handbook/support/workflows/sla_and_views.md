---
title: 非推奨 - 正しい SLA と Zendesk ビューを保証する
description: "チケットの SLA を検証し、必要に応じて修正し、正しい Zendesk ビューに表示されるようにするためのウォークスルー。"
category: Handling tickets
subcategory: Triaging
upstream_path: /handbook/support/workflows/sla_and_views/
upstream_sha: c8fa138220d8c6d69f811b17242d6d2f08e4e409
translated_at: "2026-05-08T03:10:58Z"
translator: claude
stale: false
---

> ⚠️ **警告**
> このページは古くなっており、過去の参照目的でのみ利用してください。このページに記載されているプロセスは使用しないでください。

## このページの目的

> ⚠️ **警告**
> このページは古くなっており、過去の参照目的でのみ利用してください。このページに記載されているプロセスは使用しないでください。

チケットが以下の状態にあると仮定します。

- [トリアージ](/handbook/support/workflows/ticket_triage/)済み、かつ
- 正しい組織が紐づいている

その場合、私たちはチケットが以下を満たすことを確認する必要があります。

- 正しい SLA が設定されている、かつ
- 正しい Zendesk (ZD) ビューに表示されている

## プランに応じた適切な SLA {#appropriate-sla-by-plan}

> ⚠️ **警告**
> このページは古くなっており、過去の参照目的でのみ利用してください。このページに記載されているプロセスは使用しないでください。

チケットには [サポートサービスレベル](https://about.gitlab.com/support/#gitlab-support-service-levels) に従って適切な SLA が設定されている必要があります。

ZD 組織の `GitLab Plan`（SFDC では `Support Level` と呼ばれる）の一部の値は、サービスレベルに紐づいていても SLA を受け取りません。これらは SLA を持たないことが想定されます。

- `Community`。[EDU](https://about.gitlab.com/solutions/education/) と [OSS プログラム](https://about.gitlab.com/solutions/open-source/) はサポートを含みませんが、SFDC に存在し同期されます。
- `Expired`。サブスクリプションが期限切れの元顧客。これが正しくないと考える場合は、[誤って期限切れのサポートになっている顧客の取り扱い](#handling-customers-with-incorrect-expired-support) を参照してください。
- `Hold`。これはまれにしか使用されず、支払い遅延または営業プロセス上の他の問題を示します。
顧客のステータスを明確にするために、Account Owner（マネージャー）に連絡することを検討してください。

![GitLab Plan の値の確認](/images/support/zendesk_check_org_fields.gif)

### 誤って期限切れのサポートになっている顧客の取り扱い {#handling-customers-with-incorrect-expired-support}

> ⚠️ **警告**
> このページは古くなっており、過去の参照目的でのみ利用してください。このページに記載されているプロセスは使用しないでください。

`Expired` サポートおよび `Former Customer` とマークされている顧客が、実際には現在も有料の顧客であると考える場合、
このプロセスに従って検証および修正します。

1. [Salesforce](/handbook/support/workflows/looking_up_customer_account_details#within-salesforce) を開き、対象の顧客を検索します。
1. ページ上部の `Show feed` ボタンをクリックします。

  ![SFDC show feed](/images/support/sfdc_show_feed.png)

1. そこで顧客のステータスを明確にするためのメッセージを送信し、SFDC で `@Sales-Support` ユーザー名をメンションします。彼らはそうしたケースに対応できるはずです。
  `@Sales-Support` がクリック可能なユーザー名に変換されていることを確認してください。そうでない場合、Sales Support チームはあなたのメッセージを受け取れません（下の GIF を参照）。

  ![SFDC で Sales-Support に通知する](/images/support/sfdc_sales_support.gif)

  メッセージの例:

  ```plaintext
  John Doe (Support Engineer): @Sales-Support, this organization has
  Support Level set to Expired, and they opened a new ticket. Can you clarify if
  the support is really expired and if we should decline support for this customer, or
  this is some kind of error and Support Level should be updated? Customer also
  provided screenshot of their license and it seems valid.
  ```

  メッセージの先頭に名前と役割（例: `John Doe (Support Engineer):`）を付けると、Support 全体で共有アカウントを使用しているため誰がどのメッセージを送ったかを推測できないので役立ちます。

1. 上記の手順に従ったら、チケットの内部ノートに（SFDC リンクとともに）その旨を記載し、他のメンバーが続きを引き継げるようにします。

**注:** SFDC 側で顧客関連情報が最新でないことに気付き、汎用 `Support Admin` アカウントを使って更新できない場合も同じワークフローが適用されます。

#### `Expired` 組織のチケットのタグ修正 {#fixing-tags-for-tickets-with-expired-organization}

この部分は将来のチケットを修正するために、上記のセクションと組み合わせて行う必要があります。

SFDC または
[CustomersDot](/handbook/support/workflows/looking_up_customer_account_details/#within-customersgitlabcom) のデータが、
顧客が有効なサブスクリプションを持っていることを示している場合、Zendesk 側でチケットを更新する必要があります。

特定のチケットの場合:

1. すべてのタグがリストされている `Tags` フィールドを見つけます。
1. `former_customer` および `expired` タグの隣の `x` をクリックして削除します。
1. 適切なタグ名を入力し始めて、適切なタグを選択します。

- 例: Bronze サブスクリプションの顧客の場合、`Tags` フィールドに `bronze` と入力します。

1. タグが正しく更新されていることを確認したら、チケットを送信して変更を適用します。

![チケットでタグを更新する](/images/support/zendesk_updating_tags.gif)

**注**: タグを割り当てると、チケットが即座に SLA 違反となる可能性があります。
厳密には必要ありませんが、可能であれば違反を防ぐためにタグを割り当てる前に公開返信を送信してください。または、公開返信を書いてタグを適用し、両方の変更を同時にチケットに送信します。

#### チケットに適切な SLA が適用されていることの確認

適切なドメインを追加したら、元のチケットに戻って、適切な組織と SLA に紐づいていることを確認します。

![SLA の検証](/images/support/zendesk_needs_org-verifying-sla.png)

#### 例: 誤って期限切れになっている組織を修正するための一連のアクション

- Zendesk にチケットが届き、`GitLab Plan` が `Expired` と表示されていることに気付きます。
- まず、SFDC と CustomersDot で [この組織に関する情報](looking_up_customer_account_details.md) を検索します。
- 有効なライセンスまたはサブスクリプションを持っていることが判明した場合、つまり期限切れではない場合、おそらく [この問題](https://gitlab.com/gitlab-com/sales-team/field-operations/systems/-/issues/634) に直面しています。
- まず [上記の手順](#handling-customers-with-incorrect-expired-support) に従って SFDC 側を修正します。
  Sales Support は通常 SFDC でのあなたのメッセージに返信するので、組織のページのフィードでそれを見ることができます。
  同期が完了すると、Zendesk 側の `GitLab Plan` の値が `Expired` から有効な値に変わります。
  その後、この組織からの新しいチケットは正しく表示されます。
- 作業中のチケットのタグを [これらの手順](#fixing-tags-for-tickets-with-expired-organization) で修正します。
  SFDC 側の修正を待つ必要はなく、すぐにタグを修正してかまいません。修正後、チケットに SLA が表示されます。
- 行ったことを説明する内部コメントでチケットを更新します。

## SLA なし

> ⚠️ **警告**
> このページは古くなっており、過去の参照目的でのみ利用してください。このページに記載されているプロセスは使用しないでください。

SLA を受け取らないタイプの一覧については [プランに応じた SLA](#appropriate-sla-by-plan) を確認してください。
そうでなければ、SLA がないのは以下のいずれかのケースの可能性があります。

### 直近の公開返信がエージェントから

最後の公開返信が Zendesk エージェント（サポートメンバー）からのものである場合、チケットには SLA がありません。
チケットは誰かに割り当てられているはずで、修正すべきものはないはずです。

### チケットに紐づいていないメールアドレスからの顧客返信

顧客が CC に含まれていないか、元のリクエスト送信者ではないメールアドレスからチケットに返信した場合、その応答は内部として記録されます。
ユーザーを CC に追加して返信するよう人々に思い出させる内部ノートを送る [トリガー](https://gitlab.zendesk.com/agent/admin/triggers/360019008340/revisions/3) があります。詳細は [この Issue](https://gitlab.com/gitlab-com/support/support-team-meta/-/issues/1581) を参照してください。

そのメールが明らかに元のリクエスト送信者の場合は、[ユーザーをマージ](https://support.zendesk.com/hc/en-us/articles/4408887695898-Merging-a-user-s-duplicate-account) できます。

または、顧客のメールを CC に追加します。

返信する（または担当者に知らせる）際には、CC をチケットに追加した旨のメモを顧客に伝えてください。例:

> We got a note from John with email address <john@domain.org>. From the context it looks like they should be included in the ticket, so for convenience I added them to the CC list. If they shouldn't be included, please let us know so we can remove them.`

その後、CC されたユーザーの次回以降の返信は内部としてマークされなくなります。

## チケットビュー

> ⚠️ **警告**
> このページは古くなっており、過去の参照目的でのみ利用してください。このページに記載されているプロセスは使用しないでください。

チケットは適切なビューに表示される必要があります。

### キューが間違っている

チケットが間違ったキューに表示されている場合、Customer Support Operations に連絡してください。

## ヘルプを得る

関連するワークフローに当てはまらないものがあれば、調査して修正を試みることができます。

> **重要**: SFDC 側で何かを行ったり Zendesk のタグを変更したりするときは、必ず内部コメントを残してください。
これにより、次のエンジニアがチケットで行われたことを理解しやすくなります。

ご質問があれば #support_operations Slack チャンネルでお尋ねください。
