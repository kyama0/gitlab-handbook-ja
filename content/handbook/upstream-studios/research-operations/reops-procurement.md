---
title: "ReOps 調達のベストプラクティス"
description: "調達 (procurement) と連携する際のベストプラクティス"
upstream_path: /handbook/upstream-studios/research-operations/reops-procurement/
upstream_sha: 8451bcaa23ef826bedc5422c87ee89de121dd85b
lastmod: "2026-07-13T19:21:22+01:00"
translated_at: "2026-07-14T06:10:50+09:00"
translator: codex
stale: false
---

新規ツールのオンボーディング、PO の支払い、契約更新などを調達 (procurement) と連携して行う際に従うべきベストプラクティスです。

#### ベストプラクティス

- ReOps tooling Issue を作成し、ReOps トラッカーに追加します
- Issue で進捗を更新します
  - こちらの [例](https://gitlab.com/gitlab-org/ux-research/-/issues/2243) を参照してください
- 調達 (procurement) のリクエストなのか、買掛金 (accounts payable) のリクエストなのかを判断します。新規ツール、ベンダー、請求書の場合は、調達プロセスを経る必要があります。既存契約の更新や支払いについては、買掛金と連携する必要があります。
  - 調達: [調達プロセス](/handbook/finance/procurement/) に概説された手順に従います
  - 買掛金: 必要なすべての情報を直接買掛金 (AP@gitlab.com) にメールします
  - プロセスが進んでいることを確認するため、2 日ごとにチェックインします
  - プロセスがあるステップで停滞している場合、#procurement または #accountspayable Slack チャネルに連絡して、直接連絡できる人を特定します
- ベンダーとのコミュニケーションを維持し、積極的に更新を提供します
  - Issue のコメントで、更新やメールのやり取りのスクリーンショットを提供します
  - 例として [この Issue](https://gitlab.com/gitlab-org/ux-research/-/issues/2242) を参照してください
- ベンダーから資金を受領した旨の確認を得ます
  - Issue のコメントにスクリーンショットを提供します
