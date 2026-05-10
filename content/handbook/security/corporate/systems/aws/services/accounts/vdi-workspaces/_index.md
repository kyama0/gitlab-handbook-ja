---
title: Amazon Workspaces (VDI)
description: Amazon WorkSpaces を使用すると、仮想のクラウドベース Microsoft Windows、Amazon Linux 2、Ubuntu Linux、または Red Hat Enterprise Linux デスクトップをプロビジョニングできます。Windows でしか動作しないソフトウェアを使用する場合は、Windows VDI が必要になります。
upstream_path: /handbook/security/corporate/systems/aws/services/accounts/vdi-workspaces/
upstream_sha: 1e195b58b9f249ff10bd0e705106c320fee86141
translated_at: "2026-05-10T00:00:00Z"
translator: claude
stale: false
---

## アクセス申請の方法

次のリンクから AR を作成するだけです: https://gitlab.com/gitlab-com/team-member-epics/access-requests/-/issues/new?issuable_template=Individual_Bulk_Access_Request

## 認証方法

ユーザーの IPv4 アドレスを提供していただいた後、その IP を許可リストに追加します。その後、ユーザーは以下のリンクから AWS Workspace クライアントをダウンロードする必要があります:
https://clients.amazonworkspaces.com/

## メンテナンスポリシー

Workspaces は時々 unhealthy ステータスになることがあります。再起動することで解決する場合があります。それでも解決しない場合は、VDI を再構築します。

## AWS ドキュメント

https://docs.aws.amazon.com/workspaces/latest/adminguide/amazon-workspaces.html
