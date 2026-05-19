---
title: "GitLab.com のバックアップ"
description: "このポリシーは GitLab.com のバックアップに関する要件を規定します"
controlled_document: true
tags:
  - security_policy
  - security_policy_caplscsi
upstream_path: "/handbook/engineering/gitlab-com/policies/backup/"
upstream_sha: "27d1e9b21984fe11eff53db49a85c2ba08ef901c"
translated_at: "2026-04-28T15:26:32Z"
translator: claude
stale: false
lastmod: "2026-04-22T12:58:30+10:00"
---

{{< label name="Visibility: Audit" color="#E24329" >}}

## 目的

このポリシーは、GitLab が GitLab.com のバックアップと復元をどのように実施、監視、および検証するかを概説します。
これらの手順は、お客様データのデータリカバリとディザスタリカバリを確保するために重要です。

## スコープ

GitLab.com のバックアップ戦略には、監視と復元検証の両方が含まれます。

お客様データは以下の場所に保存されます:

1. GitLab.com のすべての PostgreSQL データベース
1. パッケージ、LFS、アップロード、CI データを含む GitLab.com のオブジェクトストレージ
1. サブスクリプションと購入を管理する CustomersDot データベース
1. Git リポジトリ

## スコープ外

1. Redis キャッシュに保存されたお客様データ
   1. 処理待ちにキューイングされたデータ
   1. セッションおよびその他のキャッシュされたデータ

## 役割と責任

| 役割 | 責任 |
|---|---|
| GitLab チームメンバー | このポリシーに記載された要件への準拠を確保する |
| Engineering（コードオーナー） | このポリシーへの重要な変更および例外を承認する |

## 手順

GitLab は以下を定義します:

- バックアップが必要なサービス
- バックアップの頻度、データ保持期間、および復元プロセス
- ディザスタリカバリシナリオにおけるデータ復元の手順

### バックアップと復元

#### PostgreSQL データベース

| 項目 | 詳細 |
| --- | --- |
| バックアップ頻度 | 毎時フルバックアップを取得し、トランザクションログを継続的にアーカイブする。 |
| ストレージ | [GCS](https://cloud.google.com/storage) に保存 |
| 暗号化 | バックアップデータは転送中および保存中に暗号化される |
| 保持期間 | 14 日間（CustomersDot データベースは 7 日間） |
| 損失防止 | [ソフトデリート](https://cloud.google.com/storage/docs/soft-delete)が有効化され、7 日間の保持期間が設定されている |
| 場所/冗長性 | [マルチリージョンの地理的冗長性](https://cloud.google.com/storage/docs/availability-durability) |
| 監視 | バックアップが成功しているかどうかを継続的に監視し、バックアップが欠落した場合にアラートを発報する。 |
| 復元検証 | ディスクスナップショットからの定期的な復元と WAL セグメントの再生 |

#### Git リポジトリ

| 項目 | 詳細 |
| --- | --- |
| バックアップ頻度 | ブロックレベルのディスクスナップショットを使用して毎時バックアップを取得する。 |
| ストレージ | GCP の[スタンダードスナップショット](https://cloud.google.com/compute/docs/disks/snapshots)として保存 |
| 暗号化 | スナップショットは保存中に暗号化される |
| 保持期間 | 14 日間 |
| 損失防止 | ソースディスクを削除した後も保持される |
| 場所/冗長性 | [マルチリージョンの地理的冗長性](https://cloud.google.com/storage/docs/availability-durability) |
| 監視 | すべてのディスクを監視し、スナップショットが欠落した場合にアラートを発報する |
| 復元検証 | ディスクをランダムにサンプリングし、最新のスナップショットを復元することで実施する。 |

#### オブジェクトストレージ

オブジェクトストレージ（GCS）に保存されたデータは、Google の[年間耐久性 99.999999999%](https://cloud.google.com/storage/docs/storage-classes#descriptions) とマルチリージョンバケットの冗長性によって保護されます。データ保護をさらに強化するために、[オブジェクトバージョニング](https://cloud.google.com/storage/docs/object-versioning)と[ソフトデリート](https://cloud.google.com/storage/docs/soft-delete)が有効化されています。

バージョニングとソフトデリートによる固有の保護があるため、オブジェクトストレージの自動復元検証は不要です。

## 例外

このポリシーの例外は、[情報セキュリティポリシー例外管理プロセス](/handbook/security/controlled-document-procedure/#exceptions)に従って管理されます。

## 参考資料

- [レコード保持・廃棄](/handbook/security/policies_and_standards/records-retention-deletion/)
- [ディザスタリカバリランブック](https://gitlab.com/gitlab-com/runbooks/-/tree/master/docs/disaster-recovery)
- [GameDay](https://gitlab.com/gitlab-com/runbooks/-/blob/master/docs/disaster-recovery/gameday.md)
