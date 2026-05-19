---
title: Activation Engine
status: proposed
creation-date: "2025-11-18"
authors: [ "@jmontal", "@dstull" ]
coaches: [ ]
dris: [ "@jtucker_gl", "@ghosh-abhinaba", "@jmontal", "@dstull" ]
owning-stage: "~devops::growth"
participating-stages: []
toc_hide: true
upstream_path: /handbook/engineering/architecture/design-documents/activation_engine/
upstream_sha: b4eeb07f0d5f46e2fc5f8572be1a2547261aed89
translated_at: "2026-04-26T03:00:00Z"
translator: claude
stale: false
lastmod: "2026-01-02T17:51:22+05:30"
---


{{< engineering/design-document-header >}}


## Summary

Activation Engine は、ユーザーのアクティベーションとエンゲージメントを促進するために設計された基盤システムであり、主要マイルストーン（Setup、Aha、Habit）を通じたユーザーの進捗を追跡し、その状態に基づいてパーソナライズ体験をオーケストレーションします。この設計ドキュメントでは、ユーザーメトリクス完了追跡システムを使用した初期実装アプローチをまとめており、これによりアクティベーション実験のための基盤を提供しつつ、将来の拡張性のためのパターンを確立します。

初期実装では、新規ユーザー向けにターゲットを絞ったアクティベーション実験を可能にするため、特定のユーザーアクションとマイルストーンの追跡に焦点を当てています。データベース駆動のアプローチにより、Growth チームが外部データソースに依存することなく素早くイテレーションできるようにします。エンジンは、ユーザーのアクティベーション状態に基づいてパーソナライズ体験を提示するため、複数の配信メカニズム（バナー、通知、ページルーティング、スケジュール通知）をオーケストレーションします。

## 用語集

- **CQRS（Command Query Responsibility Segregation）**: 読み取りと書き込みの操作を別々のモデルに分離し、それぞれを独立して最適化・スケーリングできるようにするアーキテクチャパターン
- **DIP（Data Insights Platform）**: GitLab の標準化されたデータアクセス層。複数のデータソースをまたいだ統一クエリインターフェースを提供するように設計されています
- **MVC（Minimum Viable Change）**: 価値を提供できる最小の変更で、その後のイテレーションが可能なもの
- **Snowplow**: アナリティクスイベントを収集してルーティングする GitLab のイベントトラッキングパイプライン
- **ClickHouse**: 分析クエリと大容量データの取り込みに最適化されたカラム型データベース管理システム
- **Internal Events**: 複数の宛先（Snowplow、Redis カウンタなど）にイベントをルーティングする GitLab の統一イベントトラッキングシステム
- **Root Namespace**: GitLab の階層におけるトップレベル名前空間（グループまたは個人名前空間）

## Motivation

GitLab ユーザーは、プラットフォームを効果的にナビゲートし活用しようとする際、いくつかの課題に直面します:

- **情報過多**: ユーザーには情報や選択肢が多すぎ、最も重要なことに集中するのが困難。
- **画一的な体験**: ロール、経験レベル、利用パターンに関係なく、すべてのユーザーが同じインターフェースとレコメンデーションを受け取る
- **発見性の低さ**: 価値ある機能が、それを必要とするユーザーから隠れていたり、見つけにくかったりする。
- **非効率なワークフロー**: 頻繁に使う機能へのナビゲーションや、簡略化できるワークフローの再構築に時間を費やす。
- **オンボーディングの摩擦**: 新規ユーザーがどう始めて素早くゴールを達成するかを理解するのに苦労する。
- **機能採用ギャップ**: 生産性と成功を向上させる関連機能をユーザーが発見できない。

### Goals

1. **迅速な実験を可能にする**: 複雑なデータインフラを待たずに、Growth チームがアクティベーション実験を素早く実行できるようにする。
2. **ユーザーアクティベーションマイルストーンを追跡**: Setup、Aha、Habit ステージを通じた進捗を示す主要なユーザーアクションと完了を捕捉する。
3. **パーソナライズ体験をオーケストレーション**: ユーザーのアクティベーション状態に基づいて、ターゲットを絞った UI 要素、通知、ページルーティング、スケジュール通知を可能にする。
4. **拡張可能なパターンを確立**: 将来、より洗練されたアクティベーションとエンゲージメント戦略をサポートするように進化できる基盤を構築する。
5. **パフォーマンスを維持**: 追跡と配信システムが、アプリケーションパフォーマンスとユーザー体験への影響を最小化することを保証する。

### Non-Goals

1. **動的な監査イベントフィルタリング**: 初期実装では、既存の監査イベントや他のデータソースから動的にデータを取得しない。
2. **Snowflake 統合**: この実装は、リアルタイムパーソナライゼーションのために Snowflake などの分析データウェアハウスと統合しない。
3. **Self-Managed サポート（初期）**: 初版は GitLab.com（SaaS）にスコープし、self-managed インスタンスはサポートしない。
4. **包括的なユーザープロファイリング**: これは完全なユーザープロファイリングシステムではなく、特定のアクション可能なメトリクスに焦点を当てる。
5. **機械学習レコメンデーション**: 初版には ML ベースのレコメンデーションエンジンは含まれない。

## Proposal

### 進める道筋: User Metric Completions

Activation Engine におけるユーザーメトリクス完了の追跡のために、データベーステーブル設計の実装を提案します。
これにより v1 向けの静的ソリューションが提供され、将来的な動的監査イベントフィルタリングへの拡張可能性も残ります。

#### 概要

Activation Engine は、定義済みメトリクスの完了ステータスを記録する専用データベーステーブルを通じて、特定のユーザーアクションとマイルストーンを追跡します。
このアプローチにより、Growth チームは以下が可能になります:

