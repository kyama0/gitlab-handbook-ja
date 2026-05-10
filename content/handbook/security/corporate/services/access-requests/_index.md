---
title: "アクセスリクエスト（AR）サービス"
upstream_path: /handbook/security/corporate/services/access-requests/
upstream_sha: 1e195b58b9f249ff10bd0e705106c320fee86141
translated_at: "2026-05-10T00:00:00Z"
translator: claude
stale: false
---

アクセスリクエストは、Corporate Security Helpdesk チームが所有しています。すべてのオンボーディング、オフボーディング、ロール変更（キャリアモビリティ）リクエストは、People Connect チームが所有しています。

アクセスリクエストに関する質問がある場合は、Slack の `#it_help` またはツールのプロビジョナーにご連絡ください。

- [FAQ](/handbook/security/corporate/services/ar/faq)
- [ベースラインエンタイトルメント](https://internal.gitlab.com/handbook/security/corporate/end-user-services/access-request/baseline-entitlements/)
- [一時的なサービスプロバイダーのアクセスリクエストとオンボーディング](https://internal.gitlab.com/handbook/security/corporate/end-user-services/access-request/temporary-service-providers/)

## Issue トラッカー

- **チームメンバー（デフォルトで使用）：** [アクセスリクエスト Issue トラッカー](https://gitlab.com/gitlab-com/team-member-epics/access-requests/-/issues)
- **一時的なサービスプロバイダー：** [ライフサイクル Issue トラッカー](https://gitlab.com/gitlab-com/temporary-service-providers/lifecycle/-/issues)
- **雇用オンボーディング：** [雇用 Issue トラッカー](https://gitlab.com/gitlab-com/team-member-epics/employment/-/issues/?sort=created_date&state=opened&label_name%5B%5D=onboarding&first_page_size=20)
- **雇用キャリアモビリティ：** [雇用 Issue トラッカー](https://gitlab.com/gitlab-com/team-member-epics/employment/-/issues/?sort=created_date&state=opened&label_name%5B%5D=career-mobility&first_page_size=20)
- **雇用オフボーディング：** [雇用 Issue トラッカー](https://gitlab.com/gitlab-com/team-member-epics/employment/-/issues/?sort=created_date&state=opened&label_name%5B%5D=offboarding&first_page_size=20)

## チームメンバー Issue テンプレート

チームメンバーのアクセスリクエストを送信するには、[こちら](https://gitlab.com/gitlab-com/team-member-epics/access-requests)から該当するアプリケーション固有のフォームを選択してください。ニーズに合った専用のアプリケーションリクエストフォームがない場合（Adobe、Slack、Zoom など）、Individual または Bulk Person Access のリクエストを使用できます。

## ロールベースのエンタイトルメント

- ロールベースのエンタイトルメントは、ロールに属するすべての人に付与される、事前承認済みの権限セットです。これらのテンプレートに追加する権限セットは、そのロールを持つすべての人に付与されるべきものであることを確認してください。

- ロールベースのエンタイトルメントは、テンプレート作成時に一度だけ承認が必要であり、ケースバイケースで再度承認される必要はありません。

- これらのテンプレートは作成後、追加権限の削除や追加のために編集することはできません。ただし、その変更がそのロールが属するチームのマネージャー（またはそれ以上）によって承認された場合を除きます。なお、変更がベースラインエンタイトルメントテンプレートのマネージャー以上から行われたものであっても、単一チームメンバーによる権限変更がプッシュされるリスクを軽減するために承認は必要です。

- 私たちは、ロールベースのエンタイトルメントテンプレートからすべての SOX アプリケーションを削除することにしました。したがって、SOX 対象システムに対して要求されるアクセスは、私たちの[ハンドブック](/handbook/security/corporate/end-user-services/access-requests/access-requests/#how-do-i-choose-which-template-to-use)で概説されている標準の A/R プロセスに従う必要があります。これによって、これまでロールベースのエンタイトルメントを通じて自動的に付与されていたアクセスは、今後は標準の A/R を通じてリクエストする必要があり、承認が適切に取得されることを確実にします。

- 既存のテンプレートを編集する場合や新しいテンプレートを作成する場合、ロールベースのアクセステンプレートにいかなる種類のアクセスも含めないでください。SOX アプリケーションの完全なリストは[こちら](https://gitlab.com/groups/gitlab-com/internal-audit/-/wikis/IT-General-Controls)で見つけることができます。

## ヘルプが必要ですか？

- 特に SLA はありませんが、Issue 内で `@gitlab-com/business-technology/end-user-services` をメンションしてください。
- リクエストが緊急の場合は、Slack の `#it_help` チャンネルにアクセスリクエストへのリンクを投稿し、緊急である理由をメモしてください。

## アクセスリクエストの作業

### 部門別アクセスリクエストボード

- 追加のラベルが必要な場合や、完全な自動化までのプロセス改善の提案がある場合は、[Issue を作成](https://gitlab.com/gitlab-com/it/end-user-services/issues/it-help-issue-tracker/-/issues/new)してください。
- 可能な場合、AR は部門ごとに自動割り当ておよび自動ラベル付けされます。場合によっては、ツールごとに複数のプロビジョナーが存在します。テンプレートを自動割り当てできない場合、Business Technology はプロビジョナーがラベル（例：`dept::to do`）で部門の Issue を確認できるボードを提供します。Issue を完了させる作業者を管理するワークフローは部門に委ねられています。
- **Issue を 1 つの列から別の列へ移動すると、最初のラベル（列ヘッダーごと）が削除され、2 つ目のラベルが追加されます。列の間で Issue を移動する際は注意してください。**
- 部門は以下のボードを表示することで、未完了のアクセスリクエスト Issue を確認できます。

{{% panel header="**AR ボード： to-do：**" header-bg="success" %}}

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

## 技術スタックの変更

技術スタックの新しい項目について、アクセスリクエストプロセスを開始する必要がある場合：

1. ツールが[技術スタック](https://gitlab.com/gitlab-com/www-gitlab-com/-/blob/master/data/tech_stack.yml)に追加されていることを確認します
1. チームメンバーが `provisioner` `deprovisioner` として含まれていることを確認します
1. 関連するハンドブックページにアクセスリクエストを送信する要件を文書化します
