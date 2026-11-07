---
layout: handbook-page-toc
title: "ADR 008: LOCAL_CA 証明への署名"
description: "この ADR は、GitLab による LOCAL_CA 証明への署名方法を形作る決定を記録します。対象は、リーフ証明書、cosign の設定方法、署名用のデータの取り扱いと記録方法です。"
upstream_path: "/handbook/engineering/architecture/design-documents/slsa_level_3/decisions/008_signing_local_ca_attestations/"
upstream_sha: d717b9da633f2989a0b1854384a69a0c31bae680
lastmod: "2026-11-06T03:58:01+05:30"
translated_at: "2026-11-07T00:09:35.180591+00:00"
translator: codex
stale: false
---

## 背景 {#context}

[ADR 007](/handbook/engineering/architecture/design-documents/slsa_level_3/decisions/007_attestations_private_dedicated_self_hosted/)
では、公開 Sigstore インフラストラクチャを使用できない証明には、キーを PostgreSQL に保存する
認証局（CA）が署名することを決定しました。私たちはこれを `LOCAL_CA` 証明方式と呼びます。
各プロジェクトは独自の CA を持ち、各証明には新しいキーで署名します。プロジェクトの CA が発行する
リーフ証明書によって、そのキーをプロジェクト、CI 設定ファイル、ref に結び付けます。

この ADR は、そのリーフ証明書の構築方法と、それを使用した署名方法を記録します。
目標は、オフラインのインスタンスも含め、GitLab.com、GitLab Dedicated、self-managed インスタンスで
`LOCAL_CA` 署名を同じように機能させることです。GitLab.com の公開プロジェクトは、
ADR 007 で説明しているとおり、デフォルトで Sigstore を使用します。

以下の決定の大半は、cosign の 2 つの特性を踏まえています。第一に、cosign v3 は署名設定を中心に構築されています。
Fulcio、Rekor、タイムスタンプ局など、使用する Sigstore サービスを署名設定から読み取り、
設定が指定されていない場合は公開 Sigstore の設定を使用します。以前のバージョンでは、
`--tlog-upload=false` で透明性ログを省略していました。cosign v3 では、このフラグを非推奨とし、
ログのない署名設定を使用するようになったため、私たちもその設定を渡し、フラグは使用しません。
第二に、cosign はファイルを扱うため、キー、証明書、トラストルート、署名設定はすべて、
cosign が使用する前にディスク上に存在している必要があります。

## 決定 {#decision}

私たちは、各 `LOCAL_CA` 証明に、新しいキーとプロジェクトの CA が発行したリーフ証明書を使用し、
cosign でオフラインで署名します。以下のセクションで、その各要素を説明します。

### URI SAN 内の署名アイデンティティ {#signing-identity-in-a-uri-san}

リーフ証明書のサブジェクトは空で、critical に設定した URI サブジェクト代替名（SAN）が 1 つあります。
例を示します。

```plaintext
Subject: (empty)
X509v3 Subject Alternative Name: critical
    URI:https://gitlab.example.com/my-group/my-project//.gitlab-ci.yml@refs/heads/main
```

