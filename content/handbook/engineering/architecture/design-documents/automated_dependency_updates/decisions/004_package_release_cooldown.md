---
title: '依存関係の自動更新 ADR 004：パッケージリリースのクールダウン'
description: 'サプライチェーンリスクを低減するため、新しく公開されたパッケージバージョンを依存関係の自動更新で提案する前に、設定可能なクールダウン期間を設けるという決定。'
upstream_path: /handbook/engineering/architecture/design-documents/automated_dependency_updates/decisions/004_package_release_cooldown/
upstream_sha: bc76a1a59f8b471f304263e712307581bdc7d128
translated_at: "2026-09-04T22:19:18+09:00"
translator: codex
stale: false
lastmod: "2026-08-26T18:59:23+02:00"
---

## コンテキスト {#context}

依存関係を、公開直後に利用可能な最新バージョンへ自動的に更新すると、
サプライチェーンリスクが生じます。公開されたばかりのパッケージバージョンは、悪意がある、
侵害されている、または単に壊れていることにコミュニティが気づくための時間が最も少ないためです。
元の設計ドキュメントでは、この点に対応していませんでした。焦点を当てていたのは、提案しても安全な
バージョンが*どれか*ではなく、オープンする MR の*数*と順序を制限すること
（[001](./001_bounded_severity_prioritized_remediation.md)）でした。

## 決定事項 {#decision}

**クールダウン期間**を追加しました。これは、依存関係の自動更新でパッケージバージョンを提案する前に、
そのバージョンが公開されていなければならない最小日数です。

クールダウンは、プロジェクトの修正スキャンプロファイル設定にある `auto_remediation` セクションの
フィールドで、デフォルトは 7 日です。検証済みの範囲内でお客様が設定できます。

モノリス自体はクールダウンに基づく処理を行いません。ジョブペイロードの一部として設定値を
更新オーケストレーターに渡します。オーケストレーターは、更新先のバージョンを解決する際、
クールダウン期間より新しいパッケージバージョンを除外する
役割を担います。

これは、オープン MR のレート制限と対をなす安全策です。レート制限は*量*に上限を設け、
クールダウンは*新しさ*を制限します。どちらも、依存関係ツリーにすでに存在するリスクではなく、
自動化自体がもたらすリスクを低減するために存在します。

## 参考資料 {#references}

1. `ee/app/services/dependency_management/security_update/job_builder.rb`
1. `ee/app/models/security/scan_profiles/configuration/defaults/dependency_scanning_post_processing.rb`
1. [001：上限を設け、重大度を優先する修正](./001_bounded_severity_prioritized_remediation.md)
1. [005：オープンなマージリクエストをリベースせずリフレッシュする](./005_refresh_instead_of_rebase.md)
