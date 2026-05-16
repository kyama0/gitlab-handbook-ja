---
title: Product Data Insights
description: Product Data Insights チームのハンドブック
upstream_path: /handbook/product/groups/product-analysis/
upstream_sha: 1e195b58b9f249ff10bd0e705106c320fee86141
translated_at: "2026-05-13T12:00:00Z"
translator: claude
stale: false
lastmod: "2026-05-01T09:23:47-07:00"
---

## Product Data Insights ハンドブック

Product Data Insights グループは、プロダクトアナリストのチームで構成されています。このグループは Enterprise Data & Insights 組織にレポートし、GitLab プロダクト組織のサポートおよび GitLab 全体のプロダクトデータ関連分析のアナリティクスチームとして機能します。

### チームメンバー

Product Data Insights は小さい（しかし強力な）チームです。プロダクト部門をサポートするため、各アナリストは1つ以上のセクションまたはチームを担当するようアサインされています。

| 名前 | タイトル | プロダクトセクションまたはチーム |
| --- | --- | --- |
| [Lily Fisher](https://gitlab.com/lmai1) | [Senior Product Analyst](/job-description-library/product/product-analyst/#senior-product-analyst) | [AI](/handbook/product/categories/#ai-section) |
| [Nicole Hervas](https://gitlab.com/nhervas) | [Senior Product Analyst](/job-description-library/product/product-analyst/#senior-product-analyst) | [CI](/handbook/product/categories/#ci-section), [CD](/handbook/product/categories/#cd-section) |
| [Matthew Petersen](https://gitlab.com/matthewpetersen) | [Senior Product Analyst](/job-description-library/product/product-analyst/#senior-product-analyst) | [Dev](/handbook/product/categories/#dev-section)  |
| [Dave Peterson](https://gitlab.com/dpeterson1) | [Staff Product Analyst](/job-description-library/product/product-analyst/#staff-product-analyst) | [Sec](/handbook/product/categories/#sec-section) |
| [Neil Raisinghani](https://gitlab.com/nraisinghani) | [Staff Product Analyst](/job-description-library/product/product-analyst/#staff-product-analyst) | [Fulfillment](/handbook/product/categories/#fulfillment-section) |
| [Mathieu Weary](https://gitlab.com/mweary) | [Staff Product Analyst](/job-description-library/product/product-analyst/#staff-product-analyst) | [AI](/handbook/product/categories/#ai-section) |

## ハンドブックの内容

- [Dashboards, Analysis, & Insights](/handbook/product/groups/product-analysis/dashboards-analysis-insights/)
- [Team Processes](/handbook/product/groups/product-analysis/team-processes/)
- [Product Data Insights Data Models Cheat Sheet](/handbook/product/groups/product-analysis/data-model-cheat-sheet/)
- [Crash Course for Product Stage Resources (Including Section::Growth)](/handbook/product/groups/product-analysis/crash-course/)
- [Experimentation Design & Analysis](/handbook/product/groups/product-analysis/experimentation/)
- [dbt Cheat Sheet for Functional Analysts](/handbook/product/groups/product-analysis/dbt-cheat-sheet/)

## 私たちと一緒に働く

Product Data Insights グループは2週間のイテレーションで作業します。これによって作業の計画と優先順位付けの方法とタイミングが決まります。イテレーションは木曜日に始まり、水曜日に終わります。

現在のイテレーションは [こちら](https://gitlab.com/groups/gitlab-data/-/boards/2973914) で確認できます。

### Issue の受付 {#issue-intake}

すべての Product Data Insights のリクエストについて、[Product Data Insights プロジェクト](https://gitlab.com/gitlab-data/product-analytics/-/issues) で Issue を作成し、`Team::PDI` と `product data insights` ラベルを適用して、以下のガイドラインに従ってください。

`Team::PDI` ラベルを持つすべてのデータ Issue は、[Product Data Insights ボード](https://gitlab.com/groups/gitlab-data/-/boards/2959103) に表示されます。

#### Issue テンプレート

リクエストのタイプに応じて適切なテンプレートを選択し、できるだけ多くの質問に答えてください。事前により多くの情報とコンテキストがあるほど、トリアージと Issue への取り組み開始が速くなります。

| リクエストタイプ | テンプレート |
| --- | --- |
| アドホック / デフォルトリクエスト | [Ad Hoc Request](https://gitlab.com/gitlab-data/product-analytics/-/issues/new?issuable_template=Ad%20Hoc%20Request) |
| PI チャートの新規作成または既存の更新 | [PI Chart Help](https://gitlab.com/gitlab-data/product-analytics/-/issues/new?issuable_template=PI%20Chart%20Help) |
| 実験分析 | [Experiment Analysis Request](https://gitlab.com/gitlab-data/product-analytics/-/issues/new?issuable_template=Experiment%20Analysis%20Request) |
| イテレーション計画 | [Iteration Planning](https://gitlab.com/gitlab-data/product-analytics/-/issues/new?issuable_template=Iteration%20Planning) |

#### 提出期日

次のイテレーションで検討対象とするため、次のイテレーション開始前の月曜日 EOD までにすべての Issue をオープンしてください。緊急の事項が発生することは理解していますが、計画された作業については提出期日を遵守するよう努めてください。

### Issue の優先順位付け

PDI チームは、作業のスケジューリング時に2つの異なる優先順位を考慮し、それぞれをスコープラベルでキャプチャします。

1. `pm-priority::`
1. `pdi-priority::`

#### PM 優先順位

PM (Product Manager) 優先順位は、PM（またはそのグループ）がバックログにオープンしている他の Issue と比較した、Issue の相対的な優先順位をキャプチャします（該当する場合）。一般に、すぐにアクションを取れて [会社の KPI](/handbook/company/kpis/) に影響を与える Issue ほど、優先順位が高くなります。

PM の方には、リクエストの相対的な優先順位を示すために `pm-priority::` ラベルを Issue に適用するようお願いします。

| ラベル | 優先順位 |
| ----- | -------- |
| `pm-priority::1` | 高 および/または 緊急 |
| `pm-priority::2` | 中 |
| `pm-priority::3` | 低、非緊急 |

#### PDI 優先順位

PDI 優先順位は、個別のアナリストが所有します。チームマネージャーは、重要性とキャパシティに基づいて優先順位を調整します。チームは、Enterprise Data & Insights のリーダーシップおよび/またはプロダクトリーダーシップとともに、トレードオフ（必要な場合）に取り組みます。

PM 優先順位は PDI 優先順位を決定する入力です。しかし、チームの作業の範囲はセクションサポートを超え（例: クロスファンクショナルなイニシアチブ）、その他の考慮事項もあります。

PDI 優先順位ラベルは、トリアージと計画の一環として Product Data Insights チームによって追加されます。

| ラベル | 優先順位 |
| ----- | -------- |
| `pdi-priority::1` | **高 / 緊急優先:** 現在のイテレーション内および/またはデータが利用可能になり次第完了が必要な分析リクエスト。Priority 1 のすべてのリクエストには、直接的な KPI への影響および/またはエグゼクティブの可視性があるべきです。例には、機能ローンチのメトリクス、エグゼクティブレベルのダッシュボード、ボードメトリクスの検証が含まれます。 |
| `pdi-priority::2` | **中優先:** ほとんどのリクエストはこれに該当します。意思決定に必要なネット新規分析、レポーティング（ダッシュボード作成）、または探索的分析の可能性があります。 |
| `pdi-priority::3` | **低優先 / コンサルタント:** 分析の結果として即時の直接アクションがない分析、および/またはアナリストのバックログに入れられる他の低レベルで非緊急のリクエスト。 |

ほとんどの Issue は `pdi-priority::2` と `pdi-priority::3` に該当します。

### イテレーション計画 {#iteration-planning}

最終的なコミットメントと優先順位付けは、イテレーション計画ミーティングで行われ、イテレーション開始の前日（隔週水曜日）に開催されます。チームは、新規および既存の Issue と進行中の Issue を検討します。次のイテレーションの Issue を選ぶ際、チームは次のことを考慮します。

- Issue の優先順位
- Issue の重み
- ベロシティ
- 営業日
- ターゲット作業内訳

#### Issue の優先順位

アナリストは、計画への入力としてさまざまな優先順位ラベル（上記で定義されたとおり）を使用します。

#### Issue の重み

各 Issue には、推定される時間コミットメントに基づいて重みがアサインされます。

1つの Issue がイテレーション長（2週間）より大きい重みを持っている場合、より小さな作業単位に分割する必要があります。（これは、Issue を Epic に変換すべき指標である可能性もあります）。

| 重みの値 | 完了までの推定時間 |
| --- | --- |
| 1 | < 1時間 |
| 2 | 2時間 |
| 3 | 4時間 |
| 5 | 1日 |
| 8 | 2〜3日 |
| 13 | 1週間 |
| 21 | 2週間以上 |
| 34 | 1か月以上 |

#### ベロシティ

Product Data Insights は、ベロシティを、特定のイテレーション内でチームによって完了した作業量（Issue の重みで計測）と定義しています。これが不完全な測定であることは認識していますが（部分的に完了した Issue や [文書化されていない作業](/handbook/product/groups/product-analysis/#undocumented-requests) は考慮されていません）、チームの出力の大まかな目安です。

私たちは、2週間のイテレーション内で完了できると確信できる作業のみにコミットすることを目指します。そのため、最近のベロシティ *未満* にコミットし、緊急の Issue と中断を考慮するバッファを残します。最初は、各アナリストが約2日分の作業のバッファを残します（最近の未計画作業のボリュームに基づく推定）。割り当てられたバッファを超える高優先 Issue は、計画された作業を完了する能力に重大な影響を及ぼすため、Product Data Insights チームの支援が必要になることが分かっている場合は事前に計画してください。

#### 営業日

GitLab のチームメンバーとして、健全なワークライフバランスを維持するため、私たちは [PTO を取り](/handbook/people-group/time-off-and-absence/time-off-types/)、祝日を遵守することが推奨されています。アナリストのキャパシティは、イテレーション内で働く日数に基づいて調整する必要があります。

#### ターゲット作業内訳

Product Data Insights は、作業を2つの異なるバケットにグループ化します。計画中、アナリストは次の内訳を維持することを目指します。

- 運用モデルの優先事項: 50%
  - バックログ DRI: チームマネージャーと Enterprise Data & Insights リーダー（トレードオフが必要な場合）
- その他のアドホック作業: 50%
  - バックログ DRI: プロダクトアナリスト

*作業の分布はイテレーションごとに変動しますが、50/50 の内訳がターゲット状態です。*

### 緊急 Issue

緊急の事項が発生した場合は、Issue をオープンし、アナリストの連絡先（および/または `@dpeterson1`）にタグ付けしてください。Issue が緊急である理由、必要な期限、何を伝えるか、またはどのように使用されるか、意図された対象者を含めてください。

タグ付けされたアナリストから1営業日*以内（または、より早いターンアラウンドが必要な場合はそれ以前）に連絡がない場合は、[#data](https://gitlab.enterprise.slack.com/archives/C8D1LGC23) にメッセージを送信し、`@Dave Peterson` にタグ付けすることを自由に行ってください。

**私たちは異なるタイムゾーンを横断して働いていることに留意してください*

### 追加の考慮事項

Product Data Insights チームと一緒に働く際は、次のことに留意してください。

#### スコープクリープ

[スコープクリープ](https://en.wikipedia.org/wiki/Scope_creep) は誰もが直面する問題です。[チームキャパシティ](/handbook/product/groups/product-analysis/#capacity) はゼロサムゲームであり、1つの Issue でのスコープクリープは、そのイテレーションのために計画された他の作業を完了できなくなることを意味する可能性があることに留意してください。

Issue に対して有意な作業量を追加する追加スコープ（要件の変更、追加のフォローアップなど）* は、新しい Issue でネット新規作業としてキャプチャする必要があります。新しい Issue は、通常の優先順位付けと計画プロセスを経ます。スコープクリープを避ける最良の方法は、最初に Issue をオープンする際に、徹底的で完全な要件を持つことです。Issue テンプレートは、すべての関連情報を含めるためのガイドになるはずです。

**「有意な作業量」のしきい値は、その Issue に取り組むアナリストによって決定されます。*

#### ブロックされた Issue

Issue がブロックされ、診断やトラブルシューティングに追加作業* が必要な場合（例: データ問題が発見された）、新しい Issue をオープンし、重みと優先順位をアサインし、元のブロックされた Issue にリンクする必要があります。新しい Issue は、アナリストの裁量で正式な計画プロセスを経ずに現在のイテレーションに追加できますが、これはイテレーション内のすべての Issue を完了する能力に影響を及ぼす可能性があります。

**「追加作業」のしきい値は、その Issue に取り組むアナリストによって決定されます。*

実験分析の Issue は、実験が実際に実行されることによって自然にブロックされます（分析を行うには十分なデータを持つまで待つ必要があります）。より正確なベロシティの測定を可能にするため、作業を2つの別々の Issue に分けます*。

1. 実験準備（ダッシュボード作成とデータ検証）
1. 実験分析

**現時点では、PM は引き続き単一の Issue をオープンし、アナリストがそれに応じて分割します。*

#### 文書化されていないリクエスト {#undocumented-requests}

*すべての* Product Data Insights のリクエストについて Issue をオープンしてください。Google Drive のコメントを通じて行われたリクエストは追跡が非常に困難で、Slack の履歴は90日後に消えます。
さらに、これらのリクエストはチームのベロシティで計画されたり考慮されたりしません。非公式のリクエストは、他のステークホルダーへのコミット済みの作業を完了できないことを意味する可能性があります。

リクエストの正式な記録（Issue 経由）を保持することで、頻繁に尋ねられる質問（セルフサービスソリューションの構築につながる可能性のあるもの）を特定し、過去の作業を迅速に複製できるようになります。

#### キャパシティ {#capacity}

Product Data Insights チームは、GitLab を横断するその他のプロダクト関連データニーズに加えて、プロダクト組織全体をサポートする任務を負っています。そのため、[ターゲットギアリング比率](/handbook/product/groups/product-analysis/team-processes/#gearing-ratios) に向けて成長する中で、チームキャパシティは限定的になる可能性があります。
しかし、限定的なキャパシティが GitLab チームメンバーが [Product Data Insights に Issue をオープンする](https://gitlab.com/gitlab-data/product-analytics/-/issues/new?issuable_template=Ad%20Hoc%20Request) ことを止めるべきではありません。それは単に、低優先のリクエストはリソースが利用可能になるまで待たなければならないことを意味します。
グループが成長するにつれて、より短い期間でリクエストを返す能力も成長していきます。

## チームとの関わり方

Issue をオープンすることに加えて、同期と非同期の両方でチームと関わるいくつかの他の方法があります。

### オフィスアワー

GitLab を横断するより多くの PM をサポートするため、Product Data Insights チームはオフィスアワーを提供しています。オフィスアワーは隔週水曜日に開催され、<time datetime="16:00">4 pm UTC (11 am ET / 8 am PT)</time> と <time datetime="21:00">9 pm UTC (4 pm ET / 1 pm PT)</time> を交互に行います。私たちの主要ステークホルダーは組織を横断する PM ですが、すべての GitLab チームメンバーが参加することを歓迎します。

オフィスアワーの意図は、PM がチームへのより高速なアクセスを得て、小さなタスク、ブレインストーミング、データセルフサービスのサポートを得ることです。より複雑な質問に答えるためのより正式なリクエストは Issue でキャプチャされ、より厳格で構造化された優先順位付けプロセスを経ます。

#### サインアップ方法

[アジェンダ](https://docs.google.com/document/d/1ZXS-eeZNuRUn7176dZFqsyhIU-DSWYvWuEhogpbTzys/edit#) は先着順です。ウォークイン/ドロップインはいつでも歓迎されますが、可能であればオフィスアワーが始まる前に、名前とトピック（または質問）を追加してください。これにより、チームは新しいアジェンダ項目を事前にレビューする時間を持つことができます。アジェンダのトピックをカバーできない場合、次のミーティングに延期されます。

ステークホルダーは、新しい Issue について議論し定義するためにオフィスアワーを活用することを歓迎されています。これにより、Issue 自体での非同期の往復コミュニケーションを減らすことができます。

#### トピック例

オフィスアワーは、小さな作業の塊、ブレインストーミング、データセルフサービスの支援を意図しています。オフィスアワーのトピックの例を以下に示します。

<details markdown="1"><summary>トピック例</summary>

<details markdown="1"><summary>👍 トピック例 1: 実験のセットアップ</summary>

Secure の採用を増やせるかどうかを確認するため、実験を開始することに興味があります。

- 実験をセットアップする方法はどうしますか?
- サンプルサイズの計算を手伝ってもらえますか?
- 結果の解釈を手伝ってもらえますか?

</details>

<details markdown="1"><summary>👍 トピック例 2: 分析へのアプローチ</summary>

SSO を有効にしたユーザーと招待受諾率の関係について分析を試みています。

- どのテーブルを使うべきですか? このデータソースを理解するのを手伝ってもらえますか?
- どのようなアプローチを取りますか?
- このメトリクスは質問に答えますか?
- このデータソースを理解するのを手伝ってもらえますか?

</details>

<details markdown="1"><summary>👍 トピック例 3: コードレビュー</summary>

トライアルから有料プランに変換した namespace の xMAU を計算するクエリを書きました。

- この `JOIN` は正しいですか?
- このロジックは変換前にトライアルを持っていた namespace のみを含みますか?

**注:** オフィスアワーの範囲ですべてのコードレビューに対応することはできません。
この種類のトピックは、クエリの特定の側面や、正しいデータソースを使用しているかどうかなどに限定してください。

</details>

<details markdown="1"><summary>👍 トピック例 4: ダッシュボードの更新</summary>

既存のダッシュボードにいくつかの更新または拡張を行うことを検討しています。

- namespace 作成から30日以内の活動にチャートを限定できるよう、このダッシュボードにフィルターを組み込むのを手伝ってもらえますか?
- この追加のイベントを含めるよう、このファネルを更新できますか?

</details>

<details markdown="1"><summary>👍 トピック例 5: フォローアップの質問</summary>

最後の主要ミーティングで、[トライアル初期採用に関する分析](https://docs.google.com/presentation/d/1ESH797L8zwT_28n3Ypqp1xckKhvtt3jr-8eWpexgmto/edit#slide=id.ge35de508d3_0_0) を発表しました。

- メソッドロジを説明してもらえますか?
- データ/分析の意味合いを理解するのを手伝ってもらえますか?

</details>

<details markdown="1"><summary>👍 トピック例 6: 新しい Issue のスコープと定義</summary>

新しい分析のために Issue をオープンしようとしています。

- 全体的なスコープと詳細について議論できますか?
- どの種類の情報を Issue に含めるべきですか?

</details>

</details>

オフィスアワーで対応するには広すぎるトピックを持参した場合、作業について議論し、[Issue をオープン](https://gitlab.com/gitlab-data/product-analytics/-/issues/new?issuable_template=Ad%20Hoc%20Request) するようリダイレクトします。

#### FAQ

**オフィスアワーのトピックと正式なデータリクエストの違いは何ですか?**

オフィスアワーは、PM が小さなタスクで支援を受けたり、ブレインストーミングの場を提供したり、データセルフサービスについて学びたい人を支援することを意図しています。利点は、アジェンダが先着順であり、優先順位付けプロセスがバイパスされ、待ち時間が最小限であることです。

正式なデータリクエストとより大きな作業の塊は、[Product Data Insights プロジェクト](https://gitlab.com/gitlab-data/product-analytics/-/issues/new?issuable_template=Ad%20Hoc%20Request) の Issue でキャプチャされます。
それらはより複雑な質問に答えるのに役立ちますが、より堅牢な [受付](/handbook/product/groups/product-analysis/#issue-intake) と [計画](/handbook/product/groups/product-analysis/#iteration-planning) プロセスを経ます。そのため、チームサイズと [キャパシティ](/handbook/product/groups/product-analysis/#capacity) を考慮すると、より長いターンアラウンドタイムがあります。

**自分のトピックがオフィスアワーに適しているか、Issue をオープンする必要があるかわからない場合はどうすればいいですか?**

アナリストパートナー（該当する場合）または [#data](https://gitlab.enterprise.slack.com/archives/C8D1LGC23) で自由に尋ねてください。
疑問がある場合は、オフィスアワーに参加してチームと議論できます。

### Slack

#### チャンネル

1. [#data](https://gitlab.enterprise.slack.com/archives/C8D1LGC23) - プロダクトおよび/または Product Data Insights チームに関連するものを含む、あらゆるタイプのデータ質問用
1. [#data-tableau](https://gitlab.enterprise.slack.com/archives/C03RMCEHVCP) - Tableau に関連するあらゆる質問用
1. [#g_product_data_insights_daily](https://gitlab.enterprise.slack.com/archives/C0285NMCLBY) - [Geekbot](https://geekbot.com/) を活用した Product Data Insights チームの非同期日次スタンドアップ用

#### エイリアス

1. `@product-analysts` - Product Data Insights チーム全体に通知
1. `@randdanalyticstriage` - [Enterprise Data Triage Program](/handbook/enterprise-data/how-we-work/triage/#enterprise-data-program-triage) に従い、Product Data Insights チーム全体と Data チームの R&D サブチームに通知

### GitLab グループ

1. `@gitlab-data/product-analysts` - Product Data Insights チーム全体に通知

### YouTube プレイリスト

1. [Product Data Insights](https://www.youtube.com/playlist?list=PL05JrBw4t0Kp32_hlHkH-wysq5seWicwL) - オフィスアワー、分析/読み上げなどの録画

## その他の有用なリソースとリンク

1. [Data for Product Managers](/handbook/enterprise-data/organization/programs/data-for-product-managers/)
1. [Data Catalog/Data Guide Series](https://internal.gitlab.com/handbook/enterprise-data/data-governance/data-catalog/)（内部ハンドブック）
1. [Data Team Handbook](/handbook/enterprise-data/)
