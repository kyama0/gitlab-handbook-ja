---
title: "Team processes"
description: "Organizations チームの運営方法"
upstream_path: /handbook/engineering/infrastructure-platforms/tenant-scale/organizations/process/
upstream_sha: 0505a0f5a670366af5dd620eb2b9f12ebd7a79fe
lastmod: 2026-06-11T10:03:08+08:00
translated_at: "2026-06-12T21:15:09Z"
translator: claude
stale: false
---

## 作業 {#work}

プロダクトマネージャー（PM）は、チーム、エンジニアリングマネージャー（EM）、その他のステークホルダーからの
インプットを受けて、[プロダクトの優先順位付けプロセス](/handbook/product/product-processes/#prioritization)に従って
Issue のリストをまとめます。
イテレーションサイクルは月の第 2 金曜日まで続き、翌週の月曜日から新たに開始します。
各マイルストーンは、リリース予定の GitLab バージョンによって識別されます。

### マイルストーンプランニング {#milestone-planning}

マイルストーンを開始する前に、グループは[プランニング Issue](https://gitlab.com/gitlab-org/tenant-scale-group/group-tasks/-/issues/?label_name%5B%5D=Planning%20Issue) を使用して調整します。
私たちは次のプロセスに従います:

- PM がマイルストーンの目標を定義します。
- チームメンバーが、マイルストーンに関連すると考える Issue についてコメントします。
- PM と EM が協力して、Issue の最終リストを決定します。
- チーム全体が、マイルストーン開始前に並べられた項目をレビューします。

### 何に取り組むか {#what-to-work-on}

取り組むべき事項の主な情報源は[プランニングボード](https://gitlab.com/groups/gitlab-org/-/boards/7487616?label_name[]=group%3A%3Aorganizations&milestone_title=Started)で、
現在のサイクルにスケジュールされたすべての Issue が一覧表示されます。
自分自身を Issue にアサインすると、その Issue に取り組んでいることを示すことになります。

未回答の質問や不明確な要件など、すぐに Issue に着手するのを妨げるものがある場合は、
所見と質問を Issue に記載しておけば、その Issue をスキップできます。
これは、次にその Issue を引き継ぐエンジニアの助けになります。

通常、Issue は人に直接アサインされません。ただし、ある人が
明らかにその Issue に取り組むための最も多くの知識やコンテキストを持っている場合は例外です。
とはいえ、私たちはエンジニアが特定のプロジェクトやエピックに対するオーナーシップの感覚を持ち、
会社により大きなインパクトを与えることを奨励しています。

### プロダクト開発ワークフロー {#product-development-workflow}

私たちは GitLab の[プロダクト開発ワークフロー](/handbook/product-development/how-we-work/product-development-flow/)の
ガイドラインに従います。現在のマイルストーンにおけるすべての Issue のステータスの概要を把握するには、
[開発ワークフローボード](https://gitlab.com/groups/gitlab-org/-/boards/2594854)を確認してください。

このプロセスは主に次のように進みます:

- `workflow::ready for design` は、Issue がデザイン作業を開始する準備ができていることを示します
- `workflow::design` は、デザイナーが Issue に積極的に取り組んでいることを示します
- `workflow::planning breakdown` は、デザインが完了し、実装のためにサブ Issue に分解する準備ができていることを示します。デザインプロセス中のコンテキストと決定を保持するため、可能な場合は、デザイン Issue をエピックに昇格させて再利用し、実装 Issue を追加します。そうすることで、エピックをデザインの [SSOT](/teamops/shared-reality/#single-source-of-truth-ssot) として使用でき、すべての議論が 1 か所にまとまり、元のデザイン Issue と対応する実装 Issue の間に不整合が生じることがなくなります。
- `workflow::refinement` は、Issue がエンジニアリングによる整理が必要であることを示します。このステップでは、実装ガイドとウェイトを Issue に追加する必要があります。
- `workflow::ready for development` は、項目がエンジニアリングによって取り組まれる準備ができていることを示します

### 開発ワークフロー {#development-workflow}

私たちは GitLab の[エンジニアリングワークフロー](/handbook/engineering/workflow/)の
ガイドラインに従います。現在のマイルストーンにおけるすべての Issue のステータスの概要を把握するには、
[開発ワークフローボード](https://gitlab.com/groups/gitlab-org/-/boards/2594854)を確認してください。

アサインされた Issue のオーナーとして、エンジニアは Issue の
ワークフローラベルを最新の状態に保つことが求められます。エンジニアが Issue に着手するときは、
出発点として `workflow::in dev` ラベルを付け、
[開発を通じて Issue を更新](/handbook/engineering/workflow/#updating-workflow-labels-throughout-development)し続けます。
Issue をクローズする前に、`workflow::complete` ラベルを追加することが重要です。これは、完了した項目が
毎月のリリースポストの Improvements and Bugs の概要に表示されるための要件の 1 つだからです。
このプロセスは主に次の図のように進みます:

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

### Issue ボード {#issue-boards}

私たちは作業を以下の Issue ボードで追跡しています:

- [Group::Organizations milestone prioritization](https://gitlab.com/groups/gitlab-org/-/boards/5548886?label_name[]=group%3A%3Aorganizations)
- [Group::Organizations cross-functional prioritization](https://gitlab.com/groups/gitlab-org/-/boards/4424394?label_name[]=group%3A%3Aorganizations)
- [Group::Organizations planning](https://gitlab.com/groups/gitlab-org/-/boards/7487616?label_name[]=group%3A%3Aorganizations)
- [Group::Organizations validation](https://gitlab.com/groups/gitlab-org/-/boards/7487708?not[label_name][]=workflow%3A%3Ain%20dev&not[label_name][]=workflow%3A%3Ain%20review&label_name[]=group%3A%3Aorganizations)
- [Group::Organizations development workflow](https://gitlab.com/groups/gitlab-org/-/boards/2594854?label_name[]=group%3A%3Aorganizations)
- [Group::Organizations bugs](https://gitlab.com/groups/gitlab-org/-/boards/7487700?label_name[]=type%3A%3Abug&label_name[]=group%3A%3Aorganizations)
- [Group::Organizations release posts](https://gitlab.com/groups/gitlab-org/-/boards/7487687?label_name[]=group%3A%3Aorganizations&label_name[]=type%3A%3Afeature)
- [Group::Organizations milestones](https://gitlab.com/groups/gitlab-org/-/boards/5549104?label_name[]=group%3A%3Aorganizations)
- [Group::Organizations team members](https://gitlab.com/groups/gitlab-org/-/boards/5549106?label_name[]=group%3A%3Aorganizations)
- [Group::Organizations important](https://gitlab.com/groups/gitlab-org/-/boards/1438588?label_name[]=group%3A%3Aorganizations)
- [Group::Organizations community contributions](https://gitlab.com/groups/gitlab-org/-/boards/7487739?label_name[]=Community%20contribution&label_name[]=group%3A%3Aorganizations)

### 追跡ダッシュボード {#tracking-dashboards}

Issue ボードに加えて、私たちは以下のような専用ダッシュボードでも主要なイニシアチブの進捗を追跡しています:

- [Schema migration](https://cells-progress-tracker-gitlab-org-tenant-scale-g-f4ad96bf01d25f.gitlab.io/schema_migration)
- [Sharding key migration](https://cells-progress-tracker-gitlab-org-tenant-scale-g-f4ad96bf01d25f.gitlab.io/sharding_keys)

これらのダッシュボードは [Cells Progress Tracker](https://gitlab.com/gitlab-org/tenant-scale-group/cells-progress-tracker) プロジェクトの一部です。
チームはまた、[Epic Dashboards](https://gitlab.com/gitlab-org/tenant-scale-group/epic-dashboard) を、他のチームが独自のエピックベースの追跡ダッシュボードを作成するために使用できるプロジェクトとしてスピンオフしました。

### キャパシティプランニング {#capacity-planning}

私たちはキャパシティプランニングにシンプルな Issue ウェイトシステムを使用し、各マイルストーンに対して
管理可能な量の作業を確保します。私たちは、チームのスループットと、Time Off by Deel から得られる
各エンジニアの今後の稼働可能状況の両方を、[Google Apps Script](https://script.google.com/home/projects/1cH4Hrv03Kf_dlqPyxPdoyxWcV_x2d2u2PKNnGP_YwNjGifjcD4c29GKJ/edit) を使って考慮します。

ウェイトは集計して使用することを意図しており、ある人にとって一定の時間がかかるものが、
Issue に関する知識のレベルに応じて、別の人にとっては異なる場合があります。私たちは正確であるよう
努めるべきですが、それらが見積もりであることは理解しておきます。ウェイトが正確でない場合や、Issue が
当初想定していたよりも難しくなった場合は、ウェイトを変更してください。なぜウェイトを変更したのかを
示すコメントを残し、EM と PM をタグ付けして、私たちが範囲をよりよく理解し、
改善を続けられるようにしてください。

#### ウェイト {#weights}

Issue にウェイトを付けるには、以下の重要な要素を考慮してください:

- 作業量: コードベースへの変更の想定サイズ。
- 複雑さ:
  - 問題の理解: 問題がどれだけよく理解されているか。
  - 問題解決の難しさ: 遭遇すると予想される難易度のレベル。

開発作業を見積もる際は、Issue に適切なウェイトを割り当ててください:

| Weight     | Description                                                                                                                                                                                                                                                                                      | Examples                                                                                                                                                                                                                                           |
| ---------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1: Trivial | 可能な限り最もシンプルな変更。副作用がないと確信できます。複雑さは無視できる程度です。 | ドキュメントの更新、単純なリグレッション、すでに調査・議論済みで数行のコードで修正できるその他のバグ、または対処方法が正確にわかっているがまだ時間が取れていない技術的負債。 |
| 2: Small   | すべての要件を理解しているシンプルな変更（最小限のコード変更）。小さな不確実性は存在しますが、解決策に確信があります。 | 既存データを公開する新しい API エンドポイントのようなシンプルな機能、または調査がすべて完了している通常のバグやパフォーマンス問題。 |
| 3: Medium  | より大きなコードのフットプリントを伴う変更（例: 多数の異なるファイルや、影響を受けるテスト）。私たちが対処する必要のある不確実性があります。 | バックエンドとフロントエンドのコンポーネントを伴う可能性のある通常の機能、またはほとんどのバグやパフォーマンス問題。 |
| 5: Large   | コードベースの複数の領域に影響を与える、より複雑な変更。リファクタリングも伴う可能性があります。要件が十分に理解されておらず、複数の重要なギャップがあると感じられます。マージリクエストを開始する前に、この Issue をより小さな単位に分解する必要があります。 | バックエンドとフロントエンドのコンポーネントを伴う大規模な機能、または初期調査は行われたものの、まだ再現・理解されていないバグやパフォーマンス問題。 |

ウェイトが 5 以上のものは、可能であれば分解すべきです。

### バックログ整理 {#backlog-refinement}

エンジニアリングチームは毎週、今後の Issue をレビューするためにバックログ整理プロセスを
完了します。この取り組みのゴールは、すべての Issue にウェイトを付けることで、各マイルストーンを
より正確に計画でき、また知識共有も改善できるようにすることです。

バックログ整理プロセスに加えて、エンジニアはこのバックログ整理プロセスに従わずに
任意の Issue を見積もることもできます。

#### ステップ 1: 整理する Issue の特定 {#step-1-identifying-issues-for-refinement}

チームは `workflow::refinement` ラベルを使用して、整理が必要な Issue を特定します。
バックログ整理プロセスの良い候補となる Issue（ウェイトなし、
要件が不明確など）がある場合は、このラベルを使用してください。私たちは
週あたり最大 5 件の Issue を整理します。

[整理 Issue](https://gitlab.com/gitlab-org/tenant-scale-group/group-tasks/-/blob/main/scripts/refinement) は毎週の初めに自動生成されます。
スクリプトは私たちの[ステージプロジェクト](https://gitlab.com/gitlab-org/tenant-scale-group/group-tasks)で調整できます。

#### ステップ 2: Issue の整理 {#step-2-refining-issues}

週を通じて、チームの各エンジニアはバックログ整理のために選ばれた Issue のリストを確認します。[現在のバックログ整理 Issue](https://gitlab.com/gitlab-org/tenant-scale-group/group-tasks/-/issues/?label_name%5B%5D=workflow%3A%3Arefinement)。

各 Issue について、チームメンバーは Issue をレビューし、以下を提供します:

- 見積もりウェイト
- 必要に応じた Issue の分解
- 実装ガイド

Issue を整理する際は、以下を考慮してください:

- 会話は元の Issue 上で続けるか、コンテキストを保持するために関連する議論へのリンクを Issue に記載する
- より多くの情報が集まるにつれて、Issue の説明、実装計画、ラベルを更新する
- 効率のため、エンジニアは完了済みとマークされたすでに整理された Issue の整理をスキップできる
- 修正が明確で簡単な場合、エンジニアは Issue を自分自身にアサインし、ウェイト 1 を付け、修正をプッシュし、Issue をクローズできる

#### ステップ 3: 整理の確定 {#step-3-finalizing-refinement}

エンジニアがインプットを提供する機会を得た後、EM または PM が以下を行います:

- ウェイトを割り当てる
- 懸念がある場合は stable counterparts に知らせる
- `workflow::refinement` ラベルを削除する
- `workflow::ready for development` ラベルを追加する

議論されずウェイトが付けられなかった Issue については、エンジニアと協力して、
PM や UX からより多くの情報を得る必要があるかどうかを確認します。

### レトロスペクティブ {#retrospectives}

私たちはスケジュールされた「マイルストーンごと」のレトロスペクティブを開催し、アドホックな「プロジェクトごと」の
レトロスペクティブを開催することもできます。

#### マイルストーンごと {#per-milestone}

私たちには[マイルストーンレトロスペクティブ Issue](https://gitlab.com/gl-retrospectives/enablement-section/tenant-scale/-/issues) があります。
これらには EM、PM、エンジニア、UX、そしてすべての stable counterparts が含まれます。
すべてのマイルストーンへの参加が強く奨励されています。詳細については、毎月 26 日に
現在進行中のマイルストーンについて作成される[グループレトロスペクティブ](/handbook/engineering/careers/management/group-retrospectives/)を参照してください。

#### プロジェクトごと {#per-project}

ある Issue、機能、またはその他の種類のプロジェクトが、
特に有用な学習体験になった場合、私たちはそこから学ぶために同期または
非同期のレトロスペクティブを開催することがあります。取り組んでいる何かが
レトロスペクティブに値すると思う場合は:

1. なぜレトロスペクティブを開催したいのかを説明する [Issue を作成](https://gitlab.com/gitlab-org/tenant-scale-group/group-tasks/-/issues)し、これを同期にすべきか非同期にすべきかを示します。
1. EM と、関与すべきその他の人（PM や counterparts など）を含めます。
1. 該当する場合は同期ミーティングを調整します。レトロスペクティブからのすべてのフィードバックを、今後の参照のために Issue に追加します。

## リリースステージ {#release-stages}

Organizations は単一の機能ではなくサーフェスエリアであるため、私たちはそれを、
定義された一連のフィーチャーフラグステージ、つまり Experimental から Beta、Limited Availability、GA、
Stable まで通じるリリーストンネルを通じて、協調されたサーフェスとしてリリースします。これにより、
すべての関係者（私たち自身、チーム、顧客）が、任意の作業がどの段階にあるかを共通の言葉で表現できます。

各ステージの完全な定義、その対象者、ターゲットプラットフォーム、フィーチャーフラグについては、
[リリースステージ](release-stages.md)を参照してください。

## エラーバジェット {#error-budgets}

GitLab は[エラーバジェット](/handbook/engineering/error-budgets/)を使用して、私たちの機能の
可用性とパフォーマンスを測定します。各エンジニアリンググループには独自の
バジェット消費があります。Tenant Scale グループの現在の 28 日間の消費は、
この [Grafana ダッシュボード](https://dashboards.gitlab.net/d/product-tenant_scale_error_budget/product3a-error-budgets-tenant-scale?orgId=1&from=now-28d&to=now%2Fm&timezone=utc&var-PROMETHEUS_DS=mimir-gitlab-gprd&var-environment=gprd&var-stage=main)で確認できます。

グループが長期的なスケーラビリティ作業に集中できるように、99.79% のエラーバジェット例外が
[承認](https://gitlab.com/gitlab-com/content-sites/handbook/-/merge_requests/16897)されました。

## エンジニアリングの顧客／サポートローテーションプロセス {#engineering-customersupport-rotation-process}

{{< alert type="note" >}}
**注**: このプロセスは現在、チームのうち Groups & Projects 側に固有のものであり、Organizations はまだ開発中です。プロダクトが一般リリースになったときに、Organizations にも同様のものを展開する予定です。
{{< /alert >}}

2 週間ごとに、Groups & Projects のエンジニア 1 名が、顧客サポートチケットの技術評価の DRI として割り当てられ、サポート Issue や `master` パイプラインの失敗について [#g_organizations](https://gitlab.slack.com/archives/g_organizations) チャンネルを監視し、トリアージと優先順位付けが行われたバグやサポートリクエストに対処します。

### プロセスのまとめ {#process-summary}

- 2 週間ごとに、[#g_organizations_standup](https://gitlab.enterprise.slack.com/archives/C054LN3G0CE) チャンネルの Slack リマインダーが、技術評価トリアージの新しいサポートシフトが始まることをグループに知らせます。
- 各エンジニアは、今後の自分のローテーション（以下のスケジュールに従う）を認識し、Slack リマインダーに従って行動することが求められます。
- 現在ローテーション中の DRI は、その 2 週間を以下の作業に充てるべきです（優先順位順）:
    1. [#g_organizations](https://gitlab.slack.com/archives/g_organizations) でトリガーされた壊れた `master` パイプラインの失敗に関する[アラート](https://gitlab.com/gitlab-org/gitlab/-/pipelines/1858249063)に対応する
    1. 現在のマイルストーンでスケジュールされたサポート Issue に取り組む
    1. 現在のマイルストーンでスケジュールされたバグ Issue に取り組む
    1. 顧客サポートの[バックログ](https://gitlab.com/gitlab-com/request-for-help/-/issues/?sort=created_date&state=opened&label_name%5B%5D=Help%20group%3A%3AOrganizations&first_page_size=20)から新しい Issue をトリアージし、必要に応じてフォローアップ情報を求める
- 上記の項目を一覧表示したライブ更新の Issue がここにあります: https://gitlab.com/gitlab-com/gl-infra/tenant-scale/organizations/groups-and-projects/discussions/-/work_items/2
- DRI が何らかの理由（例: PTO、病欠、他の責務が優先されるなど）で今後のトリアージローテーションシフトを実行できない場合は、別のチームメンバーとローテーションを交換するか、EM に通知して調整してもらうことが求められます。交換が特定されたら、スケジュールを更新する必要があります。
- DRI は、次の参加者に引き継ぐ際に、2026 年のローテーション用のこの [Issue](https://gitlab.com/gitlab-com/gl-infra/tenant-scale/organizations/groups-and-projects/discussions/-/work_items/8) を更新する必要があります。

ローテーションの終わりに、各エンジニアは[チームサポート Issue](https://gitlab.com/gitlab-com/gl-infra/tenant-scale/organizations/groups-and-projects/discussions/-/work_items/8) 内に引き継ぎノートを提供すべきです:

- Issue の説明にあるサンプル形式を使用して、ローテーション中に取り組んだ内容をまとめる
- これを Issue に直接、新しい DRI への ping とともに、（スレッドではなく）新しいルートコメントとして投稿する
- 必要に応じて、新しい DRI はコメントへの返信または Slack で明確化のための質問をすべきです。
- 引き継ぎのためにより難しいコンテキストを確認する必要がある場合は、必要に応じてミーティングを設定する

### ローテーションスケジュール {#rotation-schedule}

スケジュールは [Google スプレッドシート（内部リンク）](https://docs.google.com/spreadsheets/d/1Y0DI8rNG9hMC21fsVTAQlKfu1F883zUn2SsjFLvckYM/edit?usp=sharing)で追跡されます。変更する前にお尋ねください。
