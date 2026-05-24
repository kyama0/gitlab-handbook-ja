---
title: サポートチーム ハンドブック
description: GitLab サポートチームのハンドブックは、私たちがなぜ・どのようにこの方法で働いているのかを示す中心的なリポジトリです。
upstream_path: /handbook/support/
upstream_sha: 877082e5cd4baeabe3d6e802b3b4b1efdb6573f1
translated_at: "2026-05-23T00:00:00Z"
translator: claude
stale: false
model: claude-opus-4-7
lastmod: "2026-05-19T17:06:44+12:00"
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

- 常に、お客様の成功を確保する責任者は自分自身であると考えてください。
- お客様をサポートする際、いかなる Issue、インシデント、損失も *GitLab の損失* です。
  - お客様が問題やダウンタイムを経験している場合は、GitLab 自体がダウンタイムを経験しているときと同じ緊急度で行動してください。
  - お客様が生産性を失っている場合は、GitLab 自体が生産性を失っているときと同じ緊急度で行動してください。
  - 2,500 ユーザーを抱えるお客様のインスタンスがダウンしている場合は、GitLab が 1 日 100 万ドルを失っているのと同じ緊急度で対応してください。
- 早めにエスカレーションしてください。CEO を含む GitLab 全体への可視性は、常に後からよりも早い方が良いです。お客様のために必要なすべてのリソースを早期に集結させてください。

サポートチームのメンバーとして、私たちは問題や疑問を抱えた人が最初にやり取りする相手です。そのため、会社を代表し、適切に自分たちを示す責任があります。したがって、私たちには以下のことが求められます:

- 常にフレンドリーで敬意を持って接すること。
- 新しいアイデアや観点に対して開かれていること。
- 何かを知らなくても構いません。他の人に聞くことができます。
- お客様に「いいえ」と言えること（ただし、回避策を提案し、必要に応じてシニアにエスカレーションするよう心がけてください）。

#### 私たちはコミッションやボーナスを受け取っていない

私たちの目標は、お客様が GitLab を使用する際に最良の結果につながる指針を提供することです。そのため、私たちはドキュメント、製品機能、オープンなバグ/機能リクエストを参照することがよくあります。
しかし、商業的なオファリングの一つを通じてお客様に最もよくサービスを提供できる場合もあります。

