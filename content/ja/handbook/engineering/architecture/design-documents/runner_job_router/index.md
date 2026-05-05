---
title: "GitLab Runner ジョブルーター"
status: proposed
creation-date: "2025-09-19"
authors: [ "@josephburnett", "@ash2k" ]
coach: []
dris: [ "@ash2k" ]
approvers: []
owning-stage: "~devops::verify"
participating-stages: []
toc_hide: true
upstream_path: /handbook/engineering/architecture/design-documents/runner_job_router/
upstream_sha: 4b2a1defc6e0116cecb1f346d7dc1d679e674d3f
translated_at: "2026-04-27T10:00:00Z"
translator: claude
stale: false
---


<div class="my-3 border-l-4 border-blue-500 bg-blue-50 px-4 py-3 rounded-r text-sm text-blue-800">
このページには今後予定されている製品・機能・機能性に関する情報が含まれています。ここに示す情報は参考目的のみです。購入・計画の決定にこの情報を使用しないでください。製品・機能・機能性の開発、リリース、タイミングは変更または延期される可能性があり、GitLab Inc. の独自の判断に委ねられています。
</div>

<div class="overflow-x-auto my-4">
<table class="w-full text-sm border-collapse">
<thead>
<tr class="bg-gray-100 text-left">
<th class="px-3 py-2 border border-gray-300">Status</th>
<th class="px-3 py-2 border border-gray-300">Authors</th>
<th class="px-3 py-2 border border-gray-300">Coach</th>
<th class="px-3 py-2 border border-gray-300">DRIs</th>
<th class="px-3 py-2 border border-gray-300">Owning Stage</th>
<th class="px-3 py-2 border border-gray-300">Created</th>
</tr>
</thead>
<tbody>
<tr>
<td class="px-3 py-2 border border-gray-300"><span class="inline-block rounded px-2 py-0.5 text-xs font-medium bg-gray-100 text-gray-700">proposed</span></td>
<td class="px-3 py-2 border border-gray-300"><a href="https://gitlab.com/josephburnett" class="text-blue-600 hover:underline">@josephburnett</a>, <a href="https://gitlab.com/ash2k" class="text-blue-600 hover:underline">@ash2k</a></td>
<td class="px-3 py-2 border border-gray-300"></td>
<td class="px-3 py-2 border border-gray-300"><a href="https://gitlab.com/ash2k" class="text-blue-600 hover:underline">@ash2k</a></td>
<td class="px-3 py-2 border border-gray-300"><span class="inline-block rounded px-2 py-0.5 text-xs font-medium bg-gray-100 text-gray-700">~devops::verify</span></td>
<td class="px-3 py-2 border border-gray-300">2025-09-19</td>
</tr>
</tbody>
</table>
</div>


## KAS ジョブルーターモジュール設計

*注: 以降、「KAS ジョブルーターモジュール」は単に「KAS」と呼びます。*

## 概要

KAS は GitLab の CI ジョブスケジューリングをランナーポーリングからインテリジェントな KAS 経由のルーティングへと変革します。この進化は3つのフェーズで進みます: スマートプロキシとランナー優先化、分散型オートスケーリング連携、そして KAS がジョブライフサイクルを完全に所有するフルジョブオーケストレーションです。

この設計では、GitLab Runner を KAS に接続するエージェントとして位置づけています。このモジュールは、ジョブ環境へのネットワーク入口のために計画されているリバース gRPC トンネルインフラと整合します。ジョブルーティングは、コスト・パフォーマンス・キャパシティを考慮してどのランナーがジョブを実行するかを最適化することで、トンネル設計を補完します。

## アーキテクチャの進化

### 現在の状態

```text
GitLab Rails ←→ GitLab Runner (数秒ごとの HTTP ポーリング)
```

*注: ポーリングは Workhorse を経由しますが、わかりやすさのためすべてのフェーズの図から省略しています。*

### フェーズ1 ターゲット状態

```text
 Steps Debug Clients/Admission Controllers
                    ↓
GitLab Rails ← KAS Job Router ← GitLab Runner (jobs)
Job API             ↓
and Runner      Redis Coordination
Prority
```

### フェーズ2 ターゲット状態

```text
 Steps Debug Clients/Admission Controllers
                    ↓
GitLab Rails ← KAS Job Router ←→ GitLab Runner (jobs and autoscaling signals)
Job API             ↓
and Runner      Redis Coordination
Priority
and GraphQL
Metrics
```

### フェーズ3 ターゲット状態

```text
 Steps Debug Clients/Admission Controllers
                    ↓
GitLab Rails → KAS Job Router ←→ GitLab Runner (jobs and autoscaling signals)
 (job push)         ↓
                Redis Coordination
```

## ケイパビリティフィンガープリント

ジョブルーター設計の中核は **ケイパビリティフィンガープリント** です — これはジョブとランナーの互換性を決定するすべての要素を一意に識別する安定したハッシュです:

- **タグ**: 正確なタグマッチング要件
- **ランナーの種別**: インスタンス、グループ、またはプロジェクト固有のランナー
- **保護ステータス**: ランナーが保護された参照を扱えるかどうか
- **プロジェクトアクセス**: ランナーがアクセスできるプロジェクト/グループ

