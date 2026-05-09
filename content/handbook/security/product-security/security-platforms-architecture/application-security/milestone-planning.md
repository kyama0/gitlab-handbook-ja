---
title: "マイルストーン計画"
description: "GitLab Application Securityチームがマイルストーン計画をどのように行っているかを学ぶ"
upstream_path: /handbook/security/product-security/security-platforms-architecture/application-security/milestone-planning/
upstream_sha: 1e195b58b9f249ff10bd0e705106c320fee86141
translated_at: "2026-05-09T00:00:00Z"
translator: claude
stale: false
---

## マイルストーン計画

Application Securityチームは、[GitLabプロダクトマイルストーン](https://gitlab.com/groups/gitlab-com/-/milestones)を中心にしたケイデンスで作業を計画しています。私たちの目標は、行う作業について意図的でありながら、私たちのキャパシティ、ベロシティ、現在のプロジェクトに関するインサイトを提供することです。

マイルストーンごとに1つのマイルストーン計画Issueを使用します。Issue内のすべての計画は、[GLQL](https://docs.gitlab.com/user/glql/)クエリを使用して行われます。

私たちのすべてのマイルストーン計画Issueは[こちら](https://gitlab.com/gitlab-com/gl-security/product-security/appsec/appsec-team/-/issues/?sort=created_date&state=all&label_name%5B%5D=Milestone%20Planning&first_page_size=20)(社内)で参照できます。

このハンドブックページでは、各マイルストーンで何の作業を完了するかを決定するために使用する、計画[責任範囲](#milestone-planning-responsibilities)と[プロセス](#milestone-planning-process)について説明します。

## マイルストーン計画の責任範囲 {#milestone-planning-responsibilities}

Application Securityチームメンバーは以下に責任を持ちます。

- マイルストーンに対する自分のキャパシティを評価および伝達(PTO、ローテーション割り当て、その他の要因に基づく)。
- 潜在的な作業項目を[Parking Lot](#parking-lot-section)に追加し、マイルストーンに引き入れるべき作業についての議論に関与する。
- マイルストーンにコミットされる作業セットを最終決定するために、Application Securityマネージャーと協働する。
- [Issueに適切なラベル](#issues-and-labels)を割り当てる。
- 計画通りに作業が完了しないと分かり次第、マネージャーにエスカレーションする。

Application Securityマネージャーは以下に責任を持ちます。

- マイルストーン計画Issueの作成、更新、維持。
- Application Securityチームメンバーと協働して潜在的な作業について議論し、作業の改良や作業要件の明確化に対していつでもサポートを提供する。
- マイルストーン計画Issueの最終決定の調整。

### キャパシティ期待値

平均して、ICはローテーションと計画されたPTOに応じて、私たちの[Effort Classificationテーブル](./metrics/capacity.md#effort-classification)から `AppSecWeight::Large` として分類されると推定される3〜4のIssueを持つことが期待されます。チームメンバーは、より工数が少ないと評価された場合はより多くのIssueを持ち、より工数が多いと評価された場合はより少ないIssueを持つことができます。

## Issueとラベル {#issues-and-labels}

Application Securityチームメンバーは、マイルストーンの過程でIssueとラベルを最新の状態に保つ責任があります。

Application Securityチームメンバーが取り組んでいるIssueは**以下を含む必要があります**。

- `Security::Division`、`Department::Product Security`、`Application Security Team` ラベル
- 適切な[`AppSecWorkflow::` ラベル](#workflow-labels)
- 適切なマイルストーン
- 適切な[`AppSecPriority::` ラベル](#priority-labels)
- 適切な[`AppSecWorktype::` ラベル](./metrics/capacity.md#type-of-work-classification)

### ワークフローラベル {#workflow-labels}

| ラベル | 目的 |
| --- | --- |
| `AppSecWorkflow::planned` | 作業がトリアージ、スコープ設定され、割り当てられたマイルストーンで作業準備が整ったことを示す。これは通常、マイルストーン開始前、またはマイルストーン内で作業がまだ開始されていない場合に存在する |
| `AppSecWorkflow::in-progress` | Issueが積極的に取り組まれていること、またはローテーションが進行中であることを示す |
| `AppSecWorkflow::complete` | 作業が完了したか、ローテーションが終了したことを示す |

### 優先度ラベル {#priority-labels}

優先度分類ラベルは、ICがリーダーシップにとって何が優先事項であるかを理解するのに役立ちます。

ラベルの割り当ては、リーダーシップ(AppSecまたはより高いレベル)、またはチームメンバー自身によって行うことができます。チームメンバーが特定の優先度について確信が持てない場合、確認のためにリーダーシップに相談できます。

| ラベル | 説明 |
| ----- | ----------- |
| AppSecPriority::1 | 計画されたマイルストーンの終了までに完了しなければならない最優先作業。 |
| AppSecPriority::2 | 重要であり、すべての `AppSecPriority::1` の作業が完了次第優先される作業。`AppSecPriority::2` の作業は、次のマイルストーンで `AppSecPriority::1` になります。 |
| AppSecPriority::3 | 重要度が低く、すべての `AppSecPriority::2` の作業が完了次第優先される作業の優先度。`AppSecPriority::3` はマイルストーン計画セッション中に評価され、次のマイルストーンで `AppSecPriority::2` になる場合があります。 |

### ウェイトラベル {#weight-labels}

ウェイトラベルは、私たちの[キャパシティとベロシティメトリクス](./metrics/capacity.md)のための[工数分類](./metrics/capacity.md#effort-classification)として使用されます。

各Application Securityチームメンバーは、自分自身の見積りに基づいて適切なAppSecWeightラベルを追加する必要があります。目標は非常に正確であることではなく、Issueに費やす時間のアイデアを持つことです。これは作業を可能な限り最良に計画するのに非常に有用です。

### 作業タイプラベル {#work-type-labels}

作業タイプラベルにより、私たちが時間を費やしている場所を理解し、より効率的になる必要のある場所を見つけることができます。各Application Securityチームメンバーは、時間を費やしているすべてのIssueに適切な作業タイプラベルを追加する責任があります。

私たちの `AppSecWorkType` ラベルの完全なリストは[こちら](./metrics/capacity.md#type-of-work-classification)で利用可能です。

### マイルストーンを逃した場合 {#missed-milestone}

マイルストーン用に計画された作業は、時間的制約や計画された作業が野心的すぎたために完全に終わらない場合があります。これが発生した場合、DRIは `missed:X.Y` ラベルを追加する責任があります。

### 計画外の作業

マイルストーン開始後に、優先度の高い、および/または緊急の作業が出てくることがあります。マイルストーン開始後に計画外のIssueが追加された場合:

- なぜその作業を優先する必要があるかをIssueにドキュメント化する
- `Unplanned` ラベルを適用する
- 計画外の作業が他の計画されたIssueを置き換えるほど大きい場合、自分のIssueが遅延されることを認識できるよう、該当するステークホルダーに通知する

### 計画作業に対するSIRT/PSIRTインシデントの影響 {#sirtpsirt-incidents-impact-on-planned-work}

SIRT/PSIRTインシデントによってIssueが遅延した場合に、それを把握できるようにすることは重要です。これらのケースでどのラベルを追加するか知るために、[キャパシティメトリクスページ](./metrics/capacity.md#work-impacted-by-sirt-incidents)のガイドラインに従ってください。

### Issueステータスとヘルスアップデートの提供 {#providing-issues-status--health-updates}

DRIは、以下のフォーマットを使用して、週末に割り当てられたトピックについて週次更新を提供する責任があります。

```md
 **What's happened since last update:**

 * \[Bullet points of progress\]

 **What's next:**

 * \[Bullet points of upcoming work\]

 **Blockers:**

 * \[Any blockers or dependencies\]

 **Overall Status/Confidence:**

 * :green_circle: On Track / :yellow_circle: Needs Attention / :red_circle: At Risk
 * \[Brief explanation of status\]
```

これらのレポートは、進捗、計画、潜在的な問題に対する重要な可視性を提供し、リーダーシップが情報に基づいた意思決定を行い、必要に応じてタイムリーなサポートを提供できるようにします。

同時に、[Issueヘルスステータス機能](https://docs.gitlab.com/user/project/issues/managing_issues/#health-status)は、`Overall Status/Confidence` の更新と一致するように更新する必要があります。

Issueマイルストーンの更新が必要となる場合は以下のとおりです。

- 週次ベース、週末に。
- DRIがマイルストーン終了までに完了できないことを把握した場合はいつでも

### マイルストーン計画Issueでのアイ表示

GLQLクエリは以下をチェックします。

1. 以下のラベルのいずれか: 「Application Security Team」、「AppSecPriority::1」、「AppSecPriority::2」または「AppSecPriority::3」。
2. マイルストーンが適切に設定されている

両方の条件が満たされた場合、表示されます。

取り組んでいるIssueを表示したい場合は、少なくとも ~"Application Security Team" ラベルを使用してください。

これは[マイルストーン計画Issue](https://gitlab.com/gitlab-com/gl-security/product-security/appsec/appsec-team/-/blob/master/.gitlab/issue_templates/milestone_planning.md#how-is-your-work-being-displayed)でも説明されています

## マイルストーン計画プロセス {#milestone-planning-process}

各マイルストーンに対して、Application Securityチームリポジトリに[マイルストーン計画Issue](https://gitlab.com/gitlab-com/gl-security/product-security/appsec/appsec-team/-/issues/?label_name%5B%5D=Milestone%20Planning)が作成されます。このIssueの目的は以下のとおりです。

- 実行する潜在的な作業(ローテーション、KR作業、重要なプロジェクト作業、その他の取り組み)を特定
- 改良ギャップを特定し、それに対処する
- 来るマイルストーンに対してコミットしている作業を決定する
- 取り組むことを決定した作業の優先度を設定し、伝達する

このIssueは、来るマイルストーンに関連するすべての計画関連の議論と決定の唯一の真実のソースです。

### マネージャー

#### マイルストーン開始前および開始時

1. 月初に、Application Securityマネージャーが[マイルストーン計画Issueテンプレート](https://gitlab.com/gitlab-com/gl-security/product-security/appsec/appsec-team/-/issues/new?issuable_template=milestone_planning)からIssueを作成します。
1. Application Securityマネージャーは、マイルストーン計画IssueのPlanning Checklistセクションのチェックリスト項目を完了する責任を持ちます。
1. Application Securityマネージャーは、Issueの最初に計画された作業の概要を持っています。
1. Application Securityマネージャーは、特定のマイルストーンのIssueを計画する場合があります。

#### マイルストーン終了時

1. Application Securityマネージャーは、完了されておらず次のマイルストーンに移動されていない残りのIssueをチェックし、次のステップについてチームメンバーと議論します。

### チームメンバー

#### マイルストーン開始前および開始時

1. Application Securityチームメンバーは、前のマイルストーンから繰り越される作業を追加します。
    1. マイルストーンを次のマイルストーンに変更する。
    1. [`missed:X.Y`](#missed-milestone)ラベルを適用する。X.Yは現在のマイルストーン、または次のマイルストーンが開始した場合は前のマイルストーン。
1. Application Securityチームは、[Parking Lotセクション](#parking-lot-section)から潜在的な作業項目を選びます。
1. Application Securityチームは協働して、新しいIssueをマイルストーン計画Issueに追加します。
    1. 追加される各項目は、正式にコミットする前に改良される必要があります。
    1. 作業を引き受ける可能性が高いチームメンバーは、Issueを改良したのが彼らでない場合、Weightをレビューして同意する必要があります。
    1. 作業を改良してコミットしたら、関連するIssueはマイルストーンとアサイニーで更新する必要があります。
    1. 各作業項目は以下を持つ必要があります
1. マイルストーン計画Issueは、マイルストーン開始日の少なくとも3営業日前に最終決定される必要があります
    1. Application Securityマネージャーとメンバーは、マイルストーン計画Issueを使用して、各Application Securityチームメンバーと作業および計画関連のトピックについて議論し、必要に応じてワークロードを最終決定します。

### 各週末

1. [このフォーマット](#providing-issues-status--health-updates)に従って、各割り当てられたIssueの週次更新を提供する。
1. Issueヘルスを最後の週次更新と[適切に一致するように更新する](#providing-issues-status--health-updates)

#### マイルストーン終了時

Application Securityチームメンバーはマイルストーン計画Issueを使用して、`Assigned Work` セクションまたは `Individually assigned work and rotations` 配下の自分のセクションで割り当てられたIssueをレビューし、以下を適用します。

1. 完了できなかったIssueに対する[`missed:X.Y`](#missed-milestone)ラベル、および:
    1. 次のマイルストーンにマイルストーンを変更する
    1. 作業がより高いまたはより低い優先度になる場合は、[AppSecPriorityラベル](#priority-labels)を調整する
    1. 完了していなくても、[AppSecWeight](#weight-labels)ラベルを調整する。これにより、すでに行われた作業を、その上に追加されるあらゆる将来の作業と合計できます。
    1. [AppSecWorkType](#work-type-labels)ラベルを調整する
    1. そのマイルストーン中にインシデントに関与し、Issueに影響を与えた場合は、インシデントの影響を受けたことを通知するために[適切なラベル](#sirtpsirt-incidents-impact-on-planned-work)を追加する。
    1. 完了せず、次のマイルストーンでも完了しない作業に対する[`AppSec Backlog`](#backlog) マイルストーン。これらの場合、`missed:X.Y` ラベル**かつ**マイルストーンを `AppSec Backlog` に設定する必要があります。
1. 完了したIssueに対する `AppSecWorkflow::complete` ラベル、および:
    1. [AppSecWeight](#weight-labels)ラベルを調整する。
    1. [AppSecWorkType](#work-type-labels)ラベルを調整する
    1. Issueをクローズする

### ローテーション

[HackerOne](/handbook/security/product-security/psirt/runbooks/hackerone-process/)および[トリアージ](/handbook/security/product-security/security-platforms-architecture/application-security/runbooks/triage-rotation/)ローテーションIssueは、[ローテーション管理ツール](https://gitlab.com/gitlab-com/gl-security/product-security/appsec/tooling/rotation-management/)を介して作成され、自動的にチームメンバーに割り当てられます。

1つのローテーションを交換する必要がある場合は、その方法について[ローテーションツールのFAQ](https://gitlab.com/gitlab-com/gl-security/product-security/appsec/tooling/rotation-management/-/tree/main?ref_type=heads#faq)を読んでください。

すべてのローテーションを可視化し、特定のものを検索するには[このローテーションテーブル](https://gitlab.com/gitlab-com/gl-security/product-security/appsec/tooling/rotation-management/-/blob/main/rotations.md?ref_type=heads)を使用できます。

## マイルストーン計画改良ガイドライン

- 問題は明確に定義されているか、それともさらにフォローアップ/データが必要か?
- スコープがマイルストーン内で完了するには大きすぎるか? Issueをより小さなものに分割するか、エピックに昇格させる必要があるか?
- プロジェクトおよび新規イニシアチブについては、スコープと完了の定義は明確で測定可能か? 何が期待されているかは明確か?
- 少なくとも1人のDRIが割り当てられており、そのDRIは認識しているか?
- 依存関係はあるか? もしあれば、それらをドキュメント化する。
- 他のステークホルダーはいるか、彼らは関与しており認識しているか?
- 正しい[`AppSecWorkType::` ラベル](/handbook/security/product-security/security-platforms-architecture/application-security/metrics/capacity/#type-of-work-classification)が設定されているか?
- [`AppSecWeight::` ラベル](/handbook/security/product-security/security-platforms-architecture/application-security/metrics/capacity/#effort-classification)が設定されているか?
- `Security::Division`、`Department::Product Security`、`Application Security Team` ラベルがあるか?
- マイルストーン全体で、運用 + プロジェクトの総ウェイトは達成可能か?

Issueが完全に改良されたら、`AppSecWorkflow:planned` ラベルを設定して、割り当てられたマイルストーンで作業準備が整ったことを示してください。

### Parking Lotセクション {#parking-lot-section}

[マイルストーン計画Issueのこのセクション](https://gitlab.com/gitlab-com/gl-security/product-security/appsec/appsec-team/-/blob/master/.gitlab/issue_templates/milestone_planning.md#issue-parking-lot)は、以下のすべてのIssueを表示します。

- 前のマイルストーンから漏れたもの
- ["AppSec Backlog" マイルストーン](#backlog)が割り当てられたIssue

#### Backlog {#backlog}

以下のIssue:

- 未完了の作業がある
- チームメンバーからのアイデアだが、まだ優先順位が付けられていない
- どのマイルストーンにも計画されていない

マイルストーンを `AppSec Backlog` に設定する必要があります。

## FAQ

### ローテーション中ですが、トリアージしたIssueにラベルを追加すべきですか?

はい、私たちのキャパシティメトリクスに関与を反映するために、適切なラベルを適用する必要があります。

### レビューしたMRにラベルを適用する必要がありますか?

はい、これも私たちのキャパシティメトリクスに反映されます。
