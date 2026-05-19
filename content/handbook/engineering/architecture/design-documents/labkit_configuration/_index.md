---
title: "LabKit 設定管理"
status: proposed
creation-date: "2026-03-05"
authors: [ "@andrewn" ]
coaches: ["@stanhu"]
dris: []
owning-stage: "~devops::systems"
participating-stages: []
toc_hide: true
upstream_path: /handbook/engineering/architecture/design-documents/labkit_configuration/
upstream_sha: 33ef35e4327874fd4153c5606125f5de47ff7924
translated_at: "2026-04-27T05:00:00Z"
translator: claude
stale: false
lastmod: "2026-03-05T09:42:34-08:00"
---

<!-- vale gitlab.FutureTense = NO -->


{{< engineering/design-document-header >}}


## 概要

このデザインドキュメントでは、[LabKit](https://gitlab.com/gitlab-org/labkit) のための標準化された
protobuf ファーストの設定管理モジュール（`v2/config`）について説明します。このモジュールは、
Protocol Buffers を設定スキーマの唯一の真実の情報源として使用する GitLab の Go サービス全体での統一された
設定処理アプローチを提供します。フォーマットの自動検出（YAML、JSON、TOML）、[protovalidate](https://protovalidate.com/) による
強力な検証、型付きバージョン移行、前方互換性のあるパースによるロールバックの安全性を含みます。

## モチベーション

設定管理は現在、GitLab の内部ツール全体で断片化されています。各サービスは独自の設定フォーマット、
検証ロジック、読み込みセマンティクスを定義しており、以下の問題が生じています:

- **フォーマットの不一致**: 異なるツールが YAML、TOML、または JSON をさまざまな規約で使用しています。
  Gitaly と Workhorse は TOML を使用しており、Operate チームは Helm chart の設定を生成する際に
  シリアライズが難しいと感じています。
- **検証の重複**: すべてのツールが検証チェックを再実装しており、多くの場合不完全です。
- **共有コントラクトなし**: ダウンストリームツール（Helm chart、Omnibus）はユニットテストで検証するための
  機械可読な仕様を持っていません。
- **貧弱な開発者エクスペリエンス**: エンジニアは、一貫したメンタルモデルなしに異なる設定のイディオムを
  コンテキストスイッチする必要があります。
- **ドキュメントのずれ**: 機械可読なスキーマがなければ、ドキュメントは手動で作成する必要があり、
  実際の設定構造と乖離する可能性があります。
- **ライフサイクルステージの強制なし**: GitLab には、設定設定が実験的、アルファ、ベータ、または
  安定しているかどうかを示すメカニズムがありません。

集中型の LabKit モジュールは、すべての LabKit 統合ツールに規約優先の設定を提供することで
これらの懸念に対処します。

### 目標

- すべての LabKit 統合ツールのための単一の一貫した設定フォーマット（YAML または JSON）を提供する
- Protocol Buffers を設定スキーマの唯一の真実の情報源として使用する
- ダウンストリームツールが自動検証のために公開されたスキーマを参照できるようにする
- すべての一般的な設定構造をサポートする: スカラー、マップ、リスト、ネストされたオブジェクト、オプション/必須フィールド
- 読み込み時にガードレールを適用する: スキーマ違反、型の不一致、制約違反で早期に失敗する
- 最小限の混乱で採用できる: 既存の Go 構造体は生成された protobuf タイプで置き換え可能
- 将来の機能のための基盤を築く: 移行ツール、検証 CLI コマンド、環境変数のオーバーライド

### 非目標

- このプロポーザルはランタイムのシークレット管理システムを定義しません。シークレットは既存のパスウェイ経由で注入され続け、パスまたは環境変数で参照されます。
- このプロポーザルはインフラストラクチャレベルの設定（Kubernetes マニフェスト、Terraform 変数）を置き換えません。
- このプロポーザルは既存のすべてのツール設定の即時移行を義務付けません。採用は段階的に行われます。
- 環境変数のオーバーライドは将来のプロポーザルに明示的に延期されています。
- 標準化されたデフォルト管理は、モジュールが既存ツールにレトロフィットされた後に延期されます。

## 提案

LabKit に `v2/config` モジュールを導入します。これは以下を提供します:

1. **Protobuf ファーストスキーマ**: 各ツールは Protocol Buffers Edition 2023 構文を使用してバージョン管理された `.proto` ファイルで設定を定義します
2. **フォーマットの自動検出**: ファイル拡張子に基づいて YAML、JSON、または TOML を自動的に検出して解析します
3. **強力な検証**: proto ファイルにインラインで定義された protovalidate 制約を使用してリッチな検証ルールを適用します
4. **型付き移行**: タイプセーフな `func(source S) (T, error)` 移行関数を介してバージョンアップグレードをサポートします
5. **ロールバックの安全性**: 安全なロールバックをサポートするためにデフォルトで不明なフィールドは黙って無視されます
6. **厳格モード**: タイポと廃止された設定を検出するための CI パイプライン向けのオプションの厳格な検証

### 設定フォーマット

設定は **YAML**（優先）または **JSON**（代替）で表現されます。YAML が優先される理由は以下の通りです:

- GitLab のインフラツール全体で支配的なフォーマット
- Kubernetes エコシステムで広く採用されている（学習曲線なし）
- タイプシステムが Helm および既存の設定システムに合致している
- `yq` などのツールで CI パイプラインでの簡単な操作が可能
- 多くのエディターが YAML の JSON スキーマ検証/オートコンプリートをサポートしている

TOML は Gitaly と Workhorse などのツールの移行中にオプトインサポートとして利用可能です。

設定の例:

```yaml
# widget-service.config.yaml
version: 2
server:
  address: "0.0.0.0"
  port: 8080
  timeout: "30s"
logging:
  level: "info"
  format: "json"
feature_flags:
  enable_experimental_cache: false
```

オプションの `version` フィールド（整数、省略された場合はデフォルト `1`）により移行システムが有効になります。

## 設計と実装の詳細

### Protobuf ファーストスキーマ

設定スキーマは、既知のパスで Protocol Buffers Edition 2023 で定義されます:

```plaintext
<tool-repo-root>/proto/config/v<N>/config.proto
```

スキーマの例:

```proto
edition = "2023";
package myapp.config.v1;

option go_package = "myapp/gen/config/v1;configv1";
option features.field_presence = IMPLICIT;

import "buf/validate/validate.proto";

message Config {
  int32 version = 1;
  ServerConfig server = 2 [(buf.validate.field).required = true];
}

message ServerConfig {
  string address = 1 [(buf.validate.field).string.min_len = 1];
  uint32 port = 2 [(buf.validate.field).uint32 = {
    gte: 1
    lte: 65535
  }];
  google.protobuf.Duration timeout = 3;
}
```

**利点:**

- コード生成により型安全性が提供されます
- 検証ルールがスキーマと共に配置されています（乖離できません）
- クロスランゲージの相互運用性
- ダウンストリームツールが検証のために `.proto` ファイルを解析できます
- protovalidate CEL 式を通じたリッチな制約

### 検証

検証はインラインで定義された制約を持つ [protovalidate](https://protovalidate.com) を使用します:

**標準制約:**

```proto
message ServerConfig {
  string host = 1 [(buf.validate.field).string = {
    min_len: 1
    max_len: 255
  }];

  uint32 port = 2 [(buf.validate.field).uint32 = {
    gte: 1
    lte: 65535
  }];
}
```

**CEL によるクロスフィールド検証:**

```proto
message TLSConfig {
  string cert_path = 1;
  string key_path = 2;

  option (buf.validate.message).cel = {
    id: "tls_pair"
    message: "cert_path and key_path must both be set or both be empty"
    expression: "(this.cert_path == '') == (this.key_path == '')"
  };
}
```

### 移行システム

`version` フィールドにより、型付きのジェネリック関数を使用してバージョン N-1 から N への自動移行が可能になります:

**v1 設定:**

```proto
message Config {
  int32 version = 1;
  ServerConfig server = 2;
}

message ServerConfig {
  string host = 1;
  uint32 port = 2;
}
```

**v2 設定（フィールドの名前変更）:**

```proto
message Config {
  int32 version = 1;
  ServerConfig server = 2;
}

message ServerConfig {
  string address = 1;  // "host" から名前変更
  uint32 port = 2;
  google.protobuf.Duration timeout = 3;
}
```

**型付き移行関数:**

```go
func migrateV1ToV2(source *configv1.Config) (*configv2.Config, error) {
    return &configv2.Config{
        Version: 2,
        Server: &configv2.ServerConfig{
            Address: source.Server.Host, // 型安全な名前変更
            Port:    source.Server.Port,
            Timeout: durationpb.New(30 * time.Second),
        },
    }, nil
}

loader, _ := config.New(config.WithMigration(migrateV1ToV2))
```

**移行フロー:**

1. バージョンを検出するためにターゲット proto（v2）に設定ファイルを解析します
2. バージョンの不一致を検出します（例: ファイルに v1 があるが、バイナリは v2 を期待しています）
3. ソースタイプ（v1）に設定ファイルを再解析します
4. **移行前の検証**: v1 スキーマに対して検証します
5. 型付き移行関数を実行して v1 を v2 に変換します
6. **移行後の検証**: v2 スキーマに対して検証します

単一ステップの移行（N-1 → N）のみがサポートされています。これは設定バージョンの負債の蓄積を防ぐための
明示的なガードレールです。

### LabKit モジュール API

最小限のエルゴノミックな API:

```go
import "gitlab.com/gitlab-org/labkit/v2/config"

func main() {
    loader, err := config.New()
    if err != nil {
        log.Fatal(err)
    }

    var cfg configv1.Config
    if err := loader.Load("config.yaml", &cfg); err != nil {
        log.Fatal(err)
    }

    // cfg が読み込まれ検証されています
}
```

**移行あり:**

```go
loader, _ := config.New(
    config.WithMigration(migrateV1ToV2),
)
```

**厳格モードあり（CI のみ）:**

```go
loader, _ := config.New(
    config.WithStrictMode(),
)
```

**カスタムフォーマットパーサーあり:**

```go
import "gitlab.com/gitlab-org/labkit/v2/config/toml"

loader, _ := config.New(
    config.WithParser(toml.NewTOMLParser()),
)
```

### ガードレール

| ガードレール | デフォルト | 理由 |
|------------|---------|-----------|
| 型の不一致は早期に失敗 | 有効 | 暗黙的な変換によるランタイムの驚きを防ぐ |
| 必須フィールドの強制 | 有効 | protovalidate `required` 制約経由 |
| バージョンフィールドが欠けている場合は `1` がデフォルト | 有効 | 移行機能を維持しながら採用の摩擦を下げる |
| 読み込み時のスキーマ検証 | 有効 | 何が有効かの唯一の真実の情報源 |
| 不明なキーの拒否（厳格モード） | **無効** | オプトインのみ — ロールバックの安全性に必要 |

### ロールバックの安全性と厳格モード

不明なフィールドはデフォルトで**黙って無視されます**。これは安全なロールバックに重要です:

- v2 が新しい設定フィールドでデプロイされ、v1 にロールバックされた場合、v1 バイナリは不明なフィールドでクラッシュしてはなりません
- 厳格モードを有効にすると、ロールバックは失敗します
- 厳格モードは CI パイプラインとデプロイ前の検証でのみ使用すべきです

```go
// CI 検証のみ — 本番には使用しないこと
loader, _ := config.New(config.WithStrictMode())
```

### フォーマットサポート

| フォーマット | 可用性 | 注記 |
|--------|-------------|-------|
| YAML（`.yaml`, `.yml`） | 常に利用可能 | 人間が作成した設定に推奨 |
| JSON（`.json`） | 常に利用可能 | 機械生成された設定に推奨 |
| TOML（`.toml`） | `WithParser` 経由でオプトイン | TOML から移行するツール向け |

### エラー処理

エラーにはファイル、行、カラム情報が含まれます:

**パースエラー:**

```plaintext
config.yaml:5:3: invalid ServerConfig.port: value must be <= 65535 but got 99999
```

**検証エラー:**

```plaintext
validation failed: invalid Config.server: embedded message failed validation |
  caused by: invalid ServerConfig.port: value must be greater than or equal to 1
```

**移行エラー:**

```plaintext
migration from version 1 to 2 failed: server.host field is required
```

## 代替ソリューション

### 既存の Go 設定ライブラリを使用する（例: Viper）

Viper は広く使用されていますが、相当な複雑さをもたらし、既知のスキーマの場所を強制せず、
protobuf や protovalidate と統合しません。また、厳格な不明キーの拒否に関する既知の制限があります。
焦点を絞った LabKit モジュールにより、インターフェースが最小限に保たれ、GitLab の規約と整合します。

### protobuf の代わりに JSON Schema を使用する

JSON Schema はフォーマット検証には適切ですが、別の検証パスが必要で、コード生成、型安全性、
クロスランゲージの相互運用性を提供しません。Protobuf スキーマは protovalidate 経由でリッチな制約をサポートし、
カスタムオプション経由でライフサイクルメタデータをエンコードできます。

### TOML をプライマリフォーマットとして使用する

TOML は Gitaly と Workhorse で使用されていますが、Operate チームが使用する Helm ツールでのシリアライズサポートが
不十分です。そのタイプシステムは YAML/JSON と整合しません。移行のためのオプトインとしてサポートされていますが、
ターゲットフォーマットではありません。

### JSON のみを必須とする（YAML なし）

JSON は機械にフレンドリーですが、オペレーターが作成して読むには難しいです。YAML をプライマリ、
JSON を代替としてサポートすることで、エルゴノミクスと機械フレンドリーさの両方が提供されます。

### 型付き移行に対してマップベースの移行

以前のバージョンでは `map[string]any` で操作する移行を検討していました。実装されたアプローチでは
代わりに型付きジェネリック関数（`func(source S) (T, error)`）を使用し、コンパイラの型チェック、
IDE サポート、テストの容易さを提供します。

## 採用パス

1. **フェーズ 1 — モジュールの実装**: ✅ [labkit!345](https://gitlab.com/gitlab-org/labkit/-/merge_requests/345) で実装済み
2. **フェーズ 2 — パイロット統合**: Donkey と Caproni に統合して API を検証する
3. **フェーズ 3 — ダウンストリームスキーマ検証**: Helm Charts CI と Omnibus パイプラインに proto ベースの検証を追加する
4. **フェーズ 4 — 広範な採用**: 追加ツールを段階的に移行する; TOML オプトインにより Gitaly/Workhorse の移行が容易になる

## 将来の作業

### 標準化された検証コマンド

任意の LabKit 統合ツールのための既製の CLI サブコマンドを提供します:

```bash
my-tool config validate --file widget-service.config.yaml
```

### 環境変数のオーバーライド

環境変数のオーバーライドの構造化されたメカニズムは、専用のプロポーザルで対処されます。

### デフォルト管理

デフォルトを宣言して適用するための標準化されたメカニズムは、採用経験が設計に情報を与えた後に導入されます。

### ドキュメント支援ツール

フィールド名、型、制約、ライフサイクルメタデータを含む protobuf スキーマから設定リファレンスドキュメントを自動生成します。

### ライフサイクルステージの強制

Proto フィールドオプションはライフサイクルステージメタデータ（実験的、アルファ、ベータ、安定、非推奨）を
機械可読な方法でエンコードでき、オペレーターが一般消費向けでない設定を使用した場合にツールが警告できます。

### マルチランゲージサポート

Go 実装が完成し、GitLab の Go サービス全体での採用を通じて実証された後、この設定管理アプローチを
Ruby、Rust、およびその他の言語を含む他の LabKit サポートエコシステムに拡張します。
protobuf ファーストアプローチは、Protocol Buffers がすでに複数言語のコード生成をサポートし、
protovalidate の実装がさまざまなエコシステムに存在するため、クロスランゲージの一貫性のための
自然な基盤を提供します。

## 関連作業

- 元のプロポーザル: [gitlab#591894](https://gitlab.com/gitlab-org/gitlab/-/work_items/591894)
- 実装: [labkit!345](https://gitlab.com/gitlab-org/labkit/-/merge_requests/345)
- ライフサイクルステージの探索: [gitlab-org/charts/gitlab#6219](https://gitlab.com/gitlab-org/charts/gitlab/-/work_items/6219)
