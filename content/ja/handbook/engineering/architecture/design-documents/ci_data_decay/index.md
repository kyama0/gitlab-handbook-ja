---
title: "CI/CD データの時間的減衰"
status: ongoing
creation-date: "2021-09-10"
authors: [ "@grzesiek" ]
coach: [ "@ayufan", "@grzesiek" ]
approvers: [ "@jporter", "@cheryl.li" ]
owning-stage: "~devops::verify"
participating-stages: []
toc_hide: true
upstream_path: /handbook/engineering/architecture/design-documents/ci_data_decay/
upstream_sha: 0ee1352c26e468fa8032143d735391a793de7086
translated_at: "2026-04-26T08:00:00Z"
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
<td class="px-3 py-2 border border-gray-300"><span class="inline-block rounded px-2 py-0.5 text-xs font-medium bg-gray-100 text-gray-700">ongoing</span></td>
<td class="px-3 py-2 border border-gray-300"><a href="https://gitlab.com/grzesiek" class="text-blue-600 hover:underline">@grzesiek</a></td>
<td class="px-3 py-2 border border-gray-300"><a href="https://gitlab.com/ayufan" class="text-blue-600 hover:underline">@ayufan</a>, <a href="https://gitlab.com/grzesiek" class="text-blue-600 hover:underline">@grzesiek</a></td>
<td class="px-3 py-2 border border-gray-300"><a href="https://gitlab.com/jporter" class="text-blue-600 hover:underline">@jporter</a>, <a href="https://gitlab.com/cheryl.li" class="text-blue-600 hover:underline">@cheryl.li</a></td>
<td class="px-3 py-2 border border-gray-300"><span class="inline-block rounded px-2 py-0.5 text-xs font-medium bg-gray-100 text-gray-700">~devops::verify</span></td>
<td class="px-3 py-2 border border-gray-300">2021-09-10</td>
</tr>
</tbody>
</table>
</div>


## 概要

