---
title: 削除データ復元リクエスト
category: GitLab.com
subcategory:
description: "お客様から GitLab.com 上で削除されたデータの復元を依頼された場合のワークフロー"
last-reviewed: 2021-10-06
upstream_path: /handbook/support/workflows/restore_requests/
upstream_sha: c8fa138220d8c6d69f811b17242d6d2f08e4e409
translated_at: "2026-05-08T02:00:00Z"
translator: claude
stale: false
lastmod: "2026-02-05T23:38:57+11:00"
---

## 概要

このワークフローは、お客様から GitLab SaaS で削除されたデータを復元するよう依頼された場合に使用します。ユーザーアカウントとそのコントリビューションが削除された場合、それらは復元できません。このワークフローは、特にプロジェクトとグループの削除に関する取り扱いを対象としています。削除されたグループまたはプロジェクト内に保存されているコンテナイメージは復元できないことに注意してください。

## プロセス

1. お客様の契約に、このリクエストの処理に影響する可能性のある特別な規定がないか確認します。契約上のこれらの規定に関するメモは、Zendesk の組織のメモ欄に記載されています。組織情報、またはチケット冒頭の内部メモを確認してください。
   - >**注意:** この情報を維持するための最良の方法は[こちらの Issue](https://gitlab.com/gitlab-com/support/support-team-meta/-/issues/2944) で議論されています。
1. リクエストが必要な[復元基準](https://support.gitlab.com/hc/en-us/articles/11626493890844-GitLab-com-Specific-Support-Policies#restoration-of-deleted-data)を満たしていることを確認します。

**復元基準を満たしていない場合:**

1. [`Support::SaaS::Gitlab.com::Restore requests::Does not meet restore criteria`](https://gitlab.com/gitlab-com/support/zendesk-global/macros/-/blob/master/active/Support/SaaS/GitLab.com/Restore%20requests/Does%20not%20meet%20criteria.md?ref_type=heads) マクロでチケットに返信します。

これらのケースでさらにガイダンスが必要な場合は、[内部ハンドブック](https://internal.gitlab.com/handbook/support/workflows/data-restore-request-exemptions)を参照してください。

**復元基準を満たしている場合:**

1. [`Support::SaaS::Restore requests::Meets restore criteria`](https://gitlab.com/gitlab-com/support/zendesk-global/macros/-/blob/master/active/Support/SaaS/GitLab.com/Restore%20requests/Meets%20criteria.md?ref_type=heads) マクロでチケットに返信します。このマクロは、お客様に復元の制約を伝え、対応を進めてよいかの確認を求めます。
1. お客様からの返信と確認を待ちます。
1. 確認を受け取ったら、`request-gitlab-com` テンプレートを使用して [Infrastructure Issue](https://gitlab.com/gitlab-com/gl-infra/infrastructure/issues/new?issuable_template=request-gitlab-com) を作成します。テンプレートで求められている情報に加えて、以下を必ず含めてください:

   - 状況の概要。
   - グループまたはプロジェクトへのリンク。
   - チケットへのリンク。
   - バグへのリンク（該当する場合）。
1. お客様に、復元の依頼が登録され進行中であることを伝えます。
