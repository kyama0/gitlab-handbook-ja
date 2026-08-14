---
title: "Sentry で Semver Dialect エラーを有効化する"
upstream_path: /handbook/engineering/development/sec/security-factory/composition-analysis/runbooks/semver-dialect-errors-in-sentry/
upstream_sha: cd448feba02b00726e216b7b3cfed717822b37b6
translated_at: "2026-08-14T08:35:00+09:00"
translator: codex
stale: false
lastmod: "2026-08-13T15:10:33+03:00"
---

## 概要

このランブックは、GitLab Rails アプリケーション内で生成された SemverDialect エラーの Sentry へのレポートを有効化する手順を提供します。このレポートは `track_semver_dialect_errors_for_cvs_in_sentry` [OPS](https://docs.gitlab.com/ee/development/feature_flags/#ops-type) フィーチャーフラグの背後にあり、デフォルトでは無効になっています。これにより、gitlab.com 上の無効またはサポートされていないユーザーデータの処理から生成された過多なエラーで Sentry システムが溢れることを防ぎます。

**注意：** このフィーチャーフラグは 18.4 までに削除される予定です：https://gitlab.com/gitlab-org/gitlab/-/issues/491612

### 手順

1. 本番環境でフィーチャーフラグを有効化します：`/chatops run feature set track_semver_dialect_errors_for_cvs_in_sentry true --production`
2. Sentry で SemverDialects エラーを監視します：https://new-sentry.gitlab.net/organizations/gitlab/issues/?query=is%3Aunresolved+SemverDialects
3. 対処が必要な報告されたエラーについて Issue を作成します。
4. 本番環境でフィーチャーフラグを無効化します：`/chatops run feature set track_semver_dialect_errors_for_cvs_in_sentry false --production`
5. Issue を修正します。
6. 繰り返します。
