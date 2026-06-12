---
title: "Release stages"
description: "Organizations チームが協調された一連のフィーチャーフラグステージを通じて作業をリリースする方法"
upstream_path: /handbook/engineering/infrastructure-platforms/tenant-scale/organizations/release-stages/
upstream_sha: 0505a0f5a670366af5dd620eb2b9f12ebd7a79fe
lastmod: 2026-06-11T10:03:08+08:00
translated_at: "2026-06-12T21:15:09Z"
translator: claude
stale: false
---

## 概要 {#overview}

Organization のステージは、全社的なプラクティスからかなり逸脱しています。これに関する
正式な構造を提供することは、リリーストンネルを通じて作業を導き、すべての関係者
（私たち自身、チーム、顧客）が物事がどの段階にあるかを把握できるようにするのに役立ちます。

Organizations は多くの機能で構成される **サーフェス** であり、それらの機能は必ずしも
同時に同じリリースステージにあるわけではありません。顧客にとって、サーフェスは
単一のものとして提示されます。開発チームにとっては階層的であり、**ステージのオニオン（玉ねぎ）** であって、
各層が前の層よりも広い対象者とより多くのプラットフォームに到達します。機能は Experimental の中核から始まり、
成熟するにつれて層を通じて外側に広がり、対象者とプラットフォームの範囲を広げながら、最終的に外側の
Stable 層に落ち着きます。ステージは一時的なものです。機能はそこに蓄積されるのではなく素早く通過し、
すべての機能は最終的に Stable に到達し、もはやフィーチャーフラグの背後にはありません。

```mermaid
flowchart TB
  subgraph STABLE["Stable"]
    STABLEf["most Organization features"]
    subgraph GA["GA"]
      GAf["(no features in flight)"]
      subgraph LA["Limited Availability"]
        LAf["Feature Z"]
        subgraph BETA["Beta"]
          BETAf["(no features in flight)"]
          subgraph EXP["Experimental"]
            EXPf["Feature X · Feature Y"]
          end
        end
      end
    end
  end
```

各層はステージであり、内側に表示される機能はそのステージで現在進行中のものです。
層はしばしばまばらか空です。どの瞬間においても、ほとんどの機能はすでに Stable 層へと
広がり出ています。

## ステージのまとめ {#stage-summary}

各ステージのスナップショット、つまりその対象者、フィーチャーフラグ、ターゲットプラットフォーム、ロールバック:

| Stage         | Audience                               | Flag (`default_enabled`)              | Platforms                             | Handbrake                                              |
| ------------- | -------------------------------------- | ------------------------------------- | ------------------------------------- | ------------------------------------------------------ |
| Experimental  | Organizations team and selected peers  | `org_stage_experimental` (`false`) | GitLab.com                            | Flag (GitLab-operated)                                 |
| Beta          | GitLab team + opted-in customers       | `org_stage_beta` (`false`)         | GitLab.com                            | Flag (GitLab-operated)                                 |
| LA 25→100     | Customers, 25 / 50 / 75 / 100%         | `org_stage_la_25…100` (`false`)    | GitLab.com                            | Flag (GitLab-operated)                                 |
| GA            | Everyone                               | `org_stage_ga` (`true`)            | GitLab.com + Self-Managed + Dedicated | Retained — .com + Self-Managed; **inert on Dedicated** |
| Stable        | Everyone                               | *(flag removed)*                      | All platforms                         | None — permanent product                               |

## ステージ {#stages}

作業は 5 つのステージを通って進みます。すべてのステージは最初に GitLab.com で実行されます。Self-Managed
と Dedicated は、機能が GA に到達して初めてそれを受け取ります:

```mermaid
block-beta
  columns 5
  E["Exp."] B["Beta"] LA["LA"] GA["GA"] S["Stable"]
  COM["GitLab.com"]:5
  space:3 SM["Self-Managed"]:2
  space:3 DED["Dedicated"]:2
```

**Exp.** = Experimental · **LA** = Limited Availability (25 → 50 → 75 → 100%)。

### 1. Experimental {#1-experimental}

- このステージは、.com 上の Organizations チームと選ばれたピアに「リリース」します。
- すべての experimental 作業は、`org_stage_experimental` フィーチャーフラグの背後にあります。
- これは、大規模および／または複雑で反復的な改善を必要とするために未完成な作業のための
  場所です。たとえば、オンボーディング、管理エリア、認証作業など。

### 2. Beta {#2-beta}

- .com 上の GitLab チームとオプトインした顧客にリリースします。
- `org_stage_beta` フィーチャーフラグの背後に実装されます。

### 3. Limited Availability (LA) {#3-limited-availability-la}

- すべての .com ユーザーに、25%、50%、75%、100% の増分でリリースされます。
- `org_stage_la_<increment>` フィーチャーフラグを利用します。

### 4. Generally Available (GA) {#4-generally-available-ga}

- すべての顧客にリリースされます。
- すべてのプラットフォームでリリースされます。
- GA は概念的に、機能が **self-managed**（および Dedicated）にリリースされる場所であり、
  Organizations はこれを特別に扱います。
