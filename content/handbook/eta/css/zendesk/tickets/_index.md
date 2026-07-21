---
title: 'チケット'
description: 'Zendesk チケットに関するドキュメント'
upstream_path: "/handbook/eta/css/zendesk/tickets/"
upstream_sha: "db1b52fb5e65d37509c3eaaaebfd50dd491e4b36"
lastmod: "2026-07-21T09:28:24-05:00"
translated_at: "2026-07-22T06:32:52+09:00"
translator: codex
stale: false
---

このガイドでは、チケットのステータス、システム設定、一般的な Support Systems のワークフローなど、Zendesk でのチケット管理について説明します。

## チケットについて

### チケットの作成

従来、エンドユーザーには自分でチケットを作成してもらいます。それが理想的でない場合には、使用できる決まった選択肢があります。

#### Zendesk Super App 経由

{{% alert title="注記" color="primary" %}}

- このオプションは Customer Support Systems または Support チームのメンバーのみが利用できます

{{% /alert %}}

既存のユーザーから新しいチケットを作成する必要がある場合に使用します。この場合は、対応するアプリを使用します。

- Zendesk Global: [Zendesk Super App](/handbook/eta/css/zendesk/apps/global#zendesk-super-app)
- Zendesk US Government: [Zendesk Super App](/handbook/eta/css/zendesk/apps/us-government#zendesk-super-app)

#### アウトバウンドコミュニケーションの場合

{{% alert title="注記" color="primary" %}}

- このオプションを利用できるのは次の人のみです。
  - Customer Support Systems チームのメンバー
  - Support チームのメンバーで、エージェントロールが `Support Staff - CMOC` の人（Zendesk Global のみ）

{{% /alert %}}

詳細については、Support チームの[通知の送信に関するドキュメント](/handbook/support/workflows/sending_notices)を参照してください。

### チケットの表示

チケットの表示については、次を参照してください。

- [ビュー](/handbook/eta/css/zendesk/views/)
- [検索](/handbook/eta/css/zendesk/searching/)

### ステータス

[Zendesk](https://support.zendesk.com/hc/en-us/articles/4408832151834-Updating-and-solving-tickets#topic_i3y_np1_vt)によると、各ステータスは次のように定義されています。

- New
  - チケットに対してまだ何もアクションが行われていないことを示します。New チケットのステータスを変更すると、New に戻すことはできません。
- Open
  - チケットがエージェントによるアクションを待っていることを示します。
- Pending
  - エージェントが依頼者からの追加情報を待っていることを示します。依頼者が返信して新しいコメントが追加されると、チケットのステータスは自動的に Open にリセットされます。
- On-hold
  - エージェントが依頼者以外の誰かからの情報またはアクションを待っていることを示します。誰かから追加情報を受け取るまでチケットの解決を進められないという点で Pending ステータスと似ています。ただし、On-hold はチケットの依頼者には表示されない内部ステータスです。チケットが On-hold に設定されている間、依頼者にはステータスが Open と表示されます。
- Solved
  - エージェントが解決策を提出したか、エンドユーザーがそのようにマークしたことを示します。解決済みチケットも編集または再オープンできます。
- Closed
  - チケットが更新を受け取れない状態にあることを示します。クローズされたチケットに返信すると、以前のすべてのタグと前のチケットへのリンクを含むフォローアップチケットが開きます。

GitLab では、これらを少し異なる方法で定義しています。

- New
  - これは新しいチケットです。GitLab がまだ対応していないことを意味します。
- Open
  - チケットが私たちの返信を待っていることを意味します。
- Pending
  - エンドユーザーの返信を待っていることを意味します。これは、ユーザーがチケットに返信する場合（または自動解決される場合）にのみ使用してください。長期間にわたりチケットを「保留」のような状態にしておく必要がある場合は、On-hold を使用してください。
- On-hold
  - エンドユーザーが私たちを待っている一方で、私たちは返信を妨げる何かを待っていることを意味します。別の部門、時間の経過（例: namesquatting のリクエスト）、または同じ概念に当てはまるその他の基準などを待っている状況でのみ使用してください。
- Solved
  - チケットが解決済みであるものの、エンドユーザーが再度連絡してくる可能性があることを意味します。
- Closed
  - Zendesk の定義どおりに使用します。

### 現在のシステムチケット設定

これらの設定は参照用に記載しており、変更が必要になることはほとんどありません。

<details>
<summary>Zendesk Global 向け</summary>

- コメント
  - [x] 絵文字のテキスト置換を有効にする
  - [x] テキストの色を有効にする
  - [x] 作成したメッセージをデフォルトでパブリックチャネルに設定する
  - [x] メール経由のエージェントコメントをデフォルトでパブリックにする
  - [ ] チケットの最初のコメントを非公開にできるようにする
  - URI をハイパーリンクとしてレンダリングする: `["[]"]`
  - [ ] CC されたエンドユーザーからのメールコメントをパブリックにする（非推奨）
- 添付ファイル
  - [x] 顧客がファイルを添付できるようにする
  - [x] セキュアなダウンロードを有効にする
- タグ
  - [x] チケットでタグを有効にする
    - [ ] チケットの自動タグ付けを有効にする
- チケットの CC とフォロワー
  - [x] フォロワーを許可する
    - フォロワー用メールをカスタマイズする: `{{ticket.title}}`
    - メール本文を作成する

      ```plaintext
      You are a follower on this request ({{ticket.link}}). {{ticket.follower_reply_type_message}}

      {{ticket.comments_formatted}}
      ```

  - [x] CC を許可する
    - CC とフォロワーのブロックリスト: `noreply@google.com`
    - [x] ライトエージェントをチケットに追加できるようにする
    - [x] エンドユーザーがリクエストに CC を追加できるようにする
  - [x] CC されたエージェントを自動的にフォロワーにする
  - [ ] エージェントによる依頼者の変更を許可する
- 割り当て
  - [x] 解決時にチケットを自動割り当てする
  - [x] 一般グループへの再割り当てを許可する
- フォローアップ
  - [ ] 元の担当者とグループをフォローアップチケットにコピーする
- 保留中チケット通知
  - `Never` 新しい保留中チケットに関するメールを受け取る頻度。
  - メールリスト:
- チケット ID
  - チケット ID カウンターを設定する
    - この値はチケット量に応じて変わります。変更しないでください
- クローズ済みチケットの変更
  - [ ] 有効にする
- メールアーカイブ
  - メールアドレスをアーカイブする:
- 文字起こしの表示範囲
  - 会話の文字起こしをチケットに段階的に追加する方法: `As public reply`
- 継続的な会話
  - [ ] メッセージング会話をメールに切り替える
- 翻訳
  - [x] エージェントが会話を翻訳できるようにする
- 解決済みチケットの再割り当て
  - [ ] 解決済みチケットの再割り当てを有効にする
    - [ ] 解決済みチケットの再割り当てを表示する
    - 新しく作成したグループの解決済みチケット再割り当てオプションにアカウントレベルのデフォルトを設定する: `To an admin or longest active team member`
    - [ ] すべてのグループに今すぐアカウントレベルのデフォルトを適用する
- メッセージングのエージェントコラボレーション
  - [x] 複数のエージェントがメッセージング会話でコラボレーションできるようにする

</details>
<details>
<summary>Zendesk US Government 向け</summary>

- コメント
  - [x] 絵文字のテキスト置換を有効にする
  - [x] テキストの色を有効にする
  - [x] 作成したメッセージをデフォルトでパブリックチャネルに設定する
  - [x] メール経由のエージェントコメントをデフォルトでパブリックにする
  - [ ] チケットの最初のコメントを非公開にできるようにする
  - URI をハイパーリンクとしてレンダリングする: `["[]"]`
  - [ ] CC されたエンドユーザーからのメールコメントをパブリックにする（非推奨）
- 添付ファイル
  - [x] 顧客がファイルを添付できるようにする
  - [x] セキュアなダウンロードを有効にする
- タグ
  - [x] チケットでタグを有効にする
    - [ ] チケットの自動タグ付けを有効にする
- チケットの CC とフォロワー
  - [x] フォロワーを許可する
    - フォロワー用メールをカスタマイズする: `{{ticket.title}}`
    - メール本文を作成する

      ```plaintext
      You are a follower on this request ({{ticket.id}}). {{ticket.follower_reply_type_message}}

      {{ticket.comments_formatted}}
      ```

  - [ ] CC を許可する
  - [~] CC されたエージェントを自動的にフォロワーにする
  - [ ] エージェントによる依頼者の変更を許可する
- 依頼者
  - [ ] エージェントが依頼者を変更できるようにする
- 割り当て
  - [x] 解決時にチケットを自動割り当てする
  - [x] 一般グループへの再割り当てを許可する
- フォローアップ
  - [ ] 元の担当者とグループをフォローアップチケットにコピーする
- 保留中チケット通知
  - `Never` 新しい保留中チケットに関するメールを受け取る頻度。
  - メールリスト:
- チケット ID
  - チケット ID カウンターを設定する
    - この値はチケット量に応じて変わります。変更しないでください
- クローズ済みチケットの変更
  - [ ] 有効にする
- メールアーカイブ
  - メールアドレスをアーカイブする:
- 文字起こしの表示範囲
  - 会話の文字起こしをチケットに段階的に追加する方法: `As public reply`
- 継続的な会話
  - [ ] メッセージング会話をメールに切り替える
- 翻訳
  - [x] エージェントが会話を翻訳できるようにする
- 解決済みチケットの再割り当て
  - [ ] 解決済みチケットの再割り当てを有効にする
    - [ ] 解決済みチケットの再割り当てを表示する
    - 新しく作成したグループの解決済みチケット再割り当てオプションにアカウントレベルのデフォルトを設定する: `To an admin or longest active team member`
    - [ ] すべてのグループに今すぐアカウントレベルのデフォルトを適用する
- メッセージングのエージェントコラボレーション
  - [x] 複数のエージェントがメッセージング会話でコラボレーションできるようにする

</details>

### 現在のチケット共有設定

これらの設定は参照用に記載しており、変更が必要になることはほとんどありません。

<details>
<summary>Zendesk Global 向け</summary>

- 送信契約: 0
- 受信契約
  - `Pivotal @ Zendesk` `Public comments allowed. Sync status and share tags` `Accepted`
- 共有をオプトアウトする
  - [ ] すべての共有契約の招待を拒否する

</details>
<details>
<summary>Zendesk US Government 向け</summary>

- 送信契約: 0
- 受信契約: 0
- 共有をオプトアウトする
  - [ ] すべての共有契約の招待を拒否する

</details>

## 管理者タスク

{{% alert title="注記" color="primary" %}}

- このセクションのすべての項目には Zendesk の `Administrator` レベルのアクセスが必要です。

{{% /alert %}}

### クローズ済みチケットの変更

Zendesk にはクローズ済みチケットの一部の値を更新する機能がありますが、私たちはそのアクションを実行しません。Zendesk のデータを利用する複数チームとの議論と、クローズ済みチケットの変更が顧客対応に与える影響のレビューを踏まえ、決定は次の理由に基づいています。

- クローズ済みチケットを更新すると、顧客に悪影響が及ぶ（実行可能な回避策はない）
- クローズ済みチケットを更新すると、Zendesk Explore のレポート／ダッシュボードに重大な影響があり、完全な再設定が必要になる
- クローズ済みチケットを更新すると、データウェアハウス内のレポートに重大な影響があり、完全な再設定が必要になる
- クローズ済みチケットを更新すると、データウェアハウス内のデータ全体の完全な再インデックスが必要になる（多大なリソースを消費し、5 日以上を要する）
- カスタムビュー、カスタムテーブル、AI を使ってデータウェアハウス内で実行できる有効な回避策がある（クローズ済みチケットを更新することで得られると考えられる利点を打ち消す）

### システムチケット設定の変更

{{% alert title="危険" color="danger" %}}

- これはサポートポータルの使いやすさに大きな影響を与える可能性があるため、細心の注意を払ってください。
- 対応するリクエスト Issue（Feature Request、Administrative、Bug など）がある場合にのみ実施してください。
- システムチケット設定を変更した場合は、このページの[現在のシステムチケット設定](#current-system-ticket-settings)を必ず更新してください

{{% /alert %}}

システムチケット設定を変更するには、次の手順に従います。

1. Zendesk インスタンスの管理ダッシュボードに移動する
   - [Zendesk Global (production)](https://gitlab.zendesk.com/admin/home)
   - [Zendesk Global (sandbox)](https://gitlab1707170878.zendesk.com/admin/home)
   - [Zendesk US Government (production)](https://gitlab-federal-support.zendesk.com/admin/home)
   - [Zendesk US Government (sandbox)](https://gitlabfederalsupport1585318082.zendesk.com/admin/home)
1. `Objects and rules > Tickets > Settings` に移動する
   - [Zendesk Global](https://gitlab.zendesk.com/admin/objects-rules/tickets/ticket-settings)
   - [Zendesk Global (sandbox)](https://gitlab1707170878.zendesk.com/admin/objects-rules/tickets/ticket-settings)
   - [Zendesk US Government](https://gitlab-federal-support.zendesk.com/admin/objects-rules/tickets/ticket-settings)
   - [Zendesk US Government (sandbox)](https://gitlabfederalsupport1585318082.zendesk.com/admin/objects-rules/tickets/ticket-settings)
1. 変更する設定を変更する
1. ページ右下の `Save` をクリックする

### チケット共有設定の変更

{{% alert title="危険" color="danger" %}}

- これはサポートポータルの使いやすさに大きな影響を与える可能性があるため、細心の注意を払ってください。
- 対応するリクエスト Issue（Feature Request、Administrative、Bug など）がある場合にのみ実施してください。
- チケット共有設定を変更した場合は、このページの[現在のチケット共有設定](#current-ticket-sharing-settings)を必ず更新してください

{{% /alert %}}

チケット共有設定を変更するには、次の手順に従います。

1. Zendesk インスタンスの管理ダッシュボードに移動する
   - [Zendesk Global (production)](https://gitlab.zendesk.com/admin/home)
   - [Zendesk Global (sandbox)](https://gitlab1707170878.zendesk.com/admin/home)
   - [Zendesk US Government (production)](https://gitlab-federal-support.zendesk.com/admin/home)
   - [Zendesk US Government (sandbox)](https://gitlabfederalsupport1585318082.zendesk.com/admin/home)
1. `Objects and rules > Tickets > Sharing` に移動する
   - [Zendesk Global](https://gitlab.zendesk.com/admin/objects-rules/tickets/ticket-sharing)
   - [Zendesk Global (sandbox)](https://gitlab1707170878.zendesk.com/admin/objects-rules/tickets/ticket-sharing)
   - [Zendesk US Government](https://gitlab-federal-support.zendesk.com/admin/objects-rules/tickets/ticket-sharing)
   - [Zendesk US Government (sandbox)](https://gitlabfederalsupport1585318082.zendesk.com/admin/objects-rules/tickets/ticket-sharing)
1. 変更する設定を変更する
1. ページ右下の `Save tab` をクリックする

## Customer Support Systems のワークフロー

### チケットの処理

{{% alert title="注記" color="primary" %}}

- これは Customer Support Systems チームがチケットを処理する方法にのみ関係します。他のチームによるチケットの処理方法を反映するものではありません。

{{% /alert %}}

#### サポート連絡先の管理

連絡先の管理に関する Zendesk Global チケットについては、[組織の関連付けに関するドキュメント](/handbook/eta/css/zendesk/organizations/association)を参照してください。

連絡先の管理に関する Zendesk US Government チケットでは、すべてのサポート連絡先の関連付けが Salesforce アカウントとの同期によって行われます。そのため、ここでは支援できません。依頼者には、新しいメールを通じてアカウントマネージャーに連絡するよう案内する必要があります。必ずアカウントマネージャーのメールアドレスを提供してください。

#### 共有組織のリクエスト

[共有組織の設定に関するドキュメント](/handbook/eta/css/zendesk/organizations/shared-orgs)を参照してください。

#### ポータルの Issue

これらはサポートポータル内の問題に関する報告です。それぞれの Issue には固有の課題がある場合がありますが、ユーザー向けの一般的なトラブルシューティングガイドは次にあります。

- [Zendesk Global](https://support.gitlab.com/hc/en-us/articles/11626501035292-Support-Portal-User-Guide#support-portal-troubleshooting)
- [Zendesk US Government](https://federal-support.gitlab.com/hc/en-us/articles/22616053222292-Support-Portal-User-Guide#support-portal-troubleshooting)

チケットを受け取る時点で、ユーザーがそのすべてを実施している場合も、していない場合もあります。実施していない場合は、まずすべて試すよう案内してください。

実施している場合は、送信された内容の詳細を分析して次のステップを判断する必要があります。

#### 予備メールアドレスの追加リクエスト

サポートポータルアカウントに予備のメールアドレスを追加したいという Issue を顧客が起票することがあります。予備メールアドレスは、送信されたチケットを特定のアカウントに紐付けるために使用しますが、送信者として使用される（したがって通知を受け取る）のはプライマリメールアドレスのみです。

- GitLab.com ユーザーの場合:
  - 依頼者のメールアドレスに関連付けられた GitLab.com アカウントで、予備メールアドレスが確認済みとして登録されている必要があります。これは User Lookup アプリで確認できます。GitLab.com アカウントに予備メールアドレスを追加するには、[このドキュメント](https://docs.gitlab.com/user/profile/#add-emails-to-your-user-profile)に従います
- Self Managed および GitLab Dedicated ユーザーの場合:
  - 既存のプロファイルに追加したいメールアドレスからチケットを送信する必要があります
  - 顧客はこの予備メールアドレスを通じて、サポート資格の証明を再度提出する必要があります
  - 顧客はサポートポータルアカウントのプライマリメールアドレスを CC に追加し、そのメールアドレスから、サポートポータルアカウントへの予備メールアドレス追加リクエストを確認する返信をチケットに送ってもらう必要があります。
- パートナーの場合:
  - Self Managed および GitLab Dedicated ユーザーと同じ手順を使用します

#### 不正なフォームのチケット

チケットで不正なフォームが使用されている場合、エージェントは `General::Forms::Incorrect form used` マクロを使用します。これによりフォームが `Support Ops` に変更され、チケットにタグが付けられ、内部メモが残されます。そこからチケットをレビューし、次のステップを決定します。

ここでの最終目標は、正しいフォームへ移動することです。そのための経路は多くの要因に左右されますが、一般的には次のとおりです。

- 「有料のみ」フォームに移動し、ユーザーが未関連付けの場合:
  - Organization association のプロセスに従ってユーザーを関連付ける
    - 関連付けられない場合、チケットを移動することはできません
  - チケットの `Assignee` 値を `Support Ops`（グループ）に設定する
    - これによりチケットの割り当てが解除されます。チケットが私たちに送られた際に追加された内部メモで別の指示がない限り、常にこれを実行してください
  - チケットの `Form` 値を新しいフォームに変更する
  - 新しいフォームに必要なチケットメタデータを可能な限りすべて入力する
    - チケットに存在する場合は、`Ticket Stage` フィールドを `FRT` に設定する
  - 次のタグを削除する
    - `base_weight_set`
  - チケットを送られてきたときと_同じ状態_で送信するようにしてください
- 「有料のみ」フォームに移動し、ユーザーが関連付け済みの場合:
  - チケットの `Assignee` 値を `Support Ops`（グループ）に設定する
    - これによりチケットの割り当てが解除されます。チケットが私たちに送られた際に追加された内部メモで別の指示がない限り、常にこれを実行してください
  - チケットの `Form` 値を新しいフォームに変更する
  - 新しいフォームに必要なチケットメタデータを可能な限りすべて入力する
    - チケットに存在する場合は、`Ticket Stage` フィールドを `FRT` に設定する
  - チケットを送られてきたときと_同じ状態_で送信するようにしてください
- 誰でも利用できるフォームに移動する場合:
  - チケットの `Assignee` 値を `Support Ops`（グループ）に設定する
    - これによりチケットの割り当てが解除されます。チケットが私たちに送られた際に追加された内部メモで別の指示がない限り、常にこれを実行してください
  - チケットの `Form` 値を新しいフォームに変更する
  - 新しいフォームに必要なチケットメタデータを可能な限りすべて入力する
    - チケットに存在する場合は、`Ticket Stage` フィールドを `FRT` に設定する
  - チケットを送られてきたときと_同じ状態_で送信するようにしてください

##### フォームに関する特別な注意事項

- `2FA Removal` フォームにチケットを移動する場合
  - 削除リクエストの対象が依頼者とは異なるユーザーである場合、依頼者は対象ユーザーのメールアドレスを**必ず**提供する必要があります。まだ提供されていない場合は、依頼者がその情報を提供する必要がある旨の内部メモを残してください。その後、代わりにチケットを `SaaS Accounts` フォームに移動します。
- `L&R` フォームにチケットを移動する場合
  - チケットを L&R フォームに移動するときは、最初に適切なサブチームにルーティングされるようにする必要があります。これを行うには、`BPO Ticket` チェックボックス（チケットメタデータの下部）がオンになっていることを確認してください。オンにしないと、チケットのルーティングで問題が発生する可能性があります。
- `Billing` フォームにチケットを移動する場合
  - チケットの `Billing/AR Team` 属性が入力されていることを確認する必要があります。どの値を使用すべきかが不明な場合は、`Billing` に設定してください

#### 悪意のあるユーザーへの対応

{{% alert title="危険" color="danger" %}}

- 悪意のあるユーザーを扱う際は細心の注意を払ってください。不明な点がある場合は、ためらわずにセキュリティチームへ支援を依頼してください。侵害を引き起こすよりも、支援を求める方が**常に**望ましいです。

{{% /alert %}}

潜在的な悪意のある行為（ハッキング、フィッシング、不正利用など）を含むチケットが発生した場合は、常に真剣に扱う必要があります。

徹底的な調査の後に悪意のあるものと判断された場合は、[ユーザーを禁止します](/handbook/eta/css/zendesk/users/end-users#banning-an-end-user)

不明な点がある場合は、マネージャー、Customer Support Systems Fullstack Engineer、および／または GitLab Security チームにエスカレーションしてください。

## 一般的な問題とトラブルシューティング

これは必要に応じて項目が追加される継続的なセクションです。
