---
title: NordLayer VPN トラブルシューティングガイド
upstream_path: /handbook/security/corporate/systems/vpn/troubleshooting/
upstream_sha: 1e195b58b9f249ff10bd0e705106c320fee86141
translated_at: "2026-05-10T00:00:00Z"
translator: claude
stale: false
---

## 概要

- [ベンダーのドキュメント](https://help.nordlayer.com/)

## FAQ

### Linux VPN プロトコル

NordLayer 接続で問題が発生している場合、最初に取るべき対処は VPN プロトコルを変更することです。`nordlayer settings set` コマンドを実行し、**VPN protocol** を選択することで変更できます。

### Windows 10 における十分な権限

`Verify that you have sufficient privileges to start system services`

NordLayer アプリケーションを Windows 10 にインストール中に「Verify that you have sufficient privileges to start system services（システムサービスを開始する十分な権限があることを確認してください）」というエラーが表示される場合は、Windows 10 が最新バージョンであることを確認してください。

### Linux で応答がない

この状況に陥った場合は、以下のコマンドを入力してアプリケーションを強制終了し、再起動する必要があります。

```shell
sudo systemctl kill -s SIGKILL nordlayer.service
sudo systemctl start nordlayer.service
```

### Mac での VPN 認証

VPN 認証ウィンドウが画面上に常時ポップアップする場合は、**System Preferences -> Network** に移動し、NordLayer 接続を選択してください。**Connect on Demand** が無効になっていることを確認した上で、**Cancel** をクリックすると、ポップアップは再表示されなくなります。

それでもポップアップが表示される場合は、Mac を再起動し、NordLayer アプリをゴミ箱にドラッグしてください。完了したら、AppStore から直接 NordLayer アプリケーションを再インストールします。
