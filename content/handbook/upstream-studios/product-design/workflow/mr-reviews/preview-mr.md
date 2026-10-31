---
title: マージリクエストの変更をプレビューする
description: "マージリクエスト（MR）の変更をレビュー、テスト、または貢献するためにプレビューする方法。"
upstream_path: /handbook/upstream-studios/product-design/workflow/mr-reviews/preview-mr/
upstream_sha: 52419353ea755a1ac823553385f8636ff2fcde17
translated_at: "2026-10-31T21:04:19.033086+00:00"
translator: codex
stale: false
lastmod: "2026-10-30T14:17:26-04:00"
---

## 概要 {#overview}

このページでは、マージリクエスト（MR）の変更をプレビューするさまざまな方法を説明します。
レビュープロセス全体については、[Product Designer の MR レビュー](/handbook/upstream-studios/product-design/workflow/mr-reviews)を参照してください。

## プレビューオプション {#preview-options}

以下の方法を使用して、アプリ、ドキュメント、Pajamas、または会社のハンドブックの MR の変更をプレビューできます。

- **GitLab Development Kit (GDK)**（[はじめに](#gdk)と[ヘルプ](#help)）：ローカルマシンで GitLab を実行します。技術的な知識が必要で、更新時に壊れることがあります。
- **Review Apps**（[はじめに](#review-apps)）：各 MR に対して作成される固有のリンクです。ドキュメントには最適ですが、GitLab インスタンスには制限があります（[改善が計画されています](https://gitlab.com/groups/gitlab-org/-/epics/6660)）。
- **作成者と同期**：非同期コミュニケーションを優先していますが、MR 作成者との短い通話が最も効率的なアプローチである場合もあります。

{{% details summary="比較表" %}}

| | GDK（ローカル） | Review App | 作成者と同期 |
|------|------|------|------|
| 初回起動* | 🐢 非常に遅い（30 分以上） | GitLab（30 分超）<br>ドキュメント（20 分超）<br>Pajamas（約 10 分）<br>ハンドブック（約 10 分）| 🏃‍♀️ 速い（数分） |
| 再起動 | 🤷 マシンに依存 | 🚀 非常に速い（数秒） | 🏃‍♀️ 速い（数分） |
| 変更を加える | ✅ | ❌ | ✅ |
| プレビュー／テスト | ✅ | ✅ | ✅ |
| 状態を保存<sup>§</sup> | ✅ | ✅ | N/A |
| フィーチャーフラグの切り替え | ✅ | ✅ | ✅ |
| GitLab インスタンス用のテストデータ | ✅ | ✅ | N/A |

{{% /details %}}

### コントリビューション {#contributing}

Product Designers は Git と DevOps のフローに関する一般的な知識を持つべきです。GitLab をライブ環境で使用し、小さな貢献を行うことで、以下を身に付けられます。

- ユーザーワークフローへの共感。
- プロダクトの理解。
- 小さな改善を直接行うスキル（UI コピー、コンポーネント移行など）。

### GDK {#gdk}

- [ワンライナーインストール](https://gitlab-org.gitlab.io/gitlab-development-kit/#one-line-installation)
- [📺 GDK で MR をレビューする](https://www.youtube.com/watch?v=M7b19Dq-1tw&list=PL05JrBw4t0KqrLsB8wlEhl2F9hXZlMmNR&index=11)
- [開発サーバーを閲覧する](https://gitlab-org.gitlab.io/gitlab-development-kit/howto/browse/)
- [GDK コマンド](https://gitlab-org.gitlab.io/gitlab-development-kit/gdk_commands/)（起動、停止、更新など）
- [GitLab をプレビュー／変更する](https://gitlab-org.gitlab.io/gitlab-development-kit/howto/preview_gitlab_changes/)
- [ドキュメントをプレビュー／変更する](https://gitlab-org.gitlab.io/gitlab-development-kit/howto/gitlab_docs/)
- [GitLab 有料ライセンスを適用する](https://gitlab-org.gitlab.io/gitlab-development-kit/index/#use-gitlab-enterprise-features)
- [フィーチャーフラグを切り替える](https://gitlab-org.gitlab.io/gitlab-development-kit/howto/preview_gitlab_changes/#enable-or-disable-gitlab-feature-flags)
- [GDK のその他の How-to トピック](https://gitlab-org.gitlab.io/gitlab-development-kit/howto/)

### Review Apps {#review-apps}

- [MR で Review Apps を使用する](https://docs.gitlab.com/ci/review_apps/#how-review-apps-work)
- [Review Apps にログインする](https://docs.gitlab.com/development/testing_guide/review_apps/#log-into-my-review-app)
- [自動停止を防ぐ](https://docs.gitlab.com/development/testing_guide/review_apps/#auto-stopping-of-review-apps)
- [📺 フィーチャーフラグを切り替える](https://www.youtube.com/watch?v=VBo667LiwBQ)。`curl` や [Postman](https://www.postman.com)などのツールを使用してフィーチャーフラグを有効化できます。

## ヘルプ {#help}

行き詰まった場合：

1. GDK を使用している場合、まず[自分でトラブルシューティング](https://gitlab-org.gitlab.io/gitlab-development-kit/troubleshooting/)を試みてください。
   その後、躊躇せずに助けを求めてください（以下参照）。
1. **GDK ヘルプ**
    1. [ヘルプを得る](https://gitlab.com/gitlab-org/gitlab-development-kit#getting-help)を参照してください。
    1. `#gdk` Slack チャンネルで質問してください。
    1. 連絡先：[Taurie Davis](https://gitlab.com/tauriedavis)、[Sunjung Park](https://gitlab.com/sunjungp)
