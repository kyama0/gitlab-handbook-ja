---
title: "コンプライアンスとセキュリティポリシーの関係"
toc_hide: true
upstream_path: /handbook/engineering/architecture/design-documents/compliance-frameworks/compliance_security_policy_relationship/
upstream_sha: 0ee1352c26e468fa8032143d735391a793de7086
translated_at: "2026-04-26T00:00:00Z"
translator: claude
stale: false
lastmod: "2025-01-06T20:28:47+00:00"
---

## コンテキスト

このドキュメントはコンプライアンスフレームワークとセキュリティポリシーの完全な関係を説明します。

- セキュリティポリシープロジェクトはプロジェクトまたは名前空間のどちらかにリンクできます（`security_orchestration_policy_configurations` テーブルのレコードが作成され、選択されたセキュリティポリシープロジェクトに関する情報を保存するために `security_policy_management_project_id` が使用されます）
- ポリシーはセキュリティポリシープロジェクトの `policy.yml` ファイルで定義され、`security_policies` テーブルでも表現されます
- 単一のポリシーは複数のコンプライアンスフレームワークにスコープを設定できます（`compliance_framework_security_policies` 結合テーブルを通じて）が、ポリシーを非スコープのままにしたり、選択されたグループまたはプロジェクトにスコープを設定したりすることもできます。ポリシーが非スコープの場合、関連するセキュリティポリシープロジェクトにリンクされたすべてのプロジェクト/名前空間に影響します。
  - セキュリティポリシーのスコープに関する詳細はこちらのドキュメントを参照してください https://docs.gitlab.com/ee/user/application_security/policies/#scope
- 特定のコンプライアンスフレームワークに対して、多くの要件を定義できます（`compliance_requirements` テーブルで表現）
- 単一の要件は複数のセキュリティポリシーに関連付けることができ（`security_policy_requirements` 結合テーブルを通じて）、単一のセキュリティポリシーも複数の要件に関連付けることができます。要件とセキュリティポリシーのリンクにより、ユーザーは選択したセキュリティポリシーを選択した要件の施行メカニズムとして使用できます

## エンティティ関係図

```mermaid
erDiagram
    projects ||--o| security_orchestration_policy_configurations : "links with"
    namespaces ||--o| security_orchestration_policy_configurations : "links with"
    security_orchestration_policy_configurations ||--|| projects : "stores policies in"
    security_orchestration_policy_configurations ||--o{ security_policies : contains
    security_policies ||--|{ compliance_framework_security_policies : "links through"
    compliance_framework_security_policies }|--|| compliance_management_frameworks : "scopes to"
    compliance_management_frameworks ||--o{ compliance_requirements : defines
    compliance_requirements ||--o{ security_policy_requirements : "associates with"
    security_policy_requirements |o--o| security_policies : "associates with"
    
    projects {
        int id PK
        string name
        string path
    }

    namespaces {
        int id PK
        string name
        string path
    }

    compliance_management_frameworks {
        int id PK
        string name
        string description
    }

    compliance_framework_security_policies {
        int id PK
        int compliance_management_framework_id FK
        int security_policy_id FK
    }

    security_policies {
        int id PK
        string name
        string description
        int security_orchestration_policy_configuration_id FK
    }

    security_policy_requirements {
        int id PK
        int security_policy_id FK
        int compliance_requirement_id FK
    }

    compliance_requirements {
        int id PK
        int compliance_management_framework_id FK
        string description
    }

    security_orchestration_policy_configurations {
        int id PK
        int project_id FK "configuration can be linked either to project_id"
        int namespace_id FK "or namespace_id, but not both"
        int security_policy_management_project_id FK "defines project where we keep policy.yml file"
    }
```
