---
title: "Workspaces ADR 014: Workspaces のデフォルトコンテナイメージと設定"
upstream_path: /handbook/engineering/architecture/design-documents/workspaces/decisions/014_default_container_image_and_configuration/
upstream_sha: 3480299851f7e2243d4f08b75dac452f89929636
translated_at: "2026-04-27T00:00:00Z"
translator: claude
stale: false
lastmod: "2025-03-19T23:08:59-07:00"
---

## コンテキスト

Workspaces を使用するには、ユーザーがプロジェクトに devfile を作成する必要があります。これは参入障壁を高くし、導入・使用・初回ワークスペース作成までの時間を阻害します。devfile なしでプロジェクトからワークスペースを作成できる方法を提供する必要があります。

## 決定事項

ユーザーがデフォルトの devfile からワークスペースを作成できるようにすることを決定しました。このデフォルト devfile は、ユーザーが高い参入障壁なしにワークスペースを試せるコンテナイメージを持ちます。

## 影響

デフォルト devfile を提供しなければ、ワークスペースを試す際の高い参入障壁が続くことになります。これは導入と利用に影響します。

## 代替案

ワークスペース作成時にユーザーが選択できる[デフォルト devfile のリストおよび/または devfile のレジストリを提供する](https://gitlab.com/groups/gitlab-org/-/epics/14113#note_2013471216)ことを検討しました。長期的にはこの方法が望ましいかもしれませんが、現時点で投資したい範囲を超えた投資が必要でした。
