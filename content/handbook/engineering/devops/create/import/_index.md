---
title: Importグループ
description: Importグループはマイグレーションを支援します。
upstream_path: /handbook/engineering/devops/create/import/
upstream_sha: 1e195b58b9f249ff10bd0e705106c320fee86141
translated_at: "2026-05-14T00:00:00Z"
translator: claude
stale: false
---

## 概要

Importグループは[Createステージ](/handbook/engineering/devops/create/)の一部です。
このグループは、GitLabインスタンス間および他のプロバイダーからのマイグレーションを行うことで製品をサポートしています。

このページではImportグループ固有のプロセスと情報をカバーします。[グループ方向性ページ](https://about.gitlab.com/direction/create/import/)および[カテゴリーごとにサポートする機能](/handbook/product/categories/#import-group)も参照してください。

## 連絡方法

Importグループに連絡するには、[GitLabプロジェクト](https://gitlab.com/gitlab-org/gitlab)でIssueを作成し、`~"group::import"`ラベルとその他の[適切なラベル](#issue-labels)を追加するのが最善です。その後、関連するプロダクトマネージャーおよび/またはエンジニアリングマネージャーにpingしてください。

より緊急の項目については、Slackチャンネル（社内）の[`#g_import`](https://gitlab.slack.com/archives/g_import)を自由に利用してください。

## チームメンバー

以下の人々はグループの恒久メンバーです:

{{< engineering/stable-counterparts role="Create:Import" >}}

## 作業

各マイルストーンの1週間前、エンジニアリングマネージャーはチームの優先事項を含む[計画用Issue](https://gitlab.com/gitlab-org/gitlab/-/work_items?sort=closed_at_desc&state=opened&label_name%5B%5D=Planning%20Issue&label_name%5B%5D=group%3A%3Aimport&first_page_size=100)を作成します。チームメンバーに通知され、マイルストーンへのコミットメントでIssueを更新します。

### Issue開発ワークフロー

私たちは標準のGitLab [エンジニアリングワークフロー](/handbook/engineering/workflow/)を使用します。

### Issueボード

Importグループの作業は次の場所で追跡できます:

- [Import現在のマイルストーン](https://gitlab.com/groups/gitlab-org/-/boards/1459244?milestone_title=Upcoming&milestone_title=Started&label_name%5B%5D=group%3A%3Aimport&group_by=epic)（マイルストーンフィルターを現在のマイルストーンに手動で調整）
- [計画用Issue](https://gitlab.com/gitlab-org/gitlab/-/work_items?sort=closed_at_desc&state=opened&label_name%5B%5D=Planning%20Issue&label_name%5B%5D=group%3A%3Aimport&first_page_size=100)
- [計画用Issueエピック](https://gitlab.com/groups/gitlab-org/-/work_items?sort=created_date&state=opened&label_name%5B%5D=Planning%20Issue&label_name%5B%5D=group%3A%3Aimport&type%5B%5D=epic&first_page_size=100)

### Issueラベル {#issue-labels}

発見性を高めるため、Issueに正しいラベルを適用してください。

すべてのIssueには以下が必要です:

- `~"group::import"`（ボットがステージとセクションラベルを適切に適用します）
- 1つ以上のカテゴリーラベル:
  - `~"Category:Importers"`（FIXME: 現時点で、ボットはすべてのIssueにこのカテゴリーを強制しています）
  - `~"Category:Webhooks"`
- [タイプラベル](/handbook/product/groups/product-analysis/engineering/metrics/#work-type-classification)
- [ワークフローラベル](/handbook/engineering/workflow/#updating-workflow-labels-throughout-development)
- 該当する場合は`~"backend"`または`~"frontend"`

インポーター関連のIssueには、`Importer:`ラベルも適用してください。例: `~"Importer:GitHub"`または`~"Importer:Direct Transfer"`。

### バックログ精緻化

エンジニアは通常、取り組む予定のIssueを精緻化します。ただし、コミュニティコントリビューターが取り上げる可能性がある場合は、特に、誰でもIssueを精緻化して開発の準備ができるようにすることができます。

IssueがEpicの一部である場合、DRIはそれを精緻化するか、そのエピックに割り当てられたエンジニアに精緻化を委任することができます。Issueを精緻化する人に関係なく、マイルストーンが始まる前に精緻化を完了することを目指します。

最も遅くとも、現在のマイルストーンの終わりの1週間前に発生する、エンジニアリングマネージャーが次のマイルストーンの計画用Issueを共有するときに精緻化を開始する必要があります。

#### 精緻化のためのIssueの特定

エンジニアリングマネージャーがIssueをスケジュールし、それらはマイルストーン計画Issueに含まれます。

マイルストーンの各エンジニアの割り当てに基づいて、`Ready for Development`ステータスにないIssueを特定します。これらは通常、`Refinement`または`Planning breakdown`ステータスを持ちますが、任意の[製品開発フロー](/handbook/product-development/how-we-work/product-development-flow/)ステータスを持つ可能性があります。

`Ready for Development`であるが何ヶ月も前に精緻化されたIssueは、コードベース、製品、またはアーキテクチャの方向性の変更に焦点を当てて再度精緻化する必要があります。

#### Issueの精緻化

Createステージの[クロスチーム計画と精緻化](/handbook/engineering/devops/create/#cross-team-planning-and-refinement)ガイドライン、特に[Refinement](/handbook/engineering/devops/create/#refinement)および[実装計画](/handbook/engineering/devops/create/#implementation-plan)セクションに従ってください。

Importグループの場合、Issueは、これらのガイドラインに加えて、次のImport固有の要件を満たすときに精緻化されたと見なされます:

- ウェイト（`type::bugs`にはオプション）
- 別のエンジニアによるピアレビュー（ウェイト1のIssueにはオプション）; レビューされたことを示すために、レビュアーはコメントを残すか、Issueを`Ready for development`に移動できます
- `Ready for development`ステータス

**バグの準備状況**

バグは、私たちがそれに取り組む前に完全に理解されている必要はないため、ウェイトは不要です。

バグを完全に理解するための労力は、しばしばそれを修正する労力の大部分です。その結果、バグIssueで提案された解決策は、欠陥の不完全な理解に基づいた**提案**と見なされる場合があります。

少なくとも以下を含めるようにしてください:

- 再現手順
- 現在の動作
- 期待される正しい動作

[Bugテンプレート](https://gitlab.com/gitlab-org/gitlab/-/blob/master/.gitlab/issue_templates/Bug.md?ref_type=heads)はこれらのフィールドを含みます。

### ヘルプの要求

Support組織の一員でない場合は、彼らが利用可能性が高く、最も一般的なIssueを支援できるため、最初に彼らに連絡することをお勧めします。質問できる専用のSlackチャンネル[#spt_pod_import](https://gitlab.enterprise.slack.com/archives/C052K0Z1F8T)があり、参加してフォローできます。ただし、顧客の問題を解決するために深い技術的知識が必要な場合があり、チームのエンジニアの関与が必要な場合があります。

エンジニアリングチームにヘルプをリクエストする前に、まず[GitLabドキュメント](https://docs.gitlab.com/)の関心のあるトピックと、以下にリストされている追加のリソースを確認してください:

- [Importer Runbook](https://gitlab.com/gitlab-org/foundations/import-and-integrate/team/-/blob/main/importers/runbook.md?ref_type=heads)
- [GitLabログ分析ツール](https://gitlab.com/gitlab-org/foundations/import-and-integrate/gitlab-logs-analysis)
- [Jira playlist](https://www.youtube.com/playlist?list=PL05JrBw4t0Koazgli_PmMQCER2pVH7vUT)

上記にリストされているリソースで質問の答えが見つからない場合は、[Request for Help (RFH) Issue](https://gitlab.com/gitlab-com/request-for-help/-/issues/new?issuable_template=SupportRequestTemplate-Import)を開き、`SupportRequestTemplate-Import`テンプレートを使用してください。チームに連絡する前に、必要な情報をすべて提供することを確認してください。そうでない場合、私たちはあなたのリクエストを進めることができません。新しいIssueは内部トリアージプロセスに従って優先順位付けされます。現在および最新の2つのマイナーGitLabバージョン（N-2）に影響するIssueのリクエストのみをサポートできることに注意してください。古いバージョンの修正は提供できません。これは、[バックポートのメンテナンスポリシー](https://docs.gitlab.com/ee/policy/maintenance.html#patch-releases)に沿ったものです。

### マイルストーンドクター

各マイルストーンで、チームの2人のバックエンドエンジニアにマイルストーンドクターの役割が割り当てられ、1人がプライマリ、もう1人がセカンダリとなります。割り当ては[マイルストーンドクターローテーションスケジュール](https://gitlab.com/groups/gitlab-org/-/work_items/21520#milestone-doctor---rotation-schedule)にあります。エンジニアは自由に来るシフトを交換し、スケジュールを更新できます。

セカンダリドクターはプライマリがOOOまたはキャパシティオーバーの場合に介入し、同じ責任を引き受けます。それ以外の場合、彼らはマイルストーンに計画されたタスクに取り組みます。プライマリドクターは、OOOまたはキャパシティ問題に直面しているときにセカンダリに知らせるべきです。

プライマリドクターのマイルストーンキャパシティは、役割の責任に100%割り当てられます。残っていない場合、エンジニアは`~type::maintenance`または`~type::bug`のIssueに取り組み、コードレビューキャパシティを増やすことを検討する必要があります。

現在のドクターは`@gitlab-com/create-team/import/reaction-rotation`でタグ付けできます。

#### 責任

- 新しい[RFH Issue](https://gitlab.com/gitlab-com/request-for-help/-/issues/?sort=popularity&state=opened&label_name%5B%5D=Help%20group%3A%3Aimport&first_page_size=100)でSupportおよびPSと関与する
- 長期間オープンしているIssueをフォローアップする
- 顧客コールでSupportチームを支援する
- マイルストーンドクターが問題を成功裏に診断した方法に関するチームrunbookドキュメントを維持する
- チームSlackチャンネル[`#g_import`](https://gitlab.enterprise.slack.com/archives/C04RDL3MEH5)の質問に応答する
- シフトからの学びを使って[FAQ](https://gitlab.com/gitlab-org/foundations/import-and-integrate/team/-/blob/main/importers/faq.md?ref_type=heads)を更新する
- [インポーターの依存関係](#importer-dependencies)を確認し、サードパーティAPIの変更による必要な変更のためのIssueを作成する。
- マイルストーンの最後に [`@gitlab-com/create-team/import/reaction-rotation`のメンバーシップ](https://gitlab.com/groups/gitlab-com/create-team/import/reaction-rotation/-/group_members?with_inherited_permissions=exclude) を更新する。

##### インポーター依存関係 {#importer-dependencies}

マイルストーンごとに1回、各インポーターの依存関係のchangelogをレビューして、近づいているbreaking changeとAPI deprecationを確認します。[GitLab Duo Chat](https://docs.gitlab.com/user/gitlab_duo_chat/)を使用して影響を評価し、更新が必要な変更について関連する`~"Importer:"`ラベルを持つIssueを作成します。

レビュー後、計画用Issueにサマリーと作成されたIssueへのリンクを記載したコメントを残します。注意のためにEMをタグ付けします。

<details>
<summary>推奨プロンプト</summary>

`[START_DATE]`を依存関係を最後にチェックした日付に置き換えます。

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

### セキュリティとの協働

このグループには、セキュリティに影響を持つ可能性のあるIssueを特定するのを支援する既存の[脅威モデル](https://gitlab.com/gitlab-com/gl-security/product-security/appsec/threat-models/-/blob/master/gitlab-org/gitlab/GitLab%20Migration.md)がありますが、他の考慮事項があります。

IssueまたはMRがセキュリティに影響を持つ可能性のある場合、[Application Security Review](/handbook/security/product-security/security-platforms-architecture/application-security/appsec-reviews/)をリクエストする必要があります。これらには以下が含まれますが、これらに限定されません:

- 脅威モデルに該当する
- バイナリファイルを扱う（ダウンロード、解凍、抽出、移動、削除）
- ファイル操作サービスを変更または使用する
- Import/Export `CommandLineUtil`からのメソッドを使用する

### 長寿命のフィーチャーフラグ

これは、フラグの使用についてのGitLabの一般的な[開発ガイダンス](https://docs.gitlab.com/ee/development/feature_flags/)の補足です。これは[`ops`タイプ](https://docs.gitlab.com/ee/development/feature_flags/#ops-type)以外のすべてのフラグタイプに適用されます。

Import機能への変更は、しばしば高トラフィックのコードパスで発生し、過去にGitLab.comでの停止につながりました。停止は、コードレビューまたはQAテストで前もって見ることが難しい場合がある、リソース競合に関連していることがよくあります。

- 大規模なインポートは数千のワーカーをトリガーする可能性があります。
- 統合とwebhookは1日に数百万回実行されます。
- 競合の問題は、時には即座に表面化せず、大規模な顧客が新しいコードパスをトリガーしたときにのみ表面化します。

この理由から、フィーチャーフラグをコードベースに通常より長い期間保持することを優先する必要があります。
この間、フラグはデフォルトで有効になりますが、インシデントが発生した場合にすぐに無効にできます。

過去には、機能を無効にすることでいくつかのインシデントを迅速に軽減できました:

- [2023-09-21: グループインポートにより、CIパイプラインでのユーザーのなりすましが可能になる](https://gitlab.com/gitlab-sirt/shared-incidents/incident_4304/-/issues/1)
- [2023-10-30: GitLab.comがダウン](https://gitlab.com/gitlab-com/gl-infra/production/-/issues/17054)
- [2024-01-30: Sidekiq Apdex SLO](https://gitlab.com/gitlab-com/gl-infra/production/-/issues/17504)

インポーター、統合、またはwebhook内の変更については、次のことを優先するべきです:

1. 通常通り `/chatops`でフラグをロールアウトします。
1. 大規模なデータを使用してQA変更を行い、規模での問題を積極的に洗い出します。
   インポーターについては、ヒントについて [私たちのrunbook](https://gitlab.com/gitlab-org/manage/import-and-integrate/team/-/blob/main/importers/runbook.md) を参照してください。
1. 機能をリリースするときには、フィーチャーフラグを削除するのではなく、`default_enabled: true`に変更します。これはフラグロールアウトIssueの[オプションでフラグ付きの機能をリリース](https://gitlab.com/gitlab-org/gitlab/-/blob/e730c474ed80143ebae33df90900b342020ad7c0/.gitlab/issue_templates/Feature%20Flag%20Roll%20Out.md?plain=1#L83)ステップです。
1. この時点で機能はマイルストーン内でリリースされたと見なされ、自己管理顧客に出荷されるため、リリース投稿でアナウンスできます。
1. フラグがコードベースに存在し、デフォルトで有効のままである、**1〜3週間待ちます**。競合のある領域での変更、または何らかの理由で問題を検出するのに時間がかかると感じる場合は、より長い期間を使用します。
1. その期間後、フィーチャーフラグを削除してフラグロールアウトプロセスを完了します。

### リリース中

- Kickoff後にIssueがリリースに導入された場合、計画外の作業を考慮するために、同等のウェイトを削除する必要があります。
- 推定とウェイトが与えられる前にIssueの開発を開始しないでください。
- 15日までに、エンジニアリングマージリクエストはマージされる必要があります。つまり、15日以降にマージされたコードはリリースに含まれないと仮定します。これにより、リリースを最終化し、関連する[リリース投稿](/handbook/marketing/blog/release-posts/)を17日までにマージする時間が与えられます。（これは[13.11から始まる実験](https://gitlab.com/gitlab-org/manage/general-discussion/-/issues/17330)です。）

### リリース投稿

より詳細にアナウンスする必要があるIssueには、Issueを使用してリリース投稿を自動的に作成できます。
Issueに取り組むときは、計画中、または設計および開発中に、[リリース投稿アイテムジェネレーター](/handbook/marketing/blog/release-posts/#release-post-item-generator)を使用してリリース投稿を作成し、関連するすべての人々に通知することができます。

Issueにリリース投稿を持たせたくない場合は、Issueにリリースノートセクションがないことを確認するか、`release post item::`ラベルを使用しないでください。

### Proof-of-concept MR

私たちは[イテレーション](/handbook/values/#iteration)を強く信じ、小さな増分で価値を提供します。製品コンテキストが不足している場合、または特にリスクの高い/複雑なコードベースの一部に取り組んでいる場合、イテレーションは難しい場合があります。Issueを推定したり実現可能性を判断したりするのに苦労している場合は、最初にproof-of-concept MRを作成することが適切かもしれません。proof-of-concept MRの目標は、計画中の主要な仮定を取り除き、早期のフィードバックを提供することで、将来の実装からのリスクを減らすことです。

- `PoC:`で接頭辞付きのMRを作成します。
- MRの説明で、PoC MRが解決しようとしている問題を説明します。
- タイムボックスを設定します。2〜3日未満で実現可能性または計画を判断できますか？
- この期間の終わりにフィードバックを提供するレビュアーを特定します。
- MRをクローズします。元のIssueにPoCから学んだことのサマリーを提供します。製品とパフォーマンスの含意を含めます。
  - 実装に進むことができるかどうかを記載します。
  - Issueをクローズしないでください。

proof-of-concept MRの必要性は、コードベースまたは製品の一部が過度に複雑になったことを示している可能性があります。将来このステップを回避する方法を議論できるように、レトロスペクティブの一部としてMRについて議論する価値が常にあります。

### レトロスペクティブ

定期的にスケジュールされた1つの「マイルストーンごとの」レトロスペクティブがあり、アドホックな「プロジェクトごとの」レトロスペクティブを行うことができます。

#### マイルストーンごと

Importグループは[GitLab Issuesでマイルストーンレトロスペクティブ](https://gitlab.com/gl-retrospectives/manage-stage/import/-/work_items)を行います。これらには、エンジニア、UX、PM、およびマイルストーン中にそのチームと作業したすべての安定したカウンターパートが含まれます。

すべてのマイルストーンについて、私たちのチームメンバーによる参加が強く奨励されています。

これらは最初のディスカッション中は機密で、その後、毎月の[GitLabレトロスペクティブ](/handbook/engineering/careers/management/group-retrospectives/)に間に合うように公開されます。詳細については、[グループレトロスペクティブ](/handbook/engineering/careers/management/group-retrospectives/)を参照してください。

#### プロジェクトごと

特定のIssue、機能、またはその他のプロジェクトが特に有用な学習経験になる場合、それから学ぶために同期または非同期レトロスペクティブを行うことがあります。あなたが取り組んでいるものがレトロスペクティブに値すると感じる場合:

1. レトロスペクティブを行いたい理由を説明し、これが同期または非同期であるべきかを示す[Issueを作成](https://gitlab.com/gitlab-org/manage/import-and-integrate/discussions/-/issues)します。
1. EMと関与するべき他の人々（PM、カウンターパートなど）を含めます。
1. 該当する場合は同期ミーティングを調整します。

レトロスペクティブからのすべてのフィードバックは、最終的に参照目的のためにIssueに記載される必要があります。

### Tech Lead

私たちのグループは、異なるトピックでの作業を組織し、それらのDRIを特定するのを支援するTech Leadと協働します。

#### Tech Leadの特徴

Tech Leadは:

- 追加の責任を持つ個人コントリビューターです。すべてのエンジニアは、シニアリティに関係なく、Tech Leadになる資格があります。
- 特定のトピック/プロジェクトに結びつけられた一時的な役割です。私たちはチームが異なるトピック/プロジェクトに対して同時に複数のTech Leadを持つことを許可します。
- マネージャーでは**ありません**。
- 追加のシニアリティレベルでは**ありません**。

Tech Leadの役割は、リーダーシップスキルを採用することに興味のあるエンジニアに成長機会を提供します。

#### Tech Leadの責任

Tech Leadは多くの帽子をかぶります。彼らの責任はプロジェクトごとに異なる場合がありますが、以下を含む場合があります:

- 技術的ビジョンとアーキテクチャ - 特定のプロジェクトの全体的な技術的アーキテクチャを定義し進化させる
- 技術的ガイダンス - チームの他の開発者に技術的ガイダンスとメンタリングを提供する
- 作業の計画と優先順位付け - より大きなタスクをより小さな実行可能なアイテムに分解することで作業を組織する
- 進捗の追跡 - コミットメントの進捗を追跡し、ステータス更新をレポートする
- リスク管理 - 成果物に影響する可能性のある技術的リスクを特定、評価、管理する
- 調整 - 他者の作業を監督し、ブロッカーを取り除くのを助ける
- 技術的ドキュメント - 他の開発者向けに技術的アーキテクチャとコード構造のドキュメントを維持する

#### 現在のTech Lead

以下は、Tech Leadによって監督されているトピックの概要です:

| トピック | Tech Lead | トピックリンク | メモ |
| ------ | ------ | ------ | ------ |
| Direct Transfer - ユーザーコントリビューションマッピング | Rodrigo Tomonari | [エピック](https://gitlab.com/groups/gitlab-org/-/epics/12378) | - |
| インポーターへの開発者コントリビューションの効率を改善 | James Nutt | [OKR](https://gitlab.com/gitlab-com/gitlab-OKRs/-/work_items/6658) | - |
| Congregate | tbd | https://gitlab.com/gitlab-org/gitlab/-/issues/428657 | |
| GitHub Actions | tbd | https://gitlab.com/gitlab-org/manage/general-discussion/-/issues/17652 | |
|  | | |  |

## マージリクエストルーレットレビュー

Importコードベースの領域が変更されたとき、[reviewer roulette](https://docs.gitlab.com/ee/development/code_review.html#reviewer-roulette)はマージリクエストがImportチームメンバーによってレビューされることを推奨します。これは、マージリクエストがImportチーム外の人によって作成された場合にのみ発生します。レビュー推奨の見え方の[この例](https://gitlab.com/gitlab-org/gitlab/-/merge_requests/74338#note_731247058)を参照してください。

これらの特別な推奨の背後にある[理由](https://gitlab.com/gitlab-org/gitlab/-/issues/343486)は、他のグループが特定の統合またはwebhookの一部の所有権を持っているからです。非チームメンバーによって行われた変更をレビューすることで、私たちは基礎コードのオーナーとして機能し、Importコードベースのより良い品質を維持できます。

### ルーレットマッチの仕組み

マージリクエストの変更のファイルパスは、[正規表現のリスト](https://gitlab.com/gitlab-org/gitlab/-/blob/240d4c37c955878c224718e47f4d527bea250299/tooling/danger/project_helper.rb#L42-62)と照合されます。
ルーレットはこれらのハッシュ値を使用してレビュアーグループを推奨します。例えば、`:import_integrate_be`と`:import_and_integrate_fe`はそれぞれImportバックエンドおよびフロントエンドレビューを推奨します。regexマッチは[最初のマッチが勝つ](https://gitlab.com/gitlab-org/gitlab/-/blob/54e182410219d1c77c5c6b2b7c88a6639f622cc6/tooling/danger/project_helper.rb#L18)であり、累積ではないため、`:backend`または`:frontend`などの他の関連するレビュアーグループも各ハッシュ値に含める必要があります。

統合またはwebhookコードに必要なたびにregexリストを更新する必要があります。リストは、私たちの一般的な名前空間付きファイルにマッチしますので、既存の名前空間内の新しいコードは常にマッチします。

GitLabリポジトリのどのファイルがマッチを生成するかを確認するには、Railsコンソールに以下を貼り付けます:

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

## 監視

これは私たちの機能を監視するためのリンクのコレクションです。

### Grafanaダッシュボード

- [Importグループダッシュボード](https://dashboards.gitlab.net/d/stage-groups-import_and_integrate/stage-groups-import-and-integrate-group-dashboard?orgId=1) これには以下が含まれます:
  - 私たちのフィーチャーカテゴリーにフィルタリングされたさまざまなKibanaログへのリンク
  - 私たちの[エラーバジェット](#error-budgets)支出帰属
- [ワーカーキュー](https://dashboards.gitlab.net/d/sidekiq-queue-detail/sidekiq-queue-detail?orgId=1&var-PROMETHEUS_DS=Global&var-environment=gprd&var-stage=main&var-queue=jira_connect:jira_connect_sync_branch) `queue`ドロップダウンでキューを切り替えることができます

### Sentryエラー

- [マッチング "IntegrationsController"](https://new-sentry.gitlab.net/organizations/gitlab/issues/?project=3&query=is%3Aunresolved+IntegrationsController&referrer=issue-list&statsPeriod=14d)
- [マッチング "Integrations"](https://new-sentry.gitlab.net/organizations/gitlab/issues/?project=3&query=is%3Aunresolved+Integrations&referrer=issue-list&statsPeriod=14d)
- [マッチング "Jira"](https://new-sentry.gitlab.net/organizations/gitlab/issues/?project=3&query=is%3Aunresolved+Jira&referrer=issue-list&statsPeriod=14d)

### Kibanaダッシュボード

[すべてのImport Kibanaダッシュボードのリスト](https://log.gprd.gitlab.net/app/dashboards#/list?s=tag:(group::import)&sort=title&sortdir=asc)を参照してください。

インポーターダッシュボード:

- [プロジェクトImport/Export](https://log.gprd.gitlab.net/app/dashboards#/view/03a11c50-ba46-11ec-b73f-692cc1ae8214)
- [GitHubインポート - 概要](https://log.gprd.gitlab.net/app/dashboards#/view/62965d10-9c0e-11ed-9f43-e3784d7fe3ca)
- [GitHubインポート - プロジェクトインポートデバッグ](https://log.gprd.gitlab.net/app/dashboards#/view/be0fb6d0-9c24-11ed-85ed-e7557b0a598c)
- [GitLab Direct Transfer](https://log.gprd.gitlab.net/app/dashboards#/view/f2640580-a8bd-11ed-85ed-e7557b0a598c)
- [ユーザーコントリビューションマッピング](https://log.gprd.gitlab.net/app/dashboards#/view/f9c66d73-50a1-43e2-89ab-56b71645df33)

API/Webhookダッシュボード:

- [REST and GraphQL API](https://log.gprd.gitlab.net/app/dashboards#/view/ee792100-cfc7-11ec-afaf-2bca15dfbf33)
- [Webhooks](https://log.gprd.gitlab.net/app/dashboards#/view/deec2320-3914-11ed-b86b-d963a1a6788e)

### Kibanaログ

GitLab for Jira Cloudアプリワーカー:

- [`JiraConnect::SyncMergeRequestWorker`](https://log.gprd.gitlab.net/goto/309f97d4a5c3e918e2c07754fefc94ee)エラー。
- [`JiraConnect::SyncBranchWorker`](https://log.gprd.gitlab.net/goto/96364e957898896c4dc7e9ee5534b6de)エラー。
- [`JiraConnect::SyncProjectWorker`](https://log.gprd.gitlab.net/goto/5f0e03847ddc1b074d6346199c8bc4d2)エラー。
- [すべてのJiraConnect同期ワーカー](https://log.gprd.gitlab.net/goto/39348f2d169e6929c41dba2d6fb063ee)タイムアウトエラー。

### エラーバジェット {#error-budgets}

GitLabは、私たちの機能の可用性とパフォーマンスを測定するために[エラーバジェット](/handbook/engineering/error-budgets/)を使用します。
各エンジニアリンググループは独自のバジェット支出を持っています。Importチームの現在の28日支出はこの[Grafanaダッシュボード](https://dashboards.gitlab.net/d/stage-groups-import_and_integrate/stage-groups-import-and-integrate-group-dashboard?orgId=1)に表示されます。

エラーバジェットの支出は、次のいずれかが特定のしきい値を超えたときに発生します:

- エンドポイントまたはワーカーのエラー率
- エンドポイントのApdex（レイテンシ）

#### 最高インパクトの修正の決定

私たちの[Grafanaダッシュボード](https://dashboards.gitlab.net/d/stage-groups-import_and_integrate/stage-groups-import-and-integrate-group-dashboard?orgId=1)で最高優先度の問題を決定するには:

1. **エラーバジェット**パネルに移動します。
1. **バジェット支出帰属**を展開します。**バジェット失敗**パネルはトップ失敗の順に並んでいます。
1. **失敗ログリンク**で、対応するリンクをクリックします。

トップオフェンダーを修正することは、バジェット支出に最大のインパクトを与えます。

#### 追加のリソース

これらのリソースで、エラーバジェットについてさらに学びましょう:

- [エラーバジェットと計算方法](/handbook/engineering/error-budgets/)
- [Apdexとその仕組み](https://docs.gitlab.com/ee/development/application_slis/rails_request.html)
- [Grafanaダッシュボードのエラーバジェット](https://docs.gitlab.com/ee/development/stage_group_observability/index.html#error-budget)
- [フィーチャーカテゴリー化](https://docs.gitlab.com/ee/development/feature_categorization/): 私たちのコードは`feature_category: :integrations`、`feature_category: :importers`、`feature_category: :webhooks`によって私たちに帰属されます

## 使用データダッシュボード

Tableauで機能使用のデータを表示できます。

- [Centralized Product Usage Metrics Dashboard](https://10az.online.tableau.com/#/site/gitlab/views/DRAFTCentralizedGMAUDashboard/MetricReporting?:iid=1) は、選択した任意のメトリクスを観察するのに使用できます。例えばMicrosoft Teams統合のデータを見るには、左の `Select Metric Level` で `PI` を選択し、`Select Metrics to view` で最初に `All` のチェックを外して `microsoft` を検索し、興味のあるMicrosoft Teams統合のメトリクスをチェックします。[例](https://10az.online.tableau.com/t/gitlab/views/DRAFTCentralizedGMAUDashboard/MetricReporting/8c7d8afd-ffc7-4198-b11a-6099df2b8611/3170c5bb-4509-4b3d-8362-470e49286d42)を参照してください。期間と `Dimention Paremeter`（例: デプロイメントタイプ）を選択できます。別の例は[GitHubインポーター](https://10az.online.tableau.com/t/gitlab/views/DRAFTCentralizedGMAUDashboard/MetricReporting/57ab6fbb-7d64-4ab9-ac36-dfcfbd891c69/1e04a888-66de-44c8-b722-1c31e214b8db)または[デプロイメント別webhook使用](https://10az.online.tableau.com/t/gitlab/views/DRAFTCentralizedGMAUDashboard/MetricReporting/ef4c4285-1a54-4769-86d7-60331b44a10a/0fa98245-8e1c-4db1-82f3-2591e310aa3d)のデータです
- [Integrations Usage Dashboard](https://10az.online.tableau.com/#/site/gitlab/views/ManageIntegrationsUsage/ServicePingResults?:iid=1) は、すべての統合の使用を表示します。右側で任意の特定の統合をフィルター（保持のみまたは除外）できます。
- [Importer Usage Dashboard](https://10az.online.tableau.com/#/site/gitlab/workbooks/2214374/views)。これはまだ進行中です。
- [User Contribution Mapping Usage Dashboard](https://10az.online.tableau.com/#/site/gitlab/workbooks/3238494/views) は、インポート中に作成されたプレースホルダーユーザーのデータを表示します。

## リンクとリソース {#links}

{{% include "includes/engineering/foundations/shared-links.md" %}}

- [マイルストーンレトロスペクティブ](https://gitlab.com/gl-retrospectives/manage-stage/import/-/work_items)
- 私たちのSlackチャンネル
  - Create:Import [#g_import](https://gitlab.slack.com/archives/C04RDL3MEH5)
  - 毎日のスタンドアップ [#g_import_daily](https://gitlab.slack.com/archives/C04UYQV7716)
- Issueボード
  - [現在のマイルストーンボード](https://gitlab.com/groups/gitlab-org/-/boards/1459244?milestone_title=Upcoming&label_name[]=group%3A%3Aimport%20and%20integrate)
- コントリビューションガイド
  - [インポーター設計の原則](https://docs.gitlab.com/ee/development/import/principles_of_importer_design/)
  - [Direct Transferへのコントリビュート](https://docs.gitlab.com/ee/development/bulk_imports/contributing/)
    - [フィードバックIssue](https://gitlab.com/gitlab-org/gitlab/-/issues/456468)
- オンボーディングビデオ (GitLab Unfiltered Youtube)
  - [Direct Transfer](https://www.youtube.com/watch?v=vVQ6Ex9fSl8) (旧称 GitLab Migration)
  - [GitHub Importerの紹介](https://www.youtube.com/watch?v=TxHopzXop5s)
  - [ファイルベースのGitLab Import/Export](https://www.youtube.com/watch?v=A4kdpnbhmcw)
  - [リモートS3インポート例](https://www.youtube.com/watch?v=I85SXNmiS_k)
