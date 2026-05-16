---
title: Workflow Catalog グループ
description: "Workflow Catalog グループは、組織、グループ、プロジェクト全体で作成・キュレーション・共有可能なエージェント、ツール、フローのカタログである Workflow Catalog の開発に注力しています。"
upstream_path: /handbook/engineering/ai/workflow-catalog/
upstream_sha: b4eeb07f0d5f46e2fc5f8572be1a2547261aed89
translated_at: "2026-04-26T03:00:00Z"
translator: claude
stale: false
lastmod: "2026-04-17T16:56:59+01:00"
---

## ビジョン

Workflow Catalog グループは、組織、グループ、プロジェクト全体で作成・キュレーション・共有可能なエージェント、ツール、フローのカタログである Workflow Catalog の開発に注力しています。

## チームメンバー

**エンジニアリングマネージャー ＆ エンジニア**


<p class="my-3 text-sm text-gray-600 italic">チームメンバー情報は <a href="https://handbook.gitlab.com/handbook/engineering/ai/workflow-catalog/#team-members" rel="external noopener">原文 (英語)</a> を参照してください。</p>


## 連絡方法

文脈に応じて、Workflow Catalog グループに連絡する最も適切な方法は次のとおりです:

* Slack チャンネル: `#g_workflow_catalog`
* GitLab グループ `@gitlab-org/ai-powered/workflow-catalog/engineering`（エンジニアのみ）

## 取り組み中の作業

