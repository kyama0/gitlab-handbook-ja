---
title: "アクセスリクエスト（AR）FAQ"
upstream_path: /handbook/security/corporate/end-user-services/access-requests/frequently-asked-questions/
upstream_sha: 1e195b58b9f249ff10bd0e705106c320fee86141
translated_at: "2026-05-11T00:00:00Z"
translator: claude
stale: false
lastmod: "2025-07-07T23:50:04+00:00"
---

## ヘルプが必要ですか？

- 特定の SLA はありませんが、Issue で `@gitlab-com/business-technology/end-user-services` をメンションしてください。
- リクエストが緊急の場合、Slack の #it_help チャンネルで `it-help` をメンションし、緊急の理由を記載してください。

## アクセスが必要

### AR リクエストが長く開いたままです、どうすれば対応してもらえますか？

1. アクセスリクエストが [手順](/handbook/security/corporate/end-user-services/access-requests/access-requests#how-do-i-choose-which-template-to-use) に従って完了されており、アクセスが必要なシステム／ボルト／グループ／プロジェクトと、必要な役割または権限が含まれていることを確認してください。
1. ほとんどのアクセスリクエストにはマネージャーの承認が必要なので、AR でマネージャーをタグ付けし、Issue に ~"AR-Approval::Manager Approved" と ~"ReadyForProvisioning" のラベルを追加するように依頼してください。
1. アクセスをリクエストしているツールの正しいプロビジョナーに Issue をタグ付けして割り当てたことを確認してください。すべてのツールのプロビジョナーは [Tech Stack](https://gitlab.com/gitlab-com/www-gitlab-com/-/blob/master/data/tech_stack.yml) で確認できます。
1. プロビジョナーが IT チームの場合、AR に ~"IT::to do" ラベルを必ず追加してください。
1. 上記のすべての手順に従ってもアクセスリクエストが対応されない場合、ツールを所有するチームに Slack チャンネルで連絡してください。各チームの Slack チャンネルは [Tech Stack](https://gitlab.com/gitlab-com/www-gitlab-com/-/blob/master/data/tech_stack.yml) で確認できます。

### システムまたはグループ／ボルトへのアクセスが必要ですか？

1. ニーズに基づいてテンプレートを選択する：ほとんどの人は [Bulk](https://gitlab.com/gitlab-com/team-member-epics/access-requests/-/issues/new?issuable_template=Bulk_Access_Request) または [Single Person](https://gitlab.com/gitlab-com/team-member-epics/access-requests/-/issues/new?issuable_template=Individual_Bulk_Access_Request) テンプレートを使用します。
1. オンボーディング中に見落とされた場合を除き、Baseline Entitlement の一部であるものに対してアクセスリクエストを開かないでください。
    1. [全チームメンバーの baseline entitlements](https://internal.gitlab.com/handbook/security/corporate/end-user-services/access-request/baseline-entitlements/#baseline-entitlements-all-gitlab-team-members)
    1. [役割ベースの baseline entitlements](https://gitlab.com/gitlab-com/team-member-epics/access-requests/-/tree/master/.gitlab/issue_templates/role_baseline_access_request_tasks)
1. **以下に該当しない限り**、Issue にラベル `AR-Approval::Manager Approved` が必要です：
    1. Google Workspace のメールエイリアスまたはグループに追加される内部チームメンバー
    1. Slack グループに追加される内部チームメンバー
    1. 完全に変更されていない役割ベースの baseline entitlement
1. [システムへのアクセスをプロビジョニングする人](https://gitlab.com/gitlab-com/www-gitlab-com/-/blob/master/data/tech_stack.yml) に Issue を必ず割り当ててください。
1. ヘルプが必要な場合は、ヘルプが必要な Issue へのリンクとともに、Slack チャンネル #it-help で IT-Ops に質問してください。
1. 業務を行うために必要な最小限のアクセスのみをリクエストしてください。

### マネージャーの承認が必要ですか？場合によります

以下をリクエストしている場合、マネージャーの承認は不要です：

1. Google Workspace のメールエイリアスまたはグループに追加される内部チームメンバー（そのグループが Google Cloud Platform への権限を提供する場合を除く）
1. Slack グループに追加される内部チームメンバー
1. 役割ベースの entitlement に含まれているもの

### Rails またはデータベースの本番コンソール（grpd）へのアクセスが必要

Teleport を使用して、いずれかへの一時的なアクセスをリクエストしてください
[Rails コンソール](https://gitlab.com/gitlab-com/runbooks/-/blob/master/docs/teleport/Connect_to_Rails_Console_via_Teleport.md) または
[データベースコンソール](https://gitlab.com/gitlab-com/runbooks/-/blob/master/docs/teleport/Connect_to_Database_Console_via_Teleport.md)。

### version.gitlab.com へのアクセスが必要

すでにお持ちかもしれません：[dev アカウントを持っているかテストしてください。](https://dev.gitlab.org/)

- dev アカウントが必要な場合は、[Single Person Access Request](https://gitlab.com/gitlab-com/team-member-epics/access-requests/-/issues/new?issuable_template=Individual_Bulk_Access_Request) を作成してください。
- dev アカウントを持っている場合は、[version](https://version.gitlab.com/users/sign_in) にアクセスし、GitLab でログインして資格情報の使用を承認してください。

### Light Agent として Zendesk へのアクセスが必要

Zendesk Light アクセスのアクセスリクエストを作成する必要はありません。[メールでアクセスを取得するための手順に従ってください](/handbook/support/internal-support/)

### メールエイリアスを追加、または名前を変更する必要がある

メールエイリアスの追加や名前変更には、[`slack_googlegroup_1password` AR テンプレート](https://gitlab.com/gitlab-com/team-member-epics/access-requests/issues/new?issuable_template=slack_googlegroup_1Passwordgroupvault) を使用してください。
リクエストできる内容や数に制限はありませんが、追加または変更について短い説明を含めてください。一部のエイリアスリクエストは、不適切と判断された場合、または運用の判断で拒否される場合があります。

このアプリケーション自動化は Okta で行われますが、「真の」システムプロビジョニングおよびプロビジョニング解除は、影響を受けるシステム内でアクセス変更リクエストを介して手動で完了する必要があります。

### 古いアクセスリクエストを閉じる

アクセスリクエストはできるだけ早く完了されることが期待されます（30 日）。

作成から 30 日を超えるとアクセスリクエストを自動的に閉じるパイプラインが設定されています。
これは、古い AR を減らし、バックログをクリアするためです。例外として、AR に `AccessReview` ラベルがある場合、パイプラインはそのラベルがある場合は Issue を無視します。
このパイプラインは Issue にコメントを追加し、それが自動的に閉じられていることと、残りのタスクがある場合にチームメンバーが何をすべきかを記載します。

現在、パイプラインは毎週金曜日の午後 9 時 30 分に実行されるようスケジュールされています。30 日経過したすべてのアクセスリクエスト Issue を閉じます。

ご注意：これは AR 自動クローザーの最初のイテレーションです。私たちのチームはこれを洗練し改善するために取り組んでいきます。

### 既存のアクセスを削除する必要がある

どのアクセスと誰を削除する必要があるかを指定したアクセスリクエストを作成してください。
