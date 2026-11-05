---
title: US Public Sector Services チーム
description: GitLab Dedicated for Government を構築・運用する Dedicated Public Sector Compliance と Dedicated Public Sector Features の両チーム
upstream_path: /handbook/engineering/infrastructure-platforms/gitlab-dedicated/us-public-sector-services/
upstream_sha: "ab93800e4c241789ac67785899fa20ffa1eb0854"
translated_at: "2026-11-05T15:07:19.941804+00:00"
translator: claude
stale: false
lastmod: "2026-11-03T17:29:55-07:00"
---
## 概要 {#summary}

US Public Sector Services（US PubSec）は、[Dedicated Group](/handbook/engineering/infrastructure-platforms/gitlab-dedicated/)内の 2 つの機能別チーム、**Dedicated Public Sector Compliance** と **Dedicated Public Sector Features** で構成されています。両チームで、AWS GovCloud 上にホストされる、FedRAMP Moderate 認定を受けたシングルテナントの GitLab Dedicated オファリングである [GitLab Dedicated for Government](/handbook/engineering/infrastructure-platforms/gitlab-dedicated/government/)（GDG）を構築・運用します。

両チームはマネージャー、Product Manager、作業プロセスを共有しているため、両方のチーム憲章をこのページに掲載しています。

**このページに明示されていない事項については、[GitLab Dedicated Group のプロセス](/handbook/engineering/infrastructure-platforms/gitlab-dedicated/)に従います。** このページに US PubSec のプロセスが記載されている場合、US PubSec の作業にはそのプロセスが優先されます。

