---
title: Dynamic Analysis グループの API Security チーム
upstream_path: /handbook/engineering/development/sec/secure/dynamic-analysis/api-security/
upstream_sha: 3480299851f7e2243d4f08b75dac452f89929636
translated_at: "2026-04-28T05:48:28Z"
translator: claude
stale: false
lastmod: "2026-03-02T07:33:04-05:00"
---

## API Security

API Security チームは GitLab の Dynamic Analysis グループの一部であるスタンドアロンチームです。ファジングを行うソリューションの開発を担当しています。

| リポジトリ | 目的 |
| ---- | ------- |
| [API Fuzzer](https://gitlab.com/gitlab-org/security-products/analyzers/api-fuzzing-src) - プライベート | GitLab の API ファジングスキャナー。 |

### 重要なファジングリポジトリ

| リポジトリ | 目的 |
| ---- | ------- |
| [API Security](https://gitlab.com/gitlab-org/security-products/analyzers/api-fuzzing-src) | プライベート - API Security ツールは API ファジングと API DAST スキャンを実行します |
| [API Fuzzing E2E Tests](https://gitlab.com/gitlab-org/security-products/tests/api-fuzzing-e2e) | プライベート - API エンドツーエンドテスト |
| [DAST API デモ](https://gitlab.com/gitlab-org/security-products/demos/api-dast/) | パブリック - ドキュメントからリンクされた DAST API デモ |
| [API Fuzzing デモ](https://gitlab.com/gitlab-org/security-products/demos/api-fuzzing) | パブリック - ドキュメントからリンクされた API ファジングデモ |
| [API Fuzzing デモ](https://gitlab.com/gitlab-org/security-products/demos/api-fuzzing-example/) | パブリック - ドキュメントからリンクされた API ファジングデモ（har/openapi ブランチ） |

## 連絡方法

- Slack チャンネル: #g_ast-dynamic-analysis
- Slack エイリアス: @secure_dynamic_analysis_be
- Google グループ: dynamic-analysis-be@gitlab.com
- GitLab メンション: @gitlab-org/secure/dynamic-analysis-be

## 働き方

Dynamic Analysis グループは主に GitLab の[プロダクト開発フロー](/handbook/product-development/how-we-work/product-development-flow/)に従っています。

このチームが取り組む Issue はバックエンド中心で、通常は上記のリポジトリ、[ベンダーテンプレート](https://gitlab.com/gitlab-org/gitlab/-/tree/master/lib/gitlab/ci/templates/Security)、および GitLab の [Rails モノリス](https://gitlab.com/gitlab-org/gitlab)にあります。場合によっては、UI の変更が必要な場合に AST のフロントエンドチームからのサポートが必要になることがあります。このような取り組みについてはより多くの事前通知が必要です。

## 繰り返しタスク

各マイルストーンで完了する必要があるいくつかのメンテナンスタスクがあります。各イテレーションで、Issue が開かれ、ローテーションベースでエンジニアに割り当てられます。それらのローテーションタスクは:

- アップストリームの変更をレビューし、アップストリームの変更が重要な改善を提供する場合は DAST をアップグレードするための Issue を開く
- DAST の[セキュリティダッシュボード](https://gitlab.com/gitlab-org/security-products/dast/-/security/vulnerability_report)をレビューし、すべての Critical および High Issue に対処する。アップストリームプロジェクト [ZAP](https://gitlab.com/gitlab-org/security-products/dependencies/zaproxy) と [ZAP Extensions](https://gitlab.com/gitlab-org/security-products/dependencies/zap-extensions) のダッシュボードをレビューする

### ファジング技術

- API Security プロダクトは主に C# で構築されており、一部の Python が使われています。エンジニアは開発に Windows VM を使用しています。

### 専用ラベル

Issue を開く際に、以下のラベルスニペットがよく追加されます:

```text
/label ~"Category:API Security"
/label ~"group::dynamic analysis"
/label ~"devops::application security testing"
/label ~"backend"
/label ~"section::sec"
```

#### ターゲット

マージリクエストタイプについては、[クロスファンクショナル優先順位付けプロセス](/handbook/engineering/workflow/cross-functional-prioritization/)に基づいて、機能 60%、メンテナンス 30%、バグ 10% の初期のソフトターゲット比率を設定しています。これはハードターゲットではなく、成熟するにつれてフォーカスが進化するにつれてこの比率に変動が生じることが予想されます。

### サポートリクエスト

Dynamic Analysis エンジニアリングチームは、[Sec Section サポートプロジェクトに概説されているプロセス](https://gitlab.com/gitlab-com/sec-sub-department/section-sec-request-for-help/)に従って GitLab サポートエンジニアにサポートを提供します。

## Issue ボード

- [API Security - 配信ワークフローボード](https://gitlab.com/groups/gitlab-org/-/boards/4543953?label_name[]=Category%3AAPI%20Security)
- [API Security 計画ボード](https://gitlab.com/gitlab-org/gitlab/-/boards/4127408?label_name[]=Category%3AAPI%20Security#)
- [Dynamic Analysis EM ボード](https://gitlab.com/groups/gitlab-org/-/boards/1353832?scope=all&utf8=%E2%9C%93&state=opened)
