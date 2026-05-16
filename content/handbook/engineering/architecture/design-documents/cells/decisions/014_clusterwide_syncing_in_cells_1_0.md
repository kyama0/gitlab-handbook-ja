---
owning-stage: "~devops::tenant scale"
title: "Cells ADR 014: Protocell ではクラスター全体の同期を行わない"
toc_hide: true
upstream_path: /handbook/engineering/architecture/design-documents/cells/decisions/014_clusterwide_syncing_in_cells_1_0/
upstream_sha: b4eeb07f0d5f46e2fc5f8572be1a2547261aed89
translated_at: "2026-04-26T00:00:00Z"
translator: claude
stale: false
lastmod: "2025-08-21T08:26:37+02:00"
---

## コンテキスト

一部の機能が動作するために、特定のテーブルのデータをすべての Cell に何らかの方法で同期させる必要があります。
たとえば、`plans`、`subscription_add_ons`、`work_item_types` テーブルはすべての Cell で同一である必要があります。

## 決定事項

1. Protocell ではアプリケーション層でのクラスター全体の同期は行いません。
1. `plans` のような静的データテーブルは同期を必要とせず、アプリケーションコードにハードコードすることで常に一貫性を保つよう変換します。
   良い例として [VisibilityLevel](https://gitlab.com/gitlab-org/gitlab/-/blob/5ae43dface737373c50798ccd909174bcdd9b664/lib/gitlab/visibility_level.rb#L25-27) があります。
1. `application_settings` のような Cell 設定テーブルは独立して設定できます。
   [Terraform](https://gitlab.com/gitlab-org/gitlab/-/issues/505685) のような外部のシングルソースオブトゥルースが、Cell の各[リング](../infrastructure/index.md#rings)に対して目標値を伝播します。
   これをサポートするために、各 Cell 設定テーブルに内部 API が必要です。

## 長所

1. フォロワー Cell での書き込みを防ぐ作業、同期サービスのセットアップ、各静的データ型テーブルを更新する API の作成が不要になります。
1. 整合性リスクが軽減されます。何らかの理由で同期が失敗した場合、アプリケーションが不正なデータを生成し始める可能性があります。たとえば、不正な `plan_id` 値を持つ `gitlab_subscriptions` が作成される可能性があります。`plan_id` カラムをグローバルに一意な参照に置き換えることで、整合性リスクを排除できます。
1. Cell / データベース間でリーダー/フォロワーのトポロジーを作成したり、クラスターをクォーラム状態に保つ必要がなくなります。
1. 各 Cell は完全に独立しており、互いに依存しません。

## 短所

1. Cell 設定については、設定のドリフトが短時間発生することを許容する必要があります。
1. 静的データテーブルについては、これらのデータに依存するダウンストリームサービスが存在する可能性があります。そのため、ダウンストリームサービスを新しいデータを使用するように更新する前に、すべてのリングにアプリケーションの変更が完全に伝播するのを待つ必要があります。

## クラスター全体のテーブルの分析

クラスター全体のテーブルの分析が 2025-01-13 に実施されました。
結果として、4 つの異なるタイプに分類できます。

1. 静的データテーブル: すべての Cell で一定 / 同一のテーブル。
1. Cell 設定テーブル: すべての Cell に影響する設定をホストするテーブル。
1. Organization / Cell テーブル: `gitlab_main_cell` として分類した方が適切なテーブル。
1. ユーザーテーブル: ユーザーに関連するテーブル。組織間アクセスが必要な場合に同期できます。

[このセクション](#tables)では、全テーブルとその各タイプの完全なリストを示します。

### Cell 設定テーブル

#### application_settings

関連 Issue: [issue 505685](https://gitlab.com/gitlab-org/gitlab/-/issues/505685) を参照してください。

要約すると、外部のシングルソースオブトゥルースを使用して各 Cell の Application Settings を設定します。

移行ステップとして、まずレガシー Cell から現在の値を取得し、外部のシングルソースオブトゥルースにコピーします。
外部のシングルソースオブトゥルースはその後、各リングに値を伝播します。

設定を作成する際、開発者はその設定のデフォルト値が任意の Cell で正しく機能することを確認する必要があります。
これは特に、新しい設定が外部のシングルソースオブトゥルースによってまだ設定されていない場合に重要です。

#### broadcast_messages

`application_settings` と同様に、ブロードキャストメッセージは外部のシングルソースオブトゥルースによって設定されます。

`broadcast_messages.id` カラムは `user_broadcast_message_dismissals` テーブルから参照されており、ユーザーがブロードキャストメッセージを非表示にしたかどうかを記録するために使用されます。
整合性を向上させるため、`broadcast_messages.id` の値は API 経由で直接設定できます。

### 静的データテーブル

参照テーブルをアプリケーションコードに変換します。

#### plans

plans テーブルは `id`、`name`、`title` カラムを持つシンプルなテーブルです。
また、`name` カラムに一意インデックスがあります。
`plan_limits` と `gitlab_subscriptions` という 2 つの参照テーブルがあります。

問題は、すべての Cell で `name` と `id` が一致しない不整合データが各 Cell で生成される可能性があることです。

解決策は単純です。
各プランのグローバルに一意な参照が必要です。
以下のような enum を使用できます。

```ruby
  enum :name_uid,
    default: 1,
    free: 2,
    bronze: 3,
    silver: 4,
    premium: 5,
    gold: 6,
    ultimate: 7,
    ultimate_trial: 8,
    ultimate_trial_paid_customer: 9,
    premium_trial: 10,
    opensource: 11
```

そして `id` カラムを削除します。
その後、すべての参照テーブルで新しい `name_uid` カラムを使用します。

別の代替案として、`plans` テーブルを完全に削除し、ハードコードされたプランのリストを使用することもできます。

#### subscription_add_ons

`subscription_add_ons` テーブルも `id`、`name`、`description` カラムを持つシンプルなテーブルです。
こちらも `name` カラムに一意インデックスがあります。

`plans` と同様に、`name_uid` カラム戦略を採用するか、テーブルを完全に削除することができます。

#### work_item_types

`work_item_types` テーブルは[一定の ID セット](https://gitlab.com/groups/gitlab-org/-/epics/15272)を持つよう再編成されました。

特に理由がなければ、ワークアイテムタイプのハードコードされたリストを使用するようさらに変換すべきです。

#### abuse_report_labels

`abuse_report_labels` テーブルにはいくつかのカラムがあります。

- `id`
- `cached_markdown_version`
- `title`
- `color`
- `description`
- `description_html`

`title` カラムに一意インデックスがあります。

このテーブルを Cell 間で同期させる概念的な必要性はありません。
abuse report は独立したレコードです。
`abuse_report_labels` は abuse report に添付されるラベルです。

問題が生じるのは、`abuse_report_labels` が Cell 間で移動される場合のみで、
`title` カラムの一意性違反が発生します。
最も簡単な対処は一意性制約を削除し、重複を許可することです。

または、重複を排除するために `(Cell 2)` をタイトルに追加することもできます。

#### programming_languages

`programming_languages` テーブルは `id`、`name`、`color` カラムを持つテーブルです。
このテーブルは `name` カラムに一意インデックスがあります。

`plans` と同様に、`name_uid` カラム戦略を採用して `id` カラムを削除できます。
データは Gitaly（linguist）から来るため、安定した方法で `name` を整数にマッピングする必要があります。
このマッピングは GitLab Ruby モノリスまたは Gitaly に保存できます。

<https://gitlab.com/gitlab-org/gitlab/-/blob/816e3ce6770ad96e3d5b0d7dae4925d63efa02fc/vendor/languages.yml>
には言語の完全なリストがあります。
`language_id` フィールドを使用できる可能性があります。

すべての参照テーブルは `id` の代わりに `name_uid` カラムを参照するよう切り替えます。

#### security_training_providers

`security_training_providers` テーブルにはいくつかのカラムがあります。

- `id`
- `name`
- `description`
- `url`
- `logo_url`

`name` に一意インデックスがあります。

`plans` と同様に、`name_uid` カラム戦略を採用して `id` カラムを削除できます。
すべての参照テーブルは `name_uid` カラムを参照するよう切り替えます。

ただし、行数が 3 つのみのため、テーブルを完全に削除してアプリケーションコード内で定義することもできます。

```ruby
SECUREFLAG_DATA = {
  name_uid: 1,
  name: 'SecureFlag',
  description: "Get remediation advice with example code and recommended hands-on labs in a fully
                interactive virtualised environment.",
  url: "https://knowledge-base-api.secureflag.com/gitlab"
}.freeze
```

### Organization / Cell テーブル

これらのテーブルは `gitlab_main_clusterwide` として誤って分類されている可能性が高く、
代わりに `gitlab_main_cell` として分類し直す必要があります。

### ユーザーテーブル

これらのテーブルは `users` テーブルに関連しています。

Protocell ではユーザーは 1 つの Cell にのみ存在できるため、現時点ではユーザー関連データを同期させる必要はありません。

## テーブル一覧 {#tables}

以下はすべてのクラスター全体テーブルとそのタイプの一覧です。

| テーブル | 静的データテーブル | Cell 設定テーブル | Organization/Cell テーブル | ユーザーテーブル | 新規 GDK に行あり |
|-----------------------------------------------------------|-----------------|------------------------|-------------------------|------------|-------------------------|
| ai_feature_settings                                       |                 | Y                      | Maybe ?                 |            | N                       |
| ai_settings                                               |                 | Y                      |                         |            | N                       |
| appearances                                               |                 | Y                      |                         |            | N                       |
| application_settings                                      |                 | Y                      |                         |            | Y                       |
| cloud_connector_access                                    |                 | Y                      |                         |            | N                       |
| plan_limits                                               |                 | Y                      |                         |            | N                       |
| service_access_tokens                                     |                 | Y                      |                         |            | N                       |
| ai_self_hosted_models                                     |                 | Y                      | Maybe ?                 |            | N                       |
| application_setting_terms                                 |                 | Y                      |                         |            | N                       |
| broadcast_messages                                        |                 | Y                      | Maybe ?                 |            | N                       |
| licenses                                                  |                 | Y                      |                         |            | N                       |
| plans                                                     | Y               |                        |                         |            | Y                       |
| subscription_add_ons                                      | Y               |                        |                         |            | Y                       |
| work_item_hierarchy_restrictions                          | Y               |                        |                         |            | Y                       |
| work_item_related_link_restrictions                       | Y               |                        |                         |            | Y                       |
| work_item_types                                           | Y               |                        |                         |            | Y                       |
| work_item_widget_definitions                              | Y               |                        |                         |            | Y                       |
| abuse_events                                              |                 |                        |                         | Y          | N                       |
| abuse_report_assignees                                    |                 |                        |                         | Y          | N                       |
| abuse_report_events                                       |                 |                        |                         | Y          | N                       |
| abuse_report_label_links                                  |                 |                        |                         | Y          | Y                       |
| abuse_report_labels                                       |                 |                        |                         | Y          | Y                       |
| abuse_report_notes                                        |                 |                        |                         | Y          | N                       |
| abuse_report_user_mentions                                |                 |                        |                         | Y          | N                       |
| abuse_reports                                             |                 |                        |                         | Y          | Y                       |
| abuse_trust_scores                                        |                 |                        |                         | Y          | N                       |
| ai_testing_terms_acceptances                              |                 |                        | Maybe                   |            | N                       |
| atlassian_identities                                      |                 |                        |                         | Y          | N                       |
| audit_events_instance_amazon_s3_configurations            |                 |                        | Maybe                   |            | N                       |
| audit_events_instance_external_audit_event_destinations   |                 |                        | Maybe                   |            | N                       |
| audit_events_instance_external_streaming_destinations     |                 |                        | Maybe                   |            | N                       |
| audit_events_instance_google_cloud_logging_configurations |                 |                        | Maybe                   |            | N                       |
| audit_events_instance_streaming_event_type_filters        |                 |                        | Maybe                   |            | N                       |
| audit_events_streaming_instance_event_type_filters        |                 |                        | Maybe                   |            | N                       |
| authentication_events                                     |                 |                        |                         | Y          | Y                       |
| aws_roles                                                 |                 |                        |                         | Y          | N                       |
| banned_users                                              |                 |                        |                         | Y          | N                       |
| deploy_tokens                                             |                 |                        |                         | Y          | N                       |
| early_access_program_tracking_events                      |                 |                        |                         | Y          | N                       |
| emails                                                    |                 |                        |                         | Y          | Y                       |
| ghost_user_migrations                                     |                 |                        |                         | Y          | N                       |
| gpg_key_subkeys                                           |                 |                        |                         | Y          | N                       |
| gpg_keys                                                  |                 |                        |                         | Y          | N                       |
| identities                                                |                 |                        |                         | Y          | N                       |
| instance_audit_events                                     |                 |                        | Maybe                   |            | N                       |
| instance_audit_events_streaming_headers                   |                 |                        | Maybe                   |            | N                       |
| instance_integrations                                     |                 |                        | Maybe                   |            | N                       |
| keys                                                      |                 |                        |                         | Y          | Y                       |
| oauth_applications                                        |                 |                        | Maybe                   |            | N                       |
| programming_languages                                     | Y               |                        | Maybe                   |            | Y                       |
| redirect_routes                                           |                 |                        | Y                       |            | N                       |
| routes                                                    |                 |                        | Y                       |            | Y                       |
| saved_replies                                             |                 |                        |                         | Y          | N                       |
| security_training_providers                               | Y               |                        | Maybe                   |            | Y                       |
| smartcard_identities                                      |                 |                        |                         | Y          | N                       |
| spam_logs                                                 |                 |                        |                         | Y          | Y                       |
| term_agreements                                           |                 |                        |                         | Y          | N                       |
| user_agent_details                                        |                 |                        |                         | Y          | N                       |
| user_audit_events                                         |                 |                        |                         | Y          | Y                       |
| user_broadcast_message_dismissals                         |                 |                        |                         | Y          | N                       |
| user_callouts                                             |                 |                        |                         | Y          | N                       |
| user_credit_card_validations                              |                 |                        |                         | Y          | N                       |
| user_custom_attributes                                    |                 |                        |                         | Y          | N                       |
| user_details                                              |                 |                        |                         | Y          | Y                       |
| user_follow_users                                         |                 |                        |                         | Y          | N                       |
| user_highest_roles                                        |                 |                        |                         | Y          | N                       |
| user_member_roles                                         |                 |                        |                         | Y          | N                       |
| user_permission_export_uploads                            |                 |                        |                         | Y          | N                       |
| user_phone_number_validations                             |                 |                        |                         | Y          | N                       |
| user_preferences                                          |                 |                        |                         | Y          | Y                       |
| user_statuses                                             |                 |                        |                         | Y          | N                       |
| user_synced_attributes_metadata                           |                 |                        |                         | Y          | N                       |
| users                                                     |                 |                        |                         | Y          | Y                       |
| users_statistics                                          |                 |                        |                         | Y          | N                       |
| vs_code_settings                                          |                 |                        |                         | Y          | N                       |
| webauthn_registrations                                    |                 |                        |                         | Y          | N                       |
