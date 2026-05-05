---
title: "GitLab サービス統合: AI とその先へ"
status: proposed
creation-date: "2023-04-13"
authors: [ "@andrewn" ]
coach: "@grzesiek"
toc_hide: true
upstream_path: /handbook/engineering/architecture/design-documents/gitlab_ml_experiments/
upstream_sha: 9e852ac812142230dfe1e1db31be2862cd857cfd
translated_at: "2026-04-27T10:36:33Z"
translator: claude
stale: false
---


<div class="my-3 border-l-4 border-blue-500 bg-blue-50 px-4 py-3 rounded-r text-sm text-blue-800">
このページには今後予定されている製品・機能・機能性に関する情報が含まれています。ここに示す情報は参考目的のみです。購入・計画の決定にこの情報を使用しないでください。製品・機能・機能性の開発、リリース、タイミングは変更または延期される可能性があり、GitLab Inc. の独自の判断に委ねられています。
</div>

<div class="overflow-x-auto my-4">
<table class="w-full text-sm border-collapse">
<thead>
<tr class="bg-gray-100 text-left">
<th class="px-3 py-2 border border-gray-300">Status</th>
<th class="px-3 py-2 border border-gray-300">Authors</th>
<th class="px-3 py-2 border border-gray-300">Coach</th>
<th class="px-3 py-2 border border-gray-300">DRIs</th>
<th class="px-3 py-2 border border-gray-300">Owning Stage</th>
<th class="px-3 py-2 border border-gray-300">Created</th>
</tr>
</thead>
<tbody>
<tr>
<td class="px-3 py-2 border border-gray-300"><span class="inline-block rounded px-2 py-0.5 text-xs font-medium bg-gray-100 text-gray-700">proposed</span></td>
<td class="px-3 py-2 border border-gray-300"><a href="https://gitlab.com/andrewn" class="text-blue-600 hover:underline">@andrewn</a></td>
<td class="px-3 py-2 border border-gray-300"><a href="https://gitlab.com/grzesiek" class="text-blue-600 hover:underline">@grzesiek</a></td>
<td class="px-3 py-2 border border-gray-300"></td>
<td class="px-3 py-2 border border-gray-300"></td>
<td class="px-3 py-2 border border-gray-300">2023-04-13</td>
</tr>
</tbody>
</table>
</div>


このドキュメントは、GitLab 内のチームが AI、ML、データテクノロジーを活用した新しいアプリケーション機能を迅速に構築できるようにするサービス統合の簡略化された提案です。

## エグゼクティブサマリー

このドキュメントでは、GitLab 内のチームが AI、ML、データテクノロジーを活用した新しいアプリケーション機能を迅速なペースで構築できるようにするインフラを設定するためのサービス統合アプローチを提案します。このドキュメントの範囲は、サードパーティ API ではなく、内部でホストされた機能に限定されています。現在のアプリケーションアーキテクチャは、ほとんどの GitLab アプリケーション機能を Ruby で実行しています。しかし、多くの ML/AI 実験では異なるリソースとツールが必要であり、異なる言語で実装され、必ずしも互いにうまく連携しない巨大なライブラリがあり、異なるハードウェア要件があります。これらの機能をすべて既存のインフラに追加すると、GitLab アプリケーションコンテナのサイズが急速に拡大し、起動時間の遅延、依存関係数の増加、セキュリティリスク、開発速度へのマイナス影響、異なるハードウェア要件による複雑さの増加をもたらします。代替案として、この提案では GitLab のメインワークロードをオーバーロードしないためにサービスを追加することを提案します。これらのサービスは、分離されたリソースと依存関係で独立して実行されます。サービスを追加することで、GitLab は GitLab.com の可用性とセキュリティを維持し、エンジニアが新しい ML/AI 実験を迅速にイテレーションできるようにします。

## スコープ

ML/AI 実験に関連するインフラ、プラットフォーム、その他の変更は広範です。このブループリントは以下のスコープに限定されています:

1. GitLab アプリケーション（`gitlab.com`）またはそれに関連するサブドメイン（例: `codesuggestions.gitlab.com`）へのリクエストの結果として（直接または間接的に）実行される本番ワークロード。
1. GitLab アプリケーションからのリクエストで、私たちのインフラ外のサードパーティ API へのリクエストを除外します。インフラの観点から、外部 AI/ML API リクエストは他の API（非 ML/AI）リクエストと変わらず、外部 API の呼び出しに関して既存のガイドラインに概ね従います。
1. 本番ワークロードに _直接_ 接続されていないトレーニングおよびチューニングワークロードを除外します。トレーニングとチューニングのワークロードは本番ワークロードとは異なり、独自のブループリントでカバーされます。

## 本番 ML/AI 実験ワークロードの実行

### なぜ既存のアプリケーションアーキテクチャを単純に使い続けないのか？

アプリケーションがどのようにデプロイされているかについての背景から始めましょう:

1. ほとんどの GitLab アプリケーション機能は Ruby で実装されており、2 種類の Ruby デプロイメントのいずれかで実行されます: 大まかには Rails と Sidekiq です（ただし、異なるワークロードに対してこのトラフィックをさらに分割しています）。
1. これらの Ruby ワークロードには 2 つのメインコンテナイメージ `gitlab-webservice-ee` と `gitlab-sidekiq-ee` があります。コードベースの Ruby 部分をサポートするために使用するすべてのコード、ライブラリ、バイナリ、その他のリソースはこれらのイメージに埋め込まれています。
1. GitLab.com 本番環境では、常に何千ものポッドがこれらのコンテナを実行しています。サイトのトラフィック需要の変動に応じて、1 日を通して高い頻度で起動・シャットダウンされます。
1. _ほとんどの_ 新機能の開発において、新しいサポートリソースはこれらのコンテナの一方または両方に追加する必要があります。

