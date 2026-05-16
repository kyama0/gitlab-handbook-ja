---
title: GitLab Support オンコールガイド
description: >-
  Priority Support をお持ちのお客様に対して、サポートエンジニアリングチームは
  オンコール体制で緊急対応を行います
upstream_path: /handbook/support/on-call/
upstream_sha: c5d40e13183c5a0aeeafefbee88ab3fac48ced5a
translated_at: "2026-05-08T17:40:50Z"
translator: claude
stale: false
lastmod: "2026-03-17T16:29:24+08:00"
---

## GitLab サポートにおけるオンコール

サポートには 4 つのオンコールローテーションがあります:

- [Communications Manager オンコール (CMOC)](/handbook/support/workflows/cmoc_workflows) - GitLab.com の運用上の緊急時のインシデント管理プロセスにおいて、サポートエンジニアが公開コミュニケーションを推進します。
- [Customer Emergencies オンコール (CEOC)](/handbook/support/workflows/customer_emergencies_workflows) - サポートエンジニアが、セルフマネージドおよび GitLab.com のお客様からの緊急報告に対応し、解決を調整します。
- [US Government Emergencies](/handbook/support/workflows/usgovernment_oncall) - Customer Emergencies と類似していますが、対応時間帯が異なり、参加には米国市民であることが要件となります。
- [Support Manager オンコール (SMOC)](/handbook/support/workflows/support_manager-on-call) - サポートマネージャーが、サポートエンジニアや GitLab チームメンバーから上がってくる Issue や、見逃された PagerDuty 通知のためのエスカレーションポイントとなります。

