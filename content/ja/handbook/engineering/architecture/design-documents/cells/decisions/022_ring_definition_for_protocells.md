---
owning-stage: "~group::release-and-deploy"
title: "Cells ADR 022: Protocell のリング定義"
toc_hide: true
upstream_path: /handbook/engineering/architecture/design-documents/cells/decisions/022_ring_definition_for_protocells/
upstream_sha: b4eeb07f0d5f46e2fc5f8572be1a2547261aed89
translated_at: "2026-04-26T00:00:00Z"
translator: claude
stale: false
---

## コンテキスト

[Protocell](https://gitlab.com/groups/gitlab-com/gl-infra/-/epics/1616) 向けのリングの定義と、それらへのデプロイのオーナーシップの責任は、[セルラーアーキテクチャによるアプリケーションデプロイ](../infrastructure/deployments/#ring-deployment)での議論以降変わってきています。この ADR は、[Protocells](https://gitlab.com/groups/gitlab-com/gl-infra/-/epics/1616) 向けに存在するリング、最初の数コホートのユーザーが入る Cell を収容するリング、および Protocells への自動デプロイのオーナーシップ境界を明確にするための試みです[^1]。

## 決定事項

1. Ring 0 には QA Cell のみが含まれます
1. Ring 1 には、最初の数コホートのユーザーのデータをインポートする 1 つ（または複数）の Cell が含まれます
1. 変更は `gprd-cny` へのデプロイの前に Ring 0 にデプロイされます
1. 変更は `gprd` と並行して Ring 1 にデプロイされます
1. Ring 0 での QA ジョブの成功が、Ring 1 へのパッケージデプロイの前提条件となります
1. [リリースマネージャー](../../../../deployments-and-releases/_index.md#release-managers)は、[自動デプロイプロセス](https://gitlab.com/gitlab-org/release/docs/-/blob/master/general/deploy/auto-deploy.md)の一環として、GitLab および関連コードベースの変更を Ring 0 と Ring 1 に継続的にデプロイする責任を負います。具体的には、テナントモデルフィールドの `prerelease_version` と `gitlab_custom_helm_chart.version` の変更が含まれます
1. Ring 内でのデプロイや QA の失敗は、レガシー Cell 内のどのステージへのデプロイもブロックしません
1. Ring 1 のいずれかのリングでデプロイや QA が失敗した場合、Ring 1 はレガシー Cell より数バージョン遅れる可能性があります。この場合、リリースマネージャーは Ring 1 が追いつくまでレガシー Cell へのデプロイを一時停止することを選択できます

### スコープ外

1. デプロイのロールバック機能
1. デプロイ後の移行と設定変更の分離。初期ロールアウト前にこれに取り組む予定ですが、未解決の事項があるため、この機能への依存関係は導入しません。
1. Ring 2 以降。Protocells の初期ロールアウト中は Ring 2 を作成する予定はありません
1. QA ジョブの設計と実装。QA の実装については[こちらの Issue](https://gitlab.com/gitlab-com/gl-infra/delivery/-/issues/21521#note_2740966366)で個別に議論中です。その議論の結果は後の ADR で文書化される可能性があります。
1. 設定変更（Instrumentor バージョンのアップグレードやテナントモデル内の他のフィールドの変更など）の責任についても後の時点で議論される予定です

## 結果と影響

[Protocells](https://gitlab.com/groups/gitlab-com/gl-infra/-/epics/1616) は初期ロールアウト中、および当面の間、レガシー Cell と共存します。そのため、デプロイを調整するために引き続き自動デプロイのデプロイメントパイプラインを使用します。

### デプロイメントパイプラインの概略図

前のセクションで行われた決定を取り込んだ以下の提案パイプラインは、[元のデプロイメントブループリント](../infrastructure/deployments/#ring-deployment)の[レガシーインフラストラクチャと Cells の共存](../infrastructure/deployments/#co-existence-of-the-legacy-infrastructure-and-cells)セクションで提案されたものとほぼ同じです。一部の細かな変更があります。

``` mermaid
flowchart TD
    Timer[自動デプロイスケジュール] --> Build[パッケージのビルド]

    Build --> Legacy
    Build --> R0

    subgraph Legacy[レガシーデプロイ]
        gstg-cny --> gprd-cny
        gprd-cny --> AwaitingPromotion[プロモーション待ち]
        AwaitingPromotion --> ManualPromotion[RM がパッケージをプロモート]
        ManualPromotion --> gstg
        ManualPromotion --> Delay[30分の遅延]
        Delay --> gprd --> LegacySuccess[完了 - レガシー Cell]
    end

    subgraph Protocells[Protocell デプロイ]
        subgraph R1[Ring 1 - ユーザー Cell]
            direction TB
            VersionDrift[バージョンドリフトを記録] --> Threshold{バージョンドリフトが<br>しきい値を超えたか？} --> AlertRMs[Ring 1 と gprd のバージョンドリフトを RM にアラート] --> RMDecision[RM がレガシー Cell へのデプロイを一時停止することを選択可能]
            R1Deploy[Ring 1 にデプロイ] -->|デプロイ成功| CellsSuccess[完了 - Cells]
            R1Deploy -->|デプロイ失敗| VersionDrift
        end

        subgraph R0[Ring 0 - QA Cell]
            direction TB
            R0QA -->|QA 失敗| RMInvestigation[RM が失敗原因を調査]
            R0QA -->|QA 成功| R0QASuccessRecord[Ring 0 でのパッケージの<br>QA 成功を記録]
            R0Deploy -->|デプロイ失敗| RMInvestigation
            R0Deploy[Ring 0 にデプロイ] -->|デプロイ成功| R0QA[Ring 0 での QA]
        end
    end

    Delay --> CellsPromotionDecision{Ring 0 でこのパッケージの<br>QA は成功したか？} --> |はい| R1Deploy
    CellsPromotionDecision -->|いいえ| VersionDrift[バージョンドリフトを記録]

```

### `gprd` と Ring 1 間のバージョンドリフト

`gprd` と Ring 1 は両方とも、ユーザートラフィックを提供するため GitLab.com の「本番環境」です。しかし、Ring 1 へのパッケージのデプロイ失敗は `gprd` へのデプロイを自動的にブロックしません。

これは、Protocells でのデプロイと QA の信頼性についてまだ自信が持てないためです。そのため、`gprd` と Ring 1 の間に一方向のバージョンドリフトが生じる可能性があるという結果を受け入れます：Ring 1 は `gprd` より数バージョン遅れる可能性があります。

このバージョンドリフトはメトリクスで監視し、このメトリクスがしきい値を超えるとリリースマネージャーにアラートを送ることで対処します。Ring 1 が追いつくために `gprd` へのデプロイを一時停止するかどうかは、リリースマネージャーの判断に委ねられます。この決定は、`gprd` へのパッケージデプロイの重要性や Ring 1 のユーザーへのパッケージ未配信の影響など、さまざまな要因によって判断されます。

[^1]: この ADR は https://gitlab.com/groups/gitlab-com/gl-infra/-/epics/1619#note_2660377621 および https://gitlab.com/gitlab-com/gl-infra/delivery/-/issues/21384#note_2663367292 での議論の結果です。
