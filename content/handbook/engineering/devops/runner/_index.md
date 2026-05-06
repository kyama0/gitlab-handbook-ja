---
title: "Runner"
description: "GitLab Runner チームページ。"
upstream_path: /handbook/engineering/devops/runner/
upstream_sha: 1065c86ab1ba75adefbb07560d726608885e6d4e
translated_at: "2026-04-28T13:32:34Z"
translator: claude
stale: false
---

## ビジョン

2025年までに、GitLab Runner に関して私たちが掲げるビジョンは、大規模環境でのセットアップと日常運用がほぼゼロフリクションな体験になることです。

## ミッション

私たちのミッションは、あらゆるコンピューティングプラットフォーム上で GitLab CI/CD ジョブを効率的に実行できるよう組織を支援し、あらゆる規模において運用効率が高く高度なセキュリティを持つ方法でそれを実現することです。

## チーム構成

Verify:Runner は 2 つのチームで構成されています。

- [CI Functions Platform](/handbook/engineering/devops/runner/ci-functions-platform/)
- [Runner Core](/handbook/engineering/devops/runner/runner-core/)

### CI Functions Platform


<p class="my-3 text-sm text-gray-600 italic">チームメンバー情報は <a href="https://handbook.gitlab.com/handbook/engineering/devops/runner/#ci-functions-platform" rel="external noopener">原文 (英語)</a> を参照してください。</p>


### Runner Core


<p class="my-3 text-sm text-gray-600 italic">チームメンバー情報は <a href="https://handbook.gitlab.com/handbook/engineering/devops/runner/#runner-core" rel="external noopener">原文 (英語)</a> を参照してください。</p>


### Runner Leadership


<p class="my-3 text-sm text-gray-600 italic">チームメンバー情報は <a href="https://handbook.gitlab.com/handbook/engineering/devops/runner/#runner-leadership" rel="external noopener">原文 (英語)</a> を参照してください。</p>


## 連絡方法

Slack

- [`#runner_help`](https://gitlab.slack.com/archives/CBQ76ND6W)
- [`#g_runner_core`](https://gitlab.slack.com/archives/C09EDQXBMPH)
- [`#g_ci_functions_platform`](https://gitlab.slack.com/archives/C09HJ2UL9L4)

サポートリクエスト:
カスタマーサポートリクエストは、Request for Help プロジェクトの [Issue を作成](https://gitlab.com/gitlab-com/request-for-help/-/issues/new?issuable_template=SupportRequestTemplate-Runner)してください。

## 安定したカウンターパート

カウンターパートの包括的なリストについては、[Runner プロダクトカテゴリ](/handbook/product/categories/#runner-group) を参照してください。

## 技術ビジョン

Runner Core と CI Functions Platform チームの優先事項と技術ロードマップは、[Runner 技術ビジョン](/handbook/engineering/architecture/design-documents/runner_technical_vision/) によって導かれています。これは GitLab Runner があらゆる規模で CI/CD ワークロードの簡単なインストール・設定・実行をサポートするために進化する方法を定義するアーキテクチャ設計書です。

## 作業の進め方

### 優先度フレームワーク

私たちのチームは、複数の重要な要素に基づいて優先順位を明確に維持しています（優先度順）。

- **強制優先度 Issue**（infradev、セキュリティ、可用性）は最高優先度として即時にリソースを割り当てます
- **重大バグの解決**により品質と信頼性を維持します
- **長期ビジョンを推進する戦略的方向性の機能**
- **技術的負債の削減**により持続可能な開発速度を確保します
- **システムの健全性を保つメンテナンス活動**
- **ユーザーに価値をもたらし、コントリビューター参加を支援するコミュニティコントリビューション**

このフレームワークはリソース割り当ての意思決定を導き、GitLab Runner の信頼性・セキュリティ・継続的な進化において最も重要な事項に集中できるようにします。

## 共有責任

Runner Core と CI Functions Platform グループは自律的に運営されていますが、メンテナンスのオーバーヘッドを分散するために特定の責任を共同で担います。

### リリース

各イテレーションの終わりに、Runner と関連プロジェクトをリリースします。リリースプロセスは [releases プロジェクトの README](https://gitlab.com/gitlab-org/ci-cd/runner-tools/releases/-/blob/main/README.md) に記載されています。

Runner プロジェクト Wiki には [リリース済み Runner バージョンの一覧](https://gitlab.com/gitlab-org/gitlab-runner/-/wikis/Released-runner-versions) を管理しています。

#### リリースマネージャーのローテーション

各マイルストーンごとに、[team-tasks プロジェクト](https://gitlab.com/gitlab-com/runner-group/team-tasks/-/issues?sort=created_date&state=opened&first_page_size=100) に自動で Issue が作成され、そのイテレーションのリリースマネージャーとして 1 名のエンジニアが割り当てられます。この自動化は [team-tasks-release-rotation プロジェクト](https://gitlab.com/gitlab-org/ci-cd/runner-tools/team-tasks-release-rotation) によって管理されます。

生成された各 Issue にはリリースプロセスを完了するための詳細な手順が含まれています。割り当てられたチームメンバーが担当リリース期間中に不在となる場合、その人が代替者を探す責任を負います。

### メンテナンスローテーション

Runner チームは、サポート・トリアージ・コミュニティエンゲージメント活動の継続的なカバレッジを確保するため、週次のローテーションによるメンテナンス割り当てを行っています。

#### 仕組み

毎週、[team-tasks プロジェクト](https://gitlab.com/gitlab-com/runner-group/team-tasks/-/issues) に役割割り当てを含む Issue が自動作成されます。チームメンバーは異なる担当をローテーションし、作業負荷を分散しつつ、全員がチーム運営のすべての側面に習熟できるようにしています。

#### 担当内容

各セクションの詳細な手順は、チームタスクジェネレーターの [Issue テンプレート](https://gitlab.com/gitlab-org/ci-cd/runner-tools/runner-team-task-issue-generator/-/blob/main/template.md?ref_type=heads)に記載されています。

| タスク | 説明 |
| ------ | ------ |
| **🐛 バグ担当者 🤠** | 受信したバグが適切な重大度と優先度ラベルを持つようトリアージを担当します。 |
| **🛟 サポート & セキュリティ対応者 🚒** | 受信したセキュリティ脆弱性やサポートリクエストの監視・ラベル付け・対応を担当します。セキュリティレビュープロセスの詳細については、チームリソースページをご覧ください。 |
| **🥷 マージ担当者 🏴‍☠️** | コミュニティコントリビューターのマージリクエストが適時に対応されるよう担当します。 |
| **💬 コミュニティコントリビューションのトリアージ担当 📌** | 新しいコミュニティコントリビューションの初期トリアージを担当します。 |

#### 担当の確認方法

[team-tasks プロジェクト](https://gitlab.com/gitlab-com/runner-group/team-tasks/-/issues) の今週の Issue で自分の担当を確認してください。Issue は毎週月曜日に自動作成され、週のローテーションスケジュールと各職務の完了を追跡するためのチェックボックスが含まれています。

## チームリソース

[専用ページ](/handbook/engineering/devops/runner/team-resources/#overview)をご覧ください。
