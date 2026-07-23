---
title: "SBOM backfiller"
description: "SBOM backfiller ツールを使用して GitLab セキュリティリリースの不足している SBOM ファイルを修正する手順ガイド。"
upstream_path: /handbook/security/product-security/security-platforms-architecture/product-security-engineering/runbooks/sbom-backfiller/
upstream_sha: 7032d681eb34b7baa363eb97119170b35beb5d76
lastmod: "2026-07-23T14:02:09+10:00"
translated_at: "2026-07-24T06:17:58+09:00"
translator: codex
stale: false
---

[SBOM backfiller](https://gitlab.com/gitlab-org/sbom/systems/backfiller) は、[GitLab セキュリティリリースで不足している SBOM](https://gitlab.com/components/sbom/generator/-/issues/24) を支援するための暫定的な解決策となるプロジェクトです。

## 不足している Omnibus マニフェストを修正する

**コンテキスト:** マニフェストは、リリースパイプライン中に `dev.gitlab.org` の `manifest-upload` CI ジョブで生成されます。そのジョブが失敗すると（例: 一時的な GitLab.com の負荷／スロットリング）、マニフェストは [マニフェストページ](https://gitlab-org.gitlab.io/omnibus-gitlab/gitlab-manifests/manifests.html) に公開されず、SBOM の生成が妨げられます。

---

### ステップ 1 — 不足しているマニフェストを特定する

[バージョンマニフェストページ](https://gitlab-org.gitlab.io/omnibus-gitlab/gitlab-manifests/manifests.html) を確認し、期待されるリリースバージョンと比較します。不足しているマニフェストは次の URL パターンに従います:

```text
https://gitlab-org.gitlab.io/omnibus-gitlab/gitlab-manifests/gitlab-ee/<MAJOR.MINOR>/<VERSION>-ee.0-ee.version-manifest.json
```

続行する前に、すべての不足しているバージョンを一覧にします。

### ステップ 2 — dev.gitlab.org で失敗した `manifest-upload` ジョブを見つける

不足しているバージョンごとに、`dev.gitlab.org/gitlab/omnibus-gitlab` で対応するリリースパイプラインを探します。失敗またはスキップされた `manifest-upload` ジョブを確認します。根本原因は通常、次のような一時的なエラーです:

```text
fatal: remote error: GitLab is currently unable to handle this request due to load
```

これは自動化できます: スクリプトでリリースタグに一致するパイプラインを dev.gitlab.org API に問い合わせ、失敗した `manifest-upload` ジョブをフィルタリングできます。

### ステップ 3 — 失敗した `manifest-upload` ジョブを再試行する

`dev.gitlab.org` で、影響を受けるバージョンごとに失敗した `manifest-upload` ジョブを手動で再試行します。[omnibus-gitlab!9525（`manifest-upload` に `retry: 2` を追加）](https://gitlab.com/gitlab-org/omnibus-gitlab/-/merge_requests/9525)以降、ジョブには `retry: 2` が設定されているため、一時的な失敗は自己修復されるはずです。この修正より前の古いリリースでは、手動での再試行が必要です。

1. `dev.gitlab.org` のジョブ URL に移動します
1. **Retry** をクリックします
1. ジョブが正常に完了することを確認します

このステップは、`dev.gitlab.org` インスタンスに対する GitLab API（`POST /projects/:id/jobs/:job_id/retry`）経由で部分的に自動化できます。

### ステップ 4 — `Generate licence pages` スケジュールパイプラインを起動する

`manifest-upload` ジョブが成功したら、[`Generate licence pages` スケジュールパイプライン](https://gitlab.com/gitlab-org/omnibus-gitlab/-/pipelines)を `gitlab.com` で起動します。具体的には、その中の `pages` ジョブがマニフェストインデックスを再生成し、JSON ファイルを公開します。

1. `gitlab-org/omnibus-gitlab` の **CI/CD > Schedules** に移動します
1. `Generate licence pages` スケジュールを手動で実行するか、次のスケジュール実行を待ちます
1. `pages` ジョブを監視し、正常に完了することを確認します

これは自動化できます: GitLab API（`POST /projects/:id/pipeline_schedules/:schedule_id/play`）経由で起動します。

### ステップ 5 — マニフェストが公開されたことを確認する

以前に不足していたバージョンごとに、マニフェスト JSON にアクセスできることを確認します:

```bash
curl -sf "https://gitlab-org.gitlab.io/omnibus-gitlab/gitlab-manifests/gitlab-ee/<MAJOR.MINOR>/<VERSION>-ee.0-ee.version-manifest.json" \
  && echo "OK" || echo "MISSING"
```

また、[マニフェストインデックスページ](https://gitlab-org.gitlab.io/omnibus-gitlab/gitlab-manifests/manifests.html)に期待されるすべてのバージョンが一覧表示されていることを確認します。

これは、事後確認スクリプトとして完全に自動化できます。

### ステップ 6 — SBOM backfiller を実行する

マニフェストが存在することを確認したら、`gitlab-org/sbom/systems/gitlab-core` で SBOM backfiller を実行し、不足している SBOM パッケージを生成します:

```bash
DRY_RUN=true bin/backfill   # Preview what will be created
DRY_RUN=false bin/backfill  # Execute
```

バックフィラーは冪等です。すでに SBOM があるバージョンはスキップし、中断された場合も安全に再実行できます。出力が `(nothing to do)` と報告するまで監視します。

### ステップ 7 — 通知してクローズする

- バックフィルが完了したことを ProdSecEng チーム（例: `@gitlab-com/gl-security/product-security/product-security-engineering`）に通知します
- 追跡 Issue をクローズし、ステータスを **Complete** に設定します

### 自動化の機会の概要

| ステップ | 自動化可能か？ | 方法 |
|---|---|---|
| 不足しているマニフェストを検出する | ✅ はい | 期待されるリリースとマニフェストインデックスを比較する |
| dev.gitlab.org で失敗したジョブを見つける | ✅ はい | 名前とステータスで GitLab API のジョブを検索する |
| 失敗したジョブを再試行する | ✅ はい | GitLab API `POST .../retry` |
| `pages` パイプラインを起動する | ✅ はい | GitLab API でパイプラインスケジュールを起動する |
| マニフェストが公開されたことを確認する | ✅ はい | HTTP 確認スクリプト |
| SBOM backfiller を実行する | ✅ はい | `bin/backfill` はすでに冪等 |
| Issue を通知してクローズする | ⚠️ 部分的 | 自動でコメントできるが、クローズは人が行う |

検出から SBOM のバックフィルまでのフロー全体を、単一のスケジュールジョブまたはトリガーされた webhook に組み込めます。再試行が繰り返し失敗する場合にのみ、人によるレビューが必要です。
