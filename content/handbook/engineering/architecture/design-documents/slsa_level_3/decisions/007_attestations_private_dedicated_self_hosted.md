---
layout: handbook-page-toc
title: "ADR 007: プライベートリポジトリ、GitLab dedicated、self-managed インスタンスの証明"
description: "この ADR は、パブリック Sigstore インフラストラクチャを使用できない状況でソフトウェア証明を実現する仕組みを定めます。"
upstream_path: "/handbook/engineering/architecture/design-documents/slsa_level_3/decisions/007_attestations_private_dedicated_self_hosted/"
upstream_sha: ab93800e4c241789ac67785899fa20ffa1eb0854
lastmod: "2026-11-05T07:24:15+13:00"
translated_at: "2026-11-05T15:15:16.188555+00:00"
translator: codex
stale: false
---

## 背景 {#background}

SSCS ステージに属する ~"group::build security" グループは、ユーザーに
[SLSA レベル 3 出所証明](/handbook/engineering/architecture/design-documents/slsa_level_3/)を提供するために取り組んでいます。
簡略化してまとめると、[GitLab のコンテキスト](/handbook/engineering/architecture/design-documents/slsa_level_3/)では、
出所ステートメントは、アーティファクトまたは OCI コンテナの SHA-256 合計を
ビルド情報と関連付ける JSON ドキュメントです。その後、ワーカーが
[デジタル署名](/handbook/engineering/architecture/design-documents/slsa_level_3/decisions/004_attestation_in_sidekiq/)を実行します。
これは出所証明と呼ばれ、"Sigstore Bundle" blob として保存されます。

