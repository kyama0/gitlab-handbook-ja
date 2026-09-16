---
title: "Compass でのアクセスリクエスト（AR）に関するよくある質問"
aliases:
  - /handbook/security/corporate/end-user-services/access-requests/frequently-asked-questions/
upstream_path: /handbook/eta/corporate-it/end-user-services/access-requests/frequently-asked-questions/
upstream_sha: 6922a5910f731dd441f582511639aa3d8a4b4d70
lastmod: "2026-09-15T14:25:09-04:00"
translated_at: "2026-09-16T21:13:21+00:00"
translator: codex
stale: false
---

## サポートが必要ですか？

- **Compass** を通じてアクセスリクエストを送信し、進捗を追跡してください。Slack の Compass アプリ（上部の検索バーに「Compass」と入力して見つけます）または Compass の Web アプリ（Okta 経由でアクセスできます）を使用します。
- リクエストが緊急の場合は、Slack の Compass アプリまたは it-help@gitlab.com を通じて IT に連絡してください。

## アクセスが必要です

### AR リクエストをしばらく開いたままにしています。対応を進めるにはどうすればよいですか？

1. Compass（Slack アプリまたは Web アプリ）でリクエストのステータスを確認してください。チケットには、ToDo/Progress/Waiting On Another Team のフローのどの段階にあるかが表示されます。
2. チケットに、アクセスが必要なシステム／ボルト／グループ／プロジェクトと、必要なロールまたは権限が含まれていることを確認してください。
3. Manager の承認が必要な場合は、Compass のチケット内で直接処理されるようになりました。チケットで Manager の承認待ちかどうかを確認し、必要に応じてそのチケットで Manager にフォローアップしてください。
4. チケットが承認済みでもプロビジョニング待ちの場合は、チケットを通じてプロビジョニング担当チームにフォローアップするか、[Tech Stack](https://techstack.gtlb.com/)で担当チームの Slack チャンネルを探してください。
5. 対応が進まず困っている場合は、Slack の Compass アプリまたは it-help@gitlab.com を通じて IT に連絡してください。

### システムまたはグループ／ボルトへのアクセスが必要ですか？

1. **Compass** を通じてリクエストを送信してください。Compass の Slack アプリまたは Compass の Web アプリ（Okta 経由）を使用します。これにより、リクエストのチケットが作成されます。
2. オンボーディング中に漏れた場合を除き、ベースライン権限の一部であるものについてリクエストを送信しないでください。
    1. [全チームメンバーのベースライン権限](https://internal.gitlab.com/handbook/eta/corporate-it/end-user-services/access-request/baseline-entitlements/#baseline-entitlements-all-gitlab-team-members)
    2. [ロールベースのベースライン権限](https://gitlab.com/gitlab-com/team-member-epics/access-requests/-/tree/master/.gitlab/issue_templates/role_baseline_access_request_tasks)
3. 必要な承認（Manager の承認など）は、チケット内で依頼・記録されます。別途ラベルを付けたり、GitLab のアクセスリクエストを作成したりする必要はありません。
4. チケットは適切なプロビジョニング担当チームに自動的に振り分けられます。各システムへのアクセスをプロビジョニングする担当者は、[Tech Stack](https://techstack.gtlb.com/)でも確認できます。

### Manager の承認は必要ですか？ 場合によります

次の内容をリクエストする場合、Manager の承認は不要です。

1. Google Workspace のメールエイリアスまたはグループに追加される内部チームメンバー（そのグループが Google Cloud Platform の権限を提供する場合を除く）
2. Slack グループに追加される内部チームメンバー
3. 自身のロールベース権限に含まれるもの

Manager の承認が必要な場合は、Compass のチケット内で自動的に承認が依頼され、状況が追跡されます。

### Rails またはデータベースの本番コンソール（grpd）へのアクセスが必要です

Teleport を使用して、一時的なアクセスを次のいずれかにリクエストしてください。
[Rails コンソール](https://gitlab.com/gitlab-com/runbooks/-/blob/master/docs/teleport/Connect_to_Rails_Console_via_Teleport.md)
または
[データベースコンソール](https://gitlab.com/gitlab-com/runbooks/-/blob/master/docs/teleport/Connect_to_Database_Console_via_Teleport.md)。

### version.gitlab.com へのアクセスが必要です

すでにアクセスできる可能性があります。[dev アカウントがあるかテストしてください。](https://dev.gitlab.org/)

- dev アカウントが必要な場合は、Compass（Slack アプリまたは Okta 経由の Web アプリ）を通じてリクエストを送信してください。
- dev アカウントがある場合は、[version](https://version.gitlab.com/users/sign_in)に移動し、GitLab でログインして、認証情報の使用を許可してください。

### Zendesk に Light Agent としてアクセスする必要があります

Zendesk Light アクセスのアクセスリクエストを送信する必要はありません。[メールでアクセスを取得する手順](/handbook/support/internal-support/)に従ってください。

### メールエイリアスを追加するか、氏名を変更する必要があります

メールエイリアスの追加または氏名変更には、Compass（Slack アプリまたは Okta 経由の Web アプリ）を通じてリクエストを送信してください。
リクエストできる内容や数に制限はありませんが、追加または変更について短い説明を記載してください。不適切と判断された場合、または運用の裁量により、一部のエイリアスリクエストが却下されることがあります。

このアプリケーションの自動化は Okta で行われますが、「真の」システムのプロビジョニングとプロビジョニング解除は、影響を受けるシステム内で手動で完了する必要があります。

### 古いアクセスリクエストをクローズする

アクセスリクエストはできるだけ早く（7 日以内に）完了することが期待されます。

作成から 7 日を過ぎても開いたままのチケットは、古いリクエストを減らしてバックログを整理するため、自動的にクローズされる場合があります。自動的にクローズされる場合は、残っているタスクへの次の対応手順とともに、チケット上でチームメンバーに 3 回通知されます。

ご注意ください。プロセスが Compass に移行したため、私たちは新しいシステムでの自動クローズの動作の詳細について、引き続き改善と確認を行います。

### 既存のアクセスを削除する必要があります

削除する必要があるアクセスと対象者を指定し、Compass（Slack アプリまたは Okta 経由の Web アプリ）を通じてリクエストを送信してください。
