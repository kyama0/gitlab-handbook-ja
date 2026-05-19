---
title: "GitLab Events Platform"
status: proposed
creation-date: "2023-03-06"
authors: [ "@grzesiek", "@fabiopitino" ]
coach: "@ayufan"
approvers: [ "@jreporter", "@sgoldstein" ]
owning-stage: "~devops::ops section"
toc_hide: true
upstream_path: /handbook/engineering/architecture/design-documents/gitlab_events_platform/
upstream_sha: 9e852ac812142230dfe1e1db31be2862cd857cfd
translated_at: "2026-04-27T10:36:33Z"
translator: claude
stale: false
lastmod: "2025-04-28T10:53:04-07:00"
---


{{< engineering/design-document-header >}}


## 概要

GitLab のコードベースは、2011 年の[最初のコミット](https://gitlab.com/gitlab-org/gitlab/-/commit/93efff945215)以来大きく成長しました。何百万ものユーザーに採用された多くの機能を実装してきました。さらなる機能への需要がある一方で、パラダイムシフトの機会もあります。特定のユースケースをカバーする機能を提供する代わりに、ユーザーが必要に応じて自動化で拡張できるプラットフォームの構築を始めることができます。堅牢なイベントシステムを使用して外部および内部ワークフローと統合できる、柔軟でジェネリックな DevSecOps ソリューションを構築できます。

この設計ドキュメントでは、以下を可能にするために追加の抽象化レイヤーをいくつか加えることを提案します:

1. イベントの起源とスキーマをエンコードするイベント階層の概念を設計する。
1. Publishers を使用してアプリケーションコード内からイベントを発行する。
1. Gateways を使用して外部ソースからのイベントを傍受・変換する。
1. Subscribers を使用して内部・外部イベントをサブスクライブする。
1. キューイングと処理の実装詳細を抽象化の背後に隠蔽する。

これにより、GitLab を汎用の自動化ツールに変換できるだけでなく、既存のイベント系機能の複雑さも軽減できます:

1. [Webhooks](https://docs.gitlab.com/ee/user/project/integrations/webhook_events.html)
1. [監査イベント](https://docs.gitlab.com/ee/administration/audit_event_reports.html)
1. [GitLab CI イベント](https://about.gitlab.com/blog/2022/08/03/gitlab-ci-event-workflows/)
1. [パッケージイベント](https://gitlab.com/groups/gitlab-org/-/epics/9677)
1. [GraphQL イベント](https://gitlab.com/gitlab-org/gitlab/-/blob/dabf4783f5d758f69d947f5ff2391b4b1fb5f18a/app/graphql/graphql_triggers.rb)

## ゴール

内部および外部で発行されるイベントをより適切に管理するために必要な抽象化とその実装を構築します。

## 課題

1. ユーザーがサブスクライバーとパブリッシャーを構築できるソリューションが存在しない。
1. Ruby コード外でサブスクリプションを管理するソリューションが存在しない。
1. GitLab 内に共通の抽象化を使用しない多くのイベント系機能が存在する。
1. 現在のイベントソリューション `Gitlab::EventStore` は Sidekiq と密結合している。
1. 外部から発行されたイベントをサブスクライブするための統一された堅牢な方法が存在しない。
1. イベントに関連するペイロードは、スキーマの定義方法と同様に大きく異なる。
1. すべてのイベントが強く型付けされているわけではなく、その階層を管理するソリューションが存在しない。
1. イベントはバージョン管理されておらず、スキーマコントラクトを破壊しやすい。
1. イベントに基づいた機能をより多く構築したいが、抽象化が欠如しているため、実装から得られる価値が限られる。

## 提案

### Publishers

Rails コードベース内からイベントを発行することは、提案するアーキテクチャの重要な要素です。イベントは、理想的には Ruby クラスを使用して強く型付けされるべきです。

例えば、以下の方法でイベントを発行できます:

```ruby
include Gitlab::Events::Emittable

emit Gitlab::Events::Package::Published.new(package)
```

- イベントの発行はノンブロッキングで、ほぼゼロコストの操作であるべきです。
- イベントの発行は、その起源とアイデンティティを考慮に入れるべきです。
- イベントの発行は、系譜に基づいてペイロードを構築するべきです。
- `emit` は `GitLab::EventStore` で使用されるメカニズムの糖衣構文にできます。

### Subscribers

Subscribers により、アプリケーション開発者は内部または外部で発行された任意のイベントをサブスクライブできます。また、Subscribers はアプリケーション開発者が、例えばプロジェクトイベントをサブスクライブしてパイプラインをトリガーするために、ユーザーが使用できるサブスクリプションメカニズムを構築できるようにもします。

Subscribers がサブスクライブするイベントはコントラクトとなるため、バージョン管理するか、前方・後方互換性のあるソリューション（Protobuf など）を使用するべきです。

### Gateways

Gateways は内部および外部のイベントを傍受し、型を変更し、系譜を補強し、ペイロードを変換するために使用できます。

Gateways は例えば、Cloud Events を傍受するシンクエンドポイントを実装し、内部で使用される Ruby クラスにラップして、開発者・ユーザーがサブスクライブできるようにするために使用できます。

また、Gateways を使用して実装されたジェネリックなイベントバスを通じて、[クロスCell](https://docs.gitlab.com/ee/architecture/blueprints/cells/index.html) 通信を実装できるかもしれません。

複数のインスタンスを含む複雑なデプロイメントの調整方法を改善するためのクロスインスタンス通信に関するアイデアもあります。

### 処理

現在、イベントをキューイングするために PostgreSQL または Sidekiq を使用しています。どちらのメカニズムも互換的に使用されており、既存のソリューションと密結合しています。

キューイングと処理の抽象化を構築する主な目的は、必要に応じて異なるキューイングバックエンドに切り替えられるようにすることです。例えば、一部のイベントを Google Pub/Sub にキューイングし、専用の Gateway を経由してアプリケーションに戻すことができます。

### 可観測性

イベント、パブリッシャー、サブスクライバー間の相互作用を理解するために、OpenTelemetry を経由した適切なインストルメンテーションを提供する必要があるかもしれません。これにより、分散トレーシングバックエンドを使用してこれらの相互作用を視覚化できるようになります。
