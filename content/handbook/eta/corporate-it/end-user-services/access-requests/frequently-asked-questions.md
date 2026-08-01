---
title: "アクセスリクエスト（AR）に関するよくある質問"
aliases:
  - /handbook/security/corporate/end-user-services/access-requests/frequently-asked-questions/
upstream_path: /handbook/eta/corporate-it/end-user-services/access-requests/frequently-asked-questions/
upstream_sha: c75ccd81af7d76262c8cb188bf7e7e2a7f838894
lastmod: "2026-07-28T15:04:15+01:00"
translated_at: "2026-07-31T07:54:55+09:00"
translator: codex
stale: false
---

## サポートが必要ですか？

- 特定の SLA はありませんが、Issue で `@gitlab-com/business-technology/end-user-services` に @メンションしてください。
- リクエストが緊急の場合は、Slack の Compass アプリ（上部の検索バーに「Compass」と入力して見つけます）または it-help@gitlab.com を通じて IT に連絡してください。

## アクセスが必要です

### AR リクエストをしばらく開いたままにしています。対応を進めるにはどうすればよいですか？

1. アクセスリクエストが[手順](/handbook/eta/corporate-it/end-user-services/access-requests/access-requests#how-do-i-choose-which-template-to-use)に従って完了していること、およびアクセスが必要なシステム／ボルト／グループ／プロジェクトと、必要なロールまたは権限を含めたことを確認してください。
1. ほとんどのアクセスリクエストには Manager の承認が必要です。AR で Manager をタグ付けし、Issue に ~"AR-Approval::Manager Approved" と ~"ReadyForProvisioning" のラベルを追加するよう依頼してください。
1. アクセスをリクエストしているツールに対して、正しいプロビジョニング担当者を Issue にタグ付けし、担当に割り当てたことを確認してください。すべてのツールのプロビジョニング担当者は [Tech Stack](https://gitlab.com/gitlab-com/www-gitlab-com/-/blob/master/data/tech_stack.yml)で確認できます。
1. プロビジョニング担当者が IT チームの場合は、AR に ~"IT::to do" ラベルを追加してください。
1. 上記のすべての手順を実行してもアクセスリクエストの対応が進まない場合は、ツールを所有するチームの Slack チャンネルで連絡してください。各チームの Slack チャンネルは [Tech Stack](https://gitlab.com/gitlab-com/www-gitlab-com/-/blob/master/data/tech_stack.yml)で確認できます。

### システムまたはグループ／ボルトへのアクセスが必要ですか？

1. ニーズに基づいてテンプレートを選択してください。ほとんどの人は [Bulk](https://gitlab.com/gitlab-com/team-member-epics/access-requests/-/issues/new?issuable_template=Bulk_Access_Request) または [Single Person](https://gitlab.com/gitlab-com/team-member-epics/access-requests/-/issues/new?issuable_template=Individual_Bulk_Access_Request) テンプレートを使用します。
1. オンボーディング中に漏れた場合を除き、ベースライン権限の一部であるものについてアクセスリクエストを作成しないでください。
    1. [全チームメンバーのベースライン権限](https://internal.gitlab.com/handbook/eta/corporate-it/end-user-services/access-request/baseline-entitlements/#baseline-entitlements-all-gitlab-team-members)
    1. [ロールベースのベースライン権限](https://gitlab.com/gitlab-com/team-member-epics/access-requests/-/tree/master/.gitlab/issue_templates/role_baseline_access_request_tasks)
1. 次の場合を**除き**、Issue には `AR-Approval::Manager Approved` ラベルが必要です。
    1. Google Workspace のメールエイリアスまたはグループに追加される内部チームメンバー
    1. Slack グループに追加される内部チームメンバー
    1. まったく変更のないロールベースのベースライン権限
1. [システムへのアクセスをプロビジョニングする担当者](https://gitlab.com/gitlab-com/www-gitlab-com/-/blob/master/data/tech_stack.yml)に Issue を割り当ててください。
1. サポートが必要な場合は、支援が必要な Issue へのリンクを添えて Slack チャンネル #it-help で IT-Ops に依頼してください。
1. 作業に必要な最小限のアクセスのみを要求してください。

### Manager の承認は必要ですか？ 場合によります

次の内容をリクエストする場合、Manager の承認は不要です。

1. Google Workspace のメールエイリアスまたはグループに追加される内部チームメンバー（そのグループが Google Cloud Platform の権限を提供する場合を除く）
1. Slack グループに追加される内部チームメンバー
1. 自身のロールベース権限に含まれるもの

### Rails またはデータベースの本番コンソール（grpd）へのアクセスが必要です

Teleport を使用して、一時的なアクセスを次のいずれかにリクエストしてください。
[Rails コンソール](https://gitlab.com/gitlab-com/runbooks/-/blob/master/docs/teleport/Connect_to_Rails_Console_via_Teleport.md)
または
[データベースコンソール](https://gitlab.com/gitlab-com/runbooks/-/blob/master/docs/teleport/Connect_to_Database_Console_via_Teleport.md)。

### version.gitlab.com へのアクセスが必要です

すでにアクセスできる可能性があります。[dev アカウントがあるかテストしてください。](https://dev.gitlab.org/)

- dev アカウントが必要な場合は、[Single Person Access Request](https://gitlab.com/gitlab-com/team-member-epics/access-requests/-/issues/new?issuable_template=Individual_Bulk_Access_Request)を作成してください。
- dev アカウントがある場合は、[version](https://version.gitlab.com/users/sign_in)に移動し、GitLab でログインして、認証情報の使用を許可してください。

### Zendesk に Light Agent としてアクセスする必要があります

Zendesk Light アクセスのアクセスリクエストを作成する必要はありません。[メールでアクセスを取得する手順](/handbook/support/internal-support/)に従ってください。

### メールエイリアスを追加するか、氏名を変更する必要があります

メールエイリアスの追加または氏名変更には、[`slack_googlegroup_1password` AR テンプレート](https://gitlab.com/gitlab-com/team-member-epics/access-requests/issues/new?issuable_template=slack_googlegroup_1Passwordgroupvault)を使用してください。
リクエストできる内容や数に制限はありませんが、追加または変更について短い説明を記載してください。不適切と判断された場合、または運用の裁量により、一部のエイリアスリクエストが却下されることがあります。

このアプリケーションの自動化は Okta で行われますが、「真の」システムのプロビジョニングとプロビジョニング解除は、影響を受けるシステム内でアクセス変更リクエストを通じて手動で完了する必要があります。

### 古いアクセスリクエストをクローズする

アクセスリクエストはできるだけ早く（30 日以内に）完了することが期待されます。

30 日（作成時点）を経過したアクセスリクエストを自動的にクローズするパイプラインを設定しています。
これは古い AR を減らし、バックログを整理するためです。例外として、AR に `AccessReview` ラベルがある場合、そのラベルを持つ Issue はパイプラインで無視されます。
このパイプラインは、Issue が自動的にクローズされること、およびチームメンバーが
残っているタスクがある場合にすべきことを示すコメントを Issue に追加します。

現在、パイプラインは毎週金曜日の午後 09:30 に実行するよう設定されています。これは
30 日経過したすべてのアクセスリクエスト Issue をクローズします。

ご注意ください。これは AR 自動クローザーの最初のイテレーションです。私たちのチームは、これを洗練し改善するために取り組みます。

### 既存のアクセスを削除する必要があります

削除する必要があるアクセスと対象者を指定したアクセスリクエストを作成してください。
