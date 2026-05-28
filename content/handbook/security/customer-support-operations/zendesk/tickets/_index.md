---
title: 'チケット'
description: 'Zendesk のチケットに関するドキュメント'
upstream_path: /handbook/security/customer-support-operations/zendesk/tickets/
upstream_sha: 6f812a8fec541dba51e50314e85d7890b9e71d7d
translated_at: "2026-05-28T21:12:16Z"
translator: claude
stale: false
lastmod: "2026-05-26T12:05:00-05:00"
---

このガイドでは、チケットステータス、システム設定、サポートオペレーションの一般的なワークフローを含む、Zendesk のチケット管理について説明します。

## チケットを理解する

### チケットを作成する

伝統的に、私たちはエンドユーザー自身でチケットを作成してもらいたいと考えています。それが理想的でない状況では、利用可能な定められたオプションがあります。

#### Zendesk Super App 経由

{{% alert title="注意" color="primary" %}}

- このオプションは Customer Support Operations またはサポートチームに所属する人のみ利用できます

{{% /alert %}}

これは既存ユーザーから新規チケットを作成する必要がある場合に使用すべきです。これには、対応するアプリを使用します。

- Zendesk Global の場合: [Zendesk Super App](/handbook/security/customer-support-operations/zendesk/apps/global#zendesk-super-app)
- Zendesk US Government の場合: [Zendesk Super App](/handbook/security/customer-support-operations/zendesk/apps/us-government#zendesk-super-app)

#### 送信通信用

{{% alert title="注意" color="primary" %}}

- このオプションは以下に該当する人のみ利用できます:
  - Customer Support Operations チームに所属
  - サポートチームに所属し、エージェントロール `Support Staff - CMOC` を持つ（Zendesk Global のみ）

{{% /alert %}}

詳細はサポートチームの[通知の送信ドキュメント](/handbook/support/workflows/sending_notices)を参照してください。

### チケットを表示する

チケットの表示については以下を参照してください。

- [ビュー](/handbook/security/customer-support-operations/zendesk/views/)
- [検索](/handbook/security/customer-support-operations/zendesk/searching/)

### ステータス

[Zendesk](https://support.zendesk.com/hc/en-us/articles/4408832151834-Updating-and-solving-tickets#topic_i3y_np1_vt) によると、各種ステータスは以下のように定義されています。

- New
  - チケットに対してアクションが取られていないことを示します。一度 New チケットのステータスが変更されると、二度と New に戻すことはできません。
- Open
  - チケットがエージェントによるアクションを待っていることを示します。
- Pending
  - エージェントが依頼者からの追加情報を待っていることを示します。依頼者が応答して新しいコメントが追加されると、チケットステータスは自動的に Open にリセットされます。
- On-hold
  - エージェントが依頼者以外の誰かからの情報またはアクションを待っていることを示します。Pending ステータスと似ていますが、エージェントとして他の誰かからの情報を受け取るまでチケットを解決することはできません。ただし、On-hold は内部ステータスで、チケット依頼者には見えません。チケットが On-hold に設定されている間、依頼者にはステータスが Open として表示されます。
- Solved
  - エージェントが解決策を提示した、またはエンドユーザーがその旨マークしたことを示します。Solved チケットはまだ編集または再度開くことができます。
- Closed
  - チケットが更新を受け付けない状態にあることを示します。クローズされたチケットへの返信はフォローアップチケットを開き、これには以前のすべてのタグと前のチケットへのリンクが含まれます。

GitLab では、これらを少し異なる形で定義します。

- New
  - これは新規チケットです。これは、まだ GitLab で対応していないことを意味します。
- Open
  - チケットが私たちの返信を待っていることを意味します。
- Pending
  - エンドユーザーからの返信を待っていることを意味します。これは特に、ユーザーがチケットに返信する（または自動解決する）場合にのみ使用すべきです。長期間「pending のような」状態にチケットを保持する必要がある場合は On-hold を使用してください。
- On-hold
  - エンドユーザーが私たちを待っているが、私たちは返信を妨げる何かを待っていることを意味します。私たちは、別の部署、時間の経過（例として namesquatting リクエスト）、または同じコンセプトに沿ったその他の基準などの何かを待っている状況でのみこれを使用すべきです。
- Solved
  - チケットが解決されたが、エンドユーザーが私たちに戻ってくる可能性があることを意味します。
- Closed
  - Zendesk が定義するとおりに使用します。

### 現在のシステムチケット設定 {#current-system-ticket-settings}

これらの設定はリファレンスとしてここに記載されており、変更されることはまれです。

<details>
<summary>Zendesk Global の場合</summary>

- コメント
  - [x] 絵文字テキスト置換を有効にする
  - [x] カラーテキストを有効にする
  - [x] 作成済みをデフォルトでパブリックチャンネルに設定
  - [x] メール経由のエージェントコメントはデフォルトでパブリック
  - [ ] チケットの最初のコメントを非公開にすることを許可
  - URI をハイパーリンクとしてレンダリング: `["[]"]`
  - [ ] CC されたエンドユーザーからのメールコメントをパブリックにする（推奨されません）
- 添付ファイル
  - [x] 顧客がファイルを添付できるようにする
  - [x] セキュアダウンロードを有効にする
- タグ
  - [x] チケット上のタグを有効にする
    - [ ] 自動チケットタグ付けを有効にする
- CC
  - [x] チケット上の CC を有効にする
    - [ ] エージェントのみが CC を追加できるようにする
    - [x] Help Center のエンドユーザーに対して CC を有効にする
    - CC ブラックリスト: `noreply@google.com`
    - CC メール件名: `[{{ticket.account}}] Update: {{ticket.title}}`
    - CC メール本文:

      ```plaintext
      You are registered as a CC on this support request ({{ticket.link}}). Reply to this email to add a comment to the request.

      {{ticket.comments_formatted}}

      ```

- 割り当て
  - [x] 解決時にチケットを自動割り当て
  - [x] 一般グループへの再割り当てを許可
- フォローアップ
  - [ ] 元の担当者とグループをフォローアップチケットにコピー
- サスペンドチケット通知
  - `Never` 新しいサスペンドチケットに関するメールを受信する頻度
  - メールリスト:
- チケット ID
  - チケット ID カウンタを設定
    - この値はチケット量に基づいて変化します。触れないでください
- クローズチケットの変更
  - [ ] オン
- メールアーカイブ
  - アーカイブメールアドレス:
- トランスクリプトの可視性
  - 会話トランスクリプトをチケットに段階的に追加する方法: `As public reply`
- 継続的な会話
  - [ ] メッセージング会話をメールに切り替える
- 翻訳
  - [x] エージェントは会話を翻訳できる
- Solved チケットの再割り当て
  - [ ]  Solved チケットの再割り当てをオンにする
    - [ ] Solved チケットの再割り当てを表示
    - 新規作成されたグループ向けの Solved チケット再割り当てオプションのアカウントレベルのデフォルトを設定: `To an admin or longest active team member`
    - [ ] すべてのグループにアカウントレベルのデフォルトを今すぐ強制適用
- メッセージングのエージェントコラボレーション
  - [x]  複数のエージェントがメッセージング会話で協力できる

</details>
<details>
<summary>Zendesk US Government の場合</summary>

- コメント
  - [x] 絵文字テキスト置換を有効にする
  - [x] カラーテキストを有効にする
  - [x] 作成済みをデフォルトでパブリックチャンネルに設定
  - [x] メール経由のエージェントコメントはデフォルトでパブリック
  - [ ] チケットの最初のコメントを非公開にすることを許可
  - URI をハイパーリンクとしてレンダリング: `["[]"]`
  - [ ] CC されたエンドユーザーからのメールコメントをパブリックにする（推奨されません）
- 添付ファイル
  - [x] 顧客がファイルを添付できるようにする
  - [x] セキュアダウンロードを有効にする
- タグ
  - [x] チケット上のタグを有効にする
    - [ ] 自動チケットタグ付けを有効にする
- CC
  - [x] フォロワーを有効にする
    - フォロワーメール件名: `{{ticket.title}}`
    - フォロワーメールテンプレート:

      ```plaintext
      You are a follower on this request ({{ticket.link}}). {{ticket.follower_reply_type_message}}

      {{ticket.comments_formatted}}
      ```

  - [ ] CC を有効にする
  - [ ] エージェント CC を自動的にフォロワーにする
- 依頼者
  - [ ] エージェントが依頼者を変更できる
- 割り当て
  - [x] 解決時にチケットを自動割り当て
  - [x] 一般グループへの再割り当てを許可
- フォローアップ
  - [ ] 元の担当者とグループをフォローアップチケットにコピー
- サスペンドチケット通知
  - `Never` 新しいサスペンドチケットに関するメールを受信する頻度
  - メールリスト:
- チケット ID
  - チケット ID カウンタを設定
    - この値はチケット量に基づいて変化します。触れないでください
- クローズチケットの変更
  - [ ] オン
- メールアーカイブ
  - アーカイブメールアドレス:
- トランスクリプトの可視性
  - 会話トランスクリプトをチケットに段階的に追加する方法: `As public reply`
- 継続的な会話
  - [ ] メッセージング会話をメールに切り替える
- 翻訳
  - [x] エージェントは会話を翻訳できる
- Solved チケットの再割り当て
  - [ ]  Solved チケットの再割り当てをオンにする
    - [ ] Solved チケットの再割り当てを表示
    - 新規作成されたグループ向けの Solved チケット再割り当てオプションのアカウントレベルのデフォルトを設定: `To an admin or longest active team member`
    - [ ] すべてのグループにアカウントレベルのデフォルトを今すぐ強制適用
- メッセージングのエージェントコラボレーション
  - [x]  複数のエージェントがメッセージング会話で協力できる

</details>

### 現在のチケット共有設定 {#current-ticket-sharing-settings}

これらの設定はリファレンスとしてここに記載されており、変更されることはまれです。

<details>
<summary>Zendesk Global の場合</summary>

- 送信合意: 0
- 受信合意
  - `Pivotal @ Zendesk` `Public comments allowed. Sync status and share tags` `Accepted`
- 共有のオプトアウト
  - [ ] すべての共有合意の招待を拒否

</details>
<details>
<summary>Zendesk US Government の場合</summary>

- 送信合意: 0
- 受信合意: 0
- 共有のオプトアウト
  - [ ] すべての共有合意の招待を拒否

</details>

## 管理者タスク

{{% alert title="注意" color="primary" %}}

- このセクションのすべての項目は、Zendesk への `Administrator` レベルのアクセスが必要です。

{{% /alert %}}

### クローズチケットを変更する

Zendesk にはクローズチケット内のいくつかの値を更新する機能がありますが、これは私たちが実施するアクションではありません。Zendesk のデータを利用するいくつかのチームとの議論、およびクローズチケットの変更が顧客に与える影響をレビューした結果、以下の理由に基づいて判断しています。

- クローズチケットの更新は顧客に悪影響を与えます（実用的な回避策がない）
- クローズチケットの更新は Zendesk Explore のレポート/ダッシュボードに重大な影響を与え、完全な再構成を要します
- クローズチケットの更新はデータウェアハウス内のレポートに重大な影響を与え、完全な再構成を要します
- クローズチケットの更新は、データウェアハウス内のデータの完全な再インデックスを要します（大量のリソースを消費し、5 日以上を要します）
- データウェアハウス内でカスタムビュー、カスタムテーブル、AI を使用して実行可能な実用的な回避策があり、クローズチケットの更新を実施することの認識される利点を打ち消します

### システムチケット設定を変更する

{{% alert title="危険" color="danger" %}}

- サポートポータルの使い勝手に大きな影響を与える可能性があるため、極めて慎重に実行してください。
- これは対応する依頼 Issue（Feature Request、Administrative、Bug など）が存在する場合にのみ実行してください
- システムチケット設定を変更した場合は、必ずこのページの[現在のシステムチケット設定](#current-system-ticket-settings)を更新してください

{{% /alert %}}

システムチケット設定を変更するには:

1. Zendesk インスタンスの管理ダッシュボードに移動
   - [Zendesk Global (production)](https://gitlab.zendesk.com/admin/home)
   - [Zendesk Global (sandbox)](https://gitlab1707170878.zendesk.com/admin/home)
   - [Zendesk US Government (production)](https://gitlab-federal-support.zendesk.com/admin/home)
   - [Zendesk US Government (sandbox)](https://gitlabfederalsupport1585318082.zendesk.com/admin/home)
1. `Objects and rules > Tickets > Settings` に移動
   - [Zendesk Global](https://gitlab.zendesk.com/admin/objects-rules/tickets/ticket-settings)
   - [Zendesk Global (sandbox)](https://gitlab1707170878.zendesk.com/admin/objects-rules/tickets/ticket-settings)
   - [Zendesk US Government](https://gitlab-federal-support.zendesk.com/admin/objects-rules/tickets/ticket-settings)
   - [Zendesk US Government (sandbox)](https://gitlabfederalsupport1585318082.zendesk.com/admin/objects-rules/tickets/ticket-settings)
1. 変更したい設定を修正
1. ページの右下にある `Save` をクリック

### チケット共有設定を変更する

{{% alert title="危険" color="danger" %}}

- サポートポータルの使い勝手に大きな影響を与える可能性があるため、極めて慎重に実行してください。
- これは対応する依頼 Issue（Feature Request、Administrative、Bug など）が存在する場合にのみ実行してください
- チケット共有設定を変更した場合は、必ずこのページの[現在のチケット共有設定](#current-ticket-sharing-settings)を更新してください

{{% /alert %}}

チケット共有設定を変更するには:

1. Zendesk インスタンスの管理ダッシュボードに移動
   - [Zendesk Global (production)](https://gitlab.zendesk.com/admin/home)
   - [Zendesk Global (sandbox)](https://gitlab1707170878.zendesk.com/admin/home)
   - [Zendesk US Government (production)](https://gitlab-federal-support.zendesk.com/admin/home)
   - [Zendesk US Government (sandbox)](https://gitlabfederalsupport1585318082.zendesk.com/admin/home)
1. `Objects and rules > Tickets > Sharing` に移動
   - [Zendesk Global](https://gitlab.zendesk.com/admin/objects-rules/tickets/ticket-sharing)
   - [Zendesk Global (sandbox)](https://gitlab1707170878.zendesk.com/admin/objects-rules/tickets/ticket-sharing)
   - [Zendesk US Government](https://gitlab-federal-support.zendesk.com/admin/objects-rules/tickets/ticket-sharing)
   - [Zendesk US Government (sandbox)](https://gitlabfederalsupport1585318082.zendesk.com/admin/objects-rules/tickets/ticket-sharing)
1. 変更したい設定を修正
1. ページの右下にある `Save tab` をクリック

## Customer Support Operations のワークフロー

### チケットの対応

{{% alert title="注意" color="primary" %}}

- これは Customer Support Operations チームと、同チームのチケット対応方法のみに関わるものです。他のチームがチケットをどう対応するかを反映するものではありません。

{{% /alert %}}

#### サポート連絡先の管理

連絡先管理に関する Zendesk Global チケットについては、[組織関連付けドキュメント](/handbook/security/customer-support-operations/zendesk/organizations/association)を参照してください。

連絡先管理に関する Zendesk US Government チケットについては、Salesforce アカウントとの同期によって、すべてのサポート連絡先関連付けが行われます。そのため、ここで対応はできません。依頼者には、新しいメールでアカウントマネージャーに連絡するように指示する必要があります。アカウントマネージャーのメールを必ず提供してください。

#### 共有組織リクエスト

[Shared Organization セットアップドキュメント](/handbook/security/customer-support-operations/zendesk/organizations/shared-orgs)を参照してください。

#### ポータルの問題

これらはサポートポータル内の問題のレポートです。各 Issue は固有のチャレンジを呈する可能性がありますが、ユーザー向けの一般的なトラブルシューティングガイドは以下にあります。

- [Zendesk Global](https://support.gitlab.com/hc/en-us/articles/11626501035292-Support-Portal-User-Guide#support-portal-troubleshooting)
- [Zendesk US Government](https://federal-support.gitlab.com/hc/en-us/articles/22616053222292-Support-Portal-User-Guide#support-portal-troubleshooting)

チケットを受け取った時点で、ユーザーがそれらすべてを実施しているかどうかは不明な場合があります。実施していない場合は、まずすべて試すように案内してください。

実施している場合は、送信された詳細を分析して次のステップを決定する必要があります。

#### セカンダリメールの追加リクエスト

時々、顧客がサポートポータルアカウントにセカンダリメールを追加したいという問題を提起します。セカンダリメールは、提出されたチケットを特定のアカウントに紐付けるために使用されますが、サブミッターとして使用されるのはプライマリメールアドレスのみです（つまり通知を受け取るのはこちら）。

- GitLab.com ユーザーの場合:
  - 依頼者のメールアドレスに関連付けられた GitLab.com アカウントには、セカンダリメールが verified としてリストされている必要があります。これは User Lookup アプリで確認できます。GitLab.com アカウントにセカンダリメールを追加するには、[このドキュメント](https://docs.gitlab.com/user/profile/#add-emails-to-your-user-profile)に従ってください
- セルフマネージドおよび GitLab Dedicated ユーザーの場合:
  - チケットは、既存のプロファイルに追加したいメールアドレスから提出される必要があります
  - 顧客はこのセカンダリメールアドレス経由でサポートエンタイトルメントの証明を再度提供する必要があります
  - 顧客はサポートポータルアカウントのプライマリメールアドレスを CC し、そのメールでチケットに返信し、セカンダリメールアドレスをサポートポータルアカウントに追加する依頼を確認する必要があります
- パートナーの場合:
  - セルフマネージドおよび GitLab Dedicated ユーザーと同じ手順を使用

#### 不正なフォームのチケット

チケットが不正なフォームを使用している場合、エージェントは `General::Forms::Incorrect form used` マクロを使用します。これによりフォームが Support Ops に変更され、チケットがタグ付けされ、内部ノートが残されます。そこから、私たちはチケットをレビューして次のステップを決定することが期待されます。

ここでの最終目標は、正しいフォームに移動することです。そのパスは多くの要因によって異なりますが、一般的には:

- 「有償のみ」のフォームに移動し、ユーザーが未関連付けの場合:
  - 組織関連付けのプロセスに従ってユーザーを関連付け
    - 関連付けできない場合、チケットは移動できない
  - チケットの `Assignee` の値を `Support Ops`（グループ）に設定
    - これによりチケットの割り当てが解除されます。送信時に追加された内部ノートで別途指示されない限り、常にこれを行う必要があります
  - チケットの `Form` の値を新しいフォームに変更
  - 新しいフォームの可能なすべてのチケットメタデータを記入
    - チケット上に存在する場合、`Ticket Stage` フィールドを `FRT` に設定
  - 以下のタグを削除:
    - `base_weight_set`
  - チケットを送信時と _同じ状態_ で送信することを確認
- 「有償のみ」のフォームに移動し、ユーザーが関連付け済みの場合:
  - チケットの `Assignee` の値を `Support Ops`（グループ）に設定
    - これによりチケットの割り当てが解除されます。送信時に追加された内部ノートで別途指示されない限り、常にこれを行う必要があります
  - チケットの `Form` の値を新しいフォームに変更
  - 新しいフォームの可能なすべてのチケットメタデータを記入
    - チケット上に存在する場合、`Ticket Stage` フィールドを `FRT` に設定
  - チケットを送信時と _同じ状態_ で送信することを確認
- 誰でも利用可能なフォームに移動する場合:
  - チケットの `Assignee` の値を `Support Ops`（グループ）に設定
    - これによりチケットの割り当てが解除されます。送信時に追加された内部ノートで別途指示されない限り、常にこれを行う必要があります
  - チケットの `Form` の値を新しいフォームに変更
  - 新しいフォームの可能なすべてのチケットメタデータを記入
    - チケット上に存在する場合、`Ticket Stage` フィールドを `FRT` に設定
  - チケットを送信時と _同じ状態_ で送信することを確認

##### 特殊フォームの注意事項

- チケットを `2FA Removal` フォームに移動する場合
  - 削除リクエストが依頼者と異なるユーザーのものである場合、依頼者は対象ユーザーのメールアドレスを **必ず** 提供する必要があります。提供していない場合、依頼者がその情報を提供する必要がある旨の内部ノートを残してください。その後、代わりにチケットを `SaaS Accounts` フォームに移動します。
- チケットを `L&R` フォームに移動する場合
  - L&R フォームにチケットを移動する際、最初から正しいサブチームに振り分けられるようにする必要があります。これを行うには、`BPO Ticket` チェックボックス（チケットメタデータの最下部）がチェックされていることを確認します。これを行わないと、チケットルーティングで問題が発生する可能性があります。
- チケットを `Billing` フォームに移動する場合
  - チケットの `Billing/AR Team` 属性が入力されていることを確認する必要があります。使用する値が不明な場合は、`Billing` に設定してください

#### 悪意のあるユーザーへの対処

{{% alert title="危険" color="danger" %}}

- 悪意のあるユーザーへの対処には極めて慎重に実行してください。疑わしい場合はセキュリティチームに助けを求めることをためらわないでください。妥協を引き起こすよりも、助けを求める方が **常に** 良いです。

{{% /alert %}}

潜在的に悪意のあるアクション（ハッキング、フィッシング、不正使用など）を含むチケットが発生した場合、常に真剣に扱う必要があります。

徹底的な調査の結果、悪意があると判断された場合は、[ユーザーを BAN します](/handbook/security/customer-support-operations/zendesk/users/end-users#banning-an-end-user)。

疑わしい場合は、自分のマネージャー、Customer Support Operations Fullstack Engineer、および/または GitLab セキュリティチームに問題をエスカレーションしてください。

## よくある問題とトラブルシューティング

これは必要に応じて項目が追加されていく、生きたセクションです。
