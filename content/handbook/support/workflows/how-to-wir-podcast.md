---
title: WIR ポッドキャストの作成方法
category: References
description: Support Week-in-Review ポッドキャストを作成するための一般的なガイド
upstream_path: /handbook/support/workflows/how-to-wir-podcast/
upstream_sha: 47fdb6582389288bed0f04a23aa5d972c3ce1ff5
translated_at: "2026-05-08T00:00:00Z"
translator: claude
stale: false
---

## 概要

Support Week-in-Review ポッドキャストを録音および公開する必要がある場合は、このワークフローを一般的なガイドとして使用してください。

この多くは [Support Week in Review プロジェクト](https://gitlab.com/gitlab-com/support/readiness/support-week-in-review) で行われます。このガイドで使用される CI/CD ジョブとそれらが行う内容の詳細については、プロジェクト [readme](https://gitlab.com/gitlab-com/support/readiness/support-week-in-review/-/blob/main/README.md) を参照してください。

---

## ワークフロー

サポートチームの Google カレンダーで録音セッション（週末近く）の予定が見つかります。録音に参加したい人がいる場合は、そこの Zoom リンクを使用してください。

### 録音前

1. チケットからの顧客フィードバックの入力を準備する

   - フィードバックは [SWIR プロジェクト](https://gitlab.com/gitlab-com/support/readiness/support-week-in-review/-/issues) の SSAT 作業項目に集められます
   - 一部の入力は週中にマネージャーから提供されますが、ほとんどはパイプラインの `populate_ssat` ジョブを使って取り込む必要があります
   - `populate_ssat` ジョブを実行する - これにより、オープン中のポジティブフィードバックが SSAT 作業項目に集められます
   - コンテンツ（自動またはその他）をレビューし、修正を加え、実際にはポジティブでないものを削除します。多くのコンテンツがある場合は、短くてパーソナライズされていない項目をいくつか削除して数を減らすことを検討してください - ここではあなたの判断を使用してください。「自動コンテンツ」に関する行を削除します。

1. 前週に公開されたナレッジベース記事を準備する

   - `New KB Articles - <date>` 作業項目を編集します
   - [この Zendesk レポート](https://gitlab.zendesk.com/explore#/pivot-table/connection/12063682/report/229844642) から両方の列をコピーします
   - この [スプレッドシート](https://docs.google.com/spreadsheets/d/1GVsJO8OGDqsC6ifL79ubccotTekkVAvCay4Kp2axu0U/edit?gid=0#gid=0) に貼り付けてフォーマットできます。列 D からコピーし、作業項目に special-paste（command-shift-v）します。（special-paste を使用しない場合、それらが表に変換されます。）
   - 作業項目を保存します

1. メトリクスを準備する

   - `Metrics - <date>` 作業項目を編集します
   - [MM: Support KPIs](https://gitlab.zendesk.com/explore/studio#/dashboards/3DC60497A02C9E0EDB02ECE9C20153733D4AF220B656C550418FF2E42B7E2329) Zendesk ダッシュボードから主要メトリクスのスクリーンショットを撮り、作業項目の指示された場所に挿入します。以下の 4 項目を含める必要があります:

     - SWIR タブから: 上段の 4 つのグラフ、`Total average CES` から volume まで
     - SWIR タブから: `Total FRT SLA achievement - Last 4 Weeks` の下までスクロールして現在の週をキャプチャ
     - SWIR L&R タブから: 上段の 4 つのグラフ、`Total average CES` から volume まで
     - SWIR L&R タブから: `L&R FRT SLA achievement - Last 4 Weeks` の下までスクロールして現在の週をキャプチャ

   - 作業項目の適切なセクションに主要メトリクスの値を入力します
   - USGov メトリクスについては、[米国政府チームコール ドキュメント](https://drive.google.com/drive/u/0/search?q=U.S.%20Government%20Support%20Team%20Call) を参照し、作業項目に追加します
   - [オープン中のペアリング マイルストーン](https://gitlab.com/groups/gitlab-com/support/-/milestones?search_title=pairing&state=&sort=) の現在のペアリング数の合計を確認します。それを前週の SWIR と比較して、その後何件の新しいペアリングが作成されたかを判断します。これらの詳細を作業項目に追加します。
   - Metrics 作業項目を保存します

1. ダイジェスト作業項目を作成する

   - `create_digest_issue` ジョブを実行します。これにより、すべてのチーム貢献、顧客フィードバック、KB 記事、メトリクスが新しいダイジェスト作業項目にまとめられます
   - SWIR ダイジェスト作業項目を編集し、タイトルとして週のフレーズを追加します

### 録音

1. SWIR のチームカレンダー予定にある Zoom ルームに参加します
1. ナレーターの話す順序を決めます。便利な慣例は次のとおりです:

   - 名前のイニシャルのアルファベット順に読みます
   - もし項目を持っていてそれが回ってきたら、あなたが読むことになり、順序がリセットされます

1. ナレーションする項目の内容をレビューします

   - 各リンクをクリックし、ポイントが何を表現しているかを理解します
   - 読む必要のある名前の発音方法を知っているか確認します
   - 慣例として、作業項目と MR リンクは、プロジェクト名と番号（たとえば「Support Team Meta 1234」または「Handbook MR 4321」）を読むことで音声化します。ナレーション中にリンクにホバーすることでこれらを確認できます。これは、項目に「ここのリンク」（「**this work item** を参照」など）がある場合に特に重要です。
   - 通常、新しいチームメンバーの紹介は一人称で読み、それを行う前にそうしていることを述べます

1. 全員の準備ができたら、録音を開始します。録音を公開する人にとっては「ローカルに録音」することが最も簡単で、これにより音声がコンピューターに保存され、処理とアップロードに使用できます。

### 録音後

1. ポッドキャストを [公開](#publish-the-podcast) します
1. [翌週のために SWIR を準備](#prepare-swir-for-the-next-week) します

#### ポッドキャストの公開 {#publish-the-podcast}

録音を完了し、Zoom が処理を完了したら:

1. オプション: テーマ音楽を持っている場合は、録音に追加します
1. [Support Week in Review - Audio Edition](https://drive.google.com/drive/search?q=Support%20Week%20in%20Review%20-%20Audio%20Edition) フォルダーにアップロードします
1. 共有設定を「GitLab 内の誰でも閲覧可能」に変更します
1. URL をコピー/貼り付けして、TOC の下のダイジェスト作業項目に貼り付けます（追加するためのプレースホルダーがあります）
1. リンクを Slack に共有します - #support_team-chat には木曜日の 23:00 UTC に slackbot リマインダーがあります - その会話のスレッド返信として、音声リンクとダイジェスト作業項目へのリンクを共有できます。

#### 翌週のために SWIR を準備する {#prepare-swir-for-the-next-week}

1. `close_week_and_create_new_milestone` ジョブを実行します
1. 完了です！

#### 顧客フィードバックの内容に関する注意

Support Week in Review に顧客フィードバックの内容を含める目的は 2 つあります:

1. 顧客自身の声で、彼らが価値を見出す行動ややり取りの方法をハイライトする。
1. チケットでのやり取りで起こった、個人および個人グループの優れた仕事をハイライトする。

簡潔さのため、また上記の目的を満たさない項目があるため、毎週すべてのフィードバックを含めるわけではありません。

上記の目的を念頭に置き、Support Week in Review の顧客フィードバックコメントは以下のとおりであるべきです:

- 真にポジティブであること！ 他のエンジニア、GitLab チームを貶めるフィードバックや、賛辞とネガティブなフィードバックを混ぜた裏返しのコメントは避けます。
- 重要、思慮深い、または興味深いコメントを持っていること。
- エンジニアのミックスのためであること。時には、特定のエンジニアが 1 週間に複数のポジティブレビューを持つことがあります: チームの断面を含めるようにしてください。
- 可能な場合は新しいチームメンバーの達成をハイライトすること: SWIR での最初のポジティブフィードバックは取り上げて祝うべきです！
