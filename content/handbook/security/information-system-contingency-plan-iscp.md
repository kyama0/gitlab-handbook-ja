---
title: "情報システム緊急時対応計画 (ISCP)"
description: "情報システムを復旧するための手順と機能を提供します。"
upstream_path: /handbook/security/information-system-contingency-plan-iscp/
upstream_sha: 1e195b58b9f249ff10bd0e705106c320fee86141
translated_at: "2026-05-09T12:00:00Z"
translator: claude
stale: false
---

## 目的

ISCP は、システム障害発生後のシステム評価と復旧のための確立された手順を提供します。ISCP は、役割と責任、インベントリ情報、評価手順、詳細な復旧手順、システムテストを含む、システム復旧に必要な重要情報を提供します。GitLab.com および [Tier 1 システム](/handbook/security/security-assurance/security-risk/storm-program/critical-systems/) について、[事業継続計画 (BCP)](/handbook/business-technology/entapps-documentation/policies/gitlab-business-continuity-plan/) および [災害復旧計画 (DRP)](https://gitlab.com/gitlab-com/gl-infra/readiness/-/blob/master/library/disaster-recovery/index.md) と連動させて ISCP が作成されます。

## ISCP と DRP の違い

ISCP が DRP と主に異なる点は、情報システム緊急時対応計画手順が、サイトや場所に関係なくシステムの復旧のために開発されることです。ISCP はシステムの現在の場所または代替サイトでアクティブ化できます。対照的に、DRP は主にサイト固有の計画であり、損傷した、または居住不可能になった場所から、1 つまたは複数の情報システムの運用を一時的な代替場所に移動するための手順を伴って開発されます。DRP が情報システムサイトを代替サイトに正常に移動した後、影響を受けた各システムは、それぞれの ISCP を使ってシステムを復元、復旧、テストし、運用に投入します。（参考: NIST 800-34）

## 情報システム緊急時対応ポリシー声明

GitLab は、障害発生時に重要なシステム運用のニーズを満たすため、GitLab.com および [Tier 1 システム](/handbook/security/security-assurance/security-risk/storm-program/critical-systems/) について緊急時対応計画を策定します。そのような能力を実行するための手順は、情報システム緊急時対応計画 (ISCP) コーディネーターによって正式な緊急時対応計画として文書化され、ISCP コーディネーターによって毎年見直され、必要に応じて更新されなければなりません。計画は FIPS 199 セキュリティカテゴリ化（low、moderate、high）を考慮し、適切なセキュリティコントロールに準拠する必要があります。計画は、必要不可欠なシステム機能の復旧および／または継続を促進するために、指定されたスタッフまたはポジションに具体的な責任を割り当てなければなりません。手順の生存可能性を確保するために必要なリソースを取得・維持しなければなりません。対象システムの責任者は、緊急時対応手順を実行できるようにトレーニングされなければなりません。計画の復旧能力と人員は、能力の弱点を識別するために毎年テストされなければなりません。

## 役割と責任

| 役割 | 責任 |
|-----------|-----------|
| Security Compliance | Security Compliance チームは情報システム緊急時対応計画 (ISCP) コーディネーターとなる。少なくとも年に 1 回 ISCP をレビューする。ISCP テストの調整と促進を支援する。あらゆる外部監査の連絡窓口を務める。 |
| Application Security | アプリケーション脆弱性プログラムを管理し、アプリケーションセキュリティツールを維持し、セキュリティリスクを特定する。 |
| Infrastructure | インフラストラクチャの管理とサポートに責任を持つ。 |
| Infrastructure Security | インフラストラクチャ脆弱性プログラムを管理し、インフラストラクチャセキュリティツールを維持し、セキュリティリスクを特定する。 |

## 例外

ISCP に例外はありません。

## 参考文献

- [NIST 800-34](https://csrc.nist.gov/glossary/term/information_system_contingency_plan)
- [BCP](https://handbook.gitlab.com/handbook/business-technology/gitlab-business-continuity-plan/)
- [災害復旧計画 (DRP)](https://gitlab.com/gitlab-com/gl-infra/readiness/-/blob/master/library/disaster-recovery/index.md)
- [Database DR](/handbook/engineering/infrastructure-platforms/database/disaster-recovery/)
