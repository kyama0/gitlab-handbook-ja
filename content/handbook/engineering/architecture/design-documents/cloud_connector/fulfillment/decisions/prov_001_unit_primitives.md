---
title: "Cloud Connector ADR PROV-001: ユニットプリミティブ設定の一元化"
owning-stage: "~devops::fulfillment"
toc_hide: true
upstream_path: /handbook/engineering/architecture/design-documents/cloud_connector/fulfillment/decisions/prov_001_unit_primitives/
upstream_sha: 0ee1352c26e468fa8032143d735391a793de7086
translated_at: "2026-04-27T03:34:38Z"
translator: claude
stale: false
lastmod: "2025-09-11T14:55:05+01:00"
---

## コンテキスト

### 現在のユニットプリミティブ設定の問題

#### サービス抽象化

サービス抽象化は、クライアントの権限チェックを簡素化し、権限ロジックを一元化するために導入されました。機能を「サービス」中心に整理することで、クライアントはユニットプリミティブや設定を理解することなく、ユーザーが特定のインターフェース（例えば GitLab Duo Chat ウィンドウを開く）にアクセスできるかどうかを判断できました。

##### 解決された問題

###### UI 要素の権限チェック

- **問題:** クライアントは、基礎となる機能だけでなく、ユーザーが UI 要素にアクセスできるかどうかを確認する必要がありました。
- **解決策:** サービス抽象化により、クライアントはユニットプリミティブを調べることなく `duo_chat` や `code_suggestions` などのサービスに基づいて権限チェックを実行できるようになりました。

###### 内部変更からのクライアントの保護

- **問題:** ユニットプリミティブの分割や廃止などの内部バックエンドの変更が、クライアントの機能を妨げる可能性がありました。
- **解決策:** サービス抽象化によりこれらの内部変更がクライアントから隠され、そのような変更がクライアントに提示されるインターフェースに影響しないようになりました。

##### 現在の問題

初期の利点にもかかわらず、サービス抽象化は現在いくつかの課題をもたらしています。

- **責任の混在:**
  - 現在のインターフェースは、UI 関連のエンドユーザー権限チェックと CloudConnector のドメイン責務（インスタンスレベルのアクセス制御）を混在させています。
