---
title: ゼロトラスト
upstream_path: /handbook/security/product-security/security-platforms-architecture/security-architecture/zero-trust/
upstream_sha: 1e195b58b9f249ff10bd0e705106c320fee86141
translated_at: "2026-05-09T12:40:09Z"
translator: claude
stale: false
---

## ゼロトラスト {#zero-trust}

セキュリティの水準を引き上げる取り組みの一環として、GitLab はゼロトラスト、すなわちアクセス制御を組織のペリメーター（境界）から個人、資産、エンドポイントへと移すという実践を導入しています。この戦略の詳細については、[Google BeyondCorp ホワイトペーパー: A New Approach to Enterprise Security](https://research.google/pubs/beyondcorp-a-new-approach-to-enterprise-security/) をご覧ください。

私たちにとってゼロトラストとは、GitLab 環境内のエンドポイントや資産にアクセスしようとするすべてのデバイスが認証および認可を必要とすることを意味します。ゼロトラストは動的でリスクベースの判断に依存しているため、ユーザーも認可および検証されなければなりません: どの部門に所属しているか、どの役割を持っているか、アクセスしようとしているデータやホストはどれほど機密性が高いか、などです。私たちはゼロトラストロードマップの初期段階にありますが、このジャーニーを進める中で、学んだ教訓、プロセス、進捗を [Security ブログ](https://about.gitlab.com/blog/categories/security/) に文書化していきます。

ゼロトラストの概念と私たちの実装ロードマップの詳細については、GoogleNext19 での GitLab プレゼンテーションをご覧ください: <https://www.youtube.com/watch?v=DrPiCBtaydM>

[Zero Trust Networking (ZTN) ブログシリーズ](https://about.gitlab.com/blog/tags/zero-trust/) もぜひご覧ください。ここでは、私たちが今後直面すると予想される ZTN 実装の課題、すでに対応済みのもの、そして今後の展望について詳しく説明しています:

- パート 1: [ゼロトラストの進化](https://about.gitlab.com/blog/2019/04/01/evolution-of-zero-trust/)
- パート 2: [GitLab におけるゼロトラスト: 課題、目標、今後の挑戦](https://about.gitlab.com/blog/2019/08/09/zero-trust-at-gitlab-problems-goals-challenges/)
- パート 3: [GitLab におけるゼロトラスト: データ分類とインフラストラクチャの課題](https://about.gitlab.com/blog/2019/08/21/zero-trust-at-gitlab-the-data-classification-and-infrastructure-challenge/)
- パート 4: [GitLab におけるゼロトラスト: データゾーンと認証スコアリングによる課題の緩和](https://about.gitlab.com/blog/2019/09/06/zero-trust-at-gitlab-data-zones-and-authentication-scoring/)
- パート 5: [GitLab におけるゼロトラスト: 実装の課題](https://about.gitlab.com/blog/2019/10/02/zero-trust-at-gitlab-implementation-challenges/)
- パート 6: [GitLab におけるゼロトラスト: ここからどこへ向かうのか?](https://about.gitlab.com/blog/2019/10/15/zero-trust-at-gitlab-where-do-we-go-from-here/)

/r/netsec subreddit に行って、ZTN 実装、ロードマップ、戦略などに関する質問に答えた [2019 年 10 月 29 日の Reddit AMA](https://www.reddit.com/r/netsec/comments/d71p1d/were_a_100_remote_cloudnative_company_and_were/) をご覧ください。

ID は ZTN フレームワーク実装の重要な要素です。GitLab は、クラウドアプリケーションアクセスの認証を標準化し、ユーザーフレンドリーな SSO を実装するために、Okta の実装を進めています。詳細については [Okta](/handbook/security/corporate/end-user-services/okta/) ページをご覧ください。

### 企業 VPN を使用しない理由

多くの企業環境では、仮想プライベートネットワーク（VPN）が、セキュリティの低いリソース（通常は企業ファイアウォールでも保護されている）にアクセスするために使用されています。企業 VPN 接続を追加しても、それらのシステムを使用する際のセキュリティはわずかにしか向上せず、ネットワークのペリメーターが存在することを前提としています。GitLab はオールリモートの会社として、ほとんどの作業を、通信およびデータの機密性を維持するために頼っている他の Software-as-a-Service (SaaS) プロバイダーを使用して行っています。

[ゼロトラスト](#zero-trust)に関連して、企業 VPN はペリメーターであり、ZTN アーキテクチャでは認可決定の基盤としてペリメーターを重要視しません。重要システムへの現在のアクセスは、代替的な制御によって管理されています。

現時点で企業 VPN は実装されていませんが、個々のチームメンバーが*個人用* VPN を使用したい場合、プライバシーやトラフィック集約の防止など、有効なユースケースが他にもあります。何らかの理由で個人用 VPN サービスを使用したいチームメンバーは、引き続き [VPN サービスを経費精算](/handbook/finance/expenses/) できます。

カフェやコワーキングスペースなど、信頼できない環境でのラップトップ使用というユースケースについて、チームメンバーは、最新のセキュリティパッチ、ホストファイアウォール、アンチウイルスといった常時オンのホスト保護のベースラインを優先すべきです。これは [ラップトップソフトウェア構成標準](/handbook/security/corporate/end-user-services/laptop-management/laptop-security//) に従うことで実現します。とはいえ、これらの状況では個人用 VPN が追加の保護を提供する場合があります。個人用 VPN の詳細については、[個人用 VPN](/handbook/tools-and-tips/personal-vpn/) ページをご覧ください。
