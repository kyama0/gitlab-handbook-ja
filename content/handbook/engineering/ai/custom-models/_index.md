---
title: Custom Models グループ
description: "Custom Models グループは、GitLab Duo の顧客向けモデルのオペレーション／インテリジェンスレイヤー、すなわちどのモデルが利用可能でどう選択されるか、顧客体験の健全性と接続性、そしてゲートウェイサービスのサーフェス（プロンプト、内部イベント、AIGW 課金）を所有します。"
upstream_path: /handbook/engineering/ai/custom-models/
upstream_sha: 18de125bd3131a62f0a7026bc69c7de124fc6c8a
lastmod: "2026-06-16T17:58:42+02:00"
translated_at: "2026-06-20T15:03:34Z"
translator: claude
stale: false
---

## ビジョン

Custom Models グループは、顧客固有のデータとユースケースをサポートする形で GitLab Duo の機能を支える、追加のカスタムモデルに注力します。

## ミッション、私たちが所有するもの

Custom Models は、GitLab の **顧客向けモデルインテリジェンスレイヤー** のエンドツーエンドのオーナーです。すなわち、どのモデルが利用可能か、どう選択されるか、顧客体験の健全性と接続性、そしてゲートウェイサービスのサーフェス（プロンプト、内部イベント、AIGW 課金）です。Customer zero、SaaS、Self-Managed、Dedicated にまたがる、1 つのチーム、フルスタックです。

