---
title: "CSE オペレーティングリズム"
upstream_path: /handbook/customer-success/csm/segment/cse/cse-operating-rhythm/
upstream_sha: b4eeb07f0d5f46e2fc5f8572be1a2547261aed89
translated_at: "2026-04-26T01:39:45Z"
translator: claude
stale: false
lastmod: "2025-11-05T16:08:40+01:00"
---

CSM/CSE 関連のハンドブックページについては、[CSM ハンドブックホームページ](/handbook/customer-success/csm/)をご覧ください。

---

## Success On-Demand（CSE）チームの顧客エンゲージメント種別

Success On-Demand（CSE）チームが顧客と関わる方法はいくつかあります。

1. [Gainsight から実施するターゲットキャンペーン](#targeted-campaigns)
1. [月次ウェビナーおよびハンズオンラボ](#monthly-webinars-and-hands-on-labs)
1. [営業主導の CSE エンゲージメントリクエスト](#success-on-demand-cse-engagement-request-process)

### ターゲットキャンペーン {#targeted-campaigns}

Customer Success Operations と CS リーダーは、GitLab のさまざまなヘルスメトリクスに基づいて、顧客インタラクションを促進し GitLab の採用・活用を改善するための一連のアウトリーチキャンペーンを決定します。キャンペーンの例を以下に示します。

- 21日チェックイン
- 90日低ライセンス活用率
- CI プロダクトコーチ

  既存のキャンペーンメール下書きは [Automated CSE Campaigns Content google doc](https://docs.google.com/document/d/1Db6y_i2gPQrPnJkJpAAbfFKQtw4c5VgSFJcHKDG-4hk/edit?usp=sharing) に掲載されています。メールキャンペーンは地域と ARR に基づいて対象グループに送信され、通常はそのセグメントを担当する特定の CSE の Calendly リンクが含まれます。

### 月次ウェビナーおよびハンズオンラボ {#monthly-webinars-and-hands-on-labs}

Success On-Demand（CSE）チームは、どなたでも参加できる月次ウェビナーおよびハンズオンラボを提供しています。[ウェビナーカレンダー](/handbook/customer-success/csm/segment/cse/webinar-calendar/)は私たちのウェブサイトに公開されており、各イベントの登録リンクが掲載されています。ウェビナーは事前録画されたコンテンツであり、CSE が Q&A に答えます。ラボは、各参加者がセッション中に演習を行うための専用ラボ環境を使用したハンズオン学習体験を提供します。

#### ウェビナーコンテンツの作成

CSE チームはコンテンツチームと連携してウェビナーのコンテンツを制作します。最初から最後まで質の高いウェビナーコンテンツを作成するために、次のリンクからガイドラインとヒントを参照できます: [CSE 向けウェビナーガイドライン](https://internal.gitlab.com/handbook/customer-success/cse/webinars/)

#### ハンズオンラボの準備と実施

翌月のハンズオンラボは [Customer Success Engineering - Content プロジェクト](https://gitlab.com/gitlab-com/customer-success/customer-success-engineering/content/-/issues/?label_name%5B%5D=cse-events%3A%3Asign-up) の Issue（ウェビナースケジュールとは別）に追加され、Success On-Demand（CSE）チームに DRI としてのサインアップが求められます。

##### ラボ環境リクエスト

> ラボ DRI として、環境のラボリクエストを提出する責任があります。理想的には、実施日の少なくとも1週間前に提出してください。サポートや質問については、`#demo-architect-partners` Slack チャンネルにお問い合わせください。

1. [Demo Architect Portal](https://cloud.gitlabdap.com/) にアクセスしてログインします。
1. ドロップダウンリストから **Content/Lab Request** を選択します。
1. Salesforce Account Link に [https://gitlab.my.salesforce.com/Account/](https://gitlab.my.salesforce.com/Account/) を入力します。
1. Opportunity type には **CSE Led Lab** を選択します。
1. フォームの残りの部分をできる限り記入します。
1. `Submit Request` をクリックします。

これにより、[Demo Architect - Workshop Management Board](https://gitlab.com/gitlab-com/customer-success/demo-engineering/workshop-library/demo-engineering-workshop-issues/-/boards/7697518?label_name[]=DA%20Workshop%20Request) に Issue が作成され、Demo Architecture チームが対応します。

本番用とテスト用の招待コードがペアで生成され、Issue のコメントで共有されます。Demo Architecture チームは DRI にセッション（トップレベルグループ）のオーナーシップを割り当て、招待コードと関連するランナーが正常に動作していることを確認します。

ラボ参加者は、ハンズオン演習に使用するサブグループへのアクセスと割り当てを確保するために、[gitlabdemo.com からアクセス](https://gitlabdemo.com/login)してラボ参加時に招待コードを引き換えます。各スライドデッキには、ホストが参加者をサブグループの作成とアクセス方法について案内するための詳細な説明が含まれています。

##### ラボの準備

イベント前に、ホストは適切な[マスタースライドデッキ](https://drive.google.com/drive/folders/1h-I2J_J4MlgBmjfwxpdGiyVM0vIVW9vY?usp=drive_link)のコピーを作成し、タイトル形式 `<ラボ名> - <地域> - 日付` で [2. Global Onboarding Labs -> Decks -> Delivered decks フォルダー](https://drive.google.com/drive/folders/1SYuAOlR9YqLSS3I9qebW8aKyRYx2Yv8I?usp=drive_link)に保存してください。ラボデッキでは、登録コードを現在のラボに合ったものに変更し、発表者スライドに自分の名前とプロフィール写真を追加します。

プログラムマネージャーは、ラボ前後の参加者とのすべてのコミュニケーションを担当し、ラボ後メールに追加するための Highspot リンクをリクエストします。

ラボのコンテンツは [GitLab Learn Labs Sample Projects グループ](https://gitlab.com/gitlab-learn-labs/sample-projects)に含まれています。使用するスライドデッキに適切なプロジェクトがリンクされているはずです。ホストは、技術的な問題がないことを確認するために、イベント前に少なくとも一度ラボ演習をすべて実行してください。

また、ラボ参加者のチャットに入力したいすべての情報とリンクを含む貼り付けメモドキュメントを作成してください。[セキュリティ＆コンプライアンスラボのサンプル貼り付けメモ](https://docs.google.com/document/d/1rNF2PvfJrunZgoI9PW4mPIirLLhyXH9ohXgLEmsXeRI/edit?usp=sharing)を参考にしてください。Q&A を手伝う方のために、#scale-workshops-planning Slack チャンネルにリンクを提供してください。#scale-workshops-planning Slack チャンネルはラボ前の質問、セットアップ、デモ環境の問題などに使用されます。

ラボ当日は、セットアップのためにラボ開始の少なくとも10分前にログインしてください。

ラボのハウスキーピング事項（ラボのスライドデッキにも記載する必要があります）:

- 全参加者はミュート — 参加者にはミュートを維持し、Q&A パネルに質問を入力するよう依頼する
- 開始前に gitlab.com のアカウントが必要
- x 日間のラボ環境へのアクセス（一部のラボは2日間、他は4日間 — 適切なスライドデッキに明記すること）

発表のヒント:

- ラボを進める際は、2 つの Chrome ウィンドウを並べて開く — 1 つは Issue 説明、もう 1 つは各ステップを進めるためのラボプロジェクト
- プレゼンテーション時はスライドをフルスクリーン表示モードにする
- 通知をすべてオフにする
- ブックマークバーを非表示にし、他の顧客に関するものを共有しないよう注意する
- 演習を進める際は、必要だと思う以上にゆっくり進む

ラボ後は、プログラムマネージャーが録画とスライドデッキへのリンクを含むイベント後メールを送信します。

#### コンテンツの問題報告

問題を報告する際は、[Content プロジェクト](https://gitlab.com/gitlab-com/customer-success/customer-success-engineering/content)の `Bug` テンプレートを使用し、できる限り多くの情報を記入してください。

### Success On-Demand（CSE）エンゲージメントリクエストプロセス {#success-on-demand-cse-engagement-request-process}

Success On-Demand（CSE）の[対象](https://gitlab.com/gitlab-com/customer-success/csm/-/wikis/CSM-Segments)となる顧客を担当するアカウントオーナー（AE、SAE、Renewals Manager）は、顧客ライフサイクルにおける通常のオペレーティングリズム（Gainsight からのプログラムによる通話招待、CSE による Outreach での手動アウトリーチ、オフィスアワーおよびウェビナー）以外に、CSE エンゲージメントが有益であると判断することがあります。このような場合は、Salesforce でアドホックエンゲージメントリクエストを提出するのが最善です。

新しいヘルプリクエスト（CSE ケース）を開くには、SFDC の顧客アカウントに移動し、ケースに関連付ける _Opportunity_ を選択します。Opportunity ページで _**Request Help**_ ボタンをクリックします。次のページでオプションを選択するよう求められます。CS Help を選択し、その後 _CSE Help（エスカレーションではない）_ を選択します。本当にエスカレーションである場合のみ _Escalations（CSM/CSE アカウント）_ を選択してください（エスカレーションに関する詳細は [Success On-Demand（CSE）エスカレーション](#success-on-demand-CSE-escalations)をご確認ください）。

次のステップでケースに関する情報を提供します。_On-Demand Catalog Offerings_ ドロップダウンで、顧客のニーズに最も合致するサービスを選択します。[以下](#cse-catalog-offerings)に各オファリングの詳細説明があります。次に、CSE が対話する _Contact_ を追加します。

その他の必須情報として、このエンゲージメントに期待される内容の詳細説明が必要です。_Challenges/Pain Points_ フィールドに関連するすべての情報を追加してください。CSE が顧客の状況を明確に理解することは、ミーティングに適切に準備するために非常に重要です。

以下のスクリーンショットが、Salesforce でのヘルプリクエストプロセスのナビゲーションに役立ちます:

![sfdc-opp-view-w_request_help_button](/images/customer-success/csm/segment/cse/sfdc-opp-view-w_request_help_button.png)

![sfdc-request-help-dropdown](/images/customer-success/csm/segment/cse/sfdc-request-help-dropdown.png)
![sfdc-cse-help-vs-esc](/images/customer-success/csm/segment/cse/sfdc-cse-help-vs-esc.png)
![sfdc-cse-case-creation-view](/images/customer-success/csm/segment/cse/sfdc-cse-case-creation-view.png)

ケースが作成されると、アカウントと Opportunity の両方の関連ケースリストに自動的に表示されます。その後、Success On-Demand（CSE）チームが対応するための Call to Action（CTA）が Gainsight で生成されます。ただし、これはリアルタイムではありません（バッチルールは毎日太平洋時間12:30〜1時から4時間ごとに実行されます）。

注意: 特に指定がない限り、ケースが作成されるとチームメンバーが AE/RM を CC して自動的に連絡先に連絡します。AE/RM がそれを望まない場合は、ケースの「Challenges/Pain Points（1000文字制限）」フィールドにメモを記載できます。

- CSE エンゲージメントの範囲と要件の詳細については、以下のリンクをご参照ください:
  - [CSE: CSE エンゲージメントの要件/スコープドキュメント](https://docs.google.com/document/d/1UVUPVTpEd3uYN8X1a_-LgB0GVY3fW6Y-S8sXfh-W65M/edit#)
  - [CSE ワークフロー - プロセス](https://docs.google.com/document/d/14hgdDN9JYVQLcuwGFfvryWDeXeWUpHLZv7RAUH7oers/edit#heading=h.vs4fplqboev)
  - [CSE Highspot ページ](https://gitlab.highspot.com/items/662a8dc9f635929082a95ca8?lfrm=shp.4)

#### Success On-Demand（CSE）カタログオファリング {#cse-catalog-offerings}

Success On-Demand（CSE）カタログは、さまざまな GitLab 分野における顧客の技術的ニーズを支援する構造化されたエンゲージメントオファリングのフレームワークを提供します。Success On-Demand（CSE）チームへのエンゲージメントリクエストを提出する際、アカウントエグゼクティブ（AE）、Renewals Manager（RM）、ソリューションアーキテクト（SA）は、顧客の具体的な要件に最も合致するオファリングをこれらの中から選択できます。各オファリングは、特定の技術的課題と実装シナリオに対応するよう設計されており、より焦点を絞った効果的なエンゲージメントを実現します。以下に各オファリングの詳細説明を示します:

- **FastTrack GitLab 導入**: DevOps リードとプラットフォーム管理者が GitLab デプロイメントを加速する方法について専門的なガイダンスを受けられます。CSE は設定、ユーザー管理戦略、ドキュメントに基づくベストプラクティスをカバーする具体的なセットアップ推奨事項を共有します。
- **GitLab アーキテクチャの最適化**: エンタープライズアーキテクトと技術リードが、堅牢でスケーラブルな GitLab インフラを設計するための専門的なガイダンスを受けられます。CSE は高可用性構成やダウンタイムリスクを低減するディザスタリカバリ戦略を含むアーキテクチャパターンのベストプラクティスを共有します。
- **CI ワークフローの効率化**: エンジニアリングリードと DevOps チームが CI パイプラインのパフォーマンスとリソース活用を向上させる戦略を学べます。CSE は顧客の gitlab-ci.yml 設定を分析し、ビルド時間短縮のための最適化パターン、ジョブ効率化のベストプラクティス、キャッシュ戦略、パイプラインアーキテクチャを共有して、全体的な CI パフォーマンスを向上させます。
- **アプリケーションセキュリティの強化**: 開発およびセキュリティリードが、パイプライン全体のセキュリティプラクティスを自動化・効率化する方法を学べます。CSE は GitLab のセキュリティ機能を使用した自動スキャンの実装、セキュリティポリシーの適用、脆弱性の効率的な管理戦略を共有します。
- **AI でワークフローを変革**: 開発チームと技術リーダーが、GitLab Duo を活用してソフトウェア開発ワークフロー全体を加速し、コード品質を向上させ、よりセキュアなアプリケーションを提供する方法を学べます。CSE は、成功した実装に基づいて、計画、コードサジェスト、セキュリティスキャン全体にわたる AI 支援機能の実装戦略を共有します。
- **移行戦略の最適化**: 技術リーダーと移行チームが、既存ツールから GitLab への移行のための実証済み戦略を学べます。CSE は、類似組織での成功した移行事例に基づいた移行アプローチ、技術的前提条件と制限事項、アーキテクチャ上の考慮事項、リスク軽減策を共有します。
- **ソフトウェアデリバリーの加速**: DevOps チームが信頼性向上のために継続的デプロイメントプロセスを効率化する方法を学べます。CSE はエンタープライズ実装から得られたデプロイメント自動化、環境設定、リリース管理のベストプラクティスを共有します。
- **GitLab 運用の強化**: システム管理者がスケールに応じた GitLab 環境管理の実証済み戦略を学べます。CSE はエンタープライズ実装に基づいた認証、ユーザー管理、グループ構成、プロジェクト設定のベストプラクティスを共有します。
- **プラットフォームオブザービリティの最適化**: プラットフォームエンジニアが GitLab の監視とオブザービリティプラクティスを最適化するための知見を得られます。CSE は基本的なシステム監視の設定、高度なオブザービリティの実装、ガーベジコレクション統計、リソース活用追跡のための監視戦略を共有します。
- **アジャイルプランニングのスケール化**: プロジェクトリーダーとデリバリーチームが、GitLab のプランニング機能を活用して可視性を向上させる方法を学べます。CSE は Issue、エピック、イテレーションを使用した効果的なワークフローの実装戦略と、バリューストリーム分析による進捗測定方法を共有します。

#### Gainsight でのアドホック CSE エンゲージメントの追跡（CSE のみ）

CSE がエンゲージメントリクエストを受理した後、CSE は適切な追跡と フォローアップメール後の CSAT サーベイ配信のために、Gainsight で [CTA](/handbook/customer-success/csm/gainsight/ctas/) を作成する必要があります。

- 以下の詳細で Cockpit から CTA を作成します
  - 名前: [顧客名] - Ad-Hoc CSE Engagement Request
  - 会社: [顧客名]
  - タイプ: Digital Journey
  - 理由: Other Digital Journey Reason
  - 優先度: （リクエストに基づいて最も適切なタイプを選択）
  - プレイブック: One-Off CSE Outreach

適切なメトリクスを生成するために、末尾の「 - Ad-Hoc CSE Engagement Request」は必ず含めてください。「名前」の文字数制限を満たすために、顧客名を短縮することができます。通話完了後は、`CSE Engagement` ミーティングタイプを使用して Gainsight の顧客タイムラインに[活動として記録](/handbook/customer-success/csm/cadence-calls/#review-and-update-account-details)し、顧客ミーティングの詳細に関する関連情報を記入してください。

CSE は、タスク `Follow Up Email Post One-off CSE Outreach Call Completion` のメールアシストを通じて、顧客へのフォローアップメールを準備してください。

これにより、メールの受信者に CSAT サーベイが配信されます。

## Success On-Demand（CSE）エンゲージメントの一般ガイドライン

### プレイブック

プレイブックの一覧は [CSE プレイブック](playbooks)サブページにあります。

### Success On-Demand（CSE）エスカレーション {#success-on-demand-CSE-escalations}

エスカレーションの対象として顧客を評価することは、ARR と LAM の観点から重要です。ARR はセグメントの ARR 範囲の上限の 80% 以上であるべきです。LAM は $100K を超えている必要があります。もう一つの重要な基準は、間近な更新です。3 ヶ月以内に更新が控えている場合、エスカレーションが状況を改善するのに役立つ可能性があります。

エスカレーションは、サポート、プロダクト、エンジニアリングチームが全体的な GitLab ビジネス目標に沿って取り組みを優先できるよう、成長の可能性が高いセグメント内の大きなアカウントに対してのみ、控えめに使用してください。

エスカレーションには2種類あります: サポートエスカレーションとアカウントエスカレーションです。

1. サポートエスカレーションは、顧客のビジネスに非常に大きな影響を与えており、感情が高ぶっている既存のチケットに対するものです。エスカレーションプロセスによって問題に注目を集め、サポート内での優先度を上げることができます。[サポートチケット対応リクエストページ](/handbook/support/internal-support/support-ticket-attention-requests/#submitting-a-support-ticket-attention-request-star--starring-a-ticket)に記載されているサポートチケットエスカレーションの定義されたプロセスに従うことで十分です。
1. アカウントエスカレーションは、サポートチケットに関連する場合とそうでない場合があります。製品バグや機能リクエストに関するオープン Issue に関連することもあります。例えば、重要なユースケースをブロックしており、GitLab 以外のソリューションで他のベンダーを評価させるほどの影響力がある、高インパクトな問題について顧客がコミュニケーションしている場合に有効です。これは GitLab に対する解約または縮小リスクをもたらします。

### ミーティングワークフロー

ミーティングは顧客とのインターフェイスに不可欠です。アカウントエグゼクティブとの通話に参加する場合も、自ら通話をリードする場合もあります。準備を整え、通話ができる限り効果的なものになるよう努める必要があります。必要なときに活用できるリソースを用意することが重要です。以下は顧客ミーティングの準備のための大まかなガイドラインとして活用できます。

1. 可能であれば、通話前に AE とミーティングして、顧客のニーズや要望に関するより関連性の高いコンテキストを得る。
1. [ノート](https://docs.google.com/document/u/0/d/159Bxv_H7Ds9QoGsmFW7c7Zoq5nqugAChN_a7XuKUeLs/edit)ドキュメントを作成する
   1. 顧客のリサーチや AE との対話から収集した情報に基づいた質問を準備する。関連する顧客の懸念、状況、技術スタックなどを含める（通常、AE のカスタムデッキまたは AE 直接から導出）
1. [スライドデッキ](https://docs.google.com/presentation/u/0/d/1bGvo9EOz-pa-hsPi6xmguuL20L5e5XNfDVaFYeHZWdc/edit)を作成する。
1. ノートとスライドデッキが [Customers & Prospects](https://drive.google.com/open?id=0B-ytP5bMib9Ta25aSi13Q25GY1U&resourcekey=0-MBirIe2vWyQXYi8cJEkH2Q) の適切な会社名のフォルダーにあることを確認する。
1. ミーティング招待の Zoom/Chorus リンクが正しいことを確認する。
1. 会社のリサーチ:
   1. Salesforce/SFDC で
   1. Gainsight で
   1. 注目すべきデータ:
      1. ライセンス数
      1. 従業員数
      1. 主要なペルソナ
      1. 業界
      1. 契約期間/最終更新日
1. AE からの**カスタムピッチデッキ**を見つけて学習する（**Salesforce Opportunity** で**カスタムピッチデッキ**リンクを見つけるか、AE に直接お問い合わせください）
1. 会社と関連業界についての一般的なリサーチを行い、より良いコンテキストを得る。
1. AE/SAE に連絡してミーティングについて知らせ、戦略やインサイトについて話し合う。すべての通話に AE/SAE を任意出席者として追加する。
1. 準備を整え、待機室から顧客が参加できるようにするために、少なくとも10〜15分前に通話に参加する。
1. Chorus が録音していること、顧客がそれを認識していることを確認する（通常、Calendly 招待で通知される）
1. 以下への素早いアクセスを確保する:
   1. [ノート](https://docs.google.com/document/u/0/d/159Bxv_H7Ds9QoGsmFW7c7Zoq5nqugAChN_a7XuKUeLs/edit)
   1. [スライドデッキ](https://docs.google.com/presentation/u/0/d/1bGvo9EOz-pa-hsPi6xmguuL20L5e5XNfDVaFYeHZWdc/edit)
   1. 参考用の [GitLab 機能](https://about.gitlab.com/features/)
   1. その他の関連リソース（アイデアについては [CSE - キックオフ / ディスカバリー質問テンプレート](https://docs.google.com/document/d/159Bxv_H7Ds9QoGsmFW7c7Zoq5nqugAChN_a7XuKUeLs/edit?usp=sharing)の付録を参照）
1. 短期的なエンゲージメントについての期待値を管理し、永続的に担当するわけではないことを伝えることを忘れない。
1. 通話完了後、2〜3日以内にフォローアップメールを送信することを伝える。
1. 通話完了後、Gainsight の顧客タイムラインに[活動として記録](/handbook/customer-success/csm/cadence-calls/#review-and-update-account-details)する。
1. 通話を見直し、AE と同期して顧客へのフォローアップメールを作成する。

#### フォローアップ

CSE はエンゲージメント後 2〜3 営業日以内に顧客にフォローアップしてください。このフォローアップには以下を含める必要があります:

1. ミーティング中に話し合われた主なポイントの要約
2. 合意したアクションアイテムや次のステップ
3. 顧客に役立つ可能性のある関連リソースまたはドキュメント
4. 追加の質問や懸念事項があれば連絡するよう顧客への案内

CSE は、エンゲージメントの結果と将来の参照のための重要なメモを含めて、Gainsight の CTA を更新してください。さらに注意が必要な未解決の事項がある場合は、CSE が適切なフォローアップタスクを作成するか、必要に応じて関連チームにエスカレーションしてください。

このプロセス全体を通じて、アカウント/Opportunity オーナー（AE/RM）との明確なコミュニケーションを維持し、エンゲージメントの進捗と重要な結果や懸念事項について常に情報共有することが重要です。

#### フォローアップメール後の追加質問

フォローアップメールを受け取った後に顧客から追加の質問があった場合、CSE は:

1. 顧客の問い合わせに迅速に対応する。理想的には 1 営業日以内に。
2. 関連するドキュメントやリソースを含む、明確で簡潔な回答を提供する。
3. 質問がより詳細な議論やデモを必要とする場合は、簡単なフォローアップ通話をスケジュールすることを申し出る。
4. 新しい情報と追加のアクションを含めて、Gainsight の CTA を更新する。
5. 顧客から提起された重要な進展や懸念事項についてアカウント/Opportunity オーナー（AE/RM）に情報共有する。
6. 顧客の質問が継続的なサポートやエンゲージメントの必要性を示している場合は、アカウントオーナーと CSE エンゲージメントの延長または他の GitLab チームの参加の可能性について話し合う。
7. 将来の参照のために、また顧客エンゲージメントの包括的な記録を維持するために、すべてのインタラクションと結果を Gainsight に適切に文書化する。

**重要な注意事項**:

- 顧客が対処したいトピックが新しいトピックである場合は、異なるトピック/リクエストを明確に区別するために新しいリクエストを開いてください。また、4週間以上経過したものも新しいリクエストとして扱います。
- 原則として: 同じトピックについてのフォローアップは 3 回を超えないようにします。
- 前の四半期のリクエストは、以前のトピックに関連する場合でも再開しないでください。メトリクスに意図しない影響が生じる可能性があります。

顧客が AE または RM に追加の質問を持ってきた場合は、以前その顧客と通話した CSE に案内してください。

## Success On-Demand（CSE）便利なリンク集

QBR: [テンプレート](https://docs.google.com/presentation/d/1YlEpP81DlZd5rSqKKlxZclHY8ZDT6U1y342QFVt4qhA/edit?usp=sharing) / [CSE ケースダッシュボード](https://gitlab.gainsightcloud.com/v1/ui/dashboard#/d7283d4f-4314-4bb8-a3f2-13b32a532ad7) / [CSE マネージャーダッシュボード](https://gitlab.gainsightcloud.com/v1/ui/dashboard#/b6c9482d-e9b8-4167-951e-f67b908cdf37)
**INITIATIVES**: [全イニシアティブ](https://gitlab.com/gitlab-com/customer-success/customer-success-engineering/scale-cse/-/issues/?sort=created_date&state=opened&label_name%5B%5D=CSE%20Initiative&first_page_size=100) / [サポートが必要なイニシアティブ](https://gitlab.com/gitlab-com/customer-success/customer-success-engineering/scale-cse/-/issues/?sort=created_date&state=opened&label_name%5B%5D=CSE%20Initiative%3A%3ANeeds%20Help&first_page_size=100) / [自分に割り当てられたコメント](https://drive.google.com/drive/u/1/search?q=followup:actionitems) / [イニシアティブボード](https://gitlab.com/gitlab-com/customer-success/customer-success-engineering/scale-cse/-/boards/7715232?label_name[]=CSE%20Initiative)
**SIGNPOST**: [プロダクト Slack チャンネルを探す](/handbook/product/categories/features/) / [CS ツール](https://gitlab.com/gitlab-com/cs-tools/gitlab-cs-tools) / [バージョンメトリクス](https://version.gitlab.com/users/sign_in) / [メトリクスディクショナリシート](https://docs.google.com/spreadsheets/d/1EhSXqx6YXcpqHg2TpS0ZN5Rk_d2hhrTPrW5FTbmuZjw/edit?gid=0#gid=0) + [ツール](https://metrics.gitlab.com/)
**1:MANY**: [Adoption Labs マスターデッキ](https://drive.google.com/drive/u/1/folders/1h-I2J_J4MlgBmjfwxpdGiyVM0vIVW9vY) / [ウェビナーマスター録画](https://drive.google.com/drive/u/1/folders/1x0_7J30cTpfbRXjrXgG_2XOIARLusNt3) / [ウェビナー YouTube](https://www.youtube.com/playlist?list=PL05JrBw4t0Kpczt4pRtyF147Uvn2bGGvq) / [Scale ウェビナーダッシュボード](https://gitlab.gainsightcloud.com/v1/ui/dashboard#/7b7c1229-e510-490f-9dbe-5c082b4e1c30)
**COACH**: [CI プロダクトコーチプレイブック](https://docs.google.com/document/d/1qUu2JGe9c_KGMaC67z1R5li_5IVFKdyuz2xdFnic97U/edit) / [CI コーチレポート](https://docs.google.com/document/d/1LUtRu5EiPES9g9EORrk6poZ6t6Grj1Wqd19CbYepHGM/edit?usp=sharing) / [セキュリティコーチプレイブック](https://docs.google.com/document/d/1e1-Ib6lDR61QigylGLmAEWMePorauCWdg2Kb3v4jYLM) / [パイプラインパーサー](https://gitlab.com/ci-product-coach-pipeline-parser/pipeline-parser-2-0) / [セキュリティコーチの一般的なトピックと推奨事項](https://docs.google.com/document/d/1li025fruN2shzQr5tVE5Ss0wVnXcIzOMGe9V6aqeuJ4/edit#heading=h.ndg2qmc91wtx)
**DEMO**: [デモクラウド](https://gitlabdemo.cloud/login) / [共有デモシステムドキュメント](/handbook/customer-success/demo-systems/#access-shared-omnibus-instances) / [サンドボックスクラウド](https://gitlabsandbox.cloud/login) / [CS 共有デモスペース](https://gitlab.com/gitlab-learn-labs/webinars)
**TRAINING**: [DevSecOps ブートキャンプ Nana](https://techworld-with-nana.teachable.com/p/devsecops-bootcamp) / [新 CSE ラーニングパス](https://university.gitlab.com/learn/learning-path/scale-customer-success-engineer-cse-onboarding)
**便利なアプリ**: [Rectangle](https://rectangleapp.com/) / [Amphetamine](https://apps.apple.com/us/app/amphetamine/id937984704?mt=12)
**CSE ランチ＆ラーン録画**: [録画](https://drive.google.com/drive/folders/1lXYzA4QSFEtR1zr0n7Nby7OYMrUYoVw4)
