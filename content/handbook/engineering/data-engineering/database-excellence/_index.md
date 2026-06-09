---
title: "Database Excellence ステージ"
description: "Database Excellence セクションは、すべてのデータストアにわたってデータアーキテクチャ、配置、ライフサイクル管理についてチームが十分な情報に基づいた意思決定を行えるようにしながら、GitLab のデータベースを大規模に確実に稼働させます。"
upstream_path: /handbook/engineering/data-engineering/database-excellence/
upstream_sha: c6f416c14ee9f53cb671d49ff11a9671c68d9326
lastmod: 2026-06-08T10:04:59-05:00
translated_at: "2026-06-09T00:00:00Z"
translator: claude
stale: false
---

## Mission

プロアクティブな健全性管理、運用の卓越性、戦略的なイネーブルメントを通じて、GitLab のデータベースを確実に稼働させ続けます。私たちは飽和点を特定して緩和することで運用上の余裕（オペレーショナル・ランウェイ）を維持し、自動化されたスケーラブルなプロセスでインフラを運用し、チームが持続可能な形で機能を構築できるよう支援するツールとフレームワークを提供します。主な焦点は GitLab.com ですが、self-managed のお客様にもメリットのあるデータベース健全性フレームワークとツールを提供するため、スコープを拡大しています。

## Stage Leadership

{{< group-by-slugs alexives rsontam >}}

## Groups

このステージは、以下のグループで構成されています。

### Database Architecture

[Database Architecture](/handbook/engineering/data-engineering/database-excellence/database-architecture/) グループは、データ配置のための意思決定フレームワーク、データ増加の制御を提供し、すべてのデータストアにわたるデータベースレビュープロセスを調整することで、チームがデータを使って持続可能な形で構築できるようにします。

優先事項:

* チームが持続可能なデータアーキテクチャの意思決定を行えるようにする
* データベースのパフォーマンス問題を本番環境に到達する前に防ぐ
* データライフサイクルのベストプラクティスを確立し維持する

{{< group-by-slugs alexander-sosna imanpalsingh l.rosa maximeorefice panoskanell praba.m7n vporalla >}}

### Database Health

[Database Health](/handbook/engineering/data-engineering/database-excellence/database-health/) グループは、飽和点のシフトレフトな特定を含め、GitLab.com と self-managed の両方のデプロイにわたってデータベースの健全性を保つためのモニタリング、可観測性、健全性フレームワークを提供します。

優先事項:

* データベースの飽和点をプロアクティブに管理することで運用上の余裕（オペレーショナル・ランウェイ）を維持する
* すべてのデプロイタイプにわたってデータベースの健全性を可視化する
* データベースのリソース利用率とコスト効率を最適化する

{{< group-by-slugs alexives krasimirangelov meiyang nbelokolodov rhenchen.gitlab stomlinson >}}

### Database Automation

[Database Automation](/handbook/engineering/data-engineering/database-excellence/database-automation) グループは、手動の独自プロセスを標準化された反復可能な自動化に置き換えることで、GitLab の Postgres データベースを大規模に運用しやすくする自動化フレームワーク、ツール、テンプレートを所有しています。3 つのチームすべてが自動化に貢献しますが、フレームワークを所有し、インフラ変更のプランニング負荷を管理するのは Database Automation です。

優先事項:

* 手動のデータベース運用を標準化された自動化プロセスに置き換える
* データベースのプロビジョニング、構成、アップグレードのための再利用可能なツールを構築する
* デプロイタイプを問わず、信頼性が高く反復可能なデータベース運用を実現する

{{< group-by-slugs dazhu1 bshah11 saadullah707 mattkasa jon_jenkins pmistry2 amritasinha >}}

### Previous Teams

以前、このステージは Database Frameworks と Database Operations の 2 つのチームで構成されていました。これらのチームは本番データベースシステムをカバーする非常に広範で重複するスコープを持っていましたが、自由に使えるツールは異なっていました。その結果、チームは 2 つの面で困難に直面しました。チームが同じ目標を異なるツールで追求して別々のプロジェクトを進めてしまうこと、そして各チームが合理的にプランニングしたり達成したりできる以上のスコープを抱えていたことです。

FY27 の Q1 に、いくつかのことを達成するために、私たちはチームを現在の構造に再編成しました。

* プロジェクトや領域間を行き来することによる疲弊を防ぐため、チームのスコープを絞り込む
* チームが現在の規模の制約を超えて成長できるよう、より多くのマネジメントサポートを提供する
* self-managed のお客様に影響するトピックを含めて、部門全体のスコープを拡大する

#### Database Frameworks

[Database Frameworks](/handbook/engineering/data-engineering/database-excellence/database-frameworks/) グループは、データベースシステムとインターフェースし通信する Rails アプリケーションコードを管理していました。

