---
title: "Database Excellence ステージ"
description: "Database Excellence セクションは、GitLab のデータベースがスケールにおいて確実に稼働することを保証しながら、すべてのデータストアにわたるデータアーキテクチャ、配置、ライフサイクル管理についてチームが情報に基づいた意思決定を行えるようにします。"
upstream_path: /handbook/engineering/data-engineering/database-excellence/
upstream_sha: 5b642767a4478d09eeedd1689a94c1b164788f25
translated_at: "2026-06-12T13:26:18Z"
translator: claude
stale: false
model: claude-opus-4-7
lastmod: "2026-06-08T10:04:59-05:00"
---

## ミッション {#mission}

プロアクティブなヘルス管理、運用の卓越性、戦略的なイネーブルメントを通じて、GitLab のデータベースを確実に稼働させ続けます。私たちは、飽和点を特定し緩和することで運用上の余裕を維持し、自動化されたスケーラブルなプロセスでインフラを運用し、チームが持続可能な形で機能を構築するのに役立つツールとフレームワークを提供します。私たちの主な焦点は GitLab.com ですが、self-managed のお客様にも役立つデータベースヘルスフレームワークとツールを提供するために、その範囲を拡大しています。

## ステージのリーダーシップ {#stage-leadership}

{{< group-by-slugs alexives rsontam >}}

## グループ {#groups}

このステージは次のグループで構成されています。

### Database Architecture {#database-architecture}

[Database Architecture](/handbook/engineering/data-engineering/database-excellence/database-architecture/) グループは、データ配置の意思決定フレームワーク、データ成長の制御を提供し、すべてのデータストアにわたるデータベースレビュープロセスを調整することで、チームがデータを使って持続可能な形で構築できるようにします。

優先事項:

* チームが持続可能なデータアーキテクチャの意思決定を行えるようにする
* データベースのパフォーマンス問題が本番に到達する前に防ぐ
* データライフサイクルのベストプラクティスを確立し維持する

{{< group-by-slugs alexander-sosna imanpalsingh l.rosa maximeorefice panoskanell praba.m7n vporalla >}}

### Database Health {#database-health}

[Database Health](/handbook/engineering/data-engineering/database-excellence/database-health/) グループは、飽和点のシフトレフトな特定を含め、GitLab.com と self-managed デプロイの両方にわたってデータベースを健全に保つモニタリング、可観測性、ヘルスフレームワークを提供します。

優先事項:

* データベースの飽和点をプロアクティブに管理することで運用上の余裕を維持する
* すべてのデプロイタイプにわたるデータベースヘルスへの可視性を提供する
* データベースリソースの利用とコスト効率を最適化する

{{< group-by-slugs alexives krasimirangelov meiyang nbelokolodov rhenchen.gitlab stomlinson >}}

### Database Automation {#database-automation}

[Database Automation](/handbook/engineering/data-engineering/database-excellence/database-automation) グループは、GitLab の Postgres データベースをスケールで運用しやすくする自動化フレームワーク、ツール、テンプレートを所有しています。手動でその場限りのプロセスを、標準化された再現可能な自動化に置き換えます。3 つのチームすべてが自動化に貢献しますが、Database Automation がフレームワークを所有し、インフラ変更の計画負荷を管理します。

優先事項:

* 手動のデータベース運用を標準化された自動化されたプロセスに置き換える
* データベースのプロビジョニング、設定、アップグレードのための再利用可能なツールを構築する
* デプロイタイプを越えて信頼性が高く再現可能なデータベース運用を可能にする

{{< group-by-slugs dazhu1 bshah11 saadullah707 mattkasa jon_jenkins pmistry2 amritasinha >}}

### 以前のチーム {#previous-teams}

以前、このステージは Database Frameworks と Database Operations の 2 つのチームで構成されていました。これらのチームは、私たちの本番データベースシステムをカバーする非常に大きく重複したスコープを持っていましたが、利用できるツールが異なっていました。これにより、2 つの点でチームに困難が生じました。チームは同じ目標と異なるツールで異なるプロジェクトを進めることになり、また各チームは合理的に計画したり達成したりできる以上のスコープを抱えていました。

FY27 の Q1 に、いくつかのことを達成するために、チームを現在の構造に再編成しました。

* プロジェクトや領域を行き来することによる疲労を防ぐために、チームのスコープを絞り込む
* チームが現在の規模の制限を超えて成長できるように、より多くのマネジメントサポートを提供する
* self-managed のお客様に影響するトピックを含めるために、部門全体のスコープを拡大する

#### Database Frameworks {#database-frameworks}

[Database Frameworks](/handbook/engineering/data-engineering/database-excellence/database-frameworks/) グループは、私たちのデータベースシステムとインターフェースし通信する Rails アプリケーションコードを管理していました。

#### Database Operations {#database-operations}

