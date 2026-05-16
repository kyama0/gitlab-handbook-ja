---
title: "Gitaly チーム"
upstream_path: "/handbook/engineering/infrastructure-platforms/tenant-scale/gitaly/"
upstream_sha: "0e6f01390a34aeb6706ace17d8d3c50e74e82d0d"
translated_at: "2026-04-28T00:00:00Z"
translator: claude
stale: false
lastmod: "2026-03-04T12:15:15-08:00"
---

## Gitaly とは何か？

Gitaly チームは、GitLab インスタンスの Git データストレージ層、_特に GitLab.com_ が、信頼性が高く、安全で高速であることを確保するためのシステムを構築・保守する責任があります。Gitaly の詳細については、[リポジトリの README](https://gitlab.com/gitlab-org/gitaly/-/blob/master/README.md) と以下の[ロードマップ](#roadmap)を参照してください。

チームには、お客様に信頼性が高く、スケーラブルで高速なデータストレージを提供するために協力している[バックエンドエンジニア](/job-description-library/engineering/development/backend/#gitaly)と [SRE](/job-description-library/engineering/infrastructure/site-reliability-engineer/#gitaly) が含まれています。

### 機能的な境界

GitLab は Gitaly プロジェクトの主なコンシューマーですが、Gitaly は GitLab 外部でも使用できるスタンドアロンの製品です。そのため、Gitaly の周りに機能的な境界を達成しようとしています。目的は、Gitaly プロジェクトが Git データを管理するためのインターフェースを作成するが、データをどのように管理するかについてビジネス上の決定を行わないことを確保することです。

例えば、Gitaly はストレージソリューション間で Git リポジトリを移動するための堅牢で効率的な API セットを提供できますが、そのような移動がいつ発生すべきかを決定するのは呼び出し側のアプリケーションの役割となります。

ビジネスの入力とは完全に独立したプロセス（リポジトリのメンテナンスなど）は、Gitaly プロジェクトを使用するすべての人に実質的な価値を提供するため、Gitaly 内に完全に含まれるべきです。

### ロードマップ {#roadmap}

公開されている [Gitaly の製品方向性](https://about.gitlab.com/direction/gitaly/)をご覧ください。

ロードマップを駆動する[ビジョンと原則](https://internal.gitlab.com/handbook/engineering/infrastructure/core-platform/systems/gitaly/roadmap/)は、内部ハンドブックにあります。

現在のロードマップは[この Epic ボード](https://gitlab.com/groups/gitlab-org/-/epic_boards/1058926?label_name[]=Roadmap&label_name[]=group%3A%3Agitaly)です。管理方法については以下の[ロードマッププランニング](#roadmap-planning)を参照してください。

#### 注目すべき今後の大規模アーキテクチャ変更

- [オブジェクトプールの設計のイテレーション](https://docs.gitlab.com/ee/architecture/blueprints/object_pools/)
- [リポジトリバックアップの改善](https://docs.gitlab.com/ee/architecture/blueprints/repository_backups/)
- [Gitaly 適応並行制限](https://docs.gitlab.com/ee/architecture/blueprints/gitaly_adaptive_concurrency_limit/)
- [純粋な HTTP/2 サーバーでの upload-pack トラフィックの処理](https://docs.gitlab.com/ee/architecture/blueprints/gitaly_handle_upload_pack_in_http2_server/)
- [Gitaly でのトランザクション管理](https://docs.gitlab.com/ee/architecture/blueprints/gitaly_transaction_management/)

## 安定したカウンターパート

以下の他の機能チームのメンバーが私たちの安定したカウンターパートです:


<p class="my-3 text-sm text-gray-600 italic">チームメンバー情報は <a href="https://handbook.gitlab.com/handbook/engineering/infrastructure-platforms/tenant-scale/gitaly/#team-members" rel="external noopener">原文 (英語)</a> を参照してください。</p>


## チームへのお問い合わせ方法

### 緊急 Issue と停止

サポート組織の一員でない場合は、まずサポートに助けを求めることを検討してください。サポートはより良いアベイラビリティを持ち、ほとんどの一般的なケースで対応できます。

それでも助けが必要な場合は、[こちら](https://gitlab.com/gitlab-com/request-for-help/-/issues/new?issuable_template=SupportRequestTemplate-Gitaly)で Issue を提起してください。即座の可視性のために [#g_gitaly](https://gitlab.slack.com/archives/g_gitaly) に投稿し、EM と PM、および一緒に作業しているサポート担当者、そして Gitaly のオンコールチームメンバーに通知するために `@tier2-oncall-gitaly` にタグ付けしてください。

#### オンコールローテーション

Gitaly のオンコールは、以下の人々からのみ連絡を受けるべきです:

- **本番インシデント時のみ** SRE オンコールまたは IMOC。
- **お客様の緊急事態時のみ** サポートエンジニアまたはサポートマネージャー。

これらのケースには Slack で `/incident escalate` を使用し、「On-call teams」の下の Gitaly EOC を選択してください。
その他のすべてのケースは [カスタマー Issue](#customer-issues) の下で Issue を提起してください。

これらのケース以外ではオンコールに連絡しないでください。お客様の緊急事態を取り組んでいるがサポートの一員でない場合は、代わりにサポートに連絡してください！

##### ローテーション

[incident.io スケジュール](https://app.incident.io/gitlab/on-call/schedules/01JJWAE08T9WDE8T6D4VZPBNXE?startTime=2025-03-03T00%3A00%3A00.000%2B00%3A00&timePeriodOption=two_weeks&calendarToggle=timeline)がオンコールの担当者の情報源です。

ローテーションはチームメンバーの業務時間中にスタッフされます（週末なし）。チームメンバーの分布を考慮すると、保証なしで平日の 24 時間をカバーします。

- 週末は明示的に対象外（スタッフなし）であり、エスカレーションは現在の EOC ローテーションにフォールバックする必要があります。
- 業務時間中のみの責任であるため、明示的に指定されない限り追加の報酬はありません。
- シフト後に Workday で `the On-Call Time in Lieu` オプションを選択することで代替休暇を取得できます。

##### オンコールシフト中の期待事項

- 合理化されたオンボーディングプロセスについては[レスポンダークイックスタートガイド](https://gitlab.com/gitlab-com/runbooks/-/blob/master/docs/incident-io-onboard/oncall.md?ref_type=heads#responder-quick-start-guide)を参照してください。
**注意: Gitaly チームへのすべてのエスカレーションは incident.io を通じて行われます**
- オンコール中の incident.io からの連絡に対して 15 分の応答時間。これは `@tier2-oncall-gitaly` Slack ハンドルへの ping には適用されません。これは Gitaly のオンコール担当者に関連する出来事を通知するために使用すべきですが、緊急事態には使用すべきではありません。
  - オンコールは_利用可能で連絡可能_であることが期待されます（必ずしも積極的に作業している必要はありませんが、この SLO 内に調査を開始できる状態であること）。
  - シフト終了の 15 分未満前に連絡を受けた場合でも、応答してインシデントを明示的に引き継ぐ必要があります。
- `#g_gitaly` チャンネルでの質問と新しいサポートリクエスト Issue の連絡先として機能する。
  - `#g_gitaly` チャンネルでのお問い合わせにベストエフォートベースで対応する。
  - 新しいサポートリクエスト Issue のトリアージ: 緊急度を確立し、EM/PM と協力してマイルストーンを割り当てる。
- 継続的な本番インシデントとお客様エスカレーションは、退任するオンコールから Slack のインシデントチャンネルを使用して次の Gitaly のオンコール担当者に明示的に引き継がれます。
- チームメンバーは PTO と祝日のカバレッジを見つける責任があります。[`incident.io` モバイルアプリケーション](https://play.google.com/store/apps/details?id=com.incidentio.incidentio&hl=en_IN)をインストールし、`Schedules` に移動して人アイコン（矢印付き）をクリックしてカバーをリクエストしてください。
- サポートによって連絡を受けた長時間のお客様緊急コール中に、Issue が Gitaly から外れ、あなたの専門知識が積極的に必要でなくなった場合は、サポートエンジニアに積極的に離席できるか確認してください。受動的に監視を続けることができ、Gitaly の関与が再び必要になった場合は再度参加できます。

### カスタマー Issue {#customer-issues}

[こちら](https://gitlab.com/gitlab-com/request-for-help/-/issues/new?issuable_template=SupportRequestTemplate-Gitaly)で Issue を提起してください。即座の可視性のために [#g_gitaly](https://gitlab.slack.com/archives/g_gitaly) に投稿してください。

**お客様エスカレーションと関与に関する注記**

お客様が必要とするときは喜んでお手伝いします！ただし、私たちは主に_開発_チームであり、「フィールドエンジニアリング」に対応できるわけではありません。

私たちの_エンジニア_は、できれば[非同期](/handbook/company/culture/all-remote/asynchronous/)で次のことをお手伝いできます:

- サポートおよび CSM との緊密なパートナーシップの中で、_データ_に基づいた深い技術調査と優れた技術的なコラボレーション
- 製品レベルの修正または改善の提供、EM と PM の[指揮の下](#working-with-product)で通常どおりスケジュールされて結果がリリースされる作業
- 何かが不明な場合のドキュメントの改善

_エンジニアリングマネージャー_（`@jcaigitlab`）と_プロダクトマネージャー_（`@mjwood`）は、ロードマップ、製品機能とタイムラインの明確化が必要な場合や、正しい優先順位付けを確保するためにお客様と関わることも喜んでいます。

ただし、以下の場合は適切ではありません:

- セルフホスト環境での GitLab インスタンスの設定またはアーキテクチャに関するアドバイス（[リファレンスアーキテクチャ](https://docs.gitlab.com/ee/administration/reference_architectures/)とプロフェッショナルサービスが対応できます）
- 明確な終了基準のない関与（まず明確にしてください。「話し合うために電話しましょう」は通常このカテゴリに該当します）
- 長期的な「アドバイスをください」シナリオ（サポートとドキュメントを参照するか、プロフェッショナルサービスをご利用ください）

この[Epic](https://gitlab.com/groups/gitlab-org/-/epics/11576) では、この関与モデルの開発の可能性について議論しています。

### 通常優先度のリクエスト

Gitaly チームに何かを取り組んでもらうには、[Gitaly Issue トラッカー](https://gitlab.com/gitlab-org/gitaly/issues)で Issue を作成し、`group::gitaly` と `workflow::problem validation` ラベル、およびその他の適切なラベルを追加するのが最善です。その後、上記にリストされている関連するプロダクトマネージャーおよび/またはエンジニアリングマネージャーをタグ付けしてください。

情報リクエストやその他の簡単な一回限りのことについては、Issue に注意を向けるために Slack の [#g_gitaly](https://gitlab.slack.com/archives/g_gitaly) を気軽にご利用ください。

### `Infradev` ラベルが付いた Issue

これらは通常、厳格な SLO 追跡を持つ[是正措置またはその他のフォローアップ項目](/handbook/engineering/workflow/#infradev)です。EM および/または PM が[これらのダッシュボード](#useful-links)をポーリングすることで、上記いずれかのパスを通じてスケジュールされます。

#### トレーニング資料

- https://handbook.gitlab.com/handbook/engineering/on-call/#expectations-for-on-call
- [Gitaly のデバッグ](debug/)
- [本番トレーニング](https://gitlab.com/gitlab-org/gitaly/-/issues/new?issuable_template=Production%20Training) Issue

#### ローター管理

メカニクス（オンコールの交換、ローテーションへの新しいチームメンバーの追加）については https://handbook.gitlab.com/handbook/engineering/on-call/#pagerduty を参照してください。

## チームメンバー


<p class="my-3 text-sm text-gray-600 italic">チームメンバー情報は <a href="https://handbook.gitlab.com/handbook/engineering/infrastructure-platforms/tenant-scale/gitaly/#team-members" rel="external noopener">原文 (英語)</a> を参照してください。</p>


## プロダクトとの連携 {#working-with-product}

### Gitaly のアジャイルワークフロー

一般的に、[製品開発フロー](/handbook/product-development/how-we-work/product-development-flow/#workflow-summary)に従って作業をスケジュールおよび追跡します。

作業は小さなチャンク（2〜3 日の作業）で実行され、それぞれが Issue として追跡されます。これにより、安全なコンテキスト切り替えのための自然な「チェックポイント」が可能になります。
トリアージとスケジューリングは、現在の作業の実行とは別です。すべての受信作業が追跡され、新しい作業を選ぶことについて意図的です。

すべての種類の受信作業（プロジェクトと臨時の割り込みの両方）は、EM と PM のトリアージを通過します。実現可能性、製品の戦略的ロードマップとの適合性などについてエンジニアリングの相談がある場合があります。一部はスケジュールされ、一部はバックログに移ります。その取り組みが必要でないか、ロードマップと整合していないと判断された場合は、将来の参考のためにクローズされる理由のコメント付きで Issue をクローズします。

マイルストーンのスコープを、意欲的だが圧倒的でないタスクリストになるように設定することを目指しています。受信インシデントのためにある程度の余裕を意図的に残します。
作業の終わりなき山という感覚を避けるために、健全なワーク/ライフバランスを促進します。
マイルストーンはあくまで推奨であり、ベストエフォートベースで作業することを強調することも重要です。

厳格な SLO を持つ Issue については、[以下](#handling-issues-with-strict-slo)で定義されたプロセスに従います

Issue では次のワークフローラベルを使用します:

1. `workflow::problem validation` - 追求するかもしれない/しないかもしれない機能を置くのに良い場所。これはプロダクトがユーザーインタビュー、コスト分析、市場適合性などを行い、追求する機会であるかどうかを決定できる場所です。
1. `workflow::solution validation` - エンジニアリングが将来のソリューションを調査/提案する必要がある機能/Issue、またはより小さな Issue に分解する必要がある機能/Issue にこのラベルを使用します。
1. `workflow::planning breakdown` - 次のいくつかのマイルストーン（ブロックされていないか間もなくブロック解除される予定で、既知のソリューションがある）でスケジュールする準備ができている Issue。長期実行（事前承認済み）プロジェクトのリーダーはこれを使用して PM とコミュニケーションを取ります。
1. `workflow::ready for development` - マイルストーン（現在または将来）にスケジュールされた作業。
1. `workflow::in dev` - エンジニアリングチームが積極的に作業中
1. `workflow::in review` - レビュー中の作業
1. `workflow::verification` - コードが本番環境にあり、DRI エンジニアによる検証待ち
1. `workflow::complete` - 変更が検証されており、Issue をクローズできる

確実にリリースに向けて優先したい Issue には `Deliverable` ラベルが付けられ、リストの上部に移動されます。
これらの `Deliverable` Issue は、これらの Issue に取り組むことに関して GitLab とお客様へのコミットメントを示す手助けになります。

#### ワークフロー

##### プロジェクト作業 {#project-work}

[Gitaly の最上位 Epic](https://gitlab.com/groups/gitlab-org/data-access/gitaly/-/epics/1)
にはチームが取り組んでいるプロジェクトを表すリンクされた Epic が含まれています。チームメンバーは
Epic の[主要オーナー](#dri--supporting-contributors)または
[サポート貢献者](#dri--supporting-contributors)のいずれかになります。これにより、チーム全体で知識が共有されます。

###### DRI とサポート貢献者 {#dri--supporting-contributors}

Epic の [DRI](/handbook/people-group/directly-responsible-individuals/) は、プロジェクトの技術的方向性に関する[決定を行う](/handbook/leadership/making-decisions/#making-decisions)責任を負います。決定を行うことには、提案を作成し、同僚およびエンジニアリングマネージャーからのフィードバックを集めることが含まれます。また、該当する場合にはチーム外のステークホルダーと連絡を取り協力することも含まれます。

DRI はまた、プロジェクトマネジメントの責任も負います。これは Epic を関連する Issue で最新の状態に保ち、もはや関連のない Issue を削除し、次の形式で Epic の自動生成コメントに週次更新を書くことを意味します:

```markdown
HIGH_LEVEL_SUMMARY

:tada: **achievements**:
-

:issue-blocked: **blockers**:
-

:arrow_forward: **next**:
-
```

Epic のサポート貢献者は、Issue への取り組み、MR のレビュー、技術的なディスカッションへの参加において DRI をサポートする責任があります。セカンダリオーナーは DRI が不在の場合（バンド幅に応じて）主要オーナーとして代理を務めることもできます。

サポート貢献者は強く推奨されますがオプションです。プロジェクトに複数のセカンダリオーナーがいることもあります。

全員が DRI である必要はありませんが、全員が少なくとも 1 つのプロジェクトのサポート貢献者であるべきです。

DRI とサポート貢献者の両方を持つ構造は、レビューと承認はチームの誰でも行えるため、MR を前進させるための厳格な要件を導入しません。

##### テクニカルロードマップ、カスタマー Issue、クロスファンクショナル Issue

[Gitaly テクニカルロードマップ & カスタマー Issue](https://gitlab.com/groups/gitlab-org/-/boards/8913037?label_name[]=workflow%3A%3Aready%20for%20development&milestone_title=Upcoming)
ボードには、プロジェクトの一部ではないが、対処することが重要な一回限りの Issue が含まれています。これには[テクニカルロードマップ](/handbook/engineering/#technical-roadmaps)Issue、カスタマー Issue、および他のチームが依存する Gitaly のクロスファンクショナル作業が含まれます。これらの Issue は優先度でソートされます。チームメンバーはプロジェクト Epic の一部として取り組んでいる Issue に加えて、このボードから作業を選ぶことができます。

経験則として、[プロジェクト](#project-work)作業とテクニカルロードマップ、カスタマー Issue の比率はおよそ 70/30 であるべきです。

##### 緊急と高優先度の Issue

P1/S1 の Issue は緊急に対処すべきです。そのような Issue がまだスケジュールされていない場合は、[行動バイアス](/handbook/values/#operate-with-a-bias-for-action)が奨励されます。
現在のマイルストーンに引き込んでいきますが、EM と PM に通知してください。

##### ブロックされた Issue

作業がブロックされている場合は、`workflow::blocked` を使用し、明確にするためにブロッキング Issue を設定してください。その後、他のものを選ぶ前に助けを求め、および/または他のチームメンバーのブロックされた作業のブロック解除を手伝うことを検討してください。

長時間ブロックされた Issue は、マイルストーンを削除して割り当てを解除することでこのプロセスから削除する必要があります。

#### チームへの作業追加

誰でも、より多くの作業が発見された際に新しい Issue を提起し、このプロセスに取り込むことができます。そのためには、Issue を提起し、EM と PM にタグ付けし、マイルストーンなしで `workflow::planning breakdown` を割り当ててください。実行する必要がある_内容_と_理由_（つまり、影響と緊急性）の両方を説明し、作業を選ぶ準備ができているかどうかを明確にしてください。（これは、プロジェクト DRI がプロジェクトの次のステップをワークフローに追加する方法でもあります。）

#### メタ

プロダクトマネージャーとエンジニアリングマネージャー（Gitaly と Git チームの両方）の間で週次の通話が行われます。誰でも参加歓迎であり、これらの通話はグループに影響を与えるブロッカー、懸念事項、状況更新、成果物、またはその他の考えを議論するために使用されます。

### ロードマッププランニング {#roadmap-planning}

現在のロードマップは[この Epic ボード](https://gitlab.com/groups/gitlab-org/-/epic_boards/1058926?label_name[]=Roadmap&label_name[]=group%3A%3Agitaly)です。四半期以上継続するテーマ/プロジェクト（場合によってははるかに長い）で構成されています。後者の場合、サブプロジェクトをロードマップに直接追加することは許容されます。

- 誰でもプロジェクトを提案できます: Epic を提起してチーム（および EM+PM）とディスカッションしてください。`group::gitaly` ラベルをお忘れなく。
- 承認されたら、`Roadmap` ラベルを追加します。
- 継続中のロードマップ項目は `roadmap::now` を取得し、`roadmap::next` と `roadmap::later` は現在のところトリアージされて将来に押し出されたものを示します。
- 四半期ごとのプランニングでは:
  - ロードマップ項目をレビューします（[ビジョンと原則](https://internal.gitlab.com/handbook/engineering/infrastructure/core-platform/systems/gitaly/roadmap/)からの議論、現在のビジネス優先事項などを使用）
  - そして、それらの目標を前進させる OKR を採用します。

### 四半期プランニング

四半期プランニングは、全員のインプットを得ながら次の 3 マイルストーンについて毎四半期の前に行われます。その時点では、実行する必要がある作業についての良いアイデアがすでに必要です。

プロセスは次のとおりです:

1. EM+PM（エンジニアとステークホルダーのインプットを受けて）: 部門レベルの OKR と整合した作業スコープを決定します。

1. EM+PM+エンジニア: ロードマップ項目に基づき、3 マイルストーン（つまり 1 四半期）で完了できるより小さな Epic/Issue を必要に応じて提起します。全体的なプロジェクト Epic に紐づけます。これは実際の作業を追跡する場所です。

1. EM: [Gitaly 最上位 Epic](https://gitlab.com/groups/gl-gitaly/-/epics/1)を変更して作業を反映させます。

1. PM: 四半期のスコープが明確になったら、Issue のリストを取得し、3 つのマイルストーンのうち 1 つを割り当て、分解が必要な大きな Issue については `workflow::planning breakdown`（または `workflow::ready for development`）を割り当てます。

1. エンジニア: `workflow::planning breakdown` 項目を分解し、必要に応じてより小さな Issue を提起して、合理的な範囲で同じ 3 マイルストーンに追加します。必要に応じて例外を提起します。

### 厳格な SLO を持つ Issue の処理 {#handling-issues-with-strict-slo}

`Infradev` ラベルが付いた Issue は通常、厳格な SLO 追跡を持つ[是正措置またはその他のフォローアップ項目](/handbook/engineering/workflow/#infradev)です。これらは上記いずれかのパスまたは EM によってスケジュールされます。

1. EM+PM: 少なくとも週次でダッシュボードをポーリングします。SLO を満たせるようにこれらの Issue をトリアージしてスケジュールします。必要に応じて、Issue を Gitaly トラッカーに移動するか、作業ボードに表示されるようにプロキシ Issue を提起して、ブロッキングとしてマークします。`workflow::ready for development` 列の上部に Issue をドラッグします。

1. EM+PM: Issue がブロックされているか進行中の作業に依存している場合は、SLO と保留中の作業に合ったマイルストーンを追加します（忘れないように）。ブロッキング作業が先にスケジュールされることを確保します。

1. エンジニア: この作業を優先的に選んでください。元の Issue に頻繁（最大週次、変更がなくても）の更新を投稿してください。ブロッキング Issue はそのようにマークしてください。

## Gitaly のコンシューマー

計画された変更、更新、破壊的な変更の可能性についての常時コミュニケーションフローを確保するために、[#g_gitaly](https://gitlab.slack.com/archives/g_gitaly) Slack チャンネルがあります。チャンネルでは、サービスを使用するすべてのチームに更新を提供しますが、計画された変更または改善についてのフィードバックと洞察を提供するための支援も求めます。

このプロアクティブなコミュニケーションをさらに支援するために、コードベースの調査と Gitaly を使用するすべてのチームとの調整を支援するためのコンシューマー側の個別のカウンターパートもあります。コンシューマー側の DRI は Igor Drozdov です。

Gitaly のコンシューマーは:

- [GitLab Rails](https://gitlab.com/gitlab-org/gitlab)
- [GitLab Shell](https://gitlab.com/gitlab-org/gitlab-shell)
- [GitLab Workhorse](https://gitlab.com/gitlab-org/gitlab/-/blob/master/doc/development/workhorse/index.md)
- [GitLab Elasticsearch Indexer](https://gitlab.com/gitlab-org/gitlab-elasticsearch-indexer)

## Gitaly の非推奨

Gitaly は多くのお客様向け機能を提供しています。そのため、お客様向け機能のすべての非推奨は、標準の [GitLab 機能非推奨ガイダンス](/handbook/marketing/blog/release-posts/#deprecations-removals-and-breaking-changes)に従い、[非推奨ドキュメントページ](https://docs.gitlab.com/ee/update/deprecations.html)内で告知されます。

Gitaly はまた、GitLab や Gitaly と直接インターフェースする他のお客様が使用する、多くの非お客様向け機能も提供しています。これらの Gitaly レベルの非推奨は、GitLab エンドユーザーが直接インターフェースするように設計されていないため、上記の方法を使用して告知されません。これらの非お客様向け機能の例として、GitLab ユーザーが呼び出すべきでないストレージレベル API があります。

## メトリクス

### gitlab.com 上での

- [インシデント](https://gitlab.com/gitlab-com/gl-infra/production/-/issues/?sort=created_date&state=all&label_name%5B%5D=Service%3A%3AGitaly&label_name%5B%5D=incident&first_page_size=100)（すべての連絡がインシデントではありません）
- [連絡](https://nonprod-log.gitlab.net/goto/2e1a9f00-f006-11ed-bb50-33eb1f5eb489)
- [グローバル Apdex](https://dashboards.gitlab.net/d/gitaly-main/gitaly-overview?orgId=1&viewPanel=3357097446)
- [アラート](https://log.gprd.gitlab.net/goto/17c536b0-efd0-11ed-8afc-c9851e4645c0)（S1/S2 はページング、S3/S4 はページングなし）

### 便利なリンク {#useful-links}

- [Gitaly のデバッグ](debug/)
- [エラーバジェット](https://dashboards.gitlab.net/d/stage-groups-detail-gitaly/stage-groups-gitaly-group-error-budget-detail?orgId=1&from=now-28d%2Fm&to=now)
- [MR レビューワークロード](https://gitlab-org.gitlab.io/gitlab-roulette/?currentProject=gitaly)

## チーム開発

### オンボーディング

チーム固有のオンボーディングを完了するには、[こちら](https://gitlab.com/gitlab-org/gitaly/-/issues/new?issuable_template=Team%20Member%20Onboarding)で Issue を提起してください。

### オフボーディング

メインテナー権限が取り消され、承認済み承認者リストから開発者を削除するには、`gl-gitaly` GitLab.com グループから削除してください。
