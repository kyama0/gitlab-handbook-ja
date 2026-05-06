---
title: Security Risk Management、Security Insights
description: "GitLab の Security Insights グループは、お客様がセキュリティリスクを効果的かつ効率的に管理できるよう支援するソリューションの開発を担っています。"
upstream_path: /handbook/engineering/development/sec/security-risk-management/security-insights/
upstream_sha: eb9c7122b4259a2111ed65628e5384768922a597
translated_at: "2026-05-06T10:00:00Z"
translator: claude
stale: false
---

## GitLab で推進しているお客様のアウトカム

開発者として、デフォルトブランチに加えて保護ブランチへのマージ時に脆弱性を導入しているかどうかを把握することは不可欠です。FY25 では、複数のブランチをまたいで脆弱性を追跡できるようにします。開発者が修正したい問題があるものの、どこから着手すべきかわからない場合は、AI の機能を使って詳細を学んだり修正の提案を得たりすることができます。

セキュリティエンジニアとして、最初にどの脆弱性に取り組むべきかを把握したいと考えています。今後 1 年間、悪用される可能性のある脆弱性を迅速にトリアージして軽減できるよう、主要なリスクメトリクスを追加していきます。

リーダーシップは、組織がリスクを軽減しており、セキュリティプログラムが効果的であることを確認したいと考えています。Security Dashboard の強化により、リーダーは概要を把握し、指標・トレンド・迅速な対応が必要な脆弱性に関する主要な質問に答えられる場所を持てるようになります。

## FY25 の最優先事項

**ユーザーがリスクを特定しトレンドを可視化できるようにする** - プロジェクトレベルおよびグループレベルの Security Dashboard を強化します。

**脆弱性悪用の潜在的な影響と可能性を見積もる** - CVSS（共通脆弱性評価システム）や悪用可能性確率といった業界標準のリスクスコアを通じて、脆弱性レポートでリスクに直接アクセスできるようにします。

**複数のブランチをまたいだ脆弱性追跡を可能にする** - デフォルトブランチ以外でも脆弱性を追跡できるようにします。

**脆弱性修正の出発点をユーザーに案内する** - AI とセキュリティトレーニングの力を活用して、開発者が脆弱性を理解し修正できるよう支援します。

**Security Insights 機能の信頼性とスケールでの動作を確保する** - グループおよび組織レベルの機能を追加するにつれて、クエリパフォーマンスを最適化し、成長に伴うデータベースのスケーリングと動作に確信を持って前進します。

## Security Insights チーム構成

