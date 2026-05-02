---
title: Marketo プログラム/キャンペーンサポート
description: 'Marketo キャンペーンプロジェクト、プロセス、メモ'
twitter_image: /images/tweets/handbook-marketing.png
twitter_site: '@gitlab'
twitter_creator: '@gitlab'
upstream_path: /handbook/marketing/marketing-operations/campaign-operations/
upstream_sha: eb9c7122b4259a2111ed65628e5384768922a597
translated_at: "2026-04-30T00:00:00Z"
translator: claude
stale: false
---

## 概要
<!-- DO NOT CHANGE THIS ANCHOR -->
Marketing Operations チームは、Integrated Marketing チームに対して実行戦略やシステムセットアップに関するアドバイスを提供しています。さらに、現在この機能では、Field Marketing および Events チームのために、メールマーケティングおよびランディングページのセットアップ、その他の Marketo タスクを作成することでサポートしています。

## 私たちと働くには

Marketo キャンペーン/プログラムの作成とサポートは Marketing Operations の機能であるため、サポートをリクエストするには [同じガイドライン](/handbook/marketing/marketing-operations/#how-to-get-help) に従ってください。**Issue に必ず `~MktgOps-Support` ラベルを追加してください。** Asana 経由でリクエストを送信した場合、ラベルは代わりに処理されます。

Asana でプロジェクトを管理している場合、メールおよびランディングページの MOps サポートに必要なタスクは Regional Marketing テンプレートに既に組み込まれています。以下の手順に従ってください。コーポレートイベントの場合、プログラム作成のタスクは既に Asana に存在しており、準備ができたら MOps に割り当てるべきです。

### チームメンバー
<!-- DO NOT CHANGE THIS ANCHOR -->

| 名前 | 役職 | 詳細 |
| ---- | ------------ | ---------- |
| Esmira Khalilova | Associate Marketing Operations Manager | 主要な実行、プロセスに関する質問 |
| Bryce Weatherford | Marketing Operations Manager | プロセスに関する質問、バックアップ実行 |
| Jenny Tiemann | Staff Marketing Operations Manager | Issue トリアージ、複雑なセットアップ、プロセスに関する質問、バックアップ実行 |

### プロセスドキュメントへのショートカット
<!-- DO NOT CHANGE THIS ANCHOR -->

- [Sales Nominated Invitations](/handbook/marketing/lifecycle-marketing/email-processes-requests/#sales-nominated-flows-in-marketo)
- [Marketo Program + Salesforce Campaigns](/handbook/marketing/marketing-operations/campaigns-and-programs/#marketo-program-and-salesforce-campaign-set-up)
- [Workshop Landing Page and Marketo Setup](/handbook/marketing/field-marketing/field-marketing-owned-virtual-events/#virtual-workshop-logistical-set-up)

## プロジェクト管理
<!-- DO NOT CHANGE THIS ANCHOR -->
すべてのメールおよびランディングページのビルドは Asana で処理されます。

[ビデオ説明 (3 分間のビデオ)](https://drive.google.com/file/d/18rRtY0YUMphfY9ztPNX7PNO1z5Ju1B_7/view?usp=sharing)

**プロセス**

- FMM がコピーを完成させます。コピーが完了するまで次のステップを実行しないでください。
- FMM は「Write Copy」タスクをプロジェクト内の適切なセクションに移動します。タスクを移動するには、希望のセクションにドラッグ&ドロップするか、タスクを開いている場合はプロジェクト名の横にある下向き矢印を選択して適切なセクションを選択します。
- システムは必要なサブタスクを作成し、Lifecycle と MOps を割り当てます。このプロセスは 1 分かかるので、プロセスが完了するまで待ってください。
- FMM はメインタスクの期日を確認し、希望の送信日またはランディングページの公開日に調整します。[SLA](/handbook/marketing/marketing-operations/campaign-operations/#slas) に沿うようにし、招待またはフォローアップメールは木曜日には送信しません。
- Lifecycle および MOps とコメントでコミュニケーションをとります。FMM にはタスクが割り当てられませんが、チームから依頼があった場合に承認や入力を提供する必要があります。コメントは Asana の Inbox で確認できます。

**セクション**

- ランディングページリクエスト (すべてのタイプ) - ランディングページ用の「Write Copy」タスクでコピーが完成している場合、タスクをこのセクションに移動します。
- メールリクエスト (非ワークショップ) - メールに Lifecycle のレビューが必要な場合はこのセクションを使用します。すべての非ワークショップメールには Lifecycle のレビューが必要です。
- メールリクエスト (Workshop) - メールに Lifecycle レビューが不要な場合はこのセクションを使用します。リマインダーメールおよびワークショップメールには Lifecycle のレビューは必要ありません。

### ショートカットリストビュー
<!-- DO NOT CHANGE THIS ANCHOR -->
[Marketing Operations Support board](https://app.asana.com/1/306855239930259/project/1209435555145979/board/1209446656810646)

### SLA

#### MktgOps

MktgOps の SLA は 7 営業日であることに注意してください。事前に計画的に進めてください。SLA は、Issue が `~MktgOps::00: Triage` に入れられた翌日、またはタスクが Asana の正しい Project Section に移動され、すべての必要な情報が完了した翌日から始まります。たとえば、Issue が火曜日にトリアージに入った場合、1 日目は水曜日、7 日目は翌週の木曜日となります。7 日目が利用可能な最も早いデプロイ/公開日となります。米国の祝日と Family & Friends 日も考慮してください。同じ例で、4 日目が米国の祝日の場合、7 日目は金曜日に押し出されます。

標準セットアップ以外のものは 7 営業日 SLA に該当しません。最も一般的な例は、カスタムフォームの作成です。カスタムフォームが必要な場合とこの作業のタイムラインに関する詳細は、[Marketo HB ページ](/handbook/marketing/marketing-operations/marketo/#forms) を参照してください。

標準セットアップ以外のものを必要とするプログラムを計画している場合は、計画段階の早い段階で MOps を巻き込んでください。私たちは、利用可能なテクノロジーを最適に活用して目標を達成し、プログラムのタイムラインを順調に進めるためのガイドができます。

#### Regional Marketing

このプロセスに関連する Regional Marketing の SLA については [こちら](/handbook/marketing/field-marketing/#slas) を参照してください。

### トリアージステップ
<!-- DO NOT CHANGE THIS ANCHOR -->

1. **Regional Marketing / Corporate Events**: Regional Marketing または Corporate Events テンプレートを使用して新しいプロジェクトを作成します。Regional Marketing の場合、このプロセスは GitLab > Asana の同期によって自動化されています。
1. **Regional Marketing / Corporate Events**: コピーがアナリストレポートを参照している場合、FMM は [Analyst Citation Review issue](https://gitlab.com/gitlab-com/marketing/brand-product-marketing/product-marketing/-/issues/new?issuable_template=AR-CitationReview) を作成し、それを MOps メールリクエストに関連付ける必要があります。Issue 全体を完了する必要はありませんが、メールの Issue と提案コピー付きのコピードキュメントをリンクする必要があります。メール承認を迅速化するために、[こちら](https://gitlab.com/gitlab-com/marketing/brand-product-marketing/product-marketing/-/issues/7130#previously-approved-email-copy-still-requires-reapproval) のコンテンツを使用できます。これは迅速に承認される可能性が最も高いものです。事前に承認されたランディングページのコピーはありません。
1. **Regional Marketing / Corporate Events**: Regional Marketing の場合、[プロジェクト管理](/handbook/marketing/marketing-operations/campaign-operations/#project-management) で説明されている手順に従ってください。
    - この時点で、すべての詳細を提供し最終化する必要があります (関係するステークホルダーがレビューしたコピー、すべてのハイパーリンクをダブルチェックして確認することを含む)。
    - リクエストされた送信日はタスクの期日となります。リクエストされた送信日が Mktg Ops に渡された日から 7 営業日未満の場合、SLA を遵守するために Issue の日付が 7 営業日後に予定される場合があります。これは、現在進行中の業務と今後の業務に基づいて Mktg Ops が判断します。木曜日には招待やフォローアップメールを送信しないことに注意してください。
1. **Lifecycle**: メールコピーをレビューし、最終化されて承認されたら、「Lifecycle Approval Status」カスタムフィールドを `Copy approved, layout pending` に更新し、サブタスクをクローズします。
1. **MktgOps**: DRI が Marketo でセットアップを完了し、メールについては [Technical Email QA checklist](/handbook/marketing/lifecycle-marketing/email-processes-requests/#email-qa-checklist---technical) のすべてのステップを完了します。
1. **MktgOps**: DRI はプロジェクトに記載されている FMM/FMC にテストメールを送信し、メールのスクリーンショットを Issue に投稿します。
1. **MktgOps**: DRI は Issue にコメントし、レビュー担当者/承認者をタグ付けし、テストメールがそれらの inbox に送信されたことを記録し、ステータスラベルを `FM Review Required` に変更してサブタスクをクローズします。
1 **Lifecycle** レイアウトをレビューし、承認されたら、「Lifecycle Approval Status」カスタムフィールドを `Email fully approved` に更新し、サブタスクをクローズします。
1. **Regional Marketing / Corporate Events**: 承認者は [Business Owner Email QA checklist](/handbook/marketing/lifecycle-marketing/email-processes-requests/#email-qa-checklist---business-owner) のすべてのステップを完了し、タスクのコメントでメールを承認 (または修正の提供) します
    - SLA: 24 時間 *テストメールが送信され、Issue にコメントが追加された時点から*。タイムリーなフィードバックと承認が重要です。
1. **MktgOps**: DRI が必要な修正を行います。修正が不要で、レビュー担当者と Lifecycle から承認が提供された場合、DRI はメールを送信に設定 (送信時刻はコピードキュメントで決定するか、標準送信時刻を使用) し、タスクに `Scheduled to Send` ステータスラベルを追加します
1. **MktgOps**: DRI はメールが送信されたことを確認し、コメントで確認 (Issue リクエスト者をタグ付け)、予備送信レポートのスクリーンショットを貼り付け、サブタスクをクローズします。最後のサブタスクがクローズされると、メインタスクは自動的にクローズします。
1. **Regional Marketing / Corporate Events** イベント後のレポート。完全な Marketo Recap レポートをリクエストするには、Follow Up email サブ Issue でリクエストしてください。

### メールリクエスト者の責務
<!-- DO NOT CHANGE THIS ANCHOR -->

- Issue (メール) リクエスト者は、タスクを移動する前に **すべての詳細**、**最終承認済みコピー** (すべてのステークホルダーがレビュー済み) を含めて提出する責任があります。
- Issue (メール) リクエスト者は、**タイムリーなフィードバックと回答** に責任を負います。
- Issue (メール) リクエスト者は、**最終 QA** (スペル、文法、可読性、すべてのリンクが適切な URL に向かい、適切なトラッキングパラメータを含むかのチェックを含む) に責任を負います。[QA チェックリスト](/handbook/marketing/lifecycle-marketing/email-processes-requests/#email-qa-checklist---business-owner) を参照してください。

### レビュープロセス

<!-- DO NOT CHANGE THIS ANCHOR -->
特に明記されていない限り、メールが設定されるためには「Reviewer/Approver」としてリストされている人のうち **1 人** と Lifecycle Marketing Manager が承認する必要があります。

上記の「メールリクエスト者の責務」セクションに記載されているとおり、レビュー担当者はすべてのコピー、文法、可読性、LINKS、トラッキング、フォーマットの最終 QA に責任を負います。

詳細なメール QA 手順は、メールおよびナーチャーハンドブックページに記載されています。このチェックリストは QA される各メールに従う必要があります。

### 質問

質問が生じた場合は、`#mktgops` Slack チャンネルで尋ねてください。

### メール送信時刻

ナーチャープロトコルにより、非運用メール (招待、フォローアップ) は木曜日には送信しません。

Regional Marketer/Event Manager が特定の時間を指定しない場合、メールは以下の時刻に送信されます:

- AMER ラベル: 9 AM ET
- EMEA ラベル: 10 AM CET
- APAC ラベル: 11am AEST

リクエストされた送信時刻が逃された場合、MktgOps は元のリクエストから 8 時間以内にメールをスケジュールするか、他のメール送信によりメールのリスト サイズが減る場合は翌日にスケジュールできます。送信時刻が元の送信時刻から 24 時間を超える場合、MktgOps は Issue で FMM とオプションについて相談します。

### 技術的セットアップ - メール

- 専用のメールヘッダー (テンプレートで使用される標準ヘッダーではない) - 通常、Commit や DevSecOps World Tour のような大規模イベントに使用されます。
  - 画像は Lifecycle Marketing またはイベント DRI によってリクエストされます
  - 画像のサイズは [メールマーケティングページ](/handbook/marketing/lifecycle-marketing/email-best-practices/#email-templates) で確認できます。
  - リクエストされた画像は透明である必要があります。すべてのクライアントで適切に表示されないため、ベタの画像は使用できません。
  - メールコード ("Edit Code" の下) では、ベタのメール背景を使用する必要があります (色はイベントのデザインに応じて変わります)。`B - Advanced modular template - light mode` テンプレート (別名 Advanced Webcast Template) からのコード例。編集する変数は bgcolor=`#xxxxxx` および border-bottom: 4px solid `#xxxxxx` です
     `<tr class="mktoModule" id="bgImagewText4990312b-fd20-449c-a184-d0500cdcc1aa" mktoname="Background Image with CTA">
                        <td background="${heroBackgroundImage}" bgcolor="#171321" valign="middle" style="max-width: 600px; width: 100%; text-align: center; height: 200px; background-repeat:no-repeat ;background-position: 100% !important; background-size: cover !important; border-bottom: 4px solid #171321;" width="100%" height="auto">`
    - コードの編集を保存した後、既存のヘッダーをクリックすると、Variable サイドバーが表示されます。新しい透明な画像を `Hero Background Image` セクションに追加し、リンクとボタンのコピーを確認します
    - 専用画像を使用するすべてのメールは、さまざまなクライアントでのプレビューのために [Litmus に送信](/handbook/marketing/marketing-operations/litmus/#steps-to-test-an-email) する必要があります。確認すべきものについては Litmus ページを参照してください。
- メールやその他の用途で utm 値付きの URL を使用する場合、Marketo ページの URL (page.gitlab.com で始まる) は `?` の前のページ URL の末尾に `/` を含めてはいけません。これによりページがリダイレクトされる可能性があります。(正しい例: `https://page.gitlab.com/webcast-example?{{my.utm}}`)。
- メールやその他の用途で utm 値付きの URL を使用する場合、about.gitlab.com ページの URL (about.gitlab.com で始まる) は `?` の前のページ URL の末尾に `/` を含める必要があります。`/` を省略すると、ページにフォームが表示されない可能性があります。(正しい例: `https://about.gitlab.com/webcast-example/?{{my.utm}}`)。
- ローカライズメールの場合は、必ず [Localized Email Snippet](/handbook/marketing/marketing-operations/marketo/#snippets) を使用してください
- ビジネスオーナーレビューに送る前に、メール作成者は [Technical email QA checklist](/handbook/marketing/lifecycle-marketing/email-processes-requests/#email-qa-checklist---technical) のすべてのステップを完了する必要があります

### 技術的セットアップ - ランディングページ
