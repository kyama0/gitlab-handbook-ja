---
title: Security Risk Management、Security Policies
description: "GitLab の Security Policies チームは、脆弱性が検出された際にスキャンを実施し、セキュリティ承認を求めるソリューションの作成を担っています。"
upstream_path: /handbook/engineering/development/sec/security-risk-management/security-policies/
upstream_sha: 3480299851f7e2243d4f08b75dac452f89929636
translated_at: "2026-04-28T08:04:29Z"
translator: claude
stale: false
---

## ミッション

Security Policies グループのミッションは、セキュリティチームとコンプライアンスチームに組織全体でセキュリティコントロールを適用する手段を提供することです。私たちのチームが開発したツールにより、お客様はセキュリティスキャンを適用・自動化し、リポジトリへの提案された変更についてセキュリティ承認を必須とすることで、セキュリティリスクを防止できます。私たちのビジョンと方向性の包括的な理解については、https://about.gitlab.com/direction/security_risk_management/security_policies/security_policy_management/ のDirection ページをご覧ください。

### GitLab のために推進しているお客様のアウトカム

1. 特定の MR に承認が必要な理由を詳細に説明する情報を提供することで、マージリクエスト承認ポリシーの使用を増やします。
2. 選択されたプロジェクトまたは特定のコンプライアンスフレームワークを持つプロジェクトのみを対象に、現在のワークフローをブロックせずに段階的に適用する方法を提供することで、Security Policies の有効化における採用時間を短縮します。
3. スキャン実行ポリシーの柔軟性を高め、選択されたプロジェクトとグループに対してパイプライン実行アクションで任意のジョブを適用するための無限の可能性をユーザーに提供します。
4. 他のグループがグループおよび組織レベルでのセキュリティコントロールの自動化と管理を支援する新しいタイプのポリシーを導入できるよう支援します。

## 共通リンク

* Slack チャンネル：`#g_srm_security_policies`
* Slack エイリアス：@govern_security_policies_be、@govern_security_policies_fe
* Google グループ：sec-govern-security-policies@gitlab.com

## 作業の進め方

### 優先順位付け

