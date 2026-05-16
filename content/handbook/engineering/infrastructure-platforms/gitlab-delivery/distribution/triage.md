---
title: "Distribution チームのトリアージ"
description: "Distribution チームの Issue トリアージプロセスの概要と要約"
upstream_path: "/handbook/engineering/infrastructure-platforms/gitlab-delivery/distribution/triage/"
upstream_sha: "0e6f01390a34aeb6706ace17d8d3c50e74e82d0d"
translated_at: "2026-04-29T00:11:38Z"
translator: claude
stale: false
lastmod: "2025-10-22T09:53:02+11:00"
---

## 共通リンク

* [エンジニアリングチームのトリアージ](/handbook/product-development/how-we-work/issue-triage/)

## Issue のトリアージ

### 用語

* トリアージ: Issue のトリアージとは、Issue を調査してラベルとマイルストーンを適用することです。
* 部分的にトリアージ済みの Issue: `for scheduling` または `awaiting feedback` ラベルが割り当てられている場合、Issue は**部分的に**トリアージ済みと見なされます。
* 完全にトリアージ済みの Issue: `Backlog` であってもマイルストーンが割り当てられると、Issue は**完全に**トリアージ済みになります。適切なグループ、優先度、製品カテゴリのラベルが適用されているべきです。

注意: ユーザーにアサインされているがマイルストーンのない Issue はトリアージ済みではありませんが、そのユーザーの責任と見なされ、現時点ではトリアージキューの対象ではありません。

#### Issue の重大度

