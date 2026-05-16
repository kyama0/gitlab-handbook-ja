---
title: Sec セクション
description: >-
  Sec セクションは、GitLab DevOps プラットフォームの Secure および
  Software Supply Chain Security 機能に取り組む開発チームで構成されています。
upstream_path: /handbook/engineering/development/sec/
upstream_sha: 3480299851f7e2243d4f08b75dac452f89929636
translated_at: "2026-04-28T05:48:28Z"
translator: claude
stale: false
lastmod: "2026-03-02T07:33:04-05:00"
---

## チームとハンドブックページ

以下のチームがこのサブ部門を構成しています:

- Software Supply Chain Security ステージ - [ハンドブック](/handbook/engineering/development/sec/software-supply-chain-security/)
  - Anti-abuse グループ - [ハンドブック](/handbook/engineering/development/sec/software-supply-chain-security/anti-abuse)
  - Authentication グループ - [ハンドブック](/handbook/engineering/development/sec/software-supply-chain-security/authentication)
  - Authorization グループ - [ハンドブック](/handbook/engineering/development/sec/software-supply-chain-security/authorization)
  - Compliance グループ - [ハンドブック](software-supply-chain-security/compliance/)
- Application Security Testing ステージ - [ハンドブック](/handbook/engineering/development/sec/secure/)
  - Composition Analysis グループ - [ハンドブック](/handbook/engineering/development/sec/secure/composition-analysis/)
  - Dynamic Analysis グループ - [ハンドブック](/handbook/engineering/development/sec/secure/dynamic-analysis/dynamic-analysis/)
  - Static Analysis グループ - [ハンドブック](/handbook/engineering/development/sec/secure/static-analysis/)
  - Secret Detection グループ - [ハンドブック](/handbook/engineering/development/sec/secure/secret-detection/)
  - Vulnerability Research グループ - [ハンドブック](/handbook/engineering/development/sec/secure/vulnerability-research/)
  - API Security - [ハンドブック](/handbook/engineering/development/sec/secure/dynamic-analysis/api-security/)
- Security Risk Management
  - Security Policies グループ - [ハンドブック](/handbook/engineering/development/sec/security-risk-management/security-policies/)
  - Security Platform Management グループ
  - Security Insights グループ - [ハンドブック](/handbook/engineering/development/sec/security-risk-management/security-insights/)
  - Security Infrastructure グループ - [ハンドブック](/handbook/engineering/development/sec/security-risk-management/security-infrastructure/)

機能ごとに EM と PM の DRI を明確にすることが重要です。特に明らかでない場合はなおさらです。これは専用の[境界定義ページ](delineate-sec.html)に文書化されています。

## AI プロンプト

## プロダクト方向性

