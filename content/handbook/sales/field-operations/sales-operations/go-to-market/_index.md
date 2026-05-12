---
title: "Sales Operations Go To Market"
noindex: true
upstream_path: /handbook/sales/field-operations/sales-operations/go-to-market/
upstream_sha: 1e195b58b9f249ff10bd0e705106c320fee86141
translated_at: "2026-05-12T00:00:00Z"
translator: claude
stale: false
---

## Sales Operations GTM ページへようこそ

このページの目的は、主要な Go To Market ポリシーとリンクをすべて 1 か所に集約・文書化し、使いやすくすることです。

## アカウント所有のルール・オブ・エンゲージメント

- [アカウント所有のルール・オブ・エンゲージメントハンドブック](/handbook/sales/field-operations/gtm-resources/)

## テリトリーテーブル

- [アカウント所有テリトリーテーブルハンドブック](/handbook/sales/territories/)

## Territory Success Planning (TSP)

TSP は、Salesforce アカウントを正しいセールステリトリーとそれぞれのオーナーに適切にセグメント化・ルーティングするための自動化されたプロセスワークフローです。これにより、どのアカウントを誰が所有すべきかが明確になり、手動管理のための運用負荷が削減されます。TSP フィールドは、必ずしも現在の Go To Market アプローチではなく、現時点で持っている最良のデータをリアルタイムに反映するように設計されています。TSP 情報を [上書きするリクエスト](https://gitlab.com/gitlab-com/www-gitlab-com/-/edit/tsp-process-overview-updates/source/handbook/sales/field-operations/sales-operations/go-to-market/index.html.md?from_merge_request_iid=49546#process-for-requesting-tsp-changes) は、アカウントの **Account Review** セクションからも提出できます。

### 主な TSP ワークフローのコンポーネント

1. **アカウントルーティング**（*Next Owner レコメンデーションプロセス*）:
    - Sales Segment（つまり、アカウント階層の最大従業員数）
    - プライマリアカウントの HQ アドレス（階層の最上位の Parent Account のもの）
        - 両方のインプットは、標準化されたアカウントエンリッチメントツールを通じて以下の順序で形成されます:
        - Manual Override > DataFox > DiscoverOrg > Ship-To > Bill-To
    - 次に LeanData がこれら TSP インプット値を [SSoT Territory Mapping File](https://docs.google.com/spreadsheets/d/1iTDCaHN-i_xrfiv_Tkg27lYbZ3LHsERySkvv4cPsSNo/edit#gid=720021722) と照合し、Approved Next Owner と Territory を自動的に出力します。

1. **アカウント割り当て**（*Account Transfer プロセス*）:
    - アカウントを正しいオーナーに（再）割り当て
    - Account Territory、Sales Segment、Employees フィールドの更新

### 企業属性 TSP フィールド

- `[TSP] Sales Segment`: アカウント階層内の最大従業員数に基づくセグメント（最大が親か子かは問わない）。
- `[TSP] Account Employees`: **この特定のアカウント** の従業員数
- `[TSP] MAX Family Employees`: 階層内の最大従業員数（数値）
- `[TSP] Address (Street, City, State, Post Code, Country)`: TSP データ階層に基づく Ultimate Parent Account の所在地
- `[TSP] Geo Story`: TSP データ階層からの住所データのソース

### 所有権 TSP フィールド

- `[TSP] Next Approved Owner`: [SSoT Territory Mapping File](https://docs.google.com/spreadsheets/d/1iTDCaHN-i_xrfiv_Tkg27lYbZ3LHsERySkvv4cPsSNo/edit#gid=720021722) で決定されるテリトリーのオーナー
- `[TSP] Transfer Date`: アカウントの所有権が `TSP Next Approved Owner` に変わる日付

### テリトリー TSP フィールド

- `[TSP] Territory`: [SSoT Territory Mapping File](https://docs.google.com/spreadsheets/d/1iTDCaHN-i_xrfiv_Tkg27lYbZ3LHsERySkvv4cPsSNo/edit#gid=720021722) に基づき、アカウントが該当するテリトリー
- `[TSP] Region`: アカウントが該当するセールステリトリーのリージョン
- `[TSP] Subregion`: アカウントが該当するセールステリトリーのサブリージョン
- `[TSP] Area`: アカウントが該当するセールステリトリーのエリア

### アカウント除外

現在の TSP 設計は、当社の Geo セールスアカウントとテリトリーをサポートしています。

- Named Accounts、PubSec Accounts、Channel Accounts は手動割り当てが必要なため、現時点では対応していません。
- これらのアカウントは意図的に TSP 自動化プロセスからフィルタリングされており、自動再割り当ての影響を受けません。

## TSP 変更リクエストのプロセス

データエンリッチメントツールが古い、または不正確（プライマリ住所または従業員数）な場合、この情報を上書きするリクエストを提出できます。

1. **リクエスト:**
    - 以下のフィールドに希望する TSP 情報を入力します（Account、Employee Count、またはその両方）。
    - 正しいデータのソースを必ず含めてください（ROE には引き続き従う必要があります）
          - `[User Input] Employee Count`
          - `[User Input] Employee Source`
          - `[User Input] Address Street`
          - `[User Input] Address City`
          - `[User Input] Address State`
          - `[User Input] Address Post Code`
          - `[User Input] Address Country`
          - `[User Input] Address Source`

1. **Operations レビュー:**
Ops は定期的にこれらのリクエストをレビューし、`[TSP] Override Status` フィールドで回答します:
    - **Approved** - アカウント変更が承認され、`[TSP] Effective Date` が Ops により設定されます。
    - **Rejected** - 理由が `[TSP] Decision Rationale` フィールドに追加されます。
    - **Needs Approval/More Info** - 必要な情報が `[TSP] Decision Rationale` フィールドに追加されます。<p/>
1. **実行:**
    - 承認された TSP 変更が再反映されるまでの所要時間は通常 24〜48 時間です。
    - `[TSP] Effective Date` が設定されたアカウントは、毎晩 `[TSP] Next Approved Owner` に再ルーティングされます。
    - `Account Territory`、`Sales Segment`、`Employees` の各フィールドも TSP 転送時に更新され、アカウントを継続的にアラインメントします。

## **Primary Quote システム**

Primary Quote システムは、SFDC における 1:1 の関係で、クォートの合計トランザクション金額を関連商談の金額と接続します。これは、私たちがブッキングするのと同じ金額を予測することを保証し、クォートが Zuora 課金に送信されるときにさらなる自動化を可能にします。複数のクォートが必要なセールスシチュエーション（例: 小規模ディール案と大規模ディール案）をサポートするため、Sales 担当者は自身のクォートのうちどれが「Primary」であるかを識別できます。

[Primary Quote の技術ドキュメントはこちら:](/handbook/sales/field-operations/sales-systems/gtm-technical-documentation/#primary-quote-system)
