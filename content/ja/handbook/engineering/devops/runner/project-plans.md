---
title: "Verify:Runner プロジェクトプラン"
description: "このプロジェクトのスコープは、GitLab SaaS 共有 Runner で使用されている現在のオートスケーリングテクノロジー Docker Machine を置き換えることです。"
upstream_path: /handbook/engineering/devops/runner/project-plans/
upstream_sha: 1065c86ab1ba75adefbb07560d726608885e6d4e
translated_at: "2026-04-28T13:32:34Z"
translator: claude
stale: false
---

## Docker Machine を置き換える GitLab Runner 向けオートスケーリングプロバイダー

**Runner チーム DRI:** Arran Walker

**概要:** このプロジェクトのスコープは、GitLab SaaS 共有 Runner で使用されている現在のオートスケーリングテクノロジー Docker Machine を置き換えることです。完全な実装計画については、この作業を現在追跡している[親 epic](https://gitlab.com/groups/gitlab-org/-/epics/6995) をご覧ください。

### 2023-09-18 の週

#### 目標

- ~~[ ] `fleeting`: [AWS オートスケーリングアクティビティのログ記録](https://gitlab.com/gitlab-org/fleeting/fleeting-plugin-aws/-/issues/11)~~
  - 実装により、これが本当に必要かどうかについて疑問が生じました。
- [X] `fleeting`: [API にシャットダウン関数を追加](https://gitlab.com/gitlab-org/fleeting/fleeting/-/issues/10)
- [X] `fleeting`: [プラグインが使用できる公開プロビジョニング統合テストを追加](https://gitlab.com/gitlab-org/fleeting/fleeting/-/issues/12)

### 2023-09-25 の週

#### 目標

- [X] `fleeting-plugin-aws`: [AWS プラグイン統合テスト](https://gitlab.com/gitlab-org/fleeting/fleeting-plugin-aws/-/issues/7)
- [X] `taskscaler`: [統合テスト](https://gitlab.com/gitlab-org/fleeting/taskscaler/-/issues/3)

### 2023-10-02 の週

#### 目標

- [X] `fleeting-plugin-googlecompute`: [GCP プラグイン統合テスト](https://gitlab.com/gitlab-org/fleeting/fleeting-plugin-googlecompute/-/issues/8)
- [X] `runner`: [Taskscaler ベースのエグゼキューター統合テスト](https://gitlab.com/gitlab-org/gitlab-runner/-/issues/30880)

### 2023-10-09 の週

#### 目標

- [X] `fleeting-plugin-googlecompute`: [GCP プラグイン統合テスト](https://gitlab.com/gitlab-org/fleeting/fleeting-plugin-googlecompute/-/issues/8)
- [X] `runner`: [Taskscaler ベースのエグゼキューター統合テスト](https://gitlab.com/gitlab-org/gitlab-runner/-/issues/30880)
- [ ] `fleeting-plugin-googlecompute`: [単体テスト](https://gitlab.com/gitlab-org/fleeting/fleeting-plugin-googlecompute/-/issues/7)
- [X] `runner-incept`: [GCE での Runner マネージャーのエンドツーエンドテスト](https://gitlab.com/gitlab-org/gitlab-runner/-/issues/36794)
- [X] `fleeting-plugin-googlecompute`: [Google Compute プラグインの最小 IAM 権限の推奨](https://gitlab.com/gitlab-org/gitlab-runner/-/issues/29452)

### 2023-10-16 の週

#### 目標

- [X] `fleeting-plugin-azure`: [README / 設定オプションの追加](https://gitlab.com/gitlab-org/fleeting/fleeting-plugin-azure/-/issues/1)
- [ ] `fleeting-plugin-azure`: [単体テスト](https://gitlab.com/gitlab-org/fleeting/fleeting-plugin-azure/-/issues/2)
- [ ] `fleeting-plugin-azure`: [統合テスト](https://gitlab.com/gitlab-org/fleeting/fleeting-plugin-azure/-/issues/3)
- [ ] `taskscaler`: [Acquisition.WithContext の実装](https://gitlab.com/gitlab-org/fleeting/taskscaler/-/issues/23)

## GitLab Dedicated 向け専用 SaaS Runner

**Runner チーム DRI:** Joseph Burnett
**Slack チャンネル:** #f_hosted_runners

**概要:** 専用 Runner とは、特定のプロジェクト・グループ・インスタンスのみに登録され、他のユーザーと共有されない Runner です。
このプロジェクトにより、GitLab は Dedicated クラウドアカウント内で専用 Runner リソースを起動します。
この作業を追跡するプロジェクトプランは[こちら](https://gitlab.com/gitlab-org/ci-cd/shared-runners/infrastructure/-/issues/158)で確認できます。

### イテレーション 16.5（2023-10-19 終了）

- [ ] https://gitlab.com/gitlab-org/ci-cd/runner-tools/grit/-/issues/14+s
- [ ] https://gitlab.com/gitlab-org/ci-cd/shared-runners/infrastructure/-/issues/87+s

### 2023-09-25 の週

- [X] Runner SaaS デリバリーのタイムラインが Environment Automation の要件を満たすことを確認。
  満たしています: https://gitlab.com/gitlab-com/gl-infra/gitlab-dedicated/team/-/issues/2825#note_1586596202

### 2023-10-02 の週

#### 目標

- [X] すべての作業を単一のサブ epic に統合。
  インフラストラクチャ・アズ・ライブラリ（GRIT）を提供し、Environment Automation が Runner 自体を運用するという合意を反映するよう Issue と epic の構造を更新。

### 2023-10-09 の週

Dedicated との epic と Issue の構造を明確化しました（[スレッド](https://gitlab.com/gitlab-com/gl-infra/gitlab-dedicated/team/-/issues/2825#note_1586917812)）。
以前の epic を置き換える Runner 側の新しいプロジェクトプラン: https://gitlab.com/gitlab-org/ci-cd/shared-runners/infrastructure/-/issues/158
このユースケースのすべてのライブラリ作業を追跡する新しい GRIT サブ epic: https://gitlab.com/groups/gitlab-org/ci-cd/runner-tools/-/epics/2

#### 目標

- [X] Docker 対応 Linux AMI の仮作成
- [X] Linux をサポートするために [`dev` 環境](https://gitlab.com/gitlab-org/ci-cd/runner-tools/grit/-/blob/master/modules/dev/dev.tf)を更新。

### イテレーション 16.6（2023-11-17 終了）

#### 目標

- [X] エンドツーエンドで動作するテストテンプレートを完成
- [X] エンドツーエンドで動作する本番テンプレートを完成
- [ ] 単体テスト（進行中: https://gitlab.com/gitlab-org/ci-cd/runner-tools/grit/-/merge_requests/6）
- [x] エンドツーエンドテスト（レビュー中: https://gitlab.com/gitlab-org/ci-cd/runner-tools/grit/-/merge_requests/8）
- [x] デモと配信動画（https://www.youtube.com/watch?v=K_eOuXN-nXM）

### 2023-11-20 の週

テストテンプレートと本番テンプレートの両方でエンドツーエンドの機能を完成させました。
エンドツーエンドテストが追加され、すべてのテストケースの再利用可能なアプローチを決定しながら単体テストが進行中です。
[GRIT beta prod のデモ動画](https://www.youtube.com/watch?v=K_eOuXN-nXM) が録画され、本番テンプレートを使用した GRIT の最新状態が示されています。

#### イテレーション目標

- [ ] 単体テスト（進行中: https://gitlab.com/gitlab-org/ci-cd/runner-tools/grit/-/merge_requests/6）
- [ ] ユーザーが自分の VPC を持ち込めるようにする（https://gitlab.com/gitlab-org/ci-cd/runner-tools/grit/-/issues/35）
- [ ] 最新の変更に合わせて README を更新（https://gitlab.com/gitlab-org/ci-cd/runner-tools/grit/-/issues/36）

### 2023-11-27 の週

まだご覧になっていない方は、ぜひ [GRIT beta prod のデモ動画](https://www.youtube.com/watch?v=K_eOuXN-nXM) をご確認ください。本番テンプレートを使用した GRIT の最新状態が示されています。
先週は単体テストの追加で進展がありました。唯一のブロッカーは、単体テストブランチと `master` ブランチの両方で e2e テストが壊れている Issue のようです。今週は調査してテストをパスさせます。
また、最近の変更とリファクタリングを反映するために README を更新し、`prod` モジュールで VPC 設定の粒度を追加し始める予定です。

#### 目標

- [x] 単体テストを追加（進行中: https://gitlab.com/gitlab-org/ci-cd/runner-tools/grit/-/merge_requests/6）
- [x] Issue を開始: [ユーザーが自分の VPC を持ち込めるようにする](https://gitlab.com/gitlab-org/ci-cd/runner-tools/grit/-/issues/35)
- [x] [E2E テストの修正と改善](https://gitlab.com/gitlab-org/ci-cd/runner-tools/grit-e2e/-/issues/1)

### 2023-12-04 の週

失敗している E2E テストを調査し、GitLab Runner のログレベルの変更が原因であることがわかりました。
E2E テストは修正され、単体テストがマージされました。README の更新を開始し、リファクタリングによって GCP に関係するいくつかの設定が壊れていることがわかりました。これらの設定は単体テストと e2e テストが行われる前のものです。壊れた設定を修正してテストカバレッジを追加するための Issue を追加して MR を立ち上げました。現在の焦点は Dedicated Runner の AWS にあるため、README の GCP 設定の修正は現時点ではそれらの README ケースのみをカバーし、後で GCP に焦点を移した際にさらなる GCP テストをフォローアップする予定です。また、Dedicated Runner での VPC とサブネットのカスタマイズ方法について[議論を開始しました](https://gitlab.com/gitlab-org/ci-cd/runner-tools/grit/-/issues/35#note_1674412071)。

#### 目標

- [ ] [壊れた README 設定の修正](https://gitlab.com/gitlab-org/ci-cd/runner-tools/grit/-/issues/38)
- [ ] [最新の変更に合わせて README を更新](https://gitlab.com/gitlab-org/ci-cd/runner-tools/grit/-/issues/36)
- [ ] [ユーザーが自分の VPC を持ち込めるようにする](https://gitlab.com/gitlab-org/ci-cd/runner-tools/grit/-/issues/35)

## Runner フリートダッシュボード

**Runner チーム DRI:** Vladimir Shushlin
**Slack チャンネル:** #f_runner_fleet_management

**概要:** セルフマネージドの Runner フリートのオペレーターは、Runner フリートインフラに関する重要な質問に素早く答えられる可観測性、つまり一目でわかる情報を必要としています。
Runner フリートダッシュボードで実用的な洞察を提供することで、GitLab Runner フリートのオペレーターが開発者チームの CI/CD ジョブを大規模に一貫して効率的に実行できることを確保するためのツールを提供します。CI/CD ジョブはどれくらい速く起動するか、CI/CD ジョブはキューで待機しているか、CI/CD ジョブ環境にパフォーマンスやその他の問題があるかといった質問への回答が Runner フリートダッシュボードですぐに確認できるようになります。
その結果、CI/CD ビルドインフラに依存する開発チームにとって、開発者の効率向上・コスト削減・優れたカスタマーエクスペリエンスが実現されます。

### 2023-10-02 の週

#### 目標

- [x] Staging で ClickHouse 接続を有効化
- [x] Staging で [Runner ダッシュボード](https://gitlab.com/gitlab-org/gitlab/-/issues/417002) を有効化
- [ ] Staging で [CI データインジェスト](https://gitlab.com/gitlab-org/gitlab/-/issues/421203) を有効化
- [x] Staging で [ダッシュボードの ClickHouse 部分](https://gitlab.com/gitlab-org/gitlab/-/issues/424498) を有効化

#### サマリー

Staging ですべてを動作させましたが、データインジェストに 2 つのバグを発見しました。

1. [一部のデータが重複している](https://gitlab.com/gitlab-org/gitlab/-/issues/427427)
1. [削除された `ci_builds` を処理していない](https://gitlab.com/gitlab-org/gitlab/-/issues/427421)

そのため、データインジェストを無効にして修正に取り組んでいます。

また[より大きな epic](https://gitlab.com/groups/gitlab-org/-/epics/11169) もレビューし、ClickHouse 部分のデータなしでも全員に対してダッシュボードを有効化することを妨げるものはないと判断しました。

この CI 分析アーキテクチャを他の機能でどのように使用するかについて[議論が進行中](https://gitlab.com/gitlab-org/gitlab/-/issues/426113)です。

### 2023-10-09 の週

先週発見された Issue の修正を継続して、staging と本番でダッシュボードを再有効化することを目標としています。

#### 目標

- [x] [重複バグ](https://gitlab.com/gitlab-org/gitlab/-/issues/427427)の修正
- [x] [削除された ci_builds バグ](https://gitlab.com/gitlab-org/gitlab/-/issues/427421)の修正
- [x] [runners_dashboard フィーチャーフラグ](https://gitlab.com/gitlab-org/gitlab/-/issues/417002) をロールアウトして削除し、全員に対して Runner ダッシュボードを有効化
- [x] Staging で [CI データインジェスト](https://gitlab.com/gitlab-org/gitlab/-/issues/421203) を再有効化して完了
- [x] [本番向け ClickHouse 認証情報の追加](https://gitlab.com/gitlab-com/gl-infra/production/-/issues/16931)
- [x] [Omnibus での ClickHouse サポートの追加](https://gitlab.com/gitlab-org/omnibus-gitlab/-/issues/8249) - セルフマネージドでのテストと、Rails コンソール Staging/本番からの ClickHouse 使用に必要になります
- [x] ["常に整数" バグの修正](https://gitlab.com/gitlab-org/gitlab/-/issues/427433)

#### サマリー

1. ClickHouse を含む staging と本番の両方で Runner ダッシュボードを有効化できました！
2. 16.5 ではダッシュボードをリリースしないことに決定しました。もう少しテストして適切なリリース投稿を準備したいと思います。
3. Omnibus 部分がレビューで少し滞っています。
4. データインジェスト中に[一部のデータが重複していることがわかり、調査が必要です](https://gitlab.com/gitlab-org/gitlab/-/issues/428146)

### 2023-10-16 の週

本番ロールアウトが完了したので、ClickHouse を含むダッシュボードをセルフマネージドに提供することに焦点を当てます。
また、計画された休暇のために 16.6 全体を通じて通常のバックエンドキャパシティの半分しかありません。

#### 目標

- [x] [クローズドベータのセルフマネージドロールアウト計画](https://gitlab.com/groups/gitlab-org/-/epics/11720) を作成
- [x] [Omnibus サポート](https://gitlab.com/gitlab-org/omnibus-gitlab/-/issues/8249) を完成
- [x] [セルフマネージドに対してダッシュボードを有効化し、16.6 でリリース](https://gitlab.com/gitlab-org/gitlab/-/issues/417002)
- [x]（ストレッチ）[ClickHouse マイグレーションサポート](https://gitlab.com/gitlab-org/gitlab/-/issues/428124) の動作する PoC を取得

### 2023-10-23 〜 2023-11-20 の週

セルフマネージドに向けたダッシュボードを 16.6 でリリースしました。
また、ダッシュボードの ClickHouse 対応部分をセルフマネージドに提供することに取り組んでいます。

#### 目標

- [x] [セルフマネージドでの ClickHouse とダッシュボードのセットアップのドキュメント](https://gitlab.com/gitlab-org/gitlab/-/issues/424500)を作成。
- [x] [ClickHouse マイグレーションの基本サポート](https://gitlab.com/gitlab-org/gitlab/-/issues/428124)を実装
- [x] gitlab.com での[重複 Issue](https://gitlab.com/gitlab-org/gitlab/-/issues/428146) をデバッグ

### 2023-11-27 の週

基本的なマイグレーションサポートが整ったので、Omnibus と gitlab chart の通常の GitLab アップグレードプロセス中にそれらのマイグレーションを自動的に実行することに取り組んでいます。

また重複 Issue の修正にも取り組んでいます。

#### 目標

- [x] [重複 Issue](https://gitlab.com/gitlab-org/gitlab/-/issues/428146) を修正。
- [ ] [Omnibus アップグレード中に ClickHouse マイグレーションを自動実行](https://gitlab.com/gitlab-org/omnibus-gitlab/-/issues/8266) - 動作させてレビューに入れる
- [ ] [マイグレーションの並列実行を防ぐための排他リースを実装](https://gitlab.com/gitlab-org/gitlab/-/issues/428274)
