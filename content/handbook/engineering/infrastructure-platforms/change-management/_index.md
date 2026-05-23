---
title: "変更管理"
upstream_path: /handbook/engineering/infrastructure-platforms/change-management/
upstream_sha: 1e195b58b9f249ff10bd0e705106c320fee86141
translated_at: "2026-05-14T00:00:00Z"
translator: claude
stale: false
lastmod: "2026-05-08T08:19:56+02:00"
---

## 目的

**変更管理**は*従来*、IT環境において運用環境の変更を慎重に管理するために適用されるプロセス、手順、ツール、技術を指してきました。これには、変更チケットと計画、承認、変更レビューミーティング、スケジュール設定、その他の*煩雑な手続き*が含まれます。

私たちの文脈では、**変更管理**とは、運用環境の変更を管理するために適用するガイドラインを指し、その目的は（優先度の高い順から）**安全に**、**効果的に**、**効率的に**行うことです。ある場合には従来の変更管理の要素を使う必要がありますが、ほとんどの場合、私たちは安全な方法でスピードを高めるため、それらの従来の変更管理の側面を取り除く自動化を構築することを目指します。

私たちの最優先目標は、従来の変更管理の側面を回避する変更を最大化することであり、これは時間とともに進化する**イテレーティブなプロセス**です。成功はビジネスニーズが要求するスピードで変更を安全に実行する能力で測定されます。

## スコープ

