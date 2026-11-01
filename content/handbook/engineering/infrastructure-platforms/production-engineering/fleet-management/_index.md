---
title: "Fleet Management チーム"
description: "Fleet Management チームは、GitLab の本番環境を支えるコア Kubernetes クラスター、VM、標準化された OS イメージ、主要な Infrastructure-as-Code プラットフォームを含む基盤インフラストラクチャをプロビジョニングし、セキュリティを確保し、保守します。"
upstream_path: "/handbook/engineering/infrastructure-platforms/production-engineering/fleet-management/"
upstream_sha: "52419353ea755a1ac823553385f8636ff2fcde17"
translated_at: "2026-11-01T05:15:22+00:00"
translator: codex
stale: false
lastmod: "2026-10-30T14:17:26-04:00"
---

Production Engineering の中で、Fleet Management チームは GitLab のコアインフラストラクチャ管理ユニットとして機能します。私たちは、コア Kubernetes クラスター、仮想マシン、標準化された OS イメージ、シークレット管理を含む基盤をプロビジョニング、スケール、セキュア化します。低レベルのコンピュートレイヤーを所有することで、社内のお客様が摩擦なく自分たちのサービスの構築とデプロイに完全に集中できるようにします。

## ミッション {#mission}

私たちのミッションは、安全でスムーズかつスケーラブルなコアインフラストラクチャを提供することで、GitLab の各チームが自信を持ってサービスを構築し、デプロイできるようにすることです。

## 所有範囲と責任 {#ownership-and-responsibilities}

Fleet Management チームは次に注力します。

1. **コア Kubernetes インフラストラクチャ:** GitLab のコア GKE クラスターのプロビジョニング、スケーリング、健全性管理。
2. **Kubernetes ワークロード管理:** クラスターへワークロードをデプロイするために必要なツールとプラットフォーム（例: ArgoCD、Helmfile、Helm charts）の管理。
3. **仮想マシンおよび OS イメージ管理:** フリート全体の OS ベースライン、OS イメージシステムの設計と保守、および大規模 VM 移行の管理。
4. **Ops インフラストラクチャ:** [ops.gitlab.net](https://ops.gitlab.net/)と関連する Ops runners の所有と保守。
5. **シークレット管理:** GitLab のシークレット管理（Vault）のための基盤インフラストラクチャの所有と運用。
6. **Infrastructure-as-Code (IaC) および共有ツール:** 標準化されたデプロイを確保するため、主要な設定リポジトリ（例: `infra-mgmt`、core Chef、Terraform scaffolding）と共有 CI テンプレート（例: Common CI Tasks）を保守する。
7. **クラウドベンダーエンゲージメント管理:** 私たちのコアフリートとインフラストラクチャのニーズを支えるため、クラウドベンダーとの関係とエンゲージメントを管理する。

## 支援を受ける {#getting-assistance}

- **Slack:** `[#g_fleet_management](https://gitlab.enterprise.slack.com/archives/C0ACE4T2R6W)`

## よく使うリンク {#common-links}

| | |
|--------------------------------|---------------------------------------------------------------------------------------------------|
| **ワークフロー**               | [Infrastructure Platforms Project Management](/handbook/engineering/infrastructure-platforms/project-management/) |
| **GitLab.com**                 | `@gitlab-org/production-engineering/fleet-management` |
| **チーム Slack チャンネル**    | `[#g_fleet_management](https://gitlab.enterprise.slack.com/archives/C0ACE4T2R6W)` - チームチャンネル |

## チームメンバー {#team-members}

{{< team-by-manager-slug manager="galon3" department="Production Engineering Fleet Management Team" >}}

## 私たちの働き方 {#how-we-work}

私たちは、より広い [Infrastructure Platforms section](/handbook/engineering/infrastructure-platforms/project-management/)のプロセスに従い、GitLab の価値観に沿って働くことを基本としています。新しく定義されたチームとして、私たちはワークフローを積極的に確立し、イテレーションしています。

### ラベル {#labels}

- `~"Fleet::Requests"` - チーム外から来る受信リクエスト用。
- `~"Fleet::KTLO"` - 日常運用を維持するための（KTLO）Issue と定常保守用。
- `~"Fleet::Project Work"` - 計画済みエピックおよびロードマップイニシアチブの一部である Issue 用。
- `~"Fleet::Meta"` - チームプロセス（レトロスペクティブ、計画など）に関連する Issue 用。

### ミーティングと儀式 {#meetings-and-rituals}

- **週次チーム同期:** APAC、EMEA、AMER にまたがるグローバルに分散したチームに対応するため、3 週間のローテーションスケジュールに従います。毎週 2 つの地域が重なる 45 分の同期を行い、チームのつながり、参加できない地域からの非同期キャッチアップ、プロセスのイテレーション、Show & Tell セッションを扱います。参加できないメンバーには、共有アジェンダドキュメントを通じて非同期で参加することが推奨されます。
- **グループレビュー:** Production Engineering グループレビューの前に認識をそろえるため、毎週水曜日にプロジェクトのステータスを非同期でレビューします。
- **レトロスペクティブ:** 私たちのプロセスを振り返り、継続的改善の文化を促進するため、チームレベルのレトロスペクティブ Issue を定期的に作成します。
- **オンコール:** ほとんどのチームメンバーは、私たちが所有するインフラストラクチャの信頼性へのコミットメントの一環として、オンコールローテーションに参加します。

### Infradev ワークフロー {#infradev-workflow}

Fleet Management に割り当てられた [infradev](/handbook/engineering/workflow/#infradev) Issue をトリアージするために、次のワークフローを使用します。このワークフローは提案段階であり、何がうまく機能するかを学びながらイテレーションすることを想定しています。

1. **トリアージ状態での自動割り当て:** 新しい infradev Issue が私たちのチームにルーティングされると、[triage-ops](https://gitlab.com/gitlab-org/quality/triage-ops)がすべてのチームメンバーをその Issue に自動的に割り当て、トリアージ状態であることを示します。
2. **協働トリアージ:** チームの誰でも Issue をトリアージできます。目的は次を確認することです。
   1. Issue が妥当であり、対応するのに十分なコンテキストがある。
   1. Fleet Management がその Issue を所有する適切なチームである。
   1. 優先度ラベルが適切である。
   1. 期限が現実的である。
3. **作業準備完了:** Issue がトリアージを通過したら、すべてのチームメンバーの割り当てを解除し、`~"workflow-infra::ready"` ラベルを適用して準備完了キューに移動します。
4. **準備完了キューから取得:** チームメンバーはキャパシティに応じて準備完了キューから作業を取得します。期限が近づいている場合、何も抜け落ちないように、bot がランダムに Issue をチームメンバーに割り当てる場合があります。