- アクティベーション実験により早く着手する
- Snowflake やその他の外部データソースへの依存を回避する
- 追跡対象のメトリクスを自分たちでコントロールする
- 実験結果に基づいて素早くイテレーションする

#### ユーザージャーニーフロー

![ユーザーフロー図](/images/engineering/architecture/design-documents/personalization_engine/user_flow_diagram.png)

### メトリクス駆動のパーソナライゼーションフロー

Activation Engine は、ユーザーアクティベーションとエンゲージメントを促進する継続的なフィードバックループを通じて動作します:

#### 1. ユーザーアクティベーション状態の追跡

ユーザーアクティベーション状態はメトリクスとしてデータベースに保存され、主要マイルストーンを通じた進捗を捕捉します:

- **Setup メトリクス**: ユーザーが最初のアカウントとプロジェクトのセットアップを完了した
- **Aha メトリクス**: ユーザーが GitLab のコアバリューを体験した（例: 初回コードプッシュ、パイプライン成功、MR マージ）
- **Habit メトリクス**: ユーザーが定期的なエンゲージメントとプラットフォーム機能の採用を示している

これらのメトリクスは、パーソナライゼーション判断の参考となる、明確に区別されたアクティベーションステージを表します。

#### 2. アクティベーション判定ロジック

エンジンは、パーソナライゼーションへの準備状態を判断するためにユーザーメトリクスを評価します:

- **メトリクス評価**: ユーザーが前提となるメトリクスを完了しているかを確認（例: ユーザーが Aha モーメントに到達したか?）
- **準備状況の判定**: ユーザーが特定の体験を提示するに適したアクティベーションステージにいるかを判定
- **適格性フィルタリング**: 実験固有のルールを適用して、パーソナライゼーションを提示するか決定

この判定ロジックにより、パーソナライズ体験が各ユーザーにとって適切でタイムリーであることを保証します。

#### 3. パーソナライズ UX の提示

アクティベーション状態に基づいて、エンジンは複数の配信メカニズムを通じてパーソナライズ体験をオーケストレーションします:

- **ページルーティング**: アクティベーションステージに基づいて、ユーザーを関連機能やオンボーディングフローへ誘導
- **通知**: アクティベーションジャーニーの次のステップを促すターゲット通知を送信
- **バナー / アラート**: ユーザーの現在のステージに関連する機能やアクションを強調するコンテキスト UI 要素を表示
- **スケジュール通知**: 特定のアクティベーションステージにいるユーザーへターゲット通知を配信

#### 4. 配信タイミング

パーソナライズ体験は 2 つの補完的なアプローチで配信されます:

- **オンデマンド**: ユーザーがプロダクトとインタラクションする際にトリガー（例: ユーザーが機能を訪問した時にバナー表示）
- **事前定義スケジュール**: スケジュールに従って配信（例: ユーザーが Aha に到達していない場合、サインアップ 7 日後に再アクティベーションメール送信）

#### 5. エンゲージメントと完了の追跡

エンジンは、ユーザーがパーソナライズ体験とどうインタラクションするかを追跡します:

- **完了メトリクス**: パーソナライゼーションによって促されたアクションをユーザーが完了したことを記録（例: 「ユーザーがバナーを見た後に初回 MR をマージした」）
- **エンゲージメントメトリクス**: ナッジに対するユーザー反応を測定（例: バナー却下、メール開封、通知クリック）
- **状態の更新**: 完了したアクションに基づいてユーザーアクティベーションメトリクスを更新し、判定ループへフィードバックする

#### 6. 継続的改善ループ

追跡されたメトリクスは継続的な最適化に活用されます:

- **エンゲージメント分析**: どの配信メカニズムとメッセージがユーザーに響くかを理解
- **イテレーション**: 計測結果とエンゲージメントパターンに基づいてパーソナライゼーション戦略を洗練

#### 利点

- **市場投入までの時間が短縮**: Growth がパーソナライゼーション実験により早く着手可能
- **実証済みパターン**: ユーザー中心のオンボーディング体験で提案された実装パターンや、現在の名前空間ベースのオンボーディング進捗と類似
- **パフォーマンスのコントロール**: 直接的なデータベースアクセスにより予測可能なパフォーマンス特性を提供
- **柔軟性**: 実験の進化に応じて新しいメトリクスを追加しやすい

#### トレードオフ

- **動的に駆動されない**: データは既存のデータソース（監査イベントや Snowflake など）から取得されない
- **スコープ制限**: 当初は新規ユーザーにスコープされる可能性が高い
- **保守オーバーヘッド**: 既存のイベントストリームを活用するのではなく、別途追跡ロジックを保守する必要がある
- **データの重複**: 追跡されるデータの一部が、システムの他の場所で利用可能な情報と重複する可能性

## オーナーシップとスコープ

**v1 のオーナーシップ:** Activation Engine は、GitLab.com 上のアクティベーション実験のために Growth チームによって所有・運営されます。

**意思決定:** Growth チームは、Activation Engine の目標（Setup → Aha → Habit モーメント）に基づいて、追跡するメトリクスと提示する体験を決定します。

**実装:** Growth エンジニアが、メトリクス追跡とパーソナライズ UI 要素の両方を実装します。
v1 では、これは他のチーム向けのセルフサービスプラットフォームではありません。

**将来の進化:** 他のプロダクトチームが自分たちのアクティベーションとエンゲージメントニーズのために Activation Engine の利用に関心を示した場合、ドキュメント化されたコントリビューションプロセスを備えた共有プラットフォームへの拡張を評価します。
当面は Growth のアクティベーション実験にスコープされます。

**アクティベーション体験の具体例（v1）:**

- ユーザーに初回マージリクエスト完了（Aha モーメント）を促すコンテキストプロンプト
- ユーザーの進捗マイルストーンに応じて表示・非表示するオンボーディングツールチップ
- ユーザーが既に達成したことに基づく、エンプティステートでのパーソナライズドガイダンス
- アクティベーションステージ（Setup vs. Aha vs. Habit）に基づくターゲット機能発見
- Aha モーメントに到達していないユーザー向けの再アクティベーション通知
- アクティベーションジャーニーの次のステップを促す通知

