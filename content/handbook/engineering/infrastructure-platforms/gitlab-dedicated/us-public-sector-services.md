---
title: US Public Sector Services チーム
upstream_path: /handbook/engineering/infrastructure-platforms/gitlab-dedicated/us-public-sector-services/
upstream_sha: 0e6f01390a34aeb6706ace17d8d3c50e74e82d0d
translated_at: "2026-04-28T22:31:40Z"
translator: claude
stale: false
lastmod: "2026-02-24T10:45:49-07:00"
---

## ミッション

GitLab US Public Sector Services チームのミッションは、完全にマネージドされたシングルテナントの GitLab 環境を作成することです。これは GitLab Dedicated プラットフォームを通じて提供され、連邦・州・地方レベルの米国政府機関、並びに機密性の高いワークロードを扱う請負業者、教育機関、その他の米国カスタマーの特定の規制およびコンプライアンス要件に対応するために特化して構築されています。カスタマーテナントのインストールに対する手動操作を排除し、カスタマーテナントが The One DevOps Platform のパワーを最大限に引き出すことに集中できるようにするために開発されています。

## ビジョン

US Public Sector Services グループはカスタマー対応チームであり、チームメンバーは高レベルのインフラ自動化と、GitLab Dedicated for US Government プラットフォームとのカスタマーインタラクションの実現に注力しています。

チームのミッションは以下の通りです:

