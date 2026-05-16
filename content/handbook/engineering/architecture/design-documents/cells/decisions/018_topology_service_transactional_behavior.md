---
owning-stage: "~devops::tenant scale"
title: "Cells ADR 018: Topology Service のトランザクション動作"
status: accepted
creation-date: "2025-08-04"
authors: [ "@ayufan" ]
toc_hide: true
upstream_path: /handbook/engineering/architecture/design-documents/cells/decisions/018_topology_service_transactional_behavior/
upstream_sha: b4eeb07f0d5f46e2fc5f8572be1a2547261aed89
translated_at: "2026-04-26T00:00:00Z"
translator: claude
stale: false
lastmod: "2025-08-05T09:12:12+02:00"
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
<td class="px-3 py-2 border border-gray-300"><span class="inline-block rounded px-2 py-0.5 text-xs font-medium bg-gray-100 text-gray-700">accepted</span></td>
<td class="px-3 py-2 border border-gray-300"><a href="https://gitlab.com/ayufan" class="text-blue-600 hover:underline">@ayufan</a></td>
<td class="px-3 py-2 border border-gray-300"></td>
<td class="px-3 py-2 border border-gray-300"></td>
<td class="px-3 py-2 border border-gray-300"><span class="inline-block rounded px-2 py-0.5 text-xs font-medium bg-gray-100 text-gray-700">~devops::tenant scale</span></td>
<td class="px-3 py-2 border border-gray-300">2025-08-04</td>
</tr>
</tbody>
</table>
</div>


## コンテキスト

GitLab Cells アーキテクチャでは、複数の分散 Cell をまたいでグローバルに一意なクレーム（ユーザー名、メールアドレス、ルート）の調整が必要です。このシステムは、ネットワーク障害、アプリケーションのクラッシュ、Cell をまたいだ並行操作が発生した場合でも、高可用性を維持しながらデータの一貫性を確保し、競合を防ぐ必要があります。

## 決定事項

1. **分散リースベースの調整**: Cell が中央の Topology Service から排他的なリースを取得してからローカルへの変更を行う「リース先行・コミット後」パターンを実装します。

2. **アトミックなバッチ操作**: 複数の関連モデルの変更（User + Email + Route）を単一のバッチリクエストで処理し、分散システム全体でオールオアナッシングのセマンティクスを確保します。

3. **時間制限付きリース管理**: 明示的な有効期限の代わりに、設定可能な古さのしきい値（デフォルト 10 分）を持つ作成タイムスタンプを使用し、調整による自動クリーンアップを可能にします。

4. **Rails 主導の調整**: 障害からの回復を処理するために、Topology Service の冪等操作を使用した Rails 主導のバックグラウンド調整プロセスを実装します。

5. **オーナーシップセキュリティモデル**: クレームを作成した Cell のみがそれを削除できるよう強制し、Cell 間の干渉を防いでセキュリティの分離を確保します。

6. **3フェーズトランザクションパターン**:
   - **フェーズ 1**: ローカル DB トランザクションの前にプリフライトリース取得
   - **フェーズ 2**: リース追跡付きのローカルデータベーストランザクション
   - **フェーズ 3**: 操作を完了するためのリースのコミット

## メリット

1. **分散ロック**: 排他的なリースアクセス制御により、並行変更によるデータ破損を防ぎます。
1. **適切な回復**: 永続的な競合（重複）と一時的な競合（アクティブなリース）を区別し、適切なユーザーフィードバックを提供します。
1. **自己修復**: バックグラウンド調整による自動回復と明確な障害モードを持つ自己修復システムです。
1. **使いやすさ**: 宣言的な設定を使用した ActiveRecord との透過的な統合。
1. **ネットワーク耐性**: ネットワーク分断、Cell のクラッシュ、さまざまな障害シナリオをエラーハンドリングとリトライロジックで処理します。
1. **Cell 間の独立性**: 競合が発生するまで Cell は独立して動作し、Cell 間の通信と調整のオーバーヘッドを最小化します。
1. **即時ルーティング**: リース取得後すぐにクレームがルーティング可能になり、グローバルレプリケーションの遅延を隠してユーザーエクスペリエンスを最適化します。

## デメリット

