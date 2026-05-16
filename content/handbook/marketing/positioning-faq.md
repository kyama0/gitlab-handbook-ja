---
title: "GitLab ポジショニング FAQ"
upstream_path: /handbook/marketing/positioning-faq/
upstream_sha: eb9c7122b4259a2111ed65628e5384768922a597
translated_at: "2026-05-01T02:05:00Z"
translator: claude
stale: false
lastmod: "2025-04-01T09:22:28+00:00"
---

## GitLab とは何ですか？

1. GitLab はオープンソースの完全な DevOps プラットフォームで、単一のアプリケーションとして提供され、Development、Security、Ops チームのコラボレーション方法を根本的に変えます。GitLab は、プロジェクト計画と Issue 管理、コラボレーティブなソースコード管理、セキュリティスキャン、継続的インテグレーションと継続的デリバリー、本番モニタリングを可能にするツールです。
1. 私たちはいくつかの異なるバージョンの GitLab を持っています。
    - GitLab.com。ホスト型、プライベートリポジトリ向けのオープンソース。サインアップして開始するだけです。
    - GitLab CE。LDAP 統合、Issue トラッカー、webhook、統合 CI を備えたオンプレミス、セルフマネージド GitLab。
    - GitLab EE。GitLab Enterprise Edition は Community Edition の上に構築され、主に 100 人以上のユーザーを持つ組織を対象とした追加機能を含みます。LDAP グループ同期、監査ログ、複数のロールがあります。より深い認証および認可統合、きめ細かいワークフロー管理、追加のサーバー管理オプションを含み、ツールスタックと統合します。
    - 比較チャートを知る
        - [バージョン別の機能の利用可能性](https://about.gitlab.com/features/)の概要
        - GitLab.com [tier 別比較](https://about.gitlab.com/pricing/feature-comparison/)
        - GitLab セルフマネージド [tier 別比較](https://about.gitlab.com/pricing/feature-comparison/)

## GitLab を使用する利点は何ですか？

GitLab は、組織がより良い製品をより速く提供し、運用効率を高め、セキュリティとコンプライアンスのリスクを軽減するのに役立ちます。DevSecOps ライフサイクル全体にケイパビリティを提供する単一のアプリケーションである GitLab は、コード変更時点でのコラボレーションを通じて摩擦を減らします。GitLab は、複雑さを軽減し、保守コストを下げ、デリバリーを合理化する [すぐに使える デリバリー ツールチェーン](https://about.gitlab.com/resources/whitepaper-forrester-manage-your-toolchain/) でアプリケーション デリバリーを合理化します。GitLab がない場合、チームは複数のツールを必要とし、それらを統合、管理、保守する必要があります。GitLab を使用すると、ソフトウェア開発ライフサイクルの各部分にどれだけ時間がかかっているか、どのように改善できるかについての可視性を得られます。

## GitHub に似ていますか？

GitLab は GitHub のオープンソース代替として始まりました。オープンソース プロジェクトのホスティングにフォーカスする代わりに、私たちはエンタープライズのニーズにフォーカスし、現在は継続的インテグレーション、継続的デリバリー、モニタリング、アプリケーション セキュリティ テストを含む DevOps ライフサイクル全体の課題に対処しています。

## 私は GitHub を使用しています。GitLab は何を提供できますか？

1. GitHub は Git スペースに多くのことをしました。素晴らしい会社です。
1. 基本的なソース コントロール マネジメントについて、私たちにはいくつかの主要な違いがあります:
    - 複数のアプリケーション サーバーでより良くスケーリング
    - GitLab をクラスタで実行
    - 複数の認証レベル
    - グループ レベルのマイルストーン
    - 4 倍コスト効果的
    - [毎月](/handbook/engineering/releases/)リリースされる更新に貢献する 2,200 人以上のアクティブなコミュニティ
1. SCM だけが必要なら、なぜ GitLab のオープンソース版を使わないのですか？
1. **ソフトウェア開発ライフサイクル全体** については、[GitHub vs. GitLab](https://web.archive.org/web/20240331181506/https://about.gitlab.com/competition/github/) を参照してください

## 私たちの会社はすべてのオープンソース プロジェクトに GitHub.com を使用しています

なぜオンプレミスで GitHub Enterprise ではなく GitLab Enterprise Edition を使うべきなのですか？

1. GitHub は主にオープンソース ソフトウェアを公開するために使用されるクローズドソース ソフトウェアです。GitLab は、主にクローズドソース ソフトウェア (つまりあなたの会社のソフトウェア) のサイクル時間を短縮するために使用されるオープンソース DevOps プラットフォームです。
1. GitLab Enterprise Edition では、[Repository Mirroring](https://docs.gitlab.com/ee/user/project/repository/mirror/) を使用して、GitHub.com からオンプレミスの GitLab サーバーにオープンソース プロジェクトをミラーリングできます。または、GitLab プロジェクトのパブリック ミラーを持ちたい場合は、ミラーリングを使用して簡単に行えます。GitHub Enterprise にはミラーリングがありません。
1. オープンソース プロジェクトは、組織によってオンプレミスで開発されるプロジェクトとは異なるニーズを持っています。GitLab は、組織によるオンプレミスでの使用のために特別に構築されているため、5 レベルの[権限](https://docs.gitlab.com/ee/user/permissions.html)、さまざまなオペレーティング システムへのインストール能力など、エンタープライズに特化したより多くの機能を持っています。
1. プロジェクト ビューなどが異なる可能性がある他の Git 管理ソリューションとは異なり、GitHub と GitLab は機能と機能性、およびそれらがサポートするワークフローにおいて非常に類似しています。それらの URL と API も類似しているため、開発者は GitLab に素早く慣れることができます。

## GitLab はエンタープライズで勝っています

1. TLDR - はい。
1. GitLab は世界中で 100,000 以上の組織で、自社サーバー上で使用されています。
1. GitLab.com は毎月数百万のプロジェクトと数十万のユーザーにサービスを提供しています
1. [Goldman Sachs](https://about.gitlab.com/customers/goldman-sachs/) | **問題**: 開発者の効率とソフトウェア品質を高める必要があった | **結果**: 1 日 2 ビルドから 1,000 以上/日に改善; ワークフローを簡素化し、管理を簡素化
1. [Jaguar Land Rover](https://about.gitlab.com/blog/2018/07/23/chris-hill-devops-enterprise-summit-talk/) | **問題**: 4〜6 週間かかる遅いデリバリーとリリース サイクルが、開発者へのフィードバック頻度の低下を招いていた| **結果**: デリバリー速度を 3〜6 週間から 30 分に向上させ、チームに高速なフィードバックを提供。
1. [Hemmersbach](https://about.gitlab.com/customers/hemmersbach/) | **問題**: 複数のツールとコミュニケーションの非効率性がアプリケーション デリバリーを遅らせていた | **結果**: ビルド速度を 59 倍に向上; サイクル時間を 14.4% 改善
1. [2019 Gartner Peer Insights **Customers' Choice - Enterprise Agile Planning Tools**](https://about.gitlab.com/press/releases/2019-07-26-gitLab-recognized-in-gartner-peer-insights-customers-choice-for-EAPT.html) 平均 4.6 評価: [「オーバーヘッドのない DevOps」](https://www.gartner.com/reviews/review/view/916200) 、[「シンプル、直感的で効率的な DevOps ライフサイクル ツール」](https://www.gartner.com/reviews/review/view/749177)、[「セキュアでスケーラブルなソリューション」](https://www.gartner.com/reviews/review/view/876321)
1. Forrester: [Q3 2017 Continuous Integration Wave-Leader](https://about.gitlab.com/blog/2017/09/27/gitlab-leader-continuous-integration-forrester-wave/)
1. Gartner: [2021 Enterprise Agile Planning Tools - Visionary](https://about.gitlab.com/press/releases/2021-04-27-gitlab-positioned-leader-gartner-magic-quadrant-enterprise-agile-planning-tools/)
1. Gartner: [Q2 2020 Continuous Delivery and Release Automation-Contender](https://about.gitlab.com/analysts/forrester-cdra20/)
1. Forrester: 2018 New Wave Value Stream Management- Strong Performer

## 私は Bitbucket を使用しています。GitLab は何を提供できますか？

1. Bitbucket はエンタープライズ Git スペースに多くのことをしました。素晴らしい会社です。
1. GitLab は無料でホスティング オプションの選択を提供します - SaaS とセルフマネージド
1. ソース コード マネジメント (SCM) だけが必要なら、なぜ GitLab のオープンソース版を使わないのですか？
1. 数十万人の開発者と 2,000 人以上のコントリビューターのコミュニティに支えられています。
1. 私たちは毎月新機能をローンチし、市場の他のどの会社よりも早く製品を反復しています。コミュニティと私たちのオープンな働き方のおかげで、新機能を素早く効果的にリリースすることができました。
    - [このトピックに関する Job のブログ投稿は素晴らしい読み物です](https://about.gitlab.com/blog/2015/04/15/bitbucket-vs-gitlab-com/)

## 私は VersionOne や Rally のようなソフトウェア ツールを使用または検討しています; GitLab はどう比較されますか？

1. VersionOne と Rally の両方は、プロジェクト管理面で強く、ロード マッピング、バックログ管理、リリース管理を含みます - 特にチームへのスケーリング時に。GitLab は、詳細な Issue 管理、タスク割り当て、バージョン管理、リポジトリ管理、コード レビュー、CI/CD、デプロイ、リソース モニタリングにわたる強力なコラボレーションを提供します。エンタープライズにとって、両方のツール セットは重要な役割を果たします。
1. Conversational/Agile 開発スタイルで作業している場合、GitLab EE Premium はあなたのニーズを解決します。GitLab は、ソフトウェア開発ライフサイクルの **100%** を 1 つの統一された経験でカバーする次世代開発ツール セットです。
1. SAFe へのパスを進んでいる場合、VersionOne は素晴らしいオプションで、コード リポジトリと CI/CD のための VersionOne との GitLab とのネイティブ統合もあります。

## 私は Perforce の GitSwarm を使用または検討しています

GitLab も必要ですか？ GitLab で直接作業しないことで何かを見逃していますか？

1. GitSwarm は GitLab CE または EE 上に構築されています。
1. GitSwarm は Perforce と GitLab を組み合わせ、開発者に好ましい Git ベースのワークフローを提供しつつ、Perforce からのエンタープライズ クラスのスケーラビリティ、セキュリティ、ファイル管理パフォーマンスを組織に提供します。
1. Perforce が顧客が作成、コーディング、デプロイするのを助けるために GitLab を選んでくれて嬉しく思います。詳細については、GitSwarm の概要 https://www.perforce.com/products/helix4git をご覧ください。
1. GitLab アカウント エグゼクティブは、現在 GitSwarm を使用または評価しているプロスペクトとどのようにエンゲージすべきですか？
    - プロスペクトがすでに GitSwarm CE を使用している場合、GitLab チャネル代表者は Perforce アカウント エグゼクティブと協力して、顧客を GitSwarm EE にアップグレードする利点にフォーカスすべきです。
    - Perforce 顧客は、年間サポートおよびメンテナンス料金を伴う永久ライセンス料を前払いすることも、年間サブスクリプション料を介して購入することもできます。
    - GitLab の新しい LFS 機能は、Git を活用する多くの Perforce クライアントのニーズである、大きなバイナリ ファイル用のストレージを提供する必要性に対処します。これは、ビデオ、ハードウェア、ゲーム スペースの企業にとって必須の機能です。
    - GitLab は Perforce とリセラーとして提携しています。
    - GitLab チャネル マネージャーは、Perforce Helix を使用している企業を特定し、Perforce アカウント エグゼクティブと協力して、それらの企業を GitSwarm EE (または最低でも GitSwarm CE) を使用するように移行する計画を立てることに積極的であるべきです。
    - 多くの長期 Perforce 顧客は、組織内の特定のユーザー セグメント向けに Git ソリューションを評価する過程にあり、これは Perforce が早期評価段階で関係を積極的に構築するのをサポートする良い時期です。

## 私たちはすでに GitLab CE を無料で使用しています。なぜアップグレードすべきなのですか？

1. CE は小規模なチームには素晴らしいオプションですが、大規模な組織は GitLab EE の機能から恩恵を受けます。
1. GitLab Enterprise Edition は Community Edition の上に構築され、主に 100 人以上のユーザーを持つ組織を対象とした追加機能を含みます。
1. LDAP グループ同期、監査ログ、複数のロールがあります。
1. より深い認証および認可統合、きめ細かいワークフロー管理、追加のサーバー管理オプションを含み、ツールスタックと統合します。
1. よりカスタマイズ可能でセキュア。

## あなたの顧客の何人かは誰ですか？

1. 100,000 以上の組織で使用されています。
1. 大規模 - IBM、AT&T、CERN
1. 小規模 - SpaceX、Stack Overflow

## なぜオープンソース製品をマネタイズしているのですか？

1. 私たちのコミュニティは素晴らしい製品を作るために懸命に働いてきました。
1. エンタープライズの世界はこの製品から恩恵を受けることができます。
1. オープンソースの世界では必ずしも必要ではないが、大企業には必要な機能を提供できるようにしたかったのです。
1. これらの機能のために、私たちは大規模顧客に課金し、見返りに、それらの機能を作成し、オープンソース プロジェクトに取り組む人々を雇うことができます。

## 私は GitLab のホスト版を使用しています。なぜ私の会社にはオンプレミスが必要なのですか？

1. セキュリティ要件 (例: VPC、IDS/IPS など) に基づくより多くの柔軟性とカスタマイゼーション
1. LDAP 統合
1. 有償サポート
1. 2FA
1. 権限管理

## サポートはどのように機能しますか？

1. セルフマネージドの場合
    1. オンプレミス EE - [サポート ステートメント](https://about.gitlab.com/support/statement-of-support/#starter-premium-and-ultimate-users)
    1. オンプレミス CE または Free - [サポート ステートメント](https://about.gitlab.com/support/statement-of-support/#core-and-community-edition-users)
1. GitLab.com の場合
    1. 有償 tier - [サポート ステートメント](https://about.gitlab.com/support/statement-of-support/#bronze-silver-and-gold-users)
    1. Free プラン ユーザー - [サポート ステートメント](https://about.gitlab.com/support/statement-of-support/#free-plan-users)

## GitHub、Bitbucket、SVN から GitLab へデータを移行するソリューションを提供していますか？

1. Bitbucket、GitHub、どこからでもインポート
1. GitLab を使い始めたいですか？ Bitbucket、GitHub、Gitorious、その他どこからでもリポジトリを一括で簡単にインポートできます！
1. SVN から GitLab への移行
    - https://docs.gitlab.com/ee/user/project/import/index.html#import-from-subversion
    - SVN は Subversion を意味し、バージョン管理システム (VCS) です。Git は分散バージョン管理システムです。

## なぜ GPL ライセンスを使用していないのですか？

1. Ruby on Rails (RoR) ベース
1. MIT ライセンスは Ruby と RoR では一般的
