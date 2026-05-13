---
title: マージリクエストレビュー
description: "プロダクトデザイナーがマージリクエスト（MR）をレビューする際のガイドライン。UX レビューまたはプロダクトデザイン MR レビューとも呼ばれます。"
upstream_path: /handbook/product/ux/product-designer/mr-reviews/
upstream_sha: 1e195b58b9f249ff10bd0e705106c320fee86141
translated_at: "2026-05-13T00:00:00Z"
translator: claude
stale: false
---

## 要件

**プロダクトデザイナーは、ユーザーに見える変更を含む MR をレビューし、承認する必要があります。** [承認ガイドライン](https://docs.gitlab.com/development/code_review/#approval-guidelines)によれば、ユーザーに見える変更とは、（どんなに些細であっても）視覚的な変更と、スクリーンリーダーのアナウンスに影響する DOM レンダリングの変更の両方を含みます。

UX に影響するバックエンドの変更（パフォーマンス、リストの並び替えなど）が含まれる MR は、ユーザーに見えるものでない限りレビューを必要としません。

自分のステージグループ内のすべての MR を把握し、UX に潜在的に影響する可能性があるかどうかについてエンジニアとコミュニケーションを取ってください。一見 UX に関係なさそうな MR も含めて、どの MR をレビューすべきかは自分の判断で決めてください。

私たちは MR に対する分野の専門家を割り当てるために GitLab Roulette を使用しています。詳細は [MR レビューの割り当て方法](#how-to-assign-mr-reviews)を参照してください。

### メリット

プロダクトエリアや変更に精通していることで、デザイナーは以下が可能になります。

- ローカルテストのための仕様を効率的にセットアップする。
- 変更の根拠と背景を理解する。
- 実行可能なフィードバックを提供する。
- コードを本番にマージする前にエッジケースやバグを特定する。

アイデア出しから本番までのプロダクト開発ライフサイクル全体を通じてエンジニアリングの同僚と緊密にコラボレーションすることで、プロダクトのリレーションシップを強化し、ウォーターフォール型のプロセスを回避します。

## MR レビューの割り当て方法

### ステージグループの MR

[GitLab Roulette](https://gitlab-org.gitlab.io/gitlab-roulette/) がステージグループの MR にデザイナーを割り当てます。デザイン DRI がこれらの MR のレビュアーとして機能します。あるステージグループにデザイナーがいない場合、キャパシティ上の問題により MR レビューには対応できません。

### コミュニティコントリビューション

コミュニティから提出された MR は、影響を受けるグループのデザイン DRI に割り当てられます。グループにデザイナーがいない場合は、`@pedroms` がレビューします。GitLab Roulette は適切なデザイナーを自動的に提案し、`#ux-community-contributions` チャンネルに Slack メッセージを生成します。

### 単一エンジニアリンググループの MR

シングルエンジニアグループ（SEG）の MR は、影響を受けるグループのデザイン DRI がレビューすべきです。グループにデザイナーがいない場合、キャパシティ上の問題により MR レビューには対応できません。

## 作業量と応答時間

MR レビュー依頼は[プロダクトデザイナーの最優先事項](/handbook/product/ux/product-designer/capacity-management/#priorities)です。私たちの[レビュー応答のサービスレベル目標](/handbook/engineering/workflow/code-review/#review-response-slo)に従って応答してください。

MR レビューを他のタスクとバランスを取るのは難しい場合があります。中断を避けるために、MR をレビューするための時間を毎日確保してください（例: 1 日 30 分または 1 時間）。レビューに苦戦している場合は、MR の作成者と[期待値を調整](/handbook/engineering/workflow/code-review/#managing-expectation)）し、今後の休暇も考慮してキャパシティを見直してください。必要であれば、マネージャーと協力して MR を再割り当てしてください。

### MR レビュー作業量のモニタリング

MR で過負荷になっている場合は、すぐにマネージャーに知らせてください。チーム内の別のデザイナーや、#ux_coworking Slack チャンネルで支援を依頼してください。プロダクトデザインマネージャーは、これらの発生をエスカレートしてモニタリングし、より広範な傾向を示しているかどうかを判断する必要があります。

[GitLab Review Workload Dashboard](https://gitlab-org.gitlab.io/gitlab-roulette/?sortKey=stats.avg30&order=-1&hourFormat24=true&visible=reviewer%7CUX) と[プロダクトデザイン MR レビューボリューム](/handbook/product/ux/performance-indicators/#product-design-mr-review-volume)を使用して MR レビューの分配状況をモニタリングしてください。

## レビュー

[コードレビューガイドライン](https://docs.gitlab.com/development/code_review/)（全文を読むこと）に従ってください。これらのガイドラインの例外は以下に記載されています。

### MR を理解する

MR の説明に以下が含まれていることを確認してください。

- 変更内容に関する徹底的な説明。
- 変更内容のテスト方法。
- 関連 Issue へのリンク。
- *Before* と *After* のスクリーンショット／動画（適切な場合）。

`~"UX"` ラベル付きでデザイン DRI や提案されたデザインがない MR の場合、変更に関する可能な限り多くの背景情報を集めてください。影響を受けるプロダクトエリアが不明な場合は、他のデザイナーやデザインマネージャーを巻き込んでください。

### MR をプレビューする

常に [MR をライブ環境でプレビュー](/handbook/product/ux/product-designer/mr-reviews/preview-mr)してください。スクリーンショットや動画は役立ちますが、すべて（ホバー状態、小さな画面、アクセシビリティ）を示してはくれません。

プレビューに関するヘルプが必要な場合は、[ヘルプセクション](/handbook/product/ux/product-designer/mr-reviews/preview-mr/#help)を参照してください。

#### 特定のレビュー要件

一部の MR には追加のセットアップが必要です。

- **SaaS 専用機能**: GDK を SaaS バージョンで実行します。[GDK で SaaS をシミュレートする](https://docs.gitlab.com/development/ee_features/#simulate-a-saas-instance)。
- **有料機能**: GitLab_Team_Member_License_Request テンプレートを使用して、[アクセスリクエスト](https://gitlab.com/gitlab-com/team-member-epics/access-requests/-/issues/new)でライセンスをリクエストしてください。[ライセンスをインスタンスに追加する](https://docs.gitlab.com/administration/license_file/#add-your-license-file-during-installation)。
  - CE と EE エディションを切り替えることもできます: [CE インスタンスをシミュレートする方法](https://docs.gitlab.com/development/ee_features/#simulate-a-ce-instance-when-unlicensed)。
- **パイプライン関連機能と Runner 機能**: パイプラインを実行するために runner を作成または有効化します。[Gitpod で runner を作成](https://gitlab.com/gitlab-org/gitlab-development-kit/-/blob/main/doc/howto/gitpod.md#enable-runners)または [GDK で作成](https://gitlab.com/gitlab-org/gitlab-development-kit/-/blob/main/doc/howto/runner.md)してください。
- **コンプライアンス**: stream destination URL を使用して[監査イベントストリーミング](https://docs.gitlab.com/administration/audit_event_streaming/)をテストするには、[Pipedream](https://pipedream.com/) で一時的な宛先を生成してください。
- **Fulfillment**: Fulfillment のプロダクトデザイナーのみが CustomersDot の MR をレビューする必要があります。
  - [CustomersDot をローカルでセットアップする](https://gitlab.com/gitlab-org/customers-gitlab-com/-/tree/main#setup)。実用的でない場合は、MR の説明にあるスクリーンショットや動画をレビューするか、エンジニアとデモの調整を行ってください。複雑な変更の場合は、変更を機能フラグの背後に保持し、マージ後にステージングでレビューしてください。
- **Geo**: 2 つの **GDK** を Geo primary site と secondary site としてインストールおよび設定します。
  - [簡単なインストール](https://gitlab.com/gitlab-org/gitlab-development-kit/-/blob/main/doc/howto/geo.md)。
  - [動画](https://youtu.be/R58mgwDwjM8)と[スライド資料](https://docs.google.com/presentation/d/1azikV27LO68xobgJ7v399H1ppnLCmtB_kEKl_IMNI0Q/edit#slide=id.g123a13deda8_0_405)。
- **Pipeline Execution**: コンピュート分数と共有 runner の使用に関連する機能については、過去のコンピュート分数の使用データをプロジェクトに投入してください。7 分以内にセットアップできます。
    <details>
    <summary>コンピュート分数使用データを投入する</summary>

    {{< youtube "ym-fU1U-anE" >}}

    MR でブランチをチェックアウトし、`bin/rails console` を使用して rails console を開いてください。

    **1. コンピュート分数を編集する**

    ``` ruby
    ApplicationSetting.current.update(shared_runners_minutes: 400)
    project = Project.find(20)
    root_namespace = project.root_namespace
    namespace_usage = Ci::Minutes::NamespaceMonthlyUsage.find_or_create_current(namespace_id: root_namespace.id)
    Ci::Minutes::NamespaceMonthlyUsage.update_counters(namespace_usage, amount_used: 100, shared_runners_duration: 100)
    project_usage = Ci::Minutes::ProjectMonthlyUsage.find_or_create_current(project_id: project)
    Ci::Minutes::ProjectMonthlyUsage.update_counters(project_usage, amount_used: 100, shared_runners_duration: 100)
    ```

    `:wq` と入力してログ行を終了します。rails console を終了しないでください。

    **2. ヘルパーメソッドを追加する**

    ```ruby
    def increase_ci_usage(project:, date:, amount_used:, shared_runners_duration:)
    date = date.utc.beginning_of_month
    project_usage = Ci::Minutes::ProjectMonthlyUsage.where(date: date).safe_find_or_create_by(project_id: project.id)
    Ci::Minutes::ProjectMonthlyUsage.update_counters(project_usage, amount_used: amount_used, shared_runners_duration: shared_runners_duration)
    root_namespace = project.root_namespace
    namespace_usage = Ci::Minutes::NamespaceMonthlyUsage.where(date: date).safe_find_or_create_by(namespace_id: root_namespace.id)
    Ci::Minutes::NamespaceMonthlyUsage.update_counters(namespace_usage, amount_used: amount_used, shared_runners_duration: shared_runners_duration)
    end
    ```

    **3. ヘルパーメソッドを使用する**

    ```ruby
    increase_ci_usage(project: project, date: 1.month.ago, amount_used: 10, shared_runners_duration: 20)
    ```

    使用量クォータページに変更後のデータが反映されるようになります。

    </details>
- **Secure**:
  - プロジェクトの脆弱性を生成するには、`gitlab/qa` ディレクトリから `GITLAB_QA_ACCESS_TOKEN=XXXXXXXXXX GITLAB_URL="https://gitlab.com" bundle exec rake vulnerabilities:setup\[<Project_Id>,<Vulnerability_Count>\] --trace` を実行してください。スクリプト内のプレースホルダをローカルのアクセストークン、プロジェクト ID、希望する脆弱性の数に置き換えてください。例: `GITLAB_QA_ACCESS_TOKEN=asdfASDF1234- GITLAB_URL="http://localhost:3000/" bundle exec rake vulnerabilities:setup\[25,10] --trace`
  - [これらの手順](https://gitlab.com/gitlab-org/gitlab/-/merge_requests/89526#note_992018561)に従って、マージリクエストに脆弱性を投入してください。
- **Service Desk**: `incoming_email`、`service_desk_email`、MailRoom をセットアップしてください。これらの MR は Gitpod ではレビューできず、動作する GDK が必要です。[GDK セットアップ手順](https://gitlab.com/gitlab-org/gitlab-development-kit/-/blob/main/doc/howto/service_desk_mail_room.md)。[動画ウォークスルー](https://youtu.be/SdqBOK43MlI)。
- **Value Stream Analytics**: [セットアップとシードデータの手順](https://gitlab.com/-/snippets/2169951/raw/main/blocks.md)。多くの VSA 機能には EE ライセンスが必要なため、[開発者ライセンスをリクエスト](/handbook/engineering/workflow/developer-onboarding/#working-on-gitlab-ee-developer-licenses)してください。
- **Product Analytics**: [GDK セットアップ手順](https://gitlab.com/gitlab-org/gitlab-development-kit/-/blob/main/doc/howto/product_analytics.md)。このプロセスはローカル版の GDK でのみ実行可能であり、Gitpod では実行できません。また、Docker が必要です。

**環境セットアップに苦戦している場合**は、[デザイン DRI](/handbook/product/categories/#devops-stages) に支援を依頼してください。

### MR をレビューする

- **チェックリストを使用する**
  - [デザインと UI 変更のチェックリスト](https://docs.gitlab.com/development/contributing/design/#checklist)に従って、すべての主要な側面がカバーされていることを確認してください。
  - 変更が機能フラグの背後に残り、ステージングで完全なレビューが計画されている場合、完全なレビュー前にマージすることを検討できます。これは計画外の問題につながる可能性があるため、慎重に行ってください。
- **UX 要件を遵守する**
  - Issue で指定された UX 要件を遵守してください。
  - [フォローアップチェックリスト](https://docs.gitlab.com/development/contributing/design/#follow-ups)を使用して、追加の更新や不足要素について Issue を作成してください。
- **レビューのベストプラクティス**:
  - [全員向け](https://docs.gitlab.com/development/code_review/#everyone)および[レビュアー向け](https://docs.gitlab.com/development/code_review/#reviewing-a-merge-request)のベストプラクティスを参照してください。
  - レビューをチーム内の信頼と関係性を築くための対話として扱ってください。
- **コメントについて**:
  - 各トピックを個別のコメントスレッドに分けることで、個別の議論と解決を促進してください。関連するコード行にスレッドを作成してください。
  - 提案に対応または解決するために作成者に求められることを明確に伝えてください。
  - 意図を伝えるために [Conventional Comment フォーマット](https://conventionalcomments.org/#format)を使用してください。
  - 必須ではない提案の場合は、マージリクエスト内で解決できることまたはフォローアップとして対応できることを示すために (non-blocking) としてマークしてください。
    - [Chrome/Firefox アドオン](https://gitlab.com/conventionalcomments/conventional-comments-button)を試して [Conventional Comment](https://conventionalcomments.org/) プレフィックスを適用してください。
- **視覚的フィードバック**:
  - コメントに注釈付きのスクリーンショットまたは画面録画を共有してください。これにより問題が明確になり、コミュニケーションがより効率的になります。
  - [CloudApp](https://zight.com/)、[Monosnap](https://monosnap.com/)、Mac のスクリーンショット（[キャプチャ方法](https://support.apple.com/en-ca/guide/mac-help/mh26782/mac)と[注釈の付け方](https://support.apple.com/guide/mac-help/mark-up-files-mchl1fd88863/mac)を参照）などの無料アプリを使用してください。
  - [Markdown テーブル](https://docs.gitlab.com/user/markdown/#tables)を使用して、実装と期待される結果の違いを強調してください。以下のテンプレートを使用してください。
      <details>
      <summary>差分テーブルテンプレート</summary>

      ```markdown
      | This MR     | Expected    |
      |-------------|-------------|
      | Image/video | Image/video |
      ```

      </details>
- **建設的なフィードバックを提供する**:
  - 作成者の価値ある貢献を認め、称賛してください。
  - 懸念事項がある場合は、以下を検討してください。
    - 元に戻すのではなく、イテレーションする。
    - 自分の背景を共有し、適応を求めることでコラボレーションのために教育する。
    - [プランニングチームメンバー](/handbook/product-development/how-we-work/roles-and-responsibilities/#its-a-team-effort)、デザインマネージャー、または他のデザイナーからのセカンドオピニオンを求める。
    - 懸念事項に対応するためにフォローアップ Issue を作成する。
    - 対応が必要な項目のリストを含む Issue を作成して、機能の完全リリースをブロックする（[例](https://gitlab.com/gitlab-org/gitlab/-/issues/398152)）。

### MR を引き渡す

**レビュー後**:

- [自分をレビュアーとして残し](https://docs.gitlab.com/development/code_review/#dogfooding-the-reviewers-feature)、[まとめのコメント付きでレビューを提出](https://docs.gitlab.com/user/project/merge_requests/reviews/#submit-a-review)し、適切なレビューステータスを選択してください。例: 変更が必要な場合は `Request changes` を選択してください。
- Minimal Valuable Change（MVC）から逸脱する未解決の UX 上の懸念事項について、フォローアップ Issue を作成し、`Deferred UX` としてラベル付けしてください（[UX ラベル](/handbook/product/ux/operations/#ux-labels)に関する詳細）。

**作成者とのフォローアップ**:

- 自分の特定のグループ外の作業については、元の作成者と不明なドキュメントについて議論してください。これはカジュアルなレトロスペクティブで、同期または非同期のどちらでも構いません。

**承認**:

- MR がすべての要件を満たしていると確信したら、マージリクエストウィジェットの「Approve」ボタンをクリックして[承認](https://docs.gitlab.com/development/code_review/#getting-your-merge-request-reviewed-approved-and-merged)してください。
- 引き渡しについては、[レビュアーの責任](https://docs.gitlab.com/development/code_review/#the-responsibility-of-the-reviewer)ガイドラインに従ってください。

## パフォーマンス指標

[プロダクトデザインマージリクエスト（MR）レビューボリューム](/handbook/product/ux/performance-indicators/#product-design-mr-review-volume)は、UX 部門の主要パフォーマンス指標（KPI）として追跡されています。
