---
title: "GitLab.com のモニタリング"
description: "このポリシーは GitLab.com のモニタリングに関する要件を規定します"
controlled_document: true
tags:
  - security_policy
  - security_policy_caplscsi
upstream_path: "/handbook/engineering/gitlab-com/policies/monitoring/"
upstream_sha: "27d1e9b21984fe11eff53db49a85c2ba08ef901c"
translated_at: "2026-04-28T15:26:32Z"
translator: claude
stale: false
---

<span class="inline-block rounded px-2 py-0.5 text-xs font-medium" style="background-color:#E24329;color:#ffffff">Visibility: Audit</span>

## 目的

このポリシーは、GitLab.com サービスの継続的なモニタリング、ロギング、およびキャパシティプランニングを GitLab がどのように確保するかを規定します。

GitLab はクラウド環境内のさまざまなポリシーおよび合意事項への準拠を確保し、潜在的なセキュリティ問題を迅速に特定するためにこれらの対策を実施しています。

## スコープ

このポリシーは、GitLab の法令、規制、および契約上の要件を支援するすべての GitLab.com モニタリングサービスに適用されます。

## 役割と責任

| 役割 | 責任 |
|---|---|
| GitLab チームメンバー | この手順の要件に従う責任を負う |
| Engineering、Security | この手順を実施および実行する責任を負う |
| Engineering（コードオーナー） | この手順への重要な変更および例外を承認する責任を負う |

## 手順

- GitLab は[サービスレベル契約](/handbook/engineering/infrastructure-platforms/service-level-agreement/)で可用性の計算方法を定義しています
- GitLab はログの収集と分析の方法を定義しています
- GitLab はキャパシティ管理の手順を定義しています

### ログ管理

GitLab.com サービスはネットワーク、システム、およびアプリケーションのログを出力し、それらはインシデントおよびセキュリティインシデント調査の基盤を提供するために保存、処理、および検索されます。

ログは短期ストレージと長期ストレージに保存され、それぞれ固有の保持ポリシーがあります:

- 短期ストレージ: 30 日間
- 長期ストレージ: 365 日間

短期ストレージのログはアプリケーションアクティビティ、スパムイベント、一時的なエラー、システムおよびネットワーク認証イベント、セキュリティイベントなどを積極的に監視するために使用されます。

長期ストレージのログは[レコード保持・廃棄](/handbook/security/policies_and_standards/records-retention-deletion/)ポリシーへの準拠のために使用されます。長期ストレージのログは短期ストレージのログよりも粒度が低く、詳細度も低くなっています。

アーキテクチャ、ツール、およびワークフローの詳細な概要は[ロギング](https://gitlab.com/gitlab-com/runbooks/-/blob/master/docs/logging/README.md)ページに記載されています。

### キャパシティプランニング

適切なタイミングで GitLab.com インフラをスケールし、インシデントを防止するために、GitLab はキャパシティプランニングプロセスを採用しています。

キャパシティプランニングプロセスの主な目的は、過去のデータ分析を実施して将来の成長を予測することです。
この分析から、GitLab は飽和点に関する情報を提供するプロセスを活用し、それをサービスオーナーに提供します。
サービスオーナーはこのプロセスを使用してこの情報に基づいて行動します。

予測ツールに使用されるデータソースは、GitLab.com の標準モニタリングの一環として使用される過去の飽和率および使用率データです。

キャパシティプランニングプロセスの出力は ORANGE として分類され、[データ分類基準](/handbook/security/policies_and_standards/data-classification-standard/#orange)に従って取り扱われなければなりません。

アーキテクチャ、ツール、およびワークフローの詳細な概要は[キャパシティプランニング](/handbook/engineering/infrastructure-platforms/capacity-planning/)ページに記載されています。

## 例外

このポリシーへの変更および例外は、GitLab.com のモニタリングを担当する適切なインフラチームの承認が必要です。

## 参考資料

- [レコード保持・廃棄](/handbook/security/policies_and_standards/records-retention-deletion/)