| 機能別チーム | 対応するニーズ | 対象範囲と担当 | 主な連携先 | Tech Lead |
|---|---|---|---|---|
| **[Dedicated Public Sector Compliance](#dedicated-public-sector-compliance)** | GDG のコンプライアンスとセキュリティのニーズ | GDG の統制、コンプライアンスとセキュリティの自動化、証跡ワークフロー、FedRAMP/GDG の監査と承認、リリース準備、GDG 固有の Switchboard と運用ワークフロー。 | InfraSec、Dedicated Public Sector Features、および GDG 向けに開発する他の Dedicated チーム。 | {{< member-by-gitlab "ekelly1" >}} |
| **[Dedicated Public Sector Features](#dedicated-public-sector-features)** | GDG の顧客と機能のニーズ | GDG 顧客の機能要望の受付とデリバリー、GDG を優先した調整、Commercial Features と共有する機能実装の進め方。 | Dedicated Commercial Features、および機能が統制やリリース準備に影響する場合は Dedicated Public Sector Compliance。 | {{< member-by-gitlab "jburnitz" >}} |

## チーム憲章 {#team-charters}

### Dedicated Public Sector Compliance {#dedicated-public-sector-compliance}

#### ミッション {#mission}

公共部門のセキュリティとコンプライアンスの要件を、再利用可能な統制、自動化された証跡、標準化された手順、リリース準備ワークフローに変えることで、コンプライアンスを損なわずに GDG が迅速に進められるようにします。

#### 憲章 {#charter}

このチームは、GDG 固有のコンプライアンスとセキュリティの準備を担当します。これには、FIPS と関連する堅牢化、証跡の自動化、GDG に導入される作業の FedRAMP/GDG 監査と承認の調整、GDG 固有の Switchboard と運用ワークフローが含まれます。InfraSec、Dedicated Public Sector Features、他の Dedicated チームと早期に連携し、要件が後段階の関門ではなく設計の一部になるようにします。

- **対象範囲：** GDG の統制、コンプライアンスとセキュリティの自動化、証跡と証跡ワークフロー、FedRAMP/GDG の監査と承認、リリース準備、GDG 固有の Switchboard と運用ワークフロー。
- **対象範囲外：** 主なニーズがコンプライアンス、統制、リリース準備ではなくプロダクトの能力である、顧客向け機能のデリバリー。その作業は Dedicated Public Sector Features が担当します。

#### チームメンバー {#team-members}

| 名前 | 役割 |
|---|---|
| {{< member-by-gitlab "mckgl" >}} | Engineering Manager |
| {{< member-by-gitlab "ekelly1" >}} | Senior Site Reliability Engineer, Tech Lead |
| {{< member-by-gitlab "curtmarker" >}} | Senior Site Reliability Engineer |
| {{< member-by-gitlab "sdghbtn-gl" >}} | Site Reliability Engineer |
| 募集中 | |

#### 責任 {#responsibilities}

このチームは、次の相手や要件から要求を受けます：

- Product Management
- InfraSec
- FedRAMP、FIPS、関連する公共部門のコンプライアンス要件
- GDG 内部の運用ニーズと FedRAMP/GDG の監査ニーズ
- GDG のコンプライアンスやリリース準備の手順を必要とする他の Dedicated チーム

管理する成果物：

- GDG 固有の Switchboard と運用ワークフロー
- コンプライアンスとセキュリティの自動化、証跡パイプライン、統制を中心としたチェックリスト
- GDG のリリース準備と FedRAMP/GDG の監査・承認の手順
- container-loader と private-registry の経路を含む GDG の統制成果物

#### 成功の姿 {#what-success-looks-like}

- GDG の要件が早期に可視化され、繰り返し利用できる統制と標準化された手順として実装されている。
- FedRAMP/GDG の証跡、監査、承認の作業がさらに自動化され、手作業とリリースの障害が減少している。
- 他の Dedicated チームが、明確なコンプライアンス上の期待事項と信頼できる GDG ワークフローに従って、GDG で構築・運用できる。

次の指標で測定します：

- GDG のコンプライアンスとリリース準備を進めるための時間と労力
- 手動のコンプライアンス手順と、自動化された標準手順による処理の比較
- FedRAMP/GDG の監査、承認、セキュリティレビューによって加わるサイクルタイム
- GDG 固有の統制と運用ワークフローの信頼性と一貫性

### Dedicated Public Sector Features {#dedicated-public-sector-features}

#### ミッション {#mission-1}

共通の Dedicated と Commercial の機能実装の進め方を可能な限り再利用しながら、GDG を優先する方法で GDG 顧客向けの能力を提供します。

#### 憲章 {#charter-1}

このチームは、Product Management、顧客、RFH、ロードマップのコミットメントから生じる作業を含め、顧客向け GDG 機能の受付とデリバリーを担当します。Dedicated Commercial Features と密接に連携し、実用的な場合には実装の進め方を共有し、政府機関のニーズで必要な場合には GDG を優先したアプローチを取ります。機能が統制、アクセス、審査、GDG のリリース準備に影響する場合は、Dedicated Public Sector Compliance と調整します。

- **対象範囲：** GDG 顧客向け機能の受付とデリバリー、GDG を優先した Dedicated 機能の調整、Commercial Features と共有する機能実装の進め方。
- **対象範囲外：** 顧客向けの能力ではないコンプライアンス、セキュリティ、統制の作業。その作業は Dedicated Public Sector Compliance が担当します。

#### チームメンバー {#team-members-1}

| 名前 | 役割 |
|---|---|
| {{< member-by-gitlab "mckgl" >}} | Engineering Manager |
| {{< member-by-gitlab "jburnitz" >}} | Senior Site Reliability Engineer, Tech Lead |
| {{< member-by-gitlab "jedge1" >}} | Senior Site Reliability Engineer |
| <span style="white-space: nowrap;"><a href="https://gitlab.com/rowens-gl" title="@rowens-gl"><img class="avatar" src="https://gitlab.com/uploads/-/system/user/avatar/42839519/avatar.png" width="90" height="90" alt="Rob Owens">Rob Owens</a></span> | Senior Site Reliability Engineer |

#### 責任 {#responsibilities-1}

このチームは、次の相手や要件から要求を受けます：

- Product Management とロードマップの優先事項
- GDG 顧客
- RFH とその他の顧客主導のリクエスト
- 機能実装の進め方を共有する場合は、Dedicated Commercial Features と他の Dedicated チーム

管理する成果物：

- GDG を優先した顧客向け機能の作業
- GDG 顧客のリクエストの受付と実行の手順
- Commercial Features と足並みを揃えた共通の機能設計、計画、実装の進め方
- Bring Your Own Model（BYOM）と関連する GDG 機能のデリバリー

#### 成功の姿 {#what-success-looks-like-1}

- GDG の機能リクエストに、明確な受付経路、責任を負う担当者、顧客へのデリバリーに至る手順がある。
- GDG の能力が、実用的な場合には共通の Dedicated と Commercial の機能実装の進め方を再利用し、政府機関の要件によって正当化される場合にのみ異なる進め方を取る。
- コンプライアンスとプラットフォームの制約が早期に特定され、デリバリー計画に組み込まれることで、手戻りと顧客の待ち時間が最小化されている。

次の指標で測定します：

- GDG 機能の受付から顧客が利用できる状態でのデリバリーまでの時間
- 共通の進め方による GDG 機能のデリバリーと、個別の分岐によるデリバリーの比較
- コンプライアンスやプラットフォームの制約が後から判明することで生じる手戻り
- GDG 機能の受付と実行における明確さ、担当の明確さ、処理量

## 共通の役割 {#shared-roles}

| 役割 | 名前 |
|---|---|
| Engineering Manager | {{< member-by-gitlab "mckgl" >}} |
| Product Manager | {{< member-by-gitlab "dmahalingam1" >}} |
| Design Partner | TBD |
| Technical Writer | TBD |

## 私たちとの連携方法 {#working-with-us}

- 一部を変更した [Request For Help（RFH）](/handbook/support/workflows/how-to-get-help/#the-request-for-help-landing-page)プロセスに従います。顧客テナントのニーズや FedRAMP に関わる機密性の高いニーズについては、[境界内の RFH](https://compsecgov.gitlab-dedicated.us/gitlab-dedicated-us-public-sector/customer-support/-/issues/new?issuable_template=request-for-help)を作成してください。
  - 初回応答時間（FRT）について、[Dedicated の RFH Issue はデフォルトで Severity 3](https://gitlab.com/gitlab-com/request-for-help/#responsiveness-guidelines)になります。
  - 解決の SLO はありません。解決時間は、ニーズと SRE の対応余力によって異なります。
- 顧客やテナントに固有ではなく、FedRAMP に関わる機密性の高い内容でもない一般的なニーズについては、GitLab Dedicated チームの Issue トラッカーで `group::US PubSec` ラベルを付けて [Issue を作成](https://gitlab.com/gitlab-com/gl-infra/gitlab-dedicated/team/-/work_items/new?issuable_template=uspubsec_operations)してください。
- Issue の作成時に誰かを `@` メンションする必要はありません。チームに注意を向けてもらうには、[GitLab グループ階層](#gitlab-group-hierarchy)のチームハンドルを使用してください。
- 顧客に影響する緊急の S1 または S2 インシデントについては、[緊急の可用性またはセキュリティイベント](/handbook/engineering/infrastructure-platforms/gitlab-dedicated/#urgent-availability-or-security-events)に従ってください。
- 質問やディスカッションについては、[Slack チャンネル](#slack-channels)を参照してください。

### Issue トラッカー {#issue-trackers}

私たちは、2 つの公式 Issue トラッカーで作業を追跡します。特定の顧客向けの追加トラッカーはフィールドチーム（CSM と SA）が所有する場合がありますが、US PubSec の Product Management と Engineering にとって唯一の情報源となるのは、この 2 つだけです。

#### CompSecGov（セキュアテナント） {#compsecgov-secure-tenant}

**リンク：** <https://compsecgov.gitlab-dedicated.us/gitlab-dedicated-us-public-sector/>

**ラベル：** `group::US PubSec`

| 属性 | 詳細 |
|-----------|---------|
| **目的** | 顧客の機密データと FedRAMP 準拠の情報 |
| **アクセス** | US PubSec engineering、US PubSec Product Management、Security Compliance、Security、Support、Public Sector のフィールドチームメンバー（顧客のアクセスはなし） |
| **アクセス要件** | [FedRAMP オンボーディングと Citizen Validation](https://gitlab.com/gitlab-com/gl-security/security-assurance/fedramp/fedramp-certification/-/blob/main/.gitlab/issue_templates/FedRAMP_Onboarding-Current_Employees.md) |
| **担当** | Engineering / Product Management |
| **応答 SLA** | 祝日と週末を除く 36 時間以内に、Issue とコメントでアカウントチームへ**応答**します。[インシデントと RFH](#working-with-us)はそれぞれのプロセスに従います。 |

次の用途で使用します：

- セキュリティに関わる機密性の高い顧客情報
- コンプライアンスドキュメント
- 顧客固有の詳細を含む内部計画
- RFH
- インシデント
- トライアル
- 顧客オンボーディング
- アカウントチームのセルフサービスアクセス

#### Dedicated チームトラッカー {#dedicated-team-tracker}

**リンク：** <https://gitlab.com/gitlab-com/gl-infra/gitlab-dedicated/team/-/issues>

**ラベル：** `group::US PubSec`

| 属性 | 詳細 |
|-----------|---------|
| **目的** | 内部計画と機能開発 |
| **アクセス** | GitLab チームメンバーのみ（顧客のアクセスはなし）。他の Dedicated チームと共有。 |
| **担当** | Product Management / Engineering |

次の用途で使用します：

- スプリント計画とロードマップ
- 機能開発（必要に応じてコードネームを使用）
- Grand Review 項目
- アカウントチームのセルフサービスアクセス
- 機能リクエスト
- 移行計画

### Slack チャンネル {#slack-channels}

| チャンネル | 目的 |
|---------|---------|
| [#g_dedicated-us-pubsec](https://gitlab.slack.com/archives/C03R5837WCV) | US PubSec の一般的なエンジニアリングのディスカッション用の公開チャンネル。任意の内部チャンネルで `@dedicated-uspubsec-team` Slack グループを使用してチームにタグ付けします。 |
| `#dedicated-for-gov-field` | Dedicated for Government の質問用の非公開チャンネル。公共部門の顧客情報を保護するため非公開です。メンバーには、US PubSec のフィールドチームメンバー、Dedicated for Government R&D、Security、Compliance、Support が含まれます。 |
| `#dedicated-for-gov-stable` | Dedicated for Government の常設ワーキンググループのメンバー向けの非公開チャンネル。 |
| [#g_dedicated-team](https://gitlab.slack.com/archives/C025LECQY0M) | Dedicated Group 全体に関するトピック。 |

## 作業の進め方 {#how-we-work}

### ミーティング {#meetings}

私たちは、Issue トラッカーで非同期に作業することを優先します。チームには次の定例コールもあります：

- `Team call`：チームメンバーが日々必要とする情報を共有し、同期的な会話が必要なプロジェクト項目を議論します
- 各エンジニアと Engineering Manager の 1-1

必要に応じて臨時の Zoom ミーティングを作成します。コンプライアンスで許可される範囲で、これらのミーティングはプライベートストリーミングするか、録画[^1]して [GitLab Unfiltered プレイリスト](https://www.youtube.com/playlist?list=PL05JrBw4t0KqC5FfUVPyndvLvTWifWbfB)にアップロードしてください。Slack は永続的ではないため、各コールの結果は Issue などの永続的な場所で共有してください。

[^1]: 録画ルールの例外は、1-1 のコール、プロジェクト外の業務についてのディスカッション、参加者が録画を望まない場合、FedRAMP コンプライアンスが録画を許可しない場合です。これらの例外があっても、プロジェクトのディスカッションの結果は Issue トラッカーなどの永続的な場所に記録してください。

### GitLab グループ階層 {#gitlab-group-hierarchy}

[GitLab グループ](https://docs.gitlab.com/ee/user/group/#groups)を使用して、US PubSec プロジェクトに取り組むチームメンバーを整理します：

1. `@gitlab-dedicated/uspubsec` は US PubSec のすべての常任チームメンバーを含み、オンボーディング時に追加されます。チーム全体に関係する情報の場合にのみ、このグループにメンションしてください。
1. `@gitlab-dedicated/uspubsec/reviewers` は、常任チームメンバー、外部請負業者、他チームから一時的に参加しているチームメンバー、その他のマージ権限を持たない人のためのグループです。たとえば `/assign_reviewer @gitlab-dedicated/uspubsec/reviewers` を使用して、このグループに初期レビューを依頼してください。
1. `@gitlab-dedicated/uspubsec/maintainers` は、常任チームメンバーのみのためのグループです。[CODEOWNERS 承認ルール](https://docs.gitlab.com/ee/user/project/codeowners/#code-owners)を通じてマージ権限を持ちます。チームメンバーは、[Dedicated Maintainer Training](/handbook/engineering/infrastructure-platforms/gitlab-dedicated/#maintainer-training)を完了した後、`reviewers` から `maintainers` へ移行します。

### プロジェクト管理 {#project-management}

エピックの構造や[ステータス更新](/handbook/engineering/infrastructure-platforms/gitlab-dedicated/#status-updates)を含め、[Dedicated Group のプロジェクト管理プロセス](/handbook/engineering/infrastructure-platforms/gitlab-dedicated/#project-management)に従います。US PubSec については、次のとおりです：

- [GitLab US Public Sector Services エピック](https://gitlab.com/groups/gitlab-com/gl-infra/-/epics/876)は、US PubSec のすべての作業に関する唯一の情報源です。その説明に現在のステータスを記載します。
- [US PubSec Issue ボード](https://gitlab.com/gitlab-com/gl-infra/gitlab-dedicated/team/-/boards/4964764?label_name[]=group%3A%3AUS%20PubSec)は、チームが取り組んでいる Issue を表示します。
- カンバン方式で作業します。エンジニアは、ボードで優先順位が付けられた Issue を自分に割り当て、Dedicated の[ワークフローラベル](/handbook/engineering/infrastructure-platforms/gitlab-dedicated/#workflow-labels)で進捗を追跡します。

## リソース {#resources}

- [GitLab Dedicated for Government](/handbook/engineering/infrastructure-platforms/gitlab-dedicated/government/)のプロダクトページ
- [GitLab US Public Sector Services エピック](https://gitlab.com/groups/gitlab-com/gl-infra/-/epics/876)
- [CompSecGov US PubSec グループ](https://compsecgov.gitlab-dedicated.us/gitlab-dedicated-us-public-sector/)
- [GitLab Dedicated チームの Issue トラッカー](https://gitlab.com/gitlab-com/gl-infra/gitlab-dedicated/team/-/issues)
- [Dedicated Group](/handbook/engineering/infrastructure-platforms/gitlab-dedicated/)のハンドブックページ
