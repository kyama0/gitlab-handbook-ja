---
title: "Verify:Runner Core"
description: "Runner Core チームページ。"
upstream_path: /handbook/engineering/devops/runner/runner-core/
upstream_sha: 1065c86ab1ba75adefbb07560d726608885e6d4e
translated_at: "2026-04-28T13:32:34Z"
translator: claude
stale: false
---

## プロダクト戦略とロードマップ

Runner プロダクトカテゴリのプロダクト戦略とロードマップは、以下の方向性ページで説明されています。

- [Runner Core](https://about.gitlab.com/direction/verify/runner_core/)

## チームメンバー

以下の方々が Verify:Runner Core グループの正規メンバーです。


<p class="my-3 text-sm text-gray-600 italic">チームメンバー情報は <a href="https://handbook.gitlab.com/handbook/engineering/devops/runner/runner-core/#team-members" rel="external noopener">原文 (英語)</a> を参照してください。</p>


## 安定したカウンターパート


<p class="my-3 text-sm text-gray-600 italic">チームメンバー情報は <a href="https://handbook.gitlab.com/handbook/engineering/devops/runner/runner-core/#team-members" rel="external noopener">原文 (英語)</a> を参照してください。</p>


## 開発プロセス

### 計画と追跡

現在のマイルストーンで進行中またはスケジュールされている Issue は [マイルストーンボード](https://gitlab.com/groups/gitlab-org/-/boards/9726167) で追跡できます。

このボードにはチームのワークフローを追跡するために必要なすべてのカラムが含まれており、以下が表示されます。

- 現在のマイルストーンのすべての Issue
- GitLab のネイティブ Issue ステータス（"Ready for Development"・"In dev"・"In review"・"Closed" など）ごとに整理された Issue

チームメンバーがマイルストーンボード上の Issue を自己割り当てしたら、現在の作業状態を反映するために GitLab のネイティブ Issue ステータスに従って更新する必要があります。

#### 次のマイルストーンの作業

次のリリースに計画された Issue は以下で確認できます。

- [次のマイルストーン](https://gitlab.com/groups/gitlab-org/-/issues?sort=updated_desc&state=opened&milestone_title=Upcoming&label_name%5B%5D=group%3A%3Arunner%20core&first_page_size=50)
- [次の 1〜3 リリース](https://gitlab.com/groups/gitlab-org/-/issues?sort=updated_desc&state=opened&milestone_title=Next%201-3%20releases&label_name%5B%5D=group%3A%3Arunner%20core&first_page_size=50) - まだスケジュールされていない関心のある Issue用

### 管理している機能

Runner Core は GitLab Runner の開発と前進に加えて、他のフィーチャーカテゴリも管理しています。

以下のカテゴリは**メンテナンスモード**です。

- Auto DevOps
- Deployment Management
- Environment Management
- Infrastructure as Code

これはどういう意味でしょうか？通常は以下の基準のうち少なくとも 1 つを満たす Issue のみを優先することを意味します。

- すべてのセキュリティ脆弱性
- S1 バグのみ
- InfraDev Issue
- エラーバジェット関連の Issue
- 戦略的顧客に対するサポートエスカレーション

### サポートリクエストの処理

すぐに解決できない質問については、Slack でのトリアージではなく Request for Help プロセスを通じて受信リクエストをルーティングします。これにより、質問が Slack で失われることなく、subject-matter エキスパートをより簡単に呼び込むことができます。

Slack ワークフローがこれを促進します。`#g_runner_core` または `#runner_help` でメッセージに :RFH: でリアクションすると、リクエスターが RFH Issue を作成するよう促されます。

ローテーション中のサポート & セキュリティ対応者は、毎日新しい RFH Issue を確認し、重大度に基づいて目標応答時間を満たすことを確認する責任があります。

#### RFH と Slack の使い分け

- **Slack を直接使用する** 場合: 簡単な説明、ドキュメントへのポインター、または数分で答えられる質問。
- **RFH を使用する** 場合: 質問が調査を必要とする場合、特定の顧客環境のデバッグが含まれる場合、複数のチームメンバーの意見が必要な場合、または将来の参照のために文書化することが有益な場合。

### 複雑な作業のための スパイク Issue

タスクが大きすぎる場合、不明な点が多すぎる場合、または概念実証（POC）が必要な場合は、より小さな調査タスクまたは POC Issue に分解する必要があります。
これらのタスクはスコープを明確化し、リスクを軽減し、実装を進めるために必要なステップを特定するのに役立ちます。

#### 調査 Issue の作成

- **目的:** 必要な作業を調査・研究・文書化または分解します。
  調査している中核的な質問または問題を明確に定義します。
- **ラベル:** Issue に ~spike ラベルを割り当てます。
- **ブロッキング関係:**
  - Issue 調査の場合: 調査が元の Issue をブロックするものとしてマークします。
  - Epic 調査の場合: 調査 Issue を epic に追加します。

#### 調査のクローズ

- 主要なステークホルダーと調査結果と次のステップについて合意します。同期ミーティングを使用して共同で意思決定することを検討します。
- フィードバックに応じて、さらなる時間を割り当てるか、手元の情報に基づいて機能するものに落ち着くことを決定できます。
- **Issue 調査の場合:** 調査 Issue に調査結果をまとめます。成果はブロックされている Issue の実装に情報を与えます。
  ブロックされた Issue を更新して、明確な方向性と受け入れ基準を含めます。
- **Epic 調査の場合:** Epic を実行可能な Issue に分解・リファインします。成果には以下が含まれることがあります。
  - **アーキテクチャ計画:** 高レベルの技術的方向性、品質目標（パフォーマンス・セキュリティなど）、およびサポートするアプローチ。
  - **イテレーション計画:** 明確にスコープされ、リファインされた Issue への作業の分解。
  - 計画を epic の説明に追加し、調査 Issue をクローズします。
