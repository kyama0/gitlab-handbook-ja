---
title: "セキュリティインシデントコミュニケーション計画"
description: " "
weight: 40
controlled_document: true
upstream_path: /handbook/security/security-operations/sirt/security-incident-communication-plan/
upstream_sha: 1e195b58b9f249ff10bd0e705106c320fee86141
translated_at: "2026-05-09T16:00:00Z"
translator: claude
stale: false
---

{{< label name="Visibility: Audit" color="#E24329" >}}

## 目的

GitLab は、GitLab.com 上であるかセルフマネージドインスタンスであるかを問わず、お客様の情報のセキュリティを極めて真剣に受け止めています。GitLab の [透明性の価値](/handbook/values/#transparency) に沿って、セキュリティインシデントについて明確かつ迅速にコミュニケーションすることを信条としています。

## スコープ

本コミュニケーションレスポンス計画は、セキュリティインシデントについて GitLab が社内ステークホルダーおよび社外顧客に通知し、エンゲージする際の、誰が、何を、いつ、どのようにを示します。**本行動計画は、[GitLab のリスクスコアリングマトリクス](/handbook/security/security-assurance/security-risk/storm-program/#risk-factors-and-risk-scoring) で概説される「高 (high)」以上の影響を持つセキュリティイベントの戦略とアプローチをカバーします。**

## 役割と責任

| 役割 | 責任 |
| ----- |------------|
| GitLab チームメンバー | 本手続きの要件に従う責任 |
| SIRT | 本手続きの実装および実行の責任 |
| SIRT 経営層 (Code Owners) | 本手続きの重要な変更および例外の承認の責任 |

## 手続き

## インシデントとは

GitLab セキュリティチームは、GitLab セキュリティ、利用規約、その他の関連ポリシーの違反または違反の脅威を、セキュリティインシデントとして特定します。インシデントの特定方法の詳細については、[GitLab セキュリティインシデントレスポンスガイド](/handbook/security/security-operations/sirt/sec-incident-response/#incident-identification) で確認できます。

### 💁 コーポレートインシデント対応

外部コミュニケーションのガイダンスが必要な Support または Infrastructure 管理のインシデントについては、[コーポレートコミュニケーションインシデントレスポンス計画](/handbook/marketing/corporate-communications/incident-communications-plan/#defining-the-scopeseverity-of-a-potential-incident) を参照し、Slack の #external-comms 経由でそのチームにエンゲージしてください。

### 👷 インフラインシデント対応

Infrastructure インシデントについては、[インフラインシデント管理およびコミュニケーションプロセス](/handbook/engineering/infrastructure-platforms/incident-management/#communication) に従ってください。

## インシデントの範囲/重大度の定義

`セキュリティエンジニアオンコール` は、セキュリティインシデントの範囲、[重大度](/handbook/security/security-operations/sirt/sec-incident-response/#incident-severity) 、[潜在的影響](/handbook/security/security-assurance/security-risk/storm-program/#determining-the-impact-of-a-threat-event) を判断します。潜在的影響が判断されたら、適切な内部および外部コミュニケーション戦略の実施を開始する必要があります。

### セキュリティインシデントにおける役割と責任

#### セキュリティチームの役割と責任

| 役割 | 責任 |
| ----- |------------ |
| **セキュリティエンジニアオンコール (SEOC):** | これはオンコール中の Security Operations Engineer です。最初に行動し、検証し、重大度と範囲を判断するプロセスを開始する個人です。 |
| **セキュリティインシデントマネージャーオンコール (SIMOC):** | これは、インシデント解決が複数の関係者間の調整を必要とする場合にエンゲージされる Security Engineering Manager です。SIMOC はインシデントレスポンスチームの戦術的リーダーであり、通常技術作業を行うためにはエンゲージされません。SIMOC は、インシデントの解決に必要なスキル、アクセス、情報を持つ個人をエンゲージしてインシデントチームを編成します。SIMOC の焦点は、インシデントを解決に向けて進め、ステークホルダーに情報を提供し、SecCMOC の業務を遂行することです。 |
| **セキュリティコミュニケーションマネージャーオンコール (SecCMOC):** | これは、本セキュリティインシデントレスポンス計画に従って外部コミュニケーションの取り組みを調整し、すべての関係者がアクティベートされ、最新情報を得て、整合がとれていることを確認するために、拡張された GitLab チーム間で連携する Security Incident Manager On-Call (SIMOC)、Security Incident Commander、または Security Assurance Engineer です。 |
| **Security External Communications:** | この機能は、インシデントレスポンスチームと連携し、外部のオーディエンス (顧客、メディア、より広範な業界を含む) 向けのメッセージのレビューと改善について助言します。この役割は、必要なレビューやメッセージ展開のためにマーケティングチームと連絡を取ります。この機能は、[セキュリティインシデント外部レスポンス Issue テンプレート](https://gitlab.com/gitlab-com/gl-security/security-communications/communications/-/blob/master/.gitlab/issue_templates/security-external-incident-or-event-response-template.md) を使用して **初期ドラフトコンテンツが開発された後** にエンゲージする必要があります。 |

### CMOC 責任の詳細

セキュリティ実務者およびインシデントレスポンスエンジニアとして、私たちのセキュリティアシュアランスおよびセキュリティオペレーションのチームとエンジニアは、初期メッセージを作成し、`CMOC` / `コミュニケーションマネージャーオンコール` の役割を担うのに最適な立場にあります。

**各チームが任命する `CMOC` は、以下の DRI です:**

- [セキュリティインシデント外部レスポンス Issue テンプレート](https://gitlab.com/gitlab-com/gl-security/security-communications/communications/-/blob/master/.gitlab/issue_templates/security-external-incident-or-event-response-template.md) を開設し、潜在的なステークホルダーと貢献者をタグ付けする
- 初期メッセージのドラフト作成
- 様々なコンテンツの開発と展開の追跡
- 貢献、レビュー、承認のための主要ステークホルダー (サポート、セキュリティ/SIRT リーダーシップ、法務など) の特定
- 様々な関係者 (サポート、セキュリティ/SIRT リーダーシップ、法務など) からの承認のルーティングと取得
- 関連するインシデントレスポンス Slack チャンネルおよび Issue でのコミュニケーション開発の進捗について、ステークホルダーに最新情報を提供し、情報を共有する

### Security External Communications 機能の責任の詳細

**`Security External Communications 機能` は、以下の DRI です:**

- `CMOC` から **提供された** 初期ドラフトの編集と改善
- 必要な適切なチャンネルとコミュニケーション形式に関する助言
- 外部使用準備が整っていることを確認するための、最終メッセージの承認ポイントとしての役割
- 追加のレビューおよび/またはメッセージのニーズ (公開/メディアステートメント) のために、PR とコーポレートコミュニケーションズとの連携
- PR (メディアステートメント)、コンテンツマーケティング (ブログ記事)、マーケティングオペレーションズチーム (メールレスポンス) との連携を通じてメッセージを展開する
- 認識と使用のため、Slack チャンネル (`#developer-relations`、`#social_media_action`、`#sales`、`#security_discuss`、`#customer-success`) に最終コミュニケーション資料を投稿する
  - `Support manager on call` がサポートチームの認識を管理する

## 拡張チームの役割、責任、および連絡先

- **マーケティングオペレーションズ:** セキュリティインシデントで影響を受ける関係者にインシデント関連メールを送信する責任。このグループは [マーケティング緊急レスポンスプロセス](/handbook/marketing/emergency-response/#marketing-emergency-response) を確立しており、`incident_communications` テンプレートを使用して [インシデントコミュニケーションリクエストを作成](https://gitlab.com/gitlab-com/marketing/marketing-operations/-/issues/new?issuable_template=incident_communications) し、割り当てられたタイムゾーンの `coverage owner` にタグ付けし、Slack の #mktgops チャンネルに Issue を投稿することでエンゲージされます。
  - Marketing Ops は MailGun または Marketo を通じてメールを送信できます。このグループは提供された情報に基づいて、配信に最適なプラットフォームを判断します。カスタム配信リストを作成する必要がある場合、データチームの関与が必要となる場合があります。

- **サポートチーム:** セキュリティエンジニアオンコールおよびコミュニケーションマネージャーオンコールから提供される背景情報と準備された応答を使用して、私たちのサポートチームはセキュリティインシデントに起因する顧客コミュニケーションをトリアージし応答します。Slack の `#support_leadership` 経由でオンコールマネージャーに連絡します。緊急の場合は Slack で `/pd-support-manager` コマンドを使用して [`Support Manager On-call` をページング](/handbook/support/on-call/#engaging-the-on-call-manager) します。このグループがセキュリティインシデントとイベントを早期に認識できるよう、彼らは security-external-incident-or-event-response テンプレートで FYI として自動タグ付けされます。

- **デベロッパーリレーションズ:** ソーシャルチャンネル経由で顧客や一般大衆に応答する必要がある場合があるため、公開資料がリリースされる前にエンゲージする必要があります。彼らのインタラクションを支援するために、準備された応答や FAQ を提供する必要があります。このグループには `#developer-relations` または任意の Slack チャンネルで `@devrel` をピングして連絡します。このグループがセキュリティインシデントとイベントを早期に認識できるよう、彼らは `security-external-incident-or-event-response` テンプレートで FYI として自動タグ付けされます。

- **指定承認者 (Designated Approvers):** これは、セキュリティインシデント用に開発された各コミュニケーションについてレビュアーおよび承認者として行動する個人のグループです。Security、Support、Customer Success、Legal、Corporate Communications、Investor Relations の代表者が含まれます。

## 内部コミュニケーション

セキュリティインシデントは、高プレッシャー、高ストレスの状況になり得ます。誰もが調査、範囲、軽減等の周辺の詳細を理解しようとしています。セキュリティ、インフラストラクチャ、エンジニアリング、オペレーションチーム間のステークホルダーが情報を得てエンゲージされていることを確実にすることは、セキュリティインシデントマネージャーオンコールの主な責任の 1 つです。`セキュリティインシデントマネージャーオンコール` は、インシデントの技術的詳細に深入りせず、以下を含む高レベルのステータス更新を提供することに焦点を当てるべきです。

- 現在のリスク
- 影響を受けたユーザー (一部、多数、すべて?)
- 影響を受けたサービス (本番、エンタープライズアプリ、その他)
- イベントのタイムライン
- 講じられた軽減ステップ
- インシデントの現在のステータス
- 次のステップ

## GitLab チームメンバーへのコミュニケーション

チームメンバーに対するサービス停止が発生するたびに、CMOC は停止と関連 Issue に関する詳細を #whats-happening-at-gitlab に投稿し、関連するチャンネルにクロスポストする必要があります。これが gitlab.com に影響する本番インシデントなのか、組織で使用されているサービスなのかを特定することが重要です。

### Slack のインシデントレスポンスチャンネル

進行中で継続的なコミュニケーションが必要なインシデントの場合、`セキュリティエンジニアオンコール` がインシデントレスポンス Slack チャンネルを設定します。すべてのセキュリティインシデントチームメンバーと拡張 POC を招待する必要があります。

### 主要な内部ステークホルダーへのエンゲージ (いつ/どのように)

| グループおよび連絡先 | エンゲージのタイミング | エンゲージする DRI | どの頻度で | どのチャンネルで |
| ------ | ------ | ------ | ------ | ------ |
| VP of Security Operations | S1 重大度評価が決定された時点で S1 インシデントについて即時 | `SIMOC/CMOC` | 30 分間隔 (別途要求がない限り) | インシデントレスポンス Slack チャンネルで |
| CISO | S1 重大度評価が決定された時点で S1 インシデントについて即時 | `VP of Security Operations` | 30 分間隔 (別途要求がない限り) | Slack ダイレクトメッセージ |
| Broader e-group | データ侵害または悪用の証拠のある RCE の場合即時 | `CISO` | 30 分間隔 (別途要求がない限り) | `#e-group` Slack チャンネル |
| Sr. Director of Corporate Marketing および Director of Corporate Communications | インシデントが公に報告された場合、または公表する規制要件がある場合は即時。それ以外の場合は、完全な影響と関連リスクが判断され次第。 | `SIMOC/CMOC` | 継続 | インシデントレスポンス Slack チャンネルで |
| Legal | GitLab EE 顧客が影響を受ける場合、またはセキュリティインシデントが以下を含む (これらに限られない) データ侵害を含む場合: <br> PII / 個人データの露出 <br> プライベートプロジェクト <br> 財務情報 | `CISO` | 継続 | インシデントレスポンス Slack チャンネル |
| `指定主要承認者 (Designated key approvers)` | 顧客とのコミュニケーションが必要だと判明し次第 | `CMOC` | 継続 | インシデントレスポンス Slack チャンネル |

## 外部コミュニケーション

外部コミュニケーションは、セキュリティインシデントの範囲と影響が判断され次第、簡潔で明確な言葉でできるだけ早く実施する必要があります。最初の外部コミュニケーションは影響を受けた当事者向けです。例: 影響を受けた顧客とサードパーティ ([JiHu](/handbook/finance/jihu-support/) を含む) 、製品、サービスのプロバイダー、またはインシデントに関連したシステムコンポーネントのサプライチェーンに関わる組織。規制当局はインシデントの範囲、規制および法的要件に基づいて連絡されます。

### 顧客メッセージのターンアラウンド

外部レスポンスが必要と判断された場合、SIRT チームは S1 重大度の脆弱性について、6 時間以内に最終的な顧客コミュニケーションを開発し、承認を得て、配信または公開することを目指す必要があります。

## セキュリティインシデント外部コミュニケーションのプロセス

1. 外部声明を出す必要がある、または何らかの方法で顧客とコミュニケーションする必要があると判断したら、[セキュリティインシデント外部レスポンス Issue テンプレートを使用して新しい Issue を開設](https://gitlab.com/gitlab-com/gl-security/security-communications/communications/-/blob/master/.gitlab/issue_templates/security-external-incident-or-event-response-template.md) します。この Issue は、`SIMOC/SecCMOC` がコンテンツ開発、レビュー、承認を追跡するために使用します。
1. 新しいセキュリティインシデント外部レスポンス Issue は `SecCMOC` に割り当てる必要があります。
1. 「この Issue を開設する際に CMOC が取るアクション」セクションのすべてのアクションが完了し、初期ドラフトが揃ったら、初回レビューおよびコミュニケーション形式/チャンネルに関する相談のため `Corporate Communications team` を Issue に追加します (詳細は下記)。

## コミュニケーションのレビュー、承認、展開プロセス

1. 様々な提案されたコミュニケーションが準備できたら、SecCMOC は関連するセキュリティインシデント外部レスポンス Issue とセキュリティインシデント Slack チャンネルに `Corporate Communications team` を追加し、初回レビューと編集を行います。
1. 並行して、私たちの `Security External Communications` チームが適切なマーケティングチーム (PR、Marketing Ops、Content チーム) にサポートをエンゲージし、並行マーケティング支援とメッセージ展開の取り組みのために関連 Issue の作成を開始します。
1. `Security External Communications` がレビューを完了したら、`SecCMOC` は以下に概説するように、コラボレーションとレビューのために `指定主要承認者` にコミュニケーションドキュメントをルーティングする必要があります。すべての承認が達成されなければならない時刻 (目標展開時刻は 6 時間で、情報収集とコミュニケーションドラフト作成のための 1〜2 時間、ブログを公開しメールを展開するための 1 時間の展開時間を含みます) を必ず明記してください。この時点で、`指定主要承認者` はドキュメントをレビューし必要な編集を行うために 30 分の時間があります。レビューはこの 30 分の時間制限内に提供されるか、代理が任命される必要があります。
1. すべてのフィードバックと編集が `SecCMOC` によってまとめられたら、最終レビューと承認のために Slack で `指定主要承認者` をタグ付けする必要があります。このレビューと承認プロセスは 30 分以内で完了する必要があり、承認者は作業中のインシデントレスポンスコミュニケーション Google ドキュメントの一番上の `承認マトリクス` で承認をマークする必要があります。
1. コミュニケーションが最終確定したら、私たちの `Security External Communications` が適切なマーケティングおよびコミュニケーションチームと協力して、適切な外部および内部のオーディエンスにコミュニケーションを展開します。
1. 私たちの `Security External Communications` は、すべての最終資料と関連する展開の詳細が関連するコミュニケーション Issue に記載されていることを確認し、Issue をクローズします。

### 指定主要承認者 (Designated key approvers) {#designated-key-approvers}

私たちの目的は、GitLab ユーザーに明確で正確な情報をできるだけ早く提供することです。S1 (重大) 脆弱性の場合、承認され展開されたコミュニケーションの目標ターンアラウンド時間は 6 時間です。この加速されたレスポンスウィンドウのため、私たちのセキュリティチーム (SecCMOC または Incident Commander) は、レビューおよび承認プロセスの開始時に承認の目標カットオフ時刻 (コミュニケーションドラフト開始から 6 時間) をアナウンスし、必要な場合、4 つの必須グループ (Security、Legal、Customer Success、Investor Relations) のうち少なくとも 2 つが承認した時点で、その時に進めます。詳細は下記を参照してください。

| グループ | **ブログ** | **顧客メール** | **サポートチーム向け FAQ** | **メディアレスポンス** | **ソーシャル/フォーラムレスポンス** |
|------------------------------|------|----------------|------------------------|----------------|-----------------------|
| `VP of Security Operations` | 承認者 | 承認者 | 承認者 | Security に帰属する引用がある場合は承認者、それ以外は FYI | FYI のみ |
| `Senior Director of Legal, Privacy and Product` | 承認者 | 承認者 | 承認者 | 承認者 | 承認者 |
| `VP Customer Success` | 承認者 | 承認者 | FYI のみ | 承認者 | FYI のみ |
| [Support Manager on Call](/handbook/security/security-operations/sirt/security-incident-communication-plan/#extended-team-roles-responsibilities-and-points-of-contact) | FYI のみ | FYI のみ | FYI のみ  | FYI のみ | FYI のみ |
| `Director of Corp Comms` | FYI のみ | FYI のみ | FYI のみ | DRI/貢献者 | FYI のみ |
| `VP of Investor Relations` | 承認者 | 承認者 | FYI のみ | 承認者 | FYI のみ |

{{% alert title="**注**" color="primary" %}}
連絡先の詳細については [このドキュメント](https://docs.google.com/document/d/1aGHdYmAVSkSJZdGgSPLkY1MFitJ78YtCy4voXYMF0pI/edit?tab=t.0#bookmark=id.lwl12zqkac7z) を参照してください。
{{% /alert %}}

#### 指定バックアップ承認者 (主要レビュアーが利用できないか応答しない場合にエンゲージ)

**- 「必須」承認者については、少なくとも 2 名の指定バックアップ承認者が必要です。**

- Security: `VP of Security Operations` が利用できない場合、`VP of Security` の 1 人が承認できます。利用できない場合は `VP of Engineering` に移ります。
- Legal: `Senior Director of Legal, Privacy and Product` が承認できます。利用できない場合は `Legal Counsel`、次に `CLO` に移ります。
- Customer Success: `VP of Customer Success` が承認できます。利用できない場合、`Snr Director, Customer Success Managers`、次に `Director of Customer Success, Public Sector` に移ります。
- Support Team: `Support Manager on call` が承認できます。利用できない場合、[Support Senior Leadership](https://gitlab.com/groups/gitlab-com/support/managers/senior/-/group_members?with_inherited_permissions=exclude) のメンバーに移り、必要に応じて [Support Managers](https://gitlab.com/groups/gitlab-com/support/managers/-/group_members?with_inherited_permissions=exclude) に移ります。
- Corporate Comms: `Director of Corp Comms` が承認できます。利用できない場合、`Manager, Public Relations` に移り、必要に応じて `Manager, Corp Comms` に移ります。
- Investor Relations: `VP of Investor Relations` が承認できます。利用できない場合、`Chief Financial Officer`、次にバックアップ承認のために `VP Finance and Business Technology` に移ります。

{{% alert title="**注**" color="primary" %}}
連絡先の詳細については [この機密 Issue](https://gitlab.com/gitlab-com/gl-security/security-communications/communications/-/issues/440#designated-back-up-approvers) を参照してください。
{{% /alert %}}

### `指定主要承認者` の合意済みレスポンス時間

**`指定主要承認者` のレスポンス時間: 30 分**

私たちのクライシスコムズ会社と GitLab のコーポレートインシデントレスポンス計画に従い、各承認者は、バックアップをエンゲージする前にコミュニケーションをレビューし応答する (フィードバックや編集を提供する) ために 30 分の時間があります。承認者からのフィードバックを受領、レビュー、統合した後、承認者からの最終レビューが要求され、各承認者は承認を提供するための 30 分のレスポンス時間があります。コミュニケーションの確立された展開時刻が近づいており、特定のチームのレビューと承認が 30 分以内に達成されない場合、4 つの必須グループ (Security、Legal、Customer Success、Investor Relations) のうち少なくとも 2 つから承認を得た時点で、最終確定と展開に進みます。詳細は下記を参照してください。

### `指定主要承認者` への緊急連絡

- `指定主要承認者` への連絡方法の詳細については [この機密 Issue](https://gitlab.com/gitlab-com/gl-security/security-communications/communications/-/issues/440#contacting-approvers) を参照してください。

### 指定バックアップ承認者へのエンゲージ

30 分が経過しても SecCMOC が特定の `指定主要承認者` から連絡を受けていない場合、その個人のすべての `指定バックアップ承認者` をインシデント関連の Slack チャンネルおよび Issue でエンゲージするように移行します。コミュニケーションの確立された展開時刻が近づいており、特定のチームのレビューと承認が 30 分以内に達成されない場合、4 つの必須グループ (Security、Legal、Customer Success、Investor Relations) のうち少なくとも 2 つから承認を得た時点で、最終確定と展開に進みます。

## コミュニケーションチャンネルと形式

インシデントまたはイベントで使用されるコミュニケーションチャンネルと形式は様々ですが、お客様へのレスポンスの必要性と透明性の価値に整合し、お客様への潜在的なリスクと露出のバランスが取れている必要があります。

**よく使用されるコミュニケーションの形式とチャンネル:**

- 私たちの最も一般的な顧客レスポンスの形式は、影響を受けた顧客への直接のメールコミュニケーションです。
- より深い掘り下げレスポンスが必要な場合、またはセキュリティインシデントやイベントについてより広範なカバレッジを確保するために、緊急にブログ記事が開発される場合があります。
- 検討すべき [形式とチャンネルの詳細な解説](/handbook/security/security-operations/sirt/security-incident-communication-plan/#potential-channels-for-use-in-a-security-incident) を参照してください
- [JiHu](/handbook/finance/jihu-support/) へのコミュニケーションは、JiHu Slack ワークスペース内の [#security-vulnerability](https://gitlab-jh.slack.com/archives/C039R937PAN) チャンネル経由で行われる必要があります。GitLab チームメンバーの Dominic Couture、James Ritchey、Jerome Ng、Mek Stittri、Kevin Chu がこのチャンネルにアクセスできます。

## 役立つテンプレートとランブック

- 👉 私たちの [`Security external incident or event response template`](https://gitlab.com/gitlab-com/gl-security/security-communications/communications/-/blob/master/.gitlab/issue_templates/security-external-incident-or-event-response-template.md) (これは内部テンプレートです) には、各種コミュニケーションを開始するために使用できるテンプレート (コピーを作成する) へのリンクがあります。

- 📝 セキュリティインシデントコミュニケーションランブックは [こちら](https://gitlab.com/gitlab-com/gl-security/security-communications/communications) (内部のみ) にあります。

## 外部対応チームの準備と支援

念頭に置くべき重要な点は、**外部にコミュニケーションを行うときは常に、顧客および/またはコミュニティに影響する問題について外部コミュニケーションを行うことを、サポート、顧客、ソーシャル、デベロッパーリレーションズチームに通知する必要がある** ということです。

このため、各インシデントレスポンス (直接メール、メディアステートメント、ブログ記事等) には、以下が付随する必要があります。

- ソーシャルメディアステートメント
- サポートおよび顧客対応チーム向け FAQ

## GitLab.com 上の進行中のライブインシデント

GitLab.com 上の進行中のライブサイトインシデントについては、`SIMOC/CMOC` が status.io 経由で [https://status.gitlab.com/](https://status.gitlab.com/) と [@GitLabStatus](https://twitter.com/GitLabStatus) Twitter ハンドルに更新を提供します。

## 外部声明およびその他の公的な公式コミュニケーション

インシデントに関連する範囲、影響、リスクに応じて、私たちのコーポレートコミュニケーションズおよびマーケティングチームは、追加のアウトリーチが必要と判断する場合があります。セキュリティインシデントに関する公式声明は、GitLab の Director of Corporate Communications、VP of Corporate Marketing、CMO、または VP of Security のいずれかが行います。

## その他の役立つ情報

### セキュリティインシデントで使用される潜在的なチャンネル {#potential-channels-for-use-in-a-security-incident}

| コミュニケーションチャンネル | 目的/メッセージ | 追加詳細 |
| ------ | ------ | ------ |
| インシデントレスポンス顧客メール | インシデントの背景、レスポンス、潜在的影響、フォローアップアクション、質問先を提供します。 | SIMOC/CMOC がドラフトし、Support、Legal、External Comms、Security の DRI がレビューします。[incident-response@gitlab.com](mailto:incident-response@gitlab.com) から送信されます。**プレーンテキスト** で **リンク追跡なし** にする必要があります。同伴するブログ記事が公開される場合は、ブログをリンクする必要があります。 |
| 軽減およびレスポンスブログ記事 | 背景、GitLab のレスポンス、お客様に必要な行動の詳細を提供します。 | より長い詳細なレスポンスが必要と判断された場合に開発されます。ブログ記事のコンテンツは `SIMOC/CMOC` から提供され、[指定主要承認者](/handbook/security/security-operations/sirt/security-incident-communication-plan/#designated-key-approvers) によりレビューおよび承認されます。コンテンツチームがコピー編集とマージを行います。**注: レスポンスブログ記事に関するコラボレーションと作業は、Slack の関連するインシデントレスポンスチャンネルで行われる必要があります。** |
| GitLab セキュリティリリースアラート/メール | お客様に必要な行動を示し、関連する軽減およびレスポンスブログにリンクします。 | オプトインのセキュリティ通知配信リストに送信されるメール。関連するブログ記事が公開されている場合、このメールにリンクが含まれている必要があります。`Security External Communications` または `Marketing Ops` が準備して送信し、Marketo を通じて Security Notices distro に送信されます。ユーザーは [コミュニケーション設定センター](https://about.gitlab.com/company/preference-center/) を通じてこの配信リストにサインアップできます。 |
| 顧客 Frequently Asked Questions (FAQ) | 早期の顧客の質問と応答、または予想される質問と応答のリスト。 | `SIMOC/CMOC` および Support DRI が作成。適切な [Support グループ](/handbook/support#channels) に提供されます。 |
| ソーシャルメディア投稿 | 関連するブログ記事の配布のため、X (旧 Twitter) の問題への私たちのレスポンスを詳述します。 | `Security External Communications` がインシデントレスポンス Slack チャンネルで `@devrel` をエンゲージします。Community Expert にツイートテキストとブログリンクを提供します。継続的な認識と監視のため、Slack で `@social` を使用して GitLab ソーシャルメディアチームにも警告する必要があります。 |

### 顧客コミュニケーションを開発・レビューするための同期ミーティング

適切な場合、貢献、レビュー、承認のための主要なステークホルダーは、Zoom セッションで同期的に集まり、顧客コミュニケーション (メール、FAQ、ブログ記事等) を作成および微調整する必要があります。この場合の同期ミーティングは、Security、カスタマーサポートおよびそれ以外のステークホルダーからの主要なインプットによりコミュニケーションの開発を加速し、迅速にレビュー段階に移行することを可能にします。これらの Zoom セッションは録画され、関連するセキュリティインシデント外部レスポンス Issue にリンクされます。

## 例外

本手続きの例外は、[情報セキュリティポリシー例外管理プロセス](/handbook/security/controlled-document-procedure/#exceptions) に従って追跡されます。

## 参考文献

- [Security Incident Response Guide](/handbook/security/security-operations/sirt/sec-incident-response/)
- [Security Communications Runbooks](https://gitlab.com/gitlab-com/gl-security/runbooks/-/tree/master/communications) (内部)
- [Incident Communications Plan](/handbook/security/security-operations/sirt/security-incident-communication-plan/)
- [Marketing Emergency Response process](/handbook/marketing/emergency-response/)

## セキュリティインシデントコミュニケーションのレビューと承認のためのサンプル Issue テンプレート (公開アクセス可能)

この [サンプル Issue テンプレート](https://gitlab.com/gitlab-com/gl-security/security-communications/communications-templates/-/blob/main/sample-incident-communications-template.md) は、重大なセキュリティインシデントを取り巻くコミュニケーションについてルーティング、レビュー、承認の追跡に使用できます。これはサンプルのため、組織の構造、プロセス、ニーズに合わせて調整/修正/カスタマイズする必要があります。各組織は異なり、重大なセキュリティインシデントは様々であるため、GitLab はテンプレートの使用に関する結果を保証することはできません。
