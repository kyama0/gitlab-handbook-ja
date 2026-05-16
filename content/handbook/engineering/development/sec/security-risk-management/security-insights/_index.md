---
title: Security Risk Management、Security Insights
description: "GitLab の Security Insights グループは、お客様がセキュリティリスクを効果的かつ効率的に管理できるよう支援するソリューションの開発を担っています。"
upstream_path: /handbook/engineering/development/sec/security-risk-management/security-insights/
upstream_sha: 1e195b58b9f249ff10bd0e705106c320fee86141
translated_at: "2026-05-14T00:00:00Z"
translator: claude
stale: false
lastmod: "2026-05-07T10:50:36+01:00"
---

## GitLab で私たちが推進しているお客様の成果

開発者として、デフォルトブランチに加えて保護ブランチにマージする際に脆弱性を導入しているかどうかを知ることは必須です。FY25 では、ユーザーが複数のブランチ全体で脆弱性を追跡できるようにします。開発者が修正したいが、どこから始めればよいかわからない場合、私たちの機能 AI を使ってさらに学び、修正の提案を受けることができます。

セキュリティエンジニアとして、最初にどの脆弱性に取り組むべきかを知りたいでしょう。来年中に、悪用される可能性のある脆弱性を素早くトリアージし、軽減できるよう、主要なリスクメトリクスを追加していきます。

リーダーシップは、組織がリスクを軽減し、セキュリティプログラムが効果的であることを確認したいと思っています。Security Dashboards の機能強化により、リーダーは概要を把握し、迅速に対処する必要があるメトリクス、傾向、脆弱性に関する主要な質問に答える場を持つことができます。

## FY25 のトッププライオリティ

**ユーザーがリスクを特定し、傾向を可視化できるようにする** - プロジェクトレベルとグループレベルで Security Dashboards の機能強化を行います。

**脆弱性悪用の潜在的な影響と可能性を見積もる** - CVSS (Common Vulnerability Scoring System) や悪用可能性の確率など、業界で知られているリスクスコアを通じて、ユーザーが脆弱性レポートから直接リスクにアクセスできるようにします。

**ユーザーが複数のブランチ全体で脆弱性を追跡できるようにする** - ユーザーがデフォルトブランチ以外で脆弱性を追跡できるようにします。

**ユーザーが脆弱性修正を開始するためのガイダンスを提供する** - AI とセキュリティトレーニングの力を活用して、開発者が脆弱性を理解し修正するのを支援します。

**Security Insights の機能は信頼性が高く、スケールでパフォーマンスを発揮する** - グループおよび組織レベルの機能をさらに追加するにつれ、クエリパフォーマンスを最適化し、データベースが成長に応じてスケールし、パフォーマンスを発揮することに自信を持って前進します。

## Security Insights チーム構造

