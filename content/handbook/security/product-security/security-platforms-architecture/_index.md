---
title: "Security Platforms & Architecture"
description: "Security Platforms & Architecture チームチャーター"
upstream_path: /handbook/security/product-security/security-platforms-architecture/
upstream_sha: 1e195b58b9f249ff10bd0e705106c320fee86141
translated_at: "2026-05-15T12:00:00Z"
translator: claude
stale: false
lastmod: "2026-02-10T14:02:31-05:00"
---

最終更新: 2026年2月6日

## ミッションステートメント

Security Platforms and Architecture (SPA) サブ部門は、製品ライフサイクル全体を通してセキュリティリスクを特定、優先順位付け、軽減することにより、GitLab のプラットフォームと製品を保護します。[Security Architecture](/handbook/security/product-security/security-platforms-architecture/security-architecture/)、[Application Security](/handbook/security/product-security/security-platforms-architecture/application-security/)、[Security Research](/handbook/security/product-security/security-platforms-architecture/security-research/) で構成され、戦略的なセキュリティアーキテクチャと運用上のアプリケーションセキュリティを組み合わせて、GitLab が市場で最もセキュアなソフトウェアファクトリープラットフォームとなることを可能にします。私たちは GitLab のエンジニアと製品チームと協力し、設計と開発の段階で脆弱性を予測し防止するとともに、GitLab の顧客が信頼できる高品質なソフトウェアの提供を保証します。私たちは体系的な製品セキュリティリスクと運用上のアプリケーションセキュリティに焦点を当て、エンジニアリングの開発速度を維持しながら、それらを軽減するためにクロスファンクショナルに作業します。

## SPA チームのガイディングプリンシプル

SPA のすべてのメンバーは、私たちの [ガイディングプリンシプル](/handbook/security/product-security/security-platforms-architecture/guiding-principles/) に従って活動することが期待されます。これらの原則は、私たちがどのように意思決定し、業務をオーナーシップを持って進め、コミュニケーションを取り、互いを支え、改善していくかをカバーしています。

## バリュープロポジション

私たちは、GitLab と顧客が高い速度で品質の高い、セキュアなソフトウェアを作成できるよう、ソフトウェア開発ライフサイクル全体を通してセキュリティの専門知識と運用サポートを提供します。私たちのチームは、セキュリティの専門知識を公開および内部のソートリーダーシップ貢献に翻訳し、GitLab をセキュアなソフトウェア開発のリーダーであり信頼されるイネーブラーとして確立します。

## スコープと責任

### 主要な所有領域

| **領域** | **説明** | **主担当チーム** |
| ------- | ------- | ------- |
| **セキュリティレビュー** | フィーチャーレベルのセキュリティレビュー、リリース前の最終セキュリティレビュー、継続的な設計ガイダンス | Application Security |
| **セキュリティアーキテクチャレビュー** | ハイレベルなアーキテクチャレビュー、AI、Sec Section、または Core DevOps の機能リーダーシップから依頼される大規模/複雑/戦略的なイニシアチブの設計レビュー | Security Architecture |
| **Product Security Risk Register** | リスクの特定、評価、優先順位付け、組織横断的な修正戦略 | Security Architecture |
| **Security Research** | GitLab エコシステムにおける未知のセキュリティリスクと脆弱性のプロアクティブな特定 | Security Research |
| **[Security Interlock](/handbook/security/product-security/security-platforms-architecture/security-interlock/)** | 部門横断的な Customer Zero の取り組みとドッグフーディングのコーディネーション | Security Architecture |
| **セキュリティビジョンと標準** | チームが健全なセキュリティ判断を下せるよう、セキュアなソフトウェア配信に対する明確な期待値を設けるためのセキュリティビジョンと標準の策定とコミュニケーション。 | Security Architecture および AppSec |
| **Product Security メトリクス** | メトリクス収集システムの設計と実装 | Security Architecture |
| **製品への直接的貢献** | セキュリティ機能開発、POC、GitLab 製品へのエンジニアリング貢献 | すべての SPA チーム |
| **ソートリーダーシップ** | GitLab をセキュアなソフトウェア開発のリーダーであり信頼されるイネーブラーとして確立するためのブログ投稿、カンファレンストーク、その他の公開および内部のソートリーダーシップ貢献 | すべての SPA チーム |