- `default_enabled: true` を持つ `org_stage_ga` フィーチャーフラグを使用します。
- このフラグは、.com と Self-Managed における緊急ブレーキとして保持されます。
- Dedicated では、このフラグは事実上無効です。デフォルトで有効になっているため
  機能は利用可能であり、Dedicated の顧客は
  [フィーチャーフラグを変更できません](https://docs.gitlab.com/subscriptions/gitlab_dedicated/#feature-flags)。
  [Dedicated での機能の有効化](https://docs.gitlab.com/development/enabling_features_on_dedicated/)に関する
  開発者向けガイダンスも参照してください。

### 5. Stable {#5-stable}

- 内部の議論のために定義するステージですが、顧客にとっては重要ではありません。
- フィーチャーフラグステージのトンネルを終わらせます。
- Organization プロダクトのほとんどは最終的にここに存在し、もはやフラグの背後にはありません。

## ステージ間の移動 {#moving-through-the-stages}

機能はすべてのステージに触れる必要はありません。デフォルトのパスは
Experimental → Beta → LA → GA → Stable で、いくつかのルールがあります:

1. **Experimental は任意です** — 適切な場合はスキップしてください。機能は Beta から始めることができます。
1. **Beta は必須です** — スキップしないでください。
1. **LA は 100% に到達する必要があります** — 中間の増分（25 / 50 / 75）はスキップできますが、
   機能は GA の前に LA 100% に到達します。
1. **GA はすべての機能に強制されるわけではありません** — それは重要な self-managed のリリースポイントですが、
   小さな変更は直接 Stable に落ち着くことができます。
1. **機能はステージを ChatOps ではなく MR で進めてください。** 機能を
   次のステージに移動することはコード変更（そのステージフラグのメンバーシップ）であり、他のものと同様にレビューされます。
1. **機能を滞留させないでください。** あるステージに留まっている機能は問題の兆候です。前方（または後方）に
   移動することで解決してください。層全体を引き戻す必要がある場合は、ChatOps を通じてステージを無効化
   できます（GA のハンドブレーキと同じメカニズム）。

{{< alert type="note" >}}

上記のルールはデフォルトのパスであり、厳格な要件ではありません。ロールアウトに対する
きめ細かい制御を必要とするハイリスクな機能は、完全に逸脱することがあります。共有のステージフラグの代わりに、
独自の機能ごとのフィーチャーフラグと特注のロールアウト計画を使用します。

{{< /alert >}}

## リリースターゲット {#release-targets}

この構造のもとで、私たちは以下にリリースします:

1. Beta では選ばれた顧客。
2. LA 100 ではすべての .com 顧客。
3. GA ではすべての顧客。

対象者のアクセスは累積的です。各グループは 1 つ後のステージで加わり、
Stable を通じてアクセスを保持するため、GA と Stable は全員に同時にサービスを提供します:

```mermaid
block-beta
  columns 5
  E["Experimental"] B["Beta"] LA["LA 25→100%"] GA["GA"] S["Stable"]
  ORG["Organizations team + peers"]:5
  space:1 GLT["GitLab team + opted-in customers"]:4
  space:2 COMU["All .com users"]:3
  space:3 ALLC["All customers · all platforms"]:2
```

## なぜこの構造なのか {#why-this-structure}

これらのステージは単なるリリースメカニズム以上のものです。それらは Organizations チームが
作業を組織する際の共有された構造です。

事前定義された対象者とターゲットプラットフォームを持つ名前付きステージのセットを定義することで、私たちの
言語、プロセス、目標が整理され、一致します。

事前定義された対象者とターゲットがあることで、機能ごとに対象者とプラットフォームターゲットを
絶えず再定義する負担を軽減します。

このモデルのもとで、責任は 2 つの機能の間できれいに分かれ、それぞれが
ステージのトンネルを通じて作業を進めることに集中できます:

- **エンジニアリング** は、標準化されたリリースステージを通じてコードを進めます。
- **プロダクト** は、エンジニアリング、他のチーム、顧客にまたがってステージを一致させます。

事前定義されたステージは、フィーチャーフラグの作成と保守の負担と摩擦を軽減します。
今日、各エンジニアは機能のフラグライフサイクルを自分で
解決する必要があります。GitLab の標準的な増分ロールアウトは Organization のニーズに合わず、
機能ごとに状態遷移を計算するのは不当に複雑であり、そのオーバーヘッドが
そもそもフラグを使うことを思いとどまらせます。機能が通過する共有のステージフラグは、その
機能ごとの負担を取り除きます。

experimental ステージは、beta に入れることができないエンジニアリング作業を着地させる
ためのバケットを提供します。このステージがなければ、作業は「未完成」の MR として滞留することになります。

## 全社的なフィーチャーフラグライフサイクルとの関係 {#relationship-to-the-company-wide-feature-flag-lifecycle}

これらのステージは、GitLab の標準的な
[フィーチャーフラグライフサイクル](/handbook/product-development/how-we-work/product-development-flow/feature-flag-lifecycle/)の上に位置し、
そこから逸脱します。標準プロセスは、個々の機能がどのようにフラグ付けされロールアウトされるかを管理します。
Organizations サーフェスについては、上記で説明した追加の構造を適用します。それらが
異なる場合、Organizations の作業はこのページが管理します。

私たちがどのように逸脱するか:

- **機能ごとのライフサイクルではなく、共有のステージフラグ。** すべての機能が
  独自のフィーチャーフラグライフサイクルを定義し駆動する代わりに、サーフェスは小さく固定された一連の
  名前付きステージフラグ（`org_stage_experimental`、`org_stage_beta`、
  `org_stage_la_<increment>`、`org_stage_ga`）を使用します。機能は成熟するにつれてこれらのフラグを
  通って移動するため、エンジニアは機能ごとにロールアウト計画（対象者、プラットフォーム、
  増分）を再計算しません。
- **事前定義された対象者とプラットフォーム。** 各ステージには固定された対象者とターゲット
  プラットフォームのセットがあるため、機能ごとにそれらを再定義しません。
- **保持される GA「ハンドブレーキ」。** ロールアウト直後にフラグを削除するのではなく、
  `org_stage_ga` フラグは Stable ステージまで、サーフェス全体の緊急ブレーキとして
  保持されます。
- **Experimental ステージ。** Beta の準備ができていない大規模／複雑で
  未完成な作業のために、明示的な Beta 前の場所を追加します。
