---
title: "ウェッジカンバセーション: ソースコード管理"
upstream_path: /handbook/marketing/brand-and-product-marketing/product-and-solution-marketing/usecase-gtm/version-control-collaboration/
upstream_sha: 12455b65f7f70cf1c18488a44bbab3cff0097c8a
translated_at: "2026-04-30T00:00:00Z"
translator: claude
stale: false
---

## GitLab のソースコード管理(SCM)機能の概要をお探しですか?

[SCM ソリューション](https://about.gitlab.com/solutions/source-code-management/) をご覧ください。

以下のページは、ソースコード管理に関する go-to-market の取り組みについて、GitLab のセールスとマーケティングを単一の信頼できる情報源と整合させることを目的としています。

## 連絡先

| Product Marketing | Developer Advocate |
| ---- | --- |
| Aathira Nair (@anair5)  | [William Galindez Arias](https://gitlab.com/waarias) |

## ソフトウェアデリバリー自動化

ソフトウェアデリバリー自動化により、組織は SDLC から手作業で繰り返しの多いタスクを自動化し、ソフトウェアファクトリーの全体的な速度を改善し、開発と運用間のコラボレーションを高めることができます。これには、アプリケーションとインフラの自動化の両方が含まれます。

GitLab の機能の観点では、SCM、CI、CD、GitOps、AutoDevOps などの DevOps の必須要素が含まれます。

ソースコード管理は、ソフトウェアデリバリー自動化ソリューションの一部です。ソースコード管理が全体的な[ソフトウェアデリバリー自動化](/handbook/marketing/brand-and-product-marketing/product-and-solution-marketing/usecase-gtm/delivery-automation/)ソリューションにどのようにフィットするかをご覧ください。

## 市場の視点

## ソースコード管理(SCM)

<figure class="video_container">
<iframe width="560" height="315" src="https://www.youtube.com/embed/TxfAeYXmles" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</figure>

組織が DevOps を通じてデリバリーを加速する中、コードから設定、設計からデプロイメントまで、アプリケーションアセットの異なるバージョンを制御し管理することは非常に重要です。
堅牢なバージョン管理とトレーサビリティのない速度は、シートベルトなしで車を運転するようなものです。

ソースコード管理は、コードの変更、バージョン、ブランチを単に追跡するだけのものではありません。実質的に、以下のようなプラクティスを含みます:

- 開発チームが分散した非同期環境で作業できるようにする
- コードとアーティファクトの変更とバージョンを管理する
- コードや他のアセットの *レビュー* と *コラボレーション* を可能にする
- 提案された変更の承認を追跡する
- マージのコンフリクトと関連する異常を解決する

一般的に、[バージョン管理](https://about.gitlab.com/solutions/source-code-management/) はソフトウェアが常に変化しているため必要です。開発のどの段階にあろうとも、対処すべき変化は常にあります。

> システムライフサイクルのどこにいようとも、システムは変化し、それを変えたいという欲求はライフサイクル全体を通じて続くだろう。
>
> E.H. Bersoff, 1980.

ソースコード管理に優れた企業は、高品質なコードを作成すると同時に、それを高頻度で統合します。

## ペルソナ

<figure class="video_container">
<iframe width="560" height="315" src="https://www.youtube.com/embed/2ghFIR5DLbo" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</figure>

### ユーザーペルソナ

GitLab への入り口であるということは、多くのユーザーペルソナがソースコード管理に有用性と問題への解決策を見出すことを意味します。パワーユーザーペルソナのリストを通じて、GitLab でソースコード管理を使用する主な動機を簡単に説明します:

#### Parker the Product Manager

- [PM](/handbook/product/personas/#parker-product-manager) は、機能開発とプロジェクトの成功などを調整します。コミットを通じて進捗を監視し、レビューアプリでそれらの変更を検証してフィードバックを提供する能力は、彼らの役割の成功に不可欠です。
- これらの変更は、PM が計画された新機能の開発努力を正確に評価するための、貴重な統計的洞察を時間とともに生み出します。

#### Delaney the Development Team Lead

- PM と同様に、[チームリード](/handbook/product/personas/#delaney-development-team-lead) も、目標を期限内に達成するためにチームの能力を理解し、それに応じて今後のタスクを割り当てる必要があります。
- コードレビューでの承認ワークフローにより、彼らはより速く、本当のチームワークを可能にする存在となります。

#### Sasha the Software Developer

- [Sasha](/handbook/product/personas/#sasha-software-developer) は、コマンドラインツールと GitLab の GUI の両方を活用して、彼が行うすべてのコミットを完全にコントロールしてタスクを完了します。
- スコープの変更があった場合でも(よくあるハードルでフラストレーションの源)、ブランチング、マージ、コンフリクト解決はソースコード管理で実行され、迅速な解決のために CI をトリガーします。

#### Devon the DevOps Engineer

- [この役割](/handbook/product/personas/) の目標に関連するすべての情報は、それに対するアクションを取るためにソースコード管理に集約されています。解決時間や、一般的に DevOps の他の主要メトリクスは、ソースコード管理で測定され、そのパフォーマンスが追跡されます。
- 開発プロセスに適用された改善は、それがマージリクエストであろうと Issue であろうと、ソースコード管理のインターフェースに反映されます。

### Cameron the Compliance Manger

- [Cameron](/handbook/product/personas/#cameron-compliance-manager) は、企業のすべての開発プロセスがコンプライアンスに準拠している必要があります。ソフトウェア開発・配信ライフサイクルが生み出す膨大なデータ量を考えると、監査目的で必要なすべてのデータを見つけ、集約し、レポートするのが困難であると感じています。
- 証拠収集プロセスにかかる時間と中断を減らすために、情報が迅速かつ簡単に利用可能である必要があります。

### Presely the Product Designer

- [Presley](/handbook/product/personas/#presley-product-designer) は、ユーザーニーズと製品要件を理解し、ユーザーニーズを解決するための設計提案を作成・反復することに責任を負っています。
- 彼は、設計プロセスを通じて確実に参照できる、明確で最新の要件が欲しいと考えています。

### Sydney the Systems Administrator

- [Sydney](/handbook/product/personas/#sidney-systems-administrator) は、GitLab のようなツールをすべての人が利用しアクセスできるようにする責任を負っています。
- 彼女は、堅牢で耐障害性のあるプラットフォームのインスタンスを企業に提供するために、インフラのプロビジョニングとスケーラビリティを深く理解する必要があります。

### バイヤーペルソナ

ソースコード管理の購買は、通常エグゼクティブの関与を必要としません。通常、調達や IT の承認なしに、私たちのフリーミアムオファリングを通じて取得・インストールされます。このプロセスは一般にシャドウ IT として知られており、私たちが最終的に有料サービスになるための素晴らしい機会となります。アップグレードが必要な場合、[VP of IT](https://docs.google.com/presentation/d/17Ucpgxzt1jSCs83ER4-LdDyEuermpDuriugPNYrz8Rg/) が最も頻繁な意思決定者です。[VP Application Development](/handbook/marketing/brand-and-product-marketing/product-and-solution-marketing/roles-personas/buyer-persona/) の影響力も予算の所有者にとって顕著です。

#### Alex the Application Development Manager

- [Alex](/handbook/marketing/brand-and-product-marketing/product-and-solution-marketing/roles-personas/buyer-persona/) は高度に技術的で、個人貢献者から一歩離れただけです。
- 予算管理と、チームが適切なスキルと全体的なチームエンゲージメントを持つことを確保しています。

#### Dakota the Application Development Director

- [Dakota](/handbook/marketing/brand-and-product-marketing/product-and-solution-marketing/roles-personas/buyer-persona/) は、特定のビジネスアプリケーションをサポートする複数の開発者チームを管理・リードする主要な IT リーダーです。彼女は技術的なスキルとビジネススキルの両方を持ち、マネージャーとしてビジネスイノベーションの提供に焦点を当てています。
- 彼女は、ビジネスパートナーとの戦略計画と、組織の課題やチームが直面している障害物の解決の間でバランスを取りながら時間を使います。彼女はチームのために予算とリソースを確保するための組織戦略と計画を策定します。

#### Erin the Application Development Executive (VP, etc.)

- [Erin](/handbook/marketing/brand-and-product-marketing/product-and-solution-marketing/roles-personas/buyer-persona/) は、ビジネス課題と大局に焦点を当てた戦略的リーダーです。
- 彼女のトップ目標は予測可能なビジネス結果です。

## 業界アナリストリソース

このユースケースに関連する調査は、[Analyst Reports - Use Cases](https://docs.google.com/spreadsheets/d/1vXpniM08Ql0v0yDd22pcNmXpDrA-NInJOwj25PRuHXA/edit#gid=2123394945) スプレッドシートに記載されています。

## 市場要件

<figure class="video_container">
<iframe width="560" height="315" src="https://www.youtube.com/embed/d_7qUiuJAtQ" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</figure>

市場要件は、ソースコード管理ユースケースに存在すると認識されている機能の集まりです。このユースケースを解決しようとする人々は、実装するソリューションにこれらの要件のうち少なくとも 1 つ、できればすべてが存在することを基本的に検討します。市場を正確に表現する形でこれらを集めるために、私たちはアナリスト、ユーザー、競合、思想的リーダーなど複数のソースからデータを収集します。

| 市場要件 | 説明 | この機能を実現する一般的な機能 | 価値 / ROI |
|---|---|---|---|
| **資産を保護しセキュアにする** | このソリューションは、プロジェクト資産(ソースコード、デザイン、グラフィック、メディアなど)をホスト(リポジトリ)し、それらのリポジトリにアクセスするユーザーに対して異なる変更権限を配置・管理するメカニズム、およびこれらの資産が受けるすべての変更の詳細な管理連鎖を維持するメカニズムを提供します。 | シングルサインオン、コードオーナーシップ、変更レビュー、変更承認、IP Allowlist/Denylist、Activity stream、GPG 署名コミット、未署名コミットの拒否、保護されたブランチ、ブランチング、コミッターアクセスルール、コンプライアンスダッシュボードなど。 | IP と貴重な資産を保護します。プロジェクト履歴の変更に関する情報を提供します   |
| **エンタープライズレディ** | このソリューションは、高度に規制された市場における大規模で広く分散したチームに対して、重要な機能を大規模に利用可能にするのに十分堅牢です。モノリポから[マイクロサービスのようなサービス指向アーキテクチャ](https://about.gitlab.com/topics/microservices/) まで、複数のプロジェクト構造をサポートしています。 | [Geo](https://docs.gitlab.com/ee/administration/geo/index.html)、Geo [高可用性](https://docs.gitlab.com/ee/administration/reference_architectures/)、[ディザスタリカバリ](https://about.gitlab.com/direction/geo/disaster_recovery/)、Git protocol v2 サポート、フォークされたリポジトリの Git オブジェクトの重複排除、単一リポジトリファイルのダウンロード、高速で応答性の高いアプリケーション、プロジェクトテンプレート、ファイルテンプレート、アクセス制御、トレーサビリティ。 | 開発チームの作業の中断や障害を防止します。製品の欠陥やバグに対処するため変更の作成者へのトレーサビリティと監査可能性を全体を通じて可能にします |
| **多数の資産をサポート** | このソリューションは、それぞれの資産が示す開発パターンをサポートしながら、多様な資産のバージョン履歴を管理・維持できます | コンポーネント再利用、トレーサビリティ、デザイン管理、ブランチング、差分、マージ、オブジェクトストレージ、デザインバージョニング | どんなに多様であっても、開発チーム全体の資産とファイルを管理し、製品設定の単一の信頼できる情報源を作成し、あらゆるレベルで可視性とコミュニケーションを利用可能にします |
| **コラボレーションを促進** | このソリューションは、チームメンバー間のコラボレーションを可能にし促進するように設計されています。コラボレーションシステムには、手動のゲートと承認、ならびに自動化されたワークフローが含まれます。 | プロジェクトの新しいブランチの高速作成、新しいファイル/資産の追加、提案された変更でのコラボレーション、コメントのレビュー、変更の提案、webIDE、提案承認、コンフリクトの解決、マージ、差分、ハンドオフ、デザイン管理と運用、ワークフロー自動化、Wiki、スニペット、バージョン管理されたスニペット、マージリクエストがマージされたときに関連 Issue を自動更新またはクローズ、設定可能な Issue クローズパターン、CI システムでのビルドのマージリクエストステータス表示、セキュリティスキャンとビルド統計の可視化。 | チームのレビューと検証を通じてコード品質の向上とリリース速度の改善。 |
| **セキュアな開発** | このソリューションは、プロジェクトの作成段階でセキュリティのプラクティスを有効化できるようにします | 依存関係スキャン、SAST、ライセンスコンプライアンススキャン、DAST、コンテナスキャン | 外部攻撃、内部脅威に対するレジリエンスを高め、活動を迅速に再開する能力を高めます |

## GitLab ソリューション

## GitLab がどのように市場要件を満たすか

| 市場要件 | GitLab の提供方法 | GitLab **ステージ**/カテゴリ | デモ |
| ------ | ------ | ------ | ------ |
| **資産を保護しセキュアにする** | GitLab には組み込みのアクセス制御があります: [LDAP](https://docs.gitlab.com/ee/administration/auth/ldap/)、[Active Directory](https://docs.gitlab.com/ee/administration/auth/ldap/)、[SAML](https://docs.gitlab.com/ee/user/group/saml_sso/)、[SSO](https://docs.gitlab.com/ee/administration/auth/)。アプリ内アクセス制御には、異なるレベルのアクセスと権限を持つ[ユーザーロール](https://docs.gitlab.com/ee/user/permissions.html#project-members-permissions) が含まれます。リポジトリでホストされる IP は、[リポジトリ](https://docs.gitlab.com/ee/user/project/repository/)、[プロジェクト](https://docs.gitlab.com/ee/user/project/)、[グループ](https://docs.gitlab.com/ee/user/group/) を通じて保存・アクセスできます。[保護されたブランチ](https://docs.gitlab.com/ee/user/project/repository/branches/protected.html)、[保護されたタグ](https://docs.gitlab.com/ee/user/project/protected_tags.html)、[プッシュルール](https://docs.gitlab.com/ee/user/project/repository/push_rules.html)、[MR 承認](https://docs.gitlab.com/ee/user/project/merge_requests/approvals/)、[Codeowners](https://docs.gitlab.com/ee/user/project/codeowners/) など、IP への変更を制限・追跡するメカニズムがあります。最後に、管理者は[監査イベント](https://docs.gitlab.com/ee/administration/audit_event_reports.html)、[ユーザーのブロック](https://docs.gitlab.com/ee/administration/moderate_users.html#blocking-and-unblocking-users)、[クレデンシャルインベントリ](https://docs.gitlab.com/ee/administration/credentials_inventory.html)、[ライセンスコンプライアンス](https://docs.gitlab.com/ee/user/compliance/license_approval_policies.html)、[コンプライアンスダッシュボード](https://docs.gitlab.com/ee/user/compliance/compliance_center/) を通じてイベントを制御し、コンプライアンスに準拠していないものを止めることができます。 | [**Create ステージ:**](https://about.gitlab.com/stages-devops-lifecycle/create/) [SCM](https://about.gitlab.com/solutions/source-code-management/)、[Code Review](https://about.gitlab.com/stages-devops-lifecycle/create/)<br> [**Manage ステージ:**](https://about.gitlab.com/stages-devops-lifecycle/) [Compliance Management](https://docs.gitlab.com/ee/administration/compliance.html)<br> [**Release ステージ:**](https://about.gitlab.com/stages-devops-lifecycle/release/) [Release evidence](https://docs.gitlab.com/ee/user/project/releases/#release-evidence) | [![Control Changes to Product Development Assets](/images/marketing/brand-and-product-marketing/product-and-solution-marketing/usecase-gtm/version-control-collaboration/youtube_social_icon_red-32x23.png) Control Changes to Product Development Assets](https://youtu.be/l6K3Xn2MPJw)<br> [![Manage, Track and Maintain Access](/images/marketing/brand-and-product-marketing/product-and-solution-marketing/usecase-gtm/version-control-collaboration/youtube_social_icon_red-32x23.png) Manage, Track and Maintain Access](https://youtu.be/nRxCz4vMv5Q)<br> [Blog post: How GitLab protects your IP](https://about.gitlab.com/blog/2020/08/07/how-gitlab-protects-your-ip/) |
| **エンタープライズレディ** | GitLab は、グループ、サブグループ、プロジェクトに編成された巨大な地理的に分散したチームを、高可用性要件をもってサポートする機能を提供します。GitLab SCM は、フェイルオーバーシナリオのための[ディザスタリカバリシステム](https://docs.gitlab.com/ee/administration/geo/disaster_recovery/) を作成するために GitLab インスタンスをレプリケートする [Geo](https://docs.gitlab.com/ee/administration/geo/index.html) をサポートしています。[Gitaly Cluster](https://docs.gitlab.com/ee/administration/gitaly/praefect.html) は、gitlab.com または[オンプレミス](https://docs.gitlab.com/charts/advanced/external-gitaly/external-omnibus-gitaly.html) でホストされるすべてのチームに対して Git を高可用にします。 | [**Manage ステージ:**](https://about.gitlab.com/stages-devops-lifecycle/) [Subgroups](https://docs.gitlab.com/ee/user/group/subgroups/) [Code Analytics](https://docs.gitlab.com/ee/user/analytics/code_review_analytics.html) <br>[**Create ステージ:**](https://about.gitlab.com/stages-devops-lifecycle/create/) [ソースコード管理](https://about.gitlab.com/solutions/source-code-management/) これには [Gitaly](https://about.gitlab.com/direction/gitaly/) が含まれます<br> [**Enablement ステージ:**](https://about.gitlab.com/direction/core_platform/) [Geo](https://docs.gitlab.com/ee/administration/geo/index.html)<br> [ディザスタリカバリ](https://docs.gitlab.com/ee/administration/geo/disaster_recovery/)<br> [リファレンスアーキテクチャ](https://docs.gitlab.com/ee/administration/reference_architectures/) | [![Enterprise ready](/images/marketing/brand-and-product-marketing/product-and-solution-marketing/usecase-gtm/version-control-collaboration/youtube_social_icon_red-32x23.png) Enterprise ready](https://youtu.be/gULEzPybJu8?list=PLFGfElNsQthYDx0A_FaNNfUm9NHsK6zED)<br> [![Support different system architectures and designs](/images/marketing/brand-and-product-marketing/product-and-solution-marketing/usecase-gtm/version-control-collaboration/youtube_social_icon_red-32x23.png) Support different system architectures and designs](https://youtu.be/t-xUDB41nW0?list=PLFGfElNsQthYDx0A_FaNNfUm9NHsK6zED)<br> [![Enterprise Ready - Project Templates](/images/marketing/brand-and-product-marketing/product-and-solution-marketing/usecase-gtm/version-control-collaboration/youtube_social_icon_red-32x23.png) Enterprise Ready - Project Templates](https://youtu.be/kNkUf1cScSc?list=PLFGfElNsQthYDx0A_FaNNfUm9NHsK6zED) |
| **多数の資産をサポート** |  リポジトリは、ソースコード、注釈付きデータ駆動型プロジェクトのための [Jupyter notebook](https://docs.gitlab.com/ee/user/project/repository/files/jupyter_notebooks/index.html) のデータナラティブ、[wiki](https://docs.gitlab.com/ee/user/project/wiki/) における GitLab フレーバーの Markdown、Markdown、RDoc、AsciiDoc、Org のような描画されたマークアップなど、様々な種類の資産をホストできます。GitLab はまた[グラフィック資産](https://docs.gitlab.com/ee/user/project/issues/design_management.html) をホストし、Issue におけるハンドオーバーコミュニケーションをサポートします。 | [**Create ステージ:**](https://about.gitlab.com/stages-devops-lifecycle/create/) [SCM](https://about.gitlab.com/solutions/source-code-management/)、[Design Management](https://docs.gitlab.com/ee/user/project/issues/design_management.html)、[Wiki](https://docs.gitlab.com/ee/user/project/wiki/)<br> [Git LFS](https://docs.gitlab.com/ee/topics/git/lfs/)| [![Support numerous assets](/images/marketing/brand-and-product-marketing/product-and-solution-marketing/usecase-gtm/version-control-collaboration/youtube_social_icon_red-32x23.png) Support numerous assets](https://youtu.be/f9zmxOfP7AQ?list=PLFGfElNsQthYDx0A_FaNNfUm9NHsK6zED) |
| **コラボレーションを促進** |  GitLab は提案について協力するためのプラットフォームです。変更提案は[マージリクエスト](https://docs.gitlab.com/ee/user/project/merge_requests/reviews/) を通じてあらゆるプロジェクトで起こります。コラボレーションは、明確化のための[スレッド化された会話](https://docs.gitlab.com/ee/user/discussions/) や、変更を承認・拒否できる[マージリクエスト承認](https://docs.gitlab.com/ee/user/project/merge_requests/approvals/) など、複数の場所で行えます。提案された変更を理解するため、変更の詳細なビジョンが[コンフリクトの解決](https://docs.gitlab.com/ee/user/project/merge_requests/conflicts.html) にあり、コードレビュー担当者は[特定のコード行にコメント](https://docs.gitlab.com/ee/development/code_comments.html) し、ワンクリックで適用可能な[変更を提案](https://docs.gitlab.com/ee/user/discussions/#suggest-changes) し、または[コードスニペット](https://docs.gitlab.com/ee/user/snippets.html) の使用を提案できます。これらすべての行動は、複数の[アプリ内](https://docs.gitlab.com/ee/operations/incident_management/index.html)、チャット([Slack](https://docs.gitlab.com/ee/user/project/integrations/slack.html) または [Discord](https://docs.gitlab.com/ee/user/project/integrations/discord_notifications.html))、または[メール通知](https://docs.gitlab.com/ee/user/profile/notifications.html) を通じて様々なユーザーをつなぎます。 | [**Create ステージ:**](https://about.gitlab.com/stages-devops-lifecycle/create/) [SCM](https://about.gitlab.com/solutions/source-code-management/)、[Code Review](https://about.gitlab.com/stages-devops-lifecycle/create/)、[WebIDE](https://docs.gitlab.com/ee/user/project/web_ide/index.html)、[Single file web editor](https://docs.gitlab.com/ee/user/project/repository/web_editor.html)、[Live Preview](https://docs.gitlab.com/ee/user/project/web_ide/index.html#live-preview)、[Snippets](https://docs.gitlab.com/ee/user/snippets.html)<br> [**Manage ステージ:**](https://about.gitlab.com/stages-devops-lifecycle/) [Code Review Analytics](https://docs.gitlab.com/ee/user/analytics/code_review_analytics.html)、[Insights](https://docs.gitlab.com/ee/user/project/insights/index.html)<br> [**Plan ステージ:**](https://about.gitlab.com/stages-devops-lifecycle/plan/) [Issue tracking](https://docs.gitlab.com/ee/user/project/issues/)<br> [**Verify ステージ:**](https://about.gitlab.com/stages-devops-lifecycle/verify/) [Code Quality](https://docs.gitlab.com/ee/ci/testing/code_quality.html) | [![Foster Collaboration](/images/marketing/brand-and-product-marketing/product-and-solution-marketing/usecase-gtm/version-control-collaboration/youtube_social_icon_red-32x23.png) Foster Collaboration](https://youtu.be/OFNUjvgm2_4?list=PLFGfElNsQthYDx0A_FaNNfUm9NHsK6zED) |
| **セキュアな開発** | GitLab は、ビルドが行われる前でさえも開発をよりセキュアにするためのいくつかのセキュリティ機能を組み込んでいます。[シークレットの検出](https://docs.gitlab.com/ee/user/application_security/secret_detection/) や[ライセンスコンプライアンス](https://docs.gitlab.com/ee/user/compliance/license_approval_policies.html) の問題を検出し、[ソースコード内](https://docs.gitlab.com/ee/user/application_security/sast/) または[依存関係内](https://docs.gitlab.com/ee/user/application_security/dependency_scanning/) のマージ前の脆弱性を発見し、[実行中のアプリ](https://docs.gitlab.com/ee/user/application_security/dast/) の脆弱性もマージ前に発見し、[コンテナ](https://docs.gitlab.com/ee/user/application_security/container_scanning/) でも発見できます。これらの機能は、[ファズテスト](https://docs.gitlab.com/ee/user/application_security/coverage_fuzzing/) で何千ものユーザーが入力するものを数秒で再現し、不具合や他の問題を検出することさえできます。 | [**Secure ステージ:**](https://about.gitlab.com/stages-devops-lifecycle/secure/) [SAST](https://docs.gitlab.com/ee/user/application_security/sast/)、[DAST](https://docs.gitlab.com/ee/user/application_security/dast/)、[Fuzz Testing](https://docs.gitlab.com/ee/user/application_security/coverage_fuzzing/)、[Dependency Scanning](https://docs.gitlab.com/ee/user/application_security/dependency_scanning/)、[Container Scanning](https://docs.gitlab.com/ee/user/application_security/container_scanning/)、[License Compliance](https://docs.gitlab.com/ee/user/compliance/license_approval_policies.html)、[Secret Detection](https://docs.gitlab.com/ee/user/application_security/secret_detection/)、[Security Dashboard](https://docs.gitlab.com/ee/user/application_security/security_dashboard/) | [![Secure Development](/images/marketing/brand-and-product-marketing/product-and-solution-marketing/usecase-gtm/version-control-collaboration/youtube_social_icon_red-32x23.png) Secure Development](https://youtu.be/T0JRxw8_kY8?list=PLFGfElNsQthYDx0A_FaNNfUm9NHsK6zED) [DevSecOps リソース](/handbook/marketing/brand-and-product-marketing/product-and-solution-marketing/usecase-gtm/devsecops/#how-gitlab-meets-the-market-requirements) もご覧ください |

## トップ 3 の差別化要因

| 差別化要因 | 価値 | プルーフポイント  | デモ |
|-----------------|-------------|---------------|---------------|
| **分散型バージョン管理** | 完全なプロジェクト履歴の単一コピーを任意のマシンに保存できるため、非同期、リモート、コラボレーティブな作業が花開きます。ブランチングは簡単で強力なため、Perforce や CVS のような集中型 VCS とは対照的に、ほぼ無限のワークフローの可能性が開かれます。GitLab 上でソースコードや他のデジタル資産で協力する際に異なるチームが生み出すすべての情報は、マージリクエストから時計仕掛けの精度で容易に分析、認可、合理化できます。これにより、チームリードは [GitLab Flow](https://about.gitlab.com/blog/2023/07/27/gitlab-flow-duo/) のようなベストプラクティスのワークフローを正しく実装できます。 | – Stackoverflow の 2018 年の調査データによると、[回答者の 87% が Git を使用](https://survey.stackoverflow.co/2018#work-_-version-control)(2015 年の 69% から増加)していて、他の集中型および分散型 VCS は使用していません。同様の傾向は [Open Hub のデータ](https://softwareengineering.stackexchange.com/questions/136079/are-there-any-statistics-that-show-the-popularity-of-git-versus-svn/136207#136207) にも見られます。2019 年、Stack Overflow [は同じ調査でこの質問さえしませんでした](https://survey.stackoverflow.co/2019#development-practices)。– 2015 年の [Gartner's Market Guide for Software Change and Configuration Management](https://www.gartner.com/en/documents/3118917/market-guide-for-software-change-and-configuration-manag) は DVCS の利点を明確に示しています。2019 年、Gartner は SCM を Application Release Orchestration の一部として評価しており、[GitLab は 2019 年時点でチャレンジャー](https://about.gitlab.com/analysts/gartner-aro19/) です – 他の DVCS と CVCS と比較した [2004 年以降の Google trends](https://trends.google.com/trends/explore?date=all&q=git,svn,perforce,mercurial,tfs)。 | [![Distributed Version control](/images/marketing/brand-and-product-marketing/product-and-solution-marketing/usecase-gtm/version-control-collaboration/youtube_social_icon_red-32x23.png) Distributed Version Control](https://youtu.be/JAgIEdYhj00)|
| **単一アプリケーション** | ソフトウェア開発ライフサイクルのすべてのフェーズを 1 つの DevOps プラットフォームで接続する能力。1 つのデータレイヤー、1 つのデザインシステム、ソフトウェアの設計、開発、ビルド、デプロイメントの異なるすべてのステージを管理する 1 セットのコマンド | 単一アプリの[一般的なプルーフポイント](/handbook/sales/command-of-the-message/proof-points/) | [![Single Application](/images/marketing/brand-and-product-marketing/product-and-solution-marketing/usecase-gtm/version-control-collaboration/youtube_social_icon_red-32x23.png) Single Application](https://youtu.be/SAfpdJ7jpHQ)  |
| **製品開発管理** | GitLab は、ソースコードだけでなく、IP、グラフィック資産、アニメーション、バイナリなど、いくつかの例で作業する製品チームに対するコラボレーション機能をますます提供する唯一の製品です。 | Forrester の [Adopt Product Management to Connect Design and Development](https://www.forrester.com/report/Adopt-Product-Management-To-Connect-Design-And-Development/RES149995) は、「サイロ化されたデザインと開発チームは、標準以下のソフトウェアを提供する」と明確に述べています。 | [![Product Development Management](/images/marketing/brand-and-product-marketing/product-and-solution-marketing/usecase-gtm/version-control-collaboration/youtube_social_icon_red-32x23.png) Product Development Management](https://youtu.be/YtbHkCzxFW4)  |

---

## メッセージハウス

[メッセージハウス](message-house/) は、見込み客や顧客との各タッチポイントで GitLab の価値と差別化要因を明確に伝えるすべてのコンテンツの構成要素を含んでいます。各タッチポイントは、その時間をかける価値があり、また、彼らの意思決定プロセスを動かすために、GitLab との関係において関連性を持つ必要があります。言い換えると、メッセージハウスのすべての項目は各ペルソナのコンテキストにあり、彼らの意図とつながり、彼らの転換点(価値ドライバー)と共鳴し、SCM ユースケースの簡単なナラティブを提供して次のステップを示し、進捗を達成します。

ユースケースのメッセージハウスは、ユースケースの価値と差別化要因を説明し議論するための構造を提供します。

### ディスカバリー質問

以下のサンプルディスカバリー質問は、ベースラインを提供し、現在 SCM に GitLab を使用していない見込み客や顧客と話す際の機会を発見するのに役立ちます。より完全な質問リストの確認、フィードバックの提供、提案のコメントは [GitLab の SCM ディスカバリー質問](https://docs.google.com/document/d/1yulWldOz8J-RK6dVa3pzLnWUYvfC94Xt-IDIDMIdRQ8/edit?usp=sharing) で行い、ぜひ貢献してください!

#### サンプルディスカバリー質問

- あなたのチームはコードベースの更新/変更をどのようにキャッチアップしていますか?
- チームの異なるメンバーは、自分の変更を他のメンバーの作業と同期させ続けるためにどうしていますか?
- ソフトウェア開発チームはエンドツーエンドのコンプライアンスを維持していますか?要件からバージョン管理されたリリースまで?
- あなたのチームは何回コードを統合していますか?
- あなたのチームはどのようにコミュニケーションしていますか?
- 開発者が本番環境にできるだけ近い開発環境を素早く作成できるように、何を使用していますか?(Infrastructure as code + イノーソーシング、ただし Docker を使用していればそれだけで十分かもしれません)
- DevSecOps ワークフローにセキュリティはどの程度統合されていますか?彼らは本当に統合されていますか、それとも後付けですか?セキュリティチームは、パイプラインに来る変更、進行中の作業、入力の準備が整うタイミングをどのように把握していますか?変更の性質と何をテストすべきかを素早く理解する方法は?(アクティブな MR、WIP、計画用の Issue ボード、変更のスコープと性質を理解するためのコード/レビュー/コミットを見る)
- QA は開発ワークフローにどのように統合されていますか?Issue とコード変更を 1 つの場所で見ることができますか?テスト用のレビューアプリを見ることができますか?

#### GitHub 固有のディスカバリー質問

- HA セットアップをどのように実装しましたか?ゼロダウンタイムアップグレードはどのように実行しますか?

*補足*:

GitHub HA は本当の HA セットアップではなく、むしろ[フェイルオーバーソリューション](https://docs.github.com/en/enterprise-server@2.21/admin/enterprise-management/configuring-high-availability)(2 つの仮想マシン間の同期、ベアメタルソリューションはなし)に近いです。
さらに、ゼロダウンタイムアップグレードは[不可能](https://docs.github.com/en/enterprise-server@2.21/admin/enterprise-management/configuring-high-availability/about-high-availability-configuration#targeted-failure-scenarios) のようです。

- GitHub Actions でどれくらいの期間運用していますか?GitHub Actions で何でもできますか?
GitHub Actions のセキュリティ問題はありますか?ランナーのログにシークレット変数が表示されないようにどのように保護していますか?

*補足*:

[GitHub ドキュメント](https://docs.github.com/en/actions/security-for-github-actions/security-guides/using-secrets-in-github-actions): GitHub はログに出力されたシークレットを自動的に編集しますが、意図的にログにシークレットを出力することは避けるべきです。
GitHub Actions では[変数をマスクすることはできません](https://julienrenaux.fr/2019/12/20/github-actions-security-risk/)([GitLab ではできます](https://docs.gitlab.com/ee/ci/variables/#mask-a-custom-variable))。

- GitHub Actions ランナーをどのようにスケールしますか?(GitLab Kubernetes executor と比較して)
GitHub をプロジェクト管理ツールとして使用していますか?Scrum のすべてのアーティファクトを実装できますか?複雑なユーザーストーリーや同じトピックに関連するものをどのように管理しますか?

*補足*:

GitHub には Epic がありません。

- 脆弱性アラートは十分ですか?オフラインモードで使用する必要がありますか?

*補足*:

(検証保留) GitHub の「脆弱な依存関係に対するセキュリティアラート」は、GitHub インスタンスが [GitHub Enterprise Cloud に接続されている](https://docs.github.com/en/enterprise-server@2.21/admin/configuration/managing-connections-between-github-enterprise-server-and-github-enterprise-cloud/enabling-alerts-for-vulnerable-dependencies-on-github-enterprise-server) 必要があります(エアギャップ版なし)。

- Codespaces を使用していますか?もしそうなら、何のために?

*補足*:

プレリリースなのでまだ使用していない可能性が高いです。しかし、もしそうであっても、webIDE について言及する絶好のタイミング: 軽量で、GitLab の GUI に組み込まれていて、設定可能で、リンティング機能あり…
GitHub で最近リリースされた Super Linter について彼らが言及した場合、Super Linter とほぼ同じ数の言語をサポートする CodeQuality 機能、および Super Linter が GitLab であまり手間なく実行できることを言及できます。

*補足*:

 GitHub Enterprise は、別の self-managed サーバー上で組織レベルのアナリティクス(Insights)を提供し、GitHub One ライセンスが必要です。

## 競合比較

DevOps 領域の多くの競合の中で、[GitHub、Perforce、Azure DevOps、SVN](https://about.gitlab.com/direction/create/source_code_management/#competitive-landscape) が SCM 機能を提供する最も近い競合です。[Phabricator、Gerrit、GitHub、BitBucket、Azure DevOps、Crucible、Review Board、Reviewable、CodeStream、GitLens、VS Live Share、Gitpod](https://about.gitlab.com/direction/create/code_review_workflow/#competitive-landscape) はコードレビュー機能を提供する最も近い競合です。[Cloud9、Codesandbox、Repl.it、Koding、StackBlitz、Theia、Gitpod、Coder、VS Online](https://about.gitlab.com/direction/create/remote_development/web_ide/#competitive-landscape) は webIDE を提供する最も近い競合です。[Psatebin、Blocks、Gist.io、Bitbucket Snippets、Codesandbox、JSBin、JSFiddle、Codepen](https://about.gitlab.com/direction/create/source_code_management/) はスニペットを提供する最も近い競合です。[Invision、Figma、UX Pin](https://about.gitlab.com/direction/plan/design_management/#competitive-landscape) はデザイン管理機能を提供する最も近い競合です。

### Industry Analyst Relations (IAR) Plan

- IAR ハンドブックページは、[アナリストとの会話にユースケースを取り入れる](/handbook/marketing/brand-and-product-marketing/product-and-solution-marketing/analyst-relations/#how-we-incorporate-use-cases-into-our-industry-analyst-interactions) 計画を反映するように更新されています。
- 各ユースケースの詳細、および Industry Analyst 各社との契約上の機密保持契約を尊重した上で、私たちのエンゲージメント計画は GitLab チームメンバー向けの以下の保護されたドキュメントで利用可能です: [IAR Use Case Profile and Engagement Plan](https://docs.google.com/spreadsheets/d/14UthNcgQNlnNfTUGJadHQRNZ-IrAe6T7_o9zXnbu_bk/edit#gid=1430251677)。

このユースケースに関する GitLab の機能を現在理解しているアナリストのリストについては、Slack(#analyst-relations)経由または[Issue](https://gitlab.com/gitlab-com/marketing/product-marketing/issues/new) を提出して "AR-Analyst-Validation" テンプレートを選択し、Analyst Relations にお問い合わせください。

## プルーフポイント - 顧客の評価

[一般的なプルーフポイント](/handbook/sales/command-of-the-message/proof-points/) と [Customer Recognition](https://about.gitlab.com/customers/)

### 引用とレビュー

#### Gartner Peer Insights

*Gartner Peer Insights のレビューは、エンドユーザー個人の主観的な意見を彼ら自身の経験に基づいて構成しているものであり、Gartner やその関連会社の見解を表すものではありません。明らかなタイポは修正されています。*

>"このソフトウェアは直感的で非常に使いやすい。多くのソフトウェア開発プロジェクトには複数の人が必要なため、チームを作って共同作業を行うのが容易だ。"
>
> - **Quality Engineer**, [Gartner Peer Review](https://www.gartner.com/reviews/market/application-release-orchestration-solutions/vendor/gitlab/product/gitlab/review/view/1037713)
>
>"フィーチャーブランチを保持し、それらを迅速かつ効率的にマージする簡単で速い方法を提供することで、エンジニアの生産性を向上させる。"
>
> - **Engineering Manager**, [Gartner Peer Review](https://www.gartner.com/reviews/market/application-release-orchestration-solutions/vendor/gitlab/product/gitlab/review/view/1060524)
>
>"ソフトウェアプロジェクトをコントロール下に保つ。強制されたレビュープロセスとパイプラインを通じて、暴走する開発者を抑える。"
>
> - **Engineer**, [Gartner Peer Review](https://www.gartner.com/reviews/market/application-release-orchestration-solutions/vendor/gitlab/product/gitlab/review/view/1063180)
>
>"git リポジトリを管理するために、現在市場で利用可能な最高の製品である。"
>
> - **Sr. Software Engineer**, [Gartner Peer Review](https://www.gartner.com/reviews/market/application-release-orchestration-solutions/vendor/gitlab/product/gitlab/review/view/1074452)
>
>"これは、ソフトウェアデリバリーを自動化し、無駄になっていたオーバーヘッドをリソースのプールに戻す能力に本当に役立った!これは非常に簡単に使え、コードパイプラインを支援する高速デリバリーツールだ。"
>
> - **Project Manager**, [Gartner Peer Review](https://www.gartner.com/reviews/market/application-release-orchestration-solutions/vendor/gitlab/product/gitlab/review/view/1078302)
>
>"私たちはこのプラットフォームを会社で使用してソース[コード]をバージョン管理し、最新の状態に保ち、バックアップオプションとして利用している。これにより、スケーラブルで高品質な製品を構築できる。使いやすく、ほとんどの開発環境と互換性がある。"
>
> - **Sr. Software Developer**, [Gartner Peer Review](https://www.gartner.com/reviews/market/application-release-orchestration-solutions/vendor/gitlab/product/gitlab/review/view/1135664)
>
>"無制限に実行できる能力を高く評価している。Issue tracker、保護されたブランチ、マージリクエストなど様々な機能があり、非常に良い経験を提供する。"
>
> - **Sr. Software Engineer**, [Gartner Peer Review](https://www.gartner.com/reviews/market/application-release-orchestration-solutions/vendor/gitlab/product/gitlab/review/view/1142879)
>
>"GitLab は非常に有用な SCM である。私たちの[組織]ではソースコードリポジトリとして使用してきた。ブランチングとタグ作成機能を広く利用してきた。スプリントで作業しているため、いくつかのスプリントとフィーチャーブランチがある。"
>
> - **Lead Developer**, [Gartner Peer Review](https://www.gartner.com/reviews/market/application-release-orchestration-solutions/vendor/gitlab/product/gitlab/review/view/1144638)
>
>"GitLab は素晴らしいバージョン管理とコラボレーション[プロバイダー]である。"
>
> - **Systems Engineer**, [Gartner Peer Review](https://www.gartner.com/reviews/market/application-release-orchestration-solutions/vendor/gitlab/product/gitlab/review/view/1194415)
>
>"GitLab を使う前は、コードのローカルコピーを作るかコードをバックアップして、サーバーを通じてコードを渡していた。しかし、もし私たちの組織が最初から GitLab を知っていたら、デプロイの容易さのために開発プラクティスにすぐに統合していただろう。"
>
> - **Software Developer**, [Gartner Peer Review](https://www.gartner.com/reviews/market/enterprise-agile-planning-tools/vendor/gitlab/product/gitlab/review/view/1016152)

### 事例

**[ESA (European Space Agency)](https://about.gitlab.com/customers/european-space-agency/)**

- **問題**  地理的な分離により、ソフトウェアデプロイメントに数週間かかっていた。
- **ソリューション** GitLab Core (SCM,CI) は、コラボレーションの機会、シナジー、および努力の複数の活用を可視化された方法で実現。
- **結果** 140 以上のグループが GitLab を採用し、1500 以上のソフトウェアプロジェクトが作成された。これらは、ミッションコントロールシステム、宇宙船のオンボードソフトウェア、ラボ用のイメージ処理および監視ツールに及ぶ。
- **セールスセグメント:** Enterprise

**[Goldman Sachs](https://about.gitlab.com/customers/goldman-sachs/)**

- **問題** 開発者の効率とソフトウェア品質を向上させる必要があった。
- **ソリューション:** GitLab Premium (CI/CD, SCM)
- **結果:** **2 週間に 1 ビルドから 1 日 1000 以上**へ改善し、開発者あたり 1 日 6 回リリース、ブランチからマージまでの平均サイクルタイムは 30 分。ワークフローと管理が簡素化された。
すべての新しい戦略的なソフトウェア開発プラットフォームは GitLab に結びついている。GitLab は開発、ソースコード制御とレビュー、ビルド、テスト、QA、本番デプロイメントのための完全なエコシステムとして使用されている。
- **セールスセグメント:** Enterprise

**[Worldline](https://about.gitlab.com/customers/worldline/)**

- **問題** Worldline は Subversion を使用していた際にボトルネックと所有権の欠如に直面していた。ソースコードリポジトリの取得に 1〜2 週間かかった。
- **ソリューション** GitLab Core (SCM)
- **結果:** GitLab Core では数秒で済むようになった。**6 ヶ月以内に 1,000 人以上のユーザーがアクティブユーザーとなった。GitLab は非常に使いやすいから。** ユーザーは GitLab Merge Request でコードレビューに貢献することに興奮している。以前のコードレビューツールは 10〜20 人の開発者しか使用していなかったが、Worldline は現在 3,000 人のアクティブな GitLab ユーザーを持っており、採用率は 12,000% 増加した。
- **セールスセグメント** Enterprise

**NorthWestern Mutual [Commit San Francisco 2020: Why we chose GitLab as our Enterprise SCM](https://youtu.be/kPNMyxKRRoM)** [Deck](https://docs.google.com/presentation/d/1vxiFJShRjU98kvwK87PZnYnMzBVPT5VJTr1chUEiM_Y/edit#slide=id.g6d6088e69c_0_15)

- **問題**  コードベースが断片化されていて、開発権限の処理も複雑だった。これにより開発者がコラボレーション、デプロイの高速化、バグやセキュリティホールの修正を行うことができなかった。
- **ソリューション** GitLab Premium (SCM, CI)
- **結果**  Enterprise 環境への完全な移行が 8 ヶ月で完了した。実装後、彼らは GitLab の CI の使いやすさによって摩擦を減らすことができた。
- **セールスセグメント:** Enterprise

### 成約を支援するリファレンス

[Salesforce リファレンスへのリンク](https://gitlab.my.salesforce.com/a6l4M000000kDwu) 注: セールスチームメンバーはこのレポートにアクセスできます。アクセス権がない場合は、[customer reference team](/handbook/marketing/brand-and-product-marketing/product-and-solution-marketing/customer-advocacy/#which-customer-reference-team-member-should-i-contact) に支援を求めてください。

## 採用ガイド

以下のセクションでは、CSM が機能の採用をリードするためのリソースを提供しますが、GitLab のステージとカテゴリの採用に関心のある見込み客や顧客にも使用できます。

### プレイブックステップ

- SCM はより広範な Delivery Automation ソリューションの一部です。プレイブックガイダンスについては [Delivery Automation in HighSpot のソリューションセリング](https://gitlab.highspot.com/items/61f2c6556e79372aaf0d1e6f) をご覧ください。

### 採用推奨事項

この表は、採用が推奨されるユースケース、製品ドキュメントへのリンク、各ユースケースに対応するサブスクリプション層、製品分析メトリクスを示しています。

| 機能 / ユースケース                                          | F/C  | Basic | S/P  | G/U  | 注記                                                        | 製品分析 |
| ------------------------------------------------------------ | :--: | :---: | :--: | :--: | :----------------------------------------------------------- | :-------: |
| GitLab Flow を採用                                           |  X   |   X   |  X   |  X   |                                                               |           |
| ネイティブの高可用性 / 高性能 Git ストレージサポート         |  X   |   X   |  X   |  X   | Gitaly Cluster の技術サポートは Premium/Ultimate のみ利用可能 | [`gitaly.clusters`](https://docs.gitlab.com/ee/development/internal_analytics/metrics/metrics_instrumentation.html#prometheus-metrics)|
| リポジトリ管理を簡素化                                       |      |   X   |  X   |  X   | CodeOwners ファイル、push rules                              | [`usage_activity_by_stage_monthly.create.merge_requests_with_required_codeowners`](https://docs.gitlab.com/ee/development/stage_group_observability/) |
| マージリクエスト承認ワークフロー                             |      |   X   |  X   |  X   | MergeApproval                                                | `redis_hll_counters.code_review.i_code_review_user_approve_mr_monthly` |
| 効率的なワークフローのためのテンプレート                     |      |       |  X   |  X   | プロジェクトテンプレート、gitlab-ci.yml などの Group/Instance テンプレート | counts.template_repositories  |
| コミット保護                                                 |      |       |  X   |  X   | 未署名コミットの拒否、認証済みコミッター                     |           |
| 大規模な分散チーム                                           |      |       |  X   |  X   | GitLab Geo                                                   | counts.geo_nodes |
| リポジトリ保護                                               |      |       |      |  X   | IP Allowlist/Denylist                                              |           |

この表には、GitLab の self-managed およびクラウド提供に関連する free/community および有料層が含まれます。

- F/C = Free / Core
- S/P = Premium
- G/U = Ultimate

### 追加のドキュメンテーションリンク

- [Create ステージのドキュメンテーション](https://docs.gitlab.com/ee/#create)
- [GitLab Cluster](https://docs.gitlab.com/ee/administration/gitaly/praefect.html#gitaly-cluster)
- [GitLab Geo](https://docs.gitlab.com/charts/advanced/geo/#gitlab-geo)
- [Secure ステージのドキュメンテーション](https://docs.gitlab.com/ee/#secure)

### イネーブルメントとトレーニング

以下は、イネーブルメントとトレーニングのビデオとコンテンツへのリンクです。

- [Customer Use Case Sales Webinar](https://www.youtube.com/watch?v=GN891Bqc6QY)
- [Value of GitLab SCM vs. GitHub]( https://www.youtube.com/watch?v=kNlaCq7qxzM)

### プロフェッショナルサービスのオファー

GitLab は、顧客とパートナー向けに[多種多様なパッケージ済みおよびカスタムサービス](https://about.gitlab.com/services/) を提供しています。以下は、このソリューション固有のサービスオファーです。追加サービスについては、[フルサービスカタログ](https://about.gitlab.com/services/catalog/) をご覧ください。

- [Git and GitLab Basics training](https://university.gitlab.com/pages/gitlab-fundamentals-training) - Git SCM と GitLab アプリケーションに新しいチームメンバー向けのトレーニング
- [GitLab training for Project Managers](https://university.gitlab.com/pages/gitlab-fundamentals-training) - プロジェクトマネージャーに GitLab Issue の使い方と、それが開発ライフサイクルの create ステージにどのように関連するかを教えるトレーニング
- [DevOps Fundamentals Training](https://university.gitlab.com/courses/gitlab-devops-fundamentals) - プロジェクトマネージャーに GitLab Issue の使い方と、それが開発ライフサイクルの create ステージにどのように関連するかを教えるトレーニング
- [SCM Migration Services](https://about.gitlab.com/services/catalog/) - 以前のソフトウェアバージョン管理システムから GitLab self-managed またはクラウド提供のソリューションへのデータとユーザーの移行

## キーバリュー(層別)

### Premium

**SCM に GitLab Premium を選ぶ理由は?** プロジェクトを常に利用可能にし、世界中のすべてのチームを接続します。Premium があれば、ソースコードへのアクセスとグローバルなコラボレーションは、オフィスでのペアプログラミングと同じくらい簡単になります。

GitLab の GEO 機能は、グローバルに分散したチームからネットワークのフラストレーションを取り除くことで、ダウンロード速度を 300% 改善できます。Gitaly Cluster と組み合わせることで、高可用性、高パフォーマンス、ディザスタリカバリを実現し、パフォーマンス、セキュリティ、稼働時間を犠牲にすることなく大規模なイノベーションを可能にします。

異なるリモートチームに、特定の IP ホスティングリポジトリへの LDAP アクセスをフィルタリングして提供します。署名済みコミットを要求し、コードレビュールールのようなコラボレーションルールを強制できます。Git protocol v2、sparse checkout、partial clone のパワーを活用し、いつでもどこでも中央リポジトリの最も関連性の高いコピーを持てます。

**Premium の主な機能:**

- Geo および DR
- コードレビューの承認ルール
- 未署名コミットの拒否
- 認証済みコミッター
- ファイルロック
- ジオロケーション対応 DNS のサポート
- インスタンスファイルテンプレート
- グループファイルテンプレート
- マージリクエストレビュー
- マージリクエスト依存関係

### Ultimate

**SCM に GitLab Ultimate を選ぶ理由は?** IP とチームを常にコンプライアンスに準拠させ、セキュアに保ちます。GitLab 管理者に、最もセキュアで柔軟な方法で大規模で広く分散した GitLab インスタンスを処理するための最先端の機能を提供します。すべてが揃っていることを確認し、Security Dashboard で何かが間違っているときに即座に明確な対応を取ります。

コンプライアンスプログラムは GitLab で完全にサポートされています。コンプライアンス専門家は、Compliance Dashboard を使用して、異なるプロジェクトからの関連情報をダッシュボードに表示することで、必要な情報を迅速に見つけることができます。コンプライアンスニーズの管理に必要な時間が劇的に削減されます。

**Ultimate の主な機能:**

- Web IDE 用 Web Terminal
- Web Terminal へのファイル同期
- Security Dashboard
- IP ホワイトリスト
- クレデンシャル管理
- Compliance Dashboard
- すべての[セキュリティスキャナー](https://docs.gitlab.com/ee/#secure)

## リソース

### プレゼンテーション

#### 顧客向けデック

[顧客向けスライド](https://docs.google.com/presentation/d/1mVi6-dsMsaA-KPVd2fn1StXuJQ62-kJDm-4J0rc_B1U/edit?usp=sharing)

#### ロードマップ

[6 ヶ月 / 1 年のロードマップスライド](https://docs.google.com/presentation/d/17iqdi16o4Vux1Vyg7EVBRs1Q0yuM1H32ZtJIsC3vAJ0/edit?usp=sharing)

### ビデオ

- [Source Code Walk Through, January 2020](https://www.youtube.com/watch?v=wTQ3aXJswtM) by James Ramsey, Group Product Manager for the Create Stage
- [GitLab Flow pattern](https://youtu.be/InKNIvky2KE?list=WL)
- [Design Management Walkthrough, January 2020](https://youtu.be/LzFRBMGl2SA) by Christen Dybenko, PM Knowledge Group
- [Web IDE walkthrough](https://youtu.be/6VI_SqkcQIQ?t=366) by William Chia sPMM CI/CD
- [Web IDE walkthrough, January 2020](https://www.youtube.com/watch?v=oDZu71nWctc&list=PL05JrBw4t0Kp0LPy37-rcLf9KYppouxPR&index=11&t=2s) by Kai Armstrong, PM Editor Group
- [Merge Request and Source Control as part of the Software Development Life Cycle](https://youtu.be/UuX-GnYWNwo?t=274) by William Chia sPMM CI/CD
- [GitLab Namespaces: users, groups and subgroups](https://www.youtube.com/watch?v=r0sJgjR2f5A) by Brendan O'Leary, Tech Evangelist
- [Rich Change Controls for Building Workflows you can Trust](https://youtu.be/uW95PV8d-w8?t=186) by Darwin Sanoy, Solutions Architect

#### Git トレーニング

- [Git in Gifs](https://www.youtube.com/playlist?list=PLFGfElNsQthZcx-NEyMsPl-dl3Q_p-3yv)
- [Why You Should Move To Git](https://www.youtube.com/watch?v=iVUqKJpHc5s)

#### 統合デモビデオ

- [Jira & Jenkins Integration Video](https://www.youtube.com/embed/Jn-_fyra7xQ)
- [How to setup the Jira Integration](https://www.youtube.com/watch?v=p56zrZtrhQE)
- [GitHub Integration Video](https://www.youtube.com/embed/qgl3F2j-1cI)

#### クリックスルーとライブデモ

- [すべての Marketing Click Through Demos](/handbook/marketing/brand-and-product-marketing/product-and-solution-marketing/demo/#click-throughs)
- [すべての Marketing Live Demos](/handbook/marketing/brand-and-product-marketing/product-and-solution-marketing/demo/#live-instructions)

#### 講演と顧客リファレンス

- [GitLab All the Way Down - A small startup's tale of growing with GitLab](https://youtu.be/t0Eh1sq9r5s?t=221)
- [GitLab Permissions as Code (Controlling permission to access repos)](https://youtu.be/W1YMBc6kwUE?t=74)
- [What not to do while using GitLab](https://youtu.be/Qc8caRTcSa4?t=221)
