---
title: Growth ステージのオペレーティングモデル
description: "Growth チームの運営リズム: 1 つのチーム、1 つのロードマップ、週次の報告サイクル。"
upstream_path: "/handbook/engineering/development/growth/operating_model_growth/"
upstream_sha: "2c77a1f5b8c8a80cb7b5151ff11cfad84f98bfbb"
translated_at: "2026-10-10T06:55:21.889977+00:00"
translator: claude
stale: false
lastmod: "2026-10-09T19:09:40Z"
---

## オペレーティングリズム

Growth は 1 つのロードマップを持つ 1 つのチームであり、GitLab.com とセルフマネージド全体のセルフサービス（Web Direct）初回注文に注力します。ロードマップでは、それぞれの顧客の課題がどれだけ直接的に初回注文につながるかに基づいて優先順位を付けます。従来のグループ境界を維持する代わりに、Product Management、UX、Engineering のリソースを、アジャイルかんばん方式で最も優先順位の高い業務に柔軟に割り当てます。

## 週次カデンス

**水曜日 06:00 UTC**

トリアージボットは `~"workflow::in dev"`、`~"workflow::in review"`、`~"workflow::verification"` とマークされた Issue のステータス更新スレッドを自動的に作成します。

担当者はボットのコメントテンプレートを使用して更新を提供し、利用可能な場合はデモリンクを含めることが期待されます。すべてのデモは録画され、`[日付]: テーマ/タイトル` のプレフィックスを付けた限定公開動画として[Growth 週次デモプレイリスト](https://www.youtube.com/playlist?list=PL05JrBw4t0KrwPNlpnpqeXIlIjOy_ifFl)にチームの参照用としてアップロードされるべきです。

**木曜日 20:00 UTC（終業時）**

DRI: Product Manager（インプットを収集）、Engineering Manager と UX（更新とデモを提供）

1. 週のキーウィン、デモ、次の優先事項を `#s_growth` に投稿する
2. Growth の 12 ヶ月ロードマップのステータスを指定された社内ドキュメントで更新します。

**金曜日 20:00 UTC（終業時）**

PM が主要テーマと優先事項、完了した Issue、進行中の業務、ブロックされた Issue を含む Growth 週次レポートを公開します

**金曜日 18:00 UTC（CXO ミーティング）**

1. Web Direct 初回注文の進捗ペース、PLG メトリクス、運営上の優先事項を含むエグゼクティブサマリーを準備します
2. CXO ミーティングが終了したら、CXO のフィードバックとアクションアイテムを `#s_growth` に投稿する
