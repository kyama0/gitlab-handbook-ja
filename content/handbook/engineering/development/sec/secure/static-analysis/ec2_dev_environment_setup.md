---
title: "Static Analysis グループ EC2 開発マシンセットアップガイド"
upstream_path: /handbook/engineering/development/sec/secure/static-analysis/ec2_dev_environment_setup/
upstream_sha: 3480299851f7e2243d4f08b75dac452f89929636
translated_at: "2026-04-28T00:00:00Z"
translator: claude
stale: false
---

## Static Analysis グループ EC2 開発マシンセットアップガイド

[Semgrep を含む](https://github.com/semgrep/semgrep/issues/2252) 一部の SAST アナライザーは、ARM64 がサポートされていないため M1 Mac では動作しません。

この問題を回避するために、SAST 開発者イメージが EC2 AMI カタログに追加され、SAST コントリビューターが開発環境で SAST アナライザーを実行できるように `arn:aws:organizations::663740273027:organization/o-qjrbh9ll6x` サンドボックス組織と共有されています。イメージをセットアップするには:

1. https://gitlabsandbox.cloud/login にアクセスして `Create individual Account` をクリックし、自分用の AWS サンドボックスアカウントを作成します。
   - `Cloud Provider` には `aws-51eab1fa (Master Account 663740273027)` を選択します。
   - `Organizational Unit` には `eng-dev-sandbox-f1098f70` を選択します。
1. アカウントのプロビジョニングが完了したら、`View IAM Credentials` をクリックして `Username` と `Password` をメモします。
1. `Open AWS Web Console` をクリックして、手順 `2` の `Username` と `Password` を使用します。
1. `AWS Web Console` にログインしたら、左側のハンバーガーメニューをクリックして `Console Home` サイドバーを開きます。
1. サイドバーの `All services` をクリックし、`Compute -> EC2` に移動します。
1. 右上のリージョンセレクターで `Sydney` リージョン（`ap-southeast-2`）を選択します。
1. 左側のサイドバーを使用して `Images -> AMI Catalog` に移動します。
1. `AMI Catalog` ページが読み込まれたら、`My AMIs` をクリックします。
1. `No results were found in My AMIs with your current filters.` というメッセージが表示された場合は、`Clear Filters` ボタンをクリックします。
1. これで `A fast path to Static Analysis analyser development` という説明の `static-analysis-workspace` イメージが表示されるはずです。

   または、`static-analysis-workspace` を検索して AMI リストをフィルタリングすることもできます。

1. `static-analysis-workspace` AMI を選択して "Launch Instance with AMI" をクリックします。
1. インスタンスタイプには `c6a.xlarge` が推奨されます。これは統合テストに役立つ適切なシングルコアパフォーマンスを提供するためです。
1. "Network Settings" で "Allow SSH traffic from" チェックボックスが選択されていることを確認し、ドロップダウンから "My IP" を選択します。

   注意: インスタンスが作成された後に別の IP からの SSH トラフィックを許可する必要がある場合は、インスタンスリストからインスタンスを選択し、`Security` タブをクリックし、`Security groups` パネルを探してセキュリティグループをクリックします。セキュリティグループの設定ページが開いたら、`Edit inbound rules` をクリックして、ドロップダウンメニューから `Source: My IP` を設定し、`Save rules` をクリックします。

1. キーペアを作成または選択して、プライベートキー `.pem` をダウンロードします。
1. "Launch Instance" をクリックします。別のページにリダイレクトされ、"Successfully initiated launch of instance" というメッセージが表示されます。
1. "View all instances" をクリックして、インスタンスのパブリック IP アドレスをメモします。
1. `ssh -i <path-to-pem> ubuntu@<ip>` を使用してインスタンスに SSH 接続します。

   注意: `WARNING: UNPROTECTED PRIVATE KEY FILE!!` というメッセージや `Permissions 0644 for '<path/to/private-key.pem>' are too open.` というメッセージが表示された場合は、`chmod 600 <path/to/private-key.pem>` を使用してファイルのモードを変更する必要があります。

1. MOTD に迎えられるはずです。
1. イメージにはすでにクローンされた多数のアナライザーがありますが、これらのアナライザーは `ssh` を使用してクローンされているため、ローカル開発マシンから EC2 インスタンスに SSH キーをコピーしない限り、アナライザーの最新の変更を取得できません。

   SSH キーのコピーを避けるには、`git` が `ssh` の代わりに `https` を使用するように強制します:

   ```shell
   git config --global url."https://gitlab.com/".insteadOf "git@gitlab.com:"
   ```
