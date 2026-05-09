---
title: Field Security の観察事項および OFI 品質ガイド
upstream_path: /handbook/security/security-assurance/field-security/field_security_observation_and_ofi_quality_guide/
upstream_sha: 1e195b58b9f249ff10bd0e705106c320fee86141
translated_at: "2026-05-09T12:00:00Z"
translator: claude
stale: false
---

## 目的

このガイドは、Field Security によって特定および文書化される観察事項と OFI（Opportunity For Improvement: 改善機会）の品質に関する期待値を確立することを目的としています。

## スコープ

この品質ガイドは、GitLab の[観察事項管理プログラム](/handbook/security/security-assurance/observation-management-procedure/)に基づき、Field Security が顧客向け[アシュアランス活動](/handbook/security/security-assurance/field-security/customer-security-assessment-process/)を通じて特定した観察事項および OFI を対象とします。

## 品質に関する期待値

Field Security の観察事項および OFI は以下の特徴を備えている必要があります。

- 報告内容について、どのチームメンバーでも基本的な理解を得られる十分な詳細を含むこと
  - 何が特定されたのか？
  - 特定につながった見込み客、顧客、競合他社などは誰か？
  - これはいつ特定されたのか？
  - これは GitLab に現在どのような影響を与えているか、または将来的にどのように影響しうるか？
    - なぜこれが重要であり、なぜリソースを割り当てるべきなのか？
  - 問題を是正する、ソリューションを改善する、または特定された状況を活用できる立場をとるために、私たちは何ができるのか？
- トリアージのために適切なチームメンバーに割り当てられていること
- 提案された期日があること
  - これは明確な締め切り（例: 新しい規制が発効する日）に基づくものでもよく、ソリューション実装に必要な工数の認識レベルに基づく見積もりでもかまいません。
- 性質的に重要なもの（material）であること。例として、これらの特定事項は次のようなものになりえます。
  - GitLab に財務的影響をもたらす
  - GitLab に対する新規または更新されたコンプライアンス義務の結果である
  - GitLab に競合上の優位性をもたらす
  - 顧客からのリクエストや期待によりよく対応できるよう私たちを支援する

**注記** Field Security の観察事項および OFI は、[観察事項作成手順](/handbook/security/security-assurance/observation-management-procedure/)に従って作成されるべきです。
