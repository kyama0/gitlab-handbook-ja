---
title: Application Security Testing サブ部門
upstream_path: /handbook/engineering/development/sec/secure/
upstream_sha: 3480299851f7e2243d4f08b75dac452f89929636
translated_at: "2026-04-28T05:48:28Z"
translator: claude
stale: false
---

Application Security Testing エンジニアリングサブ部門は、製品の [Application Security Testing ステージ](/handbook/product/categories/#sec-section)を担当しています。

## ビジョン

最も早い段階で最高の評価を提供するコンテンツとツールを提供します。

私たちの[単一アプリケーション](/handbook/product/categories/gitlab-the-product/single-application/)パラダイムに従い、
セキュリティとコンプライアンスの評価データをメイン GitLab アプリケーションに供給するために
スキャンツールを統合・構築します。そこで脆弱性管理システムやその他の機能を開発しています。
技術的には可能かもしれませんが、GitLab アプリケーションとは独立してこのデータを提供するスタンドアロン製品の構築は目指していません。

この製品分野のビジョンの詳細については、[Secure ステージ](https://about.gitlab.com/stages-devops-lifecycle/#secure)ページを参照してください。

## ミッション

高い使いやすさと高品質のツールを開発することで、より安全なソフトウェアを構築する顧客の成功を支援して GitLab の成功をサポートします。

Application Security Testing チームは GitLab の [Secure ステージ](https://about.gitlab.com/stages-devops-lifecycle/#secure)に取り組んでいます。

## AI プロンプト

## サブ部門開発ピープルリーダー


<p class="my-3 text-sm text-gray-600 italic">チームメンバー情報は <a href="https://handbook.gitlab.com/handbook/engineering/development/sec/secure/#team-members" rel="external noopener">原文 (英語)</a> を参照してください。</p>


Application Security Testing ステージの開発ピープルリーダーへの連絡には、以下のエイリアスを使用してください:

- GitLab: `@gitlab-org/secure/managers`
- Slack: `@s_application_security_testing_managers`

## チームメンバー

以下の人々は Application Security Testing サブ部門の正式なメンバーです:

### Composition Analysis

チームページ: [Composition Analysis](composition-analysis/)


<p class="my-3 text-sm text-gray-600 italic">チームメンバー情報は <a href="https://handbook.gitlab.com/handbook/engineering/development/sec/secure/#team-members" rel="external noopener">原文 (英語)</a> を参照してください。</p>


### Static Analysis

チームページ: [Static Analysis](static-analysis/)


<p class="my-3 text-sm text-gray-600 italic">チームメンバー情報は <a href="https://handbook.gitlab.com/handbook/engineering/development/sec/secure/#team-members" rel="external noopener">原文 (英語)</a> を参照してください。</p>


### Dynamic Analysis

チームページ: [Dynamic Analysis](dynamic-analysis/dynamic-analysis.md)


<p class="my-3 text-sm text-gray-600 italic">チームメンバー情報は <a href="https://handbook.gitlab.com/handbook/engineering/development/sec/secure/#team-members" rel="external noopener">原文 (英語)</a> を参照してください。</p>


### Vulnerability Research

チームページ: [Vulnerability Research](vulnerability-research/)


<p class="my-3 text-sm text-gray-600 italic">チームメンバー情報は <a href="https://handbook.gitlab.com/handbook/engineering/development/sec/secure/#team-members" rel="external noopener">原文 (英語)</a> を参照してください。</p>


## 安定したカウンターパート

以下のメンバーは他の機能チームからの安定したカウンターパートです:


<p class="my-3 text-sm text-gray-600 italic">チームメンバー情報は <a href="https://handbook.gitlab.com/handbook/engineering/development/sec/secure/#team-members" rel="external noopener">原文 (英語)</a> を参照してください。</p>


## Secure チーム

Application Security Testing チームは GitLab プラットフォームのセキュリティチェック機能を担当しており、[application security testing](/handbook/product/categories/#application-security-testing-stage) の横断的なステージにマッピングされています。
このアプローチの詳細については、[Application Security Testing Vision](https://about.gitlab.com/direction/application_security_testing/) ページを参照してください。

Application Security Testing チームが提供する機能は主にパイプラインレベルで存在し、主にコンテナイメージとして提供されます。
この特性が私たちのプロセスと QA を形成しており、他のステージとは少し異なります。

### セキュリティプロダクト

Application Security Testing チームが開発したツールを引き続き「*Security Products*」と呼んでいます。そのため、GitLab でのプロジェクトの場所は [https://gitlab.com/gitlab-org/security-products/](https://gitlab.com/gitlab-org/security-products/) です。

私たちのセキュリティプロダクト全体で一貫したユーザー体験の維持に努めていますが、実装レベルでの一貫性は強制しません。
各グループは独自の課題に直面しており、目標達成に最適と判断する技術的選択をする最良の立場にあります。
[UX の一貫性のなさはバグとして扱われます](/handbook/product-development/how-we-work/issue-triage/#severity)が、
一貫性が重要な場面と異なる方が良い場面（それ自体がより良い体験を生み出すか、速度の観点から）について、個々のチームが賢明な判断を下すことを頼りにしています。

### 専門領域

#### SAST

[SAST](https://docs.gitlab.com/ee/user/application_security/sast/)（*Static Application Security Testing*）は静的コード解析を指します。
GitLab はさまざまなオープンソースツールの力を活用して、多くの言語とサポートのための幅広いチェックを提供します。
これらのツールは docker イメージ内にラップされており、標準的な出力が保証されます。
[GitLab が開発した](https://gitlab.com/gitlab-org/security-products/sast)オーケストレーターがこれらのイメージを実行し、最終レポートを生成するために必要なすべてのデータを収集します。

#### DAST

[DAST](https://docs.gitlab.com/ee/user/application_security/dast/)（*Dynamic Application Security Testing*）は実行中のアプリケーションに対してテストを行います。
一部の脆弱性はすべてのコードが実際に動作している場合にのみ検出できるため、この手法は静的コード解析を補完します。
DAST は GitLab が認証を有効にするために変更した [OWASP Zed Attack Proxy Project](https://gitlab.com/gitlab-org/security-products/zaproxy) に依存しています。

#### Dependency Scanning

[Dependency Scanning](https://docs.gitlab.com/ee/user/application_security/dependency_scanning/) はアプリケーションの外部依存関係によって導入された脆弱性を検出するために使用します。
本番環境にデプロイされるコードの大部分はサードパーティライブラリから来ているため、これらも監視することが重要です。
Dependency Scanning は主に Gemnasium エンジンに依存しています。

#### Fuzz テスト

カバレッジ誘導ファジングと API ファジングは、クラッシュやバグを引き起こす可能性のあるデータをアプリケーションや Web API に自動的に入力するために使用します。カバレッジ誘導ファジングはオープンソースの[言語固有のファザー](https://gitlab.com/gitlab-org/security-products/analyzers/fuzzers)に依存しています。API ファジングは [GitLab 独自のエンジン](https://gitlab.com/gitlab-org/security-products/analyzers/api-fuzzing-src)に基づいています。

#### ライセンスコンプライアンス

[ライセンスコンプライアンス](https://docs.gitlab.com/ee/user/compliance/license_approval_policies.html)はアプリケーション内のサードパーティライブラリによって導入されたライセンスの管理に役立ちます。
ライセンス管理は [LicenseFinder](https://github.com/pivotal/LicenseFinder) gem に依存しています。

#### Vulnerability Research

[Vulnerability Research](vulnerability-research/) チームの目的は、
研究を行い、[Secure ステージ](https://about.gitlab.com/stages-devops-lifecycle/secure/)の
能力と有効性を高めるプルーフオブコンセプトを開発することです。

### スキル

幅広い領域をカバーするため、多くの異なる専門知識とスキルが必要です:

| 技術スキル | 興味領域 |
| ----------------- | ----------------- |
| Ruby on Rails | バックエンド開発 |
| Go | SAST、Dependency Scanning、DAST |
| Python | DAST |
| SQL (PostgreSQL) | Dependency Scanning / 全般 |
| Docker | Container Scanning / 全般 |
| C# | API Security |

私たちのチームはまた、少なくとも[アプリケーションセキュリティ](https://en.wikipedia.org/wiki/Application_security)の基本的なスキルを持つ、優れたセキュリティ感覚が必要です。

私たちは多くの異なる言語のツールを提供しています（例: [sast](https://docs.gitlab.com/ee/user/application_security/sast/#supported-languages-and-frameworks)、[dependency scanning](https://docs.gitlab.com/ee/user/application_security/dependency_scanning/#supported-languages-and-dependency-managers)、[license compliance](https://docs.gitlab.com/ee/user/compliance/license_approval_policies.html#supported-languages-and-package-managers)）。つまり、チームはパッケージマネージャーを含む各言語の基礎を理解できる必要があります。私たちは各リリースでこれらすべての機能が動作していることを確認するために[テストプロジェクト](https://gitlab.com/gitlab-org/security-products/tests)を維持しています。

### リリースプロセス

[バージョニングとリリースプロセス](https://docs.gitlab.com/ee/development/sec/analyzer_development_guide.html)を参照してください。

### QA プロセス

詳細は [QA プロセス](qa_process.html)を参照してください。

### 脆弱性管理プロセス

<span id="automation"></span>

#### 自動化

[Vulnmapper ツール](https://gitlab.com/gitlab-com/gl-security/product-security/vulnerability-management/vulnerability-management-internal/vulnmapper)を使用して脆弱性ライフサイクルを自動化しています。このツールは以下のアクションを実行します:

1. 所有権、オペレーティングシステムなどを明確にするための適切なラベルを持つ実行可能なトラッキング Issue を作成します。現段階では FedRAMP Issue のみにフィルタリングされています。
1. FedRAMP 関連のセキュリティ Issue に対する逸脱リクエスト Issue を作成します。
1. 脆弱性が解決されたときに Issue を更新・クローズします。

VulnMapper は脆弱性をクローズしません。これは `gitlab-org` レベルの[脆弱性自動解決](https://gitlab.com/gitlab-org/gitlab-org-security-policy-project/-/blob/main/.gitlab/security-policies/policy.yml?ref_type=heads#L211)セキュリティポリシーによって実行されます。

#### 自動化の失敗

セキュリティ自動化ツールが[失敗](https://gitlab.com/gitlab-org/security-products/release/-/pipelines?page=1&scope=all&status=failed)する可能性があります。
発生した場合、すぐに解決できなければ、エラーを追跡するための Issue を開いてください。次に、`#s_application-security-testing` で失敗を告知して認知度を高め、以下に示す手動セキュリティトリアージプロセスに従ってください。

<details>
<summary>自動化が失敗した場合の手動プロセスのフォールバックを表示</summary>

#### 脆弱性の手動レビューと解決

週次ベースで: 脆弱性レポートをレビューして、もはや検出されていない脆弱性を解決し、関連する Issue をクローズします。注意: 検出されなくなった脆弱性を調査する必要はありません。

1. `Vulnerability Report Dashboards` にアクセスして、上記のセキュリティポリシーによって解決できる脆弱性があることを確認します。
1. 脆弱性管理チームにこれらの脆弱性を調査のために通知します。
1. Vulnmapper はリンクされた脆弱性が解決済みとしてマークされてから 24 時間以内に自動的にトラッキング Issue をクローズします。

#### FedRAMP 脆弱性の逸脱リクエストの手動作成

Vulnmapper は逸脱リクエストを自動的に作成しますが、NVD からの分析がない場合など、さまざまな理由で失敗することがあります。

自動化が失敗した場合、Issue が SLA に達する前に[逸脱リクエスト](/handbook/security/security-assurance/security-compliance/poam-deviation-request-procedure/)を手動で作成する必要があります。
そのためには、以下の手順に従ってください。

1. [operational requirement テンプレート](https://gitlab.com/gitlab-com/gl-security/security-assurance/team-security-dedicated-compliance/poam-deviation-requests/-/issues/new?issuable_template=operational_requirement_template)で DR Issue を開きます。
    1. `Vulnerability Details` セクションをアドバイザリ（通常 RedHat トラッカー）へのリンク、CVE ID、深刻度、CVSS スコアで更新します。
    1. `Justification Section` を以下で更新します:
        > OS ベンダーが <CVE_ID> の更新されたアドバイザリを公開し、パッケージ <PACKAGE_NAME> ではこの脆弱性の修正がまだリリースされていないことが示されています。パッケージの修正が利用可能になるまで、この脆弱性は実質的に修正できません。
    1. `Attached Evidence` セクションを以下で更新します:
        > この運用要件はこの脆弱性に対処するためのベンダー公開パッケージへの依存を表しているため、追加の証拠は提供されていません。上記の正当化理由にあるリンクされたベンダーアドバイザリを参照してください。
    1. セキュリティ Issue にリンクします: `/relate <issue_id>`
1. セキュリティ Issue を適宜更新します

   ```text
   /label ~"FedRAMP::Vulnerability" ~"FedRAMP::DR Status::Open"
   /milestone %Backlog
   ```

</details>

##### FedRAMP 脆弱性

コンプライアンスを確保するために、FedRAMP 脆弱性の管理は[自動化](#automation)によって処理されます。追加の詳細については手動プロセスのフォールバックを確認してください。

##### 非 FedRAMP 脆弱性

非 FedRAMP 脆弱性については、チームが管理するには量が多すぎるため、まだ同じ自動化を整備できていません。また、これを有効にする前に vulnmapper ツールの[いくつかの必要な改善](https://gitlab.com/gitlab-com/gl-security/product-security/vulnerability-management/vulnerability-management-internal/vulnmapper/-/milestones/4#tab-issues)が必要です。
当面は、これらの脆弱性に対してより専門化されたアプローチを採用しており、グループ間で標準化されたプロセスはありません。

#### エラー監視

gitlab.com での 500 エラーは Sentry に報告されます。以下は Application Security Testing に関連する Sentry エラーを取得するためのクイックリンクです。

- StoreSecurityReports Worker - https://sentry.gitlab.net/gitlab/gitlabcom/?query=is%3Aunresolved+StoreSecurityReportsWorker&statsPeriod=14d
- SyncSecurityReportsToReportApprovalRules Worker - https://sentry.gitlab.net/gitlab/gitlabcom/?query=is%3Aunresolved+SyncSecurityReportsToReportApprovalRulesWorker&statsPeriod=14d
- Vulnerabilities - https://sentry.gitlab.net/gitlab/gitlabcom/?query=is%3Aunresolved+vulnerabilities&statsPeriod=14d
- On-Demand DAST - https://sentry.gitlab.net/gitlab/gitlabcom/?query=is%3Aunresolved+Dast&statsPeriod=14d

#### ブレインストーミングセッション

チームは特定のトピックを深掘りする方法として、時折同期的なブレインストーミングセッションをスケジュールします。
このアプローチは、定義が欠如している問題の複雑さを分解し、実行可能なステップを導き出すのに役立ちます。

オープンな議論から行動のリストのために時間を確保できる場合は、それを目的として意図的に自由形式にしています。

ブレインストーミングセッションドキュメント（内部）: https://docs.google.com/document/d/179JL5RzbgSIz2XZewbYn79cuX7_vUtte_TcoLwUUC5o/edit#

*過去のブレインストーミングトピックの例:*

- [セキュリティレポートの誤検知を削減する](https://gitlab.com/gitlab-org/gitlab/issues/33934)
- 共通レポートフォーマットで発生の一意性識別をどのように管理するか？（CompareKey）
- [構文エラーのある 1 つのファイルが SAST や同様のジョブの実行を停止させるべきでない](https://gitlab.com/gitlab-org/gitlab/issues/7102)

#### リソース

- [QA テストパイプライン失敗のトリアージ方法](https://docs.gitlab.com/development/testing_guide/end_to_end/debugging_end_to_end_test_failures/)
- [エンドツーエンドテストを書くための初心者ガイド](https://docs.gitlab.com/ee/development/testing_guide/end_to_end/beginners_guide.html)
- [GitLab QA README](https://gitlab.com/gitlab-org/gitlab/-/tree/master/qa)
- [GitLab QA シナリオ](https://gitlab.com/gitlab-org/gitlab-qa/-/blob/master/docs/what_tests_can_be_run.md)
- [GitLab 開発者向け E2E 情報](https://docs.gitlab.com/ee/development/testing_guide/end_to_end/)
- [品質トレーニングビデオ素材](https://www.youtube.com/playlist?list=PL05JrBw4t0KoNUmi5MOeNURxjl_BtUBxH)

#### プロダクトドキュメント

製品が進化するにつれて、ユーザー向けの正確で最新のドキュメントを維持することが重要です。ドキュメント化されていなければ、顧客は機能の存在を知らないかもしれません。

ドキュメントを更新するには、以下のプロセスに従ってください:

1. ドキュメントが必要と識別された Issue には `~Documentation` ラベルを追加し、Issue の説明に必要なドキュメントの概要を記載し、バックエンドエンジニアとテクニカルライター（TW）を Issue に割り当てます（適切な TW は[プロダクトカテゴリ](/handbook/product/categories/)を検索して見つけてください）。
1. タスクがドキュメントのみの場合は `~Px` ラベルを適用します。
1. 機能やバグに関するドキュメントは、バックエンドエンジニアがドキュメントを書き、テクニカルライターと編集作業を行うべきです。ドキュメントにスタイルのクリーンアップ、明確化、再編成だけが必要な場合は、この作業はバックエンドのサポートを得てテクニカルライターが主導すべきです。テクニカルライターの可用性が、ドキュメント作業の進行を妨げるべきではありません。
[ドキュメントプロセスに関する詳細情報](https://docs.gitlab.com/ee/development/documentation/workflow.html)。

#### 非同期デイリースタンドアップ

[リモート](/handbook/company/culture/all-remote/)企業であるため、デイリースタンドアップミーティングは、全員が同じタイムゾーンにいるわけではないので意味がありません。
そのため、昨日何をしたか、今日何をする予定か等を共有できる非同期デイリースタンドアップを採用しています。
このために、[geekbot](https://geekbot.com/) Slack プラグインを使用してプロセスを自動化しています。

##### スタンドアップメッセージのフォーマット

- Issue に言及する際は「`バッククォートで説明` + `[Issue へのリンク](#)`」の形式を使用します。
- `昨日から何をしましたか？` の回答行に CI ステータスアイコンを前置して現在の状態を示します:
  - ![完了](/images/engineering/development/sec/secure/ci-success.svg) 正常に完了したタスク（`:ci_passing:` 絵文字）
  - ![遅延](/images/engineering/development/sec/secure/ci-failed.svg) 期限内に完了しなかったタスク（`:ci_failing:` 絵文字）
  - ![進行中](/images/engineering/development/sec/secure/ci-running.svg) 現在進行中のタスク（`:ci_running:` 絵文字）
  - ![一時停止](/images/engineering/development/sec/secure/ci-pending.svg) 一時停止または延期されたタスク（`:ci_pending:` 絵文字）
  - 適用できると思う他の `:ci_...` アイコン

**例:**

昨日から何をしましたか？

- ![完了](/images/engineering/development/sec/secure/ci-success.svg) `Spotbugs java analyzer compareKey is not unique` を完了しました [https://gitlab.com/gitlab-org/gitlab-ee/issues/10860](https://gitlab.com/gitlab-org/gitlab-ee/issues/10860)
- ![進行中](/images/engineering/development/sec/secure/ci-running.svg) `Allow guests to create an issue from a vulnerability` をまだ取り組んでいます [https://gitlab.com/gitlab-org/gitlab-ee/issues/7813](https://gitlab.com/gitlab-org/gitlab-ee/issues/7813)
- ![遅延](/images/engineering/development/sec/secure/ci-failed.svg) 休暇後のすべてのメールとスレッドのキャッチアップ

**Slack チャンネル:**

チームがそれぞれ異なる領域に焦点を当てているため、共通チャンネル [#s_secure-standup] に加えて、Geekbot が個別チャンネルにブロードキャストするように設定されています。

1. Composition Analysis: [#g_ast-composition-analysis-standup](https://gitlab.slack.com/archives/g_ast-composition-analysis-standup)
1. Dynamic Analysis: [#g_ast-dynamic-analysis-standup](https://gitlab.slack.com/archives/g_ast-dynamic-analysis-standup)
1. Secret Detection: [#g_ast-secret-detection-standup](https://gitlab.slack.com/archives/g_ast-secret-detection-standup)
1. Static Analysis: [#g_ast-static-analysis-standup](https://gitlab.slack.com/archives/g_ast-static-analysis-standup)

#### 録画されたミーティング

重要なミーティングは録画され、YouTube の [Application Security Testing Stage プレイリスト](https://www.youtube.com/playlist?list=PL05JrBw4t0Kq7yUrZazEF3diazV29RRo1)で公開されます。
これらは意思決定プロセスの良い概要を提供しており、多くの場合すべての関係者との議論です。[リモート](/handbook/company/culture/all-remote/)企業として、これらのビデオミーティングは、Issue にコメントするよりも速く同期してより速い意思決定を助けます。非同期での作業を優先していますが、大きな機能の場合やタイミングが重要な場合は、多くの仕様を詳細に説明できます。これにより、すべてのエッジケースを評価しているため、非同期での作業が容易になります。

### カレンダー

共有カレンダー上のミーティングへのチームメンバーの参加を歓迎します。[Application Security Testing カレンダー](https://calendar.google.com/calendar?cid=Z2l0bGFiLmNvbV9tZDBhbzM2Z3B2bDV2MWY0MTI4ZXJobmo2Z0Bncm91cC5jYWxlbmRhci5nb29nbGUuY29t)はログイン中のすべての GitLab チームメンバーが利用できます。

### 情報収集

GitLab は毎週多くのニュースとアクティビティが生成される非常に活発な組織です。Application Security Testing の全員が、より大きな組織で何が起きているかについて自分自身を最新の状態に保つことが奨励されています。また、共有すべき情報がある場合は、これらのチャンネルとコミュニケーションパラダイムに貢献することも奨励されています。

さらに、Application Security Testing の各グループは週次同期ミーティングを開催しています。これらのミーティングは上記の Application Security Testing カレンダーで公告されています。GitLab では常に[ミーティングへの参加をオプションにするよう](/handbook/company/culture/all-remote/meetings/#1-make-meeting-attendance-optional)努めています。

#### 他者への情報共有

自分自身が情報を最新に保つことに加えて、チームメンバーは他者にも情報を共有するよう奨励されています。Application Security Testing グループは、週次ミーティングの定常議題項目として以下のトピックを含める慣行を採用しており、各箇条書きのトピック例を挙げています。

- **現在のステータス**
  - そのマイルストーンのトップ優先事項に対する最近の作業の達成状況。
    - 事前録画されたデモはこれらの更新の一部として歓迎され奨励されます。
  - 新たに発見されたスコープや依存関係。
- **リスク**
  - ブロックされているか遅延している Issue で、望ましい時間枠内での納品に影響しているもの。
- **ヘルプ要請**
  - チームまたはチームの個人が行き詰まっており、助けが欲しい Issue やトピック。
- **称賛**
  - 素晴らしい仕事をしている人に賞賛を贈りたいですか？
  - 例外的に納品された作業がありますか？

エンジニアリングマネージャーがこの週次グループミーティングのセクションを用意する責任を持ちますが、誰でも貢献できます。各週にグループが何が起きているかを把握する助けに加え、Application Security Testing の SEM がこの情報を毎週収集し、厳選されたリストをセクションにブロードキャストします。

#### テクニカルオンボーディング

新入社員は Application Security Testing チームへのオンボーディング時にこれらの手順を踏んで対応するドキュメントを読む必要があります。
すべての新入社員には、プロセス全体をガイドする[オンボーディング Issue](https://gitlab.com/gitlab-org/security-products/onboarding/blob/master/.gitlab/issue_templates/Technical_Onboarding.md) が割り当てられます。

#### ワークフローとリファインメント

[Application Security Testing エンジニアリング計画](/handbook/engineering/development/sec/secure/planning)を参照してください。

#### コーディング標準とスタイルガイドライン

Application Security Testing チームは会社全体の[コントリビューターと開発ドキュメント](https://docs.gitlab.com/ee/development/)に概説されているコーディング標準とスタイルガイドラインに従いますが、Application Security Testing チームに固有の以下のガイドラインも参照してください:

- [Application Security Testing チーム Go 標準とスタイルガイドライン](https://docs.gitlab.com/ee/development/go_guide/#secure-team-standards-and-style-guidelines)

#### クロスグループコラボレーション

Application Security Testing 機能をサポートするアーキテクチャの一部のコンポーネントは、[common](https://gitlab.com/gitlab-org/security-products/analyzers/common) Go ライブラリ、[Security Report Schemas](https://gitlab.com/gitlab-org/security-products/security-report-schemas)、[rails パーサー](https://gitlab.com/gitlab-org/gitlab/-/tree/master/ee/lib/gitlab/ci/parsers/security) など、複数のグループ間で共有されています。

これらの共有部分を変更すると他のグループに影響する可能性があるため、そのような変更がマージされる前に関連チームによってレビューされることを確保するために、できるだけ承認ルールに依存する必要があります。

影響のない双方向の変更は承認プロセスをスキップできます。そのような状況では常識と健全な判断を使用してください。

変更の作者は、これらのコンポーネントへの変更を広く告知して認知度を高める（週次ミーティングのアジェンダ、Slack チャンネル）べきです。

### 新しいアナライザーの開発

新しいアナライザーの開発に関する完全なガイドは[ユーザードキュメント](https://docs.gitlab.com/ee/development/sec/analyzer_development_guide.html#development-of-new-analyzers)を参照してください。

## テクニカルドキュメント

製品が進化するにつれ、エンジニアリングチームは新しい機能を実現し、アーキテクチャを改善する方法を研究しています。

この研究の成果は[テクニカルドキュメント](tech-docs/)セクションにあります。

### データソース

[内部 Wiki でデータソースのリスト](https://gitlab.com/gitlab-org/secure/data-feeds-and-sources/-/wikis/Data-Feeds-&-Sources)を管理しています。これにはアドバイザリデータベース、パッケージライセンス情報、および関連データが含まれます。

## レトロスペクティブ

Application Security Testing サブ部門はグループレベルでレトロスペクティブを実施しています。

各グループの EM または委任された DRI がレトロスペクティブ同期セッションを準備・スケジュールする責任を持ち、非同期レトロスペクティブ Issue は[対応するプロジェクト](https://gitlab.com/gl-retrospectives/secure-sub-dept)にあります。

## 共通リンク

- Slack の [#s_application-security-testing](https://gitlab.slack.com/archives/s_application-security-testing)
- [セキュリティ用語集](https://docs.gitlab.com/ee/user/application_security/terminology/)
