---
title: "Database Excellence ステージ"
description: "Database Excellence セクションは、GitLab のデータベースがスケールにおいて確実に稼働することを保証しながら、すべてのデータストアにわたるデータアーキテクチャ、配置、ライフサイクル管理についてチームが情報に基づいた意思決定を行えるようにします。"
upstream_path: /handbook/engineering/data-engineering/database-excellence/
upstream_sha: "fa96dbec1adcd6457e8819e6bd3d28fddfdddf4f"
lastmod: "2026-09-18T12:11:14-05:00"
translated_at: "2026-09-20T02:04:59.673212+00:00"
translator: codex
stale: false
---

## ミッション {#mission}

GitLab.com と GitLab を自ら運用するお客様の両方で、GitLab のデータベースの信頼性と運用上の余力を維持します。GitLab.com では、Postgres 群の運用、ハードウェアの追加だけに頼らずデータの増加を制御して飽和を未然に防ぐこと、Cells を含むすべてのプロダクトデータベース向けに単一の管理された経路を構築することを意味します。セルフマネージドのお客様には、実行の可否を判定する整合性チェック、すべてのマイグレーションが実行されることを保証するテストフレームワーク、より短いアップグレード経路によって、信頼できるアップグレードを提供します。これらすべてを通じて、私たちはコードベースの拡大に合わせてデータベースレビューをスケールさせ、少人数のレビュアーがボトルネックにならずに、チームがデータを使って持続可能な形で構築できるようにします。

## ステージのリーダーシップ {#stage-leadership}

{{< group-by-slugs alexives rsontam >}}

## グループ {#groups}

このステージは以下のグループで構成されています。

### Database Architecture {#database-architecture}

[Database Architecture](/handbook/engineering/data-engineering/database-excellence/database-architecture/) グループは、データ配置のための意思決定フレームワーク、データ増加のコントロール、すべてのデータストアにわたるデータベースレビュープロセスの調整を提供することで、チームがデータを使って持続可能な形で構築できるようにします。

優先事項:

* チームが持続可能なデータアーキテクチャの意思決定を行えるようにする
* データベースのパフォーマンス問題が本番環境に到達する前に防止する
* データライフサイクルのベストプラクティスを確立し維持する

{{< group-by-slugs alexander-sosna amritasinha l.rosa mattkasa maximeorefice panoskanell praba.m7n vporalla >}}

### Self-Managed Database Experience {#self-managed-database-experience}

[Self-Managed Database Experience](/handbook/engineering/data-engineering/database-excellence/self-managed-database-experience/) グループは、飽和ポイントのシフトレフトでの特定を含め、GitLab.com とセルフマネージドの両方のデプロイメントでデータベースを健全に保つためのモニタリング、オブザーバビリティ、ヘルスフレームワークを提供します。

優先事項:

* データベースの飽和ポイントを積極的に管理することでオペレーションの余力を維持する
* すべてのデプロイメントタイプにわたってデータベースのヘルスを可視化する
* データベースのリソース利用とコスト効率を最適化する

{{< group-by-slugs nbelokolodov amsingh6 imanpalsingh krasimirangelov >}}

### Database Automation {#database-automation}

[Database Automation](/handbook/engineering/data-engineering/database-excellence/database-automation) グループは、GitLab の Postgres データベースをスケールで運用しやすくする自動化フレームワーク、ツール、テンプレートを所有しており、手動の個別プロセスを標準化された反復可能な自動化に置き換えます。3 つのチームすべてが自動化に貢献しますが、Database Automation がフレームワークを所有し、インフラ変更の計画負荷を管理します。

優先事項:

* 手動のデータベース運用を標準化された自動化プロセスに置き換える
* データベースのプロビジョニング、設定、アップグレードのための再利用可能なツールを構築する
* デプロイメントタイプを横断して信頼性が高く反復可能なデータベース運用を実現する

{{< group-by-slugs dazhu1 bshah11 jon_jenkins meiyang pmistry2 rhenchen.gitlab saadullah707 >}}

### 以前のチーム {#previous-teams}

以前は、このステージは Database Frameworks と Database Operations の 2 つのチームで構成されていました。これらのチームは本番データベースシステムをカバーする非常に大きく重複した範囲を持っていましたが、自由に使えるツールが異なっていました。これにより、チームは 2 つの点で困難を抱えていました。同じ目標に対して異なるツールで異なるプロジェクトを進めてしまうことと、各チームが合理的に計画したり達成したりできる以上の範囲を抱えていたことです。

FY27 の Q1 に、私たちはいくつかのことを達成するためにチームを現在の構造に再編成しました。

* プロジェクトや領域の間を行き来することによる疲労を防ぐために、チームの範囲を狭める
* チームが現在のサイズの制限を超えて成長できるように、より多くのマネジメントサポートを提供する
* セルフマネージドのお客様に影響を与えるトピックを含めるように、部門全体の範囲を拡大する

#### Database Frameworks {#database-frameworks}

[Database Frameworks](/handbook/engineering/data-engineering/database-excellence/database-frameworks/) グループは、データベースシステムとインターフェースして通信する Rails アプリケーションコードを管理していました。

