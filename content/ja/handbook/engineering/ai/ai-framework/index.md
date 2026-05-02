---
title: AI Framework グループ
description: "AI Framework グループは、AI Abstraction Layer と GitLab AI 機能の開発を通じて、GitLab の他のプロダクトグループをどのように支援するかに注力しています。"
upstream_path: /handbook/engineering/ai/ai-framework/
upstream_sha: b4eeb07f0d5f46e2fc5f8572be1a2547261aed89
translated_at: "2026-04-26T03:00:00Z"
translator: claude
stale: false
---

## ビジョン

AI Framework グループは、AI Abstraction Layer と GitLab AI 機能の開発を通じて、GitLab の他のプロダクトグループをどのように支援するかに注力しています。

### 👌 チーム OKR

チームの Objectives and Key Results（OKR）に興味がある方は、[GitLab](https://gitlab.com/gitlab-com/gitlab-OKRs/-/issues/?sort=title_asc&state=opened&label_name%5B%5D=group%3A%3Aai%20framework&first_page_size=20) で確認できます。

### 🚀 チームメンバー

以下のメンバーは AI Framework Group の正規メンバーです。


<p class="my-3 text-sm text-gray-600 italic">チームメンバー情報は <a href="https://handbook.gitlab.com/handbook/engineering/ai/ai-framework/#-team-members" rel="external noopener">原文 (英語)</a> を参照してください。</p>


### Stable Counterpart

以下の他職能チームのメンバーが私たちの stable counterpart です。

| **氏名**                                                 | **役割** |
| ---------------------------------------------------------| ------------------------------------------------------------------------------- |
| [Ashraf Khamis](/handbook/company/team#ashrafkhamis)     | [Senior Technical Writer](/job-description-library/product/technical-writer/) |
| [Amanda Rueda](/handbook/company/team#amandarueda)       | [Senior Product Manager](/job-description-library/product/product-manager/) MCP Server |

## 共有責任

### ☕ チームの責任

**チームの責任には次のものが含まれます。**

* AI Abstraction Layer と AI Gateway を活用し、GitLab 全体への AI 機能の統合を促進する。
* 包括的なグローバル可観測性、モニタリング、ドキュメント、レイテンシ改善が整備されていることを保証する。
* AI チャットシステムフレームワークに対する重要なサポートを提供する。
* 必要に応じて新しい AI プロバイダーのサポートを組み込む。
* AI Gateway のプロダクションサポートと準備状態の確保を支援する。
* プロンプトエンジニアリング、応答評価、ファインチューニング、評価などを含む LLM 推論サポート。

### ☎️ 連絡方法

文脈に応じて、IDE グループへの最適な連絡方法は以下のとおりです。

* Slack チャンネル: `#g_ai_framework`
* Slack グループ: `@ai-framework`（チーム全体）および `@ai-framework-engs`（エンジニアのみ）

## 📦 チームのプロセス

### 📆 定期的なチームミーティング

**❗️重要**: すべてのミーティングで、[AI Framework チームのミーティングドキュメント](https://docs.google.com/document/d/1rSJNmRZJ0q8hd9S6W_AXlCMvtNTC6cfWr6VU0e2fJCQ/edit#heading=h.3xbjtjtrp0e9) を使用し、議事メモと、最近行われた他の同期ミーティングのアジェンダ／メモ／録画への参照を記入してください。これにより、ミーティングのメモを後から探しやすくなります。

#### チームミーティング

1. **週次リファインメントアサインメントミーティング**
   * **いつ:** 毎週月曜日、14:00 GMT+1 と 19:00 GMT+1 を交互に開催
   * **内容:** 以前の Work Assignment Meeting に代わるミーティングで、Issue のリファインメントに焦点を当てます。エンジニアリングマネージャーとプロダクトマネージャーがすべての Issue が適切にリファインされていることを確認します。

### 共有カレンダー

* AI Framework PTO（カレンダー ID: `c_eca9440729dba2cbd88b3117fa70839836fb5811cb072132b94c52f912a31bf5@group.calendar.google.com`）
* AI-Powered Stage Calendar（カレンダー ID: `c_n5pdr2i2i5bjhs8aopahcjtn84@group.calendar.google.com`）

AI Framework のチームメンバーは、[PTO イベントを同期](https://theloop.gitlab.com/site/4455aa7f-24d9-41f2-b940-467b54962e4d/page/0fa19bf4-fd6a-41b9-9316-c2dcf3add854) して、AI Framework PTO カレンダーに反映してください。

### 🖖 週次 EM アップデート

毎週、チームの EM はチームが把握しておくべき最重要項目を捉えた週次ステータスアップデート Issue を提供しています。これらは [こちら](https://gitlab.com/gitlab-org/ai-powered/ai-weekly/-/issues/?sort=created_date&state=all&label_name%5B%5D=AI%20Powered%20Weekly%20Updates&first_page_size=20) で確認できます。

### 📚 AI Framework ボード概要

私たちのワークフロープロセスでは、毎週ボードウォークを行い、**Deliverable** ラベルの付いた Issue をレビューします。[ボード](https://gitlab.com/groups/gitlab-org/-/boards/7346017?label_name[]=group%3A%3Aai%20framework) は次のように整理しています。

#### 担当者は何に取り組むべきかをどう知るか?

Issue は、次のすべてが揃った時点で担当者に引き取られる準備ができたと見なされます。

* **Deliverable** ラベル
* 現在のマイルストーン
* **workflow::ready for development** または **workflow::refinement** のいずれかのラベル

#### ボードのリスト

1. **Open** 📝: 識別されたすべての Issue を含むリストです。マイルストーンまたは「workflow::ready for development」ラベルが欠けている場合、エンジニアリングマネージャーがアサインされます。
2. **workflow::design** ✏️: このフェーズでは、Issue がデザインリファインメントを受けます。デザイン上の考慮事項が組み込まれた後、「ready for development」ラベルが適用されます。
3. **workflow::refinement** 🧪: このステージにある Issue は、提案された解決策がすべての要件を満たすことを確認するためのエンジニアリングリファインメント中です。リファインメントが完了すると、「ready for development」ラベルが適用されます。
4. **workflow::ready for development** 🎯: 優先度が付けられ、特定のマイルストーンにアサインされた Issue はこのリストに移動され、「ready for development」ラベルが適用されます。
5. **workflow::in dev** 👩‍💻: 開発者が Issue の作業を開始したら、このリストに移動して「in dev」ラベルを適用する必要があります。
6. **workflow::in review** 👀: 開発が完了したら、Issue はこのリストに移動し、「in review」ラベルが適用されます。
7. **workflow::verification** ✅: コードと UX レビューが成功した後、Issue はこのリストに移動して「verification」ラベルが適用されるべきです。
8. **workflow::complete** 🎉: Issue が検証され、正しく動作することが確認されたら、このリストに移動して「complete」ラベルを適用し、Issue をクローズすべきです。

### 🔄 プロセス

#### ✍️ バックログリファインメント

毎週、エンジニアリングチームは今後の Issue をレビューするバックログリファインメントプロセスを完了させます。この取り組みの目的は、すべての Issue にウェイトを付けて、見積もりされたチームのキャパシティと Issue ウェイトを使って各マイルストーンをより正確に計画できるようにすることです。

このバックログリファインメントプロセスに加えて、チームのエンジニアは、シンプルでバックログリファインメントを必要としない Issue にウェイトを付けることもできます。

このプロセスは 3 つのステップで進みます。

##### ステップ 1: リファインメント対象の Issue を特定する

エンジニアリングマネージャーは毎週リファインする Issue を選びます。合計で 5 件を目標としています。
良い候補だと思う Issue があれば、その Issue 上で言及してください。

コンテキストスイッチを抑えるため、リファインメントはテーマを揃えるよう努めています。候補を探すのに適した場所:

* [Infradev Issue](https://gitlab.com/groups/gitlab-org/-/work_items?sort=created_date&state=opened&label_name%5B%5D=group%3A%3Aai%20framework&label_name%5B%5D=infradev&first_page_size=100)
* [次マイルストーンに予定されているがウェイトが付いていない Issue](https://gitlab.com/groups/gitlab-org/-/work_items?sort=created_date&state=opened&label_name%5B%5D=group%3A%3Aai%20framework&weight=None&milestone_title=Upcoming&first_page_size=100)
* [セキュリティ Issue](https://gitlab.com/groups/gitlab-org/-/issues?scope=all&state=opened&label_name[]=group%3A%3Aimport%20and%20integrate&label_name[]=security&weight=None)
* [Missed-SLO](https://gitlab.com/groups/gitlab-org/-/work_items?sort=created_date&state=opened&label_name%5B%5D=group%3A%3Aai%20framework&label_name%5B%5D=SLO%3A%3AMissed&first_page_size=100)
* [Approaching-SLO](https://gitlab.com/groups/gitlab-org/-/work_items?sort=created_date&state=opened&label_name%5B%5D=group%3A%3Aai%20framework&label_name%5B%5D=SLO%3A%3ANear%20Miss&first_page_size=100)
* バグ
  * [Rails](https://gitlab.com/groups/gitlab-org/-/work_items?sort=created_date&state=opened&label_name%5B%5D=group%3A%3Aai%20framework&label_name%5B%5D=type%3A%3Abug&weight=None&first_page_size=20)
  * [AIGW/DWS](https://gitlab.com/gitlab-org/modelops/applied-ml/code-suggestions/ai-assist/-/work_items?sort=created_date&state=opened&label_name%5B%5D=group%3A%3Aai%20framework&label_name%5B%5D=type%3A%3Abug&weight=None&first_page_size=20)
  * [CEF](https://gitlab.com/groups/gitlab-org/modelops/ai-model-validation-and-research/ai-evaluation/-/work_items?sort=created_date&state=opened&label_name%5B%5D=group%3A%3Aai%20framework&label_name%5B%5D=type%3A%3Abug&weight=None&first_page_size=20)
* ウェイトのない Issue
  * [Rails](https://gitlab.com/groups/gitlab-org/-/work_items?sort=created_date&state=opened&label_name%5B%5D=group%3A%3Aai%20framework&weight=None&first_page_size=100)
  * [AIGW/DWS](https://gitlab.com/gitlab-org/modelops/applied-ml/code-suggestions/ai-assist/-/work_items?sort=created_date&state=opened&label_name%5B%5D=group%3A%3Aai%20framework&weight=None&first_page_size=100)
  * [CEF](https://gitlab.com/groups/gitlab-org/modelops/ai-model-validation-and-research/ai-evaluation/-/work_items?sort=created_date&state=opened&label_name%5B%5D=group%3A%3Aai%20framework&weight=None&first_page_size=100)

選定後、エンジニアリングマネージャーは `ai-framework::ready for next refinement` ラベルを適用し、[Refinement Bot](https://gitlab.com/gitlab-org/ai-powered/ai-framework/refinement-bot) を使用して、すべての候補をまとめたリファインメント Issue を生成します。

##### ステップ 2: Issue のリファインメント

1 週間を通して、チームの各エンジニアはバックログリファインメント用に選ばれた Issue リストを確認します。[現在のバックログリファインメント Issue](https://gitlab.com/groups/gitlab-org/-/work_items?sort=created_date&state=opened&label_name%5B%5D=ai-framework%3A%3Aready%20for%20refinement&first_page_size=100)。

各 Issue について、各チームメンバーは Issue をレビューし、以下の情報を提供します。

* 見積もりウェイト。
* Issue を別の Issue やマージリクエストにどう分割するか。

注意点:

* 議論は元の Issue 上で行います。
* このプロセス中に、より多くの情報が集まるにつれて Issue の説明とラベルを更新する必要があります。
* 効率のため、すでに得られているフィードバックに応じて、リファインメントをスキップしても構いません。ただし、Issue が定義済みの「準備完了」基準を満たしている場合に限ります。
* 修正が明確で簡単な場合は、その Issue を自分にアサインし、ウェイト 1 を割り当てて修正をプッシュできます。
* 1 つの Issue が複数のインポーターに影響する場合は、Epic を作成するか、複数のリンクされた Issue や、各インポーターごとの MR を検討します。

定義済みの「準備完了」基準を満たしている Issue は、開発に向けてスケジュールされる可能性が高くなります。

### 📝 Issue ガイドライン

これらのガイドラインは、私たちのグループ内で計画とスケジューリングに使用するすべての Issue に適用されます。エンジニアは必要に応じて具体的な実装 Issue を定義できますが、Issue 全体の目標は次のとおりです。

* 成果物となる結果を表す意味のある **タイトル** を付けます。
  * ✅ `Add the new GitLab Duo chat package as a Vue2 extension`
  * ✅ `Chat: move away from using OpenAI embeddings`
  * ❌ `Make Chat better`
* Issue の目的を明確に説明する意味のある説明を提供し、必要に応じて技術的な詳細を加えます。
* Issue の一部として小さなタスクを作成する重要な実装ステップやその他有用な方法がある場合は、Issue の説明にチェックリストとして含めてください。
* Issue には Deliverable ラベル、マイルストーン、ワークフローラベルが付いている必要があります。
* デザインとフロントエンドエンジニアリングは 1 つの Issue を共用します。同じ Issue が workflow::design から workflow::refinement、workflow::ready for development へと移動します。これにより、顧客向けの Issue について単一の真実の情報源を確保できます。デザイン Issue が大きすぎて実装できない場合は、Epic に昇格させることがあります。

より複雑な機能のために、特定のエンジニアリング駆動の実装 Issue を作成することは問題ありません。これらは **Child Issue** と呼ばれ、常に親 Issue にリンクし戻されている必要があります。1 つの Issue が多数の child Issue を生むようなら、Epic の作成を検討してください。

### 🏋 ウェイト付けと見積もりプロセス

#### ウェイトガイドライン

Issue はフィボナッチ数列（0, 1, 2, 3, 5, 8, 13+）でウェイト付けされます。

* **ウェイト 0:** 最小の Issue（タイポ、軽微なフォーマット、テストなしの単純なコード変更）
* **ウェイト 1:** 不確実性が最小限のシンプルな Issue（新規コントリビューターに最適）
* **ウェイト 2:** 複数のコード／テスト更新を必要とするシンプルな Issue
* **ウェイト 3:** ある程度の複雑さはあるが、扱える範囲のより大きな Issue
* **ウェイト 5:** 通常は分割すべき。リスクの低い大きな手動更新には許容
* **ウェイト 8/13+:** 分割が必要であることを示すプレースホルダーのウェイト。即時実装には大きすぎるか不確実

#### ウェイト更新プロセス

次マイルストーンにアサインされたすべての Issue は、エンジニアリングマネージャーが Deliverable ラベルを付ける前にウェイト付けされる必要があります。エンジニアリングマネージャーはウェイトが割り当てられているかをチェックし、ウェイトが 5 以上の場合は Issue を小さく分割する作業を行います。

エンジニアリングマネージャーとプロダクトマネージャーは、週次チームミーティング中に、次マイルストーンにアサインされた Issue のウェイト付けを依頼する責任があります。エンジニアにはミーティング前に Issue 説明を読んでもらい、ウェイト付けの準備をして、必要なら質問できるようにしてもらいます。複数のミーティングに分割しても構いません。

## 📝 AI 機能評価ガイドライン - 5 歳児にもわかる評価を

[Evaluate like I am 5](https://gitlab.com/gitlab-org/ai-powered/eli5) プロジェクトを参照し、ドキュメントを [こちら](https://gitlab.com/gitlab-org/ai-powered/eli5/-/tree/main/doc?ref_type=heads) で読んでください。

## 👏 コミュニケーション

AI Framework チームは次のガイドラインに基づいてコミュニケーションを取ります。

1. 同期ミーティングよりも常に非同期コミュニケーションを優先する。
1. 非同期が非効率的になっている場合は、[同期コール](#-ad-hoc-sync-calls) のセットアップをためらわず、ただし常に録画してチームメンバーと共有する。
1. デフォルトでオープンにコミュニケーションを取る。
1. Slack 上の業務関連コミュニケーションはすべて `#g_ai_framework` チャンネルで行う。

### ⏲ 休暇

チームメンバーは、エンジニアリングマネージャーがキャパシティプランニング中に正しい休暇日数を使えるよう、[計画された休暇](/handbook/people-group/time-off-and-absence/time-off-types/) を「Workday」Slack アプリに追加してください。

### 🤙 アドホック同期コール

私たちはデフォルトで非同期コミュニケーションを利用します。同期での議論が有益な場合もあるため、必要に応じて関係するチームメンバーと同期コールをスケジュールすることを推奨します。

## 🔗 その他の有用なリンク

### 🌍 AIGW のリージョンデプロイ

* 🚀 [Staging](https://gitlab.com/gitlab-org/modelops/applied-ml/code-suggestions/ai-assist/-/blob/main/.runway/runway-staging.yml?ref_type=heads#L12)
* 🌐 [Production](https://gitlab.com/gitlab-org/modelops/applied-ml/code-suggestions/ai-assist/-/blob/main/.runway/runway.yml?ref_type=heads#L12)

### 📝 ダッシュボード（社内のみ）

* [プロバイダー別リクエスト数](https://dashboards.gitlab.net/goto/Ta-BL_-NR?orgId=1)
* [エラーバジェット](https://dashboards.gitlab.net/d/product-ai-powered_error_budget/product-error-budgets-ai-powered?orgId=1)
* [AI Gateway SLI](https://dashboards.gitlab.net/d/ai-gateway-main/ai-gateway-overview?orgId=1)
* [GCP クォータ上限](https://dashboards.gitlab.net/d/ai-gateway-main/ai-gateway-overview?orgId=1&viewPanel=1515902021)
* [LLM Sidekiq の完了数](https://dashboards.gitlab.net/d/sidekiq-main/sidekiq-overview?orgId=1)
* [Duo Chat 質問カテゴリ分類](https://app.periscopedata.com/app/gitlab/1173299/Duo-Chat-Question-Categorization)
* [セキュリティ Issue](https://gitlab.com/groups/gitlab-org/-/issues/?sort=due_date&state=opened&label_name%5B%5D=security&label_name%5B%5D=group%3A%3Aai%20framework&first_page_size=20)
* [信頼性 Issue](https://gitlab.com/gitlab-org/gitlab/-/boards/4227439?not[label_name][]=type%3A%3Afeature&label_name[]=section%3A%3Adev&label_name[]=group%3A%3Aai%20framework)
* [CompletionWorker 経由の Sentry](https://new-sentry.gitlab.net/organizations/gitlab/issues/?query=is%3Aunresolved++CompletionWorker&referrer=issue-list&statsPeriod=14d)
* [Feature Category 経由の Sentry](https://new-sentry.gitlab.net/organizations/gitlab/issues/?query=is%3Aunresolved+feature_category%3Aai_abstraction_layer&referrer=issue-list&statsPeriod=24h)
* [月次レトロ](https://gitlab.com/gl-retrospectives/data-science/ai-powered/ai-framework-retros)
* [Chat QA 評価](https://gitlab.com/gitlab-org/ai-powered/ai-framework/qa-evaluation)
* [Chat REST API エラー比率](https://log.gprd.gitlab.net/app/r/s/lDEwi)
* [モデル別 ITPM](https://dashboards.gitlab.net/goto/-O0w_rsHg?orgId=1)
* [社内ハンドブックページ](https://internal.gitlab.com/handbook/engineering/ai/ai-framework)

### 📹 GitLab Unfiltered プレイリスト

AI Framework グループは、グループおよびそのチームメンバーに関連するすべての動画を [GitLab Unfiltered](https://www.youtube.com/channel/UCMtZ0sc1HHNtGGWZFDRTh5A) YouTube チャンネルの [プレイリスト](https://www.youtube.com/playlist?list=PL05JrBw4t0Kpt0DsmS5WSZbeiMgrBeZXv) にまとめています。
