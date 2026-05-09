---
title: "GitLab 暗号化標準"
description: "これは GitLab の暗号化標準です。アルゴリズムや、アルゴリズムに関連する重要な設定を含む暗号化の選択肢を概説します。GitLab のコードおよびインフラストラクチャ設定に適用されます。"
controlled_document: true
toc_hide: true
tags:
  - security_standard
  - security_standard_caplscsi
upstream_path: /handbook/security/policies_and_standards/cryptographic-standard/
upstream_sha: 1e195b58b9f249ff10bd0e705106c320fee86141
translated_at: "2026-05-09T17:22:11Z"
translator: claude
stale: false
---

{{< label name="Visibility: Audit" color="#E24329" >}}

## 目的

暗号化標準は、GitLab 製品で使用されるさまざまなシステムやサブシステム内で保存中または転送中のデータを暗号化する目的で、承認された暗号化アルゴリズム、設定、暗号化モジュールを定義します。

暗号化標準は、GitLab 内での暗号化使用に対するより一貫したアプローチ、業界標準やコンプライアンスフレームワーク ([FedRAMP](https://about.gitlab.com/solutions/public-sector/fedramp/) など) へのより容易な適応、および全体的により安全な製品と作業環境を可能にします。さらに、ほとんどの標準は [NIST](https://www.nist.gov/) (米国国立標準技術研究所) の推奨事項に基づいています。多くのコンプライアンスフレームワークが NIST 標準に基づいており、NIST は世界中の多くの組織によって採用される堅実な推奨事項を一貫して提供しているためです。

## スコープ

暗号化標準は、GitLab のデータを取り扱い、管理、保存、または送信するすべての GitLab チームメンバー、契約者、コンサルタント、ベンダー、その他のサービスプロバイダーに適用されます。

これは、GitLab 製品自体の暗号化に関わるクライアントおよびサーバー設定だけでなく、コーディングのベストプラクティスにも必要です。現在、これらの標準を確実に満たし維持するために、複数のエンジニアリングチームによる多数の取り組みが社内で行われています。スコープには、暗号化設定が必要なサードパーティモジュールやソフトウェア設定が含まれます。基本的に、GitLab または GitLab の顧客データに触れる場合、この標準が適用されます。

## 役割と責任

| 役割  | 責任 |
|-----------|-----------|
| GitLab チームメンバー | この標準で概説された要件を遵守する責任 |
| セキュリティ管理および暗号化担当者 (Code Owners) | この標準に対する重要な変更や例外を承認する責任 |

### GitLab の責任

- GitLab チームメンバー、契約者、コンサルタント、ベンダー、その他のサービスプロバイダーは、この暗号化標準と、特に注記がない限り以下に定義される保存中および転送中のデータの暗号化ニーズの取り扱い方法をレビューして理解する必要があります。

### 顧客の責任

- GitLab 顧客は自分自身のデータを管理する責任があり、これらの標準を強く推奨されるものとして考慮し、独自の内部要件に従って採用する必要があります。GitLab は相互秘密保持契約に記載された秘密保持義務に従って顧客データを社内で取り扱い、この標準で特定されているコントロールを使用します。

## 標準

### コンプライアンスと認証の標準

これらの標準は GitLab 製品の全体的なセキュリティを向上させるためのセキュリティベースラインと考えていますが、コンプライアンスと認証の取り組みについては、以下の一般的なガイドラインを使用します。

- 非公開の暗号化モジュールはありません。すべての暗号化モジュールはオープンソースであり、十分に保守されている必要があります。これは、[Bureau of Industry (BIS) and Security の輸出管理規則 (暗号化に関する)](https://www.bis.doc.gov/index.php/policy-guidance/encryption) への準拠を確保するためです。
- すべての製品開発には、ロードマップに記載された [FIPS 開発ドキュメント](https://docs.gitlab.com/ee/development/fips_compliance.html) で指定されたパターンに従って、GitLab の FIPS リリースのサポートを含める必要があります。基盤となる FIPS 検証済み暗号化モジュールを活用していない新機能は、FIPS リリースまたは Dedicated for Government 提供を使用する顧客に対して利用可能にすることはできません。これらは、機能フラグの背後でデフォルトで無効にするか、それが不可能な場合は機能を完全に無効にするオプションを設ける必要があります。
- すべての暗号化の選択 (アルゴリズムなど) は、[FIPS 140-3](https://csrc.nist.gov/pubs/fips/140-3/final) (2019 年 3 月 22 日に FIPS 140-2 に取って代わった) の最低基準に準拠し、また [NIST SP 800-53](https://csrc.nist.gov/pubs/sp/800/53/r5/upd1/final) も念頭に置きます。
- 可能な場合、量子コンピューティングの利用がより強力で主流になるにつれて、暗号化の選択を「将来性のある」ものにするための取り組みとして、量子耐性アルゴリズムを選択します。詳細については、[こちら](#quantum-cryptography) の量子暗号に関するセクションをお読みください。

これらの標準を満たすことは、[FedRAMP コンプライアンス](https://about.gitlab.com/solutions/public-sector/fedramp/) などの目標達成に役立ちますが、FIPS や SP 800-53 などの標準は*事実上*の世界標準と見なされているため、複数の国や業界でのコンプライアンスニーズにも役立ちます。

### 暗号化モジュール

規制要件 (FIPS など) では、すべての暗号化モジュールが [Bureau of Industry and Security の輸出管理規則 (暗号化に関する)](https://www.bis.gov/articles/encryption-and-export-administration-regulations-ear) への準拠を確保するために公に利用可能 (オープンソース) でなければなりません。このコンプライアンスは [Wassenaar Arrangement](https://www.wassenaar.org/) に従って国際標準を満たすため、状況が発生した場合に世界中で遭遇する可能性のある要件を満たすはずです。

暗号化モジュールの選択は重要です。暗号化要素を持つ GitLab 機能が、厳格なモジュール要件 (FedRAMP 標準、FIPS モードでの実行など) を満たさなければならない可能性があるため、特定のモジュールへの遵守が強く推奨されます。これには以下が含まれます:

- OpenSSL Cryptographic Module
- Linux Kernel Crypto API Cryptographic Module
- Libgcrypt Cryptographic Module

[gitlab-fips パッケージ](https://packages.gitlab.com/gitlab/gitlab-fips) については、すべての FIPS 検証済み暗号化モジュールが「FIPS Compliance」ドキュメントページに記載されており、現在は[こちら](https://docs.gitlab.com/ee/development/fips_compliance.html#fips-compliance) にあります。このドキュメントは、GitLab の FedRAMP および FIPS 140-2 コンプライアンスポスチャーを維持するために最新に保たれる必要があります。

開発者および貢献者への注意: FIPS/FedRAMP コンプライアンスに関係なく、コーディングは上記の暗号化モジュールを使用する必要があります。同じモジュールの非 FIPS バージョン (例: `openssl-x.y.x` 対 `openssl-x.y.z-fips`) での開発は問題ありません。重要なのは、FIPS バージョンを持たない、またはアルゴリズムの独自の暗号化実装を作成した暗号化モジュールに依存する新しいコードを導入しないことです。FIPS 認定済み暗号化モジュールのリストは[こちら](https://csrc.nist.gov/projects/cryptographic-module-validation-program/validated-modules/search/all) にあります。

暗号化モジュールのアップグレードと利用可能性の変化、暗号化全般の更新や変更、および GitLab がサポートする新しいサポート対象 Linux サーバーイメージが利用可能になることにより、この標準への定期的な変更が発生する可能性があり、また発生します。

### アルゴリズム標準 {#algorithmic-standards}

- **TLS** - [TLS](https://en.wikipedia.org/wiki/Transport_Layer_Security) TLS 1.3 はすべての新しいデプロイで有効化され、優先される必要があります。TLS 1.2 はレガシー相互運用性のために有効のままにできますが、唯一サポートされる TLS バージョンであってはなりません。TLS 1.0 と 1.1 は、FIPS 140-2 に準拠していても許可されません。FIPS 140-3 と SP 800-53 標準は TLS 1.0 と 1.1 を明示的に禁止しており、同じガイドラインに従う FedRAMP も同様です。
  - 使用すべきアルゴリズムは以下のとおりです:
    - ECDHE-ECDSA-AES256-GCM-SHA384
    - ECDHE-RSA-AES256-GCM-SHA384
    - ECDHE-ECDSA-AES128-GCM-SHA256
    - ECDHE-RSA-AES128-GCM-SHA256
    - TLS_AES_256_GCM_SHA384
    - TLS_AES_128_GCM_SHA256
  - コーディングプラクティスに関しては、[セキュアコーディングガイドライン](https://docs.gitlab.com/ee/development/secure_coding_guidelines.html#general-recommendations)、特に言語固有のガイドラインや制限事項を参照してください。
  - [ML-KEM](https://nvlpubs.nist.gov/nistpubs/FIPS/NIST.FIPS.203.pdf) は NIST 承認の量子セーフアルゴリズムです。具体的には ML-KEM-1024 が推奨されます。FIPS 環境で ML-KEM を使用するには、FIPS 認定済みの暗号化モジュールを使用する必要があることに注意してください。詳細は[このセクション](#quantum-cryptography) を参照してください。
- **ブロック暗号** - [AES](https://en.wikipedia.org/wiki/Advanced_Encryption_Standard)。現在、AES-128 が最低基準と見なされていますが、「将来性」を確保するために AES-256 が好まれます (アプリケーションの使用方法などにより、潜在的なパフォーマンス影響があることに注意してください)。[GCM](https://en.wikipedia.org/wiki/Galois/Counter_Mode) が必須モードです (例: `aes-256-gcm`)。
  - *AES-256 は[量子耐性](#quantum-cryptography) があると見なされていますが、AES-128 はそうではないことに注意してください。これも将来性のための別の考慮事項です。*
  - [SP 800-131A Rev.3](https://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.800-131Ar3.ipd.pdf) に従って、AES-ECB モードはまったく使用しないでください。AES-GCM (または適切な場合は AES-CCM / AES-KW / AES-KWP) などの AEAD モードを使用してください。
  - ノートパソコンに関する注意: フルディスク暗号化には XTS-AES-128 (256 ビットキー) または XTS-AES-256 (512 ビットキー) が許容されます。チームメンバー向けの両方の GitLab 承認済みノートパソコンシナリオ (MacOS を実行する Apple または Ubuntu を実行する Linux ベースのノートパソコン) では、これら 2 つのアルゴリズムのいずれかが自動的に事前選択され、ノートパソコンのフルディスク暗号化を設定する際に許容されます。
- **デジタル署名** - [RSA](https://en.wikipedia.org/wiki/RSA_(cryptosystem))、[ECDSA](https://en.wikipedia.org/wiki/Elliptic_Curve_Digital_Signature_Algorithm)、[EdDSA](https://en.wikipedia.org/wiki/EdDSA#Ed25519)。RSA の最小キーサイズは 2048 です。ECDSA の最小キーサイズは 256 です。Ed25519 と Ed448 は、基盤となる暗号モジュールが認証にそれを含めている場合は、現在両方とも承認済みアルゴリズムです。*ただし、現時点で OpenSSL 実装はそれを認証していません*。ECDSA を使用する新しい実装では、ECC キーは 256 ビット以上 (例: P-256、P-384) でなければなりません。次数長 256 ビット未満の曲線 (例: P-224) はレガシーのみと見なされ、新しいデジタル署名には使用してはなりません。
  - [ML-DSA](https://nvlpubs.nist.gov/nistpubs/FIPS/NIST.FIPS.204.pdf) は NIST 承認の量子セーフアルゴリズムです。具体的には、256 ビットのランダムシードを持つ ML-DSA-87 が推奨されます。FIPS 環境で ML-DSA を使用するには、FIPS 認定済みの暗号化モジュールを使用する必要があることに注意してください。詳細は[このセクション](#quantum-cryptography) を参照してください。
  - [SLH-DSA](https://nvlpubs.nist.gov/nistpubs/FIPS/NIST.FIPS.205.pdf) は NIST 承認の量子セーフアルゴリズムです。SLH-DSA の強みは、既知の強力なハッシュ関数設計のみに基づくデジタル署名の代替品として機能することにあります。LMS や XMSS などのステートフルなハッシュベースの署名を確率論的構築で置き換え、離散対数や格子などの数学に依存しません。FIPS 環境で SLH-DSA を使用するには、FIPS 認定済みの暗号化モジュールを使用する必要があることに注意してください。詳細は[このセクション](#quantum-cryptography) を参照してください。一般的に、長い時間軸を持つアプリケーションや厳しいハードウェア制約 (組み込みコンテキストなど) を持つアプリケーションを除き、**ML-DSA が SLH-DSA よりも優先されます**。
- **ハッシュ関数** - SHA-2 ファミリーのハッシュアルゴリズム、SHA-256 を最小として。理想的には SHA-384 以上が望ましいですが、特にサードパーティソフトウェアではサポートが少ない可能性があります。
  - *SHA-1 は FIPS 140-2 準拠ですが、[NIST SP 800-53 Rev 5 ベースライン](https://csrc.nist.gov/pubs/sp/800/53/r5/upd1/final) によれば許可されていないことに注意してください。*これは [SP-800-57](https://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.800-57pt1r5.pdf) のセクション 5.6.1.2、[SP-800-131](https://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.800-131Ar2.pdf) のセクション 9 表 8、および [SP-800-107](https://nvlpubs.nist.gov/nistpubs/Legacy/SP/nistspecialpublication800-107r1.pdf) のセクション 4 によります。
  - *SHA-2-256+ と SHA-3-256+ は[量子耐性](#quantum-cryptography) があると見なされていることに注意してください。*
- **MAC** - MAC ([メッセージ認証コード](https://en.wikipedia.org/wiki/Message_authentication_code)) は通常、送信後にメッセージが改ざんされていないことを認証するために実装されます。MAC は、承認されたアルゴリズムと組み合わせてのみ、以下のパラメータで使用されます:
  - [HMAC](https://en.wikipedia.org/wiki/HMAC)、KMAC。128 ビット以上のキー長のみ。
  - [CMAC](https://en.wikipedia.org/wiki/One-key_MAC)、[GMAC](https://en.wikipedia.org/wiki/Galois/Counter_Mode)。AES と組み合わせてのみ。**HMAC は CMAC よりも一般的に好まれます**。GMAC は一般的な目的には使用すべきではありません。
- **乱数生成** - 真の乱数生成は必要ありませんが、高レベルのランダム化は依然として重要です。`/dev/random` を使用した擬似乱数生成が好まれます。`/dev/urandom` はそれほど安全ではありませんが、歴史的にはるかに古いシステムでより速く実行されました。基盤となるオペレーティングシステムが FIPS モードで実行されている場合、`/dev/urandom` への呼び出しは `/dev/random` にリダイレクトされ、Linux カーネルバージョン 5.18 以降は `/dev/random` と `/dev/urandom` の両方が同じように機能します。したがって、標準は `/dev/random` です。
- **パスワードハッシュ** - 現在、GitLab 製品はユーザーアカウントのパスワードハッシュにデフォルトで人気の Bcrypt アルゴリズムを使用しています。Bcrypt は承認された FIPS 140-2 アルゴリズムではないため、開発エンジニアは GitLab バージョン 15.2 から機能フラグ経由で PBKDF2+SHA512 のサポートを追加し、15.6 から FIPS モードが有効な場合に利用可能です。詳細は[こちら](https://docs.gitlab.com/ee/security/password_storage.html#password-storage) で確認できます。両方のアルゴリズムに [Key stretching](https://en.wikipedia.org/wiki/Key_stretching) が使用されており、Bcrypt のファクターは 13 (GitLab バージョン 18.0 時点) に、PBKDF2+SHA512 のファクターは 20,000 に設定されています。Bcrypt または PBKDF2+SHA512 が使用される前に、上記の承認された暗号一方向ハッシュのいずれかを使用して、パスワードに固有の[ソルト](https://en.wikipedia.org/wiki/Salt_%28cryptography%29) を付ける必要があります。これにより、ブルートフォースや辞書攻撃に対するパスワードハッシュの強度がさらに強化されます。
- **古い/代替アルゴリズムに関する注記** - 他のいくつかの一般的なアルゴリズムに関する注記:
  - DSA は [FIPS 186-5](https://nvlpubs.nist.gov/nistpubs/FIPS/NIST.FIPS.186-5.pdf) によりもはや承認済みアルゴリズムではなく、弱い暗号と広く見なされています。
  - SHA-1 - ハッシュアルゴリズムについては、SHA-1 は非暗号化機能 (チェックサムなど) には許可されています。デジタル署名生成には許可されていません。デジタル署名検証については、SHA-1 *は*許可されています。非デジタル署名アプリケーションについては、ランダム化を必要としないブロック暗号の[初期化ベクトル](https://en.wikipedia.org/wiki/Initialization_vector) など、[衝突耐性](https://en.wikipedia.org/wiki/Collision_resistance) が不要な場合に SHA-1 が許可されます。SHA-1 の使用に関する詳細は、[NIST SP 800-131A Rev 3](https://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.800-131Ar3.ipd.pdf)、特にキー導出方法に関するセクション 9 を参照してください。SHA-1 は将来的にさまざまな標準で許可されなくなるため、可能な限り SHA-256 を使用してください。SHA-1 と 224 ビットハッシュバリアント (SHA-224、SHA-512/224、SHA3-224 を含む) は、NIST SP 800-131A Rev.3 の廃止スケジュールに沿って、厳密にレガシーな検証シナリオでのみ許可され、新しい暗号化保護を適用するために使用してはなりません。
  - MD5 - 以前は、MD5 は非暗号化機能には許可されていました。ただし、2022 年 5 月 2 日の初期監査結果により、MD5 は機能が暗号化であるかどうかにかかわらずもはや許可されていません。FIPS コンプライアンスのために、MD5 はまったく使用できません。

### 量子暗号 {#quantum-cryptography}

量子コンピューティングは高度な数学的計算を可能にし、量子ベースのコンピューターが進化してより強力になるにつれて、特定のアルゴリズムが破られたり「クラッキング」されたりする危険性があります。具体的には、クラッキング作業の一部として大きな数の因数分解を使用するアルゴリズムです。そのため、この時点に達すると、多くの暗号化アルゴリズムがもはや安全と見なされなくなる懸念があります。暗号関連の量子コンピューター (CRQC) で実行される [Shor のアルゴリズム](https://en.wikipedia.org/wiki/Shor%27s_algorithm) (およびそのバリアント) を使用すると、非対称アルゴリズム (RSA、ECDSA など) を破ることができ、これが危険性です。さらに、CRQC で [Grover のアルゴリズム](https://en.wikipedia.org/wiki/Grover%27s_algorithm) を使用すると、対称アルゴリズムを「弱体化」させることができ、AES-128 は AES-64 相当に弱体化されます。これは、AES-128 が支持を失い、AES-256 が最低基準と見なされている理由の一部です。理想的には、さらなる強度のために AES-384 または AES-512 を実行できますが、同じ AES アルゴリズムであっても、384 または 512 ビットで実行することは NIST の承認された AES 推奨事項の一部ではありませんでした。

現在のシナリオは、しばしば「ポスト量子暗号」、または PQC と略して呼ばれます。これは量子暗号とは異なります。前者は現在のコンピューティングハードウェアで実行され、後者は専用の量子認識ハードウェア (量子鍵配送 (QKD) と呼ばれることもある) を必要とします。念頭に置くべきもう 1 つの概念は、「[harvest-now, decrypt later](https://en.wikipedia.org/wiki/Harvest_now,_decrypt_later)」と呼ばれる脅威です。暗号化された情報が 2026 年から約 5〜10 年間秘密のままであることを意図している場合、暗号化承認済み量子セーフアルゴリズムの使用をできるだけ早く実装することが強く推奨されます。

新しい [NIST PQC アルゴリズム](https://csrc.nist.gov/projects/post-quantum-cryptography) の採用に備えて、GitLab は以下を考慮します:

- 可能な場合、量子コンピューティングによるクラッキングに耐性があることがすでに知られている既存の暗号化アルゴリズム (一般に「量子耐性」として知られる) を選択します。
- 新しい量子耐性アルゴリズムがオペレーティングシステムライブラリに含まれ、FIPS 環境で認定されると、上記に示された[標準](#algorithmic-standards) が更新されます。
- GitLab はこれらのアルゴリズム (ML-KEM、ML-DSA、SLH-DSA) のテストを開始し、より多くの採用が起こるにつれて、それらの実装に移行できることを確認します。テストは、OpenSSL Cryptographic Module、Linux Kernel Crypto API Cryptographic Module、Libgcrypt Cryptographic Module の量子サポートバージョンが、私たちの基盤となるインフラストラクチャの一部であるベースオペレーティングシステム (Ubuntu Server LTS や RHEL など) に追加されたときに開始されます。
- 2024 年 8 月 13 日時点で、NIST は [FIPS 203](https://csrc.nist.gov/pubs/fips/203/final)、[FIPS 204](https://csrc.nist.gov/pubs/fips/204/final)、[FIPS 205](https://csrc.nist.gov/pubs/fips/205/final) の最終版を公開しました。現在、これらの標準で参照されている量子セーフアルゴリズムは使用が承認されています。FIPS 環境でこれらのアルゴリズムを使用する場合は、FIPS 認定済みの暗号化モジュールを使用していることを確認してください。量子セーフ暗号化モジュール ([liboqs](https://openquantumsafe.org/liboqs/) や [OpenSSL 3.5.0](https://openssl-library.org/post/2025-04-08-openssl-35-final-release/) など) は存在しますが、2026 年 4 月時点で、既存の量子セーフ暗号化モジュールはどれも FIPS 認定されていません。
- GitLab がサポートする量子アルゴリズムのパラメータには、商用国家安全保障アルゴリズムスイート (CNSA) [バージョン 2.0](https://media.defense.gov/2025/May/30/2003728741/-1/-1/0/CSA_CNSA_2.0_ALGORITHMS.PDF) に記載されているものが含まれます。要約は[こちら](https://en.wikipedia.org/wiki/Commercial_National_Security_Algorithm_Suite#CNSA_2.0) で確認でき、これらは[上記](#algorithmic-standards) のアルゴリズム標準でのパラメータの参照に記載されています。
- 場合によっては量子アルゴリズムのハイブリッドソリューションが存在しますが、GitLab は完全な FIPS および FedRAMP コンプライアンスを確保するために、ハイブリッドソリューションよりも純粋な量子アルゴリズムのデプロイを強く好みます。
- 特定のシナリオでは、すべての設定のバリエーションがテストされるわけではありません。たとえば、GitLab のスタンドアロンインスタンスでは、設定オプション (すべてのオプション機能と同様) は GitLab の顧客の標準とニーズに任されるため、現在、可能なすべての SSL 設定の広範なテスト計画はありません。
- PQC をサポートするモジュールが GitLab が歴史的に使用してきた、そして今後も使用する Linux イメージの一部となるにつれて、PQC 認識暗号化モジュールは新しい安定した Linux イメージを検証するための標準プロセスの一部としてテストされます。PQC アルゴリズムは最終的に利用可能な設定オプションの一部になります。これらの PQC 対応 Linux イメージが利用可能になり次第、公式のロードマップが策定されます。
- PQC モジュールを備えた FIPS 認定済み Linux イメージが利用可能になったときに、PQC 設定を使用した FedRAMP イメージの特定のテストが行われます。
- 現在、GitLab の提供内での PQC コンプライアンスの特定のタイムラインはありませんが、過去のテストパターンと新しい Linux イメージの通常のリリースケイデンスから、GitLab 内での完全な PQC コンプライアンスは 2030 年より前に発生する可能性があることが示唆されます。

## 例外

このポリシーへの例外は、[情報セキュリティポリシー例外管理プロセス](/handbook/security/controlled-document-procedure/#exceptions) に従って追跡されます。

## 参考文献

- [Controlled Document Procedure](/handbook/security/controlled-document-procedure/)
