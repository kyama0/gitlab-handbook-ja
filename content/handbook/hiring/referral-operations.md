---
title: "リファレル業務"
description: "このページはリファレルプロセスのバックエンドプロセスに関する情報です。"
upstream_path: /handbook/hiring/referral-operations/
upstream_sha: fe88192cad67a795a237396e552566cb08c118b9
translated_at: "2026-04-29T00:00:00Z"
translator: claude
stale: false
lastmod: "2025-07-30T19:32:27+01:00"
---

このページは[リファレルプロセス](/handbook/hiring/referral-process/)の「バックエンド」に関する情報です。

#### Workday へのリファレルの追加（People Operations チーム）

People Operations は、Workday の一時支払いで正しい金額が支給されていることを確認するために、以下のガイドラインを確認します。

1. 現在のチームメンバーが[要件](/handbook/hiring/referral-process/#referral-bonus-eligibility)に基づいてリファレルの資格があることを確認する。
1. Greenhouse でリファレルが提出された日時を確認する
    - `Job` > `Application Review` > `Applied On YYYY-MMM-DD`
    - **2023-11-20** 時点の現在のリファレルボーナス金額は[こちら](/handbook/total-rewards/incentives/#referral-bonuses)に記載されています。
    - 複数回リファレルされた候補者の場合、リファレル日は候補者が最終的に受け入れたポジションのリファレルが提出された日によって決定されます。

#### Greenhouse へのリファレル提出の転送

現在の[リファレル提出プロセス](/handbook/hiring/referral-process/#how-to-submit-a-referral-in-greenhouse)によれば、チームメンバーは求人が外部に掲載されている場合は Greenhouse を通じてリファレルを提出し、求人が**内部のみ**に公開されている場合は Issue を通じて提出します。新しい Issue が表示されたら、以下を行ってください：

1. Issue を自分に割り当てる（右上角）。
    - *Reruiting Operations & Insights* が適切な *ソーサー* を割り当てる責任があります。
        - 適切な *ソーサー* は求人の **Hiring Team** ページを参照して決定されます。
1. Issue が `Confidential`（機密）としてマークされていることを確認する。
    - *Reruiting Operations & Insights* がこの設定が有効になっていることを確認します。
1. 求人が外部の[ジョブボード](https://job-boards.greenhouse.io/gitlab)に掲載されているかどうかを確認し、掲載されている場合は、*Referrer* に**タグ付け**し、[これらの手順](/handbook/hiring/referral-process/#how-to-submit-a-referral-in-greenhouse)に従って Greenhouse で直接リファレルを提出する必要があることを**コメント**し、Issue を**クローズ**する。
    - *Reruiting Operations & Insights* は求人が内部のみに掲載されていることを確認します。
1. 求人が**内部のみ**に公開されている場合は、Greenhouse ダッシュボードに移動して `+` > `Add a Referral` をクリックする。
1. 以下のフィールドに入力する内容を Issue で参照する：
    - **Job**
        - 特定の求人が**指定されていない**場合は、紹介側のチームメンバーに適切な役割を確認するためのフォローアップをしてください。「一般的な」リファレルは**受け付けていません**。
    - **First Name** - `必須`
    - **Last Name** - `必須`
    - **Email** - `必須`
    - **Social Media** - `必須`
        - 例：LinkedIn
    - **Resume** - *任意*
    - **Relationship** - `必須`
        - *「Relative」* が選択された場合は、どのような関係かを確認し、**Additional Details** タブの `Family Relationship` フィールドに追加してください。
    - **Location** - `必須`
        - **Additional Details** タブの *Location* フィールドに提供された場所を追加する。
    - **Referral's Email** - `必須`
    - **Work History** - *任意*
    - **When We Reach Out** - *任意*
    - **Referral Notes** - *任意*
1. `Add this referral` をクリックして提出する。
1. 候補者のプロフィールに移動し、`Details` タブをクリックして **Source & Responsibility** セクションまでスクロールする。
1. **Source** にカーソルを合わせて `Pencil` アイコンをクリックし、`Who Gets Credit` を *Referrer* の名前で編集して `Update Source` をクリックする。
1. 紹介された候補者にメールを送る。右側の列の `Email REFERRAL_NAME` を選択し、**Default Referral Confirmation Receipt** メールテンプレートを選択する。
    - メールが `no-reply@gitlab` エイリアスから送信されていることを確認する。
    - 紹介したチームメンバーを `CC` フィールドに追加する。
    - `Send Email` をクリックする。
1. Issue でフォローアップし、リファレルが提出されたことを確認し、チームメンバーが Greenhouse ダッシュボードの **My Referrals** セクションでリファレルをフォローできることを言及する。
1. Issue を**クローズ**する。

#### リファレル更新リクエストへの対応方法

インバウンドソーシングチームは #talent-acquisition Slack チャンネルでリファレルに関する質問への対応を担当し、紹介者が紹介した候補者のソースとしてクレジットされることを確認します。

タレントアクイジションチームは GitLab サービスデスクを使用して `referral@gitlab` メールへの受信メールを追跡します。これらのメールは `Issues` として表示されます。

[リファレルサービスデスクプロジェクト](https://gitlab.com/gl-talent-acquisition/operations/)の通知を設定するには、以下を行ってください：

1. 右上角の `Bell` アイコンをクリックする（`Star` と `Clone` の隣）。
1. `Custom Settings` に移動する。
1. `New Issue` をクリックする。
1. ウィンドウを閉じる。

そのプロジェクトの Issue に対してアクションを取るには：

1. 左メニューバーの `Issues` をクリックする。
    - ここには `referral@` の受信メールが表示されます。ここにあるオープンな Issue はすべて対処する必要があります。
1. 新しい `Issue` をクリックする。
1. 自分に割り当てる（右上角）。
1. Issue を読む。
1. 適切なラベルを追加する。
1. 該当する場合は Greenhouse で候補者を検索する。
1. コメントして Issue に返信し、他の GitLab コミュニケーションと同様に行うようにしてください。
    - 例：*「こんにちは、NAME さん。リファレルの状況についてご連絡いただきありがとうございます。[SLA](/handbook/hiring/referral-process/#referral-statuses) に従い、提出を確認するために 5 営業日お待ちください。`@RECRUITER` がこの役割を担当しており、候補者に近日中に更新をお伝えします。」*
    - 例：*「リファレルをありがとうございます。`@RECRUITER` がこの役割を担当しており、近日中に更新をお伝えします。」*
1. 責任のあるリクルーターに更新が求められていることを認識させるために必ず `@-mention` してください。
1. メッセージ全体に対して 1 つのコメントで対処できる場合は、コメントして Issue を**クローズ**する。さらに情報が必要な場合は、コメントして Issue をオープンのままにしておく。
1. リクルーターはコミュニケーションを引き受けると Issue を自分に再割り当てします。適用可能なラベルを追加する場合もあります。
1. コミュニケーションが完了したときに、担当者が Issue を**クローズ**します。

#### リファレルラウンドアップセッション

タレントアクイジションチームは時々*リファレルラウンドアップセッション*を開催します。

これらのセッションの目的は、リファレルを収集し、所在地に関する地域固有の情報を集め、ソーシングと Greenhouse に関連するスキルを教えることです。

各セッションには対応する Issue が連携されており、そこで適切なソーシング先の企業、地元のミートアップグループ、カンファレンス、求人広告を掲載するジョブボード、あなたの地域での採用努力に有益と思われる他の情報を追加していただくようお願いします。

タレントアクイジションチームのメンバーがこれらのセッションに参加し、ソーシング、LinkedIn、Greenhouse に関する質問にお答えします。
