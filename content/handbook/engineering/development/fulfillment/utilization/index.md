---
title: Fulfillment Utilization チーム
description: "GitLab の Fulfillment サブ部門の Utilization チーム"
upstream_path: /handbook/engineering/development/fulfillment/utilization/
upstream_sha: 3480299851f7e2243d4f08b75dac452f89929636
translated_at: "2026-04-28T04:38:02Z"
translator: claude
stale: false
---

## 概要

Utilization チームは、GitLab Core と Fulfillment アプリケーションの間のインターフェースで作業することが多いです。これには、消耗品管理（ストレージ、コンピュート、シートなど）、使用状況レポート、使用状況通知など、[Utilization カテゴリ](/handbook/product/categories/#utilization-group) のコンポーネントが含まれます。お客様は GitLab SaaS、GitLab セルフマネージド、および内部ツールを使用しています。

## ビジョン

Fulfillment のプロダクトビジョンの詳細については、[Fulfillment](https://about.gitlab.com/direction/fulfillment/) ページを参照してください。

Utilization グループは [Utilization カテゴリ](/handbook/product/categories/#utilization-group) を管理しています。

## チームメンバー


<p class="my-3 text-sm text-gray-600 italic">チームメンバー情報は <a href="https://handbook.gitlab.com/handbook/engineering/development/fulfillment/utilization/#team-members" rel="external noopener">原文 (英語)</a> を参照してください。</p>


## 安定したカウンターパート


<p class="my-3 text-sm text-gray-600 italic">チームメンバー情報は <a href="https://handbook.gitlab.com/handbook/engineering/development/fulfillment/utilization/#team-members" rel="external noopener">原文 (英語)</a> を参照してください。</p>


## 作業方法

### 同期時間は貴重

私たちはできる限り [非同期で作業](/handbook/company/culture/all-remote/asynchronous/) しようとしています。しかし、同期コミュニケーションがタスクに適している場合もあります。週次チームシンクミーティングは、勝利を祝い、多くの Issue について素早くコラボレーションし、オールリモート環境で対面する機会となります。

重要なのは、この高帯域幅のコミュニケーションを使用して、チームからの追加的な議論と入力が必要な Issue を確認し、Issue を見積もり、最小限のやり取りで作業を開発できるようにすることです。

#### 時刻とタイムゾーン

Utilization グループは少なくとも 4 つの異なるタイムゾーンにまたがっています。

Utilization チームは毎週火曜日に Zoom で米国東部時間の午前 9 時（PT 午前 6 時 / UTC 午後 2 時）に、チームメイトのタイムゾーンに対応するためにミーティングを開催します。

#### ミーティングの録画

`[REC]` ミーティングプレフィックスを使用して、ミーティングはスケジュールされたパイプラインによって 1 時間ごとに [Google Drive の GitLab Videos Recorded フォルダ](https://drive.google.com/drive/u/0/folders/0APOeuCQrsm4KUk9PVA) に自動的にアップロードされます。すべてのチームメイトは代替ホストとして設定されており、エンジニアリングマネージャーが不在の場合でもミーティングを録画できます。録画リンクは録画が利用可能になったらアジェンダに配置されます。

私たちは通常、チームシンクミーティングを GitLab Unfiltered YouTube チャンネルに公開しません。なぜなら、製品価格や他の内部イニシアチブに関連する機密 Issue について話し合うことが多いからです。安全でない情報開示のリスクを冒すよりも、Zoom または Google Drive に録画リポジトリを 1 つ持つことを望んでいます。

#### ミーティングの準備

すべてのチームメンバーは非同期で [週次アジェンダ](https://docs.google.com/document/d/10Fdt-tx1_G1NFoAPv6wU5BeEQeXsPq1UZXkIPfuF3Vk/edit?usp=sharing) にトピックを追加することが奨励されています。アジェンダが空の場合は、ミーティングをキャンセルします。

### 非同期更新

#### エンジニア

エンジニアは、進捗があった場合にアクティブな割り当て済み Issue に非同期 Issue 更新を提供する責任があります。Fulfillment サブ部門全体の非同期更新の [テンプレートとガイダンス](/handbook/engineering/development/fulfillment/#weekly-async-issue-updates) に従い、更新は少なくとも週次で行われる必要があります。これらの更新は、コラボレーター、ステークホルダー、コミュニティコントリビューターが Issue の進捗状況を把握するのに役立ちます。

週次の Issue 更新に加えて、エンジニア DRI は自分が集中している作業の主体に対して週次のステータス更新も提供するよう求めています。

- **いつ**: 毎週火曜日を目標にします
- **誰が**: 現在のマイルストーン優先プロジェクトに対して DRI としてリストされている人
- **何を**: 更新には達成事項、ブロッカー、およびタイムラインに対して作業がどのように進んでいるかを含める必要があります。ボーナスとして、#s_fulfillment_demo Slack チャンネルに投稿されたデモへのリンクも有益です。
- **どこで**: 作業の主要/親エピックのコメントに提供し、Alex と James にタグを付けてください。

これらの更新で使用するテンプレートの例:

```markdown
# BE 週次更新 YYYY-MM-DD

* **タイムラインへの確信度**: :thumbsup:
* **完了率**: X%（Y ウェイトクローズ / Z 総ウェイト）
* **ブロッカー**: なし
* **達成事項**:
  * 3 MR 作成
  * 1 Issue クローズ

cc/ @alex_martin @csouthard
```

最初は `% Complete` に以下の式を使用します（5 の倍数に切り捨て）:

```markdown
(クローズした Issue ウェイト / 総 Issue ウェイト) * 100
```

#### エンジニアリングマネージャー

##### マイルストーン

エンジニアリングマネージャーは、現在のマイルストーン計画 Issue の以下のトピックについて各週末までにマイルストーンの進捗を報告します:

```markdown

**クローズした総ウェイト** XX

**オープンな総ウェイト** XX（XX 開発中）

**クローズした Deliverable ウェイト** XX

**オープンな Deliverable ウェイト** X（XX 開発中; X ブロック中）

**ブロック Issue** X 件（X ウェイト）リンク、説明
```

##### OKR

エンジニアリングマネージャーは、[Objectives and Key Results プロジェクト](https://gitlab.com/gitlab-com/gitlab-OKRs) の関連作業アイテムのコメントとして [OKR](/handbook/company/okrs/) の進捗を 2 週間ごとに報告します。

現在の OKR: [Utilization のラベルが付いた作業アイテム](https://gitlab.com/gitlab-com/gitlab-OKRs/-/issues/?sort=created_date&state=opened&label_name%5B%5D=group%3A%3Autilization&first_page_size=100)

### 休暇（PTO）の取得

[休暇を取る](/handbook/people-group/time-off-and-absence/time-off-types/) ことは、休息、リセット、バーンアウトの回避、家族のケアなどのために重要です。[家族と友人を第一に、仕事は第二](/handbook/values/#family-and-friends-first-work-second) という運営原則に従い、自分や家族のために時間を取ることが奨励されています。ガイダンスとして、取得する日数の [2 倍の日数前](/handbook/people-group/time-off-and-absence/time-off-types/) にマネージャーに PTO の意向を伝えてください。

外出中は、他の人に [明確に](/handbook/people-group/time-off-and-absence/time-off-types/) 可用性を伝えてください。PTO 通知を提出する際には以下の手順が必要です。

1. Time Off by Deel で、PTO 中のバックアップとしてロールを選択してください。チームの Slack チャンネル #g_utilization をバックアップとして割り当て、ワークロードを分散させてください。現在進行中の作業に代替 DRI が必要かどうかを検討し、それらの特定の Issue には 1 人を割り当ててください。

2. Fulfillment 共有カレンダーを Time Off by Deel の設定に追加し、PTO イベントがチームの全員に表示されるようにしてください。カレンダー ID は `gitlab.com_7199q584haas4tgeuk9qnd48nc@group.calendar.google.com` です。ハンドブックで [PTO](/handbook/people-group/time-off-and-absence/time-off-types/) について詳細を読んでください。

3. プロフィール写真をクリックして「ステータスを編集」を選択し、GitLab.com のステータスを外出中の日付で更新してください。例: `OOO Back on yyyy-mm-dd`。ステータスメッセージに `OOO` を追加すると、[レビュワールーレット](https://docs.gitlab.com/ee/development/code_review.html#reviewer-roulette) に表示されなくなります。

4. 計画された PTO が 3 日以上の場合は、[カバレッジ Issue を作成](https://gitlab.com/gitlab-org/fulfillment/meta/-/issues/new?issuable_template=em_coverage) して、誰がどこで助けているか、どのように互いにサポートできるかを示してください。計画された PTO にカバレッジ Issue が必要かどうか不明な場合は、エンジニアリングマネージャーと相談してください。

## マイルストーン計画

### 主要日付

| 日付 | イベント |
| ------ | ------ |
| マイルストーンが終わる週の月曜日 | **PM** が計画 Issue を作成し、レビューと予備的な重み付けのために計画 Issue で EM にピングします。<br><br> **EM と PM** が容量を計算し、計画 Issue に追加します。 |
| マイルストーンが終わる週の月曜日から金曜日 | **EM** と **IC** がそれぞれのバックエンドとフロントエンドビルドボードの Issue にウェイトを追加します。 |
| マイルストーンが終わる金曜日 | **PM** が Issue に ~Deliverable ラベルを追加します。 |
| マイルストーンが終わる金曜日 | マイルストーン最終日<br><br> **PM** が現在のマイルストーンからのスリッページを反映するために現在および次回の Issue を調整します。必要に応じて ~Deliverable ラベルが調整されます。 |
| 次のマイルストーンに最も近いチームシンク | **PM** が次のマイルストーン計画をチームでレビューします。 |
| 月の第 3 木曜日 | リリース |

### Issue の優先順位付け方法

[クロスファンクショナル優先順位付け](/handbook/product/product-processes/cross-functional-prioritization/) プロセスは、私たちの優先順位付けフレームワークに沿っています。

#### 責任

- プロダクトマネージャーが `type::feature` Issue の優先順位を付けます
- エンジニアリングマネージャーが `type::maintenance` Issue の優先順位を付けます
- Software Engineer in Test が `type::bug` Issue の優先順位を付けます
- プロダクトデザイナーが `bug::ux` Issue の優先順位を付けます（[System Usability Scale (SUS)](/handbook/product-development/how-we-work/issue-triage/#ux-bugs)）

#### メカニクス

- チームは [このダッシュボード](/handbook/product/groups/product-analysis/engineering/dashboards/#dashboards) をレビューし、バグ、メンテナンス、機能の MR の分布を表示して、チームの取り組みが目標優先順位比率（機能 60% / メンテナンス 30% / バグ 10%）に適切に沿っているか確認します。
- チームは [この優先順位付けボード](https://gitlab.com/gitlab-org/gitlab/-/boards/4416231?label_name%5B%5D=group%3A%3Autilization) を使用して、上位の機能、バグ、メンテナンス、および [System Usability Scale (SUS)](/handbook/product-development/how-we-work/issue-triage/#ux-bugs) に影響する Issue を順序付けします。
- バグを優先度で素早く確認・管理するには、[このボード](https://gitlab.com/groups/gitlab-org/-/boards/2874336?label_name[]=group%3A%3Autilization&label_name[]=type%3A%3Abug) を使用できます。バックログやオープン率など、次のマイルストーンの望ましいバグ割合を決定する要因を含むバグの詳細情報は、この [ダッシュボード](https://10az.online.tableau.com/t/gitlab/views/OpenBugAgeOBA/BugPrioritizationDashboard) に表示されます（フィルターから Utilization を選択）。
- チームは現在の優先順位付けスキームを文書化および議論する優先順位付け Issue でコラボレーションします。

### 計画 Issue

- [現在の計画 Issue](https://gitlab.com/gitlab-org/fulfillment-meta/-/issues/?sort=created_date&state=opened&label_name%5B%5D=group%3A%3Autilization&label_name%5B%5D=Planning%20Issue&first_page_size=100)
- [アーカイブ 13.8 から現在まで](https://gitlab.com/gitlab-org/fulfillment-meta/-/issues/?sort=created_date&state=closed&label_name%5B%5D=group%3A%3Autilization&label_name%5B%5D=Planning%20Issue&first_page_size=100)

### Issue の精査方法

ほとんどの Issue では、作業を開始する前に見積もりと作業の分解を提供するために予備的な調査が必要な場合があります。特定の Issue の作業範囲が複数の分野（ドキュメント、デザイン、フロントエンド、バックエンドなど）にまたがり、それらの分野で大きな複雑さを伴う場合は、各分野に個別の Issue を作成することを検討してください。

エンジニアは、割り当てられた Issue を評価、精査、重み付けするために各マイルストーンで約 4 時間を割り当てることが期待されます。Issue の精査は、問題文が明確であり、概算の工数見積もりを提供するためにデザインが利用可能（該当する場合）であることを確認することです。精査中のソリューション検証は意図していません。

Issue に追加の `~frontend`、`~backend`、`~Quality`、`~UX`、または `~documentation` レビューが必要な場合は、Issue の仮定を検証し、見積もりを提供するために必要な不足している詳細を提供するために、それぞれの個人に割り当てられてコラボレーションします。

<span id="checklist-for-refining-issues"></span>

#### Issue 精査のチェックリスト

1. Issue の説明に問題文がありますか？
1. Issue には、誰でも理解できるほど十分に説明された期待される動作がありますか？
1. Issue はステークホルダー（例: BE、FE、PM、UX、テクニカルライター）を明確に定義していますか？ステークホルダーが明確でない場合（特に FE でも BE でもない場合）、PM と EM の両方にメンションして明確化を求めてください。
1. Issue の説明に提案がありますか？
    - *ある場合*:
    1. 提案は問題文に対応していますか？
    1. 実装の意図しない副作用はありますか？
    - *ない場合*:
    1. 見積もりステップで提案を作成するか、主流の提案を要約してください。
1. Issue には実行すべき仕事に合った適切なラベル付けがありますか？（例: バグ、機能、パフォーマンス）

このチェックリストの質問に答えることは誰でも参加できますが、最終的な決定は PM と EM に委ねられます。

<span id="updated-refinementestimation-template"></span>

##### 更新された精査/見積もりテンプレート

```markdown
### 精査 / 重み付け

<!--
開発の準備ができているとは、以下の質問に「はい」と答えることを意味します：

- Issue の説明に問題文がありますか？
- Issue には、誰でも理解できるほど十分に説明された期待される動作がありますか？
- Issue はステークホルダー（例: BE、FE、PM、UX、テクニカルライター）を明確に定義していますか？
- Issue の説明に提案がありますか？
- Issue には実行すべき仕事に合った適切なラベル付けがありますか？（例: バグ、機能、パフォーマンス）
- この Issue は十分に小さいですか？そうでない場合は、より小さな Issue に分割してください
- 正しいドメイン（例：フロントエンド、バックエンド）に割り当てられていますか？そうでない場合は、それぞれのドメインの 2 つの Issue に分割してください
- Issue は明確で理解しやすいですか？そうでない場合は、さらなる明確化を求め、回答を受け取ったら説明を更新してください
- 他の Issue との重複がないかレビューされ、必要に応じて対応されていますか？
- Issue のウェイトはチームの入力と知識に基づいて更新されていますか？

2 つ以上の MR が必要な場合は、説明に次のようなテーブルを追加することを検討してください（例：`実装計画` の下）。

| 説明 | MR |
|-|-|
|||

ステータスの追跡に役立ちます。
-->

- [ ] 開発の準備ができている
- [ ] ウェイトが割り当てられている
- [ ] MR の数が記載されている
- [ ] テストの考慮事項が必要
- [ ] ドキュメントの更新が必要
- [ ] 現在のマイルストーンの Issue との重複を確認し、「linked」、「blocks」、「is blocked by」としてマークした

**理由：**

<!--
この Issue をどのように分解するかについての初期的な考えを追加してください。箇条書きで構いません。

これはおそらく以下のようなコード変更が必要になります：

- ヘックスドライバーをソニックスクリュードライバーに置き換える
- バックアップを磁気テープに書き直す
- セマフォフラグを上げて他の人に警告する

以前の例へのリンク。先行技術についての議論。提案されたデザインのシンプルさ/複雑さの例に注目する。
-->
```

#### Issue の精査と重み付けの手順

1. 月の 10 日までに、エンジニアは EM または PM によってマイルストーン候補の Issue に割り当てられます。これらの Issue には `needs weight` と `workflow::planning breakdown` ラベルが付いているはずです。[このボード](https://gitlab.com/groups/gitlab-org/-/boards/4717996?weight=None&label_name[]=group%3A%3Autilization&label_name[]=needs%20weight) でそれらの割り当てを追跡します。
1. 次の 5 日間（多くの場合 10 日から 14 日の間）に、エンジニアは見積もりを提供し、Issue を精査・分解するよう取り組みます。
1. [上記のチェックリスト](#checklist-for-refining-issues) を使用して Issue を精査します。
1. Issue をコンポーネントに分割します。例えば、バックエンドの作業がフロントエンドの作業を開始する前に完了する必要がある場合。詳細は [以下](#splitting-issues) を参照してください。
1. 関連する Issue を更新し、適切な場合はブロック済みとしてマークします。
1. 定義（[以下参照](#estimation)）に基づいてウェイトを追加します。
1. `~workflow::*` ラベルを適切なステータスに更新します。例えば:
    - `~"workflow::design"` - さらなるデザイン精査が必要な場合。デザイナーに通知します。
    - `~"workflow::ready for development"` - 精査が完了してウェイトが適用された場合。実装の準備ができており、Issue を優先順位付けできるというシグナルです。
    - `~"workflow::planning breakdown"` - 広範な調査やリサーチが必要な場合。ステータスは変わらず、PM と EM に通知する必要があります。Issue は他のユーザーと協力して Issue の細かい点を明確にしている間はこのワークフローステータスに留まります。
1. 精査と重み付けが完了したら、Issue から自分を割り当て解除します。

<span id="splitting-issues"></span>

#### Issue の分割

Issue にいくつかのコンポーネント（例: `~frontend`、`~backend`、または `~documentation`）がある場合は、別々の実装 Issue に分割することが有用な場合があります。元の Issue は機能に関するすべての議論を保持し、別々の実装 Issue が各分野で行われた作業を追跡するために使用されます。これにより、いくつかの利点があります:

- Issue ごとに DRI が 1 人になります。
- ワークフローラベルと健全性ステータスがより適切になります。
- Issue をより正確に重み付けできます。
- 一方の実装を他方のブロッカーとしてマークできます。
- 各機能グループでどの作業を引き受けられるかが見えやすくなります。
- 複数のマイルストーンにわたって作業をスケジュールできます。

#### Issue の再評価

最初の精査とエンジニアが Issue を取り上げる間に長い時間が経過することがあります。コードベースが更新される頻度を考えると、実装計画やウェイトが不正確になることや、場合によっては Issue が不要になることもあります。

その経過時間が大きい場合（例: 1 年）は、上記の [精査/見積もりテンプレート](#updated-refinementestimation-template) を使用して精査プロセスを実行し、Issue が引き続き関連性があり正確であることを確認するために再評価する必要があります。

### メンテナンス Issue

[Martin Fowler の技術的負債象限](https://martinfowler.com/bliki/TechnicalDebtQuadrant.html) と同様に、[アイゼンハワーメソッド](https://en.wikipedia.org/wiki/Time_management#The_Eisenhower_Method) を再利用して、メンテナンス Issue の分類と優先順位付けを指導します。`緊急性` と `重要性` の 2 軸フレームワークを使用して、メンテナンス Issue（リファクタリング、意図的または意図しない技術的負債など）を優先順位付けします。これは意思決定のためのフレームワークです。

#### `緊急性`: "*すぐに必要ですか？*"

範囲: 非緊急または緊急

*緊急性* はいくつかの方法で定量化することもできます。一つの方法は顧客への影響に基づいています。例えば、エラー数（5xx コードエラー、ユーザー向けの例外）、エラーバジェット（影響が大きいほど緊急性が高い）、または Issue に影響を受ける顧客数を使用できます。顧客以外の緊急性には、パッケージやジェムのアップグレードなど、変化主導の変更のタイムラインが含まれる場合があります。

定義する質問:

1. 「次の 1 マイルストーンでこの Issue を修正しなければどうなりますか？」
1. 「ビジネスニーズはまだ存在しますか？これは顧客によってまだ積極的に使用されていますか？」

#### `重要性`: "*どれほど悪いですか？*"

範囲: 重要でないまたは重要

重要性はより主観的になりえます。あなたの視点から、相対的な重要性はあなたの役割や分野のレンズを通してフィルタリングされます。

客観的に重要と合意できるカテゴリがいくつかあります。これには、欠陥、システムパフォーマンス（REST および GraphQL API、データベーストランザクション効率）、テストの欠如が含まれます。

定義する質問:

1. 「影響はローカル、グローバル、またはシステミックですか？」
1. 「可能な解決策の投資対効果はメンテナンスコストより大きいですか？」
1. 「これにより新機能を届けたり、より速く届けたりする能力がブロックされますか？」

#### メンテナンス Issue のトリアージ

エンジニアは上記のスキームを使用してメンテナンス Issue のトリアージと以下のラベルの適用に責任があります。時々、エンジニアリングマネージャーもエンジニアからの検証とサポートを受けてメンテナンス Issue をトリアージすることがあります。すべてのメンテナンス Issue には以下のスコープ付きラベルの 1 つが必要です。

- **urgent-important** は `priority::1` に変換されます
- **not-urgent-important** は `priority::2` に変換されます
- **urgent-not-important** は `priority::3` に変換されます
- **not-urgent-not-important** は `priority::4` に変換されます

#### 現在のマイルストーンへのメンテナンス Issue の追加

各マイルストーンで、各分野のエンジニア数と同等以上のメンテナンス Issue を（最低限）割り当てる必要があります。これらは上記で説明した優先順位付けスキームに基づいて選択する必要があります。

#### ラベルとその使用方法

Issue やマージリクエストに適用できるラベルが多数あります。Issue ワークフローラベルに加えて、Issue *と* マージリクエストの両方に適用すべき最低限の基本ラベルは以下の通りです:

- タイプ（`type::feature`、`type::bug`、または `type::maintenance`）
- 領域を所有するステージ（`section::fulfillment`）
- 領域を所有するグループ（`group::utilization`）
- 分野（`frontend`、`backend`、`database`、`UX`、`documentation`）
- Issue がアプリケーションセキュリティに関連する場合は `security`、この作業が破壊的変更と見なされる場合は `breaking change`

該当する場合に Issue と MR に適用すべき拡張ラベルリスト:

- UI コンテキスト: `usage_quota:storage`、`usage_quota:pipeline`、`usage_quota:transfer`、`usage_quota:other`

`workflow::planning breakdown` ラベルはプロダクト主導ですが、プロダクト、UX、エンジニアリングの共同作業です。このラベルを使用して、上記で説明したように Issue の精査、見積もり、分解を促進しています。精査プロセス中、チームがその取り組みに貢献する方法の例:

- プロダクトが問題文の定義または明確化。プロダクトと UX は必要に応じて問題検証でコラボレーションします。
- 必要に応じた UX デザインの提供。
- `~UX` ラベルの付いた Issue を監視することで、ワークフロー/ユーザーエクスペリエンスの変更がある Issue を UX がレビューします。
- エンジニアリングが記述された通りに Issue の説明を明確にし、プロダクトと UX が十分な詳細を提供した後に Issue の精査と重み付けを行います。

スパイクには `spike`、`feature::enhancement`、`type::feature` のラベルが付けられます。依存関係を更新したり、基盤となるライブラリのバージョンをアップグレードするスパイクには `spike`、`maintenance::dependency`、`type::maintenance` のラベルが付けられます。

<span id="estimation"></span>

### 見積もり

私たちは、Fulfillment ハンドブックページで提供されている [見積もりルーブリック](/handbook/engineering/development/fulfillment/#estimation) に従い、Issue のウェイトを主に必要な変更の複雑さと幅に関連付けます。

一般的なルールとして、推定ウェイトが `5` を超える Issue は、より小さく、よりイテレーティブな Issue に分解する必要があります。見積もりのために Issue に割り当てられたエンジニアが Issue の分割方法を提案します。エンジニアが分割がどのように行われるべきかを明確に理解している場合は、子 Issue の見積もりと親 Issue へのコメントを残しながら、積極的に Issue を分割するべきです。分割の結果が 4 つ以上の Issue になる場合は、エピックの作成を検討してください。

見積もりは以下を助けるはずです:

- Issue の目標をより良く理解する
- 解決策がどのようなものか理解するが、必ずしもすべての実装の詳細ではない
- ブロッカーが存在するかどうかを評価する

見積もりは完璧ではなく、最も完璧な見積もりを提供するために何時間も費やすべきではありません。その結果、以下は期待しません:

- 実装の詳細を厳密に精査する
- すべてのブロッカーを捕捉する
- 提案された解決策が正しいものであることを証明する

開発中に、Issue を再形成したり、解決策を変更したり、延期したりすることがあります。たとえ成果が当初の想定から変わったとしても、Issue に貢献することに誇りを持っています。

**見積もりレビュー**

見積もりを盲目的に選択して共有し、グループ全体の合意に達するプランニングポーカーセッションのような同期ミーティングは持っていません。この活動は見積もりを他の方法よりも魅力的で正確にします。他の GitLab の活動と同様に、これを非同期で行おうとしていますが、少数のチームメンバーに限定しています。

共有されたディスカッションを通じて見積もりの確信度を高めるために、別のチームメンバーに Issue と見積もりの根拠を簡単にレビューしてもらいますが、`details` ブロックで見積もりのウェイトを非公開にします（以下参照）。両方のチームメンバーが同意するか、どちらかに動かされた場合はその見積もりを使用します。新しい情報、経験、意見の結果として提供された見積もり値に何らかの不一致がある場合は、どちらかの値を選択するか、見積もりフレームワークに収まる平均値を選択するか、エンジニアリングマネージャーなどのサードパーティの意見を求めるオプションがあります。

```html
<details>
  <summary>見積もり</summary>
  estimate: 2
</details>
```

見積もりプロセス全体を通じて、以下の GitLab サブバリューを考慮してください:

- [行動バイアス](/handbook/values/#operate-with-a-bias-for-action): より多くのコンテキストを持つ人が見積もりを主導する必要があります
- [すべてはドラフト](/handbook/values/#everything-is-in-draft): 他のチームメンバーは [説明](/handbook/values/#say-why-not-just-what) を添えて見積もりへの [提案](/handbook/values/#make-a-proposal) を行えます
- [恥の低いレベル](/handbook/values/#low-level-of-shame-when-dogfooding): 見積もりは決して完璧ではありませんが、始めるのに十分な見積もりを素早くイテレーションできます
- [考えが変わったことを明示する](/handbook/values/#articulate-when-you-change-your-mind): 合意見積もりに近づくにつれて、以前の立場がもはや現在の立場でないことを明確に明示してください

#### スパイク

マイルストーン*中*に [スパイク](/handbook/product/product-processes/#spikes) を使用して、機能やその他の複雑な作業の計画と実行に役立つ [設計ドキュメント](https://www.industrialempathy.com/posts/design-docs-at-google/) または類似の成果物を作成します。これは、スパイクの説明からの質問への回答の要約、作成されたコンセプト実証 MR へのリンク、ロードマップまたはその他の詳細なアウトラインを含む Issue に限定されませんが、そのようなものです。それらは他の作業と同様に割り当てられ、マイルストーンの容量を消費します。

スパイクは通常 `Deliverable` Issue と見なされ、新しいスパイク Issue を作成するために [このテンプレート](https://gitlab.com/gitlab-org/customers-gitlab-com/-/blob/main/.gitlab/issue_templates/spike_template.md)（内部専用）を使用します。

スパイクに必要な工数の見積もりは、複雑さを正確に見積もることができないため、機能作業ほど明確に設定または定義されていません。スパイク Issue にウェイトを追加する際には以下の基準を考慮してください。

- スコープ
- 期間（タイムボックス）
- 成果 / 成果物 / 成果物の作成

機能作業に使用するフィボナッチスケールと同じ 1（低、迅速、容易）から 5（大、長、困難）を使用します。歴史的に、[スパイク](https://gitlab.com/dashboard/issues?scope=all&state=closed&label_name[]=group%3A%3Autilization&label_name[]=spike) を 5 以上に見積もったことはありません。

**ガイドライン**

- スパイクは通常、エンジニアからの明確な所有権を確保するために Deliverable としてマークされます。
- スパイクは通常、短期間（時には 1 週間、1 マイルストーン以上にはならない）にタイムボックスされます。
- 次のマイルストーンの計画前に調査が完了するように、マイルストーンの最初にスパイクをスケジュールするようにしてください。
- 制限: 1 マイルストーンにつき最大 2 つのスパイク。
- 通常、複数のチームメンバーがスパイクでコラボレーションします。複数の異なる視点を確保し、調査を集中的かつ効率的に保ちたいと考えています。
- スパイクは両方の視点から Issue を考慮するために少なくとも 1 人のフロントエンドと 1 人のバックエンドエンジニアに割り当てるべきです。そうでない場合は、それらの分野に沿ってスパイク Issue を分割できます。

## 「次は何を作業すべき？」

### このマイルストーンの優先事項は何ですか？

- `P1/S1` バグタイプの Issue を受け取ると、他の計画された Issue より優先されます。
- 特定のマイルストーンの最高優先事項は `Deliverable` と `group::utilization` のラベルが付いた Issue です。
- すべての `Deliverable` Issue が割り当てと `workflow:in dev` ステージ以降によって引き受けられたら、それぞれのボードの現在のマイルストーン列から引き出すべきです。現在のマイルストーン列はプロダクトマネージャーによって毎日スタックランク付け（またはレビュー）されるため、各チームメンバーは既に優先順位が付けられていることを期待して列のトップから引き出すことができます。
- 割り当てられた見積もり作業を完了させます。
- Issue バックログを精査します。
- `Stuff that should just work`[^stsjw-1]、予定外の作業、または他の関心領域。

DRI は選択した Issue に自分を割り当てます。これは、Issue を最初に重み付けと精査を行った個人が DRI とは異なる場合に備えて、ウェイトと提案を再評価するよい機会でもあります。私たちはイテレーションを目指しており、マイルストーン内でユーザーにできる限りの価値を届けるために Issue を分解することを望んでいます。つまり、新しい Issue を取り組み始めるときにより効率的な進め方が見えた場合は、コメントを残してよりイテレーティブな価値を届けるために提案を更新することができます。

[^stsjw-1]: プロジェクトへの小さな改善はマイルストーンに予定外の作業として追加できます。小さなバグを解決したり、フレーキーなテストをすぐに修正したりすることが `stuff that should just work` ラベルの使用例です。

### フロントエンド作業のブロック解除

フロントエンド Issue に取り組む容量が高いことを考慮して、フロントエンドエンジニアが自分のタイムゾーンのバックエンドエンジニアにピングしてブロッカーやバックエンドの依存関係をより速く解決するために以下のシステムを使用できます:

![Fe-Be-Priority-Heatmap](/images/handbook/engineering/priority-heatmap.png)

プロジェクトまたは OKR の優先度に応じて、フロントエンドエンジニアはバックエンドの作業の優先度が高い場合を除いて、現在のプロジェクトに関係なくバックエンドエンジニアにヘルプを求めることができます。上記の表で、緑のセルはフロントエンドエンジニアがプロジェクトの DRI ステータスに関係なくバックエンドエンジニアにヘルプを求めることができる時間を示し、黄色のセルはブロックされている場合に EM にエスカレーションするか、プロジェクトのバックエンド DRI がヘルプを提供するのを待つ必要がある場合があります。

## トリアージ

以下のリストは、私たちが積極的に Utilization の問題を特定してトリアージする Sentry やその他のツールへのリンクです。積極的なトリアージは、より安全で堅牢なアプリケーションを提供するだけでなく、フィーチャーフラグの後ろから機能を公開したり、リファクタリングを導入したりする際に特に、より良いユーザー体験を提供します。これは [行動バイアス](/handbook/values/#operate-with-a-bias-for-action) サブバリューに傾倒し、アプリケーションパフォーマンスへの認識を高めます。

### 確認場所の候補リスト

| 対象 | リンク | 備考 |
| - | - | - |
| CustomersDot 同期 | [Sentry](https://sentry.gitlab.net/gitlab/customersgitlabcom/?query=is%3Aunresolved+UpdateGitlabPlanInfoWorker) | `UpdateGitlabPlanInfoWorker` クラスは CustomersDot と GitLab 間のデータ同期に使用されます |
| GitLab サブスクリプション | [Sentry](https://sentry.gitlab.net/gitlab/gitlabcom/?query=is%3Aunresolved+subscription) | コントローラーによってさらに絞り込めます（例: `SubscriptionsController`） |
| 課金エラー | [Sentry](https://sentry.gitlab.net/gitlab/gitlabcom/?query=is%3Aunresolved+billing) | コントローラーによってさらに絞り込めます（例: `Groups::BillingsController`、`Projects::BillingsController`） |
| Rails ログ | [Kibana](https://log.gprd.gitlab.net/goto/c97cd8d278b9cae18c8588c85a82a2d6) | 過去 7 日間の Utilization 機能カテゴリの Rails ログ |
| Sidekiq ログ | [Kibana](https://log.gprd.gitlab.net/goto/7fe39288bc23a368ddbec6ed369c3ab2) | 過去 7 日間の Utilization 機能カテゴリの Sidekiq ログ |
| Billable Member API | [Grafana ダッシュボード](https://dashboards.gitlab.net/d/api-rails-controller/api-rails-controller?orgId=1) | - |
| CustomersDot バグ Issue | [Issues](https://gitlab.com/gitlab-org/customers-gitlab-com/-/issues?label_name[]=type::bug&label_name%5B%5D=group%3A%3Autilization&scope=all&sort=created_date&state=opened) | - |
| GitLab バグ Issue | [Issues](https://gitlab.com/gitlab-org/gitlab/-/issues?label_name[]=type::bug&label_name%5B%5D=group%3A%3Autilization&scope=all&sort=created_date&state=opened) | - |

### Sentry から直接 Issue を作成する

Sentry には、見つけたエラーに対して Issue を作成する方法があります。

例: https://sentry.gitlab.net/gitlab/customersgitlabcom/issues/2505559/?query=is%3Aunresolved%20UpdateGitlabPlanInfoWorker

右サイドバーのリンクを確認してください:

![''](/images/engineering/development/fulfillment/utilization/sentry_issue_creator.png)

両方のリンクは同じに見えますが、最初のリンクはセキュリティリポジトリでの Issue 作成用であり、**2 番目はプロジェクト**（CustomersDot/GitLab）用であるはずです。

## サポートリクエスト

Fulfillment は、ヘルプリクエストを追跡・管理するために [Support チームとの新しい共同プロセス](https://gitlab.com/gitlab-com/fulfilment-sub-department/section-fulfilment-request-for-help#how-to-submit-a-request-for-help-to-the-fulfilment-section-development-team) を持っています。専門的なスコープ付きラベル `~"Help group::Utilization"` があります。[Issues](https://gitlab.com/gitlab-com/fulfilment-sub-department/section-fulfilment-request-for-help/-/issues) は同じプロジェクトで生成されます。

以前のリクエストが追跡されている他のボード:

- ボード: [重要度別バグ](https://gitlab.com/groups/gitlab-org/-/boards/4373035?label_name%5B%5D=group%3A%3Autilization&label_name%5B%5D=type%3A%3Abug)
- ボード: [重要度別機能](https://gitlab.com/groups/gitlab-org/-/boards/4373035?label_name%5B%5D=group%3A%3Autilization&label_name%5B%5D=type%3A%3Abug)

## イテレーション

[イテレーション](/handbook/values/#iteration) は [効率性](/handbook/values/#efficiency) を促進し、[結果](/handbook/values/#results) を解き放つカギですが、内面化し実践するのは非常に難しいものです。[開発部門の主要メトリクス](/handbook/engineering/development/performance-indicators/#development-department-mr-rate) に従い、小さく集中した MR を届けることを目指しています。

### 模範的なイテレーションの試み

- [エピック GitLab.com 課金対象メンバーリスト](https://gitlab.com/groups/gitlab-org/-/epics/4547)
  - <https://gitlab.com/gitlab-org/gitlab/-/issues/321560>
  - <https://gitlab.com/gitlab-org/gitlab/-/issues/324658>
  - <https://gitlab.com/gitlab-org/gitlab/-/issues/325412>
  - <https://gitlab.com/gitlab-org/gitlab/-/issues/321560#note_543385756>
- [エピック 期限切れの SaaS サブスクリプションは無料プランに戻るべき](https://gitlab.com/groups/gitlab-org/-/epics/4627)
- [期限切れのサブスクリプション](https://gitlab.com/gitlab-org/customers-gitlab-com/-/issues/3112#note_596972724)

### イテレーションふりかえり

マイルストーンふりかえりと同様のプロセスに従い、四半期ごとに [イテレーションふりかえり](https://gitlab.com/gitlab-com/www-gitlab-com/-/merge_requests/82623) を行います。

#### 2021 年 5 月

[2021 年 5 月](https://gitlab.com/gitlab-org/fulfillment-meta/-/issues/234)

**主要な学び**

- ブロッカーを Issue/エピック分解の自然な境界として見つける
- 届けられることを確保するために意図的にスコープをカットする。できるだけ早くスコープをカットするようにする。
- 見積もりに [精査テンプレート](/handbook/engineering/development/fulfillment/#estimation-template) を使用することを積極的に行う。
- 最大限の効率のために、ドメイン知識と互換性のあるタイムゾーンを持つレビュワー/メンテナーを見つけることを忘れないこと - [MR レビューガイドライン](/handbook/engineering/workflow/code-review/#domain-experts) も参照
- 解決策のコンセプト実証を早期にフィードバックを得るために他の人と共有する
- 受け入れ可能な部分的な解決策を検討する - 大多数のケースをカバーし、可能であれば次のイテレーションにエッジケースを延期する

## アーキテクチャレビュー

毎月、アーキテクチャレビューを実施します。

レビュープロセスは、現在と将来の設計の両方の観点からのレビューを対象としています。
つまり、グループはレビュー対象のコンポーネントが特定の方法で行われるべきかどうかを決定します。
これは必ずしも「何かを行うべきか」ではありませんが、そのように使用することもできます。また、広範囲にわたる変更を持つ大きなアーキテクチャ変更を提案するため、または [進化ワークフロー](/handbook/engineering/architecture/workflow/) プロセスでのブループリント構築の前置きとして使用することもできます。

タイムラインには非同期と同期の両方のステップがあります。小規模なレビューの場合は、すべてのステップを非同期で完了することも可能です。同期時間が貴重であることはすでに確立されています。このプロセスは、ふりかえりやワーキンググループで使用してきた類似のパターンに従います。

### タイムライン

1. チームがレビュー Issue を作成します
   1. [Utilization チームプロジェクト](https://gitlab.com/fulfillment-group/utilization-group/team-project) と、以下の [Issue テンプレート](https://gitlab.com/fulfillment-group/utilization-group/team-project/-/blob/main/.gitlab/issue_templates/architecture_review.md) と [エピック](https://gitlab.com/groups/fulfillment-group/utilization-group/-/epics/2) を使用できます
   1. レビュワー（Issue の著者と DRI）を見つけます
      1. オプションで、レビューを進行する人（レビューミーティングのスケジュール、メモの作成、時計とディスカッションの管理）を見つけます。
      小規模なレビューの場合、レビュワーが進行役も務めます。
   1. [懸念事項、機能、提案など] を要約します。1 段落に限定しますが、問題全体を扱います。
   トピックはチームとレビュワーの間で合意する必要があります。
1. チームは非同期で Issue に貢献し、Issue の説明で特定された [懸念事項、機能、提案など] を文書化する追加の詳細を提供します。
   1. 問題空間を要約します。定義、用語、このトピックを取り上げる主な動機。
   1. 現在の問題または将来の改訂に直接影響を受ける人をリストアップします。安定したカウンターパート（例: サポート、セールス、クロスステージ DRI）を引き込んで、影響をより理解します。
   1. 終了基準を設定します - 完了時に何を達成するか。この Issue がクローズできる時期を説明する概要を作成します（例: 改善されたドキュメント、共有セッション、リファクタリングのエピック、新しい Issue、提案、アーキテクチャブループリント）
      1. 含める内容:
         1. 提案されているアーキテクチャ
         1. 非機能要件（例: アクセシビリティ、セキュリティ、パフォーマンスなど）
         1. 関連するビジネス目標
      1. 代替案、コスト、機会を考慮する
      1. 影響を受けるグループやクロスステージコラボレーターからの懸念に対処するようにする
1. レビュワーは質問のリストを作成し、レビューミーティング前にチームが利用できるようにします。質問は前のステップで収集した情報から導き出せます
1. レビュワー（または進行役）がレビューミーティングを召集します。議論は録画し、機密情報を SAFE に保ちながらできる限り広く利用可能にすべきです
   1. チームと外部のコラボレーターを招待します
   1. EM と SEM/ディレクターを招待します
   1. トピックによっては、PM、デザイナー、または他の内部コラボレーターをオプションで追加できます
   1. 推奨アジェンダ
      1. 概要
      1. ステップ 3 からの質問のディスカッション
      1. 提案はより広いコンテキスト（チームの目標、サブ部門の目標、部門の目標）で関連性がありますか？
      1. アクションアイテム（ある場合）
   1. レビュワーはアクションアイテムの概要を説明し、最終的にレビューの結果を決定する責任があります
   1. 終了基準を完了するために追加のレビューステップを非同期で完了できます
   1. ディスカッションに応じて質問や方向性を変更することができます。これには後続のレビューや現在のレビューを無効にすることも含まれます。
1. レビューの成果物（録画、Issue など）は公開され、[CustomersDot プロジェクト](https://gitlab.com/gitlab-org/customers-gitlab-com) の `/doc` ディレクトリで他の人が利用できるようになります
1. 新しい学びでこのタイムラインを更新するか、該当する場合は [Issue テンプレート](https://gitlab.com/fulfillment-group/utilization-group/team-project/-/blob/main/.gitlab/issue_templates/architecture_review.md) への調整を提案することを検討してください。
1. レビュー Issue がクローズされます

### 投資時間

レビューの準備、議論、完了に必要な時間は変動します。
すべての時間をレビューに費やすべきではありません。問題の理解、価値提案、
および成功の定義に焦点を当てて実用的にレビューに取り組む必要があります。30 日サイクルで会合を持つことで、
必要な投資を時間をかけて分散させることができます。

レビューの準備のタイムボックスを設け、トピックが広すぎる場合や、
隠れた依存関係が多すぎる場合、またはその他の方法で扱いにくくなった場合は、
レビューの範囲を再考または縮小する必要があります。

チームのコラボレーションはレビューの成功に重要です。レビュワーは、レビュー Issue でディスカッションスレッドを開くことで、
他のチームメンバーから意見、フィードバック、およびヘルプを求めるべきです。役割は孤独であることを意図していませんが、
典型的な DRI です。

## パフォーマンス指標

中央集権型エンジニアリングメトリクスは [このページ](/handbook/product/groups/product-analysis/engineering/dashboards/) で確認できます。
