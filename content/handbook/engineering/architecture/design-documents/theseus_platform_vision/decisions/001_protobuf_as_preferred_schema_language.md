---
title: "Theseus ADR 001：推奨スキーマ言語としての Protobuf"
owning-stage: ""
description: "宣言的マニフェスト、構成スキーマ、API における Theseus の推奨スキーマ言語として Protobuf を採用し、同じインターフェース特性を満たす代替技術も認める決定。"
toc_hide: true
upstream_path: /handbook/engineering/architecture/design-documents/theseus_platform_vision/decisions/001_protobuf_as_preferred_schema_language/
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

Theseus は、プラットフォームとコンポーネントの境界を、
Application Development チームと Platform Engineering の間の
*契約としてのインターフェース*とする考え方に基づいて構築されています
（[セクション 2.3](../#23-what-is-an-interface)）。
インターフェースがこの役割を果たすには、次の条件を満たす必要があります。

- 強い型付けがあり、スキーマで定義されている
- 機械可読である
  （検証、言語バインディング、JSON Schema、ドキュメントを
  手作業ではなく生成できる）
- セマンティックバージョニングが適用され、互換性が保証されている
- 検証ルールとリファレンスドキュメントが同じ場所に置かれている

これらの運用特性は、複数のスキーマ技術で実現できます。

- **Protobuf**（Google）—
  強い型付け、
  コード生成優先、
  確立された Go と Ruby のツールチェーン、
  成熟したバージョニング規約、
  [protovalidate](https://protovalidate.com)によるインライン検証。
- **JSON Schema** —
  強い型付け、
  言語非依存、
  幅広いエコシステムのサポート、
  生成されたクライアントコードよりも*データの形状*が重要な、
  実行時に構成可能なシステムに適しています。
  現在、GitLab Dedicated の [Tenant Model Schema](https://gitlab.com/gitlab-com/gl-infra/gitlab-dedicated/tenant-model-schema/)で使用されています。
- **OpenAPI / Swagger** —
  HTTP API には適していますが、API 以外のコントラクトには適していません。
- **Avro / Thrift** —
  データパイプラインのコンテキストで使用されていますが、
  GitLab の既存の Go/Ruby エコシステムとの整合性は低くなります。

スキーマ定義のデフォルト技術を決めることで、
プラットフォームとツールを改善し、専門知識を共有して、
顧客への価値提供に集中できます。

## 決定

**Protobuf を、スキーマで定義するコントラクトにおける Theseus の推奨スキーマ言語とします** —
対象は、宣言的マニフェスト、構成スキーマ、プロトコルレベルの API です。

標準的な流れは次のとおりです。

1. スキーマは `.proto` ファイルとして作成します。
1. 検証ルールは、
   [protovalidate](https://protovalidate.com)アノテーションを介してインラインで表現し、
   [LabKit Configuration 設計ドキュメント](/handbook/engineering/architecture/design-documents/labkit_configuration/)に従います
   （[labkit!345](https://gitlab.com/gitlab-org/labkit/-/merge_requests/345)で実装中。
   設計については [`gitlab-org/gitlab#591894`](https://gitlab.com/gitlab-org/gitlab/-/work_items/591894)で議論）。
   これにより、スキーマと検証が乖離しません。
1. LabKit の型付き構成サーフェス
   （[セクション 3.2 の原則 6](../#32-platform-as-a-product-commitments)）を、
   Theseus 側でこれらのスキーマを利用する標準とします。
1. コントラクトが HTTP 境界を越える場合は、
   OpenAPI を別途作成せず、proto 定義から生成します。

**Protobuf 構文バージョン。**
Theseus に沿ったスキーマは、`proto3` の将来を見据えた後継である
[**Protobuf Edition 2023**](https://protobuf.dev/editions/overview/)を対象とします。
ワイヤーフォーマットは `proto3` から変更されず、完全な後方互換性を維持しますが、
Edition 2023 では機能ごとにオプトインできます。

**プラットフォームがサポートするツール。**
proto の lint、破壊的変更の検出、モジュール管理には、
[`buf`](https://buf.build/)ツールチェーンを強く推奨します。
サポートは、[`common-ci-tasks`](https://gitlab.com/gitlab-com/gl-infra/common-ci-tasks)の
再利用可能な CI ジョブとして提供されます。
詳細は [MR !1444](https://gitlab.com/gitlab-com/gl-infra/common-ci-tasks/-/merge_requests/1444)を参照してください。
これにより、コンポーネントチームは各プロジェクトにツールチェーンを組み込む代わりに、
該当する CI Component を含めることで、`buf` ベースの検証、lint、破壊的変更チェックを利用できます。

**リファレンスドキュメントの生成。**
`common-ci-tasks` は、ドキュメント生成ツール
（例：[`protoc-gen-doc`](https://github.com/pseudomuto/protoc-gen-doc)）も提供します。
このツールは、`.proto` スキーマのリファレンスドキュメントを
[Theseus Diátaxis 形式](../#5211-organization-of-documentation)で出力します。
これにより、スキーマのリファレンス資料はスキーマ自体から生成され、
コンポーネントのほかのドキュメントと同じ Modular Component ドキュメントサーフェスに配置されます。

**ほかのスキーマ技術も使用できます** —
ただし、[セクション 2.3](../#23-what-is-an-interface)のインターフェース特性
（強い型付け、機械可読、バージョン管理、検証の併置）を明確に満たす場合に限ります。

GitLab Dedicated の **Tenant Model Schema** は、
使用可能な代替技術の事例として文書化されています。

- Protobuf ではなく、バージョン管理された JSON Schema です。
- Switchboard はテナントモデルの状態を所有および保存し、
  Switchboard ユーザー
  （顧客と Environment Automation エンジニア）が
  その状態を編集したり、パッチをステージングしたりできるようにします。
- Instrumentor は検証済みのテナントモデルを利用し、
  インフラストラクチャ
  （Terraform、Ansible、Helm、Kubernetes）に変換します。
- バージョニングには運用上の意味があります。
  `$schema` は Switchboard で自由に編集できません。
  マッピングファイルを介して Instrumentor のバージョンから選択します。
  古い Instrumentor ブランチに対して新しいスキーマを使用することはできません。

## 結果

### メリット

1. **単一のデフォルトにより、エコシステムの断片化を抑えられます。**
   コンポーネントチームはデフォルトで `.proto` を使用するため、
   プラットフォームツール、コードジェネレーター、ドキュメントは、
   3 つではなく 1 つのスキーマファミリーを対象にできます。
1. **検証がスキーマから乖離しません。**
   `protovalidate` アノテーションは proto 定義自体に存在するため、
   検証ルールを破るスキーマ変更は、
   本番環境ではなくコード生成時に検出されます。
1. **生成されたバインディング。**
   Go と Ruby のクライアント、JSON Schema、OpenAPI、リファレンスドキュメントは、
   すべて手動管理ではなく生成される成果物です。
1. **LabKit の型付き構成コントラクトと整合します。**
   LabKit はすでに `.proto` スキーマによる構成を標準としているため、
   プラットフォームのデフォルトに Protobuf を選ぶことで、
   コンポーネント構成とプラットフォームコントラクトの循環が完成します。

### デメリット

1. **Protobuf には学習コストがあります。**
   `.proto` ファイル、`buf`、コード生成ツールチェーンに不慣れなチームは、
   ツールの使い方を学ぶ必要があります。
1. **選択には、例外を正当化する負担が伴います。**
   JSON Schema、OpenAPI 優先、またはほかの技術を選ぶチームは、
   Protobuf と比較してその選択を正当化する必要があります。
1. **ツールへの投資が 1 つのエコシステムに固定されます。**
   コード生成、検証、ドキュメントツールの改善は、
   Protobuf の経路で優先的に行われるため、
   代替経路は遅れる可能性があります。

## 検討した代替案

### 代替案：JSON Schema をデフォルトにする

#### アプローチ

Theseus 全体のデフォルトとして JSON Schema を選びます。
Tenant Model Schema はすでに JSON Schema を使用しています。
このスキーマ言語は広く理解され、言語に依存せず、
人が編集する構成には特に自然です。

#### 採用しなかった理由

1. **コード生成が弱くなります。**
   Protobuf のコード生成ツールチェーンは、
   型付きの Go と Ruby のバインディングをすぐに生成できます。
   JSON Schema のバインディングジェネレーターは成熟度が低く、
   言語間でより断片化しています。
1. **検証の併置が弱くなります。**
   JSON Schema の検証用語は表現力がありますが、
   拡張キーワードは、Protobuf エコシステムの `protovalidate` のように
   実装間で標準化されていません。
1. **LabKit はすでに Protobuf を標準としています。**
   JSON Schema をデフォルトにすると、
   LabKit は型付き構成用に 2 つの第 1 級スキーマ技術を
   サポートしなければなりません。
1. **適合する場合は、引き続き JSON Schema を使用できます。**
   この決定は JSON Schema を排除しません。
   Protobuf をデフォルトとし、
   JSON Schema（およびその他）を正当な例外とします。
   Tenant Model Schema には影響しません。

### 代替案：プラットフォーム全体のデフォルトを設けず、コントラクトごとに技術を選ぶ

#### アプローチ

スキーマ言語をローカルな意思決定として扱います。
コンポーネントチームはユースケースに適した技術を選び、
プラットフォームは特定の技術を推奨しません。

#### 採用しなかった理由

1. **断片化。**
   デフォルトがなければ、エコシステムには
   `.proto`、`.json`、OpenAPI、アドホックな YAML スキーマが蓄積し、
   各プラットフォームツールがサポートすべきツールが増えます。
1. **生成される成果物の標準化が難しくなります。**
   検証、ドキュメント、生成クライアントなどのスキーマ利用ツールには、
   コンポーネント間で一貫した出力を生成するための
   正規化された入力が必要です。
1. **デフォルトがあるからこそ、プラットフォームは迅速に進めます。**
   [セクション 2.3](../#23-what-is-an-interface)と
   「意思決定よりデフォルト」原則
   （[セクション 2.3 の原則一覧](../#23-what-is-an-interface)）では、
   プラットフォーム全体のデフォルトを明示的に優先しています。
   デフォルトを設けない姿勢は、この原則と矛盾します。

### 代替案：OpenAPI を優先する

#### アプローチ

コントラクトを OpenAPI 仕様として作成し、
そこから Protobuf、JSON Schema、その他の成果物を生成します。

#### 採用しなかった理由

1. **OpenAPI は HTTP API の形状に特化しています。**
   REST 形式の API には適していますが、
   HTTP に結び付かない `FairwayManifest` のような宣言的マニフェストや
   Tenant Model のような構成スキーマには使いにくくなります。
1. **Protobuf の経路では、OpenAPI は引き続き生成される成果物です。**
   コントラクトが HTTP 境界を越える場合は、
   OpenAPI を proto 定義*から*生成します。
   OpenAPI をソースにすると、依存関係が逆転します。

## 参考資料

- [セクション 2.3 — インターフェースとは？](../#23-what-is-an-interface) —
  この ADR が依存するインターフェース特性の基準の出典。
- [セクション 2.3.2 — 推奨技術：Protobuf](../#232-preferred-technology-protobuf) —
  この ADR が正式に定める方針表明。
- [セクション 3.2 — Platform-as-a-product のコミットメント](../#32-platform-as-a-product-commitments) —
  原則 6（LabKit を介した型付き構成）。
- [セクション 5.2.1.1 — ドキュメントの構成](../#5211-organization-of-documentation) —
  生成されたスキーマのリファレンスドキュメントを配置する Theseus Diátaxis 規約。
- [LabKit Configuration 設計ドキュメント](/handbook/engineering/architecture/design-documents/labkit_configuration/) —
  Theseus における型付き構成の標準実装。
- [`gitlab-org/gitlab#591894`](https://gitlab.com/gitlab-org/gitlab/-/work_items/591894) —
  標準化された LabKit 構成管理モジュールの設計に関する議論。
- [labkit!345](https://gitlab.com/gitlab-org/labkit/-/merge_requests/345) —
  LabKit の `v2/config` モジュールで進行中の実装。
- [protovalidate](https://protovalidate.com) —
  この ADR が依存するインライン検証ライブラリ。
- [`buf`](https://buf.build/) —
  推奨される Protobuf ツールチェーン。
- [`common-ci-tasks` MR !1444](https://gitlab.com/gitlab-com/gl-infra/common-ci-tasks/-/merge_requests/1444) —
  `common-ci-tasks` に追加される `buf` サポート。
- [`protoc-gen-doc`](https://github.com/pseudomuto/protoc-gen-doc) —
  `.proto` スキーマ向けリファレンスドキュメントの候補レンダラー。
- [John Ousterhout, *A Philosophy of Software Design*](https://web.stanford.edu/~ouster/cgi-bin/aposd.php) —
  Theseus が沿うインターフェース設計原則。
