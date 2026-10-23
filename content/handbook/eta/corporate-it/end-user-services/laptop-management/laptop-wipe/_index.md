---
title: "ラップトップのワイプ（初期化）プロセス"
aliases:
  - /handbook/security/corporate/end-user-services/laptop-management/laptop-wipe/
upstream_path: /handbook/eta/corporate-it/end-user-services/laptop-management/laptop-wipe/
upstream_sha: "c9949657c5872e30f062664ae031e45198aa8562"
lastmod: "2026-10-23T12:38:14-05:00"
translated_at: "2026-10-23T21:05:36+00:00"
translator: codex
stale: false
---

## 概要 {#overview}

ラップトップのワイプは、IT アナリストとの[予約のスケジュール](#schedule-a-wipe)を通じて実行し、マシンをワイプしてベースオペレーティングシステムを再インストールし、GitLab が提供したすべてのソフトウェアと構成を削除する必要があります。

ラップトップは、[macOS](/handbook/security/corporate/systems/macos/)と [Linux](https://internal.gitlab.com/handbook/security/corporate/tooling/fleet/)のいずれも Fleet でワイプする必要があります。これらのツールを使用することで、ディスクが完全にワイプされ、GitLab はディスクワイプの証跡を保持できます。

ラップトップの技術的な問題をトラブルシューティングするために IT から依頼された場合を除き、**どのような状況でも自分でディスクワイプを実行してはいけません**。GitLab がデバイスがポリシーに従ってワイプされていないことを発見した場合、GitLab は予告なくリモートワイプを強制する措置を取ることがあります。

## ワイプを予約する {#schedule-a-wipe}

[こちらをクリックして、ご都合のよい時間を見つけてください。](https://app.reclaim.ai/m/it-eus-laptop-wipes/laptop-wipes)
