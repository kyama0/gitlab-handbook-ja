---
owning-stage: "~devops::data stores"
title: "Cells ADR 012: Cell の一意識別子"
toc_hide: true
upstream_path: /handbook/engineering/architecture/design-documents/cells/decisions/012_cell_unique_identifier/
upstream_sha: b4eeb07f0d5f46e2fc5f8572be1a2547261aed89
translated_at: "2026-04-26T00:00:00Z"
translator: claude
stale: false
lastmod: "2024-12-16T09:40:34+00:00"
---

## コンテキスト

複数の Cell が存在し、それぞれに顧客データのサブセットが格納されます。
そのため、[ルーティング](../http_routing_service.md)、[クレーム](../topology_service.md#claim-service)、および[シーケンスの作成](../topology_service.md#sequence-service)のために各 Cell の一意識別子が必要です。

Cell プロビジョニングツールには、プロビジョニングされるすべてのインフラの一意識別子として使用される[テナント ID](https://gitlab.com/gitlab-com/gl-infra/gitlab-dedicated/tenant-model-schema/-/blob/6051d7bdc6d540b45f75c52d8cb9962c426dadcb/json-schemas/tenant-model.json#L525-530) がすでに存在します。

## 決定事項

Cell ID という概念を導入します。Cell ID は 1 から始まるインクリメンタルな ID です。この Cell ID はシステムの複数の箇所で使用されます。

- [Topology Service](../topology_service.md#claim-service): リソースを分類し、特定の Cell ID でリソースをクレームし、データベースシーケンスを作成するために使用します。
- [テナントモデル](011_cell_specific_configuration.md): Rails モノリスに正しい Cell ID を設定し、Instrumentor 内で Cell 固有の設定を有効にするために使用します。
- [HTTP Router](../http_routing_service.md): リクエストを正しい Cell にルーティングするための識別情報として使用します。
- Rails モノリス: 設定されると、グローバルに一意なリソースを Topology Service にクレームし始め、[トークン](../routable_tokens.md) のようなルーティング可能な情報を作成します。

Cell ID には以下のルールが適用されます。

- Cell ID `1` は既存の[レガシー Cell](../goals.md#legacy-cell) に予約され、新たにプロビジョニングされる Cell は 1 ずつインクリメントされます。つまり最初にプロビジョニングされる Cell の ID は `2` になります。
- Cell ID は一度しか使用できず、新たにプロビジョニングされる Cell には新しい ID が割り当てられます。

## 結果

Cell ID はすべての Cell を必要とするサービスに伝播させる必要があります。これをスケールさせるには、Cell ID とそれが指すもののシングルソースオブトゥルースとなる単一のサービスが必要です。

Topology Service が Cell ID のオーナーおよびシングルソースオブトゥルースとなり、他のすべてのシステムは Topology Service を使用して Cell の数とその ID を確認します。

## 代替案

1. テナント ID を識別子として使用する: これにより Rails モノリス、Topology Service、HTTP Router がプロビジョニングされたインフラと結合されてしまいます。同じ Cell ID で新しいテナントをプロビジョニングしたい場合に、変更不能なインフラを新しいテナントモデルに移行することが困難になります。
1. Cell 名: Cell に固有の名前を付ける方法ですが、この名前はやはり一意である必要があり、おそらく ID から導出されるものになります。Cell 名を使用するとしたら、人間が読みやすくするためだけのものになりますが、ID と名前を同期させることが困難なため、どのシステムも識別子として使用しません。
   Cell の名前は[設定より規約](../../../../../product/product-principles.md#convention-over-configuration)に従い、`cell-#{ID}` の形式にすべきです。
