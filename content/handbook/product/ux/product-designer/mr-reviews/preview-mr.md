---
title: マージリクエストの変更をプレビューする
description: "マージリクエスト（MR）の変更をレビュー、テスト、または貢献するためにプレビューする方法。"
upstream_path: /handbook/product/ux/product-designer/mr-reviews/preview-mr/
upstream_sha: 1e195b58b9f249ff10bd0e705106c320fee86141
translated_at: "2026-05-13T00:00:00Z"
translator: claude
stale: false
---

## 概要

このページではマージリクエスト（MR）の変更をプレビューするさまざまな方法を示します。
レビュープロセス全体については、[プロダクトデザイナーの MR レビュー](/handbook/product/ux/product-designer/mr-reviews)を参照してください。

## プレビューオプション

以下の方法を使用して、アプリ、ドキュメント、Pajamas、または会社のハンドブックの MR 変更をプレビューできます。

- **Gitpod**（[はじめに](#gitpod)と[ヘルプ](#help)）: ワンクリックですぐに使えるアプリを提供するクラウド環境。GitLab インスタンス（GDK を使用、以下参照）、ドキュメント、Pajamas、ハンドブックで動作します。
- **GitLab Development Kit (GDK)**（[はじめに](#gdk)と[ヘルプ](#help)）: ローカルマシンで GitLab を実行します。技術的な知識が必要であり、更新時に壊れることがあります。
- **Review Apps**（[はじめに](#review-apps)）: 各 MR に対して作成される固有のリンク。ドキュメントには最適ですが、GitLab インスタンスには制限があります（[改善が計画されています](https://gitlab.com/groups/gitlab-org/-/epics/6660)）。
- **作成者と同期**: [非同期コミュニケーションを優先](/handbook/values/#bias-towards-asynchronous-communication)していますが、MR 作成者との短い通話が最も効率的なアプローチである場合もあります。

{{% details summary="比較表" %}}

| | Gitpod（クラウド） | GDK（ローカル） | Review App | 作成者と同期 |
|------|------|------|------|------|
| 初回起動* | 🏃‍♀️ 速い（5 分未満） | 🐢 非常に遅い（30 分以上） | GitLab（30 分以上）<br>Docs（20 分以上）<br>Pajamas（約 10 分）<br>Handbook（約 10 分）| 🏃‍♀️ 速い（数分） |
| 再起動 | 🏃‍♀️ 速い（2 分未満） | 🤷 マシンに依存 | 🚀 非常に速い（秒） | 🏃‍♀️ 速い（数分） |
| 変更を加える | ✅ | ✅ | ❌ | ✅ |
| プレビュー／テスト | ✅ | ✅ | ✅ | ✅ |
| 状態を保存<sup>§</sup>| ✅ | ✅ | ✅ | N/A |
| 機能フラグの切り替え | ✅ | ✅ | ✅ | ✅ |
| GitLab インスタンス用のテストデータ | ✅ | ✅ | ✅ | N/A |

{{% /details %}}

### コントリビューション

プロダクトデザイナーは Git と DevOps のフローに関する一般的な知識を持つべきです。GitLab をライブ環境で使用し、小さな貢献を行うことで以下が育まれます。

- ユーザーワークフローへの共感。
- プロダクトの理解。
- 小さな改善を直接行うスキル（UI コピー、コンポーネント移行など）。

### Gitpod

Gitpod を使用するには:

1. 無料の Gitpod アカウントを作成します。
1. GitLab アカウントに接続します。GitLab.com から起動するときに自動的に行われますが、動作しない場合は
[手動で接続する方法](https://www.gitpod.io/docs/configure/authentication/gitlab#connecting-your-gitlab.com-account)を参照してください。

リソース:

- [Gitpod を起動する](https://docs.gitlab.com/integration/gitpod/#launch-gitpod-in-gitlab)
- [GitLab プロジェクトの Gitpod](https://gitlab.com/gitlab-org/gitlab-development-kit/-/blob/main/doc/howto/gitpod.md)（つまりクラウド GDK）
- [📺 Gitpod を使い始める](https://www.youtube.com/watch?v=AOn7orCcTx8&list=PL05JrBw4t0KqrLsB8wlEhl2F9hXZlMmNR&index=13)
- [📺 Gitpod で MR をレビューする](https://www.youtube.com/watch?v=M7b19Dq-1tw&list=PL05JrBw4t0KqrLsB8wlEhl2F9hXZlMmNR&index=11)
- [GDK コマンド](https://gitlab.com/gitlab-org/gitlab-development-kit/-/blob/main/doc/gdk_commands.md)（起動、停止、更新など）
- [GitLab をプレビュー／変更する](https://gitlab.com/gitlab-org/gitlab-development-kit/-/blob/main/doc/howto/preview_gitlab_changes.md)
- [ドキュメントをプレビュー／変更する](https://gitlab.com/gitlab-org/gitlab-development-kit/-/blob/main/doc/howto/gitlab_docs.md)
- [GitLab 有料ライセンスを適用する](https://gitlab.com/gitlab-org/gitlab-development-kit/-/blob/main/doc/index.md#use-gitlab-enterprise-features)
- [追加の GitLab 機能を設定する](https://gitlab.com/gitlab-org/gitlab-development-kit/-/blob/main/doc/howto/gitpod.md#configure-additional-features)（runners、機能フラグ、高度な検索など）
- [GDK のその他の How-to トピック](https://gitlab.com/gitlab-org/gitlab-development-kit/-/blob/main/doc/howto/index.md)
- [ブランチをチェックアウトする](https://gitlab.com/gitlab-org/gitlab-development-kit/-/blob/main/doc/howto/gitpod.md#check-out-branches)
- [変更をコミットしてプッシュする](https://gitlab.com/gitlab-org/gitlab-development-kit/-/blob/main/doc/howto/gitpod.md#commit-and-push-changes)
- [ワークスペースの自動削除を防ぐ](https://www.gitpod.io/docs/configure/workspaces/workspace-lifecycle#garbage-collection)
- [Gitpod 公式ドキュメント](https://www.gitpod.io/docs)

### GDK

- [ワンライナーインストール](https://gitlab.com/gitlab-org/gitlab-development-kit/-/blob/main/doc/index.md#one-line-installation)
- [📺 GDK で MR をレビューする](https://www.youtube.com/watch?v=M7b19Dq-1tw&list=PL05JrBw4t0KqrLsB8wlEhl2F9hXZlMmNR&index=11)
- [dev サーバーを閲覧する](https://gitlab.com/gitlab-org/gitlab-development-kit/-/blob/main/doc/howto/browse.md)
- [GDK コマンド](https://gitlab.com/gitlab-org/gitlab-development-kit/-/blob/main/doc/gdk_commands.md)（起動、停止、更新など）
- [GitLab をプレビュー／変更する](https://gitlab.com/gitlab-org/gitlab-development-kit/-/blob/main/doc/howto/preview_gitlab_changes.md)
- [ドキュメントをプレビュー／変更する](https://gitlab.com/gitlab-org/gitlab-development-kit/-/blob/main/doc/howto/gitlab_docs.md)
- [GitLab 有料ライセンスを適用する](https://gitlab.com/gitlab-org/gitlab-development-kit/-/blob/main/doc/index.md#use-gitlab-enterprise-features)
- [機能フラグを切り替える](https://gitlab.com/gitlab-org/gitlab-development-kit/-/blob/main/doc/howto/preview_gitlab_changes.md#enable-or-disable-gitlab-feature-flags)
- [GDK のその他の How-to トピック](https://gitlab.com/gitlab-org/gitlab-development-kit/-/blob/main/doc/howto/index.md)

### Review Apps

- [MR で Review Apps を使用する](https://docs.gitlab.com/ci/review_apps/#how-review-apps-work)
- [Review Apps にログインする](https://docs.gitlab.com/development/testing_guide/review_apps/#log-into-my-review-app)
- [自動停止を防ぐ](https://docs.gitlab.com/development/testing_guide/review_apps/#auto-stopping-of-review-apps)
- [📺 機能フラグを切り替える](https://www.youtube.com/watch?v=VBo667LiwBQ)。`curl` や [Postman](https://www.postman.com) などのツールを使用して機能フラグを有効化できます。

## ヘルプ {#help}

行き詰まった場合:

1. GDK（ローカルまたは Gitpod 内）を使用している場合、まず[自分でトラブルシューティング](https://gitlab.com/gitlab-org/gitlab-development-kit/-/blob/main/doc/troubleshooting.md)を試みてください。
   その後、躊躇せずに助けを求めてください（以下参照）。
1. **Gitpod ヘルプ**
    1. `#gitpod-gdk` Slack チャンネルで質問してください。
    1. 連絡先: [Marcel van Remmerden](https://gitlab.com/mvanremmerden)
1. **GDK ヘルプ**
    1. [ヘルプを得る](https://gitlab.com/gitlab-org/gitlab-development-kit#getting-help)を参照してください。
    1. `#gdk` Slack チャンネルで質問してください。
    1. 連絡先: [Taurie Davis](https://gitlab.com/tauriedavis)、[Sunjung Park](https://gitlab.com/sunjungp)
