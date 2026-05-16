---
title: "Workspaces ADR 008: ワークスペース内の非 HTTP サービスへのアクセスに SSH を使用する"
upstream_path: /handbook/engineering/architecture/design-documents/workspaces/decisions/008_use_ssh_to_access_non_http_services/
upstream_sha: 3480299851f7e2243d4f08b75dac452f89929636
translated_at: "2026-04-27T00:00:00Z"
translator: claude
stale: false
lastmod: "2025-03-19T23:08:59-07:00"
---

## コンテキスト

ワークスペース内で動作している非 HTTP サービス（例: ユーザーがワークスペース内から実行している TCP サーバー）にアクセスする方法をユーザーに提供する必要があります。

## 決定

SSH を使用して、ワークスペース内で動作している HTTP/非 HTTP サービスにユーザーがアクセスできるようにします。
ユーザーはターミナルからワークスペースに直接 SSH 接続するか、SSH のリモート/ローカルポートフォワーディング機能を使用して目的を達成できます。
ユーザーにはコンテナイメージに SSH デーモンをインストールして設定することを期待しており、ワークスペースの起動時にそれを開始します。

詳細は [こちら](https://gitlab.com/groups/gitlab-org/-/epics/10478) をご覧ください。

## 結果

SSH を使用しない場合、ワークスペースで動作しているさまざまな種類のトラフィック（TCP、SSH、IMAP など）にアクセスする方法を提供する必要があります。

ユーザーにはコンテナイメージに SSH デーモンをインストールして設定することを期待しています。

## 代替案

他の代替案は検討しませんでした。