[インターロックデッキ](https://interlock-deck.gitlab.io/#filter=group%3A%3Asecurity_policies)を使用して、取り組む内容とその順序を追跡します。各イニシアチブには以下のフィールドが含まれています。

1. 名前 - Epic の説明とリンク
1. BE DRI / FE DRI - 積極的に関与するバックエンドとフロントエンドの [DRI](/handbook/engineering/development/sec/security-risk-management/security-policies/planning/#epic-engineering-dri) を示す
1. サイズ
1. ターゲットリリース

完了したアイテムは、[Epic の完了定義](/handbook/engineering/development/sec/security-risk-management/security-policies/planning/#definition-of-done-for-epics)の条件がすべて満たされた後にテーブルから削除されます。Epic はこの時点でクローズされます。

### ワークフロー

Security Policies グループは主に GitLab の[プロダクト開発フロー](/handbook/product-development/how-we-work/product-development-flow/)に従っています。

私たちの計画は、Epic レベルの機能に対して[3 フェーズのリリース計画](/handbook/engineering/development/sec/security-risk-management/security-policies/planning/#three-phase-release-plan-experiment--beta--ga)（実験 → ベータ → GA）を採用した、四半期ごとのインターロック主導のアプローチに従っています。私たちの運営方法の詳細は[計画ページ](/handbook/engineering/development/sec/security-risk-management/security-policies/planning/)にあります。

現在のワークフローは[ワークフローページ](/handbook/engineering/development/sec/security-risk-management/security-policies/workflow/)にフローチャートとして可視化されています。

機能の取り組み方に関する現在のプロセスは[フィーチャープロセスページ](/handbook/engineering/development/sec/security-risk-management/security-policies/feature_process/)にあります。

#### MR レビュー

Security Policies ドメイン内の変更に対して MR をレビューに提出する際は、以下のガイドラインに従います。

1. 最初のレビューはチーム、ステージ、またはセクションのメンバーが実施すべきです。これにより、チームは以下のメリットを得られます：
   * ドメインに精通したレビュアーによる迅速なレビュー
   * ドメイン内で行われる変更に対する追加の認識
   * ドメインで何が起きているかと整合しない変更を特定する
1. GraphQL の変更については、MR はできるだけ早くフロントエンドエンジニアによってレビューされるべきです。これにより、インターフェースを検証し、テストが書かれる前に変更を加えられるようになります。

### Issue ボード

* [Security Policies デリバリーボード](https://gitlab.com/groups/gitlab-org/-/boards/1754674?milestone_title=Started)
  * エンジニアが作業できるプライマリボード。ソフトウェアを提供する際に使用するワークフローラベルのみを含むよう削減されています。
* [Security Policies 計画ボード](https://gitlab.com/groups/gitlab-org/-/boards/1420731?label_name%5B%5D=group%3A%3Asecurity%20policies)
  * 現在および今後のマイルストーンの作業を把握するために主にプロダクトマネージメントが使用する、マイルストーン中心のボード。
* [Security Policies EM ボード](https://gitlab.com/groups/gitlab-org/-/boards/4738985)
  * エンジニアに割り当てられた Issue の数でエンジニアの負荷を把握するためにエンジニアリングマネージメントが使用する、エンジニア中心のボード。

#### Issue とマージリクエストのラベル

GitLab には Issue とマージリクエストのラベリング規則があります。私たちはこの規則に従いますが、アーティファクトを私たちにルーティングするために必要な特定のラベルがあります。これらのラベルを使用して、Issue ボードで私たち向けの Issue をフィルタリングします。またメトリクスと KPI レポートにも使用されます。

| ラベル | 意味 |
| ----- | ------- |
| ~"section::sec" | Issue または MR が Sec セクションのロードマップに属することを示す。|
| ~devops::govern | Issue または MR が Security Risk Management ステージのロードマップに属することを示す。|
| ~"group::security policies" | Issue または MR に取り組む個人の集合として Security Policies グループを示す。|
| ~"Category:Security Policy Management" | Issue または MR がセキュリティポリシー管理機能カテゴリの一部であることを示す。|
| ~backend | Issue または MR が GitLab のバックエンドの一部であることを示す。|
| ~frontend | Issue または MR が GitLab のフロントエンドの一部であることを示す。|

新しい Issue を作成する際は、必要なラベルをコピーするために `/copy_metadata #373191` クイックコマンドを使用します。

## 品質

### Package and QA を実行する必要がある MR の分類方法

以下に変更がある場合は、MR で `Package and QA` ダウンストリーム [E2E](https://docs.gitlab.com/ee/development/testing_guide/end_to_end/) ジョブを手動でトリガーして結果をレビューすることをお勧めします。

* GraphQL（API レスポンス、クエリパラメータ、スキーマなど）
* Gemfile（バージョン変更、gem の追加/削除）
* E2E テストで UI 要素を識別するために使用される「data-qa-selector」属性を含む Vue ファイル
* データベーススキーマ/クエリの変更
* 脆弱性レポートページ、MR セキュリティウィジェット、パイプラインセキュリティタブ、セキュリティポリシー、設定、ライセンスコンプライアンスページに直接影響するフロントエンドの変更

QA ジョブを手動でトリガーするには：

1. MR のパイプラインタブに移動します。
1. `Stages` の右側の `>` 矢印をクリックし、`package-and-qa` アイテムをクリックします。

MR レビューサイクル中に少なくとも 1 回、最新のパイプラインで QA ジョブを実行することをお勧めします。

## モニタリング

* [Grafana の Stage Group ダッシュボード](https://dashboards.gitlab.net/d/stage-groups-security_policies/stage-groups-security-policies-group-dashboard?orgId=1)

### チームが追跡するメトリクス

#### エンジニアリング生産性メトリクス

* 重大度別のオープンバグ合計数
* タイプ別 MR 全体割合 %
* グループ MR レート
* フレイキーテスト Issue
* 低速 RSpec テスト Issue

#### プロダクトメトリクス

Security Policies 機能の採用状況：

* セキュリティポリシープロジェクトが割り当てられたプロジェクト数
* セキュリティポリシープロジェクトが割り当てられたグループ数
* 少なくとも 1 つの適用可能なスキャン結果ポリシーを持つオープンマージリクエスト数
* 少なくとも 1 つのスキャン結果ポリシーを持つプロジェクト数
* 少なくとも 1 つの適用可能なスキャン結果ポリシーを持つマージリクエストを作成したユーザー数
* セキュリティポリシープロジェクトが割り当てられたプロジェクトでマージリクエストを作成したユーザー数
* 特定の期間内の Security Risk Management アクションのユニーク数
* 特定の期間内の Security Policies アクションのユニーク数
* 特定の期間内の Security Policies 訪問のユニーク数
* 特定の期間内にセキュリティポリシーを持つマージリクエストを作成したユーザーのユニーク数

## コントリビュート

### ライセンス機能のローカルテスト

機能が現在のライセンス階層を確認する必要がある場合、GitLab.com でも動作することを確認することが重要です。

これをローカルでエミュレートするには、以下の手順に従います。

1. 環境変数をエクスポートします：`export GITLAB_SIMULATE_SAAS=1`[^1]
1. 同じシェルセッション内で `gdk restart` を実行します。
1. Admin > Settings > General > "Account and limit" で「Allow use of licensed EE features」を有効にします。

詳細については、[関連するハンドブックエントリ](https://docs.gitlab.com/ee/development/ee_features.html#act-as-saas)を参照してください。

### クロススタックコラボレーション

フロントエンドエンジニアのバックエンドへのコントリビュート、およびその逆を推奨します。そのような場合は、グループ内のドメインエキスパートと緊密に連携し、最初のレビューは内部で行うようにします。

これにより、変更がベストプラクティスに従い、十分にテストされ、意図しない副作用がなく、Security Policies コードベースに加えられた変更についてチームが把握できるようになります。

### コミュニティコントリビュート

Security Policies グループはコミュニティからのコントリビュートを歓迎します。コミュニティからのコントリビュートは、Security Policies エンジニアの 1 人から迅速なフィードバックを受けるべきです。チームのすべてのエンジニアがコミュニティコントリビュートに取り組む責任を持っています。チームメンバーがコミュニティコントリビュートをレビューする時間がない場合は、エンジニアリングマネージャーにタグ付けして、別のチームメンバーに割り当ててもらいます。

## 脚注

[^1]: 環境変数の設定手順については、GitLab Development Kit（GDK）設定ページの[環境変数](https://gitlab-org.gitlab.io/gitlab-development-kit/configuration/#environment-variables)セクションを参照してください。