私たちは、[DevOps ライフサイクル](/handbook/product/categories/#devops-stages)の [AI Powered ステージ](/handbook/product/categories/#ai-powered-stage)の [Custom Models グループ](/handbook/product/categories/#custom-models-group)に属する製品カテゴリーの、すべてのバックエンド面に責任を持ちます。製品の方向性は [Category Direction, Custom Models Management](https://about.gitlab.com/direction/ai-powered/custom_models/) のページにあり、私たちが扱う機能は [グループ別機能ページ](/handbook/product/categories/features/#custom-models)に列挙されています。

## 組織

このグループは 3 つの機能チームに編成されています。各機能チームは、その領域における Requests for Help (RFH) やサポートエスカレーションを含め、自らのスコープをエンドツーエンドで所有します（[カスタマーサポート](#customer-support--requests-for-help)を参照）。Staff Engineer は、必要に応じて複数の機能チームをサポートすることが期待されます。

### モデル選択 {#model-selection}

`.com` とセルフホストにまたがって、どのモデルが利用可能か、そしてそれらがどう選択されるかを所有します。

| スコープ | |
| --- | --- |
| モデルライフサイクル | Customer Zero、`.com`、Self-Managed、Dedicated にまたがるモデルの追加／削除 |
| 選択エンジン | Unit Primitive、大型／小型モデル、エージェント |
| 選択 UI | Customer zero、SaaS、Self-Managed、Dedicated |
| サポート | 新たに追加されたモデルのプロンプト、評価（eval）、ドキュメント |

Model Evaluation Infra からの評価結果は、両グループ間の共有レビューのケイデンスを通じて選択の意思決定に反映されます（[私たちのスコープ外にあるもの](#what-falls-outside-our-scope)を参照）。

### 健全性と接続性 {#health--connectivity}

診断サーフェスと、より広い範囲の顧客向けセットアップおよび接続性の問題を所有します。

| スコープ | |
| --- | --- |
| 診断 | Duo Health Check の診断サーフェス |
| セットアップと設定 | 顧客のセットアップと構成 |
| 接続性 | GitLab／AIGW／Models／DWS にまたがる接続性 |
| オペレーション | デバッグ、バージョンドリフト、関連するサポートエスカレーション |
| LLMOps の拡張 | モニタリング、オブザーバビリティ、LLM パフォーマンスの追跡、エラーの特定、そして将来的なモデル接続性の最適化 |

「Health」は意図的に広く取られています。診断サーフェス _および_ それらの診断が表面化させるべき障害モードの両方をカバーしており、診断を構築する人々が、その問題に対応する人々と同じであるようにしています。

### ゲートウェイサービス {#gateway-services}

ゲートウェイの上に位置するイベント駆動のサーフェス、すなわち流れ込むプロンプト、流れ抜けるテレメトリ、そして流れ出る課金／クレジットイベントを所有します。

| スコープ | |
| --- | --- |
| プロンプトレジストリ | ゲートウェイ上のプロンプト管理 |
| テレメトリ | 内部イベントとトラッキング |
| AIGW 課金 | 課金の AIGW 側、セルフホスト課金・SaaS 課金・オンデマンドクレジット・AWS Marketplace フローのためのメータリングと課金イベント |

> **課金の境界:** ゲートウェイサービスは課金の **AIGW 側**（メータリングと課金イベント）を所有します。購入とサブスクリプションの側、すなわち購買やプラン管理は、**Fulfillment** チームが所有します。
> **インストルメンテーションの境界:** Analytics Instrumentation は、ツール、内部イベント（Snowplow）、課金イベントのツール、そして Service Ping の収集を所有します。私たちは、ゲートウェイ／AIGW サーフェスのためのドメイン固有のイベント、課金イベント、メトリクスを所有し、そのツールを使ってそれらをインストルメントします。

### 機能チームへの編成方法

**Acting Engineering Manager:** Mohamed Hamda

**Engineering Manager & Engineers**

{{< team-by-manager-slug "mhamda" >}}

**Staff Engineer（クロスチーム）:** Manoj M J は機能チームを横断して貢献し、最も必要とされる場所でイニシアチブを引き受けます。

| 機能チーム | メンバー |
| --- | --- |
| モデル選択 | Julie Huang; Manoj M J（サポート） |
| 健全性と接続性 | Cindy Halim, Newick Lee; Manoj M J（メインチーム） |
| ゲートウェイサービス | Patrick Cyiza; Manoj M J（サポート） |

### 固定カウンターパート {#stable-counterparts}

他の機能チームの以下のメンバーが、私たちの stable counterpart です。

| **名前** | **ロール** |
| --- | --- |
| Jordan Janes | [Principal Product Manager](/job-description-library/product/product-manager/) |

## 私たちのスコープ外にあるもの {#what-falls-outside-our-scope}

組織内外のチームにとって境界を明確にするため、以下の領域はカウンターパートチームが所有します。作業がこれらの領域に触れる場合は、記載のオーナーを巻き込んでください。

| 領域 | オーナー | Custom Models との関係 |
| --- | --- | --- |
| サブスクリプションの購入／購買フロー、プラン管理 | Fulfillment | ゲートウェイサービスのカウンターパート。私たちは AIGW 側の課金／メータリングを所有し、彼らは購買とサブスクリプションを所有する。 |
| プロダクトアナリティクスのツールとインストルメンテーション | [Analytics Instrumentation](/handbook/engineering/data-engineering/analytics/analytics-instrumentation/) | ゲートウェイサービスのカウンターパート。私たちは内部イベントとトラッキングに彼らのツールを使用する。 |
| 生のゲートウェイインフラ、ルーティング、ストリーミング、セルフホスト AIGW | AI Platform Engineering (Duo Service Infra) | 彼らはインフラとしてのゲートウェイを所有し、私たちはその上で動作する顧客に見えるサービスサーフェスを所有する。 |
| モデル評価インフラ、サービスとしての CEF、ベンチマークパイプライン | AI Platform Engineering (Model Evaluation Infra) | 彼らは評価インフラを運用・保守し、私たちはモデル選択を推進するためにその結果を利用する。 |

## 私たちへの連絡方法

- Issue トラッカー: [`~group::custom models`](https://gitlab.com/dashboard/issues?sort=title_asc&state=opened&label_name[]=group::custom+models)
- Slack チャンネル: [#g_custom_models](https://gitlab.enterprise.slack.com/archives/C06DCB3N96F)
- ラベル購読: [`~group::custom models`](https://gitlab.com/groups/gitlab-com/-/labels?subscribed=&search=group%3A%3Acustom+models)

### 組織ラベル

Custom Models グループが所有する Issue には、適切に応じて以下のラベルを付けるべきです。

- `~"group::custom models"`
- `~"devops::ai-powered"`
- `~"section::data science"`
- `~"Category:Model personalization"`
- `~"Category:Self-Hosted models"`

加えて、Issue には関連する `~type:` とサブタイプのラベルを含めるべきです。

## 私たちの働き方

私たちのオペレーティングフレームワークは、オーナーシップを可視に保ち、進捗についてチームを誠実に保ち、優先順位が筋の通らないときに反論できる余地を作ります。それを官僚主義を加えることなく行います。

### 直接責任者 (DRI) {#directly-responsible-individuals-dri}

チームが現在取り組んでいるすべての Issue、機能、バグ修正、イニシアチブには、名前の付いた単一の **DRI** がいます。DRI は必ずしもすべての作業を行う人ではなく、それを前進させ、ブロックされない状態に保つ責任を持つ人です。

DRI であることは、次のことを意味します。

- あなたはタスクだけでなく **成果（outcome）** を所有します。行き詰まっているなら、尋ねられるのを待たずに自分から声を上げます。
- 少なくとも週に 1 回、計画用 Issue にステータスを更新します。
- 作業を委任できますが、説明責任はあなたに残ります。
- スコープ、優先順位、タイムラインが筋が通らない場合は、なぜかを明確に説明したうえで反論できます（そしてそうすべきです）。

DRI の割り当て方法:

- **新しい Issue:** 週次の同期で議論し、誰かが立候補するか提案されます。誰も立候補しない場合は、その理由を議論します。実は優先事項ではないのかもしれませんし、チームが過負荷なのかもしれません。
- **RFH とエスカレーション:** 関連する機能チームのトリアージ DRI が、オーナーシップを引き受けるか、コンテキストとともに明示的に引き継ぎます。
- DRI の割り当ては、誰が何を所有するかの唯一の信頼できる情報源であるチームの計画用 Issue で追跡されます。

DRI の再割り当ては、政治的なイベントではなく、通常の摩擦の少ないことです。それは（自然な流れではなく）**明示的に** 行われるべきであり、新しい DRI がゼロから始めずに済むだけの十分なコンテキストを引き継いで行われるべきです。

### 週次ステータス更新

各アクティブな DRI は、チームの計画用 Issue に短い非同期の更新を投稿します。数行であり、長編小説ではありません。

- 今週何が前進したか
- 何がブロックされていて、何が必要か
- 来週は何が次に来るか

例:

---

**非同期ステータス更新 YYYY-MM-DD**

**issue-title (link)**

- 進捗: ...
- ブロッカー: ...
- 現在のマイルストーンへの確信度: やや確信あり

**issue-title (link)**

- 進捗: ...
- ブロッカー: ...
- 現在のマイルストーンへの確信度: 非常に確信あり

**確信度のキー:** 確信なし · やや確信あり · 非常に確信あり

---

計画用 Issue 上の非同期更新がデフォルトであり、すべてのアクティブな作業の状態を確認できる唯一の場所です。既存のエンジニアリング同期は、主にブロッカーについて手を挙げるために使われます。出席は任意であり、参加できなくても（たとえばタイムゾーンの都合で）他に何も変わりません。

### 早めに手を挙げる

行き詰まっている、過負荷である、あるいは作業が予想より大きいと気づいたら、手を挙げてください。これは健全なチームの運営方法であり、失敗の兆候ではありません。

- 週次更新でフラグを立てます。
- 明確な依頼とともに Slack でチームにメンションします。「X について手伝ってほしい」「Z なので Y を引き継いでくれる人が必要」のように。
- ブロックされている項目は、週次同期で最初に議論されます。

### 反論すること、そして量より質

チームは、現在の優先順位に沿わない作業や、品質を損なう作業に対して反論する権限を与えられています。

- 反論には **理由** を添えます（「私たちは X と Y にコミットしているので、このマイルストーンではこれを引き受けられません」）。
- それは依頼した人ではなく、作業に向けられます。
- それは（Issue へのコメントで十分です）文書化され、意思決定の記録が残るようにします。

私たちは、既存のモデルや構成が堅牢になるまで、新しいモデルや構成を追加するプレッシャーに抵抗します。新しいモデルのオンボーディングは、軽量なレディネスチェックを通ります。

1. ドキュメントは完成しているか？

1. 既知の問題は解決されているか？

1. サポートはチケットに対応できる体制になっているか？

「これはまだ追加しません。まず先に正しくすべきことはこれです」は、有効で奨励される回答です。

### ケイデンス

| アクティビティ | 頻度 | オーナー |
| --- | --- | --- |
| 週次同期（ブロッカーのレビュー、DRI の割り当て） | 週次 | EM |
| 計画用 Issue へのステータス更新 | 週次（非同期） | 各アクティブな DRI |
| 新しい RFH／エスカレーションのトリアージ | 継続的 | 機能チームごとのトリアージ DRI |
| プロセスの健全性に関するレトロスペクティブ | 月次 | チーム |

## エピックと Tech Lead を使った作業のスコーピング

エピックは、単一の Issue より大きいあらゆる作業項目、すなわち新機能、複雑なリファクタリング、バグに対する、スコープの主要な定義です。エピック内の Issue が作業項目の全スコープを構成します。それらがすべてクローズされると作業は完了し、エピックはクローズされます。エピックは明確な改善を加えるイテレーションを内包すべきですが、エピックが必ずしも機能全体を表すわけではありません。機能全体には複数のエピックが必要になることもあります。

エピックによって定義された作業の技術的オーナーシップは、エピックにアサインされ、スコープが正しいことを保証するエンジニアである **Tech Lead** に委任されます。Tech Lead は EM、PM、他のエンジニアと協働します。チームのどのエンジニアも、Tech Lead 自身を含め、Kanban プロセスを使って自分自身をアサインし、エピック内の Issue に取り組めます。

## チームのマイルストーン計画プロセス

Custom Models は、[プロダクト開発フロー](/handbook/product-development/how-we-work/product-development-flow/)と[クロスファンクショナルな優先順位付け](/handbook/engineering/workflow/cross-functional-prioritization/)に従います。チームは計画用 Issue とボードを使って計画プロセスを管理します。これを容易にするための[計画自動化](https://gitlab.com/gitlab-org/ai-powered/custom-models/custom-models/-/blob/main/doc/planning/index.md)スクリプトが利用可能です。

各マイルストーンの[計画用 Issue](https://gitlab.com/groups/gitlab-org/-/epics/13440) は PM が作成し、PM、EM、stable counterpart の間で今後の作業を調整するために使われます。

各マイルストーン中に、次のマイルストーンの計画が完了されます。

1. 計画用 Issue とボードの作成（EM または PM）
1. [自動化](https://gitlab.com/gitlab-org/ai-powered/custom-models/custom-models/-/merge_requests/95)による毎週のリファインメント Issue の作成
1. マイルストーンの候補 Issue の特定と計画ボードへの追加（PM、EM）
1. チームメンバーのキャパシティプランニング（EM）
1. ウェイトを使った工数の見積もり（エンジニアと EM）
1. 計画ボードを確定するための合同計画セッション（PM、EM）
1. エンジニアへの作業の割り当て、`~Deliverable` ラベルの追加、計画用 Issue の更新（EM）

### 計画用 Issue

毎月、PM が自動化と [Custom Models Planning テンプレート](https://gitlab.com/gitlab-org/ai-powered/custom-models/custom-models/-/blob/main/.gitlab/issue_templates/milestone-planning-template.md)を使って計画用 Issue を作成します。これは特定のマイルストーンについての計画チームメンバー（PM、EM）の議論の場であり、計画ボードとビルドボードにリンクします。

### 計画ボード {#planning-board}

[計画ボード](https://gitlab.com/groups/gitlab-org/-/boards/7762631?milestone_title=17.7&label_name[]=group%3A%3Acustom%20models) は各マイルストーンについて PM が作成し、カテゴリ別に厳選された Issue のリストです。Issue で過負荷になることがあり、超過分は計画コール中に次のマイルストーンまたは Next 1-3 Milestones ボードに移動されます。

PM は `~workflow::planning breakdown` で Issue にマークを付け、EM に対してエンジニアに Issue の説明をレビューし、それが明確で開発の準備ができていることを確認するよう依頼するシグナルを送ります。エンジニアはその後ウェイトをアサインし、`~workflow::ready for development` ラベルを適用します。

### 開発準備完了ステータス {#ready-for-development-status}

作業の準備ができた Issue には `workflow::ready for development` のラベルが付けられます。このラベルが付いた Issue のみが、Deliverable としてエンジニアにアサインされるべきです。調査が必要な場合は `~spike` ラベルがアサインされます。スパイクのスコープは明確に述べられるべきであり、その成果はコードか、洗練された Issue になることがあります。

### キャパシティプランニング

EM は、チームのキャパシティを計算し、優先順位に基づいてリリースに作業レーンを割り当てる方法を維持します。EM は計画用 Issue にチームのキャパシティと DRI を投稿します。

### ビルドボード {#build-board}

EM は、前のマイルストーンの遅れ、PM の好み、ウェイト、優先順位に基づいて [計画ボード](#planning-board) から Issue を選びます。EM はその後リリース内の各 Issue に `~Deliverable` ラベルを適用し、それをエンジニアにアサインします。Issue はリリース全体を通じてビルドボードで追跡されます。

### say-do ratio（言ったことを必ずやる比率） {#say--do-ratio}

say-do ratio（言ったことを必ずやる比率）は `完了した Issue / アサインされた Issue` を使って計算されます。

- `~Deliverable` ラベルとともにビルドボードに追加された Issue が、アサインされた Issue です。
- マイルストーンの終わりまでにクローズされた Issue が、完了した Issue です。

### Issue ウェイト {#issue-weights}

各 Issue には、それをクローズするための作業の見積もりとしてウェイトがアサインされます。ウェイト 1 はおおよそ作業日 2 日分の工数です。Issue は一般にウェイト 3 を超えてウェイト付けされません。より大きなウェイトは、その Issue をさらに分解すべきであることを示します。

### 計画ボードとデリバリーボード {#planning-and-delivery-boards}

[プロダクト開発フロー](/handbook/product-development/how-we-work/product-development-flow/)のすべてのワークフローステータスが有効です。[Next 1-3](https://gitlab.com/groups/gitlab-org/-/boards/7472817?milestone_title=Next%201-3%20releases&label_name[]=group%3A%3Acustom%20models) と [Next 4-6 マイルストーン](https://gitlab.com/groups/gitlab-org/-/boards/7472821?milestone_title=Next%204-6%20releases&label_name[]=group%3A%3Acustom%20models)のボードは、リファインメントが必要な Issue や作業の準備ができた Issue を収容します。

| ボード | フィルター | カラム |
| --- | --- | --- |
| 計画ボード | Milestone, `~group::custom models` | `~type::bug`, `~type::maintenance`, `~type::feature` |
| ビルドボード | Milestone, `~group::custom models`, `~Deliverable` | `~workflow::ready for development`, `~workflow::in dev`, `~workflow::in review`, `~workflow::awaiting security release`, `~workflow::blocked` |
| 次の 1〜3 マイルストーン | `%Next 1-3 Milestones` | `~workflow::problem validation`, `~workflow::design`, `~workflow::solution validation`, `~workflow::planning breakdown`, `~workflow::ready for development` |
| 次の 4〜6 マイルストーン | `%Next 4-6 Milestones` | 次の 1〜3 マイルストーンと同じ |

### Issue マイルストーン {#issue-milestones}

- Issue は、取り組む予定であるか現在取り組まれている場合、現在または次のマイルストーンにアサインされます。
- Issue が取り組まれることを意図していない場合は `%Backlog` がアサインされますが、コミュニティの貢献によって対応される可能性はあります。
- `%Awaiting Customer Feedback` は、顧客の関心待ちで取り組まれる可能性があります。

[Issue トリアージレポート](https://gitlab.com/gitlab-org/quality/triage-reports/-/issues/17099)は、マイルストーンのアサインが必要な Issue を強調表示します。

## カスタマーサポートと Requests for Help {#customer-support--requests-for-help}

顧客（既存および見込み）とのコールをよりよくサポートするため、Custom Models はカスタマーサポートのリクエストを優先するエンジニアを提供し、負荷と知識がチーム全体で共有されるようにします。

**RFH は、それが属するスコープの機能チームが所有します**。ゲートウェイサービスはゲートウェイの RFH を、健全性と接続性チームはセットアップ／接続性の RFH を、というように処理します。各機能チームは **トリアージ DRI** をアサインし、その DRI が RFH を解決まで推進するか、コンテキストとともに明示的に引き継ぎます。サポートリクエストは 24 時間以内に確認されるべきです。

顧客のために助けを求めるには、[request for help issue](https://gitlab.com/gitlab-com/request-for-help/-/issues/new?description_template=SupportTemplateRequest-SelfHostedModels) を作成し、[#g_custom_models](https://gitlab.enterprise.slack.com/archives/C06DCB3N96F) で共有してください。同じチャンネルで他のチームメンバーに助けを求めることをためらわないでください。

### サポートにおけるトリアージ DRI の責任

- [Requests for Help](https://gitlab.com/gitlab-com/request-for-help/-/issues/?sort=created_date&state=opened&label_name%5B%5D=group%3A%3Acustom%20models&first_page_size=20) をトリアージする。
- [#g_custom_models](https://gitlab.enterprise.slack.com/archives/C06DCB3N96F) と [#custom_model_rfh](https://gitlab.enterprise.slack.com/archives/C0B4URWF2PN) で受信するリクエストをモニタリングする。
- request-for-help issue が作成されていることを確認する。
- Slack でサポートの質問に回答し、可能な限りドキュメントへ誘導する。
- 必要なときに Solution Architect や Sales 担当者が主導する顧客コールに参加し、解決されるかサポートエンジニアに引き継がれるまで顧客とのコミュニケーションを所有する。
- 成果に基づいて行動する:
  1. SA と顧客がより自立できるようドキュメントを追加できるか？
  1. より良いツールが役立つか？ 必要な変更を伴う Issue を作成する。
  1. 私たちが見逃したバグだったか？ 次回どう回避するか？
- 不在になる場合は事前に EM に通知する。
- 必要なコンテキストをサポートの次のエンジニアに引き継ぐ。

サポートのエンジニアに期待され **ない** ことは次のとおりです。

- 希望する勤務時間外に対応可能であること。ただし一部のリクエストは緊急であり、翌営業日の最優先で取り組むべきです。そうした状況では EM と PM に相談してください。
- 特定のケースで合意された場合を除き、顧客コールを主導すること。
- 特定のケースで合意された場合を除き、デモを行うこと。

## コミュニケーション

Custom Models は以下のガイドラインに基づいてコミュニケーションを行います。

1. 同期ミーティングよりも常に非同期コミュニケーションを優先する。
1. 非同期が非効率だと判明したときに[同期コール](#ad-hoc-sync-calls)を設定することをためらわない。ただしチームメンバーと共有するために録画するようにする。
1. [デフォルトで透明性](/handbook/security/transparency-by-default/)。
1. 仕事関連のコミュニケーションの主要チャンネルは [#g_custom_models](https://gitlab.enterprise.slack.com/archives/C06DCB3N96F) Slack チャンネルです。
1. 内部のチーム Issue とプロジェクトは [`gitlab-org/ai-powered/custom-models`](https://gitlab.com/gitlab-org/ai-powered/custom-models) の下に名前空間化されています。

## メンションの確認

Slack または GitLab で名前を指名してメンションされた場合は、スレッドへのコメントまたは絵文字で確認してください。

## 休暇

チームメンバーは、[有給休暇（Paid Time Off）](/handbook/people-group/time-off-and-absence/time-off-types/)を「Workday」Slack アプリに追加し、EM がキャパシティプランニング中に正しい休暇日数を使えるようにすべきです。可能な場合は、マイルストーン 1 つ分前もって休暇を追加してください。

直前の計画外の PTO のニーズは常にあり得ます。必要な休暇は取得してください。ただしそれを Workday に入力し、できるだけ早く EM とコミュニケーションを取ってください。

## アドホックな同期コール {#ad-hoc-sync-calls}

私たちはデフォルトで非同期コミュニケーションを使って運用します。同期での議論が有益なときもあり、チームメンバーには必要に応じて必要な人々と同期コールをスケジュールすることを推奨します。

## ブログ記事

Custom Models チームメンバーが執筆したブログ記事:

- [Developing GitLab Duo: How we validate and test AI models at scale](https://about.gitlab.com/blog/2024/05/09/developing-gitlab-duo-how-we-validate-and-test-ai-models-at-scale/)、[@susie.bee](https://gitlab.com/susie.bee)
- [GitLab Duo Self-Hosted: Enterprise AI built for data privacy](https://about.gitlab.com/blog/2025/02/27/gitlab-duo-self-hosted-enterprise-ai-built-for-data-privacy/)、[@susie.bee](https://gitlab.com/susie.bee)
- [Speed meets governance: Model Selection comes to GitLab Duo](https://about.gitlab.com/blog/speed-meets-governance-model-selection-comes-to-gitlab-duo/)、[@susie.bee](https://gitlab.com/susie.bee)