## Design and implementation details

![データモデル](/images/engineering/architecture/design-documents/personalization_engine/data_model_diagram.png)

### データベーススキーマ

#### Personalization metrics テーブル

設計は、読み取り時に正規化を行う単一テーブルを使用しており、ユーザーレベルの追跡を主要モデルとして保ちつつ、将来の集約機能に向けたオプションの名前空間コンテキストを追加します。

```ruby
create_table :personalization_metrics do |t|
    t.bigint :user_id, null: false
    t.bigint :namespace_id, null: true
    t.integer :metric, null: false, limit: 2 # ActiveRecord enum
    t.timestamps_with_timezone null: false

    t.index [:user_id, :namespace_id, :metric], unique: true, name: 'unique_personalization_metric_user_id_namespace_id_and_metric'
    t.index [:namespace_id, :metric], name: 'index_personalization_metrics_on_namespace_id_and_metric'
end
```

Metric カラム: PersonalizationMetric モデルで定義された ActiveRecord enum。値の例:

- code_push_activity (0)
- pipeline_success (1)
- merge_request_completion (2)

smallint 型（limit: 2）は最大 32,767 のメトリクスタイプをサポートします。

#### 主要な設計判断

1. **ユーザーレベルの追跡**: ユーザーレベルのメトリクスを主要な追跡メカニズムとして維持（現在の設計通り）
2. **オプションの名前空間コンテキスト**: アクションが発生したコンテキストを捕捉するため `namespace_id` を追加し、将来の名前空間レベルパーソナライゼーションを可能に
3. **読み取り時の正規化**: データはユーザーレベルで保存され、名前空間レベルのパーソナライゼーションをクエリする時に正規化 / 集約される
4. **メトリクス識別子**: 新しいメトリクス追加の柔軟性のための整数ベース識別子
5. **一意制約**: ユーザー - メトリクスレベルでのデータ整合性を保証
6. **複合インデックス**: ユーザーレベルと名前空間レベル両方のルックアップを効率的にサポート
7. **安全な並行書き込み**: Upsert 操作は確立された GitLab のパターン（[OrganizationUser](https://gitlab.com/gitlab-org/gitlab/blob/afe043ec9c9abc62feb949c7f10bd4f3dd079f9d/app/models/organizations/organization_user.rb#L46-46) と類似）に従い、メトリクスが並行記録される際の競合状態を処理する

#### 名前空間削除に関する制約の考慮

`namespace_id` 外部キーは、名前空間が削除されてもユーザーメトリクスデータを保持するために `ON DELETE SET NULL` を使用します。
名前空間が削除されると、`namespace_id` は NULL 化されますが、追跡対象の主要エンティティはユーザーであるため、ユーザーのメトリクスレコード自体は無傷で残ります。

**PostgreSQL の NULL ハンドリング**: PostgreSQL は一意制約において NULL 値を DISTINCT として扱います（[参考](https://www.linkedin.com/pulse/postgresql-unique-constraint-null-values-mykhaylo-symulyk-fpkwf)）。これは、`[:user_id, :namespace_id, :metric]` の一意制約で、`namespace_id` が NULL の場合、同じ `user_id` と `metric` を持つ複数行を許可することを意味します。
この動作は、私たちの設計目標をサポートします:

- ユーザーは異なる名前空間にまたがって同じメトリクスを複数回記録できる
- 名前空間が削除されると、NULL 化された `namespace_id` の値は一意制約違反を生じない
- ユーザーレベルのメトリクス（名前空間コンテキストなしで記録）が、名前空間固有のメトリクスと共存する

**実装**: 削除シナリオに対して特別なトリガーやアプリケーションレベルの競合処理は不要です。PostgreSQL の NULL ハンドリングが私たちのデータモデルを自然にサポートするためです。

#### トレードオフ

**クエリ複雑性 vs. 書き込み単純性**:

- **書き込み単純性**: ユーザーレベル追跡を維持することで、書き込みパスはシンプルかつパフォーマントに保たれます。メトリクスの記録は、複雑な集約ロジックなしで単純な insert/upsert 操作のままです。
- **クエリ複雑性**: 名前空間レベルのパーソナライゼーションには、クエリ時にユーザーレベルデータを集約する必要があります。これは読み取り操作に計算オーバーヘッドを追加しますが、データの集約方法と解釈において柔軟性を提供します。
- **スケーラビリティの考慮**: 追跡されるメトリクスとユーザーの数が増えると、名前空間レベルのクエリには、キャッシングや materialized view を通じた最適化が必要になる可能性があります。

#### イベント定義とメトリクスマッピング間の整合性維持

`METRIC_MAPPINGS` ハッシュは、イベント YAML ファイル（例: `config/events/push_code.yml`）と `PersonalizationMetric` enum 値の間のリンクを作成します。整合性を確保するため:

**v1 の検証:**

- カスタム linting が `METRIC_MAPPINGS` のキーがイベント YAML ファイルと一致することを検証
- マッピングが同期外れになると CI チェックが失敗
- 統合テストが完全な イベント → メトリクス記録 のフローを実行

**同期を保つべきソース:**

1. イベント YAML ファイル（`config/events/*.yml`）- どのイベントが追跡をトリガーするかを定義
2. モデル enum（`PersonalizationMetric`）- データベース内のメトリクスタイプを定義
3. `METRIC_MAPPINGS` ハッシュ - イベントとメトリクスをリンク

**将来の考慮事項:**

- メトリクスの数が大幅に増えた場合、YAML から enum へ（または逆）のコード生成
- 他のシステムがこれらのメトリクスを参照する必要がある場合の共有定数ファイル

### サービス層アーキテクチャ

Personalization Engine は、関心の分離を明確にしたサービス指向アーキテクチャと、将来のストレージバックエンドの変更を可能にする抽象化層を使用します。

## Internal Events 統合 {#internal-events-integration}

### Analytics Single instrumentation 層の活用

Personalization Engine は、AI 使用追跡が[実装されている](https://docs.gitlab.com/development/internal_analytics/instrumentation_layer/#additional-tracking-systems)のと同様に、実証済みの [Single Instrumentation Layer](https://docs.gitlab.com/development/internal_analytics/instrumentation_layer/) を使用して GitLab の既存の Internal Events システムと統合します。

#### アーキテクチャ概要

コアトラッキングロジックを変更する代わりに、イベント定義の構成を通じてイベント追跡システムを拡張します:

1. **PersonalizationTracking モジュール:** Internal Events のルーターからイベントを受け取る専用トラッキングモジュール
2. **イベント設定:** パーソナライゼーション追跡を宣言する YAML ベースのイベント定義
3. **ストレージアダプター:** 複数のバックエンド（PostgreSQL と ClickHouse）をサポートする抽象化層

#### 実装パターン

**トラッキングモジュールの例**
_lib/gitlab/tracking/personalization_tracking.rb_

```ruby
module Gitlab
    module Tracking
        module PersonalizationTracking
            class << self
                def track_event(event_name, **context)
                    storage_adapter.record_metric(event_name, context)
                end

                private

                def storage_adapter
                    if Feature.enabled?(:personalization_clickhouse_storage)
                        ClickHouseAdapter.new
                    else
                        PostgresAdapter.new
                    end
                end
            end

            class PostgresAdapter
                def record_metric(event_name, context)
                    user = context[:user]
                    namespace = context[:namespace]&.root_namespace || context[:project]&.root_namespace
                    metric_type = METRIC_MAPPINGS[event_name]

                    return unless user && metric_type

                    # Check if metric already exists to avoid unnecessary upsert
                    return if PersonalizationMetric.exists?(
                        user_id: user.id,
                        namespace_id: namespace&.id,
                        metric: metric_type
                    )

                    PersonalizationMetric.upsert(
                        {
                            user_id: user.id,
                            metric: metric_type,
                            namespace_id: namespace&.id
                        },
                        unique_by: [:user_id, :namespace_id, :metric]
                    )
                end

                METRIC_MAPPINGS = {
                    'push_code' => :code_push_activity,
                    'pipeline_succeeded' => :pipeline_success,
                    'merge_request_merged' => :merge_request_completion
                }.freeze
            end

            class ClickHouseAdapter
                def record_metric(event_name, context)
                    # Future implementation for ClickHouse/DIP
                end
            end
        end
    end
end
```

**イベント設定**
_config/events/push_code.yml_

```yml
action: push_code
category: source_code
internal_events: true
extra_trackers:
    - tracking_class: Gitlab::Tracking::PersonalizationTracking
      protected_properties: {}
```

#### イベントフロー

**アプリケーションコードがイベントをトリガー**
`Gitlab::InternalEvents.track_event('push_code', user: current_user, project: project)`

自動ルーティング:

1. Snowplow トラッキング
2. メトリクス定義が存在する場合、Redis カウンタ更新
3. PersonalizationTracking.track_event（extra_trackers 経由）
4. personalization_metrics テーブルへ記録

#### 利点

- 非侵襲的: Internal events のコアロジックに変更不要
- 実証済みパターン: [ee/lib/gitlab/tracking/ai_tracking.rb](https://gitlab.com/gitlab-org/gitlab/blob/dabea7ad3f68f0ae1d0bac09191f4b82b30dc3a6/ee/lib/gitlab/tracking/ai_tracking.rb#L7-7) と同じアーキテクチャに従う
- 宣言的設定: [ee/config/events/code_suggestion_rejected_in_ide.yml](https://gitlab.com/gitlab-org/gitlab/blob/dabea7ad3f68f0ae1d0bac09191f4b82b30dc3a6/ee/config/events/code_suggestion_rejected_in_ide.yml#L1-1) と同様、YAML 経由でイベントを設定
- 独立したテスト: パーソナライゼーション追跡を独立してテスト可能
- フィーチャーフラグ制御: コード変更なしで簡単に有効化 / 無効化
- 将来対応: ストレージアダプターパターンで ClickHouse/DIP へのシームレスな移行が可能

#### 参考実装

- Core Internal Events: [lib/gitlab/internal_events.rb](https://gitlab.com/gitlab-org/gitlab/blob/dabea7ad3f68f0ae1d0bac09191f4b82b30dc3a6/lib/gitlab/internal_events.rb#L4-4) - イベントルーティングと extra_trackers の起動
- Contribution Analytics: [lib/gitlab/tracking/contribution_analytics_tracking.rb](https://gitlab.com/gitlab-org/gitlab/blob/d39e4b11f287cc4e862f760c7f692e7429b025e4/lib/gitlab/tracking/contribution_analytics_tracking.rb#L5-5) - 類似のトラッキングパターン
- AI Tracking の例: [ee/lib/gitlab/tracking/ai_tracking.rb](https://gitlab.com/gitlab-org/gitlab/blob/dabea7ad3f68f0ae1d0bac09191f4b82b30dc3a6/ee/lib/gitlab/tracking/ai_tracking.rb#L7-7) - 類似のトラッキングパターン
- Event Schema: [db/docs/ai_code_suggestion_events.yml](https://gitlab.com/gitlab-org/gitlab/blob/dabea7ad3f68f0ae1d0bac09191f4b82b30dc3a6/db/docs/ai_code_suggestion_events.yml#L5-5) - 追跡イベントのドキュメンテーションパターン
- Event Configuration: [ee/config/events/code_suggestion_rejected_in_ide.yml](https://gitlab.com/gitlab-org/gitlab/blob/dabea7ad3f68f0ae1d0bac09191f4b82b30dc3a6/ee/config/events/code_suggestion_rejected_in_ide.yml#L1-1) - YAML 設定の例

#### CQRS への移行パス

ストレージアダプターパターンは将来の CQRS への進化を自然にサポートします:

- 書き込みパス: PostgresAdapter → ClickHouseAdapter で大量イベント取り込み（バッチ書き込み、または Snowplow パイプライン経由でアンチパターンを回避）
- 読み取りパス: 直接 PostgreSQL クエリ → アナリティクス用に DIP クエリング API
- 移行: フィーチャーフラグで API 変更なしの段階的移行を制御
- 互換性: DIP のサポートが進化しても同じインターフェースを維持

**ClickHouse 書き込みパターンに関する注意:** ClickHouse への小規模・高頻度な書き込みは、非効率なデータマージによりクエリパフォーマンスを低下させ得るアンチパターンです。移行パスでは以下のいずれかでこれに対処します:

- アプリケーション層で書き込みをバッチ化してから ClickHouse に送信
- イベント取り込みに Snowplow パイプラインを活用（バッチ化を処理）
- DIP の取り込み API が利用可能になり次第使用（最適な書き込みパターンを処理）

このアプローチは、迅速な実験という設計ドキュメントの目標に沿いつつ、将来の高度化に向けた拡張可能なパターンを確立します。

#### ストレージ抽象化

代替ストレージバックエンド（ClickHouse、[Data Insights Platform（DIP）](../data_insights_platform/)、その他のデータストアなど）への将来の移行をサポートするため、実装はアダプターパターンや類似の抽象化を使用すべきです:

- **ストレージインターフェース**: メトリクス記録とクエリ操作のための明確なインターフェースを定義
- **初期実装**: アプリケーションデータベースを使用する ActiveRecord ベースのアダプター
- **将来の柔軟性**: アプリケーションロジックを書き直すことなくストレージバックエンドを差し替え可能
- **絶縁層**: ストレージ実装の詳細をビジネスロジックと API 利用者から分離

この抽象化により、MVC は ActiveRecord とローカルデータベースでシンプルに開始しつつ、要件の進化に応じてより専門的なストレージソリューションへ移行する能力を保持できます。例えば、[Data Insights Platform（DIP）](../data_insights_platform/) は、複数のデータソースをまたがる統一クエリインターフェースを提供するように設計された、GitLab の標準化データアクセス層です。DIP が必要なバックエンド（ClickHouse など）をサポートするようになれば、消費者向けの API 表面を維持しながら、読み取りインターフェースとして DIP を使用するように移行できます。

#### メトリクス記録

メトリクス記録サービスは以下を担います:

- ユーザーメトリクス完了の検証と記録
- オプションの名前空間コンテキスト付きユーザーレベルメトリクスのサポート
- 利用可能な場合、アクションが発生した名前空間を捕捉
- ストレージ操作をストレージアダプターに委譲
- **最適化された upsert ロジック:** upsert を試みる前に既存レコードの確認を行い、不要なデータベース操作を最小化（[OrganizationUser パターン](https://gitlab.com/gitlab-org/gitlab/blob/afe043ec9c9abc62feb949c7f10bd4f3dd079f9d/app/models/organizations/organization_user.rb#L46-46) に従う）

**記録場所のガイドライン:**

データベースのパフォーマンスと適切なレプリカ利用を維持するため、メトリクスは既にデータベースに書き込みを行うコンテキストでのみ記録すべきです:

- **状態変更リクエスト:** データを変更する PUT、POST、DELETE 操作
- **バックグラウンドジョブ:** 非同期イベントを処理する Sidekiq worker

メトリクスは以下では **決して** 記録すべきではありません:

- **GET リクエスト:** プライマリデータベースへのセッションスティッキネスを避け、リードレプリカ利用を維持するため
- **読み取り専用操作:** データベース書き込みを既に必要としない操作

これにより、メトリクス記録が不要なプライマリデータベース負荷を導入しないことを保証します。

**v1 の実装:**

- リクエストサイクル内での同期的記録（GitLab 13.8 以降安定している `onboarding_progresses` テーブルと同様）
- ルート名前空間レベルでメトリクスを記録（階層集約は不要）
- 既存のオンボーディング進捗追跡と同程度の負荷を想定

**将来の進化:**

- 大量メトリクス向けに Redis / キューによる非同期処理
- 書き込み量が PostgreSQL の快適ゾーンを超えた時点で、分析データベース（ClickHouse/DIP）への移行
- リアルタイムパーソナライゼーション向けのイベント駆動アーキテクチャ

#### メトリクスクエリ

メトリクスクエリサービスは以下を提供します:

- ユーザーが特定のメトリクスを完了したかの確認
- 全追跡メトリクスにわたるユーザー進捗の取得
- 名前空間レベルアクティベーションクエリ向けに、ユーザーレベルデータを正規化・集約
- アクティベーション実験と UI カスタマイズのためのクエリのサポート
- 読み取り操作をストレージアダプターへ委譲
- **アクティベーション判定ロジック**: 特定のパーソナライズ体験への準備状態を判断するためにユーザーメトリクスを評価

サービスは以下のようなクエリをサポートします:

- 「このユーザーは Aha モーメントに到達したか?」（高度な機能発見を表示するかの判断に使用）
- 「ユーザーの現在のアクティベーションステージは?」（適切なオンボーディングフローへのルーティングに使用）
- 「ユーザーサインアップから何日経過したか?」（再アクティベーションキャンペーンのトリガーに使用）

ストレージ抽象化により、ビジネスロジックとは独立してキャッシング戦略とクエリ最適化を実装できます。
名前空間レベルのクエリでは、サービスが読み取り時にユーザーレベルメトリクスを集約し、名前空間の進捗とエンゲージメントパターンの柔軟な解釈を可能にします。

### 統合ポイント

メトリクス記録サービスは、特定のユーザーアクションが発生した時にトリガーされる必要があります。具体的な統合ポイントと実装アプローチは、既存の GitLab パターンとパフォーマンス要件に基づき、開発中に決定されます。

### データアクセス

Activation Engine は、以下をサポートするためにメトリクスデータを公開する必要があります:

- **UI パーソナライゼーション**: フロントエンドコンポーネントが、インターフェースをカスタマイズするためにユーザーメトリクス完了ステータスをクエリする必要がある
- **アクティベーション判定ロジック**: バックエンドサービスが、提示する体験を決定するためにユーザーメトリクスを評価する必要がある

具体的なアクセスパターンと技術は、パフォーマンス要件と既存の GitLab パターンに基づき、実装中に決定されます。

### パーソナライゼーション配信メカニズム

Activation Engine は、複数の配信チャネルを通じてパーソナライズ体験をオーケストレーションします:

#### ページルーティング

アクティベーションステージに基づいて、ユーザーを関連機能やオンボーディングフローへ誘導:

- 新規ユーザーを Setup 中心のオンボーディングへルーティング
- Setup を完了したユーザーを Aha 中心の機能発見へルーティング
- アクティベートされたユーザーを高度な機能とワークフローへルーティング

#### 通知

アクティベーションステージの進行を促すターゲット通知を送信:

- 現在のステージに関連する機能についてユーザーに通知
- 主要なアクティベーションマイルストーンの完了を促進
- 達成を祝福（例: 「初回マージリクエストおめでとうございます!」）

#### バナーとアラート

ユーザーの現在のステージに関連する機能やアクションを強調するコンテキスト UI 要素を表示:

- エンプティステートで Setup ガイダンスを表示
- ユーザーが準備できたら Aha モーメント機能をハイライト
- アクティベートされたユーザーに高度な機能を促進

#### スケジュール通知

特定のアクティベーションステージにいるユーザーへターゲット通知を配信:

- 新規ユーザー向けウェルカムシリーズ
- Aha モーメントに到達していないユーザー向けの再アクティベーション通知
- Habit ステージのユーザー向けエンゲージメント通知

#### 配信タイミング

体験は 2 つの補完的なアプローチで配信されます:

- **オンデマンド**: ユーザーがプロダクトとインタラクションする際にトリガー（例: ユーザーが機能を訪問した時にバナー表示、ユーザーがアクションを取った時に通知送信）
- **事前定義スケジュール**: スケジュールに従って配信（例: ユーザーが Aha に到達していない場合、サインアップ 7 日後に再アクティベーションメール送信、アクティブユーザー向けの週次エンゲージメントダイジェスト）

### エンゲージメント追跡とメトリクス

Activation Engine は、効果を測定するため、ユーザーがパーソナライズ体験とどうインタラクションするかを追跡します:

#### 完了メトリクス

パーソナライゼーションによって促されたアクションをユーザーが完了したことを記録:

- ユーザーがバナーを見た後に初回 MR をマージ
- ユーザーが通知を受信した後に初回パイプラインを作成
- ユーザーがスケジュール通知を受信した後に Setup マイルストーンを完了

#### エンゲージメントメトリクス

ナッジとパーソナライズ体験に対するユーザー反応を測定:

- バナーのインプレッションと却下
- 通知の開封率とクリックスルー率
- スケジュール通知の開封率、クリック率、コンバージョン率
- パーソナライゼーションを受け取ったユーザー間の機能採用率

#### 状態の更新

完了したアクションに基づいてユーザーアクティベーションメトリクスを更新し、判定ループにフィードバック:

- ユーザーがアクションを完了したら、アクティベーション状態を更新
- 更新された状態に基づいて新しいパーソナライゼーション機会をトリガー
- アクティベーションステージを通じた継続的な進行を可能に

### パフォーマンスの考慮

Activation Engine は GitLab のパフォーマンス基準を維持しなければなりません:

- **メトリクス記録**: ユーザー向け操作をブロックしたり遅らせたりすべきではない
- **メトリクスクエリ**: レイテンシを導入することなく、リアルタイム UI パーソナライゼーションをサポートしなければならない
- **データベースへの影響**: プライマリデータベースへの負荷を最小化
- **ユーザースケーラビリティ**: 設計はユーザー数の成長に対応できる必要がある
- **メトリクスの拡張性**: MVC として、新しいメトリクスの追加にはコード変更が必要。将来のイテレーションでより動的なアプローチを探求する可能性

具体的な最適化戦略（キャッシング、インデックス、パーティション化など）は、計測されたパフォーマンス特性と実際の使用パターンに基づき、実装中に決定されます。

### モニタリングと可観測性

Personalization Engine は、信頼性の高い動作を確保し、スケーリング判断を導くための包括的なモニタリングを確立します。

**運用メトリクス:**

- **システム健全性:**
  - 記録サービスのエラーと成功率
  - クエリサービスのエラーと応答時間
  - データベース接続プール利用率
  - バックグラウンドジョブ処理メトリクス

- **パフォーマンスメトリクス:**
  - メトリクスルックアップのクエリレイテンシ（p50、p95、p99）
  - 書き込みスループット: 1 日 / 時間あたりに作成されるメトリクスレコード数
  - 読み取りスループット: クエリの頻度とパターン
  - データベースクエリパフォーマンスとスロークエリ追跡

- **ストレージメトリクス:**
  - テーブルサイズと成長率
  - インデックスの効率性と使用状況

- **使用パターン:**
  - どのメトリクスが追跡されており、その頻度
  - ユーザーと名前空間のカバレッジ
  - フィーチャーフラグの採用率

- **ビジネスインパクト:**
  - アクティベーション実験の効果（Setup、Aha、Habit 完了率）
  - パーソナライズ体験へのユーザーエンゲージメント（バナーのインプレッション / 却下、通知エンゲージメント、スケジュール通知メトリクス）
  - A/B テスト結果とコンバージョンメトリクス
  - 治療群 vs. 対照群のアクティベーションメトリクスの上昇
  - 配信メカニズム別（オンデマンド vs. スケジュール）のエンゲージメントパターン

具体的なログフォーマット、アラートしきい値、モニタリングダッシュボードは実装中に定義されます。

### キャパシティプランニング

**初期負荷見積もり:**

データベーススキーマが適切に設計され、バックエンド移行への期待値を設定するため、既存のメトリクスをプロキシとして使用します:

- **書き込み量プロキシ:** `onboarding_progresses` テーブルを参照として使用 - 類似のユーザーマイルストーン完了を、比較可能な書き込みパターンとスケールで追跡している
- **ユーザーベース:** v1 を新規ユーザー（GitLab.com 全ユーザーの推定サブセット）にスコープして初期スケールを限定
- **メトリクスのカーディナリティ:** ベースラインのストレージ要件を確立するため、ユーザーあたり 3〜5 のメトリクス追跡で開始
- **読み取りパターン:** パーソナライゼーション UI クエリは、分析的集約ではなくユーザースコープ（単一ユーザールックアップ）

**v1 の想定特性:**

- 書き込みパス: ユーザーリクエストをブロックしないよう、バックグラウンドジョブによる非同期メトリクス記録
- 読み取りパス: user_id とメトリクスタイプによる単純なインデックスルックアップ
- ストレージ: （月あたり新規ユーザー数 × 追跡メトリクス × レコードサイズ）に基づく成長見積もり

**ベースライン確立:**

- **タイムライン:** プロダクション利用の最初の 3 ヶ月
- **アプローチ:** 初期見積もりに対して実際の使用パターンをモニタリングし、仮定を検証してパフォーマンスベースラインを確立

**スケーリング判断ポイント:**

モニタリングされたメトリクスに基づき、以下の場合にスケーリングアクションをトリガーします:

- **書き込み量** が PostgreSQL の快適ゾーンを継続的に超える → 非同期バッチング、または ClickHouse への移行を評価
- **読み取りレイテンシ** が許容しきい値を超えて低下 → キャッシング層またはリードレプリカを実装
- **ストレージ成長** の軌道がキャパシティ問題を示唆 → DIP への移行を計画、またはパーティション化を実装
- **クエリ複雑性** がパフォーマンスに影響 → materialized view または CQRS パターンを検討

ストレージアダプターパターンにより、観測データに基づくバックエンド移行が可能になり、実際のニーズが現れるにつれて段階的にスケールできます。同時に、初期見積もりがスキーマの適切な設計を保証します。

### 実装アプローチ

Activation Engine は、迅速なイテレーションと学習を可能にするため、フェーズに分けて実装されます:

#### フェーズ 1: 基盤と初期実験

1. メトリクスを記録・クエリするシステムを備えたデータベーステーブルとインデックスを作成
2. [Internal Events 統合セクション](#internal-events-integration) で概説されたアクティベーション追跡を含めるよう Internal Events を拡張
3. アクティベーションメトリクス（Setup、Aha、Habit）を実装
4. アクティベーション判定ロジックを備えたメトリクスクエリサービスを構築
5. 配信メカニズム（バナー、ページルーティング、スケジュール通知）を実装
6. パーソナライズ体験のエンゲージメント追跡を追加
7. 初期アクティベーション実験を実行

#### フェーズ 2: 拡張とモジュール化

1. 一般的なアクティベーションパターン向けの再利用可能なモジュラーコンポーネントを構築
2. 将来のアクティベーション概念向けのコンポーネントライブラリを確立
3. アクティベーション実験の実行を開始

## Alternative Solutions

### 代替案 1: POC Connector - 直接 Snowflake 統合

**説明**: ユーザー行動データのために Snowflake を直接クエリ。

**長所**:

- 包括的な履歴データへのアクセス
- 既存のアナリティクスインフラを活用
- 別途追跡を保守する必要がない

**短所**:

- Snowflake は分析用であり運用用ではないというアーキテクチャ原則に違反（確立されたデータアクセスパターンについては [Data Insights Platform 設計](../data_insights_platform/) 参照）
- リアルタイムアクティベーション判定への高レイテンシ
- 複雑なデータアクセスパターンが必要
- コア機能を外部システムに依存
- 既存のインフラ（DIP）を使用しない
- **却下**: アーキテクチャ原則に沿わない

### 代替案 2: DIP 拡張 - Snowflake データへのアクセス

**説明**: DIP を拡張して Snowflake 接続をサポートし、データアクセス層として使用。

**長所**:

- DIP を使用するというアーキテクチャ要請に沿う（[Data Insights Platform 設計](../data_insights_platform/) が DIP を標準化されたデータアクセス層として確立）
- 中央集権的なデータアクセス層
- 将来対応のソリューション

**短所**:

- DIP は現在 Snowflake をサポートしていない
- FY26 の DIP ロードマップに含まれない
- タイムラインが Growth チームのニーズを超える
- アクティベーション実験をブロック
- **却下**: タイムラインがビジネスニーズと両立しない

### 代替案 3: DIP 拡張 - Snowplow イベントを ClickHouse に直接

**説明**: Snowplow パイプラインに ClickHouse を追加宛先として加え、DIP からアクセス可能にする。

**長所**:

- DIP アーキテクチャに沿う
- 既存のイベントストリームを活用
- 大量データに対してスケーラブル

**短所**:

- オーナーシップが不明確なインフラ作業が必要
- タイムラインの不確実性（おそらく FY27Q1）
- Analytics チームのロードマップへの依存
- 即座のアクティベーション実験ニーズをブロック
- **延期**: 将来のイテレーションで検討する可能性

**ブロッカー**

- 現在 [DIP ClickHouse サポート作業](https://gitlab.com/groups/gitlab-org/architecture/gitlab-data-analytics/-/work_items/10) によりブロックされている

## 将来の考慮事項

### 拡張性パス

現在の設計は、将来の拡張のための基盤を提供します:

1. **動的メトリクス定義**: コード変更なしに新しいメトリクスを定義可能に
2. **メトリクス集約**: 複数の基本メトリクスにわたる複雑な集約をサポート
3. **予測メトリクス**: ML を使用してユーザー行動とニーズを予測
4. **リアルタイムストリーミング**: リアルタイム更新のためにイベントストリーミングと統合

### CQRS パターンの進化

ストレージ抽象化層は、Command Query Responsibility Segregation（[CQRS](https://martinfowler.com/bliki/CQRS.html)）パターンへの可能な進化を可能にします:

- **書き込みと読み取りモデルの分離**: アダプターパターンにより、書き込み（コマンド）と読み取り（クエリ）に異なるストレージバックエンドを使用可能
- **書き込み最適化**: メトリクス記録を、大量イベント取り込みに最適化された ClickHouse へ直接書き込み可能
- **読み取り最適化**: メトリクスクエリを、標準化されたクエリング層を提供する DIP（Data Insights Platform）を読み取りインターフェースとして使用可能
- **非同期同期**: DIP が ClickHouse をバックエンドとしてサポートし次第、ClickHouse データは DIP のクエリング API を通じてアクセス可能に
- **独立したスケーリング**: 書き込みと読み取りのワークロードがそれぞれの特定のパフォーマンス特性に基づいて独立してスケール可能

このアプローチにより、Activation Engine は大量のメトリクス記録を処理しながら、GitLab の標準データアクセスパターンを通じてアクティベーション判定のための高速で複雑なクエリを提供できます。

### DIP への移行

DIP が必要なデータソースをサポートするようになれば、以下が可能になります:

1. 同じ API 表面を維持
2. ローカルデータベースの代わりに DIP をクエリするようバックエンドを段階的に移行
3. ロールアウトをコントロールするためフィーチャーフラグを使用
4. このユースケース向けに DIP の機能が揃ったら、ローカル追跡を非推奨化

### Self-Managed サポート

将来のイテレーションでは以下が含まれる可能性:

1. self-managed インスタンス向けのオプトインメトリクス追跡
2. self-managed デプロイ向けの Activation Engine 機能

## References

### 関連 Epic と Issue

- [親 Epic: Activation Engine](https://gitlab.com/groups/gitlab-org/-/epics/18239)
- [実装 Epic](https://gitlab.com/groups/gitlab-org/-/epics/19831)
- [Drive Activation: Setup metric](https://gitlab.com/groups/gitlab-org/-/epics/19917)
- [Drive Activation: Aha metric](https://gitlab.com/groups/gitlab-org/-/epics/19918)
- [Drive Activation: Habit metric](https://gitlab.com/groups/gitlab-org/-/epics/19919)
- [初回 MR のマージをユーザーに促す](https://gitlab.com/groups/gitlab-org/-/epics/19912)
- [ユーザー中心のオンボーディング体験を構築](https://gitlab.com/groups/gitlab-org/-/epics/18068)
- [Spike Analysis: Activation Data](https://gitlab.com/gitlab-org/gitlab/-/issues/568940)
- [DIP ClickHouse サポート](https://gitlab.com/groups/gitlab-org/architecture/gitlab-data-analytics/-/work_items/10)

### 実装リファレンス

- [データベーススキーマ MR](https://gitlab.com/gitlab-org/gitlab/-/merge_requests/213365)
- [OrganizationUser Upsert パターン](https://gitlab.com/gitlab-org/gitlab/blob/afe043ec9c9abc62feb949c7f10bd4f3dd079f9d/app/models/organizations/organization_user.rb#L46-46)
- [Internal Events Core](https://gitlab.com/gitlab-org/gitlab/blob/dabea7ad3f68f0ae1d0bac09191f4b82b30dc3a6/lib/gitlab/internal_events.rb#L4-4)
- [AI Tracking の例](https://gitlab.com/gitlab-org/gitlab/blob/dabea7ad3f68f0ae1d0bac09191f4b82b30dc3a6/ee/lib/gitlab/tracking/ai_tracking.rb#L7-7)
- [Contribution Analytics Tracking](https://gitlab.com/gitlab-org/gitlab/blob/d39e4b11f287cc4e862f760c7f692e7429b025e4/lib/gitlab/tracking/contribution_analytics_tracking.rb#L5-5)
- [イベント設定例](https://gitlab.com/gitlab-org/gitlab/blob/dabea7ad3f68f0ae1d0bac09191f4b82b30dc3a6/ee/config/events/code_suggestion_rejected_in_ide.yml#L1-1)
- [イベントスキーマドキュメンテーション](https://gitlab.com/gitlab-org/gitlab/blob/dabea7ad3f68f0ae1d0bac09191f4b82b30dc3a6/db/docs/ai_code_suggestion_events.yml#L5-5)

### 設計ドキュメント

- [Data Insights Platform 設計](../data_insights_platform/)
- [DIP クエリング API](../data_insights_platform_querying_api/)

### ドキュメンテーション

- [Internal Analytics ドキュメンテーション](https://docs.gitlab.com/ee/development/internal_analytics/)
- [Single Instrumentation Layer](https://docs.gitlab.com/development/internal_analytics/instrumentation_layer/)
- [Personalization Data Document](https://docs.google.com/document/d/136wSMfHG7yK-5iIJEKu9B6N-5weDaWy30dh1NnHPdUE/edit?tab=t.0#heading=h.qg4rq88euedq)
