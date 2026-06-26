---
title: "詳細運用ワークフロー"
description: "ProdSecEng チーム固有の運用ワークフローとプロセス"
upstream_path: /handbook/security/product-security/security-platforms-architecture/product-security-engineering/detailed-workflow/
upstream_sha: c9aef34f52e9f619472aeed4981f6aaec80de2b3
translated_at: "2026-06-26T20:39:13+09:00"
translator: codex
stale: false
lastmod: "2026-06-26T14:40:46+12:00"
---

ProdSecEng は、計画ケイデンス、優先度ラベル、サイジング/重み、計画外作業の追跡について、チームチャーターで定義されている[運用モデル](/handbook/security/product-security/security-platforms-architecture/product-security-engineering/#operating-model)に従います。このページでは ProdSecEng 固有のワークフローを取り扱います。

## バックログ管理

`~ProdSecEng Candidate` ラベルは、Issue を ProdSecEng の潜在的な作業として識別します。誰でもこのラベルを追加できます。チームは月次で（マイルストーン計画の一環として）これらの Issue をレビューおよびトリアージし、適切なボードに移動します:

- [内部 Issue ボード (gitlab-com)](https://gitlab.com/groups/gitlab-com/-/boards/7098644) — ProdSec 自動化のニーズ
- [製品 Issue ボード (gitlab-org)](https://gitlab.com/groups/gitlab-org/-/boards/7098625) — プロダクトセキュリティの強化、舗装された道路

### 作業を引き受ける

Issue にコミットするとき、私たちは:

1. チームと、または他の ProdSec やセキュリティ部門のチームと Issue について話し合い、高レベルの工数、価値、優先度を評価します。
2. `~"Product Security Engineering Team"` ラベルを追加します。
3. 内部の自動化/ツールの Issue の場合: [インテーク自動化リクエスト基準](/handbook/security/product-security/security-platforms-architecture/security-interlock/prodsec-to-product-workflow/#intake-workflow)を満たしているか確認します。
4. 製品の Issue の場合: `group::` ラベル（または最善の努力）を介して関連する PM/EM を特定し、ソリューションと優先度について整合し、リリース後にオーナーシップが移転することをフラグ付けします。
5. 適切な `ProdSecEngMetric::` [指標ラベル](/handbook/security/product-security/security-platforms-architecture/product-security-engineering/#success-metrics)、[優先度](/handbook/security/product-security/security-platforms-architecture/product-security-engineering/#priority)ラベル、[重み](/handbook/security/product-security/security-platforms-architecture/product-security-engineering/#sizing-and-estimates)、判明している場合はマイルストーンを適用します。現在のマイルストーンに持ち込まれた場合は [`~Unplanned`](/handbook/security/product-security/security-platforms-architecture/product-security-engineering/#unplanned-work) ラベルを適用します。

### バックログから作業を取り除く

Issue を引き受けないと決定した場合、私たちは:

1. `~"Product Security Engineering Team"` または `~ProdSecEng Candidate` ラベルを削除します
2. 理由をコメントします
3. 適切な EM、PM、またはチームに最善の努力で `@-mention` します
4. Issue が公開されている場合、`~Seeking community contributions` の適用を検討します。

## リファインメントと計画

[Single Engineer Groups](/handbook/company/structure/#single-engineer-groups) と同様に、各プロダクトセキュリティエンジニアは*「最小規模で製品開発のすべて（プロダクトマネジメント、エンジニアリング、デザイン、品質）を包含します。彼らは GitLab の大規模な部門から自由に学び、それらと協力できますが、不必要に遅くなる代償を払うべきではありません」*。これは、すべての ProdSecEng チームメンバーが優先順位付け、検証、リファインメント、ソリューション設計に貢献できることを意味します。セキュリティエンジニアリングマネージャーが最終的な責任を持ち、DRI です。

[製品開発フロー](/handbook/product-development/how-we-work/product-development-flow/)に記述された Issue ステータスとフェーズを使用しており、必要のない部分はスキップする柔軟性があります。製品貢献の最後に、機能はプロダクトおよびエンジニアリングチームに引き渡されます。

### リファインメントケイデンス

リファインメントは常に通常の計画立案中（マイルストーンや四半期計画など）に行われ、ときには場当たり的に行われることもあります（たとえば、Issue が発見され、優先順位付けのために工数を理解する必要がある場合）。

### リファインメントプロセス

リファインメント中、私たちは:

1. リファインメントされていない Issue を選択（`New` ステータスの Issue、`~ProdSecEng Candidate` ラベルが付いた Issue、または以前にリファインメントされたが古くなった Issue）。リファインメントを Issue ごとに約 1 時間にタイムボックスします。
2. 解決すべき目標または問題を理解します。作成者または関連するチームに質問します。Issue の分割やエピックの作成を検討します。
3. 誰かが [Definition of Done](#definition-of-done)、受け入れ基準、目標、要件を理解できるよう詳細を追加します。
4. 潜在的なソリューションを調査します。必要に応じてプロダクト、エンジニアリング、またはセキュリティチームと連携します。
5. Issue が [Definition of Ready](#definition-of-ready) を満たすまで更新します。

## Definition of Done {#definition-of-done}

作業項目は、一般に次の場合に完了したと見なされます:

1. 受け入れ基準が満たされている。
2. コード変更: 作成、レビュー、CI 通過、マージ、該当する環境にデプロイ済み。
3. 関連する場合、パフォーマンスとエラーの監視が設定されている。
4. ドキュメントが作成または更新されている。
5. クロスチームコミュニケーションが完了している。

## Definition of Ready {#definition-of-ready}

一部のプロジェクトは Issue テンプレートを使用しています。具体的なガイダンスがない場合は、以下の基準を使用してください。

### 簡単または小さなタスク (重み < 3)

1. コンテキスト、提案、(該当する場合) 「なぜ?」「いつ?」「誰が関与する必要があるか?」に答える技術的な実装計画を含む説明を記述。
2. 受け入れ基準をチェックボックスとして定義。
3. [重み](/handbook/security/product-security/security-platforms-architecture/product-security-engineering/#sizing-and-estimates)と[優先度ラベル](/handbook/security/product-security/security-platforms-architecture/product-security-engineering/#priority)を割り当てまたは更新。
4. まだ実施されていない場合、`~Product Security Engineering Team` と `~ProdSecEngMetrics::` [指標ラベル](/handbook/security/product-security/security-platforms-architecture/product-security-engineering/#success-metrics)を設定。
5. `Ready for Development` の Issue ステータスが設定されている

### 中程度または複雑なタスク (重み >= 3)

シンプルなタスクのすべてに加えて:

1. 関連するリスク（チーム、タイムライン、実装、安定性、セキュリティ）について話し合い、文書化。
2. 設計からデプロイまでの開発ステップ、ドキュメント更新、監視/アラートの考慮事項を含む技術的な実装計画を定義。
3. 受け入れ基準が適切な環境へのデプロイとステークホルダーへの通知を含むことを確認。
4. ステータスを `Ready for Development` に設定する前に、Issue を（マネージャーまたはチームメンバーによって）ピアレビューしてもらう。

## マイルストーン計画

ProdSecEng は [GitLab 製品マイルストーン](/handbook/product/product-processes/milestones/)を中心に作業を計画し、チームチャーター内の[計画とマイルストーンのプロセス](/handbook/security/product-security/security-platforms-architecture/product-security-engineering/#planning-and-milestones)に従います。

各マイルストーンには、[マイルストーン計画 Issue](https://gitlab.com/gitlab-com/gl-security/product-security/product-security-engineering/product-security-engineering-team/-/issues/?label_name%5B%5D=Milestone+Planning) が 1 つあり、[テンプレート](https://gitlab.com/gitlab-com/gl-security/product-security/product-security-engineering/product-security-engineering-team/-/issues/new?issuable_template=milestone_planning)を使用して作成されます。この Issue は、そのマイルストーンに対するすべての計画の決定と議論の真実の情報源です。

### 計画プロセス

**計画準備:**

1. 現在のマイルストーンの計画が確定した直後にマイルストーン計画 Issue を作成。
2. 正しいマイルストーン番号、四半期、日付で Issue の説明を更新。
3. チームメンバーがキャパシティテーブルに記入: 可用性（PTO/休日を除く平日）と作業キャパシティ（G&D、ソーシャル、管理などの非作業時間を除いた可用性 — 不明な場合は週 1 日と想定）。
4. レトロスペクティブテンプレートを使用してレトロスペクティブのサブタスクを作成。

**計画立案:**

1. 四半期向けに優先順位付けされたオープンエピックをレビューし、関連する Issue のマイルストーンを更新。
2. Issue Parking Lot をレビュー: コミットしたい項目をマイルストーンに移動し、残りはそのままにする。
3. Issue ボード（`~Product Security Engineering Team` と `~ProdSecEng Candidate`）と親 FY 計画エピックを他の候補作業についてレビュー。
4. 各計画作業項目に明確な定義、重み、`~ProdSecEngMetric::*` および `~priority::*` ラベル、`Ready for Development` のステータス（またはそこに到達する明確な道筋）があることを確認。
5. 親 FY エピックで合意された計画/計画外比率を使用して、計画された総重みを利用可能なキャパシティに対して確認。過度にコミットされている場合は、作業を削除しステークホルダーを更新。
6. チームメンバーがレビューしフィードバックを提供。フィードバックが対処されたら、マイルストーン開始日の少なくとも 3 日前までに計画が確定。

**計画クローズダウン:**

1. 次のマイルストーンの計画 Issue を開き、残りの Parking Lot 項目を移動。
2. レトロスペクティブが完了し、フォローアップアクションが記録されたことを確認し、Issue をクローズ。

### 計画外の作業

マイルストーンの途中で追加された項目は、Issue にマイルストーンが設定され、`~Unplanned` ラベルが適用されるべきです。これらは計画 Issue で追跡され、時間経過とともに計画/計画外のキャパシティ分割を評価できます。

### レトロスペクティブ

各マイルストーン後、チームは計画 Issue のサブタスクとして取得された非同期のレトロスペクティブを開催します。項目はマイルストーン中またはその後にいつでも追加できます。これはマイルストーンが終了してから 1 週間後に完了します。

## 開発

### オープンソースへの貢献

可能な場合、私たちは GitLab が依存している依存関係に直接新機能やセキュリティ改善を貢献し、それらの強化が誰にとっても恩恵となるようにします。これらの貢献は外部リポジトリで起こるため、私たちのラベルでは追跡できません。そのような場合、私たちは貢献した変更を含むバージョンに依存関係を更新するために作成するマージリクエストに、適切なラベルを適用すべきです。

### マージリクエストレビュー

他のチームが所有するプロジェクトについては、彼らのレビュー慣習に従います。

ProdSecEng が所有するプロジェクトについては:

- コラボレーションとナレッジ共有を促進するため、デフォルトで他の ProdSecEng チームメンバーからのレビューをリクエストする。
- 小規模なチームとして、徹底したレビューが常に迅速に行われるとは限らないことを認識しています — ナレッジ共有 vs ベロシティのトレードオフをケースバイケースで評価する。
- ブロッキングしている、時間に敏感、または緊急のニーズを解決している場合は、正式なレビューをスキップする。
- 他のチームメンバーが書いたツールの Issue を引き受ける。

### プロジェクト名前空間

私たちは、作業を実行する対象のステークホルダーの名前空間をデフォルトとします:

- GitLab 製品への貢献: 関連する製品リポジトリ
- AppSec 作業: [AppSec ツール名前空間](https://gitlab.com/gitlab-com/gl-security/product-security/appsec/tooling)
- チームリポジトリ: [ProdSecEng ツール名前空間](https://gitlab.com/gitlab-com/gl-security/product-security/product-security-engineering/tooling)

## ツール統合

ProdSecEng の主要な重点領域の 1 つは、カスタム ProdSec ツールを GitLab 製品に統合することです。これに関する完全なライフサイクル — インテークから共同作成、保守、廃止まで — は [ProdSec to Product ワークフロー](/handbook/security/product-security/security-platforms-architecture/security-interlock/prodsec-to-product-workflow/) で定義されています。

このセクションでは、ツール統合作業の追跡と実行のための ProdSecEng 固有の機構について説明します。

### 追跡

ProdSecEng は、すべてのツール、それらのパスフォワードカテゴリ、保守の詳細を一覧化したツールインベントリを[内部ハンドブック](https://internal.gitlab.com/handbook/security/product_security/product_security_engineering/#project-inventory) (GitLab チームメンバーのみアクセス可能) で保守しています。

統合中の各ツールについて:

- 作業を整理するためにツール統合エピックが作成される
- 機能ごとに `~ProdSecEngMetric::Tooling Integration` ラベルが付けられた子エピックが作成される
- 最終的に所有するチームと調整するためにツール引き渡しエピックまたは子 Issue が作成される

### 機能の分割

私たちはツールを機能の個別の単位に分割します — アプリケーションが行う異なるもの（ユーザー向けまたは基盤的なもの）。たとえば、To-do リストは次のように分割できます: 項目の作成、表示、編集、削除、並べ替え、カテゴライズ。これは、価値を理解し、実行可能な作業項目を作成し、並列化を可能にするのに役立ちます。

### ツール引き渡しエピック

製品に組み込まれる機能については、それを所有するチームと調整するために早期に引き渡しエピックを作成します。これらのエピックは引き渡しの決定に対する単一の真実の情報源を確立し、所有チームを特定するのに役立ち、Definition of Done、機能フラグ、ロールアウト、移行に関するコラボレーションを可能にします。

### 廃止 Issue

カスタムツールを廃止するための高レベルの要件を、[廃止テンプレート](https://gitlab.com/gitlab-com/gl-security/product-security/product-security-engineering/product-security-engineering-team/-/work_items/new?description_template=sunset_tooling) を使用して追跡します。Issue は要件が達成されるとクローズされます。より広範な移行と廃止プロセスについては、[移行と廃止ワークフロー](/handbook/security/product-security/security-platforms-architecture/security-interlock/prodsec-to-product-workflow/#transition-and-sunset-workflow)を参照してください。

### ステップバイステッププロセス

**統合作業の開始:**

1. 作業を整理するためにツール統合エピックを作成
2. その子としてツール引き渡しエピックまたは Issue（作業の規模に応じて）を作成
3. ツールが[内部ハンドブックインベントリ](https://internal.gitlab.com/handbook/security/product_security/product_security_engineering/) に一覧化されていることを確認

**計画立案中:**

1. 存在しない場合は[アーキテクチャ設計ワークフロー](/handbook/engineering/architecture/workflow/)を作成/文書化
2. 機能ごとに子エピックを作成（`~ProdSecEngMetric::Tooling Integration` でラベル付け）
3. 作業の開始順序を推奨

**開発中 ([共同作成ワークフロー](/handbook/security/product-security/security-platforms-architecture/security-interlock/prodsec-to-product-workflow/#co-create-workflow)):**

1. 機能エピックの下に Issue を作成
2. 引き渡しエピックで PM と EM を関与させる: 整合を確認、懸念事項を議論、Definition of Done と引き渡し基準について合意

**貢献完了後:**

1. 適切な場合、関連する廃止 Issue をクローズ
2. 内部ユーザーを移行しツールを廃止するために [移行と廃止ワークフロー](/handbook/security/product-security/security-platforms-architecture/security-interlock/prodsec-to-product-workflow/#transition-and-sunset-workflow) を開始