- **サービスレベルに限定された設定可能な制限:**
  - すべての設定可能な制限（カットオフ日、GitLab の最低バージョン、ユニットプリミティブがアドオンまたはライセンスとどのようにバンドルされるかなど）は、ユニットプリミティブレベルではなくサービスレベルでのみ定義されています。
    - これにより、機能の可用性とパッケージングの詳細な制御ができなくなります。
    - 同じユニットプリミティブを含むサービスが異なるカットオフ日やバンドルされたアドオンで設定される可能性があります。
    - **例:** `documentation_search` は [`duo_chat`](https://gitlab.com/gitlab-org/gitlab/-/blob/v17.5.0-ee/ee/config/cloud_connector/access_data.yml?ref_type=tags#L36) と [`anthropic_proxy`](https://gitlab.com/gitlab-org/gitlab/-/blob/v17.5.0-ee/ee/config/cloud_connector/access_data.yml?ref_type=tags#L95) の両方のサービスに含まれていますが、異なる設定になっています。
- **回避策:**
  - 特定のユースケースに対して特別な処理が必要となり、システムの複雑さが増しています。
    - **例:** [`anthropic_proxy`](https://gitlab.com/gitlab-org/gitlab/-/blob/v17.5.0-ee/ee/config/cloud_connector/access_data.yml?ref_type=tags#L104-120) と [`self_hosted_models`](https://gitlab.com/gitlab-org/gitlab/-/blob/v17.5.0-ee/ee/config/cloud_connector/access_data.yml?ref_type=tags#L151-168) サービス。
- **冗長性:**
  - ほとんどのユニットプリミティブはインターフェース要素（ボタンや API 呼び出しなど）に 1:1 でマッピングされているため、多くのサービス定義は同じ名前の単一のユニットプリミティブのみを定義しています。
    - これにより設定ファイルに冗長性とノイズが生じます。
    - **例:** [`summarize_comments`](https://gitlab.com/gitlab-org/gitlab/-/blob/v17.5.0-ee/ee/config/cloud_connector/access_data.yml?ref_type=tags#L176-182)

#### 設定管理の課題

現在、ユニットプリミティブの設定を更新するには複数の箇所での手動変更が必要です：

- **GitLab rails**: [config/access_data.yml](https://gitlab.com/gitlab-org/gitlab/-/blob/v17.5.0-ee/ee/config/cloud_connector/access_data.yml) の設定と権限チェックを更新。
- **CustomersDot**: [config/cloud_connector.yml](https://gitlab.com/gitlab-org/customers-gitlab-com/-/blob/main/config/cloud_connector.yml) の設定を更新。
- **AI gateway と Duo workflows**: ユニットプリミティブの[マッピング](https://gitlab.com/gitlab-org/modelops/applied-ml/code-suggestions/ai-assist/-/blob/main/ai_gateway/cloud_connector/gitlab_features.py#L94)とアクセス制御ロジックを変更。

##### 現在の問題

- **単一の信頼できる情報源（SSoT）がない:**
  - 設定が複数のリポジトリとサービスに散在しており、一貫性の欠如と管理の困難さにつながっています。複数のリポジトリにまたがる複数のマージリクエストが複雑さと摩擦を増しています。

## 決定事項

単一の信頼できる情報源（SSoT）として機能する外部ライブラリ（[gitlab-cloud-connector](https://gitlab.com/gitlab-org/cloud-connector/gitlab-cloud-connector)）に設定を抽出することで、新しいユニットプリミティブベースの設定システムを実装します。このライブラリは Ruby gem と Python パッケージの両方として提供されます。

### 設定構造

```shell
config
├─ unit_primitives/
│  ├─ duo_chat.yml
│  └─ ...
├─ backend_services/
│  ├─ ai_gateway.yml
│  └─ ...
├─ add_ons/
│  ├─ duo_pro.yml
│  └─ ...
└─ license_types/
   ├─ premium.yml
   └─ ...
```

#### ユニットプリミティブ

ユニットプリミティブごとに 1 つの `.yml` ファイルがあります。この `unit_primitive` がアドオンおよびライセンスタイプとどのようにバンドルされるか、その他の有用なメタデータを含みます。

```yaml
# config/unit_primitives/duo_chat.yml
---
name: duo_chat
description: Ask various GitLab-related questions and tasks.
cut_off_date: 2024-10-17T00:00:00+00:00
min_gitlab_version_for_free_access: '16.8'
min_gitlab_version: '16.9'
group: group::duo_chat
feature_category: duo_chat
documentation_url: https://docs.gitlab.com/ee/user/gitlab_duo_chat/
backend_services:
    - ai_gateway
add_ons:
    - duo_pro
    - duo_enterprise
license_types: # ユニットプリミティブが利用可能なライセンスタイプのリスト
  - premium
  - ultimate
```

サポートされている属性の完全なリストは [unit_primitive_schema.json](https://gitlab.com/gitlab-org/cloud-connector/gitlab-cloud-connector/-/blob/main/config/schemas/unit_primitive_schema.json) を参照してください。

#### バックエンドサービス

ユニットプリミティブがホストされているバックエンドサービスの定義を表します。`project_url` やプロジェクトを担当するグループなどの有用なメタデータが含まれています。JWT トークン発行時に使用される `audience` ヘッダーも含まれます。

```yaml
# config/backend_services/ai_gateway.yml
---
name: ai_gateway
project_url: https://gitlab.com/gitlab-org/modelops/applied-ml/code-suggestions/ai-assist
group: group::ai framework
jwt_aud: gitlab-ai-gateway
```

#### アドオンとライセンスタイプ

同様に、それぞれの YAML ファイルで定義され、必要なメタデータを提供します。

### ユニットプリミティブの追加/変更の期待されるプロセス

#### 変更の実施

- **単一の更新ポイント:** 開発者は `gitlab-cloud-connector` リポジトリ内の YAML ファイルを編集することでユニットプリミティブの定義を変更します。
  - **CLI ツール:** ユニットプリミティブの追加、更新、削除のためのコマンドラインツールを実装して、このステップを簡略化してエラーを減らすべきです。
  - **例:** 新しいユニットプリミティブ `code_review` を追加するには、必要な設定を含む `config/unit_primitives/code_review.yml` を作成します。

#### デプロイプロセス

- **自動リリースパイプライン:**
  - **検証:** CI/CD パイプラインで JSON スキーマ検証を使用して変更を検証します。
  - **テスト:** 自動テストで一貫性と正確性を確保します。
  - **公開:** 検証とテストが成功した後、Ruby gem と Python パッケージの新バージョンを RubyGems と PyPI に公開します。

- **バージョニング:** ライブラリはセマンティックバージョニングに従います。ダウンストリームアプリケーションは新バージョンを使用するように更新されます。

#### ダウンストリームアプリケーションの更新

- **GitLab Rails、CustomersDot 等:**
  1. **依存関係の更新:** `Gemfile` 内の `gitlab-cloud-connector` gem バージョンを更新する。
  2. **マージリクエスト:** 依存関係の更新と必要なコード変更を含む MR を提出する。
  3. **デプロイ:** 標準の GitLab デプロイプロセスに従って変更をデプロイする。

### UI 権限の仕組み

- **一元化された権限チェック:**
  - クライアントは最も基本的なユニットプリミティブへのアクセスをチェックして UI 要素の可用性を判断できます。基本的なユニットプリミティブの知識があれば、クライアントは基礎となるすべてのユニットプリミティブや設定を理解することなく、ユーザーが UI 要素にアクセスできるかどうかをチェックする柔軟性を持てます。
  - ライセンスタイプ、アドオンの購入、ユーザーシートの割り当てを考慮した実際の権限ロジックは、取得したユニットプリミティブ設定に基づいて別のレイヤーで実装できます。

### 後方互換性

- **サーバーサイドマッピング:** レガシーサービスへのユニットプリミティブからのマッピングを実装して互換性を維持する。
- **廃止されたユニットプリミティブのサポート:** 適切な廃止通知とともに廃止されたユニットプリミティブを引き続きサポートする。
- **GraphQL スキーマの更新:**
  - GraphQL の [CloudConnectorAccessType](https://gitlab.com/gitlab-org/customers-gitlab-com/-/blob/main/app/graphql/types/gitlab/cloud_connector_access_type.rb#L14) を更新して `availableServices` と `availableUnitPrimitives` の両方を含め、すべてのクライアントが移行するまで `availableServices` を廃止予定としながら利用可能にする。
  - 古いユニットプリミティブを削除するのではなく YAML ファイルで廃止予定としてマークし、廃止メッセージとスケジュールを提供する。

### 設定を読み取るための API

- **言語非依存ライブラリ:** `gitlab-cloud-connector` ライブラリは Ruby と Python の両方で利用可能です。
- **後方互換性:** 古いシステム向けに新しい YAML 形式をレガシーサービス形式に変換するアダプターを提供します。
- **権限に依存しない:** ライブラリは設定情報の提供に注力し、権限チェックはアプリケーションロジックに委ねます。

### ツールと検証

- **CLI ツール:** ユニットプリミティブの追加、更新、削除のためのコマンドラインツールを提供します。
- **スキーマ検証:** CI/CD パイプラインで JSON スキーマ検証を使用して設定の正確性を確保します。
- **自動テスト:** 変更を検証するための包括的なテストスイートを実装します。
- **自動リリースプロセス:** リリースと公開プロセスを合理化して遅延を最小化します。

## 影響

### ポジティブ

- **単一の信頼できる情報源:** 一元化された設定によりメンテナンスが簡素化され、すべてのシステム間で一貫したアクセスが確保されます。
- **モジュール化とスケーラビリティ:** モジュール式 YAML ファイルにより、ステージグループが新しいユニットプリミティブを簡単に追加でき、「一度修正して、どこでも適用」アプローチでメンテナンス範囲を削減します。
- **関心の分離:** UI 機能とバックエンドアクセス制御を適切に分離し、関心を明確で管理しやすい状態に保ちます。
- **一元化されたオーナーシップと設定:** 設定の管理とオーナーシップが一元化され、更新が効率化されて潜在的な不整合が削減されます。

### ネガティブ

- **リリース依存:** 変更には新しいライブラリのリリースが必要で、リリースサイクルへの依存が生じます。
  - **緩和策:** 合理化されたリリースプロセスを確立し、遅延を最小化するために自動化を使用します。
- **コードの可視性の低下:** コードがより広いチームに見えにくくなり、協調的なインプットが減少する可能性があります。
  - **緩和策:** ドキュメントを強化し、内部コミュニケーションチャンネルを使用してチームに変更について知らせます。
- **セキュリティアップデートの課題:** 複数のリポジトリ間でセキュリティアップデートの管理がより複雑になる可能性があります。
  - **緩和策:** 定期的な自動セキュリティスキャンを実装し、リポジトリ間で更新を同期します。
- **初期セットアップのオーバーヘッド:** 別のリポジトリのセットアップとメンテナンスには初期のオーバーヘッドが生じます。
  - **緩和策:** オンボーディングとメンテナンスを簡素化するための包括的なセットアップドキュメントとツールに投資します。

## 次のステップ

### コアライブラリ開発

- 新しい YAML 設定構造を持つ `gitlab-cloud-connector` ライブラリを作成する。
- 設定パーサーとバリデーターを実装する。
- 新しい YAML 形式をレガシーサービス形式に変換するアダプターを構築する。
- 基本的なテストスイートと CI/CD パイプラインを追加する。
- ユニットプリミティブの追加、更新、削除のための設定管理 CLI を作成する。

### 移行パス

- すべての GitLab Rails と CustomersDot インスタンスを新しいライブラリ（SSoT）を使用するように更新する。
- レガシー出力を維持しながら新しい YAML 形式をプライマリソースに切り替える。
- クライアントを段階的に新しい YAML 形式と API に移行し、レガシーの `AvailableServices` を廃止する。
- 古い GitLab バージョンとの後方互換性を維持する。
- `services`（データプラットフォームと Tableau ダッシュボードでは `features` にリネーム）を `feature_category` などのより細粒度の属性に置き換えることで、影響を受ける分析データモデルの継続性を確保する（詳細は Issue [#502457](https://gitlab.com/gitlab-org/gitlab/-/issues/502457) 参照）。

### ドキュメント

- ユニットプリミティブ管理のガイドを作成する。

### クライアントの更新

- 権限チェックメカニズムを更新する。
- 後方互換性のために古い形式と新しい形式の両方をサポートする。

## 有用なリンク

- [CloudConnector ユニットプリミティブの設定と API に関する決定](https://gitlab.com/gitlab-org/gitlab/-/issues/502821)
- [CloudConnector `unit_primitive` 設定とロジックの抽出](https://gitlab.com/groups/gitlab-org/-/epics/14310)

この決定は双方向のドアを維持しており、必要に応じて将来の変更が可能です。このソリューションの実装に注力し、さらなる改善を検討する前に追加の機能とバックエンドを統合します。
