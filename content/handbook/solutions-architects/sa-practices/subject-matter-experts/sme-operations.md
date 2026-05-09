---
title: SME オペレーション - コラボレーションプロジェクト、グループ、Slack チャンネル

description: SME プログラムオペレーションに必要な SME コラボレーションプロジェクト、Google Groups、Slack チャンネルを説明します
upstream_path: /handbook/solutions-architects/sa-practices/subject-matter-experts/sme-operations/
upstream_sha: fb150f3a4f831172cf23c7f0d75b0d6310a68972
translated_at: "2026-05-08T18:59:21Z"
translator: claude
stale: false
---

## StackOverflow（TBD）

優先されるチャンネルは、#cs-questions 内の [StackOverFlow for Teams](/handbook/solutions-architects/tools-and-resources/#stack-overflow-for-teams) です。

* SME のリスト（StackOverFlow にもある）と SME アソシエイトを維持する

SME として指定された人物が、Stack Overflow にそのように記載されていることを確認してください。これにより、それらの関連トピックでタグ付けされた質問が適切な人々にルーティングされます。

定期的な厳格な作業の一環として、SME は Slack（特に #cs-questions）と Stack Overflow の質問をレビューし、新しい変更/機能がリリースされる際に回答が支持され関連性があることを確認するべきです。

Stack Overflow を、これらの特定の領域に関する FAQ や記事にも使用できます。

TODO：StackOverFlow に SME を追加する正確なプロセスについて詳述する必要があります

## SME Google Groups

各 SA 領域リードは、カレンダー用に SA および CS SME Google Groups をセットアップするべきです。SA 領域リードが OOO の場合のバックアップとして、SA プログラムリードのオーナーも両方含めてください

