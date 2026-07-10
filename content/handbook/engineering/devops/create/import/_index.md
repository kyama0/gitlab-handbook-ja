---
title: Import グループ
description: Import グループはマイグレーションを支援します。
upstream_path: /handbook/engineering/devops/create/import/
upstream_sha: 2e7a8730e4bbae1125f2d28ea6f22b445742c723
translated_at: "2026-07-10T21:27:59+09:00"
translator: claude
stale: false
lastmod: "2026-07-10T14:34:15+10:00"
---

## 概要

Import グループは [Create ステージ](/handbook/engineering/devops/create/)の一部です。
このグループは、GitLab インスタンス間および他のプロバイダーからのマイグレーションを行うことで製品をサポートしています。

このページでは Import グループ固有のプロセスと情報をカバーします。[グループの方向性ページ](https://about.gitlab.com/direction/create/import/)および[カテゴリーごとにサポートする機能](/handbook/product/categories/#import-group)も参照してください。

## 連絡方法

Import グループに連絡を取るには、[GitLab プロジェクト](https://gitlab.com/gitlab-org/gitlab)で
イシューを作成し、`~"group::import"` ラベルとその他の[適切なラベル](#issue-labels)を付けるのがおすすめです。その後、
関連するプロダクトマネージャーやエンジニアリングマネージャーに気軽にメンションしてください。

より緊急性の高い案件については、Slack チャンネル（社内）[`#g_import`](https://gitlab.slack.com/archives/g_import)を利用してください。

## チームメンバー

以下の人々はこのグループの常任メンバーです。

{{< engineering/stable-counterparts role="Create:Import" >}}

## 作業

各マイルストーンの 1 週間前に、エンジニアリングマネージャーがチームの優先事項をまとめた
[計画イシュー](https://gitlab.com/gitlab-org/gitlab/-/work_items?sort=closed_at_desc&state=opened&label_name%5B%5D=Planning%20Issue&label_name%5B%5D=group%3A%3Aimport&first_page_size=100)
を作成します。チームメンバーは通知を受け、マイルストーンに対する自分のコミットメントで
イシューを更新していきます。

### イシュー開発ワークフロー

標準の GitLab [エンジニアリングワークフロー](/handbook/engineering/workflow/)を使用しています。

### イシューボード

Import グループの作業は、以下の場所で追跡できます。

- [Import 現在のマイルストーン](https://gitlab.com/groups/gitlab-org/-/boards/1459244?milestone_title=Upcoming&milestone_title=Started&label_name%5B%5D=group%3A%3Aimport&group_by=epic)（マイルストーンフィルターを現在のマイルストーンに手動で調整してください）
- [計画イシュー](https://gitlab.com/gitlab-org/gitlab/-/work_items?sort=closed_at_desc&state=opened&label_name%5B%5D=Planning%20Issue&label_name%5B%5D=group%3A%3Aimport&first_page_size=100)
- [計画イシューのエピック](https://gitlab.com/groups/gitlab-org/-/work_items?sort=created_date&state=opened&label_name%5B%5D=Planning%20Issue&label_name%5B%5D=group%3A%3Aimport&type%5B%5D=epic&first_page_size=100)

### イシューラベル {#issue-labels}

発見しやすくするため、イシューに正しいラベルを付けてください。

すべてのイシューには以下が必要です。

- `~"group::import"`（ボットがステージとセクションのラベルを適切に付与します）
- 1 つ以上のカテゴリーラベル:
  - `~"Category:Importers"`（FIXME: 現在、ボットがすべてのイシューにこのカテゴリーを強制的に付与しています）
  - `~"Category:Webhooks"`
- [タイプラベル](/handbook/product/groups/product-analysis/engineering/metrics/#work-type-classification)
- [ワークフローラベル](/handbook/engineering/workflow/#updating-workflow-labels-throughout-development)
- 該当する場合は `~"backend"` または `~"frontend"`

インポーターに関連するイシューには、`Importer:` ラベルも付けてください。例: `~"Importer:GitHub"` または `~"Importer:Direct Transfer"`。

### バックログのリファインメント

エンジニアは通常、自分が取り組む予定のイシューをリファインメントします。ただし、特にコミュニティコントリビューターが
取り組む可能性がある場合は、誰でもイシューをリファインメントして開発の準備を整えることができます。

イシューがエピックの一部である場合、DRI がそれをリファインメントするか、そのエピックに
アサインされたエンジニアにリファインメントを委任できます。誰がリファインメントを行うかにかかわらず、
マイルストーンが始まる前にリファインメントを完了することを目指してください。

遅くとも、エンジニアリングマネージャーが次のマイルストーンの計画イシューを共有する時点
（現在のマイルストーン終了の 1 週間前に行われます）でリファインメントを開始すべきです。

#### リファインメント対象イシューの特定

エンジニアリングマネージャーがイシューをスケジュールし、それらがマイルストーン計画イシューに含まれます。

マイルストーンにおける各エンジニアの割り当てに基づき、`Ready for Development` ステータスでないイシューを特定します。
これらは通常 `Refinement` または `Planning breakdown` ステータスですが、任意の
[プロダクト開発フロー](/handbook/product-development/how-we-work/product-development-flow/)
ステータスを取り得ます。

`Ready for Development` だが何か月も前にリファインメントされたイシューは、コードベース、製品、または
アーキテクチャの方向性の変更に焦点を当てて、再度リファインメントすべきです。

#### イシューのリファインメント

Create ステージの[クロスチーム計画とリファインメント](/handbook/engineering/devops/create/#cross-team-planning-and-refinement)のガイドライン、特に[リファインメント](/handbook/engineering/devops/create/#refinement)および[実装計画](/handbook/engineering/devops/create/#implementation-plan)のセクションに従ってください。

Import グループでは、イシューがそれらのガイドラインに加え、以下の Import 固有の要件を満たした場合にリファインメント済みとみなされます。

- 重み付け（`type::bugs` の場合は任意）
- 別のエンジニアによるピアレビュー（重み 1 のイシューの場合は任意）。レビュー済みであることを示すため、レビュアーはコメントを残すか、イシューを `Ready for development` に移動できます
- `Ready for development` ステータス

**バグの準備状態**

バグは、取り組む前に完璧に理解されている必要はないため、重みも不要です。

バグを完全に理解する労力は、しばしばそれを修正する労力の大半を占めます。したがって、
バグイシューで提案された解決策は、欠陥に対する不完全な理解に基づいて行われた
**提案**とみなされる場合があります。

少なくとも以下を含めるようにしてください。

- 再現手順
- 現在の挙動
- 期待される正しい挙動

[バグテンプレート](https://gitlab.com/gitlab-org/gitlab/-/blob/master/.gitlab/issue_templates/Bug.md?ref_type=heads)
にはこれらのフィールドが含まれています。

### ヘルプの依頼

サポート組織の一員でない場合は、まずサポートチームに連絡することをおすすめします。彼らはより多くの空き時間があり、一般的なほとんどの問題に対応できるためです。参加してフォローし、質問できる専用の Slack チャンネル [#spt_pod_import](https://gitlab.enterprise.slack.com/archives/C052K0Z1F8T) があります。ただし、顧客の問題を解決するために深い技術的知識が必要となり、チームのエンジニアの関与が必要になる場合もあります。

エンジニアリングチームにヘルプを依頼する前に、まず関心のあるトピックについて [GitLab ドキュメント](https://docs.gitlab.com/)と以下に挙げる追加リソースを確認してください。

- [インポーターランブック](https://gitlab.com/gitlab-org/foundations/import-and-integrate/team/-/blob/main/importers/runbook.md?ref_type=heads)
- [GitLab ログ分析ツール](https://gitlab.com/gitlab-org/foundations/import-and-integrate/gitlab-logs-analysis)
- [Jira プレイリスト](https://www.youtube.com/playlist?list=PL05JrBw4t0Koazgli_PmMQCER2pVH7vUT)

上記のリソースで質問の答えが見つからない場合は、[ヘルプ依頼（RFH）イシュー](https://gitlab.com/gitlab-com/request-for-help/-/issues/new?issuable_template=SupportRequestTemplate-Import)を作成し、`SupportRequestTemplate-Import` テンプレートを使用してください。チームに連絡する前に、必要な情報をすべて提供してください。そうでない場合、私たちはあなたの依頼を進めることができません。新しいイシューは、社内のトリアージプロセスに従って優先順位付けされます。私たちは、現在のバージョンおよび直近の 2 つのマイナー GitLab バージョン（N-2）に影響するイシューの依頼のみをサポートできることにご注意ください。それより古いバージョンの修正は提供できません。これは[バックポートのメンテナンスポリシー](https://docs.gitlab.com/ee/policy/maintenance.html#patch-releases)に沿ったものです。

### マイルストーンドクター

各マイルストーンで、チームの 2 名のバックエンドエンジニアにマイルストーンドクターの役割が割り当てられ、1 名はプライマリ、もう 1 名はセカンダリとなります。割り当ては[マイルストーンドクターのローテーションスケジュール](https://gitlab.com/groups/gitlab-org/-/work_items/21520#milestone-doctor---rotation-schedule)にあります。エンジニアは今後のシフトを自由に交換し、スケジュールを更新できます。

セカンダリドクターは、プライマリが OOO またはキャパシティを超えている場合に、同じ責任を引き受けて代行します。それ以外の場合は、マイルストーンで計画されたタスクに取り組みます。プライマリドクターは、OOO になるときやキャパシティの問題に直面しているときにセカンダリに知らせるべきです。

プライマリドクターのマイルストーンキャパシティは 100% この役割の責任に割り当てられます。何も残っていない場合、エンジニアは `~type::maintenance` または `~type::bug` イシューに取り組み、コードレビューのキャパシティを増やすことを検討すべきです。

現在のドクターは `@gitlab-com/create-team/import/reaction-rotation` でタグ付けできます。

#### 責任

- 新しい [RFH イシュー](https://gitlab.com/gitlab-com/request-for-help/-/issues/?sort=popularity&state=opened&label_name%5B%5D=Help%20group%3A%3Aimport&first_page_size=100)についてサポートおよび PS と連携する
- 長期間オープンなイシューをフォローアップする
- 顧客との通話でサポートチームを支援する
- マイルストーンドクターが問題を診断することに成功した方法に関するチームランブックのドキュメントを維持する
- チームの Slack チャンネル [`#g_import`](https://gitlab.enterprise.slack.com/archives/C04RDL3MEH5) での質問に対応する
- シフトから学んだことで [FAQ](https://gitlab.com/gitlab-org/foundations/import-and-integrate/team/-/blob/main/importers/faq.md?ref_type=heads) を更新する
- [インポーターの依存関係](#importer-dependencies)をレビューし、サードパーティ API の変更による
  必要な変更のためのイシューを作成する
- エラーがないか [`#import_exceptions`](https://gitlab.enterprise.slack.com/archives/C061EPC0RST) と [Direct Transfer Kibana Dashboard](https://log.gprd.gitlab.net/app/dashboards#/view/f2640580-a8bd-11ed-85ed-e7557b0a598c) を監視し、必要に応じてトリアージ、エスカレーション、フォローアップ Issue の作成を行う
- マイルストーンごとに 1 回、[エラーバジェット](#error-budgets)をレビューし、リグレッションを調査して、見つかった問題についてフォローアップ Issue を作成する
- マイルストーンの終わりに [`@gitlab-com/create-team/import/reaction-rotation` のメンバーシップ](https://gitlab.com/groups/gitlab-com/create-team/import/reaction-rotation/-/group_members?with_inherited_permissions=exclude)を更新する

##### インポーターの依存関係 {#importer-dependencies}

マイルストーンごとに 1 回、各インポーターの依存関係の変更履歴をレビューし、今後の破壊的変更や
API の非推奨化を確認します。[GitLab Duo Chat](https://docs.gitlab.com/user/gitlab_duo_chat/) を使用して
影響を評価し、更新が必要な変更については関連する `~"Importer:"` ラベルを付けたイシューを作成します。

レビュー後、計画イシューにサマリーと作成したイシューへのリンクを含むコメントを残します。
注目してもらうために EM をタグ付けします。

<details>
<summary>推奨プロンプト</summary>

`[START_DATE]` を、依存関係を最後に確認した日付に置き換えてください。

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
3. A summary of the required change (for changes that do not affect us, simply provide a link to
   the announcement)
4. The due date or enforcement date

If no actionable changes are found, confirm that and note the date range you checked.
```

</details>

### セキュリティとの連携

このグループには、セキュリティに影響を及ぼす可能性のあるイシューを特定するのに役立つ既存の[脅威モデル](https://gitlab.com/gitlab-com/gl-security/product-security/appsec/threat-models/-/blob/master/gitlab-org/gitlab/GitLab%20Migration.md)がありますが、他にも考慮すべき点があります。

イシューや MR がセキュリティに影響を及ぼす可能性がある場合、[アプリケーションセキュリティレビュー](/handbook/security/product-security/security-platforms-architecture/application-security/appsec-reviews/)を依頼すべきです。これには以下が含まれますが、これらに限りません。次のようなイシューや MR です。

- 脅威モデルに該当するもの
- バイナリファイルを扱うもの（ダウンロード、展開、抽出、移動、削除）
- ファイル操作サービスを変更または使用するもの
- Import/Export の `CommandLineUtil` のメソッドを使用するもの

### 長期間存続するフィーチャーフラグ

これは、フィーチャーフラグの使用に関する GitLab の一般的な[開発ガイダンス](https://docs.gitlab.com/ee/development/feature_flags/)の補足です。[`ops` タイプ](https://docs.gitlab.com/ee/development/feature_flags/#ops-type)を除くすべてのフラグタイプに適用されます。

Import 機能の変更は、しばしばトラフィックの多いコードパスで発生し、過去に GitLab.com の障害を
引き起こしてきました。障害はしばしばリソースの競合に関係しており、コードレビューや QA テストで事前に
把握するのが難しい場合があります。

- 大規模なインポートは数千のワーカーをトリガーすることがあります。
- インテグレーションと Webhook は 1 日に数百万回実行されます。
- 競合の問題は、すぐには表面化せず、大規模な顧客が新しいコードパスをトリガーしたときにのみ現れることがあります。

このため、フィーチャーフラグを通常よりも長い期間コードベースに残すことを優先すべきです。
この期間中、フラグはデフォルトで有効ですが、インシデントの際にすばやく無効化できます。

過去には、機能を無効化することで複数のインシデントを迅速に緩和できました。

- [2023-09-21: グループインポートにより CI パイプラインでユーザーのなりすましが可能に](https://gitlab.com/gitlab-sirt/shared-incidents/incident_4304/-/issues/1)
- [2023-10-30: GitLab.com がダウン](https://gitlab.com/gitlab-com/gl-infra/production/-/issues/17054)
- [2024-01-30: Sidekiq Apdex SLO](https://gitlab.com/gitlab-com/gl-infra/production/-/issues/17504)

インポーター、インテグレーション、または Webhook 内の変更については、以下を優先すべきです。

1. 通常どおり `/chatops` でフラグをロールアウトする。
1. スケールでの問題を事前に洗い出すため、大規模なデータを使用して変更を QA する。
   インポーターについては、ヒントについて[私たちのランブック](https://gitlab.com/gitlab-org/manage/import-and-integrate/team/-/blob/main/importers/runbook.md)
   を参照してください。
1. 機能をリリースする段階になったら、フィーチャーフラグを削除するのではなく `default_enabled: true`
   に変更します。これはフラグロールアウトイシューにおける
   [任意のフラグ付きでの機能リリース](https://gitlab.com/gitlab-org/gitlab/-/blob/e730c474ed80143ebae33df90900b342020ad7c0/.gitlab/issue_templates/Feature%20Flag%20Roll%20Out.md?plain=1#L83)
   のステップです。
1. この時点で、機能はマイルストーン内でリリースされたとみなされ、Self-Managed 顧客に出荷されるため、リリースポストで
   発表できます。
1. フラグがコードベースに存在しつつデフォルトで有効なままの状態を **1〜3 週間待ちます**。
   競合がより多い領域での変更や、何らかの理由で問題の検出に時間がかかると感じる場合は、より長い期間を
   使用してください。
1. その期間の後、フィーチャーフラグを削除してフラグロールアウトプロセスを完了します。

### リリース中

- Kickoff 後にイシューがリリースに導入される場合、計画外の作業を考慮するために同じ量の重みを取り除く必要があります。
- イシューは見積もりが行われ、重みが付けられる前に開発を開始すべきではありません。
- 15 日までに、エンジニアリングのマージリクエストはマージされているべきです。言い換えれば、15 日以降にマージされたコードはリリースに含まれないと想定します。これにより、リリースを最終化し、関連する[リリースポスト](https://docs.gitlab.com/development/documentation/release_notes/)を 17 日までにマージする時間が確保されます。（これは [13.11 から開始された実験](https://gitlab.com/gitlab-org/manage/general-discussion/-/issues/17330)です。）

### リリースポスト

より詳細に発表する必要があるイシューについては、そのイシューを使用してリリースポストを自動的に作成できます。
イシューに取り組む際、計画段階でも、設計・開発中でも、
[リリースノートライターエージェント](https://gitlab.com/components/agents-and-flows/release-notes-writer)
を使用して、リリースポストを作成し、関連するすべての人に通知できます。

イシューにリリースポストを持たせたくない場合は、そのイシューに
リリースノートのセクションがないこと、または `release post item::` ラベルを使用しないことを確認してください。

### 概念実証 MR

私たちは[イテレーション](/handbook/values/#iteration)と小さな増分で価値を届けることを強く信じています。イテレーションは難しいことがあり、特に製品コンテキストが不足している場合や、コードベースの特にリスクが高い／複雑な部分で作業している場合はそうです。イシューの見積もりや実現可能性の判断に苦労している場合、まず概念実証（PoC）MR を作成するのが適切かもしれません。概念実証 MR の目的は、計画中の大きな前提を取り除き、早期のフィードバックを提供することで、将来の実装のリスクを軽減することです。

- `PoC:` を接頭辞に付けた MR を作成します。
- PoC MR が解決しようとしている問題を MR の説明で説明します。
- タイムボックスを設けます。2〜3 日未満で実現可能性や計画を判断できますか？
- この期間の終わりにフィードバックを提供するレビュアーを特定します。
- MR をクローズします。製品およびパフォーマンスへの影響を含め、PoC から学んだことを元のイシューにサマリーとして提供します。
  - 実装に進めるかどうかを述べます。
  - イシューはクローズしないでください。

概念実証 MR の必要性は、私たちのコードベースや製品の一部が過度に複雑になっていることを示唆している可能性があります。将来このステップを回避する方法を議論できるよう、レトロスペクティブの一環として MR について議論する価値が常にあります。

### レトロスペクティブ

定期的にスケジュールされた「マイルストーンごと」のレトロスペクティブが 1 回あり、アドホックな「プロジェクトごと」のレトロスペクティブを行うこともできます。

#### マイルストーンごと

Import グループは [GitLab イシューでマイルストーンレトロスペクティブ](https://gitlab.com/gl-retrospectives/manage-stage/import/-/work_items)を実施しています。これには、エンジニア、UX、PM、および
マイルストーン中にそのチームと協働したすべての安定したカウンターパートが含まれます。

すべてのマイルストーンで私たちのチームメンバーの参加が強く推奨されます。

これらは最初の議論中は機密扱いとされ、その後、毎月の [GitLab レトロスペクティブ](/handbook/engineering/careers/management/group-retrospectives/)に間に合うように公開されます。詳細については、[グループレトロスペクティブ](/handbook/engineering/careers/management/group-retrospectives/)を参照してください。

#### プロジェクトごと

特定のイシュー、機能、またはその他の種類のプロジェクトが
特に有用な学びの経験になった場合、それから学ぶために同期または
非同期のレトロスペクティブを行うことがあります。取り組んでいる何かが
レトロスペクティブに値すると感じた場合は、

1. レトロスペクティブを行いたい理由を説明する[イシューを作成](https://gitlab.com/gitlab-org/manage/import-and-integrate/discussions/-/issues)し、これが同期か非同期かを示します。
1. EM および関与すべきその他の人（PM、カウンターパートなど）を含めます。
1. 該当する場合は同期ミーティングを調整します。

レトロスペクティブからのすべてのフィードバックは、参照目的で最終的にイシューに集約されるべきです。

### テックリード

私たちのグループは、さまざまなトピックに関する作業を整理し、それらの DRI を特定するのを助けるためにテックリードと協働しています。

#### テックリードの特徴

テックリードとは、

- 追加の責任を持つ個人コントリビューターです。シニアリティに関わらず、すべてのエンジニアがテックリードになる資格があります。
- 特定のトピック／プロジェクトに紐づく一時的な役割です。異なるトピック／プロジェクトのために、チームが同時に複数のテックリードを持つことを許可しています。
- マネージャーでは**ありません**。
- 追加のシニアリティレベルでは**ありません**。

テックリードの役割は、リーダーシップスキルの習得に関心のあるエンジニアに成長の機会を提供します。

#### テックリードの責任

テックリードは多くの役割を担います。その責任はプロジェクトごとに異なる場合がありますが、以下を含むことがあります。

- 技術的ビジョンとアーキテクチャ - 特定のプロジェクトの全体的な技術アーキテクチャを定義し、進化させる
- 技術的ガイダンス - チームの他の開発者に技術的ガイダンスとメンタリングを提供する
- 作業の計画と優先順位付け - 大きなタスクを小さく実行可能なアイテムに分解して作業を整理する
- 進捗の追跡 - コミットメントの進捗を追跡し、ステータス更新を報告する
- リスク管理 - 成果物に影響を及ぼす可能性のある技術的リスクを特定、評価、管理する
- 調整 - 他者の作業を監督し、ブロッカーの除去を支援する
- 技術ドキュメント - 他の開発者のために技術アーキテクチャとコード構造のドキュメントを維持する

#### 現在のテックリード

以下は、テックリードによって監督されているトピックの概要です。

| トピック | テックリード | トピックリンク | 備考 |
| ------ | ------ | ------ | ------ |
| Direct Transfer - ユーザーコントリビューションマッピング | Rodrigo Tomonari | [エピック](https://gitlab.com/groups/gitlab-org/-/epics/12378) | - |
| インポーターへの開発者コントリビューションの効率を改善する | James Nutt | [OKR](https://gitlab.com/gitlab-com/gitlab-OKRs/-/work_items/6658) | - |
| Congregate | tbd | https://gitlab.com/gitlab-org/gitlab/-/issues/428657 | |
| GitHub Actions | tbd | https://gitlab.com/gitlab-org/manage/general-discussion/-/issues/17652 | |
|  | | |  |

## マージリクエストのルーレットレビュー

Import コードベースの領域が変更されると、[レビュアールーレット](https://docs.gitlab.com/ee/development/code_review.html#reviewer-roulette)
が、そのマージリクエストを Import チームメンバーがレビューすることを推奨します。これは、Import チーム外の人々によって
作成されたマージリクエストの場合にのみ発生します。レビュー推奨がどのように見えるかは[この例](https://gitlab.com/gitlab-org/gitlab/-/merge_requests/74338#note_731247058)を参照してください。

これらの特別な推奨の[理由](https://gitlab.com/gitlab-org/gitlab/-/issues/343486)は、
他のグループが特定のインテグレーションや Webhook の一部の所有権を持っているためです。
チーム外のメンバーによる変更をレビューすることで、基盤コードの所有者として行動し、
Import コードベースのより良い品質を維持できます。

### ルーレットマッチの仕組み

マージリクエスト内の変更のファイルパスは、
[正規表現のリスト](https://gitlab.com/gitlab-org/gitlab/-/blob/240d4c37c955878c224718e47f4d527bea250299/tooling/danger/project_helper.rb#L42-62)
と照合されます。ルーレットはこれらのハッシュ値を使用してレビュアーグループを推奨します。例えば、`:import_integrate_be` と
`:import_and_integrate_fe` はそれぞれ Import のバックエンドとフロントエンドのレビューを推奨します。正規表現のマッチは
[最初のマッチが優先](https://gitlab.com/gitlab-org/gitlab/-/blob/54e182410219d1c77c5c6b2b7c88a6639f622cc6/tooling/danger/project_helper.rb#L18)
であり累積的ではないため、`:backend` や `:frontend` などの他の関連するレビュアーグループも
各ハッシュ値に含める必要があります。

正規表現リストは、必要に応じてインテグレーションや Webhook のコードに一致するように更新すべきです。リストは私たちの
一般的に名前空間化されたファイルに一致するため、既存の名前空間内の新しいコードは常に一致します。

GitLab リポジトリ内のどのファイルがマッチを生成するかを確認するには、以下を Rails コンソールに貼り付けてください。

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

これは、私たちの機能を監視するためのリンク集です。

### Grafana ダッシュボード

- [Import グループダッシュボード](https://dashboards.gitlab.net/d/stage-groups-import_and_integrate/stage-groups-import-and-integrate-group-dashboard?orgId=1)。以下を含みます。
  - 私たちの機能カテゴリーにフィルタリングされたさまざまな Kibana ログへのリンク
  - 私たちの[エラーバジェット](#error-budgets)消費の帰属
- [ワーカーキュー](https://dashboards.gitlab.net/d/sidekiq-queue-detail/sidekiq-queue-detail?orgId=1&var-PROMETHEUS_DS=Global&var-environment=gprd&var-stage=main&var-queue=jira_connect:jira_connect_sync_branch)。`queue` ドロップダウンでキューを切り替えられます

### Sentry エラー

- [「IntegrationsController」に一致](https://new-sentry.gitlab.net/organizations/gitlab/issues/?project=3&query=is%3Aunresolved+IntegrationsController&referrer=issue-list&statsPeriod=14d)
- [「Integrations」に一致](https://new-sentry.gitlab.net/organizations/gitlab/issues/?project=3&query=is%3Aunresolved+Integrations&referrer=issue-list&statsPeriod=14d)
- [「Jira」に一致](https://new-sentry.gitlab.net/organizations/gitlab/issues/?project=3&query=is%3Aunresolved+Jira&referrer=issue-list&statsPeriod=14d)

### Kibana ダッシュボード

[すべての Import Kibana ダッシュボードのリスト](https://log.gprd.gitlab.net/app/dashboards#/list?s=tag:(group::import)&sort=title&sortdir=asc)を参照してください。

インポーターダッシュボード:

- [Project Import/Export](https://log.gprd.gitlab.net/app/dashboards#/view/03a11c50-ba46-11ec-b73f-692cc1ae8214)
- [GitHub Import - 概要](https://log.gprd.gitlab.net/app/dashboards#/view/62965d10-9c0e-11ed-9f43-e3784d7fe3ca)
- [GitHub Import - プロジェクトインポートデバッグ](https://log.gprd.gitlab.net/app/dashboards#/view/be0fb6d0-9c24-11ed-85ed-e7557b0a598c)
- [GitLab Direct Transfer](https://log.gprd.gitlab.net/app/dashboards#/view/f2640580-a8bd-11ed-85ed-e7557b0a598c)
- [ユーザーコントリビューションマッピング](https://log.gprd.gitlab.net/app/dashboards#/view/f9c66d73-50a1-43e2-89ab-56b71645df33)

API/Webhook ダッシュボード:

- [REST および GraphQL API](https://log.gprd.gitlab.net/app/dashboards#/view/ee792100-cfc7-11ec-afaf-2bca15dfbf33)
- [Webhook](https://log.gprd.gitlab.net/app/dashboards#/view/deec2320-3914-11ed-b86b-d963a1a6788e)

### Kibana ログ

GitLab for Jira Cloud アプリのワーカー:

- [`JiraConnect::SyncMergeRequestWorker`](https://log.gprd.gitlab.net/goto/309f97d4a5c3e918e2c07754fefc94ee) エラー。
- [`JiraConnect::SyncBranchWorker`](https://log.gprd.gitlab.net/goto/96364e957898896c4dc7e9ee5534b6de) エラー。
- [`JiraConnect::SyncProjectWorker`](https://log.gprd.gitlab.net/goto/5f0e03847ddc1b074d6346199c8bc4d2) エラー。
- [すべての JiraConnect sync ワーカー](https://log.gprd.gitlab.net/goto/39348f2d169e6929c41dba2d6fb063ee)のタイムアウトエラー。

### エラーバジェット {#error-budgets}

GitLab は[エラーバジェット](/handbook/engineering/error-budgets/)を使用して、私たちの機能の可用性とパフォーマンスを測定します。
各エンジニアリンググループには独自のバジェット消費があります。Import チームの現在の 28 日間の消費は、
この [Grafana ダッシュボード](https://dashboards.gitlab.net/d/stage-groups-import/stage-groups-import-group-dashboard?orgId=1)に表示されます。

エラーバジェットの消費は、以下のいずれかが一定のしきい値を超えると発生します。

- エンドポイントまたはワーカーのエラー率
- エンドポイントの Apdex（レイテンシー）

#### 最も影響の大きい修正を特定する

[Grafana ダッシュボード](https://dashboards.gitlab.net/d/stage-groups-import_and_integrate/stage-groups-import-and-integrate-group-dashboard?orgId=1)で最も優先度の高い問題を特定するには、

1. **Error budget** パネルに移動します。
1. **Budget spend attribution** を展開します。**Budget failures** パネルは、上位の失敗順に並べられています。
1. **Failure log links** で、対応するリンクをクリックします。

上位の原因を修正することで、バジェット消費に最大の影響を与えられます。

#### さらなるリソース

これらのリソースでエラーバジェットについてさらに学べます。

- [エラーバジェットとその計算方法](/handbook/engineering/error-budgets/)
- [Apdex とは何か、その仕組み](https://docs.gitlab.com/ee/development/application_slis/rails_request.html)
- [Grafana ダッシュボードのエラーバジェット](https://docs.gitlab.com/ee/development/stage_group_observability/index.html#error-budget)
- [機能のカテゴリー化](https://docs.gitlab.com/ee/development/feature_categorization/): 私たちのコードは `feature_category: :integrations`、`feature_category: :importers`、`feature_category: :webhooks` によって私たちに帰属されます

## 使用状況データダッシュボード

機能の使用状況データは Tableau で確認できます。

- [一元化されたプロダクト使用状況メトリクスダッシュボード](https://10az.online.tableau.com/#/site/gitlab/views/DRAFTCentralizedGMAUDashboard/MetricReporting?:iid=1)は、選択した任意のメトリクスを観察するために使用できます。例えば Microsoft Teams インテグレーションのデータを見るには、左側の `Select Metric Level` で `PI` を選択し、`Select Metrics to view` でまず `All` のチェックを外してから `microsoft` を検索し、関心のある Microsoft Teams インテグレーションのメトリクスをチェックします。[例](https://10az.online.tableau.com/t/gitlab/views/DRAFTCentralizedGMAUDashboard/MetricReporting/8c7d8afd-ffc7-4198-b11a-6099df2b8611/3170c5bb-4509-4b3d-8362-470e49286d42)を参照してください。期間や `Dimention Paremeter`（例: デプロイメントタイプ）を選択できます。他の例として、[GitHub インポーター](https://10az.online.tableau.com/t/gitlab/views/DRAFTCentralizedGMAUDashboard/MetricReporting/57ab6fbb-7d64-4ab9-ac36-dfcfbd891c69/1e04a888-66de-44c8-b722-1c31e214b8db)や[デプロイメント別の Webhook 使用状況](https://10az.online.tableau.com/t/gitlab/views/DRAFTCentralizedGMAUDashboard/MetricReporting/ef4c4285-1a54-4769-86d7-60331b44a10a/0fa98245-8e1c-4db1-82f3-2591e310aa3d)があります
- [インテグレーション使用状況ダッシュボード](https://10az.online.tableau.com/#/site/gitlab/views/ManageIntegrationsUsage/ServicePingResults?:iid=1)は、インテグレーションのすべての使用状況を表示します。右側で特定のインテグレーションをフィルターイン／アウト（保持のみまたは除外）できます。
- [インポーター使用状況ダッシュボード](https://10az.online.tableau.com/#/site/gitlab/workbooks/2214374/views)。これはまだ作業中です。
- [ユーザーコントリビューションマッピング使用状況ダッシュボード](https://10az.online.tableau.com/#/site/gitlab/workbooks/3238494/views)は、インポート中に作成されたプレースホルダーユーザーに関するデータを表示します。

## リンクとリソース {#links}

{{% include "includes/engineering/foundations/shared-links.md" %}}

- [マイルストーンレトロスペクティブ](https://gitlab.com/gl-retrospectives/manage-stage/import/-/work_items)
- 私たちの Slack チャンネル
  - Create:Import [#g_import](https://gitlab.slack.com/archives/C04RDL3MEH5)
  - デイリースタンドアップ [#g_import_daily](https://gitlab.slack.com/archives/C04UYQV7716)
- イシューボード
  - [現在のマイルストーンボード](https://gitlab.com/groups/gitlab-org/-/boards/1459244?milestone_title=Upcoming&label_name[]=group%3A%3Aimport%20and%20integrate)
- コントリビューションガイド
  - [インポーター設計の原則](https://docs.gitlab.com/ee/development/import/principles_of_importer_design/)
  - [Direct Transfer へのコントリビューション](https://docs.gitlab.com/ee/development/bulk_imports/contributing/)
    - [フィードバックイシュー](https://gitlab.com/gitlab-org/gitlab/-/issues/456468)
- オンボーディング動画（GitLab Unfiltered Youtube）
  - [Direct Transfer](https://www.youtube.com/watch?v=vVQ6Ex9fSl8)（旧称 GitLab Migration）
  - [GitHub インポーターの紹介](https://www.youtube.com/watch?v=TxHopzXop5s)
  - [ファイルベースの GitLab Import/Export](https://www.youtube.com/watch?v=A4kdpnbhmcw)
  - [リモート S3 インポートの例](https://www.youtube.com/watch?v=I85SXNmiS_k)
