---
title: "UX Bash"
description: "バグを特定しユーザー体験を改善するための迅速かつ効率的な方法"
upstream_path: /handbook/product/ux/experience-research/ux-bash/
upstream_sha: 1e195b58b9f249ff10bd0e705106c320fee86141
translated_at: "2026-05-13T00:00:00Z"
translator: claude
stale: false
lastmod: "2026-02-12T13:14:13+00:00"
---

Bashは、多様なグループまたはターゲットを絞ったグループの参加者が、機能を徹底的に使用し、できるだけ多くのペインポイントを効率的に発見するリサーチ手法です。

各参加者が機能を異なる方法で使用することで、短時間で多種多様なフィードバックを大量に得られます。Bashは通常、24時間にわたって実施され、非同期での参加が可能です。

UX Bashの利点:

- ユーザビリティの問題を素早く効率的に特定し、優先順位を付けられる。
- ソフトウェアのバグ、不具合、不整合を発見できる。
- 機能の強化と改善の領域を見つけられる。
- ユーザーフィードバックを収集して製品体験を強化できる。
- 48時間以内にチームに結果を返せる。

### 早期のお客様フィードバックの機会としてのBash

Bashは、まだ開発中の機能へのアクセスをユーザーに一時的に提供することで、早期のお客様フィードバックを集める貴重な機会を提供します。機能フラグのようなものを使用することで、このプロセスを参加者にとってシームレスにできます。たとえば、`/include` 機能は、Bash中に機能フラグを介して外部ユーザーに提供され、セッション終了後にオフにされました。このアプローチは、管理された環境で機能をテストし、より広範なリリース前に実際の利用に基づいて磨き上げるのに役立ちます。

UX Bashは、リリース前に機能をテストしバグを特定するチームのプロセスを置き換えるためのものではないことに注意してください。チームはBashを行う前に、ユースケースおよびDefinition of Doneに対してソフトウェアをテストすべきです。既知の問題はまず対処し、Bash参加者が目立ちにくい問題にフィードバックを集中できるようにします。

### イテレーションと別のBashを実施するタイミング

UX Bashは、実行可能な洞察を発見し、特定された課題に対する進捗を測定するために使うのが最も効果的です。ただし、後続のBashのタイミングを考慮することが重要です。

Duo Chatの初期のBashでは、応答速度が遅すぎることを示すかなりのフィードバックがありました。このようなシナリオでは、別のBashを実施する前に中核的な課題に対処することに集中する方が効果的です。新しいBashをスケジュールする前に、以前のセッションから得た主要なフィードバックポイントに対処するための意味ある一歩が踏まれていることを確認してください。

### UX Bashにふさわしい状況

Bashは、[基礎的なリサーチ](/handbook/product/ux/experience-research/foundational-research/)がすでに実施されており、チームがより広範なリリース前にできるだけ素早く体験を微調整しようとしている場合に有用です。Bashは、より大規模な[ソリューション検証手法](/handbook/product/ux/experience-research/solution-validation-and-methods/)に対するコスト効率の良い、効率的な補完を提供します。

### UX Bashの準備方法

#### ステップ1. Bashのゴールを定義する

- Bashを通じて達成したいことを明確に定義します（例: 可能な限り多くの異なるバグを特定する）。
- ユーザビリティの問題、バグ、機能強化を特定するための具体的な目標を設定できます（例: インタラクションの応答時間が十分に速いか）。

#### ステップ2. Bashガイドラインの Issueとbash Slackチャンネルを作成する

