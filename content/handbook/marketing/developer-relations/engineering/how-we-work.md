---
title: "私たちの仕事の進め方"
description: Co-Create & Community Engineering チームが作業を整理し、優先順位を付け、デリバリーする方法
upstream_path: /handbook/marketing/developer-relations/engineering/how-we-work/
upstream_sha: "2d1f6094c6d7396f74007d0e3058ac3e143c7e72"
lastmod: "2026-11-23T09:47:57Z"
translated_at: "2026-11-23T21:11:54+00:00"
translator: codex
stale: false
---

## このページの目的 {#why-this-exists}

私たちは、[コントリビューターのフライホイールと成長の成果](/handbook/marketing/developer-relations/engineering/#strategy)を軸に作業を整理します。
このページでは、バックログ、計画、デリバリーのつながりを示し、私たちが何に、なぜ取り組んでいるのか、誰が担当しているのかを誰でも把握できるようにします。
成果、報告のカテゴリ、成果の解釈に役立つ指標については、[報告と測定](/handbook/marketing/developer-relations/engineering/reporting/)を参照してください。

## 作業の整理 {#structure-work}

### プロジェクトと Issue {#projects-and-issues}

私たちの[チームプロジェクト](https://gitlab.com/gitlab-org/developer-relations/contributor-success/team-task)は、チームのタスクとバックログを確認する起点です。
作業の内容に応じて Issue の作成先を選びます。

- **GitLab 製品とコントリビューションの流れ：** オープンソースプロジェクトの GitLab を改善する公開 Issue は、原則として [gitlab-org/gitlab](https://gitlab.com/gitlab-org/gitlab)に作成してください。
  コントリビューターもチームメンバーも同じように取り組める状態にしてください。
- **チーム運営と調整：** チームの内部業務、オンボーディング、GitLab 製品プロジェクトと分けて扱うべきお客様との調整には [team-task](https://gitlab.com/gitlab-org/developer-relations/contributor-success/team-task)を使用してください。
- **コントリビュータープラットフォームの開発：** 範囲が明確で実行可能な小規模の技術タスクには、[contributors-gitlab-com](https://gitlab.com/gitlab-org/developer-relations/contributor-success/contributors-gitlab-com/-/issues)を使用してください。
  プラットフォームの大規模な取り組みや、計画、調整は `team-task` で追跡し、同じ実装タスクを重複して登録せず、実装先の Issue にリンクしてください。
  必要に応じてグループエピックを使用し、大規模な作業を整理してください。
- **コントリビュータープラットフォームのアラート：** [オブザーバビリティアラートのトリアージ](/handbook/marketing/developer-relations/engineering/observability-alert-triage/)の手順に従ってください。
  アラートは `contributors-gitlab-com` に作成されます。機密情報は、アラートの機密 Issue 内に留めてください。

### エピックとデリバリーの分類 {#epics-and-delivery-groups}

関連するデリバリー作業はエピックでまとめ、具体的な成果物は Issue に記載してください。
デリバリー作業は、該当する[フライホイールの段階またはアドボカシーのエピック](/handbook/marketing/developer-relations/engineering/#contributor-flywheel)の下にまとめ、必要に応じて子エピックを使用してください。

- [目標外の取り組み](https://gitlab.com/groups/gitlab-org/developer-relations/contributor-success/-/work_items/59)には、複数の領域にまたがる作業をまとめます。
- [運営とチームの効率化](https://gitlab.com/groups/gitlab-org/developer-relations/contributor-success/-/work_items/60)には、運営に関する作業をまとめます。
  どちらもファネルの段階には含まれません。

[顧客アカウントの成長](https://gitlab.com/groups/gitlab-org/developer-relations/contributor-success/-/work_items/35)と[製品の成長](https://gitlab.com/groups/gitlab-org/developer-relations/contributor-success/-/work_items/36)の記録は成果を定義するもので、デリバリー作業をまとめる枠ではありません。

[工数が大きい Issue](#effort)は、1 つの大きなデリバリータスクにまとめず、エピックと、それぞれが単独で役に立つ小さな Issue に分けることを検討してください。
工数が大きいエピックについては、子エピックや小規模な Issue、段階ごとのデリバリーマイルストーンを検討してください。
これらは進捗を確認しやすくするための方法です。見積もりだけで実施の要否が決まるわけではありません。

### ボードと作業の可視性 {#boards-and-visibility}

[コントリビューターのフライホイールボード](https://flywheel-97bd65.gitlab.io/)では、デリバリー作業を段階とエピックごとにまとめます。
現在は GitLab のエピックボードや Issue ボードを使用していません。今後は、優先度や担当者ごとにまとめるなどの使い方を検討します。

フライホイールボードは、全プロジェクトのバックログを網羅していません。
[集計ルール](https://gitlab.com/gitlab-org/developer-relations/contributor-success/flywheel/-/blob/main/README.md#what-counts)で対象となるのは、`contributor-success` のオープンなエピックと `team-task` のオープンな Issue のみです。
ほかのプロジェクトの Issue は、対象のエピックに紐づいていても表示されません。
閲覧者に何が表示されるかは、サインインの状況や権限にも左右されます。
ボード上の仮の項目ではなく成果を報告する方法は、[報告と測定](/handbook/marketing/developer-relations/engineering/reporting/#report-progress)を参照してください。

`team-task` 外の作業を報告する際は、ボードに表示されていない作業も、該当する Issue にリンクしてください。
大規模なプラットフォームの取り組みは `team-task` に調整用の Issue を作成すればボードに表示できますが、`contributors-gitlab-com` にある実装用の Issue は引き続き対象外です。
各担当プロジェクトの Issue をすべてプロジェクト横断のバックログに載せるかどうかは、まだ決まっていません。ボードの対象範囲によって、上記の Issue 作成先のルールが変わることはありません。

## 評価と優先順位付け {#assess-and-prioritise}

デリバリーを確約する前に、チームの戦略に対して見込まれる影響と工数を比較して妥当性を確認してください。

### 影響と工数 {#impact-and-effort}

Issue またはエピックの説明に、[影響](#impact)と[工数](#effort)をそれぞれ低・中・高の 3 段階で記録し、その根拠も記載してください。
これらは今後調整していくための当初の目安です。GitLab 全体で使用する `Impact::` や `Effort::` ラベルの定義とは異なります。
期限、コントリビューターの作業を妨げるバグ、先送りする場合のコストなど、緊急度も説明してください。

作業内容を具体化する際は、数値による採点式を使わず、概算を比較して判断してください。
原則として[優先度マトリクス](#priority-labels)に従い、例外は記録してください。
より小さな成果物で前提を検証したりブロッカーを解消したりできる場合は、作業を分割してください。
根拠となる情報が変わったときにほかの人が判断を見直せるよう、優先度を決めた理由を記録してください。

#### 影響 {#impact}

各項目に見込まれる効果が必要です。誰にメリットがあるのか、どのような問題やブロッカーがあるのか、成長の成果やその解釈に役立つ指標にどう貢献するのかを記載してください。
コントリビューターからのフィードバックや実際に確認されたボトルネックなどの根拠にリンクし、見立ての確度と前提を明記してください。

| 評価 | 当初の目安 |
| --- | --- |
| 低 | 1 つのタスクの障壁を取り除くなど、狭い範囲や一部に限られた段階的な改善。 |
| 中 | 繰り返し発生するブロッカーを解消する、共通のワークフローを改善する、または対象が明確なコントリビューターやお客様のグループに具体的な効果が見込まれる。 |
| 高 | 成長 KPI の大幅な改善、共通の大きなボトルネックの解消、または戦略的で再利用可能なケイパビリティを裏付ける根拠がある。そのケイパビリティは、多くの人にメリットをもたらすか、お客様にとって重要な成果につながる。 |

影響の及ぶ範囲、効果の大きさ、再利用の可能性を併せて考慮してください。人数だけで影響は決まらず、お客様に関する作業も一律に高と評価するわけではありません。
価値ある実験を行うのに確実性は必要ありません。影響が不明な場合は、その不確実性を明記し、何を学ぶかを定めた小規模な実験を提案してください。

#### 工数 {#effort}

カレンダー上の経過時間ではなく、設計、実装、テスト、レビュー、ドキュメント作成、調整、継続的な負担を含む、実作業にかかる全員分の工数を見積もってください。
役に立つ最小の成果物、依存関係、不確実性を記載してください。

| 項目の種類 | 低 | 中 | 高 |
| --- | --- | --- | --- |
| Issue | 数時間 | 約 1 営業日 | 複数営業日 |
| エピック | 数営業日 | 数週間 | 数週間を超える |

これらの区分はおおまかな目安です。厳密な境界やデリバリーの確約を示すものではありません。
エピックの見積もりは、まとめたデリバリー作業の全範囲を対象とします。工数が低のエピックと工数が低の Issue を直接比較したり、集計時に両方を数えたりしないでください。

`contributors-gitlab-com` では、工数が低または中に収まるアクションを目指してください。
工数が高の Issue は、分割や、[作業全体を `team-task` で追跡すること](#projects-and-issues)を検討し、[必要に応じてエピックを使用](#epics-and-delivery-groups)してください。
たとえば、小規模な UI の文言修正は工数も影響も低い場合がありますが、複数の手順にわたるオンボーディングの改善は工数が大きく、分割が必要になることがあります。
改善の影響は、作業の規模ではなく、見込まれる効果と根拠に基づいて評価してください。

### 優先度ラベル {#priority-labels}

通常は、以下の表を使って、影響と工数から優先度を決めてください。

| 影響 | 工数：低 | 工数：中 | 工数：高 |
| --- | --- | --- | --- |
| 高 | `priority::1` | `priority::1` | `priority::2` |
| 中 | `priority::1` | `priority::2` | `priority::3` |
| 低 | `priority::2` | `priority::3` | `priority::4` |

`priority::1` が最も高く、`priority::4` が最も低い優先度です。
緊急度、依存関係、戦略上のコミットメントに応じて、表の優先度を変更できます。
変更する理由は、Issue またはエピックの説明に記録してください。

## 作業のデリバリー {#deliver-work}

規模の大きい項目には、戦略と報告に責任を持つ [DRI](/handbook/marketing/developer-relations/engineering/reporting/#who-decides-and-who-owns)がいます。DRI がすべての実装タスクを担当する必要はありません。

### ワークフローラベル {#workflow-labels}

現在、私たちは作業の追跡にワークフローラベルを使用していません。
今後は作業項目のステータスを採用する可能性がありますが、従来のワークフローラベルの使用は避けます。

### Issue の選び方 {#how-to-pick-issues}

優先度に基づいて Issue を選んでください。
当四半期は `priority::1` と `priority::2` に注力してください。
大規模なプロジェクトの合間に、優先度の低いタスクに取り組むこともできます。
タスクを選ぶときは、GitLab の効率性とイテレーションの原則に従い、Manager of One として行動してください。

作業の進捗に合わせて、Issue のステータス、実装計画、ブロッカーを最新の状態に保ってください。
[チームのスタンドアップ](#stand-up)を活用し、作業を進めたりブロッカーを解消したりするために協力してください。

## チームの定例活動 {#team-cadence}

### レトロスペクティブ {#retrospective}

記録のある最新のチームレトロスペクティブは [FY26Q3](https://gitlab.com/gitlab-org/developer-relations/contributor-success/team-task/-/issues/1002)を対象とし、2025 年 11 月に非同期で実施しました。
ここ数四半期はレトロスペクティブを定期的に実施していません。
私たちは仕事の進め方を見直しており、今後レトロスペクティブを再開する可能性があります。

### スタンドアップ {#stand-up}

このスタンドアップの目的は、チームメンバー同士の連携です。
チーム内でブロッカーと進捗を確認し、発想を変えて目標に向けてイテレーションを進める方法を話し合います。

- アジェンダ：<https://docs.google.com/document/d/1chIzCdg1CNRrRRuYR7c7OW_BF1mBxKFTJoXyP2HLt4E/edit#heading=h.o6qzal1u0b7i>

## 進捗の報告 {#report-progress}

成果とデリバリー活動の区別、作業の分類、報告担当者の割り当て、成果の解釈に役立つ指標やダッシュボードの使い方については、[報告と測定](/handbook/marketing/developer-relations/engineering/reporting/#report-progress)を参照してください。
