---
title: オンコールプロセスとポリシー - Tier 2
upstream_path: /handbook/engineering/infrastructure-platforms/incident-management/on-call/tier-2/
upstream_sha: "a15c0bfc1dd89fbbe4aff8969605eb60ab63f1ca"
translated_at: "2026-07-17T06:09:44+09:00"
translator: codex
stale: false
lastmod: "2026-07-15T15:06:40+02:00"
---

Tier 2 ローテーションは、サポートのためにチームメンバーをページするかを人間が判断するオンコールローテーションを指します。

## Subject Matter Experts オンコール (Tier 2 SME)

Tier-2 SME On-Call プログラムは、専門的なサポートの第二層を確立することで、インシデント対応を強化します。Subject Matter Experts (SME) は、複雑なインシデントをより速く解決し、MTTR (Mean Time To Recover) を改善し、サービスの信頼性に対するオーナーシップと説明責任を高めるためのドメイン固有の知識を提供します。

このプログラムは、専門的なドメイン知識がインシデント対応を改善する領域に対して 24x7 のカバレッジを提供することを目標として、2025 年に GitLab で導入されました。実際には、多くのチームはこのレベルのカバレッジを提供できるように構成されていません。そのため、これらのギャップを理解し、このレベルのカバレッジを達成するためにこれらのチームを支援する方法を学ぶために、まず Pilot Program を始めました。

## Tier 2 にエスカレーションするタイミング

以下の場合に Tier 2 チームにエスカレーションします:

- インシデントが特定のサービスに対する深いドメイン専門知識を必要とする
- EOC が問題領域を特定したが、専門的なアシスタンスが必要
- パフォーマンスの問題や停止が特定のサブシステムに限定されている

## エスカレーションの方法

Tier 2 チームをページするには:

1. Slack で `/inc escalate` コマンドを使うか、インシデント UI の右サイドバーでエスカレーションをクリックします
2. "Oncall team" ドロップダウンメニューから適切なチームを選択します
3. 問題と必要な支援を説明する明確なメッセージを提供します

## アクティブな Tier 2 ローテーション

現在アクティブな Tier 2 ローテーションのサマリーを以下に示します。

### Gitaly

