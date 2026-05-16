---
title: "コンプライアンスフレームワーク ADR 002: カスタム遵守レポート"
toc_hide: true
upstream_path: /handbook/engineering/architecture/design-documents/compliance-frameworks/decisions/002_custom_adherence_report/
upstream_sha: 0ee1352c26e468fa8032143d735391a793de7086
translated_at: "2026-04-26T00:00:00Z"
translator: claude
stale: false
lastmod: "2025-01-06T20:28:47+00:00"
---

## コンテキスト

私たちは[コンプライアンス標準遵守レポート MVC](../compliance_standards_adherence_dashboard_mvc.md) を提供しました。
これは顧客から好評でしたが、コンプライアンス遵守ダッシュボードのカスタマイズの可能性についてフィードバックがありました。
既存のコンプライアンス標準遵守レポートは、現在サポートされているすべてのチェックを表示し、そのグループ内の
すべてのプロジェクトのコンプライアンスステータスを表示します。現在、ユーザーはこの動作を設定できません。

## アプローチ

コンプライアンス標準遵守レポートのカスタマイズを可能にするために、コンプライアンス要件とコンプライアンス
チェックの概念を導入する計画です。

1. コンプライアンス要件: コンプライアンスフレームワークは複数のコンプライアンス要件を持てます。これらの要件には
複数のチェックを関連付けることができます。要件により、ユーザーは必要に応じて複数のチェックをまとめることができます。
例えば: 要件として「コードセーフガード」があり、「最低 2 人の承認者」と「作成者を承認者にしない」チェックを
含めることができます。
1. コンプライアンスチェック: コンプライアンス要件に属し、GitLab 製品がサポートするチェックの 1 つを示します。

カスタムコンプライアンス遵守レポートを実装するために以下のアプローチを検討しました:

