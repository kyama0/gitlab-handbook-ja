---
title: トリアージローテーション
upstream_path: /handbook/security/product-security/security-platforms-architecture/application-security/runbooks/triage-rotation/
upstream_sha: d92acb119be844b83eb2f76de26d722afea570c3
translated_at: "2026-05-10T00:00:00Z"
translator: codex
stale: false
lastmod: "2026-04-14T10:54:24+02:00"
---

Application Security チームのメンバーは、Application Security チームへの受信リクエストの責任者 (DRI) としてアルファベット順に割り当てられます。通常は週次または隔週の期間です。

### 誰がローテーション中ですか?

自動化がローテーションのスケジューリングと割り当てを管理しています:

- ["今ローテーション中なのは誰か?"](https://gitlab.com/gitlab-com/gl-security/product-security/appsec/tooling/rotation-management/-/wikis/who-is-on-now)
- [Rotation Management の FAQ と README](https://gitlab.com/gitlab-com/gl-security/product-security/appsec/tooling/rotation-management)
- [祝日カバレッジ](/handbook/security/product-security/security-platforms-architecture/application-security/runbooks/holiday-coverage/)

### ローテーションは何ですか?

ローテーション中の Application Security チームメンバーへのリクエストについては、[AppSec トリアージダッシュボード](https://triage-dashboard-2c1ad6.gitlab.io/) が単一の信頼できる情報源です。

以下のローテーションが定義されています:

- (週次割り当て) Security Dashboard Review
  - [セキュリティダッシュボード](/handbook/security/product-security/security-platforms-architecture/application-security/runbooks/security-dashboard-review/) をベストエフォートのレベルでレビューする責任を負う
- (週次割り当て) トリアージローテーション (メンションと Issue)、優先順位順:
  - [AppSec トリアージダッシュボード](https://triage-dashboard-2c1ad6.gitlab.io/) で表示される [JiHu コントリビューションのピン](/handbook/finance/jihu-support/jihu-security-review-process/)に対する第一応答者
  - [AppSec トリアージダッシュボード](https://triage-dashboard-2c1ad6.gitlab.io/) にある、[機密 Issue を参照するマージリクエスト](#triaging-merge-requests-that-reference-confidential-issues)に対する第一応答者。大部分は自動的に処理されますが、ダッシュボードでまだオープンのアラートには対応が必要です。
  - 以下のグループエイリアスのメンションに対する第一応答者:
    - GitLab.com 上の @gitlab-com/gl-security/product-security/appsec。これらのメンションは [AppSec トリアージダッシュボード](https://triage-dashboard-2c1ad6.gitlab.io/) に "Ping Triage SLA" 項目として表示されます
      - PSIRT および/または SIRT は製品脆弱性または顧客のエクスプロイトに関する外部レポートに対応する責任があります。[トリアージローテーション中の PSIRT/SIRT への引き継ぎ](#hand-off-to-psirtsirt-during-triage-rotation) を参照してください
    - Slack の @appsec-team
  - カスタム SAST ボットからのメンションに対する第一応答者:
    - [`~appsec-sast-ping::unresolved` ラベル](https://gitlab.com/groups/gitlab-org/-/merge_requests?label_name%5B%5D=appsec-sast-ping%3A%3Aunresolved)を持つすべてのマージリクエストはレビューする必要があります。これらは [AppSec トリアージダッシュボード](https://triage-dashboard-2c1ad6.gitlab.io/) に "Custom SAST Reports" として表示されます
    - ボットの検出結果が解決されたら、`~appsec-sast-ping::resolved` ラベルを適用します。
    - ボットのすべての検出結果を含むダッシュボードは [こちら](https://gitlab.com/gitlab-com/gl-security/product-security/appsec/sast-custom-rules/-/issues/80) にあります。
  - [AppSec トリアージダッシュボード](https://triage-dashboard-2c1ad6.gitlab.io/) に表示される [依存関係レビュー](/handbook/security/product-security/security-platforms-architecture/application-security/runbooks/dependency-review-guidelines/) に対する第一応答者

- (~隔週割り当て) [セキュリティおよびパッチリリース](https://about.gitlab.com/releases/#patch-releases)のセキュリティエンジニア
- (隔週割り当て、Federal AppSec のみ) リリース認定
  - [リリース認定プロセス](/handbook/finance/jihu-support/release-certification/)の責任を負う
  - これは月次およびパッチリリースを含む、JiHu コントリビューションを含む可能性のあるすべてのリリースに適用されます
- (四半期割り当て) AppSec ブログ投稿

Application Security チームメンバーが割り当てられた週にコンフリクトがある場合、別のチームメンバーとローテーション週を交換できます。これは、休暇や特定のタスクに集中する必要があるなど、いかなる理由でも行えます。

スケジュールされたセキュリティリリースの責任を負う週には、チームメンバーは割り当てられるべきではありません。

その週の DRI として割り当てられていないチームメンバーも、可能な場合はレポートのトリアージを継続するべきです。特に重複をクローズしたり、すでにトリアージしたものに関連するレポートを処理したりするべきです。

チームメンバーは自身に割り当てられたレポートに対する責任は維持します。

### トリアージ SLA ポリシー

明確な SLA ターゲットがないと、リクエスト送信者はいつ応答を期待すべきか分からず、AppSec チームはどのリクエストが緊急になっているかを把握できません。これにより、非効率的なコミュニケーションパターン、フォローアップの重複、リクエストがどれくらい長く待っているかに基づいた作業の優先順位付けの困難が生じます。正式な SLA を確立することで、リクエスト送信者と AppSec チームの両方に透明性が生まれ、アドホックな割り込みが減り、必要に応じて明確なエスカレーションパスを提供しながらタイムリーな応答を保証します。

#### SLA ターゲット

| リソースタイプ | 応答 SLA | 解決 SLA |
|---------------|--------------|----------------|
| Issue        | 営業日 4 日 | N/A (Issue は応答のみ追跡される) |
| マージリクエスト| 営業日 2 日 | 営業日 5 日 |

#### Issue

**ボットの動作:**

誰かが Issue で AppSec (`@gitlab-com/gl-security/product-security/appsec` または `@gitlab-com/gl-security/appsec`) にピンを送った場合:

1. ボットは自動的に応答してピンを認識します
2. ラベルを追加します: `~AppSecResponseSLA::pinged`、`~AppSecWorkflow::new`、`~Application Security Team`
3. 4 日間の応答 SLA の追跡を開始します

**SLA 追跡タイムライン:**

- **2 日目**: ボットが `~AppSecResponseSLA::at-risk` 警告ラベルを追加し、リマインダーを投稿します
- **3 日目**: ボットが `~AppSecResponseSLA::near-breach` 警告ラベルを緊急通知とともに追加します
- **4 日目**: ボットが `~AppSecResponseSLA::breached` ラベルを追加し、リーダーシップにエスカレーションします
- **毎週**: ボットがブリーチ後 7 日ごとにリマインダーを投稿します

**実施事項:**

1. Issue の作業を開始するときに、これらのラベルのいずれかを適用します:
   - `~AppSecWorkflow::planned` - 後でスケジュールされている場合
   - `~AppSecWorkflow::in-progress` - 積極的に作業している場合
2. 完了したら、`~AppSecWorkflow::complete` を適用します
3. ボットがワークフローの更新に基づいて SLA 追跡ラベルを自動的に更新します

#### マージリクエスト

**ボットの動作:**

誰かがマージリクエストで AppSec にピンを送った場合:

1. ボットは自動的に応答してピンを認識します
2. ラベルを追加します: `~AppSecResponseSLA::pinged`、`~AppSecWorkflow::new`、`~Application Security Team`
3. 応答および解決の両方の SLA の追跡を開始します

##### 応答 SLA (営業日 2 日)

**タイムライン:**

- **1 日目**: ボットが `~AppSecResponseSLA::near-breach` 警告ラベルを追加します
- **2 日目**: ボットが `~AppSecResponseSLA::breached` 警告ラベルを追加し、リーダーシップにエスカレーションします
- **毎週**: ボットがブリーチ後 7 日ごとにリマインダーを投稿します

**応答 SLA を満たす方法:**

これらのワークフローラベルのいずれかを営業日 2 日以内に適用します:

- `~AppSecWorkflow::planned` - レビューして後でスケジュールした場合
- `~AppSecWorkflow::in-progress` - 積極的にレビューしている場合
- `~AppSecWorkflow::complete` - レビューがすでに完了している場合

これらのラベルのいずれかを適用すると:

- ボットが応答 SLA タイマーを停止します
- ボットが `~AppSecResponseSLA::completed-within-sla` を追加します（ブリーチされていない場合）
- `planned` または `in-progress` ラベルの場合、解決 SLA タイマーが開始されます

##### 解決 SLA (作業開始から営業日 5 日)

**タイムライン (`planned` または `in-progress` が適用されたときに開始):**

- **3 日目**: ボットが `~AppSecResolutionSLA::at-risk` 警告ラベルを追加します
- **4 日目**: ボットが `~AppSecResolutionSLA::near-breach` 警告ラベルを緊急通知とともに追加します
- **5 日目**: ボットが `~AppSecResolutionSLA::breached` ラベルを追加し、リーダーシップにエスカレーションします
- **毎週**: ボットがブリーチ後 7 日ごとにリマインダーを投稿します

**解決 SLA を満たす方法:**

レビューを完了し、作業開始から営業日 5 日以内に `~AppSecWorkflow::complete` を適用します。

complete ラベルを適用すると:

- ボットが解決 SLA タイマーを停止します
- ボットが `~AppSecResolutionSLA::completed-within-sla` を追加します（ブリーチされていない場合）
- すべての警告ラベル (`at-risk`、`near-breach`) が削除されます

**重要な注意事項:**

- 営業日には週末は含まれません
- ブリーチされたラベルはリーダーシップに対する可視性のために残ります
- `~AppSecSLA::ignore` を追加して項目を SLA 追跡から除外できます
- AppSec チームメンバーがチームにピンを送った場合、ボットはトリガーされません

### 機密 Issue を参照するマージリクエストのトリアージ {#triaging-merge-requests-that-reference-confidential-issues}

機密 Issue を参照するマージリクエストは、[AppSec トリアージダッシュボード](https://triage-dashboard-2c1ad6.gitlab.io/) に表示されます。アラートごとに、[Issue トラッカー](https://gitlab.com/gitlab-com/gl-security/product-security/appsec/triage-dashboard/-/issues?sort=created_date&state=opened&label_name%5B%5D=pmrcid-alert&label_name%5B%5D=AppSecWorkType%3A%3ATriageRotation) に work item が作成され、AI 評価がコメントとして投稿されます。自動化は高信頼度の判定を自動クローズし、`~pmrcid-auto-closed` ラベルを付けます。高信頼度の SAFE（依存関係のバージョン更新など）は対応不要です。高信頼度の UNSAFE は、内部ノートでマージリクエストの作成者に SIRT へのエスカレーションを通知し、マージリクエストが削除されると自動クローズします。自動化が正しく動作していることを確認するため、ベストエフォートで自動クローズ済みアラートを時折レビューしてください。手動トリアージが必要なアラートが多すぎる場合は、しきい値を調整できます。クローズ済みアラートはダッシュボードに表示されず、通常は人によるレビューを必要としません。

**ダッシュボードでまだオープンのアラートには対応が必要です。** AI 評価を開始点として使用します:

1. マージリクエストを公開できる場合はアラートをクローズします（work item に根拠をコメントし、`appsec-mrcid-automation` フィードバックラベルを付けます）。
1. 正規のセキュリティ Issue を参照し、参照先の機密 Issue に `~security-fix-in-public` ラベルが付いている場合（[AppSec チームメンバーが公開で修正することを承認した](/handbook/security/product-security/security-platforms-architecture/application-security/vulnerability-management#fixing-in-public)ことを示します）、承認したコメントへのリンクを貼るか、work item にラベルが追加されたことを記載します。公開できると判断した場合は、`~security-fix-in-public` を遡及的に付けることもできます。[デフォルトで無効なフィーチャーフラグの背後にある](/handbook/security/product-security/psirt/runbooks/hackerone-process/#triaging-features-behind-a-feature-flag)場合は、公開で修正できます。それ以外の場合は、Slack で `/security` を投稿し、[SIRT に MR を公開状態から削除してもらいます](/handbook/security/product-security/psirt/runbooks/unintended-vuln-disclosure/)（解決まで最大 24 時間待てない場合は、`Urgent - SEOC should be paged right away` オプションを使用します）。
1. オープンのアラートに `~"SIRT::Escalation"` ラベルが付いている場合、MR 作成者には（内部ノートを通じて）エスカレーションを求めましたが、対象の MR はまだ削除されていません。この時点からは AppSec が解決まで進めます。必要に応じて MR 作成者に確認し、調査結果に応じて自ら `/security` を投稿してください。公開のままにして安全と判断した場合は、公開 MR ではなく work item にその判断を記録します。

### トリアージローテーション中の PSIRT/SIRT への引き継ぎ {#hand-off-to-psirtsirt-during-triage-rotation}

チームメンバーがトリアージローテーションに割り当てられ、GitLab.com 上の @gitlab-com/gl-security/product-security/appsec または Slack の @appsec-team のメンションに対する第一応答者である場合、ピンが製品脆弱性または顧客エクスプロイトの外部レポートかどうかを評価します。これらの場合、@gitlab-com/gl-security/product-security/appsec/psirt-group および/または @gitlab-sirt に引き継ぎます。

コンテナスキャン中に発見された脆弱性に関する顧客からの直接のレポートは、Vulnerability Management チームに転送します。

### 露出したシークレットのトリアージ

情報やシークレットの露出は、パッチを当てるものがなく、したがって GitLab Project Issue、CVSS、CVE が必要ないため、脆弱性とは少し異なる扱いをします。ローテーション中にピンを受け、漏洩したシークレットを発見した場合、[HackerOne ランブック](/handbook/security/product-security/psirt/runbooks/hackerone-process/#triaging-exposed-secrets)で説明されているプロセスに従ってください。