- [Bashガイドラインの Issue](https://gitlab.com/gitlab-org/ux-research/-/blob/master/.gitlab/issue_templates/UX%20Bash%20Template.md)は、Bashの参加者にとっての単一の信頼できる情報源として設計されています。Bashの目的、テストする機能へのアクセス方法、フィードバックの提供方法、Bash中に判明する既知の問題を含めるべきです。
  - 例: https://gitlab.com/gitlab-org/ux-research/-/issues/2682
- Bash専用のプライベートSlackチャンネル（例: #duo_chat_bash_oct24）を作成します。これにより参加者がBash中に協力し、明確化を求めることが可能になります。Bashガイドラインの Issueとデータ収集メカニズムをSlackチャンネルのブックマークとして含めるのがベストプラクティスです。

#### ステップ3. データ収集アプローチを決定する

- Bashの目標はできるだけ多くのフィードバックを収集することなので、その情報を集める手段が必要です。Qualtricsは1回のBashに対して複数のエントリーを認めるアンケートツールの一つですが、あなたとチームに最適なフィードバックメカニズム（つまり、GitLab の Issue、Googleフォームなど）を自由に選べます。フィードバックメカニズムは、あなたとチームが最も関心のある情報を収集すべきですが、短く要点を押さえたものにすべきです。参加者の負担にならないようにしつつ、できるだけ多くの情報を集めたいのです。
- たとえば、Duo Chat Bashでは、チームは参加者の正確性に対する認識に最も関心がありました。Qualtricsのアンケートで提示された質問の例を以下に示します（[アンケート例へのリンク](https://gitlab.fra1.qualtrics.com/jfe/form/SV_8p2Hp3HVgsiVEKW)）:
  - Duo Chatに尋ねた質問は何でしたか?
  - Duoの応答は何でしたか?
  - 全体的な品質の評価
  - 応答速度の評価

#### ステップ4. リクルートする

- Bashに参加する人を決めます。実行可能なフィードバックを提供できるよう、参加者が機能のターゲットユーザーを正確に代表することを確認してください。Bashのゴールに基づいて、多様なグループまたは特定のオーディエンスをターゲットにすることを選べます。
- Bashには参加者の最大数は設定されていませんが、ニーズ、母集団からリクルートできる能力、データを効率的に分析できる能力に基づいて拡張できます。これまでのBashは通常5～10名のユーザーで構成されていました。

##### 社内参加者のリクルート

- #ux_research_volunteers Slackチャンネルで、これから行うBashについて公式の告知をします。
  - ![Slack招待の例](/images/product/ux/ux-research/ux-bash/Bash_Slack_invite.png)
- 露出を増やすために、その告知を他のSlackチャンネルにも共有します。特定のオーディエンスをターゲットにする場合、共有先のチャンネルを戦略的に選べます。
  - 多様なチャンネルの例: #random, #whats_happening_at_gitlab
  - ターゲットを絞ったチャンネルの例: #security, #docs, #product, #development
- カレンダーイベントをプレースホルダーとして作成し、登録した人をイベントに追加します。

##### 外部参加者のリクルート

- [GitLab Discordサーバーに参加します](/handbook/marketing/developer-relations/workflows-tools/discord/)。コミュニティと外部ユーザーが活発に活動しています。
- Fatima Sarah Khalid（GitLabおよびDiscordのハンドル: sugaroverflow）に連絡して、あなたのDiscordプロフィールをGitLab従業員として表示してもらいます。
- 参加者に謝礼を支払うために、[インセンティブリクエスト Issue](/handbook/product/ux/research-operations/participation-gratuities/)を作成します。
- [スクリーナーアンケート](/handbook/product/ux/experience-research/write-effective-screener/)へのリンクとともに、#announcements Discordチャンネルでbashを告知します。
  - ![Discord招待の例](/images/product/ux/ux-research/ux-bash/Bash_Discord_invite.png)
- 参加者を選びます。
  - Fatima Sarah Khalid（GitLabおよびDiscordのハンドル: sugaroverflow）と協力して、認知度を高めるために投稿をGitLabコミュニティフォーラムでも共有してもらえます。
- イベントリマインダーを送ります。
  - Bash用にカレンダーイベントを作成し、Bashの前日に参加者へメールでリマインドするのがベストプラクティスです。

#### ステップ5. Bash

- 作成したbash Slackチャンネルを通じて、参加者にbashとそのゴールを思い出してもらいます。
  - ![Slack Bashガイドの例](/images/product/ux/ux-research/ux-bash/Bash_Slack_guide.png)
  - ![Slack Bashリマインダーの例](/images/product/ux/ux-research/ux-bash/Bash_Slack_reminder.png)
- Bash中に上がる質問に応答します。注: 自然な行動により近づけるために技術的制限に関する質問に答えないのは構いませんが、参加者にそのことを伝えてください。
- Bashの最後に参加してくれたことへの感謝を伝えます。
  - ![Slack招待の例](/images/product/ux/ux-research/ux-bash/Bash_Slack_thankyou.png)

#### ステップ6. 振り返る

- データを分析します。これは収集したデータによりますが、通常は定性的フィードバックを分類し、定量的な評価を要約することになります。（[Bash分析ドキュメントの例](https://docs.google.com/spreadsheets/d/1jwQklnXPzbEIodXishsQ1eEjuxcvSRxczx1JrVBZhBo/edit#gid=118393419)）
- チームに結果を共有します。（[Issueアップデートの例](https://gitlab.com/gitlab-org/ux-research/-/issues/2513#note_1494533098)）
- 後続のBashを改善するために、参加者からフィードバックを集めます。
