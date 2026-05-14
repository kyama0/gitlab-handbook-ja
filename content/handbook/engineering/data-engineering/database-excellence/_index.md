---
title: "Database Excellence ステージ"
description: "Database Excellence セクションは、GitLab のデータベースがスケールにおいて確実に実行されるようにしながら、チームがすべてのデータストアにわたるデータアーキテクチャ、配置、ライフサイクル管理について情報に基づいた意思決定を行えるようにします。"
upstream_path: /handbook/engineering/data-engineering/database-excellence/
upstream_sha: 1e195b58b9f249ff10bd0e705106c320fee86141
translated_at: "2026-05-14T00:00:00Z"
translator: claude
stale: false
---

## ミッション

プロアクティブなヘルス管理、運用上のエクセレンス、戦略的な実現を通じて、GitLab のデータベースを確実に稼働させ続けます。私たちは飽和ポイントを特定して緩和することで運用上のランウェイを維持し、自動化されたスケーラブルなプロセスでインフラを運用し、チームが持続可能な方法で機能を構築するのに役立つツールとフレームワークを提供します。私たちの主な焦点は GitLab.com ですが、セルフマネージドのお客様にも利益をもたらすデータベースヘルスフレームワークとツールを提供するために、スコープを拡大しています。

## グループ

このステージは以下のグループで構成されています:

### Database Architecture

[Database Architecture](/handbook/engineering/data-engineering/database-excellence/database-architecture/) グループは、データ配置の決定フレームワーク、データ成長制御を提供し、すべてのデータストア間のデータベースレビュープロセスを調整することで、チームがデータを使って持続可能な構築を行えるようにします。

優先事項:

* チームが持続可能なデータアーキテクチャの決定を行えるようにする
* データベースのパフォーマンス Issue が本番に到達する前に防ぐ
* データライフサイクルのベストプラクティスを確立し維持する

{{< group-by-slugs alexander-sosna imanpalsingh l.rosa maximeorefice panoskanell praba.m7n vporalla >}}

### Database Health

[Database Health](/handbook/engineering/data-engineering/database-excellence/database-health/) グループは、飽和ポイントのシフトレフトな特定を含め、GitLab.com とセルフマネージドデプロイメントの両方でデータベースを健全に保つモニタリング、オブザーバビリティ、ヘルスフレームワークを提供します。

優先事項:

* データベースの飽和ポイントを積極的に管理することで運用上のランウェイを維持する
* すべてのデプロイメントタイプにわたるデータベースの健全性に対する可視性を提供する
* データベースリソース利用とコスト効率を最適化する

{{< group-by-slugs alexives allisonbrowne irina.bronipolsky krasimirangelov meiyang rhenchen.gitlab stomlinson >}}

### Database Automation

[Database Automation](/handbook/engineering/data-engineering/database-excellence/database-automation) グループは、GitLab の Postgres データベースをスケールで運用しやすくするための自動化フレームワーク、ツール、テンプレートを所有しています — 手動のカスタムプロセスを標準化された反復可能な自動化に置き換えます。3 つのチームすべてが自動化に貢献しますが、Database Automation はフレームワークを所有し、インフラ変更のプランニング負荷を管理します。

優先事項:

* 手動のデータベース運用を標準化された自動化プロセスに置き換える
* データベースのプロビジョニング、構成、アップグレードのための再利用可能なツールを構築する
* デプロイメントタイプにわたる信頼性の高い、反復可能なデータベース運用を可能にする

{{< group-by-slugs dazhu1 bshah11 saadullah707 mattkasa jon_jenkins pmistry2 >}}

### 以前のチーム

以前は、このステージは 2 つのチームで構成されていました: Database Frameworks と Database Operations。これらのチームは、私たちの本番データベースシステムをカバーする非常に大きく重複するスコープを持っていましたが、自由に使えるツールは異なりました。これにより、チームに 2 つの面で困難が生じました: チームは同じ目標を持つ異なるツールを使った異なるプロジェクトを追求し、各チームは合理的に計画または達成できるスコープよりも多くを持っていました。

FY27 の Q1 で、私たちは以下を達成するためにチームを現在の構造に再編しました:

