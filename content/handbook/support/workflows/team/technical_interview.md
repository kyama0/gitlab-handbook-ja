---
title: 技術面接のセットアップ
category: Support Team
description: 技術面接インスタンスのセットアップに関する情報
upstream_path: /handbook/support/workflows/team/technical_interview/
upstream_sha: c8fa138220d8c6d69f811b17242d6d2f08e4e409
translated_at: "2026-05-08T05:34:58Z"
translator: claude
stale: false
lastmod: "2025-03-06T09:48:31-05:00"
---

## Sandbox 経由で技術面接インスタンスをセットアップする

### Sandbox での初期セットアップ

1. <https://gitlabsandbox.cloud/cloud>
1. GCP を使用 - 私たちはこれを GCP でのみテストしました
1. アカウントを選択（未選択の場合）
1. 「Create Terraform Environment」
1. Cloud account では自分のアカウントを選択（まだ選択されていない場合）
1. Environment Template「support-interview-resources-template-v2-x」を選択
1. Environment Name を付けます
    - この Environment は決して削除せず、その背後にある VM インスタンスのみを削除するため、何のためのものかを表す適切な名前を付けてください。
1. 「Create Environment」をクリック
1. 次のセクションに進む前に、概要画面に戻るまで待ちます。

### 面接インスタンスを構成する

1. 先ほど名付けた面接インスタンス名の後にある「view Terraform configuration」（本のアイコン）ボタンをクリックします
1. 「main.tf」ファイルを以下のように変更する必要があります。
    - ssh_key を更新します
1. 変更をコミットし、「run your first pipeline」に進みます

### 最初のパイプラインを実行する

1. 「Dry Run」が正常に終了するまで少し待ちます。
1. 「🚀 Everything」を手動で実行し、終了するまで待ちます。
    - ジョブの完了には最大 15 分かかる場合があるので、何か飲み物でも準備してください。

### 完了

これで Sandbox を使った面接インスタンスの作成が正常に完了しました。
2 つの異なる方法でインスタンスに接続できます。

1. `gcloud compute ssh --zone "<your_zone>" "<instance_name>"  --project "<your_name>-<ID>"`
1. `ssh root@<IP_given_in_the_job>`
