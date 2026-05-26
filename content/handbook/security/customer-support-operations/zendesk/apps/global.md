---
title: 'グローバルアプリ'
description: 'Zendesk グローバルアプリに関するドキュメント'
upstream_path: /handbook/security/customer-support-operations/zendesk/apps/global/
upstream_sha: 7405b4b85e7e4a5d61d4eff68e49976463e3dada
lastmod: "2026-05-26T12:05:00-05:00"
translated_at: "2026-05-26T00:00:00Z"
translator: claude
stale: false
---

このガイドでは、Global Zendesk インスタンスで現在使用されている Zendesk アプリについて説明します。

## Advanced SAST App

<sup>*[support-team-meta#6652](https://gitlab.com/gitlab-com/support/support-team-meta/-/issues/6652) を通じて導入*</sup>

Advanced SAST App は、GitLab Advanced SAST における LGPL ライセンスのコンポーネントのソースコードに関するユーザーリクエストを迅速に処理できるようにするチケットアプリです。

{{% alert title="Technical Details" color="primary" %}}

- 場所: チケットサイドバー
- グループによる制限:
  - Support AMER
  - Support APAC
  - Support EMEA
- このアプリケーションは社内で開発されたもので、[Advanced SAST App プロジェクト](https://gitlab.com/gitlab-support-readiness/zendesk-global/apps/advanced-sast-app) にあります。

{{% /alert %}}

## Advanced Search

Advanced Search は、チケット、ユーザー、組織 (org) に対する複雑な検索クエリを構築するためのシンプルなビジュアルインターフェイスを提供するアプリです。検索結果を CSV 形式でエクスポートすることもできます。

{{% alert title="Technical Details" color="primary" %}}

- 場所: ナビバー
- このアプリケーションは [Zendesk](https://www.zendesk.com/marketplace/partners/zendesk/) によって開発され、[Zendesk Marketplace](https://www.zendesk.com/marketplace/apps/support/198393/advanced-search/) で入手できます。

{{% /alert %}}

## GitLab Reminders App

<sup>*[support-team-meta#3036](https://gitlab.com/gitlab-com/support/support-team-meta/-/issues/3036) を通じて導入*</sup>

Reminders App はナビバーに表示され、エージェントが関わっているチケットをより専門的に表示します。現在は次のものを表示します:

- 保留中/期限切れのタスクがあり、Closed 状態ではない、自分に割り当てられたチケット
- 最近表示したチケット
- Closed 状態ではない、自分に割り当てられたチケット
- Closed 状態ではない、自分が CC されているチケット

また、当該タスクに残したメモ、期限、そしてタスクを完了としてすばやくマークするボタン（メモと期限を削除する）を表示することで、タスクをすばやく管理できるようにします。

{{% alert title="Technical Details" color="primary" %}}

- 場所: ナビバー
- このアプリケーションは社内で開発されたもので、[GitLab Reminders App プロジェクト](https://gitlab.com/gitlab-support-readiness/zendesk-global/apps/reminders-app) にあります。

{{% /alert %}}

## GitLab Super App

<sup>*[support-team-meta#801](https://gitlab.com/gitlab-com/support/support-team-meta/-/issues/801) を通じて導入*</sup>

GitLab に関連するいくつかのことを実行できる、プラグイン制御のアプリです。

現在のプラグインは次のとおりです:

- User Lookup
  > gitlab.com でユーザー名やメールアドレスを検索できます。その結果に基づいて情報を表示します。
- Namespace Lookup
  > gitlab.com でネームスペースを検索できます。その結果に基づいて情報を表示します。
- Collaboration Project
組織にコラボレーションプロジェクト ID があるかどうかをチェックします。存在する場合は、当該プロジェクトへのリンクを提供します。
- Email Suppressions
  > mailgun でバウンスによるサプレッションを検索します（complaints や unsubscribes に対しては行わないことに注意してください）。結果を（サプレッションのメッセージとともに）表示します。
  >
  > また、（見つかった場合は）サプレッションを削除するオプションも提供します。そうすると mailgun から削除され、サプレッション削除の結果を記載した内部コメントがチケットに追加されます。
- Fieldnotes
  > このアプリは [Fieldnotes プロジェクト](https://gitlab.com/gitlab-com/support/fieldnotes/-/issues) で、現在の Zendesk チケット ID を参照している既存の Issue がないかをチェックします。既存の Issue が見つからない場合、エージェントは Zendesk チケット内から直接新しい Fieldnotes Issue を作成できます。
- Account Verification Helper
  > 選択された検証のタイプに基づいて、アカウント検証が合格したかどうかをチェックする使用可能なフォームを作成します。合格したチャレンジから Risk Factor を計算し、合格したチャレンジを反映するように修正します。また、フォームが反映する内容を内部メモとして投稿することもできます。

{{% alert title="Technical Details" color="primary" %}}

- 場所: チケットサイドバー
- グループによる制限:
  - BPO
  - Support AMER
  - Support APAC
  - Support EMEA
- このアプリケーションは社内で開発されたもので、[GitLab Super App プロジェクト](https://gitlab.com/gitlab-support-readiness/zendesk-global/apps/gitlab-super-app) にあります。

{{% /alert %}}

## Glean

<sup>*[issue-tracker#798](https://gitlab.com/gitlab-com/gl-security/corp/cust-support-ops/issue-tracker/-/work_items/798) を通じて導入*</sup>

Glean は、会社のすべての知識に接続して理解し、Zendesk での作業中に必要な答えをもたらします。Glean を使うと、最先端のエンタープライズ検索および RAG テクノロジーを利用して最も関連性が高く最新の情報を取得することで、チームはより速い応答時間でカスタマーエクスペリエンスを向上させます。チケットのコンテキスト、プロダクトの専門家、顧客情報にアクセスして質問に答え、問題のブロックを迅速に解除する場合でも、Glean は会社独自のエンタープライズナレッジグラフに基づいた高度にパーソナライズされた答えを生成します。

Glean を通じて、次のことができます:

- チケットの要約を取得する
- 推奨される次のステップを取得する
- 返信を起草する
- GitLab リソース全体で検索を実行する
- GitLab の定義済みプロンプトを使用する

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
- このアプリケーションは Glean によって開発され、[Zendesk Marketplace](https://www.zendesk.com/marketplace/apps/support/922191/glean/) で入手できます。

{{% /alert %}}

## Notifications App

{{% alert title="Info" color="info" %}}

- このアプリはオプトイン式です。つまり、通知を受け取るようにユーザー設定を変更しない限り、何も起こりません。

{{% /alert %}}

このアプリは、さまざまな条件とユーザー設定に応じて、画面の上部に通知を投稿する処理を担います。

{{% alert title="Technical Details" color="primary" %}}

- 場所: トップナビバー
- グループによる制限:
  - Support AMER
  - Support APAC
  - Support EMEA
  - Support Managers
  - Support Ops
- このアプリケーションは社内で開発されたもので、[Notifications App プロジェクト](https://gitlab.com/gitlab-support-readiness/zendesk-global/apps/notification-app) にあります。

{{% /alert %}}

### 現在アプリをトリガーするイベント

次のイベントは、通知処理のためにアプリにデータを送信します:

- チケットへのエージェントの非公開コメント
- チケットへのエージェントの公開コメント
- チケットへの顧客の公開コメント
- 緊急チケットの作成
- エスカレーションされたチケットの作成
- チケットへの STAR
- 特定の組織によるチケットの作成

### ユーザー設定

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
  - 注: 空の値は「all priorities」とみなされます
- Also notify me for escalated ticket creation
  - これは、エスカレーション状態の組織がチケットを作成したときに、アプリを通じて通知を受け取りたいかどうかを指定します。
  - 注: これは他のすべての設定とは独立して機能します。
- Also notify me for emergency ticket creation
  - これは、緊急チケットが作成されたときに、アプリを通じて通知を受け取りたいかどうかを指定します。
  - 注: これは他のすべての設定とは独立して機能します。
- Also notify me for STARs
- Also notify me for soon to breach tickets on
  - これは、チケットが（2 時間以内に）違反しそうなときに、アプリを通じて通知を受け取りたいかどうかを指定します
  - 値:
    - Assigned tickets only
    - CC’d tickets only
    - Tickets within my SGG only
    - All tickets
  - 注: これは他のすべての設定とは独立して機能します。
- Also notify me for tickets created via specific orgs
  - これは、特定の組織によってチケットが作成されたときに、アプリを通じて通知を受け取りたいかどうかを指定します
  - リストはカンマ区切りにしてください
    - 例: 組織 123、456、789 について通知を受け取りたい場合は、値 123,456,789 または 123, 456, 789 を使用します
  - 注: これは他のすべての設定とは独立して機能します。

個人のユーザー設定の編集に関する情報については、[Zendesk のドキュメント](https://support.zendesk.com/hc/en-us/articles/4408819930906-Editing-your-personal-settings-in-Zendesk-Chat-Support-accounts#topic_gfh_rqm_4fb) を参照してください。

## STAR

<sup>*[support-team-meta#4694](https://gitlab.com/gitlab-com/support/support-team-meta/-/work_items/4694) を通じて導入*</sup>

Support Ticket Attention Requests (STAR) は、GitLab のチームメンバーがチケットに追加の注意を払うようリクエストするためのメカニズムです。これは、エージェントが Zendesk で STAR プロセスを開始するために使用するアプリです。

{{% alert title="Technical Details" color="primary" %}}

- 場所: チケットサイドバー
- このアプリケーションは社内で開発されたもので、[STAR プロジェクト](https://gitlab.com/gitlab-support-readiness/zendesk-global/apps/star) にあります。

{{% /alert %}}

## Support Ops Super App

Support Ops に関連するいくつかのことを実行できる、プラグイン制御のアプリです。

現在のプラグインは次のとおりです:

- Namespace Lookup
  > gitlab.com でネームスペースを検索できます。その結果に基づいて情報を表示します。これは GitLab Super App のものと関連していますが、こちらは表示する情報が少なく、関連付けられている SFDC ID を表示します。
- Project Lookup
  > gitlab.com でプロジェクトを検索できます。その結果に基づいて情報を表示します。
- Attempt Association
  > プロダクトタイプが GitLab.com のチケットで、プラグインのボタンをクリックすると、リクエスターを組織に自動関連付けしようとします。それが不可能な場合は、なぜ不可能だったかを詳しく示します。
- Associate User
  > Support Ops チケットで、メールアドレスの入力を求めます。その後、現在のチケットの組織を使用して、当該メールアドレスをその組織に関連付けます。
- Deassociate user
  > Support Ops チケットで、メールアドレスの入力を求めます。その後、現在のチケットの組織を使用して、当該メールアドレスをその組織から関連付け解除します。
- CMP Developers
  > 組織の CMP 開発者のリストを（メールアドレスで）出力します（CMP がある場合）。

{{% alert title="Technical Details" color="primary" %}}

- 場所: チケットサイドバー
- ロールによる制限:
  - Admin
- このアプリケーションは社内で開発されたもので、[Support Ops Super App プロジェクト](https://gitlab.com/gitlab-support-readiness/zendesk-global/apps/support-ops-super-app) にあります。

{{% /alert %}}

## Zendesk Super App

<sup>*[support-ops-project#801](https://gitlab.com/gitlab-com/support/support-ops/support-ops-project/-/issues/801) を通じて導入*</sup>

Zendesk に関連するいくつかのことを実行できる、プラグイン制御のアプリです。

- Create new ticket
  > エージェントが現在いるチケットと同じユーザーを使用して、新しいチケットを作成できるようにします。
- Due date picker
  > これにより、Task チケットの Due Date に設定する値をカスタマイズできます。デフォルトでは、Zendesk は日付の設定のみを許可します。これにより、日付、時刻、タイムゾーンを設定できるようになります。
  >
  > このアプリを使用して、Due Date Note を設定したり、タスク通知を無効化（または有効化）したりすることもできます。
- Escalated tickets
  > 過去 6 か月以内にエスカレーションされた組織配下のチケットを検索します。
- Related tickets
  > チケットが現在使用しているカテゴリー（またはサブカテゴリー）に基づいて、現在のチケットに関連するチケットを探します。その後、最大 5 件を（チケットの update_at 値の降順で並べ替えて）表示します。
- Attachments
  > チケットに存在する添付ファイルを表示します。

{{% alert title="Technical Details" color="primary" %}}

- 場所: チケットサイドバー
- グループによる制限:
  - BPO
  - Support AMER
  - Support APAC
  - Support EMEA
- このアプリケーションは社内で開発されたもので、[Zendesk Super App プロジェクト](https://gitlab.com/gitlab-support-readiness/zendesk-global/apps/zendesk-super-app) にあります。

{{% /alert %}}

## ZenGuard

<sup>*[issue-tracker#122](https://gitlab.com/gitlab-com/gl-security/corp/cust-support-ops/issue-tracker/-/issues/122) を通じて導入*</sup>

潜在的に危険なアクションを警告（またはブロック）する警告システムを Zendesk に実装します。警告がバイパス可能な場合は、その右側に閉じるボタン (X) が表示されます（当該ボタンをクリックすると警告が削除されます）。

現在のチェックのリスト:

- 未承認のフォーム変更を行っていないかをチェックする

{{% alert title="Technical Details" color="primary" %}}

- 場所: チケットサイドバー
- このアプリケーションは社内で開発されたもので、[ZenGuard プロジェクト](https://gitlab.com/gitlab-support-readiness/zendesk-global/apps/zenguard) にあります。

{{% /alert %}}
