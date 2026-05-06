---
title: "Workspaces ADR 007: プライベートプロジェクトからのワークスペース作成"
upstream_path: /handbook/engineering/architecture/design-documents/workspaces/decisions/007_create_workspace_from_private_projects/
upstream_sha: 3480299851f7e2243d4f08b75dac452f89929636
translated_at: "2026-04-27T00:00:00Z"
translator: claude
stale: false
---

## コンテキスト

ユーザーがプライベートプロジェクトからワークスペースを作成できるようにしたいと考えています。

## 決定

新しいワークスペースごとにユーザーに紐づいたパーソナルアクセストークン（PAT）を作成し、ワークスペースに注入します。
このトークンはワークスペースの起動時にプロジェクトをクローンするために使用されます。
このトークンはユーザーがワークスペースを使用中に行うすべての git 操作に使用されます。

詳細は [こちら](https://gitlab.com/groups/gitlab-org/-/epics/10882) をご覧ください。

## 結果

トークンはワークスペース内で環境変数/ファイルとして利用可能になります。
信頼できないコンテナイメージが使用された場合、トークンが流出する可能性があります。

ユーザーは CI ジョブのように信頼できるプロジェクトからワークスペースをプロビジョニングすることが期待されているため、現時点ではこれは許容範囲です。

## 代替案

PAT の代わりに[エフェメラルトークン（JWT/OAuth/OIDC など）](https://gitlab.com/gitlab-org/gitlab/-/issues/421289#note_1511631931)の使用を検討しましたが、それぞれに独自の課題がありました。
これにより、[内部サービスと GitLab Rails モノリス間の標準化された認証と認可](https://gitlab.com/gitlab-org/gitlab/-/issues/421983) を持つという大きなニーズが明らかになりました。
