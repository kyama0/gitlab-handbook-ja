---
title: "FY26 - ホステッドランナー"
upstream_path: "/handbook/engineering/infrastructure-platforms/production-engineering/ops/roadmaps/fy26/hosted-runners/"
upstream_sha: "0e6f01390a34aeb6706ace17d8d3c50e74e82d0d"
translated_at: "2026-04-29T02:44:36Z"
translator: claude
stale: false
---

## 目次

- [背景](#background)
- [北極星（目指す姿）](#north-star)
- [現状の課題](#current-landscape)
- [FY26 の目標](#goals-for-fy26)

## 背景 {#background}

GitLab ホステッドランナー（別名 [GitLab.com のホステッドランナー](https://docs.gitlab.com/ee/ci/runners/index.html#hosted-runners-for-gitlabcom)）は、チームをまたいだ協業によって管理・デプロイ・維持されています。SRE はサービスの本番環境におけるスケーラビリティと信頼性を確保するためのデプロイソリューションを支援し、場合によってはリードします。

FY25 において、SRE は以下のランナー関連の取り組みを時系列順に支援しました。

1. [AWS でのベータリリース](https://gitlab.com/groups/gitlab-com/gl-infra/gitlab-dedicated/-/epics/276)における Dedicated ランナーの支援
2. 新しいランナータイプの提供: [Medium および Large ARM64 ベースのランナー](https://gitlab.com/groups/gitlab-org/-/epics/8442)
3. [PoC - Dedicated ランナーアーキテクチャを用いたホステッドランナーのデプロイ](https://gitlab.com/groups/gitlab-com/gl-infra/-/epics/1326)の探索
4. .com ホステッドランナーのスケーラビリティを妨げていた [VPC ピアリング上限の解決策](https://gitlab.com/groups/gitlab-com/gl-infra/-/epics/1386)の発見
5. [すべての .com ランナーシャード全体](https://gitlab.com/groups/gitlab-com/gl-infra/-/epics/1459)への VPC 再設計の実装
6. [Terraform における .com ランナー環境の差異](https://gitlab.com/groups/gitlab-com/gl-infra/-/epics/1458)の統合

FY26 では、ランナーチームがランナーの運用作業をよりセルフサービスで実施できるようにすることに注力します。

## 北極星（目指す姿） {#north-star}

GitLab ホステッドランナーの完全自動化・ハンズオフのスケーラビリティと保守性を実現し、最小限の手動介入でシームレスかつ継続的な運用を確保します。

## 現状の課題 {#current-landscape}

以下のセクションでは、現状の課題を取り上げます。改善が最も必要な領域に焦点を当てることは悲観的に見えるかもしれませんが、私たちのセットアップとプロセスは 1 年前と比べてより良い状況にあります。ただし、理想とはまだ遠く、改善の余地があります。

### 知識のサイロ化

ホステッドランナーの維持・スケーリングに関する情報へのアクセスが限られています。専門知識を持つエンジニアが少数に限られており、プロセスが十分に文書化されていません。

### スケーラビリティの疲弊

新しいランナータイプの提供と既存ランナーのスケーリングのいずれについても、スケーラビリティのプロセスは手作業が多く、負担が大きく、人的ミスが起きやすく、反復的で退屈です。

### コスト効率

一部のシャードのコスト効率は理想とはほど遠い状況です。FinOps チームはこのデータへのアクセス手段を持っていますが、データに基づいて行動したり判断を下したりする権限がありません。さらに、代替デプロイ方法の探索や .com ランナーのホスティングコスト削減のための現在の CPU 使用率把握への投資も行っていません。

## FY26 の目標 {#goals-for-fy26}

*工数レベルの凡例:*

- LF: 低工数（Low Effort）
- MF: 中工数（Medium Effort）
- TF: 大工数（Tremendous Effort）

### 知識の透明化

**目標:**

1. デプロイとスケーラビリティに関するドキュメントの品質向上（MF）
1. 発見しやすく、アクセスしやすい情報の作成（LF）
1. チームをまたいだ透明性向上のためにドキュメントを CR テンプレートに変換（LF）
1. ランナーチームとのランブック所有権の移管調整（MF）

**関連リンク:**

1. [ホステッドランナー - ランブックの改善](https://gitlab.com/groups/gitlab-com/gl-infra/-/epics/1457)

### スケーラビリティの疲弊

**目標:**
既存シャードの[スケーリングプロセス](https://gitlab.com/gitlab-com/runbooks/-/blob/master/docs/ci-runners/linux/new-shards.md)の自動化:

1. ランナーのトラッカーに Epic/Issue を作成して以下を実施（LF）:
   1. 既存ツール（[deployer](https://gitlab.com/gitlab-com/gl-infra/ci-runners/deployer/) および [GRIT](https://gitlab.com/gitlab-org/ci-cd/runner-tools/grit)）の改善
   1. プロセスをパイプラインに組み込むことを検討
   1. 代替デプロイソリューションのリサーチ（例: [k8s 上の runner-manager](https://gitlab.com/gitlab-com/gl-infra/scalability/-/issues/3360) の再検討）

**関連リンク:**

1. [ランナー - スケーリングプロセスの自動化](https://gitlab.com/groups/gitlab-com/gl-infra/-/epics/1313)
1. [ランナーデプロイ改善の将来のイテレーション](https://gitlab.com/groups/gitlab-com/gl-infra/-/epics/581)

### コスト効率

**目標:**

1. FinOps と連携して目標を策定（LF）
1. 既存シャード全体で合理的なコスト効率を達成（MF）
1. より費用対効果の高いホスティング方法の探索（MF）
1. リソース使用量の最適化（TF）

**関連リンク:**

1. [FinOps Cloud Efficiency と Grafana Idle Efficiency の調査](https://gitlab.com/gitlab-org/ci-cd/shared-runners/infrastructure/-/issues/241)
1. [コンピュート非効率性の高い大容量 Linux ランナーのオートスケーリングパラメータの削減](https://gitlab.com/gitlab-org/ci-cd/shared-runners/infrastructure/-/issues/166)
