---
title: "Yubikey セルフサービス購入ガイド"
description: "中央管理された発注ポータルから YubiKey をセルフサービスで購入できます。GitLab が発送をサポートしていない国向けに IT による事前承認がない限り、YubiKey を個別に購入して経費精算することはできません。"
upstream_path: /handbook/security/corporate/systems/yubikey/purchasing/
upstream_sha: 82fbf0e2626c904de9d6bd562ea4359a0c7e8ab2
translated_at: "2026-07-09T11:05:06+09:00"
translator: codex
stale: false
lastmod: "2026-07-08T14:46:05-04:00"
---

> FY25-Q1 において、IT は最新世代の YubiKey 5 FIPS キーをエンジニアリング、プロダクト、セキュリティ各部門のすべてのチームメンバーに大規模配布しました。これらの部門は、FY25-Q2 に IT がシステム構成変更管理を完了した後、2FA に YubiKey の使用が必須となります。

## 注文プロセス {#order-process}

どのチームメンバー（どの部門でも）も、Touch ID の代替として YubiKey をリクエストできます。理由を問われることはありません。私たちのポリシーは大規模配布の効率化を目的に設計されており、他部門のユーザーが YubiKey を使用することを妨げるものではありません。

### セルフサービス注文

以下のプロセスでプライマリの YubiKey をセルフサービスで注文できます。バックアップキーの注文については、近い将来イテレーションを進めていく予定です。

