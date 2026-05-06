---
owning-stage: "~devops::runtime"
title: 'グループおよびプロジェクト操作 ADR 004: 状態変更の監査統合'
status: accepted
creation-date: "2025-09-04"
authors: [ "@rymai" ]
upstream_path: /handbook/engineering/architecture/design-documents/group_and_project_operations_and_state_management/decisions/004_state_changes_audit_integration/
upstream_sha: 33ef35e4327874fd4153c5606125f5de47ff7924
translated_at: "2026-04-27T05:00:00Z"
translator: claude
stale: false
---

## コンテキスト

グループとプロジェクトは現在、状態変更の監査証跡を持っていません（プロジェクトがアーカイブされ、その後アーカイブ解除された時期や、グループが転送された時期を知ることができません）。

これにより、監査とコンプライアンスが困難になっています。

## 決定

状態変更は、別テーブルではなく、GitLab の既存の監査イベントシステムを通じて追跡します。これにより以下が実現されます:

- 他の GitLab 操作との一貫した監査証跡
- 組み込みのコンプライアンスおよびセキュリティ機能
- 統一された監査ログの表示とフィルタリング
- 既存の保持とエクスポート機能

### 実装アプローチ

```ruby
module Namespaces
  module Stateful
    extend ActiveSupport::Concern
    included do
      ...

      state_machine :state, initial: :ancestor_inherited, initialize: false do
        ...


        after_transition any => any do |namespace, transition|
          namespace.run_after_commit do
            # 状態変更の監査イベントを作成する
            AuditEventService.new(
              namespace.state_metadata['last_changed_by_user_id'],
              namespace,
              {
                action: :namespace_state_changed,
                custom_message: "Namespace state changed from #{transition.from} to #{transition.to}",
                target_details: namespace.full_path
              }
            ).for_namespace.security_event
          end
        end

        ...
      end
    end

  end
end
```

## 結果

### ポジティブな結果

- **監査可能性**: 既存の監査イベントシステムを通じた状態変更の完全な監査証跡

### 技術的な結果

- **実装の必要性**: 新しい監査イベントを実装する必要があります

## 代替案

### 代替案 1: データベースで状態履歴を追跡する

実際の状態変更をデータベースに保存します。

- **長所**: 永続的なストレージに保存された状態変更の完全な履歴
- **短所**: その上に機能を構築する予定がない場合、過剰な実装になる可能性があります

### 代替案 2: 追加の監査イベントなし

現在の監査イベントを維持します。

- **長所**: 実装するものがありません
- **短所**: デバッグとコンプライアンスが引き続き障害となります
