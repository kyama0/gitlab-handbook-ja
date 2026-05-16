---
title: "評価ツールの統合"
status: ongoing
creation-date: "2024-07-22"
authors: ["@tle_gitlab", "@achueshev"]
coaches: ["@eduardobonet"]
dris: ["@oregand"]
owning-stage: "~devops::ai-powered"
participating-stages: []
toc_hide: true
upstream_path: /handbook/engineering/architecture/design-documents/ai_evaluation_consolidation/
upstream_sha: b4eeb07f0d5f46e2fc5f8572be1a2547261aed89
translated_at: "2026-04-26T03:00:00Z"
translator: claude
stale: false
lastmod: "2025-04-28T10:53:04-07:00"
---

<!-- Design Documents often contain forward-looking statements -->

<!-- This renders the design document header on the detail page, so don't remove it-->


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
<td class="px-3 py-2 border border-gray-300"><a href="https://gitlab.com/tle_gitlab" class="text-blue-600 hover:underline">@tle_gitlab</a>, <a href="https://gitlab.com/achueshev" class="text-blue-600 hover:underline">@achueshev</a></td>
<td class="px-3 py-2 border border-gray-300"><a href="https://gitlab.com/eduardobonet" class="text-blue-600 hover:underline">@eduardobonet</a></td>
<td class="px-3 py-2 border border-gray-300"><a href="https://gitlab.com/oregand" class="text-blue-600 hover:underline">@oregand</a></td>
<td class="px-3 py-2 border border-gray-300"><span class="inline-block rounded px-2 py-0.5 text-xs font-medium bg-gray-100 text-gray-700">~devops::ai-powered</span></td>
<td class="px-3 py-2 border border-gray-300">2024-07-22</td>
</tr>
</tbody>
</table>
</div>


## 概要

