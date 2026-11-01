---
title: 有効性チェックの開発プロセス
description: 調査と YAML 定義から実際のトークンによるテスト、レビューまで、Secret Detection にベンダーの有効性チェックを追加する方法。
upstream_path: /handbook/engineering/development/sec/security-factory/secret-detection/validity-check-development-process/
upstream_sha: 52419353ea755a1ac823553385f8636ff2fcde17
lastmod: "2026-10-23T19:27:19+02:00"
translated_at: "2026-11-01T18:28:14+00:00"
translator: codex
stale: false
---

## 概要 {#overview}

有効性チェックは、検出したシークレットが現在も有効かどうかをベンダーの API に問い合わせます。ほとんどのベンダーでは、
コードを手書きする必要はありません。YAML 定義にベンダーの検証エンドポイントを記述すると、
ジェネレーターがそこからクライアントクラスとその仕様テストを生成します。

このページでは、1 つのベンダーを追加するための調査、定義、生成、実際のトークンによるテスト、レビューを説明します。
検出結果は、それに一致した検出ルールの ID に基づいて該当するチェックに振り分けられます。ルール自体については、
[ルール開発プロセス](rule-development-process)で説明します。

前提条件:

- トークン種別の検出ルールが
  [secret-detection-rules](https://gitlab.com/gitlab-org/security-products/secret-detection/secret-detection-rules)に存在すること。
- ベンダーに、有効なトークンと失効したトークンで異なるステータスコードを返す、
  認証付きのエンドポイントがあること。

どちらかの前提条件を満たさない場合は、[ジェネレーターで対応できない場合](#when-the-generator-is-not-enough)を参照してください。

## 1. ベンダーを調査する {#1-research-the-vendor}

各回答の情報源を記録してください。これらの回答は、手順 5 で MR の説明に記載します。

- ルール ID: ルールの TOML ファイルにある `id` を、大文字と小文字、スペースも含めて正確に使用します。レジストリはこの値で振り分けるため、
  一致しないとチェックが実行されません。複数のトークン種別を持つベンダーでは、
  ルール ID ごとに 1 つの定義が必要です。
- エンドポイント: スコープがなくても機能する、最も負荷の小さい認証付き呼び出しを選びます。通常はアカウント情報や「自分は誰か」を返す
  エンドポイントが該当します。データの作成や変更、課金、分析データの記録が発生するエンドポイントは使用しないでください。
  たとえば、返された項目ごとに閲覧回数を加算する一覧エンドポイントは適しません。
- 認証方式: トークンの送信方法です。サポートする値:
  - `bearer`: `Authorization: Bearer <token>`。
  - `header`: `auth_param` で指定した名前のカスタムヘッダー。必要に応じて `auth_prefix` でスキームを指定します。
  - `basic_username`: トークンをユーザー名として使用する HTTP Basic 認証。
  - `basic_password`: トークンをパスワードとして使用し、`auth_param` に固定のユーザー名を指定する HTTP Basic 認証。
- ステータスコード: 有効なトークン、失効したトークン、スコープが制限された有効なトークンに対するコードを確認します。
  形式は正しいが無効なトークンを curl で送信し、コードを記録してください。コードをマッピングするのは、
  常に同じ結果を意味する場合だけです。マッピングされていないコードは `unknown` と判定します。
- リージョン別ホストとセルフホスト版: ベンダーがリージョン別の API を運用している場合や、セルフホスト版で
  同じトークン形式を使用する場合、誤ったホストに送信すると有効なトークンでも `401` を受け取る可能性があります。
  異なるリージョンへの送信をテストしてください。その結果、`401` を `unknown` にマッピングする必要があり、失効を意味するほかのコードもない場合は、
  ジェネレーターが定義を拒否します。[ジェネレーターで対応できない場合](#when-the-generator-is-not-enough)を参照してください。
- レート制限: ベンダーが文書化している上限と、検証呼び出しがトークン所有者の
  クォータを消費するかどうかを確認します。

## 2. 定義を記述する {#2-write-the-definition}

`ee/lib/security/secret_detection/partner_tokens/generator/definitions/<vendor>.yml` を作成してください。
[定義の例](https://gitlab.com/gitlab-org/gitlab/-/blob/master/ee/lib/security/secret_detection/partner_tokens/generator/examples/example_vendor.yml)に
すべてのフィールドの説明があります。ジェネレーターの実行時に、`VendorDefinition` が安全でない定義や不完全な定義を拒否します。

```yaml
---
token_type: "Acme API token"              # the rule id, verbatim
class_name: "AcmeClient"
partner_name: "acme"                      # metrics label, lowercase; optional, derived from class_name
endpoint: "https://api.acme.dev/v1/whoami"
http_method: "get"
auth_style: "bearer"
# For a scheme in front of the token, such as "Authorization: AccessKey <token>":
# auth_style: "header"
# auth_param: "Authorization"
# auth_prefix: "AccessKey "
token_pattern: '\Aacme_[a-z0-9]{20}\z'   # anchored, same shape as the rule regex
sample_token: "acme_aaaaaaaaaaaaaaaaaaaa"   # filler that matches token_pattern
rate_limit_key: "partner_acme_api"
doc_url: "https://docs.acme.dev/api/authentication"
# Fixed headers the vendor needs on every request. Quote the values.
# extra_headers:
#   Acme-Version: "2024-01-01"
status_map:
  "200": "active"
  "401": "inactive"
  "429": "rate_limit"
  "500": "network_error"
  "502": "network_error"
  "503": "network_error"
  "504": "network_error"
```

定義に関するルール:

- `sample_token` は `token_pattern` に一致する必要があります。検出ルールにも一致しますが、これは想定どおりです。
  定義ディレクトリとクライアントの仕様テストは、`config/gitleaks.toml` の許可リストに登録されています。
- スコープが制限された有効なトークンが `403` を受け取る可能性がある場合は、`403` を明示的に `unknown` にマッピングしてください。
  するとジェネレーターは、そのケースの仕様テスト例を出力します。失効したトークンが `401` を受け取り、
  スコープを持たない有効なトークンが `403` を受け取ると確認できた場合に限り、`403` を `active` にマッピングしてください。
- 同じエンドポイントを共有するトークン種別は、1 つの `rate_limit_key` と 1 つの `partner_name` を共有します。

## 3. 生成して接続する {#3-generate-and-wire-up}

```shell
bundle exec rake "gitlab:secret_detection:validity_checks:generate[ee/lib/security/secret_detection/partner_tokens/generator/definitions/<vendor>.yml]"
```

YAML の編集後に再生成する場合は、`FORCE=true` を設定してください。タスクはレジストリエントリと、
残りの手動手順を表示します:

1. `ee/lib/security/secret_detection/partner_tokens/registry.rb` の `PARTNERS` にエントリを追加します。
1. `ee/spec/services/security/secret_detection/partner_tokens/registry_spec.rb` の 3 つのテーブルに同じエントリを追加します。
1. `ee/lib/ee/gitlab/application_rate_limiter/labkit_adapter/supported_rate_limits.rb` に `partner_<vendor>_api` ルールを追加します。
   ベンダーの上限がそれより低くない限り、プロジェクトごとに毎分 50 リクエストとします。
1. トークン種別と、新規の場合はエンドポイント URL を `doc/user/application_security/vulnerabilities/validity_check.md` に追加します。
   アルファベット順を保ち、ベンダー自身の製品名を使用してください。

生成されたクライアントや仕様テストを手で編集しないでください。`generated_client_sync_spec.rb` はすべての
定義を再生成し、コミット済みファイルと異なる場合は失敗します。次を実行してください:

```shell
bundle exec rspec ee/spec/lib/security/secret_detection/partner_tokens/<vendor>_client_spec.rb \
  ee/spec/services/security/secret_detection/partner_tokens/registry_spec.rb \
  ee/spec/lib/security/secret_detection/partner_tokens/generator/generated_client_sync_spec.rb
```

## 4. 実際のトークンでテストする {#4-test-with-a-live-token}

レビュアーは、MR を準備完了にする前に、実際のトークンで `active` の経路が確認されていることを求めます。ベンダーの
ドキュメントだけでは不十分です。

ベンダーのアカウントを作成してください:

- チームメイトがパスワードをリセットできるように、チームの共有メールボックス `secrets@gitlab.com` で登録します。
- 1Password でパスワードを生成します。ベンダー名、使用したメールアドレス、対応する有効性チェックとともに、
  ログイン情報を Engineering 保管庫に保存します。ベンダーが 2 要素認証を要求する場合は、TOTP シークレットと
  リカバリーコードを同じアイテムに保存します。
- ベンダーにメールでの登録機能がない場合は、同じ方法で作成した GitHub アカウントでサインインするか、
  共有保管庫に保存したパスキーを使用します。
- ベンダーが支払い方法や特定のメールドメインを要求する場合は、支払う前にチームのチャンネルで相談してください。
  チームメイトがすでにアクセス権を持っているかもしれません。

提供されている最小限のスコープでトークンを作成してください。読み取り専用または関係のないスコープを使えば、エンドポイントに
特定の権限が不要であると確認できます。その後、次を実行します:

```shell
read -s TOKEN
curl -sS -o /dev/null -w '%{http_code}\n' -H "Authorization: Bearer $TOKEN" https://api.example.com/v1/me
```

`active` のコードが返ることを確認してください。ベンダーの UI でトークンを失効させ、リクエストを繰り返します。`inactive` の
コードが返ることを確認してください。認証方式に合わせてヘッダーを調整します。POST エンドポイントでは、本文のない curl リクエストに
`411` を返すベンダーもあるため、`-d ''` を追加してください。生成されたクライアントは `Content-Length: 0` を送信するため、影響を受けません。

トークンを入手できない場合は、その旨を MR に記載してください。`unknown` と判定されるのは、マッピングされていないコードだけです。
ベンダーが一部の失効済みトークンに `200` を返す場合、`200: active` のマッピングはそれらを有効と報告します。
このベンダーについて、ドキュメントだけで十分な根拠となるかどうかは、レビュアーが判断します。

完了したらテスト用トークンを失効または削除してください。アカウントは残します。

## 5. MR を作成する {#5-open-the-mr}

ベンダーごとに 1 つのコミットを使用します。コミットの件名: `Add a validity check for <Vendor> <token type>`。コミット本文:
`Changelog: added` と `EE: true`。サンプルトークンがブロック対象ルールに一致するためにシークレットプッシュ保護がプッシュを
ブロックした場合は、コミット本文に `[skip secret push protection]` を追加して再度プッシュしてください。デフォルトでは追加しないでください。
実際のトークンによるテストが完了するまでは、MR を `Draft: [skip ci]` として作成します。その後、両方のマーカーを
タイトルから削除し、MR の **Pipelines** タブで **Run pipeline** を選択します。

MR の説明のセクション:

- 検証: 無効なトークンのステータスコードと、実際のトークンの失効前および
  失効後のステータスコード。
- 注記: このエンドポイントを選んだ理由、デフォルト以外のすべてのステータスマッピングとその情報源、対象に含めなかったトークン種別と
  その理由、リージョンやセルフホストに関する注意事項、ベンダーのレート制限。
- `Resolves <full issue URL>`。

Secret Detection のレビュアーを割り当ててください。ブランチへのプッシュごとに承認がリセットされるため、
最終承認を依頼する前にすべての修正を完了してください。

## レビュアーのチェックリスト {#reviewer-checklist}

これらは、最近のベンダー MR のレビューで挙がった点です。MR を作成する前に確認してください。

- トークン種別がルール ID と完全に一致していること。MR は、そのエンドポイントで検証できるベンダーのすべてのルール ID を対象とし、
  公開可能なキー、リフレッシュトークン、認証キーなど、検証できないものを
  理由とともに列挙していること。
- `token_pattern` がルールの正規表現の文字集合と長さに一致していること。
- 有効なトークンが決して返さないコードだけを `inactive` にマッピングしていること。スコープが制限された有効なトークンで
  `403` を受け取った場合、リージョンが誤っている場合、セルフホスト版の場合に、`inactive` と判定しないこと。
- MR の説明で取り上げたコードに明示的な `unknown` エントリがあり、仕様テストでその動作を固定していること。
- エンドポイントがデータを作成せず、アカウントに課金せず、トークン所有者が気づくほどのクォータを消費しないこと。
  クォータを消費する場合は、ユーザードキュメントにその旨を記載していること。
- ドキュメントのエントリと MR タイトルにベンダーの製品名を使用し、名前が変更された認証情報の種別も対象としていること。
- レート制限キーが YAML、レジストリ、レジストリの仕様テスト、レート制限ルールに存在すること。
- `doc_url` にアクセスでき、使用するエンドポイントの説明があること。

## ジェネレーターで対応できない場合 {#when-the-generator-is-not-enough}

ジェネレーターは、`inactive` を決して返せない定義を拒否します。次の場合はクライアントを手書きしてください:

- ベンダーが失効したトークンと一部の有効なトークンに同じステータスコードを返すため、
  判定がレスポンス本文に依存する場合。
- ベンダーがリクエスト本文またはクエリパラメーターによる認証を必要とする場合。これらは、
  [#631759](https://gitlab.com/gitlab-org/gitlab/-/work_items/631759)でジェネレーターの機能に関する Issue として追跡しています。
- ベンダーがリージョンごとに分かれたホストを運用している場合。ジェネレーターのサポートは
  [#631945](https://gitlab.com/gitlab-org/gitlab/-/work_items/631945)で追跡しています。
- キー ID とシークレットのペアなど、検証に複数の抽出値が必要な場合。これは
  [複数部分から成るトークンの調査](https://gitlab.com/gitlab-org/gitlab/-/work_items/631961)で追跡しています。

手書きのクライアントは `BaseClient` を継承し、マッピングされていないコードを `unknown` と判定するフォールバックを維持して、
`a partner token client` の共有例を含めます。同期仕様テストがこのクライアントを無視するように、生成済みを示すヘッダーコメントと
YAML 定義を削除し、クラスの冒頭にある短いコメントで
その理由を説明してください。

## 参考資料 {#references}

- [有効性チェックの設計ドキュメント](/handbook/engineering/architecture/design-documents/secret_detection_validity_checks/)と
  [ADR 006](/handbook/engineering/architecture/design-documents/secret_detection_validity_checks/decisions/006_map_token_types_directly_to_verifiers/)
- すべてのルールと現在検証可能かどうかを列挙した[同等性評価](https://gitlab.com/gitlab-org/gitlab/-/work_items/631759)
- [有効性チェックのトラブルシューティング用ランブック](runbooks/secret-detection-validity-check-troubleshooting)
