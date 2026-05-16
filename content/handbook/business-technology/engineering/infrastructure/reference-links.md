---
title: "インフラ参照リンク"
description: "このページはインフラチームに役立つリンクと参考資料を提供します。"
upstream_path: /handbook/business-technology/engineering/infrastructure/reference-links/
upstream_sha: b4eeb07f0d5f46e2fc5f8572be1a2547261aed89
translated_at: "2026-04-25T08:00:00Z"
translator: claude
stale: false
lastmod: "2024-06-27T22:14:31+00:00"
---

<link rel="stylesheet" type="text/css" href="/stylesheets/biztech.css" />

## マイルストーン

各 Issue とエピックは、作業の大部分が行われる期間のマイルストーンにマッピングされます。これは軽量版の工数追跡と容量計画として使用され、ロードマップ計画に役立ちます。

- 月次マイルストーン
  - [BT Infra 2021-07](https://gitlab.com/groups/gitlab-com/business-technology/engineering/infrastructure/-/milestones/2)
  - [BT Infra 2021-08](https://gitlab.com/groups/gitlab-com/business-technology/engineering/infrastructure/-/milestones/3)
  - [BT Infra 2021-09](https://gitlab.com/groups/gitlab-com/business-technology/engineering/infrastructure/-/milestones/4)
  - [BT Infra 2021-10](https://gitlab.com/groups/gitlab-com/business-technology/engineering/infrastructure/-/milestones/5)
  - [BT Infra 2021-11](https://gitlab.com/groups/gitlab-com/business-technology/engineering/infrastructure/-/milestones/6)
  - [BT Infra 2021-12](https://gitlab.com/groups/gitlab-com/business-technology/engineering/infrastructure/-/milestones/7)
  - [BT Infra 2022-01](https://gitlab.com/groups/gitlab-com/business-technology/engineering/infrastructure/-/milestones/8)
- 四半期マイルストーン
  - [BT Infra FY22-Q3](https://gitlab.com/groups/gitlab-com/business-technology/engineering/infrastructure/-/milestones/9)
  - [BT Infra FY22-Q4](https://gitlab.com/groups/gitlab-com/business-technology/engineering/infrastructure/-/milestones/10)
- 会計年度マイルストーン
  - BT Infra FY22-2H
  - [BT Infra FY23-1H](https://gitlab.com/groups/gitlab-com/business-technology/engineering/infrastructure/-/milestones/11)
  - [BT Infra FY23-2H](https://gitlab.com/groups/gitlab-com/business-technology/engineering/infrastructure/-/milestones/12)

## リポジトリ

- [gitlab.com/gitlab-com/business-technology/engineering/infrastructure](https://gitlab.com/gitlab-com/business-technology/engineering/infrastructure) - 機密情報を含まない Business Technology Engineering Infrastructure のすべてのリポジトリを含むグループ（機密情報は [ops.gitlab.net](https://ops.gitlab.net) にホストされる必要があります）。

## ラベルとタグ

### Issue タイプ

これらのラベルの Issue は [BT Eng Infra - Issue Types](https://gitlab.com/groups/gitlab-com/-/boards/2870859) Issue ボードで確認できます。

これらのラベルは [gitlab.com/gitlab-com](https://gitlab.com/gitlab-com) ネームスペースの任意の Issue、MR、またはエピックに適用できます。これには、子グループとプロジェクト内の GitLab チームメンバーが使用する Issue トラッカーの大部分が含まれます。

> <small>**注意：** これらのラベルは、私たちのチームがそのネームスペース内のプロジェクトで作業していないため、`gitlab-org` ネームスペースには作成されていません。また、別のトップレベルグループのための追加の Issue ボードと自動化の作成が必要になります。</small>

<!-- This is an HTML table since multi-link links do not format well with Markdown tables. It cannot be indented due to Markdown indent formatting problems. -->
<table>
<thead>
<tr>
<th style="width: 35%;">ラベル</th>
<th style="width: 40%;">使用する状況</th>
<th style="width: 25%;">リンク</th>
</tr>
</thead>
<tbody>
<!-- bt-infra::access-request -->
<tr>
<td><code>bt-infra::access-request</code></td>
<td><small>私たちがプロビジョニングに責任を持つすべてのアクセスリクエストに適用します。</small></td>
<td>
<a href="https://gitlab.com/groups/gitlab-com/-/issues?label_name%5B%5D=bt-infra%3A%3Aaccess-request">Issues</a><br />
<a href="https://gitlab.com/groups/gitlab-com/-/merge_requests?label_name%5B%5D=bt-infra%3A%3Aaccess-request">Merge Requests</a><br />
<a href="https://gitlab.com/groups/gitlab-com/-/epics?label_name%5B%5D=bt-infra%3A%3Aaccess-request">Epics</a>
</td>
</tr>
<!-- bt-infra::bug -->
<tr>
<td><code>bt-infra::bug</code></td>
<td><small>できるだけ早急に修正すべき、コードリポジトリに直接関連しないバグレポートと迅速な修正に適用します。これがより広範または長期的な問題の場合は、別のカテゴリやコードリポジトリの Issue トラッカー内の Issue にリファクタリングすることが望ましいでしょう。</small></td>
<td>
<a href="https://gitlab.com/groups/gitlab-com/-/issues?label_name%5B%5D=bt-infra%3A%3Abug">Issues</a><br />
<a href="https://gitlab.com/groups/gitlab-com/-/merge_requests?label_name%5B%5D=bt-infra%3A%3Abug">Merge Requests</a><br />
<a href="https://gitlab.com/groups/gitlab-com/-/epics?label_name%5B%5D=bt-infra%3A%3Abug">Epics</a>
</td>
</tr>
<!-- bt-infra::epic-project -->
<tr>
<td><code>bt-infra::epic-project</code></td>
<td><small>より大きなスコープまたは長い期間の Issue に適用します。</small></td>
<td>
<a href="https://gitlab.com/groups/gitlab-com/-/issues?label_name%5B%5D=bt-infra%3A%3Aepic-project">Issues</a><br />
<a href="https://gitlab.com/groups/gitlab-com/-/merge_requests?label_name%5B%5D=bt-infra%3A%3Aepic-project">Merge Requests</a><br />
<a href="https://gitlab.com/groups/gitlab-com/-/epics?label_name%5B%5D=bt-infra%3A%3Aepic-project">Epics</a>
</td>
</tr>
<!-- bt-infra::iac -->
<tr>
<td><code>bt-infra::iac</code></td>
<td><small>完了するために特定の集中力を必要とする Terraform、Ansible、K8s の変更に適用します。これにより複数の Issue を同時に解決できます。</small></td>
<td>
<a href="https://gitlab.com/groups/gitlab-com/-/issues?label_name%5B%5D=bt-infra%3A%3Aiac">Issues</a><br />
<a href="https://gitlab.com/groups/gitlab-com/-/merge_requests?label_name%5B%5D=bt-infra%3A%3Aiac">Merge Requests</a><br />
<a href="https://gitlab.com/groups/gitlab-com/-/epics?label_name%5B%5D=bt-infra%3A%3Aiac">Epics</a>
</td>
</tr>
<!-- bt-infra::interest -->
<tr>
<td><code>bt-infra::interest</code></td>
<td><small>FYI として私たちが注目しているまたは興味のある Issue に適用します。</small></td>
<td>
<a href="https://gitlab.com/groups/gitlab-com/-/issues?label_name%5B%5D=bt-infra%3A%3Ainterest">Issues</a><br />
<a href="https://gitlab.com/groups/gitlab-com/-/merge_requests?label_name%5B%5D=bt-infra%3A%3Ainterest">Merge Requests</a><br />
<a href="https://gitlab.com/groups/gitlab-com/-/epics?label_name%5B%5D=bt-infra%3A%3Ainterest">Epics</a>
</td>
</tr>
<!-- bt-infra::service -->
<tr>
<td><code>bt-infra::service</code></td>
<td><small>（内部）カスタマーサービスの提供に関連する Issue や、私たちが提供するマネージドサービスに関連する Issue に適用します。人々を支援していてバグでない場合は、通常このラベルが適用されます。</small></td>
<td>
<a href="https://gitlab.com/groups/gitlab-com/-/issues?label_name%5B%5D=bt-infra%3A%3Aservice">Issues</a><br />
<a href="https://gitlab.com/groups/gitlab-com/-/merge_requests?label_name%5B%5D=bt-infra%3A%3Aservice">Merge Requests</a><br />
<a href="https://gitlab.com/groups/gitlab-com/-/epics?label_name%5B%5D=bt-infra%3A%3Aservice">Epics</a>
</td>
</tr>
<!-- bt-infra::unplanned -->
<tr>
<td><code>bt-infra::unplanned</code></td>
<td><small>日常業務やマネージドサービスの一部ではないチームメンバーや他の部門からのリクエストに適用します。</small></td>
<td>
<a href="https://gitlab.com/groups/gitlab-com/-/issues?label_name%5B%5D=bt-infra%3A%3Aunplanned">Issues</a><br />
<a href="https://gitlab.com/groups/gitlab-com/-/merge_requests?label_name%5B%5D=bt-infra%3A%3Aunplanned">Merge Requests</a><br />
<a href="https://gitlab.com/groups/gitlab-com/-/epics?label_name%5B%5D=bt-infra%3A%3Aunplanned">Epics</a>
</td>
</tr>
<!-- bt-infra::wishlist -->
<tr>
<td><code>bt-infra::wishlist</code></td>
<td><small>関連性があり却下すべきでないが、現時点では優先度が高くない長期的なバックログに適用します。</small></td>
<td>
<a href="https://gitlab.com/groups/gitlab-com/-/issues?label_name%5B%5D=bt-infra%3A%3Awishlist">Issues</a><br />
<a href="https://gitlab.com/groups/gitlab-com/-/merge_requests?label_name%5B%5D=bt-infra%3A%3Awishlist">Merge Requests</a><br />
<a href="https://gitlab.com/groups/gitlab-com/-/epics?label_name%5B%5D=bt-infra%3A%3Awishlist">Epics</a>
</td>
</tr>
</table>

### マネージドサービス

これらのラベルの Issue は [BT Eng Infra - Managed Services](https://gitlab.com/groups/gitlab-com/-/boards/2871346) Issue ボードで確認できます。

<!-- This is an HTML table since multi-link links do not format well with Markdown tables. It cannot be indented due to Markdown indent formatting problems. -->
<table>
<thead>
<tr>
<th style="width: 35%;">ラベル</th>
<th style="width: 40%;">使用する状況</th>
<th style="width: 25%;">リンク</th>
</tr>
</thead>
<tbody>
<!-- bt-infra-service::aws -->
<tr>
<td><code>bt-infra-service::aws</code></td>
<td><small>GitLab Sandbox Cloud 固有でないすべての AWS インフラ関連 Issue に適用します。</small></td>
<td>
<a href="https://gitlab.com/groups/gitlab-com/-/issues?label_name%5B%5D=bt-infra-service%3A%3Aaws">Issues</a><br />
<a href="https://gitlab.com/groups/gitlab-com/-/merge_requests?label_name%5B%5D=bt-infra-service%3A%3Aaws">Merge Requests</a><br />
<a href="https://gitlab.com/groups/gitlab-com/-/merge_requests?label_name%5B%5D=bt-infra-service%3A%3Aaws">Epics</a>
</td>
</tr>
<!-- bt-infra-service::demo-systems -->
<tr>
<td><code>bt-infra-service::demo-systems</code></td>
<td><small>すべての Customer Success デモシステム関連 Issue に適用します。</small></td>
<td>
<a href="https://gitlab.com/groups/gitlab-com/-/issues?label_name%5B%5D=bt-infra-service%3A%3Ademo-systems">Issues</a><br />
<a href="https://gitlab.com/groups/gitlab-com/-/merge_requests?label_name%5B%5D=bt-infra-service%3A%3Ademo-systems">Merge Requests</a><br />
<a href="https://gitlab.com/groups/gitlab-com/-/merge_requests?label_name%5B%5D=bt-infra-service%3A%3Ademo-systems">Epics</a>
</td>
</tr>
<!-- bt-infra-service::dns -->
<tr>
<td><code>bt-infra-service::dns</code></td>
<td><small>すべての DNS ドメイン、ゾーン、レコード関連 Issue に適用します。</small></td>
<td>
<a href="https://gitlab.com/groups/gitlab-com/-/issues?label_name%5B%5D=bt-infra-service%3A%3Adns-zones">Issues</a><br />
<a href="https://gitlab.com/groups/gitlab-com/-/merge_requests?label_name%5B%5D=bt-infra-service%3A%3Adns-zones">Merge Requests</a><br />
<a href="https://gitlab.com/groups/gitlab-com/-/merge_requests?label_name%5B%5D=bt-infra-service%3A%3Adns-zones">Epics</a>
</td>
</tr>
<!-- bt-infra-service::gcp -->
<tr>
<td><code>bt-infra-service::gcp</code></td>
<td><small>GitLab Sandbox Cloud 固有でないすべての Google Cloud Platform（GCP）Issue に適用します。</small></td>
<td>
<a href="https://gitlab.com/groups/gitlab-com/-/issues?label_name%5B%5D=bt-infra-service%3A%3Agcp">Issues</a><br />
<a href="https://gitlab.com/groups/gitlab-com/-/merge_requests?label_name%5B%5D=bt-infra-service%3A%3Agcp">Merge Requests</a><br />
<a href="https://gitlab.com/groups/gitlab-com/-/merge_requests?label_name%5B%5D=bt-infra-service%3A%3Agcp">Epics</a>
</td>
</tr>
<!-- bt-infra-service::infra-standards -->
<tr>
<td><code>bt-infra-service::infra-standards</code></td>
<td><small>すべてのインフラ標準とインフラ共有サービス Issue に適用します。</small></td>
<td>
<a href="https://gitlab.com/groups/gitlab-com/-/issues?label_name%5B%5D=bt-infra-service%3A%3Ainfra-standards">Issues</a><br />
<a href="https://gitlab.com/groups/gitlab-com/-/merge_requests?label_name%5B%5D=bt-infra-service%3A%3Ainfra-standards">Merge Requests</a><br />
<a href="https://gitlab.com/groups/gitlab-com/-/merge_requests?label_name%5B%5D=bt-infra-service%3A%3Ainfra-standards">Epics</a>
</td>
</tr>
<!-- bt-infra-service::platypus -->
<tr>
<td><code>bt-infra-service::platypus</code></td>
<td><small>すべての BT Enterprise Apps Integrations Project Platypus インフラ関連 Issue に適用します。</small></td>
<td>
<a href="https://gitlab.com/groups/gitlab-com/-/issues?label_name%5B%5D=bt-infra-service%3A%3Aplatypus">Issues</a><br />
<a href="https://gitlab.com/groups/gitlab-com/-/merge_requests?label_name%5B%5D=bt-infra-service%3A%3Aplatypus">Merge Requests</a><br />
<a href="https://gitlab.com/groups/gitlab-com/-/merge_requests?label_name%5B%5D=bt-infra-service%3A%3Aplatypus">Epics</a>
</td>
</tr>
<!-- bt-infra-service::sandbox-cloud -->
<tr>
<td><code>bt-infra-service::sandbox-cloud</code></td>
<td><small>すべての GitLab Sandbox Cloud と HackyStack Issue に適用します。</small></td>
<td>
<a href="https://gitlab.com/groups/gitlab-com/-/issues?label_name%5B%5D=bt-infra-service%3A%3Asandbox-cloud">Issues</a><br />
<a href="https://gitlab.com/groups/gitlab-com/-/merge_requests?label_name%5B%5D=bt-infra-service%3A%3Asandbox-cloud">Merge Requests</a><br />
<a href="https://gitlab.com/groups/gitlab-com/-/merge_requests?label_name%5B%5D=bt-infra-service%3A%3Asandbox-cloud">Epics</a>
</td>
</tr>
</table>
