---
title: Import グループ
description: Import グループはマイグレーションを支援します。
upstream_path: /handbook/engineering/devops/create/import/
upstream_sha: eb9c7122b4259a2111ed65628e5384768922a597
translated_at: "2026-05-06T00:00:00Z"
translator: claude
stale: false
---

## 概要

Import グループは [Create ステージ](/handbook/engineering/devops/create/)の一部です。
このグループは、GitLab インスタンス間および他のプロバイダーからの移行によってプロダクトを支えています。

このページは Import グループに固有のプロセスと情報を扱います。
[グループ方針ページ](https://about.gitlab.com/direction/create/import/)と
[カテゴリーごとにサポートする機能](/handbook/product/categories/features/#import-and-integrate)も併せて参照してください。

## 連絡方法

Import グループに連絡を取るには、関連するプロジェクト（通常は [GitLab](https://gitlab.com/gitlab-org/gitlab)）に Issue を作成し、`~"group::import"` ラベルとその他の[適切なラベル](#issue-labels)を付与するのが最善です。
そのうえで、関連するプロダクトマネージャーやエンジニアリングマネージャーに気軽に ping してください。

より緊急性の高い案件については、Slack チャンネル（社内）の [#g_import](https://gitlab.slack.com/archives/g_import) をご利用ください。

## チームメンバー

以下のメンバーがグループの恒久的なメンバーです。

{{< engineering/stable-counterparts role="Create:Import" >}}

## メトリクス

エンジニアリングメトリクスダッシュボードは[こちら](/handbook/product/groups/product-analysis/engineering/dashboards/#dashboards)で確認できます。

## 作業

プロダクトマネージャーはマイルストーンの優先度ラベルを使い、チーム、エンジニアリングマネージャー、その他のステークホルダーからのインプットを踏まえて[プロダクトの優先順位付けプロセス](/handbook/product/product-processes/#prioritization)に従い、Deliverable と Stretch の Issue リストをまとめます。
イテレーションサイクルはある月の 18 日から翌月の 17 日までで、リリース予定の GitLab バージョンによって識別されます。

### Issue 開発ワークフロー

基本的に、標準の GitLab [エンジニアリングワークフロー](/handbook/engineering/workflow/)を使用します。

エンジニアリングマネージャー、プロダクトマネージャー、その他のステークホルダーが、現在のマイルストーンに含まれるすべての Issue や、特定の人にアサインされたすべての Issue のステータスを俯瞰する最も簡単な方法は、[現在のマイルストーンボード](https://gitlab.com/groups/gitlab-org/-/boards/1459244?milestone_title=Upcoming&label_name%5B%5D=group%3A%3Aimport%20and%20integrate)を使うことです。各ワークフローラベルごとのカラムが用意されています。

エンジニアはアサインされた Issue のオーナーとして、ワークフローラベルを最新の状態に保つことが期待されます。新しいラベルを手動で付け替えるか、ボード上で Issue を次のカラムへドラッグして更新してください。

エンジニアが Issue に着手したら、出発点として `workflow::in dev` ラベルを付け、開発期間を通じて Issue を更新し続けます。プロセスは基本的に以下のガイドラインに従います。

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

誰かが Issue に着手したものの、1 週間にわたって同じワークフローラベルのままになっている場合は、担当者は Issue の状況を説明するコメントを残す必要があります。Issue が動いていない週には、少なくとも 1 件のコメントを書きましょう。

### Issue ボード

Import グループの作業は、以下の Issue ボードで追跡できます。

- [現在のマイルストーンボード](https://gitlab.com/groups/gitlab-org/-/boards/1459244?milestone_title=Upcoming&label_name[]=group%3A%3Aimport)

### Issue ラベル {#issue-labels}

ラベル管理を健全に保つため、Issue を作成またはトリアージする際は適切なラベルを付与してください。

すべての Issue に必要なもの:

- `~"group::import"`（ボットがステージとセクションのラベルを適切に付与します）
- 1 つ以上のカテゴリーラベル:
  - `~"Category:Importers"`（FIXME: 現状ボットはすべての Issue にこのカテゴリーを強制します）
  - `~"Category:Webhooks"`
- [タイプラベル](/handbook/product/groups/product-analysis/engineering/metrics/#work-type-classification)
- [ワークフローラベル](/handbook/engineering/workflow/#updating-workflow-labels-throughout-development)
- 該当する場合は `~"backend"` または `~"frontend"`

インポーターに関連する Issue には、加えて `Importer:` ラベルを付与してください。例: `~"Importer:GitHub"` や `~"Importer:Direct Transfer"`。

### キャパシティプランニング

私たちはキャパシティプランニングを支援するために、Issue にウェイトを付ける軽量なシステムを使っています。
このウェイトによって、各サイクルで予定する作業量がチーム全体としても、個々のメンバーにとっても妥当であることを担保します。あるサイクルにおける「ウェイト予算」は、チームの直近のアウトプットや、各エンジニアの稼働可能日数を踏まえて決まります。

[物事は思っているより時間がかかる](https://erikbern.com/2019/04/15/why-software-projects-take-longer-than-you-think-a-statistical-model.html)ため、Issue がウェイトより長くかかっても問題ありません。ウェイトは集計的に使うことを意図しており、ある人にとって 1 日でできる作業が、その Issue に関する事前知識の差によっては別の人にとっては 1 週間かかる可能性もあります。**それは明示的に問題なく、想定されています。** 私たちは正確であろうと努めますが、それでも見積もりにすぎないことを忘れないでください！ ウェイトが正確でない場合や、Issue が当初の想定より難しいことが分かった場合は変更してください。ウェイトを変更した理由を示すコメントを残し、EM をタグ付けしてください。これによって、私たちはウェイト付けへの理解を深め、改善を続けられます。

#### ウェイト

私たちが使うウェイトは以下のとおりです。

| ウェイト | 説明  |
| --- | --- | --- |
| 1: 些細 | 問題が非常によく理解されており、追加の調査は不要で、解決策がすでに分かっていてあとは実装するだけ。予期せぬ事態は想定されず、他のチームや人との調整も不要。<br><br>例: ドキュメント更新、すでに調査・議論済みで数行のコードで修正可能な単純な回帰やバグ、対処方法は分かっているがまだ時間が取れていなかった技術的負債など。 |
| 2: 小 | 問題はよく理解されており解決策の概要も描けているが、実装するためには少しだけ追加の調査が必要そう。予期せぬ事態があったとしてもごくわずかで、他のチームや人との調整は不要。<br><br>例: 既存のデータや機能を公開する新しい API エンドポイントのような単純な機能、ある程度調査が進んでいる通常のバグやパフォーマンス Issue。 |
| 3: 中 | よく理解されており、比較的素直な機能。解決策の概要が描けており、ほとんどのエッジケースは検討済みだが、解決策の実現には追加の調査が必要。いくらか予期せぬ事態が想定され、他のチームや人との調整が必要になる可能性がある。<br><br>あるいは、相対的に理解が浅く、まだ解決策の提案も無いバグ。重要な調査が必要なのは確実だが、問題が見つかれば解決自体は比較的素直であると見込める。<br><br>例: バックエンドとフロントエンドの両方を伴う通常の機能、ほとんどのバグやパフォーマンス Issue。 |
| 5: 大 | よく理解されているが、難しいことが分かっている機能。解決策の概要は描かれ、主要なエッジケースは検討済みだが、解決策の実現には間違いなく追加の調査が必要。多くの予期せぬ事態が想定され、他のチームや人との調整がほぼ必要。<br><br>あるいは、ほとんど理解されておらず、解決策の提案もないバグ。重要な調査が必要で、問題を見つけても解決策が素直でない可能性がある。<br><br>例: バックエンドとフロントエンドの両方を伴う大きな機能、初期調査は始まっているが再現や「解明」がまだできていないバグやパフォーマンス Issue。 |

5 より大きいものは、可能であれば分割すべきです。

ウェイトは開発時間とレビュー時間の双方を考慮して決めます。

セキュリティ Issue は通常、上記の表から自然に出てくるウェイトより 1 段階高く付けます。これは[パッチリリースプロセス](https://gitlab.com/gitlab-org/release/docs/blob/master/general/security/engineer.md)による余分な厳密さを考慮したものです。
特に、修正には通常より慎重な検討が必要であり、複数のリリースにバックポートする必要もあります。

### バックログのリファインメント

エンジニアは通常、自分が取り組む予定の Issue をリファインします。ただし、コミュニティコントリビューターが取り上げる可能性がある場合などは、誰でも Issue をリファインして開発可能な状態にできます。

Issue がエピックの一部である場合、DRI がリファインを行うか、そのエピックにアサインされたエンジニアにリファインを委譲します。誰がリファインするかにかかわらず、マイルストーン開始前にリファインを完了することを目指します。

遅くとも、エンジニアリングマネージャーが次のマイルストーンの計画 Issue を共有した時点（現在のマイルストーン終了の 1 週間前）でリファインを開始すべきです。

#### リファインメント対象 Issue の特定

エンジニアリングマネージャーが Issue をスケジュールし、それがマイルストーン計画 Issue に含まれます。

各エンジニアのマイルストーンの割り当てを基に、`Ready for Development` ステータスでない Issue を特定します。これらは通常、`Refinement` または `Planning breakdown` ステータスを持ちますが、[プロダクト開発フロー](/handbook/product-development/how-we-work/product-development-flow/)のどのステータスでもあり得ます。

`Ready for Development` ではあるものの、何ヶ月も前にリファインされた Issue は、コードベース・プロダクト・アーキテクチャの方向性の変化を踏まえて再度リファインしてください。

#### Issue のリファインメント

Create ステージの[クロスチームでの計画とリファインメント](/handbook/engineering/devops/create/#cross-team-planning-and-refinement)ガイドラインに従ってください。特に[リファインメント](/handbook/engineering/devops/create/#refinement)と[実装計画](/handbook/engineering/devops/create/#implementation-plan)のセクションが重要です。

Import グループでは、上記のガイドラインに加えて以下の Import 固有の要件を満たした時点で、Issue がリファイン済みとみなされます。

- ウェイト（`type::bugs` ではオプション）
- 別のエンジニアによるピアレビュー（ウェイト 1 の Issue ではオプション）。レビュー済みであることを示すには、レビュアーがコメントを残すか、Issue を `Ready for development` に移動します。
- `Ready for development` ステータス

**バグの準備状態**

バグは取り組む前に完全に理解されている必要はなく、そのためウェイトも不要です。

バグを完全に理解するための労力は、しばしば修正そのものの労力の大部分を占めます。したがって、バグ Issue で提案されている解決策は、欠陥を不完全に理解した上での**示唆**とみなしてもよいでしょう。

少なくとも以下の項目を含めるよう努めてください。

- 再現手順
- 現在の挙動
- 期待される正しい挙動

[Bug テンプレート](https://gitlab.com/gitlab-org/gitlab/-/blob/master/.gitlab/issue_templates/Bug.md?ref_type=heads)にはこれらの項目が含まれています。

### サポートを依頼する

Support 組織のメンバーでない場合、まず Support に相談することをお勧めします。Support の方が稼働量が多く、ほとんどのよくある問題を支援できます。専用の Slack チャンネル [#spt_pod_import](https://gitlab.enterprise.slack.com/archives/C052K0Z1F8T) があるので、参加してフォローし、質問することができます。ただし、お客様の問題を解決するために深い技術的知識が必要となる場合もあり、その際にはチームのエンジニアの関与が必要になります。

エンジニアリングチームに支援を依頼する前に、まず関心のあるトピックの [GitLab ドキュメント](https://docs.gitlab.com/)と、以下に挙げる追加リソースを確認してください。

- [Importer Runbook](https://gitlab.com/gitlab-org/foundations/import-and-integrate/team/-/blob/main/importers/runbook.md?ref_type=heads)
- [GitLab Log Analysis Tool](https://gitlab.com/gitlab-org/foundations/import-and-integrate/gitlab-logs-analysis)
- [Jira playlist](https://www.youtube.com/playlist?list=PL05JrBw4t0Koazgli_PmMQCER2pVH7vUT)

上記のリソースで質問への回答が見つからない場合は、[Request for Help (RFH) Issue](https://gitlab.com/gitlab-com/request-for-help/-/issues/new?issuable_template=SupportRequestTemplate-Import) を作成し、`SupportRequestTemplate-Import` テンプレートを使用してください。チームに連絡する前に、必要な情報をすべて記入してください。そうでないとリクエストを進められません。新しい Issue は、社内のトリアージプロセスに従って優先順位付けされます。私たちがサポートできるのは、現在および直近 2 つのマイナーバージョン（N-2）に影響する Issue のみです。それより古いバージョンに対する修正は提供できません。これは私たちの[バックポートに関するメンテナンスポリシー](https://docs.gitlab.com/ee/policy/maintenance.html#patch-releases)に沿ったものです。

### マイルストーンドクター

各マイルストーンにおいて、チームのバックエンドエンジニア 2 名がマイルストーンドクターの役割を担います。1 名がプライマリ、もう 1 名がセカンダリです。割り当ては[マイルストーンドクターのローテーションスケジュール](https://gitlab.com/groups/gitlab-org/-/work_items/21520#milestone-doctor---rotation-schedule)で確認できます。エンジニアは今後のシフトを自由に交換し、スケジュールを更新できます。

セカンダリのドクターは、プライマリが OOO だったりキャパシティを超えていたりする場合に介入し、同じ責任を担います。それ以外のときは、マイルストーンに計画されているタスクに取り組みます。プライマリのドクターは、自分が OOO になる場合や、キャパシティの問題に直面している場合は、セカンダリにそのことを伝えてください。

プライマリのドクターのマイルストーンキャパシティは、100% 役割の責任に割り当てられます。すべきことが残っていない場合は、エンジニアは `~type::maintenance` または `~type::bug` の Issue に取り組み、コードレビューのキャパシティを増やすことを検討してください。

現在のドクターには `@gitlab-com/create-team/import/reaction-rotation` でタグ付けできます。

#### 責務

- 新しい [RFH Issue](https://gitlab.com/gitlab-com/request-for-help/-/issues/?sort=popularity&state=opened&label_name%5B%5D=Help%20group%3A%3Aimport&first_page_size=100) について Support と PS と連携する
- 長く開いたままの Issue をフォローアップする
- お客様とのコールにおいて Support チームを支援する
- マイルストーンドクターが問題を診断できた方法に関するチームのランブックドキュメントを維持する
- チームの Slack チャンネル [`#g_import`](https://gitlab.enterprise.slack.com/archives/C04RDL3MEH5) で質問に応答する
- シフトで得た学びをもとに [FAQ](https://gitlab.com/gitlab-org/foundations/import-and-integrate/team/-/blob/main/importers/faq.md?ref_type=heads) を更新する
- [インポーターの依存関係](#importer-dependencies)をレビューし、サードパーティ API の変更に伴って必要な変更について Issue を作成する
- マイルストーン終了時に [`@gitlab-com/create-team/import/reaction-rotation` のメンバーシップ](https://gitlab.com/groups/gitlab-com/create-team/import/reaction-rotation/-/group_members?with_inherited_permissions=exclude)を更新する

##### インポーターの依存関係 {#importer-dependencies}

マイルストーンごとに 1 度、各インポーターの依存関係の変更履歴を確認し、近づいている破壊的変更や API の非推奨化を把握してください。[GitLab Duo Chat](https://docs.gitlab.com/user/gitlab_duo_chat/) を使って影響を評価し、更新が必要な変更については、関連する `~"Importer:"` ラベルを付けた Issue を作成します。

レビュー後は、計画 Issue にサマリーと作成した Issue へのリンクを書いたコメントを残してください。EM の注意を引くためにタグ付けします。

<details>
<summary>推奨プロンプト</summary>

`[START_DATE]` を、依存関係を最後にチェックした日付に置き換えてください。

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

グループには既存の[脅威モデル](https://gitlab.com/gitlab-com/gl-security/product-security/appsec/threat-models/-/blob/master/gitlab-org/gitlab/GitLab%20Migration.md)があり、セキュリティ的な影響がありそうな Issue を特定するのに役立ちますが、他にも考慮すべき点があります。

Issue や MR にセキュリティ的な影響がある可能性がある場合、[アプリケーションセキュリティレビュー](/handbook/security/product-security/security-platforms-architecture/application-security/appsec-reviews/)を依頼してください。これには以下のような Issue や MR が含まれます（これに限りません）。

- 脅威モデルに該当するもの
- バイナリファイルを扱うもの（ダウンロード、解凍、抽出、移動、削除）
- ファイル操作サービスを変更したり利用したりするもの
- Import/Export の `CommandLineUtil` のメソッドを使うもの

### 長期間残るフィーチャーフラグ

これは、フィーチャーフラグの利用に関する GitLab 共通の[開発ガイダンス](https://docs.gitlab.com/ee/development/feature_flags/)を補足するものです。[`ops` タイプ](https://docs.gitlab.com/ee/development/feature_flags/#ops-type)以外のすべてのフラグタイプに適用されます。

Import 機能の変更は高トラフィックなコードパスでしばしば発生し、過去には GitLab.com で障害を引き起こしたことがあります。障害はリソース競合に起因することが多く、コードレビューや QA テストでは事前に発見しにくい場合があります。

- 大規模なインポートは数千ものワーカーをトリガーする可能性があります。
- インテグレーションと Webhook は 1 日に何百万回も実行されます。
- 競合の問題はすぐに表面化せず、大規模な顧客が新しいコードパスをトリガーしたときにのみ発覚することがあります。

このため、フィーチャーフラグは通常より長期間コードベースに残しておくことを推奨します。
この間、フラグはデフォルトで有効ですが、インシデント発生時にはすぐに無効化できます。

過去には、機能を無効化することでいくつかのインシデントを迅速に緩和できました。

- [2023-09-21: Group import allows impersonation of users in CI pipelines](https://gitlab.com/gitlab-sirt/shared-incidents/incident_4304/-/issues/1)
- [2023-10-30: GitLab.com is down](https://gitlab.com/gitlab-com/gl-infra/production/-/issues/17054)
- [2024-01-30: Sidekiq Apdex SLO](https://gitlab.com/gitlab-com/gl-infra/production/-/issues/17504)

インポーター、インテグレーション、Webhook 内の変更については、以下の手順を推奨します。

1. 通常どおり `/chatops` でフラグをロールアウトする。
1. 規模感の問題を事前に洗い出すために、大量のデータを使った変更の QA を行う。
   インポーターについては[このランブック](https://gitlab.com/gitlab-org/manage/import-and-integrate/team/-/blob/main/importers/runbook.md)のヒントを参照してください。
1. 機能をリリースする段階で、フィーチャーフラグを削除するのではなく `default_enabled: true` に変更する。これは、フラグロールアウト Issue における[フラグ付きで機能をリリースする（オプション）](https://gitlab.com/gitlab-org/gitlab/-/blob/e730c474ed80143ebae33df90900b342020ad7c0/.gitlab/issue_templates/Feature%20Flag%20Roll%20Out.md?plain=1#L83)のステップにあたります。
1. この時点でその機能はマイルストーン内でリリース済みとみなされ、セルフマネージドのお客様にも届くため、リリース投稿で発表できます。
1. その後、フラグはコードベースに残しつつデフォルトで有効な状態のまま、**1〜3 週間待ちます**。
   競合が発生しやすいエリアの変更や、何らかの理由で問題の検出に時間がかかると感じる場合は、より長い期間を選んでください。
1. その期間が経過したら、フラグを削除してフラグロールアウトプロセスを完了します。

### リリース期間中

- キックオフ後にリリースに Issue を追加した場合は、計画外の作業を相殺するため、同じだけのウェイトを取り除く必要があります。
- 見積もりとウェイト付けが終わるまで、Issue の開発を始めるべきではありません。
- 15 日までに、エンジニアリングのマージリクエストはマージされている必要があります。言い換えれば、15 日以降にマージされたコードはリリースには含まれないものとして扱います。これにより、リリースのファイナライズや、関連する[リリース投稿](/handbook/marketing/blog/release-posts/)を 17 日までにマージするための時間が確保できます。（これは [13.11 から始めた実験](https://gitlab.com/gitlab-org/manage/general-discussion/-/issues/17330)です。）

### リリース投稿

詳細にアナウンスする必要のある Issue については、その Issue を使ってリリース投稿を自動的に作成できます。
Issue に取り組んでいるとき（計画段階でも、設計・開発中でも）、[release post item generator](/handbook/marketing/blog/release-posts/#release-post-item-generator) を使ってリリース投稿を作成し、関係者全員に通知できます。

ある Issue にリリース投稿を作りたくない場合は、その Issue にリリースノートのセクションを置かない、あるいは `release post item::` ラベルを使わないようにしてください。

### 概念実証 MR

私たちは[イテレーション](/handbook/values/#iteration)と、小さな単位で価値を届けることを強く信じています。イテレーションは難しい場合があります。特に、プロダクトのコンテキストが不足していたり、コードベースの中でも特にリスク／複雑度の高い部分に取り組んでいる場合などです。Issue の見積もりが難しかったり、実現可能性に確信が持てなかったりする場合は、まず概念実証 MR を作るのが適切な場合があります。概念実証 MR の目的は、計画段階での大きな仮定を排除し、早期にフィードバックを得ることで、その後の実装のリスクを下げることにあります。

- `PoC:` というプレフィックスを付けた MR を作成する。
- MR の説明に、PoC MR が解決しようとしている問題を記載する。
- タイムボックスを設ける。2〜3 日以内に実現可能性や計画を判断できそうですか？
- 期間の終わりにフィードバックをくれるレビュアーを決める。
- MR をクローズする。元の Issue に、PoC で得た学び（プロダクトやパフォーマンスへの影響を含む）の要約を残す。
  - 実装に進めるかどうかを述べる。
  - Issue はクローズしないでください。

概念実証 MR が必要だということは、コードベースやプロダクトの一部が過度に複雑になっているサインかもしれません。今後このステップを避ける方法を議論できるよう、振り返りでこの MR について話し合うことには常に価値があります。

### 振り返り

定期的に開催する「マイルストーン単位」の振り返りが 1 つあり、加えてアドホックな「プロジェクト単位」の振り返りを行うこともあります。

#### マイルストーン単位

Import グループでは [GitLab Issue 上でマイルストーン振り返り](https://gitlab.com/gl-retrospectives/manage-stage/import/-/work_items)を実施しています。これにはエンジニア、UX、PM、そしてそのマイルストーンでチームと一緒に働いたすべてのステーブルカウンターパートが参加します。

すべてのマイルストーンで、チームメンバーの参加を強く推奨します。

これらは最初の議論の段階では機密ですが、毎月の [GitLab 振り返り](/handbook/engineering/careers/management/group-retrospectives/)に間に合うように公開されます。詳しくは[グループ振り返り](/handbook/engineering/careers/management/group-retrospectives/)を参照してください。

#### プロジェクト単位

特定の Issue、機能、その他のプロジェクトが特に有益な学びの場となった場合は、同期または非同期の振り返りを行うことがあります。取り組んでいる内容が振り返りに値すると感じた場合は、以下のようにします。

1. なぜ振り返りを行いたいのか、また同期で行うのか非同期で行うのかを明示した [Issue を作成する](https://gitlab.com/gitlab-org/manage/import-and-integrate/discussions/-/issues)。
1. EM や、関わるべきその他の人（PM、カウンターパートなど）を含める。
1. 必要に応じて同期ミーティングを調整する。

振り返りで得られたフィードバックは、参照のために最終的にすべて Issue に集約してください。

### テックリード

私たちのグループは、さまざまなトピックにおける作業の整理と DRI の特定を支援するため、テックリードと協働します。

#### テックリードの特性

テックリードとは:

- 追加の責務を持つ個人コントリビューターです。シニアリティに関係なく、すべてのエンジニアがテックリードになる資格があります。
- 特定のトピックやプロジェクトに紐づく一時的な役割です。チームでは異なるトピックやプロジェクトに対して、同時に複数のテックリードを置くことを許容しています。
- マネージャー**ではありません**。
- シニアリティのレベルが追加されるもの**ではありません**。

テックリードの役割は、リーダーシップスキルを身につけたいエンジニアにとっての成長機会となります。

#### テックリードの責務

テックリードは多様な役割を担います。責務はプロジェクトごとに異なる場合がありますが、以下のようなものが含まれます。

- 技術ビジョンとアーキテクチャ - 特定のプロジェクトの全体的な技術アーキテクチャを定義し、進化させる
- 技術ガイダンス - チームの他の開発者に技術的なガイダンスやメンタリングを提供する
- 計画と優先順位付け - 大きなタスクをより小さく実行可能なアイテムに分解して、作業を整理する
- 進捗の追跡 - コミットメントの進捗を追跡し、ステータスを共有する
- リスク管理 - デリバリーに影響する技術的リスクを特定、評価、管理する
- 調整 - 他者の作業を見守り、ブロッカーの解消を支援する
- 技術ドキュメント - 他の開発者向けに、技術アーキテクチャとコード構造のドキュメントを保守する

#### 現在のテックリード

以下は、テックリードが見ているトピックの一覧です。

| トピック | テックリード | トピックリンク | 備考 |
| ------ | ------ | ------ | ------ |
| Direct Transfer - User contribution mapping | Rodrigo Tomonari | [Epic](https://gitlab.com/groups/gitlab-org/-/epics/12378) | - |
| インポーターへの開発者コントリビューションの効率改善 | James Nutt | [OKR](https://gitlab.com/gitlab-com/gitlab-OKRs/-/work_items/6658) | - |
| Congregate | tbd | https://gitlab.com/gitlab-org/gitlab/-/issues/428657 | |
| GitHub Actions | tbd | https://gitlab.com/gitlab-org/manage/general-discussion/-/issues/17652 | |
|  | | |  |

## マージリクエストルーレットレビュー

Import コードベースの領域が変更されると、[reviewer roulette](https://docs.gitlab.com/ee/development/code_review.html#reviewer-roulette) はそのマージリクエストを Import チームメンバーがレビューするよう推薦します。これは Import チーム以外の人がそのマージリクエストを作成した場合にのみ発生します。レビュー推薦の見え方の[例](https://gitlab.com/gitlab-org/gitlab/-/merge_requests/74338#note_731247058)を参照してください。

このような特別な推薦の[背景](https://gitlab.com/gitlab-org/gitlab/-/issues/343486)としては、特定のインテグレーションや Webhook について他のグループも一定のオーナーシップを持っていることが挙げられます。チーム外のメンバーが行った変更をレビューすることで、私たちは基盤的なコードのオーナーとして振る舞い、Import コードベースの品質をより高く保つことができます。

### ルーレットのマッチングの仕組み

マージリクエストの変更ファイルパスは、[正規表現の一覧](https://gitlab.com/gitlab-org/gitlab/-/blob/240d4c37c955878c224718e47f4d527bea250299/tooling/danger/project_helper.rb#L42-62)とマッチングされます。
ルーレットはこれらのハッシュ値を使ってレビュアーグループを推薦します。たとえば、`:import_integrate_be` と `:import_and_integrate_fe` はそれぞれ Import のバックエンドとフロントエンドのレビューを推薦します。正規表現のマッチは[最初にマッチしたものが優先](https://gitlab.com/gitlab-org/gitlab/-/blob/54e182410219d1c77c5c6b2b7c88a6639f622cc6/tooling/danger/project_helper.rb#L18)で累積されないため、`:backend` や `:frontend` のような他の関連レビュアーグループも各ハッシュ値に含めなければなりません。

正規表現の一覧は、必要に応じてインテグレーションや Webhook のコードと一致するように更新する必要があります。この一覧は、私たちの一般的な名前空間配下のファイルにマッチするため、既存の名前空間内の新しいコードは常にマッチします。

GitLab リポジトリのどのファイルがマッチするのかを確認するには、Rails コンソールに以下を貼り付けてください。

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

私たちの機能を監視するためのリンク集です。

### Grafana ダッシュボード

- [Import グループダッシュボード](https://dashboards.gitlab.net/d/stage-groups-import_and_integrate/stage-groups-import-and-integrate-group-dashboard?orgId=1)。以下を含みます。
  - 私たちの機能カテゴリーで絞り込まれた各種 Kibana ログへのリンク
  - 私たちの[エラーバジェット](#error-budgets)の消費アトリビューション
- [Worker queues](https://dashboards.gitlab.net/d/sidekiq-queue-detail/sidekiq-queue-detail?orgId=1&var-PROMETHEUS_DS=Global&var-environment=gprd&var-stage=main&var-queue=jira_connect:jira_connect_sync_branch)。`queue` ドロップダウンでキューを切り替えできます。

### Sentry エラー

- ["IntegrationsController" にマッチ](https://new-sentry.gitlab.net/organizations/gitlab/issues/?project=3&query=is%3Aunresolved+IntegrationsController&referrer=issue-list&statsPeriod=14d)
- ["Integrations" にマッチ](https://new-sentry.gitlab.net/organizations/gitlab/issues/?project=3&query=is%3Aunresolved+Integrations&referrer=issue-list&statsPeriod=14d)
- ["Jira" にマッチ](https://new-sentry.gitlab.net/organizations/gitlab/issues/?project=3&query=is%3Aunresolved+Jira&referrer=issue-list&statsPeriod=14d)

### Kibana ダッシュボード

[Import に関するすべての Kibana ダッシュボードの一覧](https://log.gprd.gitlab.net/app/dashboards#/list?s=tag:(group::import)&sort=title&sortdir=asc)はこちらです。

インポーターのダッシュボード:

- [Project Import/Export](https://log.gprd.gitlab.net/app/dashboards#/view/03a11c50-ba46-11ec-b73f-692cc1ae8214)
- [GitHub Import - Overview](https://log.gprd.gitlab.net/app/dashboards#/view/62965d10-9c0e-11ed-9f43-e3784d7fe3ca)
- [GitHub Import - Project import debug](https://log.gprd.gitlab.net/app/dashboards#/view/be0fb6d0-9c24-11ed-85ed-e7557b0a598c)
- [GitLab Direct Transfer](https://log.gprd.gitlab.net/app/dashboards#/view/f2640580-a8bd-11ed-85ed-e7557b0a598c)
- [User contributions mapping](https://log.gprd.gitlab.net/app/dashboards#/view/f9c66d73-50a1-43e2-89ab-56b71645df33)

API/Webhooks のダッシュボード:

- [REST and GraphQL API](https://log.gprd.gitlab.net/app/dashboards#/view/ee792100-cfc7-11ec-afaf-2bca15dfbf33)
- [Webhooks](https://log.gprd.gitlab.net/app/dashboards#/view/deec2320-3914-11ed-b86b-d963a1a6788e)

### Kibana ログ

GitLab for Jira Cloud アプリのワーカー:

- [`JiraConnect::SyncMergeRequestWorker`](https://log.gprd.gitlab.net/goto/309f97d4a5c3e918e2c07754fefc94ee) のエラー。
- [`JiraConnect::SyncBranchWorker`](https://log.gprd.gitlab.net/goto/96364e957898896c4dc7e9ee5534b6de) のエラー。
- [`JiraConnect::SyncProjectWorker`](https://log.gprd.gitlab.net/goto/5f0e03847ddc1b074d6346199c8bc4d2) のエラー。
- [全 JiraConnect 同期ワーカー](https://log.gprd.gitlab.net/goto/39348f2d169e6929c41dba2d6fb063ee) のタイムアウトエラー。

### エラーバジェット {#error-budgets}

GitLab は機能の可用性とパフォーマンスを測定するために[エラーバジェット](/handbook/engineering/error-budgets/)を使っています。
エンジニアリンググループごとに固有の予算消費があります。Import チームの直近 28 日の消費は、この [Grafana ダッシュボード](https://dashboards.gitlab.net/d/stage-groups-import_and_integrate/stage-groups-import-and-integrate-group-dashboard?orgId=1)で確認できます。

エラーバジェットの消費は、以下のいずれかが特定のしきい値を超えたときに発生します。

- エンドポイントやワーカーのエラー率
- エンドポイントの Apdex（レイテンシ）

#### 最も影響の大きい修正の特定

私たちの [Grafana ダッシュボード](https://dashboards.gitlab.net/d/stage-groups-import_and_integrate/stage-groups-import-and-integrate-group-dashboard?orgId=1)で最優先の問題を特定するには:

1. **Error budget** パネルへ移動します。
1. **Budget spend attribution** を展開します。**Budget failures** パネルは失敗の上位順に並んでいます。
1. **Failure log links** で対応するリンクをクリックします。

上位の原因を修正することが、予算消費に対して最大のインパクトをもたらします。

#### さらなるリソース

エラーバジェットについては以下のリソースで詳しく学べます。

- [エラーバジェットとその計算方法](/handbook/engineering/error-budgets/)
- [Apdex とは何か、どのように動作するか](https://docs.gitlab.com/ee/development/application_slis/rails_request.html)
- [Grafana ダッシュボードでのエラーバジェット](https://docs.gitlab.com/ee/development/stage_group_observability/index.html#error-budget)
- [機能カテゴライゼーション](https://docs.gitlab.com/ee/development/feature_categorization/): 私たちのコードは `feature_category: :integrations`、`feature_category: :importers`、`feature_category: :webhooks` で帰属付けされます。

## 利用状況データダッシュボード

機能の利用状況データは Tableau で確認できます。

- [Centralized Product Usage Metrics Dashboard](https://10az.online.tableau.com/#/site/gitlab/views/DRAFTCentralizedGMAUDashboard/MetricReporting?:iid=1) では、選んだメトリクスを観察できます。たとえば Microsoft Teams インテグレーションのデータを見たい場合は、左側の `Select Metric Level` で `PI` を選び、`Select Metrics to view` で `All` のチェックを外したうえで `microsoft` を検索し、関心のある Microsoft Teams インテグレーションのメトリクスにチェックを入れます。[こちらの例](https://10az.online.tableau.com/t/gitlab/views/DRAFTCentralizedGMAUDashboard/MetricReporting/8c7d8afd-ffc7-4198-b11a-6099df2b8611/3170c5bb-4509-4b3d-8362-470e49286d42)を参照してください。タイムフレームと `Dimention Paremeter`（例: deployment type）も選択できます。他の例として、[GitHub importer](https://10az.online.tableau.com/t/gitlab/views/DRAFTCentralizedGMAUDashboard/MetricReporting/57ab6fbb-7d64-4ab9-ac36-dfcfbd891c69/1e04a888-66de-44c8-b722-1c31e214b8db) や[デプロイメント別の Webhook 利用状況](https://10az.online.tableau.com/t/gitlab/views/DRAFTCentralizedGMAUDashboard/MetricReporting/ef4c4285-1a54-4769-86d7-60331b44a10a/0fa98245-8e1c-4db1-82f3-2591e310aa3d)があります。
- [Integrations Usage Dashboard](https://10az.online.tableau.com/#/site/gitlab/views/ManageIntegrationsUsage/ServicePingResults?:iid=1) はインテグレーションのすべての利用状況を表示します。右側で特定のインテグレーションを除外したり残したりして絞り込めます。
- [Importer Usage Dashboard](https://10az.online.tableau.com/#/site/gitlab/workbooks/2214374/views)。これはまだ作業中です。
- [User Contribution Mapping Usage Dashboard](https://10az.online.tableau.com/#/site/gitlab/workbooks/3238494/views) は、インポート中に作成されたプレースホルダーユーザーに関するデータを表示します。

## リンクとリソース {#links}

{{% include "includes/engineering/foundations/shared-links.md" %}}

- [マイルストーンの振り返り](https://gitlab.com/gl-retrospectives/manage-stage/import/-/work_items)
- 私たちの Slack チャンネル
  - Create:Import [#g_import](https://gitlab.slack.com/archives/C04RDL3MEH5)
  - 日次スタンドアップ [#g_import_daily](https://gitlab.slack.com/archives/C04UYQV7716)
- Issue ボード
  - [現在のマイルストーンボード](https://gitlab.com/groups/gitlab-org/-/boards/1459244?milestone_title=Upcoming&label_name[]=group%3A%3Aimport%20and%20integrate)
- コントリビューションガイド
  - [インポーター設計の原則](https://docs.gitlab.com/ee/development/import/principles_of_importer_design/)
  - [Direct Transfer へのコントリビュート](https://docs.gitlab.com/ee/development/bulk_imports/contributing/)
    - [フィードバック Issue](https://gitlab.com/gitlab-org/gitlab/-/issues/456468)
- オンボーディングビデオ（GitLab Unfiltered Youtube）
  - [Direct Transfer](https://www.youtube.com/watch?v=vVQ6Ex9fSl8)（旧称 GitLab Migration）
  - [Introduction to GitHub Importer](https://www.youtube.com/watch?v=TxHopzXop5s)
  - [File based GitLab Import/Export](https://www.youtube.com/watch?v=A4kdpnbhmcw)
  - [Remote S3 Import Example](https://www.youtube.com/watch?v=I85SXNmiS_k)