[Database Operations](/handbook/engineering/data-engineering/database-excellence/database-operations) グループは、GitLab.com の PostgreSQL データベースを支えるインフラと自動化を管理していました。

## 私たちの働き方 {#how-we-work}

Database Excellence 内の各チームは、バックエンドエンジニアと信頼性エンジニア (SRE/DBRE) の混成で構成されています。バランスはチームによって異なり、Database Architecture と Database Health は主にバックエンドエンジニア、Database Automation は主に信頼性エンジニアですが、すべてのチームに両方の専門分野が含まれています。

各チームには明確な焦点領域がありますが、いくつかの責任はステージ全体で共有されています。データベースレビューは Database Architecture によって調整されますが、3 つのチームすべてのメンバーが対応します。オンコールローテーションはステージ全体の信頼性エンジニアから構成されます。飽和緩和やインシデント対応などの運用上のニーズは、単一のグループが所有するのではなく、すべてのチームに分散されます。インフラ管理とデータベースアップグレードもチーム間で共有されます。3 つのグループの地域的な分散（AMER、EMEA、APAC にまたがる）により、フォロー・ザ・サンのカバレッジの可能性が生まれるからです。この共有モデルにより、運用知識が広く保たれ、単一のチームがボトルネックにならないことが保証されます。

## ヘルプのリクエスト {#requesting-help}

緊急事態、サポートエスカレーション、責任を持つチームの特定を含む、データベース問題のヘルプを得るための完全なガイドについては、[データベース問題に関するヘルプの取得](/handbook/engineering/data-engineering/database-excellence/help/)を参照してください。

### インシデントエスカレーション {#incident-escalation}

データベースインシデントのエスカレーションでは、オンコールルーティングに [incident.io](https://app.incident.io/gitlab/on-call/schedules/01JXJ7MN4T14008GQKWYYNT6E8) を使用します。

* **スコープ**: Incident Manager On Call、Engineer On Call、Security チームによって提起された GitLab.com の S1 および S2 本番インシデント。GitLab Dedicated のサポートはコンサルティング型です。self-managed のサポートは裁量によるもので、ケースバイケースで評価されます。
* **エスカレーション**: インシデントの Slack チャンネルで `/inc escalate` を使用します。緊急ではない Issue については、[トリアージローテーション](#triage-rotations)を使用するか、`#s_database_excellence` に投稿してください。
* **対応**: ベストエフォート、現地のタイムゾーン、平日のカバレッジのみ (24/5)。オンコールエンジニアは、コンサルティングの立場で対象分野の専門家として参加します。
* **プロセスの詳細**: 対応手順とシャドーイングの手順については、[完全なエスカレーションプロセス](/handbook/engineering/data-engineering/database-excellence/help/#step-4-escalate-to-database-excellence)を参照してください。

### 信頼性リクエスト {#reliability-requests}

TBD

### Tier-2 オンコール {#tier-2-on-call}

[Database Tier-2](/handbook/engineering/infrastructure-platforms/incident-management/on-call/tier-2/#database-operations-dbo) は、「ベストエフォート」ベースで対応するチームメンバーによる 24/5 の対応として構成されています。これは、このローテーションへのページが時折確認されないままになる可能性があることを意味します。データベースオペレーターの限られた空き状況により、それ以上のコミットが難しくなっています。

最近の再編成を受けて、FY27-Q2 にこのローテーションを再検討する可能性があります。

### 長期の安定したカウンターパートまたはレビュアーのリクエスト {#long-term-stable-counterpart-or-reviewer-requests}

安定したカウンターパートやレビュアーなど、より長期的なリクエストは、ステージレベルで処理されます。これらのリクエストは、[カウンターパートリクエスト](https://gitlab.com/gitlab-org/database-team/team-tasks/-/work_items/new?description_template=counterpart_request)として提出する必要があります。

### トリアージローテーション {#triage-rotations}

Database Excellence には[週次トリアージ Issue](https://gitlab.com/gitlab-org/database-team/team-tasks/-/work_items?state=opened&label_name[]=database::triage) があり、この Issue は[自動化](https://gitlab.com/gitlab-org/database-team/update_status/-/blob/main/team_triage_issue.rb)によって毎週自動的に作成され、Database Excellence の入力と継続的なモニタリングが必要なさまざまなセクション（例: DB 飽和、テーブルサイズのモニタリングなど）を構築します。

これは、Database Excellence ステージのバックエンドエンジニアと SRE が対応します。
彼らは責任を共有し、必要に応じて適切な人をタグ付けします（つまり、アプリケーション関連の項目は BE、インフラ関連の項目は SRE）。

{{% alert title="Note" color="info" %}}
次のステップ: トリアージ Issue 内のセクションは `backend`、`infra`、`shared` に分類されます。これにより、割り当てられた DRI が同じ Issue をトリアージする必要がなくなります。
{{% /alert %}}

## 計画プロセス {#planning-process}

TBA
