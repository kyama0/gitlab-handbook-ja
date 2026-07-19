---
title: 'エンドユーザー'
description: 'Zendesk エンドユーザーに関するドキュメント'
upstream_path: "/handbook/eta/css/zendesk/users/end-users/"
upstream_sha: "1312dadbdf7381446077faefcfae17ba323692b6"
lastmod: "2026-07-14T15:22:25-05:00"
translated_at: "2026-07-19T08:01:00+09:00"
translator: codex
stale: false
---

このガイドでは、GitLab における Zendesk エンドユーザーを作成、編集、管理する方法について説明します。また、Zendesk のエンドユーザー設定についても説明します。管理者は[管理者タスク](#administrator-tasks)セクションを確認してください。

{{% alert title="技術的な詳細" color="primary" %}}

- デプロイタイプ: `Ad-hoc`

{{% /alert %}}

## エンドユーザーを理解する

### エンドユーザーとは

エンドユーザーは、エージェントより下位に分類される Zendesk ユーザーです。公開されているサポートポータルにアクセスし、チケットを送信するなどができます。Zendesk のエージェントまたはバックエンドにはアクセスできません。

### エンドユーザーの管理方法

- Zendesk Global: エンドユーザーは Zendesk で手動管理します  
- Zendesk US Government: エンドユーザーは[Zendesk-Salesforce Sync](/handbook/eta/css/zendesk-salesforce-sync/)を通じて自動的に同期されます

### ユーザーノート

ユーザーノートと詳細は、ユーザープロファイル上でカスタム情報を保存する 2 つの別々のテキストフィールドです:

- ノート: エージェントのみが表示できる内部情報
- 詳細: ユーザーに関する追加のコンテキスト

どちらのフィールドも、[Zendesk トリガー](/handbook/eta/css/zendesk/triggers/)を通じて、新しいチケットに内部ノートとして自動投稿されます。

#### 非管理者としてユーザーノートの更新をリクエストする

ユーザーノートを追加、変更、または削除する必要がある場合は、[機能リクエスト Issue](https://gitlab.com/gitlab-com/gl-security/corp/cust-support-ops/issue-tracker/-/issues/new?description_template=Feature)を作成してください（Customer Support Systems チームによる手動対応が必要なため）。

#### 非管理者としてエンドユーザーの禁止をリクエストする

エンドユーザーを禁止する必要がある場合は、ユーザーを禁止する必要があることを示して #customer_support_systems Slack チャンネルに投稿してください。Customer Support Systems チームのメンバーが、この件について対応するためにダイレクトメッセージで連絡します。

### 現在のシステムエンドユーザー設定

以下の設定は、エンドユーザーがサポートポータルに登録、認証、対話する方法を制御します。これらの設定は参照用としてここに記載されており、変更が必要になることはほとんどありません。

<details>
<summary>Zendesk Global 向け</summary>

- 誰でもチケットを送信できる
  - [x] 有効
    - [x] リクエストおよびアップロード API には認証が必要です。
    - [ ] ユーザーに登録を求める
    - ユーザー登録メッセージ
      > このフォームに記入してください。メールアドレスを確認してログインできるよう、ウェルカムメールを送信します。
  - 許可リスト
    > gitlab@gitlab.com google.com
  - ブロックリスト: Zendesk 管理パネルで直接確認してください - 機密データが含まれています
- アカウントメール
  - [ ]  アカウントメールにアクティブなヘルプセンターのリストを含める
  - ユーザーウェルカムメールのテキスト:
    > GitLab Support へようこそ。以下のリンクをクリックしてパスワードを作成し、ログインしてください。
  - [ ] エージェントまたは管理者が新しいユーザーを作成した場合にもウェルカムメールを送信する。
  - メールアドレス確認メールのテキスト
    > このメールアドレスの所有者であることを確認する必要があります。確認するには、以下のリンクをクリックしてください。
- ユーザーにプロファイルデータの表示および編集を許可する
  - [x] 有効
- ユーザーにパスワード変更を許可する
  - [x] 有効
- ユーザーの電話番号を検証する
  - [ ] 有効
- ユーザーおよび組織のタグ
  - [x] 有効
- ユーザーが複数の組織に所属することを許可する
  - [ ] 有効

</details>
<details>
<summary>Zendesk US Government 向け</summary>

- 誰でもチケットを送信できる
  - [x] 有効
    - [x] リクエストおよびアップロード API には認証が必要です。
    - [ ] ユーザーに登録を求める
    - ユーザー登録メッセージ
      > このフォームに記入してください。メールアドレスを確認してサインインできるよう、ウェルカムメールを送信します。
  - 許可リスト
    > gitlab@gitlab.com google.com
  - ブロックリスト: Zendesk 管理パネルで直接確認してください - 機密データが含まれています
- アカウントメール
  - [ ]  アカウントメールにアクティブなヘルプセンターのリストを含める
  - ユーザーウェルカムメールのテキスト:
    > GitLab Federal Support へようこそ。以下のリンクをクリックしてパスワードを作成し、サインインしてください。
  - [ ] エージェントまたは管理者が新しいユーザーを作成した場合にもウェルカムメールを送信する。
  - メールアドレス確認メールのテキスト
    > このメールアドレスの所有者であることを確認する必要があります。確認するには、以下のリンクをクリックしてください。
- ユーザーにプロファイルデータの表示および編集を許可する
  - [x] 有効
- ユーザーにパスワード変更を許可する
  - [x] 有効
- ユーザーの電話番号を検証する
  - [ ] 有効
- ユーザーおよび組織のタグ
  - [x] 有効
- ユーザーが複数の組織に所属することを許可する
  - [ ] 有効

</details>

## 管理者タスク

{{% alert title="注記" color="primary" %}}

- このセクションのすべての項目には、Zendesk の `Administrator` レベルのアクセス権が必要です。

{{% /alert %}}

### エンドユーザーを作成する

{{% alert title="警告" color="warning" %}}

- これを手動で実行する必要があることは極めてまれです。実行する理由を慎重に検討し、代替プロセスを使用すべきか判断するためにすべてのドキュメントを確認してください。
- エンドユーザーの `Access` 設定（自分のチケット以外も閲覧できる機能）は変更しません。エンドユーザーが組織のチケットを閲覧したい場合は、[共有組織の設定](/handbook/eta/css/zendesk/organizations/shared-orgs)を使用する必要があります。

{{% /alert %}}

Zendesk でエンドユーザーを作成するには:

1. ページ左上の `+ Add` にカーソルを合わせます（管理パネル上でない場合）
1. `User` をクリックします
1. `Name` を入力します
1. `Email` を入力します
1. `User type` が `End user` であることを確認します
1. `Add` をクリックします

### エンドユーザーを編集する

{{% alert title="警告" color="warning" %}}

- 組織の関連付けについては、[組織の関連付けに関するドキュメント](/handbook/eta/css/zendesk/organizations/association)を参照してください。

{{% /alert %}}

デフォルトでは、エンドユーザーを編集しません。代わりに、サポートポータル自体で編集するよう促します:

- [Zendesk Global エンドユーザー向け](https://support.gitlab.com/hc/en-us/articles/11626501035292-Support-Portal-User-Guide#account-management)
- [Zendesk US Government エンドユーザー向け](https://federal-support.gitlab.com/hc/en-us/articles/22616053222292-Support-Portal-User-Guide#account-management)

ただし、エンドユーザーを編集する非常に限定的な状況があります。

#### 確認メールを再送する

{{% alert title="警告" color="warning" %}}

- これは未確認のメールアドレスに対してのみ実行できます。確認済みになると、そのアドレスには確認メールを再送できません。

{{% /alert %}}

ユーザーの未確認エンドユーザーアカウント（つまり、アカウントのメールアドレスを確認していない場合）に確認メールを再送する必要がある場合は、次の手順で再送できます:

1. Zendesk でエンドユーザーのページに移動します
1. 確認メールを再送するメールアドレスの横にあるドロップダウン矢印をクリックします
1. `Resend verification email` をクリックします

#### パスワードリセットメールを送信する

エンドユーザーにパスワードリセットメールを送信するには:

1. Zendesk でエンドユーザーのページに移動します
1. `Security settings` タブをクリックします
1. `Reset` リンクをクリックします
1. 使用するブランドを選択します
   - Zendesk Global: `GitLab Support`
   - Zendesk US Government: `GitLab`
1. `Reset password` をクリックします

#### セカンダリメールを追加または削除する

{{% alert title="警告" color="warning" %}}

- このメールアドレスが別のアカウントで使用されている場合は実行できません

{{% /alert %}}

エンドユーザーにセカンダリメールを追加するには:

1. Zendesk でエンドユーザーのページに移動します
1. ページ左側（`Primary email` 属性の下）の `+ add contact` をクリックします
1. `Email` をクリックします
1. セカンダリメールアドレスを入力します（Enter/Return を押します）

#### セカンダリメールをプライマリに設定する

Zendesk でセカンダリメールアドレスをプライマリメールとして設定するには:

1. Zendesk でエンドユーザーのページに移動します
1. プライマリにするメールアドレスの横にあるドロップダウン矢印をクリックします
1. `Make primary contact` をクリックします

#### ユーザーノートを管理する

エンドユーザーのユーザーノート（または詳細）を変更するには:

1. Zendesk でエンドユーザーのページに移動します
1. 変更するテキストエリア（`Notes` または `Details`）をクリックします
1. 必要に応じてテキストを変更します
1. テキストエリアの外側の任意の場所をクリックします

### エンドユーザーを一時停止する

ユーザーを一時停止するには:

1. Zendesk でエンドユーザーのページに移動します
1. ユーザーのページで、`+ New ticket` の右側にあるドロップダウン矢印をクリックします
1. `Suspend` をクリックします
1. 理由が `Other reason` であることを確認します
1. `Additional comment` が空白であることを確認します
1. `Suspend user` をクリックします

### エンドユーザーを削除する

エンドユーザーの削除は、主に 3 つの異なる経路から発生します。

#### エンドユーザーのリクエストによる

これは、エンドユーザーがサポートポータルのアカウント削除をリクエストするチケットを私たちに送信した場合に発生します。このプロセスは次のとおりです:

1. チケット内でエンドユーザーにマクロ `Support::Support-Ops::Confirm Deletion` を送信します
1. エンドユーザーが削除を確認して返信した場合は、チケット内でエンドユーザーにマクロ `Support::Support-Ops::Deletion Forthcoming` を送信します
1. Zendesk でエンドユーザーのページに移動します
1. ユーザーのページで、`+ New ticket` の右側にあるドロップダウン矢印をクリックします
1. `Delete` をクリックします
1. 表示されるポップアップで `Confirm` をクリックします

#### データプライバシーリクエストによる

これは、ユーザーがデータプライバシーの削除をリクエストした場合に（Transcend を介して）発生します。システムから通知されるはずです。まずユーザーが Zendesk に存在するか確認します。存在する場合は、次の手順でエンドユーザーを削除してください:

1. Zendesk でエンドユーザーのページに移動します
1. ユーザーのページで、`+ New ticket` の右側にあるドロップダウン矢印をクリックします
1. `Delete` をクリックします
1. 表示されるポップアップで `Confirm` をクリックします

#### スケジュールされた削除による

ユーザー削除の詳細については、[自動化されたユーザー削除](/handbook/eta/css/zendesk/users/automated-user-deletion)のドキュメントを参照してください。

### コンプライアンスレベルの削除

コンプライアンスレベルの削除の詳細については、[自動化されたユーザー削除](/handbook/eta/css/zendesk/users/automated-user-deletion)のドキュメントを参照してください。

### エンドユーザーを禁止する

{{% alert title="危険" color="danger" %}}

- これは重大な事案であり、複数のチームが関与する必要があることが多くあります。ユーザーをサポートポータル以外でも禁止する必要があるか確認し、必要に応じて関連チーム（セキュリティ、法務、フルフィルメント、請求など）と連携してください。

{{% /alert %}}

エンドユーザーを禁止する必要がある場合（さまざまな理由、特に不正行為による場合）、誰かがこの件について #customer_support_systems チャンネルに投稿します。

投稿を確認し、詳細を取得するためにその人へダイレクトメッセージを送ります。

すべての詳細を把握したら、次の手順を行います:

1. クローズされていないチケットをすべてクローズします（必要な場合）
   - Zendesk Global（`TICKET_ID` をチケットの ID に、`API_TOKEN` を API トークンに置き換えます）:

   ```bash
   curl -ss -X PUT https://gitlab.zendesk.com/api/v2/tickets/TICKET_ID \
     -H "Content-Type: application/json" \
     -d '{"ticket": {"status": "closed"}}' \
     -u support-ops@gitlab.com/token:API_TOKEN
   ```

   - Zendesk US Government（`TICKET_ID` をチケットの ID に、`API_TOKEN` を API トークンに置き換えます）:

   ```bash
   curl -ss -X PUT https://gitlab-federal-support.zendesk.com/api/v2/tickets/TICKET_ID \
     -H "Content-Type: application/json" \
     -d '{"ticket": {"status": "closed"}}' \
     -u supportops@gitlab.com/token:API_TOKEN
   ```

1. [エンドユーザーのノートを変更します](#managing-the-user-note)を実行して、禁止に関する情報（禁止されること、その理由、詳細が必要な場合に問い合わせる相手）を追加します。次のような記述が適しています:
   > このユーザーは、TEAM_NAME チームのリクエストにより、YYYY-MM-DD 付けでサポートポータルから禁止されています。
   >
   > これは REASON が理由です。
   >
   > 詳細が必要な場合は、#customer_support_systems Slack チャンネルを通じて Customer Support Systems チームにお問い合わせください。
   - 置き換え:
     - `YYYY-MM-DD` を現在の日付（ISO 形式）に置き換えます
     - `TEAM_NAME` を禁止をリクエストしたチームの名前（例: Support、Security、Legal など）に置き換えます
     - `REASON` を理由に置き換えます（関連するチケットが理由の一部である場合は、その内容がメッセージに含まれていることを確認してください）
1. [ユーザーを一時停止します](#suspending-an-end-user)
1. [システムエンドユーザー設定を変更します](#modifying-system-end-user-settings)。具体的には、`Blocklist` 設定に `reject:EMAIL_ADDRESS` を追加します（`EMAIL_ADDRESS` をエンドユーザーのメールアドレスに置き換えます）。

すべて完了したら、元のリクエスト投稿を通じてエンドユーザーが禁止されたことを確認します。

### エンドユーザーの禁止を解除する

これは非常にまれにしか発生せず、おそらく非常に個別のプロセスが必要になります。状況を Fullstack Engineer に引き継いで確認してもらってください。

### システムエンドユーザー設定を変更する

{{% alert title="危険" color="danger" %}}

- これはサポートポータルの使いやすさに大きく影響する可能性があるため、実行する際は細心の注意を払ってください。
- これは次の 2 つのシナリオでのみ実行してください:
  - [エンドユーザーを禁止する](#banning-an-end-user)
  - 対応するリクエスト Issue（機能リクエスト、管理、バグなど）がある
- システムエンドユーザー設定を変更した場合は、必ずこのページの[現在のシステムエンドユーザー設定](#current-system-end-user-settings)を更新してください

{{% /alert %}}

システムエンドユーザー設定を変更するには:

1. Zendesk インスタンスの管理ダッシュボードに移動します
   - [Zendesk Global（本番環境）](https://gitlab.zendesk.com/admin/home)
   - [Zendesk Global（サンドボックス）](https://gitlab1707170878.zendesk.com/admin/home)
   - [Zendesk US Government（本番環境）](https://gitlab-federal-support.zendesk.com/admin/home)
   - [Zendesk US Government（サンドボックス）](https://gitlabfederalsupport1585318082.zendesk.com/admin/home)
1. `People > Configuration > End users` に移動します
   - [Zendesk Global](https://gitlab.zendesk.com/admin/people/configuration/settings)
   - [Zendesk Global（サンドボックス）](https://gitlab1707170878.zendesk.com/admin/people/configuration/settings)
   - [Zendesk US Government](https://gitlab-federal-support.zendesk.com/admin/people/configuration/settings)
   - [Zendesk US Government（サンドボックス）](https://gitlabfederalsupport1585318082.zendesk.com/admin/people/configuration/settings)
1. 変更する設定を修正します
1. ページ右下の `Save tab` をクリックします

## よくある問題とトラブルシューティング

必要に応じて項目が追加される、生きたセクションです。
