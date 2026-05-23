---
title: GitLab Dedicated CMOC 業務の遂行方法
category: On-call
description: "サポートエンジニアリングにおける GitLab Dedicated CMOC ローテーションの役割と責任の説明"
upstream_path: /handbook/support/workflows/dedicated_cmoc/
upstream_sha: 877082e5cd4baeabe3d6e802b3b4b1efdb6573f1
translated_at: "2026-05-23T00:00:00Z"
translator: claude
stale: false
lastmod: "2026-05-22T11:27:49+08:00"
---

## はじめに

GitLab Dedicated Communications Manager on Call (GDCMOC) は、GitLab Dedicated 顧客に対して環境に関する最新情報を提供することを目的とした非同期の役割です。Slack や GitLab Issue で Dedicated インフラストラクチャチームメンバーと連絡を取り、その情報を顧客に伝達することが含まれます。

GDCMOC ローテーションは現在、誰がオンコールかを決めるために GitLab.com の CMOC ローテーションを使用しています。GitLab.com の CMOC としてオンコールに入るとき、同時に GDCMOC にもなります。[Communications Lead](/handbook/engineering/infrastructure-platforms/incident-management/roles/communications-lead) は現在 CMOC と GDCMOC によって運営されており、将来的にこの構造を発展させる計画があります。

## 役割のガイドライン

- GDCMOC にトラブルシューティングの責任を遂行することは期待されていません。
- GDCMOC は、関連するスレッドや Issue を積極的にモニターすることに全集中力を注ぐ必要はありません。ガイドラインとして、顧客と共有する必要のある更新がないか、既存のコミュニケーションスレッドを 30 分ごとに確認してください。

## コミュニケーションのモード

GDCMOC の役割には、それぞれ異なる目的を持ち、異なるツールを使用する 2 種類の顧客コミュニケーションが含まれます。ページされたとき、GitLab Dedicated SRE は、顧客に通知する必要があるのか、または情報を収集する必要があるのかに応じて、どの方法が必要かをアドバイスできます。GDCMOC にトラブルシューティングの責任を遂行することは期待されていません。

**モード 1: Switchboard 通知**

