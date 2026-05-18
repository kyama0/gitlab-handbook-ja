---
title: "シャーディング ワーキンググループ"
description: "このシャーディング ワーキンググループの当初の焦点は、100 倍のスケーラビリティという長期目標を持つデータベースのスケーラビリティを向上させることでした。"
upstream_path: "/handbook/company/working-groups/sharding/"
upstream_sha: "b4eeb07f0d5f46e2fc5f8572be1a2547261aed89"
translated_at: "2026-04-25T23:18:21Z"
translator: "claude"
stale: false
lastmod: "2025-11-19T13:56:02-06:00"
---

## 属性

| プロパティ   | 値              |
|------------|-----------------|
| 作成日       | 2020 年 2 月 11 日 |
| 終了日       | 2020 年 6 月 22 日 |
| Slack        | [#wg_database-sharding](https://gitlab.slack.com/archives/CTNSZFHEZ)（社内からのみアクセス可能） |
| Google Doc   | [シャーディング ワーキンググループ アジェンダ](https://drive.google.com/drive/search?q=Sharding%20Working%20group)（社内からのみアクセス可能） |
| 録画         | [シャーディング ワーキンググループ プレイリスト](https://www.youtube.com/playlist?list=PL05JrBw4t0KoF37DSMO2sNEaP9JH3jEip) |

## 成果 - クローズ

私たちはこのシャーディングに焦点を当てたワーキンググループをクローズし、異なる焦点を持つスケーリング ワーキンググループを開設することにしました。このシャーディング ワーキンググループの当初の焦点は、100 倍のスケーラビリティという長期目標を持つデータベースのスケーラビリティを向上させることでした。このグループ発足時には、6〜12 ヶ月以内にデータベースのスケーラビリティの限界に達するという理論がありました。その後の分析とインクリメンタルなスケーラビリティへの取り組みにより、私たちには大幅に余裕があることが示されました。分析に基づき、現在のアーキテクチャが今後 12 ヶ月の需要に十分対応できると高い確信を持っています：[データベース容量と飽和分析（イテレーション 1）](https://gitlab.com/gitlab-com/gl-infra/infrastructure/-/issues/10340)。この分析は毎月継続されます。また、データベースチームによって優先付けされたインクリメンタルなデータベーススケーラビリティの改善領域も特定しました：[GitLab.com の PostgreSQL データベースの合計サイズと成長を削減](https://gitlab.com/groups/gitlab-com/-/epics/374)。継続的な分析とインクリメンタルなデータベース改善により、データベーススケーラビリティの緊急性が大幅に低下しました。

さらに、私たちはシャーディングが長期的なスケーラビリティニーズに対する望ましいアプローチではないというコンセンサスに達しました。この決定は調査、概念実証、研究、インタビュー、さまざまな実装提案を通じて形成されました。このワーキンググループをクローズする決定に貢献した項目の簡単なリストを示します：

- [GitLab のデータベースへの PostgreSQL テーブルパーティショニングの導入](/handbook/engineering/data-engineering/database-excellence/database-frameworks/doc/partitioning/)
- [テーブルパーティショニング：Issue グループ検索を例として](/handbook/engineering/data-engineering/database-excellence/database-frameworks/doc/issue-group-search-partitioning/)
- [CitusDB によるシャーディング](/handbook/engineering/data-engineering/database-excellence/database-frameworks/doc/citus/)
- [Postgres：外部データラッパーとパーティショニングによるシャーディング](/handbook/engineering/data-engineering/database-excellence/database-frameworks/doc/fdw-sharding/)
- [ルート名前空間による GitLab のシャーディング](/handbook/engineering/data-engineering/database-excellence/database-frameworks/doc/root-namespace-sharding/)
- [データベースシャーディング提案：名前空間によるシャーディング](https://drive.google.com/drive/search?q=sharding%20by%20namespace)
- [代替データベースシャーディング提案：テナントシャーディング](https://drive.google.com/drive/search?q=Tenant%20sharding%20by%20namespace)

このワーキンググループのコアメンバーは、長期的なスケーリング戦略と実装を決定するためにスケーリング ワーキンググループに引き続き参加します。このワーキンググループページの残りの部分は参照目的のために残されます。

---

## ビジネス目標

GitLab.com で現在持っているものより 100 倍の余裕を提供するスケーラビリティアプローチ。さらに、顧客データを分離する機能がデザインと実装に影響する要因となっています。

### 背景

このワーキンググループ発足時、予測される顧客の成長をサポートするためにデータベースのスケーリングの「限界に達する」という逸話的な情報がありました。早期の見積もりでは、6〜12 ヶ月後にスケーリングの限界に達すると予測していました。この見積もりは[データベース容量と飽和分析（イテレーション 1）](https://gitlab.com/gitlab-com/gl-infra/infrastructure/-/issues/10340)によって継続的な 12 ヶ月のウィンドウに改訂されました。データベースのスケーラビリティを向上させつつ、パフォーマンスも向上させるソリューションとしてデータベースシャーディングが提案されました。その後、議論の範囲をデータベースシャーディングだけに焦点を当てることから拡大しています。データベースシャーディング技術を使用したソリューションであっても、重大なアプリケーションの変更が必要になります。

顧客の分離の目標は複数の目的を果たします。顧客データの分離には、おそらくデータを複数のサーバーに分散させることが含まれます。このレベルの分散により、単一のデータベースアーキテクチャの単一障害点を排除することで可用性が向上します。また、顧客データをより良く分離するソリューションを提供するよう顧客からより多くのリクエストを受けています。

### 調査領域

スケーラビリティと顧客の分離というビジネス目標をサポートするために、以下の調査領域を特定しました。

#### 名前空間シャーディング

詳細は [Postgres シャーディング（&1854）](https://gitlab.com/groups/gitlab-org/-/epics/1854) Epic に記載されています。この調査領域は最上位の名前空間でのシャーディングに焦点を当てています。初期の調査はデータベースを中心にテーブルのシャーディングに焦点を当てていました。調査により以下のことが示されました：

- 機能が引き続き動作するためには、データベースの変更と連携していくつかのアプリケーションの変更が必要です
  - [シャーディングをサポートするために必要な潜在的なアプリケーションの変更を特定](https://gitlab.com/gitlab-org/gitlab/-/issues/207273)
- 多くのテーブルは名前空間シャーディングに容易には対応できません
  - [名前空間シャーディングの互換性のある機能と競合する機能](https://gitlab.com/gitlab-org/database-team/team-tasks/-/issues/50)

### テナントシャーディング

*テナントシャーディング*というタイトルの[提案](https://drive.google.com/drive/search?q=tenant%20sharding)が最近導入されました。名前空間でシャーディングする代わりに、テナントという上位エンティティを導入します。テナントエンティティを導入することで、GitLab.com は SAAS マルチテナントアプリケーションのモデルでマルチテナント SAAS プラットフォームになります。よく知られた例としては Slack、Pagerduty、Datadog などがあります。これらの例は各々ユーザーにスコープ付きの分離されたテナンシーを提供しています。

### インクリメンタルなスケーラビリティ改善

シャーディングの調査と並行して、データベースチームはインクリメンタルなデータベーススケーラビリティ改善の領域を継続的に探しています。これらの取り組みはこれらの Issue / Epic の下で追跡されています：

- [GitLab.com の PostgreSQL データベースの合計サイズと成長を削減](https://gitlab.com/groups/gitlab-com/-/epics/374)
- [GitLab.com のワークロード分析 - 初回イテレーション](https://gitlab.com/gitlab-org/database-team/team-tasks/-/issues/75)

### データベースパーティショニングの実装

パーティショニングはシャーディングとは別に扱う重要なテーマです。データベースシャーディングが私たちのビジネス目標を達成するための選択されたソリューションであると最終的に決定した場合、データベースパーティショニングは PostgreSQL でデータベースシャーディングが構築される基盤です。シャーディングに使用しない場合でも、パーティショニングはクエリパフォーマンスを直接向上させるため、それ自体でも優れたツールです。データベースパーティショニングの最初のイテレーションは[監査イベント](https://gitlab.com/groups/gitlab-org/-/epics/3206)に実装されます。パーティショニングの実装によりパフォーマンスの向上とツールの実装（例：マイグレーション）が達成され、その後のパーティショニングとシャーディングの実装に活用できると考えています。

### 調査サマリー

名前空間とテナントという異なるシャーディングアプローチが評価されています。これらは競合するアプローチですが、どちらも同じビジネス目標の達成という目標を持っています。私たちはまだ潜在的な最初のイテレーションとこれらのアプローチの実装の詳細に取り組んでいます。どちらの場合も、データベースとアプリケーションレベルで必要な変更を特定し定量化する必要があります。

名前空間とテナントのシャーディングの調査を続ける一方で、インクリメンタルなスケーラビリティ改善とデータベースパーティショニングの実装を継続し、すぐにパフォーマンスとスケーラビリティの向上を実現できます。

## 完了基準

- [x] インフラ：[GitLab.com に PostgreSQL 11 をデプロイ](https://gitlab.com/groups/gitlab-com/gl-infra/-/epics/106) - 4 月
  - [x] ディストリビューション：[PostgreSQL 11 のサポートを追加](https://gitlab.com/groups/gitlab-org/-/epics/2414)（13.0）
- MVC パーティションのデプロイ（PG11 デプロイに依存）
  - パーティションキーを定義する（MVC では[テナンシーモデル](https://gitlab.com/gitlab-org/gitlab/-/issues/196224)とは異なる場合がある）
  - [x] [パーティショニングスパイク：Issue のパーティショニング時の検索への影響を調査](https://gitlab.com/gitlab-org/gitlab/-/issues/201871)
  - パーティショニング MVC を実装する [パーティショニング：監査イベントのパーティショニング戦略を設計・実装](https://gitlab.com/groups/gitlab-org/-/epics/3206)
  - バックエンドチームが独自のパーティショニングソリューションを実装できるようにするプロセスを文書化する
  - 結果を測定する
- 調査
  - [x] [シャーディングソリューションとして CitusDB を探索](https://gitlab.com/gitlab-org/gitlab/issues/207833)
  - [x] [ルート名前空間による GitLab のシャーディング](/handbook/engineering/data-engineering/database-excellence/database-frameworks/doc/root-namespace-sharding/#data-access-pattern)の影響を文書化する
    - 名前空間シャーディングが必要とするアプリケーションの変更を特定する
  - テナントシャーディングのアプローチをレビューする
    - 名前空間シャーディングが必要とするアプリケーションの変更を特定する
- シャーディング戦略を実装する
  - POC を実装して実証する
  - POC からフィードバックとメトリクスを収集する
  - シャーディングの実装をロールアウトする

## 役割と責任

| ワーキンググループの役割 | 担当者 | 職位 |
|------------------------------------------|---------------------------------|------------------------------------------|
| エグゼクティブステークホルダー | Christopher Lefelhocz | VP of Development |
| ファシリテーター | Craig Gomes | Engineering Manager, Database |
| シャーディング ワーキンググループ DRI | Craig Gomes | Engineering Manager, Database |
| ファンクショナルリード | Nailia Iskhakova | Software Engineer in Test, Database |
| ファンクショナルリード | Josh Lambert | Group Manager, Product Management, Enablement |
| ファンクショナルリード | Gerardo "Gerir" Lopez-Fernandez | Engineering Fellow, Infrastructure |
| ファンクショナルリード | Stan Hu | Engineering Fellow, Development |
| ファンクショナルリード | Andreas Brandl | Staff Backend Engineer, Database |
| メンバー | Chun Du | Director of Engineering, Enablement |
| メンバー | Pat Bair | Senior Backend Engineer, Database |
| メンバー | Tanya Pazitny | Quality Engineering Manager, Enablement |
| メンバー | Mek Stittri | Director of Quality Engineering |

## ミーティング記録

アジェンダドキュメントは「Sharding Working Group Agenda」で検索すると Google Drive で見つかります。

- 2020-02-10 - 初回ミーティング。参加者、優先順位、ミーティングのタイミングを確認
  - ブロッカー特定 - PG11 が出荷されるまで変更を出荷できない
  - ブロッカー特定 - [structure.sql を schema.rb の代わりに使用](https://gitlab.com/gitlab-org/gitlab/-/issues/29465)が完了するまで宣言的パーティショニングは使用できない
  - 制限要因 - データベースチームは 2 週間前に参加した Andreas と Pat のみで構成
- 2020-02-19
  - リファレンスアーキテクチャでの PG11 テスト開始
  - 現在のアーキテクチャの余裕を判断するための容量計画を開始
  - 期待事項の明確化 - パフォーマンスとスケーラビリティ
  - シャーディングが役立ったであろう Issue を調査するための Issue を作成
- 2020-02-24
  - パーティショニング Issue [スパイク](https://gitlab.com/gitlab-org/gitlab/issues/201871)
  - ハンドブックエントリ公開 [テーブルパーティショニングについて](/handbook/engineering/data-engineering/database-excellence/database-frameworks/doc/partitioning/)
  - [gitlab-org/gitlab](https://gitlab.com/gitlab-org/gitlab/issues/200036#note_291786476) の PG11 ナイトリーパイプライン
  - PG11 10k リファレンスアーキテクチャ[テスト](https://gitlab.com/gitlab-org/quality/team-tasks/issues/389#note_292242462)
- 2020-03-02
  - CitusDB の探索[開始](https://gitlab.com/gitlab-org/gitlab/issues/207833)
- 2020-03-09
  - インシデントレビュー[フィードバック](https://gitlab.com/gitlab-org/gitlab/issues/207327#breakdown-by-priority-and-severity)
  - シャーディングの[優先順位](https://gitlab.com/gitlab-com/www-gitlab-com/-/merge_requests/42496/diffs)を明示的に設定するためのハンドブックエントリ更新
  - ハンドブックエントリ [GitLab のデータベースへの PostgreSQL テーブルパーティショニングの導入](/handbook/engineering/data-engineering/database-excellence/database-frameworks/doc/partitioning/)
- 2020-03-16
  - パーティショニングスパイク[完了](https://gitlab.com/gitlab-org/gitlab/-/issues/201871)
  - [Citus インストールに対して GDK を実行](https://gitlab.com/gitlab-org/gitlab/-/issues/207833#note_302891589)
- 2020-03-23
  - [パーティショニングの MVC テナンシーモデルを特定](https://gitlab.com/gitlab-org/gitlab/-/issues/196224#note_307785195)
  - [structure.sql を schema.rb の代わりに使用](https://gitlab.com/gitlab-org/gitlab/-/issues/29465)の完了で PG11 機能の使用がブロック解除
  - [パーティショニング：計画時間の増加を調査（PG11 と PG12 で）](https://gitlab.com/gitlab-org/gitlab/-/issues/209800)
  - Yannis Roussos がデータベースチームに参加
- 2020-03-30
  - 実験用の Citus [クラスター](https://gitlab.com/gitlab-org/gitlab/-/issues/210554)をセットアップ
- 2020-04-06
  - Citus Community AGPL ライセンスに関する法務との議論
  - エンタープライズライセンスモデルについて Citus との議論
  - [パーティショニング：外部キーなしのカスケード削除の実装](https://gitlab.com/gitlab-org/gitlab/-/issues/201872#note_317474157)の結果を公開
  - ブロッカー特定 - Citus クラスターのテストデータが問題
- 2020-04-13
  - ライセンスモデルと価格交渉について Citus とのフォローアップミーティング
  - パフォーマンスとマイグレーションへの影響をより良く理解するためのテーブルサイズのデータ収集
- 2020-04-20
  - AGPL とエンタープライズライセンスコストのため、Citus はコミュニティエディションでは採用不可と判断
  - サービス分離についての議論
- 2020-04-27
  - シャーディングのブレインストーミング議論を継続
  - [パーティショニング/シャーディングとアクセスパターンの分離](https://gitlab.com/gitlab-org/database-team/team-tasks/-/issues/50)
- 2020-05-04
  - [パーティショニングと FDW による Postgres シャーディング](https://gitlab.com/gitlab-org/database-team/team-tasks/-/issues/53)
  - [パート 1 - パーティショニング + FDW](https://www.youtube.com/watch?v=MiZFtM84x44)
  - [パート 2 - スキーママイグレーション](https://www.youtube.com/watch?v=nt4Khi9Gr3o)
  - [パート 3 - 論理レプリケーションによる参照テーブル](https://www.youtube.com/watch?v=ztQtNmSYmEo)
  - MR [WIP / 実験的：Postgres パーティション + FDW](https://gitlab.com/gitlab-org/gitlab/-/merge_requests/30715)
- 2020-05-11
  - PG11 が本番に出荷 - MR を本番にプッシュできるようにブロック解除
  - パーティショニングは[監査イベント](https://gitlab.com/groups/gitlab-org/-/epics/3206)に焦点を当てる
  - [パーティショニング：監査イベントのアクセスパターンを特定](https://gitlab.com/gitlab-org/gitlab/-/issues/216653)
- 2020-05-18
  - [本番 DB クラスターのメインの容量評価](https://gitlab.com/gitlab-com/gl-infra/infrastructure/-/issues/10258)
  - [名前空間シャーディングの競合する機能](https://gitlab.com/gitlab-org/database-team/team-tasks/-/issues/50)を定量化するための Issue を作成
  - 監査イベントのパーティショニング作業進行中
    - [既存テーブルをパーティション化するためのマイグレーション戦略：パーティション化されたテーブルの作成](https://gitlab.com/gitlab-org/gitlab/-/issues/202618)
    - [パーティショニング：監査イベントのアクセスパターンを特定](https://gitlab.com/gitlab-org/gitlab/-/issues/216653)
- 2020-05-26
  - [監査ログのデータベース設計変更](https://gitlab.com/gitlab-org/gitlab/-/issues/217471)
  - [テスト用 audit_events データを生成するスクリプトを作成](https://gitlab.com/gitlab-org/gitlab/-/issues/219055)
  - [名前空間シャーディングの互換性のある機能と競合する機能](https://gitlab.com/gitlab-org/database-team/team-tasks/-/issues/50)
- 2020-06-01
  - このワーキンググループについていくつかの議題があった
    - `テナントシャーディング` vs `名前空間シャーディング`
    - 目標 - 可用性、スケーラビリティ、顧客の分離
  - さまざまな実装アプローチの議論に時間を割いた
  - [データベース容量と飽和分析（イテレーション 1）](https://gitlab.com/gitlab-com/gl-infra/infrastructure/-/issues/10340)
    - 抜粋：3 ヶ月のタイムフレームの分析に基づき、現在のアーキテクチャが今後 12 ヶ月の需要に十分対応できると高い確信を持っています
  - [パーティショニング：監査イベントのパーティショニング戦略を設計・実装](https://gitlab.com/groups/gitlab-org/-/epics/3206)の進捗継続
- 2020-06-08
  - ワーキンググループの更新
  - テナント vs 名前空間シャーディングのタイムライン
  - インクリメンタルなデータベース変更についての議論
