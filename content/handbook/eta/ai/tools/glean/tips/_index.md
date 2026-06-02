---
title: "Glean のヒントとチュートリアル"
description: "GitLab の AI ナレッジプラットフォームである Glean を最大限に活用するための短い動画ガイドと実践的なヒント。"
upstream_path: /handbook/eta/ai/tools/glean/tips/
upstream_sha: 839c14e40e08e6fd4099a01ee623aaf85faafd12
lastmod: "2026-06-01T17:35:18+01:00"
translated_at: "2026-06-01T22:09:08Z"
translator: claude
stale: false
---

{{% alert color="info" %}}

Glean に関する包括的なドキュメントについては、[Glean エンドユーザーガイド](/handbook/eta/ai/tools/glean/)をご覧ください。
{{% /alert %}}

## はじめに

### Glean へのアクセス方法

**学べること:**

- Okta、app.glean.com、モバイルアプリでのログイン
- 初めて Glean のインターフェイスを操作する方法
- Chrome ブラウザ拡張機能のインストールと使用

**クイックヒント:**

- 外出先での検索のためにモバイルにインストールしましょう
- 質問は [#glean-community](https://gitlab.enterprise.slack.com/archives/C0A897TSKNG) に参加してください

<div style="padding:56.25% 0 0 0;position:relative;">
  <iframe src="https://www.youtube.com/embed/Tkult5xOEk0"
    frameborder="0"
    allow="autoplay; fullscreen; picture-in-picture"
    style="position:absolute;top:0;left:0;width:100%;height:100%;"
    title="Descriptive Video Title"></iframe>
</div>

{{% alert color="info" %}}

YouTube リンク: [Confidential: Glean 101 - 1. Logging In](https://www.youtube.com/watch?v=Tkult5xOEk0&list=PL05JrBw4t0Ko6y092ciE_CMpGiYyKChFN&index=2)

{{% /alert %}}

### 検索とアシスタント (チャット) の使い分け

**学べること:**

- 検索を使うタイミング (特定のドキュメント、人、情報を見つける場合)
- アシスタント／チャットを使うタイミング (AI が生成した回答や要約を得る場合)
- それぞれの実際の例

**クイックヒント:**

- 探しているものがわかっている場合は検索を使いましょう: 「AMER swag process」、顧客名、特定のドキュメントなど
- 答えがほしい場合はアシスタントを使いましょう: 「経費はどのように提出しますか?」「私の育児休業ポリシーは何ですか?」

<div style="padding:56.25% 0 0 0;position:relative;">
  <iframe src="https://www.youtube.com/embed/dZY47FKcVfc"
    frameborder="0"
    allow="autoplay; fullscreen; picture-in-picture"
    style="position:absolute;top:0;left:0;width:100%;height:100%;"
    title="Search vs Assistant - Know the Difference"></iframe>
</div>

{{% alert color="info" %}}

YouTube リンク: [Confidential: Glean 101 - 2. Glean Chat and Search](https://www.youtube.com/watch?v=dZY47FKcVfc&list=PL05JrBw4t0Ko6y092ciE_CMpGiYyKChFN&index=3)

{{% /alert %}}

## 高度な検索テクニック

### 高度な検索フィルター

**学べること:**

- Glean が検索対象とするシステム (ハンドブック、Slack、Salesforce、GitLab、Google Workspace など)
- 検索フィルターを使って結果を絞り込む方法
- 複数のフィルターを組み合わせて精度を高める方法

**クイックヒント:**

- ソースで絞り込む: `app:slack`, `app:gitlab`, `app:drive`
- 日付で絞り込む: `updated:today`, `updated:past_2_weeks`
- タイプで絞り込む: `type:issue`, `type:email`
- フィルターを組み合わせる: `customer-name app:salesforce updated:>7d`

### Fast Mode、Thinking Mode、Deep Research の使い分け

**学べること:**

- 3 つのモードを理解し、それぞれをいつ使うか
- モードを切り替える方法

**クイックヒント:**

- **Fast Mode (デフォルト):** ドキュメント検索、Q&A、要約、下書き作成などの検索ではデフォルトで使用します
  - _「経費ポリシーを探して」「このミーティングを要約して」「メールの返信を下書きして」_
- **Thinking Mode:** 深い推論を必要とする複雑な分析に使用します
  - _「Q3 と Q4 のアプローチを比較し、トレードオフを含めて変更を推奨してください」_
- **Deep Research:** 複数のソースから包括的なレポートが必要な場合に使用します
  - _「全顧客セグメントにわたる当社のセールス戦略を分析し、包括的な推奨事項を提示してください」_

<div style="padding:56.25% 0 0 0;position:relative;">
  <iframe src="https://www.youtube.com/embed/FaRFgF39W5Y"
    frameborder="0"
    allow="autoplay; fullscreen; picture-in-picture"
    style="position:absolute;top:0;left:0;width:100%;height:100%;"
    title="Chat Modes"></iframe>
</div>

{{% alert color="info" %}}

YouTube リンク: [Confidential: Glean 101 - 3. Chat Modes](https://www.youtube.com/watch?v=FaRFgF39W5Y&list=PL05JrBw4t0Ko6y092ciE_CMpGiYyKChFN&index=4)

{{% /alert %}}

### GoLinks

**学べること:**

- よくアクセスするリソースのカスタムショートカット (GoLinks) を作成する方法
- GoLinks が使える場所 (Glean 検索とブラウザのアドレスバー)
- 他の人が作成した既存の GoLinks を見つけて使用する方法
- GoLinks が最も役立つ場面 (頻繁に共有されるリソース、共通プロセス)

**GoLink の作成方法**

検索結果から作成する場合:

- 対象のドキュメントまたはページを検索
- 結果の三点リーダー (⋮) をクリック
- 「Create Go Link」を選択
- ショートカット名を選ぶ
- 必要であれば「More options」を展開して「Unlisted」に設定 (Unlisted な Go Links は Glean のどこにも他の人には表示されません。リンクを共有した相手であれば誰でも使用できます)
- 作成

直接作成する場合:

- Glean のホーム画面から右上の「New」をクリック
- 「Go Link」を選択
- 移動先 URL を入力
- ショートカット名を選ぶ
- 必要であれば「More options」を展開して「Unlisted」に設定 (Unlisted な Go Links は Glean のどこにも他の人には表示されません。リンクを共有した相手であれば誰でも使用できます)
- 作成

**クイックヒント:**

- Glean のブラウザ拡張機能をインストールすると、ブラウザのアドレスバーから GoLinks を使用できます
- チームの慣習を使いましょう: チームが「the playbook」と呼んでいるなら go/playbook にしましょう
- 重複を避けるため、新しく作成する前に既存の GoLinks を参照しましょう - [完全な一覧はこちら](https://app.glean.com/knowledge/golinks)
- GoLinks は Glean の検索とブラウザのアドレスバーで機能します (go/expenses と入力して Enter を押すなど)

{{% alert color="warning" %}}
**重要なガイドライン:**

- **GoLinks を Slack のスレッドや投稿に向けないでください** - Slack のコンテンツは 90 日後に期限切れとなり、GoLink が機能しなくなります。
- **業務用コンテンツのみ** - ミーム、YouTube 動画、個人的なコンテンツ、業務外のリソースに対して GoLinks を作成しないでください。
- **具体的でわかりやすく** - 将来のあなた (および関連するチームメンバー) が、その GoLink が何につながるのかを即座に理解できるようにしましょう。
{{% /alert %}}

<div style="padding:56.25% 0 0 0;position:relative;">
  <iframe src="https://www.youtube.com/embed/dh4K5-fTmf0"
    frameborder="0"
    allow="autoplay; fullscreen; picture-in-picture"
    style="position:absolute;top:0;left:0;width:100%;height:100%;"
    title="GoLinks"></iframe>
</div>

{{% alert color="info" %}}

YouTube リンク: [Confidential: Glean 101 - 4. GoLinks](https://www.youtube.com/watch?v=dh4K5-fTmf0&list=PL05JrBw4t0Ko6y092ciE_CMpGiYyKChFN&index=5)

{{% /alert %}}

## Glean Agents

学べること:

- Glean Agents とは何か、いつ使うか
- 2 種類の主要なエージェントタイプ (会話型とタスクベース)
- _Morning Brief – Gamified Edition_ などのサンプルエージェントの仕組み
- 自分自身のエージェントを構築し始める方法

<div style="padding:56.25% 0 0 0;position:relative;">
  <iframe src="https://www.youtube.com/embed/oAm00iy36SA"
    frameborder="0"
    allow="autoplay; fullscreen; picture-in-picture"
    style="position:absolute;top:0;left:0;width:100%;height:100%;"
    title="Agents"></iframe>
</div>

{{% alert color="info" %}}

YouTube リンク: [Confidential: Glean 201 - 1. Agents](https://www.youtube.com/watch?v=oAm00iy36SA&list=PL05JrBw4t0Ko6y092ciE_CMpGiYyKChFN&index=6)

{{% /alert %}}

**Glean Agents とは?**

Glean Agents は、GitLab の既存のナレッジ (ハンドブック、GitLab、Slack、Gmail、カレンダー、Salesforce など) を活用してあなたに代わってタスクを実行する、ノーコードで権限を考慮した AI ツールです。

エージェントは以下を行うインテリジェントなワークフローです:

- あなたから (オプションでスケジュールに基づいて) 入力を収集
- 一連のアクション (検索、読み取り、分析、計画) を実行
- 特定の成果 (要約、計画、チェックリスト、ブリーフなど) を提供

エージェントは次のような場合に特に役立ちます:

- 大量で繰り返し発生するアクティビティ
- 標準化可能なプロセス
- 高い価値の成果を持つ時間のかかる作業
- データソースの制限や特定のコンテキストの追加によって品質と一貫性が向上するユースケース

**エージェントの種類**

- **会話型エージェント**: 厳選されたコンテキストを使って多様な質問に答えられる、チャット形式のエージェント (例: Duo Agent Platform Expert エージェント)。
- **タスクベースのエージェント**: 複雑なタスクをエンドツーエンドで自動化 (例: 複数のシステムから morning brief や週次サマリーを生成)。

![glean-agents1](/images/business-technology/enterprise-applications/guides/glean/agents2.png)

**例: Morning Brief – Gamified Edition**

_Morning Brief – Gamified Edition_ エージェントは、1 日を始めるのに必要なすべてをまとめた日々の「dev quest」を準備するため、ツールをまたいで手動で検索する必要がなくなります。

通常は以下を実行します:

- 割り当てられた GitLab の Issue、マージリクエスト、関連するワークアイテムを確認
- 前日の Slack の最新アップデートをスキャン
- 過去数日のメールアクティビティをレビュー
- カレンダーを確認して今後のミーティングを参照
- これらすべてを集約・統合して、実行可能で優先順位付けされたブリーフを生成

**エージェントの仕組み**

内部的には、エージェントは次のような相互接続されたアクションブロックの集まりです:

- 異なるデータソース (例: GitLab、Slack、Gmail、カレンダー) から読み取り
- 取得した情報に対して何をすべきかを計画・思考
- エージェントの目標に合わせた、人間が読める最終出力を返す

このパターンは多くのエージェントのユースケースで再利用されます。主な違いは、どのデータソースを使い、最終的な応答がどのような形であるべきかという点です。

**エージェントの見つけ方と実行方法**

1. Glean の左ナビゲーションで **Agents** を選択します。
2. 検索とフィルターを使って利用可能なエージェントを探します。
3. エージェントをクリックして詳細を開き、説明と権限を確認した上で、**Run agent** を選択します。
4. 繰り返しのワークフローには **Set schedule** を使って、エージェントが自動的に実行されるようにしましょう (例: 平日の毎朝)。

![glean-agents2](/images/business-technology/enterprise-applications/guides/glean/agents.png)

**自分自身のエージェントを作り始める**

1. 左ナビゲーションの **Agents** に移動し、**Create agent** を選択します。
2. 構築方法を選択します。Glean は 2 つのモードを提供しており、いつでも切り替えられます:
   - **自然言語で構築する (推奨される出発点)**。エージェントに何をさせたいか、どのシステムを使うべきか、出力がどのようなものであるべきかを記述します (例: 「最新の Issue、MR、ノート、ミーティングドキュメントに基づいて、自分のプロジェクトワーキンググループチャンネル向けの簡潔な Slack アップデートを下書きする」)。Glean がステップを生成します。
   - **ステップごとに構築する (上級)**。トリガー、アクション、分岐、メモリ、サブエージェントを自分で追加します。各ステップ、条件付きロジック、カスタムアクション、または独立して動作するサブエージェントを精密に制御する必要がある場合に使用します。
3. または、適合するテンプレートがあれば、そこから始めましょう。Glean は一般的なパターン (デイリーアクションアイテム、顧客リファレンス要約、ペルソナベースのメッセージングなど) のテンプレートを提供しており、これらをカスタマイズできます。
4. エージェントをテストし、出力をレビューし、プロンプトとステップを反復改善して品質とユーザビリティを高めましょう。
5. 満足できたら、必要に応じてスケジュールを設定したり、関連チームとエージェントを共有したりします。

**エージェントの検証と共有**

- **検証:** Glean でエージェントを検証するには、Enterprise AI チームと連携する必要があります。個々のユーザーが自身でエージェントを検証することはできません。
- **共有:** GitLab の全員にエージェントを共有するには、Enterprise AI チームと協力してください。個々のユーザーは、特定のチームメンバーに対してのみ直接エージェントを共有できます。
- **エージェントの公開:** 公開オプション (例: API や Slack 統合経由) はデフォルトではすべてのエージェントで有効になっているわけではありません。エージェントの公開を設定するには、Enterprise AI チームと連携してください。

{{% alert color="info" %}}

Enterprise AI チームと連携するには、`#glean-community` で質問するか、`@glean-admin` にタグを付けてください。
{{% /alert %}}

**エージェントのためのクイックヒント**

- ゼロから構築するのではなく、既存のサンプルエージェント (_Morning Brief_ や _Weekly Summary & Plans_ など) から始めてカスタマイズしましょう。
- 各エージェントを 1 つの明確な成果に集中させましょう (例: 「morning brief を準備する」対「一日のすべてを行う」)。
- 正確性が重要な場合は、アシスタントの回答と同様に、顧客やリーダーシップに共有する前にエージェント出力で引用されているソースをレビューしてください。

## ヒントとベストプラクティス

### 検索のベストプラクティス

**明確で具体的なクエリを書く:**

- 製品名、顧客名、システム名を含める
- 自然言語を使う: 「どうすればいいですか?」「〜のプロセスは何ですか?」
- シンプルに始めて、必要であればフィルターを追加する

**ソースを検証する:**

- 情報がどこから来ているかを常に確認する
- 顧客向け資料で使用する前に、引用されているソースを開く
- 重要な意思決定では相互参照する

**引用符を使う:**

- 正確な一致のためには、完全なフレーズを引用符で囲む
- 例: "expense reimbursement policy" はその正確なフレーズを見つけます

### チャット／アシスタントのベストプラクティス

**明確な質問をする:**

- 質問の最後にクエスチョンマーク (?) を付ける
- 関連するコンテキストを含める: 「CustomerX に対する Zendesk の最近のサポートチケットを見つけられますか?」
- 必要に応じてシステムを指定する: 「Slack で ProjectY に関するディスカッションを検索してください」

**AI の回答を検証する:**

- 情報に基づいて行動する前に、引用されているソースを確認する
- 顧客向けコンテンツやポリシーに関する意思決定では特に重要
- ソースはすべての AI レスポンスにリンクされています

## サポートが必要ですか?

これらの動画で探しているものが見つかりませんか?

- 詳細なドキュメントについては [Glean エンドユーザーガイド](/handbook/eta/ai/tools/glean/)を確認してください
- Slack の [#glean-community](https://gitlab.enterprise.slack.com/archives/C0A897TSKNG) で質問してください
- 技術的な問題については @glean-admin にタグを付けてください

---

**動画は作成され次第追加されます - 新しいコンテンツを定期的にチェックしてください!**
