---
title: "健全スコアリング — 計算と手法"
description: "一般的な GitLab および異なるユースケースにおける顧客の健全スコアの測定方法。"
upstream_path: /handbook/customer-success/product-usage-data/use-case-adoption/
upstream_sha: b4eeb07f0d5f46e2fc5f8572be1a2547261aed89
translated_at: "2026-04-26T00:00:00Z"
translator: claude
stale: false
---

---

顧客とのユースケースのイネーブルメントと拡大を推進するために、GitLab でのユースケース採用が何を意味するかを正確に定義する必要があります。これらの健全指標は Gainsight の**製品利用**スコアカードセクションに表示されます。詳細については、[Gainsight スコアカードの属性と計算](/handbook/customer-success/customer-health-scoring/#gainsight-scorecard-attributes-and-calculations)を参照してください。

## ライセンス利用率

### 健全テーブル

|        | 2〜6 ヶ月 | 6〜9 ヶ月 | 9 ヶ月以上 |
|--------|------------------------------------------|------------------------------------------|----------------------------------------|
| < 10%  | 赤 | 赤 | 赤 |
| 10-50% | 黄 | 赤 | 赤 |
| 51-75% | 緑 | 黄 | 赤 |
| > 75%  | 緑 | 緑 | 緑 |

## ユーザーエンゲージメント

ユーザーエンゲージメントは、毎月ログインするユーザー数 / 課金対象ユーザー数を測定することを目的としています。

|                       | **赤** | **黄** | **緑** |
| --------------------- | ------- | ---------- | --------  |
| [ユニークアクティブユーザー - L28D](https://gitlab.com/gitlab-org/gitlab/-/blob/master/config/metrics/counts_28d/20220621085114_unique_active_users_monthly.yml) / [課金対象ユーザー](https://gitlab.com/gitlab-org/gitlab/-/blob/master/ee/config/metrics/license/20210531204603_license_billable_users.yml) | <50% | ≥50 - <80% | ≥80% |

これは、28 日間ベースでアクティブにログインしているすべてのユーザーをアカウントにデプロイされた総ユーザー数で割ったものです。

**制限事項**:

1. このヘルス指標が利用可能なのは、15.2 以上のセルフマネージドの顧客のみです
1. SaaS 相当の指標は後日利用可能になります（[Issue](https://gitlab.com/gitlab-data/analytics/-/issues/11662)）

顧客がライフサイクルを進む中で、ユーザーエンゲージメントはライセンス消費の「定着度」の指標となります。例えば、プラットフォームに参加したユーザーが定着し、定期的に利用しているか？

**重要な理由**: ユーザーエンゲージメントは、更新リスクのより包括的なビューを構築する優れた方法であることが証明されています。休眠ユーザーの非有効化が有効になっている顧客に対しては効果が低くなります。非エンゲージなユーザーは課金対象ユーザー数から継続的に削除されるためです。

**活用方法**:

1. ユーザーエンゲージメントについて顧客にディスカバリー質問をする: ユーザーのタイプ・ユースケース・休眠/未エンゲージユーザーの認識
1. 休眠ユーザー非有効化機能の認知を高める
1. アカウント内での GitLab の認知度向上の取り組みと組み合わせる（例: Plan/PM 向け GitLab・非開発者向け GitLab・通常のユーザーイネーブルメント）。SAE/AE/BDR へのシグナルとして、アカウントベースのアウトリーチを推進します。未認知または未エンゲージのユーザーコホートを見つけます。彼らをプラットフォームに参加させることを促します。

すでに支払い済みのシートから価値を得る方法として位置付け、アカウントチームがより予測可能な更新アウトカムを確保できるよう支援します。更新日に近づくほどリスクが高まります。

## ユースケース健全スコアリング

| ユースケース（ステージ） | 目的 / 採用レベル | 説明 |
| ------------------ | ------------------------ | ------------------------------------------------------------ |
| SCM（Create） | 基本採用 | 顧客は基本的なツールセットを使用しているか？ほとんどの顧客は GitLab ジャーニーの比較的早い段階でこれらの機能を採用するはずです |
| CI（Verify） | 製品の定着度 | 継続的な採用と顧客ジャーニーの一環として、顧客が CI を採用するのを支援するとともに、中央 DevOps チームが組織の CI 採用についてより深く理解できるよう支援したいと考えています。これらの指標を使用して採用に向けた進捗状況を把握します |
| セキュリティ（DevSecOps） | イネーブルメントと拡大 | セキュリティ機能を使用している顧客、またはトライアルして[シフトレフト](https://about.gitlab.com/blog/2020/06/23/efficient-devsecops-nine-tips-shift-left/)を希望している顧客に対して、これらの指標を使用して採用を特定し成長を追跡します |
| CD（Release） | イネーブルメントと拡大 | 顧客はデプロイに GitLab をどれだけ採用しているか？顧客ジャーニーの次のパスは [CD ユースケース](/handbook/marketing/brand-and-product-marketing/product-and-solution-marketing/usecase-gtm/cd/)です |

### Gainsight スコアリング概要

Gainsight は以下の範囲を使用し、指標グループの平均に基づいて赤・黄・緑として定義します。

- 0〜50 の範囲、スコア 0〜50 は赤とみなされます <br>
- 50〜75 の範囲、スコア 51〜75 は黄です <br>
- 75〜100 の範囲、スコア 76〜100 は緑です <br>

**例:**
![例](https://lucid.app/publicSegments/view/b1d20410-8bbf-4717-933c-a4210aad9970/image.png)

- ユーザーデプロイ 62.5（黄）
- ユーザー当たりデプロイ数 87.5（緑）
- CI パイプライン 62.5（黄）

`(62.5 + 87.5 + 62.5) / 3 = 70.83` <br>
CI の総合スコア = `70.83` または黄

### ソースコード管理（SCM）

SCM は初期のランドユースケースの 1 つとみなされます。そのため、顧客が適切に使用していることを確認したいと考えています。
採用タイムライン: ライセンス購入後 1 ヶ月

|         指標        | 計算 | **赤** | **黄** | **緑** |
| --------------------- |-------|-------| ---------- | --------  |
| Git 操作利用率 % | [`Git Operations - Users L28D`](https://gitlab.com/gitlab-org/gitlab/-/blob/master/config/metrics/counts_28d/20210216182040_action_monthly_active_users_project_repo.yml) ÷ [`Billable Users`](https://gitlab.com/gitlab-org/gitlab/-/blob/master/ee/config/metrics/license/20210531204603_license_billable_users.yml) | ≤ 10% | > 10% - ≤ 33% | > 33% |

#### **グリーン採用基準:**

課金対象ユーザーの 33% 以上が過去 28 日間に何らかの Git 操作（読み取り/書き込み/プッシュ）を実行した場合、SCM は採用済みとみなされます。

### 継続的インテグレーション（CI）

CI は、初期購入理由、または SCM の場合は拡張ユースケース（初期購入意図が解決された後のユースケース）とみなされます。
採用タイムライン: ライセンス購入後 1 ヶ月。

| 指標 | 計算 | **赤** | **黄** | **緑** |
|---|---|---|---|---|
| 課金対象ユーザー当たり CI ビルド数 | [CI Builds - L28D](https://metrics.gitlab.com/keys/service-ping/?q=counts.count_total_create_ci_build_monthly) ÷ [Billable Users](https://gitlab.com/gitlab-org/gitlab/-/blob/master/ee/config/metrics/license/20210531204603_license_billable_users.yml) | ≤ 2 | > 2 - ≤ 40 | > 40 |

#### **グリーン採用基準:**

過去 28 日間に作成された CI ビルドの平均数が `課金対象ユーザー` 1 人当たり 40 を超える場合、CI は採用済みとみなされます。

### セキュリティ（DevSecOps）

これらのセキュリティ（DevSecOps）指標は、[Ultimate 顧客](https://about.gitlab.com/direction/paid_tiers/#sts=Ultimate)**のみ**利用可能です。採用タイムライン: ライセンス購入後 1 ヶ月

| 指標 | 計算 | **赤** | **黄** | **緑** |
|---|---|---|---|---|
| Secure スキャナー利用率 % | [Secure Scanners - Users L28D](https://gitlab.com/gitlab-org/gitlab/-/blob/master/ee/config/metrics/counts_28d/20210216181956_user_unique_users_all_secure_scanners.yml) ÷ [Billable Users](https://gitlab.com/gitlab-org/gitlab/-/blob/master/ee/config/metrics/license/20210531204603_license_billable_users.yml) | ≤5% | >5% - <20% | ≥20% |
| CI パイプライン当たりの平均スキャン数 | [Secret Detection](https://gitlab.com/gitlab-org/gitlab/-/blob/master/ee/config/metrics/counts_28d/20210830231956_secret_detection_scans.yml) + [Dependency Scan](https://gitlab.com/gitlab-org/gitlab/-/blob/master/ee/config/metrics/counts_28d/20210216183828_dependency_scanning_scans.yml) + [Container Scan](https://gitlab.com/gitlab-org/gitlab/-/blob/master/ee/config/metrics/counts_28d/20210830231849_container_scanning_scans.yml) + [SAST](https://gitlab.com/gitlab-org/gitlab/-/blob/master/ee/config/metrics/counts_28d/20210830231329_sast_scans.yml) + [DAST](https://gitlab.com/gitlab-org/gitlab/-/blob/master/ee/config/metrics/counts_28d/20210216183832_dast_scans.yml) + [Coverage Fuzzing](https://gitlab.com/gitlab-org/gitlab/-/blob/master/ee/config/metrics/counts_28d/20210216183836_coverage_fuzzing_scans.yml) + [API Fuzzing](https://gitlab.com/gitlab-org/gitlab/-/blob/master/ee/config/metrics/counts_28d/20210216183838_api_fuzzing_scans.yml) ÷ [CI Internal Pipelines - L28D](https://gitlab.com/gitlab-org/gitlab/-/blob/master/config/metrics/counts_28d/20230217215050_ci_internal_pipelines.yml) | <0.1 | ≥0.1 - ≤0.5 | >0.5 |
| 使用中のスキャナー数 | [Secret Detection](https://gitlab.com/gitlab-org/gitlab/-/blob/master/ee/config/metrics/counts_28d/20210830231956_secret_detection_scans.yml) + [Dependency Scan](https://gitlab.com/gitlab-org/gitlab/-/blob/master/ee/config/metrics/counts_28d/20210216183828_dependency_scanning_scans.yml) + [Container Scan](https://gitlab.com/gitlab-org/gitlab/-/blob/master/ee/config/metrics/counts_28d/20210830231849_container_scanning_scans.yml) + [SAST](https://gitlab.com/gitlab-org/gitlab/-/blob/master/ee/config/metrics/counts_28d/20210830231329_sast_scans.yml) + [DAST](https://gitlab.com/gitlab-org/gitlab/-/blob/master/ee/config/metrics/counts_28d/20210216183832_dast_scans.yml) + [Coverage Fuzzing](https://gitlab.com/gitlab-org/gitlab/-/blob/master/ee/config/metrics/counts_28d/20210216183836_coverage_fuzzing_scans.yml) + [API Fuzzing](https://gitlab.com/gitlab-org/gitlab/-/blob/master/ee/config/metrics/counts_28d/20210216183838_api_fuzzing_scans.yml) の SUM | ≤1 | 2 | ≥3 |

#### **グリーン採用基準:**

等しい重み付けと Gainsight の定義されたスコアリング範囲により、全体のグリーンのセキュリティ（DevSecOps）スコアには 3 つの指標グループのうち 2 つ（2）がグリーンで 1 つ（1）がイエロー/グリーンである必要があります

### 継続的デプロイメント（CD）

CD は拡張ユースケース（初期購入意図が解決された後のユースケース）とみなされます。
採用タイムライン: ライセンス購入後 1 ヶ月

|       指標       | 計算 | **赤** | **黄** | **緑** |
| ------------------ | ------- | ---------- | --------  | -------- |
| ユーザーデプロイ利用率 % | [Deployments - User L28D](https://gitlab.com/gitlab-org/gitlab/-/blob/master/config/metrics/counts_28d/20210216181935_deployments.yml) ÷ [Billable Users](https://gitlab.com/gitlab-org/gitlab/-/blob/master/ee/config/metrics/license/20210531204603_license_billable_users.yml) | <5% | 5-12% | >12% |
| L28D ユーザー当たりデプロイ数 | [Deployments L28D（イベント）](https://gitlab.com/gitlab-org/gitlab/-/blob/master/config/metrics/counts_28d/20210201124930_deployments.yml) ÷ [Billable Users](https://gitlab.com/gitlab-org/gitlab/-/blob/master/ee/config/metrics/license/20210531204603_license_billable_users.yml) | <2 | 2 - 7 | >7 |
| デプロイ成功率 % | [Successful Deployments - L28D](https://gitlab.com/gitlab-org/gitlab/-/blob/master/config/metrics/counts_28d/20210216181923_successful_deployments.yml) ÷（成功 + [Failed Deployments - L28D](https://gitlab.com/gitlab-org/gitlab/-/blob/master/config/metrics/counts_28d/20210216181924_failed_deployments.yml)） | <25% | 25% - 80% | >80% |

#### **グリーン採用基準:**

等しい重み付けと Gainsight の定義されたスコアリング範囲により、全体のグリーンの CD スコアには 3 つの指標グループのうち 2 つ（2）がグリーンで 1 つ（1）がイエロー/グリーンである必要があります

## 制限事項

1. 一部の顧客は使用データの送信について例外が認められています。
   1. [クラウドライセンスとサポート例外プロセスの説明](/handbook/support/license-and-renewals/workflows/self-managed/cloud-licensing/)
   1. [INTERNAL — 顧客の可用性・適格性・オプトアウト](https://internal.gitlab.com/handbook/product/fulfillment/cloudlicensing/cloud-licensing/#customer-availability-eligibility--opt-out)
   1. [クラウドライセンス採用ダッシュボード](https://10az.online.tableau.com/#/site/gitlab/views/WIPCloudLicensingPOC/CloudLicensingAdoption?:iid=1)
   1. **解決策**: 例外は顧客がデータを送信しない有効な理由とみなされます。ただし、計画以上の例外が生じており、可能な限り更新時に例外を削除するためのイネーブルメントに取り組みます。
1. 使用状況はインスタンスレベルで測定され、サブスクリプションに紐付けられ、アカウントに紐付けられます。そのため、「アカウント」の健全スコアは単一インスタンス（最も重要なもの）のビューですが、より複雑なアカウントでは、他のインスタンスとサブスクリプションの健全性が隠れる場合があります（詳細は[グラフ](/handbook/customer-success/product-usage-data/using-product-usage-data-in-gainsight/#csmcse-actions)を参照。単一アカウントが複数のサブスクリプションを持ち、各サブスクリプションが複数のインスタンスを持つ場合があります（セルフマネージドのみ）。[複数の本番インスタンスの処理プロセス](/handbook/customer-success/product-usage-data/using-product-usage-data-in-gainsight/#multiple-production-instances-health-scoring)）
   1. **解決策**: 理想的なアウトカムは、サブスクリプションを関連する子アカウントに「分割」することであり、[こちらで議論されています](https://gitlab.com/gitlab-com/sales-team/field-operations/sales-operations/-/issues/3032)
1. `Billable Users` は 14.0 で導入された指標です。古い（セルフマネージド）インスタンスを使用している顧客はこの値を持たず、ライセンス利用率は NULL として表示されます（注: SaaS 顧客は問題ありません）
   1. **解決策**: クラウドライセンスの採用に注力する
1. ユーザーエンゲージメント: `unique_active_user` 指標は 15.2 でデビューし、セルフマネージドインスタンスにのみ存在します。この健全スコアはすべての SaaS 顧客と 15.1 以前のセルフマネージド顧客に対して NULL になります
   1. **解決策**: クラウドライセンスの採用に注力する（セルフマネージド）
   1. **解決策**: SaaS 顧客用の[指標を作成する](https://gitlab.com/gitlab-data/analytics/-/issues/11662)
1. ほとんどの基礎指標は 13.9 以前に作成されましたが、バージョン 12 以前のインスタンスには指標がありません
   1. **解決策**:
1. 使用データはインターネットアクセス・IP アドレスがブロックされていないこと・ライセンス↔サブスクリプションマッピングが正常に機能していることに依存しています（[ライセンス↔サブスクリプションマッピング epic](https://gitlab.com/gitlab-org/fulfillment-meta/-/issues/634)を参照。Fulfillment が解決に向けて取り組んでいます）
   1. **解決策**: クラウドライセンスの採用に注力する（セルフマネージド）

## ユースケース採用数

*「顧客は何個のユースケースを採用しているか？」*

Gainsight では、スコアカードが GitLab ユースケースの顧客採用を追跡します。

グリーンのスコアは、顧客がその特定のユースケースを採用していることを意味します。顧客健全ダッシュボードのユースケース採用数チャートでは、各顧客のグリーンスコアの数をカウントして、0・1・2・3・4 個のユースケースを採用している顧客数を可視化します。

このチャートを使用して、各顧客が採用したユースケースの数を把握します。

<details>
<summary> Gainsight 計算ルール
</summary>

### SCM・CI・CD・セキュリティ（DevSecOps）のユースケース採用数の計算

Gainsight ルールは、グリーンのスコアを持つアカウントに対して `Company` オブジェクトのブール値フィールドを true にマークします。これらのブール値フィールドは「SCM 採用」「CI 採用」「CD 採用」「セキュリティ（DevSecOps）採用」と名付けられています。

マーク後、各アカウントの "true" のブール値の数が合計されます。アカウントのSCM・CI・CD・セキュリティ（DevSecOps）がすべてグリーンの場合、これはスコア 4 になります。どのユースケースもグリーンでない場合、これは 0 となり、すべてのユースケーススコアが N/A の場合、使用統計が記録されていないことを意味する NULL になります。
</details>

## 製品健全スコアの低下 CTA

Gainsight ルールエンジンを使用して、製品健全スコアがグリーンからイエロー/レッドに、またはイエローからレッドに低下するたびに CTA（コールトゥアクション）が作成される仕組みを構築しました。CTA はフォローアップのためにカスタマーサクセスマネージャー（CSM）に割り当てられ、プレイブックは CTA に関連付けられません。CSM は手動で CTA にタスクを作成/追加して、スコアの低下を修正するために取られたアクションを追跡できます。

この CTA を通じて、CSM は顧客が製品のある領域での使用を減らしている可能性があるときに迅速に通知を受け、調査・ディスカバリー質問・早期トリアージができるため、顧客が採用を支援され、将来的な解約や縮小の可能性を避けられます。

誤検知（例えば、誰も作業していない休日）がある場合がありますが、潜在的なリスクに対して十分注意を払うことを好むため、これらの CTA を受け取った際に CSM がデューデリジェンスを行い、顧客が更新に影響する可能性のある新しい障壁・会社の変化などに直面していないかを確認し、直面している場合は直ちに[トリアージプロセス](/handbook/customer-success/csm/renewals/#gitlab-account-triage-project)を開始するよう求めています。

CSM は、顧客の使用状況が時間の経過とともに、またはブック全体で遅れているトレンドを発見し、期待値と採用についてベストプラクティスを提案できる場合もあります。

このロジックは以下のスコアに適用されます。

- CI 採用
- CD 採用
- セキュリティ（DevSecOps）採用
- ライセンス利用率
- SCM 採用
- ユーザーエンゲージメント

*注意事項:*

- CSM が管理する顧客アカウントにのみ適用されます
- ルールは毎日午前 2 時（PT）に実行されるようにスケジュールされています

## Gainsight のライセンス利用率

ライセンス利用率はサブスクリプションレベルで計算されます。Gainsight では、これを 2 つの異なる方法で表示します。

1. C360 ページでは、サマリーページに表示されるライセンス利用率の数値は、プライマリインスタンス（「健全スコアに含まれる」とマークされたインスタンス）からの数値のみです。
2. Gainsight のレポート等では、インスタンスレベルでのライセンス利用率を表示します。

アカウントの統計が不正確だと思う場合は、以下の[不正確な使用統計のレポート](#reporting-bad-usage-statistics)方法を参照してください。

ライセンス利用率の統計に使用するインスタンスおよびネームスペースレベル（一般的にサブスクリプションレベルも含む）の主な 3 つのフィールドがあります。

- **課金対象ユーザー数**: 運用指標から。ライセンスの課金対象となり得るユーザー数（ゲストユーザーを除く）。
- **ライセンスユーザー数**: 指定されたサブスクリプションに対して購入されたライセンスの数。
- **ライセンス利用率**: 上記の指標に基づいて計算されます: `課金対象ユーザー数/ライセンスユーザー数` をパーセンテージで表したもの。

### 不正確な使用統計のレポート {#reporting-bad-usage-statistics}

不正確な使用統計をレポートする場合は、[データ品質のトリアージ](/handbook/customer-success/product-usage-data/using-product-usage-data-in-gainsight/#triaging-data-quality)に関するこちらのハンドブックページを参照してください。
