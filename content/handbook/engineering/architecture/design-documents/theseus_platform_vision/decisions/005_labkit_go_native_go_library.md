---
title: "Theseus ADR 005：LabKit Go はネイティブ Go ライブラリのまま維持する"
owning-stage: ""
description: "LabKit Go は、FFI、動的リンク、サブプロセス + IPC、WASM を介して Go 以外のコアをラップするのではなく、純粋なネイティブ Go ライブラリとして維持する決定。"
toc_hide: true
upstream_path: /handbook/engineering/architecture/design-documents/theseus_platform_vision/decisions/005_labkit_go_native_go_library/
upstream_sha: "f469f09c3347a37927c75866af3d2611a5421062"
lastmod: "2026-07-15T12:33:58+02:00"
translated_at: "2026-07-16T06:15:42+09:00"
translator: codex
stale: false
---

<!-- Design Documents often contain forward-looking statements -->
<!-- vale gitlab.FutureTense = NO -->

## 状態

**提案中。**

## コンテキスト

LabKit Go は、約 6 年間にわたってネイティブ Go ライブラリとして実装されています。
GitLab の Go コンポーネントの大部分で本番運用され、
API サーフェスは成熟しており、
実装言語の変更には相応のコストがかかります。

Developer Experience チームは、言語をまたいで LabKit を所有しています
（[LabKit North Star 戦略](/handbook/engineering/architecture/design-documents/labkit_north_star_strategy/)を参照）。
また、チームの専門性は Go に集中しています。
LabKit Go の保守、サポート、アーキテクチャの進化は、
Go を最も得意とするエンジニアが担います。

Theseus が LabKit に依存していることで、LabKit の構築方法と提供方法を変更した場合の重要性が増します。

非ネイティブなすべての代替案に伴う欠点は、
GitLab の全エンジニアの生産性に影響します。

複数の言語バインディング間で作業を重複させずに済むという理由から、
Go 以外のコア（一般には Rust）と実装を共有する案が定期的に話題になります。
この ADR は、LabKit Go でその経路を選ばない理由を記録します。

## 決定

**LabKit Go はネイティブ Go ライブラリとして実装します。**
リファレンス実装には純粋な Go（`go.mod`、慣用的な Go パッケージ）を使用し、
`cgo` は避けられないシステムバインディングにのみ使用します。

FFI、動的リンク、サブプロセス + IPC、WASM を介して利用する Go 以外の LabKit ランタイムは、
LabKit Go の対象から明示的に**除外**します。

この決定の対象は LabKit Go です。
LabKit Ruby や、今後別の言語向けに実装される LabKit を制約するものではありません。
これらの言語では、単一の共有ランタイムコンポーネントを採用する方が
適切な可能性も十分にあります。

## 結果

### メリット

1. **チームの既存スキルセットで保守できます。**
   Developer Experience チームがすでに運用している言語で LabKit Go を進化させるため、
   2 つ目のコアエコシステムへ並行して投資する必要がありません。
1. **利用側のツールチェーンに回帰がありません。**
   LabKit に依存するすべてのコンポーネントで、`go build`、`go test`、`go mod`、`CGO_ENABLED=0`、
   `go install` のセマンティクスを変更せずに利用し続けられます。
1. **単一ファイルのバイナリを引き続き作成できます。**
   LabKit に依存するコンポーネントは、共有オブジェクト、プラグインプロセス、WASM ランタイムを
   一緒に提供しなくても、静的で scratch イメージに対応する Go バイナリを引き続き生成できます。
1. **ランタイムの動作を予測できます。**
   FFI のスタック切り替えによる予期しない問題、管理すべきサブプロセスのライフサイクル、
   呼び出しごとの WASM コールドスタートコストはありません。

### デメリット

1. **LabKit-Go と LabKit-Ruby の実装は並行して進化します。**
   言語間の動作の同等性は調整上の課題となり、
   コンパイラで強制できません。
1. **Go 以外の実装を本当に必要とする機能は、
   ケースごとに正当化する必要があります。**
   たとえば、Go 以外の形でしか利用できない FIPS 検証済みの暗号プリミティブには、
   LabKit のコア全体を境界の向こうへ移すのではなく、
   明確なオーナーを持つ独自の限定的な例外が必要です。
1. **言語横断の重複排除は、コンパイル時の利点にはなりません。**
   FFI を介して Go と Ruby で単一のコアを共有する案は、LabKit Go では恒久的に除外されます。
   代わりに、仕様、テストスイート、適合性ハーネスを共有します。

## これは双方向ドアの意思決定です

これが重要だと判断した場合は、後の段階で、単一の
バイナリへ移行できます。

## 検討した代替案

