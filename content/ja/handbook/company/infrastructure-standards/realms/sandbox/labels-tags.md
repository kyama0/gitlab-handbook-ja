---
title: "Sandbox レルムのラベルとタグ"
description: "このハンドブックセクションでは、GitLab の全部門・グループにわたる AWS および GCP のインフラ標準の最新イテレーションを定義します。"
upstream_path: "/handbook/company/infrastructure-standards/realms/sandbox/labels-tags/"
upstream_sha: "b4eeb07f0d5f46e2fc5f8572be1a2547261aed89"
translated_at: "2026-04-25T15:43:48Z"
translator: "claude"
stale: false
---

## クイックリンク

- [インフラ標準 - Sandbox レルムドキュメント](/handbook/company/infrastructure-standards/realms/sandbox/)
- [インフラ標準 - グローバルラベルとタグ標準](/handbook/company/infrastructure-standards/labels-tags/)
- [インフラ標準 - ポリシー](/handbook/company/infrastructure-standards/policies/)
- [インフラ標準 - チュートリアル](/handbook/company/infrastructure-standards/tutorials/)
- [インフラ標準 - ヘルプデスク](/handbook/company/infrastructure-standards/helpdesk/)

## クイックリファレンス

すべてのラベルとタグには `gl_` プレフィックスを使用します。すべてのキーはアンダースコアを使用します（`snake_case`）。値はハイフンを使用する必要があります（スラグ化された値には `alpha-dash`）が、アンダースコアも許可されます。

### グローバルラベル/タグ

各リソースに適用すべき[グローバルラベルとタグの一覧](/handbook/company/infrastructure-standards/labels-tags/)をご参照ください。

### Sandbox レルムラベル/タグ

| スラグ/ラベル/タグ/キー                      | 使用方法         | 人間が読める名前               | ドキュメント |
|-------------------------------------------|--------------------|--------------------------------|-----------------------------------------------------------------|
| `gl_sandbox_shutdown_after_days`          | 必須           | シャットダウンまでの日数        | [使用ドキュメント](#shutdown-after-days-gl_sandbox_shutdown_after_days)              |
| `gl_sandbox_shutdown_working_hours`       | 任意           | 営業時間外のシャットダウン      | [使用ドキュメント](#shutdown-resources-outside-of-working-hours-gl_sandbox_shutdown_working_hours)              |
| `gl_sandbox_shutdown_date`                | 自動計算        | シャットダウン日               | [使用ドキュメント](#expiration-date-for-resources-to-shutdown-gl_sandbox_shutdown_date)              |

## シャットダウンまでの日数 (`gl_sandbox_shutdown_after_days`) {#shutdown-after-days-gl_sandbox_shutdown_after_days}


<div class="my-4 border-l-4 border-amber-500 bg-amber-50 px-4 py-3 rounded-r">

このラベル/タグは必須です。一部の Terraform モジュールはこれを自動的に計算します。

</div>


```terraform
gl_sandbox_shutdown_after_days: '14'
```

設定した値は `gl_sandbox_shutdown_date` の計算に使用されます。私たちのサンドボックス自動化スクリプトがコンピューティングやその他のリソースのシャットダウンを処理します。

スクリプトはシャットダウンされたリソースを再スキャンし、スクリプトによってシャットダウンされた後に起動されていない場合は**90日後に完全に削除します**。

### 期待される値

| 値             | 推奨される用途                                                                |
|---------------|-------------------------------------------------------------------------------|
| `14`          | （デフォルト）オーバーライドされない限り、すべての環境のデフォルト値。           |
| `30` 〜 `45`  | 長期的なテスト環境に推奨される範囲。                                           |
| `2` 〜 `90`   | 脆弱性が検出されない限り、インフラ/セキュリティレビューを必要としない整数値の範囲。 |
| `91` 〜 `365` | これらの値は使用できますが、インフラ/セキュリティレビューが実施されます。        |
| `null`        | 電源をオフにしない常時稼働環境に推奨される値。`null` 値のすべての環境はインフラ/セキュリティレビューの対象となります。 |

## 営業時間外のリソースのシャットダウン (`gl_sandbox_shutdown_working_hours`) {#shutdown-resources-outside-of-working-hours-gl_sandbox_shutdown_working_hours}


<div class="my-4 border-l-4 border-amber-500 bg-amber-50 px-4 py-3 rounded-r">

このラベル/タグは推奨されます。一部の Terraform モジュールはこれを自動的に計算します。これは将来的な対応のためのものであり、このイテレーションでは完全には実装されていない場合があります。

</div>


```terraform
gl_sandbox_shutdown_working_hours: 'true'
```

### 期待される値

| 値            | 説明                                                                     |
|---------------|-------------------------------------------------------------------------|
| `true`        | （デフォルト）`env_timezone` に設定された環境オーナーのタイムゾーンに基づき、夜間（18:00〜06:00）および週末にリソースを体系的にシャットダウンできます。これにより、週あたりのコンピューティング時間が168時間から60時間に削減され、65% の節約になります。 |
| `false`       | すべてのリソースが中断なく24時間365日稼働します。月あたり720コンピューティング時間を消費します。 |

## リソースのシャットダウン期限日 (`gl_sandbox_shutdown_date`) {#expiration-date-for-resources-to-shutdown-gl_sandbox_shutdown_date}


<div class="my-4 border-l-4 border-amber-500 bg-amber-50 px-4 py-3 rounded-r">

このラベル/タグは任意です。一部の Terraform モジュールはこれを自動的に計算します。

</div>


```terraform
gl_sandbox_shutdown_date: '2020-06-30'
```

有効期限は、`gl_sandbox_shutdown_after_days` の値とクラウドプロバイダーでリソースが最初にプロビジョニングされたタイムスタンプから計算された日付の 23:59:59 UTC として計算されます。ラベルで許可される文字の制限により、タイムゾーンにコロンとプラス記号が必要なため、時刻は含みません。

この値は、ユーザーがより多くの時間を必要とする場合、有効期限スクリプト（および将来の Slack 通知）の一部として体系的に更新/延長することができます。有効期限が過ぎると、自動化された `terraform destroy` CI パイプラインが実行され、環境内のすべてのリソースが削除されます。
