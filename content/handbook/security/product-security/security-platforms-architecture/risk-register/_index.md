---
title: "プロダクトセキュリティリスクレジスター"
description: "プロダクトセキュリティリスクレジスター (PSRR) は、セキュリティリスクチームによる STORM プロセスを基に駆動されています。"
upstream_path: /handbook/security/product-security/security-platforms-architecture/risk-register/
upstream_sha: 1e195b58b9f249ff10bd0e705106c320fee86141
translated_at: "2026-05-09T12:40:09Z"
translator: claude
stale: false
lastmod: "2026-04-09T20:14:47+00:00"
---

プロダクトセキュリティリスクレジスター (PSRR) は、GitLab の製品におけるシステミックなセキュリティリスクを特定、評価、優先順位付け、緩和、監視するための一元化されたフレームワークです。PSRR は、[セキュリティリスクチーム](/handbook/security/security-assurance/security-risk/) による [STORM プロセス](/handbook/security/security-assurance/security-risk/storm-program/) と [統合セキュリティリスク管理 (USRM)](/handbook/security/security-observations-risk-management/) 方法論を基に駆動され、それらに従っています。

## 目的

PSRR は次のような方法でプロダクトセキュリティリスクを軽減します:

- **情報に基づく優先順位付け**: インシデント、脆弱性、運用データからのエビデンスを活用し、ビジネス目標に整合した戦略的な投資判断を可能にします。
- **クロスファンクショナルなコラボレーション**: セキュリティ、エンジニアリング、プロダクトの各チームを調整し、システミックなリスク緩和に必要なリソースを確保します。
- **測定可能な成果**: 影響を示し、継続的な改善を可能にする KRI を通じてリスク対応の進捗を追跡します。
- **エンタープライズ統合**: エンタープライズレベルのエスカレーションと可視化のために、プロダクトセキュリティリスクのインテリジェンスを [STORM](/handbook/security/security-assurance/security-risk/storm-program/) と [USRM](/handbook/security/security-observations-risk-management/) に提供します。GitLab 自身の運用モデル計画サイクルに統合します。

## スコープ

PSRR は、GitLab の製品を侵害やデータ漏洩にさらす、システミックな弱点、不適切な設計上の選択、または機能ロジックを追跡し、プラットフォーム全体に連鎖的な影響を及ぼすリスクに焦点を当てます。

**対象範囲:**

- クロスチームコラボレーション、アーキテクチャ変更、または機能開発を必要とするシステミックなリスク
- 繰り返しインシデントや脆弱性が発生しているリスク（過去 2 年間で 5 件以上）
- 繰り返し脆弱性、インシデントを発生させる、または顧客向けのセキュリティ影響を持つセキュリティ運用または製品開発プロセスのギャップ

**対象外:**

- 個別の脆弱性 (CVE)
- 個別のコンプライアンス観察事項
- 特定のリスクと関連付けられていないセキュリティチームからの機能リクエスト

## PSRR の Issue とダッシュボード

