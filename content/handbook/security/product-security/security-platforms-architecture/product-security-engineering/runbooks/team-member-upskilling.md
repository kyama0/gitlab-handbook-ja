---
title: "チームメンバーのスキルアップ"
upstream_path: /handbook/security/product-security/security-platforms-architecture/product-security-engineering/runbooks/team-member-upskilling/
upstream_sha: c9aef34f52e9f619472aeed4981f6aaec80de2b3
translated_at: "2026-06-26T20:39:13+09:00"
translator: codex
stale: false
lastmod: "2026-06-26T14:40:46+12:00"
---

## チームメンバースキルアップRunbook

このRunbookは、新規または既存のProduct Security Engineer、あるいはプロダクトセキュリティに関するスキルと知識を高めるための実績作りを目指す方々向けのリソース集です。このRunbookは、継続的な学習と専門能力開発のためのガイダンスとリソースを提供することを目的としています。

### 1. コアコンピテンシー

チームメンバーは、以下のコアコンピテンシーで習熟することを目指してください。

- Webアプリケーションセキュリティ
- セキュアコーディングプラクティス
- 脅威モデリング
- リスクアセスメントと管理
- 脆弱性管理やプロダクトセキュリティインシデント対応など、内部セキュリティチームの機能とその目的

チームメンバーはまた、以下の領域について「良好な」知識を持つ必要があります。必要が生じた場合に、さらに学ぶ方法を知っているのに十分なレベルです。

- クラウド/ネットワークセキュリティ
- 暗号

### 2. 学習パス

これらの学習パスは、Product Security Engineeringの新規チームメンバーがスピードアップして有意義な貢献ができるように設計されています。クイックウィンと長期的なスキル開発のバランスを提供し、私たちのミッションに不可欠なコアコンピテンシーに焦点を当てています。あなたの興味やチームの現在の優先事項に合わせて、1つまたは複数のパスを選択してください。

#### 1. 「Paved Road & Defense-in-Depth」学習パス

必須:

- [ ] 過去のGitLab脆弱性を分析する(リリース投稿、または[内部](https://internal.gitlab.com/handbook/security/product_security/application_security/reproducible-vulnerabilities/)もしくは[公開Reproducible Vulnerabilitiesページ](/handbook/security/product-security/security-platforms-architecture/application-security/reproducible-vulnerabilities/)から)
- [ ] このクラスのバグを開発者が回避しやすくするソリューション(「paved road」)、および/またはバグのクラスを防止または軽減するソリューション(defense-in-depth)を設計する
- [ ] あなたのソリューション設計を[Issue](https://gitlab.com/gitlab-com/gl-security/product-security/product-security-engineering/product-security-engineering-team/-/issues/new)(および/またはエピック&子アイテム)にドキュメント化する
  - チームメイトにソリューションをピアレビューしてもらう
  - `~workflow::ready for development` 状態になるまで反復的に[改良する](/handbook/security/product-security/security-platforms-architecture/product-security-engineering/detailed-workflow/#refinement-and-planning)

推奨:

- [ ] [マイルストーンに追加して](/handbook/security/product-security/security-platforms-architecture/product-security-engineering/detailed-workflow/#milestone-planning)ソリューションを実装する
- [ ] ローカルバージョンのGitLabで過去の脆弱性を再現する
- [ ] あなたが選んだ脆弱性を含む[脅威モデルを作成する](/handbook/security/product-security/security-platforms-architecture/application-security/threat-modeling/)
- [ ] あなたが設計したソリューションを実際のパッチや多層防御策と比較する

#### 2. 「Secure GitLab with GitLab」学習パス

必須:

- [ ] 私たちのIssueボードから既存のIssueを特定するか、Product SecurityチームのいずれかがGitLab(製品)を使用してGitLab(組織)をよりよくセキュアにするのに役立つ ~ProdSecEngCandidate Issueを選択する
- [ ] あなたのソリューション設計を[Issue](https://gitlab.com/gitlab-com/gl-security/product-security/product-security-engineering/product-security-engineering-team/-/issues/new)(および/またはエピック&子アイテム)にドキュメント化する
  - チームメイトにソリューションをピアレビューしてもらう
  - `~workflow::ready for development` 状態になるまで反復的に[改良する](/handbook/security/product-security/security-platforms-architecture/product-security-engineering/detailed-workflow/#refinement-and-planning)

推奨:

- [ ] [マイルストーンに追加して](/handbook/security/product-security/security-platforms-architecture/product-security-engineering/detailed-workflow/#milestone-planning)ソリューションを実装する
- [ ] 実装後のレビューを行い、改善を提案する
- [ ] Application Securityチームと連携して、その他の影響度の高い自動化機会を特定する

#### 3. 「セキュリティスキルアップとコラボレーション」学習パス

必須:

- [ ] 以下を確認し、より詳しく学びたい領域を特定する:
  - [ ] GitLabの[Secure Code Guidelines](https://docs.gitlab.com/ee/development/secure_coding_guidelines.html)
  - [ ] GitLabの[Security Risk Quarterly](/handbook/security/security-assurance/security-risk/storm-program/#risk-tracking-and-reporting)
- [ ] 学習の取り組みを追跡するIssueまたはエピックを作成する。以下を含めてください:
  - [ ] トレーニングの種類/URL
  - [ ] 目標、推定工数、マイルストーン
  - [ ] 予算申請が必要な場合(認定資格、オンラインコースなど)はG&D IssueへのリンクをG&D

推奨:

- [ ] 役立ったリソースやプロセスでこのページを更新する!

#### 4. 「内部セキュリティチーム機能の理解」学習パス

ProdSecEngは、他のProduct Securityチーム向けにツール、自動化、paved roadを構築します。優れたエンジニアリング判断(何を構築するか、どのようにスコープを定めるか、どのトレードオフが重要か)を行うためには、これらのチームが日々何を行っているか、どのようなプロセスに従い、なぜそうするのかを理解する必要があります。

このパスの目的は、これらのチームの1つがProdSecEngにツールリクエストを持ってきたときに、適切な明確化質問ができるだけの流暢さを身につけることです。

**必須:**

- [ ] [Product Securityの概要](/handbook/security/product-security/)を読み、部門内のチームがどのように連携しているかを確認する
- [ ] [Product Security Engineering](/handbook/security/product-security/security-platforms-architecture/product-security-engineering/)チームチャーターを読み、ProdSecEng のミッション、スコープ、運用モデルを理解する
- [ ] 以下の各チームページを流し読みし、どのような種類の作業を行っているかをメモする:
  - [ ] [Application Security (AppSec)](/handbook/security/product-security/security-platforms-architecture/application-security/) - コードレビュー、機能の脅威モデリング、HackerOne経由で報告された脆弱性のトリアージを行う
  - [ ] [PSIRT](/handbook/security/product-security/psirt/) - 脆弱性報告の処理、修正の調整、セキュリティリリースプロセスの実行を行う
  - [ ] [脆弱性管理](/handbook/security/product-security/vulnerability-management/) - GitLabの製品とインフラ全体の脆弱性をクローズまで追跡する
  - [ ] [Security Platforms & Architecture (SPA)](/handbook/security/product-security/security-platforms-architecture/) - ProdSecEng自身のサブ部門
  - [ ] [Infrastructure Security](/handbook/security/product-security/infrastructure-security/) - GitLabのプロダクションインフラをセキュアにする
  - [ ] [Data Security](/handbook/security/product-security/data-security/) - 顧客および企業のデータを保護する
  - [ ] [Supply Chain Risk Management](/handbook/security/product-security/supply-chain-risk-management/) - サードパーティ依存関係とソフトウェアサプライチェーンからのリスクに対処する
- [ ] 上記の各チームについて、その作業をサポートする可能性のあるProdSecEng管理ツールを特定する([内部ハンドブックのツールインベントリ](https://internal.gitlab.com/handbook/security/product_security/product_security_engineering/)に各ツールのステークホルダーが記載されている)
- [ ] [ProdSec-to-Productワークフロー](/handbook/security/product-security/security-platforms-architecture/security-interlock/prodsec-to-product-workflow/)を読み、ProdSecEngがこれらのチームからのリクエストをどのように製品機能に変えているかを確認する

**推奨:**

- [ ] ProdSecEngが構築している対象チームの1つの会議(例: AppSecトリアージ、PSIRTシンク)に参加して、彼らが実際にどのようにツールを使用しているかを確認する
- [ ] 1つのProdSecEng管理ツールを選び、エンドツーエンドでトレースする: プロジェクトのREADMEを読み、最近のIssueを確認し、どのステークホルダーチームがそれらを起票したかを確認する
