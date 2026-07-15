---
title: "Theseus ADR 007：アセンブリフレームワークの実装より LabKit ライブラリコードを優先する"
owning-stage: ""
description: "ライブラリコードはポートフォリオ全体に届くため、横断的なサービス機能を Lab Bench アセンブリフレームワークよりも LabKit ライブラリコードとして提供する決定。"
toc_hide: true
upstream_path: /handbook/engineering/architecture/design-documents/theseus_platform_vision/decisions/007_prefer_labkit_library_over_assembly/
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

[Lab Bench：GitLab SOA Architecture](https://docs.google.com/document/d/11Zj918LuZeY3fPcU50ZPhzJtcqzvyXaO0SDamW7cDc8/)の
提案では、サービスに必要な幅広い機能について説明しています。
構造化ログ、メトリクス、トレース、構成、フィーチャーフラグ、
暗号化と mTLS、シークレット、リクエストコンテキストの伝播、データストアへのアクセス、
キャッシュ、ヘルスチェックです。

これらの関心事の多く（すべてではありません）は、ライブラリを通じて提供する必要があります。
いくつかはすでに [LabKit](/handbook/engineering/infrastructure-platforms/developer-experience/labkit/)に存在し、
数年前からあるもの、最近追加されたもの、まだ構築されていないものがあります。
この ADR は、LabKit ライブラリコードとして配置するか、Lab Bench アセンブリフレームワーク内に配置するかという
両方の選択肢がある場合に、そのような機能をどこへ配置すべきかに焦点を当てます。

Lab Bench の提案自体も同じ立場を取っています。
明記された目標は「SOA ライブラリを（LabKit の一部として）提供する」ことであるため、
この ADR は矛盾ではなく、方針を一致させるものです。

## 決定

**横断的なサービス機能は、Lab Bench アセンブリフレームワーク内に実装するよりも、
LabKit ライブラリコードとして優先的に提供します。**

アセンブリに本当に固有であり、提案するチームがそれを
LabKit が適切な場所ではない理由を明確に正当化できる場合に限り、
機能をアセンブリフレームワークへコンパイルします。

## 結果

### メリット

1. **全体に届きます。**
   LabKit の機能は、Lab Bench より前から存在するコンポーネントや、Lab Bench を採用しないコンポーネントも含め、
   Workhorse、GitLab Pages、Gitaly などのすべてのコンポーネントから利用できます。
   たとえば、LabKit の protobuf 型付き構成は Gitaly に後付けできますが、
   同じ機能が Lab Bench 内にあれば実現できません。
1. **プラットフォームのライブラリに関するコミットメントと一致します。**
   [ADR 005](005_labkit_go_native_go_library.md)を強化します。
   LabKit はプラットフォームの標準ライブラリサーフェスであり、機能はそこに蓄積されます。

### デメリット

1. **LabKit は進化の速度を維持する必要があります。**
   LabKit に機能を配置すると、それを必要とするチームは
   Developer Experience チームのロードマップに依存することになります。
   その需要を吸収できるよう、ライブラリにリソースを割り当てる必要があります。
1. **言語間の同等性には調整コストがかかります。**
   Go と Ruby の両方のコンポーネントで必要な機能は、
   単一言語のアセンブリフレームワーク内で 1 回実装するのではなく、
   LabKit の各バインディングに実装する必要があります
   （[ADR 005](005_labkit_go_native_go_library.md)を参照）。
1. **一部の機能は、正当にアセンブリに属します。**
   たとえば、複数のサービスが 1 つのプロセスを共有する場合にのみ意味を持つロジックは、
   Lab Bench に属します。

## 検討した代替案

### 代替案：Lab Bench アセンブリフレームワークに機能を実装する

#### アプローチ

Lab Bench サービスが利用するログ、メトリクス、構成、シークレット、その他の機能を、
アセンブリフレームワークに直接構築します。

#### 採用しなかった理由

その場合、機能は Lab Bench アセンブリでのみ利用できます。
既存のコンポーネントや採用しないコンポーネント（Workhorse、GitLab Pages、Gitaly）は利用できず、
GitLab は同じ関心事に対して 2 つの実装場所を維持することになります。
広範なポートフォリオ向けの LabKit と、アセンブリ向けの Lab Bench です。

## 参考資料

- [セクション 2.8 — Lab Bench と、より広範な Theseus イニシアチブ](../#28-lab-bench-and-the-wider-theseus-initiative) —
  説明形式で示した、ライブラリを優先する原則。
- [Theseus ADR 005 — LabKit Go はネイティブ Go ライブラリのまま維持する](005_labkit_go_native_go_library.md) —
  プラットフォームの標準ライブラリサーフェスとしての LabKit。
- [Theseus ADR 006 — Lab Bench アセンブリは第 1 級のプラットフォームコンポーネントである](006_lab_bench_assemblies_are_first_class.md) —
  機能の配置という問題について、この決定を補完する不透明性の決定。
- [セクション 2.3 — インターフェースとは？](../#23-what-is-an-interface) —
  この優先方針の背後にある「複雑さを下位へ引き下げる」規律。