[Priority Support](https://about.gitlab.com/support/#priority-support) をお持ちのお客様に対して、サポートエンジニアリングチームはこれらの体制でオンコール対応を行い、緊急時の支援を提供できます。何が緊急事態にあたるかは、私たちの [サポートインパクトの定義](https://about.gitlab.com/support/definitions/#definitions-of-support-impact) で定められています。

私たちはオンコールを真剣に捉えています。第一応答者が十分速く応答できなかった場合に、別のチームメンバーにアラートが届くよう、[エスカレーションポリシー](https://gitlab.pagerduty.com/escalation_policies#PKV6GCH) が整備されています。これらのポリシーが発動することは想定されていませんが、極端で予測不可能な状況に備えるためのものです。

## サポート オンコールの期待事項

### 警戒し、対応可能であること

オンコール中は、PagerDuty の呼び出しに対してできるだけ早く、確実に [サービスレベル契約 (SLA)](https://about.gitlab.com/support/#priority-support) で定められた緊急応答時間内に対応できるよう、待機状態でいることが期待されます。

オンコール中に職場以外の場所で予定がある場合、対応できる状態を保つにはノートパソコンと信頼できるインターネット接続を持参する必要があるかもしれません。

机に縛り付けられている必要はありませんが、PagerDuty のアラートを適時に確認・行動できるよう装備しておく必要があります。

自分の対応可能状況については、積極的にコミュニケーションしてください。オンコールシフトの全分間で *即座に* 対応可能であることは、時には不可能なこともあります。短期間対応できないことが予想される場合は、Slack で FYI を送ってください。

### シフト前に準備する

予定されたオンコールシフトが始まる前に、[Customer Events カレンダー](https://calendar.google.com/calendar/u/0/embed?src=c_8d5a8e9b8c3fc74901bad1799b18e8eafc9e499f7805f9c82f79f9d1e1f9ac4b@group.calendar.google.com) でシフトと重なる可能性のあるお客様の活動を確認してください。お客様がヘルプ要請のためにページしてきた場合に備え、それらのイベントの詳細に慣れておきましょう。

**注:** Customer Events カレンダーは、すぐ参照できるよう [#support_self-managed](https://gitlab.enterprise.slack.com/archives/C4Y5DRKLK) Slack チャンネルの上部にもリンクされています。

最近電話を新しくした場合は、PagerDuty 連絡先セクション内の `[電話切り替え時のガイダンス](#keeping-the-pagerduty-contact-up-to-date)` を参照し、シフト開始前に通知が正しく構成されていることを確認してください。

### コミュニケーション

**関連ステークホルダーを巻き込む**: e-group、CSM、[ASE (担当サポートエンジニア)](enhanced-support-offerings/offering-assigned-support-engineer/emergencies.md)、専門家、サポートリーダーシップに至るまで、お客様や運用上の緊急事態は周知される必要があります。詳細な注意事項については、お使いのローテーション固有のワークフローを確認してください。

**注:** 別の GitLab チーム (SIRT チームなど) を代表して GitLab ユーザーに連絡を取る必要が生じる場合があります。これらのリクエストに対応するには、[通知送付ワークフロー](/handbook/support/workflows/sending_notices) に従ってください。

### 必要なときは助けを求める

安心してください。エスカレーションは問題ありません。他の GitLab チームメンバーは喜んで助けてくれます。お客様を大切にすることは共有された責任です。Slack スレッドで助けが得られない場合は、Slack の support-team グループをタグ付けしてください。さらにエスカレーションが必要な場合は、サポートマネージャーをタグ付けしてください。

別のサポートエンジニアがあなたの緊急コールに参加した場合は、彼らに役割を割り当てて作業を分担しても構いません。

> 〇〇さん、(メモを取って／このプロダクトチームに連絡して助けを求めて／このコードを調べて何かわかるか見て) もらえますか?

### 自分自身を大切にする {#take-care-of-yourself}

オンコールシフト中はストレスを解消するための実際の努力をしてください。オンコール後は、[GitLab メインハンドブック](/handbook/people-group/time-off-and-absence/time-off-types/) に記載のとおり、休暇を取ることを検討してください。緊急事態や障害への対応待機をしているだけでも、ページがなくてもストレスがかかります。適切に機能するためには休息が極めて重要です。チームに知らせるだけです。

PagerDuty から通知を受けたら、準備のために数分間与えてください。

- 注意を緊急事態に向けられる、快適で静かな場所に移動します。
- 生理的な必要を済ませます。
- 軽食と水を取りましょう。
- 深呼吸: あなたなら大丈夫です。

コール中、*即座に* 答える必要は **ありません**。調査や助けを求めるなどのために数分間ポーズを取っても構いません。コミュニケーションを忘れないでください。コール上の他の人に何をしているかを知らせます。例: 「ここのコードを読み解いて理解するのに数分必要です」。

#### 休憩を取る {#take-a-break}

緊急コールの間に休憩を取ることを検討してください。休憩を取ると、よりリフレッシュした気分になり、お客様に最善の支援を提供できます。

コールの最初に、コールがそのくらい長く続く場合、90 分ごと (または同程度) に休憩を取る予定であることをお客様に伝え、期待を設定します。

コールが始まったら、休憩のタイミングを通知するためのカウントダウンタイマーを設定します。(忘れた場合は、Zoom でコールの所要時間を観察してください。)

タイマーが鳴ったら、現在の状態を要約し、コールがいつ再開され、どう参加するかを全員に知らせます。タイマーが切れても適切な区切りに達していない場合は、タイマーを少し延長してください。

休憩中は:

- 緊急事態への積極的な対応を停止します
- [自分自身を大切にしましょう](#take-care-of-yourself)
- 作業エリアから離れます
- 現在のトラブルシューティング戦略、目標、その他の選択肢や考えられる原因について振り返ります

積極的なトラブルシューティング中の 15 分間の休憩は、リセットしたり、目の前の問題を解決するための新しい創造的なアイデアを脳が思いつくのを助ける良い方法になります。

休憩は回復を目的とすべきですが、場合によっては休憩時間の一部を使って、コールが再開したときに次に試す予定の計画を練るのも役立ちます。
PagerDuty からの複数のページや特に長いコールがある長い 1 週間を過ごした場合、休息を取れるよう、誰かに 1 日または 1 日の一部をカバーしてもらうことを依頼することを検討してください。

## サポート オンコールの仕組み

### スケジュールとエスカレーションポリシー

地域別、フォロー・ザ・サン形式のオンコールサポートを使用することで、ローテーションを起きている時間内に保つよう努めています。
そのため、各リージョンはオンコールローテーションを若干異なる方法で組織したり、対応時間の要件が異なる場合があります。

PagerDuty は、オンコール時間、ローテーション順、エスカレーションポリシーの単一の信頼できる情報源です。

**注:** 新しいアラートが 10 分以内に確認 (acknowledge) されない場合、オンコールのサポートマネージャーにアラートが送られます。さらに 5 分後、確認がない場合は、シニアサポートマネージャーにアラートが送られます。

現在および将来のスケジュールを確認する方法はいくつかあります:

1. PagerDuty で: [Customer Emergencies スケジュール (CEOC)](https://gitlab.pagerduty.com/schedules) と [エスカレーションポリシー](https://gitlab.pagerduty.com/escalation_policies#PKV6GCH) を確認
1. Google Calendar で、[自分のオンコールスケジュールを購読](https://support.pagerduty.com/main/docs/schedules-in-apps#export-only-your-on-call-shifts)
1. [`#spt_leaders-daily`](https://gitlab.enterprise.slack.com/archives/C03LL7Z2291) Slack チャンネルで、各種スケジュールの本日のオンコール担当者を確認可能

### スケジュール作成と公開

各リージョンのサポートマネージャーが、サポートのオンコールスケジュールを作成し、PagerDuty に
入力します。スケジュールは毎会計四半期ごとに更新されます。各リージョンの人員配置構造は固有であるため、各リージョンはスケジュールの設定と記録に
独自のプロセスを使用しています。

#### APAC のスケジュール作成と公開

APAC は、各サイクルの終わりに参加者のスケジュールがロールオーバーする、ほぼ単純なローテーションを使用しています。ローテーション参加者は全員 PagerDuty に存在し、スケジュールには四半期ベースのアプローチを使用していません。

変更が必要な場合 (追加、削除、変更)、APAC リーダーは議論の上、Support-Team-Meta に通知 Issue を起票し、影響を受ける参加者に変更について十分な通知が行くようにします。通常、シフト変更については最低 4 週間前までに通知することを目指していますが、それが不可能な場合は、混乱を最小限に抑えるためにチームと協力します。

チームメンバーは、必要に応じてスワップの調整やオーバーライドの入力を引き続き行えます。一部のチームメンバーは異なるローテーション構造を好むため、オーバーライドを利用して協力し合うことでこれを実現できます。例えば、CMOC グループ 1 の一部の人は、複数週にわたる、7 日未満のローテーションを互いに行っています。彼らはこれを調整し、必要なオーバーライドを入れる責任を持ちます。彼らには DRI がおり、APAC リーダーは変更が必要な場合や懸念事項がある場合にその DRI と話し合えることを知っています。

APAC は、将来の日付の変更を可能にするため、PagerDuty の Layers 機能を活用しています。これにより、チームメンバーは将来の月のロスター (担当割) を確認できます。ただし、短期通知の変更が影響する可能性があることを理解した上で。

チームメンバーは、必要な変更について、いつでもマネージャーと相談できます。

#### EMEA のスケジュール作成と公開

PagerDuty が、いつオンコールに当たっているかを確認するための単一の信頼できる情報源 (SSOT) です。スケジュールは常に当月 + 3 か月先まで利用可能です。これは、チームメンバーが生活を計画できるようにするためです。

毎月末までに、PD をさらに 1 か月先まで投入します。例: 2 月末までに、6 月のスケジュールが PagerDuty にインポートされ、チームメンバーが見られるようになります。

##### EMEA PagerDuty ローテーションの変更依頼

[EMEA On-call Tracking Epic](https://gitlab.com/groups/gitlab-com/support/-/epics/344) の下に、[EMEA PagerDuty Rotation Change](https://gitlab.com/gitlab-com/support/support-team-meta/-/issues/new?description_template=EMEA%20PagerDuty%20Rotation%20Change) テンプレートを使って Issue を作成してください。変更のための Issue は毎月提出できます。

- シャドウローテーションへの変更は即座に行えます。
- それ以外のローテーションへの変更は、3 か月 + 当月後に発効します。
  - チームメンバーをローテーションに早めに追加または削除する必要がある場合は、PagerDuty のオーバーライドを使用できます。
  - マネージャーの承認は不要ですが、変更 Issue でマネージャーがメンションされます。
- Support Manager On Call (SMOC) スケジュールについては、チームメンバーの追加・削除の Issue のみが必要です。月次の更新は、以下に挙げる DRI 間で調整されます。

##### EMEA PagerDuty DRI

- DRI、PagerDuty 管理者: Tine Sørensen
- DRI、ローテーションインポート: Kate Grechishkina
- DRI、EMEA Support Manager On Call ローテーションの調整: Erika Miklos

質問用 Slack チャンネル: [#spt_emea-pagerduty-admin](https://gitlab.enterprise.slack.com/archives/C08PSPMKPJQ)

#### AMER のスケジュール作成と公開

AMER のスケジュール作成と計画は、[AMER on-call planning](https://docs.google.com/spreadsheets/d/10hih7a5m0tNhi69VtG6pu8fUQ1owvw01qAfziFIa0U4/edit?gid=1438538669) スプレッドシートを通じて行われています。
マネージャーがスプレッドシートを使って PagerDuty 経由でスケジュールを更新します。提案や変更については、AMER のマネージャーに連絡してください。

各四半期のスケジュールは、前四半期の終わりの数週間前に公開され、チームコールおよび Slack チャンネルで発表されます。

予定外の変更は発生する可能性があり、必要に応じて更新されます。発表は同じ方法で行われ、影響を受けるチームメンバーには変更について通知するために連絡が入ります。

##### スケジュールの変更

PagerDuty スケジュールを四半期途中で変更する必要がある場合 (たとえば、スケジュールから人を追加または削除するなど)、その必要性を、お住まいのリージョンの DRI であるマネージャーに説明してください。彼らは他のマネージャーやオンコール SE と協力し、適切な変更を考え出して、それを PagerDuty に反映させます。

PagerDuty スケジュールに変更を加えるには、影響を受ける参加者と変更について議論するための support team meta Issue を作成してください。どの変更を行うかが決まったら、お住まいのリージョンの DRI であるマネージャーをメンションして、PagerDuty に変更を反映してもらいます。

#### 初めてのオンコールシフト

初めてのオンコールシフトを迎える新しいチームメンバーへ。あなたの [Support オンボーディング Issue](https://gitlab.com/gitlab-com/support/support-training/-/blob/main/.gitlab/issue_templates/New-Support-Team-Member-Start-Here.md) には、プロセスに慣れるために現在のオンコール担当者をシャドーすることを提案するセクションがあります。シャドーシフトを完了したら、マネージャーと協力して自分をオンコールローテーションに追加してもらいます。最初のオンコール週には、緊急事態が起きたときに助けてもらえるよう、Onboarding Buddy にセカンダリとして待機してもらうことをおすすめします。

#### スケジュールを自分に合わせて使う

あなたの役割は、スケジュールされた週の間、緊急事態に対応できる *誰か* がいるようにすることです。柔軟性が可能です。他者と仕事を分担したり、数時間または数日のオーバーライドをスケジュールしたりできます。**休暇の予定を変える必要も、1 週間ずっと机に座っている必要もありません！** 電話を持って受信できる場所であれば、外を散歩しても大丈夫です。これにより、ページを確認し、(Slack を使って) 助けてくれる人を探せます。

セカンダリとして同僚と一緒に作業したい場合は、チームメンバーやマネージャーと相談し、役割を共有することを好むパートナーを見つけてください。週中で一緒に働き、好きなように PagerDuty を更新できます (オプションの例: 1 日を朝と夕方に分割する、交互の日に当たる、プライマリとセカンダリで作業する)。マネージャーは、このように働きたい人をペアリングするのに積極的に協力できます。

#### オンコール業務のスワップ

同僚とオンコール業務をスワップするには:

- チームに確認し、誰が空いているかを確認、カバーしてくれる人から確認を得てください。一般的には、できるだけ早めに助けを求めるのが最善です。
- カバーが見つからない場合は、マネージャーに連絡してください。
- オンコールシフトをスワップしたり、一時的に誰かを置き換えたりするには、PagerDuty のメインスケジュールでオーバーライドを作成します。
  1. PagerDuty で [正しいスケジュール](https://gitlab.pagerduty.com/schedules) を開きます。
  1. PagerDuty で関連する時間帯のブロックをクリックします。
  1. 「override」を選択し、スワップ相手の名前を入力します。

完全な手順は [PagerDuty ドキュメント](https://support.pagerduty.com/main/docs/edit-schedules#create-overrides) を参照してください。

#### APAC での考慮事項

##### シフトは火曜日に始まり月曜日に終わる

グローバルなオンコール週がアムステルダム時間の月曜 09:00 に始まるため、APAC のオンコールシフトは火曜日に始まり月曜日に終わります。APAC チームは、月曜日を休みにして長い週末を取りやすく、また次のオンコールへの導入を緩やかにするバッファとして機能するため、このシフト構成を維持することにしました。最新の議論は [この Support Team Meta Issue](https://gitlab.com/gitlab-com/support/support-team-meta/-/issues/3204) を参照してください。

##### サポートエンジニアのシフトは 4 時間制

APAC は多くのタイムゾーンにまたがります。8 時間シフトを使って APAC ビジネスアワーをカバーすると、APAC 東部のチームメンバーには遅くは 21:00 に終わるオンコールシフト、APAC 西部のチームメンバーには早くは 04:30 に始まるシフトとなります。そのため、サポートエンジニアのシフトは APAC 1 と APAC 2 の 2 グループに分けられ、各チームメンバーが通常の勤務時間内の時間をカバーできるようにしています。

サポートマネージャーのオンコールシフトは、引き続き 8 時間まるまるであることに注意してください。

##### オーストラリア (GitLab PTY Ltd の従業員)

GitLab PTY Ltd に雇用されているチームメンバーは、オンコールシフトの完了後 *2 週間以内* に代替休暇を取得 *する必要があります*。代替休暇は、Time Off by Deel から `On-Call Time in Lieu` オプションを選択して申請してください。

詳細については、[GitLab PTY オーストラリア固有のベネフィット](/handbook/total-rewards/benefits/general-and-entity-benefits/pty-benefits-australia/#on-call-support-engineering-only) ページを参照してください。

##### ニュージーランド (GitLab PTY Ltd NZ の従業員)

GitLab PTY Ltd NZ に雇用されているチームメンバーは、ニュージーランドの祝日に当たるオンコールシフトを取らないようにしなければなりません。これが避けられない場合は、マネージャーに通知する必要があります。

詳細については、[GitLab PTY Ltd NZ 固有のベネフィット](/handbook/total-rewards/benefits/general-and-entity-benefits/pty-benefits-australia/#on-call-support-engineering-only) ページを参照してください。

### オンコールの開始

シフトが始まる前に、*常に* アラートが機能していることと、PagerDuty の連絡先情報が最新であることをダブルチェックしてください。テストページを送信して、アラートを正しく受信していることを確認してください。

オンコールシフトが始まると、シフトが始まったという通知 (PagerDuty の設定によりメールまたはテキスト) を受け取るはずです。

### オンコールシフトの終了

シフトが終わる前に、引き継ぐ必要のあるタスクは何かを考え、ローテーションの次のエンジニアにそれらを積極的にコミュニケーションするようにしてください。
これは、[次のオンコール サポートエンジニアを巻き込み](#engaging-the-next-on-call-support-engineer)、進行中のトラブルシューティングコールに彼らを参加させることを意味するかもしれません。あるいは、フォローアップアクションを伴うシチュエーションで、自分が処理した内容について手順や文脈を提供することを意味するかもしれません。例えば:

- 進行中のお客様とのコール中で 1 日の終わりが来た場合、入ってくるオンコールにページを送り、これまで行ったことと次にすべきことの概要を伝え、連続性を提供できるよう準備してもらいます
  - 進行中のコールが次のシフトに食い込みそうだと予想する時点で、Slack で入ってくるオンコールに連絡し、引き継ぎの必要が近いことを認識してもらえるようにしてみてください。彼らのシフトはまだ始まっていないため、まだ対応可能でない可能性があります。
  緊急事態の最中の [休憩を取ること](#take-a-break) は、入ってくる CEOC が状況を把握できるため、お客様の成果にとても有益です。退任する CEOC と入ってくる CEOC は、プレッシャーの少ない環境でアイデアを話し合うことから恩恵を受けられます。
  - お客様にコールを一時停止することを伝え、再開時間を合意します。
  - 30 分の休憩中に、入ってくる CEOC と以下を議論します:
    - お客様が直面している問題は何か？
    - どのような活動が行われたか？
    - どの Issue や仮説が除外されたか？
    - 問題の原因に関する現在の仮説は何か？
    - どんな代替の選択肢が考慮されていないか？
    - この緊急事態にはエスカレーションが必要か？
    - 次のステップは何か？
    - どんな前提が置かれ、何が考慮されていないか？

- SaaS のお客様がログ分析を求めてページしてきて SIRT チームを待っている場合、入ってくるオンコールに知らせ、引き継ぎについてお客様に伝えるメッセージをチケットで送ってもらうことを検討します
- お客様が依然として高揚状態で、障害の後に監視中で、オンコールエンジニアにページしてくる *かもしれない* 場合、入ってくるオンコールに知らせます
- SaaS インシデントが終了し、新たなお客様報告のためにキューを監視している場合、入ってくるオンコールエンジニアに彼らが取るべきアクションのリストを提供します

一般的に: シフト中に発生した (あるいは活発に発生中の) シチュエーションがある場合、次のオンコールエンジニアを準備するのはあなたの責任です。

一部のローテーションには特定の引き継ぎ手順があります:

- [CMOC - シフト終了時の引き継ぎ手順](/handbook/support/workflows/cmoc_workflows#end-of-shift-handover-procedure)
- [CEOC - コール後](/handbook/support/workflows/customer_emergencies_workflows#post-call)

### すべてのオンコールページを 1 か所で確認する

サポートチームが受け取るすべてのオンコールページを監視したい場合があります。これは、[`#spt_on-call`](https://gitlab.slack.com/archives/C02TSECGGV8) Slack チャンネルに参加することで行えます。

### オンコール サポートエンジニア (CEOC) の確認 {#determining-the-on-call-support-engineer-ceoc}

*現在の* オンコール担当のサポートエンジニアを見るには、以下が利用できます:

- Slack で `@ceoc` グループ／ハンドルの現在のメンバーを [調べる](https://slack.com/help/articles/360003534892-Browse-people-and-user-groups-in-Slack#browse-user-groups)
- PagerDuty にログインして [Customer Support](https://gitlab.pagerduty.com/service-directory/PL3TX00) サービスを表示
- [`#spt_leaders-daily`](https://gitlab.enterprise.slack.com/archives/C03LL7Z2291) Slack チャンネルを表示。Support Team Bot のメッセージに、本日のさまざまなスケジュールのオンコール担当者が一覧されています。

*今後の* オンコール担当のサポートエンジニアを見るには、以下の個別オンコールスケジュールを表示できます:

- [Customer Emergencies - APAC Group 1](https://gitlab.pagerduty.com/schedules/PQB9Q6K)
- [Customer Emergencies - APAC Group 2](https://gitlab.pagerduty.com/schedules/PKPXM8K)
- [Customer Emergencies - EMEA](https://gitlab.pagerduty.com/schedules/P9SV029)
- [Customer Emergencies - AMER Group 1](https://gitlab.pagerduty.com/schedules/PBLAHV7)
- [Customer Emergencies - AMER Group 2](https://gitlab.pagerduty.com/schedules/P9FKYZC)
- [Customer Emergencies - AMER Group 3](https://gitlab.pagerduty.com/schedules/PP28N7L)

判断に迷った場合は、いつでも `#support_leadership` で尋ねることができます。

### オンコール マネージャーの確認 {#determining-the-on-call-manager}

*現在の* オンコールマネージャーを見るには、以下が利用できます:

- Slack で `@support-manager-oncall` グループ／ハンドルの現在のメンバーを [調べる](https://slack.com/help/articles/360003534892-Browse-people-and-user-groups-in-Slack#browse-user-groups)
- PagerDuty にログインして [Support Managers](https://gitlab.pagerduty.com/services/PTFI8XR) サービスを表示
- [`#spt_leaders-daily`](https://gitlab.enterprise.slack.com/archives/C03LL7Z2291) Slack チャンネルを表示。Support Team Bot のメッセージに、本日のさまざまなスケジュールのオンコール担当者が一覧されています。

*今後の* オンコールマネージャーを見るには、以下の個別オンコールスケジュールを表示できます:

- [Support Manager - APAC](https://gitlab.pagerduty.com/schedules/PWBXTYX)
- [Support Manager - EMEA](https://gitlab.pagerduty.com/schedules/PXQ2ZAZ)
- [Support Manager - AMER](https://gitlab.pagerduty.com/schedules/PTI56V1)

判断に迷った場合は、いつでも `#support_leadership` で尋ねることができます。

### 次のオンコール サポートエンジニアを巻き込む {#engaging-the-next-on-call-support-engineer}

ここでは、自分のシフトが終了し、PagerDuty 上では「次の」サポートエンジニアが *現在の* 担当になっている、という状況を想定しています。その場合:

`@ceoc` をタグ付けすることで、Slack で現在のオンコール サポートエンジニアにピンを送れます。

オンコール サポートエンジニアを PagerDuty 経由でページすべきなのは

- 週末や祝日には即座に。
- Slack ピンに 10 分経っても返信がない場合。

現在のオンコール サポートエンジニアにページするには:

- Slack で `/pd trigger` コマンドを使い、新しいインシデントを (`Customer Support` サービスに対して) 作成
- [Customer Support](https://gitlab.pagerduty.com/service-directory/PL3TX00) サービスから手動で新しいインシデントを作成

シフトがまだ **終わっておらず**、*今後* のオンコール サポートエンジニアと調整したい場合は、[オンコール サポートエンジニアの確認](#determining-the-on-call-support-engineer-ceoc) を参照してください。

### オンコール マネージャーを巻き込む

状況によっては、支援のために [Support Manager オンコール](/handbook/support/workflows/support_manager-on-call) を巻き込む必要があります。

`@support-manager-oncall` をタグ付けすることで、Slack で現在の Support Manager オンコールにピンを送れます。

Support Manager オンコールを PagerDuty 経由でページすべきなのは

- 週末や祝日には即座に。
- Slack ピンに 10 分経っても返信がない場合。

現在の Support Manager オンコールにページするには、PagerDuty アラートをトリガーします:

1. Slack で [#support_leadership](https://gitlab.enterprise.slack.com/archives/C01F9S37AKT) チャンネルに移動します
1. `/pd trigger` と入力して Enter キーを押します
1. Title フィールドに概要を書きます
1. Impacted Services のリストから `Support Managers` を選択します
1. `Create` をクリックしてアラートをトリガーします

または、[Support Managers](https://gitlab.pagerduty.com/services/PTFI8XR) サービスから PagerDuty 内で新しいインシデントを作成します。

これは *現在の* オンコールマネージャーを巻き込むためのものです。今後のオンコールマネージャーと調整する必要がある場合は、[オンコール マネージャーの確認](#determining-the-on-call-manager) を参照してください。

## 携帯電話のサービスとデータの精算

私たちは、オンコール業務があなたの生活に与える影響を最小限に抑えたいと考えています。それを実現する一つの方法は、個人的な経費への影響を相殺することです。

オンコール業務を行う月の携帯電話サービスのコストは経費精算できます。これはあなたの **サービスコスト自体** に限られ、電話端末や個人ホットスポット端末、通信プラン上の他の人のサービスに関する費用は対象になりません。

オンコール中に通常の作業場所以外で予定があるかもしれないことを理解しています。その結果、コンピュータにインターネットサービスを提供するために自分の電話を使う **必要がある** 場合は、追加データ料金を経費レポートに含められます。

## PagerDuty 連絡先情報を最新に保つ

PagerDuty の電話と SMS の通知はさまざまな電話番号から届く可能性があるため、ページの見逃しを避けるためにこれを最新に保つことが重要です。最新の vCard をダウンロードする、または自動更新される PagerDuty 連絡先をデバイスにセットアップするには、[この PagerDuty ドキュメントページ](https://support.pagerduty.com/main/docs/notification-phone-numbers) を使用してください。

デバイスで「おやすみモード」を使用している場合、PagerDuty 連絡先がそれを回避できるようにも許可してください。

**電話を切り替える場合:** 新しい電話に変更する場合、古いデバイスで PagerDuty アプリからログアウトし、シフト開始前に新しいデバイスで通知 (アプリのアラートと通話の両方) を徹底的にテストしてください。アプリが完全にセットアップされ、アラートを正しく受信していることを確認してください。
