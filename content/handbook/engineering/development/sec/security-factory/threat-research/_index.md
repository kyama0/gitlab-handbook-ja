---
title: Threat Research グループ
description: "Threat Research グループは GitLab のセキュリティ研究機関です。新たな脅威を調査し、GitLab Advisory Database を拡充し、ソフトウェアサプライチェーン攻撃の検出機能を構築します。"
upstream_path: /handbook/engineering/development/sec/security-factory/threat-research/
upstream_sha: d717b9da633f2989a0b1854384a69a0c31bae680
lastmod: "2026-11-05T18:04:34+02:00"
translated_at: "2026-11-07T00:54:54.993254+00:00"
translator: codex
stale: false
---

Threat Research グループは、[Security Factory ステージ](/handbook/engineering/development/sec/security-factory/)の一部です。FY27 の Sec 再編前は Vulnerability Research という名称で、`group::vulnerability research` ラベルは `group::threat research` になりました。

## ミッション {#mission}

私たちは新たに現れるセキュリティの脅威を調査し、得られた知見を GitLab のお客様の保護につなげます。Dependency Scanning と Container Scanning を支える [GitLab Advisory Database](https://gitlab.com/gitlab-org/security-products/gemnasium-db)を維持し、悪意のあるパッケージやその他のサプライチェーン攻撃の検出機能を構築し、独自の脆弱性調査を行い、その成果を [Security Labs ブログ](https://about.gitlab.com/blog/categories/security-labs/)で公開します。

## 私たちの活動 {#what-we-do}

私たちは、相互につながる 3 つの領域で活動しています。

- **探索。** 新たな攻撃対象領域を、期間を区切って調査します。現在は主に AI コーディングエージェント、エージェントのプラグインと MCP サーバー、パッケージのエコシステムが対象です。探索では、拡充で埋めるべきデータの不足と、検出で監視する脅威の領域を特定します。
- **拡充。** GitLab のスキャナーを支えるアドバイザリーデータの精度と網羅性を向上させます。対象は、脆弱性を扱う GitLab Advisory Database（GLAD）と、悪意のあるパッケージを扱う GitLab Advisory Database for Malware（GLAM）で、新たなアップストリームの情報源と検証ワークフローも含まれます。
- **検出。** 私たちのサプライチェーンインテリジェンスプラットフォーム上で、大規模な検出システムを運用します。パッケージレジストリの悪意のあるコードを継続的に監視し、検出結果をアドバイザリーとして公開します。

独自の脆弱性調査はこの 3 つの領域すべてにまたがります。また、製品に関する意思決定で脅威モデルの確認が必要な場合、私たちのチームは Sec セクションの他のグループに対し、セキュリティ分野の専門家として支援します。

### 再編後に他の組織へ移管された業務 {#what-moved-elsewhere-after-the-reorg}

- SAST ルール、ベンチマーク、誤検知や見逃しのトリアージ：[Code Security](/handbook/engineering/development/sec/security-factory/code-security/)。
- GitLab 自体のセキュリティ：[Security 部門](/handbook/security/)。
- CVE Numbering Authority の業務は、当面は私たちが引き続き担当します。[CNA のプロセス](cna.md)を参照してください。

## 働き方 {#how-we-work}

調査は**実験**として進めます。実験は期間を 1 〜 3 か月に区切ったエピックで、到達点（具体的な終了状態）を定め、各到達点で継続、方向転換、終了のいずれかの判断を文書に記録します。実験は、成果なし、公開発表、製品の機能、オープンソースでのリリースのうち、1 つ以上の結果をもって終了します。成果が得られないことも有効な結果です。

追跡のルール：

- `gitlab-org` 全体で、チームが所有するすべての Issue とエピックに `group::threat research` を付けます。
- プロダクトグループと連携する作業には `threat research::initiative::product` を、独立した調査には `threat research::initiative::independent` を付けます。
- 他のグループのプログラム内で行う作業（例：Composition Analysis 向けのアドバイザリーの取り込み）は、そのグループのエピックの下に子エピックとして配置し、両チームが確認できるようにします。

## 私たちとの連携 {#working-with-us}

- 質問と依頼：Slack の [#sec-threat-research](https://gitlab.slack.com/archives/CSELDERRN) で連絡してください。
- アドバイザリーデータの問題（アドバイザリーの欠落や誤り、CVSS、誤検知）とサポートのエスカレーション：Threat Research テンプレートを使用して[ヘルプリクエスト](https://gitlab.com/gitlab-com/request-for-help/-/issues/new?issuable_template=SupportRequestTemplate-Threat-Research)を作成してください。適切なラベルと担当者が設定されます。
- CVE の依頼：[CNA のプロセス](cna.md)を参照してください。
- 脅威の観点からの製品設計のセキュリティレビュー：Slack チャンネルで依頼してください。実験と合わせてトリアージします。

## Threat Research チーム {#threat-research-team}

{{< team-by-manager-slug "dabeles" >}}

## 共通リンク {#common-links}

- GitLab グループ：[gitlab-org/secure/vulnerability-research](https://gitlab.com/gitlab-org/secure/vulnerability-research)
- GitLab Advisory Database：[gemnasium-db](https://gitlab.com/gitlab-org/security-products/gemnasium-db)、公開サイト [advisories.gitlab.com](https://advisories.gitlab.com)
- Security Labs ブログ：[about.gitlab.com/blog/categories/security-labs](https://about.gitlab.com/blog/categories/security-labs/)
- 職種：[Vulnerability Research Engineer](/job-description-library/engineering/vulnerability-research-engineer/)
