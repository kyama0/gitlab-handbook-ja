---
title: "Database Excellence ステージ"
description: "Database Excellence セクションは、GitLab のデータベースがスケールにおいて確実に稼働するようにしながら、すべてのデータストアにわたるデータアーキテクチャ、配置、ライフサイクル管理についてチームが情報に基づいた意思決定を行えるようにします。"
upstream_path: /handbook/engineering/data-engineering/database-excellence/
upstream_sha: 877082e5cd4baeabe3d6e802b3b4b1efdb6573f1
translated_at: "2026-05-23T00:00:00+00:00"
translator: claude
stale: false
model: claude-opus-4-7
lastmod: "2026-05-19T09:41:08+02:00"
---

## ミッション

プロアクティブなヘルス管理、運用上のエクセレンス、戦略的なイネーブルメントを通じて、GitLab のデータベースを確実に稼働させ続けます。私たちは飽和ポイントを特定して緩和することで運用上のランウェイを維持し、自動化されたスケーラブルなプロセスでインフラを運用し、チームが持続可能な方法で機能を構築するのに役立つツールとフレームワークを提供します。私たちの主な焦点は GitLab.com ですが、セルフマネージドのお客様にも利益をもたらすデータベースヘルスフレームワークとツールを提供するために、スコープを拡大しています。

## グループ

このステージは次のグループで構成されています。

### Database Architecture

[Database Architecture](/handbook/engineering/data-engineering/database-excellence/database-architecture/) グループは、データ配置のための意思決定フレームワーク、データ増加の制御を提供し、すべてのデータストアにわたるデータベースレビュープロセスを調整することで、チームがデータを用いて持続可能に構築できるようにします。

優先事項:

* チームが持続可能なデータアーキテクチャの意思決定を行えるようにする
* データベースのパフォーマンス問題が本番に到達する前に防止する
* データライフサイクルのベストプラクティスを確立し維持する

{{< group-by-slugs alexander-sosna imanpalsingh l.rosa maximeorefice panoskanell praba.m7n vporalla >}}

### Database Health

[Database Health](/handbook/engineering/data-engineering/database-excellence/database-health/) グループは、飽和ポイントのシフトレフトな特定を含め、GitLab.com とセルフマネージドの両方のデプロイメントにわたってデータベースを健全に保つモニタリング、オブザーバビリティ、ヘルスフレームワークを提供します。

優先事項:

* データベースの飽和ポイントをプロアクティブに管理することで運用上のランウェイを維持する
* すべてのデプロイメントタイプにわたるデータベースヘルスへの可視性を提供する
* データベースリソースの利用率とコスト効率を最適化する

{{< group-by-slugs alexives allisonbrowne irina.bronipolsky krasimirangelov meiyang rhenchen.gitlab stomlinson >}}

### Database Automation

[Database Automation](/handbook/engineering/data-engineering/database-excellence/database-automation) グループは、GitLab の Postgres データベースをスケールで運用しやすくする自動化フレームワーク、ツール、テンプレートを所有しています。手動でその場限りのプロセスを、標準化された反復可能な自動化に置き換えます。3 つのチームすべてが自動化に貢献しますが、Database Automation がフレームワークを所有し、インフラ変更の計画負荷を管理します。

優先事項:

* 手動のデータベース運用を標準化された自動プロセスに置き換える
* データベースのプロビジョニング、構成、アップグレードのための再利用可能なツールを構築する
* デプロイメントタイプにわたって信頼性が高く反復可能なデータベース運用を可能にする

{{< group-by-slugs dazhu1 bshah11 saadullah707 mattkasa jon_jenkins pmistry2 amritasinha >}}

### 以前のチーム

以前、このステージは Database Frameworks と Database Operations の 2 つのチームで構成されていました。これらのチームは本番データベースシステムをカバーする非常に大きく重複するスコープを持っていましたが、自由に使えるツールは異なっていました。これにより、チームは 2 つの点で困難に直面しました。チームは同じ目標を異なるツールで追求する異なるプロジェクトを進めることになり、また各チームは合理的に計画したり達成したりできる以上のスコープを持っていました。

FY27 の Q1 に、私たちはいくつかのことを達成するために、チームを現在の構造に再編成しました。

* プロジェクトや領域を行き来することによる疲弊を防ぐためにチームのスコープを絞り込む
* チームが現在のサイズの制限を超えて成長できるよう、より多くの管理サポートを提供する
* セルフマネージドのお客様に影響するトピックを含めるよう、部門全体のスコープを拡大する

#### Database Frameworks

[Database Frameworks](/handbook/engineering/data-engineering/database-excellence/database-frameworks/) グループは、私たちのデータベースシステムとインターフェースし通信する Rails アプリケーションコードを管理していました。

#### Database Operations

