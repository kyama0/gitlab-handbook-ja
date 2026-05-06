---
title: "GitLab Runner 技術ビジョン"
status: proposed
creation-date: "2024-11-05"
authors: [ "@josephburnett", "@ajwalker" ]
coach:
approvers: [ ]
owning-stage: "~devops::verify"
participating-stages: [ ]
toc_hide: true
upstream_path: /handbook/engineering/architecture/design-documents/runner_technical_vision/
upstream_sha: 4b2a1defc6e0116cecb1f346d7dc1d679e674d3f
translated_at: "2026-04-27T10:00:00Z"
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
<td class="px-3 py-2 border border-gray-300"><a href="https://gitlab.com/josephburnett" class="text-blue-600 hover:underline">@josephburnett</a>, <a href="https://gitlab.com/ajwalker" class="text-blue-600 hover:underline">@ajwalker</a></td>
<td class="px-3 py-2 border border-gray-300"></td>
<td class="px-3 py-2 border border-gray-300"></td>
<td class="px-3 py-2 border border-gray-300"><span class="inline-block rounded px-2 py-0.5 text-xs font-medium bg-gray-100 text-gray-700">~devops::verify</span></td>
<td class="px-3 py-2 border border-gray-300">2024-11-05</td>
</tr>
</tbody>
</table>
</div>


このドキュメントはプロダクトや機能のロードマップではなく、技術ビジョンです。GitLab Runner の問題空間を分解し、私たちが持っているプロダクトや機能、望んでいるもの、まだ考えていないものに再組み立てできる方法を説明します。

> 「設計とは、物事をバラバラにしながらも、もう一度組み立て直せるようにすること」 - Rich Hickey
> https://www.infoq.com/presentations/Design-Composition-Performance
> (3:10)

## 目標 ##

このアーキテクチャの構成と抽象化は、GitLab Runner における長年にわたる複数の困難を解決するように設計されています。外部チームがプラグインとステップを使用して「自分たちの問題を解決」できるようにすることで、より速い機能開発が可能になります。「エグゼキューター」ではなく直交する責任の次元に沿って分解することで、テストカバレッジが高くより信頼性の高いよりシンプルなコンポーネントが生まれます。少ない抽象化を一貫して使用することで、コードベースの理解が容易になり、繰り返し作業が減ります。

既知の問題の一覧は [GitLab Runner 技術的課題](./problems.md) を参照してください。

## ビジョン ##

### 環境 ###

GitLab Runner はすべての主要なオペレーティングシステムとアーキテクチャで利用可能です。ローカルまたはリモート環境で数千のジョブを同時に実行できます。現在および将来の負荷に基づいてリモート環境をオートスケーリングできます。自己サービスプラグインメカニズムによって無制限の数の環境に適応でき、オートスケーリングがすぐに動作します。

ランナーのオペレーティングシステムとアーキテクチャがリモート環境のものと一致する必要はありません。GitLab Runner はリモート環境で実行中のジョブを発見して再接続でき、ジョブの状態を失いません。リモート環境のキャパシティの可観測性を提供し、リソース制約（不十分なキャパシティなど）に応じてバックプレッシャーを主張します。

### ジョブの構成 ###

ジョブは gRPC ペイロードとして配信されます。すべてのジョブは、ジョブ環境のエージェント（Step Runner）によって実行されるステップで構成されます。ステップはローカルまたはリモートである場合があります。ローカルステップのバージョンはコミット SHA によって決定されます。リモートステップのバージョンはリポジトリに保存されたセキュアなロックファイルによって決定されます。ジョブの結果は gRPC 経由で GitLab に返され（ログとは別に）、実行されたすべてのステップの正確なパラメーターを説明します。ステップは決定論的に書かれ、ステップの結果を使用してアーティファクトをバイト単位で再現するために使用できます。

ステップポリシーは GitLab によって提供され、GitLab Runner とジョブ環境のエージェントによって適用されます。ポリシーは利用可能なステップとそのバージョンを制約し、必要なステップを挿入し、消費されるリソース（ネットワークやディスクなど）を制約できます。

### 委譲 ###

Docker ステップのように独自の環境をローカルで作成できるステップは、通常の実行リクエストでその環境にステップを委譲できます。結果を完全にコントロールしながら、それらをどう処理するかを決定し、全体のツリーに結果を組み込むことができます。このようにして、最終的なジョブの結果は複数の環境にわたるステップ実行を捕捉します。

### 開発 ###