- インシデントステータスや、1 つ以上の顧客環境に影響を与える緊急メンテナンス計画について顧客に通知するための、一方向のブロードキャストコミュニケーション
- [Switchboard](dedicated_switchboard.md) で事前承認されたテンプレートを使用して通知を作成する必要がある
- 通知は、テナントの **[運用メールアドレス](https://docs.gitlab.com/administration/dedicated/tenant_overview/#contact-information)** リストと、メール通知が有効な Switchboard ユーザーに送信される
- このコミュニケーションモードは、インシデント時のスケーラブルでコンプライアンスに準拠した顧客コミュニケーションを提供するため、テナントごとに個別のサポートチケットを作成するという以前の手動プロセスを置き換えます。[STM#6768 を参照](https://gitlab.com/gitlab-com/support/support-team-meta/-/issues/6768)
- GitLab Unfiltered YouTube アカウントを使用したこの機能の [内部デモ](https://www.youtube.com/watch?v=e2ZRD8csjow) を視聴
- → [Switchboard を使用した通知の送信](#sending-notifications-using-switchboard) に従う

**モード 2: Zendesk を使用したコンタクトリクエスト**

- 情報収集のための双方向コミュニケーション、および適切な Switchboard テンプレートが存在しない場合に使用
- Zendesk チケットの作成が必要
- → [コンタクトリクエストの開始](#initiating-a-contact-request-on-zendesk) に従う

## GDCMOC を関与させる

GDCMOC は、Slack または PagerDuty 経由で直接ページできます。

- **Slack**: Slack で `/pd trigger` コマンドを使用し、**Impacted Service** モーダルで `Incident Management - GDCMOC` を選択します。**Title** を入力し、**Add Details** ボタンをクリックします。GDCMOC の注意が必要な Issue または Slack チャンネルへのリンクを含む説明を追加し、**Create** をクリックします。
- **PagerDuty**: [Incident Management - GDCMOC](https://gitlab.pagerduty.com/service-directory/P8WVAI0) ページから、**New Incident** をクリックします。**Title** を入力し、GDCMOC の注意が必要な Issue または Slack チャンネルへのリンクを含む説明を追加し、**Create Incident** をクリックします。

**Description** フィールドはオプションですが、オンコールサポートエンジニアに何が必要か、またどこで必要とされているかを伝える唯一の方法なので、必ず入力してください。

GDCMOC の関与に関する追加情報は、GitLab Dedicated チームの [オンコール runbook](https://gitlab.com/gitlab-com/gl-infra/gitlab-dedicated/team/-/blob/main/runbooks/on-call.md#paging-the-gdcmoc) で確認できます。

## GDCMOC のためのインシデント管理

### PagerDuty ページの確認

ページを [acknowledged](cmoc_workflows.md#pagerduty-status-definitions) としてマークします。これは、モバイルアプリ、Web インターフェース、または `#support_gitlab-dedicated` Slack チャンネルの PagerDuty アプリ経由で実行できます。

Dedicated SRE は、顧客コミュニケーションが必要な場合に連絡してきます。PagerDuty アラートの説明には、Issue または追跡が必要な Slack スレッドの詳細が含まれているはずです。コミュニケーションスレッドに従い、Dedicated インシデントチームに支援する準備ができていることを伝えてください。不明な場合は、[GitLab Dedicated incidents Issue トラッカー](https://gitlab.com/gitlab-com/gl-infra/gitlab-dedicated/incident-management/-/issues/?label_name%5B%5D=Incident%3A%3AActive) を確認するか、`#g_dedicated-team` Slack チャンネルで尋ねてください。

### 取るべきアクションを理解する

Dedicated SRE から、必要なコミュニケーションのタイプを理解します:

- [インシデントステータス通知の作成](#creating-an-incident-status-notification-using-switchboard)
- [緊急メンテナンス通知の作成](#creating-an-emergency-maintenance-notification-on-switchboard) または
- [コンタクトリクエストの開始](#initiating-a-contact-request-on-zendesk)

### Switchboard を使用した通知の送信 {#sending-notifications-using-switchboard}

#### Switchboard を使用したインシデントステータス通知の作成 {#creating-an-incident-status-notification-using-switchboard}

1. [Switchboard にログイン](https://console.gitlab-dedicated.com/v2/login/) します。
1. [**Customer notifications**](https://console.gitlab-dedicated.com/customer_notifications) ページに直接移動します。これはホームページの左サイドバーにあります。
1. **+ New notification** を選択します。
1. 影響を受けるテナントを選択します。
1. インシデントに関連するテンプレートを選択します:
   1. `Incident investigation start` — インシデントの開始時に使用します。これは
      利用可能な最も汎用的なテンプレートです。
   1. `Incident investigation update` — 進捗を示し、新しい情報を共有するために使用します。
   1. `Incident escalated response` — インシデントが最高優先度であることを示すために使用します。
   1. `Incident mitigation in progress` — 積極的な緩和作業を示すために使用します。
   1. `Incident resolved` — 修正または緩和策がデプロイされた際に、インシデントを終了するために送信されます。
   これらのテンプレートのどれもあなたの状況に正確に一致しない場合は、最も関連性の高いものを選択してメッセージを編集してください。利用可能なテンプレートの完全なリストについては、[Switchboard 通知テンプレート](https://gitlab.com/gitlab-com/gl-infra/gitlab-dedicated/switchboard/-/tree/main#notification-templates) を参照してください。
1. オプション。**Message** テキストボックスで、通知を送信する前にメッセージを編集します:
   - シンプルなテンプレート (`Incident investigation start`、`Incident resolved`) では、
     メッセージ本文全体を編集できます。
   - 複雑なテンプレート (`Incident investigation update`、`Incident escalated response`、
     `Incident mitigation in progress`) では、導入段落のみ編集できます。
   - 構造化されたフィールド (**Investigation Focus Area**、**Affected Components**、**Customer
     Reported Impact**) はフォーム駆動のままで、以下のステップで設定します。
   - 編集はプレーンテキストのみです。リッチテキストや Markdown フォーマットはサポートされません。
   - メッセージを空にしておくことはできません。メッセージが空の場合、**Send** ボタンは無効になります。
   - テンプレートを切り替えると、メッセージは新しいテンプレートのデフォルトテキストにリセットされます。
1. オプション。`Incident investigation update`、`Incident escalated response`、
   `Incident mitigation in progress` テンプレートの場合:
   1. わかっている場合は、**Investigation focus area** と **Affected components** を選択します。
   1. 顧客がインシデントと一致する影響を報告している場合は、
      **Include customer reported impact** を選択し、詳細を入力します。
      このテキストボックスは顧客が報告した影響にのみ使用してください。
      目標は、顧客が報告した影響の詳細を共有することで一致を確認することです。
1. メッセージと構造化されたフィールドが正しいことを確認するために、通知をプレビューします。
1. **Send** を選択します。
1. 通知を送信した後、PagerDuty アラートを **Resolved** としてマークし、
   GDCMOC にコミュニケーションが開始されたことを通知します。
1. [継続的なインシデント更新の提供](#providing-ongoing-incident-updates-using-switchboard) を続けます。

#### Switchboard を使用した継続的なインシデント更新の提供 {#providing-ongoing-incident-updates-using-switchboard}

[新しいインシデントステータス通知を作成する](#creating-an-incident-status-notification-using-switchboard) ことで、顧客にインシデントステータスを更新します。最後の更新が変わっていない場合は、同じ情報を使用してください。

**60 分ごと** に更新を提供することを確実にしてください。または、インシデントが新しいステージ (Investigation Start → Investigation Update → Mitigation in Progress → Resolved) に進んだときのいずれか早い方です。

#### Switchboard が利用できないときに顧客の連絡先詳細にアクセスする方法

1. 毎日 UTC 6 時に、顧客の連絡先詳細が Switchboard からエクスポートされます
2. データはこの [Switchboard customer contact details export issue](https://gitlab.com/gitlab-com/gl-infra/gitlab-dedicated/team/-/work_items/12182) でアクセスできます

#### インシデント中に顧客が作成した Zendesk チケットの処理

Switchboard でインシデント通知を作成した後、顧客はインシデントに関する情報を求めて新しい Zendesk チケットを開く可能性があります。インシデントは積極的に調査されており、進捗があるたびに、または少なくとも 60 分ごとに、Switchboard 通知を通じて更新が提供されることを伝えてください。

**Switchboard を使用した通常の通知更新を継続する:** Zendesk チケットへの返信は、Switchboard 通知の更新を置き換えるものではありません。[Switchboard を使用した継続的なインシデント更新の提供](#providing-ongoing-incident-updates-using-switchboard) を続けてください。

#### Switchboard で過去の通知を表示する

すべての顧客通知は Switchboard に記録されます。過去の通知を表示するには:

1. 左上のプロフィールをクリックします
1. `Customer notifications` を選択します
1. 関連する通知のタイトルをクリックして、メッセージとその受信者を表示します

#### Switchboard での緊急メンテナンス通知の作成 {#creating-an-emergency-maintenance-notification-on-switchboard}

セキュリティ脆弱性の修正により、GitLab Dedicated 環境で緊急メンテナンスが発生する可能性があります。

注:
"緊急メンテナンス" はセキュリティ関連のメンテナンスのみを指します。週次のスケジュールメンテナンスウィンドウ外で発生するメンテナンスは "out-of-band メンテナンス" と呼ばれ、このワークフローは適用されません。

[Switchboard を使用したインシデントステータス通知の作成](#creating-an-incident-status-notification-using-switchboard) のステップに従い、メンテナンス用のテンプレートを選択します:

   1. `Emergency maintenance planned` は、重大な脆弱性による緊急メンテナンスの事前通知に使用します
   1. `Emergency maintenance completed` は、緊急メンテナンスが正常に完了したことを確認するために使用します

### Zendesk でのコンタクトリクエストの開始 {#initiating-a-contact-request-on-zendesk}

このワークフローは、インシデント調査のために顧客から追加情報を収集する必要がある場合、または既存の Switchboard テンプレートがコミュニケーションに使用できない場合に使用してください。

Switchboard で顧客の連絡先メールを見つけ、その連絡情報を使用して Zendesk でカスタマーサポートチケットを作成します。

#### Switchboard で顧客のメールアドレスを見つける

1. [Switchboard にログイン](dedicated_switchboard.md/#accessing-switchboard) します
1. ログインすると `Tenants` ページが表示されます。関連するテナントを見つけて `Manage` をクリックします。
1. `Cloud Account Config` セクションを展開し、`Primary Region` を探します。これにより、顧客がどのリージョンに拠点を置いているかがわかります。AWS リージョンコードに不確かな場合は [AWS ドキュメント](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/using-regions-availability-zones.html#concepts-available-regions) を参照してください。リージョンをメモしておきます。
1. `Contact information` セクションを検索し、展開します。`Operational email addresses` と `Customer Success Manager CSM` の値が表示されるはずです。

#### Zendesk チケットの作成

1. アウトバウンドリクエスト用の Zendesk チケットを作成するには、[こちら](/handbook/support/workflows/sending_notices/#manually-create-a-zendesk-ticket) の手順に従ってください。
   1. チケットの **subject** には、次のテンプレートを使用します: `GitLab Dedicated Notice: <description>`。
   1. マクロ `General::Outbound Contact Request` を適用します
   1. チケットの **requestor** には、リストされている最初の運用メールアドレスを使用します。
   1. 他の運用メールアドレスと顧客の CSM および ASE (もしあれば) を **CC** します。
   1. **Preferred Region for Support** を、テナントの `Primary Region` に近いリージョンに設定します。
   1. チケットに `dedicated_contacted_request` **タグ** を追加します。
   1. "Support Resolution Codes" を **Incident** に設定します。
1. チケットを自分自身に割り当てます。
1. チケットでは [RED データの送信を避けて](/handbook/support/workflows/sending_notices/#avoid-sending-red-data) ください:
    1. [ログと個人データの送信](/handbook/support/workflows/log_requests/#sending-logs-and-other-personal-data) のステップに従い、パスワード保護された ZIP ファイルに情報を含めます。
    1. プロジェクト／グループのリンクには、[組み込みのリダイレクト](/handbook/support/workflows/sending_notices/#tips-for-avoiding-red-data-in-notices) を使用してパス名を隠します。
1. 顧客に最初のアウトリーチメッセージを送信した後、PagerDuty アラートを **resolved** としてマークします。アラートの目的は、特に GDCMOC を関与させてコミュニケーションを開始することです。

#### Zendesk チケットのクローズ

Zendesk チケットをクローズする前に、以下を行ってください:

1. 顧客に完了を確認する最終更新を送信します。
1. アウトリーチチケットをクローズします。
1. コミュニケーションのタイムラインをまとめた簡単な内部ノートを追加します (オプション)。

注: 顧客がクローズ後にフォローアップの質問をしてきた場合、それらの問い合わせを元のアウトリーチコミュニケーションとは別に処理するために、新しいチケットを作成してください。

## 顧客への情報共有を続ける

- 特に顧客と同じリージョンの GDCMOC である場合、更新の頻度に関する期待値を顧客と一緒に設定するように作業してください。顧客は、地域のビジネスアワー中により多くの更新を期待する可能性が高いです。
  - 低頻度の更新で進める場合、重要なのは、期待される更新頻度を顧客に伝えることです。たとえば、顧客の地域のビジネスアワー中は 1〜2 時間ごとに更新を提供し、地域外の時間帯は何か実質的に共有することがあれば更新する、と顧客に伝えることができます。
- [顧客と共有 **すべきでない** 情報](/handbook/support/workflows/dedicated/#sharing-internal-logs-data--graphs) に注意してください
- 顧客に送信する前にメッセージをレビューしてもらいたい場合は、
  以下の表を参照して適切な DRI を見つけてください。
  - セキュリティ関連のコミュニケーションでは、メッセージ内容の承認が必要です。
  - その他のすべてのコミュニケーションでは、承認はオプションです。

| コミュニケーションタイプ                       | 誰が内容をレビューするか   | 誰が内容を承認するか |
|------------------------------------------|------------------------|-----------------------|
| 非セキュリティの out-of-band メンテナンス     | SRE                    | オプション              |
| セキュリティ関連の out-of-band メンテナンス | SIRT                   | SIRT                  |
| インシデントコミュニケーション                   | SRE / インシデントマネージャー | オプション              |
| その他の緊急コミュニケーション               | 内容による              | オプション              |

## 同時インシデントでページされる場合

サポートエンジニアは、複数のインシデントを管理することは期待されていません。同時の GitLab.com インシデントまたは GitLab Dedicated コンタクトリクエストが入ってきた場合、新しいインシデントのカバレッジを見つけるために、[Support Leader on the Hook (SLOTH)](/handbook/support/workflows/support-leader-on-the-hook/) と関わってください。

Slack で `@support-manager-oncall` を使ってサポートマネージャーオンコールに ping できます。

## GDCMOC ハンドオーバー

CMOC ワークフローの [End of Shift Handover Procedure](/handbook/support/workflows/cmoc_workflows/#end-of-shift-handover-procedure) に従ってください。送り出される GDCMOC に、送信した Switchboard 通知、Issue、Slack スレッド、または自分を CC すべきチケットを認識させてください。コミュニケーションに使用された Zendesk チケットを次の CMOC に割り当てます。
