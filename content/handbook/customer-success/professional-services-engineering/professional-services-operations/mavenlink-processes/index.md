---
title: Mavenlink プロセス
category: Internal
description: "GitLab プロフェッショナルサービスの運用プロセスとワークフローについて学びます。"
upstream_path: /handbook/customer-success/professional-services-engineering/professional-services-operations/mavenlink-processes/
upstream_sha: b4eeb07f0d5f46e2fc5f8572be1a2547261aed89
translated_at: "2026-04-26T03:00:00Z"
translator: claude
stale: false
---

## Mavenlink プロセス

Mavenlink は私たちが現在利用している PSA です。プロセス手順とガイドラインは以下のリンクから確認してください。

プロフェッショナルサービス運用に関するその他のすべてのプロセスは、[このページ](/handbook/customer-success/professional-services-engineering/professional-services-operations/)で確認できます。

### Mavenlink ログイン

Mavenlink にログインするには、GitLab の Okta アカウントへアクセスする必要があります。

- Mavenlink および Okta へのアクセス権が付与されていることを確認します

- Okta 内で Mavenlink をクリックします

![mavenlinkokta](/images/customer-success/professional-services-engineering/professional-services-operations/mavenlink-processes/mavenlinkokta.png)

- メールアドレスを確認します
- パスワードを入力します
- 「Sign On with Okta」をクリックします

![verification1](/images/customer-success/professional-services-engineering/professional-services-operations/mavenlink-processes/verification1.png)

![verification2](/images/customer-success/professional-services-engineering/professional-services-operations/mavenlink-processes/verification2.png)

![verification3](/images/customer-success/professional-services-engineering/professional-services-operations/mavenlink-processes/verification3.png)

![verification4](/images/customer-success/professional-services-engineering/professional-services-operations/mavenlink-processes/verification4.png)

これで Mavenlink にログインできます。お楽しみください！

### Mavenlink プロジェクトの読み取り専用 / ゲストアクセス

ゲストアクセスを使えば、メンバーはプロジェクトに参加せずにプロジェクト情報を閲覧できます。
Mavenlink のメンバーは、プロジェクト参加者にならなくても、自分の権限セットと同じアクセス権を持つことになります。
ただし、コメントしたり、変更を加えたり、プロジェクトに何らかの形で関与することはできません。これは、マネージャーや管理者がプロジェクト情報を閲覧して進捗を確認したいが姿は見せたくない、という場合に便利です。
類似していますが、View Only プロジェクトアクセスを持つメンバーとゲストアクセスを持つメンバーの違いを以下に示します:

- View Only アクセスを持つメンバーは、割り当て可能なプロジェクトリソースとして表示されます。ゲストアクセスでは、メンバーはスケジュールや割り当ての候補として表示されることなく、プロジェクト情報を閲覧できます。
- 公式なプロジェクト参加者ではないため、ゲストビューワーは Provider または Client としてプロジェクトに表示されません。
- ゲストはアカウントレベルの権限に紐付かないため、Collaborator のアカウント権限を持つメンバーがプロジェクトの財務レベルでゲストアクセスを割り当てられた場合、このメンバーはプロジェクトの財務情報を View Only で参照できます。
- API を使用したり、1 人ずつ手動で View Only アクセスを割り当てる代わりに、Access Groups を使えばゲストアクセスを一括で割り当てられます。
注意: メンバーをゲストビューワーとしてプロジェクトに招待することはできません。Access Groups を使ってゲストアクセスを割り当てる必要があります。
- プロジェクトの右上に表示される黄色の通知バナーは、Viewing as Guest であることを示しています。

プロジェクトを読み取り専用 / ゲストとして閲覧するには:

- メンバーは、Projects の Project List タブに移動し、Show ドロップダウンメニューから Guest Projects を選択することで、ゲストアクセスを持つプロジェクトを見つけられます。チームメンバーは、自分が参加しているプロジェクトに対してゲストアクセスを持つことはできません。

![Read Only](/images/customer-success/professional-services-engineering/professional-services-operations/mavenlink-processes/Mavenlinkguestaccess3.png)

