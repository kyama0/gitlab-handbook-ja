---
title: 'エンドユーザー'
description: 'Zendesk のエンドユーザーに関するドキュメント'
upstream_path: /handbook/security/customer-support-operations/zendesk/users/end-users/
upstream_sha: 6eef8dbb6a0d15167aa5378f476b04cd38b78675
translated_at: "2026-07-10T06:15:47+09:00"
translator: codex
stale: false
lastmod: "2026-07-03T08:17:38-05:00"
---

このガイドでは、GitLab における Zendesk のエンドユーザーの作成、編集、管理方法について説明します。また、Zendesk のエンドユーザー設定についても扱います。管理者は[管理者タスク](#administrator-tasks)セクションを確認してください。

{{% alert title="技術的な詳細" color="primary" %}}

- デプロイタイプ: `Ad-hoc`

{{% /alert %}}

## エンドユーザーを理解する

### エンドユーザーとは

エンドユーザーは、エージェントよりも下位の Zendesk ユーザー区分です。一般公開されているサポートポータルへのアクセスやチケットの提出などができます。エージェント側または Zendesk のバックエンドにはアクセスできません。

### エンドユーザーの管理方法

- Zendesk Global: エンドユーザーは Zendesk 内で手動管理されます
- Zendesk US Government: エンドユーザーは [Zendesk-Salesforce 同期](/handbook/security/customer-support-operations/zendesk-salesforce-sync/)経由で自動的に同期されます

### ユーザーノート

ユーザーノートと詳細は、ユーザープロファイル上にあるカスタム情報を保存する 2 つの個別のテキストフィールドです。

- Notes: エージェントのみが閲覧できる内部情報
- Details: ユーザーに関する追加コンテキスト

両方のフィールドは [Zendesk のトリガー](/handbook/security/customer-support-operations/zendesk/triggers/)を介して、新規チケットに内部ノートとして自動的に投稿されます。

#### 管理者ではない者がユーザーノートの更新を依頼する

ユーザーノートの追加、変更、または削除が必要な場合は、[Feature Request の Issue](https://gitlab.com/gitlab-com/gl-security/corp/cust-support-ops/issue-tracker/-/issues/new?description_template=Feature) を作成してください（カスタマーサポートオペレーションチームによる手動対応が必要となるため）。

#### 管理者ではない者がエンドユーザーの BAN を依頼する

エンドユーザーを BAN する必要がある場合は、#customer_support_systems Slack チャンネルにユーザーを BAN する必要がある旨を投稿してください。カスタマーサポートオペレーションチームのメンバーから（ダイレクトメッセージで）連絡が入り、対応について協力します。

### 現在のシステムエンドユーザー設定 {#current-system-end-user-settings}

以下の設定は、エンドユーザーがどのように登録、認証、サポートポータルとやり取りできるかを制御します。これらの設定はリファレンスとしてここに記載されており、変更されることはまれです。

<details>
<summary>Zendesk Global の場合</summary>

- 誰でもチケットを提出可能
  - [x] 有効
    - [x] リクエストおよびアップロード API への認証を必須にする
    - [ ] ユーザーに登録を求める
    - ユーザー登録メッセージ
      > このフォームに記入してください。メールアドレスを確認してログインするためのウェルカムメールをお送りします。
  - 許可リスト
    > gitlab@gitlab.com google.com
  - ブロックリスト: Zendesk 管理パネルで直接確認 - 機密データを含む
- アカウントメール
  - [ ]  アカウントメールに有効な Help Center のリストを含める
  - ユーザーウェルカムメール本文:
    > GitLab Support へようこそ。以下のリンクをクリックしてパスワードを作成し、ログインしてください。
  - [ ] エージェントまたは管理者によって新規ユーザーが作成された場合にもウェルカムメールを送信する
  - メール検証メール本文
    > このメールアドレスの所有者であることを確認する必要があります。以下のリンクから確認してください。
- ユーザーが自分のプロファイルデータを閲覧および編集できるようにする
  - [x] 有効
- ユーザーがパスワードを変更できるようにする
  - [x] 有効
- ユーザーの電話番号を検証する
  - [ ] 有効
- ユーザーおよび組織のタグ
  - [x] 有効
- ユーザーが複数の組織に所属できるようにする
  - [ ] 有効

</details>
<details>
<summary>Zendesk US Government の場合</summary>

- 誰でもチケットを提出可能
  - [x] 有効
    - [x] リクエストおよびアップロード API への認証を必須にする
    - [ ] ユーザーに登録を求める
    - ユーザー登録メッセージ
      > このフォームに記入してください。メールアドレスを確認してサインインするためのウェルカムメールをお送りします。
  - 許可リスト
    > gitlab@gitlab.com google.com
  - ブロックリスト: Zendesk 管理パネルで直接確認 - 機密データを含む
- アカウントメール
  - [ ]  アカウントメールに有効な Help Center のリストを含める
  - ユーザーウェルカムメール本文:
    > GitLab Federal Support へようこそ。以下のリンクをクリックしてパスワードを作成し、サインインしてください。
  - [ ] エージェントまたは管理者によって新規ユーザーが作成された場合にもウェルカムメールを送信する
  - メール検証メール本文
    > このメールアドレスの所有者であることを確認する必要があります。以下のリンクから確認してください。
- ユーザーが自分のプロファイルデータを閲覧および編集できるようにする
  - [x] 有効
- ユーザーがパスワードを変更できるようにする
  - [x] 有効
- ユーザーの電話番号を検証する
  - [ ] 有効
- ユーザーおよび組織のタグ
  - [x] 有効
- ユーザーが複数の組織に所属できるようにする
  - [ ] 有効

</details>

## 管理者タスク {#administrator-tasks}

{{% alert title="注意" color="primary" %}}

- このセクションのすべての項目は、Zendesk への `Administrator` レベルのアクセスが必要です。

{{% /alert %}}

### エンドユーザーを作成する

{{% alert title="警告" color="warning" %}}

- これを手動で行う必要があるケースは極めてまれです。実施する理由を慎重に検討し、すべてのドキュメントを確認した上で代替プロセスを使用すべきかどうかを判断してください。
- エンドユーザーの `Access` 設定（自分のチケット以外を閲覧する権限）は変更しません。エンドユーザーが組織のチケットを閲覧したい場合は、[Shared Organization セットアップ](/handbook/security/customer-support-operations/zendesk/organizations/shared-orgs)を使用する必要があります。

{{% /alert %}}

Zendesk でエンドユーザーを作成するには:

1. ページの左上にある `+ Add` にカーソルを合わせる（管理パネル上にいないとき）
1. `User` をクリック
1. `Name` を入力
1. `Email` を入力
1. `User type` が `End user` になっていることを確認
1. `Add` をクリック

### エンドユーザーを編集する

{{% alert title="警告" color="warning" %}}

- 組織との関連付けについては、[組織関連付けドキュメント](/handbook/security/customer-support-operations/zendesk/organizations/association)を参照してください。

{{% /alert %}}

デフォルトでは、エンドユーザーの編集は行いません。代わりに、サポートポータル自体を使って自身で行うよう推奨します。

- [Zendesk Global のエンドユーザー向け](https://support.gitlab.com/hc/en-us/articles/11626501035292-Support-Portal-User-Guide#account-management)
- [Zendesk US Government のエンドユーザー向け](https://federal-support.gitlab.com/hc/en-us/articles/22616053222292-Support-Portal-User-Guide#account-management)

ただし、エンドユーザーを編集する非常に特殊な状況もあります。

#### 確認メールの再送信

{{% alert title="警告" color="warning" %}}

- これは未確認のメールアドレスに対してのみ実行できます。一度確認されると、そのアドレスに確認メールを再送信することはできません。

{{% /alert %}}

ユーザーが未確認のエンドユーザーアカウントで確認メールの再送信を必要としている場合（つまりアカウント上のメールアドレスをまだ確認していない場合）、以下の手順で再送できます。

1. Zendesk でエンドユーザーのページに移動
1. 確認メールを再送信したいメールアドレスの横にあるドロップダウンキャレットをクリック
1. `Resend verification email` をクリック

#### パスワードリセットメールを送信する

エンドユーザーにパスワードリセットメールを送信するには:

1. Zendesk でエンドユーザーのページに移動
1. `Security settings` タブをクリック
1. `Reset` リンクをクリック
1. 使用するブランドを選択
   - Zendesk Global の場合: `GitLab Support`
   - Zendesk US Government の場合: `GitLab`
1. `Reset password` をクリック

#### セカンダリメールの追加または削除

{{% alert title="警告" color="warning" %}}

- 別のアカウントで使用中のメールアドレスの場合は実行できません

{{% /alert %}}

エンドユーザーにセカンダリメールを追加するには:

1. Zendesk でエンドユーザーのページに移動
1. ページ左側（`Primary email` 属性の下）の `+ add contact` をクリック
1. `Email` をクリック
1. セカンダリメールアドレスを入力（Enter/Return キーを押す）

#### セカンダリメールをプライマリに設定する

Zendesk でセカンダリメールアドレスをプライマリメールに設定するには:

1. Zendesk でエンドユーザーのページに移動
1. プライマリにしたいメールアドレスの横にあるドロップダウンキャレットをクリック
1. `Make primary contact` をクリック

#### ユーザーノートを管理する {#managing-the-user-note}

エンドユーザーのユーザーノート（または詳細）を変更するには:

1. Zendesk でエンドユーザーのページに移動
1. 変更したいテキストエリア（`Notes` または `Details`）をクリック
1. 必要に応じてテキストを変更
1. テキストエリア外の任意の場所をクリック

### エンドユーザーをサスペンドする {#suspending-an-end-user}

ユーザーをサスペンドするには:

1. Zendesk でエンドユーザーのページに移動
1. ユーザーページの `+ New ticket` の右にあるドロップダウンキャレットをクリック
1. `Suspend` をクリック
1. 理由が `Other reason` であることを確認
1. `Additional comment` が空欄であることを確認
1. `Suspend user` をクリック

### エンドユーザーを削除する

エンドユーザーの削除は、主に 3 つの異なるソースから発生します。

#### エンドユーザーからの依頼による

これは、エンドユーザーがサポートポータルアカウントの削除を求めるチケットを提出した場合に発生します。プロセスは次のとおりです。

1. チケット内でマクロ `Support::Support-Ops::Confirm Deletion` をエンドユーザーに送信
1. エンドユーザーが削除を確認する返信をした場合、チケット内でマクロ `Support::Support-Ops::Deletion Forthcoming` をエンドユーザーに送信
1. Zendesk でエンドユーザーのページに移動
1. ユーザーページの `+ New ticket` の右にあるドロップダウンキャレットをクリック
1. `Delete` をクリック
1. ポップアップ表示された `Confirm` をクリック

#### データプライバシー要求による

これは、ユーザーがデータプライバシー削除を要求したときに（Transcend を経由して）発生します。システムからその旨の通知が届くはずです。まずユーザーが Zendesk に存在するかを確認します。存在する場合は、以下の手順でエンドユーザーを削除します。

1. Zendesk でエンドユーザーのページに移動
1. ユーザーページの `+ New ticket` の右にあるドロップダウンキャレットをクリック
1. `Delete` をクリック
1. ポップアップ表示された `Confirm` をクリック

#### スケジュールされた削除による

ユーザー削除の詳細については、[自動ユーザー削除](/handbook/security/customer-support-operations/zendesk/users/automated-user-deletion)に関するドキュメントを参照してください。

### コンプライアンスレベルの削除

コンプライアンスレベルの削除の詳細については、[自動ユーザー削除](/handbook/security/customer-support-operations/zendesk/users/automated-user-deletion)に関するドキュメントを参照してください。

### エンドユーザーを BAN する {#banning-an-end-user}

{{% alert title="危険" color="danger" %}}

- これは複数のチームの関与を必要とする深刻な問題であることが多いです。サポートポータル以上の範囲でユーザーを BAN する必要があるかを確認し、必要に応じて関連チーム（セキュリティ、法務、フルフィルメント、課金など）と協力してください。

{{% /alert %}}

エンドユーザーを BAN する必要がある場合（さまざまな理由がありますが、特に不正行為によるもの）、誰かが #customer_support_systems チャンネルにその件について投稿します。

その投稿に対して反応し、詳細を確認するためにダイレクトメッセージを送ります。

すべての詳細を確認したら、以下を行います。

1. クローズされていないチケットをすべてクローズ（必要な場合）
   - Zendesk Global の場合（`TICKET_ID` をチケットの ID に、`API_TOKEN` を自身の API トークンに置き換える）:

   ```bash
   curl -ss -X PUT https://gitlab.zendesk.com/api/v2/tickets/TICKET_ID \
     -H "Content-Type: application/json" \
     -d '{"ticket": {"status": "closed"}}' \
     -u support-ops@gitlab.com/token:API_TOKEN
   ```

   - Zendesk US Government の場合（`TICKET_ID` をチケットの ID に、`API_TOKEN` を自身の API トークンに置き換える）:

   ```bash
   curl -ss -X PUT https://gitlab-federal-support.zendesk.com/api/v2/tickets/TICKET_ID \
     -H "Content-Type: application/json" \
     -d '{"ticket": {"status": "closed"}}' \
     -u supportops@gitlab.com/token:API_TOKEN
   ```

1. [エンドユーザーのノートを変更](#managing-the-user-note)し、BAN に関する情報（BAN されたという表明、理由、詳細を確認したい場合の連絡先）を追加します。次のような内容が適しています。
   > このユーザーは、TEAM_NAME チームの依頼により、YYYY-MM-DD 付でサポートポータルから BAN されました。
   >
   > 理由は REASON です。
   >
   > 詳細が必要な場合は、#customer_support_systems Slack チャンネルを通じて Customer Support Operations チームにお問い合わせください。
   - 置き換え:
     - `YYYY-MM-DD` を現在の日付（ISO フォーマット）に
     - `TEAM_NAME` を BAN を要求しているチームの名前（例: Support、Security、Legal など）に
     - `REASON` を理由に（関連チケットが理由の一部である場合は、メッセージに必ず含めてください）
1. [ユーザーをサスペンドする](#suspending-an-end-user)
1. [システムエンドユーザー設定を変更する](#modifying-system-end-user-settings)。具体的には `Blocklist` 設定に `reject:EMAIL_ADDRESS` を追加します（`EMAIL_ADDRESS` をエンドユーザーのメールアドレスに置き換える）。

すべて完了したら、元の依頼投稿でエンドユーザーが BAN されたことを確認します。

### エンドユーザーの BAN を解除する

これは発生することが非常にまれで、おそらく非常にカスタマイズされたプロセスを要します。フルスタックエンジニアに状況を引き継いで対応してもらってください。

### システムエンドユーザー設定を変更する {#modifying-system-end-user-settings}

{{% alert title="危険" color="danger" %}}

- サポートポータルの使い勝手に大きな影響を与える可能性があるため、極めて慎重に実行してください。
- これは以下の 2 つのシナリオでのみ実行する必要があります:
  - [エンドユーザーを BAN する](#banning-an-end-user)
  - 対応する依頼 Issue（Feature Request、Administrative、Bug など）が存在する
- システムエンドユーザー設定を変更した場合は、必ずこのページの[現在のシステムエンドユーザー設定](#current-system-end-user-settings)を更新してください

{{% /alert %}}

システムエンドユーザー設定を変更するには:

1. Zendesk インスタンスの管理ダッシュボードに移動
   - [Zendesk Global (production)](https://gitlab.zendesk.com/admin/home)
   - [Zendesk Global (sandbox)](https://gitlab1707170878.zendesk.com/admin/home)
   - [Zendesk US Government (production)](https://gitlab-federal-support.zendesk.com/admin/home)
   - [Zendesk US Government (sandbox)](https://gitlabfederalsupport1585318082.zendesk.com/admin/home)
1. `People > Configuration > End users` に移動
   - [Zendesk Global](https://gitlab.zendesk.com/admin/people/configuration/settings)
   - [Zendesk Global (sandbox)](https://gitlab1707170878.zendesk.com/admin/people/configuration/settings)
   - [Zendesk US Government](https://gitlab-federal-support.zendesk.com/admin/people/configuration/settings)
   - [Zendesk US Government (sandbox)](https://gitlabfederalsupport1585318082.zendesk.com/admin/people/configuration/settings)
1. 変更したい設定を修正
1. ページの右下にある `Save tab` をクリック

## よくある問題とトラブルシューティング

これは必要に応じて項目が追加されていく、生きたセクションです。
