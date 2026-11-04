---
title: "財務システムガイド"
upstream_path: "/handbook/business-technology/enterprise-applications/guides/finance-guides/nscustomfields/"
upstream_sha: "74bb2fbdef354f57211295638ac65cfae7c767f8"
translated_at: "2026-11-04T21:13:40.134153+00:00"
translator: "claude"
stale: false
lastmod: "2026-11-04T20:19:30+01:00"
---

## NetSuite でカスタムフィールドを作成する方法 {#how-to-create-custom-fields-in-netsuite}

レコーディング（財務システム情報のため非公開）: [https://youtu.be/7QEw0-E4dTQ](https://youtu.be/7QEw0-E4dTQ)

1. Customization > Lists Records & Fields > Transaction Body Fieldsに移動します
1. Newをクリックします
1. フィールドを設定します
    1. Label（ラベル）
    1. ID `API を通じてやり取りする際に使用する ID`
    1. Owner（オーナー）
    1. Description（説明）
    1. Type（種類）
    1. Store Value（値を保存）にチェック
1. Applies to（適用先）セクションで、このフィールドが利用可能なエンティティを選択します
1. Display Tab（表示タブ）（UI でフィールドがどこに表示されるかを制御）
    1. Main SubTab（メインサブタブ）
    1. Insert before（挿入位置）（既存のフィールドを選択）
    1. Default access level（デフォルトアクセスレベル）`View`
1. その後エンティティに移動して新しいフィールドが表示されているか確認できます
