---
title: Service Usage Data オプトアウトリクエストの処理
description: "Service Usage Data オプトアウトリクエストの処理方法"
category: GitLab Self-Managed licenses
upstream_path: /handbook/support/license-and-renewals/workflows/self-managed/opt-out_service-usage-data/
upstream_sha: 460f0fe6722bfe52b151b6a8641368ea38885df5
translated_at: "2026-05-08T12:00:00Z"
translator: claude
stale: false
lastmod: "2024-06-27T22:14:31+00:00"
---

## 概要

Support チームは、顧客を [Service Usage Data](/handbook/legal/privacy/customer-product-usage-information/) からオプトアウトさせる機能を持っていません。また、[ハンドブック](/handbook/sales/field-operations/order-processing/)に記載のとおり、顧客は Sales チームの承認なしにこの機能をオプトアウトすることはできません。このリクエストを処理するには、以下を実施します。

1. SFDC で Account owner を見つけます。
1. Zendesk マクロ `Support::Self-Managed::Super Sonics Opt Out` を使用し、アカウント情報を入力します。
1. `Solved` として送信します。