**変更**は、運用環境への変更として定義され、設定変更、環境へのコンポーネントやサービスの追加または削除、クラウドインフラの変更を含みます。私たちの[ステージング環境](/handbook/engineering/infrastructure-platforms/environments/#staging)は GitLab.com のリリースプロセスにとって極めて重要です。そのため、ステージングは GitLab の運用環境の一部として、変更管理の範囲内であると見なされるべきです。アプリケーションのデプロイメントは技術的には変更ですが、変更管理プロセスからは除外されており、ほとんどの[フィーチャーフラグの切り替え](https://docs.gitlab.com/ee/development/feature_flags/controls.html#process)も同様です（すべてではありません）。

インシデントの解決中に実行する必要がある変更は、[インシデント管理](/handbook/engineering/infrastructure-platforms/incident-management/)に該当します。

## 役割と責任

| 役割  | 責任 |
|-----------|-----------|
| GitLab チームメンバー | この手順の要件に従う責任 |
| Infrastructureチーム | これらの手順を実装し実行する責任 |
| Infrastructureマネジメント (Code Owners) | この手順への重要な変更と例外を承認する責任 |

## 私の変更は変更リクエストが必要か？

あなたの変更は:

- 何らかのリスクを伴うか？
  > この質問に答えるために: この変更は以前に試みられたか？非本番環境でこの変更はどれだけ広範にテストされたか？これが本番環境で問題を引き起こさないという証拠にどれだけ自信があるか？
- デプロイメントおよび/またはフィーチャーフラグの一時停止が必要か？
- 手動ステップが必要か？
- 複数の部門に影響し、可視性を高める必要があるか？

上記の質問のいずれかに **YES**（または「たぶん」）と答えた場合、変更リクエストワークフローに従うべきです。このワークフローの目的は、可視性を高めることで、悪影響を持つ変更が本番環境に到達する可能性を減らすことです。また、この性質の変更が本番環境に到達した場合に、レビュー済みのロールバック計画を実行する準備ができていれば、できるだけ迅速に良好な状態に戻すことができます。

変更リクエストワークフローに従うべき変更の例:

- [Cloudflareでサイト全体のレート制限を実装](https://ops.gitlab.net/gitlab-com/gl-infra/config-mgmt/-/merge_requests/4000)。
- [本番環境のCSP変更](https://gitlab.com/gitlab-com/gl-infra/production/-/issues/6192)。
- [ステージングのテーブルからインデックスを削除](https://gitlab.com/gitlab-com/gl-infra/production/-/issues/7476)

## 変更リクエストが不要な場合

変更リクエストが不要な変更タイプの非網羅的なリスト:

- 自動的にデプロイされ、ロールバックがマージリクエストのリバートであるマージリクエストのマージ。
- 低リスクと見なされるマージリクエスト。
- 環境にクリティカルでないマイナーな依存関係更新。
- 設定経由で行われ、リスクが高いとは見なされない機能トグル。

例:

- [アラートのサービス依存関係を追加](https://gitlab.com/gitlab-com/runbooks/-/merge_requests/4813)
- [小さなクックブックの更新](https://gitlab.com/gitlab-com/gl-infra/chef-repo/-/merge_requests/2114)
  - **判断を使ってください**: クックブックのバージョン更新が変更管理ワークフローに従うべきかどうかは、クックブックに加えられた変更によります。

## 不明な場合

- [#infrastructure_platforms](https://gitlab.enterprise.slack.com/archives/C02D1HQRTKQ) または [#s_production_engineering](https://gitlab.enterprise.slack.com/archives/C07U6SAKS4D) で意見を求める
- 変更管理 Issue を開き、慎重を期す。

## 変更リクエストワークフロー

計画 Issue は、[変更管理 Issue テンプレート](https://gitlab.com/gitlab-com/gl-infra/production/-/issues/new?issuable_template=change_management)経由で[本番](https://gitlab.com/gitlab-com/gl-infra/production/issues)プロジェクトトラッカーで開かれます。各 Issue は、対応する重要度レベルの Issue テンプレートを使用して開かれる必要があります: `C1`、`C2`、`C3`、または `C4`。提案された変更の詳細な説明を提供し、テンプレートのすべての関連情報を含む必要があります。各計画 Issue は最初に`~"change::unscheduled"`とラベル付けされ、レビューされて期日でスケジュールされるまでそのままです。計画が承認されスケジュールされた後、可視性のために `~"change::scheduled"` とラベル付けする必要があります。

Slack から変更管理 Issue を開くには、以下のスラッシュコマンドを発行します:

```text
/change declare
```

Slack から変更 Issue を作成すると、説明のいくつかのフィールドが自動的に入力されます。

## 変更の中止

変更がロールバックされる、または完了しない場合は、`change::aborted`ラベルを適用して Issue をクローズします。
変更が後日再試行される場合は、新しい変更を宣言する必要があります。

## 変更の重要度

`C1`および`C2`変更リクエストには、`~blocks deploys`および`~blocks feature-flags`ラベルが自動的に適用されます。これらの重要な変更リクエストが`change::in-progress`とラベル付けされると、デプロイメント、フィーチャーフラグ変更、および潜在的に他の操作をブロックします。このような操作の良好な時間見積もりを持つよう特に注意し、理想的には、それらが予期せず受け入れがたいほど長く実行されている場合に安全に停止できるポイント/制御を持つようにしてください。提案された変更が当該操作によって悪影響を受けない場合は、`~blocks deploys`および/または `~blocks feature-flags` を削除します。

特に長時間実行されるRailsコンソールタスクの場合、承認/認識のために`C2`として開始し、実行中に`C3`にダウングレードすることが*受け入れられる*場合があります。ただし、複数のデプロイメントにわたる長時間実行されるコードの影響と、時間の経過に伴うコード/データストレージのミスマッチのリスクを慎重に検討してください。そのようなラベルのダウングレードは、理想的には、実行されるコードの安全性を評価する少なくとも2セットの目（SRE/開発者）を持つべきであり、可視性のためにマネジメントの承認が推奨されます。

### 重要度1

これらは影響が大きい、またはリスクが高い変更です。変更が本番環境にダウンタイムを引き起こす場合、常に`C1`に分類されます。

**重要度1の例:**

1. DBの機能性に影響するPostgresホストへの変更（例: ノード数、バックアップ戦略の変更、レプリケーション戦略の変更、設定変更など）。
1. Infra as code (IaC)への重要なアーキテクチャ変更。
1. ペットへの重要なIaC変更 - Postgres、Redis、その他の単一障害点。
1. 主要なベンダーまたはサービスプロバイダーの変更（例: CDN、トランザクションメールプロバイダー、DNSなど）。
1. ツールの主要バージョンアップグレード（**主要**の定義はwww.semver.orgに従う）（例: HAProxy、AlertManager、Chefなど）。
1. 私たち自身で生成したカスタムビルドの作成とデプロイは一般的に推奨されません。公式アップストリームリリースの一部になる前に適用するセキュリティまたは安定性パッチのために必要となるユースケースがあります。それは重要度1ガイドラインを通じてのみ許可されます。
1. アラート基盤への主要なアーキテクチャまたはツーリング変更。
1. 証明書発行機関の変更/新しいSSL証明書のアップロードを含むあらゆる手順。

#### 承認

1. Issue に期日が設定されていること、および[GitLab Production](https://calendar.google.com/calendar/embed?src=gitlab.com_si2ach70eb1j65cnu040m3alq0%40group.calendar.google.com)カレンダーに登録されていることを確認してください。
   1. 計画可能なC1（プロアクティブメンテナンス、スケジュールされたアップグレード、計画されたインフラ変更などを含むがこれらに限定されない）には、適切なステークホルダー通知を確保するため最低2週間のリードタイムが必要です。
1. ダウンタイムを含む変更は、ユーザーに事前に通知する必要があります。[ダウンタイムを必要とする変更の通知](/handbook/engineering/infrastructure-platforms/change-management/#communicating-a-change-that-requires-downtime-maintenance-window)のガイダンスに従ってください
1. データベース変更には、変更の種類に応じて適切な専門家からのレビューが必要です:
   - **データベースサービス変更**（インフラ、設定、レプリケーション、バックアップ戦略など）には、DBREによるレビューと承認が必要です。`@gitlab-org/database-team/reliability`にメンションしてください
   - **データベースモデル変更**（マイグレーション、スキーマ変更、データモデル変更など）はアプリケーションレイヤーの変更であり、モノリスリポジトリにコミットされ、データベースメンテナーによって承認される必要があります。元のマージリクエストの承認者または[別のデータベースメンテナー](https://gitlab-org.gitlab.io/gitlab-roulette/?mode=show&visible=maintainer%7Cdatabase)がCR内でのそのコードの使用をレビューする必要があります。
1. 変更リクエスト Issue で`platform_leadership_approved`ラベルを取得して、Infrastructure Platformリーダーシップ（Infrastructure Platformsの EM+またはStaff+ IC）による変更の承認を得てください。承認をリクエストするには`@gitlab-org/saas-platforms/change-review-leadership`にメンションします。レビュアーは変更作成者とは異なるチームから選ばれる必要があります。承認前に[Platform Leadershipレビューガイドライン](platform-leadership-review/)を確認してください。
1. 変更の時間にスケジュールされたEngineer On-Call (EOC)を特定し、スケジュールされ次第、変更計画について担当者に知らせてください。
（ソースは[incident.io](https://app.incident.io/gitlab/on-call/schedules/01K5YWAGZ7YCQGAG7ATQ9XQWHW)です。アクセス権がない場合は[支援を得る](/handbook/engineering/infrastructure-platforms/)を試してください）
1. Slack で`@release-managers`を、Issue で`@gitlab-org/release/managers`をメンションして、変更で必要に応じてデプロイメントまたはマイグレーションを一時停止できることを確認します。
1. `#production` Slack チャンネルで計画実行の開始を発表し、`@sre-oncall`エイリアスを使用して EOC に直接通知し、変更のタイミングに影響を与える可能性のある進行中のインシデントがないことを確認します。確認されたら、EOC は`eoc_approved`ラベルを適用し、変更を進めることができます。
1. EOC と「Situation Room」zoomチャンネルに参加し、計画実行の開始について口頭での承認を得ます。

変更の実行全体を通して EOC を関与させる必要があります。

### 重要度2

これらは影響が大きい、またはリスクが高い変更です。変更がステージング環境にダウンタイムを引き起こす場合、常に`C2`に分類されます。

これらは本番環境でダウンタイムを引き起こすとは予想されない変更ですが、予期しないことが発生した場合に影響のリスクをまだ持ちます。例えば、Cattleフリートのサイズを縮小することは、オーバープロビジョニングを特定したため通常は問題ありませんが、前後で慎重にモニタリングする必要があります。

**重要度2の例:**

1. 重要度1の要件を満たさないデータベース設定への変更は、重要度2の変更と見なされるべきです。
1. Infra as code (IaC)へのほとんどのアーキテクチャ変更。
1. HTTP Routerルーティング変更。
1. Topology Service cell設定変更とルーティングロジック変更。
1. ペットへのほとんどのIaC変更 - Postgres、Redis、その他の単一障害点。
1. ロードバランサー設定 - トラフィックフローに不可欠な、バックエンドまたはフロントエンドへの主要な変更。
1. 減少があるKubernetes外の本番仮想マシンへのIaC変更。
1. 本番問題のトラブルシューティングに不可欠なTeleportへの主要な変更。
1. アラートルーティングまたは統合への主要な変更。
1. SQLスクリプト、Rubyスクリプトモジュール、`gitlab-rails`または`gitlab-rake`を使用して本番コンソールサーバー上で実行されるrakeタスクなどの手続きの呼び出しは、重要度2の変更と見なされるべきです。

#### 承認

1. Issue に期日があり、[GitLab Production](https://calendar.google.com/calendar/embed?src=gitlab.com_si2ach70eb1j65cnu040m3alq0%40group.calendar.google.com)カレンダーにイベントがあることを確認してください。
1. ダウンタイムを含む変更は、ユーザーに事前に通知する必要があります。[ダウンタイムを必要とする変更の通知](/handbook/engineering/infrastructure-platforms/change-management/#communicating-a-change-that-requires-downtime-maintenance-window)のガイダンスに従ってください
1. データベース変更には、変更の種類に応じて適切な専門家からのレビューが必要です:
   - **データベースサービス変更**（インフラ、設定、レプリケーション、バックアップ戦略など）には、DBREによるレビューと承認が必要です。`@gitlab-org/database-team/reliability`にメンションしてください
   - **データベースモデル変更**（マイグレーション、スキーマ変更、データモデル変更など）はアプリケーションレイヤーの変更であり、モノリスリポジトリにコミットされ、データベースメンテナーによって承認される必要があります。元のマージリクエストの承認者または[別のデータベースメンテナー](https://gitlab-org.gitlab.io/gitlab-roulette/?mode=show&visible=maintainer%7Cdatabase)がCR内でのそのコードの使用をレビューする必要があります。
1. 変更リクエスト Issue で`platform_leadership_approved`ラベルを取得して、Platform Leadership（Staff+ SRE、Principal Engineer、またはSenior Staff Engineer）による変更の承認を得てください。承認をリクエストするには`@gitlab-org/saas-platforms/change-review-leadership`にメンションします。レビュアーは変更作成者とは異なるチームから選ばれる必要があります。承認前に[Platform Leadershipレビューガイドライン](platform-leadership-review/)を確認してください。
1. 変更の時間にスケジュールされたEngineer On-Call (EOC)を特定し、当該 EOC と一緒に計画をレビューします。
（ソースは[incident.io](https://app.incident.io/gitlab/on-call/schedules/01K5YWAGZ7YCQGAG7ATQ9XQWHW)です。アクセス権がない場合は[支援を得る](/handbook/engineering/infrastructure-platforms/)を試してください）
1. `#production` Slack チャンネルで計画実行の開始を発表し、`@sre-oncall`エイリアスを使用して EOC に直接通知し、変更リクエスト Issue で`eoc_approved`ラベルを取得することで、EOC による変更の承認を得ます。

### 重要度3

これらは負の影響のリスクがない、または非常に低い変更ですが、依然として固有の複雑さがある、または完全に自動化されておらず手動である変更です。

**重要度3の例:**

1. 手動介入を必要とするIaC変更（例: Terraform状態操作）。
1. 手動である変更（例: Grafanaへのプラグインの追加）。
1. サービスプロバイダーの設定変更（例: CDN、トランザクションメールプロバイダー、DNSなど）。
1. ツールまたはコンポーネントのマイナーバージョンアップグレード（**マイナー**の定義はsemver.orgに従う）（例: HAProxy、AlertManager、Chefなど）。
1. IaCから古いホストを削除（例: レガシーインフラの削除）。

#### 承認

1. Issue に期日を追加します。
1. 計画がReliabilityの他の誰かによってレビューされていることを確認します。

### 重要度4

これらは非常に低リスクで一般的に実行される変更、または完全に自動化されている変更です。これらの変更は、実質的な制御手段というよりは、可視性のために主に記録されている変更であることが多いです。

**重要度4の例:**

1. ライブデータに対するミューテーション操作を最終的に実行する既存のコードパスウェイの呼び出し。これは、典型的に読み取り専用の操作に限定されるべき診断調査操作とは区別されます。そのような診断の呼び出しを共同観察するためにピアを含めるべきかどうかは、表面上はエンジニアの裁量に委ねられています。

#### 承認

承認は不要です。

### 変更手順

変更計画にはしばしば手動タスクが含まれます

- コマンドラインツールではなくUIの使用を避けます。例えば、GCPコンソールの代わりに`gcloud`コマンドラインユーティリティを使用します。
- 多数の個別のシェルコマンドではなくスクリプトの使用を検討します
- スクリプトが必要な場合は、ドライラン機能を追加し、GitLab の[スクリプトガイドライン](https://docs.gitlab.com/ee/development/shell_scripting_guide/)に従うことを検討します

## 変更のスケジュール

UTCは、すべての変更のスケジュール時間について話すときに使用される標準タイムゾーンです。

変更をスケジュールする際は、変更の影響を念頭に置き、次の質問を検討してください:

1. 同じ時間に他のC1/C2変更が発生していますか？
1. 実施される変更には、計画されたフェイルオーバーまたは他のリスクの高いコンポーネントが含まれており、低トラフィック期間に変更を実行することで顧客へのリスクを減らすことができますか？
1. 変更の DRI として、変更後に合意された期間、変更を監督し、そのステータスを EOC に伝えることができますか？
1. 変更は、変更から生じる問題から回復（つまり変更のロールバック）するのに適した時間に実施されていますか？変更技術者の作業日に十分早く変更をスケジュールし、後で予期しない影響が見えるようになるまで数時間を許すことが一般的なベストプラクティスです。そうすれば、変更技術者はそれらの影響を軽減し対処するためにまだ周りにいます。
1. 提案された時間または期間中にEngineer on CallまたはRelease Managerのシフト変更がありますか？

## 変更の実行

変更がスクリプトによって実行される場合、対象環境のbastionホストからターミナルマルチプレクサ（例: screenまたはtmux）セッションで実行する必要があります。
bastionホストの使用には、意図しないアクション（例: スクリプトのバグによって引き起こされる）が他の環境に広がるのを防ぐ利点があります。
ターミナルマルチプレクサは、変更の途中でbastionへの接続を失う可能性とその予測不可能な結果から保護します。

bastionホストでは`sudo`が無効になっているため、スクリプトが必要とする場合は、覗き見されることを恐れずにChef PEM ファイルをそれらの1つにコピーできます。

スクリプトを実行する一連のアクションは次のようになります:

```text
your-workstation $ ssh -A bastion-01-inf-gstg
bastion-01-gstg  $ tmux
bastion-01-gstg  $ git clone git@gitlab.com:my-migration/script.git
bastion-01-gstg  $ ./script/migrate
```

## 変更レビュー

メンテナンス変更には変更レビューが必要です。レビューは、特定の変更の潜在的リスクを指摘するフォーラムを提供しながら、チームの**集合的な**経験を活用することを意図しています。~C1または~C2変更リクエストに対しては、複数のレビュアーの使用を検討してください。

誰にレビューを依頼するか分からない場合は、[#s_production_engineering](https://gitlab.enterprise.slack.com/archives/C07U6SAKS4D)で SRE に変更リクエストのレビューを依頼してください。

Issue に割り当てられた変更重要度ラベルに基づいて、`Change Reviewer checklist`の各項目に記入します。

## コミュニケーションチャンネル

情報はあらゆる変更の間の重要な資産です。意図された宛先に情報の流れを適切に管理することは、利害関係者にタイムリーに進展を知らせる上で重要です。変更が起こっているという認識は、利害関係者がそうした変更を計画するのに役立つ上で重要です。

このフローは以下によって決定されます:

- 情報の種類、
- 意図された対象者、
- そして時間的感度。

例えば、大規模なエンドユーザーは、リリースに問題が影響する可能性を避けるために、メンテナンスウィンドウ中にソフトウェアリリースを行うことを避ける選択をするかもしれません。

さらに、情報過多を避けることは、各利害関係者の集中力を保つために必要です。

通信を改善するために、以下は高重要度の変更に対する推奨事項です:

- 変更中はインシデントzoomチャンネルを使用します
- 場所にいるさまざまな対象者向けの定期的な更新（CMOC がこれを処理します）:
  - エンドユーザー (Twitter)
  - eStaff
  - サポートスタッフ
  - 社員全般
- メンテナンスが完了した後、次のオンコールチームメンバーへの引き継ぎノートを残します。次のような項目を含めます:
  - メンテナンスの状態/成功
  - サイレンス化された可能性があり、引き継ぎになる可能性のあるアラート
  - 注意領域を監視する特定のグラフへのリンク

## ダウンタイムを必要とする変更の通知（「メンテナンスウィンドウ」）

時々、顧客とSLOに影響を与えるダウンタイムを必要とする本番変更を実行する必要があります。このセクションでは、これらのタイプの状況で通信を成功裏に管理する方法について説明します。

参考として、重要なアーキテクチャ変更を伴わない`C1`の場合、変更の5〜6週間前に通信するべきです。変更が大規模なマイグレーションまたは重要なアーキテクチャ変更を含む場合は、より長い準備時間が推奨されます。

ステップ:

- 変更 Issue に外部とのコミュニケーションのドラフト文言を含めるステップを追加します。
- 変更 Issue に`~Scheduled Maintenance`ラベルを追加するか、機密 Issue が必要な場合は、テンプレート`external_communication`を使用して新しい Issue を作成します。
- 以下から全体的な計画と予想される影響についての承認を取得します:
  - Director of SRE, Infrastructure
  - VP of Infrastructure & Quality
  - VP of Support
  - [Release Managers](/handbook/engineering/infrastructure-platforms/gitlab-delivery/delivery/#reaching-our-team)
- 変更の少なくとも1ヶ月前（可能であれば）:
  - `#customer-success` Slack チャンネルで私たちの CSM にこの変更を主要顧客に通知する方法についての好みを尋ねます:
    - `@cs-tam-mgrs`エイリアスを使用して CSM マネージャーにpingし、トップ SaaS 顧客向けに CSM に通知するよう依頼します。
    - 担当者は、顧客のチャンネルで変更の詳細について通信することを提案する可能性があります。その場合、メッセージのドラフトを作成し、CSM とその内容について合意し、関連する顧客の Slack チャンネルでそれを共有します（CSM と同期して）。
  - 可視性とエンゲージメントのために`@release-managers`、`@db-team`および`@dbre`をメンションしながら、`#whats-happening-at-gitlab` Slack チャンネルで情報と Issue へのリンクを共有します。
- その後すぐに、通信または変更 Issue はstatus.ioの単純な投稿にリンクされるべきです（「new maintenance」をクリック）。私たちは CMOC と連携して、可能なすべてのチャンネル（メール、ツイート、Slack など）を通じてstatus.ioでそのメンテナンスを共有する必要があります。そこから顧客は質問やコメントができるようになります。
[ダウンタイムを顧客に通信するための公式企業方法はstatus.io経由です]。
- この時点から、今度の変更が既に公開されているとき、私たちは以下を行う必要があります:
  - 顧客からの質問/コメントがあるかどうか、それらに適時に対処するために、定期的にコミュニケーション Issue をチェックします。
  - status.io経由で、変更時間の2週間前、1週間前、3日前、1日前に今度の変更について顧客に思い出させます。

## Production Change Lock (PCL)

私たちが行う変更は厳密にテストされ慎重にデプロイされていますが、GitLab Summit、主要なグローバルホリデー、GitLab チームメンバーの可用性が大幅に減少する時期などの特定のイベント中に本番変更を一時的に停止することは良い習慣です。

私たちは、低いチームメンバーのカバレッジまたはプラットフォームの大幅な不安定さの期間以外の理由でハードPCLを作成しません。イベント中のプラットフォームの安定性について懸念がある場合は、ソフトPCLオプションを検討してください。

これらの期間中に本番環境変更を行うリスクには、インシデントが発生した場合の即時の顧客影響および/またはエンジニアリングチームの可用性の低下が含まれます。したがって、私たちは**Production Change Lock (PCL)**と呼ばれるメカニズムを導入しました。PCL期間中、自動デプロイは一時停止されます。EOC の裁量でデプロイメントを手動で実行できます。例えば、EOC は、GitLab.com の安定性を確保するために、またはPCLが解除されたときにデプロイメントがスムーズに実行され続けることを確保するために、変更をデプロイすることを選択する場合があります。

PCLには2つのタイプがあります: **ソフト**と**ハード**。

### PCL中に制限されるものは何ですか？

| アクティビティ | ソフトPCL | ハードPCL |
|----------|----------|----------|
| **インフラ変更 (C2+)** | ❌ ブロック | ❌ ブロック |
| **インフラ変更 (C3、C4)** | ✅ 許可 | ❌ ブロック |
| **canaryへのコードデプロイ** | ✅ 許可 | ❌ ブロック |
| **本番へのコードデプロイ（ポストデプロイマイグレーションなし）** | ✅ 許可（EOC 調整付き） | ❌ ブロック |
| **本番へのコードデプロイ（ポストデプロイマイグレーション付き）** | ❌ ブロック（緊急時のみ） | ❌ ブロック |
| **フィーチャーフラグトグル（変更 Issue 不要）** | ✅ 許可 | ❌ ブロック |
| **フィーチャーフラグトグル（変更 Issue 必要）** | 変更管理プロセスに従う | ❌ ブロック |
| **S1/S2インシデント対応変更** | ✅ 許可（承認付き） | ✅ 許可（IMおよび EOC 承認付き） |

### ソフトPCL

ソフトPCLは、本番へのすべての変更を停止することなくリスクを軽減することを目的としています。

**ブロックされるもの:**

- 重要度レベルC2以上のインフラ変更
- ポストデプロイマイグレーション（EOC 承認付きの緊急時を除く）
- 変更管理 Issue を必要とするフィーチャーフラグトグル（変更管理プロセスに従う）

**許可されるもの:**

- 重要度レベルC3またはC4のインフラ変更
- canaryへのコードデプロイ（canary影響を制御するツールがあります）
- ポストデプロイマイグレーションなしの本番へのコードデプロイ（EOC 調整が必要）
- 変更管理 Issue を必要としないフィーチャーフラグトグル
- C1およびC2インフラの緊急変更（EOC およびIncident Manager On Callのインタラクションが必要）

ソフトPCL中のフィーチャーフラグガイドラインについては、[フィーチャーフラグと変更管理プロセス](/handbook/engineering/infrastructure-platforms/change-management#feature-flags-and-the-change-management-process)を参照してください。

### ハードPCL

ハードPCLには、ソフトPCLからのすべての制限に加えて、重要度レベルに関係なくコードデプロイメントとすべてのインフラ変更に対する追加の制限が含まれます。

**ブロックされるもの:**

- すべてのコードデプロイメント（canaryおよび本番への）
- すべてのインフラ変更 (C1、C2、C3、C4)
- すべてのフィーチャーフラグトグル
- ポストデプロイマイグレーション

**許可されるもの:**

- アクティブなS1/S2インシデント対応に必要な変更（EOC およびIncident Manager On Callの両方からの承認が必要）

**S1/S2インシデント変更の承認プロセス:**

アクティブなS1/S2インシデントの場合、EOC は決定を下す前にIncident Manager On Callとインタラクションする必要があります。変更を実行すべきかどうかを承認するかは担当者の裁量です。承認された場合、Incident Manager On Callはこの決定を[Infrastructure Leadership Escalation](/handbook/engineering/infrastructure-platforms/incident-management/#infrastructure-leadership-responsibilities)に通知する必要があります（必要に応じてエグゼクティブチームに通知します）。

### 例外の申請

PCL中にデプロイされる必要があるものがある場合:

1. [本番 Issue トラッカー](https://gitlab.com/gitlab-com/gl-infra/production-engineering/-/issues/new)に、この変更が免除されるべき理由の明確な正当化を含む Issue を作成します
2. この Issue での作業とプロジェクトを参照し、新しい Issue を関連するPCL Issue にリンクします。推定nARRの影響を含めます
3. 新しい Issue にVP Infrastructure Platforms（または担当者の代理人）からの承認がコメントで文書化されていることを確認します
4. EOC およびrelease managerと協調してこの変更を出荷します

### PCLの宣言

Production Change Lock（PCL）は、（休日のような繰り返しのイベントのための）**計画された**または（即時のアクションを必要とする予期しない状況のための）**緊急**のいずれかになります。Thanksgivingや年末の休日のような繰り返しのPCLについては、標準的な日付を文書化した[最近のPCLテーブル](/handbook/engineering/infrastructure-platforms/change-management/#recent-pcls)を参照してください。

#### 役割と責任

| チーム | 役割 | 責任 |
|------|------|------------------|
| **Production Engineering** | 責任者 & 説明責任者 | 変更ロック Issue とエントリの作成、変更ロックの順守の確保 |
| **Software Delivery** | 相談 & 説明責任者 | リリース活動に基づく日付と実現可能性に関する入力を提供、順守の確保と自動デプロイプロセスでの強制 |
| **Engineering** | 通知 | 開発および計画目的での変更ロックの追跡 |
| **Product** | 通知 | 計画目的での変更ロックの追跡 |
| **Security** | 通知 | セキュリティ目的での変更ロックの追跡 |

#### 計画されたPCLの宣言

繰り返しのPCL（Thanksgivingまたは年末の休日など）については、以下のステップに従います:

1. **追跡 Issue とエントリを作成** (Production Engineering)
   - デプロイメントとフィーチャーフラグをブロックする[C1変更 Issue](https://gitlab.com/gitlab-com/gl-infra/production/-/issues/new?issuable_template=change_pcl&issue[title]=Production+Change+Lock)を作成
   - [gl-infra/change-lock](https://gitlab.com/gitlab-com/gl-infra/change-lock)に対応するエントリを作成
   - 必要に応じて、このハンドブックページの[最近のPCLテーブル](/handbook/engineering/infrastructure-platforms/change-management/#recent-pcls)に特定の日付を追加します（繰り返しのエントリはすでに文書化されています）
   - PCL期間の開始時に Issue を`~change::in-progress`としてマークします

2. **レビューと承認を取得** (Software Delivery)
   - Software Delivery Engineering Managers（EM）をchange-lockマージリクエストのレビュアーとして追加
   - Software Delivery EM が変更をレビューおよび承認

3. **ステークホルダーへの通信** (Software Delivery)
   - `#engineering-fyi` Slack チャンネルを通じてEngineering Organizationに通知
   - [Engineering Week In Review](https://docs.google.com/document/d/1JBdCl3MAOSdlgq3kzzRmtzTsFWsTIQ9iQg0RHhMht6E/edit#heading=h.wl5oryd6kv3u)にエントリを追加
   - [ChatOps Notify](https://gitlab.com/gitlab-org/release/docs/-/tree/master/release_manager?ref_type=heads#utilities)を使用してPCLを関連する Slack チャンネルに通信
   - デプロイメントおよびリリースプロセスに必要な変更の詳細を提供

4. **PCL終了後のクリーンアップ** (Production Engineering)
   - C1変更 Issue をクローズ
   - 最近のPCLテーブルから特定の日付付きエントリを削除（繰り返しエントリは保持）

#### 緊急PCLの宣言

計画されていないPCL（重大なインシデントまたは予期しないイベント中など）の場合:

1. **状況を評価**
   - `#releases` Slack チャンネルで`@release-managers`に確認して、月次リリースまたはパッチリリースの状態を確認
   - リリースマネージャーがまだ通知されていない差し迫ったセキュリティパッチがあるかどうか`#security` Slack チャンネルでセキュリティに確認
   - `#production` Slack チャンネルで`@incident-managers`と`@sre-oncall`に確認して懸念事項があるかどうかを確認
   - [Infrastructure Leadership Escalation](/handbook/engineering/infrastructure-platforms/incident-management/#infrastructure-leadership-responsibilities)に通知

2. **計画されたPCLプロセスに迅速な承認で従う**
   - 必要性が確認されたら、上記の計画されたPCLプロセスのステップ1〜3に従う
   - 緊急の性質を考慮して承認と通信を迅速化する
   - C1変更 Issue に緊急PCLの理由を明確に文書化する

### 最近のPCL

以下の日付は現在スケジュールされているPCLです。以下の日付の時間は、特に指定がない限り、09:00 UTCに始まり、翌日09:00 UTCに終了します。

| 日付                       | タイプ       | 理由                        |
|-----------------------------|------------|-------------------------------|
| 繰り返し: [月次リリース日](/handbook/engineering/releases/monthly-releases/#monthly-release-schedule)      | ソフト       | リリース日                   |
| 繰り返し: [スケジュールされたFamily and Friends Day](/handbook/company/family-and-friends-day/)         | ソフト       | Family and Friends Day                   |
| 繰り返し: 土曜日 01:00 UTC -> 日曜日 21:00 UTC | ソフト       | 週末                   |
| 繰り返し: US Thanksgiving週（水曜日 22:00 UTCから月曜日 02:00 UTC） | ハード | Thanksgiving、Black Friday、およびCyber Monday |
| 繰り返し: 年末の休日（12月20日 23:00 UTCから1月5日 09:00 UTCまで） | ハード | 年末の休日（チームの可用性が低下） |

## フィーチャーフラグと変更管理プロセス

フィーチャーフラグは、本番でアプリケーション変更を簡単にテストできるようにすることでリスクを低減します。徐々にまたは選択的に有効にでき、迅速にオフにできるため、適切な場合はいつでもその使用が奨励されます。

ただし、会社とフィーチャーフラグで作業する開発者の数が増え続けるにつれて、これらの変更に関連するリスクを管理することも重要になります。開発者は[フィーチャーフラグの開発者向けドキュメント](https://docs.gitlab.com/ee/development/feature_flags/controls.html#rolling-out-changes)で定義されたプロセスに従います。

任意の日に、数十のフィーチャーフラグ変更が発生する可能性があります。これらの多くは些細なもので、低リスクの変更（時にはUIの外観への変更のみ）をテストできます。ただし、いくつかのフィーチャーフラグの変更は GitLab.com の動作に大きな影響を与え、私たちの**サービスレベル契約**にネガティブな影響を与える可能性があります。これは、会社の評判と財務的な健全性にネガティブな影響を及ぼす可能性があります。機能をトグルするアプリケーション開発者とengineer-on-call (EOC)間の明確なコミュニケーションがないと、EOC がどのフィーチャーフラグトグルが高リスクで、どれがそうでないかを評価することが難しくなる可能性があります。

さらに、インシデント調査中、最近どの高リスクの機能が有効にされたか、およびその動作を評価する方法に関するドキュメントを知ることが重要です。

**この理由により、以下の基準のいずれかを満たすフィーチャーフラグトグルには、変更管理 Issue が伴うべきです。**:

- **新サービスを有効にする機能**: 例えば、機能トグルが新しくプロビジョニングされたデータベースまたは新しいアプリケーションサービスを通じてトラフィックを駆動する場合。
- **GitLab.com のサービスレベル可用性に影響を与える可能性がある機能**: 合理的な状況下でインシデントにつながる可能性のあるあらゆる機能。
- 機能トグル、または関連する機能が、**ユーザーに影響を与えるサービス劣化のために以前にロールバックする必要があった**場合、または以前のトグルが本番インシデントにつながった結果として。
- アプリケーション開発チームが変更のリスクが変更管理のオーバーヘッドを正当化すると評価する場合、またはインフラチームが特にそれを要求する場合。

## 質問

- **上記の*本番*には*canary*が含まれていますか？**

    はい。

- **これは本番環境にのみ適用されますか？**

    はい。本番環境のみです。これは、本番以外の環境で変更とデプロイメントをまだ行えることを意味します。

- **PCLの下で強制される変更の正確な範囲は何ですか？（インフラ、ソフトウェア、ハンドブックなど）**

    gitlab.com SaaS Productに対するおよび/またはそれをサポートするあらゆる本番変更。例えば、設定変更、新しいライブラリのセットアップ、新しいコードの導入、フィーチャーフラグのトグル。

- **PCL期間中にまだ変更を行いたい場合はどうすればよいですか？**

    Product Group Developmentコード変更には、Development VPの承認が必要です
    その他すべての変更、すべての基盤となるクラウドおよびインフラ変更を含む、Infrastructure & Quality VPの承認が必要です。

- **これは私たちの月次リリースに適用されますか？**

    いいえ。[月次リリース](/handbook/engineering/releases/)がPCL期間に該当する場合、中断のない月次リリースを確保するために追加の調整が必要です。

- **ここで回答されていない質問があります？**

    [Infrastructureチームのキュー](https://gitlab.com/gitlab-com/gl-infra/reliability/-/issues)に Issue を提起してください。できるだけ早く回答いたします。

## 例外

このプロセスへの例外は、Infrastructureによって[追跡](https://gitlab.com/gitlab-com/gl-infra/production/-/issues)および承認される必要があります。

## 参考文献

- [変更管理ポリシー](/handbook/security/security-and-technology-policies/change-management-policy/)
