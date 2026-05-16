---
title: "Verify:Pipeline Authoring グループ"
description: "Pipeline Authoring グループの GitLab チームページ"
upstream_path: "/handbook/engineering/devops/verify/pipeline-authoring/"
upstream_sha: "1065c86ab1ba75adefbb07560d726608885e6d4e"
translated_at: "2026-04-28T14:02:31Z"
translator: claude
stale: false
lastmod: "2025-12-05T19:47:34+00:00"
---

## 有用なリンク

### プロダクト

- [プロダクトビジョン](https://about.gitlab.com/direction/ops/#verify)
- [Pipeline Authoring カテゴリの方向性](https://about.gitlab.com/direction/verify/pipeline_composition/)
- [ci_pipelines をトリガーするユニークユーザー数（パフォーマンス指標）](https://internal.gitlab.com/handbook/company/performance-indicators/product/ops-section/#verifypipeline-authoring---gmau---number-of-unique-users-interacting-with-gitlab-ciyml-file) - 内部リンク
- [CI/CD 開発ドキュメント](https://docs.gitlab.com/ee/development/cicd/index.html)
- [CI/CD コンポーネントドキュメント](https://docs.gitlab.com/ee/ci/components/)
- [CI/CD カタログドキュメント](https://docs.gitlab.com/ee/ci/components/#cicd-catalog)

## チームハンドル

| カテゴリ | ハンドル |
|---------------|------|
|GitLab チームハンドル | @verify-pa-team |
| Slack チャンネル | [#g_pipeline-authoring](https://gitlab.slack.com/archives/C019R5JD44E) |
| Slack ハンドル（エンジニア） | @verify-pa-engineering |

### チームリソース

- [チームリソース](/handbook/engineering/devops/verify/pipeline-authoring/team-resources/)
- [ワークフローボード: `~group::pipeline authoring`](https://gitlab.com/gitlab-org/gitlab/-/boards/5726606?label_name[]=group%3A%3Apipeline%20authoring&milestone_title=Started)

### 動画

- [GitLab Unfiltered: Pipeline Execution グループ（CI 関連）](https://www.youtube.com/playlist?list=PL05JrBw4t0KpsVi6PG4PvDaVM8lKmB6lV)
- [CI バックエンドアーキテクチャウォークスルー - 2020 年 5 月](https://www.youtube.com/watch?v=ew4BwohS5OY)
- [フロントエンド CI プロダクト / コードベース概要 - 2020 年 6 月](https://www.youtube.com/watch?v=7CUd7aAUiWo)
- [CI/CD カタログデモ](https://www.youtube.com/watch?v=oNcJCU-a-bM)

## コアドメイン

### プロダクト

| プロダクト | ナビゲーション | ドキュメント |
| ------- | ---------- | ------------- |
| **CI/CD パイプライン** | [Build >> Pipelines](https://gitlab.com/gitlab-org/gitlab/-/pipelines) | [GitLab docs](https://docs.gitlab.com/ee/ci/pipelines/) |
| **パイプラインエディタ** | [Build >> Pipeline editor](https://gitlab.com/gitlab-org/gitlab/-/ci/editor?branch_name=master) | [GitLab docs](https://docs.gitlab.com/ee/ci/pipeline_editor/) |
| **CI/CD カタログ** | [Explore >> CI/CD Catalog](https://gitlab.com/explore/catalog) | [GitLab docs](https://docs.gitlab.com/ee/ci/components/) |

### 機能

- [パイプライン作成](https://docs.gitlab.com/ee/ci/quick_start/)
- [YAML 構文](https://docs.gitlab.com/ee/ci/yaml/)
- [CI/CD 設定リントツール](https://docs.gitlab.com/ee/ci/yaml/lint.html)
- [CI/CD 変数](https://docs.gitlab.com/ee/ci/variables/)
- 追加機能は[こちら](/handbook/product/categories/features/#pipeline-authoring)

## テクニカルロードマップ

`FY25 の残り`

これらは `FY25` の残りにおける私たちの高レベルなエンジニアリング主導の目標です。意欲的であり変更される可能性がありますが、これらの領域でどこに注力するかを示しています。

### パフォーマンスとコスト削減

**パイプライン作成速度**

**注意:** パイプライン作成フィードバック [Issue](https://gitlab.com/gitlab-com/www-gitlab-com/-/issues/34984)。パイプライン作成プロセスでの体験についてのご意見をお待ちしています。

目標:

- パイプライン作成サービスのコンポーネントを理解して速度を向上させます。
  - この[グラフ](https://log.gprd.gitlab.net/app/r/s/r5Owf)はパイプライン作成パフォーマンスに関するデータをキャプチャしています。
- パイプライン作成パフォーマンスの最適化に関して特定されたトップ 3 の Issue:
  - [パイプライン作成時に Sidekiq ジョブを一括挿入](https://gitlab.com/gitlab-org/gitlab/-/issues/348553)
  - [CI 変数を遅延かつ選択的に展開](https://gitlab.com/gitlab-org/gitlab/-/issues/410143)
  - [並列ジョブのルールを一度だけ評価](https://gitlab.com/gitlab-org/gitlab/-/issues/450687)

### 効率性

目標:

- データ構造検証のためにエントリクラスから JSON スキーマへ移行します。- [Issue](https://gitlab.com/gitlab-org/gitlab/-/issues/463062)

### 可視性

**CI カタログのインストルメンテーション**

目標:

- インストルメンテーションを追加して CI/CD カタログの使用状況の可視性を高めるために特定されたトップ 3 の Issue:
  - [GraphQL コール時間のキャプチャ](https://gitlab.com/gitlab-org/gitlab/-/issues/452247)
  - [Ci::Catalog::Listing クエリのパフォーマンスを追跡するインストルメンテーションの実装](https://gitlab.com/gitlab-org/gitlab/-/issues/435440)
  - [ページロード時間のキャプチャ](https://gitlab.com/gitlab-org/gitlab/-/issues/452246)

### FY26 の注目事項

- GraphQL サブスクリプションのサポート - [エピック](https://gitlab.com/groups/gitlab-org/-/epics/15108)
- パイプラインパフォーマンスの改善 - [エピック](https://gitlab.com/groups/gitlab-org/-/epics/15244)
- CI 変数の改善 - [エピック](https://gitlab.com/groups/gitlab-org/-/epics/15250)
- MR パイプラインタブの GraphQL への移行 - [エピック](https://gitlab.com/groups/gitlab-org/-/epics/15133)

## 興味深いことと達成事項

このセクションには、チームの最近の最も印象的な 3 つの達成事項をリストします。

- 最近、CI/CD カタログを [GA](https://gitlab.com/groups/gitlab-org/-/epics/12153) リリースしました。
- CI/CD カタログ[インデックスページ](https://gitlab.com/gitlab-org/gitlab/-/issues/434333)に使用統計と人気度ソートオプションを追加しました。

## チームメンバー


<p class="my-3 text-sm text-gray-600 italic">チームメンバー情報は <a href="https://handbook.gitlab.com/handbook/engineering/devops/verify/pipeline-authoring/#team-members" rel="external noopener">原文 (英語)</a> を参照してください。</p>


## ステーブルカウンターパート

ステーブルカウンターパートを見つけるには、Pipeline Authoring の[プロダクトカテゴリリスト](/handbook/product/categories/#pipeline-authoring-group)を参照してください。

## ユーザーフィードバックの収集

私たちはユーザーフィードバックを非常に重視しています！最新機能 CI/CD カタログへのフィードバックとインサイトを収集するには、以下の Issue を使用してください:

- [CI/CD カタログフィードバック](https://gitlab.com/gitlab-org/gitlab/-/issues/407556)

## コミュニティコントリビューション

GitLab でのパイプライン Authoring は、CI/CD システムとそのさまざまなコンポーネントとの複雑な相互作用を深く理解することが必要です。この複雑さはコードベースや基盤となるアーキテクチャに不慣れな人にとって課題となる可能性があります。

コミュニティコントリビューターには ~"seeking community contribution" ラベルの付いた Issue に取り組むことを奨励しています。これらの Issue は外部コントリビューションのための明確で管理しやすいパスを提供するために特別に選択されています。

コミュニティコントリビューション向けにマークされていない Issue へのコントリビューションは、パイプライン Authoring の固有の複雑さにより、かなりのドメイン知識と GitLab の内部への精通が必要な場合があります。すべてのコントリビューションに感謝しますが、これらの Issue への MR はより広範なレビューが必要な場合があり、私たちのアーキテクチャビジョンまたはベストプラクティスと整合しない場合はマージされない場合があります。

### レビュアー向けガイダンス

コミュニティコントリビューターからのマージリクエストをレビューする際は、以下を考慮してください:

- Issue の選択: コントリビューションが ~"seeking community contribution" ラベルの付いた Issue に対応しているかを確認します。そうでない場合は、複雑さと必要なドメイン知識を評価します。
- メンタリング: コントリビューションが見込みを示しているが指導が必要な場合は、建設的なフィードバックを提供し、コントリビューターが成功するためのメンタリングの提供を検討します。
- 明確なコミュニケーション: 必要な変更や決定の根拠をコントリビューターがコンテキストと理由を理解できるよう、明確かつ丁重に説明します。

コミュニティが取り上げた Issue に ~'seeking community contribution' ラベルがなく、かつ/または複雑すぎる場合は、以下のテンプレートの使用を検討してください:

```markdown
"GitLab へのコントリビューションに興味を持っていただきありがとうございます！この Issue に取り組んでいただいた主体性を評価します。この特定の領域には、GitLab の CI/CD システムの深いドメイン知識を必要とする複雑さが含まれています。よりスムーズなレビュープロセスとコントリビューションがマージされる可能性を高めるために、~'seeking community contribution' ラベルの付いた Issue に注力することをお勧めします。これらは外部コントリビューター向けに特別にキュレーションされています。厳選された Issue リストはこちらで入手できます: https://gitlab.com/gitlab-org/gitlab/-/issues/?sort=popularity&state=opened&label_name%5B%5D=group%3A%3Apipeline%20authoring&label_name%5B%5D=Seeking%20community%20contributions&first_page_size=100"
```

## グループミーティング

すべてのミーティングには、議論するアジェンダ項目のリストと、ミーティングが行われた際のミーティングメモが含まれていることが期待されます。これにより、出席できない人が追いつきやすくなります。

同期ミーティングのスケジュールは柔軟であり、必要な参加者に合わせて変更できることに注意してください。すべてのチームミーティングの最新スケジュールについては、[グループのカレンダー](https://calendar.google.com/calendar/u/0/embed?src=c_n7totcsnoi7l2j0a2n9ps08g7s@group.calendar.google.com&ctz=UTC)を参照してください。

以下のテーブルは定期チームミーティングの目標と主要な詳細を簡単に説明しています:

| ミーティングタイトル | 頻度 | DRI | 内容 |
|---------------|------|------|------|
| チーム週次シンク * | 毎週 | 全員 | チームに関するすべてについて議論し、ミーティングは毎週タイムゾーンを変えて開催 |
| デザインディスカッション | 隔週 | UX | エンジニアリングからのコラボレーションまたはフィードバックが必要な現在のデザイン作業をレビュー |
| テクニカルディスカッション | 隔週 | エンジニア | 現在の作業とチームメンバーが互いに質問したいことを議論 |

## ダッシュボード

[社内ハンドブックページ](https://internal.gitlab.com/handbook/engineering/core-development/ci/verify/pipeline-authoring)を参照してください。

### クロスファンクショナル優先順位付け

UX、プロダクトマネージャー、エンジニアリングマネージャーは週次ミーティングで、クロスファンクショナルな優先順位付けと、クアッドが協力する必要があるその他のトピックについて議論します。

### デザインコラボレーション

デザイン関連のトピックについて議論するためのすべてのチームメンバーに開かれた隔週デザイン同期ミーティングを開催しています。

## 働き方

### 計画

Issue は、マイルストーンに割り当てる前に洗練され、重み付けされます。将来のマイルストーンの作業計画に `candidate::` スコープラベルを使用します。このラベルにより、`workflow::design` と `workflow::ready for development` ラベルが適用されている Issue を計画しているものとしてフィルタリングでき、プロダクト、エンジニアリング、UX が非同期で Issue を洗練させることができます。重み付けはまた、将来のマイルストーンで Issue がスケジュールされる方法に関してキャパシティ計画に役立ちます。

マイルストーン計画プロセスの一部として[計画 Issue](https://gitlab.com/gitlab-org/ci-cd/pipeline-authoring/-/blob/master/.gitlab/issue_templates/Planning_issue_PA.md) を作成し、[ワークフローボード](https://gitlab.com/gitlab-org/gitlab/-/boards/5726606?label_name[]=group%3A%3Apipeline%20authoring&milestone_title=Started)が現在と今後の作業の情報の単一ソース（[SSOT](https://docs.gitlab.com/ee/development/documentation/styleguide/#documentation-is-the-single-source-of-truth-ssot)）です。プロダクトがエンジニアリング、UX、テクニカルライターの意見を受けて作業の優先順位付けの DRI です。計画 Issue は質問とチームキャパシティについて議論するために使用されます。各マイルストーンの開始前に、計画 Issue で特定された Issue がそのマイルストーンに割り当てられ、エンジニアは[ワークフローボード](https://gitlab.com/gitlab-org/gitlab/-/boards/5726606?label_name[]=group%3A%3Apipeline%20authoring&milestone_title=Started)の `workflow::ready for development` 列の最上位から優先順位付けされた Issue を自分に割り当てることができます。

#### 洗練が必要な Issue を見つける

洗練が必要な Issue は、次のマイルストーンに関連付けられた[計画 Issue](https://gitlab.com/gitlab-org/ci-cd/pipeline-authoring/-/issues/?sort=closed_at_desc&state=opened&label_name%5B%5D=Planning%20Issue&first_page_size=100)にリストされています。

#### エンジニアリングによる Issue の洗練方法

*注: 私たちは [Grooming よりも Refining を優先します](/handbook/communication/top-misused-terms)*

Issue を洗練する目的は、問題文が大まかな労力見積もりを提供できるほど明確であることを確認することです。洗練中に**ソリューションの検証**を提供することが意図ではありません。

##### Issue 洗練のチェックリスト

1. Issue の説明に問題文はありますか？
1. Issue に期待される動作が誰でも理解できる程度に十分に説明されていますか？
1. Issue にステークホルダー（例: BE、FE、PM、UX、テクニカルライター）が明示的に定義されていますか？
1. Issue の説明に提案はありますか？ *そうであれば:*
    1. 提案は問題文に対処していますか？
    1. 実装に意図しない副作用はありますか？
1. Issue に行うべき作業に合った適切なラベルが付いていますか？（例: バグ、機能、パフォーマンス）
1. Issue が `type::bug` の場合、動作の再現方法が明確であり、サンプル CI 設定ファイルを提供できますか？

このチェックリストの質問への回答にはチームの誰でも貢献できますが、最終的な決定は PM と EM に委ねられます。

##### サブタスクの使用

Issue の洗練を助けるためにサブタスクを使用します。目標は、バックエンド、フロントエンド、UX、プロダクト、ドキュメントを含む機能のすべての側面に関するスレッドディスカッションを含む 1 つの SSOT Issue を持つことです。

##### Issue の洗練と重み付けの手順

エンジニアは:

1. 各マイルストーン前に自分に割り当てた Issue について上記のチェックリストを確認します。
1. [定義に基づいてウェイト](#issue-の重み付け)を追加します。
1. `~workflow::` ラベルを適切なステータスに更新します。例えば:
   - さらなるデザイン洗練が必要な場合は ~"workflow::design"、デザイナーに通知してください。
   - 洗練が完了しウェイトが適用された場合は ~"workflow::ready for development"。これにより実装の準備ができたことを示し、Issue を適切にスケジュールできます。
   - さらなる調査や研究が必要な場合は ~"workflow::planning breakdown"。ステータスは変わらず、PM と EM に通知する必要があります。
1. 洗練と重み付けが完了したら、Issue の割り当てを解除します。

#### Issue の重み付け

使用するウェイトは:

| ウェイト     | 追加調査 | 驚き    | コラボレーション |
| ---------- | ------------------- | ------------ | --------      |
| 1: Trivial（些細） | 期待しない        | 期待しない | 不要  |
| 2: Small（小）   | 可能            | 可能     | 可能      |
| 3: Medium（中）  | 可能性が高い              | 可能性が高い       | 可能性が高い        |
| 5: Large（大）   | 確実          | 確実   | 確実    |

上記のテーブルは文脈依存です。ドメイン知識、経験レベル、GitLab でのキャリア年数により、Issue に追加調査や驚きが必要かどうかについてのエンジニアの見方が変わる可能性があります。

ウェイトは固定ではありません。洗練中に正確に把握するよう最善を尽くしますが、透明性を確保し正確でありたいと考えています。Issue が既存のウェイトに反映されている以上の労力を要している場合、Issue の DRI はウェイトを変更することが奨励されています。必要とされた労力のレベルを正確にドキュメント化したいと考えています。

5 以上のウェイトのものはすべて細分化する必要があります。これらは `ready for development` にすべきではありません。

### 構文の廃止プロセス

CI 構文は進化し続けています。すべてのキーワードを無期限にサポートすることはできないため、キーワードの廃止と削除は避けられません。

GitLab は CI/CD 設定にバージョンシステムを持っていません。そのため、廃止の意図をユーザーに十分に伝え、プロジェクトへの影響を軽減するために必要な予防措置を講じることが重要です。キーワードの廃止はリスクがあります。なぜなら、それを使用しているすべてのパイプラインが壊れ、場合によってはユーザーがパイプラインで使用しているキーワードに気づいていないことがあるためです。以下に説明する廃止プロセスは、CI/CD キーワードの削除に関わるリスクを軽減するための追加手順を持つ[機能の廃止と削除](https://docs.gitlab.com/ee/development/deprecation_guidelines/)プロセスに似ています。

1. 廃止通知 - 構文の削除は破壊的変更をもたらします。廃止プロセスで概説しているように、コミュニティと顧客に通知する必要があります。これは毎月のリリースポストに廃止通知を含めることを意味します。
1. キーワード使用状況の追跡 - キーワード使用状況の追跡はできるだけ早く開始すべきです。これはユーザーへの影響、タイミング、必要な労力を推定するのに役立つ必須ステップです。ユーザーが多くキーワードを使用するほど、それを削除するのにより多くの時間がかかります（`type` キーワードの[削除](https://gitlab.com/gitlab-org/gitlab-foss/-/merge_requests/9766)から[廃止](https://gitlab.com/gitlab-org/gitlab/-/issues/346823)まで 4 年以上かかりました）。
1. アプリ内警告 - パイプラインで廃止予定のキーワードを使用しているユーザーに、削除の計画をアプリ内通知で提供します。顧客は廃止予定のキーワードを使用するパイプラインの各実行時に通知を受け取ります。警告は次の場所に表示されます:
   - パイプラインページとログで実行時に。
   - パイプラインの作成中にパイプラインエディタで。

    このステップは、キーワードの使用率が比較的低い場合はオプションです（影響を受けるユーザーの最小リーチとして ~5% を推奨）。
1. キーワードの削除 - キーワードはコードとスキーマから削除され、メジャーバージョンで行われる必要があります。削除後、キーワードを使用するとリントエラーが発生します。

### ワークフロー

[Pipeline Authoring ワークフロー Issue ボード](https://gitlab.com/gitlab-org/gitlab/-/boards/5726606?label_name[]=group%3A%3Apipeline%20authoring&milestone_title=Started)を使用して、現在のマイルストーンで取り組んでいることを追跡します。

解決する問題が十分に理解され、実装前にソリューションが十分に定義・検証されていることを確保するために、[プロダクト開発フロー](/handbook/product-development/how-we-work/product-development-flow/)に従います。

UX カウンターパートは SSOT デザインの DRI であり、MR でのエンハンスメントディスカッションを作成・リンクされた Issue での後続の取り組みに移す権利があります。

ワークフローラベルを使用して Issue の状態を効率的に伝えます。これらのラベルを使用することで、チーム間の協力が可能になり、Issue の現在の状態が伝わります。洗練されているがスケジュールされていない（バックログにある）Issue には `workflow::scheduling` ラベルを適用する必要があります。

ワークフローの各フェーズを通じた DRI は、ワークフローラベルを最新の状態に保つ責任があります。

#### 非同期 Issue 更新

非同期コラボレーションを最適化するために、特定の Issue またはエピックで完了した進捗を共有する Issue 更新を使用します。

進捗とステータスに関する週次更新は、各 Issue の担当者によって追加されます。進捗がなかった場合、週次更新はスキップしても構いません。更新は、全体の進捗の概要を提供しない関連マージリクエストではなく、Issue で提供する必要があります。これは `workflow::in dev`、`workflow::in review`、または `workflow::design` ラベルの付いた Issue に適用されます。

ステータスコメントには、作業が何パーセント完了しているか、見積もりが正確であるという確信度、および何が行われたかの簡単なメモを含めることができます。複数の DRI が Issue に取り組んでいる場合、複数の更新があっても問題ありません。

非同期更新の一部として、Issue と関連 MR のワークフローラベルが正しく設定されていることを確認することが重要です。

##### 例

```markdown
## Async status update

- Complete: 80%
- Confidence: 90%
- Notes: expecting to go into review tomorrow
```

#### 機能開発の整合

エンジニアリング DRI は `workflow:in dev` フェーズを通じてプロダクトデザイナーと協力し、最初に合意したものとは異なる予期しない動作を示す可能性があるソリューションの問題を早期に発見します。最初の Issue で合意していなかった変更が追加される場合は、フォローアップ Issue を作成し、エンジニアリング DRI はプロダクトマネージャーと協力して次のイテレーションにその Issue をスケジュールするべきです。これにより、[承認よりクリーンアップ](/handbook/values/#cleanup-over-sign-off)に注力し、[低い恥の水準で](/handbook/values/#low-level-of-shame-when-dogfooding)迅速にイテレーションし、合意したことを達成できるようにします。これらのフォローアップ Issue の完了を遅らせないよう注意すべきです。多量の Deferred UX Issue を積み上げないためです。

ソリューションが一貫して合意したデザインと一致しないことが判明した場合、DRI、デザイナー、プロダクトマネージャーでレトロスペクティブを開き、コミュニケーションのギャップがどこにあるかを議論して改善します。特定の Issue の MR に UX 承認を必要とし始める必要があるかもしれません。エンジニアリング DRI が要件を満たすのを支援するためです。

#### Duo エージェンティックチャットプロンプト

[Duo プロンプト](/handbook/engineering/devops/verify/pipeline-authoring/duo-prompts/)を参照してください。

### テクニカルデット

- [テクニカルデット優先順位ボード](https://gitlab.com/gitlab-org/gitlab/-/boards/7735063?label_name[]=group%3A%3Apipeline%20authoring&label_name[]=type%3A%3Amaintenance)を使用してチームのテクニカルデットを追跡します。候補ラベルで今後のマイルストーンを追跡し、現在のマイルストーンと比較します。
- ステージ全体の透明性を高め、コラボレーションが必要な場合に役立てるため、2024 年 8 月から、Pipeline チームのトップ優先テクニカルデットを示す [Verify パイプラインチームテクニカルデットボード](https://gitlab.com/groups/gitlab-org/-/boards/1438885?not%5Blabel_name%5D%5B%5D=group%3A%3Ahosted%20runners&not%5Blabel_name%5D%5B%5D=group%3A%3Arunner&label_name%5B%5D=devops%3A%3Averify&label_name%5B%5D=type%3A%3Amaintenance)を導入しました。

### レトロスペクティブ


<!-- include omitted: includes/engineering/verify-retrospectives.md (no localized version under content/ja/) -->


[現在の Pipeline Authoring レトロスペクティブを表示](https://gitlab.com/gl-retrospectives/verify-stage/pipeline-authoring/-/issues/?sort=created_date&state=opened&label_name%5B%5D=retrospective).

### チームコミュニケーション



#### 共有チームカレンダー

Pipeline Authoring チームには、Time Off by Deel の重要な日程をチームに通知するために [`#g_pipeline-authoring`](https://gitlab.slack.com/archives/C019R5JD44E) Slack チャンネルと統合した共有カレンダーがあります。

`Verify:Pipeline Authoring` カレンダーとの統合方法は[こちら](https://gitlab.com/gitlab-org/ci-cd/pipeline-authoring/-/issues/28)をご覧ください。

## 開発者オンボーディング

[Verify での開発者オンボーディング](/handbook/engineering/devops/verify/#developer-onboarding-in-verify)セクションを参照してください。
