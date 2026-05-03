---
title: "Glean ヒント & チュートリアル"
description: "GitLab の AI ナレッジプラットフォームである Glean を最大限に活用するための動画ガイドと実践的なヒント。"
upstream_path: "/handbook/business-technology/enterprise-applications/guides/glean-tips/"
upstream_sha: "b4eeb07f0d5f46e2fc5f8572be1a2547261aed89"
translated_at: "2026-04-25T05:49:40Z"
translator: "claude"
stale: false
---


<div class="my-4 border-l-4 border-amber-500 bg-amber-50 px-4 py-3 rounded-r">

Glean の詳細なドキュメントについては、[Glean エンドユーザーガイド](/handbook/business-technology/enterprise-applications/guides/glean-guide/)をご確認ください。

</div>


## はじめに

### Glean へのアクセス方法

**学べること:**

- Okta、app.glean.com、モバイルアプリでのログイン
- Glean インターフェースへの初めてのアクセス
- Chrome ブラウザ拡張機能のインストールと使用

**クイックヒント:**

- モバイルにインストールして外出先でも検索できるようにする
- 質問は [#glean-community](https://gitlab.enterprise.slack.com/archives/C0A897TSKNG) に参加する

<div style="padding:56.25% 0 0 0;position:relative;">
  <iframe src="https://www.youtube.com/embed/Tkult5xOEk0"
    frameborder="0"
    allow="autoplay; fullscreen; picture-in-picture"
    style="position:absolute;top:0;left:0;width:100%;height:100%;"
    title="Descriptive Video Title"></iframe>

</div>


<div class="my-4 border-l-4 border-amber-500 bg-amber-50 px-4 py-3 rounded-r">

YouTube リンク: [社外秘: Glean 101 - 1. ログイン](https://www.youtube.com/watch?v=Tkult5xOEk0&list=PL05JrBw4t0Ko6y092ciE_CMpGiYyKChFN&index=2)

</div>


### 検索とアシスタント（チャット）の使い分け

**学べること:**

- 検索を使う場合（特定のドキュメント、人物、情報を探す場合）
- アシスタント/チャットを使う場合（AI 生成の回答や要約が欲しい場合）
- それぞれの実際の例

**クイックヒント:**

- 探しているものがわかっている場合は検索を使う: 「AMER スワッグのプロセス」、顧客名、特定のドキュメント
- 回答が欲しい場合はアシスタントを使う: 「経費を申請するにはどうすればよいですか？」、「育児休暇ポリシーは？」

<div style="padding:56.25% 0 0 0;position:relative;">
  <iframe src="https://www.youtube.com/embed/dZY47FKcVfc"
    frameborder="0"
    allow="autoplay; fullscreen; picture-in-picture"
    style="position:absolute;top:0;left:0;width:100%;height:100%;"
    title="Search vs Assistant - Know the Difference"></iframe>

</div>


<div class="my-4 border-l-4 border-amber-500 bg-amber-50 px-4 py-3 rounded-r">

YouTube リンク: [社外秘: Glean 101 - 2. Glean チャットと検索](https://www.youtube.com/watch?v=dZY47FKcVfc&list=PL05JrBw4t0Ko6y092ciE_CMpGiYyKChFN&index=3)

</div>


## 高度な検索テクニック

### 高度な検索フィルター

**学べること:**

- Glean が検索するシステム（ハンドブック、Slack、Salesforce、GitLab、Google Workspace 等）
- 検索フィルターを使って結果を絞り込む
- 複数のフィルターを組み合わせて精度を上げる

**クイックヒント:**

- ソースでフィルター: `app:slack`、`app:gitlab`、`app:drive`
- 日付でフィルター: `updated:today`、`updated:past_2_weeks`
- タイプでフィルター: `type:issue`、`type:email`
- フィルターを組み合わせる: `customer-name app:salesforce updated:>7d`

### ファストモード vs シンキングモード vs ディープリサーチ

**学べること:**

- 3 つのモードとそれぞれの使用タイミングの理解
- モードの切り替え方法

**クイックヒント:**

- **ファストモード（デフォルト）:** 検索のデフォルトとして使用 - ドキュメント検索、Q&A、要約、下書き
  - _「経費ポリシーを見つけて」、「このミーティングを要約して」、「メールの返信を下書きして」_
- **シンキングモード:** 深い推論が必要な複雑な分析に使用
  - _「Q3 と Q4 のアプローチを比較してトレードオフを含む変更点を推奨して」_
- **ディープリサーチ:** 複数のソースからの包括的なレポートが必要な場合に使用
  - _「全顧客セグメントにわたる営業戦略を分析して包括的な推奨事項を提供して」_

<div style="padding:56.25% 0 0 0;position:relative;">
  <iframe src="https://www.youtube.com/embed/FaRFgF39W5Y"
    frameborder="0"
    allow="autoplay; fullscreen; picture-in-picture"
    style="position:absolute;top:0;left:0;width:100%;height:100%;"
    title="Chat Modes"></iframe>

</div>


<div class="my-4 border-l-4 border-amber-500 bg-amber-50 px-4 py-3 rounded-r">

YouTube リンク: [社外秘: Glean 101 - 3. チャットモード](https://www.youtube.com/watch?v=FaRFgF39W5Y&list=PL05JrBw4t0Ko6y092ciE_CMpGiYyKChFN&index=4)

</div>


### GoLink

**学べること:**

- 頻繁にアクセスするリソースへのカスタムショートカット（GoLink）の作成方法
- GoLink が機能する場所（Glean 検索とブラウザのアドレスバー）
- 他のメンバーが作成した既存の GoLink の検索と使用方法
- GoLink が最も役立つ場面（頻繁に共有されるリソース、一般的なプロセス）

**GoLink の作成方法**

検索結果から:

- ドキュメントまたはページを検索する
- 結果の三点リーダー（⋮）をクリックする
- 「Go Link を作成」を選択する
- ショートカット名を選択する
- 必要に応じて「詳細オプション」を展開して「非公開」に設定する（非公開 Go Link は Glean のどこにも他のユーザーに表示されません。共有したリンクを持つ誰でも使用できます）
- 作成する

直接作成:

- Glean のホームページで右上の「新規」をクリックする
- 「Go Link」を選択する
- 宛先 URL を入力する
- ショートカット名を選択する
- 必要に応じて「詳細オプション」を展開して「非公開」に設定する（非公開 Go Link は Glean のどこにも他のユーザーに表示されません。共有したリンクを持つ誰でも使用できます）
- 作成する

**クイックヒント:**

- Glean ブラウザ拡張機能をインストールして、ブラウザのアドレスバーで GoLink を使用できるようにする
- チームの慣習を使用する: チームが「プレイブック」と呼んでいるなら go/playbook にする
- 重複を避けるために新規作成前に既存の GoLink を閲覧する - [こちらに完全なリスト](https://app.glean.com/knowledge/golinks)があります
- GoLink は Glean 検索とブラウザのアドレスバーで機能します（go/expenses と入力して Enter を押す）


<div class="my-4 border-l-4 border-amber-500 bg-amber-50 px-4 py-3 rounded-r">

**重要なガイドライン:**

- **GoLink を Slack のスレッドや投稿に指定しないでください** - Slack のコンテンツは 90 日後に期限切れになり、GoLink が壊れます。
- **業務コンテンツのみ** - ミーム、YouTube 動画、個人コンテンツ、業務以外のリソースに GoLink を作成しないでください。
- **具体的かつ明確にする** - 未来の自分（および関連するチームメンバー）が GoLink が何につながるかを即座に理解できるようにします。

</div>


<div style="padding:56.25% 0 0 0;position:relative;">
  <iframe src="https://www.youtube.com/embed/dh4K5-fTmf0"
    frameborder="0"
    allow="autoplay; fullscreen; picture-in-picture"
    style="position:absolute;top:0;left:0;width:100%;height:100%;"
    title="GoLinks"></iframe>

</div>


<div class="my-4 border-l-4 border-amber-500 bg-amber-50 px-4 py-3 rounded-r">

YouTube リンク: [社外秘: Glean 101 - 4. GoLink](https://www.youtube.com/watch?v=dh4K5-fTmf0&list=PL05JrBw4t0Ko6y092ciE_CMpGiYyKChFN&index=5)

</div>


## Glean エージェント

学べること:

- Glean エージェントとは何か、いつ使うか
- 2 つの主なエージェントタイプ（会話型とタスクベース）
- _Morning Brief – Gamified Edition_ などのエージェントの例の動作
- 独自のエージェントを構築し始める方法

<div style="padding:56.25% 0 0 0;position:relative;">
  <iframe src="https://www.youtube.com/embed/oAm00iy36SA"
    frameborder="0"
    allow="autoplay; fullscreen; picture-in-picture"
    style="position:absolute;top:0;left:0;width:100%;height:100%;"
    title="Agents"></iframe>

</div>


<div class="my-4 border-l-4 border-amber-500 bg-amber-50 px-4 py-3 rounded-r">

YouTube リンク: [社外秘: Glean 201 - 1. エージェント](https://www.youtube.com/watch?v=oAm00iy36SA&list=PL05JrBw4t0Ko6y092ciE_CMpGiYyKChFN&index=6)

</div>


**Glean エージェントとは？**

Glean エージェントは、GitLab の既存のナレッジ（ハンドブック、GitLab、Slack、Gmail、カレンダー、Salesforce 等）を使用して、あなたの代わりにタスクを実行するノーコードの権限考慮型 AI ツールです。

エージェントはインテリジェントなワークフローであり:

- あなたからの入力を収集する（オプションでスケジュールに基づいて）
- 一連のアクション（検索、読み取り、分析、計画）を実行する
- 特定の成果（サマリー、計画、チェックリスト、ブリーフ等）を提供する

エージェントは以下の場合に最も役立ちます:

- 大量の定期的なアクティビティ
- 標準化可能なプロセス
- 高価値な成果をもたらす時間集約的な作業
- データソースを限定したり特定のコンテキストを追加したりすることで品質と一貫性が向上するユースケース

**エージェントタイプ**

- **会話型エージェント**: キュレーションされたコンテキストを使用してさまざまな質問に答えられるチャット形式のエージェント（例: Duo Agent Platform Expert エージェント）。
- **タスクベースエージェント**: 複雑なタスクをエンドツーエンドで自動化する（例: 複数のシステムからモーニングブリーフや週次サマリーを生成する）。

![glean-agents1](/images/business-technology/enterprise-applications/guides/glean/agents2.png)

**例: Morning Brief – Gamified Edition**

_Morning Brief – Gamified Edition_ エージェントは、複数のツールを手動で検索することなく一日を始めるために必要なすべてをまとめた日次「デブクエスト」を作成します。

通常以下を行います:

- 割り当てられた GitLab の Issue、マージリクエスト、関連する作業アイテムを確認
- 過去 1 日の最近の Slack 更新をスキャン
- 過去数日間の最近のメールアクティビティを確認
- 今後のミーティングのカレンダーを確認
- これらすべてを集約・統合して、実行可能な優先度付きブリーフを作成

**エージェントの動作方法**

内部的に、エージェントは以下の接続されたアクションブロックのセットです:

- 異なるデータソースから読み取る（例: GitLab、Slack、Gmail、カレンダー）
- 取得した情報で何をすべきか計画・思考する
- エージェントの目標に合わせた最終的な人間が読めるアウトプットで応答する

このパターンは多くのエージェントユースケースで再利用されます。主な違いは使用するデータソースと最終的なレスポンスの形式です。

**エージェントの検索と実行方法**

1. Glean の左ナビゲーションで **エージェント** を選択します。
2. 検索とフィルターを使用して利用可能なエージェントを探索します。
3. エージェントをクリックして詳細を開き、説明と権限を確認してから **エージェントを実行** を選択します。
4. 定期的なワークフローには **スケジュールを設定** を使用してエージェントが自動的に実行されるようにします（例: 毎朝の平日）。

![glean-agents2](/images/business-technology/enterprise-applications/guides/glean/agents.png)

**独自のエージェントを始める方法**

1. 左ナビゲーションの **エージェント** に移動して **エージェントを作成** を選択します。
2. **自然言語で構築** オプションを使用して以下を説明します:
   - エージェントに何をしてほしいか
   - どのシステムを使用すべきか
   - アウトプットはどのような形式にすべきか（例: 「最新の Issue、MR、ノート、ミーティングドキュメントに基づいて、プロジェクトワーキンググループチャンネル向けの簡潔な Slack 更新を下書きして」）。
3. エージェントをテストし、アウトプットを確認して、品質とユーザビリティを向上させるためにプロンプトとステップを改善します。
4. 満足したら、オプションでスケジュールを設定するか、関連するチームとエージェントを共有します。

**エージェントの検証と共有**

- **検証:** Glean でエージェントを検証するには、Enterprise AI チームと協力する必要があります。個々のユーザーは自分でエージェントを検証することはできません。
- **共有:** GitLab の全員とエージェントを共有するには、Enterprise AI チームと協力します。個々のユーザーは特定のチームメンバーとのみ直接エージェントを共有できます。
- **エージェントの公開:** 公開オプション（例: API や Slack 統合経由）はデフォルトですべてのエージェントに有効化されていません。エージェントの公開を設定するには、Enterprise AI チームと協力してください。


<div class="my-4 border-l-4 border-amber-500 bg-amber-50 px-4 py-3 rounded-r">

Enterprise AI チームと協力するには、`#glean-community` で質問するか `@glean-admin` をタグ付けしてください。

</div>


**エージェントのクイックヒント**

- ゼロから構築するのではなく、既存のサンプルエージェント（_Morning Brief_ や _Weekly Summary & Plans_ など）から始めて適応させてください。
- 各エージェントを単一の明確な成果に集中させてください（例: 「モーニングブリーフを作成する」と「一日のすべてをこなす」）。
- 精度が重要な場合は、アシスタントの回答と同様に、顧客や経営陣と共有する前にエージェントのアウトプットで引用されたソースを確認してください。

## ヒント & ベストプラクティス

### 検索のベストプラクティス

**明確で具体的なクエリを書く:**

- 製品名、顧客名、またはシステム名を含める
- 自然言語を使用する: 「〜するにはどうすればよいですか？」、「〜のプロセスは？」
- シンプルに始めて、必要に応じてフィルターを追加する

**ソースを確認する:**

- 情報がどこから来ているかを常に確認する
- 顧客向けの資料で使用する前に引用されたソースを開く
- 重要な決定については相互参照する

**引用符を使用する:**

- 正確なフレーズを引用符で囲んで厳密にマッチさせる
- 例: 「expense reimbursement policy」はその正確なフレーズを検索します

### チャット/アシスタントのベストプラクティス

**明確な質問をする:**

- 質問には疑問符（？）をつける
- 関連するコンテキストを含める: 「Zendesk から CustomerX の最近のサポートチケットを見つけてもらえますか？」
- 必要に応じてシステムを指定する: 「Slack で ProjectY に関する議論を検索して」

**AI の回答を確認する:**

- 情報に基づいて行動する前に引用されたソースを確認する
- 顧客向けコンテンツやポリシー決定には特に重要
- すべての AI レスポンスにソースがリンクされています

## ヘルプが必要ですか？

これらの動画で探しているものが見つかりませんか？

- 詳細なドキュメントは [Glean エンドユーザーガイド](/handbook/business-technology/enterprise-applications/guides/glean-guide/)をご確認ください
- Slack の [#glean-community](https://gitlab.enterprise.slack.com/archives/C0A897TSKNG) で質問してください
- 技術的な問題は @glean-admin をタグ付けしてください

---

**動画は作成され次第追加されます - 新しいコンテンツを定期的にご確認ください！**