[SME](https://gitlab.com/gitlab-com/customer-success/subject-matter-experts/cs-subject-matter-experts/-/tree/main#who-are-the-current-smes-and-what-areas-are-they-focused-on) のリストを使用してグループを形成します

| SME 領域                | SME グループ                                                    |
|-------------------------|--------------------------------------------------------------|
| SME Area Leads Group    | sme-leaders    |
| AI                      | sme-ai         |
| Security & Compliance   | sme-appsec     |
| Dedicated               | sme-dedicated  |
| Plan                    | sme-plan       |
| CICD/Runner             | sme-ci         |
| Metrics & Observability | sme-metrics    |

**業種別 SME Google Groups**

| 業種               | SME グループ          |
|--------------------|---------------------|
| 組み込み DevOps     | sme-embedded-devops |
| 金融サービス         | sme-finserv        |
| ヘルスケア           | sme-healthcare     |
| テレコミュニケーション | sme-telco          |

## **SME Slack チャンネル** {#sme-slack}

サブジェクトマターエキスパート（SME）と現場チーム間の効果的なコミュニケーションと協働を促進するために、以下の Slack チャンネル構造が推奨されます：

### SME プログラムリーダーシップチャンネル

目的：SME プログラムに関する変更や決定について SME 領域リーダー間の非同期の調整。

| SME 領域                       |  Slack チャンネル        |
|--------------------------------|------------------------|
| SME プログラムリーダーシップチャンネル |  #sme-program-leaders  |

### すべての領域のすべての SME のチャンネル

目的：これは、すべての SME 関連の議論とアナウンスのためのメインチャンネルです。以下の中央ハブとして機能します：

* 一般的な SME プログラム更新
* クロスドメイン協働
* ベストプラクティスとサクセスストーリーの共有
* さまざまな専門領域での SME アクティビティの調整

| SME 領域 | Slack チャンネル          |
|----------|---------------------------|
| すべての SME | #subject-matter-experts |

### SME 領域内部 Slack チャンネル {#sme-internal}

目的：これらの SME Pod チャンネルは主に SME プログラムリード、SME 領域リード、SME、SME アソシエイト向けです。以下に使用されます：

* 非同期ミーティング
* アーキテクチャの課題に関する議論
* 競合分析
* イネーブルメントニーズの特定と対処
* SME リクエストの追跡と管理

| SME 領域                  | Slack チャンネル        |
|---------------------------|-------------------------|
| AI                        | #sme-ai-internal        |
| Security & Compliance     | #sme-appsec-internal    |
| Dedicated                 | #sme-dedicated-internal |
| Plan                      | #sme-plan-internal      |
| CICD/Runner               | #sme-ci-internal        |
| Metrics & Observability   | #sme-metrics-internal   |

### SME 公開チャンネル {#sme-channels}

これらのチャンネルは、すべての SME、プロダクトマネージャー（PM）、すべての現場メンバーに開放されています。これらは以下のために機能します：

* GitLab 機能の顧客評価をサポートするチームメンバーのための場所
* 特定の機会のための SME リクエストの提出
* 顧客エンゲージメントへの SME 関与の調整
* 特定のサブジェクト事項に関するプロダクトの質問

| SME 領域                  | Slack チャンネル     |
|---------------------------|----------------------|
| AI                        | #sme-ai              |
| App Security & Compliance | #sme-appsec          |
| Dedicated                 | #sme-dedicated       |
| Plan                      | #sme-plan            |
| CICD/Runner               | #sme-ci              |
| Metrics & Observability   | #sme-metrics         |

**業種別 SME 公開 Slack チャンネル**

| 業種                  | Slack チャンネル        |
|-----------------------|-------------------------|
| 組み込み DevOps        | #sme-embedded-devops    |
| 金融サービス            | #v_finserve_global      |
| テレコミュニケーション   | #sme-telecommunications |
| ヘルスケア              | #sme-healthcare         |

## SME コラボレーションプロジェクト

各 SME 領域リードは SME コラボレーションプロジェクトをセットアップするべきです（[AppSec の例](https://gitlab.com/gitlab-com/customer-success/sa-sme-team-appsec-and-compliance) を参照）

| SME 領域                    | コラボレーションプロジェクト   |
|-----------------------------|-------------------------|
| SME プログラムロジスティクス       | [SME Program Project](https://gitlab.com/gitlab-com/customer-success/subject-matter-experts/cs-subject-matter-experts) |
| AI                          | [AI SME Project](https://gitlab.com/gitlab-com/customer-success/subject-matter-experts/ai-sme)                       |
| AppSec                      | [App Security SME Project](https://gitlab.com/gitlab-com/customer-success/sa-sme-team-appsec-and-compliance)         |
| Dedicated                   | [Dedicated SME Project](https://gitlab.com/gitlab-com/customer-success/subject-matter-experts/sa-sme-team-dedicated) |
| Plan                        | [Plan SME Project](https://gitlab.com/gitlab-com/customer-success/subject-matter-experts/agile-planning-sme)         |
| CICD/Runner                 | [CI/CD SME Project](https://gitlab.com/gitlab-com/customer-success/subject-matter-experts/cs-sme-ci)                    |
| Metrics & Observability     | [Metrics SME Project](https://gitlab.com/gitlab-com/customer-success/subject-matter-experts/metrics-analytics-and-observability-sme)  |
| 航空宇宙業種                  | [Aerospace SME Project](https://gitlab.com/gitlab-com/customer-success/subject-matter-experts/aerospace-sme)        |
| 自動車業種                    | [Automotive SME Project](https://gitlab.com/gitlab-com/customer-success/subject-matter-experts/automotive-sme)|
| 組み込み DevOps 業種           | [Embedded DevOps SME Project](https://gitlab.com/gitlab-com/customer-success/subject-matter-experts/embedded-devops-sme) |
| ヘルスケア業種                 | [Healthcare SME Project](https://gitlab.com/gitlab-com/customer-success/subject-matter-experts/healthcare-sme) |
| 金融サービス業種               | [Financial Services SME Project](https://gitlab.com/gitlab-com/customer-success/subject-matter-experts/financial-services-sme) |
| テレコミュニケーション業種      | [Telecommunications SME PRoject](https://gitlab.com/gitlab-com/customer-success/subject-matter-experts/telecommunications-sme)|

### SME メトリック {#sme-metrics}

SME プログラムの影響と成功を効果的に測定するために、以下のメトリックを追跡します：

1. テクニカル勝率：
   * メトリック：SA Activity type SA Assistance - Subject Matter を使用した SME 関与のある機会での勝利の割合
   * 計算：(SME エンゲージメントのある勝利した機会の数 / SME エンゲージメントのある機会の総数) * 100
   * ゴール：12 か月以内にベースラインと比較して勝率を 10% 増加させる
2. 知識転送の有効性：
   * メトリック：SME 主導のトレーニングセッションの数、作成および共有された知識ベース記事、トレーニングセッションのアンケート結果
   * 計算：実施されたトレーニングセッション、SME によって発行された記事、セッションアンケート結果の平均評価の合計
   * ゴール：四半期あたり最低 4 回のトレーニングセッションと 10 件の知識ベース記事
3. Stack Overflow エンゲージメント：
   * メトリック：Stack Overflow 上の SME 回答の応答率と品質
   * 計算：(SME 回答数 / 関連質問の総数) * 100；SME 回答あたりの平均アップ票
   * ゴール：関連質問への 90% の応答率；SME 回答あたり平均 5 アップ票

レポートと分析：

* 視覚化ツールを使用して、進捗を追跡し傾向を特定するための四半期レポートを生成
* レポートとアンケートデータに基づき、SME プログラムの有効性を評価し必要な調整を行うための四半期レビューを実施

これらのメトリックを継続的に追跡および分析することで、SME プログラムの継続的な改善を確保し、組織への価値を示すことができます。

## 新しい SME 専門領域プロセス

TBD - SME 専門領域を確立するかどうかを決定するプロセスを定義します。

これらは SME 関心領域と正式 SME プログラムの違いです

| <br><br> | SME 関心領域 | 正式 SME 領域 |
|---|---|---|
| <br><br> | 1. CICD/Runners<br>2. Metrics & Observability<br>3. Embedded Systems | 1. AI<br>2. App Security<br>3. Dedicated<br>4. Plan |
| リーダーシップ構造 | 公式の SME 領域リーダーや SME はいない。<br>SME アソシエイトの関心ある人々のプールがある可能性がある。<br>1 人の人物がプログラムを推進している | [x] SME 領域リード<br>[x] SME<br>[x] SME アソシエイト |
| オペレーション | [ ] SA および CS SME の正式リスト<br>[x] SME アソシエイトまたは関心ある人々のリスト<br>[ ] SME Google Groups<br>[x] Slack チャンネル - 一般<br>[ ] Slack チャンネル - SME のリクエスト<br>[ ] コラボレーションプロジェクト<br>[ ] StackOverFlow | [x] SA および CS SME の正式リスト<br>[x] SME アソシエイトのリスト<br>[x] SME Google Groups<br>[x] Slack チャンネル - 一般<br>[x] Slack チャンネル - SME のリクエスト<br>[x] コラボレーションプロジェクト<br>[x] StackOverFlow |
| ケイデンス | [ ] ARR Driver<br>[ ] SME 領域リードミーティング<br>[x] SME 領域 Pod ケイデンス<br>[ ] PM/SME 領域ケイデンス<br>[x] PM ロードマップ<br>[x] Technical Skills Exchange<br>ミーティングはトレーニング、非同期、オフィスアワーなどの形式が可能<br> | [x] ARR Driver<br>[x] SME 領域リードミーティング<br>[x] SME 領域 Pod ケイデンス<br>[x] PM/SME 領域ケイデンス<br>[x] PM ロードマップ<br>[x] Technical Skills Exchange |
| SME のリクエストプロセス | なし | あり |
| 顧客フィードバックメカニズム | なし | あり（Issue ボードなどあり） |
| PM とのエンゲージメント | 一部 | あり |

SME 関心領域が正式 SME プログラムになるとき、これらは設定を完了するために必要なタスクです：

* SME 領域リードと SME の選定
* 新しい SME 領域を誰が決定するか
* SA と CS コミュニティへのロールアウト
* PM の登録
* SA SME 参加者のリストを維持 - [SME](https://gitlab.com/gitlab-com/customer-success/subject-matter-experts/cs-subject-matter-experts/-/tree/main#who-are-the-current-smes-and-what-areas-are-they-focused-on) のリストを確認
* 各領域のプールとして潜在的な SME（SME アソシエイト）のリストを維持
* カレンダー目的のために必要な SME google グループを作成
   1. IT に [アクセスリクエスト](/handbook/security/corporate/end-user-services/access-requests/access-requests/) を開いて Google Group を作成してもらう。
   2. 他の SME 領域と同じ命名規則を使用し、DRI をグループオーナーとグループマネージャーとして提供する。例として、この [Issue](https://gitlab.com/gitlab-com/team-member-epics/access-requests/-/issues/34007) を複製できます。
   3. IT によって Google Group が作成されたら、グループオーナー/マネージャーは Google Groups ページに移動し、SME をグループメンバーとして追加できる。
* SME に質問に答えてもらうように Stack OverFlow をセットアップ。
* SME コラボレーションプロジェクトをセットアップ
   1. [SME Subgroup](https://gitlab.com/gitlab-com/customer-success/subject-matter-experts) に移動
   2. **新しいプロジェクト** をクリック
   3. サブグループの他のプロジェクトと同じ命名法を使用してプロジェクトを作成
* 上記で概説された命名規則を使用して、現場用の公開 SME Slack チャンネルと SME Pod 用のプライベート内部チャンネルの両方をセットアップ（例 *#sme-(area)* および *#sme-(area)-internal*）
* SME オペレーションに関するハンドブックを更新
