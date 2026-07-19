---
title: 'サードパーティへの連絡'
description: 'サードパーティへの連絡に関するドキュメント'
upstream_path: "/handbook/eta/css/contacting-third-parties/"
upstream_sha: "1c5f183add4a3220f2aa77e0c98565c4fad645e2"
translated_at: "2026-07-18T06:40:02+09:00"
translator: codex
stale: false
lastmod: "2026-07-14T15:22:25-05:00"
---

私たちが管理するシステムのいくつかは、サードパーティによって作られています。こうしたサードパーティアプリケーションに固有の問題で、内部だけでは完全に解決できないものに遭遇することがあります。その場合、Customer Support Systems チームはアプリケーションのサポートシステムに連絡する必要があります。

## プロセス

1. エージェントまたは Customer Support Systems チームメンバーが、[Issue トラッカー](https://gitlab.com/gitlab-com/gl-security/corp/cust-support-ops/issue-tracker)に Issue を作成します。
   - その時点の状況に応じて、`Bug` または `Feature request` になります
1. Customer Support Systems のチームメンバーが DRI を務めます。
1. DRI は対象の Issue をトリアージして調査します。HAR ファイル、ブラウザのバージョン、プラグインなどの項目を収集することもあります。
1. DRI は、詳細な情報を添えてサードパーティアプリのサポートシステムにチケットを起票します。
1. 他の Customer Support Systems チームメンバーを必ず CC に含めます。
1. DRI は、Issue が解決されるまで、サードパーティアプリのサポートチームから受け取ったすべての回答を Issue に更新します。
