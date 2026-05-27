---
title: 'Global apps'
description: 'Zendesk グローバルアプリに関するドキュメント'
upstream_path: /handbook/security/customer-support-operations/zendesk/apps/global/
upstream_sha: "154fb2bd6436508aa2d90583cc235d5fe28b1705"
lastmod: 2026-05-26T12:05:00-05:00
translated_at: "2026-05-27T00:00:00Z"
translator: claude
stale: false
---

このガイドでは、現在 Global の Zendesk インスタンスで使用されている Zendesk アプリについて説明します。

## Advanced SAST App

<sup>*[support-team-meta#6652](https://gitlab.com/gitlab-com/support/support-team-meta/-/issues/6652) で導入*</sup>

Advanced SAST App は、GitLab Advanced SAST の LGPL ライセンスのコンポーネントのソースコードに対するユーザーリクエストを迅速に処理できるようにするチケットアプリです。

{{% alert title="Technical Details" color="primary" %}}

- Location: Ticket sidebar
- Restricted by Group:
  - Support AMER
  - Support APAC
  - Support EMEA
- このアプリケーションは社内で開発されたもので、[Advanced SAST App プロジェクト](https://gitlab.com/gitlab-support-readiness/zendesk-global/apps/advanced-sast-app)で確認できます。

{{% /alert %}}

## Advanced Search

Advanced Search は、チケット、ユーザー、組織（org）に対する複雑な検索クエリを構築するためのシンプルなビジュアルインターフェイスを提供するアプリです。検索結果を CSV 形式でエクスポートすることもできます。

{{% alert title="Technical Details" color="primary" %}}

- Location: Navbar
- このアプリケーションは [Zendesk](https://www.zendesk.com/marketplace/partners/zendesk/) によって開発され、[Zendesk Marketplace](https://www.zendesk.com/marketplace/apps/support/198393/advanced-search/) で入手できます。

{{% /alert %}}

## GitLab Reminders App

<sup>*[support-team-meta#3036](https://gitlab.com/gitlab-com/support/support-team-meta/-/issues/3036) で導入*</sup>

Reminders App はナビゲーションバーに表示され、エージェントが関与しているチケットのより専門的なビューを提供します。現在、次のものを表示します:

- Closed 状態ではなく、保留中/期限超過のタスクがある、あなたに割り当てられたチケット
- 最近閲覧したチケット
- Closed 状態ではない、あなたに割り当てられたチケット
- Closed 状態ではない、あなたが CC されているチケット

また、対象タスクのために残したノート、期限、そしてタスクを完了済みとしてすばやくマークする（ノートと期限を削除する）ボタンを表示することで、タスクをすばやく管理できます。

{{% alert title="Technical Details" color="primary" %}}

- Location: Navbar
- このアプリケーションは社内で開発されたもので、[GitLab Reminders App プロジェクト](https://gitlab.com/gitlab-support-readiness/zendesk-global/apps/reminders-app)で確認できます。

{{% /alert %}}

## GitLab Super App

<sup>*[support-team-meta#801](https://gitlab.com/gitlab-com/support/support-team-meta/-/issues/801) で導入*</sup>

GitLab 関連のいくつかのことを実行できる、プラグインで制御されるアプリです。

現在のプラグインは次のとおりです:

- User Lookup
  > これにより、gitlab.com でユーザー名やメールを検索できます。その後、結果に基づいて情報を表示します。
- Namespace Lookup
  > これにより、gitlab.com でネームスペースを検索できます。その後、結果に基づいて情報を表示します。
- Collaboration Project
組織にコラボレーションプロジェクト ID があるかどうかを確認します。存在する場合は、そのプロジェクトへのリンクを提供します。
- Email Suppressions
  > これは mailgun でバウンスによる suppression を検索します（complaint や unsubscribe では行わないことに注意してください）。結果（suppression のメッセージ付き）を表示します。
  >
  > また、（見つかった場合は）suppression を削除するオプションも提供します。削除すると mailgun から削除され、suppression 削除の結果を含む内部コメントがチケットに追加されます。
- Fieldnotes
  > このアプリは、現在の Zendesk チケット ID を参照する既存の Issue がないか [Fieldnotes プロジェクト](https://gitlab.com/gitlab-com/support/fieldnotes/-/issues)を確認します。既存の Issue が見つからない場合、エージェントは Zendesk チケット内から直接新しい Fieldnotes Issue を作成できます。
- Account Verification Helper
  > これは、選択した検証のタイプに基づいて、アカウント検証に合格したかどうかを確認するための使いやすいフォームを作成します。合格したチャレンジから Risk Factor を計算し、合格したチャレンジを反映するように変更します。また、フォームが反映する内容の内部ノートを投稿することもできます。

{{% alert title="Technical Details" color="primary" %}}

- Location: Ticket sidebar
- Restricted by Group:
  - BPO
  - Support AMER
  - Support APAC
  - Support EMEA
- このアプリケーションは社内で開発されたもので、[GitLab Super App プロジェクト](https://gitlab.com/gitlab-support-readiness/zendesk-global/apps/gitlab-super-app)で確認できます。

{{% /alert %}}

## Glean

<sup>*[issue-tracker#798](https://gitlab.com/gitlab-com/gl-security/corp/cust-support-ops/issue-tracker/-/work_items/798) で導入*</sup>

Glean は、会社のすべてのナレッジに接続して理解し、Zendesk で作業しながら必要な答えをもたらします。Glean を使うことで、チームは最先端のエンタープライズ検索と RAG 技術を用いて、最も関連性が高く最新の情報を取得し、より迅速な応答時間で顧客体験を向上させます。チケットのコンテキスト、プロダクトの専門家、顧客情報にアクセスして質問に答え、問題のブロックをすばやく解消する場合でも、Glean は会社固有のエンタープライズナレッジグラフに基づいた高度にパーソナライズされた答えを生成します。

Glean を通じて、次のことができます:

- チケットの要約を取得する
- 推奨される次のステップを取得する
- 応答の下書きを作成する
- GitLab のリソース全体を検索する
- GitLab の事前定義されたプロンプトを使用する

{{% alert title="Technical Details" color="primary" %}}

- Locations:
  - Navbar
  - Ticket sidebar
- Restricted by Group:
  - Accounts Receivable
  - Billing
  - BPO
  - Support AMER
  - Support APAC
  - Support EMEA
- このアプリケーションは Glean によって開発され、[Zendesk Marketplace](https://www.zendesk.com/marketplace/apps/support/922191/glean/) で入手できます。

{{% /alert %}}

## Notifications App

{{% alert title="Info" color="info" %}}

- このアプリはオプトイン式です。つまり、通知を受け取るようにユーザー設定を変更しない限り、何も起こりません。

{{% /alert %}}

このアプリは、さまざまな条件やユーザー設定に応じて、画面の上部に通知を投稿することを担当します。

{{% alert title="Technical Details" color="primary" %}}

- Location: Top navbar
- Restricted by Group:
  - Support AMER
  - Support APAC
  - Support EMEA
  - Support Managers
  - Support Ops
- このアプリケーションは社内で開発されたもので、[Notifications App プロジェクト](https://gitlab.com/gitlab-support-readiness/zendesk-global/apps/notification-app)で確認できます。

{{% /alert %}}

### Current events that trigger the app

以下のイベントは、通知処理のためにアプリにデータを送信します:

- チケットにエージェントの非公開コメントが作成された
- チケットにエージェントの公開コメントが作成された
- チケットに顧客の公開コメントが作成された
- 緊急チケットが作成された
- エスカレーションされたチケットが作成された
- チケットが STAR された
- 特定の組織によってチケットが作成された

### User settings

受け取る（および受け取らない）通知を決定する現在のユーザー設定は次のとおりです:

- Play notification sound
  - このボックスをチェックすると、アプリに通知音を再生するよう指示します。
- Notify me for
  - これは、どの種類のチケットについて通知するかをアプリに指示します
  - 値:
    - Assigned tickets only
    - CC’d tickets only
    - All tickets
- Notify me about
  - これは、どの種類のイベントについて通知するかをアプリに指示します
  - 値:
    - All public comments (agent and customer)
    - Only public comments from agents
    - Only public comments from customers
    - Only private comments
    - All types of comments
- Notify me only for tickets with priority
  - これは、どの優先度について通知するかをアプリに指示します
  - 値:
    - at least Urgent
    - at least High
    - at least Medium
    - at least Low
  - 注: 空の値は「すべての優先度」とみなされます
- Also notify me for escalated ticket creation
  - これは、エスカレーションされた組織がチケットを作成したときにアプリで通知を受けたいかどうかを指定します。
  - 注: これは他のすべての設定とは独立して機能します。
- Also notify me for emergency ticket creation
  - これは、緊急チケットが作成されたときにアプリで通知を受けたいかどうかを指定します。
  - 注: これは他のすべての設定とは独立して機能します。
- Also notify me for STARs
- Also notify me for soon to breach tickets on
  - これは、チケットがまもなく breach する（2 時間以内）ときにアプリで通知を受けたいかどうかを指定します
  - 値:
    - Assigned tickets only
    - CC’d tickets only
    - Tickets within my SGG only
    - All tickets
  - 注: これは他のすべての設定とは独立して機能します。
- Also notify me for tickets created via specific orgs
  - これは、特定の組織によってチケットが作成されたときにアプリで通知を受けたいかどうかを指定します
  - リストはカンマ区切りにする必要があります
    - 例: 組織 123、456、789 について通知を受けたい場合は、値 123,456,789 または 123, 456, 789 を使用します
  - 注: これは他のすべての設定とは独立して機能します。

個人のユーザー設定の編集に関する情報については、[Zendesk のドキュメント](https://support.zendesk.com/hc/en-us/articles/4408819930906-Editing-your-personal-settings-in-Zendesk-Chat-Support-accounts#topic_gfh_rqm_4fb)を参照してください。

## STAR

<sup>*[support-team-meta#4694](https://gitlab.com/gitlab-com/support/support-team-meta/-/work_items/4694) で導入*</sup>

Support Ticket Attention Requests (STAR) は、GitLab チームメンバーがチケットに追加の注目を求めるためのメカニズムです。これは、エージェントが Zendesk で STAR プロセスを開始するために使用するアプリです。

{{% alert title="Technical Details" color="primary" %}}

- Location: Ticket sidebar
- このアプリケーションは社内で開発されたもので、[STAR プロジェクト](https://gitlab.com/gitlab-support-readiness/zendesk-global/apps/star)で確認できます。

{{% /alert %}}

## Support Ops Super App

Support Ops 関連のいくつかのことを実行できる、プラグインで制御されるアプリです。

現在のプラグインは次のとおりです:

- Namespace Lookup
  > これにより、gitlab.com でネームスペースを検索できます。その後、結果に基づいて情報を表示します。これは GitLab Super App のものと関連していますが、代わりに表示する情報が少なく、関連付けられている SFDC ID を表示します。
- Project Lookup
  > これにより、gitlab.com でプロジェクトを検索できます。その後、結果に基づいて情報を表示します。
- Attempt Association
  > プロダクトタイプが GitLab.com のチケットで、プラグインのボタンをクリックすると、リクエスト者を組織に自動関連付けしようとします。それが不可能な場合は、なぜ不可能だったかを詳しく示します。
- Associate User
  > Support Ops のチケットで、メールアドレスを尋ねます。その後、現在のチケットの組織を使って、それらのメールアドレスをその組織に関連付けます。
- Deassociate user
  > Support Ops のチケットで、メールアドレスを尋ねます。その後、現在のチケットの組織を使って、それらのメールアドレスをその組織から関連付け解除します。
- CMP Developers
  > 組織の CMP developer のリストを（メールで）出力します（CMP がある場合）

{{% alert title="Technical Details" color="primary" %}}

- Location: Ticket sidebar
- Restricted by Role:
  - Admin
- このアプリケーションは社内で開発されたもので、[Support Ops Super App プロジェクト](https://gitlab.com/gitlab-support-readiness/zendesk-global/apps/support-ops-super-app)で確認できます。

{{% /alert %}}

## Zendesk Super App

<sup>*[support-ops-project#801](https://gitlab.com/gitlab-com/support/support-ops/support-ops-project/-/issues/801) で導入*</sup>

Zendesk 関連のいくつかのことを実行できる、プラグインで制御されるアプリです。

- Create new ticket
  > エージェントが現在いるチケットと同じユーザーを使って、新しいチケットを作成できます。
- Due date picker
  > これにより、Task チケットの Due Date を何に設定するかをカスタマイズできます。デフォルトでは、Zendesk は日付の設定のみを許可します。これにより、日付、時刻、タイムゾーンを設定できます。
  >
  > また、このアプリを使って Due Date Note を設定したり、タスク通知を無効化（または有効化）したりすることもできます。
- Escalated tickets
  > 過去 6 ヶ月以内にエスカレーションされた、組織下のチケットを検索します。
- Related tickets
  > チケットが現在使用しているカテゴリ（またはサブカテゴリ）に基づいて、現在のチケットに関連するチケットを探します。その後、最大 5 件（チケットの update_at 値で降順にソート）を表示します。
- Attachments
  > チケットに存在する添付ファイルを表示します。

{{% alert title="Technical Details" color="primary" %}}

- Location: Ticket sidebar
- Restricted by Group:
  - BPO
  - Support AMER
  - Support APAC
  - Support EMEA
- このアプリケーションは社内で開発されたもので、[Zendesk Super App プロジェクト](https://gitlab.com/gitlab-support-readiness/zendesk-global/apps/zendesk-super-app)で確認できます。

{{% /alert %}}

## ZenGuard

<sup>*[issue-tracker#122](https://gitlab.com/gitlab-com/gl-security/corp/cust-support-ops/issue-tracker/-/issues/122) で導入*</sup>

潜在的に危険なアクションを警告する（またはブロックする）警告システムを Zendesk に実装します。警告がバイパス可能な場合は、その右側にクローズボタン（X）が表示されます（そのボタンをクリックすると警告が削除されます）。

現在のチェックのリスト:

- 未承認のフォーム変更を行っていないかチェックします

{{% alert title="Technical Details" color="primary" %}}

- Location: Ticket sidebar
- このアプリケーションは社内で開発されたもので、[ZenGuard プロジェクト](https://gitlab.com/gitlab-support-readiness/zendesk-global/apps/zenguard)で確認できます。

{{% /alert %}}
