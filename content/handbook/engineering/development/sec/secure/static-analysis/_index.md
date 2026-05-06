---
title: "Static Analysis グループ"
upstream_path: /handbook/engineering/development/sec/secure/static-analysis/
upstream_sha: 3480299851f7e2243d4f08b75dac452f89929636
translated_at: "2026-04-28T00:00:00Z"
translator: claude
stale: false
---

## Static Analysis

GitLab の Static Analysis グループは、顧客のソフトウェアリポジトリ向けに [Static Application Security Testing (SAST)](https://about.gitlab.com/direction/application_security_testing/static-analysis/sast/) 機能カテゴリを開発する責任を担っています。

## リンク

- Slack チャンネル: [`#g_ast-static-analysis`](https://gitlab.enterprise.slack.com/archives/CLA54H7PY)
- チームメンバー: [Static Analysis グループ](/handbook/product/categories/#static-analysis-group)

## 私たちの働き方

Static Analysis グループは GitLab の[製品開発フロー](/handbook/product-development/how-we-work/product-development-flow/)に概ね沿って作業していますが、ソフトウェアを提供する方法においていくつか注目すべき違いがあります。エンジニアリングチームは主にソフトウェアの提供に関心を持っており、これが私たちが最も逸脱するワークフローの状態の部分です。以下に、プロダクトマネジメントからエンジニアリングへのソフトウェア提供のハンドオフをどのように管理するかを説明します。

このチームが取り組む Issue はアナライザー、ベンダー提供テンプレート、CI/CD コンポーネント、GitLab の Rails モノリスにまたがることがあります。

### 計画

Static Analysis グループは、会社全体の全グループと同様に、月次の計画サイクルで作業します。私たちはプロダクト主導であり、プロダクトマネジメントが特定した優先事項に対応して作業します。

ガイドラインとして、チームのキャパシティは以下のように配分されます:

- 60% 機能（プロダクトの優先事項）
- 40% メンテナンスとバグ（エンジニアリングの優先事項）

私たちは計画 Issue を使用して、各マイルストーンでチームが取り組む内容を決定します。計画 Issue はエンジニアが作業を行う唯一の情報源です。Issue が計画 Issue に含まれていない場合、それに取り組んでいる可能性は低いです。

[17.x の計画 Issue](https://gitlab.com/groups/gitlab-org/-/epics/15743)。

このリンクは Slack チャンネルのブックマークでも確認できます。

#### 計画 Issue との関わり方

- エンジニアリングマネージャーが計画 Issue に追加するもの:
  1. プロダクトの優先事項に基づく機能エピックとスタンドアロン Issue。
  2. エンジニアリングの優先事項に基づくメンテナンスエピック、スタンドアロン Issue、バグ。
  3. マイルストーンのエンジニアリング割り当て（エピックの DRI、機能対メンテナンスの割り当て、リアクションローテーションなど）。
- エンジニアリングマネージャーがエンジニアにメンションして以下を依頼:
  1. 自分の割り当てを確認する。
  2. 選択した Issue に `~Deliverable` ラベルを設定して成果物へのコミットを確認する。
  3. 選択した Issue のラベル、マイルストーン、健全性ステータスを更新する。
- エンジニアリングマネージャーがプロダクトマネージャーにレビューをメンション。

### Static Analysis 共有カレンダー

[Static Analysis 共有カレンダー](https://calendar.google.com/calendar/embed?src=c_fb285ec72974733f23fd84f70397732e68f7db9abe706c5613f199b6202e379a%40group.calendar.google.com) は、PTO イベントをチーム全員が見えるようにするために使用されます。

Time Off by Deel にカレンダーを追加する手順:

- Slack で **Time Off by Deel** > **Home** に移動し、ドロップダウン **Your Events** をクリックして **Calendar Sync** を選択します。
- **追加のカレンダー** の下で、**カレンダーを追加** をクリックします。
- 次のカレンダー ID を追加します: `c_fb285ec72974733f23fd84f70397732e68f7db9abe706c5613f199b6202e379a@group.calendar.google.com`。
- お疲れさまでした！🎉 これ以降、PTO イベントは Static Analysis 共有カレンダーに同期されます。🚀

### オブザーバビリティ

GitLab.com では、Rails アプリケーション内のコードのパフォーマンス、CI ビルドパフォーマンスに関するメトリクス、コンテナレジストリへのトラフィックを監視しています。これらのダッシュボードは[モニタリング](/handbook/engineering/monitoring)ページでアクセスできます。

オブザーバビリティは高可用性システムの重要なコンポーネントであり、各チームメンバーが各ダッシュボードを確認して、その使いやすさと傾向に精通することを推奨します。

- [Static Analysis グループダッシュボード](https://dashboards.gitlab.net/d/stage-groups-static_analysis/stage-groups-static-analysis-group-dashboard)
- [SAST アナライザーレジストリトラフィック](https://log.gprd.gitlab.net/app/dashboards#/view/84aa3f10-89d2-11ec-9dd2-93d354bef8e7?_g=(filters%3A!()%2CrefreshInterval%3A(pause%3A!t%2Cvalue%3A0)%2Ctime%3A(from%3Anow-24h%2Cto%3Anow)))
- [SAST エンジニアリング Kibana ダッシュボード](https://log.gprd.gitlab.net/app/dashboards#/view/1eebd010-9a73-11ec-9dd2-93d354bef8e7)

#### ランブック

インシデントの監視、対応、緩和のプロセスは、[Static Analysis ランブック](runbooks/) ページに記載されています。

### Static Analysis でのソフトウェア提供

私たちは AST ステージの[計画](/handbook/engineering/development/sec/secure/planning)プロセスに従っています。

#### ウェイト

ウェイトはエンドツーエンドの実行時間の予測日数を表します。これにより、Issue 全体のウェイトを合算することで、わかりやすいキャパシティ計画とエピックレベルの見積もりが可能になります。

##### 可能な値

ウェイトはフィボナッチに着想を得た値を日数にマッピングしています。複雑さによる不確実性がある場合は、ウェイトに反映させるか、作業をより小さな Issue に分割してください。

| ウェイト | 日数 | 参考 Issue |
| ------ | ---- | ---------------- |
| 0.5 | 半日 | |
| 1 | 1 日 | [Bandit アナライザーを v1.6.2 に更新](https://gitlab.com/gitlab-org/gitlab/-/issues/12926) |
| 2 | 2 日 | [セキュリティダッシュボードが Issue の却下詳細を表示すべき](https://gitlab.com/gitlab-org/gitlab/-/issues/9715) |
| 3 | 3 日 | [依存関係スキャンの失敗: "engine 'node' is incompatible with this module"](https://gitlab.com/gitlab-org/gitlab/-/issues/12471)、[依存関係リストに重複が含まれる (npm プロジェクト)](https://gitlab.com/gitlab-org/gitlab/-/issues/12162)、[vulnerability-details が vulnerability を prop として受け取るようにする](https://gitlab.com/gitlab-org/gitlab/-/issues/14006) |
| 5 | 5 日 | [エンジニアリングディスカバリー: Gemnasium クライアント/サーバーアーキテクチャの再検討](https://gitlab.com/gitlab-org/gitlab/issues/12930)、[依存関係スキャンで setup.py をサポート](https://gitlab.com/gitlab-org/gitlab/issues/11244) |
| 8 | 8 日 | [Apex の SAST](https://gitlab.com/gitlab-org/gitlab/-/issues/10680)、[依存関係リストにライセンス情報を追加 - ライセンス情報バックエンドの追加](https://gitlab.com/gitlab-org/gitlab/issues/13084) |
| 13 | 13 日 | [WAF 統計レポート](https://gitlab.com/gitlab-org/gitlab/-/issues/14707)、[DAST に REST API スキャンのサポートを追加](https://gitlab.com/gitlab-org/gitlab/-/issues/10928) |
| 21 | 21 日 | |
| それ以上 | 変装したエピック | |

アイテムが最初のウェイトより長くかかる場合があります。[速度](/handbook/engineering/development/principles/#velocity) は予測可能性より重要であるため、ウェイトを膨らませることはしません。

#### マイルストーンでの作業提供へのコミット方法

GitLab では、`~Deliverable` ラベルは[リリーススコープラベル](https://docs.gitlab.com/ee/development/labels/index.html#release-scoping-labels) と呼ばれています。このラベルを適用することは、Issue が割り当てられたマイルストーン内で必要な作業を実現するというエンジニアリングチームのコミットメントを表します。つまり、Issue が `workflow::ready for development` 状態になった後に作業を提供できるかどうかを決定します。

`~Deliverable` ラベルをいつ使用するかの決定は、以下の質問に答えることで行います。

- Issue のウェイトを考えると、エンジニアがマイルストーン内で Issue を提供するのに十分な時間が残っていると合理的に確信できますか?
  - 現在、ウェイト 13 の Issue は単一のマイルストーン内で提供できると仮定しています。
- 今から作業を始めれば、次のマイルストーンの早期に達成できますか?
  - そうであれば、プロダクトマネージャーと状況について話し合ってください。プロダクトマネージャーが提案されたタイムラインに同意し、進めたい場合は作業を開始できます。
  - 作業を続ける前にマイルストーンが更新されていることを確認してください。
- これはオーバーヘッドを追加することなくさらに分割できない、価値を追加する最小のテスト可能な作業単位ですか?

上記の質問への回答がすべて「はい」の場合、`~Deliverable` ラベルが適用されます。このラベルの使用はグループの Say/Do 比率に影響するため、エンジニアリングマネージャーがこのラベルの DRI となります。ただし、Static Analysis のエンジニアは、作業が達成可能だと考える場合は、自分の判断でこのラベルを使用して進める権限があります。どのように進めるか不明な場合はエンジニアリングマネージャーに相談してください。

#### コードレビュープロセス

レビューとメンテナーコードのプロセスは、[Static Analysis グループコードレビュー](/handbook/engineering/development/sec/secure/static-analysis/code_review/) ページに記載されています。

### セキュリティ脆弱性プロセス

私たちは提供するものが安全であることを保証する責任があります。つまり、GitLab のセキュリティ機能をドッグフーディングしています。

[脆弱性管理プロセス](/handbook/engineering/development/sec/secure/#vulnerability-management-process) を参照してください。

脆弱性の Issue を作成する際は、[エンジニアリングセキュリティの手順](/handbook/security/engaging-with-security/#creating-new-security-issues) に従ってください。

#### 脆弱性の重大度別 SLO

`Unknown` の脆弱性をトリアージする際は、解決の優先度を決定するために適切な重大度を割り当てる必要があります。対応する優先度は [Issue トリアージ](/handbook/product-development/how-we-work/issue-triage/#priority) から取得されます。

| 目標 | Unknown | Critical | High | Medium | Low |
|---|:---:|:---:|:---:|:---:|:---:|
| 脆弱性の却下/確認 | 72h | 72h | 72h | 1か月 | 1か月 |
| 確認済み脆弱性の解決 | N/A | ~priority::1 | ~priority::2 | ~priority::3 | ~priority::4 |

#### ワークストリーム指定

以下は作業の種類とそれが流れるワークストリームの説明です。

| 作業 | 担当ワークストリーム |
|---|---|
| 新しい脆弱性のトリアージ | 脆弱性を導入する MR レビューの一部として行う必要があります。 |
| 既存の脆弱性のトリアージ | [リリースプロジェクトの Issue テンプレート](https://gitlab.com/gitlab-org/security-products/release/-/blob/master/scripts/templates/release_issue.md.erb) で定義された各アナライザーのメインメンテナーが行います。 |
| Critical / High 脆弱性の解決 | プロダクト主導の優先事項にする必要があります。 |
| Medium / Low 脆弱性の解決 | [リリースプロジェクトの Issue テンプレート](https://gitlab.com/gitlab-org/security-products/release/-/blob/master/scripts/templates/release_issue.md.erb) で定義された各アナライザーのメインメンテナーが行います。 |

常に、コミュニティや現在のローテーション中の MR コーチからの貢献を歓迎します。

#### 誤検知の却下プロセス

脆弱性を誤検知として却下するプロセスは以下の通りです:

- [Static Analysis グループが定義した誤検知](/handbook/engineering/development/sec/secure/static-analysis/false_positives/) ページに記載されていない場合は、誤検知の種類とそれが誤検知と分類される理由を説明するドキュメントを作成してください。
- 脆弱性が特定のコード場所に関連している場合（例: SAST）、各 FP 場所に誤検知ドキュメントへのリンクを含むコメントをつけた MR を作成してください。
- 以下を含むコメントとともに GitLab UI で脆弱性を却下します:
  - 誤検知ドキュメントへのリンク。
  - 誤検知コメント MR が作成された場合はそのリンク。

#### 脆弱性 Issue のラベル

脆弱性の Issue を作成する際は、通常のラベルに加えて以下のラベルを追加することを検討してください:

- ~security
- ~"type::bug"

Issue の作成時に重大度/優先度に疑問がある場合や重大度/優先度ラベルが追加されていない場合、[Appsec エスカレーションエンジン](https://gitlab.com/gitlab-com/gl-security/engineering-and-research/automation-team/appsec-escalator#appsec-escalation-engine) を活用して Appsec チームとのディスカッションを開始できます。このボットは ~security とラベル付けされていて ~test または ~"type::feature" とラベル付けされていない Issue を監視します。重大度/優先度ラベルがない場合は、security-sp-label-missing と security-triage-psirt ラベルが追加され、この Issue は [AppSec トリアージダッシュボード](https://triage-dashboard-2c1ad6.gitlab.io/) にリストされます。その後、グループの Appsec 安定したカウンターパートまたは Appsec チームのトリアージ担当者が Issue を引き継ぎ、Appsec トリアージローテーションの一部として重大度を割り当てます。

### 出荷したものに責任を持つ {#we-own-what-we-ship}

私たちが開発するセキュリティアナライザーはオープンソースソフトウェアに大きく依存する場合があります。
これはそれらのソフトウェアパッケージの変更によって大きな影響を受ける可能性があることを意味します。私たちは[GitLab リリース](https://about.gitlab.com/releases/)ごとにこれらのパッケージの更新を確認します。新しいバージョンは以下の側面から精査されます:

- 破壊的変更
- 新しい、更新された、または削除されたセキュリティルール
- 動作の変更
- 新しいバージョンを使用するために必要なアナライザーの変更
- セキュリティ脆弱性

破壊的変更が発見された場合は Issue が作成され優先されます。そうでない場合、依存関係の更新は関連するアナライザーの変更履歴に詳述され、変更を利用した新しいバージョンがリリースされます。これには多くの作業が必要であり、新しいバージョンで何が起こっているかを理解するために数時間の集中した調査が必要になる場合があります。その結果、依存関係の更新は均等に分配され、シニアおよびインターメディエイトのバックエンドエンジニアに割り当てられ、残りはグループのスタッフバックエンドエンジニアに割り当てられます。割り当ては[リリースプロジェクトの Issue テンプレート](https://gitlab.com/gitlab-org/security-products/release/-/blob/master/scripts/templates/release_issue.md.erb) を通じて管理されます。

割り当てられたバックエンドエンジニアは、依存関係のオープンソースコミュニティとのグループの主要な連絡役です。エンジニアは、特に Critical または High のセキュリティ調査が確認された場合は特に、それらのプロジェクトに貢献することが期待されます。

#### セキュリティ脆弱性のテスト

私たちは最も依存している OSS プロジェクトのミラーコピーを含む[依存関係グループ](https://gitlab.com/gitlab-org/security-products/dependencies)を持っています。これらのプロジェクトの新しいバージョンにアナライザーを更新する MR を提出する前に、エンジニアは以下を行うことが期待されます:

1. 出荷したい新しいバージョンに一致するリリースブランチを見つけます。
1. 存在しない場合は、対応するタグからブランチを作成します。
1. 全セキュリティ製品を実行するパイプラインを通じてブランチをプッシュします。
1. 注意: これらのプロジェクトの一部は複雑なビルドを持っています。Auto DevOps が機能することもありますが、[spotbugs](https://gitlab.com/gitlab-org/security-products/dependencies/spotbugs) などのプロジェクトはスキャンが成功するためにカスタム CI 設定が必要な場合があります。また、これらのプロジェクトにはフィルタリングしないとノイズになる可能性があるテストが含まれています。
1. 発見された潜在的なセキュリティ脆弱性を評価します。
1. Critical または High の重大度の調査を解決するために関連するオープンソースコミュニティと協力します。
1. GitLab は[セキュアコーディングガイドライン](https://docs.gitlab.com/ee/development/secure_coding_guidelines.html) を公開しており、特定されたリスクを解決しようとする際に役立つリソースとなります。

私たちは Critical および High の重大度の脆弱性を含む更新された依存関係を出荷したくありません。このような状況にある場合、問題がパッチされるまで依存関係の更新を保留します。

#### Go セキュリティ修正

golang 自体のセキュリティ更新のためにアナライザーを更新する必要がある場合があります。この状況では、[確立されたリリースプロセス](https://docs.gitlab.com/ee/development/sec/analyzer_development_guide.html#security-and-build-fixes-of-go) に従います。

#### テストと検証

ユーザーは、どのオープンソースまたはプロプライエタリなコンポーネントを含んでいるかに関わらず、質の高い体験を提供することを期待しています。
また、ツールを採用するかどうかの情報に基づいた決定ができるように、サポートされている設定を明確に概説するドキュメントも期待しています。

設定をサポートしていると文書化する前に、それが機能することを**検証します**。
例えば、特定の種類のファイルまたはビルド設定をサポート対象の機能としてリストアップする前に、少なくとも最低限でも 1 回は確認していなければなりません。

ただし、依存するコンポーネントのすべてのエンドツーエンドの**テスト**を独自に再現することは**しません**。
これらのテストを独立して維持することは不必要な労力を必要とし、それが不足している場合にアップストリームに貢献する方がより良い作業となります。
代わりに、スモークテストとデモを目的とした基本的な設定をカバーするテストを構築することを目指しています。

テストカバレッジがまだ完全でない場合でも、検証後にサポートされている設定を文書化することを選択できます。

### 計画外の作業

一般的に、Static Analysis グループには 2 つの計画外の作業の源があります: コミュニティの貢献と ~priority::1 バグです。両方のシナリオに迅速かつ効率的に対応できるよう、各リリースでキャパシティを確保します。どちらのシナリオでも、コミュニティの貢献はアナライザーを「所有する」[エンジニア](#we-own-what-we-ship)にルーティングします。

ただし、GitLab 製品の一部として出荷されるアナライザーを超えたプロジェクトを所有し、貢献しています。可能な場合は、Static Analysis のエンジニアが対応を必要とする計画外の作業は、そのプロジェクトの `CODEOWNERS` ファイルに従ってルーティングされます。そうでない場合、計画外の作業はケースバイケースで検討・対処されます。

#### 顧客と見込み客へのサポート

月次ベースで作業を計画していますが、顧客や顧客対応のチームメンバーが計画外のサポートを必要とする場合があります。
これらのリクエストは顧客とビジネスの成功に影響するため、迅速にサポートすることを目指しています。

一般的に、初期レスポンスを提供し、できるだけ迅速に質問/レポートをトリアージすることを目指しています。
「迅速」とは、例えばチームメンバーが通常の勤務時間中に回答し、通常の作業活動を継続することを意味します。
貢献できる人は誰でも質問者に最初に連絡し、明確化のための質問をするよう促されます—後で質問を解決できない場合はいつでも別のグループメンバーをタグ付けできます。

トリアージの目的は他のチームメンバーが前進できるようにサポートすることです。問題に対処するために開発作業が必要な場合、それは自動的にグループの最優先事項にはならず、既存の計画済み作業を自動的に置き換えることはありません。
バグ修正や改善をすぐに取り上げるべきかどうかに疑問がある場合は、エンジニアリングマネージャーとプロダクトマネージャーに決断を促すために警告すべきです。

[顧客サクセスのエスカレーション](/handbook/customer-success/csm/escalations/) が宣言された場合、エンジニアリングマネージャーとプロダクトマネージャーの両方に警告し、適切なチームメンバーが既存の作業の優先度を下げてできるだけ早くエスカレーションに対応するよう指定すべきです。
