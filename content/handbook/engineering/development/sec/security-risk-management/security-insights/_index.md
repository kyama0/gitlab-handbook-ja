---
title: Security Risk Management、Security Insights
description: "GitLab の Security Insights グループは、お客様がセキュリティリスクを効果的かつ効率的に管理できるよう支援するソリューションの開発を担っています。"
upstream_path: /handbook/engineering/development/sec/security-risk-management/security-insights/
upstream_sha: 877082e5cd4baeabe3d6e802b3b4b1efdb6573f1
translated_at: "2026-05-23T00:00:00Z"
translator: claude
stale: false
lastmod: "2026-05-20T10:24:28-05:00"
---

## GitLab で私たちが推進しているお客様の成果

開発者にとって、デフォルトブランチに加えて保護ブランチにマージする際に脆弱性を持ち込んでいないかどうかを知ることは不可欠です。FY25 には、ユーザーが複数のブランチにわたって脆弱性を追跡できるようにします。開発者が修正したいものがあるが、どこから始めればよいかわからない場合、私たちの機能の AI を使用して詳細を学び、修正の提案を得ることができます。

セキュリティエンジニアとして、最初にどの脆弱性に取り組むべきかを知りたいでしょう。今後 1 年間で、悪用される可能性のある脆弱性を迅速にトリアージして緩和できるよう、主要なリスク指標を追加していきます。

リーダーシップは、組織がリスクを緩和し、セキュリティプログラムが効果的であることを確認したいと考えています。Security Dashboards の強化により、リーダーは概要を把握し、メトリクス、トレンド、迅速に対処する必要のある脆弱性に関する主要な質問に答える場所を得られます。

## FY25 の最優先事項

**ユーザーがリスクを特定しトレンドを可視化できるようにする** - プロジェクトおよびグループレベルで Security Dashboards を強化します。

**脆弱性の悪用による潜在的な影響と可能性を推定する** - CVSS (Common Vulnerability Scoring System) や悪用可能性確率などの業界で知られているリスクスコアを通じて、脆弱性レポートで直接リスクにアクセスする機能をユーザーに提供します。

**ユーザーが複数のブランチにわたって脆弱性を追跡できるようにする** - ユーザーがデフォルトブランチ以外でも脆弱性を追跡できるようにします。

**ユーザーが脆弱性の修復を始めるためのガイダンスを提供する** - AI とセキュリティトレーニングの力を活用して、開発者が脆弱性を理解し修復するのを支援します。

**Security Insights の機能は信頼性が高くスケールでパフォーマンスを発揮する** - より多くのグループおよび組織レベルの機能を追加するにあたり、クエリパフォーマンスを最適化し、成長に伴ってデータベースがスケールしパフォーマンスを発揮するという確信を持って前進します。

## Security Insights のチーム構造