- [Federal Risk and Authorization Management Program（FedRAMP）](https://www.fedramp.gov/)の要件を満たすかそれを超えるクラウドインフラを構築する
- 大量のシングルテナント GitLab サイトをプロビジョニングする 100% 自動化されたシステムを開発する
- 人間の介入なしにメンテナンスタスクを自動化する
- 中央の可観測性スタック、およびカスタマーテナントごとの可観測性スタックを作成・管理する
- カスタマーポータル（Switchboard）を提供し、管理操作をカスタマーテナントに公開する

## パフォーマンス指標

チームのパフォーマンス指標はまだ完全には定義されていません。まず**プロビジョニング SLO** を検討し、その後 [DORA 4 メトリクス](https://cloud.google.com/blog/products/devops-sre/using-the-four-keys-to-measure-your-devops-performance)に続く可能性があります。

## チームメンバー


<p class="my-3 text-sm text-gray-600 italic">チームメンバー情報は <a href="https://handbook.gitlab.com/handbook/engineering/infrastructure-platforms/gitlab-dedicated/us-public-sector-services/#team-members" rel="external noopener">原文 (英語)</a> を参照してください。</p>


## 私たちとの連携方法

GitLab US Public Sector Services チームと連携するには:

- カスタマーサポート固有の問題の場合は[インバウンダリー RFH](https://compsecgov.gitlab-dedicated.us/gitlab-dedicated-us-public-sector/customer-support/-/issues/new?issuable_template=request-for-help) を作成し、GDGEOC にアサインする。
- GitLab Dedicated チームの Issue トラッカーで[一般的な Issue を作成する](https://gitlab.com/gitlab-com/gl-infra/gitlab-dedicated/team/-/work_items/new?issuable_template=uspubsec_operations)。Issue に `group::US PubSec` ラベルを付ける
- Issue を作成する際、誰かを `@` メンションする必要はありません
- 注意を引きたい場合は、[以下のグループ階層](#gitlab-group-hierarchy)で定義されているチーム固有のハンドルを使用してください
- Slack チャンネル
  - GitLab US Public Sector 固有の質問は [#g_dedicated-us-pubsec](https://gitlab.slack.com/archives/C03R5837WCV) で見つけることができます
    - `@dedicated-uspubsec-team` Slack グループは、チーム全体にタグ付けするために任意の内部チャンネルで使用できます。
  - Dedicated ステージ全体に関連する Issue は [#g_dedicated-team](https://gitlab.slack.com/archives/C025LECQY0M) で提起できます
  - Dedicated グループ内の他のチームには、チームワークのディスカッション用の独自の作業チャンネルがあります:
    - [#g_dedicated-environment-automation-team](https://gitlab.slack.com/archives/C074L0W77V0)
    - [#g_dedicated-switchboard-team](https://gitlab.slack.com/archives/C04DG7DR1LG)

## 作業の進め方

### ミーティングと定例コール

私たちは[プロジェクト管理セクション](#project-management)で説明されているように、プロジェクト Issue トラッカー内で非同期的に作業することを好みます。

チームには定期的な同期コールのセットがあります:

- `チームコール` — このコールでは、チームメンバーの日常業務に関する重要な情報を共有し、同期的なディスカッションが必要なプロジェクト項目を議論します
- 個々のコントリビューターとエンジニアリングマネージャーの 1 対 1

個人間の GitLab Dedicated 作業について議論するための臨時 Zoom ミーティングは必要に応じて作成されます。
これらのミーティングはプライベートストリーミングするか、コンプライアンスの許容範囲内で録画[^1]され、[GitLab Unfiltered プレイリスト](https://www.youtube.com/playlist?list=PL05JrBw4t0KqC5FfUVPyndvLvTWifWbfB)に関連性と許可に応じてアップロードされることが期待されています。コールの結果は永続的な場所に共有されます（Slack は永続的ではありません）。チームが成長するにつれて特に重要です。なぜなら、初期段階で行われた決定は、チームが大きくなった後期段階で問い直されることになるからです。

[^1]: 録画ルールの例外: 1 対 1 のコール、プロジェクト外の業務に関するディスカッション、録画に不快を感じる当事者がいる場合、または FedRAMP コンプライアンスにより録画できない場合。ただし例外があっても、プロジェクト関連のディスカッションの結果は、メインの Issue トラッカーなどの永続的な場所に記録する必要があります。

### GitLab グループ階層 {#gitlab-group-hierarchy}

私たちは [GitLab グループ](https://docs.gitlab.com/ee/user/group/#groups)を使用して、GitLab Dedicated プロジェクトに取り組むチームメンバーを論理的に整理しています。
グループは以下のユースケースをカバーしています:

1. GitLab US Public Sector Services グループメンバーシップ: `@gitlab-dedicated/uspubsec`
    - GitLab Dedicated US PubSec チームのすべての正式メンバーは、オンボーディングの一部としてこの GitLab グループへのアクセスを得る必要があります
    - グループメンションは、GitLab Dedicated US PubSec チームのすべてのメンバーに関連する情報を共有する状況でのみ使用してください
2. 個々のチームの GitLab Dedicated グループには、`maintainers` と `reviewers` の 2 つの追加サブグループがあります。例: `@gitlab-dedicated/uspubsec/maintainers`
    - `reviewers` GitLab グループへのアクセスは、正式メンバー、外部請負業者、借入メンバーなどに付与されます。この GitLab グループタイプは、マージ権限のないユーザーを区別するために使用されます。初期レビューはこのグループへクイックアクションを使用してリクエストします。例: `/assign_reviewer @gitlab-dedicated/uspubsec/reviewers`
    - `maintainers` GitLab グループは正式メンバーのみに付与されます。このグループはマージ権限を持ち、[CODEOWNERS 承認ルール](https://docs.gitlab.com/ee/user/project/codeowners/#code-owners)を通じてアクセスが付与されます
      - `reviewers` から `maintainers` グループへの移行は、[Dedicated メンテナートレーニング](/handbook/engineering/infrastructure-platforms/gitlab-dedicated/#maintainer-training)の成功裏な完了によって定義されます

### コラボレーションガイド

私たちのチームは GitLab US Public Sector Services の作業を追跡するために 2 つの公式 Issue トラッカーを使用して協力しています。

### 1. CompSecGov（セキュアテナント）

**リンク:** https://compsecgov.gitlab-dedicated.us/gitlab-dedicated-us-public-sector/
**ラベル:** `group::US PubSec`

| 属性 | 詳細 |
|------|------|
| **目的** | カスタマーの機密データと FedRAMP 準拠の情報 |
| **アクセス** | US PubSec エンジニアチーム、US PubSec プロダクトマネジメント、セキュリティコンプライアンス、セキュリティチーム、サポート、パブリックセクターフィールドチームメンバー（カスタマーアクセスなし） |
| **アクセス要件** | [FedRAMP オンボーディングとシチズン検証](https://gitlab.com/gitlab-com/gl-security/security-assurance/fedramp/fedramp-certification/-/blob/main/.gitlab/issue_templates/FedRAMP_Onboarding-Current_Employees.md) |
| **オーナー** | エンジニアリング / プロダクトマネジメント |
| **対応 SLA** | Issue/コメントのアカウントチームへの**対応**（インシデントや RFH を除く）は 24 時間（祝日/週末を除く） |

**ユースケース:**

- セキュリティに関わるカスタマー情報
- コンプライアンスドキュメント
- カスタマー固有の詳細を含む内部計画
- RFH（Request for Help）
- インシデント
- トライアル
- カスタマーオンボーディング
- アカウントチームのセルフサービスアクセスポイント

### 2. Dedicated チームトラッカー

**リンク:** https://gitlab.com/gitlab-com/gl-infra/gitlab-dedicated/team/-/issues
**ラベル:** `group::US PubSec`

| 属性 | 詳細 |
|------|------|
| **目的** | 内部計画と機能開発 |
| **アクセス** | GitLab 内部チームのみ（カスタマーアクセスなし）。他の Dedicated チームと共有 |
| **オーナー** | プロダクトマネジメント / エンジニアリング |

**ユースケース:**

- スプリント計画とロードマップ
- 機能開発（必要に応じてコードネームを使用）
- Grand Review 項目
- アカウントチームのセルフサービスアクセスポイント
- 機能リクエスト
- マイグレーション計画

> 注意: 特定カスタマー向けの追加コラボレーション Issue トラッカーは、フィールドチーム（CSM/SA）が所有・運営することがあります。US Pubsec PM/エンジニアリングチームの SSOT として機能するのは、この 2 つの公式 Issue トラッカーのみです

### Slack チャンネル

私たちは Slack でコラボレーションしています。各チャンネルの目的を理解するためのガイドです

| チャンネル名 | 目的 |
|--------------|------|
| **dedicated-for-gov-field** | dedicated for gov について議論するプライベートチャンネル。カスタマーのパブリックセクター情報を保護するためにプライベートです。メンバーシップはフィールドの US Pubsec メンバー、Dedicated for Gov R&D スタッフ、セキュリティ、コンプライアンス、サポートなど、プロダクトの質問に回答する人々に限定されています |
| **g_dedicated-us-pubsec** | パブリックチャンネル。一般的なエンジニアリングのディスカッションに使用してください。 |
| **dedicated-for-gov-stable** | プライベートチャンネル。dedicated for gov 安定ワーキンググループのメンバー用。 |

### プロジェクト管理 {#project-management}

私たちは[エピック](https://docs.gitlab.com/ee/user/group/epics/)、[Issue](https://docs.gitlab.com/ee/user/project/issues/)、および [Issue ボード](https://docs.gitlab.com/ee/user/project/issue_board.html)を使用して作業を整理しており、これらは相互に補完し合っています。

異なる機能にわたる _すべての_ GitLab US Public Sector Services 作業の唯一の信頼できる情報源はトップレベルの [GitLab US Public Sector Services エピック](https://gitlab.com/groups/gitlab-com/gl-infra/-/epics/876)です。アクティブおよび予定されている作業の詳細については、そのエピックを参照してください。チームが取り組んでいる具体的な Issue を確認するには、チームの作業の全体的な [Issue ボード](https://gitlab.com/gitlab-com/gl-infra/gitlab-dedicated/team/-/boards/4964764?label_name[]=team%3A%3AUS%20PubSec)を参照してください。

#### エピック階層

[サブエピック](https://docs.gitlab.com/ee/topics/plan_and_track.html#hierarchies-with-epics)はトップレベルエピックの下に作成され、作業を特定のイニシアチブやプロジェクトマイルストーンに向けた整理されたリストの Issue に論理的に分割します。

必要に応じて、プロジェクト追跡のために Issue をさらに分割するため、既存のエピック階層内に追加のサブエピックを作成することができます。

1. サブエピックは、記載されている項目をデリバリーするために必要なタスクをグループ化します
2. サブエピックはロードマップの項目を表し、特定のフェーズでデリバリーされます
3. サブエピックは複数ヶ月にまたがることができますが、終了日は追加されたロードマップフェーズの「予想完了日」と一致する必要があります

エピックに加えて、[マイルストーン](https://docs.gitlab.com/ee/user/project/milestones/)は、複数のエピックにまたがる Issue をターゲットのマイルストーン日と関連付けるプロジェクト追跡ツールとして使用できます。マイルストーンは Issue ボードでフィルタリングでき、チームがアクションを取るべき現在の優先 Issue を単一画面で表示できます。

#### エピックオーナー

各エピックにはプロジェクトのデリバリーに責任を持つ単一の DRI がいます。各エピックの DRI はエピック構造ごとの各エピックの説明の上部に記載されています。

#### エピックオーナーの責任

DRI は以下を行う必要があります:

1. 他の人と協力してボードを通じて Issue を進める
2. エピックが[エピック構造](/handbook/engineering/infrastructure-platforms/gitlab-dedicated/#epic-structure)に記載された基準を満たしていることを確認する
3. 以下の[ステータス更新プロセス](/handbook/engineering/infrastructure-platforms/gitlab-dedicated/#status-updates)に従って DRI のエピックのエピック説明に更新を提供する

#### エピック構造

各エピックと子サブエピックには以下を含める必要があります:

**説明**

1. このエピックに責任を持つ **DRI**。
2. エピックを理解しようとする人にコンテキストを提供するための問題提起を含む**背景**。
3. エピックの具体的な目標のための**終了基準**。
4. **ステータス yyyy-mm-dd** は説明の最後の見出しである必要があります。
    1. これにより、エピックに関心を持つ人がすべてのコメントや Issue を読まなくても最新のステータスを確認できます。
    2. この見出しはトップレベルエピックのステータス情報を自動生成するために使用されます。

**エピックメタデータ**

1. **開始日**はプロジェクト開始時に実際の開始日に更新され、予想開始日に設定されます。
2. **期限**は予想終了日に設定されます。

ラベルは[エピックラベルセクション](#epic-structure)で説明されています。

#### Issue ボード

[Issue ボード](https://docs.gitlab.com/ee/user/project/issue_board.html)はエピックやマイルストーンの全体的なステータスを追跡するために使用されます。

##### US Public Sector Services Issue ボードへのアクセス

1. [Dedicated Issue トラッカー](https://gitlab.com/gitlab-com/gl-infra/gitlab-dedicated/team)プロジェクトにアクセスします。
2. 左のナビゲーションメニューを使用して、**Issues** セクションにカーソルを合わせて **Boards** を選択します
3. 左上のドロップダウンメニュー（**Search Filter** の横）を使用して、表示したいエピックまたはマイルストーンに関連する特定のボードを選択します。表示したいボードの名前がわかる場合は、ドロップダウン検索ボックスに入力できます。
4. 選択すると、Issue ボードには提供されたフィルター（例: マイルストーン、エピック、ラベルなど）に基づく Issue のリスト、およびさまざまな列（**Lists** とも呼ばれる）が含まれたカンバンレイアウトが表示されます。US Public Sector Services チームはラベルを主な List フィルターとして使用しています。これらの Issue ボードがどのように作成・フィルタリングされているかについては以下のセクションを参照してください。

> 注意: 時間ブロックのプロジェクト作業に使用される Issue ボードは、簡潔さを維持するために完了後に廃止する必要があります。

### 実行

チームはカンバン方式で運営されています。Issue はカンバンボードで優先順位付けされ、自己割り当てされます。私たちはスコープ付きの[ワークフローラベル](/handbook/engineering/infrastructure-platforms/gitlab-dedicated/#workflow-labels)を活用して、作業のさまざまな段階を追跡します。

### ステータス更新/プロセス

ステータス更新とステータス更新プロセスの詳細については、[ステージレベルのステータス更新ページセクション](/handbook/engineering/infrastructure-platforms/gitlab-dedicated/#status-updates)を参照してください

このチームのすべての作業のステータスは、トップレベルの [GitLab US Public Sector Services エピック](https://gitlab.com/groups/gitlab-com/gl-infra/-/epics/876)の説明で管理されており、一目で確認できます。

#### レポーティング

私たちはトップクロスファンクショナルイニシアチブの要件を満たすために GitLab Dedicated のステータスに関するレポートを提供します。
