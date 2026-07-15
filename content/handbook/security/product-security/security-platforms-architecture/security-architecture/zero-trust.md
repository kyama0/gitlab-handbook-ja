---
title: ゼロトラスト
upstream_path: /handbook/security/product-security/security-platforms-architecture/security-architecture/zero-trust/
upstream_sha: "f469f09c3347a37927c75866af3d2611a5421062"
translated_at: "2026-07-16T07:30:25+09:00"
translator: codex
stale: false
lastmod: "2026-07-14T11:05:13-04:00"
---

## ゼロトラスト

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