GitLab CI/CD は [2015 年に GitLab に統合され](https://about.gitlab.com/releases/2015/09/22/gitlab-8-0-released/)、
[重要な](https://about.gitlab.com/blog/2017/09/27/gitlab-leader-continuous-integration-forrester-wave/)
リソース集約型のコンポーネントであり、2021 年には 10 億ビルドを超えるほど急激に成長しています。

その進化にもかかわらず、CI/CD データストレージアーキテクチャは 2012 年以来ほとんど変わっておらず、
PostgreSQL に格納された膨大なデータ量によるスケーラビリティの課題が生じています。

提案している戦略は次のとおりです:

1. 大規模データをサポートし、データベースのパフォーマンス低下のリスクを軽減するために [CI/CD データテーブルのパーティショニング](pipeline_partitioning.md)を実施します。
1. パイプラインのライフサイクルの各段階で格納するデータを効率化することで[メタデータの成長率を削減](reduce_data_growth_rate.md)します。
1. アクセス頻度の低いデータをオブジェクトストレージなどの他のストレージソリューションに一貫して移動し、異なるアクセスパターンを適用するために[パイプラインデータをアーカイブ](pipeline_archival.md)します。
1. [設定可能なデータ保持ポリシーを導入](retention_policies.md)します。

このアーキテクチャの刷新により、データのアクセシビリティとコンプライアンスを維持しながら、信頼性・スケーラビリティ・パフォーマンスの向上を目指します。

## 目標

このアーキテクチャの刷新により、データのアクセシビリティとコンプライアンスを維持しながら、信頼性・スケーラビリティ・パフォーマンスの向上を目指します。

## 課題

GitLab.com のデータベースには 20 億行以上の CI/CD ビルドデータが存在しています。このデータは、GitLab.com で動作する PostgreSQL データベースに格納されている全データのかなりの部分を占めています。

このデータ量が大きなパフォーマンス上の問題・開発の課題を引き起こしており、本番インシデントとも頻繁に関連しています。

また、今後数年間で [GitLab.com で実行されるビルド数が大幅に増加する見込み](../ci_scale/)です。

## 機会

CI/CD データは[時間的減衰](../../../../company/working-groups/database-scalability/time-decay/)の影響を受けます。なぜなら、通常、数か月前のパイプラインは頻繁にアクセスされることがないか、もはや関連性がなくなっているからです。数か月以上前のパイプラインの処理へのアクセスを制限することで、このデータをプライマリデータベースから移動し、よりパフォーマンスに優れコスト効率の高い別のストレージに移行できる可能性があります。

すでに[アーカイブされたビルド](https://docs.gitlab.com/ee/administration/settings/continuous_integration.html#archive-jobs#archive-jobs)の処理を防止することが可能です。ビルドがアーカイブされると再試行できなくなりますが、処理のメタデータはすべてデータベースに保持しており、プライマリデータベースで希少なリソースを消費し続けています。

CI/CD データストレージのパフォーマンス向上とスケールアップを容易にするために、以下の 3 つのトラックに従いたいと考えています。

![パイプラインデータの時間的減衰](/images/engineering/architecture/design-documents/ci_data_decay/pipeline_data_time_decay.png)

<!-- markdownlint-disable MD029 -->

1. CI/CD ビルドキューイングデータベーステーブルのパーティショニング
2. CI/CD パイプラインデータベーステーブルのパーティショニング
3. ビルドメタデータテーブルの成長率の削減

<!-- markdownlint-enable MD029 -->

## 原則

CI/CD 時間的減衰パターンを実装するために使用する 3 つのトラックはすべて、それぞれの課題を伴います。実装を進めるにあたり、成功に向けて多くの問題を解決し、実装の詳細を考案する必要があります。

以下に、このアーキテクチャブループリントに描かれたビジョンをすべての人が理解しやすくするための基本原則をいくつか文書化しています。

### パイプラインデータの削除

古いデータやアーカイブされたデータをデータベースから削除することは魅力的に見えるかもしれませんが、これは避けるべきです。ユーザーの同意なしにユーザーデータを永久に削除することは通常望ましくありません。ただし、データをオブジェクトストレージなどの別のデータストアに移動することは可能です。

アーカイブされたデータは、たとえばコンプライアンスや監査目的で必要になることがあります。ユーザーによって永久削除が要求または承認されない限り、このデータを取得できる状態にしておきたいと考えています。

### UI でのパイプラインデータアクセス

パーティショニングによる CI/CD データの時間的減衰の実装は、ユーザーが多くのパーティションに保存されたデータにアクセスできるようにしたい場合に課題となる可能性があります。

UI でのパイプラインデータへのアクセスのシンプルさを維持したいと考えています。他のリソースからのパイプラインデータの参照方法を裏側で変更する必要がありますが、ユーザーが UI でパイプラインを見つけることが難しくなってほしくありません。

パイプライン/ビルドのリストページに「アーカイブ済み」タブを追加する必要があるかもしれませんが、誰かがマージリクエストやデプロイに関連するパイプラインステータスやビルドを表示したい場合に、追加のステップやクリックが必要にならないようにすることが可能なはずです。

また、パイプライン/ビルドのリストページの「アーカイブ済み」タブでの検索を無効にする必要があるかもしれません。

### API を通じたパイプラインデータアクセス

API を通じたパイプラインデータアクセスに必要な別個の API エンドポイントを構築する可能性の必要性を受け入れます。

新しい API では、ユーザーがパイプライン/ビルドを検索するためにデータが作成された時間範囲を指定する必要があるかもしれません。効率的に機能するためには、2 つ以上のパーティションに存在するデータへのクエリアクセスを制限することが必要かもしれません。ビルドのアーカイブポリシーの期間に等しい時間範囲をサポートすることでそれが可能になります。

ユーザーが古い API を使用してアーカイブされたパイプラインデータにアクセスできるようにすることは可能ですが、ユーザーが提供するパーティション識別子が必要になる場合があります。

### 検討された他の戦略

#### CI/CD ビルドキューイングデータベーステーブルのパーティショニング

[CI/CD スケール](../ci_scale/)ブループリントに取り組む中で、実行のために CI/CD ビルドをキューに入れる[新しいアーキテクチャ](https://gitlab.com/groups/gitlab-org/-/epics/5909#note_680407908)を導入しました。

これにより、パフォーマンスを大幅に改善できました。私たちはこの新しいソリューションを、次のイテレーションに着手する前に必要な中間メカニズムとして引き続き考えています。次のイテレーションはビルドキューイングのアーキテクチャをさらに改善するもので（PostgreSQL から完全または部分的に移行する必要があるかもしれません）。

その間に、より柔軟で信頼性の高いソリューションへの中間ステップとして別のイテレーションをリリースしたいと考えています。データベースへの影響を削減し、信頼性とデータベースのヘルスを改善するために、新しいキューイングテーブルをパーティショニングしたいと思っています。

CI/CD キューイングテーブルのパーティショニングは、ビルドのアーカイブに定義されたポリシーに従う必要はありません。代わりに、24 時間以上前に作成されたビルドをキューから削除する必要があるという長年のポリシーを活用すべきです。このビジネスルールは GitLab CI の誕生以来、製品に存在しています。

エピック: [CI/CD ビルドキューイングデータベーステーブルのパーティショニング](https://gitlab.com/groups/gitlab-org/-/epics/7438)。

このトピックの技術的な詳細については、[パイプラインデータのパーティショニング設計](pipeline_partitioning.md)を参照してください。

## イテレーション

3 つのトラックすべてを並行して作業できます:

1. [ビルドメタデータテーブルの成長率の削減](https://gitlab.com/groups/gitlab-org/-/epics/7434)。
1. [CI/CD パイプラインデータベーステーブルのパーティショニング](https://gitlab.com/groups/gitlab-org/-/epics/5417)。
1. [リストパーティショニングを使用した CI/CD キューイングテーブルのパーティショニング](https://gitlab.com/groups/gitlab-org/-/epics/7438)

## ステータス

進行中。

## タイムライン

- 2021-01-21: 親となる [CI スケーリング](../ci_scale/)ブループリントの[マージリクエスト](https://gitlab.com/gitlab-org/gitlab/-/merge_requests/52203)を作成。
- 2021-04-26: CI スケーリングブループリントが承認・マージされました。
- 2021-09-10: CI/CD データ時間的減衰ブループリントの議論を開始。
- 2022-01-07: CI/CD データ時間的減衰ブループリントが[マージ](https://gitlab.com/gitlab-org/gitlab/-/merge_requests/70052)されました。
- 2022-02-01: 新しいコンテンツとエピックへのリンクでブループリントが[更新](https://gitlab.com/gitlab-org/gitlab/-/merge_requests/79110)されました。
- 2022-02-08: パイプラインパーティショニング PoC の[マージリクエスト](https://gitlab.com/gitlab-org/gitlab/-/merge_requests/80186)を開始。
- 2022-02-23: パイプラインパーティショニング PoC が[成功](https://gitlab.com/gitlab-org/gitlab/-/merge_requests/80186#note_852704724)しました。
- 2022-03-07: 既存のテーブルをパーティション 0 として付加する方法が[見つかり、実証されました](https://gitlab.com/gitlab-org/gitlab/-/issues/353380#note_865237214)。
- 2022-03-23: パイプラインパーティショニング設計の Google ドキュメント（GitLab 内部）を開始: `https://docs.google.com/document/d/1ARdoTZDy4qLGf6Z1GIHh83-stG_ZLpqsibjKr_OXMgc`。
- 2022-03-29: パイプラインパーティショニング PoC が[完了](https://gitlab.com/gitlab-org/gitlab/-/merge_requests/80186#note_892674358)しました。
- 2022-04-15: パーティショニングされたパイプラインデータ関連付けの PoC が[リリース](https://gitlab.com/gitlab-org/gitlab/-/merge_requests/84071)されました。
- 2022-04-30: 影響を評価するために[追加ベンチマークを開始](https://gitlab.com/gitlab-org/gitlab/-/issues/361019)しました。
- 2022-06-31: [パイプラインパーティショニング設計](pipeline_partitioning.md)ドキュメントの[マージリクエスト](https://gitlab.com/gitlab-org/gitlab/-/merge_requests/87683)がマージされました。
- 2022-09-01: パーティショニングを実装するためのエンジニアリング作業を開始しました。
- 2022-11-01: 最も速く成長している CI テーブルをパーティショニング: `ci_builds_metadata`。
- 2023-06-30: 2 番目に大きいテーブルをパーティショニング: `ci_builds`。
- 2023-12-12: `ci_builds` と `ci_builds_metadata` の成長が新しいパーティションへのデータ書き込みにより停止しました。
- 2024-02-05: `ci_pipeline_variables` がパーティショニングされました。
- 2024-03-26: `ci_job_artifacts` がパーティショニングされました。
- 2024-04-26: `ci_stages` がパーティショニングされました。
- 2024-10-16: `ci_pipelines` がパーティショニングされました。
- 2025-07-21: パーティショニングがグローバルに利用可能となり、すべてのインストールで新しいパーティションが自動的に作成されるようになりました。
