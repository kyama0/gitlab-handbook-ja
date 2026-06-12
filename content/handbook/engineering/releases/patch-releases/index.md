---
title: "パッチリリース"
upstream_path: /handbook/engineering/releases/patch-releases/
upstream_sha: 5b642767a4478d09eeedd1689a94c1b164788f25
translated_at: "2026-06-12T13:26:18Z"
translator: claude
stale: false
model: claude-opus-4-7
lastmod: "2026-06-09T09:11:01-06:00"
---

## パッチリリースポリシー {#patch-release-policy}

パッチリリースは [セマンティックバージョニング](https://semver.org/)に従います。**パッチバージョンにはバグ修正のみが含まれ、自動アップグレードしても安全です**。多くのお客様は、この保証を信頼しているため、最小限のテストでパッチリリースを適用します。

### パッチリリースに含まれるもの {#what-patch-releases-include}

- [メンテナンスポリシー](https://docs.gitlab.com/policy/maintenance/)に基づくバグおよびセキュリティ修正
- パフォーマンスのリグレッション修正

### パッチリリースに含まれないもの {#what-patch-releases-do-not-include}

- 新機能やフィーチャーフラグの有効化
- 「出荷が必要」な未完了の作業
- 月次リリースの期限を逃したことによってリクエストされた変更

このポリシーはお客様を守るために存在します。ビジネス上の圧力に基づいて交渉できるものではありません。オーナーシップ、例外プロセス、エスカレーション経路を含む一般的なリリースポリシーのフレームワークについては、[リリースポリシー](/handbook/engineering/releases/#release-policy)のセクションを参照してください。

### 機能をバックポートできない理由 {#why-features-cannot-be-backported}

[セマンティックバージョニングの契約](/handbook/engineering/releases#release-policy)を超えて、機能をパッチリリースに含めてはならない実践的なエンジニアリング上の理由があります。**安定版ブランチがデフォルトブランチから乖離すると、バックポートが信頼できなくなる** からです。

機能がパッチリリースに導入されると、次のことが起こります。

- 安定版バージョンに新しいバグ修正が誤って導入される可能性があり、安定化されたと考えていた本番環境でお客様が新たなバグに遭遇するリスクが高まります。
- お客様の信頼が損なわれ、自信を持ってアップグレードを計画したり私たちのリリースのコミットメントに依存したりできなくなり、重要な修正が含まれているときでさえアップデートの導入をためらうようになります。
- 安定版ブランチが予測不可能な形でデフォルトブランチから乖離します
- 周囲のコードが異なるため、将来のバグ修正がきれいにチェリーピックできない場合があります
- エンジニアは各バージョンに対して手動で修正を適合させる必要があり、エラーのリスクが高まります
- 本来はルーチンであるべきバックポートが、カスタム開発作業になってしまいます

これは複合的な問題を引き起こします。各機能の例外が後続のバックポートをより難しく、より遅く、よりエラーが起きやすいものにします。
ポリシー違反のたびにメンテナンスの負担が増大し、最終的にはすべてのお客様にタイムリーなセキュリティおよびバグ修正を提供する能力に影響します。

## パッチリリースの概要 {#patch-release-overview}

パッチリリースは、バグ修正とセキュリティ修正を[メンテナンス対象バージョン](https://docs.gitlab.com/policy/maintenance/#maintained-versions)にバックポートするために、[GitLab メンテナンスポリシー](https://docs.gitlab.com/ee/policy/maintenance.html)に従って実行されます。

### 他のリリースタイプとの関係 {#relationship-to-other-release-types}

パッチリリースは、[月次リリース](/handbook/engineering/releases/monthly-releases/)中に作成された安定版ブランチをベースに構築されます。

- 修正は、パッチリリースに含める前にまず GitLab.com にデプロイされる必要があります
- バックポートは[メンテナンス対象バージョン](https://docs.gitlab.com/policy/maintenance/#maintained-versions)の安定版ブランチを対象とします
- パッチリリースに含まれるセキュリティ修正は、[内部リリース](/handbook/engineering/releases/internal-releases/)を通じて GitLab Dedicated に先行して提供される場合もあります

メンテナンスポリシーの範囲外のパッチは、Release Manager とリクエスト者の間でリクエストおよび合意される必要があります（詳細は[メンテナンスポリシー外のバージョンへのバックポート](https://docs.gitlab.com/ee/policy/maintenance.html#backporting-to-older-releases)を参照してください）。[メンテナンス対象バージョンのリスト](https://docs.gitlab.com/policy/maintenance/#maintained-versions)を参照してください。

パッチリリースは、継続的デプロイがブロックされないように、通常の GitLab.com デプロイと並行して準備されます。これにより、公開リリースの前に GitLab.com インスタンスにセキュリティ修正を適用できます。

GitLab エンジニアの方で、次のことを行いたい場合は、

- パッチリリースにセキュリティ修正を含める場合は、[GitLab エンジニア向けセキュリティ runbook](https://gitlab.com/gitlab-org/release/docs/-/blob/master/general/security/readme.md#security-guides-by-role) の手順に従ってください。
- パッチリリースにバグ修正を含める場合は、[GitLab エンジニア向けパッチリリース runbook](https://gitlab.com/gitlab-org/release/docs/-/blob/master/general/patch/engineers.md) の手順に従ってください。GitLab およびその依存関係のセキュリティ脆弱性は、[セキュリティ是正 SLA](/handbook/security/product-security/vulnerability-management/sla/)に従って対処されます。

バグ修正は GitLab の正規リポジトリで作業されますが、セキュリティ修正は、リリース前に脆弱性が露呈するのを避けるために、ミラーリングされた GitLab セキュリティリポジトリで作業されます。

バックポートを準備しようとしている GitLab チームメンバーは、[パッチリリース情報ダッシュボード](#patch-release-information-dashboard)を参照してください。

## パッチリリースのケイデンス {#patch-release-cadence}

パッチリリースは月に 2 回スケジュールされ、[月次リリース](/handbook/engineering/releases/monthly-releases/#monthly-release-schedule)（第 3 木曜日）の前後の水曜日を対象とします。正確な日付は毎月異なり、運用上の必要性に応じて変更される可能性があるベストエフォートの目標です。

今後のパッチリリース日については、[Release Information ダッシュボード](https://dashboards.gitlab.net/d/delivery-release_info/delivery3a-release-information?orgId=1)（内部）を確認してください。

### SLO コミットメント {#slo-commitments}

計画されたパッチリリースは、緊急リリースを必要とせずに目標リリース日を達成するようにスケジュールされます。

- 詳細なセキュリティ脆弱性是正 SLA については、[セキュリティ是正 SLA](/handbook/security/product-security/vulnerability-management/sla/)を参照してください。
- 詳細なバグ脆弱性是正 SLA については、[バグ是正 SLA](/handbook/product-development/how-we-work/issue-triage/#severity-slos)を参照してください。

## パッチリリースのタイプ {#patch-release-types}

パッチリリースには、バグおよび脆弱性修正を含むパッケージを準備、検証、公開するために、多くのチーム間で複数の接点があります。

GitLab には、2 種類のパッチリリースプロセスがあります。

1. **スケジュール (デフォルト)**: [GitLab メンテナンスポリシー](https://docs.gitlab.com/ee/policy/maintenance.html)に基づいて、利用可能なすべてのバグおよび脆弱性修正を公開する SLO 駆動のパッチです。[月次リリース週](/handbook/engineering/releases/monthly-releases/#monthly-release-schedule)の前後の水曜日に月に 2 回スケジュールされ、計画されたパッチは[バグ SLO](/handbook/product-development/how-we-work/issue-triage/#severity-slos) および[セキュリティ是正 SLA](/handbook/security/product-security/vulnerability-management/sla/)に準拠します。[`critical` 脆弱性](/handbook/security/product-security/vulnerability-management/sla/)を含むパッチは、critical パッチと見なされます。
2. **アウトオブバンド**: 通常の[パッチリリースのケイデンス](#patch-release-cadence)の枠外のパッチで、深刻度の高いバグまたは critical 脆弱性の緩和に厳密に限定されます。これらのアドホックなパッチは、宣言された[インシデント](/handbook/engineering/infrastructure-platforms/incident-management/#reporting-an-incident)からのみ発生し、逃した期限への対応や標準的なリリースポリシーの回避に使用してはなりません。パッチリリースのケイデンスに従い、アウトオブバンドのパッチは水曜日に提供されます。

   - **critical セキュリティ脆弱性** の場合 - [セキュリティ RCA](/handbook/security/root-cause-analysis/) が **必須** であり、アウトオブバンドリリースを強いた脆弱性を導入したチームが完了させる必要があります。この説明責任に例外はありません。

   - **バグ修正** の場合 - [例外プロセス](/handbook/engineering/releases#exception-process)が **必須** であり、アウトオブバンドパッチを実行する前に従う必要があります。Release Manager は、ビジネス上の圧力に関係なく、このプロセスを完了していないリクエストを却下する権限を持っています。次の属性を持つ[インシデントを宣言](/handbook/engineering/infrastructure-platforms/incident-management/#reporting-an-incident)する必要があります。
      - "Out-of-Band Patch" としてマーク
      - 深刻度 S1 または S2
      - 'Inadequate testing or QA' または 'Miscommunication or coordination gap' の Contributing Factor

      いずれかの GitLab プラットフォームの信頼性と可用性を維持するためのバグ修正の場合、**[インシデントレビュー](/handbook/engineering/infrastructure-platforms/incident-review/)と [FCL](/handbook/engineering/#feature-change-locks) の完了が必須です**。

## パッチリリースプロセス {#patch-release-process}

パッチリリースのプロセスは、1 つの重要な違いを除いてすべてのタイプで同じです。計画されたパッチには、パッチリリースの準備時点で準備が整っているすべてのバグおよびセキュリティ修正が含まれますが、計画外のパッチにはおそらく深刻度の高い脆弱性のセキュリティ修正のみが含まれます。

エンドツーエンドのパッチリリースプロセスは、次のステージで構成されます。

![パッチリリースの概要](/images/engineering/releases/patch-releases/patch-release-overview.jpg)

- [図のソース - 内部](https://docs.google.com/presentation/d/12JXlLnZ8lQp7ATdaSoL4x_oCUv04rmqzYp6dQb8AXHE/edit#slide=id.g2d0bc50ab08_0_5)

任意の時点で、GitLab エンジニアはそれぞれの[メンテナンス対象バージョン](https://docs.gitlab.com/policy/maintenance/#maintained-versions)に対してバグ修正と脆弱性修正を準備します。

- **ステップ 1a: バグ修正の準備** - バグ修正を[メンテナンス対象バージョン](https://docs.gitlab.com/policy/maintenance/#maintained-versions)にバックポートするマージリクエストが GitLab エンジニアによって準備されます。
  - マージリクエストは、バグ修正が品質基準を満たすことを保証するために、test-on-omnibus パイプラインを介してエンドツーエンドテストを実行します。
  - test-on-omnibus パイプラインが失敗した場合、[Developer Experience](/handbook/engineering/infrastructure-platforms/developer-experience/) チームによるレビューが必要です。
  - マージリクエストは、[メンテナンス対象バージョン](https://docs.gitlab.com/policy/maintenance/#maintained-versions)に関連付けられた安定版ブランチで GitLab メンテナーによってマージされます。
- **ステップ 1b: 脆弱性修正の準備** - エンジニアは、関連する [Security リポジトリ](https://gitlab.com/gitlab-org/security)で脆弱性を修正します。修正は、次の内容を含む[セキュリティ実装 Issue](https://gitlab.com/gitlab-org/release/docs/-/blob/master/general/security/terminology.md) がある場合にのみ完了と見なされます。
  - すべてのステップが完了したことを示すために、すべてのチェックボックスがチェックされている。
  - PSIRT チームメンバーと Maintainer が承認した、デフォルトブランチを対象とする MR。
  - 対象とする各バージョンのバックポート MR。ほとんどの場合、これはサポートされている各バージョンをカバーする 4 つの MR を意味します。各 MR はパイプラインが成功し、必要な承認を得ており、処理のためにリリースボットに割り当てられている必要があります。
  - `~"security-target"` ラベルが適用されている。これにより、Issue が自動的にレビューされ、準備が整っている場合はセキュリティトラッキング Issue にリンクされます。

計画された期日の 2 日前に、Release Manager はパッチリリースプロセスを開始し、準備されたすべてのバグおよびセキュリティ修正が安全にリリースされることを確認します。GitLab.com へのデプロイは並行して実行されます。

パッチリリースには次のフェーズがあります。

- **ステップ 2: 最初のステップ** Release Manager が `prepare` chatops コマンドを実行し、パッチリリースをガイドする新しいリリースタスク Issue を作成すると、リリースの準備が始まります。ここから、チェックリストに従って、リリースを準備するために必要な初期セットアップとコミュニケーションの Issue を完了させます。
- **ステップ 3: 早期マージフェーズ** - Release Manager はセキュリティ修正を GitLab.com にデプロイします。セキュリティトラッキング Issue にリンクされた `~"security-target"` ラベルを持つ修正は、デフォルトブランチを対象とする MR がマージされます。これにより、self-managed ユーザーにリリースされる前に GitLab.com に修正をデプロイできます。
- **ステップ 4: バックポートのマージ** - リリース期日の前日に、サポートされているバージョンを対象とするセキュリティ修正を含むバックポートがマージされます。この時点で、パッチに含まれるすべてのものが GitLab.com にデプロイされている必要があり、バックポートはすべての安定版ブランチに適用される必要があります。
- **ステップ 5: リリースの準備*** - すべての修正がデプロイされマージされると、Release Manager はパッケージを準備しテストします。
  - **ステップ 5a: タグ付け** - Release Manager は、[メンテナンス対象バージョン](https://docs.gitlab.com/policy/maintenance/#maintained-versions)の新しいパッチリリースパッケージにタグを付けます。
  - **ステップ 5b: デプロイ** - パッチリリースパッケージが GitLab リリースインスタンスにデプロイされ、テストされます。
  - **ステップ 5c: リリース** - Release Manager は、パッチリリースに関連付けられたパッケージを公開します。
- **ステップ 6: 最終ステップ** - この時点で、パッチリリースパッケージはすべてのユーザーが利用可能になります。Release Manager は、パッチリリースの最終ステップを締めくくります。
  - **ステップ 6a**: パッチリリースのブログ投稿が公開されます
  - **ステップ 6b**: デフォルトブランチ、安定版ブランチ、タグが Security から Canonical に同期され、オープンに作業するデフォルトの状態に戻ります。

## パッチリリース情報ダッシュボード {#patch-release-information-dashboard}

GitLab チームメンバーは、今後のパッチリリースに関する次の情報について、[内部 Grafana ダッシュボード "Release Information"](https://dashboards.gitlab.net/d/delivery-release_info/delivery3a-release-information?orgId=1) を表示できます。

- 今後のパッチリリースバージョン（安定版バージョン + 2 つのバックポートバージョン）
- 今後のパッチリリース日
- パッチリリースの現在のステータス
  - Open: `security-target` ラベルが付いたセキュリティ Issue に関連付けられた未マージのセキュリティ MR、およびマージされたバグ修正 MR が、次のパッチリリースに含まれることが予想されます。
  - Warning: チームがバグおよびセキュリティ修正をマージできる状態にすべきであることを示すシグナルです。
  - Closed: デフォルトブランチのセキュリティ MR がマージされ、これ以上のバグまたはセキュリティ修正は含まれません。

この情報の表示に使用されるメトリクスは、[パッチリリースプロセス](#patch-release-process)全体を通じて自動的に更新されます。

## パッチリリースの FAQ {#patch-release-faqs}

### バグ修正を次のパッチリリースにバックポートするにはどうすればよいですか？ {#how-can-i-backport-a-bug-fix-to-the-next-patch-release}

GitLab エンジニアの方でバグ修正をパッチリリースに含めたい場合は、[GitLab エンジニア向けパッチリリース runbook](https://gitlab.com/gitlab-org/release/docs/-/blob/master/general/patch/engineers.md) の手順に従ってください。

### 次のパッチリリース情報はどこで確認できますか？ {#where-can-i-find-the-next-patch-release-information}

対象バージョン、スケジュールされた日付、ステータスを含むパッチリリース情報は、内部 Grafana の[リリースダッシュボード](https://dashboards.gitlab.net/d/delivery-release_info/delivery3a-release-information?orgId=1)で確認できます。

### セキュリティ Issue が自分に割り当てられました。どこから始めればよいですか？ {#a-security-issue-was-assigned-to-me-where-should-i-start}

詳細については、[エンジニアとしてのセキュリティプロセス](https://gitlab.com/gitlab-org/release/docs/-/blob/master/general/security/engineer.md)のドキュメントを参照してください。

### なぜ自分のセキュリティ修正がパッチリリースに含まれなかったのですか？ {#why-wasnt-my-security-fix-included-in-the-patch-release}

[GitLab Security](https://gitlab.com/gitlab-org/security/) で作成されたセキュリティ Issue は、セキュリティリリースに含めるためにセキュリティトラッキング Issue に関連付ける必要があります。[セキュリティ Issue テンプレート](https://gitlab.com/gitlab-org/gitlab/-/blob/master/.gitlab/issue_templates/Security%20developer%20workflow.md)を使用し、記載された手順に従ってください。

### セキュリティ Issue に取り組む際、いくつのバックポートが必要ですか？ {#how-many-backports-do-i-need-when-working-on-a-security-issue}

`master` を対象とするマージリクエストに加えて、それぞれの[メンテナンス対象バージョン](https://docs.gitlab.com/policy/maintenance/#maintained-versions)の安定版ブランチを対象とするバックポートが必要になります。
詳細については、[セキュリティバックポート](https://gitlab.com/gitlab-org/release/docs/-/blob/master/general/security/engineer.md#backports)を参照してください。

### セキュリティマージリクエストをどのようにリバートできますか？ {#how-can-i-revert-a-security-merge-request}

マージされたセキュリティマージリクエストのリバートは **強く推奨されず**、[PSIRT チーム](/handbook/security/product-security/psirt/)からの明示的な承認が必要です。セキュリティ修正のロールバックには深刻な結果が伴います。

1. ライブのセキュリティ保護を削除することで、GitLab.com、self-managed、Dedicated インスタンスの整合性が損なわれます
1. 代替の修正なしにリバートすると、リリースが公開された瞬間に脆弱性を公に開示するリスクがあります。これは許容できません
1. パッチリリースは厳しい時間的制約の下で運用されます。リリースの遅延を避けるために間に合うように代替の修正を準備できる保証はありません

セキュリティ脆弱性が二次的なバグを導入した場合、対応はその深刻度によって異なります。

- **脆弱性ではないバグ (S3 および S4)**: 適切な経路は、パッチリリースが公開された後に、通常のパッチリリースプロセスに従って正規リポジトリで Issue を修正することです。
- **脆弱性ではないバグ（深刻度が高い: S1 および S2）**: 直ちに PSIRT および Release Manager と連携して次のステップを調整します。独断でリバートしようとしないでください。

セキュリティ修正が公開されているかどうかに関係なく、いかなるリバートも続行する前に **[PSIRT チーム](/handbook/security/product-security/psirt/)からの明示的な書面による承認が必要です**。緩和オプションと段階的なガイダンスについては、[セキュリティマージリクエストによって導入されたバグを緩和する方法](https://gitlab.com/gitlab-org/release/docs/-/blob/master/general/security/bugs_introduced_by_security_merge_request.md) runbook を参照してください。
