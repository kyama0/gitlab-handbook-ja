---
title: "Infrastructure Platforms の OKR"
upstream_path: /handbook/engineering/infrastructure-platforms/okrs/
upstream_sha: "52419353ea755a1ac823553385f8636ff2fcde17"
translated_at: "2026-11-01T04:33:53+00:00"
translator: claude
stale: false
lastmod: "2026-10-28T11:20:12-04:00"
---

## Platforms における OKR {#okrs-in-platforms}

### OKR の作成 {#creating-okrs}

進捗追跡を必要とする [OKR](https://internal.gitlab.com/handbook/company/gitlab-operating-model/)（またはプロジェクト外のその他の項目）は、**毎週水曜日**に更新する必要があります。

OKR を作成する際のガイダンスは以下の通りです:

* Objective（目標）は「**何を**達成したいか？」と定義されます
* Key Results（主要成果）は「目標を達成したことを**いつ**どうやって知るか？」と定義されます
* KR の一部として、サブポイントを設けることもできます — これはエピックに紐付く可能性が高く、「Initiative（取り組み）」と呼ばれ、「**どのように**主要成果を達成するか？」と定義されます

#### 目標 {#objectives}

Objective の説明は以下のフォーマットに従う必要があります:

```markdown
### Context

<context about the Objective and the problem it is trying to solve>

### Linked Epics and Issues

<numbered list of relevant epics or issues>
```

説明に他のセクションも必要な場合は、上記のブロックの後に追加できます。

#### 主要成果 {#key-results}

Key Result の説明は以下のフォーマットに従う必要があります:

```markdown
### Context

<context about how this Key Result contributes to meeting the goal of the Objective>

### Scoring Criteria

<numbered list of epics or issues with the percentage contribution>
```

### OKR を最新の状態に保つ {#keeping-okrs-up-to-date}

Objectives および Key Results は毎週水曜日に更新する必要があります。

Key Results については、DRI が Key Result の進捗と健全性を更新する必要があります。

Objectives については、DRI が健全性を更新し、短いステータスアップデートを提供する必要があります。
ステータスアップデートは、その Objective に属する各 Key Result の 1 行サマリーである必要があります。
Objectives の進捗はオートメーションによって行われるため、手動で更新すべきではありません。

大きなステータスアップデートを行わない理由は、リンクされた Issue やエピックに既に存在するステータス情報に依存しているからです。
OKR プロセスを可能な限り軽量に保つよう努めています。

### OKR レトロスペクティブ {#okr-retrospective}

四半期末に、各チームは Objectives についてレトロスペクティブを実施する必要があります。
レトロスペクティブの形式は定められていません — 別の Issue または Objective 自体で実施できます。

レトロスペクティブの結果として、以下のフォーマットを使用して Objective の説明フィールドを更新します:

```markdown
### Retro

#### Good

<2-3 bullet points summarising what went well during this OKR>

#### Bad

<2-3 bullet points summarising what didn't go well during this OKR>

#### Try

<2-3 bullet points summarising what we should try to do differently next time>

```

Retro セクションが確定したら、OKR をクローズできます。
