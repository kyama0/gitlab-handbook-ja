---
title: 'ユースケーススタディ: CI ジョブでのシークレット利用'
owning-stage: "~devops::verify"
toc_hide: true
upstream_path: /handbook/engineering/architecture/design-documents/secret_manager/studies/ci_job_secrets/
upstream_sha: 86cfa2bd7d73df5a673fe5ebd33b028d0f540434
translated_at: "2026-04-27T08:00:00Z"
translator: claude
stale: false
lastmod: "2024-11-14T23:18:47+00:00"
---

## 目的

- ユーザーが CI ジョブでネイティブ GitLab シークレットを使用する方法をまとめます。
- OpenBao は HashiCorp Vault のフォークであるため、[Runner における Vault インテグレーション](https://docs.gitlab.com/ee/ci/secrets/index.html)との互換性を確認します。
- OpenBao の[ポリシー](https://openbao.org/docs/concepts/policies/)と[JWT ロール](https://openbao.org/docs/auth/jwt/#configuration)を、プロジェクトごとに異なる GitLab ユーザーロールのパーミッションと互換性を持つ形で構成する方法を高レベルで理解します。

## 前提条件

このワークフローでは、[capabilities](https://openbao.org/docs/concepts/policies/#capabilities)（例: `read+update`、`read+update+create`）のすべての組み合わせに対する[テンプレート化されたポリシー](https://openbao.org/docs/concepts/policies/#templated-policies)が事前に定義されている必要があります。たとえば、プロジェクトのシークレットへの完全なアクセスを許可する次のテンプレート化されたポリシーを考えます。

```shell
bao policy write project_full_access - <<EOF
path "kv-v2/data/projects/{{identity.entity.aliases.auth_jwt_02163755.metadata.project_id}}/*" {
  capabilities = [ "read", "create", "update", "delete", "list" ]
}
EOF
```

ポリシーは認可時に JWT ロールと関連付けられます。`project_full_access` ポリシーは特に初期プロジェクトオーナーロールに対して重要です。

```shell
bao write auth/jwt/role/project_owner - <<EOF
{
  "role_type": "jwt",
  "policies": ["project_full_access"],
  "token_explicit_max_ttl": 60,
  "user_claim": "user_id",
  "claim_mappings": {
    "project_id": "project_id"
  },
  "bound_audiences": "secrets.gitlab.com",
  "bound_claims_type": "glob",
  "bound_claims": {
    "user_access_level": "owner"
  }
}
EOF
```

OpenBao のポリシーはデフォルトで拒否されるため、プロジェクトオーナーにシークレットの読み書き完全アクセス権を付与するためにこの初期 JWT ロールが必要です。

## 初期セットアップワークフロー

プロジェクトのネイティブシークレットが初めて設定される際の手順と技術情報を詳述します。

1. プロジェクトオーナーが GitLab UI から GitLab Secrets Manager を有効化します。
1. プロジェクトオーナーが GitLab UI から、どの GitLab ユーザーロールがシークレットを読み取り・書き込み・作成できるかについて追加パーミッションを定義します。
   - デフォルトでは、プロジェクトオーナーは完全アクセス権を持ち、他のロールは拒否されます。
   - たとえば、オーナーが `developer` ロールに読み取り専用アクセスを許可する場合、OpenBao API を通じて Rails バックエンドが `project_88_developer` を定義します。

     ```shell
     # ロール名のフォーマットは `project_<project-id>_<user-role>`
     bao write auth/jwt/role/project_88_developer - <<EOF
      {
        "role_type": "jwt",
        "policies": ["project_read_only"],
        "token_explicit_max_ttl": 60,
        "user_claim": "user_id",
        "claim_mappings": {
          "project_id": "project_id"
        },
        "bound_audiences": "secrets.gitlab.com",
        "bound_claims_type": "glob",
        "bound_claims": {
          "user_access_level": "developer"
        }
      }
      EOF
     ```

   - `project_owner` の汎用ロールとは異なり、プロジェクトごとにユーザーロールのパーミッションの組み合わせが異なる可能性があるため、オーナー以外のロールをプロジェクトに紐付けて定義する必要があります。
1. プロジェクトオーナーが GitLab UI からシークレットを定義します。
   - ユーザーは名前・キー・値などの詳細を定義します。入力例:
     - name: `Production Database Password`
     - key: `DB_PASS`
     - value: `mydbpass`
   - シークレットは `kv-v2/data/projects/88/ci/DB_PASS` の下に以下の JSON データで OpenBao に保存されます。

     ```json
     {
       "data": "mydbpass"
     }
     ```

   - ユーザーはシークレットの値を JSON 形式で入力する必要はありません。Rails バックエンドが入力を OpenBao へ送信する前に `data` キーを持つ JSON オブジェクトに変換します。
1. 開発者が `.gitlab-ci.yml` で `secrets` キーワードを使用します。
   - 設定例:

     ```yaml
     job-with-secrets:
       secrets:
         MY_SECRET_ON_OPENBAO:
           key: DB_PASS # kv-v2/data/projects/88/DB_PASS（フィールド `data`）に対応
     ```

   - `aud` のデフォルトが OpenBao サービスのある `https://secrets.gitlab.com` になるため、`id_tokens:VAULT_ID_TOKEN` を指定する必要はありません。
   - HashiCorp Vault とは異なり、CI/CD 変数を定義する必要はありません。
     - `VAULT_SERVER_URL` は OpenBao サービスのある `https://secrets.gitlab.com` がデフォルトです。
     - `VAULT_AUTH_ROLE` は OpenBao の JWT ロールに一致するよう `project_<project_id>_<job_user_role>` がデフォルトです。
1. CI ジョブが実行され、`MY_SECRET_ON_OPENBAO` が環境変数として利用可能になります。
   - OpenBao は ID トークンの整合性を検証し、`bound_claims` がカスタムクレーム（特に GitLab ユーザーロールを含む `user_access_level`）と一致するかを検証します。
   - HashiCorp Vault のシークレットと同様に、これは [`file` 変数](https://docs.gitlab.com/ee/ci/variables/index.html#use-file-type-cicd-variables)です。

## 技術実装の知見

ワークフローをサポートするための OpenBao と Rails に関する高レベルの技術実装詳細です。

1. ワークフローと互換性を持たせるために、OpenBao サービスを適切に設定する必要があります。
   - [ID トークン認証](https://docs.gitlab.com/ee/ci/secrets/id_token_authentication.html#automatic-id-token-authentication-with-hashicorp-vault)と連携させるために [JWT 認証](https://openbao.org/docs/auth/jwt/#jwt-authentication)を設定します。
   - ドキュメントには `vault` CLI を使った[手順](https://docs.gitlab.com/ee/ci/secrets/index.html#configure-your-vault-server)が示されていますが、`bao` でも同様に機能します。
   - OpenBao API は `https://secrets.gitlab.com` から到達可能です。
   - テンプレート化されたポリシーで `project_id` を参照するには、JWT auth マウントアクセサの値（`bao auth list` の結果から `auth_jwt_02163755`）を取得する必要がありました。テンプレート化されたポリシーが正しいアクセサで最新の状態を保つよう、デプロイ時に自動化する必要があります。マウントアクセサの値はストレージに永続化され、OpenBao サーバーが再起動・シールされても値が保持されます。
1. ワークフローをサポートするために、Rails バックエンドに付随する実装が必要です。
   - シークレットの ActiveRecord モデル。UI でのシークレット一覧表示や詳細表示では OpenBao へのリクエストを行わないようにします。
   - パーミッションの ActiveRecord モデル。UI でのパーミッション一覧表示では OpenBao へのリクエストを行わないようにします。
   - CI 設定で `id_tokens` を定義せずに ID トークンを使用できるよう、ID トークン関連の実装を更新します。
   - `VAULT_SERVER_URL` と `VAULT_AUTH_ROLE` のデフォルト値の適切なマッピング。

## ローカルでのテスト方法

ここで紹介するポリシーとロールの構成は、まず GDK セットアップと [`dev` モード](https://openbao.org/docs/get-started/developer-qs/)で動作する OpenBao サーバーを使ってローカルでテストしました。

以下はローカルでテストするためのステップバイステップガイドです。

1. [runner を使って GDK を適切にセットアップ](https://gitlab.com/gitlab-org/gitlab-development-kit/blob/main/doc/howto/runner.md)していることを確認します。
   - [Docker executor を使った GDK](https://gitlab.com/gitlab-org/gitlab-development-kit/blob/main/doc/howto/runner.md#set-up-a-local-network)でテストし、`gdk.test` を `172.16.123.1` に向けましたが、shell executor でも動作するはずです。
   - テストプロジェクトで CI パイプラインを正常に実行できることを確認します。
1. 後で OpenBao からシークレットを取得するためのテストプロジェクトを作成します。
   - プロジェクト ID をメモしておきます。この例ではプロジェクト ID は `53` でした。
1. [`dev` モード](https://openbao.org/docs/concepts/dev-server/)で OpenBao を起動します。

   ```shell
   bao server -dev -dev-root-token-id="dev-only-token"
   ```

   - これにより OpenBao が `https://127.0.0.1:8200` で到達可能になります。
   - 以下の `bao` CLI コマンドを動作させるには `export BAO_ADDR='https://127.0.0.1:8200'` を実行する必要があるかもしれません。
1. kv-v2 シークレットエンジンを有効化します。

   ```shell
   bao secrets enable kv-v2 # デフォルトで `kv-v2/data` にマウントされます
   ```

1. JWT 認証を有効化します。

   ```shell
   bao auth enable jwt
   ```

1. OpenBao の JWT 認証を設定します。

   ```shell
   bao write auth/jwt/config \
     oidc_discovery_url="https://gdk.test:3000" \
     bound_issuer="https://gdk.test:3000"
   ```

1. GitLab ユーザーロール `owner` を持つプロジェクトオーナーに対して生成されるポリシーとロールをテストするために、[テンプレート化されたポリシー](https://openbao.org/docs/concepts/policies/#templated-policies)と特定の `owner` ロール用の JWT ロールを作成します。JWT ロールは [GitLab Vault サンプルサーバーロール](https://docs.gitlab.com/ee/ci/secrets/index.html#configure-vault-server-roles)に基づいています。
   - `bao auth list` 実行時の JWT auth マウントアクセサの値をメモします。

     ```shell
     Path      Type     Accessor               Description                Version
     ----      ----     --------               -----------                -------
     jwt/      jwt      auth_jwt_02163755      n/a                        n/a
     token/    token    auth_token_90d6d0c1    token based credentials    n/a
     ```

   - テンプレート化されたポリシーを定義し、マウントされた JWT auth プラグインのメタデータを通じて `project_id` を参照します。

     ```shell
     bao policy write project_full_access - <<EOF

     # オーナーはプロジェクトのシークレットへの完全な読み書きアクセス権を持ちます
     # `auth_jwt_02163755` マウントアクセサの値をコピーしてください
     path "kv-v2/data/projects/{{identity.entity.aliases.auth_jwt_02163755.metadata.project_id}}/*" {
       capabilities = [ "read", "create", "update", "delete", "list" ]
     }
     EOF
     ```

   - JWT ロールを定義し、`project_full_access` ポリシーを関連付けます。

     ```shell
     bao write auth/jwt/role/project_owner - <<EOF
     {
       "role_type": "jwt",
       "policies": ["project_full_access"],
       "token_explicit_max_ttl": 60,
       "user_claim": "user_id",
       "claim_mappings": {
         "project_id": "project_id"
       },
       "bound_audiences": "secrets.gitlab.com",
       "bound_claims_type": "glob",
       "bound_claims": {
         "user_access_level": "owner"
       }
     }
     EOF
     ```

1. CI ジョブで取得したいサンプルシークレットを作成します。

   ```shell
   bao kv put -mount=kv-v2 projects/53/foo val=my-long-passcode
   ```

1. テストプロジェクトで、既存の [Vault インテグレーション](https://docs.gitlab.com/ee/ci/secrets/index.html#use-vault-secrets-in-a-ci-job)を使って OpenBao からシークレットを取得するように `.gitlab-ci.yml` を設定します。

   ```yaml
   test_openbao:
     variables:
       VAULT_SERVER_URL: https://127.0.0.1:8200
       VAULT_AUTH_ROLE: project_owner
     id_tokens:
       VAULT_ID_TOKEN:
       aud: secrets.gitlab.com
     secrets:
       SECRET:
         vault: projects/53/foo/val  # シークレット `kv-v2/data/projects/53/foo`（フィールド `val`）に対応
         token: $VAULT_ID_TOKEN
     script:
       - echo "testing..."
       - cat $SECRET
       - echo "done."
   ```

   - `VAULT_AUTH_ROLE` は先ほど作成した JWT ロールと一致します。
   - `aud` はロールの `bound_audiences` と一致します。
   - このジョブで生成された ID トークンは、`bound_claims`（特に ID トークンの[カスタムクレーム](https://docs.gitlab.com/ee/ci/secrets/id_token_authentication.html#token-payload)に含まれる GitLab ユーザーロールを示す `user_access_level`）を使って OpenBao によって照合されます。
1. パイプラインを実行し、ジョブトレースに OpenBao から取得したシークレットのマスクされた出力が表示されることを確認します。
