---
title: PDI ダッシュボード、分析、インサイト
description: このページでは、Product Data Insights チームが作成または所有するダッシュボード、分析、インサイトを集約しています。
upstream_path: /handbook/product/groups/product-analysis/dashboards-analysis-insights/
upstream_sha: 1e195b58b9f249ff10bd0e705106c320fee86141
translated_at: "2026-05-13T12:00:00Z"
translator: claude
stale: false
lastmod: "2025-01-10T21:33:21+00:00"
---

### ダッシュボード

Product Data Insights チームが所有する [Tableau ダッシュボードの一覧はこちら](https://10az.online.tableau.com/#/site/gitlab/search/workbooks?search=peterson%20hervas%20raisinghani%20fergen%20petersen%20fisher%20deng%20braza)です。
注意点:

* `SAFE` プロジェクト内のダッシュボードを閲覧するには、追加の手順を踏んで [SAFE ダッシュボードアクセスを取得する](/handbook/enterprise-data/platform/safe-data/)必要があります
(Tableau ですでに SAFE アクセスをお持ちでない場合)
* この一覧にはドラフト状態のダッシュボードも含まれています。`Draft` タグが付いたダッシュボードはレポーティングに
使用しないでください。

| ダッシュボード名 | 説明 | 日付 | 場所 | SAFE アクセス必須？ |
| --- | --- | --- | --- | --- |
| [Product Data Insights Collection](https://10az.online.tableau.com/#/site/gitlab/collections/2b35eb4c-1d4f-4339-b53e-5e3f58147e92?:origin=card_share_link) | Product 組織に広く有用な分析リソースを含む Tableau コレクションです。 | 継続中 | Product/General & Product/SAFE  | Y & N |
| [PDI: AI Collection](https://10az.online.tableau.com/#/site/gitlab/collections/16d7490e-931b-4aa7-b4de-afb4916bb518) | AI 機能の採用と使用に関する PDI 所有のリソースを含む Tableau コレクションです。一般用ワークブックと SAFE ワークブックの両方を含みます。 | 継続中 | Product/General & Product/SAFE | Y & N |
| [PD: Cloud Licensing Adoption Dashboard](https://10az.online.tableau.com/#/site/gitlab/workbooks/1891137/views) | クラウドライセンスの採用に関するインサイトを提供するダッシュボード | FY24 Q1 | Ad-hoc/Product/SAFE | Y |
| [PD: Centralized Product Usage Metrics](https://10az.online.tableau.com/#/site/gitlab/workbooks/2069845/views) | プロダクトパフォーマンス指標の月次レポーティングメトリクスとトレンド | FY24 Q4 | Ad-hoc/Product/General | N |
| [PD: Firmographic Product Metric Usage](https://10az.online.tableau.com/#/site/gitlab/workbooks/2137023/views) | 企業規模、業種、シート数によるメトリクス使用状況のセグメント。 | FY24 Q4 | Development/Product/SAFE | Y |
| [PD: Code Suggestions](https://10az.online.tableau.com/#/site/gitlab/workbooks/2260169/views) | Code Suggestions の使用状況 (例: ユーザー数)、品質 (例: 受け入れ率)、パフォーマンス (例: 読み込み時間) のメトリクスを時系列で、デリバリーや言語別に表示。 | FY24 Q4 | Ad-hoc/Product/General | N |
| [PDI: Growth Section Collection](https://10az.online.tableau.com/#/site/gitlab/collections/8740c9bc-6d9d-4e3e-af5a-11b48f48e925?:origin=card_share_link) | Growth Section に関連するワークブックとビューを含む | 継続中 | Product/General & Product/SAFE  | Y & N |
| [PDI: Core & SaaS Platforms Sections Collection](https://10az.online.tableau.com/#/site/gitlab/collections/1c106c47-64b3-4cbf-b95d-c75fe2a0e9b4?:origin=card_share_link) | Platforms Section に関連するワークブックとビューを含む | 継続中 | Product/General & Product/SAFE  | Y & N |

これらのダッシュボードの使用や、得られるインサイトの解釈について質問がある場合は、
ダッシュボードのオーナーに連絡するか、Slack の `#data` チャンネルで `@product-analysts` にタグ付けしてください。

### 分析とインサイト

| 分析 | 説明 | 日付 |
| --- | --- | --- |
| [Groups per Organization Metric Exploration](https://gitlab.com/gitlab-data/product-analytics/-/issues/982#note_1282380262) | グループイベント使用状況のベンチマーク (月あたりの使用日数と連続使用月数) を策定。| FY24 Q1 |
| [Release AMAU Decline Investigation](https://gitlab.com/gitlab-data/product-analytics/-/issues/933#note_1254640824) | 2022年11月から Release AMAU が減少した原因は何か？ | FY24 Q1 |
| [Average Environments for Namespaces and Projects](https://gitlab.com/gitlab-data/product-analytics/-/issues/929#note_1321275080) | GitLab.com 上のプロジェクトと名前空間が使用する環境および環境変数の平均数を分析 | FY24 Q1 |
| [Payments declined due to lack of 3D Secure Authentication](https://gitlab.com/gitlab-data/product-analytics/-/issues/946#note_1252097963) | 3D セキュア機能がないために拒否された支払いがどれだけあるかについてのインサイトを提供する分析| FY24 Q1 |
| [Understanding user accounts with invalid zip/city combination](https://gitlab.com/gitlab-data/product-analytics/-/issues/1023#note_1307758646) | 無効な郵便番号/都市の組み合わせがある場合に、サブスクリプションを購入できない顧客がどれだけいるかの影響についてのインサイトを提供する分析| FY24 Q1 |
| [SaaS Team Activation Metric 2022](https://docs.google.com/presentation/d/1rJG8FaqEjfgA-Nz9Ww3blgcUwRGzri7CeKkn1e2eEHY/edit?usp=sharing) | 最初の14日間に実行されたチームアクションのうち、有料転換と継続利用を予測する Growth およびマーケティングメトリクスの開発をカバー。 | FY23 Q4 |
| [Secrets Management Usage Spike](https://gitlab.com/gitlab-data/product-analytics/-/issues/764#note_1145165090) | 2022年8月に Secrets Management の使用量が急増した原因は何か？ | FY23 Q3 |
| [Investigation How Remote:Include Timeouts on GitLab.com](https://gitlab.com/gitlab-data/product-analytics/-/issues/727#note_1156508624) | パイプライン実行時に HTTP 503 エラーが急増した原因を調査する分析 | FY23 Q4 |
| [Verify Benchmark Analysis](https://app.periscopedata.com/app/gitlab/1108418/Verify-Benchmark-Dashboard) | Verify ユーザーの典型的なテスト環境を理解するための分析 | FY23 Q4 |
| [Delayed Value Analysis](https://gitlab.com/gitlab-data/product-analytics/-/issues/781#note_1153295255) | トライアルから有料への転換における主要機能の使用状況を調査し、トライアル中の機能採用が有料機能の採用をいかに加速させるかを提示。| FY23 Q4 |
| [CI Runner Usage for Accounts with 1000+ Seats](https://gitlab.com/gitlab-data/product-analytics/-/issues/603#note_1095355443) | 1000シート以上の大規模アカウントにおける CI Runner の使用状況の調査 | FY23 Q4 |
| [Analysis of User Caps feature usage and account growth](https://gitlab.com/gitlab-data/product-analytics/-/issues/794#note_1149817915) | 'User Cap' 機能の使用と成長メトリクスとの相関関係についてのインサイトを提供する分析| FY23 Q4 |
| [Analysis on behavior of Change Linked Namespace flow](https://gitlab.com/gitlab-data/product-analytics/-/issues/870#note_1207139514) | SaaS サブスクリプションが割り当て名前空間をどれだけ変更するかについてのインサイトを提供する分析| FY23 Q4 |
| [Characterize CI -> SAST Funnel among Free Projects](https://gitlab.com/gitlab-data/product-analytics/-/issues/709#note_1109629880) |SAST の使用が時間とともにどのように離脱するか、またこの離脱のうちどれくらいが休眠プロジェクト (CI を使用していない) によるもので、どれくらいが SAST を無効化するアクティブプロジェクトによるものかを理解するための分析。 | FY23 Q3 |
| [Relationship between Sec Section Features & Ultimate Customer's Purchase Decisions](https://gitlab.com/gitlab-data/product-analytics/-/issues/624#note_1041184439) | 購入後アンケートデータの分析により、Ultimate プラン購入の動機として Sec 機能がどれほど重要だったかを特定。 | FY23 Q3 |
| [Free vs. Paid. vs OSS/EDU Subscriptions: Engagement Comparison](https://gitlab.com/gitlab-data/product-analytics/-/issues/549#note_1019828866) | サブスクリプションタイプ (有料、無料、OSS/EDU) に基づく類似メトリクス (SpO、ユーザー-ステージエンゲージメント、Service Ping オプトイン率、バージョン採用率など) の比較 | FY23 Q3 |
| [Verify Usage Patterns for Legitimate users & Malicious Users](https://gitlab.com/gitlab-data/product-analytics/-/issues/656#note_1092057211) | 無料アカウントにおける初期の同時パイプラインとジョブ使用状況を調査し、正規ユーザーと悪意あるユーザーの間のベンチマークを判定する分析 | FY23 Q3 |
| [Valuable Signup Metric 2022](https://docs.google.com/presentation/d/1xHBrnvwdMxQGqmX0TtcQz5tUYsAeU6CAMnpcDlhHUpc/edit?usp=sharing) | 有料転換の可能性が高い GitLab.com ユーザーのサブセットに絞り込むために使用される Growth およびマーケティングメトリクスの開発をカバー。 | FY23 Q3 |
| [Understand User Adoption of Truncating Container Registry Image Name](https://gitlab.com/gitlab-data/product-analytics/-/issues/706#note_1118258405) | 全ユーザーへの展開を判断するために、レジストリイメージ名の切り詰め使用状況を深掘り | FY23 Q3 |
| [SaaS & Self-Managed Purchase Funnel Analysis Overview](https://docs.google.com/presentation/d/1OGRGCia7cmXRELBmYV3-b59tmonmAQgOCPXMZ91qw5Y/edit#slide=id.g120637fa0fc_0_0) | SaaS と Self-Managed の購入ファネルに関する複数のインサイトを伴う深掘り分析| FY23 Q2 |
| [FY23-Q2 xMAU Estimation Exploration](https://docs.google.com/presentation/d/1lKAvTid3agGfgOAgmreBZBVa2_7YU5DViYw-AvRKFyM/edit?usp=sharing)| 2022年7月時点で利用可能なデータモデルを使用した、Self-Managed 推定方法論の実行可能性についての探索 | FY23 Q2 |
| [Release Stage Retention: SaaS vs Self-Managed](https://gitlab.com/gitlab-data/product-analytics/-/issues/427#note_969892541) | SaaS の Release 継続利用率と Self-Managed の Release 継続利用率の間に大きな差異がある原因は何か？ | FY23 Q2 |
| [Projects and Namespaces that use GitLab.com Terraform State](https://gitlab.com/gitlab-data/product-analytics/-/issues/263#note_903422594) | GitLab.com Terraform state を使用するプロジェクトおよび名前空間の割合についての深掘り。 | FY23 Q2 |
| [User Impact of Turning Off Certificate-Based Clusters](https://gitlab.com/gitlab-data/product-analytics/-/issues/299#note_877785073) | 証明書ベースのクラスターを無効化することで、何人のユーザー (内部および外部) が影響を受けるか？ | FY23 Q1 |
| [SaaS Trial Firmographic Analysis](https://docs.google.com/presentation/d/1ME_rD5pweUKIkkD-xXsEZkWjdxqRwzxrfEqEph_dJ4o/edit?usp=sharing) |  | FY22 Q4 |
| [FY22-Q3 xMAU Estimation Exploration](https://docs.google.com/presentation/d/1ifKhhGw2rWF33g22n42bdD6Yqq6m3o_djqxo6qvJVoo/edit?usp=sharing) | 2021年8月時点で利用可能なデータモデルを使用した、Self-Managed 推定方法論の実行可能性についての探索 | FY22 Q3 |
| [Paid SpO Trends among Retained and Churned Namespaces](https://docs.google.com/presentation/d/1RR5qwaE2E2OUtfSgU53GMs8FHjexNx2CFJcUbtiNS-0/edit?usp=sharing) | 離脱した名前空間と継続利用している名前空間を比較した際、どのようなステージ採用トレンドが現れるか？ | FY22 Q3 |
| [SSO Login Deep Dive Analysis](https://docs.google.com/presentation/d/1j66MejLh8uKhUDUkSVIhPLI79M1LtbgCSxuvJKzRRaI/edit?usp=sharing) | SSO 経由で作成された登録と、その後のプロダクト使用状況についての深掘り | FY22 Q2 |
| [Secure Free-to-Paid Funnel and Feature Adoption Analysis](https://docs.google.com/presentation/d/1bbvfsNzKoZw4kCYB9coexiXzPiLZ5E3XPe6hOsbZlag/edit?usp=sharing) | トライアル中に最も採用されている Secure 機能はどれか、また Ultimate プラン有料転換と最も高い相関を持つ機能はどれか？ | FY22 Q2 |
| [Stage Adoption Patterns: SCM <> Code Review <> CI](https://docs.google.com/presentation/d/1BcRhn8kJZTw8QcWSQLAk9mv72lJfk4d2jteGWCBYfo4/edit?usp=sharing) | 組織はどのように SCM から Verify へと進むか、また Code Review はこれらのステージの間または後で使用されているか？ | FY22 Q1 |
