---
title: Security Governance ステージ
description: >-
  Security Governance ステージは、顧客がセキュリティルールを一度定義し、プラットフォーム全体で
  適用できるようにする、ポリシー、コンプライアンス、AI ガバナンス機能を構築します。
upstream_path: /handbook/engineering/development/sec/security-governance/
upstream_sha: cd448feba02b00726e216b7b3cfed717822b37b6
lastmod: "2026-08-13T15:10:33+03:00"
translated_at: "2026-08-14T06:30:00+09:00"
translator: codex
stale: false
---

Security Governance エンジニアリングステージは、AI ワークロードのガバナンスサーフェスを含め、セキュリティとコンプライアンスのルールを GitLab 全体で表現、保存、評価、監査する方法を担当します。

このステージは、旧 Security Risk Management ステージと Compliance グループを基に、FY27 の Sec 再編で設立されました。

## リーダーシップ

| ロール | 担当者 |
| --- | --- |
| ステージリード | Mohamed Waseem（`@mwaseem5`） |
| Senior Staff Engineer | Mehmet Emin Inaç（`@minac`） |

## チーム

| グループ | Engineering Manager | Tech Lead | ラベル |
| --- | --- | --- | --- |
| [Policy Engine](policy-engine/) | Alan Paruszewski（`@alan`） | Martin Cavoj（`@mcavoj`） | `group::policy engine` |
| [Policy Management](policy-management/) | Alan Paruszewski（`@alan`） | Alexander Turinske（`@aturinske`） | `group::policy management` |
| [Security Controls](security-controls/) | Alan Paruszewski（`@alan`） | Gal Katz（`@gkatz1`） | `group::security controls` |
| [Compliance](compliance/) | Nathan Rosandich（`@nrosandich`） | Huzaifa Iftikhar（`@huzaifaiftikhar1`） | `group::compliance` |
| [AI Governance](ai-governance/) | Nathan Rosandich（`@nrosandich`） | Jean van der Walt（`@jeanvdw`） | `group::ai governance` |
| [AI Control Plane](ai-control-plane/) | Abhimanyu Singh（`@asingh73`） | 採用予定 | `group::ai control plane` |

グループメンバー情報は Workday を情報源とし、[プロダクトカテゴリページ](/handbook/product/categories/#sec-section)で公開しています。

名称変更されたグループは、引き続き以前のハンドブックの場所にリンクしています。それらのページは後続のマージリクエストでこのステージ配下に移動する予定であり、[Sec 再編プロジェクト](https://gitlab.com/gitlab-org/software-supply-chain-security/reorg-act2-2026-06/-/issues)で追跡しています。

## ラベル

このステージの作業には、`devops::security governance` ステージラベルに加えて、担当グループの `group::` ラベルが付けられます。どちらもスコープ付きラベルであり、`gitlab-org` と `gitlab-com` のトップレベルグループに存在します。

## Slack

- `#sec-security-governance`：ステージチャンネル。

各グループのチャンネルは、それぞれのグループページに記載されています。複数のチャンネル名変更がまだ進行中であり、[Sec 再編 Issue 2](https://gitlab.com/gitlab-org/software-supply-chain-security/reorg-act2-2026-06/-/issues/2)で追跡しています。
