---
title: "Cloud Connector ADR PROV-002: オペレーターベースのエンタイトルメント"
owning-stage: "~devops::fulfillment"
toc_hide: true
upstream_path: /handbook/engineering/architecture/design-documents/cloud_connector/fulfillment/decisions/prov_002_operators/
upstream_sha: 0ee1352c26e468fa8032143d735391a793de7086
translated_at: "2026-04-27T03:34:38Z"
translator: claude
stale: false
---

## コンテキスト

### 以前のエンタイトルメントアーキテクチャの問題

#### 制限と技術的負債

エンタイトルメントモデルは**ユニットプリミティブ（機能）**を評価の*唯一*の軸として扱っていました。*オペレーターレベルのエンタイトルメント*（誰が機能を提供するか）という概念がなく、いくつかの制限につながっていました：

* **オペレーターごとにアドオンを組み合わせる方法がない**
  セルフホスト型シナリオでは、すべての AI 機能は `duo_enterprise` を必要とするように強制されていました。
  以下のような組み合わせはサポートできませんでした：

  > "Self-Hosted + Duo Pro"

  回避策として以下が必要でした：

  * ランタイムで Cloud Connector 設定をオーバーライドする
  * 以下のようなルールをハードコードする：

    > "Self-Hosted では、すべての機能が Duo Enterprise を必要とするようになった"

  Amazon Q や将来のサードパーティオペレーターでも同様の問題が発生しました。

* **オペレーターレベルの収益化ができない**
  同じユニットプリミティブを、誰が運用するかに応じて異なる方法でパッケージ化または価格設定することができませんでした。
  例: `duo_chat` は GitLab クラウドでは無料でも、Amazon Q では有料にする可能性があります。

* **回避策が技術的負債を増加させた**
  オペレーターレベルのエンタイトルメントの欠如を処理するために、ランタイムオーバーライドとハードコードされたルール
  （例: "Self-Hosted では、すべての機能が Duo Enterprise を必要とするようになった"）に依存しました。
  これらの回避策により、Cloud Connector の外側でロジックが重複し、エンタイトルメントチェックが一貫性のない脆弱なものになりました。

## 決定事項

ユニットプリミティブと並んで、**オペレーターレベルのエンタイトルメントをファーストクラスの次元として**導入します。これにより柔軟性の新しい軸が追加され、*誰が機能を運用するか*に応じて同じ機能を異なる方法でパッケージ化・収益化できるようになります。

すべてのオペレーターキーは以下の命名規則に従います：

* `<name>_operator`

### オペレーター

* `gitlab_cloud_operator` → GitLab が顧客のために機能を運用する（クラウドベースの実行）
* `self_hosted_operator` → 顧客が自分で機能を運用する（セルフホスト型実行）
* `amazon_q_operator` → Amazon が機能を運用する（Amazon Q 統合）

## 新しいアーキテクチャ: オペレーター + ユニットプリミティブ

### 二次元のエンタイトルメント

以下のみを問う代わりに：

> "機能 X は許可されているか？"

新しいモデルは以下を評価します：

> "オペレーター Y は許可されているか？"
> "オペレーター Y の下で機能 X は許可されているか？"

### オペレーターとは何か？

**オペレーター**はユニットプリミティブ（UP）を提供する責任を持つ**実行権限**です。

**アドオンおよび UP と分離されている理由：**

* **アドオン** → 顧客が購入する商業 SKU（価格設定/パッケージング）
* **オペレーター** → *誰が機能を実行するか*（GitLab、顧客、Amazon など）
* **ユニットプリミティブ（UP）** → 機能そのもの

## エンタイトルメントの評価

* **要件リスト内**（例: オペレーターまたはユニットプリミティブの下の `add_ons` や `license_types`）:
  エントリは **OR リスト**として扱われます。単一の一致するアドオンまたはライセンスタイプで要件を満たすのに十分です。

* **オペレーターとユニットプリミティブの間**:
  両方が満たされる必要があります。最終的なアクセスは以下の場合にのみ付与されます：

    1. **オペレーターの要件が満たされている**
    2. **ユニットプリミティブの要件が満たされている**

シートチェックは、その要件を満たすアドオンがシートスコープされている場合にのみ、その特定のアドオンに**のみ**適用されます。

**例:**

* `duo_chat` がサポートするもの: `duo_core` **または** `duo_pro` **または** `duo_enterprise`
* `gitlab_cloud_operator` は無料 → `duo_chat` は顧客がそれらのアドオンのいずれか 1 つを持っていれば付与されます。

  * **未割り当て**のエンドユーザーは `duo_core` 経由でアクセスできます。オペレーターは無料であり、`duo_core` はインスタンス全体（シートベースではない）だからです。

* `self_hosted_operator` が必要とするもの: `duo_enterprise`

  * `duo_enterprise` + `duo_core` を持つ**未割り当て**のエンドユーザーは**拒否されます**：オペレーターの条件アドオンは `duo_enterprise`（シートスコープ）であり、割り当てが失敗します。
  * `duo_enterprise` + `duo_core` を持つ**割り当て済み**のエンドユーザーは**許可されます**：オペレーターは割り当て済みの `duo_enterprise` で満たされ、UP は `duo_core`（インスタンス全体）または割り当て済みシート SKU で満たせます。

## 実装の詳細

### オペレーター設定の例

```yaml
---
name: self_hosted_operator
add_ons:
- duo_enterprise
license_types:
- premium
- ultimate
```

### ユニットプリミティブ設定の例

```yaml
---
name: duo_chat
add_ons:
- duo_core
- duo_pro
- duo_enterprise
license_types:
- premium
- ultimate
operators:
- gitlab_cloud_operator
- self_hosted_operator
- amazon_q_operator
```

## 移行計画

1. `_operator` 命名規則に従ってオペレーターを導入するために Cloud Connector の設定を更新する：

   * `gitlab_cloud_operator`
   * `self_hosted_operator`
   * `amazon_q_operator`

2. 以下の順序でエンタイトルメントを解決するようにエンタイトルメントチェックを移行する：
   > オペレーター → ユニットプリミティブ
3. すべてのチェックが移行されたら、レガシーランタイムオーバーライド（`self_hosted_models`）を削除する。

## 影響

**ポジティブ:**

* オペレーターごとに異なる収益化モデルを実現できる
* ランタイムオーバーライドやパッチが不要になる
* Cloud Connector の柔軟な設定

**ネガティブ:**

* エンタイトルメントロジックと設定の複雑さが増す
* オペレーターを尊重するように既存のエンタイトルメントチェックの移行が必要

## 有用なリンク

* [GitLab Cloud Connector - ユニットプリミティブ設定](https://gitlab.com/gitlab-org/cloud-connector/gitlab-cloud-connector)
* [オペレーターベースのエンタイトルメントに関する初期議論](https://gitlab.com/gitlab-org/gitlab/-/issues/502821)
* [Self-Hosted Models のアーキテクチャ上の制約](https://gitlab.com/gitlab-org/gitlab/-/issues/503210)
