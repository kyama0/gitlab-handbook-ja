---
title: "Database Excellence ステージ"
description: "Database Excellence セクションは、GitLab のデータベースがスケールにおいて確実に稼働することを保証しながら、すべてのデータストアにわたるデータアーキテクチャ、配置、ライフサイクル管理についてチームが情報に基づいた意思決定を行えるようにします。"
upstream_path: /handbook/engineering/data-engineering/database-excellence/
upstream_sha: 3f9509996a1f405d6126d2081aebad493e4a3d21
translated_at: "2026-06-08T00:00:00Z"
translator: claude
stale: false
lastmod: "2026-06-08T13:31:46-07:00"
---

## ミッション {#mission}

プロアクティブなヘルス管理、運用上のエクセレンス、戦略的なイネーブルメントを通じて、GitLab のデータベースを確実に稼働させ続けます。私たちは飽和ポイントを特定して緩和することで運用上のランウェイを維持し、自動化されたスケーラブルなプロセスでインフラを運用し、チームが持続可能な方法で機能を構築するのに役立つツールとフレームワークを提供します。私たちの主な焦点は GitLab.com ですが、self-managed のお客様にも利益をもたらすデータベースヘルスフレームワークとツールを提供するために、スコープを拡大しています。

## ステージリーダーシップ {#stage-leadership}

{{< group-by-slugs alexives rsontam >}}

## グループ {#groups}

このステージは以下のグループで構成されています。

### Database Architecture {#database-architecture}

[Database Architecture](/handbook/engineering/data-engineering/database-excellence/database-architecture/) グループは、データ配置に関する意思決定フレームワーク、データ成長コントロール、およびすべてのデータストアにわたるデータベースレビュープロセスの調整を提供することで、チームが持続可能な方法でデータを活用して構築できるようにします。

優先事項:

* 持続可能なデータアーキテクチャ上の意思決定をチームができるようにする
* データベースのパフォーマンス問題が本番環境に到達する前に防ぐ
* データライフサイクルのベストプラクティスを確立・維持する

{{< group-by-slugs alexander-sosna imanpalsingh l.rosa maximeorefice panoskanell praba.m7n vporalla >}}

### Database Health {#database-health}

[Database Health](/handbook/engineering/data-engineering/database-excellence/database-health/) グループは、GitLab.com と self-managed デプロイの両方にわたってデータベースを健全に保つためのモニタリング、可観測性、ヘルスフレームワークを提供しており、飽和ポイントの早期（シフトレフト）特定も含まれます。

優先事項:

* 飽和ポイントをプロアクティブに管理することで運用上のランウェイを維持する
* すべてのデプロイタイプにわたってデータベースヘルスへの可視性を提供する
* データベースのリソース使用率とコスト効率を最適化する

{{< group-by-slugs alexives krasimirangelov meiyang nbelokolodov rhenchen.gitlab stomlinson >}}

### Database Automation {#database-automation}

[Database Automation](/handbook/engineering/data-engineering/database-excellence/database-automation) グループは、GitLab の Postgres データベースをスケールにおいて運用しやすくする自動化フレームワーク、ツール、テンプレートを所有しており、手作業でカスタムなプロセスを標準化された反復可能な自動化に置き換えます。3 つのチームすべてが自動化に貢献しますが、Database Automation がフレームワークを所有し、インフラ変更の計画負荷を管理します。

優先事項:

* 手動のデータベース運用を標準化された自動化プロセスに置き換える
* データベースのプロビジョニング、設定、アップグレードのための再利用可能なツールを構築する
* デプロイタイプを問わず、信頼性が高く反復可能なデータベース運用を可能にする

{{< group-by-slugs dazhu1 bshah11 saadullah707 mattkasa jon_jenkins pmistry2 amritasinha >}}

### 以前のチーム {#previous-teams}

以前、このステージは Database Frameworks と Database Operations の 2 チームで構成されていました。これらのチームは、私たちの本番データベースシステムをカバーする非常に広範で重複するスコープを持っていましたが、利用できるツールが異なっていました。その結果、チームには 2 つの側面で困難が生じました。すなわち、チームは同じ目標で異なるツールを用いて異なるプロジェクトを追求してしまうこと、そして各チームが現実的に計画・達成できる以上のスコープを持っていたことです。

FY27 の Q1 に、私たちは以下のことを達成するために、現在の構成にチームを再編しました。

* チームのスコープを絞り、プロジェクトや領域間を行き来する疲労を防ぐ
* マネジメントサポートをより手厚くし、チームが現在のサイズの制約を超えて成長できるようにする
* self-managed のお客様に影響するトピックも含めるよう、部門全体のスコープを拡大する

#### Database Frameworks {#database-frameworks}

[Database Frameworks](/handbook/engineering/data-engineering/database-excellence/database-frameworks/) グループは、私たちのデータベースシステムと連携・通信する Rails アプリケーションコードを管理していました。