Security Insights グループは、[バーティカルスライス](https://www.visual-paradigm.com/scrum/user-story-splitting-vertical-slice-vs-horizontal-slice/)で作業を進める 3 つのスイムレーンに構成されています：パフォーマンスと最適化、プロジェクト、AI です。この分割は各エリアに集中できるよう境界を設けるためのものです。複数の面で同時に進捗でき、計画のオーバーヘッドを削減します。

### チーム構成

{{% team-by-manager-slug manager="nmccorrison" team="Engineer(.*)Security Risk Management:Security Insights" %}}

## 共通リンク

* Slack チャンネル:
  * メインチャンネル: [`#g_srm_security_insights`](hhttps://gitlab.enterprise.slack.com/archives/C07UD442PQ9)
  * エンジニアリング - 全 SRM グループ: [`#s_srm_eng`](https://gitlab.enterprise.slack.com/archives/C05N5BLDYUT)

### 優先順位付け

私たちは [17.x](https://about.gitlab.com/direction/security_risk_management/security-insights/17_security_insights_priorities.html) の Security Insights 優先事項ページを使用して、取り組む内容とその順序を追跡しています。

### プロダクトワークフロー

Security Insights グループは主に GitLab の[プロダクト開発フロー](/handbook/product-development/how-we-work/product-development-flow/)に従っています。

詳細は[計画ページ](/handbook/engineering/development/sec/security-risk-management/srm-planning/)で確認できます。

### マイルストーン計画

* 毎月第 2 火曜日に、プロダクトマネージャーが計画 Issue を開始します。マイルストーンの優先事項を特定し、エンジニアリングマネージャーや安定したカウンターパート（UX、QA）をタグ付けしてレビューを依頼します。
* 毎月第 3 火曜日までに、エンジニアリングマネージャーが計画 Issue をレビューし、マイルストーンのスコープに合意します。
  * マイルストーンにスケジュールされたすべての Issue は、マイルストール開始時に `~Deliverable` ラベルと `Health Status: On Track` を持っているべきです。マイルストーンフィールドも正しく設定されている必要があります。
* 計画 Issue は [epic](https://gitlab.com/groups/gitlab-org/-/epics/12683)（17.0〜17.11 用）に作成されます。

### プロジェクト見積もり

私たちのチームは多段階の見積もりプロセスに従っています。これにより、予測可能なロードマップ計画を促進するためのジャストインタイムな情報を持てるようになります。

#### 高レベルの見積もり

* 優先事項ロードマップのプロジェクトには見積もり Issue（`~estimation::needed` ラベル付き）が含まれます。これらは[見積もり Issue ボード](https://gitlab.com/groups/gitlab-org/-/boards/9392539?label_name%5B%5D=estimation%3A%3Aneeded&label_name%5B%5D=group%3A%3Asecurity%20insights&group_by=epic)で確認できます。
* 見積もり Issue にはいくつかの望ましいアウトカムがあります：
  * 各機能（フロントエンド、バックエンド）のマイルストーンベースの高レベル見積もりを提供する。
  * 依存関係（他のプロダクトグループ、新しい技術、ライブラリ）を特定する。
  * 未解決の質問を明確にし、それが詳細な見積もりや計画の分解を始める前にブロックとなるかどうかを判断する。
* これらのアウトカムは、Epic テンプレート内の該当エリアに追加する必要があります。
* 完了したら `~estimation:complete` ラベルを追加し、見積もり Issue をクローズします。

### 成果物の追跡

* マイルストールの成果物としてマークされた Issue は、そのマイルストーンで何を目指して提供するかの唯一の情報源となります。マイルストーン中、物事が変わったり、ブロックされたりすることがあります。*理想的には、マイルストーン開始後は計画 Issue を変更しないようにしたいと考えています。*
* 何かが「提供済み」とみなされるのは、a. リリース日までに本番環境にマージされた場合、b. 次のマイルストーン開始前に完了した場合、c. 機能を有効にするフィーチャーフラグがオンになった場合のいずれかです。成果物のマイルストーンを追跡することは重要です。セルフマネージドのお客様がフィーチャーフラグをオンにして異なる機能を試せるよう促進しています。マイルストーンが正確であれば、その変更が特定のリリースで利用可能かどうかがわかります。

#### 週次の非同期 Issue 更新

毎週末に、各エンジニアは担当 Issue に以下のテンプレートを使用してコメントすることで、簡単な非同期 Issue 更新を提供することが期待されています。

```markdown
### Async issue update

* Current status:
<!--- Please provide a quick summary of the current status (one sentence) -->

* Shipping this milestone: <!-- Not confident | Slightly confident | Very confident -->

* Scope reduction opportunities: <!-- No | Yes, ... -->

/health_status <!-- on_track | needs_attention | at_risk -->
/label <!-- ~"workflow::blocked" | ~"workflow::refinement" | ~"workflow::ready for development" | ~"workflow::In dev" | ~"workflow::In review" | ~"workflow::verification" -->

<!-- Please apply a :triangular_flag_on_post: emoji to this comment. Fore more information see https://gitlab.com/jayswain/automated-reporting -->
```

これは、チームがコラボレーションにおいて非同期を重視するよう促し、コミュニティや他のチームメンバーが現在取り組んでいる Issue の進捗を把握できるようにするためです。また、スイムレーンをまたいだ更新を自動的に集約し、一部の手作業を削減できます。

#### ステータスの表示とリスクの報告

私たちのチームは Issue 内の[ヘルスステータス](https://docs.gitlab.com/ee/user/project/issues/managing_issues.html#health-status)機能を使用して、マイルストーン内の完了可能性を示します。マイルストーン開始時に、そのマイルストールでの提供に高い自信があるごく少数の Issue に `On Track` を割り当てます。何かを最初から「オントラック」としてマークすることに懸念がある場合は、理由を議論すべきです。

リスクの早期報告は重要です。時間があればあるほど、選択肢が増えます。たとえば、月の第 1 月曜日までにレビューに入っていない Issue は、マージに十分な時間がないかもしれません。これらは複雑さやその他の要因に応じて、Needs Attention または At Risk と見なすべきです。

リスクを引き上げるまたは下げる際は、以下の手順に従います。

1. Issue のヘルスステータスを更新します。
    1. `On Track` - 高い確信 - その作業が月の第 2 火曜日までにマージされないという兆候がない。
    1. `Needs Attention` - 中程度の確信 - Issue がブロックされているか、議論が必要な他の要因がある。
    1. `At Risk` - 低い確信 - Issue が月の第 2 火曜日のマージ締め切りを逃す危険がある。
1. リスクが増加または減少した理由についてコメントを追加します。エンジニアリングマネージャーとプロダクトマネージャーに認識のためにコピーします。

Issue が On Track から直接 At Risk に変わるべきではありません。このパターンは、より早い段階で議論する機会を逃したことを示しています。`On Track -> Needs Attention -> At Risk` という進行を考慮してください。

### サポートローテーション

開発ロードマップに加えて、エンジニアリングチームはサポートとトリアージに関連するタスクを実行する必要があります。私たちのチームはこれらのタスクのためにキャパシティを確保する個人を指名します。ローテーションは[こちら（内部リンク）](https://gitlab.com/groups/gitlab-org/govern/threat-insights/-/epics/2)にあります。これにより、過度なコンテキストスイッチングを避け、作業負荷をより均等に分散させることができます。コミットメントの提供をサポートするために、チーム内での集中力を守ることが重要です。

特定の週に**指名されていない**場合は：

1. デフォルトではトリアージと調査は期待されていません。ここでは最善の判断を使用してください（例：緊急の Issue は引き続き優先されますので、期待に変化はありません）。
1. 質問を指名された人にリダイレクトしてください（例：Slack の DM で来た場合は、パブリックチャンネルにリダイレクトしてください）。

ローテーション中に行ったアクションを追跡し、対応する Issue にメモを追加してください（例：ローカルで実行したツールのコマンドのコピー、プロジェクトやプロセスへの関連変更の共有など）。

#### トリアージの期待値

トリアージは、現在計画されている作業の変更を即座に保証するものではありません。トリアージは影響と優先度を判断し、スコープとマイルストーンのコミットメントへの変更を正当化できるようにするプロセスです。

* サポートリクエストチケットを精査します：再現手順はありますか、これはスコープ済みまたは計画済みの作業に関連していますか、これはバグですか、機能リクエストですか、それともシステムの許容可能な制限ですか。
  * アウトカムには以下が考えられます：ドキュメントやハンドブックページの更新、バグの再現を検証してから Issue を作成すること。
* サポートの質問に直接回答する。
* 必要な作業の優先順位とスケジューリングについてプロダクトと合意する。プロダクトと協力して重大度を定義し、開発チームの残りを中断するかどうかを決定する。

Slack のインタラクションを処理する際は、以下のリアクションを使用することが期待されています。

* :eyes: - 積極的に確認中
* :white_check_mark:（またはそのバリアント）- 解決済み

#### 責任 - サポート

1. 質問、サポートリクエスト、アラートの Slack チャンネルを監視します。リアクションローテーションに割り当てられた人が主に対応します。
サポートエンジニアが Slack 経由でアシスタンスを要求し、調査またはデバッグが必要な場合は、[専用プロジェクト](https://gitlab.com/gitlab-com/sec-sub-department/section-sec-request-for-help)に Issue を提出するよう案内してください。

* [#g_srm_security_insights](https://gitlab.enterprise.slack.com/archives/C07UD442PQ9)
* [s_srm](https://gitlab.enterprise.slack.com/archives/C07QUBQ98S1)
* [#sec-section](https://gitlab.slack.com/archives/C02087FTL5V)

私たちは標準化された[サポートリクエスト](https://gitlab.com/gitlab-com/request-for-help)プロセスを使用して、グループへの正式なアシスタンスをリクエストします。これにより可視性、追跡、レビューが向上します。Security Insights のサポートリクエストは[このテンプレート](https://gitlab.com/gitlab-com/request-for-help/-/issues/new?issuable_template=SupportRequestTemplate-Security-Insights)を使用して新しいサポートリクエストを提出してください。

### MR レビュー

Security Insights ドメイン内の変更に対して MR をレビューに提出する際は、以下のガイドラインに従います。

1. レビューの少なくとも 1 つはグループ外の人に依頼することを目指します。これにより、コードの知識がサイロ化することを防ぎます。
1. 時間的に重要なレビューの場合は、内部レビュアーとメンテナーを使用することを検討します。
1. 最初のレビューはチームのメンバーが実施すべきです。これにより、チームは以下のメリットを得られます：
   * ドメインに精通したレビュアーによる迅速なレビュー。
   * ドメイン内で行われる変更に対する追加の認識。
   * ドメインで何が起きているかと整合しない変更を特定する。
   * 変更が期待通りに動作するという外部メンテナーレビュアーへのドメインエキスパートからの追加的な確信を提供する。
1. GraphQL マージリクエストは、できるだけ早くフロントエンドエンジニアによってレビューされるべきです。これにより、インターフェースを検証し、テストが書かれる前に変更を加えられるようになります。

### Issue ボード

* [Security Insights マイルストーンボード](https://gitlab.com/groups/gitlab-org/-/boards/1754666?milestone_title=Started&label_name[]=group%3A%3Asecurity%20insights)
  * 現在計画されている Issue のステージを表示するプライマリボード。

* [Security Insights「誰が何に取り組んでいるか」ボード](https://gitlab.com/groups/gitlab-org/-/boards/7145903?milestone_title=Started)
  * チームのエンジニアに割り当てられた Issue を表示。

これらのボードは Issue の現在のステータスを表示します。

## 品質

## 品質と E2E スペック

### ステージングおよびプロダクションでの E2E 実行ワークフロー

スケジュールされた E2E テストをステージングと本番環境の両方で 4 時間ごとに実行しています。これらのテストは、最近のデプロイがリグレッションを導入していないことを確認するのに役立ちます。

以下の Slack チャンネルでテスト結果を監視できます。

* #e2e-run-staging
* #e2e-run-production

ライブ環境に対して実行されるスケジュールされた E2E テストパイプラインの詳細については、[E2E テストパイプライン](../../../../testing/end-to-end-pipeline-monitoring#end-to-end-e2e-test-pipelines)を参照してください。

### E2E スペックの実行と修正

#### 前提条件

テストを実行する前に、以下を確認します。

* `gdk` が起動および実行中であること。
* ランナーが起動および実行中であること。
* `gitlab-development-kit` ディレクトリの `gdk.yml` 内で `GITLAB_SIMULATE_SAAS` を 0 に設定すること。

  ```shell
  env:
    GITLAB_SIMULATE_SAAS: "0"
  ```

* EE ライセンスが .env ファイルの環境変数として設定されていること。

#### QA テストの実行

以下のコマンドを使用して GDK インスタンスに対してローカルでテストを実行します。

#### `gdk` に対して実行する

* フィーチャーフラグを有効にして：

  ```shell
  WEBDRIVER_HEADLESS=false bundle exec bin/qa Test::Instance::All http://gdk.test:3000/ <filename/path> --enable-feature <feature_flag_name>
  ```

`<filename>:<line_number>` を使用して特定の RSpec 行を実行し、周囲のサンプルブロックをターゲットにすることもできます。詳細については、[RSpec ベストプラクティス](https://docs.gitlab.com/development/testing_guide/best_practices/#rspec)を参照してください。

* フィーチャーフラグを無効にして：

  ```shell
  WEBDRIVER_HEADLESS=false bundle exec bin/qa Test::Instance::All http://gdk.test:3000/ <filename/path> --disable-feature <feature_flag_name>
  ```

* フィーチャーフラグなしで：

  ```shell
  WEBDRIVER_HEADLESS=false GITLAB_ADMIN_PASSWORD="root_password" GITLAB_QA_ADMIN_ACCESS_TOKEN="api_token_from_gdk" GITLAB_PASSWORD="root_password" QA_LOG_LEVEL=DEBUG QA_GITLAB_URL=http://gdk.test:3000 bundle exec rspec <filename/path>
  ```

#### ステージングに対して実行する

```shell
GITLAB_QA_USER_AGENT=<USER_AGENT> GITLAB_ADMIN_USERNAME=<ADMIN_USERNAME>  GITLAB_ADMIN_PASSWORD=<ADMIN_PASSWORD>
GITLAB_USERNAME=<USERNAME> GITLAB_QA_ACCESS_TOKEN=<ACCESS_TOKEN> GITLAB_PASSWORD=<GITLAB_PASSWORD> QA_LOG_LEVEL=debug WEBDRIVER_HEADLESS=true bundle exec bin/qa Test::Instance::All https://staging.gitlab.com <filename/path>
```

認証情報は 1Password で確認できます。

#### ライセンス機能のローカルテスト

機能が現在のライセンス階層を確認する必要がある場合、GitLab.com でも動作することを確認することが重要です。

これをローカルでエミュレートするには、以下の手順に従います。

1. 環境変数[^1]をエクスポートします。

   ```shell
   export GITLAB_SIMULATE_SAAS=1
   ```

1. 同じシェルセッション内で実行します。

   ```shell
   gdk restart
   ```

1. **Admin > Settings > General > "Account and limit"** に移動し、「Allow use of licensed EE features」を有効にします。

詳細については、[関連するハンドブックエントリ](https://docs.gitlab.com/ee/development/ee_features.html#act-as-saas)を参照してください。

### 一般的なエラーと修正のトラブルシューティング

* 一般的なトラブルシューティングのヒントについては、[E2E テストのトラブルシューティング](https://docs.gitlab.com/development/testing_guide/end_to_end/troubleshooting/)を参照してください。

* **エラー: QA::Resource::Sandbox Fabrication Failed**
  * エラーメッセージ：

    ```plaintext
    Fabrication of QA::Resource::Sandbox using the API failed (400) with `{ "message": "Failed to save group {:visibility_level=[\"public has been restricted by your GitLab administrator\"]}" }`
    ```

  * 解決策：
    * GDK 管理エリア → General に移動します。
    * Restricted Visibility Levels の下で、チェックボックスが選択されていないことを確認します。

* **エラー: API Client Validation Failed**
  * エラーメッセージ：

    ```plaintext
    An error occurred in a `before(:suite)` hook.
    Failure/Error: raise InvalidTokenError, "API client validation failed! Code: #{resp.code}, Err: '#{resp.body}'"
    ```

  * 解決策：
    * パイプラインを実行する前にユーザー検証が完了していることを確認します。
    * API トークンが有効かどうかを確認します。

* **エラー: Namespace is Not Valid**
  * エラーメッセージ：

    ```plaintext
    QA::Resource::Errors::ResourceFabricationFailedError:
    Fabrication of QA::Resource::Project using the API failed (400) with `{ "message": { "namespace": ["is not valid"] } }`.
    ```

  * 解決策：
    * 以下を実行して GDK をリセットします。

      ```shell
      gdk data-reset
      ```

* **エラー: Webpack Module Parse Failed**
  * エラーメッセージ：
  
    ```plaintext
    /.../.../.../gdk/gitlab/node_modules/graphql-ws/dist/client.js 75:56
    Module parse failed: Unexpected token (75:56)
    You may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See
    https://webpack.js.org/concepts#loaders
    |         },
    |         emit(message2) {
    >           if ("id" in message2) listeners2[message2.id]?.(message2);
    |         }
    |     };
    ```

  * 解決策：
    * Webpack から Vite に切り替えます。
    * `gdk update` を実行します。

### MR パイプラインでの E2E スペックの実行

以下に変更がある場合は、マージリクエストで `e2e: test-on-omnibus` ダウンストリーム [E2E ジョブ](https://docs.gitlab.com/ee/development/testing_guide/end_to_end/#testing-code-in-merge-requests)を少なくとも 1 回実行し、結果をレビューすることを推奨します。

* GraphQL（API レスポンス、クエリパラメータ、スキーマなど）
* Gemfile（バージョン変更、gem の追加/削除）
* データベーススキーマ/クエリの変更
* 脆弱性レポートページ、MR セキュリティウィジェット、パイプラインセキュリティタブ、セキュリティポリシー、設定、またはライセンスコンプライアンスページに直接影響するフロントエンドの変更。

### GDK に対してローカルで Govern E2E スペックを実行する

スタンドアロンの [E2E スペックをローカルの GDK インスタンスに対して実行](https://gitlab.com/gitlab-org/gitlab/-/tree/master/qa?ref_type=heads#generic-command-for-a-typical-gdk-installation)できます。

### フィーチャーフラグを使用した E2E テスト

E2E テストは、ステージングまたは GitLab.com で有効にする前に、フィーチャーフラグが有効な状態でパスする必要があります。
そのため、新しいフィーチャーフラグを導入する際にこれを確認することが重要です。フィーチャーフラグの定義ファイルを追加または編集すると、[2 つの `e2e:test-on-omnibus` ジョブが起動](https://docs.gitlab.com/ee/development/testing_guide/end_to_end/feature_flags.html#automatic-test-execution-when-a-feature-flag-definition-changes)します（1 つはフィーチャーフラグをオンにして、もう 1 つはオフにして実行）。

フィーチャーフラグを使用する際のエンドツーエンドテストプロセスの詳細な説明については、[フィーチャーフラグを使用したエンドツーエンドテスト](https://docs.gitlab.com/development/testing_guide/end_to_end/feature_flag_testing/#e2e-flow-when-changing-a-feature-flag-with-a-merge-request)ページの公式ドキュメントを参照してください。

## QA テストに関するノートとリソース

ご質問は [#s_developer_experience](https://gitlab.enterprise.slack.com/archives/C07TWBRER7H) にお問い合わせください。

### リソース

* [GitLab でのテストのハンドブックページ](../../../../testing)
* [マージリクエストでのコードテスト](https://docs.gitlab.com/development/testing_guide/end_to_end/#testing-code-in-merge-requests)
* [GDK に対してローカルで Govern E2E スペックを実行](https://gitlab.com/gitlab-org/gitlab/-/tree/master/qa?ref_type=heads#generic-command-for-a-typical-gdk-installation)
* [フィーチャーフラグの定義変更時の自動テスト実行](https://docs.gitlab.com/development/testing_guide/end_to_end/best_practices/feature_flags/#automatic-test-execution-when-a-feature-flag-definition-changes)
* [エンドツーエンドテストパイプライン](https://docs.gitlab.com/development/testing_guide/end_to_end/test_pipelines/)
* [公式ビルドインフラストラクチャの使用に関する GitLab チームメンバーのガイド](https://docs.gitlab.com/omnibus/build/team_member_docs/)
* [E2E テスト概要ビデオ](../../../../testing/#-gitlab-end-to-end-testing-overview-video)

## モニタリング

* [Grafana の Stage Group ダッシュボード](https://dashboards.gitlab.net/d/stage-groups-threat_insights/stage-groups-threat-insights-group-dashboard)
* [最大コンテンツフルペイント（LCP）](https://dashboards.gitlab.net/d/sftijGFMz/sitespeed-lcp-leaderboard?from=now-90d&orgId=1&to=now&refresh=30s&var-namespace=sitespeed_io&var-path=desktop&var-domains=gitlab_com&var-pages=Secure_Instance_Dashboard_Settings&var-pages=Secure_Instance_Security_Dashboard&var-pages=Secure_Instance_Vulnerability_Report&var-pages=Secure_Group_Security_Dashboard&var-pages=Secure_Group_Vulnerability_Report&var-pages=Secure_Project_Security_Dashboard&var-pages=Secure_Project_Vulnerability_Report&var-pages=Secure_Standalone_Vulnerability&var-browser=chrome&var-connectivity=cable&var-function=median) - 私たちのウェブページ用。

## コントリビュート

### ライセンス機能のローカルテスト

機能が現在のライセンス階層を確認する必要がある場合、GitLab.com でも動作することを確認することが重要です。

これをローカルでエミュレートするには、以下の手順に従います。

1. `gdk.yml` に環境変数を設定します：

    ```yaml
    env:
      GITLAB_SIMULATE_SAAS: "1"
    ```

   * 環境変数の設定手順については、GitLab Development Kit（GDK）設定ページの[環境変数](https://gitlab-org.gitlab.io/gitlab-development-kit/configuration/#environment-variables)セクションを参照してください。
1. 同じシェルセッションで `gdk restart` を実行します。
1. Admin > Settings > General > "Account and limit" で「Allow use of licensed EE features」を有効にします。

詳細については、[関連するハンドブックエントリ](https://docs.gitlab.com/ee/development/ee_features.html#act-as-saas)を参照してください。

### クロススタックコラボレーション

フロントエンドエンジニアのバックエンドへの貢献、およびその逆を推奨します。そのような場合は、グループ内のドメインエキスパートと緊密に連携し、最初のレビューは内部で行うようにします。

これにより、変更がベストプラクティスに従い、十分にテストされ、意図しない副作用がなく、Security Insights コードベースに加えられた変更についてチームが把握できるようになります。

### コミュニティコントリビュート

Security Insights グループはコミュニティからのコントリビュートを歓迎します。コミュニティからのコントリビュートは、Security Insights エンジニアの 1 人から迅速なフィードバックを受けるべきです。チームのすべてのエンジニアがコミュニティコントリビュートに取り組む責任を持っています。チームメンバーがコミュニティコントリビュートをレビューする時間がない場合は、エンジニアリングマネージャーにタグ付けして、別のチームメンバーに割り当ててもらいます。

チームメンバーが Issue を作成したり、コミュニティコントリビュートを受け入れられる Issue を見つけた場合は、`~"Seeking community contributions"` ラベルを付けるべきです。コントリビューターが EE ライセンスを必要とする場合は、コミュニティコントリビューターワークフローページの[GitLab Enterprise Edition（EE）へのコントリビュート](/handbook/marketing/developer-relations/engineering/community-contributors-workflows/#contributing-to-the-gitlab-enterprise-edition-ee)セクションを案内できます。

### グループディスカッション

2 週間ごとにグループディスカッションを開催しています。マイルストーンキックオフと一般的なディスカッションの形式を交互に行います。すべての方が参加を歓迎されており、脆弱性管理、お客様からの質問、ロードマップ、Security Insights チームが考えていることについて質問する良い場です。会議は [Security Insights カレンダー](#共通リンク)にあります。[アジェンダ](https://docs.google.com/document/d/1nnjYPNKtYzbpdEz16u0U2raDdLcIFY-0ibjxGLltyG0/edit?tab=t.0#heading=h.j80itk3qkjs3)（内部リンク）も参照してください。ぜひご参加ください！
