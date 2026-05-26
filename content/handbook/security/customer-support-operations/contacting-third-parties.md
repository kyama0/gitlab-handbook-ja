---
title: 'サードパーティへの連絡'
description: 'サードパーティへの連絡に関するドキュメント'
upstream_path: /handbook/security/customer-support-operations/contacting-third-parties/
upstream_sha: 7405b4b85e7e4a5d61d4eff68e49976463e3dada
translated_at: "2026-05-10T00:00:00Z"
translator: claude
stale: false
lastmod: "2026-05-26T12:05:00-05:00"
---

私たちが管理するシステムのいくつかはサードパーティが作成したものです。時には、これらのサードパーティアプリケーション固有の問題に遭遇し、社内では完全に解決できないことがあります。そのようなシナリオでは、カスタマーサポートオペレーションチームがアプリケーションのサポートシステムに連絡する必要があります。

## プロセス

1. エージェントまたはカスタマーサポートオペレーションチームのメンバーが、私たちの [Issue トラッカー](https://gitlab.com/gitlab-com/gl-security/corp/cust-support-ops/issue-tracker) で Issue を作成します。
   - 状況に応じて `Bug` または `Feature request` のいずれかとなります
1. カスタマーサポートオペレーションチームのメンバーが DRI として行動します。
1. DRI は、HAR ファイル、ブラウザバージョン、プラグインなどのアイテムの収集を含む、当該の Issue のトリアージと調査を行います。
1. DRI は、詳細な情報を提供して、サードパーティアプリのサポートシステムにチケットを起票します。
1. 他のカスタマーサポートオペレーションチームのメンバーを必ず CC してください
1. DRI は、Issue が修正されるまで、サードパーティアプリのサポートチームから受けたすべての応答を Issue 内で更新します。
