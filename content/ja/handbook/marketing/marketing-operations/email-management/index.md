---
title: "メール管理"
description: "メールデータベース管理は MktgOps の中核的な責務です。GitLab がメールのベストプラクティスに従い、グローバルなスパム法を遵守し、アクティブデータベース全体の健全性を保つことがすべて優先事項です。"
upstream_path: /handbook/marketing/marketing-operations/email-management/
upstream_sha: eb9c7122b4259a2111ed65628e5384768922a597
translated_at: "2026-04-30T00:00:00Z"
translator: claude
stale: false
---

## 概要

メールデータベース管理は MktgOps の中核的な責務です。GitLab がメールのベストプラクティスに従い、グローバルなスパム法を遵守し、アクティブデータベース全体の健全性を保つことがすべて優先事項です。

メール作成とメールナーチャリングプログラムは Campaigns Team が管理しています。GitLab のメールコミュニケーションについて詳しく知るか、メールをリクエストするには、ハンドブックのデマンドジェネレーションセクションにある [Emails/Nurture ハンドブック](/handbook/marketing/lifecycle-marketing/emails-nurture/) を参照してください。

送付されたすべてのメールは [FY23 All-Marketing SSOT Calendar](/handbook/marketing/#marketing-calendar-inputs) で更新する必要があります

### メールの種類

**緊急 / セキュリティインシデント**
これらはトランザクションメールであり、ほとんどの場合ユーザーベースに対して非常に選択的に必要な情報を提供します。これは `operational` メールであり、配信停止を上書きし、マーケティングメールのオプトアウトに準拠する必要はありません。

Engineering や Product チーム (このタイプのメールをリクエストするチーム) に協力してもらい、実際に警告または通知すべき人に絞り込むことが非常に重要です。これにより、非常に特定の集中したリストに通知することになります。送信元のメールプラットフォームは複数の異なる要因によって決まりますが、主にリストサイズに依存します。このようなメールをリクエストする必要がある場合は、`incident_communications` [テンプレート](https://gitlab.com/gitlab-com/marketing/marketing-operations/-/issues/new?issuable_template=incident_communications) を使用し、[このセクション](/handbook/marketing/marketing-operations/) を参照してください。

**Non-Demand Generation**
`operational` とは見なされないが、以下のカテゴリーにも当てはまらないメール。利用例: GitLab Hosted の請求変更、Release update 9.0.0 の変更、GitLab Page の変更、古い CI Runner クライアント。non-dg メールが必要な場合は、[以下の手順](/handbook/marketing/marketing-operations/email-management/#request-non-demand-generation-emails) に従ってください

**ニュースレター**
ニュースレターは Content Team と Campaigns Team の連携によるものです。[詳しくはこちら！](/handbook/marketing/lifecycle-marketing/email-processes-requests/#newsletter) ユーザーは Web サイトで [ニュースレターに登録](https://about.gitlab.com/company/contact/) できます。

**セキュリティリリース**
GitLab プラットフォームに関連するセキュリティパッチや特定された脆弱性などに関する重要な情報を含む、必要に応じて送付されるメールです。これらのメールは純粋にテキストベースで、本質的にはトランザクション的なものです。ユーザーは GitLab Contact us ページで [セキュリティ通知に登録](https://about.gitlab.com/company/contact/#security-notices) できます。

**Webcasts**
今後のウェブキャストに関する招待または通知メール。

**ライブイベント**
ライブイベント、ミートアップ、または対面トレーニングへの参加招待メール。これらのメールは全体セグメントの地理的サブセットに送付されます。このタイプのメールは、私たちが参加するカンファレンスで、開催または後援するブースやイベントを認知してもらうためにも使用されます。

### メールコミュニケーションポリシー

すべてのマーケティングルールと同意言語については [legal ページを参照](https://internal.gitlab.com/handbook/legal-and-corporate-affairs/legal-privacy/#marketing-rules-and-consent-language/) してください。

この [FigJam](https://www.figma.com/file/fUbK9fPM0DOVf1ob6IIDbx/Opt-in-Workflow_2023-08-22_10-58-58?type=whiteboard&t=S4UoLJlyfrDlhTmw-1) は、すべてのフォーム、リストインポート、個別サブスクリプションのオプトイン・オプトアウト/配信停止のワークフローを示しています。(ワークスペースメンバーのみ閲覧可能)

GitLab では、人々にとって有益な方法でコミュニケーションを取るよう努めています。常に通信に配信停止リンクを含め、配信停止リストを尊重しています。すべてのメールの一番下にある配信停止ボタンに加えて、[メール購読センター](https://about.gitlab.com/company/preference-center/) があり、人々がメール通信の希望をコントロールできます。

各フォームには適切なオプトインの言語が指定されます。確認するには [こちら](https://docs.google.com/document/d/1UEfWo26DP7nRPrWRWo7O7oSrNp_rRuVqyN_vC7SwXME/edit?usp=sharing) を参照してください。

### メールフィルター

すべてのメール送付では、関連する `Emailable` Smart List を使用する必要があります。これは、関連するオーディエンスに対応するフィルターに加えて使用されます。

- [SSOT - WEBCASTS EMAILABLE](https://engage-ab.marketo.com/?munchkinId=194-VVC-221#/classic/SL52991024A1)
- [SSOT - LIVE EVENTS EMAILABLE](https://engage-ab.marketo.com/?munchkinId=194-VVC-221#/classic/SL52991025A1)
- [SSOT - NEWSLETTER EMAILABLE](https://engage-ab.marketo.com/?munchkinId=194-VVC-221#/classic/SL52991026A1)
- [SSOT - EDUCATION NEWSLETTER EMAILABLE](https://engage-ab.marketo.com/?munchkinId=194-VVC-221#/classic/SL52991027A1)
- [SSOT - ALL EMAILABLE](https://engage-ab.marketo.com/?munchkinId=194-VVC-221#/classic/SL52996261A1)
- [NURTURE EMAILABLE](https://engage-ab.marketo.com/?munchkinId=194-VVC-221#/classic/SL52969344A1)

Marketo の Smart List でこれらのフィルターを適用するには、`Member of Smart List` を選択し、フィルター `Member of Smart List in [上記から適切な Emailable リストを選択]` を使用してください。

メール送信では Marketo のコンプライアンスセグメンテーションを使用する必要はありません。セグメントは Smart Lists に組み込まれているため、上記の Smart Lists のみで十分です。

メール送信に使用する追加のフィルターもあります。これらはリストテンプレートに組み込まれていますが、運用メールに正しい除外設定があることを確認してください。詳細は [internal handbook](https://internal.gitlab.com/handbook/marketing/marketing-ops-and-analytics/marketing-operations/marketo/) で確認できます。

### ローカライズメールフッタースニペット

ローカライズメールに使用できる [ローカライズメールフッタースニペット](https://engage-ab.marketo.com/?munchkinId=194-VVC-221#/classic/SN15Z1B2ZN16) があります。このフッターには、相手の言語設定セグメントに基づき、相手が好む言語で標準の配信停止と preference center が含まれます。このフッターをナーチャーメールに追加するには (ほとんどのモジュラーテンプレート上のメールについて手順は同じです):

- セクションの Settings ボタンをクリックし、既存のフッターセクションを削除する
- フッターがあった場所に、サイドバーから `Body text` モジュールをドラッグする
- `Body text` モジュールの最初のコンテンツセクションをクリアする
- 2 つ目のセクションで Settings ボタンを選択し、`Replace with snippet` をクリックする
- `Localized email footer` を選択して保存する

### 送信頻度

Marketo で強制された制限により、1 つのアドレスが受け取れるメールの数が 1 日と 1 週間ごとに制限されています。制限は 1 日 1 通、週 3 通です。誰かがその制限に達すると、しきい値を下回るまでメールグループから抑制されます。**ただし**、メールが `operational` としてマークされている場合は除きます。運用メールは 1 日/週のコミュニケーション制限にカウントされません。

メール制限はキャンペーンテンプレートでは設定されていませんが、20,000 人以上に送付するように設定されている場合、`Not Sent Email in last 2 Days` のフィルターを含める必要があります。

[All-Marketing SSOT Calendar](https://internal.gitlab.com/handbook/marketing/#fy25-ssot-marketing-calendar) を参照し、同時期に行われている他の送信を確認してください。

## non-Demand Generation メールのリクエスト

Non-DG メールは、製品アップデート、セキュリティアラート、調査メールなどに必要となる場合があります。緊急の場合は、[こちら](/handbook/marketing/emergency-response/#marketing-emergency-response) の手順に従ってください。それ以外の場合は、[こちらのページで詳細をご確認ください](/handbook/marketing/marketing-operations/email-management/operational-email-sends/)

### Operational / 配信停止のバイパス

特定のメールは `operational` としてマークすることで、配信停止と無効なメールをバイパスできます。例としては、重要なシステムアラート、アカウント更新 (ポリシー更新など)、イベント参加に必要なリンク付きのイベントリマインダー、イベント後の録画とスライドメールの自動応答などがあります。自動応答メールについては、この [decision tree](https://www.figma.com/file/NmnCPyzTwg0szmFEYhIAnh/Decision-Tree-for-Operational_2023-08-23_20-50-07?type=whiteboard&node-id=0%3A1&t=BpnsLh0xK6S9yxOf-1) に従って、メールが運用基準に合うかどうかを判断してください。合わない場合は、メールを送信するために適切なメールコンプライアンスフィルターを含め、メール上の operational チェックボックスのチェックを外す必要があります。

ニュースレター、イベント招待、セールスメールなど、ほとんどがマーケティングまたはプロモーションのコンテンツを含むメールは `operational` とは見なされません。Marketo でこの機能にアクセスできるのは、MktgOps と特定の MCM のみです。メールが運用に該当するかどうか質問がある場合は、MktgOps に連絡し、最終レビューのために Legal を関与させます。**疑わしい場合は質問しましょう！**

## 配信停止の方法

GitLab からのメールマーケティングから外したいとチームメンバーに依頼があった場合、チームメンバーは以下のいくつかの異なる手順を取れます。配信停止しても、アカウントに関連する [運用メール](/handbook/marketing/marketing-operations/email-management/#operational--bypass-unsubscribe) を引き続き受け取る場合があります。

1. 設定を更新するため、[メール購読センター](https://about.gitlab.com/company/preference-center/) に誘導する
1. ALL の通信から配信停止するため、配信停止ページ (https://page.gitlab.com/UnsubscribePage.html) に誘導する
1. その人物の SFDC レコードで `email opt out` ボックスをチェックすると、Marketo と Outreach の配信停止チェックボックスが更新されます。
1. その人物が SFDC にいないか、配信停止ページに行くことを拒否した場合、Marketing Operations チームが Marketo で手動で配信停止できます。confidential issue を作成し、#mktgops でチームに通知してください。

### パートナーとメールコミュニケーション

パートナーがリードまたはコンタクトと連絡を取っている間、GitLab はパートナーがフォローアップできるよう、見込み客へのメール送信を停止すべきです。パートナーが拒否した場合、または GitLab がリードを取り戻した場合、GitLab から再度メールを送信できます (同意がある場合)。2021-12-28 時点では、リードが GitLab に戻されてメール送付可能になるプロセスはまだ設定されていません。

Marketo のワークフローは設定されており、[こちらに反映されています](https://www.figma.com/file/XPEIfQ3ZBoIuK01U6XCAyH/Partner-Opt-in--Email-Compliance-Flow_2023-08-30_16-10-19?type=whiteboard&node-id=0%3A1&t=LTAXXtADs19U4fHf-1)。リードまたはコンタクトの `Prospect Share Status` が `Sending to Partner`、`Accepted`、または `Pending` の場合、Marketo はそれらをすべての GitLab マーケティング送付から抑制します (運用メールは引き続き送信されます)。

リードが MDF または Trial キャンペーンからパートナー経由で入ってきた場合、Marketo で `Marketing Suspended` とマークされ、理由は `Partner Lead` となります。この停止フラグが解除されるまでメール送信不可となります。

ある人が GitLab メールからオプトアウトしても、パートナー通信からはオプトアウトされず、その逆も同様です。メールリストを管理するのはパートナーの責任です。

### 新規メールテンプレートのリクエスト、作成、承認

このセクションは現在プロセス開発中のため作成中です。

### メールバウンス頻度の監視

バウンスメールを減らし、IP を保護する方法として、[Directory of Leads Bouncing Emails](https://engage-ab.marketo.com/?munchkinId=194-VVC-221#/classic/PG13085A1) という Marketo プログラムが作成されました。一連のトリガーを使用して、プログラムはソフトバウンスとハードバウンスのメール履歴を記録し、そのデータをリードに付加します。リードはプログラムとそのスタティックリスト内に集められますが、最終的にリードにメールが配信されると [Active Bounce List](https://engage-ab.marketo.com/?munchkinId=194-VVC-221#/classic/ST25117A1LA1) スタティックリストから自動的に削除されます。`Bounce Details` リストはリードに関連する全バウンスデータを収集し、`Successful Records` は `Active` スタティックリストから削除されたリードを追跡します。このプログラムについて注意すべき点:

- Marketo の制限により、MktgOps チームの Awareness & Conideration ウィングにメールを送るよう設定されている [Bounce Spike Alert](https://engage-ab.marketo.com/?munchkinId=194-VVC-221#/classic/SC33241A1ZN19) は、チームの成長や脱退に応じて時折更新する必要があります。このアラートをすべての Marketo 管理者に送信する方法はないため、代わりに個別のメールアドレスにメールを送信するように設定されています。
- また Marketo の制限により、[Bounce Details](https://engage-ab.marketo.com/?munchkinId=194-VVC-221#/classic/SL53109072A1LA1) と [Successful Resends](https://engage-ab.marketo.com/?munchkinId=194-VVC-221#/classic/SL53109462A1LA1) スマートリストを利用するには、各 Marketo ユーザーが意図したスマートリストビューを作成する必要があります。個人のリストビューは他の Marketo ユーザー間で共有できないためです。ビューは次のカラムで構成されます: `Email`、`Email Invalid`、`Email Bounce Category`、`Email Bounce Subject Lane`、`Email Bounce Details`、`Email Bounce Date_mkto`、`Email Bounces`、`Delivers After Bounces`、および `Email Delivered After Bounce`。
