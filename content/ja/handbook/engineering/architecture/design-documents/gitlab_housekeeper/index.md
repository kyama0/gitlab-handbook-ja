---
title: "GitLab Housekeeper - マージリクエストの自動化"
status: implemented
creation-date: "2023-10-18"
authors: [ "@DylanGriffith" ]
coach:
approvers: [ "@rymai", "@tigerwnz" ]
owning-stage: "~devops::tenant scale"
participating-stages: []
toc_hide: true
upstream_path: /handbook/engineering/architecture/design-documents/gitlab_housekeeper/
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
<td class="px-3 py-2 border border-gray-300"><span class="inline-block rounded px-2 py-0.5 text-xs font-medium bg-gray-100 text-gray-700">implemented</span></td>
<td class="px-3 py-2 border border-gray-300"><a href="https://gitlab.com/DylanGriffith" class="text-blue-600 hover:underline">@DylanGriffith</a></td>
<td class="px-3 py-2 border border-gray-300"></td>
<td class="px-3 py-2 border border-gray-300"><a href="https://gitlab.com/rymai" class="text-blue-600 hover:underline">@rymai</a>, <a href="https://gitlab.com/tigerwnz" class="text-blue-600 hover:underline">@tigerwnz</a></td>
<td class="px-3 py-2 border border-gray-300"><span class="inline-block rounded px-2 py-0.5 text-xs font-medium bg-gray-100 text-gray-700">~devops::tenant scale</span></td>
<td class="px-3 py-2 border border-gray-300">2023-10-18</td>
</tr>
</tbody>
</table>
</div>


## 概要

このブループリントは、<https://gitlab.com/gitlab-org/gitlab/-/merge_requests/139492> で導入され、すでに多数のマージリクエストの作成に使用されている [「GitLab Housekeeper」gem](https://gitlab.com/gitlab-org/gitlab/-/tree/master/gems/gitlab-housekeeper) の背後にある哲学を文書化するものです。

このツールは、自動化できる単調な反復作業から開発者を解放するために使用するべきです。このツールは、開発者が単純なマージリクエストを作成する必要があり、かつ事前にわかっているタスクを対象としています。

このツールは、少なくとも以下のような単調な MR の作成に役立てることができます:

1. X 日後にフィーチャーフラグを削除する
1. 何らかの自動化によって特定された未使用のインデックスを削除する
1. X 日後に `ignore_column` を削除する（カラムの名前変更・削除の多段階手順の一部）
1. シャーディングキーが欠けているテーブルに、組織・Cells 向けのシャーディングキーを追加する

## 動機

多くのケースで、開発者が完全に予測可能で自動化可能なタスクに多くの手作業を行っていることが観察されています。多くの場合、これらの手作業は既知の一定期間の待機後に行われます。そのため、通常は Issue を作成して将来のマイルストーンを設定します。その後、将来の時点で開発者がその Issue をフォローアップすることを思い出し、手動変更のための MR を開きます。

最近見られる主な例は以下の通りです:

1. フィーチャーフラグの削除: <https://gitlab.com/groups/gitlab-org/-/epics/5325>。フィーチャーフラグによる自動化の機会は多くありますが、このブループリントはフィーチャーフラグが完全にロールアウトされた後に削除することに焦点を当てています。この手順はしばしば忘れられ、技術的負債が増加します。
1. Postgres の重複または未使用インデックスの削除: <https://gitlab.com/gitlab-org/gitlab/-/issues/385701>。現在は、Issue を作成してグループに割り当て、手動で MR を開いて削除するフォローアップを行う自動化を開発中です。このブループリントではさらに一歩進めて、インデックスを特定したら自動化が MR を作成します。
1. 古くなった `ignore_column` 参照の削除: <https://docs.gitlab.com/ee/development/database/avoiding_downtime_in_migrations.html#removing-the-ignore-rule-release-m2>。現在は削除が必要な日付をコードにメモとして残し、リマインダーとして Issue を作成することが多いです。このブループリントでは、自動化がこのメモを読み取り、日付を過ぎたら削除のための MR を開くことを提案します。
1. Cells 向け組織のシャーディングキーの追加とバックフィル: <https://gitlab.com/gitlab-org/gitlab/-/merge_requests/133796>。Cells アーキテクチャは、すべてのテーブルが組織に紐付くシャーディングキーを持つことを前提としています。約 300 のテーブルについてこれをバックフィルする必要があります。この作業の多くは反復的で単調なものであり、グループがシャーディングキーの名前とバックフィル方法を特定するだけで自動化できます。そのため、シャーディングキーを推測する MR の作成を自動化でき、オーナーグループがそれらの MR を確認・修正できます。その後、カラムの追加とデータのバックフィルのための MR 作成を自動化できます。このような自動化は、合理的な期間内にこの作業を完了させるために必要です。

