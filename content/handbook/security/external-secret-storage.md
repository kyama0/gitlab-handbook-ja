---
title: Vault による外部シークレットストレージのセットアップ
description: 環境変数の安全な代替手段として、外部シークレットストレージをセットアップする手順の概要。
upstream_path: /handbook/security/external-secret-storage/
upstream_sha: 1e195b58b9f249ff10bd0e705106c320fee86141
translated_at: "2026-05-09T12:00:00Z"
translator: claude
stale: false
---
## 概要

このガイドでは、GitLab CI/CD パイプライン用の外部シークレットマネージャーとして HashiCorp Vault を使う方法を説明します。API キーやパスワードといったシークレットを適切に管理することは、プロジェクトのセキュリティを維持するうえで不可欠です。

## なぜ外部シークレットを使うのか？

外部シークレットは、機密情報をコードベースから分離することで、CI/CD 環境において機密データを安全に管理する方法を提供します。このアプローチは、バージョン管理システムでの認証情報の偶発的な漏洩を防ぎ、シークレットの集中管理を可能にし、適切なアクセス制御と監査証跡を実現します。外部シークレットを使うことで、機密値をパイプライン設定に直接ハードコードすることなく、ビルド・テスト・デプロイを自動化しつつ、セキュリティのベストプラクティスを維持できます。

## 外部シークレットを使うべきケースは？

外部シークレットは、特に次のシナリオで価値があります。なお、潜在的なユースケースをすべて網羅することはほぼ不可能なので、このリストは網羅的ではありません。

