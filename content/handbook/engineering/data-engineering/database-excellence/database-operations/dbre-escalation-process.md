---
title: DBO エスカレーションプロセス
summary: This page outlines the DBO team escalation process and guidelines for developing the rotation schedule for handling infrastructure incident escalations.
upstream_path: /handbook/engineering/data-engineering/database-excellence/database-operations/dbre-escalation-process/
upstream_sha: 3480299851f7e2243d4f08b75dac452f89929636
translated_at: "2026-04-28T04:23:44Z"
translator: claude
stale: false
lastmod: "2025-11-19T17:21:50-05:00"
---


{{% alert title="注意" color="danger" %}}
エスカレーションには [incident.io](https://app.incident.io/gitlab/on-call/schedules/01JXJ7MN4T14008GQKWYYNT6E8) を使用しています。
{{% /alert %}}


## このページについて

このページでは、DBO チームのインシデントエスカレーションポリシーを説明します。

## ショートカット

* [DBO incident.io スケジュール](https://app.incident.io/gitlab/on-call/schedules/01JXJ7MN4T14008GQKWYYNT6E8)
* Slack 統合: インシデントチャンネルで **/inc escalate** コマンドを使用（緊急の連絡には必ず incident.io エスカレーションを使用してください）
* Slack ハンドル: `@dbre` または `@dbo-oncall`（非緊急）
* Slack チャンネル: #g_database_operations
* `group::database operations`
* [本番インシデント](https://app.incident.io/gitlab/incidents)

## SLO と期待値

* **_DBO の対応はベストエフォートベースです_**

* **_現地タイムゾーンの平日対応のみ_**

* **_S1 / S2 インシデントのみ_**

  * NB1: AMER タイムゾーンに 1 名しかいないなど、スタッフが限られているため、複数タイムゾーンにおける営業時間内でも対応できる人員がいない場合があります。S1/S2 インシデントへの対応の重要性は理解しており、適切かつタイムリーな対応を確保するよう最善を尽くしますが、現在のスタッフレベルではハード SLO を遵守できていません。この状況を正確に反映するため、スケジュールはアドホックに変更されることも想定されています。

  * NB2: DBRE はインシデントに対し、コンサルティングの立場でドメインエキスパートとして参加します。DBRE がエスカレーションを単独で解決する責任を負うという期待は持たないでください。インシデントを進展させるために、[データベースフレームワーク（DBF）チーム](../../../data-engineering/database-excellence/database-frameworks/)などの他のドメインエキスパートにエスカレーションが必要な場合があります。

## エスカレーションプロセス

### スコープと要件

1. **インシデントマネージャーオンコール**、**エンジニアオンコール**、および **セキュリティ** チームが発報した **GitLab.com** の S1 および S2 本番インシデント。

   * NB1: **GitLab Dedicated** のサポートは現時点ではコンサルティングベースです。DBO チームは現在 Dedicated データベースをサポートするためのアクセス権やトレーニングを持っていないため、対応できていません。今後変更される可能性があります。最新情報はこちらを確認してください。

   * NB2: **セルフマネージド** のサポートは裁量ベースであり、ケースバイケースで評価します。

   * NB3: このプロセスは、非緊急の Issue で DBO チームに連絡するための経路では **ありません**。非緊急の Issue については、この [Issue テンプレート](https://gitlab.com/gitlab-com/request-for-help/-/issues/new?issuable_template=SupportRequestTemplate-DatabaseOperations) を使用して [Request for Help](https://gitlab.com/gitlab-com/request-for-help#ops-section)（RFP）Issue を作成してください。

   * NB4: DBO オンシフトは、進行中のアクティブなインシデントがある場合は特に、シフト交代時のウォームハンドオフの調整に責任を持ちます。

### エスカレーション

1. EOC/IM、開発またはセキュリティが `/inc escalate` で DBO オンコールにページを送ります。
1. DBO はページを確認し、インシデントチャンネルおよび Zoom に参加して応答します。
1. DBO は Issue をトリアージし、解決に向けて取り組みます。
1. 必要に応じて、DBO はさらなる支援やドメインエキスパートに連絡します。

   * NB1: DBO サポートが応答しない場合、incident.io 内で定義されたエスカレーションパスが実行されます。

## リソース

### 対応ガイドライン

インシデントに対応する際は、以下の手順をガイドラインとして活用し、自分自身および支援を求めているメンバーを助けてください。

1. インシデント Zoom に参加します — インシデントの Slack チャンネルにブックマークされています
1. テキストベースのすべてのコミュニケーションのために、適切なインシデント Slack チャンネルに参加します — 通常は `#inc-<インシデント番号>` です
1. EOC と協力して、問題となっている既知のコードパスを特定します

* その知識がお客様のドメイン内にある場合は、EOC と協力して問題のトラブルシューティングを続けます
* 不慣れな内容である場合は、チームによるコードオーナーシップを特定するよう試みます — これにより、そのチームのエンジニアをインシデントに参加させることができます

1. インシデントマネージャーと協力して、インシデント Issue が適切なエンジニアリングマネージャーに割り当てられていることを確認します（該当する場合）

### インシデントトリアージセッションのシャドウ

インシデントのトリアージが通常どのように行われるかを事前に練習したい場合は、任意のインシデントトリアージコールに参加してください。[#incidents-dotcom](https://gitlab.slack.com/archives/C08FMPK1DDF) でアクティブなインシデントを確認し、同期的なトラブルシューティングのために Situation Room Zoom コール（リンクはチャンネルに記載）に参加してください。シャドウイング体験に関する[参考ブログ記事](https://about.gitlab.com/blog/2020/04/13/lm-sre-shadow/)もあります。

### 過去のインシデントのレビュー

過去のインシデントの Situation Room 録画は、この [Google Drive フォルダ](https://drive.google.com/drive/u/1/folders/1wtGTU10-sybbCv1LiHIj2AFEbxizlcks)（内部）で閲覧できます。

### シフト全体のシャドウ

オンコール DBO に何が期待されているか、インシデントがどの程度の頻度で発生するかを把握するために、別のシフトをシャドウすることが有効です。そのためには、DBO オンコールを特定し、シャドウすることを事前に連絡してください。シフト中は [#incidents-dotcom](https://gitlab.slack.com/archives/C08FMPK1DDF) でインシデントを監視してください。

### トラブルシューティングのヒント＆コツ

1. [Sentry と Kibana を使用した 500 エラーの調査方法](https://www.youtube.com/watch?v=o02t3V3vHMs&feature=youtu.be)
1. [GitLab.com の SLO フレームワークのウォークスルー](https://www.youtube.com/watch?v=QULzN7QrAjY)
1. [スケーラビリティドキュメント](https://gitlab.com/gitlab-org/gitlab/merge_requests/18976)
1. [Grafana と Kibana を使用して PostgreSQL データを確認し根本原因を特定する](https://youtu.be/XxXhCsuXWFQ)
   * 関連インシデント: [Postgres トランザクションのタイムアウト、Sidekiq キューが apdex スコア以下、プルミラージョブの遅延](https://gitlab.com/gitlab-com/gl-infra/production/issues/1433)
1. [Grafana と Prometheus を使用した API 低速化のトラブルシューティング](https://www.youtube.com/watch?v=DtP4ZcuXT_8)
   * 関連インシデント: [2019-11-27 API フリートのレイテンシ増加](https://gitlab.com/gitlab-com/gl-infra/production/issues/1419)
1. [500 エラーをもっと楽しく](https://youtu.be/6ERO4XsYDn0?list=PL05JrBw4t0KodGBz0XUYdYaAYyYs-6ZK7)

### エンジニア向けツール

1. 利用可能なツールのトレーニング動画
   1. [ビジュアライゼーションツールプレイリスト](https://www.youtube.com/playlist?list=PL05JrBw4t0KrDIsPQ68htUUbvCgt9JeQj)
   1. [モニタリングツールプレイリスト](https://www.youtube.com/playlist?list=PL05JrBw4t0KpQMEbnXjeQUA22SZtz7J0e)
   1. [パフォーマンス確認用 Kibana ビジュアライゼーションの作成方法](https://www.youtube.com/watch?v=5oF2rJPAZ-M&feature=youtu.be)
1. ダッシュボードの例（以下のいずれかのダッシュボードの左上のドロップダウンリストにさらに多くが表示されます）
   1. [サチュレーションコンポーネントアラート](https://dashboards.gitlab.net/d/alerts-saturation_component/alerts-saturation-component-alert?orgId=1)
   1. [サービスプラットフォームメトリクス](https://dashboards.gitlab.net/d/general-service/general-service-platform-metrics?orgId=1&var-type=ci-runners&from=now-6h&to=now)
   1. [SLA](https://dashboards.gitlab.net/d/general-slas/general-slas?orgId=1)
   1. [Web 概要](https://dashboards.gitlab.net/d/web-main/web-overview?orgId=1)
