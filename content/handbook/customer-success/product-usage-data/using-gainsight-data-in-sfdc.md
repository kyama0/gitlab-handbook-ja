---
title: "Gainsight: Salesforce での Gainsight 統計の活用"
description: "このページは、GitLab チーム全体が Salesforce で利用可能な Gainsight の指標・フィールド・エントリー・その他の属性を把握するためのものです。例: 顧客の健全性を Salesforce に同期する際に、それらのフィールドが何であり、どのように使用するかを知ることが重要です。"
upstream_path: /handbook/customer-success/product-usage-data/using-gainsight-data-in-sfdc/
upstream_sha: b4eeb07f0d5f46e2fc5f8572be1a2547261aed89
translated_at: "2026-04-26T00:00:00Z"
translator: claude
stale: false
---

<link rel="stylesheet" type="text/css" href="/stylesheets/biztech.css" />

## 概要

このページは、GitLab チーム全体が Salesforce で利用可能な Gainsight の指標・フィールド・エントリー・その他の属性を把握するためのものです。例: 顧客の健全性を Salesforce に同期する際に、それらのフィールドが何であり、どのように使用するかを知ることが重要です。

一般的な製品利用レポーティングの詳細については、[Gainsight での製品利用レポーティングの使用](/handbook/customer-success/product-usage-data/using-product-usage-data-in-gainsight/)を参照してください。

## アカウント

### 顧客属性