1. **複雑さの増加**: 単一データベースソリューションと比較して分散調整の複雑さが増します。
1. **ネットワーク依存**: クレーム属性を変更するすべての操作で追加のネットワークラウンドトリップが発生します。
1. **調整のオーバーヘッド**: 障害回復とデータ整合性の検証を処理するためのバックグラウンドプロセスが必要です。
1. **運用上の監視**: 本番の健全性のためにリースの経過時間、競合率、調整プロセスの監視が必要です。
1. **バッチ制約の限界**: 同じクレームを単一のバッチ操作で作成と削除の両方を行うことはできないため、特定の管理操作が複雑になる場合があります。

## 実装要件

### Rails アプリケーションの変更

- **CellsUniqueness コンサーン**: 透過的なクレーム処理のための ActiveRecord 統合
- **バッチコレクションロジック**: 複数のモデルからのクレームを単一リクエストに集約
- **リース追跡**: 調整の同期のためのローカル `leases_outstanding` テーブル
- **エラー変換**: gRPC エラーを Rails バリデーションエラーに変換

### バックグラウンド調整サービス

- **失われたトランザクションの回復**: 孤立したリースの分単位の調整
- **データ検証プロセス**: Rails と Topology Service 間の日次整合性チェック
- **カーソルベースの処理**: 大規模な検証操作に最適化

### Topology Service の実装

- **リース排他性の強制**: 同一オブジェクトへの並行操作を防ぐデータベース制約
- **アトミックなバッチ操作**: 複数の作成/削除の単一トランザクション処理
- **冪等な操作**: リトライに安全な CommitUpdate/RollbackUpdate 操作
- **セキュリティ検証**: クレームオーナーシップの強制のための Cell ID 検証

### Cloud Spanner スキーマ設計

- **統合クレームテーブル**: リース追跡（`lease_id`、`lease_op`）を組み込んだ単一テーブル
- **未処理リーステーブル**: Rails と Topology Service 間の同期ポイント
- **パフォーマンスインデックス**: リース操作と検証クエリに最適化

## 代替ソリューション

### トランザクション内クレーム処理

Rails トランザクションの前ではなく内部でクレームを実行：

```text
1. Local DB: BEGIN
2. Local DB: Operations
3. TS: BeginUpdate() (within transaction)
4. Local DB: COMMIT
5. TS: CommitUpdate()
```

**トレードオフ**: エラーハンドリングはシンプルになりますが、コネクションプールの枯渇とトランザクション時間の増加の可能性があります。

### 別テーブルのリース設計

UUID クロスリファレンスを持つ専用 `leased` テーブルの作成：

**トレードオフ**: 関心の分離はきれいになりますが、JOIN の複雑さとトランザクションのオーバーヘッドが増加します。

### 2フェーズコミット（2PC）

従来の分散トランザクションの使用：

**トレードオフ**: 実績のあるパターンですが、このユースケースには過剰で、複雑さとパフォーマンスのオーバーヘッドが大きくなります。変更を行う際に Cell 間の調整が必要です。

## 障害回復シナリオ

### ネットワーク障害

- **リース取得中**: リトライしても安全、リソースは割り当てられていない
- **ローカルトランザクション中**: 調整による自動ロールバック
- **コミット中**: バックグラウンド調整が操作を完了

### アプリケーションのクラッシュ

- **ローカルコミット前**: 調整が孤立したリースをロールバック
- **ローカルコミット後**: 調整が保留中の操作をコミット
- **クリーンアップ中**: バックグラウンドプロセスが結果的な整合性を処理

### Topology Service の停止

- **グレースフルデグラデーション**: 操作は適切なユーザーフィードバックとともに素早く失敗
- **回復**: サービスが利用可能になると自動再開
- **データ整合性**: 調整によりデータ損失なしを確保

## 監視と運用上の考慮事項

### 主要メトリクス

- **リース競合率**: 競合レベルの指標
- **調整頻度**: 障害回復の健全性
- **古いリースのカウント**: システム健全性の指標
- **操作レイテンシ**: パフォーマンス監視

### 管理インターフェース

- **未処理リースの検査**: 失敗した操作のデバッグ
- **手動リースのクリーンアップ**: エッジケースの緊急手順
- **Cell の廃止**: 管理上のクレームクリーンアップ

## 関連ドキュメント

- [Topology Service トランザクション動作設計ドキュメント](../topology_service_transactional_behavior.md)
- [GitLab Cells インフラストラクチャアーキテクチャ](../infrastructure/index.md)
- [Topology Service 実装](https://gitlab.com/gitlab-org/cells/topology-service)
