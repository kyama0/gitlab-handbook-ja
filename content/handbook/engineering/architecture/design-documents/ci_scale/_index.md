---
title: "CI/CD スケーリング"
status: ongoing
creation-date: "2021-01-21"
authors: [ "@grzesiek" ]
coach: "@grzesiek"
approvers: [ "@cheryl.li", "@jreporter" ]
owning-stage: "~devops::verify"
toc_hide: true
upstream_path: /handbook/engineering/architecture/design-documents/ci_scale/
upstream_sha: 0ee1352c26e468fa8032143d735391a793de7086
translated_at: "2026-04-26T10:00:00Z"
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
<td class="px-3 py-2 border border-gray-300"><a href="https://gitlab.com/grzesiek" class="text-blue-600 hover:underline">@grzesiek</a></td>
<td class="px-3 py-2 border border-gray-300"><a href="https://gitlab.com/cheryl.li" class="text-blue-600 hover:underline">@cheryl.li</a>, <a href="https://gitlab.com/jreporter" class="text-blue-600 hover:underline">@jreporter</a></td>
<td class="px-3 py-2 border border-gray-300"><span class="inline-block rounded px-2 py-0.5 text-xs font-medium bg-gray-100 text-gray-700">~devops::verify</span></td>
<td class="px-3 py-2 border border-gray-300">2021-01-21</td>
</tr>
</tbody>
</table>
</div>


## 概要

