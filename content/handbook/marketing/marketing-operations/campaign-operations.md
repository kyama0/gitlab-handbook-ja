---
title: Marketo プログラム/キャンペーンサポート
description: 'Marketo キャンペーンプロジェクト、プロセス、メモ'
twitter_image: /images/tweets/handbook-marketing.png
twitter_site: '@gitlab'
twitter_creator: '@gitlab'
upstream_path: /handbook/marketing/marketing-operations/campaign-operations/
upstream_sha: 877082e5cd4baeabe3d6e802b3b4b1efdb6573f1
translated_at: "2026-05-23T00:00:00Z"
translator: claude
stale: false
lastmod: "2026-05-19T12:08:56-07:00"
---

## 概要
<!-- DO NOT CHANGE THIS ANCHOR -->
Marketing Operations チームは、Integrated Marketing チームに対して実行戦略やシステムセットアップに関するアドバイスを提供しています。さらに、現在この機能では、Field Marketing および Events チームのために、メールマーケティングおよびランディングページのセットアップ、その他の Marketo タスクを作成することでサポートしています。

## 私たちと働くには

Marketo キャンペーン/プログラムの作成とサポートは Marketing Operations の機能であるため、サポートをリクエストするには [同じガイドライン](/handbook/marketing/marketing-operations/#how-to-get-help) に従ってください。**Issue に必ず `~MktgOps-Support` ラベルを追加してください。**

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

私たちが取り組んでいる Issue を手動で追加する手間を避けるため、Regional Marketing はラベルとボードを利用して、MktgOps と進めている作業を管理します。すべてのコメントは GitLab Issue 内で直接コメントを通じて行う必要があります。

[Issue のステータスを追跡する](/handbook/marketing/marketing-operations/#labeling) ために Issue で使用できる追加のラベルは、Marketing Operations ページで確認できます。

**プロセス**

- FMM がコピーを完成させます。コピーが完了するまで次のステップを実行しないでください。
- FMM は「Write Copy」Issue を完了し、以下の Landing Page および Email 1 のタスクで定義された適切なラベルを更新します。
- 必ず [SLA](/handbook/marketing/marketing-operations/campaign-operations/#slas) に沿うようにし、招待またはフォローアップメールは木曜日には送信しません。
- Lifecycle および MOps とコメントでコミュニケーションをとります。

### ショートカットリストビュー
<!-- DO NOT CHANGE THIS ANCHOR -->
- [Issue Board](https://gitlab.com/groups/gitlab-com/marketing/-/boards/5563453?label_name%5B%5D=MktgOps-Support)
- [Lifecycle Marketing Review board](https://gitlab.com/groups/gitlab-com/marketing/-/boards/7146189?label_name[]=Lifecycle%20Marketing%20Review)

### SLA

#### MktgOps

MktgOps の SLA は 7 営業日であることに注意してください。事前に計画的に進めてください。SLA は、Issue が `~~CampaignOps::01: Ready to work` に入れられた翌日から始まります。たとえば、Issue が Ready to Work に移った場合、1 日目が水曜日であれば、7 日目は翌週の木曜日となります。7 日目が利用可能な最も早いデプロイ/公開日となります。米国の祝日と Family & Friends 日も考慮してください。同じ例で、4 日目が米国の祝日の場合、7 日目は金曜日に押し出されます。

標準セットアップ以外のものは 7 営業日 SLA に該当しません。最も一般的な例は、カスタムフォームの作成です。カスタムフォームが必要な場合とこの作業のタイムラインに関する詳細は、[Marketo HB ページ](/handbook/marketing/marketing-operations/marketo/#forms) を参照してください。

標準セットアップ以外のものを必要とするプログラムを計画している場合は、計画段階の早い段階で MOps を巻き込んでください。私たちは、利用可能なテクノロジーを最適に活用して目標を達成し、プログラムのタイムラインを順調に進めるためのガイドができます。

### Regional Marketing

このプロセスに関連する Regional Marketing の SLA については [こちら](/handbook/marketing/field-marketing/#slas) を参照してください。

### トリアージステップ
<!-- DO NOT CHANGE THIS ANCHOR -->

**Lifecycle メールレビューへの言及はすべて、メール、具体的には招待メールおよびフォローアップメールにのみ適用されることに注意してください。標準コピーを使用するワークショップ、リマインダーメール、またはランディングページのリクエストの場合、Lifecycle のレビューは必要ありません。**

1. **Regional Marketing** Marketo アセットの Issue は、Regional Marketing プロジェクトの Plan to WIP プロセス [link to plan to wip documentation] の間に DAP によって作成されます。
FMC は、すべての MOps 関連 Issue (ランディングページ、ターゲットリストリクエスト、すべてのメール) に `~CampaignOps::00: Blocked`、`~MktgOps-Support` が追加されていることを確認します。これにより、Issue を事前に開き、コピーが最終化される間も利用可能にできます。
FMC はまた、`~Lifecycle:: 00 Not ready for review` ラベルが招待またはフォローアップメールに適切に関連付けられていることを確認します。このラベルは、標準コピーを使用するワークショップメールやリマインダーメールには必要ありません。これにより、Issue を事前に開き、コピーが最終化される間も利用可能にできます。
追加の Issue を手動で作成する必要がある場合は、[Regional Marketing プロジェクト](https://gitlab.com/gitlab-com/marketing/field-marketing/-/work_items) の適切なテンプレート (email / landing page) を使用してください。適切なテンプレート経由で Issue を開くと、`~CampaignOps::00: Blocked`、`~MktgOps-Support`、`~Lifecycle:: 00 Not ready for review` ラベルが自動的に Issue に関連付けられます。標準コピーを使用するワークショップやリマインダーメールでは、Lifecycle ラベルを削除できます。
1. **Regional Marketing** コピーがアナリストレポートを参照している場合、FMM は [Analyst Citation Review issue](https://gitlab.com/gitlab-com/marketing/brand-product-marketing/product-marketing/-/issues/new?issuable_template=AR-CitationReview) を開き、それを MOps メールリクエストにリンク Issue として関連付ける必要があります。Issue 全体を完了する必要はありませんが、メールの Issue と提案コピー付きのコピードキュメントをリンクする必要があります。メール承認を迅速化するために、[こちら](https://gitlab.com/gitlab-com/marketing/brand-product-marketing/product-marketing/-/issues/7130#previously-approved-email-copy-still-requires-reapproval) のコンテンツを使用できます。これは迅速に承認される可能性が最も高いものです。事前に承認されたランディングページのコピーはありません。
1. **Regional Marketing** 各アセットのコピーが準備できたら、FMM は該当するアセット Issue のラベルを `~CampaignOps::00: Blocked` から `~CampaignOps::01: Ready to work` に移動し、Issue が招待/フォローアップメールの場合は、`~Lifecycle:: 00 Not ready for review` ラベルを `~Lifecycle:: 01 Needs Copy Review` に移動します。たとえば、FMM がコピードキュメントで LP と Invite 1 のコピーを完成させた場合、LP の Issue と Invite 1 の Issue の両方で該当するラベルを変更します。
    - この時点で、すべての詳細を提供し最終化する必要があります (関係するステークホルダーがレビューしたコピー、すべてのハイパーリンクをダブルチェックして確認することを含む)。完了する前にコピーを `~CampaignOps::01: Ready to work` に移動しないでください。これは MOps および Lifecycle にとって不要なレビューおよびビルドサイクルを引き起こし、Regional Marketing チームの残りのメンバーの他のビルドを遅らせます。
    - リクエストされた送信日は Issue の期日となります。リクエストされた送信日が Mktg Ops に渡された日から 7 営業日未満の場合、SLA を遵守するために Issue の日付が 7 営業日後に予定される場合があります。これは、現在進行中の業務と今後の業務に基づいて Mktg Ops/Lifecycle が判断します。ナーチャーメールは木曜日に送信されるため、招待やフォローアップメールは木曜日には送信しないことに注意してください。
    - Mktg Ops トリアージマネージャーが、Issue にすべての詳細が含まれていないと判断した場合、`~CampaignOps::00: Blocked` および `~Lifecycle:: 00 Not ready for review` ラベルを追加し、何が不足しているかをリクエストしたチームメンバーにコメントします。チームメンバーが不足部分に対応したら、再度 `~CampaignOps::01: Ready to work` および `~Lifecycle:: 00 Not ready for review` ラベルを追加して、レビュープロセスを最初からやり直します。
1. **MktgOps**: Issue を適切な MOps および [Lifecycle DRI](/handbook/marketing/lifecycle-marketing/email-processes-requests/#email-request-issue-template) に割り当て、作業のためのマイルストーンを割り当てます。メール招待およびメールフォローアップの場合、メールコピーがレビュー準備完了であることを Lifecycle チームに知らせるため、`~Lifecycle 01 Needs Copy Review` ラベルが適切に追加されていることを確認します。
1. **MktgOps**: `~email-calendar` および適切なリージョンラベル (`~AMER-emails`、`~APAC-emails`、`~EMEA-emails`) が適用されていること、および期日が Issue サイドバーの `Due` に記載されていることを確認します。
1. **Lifecycle**: メールコピーをレビューし、最終化されて承認されたら、`~Lifecycle 02 Copy Approved` ラベルを追加します。`~email-calendar` および適切なリージョンラベル (`~AMER-emails`、`~APAC-emails`、`~EMEA-emails`) が適用されていること、および期日が Issue サイドバーの `Due` に記載されていることを確認します。
1. **MktgOps**: DRI が Marketo でセットアップを完了し、メールについては [Technical Email QA checklist](/handbook/marketing/lifecycle-marketing/email-processes-requests/#email-qa-checklist---technical) のすべてのステップを完了します。
1. **MktgOps**: DRI は Issue に記載されている「Reviewers/Approvers」にテストメールを送信します。承認者による完全な QA が必要なため、この時点ではスクリーンショットを投稿しません。
1. **MktgOps**: DRI は Issue にコメントしてレビュー担当者/承認者をタグ付けし、テストメールがそれらの inbox に送信されたことを記録し、ステータスラベルを `~CampaignOps::03: DRI review` および `~Lifecycle:: 03 Email Layout Needs Approval` に変更します。
1. **Lifecycle Marketing**: メールレイアウトをレビューします。承認されたら、ラベルを `~Lifecycle:: 04 Email Layout Approved` に変更します。これは Lifecycle 承認プロセスの最後のステップです。
1. **Regional Marketing**: Issue 承認者は Issue に記載されている必要があり、[Business Owner Email QA checklist](/handbook/marketing/lifecycle-marketing/email-processes-requests/#email-qa-checklist---business-owner) のすべてのステップを完了し、Issue のコメントでメールを承認 (または修正の提供) します。
    - SLA: 24 時間 *(テストメールが送信され、Issue にコメントが追加された時点から)*。タイムリーなフィードバックと承認が重要です。
1. **MktgOps**: DRI が必要な修正を行います。修正が不要で、レビュー担当者から承認が提供された場合、DRI はメールを送信に設定 (送信時刻は Issue の説明/コメントで決定するか、[標準時刻を使用](/handbook/marketing/marketing-operations/campaign-operations/#email-send-times)) し、`~CampaignOps::07: Scheduled to send` ラベルを追加します。
1. **MktgOps**: DRI はメールが送信されたことを確認し、コメントで確認 (Issue リクエスト者をタグ付け)、`~CampaignOps::08: Complete` を追加して Issue をクローズします。
1. **Regional Marketing** イベント後のレポート。完全な Marketo Recap レポートをリクエストするには、Follow Up email の Issue でリクエストしてください。
1. **MktgOps** レポートが完了したら、Follow-up の Issue で詳細とともにリクエストした FMM をタグ付けしてください。FMM は必要な箇所に情報を追加します。

### Corporate Events

Corporate Events は主に、Program Tracking と自動化のために MOps に支援をリクエストします。Lifecycle Marketing は、Corporate Events の顧客向けイベントプロモーションを担当します。

1. **Corporate Events**: Program Tracking および Marketo アセットの Issue は、ここのプロンプト [link to prompt] を使用して DAP によって作成されます。
1. **Corporate Events**: Corp Events Manager は、Program Tracking Issue でリクエストされたすべての詳細を完了します。これが完了したら、ラベルを `~CampaignOps::00: Blocked` から `~CampaignOps::01: Ready to work` に移動し、Program Tracking および Automation リクエストの Issue に `~MktgOps-Support` が付いていることを確認します。
1. **Corporate Events**: 必要なすべての情報が完了していること、およびリクエストの期日が Issue のサイドバーの「DUE」に記載されていることを確認します。MOps の SLA は 5 日です。
    - Mktg Ops トリアージマネージャーが、Issue にすべての詳細が含まれていないと判断した場合、`~CampaignOps::00: Blocked` ラベルを追加し、何が不足しているかをリクエストしたチームメンバーにコメントします。チームメンバーが不足部分に対応したら、`~CampaignOps::01: Ready to work` を追加して、レビュープロセスを最初からやり直します。
1. **MktgOps**: Program Tracking のためにすべての Marketo & SFDC キャンペーンを作成します。詳細を Epic に追加して Issue をクローズします。リクエスト者をタグ付けして、プログラムトラッキングが完了したことを知らせます。
1. **MktgOps**: 自動化の Issue はケースバイケースで処理されます。

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

リクエストされた送信時刻が逃された場合、MktgOps は元のリクエストから 8 時間以内にメールをスケジュールするか、他のメール送信によりメールのリストサイズが減る場合は翌日にスケジュールできます。送信時刻が元の送信時刻から 24 時間を超える場合、MktgOps は Issue で FMM とオプションについて相談します。

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
