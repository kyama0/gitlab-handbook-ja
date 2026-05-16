---
title: "Sales 内での Gainsight の使用"
description: "Sales が顧客の成功を促進するために Gainsight を使用する方法の重要な側面。"
upstream_path: /handbook/sales/gainsight/account-planning/
upstream_sha: 1e195b58b9f249ff10bd0e705106c320fee86141
translated_at: "2026-05-11T10:00:00Z"
translator: claude
stale: false
lastmod: "2025-01-04T01:51:25+00:00"
---

*Gainsight の概要、およびログイン方法に関する情報については、[Gainsight 概要ページ](/handbook/sales/gainsight/)を参照してください。*

### Salesforce 内の Gainsight

Gainsight にアクセスする方法はいくつかあります。1 つ目は、Okta から Gainsight にアクセスする方法です。2 つ目と 3 つ目のオプションでは、SalesForce にログインする必要があります。Salesforce にログインしたら、Account または Opportunity ページに移動し、Gainsight ウィジェットまでスクロールダウンします。Customer 360 ページがデフォルトビューであり、ハイレベルなアカウントデータと Account Planning に固有のナビゲーションタブを表示するようにカスタマイズされています。もう 1 つのオプションは、Salesforce の青いナビゲーションバーで + 記号を選択し、ドロップダウンメニューから Gainsight NXT を選択する方法です。多くの担当者は、単一のペインでアカウントプラン全体をより多く確認できるため、このビューを好んでいます。

### Account Plan の作成

