---
title: Import グループ
description: Import グループはマイグレーションを支援します。
upstream_path: /handbook/engineering/devops/create/import/
upstream_sha: 81a617744130f76604f641d4483828edd0d60d2f
translated_at: "2026-04-28T10:48:33Z"
translator: claude
stale: false
---

## 概要

Import グループは [Create ステージ](/handbook/engineering/devops/create/)の一部です。
このグループは GitLab インスタンス間および他のプロバイダーからの移行によってプロダクトをサポートします。

このページは Import グループに固有のプロセスと情報を扱います。また、
[グループ方針ページ](https://about.gitlab.com/direction/create/import/)と
[カテゴリごとにサポートする機能](/handbook/product/categories/features/#import-and-integrate)も参照してください。

## 連絡方法

Import グループに連絡するには、関連プロジェクト（通常は [GitLab](https://gitlab.com/gitlab-org/gitlab)）に Issue を作成し、
`~"group::import"` ラベルと[適切なラベル](#issue-labels)を追加するのが最善です。その後、
関連するプロダクトマネージャーおよび/またはエンジニアリングマネージャーに ping してください。

緊急の案件については、Slack チャンネル（内部）：[#g_import](https://gitlab.slack.com/archives/g_import) をご利用ください。

## チームメンバー

以下の人物がグループの恒久的なメンバーです：


<p class="my-3 text-sm text-gray-600 italic">チームメンバー情報は <a href="https://handbook.gitlab.com/handbook/engineering/devops/create/import/" rel="external noopener">原文 (英語)</a> を参照してください。</p>


## メトリクス

エンジニアリングメトリクスダッシュボードは[こちら](/handbook/product/groups/product-analysis/engineering/dashboards/#dashboards)で確認できます。

## 作業

プロダクトマネージャーはマイルストーンの優先度ラベルを使用し、チーム、エンジニアリングマネージャー、その他のステークホルダーからのインプットを受けて、[プロダクト優先順位付けプロセス](/handbook/product/product-processes/#prioritization)に従ってデリバラブルおよびストレッチ Issue のリストをまとめます。
イテレーションサイクルはある月の18日から翌月の17日まで続き、リリース予定の GitLab バージョンで識別されます。

### Issue 開発ワークフロー

一般的に、標準の GitLab [エンジニアリングワークフロー](/handbook/engineering/workflow/)を使用します。

エンジニアリングマネージャー、プロダクトマネージャー、その他のステークホルダーが現在のマイルストーンにある全 Issue のステータス、または特定の人に割り当てられた全 Issue の概要を把握する最も簡単な方法は、[現在のマイルストーンボード](https://gitlab.com/groups/gitlab-org/-/boards/1459244?milestone_title=Upcoming&label_name%5B%5D=group%3A%3Aimport%20and%20integrate)です。このボードにはワークフローラベルごとのカラムがあります。

割り当てられた Issue のオーナーとして、エンジニアは Issue のワークフローラベルを最新の状態に保つことが期待されます。新しいラベルを手動で割り当てるか、ボード上で Issue を次のカラムにドラッグして更新します。

エンジニアが Issue に取り組み始めたら、`workflow::in dev` ラベルを出発点としてマークし、開発全体を通じて Issue を更新し続けます。プロセスは主に以下のガイドラインに従います：

``` mermaid
graph LR

  classDef workflowLabel fill:#428BCA,color:#fff;

  A(workflow::in dev):::workflowLabel
  B(workflow::in review):::workflowLabel
  C(workflow::verification):::workflowLabel
  F(workflow::complete):::workflowLabel

  A -- Push an MR --> B
  B -- Merged --> C
  C --> D{Works on production?}
  D -- YES --> F
  F --> CLOSE
  D -- NO --> E[New MR]
  E --> A
```

誰かが Issue に取り組み始めたが、1週間同じワークフローラベルのままになっている場合、担当者は Issue の状況を説明するコメントを残す必要があります。Issue が進んでいない間は、少なくとも毎週1件のコメントを書く必要があります。

### Issue ボード

Import グループの作業は以下の Issue ボードで追跡できます：

- [現在のマイルストーンボード](https://gitlab.com/groups/gitlab-org/-/boards/1459244?milestone_title=Upcoming&label_name[]=group%3A%3Aimport)

### Issue ラベル

良いラベルの管理を維持するために、Issue を作成またはトリアージする際は正しいラベルを適用してください。

すべての Issue に必要なもの：

- `~"group::import"`（ボットがステージとセクションのラベルを適宜適用します）
- 1つ以上のカテゴリラベル：
  - `~"Category:Importers"`（FIXME: 現時点でボットはすべての Issue にこのカテゴリを強制します）
  - `~"Category:Webhooks"`
- [タイプラベル](/handbook/product/groups/product-analysis/engineering/metrics/#work-type-classification)
- [ワークフローラベル](/handbook/engineering/workflow/#updating-workflow-labels-throughout-development)
- 必要に応じて `~"backend"` または `~"frontend"`

インポーターに関連する Issue には、`Importer:` ラベルも適用してください。例：`~"Importer:GitHub"` または `~"Importer:Direct Transfer"`。

### キャパシティプランニング

私たちはキャパシティプランニングを支援するために Issue ウェイトの軽量なシステムを使用しています。
これらのウェイトにより、サイクルでスケジュールされた作業量が、チーム全体として、また各個人にとっても合理的であることを確認できます。特定のサイクルの「ウェイト予算」は、チームの最近のアウトプットと、各エンジニアの今後の稼働可能日数に基づいて決定されます。

[物事は思っているより時間がかかる](https://erikbern.com/2019/04/15/why-software-projects-take-longer-than-you-think-a-statistical-model.html)ため、Issue がウェイトの示す時間よりも長くかかっても問題ありません。ウェイトは集計的に使用されることを意図しており、ある人が1日でできることが別の人には1週間かかることもあります。それはその Issue に関するバックグラウンドの知識量によります。**これは明示的に問題なく、予期されています。** 正確であるよう努めますが、それらはあくまで見積もりであることを理解してください！ウェイトが正確でない場合、または Issue が当初予想より難しくなった場合はウェイトを変更してください。ウェイトが変更された理由を示すコメントを残し、EM にタグ付けして、ウェイト設定をより深く理解し改善を続けられるようにしてください。

#### ウェイト

使用するウェイトは以下のとおりです：

| ウェイト | 説明 |
| --- | --- | --- |
| 1: 些細 | 問題は非常によく理解されており、追加の調査は不要で、正確な解決策はすでにわかっていてあとは実装するだけです。予期せぬ問題はなく、他のチームや人々との調整も不要です。<br><br>例：ドキュメントの更新、すでに調査・検討済みで数行のコードで修正できる単純なリグレッションやバグ、またはまだ時間が見つかっていないだけで正確な対処方法がわかっているテクニカルデット。 |
| 2: 小 | 問題はよく理解されており解決策の概要が描かれていますが、解決策を実現するためにもう少し追加の調査が必要な可能性があります。あったとしても少数の予期せぬ問題があり、他のチームや人々との調整は不要です。<br><br>例：既存のデータや機能を公開する新しい API エンドポイントのようなシンプルな機能、またはすでに調査が始まっている通常のバグやパフォーマンス Issue。 |
| 3: 中 | よく理解されており比較的簡単な機能。解決策の概要が描かれ、ほとんどのエッジケースが考慮されていますが、解決策を実現するためにある程度の追加調査が必要です。いくつかの予期せぬ問題が予想され、他のチームや人々との調整が必要な場合があります。<br><br>比較的よく理解されておらず、まだ提案された解決策がないかもしれないバグ。重大な調査が確実に必要ですが、問題が見つかれば比較的簡単に解決できるはずです。<br><br>例：バックエンドとフロントエンドのコンポーネントを持つ通常の機能、またはほとんどのバグやパフォーマンス Issue。 |
| 5: 大 | よく理解されているが、難しいことがわかっている機能。解決策の概要が描かれ、主要なエッジケースが考慮されていますが、解決策を実現するためにはかなりの追加調査が確実に必要です。多くの予期せぬ問題が予想され、他のチームや人々との調整が必要なことが多いです。<br><br>非常によく理解されておらず、提案された解決策がないバグ。重大な調査が必要で、問題が見つかっても解決策が簡単でない可能性があります。<br><br>例：バックエンドとフロントエンドのコンポーネントを持つ大きな機能、またはある程度の初期調査が行われたが再現されていないか「解明」されていないバグやパフォーマンス Issue。 |

5より大きいものはできれば分解する必要があります。

ウェイトは開発とレビューの両方の時間を考慮すべきです。

セキュリティ Issue は通常、上記の表から通常考えられるよりも1レベル高くウェイト付けされます。これは[パッチリリースプロセス](https://gitlab.com/gitlab-org/release/docs/blob/master/general/security/engineer.md)の厳格さを考慮したものです。特に、修正はより慎重な検討が必要で、複数のリリースにバックポートする必要があります。

### バックログリファインメント

エンジニアは通常、取り組む予定の Issue を自分でリファインします。ただし、特にコミュニティコントリビューターが担当する可能性のある Issue については、誰でも開発の準備が整うようにリファインできます。

Issue が Epic の一部の場合、DRI がリファインするか、その Epic に割り当てられたエンジニアにリファインメントを委任することがあります。誰がリファインするかに関係なく、マイルストーン開始前にリファインメントを完了することを目指してください。

遅くても、エンジニアリングマネージャーが次のマイルストーンの計画 Issue を共有する時点でリファインメントを始めるべきです。これは現在のマイルストーン終了の1週間前に行われます。

#### リファインメント対象 Issue の特定

エンジニアリングマネージャーが Issue をスケジュールし、それがマイルストーン計画 Issue に含まれます。

各エンジニアのマイルストーン割り当てに基づいて、`Ready for Development` ステータスでない Issue を特定してください。これらは通常 `Refinement` または `Planning breakdown` ステータスを持ちますが、任意の[プロダクト開発フロー](/handbook/product-development/how-we-work/product-development-flow/)ステータスを持つ場合もあります。

`Ready for Development` だが何ヶ月も前にリファインされた Issue は、コードベース、プロダクト、アーキテクチャ方向の変化に焦点を当てて再度リファインする必要があります。

#### Issue のリファインメント

Create ステージの[クロスチームプランニングとリファインメント](/handbook/engineering/devops/create/#cross-team-planning-and-refinement)ガイドライン、特に[リファインメント](/handbook/engineering/devops/create/#refinement)と[実装計画](/handbook/engineering/devops/create/#implementation-plan)のセクションに従ってください。

Import グループでは、これらのガイドラインに加えて以下の Import 固有の要件を満たす場合に Issue がリファインされたとみなします：

- ウェイト（`type::bugs` ではオプション）
- 別のエンジニアによるピアレビュー（ウェイト1の Issue ではオプション）；レビュー済みを示すために、レビュアーはコメントを残すか Issue を `Ready for development` に移動します
- `Ready for development` ステータス

**バグの準備**

バグは取り組む前に完全に理解されている必要はなく、そのためウェイトは不要です。

バグを完全に理解するための労力は、しばしば修正のための労力のほとんどを占めます。したがって、バグ Issue における提案された解決策は、欠陥の不完全な理解に基づいた**提案**とみなすことができます。

少なくとも以下を含めるようにしてください：

- 再現手順
- 現在の動作
- 期待される正しい動作

[Bug テンプレート](https://gitlab.com/gitlab-org/gitlab/-/blob/master/.gitlab/issue_templates/Bug.md?ref_type=heads)にはこれらのフィールドが含まれています。

### サポートの要請

サポート組織の一員でない場合は、まず彼らに連絡することをお勧めします。彼らはより高い可用性を持ち、ほとんどの一般的な問題をサポートできます。専用の Slack チャンネル [#spt_pod_import](https://gitlab.enterprise.slack.com/archives/C052K0Z1F8T) に参加してフォローし、そこで質問することができます。ただし、顧客の Issue を解決するために詳細な技術的知識が必要になる場合があり、チームのエンジニアの関与が必要になることがあります。

エンジニアリングチームにサポートを依頼する前に、まず関心のあるトピックの [GitLab ドキュメント](https://docs.gitlab.com/)と以下の追加リソースをご確認ください：

- [Importer Runbook](https://gitlab.com/gitlab-org/foundations/import-and-integrate/team/-/blob/main/importers/runbook.md?ref_type=heads)
- [GitLab Log Analysis Tool](https://gitlab.com/gitlab-org/foundations/import-and-integrate/gitlab-logs-analysis)
- [Jira プレイリスト](https://www.youtube.com/playlist?list=PL05JrBw4t0Koazgli_PmMQCER2pVH7vUT)

上記のリソースで質問への回答が見つからない場合は、[Request for Help (RFH) Issue](https://gitlab.com/gitlab-com/request-for-help/-/issues/new?issuable_template=SupportRequestTemplate-Import) を開き、`SupportRequestTemplate-Import` テンプレートを使用してください。チームに連絡する前に必要な情報をすべて提供してください。そうでないとリクエストを処理できません。新しい Issue は内部のトリアージプロセスに従って優先順位が付けられます。現在の GitLab バージョンと直近2つのマイナーバージョン（N-2）に影響する Issue のリクエストのみサポートできます。古いバージョンの修正は提供できません。これは[バックポートのメンテナンスポリシー](https://docs.gitlab.com/ee/policy/maintenance.html#patch-releases)に準拠しています。

### マイルストーンドクター

各マイルストーンでは、チームのバックエンドエンジニア2名がマイルストーンドクターの役割を割り当てられ、一方がプライマリ、もう一方がセカンダリとなります。割り当ては[マイルストーンドクターローテーションスケジュール](https://gitlab.com/groups/gitlab-org/-/work_items/21520#milestone-doctor---rotation-schedule)にあります。エンジニアは今後のシフトを自由に交換してスケジュールを更新できます。

セカンダリドクターは、プライマリが OOO（オフィス外）またはキャパシティオーバーの場合に介入し、同じ責任を担います。それ以外の場合は、マイルストーンに計画された作業に取り組みます。プライマリドクターは OOO またはキャパシティの問題がある場合はセカンダリに知らせてください。

プライマリドクターのマイルストーンキャパシティは100%役割の責任に割り当てられます。残っていない場合、エンジニアは `~type::maintenance` または `~type::bug` Issue に取り組み、コードレビューのキャパシティを増やすことを検討してください。

現在のドクターは `@gitlab-com/create-team/import/reaction-rotation` でタグ付けできます。

#### 責任

- 新しい [RFH Issue](https://gitlab.com/gitlab-com/request-for-help/-/issues/?sort=popularity&state=opened&label_name%5B%5D=Help%20group%3A%3Aimport&first_page_size=100) でサポートと PS に対応する
- 長期間オープンしている Issue をフォローアップする
- 顧客コールでサポートチームをサポートする
- マイルストーンドクターが問題を正常に診断した方法に関するチームのランブックドキュメントを維持する
- チームの Slack チャンネル [`#g_import`](https://gitlab.enterprise.slack.com/archives/C04RDL3MEH5) の質問に回答する
- シフトからの学びで私たちの [FAQ](https://gitlab.com/gitlab-org/foundations/import-and-integrate/team/-/blob/main/importers/faq.md?ref_type=heads) を更新する
- [インポーター依存関係](#importer-dependencies)をレビューし、サードパーティ API の変更による必要な変更の Issue を作成する
- マイルストーン終了時に [`@gitlab-com/create-team/import/reaction-rotation` のメンバーシップ](https://gitlab.com/groups/gitlab-com/create-team/import/reaction-rotation/-/group_members?with_inherited_permissions=exclude)を更新する

##### インポーター依存関係

各マイルストーンで、各インポーターの依存関係の変更履歴を確認し、今後の破壊的変更や API の非推奨化がないかをチェックしてください。[GitLab Duo Chat](https://docs.gitlab.com/user/gitlab_duo_chat/) を使って影響を評価し、更新が必要な変更には関連する `~"Importer:"` ラベルを付けた Issue を作成してください。

レビュー後、計画 Issue にサマリーと作成した Issue へのリンクを含むコメントを残してください。EM にタグ付けして注意を促してください。

<details>
<summary>推奨プロンプト</summary>

`[START_DATE]` を依存関係が最後に確認された日付に置き換えてください。

```text
You are helping an engineer on the GitLab Import team perform a periodic review of third-party API dependencies. Our importers integrate with external services and we need to check their changelogs for any breaking changes, deprecations, or required migrations announced since [START_DATE].

Review the following changelog pages and identify any changes that could break or require updates to our importers:

**GitHub importer**
- Source: https://gitlab.com/gitlab-org/gitlab/-/tree/master/lib/gitlab/github_import
- Changelogs: https://docs.github.com/en/rest/about-the-rest-api/breaking-changes, https://github.blog/changelog/, https://github.com/octokit/octokit.rb/releases

**Bitbucket Cloud importer**
- Source: https://gitlab.com/gitlab-org/gitlab/-/tree/master/lib/bitbucket, https://gitlab.com/gitlab-org/gitlab/-/tree/master/lib/gitlab/bitbucket_import
- Changelogs: https://developer.atlassian.com/cloud/bitbucket/changelog/

**Bitbucket Server importer**
- Source: https://gitlab.com/gitlab-org/gitlab/-/tree/master/lib/bitbucket_server, https://gitlab.com/gitlab-org/gitlab/-/tree/master/lib/gitlab/bitbucket_server_import
- Changelogs: https://developer.atlassian.com/server/bitbucket/changelog/

**Gitea importer**
- Source: https://gitlab.com/gitlab-org/gitlab/-/blob/master/app/controllers/import/gitea_controller.rb (uses GitHub import client)
- Changelogs: https://github.com/go-gitea/gitea/blob/main/CHANGELOG.md, https://blog.gitea.com

**Jira importer**
- Source: https://gitlab.com/gitlab-org/gitlab/-/tree/master/lib/gitlab/jira_import
- Changelogs: https://developer.atlassian.com/cloud/jira/platform/changelog/, https://github.com/sumoheavy/jira-ruby/releases

**FogBugz importer**
- Source: https://gitlab.com/gitlab-org/gitlab/-/tree/master/lib/gitlab/fogbugz_import
- Changelogs: https://support.fogbugz.com/section/3113-articles

For each change you find, check the corresponding GitLab implementation to verify whether the change affects us.

Then, for each importer, list:
1. The name of the importer
2. Whether changes are required
2. A summary of the required change (for changes that do not affect us, simply provide a link to
   the announcement)
3. The due date or enforcement date

If no actionable changes are found, confirm that and note the date range you checked.
```

</details>

### セキュリティとの連携

グループにはセキュリティへの影響がある可能性のある Issue を特定するための[脅威モデル](https://gitlab.com/gitlab-com/gl-security/product-security/appsec/threat-models/-/blob/master/gitlab-org/gitlab/GitLab%20Migration.md)がありますが、他にも考慮すべき事項があります。

[アプリケーションセキュリティレビュー](/handbook/security/product-security/security-platforms-architecture/application-security/appsec-reviews/)は、Issue または MR がセキュリティに影響する可能性がある場合に要請すべきです。これには以下が含まれますが、これに限りません：

- 脅威モデルに該当する場合
- バイナリファイルの処理（ダウンロード、解凍、展開、移動、削除）
- ファイル操作サービスの変更または使用
- Import/Export の `CommandLineUtil` のメソッドを使用する場合

### 長期間有効なフィーチャーフラグ

これはフィーチャーフラグの使用に関する GitLab の一般的な[開発ガイダンス](https://docs.gitlab.com/ee/development/feature_flags/)を補足するものです。[`ops` タイプ](https://docs.gitlab.com/ee/development/feature_flags/#ops-type)を除くすべてのフラグタイプに適用されます。

Import 機能への変更はしばしば高トラフィックのコードパスで発生し、過去に GitLab.com で障害を引き起こしました。障害はしばしばリソースの競合に関連しており、コードレビューや QA テストでは事前に気づくことが難しいことがあります。

- 大規模なインポートは何千ものワーカーをトリガーする可能性があります。
- インテグレーションとウェブフックは1日に何百万回も実行されます。
- 競合の問題は即座に表面化せず、大規模な顧客が新しいコードパスをトリガーした時だけ発生することがあります。

このため、フィーチャーフラグを通常よりも長い期間コードベースに残すことを推奨します。
この期間中、フラグはデフォルトで有効になっていますが、インシデントの際には迅速に無効化できます。

過去に、機能を無効化することでいくつかのインシデントを迅速に軽減できました：

- [2023-09-21: グループインポートが CI パイプラインでのユーザーなりすましを許可](https://gitlab.com/gitlab-sirt/shared-incidents/incident_4304/-/issues/1)
- [2023-10-30: GitLab.com がダウン](https://gitlab.com/gitlab-com/gl-infra/production/-/issues/17054)
- [2024-01-30: Sidekiq Apdex SLO](https://gitlab.com/gitlab-com/gl-infra/production/-/issues/17504)

インポーター、インテグレーション、またはウェブフック内の変更については、以下を推奨します：

1. 通常通り `/chatops` でフラグをロールアウトする。
1. スケールでの問題を積極的に洗い出すために大規模なデータを使用して変更を QA する。
   インポーターについては、[ランブック](https://gitlab.com/gitlab-org/manage/import-and-integrate/team/-/blob/main/importers/runbook.md)のヒントを参照してください。
1. 機能をリリースする際は、フィーチャーフラグを削除するのではなく `default_enabled: true` に変更する。これはフラグロールアウト Issue の[オプション的なフラグ付きで機能をリリース](https://gitlab.com/gitlab-org/gitlab/-/blob/e730c474ed80143ebae33df90900b342020ad7c0/.gitlab/issue_templates/Feature%20Flag%20Roll%20Out.md?plain=1#L83)のステップです。
1. この時点で機能はマイルストーン内でリリースされたとみなされ、セルフマネージドの顧客に届くためリリースポストで発表できます。
1. フラグがコードベースに存在しますがデフォルトで有効な状態で**1〜3週間待機する**。
   競合が多い領域の変更や、何らかの理由で問題の検出に時間がかかると思われる場合は長い期間を使用してください。
1. その期間後、フラグを削除してフラグロールアウトプロセスを完了する。

### リリース中

- キックオフ後にリリースに Issue が追加された場合、未計画の作業を考慮して等量のウェイトを削除する必要があります。
- Issue の見積もりとウェイト付けが完了する前に開発を開始すべきではありません。
- 15日までに、エンジニアリングのマージリクエストをマージする必要があります。言い換えると、15日以降にマージされたコードはリリースに含まれないと想定します。これにより、リリースがファイナライズされる時間と、関連する[リリースポスト](/handbook/marketing/blog/release-posts/)が17日までにマージされる時間が確保されます。（これは[13.11 から始まった実験](https://gitlab.com/gitlab-org/manage/general-discussion/-/issues/17330)です。）

### リリースポスト

詳細な発表が必要な Issue については、Issue を使用してリリースポストを自動的に作成できます。
Issue に取り組む際（計画中、または設計・開発中）に、[リリースポストアイテムジェネレーター](/handbook/marketing/blog/release-posts/#release-post-item-generator)を使用してリリースポストを作成し、関係者全員に通知することができます。

Issue にリリースポストを作成したくない場合は、Issue にリリースノートセクションがないことを確認するか、`release post item::` ラベルを使用しないでください。

### 概念実証 MR

私たちは[イテレーション](/handbook/values/#iteration)と小さなインクリメントでの価値提供を強く信じています。イテレーションは難しい場合があります。特に、プロダクトのコンテキストがないときや、コードベースの特にリスクの高い/複雑な部分に取り組んでいるときはそうです。Issue の見積もりや実現可能かどうかの判断に苦労している場合は、最初に概念実証 MR を作成することが適切な場合があります。概念実証 MR の目的は、計画中の主要な仮定を排除し、早期のフィードバックを提供することで、将来の実装からのリスクを軽減することです。

- `PoC:` のプレフィックスを付けて MR を作成する。
- MR の説明に PoC MR が解決しようとしている問題を説明する。
- タイムボックスを設ける。2〜3日以内に実現可能性や計画を判断できますか？
- この期間終了時にフィードバックを提供するレビュアーを特定する。
- MR をクローズする。PoC から学んだこと（プロダクトとパフォーマンスへの影響を含む）の要約を元の Issue に提供する。
  - 実装を進めることができるかどうかを述べる。
  - Issue をクローズしないでください。

概念実証 MR の必要性は、コードベースやプロダクトの一部が過度に複雑になっていることを示すシグナルかもしれません。将来このステップを避ける方法を議論できるよう、振り返りの一部として MR を議論することは常に価値があります。

### 振り返り

定期的にスケジュールされた「マイルストーンごと」の振り返りが1回あり、「プロジェクトごと」の振り返りは随時行うことができます。

#### マイルストーンごと

Import グループは [GitLab Issue でマイルストーン振り返り](https://gitlab.com/gl-retrospectives/manage-stage/import/-/work_items)を実施しています。これにはエンジニア、UX、PM、そのマイルストーンでチームと協力したすべてのステーブルカウンターパートが含まれます。

チームメンバーの参加はすべてのマイルストーンで強く奨励されています。

これらは最初の議論の間は機密で、毎月の [GitLab 振り返り](/handbook/engineering/careers/management/group-retrospectives/)に間に合うように公開されます。詳細については、[グループ振り返り](/handbook/engineering/careers/management/group-retrospectives/)を参照してください。

#### プロジェクトごと

特定の Issue、機能、またはその他のプロジェクトが特に有益な学習経験になった場合、そこから学ぶための同期または非同期の振り返りを行うことがあります。取り組んでいることが振り返りに値すると思う場合は：

1. 振り返りを行いたい理由を説明し、同期か非同期かを示す [Issue を作成する](https://gitlab.com/gitlab-org/manage/import-and-integrate/discussions/-/issues)。
1. EM と関与すべき他の人（PM、カウンターパートなど）を含める。
1. 該当する場合は同期ミーティングを調整する。

振り返りからのすべてのフィードバックは、参照目的のために最終的に Issue に記録すべきです。

### テックリード

私たちのグループはテックリードと協力して、さまざまなトピックに関する作業を整理し、それらの DRI を特定します。

#### テックリードの特徴

テックリードとは：

- 追加の責任を持つ個人コントリビューターです。シニアリティに関係なく、すべてのエンジニアがテックリードになる資格があります。
- 特定のトピック/プロジェクトに結び付いた一時的な役割です。チームが異なるトピック/プロジェクトについて同時に複数のテックリードを持つことができます。
- マネージャーでは**ありません**。
- 追加のシニアリティレベルでは**ありません**。

テックリードの役割は、リーダーシップスキルの習得に関心のあるエンジニアに成長の機会を提供します。

#### テックリードの責任

テックリードは多くの役割を担います。その責任はプロジェクトによって異なる場合がありますが、以下が含まれることがあります：

- テクニカルビジョンとアーキテクチャ - 特定のプロジェクトの全体的な技術アーキテクチャを定義・発展させる
- テクニカルガイダンス - チームの他の開発者に技術的なガイダンスとメンタリングを提供する
- 作業の計画と優先順位付け - 大きなタスクをより小さな実行可能なアイテムに分解して作業を整理する
- 進捗の追跡 - コミットメントの進捗を追跡してステータス更新を報告する
- リスク管理 - 成果物に影響を与える可能性のある技術的リスクを特定、評価、管理する
- 調整 - 他者の作業を監督してブロッカーの除去を支援する
- 技術ドキュメント - 他の開発者のために技術アーキテクチャとコード構造のドキュメントを維持する

#### 現在のテックリード

以下は、テックリードが監督しているトピックの概要です：

| トピック | テックリード | トピックリンク | 備考 |
| ------ | ------ | ------ | ------ |
| Direct Transfer - ユーザーコントリビューションマッピング | Rodrigo Tomonari | [Epic](https://gitlab.com/groups/gitlab-org/-/epics/12378) | - |
| インポーターへの開発者コントリビューションの効率改善 | James Nutt | [OKR](https://gitlab.com/gitlab-com/gitlab-OKRs/-/work_items/6658) | - |
| Congregate | tbd | https://gitlab.com/gitlab-org/gitlab/-/issues/428657 | |
| GitHub Actions | tbd | https://gitlab.com/gitlab-org/manage/general-discussion/-/issues/17652 | |
|  | | |  |

## マージリクエストルーレットレビュー

Import コードベースのエリアが変更された場合、[レビュアールーレット](https://docs.gitlab.com/ee/development/code_review.html#reviewer-roulette)はマージリクエストを Import チームメンバーがレビューするよう推奨します。これは、Import チーム外の人がマージリクエストを作成した場合にのみ発生します。レビュー推奨がどのように表示されるかの[例](https://gitlab.com/gitlab-org/gitlab/-/merge_requests/74338#note_731247058)を参照してください。

これらの特別な推奨の[理由](https://gitlab.com/gitlab-org/gitlab/-/issues/343486)は、他のグループが特定のインテグレーションやウェブフックに一部のオーナーシップを持っているからです。チーム外のメンバーによる変更をレビューすることで、基本コードのオーナーとして行動し、Import コードベースの品質をより良く維持できます。

### ルーレットのマッチングの仕組み

マージリクエストの変更のファイルパスは、[正規表現のリスト](https://gitlab.com/gitlab-org/gitlab/-/blob/240d4c37c955878c224718e47f4d527bea250299/tooling/danger/project_helper.rb#L42-62)と照合されます。
ルーレットはこれらのハッシュ値を使ってレビュアーグループを推奨します。例えば、`:import_integrate_be` と `:import_and_integrate_fe` はそれぞれ Import のバックエンドとフロントエンドのレビューを推奨します。正規表現のマッチは[最初のマッチが優先](https://gitlab.com/gitlab-org/gitlab/-/blob/54e182410219d1c77c5c6b2b7c88a6639f622cc6/tooling/danger/project_helper.rb#L18)であり累積ではないため、`:backend` や `:frontend` のような他の関連するレビュアーグループも各ハッシュ値に含める必要があります。

正規表現リストは、インテグレーションやウェブフックのコードが必要に応じて更新されるたびに更新する必要があります。このリストは一般的に名前空間が付いたファイルと一致するため、既存の名前空間内の新しいコードは常にマッチします。

GitLab リポジトリ内のどのファイルがマッチを生成するかを確認するには、Rails コンソールに以下を貼り付けてください：

```ruby
require Rails.root.join('tooling/danger/project_helper.rb')

ALL_FILES = Dir.glob('**/*');

def category_regexs(category)
  matching_categories = Tooling::Danger::ProjectHelper::CATEGORIES.select do |regexs, categories|
    next if regexs.is_a?(Array)

    Array.wrap(categories).include?(category)
  end

  regexes = matching_categories.map(&:first)
  Regexp.union(*regexes)
end

def print_files(category)
  regex = category_regexs(category)

  puts ALL_FILES.grep(regex).reject { |path| File.directory?(path) }.sort
end

puts "Backend:\n"
print_files(:import_integrate_be)

puts "Frontend:\n"
print_files(:import_integrate_fe)
```

## モニタリング

これは私たちの機能を監視するためのリンクのコレクションです。

### Grafana ダッシュボード

- [Import グループダッシュボード](https://dashboards.gitlab.net/d/stage-groups-import_and_integrate/stage-groups-import-and-integrate-group-dashboard?orgId=1)（以下を含む）：
  - 機能カテゴリーでフィルタリングされた各種 Kibana ログへのリンク
  - [エラーバジェット](#error-budgets)の消費帰属
- [ワーカーキュー](https://dashboards.gitlab.net/d/sidekiq-queue-detail/sidekiq-queue-detail?orgId=1&var-PROMETHEUS_DS=Global&var-environment=gprd&var-stage=main&var-queue=jira_connect:jira_connect_sync_branch)（`queue` ドロップダウンでキューを切り替え可能）

### Sentry エラー

- ["IntegrationsController" に一致](https://new-sentry.gitlab.net/organizations/gitlab/issues/?project=3&query=is%3Aunresolved+IntegrationsController&referrer=issue-list&statsPeriod=14d)
- ["Integrations" に一致](https://new-sentry.gitlab.net/organizations/gitlab/issues/?project=3&query=is%3Aunresolved+Integrations&referrer=issue-list&statsPeriod=14d)
- ["Jira" に一致](https://new-sentry.gitlab.net/organizations/gitlab/issues/?project=3&query=is%3Aunresolved+Jira&referrer=issue-list&statsPeriod=14d)

### Kibana ダッシュボード

[すべての Import Kibana ダッシュボードのリスト](https://log.gprd.gitlab.net/app/dashboards#/list?s=tag:(group::import)&sort=title&sortdir=asc)を参照してください。

インポーターダッシュボード：

- [プロジェクト Import/Export](https://log.gprd.gitlab.net/app/dashboards#/view/03a11c50-ba46-11ec-b73f-692cc1ae8214)
- [GitHub インポート - 概要](https://log.gprd.gitlab.net/app/dashboards#/view/62965d10-9c0e-11ed-9f43-e3784d7fe3ca)
- [GitHub インポート - プロジェクトインポートデバッグ](https://log.gprd.gitlab.net/app/dashboards#/view/be0fb6d0-9c24-11ed-85ed-e7557b0a598c)
- [GitLab Direct Transfer](https://log.gprd.gitlab.net/app/dashboards#/view/f2640580-a8bd-11ed-85ed-e7557b0a598c)
- [ユーザーコントリビューションマッピング](https://log.gprd.gitlab.net/app/dashboards#/view/f9c66d73-50a1-43e2-89ab-56b71645df33)

API/Webhooks ダッシュボード：

- [REST と GraphQL API](https://log.gprd.gitlab.net/app/dashboards#/view/ee792100-cfc7-11ec-afaf-2bca15dfbf33)
- [Webhooks](https://log.gprd.gitlab.net/app/dashboards#/view/deec2320-3914-11ed-b86b-d963a1a6788e)

### Kibana ログ

GitLab for Jira Cloud アプリワーカー：

- [`JiraConnect::SyncMergeRequestWorker`](https://log.gprd.gitlab.net/goto/309f97d4a5c3e918e2c07754fefc94ee) エラー。
- [`JiraConnect::SyncBranchWorker`](https://log.gprd.gitlab.net/goto/96364e957898896c4dc7e9ee5534b6de) エラー。
- [`JiraConnect::SyncProjectWorker`](https://log.gprd.gitlab.net/goto/5f0e03847ddc1b074d6346199c8bc4d2) エラー。
- [すべての JiraConnect 同期ワーカー](https://log.gprd.gitlab.net/goto/39348f2d169e6929c41dba2d6fb063ee) タイムアウトエラー。

### エラーバジェット

GitLab は[エラーバジェット](/handbook/engineering/error-budgets/)を使用して機能の可用性とパフォーマンスを測定しています。
各エンジニアリンググループには独自のバジェット消費があります。Import チームの現在の28日間の消費は[Grafana ダッシュボード](https://dashboards.gitlab.net/d/stage-groups-import_and_integrate/stage-groups-import-and-integrate-group-dashboard?orgId=1)で確認できます。

エラーバジェットの消費は、以下のいずれかが特定のしきい値を超えた場合に発生します：

- エンドポイントまたはワーカーのエラーレート
- エンドポイントの Apdex（レイテンシー）

#### 最も影響の大きい修正の特定

[Grafana ダッシュボード](https://dashboards.gitlab.net/d/stage-groups-import_and_integrate/stage-groups-import-and-integrate-group-dashboard?orgId=1)で最優先の問題を特定するには：

1. **Error budget** パネルに移動する。
1. **Budget spend attribution** を展開する。**Budget failures** パネルは上位の障害順に並んでいます。
1. **Failure log links** で対応するリンクをクリックする。

上位の問題を修正することがバジェット消費に最大のインパクトをもたらします。

#### さらなるリソース

エラーバジェットについてはこれらのリソースで詳しく学べます：

- [エラーバジェットとその計算方法](/handbook/engineering/error-budgets/)
- [Apdex とは何か、どのように機能するか](https://docs.gitlab.com/ee/development/application_slis/rails_request.html)
- [Grafana ダッシュボードのエラーバジェット](https://docs.gitlab.com/ee/development/stage_group_observability/index.html#error-budget)
- [機能カテゴライゼーション](https://docs.gitlab.com/ee/development/feature_categorization/)：私たちのコードは `feature_category: :integrations`、`feature_category: :importers`、`feature_category: :webhooks` によって帰属されます

## 使用状況データダッシュボード

Tableau で機能使用のデータを表示できます。

- [中央化プロダクト使用状況メトリクスダッシュボード](https://10az.online.tableau.com/#/site/gitlab/views/DRAFTCentralizedGMAUDashboard/MetricReporting?:iid=1) - 任意の選択したメトリクスを観察するために使用できます。例えば Microsoft Teams インテグレーションのデータを見るには、左側の `Select Metric Level` で `PI` を選択し、`Select Metrics to view` で最初に `All` のチェックを外してから `microsoft` を検索し、関心のある Microsoft Teams インテグレーションのメトリクスをチェックします。[例](https://10az.online.tableau.com/t/gitlab/views/DRAFTCentralizedGMAUDashboard/MetricReporting/8c7d8afd-ffc7-4198-b11a-6099df2b8611/3170c5bb-4509-4b3d-8362-470e49286d42)を参照してください。タイムフレームと `Dimention Paremeter`（例：デプロイタイプ）を選択できます。他の例として [GitHub インポーター](https://10az.online.tableau.com/t/gitlab/views/DRAFTCentralizedGMAUDashboard/MetricReporting/57ab6fbb-7d64-4ab9-ac36-dfcfbd891c69/1e04a888-66de-44c8-b722-1c31e214b8db)や[デプロイ別ウェブフック使用状況](https://10az.online.tableau.com/t/gitlab/views/DRAFTCentralizedGMAUDashboard/MetricReporting/ef4c4285-1a54-4769-86d7-60331b44a10a/0fa98245-8e1c-4db1-82f3-2591e310aa3d)があります
- [インテグレーション使用状況ダッシュボード](https://10az.online.tableau.com/#/site/gitlab/views/ManageIntegrationsUsage/ServicePingResults?:iid=1) - すべてのインテグレーションの使用状況を表示します。右側で特定のインテグレーションをフィルターイン/アウト（含める/除外する）できます。
- [インポーター使用状況ダッシュボード](https://10az.online.tableau.com/#/site/gitlab/workbooks/2214374/views) - まだ作業中です。
- [ユーザーコントリビューションマッピング使用状況ダッシュボード](https://10az.online.tableau.com/#/site/gitlab/workbooks/3238494/views) - インポート中に作成されたプレースホルダーユーザーに関するデータを表示します。

## リンクとリソース {#links}


<!-- include omitted: includes/engineering/foundations/shared-links.md (no localized version under content/ja/) -->


- [マイルストーン振り返り](https://gitlab.com/gl-retrospectives/manage-stage/import/-/work_items)
- Slack チャンネル
  - Create:Import [#g_import](https://gitlab.slack.com/archives/C04RDL3MEH5)
  - デイリースタンドアップ [#g_import_daily](https://gitlab.slack.com/archives/C04UYQV7716)
- Issue ボード
  - [現在のマイルストーンボード](https://gitlab.com/groups/gitlab-org/-/boards/1459244?milestone_title=Upcoming&label_name[]=group%3A%3Aimport%20and%20integrate)
- コントリビューションガイド
  - [インポーター設計の原則](https://docs.gitlab.com/ee/development/import/principles_of_importer_design/)
  - [Direct Transfer へのコントリビューション](https://docs.gitlab.com/ee/development/bulk_imports/contributing/)
    - [フィードバック Issue](https://gitlab.com/gitlab-org/gitlab/-/issues/456468)
- オンボーディングビデオ（GitLab Unfiltered Youtube）
  - [Direct Transfer](https://www.youtube.com/watch?v=vVQ6Ex9fSl8)（以前は GitLab Migration として知られていた）
  - [GitHub インポーター入門](https://www.youtube.com/watch?v=TxHopzXop5s)
  - [ファイルベース GitLab Import/Export](https://www.youtube.com/watch?v=A4kdpnbhmcw)
  - [リモート S3 インポートの例](https://www.youtube.com/watch?v=I85SXNmiS_k)
