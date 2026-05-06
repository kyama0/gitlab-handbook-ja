---
title: GitLab 翻訳サービス
status: proposed
creation-date: "2024-11-08"
authors: [ "@rasamhossain" ]
coaches: [ "@username" ]
dris: [ "@product-manager", "@engineering-manager" ]
owning-stage: ""
participating-stages: []
toc_hide: true
upstream_path: "/handbook/engineering/architecture/design-documents/gitlab_translation_service/"
upstream_sha: "94fe412d61c1d75e0a7a0fe4b90222476478db38"
translated_at: "2026-04-27T11:51:33Z"
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
<td class="px-3 py-2 border border-gray-300"><a href="https://gitlab.com/rasamhossain" class="text-blue-600 hover:underline">@rasamhossain</a></td>
<td class="px-3 py-2 border border-gray-300"><a href="https://gitlab.com/username" class="text-blue-600 hover:underline">@username</a></td>
<td class="px-3 py-2 border border-gray-300"><a href="https://gitlab.com/product-manager" class="text-blue-600 hover:underline">@product-manager</a>, <a href="https://gitlab.com/engineering-manager" class="text-blue-600 hover:underline">@engineering-manager</a></td>
<td class="px-3 py-2 border border-gray-300"></td>
<td class="px-3 py-2 border border-gray-300">2024-11-08</td>
</tr>
</tbody>
</table>
</div>


## 概要

