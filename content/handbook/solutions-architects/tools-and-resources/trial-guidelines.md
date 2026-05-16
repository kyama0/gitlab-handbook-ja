---
title: GitLab トライアルガイドライン
description: GitLab トライアルガイドライン
upstream_path: /handbook/solutions-architects/tools-and-resources/trial-guidelines/
upstream_sha: "1e195b58b9f249ff10bd0e705106c320fee86141"
translated_at: "2026-05-14T00:00:00Z"
translator: claude
stale: false
lastmod: "2026-05-08T15:54:56-04:00"
---

GitLab はデフォルトで、AI 搭載 DevSecOps プラットフォーム全体を無料で試すことができます。これにより、[Ultimate ティア](https://about.gitlab.com/pricing/ultimate/) と [GitLab Duo](https://about.gitlab.com/gitlab-duo/#features) のほぼすべての機能にフルアクセスできます。

GitLab を使えば、チームは単一のツールからソフトウェア開発ライフサイクル全体を通じてコラボレーションでき、より安全なソフトウェアをより速く開発・デプロイできます。

GitLab のトライアルを通じて、このソリューションが特定のニーズに合っているかを理解し、情報に基づいた意思決定を下すことができます。

しかし、トライアル期間は瞬く間に過ぎてしまいます！実験は通常の業務と並行して行われるため、適切に範囲を定めて準備することが重要です。トライアルの価値を最大化するためのヒントとベストプラクティスをご紹介します。

## トライアルのスコープ設定

トライアルが成功するのは、許可された時間を使って評価をエンドツーエンドで完了でき、すべての意思決定者がソリューションが自分たちの問題を解決するか、価値をもたらすか、ROI を提供するかを理解できた場合です。

### トライアルの目的は何ですか？

これは最も重要なステップであり、効率的なトライアルを確実にするのに役立ちます。30 日で検証する 3 つの主要目標を設定することを推奨します。目標は、解決しようとする特定の問題、検証したいユースケースなどになり得ます。

次に、これらの目標をサポートするために設定する必要のある機能のリストを作成し、「必須」と「あると良い」に分けます。

GitLab には何百もの機能がありますが、目標をサポートするものに集中して実装するようにしてください。[ソフトウェア開発ライフサイクルの段階別の機能リスト](https://about.gitlab.com/features/) を参照できます。残りはバックログに追加し、主要な目標が評価された後の段階でテストできます。

### これらの目標に対する成功はどのように測定しますか？

各目標について成功指標と特定の KPI を定義してください。目標達成とは何を意味しますか？目標が達成されたかどうかをどのように判断しますか？

比較するベースラインを確保してください。これは、トライアルを終了した際に明確な前後の比較を確立するために特に重要で、意思決定プロセスのすべてのステークホルダーと共有するのに役立ちます。

### 意思決定プロセスはどのようなものですか？

評価終了時にどのように決定を下すかを理解してください:

- どのような情報が必要ですか？
- 結果をどのように提示しますか？
- 次のステップは誰が決定しますか？
- 必要な意思決定は具体的に何ですか？単にソリューションを購入することを決定する必要があるだけですか？それとも、既存ツールからの移行など、他の共同意思決定がありますか？

### 誰が参加すべきですか？

組織内でトライアルに参加すべきすべてのメンバーを特定します。

1. まずプロジェクトコーディネーターを指名します。
1. 最終的な意思決定プロセスに参加する必要のある人をリストアップします。誰がトライアルに積極的に参加する必要がありますか？決定を下すために最終レポートを閲覧するだけでよい人は誰ですか？このリストには以下を含めることができます:
   - 予算オーナー
   - 影響を受けるチームリードと主要な代表者
   - C レベルのスポンサー
1. GitLab 内でテストを実装してセットアップする責任者を特定します。

会社の規模と評価範囲によって異なるため理想的な人数はありませんが、私たちの経験から、小さなチーム（最大 3〜10 人）に限定するのが最良です。
最終的には、バランスを見つけることが重要です:

- 1 人だけがトライアルをリードすると、すべてのユーザーのニーズを十分に考慮できないリスクがあります。評価に関与する他のステークホルダーはトライアルの結果にアクセスが制限される可能性があります。
- 大きなチームでは、インプットとフィードバックの収集を調整したり、トライアル進捗の定期的なチェックインを組織するためにアジェンダを揃えたりすることが難しくなります。

開始する前に、各参加者の目標と成功基準を理解してください。全員が始めるための情報（目標、実装する機能リスト、ドキュメントなど）を持っていることを確認してください。

### どのプロジェクトをテストに使用すべきですか？

大規模な組織では、トライアルはすべてのプロジェクトでテストするには短すぎます。そのため、ユースケースを検証するためにすべての機能を実装できる少数のプロジェクトにスコープを限定するのが良いでしょう。

選択するプロジェクトは、評価のために十分代表的である必要があります。私たちの経験では、1〜3 のプロジェクトでテストすると有意義な結果が得られます。

たとえば、GitLab のセキュリティとコンプライアンス機能を評価する組織は、バックエンド、フロントエンド、Infrastructure as Code プロジェクトの 3 つのプロジェクトでテストすると有益です。

### 評価をどのように計画しますか？

評価は、参加者が通常の業務と並行してトライアルに取り組む余裕がある時に開始すべきです。
スケジュールを定義することで、評価が時間通りに完了することを確実にできます。例を以下に示します:

- Week 0:
  - キックオフミーティング
- Week 1 〜 Week 3:
  - 15 〜 30 分の週次スタンドアップミーティングで進捗を追跡し、まだ評価すべきことや、ブロッカーの解消、優先順位の変化のハイライトを行う
- Week 4:
  - 評価を終了し、トライアルの成功を測定するために各目標で達成された指標をレビューする
  - トライアルチームに含まれない最終意思決定者向けの社内プレゼンテーションを準備する
  - 目標、指標、週次進捗を含むプロセス全体を文書化することで、参加者間のコラボレーションが改善され、最終的な意思決定プロセスが促進されます。

## Ultimate トライアルのアクティブ化

Ultimate トライアルは 30 日間有効で、GitLab.com および GitLab Self Managed の両方で、新規 GitLab ユーザーまたは Premium ティアの既存 GitLab 顧客向けにリクエストできます。

### GitLab を初めて使用する場合

- GitLab のマーケティングウェブサイトで [トライアルランディングページ](https://about.gitlab.com/free-trial/) にアクセスします
- [SaaS](https://about.gitlab.com/free-trial/?hosted=sass) または [Self Managed](https://about.gitlab.com/free-trial/?hosted=self-managed) のいずれかを選択します
- 手順に従ってアカウントをセットアップします
- Self Managed を選択する場合、まずインスタンスをインストールする必要があるため、追加の設定が必要です
- トライアルがアクティブ化されると、無料の Ultimate ティアトライアルにアクセスできます

### すでに会社のアカウントがある場合

2 つのオプションがあります:

#### 専用のトライアルアカウントを作成する

前の手順「GitLab を初めて使用する場合」に従い、たとえば「organization-trial」という新しいグループを作成します。

グループにプロジェクトデータを設定するには、次の方法を使用できます:

##### 既存の自社グループ/プロジェクトのコピーを使用する

- [グループとプロジェクトのコピー](https://docs.gitlab.com/ee/user/group/import/index.html)
  - ある GitLab.com ネームスペースから別のネームスペースにコピーする場合、すべてのサブグループとプロジェクトをコピーする必要があります。多数のグループとプロジェクトを持つお客様には推奨されません。
  - [これらの](https://docs.gitlab.com/ee/user/group/import/index.html#migrated-group-items) グループアイテムのみが移行され、それ以外は移行されません
  - [これらの](https://docs.gitlab.com/ee/user/group/import/index.html#migrated-project-items) プロジェクトアイテムのみが移行されます。これらは、ファイルエクスポートで移行されるプロジェクトアイテムと同じです（次のセクションで説明）
- [ファイルエクスポートを使用したプロジェクトの移行](https://docs.gitlab.com/ee/user/project/settings/import_export.html)
  - [これらの](https://docs.gitlab.com/ee/user/project/settings/import_export.html#items-that-are-exported) プロジェクトアイテムのみが移行されます。
- [プロジェクトのフォーク](https://docs.gitlab.com/ee/user/project/repository/forking_workflow.html)
  - これはリポジトリとブランチのコピーを伴う標準的なフォークのように動作します
  - 前の 2 つのアプローチで得られるプロジェクトアイテムの多くにはアクセスできません
- [リポジトリミラーリング](https://docs.gitlab.com/ee/user/project/repository/mirror/index.html)
  - 上記のいずれのアプローチもミラーリングと組み合わせて、ブランチ、タグ、コミットが同期されるようにできます
  - マージリクエストや Issue などのアイテムは同期されません

##### GitLab セキュリティデモプロジェクトを使用する

GitLab は、さまざまなセキュリティスキャンの仕組みを示すための [セキュリティデモ一式](https://gitlab.com/gitlab-org/security-products/demos) を提供しています。

#### 既存アカウントでのトライアル

| サブスクリプションタイプ | プロセス |
| ----------------- | ------- |
| SaaS Free | アカウントで Settings > Billing に移動し、トライアルをリクエストします |
| SaaS Premium | GitLab は最近、既存の SaaS Premium ネームスペース内で Ultimate を試す可能性を追加しました。現時点ではセルフサービスでアクティブ化するオプションはありません。Account Executive に連絡するか、[リクエストを送信](https://about.gitlab.com/sales/) してください |
| Self Managed Community Edition | まず [これらの手順](https://docs.gitlab.com/ee/update/#community-to-enterprise-edition) に従ってインスタンスを Enterprise Edition にアップグレードする必要があります。その後、[トライアルランディングページ](https://about.gitlab.com/free-trial/?hosted=self-managed) の手順に従って無料のトライアルライセンスキーを取得します |
| Self Managed Enterprise Edition Premium | 最新の機能を最適に体験できるよう、まず最新バージョンの GitLab Enterprise Edition を使用していることを確認することを推奨します。そうでない場合は、[これらの手順](https://docs.gitlab.com/ee/update/) に従ってアップグレードしてください。最新バージョンになったら、Account Executive に連絡するか、[リクエストを送信](https://about.gitlab.com/sales/) してトライアルライセンスキーを受け取ります。 |

#### どのように選択しますか？

|  | 利点 | 欠点 |
|--|------|------|
| 専用トライアルアカウントでのトライアル | テストするユースケースと機能に集中でき、トライアル参加者に限定された分離環境で行えます | プロジェクトのインポートと設定が必要です。Self Managed では、新しいインスタンスとランナーを設定する必要があります。 |
| 既存アカウントでのトライアル | 設定不要で、既存のワークフロー内で機能をテストできます。価値はすべてのユーザーに見えます。 | トライアルに関与していないユーザーが、トライアルが行われていることを知らずに GitLab エンタープライズ版に関連する新機能に遭遇する可能性があり、混乱を招くことがあります。 |

### トライアルライセンスに関する注意

- Ultimate トライアルではなく Premium トライアルが必要な場合、お客様は上記で定義されたようにトライアルライセンスをリクエストする必要があります。その後、GitLab Account Executive は、Ultimate から Premium へトライアルライセンスをダウングレードするために、[GitLab Support Internal Request](https://support-super-form-gitlab-com-support-support-op-651f22e90ce6d7.gitlab.io/) (Internal) を作成する必要があります。**GitLab Support Internal Requests for Global customers** または **GitLab Support Internal Requests for Federal customers** リクエストオプションのいずれかを使用し、その後 **Self-Managed Trial related - Modify an existing Self-managed trial** リクエストタイプを選択します。GitLab サポートが Premium ライセンスを作成し、ユーザーにメールで送信します。

SaaS トライアルには以下の制限があります:

- 新規または Free GitLab ユーザーとしてトライアルをアクティブ化する場合、トライアル中にお客様サポートへのアクセスはありません。
- GitLab 共有ランナーが利用可能（クレジットカード認証付き）ですが、分数は制限されています。追加の分数が必要な場合、[GitLab セールスチーム](https://about.gitlab.com/sales/) がお客様に代わって増加をリクエストできます。専用 SaaS グループでのトライアルは、月あたり 400 CI コンピュート分に制限されます。
- トライアルライセンスでは [Project Access Tokens](https://docs.gitlab.com/ee/user/project/settings/project_access_tokens.html) は 1 つだけ利用可能で、[Group Access Tokens](https://docs.gitlab.com/ee/user/group/settings/group_access_tokens.html) はトライアルライセンスでは利用できません。

GitLab SaaS の既存 Premium 顧客で、現在のネームスペースで Ultimate を試している場合、上記の制限は適用されません。

### 既存のトライアルを延長する

ライセンス、サブスクリプション、トライアル、猶予期間の延長に関するすべての内部リクエストは、[GitLab Support Internal Request フォーム](https://support-super-form-gitlab-com-support-support-op-651f22e90ce6d7.gitlab.io/) を使用して提出する必要があります。お客様を Internal Request の CC に入れるべきではありません。

_2025 年 8 月 14 日に、GitLab はドキュメント、ウェブサイト、更新バナーおよびメールから 14 日間の猶予期間への外部参照を削除しました。ただし、猶予期間自体は私たちのアプリケーションとシステムに依然として存在します。必要に応じて、こちらで詳細情報を参照してください。_

フォームにアクセスしたら、メールを入力し、トライアルライセンスを更新および延長するために「GitLab L&R Internal Request for Global Customers」または「GitLab L&R Internal Request for US Federal Customers」を選択します。

このリクエストを行う前に [Zendesk Light Agent アカウント](/handbook/support/internal-support/#requesting-a-zendesk-light-agent-account) を所有している必要がある点にも注意してください。

参考資料

- [Support Internal Requests](/handbook/support/internal-support/#internal-requests)

## GitLab Duo (AI) のトライアル

GitLab Duo アドオンは有料 Premium および Ultimate のお客様のみが購入できます。Duo トライアルは最大 60 日間利用可能です。

新規ユーザーは、まず Ultimate トライアルをリクエストした後、GitLab.com でトライアルできます。
Community Edition または Enterprise Edition のライセンスなし（Free）の Self Managed インスタンスで Duo を試すことはできません。

GitLab Duo Enterprise を試すには Ultimate サブスクリプションが必要です。GitLab Duo Pro を試すには Premium サブスクリプションが必要です。新規または Premium のお客様は、[こちら](https://gitlab.com/-/trials/new) から GitLab Ultimate トライアルにサインアップすることで Duo Enterprise を無料で試すことができます。Duo Pro と Duo Enterprise に含まれる機能は [こちらにリスト](https://about.gitlab.com/gitlab-duo/#addons) されています。

| サブスクリプションタイプ | プロセス |
| ----------------- | ------- |
| GitLab を初めて使用する | 上記の手順に従って GitLab.com アカウントを作成し、Ultimate トライアルをリクエストします。次に [これらの手順](https://docs.gitlab.com/ee/subscriptions/subscription-add-ons.html#start-gitlab-duo-pro-trial) に従います。 |
| SaaS Premium | [これらの手順](https://docs.gitlab.com/ee/subscriptions/subscription-add-ons.html#start-gitlab-duo-pro-trial) に従って Duo Pro トライアルをリクエストし、シートを割り当てます。Duo Enterprise を試したい場合は、[こちら](https://gitlab.com/-/trials/new) から GitLab Ultimate トライアルにサインアップすることでこれを行えます。|
| SaaS Ultimate | [これらの手順](https://docs.gitlab.com/ee/subscriptions/subscription-add-ons.html#start-gitlab-duo-pro-trial) に従って Duo Enterprise トライアルをリクエストし、シートを割り当てます。 |
| Self Managed Community Edition / Self Managed Enterprise Edition Free  | Duo を試すには、トライアル専用の GitLab.com アカウントを作成する必要があります（「GitLab を初めて使用する」の手順に従ってください）。注: IDE で Duo Pro 機能を試すために、このアカウントにプロジェクトを追加する必要はありません。サポートされている [IDE 拡張機能](https://docs.gitlab.com/ee/user/project/repository/code_suggestions/supported_extensions.html) を構成するために [パーソナルアクセストークン](https://docs.gitlab.com/ee/user/profile/personal_access_tokens.html) を生成するだけです。[Code Suggestions](https://docs.gitlab.com/ee/user/project/repository/code_suggestions/) と [Duo Chat](https://docs.gitlab.com/ee/user/gitlab_duo_chat/) を使用できます。   |
| Self Managed Enterprise Edition Premium | [このオンラインフォーム](https://about.gitlab.com/solutions/gitlab-duo-pro/sales/) を使用してトライアルをリクエストし、Duo Pro を試すために [これらの手順](https://docs.gitlab.com/ee/subscriptions/subscription-add-ons.html#on-self-managed-and-gitlab-dedicated) に従います。Duo Enterprise を試したい場合は、[こちら](https://gitlab.com/-/trials/new) から GitLab Ultimate トライアルにサインアップすることでこれを行えます。|
| Self Managed Enterprise Edition Ultimate | [このオンラインフォーム](https://about.gitlab.com/solutions/gitlab-duo-pro/sales/) を使用してトライアルをリクエストし、Duo Enterprise を試すために [これらの手順](https://docs.gitlab.com/ee/subscriptions/subscription-add-ons.html#on-self-managed-and-gitlab-dedicated) に従います。 |

## プラットフォームの使い方を学ぶ

GitLab を初めて使用する場合でも、現在の使用方法を改善したい場合でも、以下のリソースが始めるのに役立ちます。ベストプラクティスを学ぶことで、トライアル中に習熟度を上げることができます:

- 充実した [ドキュメント](https://docs.gitlab.com/) に目を通し、[チュートリアル](https://docs.gitlab.com/?tab=Tutorials) をレビューします
- [GitLab University](https://university.gitlab.com/): トレーニングと認定資格のコレクション（無料および有料両方）
- [GitLab Youtube チャンネル](https://www.youtube.com/channel/UCnMGQ8QHMAnVIsI3xJrihhg): デモ、ユースケース、録画されたウェビナーなどを見つけます
- [リソースページ](https://about.gitlab.com/resources/): レポート、ebook、ウェブキャストなど
- [GitLab Blog](https://about.gitlab.com/blog/): ヒント、ユースケースなど興味のあるトピックを検索
- [コミュニティに参加](https://about.gitlab.com/community/) し、さまざまなプログラムを通じてメンバーになります
- [GitLab Forum](https://forum.gitlab.com/) で質問し、既存の GitLab ユーザーから答えを見つけます
- すでに Premium 顧客の場合、サポートチームから助けを得られます

## トライアル終了後はどうなりますか？

Premium SaaS ネームスペースまたは Premium Self Managed インスタンスでトライアルしている場合、無料の Ultimate トライアルが期限切れになると、アカウントは Premium にダウングレードして戻ります。

新しいネームスペースまたはインスタンスでトライアルしている場合、アカウントは Free ティアにダウングレードして戻ります。データは失われませんが、[有料機能にはアクセスできなくなります](https://docs.gitlab.com/ee/subscriptions/gitlab_com/#subscription-expiry)。

満足して購入またはアップグレードしたい場合は、[GitLab.com のアカウント内](https://docs.gitlab.com/ee/subscriptions/gitlab_com/) で行うことができます。Self Managed の場合、[サブスクリプションを購入してアクティベーションコードを受け取ることができます](https://docs.gitlab.com/ee/subscriptions/self_managed/#obtain-a-self-managed-subscription)。
