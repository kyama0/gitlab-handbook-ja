---
title: フラグ付きライセンスプロビジョニング失敗の処理
description: "フラグ付きライセンスプロビジョニング失敗の処理方法"
category: GitLab Self-Managed licenses
upstream_path: /handbook/support/license-and-renewals/workflows/self-managed/handling_flagged_provisioning_failures/
upstream_sha: 460f0fe6722bfe52b151b6a8641368ea38885df5
translated_at: "2026-05-08T12:00:00Z"
translator: claude
stale: false
---

[Provision tracking system](https://gitlab.com/groups/gitlab-org/-/epics/8300) は、Slack チャンネル `#provision_failures` の障害アラートシステムを通じてプロビジョニング失敗を監視する手段を提供します。これにより、障害が発生した際に Fulfillment Product チームと L&R Support チームが迅速に把握し、対応できるようになります。

## プロビジョニング失敗を処理するワークフロー

1. Fulfillment チームは Slack チャンネルでプロビジョニング失敗を監視します。プロビジョニングチーム視点での [Provision Failure Monitoring プロセス](https://gitlab.com/gitlab-org/customers-gitlab-com/-/blob/123966423b08392b13675cec9249484dd2faf377/doc/provision_tracking_system/failure_monitoring.md#provision-failures-monitoring)については、このリンクから情報を確認できます。
1. Fulfillment チームが失敗したプロビジョニングを解決できない場合、[社内リクエストフォーム](https://support-super-form-gitlab-com-support-support-op-651f22e90ce6d7.gitlab.io/)経由で L&R Support の支援を要請します。リクエストオプションとして **GitLab Support Internal Requests for Global customers** を、社内リクエストタイプとして **Report a provision failure** を使用してください。提出基準は次のとおりです。
   - Fulfillment が顧客向けに何かを修正するために L&R Support の介入を必要とする場合、または
   - 問題の根本原因がすでに修正されているか修正中で、継続的な失敗ケースにならない場合
1. このような状況では、Support Engineer は[顧客に代わってチケットをオープン](/handbook/support/workflows/working-on-tickets#8-how-can-i-open-a-new-ticket-on-behalf-of-a-customer)して問題を顧客に伝え、利用可能であれば解決策または回避策を提供する必要があります。Support Engineer は必要に応じて、起票された Zendesk チケット経由でプロビジョニング提出者と連絡を取れます。
1. 必要に応じて、Support Engineer は新しいバグ Issue を作成したり、既存の Issue を更新（優先度引き上げやフィードバックを要請）したり、新しい機能リクエストを作成したりできます。詳細は GitLab ハンドブックの [Managing Product Issues](/handbook/support/license-and-renewals/workflows/managing_product_issues/) セクションを参照してください。
