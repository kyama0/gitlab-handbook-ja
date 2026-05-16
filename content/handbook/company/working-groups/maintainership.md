---
title: "メンテイナーシップ"
description: "開発部門のメンテイナーシップを今後5年間持続可能なものにするための改善"
upstream_path: "/handbook/company/working-groups/maintainership/"
upstream_sha: "b4eeb07f0d5f46e2fc5f8572be1a2547261aed89"
translated_at: "2026-04-25T12:00:00Z"
translator: "claude"
stale: false
lastmod: "2024-06-06T07:14:15+00:00"
---

## 属性

| プロパティ        | 値      |
|-----------------|------------|
| 作成日    | 2022-04-19 |
| 終了日        | 2023-02-02 |
| Slack           | [#wg_maintainership](https://gitlab.slack.com/archives/C03CGL9DDL4) |
| Google Doc      | [Working Group Agenda](https://docs.google.com/document/d/1RuWhO2q7rsgSKrnSCf2xsOrp56SXBHe_z5XKDls5px8/edit#heading=h.epyavtxljcb2)  |
| タスクボード      | [Issue board](https://gitlab.com/groups/gitlab-com/-/boards/4208478?label_name[]=WorkingGroup%3A%3AMaintainership) |
| Epic            | [Link](https://gitlab.com/groups/gitlab-com/-/epics/1808) |

## ビジネス目標

前四半期においてメンテイナーシップの成果にばらつきが見られました。例として、一部のメンテイナーにレビューの負荷が集中しており、これが重大な職務満足度の問題やバーンアウトにつながる可能性があります。私たちは（人員数とコミュニティコントリビューション両面で）成長しているにもかかわらず、メンテイナーの数は横ばいになっています。メンテイナーサポートが必要なリポジトリ数は増加している一方で、カバレッジは低下しています。メンテイナーであるシニアエンジニアが、ここに挙げた複数の領域でポジティブな影響を与えており、メンテイナーではないエンジニアよりもキャリアの機会が多いという透明性を確保したいと考えています。

私たちの目標は、会社とオープンコアプロジェクト両方の需要を満たしながら、今後5年間メンテイナーシップを持続できる組織を実現するためのプロセスと文化を変えることです。これには以下が含まれますが、これらに限定されません:

- 現在のメンテイナー数を増やし、将来的にも増加すると予測できるフォーキャスティングを実施します。
- メンテイナーがコードレビューの需要に対応できることを示す可用性の測定指標を確立します。
- MR レビューをメンテイナー間で均等に分散するためのロードバランシング指標を設けます。
- メンテイナーをサポートし、レビューに必要な作業を削減するためのコードレビュー機能と CI/ツールの改善を行います。
- コードベースの特定部分が適切にサポートされているか、支援が必要かを把握するためのカバレッジ・監視指標を設けます。
- 新たな規模でのメンテイナーオンボーディングを改善します。
- 楽しみます。

## 進捗の追跡

進捗は以下のラベルを使ってワーキンググループの[Issue ボード](https://gitlab.com/groups/gitlab-com/-/boards/4208478?label_name[]=WorkingGroup%3A%3AMaintainership)で追跡します:

- ~"workflow::In dev"
  - Issue は現在進行中で積極的に作業されています。
- ~"workflow::In review"
  - Issue は現在、より広いエンジニアリングチームによりレビュー中です。
- ~"workflow::blocked"
  - Issue は別の Issue によってブロックされています。ブロッキング Issue を参照してください。
- ~"workflow::production"
  - Issue は完了し、クローズされるべきです。

### 終了基準（100%完了）

このワーキンググループの終了基準は達成されましたが、2023年2月2日まで月次フォローアップミーティングは継続されます。

## メンテイナーシッププロセス

メンテイナーシッププロセスについては[このページ](/handbook/engineering/workflow/code-review/#maintainer)に記載されています。

### 終了基準（100%完了）

| #  | 開始日 | 目標完了日 | 完了日 | DRI        | 基準 |
| -- | ------     | ------ | ------         | ------     | ------   |
| 1  |  2022-06-01       | 2022-07-22 | 2022-10-28            | @nhxnguyen | [メンテイナーシップカバレッジのギャップを解消するための実施計画の作成](https://gitlab.com/groups/gitlab-com/-/epics/1817)|
| 2  |  2022-04-26       | 2022-07-22 | 2022-07-18      | @mwoolf | [メンテイナーシッププログラムの健全性をより透明化するための指標の開発](https://gitlab.com/groups/gitlab-com/-/epics/1816) |
| 3  |  2022-05-04       | 2022-08-05 | 2022-10-04            | @robotmay_gitlab | [エンジニアとメンテイナーに期待される行動と責任の更新](https://gitlab.com/groups/gitlab-com/-/epics/1815) |
| 4  |  2022-05-18       | 2022-08-05 | 2022-10-04            | @oregand | [トレーニーメンテイナープロセスの効率化改善](https://gitlab.com/groups/gitlab-com/-/epics/1814) |
| 5  |  2022-06-01       | 2022-08-05 | 2022-11-16            | @sabrams | [メンテイナーシップ変更に関するコミュニケーション計画の策定と実施](https://gitlab.com/groups/gitlab-com/-/epics/1813) |

### データとダッシュボード

- [レビュアー/メンテイナーの可用性とキャパシティ](/handbook/engineering/workflow/code-review/#maintainerreviewer-availability) - メンテイナー/レビュアーの可用率の推移と受信済み/予測レビューリクエストを表示します。
- [メンテイナーとトレーニー](/handbook/engineering/development/performance-indicators/#maintainers-and-trainees)
- [メンテイナーシップ需要](/handbook/engineering/workflow/code-review/#maintainer-demand)

### 役割と責任

| ワーキンググループの役割    | 担当者                                               | 役職                                                      |
|-----------------------|------------------------------------------------------|------------------------------------------------------------|
| エグゼクティブスポンサー                         | Christopher Lefelhocz                  | VP of Development    |
| ファシリテーター                               | Michelle Gill                          | Senior Engineering Manager, Manage   |
| ファンクショナルリード（Enablement）              | Alex Ives                              | Engineering Manager, Database     |
| ファンクショナルリード（Fulfillment）              | Jerome Ng                              | Senior Manager of Fulfillment |
| ファンクショナルリード（Ops）                      | Sam Goldstein                          | Director of Ops |
| ファンクショナルリード（Dev）                      | Max Woolf                              | Senior Backend Engineer, Govern:Compliance |
| ファンクショナルリード（Sec, Data Science, Growth）   | Thomas Woodham                         | Sr. Engineering Manager, Secure Analyzers |
| ファンクショナルリード（メンテイナー - フロントエンド）         | Natalia Tepluhina | Staff Frontend Engineer |
| ファンクショナルリード（非メンテイナー - バックエンド）      | Manoj M J | Senior Backend Engineer |
| ファンクショナルリード（トレーニー - Registry DB）          | Steve Abrams | Intermediate Backend Engineer |
| ファンクショナルリード（メンテイナー - Workhorse, Shell） | Robert May | Senior Backend Engineer |
| ファンクショナルリード（メンテイナー - フロントエンド）         | Ezekiel Kigbo | Senior Frontend Engineer |
| ファンクショナルリード（メンテイナー - Omnibus）          | Balasankar C       | Senior Backend Engineer |
| ファンクショナルリード（メンテイナー - CNG, Operator）    | Mitchell Nielsen | Senior Backend Engineer |
| メンバー            | Sean McGivern                | Staff Backend    |
| メンバー            | Allen Cook                 | Senior Backend   |
| メンバー            | Terri Chu                     | Senior Backend   |
| メンバー            | Doug Stull                      | Staff Fullstack  |
| メンバー            | Pavel Shutsin                 | Senior Backend   |
| メンバー            | Sincheol Kim                 | Senior Backend   |
| メンバー            | Michał Zając                | Senior Backend   |
| メンバー            | Douglas Barbosa Alexandre  | Staff Backend    |
| メンバー              | Paul Gascou-Vaillancourt   | Senior Frontend,   |
| メンバー            | Dennis Tang                  | Engineering Manager, Govern:Compliance |
| メンバー            | Nick Nguyen                  | Senior Engineering Manager, Datastores |
| メンバー            | Darva Satcher              | Senior Engineering Manager, Create / Ecosystem Stage |
| メンバー            | Jiaan Louw                  | Senior Frontend Engineer, Govern:Compliance |
| メンバー            | Rémy Coutable          | Staff Backend Engineer, Contributor Success |

## 変更のコミュニケーション

### ラベル

コミュニケーションを促進するために2種類のラベルセットを用意しています:

**変更のタイプとその影響**

変更のタイプを識別するためにこれらのラベルを使用してください:

- `~"Maintainership WG::process change"` - この更新は既存のプロセスまたはワークフローを変更します。
- `~"Maintainership WG::new process"` - この更新は新しいプロセスまたはワークフローを導入します。
- `~"Maintainership WG::responsibility change"` - この更新は責任を変更または導入します。
- `~"Maintainership WG::other change"` - これはアナウンスが必要かもしれないが、上記のカテゴリに当てはまらない更新です。

**コミュニケーションステータス**

変更のコミュニケーション準備状況や伝達済みかどうかを識別するためにこれらのラベルを使用してください:

- `~"Maintainership WG Comms::ToDo"` - この更新はコミュニケーションの準備が整っています。
- `~"Maintainership WG Comms::Needs Support"` - この更新はアナウンス時に追加のサポートが必要です。例としてハンドブックの更新、FAQ、AMA などがあります。
- `~"Maintainership WG Comms::Done"` - この更新は伝達済みです。

### ランブック

#### アナウンスのレベル

更新に適用できるアナウンスには一般に3種類あります:

1. **アラート** - 特定の個人が*知っておくべきかもしれない*こと。

  例: トレーニーとメンテイナーに、プログラムが1年間持続することを意図しており、その時点で評価されるべきであることを知らせる。

  アラートは最も優先度の低いアナウンスのタイプです。一部の人が見逃したとしても問題ありません。アラートは通常1回のアナウンスで済みます。

1. **変更** - 特定の個人が*知っておく必要がある*こと。

  例: メンテイナーになるために必要な承認数を変更する。

  変更は通常、単一のアナウンスの後では起こらない採用が必要です。そのため、影響を受ける個人だけでなく、エンジニアリングマネージャーや上位管理職などの変更を支持・推進できる人々にもコミュニケーションすることが重要です。

  上位管理職からアナウンスが行われることで、より広い聴衆に届く場合があります。優先度が十分に高いテーマについては、サブ部門のディレクターに指導を求めるか、エンジニアリングスタッフミーティングでアナウンスへの協力を求めることを検討してください。

1. **アクション** - 特定の個人が指定された期間内にアクションを起こすことが必要なこと。

  例: アンケートフィードバックの依頼や、特定の期間内に採用する必要がある行動変更のコミュニケーション。

  必要なアクションの優先度と緊急性に応じて、追加のリマインダーが適切です。アンケートの場合、締め切り前の期間内に数回再投稿することが適切です。

#### アナウンスの作成

アナウンスを作成する際は次の質問を検討してください:

- **混乱を招く可能性がある矛盾した情報がないよう、更新すべきドキュメントやハンドブックの他の箇所はありますか？** 矛盾する情報がないことを確認してください。
- **アナウンスに付随するハンドブックやドキュメントへのリンクはありますか？** 必要とする人がより詳しい情報にアクセスできるようにしてください。
- **さらなる質問や明確化のために人々が参照できる場所はありますか？** 詳細を求める可能性がある場合は、Issue/doc/Slack チャンネル/AMA を提供してください。
- **この変更は確立されたプロセスを中断させますか？** もしそうであれば、マネージャーに対してプロセスの認知と採用を促す行動を起こすよう促すことが合理的かもしれません。
- **この変更は多くの質問を生む可能性があるほど大きいですか？** FAQ ファイルを開いたり、AMA を設定したりすることを検討してください（`@sabrams` もこれらの項目をファシリテートできます）。

- [ ] 最も関連性の高い情報へのリンクを含める。一次的でないリンクでアナウンスを過度に埋め込まないこと。
- [ ] アナウンスが**認識向上**のためのものであれば:
  - [ ] 最も[関連する Slack チャンネル](#communication-channels)に伝達し、他の関連チャンネルにクロスポストする。
  - [ ] eng-week-in-review に追加する。
- [ ] アナウンスが**アクション**のためのものであれば:
  - [ ] 上記と同様に伝達し、マネジメントスタッフミーティングへの追加を検討する。
- [ ] フィードバックを求めている場合は、フィードバックを提供できる場所へのリンクを提供する。

##### 意見の分かれる変更

変更が論争を呼ぶ場合や、人々が強い意見を持つ可能性があるテーマを含む場合があります。そのような変更が起こるときには、すべての人が以下を理解するためのリソースと情報にアクセスできることが重要です:

- 自分たちがどのように影響を受けるか
- なぜその変更が行われたか
- どこでフィードバックを提供できるか

FAQ や AMA はこれらの情報の多くを提供するのに役立ちます。

理想的には、変更を受け入れてもらいたいのですが、最低限として採用から始める必要があります。受け入れを促進するには、変更の「理由」を強力なデータに基づいて明確に定義する必要があります。

#### アンケートの実施

- [ ] アンケートの目標を確立する。
- [ ] 最も[関連する Slack チャンネル](#communication-channels)で共有し、他の関連チャンネルにクロスポストする。
- [ ] アンケートの終了日または期限を伝達する。
- [ ] 結果を代表的・有用なものにするための最小回答数を定義する。
- [ ] 結果を軸分析するために、サブグループ（フロントエンド/バックエンド、レビュアー/トレーニー/メンテイナー）を区別するための質問を追加する。

#### コミュニケーションチャンネル {#communication-channels}

ほぼすべての変更のコミュニケーションに適切なチャンネル:

- `#development`
- `#eng-week-in-review`

大きな集団に影響する変更については、`#whats-happening-at-gitlab` でのコミュニケーションも良いアイデアです。

以下は、どのチャンネルへのコミュニケーションを検討すべきかを決めるのに役立つ変更のカテゴリ分けです。

##### 終了基準別

| 終了基準 | 関連チャンネル |
| ----------- | ----------------- |
| [メンテイナーシップカバレッジのギャップを解消するための実施計画の作成](https://gitlab.com/groups/gitlab-com/-/epics/1817) | 変更によって直接影響を受けるプロジェクトのチャンネル。 |
| [メンテイナーシッププログラムの健全性をより透明化するための指標の開発](https://gitlab.com/groups/gitlab-com/-/epics/1816) | `#eng_managers`<br />エンジニアリングスタッフミーティング |
| [エンジニアとメンテイナーに期待される行動と責任の更新](https://gitlab.com/groups/gitlab-com/-/epics/1815) | `#trainee_maintainers`<br />`#backend_maintainers`<br />`#frontend_maintainers`<br />`#database_maintainers`<br />`#eng_managers`<br />エンジニアリングスタッフミーティング |
| [トレーニーメンテイナープロセスの効率化改善](https://gitlab.com/groups/gitlab-com/-/epics/1814) | `#trainee_maintainers`<br />`#backend_maintainers`<br />`#frontend_maintainers`<br />`#database_maintainers`<br />`#eng_managers`<br />エンジニアリングスタッフミーティング |

##### `gitlab-org/gitlab`（GitLab Rails）の場合

| トピック | 関連チャンネル |
| ----- | ----------------- |
| バックエンド | `#backend`<br />`#backend_maintainers` |
| フロントエンド | `#frontend`<br />`#frontend_maintainers` |
| データベース | `#database`<br />`#database_maintainers` |
| トレーニー更新 | `#backend_maintainers`<br />`#frontend_maintainers`<br />`#trainee_maintainers` |
| 責任/プロセスの更新 | 上記のいずれかのチャンネルおよび `#eng_managers` |

##### その他のプロジェクト

特定のプロジェクトに関する変更については、そのプロジェクトを所有するグループに通知し、そのプロジェクト専用のチャンネルにも通知してください。たとえば、workhorse の変更は `#workhorse` と、そのプロジェクトの所有者である `#g_create_source_code` に伝達すべきです。

[プロダクトカテゴリページ](/handbook/product/categories/)と[プロジェクトページ](/handbook/engineering/projects)は、特定のプロジェクトを所有するグループとステージを特定するのに役立ちます。明確でない場合は、プロジェクトのメンバーを直接メンバーシップでフィルタリングし、所有者やメンテイナーに直接誰がプロジェクトを所有しているかを尋ねる方法もあります。
