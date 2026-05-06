---
title: "Sentry で Semver Dialect エラーを有効化する"
upstream_path: /handbook/engineering/development/sec/secure/composition-analysis/runbooks/semver-dialect-errors-in-sentry/
upstream_sha: 3480299851f7e2243d4f08b75dac452f89929636
translated_at: "2026-04-28T05:48:28Z"
translator: claude
stale: false
---

## 概要

このランブックは、GitLab Rails アプリケーション内で生成された SemverDialect エラーの Sentry へのレポートを有効化する手順を提供します。このレポートは `track_semver_dialect_errors_for_cvs_in_sentry` [OPS](https://docs.gitlab.com/ee/development/feature_flags/#ops-type) フィーチャーフラグの背後にあり、デフォルトでは無効になっています。これにより、gitlab.com 上の無効またはサポートされていないユーザーデータの処理から生成された過多なエラーで Sentry システムが溢れることを防ぎます。

**注意:** このフィーチャーフラグは 18.4 までに削除される予定です: https://gitlab.com/gitlab-org/gitlab/-/issues/491612

### 手順

1. 本番環境でフィーチャーフラグを有効化します: `/chatops run feature set track_semver_dialect_errors_for_cvs_in_sentry true --production`
2. Sentry で SemverDialects エラーを監視します: https://new-sentry.gitlab.net/organizations/gitlab/issues/?query=is%3Aunresolved+SemverDialects
3. 対処が必要な報告されたエラーについて Issue を作成します。
4. 本番環境でフィーチャーフラグを無効化します: `/chatops run feature set track_semver_dialect_errors_for_cvs_in_sentry false --production`
5. Issue を修正します。
6. 繰り返します。
