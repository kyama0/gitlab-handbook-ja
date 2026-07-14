---
title: "UX Bash"
description: "バグを特定しユーザー体験を改善するための迅速かつ効率的な方法"
upstream_path: /handbook/product/ux/experience-research/ux-bash/
upstream_sha: 8451bcaa23ef826bedc5422c87ee89de121dd85b
translated_at: "2026-07-14T06:26:33+09:00"
translator: claude
stale: false
lastmod: "2026-07-13T19:21:22+01:00"
---

Bash は、多様なグループまたはターゲットを絞ったグループの参加者が、機能を徹底的に使用し、できるだけ多くのペインポイントを効率的に発見するリサーチ手法です。

各参加者が機能を異なる方法で使用することで、短時間で多種多様なフィードバックを大量に得られます。Bash は通常、24 時間にわたって実施され、非同期での参加が可能です。

UX Bash の利点:

- ユーザビリティの問題を素早く効率的に特定し、優先順位を付けられる。
- ソフトウェアのバグ、不具合、不整合を発見できる。
- 機能の強化と改善の領域を見つけられる。
- ユーザーフィードバックを収集して製品体験を強化できる。
- 48 時間以内にチームに結果を返せる。

### 早期のお客様フィードバックの機会としての Bash

Bash は、まだ開発中の機能へのアクセスをユーザーに一時的に提供することで、早期のお客様フィードバックを集める貴重な機会を提供します。フィーチャーフラグのようなものを使用することで、このプロセスを参加者にとってシームレスにできます。たとえば、`/include` 機能は、Bash 中にフィーチャーフラグを介して外部ユーザーに提供され、セッション終了後にオフにされました。このアプローチは、管理された環境で機能をテストし、より広範なリリース前に実際の利用に基づいて磨き上げるのに役立ちます。

UX Bash は、リリース前に機能をテストしバグを特定するチームのプロセスを置き換えるためのものではないことに注意してください。チームは Bash を行う前に、ユースケースおよび Definition of Done に対してソフトウェアをテストすべきです。既知の問題はまず対処し、Bash 参加者が目立ちにくい問題にフィードバックを集中できるようにします。

### イテレーションと別の Bash を実施するタイミング

UX Bash は、実行可能な洞察を発見し、特定された課題に対する進捗を測定するために使うのが最も効果的です。ただし、後続の Bash のタイミングを考慮することが重要です。

Duo Chat の初期の Bash では、応答速度が遅すぎるという、かなりの量のフィードバックがありました。このようなシナリオでは、別の Bash を実施する前に中核的な課題に対処することに集中する方が効果的です。新しい Bash をスケジュールする前に、以前のセッションから得た主要なフィードバックポイントに対処するための意味ある一歩が踏まれていることを確認してください。

### UX Bash にふさわしい状況

Bash は、[基礎的なリサーチ](/handbook/product/ux/experience-research/foundational-research/)がすでに実施されており、チームがより広範なリリース前にできるだけ素早く体験を微調整しようとしている場合に有用です。Bash は、より大規模な[ソリューション検証手法](/handbook/product/ux/experience-research/solution-validation-and-methods/)に対するコスト効率の良い、効率的な補完を提供します。

### UX Bash の準備方法

#### ステップ 1. Bash のゴールを定義する

- Bash を通じて達成したいことを明確に定義します（例: 可能な限り多くの異なるバグを特定する）。
- ユーザビリティの問題、バグ、機能強化を特定するための具体的な目標を設定できます（例: インタラクションの応答時間が十分に速いか）。

#### ステップ 2. Bash ガイドラインの Issue と bash Slack チャンネルを作成する

