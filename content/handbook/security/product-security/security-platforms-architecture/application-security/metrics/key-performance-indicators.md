---
title: "Application Security - 主要業績評価指標 (KPI)"
upstream_path: /handbook/security/product-security/security-platforms-architecture/application-security/metrics/key-performance-indicators/
upstream_sha: 1e195b58b9f249ff10bd0e705106c320fee86141
translated_at: "2026-05-10T00:00:00Z"
translator: claude
stale: false
---

## 主要業績評価指標 (KPI)

これらのメトリクスは、重大なセキュリティワークロードを処理するチームのキャパシティを追跡します。

### マージリクエストレビューカバレッジ率

この KPI は、事前のセキュリティレビューの有無にかかわらず、脆弱性を導入したセキュリティ関連マージリクエストをレビューする能力を追跡します。これは、セキュリティレビュー漏れ率を通じて追跡され、できるだけ 0% に近づけることを目指します。これは、Application Security チームによってレビューされたマージリクエストが脆弱性を導入することにつながらなかったことを意味します。

#### この KPI を計測してもらうには何をすればよいですか?

1. __マージリクエスト分類の要件__
   - `AppSecWorkType::VulnFixVerification` をセキュリティ修正検証マージリクエストに付与する必要があります
   - `AppSecWorkType::SecurityMRReview` を、トリアージローテーション中や Stable Counterpart MR レビューの一環として実施されたものを含む、それ以外のすべてのセキュリティコードレビューに付与する必要があります

これら 2 つのラベルは、私たちのキャパシティメトリクスと日常業務の一環として付与されます。詳細は[キャパシティメトリクス専用ページ](capacity.md)の[作業の種類による分類](capacity.md#type-of-work-classification)で確認できます。私たちがどのように働き、どのようにこれらのラベルを適用しているかを理解するには、[マイルストーン計画](../milestone-planning.md)に関する専用ページを参照してください。

1. __脆弱性ソースのトラッキング__
   - 脆弱性を導入していると識別されたマージリクエストに `appsec-kpi::vulnerability-introduced` ラベルを付与してください

1. __脆弱性防止のトラッキング__
   - セキュリティレビュー中に脆弱性が識別され防止されたマージリクエストに `appsec-kpi::vulnerability-prevented` ラベルを付与してください

#### 計算方法

```text
`Security Review Miss Rate` = (Merged Vulnerability-introducing Merge Requests with Application Security review / Total vulnerability-introducing Merge Requests) * 100
```

ここで:

- 脆弱性を導入したマージリクエストの総数 = `appsec-kpi::vulnerability-introduced` ラベルが付与されたマージリクエスト
- Application Security レビュー _なし_ で脆弱性を導入したマージリクエスト = `AppSecWorkType::SecurityMRReview` または `AppSecWorkType::VulnFixVerification` のいずれも欠如している `appsec-kpi::vulnerability-introduced` マージリクエスト
- Application Security レビュー付きでマージされ、脆弱性を導入したマージリクエスト = `AppSecWorkType::SecurityMRReview` または `AppSecWorkType::VulnFixVerification` のいずれかが付与されている `appsec-kpi::vulnerability-introduced` マージリクエスト
