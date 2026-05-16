---
title: Environments グループ - Environments グループ向け GitLab 品質保証エンドツーエンドテスト
upstream_path: /handbook/engineering/devops/runner/environments/quality/
upstream_sha: 1065c86ab1ba75adefbb07560d726608885e6d4e
translated_at: "2026-04-28T13:32:34Z"
translator: claude
stale: false
lastmod: "2025-12-05T19:47:34+00:00"
---

## 概要

このページの目的は、Environments グループが [GitLab QA フレームワーク](https://gitlab.com/gitlab-org/gitlab-qa)（[動画ウォークスルー](https://www.youtube.com/watch?v=enfx6tiz5WY)）を使って[エンドツーエンドテスト](https://docs.gitlab.com/ee/development/testing_guide/end_to_end/)を実装・実行する方法を文書化することです。

<figure class="video_container">
  <iframe src="https://www.youtube.com/embed/enfx6tiz5WY" frameborder="0" allowfullscreen="true"> </iframe>
</figure>

[上記ウォークスルーのサポートスライド](https://docs.google.com/presentation/d/1KyJ3Q2_tl38Axb-Esi7SNM8yEtqj40O4itfJrHuV7C4/edit?usp=sharing)

### なぜエンドツーエンドテストが必要か

> エンドツーエンドテストは、アプリケーションがソフトウェアスタックとアーキテクチャ全体にわたって期待どおりに動作するかどうかを確認するための戦略で、連携して機能するはずのすべてのマイクロサービスとコンポーネントの統合も含まれます。

[このテストピラミッドのレベル](https://docs.gitlab.com/ee/development/testing_guide/testing_levels.html)のテスト戦略は、[Environments テストプラン](https://gitlab.com/groups/gitlab-org/-/epics/8642) epic にあります。

### テストの場所

[GitLab リポジトリ](https://gitlab.com/gitlab-org/gitlab) において、Environments グループのエンドツーエンドテストは以下の場所にあります。

- `qa/qa/specs/features/api/7_configure/`
- `qa/qa/specs/features/browser_ui/7_configure/`
- `qa/qa/specs/features/ee/api/7_configure/`
- `qa/qa/specs/features/ee/browser_ui/7_configure/`

### 制限事項

Environments のエンドツーエンドテストは staging と staging-canary 環境でのみ実行されます。
テストコードを直接変更しない限り、ローカルの GDK に対してこの種のテストを実行することはできません。

### FAQ

#### e2e:test-on-omnibus ジョブを起動しました。テストはどこで見つけられますか？

MR があり、エンドツーエンドテストが実行されていることを確認したい場合は、MR のパイプラインで手動の `e2e:test-on-omnibus` ジョブを起動してください。パイプラインの実行後、MR にテストレポートリンクを含む「Allure report」というメモが表示されます。
`e2e:test-on-omnibus` パイプラインで失敗したジョブを直接確認することもできます。

**注意:** 現在、Environments に最も関連するテストは staging と staging canary 環境のみで実行されます。

#### staging または staging canary のテスト結果はどこで確認できますか？

[staging](https://ops.gitlab.net/gitlab-org/quality/staging/-/pipelines) で実行されるテストは https://ops.gitlab.net/gitlab-org/quality/staging/ へのアクセスが必要です。
テスト実行の結果は `#e2e-run-staging` Slack チャンネルでも確認できます。Environments に関連する staging パイプラインのジョブは以下のとおりです。

- `ee-qa-api`
- `qa-browser_ui-7_configure`

#### テストはどのリソースを使用し、どこで見つけられますか？

Environments エンドツーエンドテストは GCP の `gitlab-qa-resources` プロジェクトを使用して GKE クラスターを起動します。

#### 使用中の Kubernetes 向け GitLab Agent のクライアントバージョンは何ですか？

使用中のバージョンは [ランタイム環境変数ファイル](https://gitlab.com/gitlab-org/gitlab/-/blob/master/qa/qa/runtime/env.rb#L433) で確認できます。

### トラブルシューティング

`#s_developer_experience` チャンネルにお問い合わせください。

### 役立つドキュメント

- [テストガイド - エンドツーエンドテスト](https://docs.gitlab.com/ee/development/testing_guide/end_to_end/)
- [GitLab QA オーケストレーションツール](https://gitlab.com/gitlab-org/gitlab-qa)
- [GDK セットアップに対して QA テストを実行する](https://gitlab.com/gitlab-org/gitlab-qa/-/blob/master/docs/run_qa_against_gdk.md)
- [エンドツーエンドテスト作成の初心者ガイド](https://docs.gitlab.com/ee/development/testing_guide/end_to_end/beginners_guide.html)
