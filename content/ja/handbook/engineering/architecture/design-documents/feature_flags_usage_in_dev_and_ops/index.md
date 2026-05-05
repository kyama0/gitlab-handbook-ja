---
title: "GitLab 開発および運用におけるフィーチャーフラグの使用"
status: proposed
creation-date: "2023-11-01"
authors: [ "@rymai" ]
coach: "@DylanGriffith"
approvers: []
owning-stage: "~devops::non_devops"
participating-stages: []
toc_hide: true
upstream_path: /handbook/engineering/architecture/design-documents/feature_flags_usage_in_dev_and_ops/
upstream_sha: ec55f130cc95389b6faf798cebffd864abdbb4c5
translated_at: "2026-04-27T00:00:00Z"
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
<td class="px-3 py-2 border border-gray-300"><a href="https://gitlab.com/rymai" class="text-blue-600 hover:underline">@rymai</a></td>
<td class="px-3 py-2 border border-gray-300"><a href="https://gitlab.com/DylanGriffith" class="text-blue-600 hover:underline">@DylanGriffith</a></td>
<td class="px-3 py-2 border border-gray-300"></td>
<td class="px-3 py-2 border border-gray-300"><span class="inline-block rounded px-2 py-0.5 text-xs font-medium bg-gray-100 text-gray-700">~devops::non_devops</span></td>
<td class="px-3 py-2 border border-gray-300">2023-11-01</td>
</tr>
</tbody>
</table>
</div>


このブループリントは [開発フィーチャーフラグのアーキテクチャブループリント](../feature_flags_development/) を基盤としています。

## サマリー

フィーチャーフラグは GitLab の開発と運用の両方において重要ですが、現在のプロセスの状態では、本番環境の問題を引き起こし、多くの手動作業と保守作業をもたらす可能性があります。

このブループリントの目標は、プロセスをより安全に、保守しやすく、軽量で自動化され、透明性の高いものにすることです。

## 動機

### フィーチャーフラグのユースケース

フィーチャーフラグはさまざまな目的で使用されます:

