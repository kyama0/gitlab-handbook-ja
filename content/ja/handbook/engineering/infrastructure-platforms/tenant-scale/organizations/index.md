---
title: Organizations チーム
description: "Organizations チームに関する情報"
upstream_path: /handbook/engineering/infrastructure-platforms/tenant-scale/organizations/
upstream_sha: 0e6f01390a34aeb6706ace17d8d3c50e74e82d0d
translated_at: "2026-04-29T04:54:37Z"
translator: claude
stale: false
---

## 概要

Organizations チームの主な焦点は、[Cells](/handbook/engineering/architecture/design-documents/cells/) のコンテキストにおいてデータのシャーディングと分離に必要な Organization エンティティを開発することです。チームは製品内のグループ、プロジェクト、ユーザープロフィールのサポートも提供しています。

### お問い合わせ

私たちに連絡するには、関連するプロジェクト（通常は [GitLab](https://gitlab.com/gitlab-org/gitlab/-/issues/?sort=created_date&state=opened&first_page_size=100)）で Issue を作成し、`~"group::organizations"` ラベルと適切なその他のラベルを追加するのが最善です。

緊急の件については、Slack チャンネル（社内）: [#g_organizations](https://gitlab.slack.com/archives/g_organizations) を気軽にご利用ください。

### ビジョン

チームは Organizations を新しいトップレベルエンティティとして実装することで、GitLab のためのよりスケーラブルで統合されたアーキテクチャの開発に取り組んでいます。

Organizations は[セルラーアーキテクチャ](/handbook/engineering/architecture/design-documents/cells/)全体での配布を可能にする論理コンテナとして機能し、セルフマネージドと SaaS の GitLab インスタンス間の機能的なギャップを橋渡しします。
新しい Organizations エンティティは複数のトップレベルグループの傘として機能し、企業がグループ全体でコンテンツを集約し、組織全体のロールを実装し、コンテンツを他の Organizations から分離できるようにします。

同時に、チームはいくつかの重要な課題に対処することでグループとプロジェクトの改善を目指しています: 多様な企業構造に対応するためのより柔軟な階層の作成、グループ内でのプロジェクトのネストに関する混乱の軽減、製品全体での発見可能性の向上、削除と復元プロセスの標準化、アーカイブ機能と可視性の改善。
これらの改善は総合的に、企業が自社のビジネス構造を表現し権限を管理するための、より直感的で柔軟なシステムを構築することに向けて取り組んでいます。

### ゴール

Organizations グループのエグゼクティブサマリーのゴールには以下が含まれます:

- GitLab.com のデイリーアクティブユーザーの成長をサポートする
- 特定のデータストアの問題がすべてのユーザーに影響しないようにする
- セルフマネージドのユースケースにおける複雑さを最小化または排除する

### チームメンバー

以下の方々が Organizations グループの常任メンバーです:


<p class="my-3 text-sm text-gray-600 italic">チームメンバー情報は <a href="https://handbook.gitlab.com/handbook/engineering/infrastructure-platforms/tenant-scale/organizations/#team-members" rel="external noopener">原文 (英語)</a> を参照してください。</p>


### 安定したカウンターパート

以下の他の職能チームのメンバーが私たちの安定したカウンターパートです:


<p class="my-3 text-sm text-gray-600 italic">チームメンバー情報は <a href="https://handbook.gitlab.com/handbook/engineering/infrastructure-platforms/tenant-scale/organizations/#team-members" rel="external noopener">原文 (英語)</a> を参照してください。</p>


### Organization ロールアウトカウンターパート

以下の方々が Organizations のロールアウトをサポートしています。


<p class="my-3 text-sm text-gray-600 italic">チームメンバー情報は <a href="https://handbook.gitlab.com/handbook/engineering/infrastructure-platforms/tenant-scale/organizations/#team-members" rel="external noopener">原文 (英語)</a> を参照してください。</p>


## プロジェクト

私たちはそれぞれに[直接責任者（DRI）](/handbook/people-group/directly-responsible-individuals/)が割り当てられた複数の大きなプロジェクトに取り組んでいます。
DRI の役割は、必要な作業の範囲を定義し、目標の明確さを確保し、潜在的なブロックやリスクを 3〜6 ヶ月先まで見通す責任を負います。その担当範囲に限定されず、必要に応じて他の領域でも作業します。

**グループ & プロジェクト**

| プロジェクト | DRI | チーム |
| ------ | --- | ---- |
| [状態管理イテレーション 4: レガシー状態チェックを新システムに置き換え](https://gitlab.com/groups/gitlab-org/-/work_items/17958) | Aakriti, Abdul | Shubham |
| [Explore > プロジェクトを Vue に移行](https://gitlab.com/groups/gitlab-org/-/epics/13786) | Peter | Shane |
| [Explore > グループを vue_shared/components/groups_list に移行](https://gitlab.com/groups/gitlab-org/-/epics/13791) | Peter | Shane |
| [プロジェクトアーカイブ機能をグループアーカイブと互換性を持たせる](https://gitlab.com/groups/gitlab-org/-/epics/19690) | Shubham, Abdul | Shane |
| [削除エクスペリエンスの標準化](https://gitlab.com/groups/gitlab-org/-/work_items/18618) | Peter | |

**Organizations**

| プロジェクト | DRI | チーム |
| ------ | --- | ---- |
| [Organization 管理エリアの作成](https://gitlab.com/groups/gitlab-org/-/epics/19424) | Drew | Peter, Jason |
| [コホート A グループを Organization に移管](https://gitlab.com/groups/gitlab-org/-/epics/19841) | Drew | Tim |
| [Rails で最小限の Organization データ分離を強制する](https://gitlab.com/groups/gitlab-org/-/epics/19414) | TBD | Rutger, Alex |

プロジェクトは 1 つまたは複数のエピックで構成される場合があります。
プロジェクトの一部である各エピックには、実装フェーズ中にエンジニアリングの DRI が割り当てられます。
進捗はチームの[エピック進捗ダッシュボード](https://gitlab.com/groups/gitlab-org/-/epic_boards/2071697?label_name%5B%5D=group%3A%3Aorganizations)で追跡しています。
エピックのステータスはさまざまなチームメンバーによって次のように更新されます:

1. チームメンバーがプロジェクトの新しいエピックを作成し、説明にエピックのゴールと利点を定義します。
1. デザインが必要な場合、プロダクトマネージャーはエピックを `workflow::ready for design` としてマークします。テーブルマイグレーションやパーティショニングなどのバックエンドのみの作業はこのステップを必要としません。
1. デザインが完了してエピックに追加されたら、必要に応じてエピックは実装 Issue に分解するために `workflow::refinement` としてマークされます。
1. すべての初期実装 Issue が定義されたとき、エンジニアは `workflow::ready for development` ラベルを追加します。
1. 最初の Issue の作業が始まる際にエピックのエンジニアリング DRI を割り当てます。この時点で、DRI はエピックのステータスを `workflow::in dev` に変更します。
1. 開発フェーズが開始した後に新しい Issue が作成される場合、[バックログリファインメント](#バックログリファインメント)プロセスを通じて対処する必要があります。
1. リファインメントスクリプトに拾い上げられるよう、リファインメントが必要な Issue に今後のマイルストーンが割り当てられていることを確認します。
1. エピックの最後の未解決 Issue がクローズされたら、週次グランドレビューでエピックをフラグ立てする必要があるかどうか検討します。フラグ立てが必要な場合は、次のグランドレビューでエピックをクローズすべきという旨を EM に通知するコメントをエピックに追加します。不要な場合はエピックをクローズします。

## ミーティング

私たちはグローバルに分散したグループであり、主に非同期でコミュニケーションしていますが、同期ミーティングも実施しています。全員が参加できるとは限らないため、録画して文書化した要約（[アジェンダ](https://docs.google.com/document/d/1Z90O_U3mrUoRkmeb5ZqtoM351ASoRTnuFiuou4IMY_k/edit?tab=t.0#heading=h.cbjs5jlz67tt)）を共有しています。

現在、以下の定期ミーティングが予定されています:

### 毎週水曜日 - Organizations チーム同期

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

### 製品ソリューションワークフロー

私たちは GitLab の[製品開発ワークフロー](../../../../../../content/handbook/product-development/how-we-work/product-development-flow/_index.md)ガイドラインに従っています。現在のマイルストーンにおけるすべての Issue のステータスの概要を把握するには、[開発ワークフローボード](https://gitlab.com/groups/gitlab-org/-/boards/2594854)を確認してください。

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

独自の領域を超えたコードベースへの変更を含む新しい MR を作成する際は、CODEOWNERS などの自動化がトリガーしない場合でも、影響を受けるチームに積極的に連絡を取る必要があります。

- 変更内容が可視性のためだけの場合でも、変更を通知する適切な担当者を見つけるために追加の努力をする必要があります。
- ownership が不明な場合（CODEOWNERS などが owner を特定していないなど）、エンジニアはこれを明示的にフラグ立てし、関与できる DRI を特定する手助けを求めるべきです。
- 所有者が不明な場合は、次のアプローチを検討してください:
  - オープンなチームチャンネルで質問する
  - EM/PM にタグを付けて調査を依頼する
  - コードベースの履歴をレビューして最近のコントリビューターを特定する
  - 所有権情報の関連ドキュメントを確認する

### エピックボード

以下のエピックボードで進行中のイニシアチブを追跡しています:

- [Group::Organizations エピック進捗](https://gitlab.com/groups/gitlab-org/-/epic_boards/2071697?label_name%5B%5D=group%3A%3Aorganizations)

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
- [Groups and Projects サブチーム開発](https://gitlab.com/groups/gitlab-org/-/boards/11102006?label_name[]=Category%3AGroups%20%26%20Projects&label_name[]=group%3A%3Aorganizations&milestone_title=Started)

### トラッキングダッシュボード

Issue とエピックボードに加えて、次のような独自ダッシュボードで主要なイニシアチブの進捗も追跡しています:

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

グループが長期的なスケーラビリティ作業に集中できるよう、99.85% のエラーバジェット例外が[承認されました](https://gitlab.com/gitlab-com/www-gitlab-com/-/merge_requests/121190)。

## ダッシュボード

グループのメトリクスは、以下の Tableau ビューで確認できます:

- [主要なエンジニアリングメトリクス](https://10az.online.tableau.com/#/site/gitlab/workbooks/2251271/views)
- [マージリクエストメトリクス](https://10az.online.tableau.com/#/site/gitlab/workbooks/2104461/views)
- [フレーキーテスト Issue](https://10az.online.tableau.com/#/site/gitlab/workbooks/2283052/views)
- [低速 RSpec テスト Issue](https://10az.online.tableau.com/#/site/gitlab/workbooks/2354045/views)
