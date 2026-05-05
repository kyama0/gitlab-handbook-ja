---
title: オンコールプロセスとポリシー - Tier 2
upstream_path: /handbook/engineering/infrastructure-platforms/incident-management/on-call/tier-2/
upstream_sha: 0e6f01390a34aeb6706ace17d8d3c50e74e82d0d
translated_at: "2026-04-28T00:00:00Z"
translator: claude
stale: false
---

Tier 2 ローテーションとは、人間がチームメンバーをサポートのためにページングするかどうかを判断して対応するオンコールローテーションを指します。

## スペシャリストのオンコール（Tier 2 SME）

Tier 2 SME オンコールプログラムは、専門的なサポートの第2層を設けることでインシデント対応を強化します。スペシャリスト（SME）がドメイン固有の知識を提供し、複雑なインシデントをより迅速に解決し、MTTR（平均復旧時間）を改善し、サービス信頼性に対するオーナーシップと説明責任を高めます。

このプログラムは 2025 年に GitLab に導入され、専門的なドメイン知識がインシデント対応を改善する領域に対して 24x7 カバレッジの提供を目標としています。実際には、多くのチームがこのレベルのカバレッジを提供できる体制を整えていません。そのため、これらのギャップを把握しチームがこのカバレッジレベルを達成できるよう支援方法を学ぶためのパイロットプログラムから開始しました。

## Tier 2 へのエスカレーション基準

以下の場合に Tier 2 チームにエスカレーションします:

- インシデントが特定サービスの深いドメイン専門知識を必要とする場合
- EOC が問題領域を特定したが、専門的なサポートが必要な場合
- パフォーマンス問題または障害が特定のサブシステムに局在している場合

## エスカレーションの方法

Tier 2 チームにページングするには:

1. Slack で `/inc escalate` コマンドを使用するか、インシデント UI の右サイドバーのエスカレートボタンをクリックします
2. 「Oncall team」ドロップダウンメニューから適切なチームを選択します
3. 問題と必要なサポートを明確に説明するメッセージを提供します

## アクティブな Tier 2 ローテーション

現在アクティブな Tier 2 ローテーションの一覧を以下に示します。

### Gitaly

