---
title: Tenant Scale グループ
description: Tenant Scale グループへのサポート依頼
upstream_path: /handbook/engineering/infrastructure-platforms/tenant-scale/request-for-help/
upstream_sha: 0e6f01390a34aeb6706ace17d8d3c50e74e82d0d
translated_at: "2026-04-29T04:54:37Z"
translator: claude
stale: false
---

## Group Tenant Scale（GTS）チームからのサポートの受け方

Group Tenant Scale（GTS）組織は、GitLab のマルチテナントプラットフォームの実行可能性を確保するというミッションを持つ複数の専門チームで構成されています。このセクションでは、カスタマーサポート Issue や技術的な支援について GTS チームにサポートを依頼する際のプロセスと期待値を説明します。

### 私たちのチーム

GTS には以下のチームが含まれており、それぞれ独自の専門領域があります:

- **Geo とディザスタリカバリ** - [データの冗長性とディザスタリカバリソリューション](geo/)
- **Cells** - [水平スケーリングとテナント分離](cells-infrastructure/)
- **Organizations** - [Cells とグループ・プロジェクトをサポートするための Organization エンティティ開発](organizations/)

### サポートを依頼する前に

サポートリクエストを提出する前に、以下を行ってください:

1. **関連ドキュメントを確認する** - 特定のチームのドキュメント、ハンドブックページ、および関連する GitLab ドキュメントを確認する
2. **以前の Issue を検索する** - 関連するチームのプロジェクトで既存のカスタマー Issue を調べる
3. **チーム固有のチャンネルを確認する** - 簡単な質問については、まず適切なチームの Slack チャンネルに連絡する:
   - Geo: 一般的な質問やドキュメントの確認は `#spt_pod_geo`、それ以外は `#g_geo`。
   - Cells: `#g_cells_infrastructure`
   - Organizations: `#g_organizations`

### 素早いサポートを得る

#### 一般的な質問

ドキュメントで答えが見つからない一般的な質問がある場合は、関連するチームの Slack チャンネルで気軽に質問してください。エンジニアは質問に素早く答えるよう努めますが、調査が必要なより複雑なシナリオについてはサポート Issue を作成する必要があります。

#### サポート Issue を作成するタイミング

次の場合にサポート Issue を作成してください:

- Slack での議論でさらなる調査が必要であることが示された場合
- 質問がお客様固有のシナリオに関わる場合
- Slack の保存期間を超えてドキュメントやコンテキストを保持する必要がある場合
- Issue がチームメンバー間の調整を必要とする場合
- 優先度の割り当てと追跡が必要な場合

### サポートリクエストの作成

[Request For Help リポジトリ](https://gitlab.com/gitlab-com/request-for-help)で各チームのテンプレートを使用して Issue を作成してください。

- Geo: [Geo](https://gitlab.com/gitlab-com/request-for-help/-/issues/new?issuable_template=SupportRequestTemplate-Geo)、[GEO マイグレーション](https://gitlab.com/gitlab-com/request-for-help/-/issues/new?issuable_template=SupportRequestTemplate-GeoDedicatedMigrations)、[コラボレーション](https://gitlab.com/gitlab-com/request-for-help/-/issues/new?issuable_template=SupportRequestTemplate-Collaboration)
- Cells - 作成予定
- [Organizations](https://gitlab.com/gitlab-com/request-for-help/-/issues/new?issuable_template=SupportRequestTemplate-Organizations)

#### サポートリクエスト（RFH）の要件

- RFH は、カスタマーエスカレーションが発生した場合に複数の組織間での整合を図るために、通常、サポートチケットが存在した後にサポートエンジニアがオープンする必要があります。サポートエンジニアは通常、緊急事態/エスカレーションへの最初の対応者となり、すべてのステークホルダーが利用可能なコンテキストに整合していることを確認します。
- 関連するすべてのコンテキストと以前のトラブルシューティング手順を含めてください
- 2 週間更新がない Issue はチームによって自動クローズされます

### 優先度レベルと対応時間

リクエストに優先度ラベルを割り当てることができます。チームメンバーはトリアージ中に優先度をレビューして調整します。
対応時間については各チームのページを参照してください。

### 緊急 Issue のエスカレーション

即座の対応を必要とする障害やその他の緊急事態については:

- GitLab の[インシデント管理](../incident-management/)プロセスを使用する
- 組織にエスカレーション手順が確立されている場合は、オンコールエンジニアに連絡する
- P1 の緊急事態の場合は、正式な Issue を作成しながら、チームの Slack チャンネルで直接連絡することもできます

### チーム固有のリソース

各チームは独自の追加リソースとプロセスを維持しています:

- **Geo チーム**: Geo 固有の詳細なガイダンスについては [Geo サポートプロセス](geo/#how-to-ask-for-support-from-geo)を参照
- **Cells と Organizations**: Cells 固有の情報については [Cells 設計ドキュメント](/handbook/engineering/architecture/design-documents/cells/)と [Organizations 設計ドキュメント](/handbook/engineering/architecture/design-documents/organization/)を確認
- **Organizations チーム**: Organization 固有のガイダンスについては [Organizations プロセスページ](organizations/process/#engineering-customersupport-rotation-process)を参照

### ベストプラクティス

- **具体的に**: 正確なエラーメッセージ、再現手順、および環境の詳細を含める
- **まずドキュメントを確認する**: チームは包括的なドキュメントを維持しています。サポートを依頼する前にレビューしてください
- **コンテキストを提供する**: 何が機能していないかだけでなく、達成しようとしていることを説明する
- **明確なタイトルを使用する**: Issue のタイトルを説明的で実行可能なものにする
- **適切にフォローアップする**: Issue が前進し続けるように、チームメンバーからの質問に迅速に回答する

このプロセスは、ワークロードを効果的に管理しながら可能な限り最高のサポートを提供するのに役立ちます。これらのガイドラインに従っていただきありがとうございます！