- ローテーションリーダー: John Cai
- カバレッジ: 24x5（一部、2 時間のギャップあり）
- スケジュール: [schedule](https://app.incident.io/gitlab/on-call/schedules/01JJWAE08T9WDE8T6D4VZPBNXE)
- エスカレーション履歴リンク: [escalations](https://app.incident.io/gitlab/on-call/escalations?escalation_path%5Bone_of%5D=01JJWB07RXAG02RXYR4QR47J9E)
- [詳細情報](/handbook/engineering/infrastructure-platforms/tenant-scale/gitaly/#on-call-rotation)

**専門領域:**

- Git リポジトリのストレージ、アクセス、レプリケーションの問題
- Gitaly サービスのパフォーマンスとノード障害
- リポジトリの破損やデータ完全性に関する懸念
- Git 操作 (clone、fetch、push) の失敗

**エスカレーションのタイミング:**

- Git 操作の高いエラー率
- 複数のプロジェクトに影響するリポジトリアクセスの失敗
- Gitaly ノードまたはクラスタの問題

---

### AI Powered

- ローテーションリーダー: Martin Wortschack
- カバレッジ: 24x5
- スケジュール: [schedule](https://app.incident.io/gitlab/on-call/schedules/01K22BJ3V6C41NW8RJ881B08XZ)
- エスカレーション履歴リンク: [escalation](https://app.incident.io/gitlab/on-call/escalations?escalation_path%5Bone_of%5D=01K22CAST6CK8Y4DVN7ET8YQZX)

**専門領域:**

- AI Gateway と Duo 機能の可用性
- モデルサービングインフラストラクチャと AI 機能のパフォーマンス
- トークン使用、レート制限、AI プロバイダー統合

**エスカレーションのタイミング:**

- AI 機能が利用できないか劣化している
- AI サービスからの高いエラー率
- モデルサービングまたは AI Gateway 接続の問題

---

### DevOps

- ローテーションリーダー: [現在のオンコールを確認](https://app.incident.io/gitlab/on-call/schedules/01K611ZT9YX2PSA8WAMEP6A66G) (代替: Michelle Gill)
- カバレッジ: 24x5
- スケジュール: [schedule](https://app.incident.io/gitlab/on-call/schedules/01K611MG8T5CW874Q5JZER3H0Z)
- エスカレーション履歴リンク: [escalation](https://app.incident.io/gitlab/on-call/escalations?escalation_path%5Bone_of%5D=01K6P0Q3D6B7AYV0JT41DP0VME)
- ローテーション交換用 Slack チャンネル: [`#tier-2-devops-rotation-swaps`](https://gitlab.enterprise.slack.com/archives/C09LLF79AK0)
- 無応答時のエスカレーション: 応答しなかったオンコールチームメンバーの EM または SEM/Director を `@mention` し、追加サポートを依頼するために Slack チャンネル [`#tier-2-devops-rotation-swaps`](https://gitlab.enterprise.slack.com/archives/C09LLF79AK0) を使います。リーダーシップが応答しない場合は、別の利用可能なエンジニアの支援を求めるために [`#tier-2-devops-rotation-swaps`](https://gitlab.enterprise.slack.com/archives/C09LLF79AK0) で `@here + msg` を使います。

DevOps は、Rails モノリスの一部である機能群に付けられた名前です。
以下のいずれかの機能でサポートが必要な場合に連絡してください。

**DevOps Tier 2 On Call に代表されるチーム:**

CI Platform、Code Review、Container Registry、Environments、Import、Knowledge、Package Registry、Pipeline Authoring、Pipeline Execution、Product Planning、Project Management、Source Code

**DevOps Tier 2 oncall に代表されるカテゴリ／サービス:**

Fleet Visibility、Design Management、Environments、Deployments、Release Management、Importers、Migration、Direct Transfer、Package Registry、Virtual Registry、Dependency Proxy for Containers、Product Planning、Portfolio Management、Requirements Management、Project Management、Issue Tracking、Work Items、Boards、Workspaces、Source Code Management、Repository Management、Protected Branches、Workspaces Rails code、Container Registry Rails Code

**エスカレーションのタイミング:**

一般的な Rails の懸念事項についてエスカレーションしないでください。

- これらの機能の内部に原因があるアプリケーションレベルのエラー (500 系、422 系)。
- このグループの責任にあたるワーカーで、Sidekiq キューのバックログまたは処理失敗。
- このグループから発生する Rails プロセスのメモリ問題。
- このグループの機能に関連するロールバックを必要とするアプリケーションデプロイメントの失敗。

*注: APAC カバレッジは APAC 時間中に IMOC ローテーションを利用します*

---

### Runners Platform

- ローテーションリーダー: Kam Kyrala
- カバレッジ: ベストエフォート - 24x5 (月曜日〜金曜日)
- スケジュール: [schedule](https://app.incident.io/gitlab/on-call/schedules/01K7HNBCW9EN2MMS4SHAJ5B2WF)
- エスカレーション履歴リンク: [escalations](https://app.incident.io/gitlab/on-call/escalations?escalation_path%5Bone_of%5D=01K7HSQ433CMD61V4RNS70BJ47)
- 主な Slack チャンネル: #g_runners_platform

**専門領域:**

- Runner プラットフォームインフラストラクチャと SaaS runner マネージャー
- Runner に関連するジョブ実行の問題 (プロビジョニング、起動、ティアダウン)
- Runner の登録、キャパシティ、スケジューリングの懸念
- Runner マネージャーサービスのパフォーマンスと接続性

**エスカレーションのタイミング:**

- Runner または runner マネージャーに起因するジョブ実行に影響を与えるインシデント
- 広範囲な runner プロビジョニング失敗、ハング、または予期しないタイムアウト
- 顧客に影響する runner マネージャーのキャパシティ不足または飽和
- Runner プラットフォームの問題が原因と疑われるジョブの繰り返し失敗

---

### Fulfillment

- ローテーションリーダー: James Lopez
- カバレッジ: 24x5 (月曜日〜金曜日、営業時間)
- スケジュール: [schedule](https://app.incident.io/gitlab/on-call/schedules/01K99JAT82M1D5HB1MVXX79WHR)
- エスカレーション履歴リンク: [escalations](https://app.incident.io/gitlab/on-call/escalations?escalation_path%5Bone_of%5D=01K99K4HEXYB7Z7P21BTCY44BF)
- 主な Slack チャンネル: #s_fulfillment_engineering
- [詳細情報](/handbook/engineering/development/fulfillment/#escalation-process-for-incidents-or-outages)

**専門領域:**

- CustomersDot アプリケーションと購入インフラストラクチャ
- サブスクリプション管理、課金、プロビジョニングシステム
- 使用量課金フローと従量課金
- ライセンスの生成と検証
- Zuora 統合と注文処理
- 顧客ポータルとセルフサービスワークフロー

**エスカレーションのタイミング:**

- 購入に影響を与える CustomersDot の停止または重大なエラー
- サブスクリプションのプロビジョニングまたはライセンス生成の失敗
- 顧客に影響を与える課金システム統合の問題
- 購入またはサブスクリプションワークフローでの高いエラー率

---

### Authn/Authz/Pipeline Security

- ローテーションリーダー: Adil Farrukh
- カバレッジ: 24x5 (月曜日〜金曜日、APAC はベストエフォート)
- スケジュール: [schedule](https://app.incident.io/gitlab/on-call/schedules/01KBH1JNFC4M00T7KDJ4BCFRDD)
- エスカレーション履歴リンク: [escalations](https://app.incident.io/gitlab/on-call/escalations?escalation_path%5Bone_of%5D=01KBH1JNFC4M00T7KDJ4BCFRDD)
- 主な Slack チャンネル: ##s_software-supply-chain-security (または #g_sscs_authentication、#g_sscs_authorization、#g_sscs_pipeline_security)
- [詳細情報](/handbook/engineering/development/sec/software-supply-chain-security/oncall/)

**専門領域:**

- 認証 (SAML、LDAP、OAuth ログイン、PAT/PrAT/GrATs/CI_JOB_TOKENS などのアクセストークン)
- 認証 (Enterprise users、サービスアカウント、Cloud Connector 認証)
- 認可 (カスタムロール、CI_JOB_TOKENS/PAT 上の粒度の細かい権限、ProjectAuthorizationWorker)
- Pipeline Security (ID トークンによる OIDC、Secrets manager、External Secrets 統合、Build attestation と Cosign 統合)

**エスカレーションのタイミング:**

- GitLab.com へのログインまたは認証に影響を与えるインシデント
- 権限更新ワーカー上の sidekiq の過負荷による深刻な中断を引き起こすインシデント
- 問題を修復するためにエンジニアリングチームから即時のアクションを必要とする S2 以上の SIRT Issue。
- GitLab.com の可用性を劣化させている secrets manager、粒度の細かい権限、または認証サービスの最近の機能追加

---

### Build

- ローテーションリーダー: Denis Afonso
- カバレッジ: 24x5 一部 (1.5 時間のギャップ)
- スケジュール: [schedule](https://app.incident.io/gitlab/on-call/schedules/01KJ89WQ5WSB6653WHWJKT1X7T)
- エスカレーション履歴リンク: [escalations](https://app.incident.io/gitlab/on-call/escalations?escalation_path%5Bone_of%5D=01KMFRWXNERC7DZTM92GX81WAK)
- Slack チャンネル: #g_build
- [Runbooks](https://runbooks.gitlab.com/pulp/)

**専門領域:**

- Pulp のパフォーマンスと可用性
- Pulp リポジトリとパッケージ管理
- Pulp の運用と保守

**エスカレーションのタイミング:**

- Pulp が利用できないかパフォーマンスが劣化している
- Pulp で高いエラー率
- 顧客が Pulp からパッケージをダウンロードする際の問題

---

### Cells Routing and Topology

- ローテーションリーダー: David Leach
- カバレッジ: ベストエフォート
- スケジュール: [schedule](https://app.incident.io/gitlab/on-call/schedules/01KC50DS4EP0C6WV3SCJSPRE07)
- エスカレーション履歴リンク: TBD
- 主な Slack チャンネル: [`#g_cells_infrastructure`](https://gitlab.enterprise.slack.com/archives/g_cells_infrastructure)

**専門領域:**

- HTTP Router サービスの可用性とパフォーマンス
- Topology Service の可用性とパフォーマンス

**エスカレーションのタイミング:**

- HTTP Router サービスに影響を与えるインシデント
- Topology Service に影響を与えるインシデント

---

### Security Risk Management Stage

- ローテーションリーダー: AJ Biton
- カバレッジ: 24x5 (月曜日〜金曜日)、カバレッジギャップ 23:00-07:00 UTC、イスラエル従業員のため、時折金曜日に低カバレッジ
- スケジュール: [schedule](https://app.incident.io/gitlab/on-call/schedules/01KFB5JGPAR7JJ5CXG2BCBGPMF)
- エスカレーション履歴リンク: [escalations](https://app.incident.io/gitlab/on-call/escalations?escalation_path%5Bone_of%5D=01KFJX8MWG237NPR6HCAH38GJP)
- 主な Slack チャンネル: #s_srm

**専門領域:**

- Vulnerability Management ユーザー向け機能セット (Vulnerability Report、Dependency List、Security Dashboard)
- マージリクエストフロー内のセキュリティウィジェット
- セキュリティポリシー (Scan Execution Policies)
- セキュリティスキャン取り込みパイプライン

**エスカレーションのタイミング:**

- 脆弱性管理ページのいずれかの可用性に影響を与えるインシデント
- 問題を修復するためにエンジニアリングチームから即時のアクションを必要とする S2 以上の SIRT Issue。

**カバレッジ:** 24x5 (月曜日〜金曜日、07:00-23:00 UTC)

### Database Excellence

- ローテーションリーダー: Alex Ives
- カバレッジ: 24x5 (月曜日〜金曜日)、勤務時間内のみ
- ギャップ: 05:00 - 07:00 および 22:00 - 23:00
- スケジュール: [スケジュール](https://app.incident.io/gitlab/on-call/schedules/01KVWT063XW0P0YBDTMYHYQ12Q)
- Slack チャンネル: #s_database_excellence
- Slack ハンドル: @db-oncall

**専門領域:**

- PostgreSQL のパフォーマンス、レプリケーション、フェイルオーバー
- GitLab Load Balancer
- クエリパフォーマンスの問題、デッドロック、接続プールの問題
- デプロイを妨げるデータベースマイグレーション
- PgBouncer とデータベース容量の問題

**エスカレーションのタイミング:**

[データベース問題に関する支援の取得](/handbook/engineering/data-engineering/database-excellence/help/#step-1-what-kind-of-help-do-you-need)を参照してください。

### Dev Escalation

- このオンコールプロセスは、Infrastructure チームによってエスカレーションされる GitLab.com の運用問題のために設計されています。
- 開発チームは現在、スケジューリングおよびページングに PagerDuty または incident.io を使用していません。
- 平日のスケジュールは維持されておらず、**pagerslack** アプリが対応可能なエンジニアに支援を求める ping を送ります。
- 週末オンコールスケジュールは、この [スケジュールシート](https://docs.google.com/spreadsheets/d/10uI2GzqSvITdxC5djBo3RN34p8zFfxNASVnFlSh8faU/edit#gid=0) で維持されています。
- Issue は、Slack チャンネル [#dev-escalation](https://gitlab.slack.com/messages/CLKLMSUR4) で Infrastructure チームによってエスカレーションされます。
- 平日は、pagerslack アプリが 2 分ごとに新しいエンジニアに ping を送り、6 回の試行後に誰も応答しない場合は、誰かを見つけるためにバックエンドエンジニアを持つすべてのエンジニアリングマネージャーに ping を送ります。
- 週末は、初回応答 SLO は 15 分です。最初の 5 分以内に応答がない場合、リクエストするチームはスケジュールシート上のエンジニアの電話番号に電話します。
- 開発エンジニアは 4 時間のシフトを行います。
- エンジニアリングマネージャーは、スケジューリングコーディネーターとして月単位のシフトを行います。
- GitLab.com の運用問題をエスカレーションする際は、[プロセスの説明とオンコールワークフロー](/handbook/engineering/workflow/development-processes/infra-dev-escalation/process/) を確認してください。
- エスカレーションプロセスの [一般的な情報](/handbook/engineering/workflow/development-processes/infra-dev-escalation/) について、より詳細を確認してください。

## カバレッジの期待

- **24x5 カバレッジ**: 月曜日 00:00 UTC から金曜日 23:59 UTC まで
- **応答 SLA**: カバレッジ時間中 15 分
- **週末／祝日のカバレッジ**: 重要なエスカレーションは IMOC と Infrastructure Leadership に送られます

## Pilot プログラム

Pilot プログラムは、24x5 カバレッジで通常の労働時間をカバーすることを目指します。S1 および S2 インシデントの 90% が通常の労働時間中に発生するため、Pilot はフルカバレッジに向けた最初の許容できるイテレーションとして見なされました。

このプログラムの目的において、通常の労働時間とは:

1. *通常働く 8 時間にできるだけ近い*
2. *祝日や週末ではない*

メインのオンコールページに記載されているように、ローテーションリーダーは自分のニーズに合った 8 時間サイクルを選択できます。推奨は (UTC):

1. APAC 23:00 - 07:00
2. EMEA 07:00 - 15:00
3. AMER 15:00 - 23:00

これらの時間に自然に合致しないチームメンバーがいる場合、この状況をどう管理するかはローテーションリーダーの裁量に任されます。カバレッジを提供することと、チームメンバーが意味のある方法でオンコールに貢献できるようにすることが重要です。柔軟性が必要な状況は常にあり、この柔軟性は双方向に機能します。

### 祝日

ローテーションリーダーが、自分のローテーションのすべてのチームメンバーの祝日を知るのは非常に困難です。祝日にオンコールがスケジュールされている場合、カバーを見つけるのはチームメンバーの責任です。

チームメンバーが祝日に働きたい場合、[Public Holiday Policy](/handbook/people-group/time-off-and-absence/time-off-types/#overview-1) に従って祝日を別の日に振り替えることができます。これは自発的な行動です。

例外:

1. オランダ - チームメンバーが割り当てられたシフトを引き受けられない場合、少なくとも 2 営業日前にローテーションリーダーに通知する必要があり、カバーを見つける責任はローテーションリーダー (チームメンバーではない) にあります。(Works Council と合意済み)。

## 特定の Subject Matter Experts のセットが Tier 2 ローテーションを形成する必要があるかを判断する方法

1. Component Owner Model を通じて到着する新しい機能またはサービスは、最低 6 か月間 24x5 Tier 2 SME を持つべきです。
2. 重大度に関係なく、多くのインシデントを生成する機能またはサービス。
3. 頻繁なインシデントが評判の損失を引き起こす機能またはサービス。
4. インシデントからの平均回復時間が一貫して高い機能またはサービス。

### この決定を支援するためにレビューできるメトリクス

1. インシデントのトレンド分析。これは、[Production Incident tracker](https://gitlab.com/gitlab-com/gl-infra/production-engineering/-/issues?sort=created_date&state=opened&first_page_size=100) で `~incident` ラベルを検索し、グループによって検索を絞り込むことで行えます。
   1. インシデントの発生頻度を見て、何かパターンがあるかどうかを検討します。
   2. インシデントの重大度を考慮します。
2. インシデント解決時間。

## Tier 2 ローテーションの作成方法

Tier 2 ローテーションは subject matter expert 向けです。平均的に、グループ外のエンジニアよりも自分の専門分野についてより多くの知識を持つべきです。参加者が subject matter expert であることを確認するためのトレーニング資料の提供を検討してください。

[オンコールローテーションのセットアップ方法に関する一般情報](_index.md#how-to-set-up-an-on-call-rotation) を参照してください。

新しい Tier 2 ローテーションをセットアップするには、[team onboarding template](https://gitlab.com/gitlab-com/gl-infra/production-engineering/-/issues/new?description_template=onboarding-tier2-oncall) を使用してください。

作成およびオンボーディング中のローテーションは、[On Call Rotation Onboarding board](https://gitlab.com/groups/gitlab-com/-/boards/9981508?label_name%5B%5D=On%20Call%20Rotation) で確認できます。

## Tier 2 はいつページされるか?

### Tier 1 EOC または IM のリクエスト

#### エスカレーション基準

Tier-1 Engineer On-Call (EOC) は、Tier-2 SME にエスカレーションする前に、初期トリアージを行い、利用可能なドキュメントを使用します。インシデントをサポートしている Incident Manager (IM) によってもページが開始される場合があります。

##### Tier-2 にエスカレーションする前に

Tier-1 は以下を行う必要があります:

1. 影響を受ける領域のランブックとプレイブックのすべての推奨事項に従う
2. インシデント Issue で試した解決策とその結果を文書化する

###### リソースの場所

- [Runbooks](https://gitlab.com/gitlab-com/runbooks/-/tree/master/docs)
- [Playbooks](https://internal.gitlab.com/handbook/engineering/tier2-oncall/playbooks/)

#### 重大度レベル別

- **S1/S2 インシデント**: Tier-1 チームが runbook、ドキュメント、または他のソースを使って独立に解決できない場合。重大な性質のため、Tier-2 SME はドメイン固有の専門知識が必要な場合に、これらのインシデントでページされることを期待すべきです。

- **S3/S4 インシデント**: これらは通常、週末に Tier-2 SME へのエスカレーションを必要としません。ただし、Tier-1 は特定の状況で S3/S4 インシデントをエスカレーションする場合があります:
  - 顧客への影響が不明確で、評価するためにドメイン専門知識が必要な場合
  - 問題がより高い重大度のインシデントに発展する可能性があるかどうか不明な場合
  - 複数の低重大度のインシデントが組み合わさって、より広範な影響を作り出す可能性がある場合

- Tier-1 が、サービス内のエラーや異常な動作が顧客に影響するかどうかを判断するためにヘルプが必要な場合、Tier-2 SME と協議することができます
