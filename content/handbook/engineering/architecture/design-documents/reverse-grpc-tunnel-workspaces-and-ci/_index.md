---
title: "Workspaces と CI のための GitLab VS Code フォークへのリバース gRPC トンネル"
status: ongoing
creation-date: "2024-12-24"
authors: [ "@DylanGriffith" ]
coaches: [ ]
dris: []
owning-stage: "devops::create"
participating-stages: []
toc_hide: true
upstream_path: /handbook/engineering/architecture/design-documents/reverse-grpc-tunnel-workspaces-and-ci/
upstream_sha: 4c7d94ca4f485376c886b7c2b9575091c8b7d3cf
translated_at: "2026-04-27T00:00:00Z"
translator: claude
stale: false
lastmod: "2025-04-28T10:53:04-07:00"
---

<!-- Design Documents often contain forward-looking statements -->

<!-- This renders the design document header on the detail page, so don't remove it-->

{{< engineering/design-document-header >}}


## 概要

有効な SSL 証明書とドメイン名レコードを使用して Workspace プロキシを設定・デプロイすることは非常に複雑なプロセスであり、今日 Workspaces を使用するための要件となっています。

この設計ドキュメントでは、この設定をすべて回避して KAS を経由してトンネリングするために、私たちの
[GitLab Agent (KAS)](https://gitlab.com/gitlab-org/cluster-integration/gitlab-agent)
アーキテクチャを再利用する方法を説明します。

このドキュメントはまた、追加の利点として、実行中の CI ジョブに接続された GitLab VS Code フォークを取得するためにこれがどのように使用できるかも説明します。

このドキュメントは
https://gitlab.com/gitlab-com/content-sites/handbook/-/merge_requests/10811
に関連しています。

## 提案

要約すると、展開された Workspaces にアクセスするために KAS を介して HTTP および SSH トラフィックを gRPC 経由でトンネリングすることを提案します。これは Workspace プロキシの代替オプションとなり、Workspace プロキシに比べて以下の利点があります:

1. ユーザーが K8s に Ingress/certmanager/プロキシをデプロイする必要がない
1. ユーザーがドメイン名を登録する必要がない
1. ユーザーが SSL 証明書を扱う必要がない

最初は Workspace プロキシの任意の代替として提供しますが、Workspace プロキシのサポートは引き続き維持します。これにより、他の Workspace のデプロイ方法がブロック解除されます（[以下](#related-work-for-deploying-workspaces-to-vms)を参照）。長期的には、ユーザーのフィードバックに基づいて両方のオプションを維持するかどうかを判断できます。

さらに、GitLab VS Code フォークを使用して CI ジョブをデバッグするためにこのトンネルを拡張することが容易であることがわかったため、それもこの提案に含まれています。
このトンネリングのアイデアは、現在 Runner Manager への直接ネットワークアクセスに依存しており、採用の大きなバリアである可能性が高い
[インタラクティブ Web ターミナル](https://docs.gitlab.com/ee/ci/interactive_web_terminal/)
をサポートするための代替ネットワークトランスポートを提供するかもしれません。

## 技術的な詳細

この提案の主なアイデアは、エージェントと同じコンテナで実行されている GitLab VS Code フォークへの HTTP リクエストをトンネリングするために、
[`agentk` -> `KAS`](https://gitlab.com/gitlab-org/cluster-integration/gitlab-agent/-/blob/master/doc/kas_to_agentk_connectivity.md#agentk---kas-connectivity)
`gRPC` 接続を利用することです。`agentk` は別の目的（K8s API との通信）のために構築されたため、サーバーサイドコンポーネントをできるだけ再利用しながら別のエージェントバイナリを構築する可能性があります。

HTTP トンネルはすでに
https://gitlab.com/gitlab-org/cluster-integration/gitlab-agent/-/merge_requests/2084
で実証されており、KAS の既存の HTTP トンネル動作の簡単な拡張でした。Workspace への SSH 接続を可能にするために KAS に新しい SSH トンネルを構築する必要がありますが、これを行う技術的な制限はないと予想しています。この作業の最大のアーキテクチャ部分は、私たちの推奨する SSH 認証メカニズムに基づいてユーザーを認証する SSH サーバーを KAS に構築することです。この作業は
[SSH プロキシの動作を変更する継続的な作業](https://gitlab.com/groups/gitlab-org/-/epics/13984)
と相互排他的ではありません。このネットワークトンネルは WebSocket ベースの SSH トンネリングに使用できます。

![Workspaces へのリバース gRPC トンネル](/images/handbook/engineering/architecture/design-documents/reverse-grpc-tunnel-workspaces-and-ci/workspace-grpc-tunnel.png)

このアイデアは以下のマージリクエストの POC 変更で構成された
[ビデオデモ](https://youtu.be/hw5gExP_gvA)
で実証されています:

1. https://gitlab.com/gitlab-org/gitlab/-/merge_requests/176478
1. https://gitlab.com/gitlab-org/cluster-integration/gitlab-agent/-/merge_requests/2084
1. https://gitlab.com/gitlab-org/workspaces/gitlab-workspaces-tools/-/merge_requests/19

![CI へのリバース gRPC トンネル](/images/handbook/engineering/architecture/design-documents/reverse-grpc-tunnel-workspaces-and-ci/workspace-tunnel-and-ci.png)

このアイデアは以下のマージリクエストの POC 変更で構成された
[ビデオデモ](https://www.youtube.com/watch?v=m4VaLLg_Ipk)
で実証されています:

1. https://gitlab.com/gitlab-org/cluster-integration/gitlab-agent/-/merge_requests/2084
1. https://gitlab.com/gitlab-org/workspaces/gitlab-workspaces-tools/-/merge_requests/19

### エージェントのライフサイクル

この提案では、新しいタイプのエージェントを導入します。今のところ「トンネリングエージェント」と呼びますが、開発を始めたら別の名前を思いつくかもしれません。

これらのトンネリングエージェントは、トンネリングが必要な単一のワークロードのライフサイクルにのみ存在する短命のエフェメラルエージェントです。Workspaces の場合、Workspace を作成するときにこれらのエージェントを作成し、Workspace が終了した後に期限切れ/破棄します。これらは環境変数を介して Workspace に注入された短命のエージェントトークンを持ちます。

これらのエージェントは GitLab アプリケーションの他の部分には表示されず、通常の agentk エージェントのようなエージェント設定ファイルも必要ありません。

## 背景

この提案は、Workspaces の開始に要する労力を最小限にする方法を探るために
https://gitlab.com/gitlab-org/gitlab/-/issues/505764
の一部として行われた実験的な概念実証に基づいています。

調査中に、
[KAS](https://gitlab.com/gitlab-org/cluster-integration/gitlab-agent)
がこのネットワークトンネルの構成要素のほとんどをすでに持っており、それを本番環境に持っていくための最も効率的なオプションとなることがわかりました。KAS は元々顧客の K8s クラスターにトンネリングする方法として構築されており、それは名前に反映されていますが、同じ技術は顧客のあらゆるワークロードにトンネリングすることに容易に適用できるため、このサービスの自然な拡張のように思えます。

## VM への Workspaces のデプロイに関する関連作業

この作業は Kubernetes なしで Workspaces を実行する方法についての[別の提案](https://gitlab.com/gitlab-com/content-sites/handbook/-/merge_requests/10811)を補完しますが、この提案はその両方のために使用されるネットワークトンネリング動作のみに焦点を当てています。これらのいずれかを他なしで提供してインクリメンタルなユーザー価値を提供することは可能であり、そのため私たちは別々の提案を作成しました。

実際には、このネットワークトンネリングの提案は CI を介して Workspaces をデプロイするブロックを解除するためのより小さなイテレーションとして最初に実装するのが最も簡単かもしれません。

## イテレーション計画

1. 新しい KAS トンネル
   1. GitLab トンネルエージェントモデル
   2. KAS サーバーの新しいエンドポイント
   3. 新しいエージェントバイナリ
1. Workspace の統合
   1. Workspace の作成がオプションでトンネルエージェントを作成する
   1. Workspace の作成がオプションでトンネルエージェントをインストールする
   1. Workspace の初期化がオプションでトンネルエージェントを開始する（注入された環境変数を使用して短命のトークンを使用）

## 検討した代替案

### KAS の代わりに全く新しいサービスを構築する

KAS はこの目的のために特別に構築されたわけではないため、この単一の責任を持つ新しいサービスを構築したくなります。それが合わないとわかれば、そうすることもあるかもしれません。しかし、これらの要件を満たすサービスを構築することには多くの技術的な複雑さがあるため、これは私たちの最初の選択ではありません。KAS がすでに解決したいくつかの一見分かりにくいトリッキーな詳細を以下に示します:

1. クラスタリング: エージェントとサーバー間の多対多の関係は、ユーザーの HTTP リクエストが到達しようとしているエージェントへの接続を持つ同じサーバーに到達しない可能性があることを意味します。KAS はクラスタリング（Redis を介して）によってクライアント接続を持つ正しいサーバーを見つけ、そのサーバーにリクエストを転送することでこれを解決しています。
2. 接続プーリング: gRPC ストリームはクライアント（この場合はエージェント）のみによって開かれるため、サーバーに入ってくる HTTP リクエストごとに新しいストリーム（または新しい gRPC メッセージ）を単純に開くことは不可能です。KAS はエージェントへのアイドル状態の gRPC ストリームのバッファを開いたままにしておき、HTTP リクエストにすべてのストリームが使用されているときに追加のストリームを開くことでこれを解決しています。
3. 認証: KAS はすでに GitLab と統合して特定のリソースとエージェントへのアクセスを認証・認可しています。

### 顧客のためにロードバランサー/Ingress をデプロイする

この作業の元の動機が Workspaces の設定をより簡単にする代替手段を見つけることであったため、顧客のためにロードバランサーと Ingress をプロビジョニングするツールを構築することも検討されました。これにより設定が簡略化されますが、トレードオフが伴います。それでも顧客はドメイン名を登録する必要があり、SSL 証明書の生成には複雑さが残ります。Let's Encrypt を使用して SSL 証明書を生成する際の最大の課題の 1 つは、一定期間内に生成できる証明書の数に制限があることです。KAS の Ingress を使用することで、すべての Workspaces に単一のワイルドカード証明書を使用できるため、そのような制限を回避できます。各 Workspace は `worskspacerootdomain.example.com` のサブドメインなど、一意のドメインを持ちます（例えば）。
