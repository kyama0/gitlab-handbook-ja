---
title: Jamf MDM セットアップガイド
upstream_path: /handbook/security/corporate/systems/jamf/setup/
upstream_sha: 1e195b58b9f249ff10bd0e705106c320fee86141
translated_at: "2026-05-10T00:00:00Z"
translator: claude
stale: false
lastmod: "2025-06-26T03:27:50+00:00"
---

## 手動エンロール

GitLab から支給される新しい MacBook の多くは Jamf に自動的にエンロールされますが、ノートパソコンの購入方法によっては例外もあります。その場合、GitLab の社内サービスにアクセスするためにはノートパソコンを手動でエンロールする必要があります。

### 前提条件

1. 最新バージョンの macOS を実行できる MacBook
1. 最新の macOS インストール - [macOS をアップデートする](https://support.apple.com/en-us/108382)
1. 安定したインターネット接続 - **モバイルインターネットやホテルの Wi-Fi 等を使ってノートパソコンを Jamf にエンロールしようとしないでください。**
1. 有効な GitLab Okta アカウント
1. Okta Verify にエンロール済みのモバイルデバイス

**注意:** モバイルデバイスを Okta Verify にエンロールするのに支援が必要な場合は、Slack の #it_help にご連絡いただくか、it-help@gitlab.com までメールしてください。

### ステップ 1: Jamf エンロールメントを確認する

1. Mac の右上にあるリンゴアイコンをクリックし、`システム設定` を開きます
1. `一般` > `デバイス管理` を選択し、`MDM プロファイル` が存在するかを確認します
    1. `一般` の下に `デバイス管理` が表示されていない場合、ノートパソコンは Jamf にエンロールされていないため、`ステップ 2: エンロールメント` に進んでください
    1. `MDM プロファイル` がインストールされている場合、ノートパソコンは Jamf にエンロールされており、これ以上の操作は不要です。

### ステップ 2: エンロールメント

1. Google Chrome を開き、https://gitlab.jamfcloud.com/enroll にアクセスします
1. Okta の認証情報でサインインします
1. `Install` ボタンをクリックして `enrollmentProfile.mobileconfig` ファイルをダウンロードします
1. Chrome ウィンドウまたはダウンロードフォルダからダウンロードしたファイルをクリックします。画面の右上に、新しいプロファイルをインストールする必要があることを示す通知がポップアップ表示されます。
1. `システム設定` > `一般` > `デバイス管理` に戻ります
1. リストに `MDM プロファイル` が表示され、インストール待ちになっています
1. `MDM プロファイル` をダブルクリックし、`インストール` を選択します
1. プロンプトが表示されたらノートパソコンのログインパスワードを入力し、インストールが完了するまで待ちます。
1. ノートパソコンに Jamf プロファイルがインストールされると、ノートパソコンは [Installomator プロセス](/handbook/security/corporate/end-user-services/laptop-management/laptop-security/updates/#process-details)を開始するはずです。