GitLab CI/CD は GitLab の中で最もデータ集約型かつコンピューティング集約型のコンポーネントの 1 つです。2012 年の最初のリリース以来、CI/CD サブシステムは大幅に進化してきました。[2015 年 9 月に GitLab に統合され](https://about.gitlab.com/releases/2015/09/22/gitlab-8-0-released/)、[最も支持されている CI/CD ソリューションの 1 つ](https://about.gitlab.com/blog/2017/09/27/gitlab-leader-continuous-integration-forrester-wave/)となっています。

GitLab CI/CD は最初のリリース以来大きく進歩しましたが、パイプラインビルドのデータストレージの設計は 2012 年以来ほぼ変わっていません。すべてのビルドを PostgreSQL の `ci_builds` テーブルに保存しており、GitLab.com では 1 日あたり 500 万以上のビルドが作成されているため、開発速度を低下させるデータベースの限界に達しています。

2021 年 2 月 1 日、GitLab.com では作成された CI/CD ビルドが 10 億件を超えました。2022 年 2 月にはデータベースに保存された CI/CD ビルドが 20 億件に達しました。ビルドの数は指数関数的に増加し続けています。

以下のスクリーンショットは、2021 年初頭に作成した予測を示しており、かなり正確であることが証明されています。

![CI ビルドの累計と予測](/images/engineering/architecture/design-documents/ci_scale/ci_builds_cumulative_forecast.png)

## 目標

**1 日あたり 2,000 万件のビルド処理を可能にすることで将来の成長を支えます。**

## 課題

将来の成長を持続するためには、CI/CD 製品アーキテクチャの現状を更新する必要があります。

### プライマリキーを格納するキャパシティが不足していました: 完了

`ci_builds` テーブルのプライマリキーは、シーケンスで生成される整数値です。歴史的に、Rails はテーブルのプライマリキーを作成する際に[整数](https://www.postgresql.org/docs/14/datatype-numeric.html)型を使用していました。[2012 年に `ci_builds` テーブルを作成した](https://gitlab.com/gitlab-org/gitlab/-/blob/046b28312704f3131e72dcd2dbdacc5264d4aa62/db/ci/migrate/20121004165038_create_builds.rb)際にもデフォルトを使用しました。Rails 5 のリリース以来、[Rails の動作が変わり](https://github.com/rails/rails/pull/26266)、フレームワークは 8 バイトの `bigint` 型を使用するようになりましたが、`ci_builds` テーブルのプライマリキーはまだ `bigint` に移行していませんでした。

2021 年初頭、`ci_builds` テーブルのプライマリキーを格納する整数型のキャパシティが 2021 年 12 月以前に枯渇すると推定していました。実行可能な回避策または緊急計画なしにこれが発生していた場合、GitLab.com はダウンしていたでしょう。`ci_builds` は Int4 シーケンスで利用可能なプライマリキーが枯渇寸前だった多数のテーブルの 1 つに過ぎませんでした。

2021 年 10 月以前に、データベースチームはリスクのあるすべてのテーブルのプライマリキーをビッグ整数に移行することに成功しました。

詳細については[関連 Epic](https://gitlab.com/groups/gitlab-org/-/epics/5657) をご覧ください。

### 一部の CI/CD データベーステーブルが大きすぎます: 進行中

`ci_builds` テーブルには 20 億件以上の行があります。そのテーブルには数テラバイトのデータを保存しており、インデックスの合計サイズもテラバイト単位です。

このデータ量は、CI PostgreSQL データベースで発生する多数のパフォーマンス問題の一因となっています。

問題の大部分は、PostgreSQL データベースが内部的にどのように動作するか、およびデータベースが実行されているノードのリソースをどのように活用するかに関連しています。CI プライマリデータベースノードの垂直スケーリングの限界に達しており、`ci_builds` テーブルが GitLab.com が依存する CI データベース全体のパフォーマンス、安定性、スケーラビリティ、予測可能性に悪影響を与えることが頻繁にあります。

テーブルのサイズは開発速度も妨げています。開発環境では問題ないように見えるクエリが GitLab.com では機能しない場合があるためです。環境間のデータセットサイズの違いにより、最もシンプルなクエリでもパフォーマンスの予測が困難です。

チームメンバーとより広いコミュニティメンバーは Verify エリアへの貢献に苦労しています。`ci_builds` をさらに拡張する可能性を制限したためです。静的解析ツールはこのテーブルへのカラム追加を防止します。データセットのサイズとテーブルを使用して実行されるクエリの量のために、新しいクエリの追加は予測不可能です。これにより開発速度が大幅に低下し、本番環境でのインシデントにつながります。

今後数年間で指数関数的な成長が予想されています。

[Facebook の Prophet](https://facebook.github.io/prophet/) を使用した予測の 1 つによると、2024 年前半には GitLab.com で毎日 2,000 万件のビルドが作成されると予想されています。現在見られる約 500 万件と比較すると、2021 年の数値から 10 倍の成長です。

![CI ビルドの日次予測](/images/engineering/architecture/design-documents/ci_scale/ci_builds_daily_forecast.png)

**ステータス**: 2021 年 10 月時点で、ビルドオプションと変数を `ci_builds_metadata` テーブルに書き込むことで `ci_builds` テーブルの成長率を削減しました。また、[時間減衰パターン](../ci_data_decay/)を使用して最大の CI/CD データベーステーブルのパーティショニングにも取り組んでいます。

### キューイングメカニズムが大きなテーブルを使用していました: 完了

テーブルが非常に大きいため、保留中のビルドキューを構築するために使用していたメカニズム（複数のキューがあります）は非効率的でした。保留中のビルドは `ci_builds` テーブルに保存されているものの一部に過ぎませんでしたが、処理したい順序を決定するためにこの大きなデータセットで見つける必要がありました。

このメカニズムは非常に非効率で、本番環境で頻繁に問題を引き起こしていました。これは通常、CI/CD Apdex スコアの大幅な低下につながり、場合によっては本番環境の重大なパフォーマンス低下を引き起こしました。

パフォーマンスと信頼性を改善するために検討した複数の戦略がありました。[Redis キューイング](https://gitlab.com/gitlab-org/gitlab/-/issues/322972)や、[キューを構築するために使用する SQL クエリを高速化する別テーブル](https://gitlab.com/gitlab-org/gitlab/-/issues/322766)の使用を評価しました。後者を選択することにしました。

2021 年 10 月に、[GitLab.com で](https://gitlab.com/groups/gitlab-org/-/epics/5909#note_680407908)新しいビルドキューイングアーキテクチャの導入を完了しました。その後、新しいアーキテクチャを[一般利用可能](https://gitlab.com/groups/gitlab-org/-/epics/6954)にしました。

### 大量のデータ移動は困難です: 進行中

`ci_builds` テーブルには相当量のデータを保存しています。そのテーブルの一部のカラムにはシリアライズされたユーザー提供データが格納されています。カラム `ci_builds.options` には 600 ギガバイト以上のデータが保存されており、`ci_builds.yaml_variables` には 300 ギガバイト以上のデータが保存されています（2021 年 2 月時点）。

これは別の場所に確実に移動する必要のある大量のデータです。残念ながら現在、バックグラウンドマイグレーションはこの規模でデータを移行するには十分に信頼できません。カラム、テーブル、パーティション、またはデータベースシャード間でこのデータを移動することに自信を持てるメカニズムを構築する必要があります。

バックグラウンドマイグレーションを改善する取り組みはデータベースチームが担当します。

**ステータス**: 進行中。別のアーキテクチャブループリントで説明される予定のさらなる改善のリリースを計画しています。

## 提案

以下は、CI スケーリングの取り組みをどのように進めるかについて 2021 年初頭に作成した元の提案です:

> 来年以降に予想されるスケールに向けて GitLab CI/CD 製品を準備することは、多段階の取り組みです。
>
> まず、今すぐ緊急に必要なことに集中します。プライマリキーのオーバーフローリスクを修正し、データベースパーティショニングとシャーディングに取り組んでいる他のチームのブロッカーを解消する必要があります。
>
> 大きなテーブルを使用するビルドキューイングメカニズムなど、既知のボトルネックを改善し、他のチームを妨げているものを解消したいと考えています。
>
> CI/CD メトリクスの拡張は、システムのパフォーマンスをより把握し、どのような成長を予測すべきかを理解するために重要です。これにより、ボトルネックを特定し、より高度なキャパシティプランニングを実施しやすくなります。
>
> 次のステップは、CI/CD データの強い時間減衰特性をどのように活用できるかをより深く理解することです。これにより CI/CD データセットをパーティショニングし、CI/CD データベーステーブルのサイズを削減できる可能性があります。

## イテレーション

次の CI/CD スケーリングターゲットを達成するために必要な作業は、[CI/CD スケーリング](https://gitlab.com/groups/gitlab-org/-/epics/5745) Epic で追跡しています。

1. ✓ GitLab.com でプライマリキーをビッグ整数に移行する。
1. ✓ GitLab.com で新しいビルドキューイングアーキテクチャを実装する。
1. ✓ [新しいビルドキューイングアーキテクチャを一般利用可能にする](https://gitlab.com/groups/gitlab-org/-/epics/6954)。
1. [時間減衰パターンを使用して CI/CD データをパーティショニングする](../ci_data_decay/)。

## ステータス

2021 年 1 月 21 日に作成、2021 年 4 月 26 日に承認。

ステータス: 進行中。

## 担当者

提案:

<!-- vale gitlab.Spelling = NO -->

| 役割                         | 担当者 |
|------------------------------|--------|
| 著者                         | Grzegorz Bizon |
| アーキテクチャ進化コーチ     | Kamil Trzciński |
| エンジニアリングリーダー     | Cheryl Li |
| プロダクトマネージャー       | Jackie Porter |
| ドメインエキスパート / Verify | Fabio Pitino |
| ドメインエキスパート / データベース | Jose Finotto |
| ドメインエキスパート / PostgreSQL | Nikolay Samokhvalov |

DRI:

| 役割        | 担当者 |
|-------------|--------|
| リーダーシップ | Cheryl Li |
| プロダクト  | Jackie Porter |
| エンジニアリング | Grzegorz Bizon |

ドメインエキスパート:

| エリア                       | 担当者 |
|------------------------------|--------|
| ドメインエキスパート / Verify | Fabio Pitino |
| ドメインエキスパート / Verify | Marius Bobin |
| ドメインエキスパート / データベース | Jose Finotto |
| ドメインエキスパート / PostgreSQL | Nikolay Samokhvalov |

<!-- vale gitlab.Spelling = YES -->