このリストは [STORM リポジトリ](https://gitlab.com/gitlab-com/gl-security/security-assurance/security-risk-team/storm-risk-register/-/work_items?sort=created_date&state=opened&label_name%5B%5D=PSRR&first_page_size=100) (内部) で確認するか、次のボード (内部) を参照してください:

- [ワークフロー別ボード](https://gitlab.com/gitlab-com/gl-security/security-assurance/security-risk-team/storm-risk-register/-/boards/9959116) - 候補を VP 承認済みに移行するため
- [部門/セクション別ボード](https://gitlab.com/gitlab-com/gl-security/security-assurance/security-risk-team/storm-risk-register/-/boards/9234872) - 組織構造別に整理
- [深刻度別ボード](https://gitlab.com/gitlab-com/gl-security/security-assurance/security-risk-team/storm-risk-register/-/boards/7816349?label_name%5B%5D=PSRR) - リスク評価別に優先順位付け

リスク分析とトレンドについては、[PSRR Tableau ダッシュボード](https://10az.online.tableau.com/#/site/gitlab/views/ProductSecurityRiskRegister/Dashboard) (内部) を参照してください。

新しい Issue を作成するには、こちらの [リンク](https://gitlab.com/gitlab-com/gl-security/security-assurance/security-risk-team/storm-risk-register/-/issues/new?issuable_template=ProdSec%20StORM%20Risk%20Template) (内部) をたどってください。[適切に表現されたリスクを定義するためのガイド](/handbook/security/product-security/security-platforms-architecture/risk-register/well-articulated-prodsec-risks)を必ず参照してください。

## PSRR 戦略

プロダクトセキュリティリスクレジスター (PSRR) は、トップダウンのコミットメントアプローチを使用して、リスク対応計画を GitLab の運用モデル計画とレポートメカニズムに統合します。複雑なセキュリティ課題で意味のある進捗を確保するため、各 Functional Leader に対して 1 つの主要な戦略的リスク目標で整合します。これにより、標準的なセキュリティ運用と並行して、システミックな改善のための専用リソースを確保します。提案される優先事項は、リスク影響、ビジネスロードマップ、既存の作業、リスクエビデンス、および推定工数に基づきます。すでにコミットされている作業は除外します。最終的な選択、または代替案は、各部門によって決定されます。

セキュリティは、FL の依存関係に頼る取り組みであっても、リスク削減を推進するためにリスクオーナーとして行動できます。これらのセキュリティ主導の取り組みは「Top 1 PSRR 候補」に割り当てられたキャパシティに対してカウントされないため、FL のリソースは新しいリスクに集中できます。

## 役割と責任

PSRR は [USRM 役割と権限マトリクス](/handbook/security/security-observations-risk-management/#authority-matrix) に従います。PSRR リスクの 2 つの主要な役割は次のとおりです:

| 役割 | 責任 |
|------|----------------|
| **ビジネスリスクオーナー** | リスク削減の推進と対応計画の定義の DRI。リスク受容承認権限は USRM 権限マトリクスに従います。 |
| **セキュリティリスクオーナー** | リスク対応計画の検証とリスク監視の実装に責任を持つセキュリティチームメンバー。 |

### PSRR 固有の責任

SPA チームは、これらの活動についても追加で責任を持ちます:

- 初期リスク評価、検証、スコアリング
- PSRR ライフサイクル全体を通じたリスクの追跡
- エンジニアリングおよびセキュリティリーダーシップとの整合
- STORM との整合とエスカレーションの調整

## PSRR ワークフロー

PSRR は、プロダクトセキュリティ固有のステージを持つ USRM ワークフローに従います:

| ステージ | 開始基準 | 主要な活動 | 終了基準 |
|-------|---------------|----------------|---------------|
| **発見されたファインディング** | 評価、インシデント、またはエスカレーションを通じてリスクが発見された | - STORM 方法論を使用してリスクをスコアリング<br> - リスク評価とスコープラベルを適用 <br>- ビジネスリスクオーナーとセキュリティリスクオーナーを特定 | リスクがスコアリングされ、オーナーが特定された |
| **対応計画** | ビジネスリスクオーナーがリスクを認知 | - リスク対応を選択 <br>- KRI とマイルストーンを定義<br>- 目標日を設定<br>- 必要に応じて承認を取得<br>- ヘルスラベルを適用 | 対応計画が日付付きで承認された |
| **モニタリング** | 対応計画が承認され、リソースが割り当てられた | - 対応活動を実行 <br>- 必要に応じてテクニカルプログラムマネージャーをオンボーディング <br>- エピックステータスを更新 <br>- 進捗に基づいてヘルスラベルを更新 | 改善活動が完了した |
| **モニター済み** | リスク対応が「モニター」 - 積極的な改善は計画されていない | - 月次で KRI を追跡<br>- 四半期ごとにリスクスコアをレビュー<br>- 優先度の変更を評価<br>- 新しいインシデントが発生した場合に更新 | リスク優先度が増加 OR リスクが受容/クローズされた |
| **クローズ** | 改善が検証された、またはリスクが排除された | - セキュリティリスクオーナーが有効性を検証<br>- 結果を文書化<br>- Issue をクローズ | リスクが許容範囲内 または 排除された |

## PSRR リスクスコアリング

PSRR は、実世界のデータを用いたエビデンスベースの調整を加えた [STORM リスクスコアリング方法論](/handbook/security/security-assurance/security-risk/storm-program/#risk-factors-and-risk-scoring) (発生可能性 × 影響) に従います。

### ベーススコアリング

STORM の定性的評価から開始します:

- **発生可能性** (1-6): 脅威イベントを開始する難易度
- **影響** (1-5): イベントが発生した場合の組織目標への影響

### エビデンスベースの調整

エビデンスは、過去 **2 年間** の関連セキュリティイベントから収集されます:

- 関連する HackerOne レポート（任意の深刻度）
- 関連する SIRT インシデント（任意の深刻度）
- 関連するコンプライアンス観察事項

**注意:** 1 つのソースからのエビデンスのみで十分です - スコアリング方法論は、ソース間でデータが不完全であることを考慮しています。

#### 発生可能性の調整（カウントベース）

すべての深刻度にわたるエビデンス項目の合計をカウントします:

- HackerOne レポート
- SIRT インシデント
- コンプライアンス観察事項
- 脆弱性

| 合計カウント | 修正値 |
|------------|----------|
| 10 件以上 | +2 |
| 5 件以上 | +1 |
| 1-4 件 | 0 |
| 0 件 | -1 |

**適用:** `final_likelihood = max(1, min(6, base_likelihood + modified))`

#### 影響の調整（深刻度加重）

深刻度ベースのポイントを使用して加重スコアを計算します:

- HackerOne および脆弱性 `severity::1`: 各 3 ポイント
- HackerOne および脆弱性 `severity::2`: 各 2 ポイント
- SIRT S1: 各 3 ポイント
- SIRT S2: 各 2 ポイント
- 観察事項 Critical: 各 3 ポイント
- 観察事項 High: 各 2 ポイント

| 加重スコア | 修正値 |
|---------------|----------|
| 10 ポイント以上 | +2 |
| 5 ポイント以上 | +1 |
| 1-4 ポイント | 0 |
| 0 ポイント | -1 |

**適用:** `final_impact = max(1, min(5, base_impact + impact_mod))`

### 最終リスクスコア

`Risk Score = final_likelihood × final_impact`

このスコア (1-30) は、`prioritised` ステージで適用される `RiskRating::` および `psrr-risk-rating::` ラベルを決定します。

エビデンスベースの修正値とベーススコアリングが矛盾しているように見える場合（たとえば、ベース発生可能性=1 だが 5 件以上のインシデント、またはベース影響=1 だが加重スコア 10 以上）には、エビデンスとベーススコアの手動検証が適用されます。

## 主要リスク指標 (KRI)

主要リスク指標は、リスクが時間とともに増加、減少、または安定しているかを追跡する測定可能なメトリクスです。KRI は `treatment-plan-defined` ステージで定義され、リスクライフサイクル全体を通じて追跡されます。

KRI は月次の PSRR レビュー中にレビューされます。ヘルス KRI の定義を参照してください。

### クイック判断ガイド: どの KRI タイプを使うべきか?

| 状況 | 主要 KRI | 例となるメトリクス | しきい値 |
|----------------|----------|-----------------|------------|
| **「新しいリスク、インシデントゼロ」** | **実装:** 制御の採用を測定 (Leading) | **制御:** SLSA provenance を持つイメージの 45%<br>**露出:** 認証なしのイメージ 550 個<br>**トレンド:** 今四半期に保護されていないイメージが +50 | **緑:** カバレッジ 95% 以上 OR 四半期ごとに 20% 以上の減少傾向<br>**黄:** カバレッジ 75-94% OR 横ばい<br>**赤:** カバレッジ 75% 未満 OR 増加 |
| **「インシデント発生頻度が高い (四半期 5 件以上)」** | **有効性:** <br>インシデント (Lagging) + 予測 (Bayesian) | **過去:** 6 ヶ月で 30 件の漏洩、平均 500 件のスコープ外シークレット<br>**現在:** 650 件のスコープ外シークレット<br>**予測:** 今月 6.5 件の漏洩<br>**実績:** 先月 5 件の漏洩 | **緑:** 予測 ≤ ベースライン AND インシデント減少中<br>**黄:** 予測がベースラインの 1.5-2 倍<br>**赤:** 予測がベースラインの 2 倍超 |
| **「まれだが深刻な攻撃」** | **実装:** <br>露出を測定 (Leading) | **露出:** トラフィックの 23% が HTTP/1 プロトコル<br>**重要:** HTTP/1 上の認証エンドポイント 2 個<br>**トレンド:** 前四半期から 5% 削減 | **緑:** 四半期ごとに 20% 以上の減少傾向<br>**黄:** 横ばいまたは 20% 未満の減少<br>**赤:** 増加 |
| **「インベントリがない」** | **代替の収集を定義:**<br>サンプリングまたは実験 | **サンプリング:** リポジトリの 10% (500 中 50) を露出シークレットについて監査 → 8% でシークレット発見<br>**実験:** 5 つの重要エンドポイントのレッドチームテスト → 2 つがバイパス可能 | **緑:** サンプルで 5% 未満の問題<br>**黄:** サンプルで 5-15% の問題<br>**赤:** サンプルで 15% 超の問題 |

**注意:** ほとんどのリスクは複数の KRI タイプを使用すべきです。

**観察が不可能または不十分な場合:**

**サンプリング** - 代表的なサブセットを分析する:

- ランダムサンプリング: 等確率選択。例: コンテナイメージの 10% をテスト
- 層化サンプリング: 各カテゴリからサンプリング。例: エンジニアリングチームごとに 5 リポジトリ
- **使用するとき**: 大規模な集団、リソース制約、ベースラインまたはインベントリの欠如

**実験** - リスク露出を測定するための制御されたテスト:

- レッドチーム演習: 実世界の攻撃をシミュレート
- セキュリティ監査: 設定の手動レビュー
- ペネトレーションテスト: 制御の有効性を検証
- **使用するとき**: 過去のインシデントがない、仮定を検証する必要がある

## リスククローズ基準

PSRR リスクは、次の **すべて** が満たされたときにクローズされる場合があります:

1. **リスクスコアが許容範囲内**

   - 最終リスクスコア ≤ リスク許容しきい値
   - 再評価で持続的な削減が示されている（一時的でない）

2. **KRI 目標達成**

   - 実装 KRI: 制御カバレッジが最小しきい値を満たす（通常 95% 以上）
   - 有効性 KRI: インシデント発生率が持続的な削減を示す（90 日以上、ベースライン以下）
   - 効率性 KRI: 応答時間が SLA 目標を満たす

3. **セキュリティリスクオーナーの検証**

   - すべての改善エビデンスをレビュー
   - 制御が効果的に運用されていることを確認
   - 根本原因が対処されたことを検証
   - 対応の結果が文書化されている
   - クロージャの根拠を Issue に文書化

## PSRR ラベルスキーマ

PSRR は、リスク分類、スコアリング、ワークフロー追跡、ヘルスモニタリングのためのプロダクトセキュリティ固有のラベルで USRM ラベルを拡張します。

### 必須ラベル

#### リスク評価 (STORM から)

- `RiskRating::Critical` - スコア 26-30
- `RiskRating::High` - スコア 21-25
- `RiskRating::Medium` - スコア 11-20
- `RiskRating::Low` - スコア 1-10

#### PSRR リスクスコア (数値)

- `psrr-risk-rating::<number>` - 1-30 の任意のスコア（例: `psrr-risk-rating::25`）

#### PSRR スコープ (リスクカテゴリ)

- `psrr-scope::<category>` - 例: `product-authnz`, `infrastructure`, `supply-chain`, `secrets-management`, `operational`

#### PSRR オーナー

- `Department::<group>|<section>|Engineering or section::` - [プロダクトカテゴリ](/handbook/product/categories/features/)に従った部門
- `security-owner::<team>` - [セキュリティチーム構造](/handbook/security/)に基づきリスクを所有するセキュリティチーム

#### ワークフローとステータス

`risk-acceptance::active` および `Blocked` ラベルを含む [USRM ラベル](/handbook/security/security-observations-risk-management/#usrm-label-reference) を参照してください。

#### ヘルス指標

各 PSRR リスクには 3 つすべてのヘルスラベルが必要です:

| ヘルス領域 | ラベル | 赤 | 黄 | 緑 |
|---------------|--------|-----|--------|-------|
| オーナー | `health-owner::red\|yellow\|green` | ビジネスリスクオーナーが割り当てられていない | 割り当てられているが非アクティブ/交代が必要 | 定期的な同期（四半期以上） |
| 対応計画 | `health-treatment::red\|yellow\|green` | 対応計画なしまたは日付欠落 | 定義済みだが 1 四半期以上遅延 | 順調、遅延が 1 四半期以下 |
| KRI | `health-kri::red\|yellow\|green` | 未定義または未追跡 | 定義済み、部分的なコンテキストを提供 | 定義済み、影響/発生可能性にリンクされている |

### オプションのラベル

#### STORM 統合

- `STORM Risk:1` から `STORM Risk:5` - STORM の Top 5 Risks の 1 つにマッピングされたリスク。
- `STORM::Proposed` - ビジネス影響と戦略的整合性に基づき、STORM リスクへのエスカレーションが提案されているリスク。

## トリアージボット自動化

PSRR は、推奨される [USRM ポリシー](/handbook/security/security-observations-risk-management/#required-triage-bot-policies) を使用して [GitLab Triage Bot](https://gitlab.com/gitlab-org/ruby/gems/gitlab-triage) を採用しています:

- **PSRR ラベルを強制** - psrr-risk-rating、psrr-scope、または health-* ラベルが欠落している Issue にフラグを立てる
- **ヘルス指標を検証** - ヘルスラベルが実際のリスクステータスと一致することを保証（例: オーナーがいないが緑ステータス）。

## STORM との統合

PSRR リスクは、ビジネス影響と戦略的整合性に基づき [STORM](/handbook/security/security-assurance/security-risk/storm-program/) にエスカレーションされる場合があります。すべての PSRR リスクは、関連する STORM リスクにもリンクされています。

## 参考文献

- [STORM プログラム手順](/handbook/security/security-assurance/security-risk/storm-program/)
- [統合セキュリティリスク管理 (USRM)](/handbook/security/security-observations-risk-management/)
- [USRM 権限マトリクス](/handbook/security/security-observations-risk-management/#authority-matrix)
- [リスクドラフトガイダンス](/handbook/security/security-assurance/security-risk/storm-program/#risk-drafting-guidance)
- [PSRR Wiki - Functional Leader Views](https://gitlab.com/gitlab-com/gl-security/security-assurance/security-risk-team/storm-risk-register/-/wikis/Product-Security-Risk-Register) (内部)
- [PSRR 対応計画テンプレート](https://gitlab.com/gitlab-com/gl-security/security-assurance/security-risk-team/storm-risk-register/-/comment_templates/1001048) (内部)

---
