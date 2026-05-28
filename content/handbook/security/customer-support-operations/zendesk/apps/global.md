---
title: 'グローバルアプリ'
description: 'Zendesk グローバルアプリに関するドキュメント'
upstream_path: /handbook/security/customer-support-operations/zendesk/apps/global/
upstream_sha: 6f812a8fec541dba51e50314e85d7890b9e71d7d
translated_at: "2026-05-28T21:12:16Z"
translator: claude
stale: false
lastmod: "2026-05-26T12:05:00-05:00"
---

このガイドでは、グローバル Zendesk インスタンスで現在使用されている Zendesk アプリについて説明します。

## Advanced SAST App

<sup>*[support-team-meta#6652](https://gitlab.com/gitlab-com/support/support-team-meta/-/issues/6652) で導入*</sup>

Advanced SAST App は、GitLab Advanced SAST 内の LGPL ライセンスコンポーネントのソースコードに関するユーザーリクエストを迅速に処理できるようにするチケットアプリです。

{{% alert title="Technical Details" color="primary" %}}

- 場所: チケットサイドバー
- グループによる制限:
  - Support AMER
  - Support APAC
  - Support EMEA
- このアプリは社内で開発されており、[Advanced SAST App プロジェクト](https://gitlab.com/gitlab-support-readiness/zendesk-global/apps/advanced-sast-app) で見られます。

{{% /alert %}}

## Advanced Search

Advanced Search は、チケット、ユーザー、組織 (orgs) に対して複雑な検索クエリを構築するためのシンプルなビジュアルインターフェースを提供するアプリです。検索結果を CSV 形式でエクスポートすることもできます。

{{% alert title="Technical Details" color="primary" %}}

- 場所: ナビバー
- このアプリは [Zendesk](https://www.zendesk.com/marketplace/partners/zendesk/) によって開発され、[Zendesk Marketplace](https://www.zendesk.com/marketplace/apps/support/198393/advanced-search/) で利用可能です。

{{% /alert %}}

## GitLab Reminders App

<sup>*[support-team-meta#3036](https://gitlab.com/gitlab-com/support/support-team-meta/-/issues/3036) で導入*</sup>

Reminders App はナビバーに表示され、エージェントが関与しているチケットをより専門的に表示します。現在は次を表示します:

- Closed 状態ではない、ペンディング/期限超過のタスクが付いた、自分にアサインされたチケット
- 最近自分が閲覧したチケット
- Closed 状態ではない、自分にアサインされたチケット
- Closed 状態ではない、自分が CC されているチケット

また、タスクのために残したメモ、いつ期限を迎えるか、タスクを完了済みとしてすばやくマーク (メモと期限日の削除) するボタンを見ることで、自分のタスクをすばやく管理できます。

{{% alert title="Technical Details" color="primary" %}}

- 場所: ナビバー
- このアプリは社内で開発されており、[GitLab Reminders App プロジェクト](https://gitlab.com/gitlab-support-readiness/zendesk-global/apps/reminders-app) で見られます。

{{% /alert %}}

## GitLab Super App

<sup>*[support-team-meta#801](https://gitlab.com/gitlab-com/support/support-team-meta/-/issues/801) で導入*</sup>

GitLab 関連のさまざまなことを実行できる、プラグインで制御されるアプリです。

現在のプラグインは次のとおりです:

- User Lookup
  > gitlab.com でユーザー名またはメールアドレスを検索できます。結果に基づいた情報を表示します。
- Namespace Lookup
  > gitlab.com で名前空間を検索できます。結果に基づいた情報を表示します。
- Collaboration Project
組織にコラボレーションプロジェクト ID があるかをチェックします。存在する場合、当該プロジェクトへのリンクを提供します。
- Email Suppressions
  > mailgun でバウンスからのサプレッション (suppressions) を検索します (苦情やサブスクリプション解除に対しては行いません)。結果 (サプレッションのメッセージ付き) を表示します。
  >
  > また、(見つかった場合) サプレッションを削除するオプションも提供します。これを行うと mailgun から削除され、サプレッション削除の結果に関する内部コメントがチケットに追加されます。
- Fieldnotes
  > このアプリは、現在の Zendesk チケット ID を参照する既存の Issue を [Fieldnotes プロジェクト](https://gitlab.com/gitlab-com/support/fieldnotes/-/issues) で確認します。既存の Issue が見つからない場合、エージェントは Zendesk チケット内から直接、新しい Fieldnotes Issue を作成できます。
- Account Verification Helper
  > 選択した認証タイプに基づいて、アカウント認証が成功したかどうかをチェックする使いやすいフォームを作成します。通過したチャレンジから Risk Factor を計算し、通過したチャレンジを反映するように修正します。フォームが反映する内容について、内部メモを投稿することもできます。

{{% alert title="Technical Details" color="primary" %}}

- 場所: チケットサイドバー
- グループによる制限:
  - BPO
  - Support AMER
  - Support APAC
  - Support EMEA
- このアプリは社内で開発されており、[GitLab Super App プロジェクト](https://gitlab.com/gitlab-support-readiness/zendesk-global/apps/gitlab-super-app) で見られます。

{{% /alert %}}

## Glean

<sup>*[issue-tracker#798](https://gitlab.com/gitlab-com/gl-security/corp/cust-support-ops/issue-tracker/-/work_items/798) で導入*</sup>

Glean は、会社のすべての知識を接続し理解することで、Zendesk で作業中に必要な答えをもたらします。Glean により、チームは最先端の企業向け検索および RAG テクノロジーを使って最も関連性の高い最新情報を取得し、より迅速な応答時間で顧客体験を改善できます。チケットコンテキスト、製品の専門家、または顧客情報にアクセスして、質問に回答し問題をすばやく解決する場合でも、Glean は会社固有のエンタープライズナレッジグラフに基づいて、高度にパーソナライズされた回答を生成します。

Glean を通じて次が可能です:

- チケットの要約を取得する
- 推奨される次のステップを取得する
- 応答のドラフトを作成する
- GitLab リソースをまたいで検索を実行する
- GitLab の事前定義プロンプトを使用する

{{% alert title="Technical Details" color="primary" %}}

- 場所:
  - ナビバー
  - チケットサイドバー
- グループによる制限:
  - Accounts Receivable
  - Billing
  - BPO
  - Support AMER
  - Support APAC
  - Support EMEA
- このアプリは Glean によって開発され、[Zendesk Marketplace](https://www.zendesk.com/marketplace/apps/support/922191/glean/) で利用可能です。

{{% /alert %}}

## Notifications App

{{% alert title="Info" color="info" %}}

- このアプリはオプトインです。つまり、通知を受信するためにユーザー設定を変更しない限り、何も発生しません。

{{% /alert %}}

このアプリは、さまざまな条件とユーザー設定に応じて、画面上部に通知を投稿する処理を行います。

{{% alert title="Technical Details" color="primary" %}}

- 場所: トップナビバー
- グループによる制限:
  - Support AMER
  - Support APAC
  - Support EMEA
  - Support Managers
  - Support Ops
- このアプリは社内で開発されており、[Notifications App プロジェクト](https://gitlab.com/gitlab-support-readiness/zendesk-global/apps/notification-app) で見られます。

{{% /alert %}}

### アプリをトリガーする現在のイベント

次のイベントは、通知処理のためにアプリへデータを送信します:

- チケットへエージェントによる非公開コメントが投稿された
- チケットへエージェントによる公開コメントが投稿された
- チケットへ顧客による公開コメントが投稿された
- 緊急チケットが作成された
- エスカレーションチケットが作成された
- チケットが STAR された
- 特定の組織によりチケットが作成された

### ユーザー設定

受信する (および受信しない) 通知の種類を決定する現在のユーザー設定は次のとおりです:

- Play notification sound
  - このボックスをチェックすると、アプリが通知音を再生します。
- Notify me for
  - 通知を受け取るチケットの種類をアプリに伝えます
  - 値:
    - Assigned tickets only
    - CC'd tickets only
    - All tickets
- Notify me about
  - 通知を受け取るイベントの種類をアプリに伝えます
  - 値:
    - All public comments (agent and customer)
    - Only public comments from agents
    - Only public comments from customers
    - Only private comments
    - All types of comments
- Notify me only for tickets with priority
  - 通知を受け取る優先度をアプリに伝えます
  - 値:
    - at least Urgent
    - at least High
    - at least Medium
    - at least Low
  - 注意: 空欄の値は「all priorities」とみなされます
- Also notify me for escalated ticket creation
  - エスカレーション対象の組織がチケットを作成したときに、アプリ経由で通知を受けたいかを指定します。
  - 注意: これは他のすべての設定と独立して機能します。
- Also notify me for emergency ticket creation
  - 緊急チケットが作成されたときに、アプリ経由で通知を受けたいかを指定します。
  - 注意: これは他のすべての設定と独立して機能します。
- Also notify me for STARs
- Also notify me for soon to breach tickets on
  - チケットがブリーチ間近 (2 時間以内) のときに、アプリ経由で通知を受けたいかを指定します
  - 値:
    - Assigned tickets only
    - CC'd tickets only
    - Tickets within my SGG only
    - All tickets
  - 注意: これは他のすべての設定と独立して機能します。
- Also notify me for tickets created via specific orgs
  - 特定の組織によりチケットが作成されたときに、アプリ経由で通知を受けたいかを指定します
  - リストはカンマ区切りであるべきです
    - 例: 組織 123、456、789 について通知を受けたい場合、値として 123,456,789 または 123, 456, 789 を使用します
  - 注意: これは他のすべての設定と独立して機能します。

個人ユーザー設定の編集に関する情報は、[Zendesk のドキュメント](https://support.zendesk.com/hc/en-us/articles/4408819930906-Editing-your-personal-settings-in-Zendesk-Chat-Support-accounts#topic_gfh_rqm_4fb) を参照してください。

## STAR

<sup>*[support-team-meta#4694](https://gitlab.com/gitlab-com/support/support-team-meta/-/work_items/4694) で導入*</sup>

Support Ticket Attention Requests (STAR) は、GitLab チームメンバーがチケットに追加の注意を払うよう依頼するための仕組みです。これは、エージェントが Zendesk で STAR プロセスを開始するために使用するアプリです。

{{% alert title="Technical Details" color="primary" %}}

- 場所: チケットサイドバー
- このアプリは社内で開発されており、[STAR プロジェクト](https://gitlab.com/gitlab-support-readiness/zendesk-global/apps/star) で見られます。

{{% /alert %}}

## Support Ops Super App

Support Ops 関連のさまざまなことを実行できる、プラグインで制御されるアプリです。

現在のプラグインは次のとおりです:

- Namespace Lookup
  > gitlab.com で名前空間を検索できます。結果に基づいた情報を表示します。これは GitLab Super App のものと関連していますが、こちらは表示する情報が少なく、関連付けられている SFDC ID を表示します。
- Project Lookup
  > gitlab.com でプロジェクトを検索できます。結果に基づいた情報を表示します。
- Attempt Association
  > 製品タイプが GitLab.com のチケットでは、プラグインのボタンをクリックすると、依頼者を組織に自動的に関連付けようとします。それが不可能な場合、なぜ不可能だったかを詳述します。
- Associate User
  > Support Ops のチケットでは、メールアドレスを尋ねます。次に、現在のチケット上の組織を使用して、それらのメールアドレスをその組織へ関連付けます。
- Deassociate user
  > Support Ops のチケットでは、メールアドレスを尋ねます。次に、現在のチケット上の組織を使用して、それらのメールアドレスをその組織から関連付け解除します。
- CMP Developers
  > 組織の CMP 開発者リスト (メールアドレス別) を出力します (CMP がある場合)

{{% alert title="Technical Details" color="primary" %}}

- 場所: チケットサイドバー
- ロールによる制限:
  - Admin
- このアプリは社内で開発されており、[Support Ops Super App プロジェクト](https://gitlab.com/gitlab-support-readiness/zendesk-global/apps/support-ops-super-app) で見られます。

{{% /alert %}}

## Zendesk Super App

<sup>*[support-ops-project#801](https://gitlab.com/gitlab-com/support/support-ops/support-ops-project/-/issues/801) で導入*</sup>

Zendesk 関連のさまざまなことを実行できる、プラグインで制御されるアプリです。

- Create new ticket
  > エージェントが現在開いているチケットと同じユーザーを使って、新しいチケットを作成できるようにします。
- Due date picker
  > Task チケットの Due Date の設定をカスタマイズできるようにします。デフォルトでは Zendesk は日付の設定のみを許可しています。これにより、日付、時刻、タイムゾーンを設定できます。
  >
  > このアプリを使って Due Date Note を設定し、タスク通知を無効化 (または有効化) することもできます。
- Escalated tickets
  > 過去 6 か月以内にエスカレーションされた組織配下のチケットを検索します。
- Related tickets
  > チケットが現在使用しているカテゴリ (またはサブカテゴリ) に基づいて、現在のチケットに関連するチケットを探します。それらを最大 5 件表示します (チケットの update_at 値の降順で並び替え)。
- Attachments
  > チケットに存在する添付ファイルを表示します。

{{% alert title="Technical Details" color="primary" %}}

- 場所: チケットサイドバー
- グループによる制限:
  - BPO
  - Support AMER
  - Support APAC
  - Support EMEA
- このアプリは社内で開発されており、[Zendesk Super App プロジェクト](https://gitlab.com/gitlab-support-readiness/zendesk-global/apps/zendesk-super-app) で見られます。

{{% /alert %}}

## ZenGuard

<sup>*[issue-tracker#122](https://gitlab.com/gitlab-com/gl-security/corp/cust-support-ops/issue-tracker/-/issues/122) で導入*</sup>

潜在的に危険なアクションについて警告 (またはブロック) するための警告システムを Zendesk に実装します。警告がバイパス可能な場合、警告の右側に閉じるボタン (X) が表示されます (このボタンをクリックすると警告が削除されます)。

現在のチェック一覧:

- 未承認のフォーム変更を行っているかどうかをチェックします

{{% alert title="Technical Details" color="primary" %}}

- 場所: チケットサイドバー
- このアプリは社内で開発されており、[ZenGuard プロジェクト](https://gitlab.com/gitlab-support-readiness/zendesk-global/apps/zenguard) で見られます。

{{% /alert %}}
