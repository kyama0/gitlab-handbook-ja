---
layout: handbook-page-toc
title: "ADR 007: プライベートリポジトリ、GitLab dedicated、self-managed インスタンスの証明"
description: "この ADR は、パブリック Sigstore インフラストラクチャを使用できない状況でソフトウェア証明を実現する仕組みを定めます。"
upstream_path: /handbook/engineering/architecture/design-documents/slsa_level_3/decisions/007_attestations_private_dedicated_self_hosted/
upstream_sha: 6421bb05e502917cfdfa263c81ae8fbbc41ed52b
lastmod: "2026-06-22T09:27:06+12:00"
translated_at: "2026-06-22T07:04:45+09:00"
translator: codex
stale: false
---

## 背景

~"group::pipeline security" グループは、ユーザーに
[SLSA レベル 3 出所証明](/handbook/engineering/architecture/design-documents/slsa_level_3/)を提供するために取り組んでいます。
簡略化してまとめると、[GitLab のコンテキスト](/handbook/engineering/architecture/design-documents/slsa_level_3/)では、
出所ステートメントは、アーティファクトまたは OCI コンテナの SHA-256 合計を
ビルド情報と関連付ける JSON ドキュメントです。その後、ワーカーが
[デジタル署名](/handbook/engineering/architecture/design-documents/slsa_level_3/decisions/004_attestation_in_sidekiq/)を実行します。
これは出所証明と呼ばれ、"Sigstore Bundle" blob として保存されます。

