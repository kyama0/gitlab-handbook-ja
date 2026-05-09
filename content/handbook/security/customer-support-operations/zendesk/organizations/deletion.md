---
title: '組織削除'
description: '組織削除に関するドキュメント'
date: 2025-12-30
upstream_path: /handbook/security/customer-support-operations/zendesk/organizations/deletion/
upstream_sha: 1e195b58b9f249ff10bd0e705106c320fee86141
translated_at: "2026-05-09T22:41:14Z"
translator: claude
stale: false
---

このページでは、Zendesk 内で組織削除がどのように行われるかについて説明します。

{{% alert title="技術詳細" color="primary" %}}

- デプロイメントタイプ: `Ad-hoc`
- プロジェクト:
  - [Zendesk Global](https://gitlab.com/gitlab-support-readiness/zendesk-global/organizations/deletion)
  - [Zendesk US Government](https://gitlab.com/gitlab-support-readiness/zendesk-us-government/organizations/deletion)

{{% /alert %}}

## 標準削除の基準

私たちの [データ保持ポリシー](https://about.gitlab.com/privacy/#data-retention) に従い、また様々な準拠する法律 / 規制に従い、最後の有効 (有料、非トライアル) サブスクリプションが期限切れになってから 3 年後に組織を削除します。例えば、組織の最後の有効なサブスクリプションが 2021-12-18 に期限切れになった場合、削除対象となる日付は 2024-12-18 となります。

## 仕組み

毎週土曜日 0045 (Global は UTC、US Government は太平洋時間) に、削除レビューが必要であると ([Zendesk-Salesforce sync](/handbook/security/customer-support-operations/zendesk-salesforce-sync/) によって) 示されたすべての組織が `bin/delete` スクリプトによって分析されます。これは以下を行います:

- Zendesk 検索 `type:organization mark_for_deletion:true ignore_deletion:false` を使ってレビュー対象の組織のリストを取得
- 見つかった各組織をループし、以下を行う:
  - 以下の基準のいずれかを満たす場合、組織を削除配列に追加:
    - 組織にチケットがない
    - 組織にチケットがあるがすべてが closed ステータスにある
  - クローズされていないステータスのチケットを持つ組織を無視配列に追加
- 削除配列内のすべての組織をバッチ削除 (API 制限により 100 件ずつのバッチ)
- 無視配列内のすべての組織をバッチ更新 (API 制限により 100 件ずつのバッチ) して例外があることを示す

## 例外レビュー

毎月 1 回、Customer Support Operations チームは削除から除外された組織 (検索 `ignore_deletion:true` 経由) をレビューします。対象の組織が削除されるべき場合、例外を付与したボックスをチェック解除します (次回の実行時に削除されることを保証します)。引き続き除外されるべき場合は、そのままにしておきます。

## よくある問題とトラブルシューティング

このセクションは必要に応じて項目が追加されていく生きたセクションです。
