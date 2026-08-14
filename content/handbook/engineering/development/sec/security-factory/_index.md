---
title: Security Factory ステージ
description: >-
  Security Factory ステージは、アナライザーから脆弱性管理や脅威調査まで、
  GitLab セキュリティポートフォリオのスキャン、検出、修復エンジンを構築します。
upstream_path: /handbook/engineering/development/sec/security-factory/
upstream_sha: c649549e971e74175edf1d5bc1190fcc86e359e6
lastmod: "2026-08-13T15:10:33+03:00"
translated_at: "2026-08-14T06:50:00+09:00"
translator: codex
stale: false
---

Security Factory エンジニアリングステージは、顧客のコードにあるセキュリティ問題を発見し、説明し、
修正を支援するエンジンを所有します。これには、アナライザー、検出ルール、脆弱性管理機能、
およびそれらに情報を提供する調査が含まれます。

このステージは、旧 Application Security Testing ステージに Security Insights グループと
Security Infrastructure グループを加え、FY27 の Sec 再編で設立されました。

## リーダーシップ

| ロール | 担当者 |
| --- | --- |
| ステージリード | Maw Wildpaner（`@maw`、暫定） |
| Principal Engineer | Isaac Dawson（`@idawson`） |
| Principal Engineer | Lucas Charles（`@theoretick`） |
| Principal Engineer | Meir Benayoun（`@mbenayoun`） |

## チーム

| グループ | Engineering Manager | Tech Lead | ラベル |
| --- | --- | --- | --- |
| [Secret Detection](secret-detection/) | Amar Patel（`@amarpatel`） | Ahmed Hemdan（`@ahmed.hemdan`） | `group::secret detection` |
| [Composition Analysis](composition-analysis/) | Ethan Feller（`@efeller`） | Nick Ilieskou（`@nilieskou`） | `group::composition analysis` |
| [Code Scanning](code-scanning/) | Ethan Feller（`@efeller`） | Yoric Teller（`@yteller`） | `group::code scanning` |
| [Code Security](code-security/) | Ethan Feller（`@efeller`） | Philip Cunningham（`@philipcunningham`） | `group::code security` |
| [AI Security](ai-security/) | 未定 | Mher Tolpin（`@mtolpin`） | `group::ai security` |
| [Vulnerability Management](vulnerability-management/) | AJ Biton（`@ajbiton`） | Lorenz van Herwaarden（`@lorenzvanherwaarden`） | `group::vulnerability management` |
| [Agentic Security Flows](agentic-security-flows/) | AJ Biton（`@ajbiton`） | Savas Vedova（`@svedova`） | `group::agentic security flows` |
| [Threat Research](threat-research/) | Daniel Abeles（`@dabeles`） | Dinesh Bolkensteyn（`@dbolkensteyn`） | `group::threat research` |
| [Security Foundations](security-foundations/) | Ryan Wells（`@ryaanwells`） | Gregory Havenga（`@ghavenga`） | `group::security foundations` |

グループメンバー情報は Workday を情報源とし、
[プロダクトカテゴリページ](/handbook/product/categories/#sec-section)で公開しています。

## ラベル

このステージの作業には、`devops::security factory` ステージラベルに加えて、担当グループの
`group::` ラベルが付けられます。どちらもスコープ付きラベルであり、`gitlab-org` と
`gitlab-com` のトップレベルグループに存在します。

## Slack

- [`#sec-security-factory-eng`](https://gitlab.enterprise.slack.com/archives/C07QX7Y63HQ)：ステージのエンジニアリングチャンネル。

各グループのチャンネルは、それぞれのグループページに記載されています。複数のチャンネル名変更が
まだ進行中であり、
[Sec 再編 Issue 2](https://gitlab.com/gitlab-org/software-supply-chain-security/reorg-act2-2026-06/-/issues/2)で追跡しています。

## ステージのリソース

1. [プランニング](planning/)
1. [QA プロセス](qa_process/)
1. [プロダクトとメトリクス](products/)
1. [技術ドキュメント](tech-docs/)
1. [チュートリアル：CI ベースのアナライザーに可観測性メトリクスを追加する](analyzer-observability-metrics/)
