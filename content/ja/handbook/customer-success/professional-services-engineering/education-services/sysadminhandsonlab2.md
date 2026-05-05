---
title: "GitLab システム管理 - ハンズオンラボ: GitLab 管理コマンドを使う"
description: "このハンズオンガイドでは、GitLab サービスを制御するための gitlab-ctl コマンドの使い方を説明します。"
upstream_path: /handbook/customer-success/professional-services-engineering/education-services/sysadminhandsonlab2/
upstream_sha: b4eeb07f0d5f46e2fc5f8572be1a2547261aed89
translated_at: "2026-04-26T03:00:00Z"
translator: claude
stale: false
---

> 完了までの目安時間: 30 分

## 目的

このラボの目的は、CLI を使って GitLab インスタンスを管理するために使えるさまざまな `gitlab-ctl` コマンドを紹介することです。これらのコマンドはインストール後に実行できます。詳細については、[メンテナンスコマンドの詳細](https://docs.gitlab.com/omnibus/maintenance/) を参照してください。

### タスク A. 基本的なサービス状態コマンドを実行する

1. ターミナルプロンプトから、まだログインしていない場合はトレーニング用仮想マシンに SSH 接続します。

1. `gitlab-ctl` メンテナンスコマンドで GitLab サービスの状態を確認します。

   ```bash
   sudo gitlab-ctl status
   ```

1. このコマンドの出力は次のようになります。

   ```text
   run: alertmanager: (pid 21371) 205s; run: log: (pid 21114) 254s
   run: gitaly: (pid 21327) 208s; run: log: (pid 20429) 399s
   run: gitlab-exporter: (pid 21346) 207s; run: log: (pid 21012) 270s
   run: gitlab-kas: (pid 20689) 380s; run: log: (pid 20700) 379s
   run: gitlab-workhorse: (pid 21309) 208s; run: log: (pid 20851) 290s
   run: logrotate: (pid 20319) 414s; run: log: (pid 20327) 413s
   run: nginx: (pid 21320) 208s; run: log: (pid 20917) 282s
   run: node-exporter: (pid 21338) 208s; run: log: (pid 20965) 278s
   run: postgres-exporter: (pid 21380) 204s; run: log: (pid 21149) 248s
   run: postgresql: (pid 20496) 391s; run: log: (pid 20517) 388s
   run: prometheus: (pid 21356) 206s; run: log: (pid 21077) 258s
   run: puma: (pid 20768) 303s; run: log: (pid 20781) 300s
   run: redis: (pid 20365) 408s; run: log: (pid 20378) 405s
   run: redis-exporter: (pid 21348) 207s; run: log: (pid 21039) 266s
   run: sidekiq: (pid 20798) 297s; run: log: (pid 20806) 296s
   ```

   > これらのコンポーネントとそれらがどのように相互作用するかについて詳しくは、[ドキュメント](https://docs.gitlab.com/ee/development/architecture.html) を参照してください。

1. 出力には、各 GitLab サービスの `pid`（プロセス ID）が表示されます。このプロセス ID により、プロセスがシステム上でアクティブに実行されていることを確認できます。

1. トラブルシューティングのために、サービスの停止や再起動が必要になることがあります。このプロセスを示すために、`nginx` サービスを停止します。

   ```bash
   sudo gitlab-ctl stop nginx
   ```

1. サービスがダウンしたことを確認するため、`sudo gitlab-ctl status` を実行します。`nginx` に表示される値に注目してください。

   ```text
   down: nginx: 13s, normally up; run: log: (pid 20917) 1782s
   ```

1. Web ブラウザーで GitLab に移動するか、すでに開いている場合はページを更新します。「*接続できません*」のような表示が出るはずです。これは、GitLab インスタンス上の Web サーバーを停止したためです。

1. `nginx` Web サービスを再起動します。

   ```bash
   sudo gitlab-ctl start nginx
   ```

1. `sudo gitlab-ctl status` を実行して、`nginx` が再び稼働していることを確認します。

   ```text
   run: nginx: (pid 22369) 7s; run: log: (pid 20917) 1852s
   ```

1. Web ブラウザーで GitLab に移動します。アプリケーションが正常に読み込まれるはずです。

### タスク B. 公開設定を変更する

1. ラボ 1 で設定した `root` ユーザーとパスワードを使って、GitLab Web インスタンスにログインします。

1. メイン画面のサイドバーの左下隅にある **Admin Area** をクリックします。

1. まず、デフォルトのプロジェクト公開設定を調整します。左側のナビゲーションペインを一番下までスクロールし、**Settings** > **General** をクリックします。

1. **Visibility and access controls** で **Expand** をクリックします。

1. 関連するラジオボタンをクリックして、`Default project visibility` を **Internal** に変更します。

1. 関連するラジオボタンをクリックして、`Default group visibility` を **Internal** に変更します。

1. **Visibility and access controls** セクションの下部にある **Save changes** を選択して、これらの変更を適用します。

### タスク C. サインイン設定を確認する

1. 次に更新するのはサインイン制限です。引き続き **Settings** > **General** で、**Visibility and access controls** の隣にある **Collapse** をクリックします。

1. **Sign-in restrictions** で **Expand** をクリックします。

1. **Two-factor authentication** で、**Enforce two-factor authentication** の隣のチェックボックスをクリックします。

1. **Sign-in restrictions** セクションの末尾にある **Save changes** を選択して、この変更を適用します。

1. **Sign-in restrictions** の隣にある **Collapse** をクリックしてメニューを閉じます。

1. この変更を適用すると、管理者アカウントで 2FA をセットアップするページにリダイレクトされます。アカウントで 2FA を有効にするか、この通知を回避するために 2FA 設定を無効にすることができます。

2FA 設定を無効にするには：

1. 2FA ページで **Configure it later** を選択します。

1. 左サイドバーで **Admin Area** を選択します。

1. **Settings** > **General** を選択します。

1. **Sign-in restrictions** の隣にある **Expand** を選択します。

1. **Enforce two-factor authentication** のチェックを外します。

1. **Sign-in restrictions** セクションの末尾にある **Save Changes** を選択します。

### タスク D. ヘッダーロゴを更新する

ヘッダーロゴをアップロードすることで、GitLab インスタンスをパーソナライズできます。

1. 左側のサイドパネルで **Settings > Appearance** をクリックします。

1. **Navigation Bar セクション** で **Choose File** をクリックします。

1. ヘッダーロゴとして使う適切な画像をコンピューターから選び、**Open** をクリックします。

1. 変更を保存するために **Update appearance settings** をクリックします。画面の左上に画像が表示されるはずです。

## ラボガイド完了

このラボ演習は完了しました。本コースのその他の[ラボガイド](/handbook/customer-success/professional-services-engineering/education-services/sysadminhandson)を確認できます。

### ご提案はありますか？

GitLab システム管理ハンズオンガイドへの変更を提案したい場合は、マージリクエストでお寄せください。