### インターフェイスポイント

- **Product Security Risk Register:**
  - すべての Product Security チームは、PSRR のリスクの作成、更新、対応に貢献します。
  - 私たちは、より広範な [リスクレジスター](/handbook/security/security-assurance/security-risk/storm-program/) を所有および運用する [Security Risk Team](/handbook/security/security-assurance/security-risk/) と協力します。
- **マルチレイヤーセキュリティレビュー**:
  - イニシアチブがアプリケーション層とインフラストラクチャ層の両方の入力を必要とする場合、私たちは InfraSec と提携します
- **Security Interlock**:
  - すべての Product Security チームは、GitLab 機能の実世界テストに貢献し、製品のユーザビリティ、機能性、有効性を改善するためのフィードバックを提供します。
  - SPA は、構造化されたフィードバックを集約してセキュリティ製品マネージャーとエンジニアリングチームに提供し、実際のセキュリティチームのワークフローと要件に対応する機能拡張を推進します。
- **セキュリティチームエスカレーション:** 以下を含む領域でのサポート要求に対応します -
  - 脆弱性影響分析と POC 開発 [リクエスター: Vuln Management]
  - GitLab で使用されている高リスクシステムの [技術的セキュリティバリデーション](/handbook/security/security-assurance/technical-security-validation/) [リクエスター: Security Risk]
- **製品/エンジニアリングコラボレーション:**
  - SPA は、外部のエンタープライズグレード顧客のニーズに対するカナリアであることを認識し、GitLab のセキュリティおよびコンプライアンスロードマップに影響を与えます。
  - コンプライアンスフレームワークの実装と運用: SPA は Security Compliance チームおよびエンジニアリングチームと提携し、顧客が要求するセキュリティフレームワークの認証を取得・維持するためのロードマップに取り組みます。
  - Field Security: SPA は Field Security をサポートおよび活用して、セキュリティガイダンスを伝え、顧客の信頼を構築します。

### 範囲外

- インフラストラクチャ/クラウド/データセキュリティに関連するセキュリティアーキテクチャ [チーム: [InfraSec](/handbook/security/product-security/infrastructure-security/)]
- 定例のベンダーサードパーティリスクアセスメント [チーム: [Security Risk](/handbook/security/security-assurance/security-risk/)]
- 脆弱性管理オペレーション [チーム: [Vulnerability Management](/handbook/security/product-security/vulnerability-management/) および [Security Compliance](/handbook/security/security-assurance/security-compliance/)]
- インシデント対応管理 [チーム: [SecOps](/handbook/security/security-operations/) および /handbook/security/product-security/psirt/]

## コミュニケーションチャンネル

SPA チームとの定例コミュニケーションは、以下を通じて行われます。

- Slack: #security_help または #security_discuss を使用し、`@security-platforms-architecture` または `@appsec-team` をタグ付けする
- Issue/MR ディスカッションのための GitLab タグ: `@gitlab-com/gl-security/security-research`、`@gitlab-com/gl-security/product-security/security-architecture`、または `@gitlab-com/gl-security/product-security/appsec`

緊急時には、GitLab チームメンバーは任意のチャンネルでコマンド `/security` を使用して Security Incident Response Team をページングする必要があります。

## FY27 主要フォーカス領域

- Security Architecture、Application Security、Security Research を 1 つのチームに統合する
- 新機能のセキュリティレビューについて運用面の卓越性を提供する
- セキュリティカバレッジとサポートを最大化し、リスクを軽減するためのスケーリング投資を実施する
- 主要なリスク領域: AI セキュリティ、ソフトウェアサプライチェーンセキュリティ、AuthN/Z

## FY27 メトリクス

SPA は多くのレベルでメトリクスを維持しています。以下は SPA レベルの戦略的および運用的メトリクスで、FY27 で構築・報告する予定のものです。これらのメトリクスは、主要リスク指標、プロジェクトレベルのメトリクス、サブチーム固有のメトリクスに _加えて_ のものです。これらの多くについて、メトリクス計装と報告メカニズムは今後策定予定です。

注: これらのテーブルを完全に表示するには横スクロールが必要です。

### 戦略的メトリクス

