---
title: '組織の削除'
description: '組織の削除に関するドキュメント'
upstream_path: "/handbook/eta/css/zendesk/organizations/deletion/"
upstream_sha: "1c5f183add4a3220f2aa77e0c98565c4fad645e2"
translated_at: "2026-07-18T06:43:41+09:00"
translator: codex
stale: false
lastmod: "2026-07-14T15:22:25-05:00"
---

このページでは、Zendesk 内で組織がどのように削除されるかを説明します。

{{% alert title="技術的な詳細" color="primary" %}}

- デプロイタイプ: `Ad-hoc`
- プロジェクト:
  - [Zendesk Global](https://gitlab.com/gitlab-support-readiness/zendesk-global/organizations/deletion)
  - [Zendesk US Government](https://gitlab.com/gitlab-support-readiness/zendesk-us-government/organizations/deletion)

{{% /alert %}}

## 標準削除の基準

[データ保持ポリシー](https://about.gitlab.com/privacy/#data-retention)およびさまざまな適用法令に従い、組織は最後に有効だった（有償かつトライアルではない）サブスクリプションの終了から 3 年後に削除します。したがって、組織の最後に有効だったサブスクリプションが 2021-12-18 に終了した場合、削除の対象となる日は 2024-12-18 です。

## 仕組み

毎週土曜日の 0045（Global は UTC、US Government は Pacific）に、[Zendesk-Salesforce 同期](/handbook/eta/css/zendesk-salesforce-sync/)を通じて削除レビューが必要と指定されたすべての組織を、`bin/delete` スクリプトが分析します。このスクリプトは次を行います。

- Zendesk 検索 `type:organization mark_for_deletion:true ignore_deletion:false` を使用して、レビューする組織の一覧を取得する
- 見つかった各組織をループ処理して、次を行う:
  - 組織が次のいずれかの基準を満たす場合、削除配列に追加する:
    - 組織にチケットがない
    - 組織にはチケットがあるが、すべてクローズ済みの状態である
  - クローズされていない状態のチケットがある場合、組織を除外配列に追加する
- 削除配列内のすべての組織を一括削除する（API 制限に従い、100 件ずつ）
- 除外配列内のすべての組織を一括更新して、例外があることを示す（API 制限に従い、100 件ずつ）

## 例外のレビュー

月に 1 回、Customer Support Systems チームは削除が免除された組織をレビューします（`ignore_deletion:true` で検索）。対象の組織を削除すべき場合は、例外を付与したチェックボックスを外します（次回の実行で削除されます）。引き続き免除すべき場合は、そのままにします。

## よくある問題とトラブルシューティング

これは必要に応じて項目を追加する、生きたセクションです。
