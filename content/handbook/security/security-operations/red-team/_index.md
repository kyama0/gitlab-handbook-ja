---
title: "レッドチーム"
no_list: true
upstream_path: /handbook/security/security-operations/red-team/
upstream_sha: 1e195b58b9f249ff10bd0e705106c320fee86141
translated_at: "2026-05-09T17:00:00Z"
translator: claude
stale: false
---

## お探しの情報は何ですか？

- 「**これはレッドチームですか？／私が見ているアクティビティはレッドチームのオペレーションの一部ですか？**」 悪意があるかもしれないものを発見し、それが私たちかもしれないと思った方 :point_right: [これはレッドチームですか？](how-we-operate/#is-this-the-red-team)
- 「**かなり面白そうな攻撃者関連のアイデアがあります！**」 :point_right: [お問い合わせください](#contact-us)
- 「**ペネトレーションテストはやっていますか？**」 :point_right: いいえ。:smile: 私たちは脆弱性の列挙は行いません。[提供サービス](#services-we-offer)を参照してください
- 「**レッドチーミングのスキルを高めたい**」 :point_right: [リソース](#additional-resourcesfurther-reading)、[Club Red](opportunistic-attacks#club-red)を参照
- 「**私をハッキングできますか？**」 :point_right: あなたのアイデアについて私たちと話しましょう！[お問い合わせください](#contact-us)
- 「**インシデントを手伝ってもらえますか？** これらのログにハッカー関連のものは見えますか？」 :point_right: [お問い合わせください](#contact-us)
- 「**GitLab 製品のバグ発見を手伝ってもらえますか？**」 :point_right: それなら[セキュリティリサーチ](../../product-security/security-platforms-architecture/security-research/)に聞いた方がよいでしょう

## お問い合わせ {#contact-us}

- GitLab チームメンバー:
  - Slack の `#sd_security_redteam` またはダイレクトメッセージで私たちと話してください。
  - [私たちの内部 Issue トラッカー](https://gitlab.com/gitlab-com/gl-security/security-operations/redteam/redteam-internal/red-team-operations/-/issues)で Issue を作成してください
- 一般の方:
  - [私たちのパブリックプロジェクト](https://gitlab.com/gitlab-com/gl-security/security-operations/redteam/redteam-public)のいずれかで Issue を作成してください

## 一般情報

### ビジョン

透明性、コラボレーション、技術的卓越性を通じて攻撃的セキュリティ業界を牽引しながら、進化する現実世界の脅威に対する GitLab の防御を継続的に強化すること。

### ミッション

私たちは現実世界の敵対者を模倣し、GitLab の脅威耐性（サイバー攻撃を予防、検知、対応する能力）を向上させます。安全かつ管理された方法で十分に計画された演習を実施することで、GitLab 全体のチームに防御能力を実践し向上させる機会を提供します。

私たちはこれを以下の方法で達成します:

- 脅威インテリジェンスと連携し、最も関連性の高い脅威を特定して模倣する
- GitLab 全体のチームと連携し、セキュリティ上の観察を実行可能な改善に変換する
- 業界の同業者とオープンに協力してセキュリティプラクティスを共有する

私たちの仕事は敵対者として考え行動することを必要としますが、GitLab のバリューにしっかりと根ざし続けます。私たちは意図的にレッドチーミングに透明性とコラボレーションをもたらし、組織にとって最良の結果を達成するためにすべてのオペレーションを慎重かつ安全に実施します。

## チーム

レッドチームは Security Operations 部門の一部です。[Workday の GitLab 組織図と私たちのチームメンバー紹介を見る](https://www.myworkday.com/gitlab/d/home.htmld)。

レッドチームの役割に関する詳細は、[ジョブファミリー説明](/job-description-library/security/red-team)で確認できます。

## 提供サービス {#services-we-offer}

私たちが行うすべてにおいて、[エンゲージメントルール (RoE)](how-we-operate/rules-of-engagement) に従います。

### ステルスオペレーション

私たちの主要サービスです。ステルスオペレーションは、GitLab に関連する脅威の模倣に焦点を当てています。[脅威インテリジェンス](../threat-intelligence)と緊密に連携し、GitLab にセキュリティリスクをもたらす可能性のある敵対者を特定します。その敵対者と類似のツールを開発し、GitLab のシステムに対して攻撃を実行します。私たちはステルスを使用し、不必要なリスクを導入することなく現実的に防御をテストします。[詳細はこちら...](stealth-operations)

### 機会主義的攻撃

これらは、潜在的な初期アクセスベクトルが私たちの注意を引いたときに、GitLab システムに対して行う自発的な攻撃です。「ステルスオペレーション」は一般的に特定の敵対者やキャンペーンを模倣するように設計されているのに対し、「機会主義的攻撃」は、目標を達成するために何でも使う、創造的かつ執拗な追求です。

発見した内容によっては、私たち自身がインシデントを発令することも、攻撃者がそうするように発見されるまで継続することもできます。これらの攻撃には特定のタイムラインはなく、数日から数か月続くこともあります。[詳細はこちら...](opportunistic-attacks/)

### パープルチーミング

パープルチームは、レッドチームとブルーチーム（私たちの防御チーム、通常は [SIRT](../sirt/) または [Signals Engineering](../signals-engineering)）の協力的な演習を表します。これらは以下のいずれかになります:

- フラッシュオペレーション。これは [脅威インテリジェンスフラッシュレポート](../threat-intelligence/#threat-intelligence-reports) によってトリガーされる 1〜2 週間の演習で、新興の脅威に対する私たちの防御を迅速にテストするためのものです。または
- 長期的なコラボレーション

[詳細はこちら...](purple-teaming/)

### リサーチ

新興のテクノロジーやツールを理解することで、敵対者の進化する戦術を予測できます。それはまた、攻撃者をより効果的に模倣できることを意味します。

正式なオペレーションと機会主義的攻撃の両方には広範なリサーチが必要であり、これらの活動を計画する際にはそれを考慮に入れます。そのコンテキスト以外では、レッドチームはセキュリティ業界やより広い GitLab コミュニティの他の人々に役立つ情報を提供する意図でリサーチを行うことがあります。

例:

- ソーシャルエンジニアリング技術
- ステルスおよび防御回避技術
- 攻撃的セキュリティのための AI
- 列挙／スキャンツール、コマンド＆コントロール (C2) フレームワークなどのツール
- 野生で発見されたマルウェア

私たちは、責任ある開示の一環として、私たちのリサーチの一部を要約したテックノートを公開しています。[テックノート、ブログ、その他のリサーチのリスト](https://gitlab-com.gitlab.io/gl-security/security-tech-notes/red-team-tech-notes/)と[過去のツールおよび技術のパブリック Git リポジトリ](https://gitlab.com/gitlab-com/gl-security/security-operations/redteam/redteam-public/)を探索してください。

## どのように運用するか

レッドチームは、事前定義された一連の[エンゲージメントルール](how-we-operate/rules-of-engagement)の下で運用します。これらのルールは、スコープを決定するためのガイドライン、エンゲージメント中に採用するバリュー、セキュリティチームとしてどのように協力するか、そしてエンゲージメント中に発見した脆弱性やエクスプロイトをどのようにエスカレーションするかを提供します。

私たちはまた、関連する攻撃者活動のカバレッジを確保するための MITRE ヒートマップを含む、内部で利用可能なメトリクスを通じて結果を追跡します。

[詳細はこちら...](how-we-operate/)

## 追加のリソース／参考資料 {#additional-resourcesfurther-reading}

### GitLab リソース

- [パブリックレッドチームリポジトリ](https://gitlab.com/gitlab-com/gl-security/security-operations/redteam/redteam-public)
  - 公開されたツール、スクリプト／コンセプト実証、テックノートを含みます
- [内部レッドチームリポジトリ](https://gitlab.com/gitlab-com/gl-security/security-operations/redteam/redteam-internal)（GitLab チームメンバー専用）
- [テックノート、ブログ、その他のリサーチのリスト](https://gitlab-com.gitlab.io/gl-security/security-tech-notes/red-team-tech-notes/)
- [過去のツールおよび技術のパブリック Git リポジトリ](https://gitlab.com/gitlab-com/gl-security/security-operations/redteam/redteam-public/)

### 外部リソース

- [Red Team Development and Operations](https://redteam.guide/): Joe Vest 氏と James Tubberville 氏による優れた書籍。
- [Purple Teaming Execution Framework](https://github.com/scythe-io/purple-team-exercise-framework): Scythe 社による別の素晴らしいリソース。
- [MITRE ATT&CK: Getting Started](https://attack.mitre.org/resources/getting-started/): 私たちの仕事の多くの基盤として使用されている ATT&CK フレームワークに関連するリソース集。

## これはレッドチームですか？

GitLab チームメンバー: 怪しげなものを見つけて私たちに確認したいですか？私たちはこの質問には答えません。理由については [_これはレッドチームですか？_](how-we-operate/#is-this-the-red-team) で詳しく読んでください。

**すべての疑わしい活動は、悪意がある可能性があるものとして扱い、それに応じて対応する必要があります**。