#### Database Operations

[Database Operations](/handbook/engineering/data-engineering/database-excellence/database-operations) グループは、GitLab.com の PostgreSQL データベースを支えるインフラと自動化を管理していました。

## How We Work

Database Excellence 内の各チームは、バックエンドエンジニアとリライアビリティエンジニア（SRE/DBRE）の組み合わせで構成されています。バランスはチームによって異なり、Database Architecture と Database Health は主にバックエンドエンジニア、Database Automation は主にリライアビリティエンジニアですが、すべてのチームに両方の専門分野が含まれています。

各チームには明確な注力領域がありますが、いくつかの責務はステージ全体で共有されています。データベースレビューは Database Architecture が調整しますが、3 つのチームすべてのメンバーが担当します。オンコールローテーションはステージ全体のリライアビリティエンジニアから構成されます。飽和の緩和やインシデント対応といった運用上のニーズは、特定のグループが所有するのではなく、すべてのチームに分散されます。インフラ管理とデータベースのアップグレードもチーム間で共有されており、AMER、EMEA、APAC にまたがる 3 つのグループの地域分散により、フォロー・ザ・サン体制の可能性が生まれています。この共有モデルにより、運用知識が幅広く保たれ、特定のチームがボトルネックになることがなくなります。

## Requesting Help

緊急事態、サポートエスカレーション、責任を持つチームの特定を含む、データベース問題に関するヘルプを得るための完全なガイドについては、[Getting Help with Database Issues](/handbook/engineering/data-engineering/database-excellence/help/) を参照してください。

### Incident Escalation

データベースのインシデントエスカレーションでは、オンコールのルーティングに [incident.io](https://app.incident.io/gitlab/on-call/schedules/01JXJ7MN4T14008GQKWYYNT6E8) を使用します。

* **スコープ**: Incident Manager On Call、Engineer On Call、Security チームによって提起された GitLab.com の S1 および S2 本番インシデント。GitLab Dedicated のサポートはコンサルティング的なものです。Self-managed のサポートは裁量により、ケースバイケースで評価されます。
* **エスカレーション**: インシデントの Slack チャンネルで `/inc escalate` を使用します。緊急でない問題については、[triage rotation](#triage-rotations) を使用するか、`#s_database_excellence` に投稿してください。
* **対応**: ベストエフォート、現地タイムゾーン、平日のみのカバー（24/5）です。オンコールエンジニアはコンサルティング的な立場で、専門家（SME）として参加します。
* **プロセスの詳細**: 対応手順とシャドーイングの説明については、[完全なエスカレーションプロセス](/handbook/engineering/data-engineering/database-excellence/help/#step-4-escalate-to-database-excellence) を参照してください。

### Reliability Requests

TBD

### Tier-2 On-Call

[Database Tier-2](/handbook/engineering/infrastructure-platforms/incident-management/on-call/tier-2/#database-operations-dbo) は、チームメンバーが「ベストエフォート」ベースで対応する 24/5 体制で運用されています。これは、このローテーションへのページングが時折確認されないままになる可能性があることを意味します。データベースオペレーターの可用性が限られているため、それ以上のコミットメントは難しい状況です。

最近の再編成を受けて、FY27-Q2 にこのローテーションを再検討する可能性があります。

### Long Term Stable Counterpart or Reviewer requests

stable counterpart やレビュアーなど、より長期的なリクエストは、ステージレベルで処理されます。これらのリクエストは [counterpart request](https://gitlab.com/gitlab-org/database-team/team-tasks/-/work_items/new?description_template=counterpart_request) として提出してください。

### Triage Rotations

Database Excellence には[週次のトリアージ Issue](https://gitlab.com/gitlab-org/database-team/team-tasks/-/work_items?state=opened&label_name[]=database::triage) があります。この Issue は、Database Excellence の入力と継続的なモニタリングが必要なさまざまなセクション（例: DB の飽和、テーブルサイズのモニタリングなど）を構築する[自動化](https://gitlab.com/gitlab-org/database-team/update_status/-/blob/main/team_triage_issue.rb)によって毎週自動的に作成されます。

これは Database Excellence ステージのバックエンドエンジニアと SRE が担当します。彼らは責務を分担し、必要に応じて適切な担当者（つまり、アプリケーション関連の項目には BE、インフラ関連の項目には SRE）をタグ付けします。

{{% alert title="Note" color="info" %}}
次のステップ: トリアージ Issue 内のセクションは `backend`、`infra`、`shared` に分類されます。これにより、アサインされた DRI が同じ Issue をトリアージする必要がなくなります。
{{% /alert %}}

## Planning Process

TBA