プロダクト方向性は [Sec Section Product Direction](https://about.gitlab.com/direction/security/) ハンドブックページで確認できます。

## Sec セクションリソース

以下のリソースは、Sec セクションのチーム全体で共通する開発パターンのガイダンスを提供しています:

### オブザーバビリティ

- [チュートリアル: CI ベースのアナライザーにオブザーバビリティメトリクスを追加する](/handbook/engineering/development/sec/secure/analyzer-observability-metrics/) -
  セキュリティアナライザーに分散イベントパターンを実装するためのステップバイステップガイド。
- [Secret Detection メトリクス](/handbook/engineering/development/sec/secure/secret-detection/metrics/) -
  Secret Detection アナライザーと GitLab モノリスにメトリクスを追加するためのガイド。

## プロジェクト設定

プロジェクトを整理しておくことは、生産性と保守性のために非常に重要です。

- 新しいプロジェクトのセットアップは[会社全体のエンジニアリングガイドライン](/handbook/engineering/workflow/gitlab-repositories/)に従います。
- Sec プロジェクトは以下のいずれかに整理してください:
  - [https://gitlab.com/gitlab-org/secure](https://gitlab.com/gitlab-org/secure)
  - [https://gitlab.com/gitlab-org/software-supply-chain-security](https://gitlab.com/gitlab-org/software-supply-chain-security)
  - [https://gitlab.com/gitlab-org/security-products](https://gitlab.com/gitlab-org/security-products)

一般的に、`security-products` に置くプロジェクト数はできるだけ少なくしたいと考えています。

`security-products` には以下のみを含めるべきです:

- 顧客インストールの一部として実行されるアプリケーションのソースコード
- デモ
- 移動が難しい歴史的なプロジェクト

`secure` と `software-supply-chain-security` には以下のプロジェクトを置くべきです:

- エンドツーエンドテスト
- ベンチマーク / 統計
- ツール類

技術的な理由により `secure` または `software-supply-chain-security` に置くべきだが `security-products` の方がずっと簡単なプロジェクトがある場合があります。そのような場合、`secure` または `software-supply-chain-security` への配置を合理的な努力で試みたが失敗した場合、`security-products` に置くことができます。

### 推奨設定

新しいプロジェクトを作成する際、以下の secure ステージ固有の設定を除き、すべての設定はデフォルトのままにしてください:

1. プロジェクトに [CODEOWNERS](https://docs.gitlab.com/ee/user/project/codeowners/) ファイルを追加します。例:

   ```shell
   [Maintainers]
   * @gitlab-org/maintainers/container-scanning

   ^[Reviewers]
   * @gitlab-org/secure/static-analysis
   ```

   `CODEOWNERS` ファイルで使用するための[専用メンテナーグループ](https://gitlab.com/groups/gitlab-org/maintainers)を作成することをお勧めします。

1. プロジェクトの [Issue トラッカー](https://docs.gitlab.com/ee/user/project/issues/)を無効にします。

   - `Settings -> General -> Visibility, project features, permissions -> Issues`
      - `Disabled`

   Issue は代わりに [groups/gitlab-org Issue トラッカー](https://gitlab.com/groups/gitlab-org/-/issues)で作成してください。これを設定するには以下の手順 `3.` を参照してください。

   プロジェクトごとの Issue トラッカーではなく、単一の集中型 Issue トラッカーを使用することには以下のメリットがあります:

      - Issue の可視性が向上し、私たちの[透明性](/handbook/values/#transparency)の価値観と一致します。

        たとえば、コミュニティメンバーが `groups/gitlab-org` トラッカーの [Issue をフィルタリング](https://gitlab.com/groups/gitlab-org/-/issues/?sort=due_date_desc&state=opened&label_name%5B%5D=quick%20win&first_page_size=100)して、[より広いコミュニティからの貢献を求める GitLab Issues](/handbook/marketing/developer-relations/engineering/community-contributors-workflows/#seeking-wider-community-contributions) を発見することが非常に簡単になります。

      - `triage-ops` やその他のボットを追加設定なしで Issue に対して実行できるなど、既存のツールとインフラが活用されます。

      - すべてのラベルと Issue テンプレートが同じになるため、より一貫した体験が提供されます。

      - [セキュリティトリアージ自動化](https://gitlab.com/gitlab-org/secure/tools/security-triage-automation/)ツールを使って脆弱性を作成/変更するなど、自動化スクリプトを書くのが簡単になります。

      - 複数のプロジェクトに適用される Issue がいくつかあります。各プロジェクトが独自の Issue トラッカーを持っている場合、複数のプロジェクトに適用する Issue をどのトラッカーが「所有」すべきかを決める必要が出てきます。

   ただし、単一の集中型 Issue トラッカーの使用に関しては現在いくつかの制限があります。たとえば[新しい Issue でのスレッド解決が機能しない](https://gitlab.com/gitlab-org/gitlab/-/issues/220535)などです。

   この Issue が解決されるまで、新しいプロジェクトで Issue トラッカーを有効のままにすることを選択できます。

   その場合は、放棄された Issue を避けるために以下を検討してください:

   1. トラッカーを非公開にする。
   1. 手順を記載した Issue テンプレートを追加する。
   1. トリアージプロセスが整っていることを確認する。

1. [カスタム Issue トラッカー](https://docs.gitlab.com/ee/user/project/integrations/custom_issue_tracker.html)を設定します

   - `Settings -> Integrations -> Custom issue tracker -> Configure`
      - `Enable integration`
         - `Active`
      - `Project URL`
         - `https://gitlab.com/gitlab-org/gitlab/issues`
      - `Issue URL`
         - `https://gitlab.com/gitlab-org/gitlab/issues/:id`
      - `New issue URL`
         - `https://gitlab.com/gitlab-org/gitlab/issues/new`

1. 以下の[プロジェクト機能と権限](https://docs.gitlab.com/ee/user/project/settings/)設定を構成します:

   - `Settings -> General -> Visibility, project features, permissions`
      - `Project visibility`
         - `Public`
      - `Additional options`
         - `Users can request access`
            - `Disabled`
      - `Container Registry`
         - `Only Project Members`
   - `Settings -> Repository -> Protected branches`
      - `Allowed to merge`
         - `Maintainers`
      - `Allowed to push and merge`
         - `No one`
      - `Allowed to force push`
         - `Disabled`
      - `Code owner approval`
         - `Enabled`
   - `Settings -> Repository -> Protected tags`
      - `Tag`
         - `v*`
      - `Allowed to create`
         - `Maintainers`
         - [GitLab Dev Service - Secure Stage - Analyzers Automation](https://gitlab.com/gl-service-dev-secure-analyzers-automation)
   - `Settings -> Merge Requests`
      - `Squash commits when merging`
         - `Require`
      - `Approval settings`
         - `Prevent approval by author`
         - `Prevent editing approval rules in merge requests`
         - `Remove approvals by Code Owners if their files changed`
      - `Merge request approvals -> Approval rules`
         - `Approvers`
            - `All eligible users`
         - `Target branch`
            - `All branches`
         - `Approvals required`
            - `1`
      - `Merge checks`
         - `All threads must be resolved`
         - `Pipelines must succeed`
      - `Merge commit message template`

         ```markdown
         Merge branch '%{source_branch}' into '%{target_branch}'

         %{title}

         %{issues}

         See merge request %{url}

         Merged-by: %{merged_by}
         %{approved_by}
         %{reviewed_by}
         %{co_authored_by}
         ```

      - `Default description template for merge requests`

         ```markdown
         ## What does this MR do?

         <!--
         Describe in detail what your merge request does, why it does that, etc.

         Please also keep this description up-to-date with any discussion that takes
         place so that reviewers can understand your intent. This is especially
         important if they didn't participate in the discussion.

         Make sure to remove this comment when you are done.
         -->

         ## What are the relevant issue numbers?

         ## Does this MR meet the acceptance criteria?

         - [ ] Changelog entry added
         - [ ] [Documentation created/updated for GitLab EE](https://docs.gitlab.com/ee/development/documentation/feature-change-workflow.html), if necessary
         - [ ] Documentation created/updated for this project, if necessary
         - [ ] Documentation reviewed by technical writer *or* follow-up review issue [created](https://gitlab.com/gitlab-org/gitlab-ee/issues/new?issuable_template=Doc%20Review)
         - [ ] [Tests added for this feature/bug](https://docs.gitlab.com/ee/development/testing_guide/index.html)
         - [ ] Job definition updated, if necessary
           - [ ] [Auto-DevOps template](https://gitlab.com/gitlab-org/gitlab-foss/tree/master/lib/gitlab/ci/templates)
           - [ ] [Job definition example](https://docs.gitlab.com/ee/ci/examples/sast.html)
           - [ ] [CI Templates](https://gitlab.com/gitlab-org/security-products/ci-templates/tree/master/includes)
         - [ ] Ensure the report version [matches the equivalent schema version](https://gitlab.com/gitlab-org/security-products/security-report-schemas/-/blob/master/CHANGELOG.md)
         - [ ] Conforms to the [code review guidelines](https://docs.gitlab.com/ee/development/code_review.html)
         - [ ] Conforms to the [Go guidelines](https://docs.gitlab.com/ee/development/go_guide/index.html)
         - [ ] Security reports checked/validated by reviewer

         /label ~"devops::secure" ~"Category:" ~"group::" ~"backend"
         ```

secure ステージ以外のプロジェクトを設定する場合は、[GitLab Projects ベースライン要件](/handbook/security/policies_and_standards/gitlab_projects_baseline_requirements)を参照してください。

## パフォーマンスインジケーター

- [Sec サブ部門パフォーマンスインジケーター](/handbook/product/groups/product-analysis/engineering/dashboards/)
- [エラーバジェット](/handbook/engineering/error-budgets/)（ステージグループのパフォーマンスインジケーターとして）

## Slack チャンネル

- [#sec-section](https://gitlab.slack.com/archives/C02087FTL5V) - Software Supply Chain Security と Secure ステージにまたがる Sec セクションの議論。
- [#sec-growth-datascience-people-leaders](https://gitlab.slack.com/archives/C033F69CQCB) - Sec、Growth、ModelOps のエンジニアリングピープルリーダー向け。
- [🔒sec-growth-datascience-leadership-confidential](https://gitlab.slack.com/archives/GKWF00Y3E) - Sec、Growth、ModelOps のエンジニアリングピープルリーダー向けプライベートチャンネル。

## カレンダー

私たちにはステージレベルのカレンダーが 3 つあります。[AST Stage Calendar](https://calendar.google.com/calendar/embed?src=gitlab.com_md0ao36gpvl5v1f4128erhnj6g%40group.calendar.google.com)、[SRM Stage Calendar](https://calendar.google.com/calendar/embed?src=c_7c82f32669d585a441be28ca291a19611490d48bd9d27554dea93d9206612be1%40group.calendar.google.com&ctz=America%2FLos_Angeles)、[SCSS Stage Calendar](https://calendar.google.com/calendar/embed?src=gitlab.com_ed6207uel78de0j1849vjjnb3k%40group.calendar.google.com) では、以下のようなクロスグループイベントを開催しています:

1. 月次レトロスペクティブ
1. コーヒーチャット
1. スタッフ同期

各グループにも、週次グループ同期などのチームベースの議論のためのカレンダーがあります。

可能な限り、個人を参加者として追加する代わりに、利用可能な [Google グループ](https://groups.google.com/my-groups)を活用することをお勧めします。イベントが個人のカレンダーに表示されるようにするとともに、新チームメンバーはイベントに自動的に追加され（チームを離れた場合は自動的に削除）されます。

### Google グループ

Google グループは [section]-[stage]-[group] という命名規則に従い、複数単語の名前は `_` で区切ります:

- sec-section
- sec-software_supply_chain_security
- sec-security_risk_management
- sec-application_security_testing
- sec-security_risk_management-security_insights
- sec-security_risk_management-security_policies
- sec-security_risk_management-security_platform_management
- sec-security_risk_management-security_infrastructure
- sec-application_security_testing-static_analysis
- sec-application_security_testing-secret_detection
- sec-application_security_testing-dynamic_analysis
- sec-application_security_testing-composition_analysis
- sec-software_supply_chain_security-authentication
- sec-software_supply_chain_security-authorization
- sec-software_supply_chain_security-compliance
- sec-software_supply_chain_security-pipeline_security
- vulnerability-research

各 Google グループのメンバーは、安定したカウンターパートと適切な `eng-dev-[stage]-[group]` エンジニアグループで構成されます。安定したカウンターパートが変わったり、チームメンバーが入退社した場合は、それぞれのグループの EM が適切なグループを更新してください。

## 情報収集とチームメンバーへの情報共有

- [Sec Week In Review Google ドキュメント](https://drive.google.com/drive/search?q=%22Sec%20Section%20Week%20In%20Review%22) - Sec で起きている注目すべきことを非同期でまとめた週次ドキュメントです。[Engineering Week In Review](/handbook/engineering/) にヒントを得ています。
- Slack チャンネル #s_secure と #s_software-supply-chain-security は Sec セクション全体の一部であり、有益な情報源です。

## セクション内の計画

大多数の場合、作業はセクション内の個別グループにスコープされています。ただし、セクションとして協調して設計・実行しなければ、質の低い一貫性のないユーザー体験を生み出してしまうリスクがある場合があります。

これらのイニシアチブは、エピックと Issue を通じて調整されます。以下のラベルが付いたイニシアチブは、この種の作業に該当すると判断されます。

- [`~section::sec` と `~group::not owned`](https://gitlab.com/groups/gitlab-org/-/issues/?sort=created_asc&state=opened&label_name%5B%5D=section%3A%3Asec&label_name%5B%5D=group%3A%3Anot_owned); または
- [`all Sec groups`](https://gitlab.com/groups/gitlab-org/-/issues/?sort=created_asc&state=opened&label_name%5B%5D=all%20Sec%20groups)

### セクション全体のイニシアチブの計画プロセス

少なくとも 1 マイルストーンにつき 1 回、セクションのシニアエンジニアリングマネージャーは以下を行います:

- プロダクトマネジメントと連携して、6 ヶ月以上経過したイニシアチブの関連性を評価します。
- 新しいイニシアチブをトリアージし、要件の理解可能性と完全性を確認します。さらに、最も影響を受けるグループを特定します。
  - 最も影響を受けるグループが明確でない状況では、`#sec-section` のテクニカルリーダーシップに協力を求め、どのグループかを判断します。
- 最も影響を受けるグループがそのイニシアチブの DRI として宣言され、以下が期待されます:
  - 問題全体にスケールする高レベルの実装計画を作成する。
  - 機能カテゴリ別に分解した実装 Issue を作成する。
    - 元の高レベル実装計画は、作成された Issue に含めるか、少なくとも直接リンクする。
    - 実装計画が議論・作成された元の Issue も生成された Issue にリンクする。
  - 実装 Issue を関連グループに配布する。

生成された Issue は、個別グループに配布された時点で通常の優先順位付けプロセスを通じて処理されます。

## ページパフォーマンス

私たちのチームは [LCP](/handbook/engineering/development/performance-indicators/#largest-contentful-paint-lcp)（Largest Contentful Paint）を監視して、パフォーマンスが目標（現在 2500ms）を下回ることを確認しています。

[Secure が所有するページの LCP ダッシュボード](https://dashboards.gitlab.net/d/sftijGFMz/sitespeed-lcp-leaderboard?from=now-90d&orgId=1&to=now&refresh=30s&var-namespace=sitespeed_io&var-path=desktop&var-testname=gitlab&var-domains=gitlab_com&var-pages=API_Fuzzing_Config_UI&var-pages=DAST_Profiles&var-pages=On_Demand_Scans&var-pages=SAST_Config_UI&var-pages=Secure_Dependency_List&var-pages=Secure_License_Compliance&var-pages=Secure_Security_Configuration&var-pages=DAST_Config_UI&var-browser=chrome&var-function=median&var-connectivity=cable)

## プロダクトデザインとの連携

エンジニアリングとプロダクトデザインチームの間のワークフローを効率化し、効果的なコラボレーションを確保するために、マージリクエスト（MR）レビューにおける UX 関与について以下のガイドラインを確立しています:

**マージリクエスト UX レビュー要件:**

- UX レビューは、プロダクトデザイナーが明示的に設計した作業に対してのみ必要であり、そのプロダクトデザイナーによってレビューされるべきです。
- プロダクトデザイナーが明示的に設計した作業を含まない MR は `UX Tech Debt` としてラベル付けし、UX レビューなしでマージできます。

**優先度の高い UX レビューの対応:**

- マイルストーン計画プロセスで計画されていなかった高優先度のタスクが発生し、UX レビューが必要な場合は、[Sec の プロダクトデザインマネージャー](/handbook/product/categories/#sec-section)と相談してください。
- この予期しない作業に対応するため、元のマイルストーン計画から別のタスクの優先度を下げるか削除する必要があります。

**例外:**

- これらの新しいガイドラインは、Authentication、Authorization、Pipeline Security グループには適用されず、これらのグループは現在のプロセスで引き続き運用します。

## カスタマーサポートとの連携

Sec エンジニアリングチームは顧客に直接サポートを提供しません。代わりに、エンジニアは [Sec サブ部門サポートプロジェクトのプロセス](https://gitlab.com/gitlab-com/sec-sub-department/section-sec-request-for-help/)を通じてカスタマーサポートエンジニアと協力します。

## セキュリティツールリクエストへの対応

GitLab が成長するにつれ、Sec チームは最大規模の顧客のユーザー管理をより安全に行うツールを構築し続けています。その過程で、GitLab.com 上でのチームメンバー管理は、ユーザーに展開する前に機能を内部でドッグフーディングできる優れたユースケースです。Security チームと CorpSec チームは、`security tooling`、`section::sec`、および優先度 `priority::1/2/3` ラベルを追加して、GitLab チームメンバーの管理に役立つ項目をバックログに追加する必要があることを示すことができます。[機能ページ](/handbook/product/categories/features/)は、特定の機能がどこに属するかを特定するのに便利で、グループの正しい EM/PM を Issue でタグ付けできます。

これらの Issue のバックログは、個別の Issue については [Sec Security Tooling - issue](https://gitlab.com/groups/gitlab-org/-/boards/9065128?label_name[]=security%20tooling&label_name[]=section%3A%3Asec) で確認できます。毎月、プロダクトとセキュリティのカウンターパートが[これらのリクエストをレビュー](https://gitlab.com/gitlab-com/Product/-/issues/?sort=created_date&state=opened&label_name%5B%5D=security%20tooling&first_page_size=100)し、優先度の高い項目がロードマップに組み込まれるようにします。

## 品質チームとの連携方法

### フロントエンドの責任

1. どのコード変更が E2E またはシステムレベルのテストを壊す可能性があるかを識別し、品質チームに通知すること。
1. E2E テストを書くことではなく、潜在的な失敗をキャッチし、マスターにマージされる前のカバレッジのギャップをコミュニケーションすること。

### 潜在的な破損の識別

1. 作業している Issue に[既存のテストカバレッジがあるか](https://gitlab.com/gitlab-org/quality/team-tasks/-/issues/736)確認します。これらが失敗する可能性があるテストです。
1. `data-qa-selector="&lt;name&gt;"` のようなセレクターを含むコードの周辺で作業している場合、既存の E2E テストが存在する可能性があります。テストは [Secure の E2E テスト](https://gitlab.com/gitlab-org/gitlab/-/tree/master/qa/qa/specs/features/ee/browser_ui/secure)を検索することで見つけられます。

### テストを壊す可能性がある変更のコミュニケーション

Secure に割り当てられた品質 DRI に ping してください。その人は[チームページ](/handbook/engineering/development/sec/secure/#team-members)で確認できます。対応できない場合は、重大度に応じて Slack の `#s_developer_experience` または[トリアージ DRI](https://gitlab.com/gitlab-org/quality/pipeline-triage#dri-weekly-rotation-schedule) に連絡してください。

## セクションレトロスペクティブ

グループレトロスペクティブに加えて、毎月非同期で Sec セクションレベルのレトロスペクティブを行っています。セクション全体のレトロスペクティブの目的は、グループ/チームのレトロスペクティブから浮かび上がったトピックをレビューすることです。さらに、同期的に議論できるテーマを特定します。セクションレトロスペクティブを行うために、[このドキュメント](https://docs.google.com/document/d/1g_FIMgr9r_Yf56xISxoI8B-1G-kbP3PQSeo7W-kKj24/edit#)と[このテンプレート](https://gitlab.com/gitlab-com/www-gitlab-com/-/blob/master/.gitlab/issue_templates/sec-section-retro.md)で作成した [Issue](https://gitlab.com/gitlab-com/www-gitlab-com/-/issues/?search=retrospective&sort=updated_desc&state=closed&label_name%5B%5D=section%3A%3Asec&first_page_size=20) を使用しています。

### 主要な日程

1. 月次リリースの翌月曜日 - グループの非同期レトロスペクティブ Issue が生成されます。グループはトピックの追加を始めるべきです。
1. マイルストーンが終わる週 - グループがレトロスペクティブを開催します。チームメンバーは特定されたトピックとフォローアップ項目（成果）を[セクションレトロスペクティブドキュメント](https://docs.google.com/document/d/1g_FIMgr9r_Yf56xISxoI8B-1G-kbP3PQSeo7W-kKj24/edit#)に集約します。
1. リリースの週 - セクション全体のレトロスペクティブの非同期レビューが `#sec-section` Slack チャンネルで共有されます。

### DRI の責務

セクション全体のレトロスペクティブの [DRI](/handbook/people-group/directly-responsible-individuals/) はシニアエンジニアリングマネージャーです。SEM は特定のマイルストーンで必要な場合にボランティアを募ります。各マイルストーンで以下のタスクが実行されます:

1. 非同期セクションレトロスペクティブの前に、集約されたトピックをレビューし、非同期議論のテーマを 2〜3 個特定します。
1. `#sec-section` の Slack でセクション全体に[セクションレトロスペクティブドキュメント](https://docs.google.com/document/d/1g_FIMgr9r_Yf56xISxoI8B-1G-kbP3PQSeo7W-kKj24/edit#)をレビューしてコメントを追加するよう呼びかけます。
1. Slack の `#sec-section` で非同期議論のサマリーを共有します。
1. 特定された改善点についてグループにフォローアップします。
1. 積極的に宣伝・促進します！