- [Bash ガイドラインの Issue](https://gitlab.com/gitlab-org/ux-research/-/blob/master/.gitlab/issue_templates/UX%20Bash%20Template.md)は、Bash の参加者にとっての単一の信頼できる情報源として設計されています。Bash の目的、テストする機能へのアクセス方法、フィードバックの提供方法、Bash 中に判明する既知の問題を含めるべきです。
  - 例: https://gitlab.com/gitlab-org/ux-research/-/issues/2682
- Bash 専用のプライベート Slack チャンネル（例: #duo_chat_bash_oct24）を作成します。これにより参加者が Bash 中に協力し、明確化を求めることが可能になります。Bash ガイドラインの Issue とデータ収集メカニズムを Slack チャンネルのブックマークとして含めるのがベストプラクティスです。

#### ステップ 3. データ収集アプローチを決定する

- Bash の目標はできるだけ多くのフィードバックを収集することなので、その情報を集める手段が必要です。Qualtrics は 1 回の Bash に対して複数のエントリーを認めるアンケートツールの一つですが、あなたとチームに最適なフィードバックメカニズム（つまり、GitLab の Issue、Google フォームなど）を自由に選べます。フィードバックメカニズムは、あなたとチームが最も関心のある情報を収集すべきですが、短く要点を押さえたものにすべきです。参加者の負担にならないようにしつつ、できるだけ多くの情報を集めたいのです。
- たとえば、Duo Chat Bash では、チームは参加者の正確性に対する認識に最も関心がありました。Qualtrics のアンケートで提示された質問の例を以下に示します（[アンケート例へのリンク](https://gitlab.fra1.qualtrics.com/jfe/form/SV_8p2Hp3HVgsiVEKW)）:
  - Duo Chat に尋ねた質問は何でしたか?
  - Duo の応答は何でしたか?
  - 全体的な品質の評価
  - 応答速度の評価

#### ステップ 4. リクルートする

- Bash に参加する人を決めます。実行可能なフィードバックを提供できるよう、参加者が機能のターゲットユーザーを正確に代表することを確認してください。Bash のゴールに基づいて、多様なグループまたは特定のオーディエンスをターゲットにすることを選べます。
- Bash には参加者の最大数は設定されていませんが、ニーズ、母集団からリクルートできる能力、データを効率的に分析できる能力に基づいて拡張できます。これまでの Bash は通常 5～10 名のユーザーで構成されていました。

##### 社内参加者のリクルート

- #ux_research_volunteers Slack チャンネルで、これから行う Bash について公式の告知をします。
  - ![Slack 招待の例](/images/product/ux/ux-research/ux-bash/Bash_Slack_invite.png)
- 露出を増やすために、その告知を他の Slack チャンネルにも共有します。特定のオーディエンスをターゲットにする場合、共有先のチャンネルを戦略的に選べます。
  - 多様なチャンネルの例: #random, #whats_happening_at_gitlab
  - ターゲットを絞ったチャンネルの例: #security, #docs, #product, #development
- カレンダーイベントをプレースホルダーとして作成し、登録した人をイベントに追加します。

##### 外部参加者のリクルート

- [GitLab Discord サーバーに参加します](/handbook/marketing/developer-relations/workflows-tools/discord/)。コミュニティと外部ユーザーが活発に活動しています。
- Fatima Sarah Khalid（GitLab および Discord のハンドル: sugaroverflow）に連絡して、あなたの Discord プロフィールを GitLab 従業員として表示してもらいます。
- 参加者に謝礼を支払うために、[インセンティブリクエスト Issue](/handbook/upstream-studios/research-operations/participation-gratuities/)を作成します。
- [スクリーナーアンケート](/handbook/product/ux/experience-research/write-effective-screener/)へのリンクとともに、#announcements Discord チャンネルで bash を告知します。
  - ![Discord 招待の例](/images/product/ux/ux-research/ux-bash/Bash_Discord_invite.png)
- 参加者を選びます。
  - Fatima Sarah Khalid（GitLab および Discord のハンドル: sugaroverflow）と協力して、認知度を高めるために投稿を GitLab コミュニティフォーラムでも共有してもらえます。
- イベントリマインダーを送ります。
  - Bash 用にカレンダーイベントを作成し、Bash の前日に参加者へメールでリマインドするのがベストプラクティスです。

#### ステップ 5. Bash

- 作成した bash Slack チャンネルを通じて、参加者に bash とそのゴールを思い出してもらいます。
  - ![Slack Bash ガイドの例](/images/product/ux/ux-research/ux-bash/Bash_Slack_guide.png)
  - ![Slack Bash リマインダーの例](/images/product/ux/ux-research/ux-bash/Bash_Slack_reminder.png)
- Bash 中に上がる質問に応答します。注: 自然な行動により近づけるために技術的制限に関する質問に答えないのは構いませんが、参加者にそのことを伝えてください。
- Bash の最後に参加してくれたことへの感謝を伝えます。
  - ![Slack 招待の例](/images/product/ux/ux-research/ux-bash/Bash_Slack_thankyou.png)

#### ステップ 6. 振り返る

- データを分析します。これは収集したデータによりますが、通常は定性的フィードバックを分類し、定量的な評価を要約することになります。（[Bash 分析ドキュメントの例](https://docs.google.com/spreadsheets/d/1jwQklnXPzbEIodXishsQ1eEjuxcvSRxczx1JrVBZhBo/edit#gid=118393419)）
- チームに結果を共有します。（[Issue アップデートの例](https://gitlab.com/gitlab-org/ux-research/-/issues/2513#note_1494533098)）
- 後続の Bash を改善するために、参加者からフィードバックを集めます。
