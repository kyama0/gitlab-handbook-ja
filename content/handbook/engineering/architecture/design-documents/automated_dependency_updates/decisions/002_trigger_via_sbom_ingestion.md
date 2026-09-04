---
title: '依存関係の自動更新 ADR 002：SBOM 取り込みスキャンプロファイルでトリガーする'
description: 'Continuous Vulnerability Scanning ではなく、後処理スキャンプロファイルを通じた SBOM 取り込みによって、依存関係の自動更新をトリガーするという決定。'
upstream_path: /handbook/engineering/architecture/design-documents/automated_dependency_updates/decisions/002_trigger_via_sbom_ingestion/
upstream_sha: bc76a1a59f8b471f304263e712307581bdc7d128
translated_at: "2026-09-04T22:19:18+09:00"
translator: codex
stale: false
lastmod: "2026-08-26T18:59:23+02:00"
---

## コンテキスト {#context}

元の提案では、[Continuous Vulnerability Scanning](https://docs.gitlab.com/user/application_security/continuous_vulnerability_scanning/)
（CVS）の一部である `IngestCvsSliceService` が、CVS スキャンの完了時に
脆弱性のあるコンポーネントを `UpdateDependencyService` へ転送することになっていました。
これにより、依存関係の自動更新は CVS のアドバイザリ駆動型スキャンモデルと結びつきました。
新しく公開されたアドバイザリに照らして CVS がプロジェクトを再評価した場合にのみ、
更新が検討される形です。

実際には、修正を、依存関係スキャンがすべてのパイプラインですでに生成しているものと
同じシグナル、つまりプロジェクトの SBOM に結びつける必要がありました。修正を CVS に特化して
結びつけると、CVS 自体のスキャン頻度に依存し、スキャンプロファイルで設定された
トリガーに反応するために GitLab がすでに備えている汎用的な仕組みを再利用できませんでした。

## 決定事項 {#decision}

依存関係の自動更新は、Continuous Vulnerability Scanning ではなく、
**後処理スキャンプロファイル**を通じた**SBOM の取り込み**によってトリガーします。

### 後処理スキャンプロファイル {#post-processing-scan-profiles}

GitLab の `Security::ScanProfile` モデルは、2 種類のトリガーファミリーをサポートします。

- **パイプライン関連のトリガー**（`default_branch_pipeline`、
  `merge_request_pipeline`）。CI パイプラインの一部として実行するプロファイルで
  使用します。
- **後処理トリガー**（`sbom_ingested`）。特定のパイプラインから独立して、
  GitLab にすでに取り込まれたデータに反応するプロファイルで使用します。

`Security::ScanProfileTrigger` は、`sbom_ingested` を後処理プロファイルだけで
使用でき、その逆も成り立つことを検証します。

### 自動修正の接続 {#wiring-for-auto-remediation}

依存関係の自動更新は、`sbom_ingested` トリガーを持つ
`dependency_scanning_post_processing` プロファイルという 1 つの組み合わせに依存します。
`DependencyManagement::SecurityUpdate::Eligibility` は、その定義と、指定されたプロジェクトに
対するルックアップを担います。自動実行の `SchedulerService` と、ユーザーがトリガーする
単一脆弱性の修正フローはどちらも同じルックアップを条件とするため、
修正を実行できるタイミングについて一貫性が保たれます。

つまり、別の CVS スキャンサイクルを待つのではなく、プロジェクトの依存関係スキャンによって
新しい SBOM が生成されるたびに修正を実行します。

## 参考資料 {#references}

1. `ee/app/models/dependency_management/security_update/eligibility.rb`
1. `ee/app/models/security/scan_profile_trigger.rb`
1. [001：上限を設け、重大度を優先する修正](./001_bounded_severity_prioritized_remediation.md)
