---
title: "セキュリティ修正の検証"
upstream_path: /handbook/security/product-security/psirt/runbooks/verifying-security-fixes/
upstream_sha: 1e195b58b9f249ff10bd0e705106c320fee86141
translated_at: "2026-05-10T00:00:00Z"
translator: claude
stale: false
---

アプリケーションセキュリティエンジニアによる修正のレビューは、修正を実装するエンジニアによって発動されます。脆弱性報告をトリアージしたセキュリティエンジニアが、修正に関するマージリクエストの検証を担当します。検証作業を行うエンジニアとしては、以下の手順に従ってください。

1. セキュリティの観点からコードレビューを実施します。
1. `package-and-qa` で生成された Docker イメージを使用してセキュリティ修正を検証します。詳細は[以下のセクション](#validating-security-fixes-using-package-and-qa)を参照してください。
1. 検証が完了したら、CVE へのリンクでセキュリティ Issue を更新します。

   - リンクはセキュリティ実装 Issue の Summary > Links テーブルの `CVE ID request` ラベル付きセルの隣に配置します
   - 修正が CVE を必要としない場合、その理由とともに CVE をリクエストしない旨をセキュリティ実装 Issue に投稿します
   - HackerOne からのインポート時に CVE が作成された場合、提出内容に最新の詳細が含まれているかをダブルチェックします

**注**: 承認は `master` を対象とするマージリクエストに対してのみ必要です。バージョン付きの安定版ブランチ (`X-Y-stable-ee`) を対象とするマージリクエストには必要ありません。
**注**: 上記のプロセスは GitLab の修正を検証するためのものです。他のサブコンポーネント (Omnibus GitLab、Gitaly、GitLab Pages) の修正を検証するプロセスは異なる場合があります。

## ローカル GDK を使用したセキュリティ修正の検証

1. GitLab Security プロジェクト (`https://gitlab.com/gitlab-org/security/gitlab`) を使用して、[Install GDK using alternative projects](https://gitlab.com/gitlab-org/gitlab-development-kit/-/blob/main/doc/install_alternatives.md#install-gdk-using-alternative-projects) の手順に従って GDK をインストールし、問題なく動作していることを確認します。
1. セキュリティ修正のあるマージリクエストに移動し、ブランチ名を特定します (ブランチ名は MR タイトルの下に表示されます。例: `User1` requested to merge `security-fix-branch` into `target-branch`)。
1. ターミナルで `gitlab-development-kit/gitlab` フォルダに移動し、セキュリティ修正のあるブランチに切り替えて、コード変更を `gitlab` ディレクトリに取り込みます。
1. まだ追加していない場合は、security リポジトリをリモートとして追加します:
`git remote add security git@gitlab.com:gitlab-org/security/gitlab.git git fetch security`
1. アクセスを確認します (origin と security の両方のリモートが表示されるはずです):
`git remote -v`
1. Security ブランチに切り替えます:
     - 最新の security 変更を fetch する `git fetch security`
     - 利用可能な security ブランチをリストする (オプション) `git branch -r | grep PATCH_BRANCH_NAME`
     - 特定の MR ブランチをチェックアウトする `git checkout PATCH_BRANCH_NAME`
1. `gdk restart` で GDK を再起動すると、GDK はセキュリティ修正が適用された状態で動作します。

**注**: ブランチを切り替えると GDK の問題が発生する可能性があります。

1. [GDK トラブルシューティングガイド](https://gitlab.com/gitlab-org/gitlab-development-kit/-/blob/main/doc/troubleshooting/_index.md)を参照してください。
1. #gdk Slack チャンネルで支援を求めてください。

## Gitpod を使用したセキュリティ修正の検証

1. 新しい Gitpod インスタンスを起動します https://gitlab.com/gitlab-org/gitlab-development-kit/-/blob/main/doc/howto/gitpod.md
1. Gitpod インスタンスが起動したら、MR の右上にある `Code` オプションをクリックして、セキュリティ MR からパッチをダウンロードします。
1. Gitpod インスタンスのターミナルで: `cat > mr.patch <hit return> <paste contents> <hit control+d>` を実行します。次に、パッチを適用します: `git apply mr.patch`
1. Gitpod 上で GDK を再起動します: `gdk restart`
1. GitPod のウェブサーバーに到達できるようにします: Gitpod の Ports ペインでポート 3000 の行を見つけ、ロックアイコンをクリックしてポートを公開します。
同じ Ports ペインの同じポート 3000 の行で、URL をクリックして GitLab インスタンスにアクセスします。

## `package-and-qa` を使用したセキュリティ修正の検証 {#validating-security-fixes-using-package-and-qa}

**注**: Delivery チームがこのプロセスをまとめた[動画](https://youtu.be/0IP3m48zWRg)を録画しました。AppSec チームメンバーは強く視聴することを推奨します。

`package-and-qa` ビルドは、マージリクエストの変更から生成された Omnibus パッケージに対してエンドツーエンドテストを実行します。
マージリクエストで導入されたセキュリティ修正が脆弱性を修復することを検証するため、Security エンジニアはこのパッケージを使用してローカル環境で Docker イメージを起動します。

そのため、Security エンジニアは以下の手順に従う必要があります。

1. セキュリティマージリクエストで、`qa` ステージをクリックし、`e2e:test-on-omnibus` ビルドを起動します。
   - QA ステージの Docker ビルドが存在しない場合は、MR に `~"pipeline:run-all-e2e"` のラベルを付けて、Docker イメージを生成する QA ステージのパイプラインを開始します。必ず新しいパイプラインを開始してください。詳細は[このハンドブックページ](https://docs.gitlab.com/omnibus/build/team_member_docs.html#test-a-gitlab-orggitlab-project-merge-request)を参照してください。
1. 内部的には、`e2e:test-on-omnibus` ビルドが [Omnibus GitLab Mirror] プロジェクトでパイプラインを起動します。
1. [Omnibus GitLab Mirror](https://gitlab.com/gitlab-org/build/omnibus-gitlab-mirror/) のパイプラインで、`Docker-branch` ビルドが完了するまで待ちます。
1. その間に、
    - `registry.gitlab.com` にログインしていることを確認します。事前設定された Docker 認証情報、または [Personal Access Token](https://docs.gitlab.com/ee/user/profile/personal_access_tokens.html) や [Deploy Token](https://docs.gitlab.com/ee/user/project/deploy_tokens/) を使用して、`docker login registry.gitlab.com` (使用しているものに応じて `nerdctl login registry.gitlab.com -u <username>`) コマンドでログインできます。
    - Omnibus で [Set up volumes location](https://docs.gitlab.com/ee/install/docker/index.html#set-up-the-volumes-location) を完了します。
1. `Docker-branch` が完了したら、ログの末尾までスクロールして、`registry.gitlab.com` にプッシュされた Docker イメージを見つけます。`Combined <AMD_64_TAG> and <ARM_64_TAG> tags to <FINAL_IMAGE>` の形式の行を探します。その `<FINAL_IMAGE>` が探しているものです。
1. ローカル環境で Docker イメージを起動するには、[ドキュメント](https://docs.gitlab.com/ee/install/docker/index.html)に従い、`gitlab/gitlab-ee:latest` イメージを前のステップのものに置き換えます。
1. インストールが完了するまで待ちます。その後、ブラウザで `0.0.0.0:80` にアクセスしてローカルインスタンスにアクセスできるようになります。

## CVE のリクエスト

1. [gitlab-org/cves](https://gitlab.com/gitlab-org/cves/-/issues) リポジトリの Issue トラッカーにアクセスします。このリポジトリのテンプレートを使用して Issue を作成し CVE をリクエストします。
1. GitLab self-managed バージョンに影響するすべての脆弱性 (CVSSv3 スコア > 0) について、新しい Issue を作成し `Internal GitLab Submission` テンプレートを選択して CVE 識別子をリクエストします。セキュリティリリースに含まれる一部のマージリクエストには CVE 識別子は不要であることに注意してください (例: 第三者依存関係のアップグレードのみ、gitlab.com 限定の Issue など)。

   - CVSSv3 スコアは Bug Bounty Council Issue で少なくとも 2 名のチームメンバーによって承認されているはずです。このプロセスより前の報告については、CVSSv3 スコアについて他のチームメンバーと議論するためだけであっても、現在の Council Issue にメモを追加することをためらわないでください。

1. CVE 識別子がほぼ確実に必要となる場合は、'Automatically request a CVE ID' のボックスをチェックしてください。これにより、プロセスの最初に CVE 識別子がリクエストされることが保証されます。
1. 各 Issue の `Title` には、ブログ記事のエントリに含まれる予定の脆弱性タイトルを使用してください。
1. `reporter` セクションは、CVE のリクエスト者である私たちを指しており、脆弱性の報告者ではありません。これらのフィールドにはデフォルト値を使用してください。
1. 残りのフィールドは、テンプレートまたは過去の提出物を例として参照しながら、関連情報で埋めてください。適切な `cwe` 値を調べる必要がある可能性が高い ([CWE](https://cwe.mitre.org/) 参照) ことと、`impact` を判定するために [CVSSv3 計算ツール](https://nvd.nist.gov/vuln-metrics/cvss/v3-calculator) を使用する必要があることに注意してください。
1. 注: `fixed_versions` や `solution` などの一部の情報は、CVE リクエスト Issue が作成された時点ではすぐに利用可能でない場合があります。それらの情報を取得したら、必ず CVE Issue を更新してください。
1. Issue を提出します。Vulnerability Research チームによってレビューされます。質問があればフォローアップし、その後、CVE 識別子を割り当てるために提出されます。
1. 各 CVE リクエスト提出について、関連するセキュリティ Issue とリンクします。CVE 識別子が割り当てられたら、関連 Issue にもその旨をコメントし、ブログ記事に確実に含まれるようにしてください。

### CVE クレジット

ほとんどの脆弱性は HackerOne 研究者またはチームメンバーのいずれかにクレジットされます。これらの報告は常に既存の CVE テンプレートを使用してクレジットされます。

脆弱性が GitLab Issue として直接、または ZenDesk 経由で顧客から報告された場合、公にクレジットされる機会を提供します。

```text
Hello `[contact]`,

We are preparing to patch the issue you reported. Would you like to be publicly credited with discovering the issue, and if so, how?

Some suggestions are `@social_media_handle`, `FirstName LastName`, `FirstName LastName from CustomerName`, or `the team at CustomerName`. We can also format the credit with a link.

Our default credit will be `This vulnerability was reported by a customer` for customers and `This vulnerability was disclosed using our [Coordinated Disclosure Process](https://about.gitlab.com/security/disclosure/).` for other members of the wider GitLab community.
```

## CVE の更新

CVE が公開された後に更新するには、<https://gitlab.com/gitlab-org/cves> でマージリクエストを開き、`published/CVE-YYYY-IDIDID.json` を変更します。
レビューとマージのために `gitlab-org/secure/vulnerability-research` にメンションします。Vulnerability Research チームが MITRE および/または NVD で CVE を更新する処理を行います。