Security Insights グループは、それぞれが[バーティカルスライス](https://www.visual-paradigm.com/scrum/user-story-splitting-vertical-slice-vs-horizontal-slice/)で作業に取り組む 3 つのフォーカスされたスイムレーン (Performance and Optimization、Projects、AI) に構造化されています。この細分化は、各領域に限定されたフォーカスを提供することを目的としており、複数の方面で進捗を上げ、計画のオーバーヘッドを削減できるようにします。

### チーム構造

{{% team-by-manager-slug manager="ajbiton" team="Engineer(.*)Security Risk Management:Security Insights" %}}

## 共通リンク

* Slack チャンネル:
  * メインチャンネル: [`#g_srm_security_insights`](hhttps://gitlab.enterprise.slack.com/archives/C07UD442PQ9)
  * Engineering - すべての SRM グループ: [`#s_srm_eng`](https://gitlab.enterprise.slack.com/archives/C05N5BLDYUT)

### 優先順位付け

私たちは [17.x](https://about.gitlab.com/direction/security_risk_management/security-insights/17_security_insights_priorities.html) の Security Insights Priorities ページを使用して、何をしているか、どの順序で行うかを追跡しています。

### プロダクトワークフロー

Security Insights グループは、おおむね GitLab の[プロダクト開発フロー](/handbook/product-development/how-we-work/product-development-flow/)に従います。

追加情報は[計画ページ](/handbook/engineering/development/sec/security-risk-management/srm-planning/)にあります。

### マイルストーン計画

* 毎月第 2 火曜日に、プロダクトマネージャーが計画 issue を開始します。彼らはマイルストーンの優先事項を特定し、エンジニアリングマネージャーとステーブルカウンターパート (UX、QA) にレビューのためにタグ付けします。
* 毎月第 3 火曜日までに、エンジニアリングマネージャーが計画 issue をレビューし、マイルストーンのスコープに合意します。
  * マイルストーンに予定されているすべての issue には、マイルストーン開始時に `~Deliverable` ラベルと `Health Status: On Track` が付いている必要があります。マイルストーンフィールドも正しく設定する必要があります。
* 計画 issue は、17.0-17.11 についてはこの[エピック](https://gitlab.com/groups/gitlab-org/-/epics/12683)で作成されます。

### Issue の衛生管理

#### 信頼できる唯一の情報源としての説明

タスクに関するすべての意思決定やステータス更新について、作業項目の**説明**を信頼できる唯一の情報源として維持することを目指すべきです。

説明に十分な詳細があるかどうかを評価するには、次のプロンプトを考えてみてください。

> 私は 2 ヶ月にわたるプロジェクトの新人エンジニアで、締め切りは 1 週間後で、できるだけ早く作業を開始する必要があります。何を知る必要がありますか?

そのために:

* ディスカッション/コメントスレッドで行われた意思決定は、元の issue の説明に反映することが**必須**です。
  * 明確にすると、概要が元の説明に反映されている限り、issue で詳細を議論しても構いません。
* **<abbr title="Directly Responsible Individual">DRI</abbr> が責任を負います**。issue の説明を最新の状態に保つ責任があります (ただし委任することもできます)。
* **推奨事項:** 適切な issue の衛生管理を確保するために、週に 5〜10 分 (おそらくグループ同期の一環として) を見つけてください。

#### 工数の見積もり

工数を見積もり測定するための、一貫した、信頼できる、シンプルな (明確に理解できる) 方法を確保し、それがチームの**全員**に採用されるようにする必要があります。

* `Time tracking` フィールドを利用し、作業時間の見積もりを使用します (例: `3d`、`2w`、`1mo` など)。
* 見積もりには、稼働日のみ、レビューバッファー、個人的な調整 (つまり、あるタスクがある人にとって他の人より少し長くかかる場合 - それはまったく問題ありません) を含める必要があります。見積もりは**おおまかな**ものになることが予想されます。
* 見積もりは**意欲的**なものであり、それに固執するよう努めるべきですが、チームメンバーは外した見積もりについて責任を問われることは**ありません**。代わりに、納品までの時間を過小評価した場合は、なぜそうなったのか、そして次の issue をどうすればよりうまく見積もれるかを学びたいと考えています。
* **覚えておいてください: 高い見積もりを出して下方に交渉するほうが、その逆よりも常に良いです。**

#### マイルストーン追跡

マイルストーン追跡は、何かが*いつ*リリースされるかを追跡するためだけのものであり、`Time Tracking` やキャパシティと混同したり取り違えたりしてはいけません。つまり、issue の納品マイルストーンが `n+2` の場合、それが約 2 ヶ月の作業に相当すると想定すべきではありません!

#### 相互の責任

すべてのチームメンバーには、issue の衛生管理の改善を提案する**責任**があります。issue/エピックを読んでいて少し混乱したり、いくらかのコンテキストが欠けていると感じたりした場合は、プロセスを改善できるようにフラグを立ててください 🙂

#### タスクの流れ

すべての作業項目は、トレーサビリティ、オーナーシップの明確さ、効果的な計画を確保するために、明確な 3 階層の階層構造に従う必要があります。

| レベル | タイプ | ライフスパン | フォーカス |
| ----- | ---- | -------- | ----- |
| 1 | [エピック](https://gitlab.com/gitlab-org/gitlab/-/blob/master/.gitlab/issue_templates/Security%20Insights%20-%20Epic.md) | 1〜3 ヶ月 | **なぜ**これを行うのか、そして**何を**構築するのか? |
| 2 | [サブエピック](https://gitlab.com/gitlab-org/gitlab/-/blob/master/.gitlab/issue_templates/Security%20Insights%20-%20Sub%20Epic.md) | 2〜4 週間 | **どのように**取り組むのか、そして**いつ**納品されるのか? |
| 3 | [Issue](https://gitlab.com/gitlab-org/gitlab/-/blob/master/.gitlab/issue_templates/Security%20Insights%20-%20Issue.md) | 1〜5 日 | **誰が**責任を負うのか、そして**どこで**変更が起きるのか?\* |

\* *注:* 理想的には、この粒度のレベルにはタスクを使用したいと考えています。しかし、タスクは現在マイルストーンのカンバンボードに表示されず、issue のようにステータスを追跡できません。今のところ、issue を使用することで、計画とレポーティングにわたってより良い可視性と一貫性が得られます。

#### リレーションシップ管理

ワークフローを予測可能で透明性のあるものに保つために、issue 間の関係は常に明確で、時間の経過とともに維持されるべきです。

* 親子関係を使用して、エピック、サブエピック、issue 全体の可視性を保ちます。
* 依存関係を早期にフラグ立てするために、「blocks」や「is blocked by」などの issue リンクを追加します。
* 作業が関連しているが直接依存していない場合は、「relates to」issue リンクを使用します。
* エピックの説明を最新の状態に保ち、そのイニシアチブにリンクされているすべてのものについて、唯一の信頼できる概要として機能するようにします。

#### 週次の非同期 issue 更新

毎週末に、各エンジニアは次のテンプレートを使用して、割り当てられた issue にコメントすることで、簡単な非同期 issue 更新を提供することが期待されています。

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

これを行うのは、チームがコラボレーションにおいてより非同期的になることを促し、コミュニティや他のチームメンバーが私たちが積極的に取り組んでいる issue の進捗を知ることができるようにするためです。これにより、スイムレーンをまたいで更新を自動的に集約し、手動プロセスの一部を取り除くこともできます。

#### ステータスの表示とリスクの提起

私たちのチームは、issue 内の [Health Status](https://docs.gitlab.com/ee/user/project/issues/managing_issues.html#health-status) 機能を使用して、マイルストーン内での完了の可能性を示します。マイルストーンの開始時に、そのマイルストーン中の納品に高い確信がある少数の issue に `On Track` を割り当てます。最初に On Track としてマークすることに懸念がある場合は、その理由について議論すべきです。

リスクを早期に提起することは重要です。時間が多くあればあるほど、より多くの選択肢があります。たとえば、月の第 1 月曜日までにレビューに入っていない issue は、マージされるのに十分な時間がない可能性があります。これらは、複雑さやその他の要因に応じて、Needs Attention または At Risk と見なされるべきです。

リスクを提起または引き下げる際は、次の手順に従ってください。

1. issue の Health Status を更新します。
    1. `On Track` - 高い確信 - 月の第 2 火曜日までに作業がマージされないという兆候はない。
    1. `Needs Attention` - 中程度の確信 - issue がブロックされているか、議論が必要な他の要因がある。
    1. `At Risk` - 低い確信 - issue が月の第 2 火曜日のマージ締め切りを逃す危険がある。
1. リスクが増加または減少した理由についてコメントを追加します。認識のためにエンジニアリングマネージャーとプロジェクトマネージャーを CC してください。

issue は、おそらく On Track から直接 At Risk になるべきではないことに注意してください。そのパターンは、もっと早く議論する機会を逃したことを示しています。`On Track -> Needs Attention -> At Risk` という進行を考慮してください。

### サポートローテーション

開発ロードマップに加えて、エンジニアリングチームはサポートとトリアージに関連するタスクを実行する必要があります。私たちのチームは、これらのタスクのためにキャパシティを確保する個人を 1 人指名します。ローテーションは[こちら (内部リンク)](https://gitlab.com/groups/gitlab-org/govern/threat-insights/-/epics/2)にあります。これは過度なコンテキストスイッチングを避け、ワークロードをより適切に分散させるためです。私たちのコミットメントの納品をサポートするために、チーム内のフォーカスを守ることが重要です。

ある週に指名された人物で**ない**場合は:

1. デフォルトでトリアージや調査を行うことは期待されていません。ここでは最善の判断を使用してください (例: クリティカルな issue は依然として優先されます。ここでは期待に変化はありません)。
1. 質問を指名された人物にリダイレクトすべきです (例: Slack の DM で来た場合は、私たちのパブリックチャンネルにリダイレクトします)。

ローテーション中に行っているアクションを記録し、対応する issue にメモを追加してください (例: ローカルで実行したツールコマンドのコピー、プロジェクトやプロセスへの関連する変更の共有など)。

#### トリアージの期待

トリアージは、マイルストーンで現在計画されている作業の変更をただちに保証するものではありません。トリアージは、スコープとマイルストーンのコミットメントの変更を正当化できるよう、影響と優先度を決定するプロセスです。

* ヘルプリクエストのチケットを精緻化します。再現手順はあるか、これは他のスコープ化または計画された作業に関連するか、これはバグか機能リクエストか、それともシステムの許容できる制限か。
  * 成果としては、ドキュメントやハンドブックページの更新、バグの再現の検証、そしてそこから issue を作成することが考えられます。
* サポートの質問に直接答える。
* 必要な作業の優先度とスケジュールについて合意するためにプロダクトと連携する。プロダクトと協力して、重大度と、残りの開発チームを中断させるかどうかを定義する。

Slack のやり取りを扱う際は、次のリアクションを使用することが期待されています。

* :eyes: - 私は積極的にこれを見ています
* :white_check_mark: (またはその変形) - これは解決しました

#### 責任 - サポート

1. 質問、サポートリクエスト、アラートについて Slack チャンネルをモニタリングします。リアクションローテーションに割り当てられた人物が主にそれらを処理することが期待されています。サポートエンジニアが Slack 経由で支援を要請し、調査やデバッグが必要な場合は、[専用プロジェクト](https://gitlab.com/gitlab-com/sec-sub-department/section-sec-request-for-help)で issue を提起するよう案内すべきです。

* [#g_srm_security_insights](https://gitlab.enterprise.slack.com/archives/C07UD442PQ9)
* [s_srm](https://gitlab.enterprise.slack.com/archives/C07QUBQ98S1)
* [#sec-section](https://gitlab.slack.com/archives/C02087FTL5V)

私たちは、グループからの正式な支援を要請するために、標準化された [Request for Help](https://gitlab.com/gitlab-com/request-for-help) プロセスを利用しています。これは可視性、追跡、レビューに役立ちます。Security Insights への新しい Request for Help は、[このテンプレート](https://gitlab.com/gitlab-com/request-for-help/-/issues/new?issuable_template=SupportRequestTemplate-Security-Insights)を使用して送信してください。

### MR レビュー

変更が Security Insights のドメイン内にある場合、レビューのために MR を提出する際は、次のガイドラインに従います。

1. 少なくとも 1 つのレビューを私たちのグループ外の人物に依頼することを目指します。これはコードナレッジのサイロ化を避けるのに役立ちます。
1. 時間的にクリティカルなレビューについては、内部のレビュアーとメンテナーの利用を検討します。
1. 最初のレビューはチームメンバーが行うべきです。これは次の点でチームに役立ちます。
   * レビュアーがすでにドメインに精通しているため、より速いレビュー。
   * ドメイン内で起こっている変更への追加の認識。
   * ドメインで起こっていることと整合しない変更の特定。
   * 変更が期待どおりに動作することについて、ドメインエキスパートから外部のメンテナーレビュアーへの追加の確信の提供。
1. GraphQL のマージリクエストは、できるだけ早くフロントエンドエンジニアによってレビューされるべきです。これはインターフェースの検証に役立ち、テストが書かれる前に変更を加えることができます。

### Issue ボード

* [Security Insights Milestone Board](https://gitlab.com/groups/gitlab-org/-/boards/1754666?milestone_title=Started&label_name[]=group%3A%3Asecurity%20insights)
  * 現在計画されている issue のステージを示すメインボード。

* [Security Insights "Who's working on what" board](https://gitlab.com/groups/gitlab-org/-/boards/7145903?milestone_title=Started)
  * 私たちのチームのエンジニアに割り当てられた issue を示します。

これらのボードは issue の現在のステータスを示します。

## Quality

## Quality と E2E Spec

### Staging と Production での E2E 実行のワークフロー

私たちは、staging と production の両方の環境で 4 時間ごとにスケジュールされた E2E テストを実行します。これらのテストは、最近のデプロイメントがリグレッションを持ち込んでいないことを確認するのに役立ちます。

次の Slack チャンネルでテスト結果をモニタリングできます。

* #e2e-run-staging
* #e2e-run-production

ライブ環境に対して実行されるスケジュールされた E2E テストパイプラインの詳細については、[E2E テストパイプライン](../../../../testing/end-to-end-pipeline-monitoring#end-to-end-e2e-test-pipelines)を参照してください。

### E2E Spec の実行と修正

#### 前提条件

テストを実行する前に、次のことを確認してください。

* `gdk` が起動して動作している
* Runner が起動して動作している
* `gitlab-development-kit` ディレクトリの `gdk.yml` 内で `GITLAB_SIMULATE_SAAS` を 0 に設定する:

  ```shell
  env:
    GITLAB_SIMULATE_SAAS: "0"
  ```

* EE ライセンスが .env ファイルで環境変数として設定されていることを確認する。

#### QA テストの実行

GDK インスタンスに対してローカルでテストを実行するには、次のコマンドを使用します。

#### `gdk` に対して実行する

* 機能フラグを有効にした状態:

  ```shell
  WEBDRIVER_HEADLESS=false bundle exec bin/qa Test::Instance::All http://gdk.test:3000/ <filename/path> --enable-feature <feature_flag_name>
  ```

<filename>:<line_number> を使用して、周囲の example ブロックをターゲットにする特定の RSpec 行を実行することもできます。詳細については [RSpec のベストプラクティス](https://docs.gitlab.com/development/testing_guide/best_practices/#rspec)を参照してください。

* 機能フラグを無効にした状態:

  ```shell
  WEBDRIVER_HEADLESS=false bundle exec bin/qa Test::Instance::All http://gdk.test:3000/ <filename/path> --disable-feature <feature_flag_name>
  ```

* 機能フラグなし:

  ```shell
  WEBDRIVER_HEADLESS=false GITLAB_ADMIN_PASSWORD="root_password" GITLAB_QA_ADMIN_ACCESS_TOKEN="api_token_from_gdk" GITLAB_PASSWORD="root_password" QA_LOG_LEVEL=DEBUG QA_GITLAB_URL=http://gdk.test:3000 bundle exec rspec <filename/path>
  ```

#### staging に対して実行する

```shell
GITLAB_QA_USER_AGENT=<USER_AGENT> GITLAB_ADMIN_USERNAME=<ADMIN_USERNAME>  GITLAB_ADMIN_PASSWORD=<ADMIN_PASSWORD>
GITLAB_USERNAME=<USERNAME> GITLAB_QA_ACCESS_TOKEN=<ACCESS_TOKEN> GITLAB_PASSWORD=<GITLAB_PASSWORD> QA_LOG_LEVEL=debug WEBDRIVER_HEADLESS=true bundle exec bin/qa Test::Instance::All https://staging.gitlab.com <filename/path>
```

認証情報は 1Password にあります。

#### ライセンス機能のローカルテスト

機能が現在のライセンスティアをチェックする必要がある場合、これが GitLab.com でも動作することを確認することが重要です。

これをローカルでエミュレートするには、次の手順に従ってください。

1. 環境変数をエクスポートします[^1]:

   ```shell
   export GITLAB_SIMULATE_SAAS=1
   ```

1. 同じシェルセッション内で、次を実行します:

   ```shell
   gdk restart
   ```

1. **Admin > Settings > General > "Account and limit"** に移動し、「Allow use of licensed EE features」を有効にします。

詳細については、[関連するハンドブックエントリ](https://docs.gitlab.com/ee/development/ee_features.html#act-as-saas)を参照してください。

### 一般的なエラーと修正のトラブルシューティング

* 一般的なトラブルシューティングのヒントについては、[E2E テストのトラブルシューティング](https://docs.gitlab.com/development/testing_guide/end_to_end/troubleshooting/)を参照してください。

* **エラー: QA::Resource::Sandbox Fabrication Failed**
  * エラーメッセージ:

    ```plaintext
    Fabrication of QA::Resource::Sandbox using the API failed (400) with `{ "message": "Failed to save group {:visibility_level=[\"public has been restricted by your GitLab administrator\"]}" }`
    ```

  * 解決策:
    * GDK Admin Area → General に移動します
    * Restricted Visibility Levels の下で、どのチェックボックスも選択されていないことを確認します。

* **エラー: API Client Validation Failed**
  * エラーメッセージ:

    ```plaintext
    An error occurred in a `before(:suite)` hook.
    Failure/Error: raise InvalidTokenError, "API client validation failed! Code: #{resp.code}, Err: '#{resp.body}'"
    ```

  * 解決策:
    * パイプラインを実行する前にユーザー検証が完了していることを確認します。
    * API トークンが有効かどうかを確認します。

* **エラー: Namespace is Not Valid**
  * エラーメッセージ:

    ```plaintext
    QA::Resource::Errors::ResourceFabricationFailedError:
    Fabrication of QA::Resource::Project using the API failed (400) with `{ "message": { "namespace": ["is not valid"] } }`.
    ```

  * 解決策:
    * 次を実行して GDK をリセットします:

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
    * Webpack から Vite に切り替えます
    * `gdk update` を実行します

### MR パイプラインでの E2E Spec の実行

次の変更がある場合は、マージリクエストで `e2e: test-on-omnibus` ダウンストリーム [E2E ジョブ](https://docs.gitlab.com/ee/development/testing_guide/end_to_end/#testing-code-in-merge-requests)を少なくとも 1 回実行し、結果をレビューすることをお勧めします。

* GraphQL (API レスポンス、クエリパラメータ、スキーマなど)
* Gemfile (バージョン変更、gem の追加/削除)
* データベーススキーマ/クエリの変更
* 脆弱性レポートページ、MR セキュリティウィジェット、パイプラインセキュリティタブ、セキュリティポリシー、構成、またはライセンスコンプライアンスページに直接影響する任意のフロントエンドの変更。

### GDK に対してローカルで Govern の E2E Spec を実行する

スタンドアロンの [E2E Spec をローカルの GDK インスタンスに対して実行](https://gitlab.com/gitlab-org/gitlab/-/tree/master/qa?ref_type=heads#generic-command-for-a-typical-gdk-installation)できます。

### 機能フラグを使用した E2E テスト

E2E テストは、機能フラグが Staging または GitLab.com で有効にされる前に、機能フラグを有効にした状態でパスすべきです。したがって、新しい機能フラグを導入する際にこれを確認することが重要です。機能フラグの定義ファイルを追加または編集すると、[2 つの `e2e:test-on-omnibus` ジョブが開始されます](https://docs.gitlab.com/ee/development/testing_guide/end_to_end/feature_flags.html#automatic-test-execution-when-a-feature-flag-definition-changes) (1 つは機能フラグがオンの状態、もう 1 つはオフの状態)。

機能フラグを使用する際のエンドツーエンドテストプロセスの詳細な説明については、[エンドツーエンドテストでの機能フラグのテスト](https://docs.gitlab.com/development/testing_guide/end_to_end/feature_flag_testing/#e2e-flow-when-changing-a-feature-flag-with-a-merge-request)ページの公式ドキュメントを参照してください。

## QA テストに関するメモとリソース

質問がある場合は、[#s_developer_experience](https://gitlab.enterprise.slack.com/archives/C07TWBRER7H) に連絡してください。

### リソース

* [GitLab でのテストのハンドブックページ](../../../../testing)
* [マージリクエストでのコードのテスト](https://docs.gitlab.com/development/testing_guide/end_to_end/#testing-code-in-merge-requests)
* [GDK に対してローカルで Govern の E2E Spec を実行する](https://gitlab.com/gitlab-org/gitlab/-/tree/master/qa?ref_type=heads#generic-command-for-a-typical-gdk-installation)
* [機能フラグの定義が変更されたときの自動テスト実行](https://docs.gitlab.com/development/testing_guide/end_to_end/best_practices/feature_flags/#automatic-test-execution-when-a-feature-flag-definition-changes)
* [エンドツーエンドテストパイプライン](https://docs.gitlab.com/development/testing_guide/end_to_end/test_pipelines/)
* [GitLab チームメンバー向けの公式ビルドインフラ使用ガイド](https://docs.gitlab.com/omnibus/build/team_member_docs/)
* [E2E テストの概要動画](../../../../testing/#-gitlab-end-to-end-testing-overview-video)

## モニタリング

* [エラーバジェットレポート](https://dashboards.gitlab.net/d/stage-groups-detail-security_insights/)
* [Elastic ダッシュボード](https://log.gprd.gitlab.net/goto/b7baf870-8203-11ed-85ed-e7557b0a598c)

私たちには、脆弱性の取り込みまたは SBoM の取り込みプロセスでそれぞれ予期しないエラーが発生したときに Slack チャンネルに投稿する 2 つの Slack アラートがあります。これらのエラーは通常、取り込みを失敗させているバグを示しています。Elastic ダッシュボードの「job status ratio」チャートを確認して、バグの重大度を判断してください。これらのアラートは、[watcher 定義](https://gitlab.com/gitlab-com/gl-infra/observability/elastic-cloud/-/tree/main/environments/gitlab-logs-prod/watchers?ref_type=heads)を編集することで調整できます。

## コントリビューション

### ライセンス機能のローカルテスト

機能が現在のライセンスティアをチェックする必要がある場合、これが GitLab.com でも動作することを確認することが重要です。

これをローカルでエミュレートするには、次の手順に従ってください。

1. `gdk.yml` で環境変数を設定します:

    ```yaml
    env:
      GITLAB_SIMULATE_SAAS: "1"
    ```

   * 環境変数を設定する手順については、GitLab Development Kit (GDK) の構成ページの[環境変数](https://gitlab-org.gitlab.io/gitlab-development-kit/configuration/#environment-variables)セクションを参照してください。
1. 同じシェルセッション内で `gdk restart` を実行します
1. Admin > Settings > General > "Account and limit" で、「Allow use of licensed EE features」を有効にします

詳細については、[関連するハンドブックエントリ](https://docs.gitlab.com/ee/development/ee_features.html#act-as-saas)を参照してください。

### クロススタックコラボレーション

私たちは、フロントエンドエンジニアがバックエンドに貢献すること、そしてその逆を奨励しています。そのような場合は、私たちのグループ内のドメインエキスパートと緊密に連携し、最初のレビューも内部で行うべきです。

これにより、変更がベストプラクティスに従い、十分にテストされ、意図しない副作用がないことを確認し、チームが Security Insights のコードベースに入る変更を把握できるようになります。

### コミュニティコントリビューション

Security Insights グループはコミュニティコントリビューションを歓迎します。コミュニティコントリビューションは、Security Insights のエンジニアの 1 人から迅速なフィードバックを受けるべきです。チームのすべてのエンジニアがコミュニティコントリビューションに対応する責任を負います。チームメンバーがコミュニティコントリビューションをレビューする時間がない場合は、エンジニアリングマネージャーにタグ付けして、別のチームメンバーにコミュニティコントリビューションを割り当てられるようにしてください。

チームメンバーが issue を作成したり、コミュニティコントリビューションを受け入れる余地がある issue を見つけたりした場合は、~"Seeking community contributions" のラベルを付けるべきです。コントリビューターが EE ライセンスを必要とする場合は、Community contributors workflows ページの [Contributing to the GitLab Enterprise Edition (EE)](/handbook/marketing/developer-relations/engineering/community-contributors-workflows/#contributing-to-the-gitlab-enterprise-edition-ee) セクションを案内できます。

### グループディスカッション

私たちは隔週でグループディスカッションを開催しています。マイルストーンキックオフと一般的なディスカッション形式を交互に行います。誰でも参加でき、Vulnerability Management、お客様からの問い合わせ、私たちのロードマップ、そして Security Insights チームが考えているかもしれないことについて質問できる素晴らしいフォーラムです。ミーティングは [Security Insights カレンダー](#common-links)にあります。[アジェンダ](https://docs.google.com/document/d/1nnjYPNKtYzbpdEz16u0U2raDdLcIFY-0ibjxGLltyG0/edit?tab=t.0#heading=h.j80itk3qkjs3) (内部リンク) を見てください。そこでお会いできることを楽しみにしています!