考えられる各代替案には、いくつかの欠点があります。

```mermaid
flowchart LR
  uniffi["uniffi-rs"]:::tool
  cbindgen["cbindgen + cgo"]:::tool
  staticlib["staticlib (.a)"]:::tool
  cdylib["cdylib (.so/.dylib)"]:::tool
  purego["purego + cdylib"]:::tool
  r2g_cgo["rust2go (cgo mode)"]:::tool
  r2g_ipc["rust2go (IPC mode)"]:::tool
  wazero["wasm32-wasi + wazero"]:::tool
  wasmtime["wasmtime-go"]:::tool
  goplugin["go-plugin (HashiCorp)"]:::tool
  grpc["gRPC / stdio subprocess"]:::tool

  static_mech(["Static library\ncgo links .a"]):::mech
  dynamic_mech(["Dynamic library\ncgo + .so/.dylib"]):::mech
  runtime_mech(["Runtime FFI\ndlopen, no cgo"]):::mech
  wasm_mech(["WASM module\nembedded, pure Go host"]):::mech
  subprocess_mech(["Subprocess + IPC\nseparate binary"]):::mech

  dev_complex["Developer complexity\nUsers need a C toolchain\n(gcc/clang/MinGW) installed.\nCGO_ENABLED=0 builds break.\nPer-platform .a artifacts\nmust be prebuilt and shipped."]:::term
  compile_speed["Compile speed\ncgo invokes system linker (no fast Go internal linker).\n+1–3s per cgo package, cold.\nSlows go test, gopls, lint across the whole module."]:::term
  per_call["Per-call overhead\nFFI/IPC boundary cost per invocation.\nWASM: 100s of ns. Subprocess + serde: microseconds.\nKills chatty APIs; forces batching."]:::term
  loss_binary["Loss of single binary\nShip .so/.dylib/.dll or a\nsecond executable alongside the Go binary.\nLD_LIBRARY_PATH or PATH must be set.\nBreaks scratch/distroless deploys."]:::term
  startup["Startup time\nWASM compile/instantiate cost\nper process. wazero AOT helps\nbut adds tens to hundreds of ms\non cold start. Bad for CLIs\nand short-lived processes."]:::term
  experimental["Experimental\npurego skips cgo's goroutine\nstack switch. Rust runs on a small movable stack — large\nstack use, callbacks, threads, or async will corrupt state."]:::term
  ops_complex["Operational complexity\nTwo binaries to version,\nrelease, and monitor. Crash\nhandling, restarts, IPC\nschema evolution, and orphan\nprocess cleanup all on you."]:::term

  uniffi --> static_mech
  cbindgen --> static_mech
  staticlib --> static_mech
  r2g_cgo --> static_mech

  cdylib --> dynamic_mech
  purego --> runtime_mech

  wazero --> wasm_mech
  wasmtime --> wasm_mech

  r2g_ipc --> subprocess_mech
  goplugin --> subprocess_mech
  grpc --> subprocess_mech

  static_mech --> dev_complex
  static_mech --> compile_speed

  dynamic_mech --> dev_complex
  dynamic_mech --> loss_binary

  runtime_mech --> experimental
  runtime_mech --> loss_binary

  wasm_mech --> per_call
  wasm_mech --> startup

  subprocess_mech --> ops_complex
  subprocess_mech --> loss_binary
  subprocess_mech --> per_call

  classDef tool fill:#EEEDFE,stroke:#534AB7,color:#26215C,stroke-width:0.5px;
  classDef mech fill:#E1F5EE,stroke:#0F6E56,color:#04342C,stroke-width:0.5px;
  classDef term fill:#A32D2D,stroke:#791F1F,color:#ffffff,stroke-width:0.5px;
```

## 参考資料

- [セクション 3.2 — Platform-as-a-product のコミットメント](../#32-platform-as-a-product-commitments) —
  LabKit をプラットフォームの標準ライブラリとして位置付ける原則 6。
- [Theseus ADR 001 — 推奨スキーマ言語としての Protobuf](001_protobuf_as_preferred_schema_language.md) —
  LabKit Go に依存する型付き構成サーフェス。
- [LabKit North Star 戦略](/handbook/engineering/architecture/design-documents/labkit_north_star_strategy/) —
  ガバナンスモデルと言語ごとのオーナーシップ。
- [LabKit リポジトリ](https://gitlab.com/gitlab-org/labkit) —
  標準実装。
- [`purego`](https://github.com/ebitengine/purego)、
  [`wazero`](https://wazero.io/)、
  [`go-plugin`](https://github.com/hashicorp/go-plugin)、
  [`uniffi-rs`](https://github.com/mozilla/uniffi-rs) —
  上記で調査したバインディング技術。
