---
title: "Environment Automation チーム"
upstream_path: /handbook/engineering/infrastructure-platforms/gitlab-dedicated/environment-automation/
upstream_sha: 0e6f01390a34aeb6706ace17d8d3c50e74e82d0d
translated_at: "2026-04-28T00:00:00Z"
translator: claude
stale: false
lastmod: "2026-02-19T13:58:13+00:00"
---

## 概要

Environment Automation は [Dedicated グループ](/handbook/engineering/infrastructure-platforms/gitlab-dedicated/) 内のチームです。私たちのミッションは、GitLab Dedicated ソリューションの自動化された配管を開発・運用することです。

このページで明示的に記載されている違いがある場合を除き、[Dedicated グループ](/handbook/engineering/infrastructure-platforms/gitlab-dedicated/) ページに記載されているものと同じプロセスに従います。

## チームメンバー

<p class="my-3 text-sm text-gray-600 italic">チームメンバー情報は <a href="https://handbook.gitlab.com/handbook/engineering/infrastructure-platforms/gitlab-dedicated/environment-automation/#team-members" rel="external noopener">原文 (英語)</a> を参照してください。</p>

## 私たちとの連携

Environment Automation チームと連携するには：

- GitLab Dedicated チームの Issue トラッカーで [Issue を作成](https://gitlab.com/gitlab-com/gl-infra/gitlab-dedicated/team/-/issues/new) する
- Issue に以下のラベルを付ける：
  - `workflow-infra::Triage`
  - `group::environment automation`
- Issue を作成する際は、誰かを `@`メンションする必要はありません
- 注目を得たい場合は、[Dedicated グループ階層](/handbook/engineering/infrastructure-platforms/gitlab-dedicated/#gitlab-group-hierarchy) で定義されている特定のチームハンドル（例: @gitlab-dedicated/environment-automation）を使用してください
- Slack チャンネル
  - _Environment Automation_ 固有の質問については [#g_dedicated-environment-automation-team](https://gitlab.slack.com/archives/C074L0W77V0) で私たちを見つけられます
    - Slack グループハンドルは `@dedicated-envauto-team` です
  - Dedicated グループ全体では: [#g_dedicated-team](https://gitlab.slack.com/archives/C025LECQY0M)
  - Dedicated グループ内の他のチームには作業ディスカッション用の独自の作業チャンネルがあります：
    - [#g_dedicated-us-pubsec](https://gitlab.slack.com/archives/C03R5837WCV)
    - [#g_dedicated-switchboard-team](https://gitlab.slack.com/archives/C04DG7DR1LG)
- 数時間から数日以内に支援が必要な場合：
  - [Request For Help (RFH)](/handbook/support/workflows/how-to-get-help/#the-request-for-help-landing-page) プロセスに従ってください。特定のテンプレートは[こちら](https://gitlab.com/gitlab-com/request-for-help#infrastucture-section) から探してください。
  - 顧客影響がある場合は、[Dedicated Commercial](/handbook/engineering/infrastructure-platforms/gitlab-dedicated/#urgent-availability-or-security-events) のインシデント管理プロセスに従い、私たちにページしてください。
  - Geo マイグレーションについては、EA と PS が[特定のエンゲージメントモデル](https://gitlab-com.gitlab.io/gl-infra/gitlab-dedicated/team/runbooks/geo_migration_engagement_model/geo_migration_engagement_model.html)を持っており、マイグレーションフェーズに応じて対応します。

### 作業方法

私たちは、[プロジェクト管理セクション](/handbook/engineering/infrastructure-platforms/gitlab-dedicated/#project-management) で説明されているプロジェクト Issue トラッカー内で非同期的に作業することを優先しています。

チームには一連の定期的な同期通話もあります：

1. Environment Automation チームシンク（隔週）：
    1. EMEA/AMER: 火曜日 15:00 UTC（EMEA と US East に適しています）
    1. PST/APAC: 水曜日 00:00 UTC（APAC と US West に適しています）
1. GCP での Dedicated 週次デモ: 水曜日 07:30 UTC
1. [Dedicated グループデモ](/handbook/engineering/infrastructure-platforms/gitlab-dedicated/#meetings-and-scheduled-calls)

### 四半期計画プロセス {#quarterly-planning-process}

{{% details summary="四半期計画プロセス" %}}
四半期計画は**戦略的優先事項**と**チームキャパシティ**のバランスを取るために使用されます。一貫した実行、非同期アライメント、およびステークホルダー全体の可視性を確保します。計画は新しい四半期の 4 週間前に開始し、実行可能な作業項目を確保するためのエピックバックログ精緻化が統合されています。

#### ステップ 1 – 計画 Issue の作成（週 -4）

- **オーナー:** エンジニアリングマネージャー（EM）
- **アクション:**
  - 四半期計画 Issue（[例: Q4 FY26 計画](https://gitlab.com/gitlab-com/gl-infra/gitlab-dedicated/team/-/issues/9938)）を作成する。
  - この Issue を非同期ディスカッション、戦略ドキュメントへのリンク、および最終決定のログに使用する。
  - すべてのステークホルダーと Issue リンクを共有する。
- **成果物:** 計画 Issue を開いてすべてのステークホルダーと共有する。

#### ステップ 2 – 戦略的インプット（週 -4 から -3）

- **オーナー:** PM、カンパニーインターロックプロセス
- **アクション:**
  - PM が [FY26 Dedicated ステージロードマップ計画スプレッドシート](https://docs.google.com/spreadsheets/d/1LLxUPQ5nEaC7J9OcO3TbG1txVOtAQdtqKbkJYa4Jcvk/edit?gid=0#gid=0) を**定期的に更新**する。
  - カンパニーインターロックプロセスがトップティアイニシアチブを提供する（[インターロックトラッカー](https://docs.google.com/spreadsheets/d/10ZMNCQVhRTbELC1WV4Zme5uEOrmOH3WMqYC1sHdJouw/edit?gid=2120796429#gid=2120796429)）。
  - EA EM と PM が**週次火曜日の会話**を開催して以下を議論する：
    1. その日の Issue
    2. チームへの認識のためのフラグ
    3. 四半期計画のインプットと更新
- **成果物:** 計画 Issue に文書化された戦略的優先事項。

#### ステップ 3 – チーム計画（週 -3 から -1）

- **オーナー:** EM とチームメンバー
- **アクション:**
  - EM がプロジェクト、タイムライン見積もり、スタッフニーズで [EA 継続的計画スプレッドシート](https://docs.google.com/spreadsheets/d/10ZMNCQVhRTbELC1WV4Zme5uEOrmOH3WMqYC1sHdJouw/edit?gid=0#gid=0) を更新する。
  - チームメンバーが見積もりをレビューし、リスクにフラグを立て、依存関係を表面化する。
  - EM とチームが**計画 Issue のコメントを使用してキャパシティを測定し、インプットを結びつける**。
- **成果物:** 計画 Issue にリンクされた四半期実行計画のドラフト。

#### ステップ 4 – エピックバックログ精緻化（週 -2 から -1）

- **オーナー:** EM + PM とチームメンバー
- **アクション:**
  - ロードマップ計画スプレッドシートから次の四半期に特定されたエピックを取得する
  - 実行対象の各エピックについて、以下が含まれていることを確認する：
    - **MVC スコープ** が明確に定義されている
    - **ビジネスケース / 根拠** が文書化されている
    - **高レベル設計へのリンク** が含まれている
    - **推定複雑度レベル** がエンジニアリングインプットで評価されている
  - エピックをステータス進行させる: **Triage → Proposal → Ready**
  - エピック精緻化のディスカッションと決定に計画 Issue のコメントを使用する
  - チームメンバーが複雑度見積もりと設計実現可能性について技術的インプットを提供する
  - エピック情報を完成させるために必要に応じて異なるステークホルダーを引き込む
- **成果物:** 即時の四半期実行のためにすべての対象エピックが「Ready」ステータスになった精緻化されたエピックバックログ。

#### ステップ 5 – 最終確認（週 0）

- **オーナー:** EM と PM + ステークホルダー
- **アクション:**
  - 計画 Issue での非同期レビュー。
  - スコープ、キャパシティ配分、コミットメントを確認する。
  - エピックバックログ精緻化の完了と準備状況を確認する。
  - 最終決定、成果物、リンクを含む要約コメントを投稿する。
  - EA EM と PM が**週次火曜日の会話**を使用して未解決の Issue、フラグを確認し、四半期の決定を確認する。
- **成果物:** 精緻化されたエピックバックログを持つ確定した四半期計画；計画 Issue をクローズする。

#### ステップ 6 – 四半期キックオフ（週 1）

- **オーナー:** EM と PM + ステークホルダー
- **アクション:**
  - PM と EM が Dedicated ステージキックオフプレゼンテーションで協力する（例: [FY26Q3 Dedicated キックオフ](https://docs.google.com/presentation/d/1LBtzebORZ57CGZ6nqJzpF642WPm8iyDmIUU5OV_xjPs/edit?slide=id.g3160fa3b0e2_0_3#slide=id.g3160fa3b0e2_0_3)）
  - PM と EM が前四半期の達成事項と次四半期のイニシアチブを記入する
  - PM と EM がキックオフビデオを録画してチームと共有する
  - エンジニアは精緻化された「Ready」ステータスのエピックですぐに作業を開始できる
- **成果物:** チームアライメントのための四半期キックオフプレゼンテーションと録画ビデオ

#### 計画インプットとソース

- **戦略的:** カンパニーインターロックプロセス、PM ロードマップ、顧客コミットメント
- **運用的:** KTLO 作業、オンコールキャパシティ、計画外作業、エンジニアリングバックログ
- **エピックレベル:** 技術設計、複雑度評価、MVC 定義

#### 計画成果物とテンプレート

- [FY26 Dedicated ステージロードマップ計画](https://docs.google.com/spreadsheets/d/1LLxUPQ5nEaC7J9OcO3TbG1txVOtAQdtqKbkJYa4Jcvk/edit?gid=0#gid=0)
- 顧客ロードマッププレゼンテーション
- [カンパニーインターロックトラッカー](https://docs.google.com/spreadsheets/d/10ZMNCQVhRTbELC1WV4Zme5uEOrmOH3WMqYC1sHdJouw/edit?gid=2120796429#gid=2120796429)
- [EA 継続的計画スプレッドシート](https://docs.google.com/spreadsheets/d/10ZMNCQVhRTbELC1WV4Zme5uEOrmOH3WMqYC1sHdJouw/edit?gid=0#gid=0)
- エピック精緻化チェックリスト（MVC、ビジネスケース、設計、複雑度）
- エピックステータス追跡（Triage/Proposal/Ready）

#### 役割と責任

| 役割 | 責任 |
|------|-----------------|
| プロダクトマネージャー | 戦略的ロードマップを維持し、計画スプレッドシートを更新し、エピックビジネスケースを提供する |
| エンジニアリングマネージャー | キャパシティ評価を主導し、EA 継続的計画を更新し、計画 Issue を作成/管理し、エピック精緻化を調整する |
| チームメンバー | 見積もりをレビューし、リスクにフラグを立て、依存関係を表面化し、エピック複雑度インプットを提供し、非同期ディスカッションを行う |
| ステークホルダー | フィードバックを提供し、最終確認中にコミットメントを検証し、必要に応じてエピック精緻化に貢献する |

#### 成功指標

- 計画 Issue が週 0 までにクローズされる
- チームがキャパシティコミットメントを承認する
- 戦略的優先事項が実行キャパシティにマッピングされる
- 依存関係とリスクが明確に特定される
- 完全な精緻化情報を持つすべての対象エピックが「Ready」ステータスになる
- バランスの取れた配分: フィーチャー開発 40-60%、KTLO 20-30%、オンコール 15-25%、エンジニアリング 10-15%

#### リスクとベストプラクティス

- 反応的/計画外の作業に 10-20% のバッファを想定する
- 計画 Issue 内にディスカッションを文書化する
- トレーサビリティのためにスプレッドシートとロードマップをリンクする
- 前四半期の計画外作業をレビューする
- 戦略的作業と運用上の要件をバランスさせる
- エンジニアリングの即時実行を可能にするために四半期開始前にエピック精緻化を完了させる
- エピック複雑度見積もりにエンジニアリングの視点が含まれていることを確認する

#### バックログ精緻化の統合

この四半期計画プロセスには **ステップ 4（週 -2 から -1）** 中のエピックバックログ精緻化が統合されています。この精緻化により、エンジニアが四半期実行フェーズ中にエピックを選択する準備ができたら素早く開始できるようになります。

この精緻化されたエピックのセットは、正確なキャパシティ見積もりで次の四半期の計画に役立ち、エンジニアが発見とスコープ調整の活動に時間を費やすのではなく、四半期が始まったらすぐに生産的な作業をすぐに開始できるようにします。
{{% /details %}}

#### レビュアールーレット

レビュアールーレットは、ランダムにメンテナー + レビュアーを選ぶ GitLab.com プロジェクト向けの内部ツールです。Environment Automation はMRレビューの作業負荷を分散させるためにこれを使用しています。使用するには：

1. [レビュアールーレット](https://gitlab-org.gitlab.io/gitlab-roulette/?currentProject=environment-automation&sortKey=stats.avg30&mode=show&order=-1) ページに移動する。
1. `Spin the wheel` をクリックする。

[完全な MR プロセス](/handbook/engineering/infrastructure-platforms/gitlab-dedicated/#merge-requests) を参照してください。

#### エピックステータス更新

毎週、自動化によって DRI はエピックの進捗更新を求められます；これらは収集され、ビジネスによって集合的にレビューされます。DRI は [エピックが正しく設定されていること](https://gitlab.com/gitlab-com/gl-infra/epic-issue-summaries#child-epics) を確認し、PTO の場合に備えて更新を書くか委任する必要があります。

#### レスポンス例

キャパシティプランニングアラートへの具体的なレスポンス例を示します。

- キャパシティプランニングからメトリクスを削除する - [高度な検索メモリ負荷](https://gitlab.com/gitlab-com/gl-infra/gitlab-dedicated/instrumentor/-/merge_requests/3322)
  は長期トレンドに従わず、有用な予測ではありませんでした。
  実際の限界を超えた場合に*アラート*となるメトリクスとして残っています。
- 飽和メトリクスを完全に削除する - [kube_pool_cpu](https://gitlab.com/gitlab-com/runbooks/-/merge_requests/7412)
  は多くの場合で不正確で、正しく取得するのが困難でした。
  異なる飽和メトリクス（ノードベースの CPU）に置き換える必要がありました。
- 飽和メトリクスを追加する - [Kubernetes PVC](https://gitlab.com/gitlab-com/runbooks/-/merge_requests/7411)
  はまったく監視されておらず、ニアミスインシデントが発生していました
- 飽和メトリクスを修正する - [高度な検索ディスク](https://gitlab.com/gitlab-com/gl-infra/gitlab-dedicated/instrumentor/-/merge_requests/3331)
  は不正確で、より良い promql 式に置き換える必要がありました
