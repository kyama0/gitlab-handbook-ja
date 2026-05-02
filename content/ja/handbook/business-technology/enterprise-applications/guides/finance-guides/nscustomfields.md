---
title: "財務システムガイド"
upstream_path: "/handbook/business-technology/enterprise-applications/guides/finance-guides/nscustomfields/"
upstream_sha: "b4eeb07f0d5f46e2fc5f8572be1a2547261aed89"
translated_at: "2026-04-25T05:49:40Z"
translator: "claude"
stale: false
---

<link rel="stylesheet" type="text/css" href="/stylesheets/biztech.css" />

## Netsuite でカスタムフィールドを作成する方法

レコーディング（財務システム情報のため非公開）: [https://youtu.be/7QEw0-E4dTQ](https://youtu.be/7QEw0-E4dTQ)

1. カスタマイズ > リスト、レコード、フィールド > トランザクションボディフィールドに移動します
1. 「新規」をクリックします
1. フィールドを設定します
    1. ラベル
    1. ID `API を通じてやりとりする際に使用される ID`
    1. オーナー
    1. 説明
    1. タイプ
    1. 「値を保存」にチェック
1. 「適用先」セクションで、このフィールドが利用可能なエンティティを選択します
1. 表示タブ（UI でフィールドがどこに表示されるかを制御）
    1. メインサブタブ
    1. 挿入位置（既存のフィールドを選択）
    1. デフォルトアクセスレベル `表示`
1. その後エンティティに移動して新しいフィールドが表示されているか確認できます
