---
title: "報告と測定"
description: Co-Create & Community Engineering チームが成長の成果を測定し、進捗を報告し、成果の解釈に役立つ指標やダッシュボードを使用する方法
upstream_path: /handbook/marketing/developer-relations/engineering/reporting/
upstream_sha: "2d1f6094c6d7396f74007d0e3058ac3e143c7e72"
lastmod: "2026-11-23T09:47:57Z"
translated_at: "2026-11-23T21:11:54+00:00"
translator: codex
stale: false
---

## このページの目的 {#why-this-exists}

私たちは、[コントリビューターのフライホイールと成長の成果](/handbook/marketing/developer-relations/engineering/#strategy)に沿って作業を報告します。
このページでは、成果と活動を誰でも区別できるように、指標、報告のカテゴリ、担当者を定義します。
プロジェクト、優先順位付け、デリバリーについては、[私たちの仕事の進め方](/handbook/marketing/developer-relations/engineering/how-we-work/)を参照してください。

作業と併せて活動や成果を確認できるよう、これらの指標を[コントリビューターのフライホイールボード](https://flywheel-97bd65.gitlab.io/)に取り込む予定です。
該当する場合は、指標をお客様によるコントリビューションと個人によるコントリビューションに分ける予定です。

## フライホイールの測定 {#measuring-the-flywheel}

フライホイールは、成長に関わる 2 つの成果を支えます。

- **[顧客アカウントの成長](https://gitlab.com/groups/gitlab-org/developer-relations/contributor-success/-/work_items/35)：** 共創を通じた既存顧客での拡大案件のパイプライン。
  アトリビューション（共創が創出した案件と、共創が影響を与えた案件の区別）、測定対象期間、基準値、目標値を策定中です。
- **[製品の成長](https://gitlab.com/groups/gitlab-org/developer-relations/contributor-success/-/work_items/36)：** 価値のあるコントリビューション。
  価値の定義、対象とするコントリビューションの範囲、指標、基準値、目標値を策定中です。

コントリビューションの件数と速度は、価値を評価する際の参考情報です。それだけで価値を立証することはできません。
これまでの計画で掲げた数値目標は、これらの成果に照らして再確認する必要があります。
OKR は公開していません。

### 成果の解釈に役立つ兆候と活動 {#supporting-signals-and-activities}

以下はフライホイールの各段階でどのような進展が見られるかを示す例です。
設定済みの指標や、合意済みの基準値と目標値を並べたものではありません。

| 段階 | 例 | 何がわかるか |
|---|---|---|
| **認知** | リーチ、コントリビュータープラットフォームへの訪問、応募。 | 関心を早い段階で示す兆候です。価値のあるコントリビューションや顧客アカウントの成長の根拠にはなりません。 |
| **オンボーディング** | コントリビューターのオンボーディング用 Issue、Co-Create ワークショップ。 | 活動の指標です。オンボーディング作業が完了しても、その後にコントリビューションが行われたことまではわかりません。 |
| **コントリビューション支援** | コントリビューターによる初回のコントリビューション。 | 開始からコントリビューションに至るまでの進展です。その価値を示すには、別途根拠が必要です。 |
| **コントリビューション** | 価値のあるコントリビューションや協力の継続。 | コントリビューションが継続している根拠になります。価値は件数と切り離して評価します。 |

アドボカシーはジャーニーのどの段階でも認知を広げられます。
イベント、コンテンツ、SNS への投稿は活動であり、それらのリーチは成果の解釈に役立つ兆候です。

### パフォーマンス指標の参照先 {#performance-indicator-references}

過去の指標の参照先には、[月間のユニークなワイダーコミュニティコントリビューター数](/handbook/marketing/developer-relations/performance-indicators/#unique-wider-community-contributors-per-month)と [Open Community MR Age（OCMA）](/handbook/marketing/developer-relations/performance-indicators/#open-community-mr-age)があります。

チームでは、SHIP Time（Scope Handoff to Impact Published）が OCMA に代わる指標です。
割り当てられたアイデアがデリバリーに入ってから、再利用可能な成果物としてリリースされるまでの時間を測定します。
SHIP Time の基準値は策定中です。以下の従来の Tableau ドキュメントは引き続き OCMA を説明しており、SHIP Time に移行したダッシュボードの説明は含まれません。

コミュニティのオフィスアワー、ハッカソン、コントリビューションの自動化、コーチング、CI やコントリビューション用ツールの改善は、これらの指標を支える活動です。
活動を完了しただけで成果の根拠とみなさず、その結果を報告してください。

## 進捗の報告 {#report-progress}

デリバリーの進捗は、成果と分けて報告してください。
アクションの完了は、作業をデリバリーしたことを示します。KPI が改善したことまでは示しません。
結果とその根拠を報告してください。基準値、目標値、アトリビューションが不明な場合は、Issue の件数で代用せず、不明であることを明記してください。

### 構成 {#the-structure}

私たちは四半期ごとに **目標**、**KPI**、**PI** を再評価し、担当者を割り当て、デリバリーの進捗を確認します。

- 目標は定性的な方向性を示します。
- KPI はコントリビューション全体の成長の成果を測定し、PI はその成果を解釈するための兆候を示します。
- コントリビューションは顧客アカウントと製品の両方の成長に影響する場合があるため、デリバリー項目を一方の成果だけに割り当てることはしません。

フライホイールは、デリバリー作業と測定を結び付けます。
作業はエピック 54 〜 60 の下に整理し、可視化では関連する測定値と指標を作業と併せて表示する予定です。
KPI と PI の記録は測定対象を示します。デリバリー作業の親項目にはなりません。
デリバリーに関するすべての Issue とエピックは、直接、または子エピックを介して、次のエピックのいずれかの下に置きます。

- [認知（54）](https://gitlab.com/groups/gitlab-org/developer-relations/contributor-success/-/work_items/54)
- [オンボーディング（55）](https://gitlab.com/groups/gitlab-org/developer-relations/contributor-success/-/work_items/55)
- [コントリビューション支援（56）](https://gitlab.com/groups/gitlab-org/developer-relations/contributor-success/-/work_items/56)
- [コントリビューション（57）](https://gitlab.com/groups/gitlab-org/developer-relations/contributor-success/-/work_items/57)
- [アドボカシー（58）](https://gitlab.com/groups/gitlab-org/developer-relations/contributor-success/-/work_items/58)
- [目標外の取り組み（59）](https://gitlab.com/groups/gitlab-org/developer-relations/contributor-success/-/work_items/59)
- [運営とチームの効率化（60）](https://gitlab.com/groups/gitlab-org/developer-relations/contributor-success/-/work_items/60)

KPI と PI の測定記録は、このデリバリーの階層の外に置きます。デリバリー作業の親項目にはなりません。
PI は成果の解釈に役立つ指標です。KPI の記録の子項目にはなりません。
デリバリー作業の整理方法は、[デリバリーの分類](/handbook/marketing/developer-relations/engineering/how-we-work/#epics-and-delivery-groups)を参照してください。

### カテゴリ {#the-categories}

私たちは 4 種類の報告カテゴリを使い、測定記録とデリバリー作業を区別します。
これらのカテゴリは項目の報告方法を示します。GitLab 内の配置を示すものではありません。

| カテゴリ | 報告する内容 | 報告方法 |
|---|---|---|
| **KPI** | 成長の主要な全体成果。 | 測定値を基準値や目標値と比較し、値の差や情報の不足、アトリビューションの限界を明記します。 |
| **PI** | 成果の解釈に役立つ指標。 | 指標の測定値と背景を報告します。この指標だけで KPI が改善したとは判断しません。 |
| **アクション** | 個別の成果物。 | デリバリーの状況と結果を報告し、完了したことと成果が変化したことを示す根拠とを区別します。 |
| **定期業務** | 繰り返し行うデリバリー作業。 | サイクルごとに状況と結果を報告し、追跡対象のプロセスにリンクします。 |

まとめると、**KPI** は全体の成果を測定し、**PI** は成果を解釈するための参考情報を提供します。**アクション**と**定期業務**はデリバリーを示します。
定期業務は繰り返しの頻度を表すもので、別種の成果を表すわけではありません。
定期業務もアクションで構成されますが、便宜上、報告カテゴリとして残しています。

デリバリー作業には、固有の指標が必須というわけではありません。
作業の目的を説明し、実際に起きたことを報告してください。測定していない KPI への影響を主張しないでください。

### カテゴリの記録方法 {#how-the-category-is-recorded}

チームの報告に含める項目には、測定記録でもデリバリー作業でも、次の `report-as::` スコープ付きラベルを項目ごとに 1 つ使用してください。

| ラベル | 報告カテゴリ |
|---|---|
| `report-as::kpi` | KPI |
| `report-as::pi` | PI |
| `report-as::action` | アクション |
| `report-as::recurring` | 定期業務 |

スコープ付きラベルで指定できる報告カテゴリは、一度に 1 つです。
繰り返し行うデリバリー作業には `report-as::recurring` を使用し、`report-as::action` は併用しないでください。
チームの報告に含まれる項目に `report-as::` ラベルがなければ、分類が必要です。

これらのラベルは、GitLab の入れ子構造とは独立した、私たちの報告上の取り決めです。
ラベルは項目の報告内容を示します。KPI の成果、PI の兆候、デリバリーの状況と結果のいずれかです。
ラベルによってコントリビューションを単一の成果に結び付けたり、因果関係を確定したりすることはありません。
項目の親項目やボード上の位置から、報告カテゴリを推測しないでください。

### 決定者と担当者 {#who-decides-and-who-owns}

2 つの責任を分けて扱います。

1. **分類はチーム全体で決め、最終的な判断は目標の担当者が行います。**
   項目を KPI、PI、アクション、定期業務のいずれとして報告するかをチームで合意し、目標の担当者が確認します。
   分類によってデリバリーの階層が変わることはなく、成長の成果を 1 つだけ選ぶ必要もありません。
   理解が深まるにつれて、定義を見直し、イテレーションを重ねます。
1. **測定記録と規模の大きいデリバリー項目には、それぞれ DRI がいます。**
   [Directly Responsible Individual](/handbook/people-group/directly-responsible-individuals/)には、作業そのものを実行する義務はありません。
   私たちはすべての作業にチームで取り組みます。
   測定記録の DRI は、その定義、報告、解釈に責任を持ちます。これには不確実性とアトリビューションの限界も含まれます。
   デリバリー作業の DRI は、デリバリーの戦略と、進捗や結果の報告に責任を持ちます。
   DRI は意思決定に責任を持ち、リスクや機会を見つけたらエスカレーションしてください。

報告カテゴリは項目の報告方法を示し、DRI はその報告の責任者を示します。

## 私たちが使用するダッシュボード {#dashboards-we-use}

従来の Tableau ダッシュボードのドキュメントには、以下の指標が記載されています。

- [Wider Community PIs](https://us-west-2b.online.tableau.com/t/gitlabpublic/views/WiderCommunityPIsPart1/WiderCommunityPIsDashboardPart1)
  - 月間のユニークなワイダーコミュニティコントリビューター数
  - 作成、マージ、クローズされた MR の数
  - MR の作成からマージまでの時間（OCMA。チームが過去に使用していた指標）
  - MR がレビュー可能になってからレビューされるまでの時間
