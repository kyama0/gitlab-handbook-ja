---
title: "Google Chrome"
upstream_path: /handbook/security/corporate/systems/google/chrome/
upstream_sha: 1e195b58b9f249ff10bd0e705106c320fee86141
translated_at: "2026-05-10T00:00:00Z"
translator: claude
stale: false
---

## Chrome プロファイルが重複して作成された

このガイドは、追加の Google Chrome プロファイルが作成され、ブックマークをすべて失ってしまったチームメンバーを支援するためのものです。

## 手順

🚨 **必読:** 手順を実行する前に、以下のすべての手順を読んでください。誤ったプロファイルを削除してしまった場合、削除済みの Chrome プロファイルを復元することはできません。 🚨

### 新たに作成されたプロファイルの削除

1. Chrome を開きます。
2. Chrome の右上のプロファイル写真をクリック → **Chrome プロファイルを管理** を選択します。
3. Chrome に個人用プロファイルを追加していないと仮定すると、2 つのプロファイルが表示されるはずです。1 つはおそらく **Person 1** とラベル付けされ、もう 1 つは **gitlab.com** とラベル付けされています。
    ![image](/images/security/corporate/systems/google/chrome/image-1.png)
4. **Person 1** が元のプロファイルで、ブックマーク、履歴、生体認証情報などが含まれています。
5. **gitlab.com** はその後で新しく作成されたプロファイルになります。
6. どちらの Chrome プロファイルが削除すべき正しいものかを確認するには、プロファイル名の横にある三点リーダーをクリックして「削除」を選択し、ブックマークの数などを確認します。
7. 削除すべき正しいプロファイルは、ブックマークや自動入力データなどが**少ない**方になります。
        ![image](/images/security/corporate/systems/google/chrome/image-2.png)
        ![image](/images/security/corporate/systems/google/chrome/image-3.png)

### 正しいプロファイルの読み込み

1. ブックマーク／閲覧履歴などすべてが含まれている古いプロファイルを開きます。上記の例に基づくと、**Person 1** になります。
2. **組織にプロファイルが必要です** というポップアップが表示されたら、**既存の閲覧データを管理対象プロファイルに追加** のチェックボックスをオンにします。
    ![image](/images/security/corporate/systems/google/chrome/image-4.png)
3. **同期を有効にする** プロンプトが表示されたら、**はい、参加します** をクリックします。これにより、ブックマークや閲覧履歴などが業務用 Google アカウントにバックアップされます。
    ![image](/images/security/corporate/systems/google/chrome/image-5.png)
4. ブックマークや閲覧履歴などが復元されているはずです。
