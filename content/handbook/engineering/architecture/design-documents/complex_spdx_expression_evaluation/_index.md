---
title: 複雑な SPDX 式の評価
status: proposed
creation-date: "2025-01-06"
authors: [ "@hacks4oats" ]
coaches: []
dris: [ "@johncrowley", "@tkopel" ]
owning-stage: "~devops::application security testing"
participating-stages: ["~devops::security risk management"]
toc_hide: true
upstream_path: /handbook/engineering/architecture/design-documents/complex_spdx_expression_evaluation/
upstream_sha: 0ee1352c26e468fa8032143d735391a793de7086
translated_at: "2026-04-26T00:00:00Z"
translator: claude
stale: false
lastmod: "2025-04-28T10:53:04-07:00"
---

<!-- Design Documents often contain forward-looking statements -->
<!-- vale gitlab.FutureTense = NO -->


<div class="my-3 border-l-4 border-blue-500 bg-blue-50 px-4 py-3 rounded-r text-sm text-blue-800">
このページには今後予定されている製品・機能・機能性に関する情報が含まれています。ここに示す情報は参考目的のみです。購入・計画の決定にこの情報を使用しないでください。製品・機能・機能性の開発、リリース、タイミングは変更または延期される可能性があり、GitLab Inc. の独自の判断に委ねられています。
</div>

<div class="overflow-x-auto my-4">
<table class="w-full text-sm border-collapse">
<thead>
<tr class="bg-gray-100 text-left">
<th class="px-3 py-2 border border-gray-300">Status</th>
<th class="px-3 py-2 border border-gray-300">Authors</th>
<th class="px-3 py-2 border border-gray-300">Coach</th>
<th class="px-3 py-2 border border-gray-300">DRIs</th>
<th class="px-3 py-2 border border-gray-300">Owning Stage</th>
<th class="px-3 py-2 border border-gray-300">Created</th>
</tr>
</thead>
<tbody>
<tr>
<td class="px-3 py-2 border border-gray-300"><span class="inline-block rounded px-2 py-0.5 text-xs font-medium bg-gray-100 text-gray-700">proposed</span></td>
<td class="px-3 py-2 border border-gray-300"><a href="https://gitlab.com/hacks4oats" class="text-blue-600 hover:underline">@hacks4oats</a></td>
<td class="px-3 py-2 border border-gray-300"></td>
<td class="px-3 py-2 border border-gray-300"><a href="https://gitlab.com/johncrowley" class="text-blue-600 hover:underline">@johncrowley</a>, <a href="https://gitlab.com/tkopel" class="text-blue-600 hover:underline">@tkopel</a></td>
<td class="px-3 py-2 border border-gray-300"><span class="inline-block rounded px-2 py-0.5 text-xs font-medium bg-gray-100 text-gray-700">~devops::application security testing</span></td>
<td class="px-3 py-2 border border-gray-300">2025-01-06</td>
</tr>
</tbody>
</table>
</div>


## 概要