Security Insights グループは、それぞれが [垂直スライス](https://www.visual-paradigm.com/scrum/user-story-splitting-vertical-slice-vs-horizontal-slice/) で作業に取り組む 3 つの集中したスイムレーンに構造化されています: Performance and Optimization、Projects、AI。この細分化は、各エリアに境界のある集中を提供することで、複数の前線で進捗を促進し、計画オーバーヘッドを削減します。

### チーム構造

{{% team-by-manager-slug manager="ajbiton" team="Engineer(.*)Security Risk Management:Security Insights" %}}

## 共通リンク {#common-links}

* Slack チャンネル:
  * メインチャンネル: [`#g_srm_security_insights`](hhttps://gitlab.enterprise.slack.com/archives/C07UD442PQ9)
  * Engineering - SRM 全グループ: [`#s_srm_eng`](https://gitlab.enterprise.slack.com/archives/C05N5BLDYUT)

### 優先度設定

[17.x](https://about.gitlab.com/direction/security_risk_management/security-insights/17_security_insights_priorities.html) の Security Insights 優先度ページを使って、私たちが何を行っているか、どの順序で行うかを追跡しています。

### 製品ワークフロー

Security Insights グループは、主に GitLab の [製品開発フロー](/handbook/product-development/how-we-work/product-development-flow/) に従います。

追加情報は [プランニングページ](/handbook/engineering/development/sec/security-risk-management/srm-planning/) で見つけることができます。

### マイルストーンプランニング

* 毎月の第 2 火曜日に、プロダクトマネージャーがプランニング Issue をキックオフします。彼らはマイルストーンの優先事項を特定し、エンジニアリングマネージャーと安定したカウンターパート (UX、QA) にレビューのためにタグを付けます。
* 毎月の第 3 火曜日までに、エンジニアリングマネージャーがプランニング Issue をレビューし、マイルストーンのスコープに合意します。
  * マイルストーンにスケジュールされたすべての Issue は、マイルストーンの開始時に `~Deliverable` ラベルと `Health Status: On Track` を持つべきです。マイルストーンフィールドも正しく設定されているべきです。
* プランニング Issue は 17.0-17.11 のためにこの [epic](https://gitlab.com/groups/gitlab-org/-/epics/12683) に作成されます。

### Issue の整理

#### 真実の情報源としての説明

タスクおよび/またはステータス更新に関連するすべての決定の真実の情報源として、ワークアイテムの **説明** が残ることを目指すべきです。

説明に十分な詳細があるかを評価するために、次のプロンプトを考えてみてください:

> 私は 2 か月にわたるプロジェクトの新しいエンジニアで、締め切りは 1 週間後で、できるだけ早く作業を開始する必要があります - 何を知る必要がありますか?

そのために:

* ディスカッション/コメントスレッドで行われた決定は、元の Issue の説明に反映される **必要があります**。
  * 明確にしておくと - 元の説明に要約が反映される限り、詳細を Issue で議論することは問題ありません。
* **DRI は責任** を持って Issue の説明を最新に保ちます (ただし委任することができます)。
* **推奨:** 良好な Issue 整理を確保するために週に 5-10 分 (グループ同期の一部として) を見つけてください。

#### 工数の見積もり

私たちは、工数を見積もり、測定するための一貫した、信頼性のある、シンプルな (明確に理解できる) 方法を持ち、チームの **全員** に採用されることを確認する必要があります。

* `Time tracking` フィールドを利用し、稼働時間の見積もりを使用します (例: `3d`、`2w`、`1mo` など)。
* 見積もりには、稼働日のみ、レビューバッファ、個人的な調整 (たとえば、ある人にとって他の人より少し時間がかかる場合は完全に問題ありません) を含めるべきです。
  見積もりは **大雑把** であることが期待されます。
* 見積もりは **目標** であり、それに従うように努めるべきですが、チームメンバーは見落とした見積もりに対して責任を問われることは **ありません**。
  代わりに、納期を過小評価した場合、なぜそうだったのか、次の Issue をより適切に見積もる方法を学びたいと考えています。
* **覚えておいてください: 高い見積もりを与えて交渉する方が、その逆よりも常に良いです。**

#### マイルストーン追跡

マイルストーン追跡は、何かが _いつ_ リリースされるかを追跡するための厳密なもので、`Time Tracking` やキャパシティと混同したり混乱したりすべきではありません。たとえば、Issue が `n+2` の配信マイルストーンを持っている場合、それが約 2 か月の作業に相当すると仮定すべきではありません!

#### 相互責任

すべてのチームメンバーは、Issue 整理の改善を提案する **責任** があります。Issue/Epic を読んでいる間に少し混乱したり、コンテキストが欠けていることに気付いた場合は、プロセスを改善できるようにフラグを立ててください 🙂

#### タスクのフロー

すべてのワークアイテムは、トレーサビリティ、オーナーシップの明確さ、効果的な計画を確保するために、明確な 3 階層構造に従うべきです。

| レベル | 種類 | 寿命 | 焦点 |
| ----- | ---- | -------- | ----- |
| 1 | [Epic](https://gitlab.com/gitlab-org/gitlab/-/blob/master/.gitlab/issue_templates/Security%20Insights%20-%20Epic.md) | 1–3 か月 | **なぜ** これを行っているのか、そして **何を** 構築しているのか? |
| 2 | [Sub-Epic](https://gitlab.com/gitlab-org/gitlab/-/blob/master/.gitlab/issue_templates/Security%20Insights%20-%20Sub%20Epic.md) | 2–4 週 | **どのように** 取り組むのか、そして **いつ** 提供されるのか? |
| 3 | [Issue](https://gitlab.com/gitlab-org/gitlab/-/blob/master/.gitlab/issue_templates/Security%20Insights%20-%20Issue.md) | 1–5 日 | **誰** が責任を持ち、**どこで** 変更が行われるのか?\* |

\* _注:_ 理想的には、このレベルの粒度のためにタスクを使用したいと思います。しかし、タスクは現在マイルストーンのカンバンボードに表示されず、
Issue のようにそのステータスを追跡できません。今のところ、Issue を使用することで、計画とレポート全体でより良い可視性と一貫性が得られます。

#### 関係管理

ワークフローを予測可能で透明に保つために、Issue 間の関係は常に明確で、時間とともに維持されるべきです。

* Epic、サブ Epic、Issue 間の可視性を保つために親子関係を使用する。
* 依存関係を早期にフラグするために、「blocks」または「is blocked by」などの Issue リンクを追加する。
* 作業が関連しているが直接依存していない場合に「relates to」の Issue リンクを使用する。
* Epic の説明を最新に保ち、そのイニシアチブにリンクされているすべての単一の信頼できる概要として機能させる。

#### 週次非同期 Issue アップデート

毎週末、各エンジニアは、以下のテンプレートを使ってアサインされた Issue にコメントすることで簡単な非同期 Issue アップデートを提供することが期待されています:

```markdown
### Async issue update

* Current status:
<!--- Please provide a quick summary of the current status (one sentence) -->

* Shipping this milestone: <!-- Not confident | Slightly confident | Very confident -->

* Scope reduction opportunities: <!-- No | Yes, ... -->

/health_status <!-- on_track | needs_attention | at_risk -->
/status <!-- "In dev" | "Blocked" | "In Review" | "Verification" | "Complete" -->

<!-- Please apply a :triangular_flag_on_post: emoji to this comment. Fore more information see https://gitlab.com/jayswain/automated-reporting -->
```

これは、私たちのチームがコラボレーションにおいてより非同期になることを促進し、コミュニティや他のチームメンバーが現在私たちが積極的に取り組んでいる Issue の進捗を知ることができるようにするためです。これにより、スイムレーン全体でアップデートを自動的に集約することもでき、手作業の一部を取り除きます。

#### ステータスの表示とリスクの提起

私たちのチームは、マイルストーン内での完了の可能性を示すために、Issue 内の [Health Status](https://docs.gitlab.com/ee/user/project/issues/managing_issues.html#health-status) 機能を使用します。マイルストーン中に提供する自信が高い少数の Issue に、マイルストーンの開始時に `On Track` を割り当てます。最初に on track としてマークすることに懸念がある場合、その理由を議論すべきです。

リスクを早期に提起することは重要です。時間が多いほど、選択肢が多くなります。たとえば、月の最初の月曜日までにレビューに入らなかった Issue は、マージするのに十分な時間がない可能性があります。これらは、複雑さやその他の要因に応じて Needs Attention または At Risk と見なされるべきです。

リスクを上げたり下げたりする際は、次のステップに従います:

1. Issue の Health Status を更新する:
    1. `On Track` - 高い自信 - 月の第 2 火曜日までに作業がマージされない兆候はない。
    1. `Needs Attention` - 中程度の自信 - Issue がブロックされているか、議論する必要がある他の要因がある。
    1. `At Risk` - 低い自信 - Issue が月の第 2 火曜日のマージカットオフを逃す危険にさらされている。
1. リスクが増加または減少した理由についてコメントを追加する。認識のためにエンジニアリングマネージャーとプロジェクトマネージャーをコピーする。

Issue は On Track から直接 At Risk に移行すべきではありません。そのパターンは、早期に議論する機会を逃したことを示しています。進行を考慮してください: `On Track -> Needs Attention -> At Risk`。

### サポートローテーション

開発ロードマップに加えて、エンジニアリングチームはサポートとトリアージに関連するタスクを実行する必要があります。私たちのチームは、これらのタスクのためにキャパシティを確保する個人を 1 名指名します。ローテーションは [ここ (内部リンク)](https://gitlab.com/groups/gitlab-org/govern/threat-insights/-/epics/2) にあります。これは過度のコンテキストスイッチを避け、ワークロードをより良く分配するためです。コミットメントの提供をサポートするために、チーム内の集中を守ることが重要です。

ある週に指名された人で **ない** 場合:

1. デフォルトではトリアージや調査を行うことは期待されていません。ここでは最善の判断を使ってください (たとえば、重大な Issue は依然として優先されます。期待に変更はありません)。
1. 質問を指名された人にリダイレクトすべきです (たとえば、Slack DM で来た場合は、公開チャンネルにリダイレクトする)。

ローテーション中に行っているアクションを追跡し、対応する Issue にメモを追加してください (たとえば、ローカルで実行したツールコマンドをコピーする、プロジェクトおよびプロセスに関連する変更を共有するなど)。

#### トリアージへの期待

トリアージは、マイルストーンで現在計画されている作業の変更を即座に保証するものではありません。トリアージは、スコープおよびマイルストーンへのコミットメントの変更を正当化できるよう、影響と優先度を決定するプロセスです。

* ヘルプリクエストのチケットを洗練する: 再現手順はあるか、これは他のスコープ内または計画された作業に関連するか、これはバグまたは機能リクエストか、システムの許容可能な制限か。
  * 結果は次のようになります: ドキュメントやハンドブックページへの更新、バグの検証済み再現、そしてこれから Issue を作成する。
* サポートの質問に直接答える。
* 必要な作業の優先度とスケジューリングについて合意するためにプロダクトと関わる。深刻度と、残りの開発チームを中断するかどうかを定義するためにプロダクトと協力する。

Slack のやり取りを扱うときは、以下のリアクションを使うことが期待されます:

* :eyes: - これに積極的に取り組んでいます
* :white_check_mark: (またはその変形) - これは解決されました

#### 責任 - サポート

1. 質問、サポートリクエスト、アラートのために Slack チャンネルを監視する。リアクションローテーションに割り当てられた人が主にそれらを処理することが期待されます。
サポートエンジニアが Slack 経由でアシスタンスを要求し、調査やデバッグが必要な場合、[専用プロジェクト](https://gitlab.com/gitlab-com/sec-sub-department/section-sec-request-for-help) で Issue を提出するよう案内すべきです。

* [#g_srm_security_insights](https://gitlab.enterprise.slack.com/archives/C07UD442PQ9)
* [s_srm](https://gitlab.enterprise.slack.com/archives/C07QUBQ98S1)
* [#sec-section](https://gitlab.slack.com/archives/C02087FTL5V)

私たちは、グループからの正式な支援を要求するために、標準化された [Request for Help](https://gitlab.com/gitlab-com/request-for-help) プロセスを利用しています。これは可視性、追跡、レビューに役立ちます。Security Insights のための新しい Request for Help を [このテンプレート](https://gitlab.com/gitlab-com/request-for-help/-/issues/new?issuable_template=SupportRequestTemplate-Security-Insights) を使って提出してください。

### MR レビュー

Security Insights ドメイン内の変更について MR をレビューに提出する際は、以下のガイドラインに従います:

1. 少なくとも 1 つのレビューをグループ外の人から依頼することを目指す。これにより、コード知識のサイロを避けるのに役立ちます。
1. 時間が重要なレビューでは、内部のレビュアーやメンテナーを使用することを検討する。
1. 最初のレビューはチームメンバーが行うべきです。これは、以下によってチームを助けます:
   * レビュアーがすでにドメインに精通しているため、レビューが速い。
   * ドメイン内で行われている変更に対する追加の認識。
   * ドメインで起こっていることと合致しない変更を特定する。
   * 変更が期待どおりに動作することについて、外部のメンテナーレビュアーに対するドメインエキスパートからの追加の自信を提供する。
1. GraphQL のマージリクエストは、できるだけ早くフロントエンドエンジニアによってレビューされるべきです。これは
   インターフェースを検証するのに役立ち、テストが書かれる前に変更を加えることを可能にします。

### Issue ボード

* [Security Insights Milestone Board](https://gitlab.com/groups/gitlab-org/-/boards/1754666?milestone_title=Started&label_name[]=group%3A%3Asecurity%20insights)
  * 現在計画されている Issue の段階を示すプライマリボード。

* [Security Insights "Who's working on what" board](https://gitlab.com/groups/gitlab-org/-/boards/7145903?milestone_title=Started)
  * 私たちのチームのエンジニアにアサインされた Issue を表示します。

これらのボードは、Issue の現在のステータスを示します。

## 品質

## 品質と E2E スペック

### ステージングと本番での E2E 実行のワークフロー

私たちは 4 時間ごとにステージングと本番環境の両方で予定された E2E テストを実行します。これらのテストは、最近のデプロイメントが回帰を導入していないことを確認するのに役立ちます。

私たちは、以下の Slack チャンネルでテスト結果を監視できます:

* #e2e-run-staging
* #e2e-run-production

ライブ環境に対して実行される予定の E2E テストパイプラインの詳細については、[E2E test pipelines](../../../../testing/end-to-end-pipeline-monitoring#end-to-end-e2e-test-pipelines) を参照してください。

### E2E スペックの実行と修正

#### 前提条件

テストを実行する前に、以下を確認します:

* `gdk` が起動して実行中である
* Runner が起動して実行中である
* `gitlab-development-kit` ディレクトリ内の `gdk.yml` で `GITLAB_SIMULATE_SAAS` を 0 に設定する:

  ```shell
  env:
    GITLAB_SIMULATE_SAAS: "0"
  ```

* EE ライセンスが .env ファイルで環境変数として設定されていることを確認する。

#### QA テストの実行

以下のコマンドを使って、GDK インスタンスに対してローカルでテストを実行します:

#### `gdk` に対して実行する

* フィーチャーフラグを有効にして:

  ```shell
  WEBDRIVER_HEADLESS=false bundle exec bin/qa Test::Instance::All http://gdk.test:3000/ <filename/path> --enable-feature <feature_flag_name>
  ```

特定の RSpec の行を実行するには、周囲のサンプルブロックをターゲットにするために <filename>:<line_number> を使用することもできます。詳細は [RSpec ベストプラクティス](https://docs.gitlab.com/development/testing_guide/best_practices/#rspec) を参照してください。

* フィーチャーフラグを無効にして:

  ```shell
  WEBDRIVER_HEADLESS=false bundle exec bin/qa Test::Instance::All http://gdk.test:3000/ <filename/path> --disable-feature <feature_flag_name>
  ```

* フィーチャーフラグなしで:

  ```shell
  WEBDRIVER_HEADLESS=false GITLAB_ADMIN_PASSWORD="root_password" GITLAB_QA_ADMIN_ACCESS_TOKEN="api_token_from_gdk" GITLAB_PASSWORD="root_password" QA_LOG_LEVEL=DEBUG QA_GITLAB_URL=http://gdk.test:3000 bundle exec rspec <filename/path>
  ```

#### ステージングに対して実行する

```shell
GITLAB_QA_USER_AGENT=<USER_AGENT> GITLAB_ADMIN_USERNAME=<ADMIN_USERNAME>  GITLAB_ADMIN_PASSWORD=<ADMIN_PASSWORD>
GITLAB_USERNAME=<USERNAME> GITLAB_QA_ACCESS_TOKEN=<ACCESS_TOKEN> GITLAB_PASSWORD=<GITLAB_PASSWORD> QA_LOG_LEVEL=debug WEBDRIVER_HEADLESS=true bundle exec bin/qa Test::Instance::All https://staging.gitlab.com <filename/path>
```

認証情報は 1Password にあります。

#### ライセンス済み機能のローカルテスト

機能が現在のライセンスティアをチェックする必要がある場合、GitLab.com でも動作することを確認することが重要です。

これをローカルでエミュレートするには、次のステップに従います:

1. 環境変数をエクスポートする[^1]:

   ```shell
   export GITLAB_SIMULATE_SAAS=1
   ```

1. 同じシェルセッション内で実行する:

   ```shell
   gdk restart
   ```

1. **Admin > Settings > General > "Account and limit"** に移動し、"Allow use of licensed EE features" を有効にする。

詳細については、[関連するハンドブックエントリ](https://docs.gitlab.com/ee/development/ee_features.html#act-as-saas) を参照してください。

### 一般的なエラーと修正のトラブルシューティング

* 一般的なトラブルシューティングのヒントについては、[E2E test troubleshooting](https://docs.gitlab.com/development/testing_guide/end_to_end/troubleshooting/) を参照してください。

* **エラー: QA::Resource::Sandbox Fabrication Failed**
  * エラーメッセージ:

    ```plaintext
    Fabrication of QA::Resource::Sandbox using the API failed (400) with `{ "message": "Failed to save group {:visibility_level=[\"public has been restricted by your GitLab administrator\"]}" }`
    ```

  * 解決策:
    * GDK Admin Area → General に移動
    * Restricted Visibility Levels で、チェックボックスがどれも選択されていないことを確認

* **エラー: API Client Validation Failed**
  * エラーメッセージ:

    ```plaintext
    An error occurred in a `before(:suite)` hook.
    Failure/Error: raise InvalidTokenError, "API client validation failed! Code: #{resp.code}, Err: '#{resp.body}'"
    ```

  * 解決策:
    * パイプラインを実行する前にユーザー認証が完了していることを確認する。
    * API トークンが有効かどうかをチェックする。

* **エラー: Namespace is Not Valid**
  * エラーメッセージ:

    ```plaintext
    QA::Resource::Errors::ResourceFabricationFailedError:
    Fabrication of QA::Resource::Project using the API failed (400) with `{ "message": { "namespace": ["is not valid"] } }`.
    ```

  * 解決策:
    * 次を実行して GDK をリセットする:

      ```shell
      gdk data-reset
      ```

* **エラー: Webpack Module Parse Failed**
  * エラーメッセージ:
  
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

  * 解決策:
    * Webpack から Vite に切り替える
    * `gdk update` を実行する

### MR パイプラインでの E2E スペックの実行

以下に変更がある場合は、マージリクエストで `e2e: test-on-omnibus` ダウンストリーム [E2E ジョブ](https://docs.gitlab.com/ee/development/testing_guide/end_to_end/#testing-code-in-merge-requests) を少なくとも 1 回実行し、結果をレビューすることを推奨します:

* GraphQL (API レスポンス、クエリパラメータ、スキーマなど)
* Gemfile (バージョン変更、Gem の追加/削除)
* データベーススキーマ/クエリの変更
* 脆弱性レポートページ、MR セキュリティウィジェット、パイプラインセキュリティタブ、セキュリティポリシー、設定、またはライセンスコンプライアンスページに直接影響するフロントエンドの変更。

### GDK に対してローカルで Govern E2E スペックを実行する

スタンドアロンの [E2E スペックは、ローカル GDK インスタンスに対して実行できます](https://gitlab.com/gitlab-org/gitlab/-/tree/master/qa?ref_type=heads#generic-command-for-a-typical-gdk-installation)。

### フィーチャーフラグを使った E2E テスト

E2E テストは、ステージングや GitLab.com で有効になる前に、フィーチャーフラグを有効にした状態でパスする必要があります。
したがって、新しいフィーチャーフラグを導入する際にこれを確認することが重要です。フィーチャーフラグの定義ファイルを追加または編集すると [2 つの `e2e:test-on-omnibus` ジョブが開始されます](https://docs.gitlab.com/ee/development/testing_guide/end_to_end/feature_flags.html#automatic-test-execution-when-a-feature-flag-definition-changes) (1 つはフィーチャーフラグをオン、もう 1 つはオフ)。

フィーチャーフラグを扱う際のエンドツーエンドテストプロセスの詳細な説明については、[Testing feature flags with end-to-end tests](https://docs.gitlab.com/development/testing_guide/end_to_end/feature_flag_testing/#e2e-flow-when-changing-a-feature-flag-with-a-merge-request) ページの公式ドキュメントを参照してください。

## QA テストに関するメモとリソース

質問がある場合は、[#s_developer_experience](https://gitlab.enterprise.slack.com/archives/C07TWBRER7H) にお問い合わせください。

### リソース

* [Testing at GitLab ハンドブックページ](../../../../testing)
* [Testing Code in Merge Requests](https://docs.gitlab.com/development/testing_guide/end_to_end/#testing-code-in-merge-requests)
* [Running Govern E2E Specs Locally Against GDK](https://gitlab.com/gitlab-org/gitlab/-/tree/master/qa?ref_type=heads#generic-command-for-a-typical-gdk-installation)
* [Automatic test execution when a feature flag definition changes](https://docs.gitlab.com/development/testing_guide/end_to_end/best_practices/feature_flags/#automatic-test-execution-when-a-feature-flag-definition-changes)
* [End-to-end test pipelines](https://docs.gitlab.com/development/testing_guide/end_to_end/test_pipelines/)
* [GitLab team member's guide to using official build infrastructure](https://docs.gitlab.com/omnibus/build/team_member_docs/)
* [E2E テスト概要動画](../../../../testing/#-gitlab-end-to-end-testing-overview-video)

## モニタリング

* [Grafana 上の Stage Group ダッシュボード](https://dashboards.gitlab.net/d/stage-groups-threat_insights/stage-groups-threat-insights-group-dashboard)
* [Largest Contentful Paint (LCP)](https://dashboards.gitlab.net/d/sftijGFMz/sitespeed-lcp-leaderboard?from=now-90d&orgId=1&to=now&refresh=30s&var-namespace=sitespeed_io&var-path=desktop&var-domains=gitlab_com&var-pages=Secure_Instance_Dashboard_Settings&var-pages=Secure_Instance_Security_Dashboard&var-pages=Secure_Instance_Vulnerability_Report&var-pages=Secure_Group_Security_Dashboard&var-pages=Secure_Group_Vulnerability_Report&var-pages=Secure_Project_Security_Dashboard&var-pages=Secure_Project_Vulnerability_Report&var-pages=Secure_Standalone_Vulnerability&var-browser=chrome&var-connectivity=cable&var-function=median) (私たちの Web ページ用)。

## コントリビューション

### ライセンス済み機能のローカルテスト

機能が現在のライセンスティアをチェックする必要がある場合、GitLab.com でも動作することを確認することが重要です。

これをローカルでエミュレートするには、次のステップに従います:

1. `gdk.yml` で環境変数を設定する:

    ```yaml
    env:
      GITLAB_SIMULATE_SAAS: "1"
    ```

   * 環境変数を設定する手順については、GitLab Development Kit (GDK) 設定ページの [環境変数](https://gitlab-org.gitlab.io/gitlab-development-kit/configuration/#environment-variables) セクションを参照してください。
1. 同じシェルセッション内で `gdk restart` を実行する
1. Admin > Settings > General > "Account and limit" で、"Allow use of licensed EE features" を有効にする

詳細については、[関連するハンドブックエントリ](https://docs.gitlab.com/ee/development/ee_features.html#act-as-saas) を参照してください。

### クロススタックコラボレーション

フロントエンドエンジニアにバックエンドへの貢献を、その逆を奨励しています。そのような場合、グループ内のドメインエキスパートと密接に協力し、
初期レビューを内部に保つべきです。

これは、変更がベストプラクティスに従い、十分にテストされ、意図しない副作用がなく、Security Insights コードベースに入る変更全体をチームが把握するのに役立ちます。

### コミュニティコントリビューション

Security Insights グループはコミュニティコントリビューションを歓迎します。コミュニティコントリビューションは、Security Insights のエンジニアの 1 人から迅速なフィードバックを受けるべきです。チームのすべてのエンジニアがコミュニティコントリビューションと協力する責任があります。チームメンバーがコミュニティコントリビューションをレビューする時間がない場合は、エンジニアリングマネージャーにタグを付けて、コミュニティコントリビューションを別のチームメンバーにアサインできるようにしてください。

チームメンバーが Issue を作成するか、コミュニティコントリビューションを受け入れる Issue を見つけた場合、~"Seeking community contributions" でラベル付けすべきです。貢献者が EE ライセンスを必要とする場合、コミュニティコントリビューターワークフローページの [Contributing to the GitLab Enterprise Edition (EE)](/handbook/marketing/developer-relations/engineering/community-contributors-workflows/#contributing-to-the-gitlab-enterprise-edition-ee) セクションを案内できます。

### グループディスカッション

私たちは隔週でグループディスカッションを開催しています。マイルストーンキックオフと一般的なディスカッションフォーマットを交互に行います。誰もが参加することが歓迎され、Vulnerability Management、顧客のクエリ、ロードマップ、および Security Insights チームが考えているかもしれないことについて質問するための素晴らしいフォーラムです。ミーティングは [Security Insights カレンダー](#common-links) で見つけることができます。[アジェンダ](https://docs.google.com/document/d/1nnjYPNKtYzbpdEz16u0U2raDdLcIFY-0ibjxGLltyG0/edit?tab=t.0#heading=h.j80itk3qkjs3) (内部リンク) をご覧ください。お会いできることを楽しみにしています!
