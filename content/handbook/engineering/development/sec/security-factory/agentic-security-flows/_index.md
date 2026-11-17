---
title: Agentic Security Flows グループ
description: >-
  Agentic Security Flows グループは、脆弱性を修復する
  ユーザーフローを構築します。
upstream_path: /handbook/engineering/development/sec/security-factory/agentic-security-flows/
upstream_sha: ae7cb222d67ee0dd31f3319c8c70f0fabda2633b
lastmod: "2026-11-17T13:42:26+01:00"
translated_at: "2026-11-17T21:14:57.510431+00:00"
translator: codex
stale: false
---

## ミッション

脆弱性を修復するユーザーフローを構築します。

## 担当範囲 {#what-we-own}

このグループは、セキュリティチーム向けの次の GitLab Duo Agent Platform フローを担当します。

| フロー | ドキュメント |
| --- | --- |
| Agentic SAST Vulnerability Resolution | [Agentic SAST による脆弱性解決のドキュメント](https://docs.gitlab.com/user/application_security/vulnerabilities/agentic_vulnerability_resolution/) |
| SAST の誤検知検出 | [SAST の誤検知検出のドキュメント](https://docs.gitlab.com/user/application_security/vulnerabilities/false_positive_detection/) |
| シークレットの誤検知検出 | [シークレットの誤検知検出のドキュメント](https://docs.gitlab.com/user/application_security/vulnerabilities/secret_false_positive_detection/) |
| Vulnerability Context Flow | [Vulnerability Context Flow のドキュメント](https://docs.gitlab.com/user/application_security/vulnerabilities/vulnerability_context_flow/) |
| Agentic Breaking Change Resolution | [Agentic Breaking Change Resolution のドキュメント](https://docs.gitlab.com/user/application_security/remediate/dependency_scanning_auto_remediation/) |

## チーム

| 役割 | 担当者 |
| --- | --- |
| Engineering Manager | AJ Biton (`@ajbiton`) |
| Product Manager | Mike Clausen (`@mclausen35`) |
| Tech Lead | Savas Vedova (`@svedova`) |

現在のメンバー情報は Workday を情報源とし、
[プロダクトカテゴリページ](/handbook/product/categories/#sec-section)に掲載されています。

## ラベル

| スコープ | ラベル |
| --- | --- |
| ステージ | `devops::security factory` |
| グループ | `group::agentic security flows` |

## Slack

1. `#sec-agentic-security-flows` - グループチャンネル。
1. `#sec-agentic-security-flows-error-alerts` - エラーアラート。

## 沿革

このグループは、FY27 Sec 再編で旧 Security Insights グループから分離して作られました。
`group::security insights` ラベルの履歴は
[Vulnerability Management](/handbook/engineering/development/sec/security-factory/vulnerability-management/)に引き継がれ、
Agentic Security Flows の作業履歴は再編の切り替え時点から始まります。
