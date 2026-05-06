---
title: Package
upstream_path: /handbook/engineering/devops/package/
upstream_sha: 81a617744130f76604f641d4483828edd0d60d2f
translated_at: "2026-04-28T00:00:00Z"
translator: claude
stale: false
---

## ミッションとビジョン

Package ステージは、様々な言語やプラットフォームにまたがるパッケージを1か所で公開・利用・検索できるようにすることで、ソースコードと依存関係の両方が共存できる安全な環境を作ります。私たちのビジョンは、DevOps ライフサイクル全体でパッケージとコンテナイメージを保存・配布するための、お客様にとって唯一の情報源となることです。

## チーム構成

Package ステージは2つのグループで構成されています：

1. Package:Container Registry — OCI 準拠のコンテナイメージストレージのためのバックエンド Go サービス
2. Package:Package Registry — GitLab Rails アプリケーション内のパッケージ管理機能

### チームメンバー

Package ステージは以下のチームで構成されています：


<p class="my-3 text-sm text-gray-600 italic">チームメンバー情報は <a href="https://handbook.gitlab.com/handbook/engineering/devops/package/#team-members" rel="external noopener">原文 (英語)</a> を参照してください。</p>


<p class="my-3 text-sm text-gray-600 italic">チームメンバー情報は <a href="https://handbook.gitlab.com/handbook/engineering/devops/package/#team-members" rel="external noopener">原文 (英語)</a> を参照してください。</p>


### ステーブルカウンターパート


<p class="my-3 text-sm text-gray-600 italic">チームメンバー情報は <a href="https://handbook.gitlab.com/handbook/engineering/devops/package/#team-members" rel="external noopener">原文 (英語)</a> を参照してください。</p>


### パッケージフォーマット DRI

| フォーマット | DRI            |
|-----------|----------------|
| npm       | @dmeshcharakou |
| Maven     | @10io         |
| PyPI      | @radbatnag    |
| NuGet     | @mkhalifa3    |
| Terraform | @radbatnag    |
| Generic   | @dmeshcharakou |

## 作業の進め方

### マイルストーン計画プロセス

私たちのマイルストーン計画はプロダクトロードマップとエンジニアリングのコミットメントと密接に連携しています。プロセスは、戦略的イニシアチブの実施とセキュリティ Issue・顧客バグ・インターロックコミットメントなどの運用ニーズのバランスを取ります。計画はエンジニアリングマネージャーが主導し、プロダクトマネージャーとデザイナーが協力して意見を出し合います。

#### 計画ワークフロー

