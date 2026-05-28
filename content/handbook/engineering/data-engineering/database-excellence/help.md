---
title: データベース関連の問題でヘルプを得る
description: "データベース関連の問題で適切なヘルプを見つけるためのデシジョンツリー"
upstream_path: /handbook/engineering/data-engineering/database-excellence/help/
upstream_sha: 78b430bc8e2a925f210024d512218ce1d8d42106
translated_at: "2026-05-28T00:00:00Z"
translator: claude
stale: false
lastmod: "2026-05-26T09:14:20-05:00"
---

このガイドは、データベース関連の問題に対して適切なヘルプを見つけるための手順を示します。Step 1 から始め、ご自身の状況に合うパスをたどってください。

## Step 1: どのようなヘルプが必要ですか? {#step-1-what-kind-of-help-do-you-need}

* **GitLab.com または Dedicated でアクティブな S1/S2 インシデントが発生している** -> [Step 3: GitLab.com または Dedicated のインシデント](#step-3-gitlabcom-or-dedicated-incident) に進む
* **セルフマネージドの顧客がデータベースの問題に直面している** -> [Step 2: 顧客のデータベース問題](#step-2-customer-database-issue) に進む
* **緊急ではない Issue を起票またはルーティングしたい** -> [Step 6: 緊急でない Issue を起票する](#step-6-file-a-non-emergency-issue) に進む

## Step 2: 顧客のデータベース問題 {#step-2-customer-database-issue}

**まずはサポートの stable counterparts に連絡してください** — 彼らは一般的な顧客のデータベース問題に関するコンテキストを持っており、エンジニアリングにエスカレーションする前にトリアージを支援できます。

**最初に**: `#spt_pod_database` に投稿し、[Database Pod チーム](https://gitlab.com/gitlab-com/support/support-pods/-/tree/main/Database?ref_type=heads) (データベースサポートの stable counterparts) に連絡します。彼らは適切なパスを判断し、エンジニアリングの関与が必要かどうかを判定できます。

次に、これがどのような種類の問題かを判断します:

**問題が特定の機能、マイグレーション、クエリ、エンドポイントに関連していますか?**

* **はい** -> 症状がデータベース関連に見えても、機能チームが最適な最初の連絡先です。[Step 5: 責任を持つチームを特定する](#step-5-identify-the-responsible-team) に進んで、そのチームを見つけてください。

**問題がバックアップやリストアに関連していますか?**

* **はい** -> バックアップとリストアは、[`backup_and_restore` 機能カテゴリ](/handbook/product/categories/lookup/) を所有するチームが管理しています。

**問題が Omnibus または Charts における Postgres のパッケージングや設定に関連していますか?**

* **はい** -> セルフマネージドのパッケージングと設定を管理している `#s_gitlab_delivery` の [GitLab Delivery セクション](/handbook/engineering/infrastructure-platforms/gitlab-delivery/) に連絡します。

**これは一般的なデータベースの問題ですか** (単一の機能に限定されないパフォーマンス劣化、運用に関する質問、アップグレード失敗、設定ガイダンス)?

* **はい** -> サポートの Request for Help を起票します:
  1. Issue が `#spt_pod_database` で stable counterparts に既に提起されていることを確認します
  2. データベースサポートテンプレートを使って [Request for Help Issue](https://gitlab.com/gitlab-com/request-for-help/-/issues/new?issuable_template=SupportRequestTemplate-DatabaseFrameworks) を起票します
  3. 可能であれば、顧客に [database SOS dump](https://docs.gitlab.com/administration/raketasks/maintenance/#collect-information-and-statistics-about-the-database) をリクエストします
  4. Issue で `@gitlab-org/database-team/triage` をメンションします

  RFH には次の情報を含めます:

  * 顧客のインストールサイズとアーキテクチャ情報
  * PostgreSQL のバージョン、レプリカ数、pgbouncer の設定、ホスティングの詳細 (マネージドサービスか VM か、クラウドプロバイダー)
  * 可能であれば db:sos ダンプを追加
  * 再現手順
  * 関連するログと観察された監視メトリクス
  * 顧客への影響 (商談保留中、エスカレーション中、ショウストッパーなど)

**顧客の Issue が緊急で、より迅速な対応が必要ですか?**

* **はい** -> RFH を起票した後、[Step 4: Database Excellence にエスカレーションする](#step-4-escalate-to-database-excellence) に進みます。

## Step 3: GitLab.com または Dedicated のインシデント {#step-3-gitlabcom-or-dedicated-incident}

**データベースの問題によって、アプリケーション (または Sidekiq などの主要コンポーネント) がダウンしている、または広範囲に応答不能になっていますか?**

* **はい、広範囲な障害** -> これは総力戦の状況です。
  1. `#s_database_excellence` に投稿し、`@db-team` と `@dbo-oncall` をタグ付け
  2. インシデントチャンネルで `/inc escalate` を使用し、[incident.io](https://app.incident.io/gitlab/on-call/schedules/01JXJ7MN4T14008GQKWYYNT6E8) 経由でオンコールのデータベースエンジニアを呼び出していることを確認

**インシデントがデータベースの設定または運用に関連していますか** (例: 接続エラー、レプリケーションエラー、SSL エラー、Postgres の運用)?

* **はい** -> インシデントの Slack チャンネルで `/inc escalate` を使用し、オンコールのデータベースエンジニアを呼び出します。詳細は [インシデントエスカレーションプロセス](/handbook/engineering/data-engineering/database-excellence/#incident-escalation) を参照してください。

**インシデントがアプリケーションの動作に関連していますか** (例: PG タイムアウトエラー、スロークエリ、長時間実行されるトランザクション、失敗するマイグレーション)?

* **はい** -> まず責任を持つ機能チームの特定を試みます。[Step 5: 責任を持つチームを特定する](#step-5-identify-the-responsible-team) に進みます。発生源を特定できない、またはデータベースの専門知識が緊急に必要な場合は、[Step 4: Database Excellence にエスカレーションする](#step-4-escalate-to-database-excellence) に進みます。

## Step 4: Database Excellence にエスカレーションする {#step-4-escalate-to-database-excellence}

エスカレーションする際は、できるだけ具体的に伝えてください。[コミュニケーションガイドライン](/handbook/communication/#writing-style-guidelines) に従い、可能な限り略語を避けます。常に次を含めます:

* Issue、Sentry エラー、インシデント、Zendesk チケットへのリンク
* エラーメッセージのテキスト
* 該当するチャートやダッシュボードへのリンク
* クエリ、マイグレーション、Issue の詳細

**進行中の GitLab.com または Dedicated のインシデントの場合:**

1. `#s_database_excellence` に投稿
2. 15 分以内に応答がない、またはリクエストが緊急の場合、元のメッセージのスレッドで `@db-team` と `@dbo-oncall` をタグ付け
3. さらに 15 分待っても応答がなく、リクエストが緊急の場合、Slack で Database Excellence ステージリードの電話番号を見つけてテキストまたは電話する

**緊急の Self-Managed エスカレーションの場合:**

1. 詳細、Zendesk チケットへのリンク、RFH Issue を添えて `#s_database_excellence` に投稿
2. スレッドで `@db-team` をタグ付け

### インシデントエスカレーションの詳細

データベースインシデントのエスカレーションでは、オンコールルーティングに [incident.io](https://app.incident.io/gitlab/on-call/schedules/01JXJ7MN4T14008GQKWYYNT6E8) を使用します。

* **スコープ**: Incident Manager On Call、Engineer On Call、セキュリティチームによって提起された GitLab.com S1 および S2 のプロダクションインシデント。GitLab Dedicated のサポートはコンサルティングベース。セルフマネージドのサポートは裁量制で、ケースごとに評価されます。
* **エスカレーション方法**: インシデントの Slack チャンネルで `/inc escalate` を使用します。緊急でない Issue の場合は、[トリアージローテーション](/handbook/engineering/data-engineering/database-excellence/#triage-rotations) を使用するか、`#s_database_excellence` に投稿してください。
* **対応**: ベストエフォート、現地のタイムゾーン、平日のみのカバレッジ (24/5)。オンコールエンジニアはコンサルティング能力としてサブジェクトマターエキスパートとして参加します。オンコールエンジニアがエスカレーションの解決に単独で責任を負うべきという期待は持つべきではありません — 他のサブジェクトマターエキスパートを呼び込む必要があるかもしれません。
* **ウォームハンドオフ**: オンコールエンジニアは、シフト交代時、特に進行中のアクティブなインシデントがある場合に、ウォームハンドオフを調整する責任を負います。

### エスカレーションプロセス

1. EOC/IM、開発、またはセキュリティが `/inc escalate` を通じてオンコールデータベースエンジニアを呼び出す
1. オンコールエンジニアがページを確認し、インシデントチャンネルと Zoom に参加する
1. オンコールエンジニアが Issue をトリアージし、解決に向けて取り組む
1. 必要に応じて、オンコールエンジニアがさらなるヘルプやドメインエキスパートを呼ぶ
1. オンコールが応答しない場合、incident.io 内で定義されているエスカレーションパスが発動する

### オンコール対応者向け

#### 対応のガイドライン

インシデントに対応する際は:

1. インシデント Zoom に参加します — 関連するインシデントの Slack チャンネルにブックマークされています
1. すべてのテキストベースのコミュニケーション用に、適切なインシデント Slack チャンネル (通常は `#inc-<INCIDENT NUMBER>`) に参加します
1. EOC と協力して、既知のコードパスが問題かどうかを判断します
   * Issue があなたのドメインにある場合は、EOC と協力してトラブルシューティングを続けます
   * Issue が馴染みのないものである場合は、チームごとのコードオーナーシップを判断しようとします — これにより、そのチームのエンジニアをインシデントに呼び込めます
1. Incident Manager と協力して、インシデントの Issue が適切な Engineering Manager にアサインされていることを確認します

#### シャドーイング

* **インシデントのシャドーイング**: `#incidents-dotcom` でアクティブなインシデントを監視し、同期的なトラブルシューティングのために Situation Room Zoom コールに参加します。シャドーイング体験については [このブログ記事](https://about.gitlab.com/blog/2020/04/13/lm-sre-shadow/) を参照してください。
* **シフトのシャドーイング**: 現在のオンコールエンジニアに連絡してシャドーイングすることを伝え、シフト中は `#incidents-dotcom` を監視します。
* **過去のインシデントのリプレイ**: 過去のインシデントの Situation Room の録画は、[Google Drive フォルダ](https://drive.google.com/drive/u/1/folders/1wtGTU10-sybbCv1LiHIj2AFEbxizlcks) (内部) で利用できます。

#### トラブルシューティングリソース

1. [Sentry と Kibana を使った 500 エラーの調査方法](https://www.youtube.com/watch?v=o02t3V3vHMs&feature=youtu.be)
1. [GitLab.com の SLO フレームワークのウォークスルー](https://www.youtube.com/watch?v=QULzN7QrAjY)
1. [スケーラビリティのドキュメント](https://gitlab.com/gitlab-org/gitlab/merge_requests/18976)
1. [Grafana と Kibana を使って PostgreSQL データを見て根本原因を見つける](https://youtu.be/XxXhCsuXWFQ)
1. [Grafana と Prometheus を使って API スローダウンをトラブルシュートする](https://www.youtube.com/watch?v=DtP4ZcuXT_8)

#### ダッシュボード

1. [Saturation Component Alert](https://dashboards.gitlab.net/d/alerts-saturation_component/alerts-saturation-component-alert?orgId=1)
1. [Service Platform Metrics](https://dashboards.gitlab.net/d/general-service/general-service-platform-metrics?orgId=1)
1. [SLAs](https://dashboards.gitlab.net/d/general-slas/general-slas?orgId=1)
1. [Web Overview](https://dashboards.gitlab.net/d/web-main/web-overview?orgId=1)

## Step 5: 責任を持つチームを特定する {#step-5-identify-the-responsible-team}

データベースアプリケーションの Issue の多くは、関連する機能を所有するチームが対応するのが最適です。エラーに「database」という言葉が含まれていても、関係するデータパターンを理解しているのは機能チームのため、通常は機能チームが解決に最も適しています。

**エラーに機能カテゴリが含まれていますか** (Sentry、Rails コントローラー、Sidekiq ワーカー、API エンドポイント、バックグラウンドマイグレーションから)?

* **はい** -> [機能カテゴリのルックアップ](/handbook/product/categories/lookup/) でチームを探します。そのチームの Slack チャンネルで連絡し、チームのマネージャーを `@mention` します。応答がない場合は、[Step 4: Database Excellence にエスカレーションする](#step-4-escalate-to-database-excellence) に進みます。

**Issue がマイグレーションに関連していますか?**

* **はい** -> [GitLab リポジトリ](https://gitlab.com/gitlab-org/gitlab) から次を実行します:

  ```sh
  git log --first-parent {path/to/migration.rb}
  ```

  マイグレーションファイルのパスはバックトレースで見つけられます。マイグレーションファイルは日時のタイムスタンプで始まり、[db/migrate/](https://gitlab.com/gitlab-org/gitlab/-/tree/master/db/migrate) または [db/post_migrate/](https://gitlab.com/gitlab-org/gitlab/-/tree/master/db/post_migrate) にあります。顧客のログ出力にタイムスタンプ (例: `20240113071052`) を見つけられれば、一意にマイグレーションファイル名と一致します。

  `git log` の出力にはマージリクエストへのリンクが含まれており、責任を持つチームを特定できます。リンクがある場合は、そのチームに連絡してください。ない場合は、次のオプション (テーブル名による特定) を試してください。

**Issue に関係するデータベーステーブルを特定できますか?**

* **はい** -> [データベース辞書](https://gitlab.com/gitlab-org/gitlab/-/tree/master/db/docs) で `{table_name}.yml` を探します。ファイルには `feature_categories` がリストされており、これを使って [機能カテゴリのルックアップ](/handbook/product/categories/lookup/) からチームを見つけられます。カテゴリが複数ある場合は、1 つを選んでそのチームから開始してください。

**Issue がクエリに関連しているが、機能カテゴリがありませんか?**

* **はい** -> クエリが Rails コントローラー、Sidekiq ワーカー、API エンドポイント、バックグラウンドマイグレーションから来ている場合は、[機能カテゴリ化ガイド](https://docs.gitlab.com/ee/development/feature_categorization/) を使って機能カテゴリを特定し、上記の方法でチームを探してください。発生源を特定できない場合は、クエリで参照されているテーブルを使って、テーブル名でチームを特定してください。

**発生源を特定できない、またはオーナーチームが応答しない場合。**

* [Step 4: Database Excellence にエスカレーションする](#step-4-escalate-to-database-excellence) に進む

## Step 6: 緊急でない Issue を起票する {#step-6-file-a-non-emergency-issue}

**Database Excellence チームから何かを必要としていますか** (相談、インフラ変更、stable counterpart、プロジェクト業務)?

* **はい** -> `database-team/team-tasks` で [work request](https://gitlab.com/gitlab-org/database-team/team-tasks/-/work_items/new?description_template=work_request) を提出します。これは外部からのすべてのリクエストの単一の受付窓口です。ルーティングの詳細については、[Database Excellence ステージページ](/handbook/engineering/data-engineering/database-excellence/) を参照してください。

**`gitlab-org/gitlab` の既存の Issue でデータベースチームの注意が必要ですか?**

* **はい** -> `~database` ラベルを追加します。Database Excellence の [トリアージローテーション](/handbook/engineering/data-engineering/database-excellence/#triage-rotations) が拾います。

**責任を持つ機能チームがわかっているアプリケーション Issue ですか?**

* **はい** -> そのチームのグループラベルを Issue に付けます。機能チームが最適な最初の連絡先です。

**Omnibus または Charts のパッケージ化された Postgres に関連していますか?**

* **はい** -> Issue に `~"group::distribution"` ラベルを付けます

**Issue がブロックされていてエスカレーションが必要ですか?**

* **はい** -> [Step 4: Database Excellence にエスカレーションする](#step-4-escalate-to-database-excellence) に進む