このブループリントでは、私たちの評価ツールである [ELI5](https://gitlab.com/gitlab-org/ai-powered/eli5) と [Prompt Library](https://gitlab.com/gitlab-org/modelops/ai-model-validation-and-research/ai-evaluation/prompt-library) を統合し、統一された評価ソリューションと、各チームが AI 機能を効率的に評価できるアクセスしやすい方法を作り出すことを提案します。主な成果として、本ブループリントでは ELI5 と Prompt Library を Prompt Library のリポジトリに統合し、最終的には Prompt Library をエンジンに変革することで、両製品のベストな機能を残すというアイデアを提示します。

## 動機

時を経て、GitLab は AI 機能の評価という同じ問題に取り組む 2 つの評価ツールを開発してきましたが、それぞれ異なるアプローチで解決しています。Prompt Library は大規模な評価への対応に特化したものであり、ELI5 は開発者がすばやく評価を実行できるようにすることに特化しています。

### Prompt Library の概要

Prompt Library は、主に大規模な評価と大規模なデータセットの管理向けに設計された、機能豊富な評価ツールです。Apache Beam をベースに構築されており、ローカルでも、Dataflow エグゼキューターを使って GCP プロジェクトでも実行できます。下の図は Prompt Library の内部設計を示しています。

![Prompt Library High Level](/images/handbook/engineering/architecture/design-documents/ai_evaluation_consolidation/prompt-library-high-level.png)

[図の元データ](https://docs.google.com/drawings/d/1qu2SwxCOmYYAk0wd3OWdg6R60pbq-jJrM_5Pzo_WIBM/edit?usp=sharing)

Prompt Library は、BigQuery テーブルからデータセットを読み込み、結果を BigQuery に書き戻す Apache Beam の評価パイプラインを実行する CLI インターフェイスを提供します。Prompt Library は JSON 設定ファイルによる豊富な設定システムをサポートしており、エンジニアが LLM ジャッジやその他のヒューリスティックに関連するさまざまなパラメーターを調整できます。

**制限事項:** Prompt Library のコンポーネントは Apache Beam API と密結合しています。評価者は Apache Beam API と BigQuery を深く理解する必要があります。Apache Beam はもともと大規模な処理向けに設計されており、そのプログラミングロジックは純粋な Python 開発とは異なる場合があることに注意してください。例えば、Apache Beam は古典的な意味でのソートをサポートしていません。Prompt Library のコンポーネントを拡張・更新するこの複雑さは、現在チームの間で混乱を引き起こしており、よりシンプルな評価タスクへの採用障壁となっています。

### ELI5 の概要

ELI5 は LangSmith の上に構築された評価ツールで、主に高速プロトタイピングと、コンポーネント間の相互作用が複雑でない評価パイプラインの構築向けに設計されています。ELI5 はローカルで実行され、開発者はリポジトリをクローンして `poetry` で依存関係をインストールする必要があります。開発者が ELI5 をリモートで実行する必要がある場合は、追加の手動ステップを行う必要があります。下の図は ELI5 の内部設計を示しています。

![ELI5 High Level](/images/handbook/engineering/architecture/design-documents/ai_evaluation_consolidation/eli5-high-level.png)

[図の元データ](https://docs.google.com/drawings/d/1LAYQP1eYF9Ibo0IRk3mu37prEHxUMIKilm1eqhHocqI/edit?usp=sharing)

Prompt Library と同様に、ELI5 は LangSmith からデータを読み込み、結果を LangSmith に書き戻す評価を実行する CLI インターフェイスを提供します。LangSmith は、開発者が結果を効果的に分析し、実験を比較してメトリクスのドリフトを特定できる豊富な UI を提供します。ELI5 CLI は評価パイプラインを設定する引数の受け渡しをサポートしています。ほとんどの引数にはデフォルト値が設定されており、開発者の負担を軽減し、より早く結果が得られるようになっています。さらに開発者の評価パイプラインのプロトタイピングを支援するため、ELI5 は統一されたシグネチャ（つまり実際の出力と期待される出力を比較する形式）で評価者を構築するための基本的なビルディングブロックを提供します。開発者のユースケースに応じて、これらの評価者は純粋な Python 関数、LLM ジャッジ、または他の LangChain runnable のいずれかになります。

**制限事項:** ELI5 は LangSmith のみに依存しており、その能力に制限されています。ELI5 は開発者が評価者を効率的に実装するのに役立ちますが、実行は私たちの制御外であり、これは高度なユースケースで必要になる場合があります。

### 結論: 統一された評価アプローチへの移行

両プロジェクトを同時に開発するのは非効率です。すでにボトルネックとなっているメンテナーの必要性が増し、コントリビューションの障壁が生まれます。さらに、ツール間で不必要な競争と重複を生み出しています。

両プロジェクトには独自の長所と短所があります。Prompt Library は大規模なカスタム評価のための強力なツールですが、全社的な貢献や新しい変更の追加には柔軟性がありません。一方で ELI5 は、LangSmith UI のサポートで結果を調査しながら評価ロジックを構築することに重点を置いた、ユーザーフレンドリーなソリューションです。同時に、ELI5 はエンジンとして使用するという点で LangSmith プラットフォームに制限されています。したがって、高品質な結果を提供し続けるためには、評価ツールを統合することが重要です。

## ゴール

各チームが AI 機能を評価するための、ユーザーフレンドリーで透明性のある方法を提供するため、評価ツールを統合します。

## 目的

ゴールと動機に基づいて、以下の目的を定義します。

1. ELI5 を Prompt Library に統合し、Prompt Library をエンジンに変換する: この統合は、統一された強力でユーザーフレンドリーな Centralized Evaluation Framework (CEF) を作成するために不可欠です。目標は、開発者が純粋な Python 関数の評価者を構築することに集中し、LangSmith のように Prompt Library エンジン上でそれらを実行できる柔軟な基盤を作成することです。

1. 柔軟性、拡張性、ユーザーフレンドリーさを向上させる: この目的は、統合ツールが多様なニーズに適応でき、さまざまなスキルセットを持つ開発者がアクセスできるようにすることです。その結果、参入障壁を低減すると同時に、迅速なプロトタイピングから広範な評価まで、各チームの多様なニーズに応えるパワーと柔軟性を提供します。

1. ドキュメントとユーザーガイダンスを改善する: 明確なドキュメントとユーザーガイダンスは、統合ツールの円滑な採用と効果的な利用に不可欠です。これにより学習曲線が緩やかになり、ユーザーエラーが最小化され、各チームが評価機能の可能性を最大限に活用できるようになります。

定義された目的を達成した後の統合ツールの結果は、次のように表現できます。

![CEF High Level](/images/handbook/engineering/architecture/design-documents/ai_evaluation_consolidation/cef-high-level.png)

[図の元データ](https://docs.google.com/drawings/d/1Xon-hwoO_GMc7Or1xIavl0ld9XqQKqpdJR2wJgWxDlY/edit?usp=sharing)

## 非ゴール

### データセット管理

データセット管理および作成は、本提案の範囲内の主要な目標とは見なされません。これらの側面については、別の Issue で取り上げられています:
<https://gitlab.com/gitlab-org/modelops/ai-model-validation-and-research/ai-evaluation/prompt-library/-/issues/349>。
本提案では、評価の実行に必要なデータが、統合ソリューションからアクセス可能なデータセットの Single Source of Truth (SSOT) にすでに用意されていることを前提とします。

### AI Gateway 統合

AI Gateway を通じてモデルアクセスを集約することで、一貫性が高まり、メンテナンスのオーバーヘッドが削減され、複数のモデルアクセスポイントを管理することに伴うエラーリスクが最小化されます。AI Gateway を接続することで、システム全体の信頼性と効率性が向上する可能性があります。しかし、AI Gateway を統合ツールに組み込むことは、本ゴールを達成するための厳密な要件には見えません。ELI5 と Prompt Library が統合された後、このタスクをさらに検討する予定です。

### Prompt Library の実行エンジンとしての Apache Beam

Prompt Library は、評価パイプラインの実行に Apache Beam を利用しています。Apache Beam はもともと大規模な処理など別のタスク向けに設計されたものであり、そのため評価ロジックを実装する際にボトルネックになることがあります。Model Validation グループはすでに Apache Beam を別のソリューションに置き換えて評価パイプラインを実行することを検討しています。しかし、現段階で技術的負債をより良く管理し、コードベースの変更を少なくしてツールを統合するために、Apache Beam を引き続き使用することを決定しました。私たちは、評価者をシンプルかつ Prompt Library の内部ロジックから分離した状態に保つ方法で統合ツールを設計しています。このアプローチにより、統合作業を完了したら Apache Beam を使用する根拠を再考できるようになります。

## 実装ステップ

このセクションでは、前のセクションで定義した目的を達成するために実行する必要のある実装ステップについて説明します。実装ステップは [GitLab Values](/handbook/values/) - Collaboration、Efficiency、Iteration、Transparency に従って定義していることに注意してください。各ステップは複雑さに応じて、後でエピックや個別の Issue に変換できます。

### 1. ELI5 を Prompt Library リポジトリのフォルダーとして移動する

このステップでは、即時の変更を加えることなくコードを統合し、重複コードの特定とメンテナーの数の削減を促進します。また、両ツールの既存ユーザーに対して既存の機能を維持しながら、Prompt Library の可視性を高めます。

このプロセスでは、ELI5 のフォルダー構造を Prompt Library リポジトリに移動し、新しいリポジトリの場所を反映するためにドキュメントを更新します。

**ユーザーへの影響:**

- 既存の機能は ELI5 と Prompt Library のユーザー双方にとって変更されません。
- ELI5 ユーザーは別の ELI5 リポジトリではなく、Prompt Library リポジトリをクローンします。
- ELI5 リポジトリはアーカイブされ、新たな更新は受信しなくなります。

**推定時間:** 1 マイルストーン未満。

### 2. Prompt Library をエンジンに変換する

このステップでは、Prompt Library のコードベースを既存の ELI5 ロジックと統合する準備に焦点を当てます。目標は、Prompt Library を ELI5 互換の評価者を受け入れる基本的なエンジンに変換することです。

このプロセスでは、Prompt Library のコードベースを更新し、ELI5 が使用する LangSmith に類似した Python API を提供します。この変換により、開発者は Apache Beam と直接対話する必要なく、純粋な評価ロジックに集中できるようになります。Prompt Library の主要な強み、つまりカスタマイズと大規模な実行を維持することを目指します。

**ユーザーへの影響:**

- 既存の機能は ELI5 と Prompt Library のユーザー双方にとって変更されません。
- Prompt Library のメンテナーは、以前の高度に結合された評価パイプラインをサポートし、バグ修正のみを行う必要があります。
- 新しい評価ロジックを実装する必要がある場合、開発者は ELI5 互換の評価者を実装し、新しい Prompt Library エンジンと共に使用します。

**推定時間:** 1〜1.5 マイルストーン。

### 3. 既存の ELI5 評価者を Prompt Library エンジンで動かす

このステップでは、ELI5 開発者が既存の評価者を Prompt Library エンジンで実行するための追加オプションを追加します。このステップを完了することで、ELI5 のコードベースを Prompt Library に接続し、開発者が評価パイプラインを迅速にプロトタイプ化し、必要に応じて高度なカスタムロジックを実装できるようにします。

このプロセスでは、ELI5 のコードベースを更新して、Prompt Library エンジンをトリガーするオプションを含めます。

**ユーザーへの影響:**

- 既存の機能は ELI5 と Prompt Library のユーザー双方にとって変更されません。
- ELI5 ユーザーは、必要に応じて評価者をカスタムの Prompt Library エンジンで実行する追加オプションを得られます。
- ELI5 ユーザーは、LangSmith と同様の Python API を使用して、エンジンとして Prompt Library と対話します。

**推定時間:** 1 マイルストーン。

> 注意: このステップは、Prompt Library 評価者を ELI5 互換に変換する作業と並行して実装できます。

### 4. Prompt Library 評価者を ELI5 互換に変換する

このステップでは、既存の Prompt Library 評価者を ELI5 互換に変換します。目標は、既存の古いロジックを合理化し、コードベースをさらに統合し、2 つのアプローチ間の差異を緩和することです。

このプロセスでは、Prompt Library のコードベースを更新します。ELI5 はすでに、ペアワイズ評価者や LLM ジャッジを含むさまざまな評価者を実装するための基本的なビルディングブロックを提供しています。これらのビルディングブロックを再利用して、既存の Prompt Library 評価者に対応する変更を加えることができます。

**ユーザーへの影響:**

- 既存の機能は ELI5 と Prompt Library のユーザー双方にとって変更されません。
- Prompt Library のメンテナーは、以前の高度に結合された評価パイプラインをサポートし、バグ修正のみを行います。
- 新しい評価ロジックを実装する必要がある場合、開発者は ELI5 互換の評価者を実装し、新しい Prompt Library エンジンと共に使用します。

**推定時間:** 1〜1.5 マイルストーン。

> 注意: このステップは、既存の ELI5 評価者を Prompt Library エンジンで動かす作業と並行して実装できます。

### 5. CLI インターフェイスのマージ

ELI5 と Prompt Library はどちらも CLI インターフェイスを提供しますが、異なる目的のために作成された異なる設定システムを持ちます。このステップでは、開発者が単一の CLI インターフェイスを実行できるようにし、評価を実行するためのデフォルト値を提供する設定システムを使用しつつ、開発者が評価設定を更新する必要がある高度な使用にも十分柔軟であるようにします。

このプロセスでは、ELI5 と Prompt Library 両方の CLI インターフェイスを更新し、ほとんどの一般的な開発者ニーズをサポートする例とデフォルト設定を備えた YAML ファイルベースの新しい設定システムを作成します。

**ユーザーへの影響:**

- 既存の機能は ELI5 と Prompt Library のユーザー双方にとって変更されません。
- ELI5 と Prompt Library は、評価を実行するための単一の CLI インターフェイスの提供を開始します。
- ELI5 と Prompt Library のメンテナーは、古い CLI インターフェイスをサポートし、追加を凍結します。

**推定時間:** 1 マイルストーン。

### 6. 古い ELI5 と Prompt Library のロジックを非推奨にする

このステップでは、メンテナーが前のステップでサポートする必要があった古い評価パイプラインと関連コンポーネントを非推奨にして削除することに焦点を当てます。目標は、Prompt Library をエンジンとして実行する ELI5 互換の評価者、変更された CLI、強化された設定システムを含む統合ツールの使用を開始することです。

**ユーザーへの影響:**

- 開発者は ELI5 と Prompt Library を統合ツール、つまり CEF として使用し始めます。
- 開発者は、統合ツールでの作業のために新しいドキュメントとガイドラインに依存します。
- 元の ELI5 と Prompt Library プロジェクト由来の非推奨依存関係が正常にクリーンアップされます。

**推定時間:** 1 マイルストーン未満。

## 代替案

このセクションでは、調査したものの、指定された理由により採用しなかった代替案を提示します。

1. ELI5 をベースにして Prompt Library をアーカイブする ELI5 はより多くのコントリビューターを引き付けており、私たちのチームの現在のニーズをよりよくサポートしています。ELI5 を Prompt Library にマージする代わりに、Prompt Library を保留にし、ELI5 を追加機能で拡張することもできました。しかし、ELI5 から学んだことを取り入れて Prompt Library をユーザーフレンドリーにすることのほうが、Prompt Library の規模を ELI5 に適用するよりも簡単です。

1. ELI5 と Prompt Library をアーカイブして、ゼロから始める。これにより、ELI5 と Prompt Library から学んだことを取り入れつつ、それらの技術的負債を引き継がないようにできます。しかし、新しいソリューションを始めるには実装に時間がかかり、依然として予期せぬ問題に直面する可能性があります。このアプローチは、長期的には必ずしも技術的負債から私たちを解放するものではありません。

## 将来の進化

このセクションでは、本提案の主要なゴールを達成した後に検討している将来のアイデアを提示します。

- Prompt Registry と評価リポジトリのマージ。現在、プロンプトは GitLab-rails から AI Gateway リポジトリに移行されています。これは現在のセットアップに対する改善ですが、プロンプトと評価が別々のリポジトリにあるのは、GitLab と GitLab のユニットテストが別々のリポジトリにあるようなものです。テスト（評価）はコード（プロンプト）と同じ場所で実行されるべきです。それらをさらに一緒に移動することを提案します。

- パイプライン CI による評価 評価を実行するためのもう 1 つのユーザーフレンドリーなソリューションは、このプロトタイプで紹介されているように GitLab パイプラインを介するものです:
  <https://gitlab.com/gitlab-org/ai-powered/custom-models/evaluations/-/jobs/7518078099>。統合された評価リポジトリがあれば、このような機能の実装が簡素化されます。
