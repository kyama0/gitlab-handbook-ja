---
owning-stage: "~devops::data stores"
title: "Cells ADR 011: Cell 固有の設定"
toc_hide: true
upstream_path: /handbook/engineering/architecture/design-documents/cells/decisions/011_cell_specific_configuration/
upstream_sha: b4eeb07f0d5f46e2fc5f8572be1a2547261aed89
translated_at: "2026-04-26T00:00:00Z"
translator: claude
stale: false
---

## コンテキスト

Cell は [Instrumentor](https://gitlab.com/gitlab-com/gl-infra/gitlab-dedicated/instrumentor) によって使用されるテナントモデルを使用してプロビジョニングされます。
Instrumentor とテナントモデルはどちらも GitLab.com と GitLab Dedicated の共有コンポーネントであり、
たとえば以下のような Cell にのみ有効になる設定に対して、テナントのプロビジョニング/設定のコードパスを分離する方法が必要です。

- [`_gitlab_session` プレフィックス](https://gitlab.com/gitlab-com/gl-infra/production-engineering/-/issues/25621)
- [ホスト設定](https://gitlab.com/gitlab-com/gl-infra/production-engineering/-/issues/25622)
- [Cell 向けの GitLab Dedicated カスタム ApplicationSettings の無効化](https://gitlab.com/gitlab-com/gl-infra/production-engineering/-/issues/25661)

## 決定事項

テナントモデル内に `cells` という単一フィールドを追加します。
`cells` はオブジェクトで、Cell 設定に固有のキーを持ちます。
たとえば以下のようになります。

```json
{
  "tenant_id" : "c01j2gdw0zfdafxr6"
  ...
  "cells": {
    "cell_id": 1
  }
}
```

`cells.cell_id` は必須フィールドで、このテナントが Cell であることを示します。
デフォルトでは `cell` はオプションのため、既存のテナントモデルは引き続き機能し、
新しい GitLab Dedicated テナントはこのフィールドを省略できます。

`cell.cell_id` が指定された場合は設定より規約を優先し、
テナントを Cell として実行するために必要な追加設定をすべてトリガーします。
たとえば以下のようなものです。

- [`_gitlab_session` プレフィックス](https://gitlab.com/gitlab-com/gl-infra/production-engineering/-/issues/25621)
- [ホスト設定](https://gitlab.com/gitlab-com/gl-infra/production-engineering/-/issues/25622)
- [Cell 向けの GitLab Dedicated カスタム ApplicationSettings の無効化](https://gitlab.com/gitlab-com/gl-infra/production-engineering/-/issues/25661)
- [オンボーディング時の PAM のエンタイトルメント](https://gitlab.com/gitlab-com/gl-infra/gitlab-dedicated/instrumentor/-/blob/9addcba3e58e91f443af8e1e82ade4e607964767/gcp/jsonnet/onboard-terraform.jsonnet#L59-71)（Cell テナントかどうかを確認し、正しいグループを追加します）

`cells.cell_id` の値は [Topology Service](../topology_service.md) から取得されるため、両者が一致している必要があります。
これにより、Topology Service がその Cell を認識してトラフィックをルーティングできるようになります。

## 結果

- 単一の設定フィールドがすべての Cells 設定を有効にする[設定より規約](../../../workflow/index.md#convention-over-configuration)に従うため、テナントモデルに複数の設定フィールドを追加せずに済みます。
- Cell を完全にプロビジョニングする前に、Topology Service が使用する `cells.cell_id` を把握しておく必要があります。
- `cell_id` で規約を作成できない場合にのみ、`cells` オブジェクトに新しいフィールドを追加します。

## 代替案

- `cells: true` という新しいフィールドを作成して同じことを実現する方法がありますが、`cell_id` と `tenant_id` を結合すべきでないため、別の設定フィールドが `cell_id` に対してもやはり必要になります。両者を結合すると以下のような問題が生じます。
  - `tenant_id` をセッション/PAT プレフィックスとして使うには長すぎます。
  - ユーザーに `tenant_id` が公開されてしまうことは望ましくありません。
  - アプリケーションロジックが、異なる制約と意味を持つ `tenant_id` と結合されてしまいます。
- 各設定フィールドごとにフィールドを作成する方法は、テナントモデルの設定が膨大になり、テナントを Cell として機能させるためにどのフィールドが必要かを把握することが困難になります。
- Cell 向けの新しいリファレンスアーキテクチャを作成する方法は、リファレンスアーキテクチャは主に GitLab テナントの大小を定義するものであり、その意味を過負荷にすることになります。また、`cell_id` のような特定の値はどこかで設定可能にする必要があります。
- [リファレンスアーキテクチャオーバーレイ](https://gitlab-com.gitlab.io/gl-infra/gitlab-dedicated/team/engineering/tenant-model.html#reference-architecture-overlays)を使用する方法も、前述のリファレンスアーキテクチャの問題と同様に、GitLab テナントの大小に関するものであるという問題があります。
