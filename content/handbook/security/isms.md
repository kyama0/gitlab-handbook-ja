---
title: "情報セキュリティおよび人工知能マネジメントシステム"
controlled_document: true
tags:
  - security_policy
  - security_policy_caplscsi
upstream_path: /handbook/security/isms/
upstream_sha: 1e195b58b9f249ff10bd0e705106c320fee86141
translated_at: "2026-05-09T12:00:00Z"
translator: claude
stale: false
---

{{< label name="Visibility: Audit" color="#E24329" >}}

### 目的

GitLab は、情報セキュリティマネジメントシステム (ISMS) として ISO/IEC 27001:2022 標準を、人工知能マネジメントシステム (AIMS) として ISO/IEC 42001:2023 を採用しており、私たちの情報セキュリティポリシー、標準、手順の堅牢性と、コントロール環境の強さについて、GitLab チームメンバー、顧客、コミュニティメンバーに高い水準の保証を提供しています。このドキュメントの目的は、GitLab の情報セキュリティおよび人工知能マネジメントシステムの境界と目標を定義することです。

### 内部および外部の課題

GitLab は、その目的に関連し、情報セキュリティマネジメントシステム (ISMS) および人工知能マネジメントシステム (AIMS) の意図された成果を達成する能力に影響しうる、次の外部および内部課題を特定しました。

### 外部課題

- 進化するサイバーセキュリティ脅威の状況と AI 固有のセキュリティリスク
- 規制要件およびコンプライアンス義務（SOC 2、ISO 標準、AI ガバナンスフレームワーク）
- セキュリティおよび責任ある AI 慣行に対する顧客の期待
- 情報セキュリティおよび AI マネジメントの業界標準とベストプラクティス
- AI と機械学習における技術的発展
- サプライチェーンの依存関係とサードパーティ AI サービスプロバイダ
- 市場の競争圧力とビジネス環境の変化
- AI の禁止された使用を含む、適用される法的要件
- AI システムの開発と使用における法的要件の解釈または執行に影響を与える、規制当局からの政策、ガイドライン、決定
- AI システムの意図された目的と使用に関連するインセンティブまたは結果
- AI の開発と使用に関する文化、伝統、価値観、規範、倫理
- AI システムを使った新しい製品とサービスの競争状況とトレンド

### 内部課題

- GitLab のオールリモート勤務モデルと分散型労働力
- クラウドファーストインフラストラクチャと SaaS サービス提供モデル
- GitLab の製品提供全体にわたる AI 機能の統合
- 透明性とハンドブックファーストアプローチの組織文化
- セキュリティおよび AI ガバナンスイニシアチブのためのリソース配分
- AI およびセキュリティ管理のためのスキルおよびコンピテンシー要件
- 事業継続および運用上のレジリエンス要件
- 組織のコンテキスト、ガバナンス、目標、ポリシー、手順
- 契約上の義務
- 開発または使用される AI システムの意図された目的

## スコープ

GitLab の ISMS のスコープは、GitLab SaaS サブスクリプションを直接サポートする本番リソース（GitLab.com および GitLab Dedicated）に限定されます。

GitLab の AIMS のスコープは、AI サービス GitLab Duo およびそのコンポーネントの AI プロバイダーとしての GitLab の役割をカバーします。

### 資産

マネジメントシステムのスコープに含まれる資産には、顧客データ、ソフトウェア、人、クラウドベースソリューションをホストおよび運用するための内部情報資産が含まれます。

責任分担の対象となる外部資産には、クラウドサービスプロバイダーと人工知能プロバイダが含まれます。責任分担の検討範囲には、クラウドコンピューティング環境内で維持・保管される資産、インフラ資産管理、マルチテナント仮想化環境上で動作するプロセス、クラウドサービス管理、AI モデルの開発と強化が含まれます。

### スコープ除外

オールリモート企業として、マネジメントシステムのスコープには物理的なオフィス所在地はありません。物理的および環境的コントロールを含む契約済みのサードパーティデータセンターサービスはスコープ外であり、サードパーティサービスプロバイダによって管理されます。

### 所在地

GitLab の本社の郵便住所はスコープ内であり、すべてのサブ組織をカバーします。なお、これは郵便住所のみであり、訪問できる物理的な場所はありません。

- GitLab Inc, 268 Bush Street #350, San Francisco, CA 94104, United States of America

### 組織単位

マネジメントシステムのスコープに含まれるビジネス機能には、次のものが含まれます。

