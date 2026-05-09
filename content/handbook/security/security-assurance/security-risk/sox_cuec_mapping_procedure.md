---
title: "SOX CUEC マッピング手順"
upstream_path: /handbook/security/security-assurance/security-risk/sox_cuec_mapping_procedure/
upstream_sha: 1e195b58b9f249ff10bd0e705106c320fee86141
translated_at: "2026-05-09T05:30:11Z"
translator: claude
stale: false
---

## 目的

ITGC SR.1 - SOC Report Review に従い、GitLab は内部統制を SOX 対象アプリケーションに関連付けられた各 SOC レポートに対して年次 CUEC マッピングを実施し、SOC レポートで概説された CUEC 要件に対処するためにコントロールが適切に設計されていることを確認します。この活動は、前会計年度に対する最大限のカバレッジを得るために、各会計年度の Q1 に実行されます。

## 範囲

正式な CUEC マッピングは、経営陣が定義する SOX 対象範囲のサードパーティ SaaS アプリケーションに限定されます。

### カバレッジ

すべてのサードパーティ SOX システムの SOC1 レポートおよび前会計年度（2/1/20xx-1/31/20xx）をカバーするブリッジレターを取得します。SOC1 レポートが入手不可能な場合、SOC2 レポートを取得します。

## 役割と責任

| 役割 | 責任 |
| ------ | ------ |
| Security Risk - TPRM | 副資料の収集とベンダーインターフェースを実行 - CUEC マッピングテンプレートを作成し、CUEC および CSOC を入力 |
| Internal Audit | [SOX システムのスコープ](https://docs.google.com/spreadsheets/d/1ckVMp73RIMTVJYkVNf4OHc-QEXwS5Hxb3wGiXNlKouI/edit#gid=61580762) を定義し、マッピング活動を促進 |
| Business Owners | マッピング活動に参加し、最終承認を提供 |

## 手順

### 副資料収集（Security Risk）

Security Risk はサードパーティセキュリティリスクマネジメント活動の実行責任を負うため、必要な副資料、特に SOC レポートとブリッジレターの収集を通じて CUEC 活動をサポートします。Security Risk は次のプロセスに従います。

1. IA の SOX リストを活用してシステムのスコープを検証する
1. 活動追跡と透明性/可視性のために GitLab Epic を作成する。この Epic は前年のものをモデルにできます。
1. リクエストを開始し、該当するサードパーティのレポートとブリッジレターを取得する
1. SOC レポートで CSOC をレビューし、すべての CSOC レポートを取得するためのリクエストを開始する。Security Risk は GitLab のビジネスプロセスが CSOC に依存しているかどうかを判断しません。そのため、すべての CSOC SOC レポートをリクエストします。
1. レポートが前会計年度（2/1/20xx-1/31/20xx）をカバーしていることを検証する。カバレッジが不足している場合、追加のリクエストが送信されます。

このプロセス全体を通じて、Security Risk は、IA に引き渡す前に、要求されたレポートと CUEC マッピングテンプレートの作成のステータスを管理します。

### Google Sheet CUEC テンプレート作成（Security Risk）

CUEC マッピング活動を正式に引き渡すために、Security Risk は CUEC マッピングテンプレートを作成し、対象範囲の SOC レポートから CUEC/CSOC を追加します。Security Risk は次のプロセスに従います。

1. 対象範囲の各レポート（CSOC を含む）の CUEC マッピングテンプレートを Google Sheets で作成する
1. テンプレート内のすべての CUEC をリスト化する
1. CUEC マッピングテンプレートと該当するレポートを Internal Audit と共有する

### ITGC およびビジネスプロセスコントロールマッピング（Business Owners/Internal Audit）

更新された SOC レポートを取得すると、Internal Audit は次のことを行います。

- Business Owner と協力して、内部統制を CUEC にマッピングする
- Business Owner と調整して SOC レポートの所見をレビューし、ビジネスおよび ITGC コントロールへの影響を評価する
- Business Owner と調整してユーザーコントロールに関する考慮事項をレビューし、ユーザーコントロール考慮事項に対処するための適切な GitLab コントロールが整備されていることを確認する
- Business Owner の承認のステータスを管理する

### 承認（Business Owners）

マッピング活動の終了時に、Business Owner はマッピングの最終承認を提供する必要があります。この活動は Internal Audit によって管理されます。

## 例外

該当なし

## 参考文献

- [GitLab SOX ITGC Compliance](https://internal.gitlab.com/handbook/it/it-compliance/)
- [Third Party Risk Management](/handbook/security/security-assurance/security-risk/third-party-risk-management/)
