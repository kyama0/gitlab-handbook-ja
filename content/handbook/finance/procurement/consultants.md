---
title: "外部コンサルタントのオリエンテーションとアクセス削除"
upstream_path: /handbook/finance/procurement/consultants/
upstream_sha: a1349675d55d5e861385a14a4b2d2b617d2381b1
translated_at: "2026-04-29T00:00:00Z"
translator: claude
stale: false
lastmod: "2025-11-25T13:09:27+00:00"
---

GitLab は、あらかじめ定められた期間、特定のタスクに取り組むために外部コンサルタントの専門知識を活用することがあります。業務の性質や担当するタスクによっては、上記の外部コンサルタントが Slack、顧客データ、および[インフラ環境](/handbook/engineering/infrastructure-platforms/environments/)などを含む GitLab の特定のシステムや情報へのアクセスを必要とする場合があります。

## コンサルタントオリエンテーション

- 外部コンサルタント向けのオリエンテーション Issue は、[Lifecycle Management Project](https://gitlab.com/gitlab-com/contingent-workers/lifecycle) にあります。この Issue は、[ベンダー契約リクエスト](https://gitlab.com/gitlab-com/Finance-Division/procurement-team/procurement/-/issues/new?issuable_template=general_vendor_contract_request)が作成され、承認プロセスを経た後にのみ、コンサルティング関係の開始を担当する個人である**ベンダーマネージャー**によって作成されるべきです。

このプロセスが完了すると、外部コンサルタントはチームメンバー専用の Workday ではなく、ContractWorks に追加されます。

## 重要なアクション

- 外部コンサルタントを利用する場合は、そのユーザーのために一時的に作成されたユーザー名やハンドル名にプレフィックス `-CTR` を追加してください。これにより、チームメンバーはその人が外部コンサルタントであることをすぐに判断でき、これらのアカウントの監査が可能になります。
- 外部コンサルタントが GitLab インスタンス上のリポジトリへのアクセス権を付与される場合は、そのアクセス権に有効期限を設定し、業務期間に合わせてください。

## アクセス削除

ベンダーマネージャーは、外部コンサルタントが GitLab との業務を終了した時点で、外部コンサルタントのオフボーディング処理を開始する責任があります。これは主に、オリエンテーション時に提供された GitLab のシステムや情報へのアクセスを、IT Ops およびテックスタックプロビジョナーのサポートのもとで削除することを中心に行われます。