SPDX ライセンス式は、コードに関連するソフトウェアライセンスを文書化するための明確な[標準化された](https://spdx.github.io/spdx-spec/v2-draft/SPDX-license-expressions/)機械可読な方法を提供し、ライセンス義務への準拠を確保します。標準化された式により、ユーザーは法的リスクの管理、ライセンス要件の満足、ソフトウェアコンポーネントの再利用のための共有を容易に行えます。式は単純なもの（例：単一の SPDX ライセンス識別子で構成される式）から複雑なもの（例：複数の式がブール演算子を使用して組み合わせられる場合）まであります。

## 動機

プロジェクトは複雑なライセンス式を使用するライセンスモデルをますます採用しています。例えば、プロジェクトが Apache-2.0 と MIT の両方のライセンスを要求したり、ユーザーが Apache-2.0 と MIT のどちらかを_選択_できるようにする場合があります。残念ながら、単一のライセンス式ではこれを表現する方法がないため、複雑なライセンス式を使用するパッケージに依存するプロジェクトは、_不明_なライセンスのみを示す依存関係リストを持つことになります。これにより、依存関係のライセンスオプションを素早く確認することが不可能なユーザーエクスペリエンスが生まれ、ユーザーがそのような式に適したライセンス承認ポリシーを作成しようとするときにも問題が生じます。複雑な式のサポートにより、複雑なライセンスモデルを使用する依存関係を持つプロジェクトの開発ワークフローが改善されます。

### ゴール

- 単純なライセンス識別子と、`AND` および `OR` ブール演算子のサポート。
- ライセンス_識別子_だけでなく、ライセンス_式_で依存関係リストを表示する。例えば、`Apache-2.0 AND MIT` ライセンスを持つ依存関係はそのように依存関係リストに表示されます。
- 式を使用するプロジェクトにライセンス承認ポリシーを施行する。例えば、ライセンス承認ポリシーが `Apache-2.0` のみを承認し、提案された依存関係が `Apache-2.0 AND MIT` ライセンスを持つ場合、その依存関係は承認ポリシーを通過できません。一方、両方のライセンスに対して承認がある場合は_通過できます_。
- 多くのプロジェクトを持つグループ、および多くの依存関係を持つプロジェクトに対してパフォーマンスが許容範囲内であること。

### 非ゴール

- 最初のイテレーションには以下は含まれません：
  - `WITH` 演算子
  - `+` 演算子
  - `AdditionRef-`、`DocumentRef-`、`LicenseRef-` を使用する参照

## 提案

高レベルでは、ライセンス式はパッケージメタデータデータベース（PMDB）から伝播されます。これらの式はプロジェクトレベルとグループレベルの両方で依存関係リストに表示され、依存関係のライセンスの承認ステータスを評価する際にも使用されます。

## 設計と実装の詳細

SPDX ライセンス式は各エコシステムでさまざまなレベルでサポートされています。以下のテーブルは各エコシステムでのサポートレベルを示しています。

| エコシステム | サポートレベル |
| ----------- | ------------- |
| `cargo`     | 完全サポート |
| `cocoapods` | 1 つ以上の識別子 - 結合的な `AND` と同等 |
| `composer`  | 完全サポート |
| `conan`     | 1 つ以上の識別子 - 結合的な `AND` と同等 |
| `gem`       | 1 つ以上の識別子 - 結合的な `AND` と同等 |
| `golang`    | 1 つ以上の識別子 - 結合的な `AND` と同等 |
| `maven`     | 1 つ以上の識別子 - 結合的な `AND` と同等 |
| `npm`       | 完全サポート |
| `pypi`      | 1 つ以上の識別子 - 結合的な `AND` と同等 |
| `swift`     | 1 つ以上の識別子 - 結合的な `AND` と同等 |

### ライセンスオプション

高レベルでは、SPDX 式はライセンスの組み合わせのセットにコンパイルできます。以下の式を例に取ります。

```text
Apache-2.0 AND (MIT OR GLP-3.0)
```

この式は人間が読めて決定論的ですが、私たちのユースケースには最適化されていません。この式を表すさまざまなライセンスオプションに展開することで改善できます。この場合、オプションは次のように表現できます：

```json
[
    ["Apache-2.0", "MIT"],
    ["Apache-2.0", "GLP-3.0"]
]
```

ここから、ライセンス承認ポリシーをさまざまなライセンスオプションに対してどのように評価できるかが明確にわかります。承認ポリシーがいずれかのライセンスを拒否した場合、次のライセンスオプションで拒否をテストできます。ロジックの変更は最小限であり、[違反チェックロジック](https://gitlab.com/gitlab-org/gitlab/blob/4d8427c67fd1ecb7b854469d4151b0cddd2e9b34/ee/lib/security/scan_result_policies/license_violation_checker.rb#L32-L38)に追加の外部ループを加えるだけです。

### 評価

上記のソリューションは機能的ですが、パフォーマンス要件を満たすためにさらに改善する必要があります。前述のとおり、ライセンススキャンは最も大きなプロジェクトに対しても**パフォーマンスが高くなければなりません**。このソリューションはそれを提供しておらず、次の例で示せます。

以下のコンポーネントとライセンスを持つプロジェクトをスキャンし、ポリシー違反を評価したいライセンス承認ポリシーがあるとします。

```json
{
    "packageA": [ ["LicenseA", "LicenseB"], ["LicenseA", "LicenseC"]],
    "packageB": [ ["LicenseD", "LicenseE"], ["LicenseD", "LicenseF"]],
    "packageC": [ ["LicenseG", "LicenseH"], ["LicenseG", "LicenseI"]],
}
```

ライセンス承認ポリシーを評価する前に、データをクリーンアップして評価する単一のライセンスオプションの配列を作成する必要があります。このプロセスでは、配列をコンパクトにするためにオプションを組み合わせる必要があります。最初のパスでは、次のオプションが生成されます。

```json
[
    ["LicenseA", "LicenseB"],
    ["LicenseA", "LicenseC"],
]
```

2 回目のパスでは、既存のオプションと次のライセンスオプションのセットを組み合わせる必要があるため、次のようになります。

```json
[
    ["LicenseA", "LicenseB", "LicenseD", "LicenseE"],
    ["LicenseA", "LicenseC", "LicenseD", "LicenseE"],
    ["LicenseA", "LicenseB", "LicenseD", "LicenseF"],
    ["LicenseA", "LicenseC", "LicenseD", "LicenseF"],
]
```

オプションの量は大幅に増えましたが、_まだ終わっていません_。`packageC` の残りのライセンスオプションを組み込むために 3 回目と最後のパスが必要です。そうすると次の結果になります。

```json
[
    ["LicenseA", "LicenseB", "LicenseD", "LicenseE", "LicenseG", "LicenseH"],
    ["LicenseA", "LicenseC", "LicenseD", "LicenseE", "LicenseG", "LicenseH"],
    ["LicenseA", "LicenseB", "LicenseD", "LicenseF", "LicenseG", "LicenseH"],
    ["LicenseA", "LicenseC", "LicenseD", "LicenseF", "LicenseG", "LicenseH"],
    ["LicenseA", "LicenseB", "LicenseD", "LicenseE", "LicenseG", "LicenseI"],
    ["LicenseA", "LicenseC", "LicenseD", "LicenseE", "LicenseG", "LicenseI"],
    ["LicenseA", "LicenseB", "LicenseD", "LicenseF", "LicenseG", "LicenseI"],
    ["LicenseA", "LicenseC", "LicenseD", "LicenseF", "LicenseG", "LicenseI"],
]
```

この例から、異なるセットの直積を本質的に計算しているため、探索空間がいかに急速に拡大するかがわかります。この[組み合わせ爆発](https://en.wikipedia.org/wiki/Combinatorial_explosion)により、二重ライセンスパッケージが大量に存在する場合でもパフォーマンスが維持されるよう、実装をさらに改善する必要があります。

これを実現するために、ライセンスのベクトルとして機能する[ビット配列](https://en.wikipedia.org/wiki/Bit_array)を活用できます。高レベルでは、表現は次のように機能します。

- ビット配列の各ビットはライセンスの検出を表します。
- SPDX ライブラリには 729 の既知のライセンスがあります。これを考慮し、将来の成長とワードアライメントを考えると、1024 ビットのビット配列を使用できます。
- XOR ビット演算子を使用して承認または違反を検出できます。ビット演算は高速であり、プロセッサによって並列化することもできます。

実装を示すために、利用可能なオプションの小さなセットを使用して例を示します。プロジェクトが 8 つのライセンスのうち 1 つ以上を使用するオプションがある場合、次のようにライセンスを表現できます。

| 名前 | 最左インデックス（[MSB](https://en.wikipedia.org/wiki/Bit_numbering)）
| ---- | --------------
| LicenseA | 0
| LicenseB | 1
| LicenseC | 2
| LicenseD | 3
| LicenseE | 4
| LicenseF | 5
| LicenseG | 6
| LicenseH | 7

`LicenseF` を禁止するポリシーがあり、上記のライセンスオプションに対して評価したい場合を考えます。リストアプローチでは、2 つのリスト間の和集合演算を行う必要があります。Ruby ではこれを読みやすく[簡単に実行](https://gitlab.com/gitlab-org/gitlab/blob/4d8427c67fd1ecb7b854469d4151b0cddd2e9b34/ee/lib/security/scan_result_policies/license_violation_checker.rb#L32-L38)できます：

```ruby
          all_denied_licenses = (licenses_from_report - licenses_from_policy).uniq
          comparison_licenses = join_ids_and_names(license_ids, license_names)
          policy_denied_license_names = (comparison_licenses - licenses_from_policy).uniq
          violates_license_policy = policy_denied_license_names.present?
```

単一のライセンスオプションセットには許容できるかもしれませんが、大きなデータセットに使用するとパフォーマンスが低下し始めます。比較すると、ビット配列アプローチは次のようになります：

```ruby
licenses_from_policy = 0b00000100
licenses_from_report = 0b01010010

def is_compliant?(licenses_from_policy, licenses_from_report)
  (licenses_from_report & ~licenses_from_policy) == 0
end

is_compliant?(licenses_from_policy, licenses_from_report)
=> false
```

### ストレージ

#### PMDB

パッケージメタデータデータベースの[エクスポーターサービス](https://gitlab.com/gitlab-org/security-products/license-db/license-exporter)は、SPDX 式を解析し、ビットマスクの配列に変換します。

#### GitLab Rails

GitLab Rails データベースは、プロジェクトで使用されるライセンスを識別するための列挙型に依存しなくなります。代わりに、元のライセンス式とその同等のビットマスク表現を保存する追加カラムを追加します。

## 代替ソリューション

<!--
考慮された代替ソリューションまたはパスのリストを含めることをお勧めしますが、必須ではありません。各代替ソリューション/パスのメリットとデメリットを含めてください。

「何もしない」とそのメリットとデメリットもリストに含めることができます。
-->
