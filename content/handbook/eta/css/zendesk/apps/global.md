---
title: 'Global アプリ'
description: 'Zendesk Global アプリに関するドキュメント'
upstream_path: "/handbook/eta/css/zendesk/apps/global/"
upstream_sha: "68426776f854464b95a942162d83ddb29afbcf7d"
lastmod: "2026-08-19T13:20:01-05:00"
translated_at: "2026-09-04T13:16:58+09:00"
translator: codex
stale: false
---

このガイドでは、Global Zendesk インスタンスで現在使用されている Zendesk アプリについて説明します。

## Advanced SAST App

<sup>*[support-team-meta#6652](https://gitlab.com/gitlab-com/support/support-team-meta/-/issues/6652) で導入*</sup>

Advanced SAST App は、GitLab Advanced SAST 内の LGPL ライセンスコンポーネントのソースコードに関するユーザーリクエストを迅速に処理できるようにするチケットアプリです。

{{% alert title="技術的な詳細" color="primary" %}}

- 場所: チケットサイドバー
- グループによる制限:
  - Support AMER
  - Support APAC
  - Support EMEA
- このアプリケーションは社内で開発され、[Advanced SAST App プロジェクト](https://gitlab.com/gitlab-support-readiness/zendesk-global/apps/advanced-sast-app)で確認できます。

{{% /alert %}}

## Advanced Search

Advanced Search は、チケット、ユーザー、組織（orgs）に対する複雑な検索クエリを構築するためのシンプルな視覚的インターフェースを提供するアプリです。また、検索結果を CSV 形式でエクスポートできます。

{{% alert title="技術的な詳細" color="primary" %}}

- 場所: ナビゲーションバー
- このアプリケーションは [Zendesk](https://www.zendesk.com/marketplace/partners/zendesk/) によって開発され、[Zendesk Marketplace](https://www.zendesk.com/marketplace/apps/support/198393/advanced-search/)で利用できます。

{{% /alert %}}

## Contact Management

<sup>*[gitlab-com/eta/css/issue-tracker#7](https://gitlab.com/gitlab-com/eta/css/issue-tracker/-/work_items/7) で導入*</sup>

このアプリケーションは、Zendesk Global でサポート連絡先を管理するために使われます。その機能は、リクエスト送信者の関連付け状況と製品タイプによって異なります。

- 関連付けられていないユーザーの場合:
  - `L&R Product Type` が `GitLab.com` の場合:
    - 自動関連付けを試行できます。これは、リクエスト送信者の gitlab.com アカウントを確認し、そのユーザーが Owner である有料のトップレベル名前空間を特定して、Salesforce Account を介して紐づく対応組織を見つけることで行われます。
  - `L&R Product Type` が `Self-Managed` または `GitLab Dedicated` の場合:
    - ユーザーを組織に関連付けます（Salesforce Account 経由）。必要な情報を求め、内部ノートを追加し、可能な変更を行います。
- 関連付けられているユーザーの場合:
  - リクエスト送信者の組織のサポート連絡先を一覧表示できます
  - リクエスト送信者の組織にユーザーを追加できます
  - リクエスト送信者の組織からユーザーを削除できます

アプリが行うすべてのエンドユーザー変更では、変更されたエンドユーザーの `Details` 属性に、組織、チケット、エージェントを示すメッセージが追加されます。

このアプリは、次のようなポリシー上の制限を回避しないことに注意してください。

- `Support Ops` フォームを使ってチケット外でアクションを実行すること
- サポート連絡先の上限である 30 人を超えること
- 連絡先管理プロジェクトを使っている組織のサポート連絡先を変更すること

{{% alert title="技術的な詳細" color="primary" %}}

- 場所: チケットサイドバー
- グループによる制限:
  - Support Ops
  - ASEs
- このアプリケーションは社内で開発され、[Contact Management プロジェクト](https://gitlab.com/gitlab-support-readiness/zendesk-global/apps/contact-management)で確認できます。

{{% /alert %}}

## GitLab Reminders App

<sup>*[support-team-meta#3036](https://gitlab.com/gitlab-com/support/support-team-meta/-/issues/3036) で導入*</sup>

Reminders App はナビゲーションバーに表示され、エージェントが関与しているチケットをより特化した表示で確認できます。現在は次を表示します。

- 保留中／期限超過のタスクがあり、Closed 状態ではない、自分に割り当てられたチケット
- 最近表示したチケット
- Closed 状態ではない、自分に割り当てられたチケット
- Closed 状態ではない、自分がフォローしているチケット

また、そのタスクに残した注記、期限、タスクを完了としてすばやくマークするボタン（注記と期限日を削除する）を確認することで、タスクをすばやく管理できます。

{{% alert title="技術的な詳細" color="primary" %}}

- 場所: ナビゲーションバー
- このアプリケーションは社内で開発され、[GitLab Reminders App プロジェクト](https://gitlab.com/gitlab-support-readiness/zendesk-global/apps/reminders-app)で確認できます。

{{% /alert %}}

## GitLab Super App

<sup>*[support-team-meta#801](https://gitlab.com/gitlab-com/support/support-team-meta/-/issues/801) で導入*</sup>

GitLab 関連の複数の操作を実行できる、プラグイン制御型アプリです。

現在のプラグインは次のとおりです。

- User Lookup
  > gitlab.com でユーザー名またはメールアドレスを検索できます。結果に基づく情報を表示します。
- Namespace Lookup
  > gitlab.com でネームスペースを検索できます。結果に基づく情報を表示します。
- Collaboration Project
これは、組織内のコラボレーションプロジェクト ID を確認します。存在する場合は、そのプロジェクトへのリンクを提供します。
- Email Suppressions
  > mailgun でバウンスによる抑制を検索します（苦情または配信停止については実行しません）。抑制のメッセージとともに結果を表示します。
  >
  > また、抑制を削除するオプションも提供します（見つかった場合）。削除すると mailgun から削除され、抑制削除の結果とともにチケットに内部コメントが追加されます。
- Fieldnotes
  > このアプリは、現在の Zendesk チケット ID を参照する既存の Issue があるかどうか、[Fieldnotes プロジェクト](https://gitlab.com/gitlab-com/support/fieldnotes/-/issues)を確認します。既存の Issue が見つからない場合、エージェントは Zendesk チケット内から直接、新しい Fieldnotes Issue を作成できます。
- Account Verification Helper
  > 選択した検証タイプに基づいてアカウント確認が合格したかを確認するための、使用可能なフォームを作成します。合格したチャレンジから Risk Factor を計算し、合格したチャレンジを反映するよう変更します。また、フォームに反映された内容の内部注記を投稿できます。

{{% alert title="技術的な詳細" color="primary" %}}

- 場所: チケットサイドバー
- グループによる制限:
  - BPO
  - Support AMER
  - Support APAC
  - Support EMEA
- このアプリケーションは社内で開発され、[GitLab Super App プロジェクト](https://gitlab.com/gitlab-support-readiness/zendesk-global/apps/gitlab-super-app)で確認できます。

{{% /alert %}}

## Glean

<sup>*[issue-tracker#798](https://gitlab.com/gitlab-com/gl-security/corp/cust-support-ops/issue-tracker/-/work_items/798) で導入*</sup>

Glean は、Zendesk で作業中に必要な回答を得られるよう、会社のすべてのナレッジに接続して理解します。Glean により、チームは最先端のエンタープライズ検索と RAG テクノロジーを使い、最も関連性が高く最新の情報を取得して、応答時間を短縮し顧客体験を向上させます。チケットのコンテキスト、プロダクトエキスパート、顧客情報にアクセスして質問に回答し問題をすばやく解決する場合も、Glean は会社独自のエンタープライズナレッジグラフに基づく、高度にパーソナライズされた回答を生成します。

Glean を通じて、次のことができます。

- チケットの要約を取得する
- 推奨される次のステップを取得する
- 応答の下書きを作成する
- GitLab リソース全体で検索する
- GitLab の事前定義プロンプトを使用する

{{% alert title="技術的な詳細" color="primary" %}}

- 場所:
  - ナビゲーションバー
  - チケットサイドバー
- グループによる制限:
  - Accounts Receivable
  - Billing
  - BPO
  - Support AMER
  - Support APAC
  - Support EMEA
- このアプリケーションは Glean によって開発され、[Zendesk Marketplace](https://www.zendesk.com/marketplace/apps/support/922191/glean/)で利用できます。

{{% /alert %}}

## STAR

<sup>*[support-team-meta#4694](https://gitlab.com/gitlab-com/support/support-team-meta/-/work_items/4694) で導入*</sup>

Support Ticket Attention Requests（STAR）は、GitLab チームメンバーがチケットに追加の注意を払うようリクエストできる仕組みです。これは、Zendesk で STAR プロセスを開始するためにエージェントが使用するアプリです。

{{% alert title="技術的な詳細" color="primary" %}}

- 場所: チケットサイドバー
- このアプリケーションは社内で開発され、[STAR プロジェクト](https://gitlab.com/gitlab-support-readiness/zendesk-global/apps/star)で確認できます。

{{% /alert %}}

## Support Ops Super App

Customer Support Systems 関連の複数の操作を実行できる、プラグイン制御型アプリです。

現在のプラグインは次のとおりです。

- Namespace Lookup
  > gitlab.com でネームスペースを検索できます。結果に基づく情報を表示します。GitLab Super App のものと関連していますが、こちらはより少ない情報を表示し、関連付けられた SFDC ID を表示します。
- Project Lookup
  > gitlab.com でプロジェクトを検索できます。結果に基づく情報を表示します。
- Attempt Association
  > プロダクトタイプが GitLab.com のチケットでは、プラグインのボタンをクリックすると、リクエスターを組織に自動関連付けしようとします。それが不可能な場合は、不可能な理由を詳しく示します。
- Associate User
  > Support Ops チケットで、メールアドレスを求められます。その後、現在のチケットの組織を使用して、指定したメールアドレスをその組織に関連付けます。
- Deassociate user
  > Support Ops チケットで、メールアドレスを求められます。その後、現在のチケットの組織を使用して、指定したメールアドレスとその組織の関連付けを解除します。
- CMP Developers
  > 組織に CMP がある場合、その組織の CMP 開発者（メールアドレス別）のリストを出力します。

{{% alert title="技術的な詳細" color="primary" %}}

- 場所: チケットサイドバー
- ロールによる制限:
  - Admin
- このアプリケーションは社内で開発され、[Support Ops Super App プロジェクト](https://gitlab.com/gitlab-support-readiness/zendesk-global/apps/support-ops-super-app)で確認できます。

{{% /alert %}}

## Zendesk Super App

<sup>*[support-ops-project#801](https://gitlab.com/gitlab-com/support/support-ops/support-ops-project/-/issues/801) で導入*</sup>

Zendesk 関連の複数の操作を実行できる、プラグイン制御型アプリです。

- 新しいチケットを作成する
  > エージェントが、現在開いているチケットと同じユーザーを使用して新しいチケットを作成できます。
- 期限日の選択
  > Task チケットの Due Date をどのように設定するかをカスタマイズできます。デフォルトでは、Zendesk では日付のみを設定できます。これにより、日付、時刻、タイムゾーンを設定できます。
  >
  > このアプリを使用して、Due Date Note を設定し、タスク通知を無効化（または有効化）することもできます。
- エスカレーション済みチケット
  > 過去 6 ヶ月以内にエスカレーションされた、組織下のチケットを検索します。
- 関連チケット
  > チケットが現在使用しているカテゴリー（またはサブカテゴリー）に基づいて、現在のチケットに関連するチケットを検索します。その後、最大 5 件を表示します（チケットの update_at 値の降順で並べ替えます）。
- 添付ファイル
  > チケットに存在する添付ファイルを表示します。

{{% alert title="技術的な詳細" color="primary" %}}

- 場所: チケットサイドバー
- グループによる制限:
  - BPO
  - Support AMER
  - Support APAC
  - Support EMEA
- このアプリケーションは社内で開発され、[Zendesk Super App プロジェクト](https://gitlab.com/gitlab-support-readiness/zendesk-global/apps/zendesk-super-app)で確認できます。

{{% /alert %}}

## ZenGuard

<sup>*[issue-tracker#122](https://gitlab.com/gitlab-com/gl-security/corp/cust-support-ops/issue-tracker/-/issues/122) で導入*</sup>

危険な可能性があるアクションを警告（またはブロック）する警告システムを Zendesk に実装します。警告を回避できる場合は、その右側に閉じるボタン（X）が表示されます（そのボタンをクリックすると警告が削除されます）。

現在の確認項目のリスト:

- 未承認のフォーム変更を行っているかを確認する

{{% alert title="技術的な詳細" color="primary" %}}

- 場所: チケットサイドバー
- このアプリケーションは社内で開発され、[ZenGuard プロジェクト](https://gitlab.com/gitlab-support-readiness/zendesk-global/apps/zenguard)で確認できます。

{{% /alert %}}
