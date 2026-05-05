---
title: "GitLab モジュラーモノリス"
status: proposed
creation-date: "2023-05-22"
authors: [ "@grzesiek", "@fabiopitino" ]
coach: [ ]
approvers: [ ]
owning-stage: ""
participating-stages: []
toc_hide: true
upstream_path: /handbook/engineering/architecture/design-documents/modular_monolith/
upstream_sha: 5fcdd102793f56146077c82f37a89171dea6d0ba
translated_at: "2026-04-27T13:25:33Z"
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
<td class="px-3 py-2 border border-gray-300"><a href="https://gitlab.com/grzesiek" class="text-blue-600 hover:underline">@grzesiek</a>, <a href="https://gitlab.com/fabiopitino" class="text-blue-600 hover:underline">@fabiopitino</a></td>
<td class="px-3 py-2 border border-gray-300"></td>
<td class="px-3 py-2 border border-gray-300"></td>
<td class="px-3 py-2 border border-gray-300"></td>
<td class="px-3 py-2 border border-gray-300">2023-05-22</td>
</tr>
</tbody>
</table>
</div>


## 概要

メインの [GitLab Rails](https://gitlab.com/gitlab-org/gitlab) プロジェクトは、[Ruby on Rails](https://rubyonrails.org/) フレームワークを使用して大規模なモノリシックアプリケーションとして実装されています。220 万行以上の Ruby コードを持ち、何百人ものエンジニアが毎日コントリビュートしています。

このアプリケーションは 10 年以上にわたって複雑さが増しています。モノリシックアーキテクチャはこの間、高い開発速度と優れたエンジニアリング生産性を維持することを可能にし、私たちに大きな貢献をしてきました。

[アプローチしやすいオープンコアアーキテクチャ](https://about.gitlab.com/blog/2022/07/14/open-core-is-worse-than-plugins/)を目指しつつも、速度を維持し開発の予測可能性を高めるためにドメイン間の境界を強化する必要があります。

エンジニアリング組織として成長するにつれ、やや異なるが関連するアーキテクチャパラダイムを探求したいと考えています: サテライトサービスを持つ[モノリシックアーキテクチャ](https://en.wikipedia.org/wiki/Monolithic_application)を維持しながら、[モジュラーモノリスデザイン](https://en.wikipedia.org/wiki/Modular_programming)を採用します。

これにより、エンジニアリング効率を高め、認知負荷を軽減し、最終的には必要に応じて内部コンポーネントを分離してデプロイ・実行できる程度まで切り離すことができます。

## 動機

大規模で密結合なモノリシックアプリケーションの作業は困難です:

エンジニアリング:

- エンジニアのオンボーディングに時間がかかります。コンテキストの規模と結合の量のため、エンジニアが生産性を感じるまでしばらく時間がかかります。
- いくつかのドメインに `CODEOWNERS` ファイル機能を使用する必要がありますが、[これらのルールは複雑です](https://gitlab.com/gitlab-org/gitlab/-/blob/409228f064a950af8ff2cecdd138fc9da41c8e63/.gitlab/CODEOWNERS#L1396-1457)。
- アプリケーションの規模が大きいため、エンジニアがメンタルマップを構築することが難しいです。明らかに孤立した変更でも、モノリスの他の部分に[広範な影響](../../../devops/#reducing-the-impact-of-far-reaching-work)を与える可能性があります。
- エンジニアリング人材の離職/定着。生産性への障壁と絶えず対処することは、エンジニアにとって疲弊し士気を低下させます。

アーキテクチャ:

- モノリスの内部にほとんど構造がありません。[いくつかのモジュール](https://gitlab.com/gitlab-org/gitlab/-/issues/212156)の作成を強制しようとしてきましたが、モノリスの機能的な部分がどうあるべきか、コードをどのように整理すべきかについての会社全体の戦略がありません。
- 既存のモジュール間に分離がありません。Ruby は境界を効果的に強制するためのアウトオブザボックスツールを提供していません。すべてが同じメモリ空間の下に存在します。
- 効率を高めることができる抽象化をほとんど構築していません。
- 高い結合のため、アプリケーションの安定した部分を別のサービスに移動することが不可能です。
- 特定のドメインへの変更を個別にデプロイし、その中で発生している障害を分離することができません。

生産性:

- 複雑な変更の本番環境への中央値時間が長い。
- より広いコミュニティメンバーがコントリビュートするには圧倒される場合があります。
- テスト時間の削減には勤勉で粘り強い努力が必要です。

## 目標

- 関心の分離によって開発速度と予測可能性を高める。
- 結合を減らし有用な抽象化を導入することでコード品質を改善する。
- GitLab コンポーネントを個別にデプロイ・実行するために必要な抽象化を構築する。

## どのように実現するか？

モジュール化が重要な技術的な取り組みであることは認識していますが、主な課題は技術的なものよりも組織的なものだと考えています。モジュールが GitLab.com 上でもセルフマネージドインスタンス上でもうまく機能する実用的な方法で切り離されるようにモジュール化を設計するだけでなく、GitLab での働き方に沿ったモジュール化を実現する必要があります。

モノリスのモジュール化を成功させるために必要な多くの側面と詳細があります。以下にリストされた側面に取り組み、それらを洗練させ、目標に向けて前進しながら重要な詳細を追加していきます:

1. [主要な洞察をもたらすモジュール化のプルーフオブコンセプトを提供する](proof_of_concepts.md)。
1. [境界コンテキストを定義する](bounded_contexts.md)ことによって、製品構造にモジュール化計画を整合させる。
1. 製品構造を反映する[ドメインをモジュールに分離する](packages_extraction.md)。
1. 切り離されたドメインの操作方法についてチームメンバーのトレーニングプログラムを開始する（TODO）
1. 制御の逆転によって切り離されたドメインの構築を容易にするツールを構築する（TODO）
1. [モノリス内に六角形アーキテクチャを導入する](hexagonal_monolith/index.md)
1. 一方向依存関係とホストアプリケーションによるクリーンアーキテクチャを導入する（TODO）
1. ドメインを個別に実行・デプロイすることを可能にする抽象化を構築する（TODO）

## ステータス

進行中。

- 2024 年 4 月に結論が出た[バウンデッドコンテキスト](../../../../company/working-groups/bounded-contexts/)ワーキンググループは、GitLab Rails ドメインおよびインフラストラクチャレイヤーに対して強制すべきバウンデッドコンテキストのリストを定義しました。

## 決定

1. [ADR-001: アプリケーションドメインのモジュール化](decisions/001_modular_application_domain/)? アプリケーションドメインとインフラストラクチャコードのモジュール化から始める。
1. [ADR-002: フィーチャーカテゴリを中心としたバウンデッドコンテキストの定義](decisions/002_bounded_contexts_definition/)をコードの SSoT として。
1. [ADR-003: すべてのモジュールとライブラリへのスチュワードの割り当て](decisions/003_stewardship/)。

## 用語集

- `modules` は Ruby モジュールであり、コードを階層的にネストするために使用できます。
- `namespaces` は Ruby 定数の一意の階層です。例えば、`Ci::` だけでなく `Ci::JobArtifacts::` または `Ci::Pipeline::Chain::` も含まれます。
- `packages` は関連する機能をグループ化するための Packwerk パッケージです。これらのパッケージはデザインとアーキテクチャによって大きくも小さくもなれます。パッケージ内のすべての定数（クラスとモジュール）は同じ名前空間を持ちます。例えば:
  - `ci` パッケージでは、すべてのクラスは `Ci::` 名前空間の下にネストされます。`Ci::PipelineProcessing::` のようなネストされた名前空間もあります。
  - `ci-pipeline_creation` パッケージでは、すべてのクラスは `Ci::PipelineCreation::Chain::Command` のように `Ci::PipelineCreation` の下にネストされます。
  - `ci` パッケージでは、パッケージの名前空間と一致しないため、`MergeRequests::UpdateHeadPipelineService` という名前のクラスは許可されません。
  - これは [Packwerk ベースの RuboCop Cops](https://github.com/rubyatscale/rubocop-packs/blob/main/lib/rubocop/cop/packs/root_namespace_is_pack_name.rb) を使用して簡単に強制できます。
- `bounded context`（バウンデッドコンテキスト）は、ドメインのマクロな側面を表すトップレベルの Packwerk パッケージです。例えば: `Ci::`、`MergeRequests::`、`Packages::` など。
  - バウンデッドコンテキストは単一の Ruby モジュール/名前空間で表されます。例えば、`Ci::JobArtifacts::` ではなく `Ci::` です。
  - バウンデッドコンテキストは 1 つまたは複数の Packwerk パッケージで構成できます。ドメインが非常に複雑で、実装の詳細のすべてにプライバシーを強制したい場合は、ネストされたパッケージが推奨されます。例えば: `Ci::PipelineProcessing::` と `Ci::PipelineCreation::` は同じバウンデッドコンテキストの別々のパッケージにすることができ、実装の詳細をプライベートに保ちながらパブリック API を公開できます。
  - `RemoteDevelopment::` のような新しいバウンデッドコンテキストは単一のパッケージで表すことができますが、`Ci::` のような大規模で複雑なバウンデッドコンテキストは、より小さな/ネストされたパッケージに編成する必要があります。

## 参考資料

[参考資料のリスト](references.md)
