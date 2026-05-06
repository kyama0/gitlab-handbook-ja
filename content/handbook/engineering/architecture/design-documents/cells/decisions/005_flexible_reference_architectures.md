---
owning-stage: "~devops::data stores" # because Tenant Scale is under this
title: 'Cells ADR 005: 柔軟なリファレンスアーキテクチャ'
toc_hide: true
upstream_path: /handbook/engineering/architecture/design-documents/cells/decisions/005_flexible_reference_architectures/
upstream_sha: b4eeb07f0d5f46e2fc5f8572be1a2547261aed89
translated_at: "2026-04-26T03:00:00Z"
translator: claude
stale: false
---

## 用語集

1. **Reference Architecture**: GitLab インスタンスをデプロイするためのリファレンスアーキテクチャ。Test Platforms チームによって定義され、[Reference Architectures Documentation](https://docs.gitlab.com/ee/administration/reference_architectures/index.html) に文書化されています。
1. **Cell Architecture**: イテレーティブにバージョン管理されるアーキテクチャ定義であり、すべての cell に共通です。
1. **Cell Sub-Archetype**: Cell フリート全体にデプロイされる、限られたアーキテクチャ差分のセット。Tenant Model と provisioner である Instrumentor で Overlays として実装されています。
1. **Overlays**: リファレンスアーキテクチャを一貫した決定的な方法で調整するための仕組み。たとえば、ディスクパフォーマンスを向上させたり、Postgres の容量を増やしたりするために、いくつかの Overlays が存在します。
1. **Tamland**: GitLab.com、GitLab Dedicated、Cells を含む GitLab SaaS インスタンス全体にデプロイされるキャパシティ予測ツール。

## 背景

Cells Fastboot のオフサイトでは、Cells に関連した [Reference Architectures](https://docs.gitlab.com/ee/administration/reference_architectures/index.html) の使用について議論されました:

1. 既存の [Reference Architectures](https://docs.gitlab.com/ee/administration/reference_architectures/index.html) を使用するべきか
1. 新しい [Reference Architectures](https://docs.gitlab.com/ee/administration/reference_architectures/index.html) を定義するべきか

この議論からの主要な点は次のとおりです:

1. [GitLab Reference Architecture のドキュメント](https://docs.gitlab.com/ee/administration/reference_architectures/index.html) には、リファレンスアーキテクチャは環境を定義するための **出発点** であり、環境の不変の定義ではないと明記されています。
1. 「DevSecOps プラットフォームの全機能を備えた単一のアプリケーション」である GitLab アプリケーションは、非常に幅広いユースケースをカバーしており、負荷はインスタンスのアクティブユーザー数だけで決まるのではなく、ユーザーがインスタンス上で生成する具体的なワークロードに依存します。
1. Cell の負荷を平準化するために、各 Cell に多様な organization を組み合わせる取り組みが行われます。
   これには、Premium と Free の organization、相補的なタイムゾーンに基づく organization（一日を通じてバランスの取れたワークロードを実現するため）、ユーザーワークロード（たとえば、データベースや Gitaly を多用するユーザーを Cell 内でバランスさせる）などが含まれる可能性があります。
   しかし、最適な organization のバランス調整を行ってさえ、Cells はホットスポットを生む可能性が高く、それぞれの Cell をワークロード要件に応じて水平・垂直にスケールして対処する必要があります。
1. **Dedicated Tenant インスタンスはすでにキャパシティプランニングのために Tamland をデプロイしています**。ただし、キャパシティプランニングのプロセスはまだ完全には確立されていません。
   このプロセスは Cells でも活用できる可能性があります。
1. SaaS スペクトルの遠端における説明用ケースとして、GitLab.com は次のようになっています:
   1. リファレンスアーキテクチャを使用していません。
   1. ワークロードとユーザーアクティビティの変化に応じて、半動的かつ時間とともにスケールされています。

### Reference Architecture にどんな変更が加えられるか？

Reference Architecture を変更するためには、いくつかの異なる種類の変更を加えることができます。

1. **形状の変更**: GitLab.com にのみ必要なコンポーネント（例: SaaS 固有のロギングおよびアナリティクスコンポーネント）の追加が含まれる場合があります。
   GitLab.com の製品オファリングと self-managed のオファリングの違いが、アーキテクチャの変更を必要とする可能性があります。
   これらの変更は、本ドキュメントのスコープ外です。
1. **ストレージ容量のスケーリング**: 長期的には、GitLab インスタンスのストレージ要件は CPU、メモリ、その他のリソース要件よりも安定して増加していきます。
   これは、tenant/cell が追加のストレージ容量に対応できるよう成長する必要があることを意味します。
1. **垂直スケーリング**: Reference Architectures はマシン/インスタンスタイプを指定します。
   これらは、より大きく高性能なタイプ、または特定のワークロードにより合った安価で小さなタイプに調整できます。
1. **水平スケーリング**: Reference Architectures は、各サービスを動かすノード/Pod/インスタンスの数（または最小・最大）を指定します。
   これらはワークロードに応じて調整できます。

## 決定

1. Cells は Reference Architecture を初期状態として使用しますが、負荷に応じて調整されます。
1. ストレージ容量の変更、垂直スケールの変更、水平スケールの変更は、イテレーティブに Cell Architecture に対して行われ、時間が経つにつれて元のリファレンスアーキテクチャからのドリフトを生じます。
   これらの変更はすべての cell に適用されます。
1. Tamland のキャパシティプランニングを使用し、潜在的なサチュレーションイベントの前にスケーリングアクションが実行されるようにします。
1. Org Mover はトラフィックをリバランスする主要なメカニズムとしてホットスポットを避ける目的で使用されますが、時間とともに、特定のワークロードを処理するために限られた数の Cell Sub-Archetypes を定義する必要があるでしょう。これは、Dedicated がすでに overlays を使って限定的な tenant カスタマイズを提供しているのと同様に、必要に応じて定義されます。

![Cells Architecture evolution over time](https://docs.google.com/drawings/d/e/2PACX-1vTKB9IWloAqvUa7msAZ8wkVl1DhsPV0y-cbJTTeNLrkg2TEuxROPxqwNe03bBNCWVxIsVfPU0VxCZkR/pub?w=925&h=345)

### 異なる種類のスケーリング変更

1. Cells Architecture における **ストレージ容量** はデフォルト値であるべきで、Postgres、Gitaly などのディスクスペースの値は tenant モデルで設定可能であるべきです。
   これにより、リバランスやアーキテクチャの反復作業をせずに、追加のストレージのために Cells をリサイズできます。
   これは、個々の cell でストレージが必要となる前に、ストレージ容量が過剰にプロビジョニングされることを防ぎます。
1. **垂直および水平スケーリングの変更** は、Cell Architecture か、適切な場合は Sub-Archetype/Overlay のいずれかで実装されるべきです。

## 結果

Cells は均質な Cell Architecture を使用し、時間が経つにつれて Reference Architectures からドリフトしていきます。
これらの変更が行われるにつれ、SaaS Platforms チームは Test Platforms チームに非公式なフィードバックを提供して、Reference Architectures の今後のイテレーションを導く可能性があります。

Cell Architecture は
（[Instrumentor で定義](https://gitlab.com/gitlab-com/gl-infra/gitlab-dedicated/instrumentor/-/blob/main/gcp/jsonnet/reference_architecture.libsonnet) されており）すべての cell によって共有されますが、特定のワークロードに対応するために限られた数の sub-archetype が開発される可能性があります。

これは、Instrumentor の overlays を使用してスケーラブルなプロセスで管理する必要があります。
overlays を追加する際の制限の詳細については [Tenant Model Documentation](https://gitlab.com/gitlab-com/gl-infra/gitlab-dedicated/team/-/blob/main/engineering/tenant-model.md#reference-architecture-overlays) を参照してください。

Cells のサチュレーションを監視するために Tamland のキャパシティプランニングプロセスをデプロイする必要があります。

Tamland によって将来のサチュレーションが予測された場合、問題解決に向けていくつかの道筋があり、優先度の高い順に以下に挙げます:

1. Org Mover を使用して、ノイジーネイバーである Organization を別の cell、または新しい cell に再配置する。
   サチュレーションを引き起こしているワークロードによっては、archetype を別のものに移動する価値があるかもしれません。
1. ストレージ利用の問題については、その cell のストレージ容量を増やすこともあります。
1. すべての cell でサチュレーションを改善するために Cell Architecture の次のバージョンへ反復する。
1. 既存の archetype に合わない特定タイプのワークロードに対応するために新しい sub-archetype を導入し、その sub-archetype に基づく cell を provision して Org Mover でノイジーネイバーをその新しい cell に移す。

分析によって正しい行動方針を判断します。

当初はこのプロセスは手動である必要がありますが、将来的には Organization のリバランスや cell のスケーリングを自動化できる可能性があります。

自動化されたスケーリングのわかりやすい例として、Tamland の予測に基づき、ある Cell が Gitaly のディスク容量サチュレーションに向かっている場合、自動化されたプロセスが将来的に Gitaly のディスクサイズや Gitaly ノード数を増やすかもしれません。

## 代替案

### バリエーションのない Reference Architecture

Reference Architectures を厳格に守ることもできます。
これには新しい Reference Architectures の定義が必要になります。
これらのアーキテクチャは顧客に直接役立つ可能性は低く、GitLab SaaS の社内顧客向けにとどまるでしょう。

さらに、これは Cell のスケーリングの責任を、Reference Architecture の定義を担当する Test Platforms チームに間接的に負わせることになり、スケーリングプロセスを遅らせ、Cell インフラの管理に非効率をもたらします。

### バリエーションのない Cell Architecture

すべての cell に対して、バリエーションなしに単一の Cell Architecture をデプロイすることもできます。

サチュレーションへの対処手段は、単一のアーキテクチャをスケールしてすべての cell のリソースを増やすか、Organization をリバランス（おそらくノイジーネイバー効果を避けるために単独の cell に移動）するかのみとなります。

これは多くの Cells が過剰プロビジョニングされる結果となり、その代わりに少数の cells が正しくプロビジョニングされるという、非効率なものです。

さらに、ある Organization が他の顧客との同居に対してノイズが大きすぎるという理由だけで単独の cell で実行することは、コストが高くつきます。
