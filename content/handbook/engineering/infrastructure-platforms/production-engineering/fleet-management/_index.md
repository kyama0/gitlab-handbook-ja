---
title: "フリート管理チーム"
description: "フリート管理チームは、GitLab のプロダクション環境を支えるコア Kubernetes クラスター、VM、標準化された OS イメージ、および主要なインフラストラクチャアズコードプラットフォームを含む基盤インフラストラクチャをプロビジョニング、セキュア化、維持します。"
upstream_path: "/handbook/engineering/infrastructure-platforms/production-engineering/fleet-management/"
upstream_sha: "0e6f01390a34aeb6706ace17d8d3c50e74e82d0d"
translated_at: "2026-04-29T01:48:37Z"
translator: claude
stale: false
lastmod: "2026-04-21T14:18:24+10:00"
---

プロダクションエンジニアリング内において、フリート管理チームは GitLab のコアインフラストラクチャ管理ユニットとして機能します。私たちはコア Kubernetes クラスター、仮想マシン、標準化された OS イメージ、シークレット管理を含む基盤的な基礎をプロビジョニング、スケール、セキュア化します。低レベルのコンピューターレイヤーを所有することで、内部顧客がサービスの構築とデプロイに完全に集中できるようにします。

## ミッション

私たちのミッションは、セキュアでスムーズかつスケーラブルなコアインフラストラクチャを提供することで、GitLab のチームが自信を持ってサービスを構築・デプロイできるよう支援することです。

## 所有範囲と責任

フリート管理チームは以下に焦点を当てています:

1. **コア Kubernetes インフラストラクチャ:** GitLab のコア GKE クラスターのプロビジョニング、スケーリング、健全性管理。
2. **Kubernetes ワークロード管理:** クラスターへのワークロードデプロイに必要なツールとプラットフォームの管理（例: ArgoCD、Helmfile、Helm チャート）。
3. **仮想マシンおよび OS イメージ管理:** フリート全体の OS ベースライン、OS イメージシステムの設計・維持、および大規模な VM マイグレーションの管理。
4. **Ops インフラストラクチャ:** [ops.gitlab.net](https://ops.gitlab.net/) とその関連 Ops ランナーの所有・維持。
5. **シークレット管理:** GitLab のシークレット管理（Vault）のための基盤インフラストラクチャの所有・運用。
6. **インフラストラクチャアズコード（IaC）および共有ツール:** 主要な設定リポジトリ（例: `infra-mgmt`、コア Chef、Terraform スキャフォールディング）と共有 CI テンプレート（例: Common CI Tasks）を維持して標準化されたデプロイを確保する。
7. **クラウドベンダーエンゲージメント管理:** コアフリートとインフラストラクチャニーズをサポートするためのクラウドベンダーとの関係・エンゲージメントの管理。

## サポートの依頼

- **Slack:** `[#g_fleet_management](https://gitlab.enterprise.slack.com/archives/C0ACE4T2R6W)`

## 共通リンク

| | |
|--------------------------------|---------------------------------------------------------------------------------------------------|
| **ワークフロー**               | [インフラストラクチャプラットフォームプロジェクト管理](/handbook/engineering/infrastructure-platforms/project-management/) |
| **GitLab.com**                 | `@gitlab-org/production-engineering/fleet-management` |
| **チーム Slack チャンネル**   | `[#g_fleet_management](https://gitlab.enterprise.slack.com/archives/C0ACE4T2R6W)` - チームチャンネル |

## チームメンバー


<p class="my-3 text-sm text-gray-600 italic">チームメンバー情報は <a href="https://handbook.gitlab.com/handbook/engineering/infrastructure-platforms/production-engineering/fleet-management/#team-members" rel="external noopener">原文 (英語)</a> を参照してください。</p>


## 作業方法

私たちは[GitLab バリュー](/handbook/values/)に沿って作業することをデフォルトとし、[インフラストラクチャプラットフォームセクション](/handbook/engineering/infrastructure-platforms/project-management/)のプロセスに従います。新たに定義されたチームとして、ワークフローを積極的に確立し、イテレーションを重ねています。

### ラベル

- `~"Fleet::Requests"` - チーム外部から来る受信リクエスト用。
- `~"Fleet::KTLO"` - ライトをつけ続ける（KTLO）Issue とルーティンメンテナンス用。
- `~"Fleet::Project Work"` - 計画されたエピックとロードマップイニシアチブの一部である Issue 用。
- `~"Fleet::Meta"` - チームプロセス（レトロスペクティブ、プランニングなど）に関連する Issue 用。

### ミーティングとリチュアル

- **週次チームシンク:** APAC、EMEA、AMER にわたるグローバルに分散したチームに対応するため、3 週間のローテーションスケジュールに従います。毎週、2 つの地域が 45 分のシンクのためにオーバーラップし、チームコネクション、欠席地域からの非同期キャッチアップ、プロセスのイテレーション、Show & Tell セッションをカバーします。参加できないメンバーは、共有アジェンダドキュメントを通じて非同期で参加することが推奨されます。
- **グループレビュー:** プロダクションエンジニアリンググループレビューに先立ち、水曜日ごとにプロジェクトステータスを非同期でレビューして整合性を確保します。
- **レトロスペクティブ:** プロセスを振り返り、継続的改善の文化を促進するために、チームレベルのレトロスペクティブ Issue が定期的に作成されます。
- **オンコール:** ほとんどのチームメンバーは、所有するインフラストラクチャの信頼性に対するコミットメントの一環として、オンコールローテーションに参加しています。
