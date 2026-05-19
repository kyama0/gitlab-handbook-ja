---
title: "GitLab シークレット検出 ADR 006: すべてのGitLab環境への統合SDサポート"
upstream_path: /handbook/engineering/architecture/design-documents/secret_detection/decisions/006_support_for_all_environments/
upstream_sha: 86cfa2bd7d73df5a673fe5ebd33b028d0f540434
translated_at: "2026-04-27T18:56:37Z"
translator: claude
stale: false
lastmod: "2025-10-14T17:59:32+00:00"
---

## 背景

GitLab.com、自己管理（エアギャップ環境を含む）、Dedicated環境にわたって、シークレット検出機能をスケーラブルかつ一貫してアクセスできるようにする措置を講じる必要があります。

高価な設計変更を避けるために、できれば同時に対処すべき2つの問題があります。

1. スタンドアロンシークレット検出サービス（Runwayを通じてデプロイ）は現在、GitLab Dedicated および自己管理（SM）環境からアクセスできません（Runwayがそれらの環境での[サポートをまだ提供していない](https://docs.runway.gitlab.com/reference/blueprints/runway-satellite-services-vision/)ため）。[GitLab Cloud Connector](https://docs.gitlab.com/development/cloud_connector/)は一時的に[検討されました](https://gitlab.com/gitlab-org/gitlab/-/work_items/525472)が、[一定の制限](https://gitlab.com/gitlab-org/gitlab/-/work_items/525472#note_2418504073)のために却下されました。

2. Rails がシークレットスキャンエンジン（Gem/シークレット検出サービス（SDS））を直接呼び出す現在の設計は、ブロッキングスキャンリクエストのみをサポートしています。しかし、ジョブアーティファクトやジョブログなどの大きなオブジェクトに対してブロッキングスキャンを実行することは、スキャンエンジンのスループットに影響するためスケーラブルではありません。[セキュリティレポートを生成して取り込む](https://docs.gitlab.com/development/sec/security_report_ingestion_overview/#vulnerability-creation-from-security-reports)方法と同様に、スキャンをバックグラウンドで実行し最終的に結果を提供する非ブロッキングアプローチが必要です。

## 提案

上記の問題に対して複数の提案が[議論](https://gitlab.com/gitlab-org/gitlab/-/work_items/525472#note_2418504073)されており、このADRは関連する提案を考慮した複合的なアプローチを草案としてまとめています。

提案は、自己管理（オフライン含む）とDedicated環境に対して組み込みSDモジュール（Gem/Binary）内でSDスキャンを実行することで最初の問題に対処することを示唆しています。これはシングルテナント環境のトラフィックを処理するのに十分なデフォルト設定です。代替案として、組み込みSDモジュールのスループットがニーズを満たさない場合に、顧客がインフラ内でシークレット検出サービスをセルフホストできるようにします。セルフホストサービスのURLが提供された場合、組み込みSDモジュールよりも優先してそのサービスを呼び出します。

2番目の問題は、既存のSidekiqインフラを使用してシークレット検出スキャンを非同期に呼び出す方法を導入することで対処されます。

### サポートマトリクス

GitLab.comには引き続きSDSを使用し、自己管理とDedicatedの顧客にはデフォルト設定として組み込みアプローチ（Gem/Binary）を使用します。ただし、組み込みアプローチがユースケースに対してスケーラブルでない場合は、顧客がSDSをセルフホストできるようにします。

非ブロッキングSDスキャンをバックグラウンドで実行するために、既存のバックグラウンド処理ツール（Sidekiq）を活用します。スキャンエンジンはブロッキングアプローチと同じものを使用します。

| 環境 | ブロッキングスキャンリクエスト | 非ブロッキングスキャンリクエスト |
|------|------------------------|---------------------------|
| GitLab.com | Runwayホスト型SDS | Sidekiq + Runwayホスト型 |
| 自己管理/Dedicated（デフォルト） | 組み込み（Gem/Binary） | Sidekiq + 組み込み |
| 自己管理/Dedicated（カスタム） | セルフホスト型SDS | Sidekiq + セルフホスト型SDS |

### セルフホストサービスの提供

これは2つの方法で実現できます:

1. SDSのDockerイメージを顧客と共有する。顧客が自分のインフラにセルフデプロイし、デプロイされたSDSのホストURLをGitLabアプリケーション設定で更新できるようにする。URLが定義されている場合、組み込みSDモジュールよりもそのホストURLへの呼び出しを試みます。[Secret Revocation ServiceはこのアプローチOに従っています](https://gitlab.com/gitlab-org/gitlab/-/blob/a19707e9f4e137ef897a8ddb4361fa2894917f80/doc/user/application_security/secret_detection/post_processing.md#configure-gitlab-to-interface-with-revocationapi)。

2. SDSをデプロイするためのHelmチャートを共有する。これにより顧客のサービス管理の運用負担が軽減されます。ただし、このアプローチはKubernetesでインフラを運用している顧客にのみ適しています。

最初のアプローチは開始するのに十分シンプルであり、顧客側からの要望があれば最終的にそのようなHelmチャートを提供することもできます。

### サービス認証と承認

サービスへのリクエストの真正性を確保するために（主にセルフホストに適用可能）、[Cloud Connector](https://docs.gitlab.com/development/cloud_connector/)からAuth フレームワークを採用できます。

_注意: この決定はまだ実現可能性の観点から評価が必要です。_