![Read Only 2](/images/customer-success/professional-services-engineering/professional-services-operations/mavenlink-processes/Mavenlinkguestaccess2.png)

### Mavenlink ユーザープロフィールの更新

- ダッシュボードから Edit Profile をクリックします

![User Profile](/images/customer-success/professional-services-engineering/professional-services-operations/mavenlink-processes/Profile.png)

- プロフィール情報と写真を更新し、保存します

### Mavenlink Collaborator (PSE) オンボーディングチェックリスト

アカウント設定

- Mavenlink に初めてログインしたら、以下の項目を確認・更新してください
- [ ] プロフィールを更新する
- [ ] メール設定と通知の設定を構成する
- [ ] 優先するデフォルトのログイン画面を設定する

日次のアクティビティ

- 毎日、以下を実行します:
- [ ] Project Task Tracker を確認する
- [ ] プロジェクトコミュニケーションのためにメッセージ・更新・ファイルを投稿する
- [ ] 工数を記録する
- [ ] 経費の作成・記録・申請を行う (Navan)

週次

- 毎週、以下の項目を確認・更新して、すべての情報が最新であることを確認します。
- [ ] タイムシートを確認・申請する

プロジェクトクローズ

- プロジェクトをクローズする前に、以下の項目を完了してください
- [ ] すべてのタスクが完了としてマークされていることを確認する
- [ ] すべての工数がタイムシートに記録されていることを確認する
- [ ] すべての経費が記録・申請されていることを確認する

### Mavenlink Project Lead、Project Manager オンボーディングチェックリスト

**アカウント設定**

- Mavenlink に初めてログインしたら、以下の項目を確認・更新してください:
- [ ] プロフィールを更新する
- [ ] メール設定と通知の設定を構成する
- [ ] デフォルトの Project List ビューを構成する
- [ ] デフォルトの Global Task Tracker ビューを構成する
- [ ] 優先するデフォルトのログイン画面を設定する

**プロジェクトのアサイン**

- プロジェクトがアサインされたら、SOW と Mavenlink のプロジェクト詳細を確認し、プロジェクトの技術的・財務的な詳細を理解できているか確認します
- [ ] SOW
- [ ] Task Tracker
- [ ] Budget
- [ ] Custom Fields
- [ ] Billing & Revenue Rules
- [ ] Master Planning- Project Schedule
- [ ] Project Status
- プロジェクトのセットアップを進めます:
  - [ ] Project Definition
  - [ ] Project Kick Off Deck
  - [ ] Project Folder
  - [ ] Project Internal Agenda
  - [ ] Slack Channels

**週次 - 毎週木曜日の終業時までに完了**

- 毎週、以下の項目を確認・更新して、すべての情報が最新であることを確認します:
- [ ] 毎週月曜日の朝にタイムシートを確認・承認する。承認は毎週月曜日の正午までに完了させる
- [ ] プロジェクトステータスを確認し、最新であることを確認する
  - Prospect- PC が Mavenlink プロジェクトをセットアップ中 / プロジェクトが Stage 5 にある - スタッフィングプランのレビューを開始
  - In Set Up- PC が Mavenlink プロジェクトをセットアップ中 / スタッフィングのレビュー / Welcome to PS Email
  - Okay to Start- プロジェクトのセットアップが完了 / PM がプロジェクトを計画中
  - Active- PM / PSE がプロジェクトに積極的に取り組み中
  - Closed- プロジェクト作業が完了し、請求と収益の完了待ち
  - Completed- 請求と収益が完了
  - On Hold- プロジェクトが遅延中
  - Backlog- 作業の予定なし
  - Cancelled- プロジェクトは作成されたが、さまざまな理由で作業されない
- [ ] Project Schedules- Master Planning、更新の送信
- [ ] Project Health Status
- [ ] Forecast のレビュー
- [ ] プロジェクトのタッチベースコール（該当する場合）
  - プロジェクトに応じて、社内コールおよび／または顧客コールになる場合があります
- [ ] Project Definition / Issue Tracking / Customer Updates

**プロジェクトクローズ**