#### Database Operations {#database-operations}

[Database Operations](/handbook/engineering/data-engineering/database-excellence/database-operations) グループは、GitLab.com の PostgreSQL データベースを支えるインフラと自動化を管理していました。

#### Database Health {#database-health}

[Database Health](/handbook/engineering/data-engineering/database-excellence/database-health/) グループは FY27-Q1 の再編成から 2026 年 9 月まで活動し、その時点でセルフマネージドのヘルスに関する業務は Self-Managed Database Experience に、GitLab.com の飽和に関する業務は Database Automation に移管されました。

## 私たちの働き方 {#how-we-work}

Database Excellence 内の各チームは、バックエンドエンジニアとリライアビリティエンジニア（SRE/DBRE）の混成で構成されています。バランスはチームによって異なります。Database Architecture と Self-Managed Database Experience は主にバックエンドエンジニア、Database Automation は主にリライアビリティエンジニアで構成されています。すべてのチームに両方の専門分野が含まれています。

各チームは明確な重点領域を持っていますが、いくつかの責任はステージ全体で共有されています。データベースレビューは Database Architecture が調整しますが、3 つのチームすべてのメンバーが担当します。オンコールのローテーションはステージ全体のリライアビリティエンジニアから編成されます。飽和の緩和やインシデント対応といったオペレーション上のニーズは、単一のグループが所有するのではなく、すべてのチームに分散されています。インフラ管理とデータベースのアップグレードもチーム間で共有されています。3 つのグループの地域分布（AMER、EMEA、APAC にまたがる）により、フォロー・ザ・サンのカバレッジが可能になるためです。この共有モデルにより、オペレーションの知識が幅広く保たれ、単一のチームがボトルネックになることがありません。

## 支援の依頼 {#requesting-help}

緊急事態、サポートのエスカレーション、責任を持つチームの特定を含む、データベースの問題に関する支援を得るための完全なガイドについては、[データベースの問題に関する支援を得る](/handbook/engineering/data-engineering/database-excellence/help/)を参照してください。

### インシデントのエスカレーション {#incident-escalation}

データベースインシデントのエスカレーションは、オンコールのルーティングに [incident.io](https://app.incident.io/gitlab/on-call/schedules/01JXJ7MN4T14008GQKWYYNT6E8) を使用します。

* **範囲**: Incident Manager On Call、Engineer On Call、Security チームが提起した GitLab.com の S1 および S2 本番インシデント。GitLab Dedicated のサポートはコンサルティング的です。セルフマネージドのサポートは裁量的で、ケースバイケースで評価されます。
* **エスカレーション**: インシデントの Slack チャンネルで `/inc escalate` を使用します。緊急でない問題については、[トリアージローテーション](#triage-rotations)を使用するか、`#s_database_excellence` に投稿します。
* **対応**: ベストエフォート、現地タイムゾーン、平日のみのカバレッジ（24/5）。オンコールエンジニアは、コンサルティング的な立場で主題の専門家として参加します。
* **プロセスの詳細**: 対応手順とシャドーイングの指示については、[完全なエスカレーションプロセス](/handbook/engineering/data-engineering/database-excellence/help/#step-4-escalate-to-database-excellence)を参照してください。

### リライアビリティ関連の依頼 {#reliability-requests}

TBD

### Tier-2 オンコール {#tier-2-on-call}

[Database Excellence オンコール](/handbook/engineering/infrastructure-platforms/incident-management/on-call/tier-2/#database-excellence) は Tier-2 ローテーションです。

24x5 のカバレッジ体制で、チームのキャパシティにより 05:00 - 07:00 および 22:00 - 23:00 がローテーションにおける既知のギャップです。

### 長期的な Stable Counterpart またはレビュアーの依頼 {#long-term-stable-counterpart-or-reviewer-requests}

stable counterpart やレビュアーといった長期的な依頼は、ステージレベルで処理されます。これらの依頼は [カウンターパート依頼](https://gitlab.com/gitlab-org/database-team/team-tasks/-/work_items/new?description_template=counterpart_request) として提出してください。

### トリアージローテーション {#triage-rotations}

Database Excellence には[毎週のトリアージ Issue](https://gitlab.com/gitlab-org/database-team/team-tasks/-/work_items?state=opened&label_name[]=database::triage)があり、この Issue は[自動化](https://gitlab.com/gitlab-org/database-team/update_status/-/blob/main/team_triage_issue.rb)によって毎週自動的に作成され、Database Excellence の入力と継続的なモニタリングが必要なさまざまなセクション（例: DB の飽和、テーブルサイズのモニタリングなど）を構築します。

これは Database Excellence ステージのバックエンドエンジニアと SRE が担当します。
責任を分担し、必要に応じて適切な担当者（つまり、アプリケーション関連の項目は BE、インフラ関連の項目は SRE）をタグ付けします。

{{% alert title="注記" color="info" %}}
次のステップ: トリアージ Issue 内のセクションは `backend`、`infra`、`shared` に分類されます。これにより、アサインされた DRI が同じ Issue をトリアージする必要がなくなります。
{{% /alert %}}

## 計画プロセス {#planning-process}

TBA
