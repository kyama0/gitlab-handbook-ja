---
title: Tenant Services チーム
description: "Tenant Services チームに関する情報"
upstream_path: /handbook/engineering/infrastructure-platforms/tenant-scale/tenant-services/
upstream_sha: 0e6f01390a34aeb6706ace17d8d3c50e74e82d0d
translated_at: "2026-04-29T05:26:36Z"
translator: claude
stale: false
lastmod: "2025-11-03T15:02:35+01:00"
---

## ビジョン

Tenant Services チームは、Tenant Scale 内の他のチームに SRE サポートを提供することを担当しています。
私たちは GitLab.com における Sidekiq と Redis のサービスオーナーであり、チームの大部分は SRE で構成され、Sidekiq に対するバックエンドエンジニアリングのサポートも行っています。

## チームメンバー


<p class="my-3 text-sm text-gray-600 italic">チームメンバー情報は <a href="https://handbook.gitlab.com/handbook/engineering/infrastructure-platforms/tenant-scale/tenant-services/#team-members" rel="external noopener">原文 (英語)</a> を参照してください。</p>


## 働き方

### プロジェクト管理

#### Issue 追跡

Tenant Services チームは以下のコア原則に従います:

1. **実際に進行中の Issue のみアサインする**。作業中でない Issue はアサインされないままにしておきます。
1. **必須ラベルを適用する**。すべての Issue には以下を含める必要があります:
   - `group::tenant services`
   - `devops::runtime`
1. **必要に応じてサービス固有のラベルを追加する**。Issue が特定のサービス（例: Topology Service）に関連する場合は、`Service::Topology Service` などのラベルを適切に付けてください。

デフォルトでは、チームが所有する Issue は [Tenant Services Team Issue Tracker](https://gitlab.com/gitlab-com/gl-infra/tenant-scale/tenant-services/team/-/issues) に作成し、`group::tenant services` ラベルを適用してください。

チームの Issue トラッカーやその他の `gitlab-com/gl-infra` プロジェクトで追跡される Issue については、GitLab の組み込み Issue ステータス機能を使用してワークフローの状態を追跡します。進行中・準備完了・トリアージが必要な Issue にはすべて、適切なステータスが設定されていることを確認してください。

##### Issue ステータスを使うタイミング

Issue ステータスは、作業アイテムのライフサイクル全体にわたって現在の状態を追跡するために使用します。以下のタイミングで Issue ステータスを更新してください:

- **新規 Issue 作成時**: すべての新規 Issue は適切なステータス（通常は「New」または「Planning breakdown」）で開始する必要があります。
- **作業フェーズの移行時**: 作業が一つのフェーズから別のフェーズへ移行するたびにステータスを更新します（例: 「Ready for development」から「In dev」へ）。
- **ブロッカーや遅延を示すとき**: 作業が進められない場合は「Blocked」ステータスを使用して伝えます。あるいは `/blocked_by #item, group/project#item, url` クイックアクションを使用してください。別のチームの作業によって Issue がブロックされている場合は、そのチームが認識しており、適切なラベルが適用されていることを確認してください。
- **検証が必要なとき**: 調査や検証が必要な場合は適切な検証ステータス（「Problem validation」、「Solution validation」）を使用します。
- **完了を示すとき**: 作業が終了して検証済みになったら「Complete」ステータスを適用します。Issue をクローズするとそれも Complete とマークされます。
- **未完了でクローズする場合**: 作業が適用されない場合は「Won't Do」ステータスを使用します。

#### Issue の説明

すべての Issue には、作業内容の説明、特定された `アクションアイテム` や `完了基準` を含める必要があります。実装の詳細に関する決定が行われ、最初の説明が変更された場合は、説明（および必要に応じて Issue のタイトル）を更新して、その Issue が実装または達成しようとしていることを常に正確に反映するようにしてください。

#### Epic 追跡

チームメンバーが DRI であるすべてのチーム所有プロジェクト作業には、単一の [チーム epic](https://gitlab.com/groups/gitlab-com/gl-infra/tenant-scale/tenant-services/-/epics/1) が使用されます。
Epic は [Tenant Scale プロジェクト管理ガイドライン](/handbook/engineering/infrastructure-platforms/tenant-scale/operating-system/project-management/) に従います。

### 働き方

#### チームミーティング

Tenant Services は毎週木曜日に 2 回の 1 時間ミーティングを実施しており、APAC/EMEA と AMER のフレンドリーなタイムゾーンを交互に使用します。このミーティングの目的は:

- デモ
- 技術的な決定、ブロッカーなどをチームとしてレビューしてフィードバックを得る
- チームが知るべき情報の共有
- チームディスカッション（プロセス、ロードマップ/今後の作業、会社のアイテムなど）

#### マネージャーの責任

EM は毎週 Issue ボードや Epic をレビューします:

- Issue に適切なステータスが設定されていることを確認する。
- 進行中・ブロック中・レビュー中の Issue の状態を確認する。
- 取り組める準備の整った refined な Issue があることを確認する。Refined な Issue は重み付けされており、説明に十分なコンテキストがあり、取り組む準備ができていることを示す **Ready for development** ステータスが付いています。
- Issue がロードマップと一致していること、および関連する Epic のステータス更新を確認する。

## サービス

Tenant Services は以下の GitLab アプリケーションサービスをサポートするインフラを担当します:

1. Sidekiq
2. Redis
3. Gitaly

## サポートの依頼

Tenant Services チームの支援が必要な場合は、[Request For Help Tracker](https://gitlab.com/gitlab-com/request-for-help/-/issues/new?issuable_template=SupportRequestTemplate-TenantServices.md) でサポートリクエストを作成してください。