このデザインドキュメントは、自動翻訳ツールと、[Argo](https://gitlab.com/groups/gitlab-com/localization/-/epics/35 "Argo as a Request Management System FY25") という[ローカライゼーションリクエスト管理システム](https://phrase.com/blog/posts/translation-management-system-how-it-works/)をミドルウェアとして使用して、GitLab リポジトリと翻訳ベンダーが利用する翻訳管理システム（TMS）向けの翻訳を提供するパイプラインのアーキテクチャ設計を説明しています。[インテグレーションツール](#proposal)は、イベント駆動型の Java アプリケーションを通じて、[GitLab](https://gitlab.com/) リポジトリ内の指定されたコンテンツの変更に対する翻訳リクエストを自動的に監視・処理するよう設計されています。

このデザインドキュメントの目的は、アプリケーション自体に完全に焦点を当てているわけではなく、むしろ GitLab インフラ内にこのアプリケーションをどのようにデプロイするかに重点を置いています。ただし、両方についてドキュメント全体を通じて説明します。

[インテグレーションツール](#proposal)（[Java](https://www.java.com/en/) アプリケーション）は、複数のプロジェクト/リポジトリからの大量イベントを処理しながらデータ整合性を維持し、競合状態を防ぐ非同期のキューベース処理システムを実装しています。特定のフォルダー内のファイル変更を検出することから、[Argo](https://gitlab.com/groups/gitlab-com/localization/-/epics/35 "Argo as a Request Management System FY25") のリクエスト管理パイプラインを通じてコンテンツをルーティングし、翻訳されたコンテンツを GitLab リポジトリにコミットするまでの翻訳ワークフロー全体をオーケストレーションします。

このツールは GitLab インフラにデプロイされます:

1. アプリケーションコードは [Localization グループ](https://gitlab.com/gitlab-com/localization) 配下の [GitLab リポジトリ](https://gitlab.com/gitlab-com/localization/argo-gitlab-integration)でホストされ、GitLab の [CI/CD パイプライン](https://gitlab.com/gitlab-com/localization/argo-gitlab-integration/-/blob/main/.gitlab-ci.yml?ref_type=heads)を使用してイメージファイルをビルドします。
2. 関連するデータベースは [Google Cloud](https://console.cloud.google.com/welcome?hl=en&project=mktg-argo-transl-svc-ee3361e7) でホストされます。
3. [Runway](https://docs.runway.gitlab.com/) を使用してデプロイし、[PSC（Private Service Connect）と Cloud SQL Auth Proxy を使用して GCP CloudSQL インスタンスに接続](https://docs.runway.gitlab.com/unmanaged_services/cloudsql/)します。

## 動機

この自動化されたローカライゼーションパイプラインの開発は、いくつかの重大な課題に対処しています:

1. **手動作業の削減**:
   - 以前はすべてのローカライゼーションプロセスに手動介入が必要で、大きなボトルネックとなっていました。
   - プロジェクトマネージャーは開発チームと翻訳ベンダーの間の調整に過度な時間を費やしていました。
   - ファイル処理とバージョン管理における人的ミスの高いリスク。
2. **運用効率**:
   - ソース文字列の検出から翻訳のデプロイまでの完全なワークフローを自動化します。
   - システム間での手動ファイル転送の必要性を排除します。
   - ソース文字列の更新からローカライズされたコンテンツの利用可能までの時間を大幅に削減します。
3. **スケーラビリティのメリット**:
   - 追加リソースの割り当てなしに増加する翻訳リクエストを処理できます。
   - 複数のリポジトリとプロジェクトを同時にサポートします。
   - 新しい言語要件とベンダーインテグレーションに容易に適応できます。
4. **品質保証**:
   - 一貫したファイル構造と命名規則を維持します。
   - 自動化されたコミットプロセスによるバージョン管理の整合性を確保します。
   - 翻訳漏れや古いコンテンツのリスクを低減します。
5. **コスト効率**:
   - 手動ローカライゼーション管理に関連する運用コストを削減します。
   - プロジェクトの遅延やリソース割り当ての問題を最小化します。
   - 合理化されたリクエスト管理を通じて翻訳ベンダーの活用を最適化します。

この自動化されたパイプラインは、ローカライゼーションワークフローの近代化における重要な前進を表し、GitLab リポジトリ全体での多言語コンテンツ管理における効率性と精度の両方を確保します。

## ゴール

### 現在のゴール

GitLab の翻訳パイプラインと翻訳ベンダーとの連携を簡素化・自動化します:

- GitLab リポジトリ内の文字列を翻訳するエンドツーエンドの自動ローカライゼーションインフラとパイプラインを導入します。
- 手動による人の介入が不要です — エンジニア、PM、その他の関係するステークホルダーは、GitLab と翻訳ベンダー間の翻訳管理にかかる時間を節約できます。
- ファイル処理の精度を高め、大規模プロジェクトを整理し、ローカライズされたコンテンツの市場投入までの時間を短縮します。

### 将来のゴール

- Argo 内からファイルを手動で選択して翻訳リクエストを作成し、スケジュールに基づいて自動実行する機能。
- ファイル形式に対する堅牢なエラー処理と自動品質チェックを作成します。
- 一般的なローカライゼーションの問題に対する自動 QA チェックをセットアップします。
- 翻訳の整合性に関する監視を確立し、自動テスト手順をセットアップします。

<a id="proposal"></a>

## 提案

このドキュメントはツールの機能に触れており、コンテキストを提供するためにその中核機能について簡単に説明しますが、主な焦点は GitLab 環境内でのデプロイアーキテクチャとインフラ実装にあることを強調することが重要です。このアプローチにより、ツールと翻訳パイプラインがより広いインフラエコシステムにどのように適合し、機能するかを明確に理解できます。

提案は 2 つのセクションに分かれています。**セクション 1:** 翻訳パイプラインの全体的なアーキテクチャフローと、ツール自体の運用メカニズムを説明します。**セクション 2:** 提案されたソリューションのデプロイアーキテクチャ、インフラ要件、および実装戦略を詳述します。

### **セクション 1** : ツール

1. **継続的な監視とトラッキング**: インテグレーションツールは GitLab リポジトリを監視し、それらのリポジトリでクローズされたマージリクエストを検出します。
2. **ソースファイルの識別**: マージされた MR の一部として en-US ソースフォルダーに変更があった場合、ツールはそれを識別し、GitLab API からコンテンツを抽出します。
3. **翻訳リクエスト**: 抽出されると、翻訳が必要として識別されたファイルの [Argo](https://gitlab.com/groups/gitlab-com/localization/-/epics/35 "Argo as a Request Management System FY25") リクエストを自動的に作成します。
4. **ベンダーパイプライン**: [Argo](https://gitlab.com/groups/gitlab-com/localization/-/epics/35 "Argo as a Request Management System FY25") は GitLab のローカライゼーション仕様に基づいた設定済みのベンダーインテグレーションを通じて翻訳ワークフローをオーケストレーションします。
5. **GitLab への翻訳済みファイルのインテグレーション**: 翻訳が完了して [Argo](https://gitlab.com/groups/gitlab-com/localization/-/epics/35 "Argo as a Request Management System FY25") で利用可能になると、翻訳済みファイルが自動的に GitLab にコミットバックされます。
6. **検証、レビュー、マージ**: ローカライゼーションエンジニアが翻訳済みファイルを含む [Argo](https://gitlab.com/groups/gitlab-com/localization/-/epics/35 "Argo as a Request Management System FY25") のコミットをレビューし、承認してリポジトリにマージバックします。

### **セクション 2:** デプロイアーキテクチャ

1. インテグレーションツールは [GitLab リポジトリ](https://gitlab.com/gitlab-com/localization/argo-gitlab-integration)にあり、GitLab の CI/CD パイプラインを使用して Docker ファイルコンテナにビルドされます。
2. その後、Docker コンテナは [Runway](https://docs.runway.gitlab.com/) でデプロイされます。
3. [Runway](https://docs.runway.gitlab.com/) は現時点で [PostgreSQL](https://www.postgresql.org/) をサポートしていないため、[Google Cloud](https://gitlabsandbox.cloud/cloud/accounts/ee3361e7-c233-4794-b423-2241db8f2505) 上のデータベースサーバーに接続します。

### **セクション 3:** ターゲットリポジトリ

現時点では、このツールは `tech-docs` と `marketing` 配下のいくつかのパブリックプロジェクトのみでの使用を想定しています。完全なリストは以下のとおりです:

#### マーケティング向け

| リポジトリリンク | リポジトリコンテンツ | ブランチ仕様 |
| ---      | ---      | ---      |
| [about-gitlab-com](https://gitlab.com/gitlab-com/marketing/digital-experience/about-gitlab-com) | [コンテンツ](https://gitlab.com/gitlab-com/marketing/digital-experience/about-gitlab-com/-/tree/main/content?ref_type=heads) | 翻訳ブランチを使用 |

#### Tech-docs 向け

最初は `tech-docs` リポジトリのフォークを使用します。これには https://gitlab.com/gitlab-com/localization/tech-docs-forked-projects にあるすべてのテストおよびプロダクションリポジトリが含まれています。

承認後、近い将来に翻訳ブランチを使用するように移行します。すべてのリポジトリのリストは以下のとおりです:

| リポジトリリンク | 現在のフォークリポジトリ |
| ---      | ---      |
| [gitlab-org/gitlab](https://gitlab.com/gitlab-org/gitlab) | [localization/tech-docs-forked-projects/prod/gitlab](https://gitlab.com/gitlab-com/localization/tech-docs-forked-projects/prod/gitlab) |
| [gitlab-org/gitlab-runner](https://gitlab.com/gitlab-org/gitlab-runner) | [localization/tech-docs-forked-projects/prod/gitlab-runner](https://gitlab.com/gitlab-com/localization/tech-docs-forked-projects/prod/gitlab-runner) |
| [gitlab-org/omnibus-gitlab](https://gitlab.com/gitlab-org/omnibus-gitlab) | [localization/tech-docs-forked-projects/prod/omnibus-gitlab](https://gitlab.com/gitlab-com/localization/tech-docs-forked-projects/prod/omnibus-gitlab) |
| [gitlab-org/omnibus-gitlab](https://gitlab.com/gitlab-org/omnibus-gitlab) | [localization/tech-docs-forked-projects/prod/omnibus-gitlab](https://gitlab.com/gitlab-com/localization/tech-docs-forked-projects/prod/omnibus-gitlab) |
| [gitlab-org/cloud-native/gitlab-operator](https://gitlab.com/gitlab-org/cloud-native/gitlab-operator) | [localization/tech-docs-forked-projects/prod/gitlab-operator](https://gitlab.com/gitlab-com/localization/tech-docs-forked-projects/prod/gitlab-operator) |
| [gitlab-org/gitlab-docs-hugo](https://gitlab.com/gitlab-org/technical-writing-group/gitlab-docs-hugo) | [localization/tech-docs-forked-projects/prod/gitlab-docs-hugo](https://gitlab.com/gitlab-com/localization/tech-docs-forked-projects/prod/gitlab-docs-hugo) |

### **セクション 4:** データベース設定

データベースには機密データは一切保存されないことを注記しておく必要があります。シークレット、トークン、または API キーはデータベースに保存されません。ターゲットリポジトリへの限定的なアクセス権を持つ[別の GitLab アカウント](https://gitlab.com/gitlab-com/localization/argo-gitlab-integration/-/issues/14 "Create a Argo GitLab Integration user")を使用します。

#### データベースに保存されるデータ

- Webhook のボディコンテンツ全体。これには GitLab MR とそれが存在するリポジトリに関するあらゆる種類のメタデータが含まれます。すべてのデータは[こちら](https://docs.gitlab.com/ee/user/project/integrations/webhook_events.html#merge-request-events)で確認できます。
- Webhook が受信・処理された日時と、その処理に関するステータス。
- MR の識別子と互いの関係（どの翻訳 MR がどのオリジナル MR に紐付いているか）。

#### データベースへの将来的な更新の可能性

- イベントに依存せずにアプリケーションが定期的なチェックを行うカデンスベースの翻訳にツールを拡張する可能性があり、それにより保存されるイベント数が増加します。
- 現在、エンジニアがターゲットリポジトリにマージする前に MR を確認しています。マージ自動化を拡張する機能をツールに追加する場合、成功/失敗のトラブルシューティングのためにより多くのログ情報を含める可能性があります。

注: *フェーズ 1*（以下参照）でデータベースに保存されたデータは、インフラが GitLab 配下の *フェーズ 2*（以下参照）に移行された時点で Spartan の環境から削除されます。

## 設計と実装の詳細

[Spartan Software, Inc.（"Spartan"）](https://gitlab.com/gitlab-com/localization/localization-team/-/issues/41 "Argo as a Request Management System FY25")は、リクエスト管理システム [Argo](https://gitlab.com/groups/gitlab-com/localization/-/epics/35 "Argo as a Request Management System FY25") と通信するための仲介ツールとして機能する Java アプリケーションの構築を支援しました。

**要約すると、このツールの機能は以下のとおりです**:

- インテグレーションツールは特定の GitLab プロジェクトまたはリポジトリを継続的に監視します。
- 監視対象プロジェクトでマージリクエストがクローズされると、インテグレーションツールは GitLab API からマージリクエストデータを受信し、en-US ソース言語ファイルのリストを識別するために抽出します。
- ツールは翻訳が必要なファイルの [Argo](https://gitlab.com/groups/gitlab-com/localization/-/epics/35 "Argo as a Request Management System FY25") リクエストを作成します。
- [Argo](https://gitlab.com/groups/gitlab-com/localization/-/epics/35 "Argo as a Request Management System FY25") は GitLab が割り当てた翻訳ベンダーとの間で翻訳を管理します。
- リクエストに関連するファイルの翻訳が完了すると、[Argo](https://gitlab.com/groups/gitlab-com/localization/-/epics/35 "Argo as a Request Management System FY25") はファイルを GitLab にコミットバックしようとします。
- エンジニアが [Argo](https://gitlab.com/groups/gitlab-com/localization/-/epics/35 "Argo as a Request Management System FY25") によって作成されたマージリクエストのコミットをレビューし、承認してファイルをリポジトリにマージします。

![tool-pipeline-diagram](/images/engineering/architecture/design-documents/gitlab_translation_service/tool-pipeline-diagram.png)*API インタラクションの全体図*

**アクションの範囲**

- ブランチおよび MR を含むリポジトリのコンテンツの読み取り
- 新しいブランチの作成と、作成した既存ブランチへの新しいコミットの追加
- 新しいコミットの作成
- リポジトリから自身または他のリポジトリへの MR の作成

前述のとおり、このツールには限定的なアクセス権を持つ[別の GitLab アカウント](https://gitlab.com/gitlab-com/localization/argo-gitlab-integration/-/issues/14 "Create a Argo GitLab Integration user")のみが関連付けられます。[ユーザー](https://gitlab.com/gitlab-argo-bot)トークンは、限定的な有効期限とともに以下の権限のみで作成されます:

- api
- read_repository
- write_repository

**[ユーザー](https://gitlab.com/gitlab-argo-bot)の認証方法**

**GitLab** の Webhook については、この[ユーザー](https://gitlab.com/gitlab-argo-bot)のアクセストークンを認証に使用します。

**Argo** については、同じインスタンスまたはファイアウォール内でホストすることで外部アクセスを防ぎ、インテグレーションを保護しています。これに加えて、現在 Argo ↔ GitLab インテグレーションの認証実装が進行中です。これには、GitLab インテグレーションと通信する際に Argo もトークンを使用するように拡張すること、および GitLab インテグレーションもそのトークンを使用するように拡張することが必要です。

### イベントのライフサイクル

アプリケーションはイベント駆動型です。GitLab または [Argo](https://gitlab.com/groups/gitlab-com/localization/-/epics/35 "Argo as a Request Management System FY25") がアプリケーションに HTTP リクエストを送信するまで、アプリケーションは休眠状態にあります。その後アプリケーションはイベントを処理し、時に非常に複雑な操作を実行します。

![high-level-architecture](/images/engineering/architecture/design-documents/gitlab_translation_service/high-level-architecture.png)*ハイレベルアーキテクチャ*

#### イベントの前処理

キューに投入する前に、大量の HTTP リクエストに対するクイックチェックと処理を行います。

1. [Argo](https://gitlab.com/groups/gitlab-com/localization/-/epics/35) または GitLab イベントはそれぞれ [`ArgoController`](#argocontroller) または `GitLabController` に受信され、認証がチェックされた後、変更なしで次のサービスに渡されます。
   - **目的**: 内部サービスとのインターフェース、およびリクエストの認証を可能にするシンプルなエンドポイント。
   - `ArgoController` について: Argo からイベントを受信します。ソース言語ファイルの翻訳が完了し Argo で準備ができると、Argo は何が完了したかを GitLab インテグレーションに通知する呼び出しを行い、[`ArgoController`](#argocontroller) を通じてそれを受信します。そこから GitLab インテグレーションは翻訳済みファイルを取得し、必要に応じてブランチと MR を作成して、そのブランチにコミットします。
2. **（GitLab イベント）** `GitLabWebhookService` はイベントを受け取り、データを変換して関連性があるかどうかを確認します。チェックで関連性があると判断された場合、キューに追加されます。
   - **目的**: 不要なイベントのほとんどをフィルタリングし、データをより管理しやすい形式に変換し、イベントを即座に処理し、キューとデータベースが不要なイベントで埋まるのを防ぎます。
3. **（Argo イベント）** `ArgoStepService` はイベントを受け取り、単純にキューに追加します。
   - **目的**: すべての Argo イベントは関連性があるため、現時点では特に用途はありませんが、将来 GitLab イベントのように前処理が必要になった場合に、便利な場所として機能します。

![queue-service-in-depth](/images/engineering/architecture/design-documents/gitlab_translation_service/queue-service-in-depth.png)*キューサービスの詳細図*

<a id="argocontroller"></a>

#### ArgoController

`ArgoController` は Argo からイベントを受信します。ソース言語ファイルの翻訳が完了し Argo で準備ができると、Argo は何が完了したかを GitLab インテグレーションに通知する呼び出しを行い、`ArgoController` を通じてそれを受信します。そこから GitLab インテグレーションは翻訳済みファイルを取得し、必要に応じてブランチと MR を作成して、そのブランチにコミットします。将来の開発では、翻訳 MR がマージされたかどうかを Argo 内で表示するためのクエリなど、Argo がさまざまな呼び出しを行う可能性があります。そのような可能性のある将来の呼び出しは `ArgoController` に追加されます。

#### イベントのキューイング

`QueueServiceImpl` は、プロジェクト固有の [FIFO（First-In-First-Out）](https://en.wikipedia.org/wiki/FIFO_(computing_and_electronics)#:~:text=In%20computing%20and%20in%20systems,the%20queue%2C%20is%20processed%20first.)順序を維持しながら並行処理を処理する、高度なイベントキューイングシステムを実装しています。このシステムは HTTP リクエスト内での初期の前処理後にイベントを処理し、データベースへの永続化とメモリ内キューイングの両方を管理します。

#### イベントの受信と保存

`QueueService` でイベントが受信されると:

- イベントデータはログ記録と再試行機能のためにデータベースに保存されます。
- [`EventRunnable`](https://docs.oracle.com/javase/8/docs/api/?java/lang/Runnable.html) オブジェクトが作成され、イベントデータとその実行関数の両方が含まれます。関数は新しいスレッドで実行され、提供されたイベントデータを使用します。
- `EventRunnable` は `GroupedExecutingThreadPool` に送信されます。

#### キューイングの実装

システムは 2 レベルのスレッドアプローチを使用しています:

- プライマリ [ThreadPoolExecutors](https://docs.oracle.com/javase/6/docs/api/java/util/concurrent/ThreadPoolExecutor.html)（`dequeuer`）: 初期の FIFO 順序ですべての受信 `EventRunnable` を受け取ります。
- セカンダリ [ThreadPoolExecutors](https://docs.oracle.com/javase/6/docs/api/java/util/concurrent/ThreadPoolExecutor.html)（`executors`）: 各エントリが特定の GitLab プロジェクトのイベントを処理するためだけに使用されるエクゼキューターの配列。

#### 並行処理ルール

- 同一プロジェクト内のイベントは [FIFO（First-In-First-Out）](https://en.wikipedia.org/wiki/FIFO_(computing_and_electronics)#:~:text=In%20computing%20and%20in%20systems,the%20queue%2C%20is%20processed%20first.)順序で同期的に処理する必要があります。
- 異なるプロジェクトは最大 5 プロジェクトまで並行して処理できます。
- 次のキューにあるイベントが（5 プロジェクト制限により）処理できないプロジェクトのものである場合、プロジェクトに関係なくその後のすべてのイベントがブロックされます。
- ブロックされたイベントより前に到着したイベントは正常に処理が継続されます。

#### イベントステータストラッキング

システムはデータベースで以下のステートを使ってイベントステータスを管理します:

- Queued: イベント受信時の初期ステート
- Running: イベントが現在処理中
- Completed: イベントが正常に処理完了
- Failed: イベント処理中にエラーが発生

#### 実行プロセス

1. イベントスレッドは `QueueService#handleEvent` メソッドで実行を開始します。
2. イベントタイプに基づいて、適切なサービスにディスパッチされます:
   - GitLab サービス
   - Argo サービス

#### 目的とメリット

- **同期処理**: 競合状態を防ぐためにプロジェクト内での FIFO 順序を維持します。
- **並行最適化**: スループット向上のために異なるプロジェクト間での並行処理を許可します。
- **リソース管理**: リソースの過剰使用と API レート制限の問題を防ぐために並行プロジェクト処理を制限します。
- **信頼性**: データベースへの永続化によりイベントのトラッキングと再試行が可能です。
- **スケーラビリティ**: ThreadPool アーキテクチャにより効率的なスレッド管理と実行が可能です。

#### マージリクエストのクローズ

`GitLabMergeRequestService#handleClosedEvent` 監視対象プロジェクトで MR がクローズされるたびに、このイベントが呼び出されます。

1. GitLab API からマージリクエストデータを取得します。
   - 目的: 必要なデータのすべてがイベントで提供されるわけではありません。また、イベントが呼び出された後に変更があった場合に最新データを取得します。
2. 翻訳が必要なファイルのリストを取得します。
   - これは翻訳 MR と MR で変更されたファイルの内容によって異なります。
3. それらのファイルの内容を取得します。
4. それらのファイルの Argo リクエストを作成します。
5. *カード*（以下の定義参照）を追加してリクエスト内のアセットを割り当てます。
   - 目的: リンクなどの追加データを提供し、スケジュールを起動準備済みまたは自動起動できる状態に整理します。
   - 例外が発生した場合、不完全にならないよう Argo リクエストを削除します。

**クイックノート:**

**Argo リクエストにはどのようなデータが含まれていますか？**

例は[こちら](https://gitlab.com/gitlab-com/content-sites/handbook/-/merge_requests/9933#note_2219051679)で確認できます。
リクエストには GitLab、接続されている TMS、およびコメントや担当者などのリクエストに取り組んだ人に関するデータが含まれます。GitLab インテグレーションから以下の情報がリクエストに含まれます:

- プロジェクト ID とパス
- マージリクエスト ID、タイトル、URL
- コンポーネント
- 翻訳される予定のファイルの名前と内容

<a id="card"></a>

#### 「カード」とは何ですか？

リクエストには単一の値を持つフィールドを含めることができます。例えば「プロジェクト ID」などです。カードはデータを保持するだけの小さなテーブル行のようなものです。各カードには単一の値を持つフィールドを含めることができますが、複数のカードをリクエストに追加できます。それらの値はリクエスト内でテーブルに集計され、各行がカード、各列が 1 つのフィールドになります。カードは GitLab インテグレーションで使用され、リクエスト閲覧者がリクエスト画面から MR に移動しやすくするために、すべての関連 URL を一覧表示します。

#### Argo から GitLab へのコミット

`GitLabMergeRequestService#handleCommitToTranslationMREvent` 対象ファイルの翻訳が完了するたびに、Argo はファイルを GitLab にコミットバックしようとします。これは 1 ファイルずつ実行されます。

1. Argo からリクエストと[プラン](https://gitlab.spartansoftwareinc.com/apidoc.html#/plans)およびその内容に関する詳細を取得します。
2. GitLab からプロジェクトに関する詳細を取得します。
3. 翻訳 YAML を取得し、この YAML に基づいてターゲットファイルの配置場所を決定します。
   - Argo 翻訳 YAML（フォルダー場所に関する情報を持つ設定ファイル）でソースファイルのファイルパスを検索し、ターゲット言語に再マッピングします。
4. ファイルとその内容を翻訳 MR にコミットします。
5. ステップが完了したことを Argo に更新します。

## デプロイフェーズ

[Argo ↔ GitLab インテグレーション](https://gitlab.com/groups/gitlab-com/localization/-/epics/38 "Argo <-> GitLab integration FY25")のデプロイは[2 つのフェーズ](https://gitlab.com/gitlab-com/localization/localization-team/-/issues/275 "Technical direction for the deployment of Argo<->GitLab integration")で処理されます。

<a id="phase1"></a>

### フェーズ 1 - Spartan

最初のフェーズでは、アプリケーションの実行とテストのプロセスを迅速化するために、[Spartan](https://gitlab.com/gitlab-com/localization/localization-team/-/issues/41) の環境にアプリケーションをデプロイします。これは最終的にアプリケーションを GitLab の環境にデプロイできるようになるまでの一時的なステップです。

アプリケーションは GitLab の CI/CD パイプラインを使用してビルドされます。アーティファクトはダウンロードされ、Spartan Software のエンジニアによってデプロイされます。

アプリケーションは AWS EC2 上で動作する Rocky Linux 8 OS にデプロイされています。Java 17 と Nginx プロキシで実行されます。Argo アプリケーションと同じインスタンスで実行されます。nginx アプリケーションは、GitLab Webhook イベントのエンドポイントのみがアプリケーションにアクセスできるように設定されています。その他のエンドポイントは localhost 経由でボックス内からのみアクセスできます。データベースは Amazon RDS でホストされており、接続が許可されているのは特定の EC2 インスタンスと VPN 上のエンジニアのみです。この設定のプロダクション版とテスト版の両方があります。つまり、データベースと EC2 インスタンスがそれぞれ 2 つありますが、プロダクションとテストは互いに通信できません。

<a id="phase2"></a>

### フェーズ 2 - GitLab

- [パイプライン](https://docs.gitlab.com/ee/ci/pipelines/):
  1. GitLab 環境の準備ができると、同じ[リポジトリ](https://gitlab.com/gitlab-com/localization/argo-gitlab-integration)のパイプラインから同じようにビルドが行われます。
  2. ただし、パイプラインは実行可能 Java（.jar）をビルドし、さらに Java 17 と Nginx をプロキシとして含む Docker コンテナイメージをビルドするために実行されます。
- [Google Cloud](https://gitlabsandbox.cloud/cloud):
  1. Argo-GitLab インテグレーションサービスのデータベース部分を設定するには、[Google Cloud Sandbox](https://gitlabsandbox.cloud/login) にデータベースサービスをインストールしてデプロイし、[Cloud SQL](https://docs.runway.gitlab.com/guides/cloud-sql/) を使用して [Runway](https://docs.runway.gitlab.com/guides/onboarding/) から接続できます。
  2. 詳細な実装内容は[こちら](https://gitlab.com/gitlab-com/gl-infra/platform/runway/team/-/issues/428)と[こちら](https://gitlab.com/gitlab-com/localization/argo-gitlab-integration/-/issues/6)に記載されています。
- [Runway](https://docs.runway.gitlab.com/):
  1. [Runway オンボーディング](https://docs.runway.gitlab.com/guides/onboarding/)（オンボーディングの詳細は[こちら](https://gitlab.com/gitlab-com/gl-infra/platform/runway/team/-/issues/428)と[こちら](https://gitlab.com/gitlab-com/localization/argo-gitlab-integration/-/issues/6)に記載）に従って、Docker イメージから [Runway](https://docs.runway.gitlab.com/guides/onboarding/) でデプロイされます。
  2. Runway サービスは [Runway の GCP プロジェクト外でプライベート IP とプライベートサービスコネクトを使用して](https://gitlab.com/gitlab-com/gl-infra/platform/runway/team/-/issues/418#note_2273832280) CloudSQL インスタンスに接続します。

## 代替ソリューション

簡単な解決策の 1 つは、Google Cloud に Linux サーバーを構築し、その上に Java アプリケーションと残りのデータベース設定をインストールすることです。これはクラウドまたは GitLab 内のどこかで行われる従来の VM ベースのデプロイと呼ぶことができます:

- Java アプリケーションとデータベースを使用した Google Cloud VM の迅速な初期セットアップ
- 最小限の初期設定が必要
- 初期開発オーバーヘッドが低い

ただし、いくつかの重大な制限があります:

- **デプロイの課題**:
  - 実行可能 JAR の再ビルドを必要とする手動デプロイプロセス
  - ゼロダウンタイムデプロイ機能の欠如
  - 自動ロールバックメカニズムがない
  - 環境間の設定ドリフトのリスク
- **運用上の懸念事項**:
  - デプロイ中のパイプライン中断
  - Argo との通信中のデータ損失の可能性
  - 限られたスケーラビリティオプション
  - より高いメンテナンスオーバーヘッド
- **監視と復旧**:
  - 限られた組み込み監視機能
  - 複雑なディザスタリカバリ手順
  - 自動フェイルオーバーオプションがない
