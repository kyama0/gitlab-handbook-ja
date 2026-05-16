---
title: サービス成熟度モデル
upstream_path: "/handbook/engineering/infrastructure-platforms/service-maturity-model/"
upstream_sha: "0e6f01390a34aeb6706ace17d8d3c50e74e82d0d"
translated_at: "2026-04-29T03:49:37Z"
translator: claude
stale: false
lastmod: "2025-06-19T09:24:08-05:00"
---

## はじめに

このページは、[メトリクスカタログ](https://gitlab.com/gitlab-com/runbooks/-/blob/master/metrics-catalog/README.md)内の各サービスに対するサービス成熟度モデルの出力を示しています。[モデル自体](https://gitlab.com/gitlab-com/runbooks/-/blob/master/service-maturity/maturity.jsonnet)はメトリクスカタログの一部であり、メトリクスカタログと[サービスカタログ](https://gitlab.com/gitlab-com/runbooks/-/blob/master/services/service-catalog.yml)の情報を使用して各サービスをスコアリングします。

成熟度モデルの特定のレベルを達成するには、サービスはそのレベルとすべての前のレベルの基準を満たす必要があります。いくつかの基準はすべてのサービスには適用されません（例えば、PgBouncer のようなサービスは開発ドキュメントを必要としません）。

## サービス別成熟度スコア

❌ はサービスがレベル1の基準さえ満たしていないことを示します


<p class="my-3 text-sm text-gray-600 italic">サービス成熟度スコアは <a href="https://handbook.gitlab.com/handbook/engineering/infrastructure-platforms/service-maturity-model/#service-maturity-model" rel="external noopener">原文 (英語)</a> を参照してください。</p>


### サービス別成熟度詳細

凡例：

* ✅ サービスが基準を満たしている
* ❌ サービスが基準を満たしていない
* ➖ 基準がスキップされている。成熟度基準の中には、一部のサービスには意味をなさないものがあります。例えば、Patroni のようなインフラ向けサービスは運用において重要ですが、開発部門とは関連がないため、開発ガイドラインを必要としません。
* ⚪ まだその基準を測定していません。進捗については [https://gitlab.com/groups/gitlab-com/gl-infra/-/epics/560](https://gitlab.com/groups/gitlab-com/gl-infra/-/epics/560) を参照してください。


<p class="my-3 text-sm text-gray-600 italic">サービス成熟度詳細は <a href="https://handbook.gitlab.com/handbook/engineering/infrastructure-platforms/service-maturity-model/#service-maturity-model" rel="external noopener">原文 (英語)</a> を参照してください。</p>