これらのデジタル署名はバックグラウンドワーカーによって開始されますが、
"public-good" Sigstore インフラストラクチャとして知られるものを活用します。詳細は
[Sigstore の概要](https://docs.sigstore.dev/about/overview/) ページで確認できます。
この "public-good" インフラストラクチャは、以下で強調する理由により、プライベート
リポジトリ、self-managed、dedicated デプロイメントには適していません。

この ADR は、キーを PostgreSQL 内に保存するプロジェクトごとの認証局（CA）を使用して署名を実行するという私たちの決定を記録し、
その根拠を文書化します。さらに、この ADR には、利用について恒久的な決定が行われるまで、これらのケースで Rekor、
その他の透明性ログ、タイムスタンプ局を使用しないという決定に関する情報も含まれます。

さらに、この機能を使用するためにユーザーが活用する新しい UX と、このインテグレーションで使用される
技術的な仕組みも示します。

### この変更が必要な理由 {#why-this-change-is-required}

以下で強調する点、特に Rekor への情報開示と、self-managed および Dedicated デプロイメントで
Sigstore と統合することの難しさは、現在の実装がこの種の顧客には実行可能ではないことを示しています。

この ADR の変更を実装することで、既存のインフラストラクチャを活用し、コスト効率の高い方法で、
すべてのリポジトリタイプとデプロイメントタイプの証明にコントロールプレーン内で署名できます。提案するソリューションを使用することで、
ユーザーはパイプラインを簡単に設定して証明を生成でき、その証明を利用前に検証できます。
これにより、セキュリティ意識が最も高いユーザーに対するサプライチェーン攻撃を防止できます。

### 参考資料 {#references}

- [[議論] SLSA 出所生成を有効にする UX (#547903)](https://gitlab.com/gitlab-org/gitlab/-/work_items/547903#note_2748278333)
- [ADR 002: GitLab Rails バックエンドで SLSA 出所を生成する](/handbook/engineering/architecture/design-documents/slsa_level_3/decisions/002_provenance_generation_location/)
- [ADR 004: cosign を GitLab Rails に同梱し、GitLab Rails バックエンドで証明を行う](/handbook/engineering/architecture/design-documents/slsa_level_3/decisions/004_attestation_in_sidekiq/)
- [ADR 006: OCI イメージの SLSA レベル 3 証明の作成を可能にする](/handbook/engineering/architecture/design-documents/slsa_level_3/decisions/006_signing_with_sbom_and_provenance_in_oci/)
- [Cosign イメージ署名。プロトコル形式の解説！](https://medium.com/sigstore/cosign-image-signatures-77bab238a93)
- [フェーズ 5: OCI コンテナの証明 (#20683) · Epic · gitlab-org](https://gitlab.com/groups/gitlab-org/-/work_items/20683)
- [アーティファクトへの署名、ビルドの証明、両方を行うべき理由](https://some-natalie.dev/blog/signing-attesting-builds/)
- [SLSA • ビルド: アーティファクト生成の要件](https://slsa.dev/spec/v1.2/build-requirements)
- [SLSA • 出所](https://slsa.dev/spec/v1.1/provenance)
- [SLSA レベル 3 出所証明](/handbook/engineering/architecture/design-documents/slsa_level_3/)
- [OpenBao チャート | GitLab ドキュメント](https://docs.gitlab.com/charts/charts/openbao/)
- [GitLab Secrets Manager (OpenBao) | GitLab ドキュメント](https://docs.gitlab.com/administration/secrets_manager/#openbao-architecture)

## 望ましいユーザー体験（UX） {#desired-user-experience-ux}

[SLSA レベル 3 出所証明](https://docs.gitlab.com/ci/pipeline_security/slsa/level_3/)
ページで指定されている UX には変更が必要です。

新しい CI/CD 変数で、ローカル CA を使用するかどうかを制御します。この任意の変数
`ATTEST_METHOD` は、`SIGSTORE` または `LOCAL_CA` の 2 つの値を受け入れます。この値は、
GitLab.com の公開プロジェクトではデフォルトで `SIGSTORE`、プライベートリポジトリ、GitLab dedicated、
self-managed ではデフォルトで `LOCAL_CA` になります。

`ATTEST_METHOD` は、`ATTEST_BUILD_ARTIFACTS` と `ATTEST_CONTAINER_IMAGES` の両方に適用されます。
これらの変数と同様に、`.gitlab-ci.yml` の `variables` キーワードからのみ読み取ります。
プロジェクト、グループ、インスタンス、パイプラインの変数など、その他の場所で設定した変数は無視します。
値の大文字と小文字は区別せず、前後の空白は無視します。それ以外の値は、デフォルト値にフォールバックします。

GitLab は、プロジェクトが初めて `LOCAL_CA` 証明を生成するときに、そのプロジェクトの CA を作成します。

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
非公開（プライベートまたは内部）のプロジェクトで `ATTEST_METHOD: SIGSTORE` を設定しても、証明は行われません。
公開プロジェクトでは `LOCAL_CA` を選択できます。

## 技術的背景 {#technical-background}

大まかに言うと、Sigstore public good インフラストラクチャは OIDC で認証し、認証が成功すると
署名を実行します。署名のアイデンティティは、その OIDC サーバーに対する認証に使用される
アイデンティティに依存します。アイデンティティの例としてはユーザー名やメールアドレスがありますが、
このプロセスではリポジトリとブランチの組み合わせとして認証します。

脅威モデルは、署名が何を意味するかを明確にしています。

> 通常の運用（Sigstore の侵害がない状態）では、特定の時点で ExampleIdP アイデンティティプロバイダーを使用して `user@example.com` からの「キーレス」署名を検証すると、その署名が、その時点でそのアイデンティティを使用して Sigstore への認証に成功した署名者によって作成されたことが保証されます。

### GitLab.com のプライベートリポジトリで上記の仕組みを使用する場合 {#on-the-usage-of-the-above-mechanism-for-private-repositories-on-gitlabcom}

これは、アーティファクトやコンテナイメージが公開されており機密ではない公開プロジェクトには適していますが、
GitLab.com 内のプライベートプロジェクトは、この情報を公開したくない場合があります。コンテナの証明例は
こちらです: [Rekor Search](https://search.sigstore.dev/?uuid=108e9186e8c5677a23c91a821a2732ffad83e22d730c98dee8af822aaaaac5fe512fdc8eabebc6fd)。
開示される情報には、バイナリのハッシュ、組織名、プロジェクト名、リポジトリ名、ビルダー名などが含まれます。

現時点では、情報開示は公開プロジェクトでは許容できるが、プライベートプロジェクトでは許容できないと仮定しています。
このため、`SIGSTORE` 証明は公開プロジェクトでのみ許可されます。`LOCAL_CA` 証明は公開インフラストラクチャに送信されないため、
すべてのプロジェクトで許可されます。

### self-managed および dedicated デプロイメントで上記の仕組みを使用する場合 {#on-the-usage-of-the-above-mechanism-for-self-managed-and-dedicated-deployments}

上記のプライベートプロジェクトにおける情報開示に加えて、self-managed および dedicated デプロイメントで
"public-good" Sigstore インフラストラクチャを使用できなくする追加の制約があります。

上記の説明では "OpenID Provider" への言及があります。これらはデフォルトで制限されており、
Fulcio は allowlist を維持しています。GitLab.com の場合、"[GitLab.com を cosign の OIDC プロバイダーとして使用する (#10254)](https://gitlab.com/groups/gitlab-org/-/work_items/10254)"
チケットで追跡されているように、私たちの OIDC プロバイダーがリストに追加されるよう特定の作業を行いました。

self-managed および dedicated デプロイメントの場合、各顧客は、自身のインスタンスが許可されるために
[この MR](https://github.com/sigstore/fulcio/pull/1327)と同様の MR を作成する必要があります。
これは実用的でも推奨できるものでもなく、この ADR で示す変更により、顧客がこのプロセスを経る必要をなくします。

### Rekor について {#on-rekor}

#### Rekor とは {#what-is-rekor}

出典: [Rekor 入門 — Chainguard Academy](https://edu.chainguard.dev/open-source/sigstore/rekor/an-introduction-to-rekor/):

> Rekor はアーティファクトメタデータの記録を保存し、
> 署名の透明性を提供することで、オープンソースソフトウェアコミュニティが
> ソフトウェアサプライチェーンの改ざんを監視および検出するのを支援します。技術的なレベルでは、
> これは追記専用（「不変」と呼ばれることもあります）のデータログであり、ソフトウェアアーティファクトに関する
> 署名済みメタデータを保存します。これにより、ソフトウェア利用者は、
> ソフトウェアアーティファクトが主張どおりのものであることを
> 検証できます。Rekor は、誰でも投稿でき、
> その投稿を削除できない掲示板のようなものだと考えることができますが、
> 何を信じるかを情報に基づいて判断するのは閲覧者に委ねられます。
> [...]
> Rekor のユーザーには、Merkle tree によって有効化される inclusion proof を活用して、特定のエントリが Rekor ログに
> 存在するかどうかをオフラインで判定する方法もあります。
> Merkle tree は、暗号学的ハッシュ関数、
> つまり潜在的に大きな値を比較的短いダイジェストにマッピングする方法を使用して、
> あるデータ片がはるかに大きなデータ構造内に
> 含まれていることを証明できるデータ構造です。この証明は、
> 一連のハッシュをユーザーに提供することで達成されます。
> それらのハッシュを再結合すると、そのエントリが実際に Rekor ログ内にあることをユーザーに証明できます。
> Sigstore ユーザーは、このような inclusion proof をアーティファクトに「添付」できます。つまり、アーティファクトの横に
> inclusion proof をリポジトリ内で添付し、
> そのアーティファクトが確かに Rekor に含まれていることを証明できます。
> Merkle tree と inclusion proof の詳しい説明については、
> この章の末尾にある参考リソースのセクションを参照してください。

Rekor の主な特性は次のとおりです。

- 不変
- 改ざん耐性

Rekor がパブリックインフラストラクチャで果たす役割についての詳細は、
[脅威モデル](https://docs.sigstore.dev/about/threat-model/) ページで確認できます。Rekor に関する追加調査と、
その動作を社内で再現する可能性については、[マルチテナント証明の設計を検討する (#21881)](https://gitlab.com/groups/gitlab-org/-/work_items/21881)
ページで確認できます。

#### 不変で改ざん耐性のあるログの使用は SLSA L3 の要件か {#is-use-of-an-immutable-tamper-resistant-log-a-requirement-for-slsa-l3}

[Rekor の代替に関する潜在的な追加要件](https://gitlab.com/gitlab-org/gitlab/-/work_items/590549#note_3326516370)があります。
ただし根本的には、Rekor の使用は Sigstore の使用と関連しており、SLSA L3 の要件ではありません。L3 に固有の要件は
"Unforgeable" と "Isolated" の 2 つだけです。

- **Unforgeable**: 出所はテナントによる偽造に対して強い耐性を持たなければならない。
- **Isolated**: ビルドプラットフォームは、意図しない外部影響がない隔離された環境でビルドステップが実行されることを保証した。

詳細な議論は https://gitlab.com/gitlab-org/gitlab/-/work_items/590549#note_3326516370 にあります。

## 決定: PostgreSQL に保存されたキーを使用して署名を実行する {#decision-perform-signing-using-a-key-stored-in-postgresql}

検討した選択肢の完全な議論は、"[self-managed/顧客所有の Sigstore の選択肢を調査する。 (#590549)](https://gitlab.com/gitlab-org/gitlab/-/work_items/590549)"
チケットで確認できます。

実装の複雑さ、顧客にとっての使いやすさ、セキュリティなどの側面を慎重に検討した結果、私たちは次のように決定しました。

- PostgreSQL にキーを保存するプロジェクトごとのルート CA と、証明ごとに新しく生成するリーフ証明書およびキーを使用して署名を実行します。詳細は以下に示します。
- [このコメント](https://gitlab.com/gitlab-org/gitlab/-/work_items/590549#note_3326516370)での議論に基づき、
  改ざん耐性のある証明ログを実装するかどうかの決定は保留します。その間、この件について決定が下されるまで、
  `LOCAL_CA` 証明では Rekor もタイムスタンプ局（TSA）も使用しません。

### Rekor とタイムスタンプ局の無効化 {#disabling-rekor-and-timestamp-authorities}

`LOCAL_CA` 署名では、cosign が透明性ログやタイムスタンプ局に接続しないように設定します。

透明性ログや TSA がないと、証明にいつ署名したかについての信頼できる記録がありません。
検証側は現在時刻に照らして署名証明書を確認するため、証明を検証可能にしておく必要がある期間中は、証明書が有効であり続ける必要があります。
リーフ証明書の有効期間を長くするのは、このためです。

### キーの生成と保存 {#key-generation-and-storage}

大まかに、このソリューションには 2 種類のキーがあります。

- プロジェクトごとのルート認証局（CA）キー。
- 証明ごとのリーフキーと証明書。リーフ証明書はプロジェクトの CA が発行し、その秘密鍵は署名後に破棄します。
  [署名用エフェメラルキーの生成](#generation-of-ephemeral-keys-for-signing)を参照してください。

各プロジェクトの CA は PostgreSQL に保存し、秘密鍵は保存時に暗号化します。これらのキーは、
[セキュアコーディング開発ガイドライン](https://docs.gitlab.com/development/secure_coding_guidelines/#handling-credentials)、
特に秘密鍵について明示的に記載されている「Handling Credentials」セクションに従って取り扱います。
また、この決定には、[GitLab 暗号標準](/handbook/security/policies_and_standards/cryptographic-standard/)と
[暗号化標準](https://internal.gitlab.com/handbook/security/policies_and_standards/standards/encryption-standard/)も関連します。

キーには P-256 曲線上の ECDSA を使用し、証明書には SHA-256 で署名します。
RSA も使用可能でしたが、セキュリティとパフォーマンスの特性から ECDSA を選びました。
どちらも、上記でリンクしたポリシーを満たしています。

次の例では、これらのアルゴリズムと CA に必要な拡張を使用して、CA 証明書を作成します。
たとえば `irb` などで通常の Ruby として実行でき、有効期間は例です。背景については、
[OpenSSL ドキュメントの CA Certificate セクション](https://ruby.github.io/openssl/OpenSSL.html#module-openssl-ca-certificate)を参照してください。

```ruby
require 'openssl'
require 'securerandom'

# Example values, in seconds. The CA must outlive every leaf certificate it issues.
ca_validity = 5 * 365 * 24 * 60 * 60 # 5 years
clock_skew = 5 * 60 # 5 minutes, backdates not_before

ca_key = OpenSSL::PKey::EC.generate('prime256v1')
ca_name = OpenSSL::X509::Name.new([%w[CN ca], %w[DC gitlab]])

ca_cert = OpenSSL::X509::Certificate.new
ca_cert.version = 2 # X.509 v3
ca_cert.serial = SecureRandom.random_number(1...(2**159))
ca_cert.not_before = Time.now - clock_skew
ca_cert.not_after = Time.now + ca_validity
ca_cert.public_key = ca_key
ca_cert.subject = ca_name
ca_cert.issuer = ca_name

extension_factory = OpenSSL::X509::ExtensionFactory.new
extension_factory.subject_certificate = ca_cert
extension_factory.issuer_certificate = ca_cert

ca_cert.add_extension(extension_factory.create_extension('basicConstraints', 'CA:TRUE', true))
ca_cert.add_extension(extension_factory.create_extension('keyUsage', 'keyCertSign,cRLSign', true))
ca_cert.add_extension(extension_factory.create_extension('subjectKeyIdentifier', 'hash'))

ca_cert.sign(ca_key, OpenSSL::Digest.new('SHA256'))
```

CA の操作は抽象化しているため、リーフ証明書の構築方法を変更せずに、クラウド KMS などの別のキーストアを後から追加して BYOK をサポートできます。

各証明には、どの方式で署名したかを記録するため、署名した CA が後で削除されても、その方式は分かるままです。

キーのローテーションと失効は、この ADR の範囲外です。

### 署名用エフェメラルキーの生成 {#generation-of-ephemeral-keys-for-signing}

このセクションは、
[ADR 008: LOCAL_CA 証明への署名](/handbook/engineering/architecture/design-documents/slsa_level_3/decisions/008_signing_local_ca_attestations/)に置き換えられました。

要約すると、各証明には新しい ECDSA P-256 キーで署名します。
プロジェクトの CA は、そのキーに対してリーフ証明書を発行し、たとえば
`https://gitlab.example.com/my-group/my-project//.gitlab-ci.yml@refs/heads/main`
のような URI サブジェクト代替名にアイデンティティを格納します。
証明書の有効期間は長く、証明のバンドルに保存します。秘密鍵は署名後に破棄します。

### 署名の検証 {#signature-verification}

署名の検証は手動で実行することも、GitLab の `glab` ツールを通じて実行することもできます。`glab` の呼び出しは、
[SLSA レベル 3 出所証明](https://docs.gitlab.com/ci/pipeline_security/slsa/level_3/#verifying-attestations)
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
   [ID トークンを使用した OpenID Connect（OIDC）認証](https://docs.gitlab.com/ci/secrets/id_token_authentication/)に文書化されています。

ステップ 1 は、[自己管理キーを使用した署名](https://docs.sigstore.dev/cosign/key_management/signing_with_self-managed_keys/)
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

### 良い影響 {#positive-consequences}

- この機能に外部サービスは不要で、完全に自己完結しています。
  `LOCAL_CA` 署名は Sigstore、Rekor、TSA のサービスに接続せず、GitLab が Sigstore 証明のためにすでに同梱している
  `cosign` バイナリを使用します（[ADR 004](/handbook/engineering/architecture/design-documents/slsa_level_3/decisions/004_attestation_in_sidekiq/)）。
- 将来のイテレーションで
  [BYOK](https://gitlab.com/gitlab-org/gitlab/-/work_items/590549#note_3326459572)
  と組み合わせてうまく機能します。上記で説明した抽象化によって実現します。
- エンジニアリングのフットプリントとコストが比較的小さい。
- 新しいサービスを作成またはメンテナンスする必要がない。
- すべての環境とすべてのリポジトリタイプをサポートする。
- 各プロジェクトが独自の CA を持つため、あるプロジェクトの CA から、別のプロジェクトに対する検証に通る証明書を発行することはできません。
- インスタンスやプロジェクトの設定は不要です。

### 悪い影響 {#negative-consequences}

- Rekor のような、改ざん防止で不変な署名記録や、信頼できる署名時刻のためのソリューションは含まれません。
  これは恒久的なソリューションが見つかるまでの一時的な状況です。詳細は
  [このコメント](https://gitlab.com/gitlab-org/gitlab/-/work_items/590549#note_3326516370)を参照してください。
- CA の秘密鍵は、インスタンスの暗号化キーで暗号化します。他の暗号化されたデータと同様に、バックアップにはインスタンスのシークレットを含める必要があります。
- 署名を行う場所ではどこでも、新しいバージョンの `cosign` を利用できることに依存します。

## テスト、パフォーマンス、可用性 {#testing-performance-and-availability}

高い可用性と堅牢なパフォーマンスを確保するため、SSCS ステージの Build Security チームによって
いくつかの対策が講じられます。

- 他の GitLab ユーザーへの偶発的な影響を防ぐため、フィーチャーフラグの背後で本番環境の証明プロセスを手動テストする。
- `cosign` インテグレーションのエンドツーエンドテストにより、`cosign` アップグレードに対する保証を提供する。
- 特に失敗シナリオについて、広範なテストカバレッジを実装する。これにより、停止を適切に処理するための
  適切な対策が整っていることを保証する。
- 一時的な停止が SLSA 証明生成の永続的な失敗につながらないよう、Sidekiq ジョブには適切な再試行が設定される。
- この機能は、明示的に利用を選択したユーザーに対してのみ有効化される。
- 一時的な失敗への対応には、Sidekiq のデフォルトの [再試行設定](https://docs.gitlab.com/development/sidekiq/#retries)を使用する。
  また、私たちのワーカーには [外部依存関係](https://docs.gitlab.com/development/sidekiq/worker_attributes/#jobs-with-external-dependencies)があるものとしてフラグを付けています。
  これは `SIGSTORE` 証明に適用されます。`LOCAL_CA` 証明は Sigstore サービスに依存しません。
