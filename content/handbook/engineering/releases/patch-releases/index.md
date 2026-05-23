---
title: "Patch Releases"
upstream_path: /handbook/engineering/releases/patch-releases/
upstream_sha: 877082e5cd4baeabe3d6e802b3b4b1efdb6573f1
translated_at: "2026-05-23T00:00:00Z"
translator: claude
stale: false
lastmod: "2026-05-22T14:47:44+02:00"
---

## パッチリリースポリシー

パッチリリースは [セマンティックバージョニング](https://semver.org/) に従います: **パッチバージョンはバグ修正のみを含み、自動アップグレードしても安全です**。多くの顧客は、この保証を信頼しているため、最小限のテストでパッチリリースを適用します。

### パッチリリースに含まれるもの

- [メンテナンスポリシー](https://docs.gitlab.com/policy/maintenance/) に基づくバグおよびセキュリティ修正
- パフォーマンス回帰の修正

### パッチリリースに含まれないもの

- 新機能またはフィーチャーフラグの有効化
- 「出荷する必要がある」未完了の作業
- マンスリーリリースの締め切りに間に合わなかったために要求された変更

このポリシーは顧客を保護するために存在します。ビジネス上の圧力に基づいて交渉できるものではありません。オーナーシップ、例外プロセス、エスカレーションパスを含む一般的なリリースポリシーのフレームワークについては、[リリースポリシー](/handbook/engineering/releases/#release-policy) セクションを参照してください。

### なぜ機能をバックポートできないのか

[セマンティックバージョニングの契約](/handbook/engineering/releases#release-policy) を超えて、機能をパッチリリースに含めてはならない実務的なエンジニアリング上の理由があります: **stable ブランチがデフォルトブランチから乖離すると、バックポートは信頼できなくなります**。

機能がパッチリリースに導入されると:

- 新しいバグ修正が安定版に誤って導入される可能性があり、顧客が安定化したと信じていた本番環境で新しいバグに遭遇するリスクが高まります。
- 顧客の信頼が損なわれ、もはや自信を持ってアップグレードを計画したり、私たちのリリースコミットメントに依存したりできなくなり、クリティカルな修正を含む場合でもアップデートの採用に消極的になります。
- stable ブランチが予測できない形でデフォルトブランチから乖離します
- 周辺のコードが異なるため、将来のバグ修正がクリーンにチェリーピックできない可能性があります
- エンジニアは各バージョンごとに手動で修正を適応させる必要があり、エラーのリスクが高まります
- 本来はルーチンのバックポートであるべきものが、カスタムの開発作業になります

これは複合的な問題を生み出します。各機能例外は、その後のバックポートをより難しく、より遅く、よりエラーが起きやすくします。
メンテナンスの負担はポリシー違反のたびに増大し、最終的にはすべての顧客にタイムリーなセキュリティおよびバグ修正を提供する私たちの能力に影響します。

## パッチリリースの概要

パッチリリースは、[メンテナンス対象バージョン](https://docs.gitlab.com/policy/maintenance/#maintained-versions) にバグ修正とセキュリティ修正をバックポートするために、[GitLab メンテナンスポリシー](https://docs.gitlab.com/ee/policy/maintenance.html) に従って実施されます。

### 他のリリースタイプとの関係

パッチリリースは [マンスリーリリース](/handbook/engineering/releases/monthly-releases/) 中に作成された stable ブランチの上に構築されます:

- 修正は、パッチリリースに含める前に、まず GitLab.com にデプロイされなければなりません
- バックポートは [メンテナンス対象バージョン](https://docs.gitlab.com/policy/maintenance/#maintained-versions) の stable ブランチを対象とします
- パッチリリースに含まれるセキュリティ修正は、[内部リリース](/handbook/engineering/releases/internal-releases/) 経由で GitLab Dedicated により早く提供される場合もあります

メンテナンスポリシーの範囲外のパッチは、リリースマネージャーと依頼者によって要請され合意されなければなりません（詳細については [メンテナンスポリシー外のバージョンへのバックポート](https://docs.gitlab.com/ee/policy/maintenance.html#backporting-to-older-releases) を参照）。[メンテナンス対象バージョンのリスト](https://docs.gitlab.com/policy/maintenance/#maintained-versions) を参照してください。

パッチリリースは、継続的デプロイがブロックされないように、通常の GitLab.com デプロイと並行して準備されます。この方法により、私たちは公開リリース前に GitLab.com インスタンスにセキュリティ修正を適用できます。

GitLab エンジニアで、次のことをしようとしている場合:

- パッチリリースにセキュリティ修正を含めるには、[GitLab エンジニア向けセキュリティランブック](https://gitlab.com/gitlab-org/release/docs/-/blob/master/general/security/readme.md#security-guides-by-role) の手順に従ってください。
- パッチリリースにバグ修正を含めるには、[GitLab エンジニア向けパッチリリースランブック](https://gitlab.com/gitlab-org/release/docs/-/blob/master/general/patch/engineers.md) の手順に従ってください。GitLab およびその依存関係のセキュリティ脆弱性は、[セキュリティ是正 SLA](/handbook/security/product-security/vulnerability-management/sla/) に従って対処されます。

バグ修正は GitLab の canonical リポジトリで作業されますが、セキュリティ修正は、リリース前に脆弱性を明らかにすることを避けるため、ミラーリングされた GitLab セキュリティリポジトリで作業されます。

バックポートを準備しようとしている GitLab チームメンバーは、[パッチリリース情報ダッシュボード](#patch-release-information-dashboard) を参照してください。

## パッチリリースのケイデンス

パッチリリースは月に 2 回スケジュールされ、[マンスリーリリース](/handbook/engineering/releases/monthly-releases/#monthly-release-schedule)（第 3 木曜日）の前後の水曜日を対象とします。正確な日付は毎月異なり、運用上のニーズに基づいて変更される可能性のあるベストエフォートの目標です。

今後のパッチリリース日については、[リリース情報ダッシュボード](https://dashboards.gitlab.net/d/delivery-release_info/delivery3a-release-information?orgId=1)（内部）を確認してください。

### SLO コミットメント

計画されたパッチリリースは、緊急リリースを必要とせずに目標リリース日を満たすようにスケジュールされます。

- 詳細なセキュリティ脆弱性是正 SLA については、[セキュリティ是正 SLA](/handbook/security/product-security/vulnerability-management/sla/) を参照してください。
- 詳細なバグ脆弱性是正 SLA については、[バグ是正 SLA](/handbook/product-development/how-we-work/issue-triage/#severity-slos) を参照してください。

## パッチリリースのタイプ

パッチリリースには、バグおよび脆弱性修正を含むパッケージを準備、検証、公開するための、多くのチーム間の複数のタッチポイントがあります。

GitLab には、2 種類のパッチリリースプロセスがあります:

1. **Scheduled（デフォルト）**: [GitLab メンテナンスポリシー](https://docs.gitlab.com/ee/policy/maintenance.html) に基づいて、利用可能なすべてのバグおよび脆弱性修正を公開する SLO 駆動のパッチ。[マンスリーリリース週](/handbook/engineering/releases/monthly-releases/#monthly-release-schedule) の前後の水曜日に月 2 回スケジュールされ、計画されたパッチは [バグ SLO](/handbook/product-development/how-we-work/issue-triage/#severity-slos) と [セキュリティ是正 SLA](/handbook/security/product-security/vulnerability-management/sla/) に準拠します。[`critical` 脆弱性](/handbook/security/product-security/vulnerability-management/sla/) を含むパッチは、クリティカルパッチとみなされます。
2. **Out-of-band**: 通常の [パッチリリースケイデンス](#patch-release-cadence) 外のパッチで、高 severity のバグまたはクリティカルな脆弱性の緩和のために厳密に予約されています。これらのアドホックなパッチは、宣言された [インシデント](/handbook/engineering/infrastructure-platforms/incident-management/#reporting-an-incident) からのみ発生し、締め切りに間に合わなかったことへの対応や標準のリリースポリシーの回避に使用してはなりません。
パッチリリースケイデンスに従い、アウトオブバンドパッチは水曜日に提供されます。

   - **クリティカルなセキュリティ脆弱性** — [セキュリティ RCA](/handbook/security/root-cause-analysis/) が **必須** であり、計画外のリリースを強いた脆弱性を導入したことに責任を持つチームによって完了されなければなりません。この説明責任に例外はありません。

   - **バグ修正** — [例外プロセス](/handbook/engineering/releases#exception-process) が **必須** であり、いかなるアウトオブバンドパッチも実行される前に従わなければなりません。リリースマネージャーは、ビジネス上の圧力にかかわらず、このプロセスを完了していないリクエストを拒否する権限を持ちます。バグ駆動のアウトオブバンドパッチはセキュリティインシデントの結果ではないため、次の属性を持つ [インシデントを宣言](/handbook/engineering/infrastructure-platforms/incident-management/#reporting-an-incident) しなければなりません:
      - "Out-ofBand Patch" としてマーク
      - Severity S1 または S2
      - 'Inadequate testing or QA' または 'Miscommunication or coordination gap' の Contributing Factor

      GitLab プラットフォームの信頼性と可用性を維持するため、[インシデントレビュー](/handbook/engineering/infrastructure-platforms/incident-review/) と [FCL](/handbook/engineering/#feature-change-locks) の完了は必須です。

## パッチリリースプロセス

パッチリリースのプロセスは、すべてのタイプで同じですが、1 つの重要な違いがあります: 計画されたパッチはパッチリリース準備の時点で準備が整っているすべてのバグおよびセキュリティ修正を含みますが、計画外のパッチはおそらく高 severity の脆弱性のセキュリティ修正のみを含みます。

エンドツーエンドのパッチリリースプロセスは、次のステージで構成されます:

![パッチリリースの概要](/images/engineering/releases/patch-releases/patch-release-overview.jpg)

- [ダイアグラムのソース - 内部](https://docs.google.com/presentation/d/12JXlLnZ8lQp7ATdaSoL4x_oCUv04rmqzYp6dQb8AXHE/edit#slide=id.g2d0bc50ab08_0_5)

GitLab エンジニアは常時、それぞれの [メンテナンス対象バージョン](https://docs.gitlab.com/policy/maintenance/#maintained-versions) にバグ修正と脆弱性修正を準備しています:

- **ステップ 1a: バグ修正の準備** — [メンテナンス対象バージョン](https://docs.gitlab.com/policy/maintenance/#maintained-versions) にバグ修正をバックポートするマージリクエストが GitLab エンジニアによって準備されます:
  - マージリクエストは、バグ修正が品質基準を満たすことを保証するため、test-on-omnibus パイプライン経由でエンドツーエンドテストを実行します。
  - test-on-omnibus パイプラインが失敗した場合、[Developer Experience](/handbook/engineering/infrastructure-platforms/developer-experience/) チームによるレビューが必要です。
  - マージリクエストは、[メンテナンス対象バージョン](https://docs.gitlab.com/policy/maintenance/#maintained-versions) に関連付けられた stable ブランチで GitLab メンテナーによってマージされます。
- **ステップ 1b: 脆弱性修正の準備** — エンジニアは関連する [セキュリティリポジトリ](https://gitlab.com/gitlab-org/security) で脆弱性を修正します。修正は、次を備えた [セキュリティ実装 Issue](https://gitlab.com/gitlab-org/release/docs/-/blob/master/general/security/terminology.md) を持っている場合にのみ完了とみなされます:
  - すべてのステップが完了したことを示すため、すべてのチェックボックスがチェックされている。
  - PSIRT チームメンバーと Maintainer に承認された、デフォルトブランチを対象とする MR。
  - 意図する各バージョン向けのバックポート MR。ほとんどの場合、これはサポートされている各バージョンをカバーするために 4 つの MR を意味します。各 MR はパイプラインがパスし、必要な承認を得て、処理のためにリリースボットにアサインされている必要があります。
  - `~"security-target"` ラベルが適用されている。これにより Issue が自動的にレビューされ、準備が整っていればセキュリティトラッキング Issue にリンクされます。

計画された期日の 2 日前に、リリースマネージャーはパッチリリースプロセスを開始し、準備されたすべてのバグおよびセキュリティ修正が安全にリリースされることを確認します。GitLab.com へのデプロイは並行して実行されます。

パッチリリースには次のフェーズがあります:

- **ステップ 2: 最初のステップ** リリース準備は、リリースマネージャーが `prepare` chatops コマンドを実行して、パッチリリースをガイドする新しいリリースタスク Issue を作成すると始まります。ここから、リリースを準備するために必要な初期セットアップとコミュニケーション Issue を完了するためのチェックリストに従います。
- **ステップ 3: 早期マージフェーズ** — リリースマネージャーはセキュリティ修正を GitLab.com にデプロイします。セキュリティトラッキング Issue にリンクされた `~"security-target"` ラベル付きの修正は、デフォルトブランチを対象とする MR がマージされます。これにより、修正がセルフマネージドユーザーにリリースされる前に GitLab.com にデプロイできます。
- **ステップ 4: バックポートのマージ** — リリース期日の前日に、サポートされているバージョンを対象とするセキュリティ修正を含むバックポートがマージされます。この時点で、パッチに含まれるすべてのものが GitLab.com にデプロイされている必要があり、バックポートはすべての stable ブランチに適用される必要があります。
- **ステップ 5: リリース準備*** — すべての修正がデプロイされマージされたら、リリースマネージャーはパッケージを準備しテストします。
  - **ステップ 5a: タグ付け** — リリースマネージャーは [メンテナンス対象バージョン](https://docs.gitlab.com/policy/maintenance/#maintained-versions) 向けの新しいパッチリリースパッケージにタグを付けます。
  - **ステップ 5b: デプロイ** — パッチリリースパッケージが GitLab リリースインスタンスにデプロイされテストされます。
  - **ステップ 5c: リリース** — リリースマネージャーはパッチリリースに関連付けられたパッケージを公開します。
- **ステップ 6: 最終ステップ** — この時点で、パッチリリースパッケージはすべてのユーザーが利用できます。リリースマネージャーはパッチリリースの最終ステップを締めくくります。
  - **ステップ 6a**: パッチリリースのブログ記事が公開されます
  - **ステップ 6b**: デフォルトブランチ、stable ブランチ、タグが Security から Canonical に同期され、オープンな作業のデフォルト状態に戻ります。

## パッチリリース情報ダッシュボード

GitLab チームメンバーは、今後のパッチリリースに関する次の情報について、[内部 Grafana ダッシュボード "Release Information"](https://dashboards.gitlab.net/d/delivery-release_info/delivery3a-release-information?orgId=1) を表示できます:

- 今後のパッチリリースバージョン（stable バージョン + 2 つのバックポートバージョン）
- 今後のパッチリリース日
- パッチリリースの現在のステータス
  - Open: `security-target` ラベル付きのセキュリティ Issue に関連付けられた未マージのセキュリティ MR、およびマージ済みのバグ修正 MR が、次のパッチリリースに含まれることが期待されます。
  - Warning: チームがバグおよびセキュリティ修正をマージ可能な状態にすべきであることを示すシグナルです。
  - Closed: デフォルトブランチのセキュリティ MR がマージされ、それ以上のバグまたはセキュリティ修正は含まれません。

この情報を表示するために使用されるメトリクスは、[パッチリリースプロセス](#patch-release-process) を通じて自動的に更新されます。

## パッチリリースの FAQ

### 次のパッチリリースにバグ修正をバックポートするには?

GitLab エンジニアで、パッチリリースにバグ修正を含めようとしている場合は、[GitLab エンジニア向けパッチリリースランブック](https://gitlab.com/gitlab-org/release/docs/-/blob/master/general/patch/engineers.md) の手順に従ってください。

### 次のパッチリリース情報はどこで見つけられますか?

対象バージョン、スケジュールされた日付、ステータスを含むパッチリリース情報は、内部 Grafana [リリースダッシュボード](https://dashboards.gitlab.net/d/delivery-release_info/delivery3a-release-information?orgId=1) で見つけられます。

### セキュリティ Issue が自分にアサインされました。どこから始めればよいですか?

詳細については、[Security process as Engineer](https://gitlab.com/gitlab-org/release/docs/-/blob/master/general/security/engineer.md) ドキュメントを参照してください。

### なぜ自分のセキュリティ修正がパッチリリースに含まれなかったのですか?

[GitLab Security](https://gitlab.com/gitlab-org/security/) で作成されたセキュリティ Issue は、セキュリティリリースに含めるためにセキュリティトラッキング Issue に関連付けられる必要があります。必ず [セキュリティ Issue テンプレート](https://gitlab.com/gitlab-org/gitlab/-/blob/master/.gitlab/issue_templates/Security%20developer%20workflow.md) を使用し、記載された手順に従ってください。

### セキュリティ Issue に取り組む際、いくつのバックポートが必要ですか?

`master` を対象とするマージリクエストに加えて、それぞれの [メンテナンス対象バージョン](https://docs.gitlab.com/policy/maintenance/#maintained-versions) の stable ブランチを対象とするバックポートが必要になります。
詳細については、[セキュリティバックポート](https://gitlab.com/gitlab-org/release/docs/-/blob/master/general/security/engineer.md#backports) を参照してください。

### セキュリティマージリクエストを取り消すには?

マージ済みのセキュリティマージリクエストの取り消しは **強く推奨されず**、[PSIRT チーム](/handbook/security/product-security/psirt/) からの明示的な承認が必要です。セキュリティ修正のロールバックには深刻な結果があります:

1. ライブのセキュリティ保護を取り除くことで、GitLab.com、セルフマネージド、Dedicated インスタンスの完全性を損ないます
1. 代替の修正なしに取り消すと、リリースが公開された瞬間に脆弱性を公に開示するリスクがあります。これは受け入れられません
1. パッチリリースは厳密な時間的制約の下で運用されています。リリースの遅延を避けるために間に合うように代替の修正を準備できる保証はありません

セキュリティ脆弱性が二次的なバグを導入した場合、対応はその severity によって異なります:

- **脆弱性ではないバグ (S3 と S4)**: 適切な道筋は、パッチリリースが公開された後に、通常のパッチリリースプロセスに従って canonical リポジトリで問題を修正することです。
- **脆弱性ではないバグ（高 severity: S1 と S2）**: PSIRT とリリースマネージャーに直ちに連絡を取り、次のステップを調整します。一方的に取り消そうとしないでください。

セキュリティ修正が公開されているかどうかにかかわらず、いかなる取り消しも、進める前に **[PSIRT チーム](/handbook/security/product-security/psirt/) からの明示的な書面での承認を得なければなりません**。緩和の選択肢とステップバイステップのガイダンスについては、[How to Mitigate Bugs Introduced by Security Merge Request](https://gitlab.com/gitlab-org/release/docs/-/blob/master/general/security/bugs_introduced_by_security_merge_request.md) ランブックを参照してください。
