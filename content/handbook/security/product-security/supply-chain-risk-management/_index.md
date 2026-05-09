---
title: "サプライチェーンリスク管理戦略"
description: "このページでは、ソフトウェア開発ライフサイクル全体にわたるリスクを特定、評価、軽減するための構造化されたフレームワークを提供しながら、より高い SLSA 準拠レベルへ前進することを目指す GitLab のサプライチェーンリスク管理への包括的なアプローチを説明します。"
upstream_path: /handbook/security/product-security/supply-chain-risk-management/
upstream_sha: 1e195b58b9f249ff10bd0e705106c320fee86141
translated_at: "2026-05-09T12:00:00Z"
translator: claude
stale: false
---

## はじめに

このページでは、私たちのソフトウェアサプライチェーン内のリスクを特定、評価、軽減するための GitLab の包括的な戦略について説明します。私たちのリスクベースのアプローチは、自社データと顧客データの両方を保護しつつ、Supply chain Levels for Software Artifacts (SLSA) 準拠の段階的により高いレベルへ前進するように設計されています。

## 目標と目的

- サプライチェーン全体を通して GitLab の内部データ資産に対するリスクを特定し軽減する
- ソフトウェア提供パイプラインの整合性とセキュリティを確保することで、顧客データを保護する
- リスクに焦点を当てた改善を通して、SLSA 準拠の段階的により高いレベルを達成し維持する
- サプライチェーンの脅威と脆弱性を検出するための包括的な可視性とトレーサビリティを確立する
- 新たなサプライチェーンの脅威に対処するためのプロアクティブなリスク管理フレームワークを実装する
- サプライチェーン攻撃面を削減するための測定可能なアプローチを作成する
- 構造化されたサプライチェーンリスクデータと分析で [Product Security Risk Register (PSRR)](/handbook/security/product-security/security-platforms-architecture/risk-register/) をサポートし強化する

## サプライチェーンコンポーネントモデル

### サプライチェーンの複雑性を分解する

GitLab の完全なサプライチェーンは、単一の包括的な図で表すには複雑すぎます。代わりに、再帰的なモデルを使用して、この複雑性を管理可能なコンポーネントに分解します。

- 各アーティファクトには独自のサプライチェーンがあります
- 各アーティファクトのサプライチェーンは、独自のサプライチェーンを持つ他のアーティファクトに依存する場合があります
- これにより以下のような有向グラフ構造が作成されます:
  - ルートノードは配布されるアーティファクト (最終製品) です
  - 内部ノードは中間アーティファクトとコンポーネントです
  - 葉ノードは私たちのサプライチェーンの境界を表します (外部コンポーネント)

私たちは、GitLab の直接的な制御内にあるアーティファクトとコンポーネントに、インベントリと管理の取り組みを集中します。外部コンポーネント (葉ノード) については、それらの起源と基本的なメタデータを追跡しますが、現段階ではそれらのサプライチェーン全体を文書化することは試みません。

### SLSA サプライチェーンモデル

