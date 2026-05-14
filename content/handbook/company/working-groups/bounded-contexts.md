---
title: "バウンデッドコンテキストワーキンググループ"
description: "GitLab Rails モノリスを構成するバックエンドのバウンデッドコンテキストを特定します。モノリスのモジュール化に向けた作業を準備します。"
upstream_path: /handbook/company/working-groups/bounded-contexts/
upstream_sha: b4eeb07f0d5f46e2fc5f8572be1a2547261aed89
translated_at: "2026-04-25T09:00:00Z"
translator: claude
stale: false
---

## 属性

| プロパティ        | 値           |
|-----------------|-----------------|
| 作成日    | 2023-11-28 |
| 目標終了日 | 2024-03-31 |
| 実際の終了日 | 2024-05-20 |
| Slack           | [#wg_bounded_contexts](https://gitlab.enterprise.slack.com/archives/C069VRRN70S)（社内からのみアクセス可能） |
| Google ドキュメント      | [アジェンダドキュメント](https://docs.google.com/document/d/1Ss2lvZHm1ID5CTVQJS3ivM7Nc1FgLaPCBCSm2RDawKI/edit)（社内からのみアクセス可能） |

### 概要

現在、コードは Ruby 名前空間を使用して名前空間化されていますが、コードの整理方法に明確なルールやガイドラインがありません。新しい名前空間が常に作成されており、[バウンデッドコンテキスト](https://docs.gitlab.com/ee/architecture/blueprints/modular_monolith/bounded_contexts.html#1-what-makes-a-bounded-context)をより適切に表現するために新しい概念を既存の名前空間内にネストできる場合が多いにもかかわらず、その必要がないケースがよくあります。一貫して名前空間化されたコードは、[モジュール化されたコードベース](https://docs.gitlab.com/ee/architecture/blueprints/modular_monolith/)の前提条件です。

このワーキンググループでは：

- GitLab Rails コードベースを構成するバウンデッドコンテキストを特定する
- 明確な理由なく新しいトップレベル名前空間が増殖するのを止める
- エンジニアリング組織に整合した豊かなドメインロジックを持つモジュールを持つ

### コンテキスト

[GitLab Rails モノリスをモジュール型モノリスに分割する提案](https://gitlab.com/gitlab-org/gitlab/-/issues/365293)は、現在の GitLab コードベースの段階でモジュール化がなぜ重要なのかを詳しく説明しています。モジュール型モノリスに向けて進捗を達成するために、まず GitLab Rails モノリスに現在存在するモジュールとバウンデッドコンテキストが何かを理解する必要があります。

### 活動

ワーキンググループのメンバーは：

- 自分の[バウンデッドコンテキスト](https://docs.gitlab.com/ee/architecture/blueprints/modular_monolith/bounded_contexts.html#1-what-makes-a-bounded-context)に関連するファイルを分類する。
- 同期ミーティングに参加し、質問を持ち寄り、進捗を報告する。
- バウンデッドコンテキストを特定するプロセスとガイドラインについてフィードバックを提供する。
- それぞれのステージ/ドメインのモジュール化エバンジェリストとして行動する。
- バウンデッドコンテキストの最終リストが包括的であることを確認するレビューを支援する。

### コミュニケーション

- ワーキンググループは最初は週次でミーティングを行い、APAC と AMER に適したタイムゾーンを交互に使用します。その後、隔週に変更できます。
- `#wg_bounded_contexts` Slack チャンネルが作成され、質問や非同期でのコミュニケーションができます。
- 最初のミーティング後は、作業が非同期で進められることが期待されます。各チームメンバーは自分自身のファイルリストを分類する作業を進めることができます。
- スプレッドシート（または代替手段）で作業することで、分類されたファイルの進捗と残作業を簡単に追跡できます。
- ミーティングのファシリテートと週次ステータス更新の報告の DRI は `@fabiopitino` とコントリビュートを希望する他のメンバーが担当します。
- 最終的な Issue やフォローアップのアイデアは `~modular_monolith` ラベルを使用して作成されます。

### 終了基準 {#exit-criteria}

以下の条件を満たしたときにワーキンググループを解散できます：

| 終了基準 | 結果として生まれる成果物 |
| ------------- | ------------------ |
| 開発者向けのドキュメントとして機能する、特定されたバウンデッドコンテキストの公開リストを作成した。 | [`config/bounded_contexts.yml`](https://gitlab.com/gitlab-org/gitlab/-/blob/master/config/bounded_contexts.yml) |
| コードベースが時間とともに発展できるよう、バウンデッドコンテキストの作成、削除、リネームのためのシンプルなプロセスを作成した。 | [ドキュメントを更新](https://docs.gitlab.com/ee/development/software_design.html#bounded-contexts) |
| ボーナス：特定されたバウンデッドコンテキストのリストを使用してトップレベルの名前空間を強制する Rubocop Cop を作成した。 | [Rubocop 静的アナライザーを追加](https://gitlab.com/gitlab-org/gitlab/-/merge_requests/151984) |

### 詳細

ワーキンググループは、Ruby コードベース、特に `app/` と `lib/` フォルダのドメインコードをマッピングし、バウンデッドコンテキストのリストを作成します。[六角形アーキテクチャ](https://docs.gitlab.com/ee/architecture/blueprints/modular_monolith/hexagonal_monolith/index.html)のドメインレイヤー（コア）を主な対象としたいため、最初は `app/controllers` と `app/views` を除外する場合があります。

コードベースのマッピングプロセスでは以下を実施します：

- スプレッドシートに Ruby ファイルをすべてリストし、[定義されたガイドライン](https://docs.gitlab.com/ee/architecture/blueprints/modular_monolith/bounded_contexts.html#1-what-makes-a-bounded-context)に従ってコンポーネントに分類します。同じディレクトリ下のファイルは一般的にまとめて分類できるため、これは多くの時間を要しません。
- `lib` ディレクトリ内では、gem として抽出すべき汎用コードと、app のコードと同じ名前空間を持つべきドメインコードを区別します。同じドメインに関連するすべてのコードは全く同じ名前空間を持つべきです。例えば、`Ci::`（app から）と `Gitlab::Ci::`（`lib` から）を並存させるべきではありません。
  - gem として抽出すべきコードと `app` と `lib` のクロスカッティングな懸念（汎用基底クラス、ユーティリティ、ロガー、フレームワークコードなど）のために特別な [`platform` カテゴリ](https://gitlab.com/gitlab-org/gitlab/-/issues/365293#proposal)を設けます。
- ネストされたクラスのリネームに気を取られることなく、トップレベルのバウンデッドコンテキストにのみ焦点を当てることが重要です。これはこの機能を所有するチームの裁量によるリファクタリング活動ですが、ワーキンググループのスコープではありません。
- 類似した名前空間とマージ戦略を特定します。以下のいずれかです：
  - より大きなドメインを表す新しい名前空間を作成し、クラスをそこに移動する。
  - バウンデッドコンテキストの代表的な名前空間を特定し、他のすべてのクラスをそこに移動する。
- 2 つの名前空間が似ているように見えても完全に異なるコンテキストで動作する場合、それぞれのバウンデッドコンテキスト下に移動することで曖昧な名前空間を区別します。
- 複数の責任を持ち、分割すべき名前空間を特定します。この場合、クラスはそのドメインをより適切に表現する他の名前空間に移動する可能性があります。
- 可能な限り既存のトップレベル名前空間を再利用するようにします。
- その他のすべてを無視します（非 Ruby コード、設定、スペック、コントローラー、ビュー、Rake タスク、Grape API、GraphQL）。

バウンデッドコンテキストのリストは完璧である必要はありません。GitLab Rails コードベースで機能するドメインの十分な表現であり、各クラスが存在できる名前空間が 1 つだけで曖昧さがないことが重要です。このリストを継続的に改善し、バウンデッドコンテキストの作成、削除、リネームのプロセスを整備する必要があります。

### ロールと責任

ワーキンググループは、GitLab のさまざまなステージの代表者で構成される必要があります。各代表者は、特定の GitLab DevOps ステージにおけるバックエンドの専門家として自分のドメインを代表するファンクショナルリードの役割を担います。

参加者は理想的にはモジュール化とドメイン駆動設計に関連する成果の推進に興味があることが望まれます。ワーキンググループの設立については `#development`、`#backend`、`#engineering-fyi` Slack チャンネルでコミュニケーションします。参加者がいないステージについては、そのステージで働くエンジニアリングリーダーにサポートを求めます。

| ワーキンググループのロール    | 担当者                | 役職                          |
|-----------------------|-----------------------|--------------------------------|
| エグゼクティブスポンサー     | Sam Goldstein         | エンジニアリングディレクター、Ops   |
| ファシリテーター           | Fabio Pitino          | プリンシパルエンジニア、Verify     |
| メンバー                | Chad Woolley          | シニアバックエンドエンジニア、Create::Remote Development（Workspaces） |
| メンバー                | Thong Kuah            | プリンシパルエンジニア、Data Stores  |
| メンバー                | Lucas Charles         | プリンシパルエンジニア、Secure & Govern |
| メンバー                | Furkan Ayhan          | シニアバックエンドエンジニア、Verify:Pipeline Authoring |
| メンバー                | Smriti Garg           | シニアバックエンドエンジニア、Govern:Authentication |
| メンバー                | Aboobacker MK         | シニアバックエンドエンジニア、Govern:Authentication |
| メンバー                | Sean Carroll          | エンジニアリングマネージャー、Create:Source Code |
| メンバー                | Ahmed Hemdan          | シニアバックエンドエンジニア、Secure:Static Analysis |
| メンバー                | Ethan Urie            | スタッフバックエンドエンジニア、Secure:Secret Detection |
| メンバー                | Gabriel Mazetto       | シニアバックエンドエンジニア、Systems:Geo |
| メンバー                | Vitali Tatarintev     | シニアバックエンドエンジニア、Create:Code Creation |
| メンバー                | Sashi Kumar Kumaresan | スタッフバックエンドエンジニア、Govern:Security Policies |
| メンバー                | Vasilii Iakliushin    | スタッフバックエンドエンジニア、Create::Source Code |
| メンバー                | Remy Coutable         | プリンシパルエンジニア、品質 |
| メンバー                | Eduardo Bonet         | スタッフインキュベーションエンジニア、MLOps |
| メンバー                | Vij Hawoldar          | シニアバックエンドエンジニア、Fulfillment::Utilization |
| メンバー                | Suraj Tripathi        | シニアバックエンドエンジニア、Fulfillment::Utilization |
| メンバー                | Kassio Borges         | スタッフバックエンドエンジニア、Plan::Knowledge |
| メンバー                | Aakriti Gupta         | シニアバックエンドエンジニア、Systems:Geo |
| メンバー                | Peter Leitzen         | スタッフバックエンドエンジニア、エンジニアリング生産性 |
| メンバー                | Abhinaba Ghosh        | エンジニアリングマネージャー、テスト & ツールインフラストラクチャ |
| メンバー                | Mohamed Hamda         | バックエンドエンジニア、Fulfillment::Provision |
| メンバー                | Andrei Zubov          | シニアフロントエンドエンジニア、Environments |
| メンバー                | Fabien Catteau        | スタッフバックエンドエンジニア、Secure::Composition Analysis |
