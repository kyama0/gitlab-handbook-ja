---
title: "モジュラーモノリス ADR 002: 境界付けられたコンテキストの定義"
creation-date: "2024-05-07"
authors: [ "@fabiopitino" ]
toc_hide: true
upstream_path: /handbook/engineering/architecture/design-documents/modular_monolith/decisions/002_bounded_contexts_definition/
upstream_sha: 7970b7fb241c268e1af118c106ab79642da33ed0
translated_at: "2026-04-27T13:58:39Z"
translator: claude
stale: false
---

## コンテキスト

アプリケーションドメインを中心に据えて、どのようにモジュール化するかを定義する必要がありました。

## 決定事項

アプリケーションドメインは、GitLab アプリケーションのトップレベルモジュールを定義する境界付けられたコンテキスト（Bounded Context）に分割されます。「境界付けられたコンテキスト」という用語は、ドメイン駆動設計（DDD）において広く使われています。

境界付けられたコンテキストを定義するとは、コードを組織構造ではなくプロダクト構造に合わせて整理することを意味します。

[提案: GitLab モノリスをコンポーネントに分割する](https://gitlab.com/gitlab-org/gitlab/-/issues/365293) の調査によると、[プロダクトカテゴリ](/handbook/product/categories/) をガイドラインとして採用することは、組織構造をフォルダ構造に変換すること（例: `app/modules/verify/pipeline-execution/...`）よりもはるかに優れているとされています。

ただし、このガイドラインだけでは不十分であり、より具体的な戦略が必要です:

- 境界付けられたコンテキスト（トップレベルモジュール）は、実装の詳細をカプセル化し、より小さいインターフェイスを提供できるよう、[十分に深い](https://docs.gitlab.com/ee/development/software_design.html#use-namespaces-to-define-bounded-contexts) ものであるべきです。
- Browser Performance Testing のように、単独で境界付けられたコンテキストを表すには小さすぎるプロダクトカテゴリが存在します。
  関連するプロダクトカテゴリをまとめるための戦略が必要です。
- プロダクトカテゴリが必ずしも明確な境界に変換されるわけではありません。
  `Category:Pipeline Composition` と `Category:Continuous Integration` は、Pipeline Authoring チームと Pipeline Execution チームが多くのコードを共有する例です。
- コードの一部には、明確なプロダクトカテゴリが関連付けられていない場合があります。

上記を踏まえつつ、プロダクトカテゴリはアプリケーションに存在する境界付けられたコンテキストのおおまかな全体像を提供します。
そのため、プロダクトカテゴリを使用して境界付けられたコンテキストの初期セットをスケッチし、
関連する、または強く結合しているカテゴリを同じ境界付けられたコンテキストにまとめ、不足している場合は新しい境界付けられたコンテキストを作成します。

## 結果

2024年5月に[境界付けられたコンテキストのワーキンググループ](../../../../company/working-groups/bounded-contexts/)が完了し、このページで説明しているモジュール化の第一フェーズが完成しました。

[コード上の境界付けられたコンテキストのリスト](https://docs.gitlab.com/ee/development/software_design.html#use-namespaces-to-define-bounded-contexts) を定義し、完全に名前空間化されたモノリスに向けて RuboCop による強制を開始しました。チームメンバーは境界付けられたコンテキストを明示的に作成・削除することでこのリストを編集でき、決定は Staff+ エンジニアによってレビューされます。

## 代替案

コードを組織構造に合わせるかどうかを評価しましたが、実現可能でないと判断しました:

- プロダクトカテゴリはオーナーシップが変わることがあり、行き来を含む頻繁な変更も見られました。
  プロダクトカテゴリのオーナーシップが変わるたびにコードを移動することは、メンテナンスの負担が大きすぎます。
- チームや組織の変更は、特定モジュールのオーナーシップを再ラベリングするだけで済むべきです。
- 結合と複雑さはビジネスロジックとプロダクト構造に直接相関しています。
  組織構造に合わせたコード整理は、不必要な複雑さとはるかに多くの結合を生む可能性があります。
