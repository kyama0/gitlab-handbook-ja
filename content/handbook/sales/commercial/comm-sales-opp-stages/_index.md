---
title: "Commercial Sales 商談ステージ"
description: "セールスステージのアクティビティと終了基準"
upstream_path: /handbook/sales/commercial/comm-sales-opp-stages/
upstream_sha: 1e195b58b9f249ff10bd0e705106c320fee86141
translated_at: "2026-05-13T00:00:00Z"
translator: claude
stale: false
lastmod: "2025-11-13T09:24:20-08:00"
---

## <i class="fas fa-users fa-fw icon-color font-awesome"></i>なぜセールスステージが重要か?

パイプライン管理は予測可能でスケーラブルな売上達成のキーであり、単に数字を達成するか過達成するかの違いを生み出すことができます。適切なセールスパイプライン管理は、時間を正しく配分し、商談の速度を上げ、正確な予測実務を通じて取引総量、サイズ、収益を増やすのに役立ちます。

うまく管理されたセールスパイプラインには、ディスカバリーから Closed Won (または素早く qualify out) まで取引を進めるロードマップとして機能する、定義されたアクティビティと終了基準を持つ明確なプロセスが必要です。以下のプロセスは Commercial Sales チームに特化したもので、クリーンなパイプラインと正確な予測を確保します。

## <i class="fas fa-users"></i>Commercial Sales ステージのアクティビティと終了基準

