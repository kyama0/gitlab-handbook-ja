---
title: "Security Interlock"
description: "Security Interlock イニシアチブは、Security、Engineering、Product 部門にわたるクロスファンクショナルなパートナーシップで、GitLab が実世界のセキュリティユースケースを効果的にサポートし、市場で最高の DevSecOps プラットフォームを提供することを推進します。"
upstream_path: /handbook/security/product-security/security-platforms-architecture/security-interlock/
upstream_sha: 1e195b58b9f249ff10bd0e705106c320fee86141
translated_at: "2026-05-09T12:00:00Z"
translator: claude
stale: false
---

## 私たちが行うこと

Security 部門による GitLab セキュリティ機能のドッグフーディングは、単なる会社の慣習ではなく、戦略的に必要不可欠なものです。私たちが自分たちのセキュリティ製品を社内で使うことで、顧客が直面する前にユーザビリティの課題を特定し、また私たちのソリューションへの信頼と確信を喚起する、より説得力のある go-to-market ナラティブを提供することができます。私たちの直接の経験は製品ロードマップと優先順位付けの判断に役立ち、理論上の機能性と実装的な実現の間のギャップを橋渡しします。GitLab の Security 部門は、エンタープライズセキュリティチームのニーズに対するカナリアです。私たち自身が自分たちのセキュリティ機能を効果的に使えなければ、おそらく顧客も使えません。

既存の機能をテストするだけにとどまらず、Security、Engineering、Product は GitLab プラットフォーム内で直接セキュリティ機能を共創することにも積極的に取り組んでいます。この共創アプローチにより、セキュリティ実務者によってセキュリティ実務者のために開発された実世界のセキュリティ機能とリスク軽減コントロールが、製品のコア要素となります。私たちのセキュリティの専門知識と要件を GitLab に直接統合することで、エンタープライズセキュリティの課題に対処する実用的なソリューションを提供します。

GitLab は常にドッグフーディングとクロスファンクショナルなコラボレーションを重視してきましたが、FY26 ではこれらの取り組みのフォーカスを高め、形式化を進めています。

## Security Interlock ワークストリーム

FY26 では、3 つの異なる、並行するワークストリームを開始することで Security Interlock のビジョンを実行しています。

| **ワークストリーム名** | **ワークストリーム説明** |
| ------ | ------ |
| **Customer Zero** | 要件提供、意図された機能とモックアップの検証、アルファ/ベータテストを含む、新機能の開発とローンチ全体を通したセキュリティのコラボレーション |
| **既存機能のドッグフーディング** | セキュリティが既存機能を確実に使用し、価値を引き出せるようにすること |
| **内部 Co-Create プロセス** | [Internal ProdSec to Product プロセス](/handbook/security/product-security/security-platforms-architecture/security-interlock/prodsec-to-product-workflow/) を使用した、Security 部門から GitLab プラットフォームへのセキュリティ機能、舗装された道、ガードレールの直接貢献 |

これらのワークストリームを現在積極的に形式化しています。スケールする前に協力的なインターフェイスを洗練させるため、各ワークストリームに対して 1〜2 件のターゲット機能から意図的に小さく始めています。

## キードライバー

Security Interlock イニシアチブには 3 名の指定されたリーダーがいます。

- [Security Platforms & Architecture](/handbook/security/product-security/security-platforms-architecture/) チームが Security 部門を代表します。
- [Sec Section](/handbook/engineering/development/sec/) からの Product DRI。
- [Sec Section](/handbook/engineering/development/sec/) からの Engineering DRI。

すべての Security チームが引き続き該当する機能をパイロットしてフィードバックを提供しますが、このリーダーシップ構造は、コミュニケーションと説明責任の明確なチャンネルを作ります。目標は、私たちの協力的な取り組みを合理化し、統合された実用的なフィードバックが効率的に製品チームに届くようにし、実世界のニーズに対応するセキュリティ機能の協調的な開発を促進することです。これらのインタラクションを集中化することで、要件の検証、既存機能のドッグフーディング、結束したクロスファンクショナルなパートナーシップを通じてのセキュリティ機能の貢献をより良く行えるようになります。
