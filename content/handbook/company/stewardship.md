---
title: GitLab の管理責任
description: "GitLab はオープンコアのビジネスモデルを持ち、有料ティアへのサブスクリプションでほぼすべての収益を得ています。詳細はこちら！"
canonical_path: "/company/stewardship/"
upstream_path: "/handbook/company/stewardship/"
upstream_sha: "b4eeb07f0d5f46e2fc5f8572be1a2547261aed89"
translated_at: "2026-04-25T12:00:00Z"
translator: claude
stale: false
lastmod: "2026-03-04T12:15:15-08:00"
---

## ビジネスモデル {#business-model}

GitLab Inc.は営利企業であり、GitLab のオープンソースコードを改善するニーズと、収益を生み出すためにソースアベイラブルな機能を追加するニーズのバランスを取っています。私たちは[オープンコア](https://en.wikipedia.org/wiki/Open_core)のビジネスモデルを持ち、[有料ティアへのサブスクリプション](https://about.gitlab.com/pricing/)でほぼすべての収益を得ています。収益を生み出すニーズとオープンソースプロジェクトのニーズのバランスを取ることが重要だと認識しています。

私たちはさまざまなビジネスモデルを試し、多くは機能しませんでした。企業として、ミッションを続けるために定期収入が必要だと気づき、プロプライエタリのソースアベイラブルコードを導入しました。当初はオープンソースコードへの取り組みをやめるのではないかという懸念がありましたが、コミュニティはオープンソースコードの作業も加速できていることを確認しました。

## 約束 {#promises}

私たちは以下を約束します：

1. 機能がオープンソースになった場合、その機能を有料ティアに移動しません。機能が複数のティアの機能を 1 つの新しい機能にまとめる場合などのように、他のケースでオープンソースコードベースから削除される場合があります。明確にするために、この約束はオープンソース化された機能にのみ適用され、有料ティアの機能はより高いティアに移動する可能性があります。
1. 固定の遅延でオープンソースコードベースに機能を導入することはありません。機能が両方でリリースされる予定の場合は、両方で同時にリリースします。
1. オープンソース機能のすべての[テスト](https://techcrunch.com/2012/08/18/oracle-makes-more-moves-to-kill-open-source-mysql/)を常にリリースしてオープンソース化します。
1. オープンソースコードベースは、公開・プライベートリポジトリを持つ大規模な「フォージ」の運用に不可欠なすべての機能を持ちます。
1. オープンソースコードベースには人工的な制限（リポジトリ、ユーザー、サイズ、パフォーマンス、[商標ヘッダーの要求](https://news.ycombinator.com/item?id=28110610)など）を含みません。
1. DevOps ライフサイクルのすべてのステージ（plan、create、verify、package、release、configure、monitor）には、いくつかのオープンソース機能があります。
1. GitLab Inc.が作成する新機能の大部分はオープンソースになります。
1. プロダクトはウェブサイトのメニューからインストールおよびダウンロード可能です。
1. メールアドレスの送信やサインインなしにインストールできます。
1. 常に GitLab の[パフォーマンスをベンチマーク](https://news.ycombinator.com/item?id=18103162)できるようにします。
1. 無料ティアを簡単に見つけられるようにします。
1. プロプライエタリなものとオープンソースのコードを常に明確にします。これは[EE コードの別ディレクトリ](https://gitlab.com/gitlab-org/gitlab/-/tree/master/ee)と[オープンソースのみの Git リポジトリのダウンストリーム](https://gitlab.com/gitlab-org/gitlab-foss)で実装されます。

## Software as a Service

私たちの管理の約束は、GitLab のオープンソースコードベースのみに適用され、GitLab Software as a Service（SaaS）などの GitLab, Inc.サービスには適用されません。
GitLab SaaS については、コストと収益を最適化するために使用量（ストレージ、コンピュート、トラフィックなど）や使用量の代替指標（グループ内のユーザー数など）の制限を追加することがあります。
私たちの管理の約束により、他の企業や組織が GitLab のオープンソースコードベースに基づいた SaaS オファリングを提供できます。

## 有料のみの機能

オープンソースと非オープンソースを判断するために、私たちは自問します：**[誰がその機能を最も気にするか](/handbook/company/pricing/#buyer-based-open-core)**。
可能性の高いバイヤーが個人貢献者であれば、その機能はオープンソースになります。そうでなければ、ソースアベイラブル（プロプライエタリ）になります。

マネージャー、ディレクター、エグゼクティブのみに役立つ機能はありません。
したがって、すべてのソースアベイラブルな機能には、その機能を気にする個人貢献者がいます。
個人貢献者がその機能を気にしないということではなく、
他のバイヤーが相対的により気にする可能性が高いということです。
GitLab をより多く使用するほど、より高いティアから恩恵を受ける可能性が高くなります。
GitLab を使用する一人の人でさえ、最高のティアが最適な場合があります。

[ティア](/handbook/marketing/brand-and-product-marketing/product-and-solution-marketing/pricing-tiers/)を正確に設定することは難しく、何かを高すぎるティアに配置した場合、[オープンソース化](https://about.gitlab.com/releases/2016/12/24/were-bringing-gitlab-pages-to-community-edition/)や低いティアへの移動を躊躇しません。適切なバランスを見つけるためにコミュニティに耳を傾け、フィードバックに基づいてイテレーションと変更を行います。同時に、プレミアム製品は価値を維持する必要があり、それを提供できると信じています。

[DevOps ライフサイクル](https://about.gitlab.com/direction/#scope)のすべてのステージには、GitLab Core で少なくともいくつかの機能があります。10,000 人以上のユーザーを持つ GitLab Core を使用している企業があります。

特定の機能が有料である理由を尋ねられた場合、[ハンドブックのこのセクション](/handbook/company/stewardship/)へのリンクで返答することがあります。あなたがその機能を必要としないとは言っていません。[他のティアへの移動の論拠](/handbook/company/pricing/#changing-tiers-and-pricing-changes)を自由に示してください。私たちは聞いています。

より広いコミュニティが現在ソースアベイラブルな機能を貢献した場合、[既存機能をオープンソース化するための貢献](#contributing-an-existing-feature-to-open-source-it)にリンクされているプロセスを使用します。

## なぜ両方で同時にリリースするのか

EE に機能を限られた期間配置することを提案する人もいます。
限定リリース戦略の例として、機能を 3 年間プロプライエタリに保つ[Business Source License](https://mariadb.com/bsl11/)があります。

GitLab では、機能が発表される日付に（必須のものはすべてを含め）ほとんどの機能へのアクセスを全員に提供したいと考えています。
最新のセキュリティ修正を含む、維持されているオープンソース版を実行し、貢献できるオプションを人々に提供したいと考えています。

時々、以前にプロプライエタリだった機能をオープンソース化することがあります。
[ブランデッドホームページが必須機能](https://news.ycombinator.com/item?id=10931347)であることを学んだときや、[GitLab Pages を Community Edition にもたらした](https://about.gitlab.com/releases/2016/12/24/were-bringing-gitlab-pages-to-community-edition/)ときのように、私たちの基準の適用に間違いを犯したと気づいた場合にこれを行います。

私たちの計画は、人々の独自の git ホスティングサービスで最も人気のあるツールになることです。これまでのところ成功しています。次の目標は、最も多くの収益を得るツールになることです。3 番目の目標は、プライベートリポジトリのホスティングで最も人気のあるツールになることです。それを達成した後、パブリックリポジトリのホスティングで最も人気のあるツールになりたいと考えています。最終的には、コードだけでなく書籍、技術論文、視覚的なモデル、映画などをホスティングするためのナンバーワンのツールになりたいと考えています。

## オープンコアからオープンソースが得る恩恵

GitLab Inc.はソースアベイラブルコードとサブスクリプションの販売を含むオープンコアビジネスモデルを持っています。
これは GitLab のオープンソース部分に以下のメリットをもたらします：

1. GitLab Inc.が作成するオープンソースの新機能
1. [責任ある開示](https://about.gitlab.com/security/disclosure/)プロセスとセキュリティ修正
1. 月次リリースとパッチを含むリリース管理
1. [Omnibus パッケージ](https://gitlab.com/gitlab-org/omnibus-gitlab)での GitLab のパッケージング
1. [パッケージサーバー](https://packages.gitlab.com/gitlab/)の運営
1. 依存関係のアップグレード（Rails、gems など）
1. パフォーマンスの改善

## オープンコアに対する一般的な批判

オープンコアには正当な批判があります。
2019 年の Open Core Summit で、[Red Hat の Deb Bryant は](https://twitter.com/blatanterror/status/1174711840598716417)以下の 4 点を強調しました：

**参加が制約されている。**
オープンコア企業は、プレミアム機能が貢献されないように参加を制限することがあります。 -
私たちは参加の拡大に積極的に取り組んでいます。なぜなら、私たちのミッションは[誰もが貢献できる](/handbook/company/mission/#mission)ことだからです。
また、[既存の有料機能をオープンソースプロジェクトに貢献することを、デフォルトでは拒否しません](#contributing-an-existing-feature-to-open-source-it)。

**ベンダーロックイン。**
プレミアム機能によりワークフローの切り替えが難しくなります。 -
GitLab 製品は[他と連携します](/handbook/product/categories/gitlab-the-product/#plays-well-with-others)。概説しているように、
> 他の多くのアプリケーションが[GitLab と統合](https://about.gitlab.com/partners/technology-partners/integrate/)しており、私たちは[テクノロジーパートナーページ](https://about.gitlab.com/partners/technology-partners/)への新しい統合の追加に対してオープンです。GitLab との新しい統合は豊かさと複雑さが様々で、単純な Webhook から[プロジェクトサービス](https://docs.gitlab.com/ee/user/project/integrations/)まであります。
> GitLab は、他の製品とのコラボレーションを拡張するために作成される[新しい統合を歓迎し、サポートします](https://about.gitlab.com/partners/technology-partners/integrate/)。GitLab は、GitLab 内でできることのほぼすべてに API を提供することで他と連携します。GitLab は外部アプリケーションの[認証プロバイダー](https://docs.gitlab.com/ee/integration/oauth_provider.html)になることができます。**GitLab はオープンソースなので、欠けているものを追加することを歓迎します。**

**コミュニティが軽視されている。**
コミュニティは、製品をより良くするために共に取り組む参加者ではなく、マーケティングツールとして見なされています。 -
私たちはコミュニティを深く大切にし、製品の改善を助けるためにすべてのチームメンバーに依存しています。
[MR コーチ](/job-description-library/expert/merge-request-coach/)がいて、貢献者が MR を[貢献受け入れ基準](https://docs.gitlab.com/ee/development/contributing/merge_request_workflow.html#contribution-acceptance-criteria)を満たすようにサポートし、
[リリースごとのより広いコミュニティの貢献](/handbook/marketing/developer-relations/performance-indicators/#wider-community-merged-mrs-per-release)は[GitLab KPI](/handbook/company/kpis/#gitlab-kpis)です。

**デプロイが制約されている。**
顧客は、ビジネス環境に混乱を招く、または未承認のライセンスが入ることを心配しています。 -
SSPL のような制限的なライセンスは使用しません。[ドキュメント](https://docs.gitlab.com/ee/development/licensing.html)で強調しているように、
[GitLab Community Edition（CE）](https://gitlab.com/gitlab-org/gitlab-foss/)は[MIT ライセンス](https://gitlab.com/gitlab-org/gitlab-foss/blob/master/LICENSE)の条件の下でライセンスされており、これは[Open Source Initiative](https://opensource.org/license)によって定義された公式のオープンソースライセンスです。

## 既存の貢献されたオープンソース機能はソースアベイラブルにはなりません

[GitLab FOSS にすでに存在する既存の機能を有料ティアに移動することはありません](#promises)。
これは機能が GitLab チームメンバーによって作成されたか、より広いコントリビューターコミュニティによって作成されたかに関わらず適用されます。
稀に、逆のことが起こり、以前にソースアベイラブルだった機能をオープンソース化することがあります。

稀に、製品を機能をまとめたり、異なるティアにあった機能をリファクタリングするような方法で変更することがあります。
新しいバンドルが Core/Free ティアに移行する場合もあれば、有料ティアに移行する場合もあります。

## オープンソース化のための既存機能への貢献 {#contributing-an-existing-feature-to-open-source-it}

誰かが*既存の*ソースアベイラブルな機能をオープンソースコードベースに貢献した場合、難しい決断をしなければなりません。コントリビューターには、GitLab の両方のコードベースが機能から恩恵を受け、困難な決断を回避できるように、まだ存在しない新機能に集中するよう奨励します。

コントリビューターには[方向性ページ](https://about.gitlab.com/direction/)を訪問して歓迎される機能を確認し、[CONTRIBUTING.md](https://gitlab.com/gitlab-org/gitlab/blob/master/CONTRIBUTING.md)も確認することを奨励します。

誰かが*既存の*機能をオープンソース化するために貢献した場合、受け入れるかどうかを決定するためにいくつかの要素を考慮します：

1. 提出されたコードの品質はどうか？
1. ソースアベイラブルな機能の完全な置き換えになっているか？
1. [貢献受け入れ基準](https://docs.gitlab.com/ee/development/contributing/merge_request_workflow.html#contribution-acceptance-criteria)を満たしているか？
1. [中規模の組織またはそれ以上にとってより関連性が高い](/handbook/marketing/brand-and-product-marketing/product-and-solution-marketing/tiers/)か？
1. これを提出した人または組織は[SMB](/handbook/sales/)で GitLab を使用しているか？
1. これを提出した人または組織は以前に GitLab に貢献したことがあるか？
1. 既存の顧客の多くが有料ティアを選んだのはそのためか？
1. 大規模なオープンソースフォージの運営に関連しているか？
1. ソースアベイラブルコードに基づく原著作物か？
1. これを組み込んだ活発にメンテナンスされているフォークがあるか？
1. 本番環境でこのコードを使用している組織の数はいくつか？
1. この機能はどれほど頻繁に、誰によって要望されているか？

すべての要素を考慮し、その結果に基づいてオープンソースコードベースの管理状況を評価できます。2018 年 12 月 4 日時点で、2 つのケースのみがありました：1 つはコード品質が低く、もう 1 つはソースアベイラブルコードを最後のスペースまでコピーしていました。これらや他の例を見つけた場合は、人々が結果のアイデアを得られるようにここにリンクしてください。

## まだ存在しない機能への貢献

誰かが有料ティアラベルを持つ[Issue トラッカー](https://gitlab.com/gitlab-org/gitlab/issues)上の*まだ存在しない*機能を貢献し、
それが[貢献受け入れ基準](https://docs.gitlab.com/ee/development/contributing/merge_request_workflow.html#contribution-acceptance-criteria)を満たしている場合、
GitLab Inc.がまだその機能に取り組んでいないという条件で、彼らが好むライセンス（オープンソースまたはソースアベイラブル）でそれを受け入れます（貢献は*すでに存在する*ソースアベイラブルな機能を含むべきではありません）。コントリビューターは、競合を避けるために GitLab チームメンバーがすでに機能に取り組んでいないことを確認するために、開発プロセスの早い段階で[関連するプロダクトマネージャー](/handbook/product/categories/#devops-stages)を@メンションすることを奨励します。

## オープンソースへの貢献をより多くする方法について私たちの考え方

一部の企業は、オープンソースプロジェクトや他のセルフディレクテッドな作業への貢献のために「20%タイム」のサポートを試みます。これは GitLab 内で何度も議論されましたが、以下の理由から意図的に実装しません：

1. 実際には[120%タイム](https://www.businessinsider.com/google-20-percent-time-policy-2015-4)になります。
1. コンテキストの切り替えを増加させ、異なる目標を持つ多様なプロジェクト間で焦点が分散するにつれて、スループットが低下することにつながります。任意の時点で進行中の作業が多いほど、単一のアイテムを完了に向けて推進するのに時間がかかります。結果として、時間の経過とともにオープンソースの量が減少します。

多くの異なるプロジェクトにわたってローカルで最適化するのではなく、私たちの[ビジョン](/handbook/company/vision/#vision)に一点集中することで、オープンソースコミュニティにとってはるかに多くの価値と影響を生み出すことができます。そうすることで、以下を可能にする好循環が生まれます：

**上流へのより多くの改善。**
GitLab はすべてオープンソースで構築されたオープンコアです。私たちは[何千もの依存関係](https://gitlab.com/gitlab-org/gitlab/dependencies)に依存しており、常に改善を上流に貢献しようとします。

**GitLab の一部としてより多くのオープンソースを構築。**
できるだけ多くのオープンソースをリリースすることは、フライホイールの速度を上げるため、私たちの[ビジネスモデル](#business-model)にとって重要です。速く回るほど、より多くを貢献できます。

**スケールでの貢献。**
GitLab は DevOps ライフサイクル全体のシングルアプリケーションです。[オープンソースプロジェクト](https://about.gitlab.com/solutions/open-source/)に GitLab の最上位ティアを[無料で提供する](https://about.gitlab.com/solutions/open-source/join/)ことで、それらがより効率的で安全で生産性が高くなれるようにしています。

上記の組み合わせにより、私たちのビジョンを前進させない作業に少しの時間を使って貢献できる何よりもはるかに大きな規模でのグローバル最適化が実現します。


<!-- include omitted: includes/take-gitlab-for-a-spin.md (no localized version under content/ja/) -->

