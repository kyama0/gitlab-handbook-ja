---
title: "PSIRT ケースライフサイクル"
description: PSIRT がケースをどのように管理するかの説明
upstream_path: /handbook/security/product-security/psirt/runbooks/psirt-case-lifecycle/
upstream_sha: 1e195b58b9f249ff10bd0e705106c320fee86141
translated_at: "2026-05-10T00:00:00Z"
translator: claude
stale: false
---
最終更新: 2025年12月3日

## PSIRT ケースライフサイクルについて

PSIRT のアナリストとエンジニアは、GitLab の製品・サービス・インフラ内のセキュリティ脆弱性に関する報告を協力して調査します。すべての有効な報告について、PSIRT は Engineering と協力して修復を相談し、Delivery と協力して必須のセキュリティ更新について顧客に通知します。

PSIRT は以下のソースからの報告を調査します。

- HackerOne
- 顧客
- VAT
- 公開情報・ニュース
- 実証可能な悪用が伴うセキュリティツール
- 内部セキュリティリサーチ

PSIRT は、クリティカルな脆弱性が積極的に悪用されている、または公に知られている場合にインシデントを起こします。PSIRT が GitLab のインシデントプロセス内でどのように動作するかの詳細は、ハンドブックに掲載され次第 [Unified Incident Severity Matrix](/handbook/engineering/infrastructure-platforms/incident-management/#severities) を参照してください。それ以外の場合、報告は調査・記録され、定められた SLA 内で修復されます。

## PSIRT ケース調査

PSIRT ケースには 6 つのステージがあります。最初の 2 つのステージ (トリアージとアセスメント) は PSIRT 内で完了し、後半の 4 つのステージは Engineering および Delivery の複数チームと部門横断的に作業を行います。

**注:** PSIRT のトリアージプロセスは、HackerOne ケースの Triage ステージとは対応していません。

| ステージ | トリアージ | アセスメント | 修復 | 検証 | リリース | リリース後 |
| :---- | :---- | :---- | :---- | :---- | :---- | :---- |
| **担当** | Security Analyst (SA) | Security Engineer (SE) | SA & SE | Security Engineer (SE) | SA & SE | Security Analyst (SA)  |
| **内容** |  完全なアセスメントが必要かを判定するためのケース初期レビュー。  | プラットフォームごとの完全な検証とアセスメント。影響、再現手順、CWE、CVSS、影響を受けるバージョン、重大度を含む。 | SE: Engineering との Issue 相談および追加のバリアントハンティング SA: ケースの SLA および Heightened Watch 基準のモニタリング | SE: 修正の十分性を判断するためのレビュー | セキュリティリリースブログ記事による修正のリリースおよび顧客への通知  | 月次/四半期レポートの完了 クリティカルなものは、レトロおよび経営報告の完了。 |
| **想定される結果** | 無効 PSIRT エンジニアによる完全アセスメント Heightened Watch 付き PSIRT エンジニアによる完全アセスメント SIRT への引き継ぎ Vulnerability Management への引き継ぎ  | 無効 Engineering 向けに不具合をファイル Heightened Watch 付き Engineering 向けに不具合をファイル PSIRT/SIRT 共同インシデント  | バリアント発見と Issue ファイル 緩和策とワークアラウンド発見  追加情報なし Heightened Watch を PSIRT/SIRT 共同インシデントへエスカレーション | 修正なし: Engineering によるリスク受容 修正の MR を承認 修正の MR を却下  | 該当なし |  |
| **HackerOne ケース状態** | New <br/> Pending Program Review | Pending Program Review | Triaged | Triaged | Triaged | Closed |

### SLO

脆弱性のトリアージ、アセスメント、リリース後レポートに関して以下の SLO を設定しています。

| | Critical/High | Medium | Low |
| :---- | :---- | :---- | :---- |
| トリアージ | 5 日 | 5 日 | 5 日 |
| アセスメント | トリアージ引き継ぎから 10 日 | トリアージ引き継ぎから 20 日 | トリアージ引き継ぎから 20 日 |
| リリース後 | リリースから 15 日 | リリースから 30 日 | リリースから 30 日 |

## PSIRT トリアージワークフロー

PSIRT のトリアージワークフローは、重大度と特性に基づいて、システムを通じて脆弱性を正確に初期評価し、適切にルーティングすることを保証します。

以下のワークフローは PSIRT の対応範囲内のすべての報告に適用されますが、[HackerOne 報告](/handbook/security/product-security/psirt/runbooks/hackerone-process/)にのみ該当する手順を含む場合があります。

1. [HackerOne](https://hackerone.com/bugs?organization_inbox_handle=gitlab_inbox&assigned_to_group_ids%5B%5D=108264&text_query=&end_date=&reported_to_team=&sort_direction=descending&sort_type=latest_activity&start_date=)、メール、Slack で新規報告を監視します。
2. 受領確認
   - 発見者に脆弱性報告の受領を確認します
3. 完全性チェック
   - 報告を評価し、進めるための十分な詳細があるかを判定します
   - 不完全な場合: 続ける前に発見者に追加の詳細を求めます
4. 引き継ぎの確認
   - Vulnerability Management への引き継ぎ
     1. 報告がクリティカルではなく GitLab 固有の POC がない、公開済み CVE に関するものである場合、Known Exploited Vulnerabilities リストを確認します
     2. [KEV](https://www.cisa.gov/known-exploited-vulnerabilities-catalog) に掲載されていない場合: Vulnerability Management に引き継ぎます
   - SecOps への引き継ぎ:
     1. 報告がクリティカルで KEV リストに掲載されている公開済み CVE のものである場合、Heightened Watch を発動します
     2. 報告が SecOps の対応範囲内であれば、SecOps に引き継ぎます
5. 残りの報告について、Slack の Import 手順を使用して GitLab Issue を作成します
6. 報告を検証する
   - 報告をレビューし、潜在的な脆弱性があるかを判定します
   - 無効な場合: Issue 報告者に通知し、必要に応じて報告を更新したうえで、対応を打ち切ります
   - 報告が潜在的に有効である場合、重大度レベル (Critical、High、Medium、Low) を分類し、Issue の Triage Assessment セクションを完成させます
7. Security Engineer に割り当てる
8. (HackerOne) 追加の詳細や更新依頼がないか報告を監視する

## PSIRT アセスメントワークフロー

アセスメントフェーズは主に技術評価期間で、PSIRT エンジニアが詳細な分析を行いつつ、必要に応じてインシデント対応や専門知識のために他チームとの調整を維持します。

### PSIRT エンジニアのタスク

1. アサイン後、技術的脆弱性分析を完了する
   - 脆弱性の再現: 報告された脆弱性を確認し再現する
   - プラットフォームとバージョンの特定: 影響を受けるすべてのプラットフォームとバージョンを判定する
   - 悪用可能性の調査: 脆弱性がどれほど容易に悪用できるかを評価する
   - 重大度評価: 技術的な重大度レベルを評価する
   - 影響分析: STRIDE 手法によるアセスメントを行いセキュリティ影響を理解する
   - CVSS スコアリング: Common Vulnerability Scoring System のスコアを算出する
   - CWE 分類: 適切な [Common Weakness Enumeration](/handbook/engineering/development/sec/secure/products/metrics/) カテゴリを割り当てる
2. すべての発見と技術的詳細を PSIRT 調査 Issue に記録する
   - GitLab に影響がない場合、理由を特定し、発見者へのフォローアップのために Security Analyst にアサインする
   - GitLab に影響がある場合、アセスメントを完了して Engineering の修復用に Issue をファイルし、Security Analyst にバウンティ支払いと HackerOne 報告の Triaged 状態への移行を依頼する
3. IOC 分析: Issue がクリティカルである場合、Indicator of Compromise が特定できるかを判定する
   - Indicator of Compromise が特定できる場合、SIRT が IOC 悪用マーカーを探すために PSIRT/SIRT 共同調査を開始する
   - 悪用が示唆される場合、SIRT インシデントを起こす
   - それ以外の場合、Heightened Watch を実施する

### PSIRT アナリストのタスク

1. バウンティおよび管理タスクを完了する
   - GitLab に影響がない場合、発見者にフォローアップする
   - GitLab に影響がある場合:
     - HackerOne 報告については、適切なバウンティを支払い、HackerOne で Issue を Triaged 状態に移行する
     - その他の報告については、発見者にフォローアップする
   - Heightened Watch の場合、インシデントへのエスカレーションを監視する

## PSIRT 修復ワークフロー

### PSIRT エンジニアのタスク

1. 修復と並行して:
   - バリアントハンティング: 関連する脆弱性や攻撃ベクトルを探索する
   - 緩和策の特定: 潜在的な緩和策とワークアラウンドを特定する

### Breaking Change の取り扱い

破壊的変更のリスクがある解決策を評価する際、PSIRT エンジニアは以下を確認し支援する必要があります。

- この解決策はデフォルトで安全か?
- [breaking change テンプレート](https://gitlab.com/gitlab-com/Product/-/blob/main/.gitlab/issue_templates/Breaking-Change-Exception.md?ref_type=heads)に従って、PSIRT は以下の領域で支援できます。
  - _Executive Summary_ セクション: PSIRT は、破壊的変更が「_significant security risk - Severity 1 or 2_」基準に該当するかを確認する自然な所有者です。チームは重大度評価を検証し、セキュリティ上の正当性を確認すべきです。
  - _"Can we get the same outcome without a breaking change?"_ セクション: PSIRT は、破壊的変更を回避する代替修正案が存在するかについて意見を提供したり、破壊的アプローチが唯一の実行可能な修復策であることを確認したりできます。
  - _"When do you want to make the breaking change?"_ セクション: PSIRT は、特に脆弱性 SLA や FedRAMP 修復期限がタイムラインを制約する場合、タイミングについて意見を述べるべきです。
  - _Customer Communication_ セクション: PSIRT は、顧客向け文言が脆弱性の詳細を過剰に開示しないようにしつつ、なぜ破壊的変更が必要なのかを十分に説明していることをレビューすべきです。また、セキュリティリリースブログ記事と一般的な破壊的変更の通信との調整の問題もあります。
  - _Deprecation issue linkage_ セクション: テンプレートには、VP の承認後に公開のデプリケーション Issue を作成すると書かれています。セキュリティに動機づけられた変更については、PSIRT が公開 Issue に何が記載されるかをレビューし、早期開示を防ぐべきです。

## PSIRT 検証ワークフロー

検証フェーズは、リリースプロセスに進む前に脆弱性が適切に解決されていることを保証する品質ゲートとして機能します。修復と検証のフェーズはループで動作します — 検証中に修正が不十分と判定された場合、プロセスは Engineering の修復に戻り、修正が完全かつ十分とみなされるまで追加の作業が行われます。

### PSIRT エンジニアのタスク

1. MR レビューで[修正を検証する](/handbook/security/product-security/psirt/runbooks/verifying-security-fixes/)
   - 修正が不適切な場合、MR を却下する
   - 修正が不適切な場合、MR を承認し、影響を受けるプラットフォーム、バージョン、重大度、CWE、CVSS スコアを確認する

## PSIRT リリースワークフロー

パッチリリースはエンジニアとアナリストの共同責任です。
一般情報については[パッチリリースにおける Product Security Incident Response Team の一般的なプロセス](/handbook/security/product-security/psirt/runbooks/security-engineer/)を、具体的な手順については [PSIRT パッチリリース業務](https://internal.gitlab.com/handbook/security/product_security/psirt/runbooks/security_release/)を参照してください。

## PSIRT リリース後ワークフロー

リリース後タスクはエンジニアとアナリストの間で共有されます。

### PSIRT エンジニアのタスク

1. リリースが正常に完了したことを確認する。
2. Release Retro Issue を作成または貢献する。

### PSIRT アナリストのタスク

1. Issue がクリティカルな場合、レトロスペクティブをスケジュールし、経営報告を準備します。Issue が SIRT/PSIRT の共同責任であった場合は、SIRT と連携して作業します。
2. [Release Retro Issue](https://gitlab.com/gitlab-com/gl-security/product-security/appsec/appsec-team/-/issues/new?description_template=release_retro) を作成または貢献します。
3. Monthly Business Report に追加します (TBD)。
4. HackerOne 報告がクローズされていることを確認します。