これらのステージを Google sheet 形式で見るには [このリンクをクリック](https://docs.google.com/spreadsheets/d/1tVtJvfSsmWL2L1vTcJZgARlzC9Qy3Ae7pPqGBH9_KOQ/edit#gid=1399111321) してください。

[終了基準の一覧:](https://docs.google.com/presentation/d/1x6ycY7SdPET5ioD2bPyV6RURafdU_fn4P7vD6X0QRsM/edit#slide=id.p)

![comm-sales-stages-exit-criteria](/images/sales/commercial/comm-sales-opp-stages/comm-sales-stages-exit-criteria.png)

---

### 0-Pending Acceptance

*商談が作成された後の初期ステージです。Sales Development チームはビジネスニーズ/課題をスコープし、GitLab チームとディスカバリー会話を行うための見込み顧客/顧客のコミットメントを検証します。
Sales Development の商談はインバウンドの関心またはアウトバウンドの関心から来る可能性があることに注意してください。インバウンドの関心または既存顧客には、アウトバウンドの取り組みからの商談とは異なる追加の qualification レベルがあります。*

このステージで完了する **主要アクティビティ**:

- [MEDDPPICC](/handbook/sales/meddppicc/) (商談の required qualification criteria セクション内) の入力を開始 - 痛み/ニーズ、Economic buyer、または見込み顧客の場合は economic buyer への経路を特定。プラス、インバウンドリードまたは現顧客の場合は意思決定プロセスを特定。
- AE または SAE とのディスカバリーコールをスケジュール
- SDR 起因の商談の場合、商談は [Sales Accepted Opportunity](/handbook/marketing/sales-development/#qualification-criteria-and-saos) 基準を満たすこと。
- SDR がコールをスケジュールし、招待状を送信し、account オブジェクトにイベントを作成し、イベントに次の名前を付けます: GitLab Introductory Meeting - {{Account Name}}。-
- ミーティングが設定されたタイミングを強調するため、次のステップ日を入力します。両当事者によって招待が受諾されると、商談の所有権が AE/SAE に移管されます。
- ディスカバリー会話後、営業チームが商談が Sales Accepted Opportunity 基準を満たすことを検証したら、SAE または AE が商談を次のステージ (Stage 1) に移動し、Amount フィールドに予測パイプラインを入力する必要があります。商談がこのステージから次のステージにセールスサイクル内で移動する日付が、商談レコードの Sales Accepted Date フィールドに入ります。
- 商談の詳細が Sales Accepted Opportunity 基準を満たさない場合、SAE または AE は商談を 9-Unqualified ステージに移動すべきです (これが商談が 9-Unqualified ステージに移動できる唯一のタイミングです)。SAE/AE はコーチング目的で、なぜ商談が unqualified とみなされるかの理由を提供すべきです。
- セールスアシステッドのすべての Opps はパイプラインでさらに進める前に、まずこのステージに入る必要があります。どこかでこのステージに入らない場合、validation rule エラーが発生します。
- 更新商談の場合、0-Pending Acceptance は更新が Account Executive/Strategic Account Executive によって積極的に作業されていない場合にのみ使用されます。
- Sales Dev チームは更新商談を作成しません。

**終了基準:**

*これらのアクティビティは見込み顧客を次のステージに移す前に完了されなければなりません*

- セールス qualification ミーティングの完了
- Sales Development チームメンバーが収集した情報の SAE/AE による検証
- 合意された次のステップ

---

### 1-Discovery

*プロジェクトについて可能な限り多くのインテリジェンスを発掘し、セールスサイクル全体を通して後のステージで確認されます。顧客/見込み顧客が対処しようとしているビジネスニーズや課題と、GitLab がそれを解決する可能性を特定します。*

このステージで完了する **主要アクティビティ**:

- [MEDDPPICC](/handbook/sales/meddppicc/) の入力を開始 - Partner、Identify Pain、Competition
- 参加者にプランレター/リキャップメールを送信 - [例](https://docs.google.com/document/d/16Gurj_MVREmKoqXTdB1F0OQ3eyq1gzbTNU8LNHHuoEM/edit)
- [カスタムデッキ](/handbook/sales/commercial/#opportunity-specific-slide-deck) を作成し顧客と共有
- 顧客の [コンタクトロール](/handbook/sales/meddppicc/#economic-buyer) を特定
- クラウド戦略とパートナーエンゲージメントを確認

このステージで完了する **副次的アクティビティ**:

*これらは、このステージの主要アクティビティを完了するために必要なより細かいステップです*

- Command Plan の [Opportunity Overview](/handbook/sales/command-of-the-message/command-plan/#opportunity-overview) を埋める (取引金額しきい値: $5k SMB、$10k MM)
- アカウントを [Rank](/handbook/sales/commercial/#account-ranking) する
- [商談のサイズ](/handbook/sales/commercial/enablement/#opp-management---managers-check-this) を見積もる
- 顧客のパートナーランドスケープを理解する
- [カスタムデッキ](/handbook/sales/commercial/#opportunity-specific-slide-deck) を顧客と共有
- 顧客のクラウド戦略を理解する
- 顧客コンタクトの [役割を特定](/handbook/sales/meddppicc/#economic-buyer): チャンピオン、インフルエンサー、Economic Buyer、Technical Buyer など
- [GitLab single app pitch](/handbook/sales/commercial/#custom-deck-requirements) を提供し、顧客からビジョンに関するフィードバックを収集
- 顧客の [短期および長期の優先事項](https://gitlab.edcast.com/journey/introduction-to-the-required-introduction/cards/1342269) を特定
- [次のステップ](/handbook/sales/commercial/#opportunity-next-steps-best-practices) を埋める

**終了基準:**

*これらのアクティビティは見込み顧客を次のステージに移す前に完了されなければなりません*

- 痛み、キーステークホルダー、次のステップ、プロジェクトタイムラインを確認するリキャップメールを顧客に送信
- スコーピングミーティングのスケジュール
- 商談の Expected Number of Users と Expected Product の見積もりを提供。この情報は Customer Success チームが将来のワークロードを予測し、雇用計画を立てるのに役立ちます。

---

### 2-Scoping

*痛みを検証し、これらの痛みが顧客/見込み顧客のトップビジネス課題、望ましい未来状態を達成するために必要なケイパビリティ、そして GitLab がその課題を解決するために独自にポジショニングされている方法にどう繋がるかを判断します。*

このステージで完了する **主要アクティビティ**:

- 高レベルの技術要件のディスカッション
- ビジネス要件の理解とドキュメント化
- 内部技術リソースの特定
- [MEDDPPICC:](/handbook/sales/meddppicc/) Decision Criteria、Decision Process、Metrics、Champion、Economic Buyer、Competition

このステージで完了する **副次的アクティビティ**

- 顧客の SDLC の現状のリキャップ/検証
- 高レベルの技術要件のディスカッション
- ビジネス要件の理解とドキュメント化
- 技術要件の取得
- [Metrics/ROI](/handbook/sales/command-of-the-message/metrics/) 会話の開始
- GitLab がどう、誰によって実装されるかをレビュー、必要に応じて GitLab および/またはパートナーの [professional services](/handbook/customer-success/professional-services-engineering/selling/#selling-gitlab-professional-services) についてのディスカッションを開く
- 必要に応じて [パートナー/チャネル](https://docs.google.com/document/d/18xqRRCkIXlR7r4BvBQnK9n9zE70q-KPga-lVHhVw4n4/edit) を紹介
- [競合差別化](https://internal.gitlab.com/handbook/sales/command-of-the-message/#gitlab-differentiators)
- [proof points](/handbook/sales/command-of-the-message/proof-points/)、[ケーススタディ](https://gitlab.com/gitlab-com/marketing/strategic-marketing/customer-reference-content/case-study-content/-/boards/1804878?scope=all&utf8=%E2%9C%93)、[競合情報](/handbook/marketing/brand-and-product-marketing/product-and-solution-marketing/competitive-intelligence/#competitive-intelligence-at-gitlab) を提供 (防御可能な差別化要因)
- 顧客とともに [GitLab maturity/adoption](/handbook/product/product-principles/#multi-feature-usage-adoption-journey) ロードマップを作成
- 顧客組織を横断して [Multi-thread](/handbook/sales/playbook/discovery/#lack-of-multi-threading)
- Salesforce 商談で **SA Request ボタン** を使って SA エンゲージメントリクエストを作成。SA のエンゲージメントの詳細は [Commercial SA Engagement Model ハンドブックページ](/handbook/solutions-architects/processes/commercial/) を参照。
- [カスタムデッキ](/handbook/sales/commercial/#opportunity-specific-slide-deck) を GitLab 内部チームメンバーと共有し、商談を引き継ぐ SA がカスタムデッキにすぐアクセスできるようにする
- 技術評価のための共有アジェンダ/戦略/アウトカムを作成する SA とのミーティングを設定
- SA/Account チームがレビューした情報に基づいて事前エンゲージメントの discovery/demo 質問を作成
- [次のステップ](/handbook/sales/commercial/#opportunity-next-steps-best-practices) を更新

**終了基準:**

- ステークホルダーとエンゲージメントプランの特定
- [Command Plan](/handbook/sales/command-of-the-message/command-plan/) の更新
- SA/AE 戦略セッション/ミーティングの完了
- Channel および/または Alliance パートナーのエンゲージメント (該当する場合)
- 評価のための [2 つのエンゲージメントアプローチ](/handbook/sales/commercial/#custom-deck-requirements) を確立 ([Two-Lane Selling](https://docs.google.com/document/d/1h7DCIRAQ1pRiqDF6Aebl354uoMXiXbSVLaC_XefzM6w/edit))

---

### 3-Technical Evaluation

*技術 qualification が顧客/見込み顧客のニーズに合致することを検証します。*

このステージで完了する **主要アクティビティ**:

- [Channel および/または Alliance](https://docs.google.com/document/d/18xqRRCkIXlR7r4BvBQnK9n9zE70q-KPga-lVHhVw4n4/edit) パートナーのエンゲージメント (該当する場合)
- カスタマイズされたデモ
- 該当する場合はトライアル。SA がこれを SA アシステッドまたは顧客のセルフマネージドのどちらにするか判断
- 必要に応じて追加のステークホルダーをフォローアップ
- [MEDDPPICC:](/handbook/sales/meddppicc/#economic-buyer) Decision Criteria、Decision Process、Paper Process
- ビジョンピッチ (なぜ買うべきか)

このステージで完了する **副次的アクティビティ**:

- 技術要件の理解を顧客とレビュー/検証
- 顧客との録画されたテーラードデモ
- [First Order](/handbook/sales/commercial/#mid-market-key-accounts-first-order) または [Named Accounts](/handbook/sales/commercial/#mid-market-account-executive): 技術評価でより非同期的なコミュニケーションアプローチが必要な場合、SA は Slack チャンネルのリクエストを提出することがあります。
- SA がトライアルを SA アシステッドにするか、顧客のセルフマネージドにするか判断
- 顧客と協力して評価の成功基準、タイムフレーム、次のステップを決定
- 購買プロセス (例: paper process、承認、署名など) を理解
- 顧客から [トライアルライセンス延長](/handbook/support/license-and-renewals/workflows/self-managed/trials/) がリクエストされた場合、AE と相談し、延長を許可する前に顧客とプロジェクトプランを準備する。
- 関与が必要な他のチーム/事業部を特定 (他の参入ポイント)
- 独自のニーズを持つステークホルダー向けの追加デモをスケジュール
- 金銭的しきい値を満たす場合、マネージャーとの [Opportunity Consults と Lightweight Deal Reviews](/handbook/sales/commercial/#opportunity-consults-and-lightweight-deal-reviews)
- 顧客が前に進まないと決めた場合の「なぜ」を特定し、SFDC/ノートに理由をドキュメント化
- [次のステップ](/handbook/sales/commercial/#opportunity-next-steps-best-practices) を更新
- 関係がパートナー所有の場合、該当するケーススタディ、サンプルプロジェクト、関連ドキュメントを共有
- パートナー経由の場合、SA が商談と関連サービス SOW について説明を受けていることを確認

**終了基準:**

- 顧客とデモ出力を共有 (スライドデッキ、録画、コラテラルなど)
- ROI 測定が決定され検証された
- プロポーザルに進むことと特定された次のステップに相互合意
- 該当する場合、Professional Services が特定され調達された (パートナーまたは内部)
- [MEDDPPICC](/handbook/sales/meddppicc/#economic-buyer): Decision Criteria、Decision Process、Paper Process

---

### 4-Proposal

*ビジネスおよび技術的課題が発掘され解決されました。ゴールは顧客と会って、ROI/正当化をレビューし協力的に微調整することです。チャンピオンと準備して Economic Buyer とプロポーザルについてミーティングを行うか、または GitLab に代わってチャンピオンが内部で販売できるよう支援します。Economic Buyer に提示するデッキまたは価格ドキュメントを準備します。*

このステージで完了する **主要アクティビティ**:

- MSA と Subscription Agreement の提供
- プロポーザル提供
- 相互クローズプランの作成、リスクの特定
- SOW の作成と共有
- 調達プロセスと要件を理解
- タイムラインを理解

このステージで完了する **副次的アクティビティ**:

- 該当する場合はパートナー経由で見積もり
- [次のステップ](/handbook/sales/commercial/#opportunity-next-steps-best-practices) を更新
- [リファレンス可能な顧客](/handbook/marketing/brand-and-product-marketing/product-and-solution-marketing/customer-advocacy/) の場合、適切なリファレンス情報で Account オブジェクトの Referenceable Customer セクションを更新
- AE が見積もりを構築し、買い手とのレビューに備える
- 見込み顧客に正式契約を提供
- プロポーザルが顧客の [Positive Business Outcomes](/handbook/sales/command-of-the-message/metrics/#connect-metrics-with-positive-business-outcomes) と整合
- パートナーが関連するサービス SOW を含める
- 該当する場合は MSA を別途提供
- 相互クローズプランの作成
- リスクの特定
- Professional Services 向けの SOW の作成と作業のスコーピング

**終了基準:**

- 相互クローズプラン/タイムラインへの合意 (短期/長期の購入オプションで顧客と協力しタイムラインを理解)
- 調達プロセスの確認 (パートナーを使用するかを考慮)
- 実装戦略の確認
- [MEDDPPICC](/handbook/sales/meddppicc/#economic-buyer) - paper process

---

### 5-Negotiating

*契約、価格、ビジネス、法的条件を最終化します。*

このステージで完了する **主要アクティビティ**:

- ビジネス条件の交渉
- 価格の交渉
- [法的条件](https://about.gitlab.com/terms/#subscription/) の交渉
- 取引クロージャー後の [デジタルオンボーディング](/handbook/sales/field-operations/customer-success-operations/cs-ops-programs/#digital-customer-programs) メール (< $50K) を受け取るコンタクトを確認

このステージで完了する **副次的アクティビティ**:

- $50K 未満: SA と AE は取引クロージャー時に [デジタルオンボーディング](/handbook/sales/field-operations/customer-success-operations/cs-ops-programs/#digital-customer-programs) メールを受け取るコンタクトの準備を始められる
- ビジネス条件への合意 (すべてのプロポーザルは標準の [GitLab Terms](https://about.gitlab.com/terms/#subscription/) を含むべき)
- アカウントが自社の paper を使用したい場合、商談が $100k 超の場合のみリクエストが検討され、リクエストは [こちら](/handbook/sales/field-operations/order-processing/#request-for-gitlab-review-of-customer-edits-to-gitlab-template-or-review-of-customer-agreement-template) のプロセスに従って SalesForce で Legal ケースを作成して Legal に送られるべき
- 商談クローズ時に顧客がリファレンス可能になるかを判断
- 価格/最終条件交渉
- パートナーを活用して取引クローズを支援するか、Partner Sourced 取引のクローズをサポート

**終了基準:**

- 顧客がビジネス条件に合意
- 顧客が法的条件に合意
- 見積もりと契約が署名のためにルーティング可能
- AE が OA が署名・返却される時期と実装開始日の明確なタイムラインを持つ

---

### 6-Awaiting Signature

*ドキュメントは実行準備が整った最終状態にあります。*

このステージで完了する **主要アクティビティ**:

- $50K+ の取引- [SA/AE が CSM を紹介](/handbook/customer-success/comm-sales/#sa-to-csm-new-accounts) (該当する場合はパートナーも紹介)
- $50K 未満: SA と AE は取引クロージャー時に [デジタルオンボーディング](/handbook/sales/field-operations/customer-success-operations/cs-ops-programs/#digital-customer-programs) メールを受け取るコンタクトの準備を始められる
- CSM が [Success Plan](/handbook/customer-success/csm/csm-manager/#success-plan-review) を作成 (該当する場合はパートナーと協力)

**終了基準:**

- 完全に実行されたドキュメントを受領
- 完全に実行されたドキュメントを SFDC 商談に添付 (AE のアップロードを検証)
- 完全に実行されたドキュメントを受領
- PO (該当する場合) を受領
- ベンダー登録プロセスを完了
- [EULA](/handbook/legal/subscription-agreement/) (End User License Agreement) がエンドユーザーによって受諾された

---

### 7-Closing

*ドキュメントと商談の完全性を検証し、Closed Won の準備ができていることを確認します。セールスアシステッドのトランザクションのみに適用されます。*

このステージで完了する **主要アクティビティ**:

- SFDC 商談で AE が「Submit for Approval」をクリックし、Closed Won 理由と詳細を追加。これにより商談が承認のために提出され、7-Closing に移動し、レコードがそれ以上の編集からロックされます。
- 商談が Deal Desk によるブッキングレビュー用のレポートに流れる
- 署名済み Order Form (OF) または [見積もりを参照する PO](/handbook/sales/field-operations/order-processing/#opportunity-booking-requirements)
- Order Form が見積もりおよび商談と一致
- Order Form が完全に実行された (署名と日付)
- 任意の理由を記載して承認
- 承認ステータス = Deal Desk Approved となり、課金に進む
- 課金がレビュー/承認し、Closed Won となり、Approval Status = Approved となる
- 拒否された場合、理由のノートを追加し、商談オーナーにメールを送信。商談はコメントに基づいてアクションを取れます。
- 複雑な場合、拒否し、担当者にチャッターを送信。商談は Awaiting Signature に戻り、商談がアンロックされ、担当者は応答できます。

**終了基準:**

- Deal Desk と Billing が商談を承認し、Approval Status を Approved に変更すると、システムが自動的に Closed Won に移動します

---

### Closed Won

*おめでとうございます!! 条件が両当事者によって合意され、見積もりが Finance によって承認されました。*

- CSM が新規 [カスタマーエンゲージメント](/handbook/customer-success/comm-sales/#account-executive-to-csm-existing-accounts-without-a-csm) を開始 ($50K+)
- AE が顧客とパートナー (該当する場合) と関わり成功を確保
- パートナーサービスをキックオフ (該当する場合)
- AE が顧客との初期 30 日フォローアップミーティングをスケジュール (Named/Territory、または高価値商談)
- Named/Territory AE - 顧客とのアカウントレビューケイデンスを作成
- Named/Territory AE が [Account Rank](/handbook/sales/commercial/#account-ranking) 1、1.5、2 に基づいて 18〜24 ヶ月の成長プランを作成
- AE が顧客とケーススタディの期待値を構築 (何が機能しているか/していないかについていつ頃フィードバックをもらえるか、いつ法務にケーススタディを依頼できるか? あなたの尊敬を得てケーススタディを構築するためには何が必要か、または別の顧客とリファレンスとして会ってくれるか? パネルに参加してくれるかなど)
- CSM 担当アカウント - 高優先度アカウントに対する [EBR](/handbook/customer-success/csm/ebr/) プロセスを確立
- 該当する場合は Professional Services を紹介
- 顧客オンボーディングまたはプレミアムサポートオンボーディングを開始 (CSM のないアカウント)
- [First Order ハンドオフ](/handbook/sales/commercial/#first-order-handoff-process) を Named Account AE へ

---

### 8-Closed Lost

*商談が失われ、見込み顧客/顧客は GitLab の購入を進めないことを決定しました*

このステージで完了する **主要アクティビティ**:

- 該当するすべての SFDC Closed Lost 理由を選択
- 見込み顧客を特定のナーチャーキャンペーンに入れるべきかを評価
- 潜在的な再エンゲージメントのためのすべてのノート/次のステップが更新されていることを確認
- 高ポテンシャルの closed-lost アカウントで新しい商談を発掘するため「チェックイン」コールをスケジュール
- 該当する場合はパートナーコールをスケジュールし、損失をレビューして将来の商談を探る
- キャリアの進歩のため、マネージャーと共有すべき学んだ教訓は何か?
