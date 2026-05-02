---
title: "パッチリリース"
upstream_path: /handbook/engineering/releases/patch-releases/
upstream_sha: 0e6f01390a34aeb6706ace17d8d3c50e74e82d0d
translated_at: "2026-04-29T00:00:00Z"
translator: claude
stale: false
---

## パッチリリースポリシー

パッチリリースは[セマンティックバージョニング](https://semver.org/)に従います: **パッチバージョンにはバグ修正のみが含まれており、自動アップグレードしても安全です**。多くのお客様がこの保証を信頼しているため、最小限のテストでパッチリリースを適用しています。

### パッチリリースに含まれるもの

- [メンテナンスポリシー](https://docs.gitlab.com/policy/maintenance/)に基づくバグとセキュリティ修正
- パフォーマンスリグレッションの修正

### パッチリリースに含まれないもの

- 新機能またはフィーチャーフラグの有効化
- 「リリースする必要がある」未完成の作業
- マンスリーリリースの期限を逃したことによって要求される変更

このポリシーはお客様を保護するために存在します。ビジネス上の圧力に基づいて交渉の余地はありません。所有権、例外プロセス、エスカレーションパスを含む一般的なリリースポリシーのフレームワークについては、[リリースポリシー](/handbook/engineering/releases/#release-policy)セクションを参照してください。

### 機能をバックポートできない理由

[セマンティックバージョニングの契約](/handbook/engineering/releases#release-policy)を超えて、機能をパッチリリースに含めてはならない実践的なエンジニアリング上の理由があります: **ステーブルブランチがデフォルトブランチから乖離すると、バックポートが信頼できなくなります**。

機能がパッチリリースに導入されると:

- 安定版に意図せず新しいバグ修正が導入され、安定化していると信じていた本番環境でお客様が新しいバグに遭遇するリスクが高まります。
- お客様の信頼が損なわれ、アップグレードを自信を持って計画したり、リリースのコミットメントに依存することができなくなり、クリティカルな修正が含まれている場合でも更新を採用することをためらうようになります。
- ステーブルブランチが予測不可能な方法でデフォルトブランチから乖離します
- 周囲のコードが異なるため、将来のバグ修正がクリーンにチェリーピックされない可能性があります
- エンジニアはバージョンごとに修正を手動で適応させる必要があり、エラーのリスクが高まります
- 通常のバックポートがカスタム開発作業になってしまいます

これは複合的な問題を引き起こします: 各機能の例外が、その後のバックポートをより難しく、遅く、エラーが起きやすくします。
メンテナンスの負担はポリシー違反のたびに増大し、最終的にはすべてのお客様にタイムリーなセキュリティとバグ修正を提供する能力に影響します。

## パッチリリースの概要

パッチリリースは[GitLab メンテナンスポリシー](https://docs.gitlab.com/ee/policy/maintenance.html)に従い、バグ修正とセキュリティ修正を[メンテナンス対象バージョン](https://docs.gitlab.com/policy/maintenance/#maintained-versions)にバックポートするために実施されます。

### 他のリリースタイプとの関係

パッチリリースは[マンスリーリリース](/handbook/engineering/releases/monthly-releases/)中に作成されたステーブルブランチを基盤としています。

- 修正はパッチリリースに含まれる前に、まずGitLab.comにデプロイされる必要があります
- バックポートは[メンテナンス対象バージョン](https://docs.gitlab.com/policy/maintenance/#maintained-versions)のステーブルブランチを対象とします
- パッチリリースに含まれるセキュリティ修正は、[内部リリース](/handbook/engineering/releases/internal-releases/)を通じてGitLab Dedicatedに早期に提供される場合があります

メンテナンスポリシーの範囲外のパッチはリリースマネージャーとリクエスターが合意する必要があります（詳細は[メンテナンスポリシー外のバージョンへのバックポート](https://docs.gitlab.com/ee/policy/maintenance.html#backporting-to-older-releases)を参照してください）。[メンテナンス対象バージョンのリスト](https://docs.gitlab.com/policy/maintenance/#maintained-versions)を参照してください。

パッチリリースは通常のGitLab.comデプロイと並行して準備されるため、継続的なデプロイがブロックされることはありません。これにより、パブリックリリースの前にGitLab.comインスタンスにセキュリティ修正を適用できます。

GitLabエンジニアで以下を実施しようとしている場合:

- パッチリリースにセキュリティ修正を含めたい場合は、[GitLabエンジニア向けセキュリティランブック](https://gitlab.com/gitlab-org/release/docs/-/blob/master/general/security/readme.md#security-guides-by-role)の手順に従ってください。
- パッチリリースにバグ修正を含めたい場合は、[GitLabエンジニア向けパッチリリースランブック](https://gitlab.com/gitlab-org/release/docs/-/blob/master/general/patch/engineers.md)の手順に従ってください。GitLabとその依存関係のセキュリティ脆弱性は[セキュリティ修正SLA](/handbook/security/product-security/vulnerability-management/sla/)に従って対処されます。

バグ修正はGitLabの正式リポジトリで行われ、セキュリティ修正はリリース前に脆弱性を開示しないようにするためにミラーされたGitLabセキュリティリポジトリで行われます。

バックポートを準備するGitLabチームメンバーは、[パッチリリース情報ダッシュボード](#patch-release-information-dashboard)を参照してください。

## パッチリリースのケイデンス {#patch-release-cadence}

パッチリリースは月に2回スケジュールされており、[マンスリーリリース](/handbook/engineering/releases/monthly-releases/#monthly-release-schedule)（第3木曜日）の前後の水曜日を対象としています。正確な日付は月によって異なり、運用上のニーズに基づいてベストエフォートで調整されます。

次回のパッチリリース日については、[リリース情報ダッシュボード](https://dashboards.gitlab.net/d/delivery-release_info/delivery3a-release-information?orgId=1)（内部）を確認してください。

### SLOコミットメント

計画されたパッチリリースは、緊急リリースを必要とせずに目標リリース日を達成するようにスケジュールされています。

- セキュリティ脆弱性の詳細な修正SLAについては、[セキュリティ修正SLA](/handbook/security/product-security/vulnerability-management/sla/)を参照してください。
- バグ脆弱性の詳細な修正SLAについては、[バグ修正SLA](/handbook/product-development/how-we-work/issue-triage/#severity-slos)を参照してください。

## パッチリリースの種類

パッチリリースには、バグと脆弱性の修正を含むパッケージを準備、検証、公開するために多くのチームとの複数のタッチポイントがあります。

GitLabには2種類のパッチリリースプロセスがあります。

1. **スケジュール済み（デフォルト）**: [GitLab メンテナンスポリシー](https://docs.gitlab.com/ee/policy/maintenance.html)に従って、利用可能なすべてのバグと脆弱性の修正を公開するためのSLO主導のパッチ。[マンスリーリリース週](/handbook/engineering/releases/monthly-releases/#monthly-release-schedule)の前後の水曜日に月2回スケジュールされ、計画されたパッチは[バグSLO](/handbook/product-development/how-we-work/issue-triage/#severity-slos)と[セキュリティ修正SLA](/handbook/security/product-security/vulnerability-management/sla/)に準拠しています。[`クリティカル`な脆弱性](/handbook/security/product-security/vulnerability-management/sla/)を含むパッチはクリティカルパッチと見なされます。
2. **アウトオブバンド**: 高重大度のバグまたはクリティカルな脆弱性を緩和するために、通常の[パッチリリースケイデンス](#patch-release-cadence)外に行われるパッチ。これらのアドホックパッチは、宣言された[インシデント](/handbook/engineering/infrastructure-platforms/incident-management/#reporting-an-incident)からのみ生じ、期限の不履行に対応したり、標準的なリリースポリシーを回避するために使用してはなりません。
パッチリリースケイデンスに従い、アウトオブバンドパッチは水曜日に提供されます。

   - **クリティカルなセキュリティ脆弱性** - [セキュリティRCA](/handbook/security/root-cause-analysis/)は**必須**であり、予定外のリリースを強いた脆弱性を導入した責任チームが完了する必要があります。この説明責任に例外はありません。

   - **バグ修正** - [例外プロセス](/handbook/engineering/releases#exception-process)は**必須**であり、アウトオブバンドパッチが実行される前に従う必要があります。リリースマネージャーはビジネス上の圧力に関係なく、このプロセスを完了していないリクエストを却下する権限があります。バグ主導のアウトオブバンドパッチはセキュリティインシデントの結果ではないため、以下の属性を持つ[インシデントを申告](/handbook/engineering/infrastructure-platforms/incident-management/#reporting-an-incident)する必要があります。
      - 「アウトオブバンドパッチ」とマーク
      - 重大度S1またはS2
      - 「不適切なテストまたはQA」または「コミュニケーションの欠如または調整のギャップ」を寄与因子とする

      GitLabプラットフォームの信頼性と可用性を維持するために、[インシデントレビュー](/handbook/engineering/infrastructure-platforms/incident-review/)と[FCL](/handbook/engineering/#feature-change-locks)の完了は必須です。

## パッチリリースプロセス {#patch-release-process}

パッチリリースのプロセスはすべての種類で同じですが、1つの重要な違いがあります: 計画されたパッチはパッチリリース準備時に利用可能なすべてのバグとセキュリティ修正を含み、計画外のパッチは高重大度の脆弱性のセキュリティ修正のみを含む可能性が高いです。

エンドツーエンドのパッチリリースプロセスは以下の段階で構成されています。

![パッチリリース概要](/images/engineering/releases/patch-releases/patch-release-overview.jpg)

- [ダイアグラムソース - 社内](https://docs.google.com/presentation/d/12JXlLnZ8lQp7ATdaSoL4x_oCUv04rmqzYp6dQb8AXHE/edit#slide=id.g2d0bc50ab08_0_5)

いつでも、GitLabエンジニアは各[メンテナンス対象バージョン](https://docs.gitlab.com/policy/maintenance/#maintained-versions)のバグ修正と脆弱性修正を準備します。

- **ステップ1a: バグ修正の準備** - バグ修正を[メンテナンス対象バージョン](https://docs.gitlab.com/policy/maintenance/#maintained-versions)にバックポートするマージリクエストがGitLabエンジニアによって準備されます:
  - マージリクエストは、バグ修正が品質基準を満たしていることを保証するために、test-on-omnibusパイプラインを通じてエンドツーエンドテストを実行します。
  - test-on-omnibusパイプラインが失敗した場合、Software Engineer in Testからのレビューが必要です。
  - マージリクエストは[メンテナンス対象バージョン](https://docs.gitlab.com/policy/maintenance/#maintained-versions)に関連付けられたステーブルブランチのGitLabメンテナーによってマージされます。
- **ステップ1b: 脆弱性修正の準備** - エンジニアが関連する[セキュリティリポジトリ](https://gitlab.com/gitlab-org/security)の脆弱性を修正します。修正は以下を持つ[セキュリティ実装Issue](https://gitlab.com/gitlab-org/release/docs/-/blob/master/general/security/terminology.md)がある場合にのみ完了と見なされます:
  - すべてのステップが完了していることを示すチェックボックスがすべてチェックされている。
  - PSIRTチームメンバーとメンテナーがデフォルトブランチを対象としたMRを承認している。
  - 各意図するバージョンのバックポートMR。ほとんどの場合、これは各サポートバージョンをカバーする4つのMRを意味します。各MRは通過するパイプライン、必要な承認があり、処理のためにリリースボットに割り当てられている必要があります。
  - `~"security-target"`ラベルが適用されている。これにより、Issueが自動的にレビューされ、準備ができていれば、セキュリティトラッキングIssueにリンクされます。

計画された期日の2日前に、リリースマネージャーがパッチリリースプロセスを開始し、準備されたすべてのバグとセキュリティ修正が安全にリリースされることを確認します。GitLab.comへのデプロイは並行して実行されます。

パッチリリースには以下のフェーズがあります。

- **ステップ2: 最初のステップ** - リリース準備は、リリースマネージャーが`prepare` chatopsコマンドを実行してパッチリリースをガイドする新しいリリースタスクIssueを作成するときに開始されます。ここから彼らはリリースを準備するために必要な初期設定とコミュニケーションIssueを完了するためのチェックリストに従います。
- **ステップ3: 早期マージフェーズ** - リリースマネージャーがセキュリティ修正をGitLab.comにデプロイします。セキュリティトラッキングIssueにリンクされた`~"security-target"`ラベルを持つ修正は、デフォルトブランチを対象としたMRがマージされます。これにより、セルフマネージドユーザーにリリースされる前に、修正をGitLab.comにデプロイできます。
- **ステップ4: バックポートのマージ** - リリース期日の前日、サポートされているバージョンを対象とするセキュリティ修正バックポートがマージされます。この時点で、パッチに含まれるすべてがGitLab.comにデプロイされており、バックポートがすべてのステーブルブランチに適用されている必要があります。
- **ステップ5: リリース準備** - すべての修正がデプロイされてマージされたら、リリースマネージャーはパッケージを準備してテストします。
  - **ステップ5a: タグ付け** - リリースマネージャーが[メンテナンス対象バージョン](https://docs.gitlab.com/policy/maintenance/#maintained-versions)の新しいパッチリリースパッケージにタグを付けます。
  - **ステップ5b: デプロイ** - パッチリリースパッケージがGitLabリリースインスタンスにデプロイおよびテストされます。
  - **ステップ5c: リリース** - リリースマネージャーがパッチリリースに関連するパッケージを公開します。
- **ステップ6: 最終ステップ** - この時点でパッチリリースパッケージはすべてのユーザーが利用可能になります。リリースマネージャーがパッチリリースの最終ステップをまとめます。
  - **ステップ6a**: パッチリリースのブログ投稿が公開されます
  - **ステップ6b**: デフォルトブランチ、ステーブルブランチ、タグがセキュリティリポジトリから正規リポジトリに同期され、オープンな作業に戻ります。

## パッチリリース情報ダッシュボード {#patch-release-information-dashboard}

GitLabチームメンバーは[内部Grafanaダッシュボード「リリース情報」](https://dashboards.gitlab.net/d/delivery-release_info/delivery3a-release-information?orgId=1)で次回のパッチリリースに関する以下の情報を確認できます。

- 次回のパッチリリースバージョン（ステーブルバージョン + 2つのバックポートバージョン）
- 次回のパッチリリース日
- パッチリリースの現在のステータス
  - オープン: セキュリティIssueの`security-target`ラベルに関連付けられていないマージされたセキュリティMRと、マージされたバグ修正MRが次回のパッチリリースに含まれることが予定されています。
  - 警告: チームがバグとセキュリティ修正をマージ準備状態にする必要があるシグナルです。
  - クローズ: デフォルトブランチのセキュリティMRがマージされており、これ以上のバグやセキュリティ修正は含まれません。

この情報を表示するために使用されるメトリクスは、[パッチリリースプロセス](#patch-release-process)全体を通じて自動的に更新されます。

## パッチリリースFAQ

### 次回のパッチリリースにバグ修正をバックポートするにはどうすればよいですか？

パッチリリースにバグ修正を含めたいGitLabエンジニアは、[GitLabエンジニア向けパッチリリースランブック](https://gitlab.com/gitlab-org/release/docs/-/blob/master/general/patch/engineers.md)の手順に従ってください。

### 次回のパッチリリース情報はどこで確認できますか？

バージョン、スケジュールされた日付、ステータスを含むパッチリリース情報は、内部Grafanaの[リリースダッシュボード](https://dashboards.gitlab.net/d/delivery-release_info/delivery3a-release-information?orgId=1)で確認できます。

### セキュリティIssueが割り当てられましたが、どこから始めればよいですか？

詳細については、[エンジニアとしてのセキュリティプロセス](https://gitlab.com/gitlab-org/release/docs/-/blob/master/general/security/engineer.md)ドキュメントを参照してください。

### セキュリティ修正がパッチリリースに含まれなかったのはなぜですか？

[GitLab Security](https://gitlab.com/gitlab-org/security/)に作成されたセキュリティIssueは、セキュリティリリースに含まれるためにセキュリティトラッキングIssueに関連付けられる必要があります。[セキュリティIssueテンプレート](https://gitlab.com/gitlab-org/gitlab/-/blob/master/.gitlab/issue_templates/Security%20developer%20workflow.md)を使用し、記載の手順に従ってください。

### セキュリティIssueに取り組む場合、バックポートはいくつ必要ですか？

`master`を対象とするマージリクエストに加えて、各[メンテナンス対象バージョン](https://docs.gitlab.com/policy/maintenance/#maintained-versions)のステーブルブランチを対象とするバックポートが必要になります。
詳細については、[セキュリティバックポート](https://gitlab.com/gitlab-org/release/docs/-/blob/master/general/security/engineer.md#backports)を参照してください。

### セキュリティマージリクエストをリバートするにはどうすればよいですか？

マージされたセキュリティマージリクエストのリバートは**強く非推奨**であり、[PSIRTチーム](/handbook/security/product-security/psirt/)の明示的な承認が必要です。セキュリティ修正のロールバックには深刻な結果が伴います。

1. ライブのセキュリティ保護が削除されることで、GitLab.com、セルフマネージド、Dedicatedインスタンスの完全性が損なわれます
1. 代替の修正なしにリバートすると、リリースが公開された時点で脆弱性が公開されるリスクがあります。これは許容できません
1. パッチリリースは厳格な時間制約の下で運用されており、リリースの遅延を避けるために時間内に代替修正を準備できる保証はありません

セキュリティ脆弱性が二次的なバグを導入した場合、対応は重大度によって異なります。

- **非脆弱性バグ（S3およびS4）**: パッチリリースが公開された後、通常のパッチリリースプロセスに従って、正規リポジトリでIssueを修正することが適切なパスです。
- **非脆弱性バグ（高重大度: S1およびS2）**: すぐにPSIRTとリリースマネージャーと連携して、次のステップを調整してください。一方的にリバートしようとしないでください。

セキュリティ修正が公開されているかどうかに関係なく、リバートを進める前に**必ず[PSIRTチーム](/handbook/security/product-security/psirt/)から明示的な書面による承認を得る必要があります**。緩和策のオプションとステップバイステップのガイダンスについては、[セキュリティマージリクエストによって導入されたバグを緩和する方法](https://gitlab.com/gitlab-org/release/docs/-/blob/master/general/security/bugs_introduced_by_security_merge_request.md)ランブックを参照してください。
