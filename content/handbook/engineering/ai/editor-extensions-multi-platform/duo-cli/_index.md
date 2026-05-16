---
title: Duo CLI
description: "私たちは GitLab Duo の AI 機能を開発者のターミナルに直接届けるインテリジェントなコマンドラインインターフェースを構築し、GitLab の DevSecOps プラットフォームとの自然言語による対話を通じて生産性を高めています。"
upstream_path: /handbook/engineering/ai/editor-extensions-multi-platform/duo-cli/
upstream_sha: 1e195b58b9f249ff10bd0e705106c320fee86141
translated_at: "2026-05-14T00:00:00Z"
translator: claude
stale: false
lastmod: "2026-05-08T14:13:21-07:00"
---

## チームメンバー

このツールは [エディター拡張機能: マルチプラットフォーム](/handbook/engineering/ai/editor-extensions-multi-platform/) のスコープに含まれます。


<p class="my-3 text-sm text-gray-600 italic">チームメンバー情報は <a href="https://handbook.gitlab.com/handbook/engineering/ai/editor-extensions-multi-platform/duo-cli/" rel="external noopener">原文 (英語)</a> を参照してください。</p>


### 安定したカウンターパート

以下のメンバーが Duo CLI グループの [安定したカウンターパート](/handbook/leadership/#stable-counterparts) です:


<p class="my-3 text-sm text-gray-600 italic">チームメンバー情報は <a href="https://handbook.gitlab.com/handbook/engineering/ai/editor-extensions-multi-platform/duo-cli/" rel="external noopener">原文 (英語)</a> を参照してください。</p>


## ビジョン

Duo CLI グループは、開発者が自然言語を用いて GitLab の DevSecOps プラットフォームと対話できる AI 駆動のコマンドラインインターフェースとして、GitLab Duo CLI の開発に注力しています。私たちの目標は、開発者が多くの時間を費やすターミナルに AI 駆動の支援を直接届けることで、開発者のワークフローを効率化することです。

## 内部プロセス

### 開発フェーズ

Duo CLI は現在、ドッグフーディングフェーズにあります。私たちの開発アプローチは以下のフェーズに従います:

| フェーズ | 説明 | ステータス |
| -------- | ------- | ------- |
| Ideation | コンセプト検証と初期リサーチ | ✅ 完了 |
| MVC | 最小限の検証可能コンセプト開発 | ✅ 完了 |
| Dogfooding | 内部ドッグフーディング | 📍 現在地 |
| Beta | ベータリリース | 📋 計画中 |
| GA | 一般提供 | 📋 計画中 |

## アクティブな作業、リソース、リンク

Duo CLI プロジェクトに関する情報、進行中の作業、コミュニケーションチャネルはこちら:

### 開発リソース

- **リポジトリ**: [GitLab Language Server](https://gitlab.com/gitlab-org/editor-extensions/gitlab-lsp/-/tree/main/packages/cli?ref_type=heads)
- **Issue トラッカー**: [Duo CLI アクティブな作業](https://gitlab.com/groups/gitlab-org/-/boards/9839597?epic_id=3743089)
- **Epic**: [Duo CLI 開発 Epic](https://gitlab.com/groups/gitlab-org/-/epics/19070)

### コミュニケーションチャネル

- **Slack**: `#f_duo_cli`

- **Issue でフィードバックをお寄せください**: [Duo CLI フィードバック Epic](https://gitlab.com/groups/gitlab-org/-/epics/19806)

## ドッグフーディング

Duo CLI は現在ドッグフーディングフェーズにあり、GitLab チームメンバーがツールを内部で使用・テストし、より広範なリリース前に機能を検証してフィードバックを収集しています。

### Duo CLI ドッグフーディング Epic

[Duo CLI ドッグフーディング Epic](https://gitlab.com/groups/gitlab-org/-/epics/19806)

### はじめに

最新版の Duo CLI を npm でインストールし、GitLab パーソナルアクセストークンを使って実行します:

**注:** API スコープのパーソナルアクセストークンを生成する必要があります:

1. GitLab プロフィールをクリックします
2. **Preferences** をクリックします
3. ナビゲーションの **Personal Access Tokens** をクリックします
4. `api` スコープで新しいパーソナルアクセストークンを作成します

### インストール

[インストールガイド](https://gitlab.com/groups/gitlab-org/-/epics/19806#installation)

**任意のターミナルで以下を実行してください:**

```bash
npm i -g @gitlab/duo-cli
duo
```

### フィードバックを通じて Duo CLI の形成にご協力ください

GitLab チームメンバーにとって CLI を効果的なものにするため、フィードバックを収集しています。以下のような中核的な開発ワークフローをぜひテストしてください:

- **コードタスク**: 生成、説明、リファクタリング、デバッグ、テスト記述
- **GitLab ワークフロー**: MR レビュー、Issue 分析、CI/CD デバッグ、セキュリティレビュー
- **高度なシナリオ**: 複数ファイルの変更、アーキテクチャ計画、大規模コードベース

**フィードバックカテゴリー:**

- **バグ**: クラッシュ、エラー、パフォーマンス問題にはバグテンプレートを使用
- **機能**: 不足している機能や強化要望には機能テンプレートを使用
- **使い勝手**: 紛らわしいワークフロー、不明瞭なエラー、ドキュメントの不足を報告
- **成功事例**: うまくいったことや生産性の向上事例を共有

---

*注: このページは現在初期開発フェーズにある Duo CLI イニシアチブを文書化したものです。プロジェクトの進行に応じて情報は更新されます。*
