---
title: Support Leader on the Hook (SLOTH 🦥) の役割
category: On-call
description: "Support Engineering における Support Leader on the Hook (SLOTH 🦥) ローテーションの役割と責任を説明します"
upstream_path: /handbook/support/workflows/support-leader-on-the-hook/
upstream_sha: eff3a749f8927544a08073e8f660283a5d80478b
lastmod: "2026-05-22T11:27:49+08:00"
translated_at: "2026-05-22T12:00:00Z"
translator: claude
stale: false
---

## はじめに

Support Leader On the Hook (SLOTH 🦥) は、GitLab のお客様に品質の高い体験を提供する範囲内で発生する、緊急かつ重要な状況への対応を調整する役割を担います。

SLOTH は [GitLab Support On-call](/handbook/support/on-call/) を構成するローテーションのひとつです。

## SLOTH ロールへの期待事項

SLOTH ロールは、通常の営業日には在席ベースで、週末・祝日・その他の休業時はオンコールベースで対応する、follow-the-sun の 24/7 ローテーションです。

SLOTH は一般的に以下に責任を持ちます。

1. お客様の緊急事態が [SLA に従って](https://about.gitlab.com/support/)[迅速かつ正確に対応される](#handling-customer-emergencies-and-incidents)ことの確保
1. [Global Support Hours](https://about.gitlab.com/support/#hours-of-operation) における [Support Ticket Attention Requests の処理](/handbook/support/internal-support/support-ticket-attention-requests)
1. [セキュリティインシデントの通知ポイント](#act-as-a-notification-point-for-security-incidents) として行動すること
1. [Account Escalation の Support Manager DRI の特定](#finding-a-support-manager-dri-for-an-account-escalation)
1. SLA 違反の回避支援。詳細は [Working on Tickets](/handbook/support/workflows/working-on-tickets) を参照してください。

**注:** あなた（または CMOC/CEOC）は、別の GitLab チーム（SIRT チームなど）の代わりに GitLab ユーザーへ連絡するよう求められる場合があります。これらのリクエストに対応するには [Sending Notices workflow](/handbook/support/workflows/sending_notices) に従ってください。

## お客様の緊急事態およびインシデントの取り扱い

[Support Engineer on-call](/handbook/support/on-call/) はお客様の緊急事態に対する一次対応者です。SLOTH はこの作業を以下のようにサポートします。

- 取り逃された緊急ページの次階層のエスカレーションポイントとして機能する（PagerDuty から自動的に通知されます）。
- オンコールエンジニアによる[緊急リクエストのトリアージ](/handbook/support/workflows/customer_emergencies_workflows/#triage-the-emergency-request)を支援することで、新たな緊急リクエストに応答する。
- オンコールエンジニアが、お客様との難しいコミュニケーションを行う際に支援する。たとえば[リクエストが緊急として認められない旨を伝える](/handbook/support/workflows/customer_emergencies_workflows/#communicate-the-emergency-downgrade)など。
- 進行中の緊急事態を把握し、適切に初期対応を支援またはリードする。
- 緊急時には: 専門知識を持つ追加スタッフを探す、必要に応じてオンコールエンジニアを交代する、必要に応じて Zoom 通話をリードする、次の SLOTH に緊急事態を引き継ぐ。
- [複数の緊急事態](/handbook/support/workflows/customer_emergencies_workflows#handling-multiple-simultaneous-emergencies)が同時に発生した場合に追加スタッフを探す。
- 必要に応じて[お客様の緊急事態を Account Escalation に変換する](/handbook/support/workflows/emergency-to-escalation-process)。
- インシデントが Support から非標準のワークフローまたはコミュニケーションを必要とする場合、CMOC は [Support Response](/handbook/support/workflows/cmoc_workflows.md#about-coordinating-a-support-response) を調整します。Support または他チームの関連する意思決定者と明確にコミュニケーションが取れるようにすることで、CMOC をサポートしてください。まだ作成されていない場合は、[Support Response issue](https://gitlab.com/gitlab-com/support/support-team-meta/-/blob/master/.gitlab/issue_templates/Support%20Response.md) を作成することもできます。

### 緊急事態の可能性がある／ない状況

緊急ページが、まだ緊急とは言えないものの、すぐに緊急になりうる状況で送られてくることがあります。このような状況では、緊急に発展しないよう、お客様を支援したいと考えます。営業時間中にこの状況が発生した場合、Support Engineer on-call から支援を求められることがあります。SLOTH は、即時応答が必要な `high` 優先度のチケットとしてリクエストを処理する追加スタッフを探して対応してください。週末にこの状況が発生した場合、Support Engineer on-call が別の緊急事態を処理しているときは、SLOTH に連絡が入ります。その場合、SLOTH は支援するか、追加スタッフを探して支援を試みてください。

[緊急の可能性がある状況](/handbook/support/workflows/emergency_exception_workflow#examples-of-situations-that-might-or-might-not-qualify-for-an-exception)および[緊急ではない状況](/handbook/support/workflows/emergency_exception_workflow#situations-that-are-not-emergencies)のさらなる例を参照してください。

### APAC の週末におけるバックアップエンジニアのページング

APAC リージョンには、週末オンコール時間帯に同時並行の緊急事態が発生した場合に連絡可能な [**backup engineers**](/handbook/support/workflows/customer_emergencies_workflows) のプールがあります。

あなたが SLOTH で、同時並行の緊急事態が発生した場合、PagerDuty 経由でエスカレートされた Support Engineer On-call からページが送られます。その後、現状を確認し **backup engineers** をページングする必要があるかを判断します。必要な場合は、SLOTH が **backup engineers** を **手動でページング** します。この時点で、すべての backup engineers に通知が飛びます。ページを受領して支援するのは 1 名の backup engineer だけで十分であり、**backup engineers** がページに応答できることは期待されていません。

バックアッププールをページングするには、以下のいずれかを行います。

1. 任意の Slack チャンネルで `/pd trigger` コマンドを使用し、現在の support engineers のリストに通知する新規インシデントを作成する。または
1. PagerDuty で直接 `+ New Incident` を作成する。

プロンプトが表示されたら、以下を更新します。

- **Impacted Service:** Customer Emergencies - APAC Backup Pool
- **Title:** Duplicate emergency - ZD#123456
- **Description:** 緊急事態の簡単な要約を提供する。
- *Assign To: と Priority: は空欄のままにする。*

*詳細については [STM#4583](https://gitlab.com/gitlab-com/support/support-team-meta/-/issues/4583) を参照してください。*

## 営業時間内における Support Ticket Attention Requests の処理

STARs（[Support Ticket Attention Requests](/handbook/support/internal-support/support-ticket-attention-requests)）は SLOTH によって処理されます。

責任は以下のとおりです。

1. `#support_ticket-attention-requests` Slack チャンネルでアナウンスされたお客様のチケットおよび内部リクエストをトリアージし、調査する。
1. スター付きチケットの所有権と担当者を確立する。

担当を割り当てる適切なエンジニアを見つけるには [Support Team Skills by Subject](https://gitlab-com.gitlab.io/support/team-pages/skills-by-subject.html) を使用できます。

スター付きチケットの非常に高い割合がライセンスと更新に関するものです。これらの処理ガイダンスについては、[Workflow for handling Plan/License Ticket Attention Requests](/handbook/support/license-and-renewals/workflows/managers_working_with_extensions) を参照してください。

**注:** GitLab チームメンバーが通常のサポート Slack チャンネル（`#support_self-managed`, `#support_gitlab-com`, `#support_leadership`）でチケットに注目を集めようとする場合があります。その投稿に対して **`:escalate:` 絵文字のみ** で返信して、チームメンバーを誘導してください。これにより、正しいプロセスを説明する自動的かつ匿名な返信が送られます。

**注:** このページでは説明しない、2 つの別の状況があります。

1. [Account Escalations / Escalated Customers](/handbook/customer-success/csm/escalations/)
1. [Account Escalations に発展する緊急事態](/handbook/support/workflows/emergency-to-escalation-process)

### スター付きチケット処理の仕組み

STAR 処理の一部のステップはボットおよび自動応答機によって実行されます。これらのステップは以下で `**BOT**` と表記します。

1. 誰かが [STAR Form](https://gitlab-com.gitlab.io/support/toolbox/forms_processor/support_escalation) を使用して STAR を開始すると：
   1. **BOT**: [STAR issue tracker](https://gitlab.com/gitlab-com/support/ticket-attention-requests/-/issues) に新規 Issue を作成する。
   1. **BOT**: 現在オンコール中の SLOTH 名を `@mention` する Slack アナウンスが `#support_ticket-attention-requests` に投稿される。
   1. 多くの場合 **BOT** が Zendesk チケットと STAR Issue に内部ノートを追加する。
1. Slack スレッドに `:eyes:` 絵文字を追加して、STAR を見ていることを示す。
1. Zendesk チケットで `Support::Managers::STAR Escalated Ticket` マクロを使用して STAR Issue と議論スレッドをクロスリンクし、チケットにタグを付ける。
1. チケットおよびリクエストを正当化するビジネスケースを評価する（トリアージ）。
   - 起票者への質問は Slack（同期）または STAR Issue（非同期）で行えます。
   - Slack の履歴は消えるため、最終的な処理は STAR Issue に記録すべきです。
1. エンジニアからの入力または支援が必要な場合、`#support_gitlab-com`, `#support_self-managed`, または `#support_licensing-subscription` で新しいスレッドを開始する。
   - 割り当てられているエンジニアと、その日に作業中であればチケットで以前に返信したエンジニアを @ メンションする
   - その後、`#support_ticket-attention-requests` のスレッドに戻り、すべての**技術的な**議論がチケット内（または新しいスレッド内）で行われていることをコメントする。これにより、技術的な議論を 1 つのチャンネル／スレッドに集約できます。
   - DRI として動くか、チケットを前進させてくれるエンジニアを探す場合、オンコール中ではないか、既にスター付きチケットに取り組んでいない Support Engineer を特定するのが最適です。これにより、新しいスター付きチケットを支援するエンジニアが、それを優先するための十分な余力を持つようにできます。
1. [STAR スレッドを解決する](#resolving-a-star)。

### チケットのスターを外す - 追加注目のリクエストを却下する

STAR が追加注目のしきい値を満たさない場合があります。詳細は [main STAR page](/handbook/support/internal-support/support-ticket-attention-requests) を参照してください。そのような状況では `#support_ticket-attention-requests` のスレッドに戻り、起票者に通知してください。

### STAR の解決

STAR は、正しい次のステップが特定され進行中である場合に解決済みとみなされます。Zendesk チケットが Solved または Closed になる必要はありません。

STAR が解決されたら：

1. `#support_ticket-attention-requests` の通知に `:green-check-mark:` 絵文字を適用する。
1. 関連する STAR Issue に適切なコメントを付けて更新し、Close する。
1. カテゴリ分けやトレンドの追跡に役立つよう、以下のスコープラベルの例のように、適切なラベルを適用することを検討する。
    - `~Escalation::License-Issue`：中心となる問題がライセンス／サブスクリプション関連であることを示す
    - `~Escalation::Response-Time`：リクエストの目的が、問題やケースへの応答を迅速化することにある場合に有用

## Account Escalation の Support Manager DRI を見つける

サポートの関与が必要な Account Escalation が開かれた場合、Support Manager DRI を見つけるのは SLOTH の責任です。これが ASE アカウントの場合（org notes で確認できます）、Lissa Roberts（AMER）、Ilia Kosenko（EMEA）または Wei Meng Lee（APAC）に連絡してください。

## 営業時間中にマネージャー連絡を要求するチケット中フィードバックの処理

チケット中フィードバックリンク -- GitLab Support Engineer または Manager からの各 Public Comment には、チケットがオープン中にお客様がフィードバックを提供したり、マネージャーからの連絡を要求できるフォームへのリンクがあります（Issue [2913](https://gitlab.com/gitlab-com/support/support-team-meta/-/issues/2913) で導入）。
このフィードバックフォームは、件名フォーマット **Positive/Negative/Neutral feedback for ticket nnnnnn** で customer feedback プロジェクトに issue を作成し、チケットに割り当てられたエンジニアのマネージャー、または担当者がいない場合は Support Director の Val Parsons に自動的にアサインされます。issue に加えて、#support_ticket-attention-requests チャンネルに Slack 通知も送信されます。
以下の対応は、Support Manager On-call が速やかに行うべきです。

フィードバックが既存のチケットに関連している場合：

1. フィードバックとチケット情報をレビューし、どの程度緊急の返信が必要かを検討する。可能な限り早く返信することで、お客様のさらなる不満や STAR または緊急事態への発展を防げる可能性があります。
1. 緊急性を念頭に置き、対応を割り当てられたエンジニアのマネージャーが行うべきか、Manager On-Call が行うべきかを判断する。
1. フィードバックが即時対応を必要とする場合、適切にチケットまたはメールで返信し、次のステップを共有してビデオ通話をスケジュールするための Calendly リンクを提供する。
1. チケットが軌道に戻るまで DRI として残る。
1. Feedback Issue を以下のように更新する：
   1. コミュニケーションのテキストを Feedback Issue にコメントとして追加する。
   1. ラベル ~ssat-manager-contacted-customer を適用する。
   1. Feedback Issue を /close する；フォローアップは選択したコミュニケーション方法で継続する。
   1. Issue をクローズした後、お客様とのやり取りから追加のアクションが生じた場合、Feedback Issue に戻ってそれらを記録する。

チケットリンクがなく一般的なサポートフィードバックの場合：

1. issue は自動的に Val Parsons に割り当てられます - DRI として自分自身に再アサインしてください。
1. フィードバックをレビューし、次のベストアクションを検討する。
1. お客様が通話を希望する場合、ビデオ通話をスケジュールするための Calendly リンクを提供する。
1. フィードバックが Product または他チーム宛てのものであれば、適切なチャンネルで共有する。
1. お客様とのやり取りから追加のアクションが生じた場合、Feedback Issue に戻ってそれらを記録する。

## セキュリティインシデントの通知ポイントとして機能する

GitLab が[セキュリティインシデント](/handbook/security/security-operations/sirt/security-incident-communication-plan#extended-team-roles-responsibilities-and-points-of-contact)を経験した際、SLOTH はそのインシデントから生じるお客様コミュニケーションのトリアージと対応に責任を持ちます。これには [CMOC](/handbook/support/workflows/cmoc_workflows) の関与が含まれる場合があります。

[アップグレード支援リクエスト](https://about.gitlab.com/support/scheduling-upgrade-assistance/) は現在 [Working on Tickets](/handbook/support/workflows/working-on-tickets) の一部としてエンジニアによってトリアージされますが、場合によってはトリアージ担当者が Support management の支援を必要とすることがあります。

### 例となる状況と潜在的な解決策

- ユーザーが [GitLab Support Hours](https://about.gitlab.com/support/#definitions-of-gitlab-global-support-hours) 外でアップグレード支援を要求している
  - 要求されている日時に合わせるため、勤務時間をシフトしてもよい個人がいるかどうかを判断するために、自分の部下に問い合わせる
  - サポート人員に合わせやすい別の日時に再スケジュールできるよう、エンドユーザーと調整する
- 担当者の都合が直前で変更になった
  - 利用可能なチームメンバーと協力して、アップグレード支援を新しいエンジニアに移管できるかを判断し、エンドユーザーに変更点を伝えて認識を合わせる

## オンコールシフトの再割り当てまたは交換

平日にお客様との通話などに従事するためにオンコールを数時間処理できない場合、別のマネージャーに一時的にオンコール責任を処理してもらえるよう調整してください：

1. 特定のマネージャーにカバーを依頼する。それで対応できなければ、
1. `#support_leadership` で、カバーをボランティアしてくれる任意のマネージャーを求める投稿を行う。

オンコール業務を誰かと交換するには、[Swapping on-call duty](/handbook/support/on-call/#swapping-on-call-duty) の手順に従ってください。

## PagerDuty 通知を手動でトリガーする

お客様が [definitions of support impact](https://about.gitlab.com/support/definitions/) に基づき緊急サポートに相当する状況を報告しているエスカレーションを受け取ることがあります。そのような場合、お客様に新規の緊急チケットを開いてもらう代わりに、直接緊急をトリガーすることもできます。

Zendesk で [`Support::Managers::Trigger manual emergency`](https://gitlab.com/search?utf8=%E2%9C%93&group_id=2573624&project_id=17008590&scope=&search_code=true&snippets=false&repository_ref=master&nav_source=navbar&search=id%3A+360074073259) マクロを使用することで PagerDuty 通知をトリガーできます。

あるいは、PagerDuty 自体から手動で PagerDuty 通知をトリガーすることもできます。

[gitlab.pagerduty.com](https://gitlab.pagerduty.com) にログインし、右上隅の **+ New Incident** を選択します。次に、以下のようにフォームに入力します。

- **Impacted Service**: Customer Support
- **Assign to**: Customer Emergency Rotation
- **Title**: ここに Zendesk チケット番号を追加

他のフィールドへの入力は不要のため、**Create Incident** をクリックすればよいです。

![緊急事態を手動でトリガーする](/images/support/manually-trigger-emergency.png)

## 特別な取り扱いノート

[Special handling notes](/handbook/support/workflows/customer_emergencies_workflows#special-handling-notes) は [customer emergencies on-call workflow](/handbook/support/workflows/customer_emergencies_workflows) に文書化されています。SLOTH として、あなたはこれら（および他の）特異な状況を自身の判断で対処する権限を持っています。支援やアドバイスが必要な場合は、迷わず [escalate to unblock](/handbook/values/#escalate-to-unblock) してください。

### 侵害されたインスタンス

[侵害されたインスタンス](/handbook/support/workflows/customer_emergencies_workflows#sirt-emergencies)の場合、通話を提案する前に SLOTH に連絡するよう Support Engineer にアドバイスしています。

このようなケースにおける Support の役割は、お客様ができるだけ早く正常に動作する既知の状態に戻れるよう支援することです。最も早い経路は、以前の既知の良好な状態に復元することです（多くの場合バックアップから復元）。インスタンスがこの状態にあるお客様には他の懸念事項もあり、感情的に高ぶっている可能性が高いです：

- どうしてこうなったのか？（簡単には答えられないことも多く、お客様はこのフォレンジック分析を復元 *後* に行うべきです。）
- 復元せずに回復するにはどうすればよいか？（「安全に」回復はできません。環境に 100% の信頼を持つには復元を推奨します。）
- どのデータがアクセスされたのか？（これは常に難しい質問で、侵害が人間によるものなら痕跡を消している可能性もあります。完全な情報が得られないこともあります。お客様は可能な限り早く復元を開始し、フォレンジックは後で行うべきです。）

通話に進むのが正しい場合、エンジニアの代わりに（または代わりとして）通話に参加し、達成可能な範囲を伝えることを検討してください。

通話の例となるフレームワーク（または、お客様が主催するブリッジ通話）：

> `customer` さん、こんにちは。チケットの内容から、あなたのインスタンスが侵害されている可能性が高いと思われます。このようなケースのために、可能な限り早く稼働状態に戻れるよう支援するベストプラクティスのセット（[GitLab internal link](https://gitlab.com/gitlab-com/support/support-ops/zendesk-global/macros/-/blob/master/macros/active/Incident/Compromised%20Instance.yaml)）を準備しています。GitLab に関する事項についてはサポートとアドバイスを提供します。残念ながら、GitLab は、侵害されたサーバーを完全にセキュアにするためのワンサイズフィット型のソリューションや包括的なチェックリストを提供できません。可能な限り、組織で確立されているインシデントレスポンス計画に従うことを推奨します。
> 最初のステップは、インスタンスをシャットダウンし、同じバージョンで新しいインスタンスを作成し、最新のバックアップを復元することです。これにより、インストールされているすべてのソフトウェアが改ざんされていないと確信できる「クリーンな」環境で運用できます。そのプロセスを開始してください。私たちは HIGH 優先度でこのチケットを監視しています。セットアップや復元に問題があれば、すぐにチケットでお知らせください。
> 新しいインスタンスがセットアップされた後、このサーバーをパブリックインターネットに公開する前に、より最近の GitLab バージョンにアップグレードする必要があります。アップグレードプロセスに問題があれば、すぐにチケットでお知らせください。
> 最後に、以前送信したリカバリーガイド（[Compromised Instance Zendesk マクロ](https://gitlab.com/gitlab-com/support/support-ops/zendesk-global/macros/-/blob/master/macros/active/Incident/Compromised%20Instance.yaml) 経由でチケットで共有されているはずです）に記載されているとおり、GitLab 自体の完全性監査を実施すべきです：自分で有効化していないユーザー、コード、Webhook、Runner、その他の設定がないかを確認してください。ご質問があれば、チケットでお知らせください。
> ここで通話を退出しますが、私たちが待機しており、対応中に支援する準備ができていますのでご安心ください。