これらのデジタル署名はバックグラウンドワーカーによって開始されますが、
"public-good" Sigstore インフラストラクチャとして知られるものを活用します。詳細は
[Sigstore Overview](https://docs.sigstore.dev/about/overview/) ページで確認できます。
この "public-good" インフラストラクチャは、以下で強調する理由により、プライベート
リポジトリ、self-managed、dedicated デプロイメントには適していません。

この ADR は、PostgreSQL 内に保存されたキーを使用して署名を実行するという私たちの決定を記録し、
その根拠を文書化します。さらに、この ADR には、Rekor の利用について恒久的な決定が
行われるまで、これらのケースで Rekor を一時的に無効化するという決定に関する情報も含まれます。

さらに、この機能を使用するためにユーザーが活用する新しい UX と、このインテグレーションで使用される
技術的な仕組みも示します。

### この変更が必要な理由

以下で強調する点、特に Rekor への情報開示と、self-managed および Dedicated デプロイメントで
Sigstore と統合することの難しさは、現在の実装がこの種の顧客には実行可能ではないことを示しています。

この ADR の変更を実装することで、既存のインフラストラクチャを活用し、コスト効率の高い方法で
コントロールプレーン内の SLSA L3 証明を提供できます。提案するソリューションを使用することで、
ユーザーはパイプラインを簡単に設定して証明を生成でき、その証明を利用前に検証できます。
これにより、セキュリティ意識が最も高いユーザーに対するサプライチェーン攻撃を防止できます。

### 参考資料

- [[Discussion] UX to enable SLSA provenance generation (#547903)](https://gitlab.com/gitlab-org/gitlab/-/work_items/547903#note_2748278333)
- [ADR 002: Generate SLSA Provenance in GitLab Rails backend](/handbook/engineering/architecture/design-documents/slsa_level_3/decisions/002_provenance_generation_location/)
- [ADR 006: Enable the creation of SLSA Level 3 Attestations for OCI images](https://gitlab.com/gitlab-com/content-sites/handbook/-/merge_requests/17936)
- [Cosign Image Signatures. The protocol format explained!](https://medium.com/sigstore/cosign-image-signatures-77bab238a93)
- [FF `slsa_provenance_statement` -- Roll out feature flag to publish SLSA provenance statements (#547866)](https://gitlab.com/gitlab-org/gitlab/-/work_items/547866)
- [Phase 5: OCI Containers Attestation (#20683) · Epic · gitlab-org](https://gitlab.com/groups/gitlab-org/-/work_items/20683)
- [Signing artifacts, attesting builds, and why you should do both](https://some-natalie.dev/blog/signing-attesting-builds/)
- [SLSA • Build: Requirements for producing artifacts](https://slsa.dev/spec/v1.2/build-requirements)
- [SLSA • Provenance](https://slsa.dev/spec/v1.1/provenance)
- [SLSA Level 3 Provenance Attestations](/handbook/engineering/architecture/design-documents/slsa_level_3/)
- [OpenBao chart | GitLab Docs](https://docs.gitlab.com/charts/charts/openbao/)
- [GitLab Secrets Manager (OpenBao) | GitLab Docs](https://docs.gitlab.com/administration/secrets_manager/#openbao-architecture)

## 望ましいユーザー体験（UX）

[SLSA level 3 provenance attestations](https://docs.gitlab.com/ci/pipeline_security/slsa/level_3/)
ページで指定されている UX には変更が必要です。

新しい環境変数を作成し、ローカル CA を使用するかどうかを制御します。この任意の変数
`ATTEST_METHOD` は、`SIGSTORE` または `LOCAL_CA` の 2 つの値を受け入れます。この値は、
GitLab.com の公開プロジェクトではデフォルトで `SIGSTORE`、プライベートリポジトリ、GitLab dedicated、
self-managed ではデフォルトで `LOCAL_CA` になります。

具体的には、新しい UX は次のようになります。

```yaml
build-job:
  stage: build
  variables:
    ATTEST_BUILD_ARTIFACTS: true
    ATTEST_METHOD: LOCAL_CA
  script:
    - echo "Hello, $GITLAB_USER_LOGIN!"
    - echo "Hello, $GITLAB_USER_LOGIN!" > test.txt
  artifacts:
    paths:
      - test.txt
```

任意の値を含めない場合の UX 例を以下に示します。この場合、デフォルト値を使用する動作になります。

```yaml
build-job:
  stage: build
  variables:
    ATTEST_BUILD_ARTIFACTS: true
  script:
    - echo "Hello, $GITLAB_USER_LOGIN!"
    - echo "Hello, $GITLAB_USER_LOGIN!" > test.txt
  artifacts:
    paths:
      - test.txt
```

この機能のユーザーは、このデフォルト値を上書きできます。この値を上書きできるようにする根拠は
2 つあります。第一に、self-managed インスタンスで Sigstore を使用できるユーザーに、
Sigstore を使用する選択肢を提供します。第二に、この値を明示的にすることで、他の BYOK プロバイダーなど、
別の値を追加できるようになります。

現在の動作では、プライベートプロジェクトで `SIGSTORE` を許可しておらず、この動作は維持されます。

## 技術的背景

大まかに言うと、Sigstore public good インフラストラクチャは OIDC で認証し、認証が成功すると
署名を実行します。署名のアイデンティティは、その OIDC サーバーに対する認証に使用される
アイデンティティに依存します。アイデンティティの例としてはユーザー名やメールアドレスがありますが、
このプロセスではリポジトリとブランチの組み合わせとして認証します。

脅威モデルは、署名が何を意味するかを明確にしています。

> 通常の運用（Sigstore の侵害がない状態）では、特定の時点で ExampleIdP アイデンティティプロバイダーを使用して
> `user@example.com` からの「キーレス」署名を検証すると、その署名が、その時点でそのアイデンティティを使用して
> Sigstore への認証に成功した署名者によって作成されたことが保証されます。

### GitLab.com のプライベートリポジトリで上記の仕組みを使用する場合

これは、アーティファクトやコンテナイメージが公開されており機密ではない公開プロジェクトには適していますが、
GitLab.com 内のプライベートプロジェクトは、この情報を公開したくない場合があります。コンテナの証明例は
こちらです: [Rekor Search](https://search.sigstore.dev/?uuid=108e9186e8c5677a23c91a821a2732ffad83e22d730c98dee8af822aaaaac5fe512fdc8eabebc6fd)。
開示される情報には、バイナリのハッシュ、組織名、プロジェクト名、リポジトリ名、ビルダー名などが含まれます。

現時点では、情報開示は公開プロジェクトでは許容できるが、プライベートプロジェクトでは許容できないと仮定しています。
このため、プロジェクトが公開されている場合にのみ証明を実行するようにコードを制限しています。

### self-managed および dedicated デプロイメントで上記の仕組みを使用する場合

上記のプライベートプロジェクトにおける情報開示に加えて、self-managed および dedicated デプロイメントで
"public-good" Sigstore インフラストラクチャを使用できなくする追加の制約があります。

上記の説明では "OpenID Provider" への言及があります。これらはデフォルトで制限されており、
Fulcio は allowlist を維持しています。GitLab.com の場合、"[Use GitLab.com as an OIDC provider for cosign (#10254)](https://gitlab.com/groups/gitlab-org/-/work_items/10254)"
チケットで追跡されているように、私たちの OIDC プロバイダーがリストに追加されるよう特定の作業を行いました。

self-managed および dedicated デプロイメントの場合、各顧客は、自身のインスタンスが許可されるために
[この MR](https://github.com/sigstore/fulcio/pull/1327)と同様の MR を作成する必要があります。
これは実用的でも推奨できるものでもなく、この ADR で示す変更により、顧客がこのプロセスを経る必要をなくします。

### Rekor について

#### Rekor とは

出典: [An Introduction to Rekor — Chainguard Academy](https://edu.chainguard.dev/open-source/sigstore/rekor/an-introduction-to-rekor/):

> Rekor はアーティファクトメタデータの記録を保存し、署名の透明性を提供することで、オープンソースソフトウェアコミュニティが
> ソフトウェアサプライチェーンの改ざんを監視および検出するのを支援します。技術的なレベルでは、
> これは append-only（「immutable」と呼ばれることもあります）のデータログであり、ソフトウェアアーティファクトに関する
> 署名済みメタデータを保存します。これにより、ソフトウェア利用者は、ソフトウェアアーティファクトが主張どおりのものであることを
> 検証できます。Rekor は、誰でも投稿でき、その投稿を削除できない掲示板のようなものだと考えることができますが、
> 何を信じるかを情報に基づいて判断するのは閲覧者に委ねられます。ct's lifecycle.
> [...]
> Rekor のユーザーには、Merkle tree によって有効化される inclusion proof を活用して、特定のエントリが Rekor ログに
> 存在するかどうかをオフラインで判定する方法もあります。Merkle tree は、暗号学的ハッシュ関数、
> つまり潜在的に大きな値を比較的短いダイジェストにマッピングする方法を使用して、あるデータ片がはるかに大きなデータ構造内に
> 含まれていることを証明できるデータ構造です。この証明は、一連のハッシュをユーザーに提供することで達成されます。
> それらのハッシュを再結合すると、そのエントリが実際に Rekor ログ内にあることをユーザーに証明できます。
> Sigstore ユーザーは、このような inclusion proof をアーティファクトに「staple」できます。つまり、アーティファクトの横に
> inclusion proof をリポジトリ内で添付し、そのアーティファクトが確かに Rekor に含まれていることを証明できます。
> Merkle tree と inclusion proof の詳しい説明については、この章の末尾にある helpful resources セクションを参照してください。

Rekor の主な特性は次のとおりです。

- 不変
- 改ざん耐性

Rekor がパブリックインフラストラクチャで果たす役割についての詳細は、
[Threat Model](https://docs.sigstore.dev/about/threat-model/) ページで確認できます。Rekor に関する追加調査と、
その動作を社内で再現する可能性については、[Explore designs for multi-tenant attestations (#21881)](https://gitlab.com/groups/gitlab-org/-/work_items/21881)
ページで確認できます。

#### 不変で改ざん耐性のあるログの使用は SLSA L3 の要件か

[Rekor の代替に関する潜在的な追加要件](https://gitlab.com/gitlab-org/gitlab/-/work_items/590549#note_3326516370)があります。
ただし根本的には、Rekor の使用は Sigstore の使用と関連しており、SLSA L3 の要件ではありません。L3 に固有の要件は
"Unforgeable" と "Isolated" の 2 つだけです。

- **Unforgeable**: 出所はテナントによる偽造に対して強い耐性を持たなければならない。
- **Isolated**: ビルドプラットフォームは、意図しない外部影響がない隔離された環境でビルドステップが実行されることを保証した。

詳細な議論は https://gitlab.com/gitlab-org/gitlab/-/work_items/590549#note_3326516370 にあります。

## 決定: PostgreSQL に保存されたキーを使用して署名を実行する

検討した選択肢の完全な議論は、"[Investigate Options for self-managed/customer owned Sigstore. (#590549)](https://gitlab.com/gitlab-org/gitlab/-/work_items/590549)"
チケットで確認できます。

実装の複雑さ、顧客にとっての使いやすさ、セキュリティなどの側面を慎重に検討した結果、私たちは次のように決定しました。

- PostgreSQL に保存されたキーと、中間のエフェメラルキーを使用して署名を実行します。詳細は以下に示します。
- [このコメント](https://gitlab.com/gitlab-org/gitlab/-/work_items/590549#note_3326516370)での議論に基づき、
  改ざん耐性のある証明ログを実装するかどうかの決定は保留します。その間、この Issue について決定が下されるまで
  Rekor を無効化します。

### キー生成、ローテーション、取り消し

大まかに、このソリューションには 2 種類のキーがあります。

- 認証局（CA）キー。
- 証明の署名に使用される中間のエフェメラルキー。

ルート CA キーは、新しいモデル `SupplyChain::SigningCertificate` 内に保存されます。これらのキーの取り扱いは、
[Secure coding development guidelines](https://docs.gitlab.com/development/secure_coding_guidelines/#handling-credentials)、
特に "Handling Credentials" セクションに従って行われます。秘密鍵はそこに明示的に記載されています。
これらのガイドラインは、値を平文で取得する必要がある場合、[application secret](https://docs.gitlab.com/development/application_secrets/)として
保存すべきであることを示しています。これは、コードベースの他の箇所、たとえば `Clusters::Platforms::Kubernetes`
クラスの `ca_cert` 属性と同様に行われます。また、この決定に関連するものとして、
[GitLab Cryptography Standard](/handbook/security/policies_and_standards/cryptographic-standard/)と
[Encryption Standard](https://internal.gitlab.com/handbook/security/policies_and_standards/standards/encryption-standard/)があります。
この ADR によって実装されるすべてのソリューションは、これらのドキュメントに従います。

キーのローテーションは、`SupplyChain::SigningCertificate` モデル内に複数のキーを存在させることで実現できます。
検証では、そのテーブル内のいずれかのキーによる署名を受け入れるため、複数のキーが有効な移行期間を実装できます。
クライアントが新しいキーの使用に移行した後、古いキーを取り消せます。同様に、キーの取り消しはテーブルからキーを削除することで
処理できます。必要であれば、古い証明を新しいキーで署名することもできます。

CA の作成方法に関するサンプルコードは、[OpenSSL ドキュメントの CA Certificate セクション](https://ruby.github.io/openssl/OpenSSL.html#module-openssl-ca-certificate)で
確認できます。以下の例を参照してください。以下の例では RSA キーを使用していますが、これは私たちの実装でその特定のキータイプを
使用すべきであることを意味しません。私たちの実装は上記でリンクしたポリシーに従うため、キータイプの選択は異なる可能性があります。

```ruby

# Generate the key.
# WARNING: Choose the right key type taking into consideration the policies above
ca_key = OpenSSL::PKey::RSA.new 2048 # Stored in SupplyChain::SigningCertificate

ca_name = OpenSSL::X509::Name.parse '/CN=ca/DC=example'

ca_cert = OpenSSL::X509::Certificate.new
ca_cert.serial = 0
ca_cert.version = 2
ca_cert.not_before = Time.now
ca_cert.not_after = Time.now + 86400

ca_cert.public_key = ca_key.public_key
ca_cert.subject = ca_name
ca_cert.issuer = ca_name

extension_factory = OpenSSL::X509::ExtensionFactory.new
extension_factory.subject_certificate = ca_cert
extension_factory.issuer_certificate = ca_cert

ca_cert.add_extension \
  extension_factory.create_extension('subjectKeyIdentifier', 'hash')
ca_cert.add_extension \
  extension_factory.create_extension('basicConstraints', 'CA:TRUE', trues
```

### 署名用エフェメラルキーの生成

各証明に対して、中間のエフェメラルキーが生成されます。そのキーに関連付けられた公開鍵は
`SupplyChain::Attestation` モデル内に永続化されます。

```ruby
# Generate the key. Choose the right key type based on the considerations above.
key = OpenSSL::PKey::RSA.new 2048
name = OpenSSL::X509::Name.parse '/CN=#{sanitised_ci_ref_uri}/DC=gitlab'

cert = OpenSSL::X509::Certificate.new
cert.version = 2
cert.serial = 0
cert.not_before = Time.now
cert.not_after = Time.now + 3600

cert.public_key = key.public_key
cert.subject = name
```

上記の `cert` は、次のように `ca_cert` で署名できます。`SHA1` は単なる例であり、代わりに適切なダイジェストを選択すべきです。

```ruby
# Choose the appropriate digest to use instead of SHA1.
cert.sign ca_key, OpenSSL::Digest.new('SHA1')
```

このキーは、[Signing with Self-Managed Keys](https://docs.sigstore.dev/cosign/key_management/signing_with_self-managed_keys/)
ページで `cosign` によって提供されている手順に従って、出所の署名に使用できます。

### 署名の検証

署名の検証は手動で実行することも、GitLab の `glab` ツールを通じて実行することもできます。`glab` の呼び出しは、
[SLSA level 3 provenance attestations](https://docs.gitlab.com/ci/pipeline_security/slsa/level_3/#verifying-attestations)
ページに文書化されている方法と同じ見た目になります。例:

```bash
glab attestation verify gitlab-org/gitlab filename.txt
```

このコマンドラインエンドポイントのコードは [internal/commands/attestation/verify/verify.go](https://gitlab.com/gitlab-org/cli/-/blob/main/internal/commands/attestation/verify/verify.go)にあります。
これはキー検証のために少し変更されます。

このツールは次を実行します。

1. プロジェクトメタデータを取得する。
2. アーティファクト/コンテナのダイジェストを計算する。
3. [Attestations API](https://docs.gitlab.com/api/attestations/)で出所メタデータを取得する。
   このメタデータは、検証を Sigstore で行う必要があるか、この ADR で示したソリューションで行う必要があるかを示します。
   後者が真の場合、エンドポイントはエフェメラルキーに関連付けられた署名済み公開鍵を返します。
4. 証明に関連付けられたバンドルを取得する。
5. 有効な認証局のリストを取得する。

この情報を使って、次の検証を実行します。

1. Sigstore で検証する方法と同様に、キーとバンドルファイルを参照して `cosign` バイナリを呼び出します。
   これにより、出所がそれに関連付けられたキーによって署名されていることを確認します。
2. エフェメラルキーが有効な "Root CA" によって署名されていることを確認します。これは上記のステップ 5 で返された情報を使って行われます。
3. `subject` フィールドがリポジトリの `ci_ref_uri` と一致することを確認します。このフィールドは
   [OpenID Connect (OIDC) Authentication Using ID Tokens](https://docs.gitlab.com/ci/secrets/id_token_authentication/)に文書化されています。

ステップ 1 は、[Signing with Self-Managed Keys](https://docs.sigstore.dev/cosign/key_management/signing_with_self-managed_keys/)
ページで提供されている手順で完了できます。ステップ 2 と 3 は、Ruby の次のコードで実現できます。

```ruby
cert.verify ca_key.public_key
=> true
cert.subject == name
=> true
```

このキーにアクセスできない攻撃者は、自分が制御できないリポジトリの有効な証明書を生成できません。
これは、証明書の CN が `ci_ref_uri` に設定され、証明書がデータベース内に安全に保存された `ca_key` を使用して生成されるためです。

明確にすると、ユーザーが `RepoA` と `main` ブランチの `SupplyChain::Attestation` を生成した場合、
これは `MaliciousRepo` の `main` ブランチ用に生成されたものとは異なる subject を持ちます。これにより、
ユーザーが特定のブランチへの書き込みアクセスを持たない場合、他のブランチに対して私たちのシステムが生成した証明を
検証手順の回避に使用できないことが保証されます。

### 良い影響

- この機能に外部依存関係はなく、完全に自己完結しています。
- 将来のイテレーションで
  [BYOK](https://gitlab.com/gitlab-org/gitlab/-/work_items/590549#note_3326459572)
  と組み合わせてうまく機能します。私たちはこれを保証する適切な抽象化を作成するためです。
- エンジニアリングのフットプリントとコストが比較的小さい。
- 新しいサービスを作成またはメンテナンスする必要がない。
- すべての環境とすべてのリポジトリタイプをサポートする。

### 悪い影響

- Rekor のような、改ざん防止で不変な署名記録という観点でのソリューションは含まれません。
  これは恒久的なソリューションが見つかるまでの一時的な状況です。詳細は
  [このコメント](https://gitlab.com/gitlab-org/gitlab/-/work_items/590549#note_3326516370)を参照してください。

## テスト、パフォーマンス、可用性

高い可用性と堅牢なパフォーマンスを確保するため、SSCS stage の Pipeline Security チームによって
いくつかの対策が講じられます。

- 他の GitLab ユーザーへの偶発的な影響を防ぐため、フィーチャーフラグの背後で本番環境の証明プロセスを手動テストする。
- `cosign` インテグレーションのエンドツーエンドテストにより、`cosign` アップグレードに対する保証を提供する。
- 特に失敗シナリオについて、広範なテストカバレッジを実装する。これにより、停止を適切に処理するための
  適切な対策が整っていることを保証する。
- 一時的な停止が SLSA 証明生成の永続的な失敗につながらないよう、Sidekiq ジョブには適切な retry が設定される。
- この機能は、明示的に opt-in したユーザーに対してのみ有効化される。
- 一時的な失敗への対応には、Sidekiq のデフォルトの [retry configuration](https://docs.gitlab.com/development/sidekiq/#retries)を使用する。
  また、私たちの worker には [external dependencies](https://docs.gitlab.com/development/sidekiq/worker_attributes/#jobs-with-external-dependencies)があるものとしてフラグを付けています。
