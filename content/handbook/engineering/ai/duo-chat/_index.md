---
title: Duo Chat グループ
description: "私たちは GitLab のプラットフォームに対する AI 自然言語インターフェースを構築することで、DevSecOps の生産性を高めることに尽力しています。"
upstream_path: /handbook/engineering/ai/duo-chat/
upstream_sha: b4eeb07f0d5f46e2fc5f8572be1a2547261aed89
translated_at: "2026-04-26T03:00:00Z"
translator: claude
stale: false
lastmod: "2025-12-15T11:32:24-06:00"
---

## 🚀 チームメンバー

**エンジニアリングマネージャーとエンジニア**


<p class="my-3 text-sm text-gray-600 italic">チームメンバー情報は <a href="https://handbook.gitlab.com/handbook/engineering/ai/duo-chat/#-team-members" rel="external noopener">原文 (英語)</a> を参照してください。</p>


**プロダクト、デザイン、品質**


<p class="my-3 text-sm text-gray-600 italic">チームメンバー情報は <a href="https://handbook.gitlab.com/handbook/engineering/ai/duo-chat/" rel="external noopener">原文 (英語)</a> を参照してください。</p>


## ビジョン

Duo Chat グループは、他のプロダクトグループや広いコミュニティがより多くの機能を統合できるよう支援することで、GitLab Duo Chat をプラットフォームとして開発することに注力しています。プロダクトカテゴリとしての GitLab の Duo Chat の詳細は、[Product Category Direction](https://about.gitlab.com/direction/ai-powered/duo_chat/) ページを参照してください。

### 技術戦略

私たちのチームは GitLab の DevSecOps プラットフォーム内の対話を強化する LLM 駆動のチャットアプリケーションを開発しているため、技術戦略は信頼性、スケーラビリティ、効果性を確保する重要なエンジニアリング側面の確立に焦点を当てています。これをガイドラインとツールを通じて公開し、コントリビュートするチームが恩恵を受けられるようにします。詳細は [Technical Strategy](technical-strategy.html) ページを参照してください。

## 📚 内部プロセス

### ホストシステム

ホストシステムとは、DuoChat が統合されているプラットフォームのことです。以下は現在存在するすべてのホストシステムのリストです。

| ホストシステム | 説明 | リポジトリリンク |
| -------- | ------- | ------- |
| GitLab Web UI | DuoChat 用の Web ベースのユーザーインターフェース | https://gitlab.com/gitlab-org/gitlab |
| VS Code | DuoChat を統合する Visual Studio Code 拡張機能 | https://gitlab.com/gitlab-org/gitlab |
| Visual Studio | DuoChat を統合する Visual Studio 拡張機能  | https://gitlab.com/gitlab-org/editor-extensions/gitlab-lsp |
| JetBrains| DuoChat の JetBrains IDE プラグイン  |  https://gitlab.com/gitlab-org/editor-extensions/gitlab-jetbrains-plugin|

### DuoChat 統合のオーナーシップとメンテナンス

これは DuoChat 統合に関するオーナーシップとメンテナンスの責任を定義し、DuoChat チームと Editor Extensions チームの役割を詳述しています。

| システム部分 | 担当グループ |
| -------- | ------- |
| Duo-UI 内の共有 UI コンポーネント | group: duo chat |
| VS Code - Chat Webview | group: duo chat（サポート: editor extensions） |
| VS Code - Chat ビジネスロジック | group: editor extensions  |
| Visual Studio - Chat Webview（Web ページ）| group: duo chat（サポート: editor extensions） |
| Visual Studio - Chat ビジネスロジック| group: editor extensions |
| JetBrains - Chat Webview（Web ページ）| group: duo chat（サポート: editor extensions） |
| JetBrains - Chat ビジネスロジック| group: editor extensions |

#### 責任

1. シンプルなコンポーネント更新: UI コンポーネントグループ（group: duo chat）が責任を持ちます。
2. 複雑な機能統合: UI コンポーネントグループ（group: duo chat）が統合を主導し、ダミーデータを使った拡張機能との通信用スタブを作成します。group: editor extensions が IDE プラグインへの統合作業をサポートします。
3. 破壊的変更: すべての破壊的変更は早めに伝達するべきです。IDE 拡張機能のワークフローへの混乱を防ぐため、可能な限り新機能をオプションにすることを検討してください。

#### ツール

- [GitLab Duo Hosts Status Page](https://jannik_lehmann.gitlab.io/gitlab-ui-hosts-status-page/): 各ホストシステムが使用する GitLab UI と Duo UI のバージョンを追跡します。

### UX レビュー

- Duo Chat には専任の UX 担当者がいないため、AI Framework チームの UX エキスパートが UX レビューを支援します。
- 各 MR には明確なスクリーンキャストを含めることを推奨します。レビュアーはローカルで変更を再現するか、それが難しい場合は同期で集まって効果的にコラボレーションすることを検討してください。
- キャパシティが許す限り、すべてのユーザー向け MR について UX レビューを目指します。可用性に変更がある場合は MR 上で伝達されます。

### プランニングプロセス

このフローチャートは Duo Chat チームのプランニングプロセスを示しています。

![Duo Chat Planning Flowchart](/images/duo_chat_planning_flowchart.png)

チャートの上部は、正式なマイルストーンプランニングの前に行うことを示しています。これらの事前計画活動は、新しい Issue が作成されるにつれて、継続的に進めていくべきです。

図の下部は、暦月の最初の 2 週間に発生することを示しており、その期間にマイルストーンの Issue を正式に追加し、全体的な負荷を評価して、Deliverable にコミットします。

**プランニングブレークダウン** ステップでは、ウェイトを割り当てる前にエンジニアが回答できるべき質問は次のとおりです。

- 要件は明確で具体的であり、何を提供することが期待されているかを完全に理解できているか?
- 要件は包括的で、実行のあまり明らかでない経路（つまりエッジケース、パッケージング、エラーハンドリングなど「ハッピーパス」以外）の一部をカバーしているか?
- 非機能要件に関する考慮事項は考慮されているか? すなわちスケーラビリティ、アクセシビリティ、コンプライアンス、セキュリティ、計装など。
- 品質期待値および／または評価のレベルに関する要件は明確で理解されているか?
- Issue の合理的な見積もりを提供できるような技術実装への道筋が見えるか? すなわち、追加の技術調査スパイクなしで、すべての技術的不明点が解決されているか管理可能か?

これらの質問のいずれかに「いいえ」と答えるなら、Issue は `~workflow::refinement` に戻すべきです。

### Issue 見積もり

このシステムは、以前の Foundations チームのウェイトシステムから *インスピレーション* を得て、タスクを見積もる際に使用すべきものです。

- **0 - ほとんど、または全く労力を必要としない** Issue を作成するよりも実行する方が早いもの。
- **1 - 極小**  エンジニアがほとんどの要件を理解していると感じ、比較的簡単であると考えるもの。おそらくマイルストーン内で最小の項目で、1 日で完了する可能性が最も高い。
- **2 - 小** 少しの考察、労力、または問題解決が必要だが、エンジニアは要件に確信を持っている。
- **3 - 平均**  エンジニアはこれを何度もやってきており、何をすべきか知っている。いくつかの追加ステップがあるかもしれないが、それだけ。
- **5 - 大**  これは複雑な作業であるか、エンジニアがあまり頻繁にやらない作業。ほとんどのエンジニアはチームの誰かからの支援が必要になる。これはおそらくマイルストーン内で完了できる最大の項目の 1 つ。
- **8 - 特大** これにはかなりの時間と研究が必要で、マイルストーン内で完了するためにはおそらく複数のエンジニアが必要。このサイズでは、より小さな Issue／タスクに分割する方法を検討すべき。
- **13+ - 大きすぎる** この Issue はあまりに複雑、大きい、または定義不足。このサイズのウェイトを持つものは、リファインしてより扱いやすいチャンクに分割するため `~workflow::refinement` に戻すべき。

## Duo Chat のトラブルシューティング

Duo Chat の Issue をトラブルシューティングするための包括的なランブックは、[Duo Chat Runbook ページ](https://gitlab.com/gitlab-com/runbooks/-/blob/master/docs/duo-chat/README.md?ref_type=heads) で見つけられます。

ギャップに気付いた場合は、Duo Chat グループに気軽に連絡するか、ランブックへの変更を含む MR を作成してください。

## Duo Chat にサポートを求める方法

他の GitLab 機能と同様、サポートの第一線は GitLab サポートチームと Zendesk チケットにアサインされたエンジニアであるべきです。しかし、より深い専門性が顧客の懸念を解決するために必要な場合があり、Duo Chat エンジニアの関与が必要になります。このセクションでは、Duo Chat に関連する顧客サポート Issue について、チームにサポートを依頼するときのプロセスと期待を説明します。

### ヘルプを求める前に

サポートに連絡する前に、まずあなたの問い合わせが Duo Chat の動作とサポートされている機能および／または要件に関連しているかどうかを検討してください。その場合は、Duo Chat の [ドキュメント](https://docs.gitlab.com/ee/user/gitlab_duo_chat/) をレビューしてください。

ユーザーから報告された特定のエラーコードがある場合は、[トラブルシューティングページ](https://docs.gitlab.com/ee/user/gitlab_duo_chat/troubleshooting.html) もレビューできます。

顧客から報告された問題を調査しているサポートエンジニアの場合は、開発チームに連絡する前に [Duo Chat Runbook](https://gitlab.com/gitlab-com/runbooks/-/blob/master/docs/duo-chat/README.md?ref_type=heads) を確認してください。これにより、ヘルプを求めた際に Duo Chat エンジニアがあなたをよりよくサポートできます。

### 一般的な質問をする

答えが見つからない一般的な質問がある場合は、Slack の *#g_duo_chat* チャンネルで気軽に質問してください。このチャンネルには、Duo Chat の使い方と機能について幅広い知識を持つ多数のステークホルダーがいます。

Duo Chat エンジニアはこのチャンネルを定期的にモニタリングしてサポートを提供しています。エンジニアはあなたをサポートし、思いつく範囲で質問に答えるよう最善を尽くしますが、より多くの調査が必要だったり、より複雑なシナリオに対処する必要がある場合は、Duo Chat サポート Issue を作成する必要があります（次のセクションを参照）。

### バグの提出

あなたのリクエストが実際にソフトウェアバグに関するものかを検討してください。バグとは、Duo Chat がサポートする機能のギャップであり、機能仕様に従ってユーザーエクスペリエンスを完成させるために対処すべきものです。この場合、サポート Issue を作成する代わりに、`/gitlab` プロジェクトで「bug」タイプの Issue を作成してください。問題を再現するためのすべての詳細を提供し、グループラベルを Duo Chat にアサインしてください。トリアージのため EM と PM にメンションしてもよいです。トリアージされたバグは、その重大度とチームの他の優先度に応じて、解決のために対応する将来のイテレーションにアサインされます。

### サポートリクエスト Issue の作成

私たちは、顧客やそのプロキシが Duo Chat チームから支援を必要とし、それが単純な質問に答える以上の場合に Issue を使用することを好みます。これは作業を優先順位付けし、Slack の保持ポリシーが期限切れになったときに履歴を失わずコンテキストを維持するのに役立ちます。これらのリクエストは [Duo Chat Support プロジェクト](https://gitlab.com/gitlab-org/ai-powered/duo-chat/support) で作成されます。

Duo Chat エンジニアは Slack ワークフロー自動化を活用して Issue の作成を支援できます。Slack スレッドがサポート Issue（つまり単なる一般的な質問ではない）と判断されると、エンジニアは会話をサポートリクエストに移動するよう提案し、Slack スレッドから Issue のドラフトを作成します。ヘルプを求めている個人はその後、Zendesk リンク、ログファイル、その他の問題や質問に関する補足証拠などの詳細を追加できます。

または、複雑なリクエストがあることが分かっている場合は、直接 Issue を開いて時間を節約し、Slack でリンクと共にチームにメンションすることもできます。
リクエストに優先度ラベルをアサインすることもできます。Duo Chat チームメンバーまたは PM が Issue のトリアージ中にこの優先度割り当てをレビューします。優先度レベルと予想される応答時間の参考として、以下の表を使用してください。

| 優先度 | 通常の用途 | 予想される解決 |
|----------|--------------------|------------------------------|
| P4 | Slack 上で Duo Chat エンジニアが思いつく範囲では簡単に答えられず、もう少し調査が必要な一般的な質問。緊急ではない顧客の問題（つまり簡単な回避策がある、非常にニッチ、または断続的に発生する） | 1 週間以内 |
| P3 | 広範囲ではないがエスカレーションされた顧客の問題（つまりキー顧客や重要なビジネス機会に紐づく） | 72 時間以内 |
| P2 | 時間的に重要で、回避策がなく、持続的な顧客の問題。さらに、その問題が顧客側で意思決定や進捗を大きくブロックしている。 | 36 時間以内 |
| P1 | Duo Chat の障害（SaaS または SM） | できるだけ早く |

\* サポート対応時間は、チームメンバーがいるタイムゾーン（AMER、EMEA、APAC）の通常の営業時間内（祝日を除く平日）でのチームメンバーの可用性に基づきます。通常のチームメンバーの可用性外の障害やその他の緊急事項は、GitLab の [インシデント管理](/handbook/engineering/infrastructure-platforms/incident-management/) プロセスを通じて対処されるべきです。

### サポートエンジニアのペアリング

Duo Chat エンジニアはより複雑な顧客サポート Issue の一部を効果的に対処するためにユニークな立場にありますが、すべてのリクエストに GitLab サポートエンジニアが関与することが重要です。これにより、彼らはこの種類の問題に慣れ、デバッグして解決する方法について学習する機会を得られます。

このため、サポートエンジニアは Duo Chat サポート Issue にアサインされるべきです。彼らは Duo Chat エンジニアに従って協力し、解決に至ることが期待されます。サポートエンジニアの関与は、顧客の必要なコンテキストを提供し、顧客のステークホルダーとのステータス更新やコミュニケーションを処理する上でも非常に価値があります。

## 🔗 その他の有用なリンク

### 📝 ダッシュボード（社内のみ）

- [Duo Chat の xAU、リテンション、イベント数、応答時間](https://10az.online.tableau.com/#/site/gitlab/views/AiFeatures/Focusview?:iid=3)（姉妹ダッシュボードも参照、例: Duo Chat CRM）
- [スラッシュコマンドの使用状況とユーザー数](https://10az.online.tableau.com/#/site/gitlab/views/SlashUseDuo/SlashUseDashboard/3e8fd0ba-f45b-4dd0-b649-84db3636553d/8db30355-e2c0-4636-9c43-5429bb952a41?:iid=4)
- [Elastic 内の Duo Chat エラー率](https://log.gprd.gitlab.net/app/dashboards#/view/5f334d60-cfd7-11ee-bc6b-0b206b291ea1?_g=(refreshInterval:(pause:!t,value:60000),time:(from:now-2d,to:now)))
- [Grafana 内の Duo Chat エラーバジェット](https://dashboards.gitlab.net/d/stage-groups-detail-duo_chat/6c28d63a-60e8-5db3-9797-39f988a1900b?orgId=1)
- [Duo フィードバック](https://10az.online.tableau.com/#/site/gitlab/views/DuoFeedbackDashboard/DuoFeedbackDashboard?:iid=1)
- [Duo Chat 質問カテゴリ分類](https://10az.online.tableau.com/#/site/gitlab/views/DuoCategoriesofQuestions/DuoCategory?:iid=1)
- [Chat QA 評価](https://gitlab.com/gitlab-org/ai-powered/ai-framework/qa-evaluation)
- [AI Gateway レポーティング](https://10az.online.tableau.com/#/site/gitlab/views/AIGatewayReporting/Overview/61d07174-d973-4552-a582-48be74efea8c/f463620d-a659-4cfb-9700-952a5c103fa8?:iid=1)
