---
title: "コンプライアンスフレームワーク スケーラビリティレビュー"
toc_hide: true
upstream_path: /handbook/engineering/architecture/design-documents/compliance-frameworks/scalability_review/
upstream_sha: 0ee1352c26e468fa8032143d735391a793de7086
translated_at: "2026-04-26T00:00:00Z"
translator: claude
stale: false
lastmod: "2025-03-11T12:54:45-07:00"
---

## コンテキスト

https://gitlab.com/groups/gitlab-org/-/epics/13295 では、顧客がコンプライアンスフレームワークを通じて独自のコンプライアンス要件を設定し、遵守レポートとセキュリティポリシーを通じてそれらの要件のレポートと適用を行える新しいエクスペリエンスを提供しています。

コンプライアンスフレームワークの大規模実装（1,000 以上のプロジェクト）に対応するために、スケーラビリティを優先し、高負荷なワークロードでも機能のパフォーマンスが維持されるようにする必要があります。

これらの機能の設定可能性と重要性から、スムーズなエクスペリエンスと機能の適応性を確保することが重要です。

## 提案

- [x] 現在の DB ERD をレビュー・テストして、[大規模グループでの DB クエリのスケーラビリティを確認する](#query-plan-validation)（1,000 以上のプロジェクト）
- [x] 現在の ADR と技術的なレビューを確認する。
- [x] [新しいコントロールを追加するための工数を確認する](#implementation-of-new-controls)

## 機能概要

- **コンプライアンスフレームワーク**は**名前空間**に属します
  - **フレームワーク**は**名前空間**内の多くの**プロジェクト**に属します
  - **フレームワーク**は多くの**要件**を持ちます
    - **要件**は**タイプ**（内部または外部）と**コントロール式**で構成されます
      - **コントロール式**はチェック対象の関連する設定または構成を定義します

詳細な ERD については[設計の詳細](./index.md#design-details)を参照してください。

## コンプライアンス評価フロー

_2 つのフレームワークを持つ名前空間が与えられた場合、高レベルでのフレームワーク評価は以下の手順で実行されます:_

1. 名前空間設定が変更される（最悪の場合、カスケードして当該名前空間内のすべての Ultimate プロジェクトに適用される）
1. _FrameworkA_ が与えられると、名前空間内の FrameworkA に関連付けられたすべてのプロジェクトを評価する必要がある
1. 関連付けられたすべてのプロジェクトの ID が取得され、FrameworkA のコントロールに対して各プロジェクトのコンプライアンスステータスをチェックするためにバッチバックグラウンドジョブとしてエンキューされる
1. _ProjectA_ が与えられると、バックグラウンド Sidekiq ワーカー内でプロジェクトと関連データを ID で取得する
    1. FrameworkA の要件を反復してコントロールを評価する
    1. コントロール評価の結果で `project_compliance_configuration_status` 内のエントリがアップサートされる
1. _FrameworkB_ が与えられると、名前空間内の FrameworkB に関連付けられたすべてのプロジェクトを評価する必要がある
1. 関連付けられたすべてのプロジェクトの ID が取得され、FrameworkB のコントロールに対して各プロジェクトのコンプライアンスステータスをチェックするためにバッチバックグラウンドジョブとしてエンキューされる
1. _ProjectA_ が与えられると、バックグラウンド Sidekiq ワーカー内でプロジェクトと関連データを ID で取得する
    1. FrameworkB の要件を反復してコントロールを評価する
    1. コントロール評価の結果で `project_compliance_configuration_status` 内のエントリがアップサートされる
1. _ProjectB_ が与えられると、バックグラウンド Sidekiq ワーカー内でプロジェクトと関連データを ID で取得する
    1. FrameworkB の要件を反復してコントロールを評価する
    1. コントロール評価の結果で `project_compliance_configuration_status` 内のエントリがアップサートされる

### クエリプランの検証 {#query-plan-validation}

プロジェクト設定の変更時に、[フィーチャーブランチ](https://gitlab.com/gitlab-org/gitlab/-/compare/master...huzaifaiftikhar1_scalability_review_custom_controls)を使用して実施。

#### 1. コンプライアンス要件を持つフレームワークの取得

```rb
frameworks = ComplianceManagementFramework.joins(:compliance_requirements).distinct.order(:id)
```

<details><summary>クリックしてクエリプランを展開</summary>

https://console.postgres.ai/gitlab/gitlab-production-main/sessions/32134/commands/99394

```sql
SELECT DISTINCT
    "compliance_management_frameworks".*
FROM
    "compliance_management_frameworks"
    INNER JOIN "compliance_requirements" ON "compliance_requirements"."framework_id" = "compliance_management_frameworks"."id"
ORDER BY
    "compliance_management_frameworks"."id" ASC
```

</details>

#### 2. 関連するフレームワーク別のプロジェクト ID バッチの取得

```rb
frameworks.each do |framework|
  framework.projects.each_batch(of: 100) do |project|
    ProjectComplianceEvaluatorWorker.perform_async(framework.id, project.pluck_primary_key)
  end
end
```

<details><summary>クリックしてクエリプランを展開</summary>

https://console.postgres.ai/gitlab/gitlab-production-main/sessions/32139/commands/99421

```sql
select
    "projects"."id"
from
    projects
    join project_compliance_framework_settings on project_compliance_framework_settings.project_id = projects.id
where
    project_compliance_framework_settings.framework_id = 1019907 OFFSET 100
LIMIT 1;
```

</details>

#### 3. バックグラウンドワーカー経由でのプロジェクトと関連テーブルの取得

バッチバックグラウンドワーカー内で、指定されたフレームワークのプロジェクトのバッチを取得する必要があります。
また、フレームワークのコントロールに対して評価を実行するために、関連するすべての関連付けをプリロードします。

これには、使用していない属性が含まれる可能性がありますが、各要件のコントロールの評価内での冗長なクエリのファンアウトを
防ぐために必要な、より大きな初期クエリセットが必要です。

```rb
Project.includes(
    :ci_cd_settings,
    :project_feature,
    :project_setting,
    :protected_branches,
    :security_setting
).where(id: project_ids)
```

<details><summary>プロジェクトの ID による取得</summary>

https://console.postgres.ai/gitlab/gitlab-production-main/sessions/32139/commands/99422

```sql
SELECT
    "projects"."id",
    "projects"."name",
    "projects"."path",
    "projects"."description",
    "projects"."created_at",
    "projects"."updated_at",
    "projects"."creator_id",
    "projects"."namespace_id",
    "projects"."last_activity_at",
    "projects"."import_url",
    "projects"."visibility_level",
    "projects"."archived",
    "projects"."avatar",
    "projects"."merge_requests_template",
    "projects"."star_count",
    "projects"."merge_requests_rebase_enabled",
    "projects"."import_type",
    "projects"."import_source",
    "projects"."approvals_before_merge",
    "projects"."reset_approvals_on_push",
    "projects"."merge_requests_ff_only_enabled",
    "projects"."issues_template",
    "projects"."mirror",
    "projects"."mirror_last_update_at",
    "projects"."mirror_last_successful_update_at",
    "projects"."mirror_user_id",
    "projects"."shared_runners_enabled",
    "projects"."runners_token",
    "projects"."build_allow_git_fetch",
    "projects"."build_timeout",
    "projects"."mirror_trigger_builds",
    "projects"."pending_delete",
    "projects"."public_builds",
    "projects"."last_repository_check_failed",
    "projects"."last_repository_check_at",
    "projects"."only_allow_merge_if_pipeline_succeeds",
    "projects"."has_external_issue_tracker",
    "projects"."repository_storage",
    "projects"."repository_read_only",
    "projects"."request_access_enabled",
    "projects"."has_external_wiki",
    "projects"."ci_config_path",
    "projects"."lfs_enabled",
    "projects"."description_html",
    "projects"."only_allow_merge_if_all_discussions_are_resolved",
    "projects"."repository_size_limit",
    "projects"."printing_merge_request_link_enabled",
    "projects"."auto_cancel_pending_pipelines",
    "projects"."service_desk_enabled",
    "projects"."cached_markdown_version",
    "projects"."delete_error",
    "projects"."last_repository_updated_at",
    "projects"."disable_overriding_approvers_per_merge_request",
    "projects"."storage_version",
    "projects"."resolve_outdated_diff_discussions",
    "projects"."remote_mirror_available_overridden",
    "projects"."only_mirror_protected_branches",
    "projects"."pull_mirror_available_overridden",
    "projects"."jobs_cache_index",
    "projects"."external_authorization_classification_label",
    "projects"."mirror_overwrites_diverged_branches",
    "projects"."pages_https_only",
    "projects"."external_webhook_token",
    "projects"."packages_enabled",
    "projects"."merge_requests_author_approval",
    "projects"."pool_repository_id",
    "projects"."runners_token_encrypted",
    "projects"."bfg_object_map",
    "projects"."detected_repository_languages",
    "projects"."merge_requests_disable_committers_approval",
    "projects"."require_password_to_approve",
    "projects"."max_pages_size",
    "projects"."max_artifacts_size",
    "projects"."pull_mirror_branch_prefix",
    "projects"."remove_source_branch_after_merge",
    "projects"."marked_for_deletion_at",
    "projects"."marked_for_deletion_by_user_id",
    "projects"."autoclose_referenced_issues",
    "projects"."suggestion_commit_message",
    "projects"."project_namespace_id",
    "projects"."hidden",
    "projects"."organization_id"
FROM
    "projects"
WHERE
    "projects"."id" IN (13083, 13764, 14022, 14288, 14289, 16648, 19776, 20085, 20086, 20699, 23081, 27470, 27726, 29286, 36743, 72724, 74823, 83282, 98024, 116212, 140724, 143237, 145205, 150440, 227582, 250324, 250833, 278964, 280425, 375711, 387896, 413007, 430285, 443787, 444821, 455030, 480929, 554859, 593728, 629054, 629060, 684698, 730448, 734943, 747741, 766015, 818896, 876090, 887372, 928825, 931715, 998792, 1075790, 1120019, 1209837, 1265999, 1329047, 1379171, 1441932, 1470839, 1533158, 1777822, 1794617, 1911766, 1990920, 2009901, 2127625, 2317465, 2337675, 2347063, 2383700, 2651596, 2670515, 2694799, 2725567, 2890326, 2953390, 3010986, 3010998, 3094319, 3101096, 3305972, 3466815, 3588247, 3605985, 3631141, 3651684, 3662568, 3662668, 3674569, 3698388, 3871132, 3871556, 3885956, 3885980, 3933206, 3933372, 3991945, 4108541, 4121724)
```

</details>

<details><summary>プロジェクト ID による project_ci_cd_settings の取得</summary>

https://console.postgres.ai/gitlab/gitlab-production-main/sessions/32139/commands/99423

```sql
SELECT "project_ci_cd_settings".* FROM "project_ci_cd_settings" WHERE "project_ci_cd_settings"."project_id" IN (13083, 13764, 14022, 14288, 14289, 16648, 19776, 20085, 20086, 20699, 23081, 27470, 27726, 29286, 36743, 72724, 74823, 83282, 98024, 116212, 140724, 143237, 145205, 150440, 227582, 250324, 250833, 278964, 280425, 375711, 387896, 413007, 430285, 443787, 444821, 455030, 480929, 554859, 593728, 629054, 629060, 684698, 730448, 734943, 747741, 766015, 818896, 876090, 887372, 928825, 931715, 998792, 1075790, 1120019, 1209837, 1265999, 1329047, 1379171, 1441932, 1470839, 1533158, 1777822, 1794617, 1911766, 1990920, 2009901, 2127625, 2317465, 2337675, 2347063, 2383700, 2651596, 2670515, 2694799, 2725567, 2890326, 2953390, 3010986, 3010998, 3094319, 3101096, 3305972, 3466815, 3588247, 3605985, 3631141, 3651684, 3662568, 3662668, 3674569, 3698388, 3871132, 3871556, 3885956, 3885980, 3933206, 3933372, 3991945, 4108541, 4121724)
```

</details>

<details><summary>プロジェクト ID による project_features の取得</summary>

https://console.postgres.ai/gitlab/gitlab-production-main/sessions/32139/commands/99424

```sql
SELECT "project_features".* FROM "project_features" WHERE "project_features"."project_id" IN (13083, 13764, 14022, 14288, 14289, 16648, 19776, 20085, 20086, 20699, 23081, 27470, 27726, 29286, 36743, 72724, 74823, 83282, 98024, 116212, 140724, 143237, 145205, 150440, 227582, 250324, 250833, 278964, 280425, 375711, 387896, 413007, 430285, 443787, 444821, 455030, 480929, 554859, 593728, 629054, 629060, 684698, 730448, 734943, 747741, 766015, 818896, 876090, 887372, 928825, 931715, 998792, 1075790, 1120019, 1209837, 1265999, 1329047, 1379171, 1441932, 1470839, 1533158, 1777822, 1794617, 1911766, 1990920, 2009901, 2127625, 2317465, 2337675, 2347063, 2383700, 2651596, 2670515, 2694799, 2725567, 2890326, 2953390, 3010986, 3010998, 3094319, 3101096, 3305972, 3466815, 3588247, 3605985, 3631141, 3651684, 3662568, 3662668, 3674569, 3698388, 3871132, 3871556, 3885956, 3885980, 3933206, 3933372, 3991945, 4108541, 4121724)
```

</details>

<details><summary>プロジェクト ID による project_security_settings の取得</summary>

https://console.postgres.ai/gitlab/gitlab-production-main/sessions/32139/commands/99425

```sql
SELECT "project_security_settings".* FROM "project_security_settings" WHERE "project_security_settings"."project_id" IN (13083, 13764, 14022, 14288, 14289, 16648, 19776, 20085, 20086, 20699, 23081, 27470, 27726, 29286, 36743, 72724, 74823, 83282, 98024, 116212, 140724, 143237, 145205, 150440, 227582, 250324, 250833, 278964, 280425, 375711, 387896, 413007, 430285, 443787, 444821, 455030, 480929, 554859, 593728, 629054, 629060, 684698, 730448, 734943, 747741, 766015, 818896, 876090, 887372, 928825, 931715, 998792, 1075790, 1120019, 1209837, 1265999, 1329047, 1379171, 1441932, 1470839, 1533158, 1777822, 1794617, 1911766, 1990920, 2009901, 2127625, 2317465, 2337675, 2347063, 2383700, 2651596, 2670515, 2694799, 2725567, 2890326, 2953390, 3010986, 3010998, 3094319, 3101096, 3305972, 3466815, 3588247, 3605985, 3631141, 3651684, 3662568, 3662668, 3674569, 3698388, 3871132, 3871556, 3885956, 3885980, 3933206, 3933372, 3991945, 4108541, 4121724)
```

</details>

<details><summary>プロジェクト ID による project_settings の取得</summary>

https://console.postgres.ai/gitlab/gitlab-production-main/sessions/32139/commands/99426

```sql
EXPLAIN SELECT "project_settings"."project_id", "project_settings"."created_at", "project_settings"."updated_at", "project_settings"."push_rule_id", "project_settings"."show_default_award_emojis", "project_settings"."allow_merge_on_skipped_pipeline", "project_settings"."squash_option", "project_settings"."has_confluence", "project_settings"."has_vulnerabilities", "project_settings"."prevent_merge_without_jira_issue", "project_settings"."cve_id_request_enabled", "project_settings"."mr_default_target_self", "project_settings"."previous_default_branch", "project_settings"."warn_about_potentially_unwanted_characters", "project_settings"."merge_commit_template", "project_settings"."has_shimo", "project_settings"."squash_commit_template", "project_settings"."legacy_open_source_license_available", "project_settings"."target_platforms", "project_settings"."enforce_auth_checks_on_uploads", "project_settings"."selective_code_owner_removals", "project_settings"."show_diff_preview_in_email", "project_settings"."suggested_reviewers_enabled", "project_settings"."only_allow_merge_if_all_status_checks_passed", "project_settings"."issue_branch_template", "project_settings"."mirror_branch_regex", "project_settings"."allow_pipeline_trigger_approve_deployment", "project_settings"."emails_enabled", "project_settings"."pages_unique_domain_enabled", "project_settings"."pages_unique_domain", "project_settings"."runner_registration_enabled", "project_settings"."product_analytics_instrumentation_key", "project_settings"."product_analytics_data_collector_host", "project_settings"."cube_api_base_url", "project_settings"."encrypted_cube_api_key", "project_settings"."encrypted_cube_api_key_iv", "project_settings"."encrypted_product_analytics_configurator_connection_string", "project_settings"."encrypted_product_analytics_configurator_connection_string_iv", "project_settings"."pages_multiple_versions_enabled", "project_settings"."allow_merge_without_pipeline", "project_settings"."duo_features_enabled", "project_settings"."require_reauthentication_to_approve", "project_settings"."observability_alerts_enabled", "project_settings"."spp_repository_pipeline_access" FROM "project_settings" WHERE "project_settings"."project_id" IN (13083, 13764, 14022, 14288, 14289, 16648, 19776, 20085, 20086, 20699, 23081, 27470, 27726, 29286, 36743, 72724, 74823, 83282, 98024, 116212, 140724, 143237, 145205, 150440, 227582, 250324, 250833, 278964, 280425, 375711, 387896, 413007, 430285, 443787, 444821, 455030, 480929, 554859, 593728, 629054, 629060, 684698, 730448, 734943, 747741, 766015, 818896, 876090, 887372, 928825, 931715, 998792, 1075790, 1120019, 1209837, 1265999, 1329047, 1379171, 1441932, 1470839, 1533158, 1777822, 1794617, 1911766, 1990920, 2009901, 2127625, 2317465, 2337675, 2347063, 2383700, 2651596, 2670515, 2694799, 2725567, 2890326, 2953390, 3010986, 3010998, 3094319, 3101096, 3305972, 3466815, 3588247, 3605985, 3631141, 3651684, 3662568, 3662668, 3674569, 3698388, 3871132, 3871556, 3885956, 3885980, 3933206, 3933372, 3991945, 4108541, 4121724)
```

</details>

<details><summary>プロジェクト ID による approval_rules の取得</summary>

`at_least_two_approvals` または承認ルールに関連するその他のコントロールに対して

https://console.postgres.ai/gitlab/gitlab-production-main/sessions/32134/commands/99302

```sql
SELECT
    SUM(approvals_required)
FROM
    "approval_project_rules"
WHERE
    "approval_project_rules"."project_id" = 1
LIMIT 1
```

</details>

<details><summary>プロジェクト ID による protected_branches の取得</summary>

https://console.postgres.ai/gitlab/gitlab-production-main/sessions/32134/commands/99303

```sql
SELECT
    "protected_branches".*
FROM (
    SELECT
        "protected_branches".*
    FROM
        "protected_branches"
    WHERE
        "protected_branches"."project_id" = 1) protected_branches
```

</details>

<details><summary>namespace_id による namespace の取得</summary>

https://console.postgres.ai/gitlab/gitlab-production-main/sessions/32134/commands/99304

```sql
SELECT
    "namespaces"."id",
    "namespaces"."name",
    "namespaces"."path",
    "namespaces"."owner_id",
    "namespaces"."created_at",
    "namespaces"."updated_at",
    "namespaces"."type",
    "namespaces"."description",
    "namespaces"."avatar",
    "namespaces"."membership_lock",
    "namespaces"."share_with_group_lock",
    "namespaces"."visibility_level",
    "namespaces"."request_access_enabled",
    "namespaces"."ldap_sync_status",
    "namespaces"."ldap_sync_error",
    "namespaces"."ldap_sync_last_update_at",
    "namespaces"."ldap_sync_last_successful_update_at",
    "namespaces"."ldap_sync_last_sync_at",
    "namespaces"."description_html",
    "namespaces"."lfs_enabled",
    "namespaces"."parent_id",
    "namespaces"."shared_runners_minutes_limit",
    "namespaces"."repository_size_limit",
    "namespaces"."require_two_factor_authentication",
    "namespaces"."two_factor_grace_period",
    "namespaces"."cached_markdown_version",
    "namespaces"."project_creation_level",
    "namespaces"."runners_token",
    "namespaces"."file_template_project_id",
    "namespaces"."saml_discovery_token",
    "namespaces"."runners_token_encrypted",
    "namespaces"."custom_project_templates_group_id",
    "namespaces"."auto_devops_enabled",
    "namespaces"."extra_shared_runners_minutes_limit",
    "namespaces"."last_ci_minutes_notification_at",
    "namespaces"."last_ci_minutes_usage_notification_level",
    "namespaces"."subgroup_creation_level",
    "namespaces"."max_pages_size",
    "namespaces"."max_artifacts_size",
    "namespaces"."mentions_disabled",
    "namespaces"."default_branch_protection",
    "namespaces"."max_personal_access_token_lifetime",
    "namespaces"."push_rule_id",
    "namespaces"."shared_runners_enabled",
    "namespaces"."allow_descendants_override_disabled_shared_runners",
    "namespaces"."traversal_ids",
    "namespaces"."organization_id"
FROM
    "namespaces"
WHERE
    "namespaces"."type" = 'Group'
    AND "namespaces"."id" = 22
LIMIT 1
```

</details>

#### 4. 指定されたフレームワークのコンプライアンス要件の取得

<details><summary>クリックしてクエリプランを展開</summary>

https://console.postgres.ai/gitlab/gitlab-production-main/sessions/32139/commands/99427

```sql
SELECT
    "compliance_requirements".*
FROM
    "compliance_requirements"
WHERE
    "compliance_requirements"."framework_id" = 1020460
```

</details>

#### 5. 各要件に対してプロジェクトに対するコントロール式を評価する

必要なすべての関連付けが最初にプリロードされているため、すべてのコントロール式の評価はメモリ内で実行され、
ルックアップは必要ありません。

```rb
projects.each do |project|
  framework.compliance_requirements.each do |req|
    ComplianceManagement::ComplianceRequirement::QueryEvaluator.new(Gitlab::Json.parse(req.control_expression), project).evaluate
  end
end
```

**クエリプラン: なし**

#### 6. プロジェクトコンプライアンスステータスの永続化

コントロール式を true/false に評価した後、結果を `project_compliance_configuration_status` に挿入できます。
これにより以下の SQL が生成されます。

<details><summary>クリックしてクエリプランを展開</summary>

https://console.postgres.ai/gitlab/gitlab-production-main/sessions/32134/commands/99315

```sql
INSERT INTO "project_compliance_configuration_status" ("created_at", "updated_at", "project_id", "namespace_id", "compliance_requirement_id", "status")
    VALUES ('2024-09-27 20:28:14.097687', '2024-09-27 20:28:14.097687', 20, 31, 15, 1)
RETURNING
    "id"
```

</details>

#### 7. プロジェクトコンプライアンス設定ステータスダッシュボードのレンダリング

ダッシュボードに表示するために project_compliance_configuration_status テーブルから行を取得する必要があります。
これらのクエリは project_compliance_standards_adherence からレコードを取得するための既存のクエリと非常に
似たものになります。

<details><summary>クリックしてクエリプランを展開</summary>

</details>

## トリガー条件

フレームワーク評価がエンキューされるパスには 2 つあります: 設定変更経由と時間経由です。

名前空間設定が変更された場合、例えば、名前空間のフレームワークを適用可能なプロジェクトに対して再評価する
ジョブがエンキューされることがあります。同様に、プロジェクト設定が変更された場合、そのプロジェクトを
適用可能なフレームワークに対して再評価するジョブがエンキューされます。

イベントベースのトリガーの主な欠点は、考えられるトリガーポイントの広範なマップを維持する必要があることです。
これはスケールするのが難しく、[新しく追加されるコントロール](#implementation-of-new-controls)に対して特別な
コードが必要であり、破損または意図しない削除が起こりやすいです。

さらに、一部のコントロールはイベントベースの調整に結び付けることが不可能な場合があります。このような場合、
コントロール式は定期的なサイクルで評価される必要があります。例えば、脆弱性が予想 SLO 内でトリアージされて
いることを確認する場合などです。このような場合、フレームワークは頻繁に再評価をトリガーする必要があります。

このため、フレームワークが最初にプロジェクトに適用されたときのワンタイム実行をトリガーしながら、
定期的なプロジェクトコンプライアンス評価を実行するために cron ベースのアプローチを使用することが決定されました。

この決定の詳細については [ADR 004](./decisions/004_time_based_triggers.md) を参照してください。

## 新しいコントロールの実装 {#implementation-of-new-controls}

[カスタムコントロール](decisions/003_custom_controls.md)は、新しいコントロールを追加するために両方を実装する
必要がある 2 つのコンポーネントで構成されています:

1. コントロール式内で使用するための条件名
1. 条件エバリュエーター

新しいコントロールを実装するには、一般的に GitLab ネイティブのエンティティ（つまり特定のプロジェクト設定）に
対応する条件名を定義する必要があります。このコントロールは `compliance_requirement_expression` JSON スキーマ内で
有効な式列挙として定義される必要があります。

条件エバリュエーターを実装するには、プロジェクトが条件に準拠しているかどうかを判定するためのコードを
クエリエバリュエーターに追加する必要があります。これには、特定のコンプライアンス要件のブール評価を実行するために
コントロールカテゴリごとのカスタム実装が必要です。

### コントロールカテゴリ

新しいコントロールの追加では、評価を実行するために必要なデータを考慮する必要があります。評価のために自動的に
ロードされる前提テーブルが多数あります（[バックグラウンドワーカー経由でのプロジェクトと関連テーブルの取得](#3-retrieval-of-projects-and-associated-tables-via-background-worker)の例を参照）。
これらは一般的に各クエリエバリュエーターグループの基本要件に対応しています。例えば `security_settings` に
対して新しいコントロールが必要な場合、すべてのデータが均一にロードされ評価されることを保証するために
`ComplianceManagement::SecuritySettingConditionEvaluator` などの基本クラスを拡張できます。

### 例

新しい条件スキーマとエバリュエーターを使用した追加の `project settings` フィールドの追加例

```patch
diff --git a/ee/app/validators/json_schemas/compliance_requirement_expression.json b/ee/app/validators/json_schemas/compliance_requirement_expression.json
index 2716c9e702b2..f8f454368a76 100644
--- a/ee/app/validators/json_schemas/compliance_requirement_expression.json
+++ b/ee/app/validators/json_schemas/compliance_requirement_expression.json
@@ -56,6 +56,7 @@
             "project_name",
             "project_visibility",
             "remove_approvals_when_new_commits_are_added",
+            "project_disable_overriding_approvers_per_merge_request",
             "minimum_approvals_required"
           ]
         },
@@ -120,6 +121,7 @@
                 "enum": [
                   "default_branch_protected",
                   "remove_approvals_when_new_commits_are_added",
+                  "project_disable_overriding_approvers_per_merge_request",
                   "at_least_two_approvals",
                   "prevent_approval_by_merge_request_committers",
                   "prevent_approval_by_merge_request_author"
diff --git a/ee/lib/compliance_management/compliance_requirement/query_evaluator.rb b/ee/lib/compliance_management/compliance_requirement/query_evaluator.rb
index 669565880e93..393563dead8a 100644
--- a/ee/lib/compliance_management/compliance_requirement/query_evaluator.rb
+++ b/ee/lib/compliance_management/compliance_requirement/query_evaluator.rb
@@ -85,6 +85,8 @@ def get_field_value(field)
           @project.visibility
         when 'remove_approvals_when_new_commits_are_added'
           @project.reset_approvals_on_push
+        when 'project_disable_overriding_approvers_per_merge_request'
+          @project.disable_overriding_approvers_per_merge_request
         when 'minimum_approvals_required'
           @project.approval_rules.pick("SUM(approvals_required)") || 0
         else
```

## 制約

| 考慮事項 | 制約 |
| ------ | ------ |
| プロジェクト適用性 | 関連フレームワークを持つ Ultimate プロジェクト |
| プロジェクトごとのフレームワーク数の上限 | 20 |
| フレームワークごとの要件合計数の上限 | 50 |
| 要件ごとのコントロール合計数の上限 | 5 |
| コントロール式ごとのフィールド合計数の上限 | 5 |
| コントロール式に属することができるフィールド | 適用可能なスキーマに紐付けられた制限アローリスト |
| コントロール式のクエリ複雑度 | ファイルは設定 UI 外ではユーザーによる変更不可であり、スキーマ検証の対象 |
| コンプライアンス検証頻度 | 12 時間 |

## 参考資料

- https://gitlab.com/gitlab-org/software-supply-chain-security/compliance/general/-/issues/233
- https://handbook.gitlab.com/handbook/engineering/architecture/design-documents/compliance-adherence-reporting/
