---
title: "プロダクションエンジニアリング ネットワーキングとインシデント管理チーム"
description: "私たちはシステムへのトラフィックを制御するネットワーキングプラットフォームと GitLab のインシデント対応プロセスの両方を管理します"
upstream_path: "/handbook/engineering/infrastructure-platforms/production-engineering/networking-and-incident-management/"
upstream_sha: "0e6f01390a34aeb6706ace17d8d3c50e74e82d0d"
translated_at: "2026-04-29T01:48:37Z"
translator: claude
stale: false
---

## ミッション

私たちは 2 つのベクターから GitLab を保護します:

- システムへのトラフィックの許可方法について、チームに最初の防衛ラインを提供するネットワーキングプラットフォームを提供します
- GitLab がインシデントに対応する必要がある際の、インシデント管理プロセスとツールを通じた対応システムを管理します

私たちは GitLab の成長に合わせてスケールする革新的なネットワーキングソリューションの開発に焦点を当て、GitLab を支えるネットワーキングインフラストラクチャを構築・進化させることを目指しています。GitLab のチームがサービスに関連するインシデントへの対応に自信を持てるよう支援します。

## ビジョン

1. **ネットワーキングインフラストラクチャの卓越性** スケーラブルでセキュアかつ効率的なソリューションを構築することで、GitLab のネットワーキング機能を前進させます。これには、すべての GitLab プラットフォームの増大する需要に対応するためのエッジサービス、ロードバランシング、レート制限、ネットワークセキュリティの進化が含まれます。集中化されたネットワーキングツールとインフラストラクチャを通じて、GitLab の継続的な成長とイノベーションを支える基盤を作ります。
1. **サービス所有権と標準化されたインシデント対応** チームが問題発生時に自信を持って対応できるフレームワークとツールを提供することで、チームが自らのサービスを自信を持って運用できるよう支援します。

## 所有範囲と責任

ネットワーキングとインシデント管理チームは以下に焦点を当てています:

1. インシデント管理 - GitLab がインシデント管理のために使用するプロセスを改善する責任を担います。
1. 障害回復 - [回復時間目標](../../../gitlab-com/policies/disaster-recovery/)（RTO）の短縮に特に焦点を当てた障害回復プロセスの管理を担います。
1. ネットワーキングインフラストラクチャ - ネットワークのエッジからアプリケーション層までトラフィックを管理するサービスの改善と拡大に積極的に取り組みます。

## サポートの依頼

- Slack: [#g_networking_and_incident_management](https://gitlab.enterprise.slack.com/archives/C09BM5XCPBP)
- サポートリクエストプロジェクト: [新規 Issue](https://gitlab.com/gitlab-com/request-for-help/-/issues/new?description_template=SupportRequestTemplate-ProductionEngineering-NetworkingAndIncidentManagement)

## チームメンバー


<p class="my-3 text-sm text-gray-600 italic">チームメンバー情報は <a href="https://handbook.gitlab.com/handbook/engineering/infrastructure-platforms/production-engineering/networking-and-incident-management/#team-members" rel="external noopener">原文 (英語)</a> を参照してください。</p>


## 作業方法

私たちは[インフラストラクチャプラットフォームプロジェクト管理プラクティス](/handbook/engineering/infrastructure-platforms/project-management/)に従います。

プロダクションエンジニアリング内の新チームとして、現在ワークフローとプロセスを確立中です。チームが進化するにつれてこのページを継続的に更新していきます。

### ラベル

- 受信リクエストには `~"NIM::Requests"` を使用します。これはチーム外部から来るリクエストです。
- ライトをつけ続ける（KTLO）Issue には `~"NIM::KTLO"` を使用します。フルプロジェクトではない可能性がある、所有領域のメンテナンスに関連する Issue です。
- プロジェクト作業には `~"NIM::Project Work"` を使用します。[ネットワーキングエピック](https://gitlab.com/groups/gitlab-com/gl-infra/-/epics/1676)または[インシデント管理エピック](https://gitlab.com/groups/gitlab-com/gl-infra/-/work_items/1873)に表示されているエピックの一部である Issue に適用する必要があります。
- チームプロセス（レトロスペクティブ、プランニング、NIM チームプロセス変更）に関連する Issue には `~"NIM::Meta"` を使用します。
- アクセスリクエストには:
  - `~"NIM::Todo"` - Cloudflare アクセスのすべてのベースラインエンタイトルメントテンプレートに自動適用されます。
  - `~"NIM::Doing"` - [オプション] 対応に時間がかかる場合に、すでに対応中であることを他のメンバーに知らせるために使用します。
  - `~"NIM::Done"` - アクセスリクエストが対応済みになったら、このラベルに変更します。

多くの Issue テンプレートはすでにこれらのラベルを適用しています。

### 定期タスクの委任

チームは定期的な注意が必要な複数の定期タスクを管理しています（通常、週約 1 時間の小さな時間コミットメント）。個々のチームメンバーがこれらのタスクを所有し、不在の際はカバレッジを見つける責任があります。

#### 現在の定期タスク

- **incident.io で期限超過のインシデント後タスクを行うよう通知する** - 週次 - 未完了のインシデント後アクションアイテムのフォローアップ。**DRI: [Alex](https://gitlab.com/ahanselka)**
- **信頼性レポート** - 月次 - https://gitlab.com/gitlab-com/gl-infra/reliability-reports/-/issues に公開。**DRI: [Devin](https://gitlab.com/devin) / [Sarah](https://gitlab.com/sarahwalker)**
- **インシデントフォローアップ Issue の対応** - 週次 - インシデント中に特定された Issue の管理と解決追跡。**DRI: [Steve](https://gitlab.com/sabrams)**
- **EOC コーディネーター** - 継続的 - Tier 1 SRE オンコールローテーションのリード。**DRI: [Sarah](https://gitlab.com/sarahwalker)**
- **IM コーディネーター** - 継続的 - インシデントマネージャーオンコールローテーションのリード。**DRI: [Devin](https://gitlab.com/devin)**
- **Issue トリアージ** - 週次 - 現在エンジニアリングマネージャーが所有し、受信 Issue のトリアージ、委任、スケジューリングを行う。**DRI: [Steve](https://gitlab.com/sabrams)**

#### タスク所有権の期待事項

- 各タスクには、定期的なサイクルでの完了に対して責任を持つ [DRI](/handbook/people-group/directly-responsible-individuals/) がいます。
- タスクオーナーは不在の際にカバレッジを手配する必要があります。
- カバレッジの手配は PTO カバレッジ Issue で周知する必要があります。

## 共通リンク

- [#g_networking_and_incident_management](https://gitlab.enterprise.slack.com/archives/C09BM5XCPBP)
- [ネットワーキングプロジェクトエピック](https://gitlab.com/groups/gitlab-com/gl-infra/-/epics/1676)
- [インシデント管理プロジェクトエピック](https://gitlab.com/groups/gitlab-com/gl-infra/-/work_items/1873)
- [Issue トラッカー](https://gitlab.com/gitlab-com/gl-infra/production-engineering/-/issues/?sort=created_asc&state=opened&label_name%5B%5D=group%3A%3ANetworking%20%26%20Incident%20Management&first_page_size=100)
- [障害回復プラクティス](/handbook/engineering/infrastructure-platforms/production-engineering/networking-and-incident-management/dr-practice/)
- [AI プロンプトライブラリ](ai-prompts.md)