サポートは CIO が率いる [Enterprise Technology &amp; AI (ETA)](/handbook/eta/) 組織の一部であり、サポートエンジニアは追加サービスのアップセル、お客様の購入、またはリード獲得に対してコミッションやボーナスを受け取っていません。
[Professional Services](https://about.gitlab.com/services/) の利用や、異なるティアやオファリングへの移行を推薦する場合は、このセクションへのリンクを推薦に含めることで、混合した動機なしにそうしていることをお客様に確認していただけます。

### GitLab 内での私たちの役割

GitLab サポートは [Enterprise Technology &amp; AI (ETA)](/handbook/eta/) ディビジョンの一部です。
サポートは Cost of Sales（または Cost of Goods Sold (COGS) とも呼ばれる）コストセンターの一部です。

この独自の取り決めは、私たちの [Key Performance Indicators](/handbook/support/performance-indicators/) に反映されており、
コストを事前定義した範囲内に抑えつつ、アウトプットを増やすことで効率を高めながら、
お客様の成功と満足を追求することに主に焦点を当てています。

これはまた、[サポートエンジニアの責務](/handbook/support/support-engineer-responsibilities)に
コードやドキュメントの貢献、および製品マネージャーとの協力が含まれる理由でもあります。
お客様とのやり取りから得た知識を製品やドキュメントの改善に活かすことで、問題が発生する前に解決します。これにより、サポートのケース負荷が減り、GitLab 組織全体の効率が向上します。例えば、セールス部門は顧客の問い合わせに答えるためにドキュメントを参照でき、サポートやカスタマーサクセスに頼る必要が減り、営業クロージングに多くの時間を割けます。

#### 顧客への共感を築く

サポートの役割の一部は、お客様の声を増幅させることです。その一つの方法として、他の GitLab チームメンバーを、製品に関するお客様の課題や、それらの課題克服をお客様が支援する際の私たち自身の障害を理解するのに役立つ経験に招くことがあります。

始める前に、サポートチケットを閲覧できるよう Zendesk の light-agent アクセスを取得してください。

お客様との関わりを増やしたい場合、サポートへの参加方法はいくつかあります:

##### サポートシャドウプログラム

GitLab サポートチームと私たちの責務について学びたい GitLab チームメンバーは、サポートシャドウプログラムへの参加をお勧めします。サポートシャドウプログラムは、サポート以外のチームメンバーが GitLab サポートチームとともにシャドーイング、学習、コラボレーション、協力して働く時間を過ごすための方法です。

サポートチームのメンバーではなく、このプログラムに参加したい場合は、`support-team-meta` プロジェクトに [サポートシャドウプログラム Issue](https://gitlab.com/gitlab-com/support/support-team-meta/-/issues/new?issuable_template=Support%20Shadow%20Program) を開いてください。この Issue は、このプログラムへの進捗を整理、計画、追跡するために使用されます。

GitLab サポートは、参加者とのシャドーペアリングセッションのスケジュール調整に Calendly を使用しています。サポートチームのメンバーで、サポート以外の人々とのサポートシャドーペアリングセッションのホストをボランティアしたい場合は、Support Ops があなたをサポートシャドウプログラムの Calendly ローテーションに追加するよう依頼する [スケジュール更新リクエスト Issue](https://gitlab.com/gitlab-com/support/support-ops/other-software/calendly/-/issues/new?issuable_template=Schedule%20update%20request) を開いてください。

##### サポートコールへの参加

サポートコールは [GitLab サポートカレンダー](#google-calendar) に掲載されています。以下のものがあります:

- お客様とエンジニアの間の **お客様コール**。説明にはチケット ID が含まれます。`https://gitlab.zendesk.com/agent/tickets/<id>` にアクセスしてチケットを確認してください。
- 1 つ以上のチケットに取り組む 2 人以上のエンジニアの間の **ペアリングセッション**。
- より経験豊富なサポートエンジニアが知識を共有する **オフィスアワー / ヘルプセッション**。
- サポートチームのメンバーが特定のトピックについて発表する **トレーニングセッション**

##### 緊急コールへの参加

参加する素晴らしい方法の一つは、お客様の緊急コールに参加することです。PagerDuty アラートを確認するために `#support_self-managed` を監視できます。または、PagerDuty へのアクセス権がある場合は、[シャドーローテーション](/handbook/support/on-call/#your-first-on-call-shift)にスケジュールされることができます。

### チームメンバー全員をサポートする方法 -- ヘルピングヒエラルキー

各ロールの責務を見ていくと、組織がどのように機能しているかをつかめます。ロールが協力して問題を解決する方法を簡単に明確に考える方法を作りたいと思いました:

- サポートエンジニアは、チケット、マージリクエスト、その他のお客様向けの活動を通じてお客様の問題解決を支援します。
- マネージャーは、障害を取り除き、お客様向けの活動に参加し、摩擦を減らし、成果と効率を実現するシステムを構築するためにサポートエンジニアと協力することで、サポートエンジニアの問題解決を支援します。
- シニアリーダーは、チームのパフォーマンスを KPI に対処し、イニシアティブを優先し、グローバルな成果の達成に責任を持つことで、スケーリングの問題を解決・回避します。
- VP of Support は、成長とチームデザインの課題を特定し、エグゼクティブと取締役会への進捗を報告することで、会社全体の問題を解決・回避します。

このシンプルなリストは、異なるロールで期待値を設定し、問題解決を調整するための簡単な方法を提供します。

### パフォーマンスの測定方法

私たちは [Customer Support Department Performance Indicators](/handbook/support/performance-indicators/) (KPI) を使用して、サポートチームがどれだけ良いパフォーマンスを発揮しているかを追跡しています。

KPI の測定値は、適切なアクセス権がある場合は Zendesk の `Reporting` タブで確認できますが、これらの KPI を満たすための進捗も前述の KPI リンクで追跡されています。

これらの KPI は [サポート週次レビュー](/handbook/support/#support-week-in-review) で毎週レビューします。

#### 成功の柱

KPI と OKR を達成するために、成功を収めるためにバランスを取る必要がある 3 つの重要な柱があります:

- 人材: 適切なタイミングと適切な場所で優秀なエンジニアとマネージャーを採用し続けること。既存のエンジニアをサポートし、専門的な成長とスマートなツールを通じて各チームメンバーが潜在能力を最大限に発揮できるよう支援します。
- プロセス: 既存のプロセスをイテレーションし、グローバルなスケーリングを可能にする新しい、シンプルなプロセスを開発します。
- パフォーマンス: 人々が自分たちの貢献がグローバルチームの成果達成にどのように役立っているかを理解し、実際にどのような貢献が求められるかについての指針を持つこと。

さまざまな時点で、問題を解決するために柱の一つに過最適化しやすいですが、三つすべてを考慮することが短絡的な意思決定を避けるための鍵です。

### サポートチームについて

サポートチームメンバーに関する情報の [Single Source of Truth](/handbook/company/culture/all-remote/) — メールアドレスや個人的な興味から製品スキルやグループメンバーシップまで — は、
[support-team プロジェクト](https://gitlab.com/gitlab-support-readiness/support-team) です。
[サポートチームホームページ](https://gitlab-com.gitlab.io/support/team-pages/) は
そのプロジェクトの情報から構築されています。他の多くのサポートツールと
自動化もそれを使用しています。個別のサポートチームメンバーのファイルの構造の詳細については、
[サポートチームウィキ](https://gitlab.com/gitlab-support-readiness/support-team/-/wikis/home) の
[サポートチームエントリページ](https://gitlab.com/gitlab-support-readiness/support-team/-/wikis/Support-team-entry)
を参照してください。

サポートチームのさまざまな部分に関する情報と情報は、サポートハンドブックの以下のセクションにあります:

- [/support/engineering](/handbook/support/engineering/) はサポートエンジニア向けのコンテンツです。例: Zendesk ワークフローと技術リソース。
- [/support/license-and-renewals](/handbook/support/license-and-renewals/) はライセンスと更新のサポートエンジニアとマネージャー向けのコンテンツです。例: [customers.gitlab.com](https://customers.gitlab.com) と Fulfillment プロダクトチームとの協力。
- [/support/managers](/handbook/support/managers/) はサポートマネージャー向けのコンテンツです。例: Issue の管理方法、1:1 の実施方法、リーダーシップ同期情報。
- [/support/readiness](/handbook/support/readiness/) はサポートレディネスのランディングページです。例: サポートチームは X に対してどのように準備していますか？

以下によく参照されるページもあります:

- [サポートエンジニアの責務](/handbook/support/support-engineer-responsibilities)
- [サポートエンジニアの知識エリア](/handbook/support/workflows/knowledge_areas)
- [サポートエンジニアのキャリアパス](/handbook/support/support-engineer-career-path)
- [サポートマネージャーの責務](/handbook/support/managers/manager-responsibilities)

---
{{% include "includes/engineering/we-are-also-product-development.md" %}}

## サポートにおけるドッグフーディング

[ドッグフーディング](/handbook/values/#dogfooding) の運用原則を引用して、GitLab サポートが [Service Desk](https://docs.gitlab.com/user/project/service_desk/) を使わない理由を尋ねる人がいることがあります。

ドッグフーディングとは、*意図された目的のために* GitLab の一部を使用することです。例えば、GitLab Issue をニュースレターとして使用することもできますが（実際に使っています！参照: [サポート週次レビュー](#support-week-in-review)）、Issue がニュースレターとして機能するようにマージリクエストを作成することは、そのコアユースケースにも役立てない限りドッグフーディングとは言えません。

言い換えると: ドッグフーディングとは、お客様が使用するのと同じ方法で製品を使用し、お客様が抱えるペインポイントを発見・解決することです。ドッグフーディングはお客様の成果を支援します。

GitLab サポートでは、[個人データリクエスト](/handbook/legal/privacy/gdpr/) の処理に Service Desk を使用していますが、グローバルサポートには使用していません。Service Desk の顧客は主に [*バグレポート、機能リクエスト、または一般的なフィードバック*](https://docs.gitlab.com/user/project/service_desk/) を求める小規模チームだからです。このより小さな設定での Service Desk の使用を通じて、[内部ノート](https://docs.gitlab.com/user/discussions/#add-an-internal-note) のような機能の追加に向けて製品の方向性に影響を与えることができました。

私たちはサポート内のユースケースに向けた製品機能を継続的に評価し、ブロッカーが存在する場合はフィードバックと機能リクエストを提供しています。サポートは常に他のいかなる考慮事項よりもお客様の成果を優先します。

## OKR

### 今四半期

これらは以前、もはや使用していないツールによって生成されていました。
TODO: 現在の GitLab 実装に置き換える

### 前四半期

これらは以前、もはや使用していないツールによって生成されていました。
TODO: 現在の GitLab 実装に置き換える

## 危険と課題

[マネージャー/危険ページ](/handbook/support/managers/hazards-and-challenges) を参照してください

## コミュニケーション

GitLab サポートチームは [Enterprise Technology &amp; AI (ETA)](/handbook/eta/) 機能の一部であり、より広い [エンジニアリング](/handbook/engineering/) 機能と密接に連携しています。エンジニアリングの発表やイニシアティブについて情報を得るためのヒントについては、
[エンジニアリングハンドブックのコミュニケーションセクション](/handbook/engineering/)
を必ず確認してください。

最も重要なコミュニケーション手段は次のとおりです:

- [サポート週次レビュー](#support-week-in-review)。サポートの全員にとって重要な更新情報。
SWIR はすべてのサポートチームメンバーにとって必読/必聴のものです。週に少なくとも一度は SWIR を確認するようにしてください。チーム全体と共有したいことがあれば、これが最良の場所です。例えば、共通のバグに関する Issue、フィードバックが必要な Issue、または取り組んでいる外部プロジェクトに関する Issue など。
- ["非公式"](/handbook/communication/#slack) コミュニケーションのための [Slack チャンネル](#slack)。
Slack のデータ保持ポリシーにより、そこで共有されたものは最終的に削除されます。そこで何かを共有する場合は、ドキュメント、ハンドブック、Issue トラッカーなどに恒久的な場所があることを確認してください。
- ワークフロー、一般的なチームの提案、サポートに関連するタスクやプロジェクトなどの Issue 用の [メタ Issue トラッカー](https://gitlab.com/gitlab-com/support/support-team-meta/issues/)。

重要なメッセージをグローバルサポートチームに確実に届けたい場合は、この[メッセージングテンプレート](https://gitlab.com/gitlab-com/support/managers/leadership-sync/-/blob/master/.gitlab/issue_templates/support-message-plan.md)を使用します。これにより、これらのメッセージが構造化された記録された方法でコミュニケーションチャンネル全体に届けられます。

### GitLab.com

#### グループ

GitLab.com の Issue とマージリクエストにサポートチームメンバーを通知またはを追加するために、以下の GitLab グループを使用しています。

| グループ | 誰 |
| ----- | --- |
| [@gitlab-com/support](https://gitlab.com/groups/gitlab-com/support/-/group_members?with_inherited_permissions=exclude&sort=last_joined) | 全サポートチームメンバー |
| [@gitlab-com/support/amer](https://gitlab.com/groups/gitlab-com/support/amer/-/group_members?with_inherited_permissions=exclude&sort=last_joined) | AMER サポート |
| [@gitlab-com/support/apac](https://gitlab.com/groups/gitlab-com/support/apac/-/group_members?with_inherited_permissions=exclude&sort=last_joined) | APAC サポート |
| [@gitlab-com/support/emea](https://gitlab.com/groups/gitlab-com/support/emea/-/group_members?with_inherited_permissions=exclude&sort=last_joined) | EMEA サポート |
| [@gitlab-com/support/dotcom](https://gitlab.com/groups/gitlab-com/support/dotcom/-/group_members?with_inherited_permissions=exclude&sort=last_joined) | SaaS 主担当と GitLab.com 管理者アクセスを持つサポートメンバー |
| [@gitlab-com/support/dotcom/console](https://gitlab.com/groups/gitlab-com/support/dotcom/console/-/group_members?with_inherited_permissions=exclude&sort=last_joined) | GitLab.com コンソールアクセスを持つサポートメンバー |
| [@gitlab-com/support/customers-console](https://gitlab.com/groups/gitlab-com/support/customers-console/-/group_members?with_inherited_permissions=exclude&sort=last_joined) | CustomersDot コンソールアクセスを持つサポートメンバー |
| [@gitlab-com/support/licensing-subscription](https://gitlab.com/groups/gitlab-com/support/licensing-subscription/-/group_members?with_inherited_permissions=exclude&sort=last_joined) | ライセンスと更新に注力するサポートメンバー |
| [@gitlab-com/support/cmoc](https://gitlab.com/gitlab-com/support/cmoc) | Communication Manager On-Call ローテーションに参加するサポートメンバー |
| [@gitlab-com/support/ceoc](https://gitlab.com/gitlab-com/support/ceoc) | Customer Emergencies On-Call ローテーションに参加するサポートメンバー |
| [@gitlab-com/support/managers](https://gitlab.com/groups/gitlab-com/support/managers/-/group_members?with_inherited_permissions=exclude&sort=recent_last_activity) | 全サポートマネージャー |
| [@gitlab-com/support/managers/amer](https://gitlab.com/groups/gitlab-com/support/managers/amer/-/group_members?with_inherited_permissions=exclude&sort=recent_last_activity) | 全 AMER サポートマネージャー |
| [@gitlab-com/support/managers/apac](https://gitlab.com/groups/gitlab-com/support/managers/apac/-/group_members?with_inherited_permissions=exclude&sort=recent_last_activity) | 全 APAC サポートマネージャー |
| [@gitlab-com/support/managers/emea](https://gitlab.com/groups/gitlab-com/support/managers/emea-managers/-/group_members?with_inherited_permissions=exclude&sort=recent_last_activity) | 全 EMEA サポートマネージャー |

#### プロジェクト

チームのプロジェクトと Issue トラッカーは [サポート親グループ](https://gitlab.com/gitlab-com/support) にあります。チームコミュニケーションに関連するいくつかの選択されたプロジェクトを以下に示します。

| プロジェクト | 目的 |
| ------- | ------- |
| [support-team-meta](https://gitlab.com/gitlab-com/support/support-team-meta) | サポートプロセスを議論・改善するための Issue |
| [support-training](https://gitlab.com/gitlab-com/support/support-training) | オンボーディングを含むサポートチームのコースとトレーニング |
| [support-pairing](https://gitlab.com/gitlab-com/support/support-pairing) | チケットで協力して取り組むペアリングセッションの記録 |
| [feedback](https://gitlab.com/gitlab-com/support/feedback) | Issue の形式で Zendesk から SSAT サーベイ回答を収集 |
| [support-operations](https://gitlab.com/gitlab-com/support/support-ops/support-ops-project) | サポートオペレーションチームプロジェクト |
| [support-readiness](https://gitlab.com/gitlab-com/support/readiness/) | サポートレディネスプロジェクト |

##### サポートチームメタ Issue トラッカー

[サポートメタ Issue トラッカー](https://gitlab.com/gitlab-com/support/support-team-meta/issues) を使用して、サポートに関するフィードバックが必要な Issue を追跡・作成します。

サポートに関連するプロジェクトやタスクに取り組みたい場合は、Issue を自由に作成し、外部の Issue やプロジェクトへのリンクを追加してください。これにより:

- 私たちが取り組んでいることについてチーム全体に対して透明性を持てます
- 他の興味のあるチームメンバーと外部プロジェクトやタスクでコラボレーションする機会を持てます
- チームメンバーが重複した作業をするのを避けられます

GitLab、私たちの FOSS プロジェクト、または GitLab コンポーネントのドキュメントや機能に関する Issue は、この Issue トラッカーではなく、適切な Issue トラッカーに入力する必要があります。

実行可能な提案された解決策がある場合は、[マージリクエストを開始し](/handbook/communication/#start-with-a-merge-request)、チームをフィードバックのためにタグ付けし、[サポート週次レビュー](#support-week-in-review) でリンクを共有することが最善です。

### Slack

私たちはチームコミュニケーションに GitLab の [Slack 使用に関する一般的なガイドライン](/handbook/communication/#slack)
に従っています。90 日間のアクティビティのみが保持されるため、
チームハンドブック、製品ドキュメント、Issue トラッカー、またはお客様チケットに重要な情報を移してください。

#### spt_ と support_ プレフィックス

チャンネル名付けの際、「spt」はサポートチームにとって主に役立つ内部チャンネルを意味します。これらは、他の人が希望すれば参加できるように公開にする必要があります。チャンネルが「support」プレフィックスを持つ場合は、他のチームがサポートチームと交流するための公開インターフェースを意図しています。

#### デイリースタンドアップボット

[サポートデイリー Slackbot](https://gitlab.com/gitlab-com/support/toolbox/support-daily-slackbot)
は、GitLab のさまざまなチームとリージョン全体で毎日のスタンドアップ Slack スレッドを促進するために設計された自動化ツールです。タイプとターゲットに基づいて、特定の Slack チャンネルにカスタマイズされたメッセージを投稿します。さまざまなバリエーションの詳細については、[README ファイル](https://gitlab.com/gitlab-com/support/toolbox/support-daily-slackbot/-/blob/main/README.md?ref_type=heads) を参照してください。

#### チャンネル

| チャンネル | 目的 |
| ------- | ------- |
| [#support_team-chat](https://gitlab.slack.com/archives/CCBJYEWAW) | 雑談、チャット、ステータス更新のためのサポートチームラウンジ |
| [#support_gitlab-com](https://gitlab.slack.com/archives/C4XFU81LG) | GitLab.com チケットとお客様の Issue を議論 |
| [#support_self-managed](https://gitlab.slack.com/archives/C4Y5DRKLK) | セルフマネージドチケットとお客様の Issue を議論 |
| [#support_gitlab-dedicated](https://gitlab.enterprise.slack.com/archives/C058LM1RL3V) | GitLab Dedicated チケットとお客様の Issue を議論 |
| [#support_licensing-subscription](https://gitlab.slack.com/archives/C018C623KBJ) | ライセンスと更新のチケットとお客様の Issue を議論 |
| [#support_ticket-attention-requests](https://gitlab.slack.com/archives/CBVAE1L48) | Support Manager On-Call とエスカレーションされたチケットを議論 |
| [#support_operations](https://gitlab.slack.com/archives/C018ZGZAMPD) | サポートの運用方法に関連する運用項目を議論 |
| [#support_leadership](https://gitlab.slack.com/archives/C01F9S37AKT) | サポートマネージャーの注意が必要なサポートチームの内部事項を議論 |
| [#recruiting-support-engineering](https://gitlab.slack.com/archives/CE9S6JW4S) | サポートチームの採用関連事項を議論 |
| [#spt_amer_global](https://gitlab.enterprise.slack.com/archives/C07EYM9NNE4) | AMER のグローバル SE に固有のトピックを議論 |
| [#spt_emea](https://gitlab.enterprise.slack.com/archives/C07N48KHCR0) | EMEA のグローバル SE に固有のトピックを議論 |
| [#spt_apac](https://gitlab.enterprise.slack.com/archives/C07EJ2L3P7E) | APAC のグローバル SE に固有のトピックを議論 |
| [#spt_pairing](https://gitlab.slack.com/archives/C03UW0HPBGD) | チケットと Issue で協力して取り組む際に使用 |
| [#spt_us-government](https://gitlab.slack.com/archives/C03RTN3JEJ2) | US 連邦サポートに関するトピックの議論 |
| [#spt_onboarding](https://gitlab.slack.com/archives/C07UJ1N8S1F) | 新メンバーの方へ: オンボーディングに関するトピック |

##### プライベートチャンネル

GitLab では、公開にできない正当な理由がない限り、[デフォルトで公開](/handbook/communication/confidentiality-levels/#not-public)であることを求められています。Slack は公開ではありませんが、*誰でも貢献できる* 精神において、プライベートチャンネルは最小限に抑える必要があります。

以下のプライベートチャンネルはサポートの恒久的なものです。使用量の推定値は 2022 年 2 月のトラフィックに基づいた概算です。

| チャンネル | 誰が参加しているか | 目的 | 使用頻度 |
| ---- | ---- | ---- | ---- |
| `#spt-vp-directors` | ディレクター以上 | シニアリーダーシップが機密トピック / 予算 / 等について議論・調整するために使用 | 週に 3〜4 スレッド |
| `#spt_managers-internal` | マネージャー以上 | 公開チャンネルには適さないマネージャーが対象の機密トピックに使用 | 週に 4〜5 スレッド |
| `#spt_managers-internal-apac` | APAC マネージャー以上 | 公開チャンネルには適さない APAC マネージャーが対象の機密トピックに使用 | 週に 3〜4 スレッド |
| `#spt_managers-emea` | EMEA マネージャー以上 | 公開チャンネルには適さない EMEA マネージャーが対象の機密トピックに使用 | 週に 4〜5 スレッド |
| `#spt_managers-amer` | AMER マネージャー以上 | 公開チャンネルには適さない AMER マネージャーが対象の機密トピックに使用 | 週に 1〜2 スレッド |
| `#spt_hiring-mgmt` | マネージャー以上、採用担当、財務 | オファーの調整と公開チャンネルで共有できる採用の詳細を議論するために使用 | 週に 1〜2 スレッド |
| `#spt_leadership_internal` | マネージャー以上、スタッフ以上 | `#support_leadership` のプライベートバージョン。スタッフとマネージャーが適切な対象の機密トピックに使用 | ほとんど使用されない |
| `#spt_staff_internal` | スタッフ以上 | 公開チャンネルには適さないスタッフエンジニアが対象の機密トピックに使用 | ほとんど使用されない |

新しいプライベートチャンネルを始める前に、*なぜここでは誰もが貢献できないのか？* と自問してください。適切な回答は次のとおりです:

- このチャンネルは、指定されたインサイダーステータスに影響する可能性のある重要な非公開情報を議論するために使用されます。
- このチャンネルは、パフォーマンス、報酬、その他の機密事項など、個人またはグループのプライバシーに悪影響を及ぼす可能性のあることを議論するために使用されます。

プライベートチャンネルは以下には適していません:

- ノイズを減らす（このために新しい公開チャンネルを作成してください）
- 長期的な議論（上の表に含まれていない限り）
- 公開コメントのための資料の準備

バリューは、困難なときにそれを実行する場合にのみバリューとなります。[GitLab バリューを維持しながらビジネスをスケールする方法](/handbook/values/#how-to-scale-the-business-while-preserving-gitlab-values)についての詳細な議論を参照してください。

#### ユーザーグループ

| グループ | 誰 |
| ----- | --- |
| `@support-dotcom` | GitLab.com 管理者アクセスを持つサポートチームメンバー |
| `@support-selfmanaged` | セルフマネージドチケットに注力するサポートチーム |
| `@support-team-apac` | サポートチーム APAC |
| `@support-team-emea` | サポートチーム EMEA |
| `@support-team-americas` | サポートチーム AMER |
| `@supportmanagers` | サポートマネージャー |
| `@support-managers-apac` | サポートマネージャー APAC |
| `@support-managers-emea` | サポートマネージャー EMEA |

これらのグループの 1 つ以上に追加される必要がある場合は、
[アクセスリクエストプロジェクト](https://gitlab.com/gitlab-com/access-requests) に Issue を開いてください。

### Google Calendar

以下のチームカレンダーを使用してイベントとミーティングを調整しています:

- [GitLab サポート](https://calendar.google.com/calendar/embed?src=gitlab.com_9bs159ehrc5tqglur88djbd51k%40group.calendar.google.com) カレンダー ID `gitlab.com_9bs159ehrc5tqglur88djbd51k@group.calendar.google.com`
- [サポート - 休暇](https://calendar.google.com/calendar/embed?src=gitlab.com_as6a088eo3mrvbo57n5kddmgdg%40group.calendar.google.com) カレンダー ID `gitlab.com_as6a088eo3mrvbo57n5kddmgdg@group.calendar.google.com`
- [サポート - お客様イベント](https://calendar.google.com/calendar/embed?src=c_8d5a8e9b8c3fc74901bad1799b18e8eafc9e499f7805f9c82f79f9d1e1f9ac4b%40group.calendar.google.com) - 実験的: [support-team-meta#5153](https://gitlab.com/gitlab-com/support/support-team-meta/-/issues/5153) を参照

これらのカレンダーを GitLab Google Calendar に追加するには、「他のカレンダー」の隣にある「+」をクリックし、「カレンダーを登録」を選択してください。上記の関連する ID を入力してください。これらのカレンダーへのアクセスが必要な場合は、サポートチームメンバーにヘルプを求めてください。

### Zoom

#### Zoom 名前形式

[Zoom プロフィールのカスタマイズ](/handbook/security/corporate/end-user-services/supported-apps/zoom/zoom-additional-config/#customize-your-zoom-profile) で説明されているように、Zoom での名前に以下の形式を使用してください。主にお客様向けのチームとして、これらの形式はお客様が存在するコールでベンダーとロールによってあなたを識別するのに役立つように選ばれました。

サブ部門については、所属する最小単位を使用してください。技術的な正確さよりもお客様の理解を優先してください。

例えば、

- Customer Support -> Support Engineering（Support Engineering を使用）
- Customer Support -> Support Readiness -> Support Operations（Support Operations を使用）
- Customer Support -> Support Engineering -> US Federal Support（US Federal Support を使用）

##### 例

- インターミディエイト サポートエンジニア: `名前 | Support Engineer | GitLab` - `Luciana de Santos | Support Engineer | GitLab`
- Support Readiness Specialist - Ops: `名前 | Support Ops Specialist | GitLab` - `Barka Adamec | Support Ops Specialist | GitLab`
- シニア サポートエンジニア: `名前 | Sr. Support Engineer | GitLab` - `Shen Hua Li | Sr. Support Engineer | GitLab`
- スタッフ サポートエンジニア: `名前 | Staff Support Engineer | GitLab` - `Jabulani Achebe | Staff Support Engineer | GitLab`
- サポートマネージャー: `名前 | Manager, Sub-department | GitLab` - `Sneha Sharma | Manager, Support Operations | GitLab`
- シニア サポートマネージャー: `名前 | Sr. Manager, Sub-department | GitLab` | `Joo Hee Ko | Sr. Manager, US Federal Support | GitLab`
- ディレクター: `名前 | Director, Sub-department | GitLab` | `Noémie Blanchet | Director, Support Engineering | GitLab`
- バイスプレジデント: `名前 | VP, Department | GitLab` - `Kalina Nowak | VP, Customer Support | GitLab`

### 週次ミーティング

サポートチームは毎週いくつかのミーティングを行っています。これらにより調整が可能になり、一緒に成長することができます。各ミーティングは独自のアジェンダを持ち、毎週異なるチームメンバーがリードします。

議論はタイムゾーンに関わらずチーム全体がコラボレーションできるよう、Issue やマージリクエストで行うよう奨励されています。

チーム全体に共有する必要があるデモや発表は、[サポート週次レビュー](#support-week-in-review) で共有する必要があります。

すべての Zoom とアジェンダのリンクは [サポートカレンダー](/handbook/support/#google-calendar) の関連するカレンダーエントリに記載されています。

#### サポートチームコール

一部のリージョンのサポートチームメンバーは定期的に集まります。
これらのコールの詳細は [週次サポートチームコールワークフローページ](/handbook/support/workflows/team/weekly_team_call) にあります。

#### サポートリーダーシップミーティング

サポートマネジメントチームは定期的に会合します。これらのコールの詳細は [サポートマネージャーページ](/handbook/support/managers) にあります。

#### サポート月次ビジネスレビュー (MBR)

リーダーシップチーム（スタッフ、マネージャー、シニアマネージャー、ディレクター）は毎月、ビジネス目標とクロスリージョンコラボレーションの調整のために会合します。SAFE データが共有されますが、より広いチームの認識のためにリードアウトが配信されます。

#### サポートリージョナルチームミーティング

一部のリージョナルサポートチームは、会社のニュース、サポートイニシアティブ、トレーニング計画、および結束に焦点を当てたミーティングを行っています。

| 曜日 | リージョン | ミーティング名 | 目的 |
| :-----: | :----: | :----------: | :-----: |
| 火曜日 | APAC | チームミーティング | |
| 火曜日 | AMER | チームミーティング | |
| 木曜日 | EMEA | チームミーティング | |

#### シニア サポートエンジニア オフィスアワー

シニアおよびスタッフのサポートエンジニアはオフィスアワーを開催することが奨励されています。これらのオフィスアワーはメンタリングによってチームを強化することを目的としています。オフィスアワーをスケジュールするかどうか、また頻度は各シニア/スタッフ サポートエンジニア次第です。オフィスアワーを表示して自分自身を招待するには「GitLab サポート」チームカレンダーを参照してください。

ホストはカレンダーイベントの説明に何をカバーするかを含め、オプションで追跡するためのドキュメントを含めることをお勧めします。

シニア/スタッフ サポートエンジニアのオフィスアワーで期待できることのいくつかのアイデア:

- 困難なチケットのトラブルシューティング
- GitLab の機能（Geo、CI、SAST、k8s 等）や新しいワークフローの試用
- 特定のバグの再現
- バグの修正
- ドキュメントの作成または更新
- 特定の問題の考察
- チケットクラッシュセッションのホスト

### ミーティングの作成

同期コールをホストしたい場合があります。そのためには、[サポートカレンダー](/handbook/support/#google-calendar) にイベントを作成できます。チームメンバーをイベントに招待するには、適切な [サポートメールエイリアス](https://internal.gitlab.com/handbook/support/#support-email-aliases)（内部ハンドブック、GitLab チームメンバーのみ）を使用できます。

### サポート週次レビュー

毎週金曜日、[より大きなエンジニアリング組織の週次レビュー](https://drive.google.com/drive/u/0/search?q=type:document%20title%20%22Engineering%20week-in-review%22) からインスピレーションを受けて週次レビューを行っています。SWIR の [トピックフォーム](https://gitlab-com.gitlab.io/support/toolbox/forms_processor/SWIR/) を使用していつでもトピックを追加できます。

ワークフローの変更や発表は SWIR で共有される必要があり、最近の変更を把握するために少なくとも週に一度は確認することをお勧めします。理想的には、ここで共有される情報は Issue やマージリクエストなどの恒久的な場所にある必要があります。

#### SWIR の読み方・聞き方

- [SWIR プロジェクト](https://gitlab.com/gitlab-com/support/readiness/support-week-in-review) の `SWIR::Digest` ラベルがついた [より最近の Issue](https://gitlab.com/gitlab-com/support/readiness/support-week-in-review/-/issues/?sort=created_date&state=all&label_name%5B%5D=SWIR%3A%3ADigest&first_page_size=20) を表示することで、サポート週次レビューを読むことができます。
- このラベルを購読すると、最新の SWIR が生成されたときに通知を受けることができます。
- 2022/07/01 以降に録音されたオーディオエディションについては、それぞれの Issue 内に SWIR のオーディオエディションへのリンクがあります（[SAFE フレームワーク](/handbook/legal/safe-framework/) に準拠するためです）。すべてのオーディオエディションのアーカイブは Google ドライブの [サポート週次レビュー - オーディオエディションフォルダ](https://drive.google.com/drive/search?q=support%20week%20in%20review%20-%20audio%20edition)（内部のみ）で見つけることができます。

チームの誰でも共有することをお勧めします。

#### SWIR トピック

現在、SWIR の各セクションに以下のトピックがあります:

- **Actionable（実行が必要なもの）**: 決定を下す必要があるか、または行動を取る必要があるもの（Issue のフィードバックを求めるなど）。
- **Things to know about（知っておくべきこと）**: 取り組んでいるプロジェクト、既知のバグ、新しいワークフロー、見つけたクールな記事など、チームと共有したいものを共有します。
- **Team Member updates（チームメンバーの更新）**: 新しいチームメンバー、社内異動、チームメンバーに関するその他のニュース！
- **What Did we Learn this Week（今週何を学んだか）**: 発見した（または再発見した！）ことや学んだことを共有するスペース。
- **Support Operations Corner（サポートオペレーションコーナー）**: サポートオペレーションチームからの発表と情報
- **Kudos（称賛）**: 他のチームメンバーに特別な称賛を贈るか、当人が行ったことをハイライトします。
   - **SSAT**: 今週お客様から受け取ったポジティブな SSAT フィードバックの抜粋
- **Metrics report（メトリクスレポート）**: 1 週間のサポートメトリクスをレビューします。

#### SWIR ラベル

SWIR Issue は、GitLab プロジェクトで独自のタグやラベルを持つこともできます。これらは特定のフォーカスエリア（L&R、SaaS など）をハイライトするために使用されます。ラベルは Issue のみに使用されており、ダイジェスト Issue や Google Docs には表示されません。

`Manager Attention` という 1 つのラベルは、サポートマネージャーが特に認識しておくべきポリシーの変更やその他のトピックに使用されます。`Manager Attention` ラベルは
[こちら](https://gitlab.com/gitlab-com/support/readiness/support-week-in-review/-/labels?search=manager+attention)
で見つけて購読することができます。

自動生成された SWIR の起源については、[この Issue](https://gitlab.com/gitlab-com/support/support-team-meta/issues/1394) で読むことができます。

### クロスデパートメントロール

サポートチームは GitLab の多くの他の部門と協力しています —
セールス、チャンネル、プロダクト、リーガルなど。そして、それらのコラボレーションをできるだけ効果的かつ効率的にするために 2 つの異なるロールを作成しました。

#### サポート Stable Counterpart

サポート Stable Counterpart ロールは、製品チームまたは非製品チームとサポートの間に強いつながりを提供するために設計されています。目的は、製品の Issue を議論し、製品の知識を共有し、お客様のニーズを代弁するとともに、各チームの仕事に関する知識を共有し、2 つのチームがうまく協力できるようなプロセスとドキュメントを開発することです。サポート Stable Counterpart になることに興味がある場合、またはロールについて詳しく知りたい場合は、
[サポート Stable Counterparts](/handbook/support/support-stable-counterparts)
ページを読んでください。

## プロセス

### マージリクエストを使用したサポートチームドキュメントの更新

サポートチームは、ハンドブックやプロジェクト Issue テンプレートなど、複数の場所に私たちの組織的な知識、プロセス、ワークフローを記録しています。そのようなドキュメントを更新する際は、他の場所で承認を受けていた場合でも、マージリクエストに承認の可視的なアーティファクトを持つようにしてください。これにより、監視や説明責任なしに変更が行われているという印象を避けることができます。

承認のアーティファクトには以下が含まれます:

- ピアまたはマネージャーに MR をレビューしてマージしてもらうこと
- ピアまたはマネージャーが [MR の承認](https://docs.gitlab.com/user/project/merge_requests/approvals/) を使用して承認を示すこと
- ピアまたはマネージャーが「良いと思います」とコメントすること

### サポートワークフロー

- [サポートワークフロー](/handbook/support/workflows)
  - [内部ポリシーと手順 Wiki](https://gitlab.com/gitlab-com/support/internal-requests/-/wikis/home)
  - [チケットの扱い方](/handbook/support/workflows/working-on-tickets)
  - [プロダクト/開発に Issue を提出する方法](/handbook/support/workflows/working-with-issues)
  - [GitLab アプリケーションにコードを提出する方法](https://gitlab.com/gitlab-org/gitlab-ce/blob/master/CONTRIBUTING.md)
  - [お客様の Issue で作業する際のドキュメント提出方法](https://docs.gitlab.com/development/documentation/styleguide/#docs-first-methodology)
- [ライセンスと更新のワークフロー](/handbook/support/license-and-renewals/workflows)

### Slack ワークフロー

サポート内の各 Slack チャンネルには、ユーザーに情報を提供するために使用されるいくつかの [ワークフロー](https://slack.com/help/articles/360035692513-Guide-to-Workflow-Builder) が付随しています。各ワークフローのソースファイルは [slack-workflows](https://gitlab.com/gitlab-com/support/toolbox/slack-workflows) プロジェクトにあります。

#### Issue 通知

一部のワークフローは、関連するプロジェクトで作成された新しい Issue をチームに通知することを目的としています。
これらの場合、[プロジェクト Webhook](https://docs.gitlab.com/user/project/integrations/webhooks/) が [Zapier](https://zapier.com/app/zaps/folder/210292) に情報を渡し、
それが Slack ワークフローに情報を送信します。

- `#support_gitlab-com`
  - CMOC [GitLab プロジェクト](https://gitlab.com/gitlab-com/support/dotcom/cmoc-handover/)、[Zap](https://zapier.com/app/zap/100087156)、[Slack ワークフロー](https://gitlab.com/gitlab-com/support/toolbox/slack-workflows/-/blob/master/cmoc_handover.slackworkflow)
- `#support_licensing-subscription`
  - L&R 関連の内部リクエスト [GitLab プロジェクト](https://gitlab.com/gitlab-com/support/internal-requests/)、[Zap](https://zapier.com/app/zap/98925072)、[Slack ワークフロー](https://gitlab.com/gitlab-com/support/toolbox/slack-workflows/-/blob/master/support_licensing_subscription_internal_requests.slackworkflow)

#### 絵文字リアクション

特定の絵文字でメッセージにリアクションすることで情報を提供します。

- `#support_escalations`
  - [チケットエスカレーション](https://gitlab.com/gitlab-com/support/toolbox/slack-workflows/-/blob/master/support_managers_ticket_escalation.slackworkflow) - `:escalate:` - サポートチケットまたは内部 Issue をエスカレーションするための適切な手順に従うようユーザーを誘導します。
- `#support_gitlab-com`
  - [チケットエスカレーション](https://gitlab.com/gitlab-com/support/toolbox/slack-workflows/-/blob/master/support_gitlab_com_ticket_escalation.slackworkflow) - `:escalate:` - サポートチケットまたは内部 Issue をエスカレーションするための適切な手順に従うようユーザーを誘導します。
  - [質問リダイレクト](https://gitlab.com/gitlab-com/support/toolbox/slack-workflows/-/blob/master/support_gitlab_com_question_redirect.slackworkflow) - `:leftwards_arrow_with_hook:` - より適切な Slack チャンネルに質問を投稿するようユーザーを誘導します。
  - [リンクプレビュー削除](https://gitlab.com/gitlab-com/support/toolbox/slack-workflows/-/blob/master/support_gitlab_com_remove_link_preview.slackworkflow) - `:slack:` - メッセージ内のアンファールされたリンクプレビューを削除するよう丁寧に求めます。
  - [ウェルカム](https://gitlab.com/gitlab-com/support/toolbox/slack-workflows/-/blob/master/support_gitlab_com_welcome.slackworkflow) - この自動化されたワークフローは、チャンネルの新しいメンバーに役立つ情報を含むダイレクトメッセージを自動的に送信します。
  - 連絡先管理 - `:admission_tickets:` - Zendesk グローバル組織のサポート連絡先を管理するための適切な手順に従うようユーザーを誘導します。
- `#support_self-managed`
  - [チケットエスカレーション](https://gitlab.com/gitlab-com/support/toolbox/slack-workflows/-/blob/master/support_self_managed_ticket_escalation.slackworkflow) - `:escalate:` - サポートチケットまたは内部 Issue をエスカレーションするための適切な手順に従うようユーザーを誘導します。
- `#support_licensing-subscription`
  - [チケットエスカレーション](https://gitlab.com/gitlab-com/support/toolbox/slack-workflows/-/blob/master/support_licensing_subscription_ticket_escalation.slackworkflow) - `:escalate:` - サポートチケットまたは内部 Issue をエスカレーションするための適切な手順に従うようユーザーを誘導します。

### 休暇

*[サポート休暇ページ](/handbook/support/support-time-off) を参照してください*

### オンボーディング

*[サポートオンボーディングページ](/handbook/support/training) を参照してください*

### 昇進

昇進後、以下の場所でタイトルを更新してください:

- 私たちの [サポートチームページ](https://gitlab.com/gitlab-support-readiness/support-team)（変更は Zendesk に反映されます）
- [チームページへの自分の追加](/handbook/about/editing-handbook/#add-yourself-to-the-team-page) と同じ手順に従って会社チームページ

[Zoom 名前形式](#zoom-name-format) のガイドラインに従って、Slack と Zoom のタイトルの更新を検討してください。

### サポートポッド

GitLab サポートでは、`サポートポッド` を使用して、サポートエンジニアが
仕事をする際の組織化をしています。各サポートポッドは、特定の製品エリアに興味のあるエンジニアのクロスリージョン・シングルスキルグループです。エンジニア主導です。サポートポッドに参加または開始するには、以下をご覧ください。

*[サポートポッドハンドブックページ](/handbook/support/support-pods) と [サポートポッドとの作業ワークフローページ](/handbook/support/workflows/working-with-pods) を参照してください。*

### プロセスの改善 - 「現在進行中」Issue ボード

サポートチームは ['support-team-meta' プロジェクト Issue](https://gitlab.com/gitlab-com/support/support-team-meta/issues/) を使用して、プロセス改善のためのアイデアとイニシアティブを追跡しています。['現在進行中' Issue ボード](https://gitlab.com/gitlab-com/support/support-team-meta/-/boards/580661) は現在取り組んでいることを示しています。3 つのラベルを使用しています:

1. **Blocked（ブロック中）** - 前進する前に他のチームまたは外部リソースを待っています
1. **Discussing this week（今週議論中）** - 決定に向けて積極的に議論されています
1. **In Progress（進行中）** - 積極的に取り組まれています

これらのラベルの使用方法を導くいくつかの原則があります:

1. 各ラベルに **最大 6 つの Issue**（合計 18 つの Issue）
1. 上記のラベルのいずれかがついたすべての Issue は、1 人以上のサポートチームメンバーに **割り当て** される必要があります
1. 上記のラベルのいずれかがついたすべての Issue には、1 週間先を超えない **期日** が必要です
1. Issue が 1 週間以内に完了するには大きすぎる場合は、**1 週間以内に完了できる小さな部分に分割** する必要があります（より大きな「親」Issue をプロジェクトに保持することは問題ありませんが、「進行中」のコラムには入れないようにしてください）

**毎週ボードを確認し、物事を前進させるために Issue について議論します。**

各ラベルに最大 6 つの Issue を保持することで、**進行中の作業を制限** し、新しいタスクを開始する前に物事が完了されるようにします。

**ボード上のアイテムの追加と管理:**

サポートマネージャーは定期的にボードを確認して、アイテムを前進させます。

1. チームはボードにない Issue に「いいね」絵文字を付けることで **投票** し、[人気の Issue](https://gitlab.com/gitlab-com/support/support-team-meta/issues?sort=popularity&state=opened) を確認できます。
1. サポートマネージャーは人気の Issue を確認し、スペースがある場合はボードに追加します。
1. サポートマネージャーは、大きなバックログを防ぐために Issue を **キュレーション** します。不人気または古い Issue を閉じる/マージしてバックログを管理可能に保ちます。

#### サポート Slackbot

[サポート Slackbot（アーカイブ済み）](https://gitlab.com/gitlab-com/support/toolbox/gitlab-support-bot) は廃止されました。

## <i aria-hidden="true" class="fas fa-book fa-fw icon-color font-awesome"></i>サポートリソース

### ハンドブックリンク

- [GitLab チームページ](/handbook/company/team/)
- [製品カテゴリ](/handbook/product/categories/) - どのチームが何を担当しているかを確認
- [サポートに関する声明](https://about.gitlab.com/support/statement-of-support/)
- [サポートマネージャー](/handbook/support/managers/)
- [サポート採用](/handbook/support/managers/hiring/)
- [サポートチャンネル](/handbook/support/channels/)
- [オンコール](/handbook/engineering/on-call/)
- [ライセンスと更新](/handbook/support/license-and-renewals/)
- [高度なトピック](/handbook/support/advanced-topics/)
- [ブラウザ拡張機能](/handbook/support/browser-extensions)
- [AI とサポート業務](/handbook/support/ai)

### ドキュメント

- GitLab
  - [GitLab.com ステータス](https://status.gitlab.com/)
  - [GitLab リリース](https://about.gitlab.com/releases/categories/releases/)
- ドキュメントの書き方
  - [GitLab ドキュメントガイドライン](https://docs.gitlab.com/development/documentation/)
  - [ドキュメントスタイルガイド](https://docs.gitlab.com/development/documentation/styleguide/)
  - [GitLab Markdown](https://docs.gitlab.com/user/markdown/)
- GitLab のセットアップ
  - [GitLab アーキテクチャの概要](https://docs.gitlab.com/development/architecture/)
  - [要件](https://docs.gitlab.com/install/requirements/)
  - [GitLab のインストール方法](https://about.gitlab.com/install/)
  - [GitLab のバックアップと復元](https://docs.gitlab.com/administration/backup_restore/)
  - [Omnibus 設定の設定](https://docs.gitlab.com/omnibus/settings/)
  - [Omnibus 設定オプション](https://docs.gitlab.com/omnibus/settings/configuration.html)
  - [Omnibus データベース設定](https://docs.gitlab.com/omnibus/settings/database.html#seed-the-database-fresh-installs-only)
- GitLab のデバッグ
  - [ログシステム](https://docs.gitlab.com/administration/logs/)
  - [Rake タスク](https://docs.gitlab.com/administration/raketasks/)
  - [メンテナンス Rake タスク](https://docs.gitlab.com/administration/raketasks/maintenance/)
  - [GitLab サポートエンジニア向けデバッグリソース](https://docs.gitlab.com/administration/#support-team-docs)
  - [GitLab Rails コンソールチートシート](https://docs.gitlab.com/administration/troubleshooting/gitlab_rails_cheat_sheet/)
- GitLab の機能
  - [GitLab Runner のインストール](https://docs.gitlab.com/runner/install/)
  - [GitLab CI サンプルプロジェクト](https://gitlab.com/gitlab-examples)
  - [Elasticsearch](https://docs.gitlab.com/integration/advanced_search/elasticsearch/)
  - [GitLab と Kubernetes クラスターの接続](https://docs.gitlab.com/user/project/clusters/)
- GitLab の開発
  - [GitLab 開発ユーティリティ](https://docs.gitlab.com/development/utilities/)
  - [フィーチャーフラグ](https://docs.gitlab.com/development/feature_flags/)
  - [ダウンタイムが必要なもの](https://docs.gitlab.com/update/with_downtime/)
