---
title: "コールトゥアクション（CTA）"
description: "アカウント管理、顧客ニーズへの対応、次のアクションの計画を支援するために、コールトゥアクション（CTA）をGainsightで使用するためのガイド。"
upstream_path: /handbook/customer-success/csm/gainsight/ctas/
upstream_sha: b4eeb07f0d5f46e2fc5f8572be1a2547261aed89
translated_at: "2026-04-26T01:01:39Z"
translator: claude
stale: false
lastmod: "2025-01-04T01:51:25+00:00"
---

[CTA](https://support.gainsight.com/gainsight_nxt/04Cockpit_and_Playbooks/Cockpit_Version_-_Archived/About/Archived_CTAs%2C_Tasks%2C_and_Playbooks_Overview)（コールトゥアクション）は、顧客に紐付いたアクションで、CSMのコックピットおよびアカウントコックピットに表示されます。CTAはいつでも手動で作成できますが、特定のイベントやデータに基づいて自動的に作成されるものもあります。

新しいCTAを作成するには、コックピットに移動して「+ CTA」をクリックし、適切な情報を入力します。CTAが一定期間にわたる複数のタスクで構成される場合は、保存後にCTAをクリックし、新しい右サイドバーの右上にある3点ドットをクリックして「Add Task」をクリックします。必要な数だけタスクを追加でき、マイルストーンセクションで進捗を追跡できます。

[Gainsight CTAの動画](https://www.youtube.com/watch?v=qkjmTh3Qad4&feature=youtu.be)を視聴して、使い方、ベストプラクティス、コツを学んでください。

### コックピット

コックピットは、CTAを管理するメインの場所で、いくつかの方法から開くことができます。顧客のライフサイクルのトリガーポイントによって自動的に開かれる場合、CSMが手動で開く場合、またはCSMが[タイムライン](/handbook/customer-success/csm/gainsight/timeline/)イベントにタスクをログ記録した場合にコックピットに表示されます。

メインコックピットは、左端のナビゲーションパネル（「Home」の下）にある「Cockpit」をクリックすると、すべての顧客のすべてのCTAが表示されます（カスタマイズと絞り込みが可能。詳細は後述）。

各顧客ごとに個別のC360コックピットもあり、Customer 360に移動して左サイドバーの「Cockpit」をクリックすることでアクセスできます。なお、C360コックピットにはサクセスプランの目標が含まれていませんが、メインコックピット画面には含まれています。

コックピットはニーズに合わせてカスタマイズでき、最も役立つデータとワークフローを表示できます。

1. 左端のナビゲーションパネル（「Home」の下）で「Cockpit」をクリックして、すべての顧客のすべてのCTAを表示します
1. 画面右上（「Cockpit」の下）で、通常は「My CTAs」というダッシュボードを参照することをお勧めします。これは自分に割り当てられているすべてのCTAの包括的な概要です（ただし、リストから別のデフォルトビューを選択したり、さらにカスタマイズしたオプションで独自のビューを作成したりすることもできます）
1. 検索フィールドの横にある右上の「Due Date」ドロップダウンボタンをクリックして、必要に応じてCTAのグループ分けを変更します（Type、Company、Renewal Dateなどでグループ分けできます）
1. 列名の右側にある「+」ボタンをクリックすると、列リストに追加できるすべてのフィールドの一覧が表示されます
1. 表示したい追加フィールドを検索して追加します（デフォルトでは含まれていない一般的な列として「Next Task Due Date」があります）
1. 「Apply」をクリックして変更をビューに保存します（異なる列フィールドをテストするために何度でも実行できます）

デフォルト以外のカスタマイズされたCTAビューを作成して保存するには、右上のフィルターボタンを使用します。後でこれらのビューには左上のドロップダウンでアクセスできます。

コックピットをニーズに合わせてカスタマイズしたら、列名（例えば「Due Date」）をクリックして列フィールドで行を並べ替えることもできます。

コックピットビューに加えたカスタマイズは、メインコックピットと個別のC360コックピットで一貫して反映されます。

### CTAの種類

CTAには複数の「タイプ」があり、それぞれ対応するプレイブックが異なります。特定のプレイブックを探している場合は、適切なタイプを選択してください。各タイプとそのタイプに対応する[プレイブック](/handbook/customer-success/playbooks/)を以下に示します。

- リスク
  - [リスクあり](/handbook/customer-success/csm/health-score-triage/#triage-cta)
  - DevSecOpsリスク
  - ライセンス利用率低下
  - 非エンゲージメント顧客
  - 製品リスク
  - リスクエスカレーション
  - Scale NPSデトラクター
- 拡大（関連するプレイブックなし）
- ライフサイクル
  - サクセスプランの作成
  - 顧客オフボーディング
  - [エグゼクティブビジネスレビュー（EBR）](/handbook/customer-success/csm/ebr/#how-to-prepare-an-ebr)
  - 既存顧客のオンボーディング
  - ライセンス利用率高
  - [新規顧客のオンボーディング](/handbook/customer-success/csm/onboarding/)
  - 新規顧客オンボーディング - SaaS Email Assist
  - 新規顧客オンボーディング - Self-Managed Email Assist
  - 使用状況データイネーブルメント
  - 顧客がウェビナーに参加
- アクティビティ
  - [新規アカウント引き継ぎ](/handbook/customer-success/csm/account-handoff/#account-handoff-cta)
- 更新
  - [更新期限が近い](/handbook/customer-success/csm/renewals/)
- デジタルジャーニー
  - デジタル導入 - CIイネーブルメント
  - デジタルオンボーディング - SaaSメールシリーズ
  - デジタルオンボーディング - Self-Managed代替バックアップ戦略
  - デジタルオンボーディング - Self-Managedメールシリーズ
  - デジタルオンボーディング - ウェルカムメール
  - Scale: オンボーディング後21日目 - Calendlyクリック済み
  - Scale: オンボーディング後21日目 - Calendly未クリック
  - Scale: 6ヶ月チェックイン - Calendlyクリック済み
  - Scale: 6ヶ月チェックイン - Calendly未クリック
  - Scale: ライセンス利用率低下 - Calendlyクリック済み
  - Scale: ライセンス利用率低下 - Calendly未クリック
  - Scale: 単発Scale CSMアウトリーチ
  - Scaleチーム: 14日目のリーチアウト
  - CSMアカウント移行

開こうとしているCTAがいずれかのプレイブックカテゴリに当てはまらない場合は、最も適切なタイプを選択してください。よく使われるCTAであれば、[Issueを開いて](https://gitlab.com/gitlab-com/sales-team/field-operations/sales-operations/-/boards/1731118?&label_name[]=gainsight)プレイブックの作成を提案してください。

#### CTAのステータス

CTAのステータスは以下のとおりです。

すべてのCTAで利用可能:

- New - まったく新しいCTA、まだ開始されていない
- Work in progress - CSMが現在取り組んでいるCTA
- Closed Success - このCTAが肯定的な（または意図した）結果で完了した
- Closed Lost: Not a Priority - 顧客がこれを追求すべき主要目標と考えていない
- Closed: Already Solved
- Closed: Not Relevant
- Closed: Lack of Engagement

ライフサイクルCTAのみで利用可能:

- Closed: Not needed

目標CTA（サクセスプラン）のみで利用可能:

- Closed Lost: Competitive Loss - 顧客が追加のユースケース向けソリューションを検討し、別の新規ベンダーを選択した場合のみ。既存のソリューションに負けた場合（価値を見出さなかった場合）は含まれません。
- Closed Lost: Product Gaps - ユースケースと機能・能力を検討した結果、製品にギャップがある、または顧客のユースケースのニーズを製品が満たさないと判断された場合。
- Closed Lost: Responsible Team Unengaged - 能力や採用に必要な権限を持つ別チームが、私たちがエンゲージしているチーム以外にある。その別チームとのエンゲージメントに成功していない場合。
- Closed Lost: Didn't See Value - 顧客が、導入を推進する能力が自分たちの管理範囲内であると仮定しても、投資を正当化するほどの価値を見出さなかった場合。
- Closed Lost: Deferred To Later Date - 顧客が拡大に対して実質的な関心（つまり、コミット、高い関心）を示しているが、別の日程で進めることを希望している場合。この場合、CSMは会話を再び持ち出すためのリマインダーCTAを作成します。
- Closed Lost: Lack of Budget - 新しいステージを完全に使用するにはアップグレードが必要だが、利用可能な予算がない場合。

### CTAのスヌーズ

Gainsightでは、CTAをスヌーズして、CTAをオープンのままにしながら後の日付まではメインコックピットに表示されないようにすることができます（C360コックピットには引き続き表示されます）。

CTAを閉じる代わりにスヌーズする理由:

1. CTAは今この時点では適用できないが、近い将来適用される場合。例えば、アカウントが新たにCSM対象になり、EBRを実施するためのCTAが作成された場合、スヌーズCTA機能を使って日付を3〜6ヶ月先に延期します。
1. 同様のCTAが起動されないようにするため。例えば、CSMセンチメントを更新していない場合にCTAが発生したが、来週カデンスコールの予定がある場合、CTAを1週間スヌーズして、顧客と会う前に別のCTAが発生しないようにできます。

CTAをスヌーズするには、以下の手順に従ってください。

1. CTAを開く
1. 縦3点ドットをクリック
1. `Snooze` をクリック
1. CTAスヌーズの終了日を選択し、スヌーズの理由を選択
1. `Snooze` をクリック

`Snooze Date` または `Snooze Reason` を更新したり、手動でCTAのスヌーズを解除したりするには、CTAに移動して縦3点ドットを再度クリックし、必要に応じて詳細を変更してください。

CTAがスヌーズされると、スヌーズが終了するかスヌーズが解除されるまではメインコックピットに表示されなくなりますが、すべてのCTAを表示するC360コックピットでスヌーズ中のCTAを確認できます。また、右上隅のフィルターアイコンをクリックして `Is Snoozed` フィルターを `true` にすることで、メインコックピットのフィルターを更新してスヌーズ中のCTAを表示することもできます。

追加のスヌーズオプションをリクエストするには、[GainsightのIssueトラッカー](https://gitlab.com/gitlab-com/sales-team/field-operations/customer-success-operations/-/issues/new?issue%5Bassignee_id%5D=&issue%5Bmilestone_id%5D=)でIssueを開いてください。

詳細と図については、[Gainsightのドキュメント](https://support.gainsight.com/gainsight_nxt/04Cockpit_and_Playbooks/Cockpit_Version_-_Archived/User_Guides/Archived_Using_Call_to_Action_(CTA)_and_Task_Detail_Views#How_to_Use_the_Snooze_Option)を参照してください。