### ゴール

1. 開発時間を消費している共通タスクを特定して自動化する。
1. Issue の作成ではなく MR の作成に焦点を当てる。MR は望む成果であり、Issue はその成果を得るためのリマインドプロセスです。
1. 自動化が雑用をこなしている間に、私たちがやりがいのある創造的な仕事に取り組めることを知り、開発者の仕事満足度を向上させる。
1. 開発者は将来の開発者が同じ作業を繰り返すためにドキュメント化するのではなく、パターンを見つけたら自動化フレームワークに貢献することを奨励されるべきです。
1. 自動化 MR は非常に容易に識別・レビューでき、他の MR よりもはるかに迅速にマージできるべきです。自動化 MR がレビュアーに過大な負担をかける場合、メリットを上回ってしまうかもしれません。これは、単純にノイズになっている一部の自動化が無効化されることを意味するかもしれません。

## ソリューション

[GitLab Housekeeper gem](https://gitlab.com/gitlab-org/gitlab/-/tree/master/gems/gitlab-housekeeper) を使用して単調なマージリクエストの作成を自動化するべきです。

このツールの使用は、私たちの[行動バイアス](../../../../values/#operate-with-a-bias-for-action)サブバリューを反映しています。そのため、開発者は以下の代わりに新しい [keep](https://gitlab.com/gitlab-org/gitlab/-/tree/master/keeps) の貢献を優先するべきです:

1. 一定期間にわたって複数のマージリクエストを作成するプロセスの文書化
1. （Slack や Issue で）マージリクエストを作成するための開発者への定期的なリマインダーの設定

keeps の実装はドキュメントやリマインダーよりも多くの作業を必要とする場合があるため、自動化を使用することによって見込まれる時間節約を評価するために判断が必要です。`gitlab-housekeeper` gem は多くのユーティリティを備えて時間をかけて進化し、新しい keeps の貢献をより簡単にします。時間が経つにつれて、keeps の実装コストは十分に小さくなり、開発者が反復可能なタスクを数回以上行う必要がある場合はほとんどの場合これを優先するようになることが期待されます。

## 設計と実装の詳細

このアーキテクチャの主要な詳細は以下の通りです:

1. このツールの設計は `rubocop -a` と Renovate bot の組み合わせのようなものです。`rubocop -a` を拡張して、特定の期限後に物事を削除する必要があるタイミングを理解し、決定を開発者に任せる代わりに管理可能なマージリクエストの安定したストリームをレビュアーに提供します。Renovate bot のように、定期的に MR を作成して適切な担当者にレビューを割り当てようとします。
1. keeps は GitLab リポジトリに存在するため、更新すべき依存関係がなく、keeps は GitLab コードベース内のコードを使用できます。
1. スクリプトは開発者がローカルで実行することも、何らかの自動化された方法で定期的に実行することもできます。
1. keeps は変更の有無・方法を判断するために必要なあらゆるデータソース（ローカルコード、Prometheus、Postgres データベースアーカイブ、ログなど）を使用できます。
