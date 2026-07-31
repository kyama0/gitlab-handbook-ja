---
title: "アクセスリクエスト（AR）サービス"
upstream_path: /handbook/eta/corporate-it/end-user-services/access-requests/ar-services/
upstream_sha: c75ccd81af7d76262c8cb188bf7e7e2a7f838894
lastmod: "2026-07-28T15:04:15+01:00"
translated_at: "2026-07-31T07:54:55+09:00"
translator: codex
stale: false
---

アクセスリクエストは Corporate Security Helpdesk チームが担当します。すべてのオンボーディング、オフボーディング、ロール変更（キャリアモビリティ）のリクエストは People Connect Team が担当します。

アクセスリクエストに関する質問がある場合は、Slack の Compass アプリ（上部の検索バーに「Compass」と入力して見つけます）または it-help@gitlab.com を通じて IT に連絡してください。

- [よくある質問](/handbook/eta/corporate-it/end-user-services/access-requests/frequently-asked-questions/)
- [Baseline Entitlements](https://internal.gitlab.com/handbook/eta/corporate-it/end-user-services/access-request/baseline-entitlements/)
- [一時的なサービスプロバイダーのアクセスリクエストとオンボーディング](https://internal.gitlab.com/handbook/eta/corporate-it/end-user-services/access-request/temporary-service-providers/)

## Issue トラッカー

- **チームメンバー（デフォルトでこれを使用します）：** [アクセスリクエスト Issue Tracker](https://gitlab.com/gitlab-com/team-member-epics/access-requests/-/issues)
- **一時的なサービスプロバイダー：** [Lifecycle Issue Tracker](https://gitlab.com/gitlab-com/temporary-service-providers/lifecycle/-/issues)
- **雇用のオンボーディング：** [Employment Issue Tracker](https://gitlab.com/gitlab-com/team-member-epics/employment/-/issues/?sort=created_date&state=opened&label_name%5B%5D=onboarding&first_page_size=20)
- **雇用のキャリアモビリティ：** [Employment Issue Tracker](https://gitlab.com/gitlab-com/team-member-epics/employment/-/issues/?sort=created_date&state=opened&label_name%5B%5D=career-mobility&first_page_size=20)
- **雇用のオフボーディング：** [Employment Issue Tracker](https://gitlab.com/gitlab-com/team-member-epics/employment/-/issues/?sort=created_date&state=opened&label_name%5B%5D=offboarding&first_page_size=20)

## チームメンバー用 Issue テンプレート

適切なアプリケーション固有のフォームを[こちら](https://gitlab.com/gitlab-com/team-member-epics/access-requests)から選択して、チームメンバーのアクセスリクエストを送信してください。ニーズに合う特定のアプリケーションのリクエストフォーム（Adobe、Slack、Zoom など）がない場合は、Individual or Bulk Person Access request を使用できます。

## ロールベースの entitlement

- ロールベースの entitlement は、ロールに属するすべての人に付与される、事前承認済みの一連の権限です。これらのテンプレートに追加する権限セットが、そのロールを持つすべての人に付与されるべきものであることを確認してください。

- ロールベースの entitlement はテンプレート作成時に一度だけ承認する必要があり、ケースごとに再度承認する必要はありません。

- これらのテンプレートは、作成後に追加の権限を削除または追加するよう編集できません。ただし、その変更がロールの所属チームの Manager（またはそれ以上）に承認された場合を除きます。1 人のチームメンバーが権限変更を通すリスクを軽減するため、baseline entitlement テンプレートに対する変更が Manager 以上からのものであっても、承認が必要である点に注意してください。

- 私たちは、Role-Based Entitlements テンプレートからすべての SOX アプリケーションを削除することに決めました。したがって、SOX の対象システムに対してリクエストされるアクセスは、[ハンドブック](/handbook/eta/corporate-it/end-user-services/access-requests/access-requests/#how-do-i-choose-which-template-to-use)に記載された標準の A/R プロセスに従う必要があります。これにより、これまでロールベースの entitlement を通じて自動付与されていた今後のアクセスは、承認が適切に記録されるよう標準の A/R でリクエストする必要があります。

- 既存のテンプレートを編集する場合または新しいテンプレートを作成する場合、rolebased access template にいかなる種類のアクセスも含めないでください。SOX アプリケーションの完全な一覧は[こちら](https://gitlab.com/groups/gitlab-com/internal-audit/-/wikis/IT-General-Controls)で確認できます。

## サポートが必要ですか？

- 特定の SLA はありませんが、Issue で `@gitlab-com/business-technology/end-user-services` にメンションしてください。
- リクエストが緊急の場合は、アクセスリクエストへのリンクを Slack の Compass アプリ（上部の検索バーに「Compass」と入力して見つけます）または it-help@gitlab.com を通じて投稿してください。

## アクセスリクエストへの取り組み

### 部門のアクセスリクエストボード

- 完全に自動化できるまでの間に追加のラベルが必要な場合や、プロセス改善の提案がある場合は、[Issue を作成してください](https://gitlab.com/gitlab-com/it/end-user-services/issues/it-help-issue-tracker/-/issues/new)。
- AR は可能な場合に部門別に自動割り当ておよび自動ラベル付けされます。場合によっては、ツールごとに複数の provisioner がいます。テンプレートを自動割り当てできない場合、Business Technology は provisioner がラベルごとに部門の Issue を確認できるボードを提供します（例: `dept::to do`）。Issue を完了まで担当する人のワークフロー管理は部門の責任です。
- **Issue をある列から別の列へ移動すると、最初のラベル（列ヘッダーごと）が削除され、2 番目のラベルが追加されます。列間で Issue を移動する際は注意してください。**
- 部門は以下のボードを表示して、未解決のアクセスリクエスト Issue を確認できます。

{{% panel header="**AR ボード: 対応待ち:**" header-bg="success" %}}

1. [Data](https://gitlab.com/gitlab-com/team-member-epics/access-requests/-/boards/1319045)
1. [Finance](https://gitlab.com/gitlab-com/team-member-epics/access-requests/-/boards/1319048)
1. [Infra](https://gitlab.com/gitlab-com/team-member-epics/access-requests/-/boards/1262513)
1. [IT](https://gitlab.com/gitlab-com/team-member-epics/access-requests/-/boards/1262521)
1. [Legal](https://gitlab.com/gitlab-com/team-member-epics/access-requests/-/boards/1319051)
1. [PeopleOPs](https://gitlab.com/gitlab-com/team-member-epics/access-requests/-/boards/1318841)
1. [Prod+Eng](https://gitlab.com/gitlab-com/team-member-epics/access-requests/-/boards/1319057)
1. [Marketing](https://gitlab.com/gitlab-com/team-member-epics/access-requests/-/boards/1284066)
1. [Sales](https://gitlab.com/gitlab-com/team-member-epics/access-requests/-/boards/1262518)
1. [Security](https://gitlab.com/gitlab-com/team-member-epics/access-requests/-/boards/1319052)
1. [Support](https://gitlab.com/gitlab-com/team-member-epics/access-requests/-/boards/1319053)
{{% /panel %}}

## Tech Stack の変更

Tech Stack の新しい項目に対するアクセスリクエストプロセスを開始する必要がある場合：

1. ツールが [Tech Stack](https://gitlab.com/gitlab-com/www-gitlab-com/-/blob/master/data/tech_stack.yml)に追加されていることを確認してください。
1. チームメンバーが `provisioner` `deprovisioner` として含まれていることを確認してください。
1. 関連するハンドブックページにアクセスリクエストを送信する要件を文書化してください。