[Database Operations](/handbook/engineering/data-engineering/database-excellence/database-operations) グループは、GitLab.com の PostgreSQL データベースを支えるインフラと自動化を管理していました。

## 私たちの働き方

Database Excellence 内の各チームは、バックエンドエンジニアとリライアビリティエンジニア (SRE/DBRE) の混成で構成されています。バランスはチームによって異なり、Database Architecture と Database Health は主にバックエンドエンジニア、Database Automation は主にリライアビリティエンジニアですが、すべてのチームに両方の職種が含まれています。

各チームには明確なフォーカスエリアがありますが、いくつかの責任はステージ全体で共有されています。データベースレビューは Database Architecture が調整しますが、3 つのチームすべてのメンバーが担当します。オンコールローテーションはステージ全体のリライアビリティエンジニアから編成されます。飽和の緩和やインシデント対応などの運用上のニーズは、単一のグループが所有するのではなく、すべてのチームに分散されています。インフラ管理とデータベースアップグレードもチーム間で共有されています。これは、3 つのグループの地域的な分布が AMER、EMEA、APAC にまたがっており、フォローザサン (follow-the-sun) のカバレッジの可能性を実現するからです。この共有モデルにより、運用上の知識が広く保たれ、単一のチームがボトルネックになることがないようにしています。

## ヘルプの要請

データベースの問題に関するヘルプの取得 (緊急事態、サポートエスカレーション、担当チームの特定を含む) の完全なガイドについては、[データベース問題に関するヘルプの取得](/handbook/engineering/data-engineering/database-excellence/help/)を参照してください。

### インシデントエスカレーション

データベースインシデントのエスカレーションでは、オンコールルーティングに [incident.io](https://app.incident.io/gitlab/on-call/schedules/01JXJ7MN4T14008GQKWYYNT6E8) を使用します。

* **スコープ**: Incident Manager On Call、Engineer On Call、Security チームが提起した GitLab.com の S1 および S2 本番インシデント。GitLab Dedicated のサポートは助言的です。セルフマネージドのサポートは任意であり、ケースバイケースで評価されます。
* **エスカレーション**: インシデントの Slack チャンネルで `/inc escalate` を使用してください。緊急性のない問題については、[トリアージローテーション](#triage-rotations)を使用するか、`#s_database_excellence` に投稿してください。
* **対応**: ベストエフォート、現地のタイムゾーン、平日のみのカバレッジ (24/5)。オンコールエンジニアは助言的な立場で対象分野の専門家として参加します。
* **プロセスの詳細**: 対応手順とシャドウイングの手順については、[完全なエスカレーションプロセス](/handbook/engineering/data-engineering/database-excellence/help/#step-4-escalate-to-database-excellence)を参照してください。

### リライアビリティリクエスト

未定。

### Tier-2 オンコール

[Database Tier-2](/handbook/engineering/infrastructure-platforms/incident-management/on-call/tier-2/#database-operations-dbo) は、チームメンバーが「ベストエフォート」ベースで対応する 24/5 対応として編成されています。つまり、このローテーションへのページが時折未確認のまま残る可能性があります。データベースオペレーターの限られた可用性により、それ以上のコミットが難しくなっています。

私たちは、最近の再編成を受けて、FY27-Q2 にこのローテーションを再検討する可能性があります。

### 長期のステーブルカウンターパートまたはレビュアーのリクエスト

ステーブルカウンターパートやレビュアーなどの長期的なリクエストは、ステージレベルで処理されます。これらのリクエストは、[カウンターパートリクエスト](https://gitlab.com/gitlab-org/database-team/team-tasks/-/work_items/new?description_template=counterpart_request)として送信する必要があります。

### トリアージローテーション

Database Excellence には[週次のトリアージ issue](https://gitlab.com/gitlab-org/database-team/team-tasks/-/work_items?state=opened&label_name[]=database::triage) があり、この issue は毎週[自動化](https://gitlab.com/gitlab-org/database-team/update_status/-/blob/main/team_triage_issue.rb)によって自動的に作成されます。この自動化は、Database Excellence の入力と継続的なモニタリングを必要とするさまざまなセクション (例: DB の飽和、テーブルサイズのモニタリングなど) を構築します。

これは Database Excellence ステージのバックエンドエンジニアと SRE によって担当されます。彼らは責任を共有し、必要に応じて適切な担当者 (つまり、アプリケーション関連の項目には BE、インフラ関連の項目には SRE) をタグ付けします。

{{% alert title="Note" color="info" %}}
次のステップ: トリアージ issue 内のセクションは `backend`、`infra`、`shared` に分類されます。これにより、割り当てられた DRI が同じ issue をトリアージする必要がなくなります。
{{% /alert %}}

## 計画プロセス

未定。