#### Database Operations {#database-operations}

[Database Operations](/handbook/engineering/data-engineering/database-excellence/database-operations) グループは、GitLab.com の PostgreSQL データベースを支えるインフラと自動化を管理していました。

## 私たちの働き方 {#how-we-work}

Database Excellence 内の各チームは、バックエンドエンジニアと信頼性エンジニア（SRE/DBRE）の組み合わせで構成されています。バランスはチームによって異なり、Database Architecture と Database Health は主にバックエンドエンジニア、Database Automation は主に信頼性エンジニアで構成されていますが、すべてのチームに両方の専門分野が含まれています。

各チームには固有の重点領域がある一方で、いくつかの責任はステージ全体で共有されています。データベースレビューは Database Architecture が調整しますが、3 つのチームすべてのメンバーで実施されます。オンコールローテーションは、ステージ全体の信頼性エンジニアから選ばれます。飽和の緩和やインシデント対応などの運用上のニーズは、いずれかのグループが所有するのではなく、すべてのチームに分散しています。インフラ管理とデータベースアップグレードもチーム間で共有されています。3 つのグループの地域的な分散（AMER、EMEA、APAC にまたがる）が、フォロー・ザ・サン体制の可能性を実現しているからです。この共有モデルにより、運用知識が幅広く保たれ、単一のチームがボトルネックになることはありません。

## ヘルプのリクエスト {#requesting-help}

データベースに関する問題のヘルプを得るための完全なガイドは、緊急事態、サポートのエスカレーション、責任を負うチームの特定を含めて、[データベースの問題に関するヘルプを得る](/handbook/engineering/data-engineering/database-excellence/help/)を参照してください。

### インシデントのエスカレーション {#incident-escalation}

データベースインシデントのエスカレーションには、オンコールルーティングのために [incident.io](https://app.incident.io/gitlab/on-call/schedules/01JXJ7MN4T14008GQKWYYNT6E8) を使用します。

* **スコープ**: Incident Manager On Call、Engineer On Call、および Security チームが提起した GitLab.com の S1 および S2 本番インシデント。GitLab Dedicated のサポートはコンサルティング的です。self-managed のサポートは裁量に基づき、ケースバイケースで評価されます。
* **エスカレーション**: インシデント Slack チャネルで `/inc escalate` を使用します。緊急ではない問題は、[トリアージローテーション](#triage-rotations)を使用するか、`#s_database_excellence` に投稿してください。
* **対応**: ベストエフォート、ローカルタイムゾーン、平日のみ（24/5）。オンコールエンジニアは、コンサルティング的な立場で主題の専門家として参加します。
* **プロセスの詳細**: 対応手順とシャドーイングの指示については、[完全なエスカレーションプロセス](/handbook/engineering/data-engineering/database-excellence/help/#step-4-escalate-to-database-excellence)を参照してください。

### 信頼性リクエスト {#reliability-requests}

TBD

### Tier-2 オンコール {#tier-2-on-call}

[Database Tier-2](/handbook/engineering/infrastructure-platforms/incident-management/on-call/tier-2/#database-operations-dbo) は、チームメンバーが「ベストエフォート」ベースで対応する 24/5 の体制で運用されています。これは、このローテーションへのページが時折応答されない可能性があることを意味します。データベースオペレーターの可用性が限られているため、それ以上のコミットメントは困難でした。

私たちは、最近の組織再編を受けて、FY27-Q2 にこのローテーションを再検討する可能性があります。

### 長期的な Stable Counterpart またはレビュアーのリクエスト {#long-term-stable-counterpart-or-reviewer-requests}

Stable counterpart や reviewer などの長期的な依頼は、ステージレベルで対応します。これらの依頼は[カウンターパート依頼](https://gitlab.com/gitlab-org/database-team/team-tasks/-/work_items/new?description_template=counterpart_request)として提出してください。

### トリアージローテーション {#triage-rotations}

Database Excellence には[週次トリアージ Issue](https://gitlab.com/gitlab-org/database-team/team-tasks/-/work_items?state=opened&label_name[]=database::triage) があります。
この Issue は、Database excellence の入力と継続的なモニタリングが必要な、さまざまなセクション（例: DB の飽和、テーブルサイズのモニタリングなど）を構築する[自動化](https://gitlab.com/gitlab-org/database-team/update_status/-/blob/main/team_triage_issue.rb)によって、毎週自動的に作成されます。

これは、Database excellence ステージのバックエンドエンジニアと SRE で対応されます。
彼らは責任を共有し、必要に応じて適切な担当者（つまり、アプリケーション関連の項目には BE、インフラ関連には SRE）にタグ付けします。

{{% alert title="Note" color="info" %}}
次のステップ: トリアージ Issue のセクションは `backend`、`infra`、`shared` に分類されます。これにより、割り当てられた DRI が同じ Issue をトリアージする必要がなくなります。
{{% /alert %}}

## 計画プロセス {#planning-process}

TBA
