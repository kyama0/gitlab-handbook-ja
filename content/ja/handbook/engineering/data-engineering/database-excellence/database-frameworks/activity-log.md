---
title: データベースグループ アクティビティログ
upstream_path: /handbook/engineering/data-engineering/database-excellence/database-frameworks/activity-log/
upstream_sha: 3480299851f7e2243d4f08b75dac452f89929636
translated_at: "2026-04-27T10:00:00Z"
translator: claude
stale: false
---

## 概要

このページはデータベースグループのアクティビティを記録し、成果・主要な結果・得られた知見を文書化しています（最新のものが先頭）。2021年末頃からこの取り組みを開始しました。

### 2022年

#### 2022年3月

2021年11月から、以下の目標でマイグレーションファイルのクリーンアップを実施しました:

- GitLab CI ジョブのパフォーマンスを向上させる。
- 古いマイグレーションのメンテナンスコストを削減する。
- 新しい GitLab インスタンスの初期化速度を向上させる。

バージョン14以前のすべてのマイグレーションファイルを削除することを決定しました。複数のマイグレーションファイルを1つのファイル（`init_schema`）に圧縮するスクリプトを実装しました。

マイグレーションファイルの数を大幅に削減しました。マイグレーションスカッシング戦略を使用し、数千件の通常のマイグレーション、ポストマイグレーション、バックグラウンドマイグレーション、および RSpec ファイルを削除しました。将来、ゼロからデータベースを構築する際、バージョン14以前のすべてのマイグレーションが1つのファイルにスカッシュされているため、システムはそれらを開いて解析する必要がなくなります。この変更はパフォーマンスの向上に貢献しました。

クリーンアップのデプロイ後、CI のパフォーマンス最適化が確認され、`rspec migration` ジョブの実行時間が大幅に短縮されました。

![image](https://gitlab.com/gitlab-com/www-gitlab-com/uploads/b50030d66e3e4f30b31d7fb8e1d0902a/gitlaborggitlabrspecmigrationjobmeanduration.png)

### 2021年

#### 2021年11月

今月、GitLab.com に3つの変更を展開し、データベース合計サイズを20%削減しました（合計約3.3 TB の削減）:

1. [優先リインデックス](https://gitlab.com/gitlab-org/gitlab/-/merge_requests/73480) と非常に大きな btree および GIN インデックスのリインデックスサポート
1. [非推奨テーブルの削除](https://gitlab.com/gitlab-org/gitlab/-/merge_requests/73841)
1. [時間経過データに対するパーティショニングベースの保持戦略](https://gitlab.com/gitlab-org/gitlab/-/issues/332199)

必要に応じて特定のインデックスをターゲットにできる優先リインデックスを実装しました。これにより、[大規模データマイグレーション全体で積み上がったインデックスのブロートを削減](https://gitlab.com/gitlab-org/database-team/team-tasks/-/issues/208#note_726520964)できました。GitLab.com のインデックスブロートを合計500 GB以上削減し、サイト全体の相対的な btree ブロートを25%から17%に減少させ、クラスター内の500 GB分のディスクスペースを解放しました。これにより、[長期的なインデックスブロートの見通しが安定しました](https://gitlab.com/gitlab-org/database-team/team-tasks/-/issues/201#note_733223631)。

時間経過データに対するデータ保持戦略をリリースしました。これはレコードの削除ではなくパーティションの削除に基づいており、GitLab.com の大きな問題を解決しました。削除ベースの戦略では追いつけず、多大な負荷を生成していたのです。新しい戦略に切り替えた後、`web_hook_logs` から即座に2 TB分のデータを削除しました。

![gitlab.com size reduction](/images/engineering/data-engineering/database-excellence/database-frameworks/2021-11-15_gitlabcom_size_reduction.png)