以下は、E-Group を対象に、SPA チームのチャーター達成における成功を測定するために FY27 で追跡を開始する主要メトリクスです。これらは、最終的な成功は個々の活動にあるのではなく、チームを越えて協力し、顧客に直接的な利益をもたらす結果を推進することにあるという現実を反映しています。

| **FY27 主要メトリック** | **なぜ重要か** | **計算方法** | **目標閾値** | **測定頻度** | **報告メカニズム** | **追加メモ** |
| ------ | ------ | ------ | ------ | ------ | ------ | ------ |
| **セキュリティレビューカバレッジ** | セキュリティレビューを必要とするフィーチャーが適切なカバレッジを得ていることを確認することで、私たちのチームの主要バリューストリームの提供を検証する | TBD | 90% 以上 | 四半期ごと | 四半期末リードアウト Issue | |
| **セキュリティ検出取り込み率** | 私たちのチームの作業 (Research からの脆弱性、セキュリティレビューからの検出など) が優先順位付けされ、製品に取り込まれているかを測定する | TBD | 75% | 四半期ごと | 四半期末リードアウト Issue | |
| **Customer Zero フィードバック提供** | このメトリクスは、製品チームと提携して、新しいセキュリティ機能が顧客に届く前に実世界の要件を満たして価値を提供することを検証する私たちの効果性を追跡する | 完了した C0 Issue とその結果の手動カウント | ベースライン要 | マイルストーン終了時 | [FY26 Security Interlock Epic コメント](https://gitlab.com/groups/gitlab-com/gl-security/-/epics/350) (内部) | このメトリクスは Product と Engineering からの提出に依存します |
| **ソートリーダーシップ貢献** | このメトリクスは、社内実践と業界の両方に影響を与える、GitLab をセキュリティソートリーダーとして位置付けるための活発な取り組みを追跡する | 公開ブログ投稿、カンファレンストーク、インタビュー、その他の公開作品の数 | 2 件以上/四半期 | 四半期ごと | 四半期末リードアウト Issue | |
| **セキュリティ機能への直接貢献** | このメトリクスは、セキュリティポスチャーを強化し、プラットフォームリスクを軽減し、GitLab とその顧客がセキュアなソフトウェアを作成できるようにするセキュリティ機能と改善の私たちのチームの提供を追跡する | [SPA によってマージされた "ProdSec-SPA-Contribution" ラベル付き MR の数](https://gitlab.com/groups/gitlab-org/-/merge_requests/?sort=created_date&state=merged&label_name%5B%5D=ProdSec-SPA-Contribution) | ベースライン要 | 四半期ごと | 四半期末リードアウト Issue | これは MR のウェイト/複雑さを考慮するために成熟する必要がある可能性があります。追跡開始後、時間をかけてイテレーションします。 |

### 運用メトリクス

| **FY27 主要メトリック** | **なぜ重要か** | **計算方法** | **目標閾値** | **測定頻度** | **報告メカニズム** | **追加メモ** |
| ------ | ------ | ------ | ------ | ------ | ------ | ------ |
| **PSRR 運用メトリクス:** | これらのメトリクスは、Product Security Risk Register の内容、ホットスポット、優先度の包括的な可視性を提供する | PSRR ラベル付き Issue カウント | 四半期ごとに機能リーダーあたり 1 リスク優先順位付け | 四半期ごと | [内部ダッシュボード](https://10az.online.tableau.com/#/site/gitlab/views/ProductSecurityRiskRegister/Dashboard?:iid=1) | |
| **Security Research による特定された脆弱性** | このメトリクスは、Security Research チームが GitLab や顧客に影響を与える前に脆弱性をプロアクティブに特定する効果性を追跡する | Security Research が時間の経過とともに特定した bug::vulnerability の数を、深刻度で重み付けしたもの ([サンプル GLQL](https://gitlab.com/gitlab-com/gl-security/security-research/sec-research/-/issues/250#note_2245509822)) | ベースライン要 | 四半期ごと | 四半期末リードアウト Issue | |

## レビューと更新

このチャーターは、会社および部門の優先順位、GitLab Security 製品ロードマップ、StORM および Product Security Risk Register の重大なリスクとの整合性を確保するため、四半期ごとに更新されます。

次回の予定レビュー: 2026年5月1日