1. Gainsight ウィジェットから、上部のナビゲーションバーを使用して **Success Plan タブ**を選択します。
1. 右隅で **New Success Plan** を選択します。
1. Land または Expand と年を示す success plan に名前を付けます。
1. **Type** は Account Planning となります。
1. 期日を追加します。アカウントの更新日が良い出発点ですが、これは計画の進化に伴って変化します。
1. ページの右側のグレーバーにある省略記号メニューを使用して、Account Plan にテンプレートを追加します。[Land Plan](/handbook/sales/account-planning/#land-account-plans) と [Expand Plan](/handbook/sales/account-planning/#expand-account-plans) のテンプレートは、ガイド付きのアクションアイテムと次のステップを提供します。
1. 他のプランタイプ（Opportunity Plan、Command Plan、Success Plan）について学ぶには、[このページ](/handbook/sales/account-planning/#what-is-the-difference-between-an-account-plan-and-a-success-plan)を確認してください。

### 既存の Account Plan の検索

1. Gainsight ウィジェットから、上部のナビゲーションバーを使用して **Success Plan タブ**を選択します。
1. ウィジェットの上部付近のグレーバーで、**More Plans の矢印**を使用して既存の plan を表示します。

### Account Plan 情報

1. Account Plan のデフォルトビューは Plan Info セクションになります。
1. Plan Info は Customer Profile、Execution Plan、Go-To-Market Plan で構成されています。
1. 各テキストボックスの右側にある鉛筆アイコンを使用して、Plan Info にコンテンツを追加または編集します。
1. 個々のコンポーネントの背後にある方法論の詳細については、[ここをクリックしてください](/handbook/sales/account-planning/#account-profile)。

#### Customer Profile

アカウントプランのこのセクションは、関連する顧客情報をすべてキャプチャするためのものです。

| フィールド名         | フィールド説明                                                                                                                                                                                                                                         |
|--------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Name               | Salesforce から取得                                                                                                                                                                                                                                    |
| Account Rank       | Salesforce から取得                                                                                                                                                                                                                                    |
| Account Rank Notes | Google Doc をリンクするか、アカウントがランク付けされた理由を詳細に説明するコンテキストを追加します。Rank 1 アカウントから始めるべきです。                                                                                                                     |
| Business Overview  | 組織の概要、および誰かが組織について知っておく必要がある関連情報。これには、主要な製品とサービス、主要な顧客のビジネス優先事項、または財務上の課題などの情報が含まれる場合があります。 |
| Industry Trends    | 顧客の業界で何か起こっていますか？顧客の組織に影響を与える新しい技術や変化はありますか？                                                                                                                                                                   |

#### Account Snapshot

アカウントプランのこのセクションは、顧客と GitLab とのエンゲージメントに関する関連情報をキャプチャするためのものです。

| フィールド名                      | フィールド説明                                                                                                                                                                                                                            |
|---------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Account Summary and History     | アカウントで現在何が起こっているか、およびアカウントに影響を与える可能性のある関連事項についての関連情報。例: 組織に新しい CTO がいる、または組織が新しいクラウド戦略を決定している。 |
| Current Entitled Solutions      | 現在のサブスクリプション、採用率、および利用可能な場合は製品使用データに関する情報。                                                                                                                                                                            |
| IT/ Digital Strategy            | 顧客はデジタル変革の旅のどこにいますか？今後 3、6、12 ヶ月の戦略は何ですか？                                                                                                                                                       |
| Strategic Partnerships          | 顧客と関わっているパートナー（例: 彼らのクラウドプロバイダー）およびこのアカウントに関与しているパートナーに関する情報。                                                                                                                                |
| Goals/ Strategies/ Objectives   | 顧客の悩みと、望ましいポジティブなビジネス成果に関する情報。                                                                                                                                                                                              |
| Customer High Level Initiatives | 顧客は何に取り組んでいますか？私たちが認識すべき重要なイニシアチブはありますか？                                                                                                                                                                  |

#### Go-to-Market Plan

アカウントプランのこのセクションは、顧客の成功を促進するための私たちの計画に関する関連情報をキャプチャするためのものです。

| フィールド名                                    | フィールド説明                                                                                                                                                                                                                                        |
|-----------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Overall Account Plan Goals (6, 12, 18 months) | 今後 6 ヶ月の顧客に対するあなたのビジョンは何ですか？12、18 ヶ月についてはどうですか？顧客は来年のビジョン/戦略をあなたと共有しましたか？                                                                     |
| GitLab Initiatives                            | 顧客に影響を与える可能性のある関連する社内イニシアチブに関する情報。例: 差し迫った価格変更や、GitLab Ultimate に関するインセンティブはありますか？                                                               |
| Threats/ Risks                                | 顧客のビジネス、彼らの GitLab 採用の健全性、またはアカウント内での拡張計画に対する脅威を認識していますか？例: 彼らは規模を縮小していますか？Microsoft は彼らの CI ビジネスに対して強い動きを見せていますか？ |
| Action Plan                                   | 今後 6、12、18 ヶ月のあなたのビジョンに基づいて、どのようにそこに到達する予定ですか？あなた自身、SDR、SA、CSM の役割を考慮しましたか？                                                                |

### Relationship and Influence Mapping

1. Gainsight ウィジェットから、上部のナビゲーションバーを使用して **Contacts タブ**を選択します。
1. ドラッグアンドドロップ機能を使用してマップにコンタクトを追加するか、ウィジェットの右側にある Add Person ボタンを使用します。
1. コンタクトカード内をダブルクリックするか、省略記号メニューを使用して、コンタクトカードに詳細（Influence、GitLab Role、Manager）を追加します。
1. マップの構築に関する [Gainsight からのこの記事](https://support.gainsight.com/gainsight_nxt/07360/User_Guides/Build_People_Maps) と [このイネーブルメント](/handbook/sales/account-planning/#relationship-and-influence-mapping)ページをご覧ください。

### Whitespace Mapping

このアクティビティは、チームとして行うのが最適です。Solutions Architect と Customer Success Manager は、このセクションがアカウント内の機会についてのチームの理解を反映していることを保証する手助けができます。

1. Gainsight には、whitespace mapping のための 2 つの異なるセクションがあります。Whitespace (Use Case) と Whitespace (Use Case Visual) です。
      - **Whitespace (Use Case):** ここがデータを入力する場所です。Salesforce にフローバックされますが、現時点では Salesforce で編集できません。
      - **Whitespace (Use Case Visual):** データが入力された後、このタブを使用してデータの視覚的表現を確認します。選択できる複数のビューがあります。
1. 方法論の詳細については、この [Whitespace Mapping ページ](/handbook/sales/account-planning/#white-space-mapping) を参照してください。

各ユースケースについて、顧客が各ユースケースに整合する競合技術を使用しているかどうか（Gainsight にピックリストがあります）、置き換えへの意欲があるかどうか（緑色は変化への意欲があることを示します）、そしてその契約がいつ終了するかを理解することを目指してください。

### Company Intelligence

Company Intelligence は、ユーザーが主要な顧客や見込み顧客の最新情報を入手できるようにするもので、Company Intelligence タブにあります。Company Intelligence は通知でも利用可能です。通知をオンにするには、次の手順に従います:

1. Gainsight の右上隅にあるベルアイコンを使用して、ギアアイコンを選択します。
1. Events ドロップダウンメニューを選択します
1. Company Intelligence の隣で、通知の設定を選択します。現在唯一のオプションは Slack で、更新は Gainsight Sally アプリ経由で届きます。
   - ボーナス: Slack 通知をオプトインしたら、[追加のリアルタイム更新を要求できます](https://support.gainsight.com/gainsight_nxt/Sally_AI_Bot/Sally_for_Slack/About/Sally_-_The_Gainsight_Bot_Overview)。Slack に行き、「Gainsight Sally」にダイレクトメッセージを送信します。所有しているアカウントの概要を求めます。

- [通知の設定](https://support.gainsight.com/gainsight_nxt/Company_Intelligence/FAQs/Company_Intelligence_FAQs)。
- [Company Intelligence FAQs](https://support.gainsight.com/gainsight_nxt/Company_Intelligence/FAQs/Company_Intelligence_FAQs)。
- [Company Intelligence、長いバージョン](https://support.gainsight.com/gainsight_nxt/Company_Intelligence/About/Company_Intelligence_Overview_Old)。

*注: 一度にトラッキングできるのは 5,000 アカウントのみです。アカウントをトラッキングに追加するには、[Sales Ops プロジェクト](https://gitlab.com/gitlab-com/sales-team/field-operations/sales-operations/-/issues)で Issue を提出し、General Request テンプレートを選択してください。*

### Sponsor Tracking

1. Gainsight ウィジェットから、上部のナビゲーションバーを使用して **Sponsor Tracking** タブを選択します。
1. **+Sponsor** をクリックして、リストからコンタクトを選択するか、検索機能を使用して新しいコンタクトを追加します。
1. アクション列でリンクをクリックし、トラッキングを開始するために LinkedIn URL を入力します。
1. Private、Premium LinkedIn プロファイルは現時点（2021 年 5 月）ではトラッキングできません。
      - 特殊文字を含むプロファイルは、Gainsight Customer Support にリクエストを提出しない限りトラッキングできません。
1. Sponsor Tracking がどのように機能するかの詳細については、Gainsight からの[この記事を読んでください](https://support.gainsight.com/gainsight_nxt/07360/User_Guides/Sponsor_Tracking_Overview)。

### 利用可能なコース

- [Account Planning in Gainsight: The Account Snapshot](https://gitlab.edcast.com/pathways/ECL-5c4a6b55-f0cc-4a15-b445-6b46b2824a1f)
- [Account Planning in Gainsight: Relationship/ Influence Mapping](https://gitlab.edcast.com/insights/ECL-6f45dc9d-d9f8-4d9c-be2d-3a13f6bbe148)
- [Account Planning in Gainsight: Whitespace Mapping](https://gitlab.edcast.com/insights/ECL-15299b51-9d03-4a43-ac47-1a8ffd544c2d)
- [Account Planning in Gainsight: The Action Plan](https://gitlab.edcast.com/insights/ECL-972e933a-3768-4f4a-8784-ed1ba62dbf2d#)

### ビデオイネーブルメント

- [Gainsight Kickoff and Demo](https://www.youtube.com/watch?v=Xhor2IIsCQQ)
- [How a Gainsight Rep Uses Gainsight](https://youtu.be/lnEkbLnxs-8)
- [Getting Started with Gainsight](https://www.loom.com/embed/3bc8692532e94a37ba693c14e36d1d8a)
- [Completing the Account Snapshot in Gainsight](https://www.loom.com/embed/09f6d86b58f042da860185fe947814c9)
- [Whitespace Mapping with Gainsight](https://www.loom.com/embed/1da3c252c8f34e74a145cf964e4fb29e)
- [Whitespace Mapping Visuals with Gainsight](https://www.loom.com/embed/3463bbf34da64343821df1b0c7f302eb)
- [Relationship and Influence Mapping with Gainsight](https://www.loom.com/embed/1d5cfe4374bc40d2b2dddd0dee43a387)
- [Relationship and Influene Multi-Maps with Gainsight](https://www.loom.com/embed/3e04070f7f9a47babb5b5cb6a3838741)
- [Creating the Action Plan with Gainsight](https://www.loom.com/embed/6ce45c18843743b88ec7554863792266)
