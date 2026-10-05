---
title: "GitLab オフボーディング標準"
description: "オフボーディングプロセスとバックエンドのステップ"
controlled_document: true
tags:
  - security_standard
  - security_standard_ps
upstream_path: /handbook/people-group/offboarding/offboarding_standards/
upstream_sha: 59a18d6d88e73b26232d1d6773e5d793fcb29e49
translated_at: "2026-10-05T21:09:19+00:00"
translator: claude
stale: false
lastmod: "2026-10-05T16:03:00-04:00"
---

{{< label name="Visibility: Audit" color="#E24329" >}}

## 目的

これらの標準は、すべての GitLab 関連のコンピューティングリソースとデータ資産から GitLab チームメンバーをオフボーディングすることに関連する要件を規定し、当社の顧客、チームメンバー、契約者、会社、その他のパートナーを、故意および偶発的な誤用によって生じる損害から保護します。これらの標準を公開する目的は、GitLab の資産を保護することを意図した情報セキュリティ標準を概説することです。

## 範囲

これらの標準は、GitLab のコンピューティングリソースとやり取りし、会社または顧客データにアクセスするすべての GitLab チームメンバー、契約者、アドバイザー、契約当事者に適用されます。

## 役割と責任

| 役割  | 責任 |
|-----------|-----------|
| GitLab チームメンバー | このドキュメントの要件に従う責任を負う |
| People Operations | このドキュメントを実装し実行する責任を負う |
| People Operations (Code Owners) | このドキュメントへの重要な変更と例外を承認する責任を負う |

## オフボーディング手順

### オフボーディングの通知

