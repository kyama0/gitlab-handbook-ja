---
title: "チームプロセス"
description: "Organizations チームの運営方法"
upstream_path: /handbook/engineering/infrastructure-platforms/tenant-scale/organizations/process/
upstream_sha: 0e6f01390a34aeb6706ace17d8d3c50e74e82d0d
translated_at: "2026-04-29T04:54:37Z"
translator: claude
stale: false
lastmod: "2026-03-02T19:44:15+00:00"
---

## 作業

プロダクトマネージャー（PM）がチーム、エンジニアリングマネージャー（EM）、その他のステークホルダーのインプットを受け、[製品優先順位付けプロセス](/handbook/product/product-processes/#prioritization)に従って Issue のリストをまとめます。
イテレーションサイクルは月の第 2 金曜日まで続き、翌月曜日から新しく始まります。
各マイルストーンはリリースされる GitLab のバージョンで識別されます。

### マイルストーンプランニング

マイルストーン開始前に、グループは[プランニング Issue](https://gitlab.com/gitlab-org/tenant-scale-group/group-tasks/-/issues/?label_name%5B%5D=Planning%20Issue)を使用して調整します。
私たちは次のプロセスに従います:

- PM がマイルストーンのゴールを定義します。
- チームメンバーがマイルストーンに関連すると考える Issue についてコメントします。
- PM と EM が連携して最終的な Issue リストを決定します。
- チーム全体がマイルストーン開始前に予定されている項目をレビューします。

### 何に取り組むか

作業の主なソースは[プランニングボード](https://gitlab.com/groups/gitlab-org/-/boards/7487616?label_name[]=group%3A%3Aorganizations&milestone_title=Started)で、現在のサイクルで予定されているすべての Issue が一覧されています。
Issue に自分自身をアサインすることで、作業中であることを示します。

未回答の質問や不明確な要件など、Issue をすぐに始めることを妨げることがある場合は、Issue にあなたの調査結果と質問を記入する限り、スキップすることができます。
これにより、次にその Issue を担当するエンジニアが役立てることができます。

通常、Issue は直接誰かに割り当てられることはありません。ただし、ある Issue で最も知識やコンテキストを持つことが明らかな場合は除きます。
ただし、会社に大きなインパクトを与えるために、エンジニアが特定のプロジェクトやエピックの ownership を持つことを奨励しています。

### 製品開発ワークフロー

私たちは GitLab の[製品開発ワークフロー](/handbook/product-development/how-we-work/product-development-flow/)ガイドラインに従っています。現在のマイルストーンにおけるすべての Issue のステータスの概要を把握するには、[開発ワークフローボード](https://gitlab.com/groups/gitlab-org/-/boards/2594854)を確認してください。

プロセスは主に次のとおりです:

- `workflow::ready for design` - Issue がデザイン作業を開始できる状態であることを示す
- `workflow::design` - デザイナーが Issue に積極的に取り組んでいることを示す
- `workflow::planning breakdown` - デザインが完了し、実装のためのサブ Issue に分解する準備ができていることを示す。デザインプロセス中のコンテキストと決定を保持するために、可能な限り、デザイン Issue をエピックに昇格させて再利用し、実装 Issue をそれに追加します。これにより、エピックをデザインの[SSOT](/teamops/shared-reality/#single-source-of-truth-ssot)として使用でき、すべての議論が一箇所にまとまり、元のデザイン Issue と対応する実装 Issue との間の不整合を防ぐことができます。
- `workflow::refinement` - Issue がエンジニアリングによるリファインメントを必要としていることを示す。このステップでは、実装ガイドとウェイトを Issue に追加する必要があります。
- `workflow::ready for development` - 項目がエンジニアリングによって作業できる状態であることを示す

### 開発ワークフロー

私たちは GitLab の[エンジニアリングワークフロー](/handbook/engineering/workflow/)ガイドラインに従っています。現在のマイルストーンにおけるすべての Issue のステータスの概要を把握するには、[開発ワークフローボード](https://gitlab.com/groups/gitlab-org/-/boards/2594854)を確認してください。

Issue の担当者として、エンジニアはワークフローラベルを最新の状態に保つことが期待されています。エンジニアが Issue の作業を開始するとき、起点として `workflow::in dev` ラベルをマークし、[開発全体を通じて Issue を更新し続けます](/handbook/engineering/workflow/#updating-workflow-labels-throughout-development)。
Issue をクローズする前に、`workflow::complete` ラベルを追加することが重要です。これは、完了した項目が各月のリリースポストの改善点とバグの概要に表示されるための要件の一つだからです。プロセスは主に次の図に従います:

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

### Issue ボード

以下の Issue ボードで作業を追跡しています:

- [Group::Organizations マイルストーン優先順位](https://gitlab.com/groups/gitlab-org/-/boards/5548886?label_name[]=group%3A%3Aorganizations)
- [Group::Organizations 部門横断優先順位](https://gitlab.com/groups/gitlab-org/-/boards/4424394?label_name[]=group%3A%3Aorganizations)
- [Group::Organizations プランニング](https://gitlab.com/groups/gitlab-org/-/boards/7487616?label_name[]=group%3A%3Aorganizations)
- [Group::Organizations バリデーション](https://gitlab.com/groups/gitlab-org/-/boards/7487708?not[label_name][]=workflow%3A%3Ain%20dev&not[label_name][]=workflow%3A%3Ain%20review&label_name[]=group%3A%3Aorganizations)
- [Group::Organizations 開発ワークフロー](https://gitlab.com/groups/gitlab-org/-/boards/2594854?label_name[]=group%3A%3Aorganizations)
- [Group::Organizations バグ](https://gitlab.com/groups/gitlab-org/-/boards/7487700?label_name[]=type%3A%3Abug&label_name[]=group%3A%3Aorganizations)
- [Group::Organizations リリースポスト](https://gitlab.com/groups/gitlab-org/-/boards/7487687?label_name[]=group%3A%3Aorganizations&label_name[]=type%3A%3Afeature)
- [Group::Organizations マイルストーン](https://gitlab.com/groups/gitlab-org/-/boards/5549104?label_name[]=group%3A%3Aorganizations)
- [Group::Organizations チームメンバー](https://gitlab.com/groups/gitlab-org/-/boards/5549106?label_name[]=group%3A%3Aorganizations)
- [Group::Organizations 重要](https://gitlab.com/groups/gitlab-org/-/boards/1438588?label_name[]=group%3A%3Aorganizations)
- [Group::Organizations コミュニティコントリビューション](https://gitlab.com/groups/gitlab-org/-/boards/7487739?label_name[]=Community%20contribution&label_name[]=group%3A%3Aorganizations)

### トラッキングダッシュボード

Issue ボードに加えて、次のような独自ダッシュボードで主要なイニシアチブの進捗も追跡しています:

- [スキーママイグレーション](https://cells-progress-tracker-gitlab-org-tenant-scale-g-f4ad96bf01d25f.gitlab.io/schema_migration)
- [シャーディングキーマイグレーション](https://cells-progress-tracker-gitlab-org-tenant-scale-g-f4ad96bf01d25f.gitlab.io/sharding_keys)

ダッシュボードは[Cells Progress Tracker](https://gitlab.com/gitlab-org/tenant-scale-group/cells-progress-tracker)プロジェクトの一部です。
チームは、他のチームが独自のエピックベースのトラッキングダッシュボードを作成するために使用できるプロジェクトとして[Epic Dashboards](https://gitlab.com/gitlab-org/tenant-scale-group/epic-dashboard)もスピンオフしました。

### キャパシティプランニング

各マイルストーンで管理可能な量の作業を確保するために、シンプルな Issue ウェイトシステムをキャパシティプランニングに使用しています。Time Off by Deel を使用して、チームのスループットと各エンジニアの今後の可用性の両方を、[Google Apps Script](https://script.google.com/home/projects/1cH4Hrv03Kf_dlqPyxPdoyxWcV_x2d2u2PKNnGP_YwNjGifjcD4c29GKJ/edit)で考慮します。

ウェイトは集計で使用することを意図しており、ある人が特定の時間でできることは、その Issue に関する知識レベルによって他の人とは異なる場合があります。正確さを目指しますが、これらは見積もりであることを理解してください。正確でない場合や Issue が当初の予想より困難になった場合はウェイトを変更してください。ウェイトを変更した理由を示すコメントを残し、EM と PM にタグを付けて、スコープをより深く理解し継続的に改善できるようにしてください。

#### ウェイト

Issue のウェイトを評価する際は、次の重要な要素を考慮してください:

- 作業量: コードベースへの変更の予想規模。
- 複雑さ:
  - 問題の理解: どれだけ問題が理解されているか。
  - 問題解決の難しさ: 遭遇すると予想される困難のレベル。

開発作業を見積もる際は、適切なウェイトを Issue に割り当ててください:

| ウェイト | 説明 | 例 |
| ---------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1: 些細 | 最もシンプルな変更。副作用がないことが確信できます。複雑さはほぼゼロ。 | ドキュメントの更新、既に調査・議論されていて数行のコードで修正できるシンプルなリグレッションやバグ、または正確な対処方法は分かっているが時間がなかった技術的負債。 |
| 2: 小 | シンプルな変更（コード変更が最小限）で、要件をすべて理解しています。いくつかの小さな不確実性はありますが、解決策に自信があります。 | 既存データを公開するための新しい API エンドポイントのようなシンプルな機能、またはすべての調査が既に完了している通常のバグやパフォーマンス問題。 |
| 3: 中 | より大きなコードフットプリントを持つ変更（例: 多くの異なるファイルやテストが影響を受ける）。作業を進めながら解決する必要がある不確実性があります。 | バックエンドとフロントエンドのコンポーネントを持つ通常の機能、またはほとんどのバグやパフォーマンス問題。 |
| 5: 大 | コードベースの複数の領域に影響するより複雑な変更。リファクタリングが含まれる場合もあります。要件が不十分に理解されており、複数の重要なギャップがあると感じています。マージリクエストを開始する前に、この Issue をより小さな部分に分割する必要があります。 | バックエンドとフロントエンドのコンポーネントを持つ大きな機能、または初期調査は行われているが再現や理解がまだできていないバグやパフォーマンス問題。 |

ウェイト 5 以上のものは可能な限り分解する必要があります。

### バックログリファインメント

エンジニアリングチームは毎週、今後の Issue をレビューするためのバックログリファインメントプロセスを実施しています。この作業の目的は、すべての Issue にウェイトを設定することで、各マイルストーンをより正確に計画し、知識共有を改善することです。

バックログリファインメントプロセスに加えて、エンジニアはこのバックログリファインメントプロセスに従わずに任意の Issue を見積もることができます。

#### ステップ 1: リファインメントが必要な Issue の特定

チームは `workflow::refinement` ラベルを使用して、リファインメントが必要な Issue を特定します。バックログリファインメントプロセスの良い候補（ウェイトなし、要件が不明確など）の Issue がある場合は、ラベルを使用してください。週に最大 5 件の Issue をリファインします。

[リファインメント Issue](https://gitlab.com/gitlab-org/tenant-scale-group/group-tasks/-/blob/main/scripts/refinement)は毎週初めに自動生成されます。
スクリプトは[ステージプロジェクト](https://gitlab.com/gitlab-org/tenant-scale-group/group-tasks)で調整できます。

#### ステップ 2: Issue のリファインメント

その週、チームの各エンジニアはバックログリファインメント用に選択された Issue のリストを確認します。[現在のバックログリファインメント Issue](https://gitlab.com/gitlab-org/tenant-scale-group/group-tasks/-/issues/?label_name%5B%5D=workflow%3A%3Arefinement)。

各 Issue について、チームメンバーは次を確認して提供します:

- 見積もりウェイト
- 必要に応じた Issue の分解
- 実装ガイド

Issue をリファインする際は、次の点を考慮してください:

- コンテキストを保持するために会話を元の Issue に残すか、Issue 内の関連する議論へのリンクを提供する
- 情報が集まるにつれて Issue の説明、実装計画、ラベルを更新する
- 効率のために、完了としてマークされた既にリファインされた Issue のリファインメントをスキップできる
- 修正が明確で簡単な場合は、自分自身に Issue をアサインし、ウェイト 1 を付け、修正をプッシュして Issue をクローズできる

#### ステップ 3: リファインメントの最終化

エンジニアがインプットを提供する機会を持った後、EM または PM は次を行います:

- ウェイトを割り当てる
- 懸念事項がある場合は安定したカウンターパートに通知する
- `workflow::refinement` ラベルを削除する
- `workflow::ready for development` ラベルを追加する

議論されてウェイトが付与されなかった Issue については、PM や UX から詳細情報が必要かどうかエンジニアと協力します。

### レトロスペクティブ

「マイルストーンごと」の定期的なレトロスペクティブを開催し、「プロジェクトごと」のアドホックなレトロスペクティブも開催できます。

#### マイルストーンごと

[マイルストーンレトロスペクティブ Issue](https://gitlab.com/gl-retrospectives/enablement-section/tenant-scale/-/issues) があります。
これには EM、PM、エンジニア、UX、そして全ての安定したカウンターパートが含まれます。
すべてのマイルストーンへの参加を強く推奨しています。詳細については、毎月 26 日に現在実行中のマイルストーンに対して作成される[グループレトロスペクティブ](/handbook/engineering/careers/management/group-retrospectives/)を参照してください。

#### プロジェクトごと

Issue、機能、またはその他のプロジェクトが特に有益な学習体験になった場合、それから学ぶために同期または非同期のレトロスペクティブを開催することがあります。取り組んでいることでレトロスペクティブが必要だと思う場合:

1. [Issue を作成して](https://gitlab.com/gitlab-org/tenant-scale-group/group-tasks/-/issues)、なぜレトロスペクティブを開催したいのか、同期か非同期かを説明します。
1. EM と、PM やカウンターパートなど参加すべき全員を含めます。
1. 該当する場合は同期ミーティングを調整します。レトロスペクティブのすべてのフィードバックを将来の参照のために Issue に追加します。

## エラーバジェット

GitLab は機能の可用性とパフォーマンスを測定するために[エラーバジェット](/handbook/engineering/error-budgets/)を使用しています。各エンジニアリンググループには独自のバジェット消費があります。Tenant Scale グループの現在の 28 日間の消費は、この[Grafana ダッシュボード](https://dashboards.gitlab.net/d/product-tenant_scale_error_budget/product3a-error-budgets-tenant-scale?orgId=1&from=now-28d&to=now%2Fm&timezone=utc&var-PROMETHEUS_DS=mimir-gitlab-gprd&var-environment=gprd&var-stage=main)で確認できます。

グループが長期的なスケーラビリティ作業に集中できるよう、99.79% のエラーバジェット例外が[承認されました](https://gitlab.com/gitlab-com/content-sites/handbook/-/merge_requests/16897)。

## エンジニアリングカスタマー/サポートローテーションプロセス


{{% alert %}}
**注意**: このプロセスは現在、Organizations がまだ開発中であるため、チームの Groups & Projects 側に固有のものです。製品が一般リリースされたときに Organizations にも同様のものを展開する予定です。
{{% /alert %}}


2 週間ごとに、Groups & Projects エンジニアがカスタマーサポートチケットの技術評価のための DRI として割り当てられ、サポート Issue や `master` パイプラインの失敗のための [#g_organizations](https://gitlab.slack.com/archives/g_organizations) チャンネルの監視、およびトリアージと優先順位付けが行われたバグやサポートリクエストへの対応を担当します。

### プロセスの概要

- 2 週間ごとに、[#g_organizations_standup](https://gitlab.enterprise.slack.com/archives/C054LN3G0CE) チャンネルでの Slack リマインダーがグループに、技術評価トリアージのための新しいサポートシフトが始まることを知らせます。
- すべてのエンジニアは自分の今後のローテーション（以下のスケジュール参照）を把握し、Slack リマインダーに従ってアクションを取ることが期待されます。
- 現在ローテーション中の DRI は、優先順位の高い順に次の作業に 2 週間を費やします:
    1. [#g_organizations](https://gitlab.slack.com/archives/g_organizations) でトリガーされた壊れた `master` パイプラインの失敗の[アラート](https://gitlab.com/gitlab-org/gitlab/-/pipelines/1858249063)への対応
    1. 現在のマイルストーンでスケジュールされたサポート Issue の作業
    1. 現在のマイルストーンでスケジュールされたバグ Issue の作業
    1. カスタマーサポート[バックログ](https://gitlab.com/gitlab-com/request-for-help/-/issues/?sort=created_date&state=opened&label_name%5B%5D=Help%20group%3A%3AOrganizations&first_page_size=20)からの新しい Issue のトリアージおよび必要に応じてフォローアップ情報の要求
- 上記の項目が一覧された最新の Issue はこちら: https://gitlab.com/gitlab-com/gl-infra/tenant-scale/organizations/groups-and-projects/discussions/-/work_items/2
- 何らかの理由（PTO、病欠、他の責務が優先されるなど）でローテーションシフトを実行できない DRI は、別のチームメンバーとローテーションを交換するか、EM に連絡して調整してもらうことが期待されます。交換が決まったら、スケジュールを更新する必要があります。
- DRI は次の参加者に引き渡す際に、2026 年のローテーションのためにこの[Issue](https://gitlab.com/gitlab-com/gl-infra/tenant-scale/organizations/groups-and-projects/discussions/-/work_items/8)を更新する必要があります。

ローテーションの終わりに、各エンジニアは[チームサポート Issue](https://gitlab.com/gitlab-com/gl-infra/tenant-scale/organizations/groups-and-projects/discussions/-/work_items/8)内に引き継ぎノートを提供する必要があります:

- Issue の説明にある例のフォーマットを使用してローテーション中に取り組んだ内容を要約する
- 新しい DRI への ping とともに Issue に直接投稿する。ルートコメント（スレッドではない）として
- 必要であれば、新しい DRI はコメントへの返信または Slack で質問することができます。
- 引き継ぎのより困難なコンテキストを伝えるために必要であれば、ミーティングを設定する

### ローテーションスケジュール

スケジュールは[Google Sheets（社内リンク）](https://docs.google.com/spreadsheets/d/1Y0DI8rNG9hMC21fsVTAQlKfu1F883zUn2SsjFLvckYM/edit?usp=sharing)で追跡されています。変更前にお知らせください。
