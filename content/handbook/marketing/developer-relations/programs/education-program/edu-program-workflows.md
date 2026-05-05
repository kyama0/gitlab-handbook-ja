---
title: "GitLab for Education プログラムのワークフロー"
description: "GitLab for Education プログラム特有のワークフローに関する詳細"
aliases:
  - /handbook/marketing/developer-relations/strategy-programs/education-program/edu-program-workflows/
upstream_path: /handbook/marketing/developer-relations/programs/education-program/edu-program-workflows/
upstream_sha: 12455b65f7f70cf1c18488a44bbab3cff0097c8a
translated_at: "2026-05-01T00:00:00Z"
translator: claude
stale: false
---

## 概要

このページでは、[GitLab for Education プログラム](/handbook/marketing/developer-relations/programs/education-program/)を通じて GitLab Ultimate ライセンスを無償で発行する際の、プログラム特有のワークフローについて詳述します。
プログラムメンバーは [GitLab Customers Portal](https://customers.gitlab.com/subscriptions/community_program/coupons/new?program=EDU) から直接申請し、サードパーティの [Proxi.id](https://proxi.id/) を介して検証されます。
検証が成功したユーザーは、`education@gitlab.com` から送信されるメールを受け取り、クーポンコードとサブスクリプションをクレームするための手順が記載されています。

## 申請ワークフロー

ユーザーは [GitLab Customers Portal](https://customers.gitlab.com/subscriptions/community_program/coupons/new?program=EDU) でログインまたは登録して申請プロセスを開始する必要があります。

GitLab Customers Portal は、プログラムメンバーが Proxi.id での検証を開始しようとするたびに、固有のトラッキング ID を作成します。
Proxi.id にはトラッキング ID のみが送信され、Customers Portal から他の PII（個人を識別する情報）は交換されません。

### Proxi.id 検証ワークフロー

Proxi.id は、アカデミック機関でユーザーの身元を検証するためのいくつかの方法を提供しています。

1. シングルサインオン（ユーザーは所属機関の SSO にログインして自動的に検証できます）
1. メールドメインチェック（ユーザーは所属機関のメールアドレスを入力し、リンクで確認できます）
    * 所属機関が学生と教員で同じドメインを共有している場合は、雇用証明の追加提出が必要です
1. 適格性証明の提出（ユーザーはフォームに記入し、所属機関での雇用を証明する書類をアップロードできます）

上記 3 つの自動検証で申請者がうまく検証できない場合、Proxi.id チームが申請者に手動レビューを提供します。

Proxi.id は、ユーザーが適格性証明フォーム送信時に提供したメールアドレス宛にメッセージを送信し、追加の書類のアップロードを依頼します。
Proxi.id は、追加サポートが必要な場合は `education@gitlab.com` を通じて GitLab Education プログラムチームに問い合わせるよう、ユーザーに案内します。

### 検証ステータスの確認

GitLab チームメンバーは、Customers Portal の [Proxi.id Verifications ページ](https://customers.gitlab.com/admin/community_program~proxy_id_verification)から、申請者の検証成否を確認できます。
"succeeded" ステータスは Proxi.id が webhook を返して Customers Portal に確認したことを示し、Customers Portal は自動的に申請者にクーポンコードと手順をメール送信します。
"initialized" ステータスは、ユーザーが検証プロセスを開始したものの、何かを送信したかどうかが不明な状態を示します。
"rejected" ステータスは、ユーザーの提出が却下されたことを示します。"Feedback" 列には却下理由が記載されており、対象外の学生からの申請、または機関がプログラムの基準を満たさないことのいずれかとなります。

GitLab チームメンバーは、ユーザートラッキング ID を添えて gitlab-support@proxi.id にメールすることで、現在のステータスについて Proxi.id チームにフォローアップできます。

### Proxi.id バイパスコード

GitLab チームメンバーは、SSO/メールチェックの代わりに使用できるバイパスコードを Proxi.id チームに依頼するため、gitlab-support@proxi.id にメールすることができます。
バイパスコードは 7 日間有効で、Proxi.id UI に送信するための特別なメールアドレスと検証コードが含まれています。

### 手動コード

GitLab for Education プログラムチームは、[内部クーポンコードスプレッドシート](https://docs.google.com/spreadsheets/d/1kORpssdu28RS1GIeE5C-LVzrrKC1iLwEoC3x0_2OnwU/edit?usp=sharing)で利用可能なコードを使い、メンバーに対して GitLab Ultimate のクーポンコードを直接、裁量で提供することもできます。

## サポートキューワークフロー

このセクションでは、Education プログラムのサポートキューを担当するチームメンバー向けのワークフローについて説明します。

### サポートキューの概要

プログラムメンバーが申請または更新プロセス中に問題に遭遇した場合、`education@gitlab.com` にメールを送信します。各メールは [Education プログラムサポートプロジェクト](https://gitlab.com/gitlab-com/marketing/developer-relations/strategy-programs/education-program/education-program-support/-/issues/?sort=created_date&state=opened&first_page_size=100)に Issue を自動的に作成します。

チームメンバーは、サポートチケットの監視とトリアージのために [GLQL ダッシュボード](https://gitlab.com/gitlab-com/marketing/developer-relations/meta/-/issues/61) を使用します。ダッシュボードには次のものが表示されます:

* 新規 Issue
* 返信検知（プログラムメンバーが返信した Issue）
* ラベル欠落 / 進行中 Issue
* 営業支援 Issue

### ラベル

Education サポートプロジェクトでは、次のラベルが使用されます:

| ラベル | 説明 |
|-------|-------------|
| `EDU Program Support::Intake` | トリアージが必要な新規 Issue（Programs チームが返信すると自動的に削除されます） |
| `updated` | プログラムメンバーが返信した Issue（Programs チームが返信すると自動的に削除されます） |
| `EDU Program Support::Sales` | Sales チームの支援を待っている Issue |

### コメントテンプレート

アクティブなコメントテンプレートは [Education プログラムサポートプロジェクト](https://gitlab.com/gitlab-com/marketing/developer-relations/strategy-programs/education-program/education-program-support/-/comment_templates) にあります。

### 検証フロー

サポートリクエストを処理する際は、必ず以下の検証ステップを完了してください:

1. [customers.gitlab.com/admin/customer](https://customers.gitlab.com/admin/customer) で顧客のメールアドレスを使って確認:
   * 名前（first/last）
   * GitLab グループ（参照しているネームスペースを確認するため）
   * Zuora サブスクリプション（サブスクリプションタイプ、プラン、終了日、所有シートを確認）
1. 顧客が検証プロセスでスタックしていると報告した場合は、次を確認:
   * Customers Portal の [Proxi.id Verifications ページ](https://customers.gitlab.com/admin/community_program~proxy_id_verification)（ステータスは "initialized" または "succeeded" として表示されます）
   * 申請のステータスを確認するためにトラッキング ID を添えて Proxi.id サポートチームに連絡

### 更新および申請のフロー

多くの顧客は、詳細を提供することなく、自分の状況についてチームに完全なコンテキストがあると思い込んでいます。すべての顧客を、プログラムルールへの準拠の確認が必要な新規申請者として扱ってください。さらに、2025 年中に更新プロセスに変更があり、新規・更新を問わずプログラムへのすべての申請が同じプロセスを経るようになり、バウチャーコードは発行されなくなりました。一部の既存プログラムメンバーには、この変更を改めてお伝えする必要があるかもしれません。

顧客がサポートに連絡してきたら、まず自動申請プロセスへ案内します:

> Hello [name],
>
> Thank you for your email and description of your situation. Could you please try to go through our automated process of application/renewal here - https://about.gitlab.com/solutions/education/join/?
>
> To do that you will need simply to fill the Application form and our system will send you renewal/application code for your subscription.
>
> In case if you encounter any issues during this process please let me know and I will help you with manual application/renewal.
>
> Best regards.

注意: 多くの顧客は、更新プロセスが [about.gitlab.com/solutions/education/join/](https://about.gitlab.com/solutions/education/join/) で同じ申請フォームを使用していることを知らないことが多いです（更新リマインダーメールにはそのことが記載されていますが）。

### 手動更新ワークフロー

顧客が自動プロセスを完了できない場合、適格性を確認するために追加情報を要求します:

> Hello,
>
> I am sorry to hear that you encountered these issues during the renewal/application process. To proceed with manual application I will need to ensure that you are compliant with program rules. To do that could you please provide me the following information:
>
> 1. Link to official website / description of your institution
> 1. Description of how you currently use/intend to use GitLab
> 1. Who you will be teaching and their age?
> 1. (optional) Confirmation that you are a teacher/staff member of this institution (ID or any other valid proof)
>
> Thank you in advance!

#### 想定用途の確認

場合によっては、顧客がプログラムが要求する教育目的で GitLab を使用するつもりかどうかが明確でないことがあります。プログラム目標との整合性を確認するため、現在 GitLab をどう使っているか、または使う予定かを説明するよう顧客にお願いしてください。

### 更新コードの提供

顧客が必要な情報をすべて提供し、適格性が確認できた場合:

1. **Education program approval code** というコメントテンプレートを使用
1. [更新コードスプレッドシート](https://docs.google.com/spreadsheets/d/1kORpssdu28RS1GIeE5C-LVzrrKC1iLwEoC3x0_2OnwU/edit)（EDU タブ）から更新コードを取得
1. スプレッドシートからコードを使用する際は:
   * コードをコピーする前に、まず "Dispatched" 列に "Yes" をマーク
   * "Who?" 列に、機関に関する情報（名前または Web サイトへのリンク）を提供
   * "Support Ticket link" 列に Issue へのリンクを提供
   * 必要に応じてメモを追加

### シートの追加

これは一般的なリクエストです。**Any program ask for additional seats** というコメントテンプレートを使用します。伝えるべき主なポイント:

* 顧客は、登録済みのシート数を超えても、ネームスペースに追加のユーザーを追加できます
* 追加シートの請求に関する自動メッセージは、プログラムメンバーであれば無視して構いません
* 更新時には、申請フォームに記入する際にシート数を更新する必要があります

### 複数の GitLab サブスクリプション

プログラムメンバーが、GitLab のインスタンスを複数実行できるよう、複数のサブスクリプションを依頼することがあります。これは異例で、Developer Relations Programs チームの承認が必要です。プログラムメンバーから明確な根拠を提示してもらい、`#developer-relations-programs` Slack チャンネルで承認について議論する必要があります。これを許可すると決定した場合、2 つ目のインスタンスのプロビジョニングには手動プロセスが必要です。メンバーは Customer アカウントポータルから 2 つ目のインスタンスを追加または更新することはできません。このページの手動コードまたは更新コードのプロセスを使い、メンバーが 2 つ目のサブスクリプションを設定できるようにしてください。返信には "Manual Voucher Code" メッセージテンプレートを使用してください。

### よくある問題への対応

#### 学生がプログラムに申請する場合

学生がプログラムに申請する場合、利用可能なオプションを説明します:

1. 教員や大学スタッフに、機関を代表してプログラムに申請するよう依頼する
1. [GitLab Contributors プログラム](https://contributors.gitlab.com/)に参加する
1. オープンソースプロジェクトを開始し、[GitLab for Open Source プログラム](https://about.gitlab.com/solutions/open-source/)に申請する

このタイプの問い合わせには "Student Application Response" コメントテンプレートを使用して返信します。

#### 誤ったライセンスタイプの選択

更新時に、顧客が SaaS の代わりに Self-managed を選んでしまうことがあります（その逆も）。その場合は:

1. 顧客が Education プログラムの一員であることを確認
1. 最近（過去 1 週間 / 1 か月以内）に更新したことを確認
1. SaaS ライセンスの場合、K-12 機関でないことを確認（K-12 機関は Self-managed のみ利用可能）
1. 正しいライセンスタイプの新しいコードを提供

#### 検証システムによって承認されない

適格な顧客が Proxi.id で承認されない場合:

1. ステータスを [Proxi.id Verifications ページ](https://customers.gitlab.com/admin/community_program~proxy_id_verification) で確認
1. 必要に応じてトラッキング ID を添えて gitlab-support@proxi.id に連絡
1. Proxi.id を通じた検証が完了できない場合は、手動検証に進み、コードを直接提供

#### オーナーシップの確認

アカウントオーナー以外の人がリクエストを送信してきた場合:

1. アカウントオーナーシップの確認をリクエスト
1. 自分がオーナーであることを示すネームスペースのスクリーンショットを依頼
1. システムでメールが見つからない場合は、GitLab アカウントオーナーのメールを依頼

#### オーナーシップの移行

メンバーが他の人にアカウントのオーナーシップを移行する必要がある場合、[GitLab Customers ポータル](https://customers.gitlab.com/) から、[プロファイルオーナー情報の変更手順](https://docs.gitlab.com/subscriptions/billing_account/#change-profile-owner-information)に従ってこれを行うことができます。

このタイプの問い合わせには "Change of account ownership" コメントテンプレートを使用して返信できます。

### アップセルとアドオンのワークフロー

<!-- vale off -->
<!-- Upsell is a valid business term -->

各更新コードのメールでは、Duo などのアドオンを推奨しています。顧客が興味を示した場合:

1. `#developer-relations-programs` で Slack スレッドを開始し、次の内容を含めます:
   * 機会の概要
   * 顧客の連絡先情報
   * サポート Issue リンク
   * SFDC リンク
1. 顧客アカウントを担当する Account Executive と Business Development Representative にメンションする

### エスカレーションワークフロー

非標準ケースや進め方が不明な場合は、`#developer-relations-eng-and-programs-confidential` Slack チャンネルに連絡してください。次の情報を提供します:

* ケースの概要（簡潔な要約）
* サポート Issue へのリンク
* 顧客データベース内の顧客へのリンク
* その他の関連情報（メール、ネームスペースへのリンクなど）

### 非営利プログラムメンバーへの対応

時折、非営利プログラムメンバーが更新のために Education チームに連絡してくることがあります（Education と Nonprofit プログラムは同じ SKU を使用しています）。この場合は:

1. [GitLab for Nonprofits プログラム](https://about.gitlab.com/solutions/nonprofit/)に顧客を案内する
1. Nonprofit チームは申請を 2 営業週以内にレビューすることを説明する

このタイプの問い合わせには "Nonprofit Submission Response" コメントテンプレートを使用して返信します。

### 関連のない問い合わせへの対応

プログラムに関連しないリクエスト（イベント、資金援助の依頼など）については、上記のエスカレーションワークフローに従ってください。

スパムについては、内部コメントでスパムと記録し、チケットをクローズしてください。

### 転送されたリクエストへの対応

チームは GitLab Service Desk を使用して、受信したサポート Issue を効果的に管理しています。GitLab Support がスレッドに顧客を含めずに、顧客のリクエストを直接転送することがあります。その場合は:

* 可能であれば、顧客のメールで質問に回答
* 顧客が更新で支援を必要としている場合、メールを転送した人に、顧客に直接 `education@gitlab.com` にメッセージを書くよう依頼するよう求める

転送者への返信例:

> Hello,
>
> Since the team uses the GitLab Service Desk to manage support issues, unfortunately I cannot write to customers directly. Could you please ask them to write to education@gitlab.com and the team will help resolve issues with renewal. Currently there is no request from them in our system.
>
> Best regards.
