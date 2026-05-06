---
title: "プロフェッショナルサービス プラクティスマネジメント"
description: "GitLab のプラクティスマネジメントチームがどのように協力して働いているかをご紹介します。"
upstream_path: /handbook/customer-success/professional-services-engineering/practice-mgmt/
upstream_sha: b4eeb07f0d5f46e2fc5f8572be1a2547261aed89
translated_at: "2026-04-26T03:00:00Z"
translator: claude
stale: false
---

## プラクティスマネジメントの概要

プロフェッショナルサービスのプラクティスマネジメントチームは、[現行のサービスオファリング](https://about.gitlab.com/services/) を成熟させ、新しいオファリングを作成・市場投入することを担当します。このページでは、プラクティスマネジメントチームの責任範囲、運営方法、そして組織化の進め方について説明します。

## 機能領域

1. **チャネルソリューションマネジメント** - チャネルパートナーを活用したアプローチによる、サービスの販売とデリバリーのスケーリング。
1. **エンゲージメントマネジメント** - 顧客エンゲージメントのポジショニング、販売、スコーピング、署名のコーディネーション。詳細は [エンゲージメントマネジメントページ](/handbook/customer-success/professional-services-engineering/engagement-mgmt/) をご覧ください。
1. **プラクティスマネジメント** - GitLab PS およびパートナーが販売・提供するサービスオファリングを構築・維持・市場投入。また、バックオフィスのプロセスを改善し、収益コスト全体の削減を行います。

## チームの紹介 - お話しましょう

私たちのチームは [team page here](/handbook/company/team/?department=practice-management) で確認できます。最も連絡しやすいのは [#ps-practice](https://gitlab.slack.com/archives/C02DWMKHGRG) Slack チャンネルです。

## バックログ、ワークフロー、カンバンボード

[PS-Practice-Management](https://gitlab.com/gitlab-com/customer-success/professional-services-group/ps-leadership-team/ps-practice-management) プロジェクトを使用して、[Issue のバックログ](https://gitlab.com/gitlab-com/customer-success/professional-services-group/ps-leadership-team/ps-practice-management/-/issues) を追跡しています。

このプロジェクト内では、いくつかの異なる [カンバンボード](https://gitlab.com/gitlab-com/customer-success/professional-services-group/ps-leadership-team/ps-practice-management/-/boards/2685806?label_name[]=EM_Process) を使い、アイデアから完了までの作業を追跡しています。

- `ps::` で始まるスコープ付きラベル（例: `ps::todo`）を使って Issue の進捗を追跡します。
- `EM_process` ラベルはエンゲージメントマネジメントとプリセールスプロセスの改善に使用します。
- `PM-process` ラベルはプロジェクト管理とデリバリープロセスの改善に使用します。
- 優先順位付けには `priority::1`、`priority::2`、`priority::3` ラベルを使用します。

## エデュケーションサービス プラクティスマネジメントのラベル

エデュケーションプラクティスマネジメントプロジェクトに固有の主なラベルは以下のとおりです。

- `ProServ-practice::Education` （カスタマーサクセスグループレベルにある [これらのスコープ付きラベル](https://gitlab.com/groups/gitlab-com/customer-success/-/labels?utf8=%E2%9C%93&subscribed=&search=PS-Practice) に置き換えられ非推奨予定）
- `Workflow::validation backlog` - チームメンバーが対象者のニーズと潜在的なエデュケーションサービスオファリングを特定する
- `Workflow::problem validation` - プラクティスマネージャーが提案されたエデュケーションサービスで対応するニーズを検証する
- `Workflow::design` - プラクティスマネージャーがソリューションコンポーネントの要件を定義し、提案ソリューションが実現可能であることを ID に確認する
- `Workflow::solution validation` - プラクティスマネージャーが提案されたエデュケーションサービスソリューションがビジネス目標を満たすことを検証する
- `Workflow::planning breakdown` - プラクティスマネージャーが ID と協力し、Issue と Epic でプロジェクト作業を計画する

## 新しいオファリングの市場投入ワークフロー

### エデュケーションサービス

#### セールスチーム支援型の市場投入

1. 新しいエデュケーションサービスがローンチされる際には、営業担当者向けの社内コミュニケーションと資料が含まれます。
    - 公共部門と営業部門 Slack チャンネルへの提供開始のアナウンス
    - セールスイネーブルメント研修への組み込み
    - /services 上のオファリング説明ページ
    - サクセスストーリー資料
    - セールスデック用スライド
    - [Services Calculator](https://services-calculator.gitlab.io/) へのオファリング掲載
    - 該当する場合は、以下を含む標準バリアント:
        - 標準 SOW
        - 営業利用のための確定 SKU
1. 営業担当者が顧客に必要なエデュケーションサービスを提案
1. 営業担当者が顧客契約に SKU を追加
1. PS がプライベートオンサイトまたはリモート ILT を提供
1. エデュケーションサービスがすべての LXP サブスクリプション SKU に対してアカウントレベルでの LXP サブスクリプションアクセスをプロビジョニング

#### Web ダイレクトの市場投入

1. 新しいエデュケーションサービスがローンチされる際には、マーケティング戦略に従って GitLab エコシステムに対する外部コミュニケーションが含まれます。これには以下が含まれます:
    - ナーチャリングキャンペーンメール
    - 製品内バナー
    - SA または CSM による推奨
    - Training Tracks ページへの掲載
    - エデュケーションサービスページへの掲載
    - 製品リリース更新での言及
    - ブログ記事でのハイライト
1. 個々のユーザーが Order ボタンをクリックし、customers.gitlab.com および LXP 内からクレジットカードで支払い
1. ユーザーは Zoom Webinar 経由で Public Remote ILT に参加
1. ユーザーは LXP から認定資格学習パスにアクセス

### マーケティング戦略

- **customers.gitlab.com 注文ページへの追加**: 認知度を高め、ユーザーがより多くのオファリングを発見できるよう導きます
- **イベントへの出展**: Commit でのエデュケーションサービスの出展
- **コミュニティとエバンジェリズム**:
  - **GitLab Heros**: GitLab Heros と一緒に認定資格をパイロットでテスト。Commit に先立って Heros にトレーニングに参加してもらい、それをもとにイテレーションを行います。トレーニングを無料で提供し、事前に GitLab 認定を取得するための無料試験を提供（連絡先は John Coghlan）
  - **GitLab Evangelism チーム**: コラボレーション施策は今後決定予定
- **カスタマーサクセスプランへの追加**: CSM のサクセスプランの一部として認定資格を組み込む。認定資格を完了したユーザーの割合に対して指標を設定する
- カスタマーアダプションナーチャリングキャンペーンへのオファリング統合
- 製品内での認知向上
- ターゲットオーディエンスがいるサードパーティのプラットフォーム/コミュニティへの直接マーケティング
  - edEx、EdCast Leapest Marketplace、LinkedIn、Dice.com
  - ブログ記事 -- GitLab およびサードパーティサイト（StackOverflow、FB など）

## プラクティスマネジメント How To

### 新しいサービス SKU の作成方法

新しい PS オファリングの SKU は PS プラクティスマネージャーから依頼されます。新しい SKU を依頼するには、プラクティスマネージャーは以下の項目とステップを決定・完了して承認を得る必要があります。

#### 必要な項目

- アイテムが参照できる SOW の見本
- 確立されたコスト基準と前提条件
- 工数と時間単価
- デリバリーコスト（工数 × 時間単価）
- 含まれる T&E の前提条件（ある場合）

#### SKU 作成のステップ

プラクティスマネージャーは新しい SKU の作成依頼に以下のステップを踏みます。

1. 上記の要件を参照しながら、[Finance Issue トラッカーに Issue を作成](https://gitlab.com/gitlab-com/business-technology/enterprise-apps/financeops/finance-systems/-/issues/new?issuable_template=CM:%20Add_New_PS_SKU)
1. セールス担当の Finance Business Partner とレビュー
1. 必要な変更を加える
1. ビジネス上の根拠を含むエグゼクティブサマリーを含める
1. 承認のため Customer Success VP に提出
1. 承認のため CFO、CRO、CEO に提出
1. 承認後、経理チームが Zuora で SKU を設定するためのコメントを追加
1. Kim Stagg に対して、製品を Price Book に追加し、SKU 番号/Channels パートナンバーを提供してもらうコメントを追加。コメントには製品名と製品説明を含めてください。Price Book の更新は四半期ごとに販売代理店にリリースされます。
1. 製品が製品カタログと Price Book に追加されたら、services.yaml ファイルを更新して新製品の詳細を含める

#### Salesforce で SKU が表示されているかの検証

1. Salesforce にログイン
1. opportunities タブをクリック
1. `Test Account-NEW` の opportunity を検索
1. 下にスクロールし `New Quote` ボタンをクリック
1. `Sold To Contact` と `Bill to Contact` で PS Test account を選択
1. `start date` を本日として追加
1. 下にスクロールし `Next` をクリック
1. `New Quote Flow` の隣のドロップダウンボックスをクリックし `Add Add On Products` を選択
1. `Professional Services and Training` の行で、`Select Plan` と書かれたドロップダウンをクリックして、営業担当者が見ている現在の SKU オファリングを確認

### サービス SKU の廃止方法

PS オファリングの SKU の廃止は PS プラクティスマネージャーから依頼されます。SKU の廃止を依頼するには、プラクティスマネージャーは SKU の作成と同じ基本的なステップに従い、同じ Issue テンプレートを使用して適切な承認を得ます。

### プロフェッショナルサービス製品ページの編集方法

PS は services.yml というファイルを、オファリングの説明と仕様の Single Source of Truth (SSoT) として使用しています。このファイルはドキュメントマクロと組み合わせて使用され、GitLab ドキュメントのさまざまな部分にデータを供給するほか、[Services Calculator](https://services-calculator.gitlab.io/) でも使用されます。[Services SSOT Wiki Page](https://gitlab.com/gitlab-com/customer-success/professional-services-group/ps-process/-/wikis/Services-Single-Source-of-Truth) では、その様々な用途、属性、メンテナンスプロセスについて説明しています。オファリングを更新または追加したいチームメンバーは、Wiki ページに記載されている手順に従ってください。

### 新しいサービス/イニシアチブのためのソフトウェア開発

共通のソフトウェアスタックと開発プロセスについては [Developing Software For Professional Services](../professional-services-tooling) を参照してください。

### 開発環境のセットアップ

新しいプラクティスエンジニアおよびプロフェッショナルサービスエンジニアは、開発に使用する基盤ツールをすべてインストールするために [setting up a development environment](../development-environment) チュートリアルを参照してください。
