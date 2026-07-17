---
title: "UX Bash"
description: "バグを特定し、ユーザー体験を改善するための迅速で効率的な方法です。"
upstream_path: /handbook/upstream-studios/experience-research/ux-bash/
upstream_sha: a15c0bfc1dd89fbbe4aff8969605eb60ab63f1ca
lastmod: "2026-07-16T17:32:42-03:00"
translated_at: "2026-07-17T08:32:10+09:00"
translator: codex
stale: false
---

Bash は、多様または対象を絞った参加者グループが機能を徹底的に使用し、できるだけ多くのペインポイントを効率的に明らかにするリサーチ手法です。

各参加者は異なる方法で機能を使用するため、短期間に多様なフィードバックを大量に得られるという考え方です。Bash は通常 24 時間にわたって実施され、非同期の参加を可能にします。

UX Bash の利点:

- ユーザビリティ上の問題を迅速かつ効率的に特定し、優先順位を付ける。
- ソフトウェアのバグ、不具合、不整合を発見する。
- 機能の拡張と改善のための領域を明らかにする。
- プロダクト体験を向上させるためにユーザーフィードバックを収集する。
- 48 時間以内にチームへ結果を返す。

### 初期の顧客フィードバックの機会としての Bash {#bashes-as-an-opportunity-for-early-customer-feedback}

Bash は、開発中の機能に一時的にユーザーがアクセスできるようにすることで、初期の顧客フィードバックを収集する貴重な機会を提供します。フィーチャーフラグのようなものを使用すると、このプロセスを参加者にとってシームレスにできます。例えば、`/include` 機能は、Bash の間にフィーチャーフラグを通じて外部ユーザーが利用できるようにされ、セッション終了後にオフにされました。このアプローチは、より広範にリリースする前に、制御された環境で機能をテストし、実際の利用状況に基づいて改善するのに役立ちます。

UX Bash は、リリース前に機能をテストしバグを特定するチームのプロセスを置き換えることを意図したものではないことに注意してください。チームは Bash を行う前に、ユースケースと完了の定義に照らしてソフトウェアを引き続きテストする必要があります。既知の問題には先に対処し、Bash の参加者が明白でない問題にフィードバックを集中できるようにする必要があります。

### イテレーションし、別の Bash を実行するタイミング {#when-to-iterate-and-run-another-bash}

UX Bash は、実行可能な洞察を明らかにし、特定された問題の進捗を測定するために使用すると最も効果的です。ただし、後続の Bash のタイミングを考慮することが重要です。

Duo Chat の初期の Bash では、応答速度が遅すぎることを示す多くのフィードバックがありました。このようなシナリオでは、別の Bash を実施する前に中核的な問題への対処に焦点を当てるほうが効果的です。新しい Bash をスケジュールする前に、以前のセッションの主要なフィードバックポイントに対処するための意味のある措置が講じられていることを確認してください。

### UX Bash に適した状況 {#appropriate-situations-for-a-ux-bash}

Bash は、[基礎リサーチ](/handbook/upstream-studios/experience-research/foundational-research/)をすでに実施していて、チームがより広範にリリースする前にできるだけ早く体験を微調整しようとしている場合に有用です。Bash は、より広範な[ソリューション検証手法](/handbook/upstream-studios/experience-research/solution-validation-and-methods/)を費用効率よく、効率的に補完します。

### UX Bash の設定方法 {#how-to-set-up-a-ux-bash}

#### ステップ 1. Bash の目標を定義する {#step-1-define-bash-goals}

- Bash を通じて達成したいことを明確に定義します（例: できるだけ多くの異なるバグを特定する）。
- ユーザビリティ上の問題、バグ、または機能拡張を特定するための具体的な目標を設定できます（例: インタラクションの応答時間は十分に速いか）。

#### ステップ 2. Bash ガイドライン Issue と Bash Slack チャンネルを作成する {#step-2-create-a-bash-guideline-issue-and-bash-slack-channel}

