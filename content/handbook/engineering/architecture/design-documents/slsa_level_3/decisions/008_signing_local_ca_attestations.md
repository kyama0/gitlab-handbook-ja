---
layout: handbook-page-toc
title: "ADR 008: LOCAL_CA 証明への署名"
description: "この ADR は、GitLab が LOCAL_CA 証明への署名に使用するリーフ証明書を形作る決定を記録します。対象は、そのアイデンティティ、有効期間、証明ごとに新しく生成するキーです。"
upstream_path: "/handbook/engineering/architecture/design-documents/slsa_level_3/decisions/008_signing_local_ca_attestations/"
upstream_sha: ab93800e4c241789ac67785899fa20ffa1eb0854
lastmod: "2026-11-05T07:24:15+13:00"
translated_at: "2026-11-05T15:15:16.188555+00:00"
translator: codex
stale: false
---

## 背景 {#context}

[ADR 007](/handbook/engineering/architecture/design-documents/slsa_level_3/decisions/007_attestations_private_dedicated_self_hosted/)
では、公開 Sigstore インフラストラクチャを使用できない証明には、キーを PostgreSQL に保存する
認証局（CA）が署名することを決定しました。これが `LOCAL_CA` 証明方式です。
各プロジェクトは独自の CA を持ちます。各証明には新しいキーで署名し、プロジェクトの CA が発行する
リーフ証明書によって、そのキーをプロジェクト、CI 設定ファイル、ref に結び付けます。

この ADR は、そのリーフ証明書を形作る決定を記録します。これにより、オフラインのインスタンスも含め、
GitLab.com、GitLab Dedicated、self-managed インスタンスで同じ方法で署名できます。

## 決定 {#decision}

GitLab は、各 `LOCAL_CA` 証明に、新しいキーとプロジェクトの CA が発行したリーフ証明書を使用して署名します。
以下のセクションで、この決定の各要素を説明します。

### URI SAN 内の署名アイデンティティ {#signing-identity-in-a-uri-san}

リーフ証明書のサブジェクトは空で、critical に設定した URI サブジェクト代替名（SAN）が 1 つあります。
例を示します。

```plaintext
Subject: (empty)
X509v3 Subject Alternative Name: critical
    URI:https://gitlab.example.com/my-group/my-project//.gitlab-ci.yml@refs/heads/main
```

URI は、パイプラインの `ci_config_ref_uri` の先頭にインスタンスのプロトコルを付けたものです。
`ci_config_ref_uri` を生成するのは GitLab であり、ジョブではありません。
[CI/CD ID トークン](https://docs.gitlab.com/ci/secrets/id_token_authentication/)の
`ci_config_ref_uri` クレームでも同じ形式を使用します。

このアイデンティティには、CN よりも URI SAN が適しています。

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

GitLab は、常に SAN にちょうど 1 つの絶対 URI を発行し、サブジェクトが空の場合に RFC 5280 が要求するように、
この拡張を critical に設定します。CN をアイデンティティに使用することは決してありません。
検証側は、証明書自体から読み取った値ではなく、独立に決定したアイデンティティと SAN を比較します。

リーフ証明書には Fulcio issuer 拡張（OID
`1.3.6.1.4.1.57264.1.8`）も含まれ、その値をインスタンスの URL、たとえば
`https://gitlab.example.com` に設定します。Fulcio サーバーや OIDC のやり取りは関与しません。
GitLab がこの値を表明することで、検証側は Sigstore 証明と同様に
`--certificate-oidc-issuer` で確認できます。

### 有効期間の長いリーフ証明書 {#long-lived-leaf-certificates}

リーフ証明書は数年間有効であるため、証明への署名から数年間、検証可能な状態を維持できます。

リーフ証明書は、証明の Sigstore バンドルに保存します。GitLab はこのバンドルを証明とともに保持し、
ユーザーは [Attestations API](https://docs.gitlab.com/api/attestations/)でダウンロードします。
秘密鍵は一時的なものです。証明ごとに新しいキーを生成し、一度使用して破棄し、保存することは決してありません。

CA は、少なくともリーフ証明書の有効期間中は自身が有効であり続ける場合にのみ、リーフ証明書を発行します。

### 証明ごとの新しいキーと証明書 {#a-new-key-and-certificate-for-every-attestation}

GitLab は証明ごとに新しいリーフキーと証明書を生成します。
ジョブが複数のアーティファクトを生成する場合も、アーティファクトごとに生成します。
キーで署名するのはちょうど 1 つの証明であり、再利用することは決してありません。これは、次のことを意味します。

- 保存、保護が必要な、あるいは漏洩するおそれのある長期的な署名キーがありません。
  長期的な保護が必要なのは、CA キーだけです。
- Sigstore も署名ごとに新しいキーを使用するため、ユーザーから見ると両方の証明方式が同じように機能します。
- 各証明が独自の証明書を持つため、証明が互いに依存することはありません。

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

## 影響 {#consequences}

### 良い影響 {#positive}

- アイデンティティが Sigstore 証明書と同じ形式であるため、
  cosign の既存のアイデンティティチェックは `LOCAL_CA` 証明書でもそのまま機能します。
- Fulcio の証明書プロファイルに従うことで、Sigstore を知っている人にとって `LOCAL_CA` 証明書が
  なじみのあるものになり、標準の X.509 ツールで読み取れます。
- 長期間保持するシークレットは CA キーだけです。リーフキーは、1 つの証明に署名している間だけ存在します。
- 各証明には独自のキーと証明書で署名するため、証明が互いに依存することはありません。

### 悪い影響 {#negative}

- 証明を検証できるのは、リーフ証明書が期限切れになるまでです。
  より長く検証可能な状態を維持するには、再署名が必要です。漏洩したリーフキーや CA キーによっても、
  期限切れになるまで検証に通る証明書を作成できる可能性があります。
  リーフ証明書の有効期間を短くすると、両方を軽減できます（
  [今後の検討事項](#future-considerations)を参照）。
- CA は、自身が発行するすべてのリーフ証明書よりも長く有効でなければならないため、
  自身の有効期限よりかなり前に発行を停止し、その時点までに置き換える必要があります。
  キーのローテーションは ADR 007 とこの ADR の範囲外です。

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

## 参考資料 {#references}

- [ADR 007: プライベートリポジトリ、GitLab dedicated、self-managed インスタンスの証明](/handbook/engineering/architecture/design-documents/slsa_level_3/decisions/007_attestations_private_dedicated_self_hosted/)
- [Fulcio 証明書仕様](https://github.com/sigstore/fulcio/blob/main/docs/certificate-specification.md)
- [RFC 5280: インターネット X.509 公開鍵基盤の証明書および CRL プロファイル](https://www.rfc-editor.org/rfc/rfc5280.html)
- [Sigstore: 信頼できる時刻](https://blog.sigstore.dev/trusted-time/)
