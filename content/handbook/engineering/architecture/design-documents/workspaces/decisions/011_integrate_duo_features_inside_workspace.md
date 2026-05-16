---
title: "Workspaces ADR 011: ワークスペース内に GitLab Duo 機能を統合する"
upstream_path: /handbook/engineering/architecture/design-documents/workspaces/decisions/011_integrate_duo_features_inside_workspace/
upstream_sha: 3480299851f7e2243d4f08b75dac452f89929636
translated_at: "2026-04-27T00:00:00Z"
translator: claude
stale: false
lastmod: "2025-03-19T23:08:59-07:00"
---

## コンテキスト

GitLab は AI 機能をリリースしており、それらを統合してドッグフーディングすべきです。ワークスペースに GitLab Duo および関連機能を統合する方法が必要です。

## 決定事項

Workspaces 向け GitLab VS Code フォークと合わせて GitLab Workflow 拡張機能をサイドロードすることを決定しました。この拡張機能はすでに GitLab Duo、Duo Chat、その他の AI 機能との統合を備えています。拡張機能は認証と認可のために、ワークスペース内に注入されたユーザーの Personal Access Token（PAT）を利用します。

詳細は[こちら](https://gitlab.com/groups/gitlab-org/-/epics/12780)をご参照ください。

## 影響

GitLab Workflow 拡張機能が GitLab Duo および Duo Chat とともにすべてのワークスペースで利用可能になります。これにより他の GitLab プロジェクトのドッグフーディングが可能になるため、良い結果です。

ワークスペースに注入される PAT のスコープには `api` アクセスが含まれることになります。

## 代替案

他の代替案は検討しませんでした。
