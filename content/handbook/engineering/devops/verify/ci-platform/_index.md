---
title: "Verify:CI Platform グループ"
description: "GitLab Verify:CI Platform グループのハンドブックページ"
upstream_path: "/handbook/engineering/devops/verify/ci-platform/"
upstream_sha: "1065c86ab1ba75adefbb07560d726608885e6d4e"
translated_at: "2026-04-28T14:02:31Z"
translator: claude
stale: false
lastmod: "2026-01-14T21:41:15+00:00"
---

## ビジョン

世界中の何百万人もの開発者にとって GitLab CI をスケーラブル、信頼性が高く、パフォーマンスの高いものにする基盤プラットフォームを提供します。
私たちのチームは以下のカテゴリを担当しています:

- [CI スケーリング](https://about.gitlab.com/direction/verify/#vision)
- [フリート可視性](https://about.gitlab.com/direction/verify/#fleet-visibility)

## ミッション

- プロダクトの回復力を改善し、成長に合わせて CI プラットフォームを将来に備えることで、GitLab Continuous Integration がスケーラブル、パフォーマンス高く、信頼性があることを確保します。
- フリート可視性と CI/CD 分析を提供し、CI/CD の効率性とインフラコストのプロアクティブな管理を可能にします。
- CI プラットフォームが運用を継続するために必要なデータベースとインフラのイニシアチブをサポートします。[テクニカルロードマップで説明されている運用面](/handbook/engineering/devops/verify/#fy25-to-fy26)。

## チームメンバー

以下の人々が Verify:CI Platform グループの正規メンバーです:


<p class="my-3 text-sm text-gray-600 italic">チームメンバー情報は <a href="https://handbook.gitlab.com/handbook/engineering/devops/verify/ci-platform/#team-members" rel="external noopener">原文 (英語)</a> を参照してください。</p>


## 有用なリンク

- [Issue トラッカー: `~group::ci platform`](https://gitlab.com/groups/gitlab-org/-/issues?label_name%5B%5D=group%3A%3Aci+platform&scope=all)
- [Slack チャンネル: `#g_ci-platform`](https://gitlab.enterprise.slack.com/archives/C06URHZUTBP)
- [Issue ボード: `CI Platform Workflow`](https://gitlab.com/groups/gitlab-org/-/boards/7604546)

## ダッシュボード

[社内ハンドブックページ](https://internal.gitlab.com/handbook/engineering/core-development/ci/verify/ci-platform)を参照してください。

## 働き方

### マイルストーン計画プロセス

CI Platform には CI スケーリング専任のプロダクトカウンターパートはいませんが、[フリート可視性](https://about.gitlab.com/direction/verify/#fleet-visibility)についてはプロダクトマネージャーと連携しています。[計画用ワークアイテム](https://gitlab.com/gitlab-org/ci-cd/ci-platform-group/-/work_items?sort=created_date&state=all&first_page_size=50)を使用してマイルストーンコミットメントを一元管理しています。計画プロセスは:

- マイルストーン中盤にゴール設定で開始
- 計画 Issue での非同期ディスカッションを含む
- マイルストーン開始前に[ウェイト](#issue-ウェイト付けガイドライン)の割り当てを含むすべての Issue を確定

エンジニアリングマネージャーの責務:

- 前のマイルストーンからの繰り越し作業をレビュー
- 現実的な提供キャパシティを評価

チームメンバーの責務:

- ロードマップのタイムラインを満たすためにプロジェクトから次の Issue セットを選択
- リスクとタイムラインへの影響を早期に表面化

計画に含まれる可能性のある非ロードマップ項目:

- セキュリティ Issue（SLA を満たすため）
- 顧客バグとヘルプリクエスト（RFH）
- マイナーな信頼性 / パフォーマンス修正

インストルメンテーションは、すべての機能に対して影響と効果を測定するための重要な要件です。これにより採用を検証し、データ駆動の意思決定ができます。

### Issue 管理

#### ワークフロー

Issue ステータスフィールドを使用して Issue の現在の状態を記録します。

- **New/Start（新規/開始）**: 作成されたばかりの Issue
- **Problem Validation（問題の検証）**: 取り組みたいが明確な提案や実装詳細がない機能やバグ（[要洗練](#問題の検証--洗練)）
- **Blocked（ブロック）**: 他の Issue の完了を必要とする Issue
- **Ready for development（開発準備完了）**: 明確な提案があり、[ウェイト](#issue-ウェイト付けガイドライン)が設定されている Issue
- **In dev（開発中）**: 作業が開始され、現在進行中
- **In review（レビュー中）**: 関連するすべての MR がレビュープロセス中
- **Verification（検証）**: すべての MR がマージされ、プレ/ステージング/本番で検証待ち
- **Complete（完了）**: すべてが検証され、Issue をクローズできる

#### Issue ウェイト付けガイドライン

| ウェイト | 説明 | 信頼度 |
| ------ | ----------- | -----------------|
| 1: Trivial（些細） | よく理解されており、調査不要、正確な解決策が判明 | ≥90% |
| 2: Small（小） | よく理解されており、調査が最小限、驚きが少ない | ≥75% |
| 3: Medium（中） | よく理解されているが調査が必要、いくつかの驚きが予想される | ≥60% |
| 4: Large（大） | 基本的な理解はあるが更なる調査が必要、作業が進むにつれて細分化できる可能性がある | ≥50% |
| 5: Extra Large（特大） | 作業を開始する前に小さな Issue に分解する必要がある | ≥40% |

ウェイト 1 の Issue は完了まで 2 日以内にかかるべきです。

ウェイトは複雑さと労力を測定します。Issue のウェイトを見積もる際には、以下の技術的要素を考慮してください:

- 影響を受けるクラスやファイル
- 変更するコード行数
- 更新が必要なテスト
- 必要な MR の数
- 既存のパターンに従うか、新しいアプローチを学ぶか
- データベースマイグレーションが必要か？
- 段階的ロールアウト戦略が必要か？
- パフォーマンスへの影響
- ドキュメントの更新が必要か？など

**ヘルプを求める:**
ドメイン知識が不足している場合は、関連する専門知識を持つチームメンバーに質問してください。複雑さの高い Issue については、常に第二の意見を求めてください。

#### 問題の検証 / 洗練

Issue が `Problem Validation` 状態で現在のマイルストーンの一部である場合、目標は次のマイルストーンで開発準備完了にすることです。例えば、Issue #123 の状態がマイルストーン 18.4 で `Problem Validation` の場合、マイルストーンの終わりまでに洗練が完了しているべきです。18.5 では `Ready for development` であるべきです。

以下の手順に従ってください:

1. 説明が正確かどうかをレビューし、提案/解決策が開発準備できているかを確認します
   1. Issue が準備できていない場合は、マイルストーン中に要件を明確にする時間をスケジュールします
   1. 必要に応じて、Issue を小さなサブ Issue に分解するか、問題をさらに調査するためのスパイク Issue を作成します
1. 適切な[ウェイト](#issue-ウェイト付けガイドライン)を割り当てます
1. ステータスを `Ready for development` に設定します

#### 非同期ステータスの更新

**なぜ行うか:** グローバルに分散したチームでは、非同期更新が私たちの強みです - 異なるタイムゾーンのチームメイトがあなたの作業に繋がり続け、引き継ぎの準備をし、必要な時に助けられるようにします。

**いつ:** 毎週金曜日正午 GMT まで（または重要な変更が発生した場合はより頻繁に）担当 Issue を更新してください。これにより全員が可視性を持ち、必要に応じて翌週の計画を調整するのに十分な時間を確保します。

**どこで:** マージリクエストではなく Issue コメントに直接更新を追加してください - これにより全体像が一か所にまとまります。

##### 更新テンプレート

```markdown
## Status Update

**Progress this week:** <!-- What got done? Any wins or learnings? -->
- ... 

**What's next:** <!-- Planned work for next week -->
- ...

**Blockers:** <!-- Any blockers or questions? Tag specific people if needed -->
- None <!-- (if no blockers) -->

**Confidence for current milestone:**
- [ ] :red_circle: At risk - may not make it
- [ ] :yellow_circle: Some concerns - watching closely
- [ ] :green_circle: On track - confident we'll deliver

/health_status <on_track|needs_attention|at_risk>
/cc @golnazs
```

Issue 内で Duo Agent を活用して、以下のプロンプトでテンプレートを事前に入力することもできます:

````markdown
Succinctly fill the weekly status template below using the state of this issue and related MRs, and output it as markdown. Follow these guidelines:
- When outputting GitLab user names, wrap them in backticks, so that they are not mentioned.
- When writing feature flag names or about epics, try to link to the respective issue/epic.
- Do not remove items from the list in the Confidence section.

```
## Status Update

**Progress this week:**
<!-- What got done? Any wins or learnings? --->
-

**What's next:**
<!-- Planned work for next week -->
- ...

**Blockers:**
<!-- Any blockers or questions? Tag specific people if needed -->
- None <!-- (if no blockers) -->

**Confidence for current milestone:**
- [ ] :red_circle: At risk - may not make it
- [ ] :yellow_circle: Some concerns - watching closely
- [ ] :green_circle: On track - confident we'll deliver

/health_status <on_track|needs_attention|at_risk>
/label ~"workflow::in dev" 
/status "In dev" 
/cc @golnazs

<!--
/label ~"workflow::in review" 
/status "In review" 

/label ~"workflow::verification" 
/status "Verification" 
-->
```

### 非同期コラボレーション

#### 週次優先度更新

Slack と統合した [Geekbot](https://geekbot.com/) を使用して、チームの残りのメンバーと週次優先度を共有します。

#### 非同期アジェンダ付き週次チームシンク

利用可能なチームメンバーのために週次同期ミーティングを開催しています。分散した性質を考慮して、[Google Doc アジェンダ（内部）](https://docs.google.com/document/d/1JsS4kVu8X8LtFva35StlNfabWfgZTd0tl3I8-w7hJwE/edit#heading=h.kvc0p7nyngz5)を通じた非同期コラボレーションを強く奨励しています。Slackbot は毎週アジェンダの確認とコントリビューションのリマインダーを送信します。

#### 月次レトロスペクティブ

月次レトロスペクティブには[（内部）非同期レトロスペクティブプロジェクトの GitLab Issue](https://gitlab.com/gl-retrospectives/verify-stage/ci-scaling/-/issues/)を使用しています。月次レトロスペクティブ Issue の目的は、マイルストーンがどのように進んだかについて非同期で協力し、以下の観点から振り返ることです:

- うまくいったこと
- うまくいかなかったこと
- 改善できること
- お互いへの賞賛

マイルストーン終了まで待つのではなく、月を通じてレトロスペクティブフィードバックを追加することを奨励しています。Issue の期限、タグ、Slack のリマインダーがクローズ前の継続的なコントリビューションを促します。

### Duo エージェンティックチャットプロンプト

チームの効率を高める継続的なタスクの管理を支援するために、Duo のエージェンティックチャット機能を使用しています。
以下のリストは日常業務で使用するプロンプトです。

1. このバグをトリアージして severity と priority ラベルを適用してください。このレポートが "~group::ci platform" に属することを確認してください。

### ラベル

#### カテゴリラベル

CI Scaling グループは以下のフィーチャーカテゴリをサポートしています:

| ラベル                 | |  | | |
| ----------------------| -------| ----|------------| ---|
| `Category:Continuous Integration (CI) Scaling` | [Issues](https://gitlab.com/groups/gitlab-org/-/issues?sort=created_date&state=opened&label_name[]=Category:Continuous+Integration+%28CI%29+Scaling) | [MRs](https://gitlab.com/gitlab-org/gitlab/-/merge_requests?scope=all&state=opened&label_name[]=Category%3AContinuous%20Integration%20%28CI%29%20Scaling) | [方向性](https://about.gitlab.com/direction/verify/#continuous-integration-ci-scaling) | ドキュメント - TBD |

## 開発者オンボーディング

[Verify での開発者オンボーディング](/handbook/engineering/devops/verify/#developer-onboarding-in-verify)セクションを参照してください。
