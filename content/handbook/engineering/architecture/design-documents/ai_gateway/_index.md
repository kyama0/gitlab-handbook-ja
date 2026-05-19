---
title: "AI Gateway"
status: ongoing
creation-date: "2023-07-14"
authors: [ "@reprazent" ]
coach: [ "@andrewn", "@stanhu" ]
approvers: [ "@m_gill", "@mksionek", "@marin" ]
owning-stage: "~devops::modelops"
participating-stages: []
toc_hide: true
upstream_path: /handbook/engineering/architecture/design-documents/ai_gateway/
upstream_sha: b4eeb07f0d5f46e2fc5f8572be1a2547261aed89
translated_at: "2026-04-26T03:00:00Z"
translator: claude
stale: false
lastmod: "2025-07-12T03:44:08+00:00"
---


{{< engineering/design-document-header >}}


## 概要

AI Gateway は、利用しているインスタンス（self-managed、Dedicated、GitLab.com）にかかわらず、すべての GitLab ユーザーに AI 機能を提供するスタンドアロンサービスです。

当初、すべての AI Gateway デプロイは GitLab（組織）が管理しており、GitLab.com とすべての GitLab self-managed インスタンスが同じ Gateway を使用していました。GitLab Duo Self-Hosted の導入により、[お客様も自身の環境に AI Gateway のインスタンスをデプロイできる](https://docs.gitlab.com/install/install_ai_gateway/) ようになりました。

AI Gateway は、グローバルにアクセス可能な `cloud.gitlab.com/ai/*` ルートからルーティングされるトラフィックを処理する API Gateway です。IDE は現在、GitLab Rails インスタンスを介して間接的に `cloud.gitlab.com/ai/*` を使用しています。将来的には、IDE などのネットワークエンドポイントが `cloud.gitlab.com` に直接接続できるようにする予定です（詳細は [直接接続クライアント](#directly-connected-clients) を参照）。AI Gateway はその後、このトラフィックを他のサービス、つまり AI プロバイダーとそのモデルに転送します。この north/south トラフィックパターンにより、どのリクエストをどこに送信するかを制御し、必要に応じてリダイレクトされたリクエストの内容を変換できます。

![アーキテクチャ図](/images/engineering/architecture/design-documents/ai_gateway/architecture.png)

**現時点ではマルチリージョンデプロイはサポートされておらず、検討中の機能です。既存の図は、複数リージョンへのデプロイを行う場合の潜在的なアーキテクチャを示しています。**

[図の元データ](https://docs.google.com/drawings/d/1xhGElN4rGvCY-SOvSkRpSdZ_MZ3IgVQiiTlKQpkPyLE/edit)

GitLab の管理下にあるホストサービスを使用することで、すべての GitLab インスタンスにスケーラブルな方法で AI 機能を提供できます。データベースや Redis などの依存関係を持つ GitLab Rails をスケールするよりも、この小さなステートレスサービスをスケールする方が簡単です。

これにより、self-managed インストールのユーザーは、自身でモデルをホストしたり、サードパーティのプロバイダーに接続したりする必要なく、AI を利用した機能にアクセスできるようになります。

## 言語: Python

AI Gateway はもともと、IDE からのリクエストを処理してコード提案を提供する「model-gateway」として開始されました。これは Python で書かれていました。

Python はオブジェクト指向言語であり、Rubyist にとって AI Gateway という新しいコードベースで習得しやすい程度の親しみやすさを持っています。また、すでに Python の経験を持つデータエンジニアや ML エンジニアが貢献しやすくなります。

## 直接接続クライアント {#directly-connected-clients}

直接接続はまだサポートされておらず、この作業は [このエピック](https://gitlab.com/groups/gitlab-org/-/epics/12224#proposed-solution) で追跡されています。

決定事項: [ADR-001: 直接接続を許可する](decisions/001_direct_connections.md)

コード補完リクエストはクライアントから AI Gateway に直接送信され、これらのリクエストのレイテンシを改善します。リクエストを AI Gateway に直接送信するか、追加の補強のために GitLab Rails に送信するかは、クライアントが決定します。直接接続の使用はオプションで、後方互換性があります。クライアントが補完リクエストの検出をサポートしていない場合でも、コード提案リクエストのタイプを指定せずに、引き続き GitLab Rails を介して（現状のとおりに）これらのリクエストを送信できます。

## API

### AI Gateway の基本的な安定 API

AI Gateway の API は、さまざまなクライアントによって利用されるため、安定的でありながら柔軟な API を設計することが重要です。

これを行うために、構築するユースケースごとに API エンドポイントを実装できます。これは、クライアントと AI Gateway の間のインターフェイスは私たちが構築・所有するものになることを意味します。これにより、将来のスケーラビリティ、構成可能性、セキュリティが確保されます。

API はバージョン管理されませんが、後方互換性があります。詳細は [バージョン間互換性](#cross-version-compatibility) を参照してください。AI Gateway は最新の 2 つのメジャーバージョンをサポートします。例えば、GitLab 17.2 で作業している場合、GitLab 17 と GitLab 16 の両方をサポートします。

クライアントは AI Gateway に直接接続できるため、レート制限、サーキットブレーカー、シークレット編集などの一般的な機能は、このスタックレベルと GitLab Rails の両方に追加する必要があります。

#### プロトコル

AI Gateway サービスとそのクライアント（GitLab Rails アプリケーションを含む）の間の通信は、JSON ベースの API を使用するものとします。

AI Gateway API は、異なる AI 機能へのアクセスを提供する単一目的のエンドポイントを公開するものとします。本ドキュメントの [後のセクション](#single-purpose-endpoints) では、特定のエンドポイントを構築するための詳細なガイドラインを提供します。

AI Gateway の通信プロトコルは、機能固有の動的情報をすべてラップする基本的なエンベロープのみを期待するものとします。提案するプロトコルアーキテクチャにより、API エンドポイントはバージョン非依存となり、AI Gateway の API は GitLab（または Gateway を使用する他のクライアント）の複数のバージョンと互換性を持てるようになります。

 **これは、すべてのクライアントがそのバージョンに関係なく、同じセットの AI Gateway API 機能エンドポイントを使用することを意味します。AI Gateway の機能エンドポイントは、サポートする異なるクライアントバージョンごとに複数の機能エンドポイントを作成するのではなく、異なるクライアントバージョンをサポートする必要があります**。

ただし、特定のエンドポイントを進化させたい場合に備えて、パスにバージョンを追加することはできます。これを頻繁に行う必要があるとは想定していませんが、パスにバージョンを含めることでオプションを残しておけます。これの利点は、個々の GitLab マイルストーンリリースは、リリース時にテストされたエンドポイントバージョンを引き続き指し続けながら、新しいエンドポイントバージョンを導入することで迅速にイテレーションできることです。

GitLab インスタンス間の通信プロトコルとして gRPC も検討しましたが、JSON API と gRPC は次の点で異なります。

| gRPC                                                                                                                                                                    | REST + JSON                                                                                       |
|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|
| + バージョンレスでも進化させやすい厳密なプロトコル定義                                                                                                       | - 厳密なスキーマがないため、実装で複数バージョンのサポートをきちんと行う必要がある |
| + vscode 用の新しい Ruby-gRPC サーバー: 依存関係のロードを制限できるためおそらく高速（[modular monolith](https://gitlab.com/gitlab-org/gitlab/-/issues/365293)） | - vscode 用の既存の Grape API: 起動が遅く、不要なリソースがロードされる             |
| + 双方向ストリーミング                                                                                                                                              | - リクエストとレスポンスをストリーミングするための直感的な方法（追加可能ではある）                    |
| - 新しい Python-gRPC サーバー: gRPC-Python サーバーの運用経験がない                                                                                        | + 既存の Python fastapi サーバー（コード提案用にすでに動いている）を拡張すればよい                  |
| - vscode から GitLab を経由して ai-gateway へ未知のメッセージを通すのが困難                                                                                             | + 古い GitLab インスタンス経由で、新しい VS Code + 新しい AI Gateway を簡単にサポートできる                  |
| - 他のクライアント（vscode、jetbrains、その他のエディター）における gRPC のサポートが不明                                                                                          | + すべての外部クライアントでサポートされる                                                                 |
| - プロトコルの不一致が発生する可能性（VSCode --REST--> Rails --gRPC--> AI Gateway）                                                                                              | + スタック全体で同じプロトコル                                                                  |

**ディスカッション:** このイテレーションで、すでに部分的に存在する機能を移植するために REST+JSON を選択したからといって、gRPC や Websockets を使用する新機能を除外する必要はありません。例: チャット機能はリクエストとレスポンスをストリーミングする方が適している場合があります。ユースケースごとにエンドポイントを提案しているため、バージョン間互換性を念頭に置けば、機能ごとに異なるプロトコルを選択することもできます。

#### 単一目的エンドポイント {#single-purpose-endpoints}

AI を使用する機能については、ダイレクトプロキシとして [公開している provider API](#exposing-ai-providers) よりも、安定した API を持つ単一目的エンドポイントを構築することを優先します。

一部の機能には固有のエンドポイントがあり、他のいくつかの機能はエンドポイントを共有できます。例えば、コード提案やチャットには独自のエンドポイントがあり、Issue やマージリクエストを要約するいくつかの機能は同じエンドポイントを使用してペイロードで提供される情報で区別を行うことができます。

私たちの目標は、お客様に代わって更新できないコードを最小限に抑えることです。これは、GitLab モノリスのコードベースに AI 関連のロジックをハードコーディングしないことを意味します。

- お客様が私たちの最新の機能を採用するのに必要な時間を最小限にしたい。
- 古いインスタンスのロングテールを壊さずに、製品に変更を加える柔軟性を維持したい。
- すべての GitLab ディストリビューション（.com SaaS、self-managed、Dedicated）を最小限の複雑さで提供したい。
- AI の機能を分離してリスクを減らし、統一された制御プレーンを持ちたい。
- 多数の AI モデルや AI ベンダーを簡単にサポートできる、私たちの「ベスト・イン・クラス」のマルチモデルアンサンブルアプローチをサポートする統一された実装を提供したい。
- コストを制御・測定するための単一のポイントが欲しい。
- 可能な限り、メトリクス（使用統計、応答失敗、使用パターン、質問カテゴリーなど）を多くのポイントに分散させるのではなく、Gateway で追跡したい。（もちろん一部のメトリクスはクライアント側でしか取得できません。）

ビジネスロジックを GitLab Rails に持つことは、お客様に GitLab インスタンスのアップグレードを要求することになり、最初のポイントに影響します。一部のオンプレミスユーザーは、企業ポリシーのために、すぐにインスタンスをアップグレードできません。
例えば、GitLab Rails のプロンプトテンプレートにバグがあり、それを 16.6 で修正したのに、お客様が 16.5 を使用していて次のアップグレードが 3 か月後に予定されている場合、彼らは 3 か月間バグのある機能を使用しなければなりません。

**これは、プロンプトを AI Gateway 内で構築する必要があるという意味ではありません。** ただし、プロンプトが単一目的エンドポイントへのペイロードの一部である場合、ペイロードはどのモデル用に構築されたかと、プロンプトに関するその他のメタデータを指定する必要があります。これにより、プロンプトペイロードのいずれかが AI Gateway でサポートされなくなった場合、グレースフルに低下したり、リクエストをサポートしようとしたりできます。これにより、AI のランドスケープが変化しても、古い GitLab インストールの機能が壊れることを潜在的に回避できます。

### AI Gateway API プロトコル

各単一目的エンドポイントは、異なる GitLab インスタンスや外部クライアントから利用できるように、バージョン非依存な方法で構築することが重要です。この目標を達成するために：

**AI Gateway プロトコルは、すべての機能固有の情報をラップするシンプルな JSON エンベロープに依存するものとします。** AI Gateway プロトコルは、[OSI モデル](https://en.wikipedia.org/wiki/OSI_model) のトランスポート層プロトコル（例: TCP、UDP）と見なすことができ、何の情報が転送されているかを意識せずに、ノード間で情報を転送する方法を定義します。

AI Gateway プロトコルは、単一目的エンドポイントが受信した情報をどのように処理するかを規定しません。エンドポイントには、各プロトコルエンベロープから来るデータを使用するかどうかを決定する自由が与えられます。

AI Gateway プロトコルは、各リクエストを次のように定義します。

1. 各単一目的エンドポイントは、`prompt_components` という単一のキーを持つ単一の JSON オブジェクトを含むリクエストを受け入れるものとします。
1. `prompt_components` キーには、以下のルールに従って構築された JSON エンベロープの配列が含まれるものとします。

各 JSON エンベロープには 3 つの要素が含まれます。

1. `type`: エンベロープの `payload` で提示されている情報のタイプを指定する文字列識別子。AI Gateway の単一目的エンドポイントは、知らないタイプを無視できます。
1. `payload`: AI Gateway の単一目的エンドポイントが、サードパーティの AI サービスプロバイダーにリクエストを送信するために使用できる実際の情報。`payload` 要素内のデータは、`type` および `payload` を提供しているクライアントのバージョンによって異なる可能性があります。これは、AI Gateway の単一目的エンドポイントが、`payload` 内に存在するデータの構造とタイプをオプションとして考慮し、欠落または不正な情報を適切に処理する必要があることを意味します。
1. `metadata`: このフィールドには、この `prompt_components` エンベロープを構築したクライアントに関する情報が含まれます。`metadata` フィールドからの情報は、GitLab がテレメトリのために使用する場合もあれば、しない場合もあります。`payload` と同様に、`metadata` 内のすべてのフィールドはオプションとみなすものとします。

頻繁に変更される可能性が高いと予想される唯一のエンベロープフィールドは `payload` です。そこでは、すべてのフィールドがオプションであることを保証し、フィールドの名前変更、削除、目的変更を避ける必要があります。

`payload` の内容を文書化・検証するために、その形式を [JSON-schema](https://json-schema.org/) で指定できます。

AI Gateway コンポーネントに従ったリクエストの例は次のとおりです。

```json
{
  "prompt_components": [
    {
      "type": "prompt",
      "metadata": {
        "source": "GitLab EE",
        "version": "16.7.0-pre",
      },
      "payload": {
        "content": "...",
        "params": {
          "temperature": 0.2,
          "maxOutputTokens": 1024
        },
        "model": "code-gecko",
        "provider": "vertex-ai"
      }
    },
    {
      "type": "editor_content",
      "metadata": {
        "source": "vscode",
        "version": "1.1.1"
      },
       "payload": {
        "filename": "application.rb",
        "before_cursor": "require 'active_record/railtie'",
        "after_cursor": "\nrequire 'action_controller/railtie'",
        "open_files": [
          {
            "filename": "app/controllers/application_controller.rb",
            "content": "class ApplicationController < ActionController::Base..."
          }
        ]
      }
    }
  ]
}
```

別のユースケースの例として、`prompt_components` ペイロードに 2 つのバージョンのプロンプトが渡される場合があります。各バージョンは異なるサードパーティ AI モデルプロバイダー向けに調整されています。

```json
{
  prompt_components: [
    {
      "type": "prompt",
      "metadata": {
        "source": "GitLab EE",
        "version": "16.7.0-pre",
      },
      "payload": {
        "content": "You can fetch information about a resource called an issue...",
        "params": {
          "temperature": 0.2,
          "maxOutputTokens": 1024
        },
        "model": "text-bison",
        "provider": "vertex-ai"
      }
    },
    {
      "type": "prompt",
      "metadata": {
        "source": "GitLab EE",
        "version": "16.7.0-pre",
      },
      "payload": {
        "content": "System: You can fetch information about a resource called an issue...\n\nHuman:",
        "params": {
          "temperature": 0.2,
        },
        "model": "claude-2",
        "provider": "anthropic"
      }
    }

  ]
}
```

#### バージョン間互換性 {#cross-version-compatibility}

**`payload` 内のフィールドの名前変更、削除、目的変更が必要な場合、影響を受けるエンベロープタイプを使用する単一目的エンドポイントは、Gateway 内で古いバージョンのフィールドのサポートを構築し、少なくとも 2 メジャーバージョンの GitLab で維持する必要があります。**

後方互換性のサポートに役立つ可能性のある良いプラクティス: 完全なプロンプトではなく、`prompt_components` 内にプロンプトのビルディングブロックを提供すること。プロンプトをコンパイルする責任をビルディングブロックから AI Gateway に移すことで、将来的にプロンプトをより柔軟に調整できるようになります。

#### 機能例: コード提案

例えば、ざっくりとしたコード提案サービスは次のようになります。

```plaintext
POST /v3/code/completions
```

```json
{
  "prompt_components": [
    {
      "type": "prompt",
      "metadata": {
        "source": "GitLab EE",
        "version": "16.7.0-pre",
      },
      "payload": {
        "content": "...",
        "params": {
          "temperature": 0.2,
          "maxOutputTokens": 1024
        },
        "model": "code-gecko",
        "provider": "vertex-ai"
      }
    },
    {
      "type": "editor_content",
      "metadata": {
        "source": "vscode",
        "version": "1.1.1"
      },
       "payload": {
        "filename": "application.rb",
        "before_cursor": "require 'active_record/railtie'",
        "after_cursor": "\nrequire 'action_controller/railtie'",
        "open_files": [
          {
            "filename": "app/controllers/application_controller.rb",
            "content": "class ApplicationController < ActionController::Base..."
          }
        ]
      }
    }
  ]
}
```

レスポンスは次のようになります。

```json
{
  "response": "require 'something/else'",
  "metadata": {
    "identifier": "deadbeef",
    "model": "code-gecko",
    "timestamp": 1688118443
  }
}
```

`metadata` フィールドには、AI Gateway 上のテレメトリエンドポイントで使用できる情報が含まれており、提案受け入れ率などをカウントできます。

コード提案のテレメトリを受信する方法は [#415745](https://gitlab.com/gitlab-org/gitlab/-/issues/415745) で議論されています。
すべての AI 関連機能のためのアーキテクチャを考案する予定です。

#### AI プロバイダーの公開 {#exposing-ai-providers}

AI に関する多くの機能は、すでに GitLab Rails に組み込まれており、現在はプロンプトを構築して、これを直接さまざまな AI プロバイダーに送信しています。執筆時点で、GitLab には次のプロバイダーの API クライアントがあります。

- [Anthropic](https://gitlab.com/gitlab-org/gitlab/blob/4344729240496a5018e19a82030d6d4b227e9c79/ee/lib/gitlab/llm/anthropic/client.rb#L6)
- [Vertex](https://gitlab.com/gitlab-org/gitlab/blob/4344729240496a5018e19a82030d6d4b227e9c79/ee/lib/gitlab/llm/vertex_ai/client.rb#L6)

これらの機能を self-managed インスタンスで利用できるようにするために、GitLab.com、self-managed、Dedicated インストールから利用できるエンドポイントを各プロバイダーに対して提供する必要があります。

最初のイテレーションでは、リクエストを AI プロバイダーにプロキシするエンドポイントを構築できます。これにより、これらのリクエストを AI Gateway 経由でルーティングするように移行しやすくなります。例として、Anthropic 用のエンドポイントは次のようになります。

```plaintext
POST /internal/proxy/anthropic/(*endpoint)
```

`*endpoint` は、クライアントが何が呼ばれるかを指定することを意味します。例えば `/v1/complete` です。リクエストボディは AI プロバイダーに完全に転送されます。AI Gateway はリクエストが正しく認証されていることを確認します。

GitLab と AI プロバイダーの間にプロキシを置くことは、AI プロバイダーに何が通るかを引き続き制御でき、必要に応じてリクエストを操作したり、別のプロバイダーにルーティングしたりできることを意味します。これにより、プロバイダーの API が変更されたり、特定のプロバイダーとの取引をやめることを決定したりしても、古い GitLab インストールの機能をサポートし続けることができます。

API プロバイダーを直接使用している機能を、機能固有の専用 API に移行することには価値があると考えています。これにより、AI プロバイダーが進化したときに、私たちの管理下にある AI Gateway を変更することで、これらの機能を改善できます。self-managed や Dedicated インストールを使用しているお客様は、GitLab インスタンスをアップグレードすることなく、より優れた AI サポート機能を利用できるようになります。

現在 [実験的](https://docs.gitlab.com/ee/policy/development_stages_support.html#experiment) な機能はこれらの汎用 API を使用できますが、self-managed インストール向けに [一般提供](https://docs.gitlab.com/ee/policy/development_stages_support.html#generally-available-ga) する前に、単一目的の API エンドポイントに変換することを目指すべきです。これにより、AI プロバイダーのランドスケープが変化しても、機能を長期的にサポートしやすくなります。

### GitLab インスタンスの API

これは、外部クライアントがローカルの GitLab インスタンスで利用できる API です。例えば、self-managed インスタンスと通信する VSCode などです。

これらのバージョンは大きく異なる可能性もあります。例えば、VSCode 拡張機能は開発者によって最新の状態に保たれているが、業務に使用している GitLab インスタンスはマイナーバージョン 1 つ古いままといったことが起こります。そのため、AI Gateway と同様に、安定性と柔軟性の点でクライアントにも同じ要件が適用されます。

最初のイテレーションでは、VSCode 拡張機能と Web IDE が送信する現在の REST ペイロードを維持しながら、それを適切な GitLab インストールにルーティングすることを検討できます。GitLab Rails は、ペイロードを解釈する必要なく、AI Gateway 用のエンベロープにラップできます。

これを行うと、拡張機能からリクエストを受け取る GitLab インスタンスは、AI Gateway に強化して渡すために、リクエストを理解する必要がなくなります。GitLab は `prompt_components` に情報を追加し、すでにそこにあったすべてを AI Gateway にそのまま渡すことができます。

リクエストが別のクライアント（例えば VSCode）から開始された場合、GitLab Rails は、その他の強化やプロンプトに加えて、ペイロード全体を転送する必要があります。これは、新しいバージョンのクライアントから古い GitLab インストールを経由して新しい AI Gateway への変更を、潜在的にサポートできるようにするために必要です。

**ディスカッション:** この最初のイテレーションでも REST+JSON アプローチを使用しています。これは VSCode 拡張機能が現在モデル Gateway と通信している方法です。これは、その既存のペイロードをエンベロープにラップするステップが、より小さなイテレーションになることを意味します。さらに、バージョン間互換性という利点が加わります。しかし、これは将来のイテレーションでも REST+JSON を使用する必要があるという意味ではありません。各機能には独自のエンドポイントがあるため、プロトコルも異なる可能性があります。

## 認証 & 認可

GitLab は、ユーザーを認証し、要求された機能の使用がライセンスで許可されているかを確認することで、認可の最初のレイヤーを提供します。これは、GitLab に組み込まれた既存の認証、ポリシー、ライセンスチェックを使用して達成されます。

AI Gateway での GitLab インスタンスの認証は、以下で議論されました。

- [Issue 177](https://gitlab.com/gitlab-org/modelops/applied-ml/code-suggestions/ai-assist/-/issues/177)
- [Epic 10808](https://gitlab.com/groups/gitlab-org/-/epics/10808)

エンドユーザー、GitLab インスタンス、AI Gateway 間で信頼が委任される具体的なメカニズムは、[Cloud Connector アクセス制御ドキュメント](https://docs.gitlab.com/ee/development/cloud_connector/architecture.html#access-control) で詳しく説明されています。

AI Gateway は、バックエンドサービスとして、その他のタスクとともにインスタンス認証を処理します。アクセスは Cloud Connector ロードバランサー（現在は Cloudflare として実装）を介して行われ、これは Web Application Firewall（WAF）レイヤーとして機能しますが認証は行いません。AI Gateway は、コード補完など一部のリクエストが GitLab Rails を介さずクライアントから直接送信されるため、エンドユーザー認証もサポートする必要があります。短期ユーザートークンを含む可能なソリューションは [Epic 13252](https://gitlab.com/groups/gitlab-org/-/epics/13252) で説明されています。AI Gateway は、GitLab Rails によってプロキシされたリクエストと直接クライアントリクエストを区別する必要があります。一部のエンドポイントやパラメーターは直接リクエストには利用できない場合があるためです（例: クライアントは最終プロンプトのサブコンポーネントのみを送信し、AI Gateway がこれを構築します）。

AI Gateway は JSON ベースの API 通信を使用し、認証には JWT に依存します。これらの JWT は通常 GitLab インスタンスにスコープされており、PAT または OAuth トークンを使用して取得されます。コード補完では、短命のユーザーバインド JWT が使用され、クライアントと AI Gateway 間で直接通信が可能になり、リクエストごとに GitLab インスタンスを経由する必要がなくなります。この短命の JWT は 1 時間有効で、複数のプロンプトリクエストに必要な JWT の数を削減します。

クライアントが GitLab Duo Chat または IDE でプロンプトを開始すると、プロンプト、テレメトリ、コンテキスト、JWT トークンがパッケージ化され、TLS を使用して送信されます。重要なのは、ペイロード自体が暗号化されていないことです。リクエストボディ内の JSON 形式でプレーンテキストとして渡されます。このアプローチは、HTTPS を介したトンネルレベルの TLS 暗号化のみが使用されるサードパーティモデルへの呼び出しでも一貫しています。

AI Gateway は GitLab がホストするインフラ内で動作し、Anthropic や Vertex のようなプロバイダー向けに GitLab アカウントでホストされている API と接続します。モデルは、GitLab GCP テナンシ内で Google のモデルのフリーズされたバージョンとしてホストされ、セキュリティ境界内のプライベートエンドポイントを使用しています。異なるお客様からのプロンプトは同じ共有モデルを使用しますが、各セッションは分離を確保するためにユーザーレベルの接続を維持します。

AI Gateway はステートレスサービスとして設計されており、お客様固有のデータを保存しません。ペイロードの復号化はアプリケーション層ではなくネットワーク層で行われ、暗号化キーは GKE ネイティブの GCP プロセスを使用してリクエストごとに生成されます。Anthropic API へのリクエストはパブリックインターネットを介して行われますが、Vertex AI モデルへのリクエストは同じ GCP リージョン内に配置されることで最適化されます。すべての接続は TLS/HTTPS で保護されており、データフロー全体を通じて暗号化された通信が確保されます。

## Embeddings

NOTE:
埋め込みデータベースについては、[RAG for GitLab Duo](https://docs.gitlab.com/ee/architecture/blueprints/gitlab_duo_rag/index.html) を参照してください。

埋め込みは、すべての機能から単一のエンドポイントでリクエストできます。例えば次のようなリクエストです。

```plaintext
POST /internal/embeddings
```

```json
{
  "content": "The lazy fox and the jumping dog",
  "content_type": "issue_title",
  "metadata": {
    "source": "GitLab EE",
    "version": "16.3"
  }
}
```

`content_type` および `content` プロパティは、将来的に何が適切かに基づいて、異なるモデルから埋め込みを作成するために使用される可能性があります。

レスポンスには、使用したプロバイダーとモデルとともに埋め込みベクトルが含まれます。例えば次のようになります。

```json
{
  "response": [0.2, -1, ...],
  "metadata": {
    "identifier": "8badf00d",
    "model": "text-embedding-ada-002",
    "provider": "open_ai",
  }
}
```

埋め込みを保存する際は、モデルとプロバイダーのデータを必ず含めるようにします。埋め込みを使用してプロンプトを生成する際には、メタデータをペイロードに含めることで、埋め込みの品質を判断できます。

## デプロイ

現在、AI Gateway となる model-gateway は、プロジェクトリポジトリ
[`gitlab-org/modelops/applied-ml/code-suggestions/ai-assist`](https://gitlab.com/gitlab-org/modelops/applied-ml/code-suggestions/ai-assist) からデプロイされています。

独自のプロジェクトの Kubernetes クラスターにデプロイされています。エンジニアがテスト用に直接利用しているステージング環境があります。

将来的には [Runway](https://gitlab.com/gitlab-com/gl-infra/platform/runway/) を使用してデプロイされる予定です。その時点で、本番環境とステージング環境のデプロイが行われます。ステージングデプロイは、本番環境への到達を停止する可能性のある自動 QA 実行に使用できます。

さらなるテスト戦略は [&10563](https://gitlab.com/groups/gitlab-org/-/epics/10563) で議論されています。

### AI Gateway の self-hosted デプロイ

self-hosted 環境内のお客様も、self-hosted 版の AIGW をデプロイでき、FedRAMP 準拠を必要とするものを含むエアギャップソリューションでも Duo 機能を使用できるようになります。このアプローチにより、独自の LLM インフラストラクチャを管理できる高度なお客様にもサービスを提供でき、より高度な制御と柔軟性を提供します。
self-managed での AIGW のセットアップ方法に関する手順は、[ドキュメント](https://docs.gitlab.com/ee/administration/self_hosted_models/install_infrastructure.html) で確認できます。

これによりインストールするコンポーネントが 1 つ追加されますが、代替案はモノリスにモデルインターフェイスを実装することになります。これには次のようなさまざまな課題があります。

- LLM 処理のために Python に存在するすべてのライブラリを Ruby で再実装する必要がある
- コードベースとメンテナンスの重複
- self-hosted と `.com` の機能のパリティの欠如
- self-hosted 顧客のためのロギングとトレースの困難さ

一方、self-hosted と `.com` 環境の両方で AI Gateway に依存することで、LLM とのインターフェイス処理に関するインフラストラクチャの課題と解決策が一元化されます。

#### AI Gateway と GitLab のバージョンマッチング

お客様は、AIGW のどのバージョンが自分の GitLab インスタンスと互換性があるかを明確に知る必要があります。
AI Gateway のデプロイは Omnibus/GNG によって管理されていないため、GitLab のバージョンごとにイメージタグを提供することでこれを実現します。例えば、`gitlab-17.2-ee` というタグの AIGW イメージは GitLab バージョン `17.2-ee` と互換性があります。

[バージョニングに関する詳細な議論](https://gitlab.com/gitlab-org/modelops/applied-ml/code-suggestions/ai-assist/-/issues/579)

## 代替ソリューション

代替ソリューションは [applied-ml/code-suggestions/ai-assist#161](https://gitlab.com/gitlab-org/modelops/applied-ml/code-suggestions/ai-assist/-/issues/161#what-are-the-alternatives) で議論されました。

## 決定事項

- [ADR-001: 直接接続を許可する](decisions/001_direct_connections/)
- [ADR-002: AI プロバイダーへのプロキシエンドポイントの公開](decisions/002_proxy/)

## 今後の作業

AI Gateway の目的は、モノリスが GitLab のすべての利用箇所で機械学習モデルに**アクセス**するための主要な手段となり、AI バックの機能を開発する際に一貫したユーザージャーニーを作成することです。そのために、このゴールを次の 3 つのカテゴリーに分割しています。

- AI Gateway を介した一元化されたアクセス
- Unit Primitives

### AI Gateway を介した一元化されたアクセス

AI Gateway はスタンドアロンサービスとして、GitLab インストールとサードパーティ AI モデル間のすべての通信のための唯一のアクセスポイントです。アプリ内機能であろうとコード提案であろうと、デプロイ方法に関係なく、すべての GitLab 機能へのアクセスを一元化して管理するように設計されています。

この戦略により、エンタープライズ管理が大幅に簡素化され、機械学習がモノリスから抽象化されます。テレメトリ、埋め込み API、マルチリージョン/お客様固有のデプロイなどの将来の拡張により、私たちのゴールは、インストールタイプに関係なくすべての GitLab ユーザーにスケーラブルで包括的な AI ソリューションを提供することです。

[Model registry](https://docs.gitlab.com/ee/user/project/ml/model_registry/index.html) は、ユーザーが GitLab を使用して機械学習モデルを管理できる機能です。大規模言語モデルにのみ焦点を当てているわけではなく、現在は小規模なモデルアプリケーションを対象としており、これらはスタンドアロンライブラリ、サービス、ポッド、クラウドデプロイなど、さまざまな方法でデプロイできます。これらのユーザーがデプロイしたモデルについては、AI Gateway 経由でアクセス可能な API を自動構成する機能が、重要な機能になる可能性があります。

- [モノリスのモデルアクセスのための唯一のアクセスポイントとしての AI Gateway](https://gitlab.com/groups/gitlab-org/-/epics/13024)

### Unit Primitives

Unit Primitives は、AI Gateway を介した AI 機能へのアクセス管理戦略の根幹をなす部分です。Gateway を介してアクセスおよび管理できる最小単位の機能を表します。このアプローチは、AI Gateway を介して公開される機能をより細かく制御し、AI 機能の管理を簡素化します。また、ユーザーがデプロイしたモデルやローカルでホストされているモデルをサポートするための将来の作業への道を開きます。ビジネスの観点から、Unit Primitives は、さまざまな階層やパッケージモデルに対してシャッフルできる最小の単位であり、私たちの提供品に柔軟性と適応性を提供します。

最初のイテレーションでは、コード提案とチャットの 2 つのプリミティブをサポートします。後者には、すべての Chat 機能が 1 つのプリミティブにまとめられます。

次のイテレーションでは、Chat プリミティブをトップレベルツールに基づいて複数のプリミティブに分解する予定です。この作業は、分類を AI Gateway に移動するタスクの完了に依存しています。

Unit Primitives の導入により、AI 機能の管理が簡素化され、AI Gateway を介して公開される機能のより細かい制御が可能になります。これにより、ユーザーがデプロイしたモデルやローカルでホストされているモデルをサポートするための将来の作業への道も開かれます。

Unit Primitives の実装と統合方法の詳細については、[Cloud Connector のドキュメント](https://docs.gitlab.com/ee/development/cloud_connector/index.html) を参照してください。

## AI スタック内の他のコンポーネント

AI Gateway は AI 機能とモデルへの_アクセス_を一元化しますが、ユーザーが目標を達成するのを助けるために、他のコンポーネントと相互作用します。

- Model registry: 機械学習モデルを管理してデプロイする

### Model registry

[Model registry](https://docs.gitlab.com/ee/user/project/ml/model_registry/index.html) は、ユーザーが GitLab を使用して機械学習モデルを管理できる機能です。大規模言語モデルにのみ焦点を当てているわけではなく、現在は小規模なモデルアプリケーションを対象としており、これらはスタンドアロンライブラリ、サービス、ポッド、クラウドデプロイなど、さまざまな方法でデプロイできます。これらのユーザーがデプロイしたモデルについては、AI Gateway 経由でアクセス可能な API を自動構成する機能が、重要な機能になる可能性があります。
