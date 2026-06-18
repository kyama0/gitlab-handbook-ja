---
title: "六角形 Rails モノリス"
status: proposed
creation-date: "2023-05-22"
authors: [ "@fabiopitino" ]
coach: [ ]
approvers: [ ]
owning-stage: ""
toc_hide: true
upstream_path: /handbook/engineering/architecture/design-documents/modular_monolith/hexagonal_monolith/
upstream_sha: ccb1e392292beca5aa187b61502738defd99d030
translated_at: "2026-06-18T21:09:08Z"
translator: claude
stale: false
lastmod: "2025-01-07T14:45:07+00:00"
---

## 背景

この設計ドキュメントは、以前の [Composable GitLab Codebase](../../composable_codebase_using_rails_engines/) を置き換えるものです。
そこでは、コードベースを技術的なランタイムプロファイルに分割するアイデアを探っていました。
たとえば、モノリスを Sidekiq ノードとしてのみ実行するといったものです。
モジュラーモノリスと六角形アーキテクチャ（Hexagonal Architecture）を採用することで、ドメインの分離と
アプリケーションアダプターの分離の両方を実現できます。これにはエンジンの利用や、異なるランタイムプロファイルの利用も含まれます。

## 概要

**要約:** Rails モノリスを [big ball of mud](https://en.wikipedia.org/wiki/Big_ball_of_mud)（大きな泥団子）の状態から、
[六角形アーキテクチャ](https://en.wikipedia.org/wiki/Hexagonal_architecture_(software))（ポートとアダプターのアーキテクチャ）を採用した
[モジュラーモノリス](https://www.thereformedprogrammer.net/my-experience-of-using-modular-monolith-and-ddd-architectures/) に変更します。
ドメイン駆動設計（Domain-Driven Design）のプラクティスを用いて、凝集した機能ドメインを別々のディレクトリ構造に抽出します。
インフラストラクチャコード（ロギング、データベースツール、計測など）を gem に抽出し、本質的に `lib/` ディレクトリの必要性をなくします。
機能ドメインのどの部分（たとえばアプリケーションサービス）が統合のために公開（ポート）されるべきで、
どの部分が逆にプライベートにカプセル化された詳細であるべきかを定義します。
Web、Sidekiq、REST、GraphQL、Action Cable を、アーキテクチャの外層におけるアダプターとして定義します。

![GitLab モノリスの六角形アーキテクチャ](/images/engineering/architecture/design-documents/modular_monolith/hexagonal_monolith/hexagonal_architecture.png)

## 詳細

```mermaid
flowchart TD
  u([User]) -- interacts directly with --> AA[Application Adapter: WebUI, REST, GraphQL, git, ...]
  AA --uses abstractions from--> D[Application Domain]
  AA -- depends on --> Platform
  D -- depends on --> Platform[Platform: gems, configs, framework, ...]
```

### アプリケーションドメイン

アプリケーションコア（機能ドメイン）は、GitLab 製品に固有のビジネスロジック、ポリシー、データを記述する
すべてのコードで構成されます。これは複数のトップレベルの [bounded context](../bounded_contexts.md) に分割され、
それぞれが自身のデータを所有し、小さくよくドキュメント化された公開インターフェースを公開するモジュールとして表現されます。

アプリケーションドメインは、アプリケーションアダプターのような外層について知識を持たず、
プラットフォームコードにのみ依存します。これにより、ドメインコードはビジネスロジックの SSoT となり、
リクエストが WebUI から来たか REST API から来たかに関わらず、再利用可能でテスト可能になります。内層が外層から
何かを必要とする場合は、制御の反転（inversion of control）、特に依存性注入（dependency injection）で解決します。

ドメインの分離（排他的なデータ所有、境界の強制、共有モデルの分離、そしてそこに到達する方法）については、
それ自体の専用ページで全面的にドキュメント化されており、これが単一の信頼できる情報源です。
[ドメイン層の分離](../domain_layer.md)。

### トランスポート層

アプリケーションアダプターはトランスポート層に存在し、外界とドメインの公開 API の間をつなぐ薄い接着剤です。
これらは Web（コントローラーとビュー）、REST、GraphQL、Sidekiq です。
リクエストを解釈し、パラメータをパースし、アプリケーションドメインから適切な抽象化を呼び出し、
必要に応じて結果を提示し返します。これら自体は固有のビジネスロジックを持ちません。

[トランスポート層をアダプターに分解する](../transport_layer.md) で、これを詳細に説明しています。

### プラットフォームコード

プラットフォームコードは 3 番目の層です。アプリケーションドメインやアプリケーションアダプターが
機能するために必要なクラスやモジュールでありながら、それ自体は固有のビジネスロジックを持たないものです。
これらは、ロギング、エラーレポート、メトリクス、レートリミッター、パーサー、そして `Banzai` のような
汎用ユーティリティといった横断的関心事です。Rails フレームワークのコードを除き、プラットフォームコードは
モノリス内の `gems/` ディレクトリ配下にある単一目的の gem に抽出されます。

詳しくは [横断的ライブラリを gem に抽出する](../library_extraction.md) を参照してください。

### 境界の強制

Ruby には、特定のモジュール内における定数のプライバシーという概念がありません。他のプログラミング言語とは異なり、
よくドキュメント化された gem を抽出したとしても、Ruby ではすべての定数が公開されているため、他の開発者が
実装の詳細にコードを結合することを防げません。

六角形アーキテクチャで完璧に整理されたコードベースを持っていても、コードベースの最大の部分である
アプリケーションドメインが、モジュール化されていない [big ball of mud](https://en.wikipedia.org/wiki/Big_ball_of_mud) のままである、
ということがあり得ます。

境界の強制は、構造を長期的に維持するためにも不可欠です。大規模なモジュール化の取り組みの後で、境界を侵害することによって
ゆっくりと再び big ball of mud に逆戻りすることは避けたいものです。

モジュール境界を強制するために、[Packwerk を概念実証で使う](../proof_of_concepts.md#use-packwerk-to-enforce-module-boundaries)
アイデアを探りました。

[Packwerk](https://github.com/Shopify/packwerk) は静的解析ツールで、コードベースに段階的にパッケージを導入し、
プライバシーと明示的な依存関係を強制できます。Packwerk は、ある Ruby コードが別のパッケージのプライベートな実装の
詳細を使っていないか、あるいは依存関係として明示的に宣言されていないパッケージを使っていないかを検出できます。

静的解析ツールであるため、コードの実行には影響しません。つまり、Packwerk の導入は安全であり、段階的に行えます。

Gusto のような企業は、Packwerk を中心とした Rails モジュラーモノリスへの移行を望む組織のために、
[開発・エンジニアリングツール](https://github.com/rubyatscale) のリストを開発・保守してきました。

### EE および JH 拡張

GitLab コードベースをモジュール化するうえでの固有の課題の 1 つは、EE 拡張（GitLab が管理）と
JH 拡張（JiHu が管理）の存在です。

関連するドメインコード（たとえば `Ci::`）を同じ bounded context および Packwerk パッケージの配下に移すことで、
その `ee/` 拡張も移す必要が出てきます。

トップレベルの bounded context を Packwerk パッケージとも一致させるということは、特定のドメインに関連する
すべてのコードを、たとえば EE 拡張も含めて、同じパッケージディレクトリの配下に配置する必要があることを意味します。

以下は、考えられるディレクトリ構造の一例にすぎません。

```shell
domains
├── ci
│   ├── package.yml       # package definition.
│   ├── packwerk.yml      # tool configurations for this package.
│   ├── package_todo.yml  # existing violations.
│   ├── core              # Core features available in Community Edition and always autoloaded.
│   │   ├── app
│   │   │   ├── models/...
│   │   │   ├── services/...
│   │   │   └── lib/...   # domain-specific `lib` moved inside `app` together with other classes.
│   │   └── spec
│   │       └── models/...
│   ├── ee                # EE extensions specific to the bounded context, conditionally autoloaded.
│   │   ├── models/...
│   │   └── spec
│   │       └── models/...
│   └── public            # Public constants are placed here so they can be referenced by other packages.
│       ├── core
│       │   ├── app
│       │   │   └── models/...
│       │   └── spec
│       │       └── models/...
│       └── ee
│           ├── app
│           │   └── models/...
│           └── spec
│               └── models/...
├── merge_requests/
├── repositories/
└── ...
```

## 課題

- このような変更には、モジュラーアーキテクチャの利点を理解し、レガシーなプラクティスに逆戻りしないように、
  開発のマインドセットの転換が必要です。
- アプリケーションアーキテクチャの変更は困難な作業です。時間、リソース、コミットメントを要しますが、
  最も重要なのは、エンジニアの賛同が必要だということです。
- これには、アーキテクチャ進化計画を前進させ、さまざまなエンジニアリングチャンネルでの議論を促し、
  採用の課題を解決する、中長期のエンジニアチームやワーキンググループが必要になるかもしれません。
- サイロではなく、標準とガイドラインを構築することを確実にする必要があります。
- 新しいコードをどこに置くべきかについて、明確なガイドラインを持つことを確実にする必要があります。`lib/` のような
  ガラクタ入れフォルダを再び作ってはいけません。

## 機会

モジュラーモノリスアーキテクチャへの移行は、将来探求できる多くの機会を可能にします。

- ドメインエキスパートという概念を、モノリスの特定のモジュールを明示的に所有することと一致させられます。
- 静的解析ツール（Packwerk、RuboCop など）の利用により、開発時や CI で設計上の違反を捕捉し、
  ベストプラクティスが守られることを保証できます。
- モジュール間の依存関係を明示的に定義することで、変更の影響を受ける部分だけをテストし、CI を高速化できます。
- このようなモジュラーアーキテクチャは、必要に応じてモジュールを別々のサービスにさらに分解する助けにもなります。