YubiKey の交換、または初めての YubiKey が必要な場合は、お住まいの国が[サポート対象国](#countries)のリストに含まれていることを確認してください。お住まいの国が[サポート対象外の国](#unsupported-countries)に含まれている場合や質問がある場合は、Slack の Compass app（上部検索バーに「Compass」と入力して探します）経由で IT に連絡するか、it-help@gitlab.com までメールしてください。

1. Slack を開きます。
2. 任意のメッセージまたはチャンネルで `/yubikey` と入力します。
3. セルフサービス注文フォームが開くので、入力します。
    > これは中央管理された発注ポータルに接続されています。注文は GitLab が一括で支払うため、経費精算を提出する必要はありません。
4. ベンダーの処理に数日かかる場合があります。YubiKey が発送されると、確認メールが届きます。
5. お住まいの国にもよりますが、通常 2 週間以内に YubiKey を受け取れます。

## YubiKey 調達ポリシー

### YubiKey を使用する人

#### エンジニア系ユーザー

> FY25-Q2 から有効

**エンジニアリング**、**プロダクト**、**セキュリティ**の各部門に所属するすべてのチームメンバーは、管理システム、機密性の高い Okta アプリケーション、または AWS/GCP インフラへのアクセスに YubiKey の使用が必須です。機密性の高くない Okta アプリケーションや、Touch ID を使用できる Mac アプリケーションについては Touch ID を使用できます。

#### ビジネス系ユーザー

**CEO**、**Finance**、**Legal**、**Marketing**、**People**、**Sales** の各部門に所属するチームメンバーは、（YubiKey ではなく）**MacBook の Touch ID の使用が必須**です。これは、これらの部門で使用されるアプリケーションの大半が Okta 経由でアクセスされており、より強力なデバイスアシュアランスポリシーが適用されているためです。これらの部門のチームメンバーも、希望すれば YubiKey の使用にオプトインできます（理由を問われることはありません）。

当初は YubiKey を全社展開したかったのですが、YubiKey は USB-C ポートを 1 つ占有してしまうという物理的な制約があります。これらの部門のチームメンバーの大半は 13 インチの MacBook を使用しており、ポートが 2 つしかなく、通常はモニターと電源コードに占有されているためです。

そこで私たちは、3 ポート + MagSafe 電源を持つ 14 インチ／16 インチの MacBook Pro を使用するチームメンバーに焦点を移しました。エンジニアリング、プロダクト、セキュリティの各部門は、Okta にない幅広いアプリケーション、インフラ、バックエンドシステムにアクセスするため、そこに注力しています。

<img src="/images/security/corporate/systems/yubikey/yubikey-mac-13.jpg" alt="YubiKey Models" style="border: 1px #888 solid; padding: 3px;" /><br />

#### Linux ユーザー

Linux ラップトップを使用するチームメンバーは、すべての 2FA で YubiKey の使用が必須です。

#### コントラクターおよび一時的なサービスプロバイダー

GitLab 支給の MacBook を持たず、1Password（GitLab がライセンス提供）をインストールできない一時的なサービスプロバイダーには、Okta および付与されたサービスへの認証用に YubiKey を発送できます。これは、Windows デバイスを使用するサードパーティのサービスプロバイダーでよくあるニーズです。

Slack の Compass app（上部検索バーに「Compass」と入力して探します）経由で IT に連絡するか、it-help@gitlab.com までメールしてください。

### YubiKey モデル

<img src="/images/security/corporate/systems/yubikey/yubikey-models.jpg" alt="YubiKey Models" style="border: 1px #888 solid; padding: 3px;" /><br />

#### YubiKey 5C Nano FIPS

[YubiKey 5C Nano FIPS](https://www.yubico.com/product/yubikey-5c-nano-fips/)（「Nano」）キーは、USB-C ポートに常時挿しっぱなしにする設計の小型フォームファクターで、抜け落ちたり折れたりするリスクがありません。

- プライマリキーとして推奨（一度挿したら忘れていい）。
- ラップトップに挿したままにしておけば、いつでも簡単にタップできます（実質的に見えなくなります）。
- ラップトップを持ち歩く際に折れたり邪魔になったりするリスクがありません。
- グリップが難しく紛失しやすいため、頻繁にキーを取り外す必要がある場合は推奨しません。

<img src="/images/security/corporate/systems/yubikey/yubikey-nano-port.jpg" alt="YubiKey Nano Port" style="border: 1px #888 solid; padding: 3px;" /><br />

#### YubiKey 5C NFC FIPS

[YubiKey 5C NFC FIPS](https://www.yubico.com/product/yubikey-5c-nfc-fips/)（「NFC」）キーは Nano キーと同じように動作しますが、モバイル端末で使用する場合や、キーを持ち歩く際の大型フォームファクターという追加の利点があります。

近距離無線通信（「NFC」）キーは USB サムドライブのような外観で、モバイル端末では（iPhone の場合はカメラ近くの上部に）キーをかざすことで、キーを挿さずにワイヤレス認証器として動作する機能があります。

これは単に汎用性を提供するものです。認証器はサーバー側に登録されているため、ラップトップに挿す、iPad やタブレットの USB-C ポートに挿す、（USB-C のない）Lightning ポート付き iPhone で NFC ワイヤレス技術を使用する、いずれの方法でも使用できます。

**スマートフォンでは引き続き FaceID を使用する想定で、YubiKey をスマートフォンで強制することはありません。なぜなら、私たちが許可しているモバイルアプリケーションの数は限られており、機密性の高いアクセスやデータを含むアプリケーションは含まれていないためです。言い換えると、スマートフォンアプリの 2FA に YubiKey を使用することはオプションであり、個人の好みです。**

- 汎用性が高いため、バックアップキーとして推奨。
- キーチェーンに付けて、必要に応じて挿したり外したりできます。
- ラップトップが机に届かない場所にある場合、モニターポートやドッキングステーションに挿したままにできます。USB-C ポートのない古いモニターを使っている場合は USB-A キーが必要かもしれません。場合によっては小型のドッキングステーションやアダプターのほうが良いかもしれません。
- NFC は、最近の [iPhone](/handbook/security/corporate/systems/yubikey/2fa/ios/) や多くの [Android](/handbook/security/corporate/systems/yubikey/2fa/android) デバイスでワイヤレス認証をサポートします（タップ決済をサポートするデバイスであれば、YubiKey の NFC もサポートするはずです）。

<img src="/images/security/corporate/systems/yubikey/yubikey-nfc-port.jpg" alt="YubiKey NFC Port" style="border: 1px #888 solid; padding: 3px;" /><br />

#### その他の YubiKey モデル

[YubiKey 5C FIPS](https://www.yubico.com/product/yubikey-5c-fips/) キーも動作しますが、追加機能があるため NFC キーを推奨しており、在庫として保有しているのも NFC キーです。

[YubiKey 5Ci FIPS](https://www.yubico.com/product/yubikey-5ci-fips/) キーは Apple の Lightning ポートを含みますが、最近の世代の iPhone は NFC ワイヤレスキーをサポートするため、もはや推奨しません。キーチェーンに付けると扱いにくいという面もあります。

すべての[非 FIPS](#fips-vs-non-fips) YubiKey [モデル](https://www.yubico.com/products/yubikey-5-overview/)はサポートを終了しており、FIPS 準拠モデルとして `YubiKey 5 FIPS` の文字列マッチングを行う次世代認証ポリシーでは許可されません。

#### フォームファクター

私たちの MacBook は USB-C を使用しているため、デフォルトで USB-C モデルにしています。

USB-A の唯一のユースケースは、モニターやドッキングステーションの側面または底面に USB-A ポートがあり、机にドッキングしているときにラップトップに手を伸ばすよりも簡単にタップできる場合です。これらはセルフサービスの[注文プロセス](#order-process)から注文できます。

### FIPS と非 FIPS {#fips-vs-non-fips}

ユーザーとしては違いに気付きません。

FIPS キーには、シリアル番号の隣に `FIPS` と印字されています。USB ポートに挿入されている場合は、見るためにキーをひっくり返す必要があるかもしれません。

私たちのフリート内でキーやプロトコルが混在することを避けるため、Results for Customers の価値観の一環として、将来を見据えて YubiKey 5 FIPS モデルに標準化しています。

**Low Context:** YubiKey 5 自体は MFA 認証器として安全です。FIPS プロトコルは、GitLab がサービスを提供する一部の規制業界における監査・コンプライアンス要件を満たす高度な暗号化セキュリティを提供します。

**古いキーの交換:** 非 FIPS の YubiKey を持つチームメンバーには、キーを交換しています。

**技術的な調査:** 連邦情報処理規格（「FIPS」）[140-2](https://csrc.nist.gov/pubs/fips/140-2/upd2/final#:~:text=This%20Federal%20Information%20Processing%20Standard,of%20potential%20applications%20and%20environments)は、暗号モジュールが満たすべきセキュリティ要件を規定しており、幅広い潜在的アプリケーションと環境を網羅することを意図した、4 段階の定性的なレベルを提供します。この検証により、政府機関や規制業界は、新しい [NIST SP800-63B](https://csrc.nist.gov/pubs/sp/800/63/b/upd2/final) ガイダンスから最高の認証器保証レベル 3（AAL3）の要件を満たせるようになります。

詳細は [Yubico の Web サイト](https://www.yubico.com/products/yubikey-fips)をご覧ください。

### 国 {#countries}

#### サポート対象国

以下の国は標準的な配送料金が適用され、1～2 週間で到着します。

- オーストリア (AT)
- ベルギー (BE)
- ブルガリア (BG)
- カンボジア (KH)
- カナダ (CA)
- チリ (CL)
- チェコ (CZ)
- ドイツ (DE)
- デンマーク (DK)
- フィンランド (FI)
- フランス (FR)
- ハンガリー (HU)
- アイルランド (IE)
- イスラエル (IL)
- インド (IN)
- イタリア (IT)
- リトアニア (LT)
- ルクセンブルク (LU)
- ラトビア (LV)
- マルタ (MT)
- オランダ (NL)
- ノルウェー (NO)
- ポーランド (PL)
- ポルトガル (PT)
- ルーマニア (RO)
- スペイン (ES)
- スウェーデン (SE)
- スロベニア (SI)
- スイス (CH)
- イギリス (GB)
- アメリカ合衆国 (US)

以下の国は、地域の物流要因により配送コストが高くなります。これらの国への配送はサポートしていますが、キーが破損または紛失した場合の将来の配送コストを避けるため、プライマリとセカンダリ／バックアップのキーを併せて発送するようにしています。

- オーストラリア (AU)
- インドネシア (ID)
- 日本 (JP)
- メキシコ (MX)
- ニュージーランド (NZ)
- フィリピン (PH)
- シンガポール (SG)
- 台湾 (TW)

##### インドに関する注意

インド (IN) への配送はサポートしていますが、配送時間が長くなり、配送通知が遅れることがあります。

#### サポート対象外の国 {#unsupported-countries}

配送プロバイダーのサポート状況により、以下の国へは標準的な配送プロセスを提供していません。これらの国はチームメンバーのごく一部を占めるリストです。

一部の国では、サポート対象国にあるプロキシの荷物／小包サービスを利用しているかチームメンバーに尋ねることがあります。それが不可能な場合、IT はケースバイケースで会社購入またはセルフ調達のオプションを評価するために協力します。

- アルメニア (AM)
- アンゴラ (AO)
- ボスニア (BA)
- ブラジル (BR)
- コロンビア (CO)
- コスタリカ (CR)
- エクアドル (EC)
- エジプト (EG)
- ケニア (KE)
- モロッコ (MA)
- モルドバ (MD)
- マレーシア (MY)
- パナマ (PA)
- パキスタン (PK)
- パラグアイ (PY)
- セルビア (RS)
- 南アフリカ (ZA)
- 韓国 (KR)
- トルコ (TR)
- ウクライナ (UA)
- ベトナム (VN)
