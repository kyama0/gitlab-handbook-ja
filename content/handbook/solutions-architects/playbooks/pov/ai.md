---
title: AI POV のスコープと受け入れ基準
description: AI POV のスコープと受け入れ基準
upstream_path: /handbook/solutions-architects/playbooks/pov/ai/
upstream_sha: 1e195b58b9f249ff10bd0e705106c320fee86141
translated_at: "2026-05-09T00:00:00Z"
translator: claude
stale: false
---

その他の AI 関連リソース: [Lab](https://gitlab.com/gitlab-learn-labs/sample-projects/tanuki-racing) | *Demo* | *Guided Trial* | **POV** | *Education Services* | [Professional Services](https://about.gitlab.com/services/#advisory-services)

## AI POV のベストプラクティス

私たちは、対象となる言語、テストの観点、対象チームを能動的に特定する必要があります。POV を始める前にレビューしておくべきベストプラクティスは次のとおりです。

- 小規模なチームサイズ
- Java や Python のように、オープンソースへの貢献が多い言語
- 能動的なテストシナリオ
- アクティブなガイダンスを伴う、タイムボックス化されたハンズオン POV
- POV 前にプリサーベイ、POV 後にポストサーベイを実施し、成功度合いを測る
- POV で使用される IDE とそのバージョンを確認
- POV に先立ち、IDE への GitLab Duo プラグインのインストールを支援するためのオフィスアワーを開催
- オフィスアワー中の問題と解決策を追跡するためのコラボレーションプロジェクトを作成
- すべての AI 評価について、チームリーダーやユーザーに [Getting Started with GitLab Duo Enterprise ドキュメント](https://docs.google.com/document/d/1aK8IJMiYCs-7isZ-Ek-FnolY29_WJdexG_x1tkcLGs4/edit?tab=t.0)（社内のみ - チームリーダーには配布可能）を提供
- GitLab University の [Duo Learning Track](https://university.gitlab.com/pages/ai#developers-quick) と、各種 Duo トピックへの[クイックスタートリンク](https://docs.google.com/document/d/14j5H5IlySAhJ0EUpcrpJy3jwQxTdmw5c1uLKVlymEGI/edit?tab=t.0)を含むドキュメントを提供
- POV のキックオフはワークショップで開始し、頭出しを行う。2 時間セッションのスケジュール例:
  - 5 分 - 参加者へのウェルカム
  - 5 分 - 紹介
  - 20 分 - 開発のための Gen-AI に関する議論および GitLab Duo のピッチ
  - 1 時間 20 分 - ワークショップ
  - 10 分 - 結論と次のステップ
- 参加者ができるだけ簡単に機能を試せるようにし、コンテキストに合わせて以下の推奨を調整します:
  - オンボーディングプロセス。参加者が POV にオプトインするのに必要なステップを最小化します。
    - プロセス例:
      - 参加者の名前、ロール、GitLab アカウントを収集するアンケート
      - 参加者を POV インスタンスに登録し、適切なプロジェクトへのアクセスを付与
      - 参加者を POV ミーティングに招待
      - ミーティング招待には、POV インスタンスへのアクセス手順、プリ POV アンケートへのリンク、ワークショップを非同期で進めるための手順へのリンクなどを記載
  - キックオフセッションがワークショップを含まない場合でも、キックオフセッションに参加者が POV 環境を使えるようにしておきます。
    一部の参加者はキックオフ中またはその直後にソリューションの実験を開始したいと考えるかもしれません。
  - 助けを求める方法について、シンプルで明確な指示を提供します:
    - Issue を作成する場所と、誰に @ メンションするか
    - オフィスアワーへの招待
- ガイド付きのハンズオン活動を重視。参考に POV 活動を参照
- POV のゴールが、AI を活用した機能による改善の定量的指標を浮かび上がらせることである場合、上記のワークショップやハッカソンに比較研究のアプローチを採用したくなります。
- これは、開発者の 2 つのグループに同じタスクを割り当て、片方のグループは "通常通り" 作業し、もう片方のグループは AI を活用した機能を使えるようにするものです。オプションで、2 つ目の課題が出され、2 つのグループが入れ替わる場合もあります。
- このアプローチの欠点は、AI を活用した機能なしで作業するのがあまり楽しくないことです。エンタープライズ環境ではこの種の取り組みに専念できる時間が貴重なので、それを "通常通りの作業" に費やすのは理想的とは言えません。
- 代替策として、参加者に各タスクについて以下を記録するよう依頼します:
  - 前: 通常通りに作業した場合の所要時間の見積もり
  - 後: 実際にかかった時間（AI を活用した機能の助けを得て）
  - 後: 作業の快適さ、ソフトウェア品質などについての定性的なフィードバックを含める
- [Duo Chat ベストプラクティス](https://about.gitlab.com/blog/2024/04/02/10-best-practices-for-using-ai-powered-gitlab-duo-chat/) と [Duo Code Suggestions のトップヒント](https://about.gitlab.com/blog/2024/06/11/top-tips-for-efficient-ai-powered-code-suggestions-with-gitlab-duo/) に親しんでください。これらのブログには、Duo Chat と Code Suggestions を顧客のワークフローに統合するのに役立つ素晴らしいヒントとコツがあります。実用的な [GitLab Duo のユースケース](https://docs.gitlab.com/ee/user/gitlab_duo/use_cases.html)についてはドキュメントを確認してください。

## 前提条件

顧客が AI POV で素晴らしい体験を得るためには、AI ハンズオン[ワークショップ](/handbook/solutions-architects/tools-and-resources/workshop/)を完了していることを確認する必要があります。また、POV 開始前に[カスタマーサクセスプラン](/handbook/solutions-architects/processes/customer-success-plan/)を構築し、顧客から合意を得ることも推奨します。

[SA のエンゲージメントルール](/handbook/solutions-architects/rules-of-engagement/)の前提条件（Stage 2 以降、MEDDPPICC 入力済み、チャンピオンが関与）が満たされていることを確認してください。見極め基準、SFDC トラッキング、承認プロセスを含む一般的な POV ガイダンスについては、[POV 親ページ](/handbook/solutions-architects/playbooks/pov/)を参照してください。

### POV へのインプット

- 顧客テンプレート例 [template1](https://docs.google.com/presentation/d/1m1u65qa8oj0_hHTklnhWAjyHxR8euQ14/edit?usp=sharing&ouid=113388956697042742039&rtpof=true&sd=true)
- 顧客テンプレート例 [template2](https://drive.google.com/file/d/1vAOW0Kko24ASeN7XDMnkHMWfGc57R9cw/view)
- [3 Goals in 30 Days](https://docs.google.com/presentation/d/1PIDwrVSywtz82OANmRpO3rhRPKzh64CoLWf1xqGsBEQ/edit#slide=id.g237d0ad8d2e_0_1287) を採用して POV を効率化

### POV インスタンスのセットアップ

顧客の POV リードまたは技術カウンターパートと一緒に POV インスタンスをセットアップします。

- GitLab Duo トライアルライセンスの取得
  - 既存の GitLab 顧客には、[こちらの手順に従って Duo トライアルをリクエスト](https://docs.gitlab.com/ee/subscriptions/subscription-add-ons.html#start-gitlab-duo-pro-trial)
  - 見込み顧客向けには、[こちら](https://about.gitlab.com/solutions/gitlab-duo-pro/sales/?toggle=gitlab-duo-pro)からトライアルライセンスをリクエスト
- 参加者の環境、IDE をセットアップしトライアル実行を行います。これに役立つリンクとドキュメントを以下にいくつか紹介します。
  - GitLab University - [Duo Learning Track](https://university.gitlab.com/pages/ai)
  - Getting Started ドキュメント - [Getting Started with GitLab Duo Enterprise](https://docs.google.com/document/d/1aK8IJMiYCs-7isZ-Ek-FnolY29_WJdexG_x1tkcLGs4/edit?tab=t.0)
  - [Quick Start - Duo links](https://docs.google.com/document/d/14j5H5IlySAhJ0EUpcrpJy3jwQxTdmw5c1uLKVlymEGI/edit?tab=t.0)
- POV グループ、namespace、インスタンスのルートに公開の [AI POV Plan プロジェクトテンプレート](https://gitlab.com/gitlab-com/account-management/templates/ai-pov-plan)をインポートします。
  - 参加者がテスターのために有用な情報やリソースをすべて簡単に発見できるように、中心的な入口として使用することを意図しています。
- README.md にあるチェックリストに従ってこのプロジェクトをカスタマイズします
- インスタンスやグループに必要な設定は、顧客の POV リードが行うのが望ましいです
  - これにより、彼らがオーナーシップと設定への理解を得られます
  - また、有効化される実験的機能の利用条件と GitLab の[テスティング契約](/handbook/legal/testing-agreement/)をレビューするのも彼らの責任になります
- POV 活動を実施する前に、さまざまな設定で AI 機能をテストします。POV 活動はそれに応じてトラブルシューティングまたは調整します。
  - 顧客のネットワーク内、もしくはネットワーク外
  - VPN を有効にした場合と無効にした場合
  - Web IDE を含む各種 IDE で

## POV の活動

POV を促進してリードするために選び組み合わせるための、各種ワークショップの形式は以下のとおりです。
POV 活動のタイムライン例:

- 顧客 A
  - 1 週目: キックオフと標準ガイド付きワークショップ
  - 2 週目: IDE 統合のセットアップと IDE 機能に関するカスタムワークショップ
  - 4 週目: 2 番目のユーザーグループ向け標準ガイド付きワークショップ
- 顧客 B
  - 1 週目: キックオフと標準ガイド付きワークショップ
  - 3 週目: 品質改善とドキュメント生成に関するカスタムワークショップ
  - 4 週目: POV リードに対するコーチング（社内デモ準備のため）
  - 6 週目: AI ハッカソン（生産性改善の計測を伴う 3 つの個別セッション。[比較研究](#comparative-study)参照）

### 標準 AI ワークショップ

標準 AI ワークショップは [GitLab Learn Labs](https://gitlab.com/gitlab-learn-labs) の [Tanuki Racing](https://gitlab.com/gitlab-learn-labs/sample-projects/tanuki-racing) プロジェクトを活用します。

- [Courses / Workshops / AI](https://gitlab.com/gitlab-learn-labs/sample-projects/tanuki-racing/-/tree/main/Courses/Workshops/AI?ref_type=heads) 配下にワークショップ手順があります

担当 SA の都合に応じて、このワークショップは以下のいずれかで提供されます

- 同期、インストラクター主導のセッション（最適なエンゲージメント向け）
- 自己ペース、非同期の設定（タッチの少ないエンゲージメント向け、もしくは同期セッションに参加できない参加者向け）
  - ワークショッププロジェクトの手順はこのケースに合うように意図されています。
  - セッションの録画も提供される場合があります。

### カスタム AI ワークショップ

このアプローチでは、標準 AI ワークショップを顧客特有のニーズやコンテキストに合わせてカスタマイズします。

- 顧客にとって重要な特定のワークフローを探索することを検討してください。
- ワークショップ前にワークフローを徹底的にテストし、必要に応じてプロンプトと指示を調整します
- ワークショップを支えるために別のプロジェクトを使用することも検討してください。オープンソースプロジェクトや顧客プロジェクトを使い、特定のフレームワークや言語に焦点を当てることができます
  - 顧客プロジェクトを使う場合は、まず POV インスタンスや namespace にアップロードすることが許可されているかを検証してください。

これは GitLab 側と顧客側の両方でより多くの関与が必要です。イニシアチブを開始する前に POV リードと検証してください。
また、参加者からのエンゲージメントと熱意がより高くなる可能性が高いです。意思決定者には期待できる価値（定量的指標を含む）についてより正確な理解を提供できます。

### AI を活用したハッカソン

このアプローチは、準備の面でもワークショップ自体の面でも、関与の度合いをさらに一歩進めるものです。ワークショップは通常 1.5〜2.5 時間ですが、ハッカソンは通常半日から 1 日かかります。

参加者はチームを編成し、所定の期間 AI を活用した機能を自由に使ってプロトタイプを届けます。

ハッカソンプロジェクトは参加者向けに準備します

- 指示と有用なリソースへのリンク
- プロジェクトのボイラープレート、ヘルパー関数、評価関数。複数のユースケースや言語に向けた複数バージョンを用意することを検討してください。
- 時間見積もりと結果を記録するための GitLab Issue や Issue テンプレート。プロジェクトの readme もこの目的で使用できます

スコープは以下のいずれかにできます

- すべてのチームで同じ。例: "Flight tracking app" や "Competitive quiz app"
- 一連の課題から選ぶ。
- 自由: 与えられた時間内で好きなものを開発する。いくつかのユースケース例を提示。
- 公開コーディングチャレンジを検討してください。これらは通常以下を提供するため、ハッカソン課題の良い候補です
  - チームが使用するための指示とボイラープレート。
  - ソリューションを提出して即時フィードバックを得られる場合、各タスクで明確な成功／失敗または性能指標。
  - 各タスクの所要時間見積もりや公開リーダーボード。これらは AI を活用した機能の価値を見積もるのに役立ちます
- 公開コーディングチャレンジの注意点として、エンタープライズ業務の現実から離れすぎていると見なされることがあります。事前に POV リードと議論してください。

追加のガイダンス:

- ハッカソン環境は次の理由から参加者にとって威圧的またはストレスフルになる可能性があることに注意してください:
  - 時間的プレッシャー
  - 不慣れなタスクで作業すること
  - 通常使うツールから外れて作業すること
  - ゼロから始めること（エンタープライズ環境では頻繁ではない場合がある）
  - 同僚やマネージャの判断にさらされていると感じること
  - 新しい AI を活用した機能を発見すること
- この不快感を軽減するために:
  - 期待値を設定: 参加者がこの短期間内にすべてのタスクを完了したり、完璧なソフトウェアを届けたりすることは期待されていません
  - 開放性、親切さ、コミュニケーションについて参加者の行動規範を設定
  - ハッカソンプロジェクト内にリソースとツールを準備
- ハッカソン用に割り当てられた時間を最大限に活用するため、ワークショップ前にチーム編成を行うことを検討してください。

### 比較研究 {#comparative-study}

POV のゴールが AI を活用した機能による改善の定量的指標を浮かび上がらせることである場合、上記のワークショップやハッカソンに比較研究のアプローチを採用したくなります。
これは、開発者の 2 つのグループに同じタスクを割り当て、片方のグループは "通常通り" 作業し、もう片方のグループは AI を活用した機能を使えるようにするものです。オプションで、2 つ目の課題が出され、2 つのグループが入れ替わる場合もあります。

- このアプローチの欠点は、AI を活用した機能なしで作業するのがあまり楽しくないことです。エンタープライズ環境ではこの種の取り組みに専念できる時間が貴重なので、それを "通常通りの作業" に費やすのは理想的とは言えません。
- 代替策として、参加者に各タスクについて以下を記録するよう依頼します:
  - 前: 通常通りに作業した場合の所要時間の見積もり
  - 後: 実際にかかった時間（AI を活用した機能の助けを得て）
  - 後: 作業の快適さ、ソフトウェア品質などについての定性的なフィードバックを含める

### ガイド付きワークショップのベストプラクティス

ワークショップ前

- POV インスタンスのセットアップを参照してください
- リハーサルを行い、GitLab インスタンスやビデオ会議（画面共有、ブレイクアウトルームなど）の問題を表面化させ対処します

ワークショップ中

- ワークショップに精通している GitLab のコホストとともにワークショップを進めます。
  - コホストはチャットで質問に答え、全員のペースを落とさずに一部の受講生のトラブルシューティングを支援できます。
  - 有用なリソースには、ドキュメントのトラブルシューティングセクション、Field FAQ、AI SME FAQ が含まれます
- ビデオ会議のチャットメッセージを絵文字でフィードバック収集に使い、聴衆を巻き込み、ワークショップの各ステップにおける受講生の進捗を追跡します
  - 例: "お気に入りの IDE は?" "最も使う言語やフレームワークは?"、"ワークショップのプロジェクトを作成しましたか?"、"パイプラインがトリガーされましたか?"、"脆弱性を修正しましたか?" など
- 終了時にフィードバックを収集する時間を残し、次のステップを準備します。
  - "今後さらにテストしたい機能は何ですか?" のような質問は、ワークショップ後も受講生を関与させ続けるのに役立ちます。

ワークショップ後

- 顧客の POV リードに、社内で得たフィードバックについて尋ねます
- 適切な GitLab プロジェクトや Slack チャンネルでワークショップに関するフィードバックを共有します

### DAP カスタマートライアル

{{% alert title="クレジットベースのトライアルは異なります" color="warning" %}}
DAP カスタマートライアルは、Duo Pro/Enterprise POV のようなシートベースのライセンスではなく、**評価クレジット**を使用します。すべてのクレジットは、GitLab が顧客との関係に投資する実際のドルを表します。"無料" のトライアルはありません。GitLab と顧客双方の ROI を最大化するため、戦略的、規律あり、高度に関与した取り組みを行ってください。
{{% /alert %}}

**DAP トライアルを開始する前に、すべての SA が次のことを実施しなければなりません:**

1. このプレイブックを完全にレビューする
2. 高価値ユースケースを特定するための徹底した[ディスカバリー](#dap-trial-discovery-questions)を実施する
3. 顧客と DAP Trial Evaluation Plan を完成させる（クレジット承認に必要）

DAP カスタマートライアルは、アクティブなサブスクリプションを持つ**既存顧客**にのみ提供されます。見込み顧客は評価クレジットを受け取ることはできません（[トラッキング作業項目を参照](https://gitlab.com/groups/gitlab-org/-/work_items/20168)）が、含まれるクレジット付きのセルフサービス Ultimate トライアルにアクセスできます。

#### トライアル適格性のクイックリファレンス

評価クレジットをリクエストする前に、顧客の適格性パスを確認してください:

| 顧客タイプ | トライアルパス | 主要制約 |
|---|---|---|
| **見込み顧客 / Free (SaaS)** | セルフサービス Ultimate トライアル + 24 クレジット/ユーザー | 100 ユーザー上限、30 日、延長不可 |
| **見込み顧客 / Free (Self-Managed)** | セルフサービス Ultimate トライアル + 24 クレジット/ユーザー | 18.9+ が必要、Self-Managed ではユーザー数上限なし |
| **既存有料 (Premium/Ultimate)** | [Fulfillment リクエスト](https://gitlab.com/gitlab-org/fulfillment/meta/-/issues/new?description_template=trial_credit_requests&issue%5Btitle%5D=%5BA-XXXXXX%5D%20%5BSubscription%20Name%5D,%20%5BCustomer%20Name%5D,%20%5BTotal%20Credits%20Requested%5D,%20%5BDate%20Requested%20For%5D)経由の評価クレジット | 一度限り、オンデマンド課金にオプトインしていないこと、cloud licensing が必要 |
| **Dedicated** | 既存有料と同様 | **18.8.4+** が必要 — トライアルをリクエストする前に 2 月 18 日のメンテナンスウィンドウまで待つこと |
| **Air-gapped / Offline License** | クレジットトライアルの対象外 | $0 Deal Desk オーダー + リーダーシップ承認を経たシートベース DAP self-hosted |
| **OSS / EDU / Startup** | 対象外 | — |
| **Dedicated for Government** | 対象外 | — |
| **GitLab Duo with Amazon Q** | 対象外 | — |

{{% alert title="Dedicated 顧客: タイミングが重要です" color="warning" %}}
Dedicated インスタンスはアップデートが遅延スケジュールで提供されます。トライアルクレジットを割り当てる前に、Dedicated 顧客が **18.8.4+** であることを確認してください。2 月 18 日のメンテナンスウィンドウは、ほとんどの Dedicated インスタンスが必要なパッチを受け取る最も早いタイミングです。クレジットリクエストを送信する前にパッチ状態を確認してください。
{{% /alert %}}

{{% alert title="クレジットは一度限りです" color="warning" %}}
評価クレジットはサブスクリプションごとに**一度のみ**発行可能です — 延長や再発行はありません。特定の状況下では CXO 承認のもと 2 回目のトライアルが承認される場合があります。クレジットをリクエストする前に、顧客が完全に準備でき、[DAP Trial Evaluation Plan](#dap-trial-evaluation-plan) を完成させていることを確認してください。
{{% /alert %}}

#### 主要な制約

| 制約 | 上限 | 根拠 |
|------------|-------|-----------|
| トライアル期間 | 30 日 | 価値を実証するのに十分で、勢いを保つほど短い |
| 最大ユーザー数 | 100 | これを超えると管理不能で、"未使用クレジット" の認識リスクがある |
| 1 ユーザーあたりのクレジット | 100 | 過剰コミットなく価値を実証するのに十分 |

#### クレジット消費のリアリティチェック

"タスクごとのクレジット数" の固定値はありません — 消費はフローの複雑さ、ツールコール数、使用される LLM モデルによって変化します。早い段階で顧客にこの期待値を設定してください。

[Metric: LLM Call Efficiency Dashboard](https://10az.online.tableau.com/#/site/gitlab/views/DuoAgentPlatformMonetizationMetrics/DuoAgentPlatformMonetizationInsights?:iid=1) では、Flow Type を選んで Average を見ることで、タスクあたりの LLM コール数を確認できます。その LLM コール数を[クレジット乗数](https://docs.gitlab.com/subscriptions/gitlab_credits/#models)で割れば、GitLab Credit 消費の概算が得られます。

これらは中央値です — 個別の呼び出しは、プロンプトの複雑さ、コンテキストサイズ、使用モデルによって大きく異なる可能性があります。

上記ダッシュボードの Tokens per Flow Histogram では、フローあたりのトークン消費に基づくクレジット消費平均を掘り下げることができます。

**主要な課金挙動:**

- **失敗したリクエストはクレジットを消費しません** — トライアルでも通常利用でも
- **課金レイテンシ: 約 90 分** — クレジット消費とアクセス遮断の間に最大 90 分の遅延があります。このウィンドウ中、クレジットが枯渇した後でもフローが完了する可能性があります
- 顧客がオンデマンド課金を承諾**していない**場合、このレイテンシ期間中の小さな超過分は課金されません
- 顧客がオンデマンド課金を承諾**している**場合、レイテンシウィンドウ中も含めて、含まれるクレジットを超えた超過分は課金されます
- GitLab はこのレイテンシを継続的に削減することに取り組んでいます

**クレジット消費の優先順位**（次の順序で消費されます）:

1. **Included Credits** — ユーザー単位、毎月リフレッシュ (Premium: 12/ユーザー、Ultimate: 24/ユーザー)
2. **Monthly Commitment Pool** — 組織全体で共有、毎月リフレッシュ
3. **Monthly Credit Waivers** — 無料バッファ、共有、毎月リフレッシュ（該当する場合）
4. **On-Demand Credits** — 1 クレジットあたり $1 のペイアズユーゴー

クレジットから最大限の価値を得るためのユースケース例については、顧客を [Prompt Library](https://about.gitlab.com/gitlab-duo/prompt-library/) に案内してください。

#### 8 ステップのトライアルプロセス

1. 必要に応じてトライアル前に [AI Strategy Workshop](https://docs.google.com/presentation/d/11rZCDA7BZaiSA9tEvblpRdYSYZVRmdwiriVlsEdqd-A/edit?slide=id.g3b4cfe06b69_7_1642#slide=id.g3b4cfe06b69_7_1642) を実施します。アウトプット（バリューストリームのボトルネック、特定されたユースケース、サイジング、採用計画）をトライアルへのインプットとして使います。
2. 顧客と[明確な期待値を設定](https://docs.google.com/presentation/d/1VW2xdRVoW-KkIBRFLqIhMccARKVtSpvew7n_tJZvc9Y/edit?slide=id.g3c30e1fb620_0_114#slide=id.g3c30e1fb620_0_114)し、以下の要素を組み込んだエンゲージメント計画を作成します。トライアルリクエストとともに[評価計画テンプレート](#dap-trial-evaluation-plan)を送付してください。
3. 顧客と [DAP Trial Evaluation Plan](#dap-trial-evaluation-plan) を完成させます。
4. AE と協力して [fulfillment トライアルリクエストを送信](https://gitlab.com/gitlab-org/fulfillment/meta/-/issues/new?description_template=trial_credit_requests&issue%5Btitle%5D=%5BA-XXXXXX%5D%20%5BSubscription%20Name%5D,%20%5BCustomer%20Name%5D,%20%5BTotal%20Credits%20Requested%5D,%20%5BDate%20Requested%20For%5D)します。AI Strategy Workshop を実施した場合は、リクエストとともに含めてください。
5. すべてのトライアル参加者と[週次 60 分の作業セッションを 4 回](https://docs.google.com/presentation/d/1VW2xdRVoW-KkIBRFLqIhMccARKVtSpvew7n_tJZvc9Y/edit?slide=id.g3bccdb4fbbe_0_0#slide=id.g3bccdb4fbbe_0_0)主導します。30 日のトライアル全体を通じて、エネルギーの高い時間を顧客の伝道、トレーニング、サポートに費やします。
6. 必要に応じて緊急感を維持するために作業セッション外でケイデンスのある状況確認を実施します。専用の Slack チャンネルを通じてハンズオンサポートを提供します。
7. トライアルの中間点と完了時に [DAP Trial Survey](#dap-trial-survey) を送付します。
8. 完了時に [DAP Evaluation Form](https://docs.google.com/forms/d/e/1FAIpQLSfbJeY_dDVsFz2F8cmww3VlHtzVWEymIueXEDQcY3qabaxEDg/viewform) を送信します。会社全体の採用に向けたサイジングと予算確保を支援します。

#### トライアルクレジット承認しきい値

トライアルクレジット承認要件については、[Fulfilmment Issue Request Process のテーブル](https://gitlab.com/gitlab-org/fulfillment/meta/-/issues/new?description_template=trial_credit_requests)を参照してください。

**リクエストプロセス:**

1. サブスクリプション詳細を検証 (cloud licensing、オンデマンド課金にオプトインしていないこと)
2. [Fulfillment エピック](https://gitlab.com/gitlab-org/fulfillment/meta/-/issues/new?description_template=trial_credit_requests&issue%5Btitle%5D=%5BA-XXXXXX%5D%20%5BSubscription%20Name%5D,%20%5BCustomer%20Name%5D,%20%5BTotal%20Credits%20Requested%5D,%20%5BDate%20Requested%20For%5D)配下に Issue を作成
3. Issue リンクを Slack の `#trial-credits-requests` に投稿 — このチャンネルは適切な承認者を自動的にタグ付けします
4. **SLA: 承認後 1 営業日**で Fulfillment チームがリクエストを処理

アカウントチームの誰でもリクエストを送信できますが、**SA は常にトライアル計画に関与すべき**です。

{{% alert title="オンデマンド課金: 現場の最大の懸念点" color="warning" %}}
**顧客との課金会話の前にこれを理解してください。**

- Monthly Commitment を持つ顧客でも、購入フローの一部として**オンデマンド課金条件を承諾しなければなりません**
- Consumption Controls は [DAP Governance - Q1 epic](https://gitlab.com/groups/gitlab-operating-model/-/work_items/744) で共有される予定です
- 顧客がオンデマンド課金を承諾してトライアルを自己開始し、それを取り消したい場合、GitLab がソリューションに取り組んでいることを伝えることができます

**顧客に伝えること:** Monthly Commitment 価格は大幅なコスト削減（オンデマンドの $1/クレジットに対し最大 30%）を提供します。オンデマンド課金は中断のないサービスを保証するセーフティネットであり、含まれるクレジット、コミット済みクレジット、ウェイバークレジット（あれば）を使い切った後にのみ起動します。利用上限はロードマップにあり（18.11 を目標）、追加の支出管理を提供します。
{{% /alert %}}

**あなたのミッション**は、顧客が次のことを行えるよう支援することです:

1. DAP と、それが本物の価値に変換されるユースケースを理解する
2. エンタープライズ全体で DAP を採用するためのコストモデル化と予算策定を行う
3. トライアル終了から 30 日以内に購入決定を行う

#### 成功のための要素

- **小さく始める** — 最初に関与する成功可能性が最も高いチームを特定します。あまりに多くのユーザーでトライアルを実施しようとすると、顧客が強い勢いを構築できない可能性が高いです。実証済みの DAP ユースケースの中でどれが彼らに最も恩恵をもたらすかを教育し計画します。
- **成功基準を定義する** — トライアル開始前に、顧客がどのように成功を判断するかを把握します。期待される価値を定量化するために、[Business Value Consulting](/handbook/solutions-architects/sa-practices/business-value-consulting/) 手法と [Command of the Message metrics](/handbook/sales/command-of-the-message/metrics/) を使用します。
- **エンゲージメント計画を作成する** — 30 日間全体について両側のリソースをマップします。毎週、伝道し、トレーニングを行い、質問に答え、問題に対応するために顧客の前にいられる時間とリソースがあることを確認します。顧客はリソースを割き、DAP を日常業務に組み込むことにコミットしなければなりません。
- **まずベースラインを確立する** — 現状メトリクス（サイクルタイム、MTTR、レビュー時間）を捕捉するため、トライアル前に [Value Stream Discovery ワークショップ](/handbook/solutions-architects/sa-practices/value-stream-discovery/)を検討します。これらのベースラインは、トライアルの成功を測定し、採用のビジネスケースを構築するのに不可欠です。

#### DAP Trial Evaluation Plan {#dap-trial-evaluation-plan}

このテンプレートを顧客と共有し、評価クレジットをリクエストする前にスコープ、チーム、ユースケース、成功メトリクスについて整合をとってください。

##### 焦点を当てたチーム

トレーニングとサポートを十分に行うため、トライアルは最大 100 名のエンジニアに制限してください。参加チームは DAP のトレーニング、実験、日常ルーチンへの組み込みについて積極的なサポートを必要とします。すべてのアクティブな参加者向けに毎週 60 分のトレーニングセッションを実施してください（参加必須）。質問用に Slack チャンネルを開設し、30 日間を通じて素早い対応を提供します。最大 100 名のエンジニアによるアクティブ利用があれば、組織全体での利用に関する計画と予算策定を顧客が支援するための十分なデータが得られます。

顧客と協力して参加する機能／プロジェクトチームを特定し、文書化してください。

##### 価値あるユースケース

ベータテストと顧客エンゲージメントから、以下のユースケースが大幅な時間削減と生産性向上を示しています:

- **Contextual Agentic Chat** — 開発者の生産性
- **Agentic Code Review** — MR レビュー時間の削減
- **Issue, Code, and MR Analysis and Summary** — 開発者の生産性
- **Security Agent: Vulnerability Explanation/Resolution** — セキュリティおよびコンプライアンスリスクの低下
- **Fixing Broken Pipelines** — 解決までの時間短縮
- **Speeding Up Developer Onboarding** — 最初の MR までの時間

これらは DAP で利用可能な[何百もの可能なユースケース](https://about.gitlab.com/gitlab-duo/prompt-library/)のほんの一部です。顧客と協力して、彼らの組織にとって最も価値があるユースケースを特定してください。

##### 成功メトリクス

定量的および定性的な観点から成功がどのように見えるかを定義します。DAP の価値を定量化するために、[Verifiable Outcomes フレームワーク](/handbook/customer-success/csm/success-plans/) (SMART: ベースラインメトリクス、成功基準、ビジネスインパクト、タイムライン) と [Business Value Consulting](/handbook/solutions-architects/sa-practices/business-value-consulting/) 手法を使用します。

**ステークホルダーごとの成功基準:**

各主要ステークホルダーについて、トライアルが成功とみなされるために何を見る必要があるかを文書化します:

| ステークホルダー | 必要なもの | 測定方法 | 満たされなければデッドロック? |
|---|---|---|---|
| Champion | *開発者の熱意、目に見える生産性向上* | *サーベイスコア、逸話的フィードバック* | *Yes/No* |
| Economic Buyer | *ROI 正当化、ロールアウトのコストモデル* | *消費されたクレジット vs 提供された価値* | *Yes/No* |
| Technical Lead | *コード品質の維持、統合の動作* | *MR 品質、パイプラインメトリクス* | *Yes/No* |
| End Users (Developers) | *本物の時間節約、邪魔にならない* | *自己報告の時間節約* | *Yes/No* |

これらのステークホルダーの特定に関するガイダンスは、[MEDDPPICC](/handbook/sales/meddppicc/) (Economic Buyer、Champion) と [Strategic Solution Selling](/handbook/solutions-architects/playbooks/strategic-solution-selling/) を参照してください。

**定量的メトリクスのテンプレート:**

| メトリクス | 現状ベースライン | 目標 | 計測方法 | タイムライン |
|---|---|---|---|---|
| *MR サイクルタイム* | *5 日* | *3 日* | *GitLab Value Stream Analytics* | *2〜4 週目* |
| *最初の MR までの時間 (新規採用者)* | *3 週間* | *1 週間* | *MR 作成日* | *トライアル中* |
| *セキュリティ脆弱性 MTTR* | *14 日* | *7 日* | *Issue クローズ時間* | *2〜4 週目* |

**ストップ基準** — 顧客に評価を早期に終了させる原因となる事項について事前に合意します（例: データプライバシーの懸念、許容できないレイテンシ、2 週目までに測定可能な改善がない）。これを文書化することで、曖昧な結果を防ぎます。

**リーダーシップ向けエビデンス** — Economic Buyer が社内で提示するために必要なものを特定します: ROI 計算、前後のパフォーマンスメトリクス、ユーザーの証言、競合比較、セキュリティ検証。このエビデンスは終了時だけでなくトライアル全体を通じて構築してください。

#### 主要リソース

| リソース | 説明 | リンク |
|----------|-------------|------|
| AI Strategy Workshop デック | トライアル前のワークショップスライド | [Google Slides](https://docs.google.com/presentation/d/11rZCDA7BZaiSA9tEvblpRdYSYZVRmdwiriVlsEdqd-A/edit?slide=id.g3b4cfe06b69_7_1642#slide=id.g3b4cfe06b69_7_1642) |
| Setting Expectations デック | 顧客向けトライアル概要 | [Google Slides](https://docs.google.com/presentation/d/1VW2xdRVoW-KkIBRFLqIhMccARKVtSpvew7n_tJZvc9Y/edit?slide=id.g3c30e1fb620_0_114#slide=id.g3c30e1fb620_0_114) |
| Working Sessions デック | 週次セッション資料 | [Google Slides](https://docs.google.com/presentation/d/1VW2xdRVoW-KkIBRFLqIhMccARKVtSpvew7n_tJZvc9Y/edit?slide=id.g3bccdb4fbbe_0_0#slide=id.g3bccdb4fbbe_0_0) |
| Fulfillment Request テンプレート | クレジットリクエストの Issue テンプレート | [GitLab Issue Template](https://gitlab.com/gitlab-org/fulfillment/meta/-/issues/new?description_template=trial_credit_requests&issue%5Btitle%5D=%5BA-XXXXXX%5D%20%5BSubscription%20Name%5D,%20%5BCustomer%20Name%5D,%20%5BTotal%20Credits%20Requested%5D,%20%5BDate%20Requested%20For%5D) |
| Customer Checklist | 顧客向けトライアルチェックリスト | [Google Doc](https://docs.google.com/document/d/1T1VSBj4c205ot1AXFxX1uKnsGotjlZPiA-oYxUbwCqs/edit?tab=t.0) |
| Fulfillment Playbook | 内部 fulfillment プロセスドキュメント | [Google Doc](https://docs.google.com/document/d/1Jk8uve7OdlslwR1yG19IC5Ch7H1DsUENkTs78SEBdYg/edit?tab=t.0#heading=h.1htgeb1lsl53) |
| DAP Evaluation Form | トライアル後の評価提出 | [Google Form](https://docs.google.com/forms/d/e/1FAIpQLSfbJeY_dDVsFz2F8cmww3VlHtzVWEymIueXEDQcY3qabaxEDg/viewform) |
| Prompt Library | ユースケースの例とプロンプト | [about.gitlab.com](https://about.gitlab.com/gitlab-duo/prompt-library/) |
| SA Initiatives トラッキング Issue | プログラムトラッキングと質問 | [Issue #693](https://gitlab.com/gitlab-com/customer-success/solutions-architecture-leaders/sa-initiatives/-/issues/693) |
| Usage Billing demo video | クレジット消費に関するステージングウォークスルー (5 分) | [Google Drive](https://drive.google.com/file/d/1xU_Pdh3TOWy_fZG_TkULSwJ_mtY02v6p/view?usp=drive_link) |
| DAP Pricing Message House | 顧客向け価格メッセージング | [Highspot](https://gitlab.highspot.com/) |
| Value Stream Discovery | POV 前のベースラインメトリクスワークショップ | [Handbook](/handbook/solutions-architects/sa-practices/value-stream-discovery/) |
| Business Value Consulting | ROI、TCO、Cost of Inaction フレームワーク | [Handbook](/handbook/solutions-architects/sa-practices/business-value-consulting/) |
| Success Services (Duo Onboarding) | トライアル後の Duo Enterprise オンボーディング加速器 | [Handbook](/handbook/customer-success/success-services/) |
| Customer Terrain Mapping | トピック領域別の構造化ディスカバリーセッション | [Handbook](/handbook/customer-success/customer-terrain-mapping/) |

#### セルフサービス購入の適格性

**2026 年 2 月 3 日**以降、適格な顧客はセールスの支援なしに [Customer Portal](https://customers.gitlab.com) を通じて Monthly Commitment クレジットを直接購入できます。

| サブスクリプションタイプ | セルフ購入可能 | 備考 |
|---|---|---|
| Premium (SaaS) | はい | — |
| Ultimate (SaaS) | はい | — |
| Premium (Self-Managed, Cloud License) | はい | — |
| Ultimate (Self-Managed, Cloud License) | はい | — |
| Self-Managed (Offline License) | **いいえ** | セールス支援によるオーダーが必要 |
| Dedicated | **いいえ** | セールス支援によるオーダーが必要 |
| Reseller サブスクリプション | **いいえ** | セールス支援によるオーダーが必要 |
| 複数年サブスクリプション | **いいえ** | セールス支援によるオーダーが必要 |

**主要な制約:**

- 顧客は契約期間中の Monthly Commitment を**減額できません**
- クレジットは購入後すぐに反映されます
- Monthly Commitment は**最低 12 ヶ月の契約期間**で、毎月クレジットがリフレッシュされます
- クレジットカードを使わずに購入する必要のある顧客はセールスと連携する必要があります
- セルフサービス購入はコミッション対象です (Incremental ARR)

#### Duo Core 移行 (2026 年 3 月 19 日)

{{% alert title="Code Suggestions の課金変更 — 3 月 19 日" color="info" %}}
**2026 年 3 月 19 日** (GitLab 18.10 リリース)、Duo Core はエージェント機能に完全に移行します。この日以降、Code Suggestions は一般的なクレジットプールからクレジットを消費します（おおよそ 1 クレジットあたり 50 サジェスチョン）。現在 Duo Core を通じて "無料" の Code Suggestions に依存している顧客は、この移行を計画する必要があります。30 日前の事前顧客通知が予定されています。
{{% /alert %}}

**タイムライン:**

- **3 月 19 日以前 (18.9 まで):** Classic Duo Chat と Code Suggestions は、含まれるクレジットを持つ Premium/Ultimate 顧客向けにフォールバックとして引き続き利用可能
- **3 月 19 日 (18.10):** すべての AI 機能はエージェントクレジットシステムを通じて動作
- Monthly Commitment を持たない顧客は、含まれるクレジット (Premium: 12/ユーザー/月、Ultimate: 24/ユーザー/月) を使い切り、オンデマンド課金を承諾するかコミットメントを購入しない限り AI 機能へのアクセスを失います
- **推奨される顧客のパス:** 中断のないアクセスとボリューム価格を確保するために、Monthly Commitment を伴う DAP に移行する

### 結果

#### DAP Trial Survey {#dap-trial-survey}

{{% alert title="サーベイプラットフォーム評価中" color="info" %}}
サーベイ提供プラットフォームは最終調整中です — 詳細は近日公開。それまでは、以下の質問をサーベイのフレームワークとして使用してください。
{{% /alert %}}

トライアルの**中間点**および**完了時**にすべてのトライアル参加者に次のサーベイを送付し、定量的および定性的なフィードバックを収集してください:

1. Duo Agent Platform を社内の他のチームに推奨する可能性はどの程度ですか? (1〜10 のスケール)
2. Duo Agent Platform は毎週どのくらいの時間を節約しましたか?
3. あなたにとって最も価値のあるユースケースは何ですか?
4. GitLab が次に追加すべき機能や強化点は何ですか?

各質問は構造化された回答に加えて自由記述コメントを許容してください。

### トラッキング

#### ダッシュボードの可視性と共有ルール

{{% alert title="社内ダッシュボードを顧客と共有してはいけません" color="warning" %}}
以下に挙げる Tableau ダッシュボード (AI Gateway Reporting、Agent Success Metrics、DAP Monetization など) は**社内のみ**で、顧客向けダッシュボードとはメトリクスの数え方が異なります。Tableau リンクやスクリーンショットを顧客と共有することは絶対に行わないでください。
{{% /alert %}}

**顧客向けダッシュボードのオプション:**

| ダッシュボード | 対象者 | アクセス |
|---|---|---|
| [GitLab Duo and SDLC Trends](https://docs.gitlab.com/user/analytics/duo_and_sdlc_trends/) (in-product) | Admin、Group Owner | Owner/Admin 権限 |
| [GraphQL API](https://docs.gitlab.com/api/graphql/) | 技術的なユーザー | API アクセス |
| Customer Portal ([customers.gitlab.com](https://customers.gitlab.com)) | 課金/サブスクリプションマネージャ | ポータルアクセス |

**重要なセットアップ — ダッシュボードはデフォルトでオフ (GDPR/プライバシー):**

- **SaaS:** トップレベルグループ > Settings > General > Permissions and group features > GitLab Credits dashboard 配下の "Display user data" にチェック
- **Self-Managed:** Admin > Settings > General > Visibility and access controls > GitLab Credits dashboard 配下の "Display user data" にチェック
- ダッシュボードのデータレイテンシ: 通常 1 時間、最大 3 時間
- トライアルや顧客デモの**前**にダッシュボードを有効化し、データを提示できるよう準備しておく

**利用アラート通知:**

- 消費されたクレジットの **50%**、**80%**、**100%** でメールアラートが送信される（しきい値ごとに 1 回、繰り返しなし）
- 受信者: すべての管理者およびサブスクリプションオーナー
- AE は **Salesforce** で顧客のクレジット使用を追跡できる (Tableau ではなく)

#### Duo Agent Platform (DAP) メトリクスダッシュボード

POV 中および顧客デプロイメント中・後の DAP 採用、エンゲージメント、クレジット消費を追跡するため、これらの Tableau ダッシュボードを使用してください。完全なリファレンスは [SA Visibility Dashboards](/handbook/solutions-architects/sa-practices/subject-matter-experts/sme-collateral/#ai--duo-agent-platform-dap--sa-visibility-dashboards) も参照してください。

##### Usage Billing Analytics

{{% alert title="ドラフトダッシュボード" color="info" %}}このワークブックは Product Data Insights チームによって積極的に開発中です。ビューとメトリクスは変更される可能性があります。ステータスは [gitlab-data/product-analytics#3227](https://gitlab.com/gitlab-data/product-analytics/-/issues/3227) を参照してください。{{% /alert %}}

ワークブック: [Usage Billing Analytics](https://10az.online.tableau.com/#/site/gitlab/workbooks/3888582/views)

| ダッシュボード | 目的 | リンク |
|-----------|---------|------|
| Duo KPI Dashboard | Duo 採用に関する主要パフォーマンス指標 | [Duo KPI Dashboard](https://10az.online.tableau.com/#/site/gitlab/views/UsageBillingAnalytics_17685202519710/DuoKPIDashboard?:iid=2) |
| Consumption Deep Dive Metrics | 詳細なクレジット消費の内訳 | [Consumption Deep Dive Metrics](https://10az.online.tableau.com/#/site/gitlab/views/UsageBillingAnalytics_17685202519710/ConsumptionDeepDiveMetrics?:iid=3) |
| Customer Report Dashboard | 顧客ごとの消費レポート | [Customer Report Dashboard](https://10az.online.tableau.com/#/site/gitlab/views/UsageBillingAnalytics_17685202519710/CustomerReportDashboard?:iid=4) |

##### DAP Usage & Engagement

| ダッシュボード | 目的 | リンク |
|-----------|---------|------|
| Duo Daily Usage | 日次 DAP 利用トレンド | [Duo Daily Usage](https://10az.online.tableau.com/#/site/gitlab/views/DAPUsage/DuoDailyUsage?:iid=1) |
| Agent Success Metrics | エージェントタスク完了率、成功／失敗の内訳 | [Agent Success Metrics](https://10az.online.tableau.com/#/site/gitlab/views/AgentUsageEngagement/AgentSuccessMetrics?:iid=2) |
| Agent Engagement Trends | 利用トレンド、採用カーブ、エンゲージメントパターン | [Agent Engagement Trends](https://10az.online.tableau.com/#/site/gitlab/views/AgentUsageEngagement/AgentEngagementTrends?:iid=1) |

##### DAP Monetization Metrics

ワークブック: [DAP Monetization Metrics](https://10az.online.tableau.com/#/site/gitlab/workbooks/3489989/views)

| ダッシュボード | 目的 | リンク |
|-----------|---------|------|
| DAP Monetization Insights | エージェントタイプ別のクレジット消費、コストトレンド | [DAP Monetization Insights](https://10az.online.tableau.com/#/site/gitlab/views/DuoAgentPlatformMonetizationMetrics/DuoAgentPlatformMonetizationInsights?:iid=2) |
| Full Report Dashboard | 包括的な DAP 収益化レポート | [Full Report Dashboard](https://10az.online.tableau.com/#/site/gitlab/views/DuoAgentPlatformMonetizationMetrics/FullReportDashboard?:iid=2) |
| Token Consumption Metrics | トークンレベルの消費分析 | [Token Consumption Metrics](https://10az.online.tableau.com/#/site/gitlab/views/DuoAgentPlatformMonetizationMetrics/TokenConsumptionMetrics?:iid=1) |

##### AI Gateway Reporting

| ダッシュボード | 目的 | リンク |
|-----------|---------|------|
| AI Gateway Overview | AI Gateway リクエスト数、レイテンシ、エラー率 | [AI Gateway Overview](https://10az.online.tableau.com/#/site/gitlab/views/AIGatewayReporting/Overview?:iid=1) |

##### Duo Subscription Utilization

ワークブック: [Duo Subscription Utilization](https://10az.online.tableau.com/#/site/gitlab/workbooks/2484649/views)

| ダッシュボード | 目的 | リンク |
|-----------|---------|------|
| Duo Subscription Utilization | シート利用、アクティベーション率、サブスクリプションの健全性 | [Duo Subscription Utilization](https://10az.online.tableau.com/#/site/gitlab/views/DuoProSubscriptionUtilization/DuoSubscriptionUtilization?:iid=2) |
| Tier Enabled Duo Core Utilization | ティア別の Duo Core 機能利用 | [Tier Enabled Duo Core Utilization](https://10az.online.tableau.com/#/site/gitlab/views/DuoProSubscriptionUtilization/TierEnabledDuoCoreUtilization?:iid=3) |
| Duo Subscription Account Report | アカウントごとのサブスクリプションレポート | [Duo Subscription Account Report](https://10az.online.tableau.com/#/site/gitlab/views/DuoProSubscriptionUtilization/DuoProSubscriptionUtilizationReport?:iid=1) |

##### Duo Feedback

| ダッシュボード | 目的 | リンク |
|-----------|---------|------|
| Duo Feedback Dashboard | ユーザーフィードバック、満足度シグナル、機能リクエスト | [Duo Feedback Dashboard](https://10az.online.tableau.com/#/site/gitlab/views/DuoFeedbackDashboard/DuoFeedbackDashboard?:iid=1) |

**プロダクトロードマップ:** [DAP Product Roadmap Q1 FY27](https://gitlab.com/groups/gitlab-operating-model/-/work_items/41)

### その他の POV のスコープと受け入れ基準

SA は SAE および AE と協力し、ビジネス価値および GitLab ソリューションとの整合を取ったうえで、顧客と POV のスコープを定義できます。各ソリューションについて、典型的なスコープと受け入れ基準を参考までに以下に示しますが、チームはエンゲージメントごとにスコープ、期間、実行内容と受け入れ基準を定義してください。

- [DevSecOps](/handbook/solutions-architects/playbooks/pov/devsecops/)
- [Automated Software Delivery](/handbook/solutions-architects/playbooks/pov/automation/)
- [DevOps Platform を総合的に](/handbook/solutions-architects/playbooks/pov/platform/)

## AI エンゲージメント全般

### Discovery - 顧客のコンテキストに合わせる {#discovery---adapt-to-the-customers-context}

可能な限り早期に、顧客特有のコンテキストを能動的に発見してください。基本のディスカバリー手法については、[Sales Discovery Playbook](/handbook/sales/playbook/discovery/) を参照し、[Command Plan](/handbook/sales/command-of-the-message/command-plan/) で [MEDDPPICC](/handbook/sales/meddppicc/) フィールドが入力されていることを確認してください。AI 評価では特に、POV 前にベースラインメトリクスを確立するため [Value Stream Discovery ワークショップ](/handbook/solutions-architects/sa-practices/value-stream-discovery/)を検討し、インタラクティブなディスカバリーセッションには[ホワイトボードベースのファシリテーション](/handbook/solutions-architects/sa-practices/whiteboard-based-facilitation/) (Current State Discovery、Day-in-the-Life テンプレート) を使用してください。

GitLab のビジョンやポジショニングを提示する前に、顧客に既存の会社戦略やガイドライン、Gen-AI 全般や開発に関する個人的な意見があるかを尋ねてください。

以下のトピックについて尋ねてください

- Gen-AI に対するビジョン
  - センチメント: AI を恐れている vs テクノロジーにワクワクしている vs セキュリティ的な含意に慎重
  - どれくらい期待しているか: プラクティスの全面的な見直しか、開発者向けの限定的な助けか
  - 市場の理解: 複数のベンダーや製品を認識しているか? AI モデルを "勝者総取り" と見ているか、コモディティとして見ているか?
- 会社戦略
  - ソフトウェア開発のための Gen-AI は孤立した取り組みなのか、それともより大きなイニシアチブの一部なのか? 後者の場合、関わるトピック、メトリクス、タイムライン、意思決定者を理解することが有用な可能性があります。
  - 他の Gen-AI ツールがすでに使用されているか?
  - 開発者は会社が承認・購入していない Gen-AI ツールを使うことが許されているか? セキュリティとプライバシーの含意は何か? このような shadow IT を防ぐ統制メカニズムはあるか?
- ユースケースとワークフロー
  - 開発者に快適さと生産性を提供する（コード生成パフォーマンス）か? それともより広い視野での SDLC パフォーマンス?
  - メトリクス
  - 目標と主要結果
- 制約。次の質問への回答に応じて、一部の AI 機能はすぐには利用できないかもしれません。あるいはプロジェクトのサブセットには適用されない場合もあります。
  - Self-managed か Dedicated か? Cloud licensing は可能か? Premium か Ultimate か?
  - セキュリティとプライバシー: 自社インフラ外への API コールを許可するか? プロプライエタリコードの送信も含めて?

技術評価に大きな影響を与えた顧客インプットの例:

- "Code suggestions は私たちには有用ではありません。この機能はアクティベートしたくありません。代わりに、既存のアプリケーションを最大限に活用するために GitLab Duo を活用したいと考えています: ドキュメント化、リファクタリング、テスト追加、インナーソーシングなど。"
- "AI 機能は、データがネットワーク外に出ないセルフホストのカスタム AI モデルに接続される場合のみ使用したいと考えています"

#### DAP Trial ディスカバリー質問 {#dap-trial-discovery-questions}

以下の質問は[上記の一般的なディスカバリーガイダンス](#discovery---adapt-to-the-customers-context)を補完するもので、DAP のクレジットベーストライアルに特化しています。高価値ユースケースを特定し、ペインポイントを理解し、採用のケースを構築するために使用してください。より広範な販売ディスカバリー質問（GitHub、Azure DevOps、Bitbucket に対する競合ポジショニングを含む）については、[Qualification Questions](/handbook/sales/qualification-questions/) ページを参照してください。

##### DevOps / Platform チーム向け予備ディスカバリー

DAP トライアルでは、最も成功する可能性が高いチームは、ビジネスインパクトの高いグリーンフィールド開発を高速で進めているチームです。DevOps または Platform チームと作業する場合、これらの質問を使ってその基準に合うチームを特定してください。

1. あなたが支援する主要チームの典型的な、機能開発と保守作業の比率はどれくらいですか?
2. どのチームが GitLab を活用していて、引き続き革新を望んでいますか?
3. どのチームが新規プロジェクトやグリーンフィールド開発に取り組んでいて、どのチームがレガシーシステムを保守していますか?
4. 新規サービス、マイクロサービス、まったく新しいアプリケーションを構築しているチームはありますか?

##### 開発のボトルネック

1. プロセスのどこで開発が最も大幅に遅くなりますか?
1. 開発者は差別化された作業に対して、ボイラープレートコードを書くのにどれくらいの時間を費やしていますか?
1. 開発者ひとりあたり週にコードレビューに費やす平均時間と、その品質／満足度はどの程度ですか?
1. 新しい開発者があなたのコードベースで生産的になるのにどれくらいの時間がかかりますか?
1. 開発者の時間のうち、新機能開発ではなく差別化されない雑務に費やされている割合はどれくらいですか?

##### CI/CD とテスト

1. 現在のパイプライン失敗率はどれくらいで、失敗の診断にどれくらいの時間がかかりますか?
1. 最も一般的なパイプライン失敗原因とその頻度は何ですか?
1. 現在のテストカバレッジ (unit/integration/E2E) はどの程度で、ギャップはどこですか?
1. 開発者は機能を構築するのではなく、パイプラインのメンテナンスにどれくらいの時間を費やしていますか?

##### セキュリティとコンプライアンス

1. セキュリティスキャンからの偽陽性率はどれくらいで、それらのトリアージにどれくらいの時間が費やされていますか?
1. セキュリティ脆弱性の平均修復時間 (MTTR) はどれくらいですか?
1. セキュリティ要件は、開発プロセスでどこに最大のボトルネックを生み出していますか?
1. 開発者のセキュリティ知識はどの程度強いですか — 自分で脆弱性を修正できますか?

##### ユースケースの検証

1. あなたのトップ 3 のペインポイントについて、"良い" 状態とはどのようなもので、どのように成功を測定しますか?
1. 前進を正当化するために必要な最小の改善しきい値は何ですか?
1. AI ソリューションがあなたの特定の問題を実際に解決することを何が証明しますか?
1. このペインポイントは解決されなければデッドロックですか、それともあると嬉しい程度ですか?

##### ビジネスインパクト

1. 特定のペインポイントに対する現在のアプローチの年間コストを定量化できるとしたら、いくらになりますか?
1. このイニシアチブを価値あるものにするために必要な、現実的な生産性向上のパーセンテージは何ですか?
1. このソリューションを成功とみなすには、誰が価値を見る必要がありますか?

##### 組織的準備状況

これらの質問は、顧客が成功する 30 日トライアルを実行するキャパシティと文化を持っているかを評価します。帯域不足、組織再編の最中、社内チャンピオンがいない顧客は評価クレジットを浪費します。

1. ツーリングの課題以外で、これを難しくしているのは組織的な観点では何ですか — スキル、帯域、競合する優先事項、チーム間のアラインメントなど?
1. 完璧な AI 駆動の DevSecOps プラットフォームが明日あったら、開発者は完全に採用する準備ができていますか? それが起こるためには何が真でなければなりませんか?
1. 評価をリードする専任チームやチャンピオンはリソース化されていますか、それともロールアウトの加速に支援が必要ですか?
1. 過去の新しい開発者ツールの採用経験はどうでしたか — 何がうまくいき、何がうまくいかなかったですか?
1. このイニシアチブのエグゼクティブのスポンサーシップはありますか、それとも依然として確保する必要がありますか?

##### 組織的インパクト

組織横断的な "ペインの連鎖" をマップ化し、DAP 採用のためのマルチステークホルダーのビジネスケースを構築します。3 つの方向で質問してください:

**上を見る** (リーダーシップへのインパクト):

1. この問題はリーダーシップの優先事項や KPI にどのような影響を与えますか?
1. これが今後 6 ヶ月で解決されない場合、ビジネスにとってそれは何を意味しますか?

**下を見る** (チームへのインパクト):

1. あなたのチームの誰がこのペインを最も鋭く感じていますか?
1. 人々はどのような回避策を作り出していますか、そしてそれらは何のコストになりますか?

**横を見る** (チーム横断のインパクト):

1. 他にどのチームがこの影響を受けていますか — セキュリティ、プラットフォーム、QA、運用?
1. これを解決するために他に誰が関与する必要があり、DAP の動作を見ることで恩恵を受けるのは誰ですか?

このフレームワークを使って、[評価計画](#dap-trial-evaluation-plan)のための追加のトライアル参加者やステークホルダーを特定してください。より深いステークホルダー分析については、[MEDDPPICC](/handbook/sales/meddppicc/) (Economic Buyer、Champion、Competition) と [Strategic Solution Selling](/handbook/solutions-architects/playbooks/strategic-solution-selling/) プラクティスを参照してください。

#### ディスカバリーへの抵抗の取り扱い

AI 評価では、顧客はしばしば複数のベンダー (GitHub Copilot、Amazon Q、Cursor など) と話しており、もう一つのディスカバリー会話に抵抗するかもしれません。**acknowledge-validate-reframe** パターンを使ってください:

| ステップ | アクション | 例 |
|------|--------|---------|
| 1. Acknowledge | 相手の声を聴いていることを示す | "わかります — おそらくこの会話を何度もしているでしょう。" |
| 2. Validate | 相手の視点を尊重する | "これらの議論があなたにとって本当の価値につながらないとフラストレーションがたまりますね。" |
| 3. Reframe | 差別化された価値を示す | "私が見つけたのは、[CI/CD パイプラインやセキュリティ修復のような特定領域] を掘り下げると、しばしば全体的なアプローチを変えるような発見があるということです。それを探求するのに前向きでしょうか?" |

主要な差別化要因: GitLab の AI は、IDE だけでなく SDLC 全体に組み込まれています。ディスカバリーは、コード生成だけでなくソフトウェアデリバリーライフサイクル全体にわたってペインポイントを浮かび上がらせるべきで、そこで DAP のエージェント機能 (パイプライン修正、セキュリティ修復、コードレビュー) が独自の価値を提供します。

より深いディスカバリー手法については、[Sales Discovery Playbook](/handbook/sales/playbook/discovery/) (TED 質問、Five Whys、マルチスレッディング) と [Qualification Questions](/handbook/sales/qualification-questions/) を参照してください。

#### デモをディスカバリーとして使う

SA は AI 評価の途中で呼ばれることが頻繁にあります — 顧客はすでにスコアカードを持ち、来週デモを望んでおり、正式なディスカバリーが行われていません。これが起きた場合:

1. **透明性を保つ** — "あなたのチームにとって最も重要なものを示せるようにしたいです。これを調整するためにいくつか質問してもよいですか?"
2. **デモをディスカバリーとして使う** — デモは質問の自然な機会を提供します:
   - "これは、あなたのチームが今日従っているワークフローのようなものですか?"
   - "現在このステップにどのツールを使用していますか?"
   - "これは現在のプロセスとどう比較されますか?"
3. **技術議論中に KPI を探る** — "パイプラインが失敗したとき、診断には通常どれくらいかかりますか? それはどれくらいの頻度で起こりますか?"
4. **フォローアップのために洞察を捕捉する** — 学んだことを文書化し、構造化された [DAP Trial Evaluation Plan](#dap-trial-evaluation-plan) のためのケースを構築するために使用する

このアプローチは、DAP のエージェントワークフロー（セキュリティ修復、パイプライン修正）をデモするときに特にうまく機能します。これらは自然に顧客の現在のペインポイントとプロセスを表面化させるためです。デモ準備とシステムについては、[SA Demonstrations](/handbook/solutions-architects/demonstrations/) ページと [Workshops プラクティスガイド](/handbook/solutions-architects/sa-practices/workshops/) を参照してください。

### Gen-AI 機能に関する視点とコミュニケーションの要素

以下の要素は、AI を活用した機能がどのように受け取られるかをポジティブに影響することが効果的でした。

**パイオニア／学習マインドセット**: Gen-AI は誰にとってもどこでも比較的新しいです。早期採用者として、AI とインタラクトする最良のパターンを学び、AI が最も有用となる新しいユースケースを浮かび上がらせるために創造的になります

- 顧客は、現在利用できない、あるいは野心的すぎる、技術的に実現不可能に聞こえる機能を求めるかもしれません。オープンであるよう心がけ、これらのアイデアを早急に却下しないでください。GitLab の既存またはロードマップの機能の組み合わせがこの目的を果たせるかを検討してください。特に GitLab Duo Chat は非常に多用途です。
- 次のような質問でこの種の振り返りを促してください: 技術的制約を考慮しないとしたら、AI に実行してほしいユースケースは何ですか? 現在の機能セットの創造的な使い方を考えられますか?
  - これは参加者を、潜在的な問題を見つける立場ではなく、潜在的なソリューションを見つける立場に置くことを意図しています。
- 達成可能な創造的なユースケースの例
  - "AI にレガシーアプリケーションをドキュメント化してほしい" は /explain アクションをカスタマイズすることで達成できます
  - "Python コードを Java に変換したい" や "Jenkins パイプラインを GitLab CI に変換したい"。これは /refactor アクションをカスタマイズすることで達成できます
  - "英語以外の言語で答えてほしい"。これは通常かなりよく機能しますが、私たちのプロダクトチームは多言語サポートを積極的に最適化していません。

**遊び心**: AI における "ランダム性" の要素は楽しいことがあります。早期段階、実験的

- GitLab Duo Chat をデモする際、参加者に自分で試したり、創造的なプロンプトを与えたりするよう促してください。
- "アップルパイのレシピを教えて" のような文脈外の質問でも楽しさを加え、ガードレールが配置されていることを示します — AI は通常、これは答えられる種類の質問ではないと応答します。

**開発者へのアシスタントとしての AI**、自律的なソフトウェアデリバリーシステムとは対照的に
開発者の役割とスキル（レビュー、調整、AI をツールとして使用する）の重要性を強調します

- ["GitLab Duo" という名前の背景にある理由](https://about.gitlab.com/blog/2023/06/22/meet-gitlab-duo-the-suite-of-ai-capabilities/)に言及してください:
  > GitLab Duo という名前は、You + GitLab AI = AI のダイナミックデュオに根ざしています。
- 一部の企業や個人は Gen-AI に対して既存のバイアスを持っているかもしれないことに注意してください。Gen-AI のあらゆる取り組みを危険なもの、または人間の労働者を置き換える方法と見る人もいるかもしれません。この場合
  - なぜそうなのかを理解するよう試みる
  - Gen-AI を一般化するためのプレゼンテーションを行い、それがどのように動作するか、その強みと制限を探ることを検討してください。これはより好意的な光のもとに置くのに大きく役立つ可能性があります。
  - Gen-AI の提案は適切なコンテキストで使用され、レビューされ、必要に応じて専門家が調整した場合にのみ有用であるというメッセージを伝えてください。
  > GitLab Duo はプライバシー第一に焦点を置いた顧客中心のアプローチで、顧客は知的財産が安全であると知っています。

### 予期しないことを予期する

Gen-AI は同じプロンプトに必ずしも同じ答えを返すとは限りません。
デモで AI が予期しない、間違った、または答えのないユースケースに遭遇するでしょう。また、ワークショップを率いる際にも、受講者の一部が同様にこれを経験する可能性があることを念頭に置いてください。
これは通常のコンテキストでは "失敗" と解釈される可能性がありますが、AI 会話では必ずしもそうである必要はありません。これがもたらす可能性のある負のインパクトを軽減し、それを有利に転じるために以下を活用してください:

- デモを実施する人やワークショップに参加する人の双方について、期待値とマインドセットを管理する
  - これは予期されるものであり、Gen-AI に固有のものであることに言及してください。修正されるべきバグでも、GitLab の Gen-AI 機能に固有のものでもありません。
- プレゼンターとしてこれらの "ハッピーインシデント" に備える
  - 笑い飛ばす、もしくは軽く流す準備をしておきましょう。1 つの間違った提案は大したことではありません。何かが間違うまでは本当のデモではない、ということです。
  - これらをパイオニア／学習／遊び心のあるマインドセットを採用する機会、もしくは AI が開発チームへのアシスタントとして意図されているというメッセージを伝える機会として使用してください。
    > "後で掘り下げたい場合は、これを動作させる正しいプロンプトを見つけられると思います"
    > "ベストプラクティスに従って AI 提案をレビューしていてよかった"
    > "私はまだ陳腐化していないようでうれしい!"
  - 予期しない答えは少なくとも部分的に有用、あるいは別の目的に役立つかもしれません
  - 同じプロンプトで再試行するか、ごくわずかに変更する
  - 代替プロンプトやユースケースを準備しておく
- "何も間違ってはいけない" 高ステークの環境でプレゼンする場合は、ビデオ録画をバックアップとして使用してください

### トライアル中の問題報告

DAP トライアル中にバグや顧客をブロックする問題を発見した場合は、[DAP Rapid field reporting プロセス](/handbook/solutions-architects/tools-and-resources/dap-issue-reporting/)に従ってください。SA は深刻度ラベル付きで GitLab Issue に直接バグを登録できます — Zendesk チケットは不要です。インシデントの[定義](/handbook/engineering/infrastructure-platforms/incident-management/#incident-management)を満たす問題については、[incident.io を使ってインシデントを宣言](/handbook/engineering/infrastructure-platforms/incident-management/#reporting-an-incident)し、"Affects Duo Agentic Platform (DAP)" フィールドが YES に設定されていることを確認してください。
