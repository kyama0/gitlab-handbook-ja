---
title: 1Password セットアップガイド
upstream_path: /handbook/security/corporate/systems/1password/setup/
upstream_sha: 1e195b58b9f249ff10bd0e705106c320fee86141
translated_at: "2026-05-10T00:00:00Z"
translator: claude
stale: false
lastmod: "2024-11-01T18:42:22+00:00"
---

入社初日に、利用開始のための招待メールが届きます。サービス別またはチーム別の Vault へのアクセスは、オンボーディングの中で、もしくはアクセスリクエストを通じて付与されます。

追加のメリットとして、すべてのチームメンバーには無料の[ファミリーアカウント](https://support.1password.com/link-family/)も提供されており、業務用とは別のアカウント・Vault で個人のパスワードを保護できます。

- [ベンダードキュメント - はじめに](https://support.1password.com/explore/team-member/)
- [ベンダードキュメント - Mac への 1Password のインストール](https://support.1password.com/get-the-apps/?mac)
- [1Password Chrome 拡張機能](https://chromewebstore.google.com/detail/1password-%E2%80%93-password-mana/aeblfdkhhhdcdjpifhhbdiojplfjncoa?hl=en&pli=1)
- [ベンダードキュメント - Mac での利用開始](https://support.1password.com/getting-started-mac/)
- [ベンダードキュメント - パスワードの保存と入力](https://support.1password.com/save-fill-passwords/)
- [ベンダードキュメント - パスワードを安全に共有する](https://support.1password.com/share-items-security/)

## トラブルシューティングのヒント

### 管理者アカウントでの 1Password 拡張機能の連携

副次的な 1Password アカウントへのアクセス権を持つユーザーは、Black Chrome プロファイル上の 1Password Chrome 拡張機能が、デスクトップアプリと自動連携する設定になっていないことを必ず確認してください。この設定は、1Password または Chrome のメジャーアップデート後に再び有効になる場合があります。

1. Chrome の右上にある**プラグインアイコン**（パズルピース）をクリックし、1Password の隣にある**3 点ドット**メニューをクリックして、**設定**を選択します。
2. 左サイドバーの **General** セクションで、`Integrate this extension with the 1Password desktop app` が無効になっていることを確認します。
3. 左サイドバーで **Accounts & vaults** に移動します。
4. 通常のユーザーアカウント（`{handle}-admin@gitlab.com` ではなく `{handle}@gitlab.com`）が表示されている場合は、3 点ドットをクリックして **Sign Out** を選択します。他に表示されているアカウント（個人の 1Password メールアドレスなど）についても、同じ操作を繰り返します。
5. 管理者アカウントが表示されていない場合は、**Sign in to another account** をクリックします。1Password のウェブサイトにリダイレクトされたら、`gitlab.1password.com` のタイルを選び、`{handle}-admin@gitlab.com` のメールアドレスが表示されていることを確認した上で、マスターパスワードを入力します。
6. 右上の 1Password 拡張機能に管理者の認証情報が表示されるようになります。
