---
title: GitLab トライアルガイドライン
description: GitLab トライアルガイドライン
upstream_path: /handbook/solutions-architects/tools-and-resources/trial-guidelines/
upstream_sha: 5449127cc9a1f5b32ba83e3cf8ddab79eac1e3e8
translated_at: "2026-05-08T17:29:46Z"
translator: claude
stale: false
---

GitLab はデフォルトで、AI 搭載の DevSecOps プラットフォーム全体を無料でトライアルできます。これにより、ほぼすべての[Ultimate ティア](https://about.gitlab.com/pricing/ultimate/)および [GitLab Duo](https://about.gitlab.com/gitlab-duo/#features) の機能にフルアクセスできます。

GitLab を使うことで、チームはソフトウェア開発ライフサイクル全体を 1 つのツールで協働でき、よりセキュアなソフトウェアをより速く開発・デプロイできます。

GitLab をトライアルすることで、このソリューションが特定のニーズに合っているかを理解でき、十分な情報に基づいた意思決定の助けになります。

ただし、トライアル期間はあっという間に過ぎてしまいます！実験は通常業務と並行して進行するため、適切にスコープを定め、準備を整えることが重要です。トライアルの価値を最大化するためのヒントとベストプラクティスをご紹介します。

## トライアルのスコープを定める

トライアルが成功するのは、許可された期間内に評価をエンドツーエンドで完了でき、すべての意思決定者がそのソリューションが彼らの問題を解決し、価値をもたらし、投資収益をもたらすかを理解できた場合です。

### トライアルの目的は何か？

これは最も重要なステップであり、効率的なトライアルを保証するのに役立ちます。30 日間で検証する 3 つの主要なゴールを設定することをお勧めします。ゴールは、解決したい特定の課題や、検証したいユースケースなどです。

次に、これらのゴールを支えるために設定が必要な機能のリストを作り、「必須 (must haves)」と「あると望ましい (good to haves)」に分類します。

GitLab には数百の機能があるため、ゴールを支える機能の実装に集中してください。[ソフトウェア開発ライフサイクルのステージごとの機能リスト](https://about.gitlab.com/features/)を参照できます。残りはバックログに加え、メインのゴールが評価された後の段階でテストできます。

### これらの目的に対して成功はどう測定するか？

各ゴールの成功指標と具体的な KPI を定義します。ゴール達成とはどういう意味なのか？どうやってこのゴールが達成されたとわかるのか？

比較のためのベースラインがあることを確認してください。これは、トライアル終了時に明確な前後比較を確立するうえで特に重要であり、意思決定プロセスのすべてのステークホルダーと共有するのに役立ちます。

### 意思決定プロセスはどのようなものか？

評価終了時にどのように意思決定するかを理解しましょう。

- どのような情報が必要か？
- 結果をどのように提示するか？
- 次のステップを誰が決定するか？
- 必要な意思決定は具体的に何か？単にソリューションの購入を決定するだけでよいか？それとも既存ツールからの移行といった他の共同決定もあるか？

### 誰が参加すべきか？

組織内でトライアルに参加すべきすべてのチームメンバーを特定します。

1. まずプロジェクトコーディネーターを指名するところから始めましょう。
1. 最終的な意思決定プロセスに参加する必要のある人を列挙します。誰がトライアルにアクティブに参加する必要があるか？誰は最終レポートを見るだけで意思決定できるか？このリストには次が含まれる可能性があります:
   - 予算オーナー
   - 影響を受けるチームのリードと主要な代表者
   - C レベルのスポンサー
1. GitLab 内部でテストの実装とセットアップを担当する人を特定します。

会社規模や評価のスコープによるため理想的な人数というのはありませんが、経験から言えば小規模なチーム (3〜10 人程度) に限定するのが最適です。
最終的にはバランスを取ることが重要です。

- 1 人だけがトライアルをリードすると、すべてのユーザーのニーズを十分に考慮できないリスクがあります。評価に関わる他のステークホルダーがトライアルの結果に十分にアクセスできない可能性があります。
- チームが大きすぎると、インプットやフィードバックの収集を調整したり、トライアル進捗の定期チェックインのアジェンダを揃えたりするのが難しくなります。

開始前に、各参加者のゴールと成功基準を理解します。全員が開始するための情報 (ゴール、実装する機能リスト、ドキュメント等) を持っていることを確認してください。

### どのプロジェクトをテストに使うべきか？

大規模な組織では、トライアル期間がすべてのプロジェクトをテストするには短すぎます。そのため、ユースケースを検証するためのすべての機能を実装できる、いくつかのプロジェクトにスコープを絞るのが望ましいです。

選択するプロジェクトは、評価において十分に代表的である必要があります。経験的に、1〜3 個のプロジェクトでテストすると有意な結果が得られます。

たとえば、GitLab のセキュリティおよびコンプライアンス機能を評価する組織は、3 つのプロジェクト（バックエンド、フロントエンド、Infrastructure as Code プロジェクト）でテストするとよいでしょう。

### 評価をどう計画するか？

評価は、参加者が通常の活動と並行してトライアルを引き受けるだけのキャパシティがある時点で開始されるべきです。
評価が予定どおりに完了することを確実にするには、スケジュールを定めるのが役立ちます。例:

- 第 0 週:
  - キックオフミーティング
- 第 1 週から第 3 週:
  - 進捗の追跡、未評価項目の確認、ブロッカーの解消、優先度の変化の共有のため、15〜30 分の週次スタンドアップ
- 第 4 週:
  - 評価を結論付け、各ゴールの達成メトリクスをレビューしてトライアルの成功を測定
  - トライアルチームに含まれない最終意思決定者向けの内部プレゼンテーションを準備
  - ゴール、メトリクス、週次の進捗を含めて全プロセスを文書化することで、参加者間の協働が向上し、最終的な意思決定プロセスが促進されます。

## Ultimate トライアルを有効化する

Ultimate トライアルは 30 日間有効で、GitLab.com および GitLab Self Managed の両方において、新規 GitLab ユーザーまたは Premium ティアの既存 GitLab 顧客が依頼できます。

### 私は GitLab を初めて使う

- GitLab マーケティングサイトの[トライアルランディングページ](https://about.gitlab.com/free-trial/)に移動
- [SaaS](https://about.gitlab.com/free-trial/?hosted=sass) または [Self Managed](https://about.gitlab.com/free-trial/?hosted=self-managed) を選択
- 指示に従ってアカウントをセットアップ
- Self Managed を選んだ場合、まずインスタンスのインストールが必要となるため、追加設定が必要です
- トライアルが有効化されると、無料の Ultimate ティアトライアルにアクセスできます

### 既に企業アカウントを持っている

2 つのオプションがあります。

#### 専用のトライアルアカウントを作成

前述の「私は GitLab を初めて使う」の指示に従い、たとえば「organization-trial」のような新しいグループを作成します。

そのグループにプロジェクトデータを投入するには、以下の方法を使用できます。

##### 自分の既存のグループ／プロジェクトのコピーを使用

- [グループとプロジェクトのコピー](https://docs.gitlab.com/ee/user/group/import/index.html)
  - GitLab.com のあるネームスペースから別のネームスペースへコピーする際、すべてのサブグループとプロジェクトをコピーする必要があります。グループとプロジェクトの数が多い顧客には推奨されません。
  - [これら](https://docs.gitlab.com/ee/user/group/import/index.html#migrated-group-items)のグループアイテムのみが移行されます。それ以外は移行されません。
  - [これら](https://docs.gitlab.com/ee/user/group/import/index.html#migrated-project-items)のプロジェクトアイテムのみが移行されます。これは次セクションで説明するファイルエクスポートで移行されるアイテムと同じであることに注意してください。
- [ファイルエクスポートを用いたプロジェクト移行](https://docs.gitlab.com/ee/user/project/settings/import_export.html)
  - [これら](https://docs.gitlab.com/ee/user/project/settings/import_export.html#items-that-are-exported)のプロジェクトアイテムのみが移行されます。
- [プロジェクトのフォーキング](https://docs.gitlab.com/ee/user/project/repository/forking_workflow.html)
  - リポジトリとブランチのコピーを伴う標準的なフォーキングと同様に動作します
  - 上記の 2 つのアプローチで得られる多くのプロジェクトアイテムにはアクセスできません
- [リポジトリミラーリング](https://docs.gitlab.com/ee/user/project/repository/mirror/index.html)
  - 上記のいずれのアプローチもミラーリングと組み合わせて、ブランチ、タグ、コミットを同期させることができます
  - マージリクエストや Issue といったアイテムは同期されません

##### GitLab セキュリティデモプロジェクトを使用

GitLab には、各種セキュリティスキャンの動作を示すための[セキュリティデモのセット](https://gitlab.com/gitlab-org/security-products/demos)が用意されています。

#### 既存アカウント内でトライアル

| サブスクリプションタイプ | プロセス |
| ----------------- | ------- |
| SaaS Free | アカウント内で Settings > Billing に移動し、トライアルをリクエストします |
| SaaS Premium | GitLab は最近、既存の SaaS Premium ネームスペース内で Ultimate をトライアルできるようにしました。現時点ではセルフサービスで有効化するオプションはありません。アカウントエグゼクティブに連絡するか、[リクエストを送信](https://about.gitlab.com/sales/)してください |
| Self Managed Community Edition | まず[これらの手順](https://docs.gitlab.com/ee/update/#community-to-enterprise-edition)に従ってインスタンスを Enterprise Edition にアップグレードする必要があります。その後、[トライアルランディングページ](https://about.gitlab.com/free-trial/?hosted=self-managed)の手順に従って無料のトライアルライセンスキーを取得します |
| Self Managed Enterprise Edition Premium | 最新機能を最適に体験するため、まず GitLab Enterprise Edition の最新バージョンであることを確認することをお勧めします。そうでない場合は[これらの手順](https://docs.gitlab.com/ee/update/)に従ってアップグレードしてください。最新バージョンになったら、アカウントエグゼクティブに連絡するか、[リクエストを送信](https://about.gitlab.com/sales/)してトライアルライセンスキーを受け取ってください。 |

#### どう選べばよい？

|  | 利点 | 欠点 |
|--|------|------|
| 専用のトライアルアカウントでトライアル | テストするユースケースと機能に集中でき、トライアル参加者に限定された隔離環境 | プロジェクトのインポートと設定が必要。Self Managed では新しいインスタンスとランナーの設定が必要。 |
| 既存アカウント内でトライアル | 設定不要で、既存のワークフロー内で機能をテストできます。価値はすべてのユーザーが体感できます。 | トライアルに関わらないユーザーが、トライアルが行われていることを認識していない場合、エンタープライズエディションに関連する新機能に出くわして混乱する可能性があります。 |

### トライアルライセンスに関する注意事項

- Ultimate トライアルではなく Premium トライアルが必要な場合、顧客は上記の通りトライアルライセンスをリクエストする必要があります。次に、GitLab アカウントエグゼクティブが [GitLab Support Internal Request](https://support-super-form-gitlab-com-support-support-op-651f22e90ce6d7.gitlab.io/) (Internal) を作成し、トライアルライセンスを Ultimate から Premium にダウングレードする必要があります。**GitLab Support Internal Requests for Global customers** または **GitLab Support Internal Requests for Federal customers** リクエストオプションのいずれかを使用し、**Self-Managed Trial related - Modify an existing Self-managed trial** リクエストタイプを選択してください。GitLab Support は Premium ライセンスを作成し、ユーザーにメールで送信します。

SaaS トライアルには以下の制限があります。

- 新規または無料の GitLab ユーザーとしてトライアルを有効化する場合、トライアル中はカスタマーサポートにアクセスできません。
- GitLab 共有ランナーは利用可能 (クレジットカード認証あり) ですが、分数は限られています。追加の分数が必要な場合、[GitLab セールスチーム](https://about.gitlab.com/sales/)が顧客に代わって増加をリクエストできます。専用の SaaS グループでトライアルする場合、月あたり 400 CI コンピュート分に制限されます。
- トライアルライセンスでは [プロジェクトアクセストークン](https://docs.gitlab.com/ee/user/project/settings/project_access_tokens.html) は 1 つだけ利用可能で、[グループアクセストークン](https://docs.gitlab.com/ee/user/group/settings/group_access_tokens.html) はトライアルライセンスでは利用できません。

GitLab SaaS の既存 Premium 顧客で、現在のネームスペース内で Ultimate をトライアルしている場合、上記の制限は適用されません。

### 既存トライアルの延長

ライセンス、サブスクリプション、トライアル、猶予期間延長に関するすべての社内リクエストは、[GitLab Support Internal Request フォーム](https://support-super-form-gitlab-com-support-support-op-651f22e90ce6d7.gitlab.io/)を使用して提出してください。Internal Request に顧客を CC してはいけません。

_2025 年 8 月 14 日、GitLab は Docs、ウェブサイト、更新バナーおよびメールから 14 日間の猶予期間に関する外部参照を削除しました。ただし、猶予期間自体は当社のアプリケーションおよびシステム内に依然として存在します。必要な場合はこちらで詳細をご確認ください。_

フォームにアクセスしたら、メールアドレスを入力し、トライアルライセンスを更新・延長するために「GitLab L&R Internal Request for Global Customers」または「GitLab L&R Internal Request for US Federal Customers」を選択してください。

このリクエストを行う前に、[Zendesk Light Agent アカウント](/handbook/support/internal-support/#requesting-a-zendesk-light-agent-account)が必要となる点にも注意してください。

参考資料

- [Support Internal Requests](/handbook/support/internal-support/#internal-requests)
- [Support Super Form](https://support-super-form-gitlab-com-support-support-op-651f22e90ce6d7.gitlab.io/)

## GitLab Duo (AI) のトライアル

GitLab Duo アドオンは、有償の Premium および Ultimate 顧客のみが購入できます。Duo トライアルは最長 60 日間利用可能です。

新規ユーザーは、まず Ultimate トライアルをリクエストした後に GitLab.com 上でトライアルできます。
ライセンスのない (Free) Community Edition または Enterprise Edition の Self Managed インスタンスで Duo をトライアルすることはできません。

GitLab Duo Enterprise をトライアルするには Ultimate サブスクリプションが必要です。GitLab Duo Pro をトライアルするには Premium サブスクリプションが必要です。新規顧客または Premium 顧客は、[こちら](https://gitlab.com/-/trials/new)で GitLab Ultimate トライアルにサインアップすることで Duo Enterprise を無料でトライアルできます。Duo Pro と Duo Enterprise に含まれる機能は[こちら](https://about.gitlab.com/gitlab-duo/#addons)に記載されています。

| サブスクリプションタイプ | プロセス |
| ----------------- | ------- |
| 私は GitLab を初めて使う | 上記の手順に従って GitLab.com アカウントを作成し、Ultimate トライアルをリクエストしてください。次に[これらの手順](https://docs.gitlab.com/ee/subscriptions/subscription-add-ons.html#start-gitlab-duo-pro-trial)に従ってください。 |
| SaaS Premium | [これらの手順](https://docs.gitlab.com/ee/subscriptions/subscription-add-ons.html#start-gitlab-duo-pro-trial)に従って Duo Pro トライアルをリクエストし、シートを割り当ててください。Duo Enterprise をトライアルしたい場合は、[こちら](https://gitlab.com/-/trials/new)で GitLab Ultimate トライアルにサインアップすることで実現できます。|
| SaaS Ultimate | [これらの手順](https://docs.gitlab.com/ee/subscriptions/subscription-add-ons.html#start-gitlab-duo-pro-trial)に従って Duo Enterprise トライアルをリクエストし、シートを割り当ててください。 |
| Self Managed Community Edition／Self Managed Enterprise Edition Free  | Duo をトライアルするには、トライアル専用の GitLab.com アカウントを作成する必要があります（「私は GitLab を初めて使う」の手順に従ってください）。注意: IDE で Duo Pro 機能をトライアルするためにプロジェクトをこのアカウントに追加する必要はありません。[個人アクセストークン](https://docs.gitlab.com/ee/user/profile/personal_access_tokens.html)を生成し、サポートされている [IDE 拡張機能](https://docs.gitlab.com/ee/user/project/repository/code_suggestions/supported_extensions.html)を設定するだけで構いません。[Code Suggestions](https://docs.gitlab.com/ee/user/project/repository/code_suggestions/) と [Duo Chat](https://docs.gitlab.com/ee/user/gitlab_duo_chat/) を利用できるようになります。   |
| Self Managed Enterprise Edition Premium | [このオンラインフォーム](https://about.gitlab.com/solutions/gitlab-duo-pro/sales/)を使用してトライアルをリクエストし、[これらの手順](https://docs.gitlab.com/ee/subscriptions/subscription-add-ons.html#on-self-managed-and-gitlab-dedicated)に従って Duo Pro をトライアルしてください。Duo Enterprise をトライアルしたい場合は、[こちら](https://gitlab.com/-/trials/new)で GitLab Ultimate トライアルにサインアップすることで実現できます。|
| Self Managed Enterprise Edition Ultimate | [このオンラインフォーム](https://about.gitlab.com/solutions/gitlab-duo-pro/sales/)を使用してトライアルをリクエストし、[これらの手順](https://docs.gitlab.com/ee/subscriptions/subscription-add-ons.html#on-self-managed-and-gitlab-dedicated)に従って Duo Enterprise をトライアルしてください。 |

## プラットフォームの使い方を学ぶ

GitLab を初めて使う場合でも、現在の使い方を改善したい場合でも、これらのリソースが学習の助けになります。ベストプラクティスを学ぶことで、トライアル中の習熟度向上に役立ちます。

- 充実した[ドキュメント](https://docs.gitlab.com/)を確認し、[チュートリアル](https://docs.gitlab.com/?tab=Tutorials)をレビュー
- [GitLab University](https://university.gitlab.com/): トレーニングと認定資格 (無料・有料の両方) のコレクション
- [GitLab YouTube チャンネル](https://www.youtube.com/channel/UCnMGQ8QHMAnVIsI3xJrihhg): デモ、ユースケース、録画されたウェビナーなど
- レポート、電子書籍、ウェブキャストなどを集めた[リソースページ](https://about.gitlab.com/resources/)
- [GitLab ブログ](https://about.gitlab.com/blog/): Tips やユースケースなど興味あるトピックを検索
- [コミュニティに参加](https://about.gitlab.com/community/)し、各種プログラムを通じてメンバーになる
- [GitLab Forum](https://forum.gitlab.com/) で既存の GitLab ユーザーに質問し、回答を得る
- 既に Premium 顧客の場合、サポートチームから支援を受けることができます

## トライアル終了後はどうなるか？

Premium SaaS ネームスペースまたは Premium Self Managed インスタンスでトライアルしている場合、無料の Ultimate トライアルが期限切れになると、アカウントは Premium に戻ります。

新しいネームスペースまたはインスタンスでトライアルしている場合、アカウントは Free ティアに戻ります。データは失われませんが、[有償機能はアクセスできなくなります](https://docs.gitlab.com/ee/subscriptions/gitlab_com/#subscription-expiry)。

満足して購入またはアップグレードを希望する場合、[GitLab.com のアカウント内で](https://docs.gitlab.com/ee/subscriptions/gitlab_com/)実行できます。Self Managed の場合、[サブスクリプションを購入してアクティベーションコードを受け取る](https://docs.gitlab.com/ee/subscriptions/self_managed/#obtain-a-self-managed-subscription)ことができます。
