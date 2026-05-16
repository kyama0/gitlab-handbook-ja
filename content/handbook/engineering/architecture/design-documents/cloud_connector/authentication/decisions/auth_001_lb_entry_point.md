---
title: "Cloud Connector ADR AUTH-001: ロードバランサーを単一エントリポイントとして使用"
toc_hide: true
upstream_path: /handbook/engineering/architecture/design-documents/cloud_connector/authentication/decisions/auth_001_lb_entry_point/
upstream_sha: 0ee1352c26e468fa8032143d735391a793de7086
translated_at: "2026-04-27T03:34:38Z"
translator: claude
stale: false
lastmod: "2026-01-30T17:09:14+01:00"
---

## オーナーシップ

`cloud.gitlab.com` エンドポイントは [Runway チーム](/handbook/engineering/infrastructure-platforms/gitlab-delivery/runway/) が所有しています。

## コンテキスト

ブループリントの最初のイテレーションでは、専用の Cloud Connector エッジサービスを立ち上げることを提案していました。Cloud Connector の傘下の機能を使用するすべてのトラフィックがそのサービスを通過するというものでした。

このサービスを専用のものにしたかった主な理由は以下の通りです：

1. **顧客に単一のエントリポイントを提供する。** 世界中の任意の GitLab インスタンスが `cloud.gitlab.com` などの単一エンドポイントを通じて Cloud Connector の機能を利用できることを必須プロパティとして特定しました。
1. **カスタムロジックを実行する能力を持つ。** HAProxy などの従来のロードバランサーでは実現が難しいまたは不可能な、アプリケーションレベルのレート制限などのクロスカッティングなビジネスロジックを実行できる場所を作りたいという製品からの要望がありました。

## 決定事項

私たちは「スマートルーター」に向けた小さな段階的ステップを取ることを決定しました。具体的には、Cloud Connector のトラフィックがインフラに入るための単一エンドポイントを提供する能力に注力することです。これは、専用サービスをデプロイするよりも単純な手段、具体的には `cloud.gitlab.com` でリッスンしてトラフィックを機能バックエンドに転送する簡単なルーティングタスクも実行できるロードバランシングレイヤーを導入することで達成できます。

この決定の理由は以下の通りです：

1. **実行するカスタムロジックの要件が不明確。** Cloud Connector レベルでのレート制限ロジックの適用方法と範囲についてまだ検討中です。これは [Issue 429592](https://gitlab.com/gitlab-org/gitlab/-/issues/429592) で検討されています。1 月までに単一のエントリポイントが必要であること、そしてその頃までに Cloud Connector レベルでそのようなロジックを実装する準備ができないと考えているため、現時点でウェブサービスは必要ありません。
1. **専用サービスを通じて実行するのに適さない新しいユースケースが見つかった。** [MR 131577](https://gitlab.com/gitlab-org/gitlab/-/merge_requests/131577) で GitLab Observability Backend（GOB）を Cloud Connector の顧客に提供する方法について Observability グループと協力し始めました。この議論の中で、GOB を通過する大量のトラフィックとデータ量のために、このスタックの前に別のサービスを置くことは適切なリスク/メリットのトレードオフを提供しないことが明らかになりました。代わりに、これらのような特殊なケースについては（例えば Cloud Connector ライブラリを通じて）トラフィックを分割して Cloud Connector コンポーネントを別の手段で利用可能にする予定です。

[Issue 429818](https://gitlab.com/gitlab-org/gitlab/-/issues/429818) でこの新しいエンドポイントのロードバランシングのいくつかのオプションを検討しており、[Issue 24711](https://gitlab.com/gitlab-com/gl-infra/reliability/-/issues/24711) で `Infrastructure:Foundations` チームと連携してこれをデプロイしています。

## 影響

最終的にスマートルーターを構築する計画（サービスとして、またはその他の手段で）はまだ廃棄していませんが、製品レベルおよび技術レベルの両方での不確実性に直面して、この決定を延期しました。2024 年 Q1 に進め方を再評価します。
