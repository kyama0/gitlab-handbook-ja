---
title: コーポレートセキュリティ (CorpSec)
upstream_path: /handbook/security/corporate/
upstream_sha: 1e195b58b9f249ff10bd0e705106c320fee86141
translated_at: "2026-05-10T00:00:00Z"
translator: claude
stale: false
lastmod: "2025-08-14T01:37:01+00:00"
---

👋 コーポレートセキュリティへようこそ、お会いできて嬉しいです！私たちは、2024 年初頭にファイナンス部門からセキュリティ部門に異動した、旧 IT オペレーションチームとしてもご存知かもしれません。

## ヘルプが必要ですか？

まずは以下のページを探索して、ハンドブックページに質問の回答が記載されているかを確認してください。なければ、`#it_help` チャンネルで質問していただければ、サポートアナリストの 1 人ができるだけ早く返信します。

- [CorpSec オンボーディング 101 ガイド](/handbook/security/corporate/end-user-services/onboarding101/)
- [CorpSec サポートガイド](/handbook/security/corporate/support)
- [CorpSec サービス](/handbook/security/corporate/services)
- [CorpSec システムとTech Stackアプリ](/handbook/security/corporate/systems)
- [社内ハンドブック](https://internal.gitlab.com/handbook/security/corporate)
- [システム管理とランブックハンドブック](https://handbook.gitlab.systems)
- `#it_help` Slack チャンネルで質問する

## 私たちの活動

### ミッション

[セキュリティ部門のミッション](/handbook/security/#i-classfas-fa-rocket-idbiz-tech-iconsi-security-vision-and-mission)

リモート企業として、私たちはオフィスビル、物理的なデータセンター、その他の従来型の IT 環境を持っていません。すべてのチームメンバーには、自宅や移動中に作業するためのラップトップが支給されます。エンジニアリングチームとプロダクトチームは AWS や GCP にデプロイされるソフトウェアを構築していますが、コーポレートソフトウェアのほぼすべてはベンダー管理のサービスとしてのソフトウェア (SaaS) です。これにより物理的な脅威の景観はシンプルになりますが、サイバーセキュリティの脅威の景観は広大であり、適切に対応するには依然として多くの注意が必要です。

私たちのミッションは、ビジネスが提供するテクノロジーで従業員が生産的になれるようにし、ビジネスを成功させ、顧客とそのデータを保護し、GitLab (会社) のための内部セキュリティと、チームメンバーによる GitLab (製品) の使用を提供することです。

GitLab は会社であり、製品でもあります。コーポレートセキュリティ部門は、会社が社内業務を行うために使用するテクノロジーを保護し、チームメンバーが業務を遂行するために必要なハードウェア、ソフトウェア、ツールを提供することに焦点を当てています。チームメンバー向けに 24x5 のテクニカルサポートヘルプデスクを運営し、社内のTech Stackアプリケーションの多くを構成・保守するエンジニアを擁しています。また、デバイストラストとアイデンティティ管理に多大な投資を行い、製品の管理者に最高レベルのセキュリティアシュアランスを提供し、顧客データを取り扱う際にすべての適切な制御が整っていることを保証しています。

### 主要原則

- 当社のデジタル資産を保護し、すべてのデータの完全性、機密性、可用性を確保します。
- 強固なセキュリティ対策を実施し、従業員の中で意識とコンプライアンスの文化を育み、進化する脅威から保護するために IT システムを継続的に監視・強化します。
- GitLab プラットフォームを活用 (ドッグフーディング) して、GitLab のセキュリティ確保を支援します。
- 部門横断的な組織目標をサポートするために、ゼロトラストの原則に基づいた信頼性が高く安全で効率的な IT・セキュリティエンジニアリング、イノベーション、サービスを提供します

### スコープ

- セキュリティ関連システム間の次世代の自動化と統合を設計し、データの一貫性、信頼性、強固なセキュリティ、監査可能性を提供する。
- 部門横断的なシステムオーナーとの関係構築を行い、当社のTech Stackアプリケーションが最新のセキュリティのベストプラクティスに準拠するようソリューションを提案する
- レガシーな技術的負債を統合・リファクタリングする
- バックオフィスの自動化を改善するか、セキュリティリスクを軽減するプロセスを設計し、ソフトウェアツールを選定する
- リーダーシップチーム向けのエスカレーションエンジニアリングと危機対応
- 意思決定時にコスト、セキュリティ、互換性、保守性、ユーザーエクスペリエンスを考慮する
- メンタリングを通じて他のチームメンバーのスキルセットを成長させ、運用効率を向上させ、専門能力開発を奨励する
- プロセスとシステムアーキテクチャに関するハンドブックドキュメント
- アイデンティティとアクセス管理 (IAM)
- 自動化効率、セキュリティ態勢、脆弱性管理を改善するために、社内のプロセスオーナーとシステムオーナーとの共同協働
- リーダーと利害関係者に次世代イニシアチブを継続的に通知し、日々の IT・セキュリティ運用のための自動分析の作成に貢献する
- 複数のチーム間でのイノベーションの機会をリードし、実験する意欲を持ち、大規模で複雑な範囲の問題に大胆に立ち向かう
- 部門と組織を代表して技術的決定を行い、技術的な議論中にリーダーへのプレゼンテーションサポートを提供する
- 新しいTech Stack (ベンダー) アプリケーションのオンボーディングとプロビジョニング
- オンボーディングプロビジョニング、オフボーディング・デプロビジョニング
- 私たちが管理する組織全体のアプリケーションとシステムのポリシーと構成管理
- ロールベースアクセス制御 (RBAC)
- 新しいチームメンバーへのラップトップの発送と古いモデルのリフレッシュ
- チームメンバーと一時的なサービスプロバイダー向けのテックサポート
- 社内ソフトウェアとツールのユーザーエクスペリエンスと生産性最適化
- 脆弱性とマルウェアリスクの軽減
- 従業員ライフサイクルのワークフロー自動化
- X-Men、それが私たち。常に笑顔で世界を救う！
- 昨日の問題は明日のイテレーションの機会
- ゼロトラストの実装

### 方向性と戦略

- (社内向け) [CISO 複数年情報セキュリティ目標と優先事項](https://internal.gitlab.com/handbook/security/information_security_goals_and_priorities/)
- (社内向け) [CorpSec 方向性と戦略](https://internal.gitlab.com/handbook/security/corporate/direction)
- (社内向け) [CorpSec OKR とロードマップ](https://internal.gitlab.com/handbook/security/corporate/roadmap)
- (社内向け) [CorpSec プロジェクトとイニシアチブ](https://internal.gitlab.com/handbook/security/corporate/projects)
- [セキュリティ部門 OKR](/handbook/security/okr/)
- (社内向け) [コーポレートセキュリティ Epic 一覧](https://gitlab.com/groups/gitlab-com/gl-security/corp/-/epics?state=opened&page=1&sort=start_date_desc)
- (社内向け) [コーポレートセキュリティ Epic ガントチャート](https://gitlab.com/groups/gitlab-com/gl-security/corp/-/roadmap?state=opened&sort=START_DATE_ASC&layout=QUARTERS&timeframe_range_type=THREE_YEARS&progress=WEIGHT&show_progress=true&show_milestones=false&milestones_type=ALL&show_labels=true)
- (社内向け) [CorpSec Issue トラッカー](https://gitlab.com/gitlab-com/gl-security/corp/issue-tracker/-/issues)
- [私たちの働き方](/handbook/security/corporate/how-we-work)

### サービス

- 👀 **ヘルプをお探しの場合は、[CorpSec サポート](/handbook/security/corporate/support) をご覧ください。**
- 📚 [アプリケーションとシステム](/handbook/security/corporate/systems)
- 🛟 [ヘルプデスクサービス](/handbook/security/corporate/services/helpdesk)
  - 🔐 [アクセスリクエスト](/handbook/security/corporate/services/access-requests)
  - 💻 [ラップトップとロジスティクスサービス](/handbook/security/corporate/end-user-services/laptop-management)
  - 🛬 [オンボーディング](/handbook/security/corporate/services/onboarding)
  - 🛫 [オフボーディング](/handbook/security/corporate/services/offboarding)
  - 🧑‍💻 [テックサポート (チームメンバー向け)](/handbook/security/corporate/support/)
- ☁ [インフラストラクチャサービス](/handbook/security/corporate/services/infrastructure)

### エンジニアリング

- 📋 [私たちの働き方](/handbook/security/corporate/how-we-work)
- 💻 [デバイストラストエンジニアリング](/handbook/security/corporate/engineering/device-trust)
- 🔐 [アイデンティティエンジニアリング](/handbook/security/corporate/engineering/identity)
- ☁ [インフラストラクチャエンジニアリング](/handbook/security/corporate/engineering/infrastructure)
- 🏗 [プラットフォームエンジニアリング](/handbook/security/corporate/engineering/platform)
- 👷 [SaaS エンジニアリング](/handbook/security/corporate/engineering/saas)

## 私たちは誰か

[チームディレクトリ](/handbook/security/corporate/team) を参照してください。

### お問い合わせ

- [Tier 1 セルフサービス](/handbook/security/corporate/support/#tier-1-self-service)
- [Tier 2 ヘルプデスクサポート](/handbook/security/corporate/support/#tier-2-helpdesk-support)
- [Tier 3 エスカレーションとシステムエンジニアリング](/handbook/security/corporate/support/#tier-3-escalation-and-systems-engineering)
- [Tier 4 オートメーションエンジニアリング](/handbook/security/corporate/support/#tier-4-automation-engineering)
- [Tier 5 アーキテクチャと危機管理](/handbook/security/corporate/support/#tier-5-architecture-and-crisis-management)
- [CorpSec Issue トラッカー](https://gitlab.com/gitlab-com/gl-security/corp/issue-tracker/-/issues)
- エンジニアとシステムオーナー - GitLab グループハンドルと Slack グループハンドルについては [CorpSec システム](/handbook/security/corporate/systems) を参照してください。
  - `#corpsec` Slack チャンネル (テクニカルサポートについては `#it_help` でお問い合わせください)
- ヘルプデスクチーム
  - `#it_help` Slack チャンネル
  - `@it-help` Slack グループ
  - `it-help [at] gitlab [dot] com`
  - `@gitlab-com/gl-security/corp/services`
- マネジメントチーム
  - `@gitlab-com/gl-security/corp/managers`
  - Slack で該当する [機能チームマネージャー](/handbook/security/corporate/team) またはディレクターをタグ付けしてください。
    - ディレクター - Steve Manzuik
    - プログラム管理 - Steve Manzuik、Kim Waters
    - デバイストラスト - Eric Rubin
    - ヘルプデスクサポート - Michael Beltran
    - インフラストラクチャ - Jeff Martin
    - ラップトップとロジスティクス - Michael Beltran
    - オンボーディング・オフボーディングの日常運用 (ヘルプデスクサービス) - Michael Beltran
    - オンボーディング・オフボーディングのポリシーと戦略 (アイデンティティエンジニアリング) - David Zhu
    - プラットフォームエンジニアリング (カスタムソフトウェア開発) - Jeff Martin
    - SaaS エンジニアリング - David Zhu、Eric Rubin
    - 機密データまたは雇用関連リクエスト - Michael Beltran