同一のフィンガープリントを持つランナーはまったく同じジョブセットを扱うことができ、以下を可能にします:

- **効率的なグループ化**: 同じケイパビリティを持つランナーを一括管理
- **優先度ルーティング**: ケイパビリティグループ内でコスト/パフォーマンス優先度を適用
- **オートスケーリング連携**: KAS インスタンス横断でケイパビリティグループごとの需要を計算
- **重複排除**: 分散システム間でジョブ/ランナーの二重カウントを回避

フィンガープリントは GitLab のランナーチェックエンドポイントと GraphQL API から取得できます。

## ネットワーク入口との統合

KAS は計画されているリバース gRPC トンネル設計と整合します:

- **ジョブ環境アクセス**: トンネルのブループリントにより、デバッグのために実行中のジョブへの HTTP/SSH アクセスが可能になります
- **Step-Runner との統合**: ジョブ環境内の step-runner サービスへの接続計画
- **運用上のメリット**: 外部ネットワーク設定（ドメイン、SSL、入口）が不要になります
- **共有インフラ**: 両機能は KAS の gRPC 接続プーリングとルーティングを活用します

ジョブルーティングの決定では、ジョブをランナーに割り当てる際にネットワークトポロジを考慮し、パフォーマンスと運用アクセスの両方を最適化できます。

## 3フェーズ実装

### フェーズ1: スマートプロキシとランナー優先化

**目標**: ランナーの HTTP ポーリングを双方向 gRPC ストリームによるポーリングに置き換え、スピルオーバーベースのランナー優先化を実装する

#### コア機能

- **双方向 KAS-Runner gRPC ストリーミング**: 長期実行の Runner→KAS リバーストンネル接続が HTTP ポーリングを置き換える
- **スピルオーバーアルゴリズム**: 優先度の高いランナーがケイパビリティグループ内で先に選択される
- **アドミッションコントロール**: gRPC ベースのアクセス制限とリソースクォータ
- **ダイレクトログストリーミング**: ジョブログは KAS を経由せず GitLab に直接ストリーミングされる

#### gRPC プロトコル

ランナーは KAS に対して2種類の RPC を実行します:

- 登録/ハートビート/ステータス更新 RPC。
  ランナーに関するすべての情報を伝達し、特定のケイパビリティとキャパシティを持つランナーが存在することを KAS に通知します
- リバーストンネル接続。
  KAS からランナーへのすべての通信はこれらのトンネルを通じて行われます。
  KAS の RPC: ジョブ割り当て、スピルオーバー制御のための待機応答、オートスケーリングシグナル

すべての Runner→KAS RPC は、個々のランナー追跡のためのランナークレデンシャルと machine_id を使用します。

#### ジョブ取得

- KAS インスタンスがランナー登録 RPC を受信すると、そのインスタンスは Redis 経由でブロードキャストし、今後このランナーを担当することを告知します。
  他のすべての KAS インスタンスはこのランナー ID のポーリングを停止します。
  単一の KAS のみがポーリングするよう Redis ロックが使用されます。
- KAS はランナークレデンシャルを使用して Rails からジョブをポーリングし、ケイパビリティとキャパシティに基づいてランナーにスケジュールします

#### ルーティングアルゴリズム

ルーティングはランナー ID に基づいて行われます。
つまり、ポーリングに使用されたクレデンシャルのランナーがジョブを受け取ります。

- GitLab に保存されたケイパビリティフィンガープリントごとの優先度設定
- KAS は GitLab からの設定ストリーミングを通じて設定を取得します
- 同時実行制限は引き続き個々のランナーの `config.toml` で設定されます
- ランナーは登録 RPC を通じて同時実行の飽和状態を KAS に報告します
- ランナーはキャパシティが上限に達した場合、`ResourceExhausted` ステータスコードでジョブスケジュールリクエストを拒否します。
  これにより連携の競合状態に対処し、KAS が別のランナーにジョブをスケジュールできるようになります。
  通常、KAS はランナーの利用可能なキャパシティを把握しているため、これは発生しないはずです

**スピルオーバーロジック**:

- ランナーをケイパビリティフィンガープリントでグループ化する
- 各グループ内で優先度順に適用する
- ランナーの優先度に基づいてジョブリクエストを GitLab に通過させる
- 優先度の高いランナーがキャパシティに達するまで、低優先度のランナーはプロキシされない

#### アドミッションコントロール

- 複数のコントローラー: インスタンス、グループ、プロジェクトごとに GitLab で設定された複数のアドミッションコントローラーをサポート
- gRPC ストリーミング: コントローラーは KAS へのリバース gRPC トンネル接続を確立します
- 順次処理: ジョブはインスタンス、グループ、プロジェクトの順に関連するコントローラーを通過します。すべてが承認する必要があります
- バッチ処理: コントローラーはバリデーション決定のためにジョブのバッチを受け取ることができます
- 可用性ベース: 決定が必要なジョブは適切に接続されたコントローラーを探します
- タイムアウト処理: コントローラーが利用できないか応答しない場合、ジョブはタイムアウトして失敗します