重大度ラベルの説明については、[CE ドキュメント](https://gitlab.com/gitlab-org/gitlab-ce/blob/master/CONTRIBUTING.md#severity-labels) を参照してください。

#### ラベル用語集

| ラベル | 意味 | 対処法 |
| - | - | - |
| awaiting feedback | ユーザーに追加情報を求めている | 2 週間以内に返答がない場合、Issue をクローズできます。 |
| maintainer-discussion | プロジェクトメンテナーによる追加議論が必要な Issue | プロジェクトメンテナーは 2 週間以内にステータスを確認して意見を提供すべきです。 |
| needs investigation | ユーザーから情報が提供されたが、チームがさらに調査する必要がある | ラベルを追加したチームメンバーが 4 週間以内に調査するか、他のチームメンバーを関与させるようにします。 |

トリアージ中は、適切な `group::` ラベルを Issue に適用すべきです。

* `group::distribution::build` は [Distribution Build チームの責任](/handbook/engineering/infrastructure-platforms/gitlab-delivery/distribution/#distribution-build) 用
* `group::distribution::deploy` は [Distribution Deploy チームの責任](/handbook/engineering/infrastructure-platforms/gitlab-delivery/distribution/#distribution-deploy) 用
* `group::distribution` は [Distribution チームの共有責任](/handbook/engineering/infrastructure-platforms/gitlab-delivery/distribution/#team-responsibility) 用
* [グループ別 GitLab 機能](/handbook/product/categories/features/) に基づいた適切なグループ

トリアージ中は、製品のどの部分が影響を受けているかを示す追加ラベルを付けるべきです。Distribution がよく使用するラベルの説明は [Distribution のよく使われるラベルページ](https://gitlab.com/gitlab-org/distribution/team-tasks/-/blob/master/frequently-used-labels.md) にあります。

### リソース

以下の条件を使用してトリアージが必要な Issue を特定できます:

* マイルストーンがない
* アサイニーがいない
* 以下のラベルが**適用されていない**:
  * `awaiting feedback`
  * `for scheduling`
  * `maintainer-discussion`
  * `needs investigation`
  * `Seeking community contributions`

このような Issue は [Issue フィルター](https://gitlab.com/gitlab-org/omnibus-gitlab/-/issues?scope=all&utf8=%E2%9C%93&state=opened&assignee_id=None&milestone_title=None&not[label_name][]=For%20Scheduling&not[label_name][]=awaiting%20feedback&not[label_name][]=maintainer-discussion) を使用してリスト表示できます。

### プロセス

Distribution チームは、チームの各メンバーが 1 週間担当するローテーションスケジュールで Issue トリアージを実施します。これは入社順に行われます。Issue トリアージ担当中に従うプロセスは以下の通りです:

1. 前のトリアージ担当チームメンバーが、週末に週次メタ Issue を作成してあなたにアサインしているはずです。Issue のタイトルは `Issue triage rotation week of <starting date>` である必要があります。
1. `awaiting feedback` ラベルが追加されてから 14 日以上経過し、提出者から返答がない場合、Issue をクローズするポリシーに従います。`awaiting feedback` ラベルの付いた Issue リストを確認して、["返答なし" レスポンス](#for-issues-with-no-reply) でクローズします。
1. トリアージする Issue を確認して、[適切なラベル](#label-glossary) を割り当てます。Issue の根本を理解するために少し調査が必要な場合もありますが、Issue トリアージは Issue の解決に至る必要はないことを覚えておいてください。トリアージは、優先度に基づいて適切なアクションが取れるように Issue を特定して分類することのみを意図しています。
1. Issue が記録されているプロジェクトのドメイン（例えば、gitlab-rails アプリケーションへの変更が必要だが omnibus-gitlab プロジェクトに作成された）に直接属さない場合は、Issue を適切な Issue トラッカーに移動し、最も適切なチームラベルを追加します。どのプロジェクトのトラッカーに置くべきか、またはどのチームのラベルを適用すべきか分からない場合は、コメントで `@gitlab-org/issue-triage` をメンションして Quality チームにサポートを求めることができます。
1. Issue がプロジェクトのコードベースやワークフローに関するものではなく、GitLab インスタンスのインストール/設定/トラブルシューティングに関するヘルプ要求である場合は、["GitLab コードベースと無関係な問題" レスポンス](#for-problems-not-related-to-the-gitlab-codebases) で Issue をクローズします。
1. Issue を正常にトリアージするために必要なすべての情報がない場合は、["情報が不足している Issue" レスポンス](#for-issues-that-lack-enough-information) を使用して情報を要求し、`awaiting feedback` ラベルを追加します。
1. 合理的な時間内に Issue をトリアージできなかった場合は、`needs investigation` ラベルを追加します。
1. Issue は時にプロジェクトメンテナーが最もよく確認できる場合があります。その場合は `maintainer-discussion` ラベルを付けます。このラベルでメンテナーに通知すべきケースの例:
   1. 作成時は正確だったが、現時点では疑わしい Issue。
   1. 当時は正確でなかったか私たちのビジョンに沿っていなかったが、現在はそうかもしれない Issue。
   1. Issue の実現可能性に関心があるが、提案通りには合理的でないかもしれない場合。
1. Issue が有効なものとして特定された場合は、`For Scheduling` ラベルを割り当てて部分的にトリアージ済みにし、今後のマイルストーン（または `Backlog` マイルストーン）のいずれかにスケジュールされるようにします。また、適用可能な重大度ラベルも適用します。
1. 適切な場所で `Seeking community contributions` ラベルを使用してコミュニティを参加させるようにしてください。コミュニティへの貢献の良い候補となる Issue は、重大度と優先度が低いか、有効な回避策があるものである必要があります。`workflow::ready for development` 状態である必要があります。必要な変更がシンプルで些細なものであれば `quick win` ラベルを使用します。[Omnibus の例](https://gitlab.com/gitlab-org/omnibus-gitlab/-/issues/?label_name%5B%5D=Seeking%20community%20contributions) を参照してください。
1. Issue が有効な Issue であり、有効な回避策がある場合は、回避策の詳細を伝えて Issue をクローズし、バグを修正するためのフォローアップ Issue を開きます。Issue には以下が含まれていることを確認してください:
   1. バグの再現方法の詳細
   1. Issue の回避方法
   1. 期待される動作
   1. ユーザー Issue を関連 Issue として
   1. 適切な優先度と重大度
1. Issue が部分的にまたは完全にトリアージされたら、その Issue へのリンクをメタ Issue へのコメントとして追加します。できれば `<action> <url>` の形式で、`<action>` には moved、closed、triaged、resolved、または marked as needs investigation などが入ります。これにより、週ごとにトリアージされた Issue を追跡するのに役立ちます。この目的には GitLab の関連 Issue 機能を使用しないでください。Issue 間に誤った関連付けが生成されるためです。
1. Issue のトリアージに費やした時間を追跡するために GitLab の `/spend` クイックアクション機能を使用してください。ハードリミットはありませんが、週に 3 〜 5 時間が妥当な目安です。
1. どのソフトウェアプロジェクトでも Issue が積み重なることはほぼ避けられないため、できる限り Issue 数を減らすようにします。これは主に、既存のトリアージ未完了 Issue のバックログに取り組むことを意味します。
1. 次の週次ミーティングで、トリアージ週について チームに報告してください - メタ Issue へのリンク、トリアージした Issue の数、費やした時間。そしてプロセスについて変更すべきだと思うことがあれば議論します。また、ミーティングのドキュメントで次週のミーティングのアジェンダ項目として次の発表者の同様のヘッダーを作成してください。

#### レスポンステンプレート

適切な Issue にコピー＆ペーストして使用してください

##### GitLab コードベースと無関係な問題の場合 {#for-problems-not-related-to-the-gitlab-codebases}

誰かが私たちのプロジェクトでサポートを求めている場合は、正しい場所を案内します

```text
We are sorry you are having troubles. The provided issue description seems to indicate that the problem is not related to this project. Commonly this indicates other troubles such as network connectivity or filesystem permissions.

For this reason, I will close this issue and recommend checking out [how to get further help](https://about.gitlab.com/get-help/) on the GitLab website.

/close
```

##### GitLab コードに関係するが Omnibus に特化していない問題の場合

Omnibus 以外の GitLab コードに関連しているように見えるバグでサポートを求めている場合

```text
We are sorry you are having troubles. The provided issue description seems to indicate that the problem is not related to Omnibus.

For this reason, we are moving this report to a more appropriate issue queue.  Please review the bug templates for the new project in case they require additional information to help diagnose the problem.

We also recommend checking out [how to get further help](https://about.gitlab.com/get-help/) on the GitLab website.
```

##### 情報が不足している Issue の場合 {#for-issues-that-lack-enough-information}

十分な情報なしでチケットを開いた場合は、`Bug` テンプレートを使用して入力するよう伝えてください

```text
We can't reproduce the issue with the information you provided here.

Can you please use our `Bug` template to help gather more details?

1. Click on the pencil icon near the issue title to edit the description
1. From the **Choose a template** drop down, select the **Bug** template
1. Read the template, and provide as much information as you can that we ask for
1. Click on the **Save changes** button to apply your changes.
1. Add a comment mentioning you updated the description.

/label ~"awaiting feedback"
```

##### 返答なしの Issue の場合 {#for-issues-with-no-reply}

Issue に `awaiting feedback` ラベルが付いて 2 週間が経過し、返答がない場合はクローズできます

```text
We haven't heard back from you, so we're going to go ahead and close the issue.

If you're still experiencing the problem, please re-open the issue and provide the requested information.

/close
```

#### 異なる報告者からの新しいコメントがある返答なしでクローズされた Issue の場合

返答なしでクローズされた Issue に元の報告者ではない人がコメントした場合は、新しい Issue を開くよう依頼します。コメントした貢献者にタグを付けることを忘れないでください。

```text
Thank you for letting us know about your issue COMMENTOR. Unfortunately, this issue was already closed. Please [open a new issue](https://gitlab.com/gitlab-org/omnibus-gitlab/issues/new?issue) following the ***BUG*** template and mark this closed issue as related.
```

#### メンテナーが現在の実現可能性をレビューすべき Issue の場合

Issue が関連性を確認するためにプロジェクトメンテナーが直接レビューする必要があると思われる場合

```text
I'm going to ask that this issue be reviewed by the project maintainers directly.
This is so that we can make the most accurate decision regarding further work and viability.
/label ~maintainer-discussion
```

### トリアージへのオンボーディング

新しい Distribution チームメンバーのトリアージ担当へのオンボーディングは 3 ヶ月後から始めます。チームメンバーがトリアージを始めるのに十分慣れていると感じる場合は、それより早く始めることもできます。

トリアージにオンボーディングするために、チームメンバーは 1 週間、経験豊富なトリアージチームメンバーにシャドウします。期待事項:

* メンターとシャドウは、トリアージ週の前に両方がメンタリングに同意していること。
* シャドウは事前にトリアージプロセスドキュメントを読んでいること。
* メンターとシャドウはトリアージ週の早い段階で同期的な呼び出しを行い、メンターがトリアージへのアプローチ方法を説明すること。
* シャドウは週の間に非同期でいくつかの Issue のトリアージを試みること。
* メンターとシャドウが一緒にいくつかの Issue のトリアージを試みるためのフォローアップ同期呼び出しが週の後半に予定されること。

シャドウは、単独でのトリアージ週に慣れる前に複数週のシャドウが必要な場合があります。

## パイプラインのトリアージ

パイプラインの失敗はチーム全体の共有責任であり、誰でも利用可能な人が可能な限り早急に対処する必要があります。とはいえ、トリアージ担当のチームメンバーは、発生した失敗についてフォローアップし、トリアージメモに集計を提供する責任があります。

重大なパイプラインが失敗するたびに Issue が自動的に作成されるプロセスを自動化中であることに注意してください。一部のパイプライン失敗は `#g_distribution` Slack チャンネルに通知されますが、まだ Issue が自動的に作成されていません。継続中の作業を追跡するには [このエピック](https://gitlab.com/groups/gitlab-org/distribution/-/epics/14) を参照してください。

### パイプライン失敗トリアージの推奨ワークフロー

1. 必要に応じて、Slack メッセージで初期の考えを共有するか、アクションプランを示すコメントを残します。
1. 自動的に Issue が作成されたか確認します。そうでない場合は作成してください。
1. 問題の解決に貢献するすべての人がシングルソースオブトゥルースとして Issue を使用できるよう、最初の Slack メッセージに Issue のリンクを貼ります。
1. Issue の調査を始めたら、`pipeline failure::under investigation` ラベルを追加します。
1. 以下の形式で Issue にコメントします: `@gitlab-bot retry_job <job-id>`。これにより [triage-ops bot](https://gitlab.com/gitlab-org/quality/triage-ops) がトリガーされ、プロジェクトのメンテナー権限を必要とせずに指定されたジョブを再試行します。
1. 必要に応じてリトライコマンドを繰り返します。これで失敗したジョブがパスした場合は、Issue をクローズします。そうでない場合は、根本原因を手動で修正して再試行するか、根本原因を追跡するための新しい関連 Issue を作成します。
1. 問題を軽減してパイプラインをパスさせたが、将来的に問題が再発する可能性がある場合:
   * 軽減のために取ったアクションを説明するコメントを書きます。
   * 問題の定義的な修正を調査/実装するためのフォローアップ Issue が存在するか確認し、そのパイプライン Issue の失敗にリンクします。そのようなフォローアップ Issue がまだ存在しない場合は、作成してリンクします。
   * すでに停止されていたリリースを再起動した場合は、パイプラインを修正した後、`@gitlab-bot retry_job <job-id of stop-review-*>` でそのジョブを手動で停止してください。このジョブは自動的に再トリガーされず、宙ぶらりんなリリースが ELB のクォータ枯渇を引き起こす可能性があります。chart Issue [#5326](https://gitlab.com/gitlab-org/charts/gitlab/-/issues/5326) を参照してください。
1. まだ壊れた状態のパイプラインを修正するためのフォローアップ Issue が必要な失敗もチームの認識を高めるために記録すべきです。これらの Issue には `Broken Pipeline` ラベルを付けてください。
1. 上流の失敗によって引き起こされた失敗には [`Upstream bug`](https://gitlab.com/groups/gitlab-org/-/labels?search=upstream+bug) ラベルを付け、関連する上流 Issue にリンクします。
1. Issue をクローズする前に、マイルストーンを設定して `pipeline failure::under investigation` を追加したことを再確認してください。これはメトリクス目的のために重要です。

Distribution 下の異なるプロジェクトによって実装されたさまざまなパイプラインとジョブの詳細は以下にリストされています:

1. [`omnibus-gitlab`](https://docs.gitlab.com/omnibus/development/pipelines.html)

#### GitLab Duo エージェンティックチャットの使用

[GitLab Duo Agentic Chat](https://docs.gitlab.com/user/gitlab_duo_chat/agentic_chat/) はパイプライン失敗の調査を支援し、断続的に失敗したジョブを再試行することさえできます:

1. パイプライン失敗 Issue を選択します。
1. サイドバーの「GitLab Duo Chat」をクリックし、「Agentic Mode」を有効にします。
1. 以下のプロンプトを使用してトラブルシューティングを開始し、失敗したジョブを再試行します:

   ```text
   ROLE:
   You are a specialized pipeline failure triage assistant. This issue reports a CI pipeline failure that requires investigation and appropriate action.

   OBJECTIVE:
   1. Analyze the scope and context of the failure
   2. CI jobs log analysis and troubleshooting
   3. Failure classification and reporting
   4. Issue management, failure retry and labeling
      - For intermittent failures retry the failed jobs

   STEPS:
   1. Information gathering:
      - Extract pipeline and job ID and commit hash from the issue description
      - List all failed jobs mentioned in the issue
      - Focus only on failed jobs accessible on "gitlab.com" and filter out jobs on inaccessible instances (such as "dev.gitlab.org")
   2. Analyze pipeline logs:
      - Retrieve logs for all accessible failed CI jobs
      - Perform systematic troubleshooting on each failed job
   3. Troubleshooting and root cause analysis
      - Identify root causes and failure patterns
      - Group similar failures by common causes
      - Categorize failures as either:
        - Intermittent: Resource exhaustion, network timeouts, external service/dependency issues, race conditions
        - Code-related: Build errors, test failures, configuration issues, dependency problems
      - Distinguish between "intermittent" versus "code-related" failure as they require different actions
   4. Summary and recommendations
      - Create a structured investigation summary
      - Consolidate duplicate failure causes across multiple jobs
      - For each failure category, provide:
        - Description of the issue
        - Your degree of confidence in your analysis based on following GUIDELINES.
        - Affected jobs
        - Recommended action (retry, code fix, infrastructure adjustment)
        - Prioritize failures by impact and likelihood of resolution
   5. Issue updates
      - Post comment with investigation results, follow OUTPUT format
      - Add appropriate labels using `/label ~"pipeline failure::under investigation"`
      - For each intermittent failures, add retry commands as issue comments for specific job IDs

   GUIDELINES:
   1. Be thorough but concise: Provide detailed analysis while avoiding redundancy
   2. Use "LOW", "MEDIUM", and "HIGH" qualitative values to measure your degree of confidence in your answers.
   3. Use clear categorization: Distinguish between different types of failures clearly
   4. Prioritize actionability: Focus on findings that lead to concrete next steps
   5. Handle scope limitations: Clearly communicate when jobs cannot be analyzed due to access restrictions
   6. Consolidate findings: Group related failures to avoid repetitive reporting
   7. Include context: Reference specific error messages, job stages, and timing when relevant
   8. Use you capabilities to retrieve and analyze job logs and commenting on issues
   9. For retrying jobs the issue comment must be formatted as `@gitlab-bot retry_job [failed job ID]`
   10. For retrying jobs that failed intermittently, each retry command must be in a separate comment

   OUTPUT:
   Structure your final comment as follows:

   ```markdown
   :robot: :speech_balloon:

   ### Investigation Summary
   [Brief overview of investigation scope and key findings]

   ### Failure Analysis

   #### Intermittent Failures
   - **Confidence:** [Your degree of confidence]
   - **Root Cause:** [Description]
   - **Affected Jobs:** [List of job names/IDs]
   - **Recommendation:** Retry affected jobs

   #### Code/Configuration Issues
   - **Confidence:** [Your degree of confidence]
   - **Root Cause:** [Description]
   - **Affected Jobs:** [List of job names/IDs]
   - **Recommendation:** [Specific fix needed]

   #### Inaccessible Jobs
   - **Jobs Skipped:** [List of jobs on dev.gitlab.org or other inaccessible instances]
   - **Reason:** No access to retrieve logs

   ### Next Steps
   **Confidence:** [Your degree of confidence]

   [Recommended actions for the development team]

   /label ~"pipeline failure::under investigation"
   ```
