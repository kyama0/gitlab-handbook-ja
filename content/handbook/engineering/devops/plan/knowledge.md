---
title: Plan:Knowledge エンジニアリングチーム
upstream_path: /handbook/engineering/devops/plan/knowledge/
upstream_sha: bb4e4d0fc1a355c00a1d82b1528ff729c83af189
translated_at: "2026-04-28T00:00:00Z"
translator: claude
stale: false
lastmod: "2025-12-05T19:47:34+00:00"
---

## Plan:Knowledge チーム

Plan:Knowledge チームは [Knowledge Management カテゴリ](/handbook/product/categories/#knowledge-group)を開発しています:

- Wiki
- GitLab Pages
- テキストエディタ
- Markdown

詳細は[方向性ページ](https://about.gitlab.com/direction/plan/knowledge/)をご覧ください。

### チームメンバー


<p class="my-3 text-sm text-gray-600 italic">チームメンバー情報は <a href="https://handbook.gitlab.com/handbook/engineering/devops/plan/knowledge/#team-members" rel="external noopener">原文 (英語)</a> を参照してください。</p>


### 安定したカウンターパート


<p class="my-3 text-sm text-gray-600 italic">チームメンバー情報は <a href="https://handbook.gitlab.com/handbook/engineering/devops/plan/knowledge/#team-members" rel="external noopener">原文 (英語)</a> を参照してください。</p>


### 採用チャート

現在の求人については[採用ページ](https://about.gitlab.com/jobs/)をご覧ください。

## 私たちの働き方

### 取り組む作業の選択

[ビルドボード](https://gitlab.com/groups/gitlab-org/-/boards/5454834)には今後のリリース作業が表示されます。~"workflow::ready for development" 列は優先度順に並んでいます。

エンジニアリングマネージャーはマイルストーンの開始時に以下のラベルを追加します:

| ラベル | 意味 |
| ---   | ---     |
| `~Deliverable` | 現在のマイルストーン内にこの項目を届けることを顧客にコミットしています。 |
| `~Stretch` | 届けることにコミットはしていませんが、進捗を試みます |

解決できる自信がない場合はトップの項目を取らなくても構いませんが、`#g_knowledge` に投稿してください。

### キャパシティ

#### 工数の見積もり

今後の作業に関わる工数を見積もる際は、Plan ステージの他のグループと同じアプローチと数値スケールを使用します。


<!-- include omitted: includes/engineering/plan/estimating-effort.md (no localized version under content/ja/) -->


通常、3ヶ月のローリング平均がチームのキャパシティの良い指標となります。Knowledge は新しいチームであり、明確な過去データがないため、最初はキャパシティの判断が難しい場合があります。

PM と EM はチームのキャパシティの最大 75% に ~Deliverable Issue を収め、残りを ~Stretch Issue に割り当てることを目指します。

#### リファインメント

エンジニアリングマネージャーは毎週のチームミーティングで `~"workflow::refinement"` の Issue をレビューします。
[最高優先度](#priority-labels)の Issue は個々のエンジニアにアサインされ、そのエンジニアが Issue を `~workflow::ready for development` に移動させる責任を持ちます。

エンジニアは以下のテンプレートを Issue の説明に追加できます:

```markdown
### 実装計画

<!--
開発準備完了とは、以下の質問に「はい」と答えられることを意味します:

- この Issue は十分に小さいですか？そうでない場合は、より小さな Issue に分割してください
- 正しいドメイン（例: フロントエンド、バックエンド）に割り当てられていますか？そうでない場合は、それぞれのドメインの2つの Issue に分割してください
– Issue は明確で理解しやすいですか？そうでない場合は、さらに明確化の質問をして、受け取り次第説明を更新してください

2つ以上の MR が必要な場合は、説明に以下のような表を追加することを検討してください（例: `実装計画` の下）。
-->

| 説明 | MR |
|-|-|
| MR 1 | |
| MR 2 | |
| ドキュメント | |

**理由:**

<!--
この Issue をどのように分解するかについての最初の考えを追加してください。箇条書きで構いません。

これはおそらく以下のようなコード変更が必要になります:

- 六角ドライバーをソニックスクリュードライバーに交換する
- バックアップを磁気テープに書き直す
- セマフォフラッグを送り上げて他者に警告する

以前の例へのリンク。先行技術に関する議論。提案されたデザインのシンプルさ/複雑さの顕著な例。
-->

/label ~"workflow::ready for development"

/label ~"frontend-weight::X"

/label ~"backend-weight::X"

/weight X
```

#### バグのウェイト付け


<!-- include omitted: includes/engineering/plan/weighing-bugs.md (no localized version under content/ja/) -->


### リファインメント

#### ボードウォーク（週次）

チームメンバーは週に1回、[ビルドボード](https://gitlab.com/groups/gitlab-org/-/boards/5454834)を歩く集まりを行います。25分がこのシンクコールに割り当てられていますが、それよりはるかに早く完了することもあります。EM が DRI であり、PM を除いて出席はオプションです。録画されて [#g_knowledge Slack チャンネル](https://app.slack.com/client/T02592416/C04R571QF5E)で共有されます。セキュリティや他の機密 Issue が議論されない場合のみ、録画は公開されます。[アジェンダ](https://docs.google.com/document/d/1SZrFiipmH5GX5CYL-nOuc8NNqSs-AXCvHOzajwy06vk/edit?usp=sharing)は社内でアクセス可能であり、すべてのチームメンバーがアップデートと質問を追加することを推奨されます。

このミーティングの目的は:

- 進行中の作業の状況を更新する
- ブロッカーとリスクを特定する
- 再優先化する
- 助けを求める

DRI はこのミーティングを待つのではなく、[ワークフローラベル](/handbook/engineering/devops/plan/knowledge/#use-of-labels)と[ヘルスステータス](/handbook/engineering/devops/plan/#keeping-health-status-accurate)を継続的に最新の状態に保つ必要があります。

#### プランニングミーティング（月次）

プランニングミーティングはマイルストーン開始前に月に1回開催されます。プロダクトマネージャーがスケジュールの DRI です。

エンジニアの出席はオプションですが、参加は必須です。ミーティングにはアジェンダがあり、録画されます。以下のどれかまたはすべてが含まれる場合があります:

- 優先事項と期待値の設定。
- タスクの見積もり。
- スコープの分解とコラボレーション。
- 要件の明確化。
- キャパシティとキャリーオーバーの見積もり。

できる限りこれらのタスクは非同期で完了し、ミーティングで必要な作業を減らすべきです。ミーティングの目的は、今後のマイルストーンをできる限り成功できる状態で開始することです。

#### リファインメントセッション（アドホック）

チームメンバーは大きな Issue や新機能のためのリファインメントシンクミーティングを提案することを推奨されています。
目標は、問題に対するさまざまな視点を共有し、知識を共有しながら懸念点と未知の事項を探ることです。

リファインメントミーティングのアジェンダには以下のようなトピックが含まれる場合があります:

- 製品要件
- 技術的な課題
- 技術的な代替案
- 提案されたソリューションをどのようにイテレーションするか

成果として、ミーティングではマイルストーンを推定した Issue のリストが作成される場合があります。

#### 非同期ファースト

ほとんどのプランニングは非同期で行われます。これをより効率的にするために、いくつかのツールとプロセスが観察されています。

Issue には1つのマイルストーンしか添付できないため、`~"Next Up"` ラベルを使って、マイルストーンがあるかどうかに関係なく、今後のマイルストーンの項目をマークします。PM と EM は、プランニングプロセス中の現在のマイルストーンを slipする可能性のある Item やプロスペクティブな Issue に追加する前に、このラベルをすべての Issue から削除する必要があります。

このラベルを使用することで、今後のマイルストーンを簡単に分析できます。[プランニングボード](https://gitlab.com/groups/gitlab-org/-/boards/7109724)は、現在のマイルストーンではなくこのラベルにスコープされているビルドボードを模倣しています。以下のために使用します:

- 提案されたすべての Issue の現在のワークフロー状態を表示する。
- 各リストのウェイト値を合計してキャパシティを計画する。
- マイルストーンが始まる前に解決できる可能性のあるブロッキング関係を理解する。

新しいマイルストーンが始まると、一括アクションで `~"Next Up"` ラベルの付いたすべての Issue にマイルストーンを追加し、ラベル自体を削除できます。

### ワークフロー

#### ラベルの使用

Issue の適切なラベル付けは、チームができる作業とやっている作業の分類、追跡可能性、定量化に役立ちます。一部のラベルは必須です。以下の表ではこれらを説明し、その理由を示します。

| ラベル | 用途 | ハンドブックガイダンス | DRI |
|---    | --- | ---               | --- |
| ~workflow::* | Issue の現在のワークフロー状態を伝えます。進捗を理解し、マイルストーン期間中のリスクを定量化するために重要です。 | 開発全体を通じた Issue の更新 | エンジニア |
| ~type::* | 行われている作業の種類を伝えます。GitLab 内外の役割に対して作業の分割を定量化・報告するために使用されます。 | [作業タイプの分類](/handbook/product/groups/product-analysis/engineering/metrics/#work-type-classification) | |
| ~Deliverable/~Stretch | ~Deliverable は、アサインされたマイルストーン内に Issue を届ける意図があることを顧客とステークホルダーに伝えます。~Stretch は、マイルストーン中に着手する可能性はあるが完了は期待されないことを示します。 | [リリーススコーピングラベル](https://docs.gitlab.com/ee/development/labels/#release-scoping-labels) | エンジニアリングマネージャー |

#### 非同期更新

私たちはチームメンバー、カウンターパート、ユーザーがそれぞれの Epic や Issue のステータスを明確かつ簡単にアクセスできるよう努めています。

この情報の主要な情報源は `~workflow::*` ラベルとヘルスステータスです。

しかし、Issue が `~"workflow::in dev"`、`~"workflow::in review"` または `~"workflow::verification"` で1週間以上費やす場合、DRI は
["Knowledge - async update" コメントテンプレート](https://gitlab.com/groups/gitlab-org/-/comment_templates/1000436)を使って Issue に非同期更新を残します。

非同期更新が必要な Issue を追跡するには、以下の GLQL クエリを使用できます:

````markdown
```glql
---
display: list
fields: title, labels("workflow::*"), healthStatus
---
group = "gitlab-org" and assignee = currentUser() and label in ("workflow::in dev", "workflow::in review", "workflow::verification") and opened = true
```
````

<span id="priority-labels"></span>

### 優先度ラベル

`~Knowledge::P1/P2/P3` ラベルを使用して、`~workflow::*` ステップとマイルストーン内の Issue の優先度を示します。

- プロダクトマネージャーがこれらのラベルの DRI ですが、チームの全員がアサイン/調整できます。
- マイルストーンの開始前に、PM と EM はそのマイルストーンに含まれるすべての Issue の優先度を確認します。期待値は以下の通りです:
      - Issue の 40% が `~Knowledge::P1`
      - Issue の 30% が `~Knowledge::P2`
      - Issue の 30% が `~Knowledge::P3` で、これらの Issue は `~Deliverable` にできません
- これらのラベルはマイルストーン外でも最高優先事項を追跡するために使用します。
- チームの誰かが Issue をスケジュールに入れたい場合は、適切な優先度ラベルを追加してください。
- 専用の `P4` ラベルはなく、`~Knowledge::P*` ラベルを持たないことは `~Knowledge::P4` と同等です。
- Issue が別の `~workflow::*` ステージに移動されると、優先度が変更される可能性があります。
- `~Knowledge::P*` ラベルはバグにのみ使用される `~priority::*` ラベルとは完全に異なります。

### 他のチームとのコラボレーション

手戻りを避けるため、以下のドメインで作業する際は早期に他のチームに働きかけます:

| チーム | ドメインの重複 |
| ---  | ---    |
| [Pipeline Authoring](/handbook/engineering/devops/verify/pipeline-authoring/) | GitLab Pages [.gitlab-ci.yml 構文](https://docs.gitlab.com/ee/ci/yaml/) |

### アプリケーションパフォーマンス

Grafana には、チームが担当するアプリケーション部分のパフォーマンスを表示する追加のダッシュボードがあります。

- [ステージグループダッシュボード](https://dashboards.gitlab.net/d/stage-groups-knowledge/stage-groups-knowledge-group-dashboard?orgId=1)（28日間のエラーバジェットを含む）
- [エラーバジェット詳細](https://dashboards.gitlab.net/d/stage-groups-detail-knowledge/stage-groups-knowledge-group-error-budget-detail?orgId=1)

## 便利なリンク

- [Plan:Knowledge](https://gitlab.com/groups/gitlab-org/-/boards/1569369?scope=all&utf8=%E2%9C%93&state=opened&label_name[]=group%3A%3Aknowledge) - マイルストーンフィルターを適用して現在のリリースの作業を確認する
- Slack の [#s_plan](https://gitlab.slack.com/archives/s_plan)
- [録画されたミーティング](https://www.youtube.com/playlist?list=PL05JrBw4t0KouWOCpPdlVZmwr3QCqhQ94)
- [回顧](https://gitlab.com/gl-retrospectives/plan/issues?scope=all&utf8=%E2%9C%93&state=all&label_name[]=retrospective)