**[GitLab CI/CD パイプライン操作](https://docs.gitlab.com/ci/variables/)**

- GitLab CI からのデプロイ
- パイプライン実行中の外部サービス（AWS、Docker Hub、クラウドプロバイダー）への認証
- データベースや API 接続を必要とする自動化テストの実行
- GitLab パイプラインからレジストリ（npm、Maven、PyPI）へのパッケージ公開

**[パーソナルアクセストークン](https://docs.gitlab.com/user/profile/personal_access_tokens/)**

- プログラムから GitLab API にアクセスするための GitLab パーソナルアクセストークンの使用
- CI/CD プロセス中のプライベートリポジトリのクローン
- マージリクエスト作成や Issue 管理などの GitLab 操作の自動化
- GitLab と外部ツールやサービスとの統合
- トークンを適切にスコープする — 必要最小限の API 権限のみを付与し、有効期限を設定する

**[GitLab Runner の設定](https://docs.gitlab.com/runner/)**

- プライベートコンテナレジストリにアクセスするための GitLab Runner の設定
- 保護環境にデプロイするための Runner のセットアップ
- クラウドインフラストラクチャサービスへの Runner の認証

シークレットとは、API キーやパスワードのような、他の人に知られたり見られたりするべきでない認証情報です。GitLab CI には[マスキング機能](https://docs.gitlab.com/ee/ci/variables/#mask-a-cicd-variable)を備えた組み込みの変数領域がありますが、この機能には限界があります。

> [!warning]
> CI/CD 変数のマスキングは、悪意のあるユーザーが変数値にアクセスすることを防ぐ確実な方法ではありません。マスキング機能は「ベストエフォート」であり、変数が誤って公開されたときの助けとなるものです。変数をより安全にするには、外部シークレットの使用を検討してください。

## なぜパーソナルアクセストークン（PAT）のようなシークレットの保護が重要なのか

パーソナルアクセストークン、API キー、データベース認証情報などのシークレットは、組織の最も価値ある資産へのデジタルキーとして機能します。これらのシークレットが CI ログや公開コミットを通じて漏洩すると、それらのファイルにアクセスできる人なら誰でも、外部コントリビューター、元従業員、リポジトリへのアクセスを取得した攻撃者を含めて容易に利用できる状態になります。

## 悪意のある者が漏洩したシークレットをどのように悪用するか

悪意のある者は漏洩した認証情報を入手すると、次のことができます。

- 漏洩したデータベース認証情報や API キーを使って、データベース、クラウドストレージ、内部 API から機密データにアクセスし、流出させる
- 漏洩した Git トークンを使って悪意のあるコミットをプッシュしたり、リポジトリを削除したり、プライベートリポジトリにアクセスして、重要なコードを変更または削除する
- サービスアカウントトークンを使って追加のシステムやリソースにアクセスし、インフラ内で権限を昇格する
- デプロイメントキーやクラウドプロバイダーの認証情報を使って、本番環境に悪意のあるコードをデプロイする
- 漏洩したアプリケーションシークレットや第三者サービスの認証情報を通じて顧客データにアクセスする
- 漏洩した内部サービス認証情報を使って、ネットワーク内で横展開を行う
- 他の攻撃者が悪用するためにダークウェブ市場で認証情報を売る

## 実世界の影響シナリオ

シークレットの漏洩は、顧客に影響する情報漏洩、無断の暗号通貨マイニング、サプライチェーン攻撃、または開発・本番環境の完全な侵害につながる可能性があります。

## シークレット管理のベストプラクティス

1. シークレットをコードに直接保存しない
2. Vault では環境ごとに適切なサブフォルダ構造を使う
3. グループベースの権限でシークレットへのアクセスを制限する
4. Vault に保存された認証情報を定期的にローテーションする
5. サービスアカウント JSON ファイルのような複雑な認証設定にはファイルベースのシークレットを使う

## GitLab CI/CD でのシークレット管理に HashiCorp Vault を使う

HashiCorp Vault は GitLab の外部シークレットソリューションとして使われています。Vault を使ったシークレット管理の詳細は[こちら](https://runbooks.gitlab.com/vault/usage/#secrets-management)で確認できます。

CI パイプラインから呼び出される他の形式の外部シークレットストレージは、実装前にまず [CorpSec](https://internal.gitlab.com/handbook/security/corporate/) によって承認されなければなりません。
Vault と GitLab の統合は JWT ベースの認証フローによって動作します。

1. GitLab が JWT を生成し、CI ジョブに提供する
2. CI ランナーがこの JWT を使って Vault に認証する
3. Vault が JWT を検証し、bounded claim をチェックする
4. Vault がトークンをランナーに返す
5. ランナーが Vault からシークレットを読み取る

## セットアップガイド

### 前提条件

- 外部シークレットを使いたい GitLab プロジェクト
- [GitLab の HashiCorp Vault インスタンス](https://vault.gitlab.net)へのアクセス
- アクセスリクエストを作成・管理するための適切な権限

> [!note]
> GitLab（製品）には[チュートリアルページが用意されています](https://docs.gitlab.com/ee/ci/secrets/)が、内部 GitLab プロジェクトの場合、SRE チームがすでに Vault セットアップを用意しているので、これは過剰かもしれません！

### ステップ 1: アクセスリクエスト

1. チーム用に [Okta グループ](https://okta.com/)を作成するようリクエストする（個別アクセスは不可）
2. グループは Vault アプリケーションに追加されます（IT チームの標準プロセス）
3. Okta は新しいグループを HashiCorp Vault に送信するための「グループクレーム」で更新する必要があります
4. 追加の設定は SRE/HashiCorp Vault 側で実行されます。詳細は [Vault runbook](https://runbooks.gitlab.com/vault/access/#onboarding-a-team-into-vault) で確認できます。

> [!note]
> GitLab 内部ユーザーは、詳細なセットアップ手順について [SRE 内部 runbook](https://runbooks.gitlab.com/vault/usage/) を参照してください。

### ステップ 2: Terraform 設定の作成

HashiCorp Vault は Terraform 経由で設定されます。GitLab の[インフラストラクチャチーム](https://gitlab.com/gitlab-com/gl-infra/infra-mgmt/-/tree/main)から利用できる例やテンプレートに基づいて、必要な設定ファイルを作成してください。gitlab-com 環境の例は[こちら](https://gitlab.com/gitlab-com/gl-infra/infra-mgmt/-/tree/main/environments/gitlab-com)で利用できます。

### ステップ 3: ボットを招待する

「gitlab-infra-mgmt-bot」（または該当するもの）は、Terraform 設定をマージする**前に**プロジェクトグループのオーナーである必要があります。このボットは HashiCorp ドキュメントに記載されている [CI 変数](https://docs.gitlab.com/ee/ci/variables/) を自動化します。

### ステップ 4: Terraform 設定をマージする

Terraform 設定をリポジトリに送信してマージします。

### ステップ 5: Vault でシークレットをセットアップする

1. Web インターフェースまたは CLI を通じて Vault インスタンスにアクセスする
2. Terraform とプロジェクトの命名規則に従った構造を作成する
   - 例:
     - プロジェクト URL: [`https://gitlab.com/gitlab-com/it/security/it-security-automation`](https://gitlab.com/gitlab-com/it/security/it-security-automation)
     - Vault URL パス: `/ci/gitlab-com/gitlab-com/it/security/it-security-automation`
   - [Vault ナビゲーションの例を見る](https://vault.gitlab.net/)

### ステップ 6: 環境を構成する

1. サポートする必要のある環境（prod、non-prod）を決定する
2. 各環境用に Vault に適切なサブフォルダを作成する
   - すべての CI ジョブはデフォルトで「shared」サブフォルダにアクセスできます
   - 保護ブランチには「protected/」サブフォルダを使います

### ステップ 7: シークレットを作成する

Vault の各[「シークレット」](https://www.vaultproject.io/docs/secrets)には key:value のペアまたは JSON オブジェクトが含まれます。適切なキー名と値でシークレットを追加します。

### ステップ 8: CI/CD からシークレットにアクセスする

`.gitlab-ci.yml` ファイルを編集して Vault からシークレットにアクセスします。

```yaml
deploy:
  id_tokens:
    VAULT_ID_TOKEN:
      aud: https://vault.gitlab.net
  secrets:
    OKTA_TOKEN:
      file: false
      vault: ${VAULT_SECRETS_PATH}/shared/apikeys/okta@ci
      token: $VAULT_ID_TOKEN
    GOOGLE_SECRET:
      file: true
      vault: ${VAULT_SECRETS_PATH}/shared/google/googlekey@ci
      token: $VAULT_ID_TOKEN
```

次の点に注意してください。

- すべてのシークレットパスは、CI 用途のため `@ci` で終わる必要があります
- 単純な変数の場合は `file: false` を設定します
- ファイルに変換すべきシークレットには `file: true` を設定します（これがデフォルトです）

### ステップ 9: スクリプトでシークレットを使う

シークレットは環境変数として使えます。

Ruby スクリプトの場合、次のようにします。

```ruby
# check if running in CI and get variables as required
if ENV['GITLAB_CI']
  gitlab_token = ENV['GITLAB_TOKEN']
  
  # Read just the gitlab url from config.template
  File.readlines(directory + '/config.template').each do |line|
    if line.strip.match(/^url=(.+)$/) && url_section
      gitlab_url = $1
      break
    end
    url_section = true if line.strip == '[gitlab]'
  end
else
  # Read from config.ini
  gitlab_token = nil
  gitlab_url = nil
  url_section = false
  
  File.readlines(directory + '/config.ini').each do |line|
    if line.strip.match(/^token=(.+)$/) && url_section
      gitlab_token = $1
    elsif line.strip.match(/^url=(.+)$/) && url_section
      gitlab_url = $1
    end
    url_section = true if line.strip == '[gitlab]'
  end
end

headers = { "Private-Token" => gitlab_token }
```

Python スクリプトの場合、次のようにします。

```python
# check if running in CI and get variables as required
if os.getenv("GITLAB_CI"):
    config.read(directory + '/config.template')
    gitlab_token = os.getenv('GITLAB_TOKEN')
else:
    config.read(directory + '/config.ini')
    gitlab_token = config['gitlab']['token']

gitlab_url = config['gitlab']['url']
headers = {"Private-Token": gitlab_token}
```

## 検証

CI 出力ジョブを確認することで、シークレットが正しく解決されていることを検証できます。次のようなログエントリが見えるはずです。

```shell
Resolving secrets
Resolving secret "JAMF_USER"...
Using "vault" secret resolver...
Resolving secret "OKTA_TOKEN"...
Using "vault" secret resolver...
```

機密値を出力する場合、ログに `[MASKED]` として表示されるはずです。

## トラブルシューティング

Vault 統合で問題が発生した場合は次を確認してください。

1. ボットがプロジェクトに対する適切な権限を持っているか
2. `.gitlab-ci.yml` のシークレットパスが Vault の構造と一致しているか
3. Okta グループが Vault で正しい権限を持っているか
4. CI ジョブログにシークレット解決に関するエラーメッセージがないか

## 将来の検討事項

- ESS は Vault に限定されません。1Password の API 統合の活用を検討してください。優れた例は[こちら](https://gitlab.com/gitlab-com/it/security/it-security-automation/-/blob/main/onepassword.py?ref_type=heads)で確認できます。セットアップガイドは[こちら](https://gitlab.com/gitlab-com/it/security/it-security-automation/-/blob/main/README.md)で確認できます。
- Google Cloud Secrets Manager 統合
- Okta 固有のアプリケーション向けの Proof of Possession (POP) を伴う OAuth 2.0 API サービス
- [GitLab as a Secrets Manager](https://gitlab.com/groups/gitlab-org/-/epics/10108) 機能は現在開発中で、これにより安全でない CI 変数を排除し、本番認証情報、API キー、トークンを GitLab の使い慣れたインターフェース内に安全に保管できるようになります。

## 関連リソース

- [GitLab CI/CD Secrets Management Documentation](https://docs.gitlab.com/ee/ci/secrets/)
- [HashiCorp Vault Documentation](https://www.vaultproject.io/docs)
- [External Secrets with Terraform](https://docs.gitlab.com/ee/administration/terraform_state.html)
- [CI/CD Variables Documentation](https://docs.gitlab.com/ee/ci/variables/)
- [GitLab IT Security Automation Repository](https://gitlab.com/gitlab-com/it/security/it-security-automation)