- GitLab.com デプロイメントのリスク軽減（ほとんどのフィーチャーフラグ）: 本番インシデントが発生した場合にフィーチャーフラグを本番環境で素早く有効化 / 無効化できます。
- 作業中の機能（WIP）: 一部の機能は複雑で、複数のマージリクエストを通じて実装する必要があります。完全に実装されるまで、誰にも見えないように隠す必要があります。この場合、フィーチャーフラグにより、実際に機能を使用せずにすべての変更をメインブランチにマージできます。
- ベータ機能: 現在の形では特定のユースケースに対して機能を[スケール、サポート、保守できるか確信が持てない](https://docs.gitlab.com/policy/development_stages_support/) 場合があります（[例](https://gitlab.com/gitlab-org/gitlab/-/issues/336070#note_1523983444)）。機能が MVC と見なせるほど完全ではないシナリオもあります。この場合にフラグを提供することで、エンジニアや顧客が十分なパフォーマンスになるまで新機能を無効にできます。
- オペレーション: サイトリライアビリティエンジニアやサポートエンジニアは、これらのフラグを使用してリソースを多く使用する可能性がある機能を無効にし、インスタンスをより安定した状態に戻すことができます。SaaS 専用機能も同様です。
- 実験: GitLab.com での A/B テスト。
- ワーカー（特別な `ops` フィーチャーフラグ）: Sidekiq ジョブの遅延など、Sidekiq ワーカーの動作を制御するために使用されます。

フィーチャーフラグをより適切に分類する必要があります。

### フィーチャーフラグに関連する本番インシデント

フィーチャーフラグは GitLab.com で本番インシデントを引き起こしました（[1](https://gitlab.com/gitlab-com/gl-infra/production/-/issues/5289)、[2](https://gitlab.com/gitlab-com/gl-infra/production/-/issues/4155)、[3](https://gitlab.com/gitlab-com/gl-infra/production/-/issues/16366)）。

GitLab.com の安定性のためにこれを防ぐ必要があります。

### フィーチャーフラグによる技術的負債

フィーチャーフラグは技術的負債のますます増大する源にもなっています: 現在 [GitLab コードベースには 591 のフィーチャーフラグ](https://docs.gitlab.com/ee/user/feature_flags.html) があります。

GitLab コードベースの長期的な保守性と品質のためにフィーチャーフラグの数を削減する必要があります。

## 目標

このブループリントの目標は、フィーチャーフラグのプロセスを以下のように改善することです:

- より安全に
- より保守しやすく
- より軽量で自動化された
- より透明性の高い

## 課題

### 複雑なフィーチャーフラグのロールアウトプロセス

フィーチャーフラグのロールアウトプロセスは現在:

- 複雑: ロールアウト Issue は非常に手動的で多くのチェックボックスを含んでいます（関連性のないチェックボックスも含む）。エンジニアはこれらの Issue をしばしば使用せず、時間の経過とともに古くなり忘れられがちです。
- あまり透明性がない: フィーチャーフラグの変更は、ロールアウト Issue からはるか遠い複数の場所に記録されるため、最新のフィーチャーフラグの状態を理解することが困難です。
- 本番プロセスから遠い: ロールアウト Issue は `gitlab-org/gitlab` プロジェクトに作成されます（本番 Issue トラッカーから遠い）。
- フィーチャーフラグのロールアウトへの一貫したパスが存在しない: 速度と安全性のトレードオフをエンジニアの判断に任せています。標準化されたロールアウトステップのセットが必要です。

### 技術的負債とコードベースの複雑さ

[開発フィーチャーフラグのアーキテクチャブループリントの課題はまだ残っています](../feature_flags_development/#課題)。

さらに新しい課題があります:

- フィーチャーフラグがデフォルトで有効になっており、オンプレミスインストールで無効になっている場合、フィーチャーフラグが削除されると、機能がオンプレミスインスタンスで突然有効になり、以前の動作にロールバックできなくなります。

### フィーチャーフラグのデフォルト状態と可観測性のための複数の情報源

現在、フィーチャーフラグのデフォルト状態をさまざまな対象向けに複数の場所に表示しています:

**GitLab の顧客**

- [ユーザードキュメント](https://docs.gitlab.com/ee/user/feature_flags.html): すべてのフィーチャーフラグとそのメタデータを一覧表示し、GitLab の顧客がインスタンスでフィーチャーフラグを調整できるようにします。GitLab.com ユーザーがフィーチャーフラグのデフォルト状態を確認したい場合にも役立ちます。

**サイトリライアビリティエンジニアとデリバリーエンジニア**

- [GitLab.com フィーチャーフラグ状態変化 Issue（内部）](https://gitlab.com/gitlab-com/gl-infra/feature-flag-log/-/issues): GitLab.com でのフィーチャーフラグの状態変化ごとに、このプロジェクトに Issue が作成されます。
- [GitLab.com フィーチャーフラグ状態変化ログ（内部）](https://nonprod-log.gitlab.net): フィーチャーフラグ状態変化ログを確認するには `source: feature` と `env: gprd` でフィルタリングします。

**GitLab エンジニアリング & インフラ / クオリティディレクター / VP、CTO**

- [内部 Sisense ダッシュボード](https://app.periscopedata.com/app/gitlab/792066/Engineering-::-Feature-Flags): DevOps グループ別にグループ化されたフィーチャーフラグの時系列指標。

**GitLab エンジニアリングとプロダクトマネージャー**

- [「注意が必要なフィーチャーフラグ」月次レポート](https://gitlab.com/gitlab-org/quality/triage-reports/-/issues/?sort=created_date&state=opened&search=Feature%20flags&in=TITLE&assignee_id=None&first_page_size=100): 内部 Sisense ダッシュボードと同じデータですが、特定の DevOps グループ向けに Issue で提示され、グループのエンジニアリングマネージャーに割り当てられます。

**フィーチャーフラグのデフォルト状態を確認したい人**

- [非公式フィーチャーフラグダッシュボード](https://samdbeckham.gitlab.io/feature-flags/): 便利なフィルタリングを提供するユーザーフレンドリーなダッシュボード。

これにより、ほぼすべてのフィーチャーフラグのステークホルダー（開発エンジニア、エンジニアリングマネージャー、サイトリライアビリティエンジニア、デリバリーエンジニア）が混乱します。

## 提案

### フィーチャーフラグの実装と使用の改善

- [実装ステップでの誤設定と人的ミスの可能性を減らす](https://gitlab.com/groups/gitlab-org/-/epics/11553)
  - 「アクターの割合」を優先して「時間の割合」戦略を削除する
- [フィーチャーフラグの開発ドキュメントを改善する](https://gitlab.com/groups/gitlab-org/-/epics/5324)

### 新しいフィーチャーフラグ `type` の導入

`development` フィーチャーフラグタイプは実際には複数のユースケースを含んでいることが明らかです:

- GitLab.com デプロイメントのリスク軽減。YAML 値: `gitlab_com_derisk`。
- 作業中の機能（WIP）。YAML 値: `wip`。機能が完成したら、スケーラビリティにまだ疑問がある場合は `beta` に変更できます。
- ベータ機能。YAML 値: `beta`。

注記:

- これらの新しいタイプは広範な `development` タイプを置き換えます。将来的に `development` フィーチャーフラグは使用すべきではありません。
- コードベースに `development` フィーチャーフラグがなくなるまで後方互換性が保たれます。

### フィーチャーフラグタイプごとの制約の導入

各フィーチャーフラグタイプには以下に関する特定の制約が割り当てられます:

- `default_enabled` 属性に許可される値
- 最大存在期間（MLS）: フィーチャーフラグの導入時（つまり `master` にマージされた時）から始まる期間。GitLab.com でのグローバルな有効化（または該当する場合の `default_enabled: true`）から始まる存在期間は導入しません。これにより、フィーチャーフラグをできるだけ早くロールアウトして削除するインセンティブが生まれます。

MLS は自動化、レポート、およびセクションレベルでの定期的なレビュー会議を通じて実施されます。

各フィーチャーフラグタイプの制約は以下の通りです:

- `gitlab_com_derisk`
  - `default_enabled` は `true` に設定**してはなりません**。このタイプのフィーチャーフラグは GitLab.com のリスクを低下させることを目的としているため、GitLab.com で有効化された後はコードベースにフラグを保持する必要がありません。**`default_enabled: true` はこのタイプのフィーチャーフラグには効果がありません。**
  - 最大存在期間: 2ヶ月。
  - 補足: このタイプのフィーチャーフラグは短命でデプロイメント関連のため、[GitLab のすべてのフィーチャーフラグ](https://docs.gitlab.com/ee/user/feature_flags.html) ページには文書化されません。
- `wip`
  - `default_enabled` は `true` に設定**してはなりません**。必要な場合は、機能が完成したらこのタイプを `beta` に変更できます。
  - 最大存在期間: 4ヶ月。
- `beta`
  - `default_enabled` を `true` に設定できるため、スケーラビリティの問題が発生した場合に無効にする可能性を残しながら、機能をベータで全員にリリースできます（理想的には、この理由でのみ特定のオンプレミスインストールで無効にすべきです）。
  - 最大存在期間: 6ヶ月。
- `ops`
  - `default_enabled` を `true` に設定できます。
  - 最大存在期間: 無制限。
  - 補足: このタイプの使用はインスタンス設定を導入しないという意識的な決定に従うべきです。
- `experiment`
  - `default_enabled` は `true` に設定**してはなりません**。
  - 最大存在期間: 6ヶ月。

### 新しい `feature_issue_url` フィールドの導入

元の機能 Issue への URL を保持することで、ロールアウトおよびロギング Issue からの自動クロスリンクが可能になります。この情報の新しいフィールドは `feature_issue_url` です。

例:

```yaml
---
name: auto_devops_banner_disabled
feature_issue_url: https://gitlab.com/gitlab-org/gitlab/-/issues/12345
introduced_by_url: https://gitlab.com/gitlab-org/gitlab/-/merge_requests/678910
rollout_issue_url: https://gitlab.com/gitlab-com/gl-infra/production/-/issues/9876
milestone: '16.5'
type: gitlab_com_derisk
group: group::pipeline execution
```

```yaml
---
name: ai_mr_creation
feature_issue_url: https://gitlab.com/gitlab-org/gitlab/-/issues/12345
introduced_by_url: https://gitlab.com/gitlab-org/gitlab-foss/-/merge_requests/14218
rollout_issue_url: https://gitlab.com/gitlab-com/gl-infra/production/-/issues/83652
milestone: '16.3'
type: beta
group: group::code review
default_enabled: true
```

### フィーチャーフラグのロールアウトプロセスの合理化

1. （プロセス）ロールアウト Issue を **[本番 Issue トラッカー](https://gitlab.com/gitlab-com/gl-infra/production/-/issues)** に作成するよう移行し、[変更管理 Issue テンプレート](https://gitlab.com/gitlab-com/gl-infra/production/-/blob/master/.gitlab/issue_templates/change_management.md) に近い形にテンプレートを修正します（参考として [この Issue](https://gitlab.com/gitlab-com/gl-infra/production/-/issues/2780) を参照）。そうすることで、ロールアウト Issue は実際の本番変更（つまりフラグの本番環境での有効化 / 無効化）のみに関係し、本番変更が期待通り機能することが確認されたらすぐに閉じられるべきです。
1. （自動化）ほとんどのロールアウトステップを自動化します。例えば:
     - （完了）[著者に機能がステージング / カナリア / 本番環境にデプロイされたことを知らせる](https://gitlab.com/gitlab-org/quality/triage-ops/-/issues/1403)
     - （完了）[Chatops プロジェクトからの実際のフィーチャーフラグ状態変化をロールアウト Issue にクロスリンクする](https://gitlab.com/gitlab-org/gitlab/-/issues/290770)
     - （完了）[著者に `default_enabled: true` マージリクエストが本番環境にデプロイされ、フィーチャーフラグを本番環境から削除できることを知らせる](https://gitlab.com/gitlab-org/quality/triage-ops/-/merge_requests/2482)
     - マージリクエストでフィーチャーフラグが最初に導入された際にロールアウト Issue を自動作成し、`rollout_issue_url` フィールドを記入するための差分提案を提供する（Danger）
     - マージリクエストでフィーチャーフラグ定義の制約を確認・実施する（Danger）
     - マージリクエストのマイルストーンと同じ値でない場合に `milestone` フィールドを修正する差分提案を提供する（Danger）
     - フィーチャーフラグの状態変化時に、それを担当するグループに Slack で通知する（chatops）
     - フィーチャーフラグの最大存在期間の7日前に、グループラベルが設定された「クリーンアップ MR」を自動的に作成し、フィーチャーフラグの作者（まだ GitLab にいる場合）に割り当てる。[開発者の繰り返しタスクの自動化](https://gitlab.com/gitlab-org/gitlab/-/merge_requests/134487) を活用できます
     - セクションレベルでの自動レポートと定期的なレビューを通じてフィーチャーフラグの最大存在期間を実施する
1. （ドキュメント / プロセス）フィーチャーフラグのロールアウト DRI が機能フラグを有効にした後、数時間はオンラインのままでいることを確認する（理想的には1日の始めにフラグを有効にする）。問題が発生した場合に対応できるようにします。
1. （プロセス）標準化されたロールアウトステップのセットを提供します。考慮すべきトレードオフには以下が含まれます:
    - エラーが発生する可能性
    - フィーチャーフラグのロールアウトによって影響を受けるアクター（ユーザー / リクエスト / プロジェクト / グループ）の総数。例えば、1%のロールアウトで 100,000 人のユーザーがログインできなくなると大きな問題になります
    - 各ステップ間の待機時間。フィーチャーフラグによってはステップ間の待機が10分で十分なものもあれば、24時間待つべきものもあります。理想的には、各ステップで悪影響がないことを積極的に検証する自動化が必要です。

### GitLab.com でのフィーチャーフラグのデフォルト状態・現在の状態・状態変化のためのより良い SSOT の提供

**GitLab の顧客**

- [ユーザードキュメント](https://docs.gitlab.com/ee/user/feature_flags.html): [非公式フィーチャーフラグダッシュボード](https://samdbeckham.gitlab.io/feature-flags/) と同様に、フィルタリングと並べ替えを追加して現在のページを維持します。

**サイトリライアビリティエンジニアとデリバリーエンジニア**

私たちは [フィーチャーフラグ状態変化ロギング戦略の有用性を評価](https://gitlab.com/gitlab-org/quality/engineering-productivity/team/-/issues/309) し、[GitLab.com フィーチャーフラグ状態変化 Issue（内部）](https://gitlab.com/gitlab-com/gl-infra/feature-flag-log/-/issues) と [GitLab.com フィーチャーフラグ状態変化ログ（内部）](https://nonprod-log.gitlab.net) の両方が異なる対象に対して有用であることが判明しました。

**GitLab エンジニアリング & インフラ / クオリティディレクター / VP、CTO**

- [内部 Sisense ダッシュボード](https://app.periscopedata.com/app/gitlab/792066/Engineering-::-Feature-Flags): ステークホルダーにとってより有用になるよう現在のダッシュボードを合理化します。

**GitLab エンジニアリングとプロダクトマネージャー**

- [「注意が必要なフィーチャーフラグ」月次レポート](https://gitlab.com/gitlab-org/quality/triage-reports/-/issues/?sort=created_date&state=opened&search=Feature%20flags&in=TITLE&assignee_id=None&first_page_size=100): フィーチャーフラグ削除のための自動作成 MR へのリンクを追加し、フィーチャーフラグに関するドキュメントとベストプラクティスを改善することで、現在のレポートをより実行可能なものにします。

## イテレーション

この作業は専用の Epic: [フィーチャーフラグの内部使用の改善](https://gitlab.com/groups/gitlab-org/-/epics/3551) の一部として行われています。この Epic はこれらの変更を行うためのメタ理由を説明しています。

## リソース

- [フィーチャーフラグとは？](https://launchdarkly.com/blog/what-are-feature-flags/#:~:text=Feature%20flags%20are%20a%20software,portions%20of%20code%20are%20executed)
- [フィーチャーフラグのベストプラクティス](https://featureflags.io/feature-flags-best-practices/)
- [短命か長命か？フィーチャーフラグの存在期間の説明](https://configcat.com/blog/2022/07/08/how-long-should-you-keep-feature-flags/)