#### GitLab API の拡張

- ランナーチェックエンドポイントのレスポンスにケイパビリティフィンガープリントを追加
- ケイパビリティフィンガープリントごとの優先度設定を可能にします

#### Redis 状態管理

- ケイパビリティフィンガープリントごとの優先度ベースのランナー追跡
- ランナートークンと machine_id ごとの個別ランナーキャパシティ追跡
- ランナーごとの現在のジョブ数と同時実行制限

### フェーズ2: 分散型オートスケーリング連携

**目標**: ジョブオーケストレーションを引き継ぐことなく、複数の KAS インスタンス間でキューの深さによるオートスケーリング連携を可能にする

#### GitLab API の拡張

- ケイパビリティフィンガープリントで GraphQL ジョブリゾルバーを拡張
- オートスケーリング連携のためにジョブとランナーの互換性要素の安定したハッシュを追加
- ケイパビリティによるランナーの効率的なグループ化を可能にします

#### Redis 連携スキーマ

- ケイパビリティフィンガープリントごとの分散型ランナー追跡
- KAS インスタンス間の重複排除のための Redis セットを使用したジョブ追跡
- TTL 戦略: ランナーは長め（設定変更は頻繁でない）、ジョブは短め（キューは頻繁に変化する）

#### ジョブ取得

フェーズ1と同じです。

#### ルーティングアルゴリズム

フェーズ1と類似していますが、ランナー ID ではなくケイパビリティフィンガープリントに基づいてルーティングが行われます。

#### オートスケーリングアルゴリズム

**ケイパビリティフィンガープリントごとの計算:**

```pseudocode
for each capability_fingerprint:
    total_runners = count_runners(fingerprint)
    total_jobs = count_jobs(fingerprint)

    if total_runners > 0:
        demand_per_runner = total_jobs / total_runners
    else:
        demand_per_runner = 0

    generate_autoscaling_signal(fingerprint, demand_per_runner)
```

#### スケーラビリティの特性

- **書き込み複雑度**: KAS インスタンスあたり O(J×R)
- **読み取り複雑度**: O(F)（F = ユニークなケイパビリティフィンガープリント数）
- **メモリ使用量**: Redis セットによる自動重複排除で O(F×(R+J))

### フェーズ3: フルジョブオーケストレーション

**目標**: KAS が GitLab からすべての実行可能なジョブをプッシュされる形でジョブライフサイクル全体を所有する

#### 新しいジョブ状態

```text
pending → routing → admitted → assigned → running → completed/failed
                 ↘ rejected
```

#### ジョブプッシュプロトコル

- GitLab はすべての実行可能なジョブを gRPC 経由で KAS にプッシュします
- プッシュされたジョブにはケイパビリティフィンガープリントが含まれます
- KAS はジョブ状態の変更を GitLab に報告します
- 双方向のジョブライフサイクル管理

#### 完全なジョブ選択エンジン

GitLab の `Ci::Queue::BuildQueueService` に基づき、以下を実装します:

1. タグマッチング: ジョブとランナーのタグの正確なマッチ
2. ランナー種別フィルタリング: インスタンス/グループ/プロジェクト種別の検証
3. 保護された参照の処理: 保護されたジョブには保護されたランナーが必要
4. プロジェクトアクセス制御: ジョブのプロジェクトに対するランナーの権限を確認
5. リソース検証: メモリ、CPU、Docker の要件
6. 高度な機能: コスト最適化、パフォーマンス履歴、アフィニティルール

#### 分散型ジョブ管理

- KAS インスタンス間のジョブ重複排除
- 受け入れ済みジョブの優先キュー
- ランナー割り当て追跡
- ランナーステータスとキャパシティの監視
- GitLab.com のコスト削減のためのセル内外ジョブルーティング

## まとめ

KAS は GitLab CI をポーリングベースからインテリジェントなジョブルーティングへと3つのフェーズにわたって進化させます: スピルオーバーを伴うスマートプロキシ、分散型オートスケーリング連携、フルジョブオーケストレーション。各フェーズは後方互換性を維持しながら段階的に積み上げられていきます。

## 参考資料

**GitLab の主要 Issue:**

- [GitLab Runner Admissions Controller (MVC) - Issue #378322](https://gitlab.com/gitlab-org/gitlab/-/issues/378322)
- [Runner Priority - Issue #14976](https://gitlab.com/gitlab-org/gitlab/-/issues/14976)
- [Runner Load Balance - Issue #15963](https://gitlab.com/gitlab-org/gitlab/-/issues/15963)

**アーキテクチャブループリント:**

- [Reverse gRPC Tunnel for Workspaces and CI](../reverse-grpc-tunnel-workspaces-and-ci/)
- [Runner Admission Controller Blueprint](../runner_admission_controller/)

**Step-Runner との統合:**

- [Step-Runner Debug API and Demo - MR !168](https://gitlab.com/gitlab-org/step-runner/-/merge_requests/168)
