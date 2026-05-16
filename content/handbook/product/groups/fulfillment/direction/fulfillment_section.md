---
title: Fulfillment セクションの方向性
description: "GitLab の Fulfillment セクションは、お客様が有料サブスクリプションを購入、アップグレード、ダウングレード、更新できるようにサポートすることに重点を置いています。"
upstream_path: /handbook/product/groups/fulfillment/direction/fulfillment_section/
upstream_sha: 1e195b58b9f249ff10bd0e705106c320fee86141
translated_at: "2026-05-13T12:00:00Z"
translator: claude
stale: false
lastmod: "2026-04-08T15:49:17+00:00"
---

## Fulfillment セクションの概要

GitLab の Fulfillment は、お客様にシームレスな購入体験を提供することを目指しています。私たちは、GitLab サブスクリプションの購入・有効化・管理を可能な限り簡単にするために [quote-to-cash](/handbook/company/quote-to-cash/) のシステムに投資しています。これにより顧客満足度が向上し、Go-to-Market (GTM) プロセスが効率化され、会社の収益成長の加速に貢献します。GitLab が AI 製品やマーケットプレイス連携を拡張するにつれ、Fulfillment チームはこれらの新しい機能をお客様に提供できるようにする上で重要な役割を担い、会社の野心的な成長目標を支えています。

### グループ

Fulfillment チームは 5 つのグループで構成されています:

1. [Fulfillment Platform](fulfillment_platform/) - すべての Fulfillment システムと統合を支えるアーキテクチャと基盤システムを提供します。
1. [Subscription Management](subscription_management/) - お客様がセルフサービスツールを通じて GitLab 製品を購入し、サブスクリプションを管理し、請求を扱えるようにします。
1. [Provision](provision/) - 購入後のサブスクリプションプロビジョニングを促進し、自己管理型インスタンス向けのライセンス作成や、GitLab.com グループの権限更新を行います。
1. [Seat Management](seat_management/) - 購入したシートとアドオンのユーザー割り当てを扱い、ネームスペースをまたいだシート利用状況の可視性を提供します。
1. [Utilization](utilization/) - お客様が消費型製品の使用状況を確認・管理し、GitLab への投資を最適化できるよう支援します。

## 参加方法

私たちは、Fulfillment プロセスを改善するためのフィードバックや貢献を歓迎します:

- お客様やコミュニティメンバーの方: ご経験やご提案を、私たちの [公開 Issue トラッカー](https://gitlab.com/gitlab-org/gitlab/-/issues) や、担当の GitLab 窓口を通じてお寄せください。
- すべての方向け: このページにマージリクエストを作成して `@courtmeddaugh` をレビュー担当に指定するか、アイデアを添えて [Fulfillment Meta Issue を作成](https://gitlab.com/gitlab-org/fulfillment-meta/-/issues/new) してください。

皆様のご意見は、私たちの取り組みを継続的に改善し、ユーザーニーズに合わせていく上で大きな助けになります。

## ミッション

> GitLab プラットフォーム全体を通じて、摩擦のない購入とサブスクリプション管理の体験を実現することで、お客様の成功を後押しします。直感的なセルフサービス体験と、ニーズに応じてスケールする柔軟な収益化モデルを通じて、お客様が容易に GitLab を入手・プロビジョニング・最適化できるようにします。

GitLab の有料プランは、お客様がソフトウェアをより速く、より安全に構築するための豊富な機能セットを提供しています。Fulfillment セクションにとっての成功とは、お客様が可能な限り簡単に GitLab と取引でき、有料製品の豊富な機能セットの価値を引き出せるようにすることです。

私たちは「セルフサービスファースト」のアプローチを推奨しつつ、セールス支援型の取引もサポートしています。私たちの目標は、シートベースのサブスクリプションと使用量ベースのアドオンの両方を含む柔軟な収益化モデルを実現することです。私たちはサブスクリプション管理を簡素化し、お客様が好む購買チャネルや支払い方法をサポートするために継続的に取り組んでいます。さまざまな国・組織規模・業界にわたる多様なお客様にサービスを提供しているため、直接取引と [チャネルおよびアライアンス](/handbook/sales/#channels--alliances) を通じた販売の両方で卓越することを目指しています。

### 運営原則

私たちのチームは、以下の原則に基づいて運営しています。

#### 1. 優れたカスタマーエクスペリエンスの提供

- 直感的でセルフサービスファーストな購入、管理、プロビジョニング体験を設計する
- すべてのカスタマータッチポイントで一貫した信頼性とパフォーマンスを確保する
- 明確なアップグレードパスと柔軟なサブスクリプション管理オプションでお客様の成長を支援する
- 自動化に注力し、手作業による介入を減らし精度を高める

#### 2. 戦略的なフォーカスを推進する

- 全社の戦略および目標との厳密な整合性を維持する
- 定量的・定性的なデータ (顧客リサーチとフィードバック) を通じて意思決定を検証する
- 主要な優先事項に明確に整合しない作業には押し戻す
- チームのキャパシティと戦略的イニシアチブのバランスをとり、品質を維持し燃え尽きを避ける

#### 3. 協業によって成果を上げる

- 関連部門と緊密に連携し、お客様向けソリューションについて足並みをそろえる
- 四半期 OKR と主要なプロジェクトマイルストーンの初期段階で合意を形成する
- 明確なコミュニケーションを通じて進捗とブロッカーの可視性を共有する
- 売上インパクトとビジネス成果へのフォーカスを維持する

#### 4. イノベーションとシステムの健全性のバランスをとる

- 新機能開発と並行して技術的負債を慎重に優先順位付けする
- 長期的なスケーラビリティを確保するためにシステム保守へ投資する
- 将来の機能を実現する基盤的改善にフォーカスする
- お客様基盤とともに成長する、スケーラブルで保守可能なシステムを構築する

## 将来の展望

FY26 を超えた先で、Fulfillment セクションは以下の機会を模索しています:

- 標準的なサブスクリプション管理プロセスのほぼ完全な自動化を実現する
- GitLab の新しいセグメントや市場での成長を支えるために、グローバルな支払い・請求機能を拡張する
- 拡大するお客様基盤の多様なニーズに応えるために、より柔軟なサブスクリプション・支払いモデルを開発する
- より多くのお客様に私たちのプラットフォームをアクセス可能にするための、新しいティア構成や製品提供の検討を支援する
- 顧客更新および拡張機会についての予測的なインサイトを提供するために、高度な分析と AI を統合する

### GitLab の対応可能市場への影響

私たちは新しい製品提供を立ち上げ、シームレスなエンドツーエンドのサブスクリプション管理体験を提供することで運用効率を高め、対応可能市場を拡大しています。これにより、セールスチームはより多くの時間をお客様との戦略的な議論に費やせるようになります。また、サポートチームやファイナンスチームはより効率的に業務を行えるようになります。

対応可能市場を拡大した最近の成果には、次のようなものがあります:

- GitLab Duo Enterprise および Duo Pro アドオンの導入。これは新しい収益源を開き、AI 支援開発における進化するお客様のニーズに応えるものです。
- 既存の GitLab.com Premium ネームスペース上で Ultimate のトライアルを可能にしたこと。これにより、アップグレードが促進され、私たちの最も包括的な製品の採用が拡大しました。
- セルフサービス機能の改善。これにより、特に SMB セグメントで、より幅広いお客様が GitLab を利用しやすくなりました。

## 最近の成果

私たちは、新しいビジネス機会の提供と、技術システム基盤の改善のバランスをとり続けています。

### 最近の Pricing & Packaging のハイライト

1. 2025-05 [GitLab Duo の機能を Premium と Ultimate サブスクリプションに追加費用なしで提供](https://about.gitlab.com/blog/gitlab-premium-with-duo/)
1. 2025-04 [GitLab Duo with Amazon Q アドオン](https://about.gitlab.com/blog/gitlab-duo-with-amazon-q-agentic-ai-optimized-for-aws/)
1. 2024-08 [GitLab Duo Enterprise アドオン](https://about.gitlab.com/blog/gitlab-duo-enterprise-is-now-available/)
1. 2024-01 [GitLab Duo Pro アドオン](https://about.gitlab.com/blog/gitlab-duo-pro/)

### 最近のカスタマーエクスペリエンス改善

1. FY26-Q1 [GitLab.com における休眠ユーザーの自動削除](https://docs.gitlab.com/user/group/moderate_users/#automatically-remove-dormant-members) を導入
1. FY26-Q1 お客様が [クレジットカードで請求書を支払える](https://docs.gitlab.com/subscriptions/customers_portal/#pay-for-an-invoice) ようにした
1. FY25-Q4 シート超過のブロック機能をベータでリリース
1. FY25-Q3 GitLab Duo Enterprise トライアルをローンチ
1. FY25-Q3 Duo シート割り当てを、ソート、フィルタリング、最大 100 ユーザーまでの一括 UI 割り当ての拡張により改善
1. FY25-Q3 [Manage Non-billable to Billable Promotions 機能](https://docs.gitlab.com/ee/administration/settings/sign_up_restrictions.html#enable-role-promotion-approval) をローンチ
1. FY25-Q3 複数のレートプランを持つサブスクリプションに対するセルフサービス更新と自動更新を拡張
1. FY25-Q3 既存の gitlab.com Premium ネームスペースでセルフサービスの Ultimate トライアルを有効化 (以前は社内の GitLab チームメンバーの介入が必要でした)
1. FY25-Q3 [Beta の GitLab.com Opt-in Block Seat Overages](https://docs.gitlab.com/ee/administration/settings/sign_up_restrictions.html#turn-on-restricted-access) を展開
1. FY25-Q3 カスタムモデルを実行するオフラインのお客様向けに Duo Offline Licensing を完了

## カスタマーフィードバック

私たちは顧客満足度の向上と、サポートを必要とするお客様の減少を確認しており、これらは以下のような改善に起因していると考えています:

- Block Seat Overages の導入と Manage Non-billable to billable promotions が、より予測可能な請求を求めるお客様の助けになっていること
- 強化された Duo シート割り当て機能が、大規模組織のユーザー管理体験を改善していること
- 複数のレートプランを持つサブスクリプションをセルフサービスで更新できるようになり、多くのお客様にとって更新プロセスの摩擦が軽減されたこと

私たちはこれらのフィードバックを継続的に製品開発プロセスに取り入れ、進化するお客様のニーズに応えるよう努めています。

## FY26 の目標と全社目標との整合

Fulfillment チームは、GitLab の戦略目標に優先事項を合わせていくことに尽力しています。今年のフォーカスエリアの一部を以下に示します。なお、私たちの仕事の一部は SAFE な性質を持つため、以下のリストは網羅的ではありません。

### 目標 1: First Order Growth の支援

**目標とする貢献:** 近代化されたライセンス、強化されたセルフサービス体験、戦略的な新製品提供を通じて、最初の購入までのシームレスな経路を実現する

#### 主要イニシアチブ

- 自己管理型 Ultimate トライアルをクラウドライセンスへ移行できるようにする
- 無料の自己管理型のお客様向けに Ultimate + Duo Enterprise トライアルを有効化する
- クラウドライセンスを使った一時的な延長機能を実装する
- Customers Portal でのセルフサービス購入向けにスケーラブルな割引プロモシステムを構築する
- 請求書のクレジットカード支払いを有効化し、製品の種類を問わずセルフサービス購入をサポートする、合理化された統一購入フローを導入することで、セルフサービスの購入およびサブスクリプション管理機能を強化する
- 自動更新中のサブスクリプションの更新率を引き上げ、まだ自動更新になっていないサブスクリプションの自動更新適格性を高める。
- 事前認可されたサポート連絡先管理を合理化する
- Growth チームと協力して、トライアルから有料への変換プロセスを合理化する
- 新しい `Duo with Amazon Q` 製品のバンドル価格設定とプロビジョニングをサポートする

### 目標 2: 顧客価値の加速

**目標とする貢献:** 合理化されたプロセスと柔軟なアップグレードパスを通じて Quote-to-Cash 体験を改善し、Premium ティアの価値を高める

#### 主要イニシアチブ

- EntApps と提携し、Salesforce 統合のための一元化されたデータモデルを実装する
- CDot エラー監視システムを通じて、トランザクションデータフローのモニタリングと可視性を改善する
- 短期的なエラー改善を通じて、CustomersDot と Salesforce の統合におけるデータ精度と信頼性を高める
- 新たに発足した QTC Steering committee への参加を通じて、将来の QTC 改善のためのスケーラブルな基盤を構築する
- Premium と Ultimate の間の柔軟なアップグレードパスをサポートする
- Premium のお客様向けに Duo Enterprise の購入を可能にする
- Cloud Connector と提携し、正確な機能マッピングの変更を確実にする

### 目標 3: 顧客中心のイノベーションを推進

**目標とする貢献:** 進化するお客様のニーズと購買嗜好を支えるために、柔軟な価格モデルと合理化されたユーザー管理を実現する

#### 主要イニシアチブ

- 代替の GitLab 製品の導入を評価する
- 将来の柔軟性のために強化された請求モデルをサポートする
- Duo のプロビジョニングとライセンス機能を強化する
- 新しい Seat Assignment Model を実装し、シート超過の扱いを改善する
- Duo シートのプロビジョニングを、追加の UI とバックエンドのカスタマイズオプションで強化する

## 課題と機会

Fulfillment プロセスや製品提供を進化させ続ける中で、私たちはいくつかの課題と機会に直面しています:

課題:

- SMB から大企業まで、多様なお客様セグメントのニーズのバランスをとる
- スケールおよび新機能追加に伴って、システムのパフォーマンスと信頼性を維持する
- 製品やアドオンの数が増える中でも、シームレスなサブスクリプション管理を確保する

機会:

- 自動化を活用して、さらに Fulfillment プロセスを合理化する
- クラウドマーケットプレイスでのプレゼンスを拡大し、新しいお客様セグメントにリーチする
- 進化するお客様のニーズに応えるための、より柔軟なサブスクリプションモデルを開発する

## ロードマップ

ほとんどのプロジェクトが [非公開](/handbook/communication/confidentiality-levels/#not-public) の性質を持つため、製品ロードマップは社内向けです。

[Fulfillment FY26 Plans and Prioritization](https://gitlab.com/gitlab-com/Product/-/issues/13890) (こちらも非公開) があり、GitLab チームメンバーはテーマごとにすべての計画イニシアチブを追跡するために参照できます。

### ロードマップの優先順位付け

私たちのロードマップ優先順位付けの原則とプロセスについて詳しくは、[Fulfillment Roadmap Prioritization](/handbook/product/groups/fulfillment/#fulfillment-roadmap-prioritization) を参照してください。

## 主要メトリクス

具体的な数値は公開していませんが、GitLab の成長目標との整合性を確保するために、サポート、セルフサービスの採用、収益インパクトにわたる主要メトリクスをモニタリングしています。

- サブスクリプション管理に関連するサポートチケットの削減
- セルフサービスのサブスクリプション管理の採用率
- さまざまなサブスクリプションタイプにわたるシート利用率
- 新製品とアドオンのトライアル変換率
- 新製品提供と価格変更による収益インパクト
- 重要な Fulfillment サービスのシステム稼働率およびパフォーマンスメトリクス

## 最近の成果と学び

その他の最近のマイルストーン達成や学びの振り返りについては、[Fulfillment Recap Issue](https://gitlab.com/gitlab-com/Product/-/issues/?sort=updated_desc&state=closed&label_name%5B%5D=Fulfillment%20Recap&first_page_size=20) (必要に応じて社内向け) を参照してください。

## 主要リンク

1. [Fulfillment Guide](/handbook/product/groups/fulfillment/): [コア製品ドキュメント](https://docs.gitlab.com/) 外にある CustomersDot 管理ツールと内部プロセスをカバーするドキュメント。
2. [Dev - Fulfillment Sub Department](/handbook/engineering/development/fulfillment/): R&D チーム、優先事項、優先順位付けプロセスなど。
3. [Internal Handbook - Fulfillment](https://internal.gitlab.com/handbook/product/fulfillment/): 公開ハンドブックに掲載できないドキュメント。収益ベースの KPI や機密プロジェクト文書など、[非公開](/handbook/communication/confidentiality-levels/#not-public) 情報に限定するようにしています。
4. [GitLab Docs: Subscribe to GitLab](https://docs.gitlab.com/subscriptions/)
