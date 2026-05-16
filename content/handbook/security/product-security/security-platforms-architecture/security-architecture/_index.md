---
title: "セキュリティアーキテクチャ"
description: "セキュリティアーキテクトは GitLab エンジニアリングの信頼されるセキュリティアドバイザーです。"
upstream_path: /handbook/security/product-security/security-platforms-architecture/security-architecture/
upstream_sha: 1e195b58b9f249ff10bd0e705106c320fee86141
translated_at: "2026-05-09T12:40:09Z"
translator: claude
stale: false
lastmod: "2026-03-04T12:15:15-08:00"
---

<link rel="stylesheet" type="text/css" href="/stylesheets/biztech.css" />

## チーム情報

- **チームページ**
  - [ハンドブックページ](/handbook/security/product-security/security-platforms-architecture/security-architecture/)
  - [GitLab サブグループ](https://gitlab.com/gitlab-com/gl-security/product-security/security-architecture/)
- **連絡先**
  - Slack チャンネル
    - `#security-discuss`: チームと連絡を取るためのメインチャンネル
  - GitLab でのタグ: `@gitlab-com/gl-security/security-architecture`

## 概要

[Application Security Architects](/job-description-library/security/security-engineer#security-architect) は GitLab エンジニアリングの信頼されるセキュリティアドバイザーです。セキュリティアーキテクチャは、GitLab における広範な[アーキテクチャ](/handbook/engineering/architecture/) イニシアチブの自然な延長線上にあります。これは、セキュリティを考慮したソフトウェアを構築するための予備的かつ必要な作業です。

## 目的

セキュリティアーキテクチャは、サイバー被害から組織を守り、現在および将来のビジネスニーズを以下の方法で支援します:

- セキュリティが後付けにならないようにする
- [セキュリティアーキテクチャ原則](#security-architecture-principles)を定義する
- [私たちのセキュリティサブ部門の要件と期待](#security-architecture-requirements)に整合する
- 他部門が新機能、サービス、製品を設計・アーキテクトする際にサポートする
- セキュリティ側の適切な SME と DRI を特定する
- セキュリティイニシアチブと機能を推進する

このプロセスは、以下の制約を念頭に設計されています:

- 私たちの[バリュー](/handbook/values/)に整合する
- 非同期である
- 可能な限り[セルフサービス](/handbook/company/culture/all-remote/)である
- ソフトウェア開発ライフサイクルにおいてボトルネックにならないようにする
- 意図的にシンプルかつ簡潔である
- 可能な限り自動化されている
- 強力な注釈を伴った DRY である

## アプリケーションセキュリティアーキテクチャの範囲

私たちのセキュリティ態勢に影響を及ぼすような、製品提供におけるあらゆる変更（機能、サービス、買収にかかわらず）。私たちのセキュリティ態勢は以下によって定義されます:

- 私たちが基盤として使用するコンポーネント
- 私たちが組み込むコンポーネント
- ソフトウェアアーキテクチャ
- リファレンスアーキテクチャ

2025 年 12 月時点で、不要なクロスチーム依存関係を削減するため、セキュリティアーキテクチャをプロダクトセキュリティ全体に分散化しました。

- アプリケーションセキュリティアーキテクチャ（旧称「セキュリティアーキテクチャ」）は[セキュリティプラットフォームとアーキテクチャ](../../security-platforms-architecture/_index.md)内にあり、アプリケーション層の関心事に焦点を当てます
- インフラストラクチャセキュリティアーキテクチャは[インフラストラクチャセキュリティ](../../infrastructure-security/_index.md)内にある新しい機能です

## セキュリティアーキテクチャ要件

### アプリケーションセキュリティ

アプリケーションセキュリティチームは、ソースコードのライフサイクル全体で従うべきガイドラインと要件を提供します:

- [AppSec プロジェクトポリシー](../../security-platforms-architecture/application-security/inventory#policies)

### InfraSec

<!-- Using this page until infrasec requirements are in the handbook -->

- [開発とデプロイのためのセキュリティ要件](/handbook/security/planning/security-development-deployment-requirements/)
- 追加のガイダンスについては、[インフラストラクチャセキュリティ](../../infrastructure-security/_index.md)にお問い合わせください

### コンプライアンス

- [GitLab 監査ログポリシー](/handbook/security/security-and-technology-policies/audit-logging-policy/)

### 暗号化

- 独自の暗号を作らないこと（これは私たちの[セキュリティアーキテクチャ原則](#security-architecture-principles)の 1 つでもあります）
- [GitLab 暗号化標準](/handbook/security/policies_and_standards/cryptographic-standard/)を参照してください

<!-- Add FIPS and FedRamp requirements here when available -->

## セキュリティアーキテクチャ原則 {#security-architecture-principles}

セキュリティアーキテクチャ原則は、要件でも決定でもなく、その中間にあたるものです。

私たちの原則は 2 つのシンプルな柱に基づいています:

1. **最小権限**
1. **ネットワーク分離**

これらは、Software Systems Architecture（[references](#references) を参照）および [ACCU 2019 関連動画](https://www.youtube.com/watch?v=YbjoaMN67Hw)から取られた原則と共に以下に詳述されています。これらは [OWASP Security Design Principles](https://github.com/OWASP/DevGuide/blob/master/02-Design/01-Principles%20of%20Security%20Engineering.md) に非常に近いものですが、より理解しやすく適用しやすくなっています。

<style>
.security-architecture-principle {
  display: inline-block;
}
</style>

<details>
<summary>

### 可能な限り最小権限を割り当てる{.security-architecture-principle}

</summary>

#### なぜ

広範な権限は、保護されたリソースへの悪意ある、または偶発的なアクセスを許してしまいます。

#### どのように

- 割り当てられた操作を完了するために必要な最小レベルのアクセス権（権限）のみをユーザーやサービスに付与します。この権限は、操作の完了に必要な最小限の時間だけ付与しなければなりません。
- アプリケーションアクセスに管理者アカウントを使用しない
- 機密データには別アカウントを使用する

#### 例

- サービスプロセスは、必要な権限セットだけを持つ独自のユーザーで実行する
- 更新が不要な場合は読み取り専用権限を付与する
- 更新が必要な場合は、対象リソースのみにスコープを限定する

#### リンク

- <https://owasp.org/www-community/Access_Control#principle-of-least-privilege>
- <https://csrc.nist.gov/glossary/term/least_privilege>
- <https://handbook.gitlab.com/handbook/security/security-and-technology-policies/access-management-policy/>

</details>

<details>
<summary>

### 責任を分離する{.security-architecture-principle}

</summary>

#### なぜ

攻撃が成功した場合のブラスト半径（影響範囲）を制限します: システムの一部が侵害されても、システム全体が侵害されないようにします。

攻撃の魅力を低下させます。

#### どのように

- 責任と権限を区分けする
- 職務分離: 単一タスクの完了が 2 つ以上の条件に依存するようにする
- たとえ機密情報がフィルタリングされていても、設定などの非機密データと一緒に機密情報を保存しない

#### 例

- git コミットの読み取りのみを必要とするシステム/サービスは、ユーザーデータにアクセスできるべきではない
- GitLab チームメンバーは課金データやその他の[赤データに分類された](/handbook/security/policies_and_standards/data-classification-standard/)ものへのアクセス権を持たない

#### リンク

- [OWASP Access Control Models](https://owasp.org/www-community/Access_Control#access-control-models)
- <https://en.wikipedia.org/wiki/Compartmentalization_%28information_security%29>

</details>

<details>
<summary>

### 慎重に信頼する{.security-architecture-principle}

</summary>

#### なぜ

- セキュリティ問題の多くは、通信経路に悪意ある中間者を挿入することによって引き起こされます

#### どのように

- 未知のエンティティは信頼されていないと仮定する
- 信頼を確立するための明確なプロセスを持つ
- 接続している人や物が誰/何であるかを検証する
- 必ず何らかの認証（証明書、パスワードなど）を使用する
- ネットワーク制御
- サードパーティのコードを動的にロードしない

#### 例

- インターネットに公開されていないからといって、サービスがセキュアであるとは見なせません。[SSRF](https://en.wikipedia.org/wiki/Server-side_request_forgery) は、攻撃者がそれらに自由にアクセスすることを許す可能性があります。
- ユーザーを認証する最善の方法は、この一般的なセキュリティ原則を適用することです: あなたが知っている何か（例: パスワード）と、あなたが所有する何か（例: 証明書）を提供する。これは MFA で適用しているもので、たとえばあなたが知っているパスワードと、アプリケーションによって生成される [TOTP](https://en.wikipedia.org/wiki/Time-based_one-time_password) を提供することで実現します。
- 実行時にサードパーティのライブラリやスクリプトをダウンロードすると、キャッシュポイズニング、XSS など、多くのセキュリティ問題につながる可能性があります。外部アセットの完全性をチェックしないと、悪意のあるアクターがファイルを改ざんできてしまいます。たとえば、この [BGP ハイジャック](https://medium.com/s2wblog/post-mortem-of-klayswap-incident-through-bgp-hijacking-en-3ed7e33de600) の事例を参照してください

#### リンク

- GitLab における [Zero Trust](/handbook/security/product-security/security-platforms-architecture/security-architecture/zero-trust)

</details>

<details>
<summary>

### 可能な限り最もシンプルなソリューションを選ぶ{.security-architecture-principle}

</summary>

#### なぜ

- シンプルなソリューションはデプロイ、保守、セキュリティ確保が容易
- 私たちの[イテレーション](/handbook/values/#iteration)と[効率性](/handbook/values/#efficiency)のバリューに整合する
- セキュリティには設計の理解が必要
- 複雑性は指数関数的に増加する
- ソフトウェアの攻撃可能性または攻撃面が削減される

#### どのように

- 複雑な障害モード、暗黙の動作、不要な機能を避ける
- よく知られた、テスト済み、実証済みのコンポーネントを使用する
- オーバーエンジニアリングを避け、代わりに [MVC](/handbook/product/product-principles/#the-minimal-valuable-change-mvc) を目指す

#### 例

- GitLab に新しいサーバーを導入することは、Omnibus ビルド、Helm チャート、リファレンスアーキテクチャ、ドキュメントなどを更新することを意味します。これは、完璧にフィットしそうに見えるコンポーネントを追加することの利点と慎重にバランスを取るべきものです。

#### リンク

- [Keep it simple, stupid](https://en.wikipedia.org/wiki/KISS_principle)
- [Complexity and exponential change](https://nextconf.eu/2020/02/complexity-and-exponential-change/)

</details>

<details>
<summary>

### 機密性の高いイベントを監査する{.security-architecture-principle}

</summary>

#### なぜ

- 活動の記録を提供する
- 不正行為を抑止する
- 過去を再構成するためのログを提供する
- 監視ポイントを提供する

#### どのように

- すべてのセキュリティ上重要なイベントを改ざん耐性のあるストアに記録する
- すべての機密性の高いイベントについて通知を提供する

#### 例

- AWS で [GuardDuty](https://aws.amazon.com/guardduty/) を有効化する、または GCP で [Cloud Audit Logs](https://cloud.google.com/logging/docs/audit?hl=en) を有効化して、活動を記録し悪意ある意図を検出する。
- SIEM（gitlab.com の場合は Devo）を活用してログを収集、正規化、分析する。
- 以下のような場合にユーザーに通知を提供する:
  - アカウントへの変更
  - 新しいキーが生成、またはアカウントに追加された
- 異常な活動についてセキュリティイベント（Slack 通知など）を生成する:
  - シグナルがしきい値を超過（レート制限が作動）
  - コンポーネント署名が一致しない
  - 機密性の高いリソースへの不正アクセス

#### リンク

</details>

<details>
<summary>

### 安全に失敗し、安全なデフォルトを使用する{.security-architecture-principle}

</summary>

#### なぜ

- デフォルトのパスワード、ポート、ルールは「開いたドア」である
- 障害状態や再起動状態はしばしばデフォルトで「安全でない」状態になる

#### どのように

- セキュリティ上機密性の高いパラメーターの変更を強制する
- 安全でありながら回復可能であるよう、障害について十分に考える
- サブジェクトがオブジェクトへの明示的なアクセス権を与えられない限り、そのオブジェクトへのアクセスは拒否されるべき。これは Fail Safe Defaults と呼ばれます。

#### 例

- 無効/期限切れの TLS 証明書を信頼しない
- Grafana のような一部のコンポーネントは[デフォルトの `admin/admin` ユーザー/パスワード](https://grafana.com/docs/grafana/v7.5/administration/configuration/#security)で提供される。
- 上記に関連して、一部のコンポーネントは、サービスが到達不能な状態など特定の条件下で、デフォルト認証情報による平文のユーザー/パスワード認証にフォールバックすることがある。
- 一部のフレームワークは、リソースに接続できない場合、ホスト名やパスなど共有すべきでない詳細情報を含むエラーページをレンダリングする傾向がある。

#### リンク

- https://owasp.org/www-community/Fail_securely

</details>

<details>
<summary>

### 隠蔽に決して頼らない{.security-architecture-principle}

</summary>

#### なぜ

- 隠すことは難しく、誰かが偶然または意図的に見つけてしまう
- 私たちは非常に[透明性](/handbook/values/#transparency)の高い会社であり、実装の詳細を共有することが多く、ときおり機密情報を漏らしてしまう可能性がある。
- オフボーディングされた従業員は機密情報の知識を持って去ります。トークンはローテーションできますが、その知識が漏洩しないことを保証することはできません

#### どのように

- 完全な知識を持つ攻撃者を想定する

#### 例

- 偵察により、攻撃者は公にドキュメント化されていないサーバーを見つけることができます。これらのサーバーは脆弱なコンポーネントを公開し、東西方向への侵害につながる可能性があります。
- 管理者セクションへのパスを変更しても、攻撃者が最終的にそれを見つけることを防ぐことはできません。

#### リンク

- <https://securitytrails.com/blog/security-through-obscurity>

</details>

<details>
<summary>

### 多層防御を実装する{.security-architecture-principle}

</summary>

#### なぜ

- システムは攻撃される、侵害は発生する、ミスは起きる
- ブラスト半径を最小化する: 1 つのコンポーネントが侵害されても、システム全体を侵害してはならない
- [SSRF](https://owasp.org/Top10/A10_2021-Server-Side_Request_Forgery_%28SSRF%29/) を防ぐ

#### どのように

- セキュリティの単一ポイント/レイヤーに依存しない:
  - すべてのレベルを保護する
  - 1 つのレベルでの障害が伝播するのを止める
- 保存時および転送時のデータを暗号化する（[GitLab の暗号化ポリシー](/handbook/security/product-security/vulnerability-management/encryption-policy/#encryption)に従う）
- 脆弱性スキャナーを使用する
- 不要なポートを閉じ、未使用機能を無効化する

#### 例

- リソースは UI からアクセスする場合は十分に保護されているが、API を通じてはより露出される可能性がある。
- ブルートフォース攻撃を回避するために、試行回数が多すぎる場合にアカウントをロックする。
- OS 実行は、実行がアプリケーションの外部で発生するため、すべてのアプリケーションセキュリティレイヤーをバイパスすることにつながる可能性がある。
- 不要な開放ポートと有効化された機能は、認証バイパスやその他の脆弱性につながる可能性がある。これらはアプリケーションの露出を増加させる。

#### リンク

- <https://en.wikipedia.org/wiki/Defense_in_depth_(computing)>
- GitLab における [Zero Trust](/handbook/security/product-security/security-platforms-architecture/security-architecture/zero-trust)

</details>

<details>
<summary>

### セキュリティ技術を決して発明しない{.security-architecture-principle}

</summary>

#### なぜ

- セキュリティ技術を作ることは難しく、脆弱性を回避することも難しい
- 新しいセキュリティ技術をセキュアで成熟したものにするには何年もかかる
- それらは（ある意味）完璧であることが期待される

#### どのように

- [独自の暗号を作らないこと]
- よく知られた実証済みのコンポーネントを使用する
- 疑わしい場合は、常に適切な SME を関与させる

#### 例

- SSO をスクラッチから実装しないこと

#### リンク

- [レインボーテーブル](https://en.wikipedia.org/wiki/Rainbow_table)は暗号化ハッシュ関数の出力をキャッシュするために使用され、パスワードハッシュをクラッキングするのに使用できる。
- [bcrypt のデフォルトコストファクターの危険性](https://labs.clio.com/bcrypt-cost-factor-4ca0a9b03966): 有名な暗号ライブラリを使用していても、その設定が脆弱性につながる可能性がある。

</details>

<details>
<summary>

### 最も弱いリンクを見つける{.security-architecture-principle}

</summary>

#### なぜ

- システムは最も弱いリンクと同じ強度しかない
- 時間の経過とともに新しい脆弱性が発見され、コンポーネントが突然新しい弱いリンクになる可能性がある

#### どのように

- システムを[脅威モデリング](../../security-platforms-architecture/application-security/threat-modeling)し、繰り返し、イテレーションする。
- 中央のコンポーネントを特定する:
  - 他より多くの権限を共有している
  - 他のコンポーネントへの接続がより多い
  - エントリーポイントである（ログインモジュール、API など）
- [依存関係スキャン](https://docs.gitlab.com/ee/user/application_security/dependency_scanning/)を実行する
- 弱い暗号やアルゴリズムを避ける
- ときには人間（ユーザー）を最も弱いリンクと考える。フィッシングが今も広く使用されているのには理由がある

#### 例

- 一部のリソースは UI で非常に十分に保護されており、認可されていないユーザーには決して公開されません。しかし、API がセキュリティ制御を正しく実装していない場合、これらのリソースが機密データをフィルタリングせずに生のモデルとして渡される可能性があります。
- 転送時には暗号化されているが、保存時には暗号化されていないデータ。
- 最も弱いリンクはユーザーである場合もあります。強力なパスワードと MFA を強制しないことは機密データの露出につながる可能性がありますが、ユーザーは気づかずに有害な行動を取ることもあります。
- OS（システム）コマンドは、アプリケーションのセキュリティ制御の大部分、あるいはすべてをバイパスすることにつながることが多いです。これは [RCE](https://en.wikipedia.org/wiki/Arbitrary_code_execution) の一般的なベクターであり、可能な限り避けるべきです。

#### リンク

- [ExifTool でメタデータを削除する際の RCE](https://gitlab.com/gitlab-org/gitlab/-/issues/327121)
- [Log4Shell: 人気の Java ロギングパッケージ log4j 2 で発見された RCE 0-day エクスプロイト](https://en.wikipedia.org/wiki/Log4Shell)

</details>

## 結果の測定

TODO（https://gitlab.com/gitlab-com/gl-security/product-security/security-architecture/general/-/issues/49 で議論中）

## 参考文献 {#references}

- [Software Systems Architecture](https://www.viewpoints-and-perspectives.info/) (ISBN-13: 978-0321718334)
- [SABSA](https://sabsa.org/)
- [TOGAF](https://publications.opengroup.org/g21i)
- [O-ESA](https://publications.opengroup.org/g112)
- [OSA](https://www.opensecurityarchitecture.org/cms/)
- [NIST CSF](https://www.nist.gov/cyberframework)
- [CIS Critical Security Controls](https://www.cisecurity.org/controls)
- [Cyber Defense Matrix](https://cyberdefensematrix.com/)
- [AWS Well Architected Framework](https://aws.amazon.com/architecture/well-architected/)
- [OWASP Developer Guide Reboot](https://github.com/OWASP/DevGuide)
- [Google Cloud: Optimize your system design using Architecture Framework Principles](https://cloud.google.com/blog/topics/solutions-how-tos/optimize-your-system-design-using-architecture-framework-principles)
