---
title: "Infrastructure Platforms の OKR"
upstream_path: /handbook/engineering/infrastructure-platforms/okrs/
upstream_sha: 0e6f01390a34aeb6706ace17d8d3c50e74e82d0d
translated_at: "2026-04-28T00:00:00Z"
translator: claude
stale: false
---

## Platforms における OKR

### OKR の作成

進捗追跡を必要とする [OKR](/handbook/company/okrs/)（またはプロジェクト外のその他の項目）は、**毎週水曜日**に更新する必要があります。

OKR を作成する際のガイダンスは以下の通りです:

* Objective（目標）は「**何を**達成したいか？」と定義されます
* Key Results（主要成果）は「目標を達成したことを**いつ**どうやって知るか？」と定義されます
* KR の一部として、サブポイントを設けることもできます — これはエピックに紐付く可能性が高く、「Initiative（取り組み）」と呼ばれ、「主要成果をどのように**達成するか**？」と定義されます

#### Objectives

Objective の説明は以下のフォーマットに従う必要があります:

```markdown
### Context

<Objective と解決しようとしている問題についてのコンテキスト>

### Linked Epics and Issues

<関連するエピックまたは Issue の番号付きリスト>
```

説明に他のセクションも必要な場合は、上記のブロックの後に追加できます。

#### Key Results

Key Result の説明は以下のフォーマットに従う必要があります:

```markdown
### Context

<この Key Result が Objective の目標達成にどのように貢献するかについてのコンテキスト>

### Scoring Criteria

<貢献パーセンテージを含むエピックまたは Issue の番号付きリスト>
```

### OKR を最新の状態に保つ

Objectives および Key Results は毎週水曜日に更新する必要があります。

Key Results については、DRI が Key Result の進捗と健全性を更新する必要があります。

Objectives については、DRI が健全性を更新し、短いステータスアップデートを提供する必要があります。
ステータスアップデートは、その Objective に属する各 Key Result の 1 行サマリーである必要があります。
Objectives の進捗はオートメーションによって行われるため、手動で更新すべきではありません。

大きなステータスアップデートを行わない理由は、リンクされた Issue やエピックに既に存在するステータス情報に依存しているからです。
OKR プロセスを可能な限り軽量に保つよう努めています。

### OKR レトロスペクティブ

四半期末に、各チームは Objectives についてレトロスペクティブを実施する必要があります。
レトロスペクティブの形式は定められていません — 別の Issue または Objective 自体で実施できます。

レトロスペクティブの結果として、以下のフォーマットを使用して Objective の説明フィールドを更新します:

```markdown
### Retro

#### Good

<この OKR 期間中にうまくいったことを 2〜3 つの箇条書きでまとめる>

#### Bad

<この OKR 期間中にうまくいかなかったことを 2〜3 つの箇条書きでまとめる>

#### Try

<次回は異なるやり方を試すべきことを 2〜3 つの箇条書きでまとめる>

```

Retro セクションが確定したら、OKR をクローズできます。
