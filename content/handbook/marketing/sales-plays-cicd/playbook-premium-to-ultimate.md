---
title: "Sales Play: Premium から Ultimate へのアップセル"
description: "このページには GTM-CICD sales play のすべての情報が含まれています。"
upstream_path: /handbook/marketing/sales-plays-cicd/playbook-premium-to-ultimate/
upstream_sha: 1e195b58b9f249ff10bd0e705106c320fee86141
translated_at: "2026-05-14T00:00:00Z"
translator: claude
stale: false
---

注: sales play はレシピだと考えてください。レシピに従えば、より予測可能で一貫した結果を達成できます。最適に機能する（または失敗する）アセットやアプローチを見つけたら、レシピを微調整して継続的に改善できます。**改善案があれば、[この MR](https://gitlab.com/gitlab-com/marketing/strategic-marketing/product-marketing/-/issues/5095) にコメントで提案し、他の人の提案にアップボートしてください。

* [Sales Play Tactics](#sales-play-tactics) に移動
* [Sales Play Quick Reference Guide](https://docs.google.com/presentation/d/1F0aZ4k9NutSwYDBCiXF4AcwprBPDcsISvAOYb7NgepM/edit?usp=sharing)（内部）

## 概要

**目標** - すでに [CI/CD](https://about.gitlab.com/topics/ci-cd/) を使用しているランディング済みアカウントを、GitLab Premium から GitLab Ultimate にエクスパンドして変換する。

この sales play は誰のためのものか？

* プライマリ: 1 つ以上の既存 GitLab Premium 顧客をコールする SAE と AE
* セカンダリ: 1 つ以上の既存 GitLab Premium 顧客を支援する SA と CSM

*注: このプレイは SDR には FYI のみです。なぜならティアのアップセルであり、必ずしもシートのエクスパンドではないからです。*

## 誰に会うべきか

**理想的な顧客プロフィール** - すでに CI/CD を使用している既存 GitLab Premium 顧客

* ボーナスポイント:
  * 変革を実施中または計画中の低い成熟度レベルの組織
  * 個人レベルとエグゼクティブレベルでの可視性を欠いた、特にセキュリティに関する、異なるツールを持つサイロ化されたチーム
  * 厳格な規制セキュリティまたはコンプライアンス要件を持つ組織

**ターゲットバイヤーペルソナ**

| ペルソナの役割  | 可能性のあるタイトル|
| ------------- | ---------------------- |
| エコノミックバイヤー    | CISO またはセキュリティマネージャー、VP of Security、Director of Security、VP of IT または CTO、App/Dev Director |
| テクニカルインフルエンサー    | Chief Architect、App Dev Manager |
| 考慮すべきその他のペルソナ | Infrastructure Engineering Director、Release and Change Management Director |

**ターゲットアカウントリスト**

* [アカウントリスト](https://docs.google.com/spreadsheets/d/1Wb1oumCp8vA7hwexQ-bKm37mDbj4rzwpLJ11TtJDh98/edit#gid=1408744602)

## 開始する

以下の質問を考慮してください:

* 何が顧客を GitLab Ultimate に移行することから（または移行を検討することから）妨げてきたか？
* Ultimate へのアップグレードがうまく整合する顧客の戦略的イニシアチブまたは優先事項はあるか？
* 適切なペルソナ/チーム（上記の Target Buyer Personas を参照）と関わっているか？
* 権力/権限（ビジネスの意思決定者）にアクセスできるか？
* アカウント内のあなたのチャンピオンは誰か？
* GitLab Ultimate が有効にする機能と PBO は顧客にとって重要か？なぜそうかまたはそうでないか？どうしてそれがわかるか？

## バリューディスカバリー

### 共通のペイン

GitLab Premium 顧客は、以下の課題のうち 1 つ以上を経験している可能性があります:

| 課題（「Before シナリオ」）  | だから何（「ネガティブな結果」）  |
| ------------- |-------------|
| セキュリティエキスパートにならずに安全なコードを書くことの難しさ   | リスクの増加  |
| SDLC の遅い段階で見つかる脆弱性 | 高コストな修復、最後の瞬間のプロダクションブロック |
| 脆弱性の高コストなトリアージと追跡    | 希少なセキュリティリソースの非効率な使用、長い修復プロセス |
| 複雑なツールチェーン、プラグイン、脆弱な自動化スクリプトの管理   | 追加のコスト、保守、管理オーバーヘッド |
|   スキャンが一貫して実行され、ポリシーが適用されることをどのように確認するか          |      チームはスキャンをスキップしたり、例外を使用して進めたりする可能性があり、これが発生したときにツール間で確認するのが難しい      |
| DevOps がスケールするにつれてセキュリティコストが予測不可能または懸念される | アプリ数が増えるにつれて、より多くのお金を見つけなければならない |

セキュリティのペインポイントとそれらに関する探索的な質問の詳細なビューは、[DevSecOps リソースページ](/handbook/marketing/brand-and-product-marketing/product-and-solution-marketing/usecase-gtm/devsecops/#discovery-questions) で見つかります

### 共通の利益

GitLab Premium から GitLab Ultimate にアップグレードすることで、顧客は以下の利益のうち 1 つ以上を経験する可能性があります:

| 望まれる将来の状態（「After シナリオ」） | だから何（「ポジティブなビジネス成果」）   |
| ------------- | ------------- |
| セキュリティと開発の両方のより大きな効率    | より少ないリスクと DevOps のより大きなベロシティ |
| ポリシーへの一貫したコンプライアンス    | プロダクションでの脆弱性のリスクの減少と容易な監査 |
| セキュリティ露出の削減、より多くのスキャンによりより多くの脆弱性を発見    | 財務とレピュテーションへのリスク削減 |
| DevOps とスケールする予測可能なセキュリティコスト | DevOps と App Sec の両方がスケールするにつれて、自信を持って予測し予算化できる|

### 必要な機能

上記の強調されたポジティブなビジネス成果を達成するために、顧客が解決する必要のあるどのような必要な機能があり、成功はどのように測定されるか？

| 必要な機能 |  顧客メトリクス  |
| ------------- | ------------- |
| 包括的なアプリセックスキャン方法    | 複数のスキャンタイプでスキャンされたアプリの割合  |
| CI パイプライン内の開発者に配信されるスキャン結果    | 本番前に見つかった脆弱性 |
| セキュリティガバナンス    | 監査に費やされた時間、より少ないコンプライアンス問題 |
| サードパーティスキャナーを使用するオプション | メトリクス？ |
| 脆弱性管理 | 平均解決時間 |

## 顧客とのエンゲージメント

注: たぶん私たちは [このリンクを mvc1 として](/handbook/marketing/brand-and-product-marketing/product-and-solution-marketing/usecase-gtm/devsecops/#discovery-questions) 使用し、それから提案された形式にリソースページを変更しますか？

| 顧客のニーズをよりよく理解するための質問  | ディスカバリー質問  |
| ------------- | ------------- |
| 現在の状態    | 1. セキュリティを左にシフトしたいですか？それはどうですか？<br>2. 今日どのセキュリティツールを使用していますか？<br>3. 現在、コンテナと Kubernetes をどのようにセキュアにしていますか？|
| 将来の状態    | 1. シフトレフトの取り組みを簡素化できたらどうですか？<br>2. 既存のツールに関してどのような課題があり、2 年後のコストを予測できますか？<br>3. コンテナと K8s をよりよく保護したいですか？ |
| 必要な機能   | 1. CI に統合されたセキュリティは、そこに到達するのに役立ちますか？<br>2. CI パイプラインで開発者に結果を提供するすべてのセキュリティスキャンを可能にする 1 つの既知のコストがあり、セキュリティ専門家向けの脆弱性管理が伴うとしたらどうですか？既存のセキュリティツールを排除したり、その使用/コストを削減したりできたらどうですか？<br>3. コンテナをスキャンし、K8s クラスター内のホストとそのトラフィックを監視できたらどうですか？ |

注: 彼らがシフトレフトを望まず、開発者がセキュリティの欠陥を見つけて修正できるようにすることを望まないと言った場合、おそらくセキュリティアナリストと話しています。彼/彼女の上司、DevOps、またはアプリケーション開発/エンジニアリングチームと話してください。

## バリューポジショニング

### エレベーターピッチ

> GitLab Ultimate を使用すると、組織は DevOps のベロシティに追いつきながら、本当にセキュリティを左（そして右！）にシフトできます。開発者が脆弱性をより早く見つけて修正できるようにし、セキュリティチームが検出から修復までのリスクを管理できるようにします。GitLab では、統合が彼らのために行われています。CI パイプラインにセキュリティツールを適合させる必要はありません - すでに組み込まれています！そして、スケールしても 1 つの予測可能なコストで！

GitLab Ultimate は、優先事項、セキュリティ、リスク、コンプライアンスを管理しながら配信を最適化・加速することで、IT 変革を実現します。

*注: Premium に含まれるすべて、加えてすべてのセキュリティスキャナー、脆弱性管理、セキュリティとコンプライアンスダッシュボード、無料ゲストユーザー、50,000 コンピュート分、指名 CSM、その他…*

### GitLab はどうそれを行うか

[GitLab がセキュリティの市場要件をどのように満たすか](/handbook/marketing/brand-and-product-marketing/product-and-solution-marketing/usecase-gtm/devsecops/#how-gitlab-meets-the-market-requirements)（リンクには利益、ビデオなどが含まれます）。

### GitLab はそれをどうよりよく行うか

GitLab Ultimate を使用すると、組織は DevOps のベロシティとクラウドネイティブアプリの新しい攻撃面に追いつきながら、本当にセキュリティを左（そして右！）にシフトして脆弱性をより早く見つけて修正できます。GitLab では、統合が彼らのために行われています。CI パイプラインにセキュリティツールを適合させる必要はありません - 完了しています！そして、スケールしても 1 つの予測可能なコストで！

**1 つのコストで、以下が可能です:**

* すべてのアプリですべてのコードコミットをスキャン（スキャンが高すぎて選ぶ必要はもうありません）
* 個別のスキャナーが見逃す可能性のある脅威を見つけるため、複数のスキャンタイプを使用
* 開発者とセキュリティの統合されたコラボレーションで、見つかったすべての脆弱性を 1 か所で管理
* 修復進捗を容易に評価
* ポリシーを自動化し、個別の検査ではなく例外に集中

DevOps とセキュリティの単一アプリケーションの利点には、ポリシーと規制要件への一貫したコンプライアンスを備えた比類のない可視性とインサイト/トレーサビリティが含まれ、よりクリーンで容易な監査が可能になります。

**[主要な GitLab 差別化要因](/handbook/marketing/brand-and-product-marketing/product-and-solution-marketing/usecase-gtm/devsecops/#top-differentiators)** には以下が含まれます:

1. Feature Branch から作成された MR に表示される詳細で実用的なスキャン結果
   * Microsoft は SAST と Dependencies に対してこれを行います。他のスキャンタイプには統合と独自のライセンスが必要です。
   * Veracode、Fortify、Synopsis は CI パイプライン内で迅速にスキャンするのに苦労し、DIY 統合を必要とします。
1. セキュリティポリシーに基づく MR のブロック
   * Microsoft は SAST と Dependencies に対してこれを行います。サードパーティのスキャンは CI パイプラインのカスタマイズが必要になる可能性があります。
1. コンプライアンス管理
   * GitLab は最近 [Compliance Pipeline Configurations](https://about.gitlab.com/releases/gitlab-com/#compliance-pipeline-configurations) を立ち上げました。これにより、顧客は特定のコンプライアンスフレームワーク（PCI、HIPAA、またはカスタムフレームワーク）の単一のパイプライン定義をセットアップすることで、職務分離をさらに強化できます。そのフレームワークを使用するすべてのプロジェクトは自動的に事前定義されたパイプラインを含みます。
   * GitLab [Compliance Management](https://about.gitlab.com/solutions/compliance/) は、コードだけでなくソフトウェアファクトリー自体も保護します。これは [Solarwinds 侵害](https://docs.google.com/document/d/1sGyjW2oJVR86d05UKzZ8iCusBqp3IICC1549-R5Hx1o/edit) の後の大きな懸念事項です。
   * GitLab は [コンプライアンスを容易にします](https://about.gitlab.com/blog/2020/07/02/compliance-made-easy/)
1. Fuzz テスト、API テストを含む
   * 他に CI パイプラインに Fuzzing も API テストも統合しているところはありません。
   * Fuzzing はセキュリティ CVE（既知の脆弱性のシグネチャ）によって特定されない欠陥を見つけるのに役立ちます
   * Fuzzing はクラウドネイティブアプリと Infrastructure as Code で新たな重要性を獲得しています
1. オフライン環境
   * 政府および金融サービスなどの規制業界にとって特に重要
   * ほとんどのスキャナーは、最新のセキュリティルール/アップデートのために保護されたネットワークを離れる必要があります。私たちは、これらを切断された環境で実行するためにコンテナ化できます。
1. 脆弱性管理（vs ポイントソリューション）
   * 従来のアプリセックベンダー（Veracode、Fortify、Synopsis）は、各スキャナーから見つかった脆弱性を管理するセキュリティセンターを販売します（すべて別売り！）。GitLab は脆弱性管理が付属するだけでなく、開発者が使用するのと同じツールにあるため、翻訳で失われるものは何もありません。さらに、サードパーティのスキャン結果を CI パイプライン（MR）に簡単に取り込んで、見つかったものを比較できます。これは [ThreadFix](https://coalfire.com/services/security) に幾分似ています。顧客はこれを行うために他のツールや支払いをしていますか？

*提供されたリンクで価値とビデオを含む追加の詳細を参照*

### 証拠ポイント

[証拠ポイント](/handbook/marketing/brand-and-product-marketing/product-and-solution-marketing/usecase-gtm/devsecops/#proof-points---customers)

## 異議処理

**最も一般的な異議**

| 異議  | 応答    |
| ------------- | ------------- |
| あなたのスキャン機能はリーディングスキャナーとどう比較されますか？それらはどのくらい正確ですか？    | [精度スライド](https://docs.google.com/presentation/d/1mLnmgQ5hqTzcwk3Vjh0BEIdx9SYgORV-2g7zPKmFKFc/edit#slide=id.g9e2080204d_0_1084)、[G2 SAST](https://www.g2.com/categories/static-application-security-testing-sast#grid) |
| 既存のスキャナーと統合できますか？ | 私たちは [他のスキャナーと連携](https://docs.gitlab.com/ee/development/integrations/secure.html) するか [それらを置き換える](https://docs.google.com/presentation/d/1mLnmgQ5hqTzcwk3Vjh0BEIdx9SYgORV-2g7zPKmFKFc/edit#slide=id.g9e2080204d_0_3374) ことができます |
| Ultimate は 5 倍です。       | [なぜ Ultimate](/handbook/marketing/brand-and-product-marketing/product-and-solution-marketing/usecase-gtm/devsecops/#ultimate)         |

その他の異議と応答は、[Potential objections](/handbook/marketing/brand-and-product-marketing/product-and-solution-marketing/usecase-gtm/devsecops/#potential-objections) について詳しい情報がある [FAQ デッキ](https://docs.google.com/presentation/d/1mLnmgQ5hqTzcwk3Vjh0BEIdx9SYgORV-2g7zPKmFKFc/edit#slide=id.g2823c3f9ca_0_9) で見つかります。

## サービス

[一般的な PS デッキ](https://docs.google.com/presentation/d/1CFR8_ZyE9r4Dk_mjoWGe4ZkhtBimSdN0pylIPu-NAeU/edit#slide=id.g2823c3f9ca_0_9)

GitLab（または GitLab パートナー）は、価値実現までの時間を加速し、リスクを軽減するために、以下のサービスを提供します:

* 学生が [security specialist certification](https://about.gitlab.com/services/education/gitlab-security-specialist/) を取得できるようにする [Security Essentials Training](https://about.gitlab.com/services/education/security-essentials/)。
* [Secure Advisory Services](https://gitlab.com/gitlab-com/customer-success/professional-services-group/global-practice-development/consulting/secure-advisory) は、シフトレフトおよび/または SDLC サプライチェーンの保護のためにセキュリティプロセスを再構築したい顧客にガイダンスを提供できます。これらのサービスのターゲットオーディエンスは中央セキュリティまたは SDLC ガバナンス/コンプライアンスチームです。この提供の価格は異なります。詳細については、[プロフェッショナルサービスの slack チャンネル](/handbook/customer-success/professional-services-engineering/working-with/#slack) で @em と話してください。

## Sales Play Tactics {#sales-play-tactics}

これらは、既存の GitLab CI ユーザーの Premium から Ultimate へのアップグレードのターゲットオーディエンスとのエンゲージメントを開始するための Sales 規定アクションです。**戦略とアクションは市場セグメントによって異なります**。SMB は顧客が開始するインバウンドコンタクトを促進するマーケティングに依存し、ENT/MM は主に営業が開始する会話をガイドするためにプレイを使用します。

### エンタープライズおよびミッドマーケットアカウント

**戦略**

エンタープライズと MM の場合、営業は以下の推奨メールテンプレートと会話フローを使用して、必要に応じて変更しながら、顧客との会話に積極的にアウトリーチします。これらのアカウントは **自動** メールキャンペーンに含まれま **せん**。これにより、SAE はアカウントで誰に連絡するかをより大きくコントロールでき、連絡先はより個人的になります。

**ENT および MM 営業アクション**

1. [ ] [ターゲットリスト](https://docs.google.com/spreadsheets/d/1Wb1oumCp8vA7hwexQ-bKm37mDbj4rzwpLJ11TtJDh98/edit#gid=682218372) をレビューし、連絡先を優先順位付けします。
1. [ ] このプレイの背景（上記）、特に差別化要因と異議に慣れ親しんでください
1. [ ] [推奨メールシーケンス](#recommended-email-sequence-email-templates) と次のステップ（下記）に慣れ親しんでください。
1. [ ] 以下の [3 つのメールテンプレート](#recommended-email-sequence-email-templates) を使用してリードにアウトリーチします。
   * 推奨シーケンスを提供しましたが、現在の会話に基づいて開始するのに最適なメールを選択してください。
   * Gmail にメールをそのままコピー＆ペーストしてください。
   * パーソナライズしてかまいませんが、**メールテンプレート内のハイパーリンクは編集しないでください。** 各リンクは、最適なユーザーエクスペリエンスのための推奨コンテンツを含む Pathfactory トラックにリンクされています。
1. [ ] どの連絡先が応答したかを示すアラートのために自分のメール受信箱をチェックします（アラートメールの例: [Contact request](https://gitlab.com/gitlab-com/marketing/demand-generation/campaigns/-/issues/1120#white_check_mark-lead-alert)、[Email offer engagement](https://gitlab.com/gitlab-com/marketing/demand-generation/campaigns/-/issues/1135#sample-alert-email)）
1. [ ] 彼らが応答したメールに対応する以下の提案されたミーティング（1、2、または 3）を実施します。
1. [ ] SFDC でセールスステージを更新します。
1. [ ] 最初のミーティングに基づいて、次のステップに進むためのケイデンスを決定します。前回送信したメールに応答がなくても、7 ～ 10 日後にシーケンスの次のメールを送信することを推奨します。フローは、各メールについて議論するための電話がなくても、彼らの考えを前進させることを意図しています。
1. [ ] POV または販売に至るまで、または推奨メールの最後まで、次の推奨メールで繰り返します。推奨メールとミーティングの最後に達し、進捗が見られない場合は、[この Issue](https://gitlab.com/gitlab-com/marketing/strategic-marketing/product-marketing/-/issues/5095) または slack の #gtm-ci-cd でフィードバックを残してください。どこで詰まっていますか？どうすれば助けられますか？

### スモールビジネスアカウント

**戦略**

SMB 顧客の場合、推奨メールシーケンスのマーケティング生成「お問い合わせ」メールへのインバウンド応答に依存します。マーケティングはこのセグメントの主要な推進者で、最初のミーティングに導きます。その後、営業は関心のある見込み顧客とのフォローアップに以下のアクションを使用します。

**SMB 営業アクション**

1. [ ] [ターゲットアカウント/連絡先](https://docs.google.com/spreadsheets/d/1Wb1oumCp8vA7hwexQ-bKm37mDbj4rzwpLJ11TtJDh98/edit#gid=1408744602) のリストをレビューします
1. [ ] 2021-04-23 金曜日までに、[このターゲットリスト](https://docs.google.com/spreadsheets/d/1Wb1oumCp8vA7hwexQ-bKm37mDbj4rzwpLJ11TtJDh98/edit#gid=1408744602) の A 列と B 列を記入することで、マーケティング生成メールから除外する必要のある個別の連絡先を特定します。デフォルトのアプローチは、既存の取引にコミュニケーションが破壊的な場合のみ除外し、できるだけ多くのアカウントと顧客を含めることです。最初の自動メールは **4 月 27 日（火）から** 送信され、その後のメールは 7 日ごとに続きます。
1. [ ] このプレイの背景（上記）、特に差別化要因と異議に慣れ親しんでください
1. [ ] メールシーケンスと次のステップ（下記）に慣れ親しんでください。
1. [ ] どの連絡先が応答したかを示すアラートのために自分のメール受信箱をチェックします（アラートメールの例: [Contact request](https://gitlab.com/gitlab-com/marketing/demand-generation/campaigns/-/issues/1120#white_check_mark-lead-alert)、[Email offer engagement](https://gitlab.com/gitlab-com/marketing/demand-generation/campaigns/-/issues/1135#sample-alert-email)）
1. [ ] 彼らが応答したメールに対応する以下の提案されたミーティング（1、2、または 3）を実施します。
1. [ ] SFDC でセールスステージを更新します。
1. [ ] 最初のミーティングに基づいて、次のステップに進むためのケイデンスを決定します。前回送信したメールに応答がなくても、7 ～ 10 日後にシーケンスの次のメールを送信することを推奨します。フローは、各メールについて議論するための電話がなくても、彼らの考えを前進させることを意図しています。
1. [ ] 彼らが自動メールで「contact sales」をクリックしたら、**あなた** は提供されたテンプレートを使用して手動でその後のメールを送信する必要があります。これにより、最初のミーティングに基づいてケイデンスと次のステップを決定できます。**テンプレートを使用してください** これにはトラッキングリンクが提供されており、彼らの応答についてアラートできます（マーケティングは何が最も有用かを確認できます）。必要に応じて、独自の会話に合わせて Gmail でテンプレートを変更できます。
1. [ ] POV または販売に至るまで、次の推奨メールで繰り返します。推奨メールとミーティングの最後に達し、進捗が見られない場合は、[この Issue](https://gitlab.com/gitlab-com/marketing/strategic-marketing/product-marketing/-/issues/5095) または slack の #gtm-ci-cd でフィードバックを残してください。どこで詰まっていますか？どうすれば助けられますか？

### 推奨メールシーケンスとメールテンプレート {#recommended-email-sequence-email-templates}

この推奨メールのシーケンスは、見込み顧客を関心から POV へと移動することを意図しています。注:

* マーケティングはこれらのメールを SMB ターゲットに送信してリードを生成します。
* MM と ENT 営業は、現在の会話に基づいて開始するのに最適なメールを選択します。その後、テンプレートを使用して、提供された連絡先と追加の連絡先に送信し、リードを生成します。

1. [メールテンプレート 1](https://docs.google.com/document/d/1uqRa9VUqFP0GVvuiqMOczjJOo8-OAd9d2q7pa04Orow/edit?usp=sharing)

   件名: **Interested in speed and security?**

   オファー 1: [From DevOps to DevSecOps: Automate your security tests with CI](https://docs.google.com/document/d/1uqRa9VUqFP0GVvuiqMOczjJOo8-OAd9d2q7pa04Orow/edit#bookmark=id.7jua79vyici7)

1. [メールテンプレート 2](https://docs.google.com/document/d/1uqRa9VUqFP0GVvuiqMOczjJOo8-OAd9d2q7pa04Orow/edit#bookmark=id.mpc3s9pyes5e)

   件名: **Learn how to deploy to production 6x faster**

   オファー 2: [How Chorus uses GitLab to power its development](https://learn.gitlab.com/c/chorus-gitlab?x=h7zzhf&utm_medium=email&utm_source=gmail&utm_campaign=premtoultimatesp&utm_content=choruscasestudy)

1. [メールテンプレート 3](https://docs.google.com/document/d/1uqRa9VUqFP0GVvuiqMOczjJOo8-OAd9d2q7pa04Orow/edit#bookmark=id.4dnnwki2f1vq)

   件名: **No more afterthought security**

   オファー 3: [Tired of afterthought security? Take a fresh look at GitLab Ultimate](https://learn.gitlab.com/c/security-features-in?x=6e4ppk&utm_medium=email&utm_source=gmail&utm_campaign=premtoultimatesp&utm_content=afterthoughtsecblog)

## 次のステップ

### バリューアラインメントに到達するためのミーティング

顧客がメール（マーケティングまたはあなた自身からのいずれか）にエンゲージする場合、リードはメールであなたに届き、どのアセットをクリックしたか、また「contact us」ボタンをクリックしたかを示します。このインサイトと持っていたかもしれない会話に基づいて、このプログレッションのどこで最初に開始するかが最も適切かを選択する必要があります。

GitLab セキュリティ機能の認知と関心から、検討、ソリューションと期待される価値の整合、最終的な購入（しゃれ意図あり）へと顧客を進めるための以下のシーケンスが推奨されます

#### ミーティング 1 - ビジネス目標を評価する

ビジネスの優先事項、既存のセキュリティツール、主なペインポイントを判断するために、これらの推奨アセットとともに上記の [Value Discovery](#value-discovery) を使用します:

* [セキュリティとコンプライアンスの概要](https://docs.google.com/presentation/d/1WHTyUDOMuSVK9uK7hhSIQ_JbeUbo7k5AW3D6WwBReOg/edit#slide=id.g9d701d7d89_8_1931)（[望まれる成果](https://docs.google.com/presentation/d/1WHTyUDOMuSVK9uK7hhSIQ_JbeUbo7k5AW3D6WwBReOg/edit#slide=id.g9d701d7d89_8_1990) スライドに集中）
* [GitLab でコンプライアンスを管理する](https://youtu.be/QV2dIocn-hk)
* ソフトウェアサプライチェーンの保護（アセットは近日公開）。

**4 つの質問をします:**

1. シフトレフトを望みますか？（いいえの場合、セキュリティではなく Dev または DevOps チームに話します）
1. 現在使用中および/または検討中のツールは何ですか？（SAST、DAST、Dependencies、License Compliance、Container scanning のそれぞれについて）。これは Microsoft ショップですか？SFDC に入力してください（お願いします、非常に役立ちます）。
1. コンテナおよび/または Kubernetes を使用していますか？はいの場合、コンテナをスキャンしていますか？Helm chart は？API のテストは？
1. 彼らはどの [望まれる成果](https://docs.google.com/presentation/d/1WHTyUDOMuSVK9uK7hhSIQ_JbeUbo7k5AW3D6WwBReOg/edit#slide=id.g9d701d7d89_8_1990) に最も関連していますか: 効率、一貫性、リスク、予測可能なコスト？

**マイルストーン:** 主要なバリュードライバー、チャンピオン、エコノミックバイヤーを特定し、2 回目のミーティングに合意

**メトリクス:** Opportunity stage 0 - 受け入れ保留中、または stage 1 - Sales Accepted Opp、または機会なし

#### ミーティング 2 - セキュリティの優先事項を評価する

ビジネス目標に基づいて、これらのトピックでもっと学ぶ関心を評価し、SA との深掘りをスケジュールします。（@cblake と #s_secure slack チャンネルが質問の助けになります。）主要なバリュードライバー、チャンピオン、エコノミックバイヤーを特定します。

* **優先事項 = 速度と効率の場合** には以下を使用:
  * [DevSecOps の簡素化](https://docs.google.com/presentation/d/1qdUgIZAh3Xdcu7yK8borN77hWiQLvMwkBhepeD1hVuY/edit?usp=sharing)
  * [セキュリティを左にシフト](https://docs.google.com/presentation/d/1iH7DbyDMX9kvTWUz2rh0Da9xPTHqZdNfGY70DfiAMPY/edit?usp=sharing)
  * [HackerOne のケーススタディ](https://about.gitlab.com/customers/hackerone/)
* **優先事項 = 一貫性/コンプライアンスの場合** には以下を使用:
  * [監査とコンプライアンスレポート]、Sam Kerr、PM。
  * ソフトウェアサプライチェーンのセキュリティ（デッキは近日公開）、Cindy Blake、PMM
* **優先事項 = スケールするための予測可能なコストの場合** には ROI ディスカッションを依頼 - ミーティング 3 を参照
* **優先事項 = 脆弱性/リスクの場合** には以下を使用:
  * セキュリティ専門家向け: [GitLab Security Dashboard で AppSec 効率を加速](https://youtu.be/p3qt2z1rQk8)
  * 開発者向け: [セキュリティを左にシフト](https://docs.google.com/presentation/d/1iH7DbyDMX9kvTWUz2rh0Da9xPTHqZdNfGY70DfiAMPY/edit?usp=sharing)
  * コンテナを介したモダンアプリのセキュリティ向け: [Container security blog](https://about.gitlab.com/blog/2020/10/23/container-network-security-is-important/) と [デッキ](https://docs.google.com/presentation/d/1xLBQljc6yRtG8ENGwjX9I7LgGj-ShtjaARZPY9WbtQs/edit#slide=id.g29a70c6c35_0_68)、Sam White、PM

**マイルストーン:** 主要なバリュードライバー、チャンピオン、エコノミックバイヤーを特定し、エコノミックバイヤーとのミーティングに合意

**メトリクス:** Opportunity Stage 1 - Discovery

#### ミーティング 3 - 彼らに価値を見せる

提供された ROI フレームワークスライドを使用して、現在および最も重要には将来のすべての明らかなコストを顧客に特定するのを助けます。GitLab がスケールするにつれてどのように予測可能なコストを提供できるかを示します。私たちの最大の価値は、開発とセキュリティの両方のために統合された UI に統合されたすべての種類のセキュリティスキャンを提供する、オールインワンのアプローチであることを明確にすること。**この利益の価値をツールコストとともに必ず含めてください。**

* [Security CISO デッキ](https://docs.google.com/presentation/d/1MfdWk90O9N191MNpSvp3_GuJiAPiIQWovdPoYLeDJ9M/edit?usp=sharing)（[バリューフレームワークスライド](https://docs.google.com/presentation/d/1MfdWk90O9N191MNpSvp3_GuJiAPiIQWovdPoYLeDJ9M/edit#slide=id.gca94c05912_0_1521) を含む）
* **より詳細な ROI** が必要な場合は、[Darwin Sanoy](https://docs.google.com/spreadsheets/d/1wVghmLv3E_IKs7rz-quc6jtjZW0p-u3h4iSaDqmm1Nc/edit?usp=sharing) のものを検討してください。これらのモデルを調整するのを助けるために、[この Issue](https://gitlab.com/gitlab-com/marketing/strategic-marketing/product-marketing/-/issues/5096) でフィードバックを提供してください。
* ソリューションアラインメントのために追加のステップが必要かを判断します（例: 追加のデモンストレーション、ハンズオンワークショップ、POV）
* POV をプッシュしないでください。顧客とより効率的なアクティビティを探求してください。顧客が POV をリクエストする場合は、POV 合意ステップに進みます。

**マイルストーン:** 次のミーティングに合意

**メトリクス:** Opporunity Stage 2 - Scoping または Stage 3 - Technical Evaluation

### POV 合意（POV がリクエストされ必要な場合）

1. POV 要件をこのように定義（David Astor の SKO プレゼンまたは Cherry Han のパッケージへのリンク）
1. POV を実行。要件が満たされたものを Issue ボードで完了に移動。満たされていないニーズについて PM とコラボレーションをオーケストレート。#s_secure slack チャンネルまたは capabilities ページを使用して、POV Issue で関与すべき適切な PM を特定。顧客に Issue で PM とエンゲージしてもらいます。
1. POV の成功を測定
1. ソリューションの提案/オーダーとリファレンスの依頼

## 使用する追加リソース

上記のアクションの下に特定のリソースがあります。これは追加リソース用です。

* [GitLab Ultimate 固有の機能と価値ハンドブックページ](https://about.gitlab.com/pricing/ultimate/#ultimate-specific-features)
* [SKO Expanding to Ultimate スライドデッキ](https://docs.google.com/presentation/d/1oq7ODy9TJpuZqH_tvVtCm2t-C0QkTbuG4ZRlRzRNcUY/edit#slide=id.gb4749ff26b_0_85)
* [Why GitLab Ultimate スライドデッキ](https://docs.google.com/presentation/d/1TP5cXH5Nr0VkH7mE6M_-DFXT_Jnq7o5LPxuMUz2paI4/edit?usp=sharing)
* [Selling DevSecOps リソースページ](/handbook/marketing/brand-and-product-marketing/product-and-solution-marketing/usecase-gtm/devsecops/#ultimate)
* セキュリティの販売（リンクが必要）John Blevin のオンラインクラスルーム資料を参照
* Plan の新しい Gartner MQ（5 月予定）
* AST の Gartner MQ（2021 年 5 月予定）

## 進捗の測定

これらのマイルストーンを考慮し、進捗に応じて SDLC のステージを調整してください。

**マイルストーン**

* [ ] GitLab チャンピオンとのゲームプラン（MEDDPPICC）
* [ ] セキュリティチームまたは他のエコノミックバイヤーとのミーティング
* [ ] POV を行うことへの合意
* [ ] POV 要件の定義
* [ ] 成功した POV
* [ ] 提案

**メトリクス:**

* [ ] ステージあたり進行するための平均日数
* [ ] 最長のステップ（一般的なブロッケージ？）
* [ ] エコノミックバイヤーのタイトル - 共通要因？
* [ ] sales play についてのレトロ

注: GTM Motion の進捗は、クリック/オープン/ページ訪問、SAO を含むキャンペーンレベルで測定されます。

## 関連マーケティングキャンペーン

マーケティングは関連するデマンドジェネレーションキャンペーンを実施しています。

* 初期ローンチには、[Message house](/handbook/marketing/sales-plays-cicd/message-house-premium-to-ultimate) を使用してリードを促進するために、SMB 向けに上記で概説したメールキャンペーンが含まれます。
* 「エアカバー」キャンペーンは、GitLab の Ultimate 機能の認知度を高めます。おそらくセキュリティ（最初）と計画機能（次）が含まれます。