- Security - Chief Information Security Officer; Security Assurance; Product Security; Security Operations; Threat Management Security チーム。Division 構造は[こちら](/handbook/security/#division-structure)で定義されています
- Engineering - VP of Development
- Engineering - VP of Infrastructure and Quality
- Finance - VP of Information Technology
- People Operations - VP of Total Rewards and People Operations, Technology and Analytics
- Legal - VP of Legal Operations; Senior Director, Contracts and Legal Operations; Director of Legal, Privacy and Product
- Data Science - GitLab 製品で ML および AI 機能を活用し、応用 AI 機能を提供し、アプリケーション内の不正利用を防止することに責任を持つ。

### 利害関係者

このマネジメントシステムは GitLab のセキュリティ運用を統治します。利害関係者には次が含まれます。

- 顧客
  - 自分たちの情報を保護するために、GitLab がこのマネジメントシステムに従って運用することを要求します
- 株主／事業所有者
  - 持続可能なビジネスを維持するために、GitLab が安全な方法で運用することを要求します
- チームメンバー
  - GitLab はチームメンバーに、このマネジメントシステムによって定義された安全な方法で運用することを求めます。サービスを維持し、継続的な雇用を提供するために、GitLab が安全な方法で運用することを要求します

## マネジメントシステムの役割と責任

| 役割 | 責任 |
| --- | --- |
| ISMS & AIMS Council | マネジメントシステムの監督、実装、継続的改善 |
| Chief Information Security Officer | マネジメントシステムのエグゼクティブスポンサー。情報セキュリティを調整、推進、改善する |
| Security Management (Code Owners) | マネジメントシステムの所有者として、マネジメントシステムの重大な変更と例外を承認する責任を持つ |
| Security Assurance | トップマネジメントへの情報セキュリティマネジメントシステムのパフォーマンスの報告、セキュリティリスク評価と対応、継続的なモニタリングと監査、顧客アシュアランス活動、セキュリティ意識向上プログラム、セキュリティガバナンス活動 |
| Product Security | サードパーティペネトレーションとバグバウンティプログラムの管理、ソフトウェア開発ライフサイクルへの input 提供、アプリケーション脆弱性プログラムの管理、セキュリティチャンピオンプログラムの運営、アプリケーションセキュリティツールの維持、セキュリティリスクの特定、インフラ脆弱性プログラム、インフラセキュリティツールの維持、セキュリティリスクの特定 |
| Security Operations | セキュリティインシデントのモニタリング、管理、報告、技術ツールを通じたセキュリティポリシーへの準拠の監視、セキュリティリスクの特定、SaaS サブスクリプションの不正利用の監視と対応 |
| Corporate Security | アイデンティティとアクセス管理、ロールベースアクセスコントロール、管理者アクセスの管理 |
| Duo Product Management | AI システムのパフォーマンスのモニタリング、AI システムの維持、AI リスクの特定、AI モデルプロバイダのパフォーマンス評価 |
| Legal | AI ガバナンスを担当、サードパーティ契約、プライバシーレビュー |
| その他のマネジメントシステムビジネスユニット | 情報セキュリティ要件の実装、運用、管理。情報セキュリティ調査結果の修復。Security 部門との協力 |
| すべての GitLab チームメンバー | 情報セキュリティに関する責任の認識、情報セキュリティ管理対象ドキュメントの遵守、疑わしいセキュリティ違反の報告 |

## 実装マニュアル手順

### リーダーシップ

GitLab は情報セキュリティにコミットしています。ISMS の一般的な目標は、機密性、完全性、可用性を維持しつつ、新規および既存のセキュリティおよびプライバシーリスクから GitLab の機密情報および資産を保護することです。個別のセキュリティコントロールの目標は、スコープ内のセキュリティ標準および規制（ISO 27001:2022、ISO 42001:2023、SOC 2 Type 2）から継承されます。

Council は Security と Privacy (Legal) のリーダーシップで構成され、最低でも年に 1 回会合を持ち、マネジメントシステムの状態について議論し、すべてのマネジメントシステムの目標の達成度を測定するべきです。次のトピックがカバーされます。

- メンバーシップと目標のレビュー
- ISMS & AIMS 内部監査結果
- 重大な管理対象ドキュメントの更新
- 年次セキュリティリスク評価の結果
- リスクヒートマップへの変更（トレンド）
- 継続的コントロール監視からのアウトプット
- 観察事項 (CA/PA)
- マネジメントシステムに影響を与えうる変更
- フィードバックと改善
- マネジメントシステムのインプットとアウトプット

### 計画

GitLab は、GitLab の組織全体の目標をサポートするために、サイバーセキュリティ、IT、プライバシー運用リスクを特定、ランク付け、追跡、対応するための正式な[セキュリティ運用リスク管理 ("StORM") プログラム](/handbook/security/security-assurance/security-risk/storm-program/) を実装しています。ISMS および AIMS の意図された成果を達成する GitLab の能力に影響を与えうる内部および外部の課題は、StORM または[観察管理プログラム](/handbook/security/security-assurance/observation-management-procedure.md)の一部として特定されます。スコープ内の情報セキュリティコントロールを選択するプロセスは、Security Compliance チームによって実行され、サードパーティ GRC アプリケーションの技術的機能を活用し、Security Risk チームによって監督されます。実装ステータスは GitLab の GRC アプリケーションおよび Statement of Applicability にキャプチャされます。

毎年、CEO は会社の年間目標を確立し、Security および AI チームを含むすべての Division にカスケードされます。これらの目標は、セキュリティおよび AI マネジメントの優先事項が GitLab の全体的な戦略的方向性と整合し続けることを確実にし、ISMS および AIMS 両方の意図された成果をサポートする具体的なアクションを定義するためのフレームワークを提供します。

### サポート

GitLab は、新入社員セキュリティ意識向上トレーニング、グローバル年次セキュリティ意識向上トレーニング、四半期ごとのターゲットフィッシング演習を含む正式なセキュリティ意識向上トレーニングプログラムを実装しています。これらのトレーニングはサードパーティポータルを通じて管理され、提示されたセキュリティトピックの理解を試すクイズが含まれます。

GitLab における管理対象ドキュメントの開発と維持に階層的アプローチで一貫性を確保するため、正式な[管理対象ドキュメント手順](/handbook/security/controlled-document-procedure/)が整備されています。すべての管理対象ドキュメントは、別段の記載がない限り、[GitLab ハンドブック](/)を通じて、すべての GitLab チームメンバーおよび一般に公開されています。管理対象ドキュメントの更新は、ワークフロー全体ですべての GitLab チームメンバーがアクセスできる[GitLab マージリクエスト](https://docs.gitlab.com/ee/user/project/merge_requests/)を通じて管理されます。管理対象ドキュメントの年次レビューは、所有者または指定された代表者によって必要とされます。

GitLab は、すべてのチームメンバーに対するレベルに基づいて役割と責任を定義する[職務記述書](/handbook/hiring/job-description-library/)を公開しています。この情報は公開されており、チームメンバーの採用と業績評価の基盤となります。最低でも年に 1 回、GitLab マネジメントは [タレントアセスメント](/handbook/people-group/talent-assessment/)をチームメンバーと実施し、Job Family へのコンピテンシーを確認します。

### コミュニケーション

ISO 27001:2022 第 7.4 条および ISO 42001:2023 第 7.4 条に準拠して、GitLab は ISMS と AIMS の両方に対する包括的なコミュニケーション手順を確立しました。

**ISMS コミュニケーション:**

- **何を伝達するか:** セキュリティポリシー、手順、インシデント、リスク評価、コントロールの有効性、コンプライアンスステータス、セキュリティ意識向上資料
- **いつ伝達するか:** オンボーディング時、四半期更新時、インシデント対応時、年次レビュー時、ポリシー更新時
- **誰と伝達するか:** すべてのチームメンバー、リーダーシップ、（適切な場合）顧客、監査人や規制当局を含む外部利害関係者
- **どのように伝達するか:** GitLab ハンドブック、Slack チャンネル、メール通知、トレーニングポータル、四半期 all-hands ミーティング、正式な報告メカニズムを通じて

**AIMS コミュニケーション:**

- **何を伝達するか:** AI ガバナンスポリシー、AI リスク評価、AI システムパフォーマンスメトリクス、倫理的 AI ガイドライン、AI インシデントレポート、AI コンプライアンスステータス
- **いつ伝達するか:** AI システムデプロイ時、月次 AI ガバナンスレビュー、インシデント対応時、四半期事業レビュー、年次 AIMS 評価
- **誰と伝達するか:** AI 開発チーム、プロダクトマネジメント、法務およびコンプライアンスチーム、エグゼクティブリーダーシップ、AI 機能を使う顧客、関連する規制機関
- **どのように伝達するか:** 専用 AI ガバナンスチャンネル、製品ドキュメント、顧客コミュニケーション、エグゼクティブダッシュボード、正式な AI ガバナンス報告を通じて

### 運用

[GitLab チームハンドブック](/) は、私たちが会社をどのように運営しているかの中央リポジトリです。会社のポリシー、標準、手順の開発を含めて、GitLab のすべては handbook first です。マネジメントシステムをサポートする主要な管理対象ドキュメントには次のものが含まれます。

- [データ分類標準](/handbook/security/policies_and_standards/data-classification-standard/)
- [社内利用許諾ポリシー](/handbook/people-group/acceptable-use-policy/)
- [セキュリティポリシー](/handbook/security/security-and-technology-policies/security-and-technology-policies-management/)
- [GitLab ビジネス行動および倫理規範](https://ir.gitlab.com/governance/governance-documents/default.aspx)
- [インフラストラクチャ変更管理手順](/handbook/engineering/infrastructure-platforms/change-management/)
- [セキュリティ運用リスク管理 (StORM) プログラムおよび手順](/handbook/security/security-assurance/security-risk/storm-program/)
- [GitLab 製品開発のための AI 倫理原則](/handbook/legal/ethics-compliance-program/ai-ethics-principles.md)
- [汎用 AI ツール利用ガイドライン](https://internal.gitlab.com/handbook/legal-and-corporate-affairs/ai-tool-usage-guidelines/)
- [承認済み AI ツール](https://internal.gitlab.com/handbook/company/ai-at-gitlab/#approved-ai-tools)

GitLab には、GitLab のセキュリティ目標が思慮深く計画、実装、監視されるよう、[GitLab 共通コントロールフレームワーク](/handbook/security/security-assurance/security-compliance/sec-controls/) の設計と有効性を監視する責任を持つ専任の Security Compliance チームがあります。

セキュリティプロセスをアウトソーシングまたは補完するためにサードパーティサービスを使う場合、オンボーディング前に[サードパーティリスク評価](/handbook/security/security-assurance/security-risk/third-party-risk-management/)が実行されます。重要なベンダーは、オンボーディング後にも年に 1 回、または契約更新時のいずれか早い方でレビューされます。

### パフォーマンス

GitLab は、さまざまな継続的モニタリング手段を通じて、セキュリティコントロールおよび AI システムを監視、測定、改善します。

**ISMS のモニタリングと測定:**

- [継続的コントロールテスト／年次マネジメントシステム内部コンプライアンス監査](/handbook/security/security-assurance/security-compliance/security-control-lifecycle/)
- [外部監査（SOC 2 Type 2、TISAX、顧客セキュリティアセスメント）](security-assurance/security-compliance/certifications/)
- [年次セキュリティ運用リスク評価](/handbook/security/security-assurance/security-risk/storm-program/)
- [年次サードパーティペネトレーションテスト](/handbook/security/security-and-technology-policies/penetration-testing-policy/)
- [継続的なサードパーティスコアカード監視（BitSight）](/handbook/security/security-assurance/field-security/independent_security_assurance/#third-party-security-ratings)
- [インフラストラクチャ脆弱性スキャン](product-security/vulnerability-management/)
- [アプリケーション脆弱性スキャン](product-security/security-platforms-architecture/application-security/vulnerability-management/)
- [HackerOne バグバウンティプログラム](/handbook/security/product-security/psirt/runbooks/hackerone-process/)
- [監査ログ監視](/handbook/security/security-and-technology-policies/audit-logging-policy/)
- ISMS & AIMS Council（年次マネジメントレビュー）
- セキュリティと AI ドメインにわたる統合リスク管理
- 部門横断的なインシデント対応手順
- エグゼクティブリーダーシップおよび外部利害関係者への統一報告

### 改善

GitLab は、ISO 27001:2022 と ISO 42001:2023 の両要件に従って、マネジメントシステムの適合性、妥当性、有効性を継続的に改善することにコミットしています。

GitLab の Tier 2 セキュリティ運用リスクプログラムの一部として、StORM プログラムを通じて特定およびトリアージされた各リスクは、[リスク対応決定](/handbook/security/security-assurance/security-risk/storm-program/#risk-response)を受けることが必要です。これは、所有するリスクごとに各リスク所有者と議論される活動です。さらに、GitLab は[観察管理手順](/handbook/security/security-assurance/observation-management-procedure/)に従って、Tier 3 リスク（観察事項とも呼ばれる）も特定し監視します。

## 例外

情報セキュリティポリシーまたは手順への例外は、[情報セキュリティポリシー例外管理プロセス](/handbook/security/controlled-document-procedure/#exceptions)に従って追跡されます。

## 参考文献

- [管理対象ドキュメント手順](/handbook/security/controlled-document-procedure/)
- [ISO42001 のために AIMS を ISMS に組み込む](https://gitlab.com/gitlab-com/content-sites/handbook/commit/ca2cb266)
- ISO/IEC 27001:2022 情報セキュリティマネジメントシステム
- ISO/IEC 42001:2023 人工知能マネジメントシステム
