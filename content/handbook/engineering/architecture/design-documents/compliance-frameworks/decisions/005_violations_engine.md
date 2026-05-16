---
title: "コンプライアンスフレームワーク ADR 005: 違反エンジン"
toc_hide: true
upstream_path: /handbook/engineering/architecture/design-documents/compliance-frameworks/decisions/005_violations_engine/
upstream_sha: 0ee1352c26e468fa8032143d735391a793de7086
translated_at: "2026-04-26T00:00:00Z"
translator: claude
stale: false
lastmod: "2025-05-23T10:43:37+12:00"
---

## コンテキスト

遵守レポートは設定されたフレームワークと要件/コントロールに対するプロジェクトの現在の状態を示しますが、
その状態の履歴は表示されません。最も重要なのは、プロジェクトが遵守していなかった時期や、
要件/コントロールへの違反が発生した時期が表示されないことです。

## アプローチ

違反エンジンは設定チェックエンジンと同様に機能します。監査イベントが作成されるたびに、
そのイベントが設定されたコンプライアンスコントロールに違反しないかどうかをシステムが確認します。

例えば、マージリクエストがマージされると `merge_request_merged` という監査イベントが作成され、
その後違反エンジンが実行されて違反がないか確認します。例えば: プロジェクトに「すべてのマージリクエストに
2 人の承認者が必要」というコントロールが定義されており、マージリクエストの承認者が 2 人未満であれば、
そのイベントから違反が作成されます。

GitLab が定義したすべてのコントロールには、トリガーポイントとして監査イベントタイプが設定されます。
新しいパラメーターを含めるように監査イベントタイプの yml ファイルを更新し、関連付けられているコントロールを
示します。1 つの監査イベントが複数のコントロールに関連付けられることがあります。例えば MR がマージされる場合などです。

以下は新しいパラメーターを含む監査イベントタイプ yml ファイルの例です:

```yml
---
name: merge_request_merged
description: A merge request is merged
introduced_by_issue: https://gitlab.com/gitlab-org/gitlab/-/issues/442279
introduced_by_mr: https://gitlab.com/gitlab-org/gitlab/-/merge_requests/164846
feature_category: compliance_management
milestone: '17.5'
saved_to_database: true
streamed: true
scope: [Project]
compliance_requirement_controls: [minimum_approvals_required_2, merge_request_prevent_committers_approval, merge_request_prevent_author_approval]
```

`vulnerabilities_slo_days_over_threshold`、`review_and_archive_stale_repos` などの監査イベントに
直接紐付けられないコントロールもいくつかあります。これらのコントロールについては、
`FrameworkEvaluationSchedulerWorker` に依存します。このワーカーがこれらのコントロールを評価して
ステータスが失敗であることが判明した場合、失敗したコントロールの監査イベントを作成し、
それが最終的に違反レコードを作成します。

[デザイン](https://gitlab.com/gitlab-org/gitlab/-/issues/463865/designs/Future-details-fix-available.png)によると、
違反はワークアイテムといくつかの類似点を持っています。例えば、コメントの追加機能や "detected"、"resolved" などの
状態があります。違反を新しいワークアイテムタイプとして追加することを検討しましたが、'Plan:Product Planning'
グループとの議論の結果、以下の理由から新しいワークアイテムタイプを作成せず、違反用の別のデータベーステーブルを
作成することにしました:

1. 違反はシステムによって自動的に生成されるため、大量のレコードが作成される可能性があり、
それらすべてを現在の単一の `issues` テーブルであるワークアイテムとして保存することは現実的ではありません。
2. すべてのワークアイテムを保存する `issues` テーブルは 300 GB を超えて成長しており、
[大規模データベーステーブルに典型的なパフォーマンス上の制限](https://docs.gitlab.com/development/database/large_tables_limitations/)に
直面しています。そのサイズのため、新しいインデックスやカラムの追加は禁止されています。すべての機能開発はこれらの
制約の範囲内で行う必要があります。
3. 違反はワークアイテムといくつかの類似点しかなく、ユーザーの割り当て、マイルストーンの追加、ラベルなどの
すべての機能を必要としませんでした。

また、コンプライアンス違反を無期限に保存しないというデータ保持ポリシーも設けます。違反を保存する期間は
まだ確定していませんが、無期限には保存しません。

## 設計の詳細

```mermaid
classDiagram
class namespaces {
    id: bigint
    name: text
    path: text
    ...(more columns)
}
class projects {
    id: bigint,
    name: text
    path: text
    description: text
    ...(more columns)
}
class compliance_management_frameworks {
    id: bigint,
    name: text,
    description: text,
    ...(more columns)
}

class compliance_requirements {
    id: bigint
    created_at: timestamp
    updated_at: timestamp
    namespace_id: bigint
    framework_id: bigint
    name: text
    description: text
}

class compliance_requirements_controls {
    id: bigint
    created_at: timestamp
    updated_at: timestamp
    namespace_id: bigint
    requirement_id: bigint
    name: text
    control_type: smallint
    external_url: text
    expression: text
    encrypted_secret_token: bytea
    encrypted_secret_token_iv: bytea
}

class project_requirement_compliance_status {
    id: bigint
    created_at: timestamp
    updated_at: timestamp
    project_id: bigint
    namespace_id: bigint
    compliance_requirement_id: bigint
    status: smallint
}

class project_compliance_violations {
    id: bigint
    created_at: timestamp
    updated_at: timestamp
    project_id: bigint
    namespace_id: bigint
    compliance_requirements_controls_id: bigint
    audit_event_id: bigint
    status: smallint
}

class audit_events {
    id: bigint
    author_id: bigint
    entity_id: bigint
    entity_type: string,
    details: text,
    author_name: text,
    entity_path: text,
    target_details: text,
    target_type: text,
    target_id: bigint
    ...(more columns)
}

class notes {
    id: bigint
    note:
    notable_type:
    author_id: bigint
    project_id: bigint
    ...(more columns)
}

class issues {
    id: bigint
    title: text
    project_id: bigint
    ...(more columns)
}

compliance_management_frameworks --> compliance_requirements : has_many
compliance_management_frameworks <--> projects : many_to_many
compliance_requirements --> compliance_requirements_controls : has_many
projects <-- namespaces : has_many
namespaces --> compliance_management_frameworks : has_many
projects --> project_requirement_compliance_status : has_many
projects --> project_compliance_violations : has_many
compliance_requirements --> project_requirement_compliance_status : has_one
compliance_requirements_controls --> project_compliance_violations : has_many
project_compliance_violations --> audit_events : has_one
project_compliance_violations <-- audit_events : has_many
project_compliance_violations --> notes : has_many
project_compliance_violations --> issues : has_many
```
