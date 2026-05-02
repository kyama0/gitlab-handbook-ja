---
title: 'Cells: 組織移行'
status: proposed
creation-date: "2024-05-01"
authors: [ "@dbalexandre", "@mkozono" ]
coaches: [ "@ayufan", "@sxuereb" ]
dris: [ "@sranasinghe", "@luciezhao" ]
approvers: [ "@sranasinghe", "@luciezhao" ]
owning-stage: "~devops::tenant scale"
participating-stages: ["~devops::data stores", "~devops::systems"]
toc_hide: true
upstream_path: /handbook/engineering/architecture/design-documents/organization-data-migration/
upstream_sha: a27a2f7fbaedbd4b422d73ed991c16ee9a112ca9
translated_at: "2026-04-27T00:00:00Z"
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
<td class="px-3 py-2 border border-gray-300"><a href="https://gitlab.com/dbalexandre" class="text-blue-600 hover:underline">@dbalexandre</a>, <a href="https://gitlab.com/mkozono" class="text-blue-600 hover:underline">@mkozono</a></td>
<td class="px-3 py-2 border border-gray-300"><a href="https://gitlab.com/ayufan" class="text-blue-600 hover:underline">@ayufan</a>, <a href="https://gitlab.com/sxuereb" class="text-blue-600 hover:underline">@sxuereb</a></td>
<td class="px-3 py-2 border border-gray-300"><a href="https://gitlab.com/sranasinghe" class="text-blue-600 hover:underline">@sranasinghe</a>, <a href="https://gitlab.com/luciezhao" class="text-blue-600 hover:underline">@luciezhao</a></td>
<td class="px-3 py-2 border border-gray-300"><span class="inline-block rounded px-2 py-0.5 text-xs font-medium bg-gray-100 text-gray-700">~devops::tenant scale</span></td>
<td class="px-3 py-2 border border-gray-300">2024-05-01</td>
</tr>
</tbody>
</table>
</div>


## 概要

