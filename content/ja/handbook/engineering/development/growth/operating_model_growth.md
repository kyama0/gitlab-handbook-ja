---
title: Growth ステージのオペレーティングモデル
upstream_path: "/handbook/engineering/development/growth/operating_model_growth/"
upstream_sha: "3480299851f7e2243d4f08b75dac452f89929636"
translated_at: "2026-04-28T05:15:25Z"
translator: claude
stale: false
---

## オペレーティングリズム

Growth は Self-Serve（Web Direct）ファーストオーダーへの影響に焦点を当てた優先順位付けされたイニシアチブのリストを含む、プールドスタッフィングモデルを推進しています。従来のグループ境界を維持する代わりに、プロダクトマネジメント、UX、エンジニアリングのリソースがアジャイルかんばんアプローチを使用してトップ優先事項に柔軟に割り当てられます。

## 週次カデンス

**水曜日 06:00 UTC**

トリアージボットは `~"workflow::in dev"`、`~"workflow::in review"`、`~"workflow::verification"` とマークされた Issue のステータス更新スレッドを自動的に作成します。

担当者はボットのコメントテンプレートを使用して更新を提供し、利用可能な場合はデモリンクを含めることが期待されます。すべてのデモは録画され、`[日付]: テーマ/タイトル` のプレフィックスを付けた非公開動画として[Growth 週次デモプレイリスト](https://www.youtube.com/playlist?list=PL05JrBw4t0KrwPNlpnpqeXIlIjOy_ifFl)にチームの参照用としてアップロードされるべきです。

**木曜日 20:00 UTC（終業時）**

DRI: プロダクトマネージャー（インプットを収集）、エンジニアリングマネージャーと UX（更新とデモを提供）

1. 週のキーウィン、デモ、次の優先事項を `#s_growth` に投稿する
2. FY26 Growth セクションロードマップのステータスを指定された内部ドキュメントで更新する

**金曜日 20:00 UTC（終業時）**

PM が主要テーマと優先事項、完了した Issue、進行中の業務、ブロックされた Issue を含む Growth 週次レポートを公開します

**金曜日 18:00 UTC（CXO ミーティング）**

1. PLG メトリクスとオペレーショナル優先事項を含むエグゼクティブサマリーを準備する
2. CXO ミーティングが終了したら、CXO のフィードバックとアクションアイテムを `#s_growth` に投稿する
