---
title: "Patch Releases"
upstream_path: /handbook/engineering/releases/patch-releases/
upstream_sha: 0505a0f5a670366af5dd620eb2b9f12ebd7a79fe
lastmod: 2026-06-09T09:11:01-06:00
translated_at: "2026-06-12T21:15:09Z"
translator: claude
stale: false
---

## パッチリリースポリシー {#patch-release-policy}

パッチリリースは[セマンティックバージョニング](https://semver.org/)に従います: **パッチバージョンにはバグ修正のみが含まれ、自動アップグレードが安全です**。多くの顧客は、この保証を信頼しているため、最小限のテストでパッチリリースを適用します。

### パッチリリースに含まれるもの {#what-patch-releases-include}

- [メンテナンスポリシー](https://docs.gitlab.com/policy/maintenance/)に従ったバグおよびセキュリティ修正
- パフォーマンスリグレッションの修正

### パッチリリースに含まれないもの {#what-patch-releases-do-not-include}

- 新機能またはフィーチャーフラグの有効化
- 「出荷が必要」な未完成の作業
- マンスリーリリースの期限を逃したために要請された変更

このポリシーは顧客を保護するために存在します。ビジネス上のプレッシャーに基づいて交渉できるものではありません。オーナーシップ、例外プロセス、エスカレーションパスを含む一般的なリリースポリシーのフレームワークについては、[リリースポリシー](/handbook/engineering/releases/#release-policy)のセクションを参照してください。

### なぜ機能をバックポートできないのか {#why-features-cannot-be-backported}

[セマンティックバージョニングの契約](/handbook/engineering/releases#release-policy)を超えて、機能をパッチリリースに含めてはならない実用的なエンジニアリング上の理由があります: **stable ブランチがデフォルトブランチから分岐すると、バックポートが信頼できなくなります**。

機能がパッチリリースに導入されると:

- 新しいバグ修正が誤って stable バージョンに導入される可能性があり、安定化したと信じていた本番環境で顧客が新しいバグに遭遇するリスクが高まります。
- 顧客の信頼が損なわれ、彼らはもはや自信を持ってアップグレードを計画したり、私たちのリリースコミットメントに頼ったりできなくなり、重大な修正が含まれている場合でもアップデートの採用をためらうようになります。
- stable ブランチが予測できない形でデフォルトブランチから分岐します
- 周囲のコードが異なるため、将来のバグ修正がクリーンにチェリーピックできない場合があります
- エンジニアは各バージョンに対して手動で修正を適応させる必要があり、エラーのリスクが高まります
- 本来はルーチンのバックポートであるべきものが、カスタム開発作業になります

これは複合的な問題を生み出します。各機能例外が、後続のバックポートをより難しく、遅く、エラーが起きやすくします。
ポリシー違反のたびにメンテナンスの負担が増大し、最終的にはすべての顧客にタイムリーなセキュリティおよびバグ修正を提供する私たちの能力に影響します。

## パッチリリースの概要 {#patch-release-overview}

パッチリリースは、[メンテナンス対象バージョン](https://docs.gitlab.com/policy/maintenance/#maintained-versions)にバグ修正とセキュリティ修正をバックポートするために、[GitLab メンテナンスポリシー](https://docs.gitlab.com/ee/policy/maintenance.html)に従って実行されます。

### 他のリリースタイプとの関係 {#relationship-to-other-release-types}

パッチリリースは、[マンスリーリリース](/handbook/engineering/releases/monthly-releases/)中に作成された stable ブランチの上に構築されます:

- 修正は、パッチリリースに含める前に、まず GitLab.com にデプロイされなければなりません
- バックポートは[メンテナンス対象バージョン](https://docs.gitlab.com/policy/maintenance/#maintained-versions)の stable ブランチを対象とします
- パッチリリースに含まれるセキュリティ修正は、[内部リリース](/handbook/engineering/releases/internal-releases/)を通じて GitLab Dedicated により早く提供される場合もあります

メンテナンスポリシー外のパッチは、リリースマネージャーとリクエスト者によって要請され合意される必要があります（詳細については[メンテナンスポリシー外のバージョンへのバックポート](https://docs.gitlab.com/ee/policy/maintenance.html#backporting-to-older-releases)を参照してください）。[メンテナンス対象バージョンのリスト](https://docs.gitlab.com/policy/maintenance/#maintained-versions)を参照してください。

パッチリリースは、継続的デプロイがブロックされないように、通常の GitLab.com のデプロイと並行して準備されます。このようにして、公開リリースの前に GitLab.com インスタンスにセキュリティ修正を適用できます。

GitLab エンジニアで以下を行いたい場合:

- パッチリリースにセキュリティ修正を含めるには、[GitLab エンジニア向けセキュリティ runbook](https://gitlab.com/gitlab-org/release/docs/-/blob/master/general/security/readme.md#security-guides-by-role)の手順に従ってください。
- パッチリリースにバグ修正を含めるには、[GitLab エンジニア向けパッチリリース runbook](https://gitlab.com/gitlab-org/release/docs/-/blob/master/general/patch/engineers.md)の手順に従ってください。GitLab およびその依存関係のセキュリティ脆弱性は、[セキュリティ是正 SLA](/handbook/security/product-security/vulnerability-management/sla/)に従って対処されます。

バグ修正は GitLab の canonical リポジトリで作業されますが、セキュリティ修正は、リリース前に脆弱性が明らかになるのを避けるため、ミラーリングされた GitLab security リポジトリで作業されます。

バックポートの準備をしたい GitLab チームメンバーは、[パッチリリース情報ダッシュボード](#patch-release-information-dashboard)を参照してください。

## パッチリリースのケイデンス {#patch-release-cadence}

パッチリリースは月に 2 回、[マンスリーリリース](/handbook/engineering/releases/monthly-releases/#monthly-release-schedule)（第 3 木曜日）の前後の水曜日を目標にスケジュールされます。正確な日付は毎月異なり、運用上のニーズに基づいて変動する可能性のあるベストエフォートの目標です。

今後のパッチリリース日については、[リリース情報ダッシュボード](https://dashboards.gitlab.net/d/delivery-release_info/delivery3a-release-information?orgId=1)（内部）を確認してください。

### SLO コミットメント {#slo-commitments}

計画されたパッチリリースは、緊急リリースを必要とせずに目標リリース日を満たすようにスケジュールされます。

- 詳細なセキュリティ脆弱性是正 SLA については、[セキュリティ是正 SLA](/handbook/security/product-security/vulnerability-management/sla/)を参照してください。
- 詳細なバグ脆弱性是正 SLA については、[バグ是正 SLA](/handbook/product-development/how-we-work/issue-triage/#severity-slos)を参照してください。

## パッチリリースのタイプ {#patch-release-types}

パッチリリースには、バグおよび脆弱性修正を含むパッケージを準備、検証、公開するために、多くのチーム間の複数のタッチポイントがあります。

GitLab には、2 種類のパッチリリースプロセスがあります:

1. **Scheduled（デフォルト）**: [GitLab メンテナンスポリシー](https://docs.gitlab.com/ee/policy/maintenance.html)に従って、利用可能なすべてのバグおよび脆弱性修正を公開する SLO 駆動のパッチ。
   [マンスリーリリース週](/handbook/engineering/releases/monthly-releases/#monthly-release-schedule)の前後の水曜日に月に 2 回スケジュールされ、計画されたパッチは
   [バグ SLO](/handbook/product-development/how-we-work/issue-triage/#severity-slos)と
   [セキュリティ是正 SLA](/handbook/security/product-security/vulnerability-management/sla/)に準拠します。
   [`critical` 脆弱性](/handbook/security/product-security/vulnerability-management/sla/)を含むパッチは、critical パッチとみなされます。
2. **Out-of-band**: 通常の[パッチリリースのケイデンス](#patch-release-cadence)外のパッチで、
高重大度のバグまたは critical 脆弱性の緩和に厳密に限定して予約されます。これらのアドホックなパッチは、
宣言された[インシデント](/handbook/engineering/infrastructure-platforms/incident-management/#reporting-an-incident)からのみ発生し、
逃した期限への対応や標準のリリースポリシーの回避に決して使用してはなりません。
パッチリリースのケイデンスに従い、アウトオブバンドパッチは水曜日に提供されます。

   - **Critical セキュリティ脆弱性** の場合 - [セキュリティ RCA](/handbook/security/root-cause-analysis/)
   が**必須**であり、アウトオブバンドリリースを強いた脆弱性を導入した責任を負うチームによって完了されなければなりません。この説明責任に例外はありません。

   - **バグ修正** の場合 - [例外プロセス](/handbook/engineering/releases#exception-process)
   が**必須**であり、アウトオブバンドパッチを実行する前に従わなければなりません。リリースマネージャーは、
   ビジネス上のプレッシャーに関係なく、このプロセスを完了していないリクエストを却下する権限を持ちます。以下の属性を持つ
   [インシデントを宣言](/handbook/engineering/infrastructure-platforms/incident-management/#reporting-an-incident)しなければなりません:
      - "Out-of-Band Patch" としてマークされている
      - 重大度 S1 または S2
      - 寄与要因が「Inadequate testing or QA」または「Miscommunication or coordination gap」である

      あらゆる GitLab プラットフォームの信頼性と可用性を維持するためのバグ修正については、**
      [インシデントレビュー](/handbook/engineering/infrastructure-platforms/incident-review/)と
      [FCL](/handbook/engineering/#feature-change-locks)の完了が必須です**。

## パッチリリースのプロセス {#patch-release-process}

パッチリリースのプロセスは、1 つの重要な違いを除いてすべてのタイプで同じです: 計画されたパッチには
パッチリリース準備時点で準備が整っているすべてのバグおよびセキュリティ修正が含まれますが、計画外のパッチには
おそらく高重大度の脆弱性のセキュリティ修正のみが含まれます。

エンドツーエンドのパッチリリースプロセスは、以下のステージで構成されます:

![patch release overview](/images/engineering/releases/patch-releases/patch-release-overview.jpg)

- [Diagram source - internal](https://docs.google.com/presentation/d/12JXlLnZ8lQp7ATdaSoL4x_oCUv04rmqzYp6dQb8AXHE/edit#slide=id.g2d0bc50ab08_0_5)

任意の時点で、GitLab エンジニアはそれぞれの[メンテナンス対象バージョン](https://docs.gitlab.com/policy/maintenance/#maintained-versions)に対して
バグ修正と脆弱性修正を準備します:

- **ステップ 1a: バグ修正の準備** - [メンテナンス対象バージョン](https://docs.gitlab.com/policy/maintenance/#maintained-versions)にバグ修正をバックポートするマージリクエストが GitLab エンジニアによって準備されます:
  - マージリクエストは、バグ修正が品質基準を満たすことを保証するために、test-on-omnibus パイプラインを通じてエンドツーエンドテストを実行します。
  - test-on-omnibus パイプラインが失敗した場合、[Developer Experience](/handbook/engineering/infrastructure-platforms/developer-experience/) チームによるレビューが必要です。
  - マージリクエストは、[メンテナンス対象バージョン](https://docs.gitlab.com/policy/maintenance/#maintained-versions)に関連付けられた stable ブランチで GitLab メンテナーによってマージされます。
- **ステップ 1b: 脆弱性修正の準備** - エンジニアは関連する [Security リポジトリ](https://gitlab.com/gitlab-org/security)で脆弱性を修正します。修正は、以下を含む[セキュリティ実装 Issue](https://gitlab.com/gitlab-org/release/docs/-/blob/master/general/security/terminology.md)がある場合にのみ完了とみなされます:
  - すべてのステップが完了したことを示すために、すべてのチェックボックスがチェックされている。
  - デフォルトブランチを対象とした、PSIRT チームメンバーと Maintainer が承認した MR。
  - 各対象バージョンのバックポート MR。ほとんどの場合、これはサポートされている各バージョンをカバーするために 4 つの MR を意味します。各 MR はパイプラインが通過し、必要な承認があり、処理のためにリリースボットにアサインされていなければなりません。
  - `~"security-target"` ラベルが適用されている。これにより、Issue が自動的にレビューされ、準備ができていればセキュリティトラッキング Issue にリンクされます。

計画された期日の 2 日前に、リリースマネージャーはパッチリリースプロセスを開始し、
準備されたすべてのバグおよびセキュリティ修正が安全にリリースされることを確認します。GitLab.com へのデプロイは並行して実行されます。

パッチリリースには以下のフェーズがあります:

- **ステップ 2: 最初のステップ** リリース準備は、リリースマネージャーが `prepare` chatops コマンドを実行して、パッチリリースを導く新しいリリースタスク Issue を作成したときに始まります。ここから、彼らはチェックリストに従って、リリースの準備に必要な初期セットアップとコミュニケーション Issue を完了します。
- **ステップ 3: 早期マージフェーズ** - リリースマネージャーは GitLab.com にセキュリティ修正をデプロイします。セキュリティトラッキング Issue にリンクされた `~"security-target"` ラベルを持つ修正は、デフォルトブランチを対象とした MR がマージされます。これにより、修正が self-managed ユーザーにリリースされる前に GitLab.com にデプロイできます。
- **ステップ 4: バックポートのマージ** - リリース期日の前日、サポートされているバージョンを対象とするセキュリティ修正を含むバックポートがマージされます。この時点で、パッチに含まれるすべてのものが GitLab.com にデプロイされていなければならず、バックポートはすべての stable ブランチに適用されなければなりません。
- **ステップ 5: リリースの準備*** - すべての修正がデプロイされマージされたら、リリースマネージャーはパッケージを準備しテストします。
  - **ステップ 5a: タグ付け** - リリースマネージャーは[メンテナンス対象バージョン](https://docs.gitlab.com/policy/maintenance/#maintained-versions)用の新しいパッチリリースパッケージにタグを付けます。
  - **ステップ 5b: デプロイ** - パッチリリースパッケージが GitLab リリースインスタンスにデプロイされテストされます。
  - **ステップ 5c: リリース** - リリースマネージャーはパッチリリースに関連付けられたパッケージを公開します。
- **ステップ 6: 最終ステップ** - この時点で、パッチリリースパッケージはすべてのユーザーが利用可能です。リリースマネージャーはパッチリリースの最終ステップを締めくくります。
  - **ステップ 6a**: パッチリリースのブログ記事が公開されます
  - **ステップ 6b**: デフォルトブランチ、stable ブランチ、タグが Security から Canonical に同期され、オープンに作業するデフォルトの状態に戻ります。

## パッチリリース情報ダッシュボード {#patch-release-information-dashboard}

GitLab チームメンバーは、今後のパッチリリースに関する以下の情報について、[内部 Grafana ダッシュボード「Release Information」](https://dashboards.gitlab.net/d/delivery-release_info/delivery3a-release-information?orgId=1)を閲覧できます:

- 今後のパッチリリースバージョン（stable バージョン + 2 つのバックポートバージョン）
- 今後のパッチリリース日
- パッチリリースの現在のステータス
  - Open: `security-target` ラベルが付いたセキュリティ Issue に関連付けられた未マージのセキュリティ MR、およびマージされたバグ修正 MR は、次のパッチリリースに含まれることが期待されます。
  - Warning: チームがバグおよびセキュリティ修正をマージできる状態にすべきであることを示します。
  - Closed: デフォルトブランチのセキュリティ MR がマージされ、それ以上のバグまたはセキュリティ修正は含まれません。

この情報を表示するために使用されるメトリクスは、[パッチリリースのプロセス](#patch-release-process)全体を通じて自動的に更新されます。

## パッチリリースの FAQ {#patch-release-faqs}

### 次のパッチリリースにバグ修正をバックポートするにはどうすればよいですか？ {#how-can-i-backport-a-bug-fix-to-the-next-patch-release}

パッチリリースにバグ修正を含めたい GitLab エンジニアは、[GitLab エンジニア向けパッチリリース runbook](https://gitlab.com/gitlab-org/release/docs/-/blob/master/general/patch/engineers.md)の手順に従ってください。

### 次のパッチリリース情報はどこで確認できますか？ {#where-can-i-find-the-next-patch-release-information}

対象バージョン、予定日、ステータスを含むパッチリリース情報は、内部 Grafana の[リリースダッシュボード](https://dashboards.gitlab.net/d/delivery-release_info/delivery3a-release-information?orgId=1)で確認できます

### セキュリティ Issue が私にアサインされました、どこから始めるべきですか？ {#a-security-issue-was-assigned-to-me-where-should-i-start}

詳細については、[エンジニアとしてのセキュリティプロセス](https://gitlab.com/gitlab-org/release/docs/-/blob/master/general/security/engineer.md)のドキュメントを参照してください。

### なぜ私のセキュリティ修正はパッチリリースに含まれなかったのですか？ {#why-wasnt-my-security-fix-included-in-the-patch-release}

[GitLab Security](https://gitlab.com/gitlab-org/security/) で作成されたセキュリティ Issue は、セキュリティリリースに含めるために、セキュリティトラッキング Issue に関連付けられる必要があります。[セキュリティ Issue テンプレート](https://gitlab.com/gitlab-org/gitlab/-/blob/master/.gitlab/issue_templates/Security%20developer%20workflow.md)を使用し、記載された手順に従ってください。

### セキュリティ Issue に取り組む際、いくつのバックポートが必要ですか？ {#how-many-backports-do-i-need-when-working-on-a-security-issue}

`master` を対象とするマージリクエストに加えて、それぞれの[メンテナンス対象バージョン](https://docs.gitlab.com/policy/maintenance/#maintained-versions)の stable ブランチを対象とするバックポートが必要になります。
詳細については、[セキュリティバックポート](https://gitlab.com/gitlab-org/release/docs/-/blob/master/general/security/engineer.md#backports)を参照してください。

### セキュリティマージリクエストを取り消すにはどうすればよいですか？ {#how-can-i-revert-a-security-merge-request}

マージされたセキュリティマージリクエストの取り消しは**強く推奨されません**し、[PSIRT チーム](/handbook/security/product-security/psirt/)からの明示的な承認が必要です。セキュリティ修正のロールバックには深刻な結果があります:

1. ライブのセキュリティ保護を削除することで、GitLab.com、self-managed、Dedicated インスタンスの完全性を損ないます
1. 代替修正なしで取り消すと、リリースが公開された瞬間に脆弱性を公に開示するリスクがあります。これは容認できません
1. パッチリリースは厳しい時間的制約のもとで運用されます。リリースの遅延を避けるために代替修正を間に合わせて準備できる保証はありません

セキュリティ脆弱性が二次的なバグを導入した場合、対応はその重大度によって異なります:

- **脆弱性ではないバグ（S3 および S4）**: 適切なパスは、通常のパッチリリースプロセスに従って、パッチリリースが公開された後に canonical リポジトリで Issue を修正することです。
- **脆弱性ではないバグ（高重大度: S1 および S2）**: PSIRT とリリースマネージャーに直ちに連絡し、次のステップを調整してください。一方的に取り消そうとしないでください。

セキュリティ修正が公開されているかどうかに関わらず、いかなる取り消しも、進める前に**[PSIRT チーム](/handbook/security/product-security/psirt/)からの明示的な書面による承認が必要です**。緩和オプションとステップバイステップのガイダンスについては、[セキュリティマージリクエストによって導入されたバグの緩和方法](https://gitlab.com/gitlab-org/release/docs/-/blob/master/general/security/bugs_introduced_by_security_merge_request.md) runbook を参照してください。