私たちは、保護すべき 3 つの主要領域を定義する SLSA フレームワーク ([Specification 1.1](https://slsa.dev/spec/v1.1/)) に合わせてサプライチェーン追跡を整合させています。

![SLSA Supply Chain Model](/images/security/product-security/supply-chain-risk-management/supply-chain-model.svg)

このモデルは、私たちが追跡するコアステップを示しています。

1. **Source**: コードが作成、レビュー、保存される場所
1. **Build**: ソースがパッケージ/アーティファクトに変換される場所
1. **Distribution**: ビルドされたアーティファクトが保存され配布される場所

このモデルはまた、以下も描いています。

- **Producer**: ソフトウェアを作成する責任のあるエンティティ
- **Consumer**: ソフトウェアを消費するエンティティ (別のサプライチェーンまたはエンドユーザー)
- **Dependencies**: Build と Distribution プロセスに供給される内部および外部のコンポーネント

私たちのサプライチェーン内の各アーティファクトについて、これら 3 つのコアステップを通じてのその経路を追跡し、各段階でコントロールと出所を文書化します。

### サプライチェーンコンポーネントタイプ

私たちのモデルは、サプライチェーンの各コアステップ内で特定のコンポーネントタイプを識別します。これらのタイプは、サプライチェーンの特定のサブセットを記述する際に使用される参照要素として機能します。すべてのコンポーネントがすべてのサプライチェーンに存在するわけではないことに注意してください — 以下のカテゴリ化は、包括的なモデリングのためのフレームワークを提供します。

これらのタイプは PSRR の [SLSA 脅威](https://slsa.dev/spec/v1.1/threats) にリンクされ、包括的なリスクを作成します。下の「[脅威](#threats)」セクションを参照してください。リスクは、より細かい粒度が必要な場合はサブタイプにリンクできます。

#### Source コンポーネント

Source コアステップには、Build ステップの前にソースコードを編集および変更できるすべてのものが含まれます。

| コンポーネントタイプ | サブタイプ | ラベル |
| -- | -- | -- |
| **開発依存関係** | (以下のすべてのサブタイプを包含) | [`~sscs-rm-component:src:dev-dependencies`](https://gitlab.com/gitlab-com/gl-security/security-assurance/security-risk-team/storm-risk-register/-/issues/?sort=created_date&state=opened&label_name%5B%5D=sscs-rm-component:src:dev-dependencies&first_page_size=100) |
|  | 開発環境セットアップツールおよび依存関係 (例: [asdf](https://asdf-vm.com/)/[mise](https://mise.jdx.dev/)) | [`~sscs-rm-component:src:dev-setup-tools`](https://gitlab.com/gitlab-com/gl-security/security-assurance/security-risk-team/storm-risk-register/-/issues/?sort=created_date&state=opened&label_name%5B%5D=sscs-rm-component:src:dev-setup-tools&first_page_size=100) |
|  | IDE (拡張機能とプラグインを含む) | [`~sscs-rm-component:src:IDEs`](https://gitlab.com/gitlab-com/gl-security/security-assurance/security-risk-team/storm-risk-register/-/issues/?sort=created_date&state=opened&label_name%5B%5D=sscs-rm-component:src:IDEs&first_page_size=100) |
|  | Docker イメージ | [`~sscs-rm-component:src:docker-images`](https://gitlab.com/gitlab-com/gl-security/security-assurance/security-risk-team/storm-risk-register/-/issues/?sort=created_date&state=opened&label_name%5B%5D=sscs-rm-component:src:docker-images&first_page_size=100) |
|  | プリコミットフック | [`~sscs-rm-component:src:pre-commit-hooks`](https://gitlab.com/gitlab-com/gl-security/security-assurance/security-risk-team/storm-risk-register/-/issues/?sort=created_date&state=opened&label_name%5B%5D=sscs-rm-component:src:pre-commit-hooks&first_page_size=100) |
|  | ローカルコードフォーマッタとリンター | [`~sscs-rm-component:src:linters`](https://gitlab.com/gitlab-com/gl-security/security-assurance/security-risk-team/storm-risk-register/-/issues/?sort=created_date&state=opened&label_name%5B%5D=sscs-rm-component:src:linters&first_page_size=100) |
| **GitLab リポジトリ** | (以下のすべてのサブタイプを包含) | [`~sscs-rm-component:src:repo`](https://gitlab.com/gitlab-com/gl-security/security-assurance/security-risk-team/storm-risk-register/-/issues/?sort=created_date&state=opened&label_name%5B%5D=sscs-rm-component:src:repo&first_page_size=100) |
|  | プロジェクト構成 | [`~sscs-rm-component:src:repo-config`](https://gitlab.com/gitlab-com/gl-security/security-assurance/security-risk-team/storm-risk-register/-/issues/?sort=created_date&state=opened&label_name%5B%5D=sscs-rm-component:src:repo-config&first_page_size=100) |
|  | [Code Owners](https://docs.gitlab.com/user/project/codeowners/) 構成 | [`~sscs-rm-component:src:repo-code-owners`](https://gitlab.com/gitlab-com/gl-security/security-assurance/security-risk-team/storm-risk-register/-/issues/?sort=created_date&state=opened&label_name%5B%5D=sscs-rm-component:src:repo-code-owners&first_page_size=100) |
|  | リポジトリアクセス制御 | [`~sscs-rm-component:src:repo-access-control`](https://gitlab.com/gitlab-com/gl-security/security-assurance/security-risk-team/storm-risk-register/-/issues/?sort=created_date&state=opened&label_name%5B%5D=sscs-rm-component:src:repo-access-control&first_page_size=100) |

#### Build コンポーネント

Build コアステップには、ソースコードを変換 (コンパイル、リンティングなど) してアーティファクトを生成できるすべてのものが含まれます。

| コンポーネントタイプ | サブタイプ | ラベル |
| -- | -- | -- |
| **CI/CD** | (以下のすべてのサブタイプを包含) | [`~sscs-rm-component:build:ci-cd`](https://gitlab.com/gitlab-com/gl-security/security-assurance/security-risk-team/storm-risk-register/-/issues/?sort=created_date&state=opened&label_name%5B%5D=sscs-rm-component:build:ci-cd&first_page_size=100) |
|  | GitLab Runners | [`~sscs-rm-component:build:gitlab-runners`](https://gitlab.com/gitlab-com/gl-security/security-assurance/security-risk-team/storm-risk-register/-/issues/?sort=created_date&state=opened&label_name%5B%5D=sscs-rm-component:build:gitlab-runners&first_page_size=100) |
|  | CI/CD テンプレート | [`~sscs-rm-component:build:ci-templates`](https://gitlab.com/gitlab-com/gl-security/security-assurance/security-risk-team/storm-risk-register/-/issues/?sort=created_date&state=opened&label_name%5B%5D=sscs-rm-component:build:ci-templates&first_page_size=100) |
|  | CI/CD コンポーネント | [`~sscs-rm-component:build:ci-components`](https://gitlab.com/gitlab-com/gl-security/security-assurance/security-risk-team/storm-risk-register/-/issues/?sort=created_date&state=opened&label_name%5B%5D=sscs-rm-component:build:ci-components&first_page_size=100) |
| **ビルドイメージ** | (以下のすべてのサブタイプを包含) | [`~sscs-rm-component:build:build-images`](https://gitlab.com/gitlab-com/gl-security/security-assurance/security-risk-team/storm-risk-register/-/issues/?sort=created_date&state=opened&label_name%5B%5D=sscs-rm-component:build:build-images&first_page_size=100) |
|  | Base Docker イメージ | [`~sscs-rm-component:build:base-docker-images`](https://gitlab.com/gitlab-com/gl-security/security-assurance/security-risk-team/storm-risk-register/-/issues/?sort=created_date&state=opened&label_name%5B%5D=sscs-rm-component:build:base-docker-images&first_page_size=100) |
|  | 中間イメージ | [`~sscs-rm-component:build:intermediate-images`](https://gitlab.com/gitlab-com/gl-security/security-assurance/security-risk-team/storm-risk-register/-/issues/?sort=created_date&state=opened&label_name%5B%5D=sscs-rm-component:build:intermediate-images&first_page_size=100) |
|  | コンテナビルドツール | [`~sscs-rm-component:build:container-build-tools`](https://gitlab.com/gitlab-com/gl-security/security-assurance/security-risk-team/storm-risk-register/-/issues/?sort=created_date&state=opened&label_name%5B%5D=sscs-rm-component:build:container-build-tools&first_page_size=100) |
|  | コンテナレジストリ | [`~sscs-rm-component:build:container-registry`](https://gitlab.com/gitlab-com/gl-security/security-assurance/security-risk-team/storm-risk-register/-/issues/?sort=created_date&state=opened&label_name%5B%5D=sscs-rm-component:build:container-registry&first_page_size=100) |
| **ランタイム依存関係** | (以下のすべてのサブタイプを包含) | [`~sscs-rm-component:build:runtime-dependencies`](https://gitlab.com/gitlab-com/gl-security/security-assurance/security-risk-team/storm-risk-register/-/issues/?sort=created_date&state=opened&label_name%5B%5D=sscs-rm-component:build:runtime-dependencies&first_page_size=100) |
|  | Ruby Gems | [`~sscs-rm-component:build:ruby-gems`](https://gitlab.com/gitlab-com/gl-security/security-assurance/security-risk-team/storm-risk-register/-/issues/?sort=created_date&state=opened&label_name%5B%5D=sscs-rm-component:build:ruby-gems&first_page_size=100) |
|  | NPM パッケージ | [`~sscs-rm-component:build:npm-packages`](https://gitlab.com/gitlab-com/gl-security/security-assurance/security-risk-team/storm-risk-register/-/issues/?sort=created_date&state=opened&label_name%5B%5D=sscs-rm-component:build:npm-packages&first_page_size=100) |
|  | Go モジュール | [`~sscs-rm-component:build:go-modules`](https://gitlab.com/gitlab-com/gl-security/security-assurance/security-risk-team/storm-risk-register/-/issues/?sort=created_date&state=opened&label_name%5B%5D=sscs-rm-component:build:go-modules&first_page_size=100) |
|  | Python パッケージ | [`~sscs-rm-component:build:python-packages`](https://gitlab.com/gitlab-com/gl-security/security-assurance/security-risk-team/storm-risk-register/-/issues/?sort=created_date&state=opened&label_name%5B%5D=sscs-rm-component:build:python-packages&first_page_size=100) |
|  | その他言語固有の依存関係 | [`~sscs-rm-component:build:other-packages`](https://gitlab.com/gitlab-com/gl-security/security-assurance/security-risk-team/storm-risk-register/-/issues/?sort=created_date&state=opened&label_name%5B%5D=sscs-rm-component:build:other-packages&first_page_size=100) |
| **シークレット** | (以下のすべてのサブタイプを包含) | [`~sscs-rm-component:build:secrets`](https://gitlab.com/gitlab-com/gl-security/security-assurance/security-risk-team/storm-risk-register/-/issues/?sort=created_date&state=opened&label_name%5B%5D=sscs-rm-component:build:secrets&first_page_size=100) |
|  | Vault | [`~sscs-rm-component:build:vault`](https://gitlab.com/gitlab-com/gl-security/security-assurance/security-risk-team/storm-risk-register/-/issues/?sort=created_date&state=opened&label_name%5B%5D=sscs-rm-component:build:vault&first_page_size=100) |
|  | CI/CD 変数 | [`~sscs-rm-component:build:ci-variables`](https://gitlab.com/gitlab-com/gl-security/security-assurance/security-risk-team/storm-risk-register/-/issues/?sort=created_date&state=opened&label_name%5B%5D=sscs-rm-component:build:ci-variables&first_page_size=100) |
|  | キー管理システム | [`~sscs-rm-component:build:key-management`](https://gitlab.com/gitlab-com/gl-security/security-assurance/security-risk-team/storm-risk-register/-/issues/?sort=created_date&state=opened&label_name%5B%5D=sscs-rm-component:build:key-management&first_page_size=100) |
|  | 証明機関 | [`~sscs-rm-component:build:certificate-authorities`](https://gitlab.com/gitlab-com/gl-security/security-assurance/security-risk-team/storm-risk-register/-/issues/?sort=created_date&state=opened&label_name%5B%5D=sscs-rm-component:build:certificate-authorities&first_page_size=100) |
|  | 署名インフラ | [`~sscs-rm-component:build:signing-infra`](https://gitlab.com/gitlab-com/gl-security/security-assurance/security-risk-team/storm-risk-register/-/issues/?sort=created_date&state=opened&label_name%5B%5D=sscs-rm-component:build:signing-infra&first_page_size=100) |

#### Distribution コンポーネント

| コンポーネントタイプ | サブタイプ | ラベル |
| -- | -- | -- |
| **レジストリ** | (以下のすべてのサブタイプを包含) | [`~sscs-rm-component:dis:registries`](https://gitlab.com/gitlab-com/gl-security/security-assurance/security-risk-team/storm-risk-register/-/issues/?sort=created_date&state=opened&label_name%5B%5D=sscs-rm-component:dis:registries&first_page_size=100) |
|  | パッケージレジストリ | [`~sscs-rm-component:dis:package-registry`](https://gitlab.com/gitlab-com/gl-security/security-assurance/security-risk-team/storm-risk-register/-/issues/?sort=created_date&state=opened&label_name%5B%5D=sscs-rm-component:dis:package-registry&first_page_size=100) |
|  | コンテナレジストリ | [`~sscs-rm-component:dis:container-registry`](https://gitlab.com/gitlab-com/gl-security/security-assurance/security-risk-team/storm-risk-register/-/issues/?sort=created_date&state=opened&label_name%5B%5D=sscs-rm-component:dis:container-registry&first_page_size=100) |
| **配布インフラ** | (以下のすべてのサブタイプを包含) | [`~sscs-rm-component:dis:distribution-infra`](https://gitlab.com/gitlab-com/gl-security/security-assurance/security-risk-team/storm-risk-register/-/issues/?sort=created_date&state=opened&label_name%5B%5D=sscs-rm-component:dis:distribution-infra&first_page_size=100) |
|  | CDN | [`~sscs-rm-component:dis:cdns`](https://gitlab.com/gitlab-com/gl-security/security-assurance/security-risk-team/storm-risk-register/-/issues/?sort=created_date&state=opened&label_name%5B%5D=sscs-rm-component:dis:cdns&first_page_size=100) |
|  | ミラーサービス | [`~sscs-rm-component:dis:mirror-services`](https://gitlab.com/gitlab-com/gl-security/security-assurance/security-risk-team/storm-risk-register/-/issues/?sort=created_date&state=opened&label_name%5B%5D=sscs-rm-component:dis:mirror-services&first_page_size=100) |
|  | ダウンロードサーバー | [`~sscs-rm-component:dis:download-servers`](https://gitlab.com/gitlab-com/gl-security/security-assurance/security-risk-team/storm-risk-register/-/issues/?sort=created_date&state=opened&label_name%5B%5D=sscs-rm-component:dis:download-servers&first_page_size=100) |
| **検証システム** | (以下のすべてのサブタイプを包含) | [`~sscs-rm-component:dis:verification-systems`](https://gitlab.com/gitlab-com/gl-security/security-assurance/security-risk-team/storm-risk-register/-/issues/?sort=created_date&state=opened&label_name%5B%5D=sscs-rm-component:dis:verification-systems&first_page_size=100) |
|  | 署名検証 | [`~sscs-rm-component:dis:signature-verification`](https://gitlab.com/gitlab-com/gl-security/security-assurance/security-risk-team/storm-risk-register/-/issues/?sort=created_date&state=opened&label_name%5B%5D=sscs-rm-component:dis:signature-verification&first_page_size=100) |
|  | チェックサムサービス | [`~sscs-rm-component:dis:checksumming-services`](https://gitlab.com/gitlab-com/gl-security/security-assurance/security-risk-team/storm-risk-register/-/issues/?sort=created_date&state=opened&label_name%5B%5D=sscs-rm-component:dis:checksumming-services&first_page_size=100) |
|  | 認証システム | [`~sscs-rm-component:dis:attestation-systems`](https://gitlab.com/gitlab-com/gl-security/security-assurance/security-risk-team/storm-risk-register/-/issues/?sort=created_date&state=opened&label_name%5B%5D=sscs-rm-component:dis:attestation-systems&first_page_size=100) |

### SLSA 1.1 との整合

このフレームワークは Supply chain Levels for Software Artifacts (SLSA) 仕様 1.1 に基づいています。私たちは業界標準との一貫性を保ち、コンプライアンスの取り組みを促進するため、SLSA の用語と概念を意図的に採用しています。私たちのモデルに組み込まれた主要な SLSA 要素は次のとおりです。

- ビルド出所のドキュメント
- ソース検証
- ビルド整合性コントロール
- アーティファクト認証
- アクセス制御要件

#### 脅威 {#threats}

SLSA は、PSRR でモデルの要素をリスクにリンクするために使用される [一連の脅威を定義しています](https://slsa.dev/spec/v1.1/threats)。

![SLSA Threats](/images/security/product-security/supply-chain-risk-management/supply-chain-threats.svg)

| 脅威領域 | 脅威 | 説明 | ラベル |
| -- | -- | -- | -- |
| Source | [(A) Producer](https://slsa.dev/spec/v1.1/threats#a-producer) | ソフトウェア製造者が意図的に悪意のあるソースリビジョンを作成する | [`~sscs-rm-threat::a-malicious-source`](https://gitlab.com/gitlab-com/gl-security/security-assurance/security-risk-team/storm-risk-register/-/issues/?sort=created_date&state=opened&label_name%5B%5D=sscs-rm-threat::a-malicious-source&first_page_size=100) |
| | [(B) Modifying the source](https://slsa.dev/spec/v1.1/threats#b-modifying-the-source) -> [(B1) Submit change without review](https://slsa.dev/spec/v1.1/threats#b1-submit-change-without-review) | レビューなしで直接送信する | [`~sscs-rm-threat::b1-submit-without-review`](https://gitlab.com/gitlab-com/gl-security/security-assurance/security-risk-team/storm-risk-register/-/issues/?sort=created_date&state=opened&label_name%5B%5D=sscs-rm-threat::b1-submit-without-review&first_page_size=100) |
| | | 単一のアクターが複数のアカウントを制御する | [`~sscs-rm-threat::b1-actor-controls-multiple-accounts`](https://gitlab.com/gitlab-com/gl-security/security-assurance/security-risk-team/storm-risk-register/-/issues/?sort=created_date&state=opened&label_name%5B%5D=sscs-rm-threat::b1-actor-controls-multiple-accounts&first_page_size=100) |
| | | ロボットアカウントを使用して変更を送信する | [`~sscs-rm-threat::b1-robot-account-submit`](https://gitlab.com/gitlab-com/gl-security/security-assurance/security-risk-team/storm-risk-register/-/issues/?sort=created_date&state=opened&label_name%5B%5D=sscs-rm-threat::b1-robot-account-submit&first_page_size=100) |
| | | ルール例外の悪用 | [`~sscs-rm-threat::b1-abuse-rule-exceptions`](https://gitlab.com/gitlab-com/gl-security/security-assurance/security-risk-team/storm-risk-register/-/issues/?sort=created_date&state=opened&label_name%5B%5D=sscs-rm-threat::b1-abuse-rule-exceptions&first_page_size=100) |
| | | 高権限のアクターがコントロールをバイパスまたは無効化する | [`~sscs-rm-threat::b1-bypass-controls`](https://gitlab.com/gitlab-com/gl-security/security-assurance/security-risk-team/storm-risk-register/-/issues/?sort=created_date&state=opened&label_name%5B%5D=sscs-rm-threat::b1-bypass-controls&first_page_size=100) |
| | [(B) Modifying the source](https://slsa.dev/spec/v1.1/threats#b-modifying-the-source) -> [(B2) Evade change management process](https://slsa.dev/spec/v1.1/threats#b2-evade-change-management-process) | レビュー後にコードを変更する | [`~sscs-rm-threat::b2-modify-after-review`](https://gitlab.com/gitlab-com/gl-security/security-assurance/security-risk-team/storm-risk-register/-/issues/?sort=created_date&state=opened&label_name%5B%5D=sscs-rm-threat::b2-modify-after-review&first_page_size=100) |
| | | レビュー不可能な変更を送信する | [`~sscs-rm-threat::b2-unreviewable-change`](https://gitlab.com/gitlab-com/gl-security/security-assurance/security-risk-team/storm-risk-register/-/issues/?sort=created_date&state=opened&label_name%5B%5D=sscs-rm-threat::b2-unreviewable-change&first_page_size=100) |
| | | レビューされた変更を別のコンテキストにコピーする | [`~sscs-rm-threat::b2-copy-to-another-context`](https://gitlab.com/gitlab-com/gl-security/security-assurance/security-risk-team/storm-risk-register/-/issues/?sort=created_date&state=opened&label_name%5B%5D=sscs-rm-threat::b2-copy-to-another-context&first_page_size=100) |
| | | コミットグラフ攻撃 | [`~sscs-rm-threat::b2-commit-graph-attacks`](https://gitlab.com/gitlab-com/gl-security/security-assurance/security-risk-team/storm-risk-register/-/issues/?sort=created_date&state=opened&label_name%5B%5D=sscs-rm-threat::b2-commit-graph-attacks&first_page_size=100) |
| | [(B) Modifying the source](https://slsa.dev/spec/v1.1/threats#b-modifying-the-source) -> [(B3) Render code review ineffective](https://slsa.dev/spec/v1.1/threats#b3-render-code-review-ineffective) | 別の信頼された人と共謀する | [`~sscs-rm-threat::b3-collusion`](https://gitlab.com/gitlab-com/gl-security/security-assurance/security-risk-team/storm-risk-register/-/issues/?sort=created_date&state=opened&label_name%5B%5D=sscs-rm-threat::b3-collusion&first_page_size=100) |
| | | レビュアーをだまして悪意のあるコードを承認させる | [`~sscs-rm-threat::b3-trick-reviewer`](https://gitlab.com/gitlab-com/gl-security/security-assurance/security-risk-team/storm-risk-register/-/issues/?sort=created_date&state=opened&label_name%5B%5D=sscs-rm-threat::b3-trick-reviewer&first_page_size=100) |
| | | レビュアーが盲目的に変更を承認する | [`~sscs-rm-threat::b3-blind-approval`](https://gitlab.com/gitlab-com/gl-security/security-assurance/security-risk-team/storm-risk-register/-/issues/?sort=created_date&state=opened&label_name%5B%5D=sscs-rm-threat::b3-blind-approval&first_page_size=100) |
| | [(B) Modifying the source](https://slsa.dev/spec/v1.1/threats#b-modifying-the-source) -> [(B4) Render change metadata ineffective](https://slsa.dev/spec/v1.1/threats#b4-render-change-metadata-ineffective) | 変更メタデータを偽造する | [`~sscs-rm-threat::b4-forge-metadata`](https://gitlab.com/gitlab-com/gl-security/security-assurance/security-risk-team/storm-risk-register/-/issues/?sort=created_date&state=opened&label_name%5B%5D=sscs-rm-threat::b4-forge-metadata&first_page_size=100) |
| | [(C) Source code management](https://slsa.dev/spec/v1.1/threats#c-source-code-management) | プラットフォーム管理者が特権を悪用する | [`~sscs-rm-threat::c-admin-abuse`](https://gitlab.com/gitlab-com/gl-security/security-assurance/security-risk-team/storm-risk-register/-/issues/?sort=created_date&state=opened&label_name%5B%5D=sscs-rm-threat::c-admin-abuse&first_page_size=100) |
| | | SCM の脆弱性を悪用する | [`~sscs-rm-threat::c-exploit-scm-vulnerability`](https://gitlab.com/gitlab-com/gl-security/security-assurance/security-risk-team/storm-risk-register/-/issues/?sort=created_date&state=opened&label_name%5B%5D=sscs-rm-threat::c-exploit-scm-vulnerability&first_page_size=100) |
| Build | [(D) External build parameters](https://slsa.dev/spec/v1.1/threats#d-external-build-parameters) | コードの非公式フォークからビルドする | [`~sscs-rm-threat::d-unofficial-fork`](https://gitlab.com/gitlab-com/gl-security/security-assurance/security-risk-team/storm-risk-register/-/issues/?sort=created_date&state=opened&label_name%5B%5D=sscs-rm-threat::d-unofficial-fork&first_page_size=100) |
| | | 非公式ブランチまたはタグからビルドする | [`~sscs-rm-threat::d-unofficial-branch`](https://gitlab.com/gitlab-com/gl-security/security-assurance/security-risk-team/storm-risk-register/-/issues/?sort=created_date&state=opened&label_name%5B%5D=sscs-rm-threat::d-unofficial-branch&first_page_size=100) |
| | | 非公式のビルドステップからビルドする | [`~sscs-rm-threat::d-unofficial-steps`](https://gitlab.com/gitlab-com/gl-security/security-assurance/security-risk-team/storm-risk-register/-/issues/?sort=created_date&state=opened&label_name%5B%5D=sscs-rm-threat::d-unofficial-steps&first_page_size=100) |
| | | 非公式のパラメーターからビルドする | [`~sscs-rm-threat::d-unofficial-parameters`](https://gitlab.com/gitlab-com/gl-security/security-assurance/security-risk-team/storm-risk-register/-/issues/?sort=created_date&state=opened&label_name%5B%5D=sscs-rm-threat::d-unofficial-parameters&first_page_size=100) |
| | | チェックアウト後に変更されたコードからビルドする | [`~sscs-rm-threat::d-modified-after-checkout`](https://gitlab.com/gitlab-com/gl-security/security-assurance/security-risk-team/storm-risk-register/-/issues/?sort=created_date&state=opened&label_name%5B%5D=sscs-rm-threat::d-modified-after-checkout&first_page_size=100) |
| | [(E) Build process](https://slsa.dev/spec/v1.1/threats#e-build-process) | 出所値 (出力ダイジェスト以外) を偽造する | [`~sscs-rm-threat::e-forge-provenance-values`](https://gitlab.com/gitlab-com/gl-security/security-assurance/security-risk-team/storm-risk-register/-/issues/?sort=created_date&state=opened&label_name%5B%5D=sscs-rm-threat::e-forge-provenance-values&first_page_size=100) |
| | | 出所の出力ダイジェストを偽造する | [`~sscs-rm-threat::e-forge-output-digest`](https://gitlab.com/gitlab-com/gl-security/security-assurance/security-risk-team/storm-risk-register/-/issues/?sort=created_date&state=opened&label_name%5B%5D=sscs-rm-threat::e-forge-output-digest&first_page_size=100) |
| | | プロジェクトオーナーを侵害する | [`~sscs-rm-threat::e-compromise-owner`](https://gitlab.com/gitlab-com/gl-security/security-assurance/security-risk-team/storm-risk-register/-/issues/?sort=created_date&state=opened&label_name%5B%5D=sscs-rm-threat::e-compromise-owner&first_page_size=100) |
| | | 他のビルドを侵害する | [`~sscs-rm-threat::e-compromise-other-build`](https://gitlab.com/gitlab-com/gl-security/security-assurance/security-risk-team/storm-risk-register/-/issues/?sort=created_date&state=opened&label_name%5B%5D=sscs-rm-threat::e-compromise-other-build&first_page_size=100) |
| | | 暗号化シークレットを盗む | [`~sscs-rm-threat::e-steal-secrets`](https://gitlab.com/gitlab-com/gl-security/security-assurance/security-risk-team/storm-risk-register/-/issues/?sort=created_date&state=opened&label_name%5B%5D=sscs-rm-threat::e-steal-secrets&first_page_size=100) |
| | | ビルドキャッシュに毒を盛る | [`~sscs-rm-threat::e-poison-cache`](https://gitlab.com/gitlab-com/gl-security/security-assurance/security-risk-team/storm-risk-register/-/issues/?sort=created_date&state=opened&label_name%5B%5D=sscs-rm-threat::e-poison-cache&first_page_size=100) |
| | | ビルドプラットフォーム管理者を侵害する | [`~sscs-rm-threat::e-compromise-platform-admin`](https://gitlab.com/gitlab-com/gl-security/security-assurance/security-risk-team/storm-risk-register/-/issues/?sort=created_date&state=opened&label_name%5B%5D=sscs-rm-threat::e-compromise-platform-admin&first_page_size=100) |
| | [(F) Artifact publication](https://slsa.dev/spec/v1.1/threats#f-artifact-publication) | 信頼されない CI/CD でビルドする | [`~sscs-rm-threat::f-untrusted-cicd`](https://gitlab.com/gitlab-com/gl-security/security-assurance/security-risk-team/storm-risk-register/-/issues/?sort=created_date&state=opened&label_name%5B%5D=sscs-rm-threat::f-untrusted-cicd&first_page_size=100) |
| | | 出所なしでパッケージをアップロードする | [`~sscs-rm-threat::f-upload-without-provenance`](https://gitlab.com/gitlab-com/gl-security/security-assurance/security-risk-team/storm-risk-register/-/issues/?sort=created_date&state=opened&label_name%5B%5D=sscs-rm-threat::f-upload-without-provenance&first_page_size=100) |
| | | CI/CD 後にアーティファクトを改ざんする | [`~sscs-rm-threat::f-tamper-after-cicd`](https://gitlab.com/gitlab-com/gl-security/security-assurance/security-risk-team/storm-risk-register/-/issues/?sort=created_date&state=opened&label_name%5B%5D=sscs-rm-threat::f-tamper-after-cicd&first_page_size=100) |
| | | 出所を改ざんする | [`~sscs-rm-threat::f-tamper-with-provenance`](https://gitlab.com/gitlab-com/gl-security/security-assurance/security-risk-team/storm-risk-register/-/issues/?sort=created_date&state=opened&label_name%5B%5D=sscs-rm-threat::f-tamper-with-provenance&first_page_size=100) |
| | [(G) Distribution channel](https://slsa.dev/spec/v1.1/threats#g-distribution-channel) | 信頼されない CI/CD でビルドする | [`~sscs-rm-threat::g-untrusted-cicd`](https://gitlab.com/gitlab-com/gl-security/security-assurance/security-risk-team/storm-risk-register/-/issues/?sort=created_date&state=opened&label_name%5B%5D=sscs-rm-threat::g-untrusted-cicd&first_page_size=100) |
| | | 信頼されない仲介者から VSA を発行する | [`~sscs-rm-threat::g-untrusted-vsa`](https://gitlab.com/gitlab-com/gl-security/security-assurance/security-risk-team/storm-risk-register/-/issues/?sort=created_date&state=opened&label_name%5B%5D=sscs-rm-threat::g-untrusted-vsa&first_page_size=100) |
| | | 出所または VSA なしでパッケージをアップロードする | [`~sscs-rm-threat::g-upload-without-verification`](https://gitlab.com/gitlab-com/gl-security/security-assurance/security-risk-team/storm-risk-register/-/issues/?sort=created_date&state=opened&label_name%5B%5D=sscs-rm-threat::g-upload-without-verification&first_page_size=100) |
| | | パッケージと VSA を別のものに置き換える | [`~sscs-rm-threat::g-replace-package-vsa`](https://gitlab.com/gitlab-com/gl-security/security-assurance/security-risk-team/storm-risk-register/-/issues/?sort=created_date&state=opened&label_name%5B%5D=sscs-rm-threat::g-replace-package-vsa&first_page_size=100) |
| | | アップロード後にアーティファクトを改ざんする | [`~sscs-rm-threat::g-tamper-after-upload`](https://gitlab.com/gitlab-com/gl-security/security-assurance/security-risk-team/storm-risk-register/-/issues/?sort=created_date&state=opened&label_name%5B%5D=sscs-rm-threat::g-tamper-after-upload&first_page_size=100) |
| | | 出所または VSA を改ざんする | [`~sscs-rm-threat::g-tamper-verification`](https://gitlab.com/gitlab-com/gl-security/security-assurance/security-risk-team/storm-risk-register/-/issues/?sort=created_date&state=opened&label_name%5B%5D=sscs-rm-threat::g-tamper-verification&first_page_size=100) |
| Usage | [(H) Package selection](https://slsa.dev/spec/v1.1/threats#h-package-selection) | 依存関係の混乱 | [`~sscs-rm-threat::h-dependency-confusion`](https://gitlab.com/gitlab-com/gl-security/security-assurance/security-risk-team/storm-risk-register/-/issues/?sort=created_date&state=opened&label_name%5B%5D=sscs-rm-threat::h-dependency-confusion&first_page_size=100) |
| | | タイポスクワッティング | [`~sscs-rm-threat::h-typosquatting`](https://gitlab.com/gitlab-com/gl-security/security-assurance/security-risk-team/storm-risk-register/-/issues/?sort=created_date&state=opened&label_name%5B%5D=sscs-rm-threat::h-typosquatting&first_page_size=100) |
| | [(I) Usage](https://slsa.dev/spec/v1.1/threats#i-usage) | 不適切な使用 | [`~sscs-rm-threat::i-improper-usage`](https://gitlab.com/gitlab-com/gl-security/security-assurance/security-risk-team/storm-risk-register/-/issues/?sort=created_date&state=opened&label_name%5B%5D=sscs-rm-threat::i-improper-usage&first_page_size=100) |
| Dependency | [Build dependency](https://slsa.dev/spec/v1.1/threats#build-dependency) | 脆弱な依存関係を含める | [`~sscs-rm-threat::dep-vulnerable-dependency`](https://gitlab.com/gitlab-com/gl-security/security-assurance/security-risk-team/storm-risk-register/-/issues/?sort=created_date&state=opened&label_name%5B%5D=sscs-rm-threat::dep-vulnerable-dependency&first_page_size=100) |
| | | 侵害されたビルドツールを使用する | [`~sscs-rm-threat::dep-compromised-build-tool`](https://gitlab.com/gitlab-com/gl-security/security-assurance/security-risk-team/storm-risk-register/-/issues/?sort=created_date&state=opened&label_name%5B%5D=sscs-rm-threat::dep-compromised-build-tool&first_page_size=100) |
| | | ビルド中に侵害されたランタイム依存関係を使用する | [`~sscs-rm-threat::dep-compromised-runtime-dependency`](https://gitlab.com/gitlab-com/gl-security/security-assurance/security-risk-team/storm-risk-register/-/issues/?sort=created_date&state=opened&label_name%5B%5D=sscs-rm-threat::dep-compromised-runtime-dependency&first_page_size=100) |

## Product Security Risk Register との統合

サプライチェーンリスク管理戦略は、[Product Security Risk Register (PSRR)](/handbook/security/product-security/security-platforms-architecture/risk-register/) の重要な基盤として機能します。PSRR で特定された各サプライチェーン関連リスクは、このサプライチェーンモデル内の特定の要素にリンクされる必要があります。

1. **リスクマッピング要件**

   - PSRR のすべてのサプライチェーンリスクは、このモデルから特定のコンポーネントを参照する必要があります
   - 拡張すると、リスクはサプライチェーンステップのどの部分が影響を受けるかを特定します (Source、Build、または Distribution)
   - リスクドキュメントには、関与する特定のアーティファクトを含めることができます
   - サプライチェーンを通したリスク伝播の可能性を文書化する必要があります

1. **双方向トレーサビリティ**

   - サプライチェーンモデルコンポーネントは、関連する PSRR リスク項目にリンクし返す必要があります (上記のラベル参照)
   - PSRR エントリは、影響を受けるサプライチェーンコンポーネントにリンクする必要があります
   - サプライチェーンモデルへの更新は、関連する PSRR エントリのレビューをトリガーする必要があります
   - サプライチェーンに関連する新しい PSRR リスクは、リスク登録時にこのモデルにマッピングされる必要があります

1. **統一されたリスクアセスメントアプローチ**

   - リスクスコアリング方法論は、このモデルと PSRR で一貫している必要があります
   - PSRR で文書化されたサプライチェーンリスクの軽減策は、このモデルのコントロールに整合する必要があります
   - リスク受容判断は、サプライチェーングラフの完全なコンテキストを考慮する必要があります

この統合により、既存のセキュリティフレームワークを活用しつつ、サプライチェーン固有の脅威への深い可視性を提供する、サプライチェーンリスク管理への包括的なアプローチが保証されます。

## このモデルの使い方

### 開発チーム向け

{{% alert title="Note" color="primary" %}}
以下の項目は将来/北極星のリクエストを表しており、現在の要件ではありません。
{{% /alert %}}

1. **アーティファクトのドキュメント**

   - 各新しいアーティファクトタイプについて、そのソースコンポーネントを文書化する
   - アーティファクトを中央インベントリに登録する (https://gitlab.com/groups/gitlab-org/-/epics/16484 を参照)

1. **コンプライアンス検証**

   - モデル要件に対する定期的な自己評価
   - コントロール実装の証拠を文書化する
   - 定期的なサプライチェーンレビューに参加する

### セキュリティチーム向け

1. **リスク監視とインテリジェンス**

   - 登録されたコンポーネントの継続的なリスク監視を実装する
   - サプライチェーンエコシステム全体で定期的な脅威ハンティングを実施する
   - サプライチェーン脅威インテリジェンスプログラムを維持する
   - 検出された異常に対するリスク閾値とエスカレーション手順を確立する

1. **リスクベースの監査サポート**

   - コンプライアンス目的のためのリスク証拠収集を維持する
   - リスクアセスメントドキュメントで外部監査をサポートする
   - チーム横断的なリスクコントロールの実装と有効性を検証する
   - リスクに焦点を当てた監査ナラティブとドキュメントを開発する

1. **リスクモデルの進化**

   - 新しい脅威と攻撃手法が出現するにつれてリスクモデルを更新する
   - インシデントデータと運用フィードバックに基づいてリスク分類基準を洗練する
   - 進化する SLSA 要件と業界の脅威の状況との整合を確保する
   - サプライチェーンセキュリティのレジリエンスをテストするため、定期的にレッドチーム演習を実施する

## リスク管理メトリクスと成功基準

{{% alert title="Note" color="primary" %}}
以下のメトリクスは将来/北極星の指標を表します。これらは現在追跡されておらず、変更される可能性があります。
{{% /alert %}}

サプライチェーンリスク管理戦略の成功は、以下によって測定されます。

| メトリック | 可能な方法論 | 依存関係 |
| -- | -- | -- |
| すべてのコンポーネントとアーティファクトにわたるリスクアセスメントカバレッジの完全性 | 各コンポーネントについて行われた脅威モデルを追跡する。 | [GitLab パブリックアーティファクトのインベントリ](https://gitlab.com/gitlab-com/gl-security/product-security/security-architecture/general/-/issues/73) |
| サプライチェーンセキュリティインシデントと脆弱性の定量化可能な削減 | サプライチェーンに関連するインシデントと脆弱性を追跡するための新しいラベルを作成する。 | AppSec チーム |
| サプライチェーン脅威の検出と対応の平均時間の短縮 | PSRR のリスクには修正 Issue がリンクされているはずですが、検出 Issue もリンクされる必要があります。 | PSRR |
| 文書化されたリスク削減を伴う、より高い SLSA レベルの段階的達成 | 実装された [SLSA 要件](https://slsa.dev/spec/v1.1/requirements) を追跡する。 | SLSA Level 3 サポートのためのこの [Epic](https://gitlab.com/groups/gitlab-org/-/epics/15857)。 |
| 最小限の検出での外部セキュリティ監査の合格 | サプライチェーンに関連する検出をマッピングする。上記のカバレッジとループバックして、以前は不明だったリスクがログに記録されることを確認する。 | SecAssurance / AppSec |
| サプライチェーンリスクと依存関係の可視性と定量化の改善 | サプライチェーンの「行き止まり」(欠落情報) を追跡する。 | 各リスクが PSRR で正しくラベル付けされている、および [GitLab パブリックアーティファクトのインベントリ](https://gitlab.com/gitlab-com/gl-security/product-security/security-architecture/general/-/issues/73) |
| サプライチェーン内の重大および高リスクコンポーネントの数の削減 | 閾値以上のリスクスコアを持つコンポーネントの数。 | PSRR |
