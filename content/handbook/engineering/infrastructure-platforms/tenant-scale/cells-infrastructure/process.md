---
title: "チームプロセス"
description: "チームの意思決定 & 透明性ガイドライン"
upstream_path: "/handbook/engineering/infrastructure-platforms/tenant-scale/cells-infrastructure/process/"
upstream_sha: "0e6f01390a34aeb6706ace17d8d3c50e74e82d0d"
translated_at: "2026-04-28T00:00:00Z"
translator: claude
stale: false
---

## 意思決定権限フレームワーク

意思決定権限フレームワークは、エンジニアへのノイズや気散らしを最小限に抑えながら、意思決定プロセスを加速させるために存在します。また、エンジニアが早い段階で[双方向の決定](/handbook/values/#make-two-way-door-decisions)を行い、ソリューションをイテレーションできるように権限を与えるためにも存在します。

Epic の [DRI（直接責任者）](/handbook/people-group/directly-responsible-individuals/)は、そのスコープ内での一次的な意思決定権限を持ちます。DRI の責任の詳細については、チームの概要にある [DRI とサポート貢献者のセクション](./#dri--supporting-contributors)を参照してください。

意思決定を行う際、常に合意に達するとは限りません。そのような場合、[同意の上でコミット](/handbook/values/#disagree-and-commit)の原則に従うことが重要です。DRI は、恣意的な選択ではなく、利用可能な情報と推論に基づいてデータドリブンな決定を行うべきです。複数の意見が関与する場合、DRI は以下の権限レベルテーブルを使用して特定の決定にエスカレートしてコミットする義務があります。

どのタイミングでエスカレートするかを判断するためにこのマトリクスを使用してください:

| 権限レベル | 誰が決定するか | いつ使用するか |
|----------------|-------------|-------------|
| **エスカレーションなし、FYI なし** | DRI または担当エンジニア | Epic のスコープ内で容易に覆せる決定 |
| **FYI のみ** | DRI（後でチームに通知） | チームにとって学習価値がある容易に覆せる決定 |
| **チームエスカレーション** | チームのディスカッション後に DRI | 容易に覆せない、および/または Epic の範囲を超える影響がある場合 |
| **マネジメントエスカレーション** | エンジニアリングマネージャーのサポートを受けた DRI | 戦略的な影響またはデリバリーに影響する解決不能なコンフリクト |

## 意思決定の原則

### 1. 何をするかではなくなぜするかを伝える

すべての決定の背後にある理由を文書化します。サマリーを書く際には以下を検討してください:

- どんな問題を解決しているか
- どんな代替案を検討したか
- なぜこのアプローチを選んだか
- 他のチームにどう影響するか
- 成功をどのように測定するか

- [Issue の例](https://gitlab.com/gitlab-com/gl-infra/tenant-scale/cells-infrastructure/team/-/issues/519)
- [Issue の例（ADR を含む）](https://gitlab.com/gitlab-com/gl-infra/tenant-scale/cells-infrastructure/team/-/issues/364)

**実践において**: 明確なタイトル、適切なラベル、関連作業へのリンクを含む GitLab の Issue に決定を文書化します。Issue トラッキングとラベリング要件の詳細なガイダンスについては、[Issue トラッキングセクション](./#issue-tracking)を参照してください。プロジェクト全体に影響する決定を行う場合は [ADR](/handbook/engineering/architecture/design-documents/cells/#decision-log) を作成します。

### 2. 同期的な決定を文書化する

ディスカッションはミーティングで行われますが、決定は文書化しなければなりません:

- ミーティングのサマリーとオプションで録画リンク
- オーナーを伴うアクション項目
- 根拠（なぜそのように決定したか）

**実践において**: 決定が行われたミーティングの後に GitLab の Issue を作成または更新します。

### 3. 情報をアクセシブルに保つ

すべての決定は GitLab で検索可能です。障壁もなく、門番もありません。

**実践において**:

- 一貫したラベルと明確なタイトルを使用する
- 関連する Issue と依存関係をリンクする
- 決定が新しい慣行やアーキテクチャ上の決定を確立する場合は[ハンドブック](https://handbook.gitlab.com)を更新する

## 情報を得続ける（プルモデル）

すべてを伝えられるのを待つのではなく、自ら情報を探しに行く権限があります。

**情報を得るための方法**:

- 自分の作業に関連する Epic のラベルを購読する
- GitLab の Issue を検索して決定とコンテキストを見つける
- 専門知識や懸念がある場合はプロアクティブに参加する

**Epic をまたいで参加するタイミング**:

- 問題を回避するのに役立つ専門知識を持っている場合
- 潜在的な統合の問題を発見した場合
- 決定が自分の作業に影響する可能性がある場合
- タイムラインや根拠について質問がある場合

**参加の方法**:

1. Issue にコメントするか、Epic の DRI に連絡する
2. タイムラインに影響する場合はチームシンクで懸念を提起する
3. 戦略的な問題についてはマネジメントまたは上級 Tenant Scale スタッフにエスカレートする

## 割り込みローテーションプロセス

毎週、Cells Infrastructure のエンジニアが、他チームからの受信リクエストを処理し、優先順位に従った keep-the-lights-on（KTLO）Epic 作業を担当する DRI に割り当てられます。

プロセスの概要:

- 毎週、Slack リマインダーがグループに新しい割り込みローテーションシフトの開始を通知します。
- すべての Cells Infrastructure エンジニアは、（以下のスケジュールに従って）自分の次のローテーションを把握し、Slack リマインダーに従ってアクションを取ることが期待されています。
- 現在ローテーションに割り当てられている DRI は、その週を以下のことに専念すべきです:
  - 優先順位に従った KTLO Epic 作業
  - [#g_cells_infrastructure](https://gitlab.enterprise.slack.com/archives/C06V0EQD05M)、[#f_protocells](https://gitlab.enterprise.slack.com/archives/C07QTTAMXBY)、[#s_tenant_scale](https://gitlab.enterprise.slack.com/archives/C07TWC3QX47) で他チームからの Cells 関連リクエストを監視して対応する
  - [#g_cells_infrastructure](https://gitlab.enterprise.slack.com/archives/C06V0EQD05M) に届くアラートに対応する
- DRI が何らかの理由（PTO、病欠、他の責任が優先するなど）により次の割り込みローテーションシフトを実行できない場合、別のチームメンバーとローテーションを交換するか、EM に通知して調整を促すことが期待されます。交換が決まったら、[オーバーライドの作成](/handbook/engineering/infrastructure-platforms/incident-management/on-call/#swapping-on-call-duty)を使用してスケジュールを更新する必要があります。
- DRI は現在の四半期の KTLO Epic を自分のローテーション活動で更新し、割り込み業務に費やした時間の概算を提供する必要があります。

ローテーションの終了時に、各エンジニアは KTLO Epic 内で引き継ぎノートを提供すべきです:

- 以下の標準化された Duo/AI チャットプロンプトを使用して
- 必要に応じて Duo の出力を校正・修正する
- スレッドではなく、新しいルートコメントとして、新しい DRI へのピングと共に Issue に直接投稿する
- 必要であれば、新しい DRI はコメントへの返信または Slack で明確化の質問をする。タイムゾーンが合う場合は、より難しいコンテキストを確認するためのミーティングを設定することも可能

### 割り込みローテーション引き継ぎ用 Duo/AI プロンプト

```markdown
Cells Infrastructure チームの割り込みローテーション担当の次のエンジニアに引き継ぐために、この Epic の現在のステータスを簡潔にまとめてください。
このテンプレートを使用してください:

Duo が生成し私がレビューした引き継ぎコメント:

### 現在のステータス

<!-- 現在のステータスの内容 -->

### アクション項目

- <!-- GitLab のハンドル名 of DRI -->: <!-- アクション項目 -->
```

- 確信がある、または保守的に。アサーションを行う際は幻覚に注意してください。必要に応じて限定的な言い回しを使用してください。
- URL を含むリソース（GitLab の Issue など）を参照する場合は、リンクにしてください。
- 追加のコンテキストが回答を改善する可能性がある場合は、リンクされた URL を読んでください。
- Markdown コードのみで回答してください。私がレビューして投稿します。

### スケジュール

スケジュールは [incident.io](https://app.incident.io/gitlab/on-call/schedules/01KJ45GBKRS9764MJ7WNPH6DNF?startTime=2026-02-23T00%3A00%3A00&timePeriodOption=two_weeks&calendarToggle=timeline) で管理されています。
