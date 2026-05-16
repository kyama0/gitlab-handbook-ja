---
title: CustomersDot トライアル協業フレームワーク
description: "CustomersDot トライアル業務における Growth と Provision の協業に関する意思決定フレームワーク"
upstream_path: "/handbook/engineering/development/growth/customersdot-collaboration/"
upstream_sha: "3480299851f7e2243d4f08b75dac452f89929636"
translated_at: "2026-04-28T05:15:25Z"
translator: claude
stale: false
lastmod: "2025-12-17T22:01:25+00:00"
---

## 概要

このフレームワークは、CustomersDot のトライアル機能に関する業務を行う際に、Growth チームが Fulfillment/Provision チームとどのように協業するかを定義しています。CustomersDot のトライアル業務における Growth の自律性を実現するためのイニシアチブ（[Epic #20063](https://gitlab.com/groups/gitlab-org/-/epics/20063) 参照）の一環として確立されました。

目標は、Provision チームが所有するコアのプロビジョニング、請求、サブスクリプションインフラストラクチャに関する明確な境界を維持しながら、Growth がトライアル固有の改善に素早く取り組めるようにすることです。このフレームワークは、Growth が独立して貢献できる場合と Provision チームの関与が必要な場合を明確にし、優先度の競合のためのエスカレーションパスも提供します。

## 意思決定フレームワーク

### Growth が独立して貢献する場合

Growth チームメンバーは、トライアル固有のロジックに限定されており、コアのプロビジョニングまたは請求システムに影響しない変更について、CustomersDot に直接貢献できます。

**Growth が所有する変更の例:**

- **トライアル適格性ロジック**: トライアルの対象者に関するルールの変更（ドメイン制限、ユーザー属性、地理的制限など）
- **トライアル期間の変更**: トライアルの長さの調整、特定のコホートへのトライアル延長、またはトライアル延長実験の実装
- **トライアル UX の改善**: トライアルのサインアップフロー、オンボーディング体験、またはトライアルから有料への転換フローの強化
- **トライアルのトラッキングと分析**: トライアルユーザーの行動に特有のインストルメンテーション、分析イベント、または実験トラッキングの追加
- **トライアル固有のメッセージング**: トライアル体験に関するコピーの変更、メールテンプレート、またはアプリ内メッセージング
- **トライアルフィーチャーフラグ**: トライアル固有の機能または実験を制御するフィーチャーフラグの管理

**独立した貢献のプロセス:**

1. GitLab の標準[コントリビューションガイドライン](/handbook/engineering/workflow/code-review/)に従う
2. 適切なラベルを適用する: `devops::growth`、`group::activation`（または関連する Growth グループ）、`CustomersDot`
3. 認識のために [#s_fulfillment](https://gitlab.slack.com/channels/s_fulfillment) で Provision チームに通知する
4. CustomersDot コードベースに触れる場合はコードレビューに Provision チームのメンテナーを含める

### Provision チームを関与させる場合

Growth は、請求、サブスクリプション、プロビジョニングインフラストラクチャ、または有料顧客に影響する共有システムに影響する変更については、Provision チームを関与させなければなりません。

**Provision が所有する変更の例:**

- **請求統合**: Zuora 統合、支払い処理、または請求書生成への変更
- **サブスクリプションプロビジョニング**: サブスクリプションの作成、有効化、または管理方法の変更
- **ライセンス生成**: ライセンスキーの生成、検証、または配布の変更
- **Zuora 統合**: Zuora API 呼び出し、データ同期、または請求ワークフローを含む作業
- **共有インフラストラクチャ**: データベーススキーマの変更、複数システムで使用される API エンドポイント、またはコアの CustomersDot サービス
- **コンプライアンスとセキュリティ**: PCI コンプライアンス、データプライバシー、またはセキュリティコントロールに影響する変更

**Provision を関与させるプロセス:**

1. 適切なインテークテンプレートを使用して [fulfillment-meta](https://gitlab.com/gitlab-org/fulfillment-meta) プロジェクトで Issue を作成する
2. リクエストについてディスカッションするために [#s_fulfillment](https://gitlab.slack.com/channels/s_fulfillment) で連絡する
3. アプローチとタイムラインについて調整が必要な場合は同期ミーティングをスケジュールする
4. Provision チームの[プロジェクト管理プロセス](/handbook/engineering/development/fulfillment/provision/#project-management-process)に従う
5. DRI として Provision チームメンバーと実装を協力して行う

### 判断が必要な場合 / 相談

変更が Growth のドメインに属するか Provision の関与が必要かが不明な場合は、相談側に傾けてください。以下の要因を考慮してください:

**Provision に相談する場合:**

- 変更が請求の正確性または収益認識に影響する可能性がある
- 変更の「影響範囲」（何人のユーザー・システムに影響するか）が不明
- 変更がプロビジョニング、ライセンス、または請求に特有のドメイン知識を含む
- 変更が有料顧客または本番システムに影響する可能性がある
- 変更が共有コードパスまたはインフラストラクチャを変更する

**相談の方法:**

1. Issue リンクとともに [#s_fulfillment](https://gitlab.slack.com/channels/s_fulfillment) に簡単な説明を投稿する
2. 関連する Provision チームメンバー（PM、EM、またはその領域に詳しいエンジニア）にタグ付けする
3. アプローチについてディスカッションするために必要に応じてクイック同期をリクエストする
4. 今後の参照のために Issue に決定を文書化する

## エスカレーションパス

優先度の競合が生じた場合、または Growth が Provision の現在のキャパシティよりも速く進める必要がある場合は、以下のエスカレーションパスを使用してください:

### レベル 1: 直接コントリビューション

**使用する場合:** Growth が変更を実装できる能力を持っているが、Provision のレビューと承認が必要。

**プロセス:**

1. Growth が CustomersDot のコントリビューションガイドラインに従って変更を実装する
2. Provision チームのメンテナーにレビューをリクエストする
3. フィードバックに対応してイテレーションする
4. Provision チームが正確性と潜在的な影響についてレビューする
5. Provision チームの承認を得てマージする

**タイムライン:** 複雑さによって通常 1〜2 マイルストーン

### レベル 2: リーダーシップレベルの再優先順位付け

**使用する場合:** 業務が Provision チームの実装を必要とするが、キャパシティや競合する優先事項によってブロックされている。

**プロセス:**

1. Growth PM が Growth プロダクトディレクターにエスカレーションする
2. Growth ディレクターが優先事項についてディスカッションするために Fulfillment プロダクトディレクターと連携する
3. ビジネスインパクトと緊急性の共同評価
4. ディレクターレベルで再優先順位付けの決定を行う
5. Provision チームがそれに応じてマイルストーン計画を調整する

**タイムライン:** 通常、計画 + 実装時間に 1 マイルストーンが必要

### レベル 3: リソース配分の調整

**使用する場合:** 継続的なキャパシティ制約がチーム構成や責任の構造的な変更を必要とする。

**プロセス:**

1. ディレクターが継続的なキャパシティのギャップを特定する
2. オプションを評価する: 一時的なチームメンバーのローン、採用、または再編成
3. 部門横断的なリソース配分が必要な場合は VP レベルにエスカレーションする
4. 合意したリソース調整を実施する
5. 新しい責任とハンドオフを文書化する

**タイムライン:** 構造的な変更には通常 1〜2 四半期

## 協業プロセス

### コミュニケーションチャンネル

- **主要な Slack チャンネル:**
  - [#s_growth](https://gitlab.slack.com/channels/s_growth) - Growth チームチャンネル
  - [#s_fulfillment](https://gitlab.slack.com/channels/s_fulfillment) - Fulfillment/Provision チームチャンネル
  - 質問、協業リクエスト、ステータス更新にこれらのチャンネルを使用する

- **Issue トラッキング:**
  - Growth Issue: `devops::growth` ラベルの [gitlab-org/gitlab](https://gitlab.com/gitlab-org/gitlab)
  - Provision Issue: [gitlab-org/fulfillment-meta](https://gitlab.com/gitlab-org/fulfillment-meta)
  - CustomersDot Issue: [gitlab-org/customers-gitlab-com](https://gitlab.com/gitlab-org/customers-gitlab-com)

### 定期的な接点

- Growth と Provision チームは以下を通じて定期的なコミュニケーションを維持すべきです:
  - 共有 Slack チャンネルでの非同期更新
  - 関連する Issue やマージリクエストへのメンション
  - 四半期ごとの計画調整セッション
  - 複雑なイニシアチブのために必要に応じたアドホックな同期ミーティング

### コードレビュープロセス

- すべての CustomersDot の変更には Provision チームのメンテナーからのレビューが必要
- Growth エンジニアは影響を受ける領域に詳しい Provision チームメンバーにレビューをリクエストすべき
- Provision チームは適時のレビュー（標準的な変更については 2 営業日以内）にコミット
- 緊急の変更については、レビューを迅速に進めるために [#s_fulfillment](https://gitlab.slack.com/channels/s_fulfillment) で調整する

## 例とシナリオ

### シナリオ 1: トライアル期間実験

**状況:** Growth が特定のユーザーセグメントに対してトライアル期間を 30 日から 60 日に延長することをテストしたい。

**決定:** Growth が独立して貢献する

**根拠:** これは請求やプロビジョニングに影響しないトライアル固有のロジックです。Growth は変更を実装し、適切なトラッキングを追加し、認識のために Provision に通知できます。

**プロセス:**

1. 実験計画を含む Issue を作成する
2. トライアル期間ロジックの変更を実装する
3. 分析トラッキングを追加する
4. 認識のために #s_fulfillment に投稿する
5. Provision メンテナーのレビューをリクエストする
6. 実験をデプロイしてモニタリングする

### シナリオ 2: トライアルから有料への転換フロー

**状況:** Growth がトライアルユーザーが有料プランにアップグレードする際の転換フローを効率化したい。

**決定:** Provision チームを関与させる

**根拠:** これはサブスクリプションの作成と請求統合に触れており、Provision が所有しています。変更は収益認識に影響する可能性があり、Provision のドメイン専門知識が必要です。

**プロセス:**

1. fulfillment-meta で Issue を作成する
2. Provision PM およびエンジニアとの同期をスケジュールする
3. 設計と実装アプローチについて協業する
4. Provision チームが実装するか、実装を緊密にレビューする
5. 共同テストと検証
6. 調整されたデプロイ

### シナリオ 3: 企業規模に基づくトライアル適格性

**状況:** Growth が一定規模を超える企業のトライアルを制限して、直接販売のエンゲージメントを促進したい。

**決定:** 判断が必要 - Provision に相談する

**根拠:** これはトライアル適格性ロジック（Growth のドメイン）ですが、セールスワークフローに影響する可能性があり、リードのルーティング方法に影響する可能性があります。相談することで調整が確保されます。

**プロセス:**

1. 提案された変更を説明して #s_fulfillment に投稿する
2. インプットのために Provision PM にタグ付けする
3. 潜在的な影響についてディスカッションするためのクイック同期
4. 決定を文書化し、相談の結果に基づいて進める

### シナリオ 4: トライアル分析イベントの追加

**状況:** Growth が CustomersDot でトライアルユーザーの行動を追跡するための新しい分析イベントを追加したい。

**決定:** Growth が独立して貢献する

**根拠:** これはビジネスロジックを変更せず他のシステムに影響しない、純粋な追加的分析インストルメンテーションです。

**プロセス:**

1. GitLab のインストルメンテーションガイドラインに従って分析イベントを実装する
2. Provision メンテナーに標準的なコードレビューをリクエストする
3. デプロイしてイベントが正しく発火していることを検証する

## リソース

### 関連ドキュメント

- [Provision チームハンドブック](/handbook/engineering/development/fulfillment/provision/) - Provision チームのプロセスとプロジェクト管理
- [Growth チームハンドブック](/handbook/engineering/development/growth/) - Growth チームのプロセスと実験ガイドライン
- [Growth 実験ガイドライン](/handbook/engineering/development/growth/experimentation/) - Growth が実験を実施する方法
- [Fulfillment プロジェクト管理プロセス](/handbook/engineering/development/fulfillment/#project-management-process) - Fulfillment のインテークと計画
- [Growth-Feature プロダクトオーナーの協業プロセス](/handbook/product/groups/growth/#collaboration-process-with-other-product-teams) - 一般的な Growth 協業モデル

### 技術リソース

- [CustomersDot リポジトリ](https://gitlab.com/gitlab-org/customers-gitlab-com) - メインの CustomersDot コードベース
- [CustomersDot アーキテクチャドキュメント](https://gitlab.com/gitlab-org/customers-gitlab-com/-/tree/main/doc) - 技術ドキュメント
- [Provision Tracking System モニタリング](https://gitlab.com/gitlab-org/customers-gitlab-com/-/blob/main/doc/provision_tracking_system/failure_monitoring.md) - PTS モニタリングガイド

### 主要連絡先

- **Growth プロダクトディレクター:** [Growth チームハンドブック](/handbook/engineering/development/growth/#leadership) を参照
- **Growth エンジニアリングディレクター:** [Growth チームハンドブック](/handbook/engineering/development/growth/#leadership) を参照
- **Provision エンジニアリングマネージャー:** [Provision チームハンドブック](/handbook/engineering/development/fulfillment/provision/#team-members) を参照
- **Fulfillment プロダクトマネジメント:** [Provision の安定したカウンターパート](/handbook/engineering/development/fulfillment/provision/#stable-counterparts) を参照

## フィードバックとイテレーション

このフレームワークは生きたドキュメントです。協業から学ぶにつれて、これらのガイドラインをイテレーションして改善します。改善の提案は以下を通じて提案できます:

- [gitlab-org/fulfillment-meta](https://gitlab.com/gitlab-org/fulfillment-meta) の Issue
- [#s_growth](https://gitlab.slack.com/channels/s_growth) または [#s_fulfillment](https://gitlab.slack.com/channels/s_fulfillment) でのディスカッション
- Growth または Provision リーダーシップへの直接フィードバック

GitLab の[イテレーション](/handbook/values/#iteration)の価値に従って、チームがこのフレームワークを試し、フィードバックを収集し、実際の経験に基づいて改善を提案することを奨励します。
