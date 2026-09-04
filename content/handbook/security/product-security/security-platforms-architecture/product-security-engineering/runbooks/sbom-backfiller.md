---
title: "SBOM backfiller"
description: "SBOM backfiller ツールを使用して GitLab セキュリティリリースの不足している SBOM ファイルを処理する手順ガイド。"
upstream_path: /handbook/security/product-security/security-platforms-architecture/product-security-engineering/runbooks/sbom-backfiller/
upstream_sha: 68426776f854464b95a942162d83ddb29afbcf7d
lastmod: "2026-08-21T03:07:26+12:00"
translated_at: "2026-09-04T14:20:43+09:00"
translator: codex
stale: false
---

[SBOM backfiller](https://gitlab.com/gitlab-org/sbom/systems/backfiller) は、[GitLab セキュリティリリースで不足している SBOM](https://gitlab.com/components/sbom/generator/-/issues/24) を支援するための暫定的な解決策です。

パイプラインスケジュールの `backfill` CI ジョブから自動的に実行されます。実行ごとに、各ソースプロジェクトのリリースタグと既存の SBOM パッケージを比較して不足分を作成します。また冪等であるため、中断された実行も安全に繰り返せます。作成できない唯一のものは、Omnibus バージョンマニフェストが公開されていないリリースの SBOM です。SBOM ジェネレーターにはそのマニフェストが必要だからです。この場合、追跡 Issue を作成し、失敗した実行からチームの Slack チャンネルへアラートを投稿します。

このランブックでは、バックフィラーが SBOM を生成できるよう、不足している Omnibus マニフェストを修正する手動部分を扱います。それ以外については、リポジトリが正規のリファレンスです:

- [`README`](https://gitlab.com/gitlab-org/sbom/systems/backfiller/-/blob/main/README.md) には、ツールの動作、追跡 Issue、`ignore_tags`、アラートおよびエスカレーションに使用する Slack チャンネルが記載されています。
- [`sbom-backfill-triage`](https://gitlab.com/gitlab-org/sbom/systems/backfiller/-/blob/main/skills/sbom-backfill-triage/SKILL.md) では、実行出力の各行が何を意味し、どう対応すべきかを説明しています。
- [`sbom-missing-manifest`](https://gitlab.com/gitlab-org/sbom/systems/backfiller/-/blob/main/skills/sbom-missing-manifest/SKILL.md) では、不足しているマニフェストの確認とエスカレーション、またはタグを `ignore_tags` に含めるべきかの判断を扱います。

## 不足している Omnibus マニフェストを修正する

**コンテキスト:** マニフェストは、リリースパイプライン中に `dev.gitlab.org` の `manifest-upload` CI ジョブで生成されます。そのジョブが失敗すると、マニフェストは[マニフェストページ](https://gitlab-org.gitlab.io/omnibus-gitlab/gitlab-manifests/manifests.html)に公開されず、SBOM の生成が妨げられます。このジョブは手動で再試行できますが、再試行は自動化できないため、手動ステップのままです。

---

### ステップ 1 — 不足しているマニフェストを特定する

バックフィラーが特定を行います。不足しているマニフェストは、実行ログで `⏩ Skipping creation of SBOM ... because manifest is unavailable` と報告され、ブロックされた各バージョンは、`sbom-backfill-tracking` ラベルが付いたオープンな追跡 Issue に記載されます。[`sbom-backfill-triage`](https://gitlab.com/gitlab-org/sbom/systems/backfiller/-/blob/main/skills/sbom-backfill-triage/SKILL.md) スキルでは実行出力について説明しています。また、[マニフェストページ](https://gitlab-org.gitlab.io/omnibus-gitlab/gitlab-manifests/manifests.html)と期待されるリリースバージョンを照合し、どれが不足しているかを確認することもできます。

### ステップ 2 — マニフェストが本当に不足していることを確認する

報告した実行の後にマニフェストが公開されている可能性があるため、作業を始める前にまだ不足していることを確認します:

```bash
curl -sf "https://gitlab-org.gitlab.io/omnibus-gitlab/gitlab-manifests/gitlab-ee/<MAJOR.MINOR>/<VERSION>-ee.0-ee.version-manifest.json" \
  && echo "OK" || echo "MISSING"
```

マニフェストが返された場合、それ以上行うことはありません。次回のスケジュール実行が SBOM を作成し、追跡 Issue を自動的にクローズします。

### ステップ 3 — dev.gitlab.org で失敗した `manifest-upload` ジョブを見つける

まだ不足している各バージョンについて、`dev.gitlab.org/gitlab/omnibus-gitlab` で対応するリリースパイプラインを見つけ、失敗またはスキップされた `manifest-upload` ジョブを探します。ログには次のような一時的エラーが表示されることがあります:

```text
fatal: remote error: GitLab is currently unable to handle this request due to load
```

### ステップ 4 — 失敗した `manifest-upload` ジョブを再試行する

`dev.gitlab.org` で、影響を受けるバージョンごとに失敗した `manifest-upload` ジョブを手動で再試行します。[omnibus-gitlab!9525](https://gitlab.com/gitlab-org/omnibus-gitlab/-/merge_requests/9525)以降、ジョブには `retry: 2` が設定されているため、一時的な失敗は自己修復されるはずです。手動再試行は、自己修復されないケースに対応します。

1. `dev.gitlab.org` のジョブ URL に移動します
1. **Retry** をクリックします
1. ジョブが正常に完了することを確認します

この再試行は自動化されていないため、手動ステップのままです。再試行では修正できない理由 (リリースが置き換えられた、再タグ付けされた、またはマイナーバージョン全体に影響する広範な公開問題) でマニフェストが不足している場合は、SRE と Issue を作成するか、Slack でリリースチームに尋ねてエスカレーションします。[`sbom-missing-manifest`](https://gitlab.com/gitlab-org/sbom/systems/backfiller/-/blob/main/skills/sbom-missing-manifest/SKILL.md) スキルでは、どのケースに該当するかの確認方法とエスカレーション先を扱っています。

### ステップ 5 — `Generate licence pages` スケジュールパイプラインを起動する

`manifest-upload` が成功するとマニフェストが公開されますが、別のステップでマニフェストインデックスが再生成されるまで読み取れません。`gitlab.com` で [`Generate licence pages` スケジュールパイプライン](https://gitlab.com/gitlab-org/omnibus-gitlab/-/pipelines)を起動します。具体的には、その中の `pages` ジョブがマニフェストインデックスを再生成し、JSON ファイルを公開します。

1. `gitlab-org/omnibus-gitlab` の **CI/CD > Schedules** に移動します
1. `Generate licence pages` スケジュールを手動で実行するか、次回のスケジュール実行を待ちます
1. `pages` ジョブを監視し、正常に完了することを確認します

このステップは自動化しません。ステップ 4 の `manifest-upload` の再試行が成功した後にのみ役立ちます。その再試行は手動であるため、このステップだけを自動化しても、その前に手動再試行が残るだけで、得られるものはありません。

### ステップ 6 — マニフェストが公開されたことを確認する

この確認は任意です。マニフェストの再確認は、実行ごとにバックフィラー自身が最初に行うステップであるため、次回のスケジュール実行では、ブロックされた各バージョンに対してこの確認を正確に繰り返し、結果に基づいて処理し、マニフェストが存在すれば SBOM を作成します。その実行が正式な検証となります。待たずにすぐ確認するには、以前に不足していたバージョンごとに次を実行します:

```bash
curl -sf "https://gitlab-org.gitlab.io/omnibus-gitlab/gitlab-manifests/gitlab-ee/<MAJOR.MINOR>/<VERSION>-ee.0-ee.version-manifest.json" \
  && echo "OK" || echo "MISSING"
```

[マニフェストインデックスページ](https://gitlab-org.gitlab.io/omnibus-gitlab/gitlab-manifests/manifests.html)に期待されるすべてのバージョンが一覧表示されていることも確認できます。

### ステップ 7 — 完了処理

マニフェストが公開されると、次回のスケジュール実行が不足している SBOM を作成し、追跡 Issue を自動的にクローズするため、それ以上のアクションはありません。追跡 Issue を手動でクローズしないでください。タイトルに記載されたすべてのバージョンに SBOM パッケージがあることを確認すると、バックフィラーがクローズします。

あるバージョンのマニフェストを作成できない場合 (リリースが置き換えられた、再タグ付けされた、またはアーティファクトが破損している場合)、実行のたびに報告されないよう、代わりに `bin/backfill` の `ignore_tags` に含めます。これはセキュリティリリースに意図的に SBOM を用意しないという判断であるため、まずセカンドオピニオンを得るのが最善です。基準は [README](https://gitlab.com/gitlab-org/sbom/systems/backfiller/-/blob/main/README.md) の「`ignore_tags` へのエントリ追加」に記載されています。

### 自動化されているものと、されていないもの

| タスク | ステータス | 注記 |
|---|---|---|
| 不足している SBOM とマニフェストを検出する | 自動 | スケジュールされた `backfill` ジョブがリリースタグと SBOM パッケージを比較する |
| マニフェストが存在する場合に SBOM を作成する | 自動 | 冪等であるため、再実行しても安全 |
| 追跡とアラート | 自動 | 追跡 Issue をオープンおよびクローズし、失敗した実行からチームへ Slack アラートを投稿する |
| `dev.gitlab.org` の `manifest-upload` ジョブを再試行する | 手動のみ | 自動化されていないため、手動で再試行する |
| `Generate licence pages` を起動する | スケジュールまたは手動 | 毎日のスケジュールで自動実行されるか、手動で起動できる。ステップ 4 の再試行のダウンストリーム |
| 再試行では修正できないマニフェストをエスカレーションする | 手動 | SRE と Issue を作成するか、Slack でリリースチームに尋ねる |