1. **エンジニアリングマネージャーが計画 Issue を作成する**
   - [Package ステージマイルストーン計画 epic](https://gitlab.com/groups/gitlab-org/-/epics/3591) を参照する
   - マイルストーン用の新しい計画 Issue を作成する
   - エンジニアリングマネージャー・プロダクトマネージャー・デザイナーにアサインする
   - ロードマップとチームキャパシティに基づく初期目標を定義する

2. **エンジニアリングマネージャーがサステイニングワークを追加する**
   - 期限が近いセキュリティ脆弱性をレビューし優先順位付けする
   - バックログからマイルストーンで取り組む約8件のバグを選択する
   - 期限が近いインターロックコミットメントを特定する
   - バグの優先度がチームキャパシティと一致していることを確認する
   - 現在の優先事項のための[トリアージレポート](https://gitlab.com/gitlab-org/quality/triage-reports/-/issues?sort=created_date&state=opened&label_name%5B%5D=devops::package&label_name%5B%5D=triage%20report)を確認する

3. **プロダクトマネージャーとデザイナーが優先事項を提供する**
   - プロダクトマネージャーがプロダクト方針との整合性について目標をレビューする
   - プロダクトマネージャーがプロダクト戦略と一致する機能 Issue を追加する
   - デザイナーが UX 改善とデザイン Issue を追加する
   - 両者が提案された目標とキャパシティについてフィードバックを提供する

4. **エンジニアリングマネージャーがキャパシティ計画を確定する**
   - 現在のマイルストーンの Issue に適切な優先度ラベルが付いているかレビューする
   - すべての Issue に `Deliverable`・`Stretch`・`Package:P1`・`Package:P2` のいずれかのラベルが付いていることを確認する
   - [Issue フィルター](https://gitlab.com/groups/gitlab-org/-/issues/?sort=created_date&state=opened&label_name%5B%5D=devops::package&not%5Blabel_name%5D%5B%5D=Deliverable&not%5Blabel_name%5D%5B%5D=Stretch&not%5Blabel_name%5D%5B%5D=Package:P2&not%5Blabel_name%5D%5B%5D=Package:P1) を使ってギャップを特定する
   - Go・Rails・フロントエンドエンジニアに十分な作業があることを確認する
   - [機能別ブレークダウンボード](https://gitlab.com/groups/gitlab-org/-/boards/1548554?label_name%5B%5D=group%3A%3Apackage%20registry)を使ってキャパシティが超過していないことを確認する

5. **次のマイルストーンとキャリーオーバーをレビューする**
   - 次のマイルストーンにすでにスケジュールされているものを確認する
   - [ワークフローボード](https://gitlab.com/groups/gitlab-org/-/boards/1284221?label_name%5B%5D=devops::package) を使って Issue のステータスを追跡する
   - 完了したものとキャリーオーバーするものを特定する
   - キャリーオーバーの Issue を新しいマイルストールで更新する

6. **プロジェクト DRI と調整する**
   - プロジェクトオーナーにメッセージを送り、マイルストーンの機能 Issue を追加してもらう
   - 計画したすべての作業が適切にドキュメント化されリンクされていることを確認する

#### Issue の優先順位付け

Issue は以下のように優先順位付けされます：

- `Package:P1`: マイルストールのコミット作業
- `Package:P2` + `Stretch`: キャパシティが許せばのストレッチ目標
- `Deliverable`: 開発準備が整った P1 Issue

ロードマップ外で計画されるアイテムには以下が含まれます：

- セキュリティ脆弱性（SLA を満たすため）
- 優先度の高い顧客バグ
- インターロックコミットメント（Geo・Protocells など）
- 小規模な信頼性・パフォーマンス修正

#### 計画チェックリスト

包括的なマイルストーン計画のためにこのチェックリストを使用してください：

- [ ] セキュリティ脆弱性がレビューされ優先順位付けされている
- [ ] 優先度の高いバグが特定されアサインされている
- [ ] インターロックコミットメントがドキュメント化されている
- [ ] すべての P1 Issue に重みが付き整理されている
- [ ] 前のマイルストーンからのキャリーオーバー作業が更新されている
- [ ] 次のマイルストーンのプレビューが完了している
- [ ] プロジェクト DRI が計画作業について通知されている
- [ ] 新機能のインストルメンテーション要件が定義されている
- [ ] Go・Rails・フロントエンドエンジニアのキャパシティが確認されている

#### 主要な計画リソース

- [機能別ブレークダウンボード](https://gitlab.com/groups/gitlab-org/-/boards/1548554?label_name%5B%5D=group%3A%3Apackage%20registry) — マイルストール全体で機能別に Issue を表示
- [マイルストールボード](https://gitlab.com/groups/gitlab-org/-/boards/1196366?label_name%5B%5D=group%3A%3Apackage%20registry) — 機能別に分類された Issue を確認
- [ワークフローボード](https://gitlab.com/groups/gitlab-org/-/boards/1284221?label_name%5B%5D=devops::package) — マイルストール全体で Issue のステータスを追跡
- [トリアージレポート](https://gitlab.com/gitlab-org/quality/triage-reports/-/issues?sort=created_date&state=opened&label_name%5B%5D=devops::package&label_name%5B%5D=triage%20report) — 現在のバグ優先度

### スタイルガイドラインとアーキテクチャ標準

効率的なコードレビューとメンテナーの承認を確保するため、すべての貢献は確立されたスタイルガイドラインとアーキテクチャ標準に従う必要があります。

#### フロントエンド開発

- [GitLab フロントエンドガイドライン](https://docs.gitlab.com/ee/development/fe_guide/)に従う
- [Vue.js ベストプラクティス](https://docs.gitlab.com/ee/development/fe_guide/vue.html)を遵守する
- 一貫性のために [Pajamas Design System](https://design.gitlab.com/) を使用する
- [アクセシビリティ標準](https://docs.gitlab.com/ee/development/fe_guide/accessibility/)に従う
- [マルチバージョン互換性ガイドライン](https://docs.gitlab.com/ee/development/multi_version_compatibility/)をレビューする

#### バックエンド開発

- [GitLab 開発ガイドライン](https://docs.gitlab.com/ee/development/)に従う
- [Ruby スタイルガイド](https://docs.gitlab.com/ee/development/backend/ruby_style_guide.html)を遵守する
- [データベースのベストプラクティス](https://docs.gitlab.com/ee/development/database/)を使用する
- [GraphQL API ガイドライン](https://docs.gitlab.com/development/api_graphql_styleguide/)に従う
- [API デザインガイドライン](https://docs.gitlab.com/ee/development/api_styleguide.html)に従う
- [マルチバージョン互換性ガイドライン](https://docs.gitlab.com/ee/development/multi_version_compatibility/)をレビューする

#### Container Registry（Go）

- [Go コードスタイルガイドライン](https://docs.gitlab.com/ee/development/go_guide/)に従う
- [OCI 標準](https://github.com/opencontainers/specs)との互換性を維持する
- [マルチバージョン互換性ガイドライン](https://docs.gitlab.com/ee/development/multi_version_compatibility/)をレビューする

#### セキュリティとコンプライアンス

- 破壊的変更を実装する前に[破壊的変更と廃止予定のガイドライン](https://docs.gitlab.com/ee/development/deprecation_guidelines/)をレビューする
- [セキュリティのベストプラクティス](https://docs.gitlab.com/ee/development/secure_coding_guidelines.html)に従う
- セキュリティに影響する変更は [AppSec レビュー](/handbook/security/product-security/security-platforms-architecture/application-security/appsec-reviews/)を確保する

### 開発者ワークフローと貢献プロセス

#### Issue の整理（リファインメント）

開発を始める前に、Issue が適切に整理されていることを確認します：

- **重み付け**: すべての Issue に重みの見積もりが必要（1〜5のスケール）
- **実装計画**: 技術的なアプローチと依存関係を含める
- **完了の定義**: 「完了」の意味を明確に定義する
- **ラベル要件**: タイプ・カテゴリー・ワークフロー・Package:P1 または Package:P2 の適切なラベルを適用する
- **マイルストーン割り当て**: Issue が正しいマイルストールに割り当てられていることを確認する

[整理が必要な Issue フィルター](https://gitlab.com/groups/gitlab-org/-/issues/?label_name%5B%5D=devops::package&label_name%5B%5D=workflow::refinement)を使って注意が必要な作業を特定します。

インストルメンテーションは、影響と効果を測定するためのすべての機能における主要な要件です。これにより採用状況を検証し、データ駆動の意思決定ができるようになります。

#### 非同期更新

非同期更新の目的は、進捗を伝え、今後の作業に向けて他者が準備できるようにすることです。フルリモートのカルチャーでは、更新を非同期で行い、直接 Issue に記録します。

週に1回、または注目すべきことが起きたときに、Issue にコメントを追加します（タイトルは `Async Update`）。マージリクエストではなく Issue を更新することをお勧めします。

非同期更新コメントには以下を含めます：

- 完了率（必要なすべての MR をレビューに出すのにどれだけ完了しているか）
- 見積もりの確信度
- 実施内容とレビューが開始されているかどうかのメモ
- Issue に複数の人が取り組んでいる場合はフロントエンドまたはバックエンドの文脈
- ブロッカーまたはリスク

#### ラベル要件

作業を始める前に、Issue に以下のラベルが付いていることを確認します：

- **タイプ**: `type::feature`・`type::bug`・または `type::maintenance`
- **カテゴリー**: `Category:Container Registry`・`Category:Package Registry`・または `Category:Virtual Registry`
- **優先度**: `Package:P1`・`Package:P2`・または適切な優先度ラベル
- **ワークフロー**: 開始前に `workflow::ready for development`
- **マイルストーン**: 現在または計画されたマイルストールに割り当て

#### デザインとプロダクトとの連携

- **デザインとのコラボレーション**: リファインメントフェーズの早い段階でデザイナーと協力する
- **UX レビュー**: 該当する場合は実装前に UX フィードバックを求める
- **プロダクトとの整合**: 開始前にプロダクトマネージャーと機能スコープを確認する
- **デザインの引き継ぎ**: 開発を始める前にデザイン仕様が完成していることを確認する

#### AppSec レビュープロセス

セキュリティに影響する変更については：

1. 認証・認可・データ処理・外部統合に変更が影響するかどうかを特定する
2. 開発プロセスの早い段階で AppSec レビューを要求する
3. 実装計画にセキュリティの考慮事項を含める
4. MR で[セキュリティのベストプラクティス](https://docs.gitlab.com/ee/development/secure_coding_guidelines.html)を参照する
5. マージ前にすべての AppSec フィードバックに対処する

#### コードレビューとマージプロセス

- レビューを要求する前にすべてのスタイルガイドラインに従っていることを確認する
- コンテキストとテストアプローチを含む明確な MR の説明を含める
- すべてのレビューフィードバックに速やかに対処する
- 適切なメンテナーからの承認を得る
- マージ前に CI/CD パイプラインが通っていることを確認する

### ヘルプリクエスト（RFH）プロセス

Package チームは、サポートチームがエスカレーションした顧客の Issue をサポートするために GitLab のヘルプリクエスト（RFH）プロセスに参加しています。RFH の Issue は [gitlab-com/request-for-help](https://gitlab.com/gitlab-com/request-for-help) リポジトリで追跡されます。

#### RFH の仕組み

サポートが顧客の Issue を Package チームにエスカレーションする際、次のいずれかのテンプレートを使って RFH Issue を作成します：

- [Package Registry テンプレート](https://gitlab.com/gitlab-com/request-for-help/-/issues/new?issuable_template=SupportRequestTemplate-PackageRegistry)
- [Container Registry テンプレート](https://gitlab.com/gitlab-com/request-for-help/-/issues/new?issuable_template=SupportRequestTemplate-ContainerRegistry)

チーム全体がグループメンション（`@gitlab-org/ci-cd/package-stage/container-registry-group` または `@gitlab-org/ci-cd/package-stage/package-registry-group`）で通知を受け、Issue には適切なヘルプグループラベルが付きます。

#### レスポンスタイム SLO

Package チームは、[request-for-help ハンドブックページのタイムライン](https://gitlab.com/gitlab-com/request-for-help#responsiveness-guidelines)に基づく初回レスポンスタイム（FRT）SLO に従うことを約束しています。

これらの SLO は初回レスポンスを提供するまでの時間を表しており、必ずしも完全な解決までの時間ではありません。

#### チームワークフローへの RFH の組み込み

**監視とトリアージ**

- Package チームに割り当てられた新しい Issue のために RFH リポジトリを定期的に確認する
- 新しい RFH Issue が作成されたときの Slack のグループメンションに応答する
- Issue をトリアージして、即座の対応が必要か予定に組み込めるかを判断する

**優先順位付け**

- RFH の Issue は SLA 要件を満たす場合、通常は計画作業より優先される
- Severity 1・2 の Issue は即座のコンテキスト切り替えが必要な場合がある
- Severity 3・4 の Issue は SLO ウィンドウ内に対処すべきだが、現在または次のマイルストールに組み込むことができる
- SLO 内に対応できない RFH はエンジニアリングマネージャーにエスカレーションする

**RFH Issue の処理**

1. **初回レスポンス**: Issue を確認し、可能であれば初期調査または回避策を提供する
2. **調査**: Issue がバグ・ドキュメント不足・期待通りの動作のいずれかを判断する
3. **解決パス**: 以下のいずれかを選択する：
   - 回避策を提供する
   - 必要に応じてメインの GitLab プロジェクトにバグレポートを作成する
   - ドキュメントまたは設定ガイダンスを提供する
   - 重大なエンジニアリング作業が必要な場合はエスカレーションする
4. **コミュニケーション**: 進捗と次のステップをサポートチームに継続的に伝える
5. **クローズ**: 解決したら、適切なクローズラベルを適用し、レトロスペクティブフィードバックを完了する

#### クローズラベル

RFH Issue をクローズする際は、解決状況をドキュメント化するためにこれらのラベルのいずれかを適用します：

- `Closed::Workaround` — 回避策で Issue が解決された
- `Closed::Bug Fixed` — バグが特定され修正された
- `Closed::Other Request` — 関連する機能リクエストまたはバグレポートが公開トラッカーに作成された
- `Closed::Moved to Public Issue` — 回避策が見つからず、公開 Issue に移動した
- `Closed::No Solution` — 詳細不足のため対応できなかった
- `Closed::Insufficient Information` — 運用上またはプロダクト外の Issue
- `Closed::Documentation` — 既存のドキュメントに従うことで解決された

#### レトロスペクティブ

RFH Issue に `retrospective::started` のマークが付いた場合、以下についてフィードバックを提供します：

- この RFH を防ぐために何ができたか？（ドキュメント不足・プロセスが不明確・ツールのギャップ）
- 顧客が独自に解決するために役立った資料やリソースは何か？
- セルフサービスの提供改善のための提案

完了したら、ラベルを `retrospective::completed` または `retrospective::not needed` に更新します。

#### 主要リソース

- [RFH リポジトリ](https://gitlab.com/gitlab-com/request-for-help)
- [サポートハンドブック — ヘルプの得方](/handbook/support/workflows/how-to-get-help/)
- [Package Registry RFH テンプレート](https://gitlab.com/gitlab-com/request-for-help/-/issues/new?issuable_template=SupportRequestTemplate-PackageRegistry)
- [Container Registry RFH テンプレート](https://gitlab.com/gitlab-com/request-for-help/-/issues/new?issuable_template=SupportRequestTemplate-ContainerRegistry)

### Issue 管理

#### バックログラベリングプロセス

Issue をトリアージする際は、コミットメントレベルに基づいて適切なバックログラベルを適用します：

- **`backlog::prospective`**: 今後24か月以内に取り組む予定の Issue
- **`backlog::no-commitment`**: ユーザーの関心はあるが今後24か月間での優先は見込みにくい Issue

#### タイプ別の Issue 整理

##### 機能 Issue（`type::feature`）

- 適切な epic にアサインする
- すべての epic に優先度ラベルを適用する（`priority::1` から `priority::4`）
- サポートされていないフォーマット（Go リポジトリ・RPM）の Issue はクローズする
- 需要が低いフォーマットリクエストを `backlog::no-commitment` に移動する（Rust・Dart・Swift など）

##### メンテナンス Issue（`type::maintenance`）

- 関連するメンテナンス epic にアサインする：
  - **Package Registry メンテナンス Epic**（&19029）
  - **Container Registry メンテナンス Epic**（&19037）
- サブ epic のカテゴリー：
  - セキュリティとコンプライアンス
  - パフォーマンス最適化
  - インフラ & 運用
  - データ管理 & クリーンアップ
  - コード改善
  - テスト & QA
  - ドキュメント

##### バグ Issue（`type::bug`）

- 適切なトリアージのために優先度ラベルを適用する
- 解決予定のバグには `backlog::prospective` ラベルを付ける
- 現在のロードマップに適用されなくなった古いバグはクローズする

#### Epic 管理

- 断片化を減らすために関連する epic を統合する
- 重複する epic を削除する
- すべての見込み epic にスコープ付きの優先度ラベルがあることを確認する
- 定期的に epic のスコープをレビューし、重複するイニシアチブを統合する

#### 非同期 Issue 更新

非同期更新の目的は、進捗を伝え、必要に応じて今後の作業に向けて他者が準備できるようにすることです。フルリモートのカルチャーでは、更新を非同期で行い、直接 Issue に記録します。

非同期更新は Issue コメントとマイルストーンのヘルスステータスを使って進捗と確信度を伝えます。週に1回、または Issue に関して注目すべきことが起きたときに、タイトルが `Async Update` の Issue コメントを追加します。関連するマージリクエストではなく Issue を更新することをお勧めします。

非同期更新コメントには以下を含めます：

- 作業が何パーセント完了しているか（必要なすべての MR をレビューに出すのにどれだけ完了しているか）
- 見積もりが正しいという確信度
- 実施内容やレビューが開始されているかどうかのメモ
- Issue に複数の人が取り組んでいる場合はフロントエンドまたはバックエンドの更新かどうかを含めると良い

#### Issue 重み付けガイドライン

| 重み | 説明 | 確信度 |
|--------|-------------|------------------|
| 1: 微小 | 十分理解されており調査不要、解決方法が明確 | ≥90% |
| 2: 小 | 十分理解されており最小限の調査が必要、サプライズが少ない | ≥75% |
| 3: 中 | 十分理解されているが調査が必要、サプライズが想定される | ≥60% |
| より大きい | より小さい Issue に分解すべき | ≥50% |

重み1の Issue は2日以内に完了するはずです。

### 現在のプロジェクト

#### Container Registry

- [メタデータデータベース GA](https://gitlab.com/groups/gitlab-org/-/epics/5521)（DRI: @hswimelar）
- [データベース負荷分散](https://gitlab.com/groups/gitlab-org/-/epics/8591)（DRI: @jdrpereira）
- [バックグラウンドマイグレーションサポート](https://gitlab.com/groups/gitlab-org/-/epics/13609)（DRI: @suleimiahmed）
- [ベータ: Docker バーチャルレジストリ](https://gitlab.com/groups/gitlab-org/-/epics/6061)（DRI: @adie.po）

#### Package Registry

- [バーチャルレジストリサポート（Maven・npm・PyPI・NuGet）](https://gitlab.com/groups/gitlab-org/-/epics/15088)（DRI: @10io）
- [Dependency Firewall](https://gitlab.com/groups/gitlab-org/-/epics/5133)（DRI: @dmeshcharakou）
- [パッケージフォーマット改善](https://gitlab.com/groups/gitlab-org/-/epics/12294)（DRI: @radbatnag）
- [テスト安定性の強化](https://gitlab.com/groups/gitlab-org/-/epics/15148)（DRI: @radbatnag）

## 技術ガイドライン

### 破壊的変更プロセス

破壊的変更を発表または進める前にリーダーシップの承認が必要なため、[破壊的変更・廃止予定・削除のガイダンス](https://docs.gitlab.com/ee/development/deprecation_guidelines/)をレビューして従ってください。

### 新しいパッケージフォーマットのリリース

新しいパッケージフォーマットのリリースには以下の構造化されたプロセスに従います：

1. **実験フェーズ**
   - ステージング環境でフィーチャーフラグを有効化
   - 包括的なテスト：
     - 小規模・大規模パッケージ操作
     - 数百のパッケージでのパフォーマンス
     - サポートされているすべての認証方法
     - GitLab 固有のカスタム機能
   - フィーチャーフラグロールアウト Issue に問題を記録する

2. **ベータフェーズ**
   - GitLab.com への限定ロールアウト
   - 内部チームによるドッグフーディング
   - 選択した顧客によるテスト
   - バグのトリアージと解決

3. **一般公開（GA）**
   - 完全なドキュメント更新
   - フィーチャーフラグの削除
   - セルフマネージドリリース
   - リリースコミュニケーション

バックエンドとフロントエンドに関連する変更の適切な処理を確保するために[マルチバージョン互換性ガイドライン](https://docs.gitlab.com/development/multi_version_compatibility/)をレビューしてください。

### アラートと CI フレーク管理

チームはサービスアラートと CI 通知のために Slack チャンネル [#g_container-registry_alerts](https://gitlab.enterprise.slack.com/archives/C046REGL9QD) を監視しています。アラート処理のプロセス：

1. 全員が作業時間中にアラートを監視する責任がある
2. 新しいアラートが表示されたとき：
   - 👀 絵文字を追加して調査中であることを知らせる
   - アラートの詳細を確認する（ランブック・ダッシュボード・パイプライン・Sentry Issue）
   - 利用可能なリソースを使って問題を評価する
   - 以下に基づいて無視しても安全かどうかを判断する：
     - 既存の Issue カバレッジ
     - 自動解決
     - 解決を示すログ
   - 無視しても安全でない場合：
     - #production と #incidents-dotcom チャンネルをレビューする
     - インシデントの報告を検討する
     - 詳細を #g_container-registry で共有する
   - レビューをドキュメント化するためにコメントスレッドを追加する
   - 解決したら ✅ 絵文字を追加する

#### アラート発生テンプレート

```markdown
## Alert Occurrence Update
- **Occurrence Count**: X (previously Y)
- **Date/Time**: [Insert timestamp]
- **Last occurrences**: [Insert slack link]
```

#### 主要リソース

- [ログ - 非本番](https://nonprod-log.gitlab.net/goto/f3fbccdb9dea6805ff5bbf1e0144a04e)
- [ログ - 本番](https://log.gprd.gitlab.net/goto/7dc6f73d5dd4cc4bebcd4af3b767cae4)
- [ダッシュボード - 概要](https://dashboards.gitlab.net/d/registry-main/registry-overview?orgId=1)
- [プロファイラー](https://console.cloud.google.com/profiler/gitlab-registry/cpu?project=gitlab-production)

## プロダクトコンテキスト

### Container Registry の歴史

もともとマイルストーン 8.8 でリリースされた Container Registry は、Docker Distribution レジストリを GitLab に統合しました。主な課題はストレージ管理でした。削除されたイメージは、ダウンタイムが必要なガベージコレクションなしでは実際にはストレージから削除されませんでした。

この問題に対処し将来の機能を可能にするために、私たちは：

1. Docker Distribution をフォークした
2. オンラインガベージコレクションを実装した
3. メタデータデータベースを追加した
4. クリーンアップポリシーを作成した

この作業により、以下の将来の機能が可能になります：

- より堅牢な API と UI
- エンタープライズ機能（イメージ署名・保護）
- 安定性と信頼性の向上

レジストリは、Docker 仕様との後方互換性を維持しながら、Image および Distribution 仕様の OCI 標準に準拠しています。

## 結果の測定

### 主要パフォーマンス指標

- Lighthouse メトリック: （公開パッケージ数 + 公開コンテナ数）/ 課金対象ユーザー数
- 月次アクティブユーザー（GMAU）
- エラーバジェット準拠
- 配信コミットメントに対する言行一致率
- 運用コスト：
  - ストレージコスト
  - データ転送コスト

### ダッシュボード

- [Container Registry](https://log.gprd.gitlab.net/goto/e7b62a23a5a9cdc88aa1de3cdb392758)
- [Package Registry メトリクス](https://dashboards.gitlab.net/)
- [エラーバジェット](https://dashboards.gitlab.net/d/stage-groups-detail-package_registry/)

## 追加リソース

- [Package 品質ガイドライン](/handbook/engineering/devops/package/quality/)
- [Package ジョブトゥービードン](/handbook/engineering/devops/package/jtbd/)
- [Container Registry ドキュメント](https://docs.gitlab.com/ee/user/packages/container_registry/)
- [Package Registry ドキュメント](https://docs.gitlab.com/ee/user/packages/package_registry/)
- [チーム YouTube チャンネル](https://www.youtube.com/playlist?list=PL05JrBw4t0KoPiSySNHTfvxC20i0LppMf)（デモ・チームミーティング・顧客サマリー・ユーザーインタビューを含む）