URI は、パイプラインの `ci_config_ref_uri` の先頭にインスタンスのプロトコルを付けたものです。
この値を生成するのは GitLab であり、ジョブではありません。
[CI/CD ID トークン](https://docs.gitlab.com/ci/secrets/id_token_authentication/)の
`ci_config_ref_uri` クレームでも同じ形式を使用します。

いくつかの理由から、私たちはアイデンティティを CN ではなく URI SAN に格納します。

- アイデンティティは URI であり、
  [RFC 5280 セクション 4.2.1.6](https://www.rfc-editor.org/rfc/rfc5280.html#section-4.2.1.6)
  では、この目的のために URI SAN を定義しています。
- [Fulcio の証明書プロファイル](https://github.com/sigstore/fulcio/blob/main/docs/certificate-specification.md#issued-certificate)と一致します。
  cosign は SAN からアイデンティティを読み取り、CN にはフォールバックしないため、
  `cosign --certificate-identity` は私たちの証明書でもそのまま機能します。
- [RFC 5280 付録 A.1](https://www.rfc-editor.org/rfc/rfc5280.html#appendix-A.1)
  では、CN を 64 文字に制限しています。上記の例はすでに 78 文字あります。
- 識別名内の URI は、発行時のエスケープと検証時の慎重な解析が必要です。
  型のある SAN を使用すると、この処理が不要になります。

私たちは、常に SAN にちょうど 1 つの絶対 URI を発行し、サブジェクトが空の場合に RFC 5280 が要求するように、
この拡張を critical に設定します。CN をアイデンティティに使用することは決してありません。
検証側は、証明書自体から読み取った値ではなく、独立に決定したアイデンティティと SAN を比較します。

リーフ証明書には Fulcio issuer 拡張（OID
`1.3.6.1.4.1.57264.1.8`）も含まれ、その値をインスタンスの URL、たとえば
`https://gitlab.example.com` に設定します。Fulcio サーバーや OIDC のやり取りは関与しません。
GitLab 自身がこの値を設定するため、検証側は Sigstore 証明と同様に
`--certificate-oidc-issuer` で確認できます。

### 有効期間の長いリーフ証明書 {#long-lived-leaf-certificates}

リーフ証明書は数年間有効であるため、証明への署名から数年間、検証可能な状態を維持できます。

リーフ証明書は、証明の Sigstore バンドルに保存します。GitLab はこのバンドルを証明とともに保持し、
ユーザーは [Attestations API](https://docs.gitlab.com/api/attestations/)でダウンロードします。
秘密鍵は一時的なものです。証明ごとに新しいキーを生成し、一度使用して破棄し、保存することは決してありません。

CA は、少なくともリーフ証明書の有効期間中は自身が有効であり続ける場合にのみ、リーフ証明書を発行します。

### 証明ごとの新しいキーと証明書 {#a-new-key-and-certificate-for-every-attestation}

私たちは証明ごとに新しいリーフキーと証明書を生成します。
ジョブが複数のアーティファクトを生成する場合も、アーティファクトごとに生成します。
キーで署名するのは 1 つの証明であり、再利用することは決してありません。

主な利点は、保存や保護が必要な長期的な署名キーがないことです。
長期的な保護が必要なのは、CA キーだけです。また、署名ごとに新しいキーを使用する Sigstore とも一致するため、
ユーザーから見ると両方の証明方式が同じように機能します。
さらに、各証明が独自の証明書を持つため、証明が互いに依存することはありません。

### 明示的な署名設定によるオフライン署名 {#offline-signing-with-an-explicit-signing-configuration}

私たちは、サービスのフラグを指定せずに
[`cosign signing-config create`](https://github.com/sigstore/cosign/blob/main/doc/cosign_signing-config_create.md)で署名設定を作成し、
`--signing-config` で cosign に渡します。この設定には、透明性ログもタイムスタンプ局も指定しません。

```json
{"mediaType":"application/vnd.dev.sigstore.signingconfig.v0.2+json", "rekorTlogConfig":{}, "tsaConfig":{}}
```

また、`cosign attest-blob` コマンドでは、`COSIGN_FULCIO_URL` と `COSIGN_REKOR_URL` の設定を解除します。
cosign は `COSIGN_<FLAG>` 変数をフラグとして読み取り、`--signing-config` とともにサービスの URL を受け入れないため、
設定を解除しないと、ホスト上に設定された Sigstore の URL によって `LOCAL_CA` 署名が失敗します。

`LOCAL_CA` 署名はネットワーク呼び出しを行わないため、ネットワークから隔離された self-managed インスタンスでも
GitLab.com と同じように動作し、プライベートプロジェクトの情報が公開ログに送られることはありません。
後から GitLab が運用する透明性ログやタイムスタンプ局を追加する場合も、
署名フローではなく署名設定を変更することで対応します。

### 署名時の証明書チェーンのチェック {#certificate-chain-check-at-signing-time}

私たちは、プロジェクトの CA のみを含むトラストルートを
[`cosign trusted-root create`](https://github.com/sigstore/cosign/blob/main/doc/cosign_trusted-root_create.md)で構築し、
`--trusted-root` で `cosign attest-blob` に渡します。

```shell
cosign trusted-root create \
  --fulcio 'url=https://gitlab.example.com,certificate-chain=ca.crt.pem' \
  --no-default-fulcio --no-default-rekor --no-default-ctfe --no-default-tsa \
  --out trusted-root.json
```

| フラグ | 理由 |
|---|---|
| `--fulcio url=...,certificate-chain=...` | プロジェクトの CA を唯一の認証局として追加します。URL はインスタンスの URL であり、リーフ証明書の issuer 拡張と同じ値です。 |
| `--no-default-fulcio`, `--no-default-rekor`, `--no-default-ctfe`, `--no-default-tsa` | 公開 Sigstore の認証局、透明性ログ、タイムスタンプ局を除外し、トラストルートにはプロジェクトの CA だけが含まれるようにします。 |
| `--out` | トラストルートを、ほかの署名用のデータと同じ場所に書き出します。 |

cosign は `--fulcio` の値をカンマで分割するため、
カンマを含むファイルパスやインスタンスの URL は拒否します。

トラストルートを用意すると、cosign はバンドルを書き出す前に、リーフ証明書をプロジェクトの CA に照らしてチェックします。
その CA につながるチェーンを持たないリーフ証明書は署名時に失敗するため、検証できない証明を保存することはありません。
トラストルートにはプロジェクトの CA しか含まれないため、公開 Sigstore や別のプロジェクトの CA が発行した証明書は、
このチェックに通りません。また、署名と検証では、同じ信頼用データを同じ形式で使用します（ADR 009）。

### バンドルに埋め込むリーフ証明書 {#leaf-certificate-embedded-in-the-bundle}

私たちは、`--certificate` でリーフ証明書を `cosign attest-blob` に渡し、Sigstore バンドルに含めます。
これは、cosign が証明書とアイデンティティをチェックする、ADR 009 の検証方式に基づきます。

バンドルは自己完結したものになり、署名済みの出所と、それをアイデンティティに結び付ける証明書を 1 つのファイルに保持します。
リーフ証明書や公開鍵のための別の保存先や API は不要です。
また、`LOCAL_CA` バンドルは Sigstore バンドルと同じ形式のため、同じツールで両方を読み取れます。

### 非公開で短期間だけ保持する署名用のデータ {#private-short-lived-signing-material}

cosign はファイルを扱うため、各証明の署名用のデータを次のように準備します。

- 証明ごとに新しい一時ディレクトリを用意し、GitLab を実行するオペレーティングシステムのユーザーだけが開けるようにします。
  署名が成功しても失敗しても、署名処理が終わった時点で削除します。
- リーフキーは、
  [`cosign import-key-pair`](https://github.com/sigstore/cosign/blob/main/doc/cosign_import-key-pair.md)で cosign の暗号化キー形式に変換します。
  平文のキーは cosign の標準入力に書き込むため、ディスクに書き込まれることはありません。
  暗号化したコピーは、その証明のためだけに生成したランダムなパスワードで保護します。
- パスワードは環境変数を通じて cosign に渡し、ホストのほかのユーザーから見える可能性がある
  コマンドラインでは渡しません。
- 出所も標準入力で cosign に渡すため、ディスクには書き込みません。
- cosign は常に引数リストから直接実行し、シェルを経由することはありません。
  また、ダイジェスト、ファイル名、パスなど、渡すすべての値を事前に検証します。
  Sigstore 署名も同じ方式を使用しており、
  [シェルコマンド開発ガイドライン](https://docs.gitlab.com/development/shell_commands/)に従っています。

キーデータは、1 つの証明に署名している間だけ、ホストのほかのユーザーが読み取れないディレクトリに存在し、
署名が失敗した場合も、処理後には削除されます。

### すべての証明への署名方式と発行 CA の記録 {#signing-method-and-issuing-ca-on-every-attestation}

すべての証明に、`sigstore` または `local_ca` を値に持つ `signing_method` を記録します。
成功した `LOCAL_CA` 証明には、そのリーフ証明書を発行した CA への参照である
`signing_certificate_id` も記録します。

失敗した証明にも方式を記録しますが、CA への参照は記録しません。
署名ログにも方式を含めます。

CA が削除されても、その証明は履歴を保持し、参照だけが失われ、引き続き `local_ca` と記録されます。
プロジェクトが複数の CA を使用してきた場合も、CA が存在する間は、成功したすべての `LOCAL_CA` 証明が、
その証明を保証する CA を参照します。検証側は、証明だけから Sigstore と `LOCAL_CA` の検証経路を選択できます（ADR 009）。
また、失敗を方式別にまとめられるため、一方の経路で問題が起きている場合に把握しやすくなります。

## 証明書プロファイル {#certificate-profile}

各リーフ証明書は、次の内容を持ちます。

| フィールド | 値 |
|---|---|
| サブジェクト | 空 |
| サブジェクト代替名 | URI が 1 つ、critical |
| 発行者 | プロジェクトの CA |
| 有効期間 | 長期間。[有効期間の長いリーフ証明書](#long-lived-leaf-certificates)を参照 |
| 公開鍵 | ECDSA P-256、証明ごとに新しく生成 |
| 署名 | プロジェクトの CA による ECDSA と SHA-256 を使用した署名 |
| 基本制約 | CA ではない |
| キー使用法 | デジタル署名 |
| 拡張キー使用法 | コード署名 |
| `1.3.6.1.4.1.57264.1.8` | インスタンスの URL |

次の例では、このプロファイルでリーフ証明書を構築します。
ADR 007 の CA の例と同じ Ruby セッションで実行してください。有効期間は例です。

```ruby
require 'openssl'
require 'securerandom'

# ca_cert and ca_key come from the CA example in ADR 007.
# Example values, in seconds. The leaf certificate must expire before the CA.
leaf_validity = 3 * 365 * 24 * 60 * 60 # 3 years
clock_skew = 5 * 60 # 5 minutes, backdates not_before

identity = 'https://gitlab.example.com/my-group/my-project//.gitlab-ci.yml@refs/heads/main'
instance_url = 'https://gitlab.example.com'

leaf_key = OpenSSL::PKey::EC.generate('prime256v1')

leaf_cert = OpenSSL::X509::Certificate.new
leaf_cert.version = 2 # X.509 v3
leaf_cert.serial = SecureRandom.random_number(1...(2**159))
leaf_cert.not_before = Time.now - clock_skew
leaf_cert.not_after = Time.now + leaf_validity
leaf_cert.public_key = leaf_key
leaf_cert.subject = OpenSSL::X509::Name.new([])
leaf_cert.issuer = ca_cert.subject

extension_factory = OpenSSL::X509::ExtensionFactory.new
extension_factory.subject_certificate = leaf_cert
extension_factory.issuer_certificate = ca_cert

leaf_cert.add_extension(extension_factory.create_extension('basicConstraints', 'CA:FALSE', true))
leaf_cert.add_extension(extension_factory.create_extension('keyUsage', 'digitalSignature', true))
leaf_cert.add_extension(extension_factory.create_extension('extendedKeyUsage', 'codeSigning'))
leaf_cert.add_extension(extension_factory.create_extension('subjectKeyIdentifier', 'hash'))
leaf_cert.add_extension(extension_factory.create_extension('authorityKeyIdentifier', 'keyid:always'))

# Built as ASN.1, so the URI is never parsed as an OpenSSL config string.
san = OpenSSL::ASN1::Sequence.new([OpenSSL::ASN1::ASN1Data.new(identity, 6, :CONTEXT_SPECIFIC)])
leaf_cert.add_extension(OpenSSL::X509::Extension.new('subjectAltName', san.to_der, true))

issuer = OpenSSL::ASN1::UTF8String.new(instance_url)
leaf_cert.add_extension(OpenSSL::X509::Extension.new('1.3.6.1.4.1.57264.1.8', issuer.to_der, false))

leaf_cert.sign(ca_key, OpenSSL::Digest.new('SHA256'))
```

## 署名コマンド {#signing-command}

アーティファクトまたはイメージのダイジェストごとに、プロジェクトの CA から新しいリーフキーと証明書を取得し、
[署名用のデータ](#private-short-lived-signing-material)を準備して、出所に署名します。

```shell
cosign attest-blob \
  --new-bundle-format \
  --predicate - \
  --type slsaprovenance1 \
  --hash <SHA-256 digest> \
  --key cosign.key \
  --certificate leaf.crt.pem \
  --trusted-root trusted-root.json \
  --signing-config signing-config.json \
  --yes \
  --bundle attestation.bundle \
  -- ./<artifact name or digest>
```

| フラグ | 理由 |
|---|---|
| `--key` | この証明のために新しく生成した、cosign の暗号化形式のリーフキーです。 |
| `--certificate` | リーフ証明書をバンドルに埋め込みます。 |
| `--trusted-root` | バンドルを書き出す前に、cosign がリーフ証明書をプロジェクトの CA に照らしてチェックするようにします。 |
| `--signing-config` | 透明性ログとタイムスタンプ局を使用せず、署名をオフラインに保ちます。 |
| `--predicate -` | SLSA 出所を標準入力から読み取り、ディスクに書き込まないようにします。 |
| `--type slsaprovenance1` | 述語を SLSA 出所 v1 として示します。 |
| `--hash` | GitLab が計算した SHA-256 ダイジェストに署名するため、cosign がアーティファクトを読み取る必要はありません。 |
| `--new-bundle-format` | 標準の Sigstore バンドルを書き出します。 |
| `--bundle` | cosign がバンドルを書き出す場所です。GitLab はその後、証明とともにバンドルを保存します。 |
| `--yes` | 署名はバックグラウンドで実行されるため、cosign の確認プロンプトを省略します。 |
| `-- ./<name>` | 出所内のサブジェクト名で、アーティファクトのファイル名またはイメージのダイジェストです。`--` と `./` によって、名前がフラグとして読み取られるのを防ぎます。 |

Sigstore 署名と比較すると、`LOCAL_CA` では、`--identity-token`、`--oidc-issuer`、`--use-signing-config=false` を、
`--key`、`--certificate`、`--trusted-root`、`--signing-config` に置き換えます。
それ以外は共通のため、両方の方式が同じ出所から同じ種類のバンドルを生成します。
`LOCAL_CA` では、アイデンティティは GitLab が発行する証明書から得られるため、
ジョブの CI/CD ID トークンを cosign に渡しません。

## 影響 {#consequences}

### 良い影響 {#positive}

- `LOCAL_CA` 署名は、ネットワークから隔離されたインスタンスも含め、GitLab.com、GitLab Dedicated、
  self-managed インスタンスで同じように動作し、外部サービスや設定は不要です。
- プライベートプロジェクトの詳細が公開ログに送られることはありません。
- 証明は標準の Sigstore バンドルであり、cosign が 1 つのトラストルートで検証するため、
  ユーザーは GitLab 固有のツールを必要としません。
- Fulcio の証明書プロファイルに従っているため、cosign の既存のアイデンティティチェックは
  `LOCAL_CA` 証明書でも機能します。Sigstore を知っている人にはなじみのある証明書であり、
  標準の X.509 ツールで読み取れます。
- 長期間保持するシークレットは CA キーだけです。リーフキーは、1 つの証明に署名している間だけ存在し、
  非公開の一時ディレクトリから外に出ることはありません。
- 各証明には独自のキーと証明書で署名するため、証明が互いに依存することはありません。
- チェーンのチェックにより、ユーザーが検証しようとした時点ではなく、署名時に誤りが明らかになります。
- すべての証明から署名した方式を追跡でき、成功したすべての `LOCAL_CA` 証明からは、
  CA が存在する間、その証明書を発行した CA を追跡できます。

### 悪い影響 {#negative}

- 証明を検証できるのは、リーフ証明書が期限切れになるまでです。
  より長く検証可能な状態を維持するには、再署名が必要です。漏洩したリーフキーや CA キーによっても、
  期限切れになるまで検証に通る証明書を作成できる可能性があります。
  リーフ証明書の有効期間を短くすると、両方を軽減できます（
  [今後の検討事項](#future-considerations)を参照）。
- CA は、自身が発行するすべてのリーフ証明書よりも長く有効でなければならないため、
  自身の有効期限よりかなり前に発行を停止し、その時点までに置き換える必要があります。
  キーのローテーションは ADR 007 とこの ADR の範囲外です。
- アーティファクトごとに、追加でいくつかのローカル cosign コマンドが必要です。暗号化したリーフキーが
  一時的にローカルディスクに置かれ、バンドルは少し大きくなり、署名は cosign v3 に依存します。

### 今後の検討事項 {#future-considerations}

フォローアップとして、有効期間の短いリーフ証明書と、タイムスタンプ局（TSA、
[RFC 3161](https://www.rfc-editor.org/rfc/rfc3161.html)）または透明性ログによる
信頼できる署名時刻を組み合わせる方式への移行を目指しています。
そうすると、検証側は、検証時ではなく、証明への署名時に証明書が有効だったかを確認します。
これにより、次のことが可能になります。

- 漏洩したリーフキーが利用可能な期間を制限する。
- CA の有効期間も短縮できるようにする。
- 変更後に署名した証明を、リーフ証明書の期限切れ後も検証可能な状態に保つ。

これには、self-managed および Dedicated インスタンスで実行できる TSA またはログが必要です。
そのため、ADR 007 の透明性ログに関する決定と併せて取り組みます。

## 検討した代替案 {#alternatives-considered}

### サブジェクト CN 内のアイデンティティ {#identity-in-the-subject-cn}

アイデンティティを `/CN=<identity>/DC=gitlab` のように CN に格納することもできます。
しかし、アイデンティティは通常 CN で許容される長さを超える URI であり、
識別名内でのエスケープが必要になります。また、cosign は CN からアイデンティティを読み取らないため、
アイデンティティチェックが機能しなくなります。

### `--tlog-upload=false` による透明性ログの省略 {#skipping-the-transparency-log-with---tlog-uploadfalse}

これは Rekor を使用せずに署名する従来の方法であり、cosign v3 では非推奨です。
また、cosign のほかのデフォルト設定がそのまま残り、このモードでは cosign が証明書チェーンを一切チェックせずに署名します。
署名設定だけでも不十分です。`--trusted-root` がない場合、cosign は公開 Sigstore のトラストルートに照らして
リーフ証明書をチェックしますが、このトラストルートにはプロジェクトの CA が含まれていません。
私たちは代わりに、ログのない署名設定と、プロジェクトの CA のみを含むトラストルートを渡します。

### 証明とともに公開鍵を保存する {#storing-the-public-key-with-the-attestation}

リーフの公開鍵を証明とともに保存し、`cosign --key` で署名を検証し、証明書を別途チェックすることもできます。
これには、キーや証明書のための別の保存先と API、および GitLab が管理する証明書チェックが必要です。
証明書を埋め込むことで、両方が不要になります。ADR 009 では、この 2 つの検証方式を比較しています。

### 署名方式の推測 {#inferring-the-signing-method}

証明が CA を参照しているかどうかから方式を推測することもできますが、CA を削除するとその参照が消え、
その証明が Sigstore の証明のように見えるようになります。バンドル内の証明書から読み取ることもできますが、
その場合はすべてのバンドルをダウンロードして解析する必要があるため、クエリで取得できません。
方式を明示的に記録すれば、両方の問題を回避できます。

## 参考資料 {#references}

- [ADR 007: プライベートリポジトリ、GitLab dedicated、self-managed インスタンスの証明](/handbook/engineering/architecture/design-documents/slsa_level_3/decisions/007_attestations_private_dedicated_self_hosted/)
- [cosign attest-blob](https://github.com/sigstore/cosign/blob/main/doc/cosign_attest-blob.md)
- [cosign import-key-pair](https://github.com/sigstore/cosign/blob/main/doc/cosign_import-key-pair.md)
- [cosign signing-config create](https://github.com/sigstore/cosign/blob/main/doc/cosign_signing-config_create.md)
- [cosign trusted-root create](https://github.com/sigstore/cosign/blob/main/doc/cosign_trusted-root_create.md)
- [Fulcio 証明書仕様](https://github.com/sigstore/fulcio/blob/main/docs/certificate-specification.md)
- [RFC 5280: インターネット X.509 公開鍵基盤の証明書および CRL プロファイル](https://www.rfc-editor.org/rfc/rfc5280.html)
- [シェルコマンド開発ガイドライン](https://docs.gitlab.com/development/shell_commands/)
- [Sigstore: 信頼できる時刻](https://blog.sigstore.dev/trusted-time/)