すべてのユーザーデータは [Organization](../cells/goals.md#organizations) でラップされ、隔離を提供し、特に [Legacy Cell](../cells/goals.md#legacy-cell) から別の Cell への Organization の移動を可能にします。

[Protocells](https://gitlab.com/groups/gitlab-com/gl-infra/-/epics/1616) では、Organization に移行してから Cell に移行できるトップレベルグループで構成されるコホートを定義します。

コホートの[定義](https://gitlab.com/gitlab-com/gl-infra/mstaff/-/issues/474)が作業の最初の部分ですが、Legacy Cell から Cell に Organization を移動するためのツールも構築する必要があります。

このデザインドキュメントは、ソースから宛先に Organization を移動する移行ツールに焦点を当てています。コホートとトップレベルグループの移行についてのみ言及し、それらの実装の詳細には触れません。

## 動機

Cells は GitLab.com を水平スケールするという主要な目標を達成して初めて成功します。スケールするためには、データベーススケーリングの限界に達する前に負荷を永続的に削減するために、Legacy Cell にある既存データを新しい Cell に移行する必要があります。この移行機能は、GitLab が成長するにつれて GitLab.com サービスを将来に備えるために不可欠です。

### ゴール

1. _中断可能_: コンピューターの障害やオペレーターによる停止など、移行が中断された場合は、中断した箇所から再開できる必要があります。
1. _手放し_: 移行はバックグラウンドで実行され、チームメンバーのラップトップで移行を実行する必要がありません。
1. _コードの再利用_: Geo は一方の GitLab インスタンスから別のインスタンスへデータを複製するために構築されており、私たちも同じことをしていますが、Organization レベルで行います。
1. _データ損失なし_: ソース Cell に存在するすべてのデータが宛先 Cell で利用可能である必要があります。つまり、Object Storage、Postgres、Advanced Search、Exact Code Search、Git、Container Registry などのすべてのデータタイプを考慮する必要があります。
1. _Cell のダウンタイムなし_: Organization を移行する際、ソース Cell と宛先 Cell は転送される Organization を除いてダウンタイムを発生させてはなりません。
1. _目に見えるダウンタイムなし_: Organization はデータ移行中であることを認識すべきではありません。ゼロダウンタイムは実現できませんが、最初はある程度のダウンタイム/読み取り専用から始め、プロファイルの高い顧客を移行するにつれて継続的に改善します。
1. _大規模 Organization のサポート_: テラバイト規模のデータを適時に移行できる必要があります。つまり、ツールをデータにスケーラブルにする必要があります。
1. _並行性_: 複数の Organization を互いに影響を与えることなく同時に移行できる必要があります。
1. _Cell ローカル_: すべての移行に対する単一障害点を防ぐために、移行は宛先 Cell で実行される必要があります。
1. _最小限の使い捨て作業_: 移行ツールを複数回書き直すのではなく、イテレーションする必要があります。
1. _オブザーバビリティ_: 常に移行の状況と問題の有無を把握できる必要があります。
1. _Cell 対応_: 移行ツールは、Topology Service の情報も更新して、正しい Cell へのリクエストルーティングを開始する必要があります。
1. _ユーザーに見えるパフォーマンス影響なし_: 移行はソースまたは宛先 Cell のいずれのパフォーマンスも低下させてはなりません。
1. _ロールバック機能_: Organization をソースの宛先に戻す必要がある場合、これが可能である必要があります。
1. _ドライラン サポート_: オペレーターは実際にデータを移動することなく、検証と時間見積もりでテスト移行を実行できる必要があります。
1. _セキュリティ_: 転送中のすべてのデータは暗号化され、Cell 間の通信は適切な認証と認可を使用する必要があります。

### 非ゴール

- どの Organization がどの Cell に存在するかの決定。
- セルフホスト型インストールのサポート。
- 任意の災害復旧ツールの代替となること。

## コホート定義

[Protocells の終了基準](https://gitlab.com/groups/gitlab-com/gl-infra/-/epics/1616)を満たすために、上位 1,000 のアクティブな名前空間の相当部分を移行する必要があると予想されます。これらは[データベース時間の約 67%](https://gitlab.com/groups/gitlab-com/gl-infra/-/work_items/1616#note_2990334245) を消費しています。

コホートとは、単一のコレクションとして他の Cell に段階的に転送/移行するために選択された GitLab ルート名前空間とそのデータのセットです。

コホート命名規則: テストコホートには 0 を使用します。これは本番コホートに進む前に正常に完了する必要があるためです。後続のコホート（A、B、C など）は、順次依存関係なしに並行して実行できることを示すために文字を使用します。

| コホート ID | コホート名 | コホートサイズの目安 | 目的 | 簡略化された資格基準 | 終了基準への影響 | 詳細 |
|-----------|-------------|------------------------|---------|--------------------------------|------------------------|----|
| コホート 0 | テストコホート | 最大 100 組織 | テスト名前空間を使用して、エンドツーエンドの転送・移行プロセスをテストする | | なし | [移行計画](cohort0.md) |
| コホート A | 非アクティブな無料ユーザーのサブセット | 最大 5,000 組織 | 実際の本番環境で Protocells を確立し、移行プロセスを改善する | - 非アクティブなルート名前空間<br/><br/>- 無料プラン<br/><br/>- プライベートのみ | データベースサイズへの微小な影響 | |
| コホート B | アクティブなオプトインベータ | 最大 1,000 組織 | 実際の日常的なアクティブユーザーによる経験を積む | - オプトイン / ガイド付き<br/><br/>- アクティブなルート名前空間<br/><br/>- 無料または有料<br/><br/>- プライベートのみ | WAL、LWLock、データベースサイズへの微小な影響 | [ADR-001: 基準](decisions/001_cohort_b_criteria.md) |
| コホート C | 上位 1,000 オプトイン | 最大 300 組織 | Legacy Cell の負荷を軽減する | - オプトイン / ガイド付き<br/><br/>- データベース時間による上位 1,000 のルート名前空間<br/><br/>- プライベートのみ<br/><br/>- 前提条件: 機能同等性 | WAL 飽和とデータベースサイズを少なくとも 20% `[1]` 減少 | |
| コホート D | アクティブなロングテールオプトイン | 約 10,000 組織 | Legacy Cell の負荷を軽減する | - オプトイン / セルフサービス<br/><br/>- アクティブなルート名前空間<br/><br/>- プライベートのみ<br/><br/>- 前提条件: 機能同等性<br/><br/>- 無料または有料 | WAL 飽和とデータベースサイズを少なくとも 10% `[2]` 減少 | |

- `[1]`: 20% の目標は、上位 1,000 の名前空間が消費する[データベース時間](https://gitlab.com/groups/gitlab-com/gl-infra/-/work_items/1616#note_2990334245)の 67% の 1/3 から導出されています。
- `[2]`: 10% の目標は、ロングテールのデータベース時間 33% の 1/3 を移動する可能性から来ています。

## 移行設計ドキュメント

### データベース移行サービス（DMS）

1. [DMS ブループリント](dms-blueprint.md) - AWS DMS を使用した GCP から AWS への PostgreSQL データ移行戦略
1. [DMS と専用ツールの統合](dms-instrumentor-integration.md) - DMS を Instrumentor、AMP、テナントモデルスキーマに統合する

### コホート移行計画

1. [コホート 0: テスト移行](cohort0.md) - エンドツーエンドプロセスを検証するための 100 テスト TLG の初期移行

## 決定事項

- [ADR-001: コホート B 基準](decisions/001_cohort_b_criteria.md) - アクティブオプトインベータコホートの資格と登録基準
