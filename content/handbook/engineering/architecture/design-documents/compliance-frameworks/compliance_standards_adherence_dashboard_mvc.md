---
title: "コンプライアンス標準遵守ダッシュボード MVC"
toc_hide: true
upstream_path: /handbook/engineering/architecture/design-documents/compliance-frameworks/compliance_standards_adherence_dashboard_mvc/
upstream_sha: 0ee1352c26e468fa8032143d735391a793de7086
translated_at: "2026-04-26T00:00:00Z"
translator: claude
stale: false
lastmod: "2025-01-06T20:28:47+00:00"
---

## コンテキスト

私たちは最近、[コンプライアンス標準遵守ダッシュボード](https://gitlab.com/groups/gitlab-org/-/epics/11052) MVC をリリースしました。
このイテレーションでは、標準とチェックという概念を導入しました。最初のイテレーションでは
[GitLab](#gitlab-standard) と [SOC 2](#soc-2-standard) 標準からスタートしました。

### GitLab Standard

GitLab スタンダードは 3 つのチェックで構成されています:

- [作成者によるレビューの防止](https://docs.gitlab.com/ee/user/compliance/compliance_center/compliance_standards_adherence_dashboard.html#prevent-authors-as-approvers)
- [コミット者によるレビューの防止](https://docs.gitlab.com/ee/user/compliance/compliance_center/compliance_standards_adherence_dashboard.html#prevent-committers-as-approvers)
- [最低 2 件のレビュー承認](https://docs.gitlab.com/ee/user/compliance/compliance_center/compliance_standards_adherence_dashboard.html#at-least-two-approvals)

### SOC 2 Standard

SOC 2 スタンダードは 1 つのチェックで構成されています:

- [作成者以外による最低 1 件のレビュー承認](https://docs.gitlab.com/ee/user/compliance/compliance_center/compliance_standards_adherence_dashboard.html#at-least-one-non-author-approval)

## アプローチ

1. これらのチェックごとにサービスクラスを作成し、このクラスをバックグラウンドで Sidekiq ワーカーが呼び出します。
1. これらのワーカーは、プロジェクトが追加されたとき、または関連するプロジェクトやグループの設定が変更されたときに呼び出されます。
そのプロジェクトに対してスキャンが実行され、そのプロジェクトの標準遵守状態が更新されます。
1. これらのチェックの結果を、以下のスキーマを持つデータベーステーブルに保存する計画を立てました:

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

    class project_compliance_standards_adherence {
        id: bigint
        created_at: timestamp
        updated_at: timestamp
        project_id: bigint
        namespace_id: bigint
        check_name: smallint
        status: smallint
        standard: smallint
    }

    namespaces --> projects : has_many
    namespaces <-- projects : belongs_to
    projects --> project_compliance_standards_adherence : has_many
    projects <-- project_compliance_standards_adherence : belongs_to
    ```

1. `check_name` は Enum で、チェックの名前を格納します。例: "prevent_approval_by_merge_request_author"、
"prevent_approval_by_merge_request_committers"、"at_least_two_approvals" など。
1. `standard` カラムは、そのチェックが属する標準の名前（SOC 2、GitLab など）を格納します。

## 結論

MVC リリース後、ユーザーから良いフィードバックをいただきましたが、一部のユーザーからはチェックが厳格すぎて
要件に応じた設定ができないという懸念も寄せられました。例えば: 一部のユーザーはマージリクエストを 2 人のユーザーに
承認させる要件がありませんでした。彼らはプロジェクトごとに必要な承認者数を 1 に変更できる機能を求めています。
私たちは次のイテレーションでこれらに取り組む予定であり、[カスタム遵守レポート](decisions/002_custom_adherence_report.md)の
アーキテクチャ決定記録を作成しました。