* プロジェクトやエリアの間を行ったり来たりすることによる疲労を防ぐためにチームのスコープを狭める
* チームが現在のサイズの制限を超えて成長できるよう、より多くの管理サポートを提供する
* セルフマネージドのお客様に影響するトピックを含むよう、部門全体のスコープを拡大する

#### Database Frameworks

[Database Frameworks](/handbook/engineering/data-engineering/database-excellence/database-frameworks/) グループは、データベースシステムとインターフェースし通信する Rails アプリケーションコードを管理していました。

#### Database Operations

[Database Operations](/handbook/engineering/data-engineering/database-excellence/database-operations) グループは、GitLab.com の PostgreSQL データベースを動かすインフラストラクチャと自動化を管理していました。

## 私たちの働き方

Database Excellence 内の各チームは、バックエンドエンジニアとリライアビリティエンジニア (SRE/DBRE) のミックスで構成されています。バランスはチームによって異なります — Database Architecture と Database Health は主にバックエンドエンジニアで、Database Automation は主にリライアビリティエンジニアですが — すべてのチームには両方の専門分野が代表されています。

各チームには明確なフォーカスエリアがありますが、ステージ全体でいくつかの責任が共有されています。データベースレビューは Database Architecture によって調整されますが、3 つのチームすべてのメンバーによって担われます。オンコールローテーションはステージ全体のリライアビリティエンジニアから引き出されます。飽和緩和やインシデント対応などの運用上のニーズは、単一のグループによって所有されるのではなく、すべてのチームに分散されます。インフラストラクチャ管理とデータベースアップグレードもチーム間で共有されており、AMER、EMEA、APAC にまたがる 3 つのグループの地域分布が follow-the-sun カバレッジの可能性を可能にします。この共有モデルにより、運用知識が広く保たれ、単一のチームがボトルネックになることはありません。

## ヘルプのリクエスト

緊急事態、サポートのエスカレーション、責任あるチームの特定を含むデータベース Issue のヘルプを得るための完全なガイドについては、[データベース Issue のヘルプを得る](/handbook/engineering/data-engineering/database-excellence/help/) を参照してください。

### インシデントエスカレーション

データベースインシデントエスカレーションでは、オンコールルーティングのために [incident.io](https://app.incident.io/gitlab/on-call/schedules/01JXJ7MN4T14008GQKWYYNT6E8) を使用します。

* **スコープ**: Incident Manager On Call、Engineer On Call、および Security チームによって発生した GitLab.com S1 および S2 本番インシデント。GitLab Dedicated のサポートはコンサルティング的です。セルフマネージドのサポートは裁量的で、ケースバイケースで評価されます。
* **エスカレーション**: インシデント Slack チャンネルで `/inc escalate` を使用します。緊急でない Issue については、[トリアージローテーション](#triage-rotations) を使用するか、`#s_database_excellence` に投稿します。
* **応答**: ベストエフォート、現地タイムゾーン、平日のみ (24/5)。オンコールエンジニアは、コンサルティング的な役割で主題専門家として参加します。
* **プロセスの詳細**: 対応手順とシャドーイング手順については、[完全なエスカレーションプロセス](/handbook/engineering/data-engineering/database-excellence/help/#step-4-escalate-to-database-excellence) を参照してください。

### リライアビリティリクエスト

TBD

### Tier-2 オンコール

[Database Tier-2](/handbook/engineering/infrastructure-platforms/incident-management/on-call/tier-2/#database-operations-dbo) は、「ベストエフォート」ベースで応答するチームメンバーを擁する 24/5 の対応として人員配置されています。これは、このローテーションへのページが時折確認されない可能性があることを意味します。データベースオペレーターの限られた可用性により、それを超えてコミットすることは困難でした。

私たちは、最近の再編成への対応として、FY27-Q2 にこのローテーションを再検討する可能性があります。

### 長期 Stable Counterpart またはレビュアーのリクエスト

Stable counterpart やレビュアーなどの長期的なリクエストは、ステージレベルで処理されます。これらのリクエストは [counterpart リクエスト](https://gitlab.com/gitlab-org/database-team/team-tasks/-/work_items/new?description_template=counterpart_request) として提出されるべきです。

### トリアージローテーション {#triage-rotations}

TBA

## プランニングプロセス

TBA
