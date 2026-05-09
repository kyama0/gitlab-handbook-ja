---
title: "記録の保持と廃棄"
toc_hide: true
controlled_document: true
tags:
  - security_standard
  - security_standard_cmma
upstream_path: /handbook/security/policies_and_standards/records-retention-deletion/
upstream_sha: 1e195b58b9f249ff10bd0e705106c320fee86141
translated_at: "2026-05-10T00:00:00Z"
translator: claude
stale: false
---

{{< label name="Visibility: Audit" color="#E24329" >}}

## 目的

GitLab の記録保持・廃棄標準は、重要な GitLab 記録に関する具体的な保持および安全な廃棄要件を列挙しています。これらの最小要件は、すべての GitLab [tier 1 および tier 2 のクリティカルシステム](/handbook/security/security-assurance/security-risk/storm-program/critical-systems/) に対する設計および保守の判断を導きます。

## 適用範囲

以下の保持および安全な廃棄要件は、GitLab [tier 1 および tier 2 のクリティカルシステム](/handbook/security/security-assurance/security-risk/storm-program/critical-systems/) に保存されている、下表に列挙されたすべての GitLab 記録に適用されます。

## 役割と責任

| 役割  | 責任 |
|-----------|-----------|
| GitLab チームメンバー | 本管理対象ドキュメントの要件に従う責任を負います。 |
| Security Compliance Team | 本管理対象ドキュメントをレビューし、保守する責任を負います。 |
| Control Owners | 以下の要件をサポートする手順を定義し実装する責任を負います。 |
| Security Assurance Management（Code Owners） | 本管理対象ドキュメントへの重大な変更および例外を承認する責任を負います。 |

## 保持と廃棄の要件手順

| 記録                                             | 保持要件     | 廃棄要件      |
|----------------------------------------------------|---------------------------|---------------------------|
| 事業継続計画の承認                 | 3 年                   | [GCP/AWS Secure Deletion] |
| 事業継続テストの結果                   | 3 年                   | [GCP/AWS Secure Deletion] |
| 本番バックアップテスト                            | 1 年                    | [GCP/AWS Secure Deletion] |
| 本番変更                                 | 3 年                   | [GCP/AWS Secure Deletion] |
| セキュリティポリシーレビュー／承認                   | 3 年                   | [GCP/AWS Secure Deletion] |
| 利用規約への同意                        | ユーザーがアクティブな間 | [GCP/AWS Secure Deletion] |
| アクセスリクエスト／変更記録                      | 1 年                    | [GCP/AWS Secure Deletion] |
| チームメンバーのオフボーディング Issue                     | 現地法による                   | [GCP/AWS Secure Deletion] |
| システムアクセスレビュー                              | 1 年 3 か月           | [GCP/AWS Secure Deletion] |
| 共有およびグループ認証レビュー            | 1 年 3 か月           | [GCP/AWS Secure Deletion] |
| 本番監査ログ                              | 1 年                    | [GCP/AWS Secure Deletion] |
| GCP ファイアウォール構成成果物               | 1 年                    | [GCP/AWS Secure Deletion] |
| 職務役割と責任                     | 1 年                    | [GCP/AWS Secure Deletion] |
| 顧客へのセキュリティインシデント連絡       | 3 年                   | [GCP/AWS Secure Deletion] |
| 人事ファイル記録                             | 現地法による      | [GCP/AWS Secure Deletion] |
| 1:1 ミーティングノート                                  | 現地法による      | [GCP/AWS Secure Deletion] |
| オンボーディングチケット                                | 現地法による                    | [GCP/AWS Secure Deletion] |
| 年次リスク評価レポート                      | 2 年                   | [GCP/AWS Secure Deletion] |
| リスク対応計画                               | 3 年                   | [GCP/AWS Secure Deletion] |
| セキュリティ観察 Issue                        | 3 年                   | [GCP/AWS Secure Deletion] |
| 取締役会議事録                 | 無期限                | N/A                       |
| リリースノート                                      | 1 年                    | [GCP/AWS Secure Deletion] |
| クリティカルシステムのアクティビティログ                          | 60 日                   | [GCP/AWS Secure Deletion] |
| セキュリティ監視アラート／メトリクス                 | 3 年                   | [GCP/AWS Secure Deletion] |
| ベンダーセキュリティレビュー Issue                      | 3 年                   | [GCP/AWS Secure Deletion] |
| 顧客が署名した MSA                              | 無期限                | N/A                       |
| ベンダー NDA                                       | 無期限                | N/A                       |
| 年次セキュリティアウェアネストレーニング記録         | 3 年                   | [GCP/AWS Secure Deletion] |
| セキュアコーディングトレーニング記録                   | 2 年                   | [GCP/AWS Secure Deletion] |
| ペネトレーションテストレポートおよび是正 Issue | 2 年                   | [GCP/AWS Secure Deletion] |
| システムパッチ記録                               | 1 年                    | [GCP/AWS Secure Deletion] |
| ソースコードスキャン結果                       | 1 年                    | [GCP/AWS Secure Deletion] |
| ZenDesk チケット                                    | 3 年                   | [GCP/AWS Secure Deletion] |
| 非公開情報レビュー記録               | 3 年                   | [GCP/AWS Secure Deletion] |
| ロールベースのセキュリティトレーニング記録            | 3 年                   | [GCP/AWS Secure Deletion] |
| 監査ログレビュー記録                       | 3 年                   | [GCP/AWS Secure Deletion] |
| セキュリティアセスメントレポート／観察            | 3 年                   | [GCP/AWS Secure Deletion] |
| セキュリティ構成レビュー／アラート              | 3 年                   | [GCP/AWS Secure Deletion] |
| セキュリティ認可記録                     | 3 年                   | [GCP/AWS Secure Deletion] |
| システム接続要件                     | 3 年                   | [GCP/AWS Secure Deletion] |
| 構成変更記録                         | 3 年                   | [GCP/AWS Secure Deletion] |
| セキュリティ影響分析記録                   | 3 年                   | [GCP/AWS Secure Deletion] |
| 本番資産インベントリ                         | 3 年                   | [GCP/AWS Secure Deletion] |
| BC トレーニング記録                                | 3 年                   | [GCP/AWS Secure Deletion] |
| 本番バックアップ                                 | 組織別に定義  | [GCP/AWS Secure Deletion] |
| 顧客データバックアップ                              | 組織別に定義  | [GCP/AWS Secure Deletion] |
| 雇用申請書および面接ノート（米国ベースの応募者のみ）| 4 年（2021-07 更新）|N/A          |
| PII データを含む一時ファイル                      | 業務目的で必要な間 | システムの既定の削除スケジュールに従う            |

## 例外

これらの要件への例外は、[情報セキュリティポリシー例外管理プロセス](/handbook/security/controlled-document-procedure/#exceptions) に従って追跡されます。

## 参考資料

- [管理対象ドキュメント手順](/handbook/security/controlled-document-procedure/)
- [データ分類標準](/handbook/security/policies_and_standards/data-classification-standard/)
- [Google Cloud Platform データ削除](https://cloud.google.com/security/deletion)
