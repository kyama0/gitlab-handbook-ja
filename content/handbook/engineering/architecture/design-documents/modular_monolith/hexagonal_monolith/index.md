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
upstream_sha: 18de125bd3131a62f0a7026bc69c7de124fc6c8a
translated_at: "2026-06-20T14:09:23Z"
translator: claude
stale: false
lastmod: "2026-06-15T16:29:33+01:00"
---

## 背景 {#background}

このデザインドキュメントは、以前の [Composable GitLab Codebase](../../composable_codebase_using_rails_engines/) に取って代わります。以前は、コードベースを技術的なランタイムプロファイルに分離するというアイデア、例えばモノリスを Sidekiq ノードとしてのみ実行することを検討していました。
モジュラーモノリスと六角形アーキテクチャの採用により、ドメインの分離とアプリケーションアダプターの分離の両方を実現できます。これにはエンジンや異なるランタイムプロファイルの使用も含まれます。

## サマリー

**要約:** Rails モノリスを [big ball of mud](https://en.wikipedia.org/wiki/Big_ball_of_mud) の状態から、[六角形アーキテクチャ](https://en.wikipedia.org/wiki/Hexagonal_architecture_(software))（またはポートとアダプターのアーキテクチャ）を使用する [モジュラーモノリス](https://www.thereformedprogrammer.net/my-experience-of-using-modular-monolith-and-ddd-architectures/) へ変えます。
ドメイン駆動設計のプラクティスを使用して、凝集した機能ドメインを独立したディレクトリ構造に抽出します。
インフラストラクチャコード（ロギング、データベースツール、インストゥルメンテーションなど）を gem に抽出し、`lib/` ディレクトリの必要性を本質的になくします。
機能ドメインのどの部分（例えばアプリケーションサービス）が統合のために公開利用されるか（ポート）と、どの部分がプライベートにカプセル化された詳細かを定義します。
Web、Sidekiq、REST、GraphQL、Action Cable をアーキテクチャの外層のアダプターとして定義します。

![GitLab モノリスの六角形アーキテクチャ](/images/engineering/architecture/design-documents/modular_monolith/hexagonal_monolith/hexagonal_architecture.png)

## 詳細

```mermaid
flowchart TD
  u([User]) -- interacts directly with --> AA[Application Adapter: WebUI, REST, GraphQL, git, ...]
  AA --uses abstractions from--> D[Application Domain]
  AA -- depends on --> Platform
  D -- depends on --> Platform[Platform: gems, configs, framework, ...]
```

### アプリケーションドメイン {#application-domain}

アプリケーションコア（機能ドメイン）は、GitLab プロダクトに固有のビジネスロジック、ポリシー、データを記述するすべてのコードで構成されています。独立したトップレベルの[バウンデッドコンテキスト](../bounded_contexts.md)に分割され、それぞれは自身のデータを所有し、小さく十分に文書化されたパブリックインターフェイスを公開するモジュールとして表されます。

アプリケーションドメインは、アプリケーションアダプターのような外層についての知識を持たず、プラットフォームコードにのみ依存します。これにより、ドメインコードはビジネスロジックの SSoT となり、リクエストが WebUI から来たか REST API から来たかにかかわらず、再利用可能でテストしやすくなります。内側の層が外側の層から何かを必要とする場合は、制御の反転、特に依存性注入で解決します。

ドメインの分離、つまり排他的なデータ所有、境界の強制、共有モデルの切り離し、そこへ到達する方法は、単一の情報源である専用ページに完全に文書化されています:
[ドメイン層を分離する](../domain_layer.md)。

### トランスポート層 {#transport-layer}

アプリケーションアダプターはトランスポート層に存在し、外部世界とドメインのパブリック API の間にある薄い接着剤です。これは Web（コントローラーとビュー）、REST、GraphQL、Sidekiq です。リクエストを解釈し、パラメーターを解析し、アプリケーションドメインから適切な抽象化を呼び出し、任意で結果を返します。自分自身のビジネスロジックは持ちません。

[トランスポート層をアダプターへ分解する](../transport_layer.md)で、これを詳しく説明しています。

### プラットフォームコード

プラットフォームコードは第 3 の層です。アプリケーションドメインやアプリケーションアダプターが動作するために必要だが、それ自体にはビジネスロジックを持たないクラスやモジュールを指します。これらはロギング、エラーレポート、メトリクス、レートリミッター、パーサー、`Banzai` のような汎用ユーティリティなどの横断的関心事です。Rails フレームワークコードを除き、プラットフォームコードはモノリス内の `gems/` ディレクトリ配下にある単一目的の gem へ抽出されます。

詳しく読む: [横断的ライブラリを gem に抽出する](../library_extraction.md)。

### 境界の強制

Ruby には、特定のモジュール内の定数のプライバシーという概念がありません。他のプログラミング言語とは異なり、よく文書化された gem を抽出しても、Ruby ではすべての定数がパブリックであるため、他の開発者が実装の詳細にコードを結合することを防げません。

六角形アーキテクチャで完璧に整理されたコードベースでも、コードベースの最大部分であるアプリケーションドメインが、モジュール化されていない [big ball of mud](https://en.wikipedia.org/wiki/Big_ball_of_mud) になる可能性があります。

長期的に構造を維持するためにも、境界の強制は不可欠です。大規模なモジュール化の取り組みの後、境界に違反することで徐々に再び big ball of mud に戻ってしまうことは避けたいです。

モジュール境界を強制するために [PoC で Packwerk を使用する](../proof_of_concepts.md#use-packwerk-to-enforce-module-boundaries) というアイデアを検討しました。

[Packwerk](https://github.com/Shopify/packwerk) はコードベースに徐々にパッケージを導入し、プライバシーと明示的な依存関係を強制できる静的アナライザーです。Packwerk は、ある Ruby コードが別のパッケージのプライベートな実装詳細を使用しているか、明示的に依存関係として宣言されていないパッケージを使用しているかを検出できます。

静的アナライザーであるため、コードの実行には影響しません。つまり、Packwerk の導入は安全であり、段階的に行えます。

Gusto などの企業は、Packwerk を中心に Rails モジュラーモノリスへ移行したい組織向けに、[開発・エンジニアリングツール](https://github.com/rubyatscale)のリストを開発・保守してきました。

### EE および JH エクステンション

GitLab コードベースのモジュール化における独自の課題の 1 つは、EE エクステンション（GitLab が管理）と JH エクステンション（JiHu が管理）の存在です。

関連するドメインコード（例: `Ci::`）を同じバウンデッドコンテキストと Packwerk パッケージの下に移動する場合、`ee/` エクステンションもそこへ移動する必要があります。

トップレベルのバウンデッドコンテキストが Packwerk パッケージにも対応するためには、EE エクステンションを含む、特定のドメインに関連するすべてのコードが同じパッケージディレクトリに配置される必要があります。

以下は、考えられるディレクトリ構造の例にすぎません:

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

- このような変更には、モジュラーアーキテクチャのメリットを理解し、レガシーな慣習に戻らないための開発マインドセットの転換が必要です。
- アプリケーションアーキテクチャの変更は困難な作業です。時間、リソース、コミットメントが必要ですが、何よりもエンジニアの賛同が必要です。
- これには、アーキテクチャ進化計画を進め、さまざまなエンジニアリングチャンネルで議論を促進し、採用上の課題を解決する中長期的なエンジニアチームまたは Working Group が必要になる場合があります。
- サイロではなく、標準とガイドラインを構築することを確実にする必要があります。
- 新しいコードをどこに配置すべきかについて明確なガイドラインが必要です。`lib/` のような「何でも入れ」フォルダーを再び作ってはなりません。

## 機会

モジュラーモノリスアーキテクチャへの移行は、将来検討できる多くの機会を生み出します:

- ドメインエキスパートの概念を、モノリスの特定モジュールを明示的に所有することと整合させることができます。
- 静的解析ツール（Packwerk、RuboCop など）の使用により、開発時と CI で設計違反を検出し、ベストプラクティスが尊重されることを確保できます。
- モジュール間の依存関係を明示的に定義することで、変更の影響を受ける部分のみをテストして CI を高速化できます。
- このようなモジュラーアーキテクチャは、必要に応じてモジュールをさらに個別サービスへ分解するのに役立ちます。
