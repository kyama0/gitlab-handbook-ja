---
title: "Product Security Incident Response Team (PSIRT)"
description: PSIRT ホームページ
upstream_path: /handbook/security/product-security/psirt/
upstream_sha: 1e195b58b9f249ff10bd0e705106c320fee86141
translated_at: "2026-05-10T00:00:00Z"
translator: claude
stale: false
---
## Product Security Incident Response Team (PSIRT)

## ミッションステートメント

PSIRT は、本番環境にあるお客様のコミットメントが影響を受ける GitLab の GA (Generally Available) 機能のセキュリティ脆弱性を識別、評価、対応します。私たちは [Coordinated Vulnerability Disclosure](https://about.gitlab.com/security/disclosure/)、セキュリティリリース、外部から報告された脆弱性に対するインシデント対応を提供します。ビジネスおよび技術的影響のリスクベース分析を通じて、PSIRT は Engineering が機能開発との関連でセキュリティ修正を正しく優先順位付けできるようにします。これにより、セキュリティリスクが大きくない限り、開発のベロシティを維持しながら脆弱性が是正されることを確保します。PSIRT は、エンジニアリング修正、パッチ開発、脆弱性に関するお客様コミュニケーションの調整 DRI として支援することで、セキュリティインシデントに貢献します。

## 価値提案

私たちは、Engineering チームが調整された開示プラクティス、お客様の信頼、コンプライアンス要件を維持しながら、実際のリスクに整合した適切な緊急性でセキュリティ問題に対応できるよう、本番機能に対する脆弱性ライフサイクル管理 (トリアージ、調整、是正、開示) を提供します。さらに、プロアクティブな緩和に役立つよう、脆弱性から得られる教訓のインサイトを提供します。

## スコープと責任

### 主な所有領域

**本番環境の機能:** PSIRT は、お客様が脆弱性によって本番環境のコミットメントに影響を受ける可能性がある場合の GitLab ソフトウェアおよびサービスの脆弱性の影響を調査・コミュニケーションする DRI であり、実験的機能やベータ機能に関する報告を受けた場合は AppSec と連携します。

- **Coordinated Vulnerability Disclosure:** バグバウンティプログラムを通じて受信した GitLab ソフトウェアとサービスのネイティブコード内の脆弱性、HackerOne を通じて報告されたかメディアで取り上げられている公開された悪用可能なオープンソースの脆弱性 (Heartbleed、Log4J など) の外部報告 (Coordinated Vulnerability Disclosure) を扱います。

- **Security Response:** 本番環境の機能とサプライチェーン (例: Log4J) における重大かつ悪用可能な脆弱性をトリアージおよび技術的に評価し、会社およびお客様のリスクを判断し、是正中に Engineering とコミュニケーションして連携します。

- **Security Release:** 通常のパッチリリース時に、定義されたリリースプロセスを持つ GitLab 機能に影響する脆弱性に関する外部コミュニケーションを調整します。

- **バリアントハンティング:** 開示された脆弱性のバリアントをコードベース全体で検索し、類似のパターンを特定します。

- **是正検証:** ソフトウェアの是正が完全であり、簡単にバイパスされないことを確保します。

### インターフェースポイント

私たちのアカウンタビリティは、重大かつ悪用可能な脆弱性をトリアージおよび技術的に評価し、会社およびお客様のリスクを判断し、これらの問題に関する外部コミュニケーションを調整することです。PSIRT は社内に複数のパートナーを持っています:

- **Security チーム連携**
  - **Application Security (AppSec) チーム**
    - インシデント対応中の専門的な製品知識のためのエスカレーション
    - バリアントハンティングインサイトの共有
    - pre-GA → post-GA 移行のためのナレッジ共有
  - **Vulnerability Management (VM) チーム**
    - 脆弱性ルーティングに関するワークフロー整合
    - クロスドメイン脆弱性所有権の調整
  - **Security Platforms and Architecture (SPA) チーム**
    - PSIRT は悪用可能性 POC 開発のために SPA に支援を求めます

- **Security チームエスカレーション:** 以下の領域でサポートのリクエストに対応します:
  - Vulnerability Management が特定した 3rd パーティの脆弱性が活発に悪用されているか、注目度が高いか、複数のお客様への対応が必要な場合の脆弱性緩和のサポート [リクエスター: Vulnerability Management]
  - エンジニアリング修正、パッチ開発、脆弱性に関するお客様コミュニケーションの調整 DRI として、また脅威検出に使用する POC/IOC 開発を提供する (必要に応じて SPA がサポート) ことによるインシデントサポート \[リクエスター: SecOps\]
  - pre-GA → post-GA 移行のためのナレッジ共有 \[AppSec\]

- **製品/Engineering との連携:**
  - 脆弱性報告の Development Responsible Individuals (DRI) への直接ルーティングと、脆弱性再現の支援
  - 脆弱性修正の検証とセキュリティリリースの調整 (CVE、ブログ投稿、コミュニケーション)

- **Comms/PR との連携:**
  - セキュリティ脆弱性メッセージングの連携

### スコープ外

- pre-GA 機能のセキュリティレビューと Engineering との連携 (AppSec が所有)
- Vulnerability Management ツールの開発または実装 (Vulnerability Management が所有)
- Incident Command と Incident Communication (SIRT が所有)
- 製品脆弱性に関するお客様エスカレーション (Field Security が所有)
- コンプライアンス違反の執行／是正 (Security Assurance が所有)
- GitLab が特定した第三者の脆弱性の責任者への開示 (Threat Intelligence が所有)

## オペレーティングモデル

未定 (tbd)

### コアプロセス

[**重大な脆弱性に対する根本原因分析**](/handbook/security/root-cause-analysis)

[**Application Security エンジニアによる priority::1/severity::1 Issue の処理**](/handbook/security/product-security/psirt/runbooks/handling-s1p1/)

[**Application Security エンジニアによる SIRT との協働**](/handbook/security/product-security/psirt/runbooks/working-with-sirt/)

[**CVSS 計算**](/handbook/security/product-security/psirt/runbooks/cvss-calculation/)

[**パッチリリースにおける PSIRT の一般プロセス**](/handbook/security/product-security/psirt/runbooks/security-engineer/)

[**PSIRT ケースライフサイクル**](/handbook/security/product-security/psirt/runbooks/psirt-case-lifecycle/)

[**HackerOne プロセス**](/handbook/security/product-security/psirt/runbooks/hackerone-process/)

[**意図しない脆弱性開示への対応**](/handbook/security/product-security/psirt/runbooks/unintended-vuln-disclosure/)

[**アップストリームのセキュリティパッチへの対応方法**](/handbook/security/product-security/psirt/runbooks/upstream-security-patches/)

### エンゲージメントモデル

チームは隔週でチームシンクを開催しています。[アジェンダ](https://docs.google.com/document/d/1MzKzRDNJBm4P1Ww8ieZtr4vtXmbmqYI80NSD8x55WTM/edit?usp=drive_link)は Security Division メンバーが利用可能です。

チームの決定はプロジェクト Issue トラッカーで議論されるべきです。現在 PSIRT はレガシープロセスのため AppSec の Issue トラッカーを使用していますが、独自のものを作成することを検討中です。

### コミュニケーションチャネル

PSIRT チームとの定期的なコミュニケーションは以下を通じて行われます:

- GitLab: @gitlab-com/gl-security/product-security/psirt-group をメンション
- Slack: \#security-help または \#security-discuss を使用し、@psirt-team をメンション

活発に悪用されている、または公開的な露出 (メディア、お客様、研究者による 0-day) を持つ重大な製品脆弱性については、Slack で `/security` を使用してオンコールの Security エンジニアと連携してください。SecOps がインシデントの協働のために PSIRT を関与させます。

### 外部アウトリーチ

GitLab の[**再現可能な脆弱性**](/handbook/security/product-security/security-platforms-architecture/application-security/reproducible-vulnerabilities/)を使った実例で、セキュリティ問題の特定や是正方法を学んでください。

GitLab がビルドプロセスのために [**再現可能なビルド**](/handbook/security/product-security/security-platforms-architecture/application-security/reproducible-builds/) をどのように実装しているかを学んでください。

## 成功メトリクス

### 戦略的メトリクス

PSIRT は FY26 に運用ビジネスヘルスメトリクスを構築中です。これらの多くについて、メトリクスの計装とレポートメカニズムはまだ準備中です。チームが成熟するにつれて、これらのメトリクスは進化し、このページで共有されます。

### 現在のロール

PSIRT は Security エンジニアと Security アナリストで構成されています。

Security エンジニアは以下を担当します:

- セキュリティ脆弱性の技術的アセスメント
- セキュリティ脆弱性の再現、トリアージ、対応におけるエンジニアリングチームのサポート
- 脆弱性検証とパッチレビュー
- チェックリストタスクの準備とツール自動化を通じたセキュリティリリースのサポート。
- パッチが利用可能になる前のセキュリティ緩和と一時的な回避策の開発と検証
- 完全な是正を確保しセキュリティバイパスを防ぐための、類似脆弱性のバリアントハンティングとプロアクティブな検索
- セキュリティリリース、脆弱性アセスメントワークフロー、運用プロセスの自動化の開発と拡張

Security アナリストは以下を担当します:

- 研究者管理、コミュニケーション、リリースコミュニケーションを含む PSIRT 所有の脆弱性管理
- エンジニアリングおよびお客様脆弱性コミュニケーションとの調整によるインシデント管理のサポート
- チェックリストタスクの準備、コミュニケーション、プロセス強化を通じたセキュリティリリースのサポート
- ランブック、ワークフロー、メトリクスのオペレーション管理
- PSIRT 運用ヘルス、脆弱性トレンド、チームパフォーマンスのメトリクストラッキングとレポート

## コンテンツのレビューと更新

このページは、会社および部門の優先事項、GitLab セキュリティ製品ロードマップ、関連するビジネスおよび運用上の変更との整合性を確保するため、四半期ごとにレビューされます。ビジネスオペレーションが進化するにつれて、より頻繁に更新が行われる場合もあります。