- プロジェクトをクローズする前に、以下の項目を完了してください:
- [ ] すべてのタスクが完了としてマークされていることを確認する
- [ ] すべての工数がタイムシートに記録されていることを確認する
- [ ] すべての経費が記録・申請されていることを確認する

### Mavenlink Time Off スケジューリング、休日、Family and Friends Days

**地域の祝日と Family and Friends Days**

地域の祝日と Family and Friends Days は、各メンバーのカレンダーに Mavenlink 上で含まれており、[Time Off プロセス](/handbook/people-group/time-off-and-absence/time-off-types/)に従います。日付がカレンダーに含まれているため、Mavenlink の PTO 機能やユーザーのタイムシートで時間を申請する必要はありません。タイムシートにログインすると、必要な勤務週がタイムシートエントリに表示されます。

![TimeOff](/images/customer-success/professional-services-engineering/professional-services-operations/mavenlink-processes/Timeoff.png)

GitLab の会社ポリシーでは、Time Off の申請は Workday を通して行い、この[ハンドブックのプロセス](/handbook/people-group/time-off-and-absence/time-off-types/)に従います。
プロフェッショナルサービスグループでは、Time Off を Mavenlink にも申請することを義務付けています:

Mavenlink で Time Off を管理するメリット

- 工数が Master Planning スケジューリングカレンダーに含まれる
- これにより、PC とプロジェクトマネージャーは Time Off に合わせて顧客プロジェクトを計画できる
- 顧客プロジェクトのスケジュールに矛盾がないことを保証できる

プロセス:

- Time Off を Workday に申請する際は、Mavenlink にも Time Off の申請が必要です
- Master Planning を確認して、希望する Time Off の期間にプロジェクトがすでにスケジュールされていないか確認します
- プロジェクトの工数がスケジュールされている場合は、Project Coordinator と協議し、プロジェクトの工数を移動できるか、または希望する Time Off について相互に合意できるかを確認します

Time Off は、ダッシュボードからプロフィール画像をクリックして申請します:

- 「Your Dashboard」に移動します
- 「Your Profile Picture」をクリックします
- 右側にプロフィールが表示され、Upcoming Time Off のセクションがあります
- プラス記号をクリックして Time Off を追加します

Time Off のキャンセル

- 「Your Dashboard」に移動します
- 「Your Profile Picture」をクリックします
- 右側にプロフィールが表示され、Upcoming Time Off のセクションがあります
- プラス記号をクリックし、日付を選択して時間数を「0」に更新します

![PTOFeature2](/images/customer-success/professional-services-engineering/professional-services-operations/mavenlink-processes/ptofeature2.png)

#### Mavenlink 時間管理 - タイムシート

![tmesheets](/images/customer-success/professional-services-engineering/professional-services-operations/mavenlink-processes/tmesheets.png)

![timesheetoptions](/images/customer-success/professional-services-engineering/professional-services-operations/mavenlink-processes/timesheetoptions.png)

#### Mavenlink 時間承認プロセス

概要

Mavenlink の時間承認機能により、Project Lead アカウント権限（またはそれ以上）を持つメンバーは Time Approvals ページにアクセスし、Financials 権限（またはそれ以上）を持つすべてのプロジェクトの工数を表示・管理できます。

Time Approvals ページでは、Submitted、Unsubmitted、Rejected の各タブから時間エントリを確認できます。提出状態に応じて、タイムシートを表示したり、時間を提出したユーザーにプライベートメッセージを送ったり、時間エントリを承認・却下したりできます。また、まだ時間を提出していないユーザーに直接メッセージを送り、提出を促すこともできます。

Report Viewer アカウント権限（またはそれ以上）を持っているか、個別のメンバーまたはプロジェクトに対して Time Approver として指定されている場合、Your Approvals チェックボックスが表示されます。このチェックボックスを選択すると、自分が承認を担当する時間のみが表示されます。チェックを外すと、すべての提出を確認・対応できます。

Report Viewer（またはそれ以上）のアカウント権限を持たないメンバーは、プロジェクトの Activity Feed でのみ時間を承認できます。

***タイムシート承認者***

