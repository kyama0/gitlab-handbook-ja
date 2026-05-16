---
title: グループとプロジェクトの操作と状態管理
status: ongoing
creation-date: "2025-05-26"
authors: [ "@lohrc", "@rymai" ]
dris: [ "@lohrc", "@rymai", "@abdwdd" ]
owning-stage: "~devops::runtime"
participating-stages: []
toc_hide: true
upstream_path: /handbook/engineering/architecture/design-documents/group_and_project_operations_and_state_management/
upstream_sha: 33ef35e4327874fd4153c5606125f5de47ff7924
translated_at: "2026-04-27T00:00:00Z"
translator: claude
stale: false
lastmod: "2026-04-08T16:19:12+02:00"
---


<div class="my-3 border-l-4 border-blue-500 bg-blue-50 px-4 py-3 rounded-r text-sm text-blue-800">
このページには今後予定されている製品・機能・機能性に関する情報が含まれています。ここに示す情報は参考目的のみです。購入・計画の決定にこの情報を使用しないでください。製品・機能・機能性の開発、リリース、タイミングは変更または延期される可能性があり、GitLab Inc. の独自の判断に委ねられています。
</div>

<div class="overflow-x-auto my-4">
<table class="w-full text-sm border-collapse">
<thead>
<tr class="bg-gray-100 text-left">
<th class="px-3 py-2 border border-gray-300">Status</th>
<th class="px-3 py-2 border border-gray-300">Authors</th>
<th class="px-3 py-2 border border-gray-300">Coach</th>
<th class="px-3 py-2 border border-gray-300">DRIs</th>
<th class="px-3 py-2 border border-gray-300">Owning Stage</th>
<th class="px-3 py-2 border border-gray-300">Created</th>
</tr>
</thead>
<tbody>
<tr>
<td class="px-3 py-2 border border-gray-300"><span class="inline-block rounded px-2 py-0.5 text-xs font-medium bg-gray-100 text-gray-700">ongoing</span></td>
<td class="px-3 py-2 border border-gray-300"><a href="https://gitlab.com/lohrc" class="text-blue-600 hover:underline">@lohrc</a>, <a href="https://gitlab.com/rymai" class="text-blue-600 hover:underline">@rymai</a></td>
<td class="px-3 py-2 border border-gray-300"></td>
<td class="px-3 py-2 border border-gray-300"><a href="https://gitlab.com/lohrc" class="text-blue-600 hover:underline">@lohrc</a>, <a href="https://gitlab.com/rymai" class="text-blue-600 hover:underline">@rymai</a>, <a href="https://gitlab.com/abdwdd" class="text-blue-600 hover:underline">@abdwdd</a></td>
<td class="px-3 py-2 border border-gray-300"><span class="inline-block rounded px-2 py-0.5 text-xs font-medium bg-gray-100 text-gray-700">~devops::runtime</span></td>
<td class="px-3 py-2 border border-gray-300">2025-05-26</td>
</tr>
</tbody>
</table>
</div>


## 概要

このブループリントは、GitLab ネームスペース（グループとプロジェクト）のための統一状態管理およびトラッキングシステムと、状態に関連する操作を非同期にするためのガイドラインを提案します。現在、グループとプロジェクトは状態管理（削除、アーカイブ、移転）を、一貫性のないデータ表現と履歴追跡なしに別々の機能として実装しています。提案されているソリューションは、`namespaces.state` と `namespace_details.state_metadata` を使用した一元化された状態管理システムを導入し、すべてのネームスペースタイプにわたって一貫した状態トラッキング、メタデータストレージ、履歴レコードを提供します。

## モチベーション

グループとプロジェクトには現在、いくつかの問題を引き起こす一貫性のない状態管理実装があります：

**現在の問題点：**

- グループの状態管理に一貫性がない
- プロジェクトの状態管理に一貫性がない
- グループとプロジェクトの状態管理間に一貫性がない
- 子孫の状態が祖先から一貫性なく推論されることがある
- 状態変更の監査証跡がない。例えば、プロジェクトがアーカイブされてからアーカイブ解除された時期、またはグループが別のネームスペースから移転された時期を知ることが不可能
- 同様の操作に異なるデータモデルが使用されている（例：「削除スケジュール済み」状態を追跡するための `group_deletion_schedules` vs `projects.marked_for_deletion_at`）
- 長時間実行される同期操作によるパフォーマンス問題（99.95 パーセンタイル：グループ移転 51 秒、プロジェクト移転 27 秒）

