---
title: "CI 外部シークレット向けの GCP Secrets Manager サポート"
status: proposed
creation-date: "2023-11-29"
authors: [ "@alberts-gitlab" ]
coach: "@grzesiek"
approvers: [ "@jocelynjane", "@shampton" ]
owning-stage: "~devops::verify"
participating-stages: []
toc_hide: true
upstream_path: /handbook/engineering/architecture/design-documents/ci_gcp_secrets_manager/
upstream_sha: 0ee1352c26e468fa8032143d735391a793de7086
translated_at: "2026-04-26T08:00:00Z"
translator: claude
stale: false
lastmod: "2025-04-28T10:53:04-07:00"
---


<div class="my-3 border-l-4 border-blue-500 bg-blue-50 px-4 py-3 rounded-r text-sm text-blue-800">
このページには今後予定されている製品・機能・機能性に関する情報が含まれています。ここに示す情報は参考目的のみです。購入・計画の決定にこの情報を使用しないでください。製品・機能・機能性の開発、リリース、タイミングは変更または延期される可能性があり、GitLab Inc. の独自の判断に委ねられています。
</div>

<div class="overflow-x-auto my-4">
<table class="w-full text-sm border-collapse">
<thead>
<tr class="bg-gray-100 text-left">
<th class="px-3 py-2 border border-gray-300">Status</th>
<th class="px-3 py-2 border border-gray-300">Authors</th>
<th class="px-3 py-2 border border-gray-300">Coach</th>
<th class="px-3 py-2 border border-gray-300">DRIs</th>
<th class="px-3 py-2 border border-gray-300">Owning Stage</th>
<th class="px-3 py-2 border border-gray-300">Created</th>
</tr>
</thead>
<tbody>
<tr>
<td class="px-3 py-2 border border-gray-300"><span class="inline-block rounded px-2 py-0.5 text-xs font-medium bg-gray-100 text-gray-700">proposed</span></td>
<td class="px-3 py-2 border border-gray-300"><a href="https://gitlab.com/alberts-gitlab" class="text-blue-600 hover:underline">@alberts-gitlab</a></td>
<td class="px-3 py-2 border border-gray-300"><a href="https://gitlab.com/grzesiek" class="text-blue-600 hover:underline">@grzesiek</a></td>
<td class="px-3 py-2 border border-gray-300"><a href="https://gitlab.com/jocelynjane" class="text-blue-600 hover:underline">@jocelynjane</a>, <a href="https://gitlab.com/shampton" class="text-blue-600 hover:underline">@shampton</a></td>
<td class="px-3 py-2 border border-gray-300"><span class="inline-block rounded px-2 py-0.5 text-xs font-medium bg-gray-100 text-gray-700">~devops::verify</span></td>
<td class="px-3 py-2 border border-gray-300">2023-11-29</td>
</tr>
</tbody>
</table>
</div>


## 概要

このブループリントは、CI 外部シークレットのソースの一つとして GCP Secrets Manager を追加するためのアーキテクチャを説明します。

## 動機

GitLab CI では、ユーザーが外部ソースから GitLab CI ジョブにシークレットをプルすることができます。これまでサポートされているシークレットマネージャーは HashiCorp Vault と Azure Key Vault です。GCP Secrets Manager はもう一つの主要なシークレットマネージャー製品であり、GCP Secrets Manager をサポートするシークレットマネージャーのリストに追加するための複数のリクエストとフィードバックが寄せられています。

### 目標

この機能の目標は、GitLab CI ユーザーが CI ジョブで GCP Secrets Manager に格納されたシークレットを使用できるようにすることです。

### 非目標

この機能は以下をカバーしません:

- 他の GitLab ワークロードで GCP Secrets Manager のシークレットを使用すること。
- GitLab を通じて GCP Secrets Manager や他のシークレットマネージャーのシークレットを管理すること。

## 提案

この機能には、GCP Secrets Manager・GitLab Rails・GitLab Runner 間の緊密な統合が必要です。

このソリューションには 3 つの主要な部分があります:

1. GCP Secrets Manager との認証
1. GitLab Rails における CI 設定
1. GitLab Runner によるシークレットアクセス

### GCP Secrets Manager との認証

GCP Secrets Manager は GitLab Runner からのシークレットアクセスリクエストを認証する必要があります。GitLab Runner はさまざまなモード（GitLab.com SaaS ランナー・セルフマネージドランナーを使用した SaaS・GitLab セルフマネージドなど）で動作できるため、ランナーインスタンスとシークレットへのアクセス権を持つ GCP アイデンティティ間に直接的な相関はありません。

これを解決するために、OIDC と GCP の Workload Identity Federation メカニズムを使用してリクエストを認可します。

CI ジョブはすでに、GitLab インスタンスが発行した ID トークンを含む CI 変数を通じて OIDC をサポートしています。これらの ID トークンには、CI ジョブのコンテキストを説明するクレーム（`group_id`・`group_path`・`project_id`・`project_path` などの詳細を含む）が既に含まれています。

GCP 側では、Workload Identity Federation によって OIDC を使用して外部アイデンティティ（ID トークンで表される）に GCP IAM ロールを付与することができます。Workload Identity Federation を通じて、GCP ユーザーは OIDC クレームで識別される特定のプリンシパルに特定の IAM ロールを付与できます。例えば、特定の `group_id` クレームに GCP Secrets Manager の特定のシークレットセットへのアクセス IAM ロールを付与できます。これにより、GCP ユーザーは GCP Secrets Manager のシークレットに対してきめ細かなアクセス権を付与できます。

### GitLab Rails における CI 設定

GitLab Rails は、ユーザーが CI ジョブを設定するインターフェースとなります。GCP Secrets Manager の統合には、GCP Secrets Manager を外部シークレットのソースとして指定するための追加設定と、GitLab Runner と GCP Secrets Manager 間の認証を有効にするための GCP 固有の情報が必要です。

提案する CI キーワードは以下のとおりです:

```yaml
job_name:
  id_tokens:
    GCP_SM_ID_TOKEN:
      aud: my-GCP-workload-identity-federation-audience
  secrets:
    DATABASE_PASSWORD:
      gcp_sm:
        name: my-project-secret  # GCP Secrets Manager で定義されたシークレットの名前
        version: 1               # オプション: デフォルトは `latest`
      token: GCP_SM_ID_TOKEN
```

さらに、GitLab Runner が認証を実行してシークレットにアクセスするために、以下の情報をジョブの CI 変数として含める必要があります。

- GCP プロジェクト番号 `GCP_PROJECT_NUMBER`
- GCP Workload Federation プール ID `GCP_WORKLOAD_FEDERATION_POOL_ID`
- GCP Workload Federation プロバイダー ID `GCP_WORKLOAD_FEDERATION_PROVIDER_ID`

### GitLab Runner によるシークレットアクセス

上記のジョブ仕様に基づき、GitLab Runner は以下を実装する必要があります:

1. GCP Secure Token Service との OIDC 認証によるアクセストークンの取得。
1. 目的のシークレットバージョンのペイロードを取得するための GCP Secrets Manager へのシークレットアクセスリクエスト。
1. ビルドへのシークレットの追加。

## 代替ソリューション

なし。