![current containers](https://docs.google.com/drawings/d/e/2PACX-1vQh9ToJDy6ceKVMZxSJK5kjBjgKUKdnHcigqTz-Jte1G65aV9js5XZhCC-VYNtkJ_gnoNfob4z-DCui/pub?w=692&h=286)\
[source](https://docs.google.com/drawings/d/1RiTUnsDSkTGaMqK_RfUlCd_rQ6CgSInhfQJNewIKf1M/edit)

最初のディスカッションの多くは、これらの既存コンテナへのサポートリソースの追加に焦点を当てています（[例](https://gitlab.com/gitlab-org/gitlab/-/issues/403630#note_1345192671)）。このアプローチを選択すると、新機能のイテレーション速度と GitLab.com の可用性の両面で多くのデメリットがあります。

GitLab が統合を検討している多くの AI 実験は、過去に統合されてきた他のライブラリやツールとは大きく異なります。

1. ML ツールキットは **多種多様な言語で実装** されており、それぞれが別個のランタイムを必要とします。Python、C、C++ が最も一般的ですが、使用される言語の長いテールがあります。
1. 統合を検討しているツールの数は非常に多く、**調査中のすべての機能をサポートする単一のツールは存在しません**。Tensorflow、PyTorch、Keras、Scikit-learn、Alpaca はほんの一例です。
1. **これらのライブラリは巨大です**。GPU サポートを含む Tensorflow のコンテナイメージは 3GB、PyTorch は 5GB、Keras は 300MB、Prophet は約 250MB です。
1. これらの **ライブラリの多くは互いにうまく連携しません**: 互換性のない依存関係があったり、異なるバージョンの Python や GPU ドライバーを必要としたりします。

おそらく今後数ヶ月で、GitLab は多くの異なるライブラリを使用した多くの異なる機能を実験することになるでしょう。

これらの機能をすべて既存のインフラにデプロイしようとすると、多くのデメリットがあります:

1. **GitLab アプリケーションコンテナのサイズが非常に急速に拡大します**。各新しい実験が新しいサポートライブラリのセットをもたらし、各ライブラリはコンテナ内の既存の GitLab アプリケーションと同じか、それ以上の大きさがあります。
1. **新しいワークロードの起動時間が増加し**、高トラフィック期間中に GitLab.com の可用性に影響する可能性があります。
1. コンテナ内の依存関係数が急速に増加し、エンジニアチームに **エクスプロイトや脆弱性への対応を維持する** 圧力がかかります。
1. **コンテナ内のセキュリティ攻撃対象が大幅に増加** します。各新しい依存関係とともに、これらのコンテナには、エクスプロイトで漏洩した場合にコスト高なアプリケーション全体のシークレットローテーションが必要となるシークレットが含まれています。
1. ライブラリ間の依存関係の競合を避けようとエンジニアが取り組む中で、**開発速度にマイナスの影響が出ます**。
1. さらに、GPU、TPU、CUDA バージョンなどに対応したドライバー付きの適切なハードウェアなど、**異なるハードウェア要件による余分な複雑さ** が生じる可能性があります。
1. Kubernetes ワークロードは、既存のマルチスレッド Ruby リクエスト（Rails）とメッセージ（Sidekiq）プロセスに合わせて調整されています。極めてリソース集約的なアプリケーションをこれらのワークロードに追加すると、無関係なリクエストに影響し、**CPU とメモリのリクエストが飢餓状態になり、公平性を確保するための複雑な調整が必要** となります。これを行わないと GitLab.com の可用性に影響します。

![fat containers](https://docs.google.com/drawings/d/e/2PACX-1vSW0Pm_7yZV-0JNmgfOHhQlvh6XsJYtrrzkPPhURf5sCbsQDKc0I0kCIbfios3ifD5tmcNvuchXSVUB/pub?w=686&h=364)
\
[source](https://docs.google.com/drawings/d/1aYffBzzea5QuZ-mTMteowefbV7VmsOuq2v4BqbPd6KE/edit)

### 提案: サービス統合で GitLab アプリケーションコンテナの過剰な充填を避ける

GitLab.com は数年前に Kubernetes に移行しましたが、多くの正当な理由から、GitLab.com にデプロイされるアプリケーションアーキテクチャは比較的シンプルなままです。

これらのアプリケーションを Rails や Sidekiq コンテナに直接埋め込む代わりに、メインワークロードから分離された小さな独立した Kubernetes デプロイメントとして実行します。

![use services instead of fat containers](https://docs.google.com/drawings/d/e/2PACX-1vSRrPo0TNtXG8Yqj37TO2PaND9PojGZzNRs2rcTA37-vBZm5WZlfxLDCKVJD1vYHTbGy1KY1rDYHwlg/pub?w=1008&h=564)\
[source](https://docs.google.com/drawings/d/1ZPprcSYH5Oqp8T46I0p1Hhr-GD55iREDvFWcpQq9dTQ/edit)

サービス統合アプローチは、GitLab.com にデプロイされた [GitLab Duo Suggested Reviewers 機能](https://gitlab.com/gitlab-com/gl-infra/readiness/-/merge_requests/114)ですでに使用されています。

このアプローチには多くのメリットがあります:

1. **コンポーネント化と置換可能性**: これらの AI 機能実験の一部はおそらく短命です。それらをシャットダウンできること（場合によってはセキュリティ侵害などの緊急時に迅速に）は重要です。終了された場合、メインアプリケーションワークロードに技術的負債を残す可能性が低くなります。
1. **セキュリティ分離**: 実験的なサービスは最小限のシークレットセット、または場合によってはシークレットなしで実行できます。理想的には、サービスはステートレスであり、データが渡され、処理され、PostgreSQL や他のデータソースへのアクセスなしに呼び出し元に返されます。リモートコードエクスプロイトや他のセキュリティ侵害が発生した場合、攻撃者は機密データへのアクセスが制限されます。
   1. メインまたは CI Postgres クラスターへの直接アクセスの代わりに、サービスは定義済みの内部 URL を通じて内部 GitLab API へのアクセスが提供されます。プラットフォームはこのアドレスのインストルメンテーションと監視を提供するべきです。
   1. 初期デリバリーのスコープ外ですが、将来のイテレーションでは、プラットフォームが内部 API に対する自動認証を容易にする可能性があります。例えば、内部 API 呼び出しへの短命な API トークンの管理と注入、または OIDC などを通じて。
1. **リソース分離**: リソース集約的なワークロードは個別のコンテナに分離されます。OOM 失敗は実験の範囲外のリクエストに影響しません。CPU 飽和は無関係なリクエストを遅延させません。
1. **依存関係の分離**: 異なる AI ライブラリは競合する依存関係を持つことがあります。それらを Kubernetes 上の別個のサービスとして実行する場合、これは問題にはなりません。
1. **コンテナサイズ**: メインアプリケーションコンテナのサイズは大幅には増加せず、アプリケーションに負担をかけません。
1. **Distribution チームのボトルネック**: メインアプリケーションコンテナに多くの異なるライブラリを含めることへの要求が増加する中で、Distribution チームがボトルネックになることを回避します。
1. **ワークロードのより強いオーナーシップ**: チームはそのワークロードが分離して実行されているため、ワークロードがどのように実行されているかをより良く理解できます。

ただし、いくつかの未解決の疑問があります:

1. **可用性要件**: 実験的なサービスはメインアプリケーションと同じ可用性要件（およびアラート要件）を持つべきでしょうか？
1. **オンコール**: チームはサービスのポガーアラートを処理する責任を負うべきでしょうか？
1. **非 SaaS GitLab インスタンスのサポート**: 当初はすべての実験が GitLab.com を対象としますが、最終的には他のインスタンスのサポート方法を検討する必要があるかもしれません。
   1. サービスには 3 つの可能なモードがあります:
      1. `M1`: GitLab.com のみ: GitLab.com のみがサービスをサポートします。
      1. `M2`: セルフマネージドインスタンスおよびインスタンスホストで使用するための SaaS ホスト: 単一の SaaS ホストサービスがセルフマネージドインスタンスと GitLab.com をサポートします。これは [GitLab Plus 提案](https://gitlab.com/groups/gitlab-org/-/epics/308) に類似しています。
      1. `M3`: インスタンスホスト: 各インスタンスがサービスのコピーを持ちます。GitLab.com は GitLab.com 用のコピーを持ちます。セルフマネージドインスタンスはそのコピーのサービスをホストします。これは今日のコンテナレジストリや Gitaly に類似しています。
   1. 当初、ほとんどの実験はおそらくオプション 1 になりますが、成熟するにつれて 2 または 3 に昇格される可能性があります。
1. **プロモーションプロセス**: ML/AI の実験的な機能は成熟するにつれて非実験的なステータスに昇格させる必要があります。このためのプロセスを確立する必要があります。

#### ML/AI サービス構築のための提案ガイドライン

1. 実験のサポートに必要な大きな ML/AI ライブラリをメインアプリケーションに追加しないようにする。
1. 個々の ML/AI 実験をサポートするプラットフォームを作成する。
1. サポートサービスをステートレスにすることを奨励する（ML トレーニング中に生成されたデプロイ済みモデルや他のリソースを除く）。
1. ML/AI 実験サポートサービスは、メイン PostgreSQL、CI PostgreSQL、メインアプリケーション Redis インスタンスを含む（ただしこれらに限定されない）メインアプリケーションデータストアにアクセスしてはなりません。
1. メインアプリケーションにおいて、サービスのクライアントコードは機能の細かいコントロールのためにフィーチャーフラグトグルの後ろに配置するべきです。

#### 技術的詳細

いくつかの点を詳しく説明します:

##### トラフィックアクセス

1. 理想的には、これらのサービスはインターネットトラフィックに外部公開されるべきではありません: 既存の Rails と Sidekiq ワークロードへの内部のみのルーティングが行われるべきです。
   1. `M2`（「セルフマネージドインスタンスとインスタンスホストで使用するための SaaS ホスト」）で実行することを意図するサービスについては、十分なセキュリティレビューが実施されたら、パブリックエンドポイントにサービスを移行することを期待します。

##### プラットフォーム要件

実験を素早くデプロイして管理するために、ステージグループチームに最低限実行可能なプラットフォームを提供する必要があります。このプラットフォームの技術的実装の詳細はこのブループリントのスコープ外で、独自のブループリックが必要です。

ただし、サービス統合はプラットフォームが満たす必要がある特定の必要な要件とオプションの要件を確立します。

###### 使いやすさ、オーナーシップ要件

| ID | 必須 | 詳細 | エピック/Issue | 完了？ |
|---|---|---|---|---|
| `R100` | 必須    | プラットフォームは使いやすくあるべきです: [GitLab 本番対応承認済み](../../../infrastructure-platforms/production/readiness.md)のデフォルト設定を持つ Heroku のようなもの。| [Runway to [BETA] : Increased Adoption and Self Service](https://gitlab.com/groups/gitlab-com/gl-infra/-/epics/1115) | **{dotted-circle}** No |
| `R110` | 必須    | インフラ主導のオンボーディングプロセスを除き、サービスはステージグループチームが所有・デプロイ・管理します。つまり、サービスは「You Build It, You Run It」のオーナーシップモデルに従います。| [[Paused] Discussion: Tiered Support Model for Runway](https://gitlab.com/gitlab-com/gl-infra/platform/runway/team/-/issues/97) | **{dotted-circle}** No |
| `R120` | 必須    | プログラミング言語に依存しない: サービスへの要件なし。サービスはコンテナイメージとしてパッケージ化するべきです。| [Runway to [BETA] : Increased Adoption and Self Service](https://gitlab.com/groups/gitlab-com/gl-infra/-/epics/1115) | **{dotted-circle}** No |
| `R130` | 推奨 | 各サービスは GitLab.com の [Service Maturity Model](../../../infrastructure-platforms/service-maturity-model/) に対して評価するべきです。| [Discussion: Introduce an 'Infrastructure Well-Architected Service Framework'](https://gitlab.com/gitlab-com/gl-infra/scalability/-/issues/2537) | **{dotted-circle}** No |
| `R140` | 推奨 | プラットフォームを使用するサービスには迅速な本番対応プロセスがあります。<ol><li>本番対応要件はサービス成熟度によってグレード付けされます: 低トラフィック、低成熟度の実験的サービスは、より成熟したサービスよりも低い要件閾値を持ちます。</li><li>デフォルトでは、プラットフォームは最低のサービス成熟度レベルの本番対応レビューに合格するデフォルト設定をサービスに提供するべきです。</li><li>導入時点では、最低成熟度のサービスは、自動的に検証された特定の要件を満たす場合、本番対応なしでデプロイできます。これにより、インフラのゲートキーピングが実験的サービス提供のブロッカーにならなくなります。</li></ol> | | |

###### 可観測性要件

| ID | 必須 | 詳細 | エピック/Issue | 完了？ |
|---|---|---|---|---|
| `R200` | 必須 | プラットフォームはすぐに使えるサービスの SLI を提供しなければなりません。<ol><li>サービスが内部メトリクスを公開することは推奨されますが、必須ではありません。プラットフォームはロードバランサーからの監視を提供します。これは実験へのバリアを取り除くことでデプロイを迅速化するためです。</li><li>内部メトリクスのスクレイプエンドポイントを提供するサービスについては、プラットフォームはそれらを収集できるように設定可能でなければなりません。</li><li>プラットフォームはすべてのサービスに対して一般的なロードバランサーレベルの SLI を提供しなければなりません。サービスオーナーは、内部アプリケーションメトリクス、プラットフォーム提供の外部 SLI、またはその両方の組み合わせから SLI を構築するよう選択できなければなりません。</li></ol> | [Observability: Default Metrics](https://gitlab.com/gitlab-com/gl-infra/platform/runway/team/-/issues/72), [Observability: Custom Metrics](https://gitlab.com/gitlab-com/gl-infra/platform/runway/team/-/issues/67) | **{check-circle}** Yes |
| `R210` | 必須 | 可観測性ダッシュボード、ルール、アラート（ルーティングごと）はマニフェストから生成されなければなりません。| [Observability: Metrics Catalog](https://gitlab.com/gitlab-com/gl-infra/platform/runway/team/-/issues/74) | **{check-circle}** Yes |
| `R220` | 必須 | 標準化されたロギングインフラ。<ol><li>サービスから発行されるすべてのロギングは構造化 JSON でなければならないことを義務付ける。テキストログは許可されますが推奨されません。</li><li>可観測性のための共通 SDK 構築の詳細は <a href="#common-service-libraries">Common Service Libraries</a> を参照してください。</li></ol>  | [Observability: Logs in Elasticsearch for model-gateway](https://gitlab.com/gitlab-com/gl-infra/platform/runway/team/-/issues/75), [Observability: Runway logs available to users](https://gitlab.com/gitlab-com/gl-infra/platform/runway/team/-/issues/84) | |

###### デプロイメント要件

| ID | 必須 | 詳細 | エピック/Issue | 完了？ |
|---|---|---|---|---|
| `R300` | 必須 | CI/CD にシークレットを保存しない。<ol><li>クラウドプロバイダーリソースとの認証はプラットフォームの一部として管理される OIDC のみで排他的に行うべきです。</li><li>シークレットは環境のインフラ提供の Hashicorp Vault に保存され、ファイルまたは環境変数を通じてアプリケーションに渡すべきです。</li><li>サービスアカウントトークンの生成と管理は、手動操作なしに宣言的に行うべきです。</li></ul> | [Secrets Management](https://gitlab.com/gitlab-com/gl-infra/platform/runway/team/-/issues/52) | **{dotted-circle}** No |
| `R310` | 必須 | ステージングと本番など、複数の環境をサポートするべきです。|  | **{check-circle}** Yes |
| `R320` | 必須 | プラットフォームはコスト効率が高くあるべきです。Kubernetes クラスターは複数のサービスとチームをサポートするべきです。|  |  |
| `R330` | 推奨 | 段階的ロールアウト、ロールバック、ブルーグリーンデプロイメント。|  |  |
| `R340` | 必須 | サービスは互いに分離されているべきです。|  |  |
| `R350` | 推奨 | サービスはノード特性要件（例: GPU）を指定できる能力を持つべきです。|  |  |
| `R360` | 必須 | 開発者はデプロイするために Helm、Kubernetes、Prometheus の知識を必要としないべきです。必要なすべての値は、Kubernetes マニフェスト、Prometheus ルールなどを生成する前に、プロジェクトホストのマニフェストで設定・検証されます。|  |  |
| `R370` |  | 当初、サービスは同期型のみにするべきです - REST または GRPC リクエストを使用します。<ol><li>ただし、長時間実行される HTTP(s) リクエスト（ロングポーリングや Websocket リクエストなど）は除外されません。</li></ol> |  |  |
| `R390` |  | 各サービスは、デプロイメントマニフェストをリポジトリに保存した独自の GitLab リポジトリでホストされます。<ol><li>対応する GitLab リポジトリの CI パイプラインから開始される継続的デプロイメント。</li></ol>  | | |

##### セキュリティ要件

| ID | 必須 | 詳細 | エピック/Issue | 完了？ |
|---|---|---|---|---|
| `R400` |  | 独自のステートフルストレージ（例: カスタムデプロイの Postgres インスタンス）を利用するプラットフォーム上にデプロイされたステートフルサービスは、アプリケーションセキュリティトークン、クラウドプロバイダーサービスキー、その他の長命シークレットをステートフルストアに保存してはなりません。|  |  |
| `R410` |  | 長命な共有シークレットは推奨されず、アカウンティングと監視を可能にするために、サービスマニフェストにそのように参照するべきです。|  |  |
| `R420` |  | 長命な共有シークレットを使用するサービスは、ダウンタイムなしにシークレットローテーションができるようにするべきです。<ol><li>ローテーション中、古いシークレットと新しいシークレットの両方の世代が認証を通過し、新しいシークレットの段階的なロールアウトを可能にするべきです。</li></ol> |  |  |

##### Common Service Libraries

| ID | 必須 | 詳細 | エピック/Issue | 完了？ |
|---|---|---|---|---|
| `R500` | 必須 | 実験的なサービスは可観測性、コンテキスト、相関、FIPS 検証などのために [LabKit](https://gitlab.com/gitlab-org/labkit)（Go サービス向け）または [LabKit-Ruby](https://gitlab.com/gitlab-org/ruby/gems/labkit-ruby) を採用・使用することが必要です。<ol><li>現在 LabKit-Python ライブラリは存在しませんが、いくつかの実験は Python で実行されるため、Python で可観測性、コンテキスト、相関サービスを提供するライブラリの構築が必要となります。</li></ol> | [Scalability: Labkit as the in-application platform toolkit](https://gitlab.com/gitlab-com/gl-infra/scalability/-/issues/2793) | |