**ビジネスへの影響：**

- 一貫性のない動作とバグによるユーザー体験の低下
- タイムアウトを引き起こすパフォーマンスボトルネックによるユーザー体験の低下
- タイムアウトやバグにより失敗した操作を解決するためのサポートおよびエンジニアリングチームへの負荷増大
- 監査とコンプライアンスの困難
- 重複した一貫性のないコードによるメンテナンスオーバーヘッド

### 目標

- すべてのネームスペースタイプのための統一状態管理システムを確立する
- グループとプロジェクト全体で一貫した API と動作を提供する
- 状態変更の監査証跡を可能にする
- 適切な操作を非同期にすることでパフォーマンスを向上させる
- メタデータトラッキングをサポートする（アクションの開始者、エラー状態、継承）
- コードの重複とメンテナンスオーバーヘッドを削減する
- より良い観測可能性とデバッグ機能を可能にする

### 非目標

- 既存機能の完全な書き換え（段階的な移行アプローチ）
- 初期実装でのユーザー向け API または UI の変更
- 状態に関係しないグループ/プロジェクト統合作業の移行
- 状態管理に関係しないパフォーマンス最適化

## 提案

一元化されたネームスペース状態管理システムと非同期操作ガイドラインを導入します。

### 状態管理データアーキテクチャ

[001: 統一状態管理システム](decisions/001_unified_state_management.md) を参照してください。

### 非同期操作ガイドライン

[002: 非同期操作ガイドライン](decisions/002_asynchronous_operations.md) を参照してください。

### 移行戦略

[005: 移行戦略と後方互換性](decisions/005_migration_strategy_and_backward_compatibility.md) を参照してください。

### パフォーマンスに関する考慮事項

**非同期操作：**

- グループ移転（P1 優先度 - 現在 99.95 パーセンタイルで 51 秒）
- プロジェクト移転（P1 優先度 - 現在 99.95 パーセンタイルで 27 秒）

**最適化戦略：**

- 子孫に状態を伝播させることで高速読み取りを実現し、読み取り時の祖先ルックアップを排除
- `state` および関連カラムへのデータベースインデックス

## メトリクスと成功基準

**パフォーマンスターゲット：**

- P99.95 グループ移転時間を 51 秒から <10 秒に削減
- P99.95 プロジェクト移転時間を 27 秒から <5 秒に削減
- 削除操作のパフォーマンスを維持（スケジューリングで <2 秒）

**品質メトリクス：**

- 完全移行後の状態不整合バグをゼロに
- 状態変更に対する 100% の監査イベントカバレッジ
- すべてのネームスペースタイプにわたる統合テストカバレッジ

**開発者体験：**

- すべての状態管理操作のための単一 API
- 一貫した動作ドキュメント
- コード重複の削減（状態関連コードを 50% 削減目標）

## 決定事項

- [001: 統一状態管理システム](decisions/001_unified_state_management.md)
- [002: 非同期操作ガイドライン](decisions/002_asynchronous_operations.md)
- [003: 状態伝播モデル](decisions/003_state_propagation_model.md)
- [004: 状態変更監査インテグレーション](decisions/004_state_changes_audit_integration.md)
- [005: 移行戦略と後方互換性](decisions/005_migration_strategy_and_backward_compatibility.md)
- [006: 状態保持](decisions/006_state_preservation.md)

## リスクと軽減策

**リスク：データ移行の複雑さ**

- *軽減策：* ロールバック機能を備えた段階的アプローチ、徹底的なテスト

**リスク：移行中のパフォーマンス影響**

- *軽減策：* カーソルベースの DFS を使用したツリーイテレーターによるバッチ伝播、機能フラグ、監視

**リスク：API の破壊的変更**

- *軽減策：* 後方互換性の維持、バージョン管理された API

**リスク：状態の一貫性問題**

- *軽減策：* 移行期間中の双方向同期、バリデーションチェック
