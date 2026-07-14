---
title: "Theseus ADR 003：Enterprise Platform Binding のサービスは Cell 障害時も稼働を継続する"
owning-stage: ""
description: "Cell レベルの障害が Enterprise にデプロイされたサービスへ波及しないよう、Enterprise Platform Binding で稼働するサービスが、GitLab Application や Cells で稼働する Modular Component に同期的に依存できないとする決定。"
toc_hide: true
upstream_path: /handbook/engineering/architecture/design-documents/theseus_platform_vision/decisions/003_enterprise_binding_survives_cell_outages/
upstream_sha: 8451bcaa23ef826bedc5422c87ee89de121dd85b
lastmod: "2026-06-30T17:42:08+02:00"
translated_at: "2026-07-14T07:42:19+09:00"
translator: codex
stale: false
---

<!-- Design Documents often contain forward-looking statements -->
<!-- vale gitlab.FutureTense = NO -->

## 状態

**提案中。**

## コンテキスト

[Enterprise Platform Binding](../#43-the-enterprise-platform-binding)は、
単一の Cell や Dedicated インスタンスに紐づかない、GitLab Inc. が運用するサービスをホストします。
対象には、`customers.gitlab.com`、
ライセンス生成、
請求の集約、
全体にまたがるその他のサービスが含まれます。

これらのサービスは、テナントの*上位*で運用され、
多数の Cells が同時に依存します。

Cell の障害は発生します。最近の事例は、その上限が数分ではないことを示しています。

- 2026 年 3 月、
  ドローン攻撃により湾岸地域の 3 つの AWS データセンターが損傷しました
  （[報道](https://theconversation.com/why-iran-targeted-amazon-data-centers-and-what-that-does-and-doesnt-change-about-warfare-278642)）。
  AWS は `me-central-1` からの移行を勧告し、1 か月分の料金を免除しました。
- 4 週間後の追加攻撃により、同リージョンの機能低下が続きました。

同じ形の障害は、電力障害、
ネットワーク分断、
規制措置、
長期化する自然災害によっても発生し得ます。
Cell に強く依存する Enterprise サービスの影響範囲は、その *Cell* の影響範囲と同じです。
「テナントの上位で運用する」という説明が成り立つのは、テナントが稼働していないときにもサービスを利用できる場合だけです。

## 決定

**Enterprise バインディングのサービスは、GitLab Application、
または Cells で稼働するその他の Modular Component に同期的に依存してはなりません。**

ホットパスで GitLab API を呼び出したり、
リクエスト時の判断で Tier 3 アプリケーション認可に依存したりするサービスは、
Enterprise バインディングの対象外です。

プロダクトチームは、次のテストを適用します
（[セクション 4.3.1](../#431-isolation-boundaries)）。

> *1 つの Cell が停止したときにサービスも停止または機能低下するなら、
> それは Enterprise サービスではありません。*

このテストを満たさないサービスは、Cells、Dedicated、または Self-Managed バインディングを使用します。
つまり、サービスが結合している障害ドメインと、テナンシーモデルがすでに一致しているバインディングです。

## 結果

### メリット

1. **Cell の障害が波及しません。**
   単一の Cell が利用できない場合でも、
   障害の継続時間にかかわらず、請求とライセンスは機能し続けます。
1. **テストは機械的に適用できます。**
   「1 つの Cell を選び、1 週間オフラインにします。このサービスは稼働し続けますか？」
   サービスを構築するチームが自らルールを適用できます。
1. **バインディングのテナンシーモデルが実態と一致します。**
   Enterprise サービスは本当にテナントの上位で運用されます。
   バインディングの設計が、サービスレベルの結合によってひそかに矛盾することはありません。

### デメリット

1. **リアルタイムの GitLab 状態を必要とするサービスは Enterprise を使用できません。**
   リクエスト時にアプリケーションのライブデータを読み取る必要があるものは、
   テナントに対応したバインディングに配置します。
1. **事前の設計作業が増えます。**
   結果整合性、定期同期、変更データキャプチャ、キャッシュなどの非同期パターンが、
   より単純な「GitLab API を呼び出す」経路に取って代わります。
1. **スコープが変わると、この境界を再検討する必要があります。**
   GitLab への依存なしで始まったサービスに、後から依存が増える可能性があります。
   この制約により、結合が徐々に蓄積するのではなく、
   明示的な判断（書き直す、バインディングを移す、依存を拒否する）が必要になります。

## 検討した代替案

### 代替案：GitLab API の同期呼び出しを許可し、リトライとサーキットブレーカーで軽減する

#### アプローチ

リトライとサーキットブレーカーで短時間の障害に対応できるという理由で、
Enterprise サービスから Cells への同期呼び出しを許可します。

#### 採用しなかった理由

脅威モデルは一時的な不調ではなく、複数日にわたるリージョン障害です。
サーキットブレーカーが 3 日間開いたままなら、
その機能も 3 日間利用できないということです。

## 参考資料

- [セクション 4.3 — Enterprise Platform Binding](../#43-the-enterprise-platform-binding) —
  この制約が保護するバインディング。
- [セクション 4.3.1 — 分離境界](../#431-isolation-boundaries) —
  この決定の基盤となる、Cell を分離境界とする基本要素。
- [2026 年 3 月の AWS 湾岸地域データセンターへの攻撃](https://theconversation.com/why-iran-targeted-amazon-data-centers-and-what-that-does-and-doesnt-change-about-warfare-278642) —
  複数日にわたる障害の脅威モデルに反映された具体的なインシデント。
