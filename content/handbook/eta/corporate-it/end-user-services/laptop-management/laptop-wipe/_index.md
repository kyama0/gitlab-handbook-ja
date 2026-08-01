---
title: "ラップトップのワイプ（初期化）プロセス"
aliases:
  - /handbook/security/corporate/end-user-services/laptop-management/laptop-wipe/
upstream_path: /handbook/eta/corporate-it/end-user-services/laptop-management/laptop-wipe/
upstream_sha: "c75ccd81af7d76262c8cb188bf7e7e2a7f838894"
lastmod: "2026-07-28T15:04:15+01:00"
translated_at: "2026-07-31T07:32:14+09:00"
translator: codex
stale: false
---

## 概要

ラップトップのワイプは、IT アナリストとの[予約のスケジュール](#schedule-a-wipe)を通じて実行し、マシンをワイプしてベースオペレーティングシステムを再インストールし、GitLab が提供したすべてのソフトウェアと構成を削除する必要があります。

ラップトップは、macOS では [Jamf](/handbook/security/corporate/systems/jamf)を使用して、Linux では [Fleet](https://internal.gitlab.com/handbook/security/corporate/tooling/fleet/)を使用してワイプする必要があります。これらのツールを使用することで、ディスクが完全にワイプされ、GitLab はディスクワイプの証跡を保持できます。

ラップトップの技術的な問題をトラブルシューティングするために IT から依頼された場合を除き、**どのような状況でも自分でディスクワイプを実行してはいけません**。GitLab がデバイスがポリシーに従ってワイプされていないことを発見した場合、GitLab は予告なくリモートワイプを強制する措置を取ることがあります。

## ワイプを予約する {#schedule-a-wipe}

[こちらをクリックして、ご都合のよい時間を見つけてください。](https://app.reclaim.ai/m/it-eus-laptop-wipes/laptop-wipes)