- [Bash ガイドライン Issue](https://gitlab.com/gitlab-org/ux-research/-/blob/master/.gitlab/issue_templates/UX%20Bash%20Template.md)は、参加者にとって Bash に関する唯一の信頼できる情報源として設計されています。Bash の目的、テストする機能にアクセスする方法の指示、フィードバックの提供方法の指示、Bash を通じて発生した既知の問題を含める必要があります。
  - 例: https://gitlab.com/gitlab-org/ux-research/-/issues/2682
- Bash 専用のプライベート Slack チャンネルを作成します（例: #duo_chat_bash_oct24）。これにより、参加者は Bash の間に協力し、確認を求められます。Bash ガイドライン Issue とデータ収集メカニズムを Slack チャンネルのブックマークとして含めるのがベストプラクティスです。

#### ステップ 3. データ収集アプローチを決定する {#step-3-determine-data-collection-approach}

- Bash の目標はできるだけ多くのフィードバックを収集することなので、その情報を収集する方法が必要です。Qualtrics は Bash に複数の回答を許可するアンケートツールの一種ですが、あなたとチームに最適なフィードバックメカニズム（GitLab Issue、Google Forms など）を柔軟に選択できます。フィードバックメカニズムでは、あなたとチームが最も関心を持つ情報を収集する必要がありますが、短く要点を絞るべきです。参加者の負担にならず、できるだけ多くの情報を収集したいと考えています。
- 例えば、Duo Chat Bash では、チームが最も関心を持ったのは参加者の正確性に関する認識でした。次は Qualtrics アンケートで提示した質問の例です（[アンケートの例へのリンク](https://gitlab.fra1.qualtrics.com/jfe/form/SV_8p2Hp3HVgsiVEKW)）。
  - Duo Chat にどのような質問をしましたか？
  - Duo の回答は何でしたか？
  - 全体的な品質の評価
  - 応答速度の評価

#### ステップ 4. 採用 {#step-4-recruit}

- Bash に参加する人を決定します。実行可能なフィードバックを提供できるよう、参加者が機能の対象ユーザーを正確に代表していることを確認してください。Bash の目標に基づき、多様なグループまたは特定のオーディエンスを対象に選択できます。
- Bash に参加者数の上限はありませんが、ニーズ、母集団から採用できる能力、データを効率的に分析する能力に基づいて拡大できます。過去の Bash は通常 5〜10 名のユーザーで構成されていました。

##### 内部参加者を採用する場合 {#for-recruiting-internal-participants}

- #ux_research_volunteers Slack チャンネルで、今後の Bash について公式に告知します。
  - ![Slack 招待の例](/images/product/ux/ux-research/ux-bash/Bash_Slack_invite.png)
- 追加の露出を得るために、その告知を他の Slack チャンネルにも共有します。特定のオーディエンスを対象にする場合は、共有するチャンネルを戦略的に選択できます。
  - 多様なチャンネルの例: #random、#whats_happening_at_gitlab
  - 対象を絞ったチャンネルの例: #security、#docs、#product、#development
- プレースホルダーとしてカレンダーイベントを作成し、登録した人をイベントに追加します

##### 外部参加者を採用する場合 {#for-recruiting-external-participants}

- コミュニティと外部ユーザーが活動している [GitLab Discord サーバー](/handbook/marketing/developer-relations/workflows-tools/discord/)に参加します
- Discord プロフィールを GitLab チームメンバーとして記載してもらうため、Fatima Sarah Khalid（GitLab と Discord のハンドル: sugaroverflow）に連絡します。
- 参加者に支払うための [Incentives Request Issue](/handbook/upstream-studios/research-operations/participation-gratuities/)を作成します。
- [スクリーナーアンケート](/handbook/upstream-studios/experience-research/write-effective-screener/)へのリンクとともに、#announcements Discord チャンネルで Bash を告知します
  - ![Discord 招待の例](/images/product/ux/ux-research/ux-bash/Bash_Discord_invite.png)
- 参加者を選定します。
  - 認知を高めるため、Fatima Sarah Khalid（GitLab と Discord のハンドル: sugaroverflow）と協力して、投稿を GitLab Community Forum で共有してもらうこともできます。
- イベントのリマインダーを送信します
  - Bash 用のカレンダーイベントを作成し、Bash の前日に参加者へメールを送ることがベストプラクティスです。

#### ステップ 5. Bash {#step-5-bash}

- 作成した Bash Slack チャンネルを通じて、参加者に Bash とその目標をリマインドします。
  - ![Slack Bash ガイドの例](/images/product/ux/ux-research/ux-bash/Bash_Slack_guide.png)
  - ![Slack Bash リマインダーの例](/images/product/ux/ux-research/ux-bash/Bash_Slack_reminder.png)
- Bash 中に発生した質問に回答します。注: 自然な行動により近い近似を得るために、技術的な制約についての質問には答えなくても構いませんが、参加者にはそのことを伝えてください。
- Bash の最後に、参加への感謝を伝えます。
  - ![Slack 招待の例](/images/product/ux/ux-research/ux-bash/Bash_Slack_thankyou.png)

#### ステップ 6. 振り返り {#step-6-reflect}

- データを分析します。これは選択したデータによって異なりますが、通常は定性的フィードバックの分類と定量的評価の要約を含みます。（[Bash 分析ドキュメントの例](https://docs.google.com/spreadsheets/d/1jwQklnXPzbEIodXishsQ1eEjuxcvSRxczx1JrVBZhBo/edit#gid=118393419)）
- 調査結果をチームと共有します。（[Issue 更新の例](https://gitlab.com/gitlab-org/ux-research/-/issues/2513#note_1494533098)）
- 以降の Bash を改善するため、参加者からフィードバックを収集します。
