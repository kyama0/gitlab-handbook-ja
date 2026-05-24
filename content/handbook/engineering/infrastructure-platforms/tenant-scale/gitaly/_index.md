---
title: "Gitaly Team"
upstream_path: /handbook/engineering/infrastructure-platforms/tenant-scale/gitaly/
upstream_sha: 877082e5cd4baeabe3d6e802b3b4b1efdb6573f1
translated_at: "2026-05-23T00:00:00Z"
translator: claude
stale: false
lastmod: "2026-05-20T09:32:02-07:00"
---

## Gitaly とは?

Gitaly チームは、GitLab インスタンス、_特に GitLab.com_ の Git データストレージ層が、信頼性が高く、安全で、高速であることを保証するシステムの構築と維持に責任を持ちます。Gitaly の詳細については、[リポジトリの README](https://gitlab.com/gitlab-org/gitaly/-/blob/master/README.md) と以下の [ロードマップ](#roadmap) を参照してください。

チームには [Backend Engineer](/job-description-library/engineering/development/backend/#gitaly) と [SRE](/job-description-library/engineering/infrastructure/site-reliability-engineer/#gitaly) が含まれ、信頼性が高くスケーラブルで高速なデータストレージを顧客に提供するために協働しています。

### 機能の境界

GitLab は Gitaly プロジェクトの主要な利用者ですが、Gitaly は GitLab の外部でも使用できるスタンドアロンの製品です。そのため、私たちは Gitaly の周りに機能の境界を確立することを目指しています。この目的は、Gitaly プロジェクトが Git データを管理するためのインターフェースを作成する一方で、データの管理方法に関するビジネス上の判断を下さないようにすることです。

たとえば、Gitaly はストレージソリューション間で Git リポジトリを移動するための堅牢で効率的な API のセットを提供できますが、そのような移動をいつ行うべきかを決定するのは呼び出し元のアプリケーションに委ねられます。

ビジネス上の入力から完全に独立したプロセス（リポジトリメンテナンスなど）は、Gitaly プロジェクトを使用するすべての人に多大な価値を提供するため、Gitaly 内に完全に含まれるべきです。

### ロードマップ {#roadmap}

公開されている [Gitaly のプロダクトディレクション](https://about.gitlab.com/direction/gitaly/) を参照してください。

ロードマップを駆動する [ビジョンと原則](https://internal.gitlab.com/handbook/engineering/infrastructure/core-platform/systems/gitaly/roadmap/) は内部ハンドブックにあります。

現在のロードマップは [このエピックボード](https://gitlab.com/groups/gitlab-org/-/epic_boards/1058926?label_name[]=Roadmap&label_name[]=group%3A%3Agitaly) です。これがどのように管理されているかについては、以下の [ロードマップ計画](#roadmap-planning) を参照してください。

#### 今後の主要なアーキテクチャ変更の注目点

- [オブジェクトプールの設計を反復する](https://docs.gitlab.com/ee/architecture/blueprints/object_pools/)
- [リポジトリバックアップの再設計](https://docs.gitlab.com/ee/architecture/blueprints/repository_backups/)
- [Gitaly Adaptive Concurrency Limit](https://docs.gitlab.com/ee/architecture/blueprints/gitaly_adaptive_concurrency_limit/)
- [純粋な HTTP/2 サーバーで upload-pack トラフィックを処理する](https://docs.gitlab.com/ee/architecture/blueprints/gitaly_handle_upload_pack_in_http2_server/)
- [Gitaly のトランザクション管理](https://docs.gitlab.com/ee/architecture/blueprints/gitaly_transaction_management/)

## Stable Counterparts

他の機能チームの次のメンバーが、私たちの stable counterpart です:

{{< engineering/stable-counterparts role="[&,] Systems:Gitaly( API)?" manager-role="Backend Engineering Manager, Gitaly" >}}

## チームへの連絡方法

### 緊急の問題と障害

Support 組織の一員でない場合は、まず彼らに助けを求めることを検討してください。Support の方が対応可能性が高く、ほとんどの一般的なケースで助けられます。

それでも助けが必要な場合は、[こちら](https://gitlab.com/gitlab-com/request-for-help/-/issues/new?issuable_template=SupportRequestTemplate-Gitaly) に Issue を登録してください。より即座な可視性を得るために [#g_gitaly](https://gitlab.slack.com/archives/g_gitaly) に投稿し、EM と PM、一緒に作業している Support の担当者、そしてオンコール中の Gitaly チームメンバーに通知するために `@tier2-oncall-gitaly` をタグ付けしてください。

#### オンコールローテーション

Gitaly のオンコールがページされるのは、次の人々によるものに限定すべきです:

- **本番インシデント時のみ** の SRE オンコールまたは IMOC。
- **顧客の緊急事態時** の Support Engineer または Support Manager。

これらのケースでは Slack で `/incident escalate` を使用し、On-call teams の下で Gitaly EOC を選択してください。
それ以外のすべてのケースでは、[顧客の問題](#customer-issues) の下に Issue を登録してください。

これらのケース以外ではオンコールをページしないでください。顧客の緊急事態に取り組んでいるが Support の一員でない場合は、代わりに Support に連絡してください!

##### ローテーション

[incident.io スケジュール](https://app.incident.io/gitlab/on-call/schedules/01JJWAE08T9WDE8T6D4VZPBNXE?startTime=2025-03-03T00%3A00%3A00.000%2B00%3A00&timePeriodOption=two_weeks&calendarToggle=timeline) が、誰がオンコール中かの信頼できる情報源です。

ローテーションはチームメンバーの勤務時間中に配置されます（週末はなし）。これでもチームメンバーの分布を考慮すると平日 24 時間をカバーしますが、保証はありません。

- 週末は明示的にスコープ外（配置なし）であり、エスカレーションは現在の EOC ローテーションにフォールバックする必要があります。
- 責務は勤務時間中のみであるため、明示的に別途指定されない限り、追加の報酬はありません。
- Workday 経由で代休を取ることを選択でき、シフト後に `the On-Call Time in Lieu` オプションを選択します。

##### オンコールシフト中の期待

- 効率的なオンボーディングプロセスについては、[Responder Quick Start Guide](https://gitlab.com/gitlab-com/runbooks/-/blob/master/docs/incident-io-onboard/oncall.md?ref_type=heads#responder-quick-start-guide) を参照してください。
**注: Gitaly チームへのすべてのエスカレーションは incident.io 経由で行われます**
- オンコール中の incident.io ページに対する 15 分の応答時間。これは `@tier2-oncall-gitaly` Slack ハンドルへの ping には適用されません。これは Gitaly オンコールに関連する出来事を知らせるために使用すべきもので、緊急事態には使用すべきではありません。
  - オンコールは _対応可能で連絡が取れる_ 状態であることが期待されます（ただし、この SLO 内に調査を開始できる限り、必ずしも能動的に作業している必要はありません）。
  - シフト終了の 15 分未満前にページされた場合でも、応答し、インシデントを明示的に引き継がなければなりません。
- `#g_gitaly` チャンネルでの質問、および新しい Request For Help Issue の連絡窓口として機能します。
  - ベストエフォートで `#g_gitaly` チャンネルの問い合わせに応答します。
  - 新しい Request for Help Issue をトリアージします: 緊急度を確立し、EM/PM と協力してマイルストーンをアサインします。
- 進行中の本番インシデントと顧客エスカレーションは、Slack のインシデントチャンネルを使用して、退任するオンコールから次の Gitaly オンコールへ明示的に引き継がれます。
- チームメンバーは PTO や休日のカバーを見つける責任があります。[`incident.io` モバイルアプリケーション](https://play.google.com/store/apps/details?id=com.incidentio.incidentio&hl=en_IN) をインストールし、`Schedules` に移動して、矢印付きの人物アイコンをクリックしてカバーを依頼してください
- Support によってページされた長時間の顧客緊急事態の通話中に、問題が Gitaly から離れ、あなたの専門知識がもはや能動的に必要とされない場合は、能動的な参加から退いてよいか Support Engineer に尋ねるイニシアチブを取ってください。受動的に監視を続けることができ、Gitaly の関与が再び必要になればいつでも再参加できます。

### 顧客の問題 {#customer-issues}

[こちら](https://gitlab.com/gitlab-com/request-for-help/-/issues/new?issuable_template=SupportRequestTemplate-Gitaly) に Issue を登録してください。より即座な可視性を得るために [#g_gitaly](https://gitlab.slack.com/archives/g_gitaly) に投稿してください。

**顧客エスカレーションとエンゲージメントに関する注記**

顧客が必要とするときに喜んで助けます! ただし、私たちは主に _開発_ チームであり、「フィールドエンジニアリング」のための装備がないことを念頭に置いてください。

私たちの _エンジニア_ は、できれば [非同期](/handbook/company/culture/all-remote/asynchronous/) で、次のことを支援できます:

- _データ_ に基づく深い技術的調査と、Support および CSM との緊密なパートナーシップによる適切な技術的協働
- プロダクトレベルの修正や改善の提供。作業はスケジュールされ、結果は通常どおりリリースされます（[EM と PM の指示](#working-with-product) の下）
- 何かが不明確な場合のドキュメントの改善

_Engineering Manager_ (`@jcaigitlab`) と _Product Manager_ (`@mjwood`) も、ロードマップ、製品機能、タイムラインの明確化、または正しい優先順位付けの確保について支援が必要な場合に、喜んで顧客と関わります。

ただし、次のことが必要な場合、私たちは適していません:

- セルフホストシナリオでの GitLab インスタンスの設定やアーキテクチャに関する助言（[リファレンスアーキテクチャ](https://docs.gitlab.com/ee/administration/reference_architectures/) と Professional Services が役立ちます）
- 明確な終了基準のないエンゲージメント（まず明確にしてください。「電話で相談しましょう」は通常このカテゴリです）
- 長期的な「アドバイスしてください」シナリオ（Support とドキュメントを参照するか、Professional Services を利用してください）

この [エピック](https://gitlab.com/groups/gitlab-org/-/epics/11576) では、このエンゲージメントモデルの開発の可能性について議論しています。

### 通常優先度のリクエスト

Gitaly チームに何かに取り組んでもらうには、[Gitaly Issue トラッカー](https://gitlab.com/gitlab-org/gitaly/issues) に Issue を作成し、`group::gitaly` と `workflow::problem validation` ラベル、その他の適切なラベルを追加するのが最善です。その後、上記の関連する Product Manager および／または Engineering Manager を自由にタグ付けしてください。

情報リクエストやその他のすばやい一回限りの対応については、Issue に注目を集めるために Slack の [#g_gitaly](https://gitlab.slack.com/archives/g_gitaly) を自由に使用してください。

### `Infradev` ラベル付きの Issue

これらは通常、厳密な SLO 追跡を持つ [是正措置やその他のフォローアップ項目](/handbook/engineering/workflow/#infradev) です。EM および／または PM が [これらのダッシュボード](#useful-links) をポーリングすることで、上記いずれかのパスを通じてスケジュールされます。

#### トレーニング資料

- https://handbook.gitlab.com/handbook/engineering/on-call/#expectations-for-on-call
- [Gitaly のデバッグ](debug/)
- [Production Training](https://gitlab.com/gitlab-org/gitaly/-/issues/new?issuable_template=Production%20Training) Issue

#### ロスター管理

メカニズム（オンコールの交代、ローテーションへの新しいチームメンバーの追加）については、https://handbook.gitlab.com/handbook/engineering/on-call/#pagerduty を参照してください。

## チームメンバー

{{< team-by-departments "Gitaly Team" >}}

## プロダクトと協働する {#working-with-product}

### Gitaly におけるアジャイルワークフロー

私たちは一般に、作業のスケジュールと追跡に [Product Development Flow](/handbook/product-development/how-we-work/product-development-flow/#workflow-summary) に従います。

作業は小さなチャンク（2〜3 日の作業）で実行され、それぞれが Issue として追跡されます。これにより、安全なコンテキストスイッチのための自然な「チェックポイント」が可能になります。
トリアージとスケジューリングは、現在の作業の実行とは分離されています。すべての受信作業は追跡され、私たちは新しい作業を引き受けることについて意図的です。

あらゆる種類の受信作業（プロジェクトとアドホックな割り込みの両方）は、トリアージのために EM と PM を経由します。ここで実現可能性や製品の戦略ロードマップとの適合性などについて、エンジニアリングのコンサルテーションがある場合があります。一部はスケジュールされ、一部はバックログに移ります。その取り組みが必要ないと判断されるか、ロードマップと整合しないと考えられる場合は、将来の参照のために、なぜそれを追求しないのかについてのコメントを付けて Issue をクローズします。

私たちは、野心的だが圧倒されない程度のタスクリストになるようにマイルストーンのスコープを決めることを目指しています。受信インシデントのために、意図的にいくらかのキャパシティを残します。
健全なワークライフバランスを促進するため、終わりのない作業の山という感覚を避けたいと考えています。
また、マイルストーンはあくまで推奨であり、ベストエフォートベースで作業することを強調することも重要です。

厳密な SLO を持つ Issue については、[以下](#handling-issues-with-strict-slo) で定義されたプロセスに従います。

Issue には次のワークフローラベルを使用します:

1. `workflow::problem validation` — 追求したい／したくないかもしれない機能を置くのに適した場所です。ここで Product は、追求したい機会かどうかを判断するために、ユーザーインタビュー、コスト分析、市場適合性などを行えます。
1. `workflow::solution validation` — Engineering が今後の解決策を調査／提案する必要がある、またはそれを小さな Issue に分割する必要がある機能／Issue にこのラベルを使用します。
1. `workflow::planning breakdown` — 今後数マイルストーンでスケジュールできる準備が整った Issue（ブロックされていない、またはまもなくブロックが解除され、解決策が判明しているもの）。長期間（事前承認済み）プロジェクトのリーダーは、これを PM とのコミュニケーションに使用します。
1. `workflow::ready for development` — マイルストーン（現在のもの、または将来のもの）にスケジュールされた作業。
1. `workflow::in dev` — Engineering チームによって能動的に作業中
1. `workflow::in review` — レビュー中の作業
1. `workflow::verification` — コードが本番にあり、DRI エンジニアによる検証待ち
1. `workflow::complete` — 変更が検証され、Issue をクローズできる

私たちが確実にリリースに優先順位付けしたい Issue には `Deliverable` ラベルが付けられ、リストの最上部に移動されます。
これらの `Deliverable` Issue は、これらの Issue への取り組みに関する GitLab と顧客への私たちのコミットメントを示すのに役立ちます。

#### ワークフロー

##### プロジェクトワーク {#project-work}

トップレベルの [Gitaly エピック](https://gitlab.com/groups/gitlab-org/data-access/gitaly/-/epics/1) には、チームが取り組んでいるプロジェクトを表すリンクされたエピックが含まれています。チームメンバーは、エピックの [主要オーナー](#dri--supporting-contributors) になるか、[サポート貢献者](#dri--supporting-contributors) になります。このようにして知識がチーム全体で共有されます。

###### DRI とサポート貢献者 {#dri--supporting-contributors}

エピックの [DRI](/handbook/people-group/directly-responsible-individuals/) は、プロジェクトの技術的方向性に関する [意思決定](/handbook/leadership/making-decisions/#making-decisions) に責任を持ちます。意思決定には、提案の作成と、同僚および Engineering Manager からのフィードバックの収集が含まれます。また、該当する場合はチーム外のステークホルダーへの働きかけと協働も含まれます。

DRI はプロジェクト管理にも責任を持ちます。つまり、関連する Issue でエピックを最新の状態に保ち、もはや関連のない Issue を削除し、エピックの自動生成されたコメントに次の形式で週次アップデートを書きます:

```markdown
HIGH_LEVEL_SUMMARY

:tada: **achievements**:
-

:issue-blocked: **blockers**:
-

:arrow_forward: **next**:
-
```

エピックのサポート貢献者は、Issue への取り組み、MR のレビュー、技術的議論への参加において DRI を支援する責任を持ちます。セカンダリオーナーは、DRI が OOO のときに、その帯域幅に応じて、プライマリオーナーとして行動することもできます。

サポート貢献者は強く推奨されますが、任意です。プロジェクトには複数のセカンダリオーナーがいることもあります。

全員が DRI である必要はありませんが、全員が少なくとも 1 つのプロジェクトでサポート貢献者であるべきです。

DRI とサポート貢献者の両方を持つこの構造は、レビューと承認はチームの誰でも行えるため、MR を進めるための厳しい要件を導入するものではありません。

##### 技術的ロードマップ、顧客の Issue、クロスファンクショナルな Issue

[Gitaly Technical Roadmap & Customer Issues](https://gitlab.com/groups/gitlab-org/-/boards/8913037?label_name[]=workflow%3A%3Aready%20for%20development&milestone_title=Upcoming) ボードには、どのプロジェクトの一部でもないが、対処すべき重要な一回限りの Issue が含まれています。これらには [技術的ロードマップ](/handbook/engineering/#technical-roadmaps) の Issue、顧客の Issue、他のチームが依存している Gitaly のクロスファンクショナルな作業が含まれます。これらの Issue は優先度でソートされます。チームメンバーは、プロジェクトエピックの一部として取り組んでいる Issue に加えて、このボードから作業を引き受けられます。

経験則として、[プロジェクト](#project-work) 作業と技術的ロードマップ、顧客の Issue の比率はおおよそ 70/30 であるべきです。

##### 緊急かつ高優先度の Issue

P1/S1 の Issue は緊急に扱うべきです。そのような Issue がスケジュールされていない場合は、[bias for action](/handbook/values/#operate-with-a-bias-for-action) が推奨されます。
現在のマイルストーンに引き込んでもかまいませんが、EM と PM に通知してください。

##### ブロックされた Issue

作業がブロックされている場合は、`workflow::blocked` を使用し、明確化のためにブロックしている Issue を設定してください。それから、別のことを引き受ける前に、助けを求める、および／または他のチームメンバーのブロックされた作業のブロック解除を手伝うことを検討してください。

長期間ブロックされている Issue は、マイルストーンを削除しアサインを外すことで、このプロセスから除外すべきです。

#### チームの作業を追加する

より多くの作業が発見されたら、誰でも新しい Issue を登録し、このプロセスに流し込めます。そのためには、Issue を登録し、EM と PM をタグ付けし、マイルストーンなしで `workflow::planning breakdown` をアサインします。何をする必要があるかと、なぜ（つまり影響と緊急度）の両方を説明し、作業が引き受けられる準備が整っているかどうかを明確にしてください。（これは、プロジェクト DRI が自分のプロジェクトの次のステップをワークフローに追加する方法でもあります。）

#### Meta

プロダクトマネージャーとエンジニアリングマネージャー（Gitaly と Git チームの両方）の間で週次の通話が行われます。誰でも参加でき、これらの通話はグループに影響を与える障害、懸念、ステータスアップデート、成果物、その他の考えを議論するために使用されます。

### ロードマップ計画 {#roadmap-planning}

現在のロードマップは [このエピックボード](https://gitlab.com/groups/gitlab-org/-/epic_boards/1058926?label_name[]=Roadmap&label_name[]=group%3A%3Agitaly) です。四半期以上（場合によってはもっと長く）実行されるテーマ／プロジェクトで構成されます。後者の場合、サブプロジェクトをロードマップに直接追加してかまいません。

- 誰でもプロジェクトを提案できます: エピックを登録し、チーム（および EM+PM）と議論します。`group::gitaly` ラベルを忘れないでください。
- 承認されたら、`Roadmap` ラベルを追加します。
- 進行中のロードマップ項目には `roadmap::now` を付け、一方 `roadmap::next` と `roadmap::later` は、トリアージされ今のところ将来に押し出されたものを示します。
- 各四半期計画で:
  - ロードマップ項目をレビューします（[ビジョンと原則](https://internal.gitlab.com/handbook/engineering/infrastructure/core-platform/systems/gitaly/roadmap/) からの論拠、現在のビジネス優先順位などを使用）
  - そして、それらの目標を前進させる OKR を引き受けます。

### 四半期計画

四半期計画は、毎四半期の前に、全員からの入力を得て、次の 3 マイルストーンについて行われます。その時点で、行う必要がある作業について良いアイデアをすでに持っていなければなりません。

プロセスは次のとおりです:

1. EM+PM（エンジニアとステークホルダーからの入力あり）: 取り組むスコープを決定します。これは部門レベルの OKR と整合します。

1. EM+PM+エンジニア: ロードマップ項目に基づいて、必要であれば 3 マイルストーン（つまり 1 四半期）で完了できる小さなエピック／Issue を登録します。それらを全体のプロジェクトエピックに結び付けます。ここで実際の作業を追跡します。

1. EM: 作業を反映するように [トップレベルの Gitaly エピック](https://gitlab.com/groups/gl-gitaly/-/epics/1) を変更します。

1. PM: 四半期のスコープが明確になったら、Issue のリストを取り、3 つのマイルストーンの 1 つを、`workflow::planning breakdown`（分割が必要な大きな Issue 向け）または `workflow::ready for development` とともにアサインします。

1. エンジニア: `workflow::planning breakdown` 項目の分割を手伝い、必要であれば小さな Issue を登録し、合理的な範囲で同じ 3 つのマイルストーンに追加します。必要に応じて例外を提起します。

### 厳密な SLO を持つ Issue の扱い {#handling-issues-with-strict-slo}

`Infradev` ラベル付きの Issue は通常、厳密な SLO 追跡を持つ [是正措置やその他のフォローアップ項目](/handbook/engineering/workflow/#infradev) です。これらは上記いずれかのパスまたは EM を通じてスケジュールされます。

1. EM+PM: 少なくとも週次でダッシュボードをポーリングします。SLO を満たせるように、これらの Issue をトリアージしスケジュールします。必要であれば、Issue を Gitaly トラッカーに移動するか、作業ボードに表示されるようにそこにプロキシ Issue を登録し、ブロッキングとしてマークします。Issue を `workflow::ready for development` 列の最上部にドラッグします。

1. EM+PM: Issue がブロックされている、または進行中の作業に依存している場合は、SLO と保留中の作業に合うマイルストーンを追加します（忘れないように）。ブロッキング作業が先にスケジュールされることを確実にします。

1. エンジニア: この作業を引き受けることを優先し、元の Issue に頻繁な（変更がなくても最大週次の）アップデートを投稿してください。ブロッキング Issue をそのようにマークしてください。

## Gitaly の利用者

計画された変更、アップデート、場合によっては破壊的変更について常にコミュニケーションの流れを保つため、[#g_gitaly](https://gitlab.slack.com/archives/g_gitaly) Slack チャンネルがあります。このチャンネルでは、サービスを使用するすべてのチームにアップデートを提供し、計画された変更や改善についてのフィードバックと洞察を提供するための支援も求めます。

このプロアクティブなコミュニケーションをサポートするため、加えて、コードベースの調査と Gitaly を利用するすべてのチームとの調整を手伝う、利用者側の個別のカウンターパートもいます。利用者側の DRI は Igor Drozdov です。

Gitaly の利用者は次のとおりです:

- [GitLab Rails](https://gitlab.com/gitlab-org/gitlab)
- [GitLab Shell](https://gitlab.com/gitlab-org/gitlab-shell)
- [GitLab Workhorse](https://gitlab.com/gitlab-org/gitlab/-/blob/master/doc/development/workhorse/index.md)
- [GitLab Elasticsearch Indexer](https://gitlab.com/gitlab-org/gitlab-elasticsearch-indexer)

## Gitaly の非推奨

Gitaly は多くの顧客向け機能を提供しています。そのため、顧客向け機能のすべての非推奨は、標準の [GitLab 機能非推奨ガイダンス](https://docs.gitlab.com/update/deprecations/) に従い、[非推奨ドキュメントページ](https://docs.gitlab.com/ee/update/deprecations.html) 内でアナウンスされます。

Gitaly はまた、GitLab や Gitaly と直接インターフェースする他の顧客が使用する、多くの非顧客向け機能も提供しています。これらの Gitaly レベルの非推奨は、GitLab エンドユーザーが直接インターフェースするように設計されていないため、上記の方法ではアナウンスされません。これらの非顧客向け機能の例には、GitLab ユーザーが決して呼び出すべきでないストレージレベルの API があります。

## メトリクス

### gitlab.com 上

- [インシデント](https://gitlab.com/gitlab-com/gl-infra/production/-/issues/?sort=created_date&state=all&label_name%5B%5D=Service%3A%3AGitaly&label_name%5B%5D=incident&first_page_size=100)（すべてのページがインシデントというわけではありません）
- [ページ](https://nonprod-log.gitlab.net/goto/2e1a9f00-f006-11ed-bb50-33eb1f5eb489)
- [グローバル Apdex](https://dashboards.gitlab.net/d/gitaly-main/gitaly-overview?orgId=1&viewPanel=3357097446)
- [アラート](https://log.gprd.gitlab.net/goto/17c536b0-efd0-11ed-8afc-c9851e4645c0)（S1/S2 はページング、S3/S4 はページングしない）

### 有用なリンク {#useful-links}

- [Gitaly のデバッグ](debug/)
- [エラーバジェット](https://dashboards.gitlab.net/d/stage-groups-detail-gitaly/stage-groups-gitaly-group-error-budget-detail?orgId=1&from=now-28d%2Fm&to=now)
- [MR レビューの作業負荷](https://gitlab-org.gitlab.io/gitlab-roulette/?currentProject=gitaly)

## チーム開発

### オンボーディング

チーム固有のオンボーディングを完了するには、[こちら](https://gitlab.com/gitlab-org/gitaly/-/issues/new?issuable_template=Team%20Member%20Onboarding) に Issue を登録してください。

### オフボーディング

Maintainer 権限が取り消され、承認者リストから開発者を削除するために、`gl-gitaly` GitLab.com グループから削除します。
