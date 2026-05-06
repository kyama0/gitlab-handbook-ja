---
title: "NS カスタムフィールドガイド"
description: "NS カスタムフィールドガイド"
upstream_path: "/handbook/business-technology/enterprise-applications/guides/ns-custom-field/"
upstream_sha: "b4eeb07f0d5f46e2fc5f8572be1a2547261aed89"
translated_at: "2026-04-25T06:02:44Z"
translator: "claude"
stale: false
---

<link rel="stylesheet" type="text/css" href="/stylesheets/biztech.css" />

## NetSuite でカスタムフィールドを作成する方法

録画（財務システム情報のためプライベート公開）: [https://youtu.be/7QEw0-E4dTQ](https://youtu.be/7QEw0-E4dTQ)

1. Customization > Lists Records & Fields > Transaction Body Fields に移動します
1. New をクリックします
1. フィールドを設定します
    1. Label（ラベル）
    1. ID `API を通じてやり取りする際に使用する ID`
    1. Owner（オーナー）
    1. Description（説明）
    1. Type（種類）
    1. Store Value（値を保存）にチェックを入れます
1. Applies to（適用先）セクションで、このフィールドを使用可能にするエンティティを選択します
1. Display Tab（表示タブ）（UI 上でのフィールドの表示場所を制御します）
    1. Main SubTab（メインサブタブ）
    1. Insert before（前に挿入する）（既存のフィールドを選択します）
    1. Default access level（デフォルトアクセスレベル）`View`
1. エンティティに移動して、新しいフィールドが表示されているか確認できます
