---
title: "Scaled Agile Framework と GitLab"
description: "Scaled Agile Framework は、大規模エンタープライズが大規模にアジャイル開発手法を採用するための一般的なアプローチへと進化してきました。"
upstream_path: /handbook/marketing/brand-and-product-marketing/product-and-solution-marketing/demo/executive-demo/
upstream_sha: 6eef8dbb6a0d15167aa5378f476b04cd38b78675
translated_at: "2026-07-10T07:06:29+09:00"
translator: codex
stale: false
lastmod: "2026-06-29T08:59:00-04:00"
---
## Scaled Agile Framework (SAFe)

Scaled Agile Framework は、ガバナンス、コーディネーション、プロジェクト横断のコラボレーションを管理する必要がある大規模エンタープライズが、大規模にアジャイル開発手法を採用するための一般的なアプローチへと進化してきました。

GitLab がどのように SAFe をサポートできるかを説明する前に、GitLab のプロジェクトおよびポートフォリオモデルについて簡単に概観しておくと理解が深まります。この[スライドデック](https://bit.ly/2K5ZDka)は、GitLab がどのように Scaled Agile Framework をサポートできるかについて社内でコラボレーションしている場所です。

## GitLab のプロジェクト管理

### GitLab「プロジェクト」

GitLab におけるプロジェクトは中核の構成要素であり、作業を整理・管理・追跡・配信する場所です。GitLab のプロジェクトでは、Issue（ユースケース／要件）、Issue ボード（カンバン）、マイルストーン（スプリント）といった形式で、チームがコラボレーションし作業を計画できます。

![GitLab Project](/images/solutions/scaled-agile/gitlab-project.png)

GitLab のプロジェクトは、単なるプロジェクト管理にとどまるものではありません。GitLab のプロジェクトは、業界をリードするソースコード管理リポジトリと CI/CD パイプラインの力を解き放ちます。マージリクエストは、Issue と実際のコード変更をつなぐリンクです。マージリクエストは、設計、実装の詳細（コード変更）、議論（コードレビュー）、承認、テスト（CI パイプライン）、セキュリティスキャンを記録します。

![GitLab Repository](/images/solutions/scaled-agile/gitlab-repository.png)

#### Issue

GitLab における Issue は、計画の基本オブジェクトです。チームは説明欄でユースケースを文書化し、アプローチを議論し、規模／工数を見積もり（Issue ウェイト）、実際の時間／工数を追跡し、作業を割り当て、進捗を追跡します。ラベルにより、チームは Issue にタグ付けし、ステータスを追跡し、Issue をさまざまな取り組みに関連付けることができます。

#### ボード

ボードは、プロジェクトを視覚的に管理するための柔軟で動的なアプローチを提供します。ここでは、チームは作業のバックログを管理し、項目を優先順位付けし、Issue をチームやプロジェクト内の特定のステージに移動できます。ボードの各リストは、関連する Issue の合計サイズ（ウェイト）を計算するため、チームは任意の時点でどれくらいの作業が割り当てられているかを把握できます。

#### マイルストーン

マイルストーンは、スプリントや特定の Issue とコード変更のバンドルを配信する目標日を確立します。マイルストーンにより、チームはスプリントのように作業の特定の開始と終了を設定したり、マイルストーンを固定の時点とすることができます。

#### ラベル

GitLab のラベルは、作業にタグ付けし追跡するための柔軟で強力な仕組みです。ラベルは Issue ボードの列を定義したり、共通テーマに関連する Issue やマージリクエストを検索・発見しやすくしたりするために使用されます。

### GitLab グループ

複数のプロジェクト（プロジェクトのポートフォリオ）を管理するために、GitLab のグループはビジネスイニシアチブの戦略的な計画と配信までの追跡を可能にするエンティティです。グループレベルでは、サブグループ、プロジェクト、エピック、マイルストーン、ロードマップ、グループレベルのボードを管理できます。

![GitLab Group](/images/solutions/scaled-agile/gitlab-groups2.png)

#### エピック

関連プロジェクトと Issue のグループを追跡するために、GitLab のエピックはプロダクトオーナーやリーダーが長期間にわたって作業をリンクし管理する機能を提供します。エピックは複数のマイルストーンにまたがることができ、作業全体の流れと優先度の管理を容易にします。

#### マイルストーン

プロジェクトレベルのマイルストーンが多くの場合スプリントに合わせて設定されるのに対し、グループレベルでは、グループ内のすべてのプロジェクトとサブグループに対してマイルストーンを作成できます。これにより、チーム同士が同期を保ち、共通のリリース目標に集中できます。

![Milestone burndown chart](https://docs.gitlab.com/ee/user/project/milestones/img/burndown_chart_v15_3.png)

#### ロードマップ

ロードマップは、グループのさまざまなエピックを視覚的に表現したものです。ロードマップビューはラベルでフィルタリングし、エピックの開始日／終了日で整理することで作業の順序を可視化できます。現時点では、GitLab は Issue やエピック間の依存関係を作成しません。

![GitLab Roadmap](/images/solutions/scaled-agile/gitlab_roadmap.png)

#### グループボード

グループレベルの Issue ボードは、プロジェクトとサブグループの監督とガバナンスを可能にします。このビューでは、特定の Issue がライフサイクルをどのように流れているかを把握しやすく、チーム全体のキャパシティを理解できます。

![GitLab Kanban Board](/images/gitlab-kanban-board.png)

## Scaled Agile Framework

[Scaled Agile Framework](https://v5.scaledagileframework.com/) は、多くの大規模エンタープライズが複数のアジャイルチームの作業を定義、整理、同期するために使用しています。複雑な環境における複数のアジャイルチームのコーディネーション、コラボレーション、ガバナンス、監督を可能にするように設計されています。

![SAFe Model Board](/images/solutions/scaled-agile/safe_model.png)

GitLab のグループ、サブグループ、プロジェクトという構造により、Scaled Agile Framework のさまざまなバリエーションをモデル化しサポートすることが可能です。

![GitLab to SAFe](/images/solutions/scaled-agile/gitlab-safe-overview.png)

モデル全体（4 層 SAFe モデル）をサポートするには、組織はポートフォリオ計画作業を表すグループから始めます。次に、モデルの Large Solution 部分はサブグループになります。プログラムは Large Solution の下にそれぞれサブグループとして列挙され、最終的にアジャイルチームは GitLab プロジェクトで作業し、それぞれが「プログラム」の一部としてモデル化されます。

### チーム

[アジャイルチーム](https://v46.scaledagileframework.com/agile-teams/)は Scaled Agile Framework の基盤であり、チームが新しい機能を整理、計画し、実際に配信する場所です。GitLab では、**プロジェクト**が基本的なチーム作業領域となります。GitLab プロジェクトでは、チームはユースケース（Issue）のバックログを管理し、作業を割り当て（ボード）、機能についてコラボレーションし（Issue の議論）、コードを開発し（マージリクエスト）、変更をレビューし（マージリクエストの議論）、アプリケーションを統合・デプロイします（CI/CD パイプライン）。

#### チームバックログ

GitLab の **Issue と Issue ボード**により、プロジェクトチームは[バックログ](https://v46.scaledagileframework.com/team-backlog/)をキャプチャ、管理、優先順位付けできます。Issue ボード上で直接 Issue を優先順位付けすることも、ラベルを使って Issue 全体の優先度を確立することもできます。

#### スクラム

プロジェクトレベルの**マイルストーン**は[時間ベースのスプリント](https://v46.scaledagileframework.com/scrumxp/)を定義するために使用されます。マイルストーンに Issue を追加することで、GitLab はバーンダウンチャートを使ってチームの Issue クローズと新機能配信の進捗を可視化できます。

#### チームカンバン

[プロジェクトの **Issue ボード**](https://v46.scaledagileframework.com/team-kanban/) は、チームが作業の流れを視覚化し管理するのに役立ち、ボードの特定のステージに割り当てられたすべての Issue の合計「ウェイト」を追跡できます。

---

### プログラム

Scaled Agile モデルの[プログラム層](https://v5.scaledagileframework.com/program-and-solution-kanbans/)は、関連プロジェクトチームを含むサブグループです。このレベルでは、ラベルとボードを使ってプログラムインクリメントとアジャイルリリーストレインを定義・管理します。

#### アジャイルリリーストレイン

[アジャイルリリーストレイン](https://v46.scaledagileframework.com/agile-release-train/)は、特定のリリース目標を達成するためにプロジェクト横断のコラボレーションと作業のコーディネーションを可能にします。GitLab では、**グループレベルのボードとラベル**を使ってリリーストレイン内の特定のステージを定義し、プロジェクトレベルの Issue とマージリクエストがリリース準備に向けてどのように進行しているかを追跡します。

#### プログラムインクリメント

[プログラムインクリメント](https://v46.scaledagileframework.com/program-increment/)はアジャイルリリーストレインよりも短い時間枠で、GitLab では**グループレベルのボードとラベル**を使って管理されます。

---

### Large Solution

複雑なソリューションの複数の側面がどのように配信されるかを調整するために、Scaled Agile Framework の [Large Solution 層](https://v5.scaledagileframework.com/large-solution-safe/)は、プロジェクト横断のコーディネーションを促進するように設計されています。GitLab では、サブグループがプロジェクトと追加のサブグループの両方の監督と調整を可能にします。

#### Solution Intent

[Solution Intent](https://v46.scaledagileframework.com/solution-intent/)

#### Solution Train

[Solution Train](https://v46.scaledagileframework.com/solution-train/) は、特定のリリース目標を達成するためにプロジェクト横断のコラボレーションと作業のコーディネーションを可能にします。GitLab では、**グループのボードとラベル**を使ってソリューショントレイン内の特定のステージを定義し、プロジェクトレベルの Issue とマージリクエストがリリース準備に向けてどのように進行しているかを追跡します。

---

### ポートフォリオ

Scaled Agile Framework の最上位は、[ポートフォリオ](https://v5.scaledagileframework.com/portfolio-safe/)と戦略計画が将来の投資とビジネス目標に関する意思決定を駆動する場所です。GitLab では、グループはプロジェクトとサブグループの両方を含めることができ、戦略的なイニシアチブのレポート、追跡、管理を可能にします。

#### 戦略テーマ

[戦略テーマ](https://v46.scaledagileframework.com/strategic-themes/)は事実上、ポートフォリオレベルでの長期的な目標と目的です。GitLab では、グループレベルの**エピック**を使って全体テーマを定義できます。

#### エピック

[エピック](https://v46.scaledagileframework.com/epic/)は、特定のビジネス価値を提供するために必要な作業をパッケージ化し整理する方法です。GitLab では、エピックは複数のプロジェクトの作業を戦略的に整理する方法です。
