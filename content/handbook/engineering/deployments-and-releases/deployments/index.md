---
title: "デプロイメント"
upstream_path: /handbook/engineering/deployments-and-releases/deployments/
upstream_sha: "7d467b8ae210e5b3bb843857cd3639cbc27af386"
translated_at: "2026-06-02T00:00:00Z"
translator: claude
stale: false
lastmod: "2026-06-02T14:47:42-06:00"
---

## 概要と用語

このページでは、GitLab.com へのアプリケーション変更のデプロイに関わる個々のステップを説明します。デプロイメントプロセスの遵守方法についてのガイダンスも記載されています。デプロイメントとリリースアプローチ全体の高レベルなビューについては、[デプロイメントとリリースのハンドブックページ](/handbook/engineering/deployments-and-releases/)をご覧ください。

### リリースマネージャーによる自動デプロイのツアー


{{< youtube "zdVzX5ZY7o4" >}}


### GitLab.com のデプロイメントプロセス {#gitlabcom-deployments-process}

GitLab.com は 1 日に複数回更新を受け取ります。

[release-tools](https://gitlab.com/gitlab-org/release-tools) プロジェクトの自動タスクがパッケージのビルドとデプロイを設定しています。

#### パッケージのビルド

- デプロイメント用の新しいブランチが月曜日から金曜日の間、毎時間作成されます。ブランチは CI テストを通過した（「グリーンビルド」の）最新コミットから作成されます。つまり、[`gitlab-org/gitlab`](https://gitlab.com/gitlab-org/gitlab) でスペックが失敗している場合、デプロイメントはそれ以上進めません。
- その後、最新コミットに新しいバージョンがタグ付けされ、新しいパッケージのビルドが開始されます。
- ブランチが作成される際、パッケージがタグ付けされる前に `~"Pick into auto-deploy"` ラベル付きのマージリクエストがブランチにチェリーピックされます（[重要なラベル](#labels-of-importance)を参照）。
  さらに、15 分ごとにタスクが実行され、`~"Pick into auto-deploy"` ラベル付きのマージリクエストが最新のデプロイメントブランチにチェリーピックされます。1 つ以上の MR がチェリーピックされた場合、新しいパッケージがタグ付けされます。

![GitLab.com デプロイメントプロセス](/images/engineering/deployments-and-releases/deployments/gitlab-com-auto-deploy-build-process.png)

- [ソース](https://docs.google.com/presentation/d/1YRjA1dYCXNXp06VltDYlik1MdFyzUvaeXKk69mMPcA4/edit?usp=sharing)

新しいコミットと成功した CI パイプラインがある場合、パッケージは（新しい自動デプロイブランチごとに）約 1 時間ごとに作成されます。

1. パッケージがタグ付けされ、ビルドプロセスが開始できます
1. 2a. タグから Omnibus パッケージがビルドされます。

   2b. 並行してクラウドネイティブ GitLab パッケージがビルドされます。

#### パッケージのデプロイ

- 15 分ごとに、自動タスクがビルド完了した最新パッケージを選択し、デプロイメントプロセスを開始します。

![GitLab.com デプロイメントプロセス](/images/engineering/deployments-and-releases/deployments/gitlab-com-deployment-pipeline.png)

- [ソース](https://docs.google.com/presentation/d/1YRjA1dYCXNXp06VltDYlik1MdFyzUvaeXKk69mMPcA4/edit?usp=sharing)

パッケージは GitLab.com に以下の手順でデプロイされます。

1. 定期的な間隔で、release-tools の自動タスクがビルド完了した最新の利用可能なパッケージを検索します。

   1a. ビルド済みパッケージが見つかると、それは自動的に gstg-cny（[staging.gitlab.com のカナリアステージ](/handbook/engineering/infrastructure-platforms/environments/#staging-canary)）にデプロイされます。

   1b. 並行して、同じパッケージが [Staging-ref 環境 gstg-ref](/handbook/engineering/infrastructure-platforms/environments/#staging-ref) にデプロイされます
1. 自動化された QA エンドツーエンド/統合テストが実行されます。gstg-cny を対象とするものと staging（gstg）を対象とする 2 セットのブロッキング QA テストが実行されます。これは、データベースなどのサービスを共有する複数のバージョンの GitLab コンポーネントがデプロイされた混在デプロイメント環境で発生する問題を露出させるために設計されています
1. テスト通過後、パッケージは自動的に gprd-cny（[gitlab.com のカナリアステージ](/handbook/engineering/infrastructure-platforms/environments/#production-canary)）にデプロイされます。これにより、特定のプロジェクト（`gitlab-org/gitlab` など）と少量のエンドユーザートラフィックが新しいパッケージを使用することになります
1. ステージングカナリアへのデプロイメントと同様に、2 セットの自動 QA エンドツーエンド/統合テストが実行されます。1 セットは本番カナリーステージを対象とし、もう 1 セットはメインステージを対象とします（新旧のコードがまだ機能していることを確認するため）。本番カナリー（gprd-cny）を対象とする `smoke` および `reliable` テストはブロッキングです
1. [gitlab.com のカナリアステージ](/handbook/engineering/infrastructure-platforms/environments/#production-canary)で 30 分経過し、新しい例外やアラートが報告されていない場合、パッケージは [gitlab.com](/handbook/engineering/infrastructure-platforms/environments/#production) および [staging.gitlab.com](/handbook/engineering/infrastructure-platforms/environments/#staging) へのデプロイメントの準備が完了したと見なされます
1. [gitlab.com](/handbook/engineering/infrastructure-platforms/environments/#production) および [staging.gitlab.com](/handbook/engineering/infrastructure-platforms/environments/#staging) へのプロモーションはリリースマネージャーによって手動でトリガーされます。`blocks deployments` ラベル付きの進行中のインシデントや変更リクエストにより、パッケージが gstg（ステージング）と gprd（本番）にデプロイされることが妨げられます。カナリー（gstg-cny と gprd-cny の両方）へのデプロイメントはブロックされません。マイグレーションはカナリーデプロイメント中に実行されるため、ブロックされません。ただし、デプロイ後マイグレーションはブロックされます
1. ステージング環境へのデプロイメント
1. 環境の健全性を評価するための本番チェックが実行されます。健全と判断された場合、パイプラインは自動的に継続します
1. 本番環境へのデプロイメントはステージングより遅延して実行されます
各デプロイメントは Slack チャンネル [#announcements](https://gitlab.slack.com/archives/C8PKBH3M5) に通知を送信します。
デプロイメントの一部として、[release/tasks](https://gitlab.com/gitlab-org/release/tasks/) Issue トラッカーに QA Issue が作成され、変更が環境を通過していることをプロセスに関与する人々に通知します

### デプロイ後マイグレーション（PDM）の実行

GitLab.com パッケージをロールバック可能にするために、[デプロイ後マイグレーション](https://docs.gitlab.com/ee/development/database/post_deployment_migrations.html)は GitLab.com デプロイメントプロセスから独立しています。これらのマイグレーションは、デプロイ後マイグレーション（PDM）パイプラインを通じてステージングと本番環境で実行されます。PDM はリリースマネージャーが標準的な運用手順の一部として手動で実行します。本番インシデントのリスクを最小化しつつ、最小限のオーガニックトラフィックを確保するために、リリースマネージャーは APAC 営業終了と EMEA 営業開始の間の移行期間（おおよそ UTC 06:00 から 09:00 の間）に PDM 実行をスケジュールします。

標準的なサイクルは毎日実行ですが、実際の PDM 実行は GitLab.com の可用性に依存しており、重要なリリース管理プロセスに対応するために延期される場合があります。

![デプロイ後マイグレーションパイプライン](/images/engineering/deployments-and-releases/deployments/post-deploy-migration-pipeline.png)

- [ソース](https://docs.google.com/presentation/d/1YRjA1dYCXNXp06VltDYlik1MdFyzUvaeXKk69mMPcA4/edit?usp=sharing)

リリースマネージャーがデプロイ後マイグレーションパイプラインを実行する際の手順:

1. ステージングでデプロイ後マイグレーションスクリプトが実行されます
1. ステージングに対して QA テストが実行されます
1. QA 検証が成功した後、本番でデプロイ後マイグレーションスクリプトが実行されます。

このパイプラインの詳細は[デプロイ後マイグレーションパイプラインのドキュメント](https://gitlab.com/gitlab-org/release/docs/-/tree/master/general/post_deploy_migration)にあります。

デプロイ後マイグレーションが実行されたかどうかを確認するには、[このガイド](https://gitlab.com/gitlab-org/release/docs/-/blob/master/general/post_deploy_migration/readme.md)をご覧ください。

### デプロイメントロールバック

ロールバックはインシデントを軽減するための迅速かつ安全な方法です。以前のパッケージにロールバックすることでインシデントの原因を取り除きますが、修正がマージされ、パッケージ化され、デプロイ準備が整うまで以降のすべてのデプロイメントがブロックされます。リリースプロセスへの潜在的な混乱があるため、ロールバックを実行する権限を持つのは[リリースマネージャー](/handbook/engineering/deployments-and-releases/#release-managers)のみです。

ロールバックを決定する前に考慮すべき要素:

1. ロールバックは利用可能ですか？[デプロイ後マイグレーション](/handbook/engineering/deployments-and-releases/deployments/#post-deploy-migration-pdm-execution)の最後の実行のパッケージにのみロールバックできます。適合性をテストするための [chatops コマンド](https://gitlab.com/gitlab-org/release/docs/-/blob/master/runbooks/rollback-a-deployment.md#1-gather-package-information)が利用可能です。
1. インシデントは機能フラグで緩和できますか？多くの新しい変更には機能フラグが含まれています。機能フラグを特定してオフにすることが通常最も速い緩和策です。
1. パッケージには数百の変更が含まれている可能性があり、ロールバックするとすべてが取り消され、特に月次リリース期限が近い場合は複数のチームに影響を与える可能性があることに注意してください。

ロールバックが引き起こす混乱のレベルのため、通常は S1 または S2 インシデントの場合にのみロールバックをオプションとして検討します。インシデント緩和オプションの評価に関するより詳細な情報は[インシデントランブック](https://gitlab.com/gitlab-org/release/docs/-/blob/master/runbooks/incident.md)にあります。

ロールバックを進めることを決定した場合、リリースマネージャーは[ロールバックランブック](https://gitlab.com/gitlab-org/release/docs/-/blob/master/runbooks/rollback-a-deployment.md#overview)に従ってください。

#### ロールバックパイプライン

ロールバックは本質的に以前にデプロイされたパッケージの新しいデプロイメントです。以前にデプロイされたパッケージとして既に安定していることがわかっているため、ロールアウト全体のテストに費やす時間を安全に削減できます。

Gitaly と Praefect は GitLab Rails バージョンへの依存関係があるため、デプロイの逆順でロールバックする必要があります。これを実現するために、単純にデプロイメントパイプラインを再実行するのではなく、別のロールバックパイプラインを使用します。

ステージング環境のロールバックパイプラインの例:

![ステージング環境のロールバックパイプラインの例](/images/engineering/deployments-and-releases/deployments/rollback-pipeline.png)

### デプロイメントブロッカー {#deployment-blockers}

#### インシデントによるデプロイメントのブロック

> **警告:** `blocks deployments` フラグがアクティブな場合、マイグレーション（デプロイ後マイグレーション以外）は引き続き実行されます。詳細は [`blocks deployments` フラグは何をするのか？](#what-does-the-blocks-deployments-flag-do)をご覧ください。

誰でも**本番へのデプロイメントを停止またはブロック**できます。方法は以下のとおりです。

1. [インシデントを宣言する](https://gitlab.com/gitlab-com/runbooks/docs/incident-io-onboard/incident-management.md#how-to-raise-an-incident)（[インシデント](/handbook/engineering/infrastructure-platforms/incident-management/#reporting-an-incident)として）:
   - **severity1** または **severity2** インシデントを宣言すると、デフォルトで **デプロイメントがブロック**されます。
   - **severity3** および **severity4** を宣言すると、*「Blocks Deployments」* はデフォルトで **「no」** になります。
   - **severity3 以下から severity2 以上**へ変更すると、手動で変更されていない限り、*「Blocks Deployments」* フラグが**設定**されます。
   - **severity2 未満**に重大度を下げると、手動で変更されていない限り、フラグが**解除**されてデプロイメントが許可されます。

2. インシデント Slack チャンネルから `/incident field` コマンドを実行して[カスタムフィールド](https://gitlab.com/gitlab-com/runbooks/docs/incident-io-onboard/oncall.md#on-call-alert-handling-process)を更新し、*Block Deployments* で **「Yes」** を選択します。

3. [#releases](https://gitlab.slack.com/archives/C0XM5UU6B) チャンネルでリリースマネージャーに通知します。

##### `blocks deployments` フラグは何をするのか？ {#what-does-the-blocks-deployments-flag-do}

`blocks deployments` フラグが設定されている場合:

- **カナリーデプロイメントは継続**: ステージングカナリー（gstg-cny）および本番カナリー（gprd-cny）へのデプロイメントはブロックされません
- **マイグレーションはブロックされません**: データベースマイグレーションはカナリーデプロイメントの一部として実行されます。マイグレーションをブロックしたい場合は、[リリースマネージャーに連絡](/handbook/engineering/deployments-and-releases/#how-to-contact-a-release-manager)してください
- **メイン環境へのプロモーションはブロック**: ステージング（gstg）と本番（gprd）へのプロモーションが防がれます
- **デプロイ後マイグレーションはブロック**: デプロイ後マイグレーションパイプラインがブロックされます

この設計により、メイン環境へのプロモーションにのみデプロイプレッシャーを生じさせながら、コード変更とマイグレーションの継続的な検証が確保されます。

#### 変更ロック期間中のデプロイメントのブロック

さらに、**すべての本番環境**（[カナリー]を含む）への自動デプロイメントは、変更ロック期間中に停止されます。現在、変更ロック期間は**毎週金曜日 23:00 UTC から月曜日 06:00 UTC の間**と、[スケジュールされた本番変更期間](/handbook/engineering/infrastructure-platforms/change-management/#production-change-lock-pcl)中です。

変更ロック期間中は、デプロイメントが **severity::1 の可用性またはセキュリティの Issue を修正する**場合、GitLab ChatOps を通じて手動デプロイメントをトリガーできます。

以下のイベントにより本番へのデプロイメントがブロックされます。

1. [`blocks deployment` ラベル付きのアクティブなインシデント](/handbook/engineering/infrastructure-platforms/incident-management/#labeling)
1. [`blocks deployment` ラベル付きの進行中の変更 Issue](/handbook/engineering/infrastructure-platforms/change-management/#change-criticalities)
1. [ステージングカナリー（gstg-cny）、ステージング（gstg）、本番カナリー（gprd-cny）、本番（gprd）を対象とするブロッキング（`smoke` および `reliable`）の自動エンドツーエンドテストの失敗](/handbook/engineering/testing/end-to-end-pipeline-monitoring/)

リリースマネージャーは [EOC](/handbook/engineering/infrastructure-platforms/incident-management/#incident-response-roles) からの意見を得て、ブロックを上書きしてデプロイメントを継続することを決定できます。

## 重要なラベル {#labels-of-importance}

### GitLab.com ピックラベル

通常のサイクルよりも高い優先度で GitLab.com にデプロイする必要があるコードには、`~"Pick into auto-deploy"` ラベルがあります。ブランチは 1 日を通じて定期的に作成されるため、スケジュールされたデプロイメントに含めるためにこのラベルは必要ありません。

新しい GitLab.com リリースを作成する自動化システムはこのラベルを特別に探しており、このラベルと severity::1/severity::2 の重大度ラベルが付いたマージリクエストは、アクティブな自動デプロイブランチに自動的にチェリーピックされます。マージリクエストがピックできない場合（ピックするファイルに競合がある場合など）、著者に現在のアクティブなリリースブランチを対象とする新しいマージリクエストを作成するよう求めるメッセージがマージリクエストに投稿されます。

このラベルは、マージリクエストが特に緊急な場合、以下の状況でのみ使用してください。例えば:

- severity::1/severity::2 インシデントを解決または緩和する
- severity::1/severity::2 の問題につながる可能性のあるリグレッションを解決する
- GitLab.com の安定性を改善できる緊急なパフォーマンスまたは可用性の修正

高重大度のバグが見つかった場合は、イベントと対応を追跡するために[インシデントを報告](/handbook/engineering/infrastructure-platforms/incident-management/#reporting-an-incident)してください。

このラベルがマージリクエストが後続のデプロイをブロックしているために追加された場合は、ステータスへの認知を高めるために [#releases](https://gitlab.slack.com/archives/C0XM5UU6B) Slack チャンネルにメモを残すことを検討してください。

**新機能や緊急でない修正**の場合、新しいリリースは数日または数時間後にあるため、このラベルは**使用しないでください**。

MR が GitLab.com にデプロイされているかどうかを確認する方法については [release/docs](https://gitlab.com/gitlab-org/release/docs/blob/master/general%2Fdeploy%2Fauto-deploy.md#auto-deploy-status) をご覧ください。

## よくある質問

### マージリクエストはいつデプロイされますか？

現在、[特定のタイムライン](/handbook/engineering/deployments-and-releases/deployments/#gitlabcom-deployments-process)で自動デプロイブランチを作成しています。現在の Mean Time To Production の時間と目標については、[インフラストラクチャパフォーマンス指標ページ](/handbook/engineering/infrastructure/performance-indicators/#mean-time-to-production-mttp)で確認できます。

[ピックラベル付き](/handbook/engineering/deployments-and-releases/deployments/#gitlabcom-pick-label)のマージリクエストの場合、プロセスは異なります。

### マージリクエストが現在どの環境にあるかを確認するにはどうすればよいですか？

[release tools](https://gitlab.com/gitlab-org/release-tools/) は MR の `workflow::` ラベルを使用して、マージリクエストが[デプロイメントプロセス](#gitlabcom-deployments-process)のどのステージにあるかを示します。例えば、マージリクエストに `workflow::production` ラベルがあれば、本番環境にデプロイされたことを示します。

詳細については[このガイド](https://gitlab.com/gitlab-org/release/docs/-/blob/master/general/deploy/auto-deploy.md#status-of-a-merged-mr-or-a-commit)をご覧ください。

### リグレッションが見つかりました。次は何をすればよいですか？

高い[重大度](/handbook/product-development/how-we-work/issue-triage/#severity)の可能性があるリグレッションが見つかった場合は、すぐに[デプロイメントブロッカー](/handbook/engineering/deployments-and-releases/deployments/#deployment-blockers)の手順に従ってデプロイメントを停止してください。

[月次リリース](/handbook/engineering/releases/)前の高重大度のバグについては、[#releases](https://gitlab.slack.com/archives/C0XM5UU6B) でリリースマネージャーにも通知してください。

### デプロイ後マイグレーションの問題が見つかりました。次は何をすればよいですか？

デプロイ後マイグレーションが GitLab.com で実行されないようにするには、すぐに[デプロイメントブロッカー](#deployment-blockers)の手順に従い、リリースマネージャーに通知してください。月次リリースに含まれないように、デプロイ後マイグレーションを元に戻す作業を進めてください。

## リソース

| 説明                     | 場所                |
|--------------------|---------------------|
| デプロイメントオーケストレーション | [リンク](https://gitlab.com/gitlab-org/release-tools/) |
| デプロイメントドキュメント | [リンク](https://gitlab.com/gitlab-org/release/docs) |
| リリース関連タスクの Issue トラッカー | [リンク](https://gitlab.com/gitlab-org/release/tasks/) |
| デリバリーグループの Issue トラッカー | [リンク](https://gitlab.com/gitlab-com/gl-infra/delivery/issues) |
| リリースマネージャースケジュール | [リンク](/handbook/engineering/releases/release-managers/) |
| メンテナンスポリシー | [リンク](https://docs.gitlab.com/ee/policy/maintenance.html) |
