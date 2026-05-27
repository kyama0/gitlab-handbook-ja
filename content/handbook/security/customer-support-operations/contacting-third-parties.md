---
title: 'サードパーティへの連絡'
description: 'サードパーティへの連絡に関するドキュメント'
upstream_path: /handbook/security/customer-support-operations/contacting-third-parties/
upstream_sha: "154fb2bd6436508aa2d90583cc235d5fe28b1705"
translated_at: "2026-05-27T00:00:00Z"
translator: claude
stale: false
lastmod: 2026-05-26T12:05:00-05:00
---

私たちが管理するシステムのいくつかは、サードパーティによって作られています。これらのサードパーティアプリケーション特有の問題に遭遇し、社内だけでは完全に解決できないことがあります。そのような場合には、Customer Support Operations チームがそのアプリケーションのサポートシステムに連絡する必要があります。

## プロセス

1. エージェントまたは Customer Support Operations チームメンバーが、私たちの [Issue トラッカー](https://gitlab.com/gitlab-com/gl-security/corp/cust-support-ops/issue-tracker) に Issue を作成します。
   - 状況に応じて、`Bug` または `Feature request` のいずれかになります
1. Customer Support Operations チームメンバーが DRI を務めます。
1. その DRI が当該の Issue をトリアージして調査します。これには HAR ファイル、ブラウザのバージョン、プラグインなどの収集が含まれる場合があります。
1. DRI は詳細な情報を提供して、サードパーティアプリのサポートシステムにチケットを開きます。
1. 必ず他の Customer Support Operations チームメンバーを CC してください
1. DRI は、Issue が修正されるまで、サードパーティアプリのサポートチームから受け取ったすべての返信を Issue に反映します。
