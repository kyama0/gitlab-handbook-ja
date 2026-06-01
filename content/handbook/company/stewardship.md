---
title: GitLab の管理責任
description: "GitLab はオープンコアのビジネスモデルを持ち、有料ティアへのサブスクリプションでほぼすべての収益を得ています。詳細はこちら！"
canonical_path: "/company/stewardship/"
upstream_path: "/handbook/company/stewardship/"
upstream_sha: "839c14e40e08e6fd4099a01ee623aaf85faafd12"
translated_at: "2026-06-01T21:39:56Z"
translator: claude
stale: false
lastmod: "2026-06-01T12:55:15+02:00"
---

## ビジネスモデル {#business-model}

GitLab Inc.は営利企業であり、GitLab のオープンソースコードを改善するニーズと、収益を生み出すためにソースアベイラブルな機能を追加するニーズのバランスを取っています。私たちは[オープンコア](https://en.wikipedia.org/wiki/Open_core)のビジネスモデルを持ち、[有料ティアへのサブスクリプション](https://about.gitlab.com/pricing/)でほぼすべての収益を得ています。収益を生み出すニーズとオープンソースプロジェクトのニーズのバランスを取ることが重要だと認識しています。

私たちはさまざまなビジネスモデルを試みてきましたが、多くは機能しませんでした。会社としては、ミッションを継続するためには継続的な収益が必要だと認識し、プロプライエタリなソースアベイラブルコードを導入しました。当初はオープンソースコードの開発を停止するのではないかという懸念がありましたが、コミュニティは、私たちがオープンソースコードへの取り組みも加速できていることを目の当たりにしました。

## 約束 {#promises}

私たちは以下を約束します:

1. ある機能がオープンソースである場合、その機能を有料ティアに移動することはしません。たとえば、複数のティアの機能を 1 つの新しい機能に統合する場合など、別のケースではオープンソースのコードベースから機能が削除されることはあります。明確にしておくと、この約束はオープンソース化された機能にのみ適用されます。有料ティアの機能はより上位のティアに移動する可能性があります。
1. 一定の遅延を設けてオープンソースのコードベースに機能を導入することはしません。ある機能が両方に導入される予定であれば、両方で同時にリリースされます。
1. オープンソース機能に対して持っている[すべてのテスト](https://techcrunch.com/2012/08/18/oracle-makes-more-moves-to-kill-open-source-mysql/)を、常にリリースしオープンソース化します。
1. オープンソースコードベースには、パブリックおよびプライベートリポジトリを伴う大規模な「フォージ」を運営するために不可欠なすべての機能が含まれます。
1. オープンソースコードベースには、人為的な制限 (リポジトリ、ユーザー数、サイズ、パフォーマンス、[商標登録されたヘッダーを必要とすること](https://news.ycombinator.com/item?id=28110610)など) は含まれません。
1. DevOps ライフサイクルのすべてのステージ (plan、create、verify、package、release、configure、monitor) には、いくつかのオープンソース機能が含まれます。
1. GitLab Inc. が作成する新機能の大半はオープンソースになります。
1. 製品は、ウェブサイトのメニューからインストールおよび／またはダウンロード可能になります。
1. メールアドレスを送信したりサインインしたりすることなく、インストールできるようにします。
1. GitLab の[パフォーマンスのベンチマーク](https://news.ycombinator.com/item?id=18103162)を常に許可します。
1. Free ティアを発見しやすくします。
1. プロプライエタリなコードとオープンソースのコードがどれであるかを常に明確にします。これは [EE コード用の別ディレクトリ](https://gitlab.com/gitlab-org/gitlab/-/tree/master/ee)と[オープンソースのみのダウンストリーム Git リポジトリ](https://gitlab.com/gitlab-org/gitlab-foss)で実装されます。

## Software as a Service

私たちの管理責任の約束は GitLab オープンソースコードベースにのみ適用され、GitLab Software as a Service (SaaS) のような GitLab, Inc のサービスには適用されません。
GitLab SaaS については、コストと収益を最適化するために、使用量 (ストレージ、コンピュート、トラフィックなど) や使用量のプロキシ (グループ内のユーザー数など) に関する制限を追加することがあります。
私たちの管理責任の約束は、他の企業や組織が GitLab オープンソースコードベースに基づく SaaS の提供を行うことを許可しています。

## どの機能が有料限定か

何がオープンソースで何がそうでないかを判断するために、私たちは自問自答します: **その機能を最も気にかけるのは誰か**。
購入者となりそうな人物が個人貢献者である場合、その機能はオープンソースになります。そうでない場合は、ソースアベイラブル (プロプライエタリ) になります。

マネージャー、ディレクター、エグゼクティブにのみ役立つ機能はありません。
したがって、ソースアベイラブルなすべての機能には、それを気にかける個人貢献者が存在します。
その機能を気にかける個人貢献者がいないと言っているわけではありません。
ただ、他の購入者が相対的に気にかける可能性が高いと考えているだけです。
GitLab をより多く使えば使うほど、より上位のティアから恩恵を受ける可能性が高くなります。
GitLab を使う 1 人であっても、最上位ティアを使うのが最善であることもあります。

[ティア](/handbook/marketing/brand-and-product-marketing/product-and-solution-marketing/pricing-tiers/)を正しく決めることは難しく、もし高すぎるティアに何かを置いてしまった場合、私たちはためらわずに[オープンソース化](https://about.gitlab.com/releases/2016/12/24/were-bringing-gitlab-pages-to-community-edition/)[する](https://news.ycombinator.com/item?id=10931347)か、より低いティアに移動します。私たちはコミュニティに耳を傾け、適切なバランスを見つけ、そのフィードバックに基づいて反復し変更を加えます。同時に、プレミアム製品は価値を保持する必要があり、私たちはその価値を提供していると信じています。

[DevOps ライフサイクル](https://about.gitlab.com/direction/#scope)のすべてのステージには、少なくともいくつかの機能が GitLab Core で利用可能です。1 万人を超えるユーザーで GitLab Core を使っている企業もあります。

ある機能がなぜ有料なのかを尋ねられた場合、[ハンドブックのこのセクションへのリンク](/handbook/company/stewardship/)で返答することがあります。これは、その機能を必要としていないという意味ではありません。[Issue](https://gitlab.com/gitlab-org/gitlab/-/work_items) を開いて別のティアに移動すべきだという議論を自由に展開してください。

より広いコミュニティが、現在ソースアベイラブルな機能を貢献する場合、[既存機能をオープンソース化するための貢献](#contributing-an-existing-feature-to-open-source-it)にリンクされているプロセスを使用します。

## なぜ両方で同時にリリースするのか

EE で機能を限定的な期間だけ提供してはどうかという提案を受けることがあります。
期間限定リリース戦略の例として、機能を 3 年間プロプライエタリに保つ [Business Source License](https://mariadb.com/bsl11/) があります。

GitLab では、ほとんどの機能 (および不可欠なすべての機能) を、発表された日にすべての人に提供したいと考えています。
私たちは、最新のセキュリティ修正を含み、メンテナンスされているオープンソース版を実行することも、そこに貢献することも、すべての人に選択肢として提供したいと考えています。

時折、以前はプロプライエタリだった機能をオープンソース化することがあります。
これは、基準の適用を誤ったと気付いた場合に行います。たとえば、ブランド付きホームページが[不可欠な機能](https://news.ycombinator.com/item?id=10931347)であると学んだ場合や、[GitLab Pages を Community Edition に持ち込んだ](https://about.gitlab.com/releases/2016/12/24/were-bringing-gitlab-pages-to-community-edition/)場合などです。

私たちの計画は、人々が自分自身の Git ホスティングサービスを運用するための最も人気のあるツールになることです。今のところ達成できています。次に、最も多くの収益を持つツールになりたいと考えています。3 番目に、プライベートリポジトリをホスティングするための最も人気のあるツールになりたいと考えています。それが達成できたら、パブリックリポジトリをホスティングするための最も人気のあるツールになりたいと考えています。そして最後に、コードだけでなく書籍、テクニカルペーパー、ビジュアルモデル、映画などをホスティングするためのナンバー 1 ツールになりたいと考えています。

## オープンソースがオープンコアからどう恩恵を受けるか

GitLab Inc. は、ソースアベイラブルコードとサブスクリプション販売を含むオープンコアのビジネスモデルを持っています。
これは、GitLab のオープンソース部分に以下の点で恩恵をもたらします:

1. GitLab Inc. が作成しているオープンソースの新機能
1. [責任ある開示](https://about.gitlab.com/security/disclosure/)プロセスとセキュリティ修正
1. 毎月のリリースとパッチを含むリリースマネジメント
1. [Omnibus パッケージ](https://gitlab.com/gitlab-org/omnibus-gitlab)での GitLab のパッケージング
1. [パッケージサーバー](https://packages.gitlab.com/gitlab/)の運用
1. 依存関係のアップグレード (Rails、gem など)
1. パフォーマンス改善

## オープンコアへのよくある批判

オープンコアに対して妥当な批判があります。
2019 年の Open Core Summit で、Red Hat の [Deb Bryant 氏は以下の 4 つを強調しました](https://twitter.com/blatanterror/status/1174711840598716417):

**参加が制約される。**
オープンコア企業は、プレミアム機能が貢献されないように参加を制限することがあります。 -
私たちのミッションは[誰もが貢献できる](/handbook/company/mission/#mission)ことなので、参加を拡大するために積極的に取り組んでいます。
また、[既存の有料機能をオープンソースプロジェクトに貢献することをデフォルトで拒否することはしません](#contributing-an-existing-feature-to-open-source-it)。

**ベンダーロックイン。**
プレミアム機能はワークフローの切り替えをより困難にします。 -
GitLab という製品は[他のシステムとうまく連携します](/handbook/product/categories/gitlab-the-product/#plays-well-with-others)。私たちが説明しているとおり、
> 他の多くのアプリケーションが [GitLab と連携](https://about.gitlab.com/partners/technology-partners/integrate/)しており、私たちは新しい連携を[テクノロジーパートナーページ](https://about.gitlab.com/partners/technology-partners/)に追加することを歓迎しています。GitLab との新しい連携は、シンプルな Webhook から[プロジェクトサービス](https://docs.gitlab.com/ee/user/project/integrations/)まで、豊富さと複雑さがさまざまです。
> GitLab は他の製品との協業を拡張するために作成される[新しい連携を歓迎し支援しています](https://about.gitlab.com/partners/technology-partners/integrate/)。GitLab は、GitLab 内でできるほとんどすべてに対する API を提供することで、他のシステムとうまく連携します。GitLab は外部アプリケーションのための[認証プロバイダー](https://docs.gitlab.com/ee/integration/oauth_provider.html)になれます。**GitLab はオープンソースなので、不足しているものを誰でも自由に追加できます。**

**コミュニティが軽視される。**
コミュニティは、製品をともに改善するために働く参加者ではなく、マーケティングツールとして見られることがあります。 -
私たちはコミュニティを深く大切にし、製品の改善を支援するためにすべてのチームメンバーに頼っています。
私たちには、貢献者がマージリクエストを[貢献受け入れ基準](https://docs.gitlab.com/ee/development/contributing/merge_request_workflow.html#contribution-acceptance-criteria)を満たすよう支援する [Merge Request Coaches](/job-description-library/expert/merge-request-coach/) がおり、
[リリースごとのより広いコミュニティの貢献](/handbook/marketing/developer-relations/performance-indicators/#wider-community-merged-mrs-per-release)は [GitLab の KPI](/handbook/company/kpis/#gitlab-kpis) です。

**デプロイメントが制約される。**
顧客は、混乱を招く、あるいは認可されていないライセンスがビジネス環境に入り込むことを恐れています。 -
私たちは SSPL のような制限的なライセンスを使用していません。[ドキュメントで強調しているように](https://docs.gitlab.com/ee/development/licensing.html)、
[GitLab Community Edition (CE)](https://gitlab.com/gitlab-org/gitlab-foss/) は [MIT License](https://gitlab.com/gitlab-org/gitlab-foss/blob/master/LICENSE) の条件の下でライセンスされています。これは [Open Source Initiative](https://opensource.org/license) で定義されている公式のオープンソースライセンスです。

## 既に貢献された既存のオープンソース機能がソースアベイラブルになることはない

[GitLab FOSS に既に存在する既存機能を有料ティアに移動することは決してありません](#promises)。
これは、その機能が GitLab チームメンバーによって作成されたか、より広い貢献者コミュニティによって作成されたかにかかわらず適用されます。
時折、その逆のことが起こります。つまり、以前はソースアベイラブルだった機能をオープンソース化することがあります。

時折、機能をまとめてバンドルしたり、異なるティアにあった機能をリファクタリングしたりするように製品を変更することがあります。
新しいバンドルは Core／Free ティアに行くこともあれば、有料ティアに行くこともあります。

## 既存機能を貢献してオープンソース化する {#contributing-an-existing-feature-to-open-source-it}

誰かが*既存の*ソースアベイラブル機能をオープンソースコードベースに貢献する場合、私たちは難しい決定を下す必要があります。私たちは貢献者に、既に存在しない新機能に注力することを推奨しています。そうすれば、GitLab の両方のコードベースが機能から恩恵を受けることができ、困難な決定を避けられます。

私たちは貢献者に、歓迎される機能を見るために[ディレクションページ](https://about.gitlab.com/direction/)を訪れ、[CONTRIBUTING.md](https://gitlab.com/gitlab-org/gitlab/blob/master/CONTRIBUTING.md) も確認することを推奨しています。

誰かが*既存の*機能を貢献してオープンソース化する場合、私たちはそれを受け入れるかどうかを決定するためにいくつかの要因を検討します。これには以下が含まれます:

1. 提出されたコードの品質はどうか?
1. ソースアベイラブル機能の完全な置き換えになっているか?
1. [貢献受け入れ基準](https://docs.gitlab.com/ee/development/contributing/merge_request_workflow.html#contribution-acceptance-criteria)を満たしているか?
1. [ミッドマーケット組織以上に関連するもの](/handbook/marketing/brand-and-product-marketing/product-and-solution-marketing/tiers/)か?
1. これを提出している人物または組織は、GitLab を [SMB](/handbook/sales/) で使用しているか?
1. これを提出している人物または組織は、以前に GitLab に貢献したことがあるか?
1. これは、多くの既存顧客が私たちの有料ティアを選ぶ理由となっているものか?
1. 大規模なオープンソースフォージを運営するのに関連するものか?
1. これはオリジナルの作品か、それともソースアベイラブルコードに基づくものか?
1. これを組み込んだ活発にメンテナンスされているフォークがあるか?
1. このコードを本番で使用している組織はいくつあるか?
1. この機能はどの程度の頻度でリクエストされ、誰からリクエストされたか?

私たちはすべての要因を検討します。あなたは結果に基づいてオープンソースコードベースに対する私たちの管理責任を判断できます。2018 年 12 月 4 日時点で、わずか 2 件のケースしかありませんでした: 1 つはコード品質が低く、もう 1 つはソースアベイラブルコードを最後のスペースまでコピーしたものでした。これらや他の例を見つけた場合は、人々が結果を把握できるようにここにリンクしてください。

## まだ存在しない機能を貢献する

誰かが[Issue トラッカー](https://gitlab.com/gitlab-org/gitlab/issues)上で有料ティアラベルが付いた*まだ存在しない*機能を貢献し、それが[貢献受け入れ基準](https://docs.gitlab.com/ee/development/contributing/merge_request_workflow.html#contribution-acceptance-criteria)を満たした場合、GitLab Inc. がまだその機能の作業を開始していない限り、貢献者が好むライセンス (オープンソースまたはソースアベイラブル) で受け入れます。(貢献には、*既に存在する*ソースアベイラブル機能が含まれていてはなりません。)私たちは貢献者に対して、衝突を避けるために GitLab チームメンバーが既にその機能に取り組んでいないことを確認できるよう、開発プロセスの早い段階で (Issue またはマージリクエストで) [関連するプロダクトマネージャー](/handbook/product/categories/#devops-stages)に @ メンションすることを推奨しています。

## オープンソースへのより多くの貢献についての考え方

一部の企業は、オープンソースプロジェクトやその他の自己主導的な仕事への貢献のために「20% の時間」をサポートしようとしています。これは GitLab 内で何度か議論されてきましたが、私たちは以下の理由で意図的にそのようなものを実装していません:

1. それは[実際には 120% の時間](https://www.businessinsider.com/google-20-percent-time-policy-2015-4)です。
1. コンテキストスイッチが増え、異なる目標を持つさまざまなプロジェクトに人々の焦点が分割され、スループットの低下を引き起こします。任意の時点での仕掛り作業が多いほど、個々のアイテムを完了させるまでに時間がかかります。最終的な結果として、時間が経つにつれてオープンソースは少なくなります。

多くの異なるプロジェクトにわたってローカルに最適化する代わりに、私たちは[ビジョン](/handbook/company/vision/#vision)に集中することで、オープンソースコミュニティに対してはるかに多くの価値とインパクトを生み出せます。そうすることで、以下を可能にする好循環が生まれます:

**より多くのアップストリーム改善。**
GitLab はオープンソースのみで構築されたオープンコアです。私たちは[何千もの依存関係](https://gitlab.com/gitlab-org/gitlab/dependencies)に依存しており、常に改善をアップストリームに貢献するよう努めています。

**GitLab の一部としてより多くのオープンソースを構築。**
できるだけ多くのオープンソースをリリースすることは、私たちのフライホイールの速度を上げるため、[ビジネスモデル](#business-model)にとって重要です。フライホイールが速く回るほど、より多く還元できます。

**スケールでの貢献。**
GitLab は DevOps ライフサイクル全体のための単一のアプリケーションです。GitLab の最上位ティアを[オープンソースプロジェクト](https://about.gitlab.com/solutions/open-source/)に[無料で提供する](https://about.gitlab.com/solutions/open-source/join/)ことで、私たちはそれらがより効率的で、安全で、生産的になることを可能にしています。

上記の組み合わせは、私たちのビジョンを直接前進させない事柄に時間の一部を使って貢献するよりも、はるかに大きなスケールでのグローバル最適化につながります。

{{% include "includes/take-gitlab-for-a-spin.md" %}}
