---
title: Application Security Testing サブ部門
upstream_path: /handbook/engineering/development/sec/secure/
upstream_sha: eb9c7122b4259a2111ed65628e5384768922a597
translated_at: "2026-05-06T00:00:00Z"
translator: claude
stale: false
lastmod: "2025-10-10T16:58:29-05:00"
---

Application Security Testing エンジニアリングサブ部門は、プロダクトの [Application Security Testing ステージ](/handbook/product/categories/#sec-section)を担当しています。

## ビジョン

可能な限り早い段階で、可能な限り良いアセスメントを支えるコンテンツとツールを提供することです。

私たちの[シングルアプリケーション](/handbook/product/categories/gitlab-the-product/single-application/)というパラダイムに従い、
私たちはスキャンツールを統合・構築し、セキュリティとコンプライアンスのアセスメントデータをメインの GitLab アプリケーションへ供給します。そのアプリケーション上で脆弱性管理システムやその他の機能を開発しています。
技術的には可能かもしれませんが、GitLab アプリケーションとは独立してこのデータを提供する単独プロダクトを構築することは目指していません。

このプロダクト領域のビジョンの詳細については、[Secure ステージ](https://about.gitlab.com/stages-devops-lifecycle/#secure)のページを参照してください。

## ミッション

お客様がより安全なソフトウェアを構築できるよう、使いやすく高品質なツールを開発することで GitLab の成功を支援します。

Application Security Testing チームは、GitLab の [Secure ステージ](https://about.gitlab.com/stages-devops-lifecycle/#secure)に取り組んでいます。

## AI プロンプト

## サブ部門の開発ピープルリーダー

{{< team-by-manager-slug manager="thomaswoodham" team="Manager(.*)Application Security Testing" >}}

Application Security Testing ステージの開発ピープルリーダーに連絡するには、以下のエイリアスを使用してください。

- GitLab: `@gitlab-org/secure/managers`
- Slack: `@s_application_security_testing_managers`

## チームメンバー

以下のメンバーが Application Security Testing サブ部門の恒久的なメンバーです。

### Composition Analysis

チームページ: [Composition Analysis](composition-analysis/)

{{< team-by-departments departments="Secure:Composition Analysis BE Team"  >}}

{{< team-by-departments departments="Secure:Composition Analysis FE Team" >}}

### Static Analysis

チームページ: [Static Analysis](static-analysis/)

{{< team-by-departments departments="Application Security Testing:Static Analysis" >}}

### Dynamic Analysis

チームページ: [Dynamic Analysis](dynamic-analysis/dynamic-analysis.md)

{{< team-by-manager-role role="Engineering(.*)Manager(.*)Secure:Dynamic Analysis" team="Engineer" >}}

### Vulnerability Research

チームページ: [Vulnerability Research](vulnerability-research/)

{{< team-by-departments departments="Secure:Vulnerability Research BE Team" >}}

## ステーブルカウンターパート

他の機能チームから、以下のメンバーが私たちのステーブルカウンターパートとなっています。

{{< engineering/stable-counterparts role="Secure" other-manager-roles="Engineering Manager(.*)Application Security Testing:Static Analysis|Backend Engineering Manager(.*)Secure:Dynamic Analysis|Manager, Software Engineering(.*)Secure:Composition Analysis|Senior Engineering Manager(.*)Secure|Senior Engineering Manager(.*)Secure|Director of Engineering(.*)Sec|Engineering Manager(.*)Dynamic Analysis" >}}

## Secure チーム

Application Security Testing チームは、GitLab プラットフォームのセキュリティチェック機能を担当しており、[application security testing](/handbook/product/categories/#application-security-testing-stage) という横断的なステージにマッピングされます。
私たちのアプローチについては、[Application Security Testing Vision](https://about.gitlab.com/direction/application_security_testing/) のページで詳しく学べます。

Application Security Testing チームが提供する機能は、ほとんどがパイプラインレベルに存在し、ほとんどがコンテナイメージとして利用できます。
この特性が私たちのプロセスや QA を形作っており、他のステージとは少し異なります。

### Security Products

私たちは、Application Security Testing チームが開発するツール群を引き続き「*Security Products*」と呼んでいます。そのため、私たちのプロジェクトの GitLab 上の置き場所は [https://gitlab.com/gitlab-org/security-products/](https://gitlab.com/gitlab-org/security-products/) です。

私たちは Security Products 全体で一貫したユーザー体験を保つよう努めていますが、実装レベルでの一貫性までは強制しません。
各グループはそれぞれの課題に直面しており、目標達成にもっとも適していると判断する技術選定を行うのに最適な立場にあります。
[UX の不整合はバグとして扱われます](/handbook/product-development/how-we-work/issue-triage/#severity)が、
一貫性が重要な場面と、そうでない場面（不整合自体がより良い体験につながる、あるいは速度の観点から）の判断は、各チームに委ねています。

### 専門領域

#### SAST

[SAST](https://docs.gitlab.com/ee/user/application_security/sast/)（*Static Application Security Testing*）は、静的コード解析を指します。
GitLab はさまざまなオープンソースツールの力を活用して、多くの言語を対象に幅広いチェックを提供しています。
これらのツールは Docker イメージにラップされており、そこから標準化された出力が得られます。
[GitLab が開発した](https://gitlab.com/gitlab-org/security-products/sast)オーケストレーターが、これらのイメージを実行し、最終レポートを生成するために必要なすべてのデータを集約します。

#### DAST

[DAST](https://docs.gitlab.com/ee/user/application_security/dast/)（*Dynamic Application Security Testing*）は、稼働中のアプリケーションに対してテストを行うために使われます。
一部の脆弱性はコードが実際に動作している状態でしか検出できないため、この手法は静的コード解析を補完します。
DAST は、認証を有効化するために GitLab が改変した [OWASP Zed Attack Proxy Project](https://gitlab.com/gitlab-org/security-products/zaproxy) に依拠しています。

#### Dependency Scanning

[Dependency Scanning](https://docs.gitlab.com/ee/user/application_security/dependency_scanning/) は、アプリケーションの外部依存関係に起因する脆弱性を検出するために使われます。
プロダクションに出荷されるコードの大部分は実際にはサードパーティのライブラリ由来であるため、これらも併せて監視することが重要です。
Dependency Scanning は主に Gemnasium エンジンに依拠しています。

#### Fuzz テスト

カバレッジガイド付きファジングと API ファジングは、クラッシュやバグを引き起こす可能性のあるデータを、アプリケーションや Web API に自動的に入力するために使われます。カバレッジガイド付きファジングはオープンソースの[言語別ファザー](https://gitlab.com/gitlab-org/security-products/analyzers/fuzzers)に依拠します。API Fuzzing は [GitLab 独自のエンジン](https://gitlab.com/gitlab-org/security-products/analyzers/api-fuzzing-src)に基づいています。

#### License Compliance

[License Compliance](https://docs.gitlab.com/ee/user/compliance/license_approval_policies.html) は、アプリケーションのサードパーティライブラリによって持ち込まれるライセンスへの対処を支援します。
ライセンス管理は [LicenseFinder](https://github.com/pivotal/LicenseFinder) gem に依拠しています。

#### Vulnerability Research

[Vulnerability Research](vulnerability-research/) チームの目的は、
[Secure ステージ](https://about.gitlab.com/stages-devops-lifecycle/secure/)
の能力と有効性を高める研究を行い、概念実証を開発することです。

### スキル

カバーすべき領域が幅広いため、多種多様な専門性とスキルが必要となります。

| 技術スキル | 関心領域 |
| ----------------- | ----------------- |
| Ruby on Rails | バックエンド開発 |
| Go | SAST、Dependency Scanning、DAST |
| Python | DAST |
| SQL (PostgreSQL) | Dependency Scanning / 全般 |
| Docker | Container Scanning / 全般 |
| C# | API Security |

私たちのチームは、少なくとも[アプリケーションセキュリティ](https://en.wikipedia.org/wiki/Application_security)の基本的なスキルを備えた、優れたセキュリティ感覚を持つ必要があります。

私たちはさまざまな言語向けにツールを提供しています（例: [sast](https://docs.gitlab.com/ee/user/application_security/sast/#supported-languages-and-frameworks)、[dependency scanning](https://docs.gitlab.com/ee/user/application_security/dependency_scanning/#supported-languages-and-dependency-managers)、[license compliance](https://docs.gitlab.com/ee/user/compliance/license_approval_policies.html#supported-languages-and-package-managers)）。つまり、私たちのチームはこれらの言語の基本（パッケージマネージャーを含む）を理解できる必要があります。各言語について、リリースを重ねても機能が動作することを担保するために、[テストプロジェクト](https://gitlab.com/gitlab-org/security-products/tests)を維持しています。

### リリースプロセス

[バージョニングとリリースプロセス](https://docs.gitlab.com/ee/development/sec/analyzer_development_guide.html)を参照してください。

### QA プロセス

詳細は [QA Process](qa_process.html) を参照してください。

### 脆弱性管理プロセス

#### 自動化 {#automation}

私たちは脆弱性ライフサイクルの自動化に [Vulnmapper ツール](https://gitlab.com/gitlab-com/gl-security/product-security/vulnerability-management/vulnerability-management-internal/vulnmapper)を使用しています。このツールは以下のアクションを実行します。

1. オーナーシップやオペレーティングシステムなどを明確にするために適切なラベルを持つ Actionable Tracking Issue を作成します。現段階では FedRAMP Issue のみに絞り込まれています。
1. FedRAMP 関連のセキュリティ Issue で Deviation Request が必要なものについて、Deviation Request Issue を作成します。
1. 脆弱性が解決された際に Issue を更新・クローズします。

VulnMapper は脆弱性そのものはクローズしません。これは `gitlab-org` レベルで設定された [Auto resolve vulnerabilites](https://gitlab.com/gitlab-org/gitlab-org-security-policy-project/-/blob/main/.gitlab/security-policies/policy.yml?ref_type=heads#L211) セキュリティポリシーが行います。

#### 自動化が失敗したとき

私たちのセキュリティ自動化ツールは[失敗](https://gitlab.com/gitlab-org/security-products/release/-/pipelines?page=1&scope=all&status=failed)する可能性があります。
そのような場合に、すぐに解決できないときはエラーをトラッキングする Issue を作成してください。次に、認知度を上げるために `#s_application-security-testing` で失敗を周知し、以下に示す手動セキュリティトリアージプロセスに従ってください。

<details>
<summary>自動化が失敗した際のフォールバックとなる手動プロセスを表示</summary>

#### 脆弱性の手動レビューと解決

毎週、脆弱性レポートをレビューして、もはや検出されない脆弱性を解決し、関連 Issue をクローズします。注意: もはや検出されない脆弱性については調査する必要はありません。

1. 上記のセキュリティポリシーで解決可能な脆弱性が存在することを確認するため、`Vulnerability Report Dashboards` を訪れます。
1. これらの脆弱性について、調査のために Vulnerability management に通知します。
1. Vulnmapper は、リンクされた脆弱性が解決済みとマークされてから 24 時間以内に、トラッキング Issue を自動的にクローズします。

#### FedRAMP 脆弱性に対する Deviation Request の手動作成

Vulnmapper は Deviation Request を自動的に作成しますが、NVD による分析が無いなどのさまざまな理由で失敗することがあります。

自動化が失敗した場合、Issue が SLA に達する前に手動で [Deviation Request](/handbook/security/security-assurance/security-compliance/poam-deviation-request-procedure/) を作成しなければなりません。
そのためには以下の手順に従ってください。

1. [operational requirement テンプレート](https://gitlab.com/gitlab-com/gl-security/security-assurance/team-security-dedicated-compliance/poam-deviation-requests/-/issues/new?issuable_template=operational_requirement_template)で DR Issue を開きます。
    1. `Vulnerability Details` セクションを、アドバイザリ（通常は RedHat tracker）へのリンク、CVE ID、深刻度、CVSS スコアで更新します。
    1. `Justification Section` を以下の内容で更新します:
        > The OS vendor has published an updated advisory for <CVE_ID>, indicating that package <PACKAGE_NAME> has not yet had a fix released for this vulnerability. Until a fix is available for the package, this vulnerability cannot practically be remediated.
    1. `Attached Evidence` セクションを以下の内容で更新します:
        > As this operational requirement represents a dependency on a vendor-published package to address this vulnerability, no additional evidence has been supplied. Please refer to the linked vendor advisory in the above justification.
    1. セキュリティ Issue にリンクします: `/relate <issue_id>`
1. セキュリティ Issue を以下のように更新します。

   ```text
   /label ~"FedRAMP::Vulnerability" ~"FedRAMP::DR Status::Open"
   /milestone %Backlog
   ```

</details>

##### FedRAMP 脆弱性

コンプライアンスを確保するため、FedRAMP 脆弱性の管理は[自動化](#automation)で行います。詳細は手動プロセスのフォールバックを確認してください。

##### 非 FedRAMP 脆弱性

非 FedRAMP 脆弱性については、まだ同様の自動化を導入していません。私たちのチームで管理するには量が大きすぎるためで、これを有効化する前に [vulnmapper ツールでの必要な改善](https://gitlab.com/gitlab-com/gl-security/product-security/vulnerability-management/vulnerability-management-internal/vulnmapper/-/milestones/4#tab-issues)が必要です。
当面は、これらの脆弱性についてはより専門特化したアプローチを優先しており、グループ間で標準化されたプロセスはありません。

#### エラー監視

gitlab.com の 500 エラーは Sentry に報告されます。以下は Application Security Testing 関連の Sentry エラーを素早く呼び出すためのリンクです。

- StoreSecurityReports Worker - https://sentry.gitlab.net/gitlab/gitlabcom/?query=is%3Aunresolved+StoreSecurityReportsWorker&statsPeriod=14d
- SyncSecurityReportsToReportApprovalRules Worker - https://sentry.gitlab.net/gitlab/gitlabcom/?query=is%3Aunresolved+SyncSecurityReportsToReportApprovalRulesWorker&statsPeriod=14d
- Vulnerabilities - https://sentry.gitlab.net/gitlab/gitlabcom/?query=is%3Aunresolved+vulnerabilities&statsPeriod=14d
- On-Demand DAST - https://sentry.gitlab.net/gitlab/gitlabcom/?query=is%3Aunresolved+Dast&statsPeriod=14d

#### ブレインストーミングセッション

私たちのチームは特定のトピックを深掘りする手段として、同期的なブレインストーミングセッションを随時設定しています。
このアプローチは、定義が定まっていない問題について、複雑性を分解し、実行可能なステップを引き出すのに役立ちます。

これらは創造的な問題解決を促すため、意図的に自由形式で進めます。
可能な限り、オープンディスカッションから抽出されるアクション項目のリストのために時間を確保すべきです。

ブレインストーミングセッション資料（社内）: https://docs.google.com/document/d/179JL5RzbgSIz2XZewbYn79cuX7_vUtte_TcoLwUUC5o/edit#

*過去のブレインストーミングトピックの例:*

- [セキュリティレポートの偽陽性削減](https://gitlab.com/gitlab-org/gitlab/issues/33934)
- 共通レポートフォーマットでの発生の一意性識別をどう管理するか？（CompareKey）
- [構文エラーがある 1 つのファイルで SAST やそれに類するジョブが止まらないようにすべき](https://gitlab.com/gitlab-org/gitlab/issues/7102)

#### リソース

- [QA テストパイプライン失敗のトリアージ方法](https://docs.gitlab.com/development/testing_guide/end_to_end/debugging_end_to_end_test_failures/)
- [エンドツーエンドテスト初心者ガイド](https://docs.gitlab.com/ee/development/testing_guide/end_to_end/beginners_guide.html)
- [GitLab QA README](https://gitlab.com/gitlab-org/gitlab/-/tree/master/qa)
- [GitLab QA シナリオ](https://gitlab.com/gitlab-org/gitlab-qa/-/blob/master/docs/what_tests_can_be_run.md)
- [GitLab 開発者向けの E2E 情報](https://docs.gitlab.com/ee/development/testing_guide/end_to_end/)
- [Quality トレーニングビデオ素材](https://www.youtube.com/playlist?list=PL05JrBw4t0KoNUmi5MOeNURxjl_BtUBxH)

#### プロダクトドキュメント

プロダクトの進化に伴い、ユーザー向けに正確で最新のドキュメントを保つことが重要です。ドキュメント化されていなければ、お客様は機能の存在に気づかないかもしれません。

ドキュメントを更新するには、以下のプロセスに従ってください。

1. ドキュメントが必要な Issue が特定されたら、`~Documentation` ラベルを付け、Issue の説明にどのようなドキュメントが必要かを書き、その Issue にバックエンドエンジニアとテクニカルライター（TW）をアサインします（適切な TW は[プロダクトカテゴリー](/handbook/product/categories/)を検索して見つけてください）。
1. タスクがドキュメントだけの場合は、`~Px` ラベルを付与します。
1. 機能やバグに関するドキュメントについては、バックエンドエンジニアがドキュメントを書き、編集についてはテクニカルライターと協働します。スタイルの整理、明確化、再構成のみが必要な場合は、テクニカルライターが主導し、必要に応じて BE が支援する形で進めます。テクニカルライターのアサイン状況によってドキュメント作業を停滞させてはなりません。
[ドキュメントプロセスに関する詳細](https://docs.gitlab.com/ee/development/documentation/workflow.html)。

#### 非同期の日次スタンドアップ

私たちは[リモート](/handbook/company/culture/all-remote/)企業であり、全員が同じタイムゾーンにいるわけではないため、日次スタンドアップミーティングは意味がありません。
そこで、それぞれが昨日何をしたか、今日何をする予定かなどを共有できる、非同期の日次スタンドアップを行っています。
このために、[geekbot](https://geekbot.com/) という Slack プラグインを利用してプロセスを自動化しています。

##### スタンドアップメッセージのフォーマット

- スタンドアップで Issue に言及する際は、「`バッククォート内の説明` + `[Issue へのリンク](#)`」の形式を使ってください。
- `What did you do since yesterday?` の回答行には、現状を示す CI ステータスアイコンを行頭に付けてください:
  - ![Accomplished](/images/engineering/development/sec/secure/ci-success.svg) 正常に完了したタスク（`:ci_passing:` 絵文字）
  - ![Overdue](/images/engineering/development/sec/secure/ci-failed.svg) 期限が来ていたが完了しなかったタスク（`:ci_failing:` 絵文字）
  - ![In progress](/images/engineering/development/sec/secure/ci-running.svg) 現在進行中のタスク（`:ci_running:` 絵文字）
  - ![Paused](/images/engineering/development/sec/secure/ci-pending.svg) 一時停止または延期されたタスク（`:ci_pending:` 絵文字）
  - その他、適切と感じる任意の `:ci_...` アイコン

**例:**

What did you do since yesterday?

- ![Accomplished](/images/engineering/development/sec/secure/ci-success.svg) `Spotbugs java analyzer compareKey is not unique` を完了 [https://gitlab.com/gitlab-org/gitlab-ee/issues/10860](https://gitlab.com/gitlab-org/gitlab-ee/issues/10860)
- ![In progress](/images/engineering/development/sec/secure/ci-running.svg) 引き続き `Allow guests to create an issue from a vulnerability` に取り組み中 [https://gitlab.com/gitlab-org/gitlab-ee/issues/7813](https://gitlab.com/gitlab-org/gitlab-ee/issues/7813)
- ![Overdue](/images/engineering/development/sec/secure/ci-failed.svg) 休暇後のメールとスレッドのキャッチアップ

**Slack チャンネル:**

私たちのチームは異なる領域にフォーカスしているため、共通チャンネル [#s_secure-standup] に加え、Geekbot は別々のチャンネルへもブロードキャストするように設定されています。

1. Composition Analysis: [#g_ast-composition-analysis-standup](https://gitlab.slack.com/archives/g_ast-composition-analysis-standup)
1. Dynamic Analysis: [#g_ast-dynamic-analysis-standup](https://gitlab.slack.com/archives/g_ast-dynamic-analysis-standup)
1. Secret Detection: [#g_ast-secret-detection-standup](https://gitlab.slack.com/archives/g_ast-secret-detection-standup)
1. Static Analysis: [#g_ast-static-analysis-standup](https://gitlab.slack.com/archives/g_ast-static-analysis-standup)

#### 録画ミーティング

私たちの重要なミーティングは録画され、YouTube の [Application Security Testing Stage プレイリスト](https://www.youtube.com/playlist?list=PL05JrBw4t0Kq7yUrZazEF3diazV29RRo1)で公開されます。
これらは意思決定プロセスの良い概観を与えてくれ、しばしばすべてのステークホルダーとの議論で構成されます。私たちは[リモート](/handbook/company/culture/all-remote/)企業であるため、ビデオミーティングは Issue へのコメントよりも素早く同期し意思決定するのに役立ちます。私たちは非同期の作業を優先しますが、大きな機能やタイミングがタイトな場合は、多くの仕様を細部まで詰められます。これによってあらゆるエッジケースを評価しているので、その後の非同期作業がやりやすくなります。

### カレンダー

私たちのチームメンバーが共有カレンダー上のミーティングに参加することを歓迎します。[Application Security Testing カレンダー](https://calendar.google.com/calendar?cid=Z2l0bGFiLmNvbV9tZDBhbzM2Z3B2bDV2MWY0MTI4ZXJobmo2Z0Bncm91cC5jYWxlbmRhci5nb29nbGUuY29t)は、ログインしているすべての GitLab チームメンバーが利用できます。

### 情報をキャッチアップする

GitLab は非常に活発な組織で、毎週多くのニュースやアクティビティが生み出されます。Application Security Testing のすべてのメンバーは、より大きな組織で何が起きているかを把握するよう努めることが奨励されます。共有すべき情報がある場合は、こうしたチャンネルやコミュニケーションスタイルへの貢献も奨励されます。

加えて、Application Security Testing の各グループは週次の同期ミーティングを開催しています。これらのミーティングは、上述の Application Security Testing カレンダーで告知されます。GitLab では常に[ミーティングへの出席を任意にする](/handbook/company/culture/all-remote/meetings/#1-make-meeting-attendance-optional)よう努めています。

#### 他者にも情報を伝える

自分自身の情報収集に加えて、チームメンバーは他者にも情報を共有するよう奨励されます。Application Security Testing のグループは、毎週のミーティングの定常アジェンダ項目として以下のトピックを含める運用を採用しており、各箇条書きにはその例も挙げています。

- **現在のステータス**
  - そのマイルストーンの最優先事項に対して直近で達成したこと。
    - これらの更新の一環として事前録画したデモを共有することは、歓迎・奨励されます。
  - 新たに発見されたスコープや依存関係。
- **リスク**
  - 想定する期間内のデリバリーに影響しそうな、ブロックされたり遅延したりしている Issue。
- **ヘルプ募集**
  - チームや個人が詰まっていて支援が欲しい Issue やトピック。
- **賞賛**
  - 素晴らしい仕事をしていて、称えたい人はいますか？
  - 例外的に優れた成果として届けられた仕事はありますか？

エンジニアリングマネージャーが週次のグループミーティングのこのセクションを埋める責任を負いますが、誰でも貢献できます。各グループが毎週何が起きているかを把握する助けになるのに加え、Application Security Testing の SEM がこの情報を毎週集約し、厳選したリストをセクション全体に発信します。

#### 技術的オンボーディング

新規入社者は、Application Security Testing チームへのオンボーディング時にこれらの手順を踏み、対応するドキュメントを読んでください。
すべての新規入社者には、プロセス全体を導く[オンボーディング Issue](https://gitlab.com/gitlab-org/security-products/onboarding/blob/master/.gitlab/issue_templates/Technical_Onboarding.md) がアサインされます。

#### ワークフローとリファインメント

[Application Security Testing エンジニアリングプランニング](/handbook/engineering/development/sec/secure/planning)を参照してください。

#### コーディング標準とスタイルガイドライン

Application Security Testing チームは、全社的な[コントリビューターおよび開発者向けドキュメント](https://docs.gitlab.com/ee/development/)に記載されているコーディング標準とスタイルガイドラインに従います。ただし、Application Security Testing チームに固有の以下のガイドラインも参照してください。

- [Application Security Testing チームの Go 標準とスタイルガイドライン](https://docs.gitlab.com/ee/development/go_guide/#secure-team-standards-and-style-guidelines)

#### グループをまたいだ協働

Application Security Testing 機能を支えるアーキテクチャの一部のコンポーネントは、複数のグループ間で共有されています。例として、[common](https://gitlab.com/gitlab-org/security-products/analyzers/common) Go ライブラリ、[Security Report Schemas](https://gitlab.com/gitlab-org/security-products/security-report-schemas)、[rails parsers](https://gitlab.com/gitlab-org/gitlab/-/tree/master/ee/lib/gitlab/ci/parsers/security) などがあります。

これら共有部分の変更は他のグループに影響を及ぼす可能性があるため、マージ前に関連チームによってレビューされることを担保するため、可能な限り承認ルールに頼るべきです。

影響のない、可逆な（two-way door な）変更については承認プロセスをスキップできますが、そのような状況では健全な判断と常識を働かせてください。

変更の作成者は、こうしたコンポーネントへの変更を広く周知し、認知度を高めるべきです（週次ミーティングのアジェンダ、Slack チャンネルなど）。

### 新規アナライザーの開発

新しいアナライザーを開発する完全なガイドについては、[ユーザードキュメント](https://docs.gitlab.com/ee/development/sec/analyzer_development_guide.html#development-of-new-analyzers)を参照してください。

## 技術ドキュメント

プロダクトの進化とともに、エンジニアリングチームは新しい機能を実現する方法やアーキテクチャを改善する方法をリサーチしています。

このリサーチの成果は[技術ドキュメント](tech-docs/)セクションにあります。

### データソース

私たちは[データソースの一覧を社内 Wiki に保持しています](https://gitlab.com/gitlab-org/secure/data-feeds-and-sources/-/wikis/Data-Feeds-&-Sources)。これにはアドバイザリデータベース、パッケージのライセンス情報、関連データなどが含まれます。

## 振り返り

Application Security Testing サブ部門では、グループレベルで振り返りを実施しています。

各グループの EM もしくは委任された DRI が、振り返りの同期セッションを準備・スケジュールする責任を持ち、非同期の振り返り Issue は[対応するプロジェクト](https://gitlab.com/gl-retrospectives/secure-sub-dept)で管理しています。

## 共通リンク

- Slack の [#s_application-security-testing](https://gitlab.slack.com/archives/s_application-security-testing)
- [セキュリティ用語集](https://docs.gitlab.com/ee/user/application_security/terminology/)