1. [コンプライアンス遵守設定の保存に YAML を使用する](#using-yaml-for-storing-compliance-adherence-configuration)
2. [コンプライアンス遵守設定を JSON としてデータベースに保存する](#storing-the-compliance-adherence-configuration-in-database-as-json)
3. [コンプライアンス遵守設定をリレーショナルデータとしてデータベースに保存する](#storing-the-compliance-adherence-configuration-in-database-as-relational-data)（選択されたアプローチ）

### コンプライアンス遵守設定の保存に YAML を使用する {#using-yaml-for-storing-compliance-adherence-configuration}

1. セキュリティポリシーと同様に、コンプライアンス遵守レポート設定の保存に YAML ファイルを使用する計画でした。
1. ユーザーは各フレームワーク用に `.compliance-standard@framework_name.yml` という名前のファイルを作成します。
これらの YAML ファイルは、そのグループ内の特別なプロジェクトに保存されます。これはセキュリティポリシーの保存に
使用される[セキュリティポリシープロジェクト](https://docs.gitlab.com/ee/user/application_security/policies/#security-policy-project)と同様です。
1. コンプライアンスフレームワークを作成する際に、ユーザーはこの標準 YAML ファイルの参照を設定して
YAML をそのコンプライアンスフレームワークに関連付けることができます。
1. [ポリシーエディター](https://docs.gitlab.com/ee/user/application_security/policies/#policy-editor)と
同様の標準エディターを作成し、UI から設定を簡単に変更できるようにします。
1. YAML は要件とチェックの設定を保存するために使用されます。YAML の例:

    ```yaml
    requirements:
    - name: Code safeguards enabled
      description: Ensure that code is guarded correctly.
      checks:
       - at_least_two_approvals
       - prevent_approval_by_merge_request_author
    - name: Authentication Control
      description: Ensure all users have multi-factor authentication and use organisations email.
      checks:
       - multi_factor_auth_enabled
       - organizations_email_domain
   ```

1. チェックは Enum のリストで、GitLab がサポートするチェックの 1 つを示します。
1. 設定が保存されてコンプライアンスフレームワークに適用されると、そのコンプライアンスフレームワークが
適用されたプロジェクトに対して選択されたチェックの結果のみが表示されます。
1. コンプライアンスフレームワークが適用されていないプロジェクトのコンプライアンス遵守ステータスは
表示しません。
1. このアプローチには一定の利点があります:
   1. コンプライアンス設定をコードとして保存でき、共有・再利用が容易。
   1. 将来的に GitLab 内でこれらの設定の集中型レジストリを実現できる可能性がある。
   1. マージリクエストを通じて設定された標準 YAML により、監査や過去の変更の閲覧が容易。
1. このアプローチにはいくつかの欠点もあります:
   1. コンプライアンスユーザーにとってやや複雑に感じられる可能性がある。
   1. リポジトリ経由での設定へのアクセスは、データベースへの保存と比べてやや遅い可能性がある。
   1. 将来の YAML スキーマ変更を容易にするために、YAML 構造を適切に設計する必要がある。

### コンプライアンス遵守設定を JSON としてデータベースに保存する {#storing-the-compliance-adherence-configuration-in-database-as-json}

1. このアプローチでは、コンプライアンス遵守レポート設定をコンプライアンスフレームワークテーブルの
JSON カラムとして保存する計画でした。
1. コンプライアンスフレームワーク内に要件を作成し、この要件にチェックを追加するための UI を作成します。
1. この設定を JSON に変換して、コンプライアンスフレームワークテーブル内の `requirements` という名前の
`jsonb` カラムに保存します。
1. JSON の例:

    ```json
    [{
      "name": "Code safeguards enabled",
      "description": "Ensure that code is guarded correctly",
      "checks": [
        "at_least_two_approvals",
        "prevent_approval_by_merge_request_author"
      ]
    },
    {
      "name": "Authentication Control",
      "description": "Ensure all users have multi-factor authentication and use organisations email",
      "checks": [
        "multi_factor_auth_enabled",
        "organizations_email_domain"
      ]
    }]
    ```

1. 前のアプローチと同様に、コンプライアンスフレームワークが適用され、有効な `requirements` 設定がある
プロジェクトに対してのみチェックの結果を表示します。
1. このアプローチには一定の利点があります:
   1. UI フレンドリーなアプローチ。
   1. 特別なプロジェクトのセットアップや複雑な YAML 設定の理解が不要。
   1. 主要なデータベース変更が不要。
1. このアプローチにも欠点があります:
   1. データベースから要件 JSON を取得することは容易な操作ではない。
   1. 将来のイテレーションにも対応できるスケーラブルな JSON スキーマバリデーターの設計が複雑になる可能性がある。
   1. 設定の過去の変更を閲覧することが容易ではない。ユーザーは過去の監査イベントログを通じて変更を追跡する必要がある。
   1. 既存の JSON 設定の更新は、非 JSON カラムとして保存する場合と比較して困難。

### コンプライアンス遵守設定をリレーショナルデータとしてデータベースに保存する {#storing-the-compliance-adherence-configuration-in-database-as-relational-data}

1. このアプローチでは、JSON カラムの問題を防ぐために新しいデータベーステーブルに設定を保存する計画でした。
1. コンプライアンス要件とチェックは、以下のスキーマを持つ個別のテーブルに保存されます:

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

    class compliance_checks {
        id: bigint
        created_at: timestamp
        updated_at: timestamp
        requirement_id: bigint
        namespace_id: bigint
        check_name: smallint
    }

    class project_compliance_standards_adherence {
        id: bigint
        created_at: timestamp
        updated_at: timestamp
        project_id: bigint
        namespace_id: bigint
        check_name: smallint
        status: smallint
    }

    compliance_requirements --> compliance_checks : has_many
    compliance_requirements <-- compliance_checks : belongs_to
    compliance_management_frameworks --> compliance_requirements : has_many
    compliance_management_frameworks <-- compliance_requirements : belongs_to
    compliance_management_frameworks <--> projects : many_to_many
    projects <-- namespaces : has_many
    projects --> namespaces : belongs_to
    namespaces --> compliance_management_frameworks : has_many
    namespaces <-- compliance_management_frameworks : belongs_to
    projects --> project_compliance_standards_adherence : has_many
    projects <-- project_compliance_standards_adherence : belongs_to
    ```

1. `project_compliance_standards_adherence` から `standard` カラムを削除しました。チェックを標準に
関連付けることをやめ、ユーザーが必要に応じてチェックをカスタマイズしてグループ化できるようにするためです。
1. 前のアプローチと同様に、フレームワークが適用されているかどうかに関わらず、すべての Ultimate プロジェクトの
すべてのコンプライアンス遵守チェックの結果を保存し続けますが、コンプライアンス標準遵守ダッシュボードでは
要件が設定されたコンプライアンスフレームワークが適用されているプロジェクトのチェック結果のみを表示します。
これは `compliance_checks` と `project_compliance_standards_adherence` データベーステーブル間のリレーションシップが
不要であることを意味します。
1. 次のイテレーションでは、コンプライアンス遵守レポート設定のインポートとエクスポートも可能にします。

## 決定

コンプライアンス遵守設定をリレーショナルデータとしてデータベースに保存することにしました。
