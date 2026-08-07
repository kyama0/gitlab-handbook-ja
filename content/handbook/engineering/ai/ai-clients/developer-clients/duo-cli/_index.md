---
title: Duo CLI
description: "私たちは、GitLab Duo の AI 機能を開発者のターミナルに直接届けるインテリジェントなコマンドラインインターフェースを構築し、GitLab の DevSecOps プラットフォームとの自然言語によるやり取りを通じて生産性を高めています。"
aliases:
  - /handbook/engineering/ai/editor-extensions-multi-platform/duo-cli/
  - /handbook/engineering/ai/ai-clients/duo-cli/
upstream_path: /handbook/engineering/ai/ai-clients/developer-clients/duo-cli/
upstream_sha: d51496d2a9ca5dfcbd3a4eef779fc95c357103f3
lastmod: "2026-08-06T16:35:18+02:00"
translated_at: "2026-08-07T06:30:08+09:00"
translator: codex
stale: false
---

## 概要

Duo CLI 機能チームは、[Developer Clients グループ](/handbook/engineering/ai/ai-clients/developer-clients/)に属し、このグループは [AI Clients ステージ](/handbook/engineering/ai/ai-clients/)内にあります。

共通の計画プロセス、ワークフローボード、便利なリンク、ダッシュボードについては、[Developer Clients グループのページ](/handbook/engineering/ai/ai-clients/developer-clients/)を参照してください。

## 公開ドキュメント

[GitLab Duo CLI ドキュメント](https://docs.gitlab.com/user/gitlab_duo_cli/)

---

## 👨‍💻 チームメンバー

{{< group-by-slugs aelhusseiny tomasvik  elwyn-gitlab  mltheuser.gitlab ametke-jimenez andrei.zubov >}}

### 安定したカウンターパート

以下の人々は、Duo CLI チームの[安定したカウンターパート](/handbook/leadership/#stable-counterparts)です。

{{< group-by-slugs james.casey ychen16 >}}

---

## 💬 Slack

- **チームチャンネル：** [#f_duo_cli](https://gitlab.slack.com/archives/f_duo_cli)
- **公開ステージチャンネル：** [#s_ai-clients-questions](https://gitlab.enterprise.slack.com/archives/C058YCHP17C)

---

## 💻 スコープ

Duo CLI チームは、AI を活用したコマンドラインインターフェースとして GitLab Duo CLI を開発することに注力しています。これにより、開発者は自然言語を使って GitLab の DevSecOps プラットフォームとやり取りできます。私たちの目標は、開発者が多くの時間を費やすターミナルに AI を活用した支援を直接届け、開発者のワークフローを効率化することです。

---

## 🔗 進行中の作業、リソース、リンク

### 開発リソース

- **リポジトリ**： [GitLab Language Server — CLI パッケージ](https://gitlab.com/gitlab-org/editor-extensions/gitlab-lsp/-/tree/main/packages/cli?ref_type=heads)
- **Issue トラッカー**： [Duo CLI の進行中の作業](https://gitlab.com/groups/gitlab-org/-/boards/9839597?epic_id=3743089)
- **エピック**： [Duo CLI 開発エピック](https://gitlab.com/groups/gitlab-org/-/epics/19070)

### コミュニケーションチャンネル

- **Slack**： [#f_duo_cli](https://gitlab.slack.com/archives/f_duo_cli)
- または、Duo CLI から [`/feedback`](https://docs.gitlab.com/user/gitlab_duo_cli/use/#slash-commands) コマンドを使用するだけで GitLab Issue を作成できます

### Issue のラベル

[AI Clients のラベル付けガイダンス](/handbook/engineering/ai/ai-clients/#-how-we-label-issues-and-merge-requests)を確認してください

---

### はじめに

[はじめにガイド](https://docs.gitlab.com/user/gitlab_duo_cli/#get-started)

### フィードバックを提供して Duo CLI の形成にご協力ください

私たちは、GitLab チームメンバーにとって CLI を効果的なものにするため、フィードバックを収集しています。次のような主要な開発ワークフローをテストしてください。

- **コードタスク**： 生成、説明、リファクタリング、デバッグ、テスト作成
- **GitLab ワークフロー**： MR レビュー、Issue 分析、CI/CD デバッグ、セキュリティレビュー
- **高度なシナリオ**： 複数ファイルの変更、アーキテクチャ計画、大規模なコードベース

**フィードバックのカテゴリー：**

- **バグ**： クラッシュ、エラー、パフォーマンスの問題にはバグテンプレートを使用します
- **機能**： 不足している機能や改善には機能テンプレートを使用します
- **ユーザビリティ**： 分かりにくいワークフロー、不明瞭なエラー、ドキュメントの不足を報告します
- **成功事例**： うまく機能していることや生産性向上の成果を共有します