ジョブペイロードのコンテナステップと呼び出しパラメーターはどの環境からでもダウンロードしてローカルでデバッグ実行できます。または、ステップにブレークポイントを挿入し、gRPC 経由で接続して実行コンテキストを確認しジョブ環境と対話することで、ジョブをその場でデバッグできます。ステップは組み込みのテストフレームワークでユニットテストできます。公開および非公開カタログ、ならびにローカルリポジトリ内で公開・使用できます。ステップは非推奨または欠陥ありとしてマークでき、利用者は自動的に通知されます。

### 連合所有権 ###

チェックアウト、キャッシュ、アーティファクトなどのジョブの共通側面はステップとして実装され、GitLab Runner とそのエージェントの外に存在します。アーティファクトなどの垂直統合は単一チームが完全に所有できます。例えば、GitLab でアーティファクト API を所有するチームは、それらからアップロード・ダウンロードするステップも所有できます。GitLab Runner は環境を提供してジョブペイロードを注入しますが、そのペイロードで正確に何が実行されるかは制御しません。ジョブ実行の様々な側面の所有権は専門チームに分散されます。例えば、アーティファクトの署名やシークレット管理は他のチームが所有するステップとして実装されます。

### 統一実行 ###

GitLab Runner はジョブを実行する方法が1つあります。「エグゼキューター」のすべての側面は、カプセル化ステップ（Docker など）または環境プラグインメカニズムの pre/post フックによって実装されます。Runner は環境へのジョブのディスパッチと、ジョブペイロードを配信して結果を返すための環境への接続のみを担当します。

エグゼキューターの責任はすべて1つ以上のプラグインに完全に引き出されます。例えば、「kubernetes」プラグインはジョブ要件に応じて Pod をカスタマイズできます。組み込みサービスはもうありません — ランナーがジョブペイロードの前に付加するサービスステップがあるだけです。

既存の「スクリプト」でさえ、すべての CI 設定が統一されたステップベースの実行モデルのメリットを得られるよう、ステップペイロードとしてラップされて配信されます。

### 管理 ###

GitLab Runner は小規模、中規模、大規模なインストールのセットアップ、設定、維持のためのツールによってサポートされます。フリート管理ツールはブルーグリーンデプロイなどの業界ベストプラクティスを実装します。これらのツールは GitLab.com のすべてのランナーを運用するためだけでなく、セルフホスト型のお客様にも利用可能です。誰でも GitLab.com のランナーインフラに貢献できます。

リモートジョブ環境のデフォルトイメージは公開されています。プライベートイメージを構築するためのツールも利用可能で、すぐに機能します。GitLab Runner の効率性と信頼性のためのベストプラクティスは、共有ツールセットに実装されています。

### 可観測性 ###

すべてのジョブ、ステップ、サブステップの時間スパンは OpenTelemetry 経由でエクスポートされ、可観測性データとして利用可能です。同様に、各ジョブの実際のリソース消費（CPU、メモリなど）も利用可能です。リソース消費は時間をかけて追跡され、環境が許可する場合、リソースリクエストはジョブのニーズに自動的に調整されます。

リソースメトリクスは各ジョブの環境固有プラグインを通じて GitLab Runner によって取得されます。時間スパンはステップ結果と共に GitLab Runner に返されます。全体のキャパシティと負荷は GitLab Runner 内のオートスケーリングコンポーネントによって集計されます。このメトリクスデータは GitLab Runner から可観測性目的で GitLab の gRPC エンドポイントにプッシュされ、適切な時系列データベースにプロキシできます。負荷はオートスケーリングとルーティング目的でジョブルーターにも返されます。

### ルーティング ###

ジョブルーティングとオートスケーリングの決定はシンプルな専用ルーティングサービスで中央集権的に行われます。ジョブはアウテージやキャパシティの制限の周りにルーティングできます。作成されたジョブは、実行準備が整う前でも、ランナーオートスケーリングシステムに即座に認識されます。GitLab は優先リージョン、プロバイダー、インスタンスタイプを含むルーティングに影響するポリシーを提供できます。

ジョブはリソース要件と利用可能なキャパシティ（個々のランナーによって報告される）に応じてルーティングすることもできます。ジョブはキューイング動作に影響する相対優先度を持つこともできます。

## アーキテクチャ ##

矢印はデータの流れを示します

![Architecture Diagram](/images/handbook/engineering/architecture/design-documents/runner_technical_vision/tech-arch.drawio.png)

## リソース ##

- [ビジョンウォークスルー](https://www.youtube.com/watch?v=CTw3edURsoE)
- [RunUp と gRPC ステップ](https://youtu.be/qkXcL1ulwtY)
