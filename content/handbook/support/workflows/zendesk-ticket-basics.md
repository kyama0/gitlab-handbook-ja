---
title: Zendesk チケットの基本
category: Handling tickets
description: Zendesk のさまざまなチケットフィールド、動作、手順に関する情報
upstream_path: /handbook/support/workflows/zendesk-ticket-basics/
upstream_sha: c8fa138220d8c6d69f811b17242d6d2f08e4e409
translated_at: "2026-05-08T05:00:00Z"
translator: claude
stale: false
lastmod: "2026-04-24T17:17:13+12:00"
---

## チケットステータス

Zendesk の各チケットには、現在の状態を示す[ステータス](https://support.zendesk.com/hc/en-us/articles/4408832151834-Updating-and-solving-tickets)があります。

### チケットステータスとその説明

| ステータス   | 状態 | 注記 |
| -------- | ------- | ----- |
| New      | チケットが送信されたばかりで、返信がない状態。 |  |
| Open     | チケットに 1 つ以上の返信があり、ユーザーは GitLab Support の次の返信を待っている状態。 | |
| Pending  | サポートがチケットに返信し、ユーザーの応答を待っている状態。 | ユーザーが 20 日間応答しない場合、Zendesk はチケットのステータスを `Solved` に変更します。 |
| On-Hold  | サポートがチケットに取り組んでいるか、または別の GitLab チームからの情報を待っている状態 | [`On-Hold` チケットの動作](#behavior-of-on-hold-tickets) を参照 |
| Solved   | チケットが解決された状態 | ユーザーが `Solved` チケットに返信すると、Zendesk が再オープンします。Solved チケットのステータスは 7 日後に自動で `Closed` に変わります。 |
| Closed   | チケットがアーカイブされた状態 | ユーザーが `Closed` チケットに返信すると、Zendesk はクローズしたチケットに関連付けるノート付きの新規チケットを開きます。 |

### 必ずユーザーに返信する

ユーザーの返信がチケット内の最後のものである場合、チケットステータスを変更する際に必ず公開返信を送信してください。

返信せずにチケットのステータスを変更しても（`Solved` を除く）、チケットの違反タイマーは止まりません。詳細は [SLA タイマー](#sla-clock) を参照してください。

### ステータス変更オートメーションの回避

デフォルトでは、Zendesk オートメーションは以下を行います:

- `Pending` から 7 日後、ユーザーにまだ応答を待っているという通知を送信します。
- `Pending` から 14 日後、別の通知を送信し、チケットを `Solved` としてマークします。
- `Solved` から 7 日後、チケットをクローズします。

これは通常正しいワークフローですが、これを起こさないようにする必要がある状況があるかもしれません。そのためには、適切な Zendesk ラベルを使用してください:

| ラベル | 動作 |
|-------|--------------|
| skip_autosolve | Zendesk にチケットを `Solved` に自動的に移動するのを控えるように指示します |
| skip_autoclose | Solved チケットの自動クローズ遅延を 7 日から 30 日に増やします |

注: チケットがすでに自動 solve した後に再オープンされ、再度の自動 solve を防ぎたい場合、`autosolve` および `autosolve_message` タグが存在します。`skip_autosolve` タグを追加する際にこれらを削除する必要は **ありません**。

### `On-Hold` チケットの動作 {#behavior-of-on-hold-tickets}

`On-Hold` ステータスのチケットには、いくつかのオートメーションがあります:

- チケットが `On-Hold` に設定されると、トリガー [`Automatically assign on-hold ticket to the engineer who put it to the on-hold status`](https://gitlab.zendesk.com/agent/admin/triggers/360033242313) によって自動的にあなたにアサインされます。
- アサイン担当者がいないチケットは、トリガー [`Automatically reopen on-hold tickets without assignee`](https://gitlab.zendesk.com/agent/admin/triggers/360028981853) によって自動的に再オープンされます。
- アサイン担当者がいるチケットは、チケットタイプが **Task** でない限り、オートメーション [`Reopen on-hold tickets after 4 days`](https://gitlab.zendesk.com/agent/admin/automations/360028978393) によって 4 日後に自動的に再オープンされます。

## SLA タイマー {#sla-clock}

顧客の返信がチケット内の最後のものである場合、（`Solved` を除く）どのステータスにもサイレントに設定しないでください。SLA タイマーが動き続け、チケットが SLA をサイレントに違反する可能性があります。代わりに、確認、挨拶、またはその他のメッセージを送信し、同時にステータスを変更してください。

## チケット件名

サポートチケットの件名が記述的かつ正確であることを確認してください。
タイポを修正したり、問題をより明確にしたりするために件名を編集できます。例:

- gitlab error 500 on login -> gitlab error 500 on login due to no partition of
  relation "audit_events"
- My Account was Blockes -> My Account was Blocked
- git reconfigure with below errors -> git reconfigure with
  letsencrypt_certificate errors

## その他のチケットフィールド

チケットフィールドは、ユーザー体験の向上に役立つ重要なデータを取得するのに役立ちます。

作業しているビューと、チケットに対して選択されているフォームに応じて、いくつかのチケットフィールドを手動で記入する必要がある場合があります。私たちのチケットの大部分はワークフローによって自動で solve または close されるため、チケットの作業を開始する際は、すべての必須（*）フィールドと関連する必須でないフィールドに適切な値を設定することが重要です。

## チケットへの CC の追加

顧客から依頼されたとしても、チケットの CC に外部の連絡先を追加しようとしないでください。
セキュリティポリシー上、顧客は自分で CC を追加する必要があります。CC を追加する方法については、[対応する手順](https://about.gitlab.com/support/portal/#adding-additional-participants-ccs-to-your-ticket)に顧客を案内してください。

内部連絡先（他の SE、顧客の CSM など）は自分で追加できます。

## 大きなファイルの取り扱い

Zendesk にはファイルあたり 50MB の[固定の最大添付ファイルサイズ](https://support.zendesk.com/hc/en-us/articles/4408882848538-Can-I-change-the-attachment-size-limit-in-ticket-comments)があります。これより大きいファイルをユーザーに共有してもらう必要がある場合、対処方法については [GitLab Support に大きなファイルを提供する](https://about.gitlab.com/support/providing-large-files/)を参照してください。

## チケットのマージ

**警告:** マージされるチケットの添付ファイルはチケット間で共有されます。これらのチケットの両方の CC に含まれる全員がファイルを受け取ります。

[チケットをマージ](https://support.zendesk.com/hc/en-us/articles/4408882445594-Merging-tickets)する際は、SLA を維持するため、マージ先のチケット（上から 2 番目のチケット）で `Requester can see this comment` を **オフのまま** にしてください。マージコメントが公開されると、Zendesk はそれを応答と見なし、SLA を解除します。別のチケットにマージされたチケットはクローズされ、ターゲットチケットのステータスは影響を受けません。

**注:** チケットのマージは最終的なものです - 取り消すオプションはありません。

## ZenGuard - アクション警告システム

ZenGuard は Global Zendesk のみにデプロイされた Zendesk アプリケーションです。望ましくない結果につながる可能性のある高リスクなアクションに対して、警告ダイアログと確認プロンプトを提供します。これは、チケットを再オープンしたり再作成したりする必要がある一般的なミスを防ぐのに役立ちます。

### ZenGuard が保護する対象

このアプリは警告を提供し、特定のアクションをブロックします:

- **期限の問題**: 過去の期限の設定、または遠すぎる将来の期限の設定
- **外部コラボレーターのリスク**: エンドユーザーをコラボレーター／CC に追加すること
- **応答なしのステータス変更**: 内部ノートのみでチケットを pending に設定すること
- **On-hold タイマーリセット**: SLA タイマーをリセットしない on-hold チケットへの公開返信
- **公開返信の欠落**: 公開返信なしでチケットを on-hold に設定すること
- **フォーム変更によるクローズ**: 自動クローズを引き起こすチケットフォームの変更

### ZenGuard の動作

潜在的に問題のあるアクションを試みると、ZenGuard は以下を行います:

1. 潜在的な問題を説明する **警告ダイアログを表示** します
2. バイパスできない場合は **アクションをブロック** します（"this cannot be bypassed" としてマーク）
3. 特定の警告については、アプリの[リフレッシュ](#how-to-refresh-zenguard)または確認後の続行による **バイパスを許可** します。ブロックされたアクションはバイパスできます

### よくあるシナリオと解決策

#### 警告のバイパス

一部の警告は、以下のいずれかの方法でバイパスできます::

- ZenGuard アプリを[リフレッシュ](#how-to-refresh-zenguard)する
- 確認ダイアログをクリックする（許可される場合）

クリティカルな安全チェック（応答なしの pending 設定など）はバイパスできない点に注意してください。

#### ZenGuard のリフレッシュ方法 {#how-to-refresh-zenguard}

1. アプリリスト（Zendesk の右側）のアイコン、または見えない場合は + をクリックして新しいアプリをピンし ZenGuard を選択して、ZenGuard アプリを開きます。
2. アプリのタイトルにあるリロードボタンをクリックします。

![Browser plug-in](/images/support/workflows/assets/zenguard-reload.png)

#### トラブルシューティング

ZenGuard が正当なアクションを妨げる場合:

1. 警告ダイアログにバイパスオプションがあるかを確認します
2. すべての必須フィールドが適切に入力されていることを確認します
3. マクロ関連の問題の場合は、しばらく待って再度送信します
4. 問題が続く場合は、[Support Operations プロジェクト](https://gitlab.com/gitlab-com/gl-security/corp/cust-support-ops/issue-tracker/-/issues/new?issuable_template=Bug)に新規 Issue を起票します

### 関連リソース

- [RFC: What Zendesk "pitfalls" are we most worried about when working tickets](https://gitlab.com/gitlab-com/support/support-team-meta/-/issues/6683#top)
- Support Operations Issue: [Feature Request: Zendesk Action Warning System](https://gitlab.com/gitlab-com/gl-security/corp/cust-support-ops/issue-tracker/-/issues/122)
- Support Deployment Issue: [ZenGuard App Deployment - Zendesk Action Warning System](https://gitlab.com/gitlab-com/support/support-team-meta/-/issues/6898)
