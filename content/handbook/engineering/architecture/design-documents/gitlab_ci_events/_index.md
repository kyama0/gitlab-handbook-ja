---
title: GitLab CI Events
status: proposed
creation-date: "2023-03-15"
authors: [ "@furkanayhan" ]
owners: [ "@fabiopitino" ]
coach: "@grzesiek"
approvers: [ "@fabiopitino", "@jreporter", "@cheryl.li" ]
owning-stage: "~devops::verify"
participating-stages: [ "~devops::package", "~devops::deploy" ]
toc_hide: true
upstream_path: /handbook/engineering/architecture/design-documents/gitlab_ci_events/
upstream_sha: 9e852ac812142230dfe1e1db31be2862cd857cfd
translated_at: "2026-04-27T00:00:00Z"
translator: claude
stale: false
lastmod: "2025-04-28T10:53:04-07:00"
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
<td class="px-3 py-2 border border-gray-300"><a href="https://gitlab.com/furkanayhan" class="text-blue-600 hover:underline">@furkanayhan</a></td>
<td class="px-3 py-2 border border-gray-300"><a href="https://gitlab.com/grzesiek" class="text-blue-600 hover:underline">@grzesiek</a></td>
<td class="px-3 py-2 border border-gray-300"><a href="https://gitlab.com/fabiopitino" class="text-blue-600 hover:underline">@fabiopitino</a>, <a href="https://gitlab.com/jreporter" class="text-blue-600 hover:underline">@jreporter</a>, <a href="https://gitlab.com/cheryl.li" class="text-blue-600 hover:underline">@cheryl.li</a></td>
<td class="px-3 py-2 border border-gray-300"><span class="inline-block rounded px-2 py-0.5 text-xs font-medium bg-gray-100 text-gray-700">~devops::verify</span></td>
<td class="px-3 py-2 border border-gray-300">2023-03-15</td>
</tr>
</tbody>
</table>
</div>


## 概要

イノベーションを解き放ち、より大きな価値を生み出すために、GitLab は DevSecOps プロセスに関連する自動化の中心となることが期待されています。私たちは GitLab をプログラミング環境に変革し、エンジニアが CI/CD パイプラインの上にさまざまなワークフローをモデル化できるようにしたいと考えています。現在、ユーザーは必要なワークフローを構築するために、Webhook やスケジュールパイプラインを使ったカスタム自動化を作成する必要があります。

この自動化をユーザーにとってより簡単にするために、GitLab の内外で何かが起きたときにいつでもパイプラインを実行できるような、強力な CI/CD イベンティングシステムを構築したいと考えています。

典型的なユースケースは、誰かが Issue を作成したとき、コメントを投稿したとき、マージリクエストのステータスを「ドラフト」から「レビュー準備完了」に変更したとき、またはグループに新しいメンバーを追加したときに CI/CD ジョブを実行することです。

この新技術を構築するために、私たちは以下を行う必要があります。

1. GitLab 内から、現在よりも高度な方法で多くの階層的イベントを発行する。
1. GitLab のイベントに反応するこの自動化を、スケールで実行することを手頃にする。
1. 自動化をより簡単に記述するための規約とライブラリのセットを提供する。

## 目標

["GitLab Events Platform"](https://gitlab.com/gitlab-org/gitlab/-/merge_requests/113700) が GitLab でのイベント発行に関する新しい抽象化を構築することを目指す一方で、「GitLab CI Events」ブループリントは以下を可能にすることを目的としています。

1. 発行されたイベントが CI パイプラインの実行につながる場合にユーザーがどのように設定するかを定義する方法を規定する。
1. GitLab.com スケールおよびそれ以上でサブスクリプションとイベントをマッチングするために必要な技術を説明する。
1. 自動化ジョブの実行コストを大幅に削減するために使用できる技術を説明する。

## 提案

### 決定事項

- [001: 階層的イベントの使用](decisions/001_hierarchical_events.md)

### 要件

受け入れられた提案は、以下の要件と特性を考慮する必要があります。

1. イベントの定義は別ファイルで行う必要があります。
    - すべてのイベントを 1 つのファイルで定義すると、そのファイルが複雑になりすぎてユーザーにとって維持困難になります。その後、ユーザーは `include` キーワードで設定を再度分割する必要が生じ、同じ解決策に行き着くことになります。
    - パイプラインの構造、ペルソナ、ジョブは、サブスクライブしているイベントとサブスクリプションの目的によって異なります。
1. 単一のサブスクリプション設定ファイルは、イベントがトリガーされたときに作成される単一のパイプラインを定義する必要があります。
    - パイプライン設定は `include` キーワードで他のファイルをインクルードできます。
    - パイプラインは多くのジョブを持ち、子パイプラインやマルチプロジェクトパイプラインをトリガーできます。
1. イベントと処理の構文は、実用的な範囲で既存の CI 設定構文を使用する必要があります。
    - ユーザーが適応しやすくなります。実装に必要な作業量が減ります。
1. イベントサブスクリプションとイベント発行はパフォーマンスが高く、スケーラブルで、ノンブロッキングである必要があります。
    - データベースからの読み取りは通常、ファイルからの読み取りより高速です。
    - CI イベントには多くのサブスクリプションが存在する可能性があります。
      これには、パイプラインを作成するための適切な YAML ファイルの評価も含まれます。
    - 主要なビジネスロジック（例: Issue の作成）は、特定の CI イベント（例: Issue 作成）へのサブスクリプションの影響を受けてはなりません。
1. CI イベントの設計は、保守しやすく拡張可能な方法で実装する必要があります。
    - `issues/create` イベントがある場合、新しいイベント（`merge_request/created`）を大きな努力なしに追加できます。
    - 多くのイベントが追加されることが予想されます。開発者がドメインイベント（例: 'issue closed'）を GitLab 定義の CI イベントとして登録することは簡単であるべきです。
    - また、長期的にユーザー定義の CI イベント（例: 'order shipped'）をサポートする機会も検討する必要があります。

### オプション

現在、技術的な提案が 5 つあります。

1. [提案 1: `.gitlab-ci.yml` ファイルを使用](proposal-1-using-the-gitlab-ci-file.md)
   以下に基づいています。
   - [GitLab CI Workflows PoC](https://gitlab.com/gitlab-org/gitlab/-/merge_requests/91244)
   - [PoC NPM CI events](https://gitlab.com/gitlab-org/gitlab/-/merge_requests/111693)
1. [提案 2: `rules` キーワードを使用](proposal-2-using-the-rules-keyword.md)
   非常に非効率な方法。
1. [提案 3: `.gitlab/ci/events` フォルダを使用](proposal-3-using-the-gitlab-ci-events-folder.md)
   すべてのイベントに対してファイル読み取りが必要。
1. [提案 4: CI 設定ファイルでイベントを作成](proposal-4-creating-events-via-ci-files.md)
   イベント定義用の別個の設定ファイル。
1. [提案 5: 統合提案](proposal-5-combined-proposal.md)
   上記すべての提案の組み合わせ。