Workday で退職するチームメンバーの[直属マネージャー](https://docs.google.com/document/d/1Fr1G1i1kssfADgDf3D6LbZHR8RZmWKZYDNV8AfduZ1c/edit)（自発的）または [Team Member Relations](https://docs.google.com/document/d/1nMokz03AiUQtb0XV5zpD9CjaQKcX5Lu8p5ASZy3cJVA/edit)（非自発的）によって退職プロセスが承認・完了されると、チームメンバーの最終勤務日のあらかじめ決められた時刻に、指定された日の有効なオフボーディング時間帯内であれば、[Compass](/handbook/eta/corporate-it/compass/)でオフボーディングの親ケースと子ケースが自動的に作成されます。すべてのシステムオーナーに担当の子ケースを通知するメールが届き、アクセスの取り消しを開始できます。自発的退職の場合、このプロセスはチームメンバーが Workday で直接開始した[辞任プロセス](https://docs.google.com/document/d/1AVHHBKd6dtyn0DOl4_UydbdEhectLpH5aMh17r9Sg_4/edit)に従います。

People Operations と IT Operations のニーズに沿って、予定されたオフボーディングは、Slack で月曜日から金曜日の **チームメンバーの現地タイムゾーン**の午後 4:00 - 5:00 の間に開かれます。

**注：** これらの時間外に deprovisioning を開始する必要がある場合は、チームメンバーまたはそのマネージャーが IT Operations に連絡して別の時間を手配する必要があります。

退職日が People Operations チームがサポートできない日（例：Family and Friends Day や Global Holiday）に当たる場合、People Operations Specialist は People Business Partner に連絡して、代替のオフボーディングオプションを検討します。

### オフボーディングの割り当て

People Operations のローテーションに従い、オフボーディングの親ケースが Compass で直接割り当てられます。

### オフボーディングケースの作成 {#creating-the-offboarding-case}

オフボーディングの親ケースと子ケースは、Workday によって入力されたデータを使用して Compass で[自動的に](https://theloop.gitlab.com/site/4455aa7f-24d9-41f2-b940-467b54962e4d/page/0fa19bf4-fd6a-41b9-9316-c2dcf3add854)作成されます。システムオーナー（アクセス削除担当者）には、退職するチームメンバーのアクセスを取り消す必要があることを示す子ケースが届きます。

IT Operations を含む多くのチームがアクセスの deprovisioning に取り組みます。これは緊急とみなされ、[ラップトップの返却](/handbook/eta/corporate-it/end-user-services/laptop-management/)（2-4 週間かかることがある）を除き、すべてのタスクが 5 営業日以内に完了することが期待されます（子ケースは 5 日後に自動的にクローズされます）。

**注：** チームメンバーが一時的に[契約者またはコンサルタントロール](/handbook/finance/procurement/contingent-worker-policy/)に移行する場合、完全なオフボーディングプロセスを進め、契約上の義務を果たすために必要な特定の一時的アクセスのみを付与するための別個のオンボーディング Issue を作成してください。

#### オフボーディングケースを手動で作成する {#creating-the-offboarding-case-manually}

**注：** 以下の手順で参照している Slack コマンド `/pops run offboarding` は、GitLab の Issue を作成します。このプロセスは、オフボーディングの追跡を Compass に移行する前のものであり、IT Operations/People Engineering による確認または更新が必要です。この点は別途指摘済みですが、ここではまだ修正していません。

オフボーディングケースが自動的に開かれない場合や緊急のケースを開く必要がある場合、People Operations メンバーは以下の手順に従って手動でオフボーディング Issue を開くことができます：

1. Slack で、自分にメッセージを送るかのように自分のプロファイルに移動します。コマンド `/pops run offboarding <EMPLOYEE_NUMBER>` を入力します。
1. オフボーディング Issue が作成されると Slack で ping を受け取ります。これは通常 30 秒ほどかかります。ping にはオフボーディング Issue とチームページから削除するマージリクエストへのリンクが含まれます。
1. Issue 内の Department、GitLab メールアドレス、GitLab ハンドルが正しいか確認する必要があります。

### オフボーディングツール

#### Google Workspace

IT Ops は次のステップに従って、送信者にメッセージを送ろうとしているチームメンバーがすでに GitLab にいないことと、誰に連絡すべきかを通知する自動応答を設定します。

1. Google admin ポータルに移動し、メールアカウントを検索します。
1. アカウントを unsuspend し、サインインクッキーをリセットし、パスワードをリセットします（パスワードはメールで送らない）。
1. アカウントを Former Team Members Organizational Unit に移動します。
1. GAM を使用してアカウントに Out of Office メッセージを設定します。
1. `Customize rejection notice` の下でチームメンバーの部門ごとに[適切なテンプレート](https://gitlab.com/gitlab-com/people-group/people-operations/employment-templates/-/blob/main/email_templates/offboarding_rejection.md)を追加します。

Out of Office メッセージはアカウントに 90 日間残り、その後 ITOPs がフォローアップして G-Suite ボールトにアカウントをアーカイブします。

#### Slack

- ボット

IT Ops はアカウントを無効にする前に、チームメンバーがボットを作成しているか確認します。[Slack](https://gitlab.slack.com/apps/manage) に移動するか、または admin Slack プロファイルで Menu >> Configure Apps >> Custom Integrations >> Bots をクリックし、ボットのリストでチームメンバーを検索します。ボットが存在する場合は、マネージャーに DM してボットを削除すべきか確認してください。

#### チームページ

導入済みの[自動化](https://theloop.gitlab.com/site/4455aa7f-24d9-41f2-b940-467b54962e4d/page/0fa19bf4-fd6a-41b9-9316-c2dcf3add854)により、チームページからチームメンバーを削除するマージリクエストが自動的に作成されます。これにより次が更新されます：

- data/team_members/person ディレクトリから個別のファイルを削除
- 以前のファイルで使われていた画像を削除
- オフボードされたチームメンバーに reports がいる場合、reports_to を調整
- チームメンバーにペットの写真があった場合、ペットの写真を削除
- ペットページのエントリを削除
- CODEOWNERS ファイルを更新：そのファイルでマネージャーがすでに codeowner である場合はマネージャーに変更または削除

People Operations チームメンバーは以下を完了する必要があります：

- チームメンバーの ReadMe を削除する
  - ReadMe がプライベートプロジェクトにある場合、削除のために IT Ops チームの支援をリクエストする（チームページの MR とプライベート Slack チャネルでタグ付けできます）
- ハードコードされた参照を確認する
  - オフボーディングを処理する People Operations チームメンバーは、オフボードされたチームメンバーの名前が他のパブリックハンドブックページにリストされていないかを確認する必要があります。これは、チームメンバーの名前と「GitLab」で Google 検索を行うことで可能で、これにより GitLab とチームメンバーの名前との関連を反映する結果（ReadMe を含む）が表示されます。

### オフボーディングコンプライアンス

People Operations チームは、オフボーディング有効日（最終勤務日）の各週内にすべてのオフボーディングケースが開かれることを確認します。

すべての部門によるすべてのオフボーディングタスクは、オフボーディング日から 5 日以内に完了する必要があります。1Password、Slack など、より重要で時間に敏感なシステムについては、関連する部門により最初の 24 時間以内に完了されます。アプリケーションとシステムの deprovisioner に関する情報は、[Tech Stack](https://techstack.gtlb.com)にあります。

オフボーディングケースを正常に完了させるためには、システム／ツールがオフボーディングするチームメンバーに該当するかどうかにかかわらず、すべてのタスクにチェックを入れることが重要です。ボックスをチェックすることは、次のいずれかを示します：

- この特定のシステム／ツールへのチームメンバーアクセスを取り消しました
- 確認した結果、このチームメンバーにはこの特定のシステム／ツールへのアクセスは付与されていませんでした

## 例外

このポリシーへの例外は、People Operations チームによって承認される必要があります。

## 参考文献

- [Information Security Parent Policy](/handbook/security/)
- [GitLab Offboarding](/handbook/people-group/offboarding/)
- [GitLab Offboarding FAQ](/handbook/people-group/offboarding/faq/)
- [Offboarding Automation Flow](https://theloop.gitlab.com/site/4455aa7f-24d9-41f2-b940-467b54962e4d/page/0fa19bf4-fd6a-41b9-9316-c2dcf3add854/)
