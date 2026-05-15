---
title: サポートチーム ハンドブック
description: GitLab サポートチームのハンドブックは、私たちがなぜ・どのようにこの方法で働いているのかを示す中心的なリポジトリです。
upstream_path: /handbook/support/
upstream_sha: eb0cd26eaccd9a7f0de79c77d9a7773a9913ad81
translated_at: "2026-05-15T00:00:00+00:00"
translator: claude
stale: false
model: claude-opus-4-7
---

## GitLab サポートチーム ハンドブックへようこそ

GitLab サポートチームは、GitLab.com およびセルフマネージド GitLab のお客様に技術サポートを提供しています。GitLab サポートチームのハンドブックは、私たちがなぜ・どのようにこの方法で働いているのかを示す中心的なリポジトリです。

| あなたが…の場合 | 必要なもの | 参照すべき場所 |
| ---------- | --------- | --------------------- |
| お客様、またはお客様の代弁者 | 技術的支援 | 公開の [サポートページ](https://about.gitlab.com/support/)。必要な支援を得るための最良の方法を説明し、GitLab の有償サービスを一覧化しています。 |
| GitLab チームメンバー | 技術的支援 | [GitLab チームメンバー向け 内部サポートページ](internal-support) |
| 新規サポートチームメンバー | オンボーディング／学習 | [サポートエンジニアの責務](/handbook/support/support-engineer-responsibilities) ページと [サポートの学習パスウェイ](/handbook/support/training/) |
| 新規サポートマネージャー | オンボーディング／学習 | [サポートマネージャーの責務](/handbook/support/managers/manager-responsibilities) ページと [サポートマネージャーパスウェイ](/handbook/support/training/#support-manager-onboarding-pathway) |

私たちのチームに合いそうな方をご存知ですか？ 以下のジョブファミリーの説明を共有してください。

- [サポートエンジニアリング ジョブファミリー](/job-description-library/engineering/support-engineer/)
- [サポートマネジメント ジョブファミリー](/job-description-library/engineering/support-management/)

## サポートチームは何をするのか？

### 私たちはお客様を大切にする

- 常に、自分がお客様の成功を確実にする責任者であると想定してください。
- お客様をサポートするとき、いかなる Issue、インシデント、損失も *GitLab の損失* です。
  - お客様がトラブルやダウンタイムを経験した場合、GitLab がダウンタイムを経験している場合と同じ緊急度で行動してください。
  - お客様の生産性が失われている場合、GitLab の生産性が失われている場合と同じ緊急度で行動してください。
  - 2,500 ユーザーを抱えるお客様のインスタンスがダウンしている状況は、GitLab が日々 1,000,000 ドルを失っているのと同じ緊急度で扱われます。
- 早めにエスカレーションしてください。GitLab 全体、CEO に至るまでの可視性は、遅すぎるよりは早いほうが常に良いです。お客様のために必要なすべてのリソースが早期に対応にあたるようにしてください。

サポートチームのメンバーとして、私たちは問題や疑問を抱えた人と最初にやり取りする存在であることを忘れないでください。そのため、会社を代表し、自分たちを適切に振る舞うのは私たち次第です。したがって、以下が期待されます:

- 常にフレンドリーで敬意を持って接すること。
- 新しいアイデアや視点に対してオープンであること。
- 何かを知らないことに対して OK であること。いつでも他の誰かに尋ねることができます。
- お客様に「ノー」と言うことに躊躇しないこと (ただし、回避策を提案し、必要に応じて Senior にエスカレーションするように)。

#### 私たちはコミッションやボーナスをもらいません

私たちの目標は、お客様が GitLab を使う上で最良の結果につながるガイダンスを提供することです。その中で、ドキュメント、製品機能、オープンなバグ／機能リクエストを参照することがよくあります。
ただし、商用提供のいずれかを通じてお客様にとって最良の対応となる場合もあります。

サポートは [エンジニアリング部門](/handbook/engineering/) の一部であり、サポートエンジニアは追加サービスのアップセル、お客様の購入、リード生成のためのコミッションやボーナスを受け取ることはありません。
[プロフェッショナルサービス](https://about.gitlab.com/services/) の利用や、別のティア／提供への移行を推奨する場合、推奨理由の中でこのセクションへのリンクを示すことで、お客様に対し、私たちが利害混同なくそうしていることを示せます。

### GitLab における私たちの役割

GitLab サポートは [エンジニアリング部門](/handbook/engineering/) の一部です。
ほとんどのエンジニアリング部門は R&D コストセンターの一部ですが、
サポートは Cost of Sales (場合によっては Cost of Goods Sold (COGS)) コストセンターの一部です。

このユニークな構造は、私たちの [主要業績評価指標 (KPI)](/handbook/support/performance-indicators/) に
表れており、お客様の成功と満足を追求しつつ、所定の範囲内でコストを保ちながら
アウトプットを増やして効率化を促進することに大きく焦点を当てています。

これはまた、[サポートエンジニアの責務](/handbook/support/support-engineer-responsibilities) に
コードやドキュメントの貢献、製品マネージャーと共に当社製品に取り組むことが含まれている
理由でもあります。お客様とのやり取りから得た知識を使って製品やドキュメントを良くする
ことで、問題が起こる前に解決できるからです。これにより、サポートのケース負荷が減り、
GitLab 組織全体の効率が高まります。たとえば、Sales 部門は、Support や Customer Success の
助けを借りずにドキュメントを使ってお客様の問い合わせに答えられるようになり、Sales を
クローズするための時間がより多く確保できます。

#### 顧客への共感を築く

サポートの役割の一部は、お客様の声を増幅させることです。これを実現する一つの方法は、
製品に対するお客様の課題や、お客様がそれらを乗り越えるのを支援する上での自分たちの
障害を理解するのに役立つ体験に、他の GitLab チームメンバーを招待することです。

開始前に、Zendesk で light-agent アクセスを取得してサポートチケットを閲覧できるようにしてください。

お客様との接点をもっと持ちたい方には、サポートに参加するためのいくつかの方法があります:

##### Support Shadow プログラム

GitLab サポートチームと我々の責務について学びたい GitLab チームメンバーの皆さんには、Support Shadow プログラムへの参加が推奨されています。Support Shadow プログラムは、サポート以外のチームメンバーが GitLab サポートチームと一緒にシャドーイング、学習、コラボレーション、そして共に作業する時間を過ごす方法です。

サポートチームの一員ではないが、このプログラムに参加したい場合は、`support-team-meta` プロジェクトで [Support Shadow プログラム Issue](https://gitlab.com/gitlab-com/support/support-team-meta/-/issues/new?issuable_template=Support%20Shadow%20Program) をオープンしてください。この Issue は、本プログラムへの取り組みを整理、計画、進捗を追跡するために使用されます。

GitLab サポートは、参加者との Shadow ペアリングセッションのスケジューリングを行うために Calendly を利用しています。サポートチームの一員で、サポート以外の方々との Support Shadow ペアリングセッションのホストをボランティアで行いたい場合は、Support Ops に Support Shadow プログラム Calendly ローテーションへの追加を依頼する [Schedule update request Issue](https://gitlab.com/gitlab-com/support/support-ops/other-software/calendly/-/issues/new?issuable_template=Schedule%20update%20request) をオープンしてください。

##### サポートコールに参加する

サポートコールは [GitLab サポートカレンダー](#google-calendar) で公開されています。以下があります:

- お客様とエンジニアの間の **顧客コール**。説明にチケット ID が含まれます。`https://gitlab.zendesk.com/agent/tickets/<id>` にアクセスしてチケットを閲覧してください。
- 1 つ以上のチケットに取り組む 2 名以上のエンジニア間の **ペアリングセッション**。
- 経験豊富なサポートエンジニアが知識を共有する **オフィスアワー／ヘルプセッション**。
- サポートチームのメンバーが特定のトピックについて発表する **トレーニングセッション**。

##### 緊急コールに参加する

参加するすばらしい方法の一つは、お客様の緊急コールに参加することです。`#support_self-managed` を監視して PagerDuty アラートを確認できます。あるいは、PagerDuty へのアクセスがあれば、[シャドウローテーション](/handbook/support/on-call/#your-first-on-call-shift) にスケジュールしてもらえます。

### あらゆるレベルのチームメンバーを助ける仕組み — Helping Hierarchy

サポートの各役割の責務を読み解くと、組織がどのように機能しているかが見えてきます。役割が問題解決のためにどう連携するかを、シンプルで明快に考える方法を作りました:

- サポートエンジニアは、チケット、マージリクエスト、その他の顧客対応活動を通じてお客様の問題解決を支援します。
- マネージャーは、障害を取り除き、顧客対応活動に参加し、サポートエンジニアと協力して摩擦を減らし結果と効率を実現するシステムを構築することで、サポートエンジニアの問題解決を助けます。
- シニアリーダーは、KPI に対するチームのパフォーマンスに対処し、イニシアチブを優先順位付けし、グローバルな結果の達成に責任を持つことで、スケーリングの問題を解決・回避します。
- VP of Support は、成長およびチーム設計の課題を特定し、進捗を経営陣と取締役会に報告することで、全社的な問題を解決・回避します。

このシンプルなリストは、期待を設定し、異なる役割で問題解決の足並みを揃える簡単な方法を提供します。

### 私たちはパフォーマンスをどう測定するか

私たちは [主要業績評価指標 (KPI)](/handbook/support/performance-indicators/) を使って、サポートチームを含む各エンジニアリング部門全体の成果を追跡しています。

KPI 測定値は、適切なアクセス権があれば Zendesk の `Reporting` タブで確認できますが、これらの KPI への進捗は前述の KPI リンクからも追跡されています。

これらの KPI は [Support Week-in-Review](/handbook/support/#support-week-in-review) で毎週レビューしています。

#### 私たちの成功の柱

KPI と OKR を達成するために、成功のためにバランスを取らなければならない 3 つの重要な柱があります:

- People: 適切なタイミング・適切な場所で優秀なエンジニアやマネージャーを雇い続ける。既存のエンジニアをサポートし、各チームメンバーがプロフェッショナル開発とスマートなツールを通じて自分のポテンシャルを最大限発揮できるよう協力する。
- Process: 既存プロセスを改善し、グローバルなスケーリングを可能にする新たな簡素化されたプロセスを開発する。
- Performance: メンバーが、自分たちの貢献がグローバルチームの結果達成にどう寄与するかを理解し、これらの貢献が実際にどのような形になるかについてのガイダンスを得る。

ある問題を解決するために、いずれか 1 つの柱を過度に最適化したくなることはよくありますが、近視眼的な意思決定を避けるためには、3 つすべてを考慮することが鍵となります。

### サポートチームについて

サポートチームメンバーに関する情報 (メールアドレスや個人的な関心事から、製品スキル、グループメンバーシップまで) の [単一の信頼できる情報源](/handbook/company/culture/all-remote/) は、
[support-team プロジェクト](https://gitlab.com/gitlab-support-readiness/support-team) です。
[サポートチームのホームページ](https://gitlab-com.gitlab.io/support/team-pages/) は、
そのプロジェクトの情報から構築されています。多くの他のサポートツールや
オートメーションも、それを利用しています。個々のサポートチームメンバーのファイル構造の
詳細については、[サポートチームの Wiki](https://gitlab.com/gitlab-support-readiness/support-team/-/wikis/home) の
[サポートチーム エントリーページ](https://gitlab.com/gitlab-support-readiness/support-team/-/wikis/Support-team-entry) を
参照してください。

サポートチームの異なる部分の情報は、サポート ハンドブックの以下のセクションにあります:

- [/support/engineering](/handbook/support/engineering/) は、サポートエンジニア向けのコンテンツです。たとえば: Zendesk のワークフローと技術的なリソース。
- [/support/license-and-renewals](/handbook/support/license-and-renewals/) は、ライセンスと更新のサポートエンジニアおよびマネージャー向けのコンテンツです。たとえば: [customers.gitlab.com](https://customers.gitlab.com) や Fulfillment Product Team との作業。
- [/support/managers](/handbook/support/managers/) は、サポートマネージャー向けのコンテンツです。たとえば: Issue の管理方法、1:1 の進め方、リーダーシップ同期の情報など。
- [/support/readiness](/handbook/support/readiness/) は、Support Readiness のランディングページです。たとえば: サポートチームは X にどう備えているか？

以下に、よく参照されるページもいくつか示します:

- [サポートエンジニアの責務](/handbook/support/support-engineer-responsibilities)
- [サポートエンジニアの知識領域](/handbook/support/workflows/knowledge_areas)
- [サポートエンジニアのキャリアパス](/handbook/support/support-engineer-career-path)
- [サポートマネージャーの責務](/handbook/support/managers/manager-responsibilities)

---
{{% include "includes/engineering/we-are-also-product-development.md" %}}

## サポートにおけるドッグフーディング

[ドッグフーディング](/handbook/values/#dogfooding) のオペレーティング原則を引き合いに、なぜ GitLab サポートは [Service Desk](https://docs.gitlab.com/user/project/service_desk/) を使わないのか、と問われることがあります。

ドッグフーディングとは、GitLab の何らかの部分を *本来の用途で* 使うことです。たとえば、GitLab Issue をニュースレターとして使うこと *はできますし*、実際に行っています ([Support Week in Review](#support-week-in-review) を参照)。しかし、Issue がニュースレターとしてより効果的に機能するためのマージリクエストを作成することは、その改善が Issue の中核的なユースケースにも役立たない限り、ドッグフーディングではありません。

言い換えると、ドッグフーディングとは、お客様が直面しているペインポイントを発見・解決するために、製品をお客様が使うのと同じ方法で使うことです。ドッグフーディングはお客様の成果を支えます。

GitLab サポートでは、Service Desk を [個人データリクエスト](/handbook/legal/privacy/gdpr/) の処理には使用していますが、グローバルサポートには使用していません。これは、Service Desk のお客様が主に [*バグレポート、機能リクエスト、または一般的なフィードバック*](https://docs.gitlab.com/user/project/service_desk/) を求める小規模チームだからです。この小規模な状況での Service Desk の使用を通じて、私たちは [内部メモ](https://docs.gitlab.com/user/discussions/#add-an-internal-note) のような機能の追加に向けた製品の方向性に影響を与えることができました。

私たちは、サポート内のユースケース向けの製品機能を継続的に評価し、ブロッカーがある場合はフィードバックや機能リクエストを提供します。サポートは、他のいかなる考慮事項よりも常にお客様の成果を優先します。

## OKR

### 現在の四半期

これらは、もう使用していないツール経由で以前に投入されていました。
TODO: 現在の GitLab 実装に置き換える

### 前四半期

これらは、もう使用していないツール経由で以前に投入されていました。
TODO: 現在の GitLab 実装に置き換える

## ハザードと課題

[Managers/Hazards ページ](/handbook/support/managers/hazards-and-challenges) を参照してください。

## コミュニケーション

GitLab サポートチームは、より広いエンジニアリング機能の一部です。エンジニアリングのアナウンスやイニシアチブについて常に把握できるためのヒントについては、必ず
[エンジニアリング ハンドブックのコミュニケーションセクション](/handbook/engineering/) を確認してください。

私たちの最も重要なコミュニケーション手段は以下のとおりです:

- [Support Week in Review](#support-week-in-review)。サポート全員にとっての重要な更新事項。
SWIR は、すべてのサポートチームメンバーに読む／聴くことが期待されています。少なくとも週に一度は SWIR を確認するようにしてください。チーム全体に共有したいことがあれば、ここで共有するのが最善の場所です。たとえば、よくあるバグの Issue、フィードバックを必要とする Issue、現在進行中の外部プロジェクトの Issue などです。
- [「非公式」](/handbook/communication/#slack) コミュニケーション用の [Slack チャンネル](#slack)。
Slack のデータ保持ポリシーにより、そこで共有されたものは最終的に削除されます。共有したい場合は、ドキュメント、ハンドブック、Issue トラッカーなど、より恒久的な場所にも残してください。
- [Meta Issue トラッカー](https://gitlab.com/gitlab-com/support/support-team-meta/issues/): ワークフローに関する Issue、
チーム全体への提案、サポートに関連するタスクやプロジェクトなど用です。

グローバルなサポートチームに重要なメッセージを確実に伝えたい場合は、この [メッセージング テンプレート](https://gitlab.com/gitlab-com/support/managers/leadership-sync/-/blob/master/.gitlab/issue_templates/support-message-plan.md) を使用します。これにより、これらのメッセージが構造化された文書化された方法で、複数のコミュニケーションチャネルで配信されることが保証されます。

### GitLab.com

#### グループ

GitLab.com の Issue やマージリクエストでサポートチームメンバーに通知や追加を行うために、以下の GitLab グループを使用しています。

| グループ | 対象 |
| ----- | --- |
| [@gitlab-com/support](https://gitlab.com/groups/gitlab-com/support/-/group_members?with_inherited_permissions=exclude&sort=last_joined) | すべてのサポートチームメンバー |
| [@gitlab-com/support/amer](https://gitlab.com/groups/gitlab-com/support/amer/-/group_members?with_inherited_permissions=exclude&sort=last_joined) | AMER サポート |
| [@gitlab-com/support/apac](https://gitlab.com/groups/gitlab-com/support/apac/-/group_members?with_inherited_permissions=exclude&sort=last_joined) | APAC サポート |
| [@gitlab-com/support/emea](https://gitlab.com/groups/gitlab-com/support/emea/-/group_members?with_inherited_permissions=exclude&sort=last_joined) | EMEA サポート |
| [@gitlab-com/support/dotcom](https://gitlab.com/groups/gitlab-com/support/dotcom/-/group_members?with_inherited_permissions=exclude&sort=last_joined) | SaaS を主にフォーカスし、GitLab.com 管理アクセス権を持つサポートメンバー |
| [@gitlab-com/support/dotcom/console](https://gitlab.com/groups/gitlab-com/support/dotcom/console/-/group_members?with_inherited_permissions=exclude&sort=last_joined) | GitLab.com コンソールアクセス権を持つサポートメンバー |
| [@gitlab-com/support/customers-console](https://gitlab.com/groups/gitlab-com/support/customers-console/-/group_members?with_inherited_permissions=exclude&sort=last_joined) | CustomersDot コンソールアクセス権を持つサポートメンバー |
| [@gitlab-com/support/licensing-subscription](https://gitlab.com/groups/gitlab-com/support/licensing-subscription/-/group_members?with_inherited_permissions=exclude&sort=last_joined) | License and Renewals にフォーカスするサポートメンバー |
| [@gitlab-com/support/cmoc](https://gitlab.com/gitlab-com/support/cmoc) | Communication Manager On-Call ローテーションに参加しているサポートメンバー |
| [@gitlab-com/support/ceoc](https://gitlab.com/gitlab-com/support/ceoc) | Customer Emergencies On-Call ローテーションに参加しているサポートメンバー |
| [@gitlab-com/support/managers](https://gitlab.com/groups/gitlab-com/support/managers/-/group_members?with_inherited_permissions=exclude&sort=recent_last_activity) | すべてのサポートマネージャー |
| [@gitlab-com/support/managers/amer](https://gitlab.com/groups/gitlab-com/support/managers/amer/-/group_members?with_inherited_permissions=exclude&sort=recent_last_activity) | すべての AMER サポートマネージャー |
| [@gitlab-com/support/managers/apac](https://gitlab.com/groups/gitlab-com/support/managers/apac/-/group_members?with_inherited_permissions=exclude&sort=recent_last_activity) | すべての APAC サポートマネージャー |
| [@gitlab-com/support/managers/emea](https://gitlab.com/groups/gitlab-com/support/managers/emea-managers/-/group_members?with_inherited_permissions=exclude&sort=recent_last_activity) | すべての EMEA サポートマネージャー |

#### プロジェクト

私たちのチームのプロジェクトと Issue トラッカーは [Support 親グループ](https://gitlab.com/gitlab-com/support) にあります。チームのコミュニケーションに関連するいくつかのプロジェクトを以下に示します。

| プロジェクト | 目的 |
| ------- | ------- |
| [support-team-meta](https://gitlab.com/gitlab-com/support/support-team-meta) | サポートプロセスを議論し改善するための Issue |
| [support-training](https://gitlab.com/gitlab-com/support/support-training) | オンボーディングを含むサポートチーム向けのコースとトレーニング |
| [support-pairing](https://gitlab.com/gitlab-com/support/support-pairing) | チケットで協働したペアリングセッションの記録 |
| [feedback](https://gitlab.com/gitlab-com/support/feedback) | Zendesk から SSAT サーベイの回答を Issue の形で収集 |
| [support-operations](https://gitlab.com/gitlab-com/support/support-ops/support-ops-project) | Support Operations チームのプロジェクト |
| [support-readiness](https://gitlab.com/gitlab-com/support/readiness/) | Support Readiness のプロジェクト |

##### サポートチーム メタ Issue トラッカー

[Support Meta Issue トラッカー](https://gitlab.com/gitlab-com/support/support-team-meta/issues) は、Issue を追跡したり、
サポートに関するフィードバックが必要な Issue を作成するために使用しています。

サポートに関連するプロジェクトやタスクに取り組みたい場合は、お気軽に Issue を作成し、外部の Issue や プロジェクトへリンクしてください。これにより以下が可能になります:

- チーム全体に対して、私たちが何に取り組んでいるか透明にする
- 興味を持つ他のチームメンバーと外部プロジェクトやタスクで協働する機会を持つ
- メンバー間で重複作業が発生するのを避ける

GitLab、私たちの FOSS プロジェクト、または GitLab コンポーネントのドキュメントや機能に関する Issue は、この Issue トラッカーには入れず、適切な Issue トラッカーに登録すべきです。

実行可能な解決策の提案がある場合、[マージリクエストから始める](/handbook/communication/#start-with-a-merge-request) のがベストです。チームをタグ付けしてフィードバックを求め、[Support Week in Review](#support-week-in-review) でリンクしてください。

### Slack

私たちはチームコミュニケーションのために、GitLab の [Slack 利用に関する一般ガイドライン](/handbook/communication/#slack) に従います。アクティビティは 90 日間しか保持されないため、重要な情報はチームのハンドブック、製品ドキュメント、Issue トラッカー、お客様のチケットに必ず移動してください。

#### `spt_` と `support_` プレフィックスの使い分け

チャンネルに名前を付ける際、「spt」は内部チャンネル、つまり主にサポートチームに役立つチャンネルを意味します。これらは公開すべきで、他の人が希望すれば参加できるようにします。チャンネルが「support」プレフィックスを持つ場合、それは他のチームがサポートチームと交流する公開インターフェースとして意図されています。

#### 毎日のスタンドアップ Bot

[Support Daily Slackbot](https://gitlab.com/gitlab-com/support/toolbox/support-daily-slackbot) は、
GitLab のさまざまなチームやリージョンで毎日のスタンドアップ Slack スレッドを促進するように設計された自動ツールです。タイプとターゲットに基づき、特定の Slack チャンネルにカスタマイズされたメッセージを投稿します。さまざまなバリエーションの詳細については、[README ファイル](https://gitlab.com/gitlab-com/support/toolbox/support-daily-slackbot/-/blob/main/README.md?ref_type=heads) を参照してください。

#### チャンネル

| チャンネル | 目的 |
| ------- | ------- |
| [#support_team-chat](https://gitlab.slack.com/archives/CCBJYEWAW) | 雑談、チャット、ステータス更新のためのサポートチームのラウンジ |
| [#support_gitlab-com](https://gitlab.slack.com/archives/C4XFU81LG) | GitLab.com のチケットやお客様の Issue について議論 |
| [#support_self-managed](https://gitlab.slack.com/archives/C4Y5DRKLK) | セルフマネージドのチケットやお客様の Issue について議論 |
| [#support_gitlab-dedicated](https://gitlab.enterprise.slack.com/archives/C058LM1RL3V) | GitLab Dedicated のチケットやお客様の Issue について議論 |
| [#support_licensing-subscription](https://gitlab.slack.com/archives/C018C623KBJ) | Licensing & Renewals のチケットやお客様の Issue について議論 |
| [#support_ticket-attention-requests](https://gitlab.slack.com/archives/CBVAE1L48) | Support Manager On-Call とエスカレーションされたチケットについて議論 |
| [#support_operations](https://gitlab.slack.com/archives/C018ZGZAMPD) | サポートの働き方に関する運用上の項目について議論 |
| [#support_leadership](https://gitlab.slack.com/archives/C01F9S37AKT) | サポートマネージャーの注意を必要とするサポートチーム内部の事項について議論 |
| [#recruiting-support-engineering](https://gitlab.slack.com/archives/CE9S6JW4S) | サポートチームの採用関連の事項について議論 |
| [#spt_amer_global](https://gitlab.enterprise.slack.com/archives/C07EYM9NNE4) | AMER の Global SE 固有のトピックについて議論 |
| [#spt_emea](https://gitlab.enterprise.slack.com/archives/C07N48KHCR0) | EMEA の Global SE 固有のトピックについて議論 |
| [#spt_apac](https://gitlab.enterprise.slack.com/archives/C07EJ2L3P7E) | APAC の Global SE 固有のトピックについて議論 |
| [#spt_pairing](https://gitlab.slack.com/archives/C03UW0HPBGD) | チケットや Issue で一緒に作業する際に使用 |
| [#spt_us-government](https://gitlab.slack.com/archives/C03RTN3JEJ2) | US Fed Support に関連するトピックについての議論 |
| [#spt_onboarding](https://gitlab.enterprise.slack.com/archives/C07UJ1N8S1F) | 新しい人ですか? オンボーディングに関連するトピック |

##### プライベートチャンネル

GitLab では、公開しない正当な理由がない限り、[デフォルト公開](/handbook/communication/confidentiality-levels/#not-public) となります。Slack は
公開ではありませんが、議論を開放し *誰もが貢献できる* という精神は、プライベートチャンネルを最小限に抑えるべきだという考えにつながります。

以下のプライベートチャンネルはサポートにおける恒久的な存在です。利用状況の見積もりは 2022 年 2 月のトラフィックに基づくおおよその数値です。

| チャンネル | 参加者 | 目的 | 利用頻度  |
| ---- | ---- | ---- | ---- |
| `#spt-vp-directors` | Director 以上 | シニアリーダーシップが、機微なトピック／予算などについて議論し調整するために使用。 | 週 3〜4 スレッド |
| `#spt_managers-internal` | Manager 以上  | 公開チャンネルでは適さない、マネージャーに該当する機微なトピックに使用 | 週 4〜5 スレッド |
| `#spt_managers-internal-apac` | APAC Manager 以上 | 公開チャンネルでは適さない、APAC マネージャーに該当する機微なトピックに使用 | 週 3〜4 スレッド |
| `#spt_managers-emea` | EMEA Manager 以上 | 公開チャンネルでは適さない、EMEA マネージャーに該当する機微なトピックに使用 | 週 4〜5 スレッド |
| `#spt_managers-amer` | AMER Manager 以上 | 公開チャンネルでは適さない、AMER マネージャーに該当する機微なトピックに使用 | 週 1〜2 スレッド |
| `#spt_hiring-mgmt` | Manager 以上、Recruiting、Finance | 公開チャンネルでは共有できない採用の具体について調整・議論するために使用 | 週 1〜2 スレッド |
| `#spt_leadership_internal` | Manager 以上、Staff 以上 | `#support_leadership` のプライベート版。Staff とマネージャーが対象となる機微なトピックに使用 | あまり使われない |
| `#spt_staff_internal` | Staff 以上 | 公開チャンネルでは適さない、スタッフエンジニアに該当する機微なトピックに使用 | あまり使われない |

新しいプライベートチャンネルを始める前に、自問してください: *なぜここで誰もが貢献**できない**のか?* 適切な答えとしては:

- このチャンネルは、指定されたインサイダーステータスに影響しうる重要な非公開情報を議論するために使用される。
- このチャンネルは、個人または個人のグループのプライバシーに悪影響を与えるような事項 (パフォーマンス、報酬、その他機微な事項) について議論するために使用される。

プライベートチャンネルは以下には適していません:

- ノイズの低減 (これにはパブリックチャンネルを新たに作成してください)
- 長期間にわたるディスカッション (上記の表に含まれる場合を除く)
- 公開コメント用のマテリアルを準備すること

価値観は、それを実行することが難しいときに実行してこそ価値観です。[GitLab の価値観を維持しながら事業をスケールする方法](/handbook/values/#how-to-scale-the-business-while-preserving-gitlab-values) で詳しい議論をご覧ください。

#### ユーザーグループ

| グループ | 対象 |
| ----- | --- |
| `@support-dotcom` | GitLab.com 管理アクセス権を持つサポートチームメンバー |
| `@support-selfmanaged` | セルフマネージドのチケットにフォーカスするサポートチーム |
| `@support-team-apac` | サポートチーム APAC |
| `@support-team-emea` | サポートチーム EMEA |
| `@support-team-americas` | サポートチーム AMER |
| `@supportmanagers` | サポートマネージャー |
| `@support-managers-apac` | サポートマネージャー APAC |
| `@support-managers-emea` | サポートマネージャー EMEA |

これらのグループのいずれかに追加される必要がある場合は、
[アクセスリクエストプロジェクト](https://gitlab.com/gitlab-com/access-requests) で Issue をオープンしてください。

### Google Calendar

イベントとミーティングの調整のために以下のチームカレンダーを使用しています:

- [GitLab Support](https://calendar.google.com/calendar/embed?src=gitlab.com_9bs159ehrc5tqglur88djbd51k%40group.calendar.google.com) カレンダー ID `gitlab.com_9bs159ehrc5tqglur88djbd51k@group.calendar.google.com`
- [Support - Time off](https://calendar.google.com/calendar/embed?src=gitlab.com_as6a088eo3mrvbo57n5kddmgdg%40group.calendar.google.com) カレンダー ID `gitlab.com_as6a088eo3mrvbo57n5kddmgdg@group.calendar.google.com`
- [Support - Customer Events](https://calendar.google.com/calendar/embed?src=c_8d5a8e9b8c3fc74901bad1799b18e8eafc9e499f7805f9c82f79f9d1e1f9ac4b%40group.calendar.google.com) - 試験運用中: [support-team-meta#5153](https://gitlab.com/gitlab-com/support/support-team-meta/-/issues/5153) を参照

これらのカレンダーを GitLab Google カレンダーに追加するには、「他のカレンダー」の隣の「+」をクリックし、「カレンダーに登録」を選択します。上記の関連 ID を入力します。これらのカレンダーへのアクセスが必要な場合は、サポートチームのメンバーに支援を求めてください。

### Zoom

#### Zoom 名前のフォーマット {#zoom-name-format}

[Zoom であなたの名前にタイトルを追加する](/handbook/security/corporate/end-user-services/supported-apps/zoom/zoom-additional-config/#customize-your-zoom-profile) で説明されているとおり、Zoom での名前について以下のフォーマットを使用してください。お客様と接することが多いチームとして、お客様が参加するコールでベンダーと役割で識別しやすくするため、これらのフォーマットを選びました。

サブ部門には、自分が所属する最小単位を使用してください。再度、技術的な正確性よりお客様の理解を優先します。

たとえば、

- Customer Support -> Support Engineering (Support Engineering を使用)
- Customer Support -> Support Readiness -> Support Operations (Support Operations を使用)
- Customer Support -> Support Engineering -> US Federal Support (US Federal Support を使用)

##### 例

- Intermediate Support Engineer: `Name | Support Engineer | GitLab` - `Luciana de Santos | Support Engineer | GitLab`
- Support Readiness Specialist - Ops: `Name | Support Ops Specialist | GitLab`  - `Barka Adamec | Support Ops Specialist | GitLab`
- Senior Support Engineer:  `Name | Sr. Support Engineer | GitLab`  -  `Shen Hua Li | Sr. Support Engineer | GitLab`
- Staff Support Engineer: `Name | Staff Support Engineer | GitLab` - `Jabulani Achebe | Staff Support Engineer | GitLab`
- Support Manager: `Name | Manager, Sub-department | GitLab` - `Sneha Sharma | Manager, Support Operations | GitLab`
- Senior Support Manager: `Name | Sr. Manager, Sub-department | GitLab` | `Joo Hee Ko | Sr. Manager, US Federal Support | GitLab`
- Director: `Name | Director, Sub-department | GitLab` | `Noémie Blanchet | Director, Support Engineering | GitLab`
- Vice President: `Name | VP, Department | GitLab` - `Kalina Nowak | VP, Customer Support | GitLab`

### 週次ミーティング

サポートチームには毎週いくつかのミーティングがあります。これらは、調整を可能にし、私たち全員が共に成長するのに役立ちます。各ミーティングには独自のアジェンダがあり、毎週異なるチームメンバーがリードします。

タイムゾーンに関係なくチーム全員がコラボレーションできるよう、議論は Issue やマージリクエスト内に保つことが推奨されます。

チーム全体に共有する必要があるデモやアナウンスは、[Support Week in Review](#support-week-in-review) で共有すべきです。

すべての Zoom リンクとアジェンダリンクは、[Support カレンダー](/handbook/support/#google-calendar) の関連カレンダーエントリで確認できます。

#### サポートチームコール

一部のリージョンのサポートチームメンバーは定期的にミーティングを行います。
これらのコールの詳細は、[週次サポートチームコール ワークフローページ](/handbook/support/workflows/team/weekly_team_call) にあります。

#### サポート リーダーシップミーティング

サポートマネジメントチームは定期的にミーティングを行います。これらのコールの詳細は [サポートマネージャーのページ](/handbook/support/managers) にあります。

#### サポート 月次ビジネスレビュー (MBR)

リーダーシップチーム (スタッフ、マネージャー、シニアマネージャー、ディレクター) は、ビジネス目標とリージョン横断のコラボレーションについて整合させるため、毎月会合します。SAFE データが共有されますが、より広いチームの認知のために要約レポートが配信されます。

#### サポート 地域チーム ミーティング

一部の地域サポートチームは、会社のニュース、サポートのイニシアチブ、トレーニングプラン、つながりを中心としたミーティングを開催しています。

| 曜日 | リージョン | ミーティング名 | 目的 |
| :-----: | :----: | :----------: | :-----: |
| 火曜日 | APAC | Team Meeting | |
| 火曜日 | AMER | Team Meeting | |
| 木曜日 | EMEA | Team Meeting |  |

#### Senior Support Engineer オフィスアワー

Senior および Staff Support Engineer はオフィスアワーを開催することが推奨されています。これらのオフィスアワーは、メンタリングを通じて
チームを強化することを目的としています。Senior／Staff Support Engineer がオフィスアワーをスケジュールするかどうか、その頻度は各人に
委ねられています。「GitLab Support」チームカレンダーでオフィスアワーを確認し、自分自身を招待してください。

ホストには、カバーする内容をカレンダーイベントの説明に含め、必要に応じて追跡用ドキュメントも記載することを推奨します。

Senior／Staff Support Engineer のオフィスアワーで期待できることのいくつかの例:

- 難しいチケットのトラブルシューティング
- GitLab の機能 (Geo、CI、SAST、k8s など) や新しいワークフローを試す
- 特定のバグの再現
- バグの修正
- ドキュメントの作成または更新
- 特定の問題について考える
- チケット集中対応セッションのホスト

### ミーティングの作成

同期コールをホストしたい場合があるかもしれません。それには、[Support カレンダー](/handbook/support/#google-calendar) でイベントを作成できます。チームメンバーをイベントに招待するには、適切な [Support メールエイリアス](https://internal.gitlab.com/handbook/support/#support-email-aliases) (社内ハンドブック、GitLab チームメンバーのみ) を使用できます。

### Support Week in Review

毎週金曜日、私たちは [より広いエンジニアリング組織の week-in-review](https://drive.google.com/drive/u/0/search?q=type:document%20title%20%22Engineering%20week-in-review%22) に
インスパイアされた週次レビューを行っています。SWIR の [トピックフォーム](https://gitlab-com.gitlab.io/support/toolbox/forms_processor/SWIR/) を使えば、いつでもトピックを追加できます。

ワークフローの変更やアナウンスは SWIR で共有すべきであり、最近の変更について常に把握できるよう、少なくとも週に一度はチェックすることを推奨します。理想的には、ここで共有される情報は、Issue やマージリクエストなどの恒久的な場所も持つべきです。

#### SWIR の読み方／聴き方

- Support Week in Review は、[SWIR プロジェクト](https://gitlab.com/gitlab-com/support/readiness/support-week-in-review) で `SWIR::Digest` ラベルが付いた [最新の Issue](https://gitlab.com/gitlab-com/support/readiness/support-week-in-review/-/issues/?sort=created_date&state=all&label_name%5B%5D=SWIR%3A%3ADigest&first_page_size=20) を閲覧することで読めます。
- このラベルを購読すると、最新の SWIR が生成されたときに通知を受け取れます。
- 2022 年 7 月 1 日以降に録音された音声版は、それぞれの Issue 内で SWIR の音声版へのリンクを見つけられます ([SAFE フレームワーク](/handbook/legal/safe-framework/) に準拠するためです)。すべての音声版のアーカイブは、Google ドライブの [Support Week in Review - Audio Edition フォルダ](https://drive.google.com/drive/search?q=support%20week%20in%20review%20-%20audio%20edition) (社内のみ) にあります。

チームの誰もが共有できることが推奨されます。

#### SWIR トピック

SWIR には現在、以下のトピックがあり、それぞれが SWIR 内の独自セクションになっています:

- **Actionable**。意思決定や行動を要する事項 (Issue へのフィードバック依頼など)。
- **Things to know about**。チームに共有したい事項 (取り組んでいるプロジェクト、既知のバグ、新しいワークフロー、見つけた素敵な記事など)。
- **Team Member updates**。新しいチームメンバー、社内異動、その他のチームメンバーに関するニュース!
- **What Did we Learn this Week**。発見した (または再発見した!) こと、学んだことを共有する場所。
- **Support Operations Corner**。Support Operations チームからのアナウンスや情報。
- **Kudos**。他のチームメンバーへの特別な賞賛、または彼らがしたことのハイライト。
   -**SSAT**。週中にお客様から受け取ったポジティブな SSAT フィードバックの抜粋。
- **Metrics report**。週のサポートメトリクスのレビュー。

#### SWIR ラベル

SWIR Issue は、GitLab プロジェクトで独自のタグやラベルを持つこともできます。これらは、特定の注力分野 (L&R、SaaS …) を強調するために使用されます。ラベルは Issue にのみ使用され、ダイジェスト Issue や Google ドキュメントには表示されません。

`Manager Attention` というラベルは、ポリシー変更や、サポートマネージャーが特に認識すべき他のトピックに使用されます。
`Manager Attention` ラベルは
[こちら](https://gitlab.com/gitlab-com/support/readiness/support-week-in-review/-/labels?search=manager+attention)] にあり、購読できます。

自動生成 SWIR の起源は [この Issue](https://gitlab.com/gitlab-com/support/support-team-meta/issues/1394) で読むことができます。

### 部門横断の役割

サポートチームは、Sales、Channel、Product、Legal など、GitLab 全体で多くの他部門と協働しています。これらのコラボレーションを可能な限り効果的かつ効率的に行うために、私たちは異なる 2 つの役割を作りました。

#### Support Stable Counterpart

Support Stable Counterpart の役割は、製品または非製品チームとサポートの間の強いつながりを提供するために設計されています。目的は、製品の Issue について議論し、製品知識を共有し、お客様のニーズを代表すること、加えて各チームの作業に関する知識を共有し、両チームがうまく協働するためのプロセスとドキュメントを開発することです。
Support Stable Counterpart になることに興味がある場合、または役割についてさらに知りたい場合は、
[Support Stable Counterparts](/handbook/support/support-stable-counterparts) ページをお読みください。

## プロセス

### マージリクエストを使用したサポートチームのドキュメントの更新

サポートチームは、ハンドブックやプロジェクトの Issue テンプレートなど、複数の場所に
組織の知識、プロセス、ワークフローを記録しています。そのようなドキュメントを更新する際には、
他で承認を得ていたとしても、マージ前にマージリクエスト上で目に見える承認の痕跡を残すように
してください。これにより、何の監督もアカウンタビリティもなしに変更が行われたという
印象を避けられます。

承認の痕跡には、以下のようなものが含まれます:

- ピアまたはマネージャーに自分の MR をレビューしてマージしてもらう
- ピアまたはマネージャーが [MR 承認](https://docs.gitlab.com/user/project/merge_requests/approvals/) を使って承認を示す
- ピアまたはマネージャーが「looks good to me」とコメントする

### Support ワークフロー

- [Support ワークフロー](/handbook/support/workflows)
  - [社内ポリシーと手続き Wiki](https://gitlab.com/gitlab-com/support/internal-requests/-/wikis/home)
  - [チケットの取り扱い方](/handbook/support/workflows/working-on-tickets)
  - [Product/Development に Issue を提出する方法](/handbook/support/workflows/working-with-issues)
  - [GitLab アプリケーションへコードを提出する方法](https://gitlab.com/gitlab-org/gitlab-ce/blob/master/CONTRIBUTING.md)
  - [お客様の Issue で作業する際にドキュメントを提出する方法](https://docs.gitlab.com/development/documentation/styleguide/#docs-first-methodology)
- [License & Renewals ワークフロー](/handbook/support/license-and-renewals/workflows)

### Slack ワークフロー

サポート内の各 Slack チャンネルには、ユーザーに情報を提供するために使用される多数の [ワークフロー](https://slack.com/help/articles/360035692513-Guide-to-Workflow-Builder) がアタッチされています。各ワークフローのソースファイルは、[slack-workflows](https://gitlab.com/gitlab-com/support/toolbox/slack-workflows) プロジェクトにあります。

#### Issue 通知

一部のワークフローは、関連プロジェクトで作成された新しい Issue をチームに通知することを目的としています。
このような場合、[プロジェクトの Webhook](https://docs.gitlab.com/user/project/integrations/webhooks/) が情報を [Zapier](https://zapier.com/app/zaps/folder/210292) に渡し、
そこから Slack ワークフローに情報を送信します。

- `#support_gitlab-com`
  - CMOC [GitLab Project](https://gitlab.com/gitlab-com/support/dotcom/cmoc-handover/), [Zap](https://zapier.com/app/zap/100087156), [Slack workflow](https://gitlab.com/gitlab-com/support/toolbox/slack-workflows/-/blob/master/cmoc_handover.slackworkflow)
- `#support_licensing-subscription`
  - L&R 関連の社内リクエスト [GitLab Project](https://gitlab.com/gitlab-com/support/internal-requests/), [Zap](https://zapier.com/app/zap/98925072), [Slack workflow](https://gitlab.com/gitlab-com/support/toolbox/slack-workflows/-/blob/master/support_licensing_subscription_internal_requests.slackworkflow)

#### 絵文字リアクション

特定の絵文字でメッセージにリアクションすることで情報を提供します。

- `#support_escalations`
  - [Ticket Escalation](https://gitlab.com/gitlab-com/support/toolbox/slack-workflows/-/blob/master/support_managers_ticket_escalation.slackworkflow) - `:escalate:` - サポートチケットや社内 Issue をエスカレーションする適切な手順に従うようユーザーに案内します。
- `#support_gitlab-com`
  - [Ticket Escalation](https://gitlab.com/gitlab-com/support/toolbox/slack-workflows/-/blob/master/support_gitlab_com_ticket_escalation.slackworkflow) - `:escalate:` - サポートチケットや社内 Issue をエスカレーションする適切な手順に従うようユーザーに案内します。
  - [Question Redirect](https://gitlab.com/gitlab-com/support/toolbox/slack-workflows/-/blob/master/support_gitlab_com_question_redirect.slackworkflow) - `:leftwards_arrow_with_hook:` - より適切な Slack チャンネルに質問を投稿するようユーザーに案内します。
  - [Remove Link Preview](https://gitlab.com/gitlab-com/support/toolbox/slack-workflows/-/blob/master/support_gitlab_com_remove_link_preview.slackworkflow) - `:slack:` - メッセージ内に展開されたリンクプレビューがあれば削除するよう、ユーザーに丁寧に依頼します。
  - [Welcome](https://gitlab.com/gitlab-com/support/toolbox/slack-workflows/-/blob/master/support_gitlab_com_welcome.slackworkflow) - この自動ワークフローは、チャンネルの新規メンバーに役立つ情報を含むダイレクトメッセージを自動的に送信します。
  - Contact Management - `:admission_tickets:` - Zendesk Global 組織のサポート連絡先を管理する適切な手順に従うようユーザーに案内します。
- `#support_self-managed`
  - [Ticket Escalation](https://gitlab.com/gitlab-com/support/toolbox/slack-workflows/-/blob/master/support_self_managed_ticket_escalation.slackworkflow) - `:escalate:` - サポートチケットや社内 Issue をエスカレーションする適切な手順に従うようユーザーに案内します。
- `#support_licensing-subscription`
  - [Ticket Escalation](https://gitlab.com/gitlab-com/support/toolbox/slack-workflows/-/blob/master/support_licensing_subscription_ticket_escalation.slackworkflow) - `:escalate:` - サポートチケットや社内 Issue をエスカレーションする適切な手順に従うようユーザーに案内します。

### 休暇

*[Support 休暇ページ](/handbook/support/support-time-off) を参照してください*

### オンボーディング

*[Support オンボーディングページ](/handbook/support/training) を参照してください*

### 昇進

昇進したら、必ず以下のタイトルを更新してください:

- 私たちの [Support チームページ](https://gitlab.com/gitlab-support-readiness/support-team)。変更は Zendesk にも反映されます。
- 会社のチームページ。手順は [Add yourself to the Team Page](/handbook/about/editing-handbook/#add-yourself-to-the-team-page) を参照してください。

[Zoom 名前のフォーマット](#zoom-name-format) のガイドラインに従って、Slack や Zoom のタイトルの更新も検討してください。

### Support ポッド

GitLab サポートでは、サポートエンジニアの作業を整理するために `Support ポッド` を使っています。各 Support ポッドは、リージョンを横断する単一スキルのエンジニアグループで、自分たちの Support ポッドの特定の製品領域に関心を持っています。これらはエンジニア主導です。Support ポッドに参加または開始するには、以下の詳細を読むことができます。

*[Support ポッド ハンドブックページ](/handbook/support/support-pods) と [Support ポッドとの作業ワークフローページ](/handbook/support/workflows/working-with-pods) を参照してください。*

### プロセスの改善 - 'Active Now' Issue ボード

サポートチームは、プロセス改善のためのアイデアやイニシアチブを追跡するために、['support-team-meta' プロジェクトの Issue](https://gitlab.com/gitlab-com/support/support-team-meta/issues/) を使用しています。['Active Now' Issue ボード](https://gitlab.com/gitlab-com/support/support-team-meta/-/boards/580661) は、現在取り組んでいる項目を示します。3 つのラベルを使用しています:

1. **Blocked** - 進める前に他のチームや外部リソースを待っている
1. **Discussing this week** - 意思決定に至るために積極的に議論されている
1. **In Progress** - 積極的に取り組まれている

これらのラベルの使い方を導く原則がいくつかあります:

1. 各ラベルにつき、いつでも最大 **6 件の Issue** (合計 18 件)
1. 上記いずれかのラベルが付いたすべての Issue は、1 名以上のサポートチームメンバーに **割り当て** されている必要があります
1. 上記いずれかのラベルが付いたすべての Issue は、1 週間先までの **期日** が設定されている必要があります
1. Issue が 1 週間で完了するには大きすぎる場合は、**1 週間で完了できる小さな部分に分割** すべきです (より大きな「親」Issue をプロジェクトに残すのは OK ですが、'In Progress' カラムには載せるべきではありません)

**毎週、私たちはボードを見て、物事を前に進めるために Issue について議論します。**

各ラベルあたり最大 6 件の Issue に保つことで、**進行中の作業を制限** し、新しいタスクを始める前に物事が完了するようにします。

**ボードの項目の追加と管理:**

サポートマネージャーは定期的にボードをレビューし、項目を前進させていきます。

1. チームは、**ボードに載っていない Issue に投票** できます。「いいね」絵文字を付けて、[人気のある Issue](https://gitlab.com/gitlab-com/support/support-team-meta/issues?sort=popularity&state=opened) を確認できます。
1. サポートマネージャーは、人気のある Issue を確認し、空きがあればボードに追加します。
1. サポートマネージャーは Issue を **キュレート** し、大きなバックログが発生しないようにします。バックログを管理可能な状態に保つため、人気のない、または古い Issue はクローズ／マージできます。

#### Support Slackbot

[Support Slackbot (アーカイブ済)](https://gitlab.com/gitlab-com/support/toolbox/gitlab-support-bot) は廃止されました。

## <i aria-hidden="true" class="fas fa-book fa-fw icon-color font-awesome"></i>Support リソース

### ハンドブック リンク

- [GitLab チームページ](/handbook/company/team/)
- [製品カテゴリ](/handbook/product/categories/) - どのチームが何を扱っているかを確認
- [Statement Of Support](https://about.gitlab.com/support/statement-of-support/)
- [Support マネージャー](/handbook/support/managers/)
- [Support 採用](/handbook/support/managers/hiring/)
- [Support チャンネル](/handbook/support/channels/)
- [On-Call](/handbook/engineering/on-call/)
- [License & Renewals](/handbook/support/license-and-renewals/)
- [Advanced Topics](/handbook/support/advanced-topics/)
- [Browser extensions](/handbook/support/browser-extensions)
- [AI と Support 業務](/handbook/support/ai)

### ドキュメント

- GitLab
  - [GitLab.com Status](https://status.gitlab.com/)
  - [GitLab Releases](https://about.gitlab.com/releases/categories/releases/)
- ドキュメントを書く
  - [GitLab ドキュメント ガイドライン](https://docs.gitlab.com/development/documentation/)
  - [ドキュメント スタイルガイド](https://docs.gitlab.com/development/documentation/styleguide/)
  - [GitLab Markdown](https://docs.gitlab.com/user/markdown/)
- GitLab のセットアップ
  - [GitLab アーキテクチャ概要](https://docs.gitlab.com/development/architecture/)
  - [Requirements](https://docs.gitlab.com/install/requirements/)
  - [GitLab のインストール方法](https://about.gitlab.com/install/)
  - [GitLab のバックアップとリストア](https://docs.gitlab.com/administration/backup_restore/)
  - [Omnibus 設定オプション](https://docs.gitlab.com/omnibus/settings/)
  - [Omnibus Configuration options](https://docs.gitlab.com/omnibus/settings/configuration.html)
  - [Omnibus Database settings](https://docs.gitlab.com/omnibus/settings/database.html#seed-the-database-fresh-installs-only)
- GitLab のデバッグ
  - [Log system](https://docs.gitlab.com/administration/logs/)
  - [Rake tasks](https://docs.gitlab.com/raketasks/)
  - [Maintenance Rake Tasks](https://docs.gitlab.com/administration/raketasks/maintenance/)
  - [GitLab サポートエンジニア向けのデバッグリソース](https://docs.gitlab.com/administration/#support-team-docs)
  - [GitLab Rails Console Cheat Sheet](https://docs.gitlab.com/administration/troubleshooting/gitlab_rails_cheat_sheet/)
- GitLab の機能
  - [Install GitLab Runner](https://docs.gitlab.com/runner/install/)
  - [GitLab CI example projects](https://gitlab.com/gitlab-examples)
  - [Elasticsearch](https://docs.gitlab.com/integration/advanced_search/elasticsearch/)
  - [Connecting GitLab with a Kubernetes cluster](https://docs.gitlab.com/user/project/clusters/)
- GitLab の開発
  - [GitLab 開発ユーティリティ](https://docs.gitlab.com/development/utilities/)
  - [Feature flags](https://docs.gitlab.com/development/feature_flags/)
  - [What requires downtime?](https://docs.gitlab.com/update/with_downtime/)