| プロジェクト種別 | タイムシート承認者 | バックアップ |
| ------ | ------ |------ |
| Consulting Projects | Project Manager | Project Coordinator / Operations Analyst |
| Project Manager Hours | Arthur Foltz (EMEA PM's), Dani Arman (NA PM's) | Project Coordinator / Operations Analyst |
| Non Creditable Projects | Arthur Foltz (EMEA PM's), Dani Arman (NA PM's), Glen Miller (PSE's), Kevin Vogt (TA's), Sean Sandoval (Trainers) | Project Coordinator / Operations Analyst |
| Training Projects | Training Coordinator | Operations Analyst |

***週次タイムシートのタイムライン***

| タイムシート提出 | タイムシート承認 |
| ------ | ------ |
| 毎週金曜日、終業時 | 毎週月曜日の午後 1 時 EST まで |

***請求期間タイムシートのタイムライン***

| タイムシート提出 | タイムシート承認 |
| ------ | ------ |
| 水曜日の午後 5 時まで | 木曜日の午後 1 時 ET まで |

**プロジェクトノート**

- すべての Non Creditable な時間エントリにはノートが必須です
- ノート欄が空白の場合は、プロジェクトノートを依頼してタイムシートを却下します

 Mavenlink でタイムシートを承認する方法は 3 つあります:

- Mavenlink メール
- Mavenlink Time Sheet Approvals
- Mavenlink プロジェクトの Activity Feed

方法 1 - Mavenlink メール

- タイムシートが提出されると、Mavenlink から自動でタイムシート承認メールが届きます

![emailapproval](/images/customer-success/professional-services-engineering/professional-services-operations/mavenlink-processes/emailapproval.png)

- **view the timesheet** リンクをクリックしてタイムシートを確認します。
- Approve ボタンでタイムシートを承認、または Reject ボタンで却下します。却下する場合はノートを入力します。

方法 2 - Mavenlink Time Sheet Approvals

![timeapprovals1](/images/customer-success/professional-services-engineering/professional-services-operations/mavenlink-processes/timeapprovals1.png)

![timeapprovals2](/images/customer-success/professional-services-engineering/professional-services-operations/mavenlink-processes/timeapprovals2.png)

![timeapprovals3](/images/customer-success/professional-services-engineering/professional-services-operations/mavenlink-processes/timeapprovals3.png)

![timeapprovals4](/images/customer-success/professional-services-engineering/professional-services-operations/mavenlink-processes/timeapprovals4.png)

![timeapprovals5](/images/customer-success/professional-services-engineering/professional-services-operations/mavenlink-processes/timeapprovals5.png)

方法 3 - Mavenlink プロジェクトの Activity Feed

![projectactivity1](/images/customer-success/professional-services-engineering/professional-services-operations/mavenlink-processes/projectactivity1.png)

![projectactivity2](/images/customer-success/professional-services-engineering/professional-services-operations/mavenlink-processes/projectactivity2.png)

#### Mavenlink プロジェクト作成

SFDC Opportunity が Stage 5 のステータスに到達すると、Mavenlink にプッシュされてプロジェクトが作成されます。

Mavenlink プロジェクトを更新する手順は次のとおりです:

担当ロール: PC

##### Prospect プロジェクト

1. プロジェクト機会とドキュメントを確認します。
   - PS Project- SOW
   - Training Project- Order Form、またはカスタムトレーニングが購入されている場合は SOW
2. プロジェクトステータスを Prospect に更新します。
3. PS Operations Manager を Mavenlink プロジェクトに追加します。
4. Mavenlink プロジェクトリードをアサインされた Project Coordinator に再アサインします。
5. プロジェクトが Forecast に追加されないよう、Task Tracker に日付が入力されていないことを確認します。

##### Closed, Won プロジェクト

PS Opportunity が Closed / Won になると、SFDC から通知が送信されます。

1. プロジェクト機会とドキュメントを確認します
   - PS Project- SOW
   - Training Project- Order Form、またはカスタムトレーニングが購入されている場合は SOW