| フィールド名 | 説明 | ベストプラクティス | 参照 |
|:---|:---|:---|:---|
| [GS] Customer Conversion Source | 目的は顧客がどこから来たかを理解すること — これはソーシング（例: マーケティング/SDR のアナロジー）に関するものです。 | 顧客のオンボーディング中に、これらのフィールドを Gainsight に入力する必要があります。 | [リンク](/handbook/customer-success/csm/gainsight/deployment-types/) |
| [GS] First Value Date | Time to First Value は、オリジナル契約日から First Value Date を差し引いて計算されます。これは C360 の顧客属性セクションへの手動入力です。 | クラウドライセンス統計が Gainsight にある場合、既知のライセンス利用率が 10% 以上になったときにシステムによって自動的に入力されます。クラウドライセンス統計がない場合は、CSM が最善の見積もりに基づいて日付フィールドを手動で更新する責任があります。<br>CSM が必要なアクション: Gainsight にクラウドライセンス統計があることを確認し、ない場合は First Value Date を手動で更新する | [リンク](/handbook/customer-success/csm/onboarding/#time-to-first-value) |
| [GS] Geo? | 顧客は Geo を使用しているか？CSM が手動で入力します |  | [リンク](https://docs.gitlab.com/ee/administration/geo/index.html) |
| [GS] GitLab Issue Link | アカウント関連の GitLab Issue |  |  |
| [GS] Google Doc Notes | Google ドキュメントのメモ URL。CSM が手動で入力します |  |  |
| [GS] High Availability? | 顧客は高可用性（HA）ソリューションや/またはダウンタイムなしのアップグレードを必要としているか？CSM が手動で入力します |  | [リンク](https://docs.gitlab.com/ee/administration/reference_architectures/) |
| [GS] Hosting | 顧客の（主要な）ホスティング設定は何か？CSM が手動で入力します |  | [リンク](/handbook/customer-success/csm/gainsight/deployment-types/#hosting) |
| [GS] Last Activity Date | このフィールドは、顧客に対してログされた最新のコール・ミーティング・メールのアクティビティエントリを反映します。詳細はハンドブックを参照してください |  | [リンク](/handbook/customer-success/csm/gainsight/timeline/#last-activity-date) |
| [GS] Last CSM Activity Date | 顧客との同期的な会話を追跡するために CSM が GS に記録した最後のアクティビティ |  | [リンク](/handbook/customer-success/csm/gainsight/timeline/#last-activity-date) |
| [GS] Lifecycle Stage | 各顧客のデプロイは以下のライフサイクルステージを経過します: <br>オンボーディング<br>実装<br>採用<br>最適化と成長 |  | [リンク](/handbook/customer-success/customer-success-vision/#lifecycle-stages) |
| [GS] Provider | 顧客が使用する（クラウド）プロバイダーまたはオンプレミスかを記録します。CSM が手動で入力します |  | [リンク](/handbook/customer-success/csm/gainsight/deployment-types/#provider) |
| [GS] Slack Channel Link | 顧客の Slack チャンネル URL |  |  |
| [GS] Summary | これは CSM がアカウントを管理するための関連する有用な情報を追加する一般的なサマリーフィールドです。 |  | [リンク](/handbook/sales/gainsight/account-planning/#the-account-snapshot) |
| [GS] CSM Prioritization | このフィールドはアカウントの優先順位付けに使用され、通常は更新または拡大の機会のためです。詳細はハンドブックを参照してください |  | [リンク](/handbook/sales/field-operations/customer-success-operations/gainsight/#gainsight-to-salesforce-sync-data) |
| [GS] Total Number of Account Plans | レコードに記録されたアカウントプランの総数 |  |  |
| [GS] Total Number of Success Plans | レコードに記録されたサクセスプランの総数 |  |  |
| [GS] Triage Issue URL | トリアージ Issue へのディープリンク。トリアージ期間が完了したらリンクを削除してください。CSM が手動で入力します | 顧客がリスクにある場合の GitLab トリアージ Issue へのクイックリンク | [リンク](/handbook/sales/field-operations/customer-success-operations/gainsight/#gainsight-to-salesforce-sync-data) |
| [GS] Support Issues Measure | これは Gainsight から Salesforce にプッシュされる製品リスク指標です |  |  |

### 顧客の健全性

| フィールド名 | 説明 | ベストプラクティス | 参照 |
|:---|:---|:---|:---|
| [GS] Architecture Diagram Link | 顧客のアーキテクチャ図の URL（GitLab または他の場所に保存されているもの）。CSM が手動で入力します |  |[リンク](/handbook/sales/field-operations/customer-success-operations/gainsight/#gainsight-to-salesforce-sync-data)|
| [GS] Health: CD | CD ユースケースの顧客使用状況の自動スコアリング。詳細はハンドブックを参照してください | CD の顧客全体の採用を測定します。ユースケース採用の高レベルなビューに役立ち、他のユースケースとの比較にも非常に役立ちます。 |[リンク](/handbook/customer-success/product-usage-data/use-case-adoption/#continuous-delivery-cd)|
| [GS] Health: CI | CI ユースケースの顧客使用状況の自動スコアリング。詳細はハンドブックを参照してください | 顧客がチーム全体で CI を使用しているかを知る役立つ指標。CI は GitLab のスティッキーな機能であるため、既存顧客のリスクと強みの良い指標です |[リンク](/handbook/customer-success/customer-health-scoring/#devops-score)|
| [GS] Health: DevSecOps | DevSecOps ユースケースの顧客使用状況の自動スコアリング（Ultimate のみに適用）。詳細はハンドブックを参照してください | 顧客が Ultimate レベルの機能を使用しているかを知るために非常に重要です。ダウンサイドリスクの良い指標 |[リンク](/handbook/customer-success/product-usage-data/use-case-adoption/#devsecops)|
| [GS] Health: License Utilization | 購入数に対するライセンス消費の健全性。詳細はハンドブックを参照してください | 顧客が購入したライセンスを適切にデプロイしているかを知るために非常に役立ちます。顧客が赤または黄の場合、リスクの良い警告信号 |[リンク](/handbook/sales/field-operations/customer-success-operations/gainsight/#gainsight-to-salesforce-sync-data)|
| [GS] Health: Overall Product Usage | ライセンス利用率やユースケースなど、様々な製品利用健全コンポーネントのサマリー健全性 | ライセンス利用率とユースケースの全体的な使用スコアを見ることで、顧客が製品をどのように採用しているかを知るのに役立ちます |[リンク](/handbook/sales/field-operations/customer-success-operations/gainsight/#gainsight-to-salesforce-sync-data)|
| [GS] Health: SCM | SCM の採用は以下に基づいて測定されます: 過去 28 日間にマージリクエストを実行したユーザー数 / 販売されたライセンスの合計。SCM ユースケースの顧客使用状況の自動スコアリング。詳細はハンドブックを参照してください | SCM をユースケースとして顧客の採用と使用状況を理解するのに役立ちます。例えば、顧客は SCM のために購入して赤になっているのか、またはまったく気にしていないのか？ |[リンク](/handbook/customer-success/product-usage-data/use-case-adoption/#source-code-management-scm)|
| [GS] Health Score Value | アカウント健全スコアは、顧客の多角的なビューのための主要指標の集約です。0〜100 の数値で表されます。 |  |[リンク](/handbook/customer-success/customer-health-scoring/#customer-health-score)|
| [GS] Overall Health Score | Gainsight から SFDC にプッシュされたこの顧客の全体健全スコアの色 | 顧客の状況を広く理解するための良い指標 |[リンク](/handbook/customer-success/csm/health-score-triage/#health-assessment-guidelines)|
| [GS] CSM Sentiment | CSM が所有する場合、これは CSM がこのアカウントの健全性がどうあるべきかと考えているものです。Gainsight はこのフィールドの SSOT であり、その値は Gainsight でのみ更新できます。 | CSM 主導の場合、これは CSM がアカウントについて感じる認識を示します。黄または赤の場合にリスクを発見するのに役立ちます |[リンク](/handbook/customer-success/csm/health-score-triage/#tam-sentiment)|
| [GS] Health: User Engagement | ユースケースに関係なく、GitLab でのユーザーレベルの全体的なエンゲージメントを測定します。 | GitLab にログインしてアクティブなユーザー数を把握するのに役立ちます |[リンク](/handbook/customer-success/csm/health-score-triage/#gainsight-scorecard-attributes-and-calculations)|

## 商談

| フィールド名 | 説明 | 参照 |
|:---|:---|:---|
| Opportunity Health | 商談の健全性は、商談時のアカウントの健全性であり、クローズまで商談全体を通じて更新されます — GS で入力されます | [リンク](/handbook/customer-success/csm/renewals/#account-health)  |
| Risk Reasons | リスクの理由は、その更新商談に関連する CSM によって入力されます — GS で入力されます | [リンク](/handbook/customer-success/csm/renewals/#risk-reason)  |
| Risk Type | リスクの種類は、更新で直面しているリスクの種類（ダウンティア・シートロス・フルチャーンなど）について CSM が入力します — GS で入力されます | [リンク](/handbook/customer-success/csm/renewals/#risk-type)  |

## コンタクト

| フィールド名 | 説明 | 参照 |
|:---|:---|:---|
| Company Person Inactive Contact | CSM が非アクティブなコンタクトを特定できるようにします | |
| Company SFDC Account Id | Salesforce の顧客アカウントに関連する ID | [リンク](/handbook/sales/field-operations/customer-success-operations/gainsight/#salesforce-connector)  |
| Email | Company Person のメール ID | [リンク](/handbook/sales/field-operations/customer-success-operations/gainsight/#salesforce-connector)  |
| First Name | Company Person の名 |  |
| GitLab Role | ビジネスの特定ユーザーに割り当てられたアクセスレベルを決定します | [リンク](/handbook/sales/field-operations/customer-success-operations/cs-ops-programs/#gitlab-admin-contacts)  |
| GS Email Opt Out | Gainsight・Salesforce・Marketo 間で同期するコンタクトのグローバルオプトアウトフラグ |  |
| Initial Source | リード/コンタクトのソース |  |
| Last Name | コンタクトの姓 |  |
| SFDC Contact ID | コンタクトの識別子 |  |
| Title | コンタクトの役職 |  |

## アクティビティ

| フィールド名 | 説明 | 参照 |
|:---|:---|:---|
| Program Emails | プログラムメールの一部は、SFDC のアカウントページのアクティビティ履歴セクション内にカタログ化されています。そこでメールの件名行のログを確認でき、`Assigned to` フィールドが「Gainsight Integration」になっています |  |
| Survey Results | これらの調査は GitLab に対する顧客のロイヤルティ・満足度・熱意を測定するために使用され、顧客の採用に関する早期警告システムとして機能できます。 | [リンク](/handbook/sales/field-operations/customer-success-operations/cs-ops-programs/nps-csat-scores/)|
| Timeline Activities | Gainsight のタイムラインビューは、顧客とのアクティビティの時系列概要を提供します。サクセスの取り組みにおける対話と進捗状況を時間の経過とともに確認するための貴重なツールです。 | [リンク](/handbook/customer-success/csm/gainsight/timeline/#how-to-log-activities-in-timeline)  |

## 顧客サブスクリプション

| フィールド名 | 説明 | 参照 |
|:---|:---|:---|
| [GS] Time to First 10 | ライセンス利用率 10% に達するまでの日数 | [リンク](/handbook/customer-success/csm/health-score-triage/#license-usage-health-table) |
| [GS] Time to First 50 | ライセンス利用率 50% に達するまでの日数 | [リンク](/handbook/customer-success/csm/health-score-triage/#license-usage-health-table) |
| [GS] Time to First 80 | ライセンス利用率 80% に達するまでの日数 | [リンク](/handbook/customer-success/csm/health-score-triage/#license-usage-health-table) |
| [GS] Time to First CI | ハンドブックで定義された健全な割合のユーザーが CI をデプロイするまでの日数 | [リンク](/handbook/customer-success/product-usage-data/use-case-adoption/#continuous-integration-ci) |
| [GS] Time to First SCM | ハンドブックで定義された健全な割合のユーザーが SCM をデプロイするまでの日数 | [リンク](/handbook/customer-success/product-usage-data/use-case-adoption/#source-code-management-scm) |
| [GS] Time to First DSC | ハンドブックで定義された健全な割合のユーザーが DevSecOps をデプロイするまでの日数 | [リンク](/handbook/customer-success/product-usage-data/use-case-adoption/#devsecops) |
| [GS] Time to First CD | 近日公開！ |  |
