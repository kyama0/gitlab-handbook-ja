---
title: "Patch Releases"
upstream_path: /handbook/engineering/releases/patch-releases/
upstream_sha: c6f416c14ee9f53cb671d49ff11a9671c68d9326
translated_at: "2026-06-09T00:00:00Z"
translator: claude
stale: false
lastmod: "2026-06-09T09:11:01-06:00"
---

## パッチリリースポリシー

パッチリリースは [セマンティックバージョニング](https://semver.org/) に従います: **パッチバージョンはバグ修正のみを含み、自動アップグレードしても安全です**。多くの顧客は、この保証を信頼しているため、最小限のテストでパッチリリースを適用します。

### パッチリリースに含まれるもの

- [メンテナンスポリシー](https://docs.gitlab.com/policy/maintenance/) に基づくバグ修正およびセキュリティ修正
- パフォーマンスのリグレッション修正

### パッチリリースに含まれないもの

- 新機能やフィーチャーフラグの有効化
- 「リリースが必要」とされる未完了の作業
- 月次リリースの締め切りに間に合わなかったことによって要求される変更

このポリシーは顧客を保護するために存在します。ビジネス上の圧力に基づいて交渉できるものではありません。所有権、例外プロセス、エスカレーションパスを含む一般的なリリースポリシーのフレームワークについては、[Release Policy](/handbook/engineering/releases/#release-policy) セクションを参照してください。

### 機能をバックポートできない理由

[セマンティックバージョニングの契約](/handbook/engineering/releases#release-policy) を超えて、機能をパッチリリースに含めてはならない実務的なエンジニアリング上の理由があります: **stable ブランチがデフォルトブランチから乖離すると、バックポートの信頼性が低下します**。

機能がパッチリリースに導入されると:

- 新しいバグ修正が誤って stable バージョンに混入し、顧客が安定化されたと考えていた本番環境で新しいバグに遭遇するリスクが高まります。
- 顧客の信頼が損なわれ、アップグレードを自信を持って計画したり、私たちのリリースコミットメントに依存したりできなくなり、重要な修正が含まれている場合でもアップデートの採用をためらうようになります。
- stable ブランチがデフォルトブランチから予測できない形で乖離します
- 周辺コードが異なるため、将来のバグ修正がクリーンに cherry-pick できなくなる可能性があります
- エンジニアはバージョンごとに手作業で修正を適合させなければならず、エラーのリスクが高まります
- 本来は定型的なバックポートであるべきものが、カスタムの開発作業になってしまいます

これは複合的な問題を生み出します: それぞれの機能の例外が、後続のバックポートをより難しく、より遅く、よりエラーが起きやすくします。
ポリシー違反のたびにメンテナンスの負担が増大し、最終的にはすべての顧客にタイムリーなセキュリティ修正やバグ修正を届ける能力に影響します。

## パッチリリースの概要

パッチリリースは、バグ修正とセキュリティ修正を [メンテナンス対象バージョン](https://docs.gitlab.com/policy/maintenance/#maintained-versions) にバックポートするために、[GitLab メンテナンスポリシー](https://docs.gitlab.com/ee/policy/maintenance.html) に従って実施されます。

### 他のリリースタイプとの関係

パッチリリースは、[月次リリース](/handbook/engineering/releases/monthly-releases/) 中に作成された stable ブランチの上に構築されます:

- 修正はパッチリリースに含める前に、まず GitLab.com にデプロイされなければなりません
- バックポートは [メンテナンス対象バージョン](https://docs.gitlab.com/policy/maintenance/#maintained-versions) の stable ブランチをターゲットにします
- パッチリリースに含まれるセキュリティ修正は、[内部リリース](/handbook/engineering/releases/internal-releases/) を介して GitLab Dedicated にもより早く提供される場合があります

メンテナンスポリシーの範囲外のパッチは、Release Manager と要求者によって要求され合意される必要があります（詳細は [メンテナンスポリシーの範囲外バージョンへのバックポート](https://docs.gitlab.com/ee/policy/maintenance.html#backporting-to-older-releases) を参照）。[メンテナンス対象バージョンの一覧](https://docs.gitlab.com/policy/maintenance/#maintained-versions) を参照してください。

パッチリリースは、継続的デプロイがブロックされないように、通常の GitLab.com デプロイと並行して準備されます。このようにして、公開リリースの前に GitLab.com インスタンスにセキュリティ修正を適用できます。

GitLab エンジニアで、以下を行いたい場合:

- パッチリリースにセキュリティ修正を含めたい場合は、[GitLab エンジニア向けセキュリティ runbook](https://gitlab.com/gitlab-org/release/docs/-/blob/master/general/security/readme.md#security-guides-by-role) の手順に従ってください。
- パッチリリースにバグ修正を含めたい場合は、[GitLab エンジニア向けパッチリリース runbook](https://gitlab.com/gitlab-org/release/docs/-/blob/master/general/patch/engineers.md) の手順に従ってください。GitLab およびその依存関係のセキュリティ脆弱性は、[セキュリティ修復 SLA](/handbook/security/product-security/vulnerability-management/sla/) に従って対処されます。

バグ修正は GitLab の canonical リポジトリで作業されますが、セキュリティ修正は、リリース前に脆弱性が明らかになるのを防ぐため、ミラーリングされた GitLab セキュリティリポジトリで作業されます。

バックポートの準備を行う GitLab チームメンバーは、[パッチリリース情報ダッシュボード](#patch-release-information-dashboard) を参照してください。

## パッチリリースのケイデンス

パッチリリースは月に 2 回スケジュールされ、[月次リリース](/handbook/engineering/releases/monthly-releases/#monthly-release-schedule)（第 3 木曜日）の前後の水曜日をターゲットにします。正確な日付は毎月異なり、運用上のニーズに応じて変動する可能性があるベストエフォートのターゲットです。

今後のパッチリリース日については、[Release Information ダッシュボード](https://dashboards.gitlab.net/d/delivery-release_info/delivery3a-release-information?orgId=1)（内部）を確認してください。

### SLO コミットメント

計画されたパッチリリースは、緊急リリースを必要とせずにターゲットのリリース日を満たすようにスケジュールされます。

- 詳細なセキュリティ脆弱性修復 SLA については、[セキュリティ修復 SLA](/handbook/security/product-security/vulnerability-management/sla/) を参照してください。
- 詳細なバグ脆弱性修復 SLA については、[バグ修復 SLA](/handbook/product-development/how-we-work/issue-triage/#severity-slos) を参照してください。

## パッチリリースのタイプ

パッチリリースには、バグ修正と脆弱性修正を含むパッケージを準備、検証、公開するために、多くのチーム間での複数のタッチポイントがあります。

GitLab には、2 種類のパッチリリースプロセスがあります:

1. **スケジュール（デフォルト）**: [GitLab メンテナンスポリシー](https://docs.gitlab.com/ee/policy/maintenance.html) に従って利用可能なすべてのバグ修正と脆弱性修正を公開する、SLO 駆動のパッチ。[月次リリース週](/handbook/engineering/releases/monthly-releases/#monthly-release-schedule) の前後の水曜日に月 2 回スケジュールされ、計画されたパッチは [バグ SLO](/handbook/product-development/how-we-work/issue-triage/#severity-slos) と [セキュリティ修復 SLA](/handbook/security/product-security/vulnerability-management/sla/) に準拠します。[`critical` 脆弱性](/handbook/security/product-security/vulnerability-management/sla/) を含むパッチは critical パッチとみなされます。
2. **アウトオブバンド**: 通常の [パッチリリースケイデンス](#patch-release-cadence) の範囲外のパッチで、高深刻度のバグまたは critical 脆弱性の緩和のためにのみ厳密に予約されています。これらのアドホックなパッチは、宣言された [インシデント](/handbook/engineering/infrastructure-platforms/incident-management/#reporting-an-incident) からのみ発生し、間に合わなかった締め切りに対応したり、標準のリリースポリシーを回避したりするために決して使用してはなりません。
パッチリリースケイデンスに従い、アウトオブバンドパッチは水曜日に提供されます。

   - **Critical セキュリティ脆弱性** の場合 - [セキュリティ RCA](/handbook/security/root-cause-analysis/) が **必須** であり、アウトオブバンドリリースを強制した脆弱性を導入した責任を負うチームによって完了されなければなりません。この説明責任に例外はありません。

   - **バグ修正** の場合 - [例外プロセス](/handbook/engineering/releases#exception-process) が **必須** であり、アウトオブバンドパッチを実行する前に従わなければなりません。Release Manager は、ビジネス上の圧力にかかわらず、このプロセスを完了していない要求を拒否する権限を有します。次の属性を持つ [インシデントを宣言](/handbook/engineering/infrastructure-platforms/incident-management/#reporting-an-incident) しなければなりません:
      - 「Out-of-Band Patch」としてマークする
      - 深刻度 S1 または S2
      - 寄与要因として「Inadequate testing or QA」または「Miscommunication or coordination gap」

      あらゆる GitLab プラットフォームの信頼性と可用性を維持するためのバグ修正では、**[インシデントレビュー](/handbook/engineering/infrastructure-platforms/incident-review/) と [FCL](/handbook/engineering/#feature-change-locks) の完了が必須です**。

## パッチリリースプロセス

パッチリリースのプロセスは、1 つの重要な違いを除いてすべてのタイプで同じです: 計画されたパッチは、パッチリリース準備時点で準備が整っているすべてのバグ修正とセキュリティ修正を含みますが、計画外のパッチはおそらく高深刻度の脆弱性に対するセキュリティ修正のみを含みます。

エンドツーエンドのパッチリリースプロセスは、次のステージで構成されます:

![patch release overview](/images/engineering/releases/patch-releases/patch-release-overview.jpg)

- [図のソース - 内部](https://docs.google.com/presentation/d/12JXlLnZ8lQp7ATdaSoL4x_oCUv04rmqzYp6dQb8AXHE/edit#slide=id.g2d0bc50ab08_0_5)

任意の時点で、GitLab エンジニアはそれぞれの [メンテナンス対象バージョン](https://docs.gitlab.com/policy/maintenance/#maintained-versions) に対するバグ修正と脆弱性修正を準備します:

- **ステップ 1a: バグ修正の準備** - [メンテナンス対象バージョン](https://docs.gitlab.com/policy/maintenance/#maintained-versions) にバグ修正をバックポートするマージリクエストが GitLab エンジニアによって準備されます:
  - マージリクエストは、バグ修正が品質基準を満たすことを保証するため、test-on-omnibus パイプラインを介してエンドツーエンドテストを実行します。
  - test-on-omnibus パイプラインが失敗した場合、[Developer Experience](/handbook/engineering/infrastructure-platforms/developer-experience/) チームによるレビューが必要です。
  - マージリクエストは、[メンテナンス対象バージョン](https://docs.gitlab.com/policy/maintenance/#maintained-versions) に関連付けられた stable ブランチで GitLab メンテナーによってマージされます。
- **ステップ 1b: 脆弱性修正の準備** - エンジニアは関連する [セキュリティリポジトリ](https://gitlab.com/gitlab-org/security) で脆弱性を修正します。修正は、次の内容を含む [セキュリティ実装 Issue](https://gitlab.com/gitlab-org/release/docs/-/blob/master/general/security/terminology.md) を持つ場合にのみ完了とみなされます:
  - すべてのステップが完了したことを示すために、すべてのチェックボックスがチェックされている。
  - PSIRT チームメンバーとメンテナーが承認した、デフォルトブランチをターゲットとする MR。
  - 各対象バージョンごとのバックポート MR。ほとんどの場合、これは各サポート対象バージョンをカバーするための 4 つの MR を意味します。各 MR はパイプラインが通過し、必要な承認を得て、処理のためにリリースボットに割り当てられている必要があります。
  - `~"security-target"` ラベルが付与されている。これにより Issue が自動的にレビューされ、準備が整っていればセキュリティ追跡 Issue にリンクされます。

計画された期日の 2 日前、Release Manager はパッチリリースプロセスを開始し、準備されたすべてのバグ修正とセキュリティ修正が安全にリリースされることを確認します。GitLab.com へのデプロイは並行して実行されます。

パッチリリースには次のフェーズがあります:

- **ステップ 2: 最初のステップ** Release Manager が `prepare` chatops コマンドを実行して、パッチリリースをガイドする新しいリリースタスク Issue を作成すると、リリース準備が始まります。ここから、リリースの準備に必要な初期セットアップとコミュニケーション Issue を完了するためのチェックリストに従います。
- **ステップ 3: 早期マージフェーズ** - Release Manager はセキュリティ修正を GitLab.com にデプロイします。セキュリティ追跡 Issue にリンクされた `~"security-target"` ラベル付きの修正は、デフォルトブランチをターゲットとする MR がマージされます。これにより、セルフマネージドユーザーにリリースされる前に、修正を GitLab.com にデプロイできます。
- **ステップ 4: バックポートのマージ** - リリース期日の前日、サポート対象バージョンをターゲットとするセキュリティ修正を含むバックポートがマージされます。この時点で、パッチに含まれるすべてのものが GitLab.com にデプロイされていなければならず、バックポートはすべての stable ブランチに適用されなければなりません。
- **ステップ 5: リリース準備*** - すべての修正がデプロイおよびマージされると、Release Manager はパッケージを準備してテストします。
  - **ステップ 5a: タグ付け** - Release Manager は [メンテナンス対象バージョン](https://docs.gitlab.com/policy/maintenance/#maintained-versions) の新しいパッチリリースパッケージにタグを付けます。
  - **ステップ 5b: デプロイ** - パッチリリースパッケージが GitLab リリースインスタンスにデプロイされ、テストされます。
  - **ステップ 5c: リリース** - Release Manager はパッチリリースに関連付けられたパッケージを公開します。
- **ステップ 6: 最終ステップ** - この時点で、パッチリリースパッケージはすべてのユーザーが利用できます。Release Manager はパッチリリースの最終ステップを完了します。
  - **ステップ 6a**: パッチリリースのブログ記事が公開される
  - **ステップ 6b**: デフォルトブランチ、stable ブランチ、タグが Security から Canonical に同期され、オープンに作業するデフォルト状態に戻る。

## パッチリリース情報ダッシュボード

GitLab チームメンバーは、今後のパッチリリースに関する次の情報を [内部 Grafana ダッシュボード「Release Information」](https://dashboards.gitlab.net/d/delivery-release_info/delivery3a-release-information?orgId=1) で確認できます:

- 今後のパッチリリースバージョン（stable バージョン + 2 つのバックポートバージョン）
- 今後のパッチリリース日
- パッチリリースの現在のステータス
  - Open: `security-target` ラベルの付いたセキュリティ Issue に関連付けられた未マージのセキュリティ MR、およびマージ済みのバグ修正 MR が、次のパッチリリースに含まれることが期待されます。
  - Warning: チームがバグ修正とセキュリティ修正をマージできる状態にすべきであることを示すシグナルです。
  - Closed: デフォルトブランチのセキュリティ MR がマージされ、それ以上のバグ修正やセキュリティ修正は含まれません。

この情報を表示するために使用されるメトリクスは、[パッチリリースプロセス](#patch-release-process) を通じて自動的に更新されます。

## パッチリリースの FAQ

### 次のパッチリリースにバグ修正をバックポートするにはどうすればよいですか？

パッチリリースにバグ修正を含めたい GitLab エンジニアは、[GitLab エンジニア向けパッチリリース runbook](https://gitlab.com/gitlab-org/release/docs/-/blob/master/general/patch/engineers.md) の手順に従ってください。

### 次のパッチリリース情報はどこで見つけられますか？

ターゲットバージョン、スケジュールされた日付、ステータスを含むパッチリリース情報は、内部 Grafana の [リリースダッシュボード](https://dashboards.gitlab.net/d/delivery-release_info/delivery3a-release-information?orgId=1) で見つけられます

### セキュリティ Issue が私に割り当てられましたが、どこから始めればよいですか？

詳細については、[エンジニアとしてのセキュリティプロセス](https://gitlab.com/gitlab-org/release/docs/-/blob/master/general/security/engineer.md) のドキュメントを参照してください。

### なぜ私のセキュリティ修正がパッチリリースに含まれなかったのですか？

[GitLab Security](https://gitlab.com/gitlab-org/security/) で作成されたセキュリティ Issue は、セキュリティリリースに含めるために、セキュリティ追跡 Issue に関連付けられる必要があります。必ず [セキュリティ Issue テンプレート](https://gitlab.com/gitlab-org/gitlab/-/blob/master/.gitlab/issue_templates/Security%20developer%20workflow.md) を使用し、記載された手順に従ってください。

### セキュリティ Issue に取り組む際、いくつのバックポートが必要ですか？

`master` をターゲットとするマージリクエストに加えて、それぞれの [メンテナンス対象バージョン](https://docs.gitlab.com/policy/maintenance/#maintained-versions) の stable ブランチをターゲットとするバックポートが必要になります。
詳細については、[セキュリティバックポート](https://gitlab.com/gitlab-org/release/docs/-/blob/master/general/security/engineer.md#backports) を参照してください。

### セキュリティマージリクエストを取り消すにはどうすればよいですか？

マージ済みのセキュリティマージリクエストを取り消すことは **強く非推奨** であり、[PSIRT チーム](/handbook/security/product-security/psirt/) からの明示的な承認が必要です。セキュリティ修正のロールバックには深刻な結果が伴います:

1. ライブのセキュリティ保護を削除することで、GitLab.com、セルフマネージド、Dedicated インスタンスの完全性を損ないます
1. 代替の修正なしに取り消すと、リリースが公開された瞬間に脆弱性が公に開示されるリスクがあります。これは許容できません
1. パッチリリースは厳しい時間的制約の下で運用されます。リリースを遅延させないように代替の修正を間に合わせて準備できる保証はありません

セキュリティ脆弱性が二次的なバグを導入した場合、対応はその深刻度によって異なります:

- **脆弱性ではないバグ（S3 および S4）**: 適切な対応は、パッチリリースが公開された後、通常のパッチリリースプロセスに従って canonical リポジトリで Issue を修正することです。
- **脆弱性ではないバグ（高深刻度: S1 および S2）**: PSIRT および Release Manager とすぐに連携して次のステップを調整してください。一方的に取り消そうとしないでください。

セキュリティ修正が公開されているかどうかにかかわらず、いかなる取り消しも、進める前に **[PSIRT チーム](/handbook/security/product-security/psirt/) からの明示的な書面による承認が必要です**。緩和オプションとステップごとのガイダンスについては、[セキュリティマージリクエストによって導入されたバグを緩和する方法](https://gitlab.com/gitlab-org/release/docs/-/blob/master/general/security/bugs_introduced_by_security_merge_request.md) runbook を参照してください。