1. プロジェクトステータスを In Set Up に更新します
1. プロジェクト設定を確認します:
   - Start Date と End Date を削除します
   - [プロジェクトの色](/handbook/customer-success/professional-services-engineering/professional-services-operations/mavenlink-processes/#mavenlink-project-status-colors)を更新します
   - プロジェクト予算を Opportunity、SOW、または Order Form の予算に合わせて更新します
   - Include expenses のチェックボックスを外します
   - Target Margin は 40% にします
   - [Rate Card](https://docs.google.com/spreadsheets/d/1yzpCk68aomSxY1vvhZ7dLZEckknx63FQRz3k2bjkFxs/edit#gid=0) を更新します
   - Task billing mode を更新します
   - Task default を更新します
   - Organization が GitLab に設定されていることを確認します

1. Custom Fields を更新します
   - Engagement Manager
   - Add GitLab Project Link
   - Security Requirements
   - Project Components
   - Billing Type
   - Billing Terms
   - Passice Acceptance Language
   - Revenue Release

1. Task Tracker を確認します
   - Customer SOW については、タスクを削除し、EM に Mavenlink プロジェクトへタスクをプッシュしてもらうよう依頼します
   - タスクが Mavenlink プロジェクトにプッシュされたら、タスクの工数とマイルストーン予算が正しいことを確認します
   - SKU 化された提供物については、タスクが SOW または Order Form と一致しているか確認します
     - タスクの詳細も更新します
       - PS Category
       - PS Type
       - PS Services

1. Task Tracker に開始日や期限が設定されていないことを確認します
1. リソースが選定されるまで、Master Planning に Unnamed リソースを追加します
1. Activity セクションに以下を含むノートを追加します:
   - SOW
   - Order Form
   - Google ドライブへのリンク

1. PS Opportunity の連絡先セクションを確認し、セールスと確定します
1. Welcome to PS Email を顧客に送信します
   - [Training Template](https://docs.google.com/document/d/1rJ9q9gEzsumRxDhoWEe45u70efmKA0eWNg69WONuCYs/edit#heading=h.vylh0p2padiu)
   - [Consulting Project Template](https://docs.google.com/document/d/1je9dqVJpFFMv7aw9WhPeQ8aufx6Sj3OZveqaHHd212w/edit)

#### Mavenlink Project Health Report

Project Health Report は、Mavenlink プロジェクトの右側のフライアウトパネルにあります

![healthreport1](/images/customer-success/professional-services-engineering/professional-services-operations/mavenlink-processes/healthreport1.png)

新しいレポートを作成するには New Health Report をクリックします

![healthreport2](/images/customer-success/professional-services-engineering/professional-services-operations/mavenlink-processes/healthreport2.png)

各セクションを記入して保存します

![healthreport3](/images/customer-success/professional-services-engineering/professional-services-operations/mavenlink-processes/healthreport3.png)

Health Report は 1 日に 1 件のみ追加できます

#### Mavenlink プロジェクトステータス / カラー

| Mavenlink Status |  |
| ------ | ------ |
| Estimate- Gray | GitLab PS および GitLab Partners の社内工数を追跡しているプロジェクト |
| Prospect- Gray | PC が Mavenlink プロジェクトをセットアップ中 / プロジェクトが Stage 5 にある - スタッフィングプランのレビューを開始 |
| In Set Up- Gray | PC が Mavenlink プロジェクトをセットアップ中 / スタッフィングのレビュー / Welcome to PS Email |
| Okay to Start- Light Green | プロジェクトのセットアップが完了 / PM がプロジェクトを計画中 |
| Active- Dark Green | PM / PSE がプロジェクトに積極的に取り組み中 |
| Closed- Blue | プロジェクト作業が完了し、請求と収益の完了待ち |
| Completed- Blue | 請求と収益が完了 |
| On Hold- Gray | プロジェクトが遅延中 |
| Backlog- Gray | 作業の予定なし |
| Cancelled- Blue | プロジェクトは作成されたが、さまざまな理由で作業されない |

| Mavenlink Project Colors |  |
| ------ | ------ |
| Blue | Training Only Project |
| Yellow | Consulting Only Project |
| Orange | Consulting & Training Project |
| Lime | Internal Project |