- ローテーションリーダー: John Cai
- カバレッジ: 24x5 部分的（2時間のギャップあり）
- スケジュール: [schedule](https://app.incident.io/gitlab/on-call/schedules/01JJWAE08T9WDE8T6D4VZPBNXE)
- エスカレーション履歴リンク: [escalations](https://app.incident.io/gitlab/on-call/escalations?escalation_path%5Bone_of%5D=01JJWB07RXAG02RXYR4QR47J9E)
- [詳細情報](/handbook/engineering/infrastructure-platforms/tenant-scale/gitaly/#on-call-rotation)

**専門領域:**

- Git リポジトリのストレージ、アクセス、レプリケーションの問題
- Gitaly サービスのパフォーマンスとノード障害
- リポジトリの破損やデータ整合性の問題
- Git 操作（clone, fetch, push）の失敗

**エスカレーション基準:**

- Git 操作での高いエラーレート
- 複数のプロジェクトに影響するリポジトリアクセス障害
- Gitaly ノードまたはクラスターの問題

---

### データベース運用（DBO）

**専門領域:**

- PostgreSQL のパフォーマンス、レプリケーション、フェイルオーバー
- クエリパフォーマンスの問題、デッドロック、コネクションプールの問題
- デプロイをブロックするデータベースマイグレーション
- PgBouncer とデータベースキャパシティの問題

**エスカレーション基準:**

- データベースパフォーマンスの低下またはレプリケーションラグ
- デプロイをブロックするマイグレーションの失敗
- コネクションプールの飽和
- アプリケーションパフォーマンスに影響する遅いクエリ

**カバレッジ:** ベストエフォート - 24x5（月曜〜金曜）

---

### AI Powered

- ローテーションリーダー: Martin Wortschack
- カバレッジ: 24x5
- スケジュール: [schedule](https://app.incident.io/gitlab/on-call/schedules/01K22BJ3V6C41NW8RJ881B08XZ)
- エスカレーション履歴リンク: [escalation](https://app.incident.io/gitlab/on-call/escalations?escalation_path%5Bone_of%5D=01K22CAST6CK8Y4DVN7ET8YQZX)

**専門領域:**

- AI Gateway と Duo 機能の可用性
- モデルサービングインフラと AI 機能のパフォーマンス
- トークン使用量、レート制限、AI プロバイダー統合

**エスカレーション基準:**

- AI 機能が利用不可または低下している場合
- AI サービスからの高いエラーレート
- モデルサービングまたは AI Gateway の接続問題

---

### DevOps

- ローテーションリーダー: [オンコール担当者を確認](https://app.incident.io/gitlab/on-call/schedules/01K611ZT9YX2PSA8WAMEP6A66G)（フォールバック: Michelle Gill）
- カバレッジ: 24x5
- スケジュール: [schedule](https://app.incident.io/gitlab/on-call/schedules/01K611MG8T5CW874Q5JZER3H0Z)
- エスカレーション履歴リンク: [escalation](https://app.incident.io/gitlab/on-call/escalations?escalation_path%5Bone_of%5D=01K6P0Q3D6B7AYV0JT41DP0VME)
- ローテーション交代用 Slack チャンネル: [`#tier-2-devops-rotation-swaps`](https://gitlab.enterprise.slack.com/archives/C09LLF79AK0)
- 無応答時のエスカレーション: [`#tier-2-devops-rotation-swaps`](https://gitlab.enterprise.slack.com/archives/C09LLF79AK0) で応答しなかったオンコールチームメンバーの EM または SEM/Director を `@mention` して追加サポートを要請します。リーダーシップが応答しない場合は、[`#tier-2-devops-rotation-swaps`](https://gitlab.enterprise.slack.com/archives/C09LLF79AK0) で `@here + msg` を使用して他の利用可能なエンジニアに協力を求めます。

DevOps は Rails モノリスの一部である機能グループの名称です。
以下のいずれかの機能でサポートが必要な場合に連絡してください。

**DevOps Tier 2 オンコールに参加しているチーム:**

CI Platform, Code Review, Container Registry, Environments, Import, Knowledge, Package Registry, Pipeline Authoring, Pipeline Execution, Product Planning, Project Management, Source Code

**DevOps Tier 2 オンコールがカバーするカテゴリ/サービス:**

Fleet Visibility, Design Management, Environments, Deployments, Release Management, Importers, Migration, Direct Transfer, Package Registry, Virtual Registry, Dependency Proxy for Containers, Product Planning, Portfolio Management, Requirements Management, Project Management, Issue Tracking, Work Items, Boards, Workspaces, Source Code Management, Repository Management, Protected Branches, Workspaces Rails code, Container Registry Rails Code

**エスカレーション基準:**

一般的な Rails の問題ではエスカレーションしないでください。

- これらの機能のいずれかに原因があるアプリケーションレベルのエラー（500系、422系）
- このグループが責任を持つワーカーでの Sidekiq キューのバックログや処理失敗
- このグループに起因する Rails プロセスのメモリ問題
- このグループの機能に関連する障害が原因でロールバックが必要なアプリケーションデプロイの失敗

*注意: APAC カバレッジは APAC 時間帯に IMOC ローテーションを利用します*

---

### Runners Platform

- ローテーションリーダー: Kam Kyrala
- カバレッジ: ベストエフォート - 24x5（月曜〜金曜）
- スケジュール: [schedule](https://app.incident.io/gitlab/on-call/schedules/01K7HNBCW9EN2MMS4SHAJ5B2WF)
- エスカレーション履歴リンク: [escalations](https://app.incident.io/gitlab/on-call/escalations?escalation_path%5Bone_of%5D=01K7HSQ433CMD61V4RNS70BJ47)
- 主要 Slack チャンネル: #g_runners_platform

**専門領域:**

- ランナープラットフォームインフラと SaaS ランナーマネージャー
- ランナーに関連するジョブ実行の問題（プロビジョニング、起動、終了）
- ランナー登録、キャパシティ、スケジューリングの問題
- ランナーマネージャーサービスのパフォーマンスと接続性

**エスカレーション基準:**

- ランナーまたはランナーマネージャーに起因するジョブ実行に影響するインシデント
- ランナープロビジョニングの広範な失敗、ハング、予期しないタイムアウト
- 顧客に影響するランナーマネージャーのキャパシティ不足または飽和
- ランナープラットフォームの問題が原因と思われる繰り返しのジョブ失敗

---

### Fulfillment

- ローテーションリーダー: James Lopez
- カバレッジ: 24x5（月曜〜金曜、営業時間内）
- スケジュール: [schedule](https://app.incident.io/gitlab/on-call/schedules/01K99JAT82M1D5HB1MVXX79WHR)
- エスカレーション履歴リンク: [escalations](https://app.incident.io/gitlab/on-call/escalations?escalation_path%5Bone_of%5D=01K99K4HEXYB7Z7P21BTCY44BF)
- 主要 Slack チャンネル: #s_fulfillment_engineering
- [詳細情報](/handbook/engineering/development/fulfillment/#escalation-process-for-incidents-or-outages)

**専門領域:**

- CustomersDot アプリケーションと購入インフラ
- サブスクリプション管理、請求、プロビジョニングシステム
- 使用量課金フローと従量制料金
- ライセンス生成と検証
- Zuora 統合と注文処理
- カスタマーポータルとセルフサービスワークフロー

**エスカレーション基準:**

- 購入に影響する CustomersDot の障害または重大なエラー
- サブスクリプションプロビジョニングまたはライセンス生成の失敗
- 顧客に影響する請求システムの統合問題
- 購入またはサブスクリプションワークフローでの高いエラーレート

---

### Authn/Authz/Pipeline Security

- ローテーションリーダー: Adil Farrukh
- カバレッジ: 24x5（月曜〜金曜、APAC はベストエフォート）
- スケジュール: [schedule](https://app.incident.io/gitlab/on-call/schedules/01KBH1JNFC4M00T7KDJ4BCFRDD)
- エスカレーション履歴リンク: [escalations](https://app.incident.io/gitlab/on-call/escalations?escalation_path%5Bone_of%5D=01KBH1JNFC4M00T7KDJ4BCFRDD)
- 主要 Slack チャンネル: ##s_software-supply-chain-security（または #g_sscs_authentication, #g_sscs_authorization, #g_sscs_pipeline_security）
- [詳細情報](/handbook/engineering/development/sec/software-supply-chain-security/oncall/)

**専門領域:**

- 認証（SAML, LDAP, OAuth ログイン、PAT/PrAT/GrAT/CI_JOB_TOKEN などのアクセストークン）
- 認証（エンタープライズユーザー、サービスアカウント、Cloud Connector 認証）
- 認可（カスタムロール、CI_JOB_TOKEN/PAT の詳細な権限、ProjectAuthorizationWorker）
- パイプラインセキュリティ（ID トークンを使用した OIDC、シークレットマネージャー、外部シークレット統合、ビルド証明と Cosign 統合）

**エスカレーション基準:**

- GitLab.com へのログインまたは認証に影響するインシデント
- 権限更新ワーカーの Sidekiq 過負荷による深刻な障害を引き起こすインシデント
- エンジニアリングチームによる即時対応が必要な S2 以上の SIRT 問題
- GitLab.com の可用性を低下させているシークレットマネージャー、詳細な権限、または認証サービスへの最近の機能追加

---

### Build

- ローテーションリーダー: Denis Afonso
- カバレッジ: 24x5 部分的（1.5時間のギャップあり）
- スケジュール: [schedule](https://app.incident.io/gitlab/on-call/schedules/01KJ89WQ5WSB6653WHWJKT1X7T)
- エスカレーション履歴リンク: [escalations](https://app.incident.io/gitlab/on-call/escalations?escalation_path%5Bone_of%5D=01KMFRWXNERC7DZTM92GX81WAK)
- Slack チャンネル: #g_build
- [ランブック](https://runbooks.gitlab.com/pulp/)

**専門領域:**

- Pulp のパフォーマンスと可用性
- Pulp リポジトリとパッケージ管理
- Pulp の運用とメンテナンス

**エスカレーション基準:**

- Pulp が利用不可またはパフォーマンスが低下している場合
- Pulp での高いエラーレート
- 顧客が Pulp からパッケージをダウンロードできない場合

---

### EOC テクニカルエスカレーション

- ローテーションリーダー: TBD（暫定: Steve Abrams）
- カバレッジ: ベストエフォート - 24x7
- スケジュール: [schedule](https://app.incident.io/gitlab/on-call/schedules/01KPRF9XG0HAHM307QS2ZBWC4P?startTime=2026-04-20T00%3A00%3A00&timePeriodOption=two_weeks&calendarToggle=timeline)
- エスカレーション履歴リンク: [escalations](https://app.incident.io/gitlab/on-call/escalations?escalation_path%5Bone_of%5D=01KPRFDZVMB4DCFS0HV9228D33)

このローテーションはベストエフォートで薄いカバレッジのため、特に APAC 時間帯にはページへの応答が常にできるとは限りません。また、IMOC へのエスカレーションまたは [#infrastructure_platforms](https://gitlab.enterprise.slack.com/archives/C02D1HQRTKQ) への連絡によって追加の技術的サポートを求めることもできます。

**専門領域:**

- GitLab プラットフォームにおけるインフラの深い技術的理解

**エスカレーション基準:**

経験豊富な技術的判断が主な必要事項である場合にエスカレーションします。助けを求めることを恐れる必要はありませんが、エスカレーションは経験とシニア性が重要となる状況に絞るべきです。例えば:

- 標準的でない技術的な修復方法について、管理職の承認が必要かどうかに関わらず、実行前に経験ある目で確認することが有益な場合。特に一方通行の決断（取り消しができない決断）が顕著な例です。
- 分析が標準的な手法で行き詰まり、オンコールの同僚との連携後もさらなるアイデアや経験が必要な場合。
- S1 規模の大規模障害で、全てが燃え上がり、全員がパニックに陥っており、冷静な経験豊富な技術リーダーが必要な場合。

---

### Dev エスカレーション

- このオンコールプロセスは、Infrastructure チームによってエスカレーションされた GitLab.com の運用上の問題を対象としています。
- 開発チームは現在、スケジューリングとページングに PagerDuty または incident.io を使用していません。
- 平日のスケジュールは維持されておらず、**pagerslack** アプリが利用可能なエンジニアに協力を求めます。
- 週末のオンコールスケジュールは、この[スケジュールシート](https://docs.google.com/spreadsheets/d/10uI2GzqSvITdxC5djBo3RN34p8zFfxNASVnFlSh8faU/edit#gid=0)で管理されています。
- 問題は Infrastructure チームによって Slack チャンネル [#dev-escalation](https://gitlab.slack.com/messages/CLKLMSUR4) でエスカレーションされます。
- 平日は、pagerslack アプリが 2 分ごとに新しいエンジニアに通知し、6 回試みても応答がない場合、バックエンドエンジニアがいる全エンジニアリングマネージャーに通知して担当者を探します。
- 週末の最初の応答 SLO は 15 分です。最初の 5 分以内に応答がない場合、要請チームはスケジュールシートに記載されているエンジニアの電話番号に電話します。
- 開発エンジニアは 4 時間シフトで対応します。
- エンジニアリングマネージャーはスケジューリングコーディネーターとして月単位でシフトを担当します。
- GitLab.com 運用上の問題をエスカレーションする際は、[プロセスの説明とオンコールワークフロー](/handbook/engineering/workflow/development-processes/infra-dev-escalation/process/)を確認してください。
- エスカレーションプロセスの[一般情報](/handbook/engineering/workflow/development-processes/infra-dev-escalation/)の詳細も確認してください。

## カバレッジの期待値

- **24x5 カバレッジ**: 月曜 00:00 UTC〜金曜 23:59 UTC
- **応答 SLA**: カバレッジ時間内に 15 分
- **週末/祝日カバレッジ**: 重大なエスカレーションは IMOC と Infrastructure リーダーシップが担当

## パイロットプログラム

パイロットプログラムは通常の勤務時間を 24x5 カバレッジでカバーすることを目指しています。S1 および S2 インシデントの 90% が通常の勤務時間中に発生するため、パイロットは完全カバレッジに向けた最初のイテレーションとして許容可能と判断されました。

このプログラムにおける通常の勤務時間とは以下を意味します:

1. *できる限り通常の勤務時間に近い 8 時間*
2. *祝日または週末ではない*

メインのオンコールページに記載されているように、ローテーションリーダーはニーズに合った 8 時間サイクルを選択できます。推奨（UTC）は:

1. APAC 23:00 - 07:00
2. EMEA 07:00 - 15:00
3. AMER 15:00 - 23:00

これらの時間に自然に合わないチームメンバーがいる場合は、この状況をどのように管理するかについてはローテーションリーダーの裁量に任されています。カバレッジを提供することと、チームメンバーが意味ある形でオンコールに参加できるようにすることが重要です。柔軟性が必要な状況は常にあり、この柔軟性は双方向です。

### 祝日

ローテーションリーダーがローテーション内の全チームメンバーの祝日を把握することは非常に難しいです。祝日にオンコールが予定されている場合、カバレッジを見つけることはチームメンバー自身の責任です。

祝日に勤務することを希望するチームメンバーは、[祝日ポリシー](/handbook/people-group/time-off-and-absence/time-off-types/#overview-1)に従って祝日を別の日に振り替えることができます。これは任意の行動です。

例外:

1. オランダ - チームメンバーが割り当てられたシフトを担当できない場合、少なくとも 2 営業日前にローテーションリーダーに通知する必要があり、カバレッジを見つける責任はチームメンバーではなくローテーションリーダーにあります（Works Council との合意による）。

## Tier 2 ローテーションを設ける必要があるかどうかの判断方法

1. コンポーネントオーナーモデルを通じて追加された新しい機能やサービスは、少なくとも最初の 6 ヶ月間は 24x5 Tier 2 SME を設けるべきです。
2. 重大度に関わらず多数のインシデントを発生させる機能やサービス。
3. 頻繁なインシデントが評判に損害を与える可能性がある機能やサービス。
4. インシデントからの平均復旧時間が常に高い機能やサービス。

### この判断を支援するためにレビューできるメトリクス

1. インシデントのトレンド分析。[プロダクションインシデントトラッカー](https://gitlab.com/gitlab-com/gl-infra/production-engineering/-/issues?sort=created_date&state=opened&first_page_size=100)で `~incident` ラベルを検索し、グループで絞り込むことができます。
   1. インシデントの発生頻度を確認し、パターンがないか確認します。
   2. インシデントの重大度を考慮します。
2. インシデント解決時間。

## Tier 2 ローテーションの作成方法

Tier 2 ローテーションはスペシャリスト向けです。平均として、グループ外のエンジニアよりも自身の専門分野について詳しい必要があります。参加者がスペシャリストであることを確認するためのトレーニング資料の提供を検討してください。

[オンコールローテーションの設定方法に関する一般情報](_index.md#how-to-set-up-an-on-call-rotation)を参照してください。

[チームオンボーディングテンプレート](https://gitlab.com/gitlab-com/gl-infra/production-engineering/-/issues/new?description_template=onboarding-tier2-oncall)を使用して新しい Tier 2 ローテーションを設定してください。

作成中およびオンボーディング中のローテーションは、[オンコールローテーションオンボーディングボード](https://gitlab.com/groups/gitlab-com/-/boards/9981508?label_name%5B%5D=On%20Call%20Rotation)で確認できます。

## Tier 2 がページングされるのはどのような場合か

### Tier 1 EOC または IM からのリクエスト

#### エスカレーション基準

Tier 1 エンジニアオンコール（EOC）は初期トリアージを行い、Tier 2 SME にエスカレーションする前に利用可能なドキュメントを使用します。インシデントをサポートしているインシデントマネージャー（IM）からもページが開始される場合があります。

##### Tier 2 にエスカレーションする前に

Tier 1 は以下を行う必要があります:

1. 影響を受けている領域のランブックおよびプレイブックの全ての推奨事項に従う
2. 試みた解決策と結果をインシデント Issue に文書化する

###### リソースの場所

- [ランブック](https://gitlab.com/gitlab-com/runbooks/-/tree/master/docs)
- [プレイブック](https://internal.gitlab.com/handbook/engineering/tier2-oncall/playbooks/)

#### 重大度レベル別

- **S1/S2 インシデント**: Tier 1 チームがランブック、ドキュメント、その他のリソースを使用して独立して解決できない場合。その重大な性質から、ドメイン固有の専門知識が必要な場合、Tier 2 SME はこれらのインシデントでページされることを想定すべきです。

- **S3/S4 インシデント**: 通常、週末は Tier 2 SME へのエスカレーションは不要です。ただし、以下の特定の状況では Tier 1 が S3/S4 インシデントをエスカレーションすることがあります:
  - 顧客への影響が不明で、評価にドメイン専門知識が必要な場合
  - 問題がより高い重大度のインシデントに発展する可能性があるかどうかが不明な場合
  - 複数の低重大度インシデントが組み合わさり、より広範な影響を及ぼす可能性がある場合

- Tier 1 がサービスのエラーや異常な動作が顧客に影響するかどうかを判断するためにサポートが必要な場合、Tier 2 SME に相談することができます
