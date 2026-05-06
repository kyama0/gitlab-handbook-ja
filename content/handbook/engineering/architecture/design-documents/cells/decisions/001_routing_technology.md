---
owning-stage: "~devops::data stores"
title: 'Cells ADR 001: Cloudflare Workers を用いたルーティング技術'
toc_hide: true
upstream_path: /handbook/engineering/architecture/design-documents/cells/decisions/001_routing_technology/
upstream_sha: b4eeb07f0d5f46e2fc5f8572be1a2547261aed89
translated_at: "2026-04-26T03:00:00Z"
translator: claude
stale: false
---

## 背景

<https://gitlab.com/groups/gitlab-org/-/epics/11002> において、最初に [複数のオプション](https://gitlab.com/gitlab-org/gitlab/-/issues/428195#note_1664622245) をブレインストーミングし、上位 2 つの技術である
[Cloudflare Worker](https://gitlab.com/gitlab-org/gitlab/-/issues/433471) と [Istio](https://gitlab.com/gitlab-org/gitlab/-/issues/433472) を調査しました。

私たちは Cloudflare Worker の PoC を支持し、複数のルーティングルールを持つように [Cell 1.0 proposal](https://gitlab.com/gitlab-org/gitlab/-/issues/437818) で PoC を拡張しました。これらの PoC は、<https://gitlab.com/gitlab-org/gitlab/-/merge_requests/142397> で承認された [routing service blueprint](../http_routing_service.md) の検証に役立ち、また [request buffering](../rejected/proposal-stateless-router-with-buffering-requests.md) と [routes learning](../rejected/proposal-stateless-router-with-routes-learning.md) を却下するに至りました。

## 決定

承認された [routing service blueprint](../http_routing_service.md) に従い、JavaScript/TypeScript で書かれた [Cloudflare Workers](https://workers.cloudflare.com/) を使用してリクエストを正しい cell にルーティングします。

Cloudflare Workers は、優先度の低い要件である `self-managed` を除き、私たちの [requirements](../http_routing_service.md#requirements) をすべて満たします。

Cloudflare Workers の詳細な分析は <https://gitlab.com/gitlab-org/gitlab/-/issues/433471#results> で読むことができます。

## 結果

- すべての self-managed 顧客をサポートしないことを承知の上で技術スタックを選択することになります。
- Cloudflare へのベンダーロックインがより強くなりますが、私たちはすでに彼らに大きく依存しています。
- GCP の外、新しいプラットフォーム上でコンピュートを実行することになりますが、私たちはすでに Cloudflare を使用しています。
- 決定が変わった場合に Routing Service を書き直す必要があるかもしれません。
  Routing Service は非常に小さくシンプル（最大 1000 行のコード）になると見込まれているため、これは大きなリスクではないと考えています。

## 代替案

- [Istio](https://gitlab.com/gitlab-org/gitlab/-/issues/433472) を検討しましたが、適切ではないと結論づけました。
- [Request Buffering](../rejected/proposal-stateless-router-with-buffering-requests.md) を検討しました。
- [Routes Learning](../rejected/proposal-stateless-router-with-routes-learning.md) を検討しました。
- Cloudflare Workers に対して WASM を使用することは、誤った選択です: <https://blog.cloudflare.com/webassembly-on-cloudflare-workers/#whentousewebassembly>