現在、私たちは Workflow Catalog の最初のイテレーション（MVP）に取り組んでいます。
この作業は [MVP epic](https://gitlab.com/groups/gitlab-org/-/epics/17989) で追跡できます。

## 私たちの働き方

私たちはまだ始まったばかりで、新しいチームに馴染みながら働き方を定義していきます。
スタートのためのリンクをいくつか紹介します:

* [Root Epic](https://gitlab.com/groups/gitlab-org/-/epics/11111): すべての作業をグループ化しロードマップを設定するため
* [Issue ボード](https://gitlab.com/groups/gitlab-org/-/boards/3871464): すべての進行中の Issue
* [チームタスク](https://gitlab.com/gitlab-org/ai-powered/workflow-catalog/team-tasks/-/issues): 製品関連以外のすべてのチーム Issue
* [非同期アップデート](https://gitlab.com/gitlab-org/ai-powered/workflow-catalog/team-tasks/-/issues/?label_name%5B%5D=async%20update)
* [チーム Wiki](https://gitlab.com/gitlab-org/ai-powered/workflow-catalog/team-tasks/-/wikis/home): 製品の意思決定や有用な情報

### DRI

大きなプロジェクトに取り組むとき、それを Epic と Issue に分割します。
各 Epic の Directly Responsible Individual (DRI) は、そのドメインに対する単一のアカウンタビリティポイントとして機能します。
DRI が必ずしもすべての作業を行うわけではありませんが、自分の Epic の成功を所有します。

DRI の責任:

1. Epic のステータス、スコープ、技術的決定について質問に答える
2. 正確な Epic と Issue の説明を維持する
3. デリバリーの健全性ステータスを監視・伝達する
4. Issue リストをキュレーションする。必要なものを含め、不要なものを削除する
5. デリバリー日と Issue ステータスを最新に保つ
6. 作業が複数の Epic にまたがる場合、他の DRI と調整する

### ヘルプリクエストの処理方法

カタログで顧客が問題に遭遇した場合、私たちのサポートチームは [ヘルプリクエスト](https://gitlab.com/gitlab-com/request-for-help) を起こします。
ヘルプリクエストを起こしたい場合は、その方法とタイミングについて [この readme](https://gitlab.com/gitlab-com/request-for-help#please-read-the-following-before-submiting-a-request-for-help-to-the-gitlab-development-team-sections) をお読みください。

チーム全体の注意を散漫にせずにヘルプリクエストをタイムリーに処理するため、各マイルストーンでゴールキーパーを指名します。
ゴールキーパーは、入ってくるリクエスト、質問、Issue がトリアージされ、適切な人またはチームに振り向けられることを保証する責任を持ちます。

各マイルストーンで新しいゴールキーパーをアサインし、ゴールキーピング Issue をオープンします。

詳細は [Issue テンプレート](https://gitlab.com/gitlab-org/ai-powered/workflow-catalog/team-tasks/-/blob/main/.gitlab/issue_templates/goalkeeper.md) で確認できます。

### コミュニケーション

Workflow Catalog チームは以下のガイドラインに基づいてコミュニケーションを行います:

* 同期ミーティングよりも非同期コミュニケーションを常に好みます。
* 非同期で非効率な場合は [同期コール](/handbook/communication/#video-calls) のアレンジをためらいません。ただし、必ず録画してチームメンバーと共有します。
* デフォルトで公開の場でコミュニケーションします。
* 仕事関連の Slack メッセージは、プライベートメッセージよりもパブリックチャンネル（`#g_workflow_catalog`）を好みます。

### フロントエンドとバックエンドのコラボレーション

開発速度とコード品質を確保するため、フロントエンドとバックエンドのエンジニア間で高度なコラボレーションを促進することを目指します。

* **スキーマファースト開発**: 実装が始まる前に、フロントエンドとバックエンドのエンジニアは、UI 要件、ユーザーエクスペリエンスのニーズ、パフォーマンスの考慮事項に基づいて GraphQL API スキーマを設計するために協働します。
* **並行開発プロセス**: スキーマが合意されたら、フロントエンドは合意されたスキーマに合うモックデータ、モックエンドポイント、API スタブを使って進められます。バックエンドはデータモデル、ビジネスロジック、実際の API スキーマの実装に集中できます。
* **整合性の維持**: 私たちは優れたコミュニケーションを大切にします。要件やスキーマを変更する必要があるときは、関連する GitLab Issue または [`#g_workflow_catalog`](https://gitlab.enterprise.slack.com/archives/C08T5J1KXKQ) を通じて早期にコミュニケーションし、フロントエンドまたはバックエンドのカウンターパートがすべての変更について情報を得て、後期のブロッカーを避けるためのフィードバックを早期に提供できるようにします。

### AI ステージのコラボレーション

Workflow Catalog は、基盤バックエンドサービスとして [Workflow Service](https://gitlab.com/gitlab-org/modelops/applied-ml/code-suggestions/ai-assist/-/tree/main/duo_workflow_service?ref_type=heads) に依存しています。
ほとんどの Workflow Catalog 機能では、Workflow Service 内で新しい機能を開発する必要があります。
そのため、私たちのエンジニアは [Agent Foundations チーム](../agent-foundations/_index.md) と連携して、そのコードベースに直接貢献する必要があります。

**コラボレーション要件:**

* すべての Workflow Service への貢献は、Agent Foundations チームと密接なパートナーシップで開発される必要があります
* 私たちの実装は彼らのサービスアーキテクチャとビジョンに沿っている必要があります
* 私たちは Workflow Service の幅広い目標をサポートし、彼らの技術基準に従うことをコミットします

**コラボレーションプロセス:**

* 計画フェーズで、関連する Agent Foundations の連絡先（以下に記載）に連絡を取ります
* 彼らの [`#g_duo-agent-platform`](https://gitlab.enterprise.slack.com/archives/C07035GQ0TB) チャンネルに参加します
* デフォルトで [非同期コミュニケーション設定](#communication) に従いますが、必要に応じて同期ミーティングをスケジュールし、主要な成果が GitLab Issue に文書化されることを確認します

#### 主な Agent Foundations の連絡先

| チームメンバー | 専門分野 |
| ---      | ---     |
| [Mikołaj Wawrzyniak](https://gitlab.com/mikolaj_wawrzyniak) | Workflow Service アーキテクチャ |
| [Frédéric Caplette](https://gitlab.com/f_caplette) | クライアントサイド実装 |
| [Dylan Griffith](https://gitlab.com/DylanGriffith) | Workflow Executor アーキテクチャ: リモート実行環境とランナー実装 |
| [Jessie Young](https://gitlab.com/jessieay) | 認可と認証 |
| [Shekhar Patnaik](https://gitlab.com/shekharpatnaik)  / [Igor Drozdov](https://gitlab.com/igor.drozdov) | Duo Chat エージェント統合 |
| [Sebastian Rehm](https://gitlab.com/bastirehm) | エンジニアリングマネージャー、上記いずれかのバックアップ連絡先 |

### ~Deliverable ラベル

`~Deliverable` ラベルは、チームが特定のマイルストーン内で提供することをコミットした Issue を識別するために使用されます。
このラベルは複数の目的を果たします:

* **コミットメントシグナル**: ステークホルダーや顧客に、私たちがマイルストーンでこの作業を完了させる意図があることを伝えます
* **優先順位付け**: チームメンバーが最初に取り組むべき Issue を識別するのに役立ちます
* **フォーカス**: イテレーションでどの作業が必須でどれが nice-to-have かを明確にします

#### 誰がいつ適用するか

エンジニアリングマネージャーは、イテレーション開始前の計画プロセス中に `~Deliverable` ラベルを適用します。
この決定は、プロダクトマネージャーと協働して以下に基づいて行われます:

* イテレーションのチームキャパシティ
* Issue の見積もりと複雑さ
* 戦略的優先度と顧客コミットメント

#### 優先順位付け

`~Deliverable` ラベル付きの Issue は、イテレーションの他の作業よりも優先されます。
チームメンバーは:

1. まず、現在のイテレーションでアサインされた `~Deliverable` Issue に取り組みます
2. すべての `~Deliverable` Issue が完了またはブロックされた場合、イテレーションの他の Issue を取り上げます
3. 優先度が不明な場合、または `~Deliverable` Issue を非優先化する必要がある場合は、エンジニアリングマネージャーに相談します

**イテレーション中:**

* `~Deliverable` Issue がブロックされた、または完了できない場合、`#g_workflow_catalog` または関連する Issue で早期にコミュニケーションします
* エンジニアリングマネージャーは、変化する優先度やキャパシティに基づいて、イテレーション中に `~Deliverable` ラベルを調整することがあります

### 私たちの技術スタック

* GraphQL [バックエンド](https://docs.gitlab.com/development/api_graphql_styleguide/) と [フロントエンド](https://docs.gitlab.com/development/fe_guide/graphql/)。新しいスキーマアイテムはすべて、必要なときに破壊的変更を行えるよう [experimental としてマーク](https://docs.gitlab.com/development/api_graphql_styleguide/#mark-schema-items-as-experiments) する必要があります。
* ポーリングではなく GraphQL [サブスクリプション](https://docs.gitlab.com/development/fe_guide/graphql/#subscriptions)。
* [AI Catalog バックエンドアーキテクチャ](../../../engineering/architecture/design-documents/ai_catalog/_index.md) 設計ドキュメント（2026年2月作成）をお読みください。

## チームミーティング

### Workflow Catalog: グループミーティング

* **時間**: 毎週火曜、05:30 UTC と 15:00 UTC を週ごとに交互に切り替え。
* **目的**: このミーティングは、現在の Issue やブロッカーを取り上げる一般的な同期ミーティングとして機能します。
* **アジェンダ**: [Google Doc（内部のみ）](https://docs.google.com/document/d/19zrzqN37ZVwwEJ9iYhy4QBsUzVN0Hd1j1yn8J0v4dqE)
* **録画**: [Google Drive（内部のみ）](https://drive.google.com/drive/folders/1I9s96jg9knqOwDLabhn9100H-MsvG2ne)
