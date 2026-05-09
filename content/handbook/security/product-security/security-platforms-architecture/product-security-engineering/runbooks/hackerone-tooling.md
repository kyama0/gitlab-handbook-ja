---
title: "HackerOne ツール"
upstream_path: /handbook/security/product-security/security-platforms-architecture/product-security-engineering/runbooks/hackerone-tooling/
upstream_sha: 1e195b58b9f249ff10bd0e705106c320fee86141
translated_at: "2026-05-09T12:40:09Z"
translator: claude
stale: false
---

## HackerOne ツール Runbook

この Runbook は、アプリケーションセキュリティチームの HackerOne プロセスをサポートするために作成された一連のツールに関連する情報を扱います。

## リポジトリ一覧

この Runbook の情報は、次のリポジトリにあるツールやサービスのデバッグ、保守、サポートに役立つ場合があります:

- [h1bot](https://gitlab.com/gitlab-com/gl-security/engineering-and-research/automation-team/h1bot)、インポート関連の機能を提供
  - 関連項目: [h1bot 設定とデプロイ](https://gitlab.com/gitlab-private/gl-security/engineering-and-research/automation-team/kubernetes/secauto/h1bot)
- [h1-gitlab](https://gitlab.com/gitlab-com/security-tools/h1-gitlab)、いくつかの GitLab Issue ライフサイクル管理タスクを実行
- [h1-attachments](https://gitlab.com/gitlab-com/gl-security/engineering-and-research/automation-team/h1-attachments)、インポートされた HackerOne の添付ファイルを提供
  - 関連項目: [h1-attachments 設定とデプロイ](https://gitlab.com/gitlab-private/gl-security/engineering-and-research/automation-team/kubernetes/secauto/h1-attachments)

## 再デプロイ

h1bot および h1-attachments は、GitLab の継続的デリバリ機能を使用してデプロイされます。場合によっては、環境を再デプロイすることで、添付ファイルサーバーへのリクエストタイムアウトなど、ツールの問題が解決されることがあります。

これらを再デプロイするには:

1. 適切な設定とデプロイのプロジェクトにアクセス
1. プロジェクトビューの左側にある `Operate` メニューオプションの下で、[Environments](https://docs.gitlab.com/ee/ci/environments/) をクリック
1. `live` 環境について、[環境への再デプロイの手順に従う](https://docs.gitlab.com/ee/ci/environments/#retry-or-roll-back-a-deployment)
