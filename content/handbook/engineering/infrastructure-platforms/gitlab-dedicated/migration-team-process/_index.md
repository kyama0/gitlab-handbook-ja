---
title: Dedicated Migration Team - プロセス
upstream_path: /handbook/engineering/infrastructure-platforms/gitlab-dedicated/migration-team-process/
upstream_sha: 0e6f01390a34aeb6706ace17d8d3c50e74e82d0d
translated_at: "2026-04-28T22:31:40Z"
translator: claude
stale: false
lastmod: "2026-03-16T11:21:08-04:00"
---

### Dedicated Migration Team の休暇

Dedicated Migration チームは[GitLab の有給休暇ポリシー](/handbook/people-group/time-off-and-absence/)に従います。
私たちはそのポリシーと、毎日カスタマーへのサポートを提供する必要性とのバランスを取っています。
このページは、そのバランスを達成するために何をすべきかを理解するためのものです。チーム全員が必要に応じて希望通りの休暇を取れるようにしながら、チームとしてカスタマーへのデリバリーを継続できるようにします。

### 初回セットアップ

#### Dedicated Migration Team カレンダー

1. [**Dedicated Migrations Team カレンダー**](https://calendar.google.com/calendar/embed?src=c_fb53e24f590edfb8f313253126123e48d57254dd73266fae6547a2a4890b0c82%40group.calendar.google.com&ctz=America%2FVancouver)へのアクセス権を持っていることを確認してください。
   1. アクセス権がない場合は、Dedicated Migrations Team（`dedicated-migrations-team@`）のメンバーであるかどうかを確認してください。メンバーでない場合は、アクセスリクエストを通じて追加を依頼してください。

1. Time Off by Deel と Google Calendar のインテグレーションを設定し、個人カレンダーと「Dedicated Migrations Team」カレンダーを手動で更新する必要がないようにします。
   1. Slack で、左サイドバー下部の「Apps」の横にある `+` をクリックします
   1. 「Time Off by Deel」を検索して「View」をクリックします
   1. 「Home」の下で「Your Events」をクリックしてドロップダウンを表示します
   1. Settings の区切りの下にある「Calendar Sync」をクリックします
   1. 「Connect your Calendar」をクリックし、Slack 上の Time Off by Deel にカレンダーを同期するためのアクションを完了します
      - 「Success! Your calendar has been connected.」というメッセージが表示され、Time Off by Deel の Slack 上で「Your synced calendar」の下にカレンダーが表示されます
   1. 個人のカレンダーをリンクした後、「Additional calendars to include?」の下で「Add calendar」をクリックします。「Dedicated Migrations Team Calendar」のカレンダー ID は `c_fb53e24f590edfb8f313253126123e48d57254dd73266fae6547a2a4890b0c82@group.calendar.google.com` です

## 休暇の選択と記録

必要に応じて休暇を取ってください。

皆が少し気を配ることで、全員が希望する休暇を取れるようになります。休暇を計画する際は、以下の点に注意してください:

- [会社全体の有給休暇ガイドライン](/handbook/people-group/time-off-and-absence/time-away-philosophy/)を確認してください
- カレンダーを確認し、利用可能人数が少ない日については、チームと調整して十分なカバレッジを確保してください
- できるだけ早めに休暇をスケジュールしてください
- 上記のような手順を踏んで計画している休暇が取れることを確認する前に、払い戻し不可の旅行の予約をしないでください
- 可能であれば、業務の中断を避けるように休暇を計画してください

### カバレッジ Issue を通じたコミュニケーション

5 日以上の PTO については[カバレッジ Issue](https://gitlab.com/gitlab-com/gl-infra/gitlab-dedicated/dedicated-migrations-group/pto-coverage/-/issues/new?description_template=pto_coverage)を作成してください。部門によっては他のガイダンスがある場合があります（例: [エンジニアリング PTO カバレッジ](/handbook/engineering/#taking-time-off)）。部門の手順と矛盾がある場合はそちらに従い、チームと共有してください。

### PTO 後の復帰

[PTO からの復帰](/handbook/people-group/time-off-and-absence/time-away-philosophy/#transitioning-back-mindfully)を参照してください。

### Dedicated マイグレーション向けの Geo エンゲージメントモデル

**コアサポート構造:**
FY26 Q4（2025-11-01）以降、各マイグレーションに対して 2 週間のウィンドウ（前週、マイグレーション週末、後週）に Geo DRI が割り当てられます。DRI は前後の週において Slack 経由でマイグレーション Issue に完全にコミットし、マイグレーション週末自体はビジネスアワー（自分のタイムゾーンで午前 9 時〜午後 5 時）中に PagerDuty 経由で対応可能である必要があります。問題が発生しなければ、DRI は通常の Geo 業務を再開できます。

**マイグレーション週末の責任:**

Geo チームは、カットオーバーの準備と認識を持ち、プロジェクトマネージャーとタイミングを調整し、フルデータ同期後のカスタマーインスタンスのカットオーバー中に発生する可能性のある問題のトラブルシューティングに備えている必要があります。

#### 2 週間ウィンドウ外の対応

サポートは主に Request for Help（RFH）チケットを通じた非同期で行われます。同期カスタマーコールはケースバイケースでアドホックに対応し、チームの状況に基づいてエンジニアリングマネージャー Lucie Zhao の承認が必要です。

#### RFH プロセス

専用ウィンドウ外での同期 Issue については、チームが[Geo サポートリクエスト](https://gitlab.com/gitlab-com/request-for-help/-/issues/new?issuable_template=SupportRequestTemplate-Geo)を提出し、優先度（P1〜P4）、同期開始時刻、カットオーバーの期限を記載します。これらは週次のカスタマーサポート DRI がトリアージします。Geo エンジニアは効果的にサポートするために Opensearch、Grafana、および理想的にはブレークグラスアクセスへのアクセス権が必要です。
