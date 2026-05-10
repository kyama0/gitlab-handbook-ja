---
title: ノートパソコンワイプ（ファクトリーリセット）プロセス
upstream_path: /handbook/security/corporate/end-user-services/laptop-management/laptop-wipe/
upstream_sha: 1e195b58b9f249ff10bd0e705106c320fee86141
translated_at: "2026-05-11T00:00:00Z"
translator: claude
stale: false
---

## 概要

ノートパソコンワイプは、IT アナリストとの[アポイントメントの予約](#schedule-a-wipe)を通じて実行する必要があり、マシンをワイプし、ベースのオペレーティングシステムを再インストールし、GitLab が提供したすべてのソフトウェアと設定を削除します。

ノートパソコンは、macOS では [Jamf](/handbook/security/corporate/systems/jamf)、Linux では [Fleet](https://internal.gitlab.com/handbook/security/corporate/tooling/fleet/) でワイプする必要があります。これらのツールを使用することで、クリーンなディスクワイプが実行され、GitLab がディスクワイプの証拠を保持できるようになります。

**いかなる状況下でも、ノートパソコンの技術的問題のトラブルシューティングのために IT のリクエストで行う場合を除き、自分でディスクワイプを実行すべきではありません**。デバイスがポリシーに従ってワイプされていないことが GitLab に発見された場合、GitLab は通知なしにリモートワイプを強制するために行動する場合があります。

## ワイプの予約 {#schedule-a-wipe}

[ご都合のよい時間を見つけるには、こちらをクリックしてください。](https://app.reclaim.ai/m/it-eus-laptop-wipes/laptop-wipes)
