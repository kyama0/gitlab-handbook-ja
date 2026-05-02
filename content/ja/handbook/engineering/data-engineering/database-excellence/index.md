---
title: "Database Excellence ステージ"
description: "Database Excellence セクションは、GitLab のデータベースがスケールにおいて確実に実行されるようにしながら、チームがすべてのデータストアにわたるデータアーキテクチャ、配置、ライフサイクル管理について情報に基づいた意思決定を行えるようにします。"
upstream_path: /handbook/engineering/data-engineering/database-excellence/
upstream_sha: 3480299851f7e2243d4f08b75dac452f89929636
translated_at: "2026-04-28T02:53:44Z"
translator: claude
stale: false
---

## ミッション

積極的なヘルス管理、オペレーショナルエクセレンス、戦略的イネーブルメントを通じて GitLab のデータベースを確実に実行し続けます。飽和点の特定と軽減によって運用の余裕を維持し、自動化されたスケーラブルなプロセスでインフラストラクチャを運用し、チームが機能を持続可能に構築するためのツールとフレームワークを提供します。私たちの主な注力点は GitLab.com ですが、セルフマネージドのお客様にも恩恵をもたらすデータベースヘルスフレームワークとツールを提供するためにスコープを拡大しています。

## グループ

このステージは以下のグループで構成されています:

### Database Architecture

[Database Architecture](/handbook/engineering/data-engineering/database-excellence/database-architecture/) グループは、データ配置の意思決定フレームワーク、データ増加コントロール、およびすべてのデータストアにわたるデータベースレビュープロセスの調整を提供することで、チームがデータを持続可能に構築できるようにします。

優先事項:

* チームが持続可能なデータアーキテクチャの意思決定を行えるよう支援する
* 本番環境に達する前にデータベースパフォーマンスの問題を防ぐ
* データライフサイクルのベストプラクティスを確立・維持する


<p class="my-3 text-sm text-gray-600 italic">チームメンバー情報は <a href="https://handbook.gitlab.com/handbook/engineering/data-engineering/database-excellence/" rel="external noopener">原文 (英語)</a> を参照してください。</p>


### Database Health

[Database Health](/handbook/engineering/data-engineering/database-excellence/database-health/) グループは、GitLab.com とセルフマネージドデプロイメントの両方にわたってデータベースを健全に保つためのモニタリング、オブザーバビリティ、ヘルスフレームワークを提供します。これには、飽和点のシフトレフト特定が含まれます。

優先事項:

* データベースの飽和点を積極的に管理して運用の余裕を維持する
* すべてのデプロイメントタイプにわたるデータベースヘルスの可視性を提供する
* データベースリソースの使用率とコスト効率を最適化する


<p class="my-3 text-sm text-gray-600 italic">チームメンバー情報は <a href="https://handbook.gitlab.com/handbook/engineering/data-engineering/database-excellence/" rel="external noopener">原文 (英語)</a> を参照してください。</p>


### Database Automation

[Database Automation](/handbook/engineering/data-engineering/database-excellence/database-automation) グループは、GitLab の Postgres データベースをスケールで運用しやすくする自動化フレームワーク、ツール、テンプレートを所有します。手動でアドホックなプロセスを標準化された繰り返し可能な自動化に置き換えます。3つのチームすべてが自動化に貢献しますが、Database Automation がフレームワークを所有し、インフラストラクチャの変更の計画負荷を管理します。

優先事項:

* 手動のデータベース操作を標準化された自動化プロセスに置き換える
* データベースのプロビジョニング、設定、アップグレードのための再利用可能なツールを構築する
* デプロイメントタイプにわたって信頼できる繰り返し可能なデータベース操作を実現する


<p class="my-3 text-sm text-gray-600 italic">チームメンバー情報は <a href="https://handbook.gitlab.com/handbook/engineering/data-engineering/database-excellence/" rel="external noopener">原文 (英語)</a> を参照してください。</p>


### 以前のチーム

以前、このステージは 2つのチームで構成されていました: Database Frameworks と Database Operations。これらのチームは本番データベースシステムをカバーする非常に大きく重複したスコープを持っていましたが、利用できるツールが異なっていました。これにより、チームは 2つの面で困難に直面しました: チームは同じ目標に向けて異なるツールで異なるプロジェクトを追求し、各チームは合理的に計画・達成できる以上のスコープを持っていました。

FY27 の Q1 に、いくつかのことを達成するためにチームを現在の構造に再編しました:

* プロジェクトや領域間を飛び回る疲労を防ぐためにチームのスコープを絞る
* チームが現在のサイズ制限を超えて成長できるよう管理サポートを強化する
* セルフマネージドのお客様に影響を与えるトピックを含めるために部門全体のスコープを拡大する

#### Database Frameworks

[Database Frameworks](/handbook/engineering/data-engineering/database-excellence/database-frameworks/) グループは、データベースシステムとインターフェースして通信する Rails アプリケーションコードを管理していました。

#### Database Operations

[Database Operations](/handbook/engineering/data-engineering/database-excellence/database-operations) グループは、GitLab.com の PostgreSQL データベースを動かすインフラストラクチャと自動化を管理していました。

## 働き方

Database Excellence 内の各チームは、バックエンドエンジニアと信頼性エンジニア（SRE/DBRE）の混合で構成されています。バランスはチームによって異なります — Database Architecture と Database Health は主にバックエンドエンジニアで構成され、Database Automation は主に信頼性エンジニアで構成されますが、すべてのチームに両方の職種が代表されています。

各チームには独自の注力領域がありますが、いくつかの責任はステージ全体で共有されています。データベースレビューは Database Architecture が調整しますが、3つのチームすべてのメンバーがスタッフとして参加します。オンコールローテーションはステージ全体の信頼性エンジニアから集めます。飽和軽減やインシデント対応などの運用ニーズは、単一のグループが所有するのではなく、すべてのチームに分散されています。インフラストラクチャ管理とデータベースアップグレードも、AMER、EMEA、APAC にまたがる 3つのグループの地域的分散がフォロー・ザ・サンのカバレッジの可能性を可能にするため、チーム間で共有されています。この共有モデルにより、運用知識が広く維持され、単一のチームがボトルネックになることはありません。

## サポートの依頼

### サポートエスカレーション

TBD

### 信頼性リクエスト

TBD

### Tier-2 オンコール

[Database Tier-2](/handbook/engineering/infrastructure-platforms/incident-management/on-call/tier-2/#database-operations-dbo) は「ベストエフォート」基準でチームメンバーが対応する 24/5 のレスポンスとしてスタッフが配置されています。これは、このローテーションへのページが時々未確認のままになる可能性があることを意味します。データベースオペレーターの利用可能性が限られているため、それ以上のコミットは難しい状況です。

最近の再編に対応して、FY27-Q2 にこのローテーションを再検討する可能性があります。

### 長期的なステーブルカウンターパートまたはレビュアーのリクエスト

ステーブルカウンターパートやレビュアーなどの長期的なリクエストは、ステージレベルで処理されます。これらのリクエストは[カウンターパートリクエスト](https://gitlab.com/gitlab-org/database-team/team-tasks/-/work_items/new?description_template=counterpart_request)として提出してください。

### トリアージローテーション

TBA

## 計画プロセス

TBA
