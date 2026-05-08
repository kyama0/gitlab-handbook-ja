---
title: チケットへの対応
category: Handling tickets
description: サポートチケットの探し方、選び方、着手方法
upstream_path: /handbook/support/workflows/working-on-tickets/
upstream_sha: c8fa138220d8c6d69f811b17242d6d2f08e4e409
translated_at: "2026-05-08T05:00:00Z"
translator: claude
stale: false
---

## はじめに

このページは、サポートエンジニア（SE）がサポートチケットを[見つけ](#zendesk-views)、[選び](#selecting-new-tickets)、[対応する](#first-response-and-ongoing-communication)ためのガイドです。

## Zendesk のビュー {#zendesk-views}

サポートエンジニア（SE）向けの Zendesk のデフォルトビューです。

| 名称 | 目的 |
|------|---------|
| [My Assigned Tickets](https://gitlab.zendesk.com/agent/filters/360062369834) | 自分にアサインされており、`Solved` または `Closed` ではないチケット。 |
| The Global Support Ticket View | 未アサインのチケットすべてを表示し、チケット重みでソートしています。すべてのサポートエンジニアが対応する起点となる主要なビューです。 |
| Assigned Support Engineer Tickets | Assigned Support Engineer（ASE）が割り当てられている組織のチケット。 |
| L&R | Licensing & Renewals チケット |
| All FRT and Emergencies | FRT ステージにある `New` チケット。 |
| All NRT | NRT ステージにある New 以外のチケット。 |

## 新規チケットの選択 {#selecting-new-tickets}

以下のワークフローを使用してください。

 チケットの選び方:

- `The Global Support Ticket View` の上から順に対応します。チケットは `Ticket Weight` でソートされており、影響度の高いチケットを優先するようになっています。チケットは FRT および NRT のライフサイクルを進むにつれて追加の重みを獲得するため、まもなく違反となるチケットがビューの下位に留まらないようになっています。全員がキューの先頭から取り組むことを目指せば、SLA 達成能力を支えることができます。
- 自分のリージョンを希望リージョンとするチケットは、自分でアサインを受けて保持してください。
  他のリージョンを希望リージョンとするチケットについては、品質の高い first response を出して対応します。
  その後、[ticket rehome のガイドライン](/handbook/support/workflows/ticket-transfers/#ticket-rehome-transfer-to-the-preferred-region)に従って、顧客が指定した希望リージョンへチケットを移管してください。（注: APAC は希望リージョンが AMER の低優先度チケットについてもアサインを保持してかまいません。）
- このビューでは、アサインのない FRT および NRT のチケットがどちらも表示されます。
  ステータスが `open` または `pending` で、自分のリージョンを希望リージョンとするチケットのアサインを受けることを検討してください。
  これらは、他のリージョンから rehome された当日に希望リージョン内でオーナーが必要となるチケットです。これらのチケットへの対応指針については、本ページの [receiving a ticket rehome](/handbook/support/workflows/ticket-transfers/#receiving-a-ticket-rehome) セクションを参照してください。
- ハンドオーバーチケットについては、open のチケットをまず優先し、その後 pending のチケットに対応します。
- 他のリージョンから rehome されたチケットは、その日のうちにアサインされるようにします。
- 顧客の希望リージョンの選択は、チケット作成から 8 営業時間以内に尊重するか、または問い合わせるようにします。
- 受信したチケットは、リージョン指定にかかわらず、その時間帯の担当チームメンバーが受け取り、自分自身にアサインしてください。First response は、自分のカバレッジ時間内で 100% FRT SLA 達成を目標とし、ストレッチ目標として 70% を超えるチケットに FRT SLA の半分の時間内に応答することを目指します。
- 顧客の連絡先リージョンは、アサインされたエンジニアの 1 日の終わりにのみ考慮し、その時点でアサイン担当者が顧客のインプットに基づき、ハンドオーバーするか保持するかを判断します。

## チケットのアサイン

- 「Take It」ボタンでチケットを自分にアサインし、ステータスを `Open` または `Pending` に更新します。
- ユーザーへの公開応答を送信するまで SLA タイマーは動き続けることに注意してください。
- チケットをアサインするとすぐに、ステータスは New `n` から Open `o` に変わります。FRT ステージにあることが見た目では分かりにくくなる点に注意してください。
- チケットの CC に自分自身を手動で追加しておくと、再アサインされた場合でも追跡できます。
- 各リージョンの業務開始から 2 時間以内に、他のリージョンへチケットをハンドオーバーします。

## チケット負荷の管理

- [My Assigned Tickets](https://gitlab.zendesk.com/agent/filters/360062369834) の `open`、`pending`、`on-hold` チケットを定期的に確認し、バランスの取れた業務量を維持します。
- 日々の需要や個人のキャパシティに応じて調整しつつ、管理可能な数のチケット件数を目指します。
- サポートチケットの SLA/SLO の遵守を目指します。
  - Urgent FRT 30 分、NRT 4 時間
  - High FRT 4 時間、NRT 4 時間
  - Normal FRT 8 時間、NRT 24 時間
  - Low FRT 24 時間、NRT 24 時間

## Zendesk 添付ファイルの管理

Zendesk チケットを扱う際、添付ファイルをノートPCにダウンロードする必要が生じる場合があります。[ノートPCはフルディスク暗号化されています](/handbook/security/corporate/end-user-services/laptop-management/laptop-security/encryption)が、ダウンロードした添付ファイルは [RED データ（顧客データ）](/handbook/security/policies_and_standards/data-classification-standard/#red) を含む可能性があるため、慎重に扱う必要があります。

1. 管理しやすいよう、ダウンロードを専用フォルダに保存します。例: [Zendesk Download Router](https://gitlab.com/gitlab-com/support/toolbox/zd-dl-router) を使用
1. チケットを解決した後はできるだけ早く、ダウンロードした添付ファイルの削除を自動化します
1. 機密情報（トークン、パスワード、認証情報）は特に慎重に扱います。必要に応じて、チケットからも直接[機密情報を除去](../providing_excellent_customer_service.md#removing-information-from-tickets)します

[Zendesk Download Router](https://gitlab.com/gitlab-com/support/toolbox/zd-dl-router) のブラウザー拡張機能を使えば、Zendesk から添付ファイルをダウンロードできます。デフォルトでは、拡張機能はすべての Zendesk 添付ファイルを `~/Downloads/zd-%TICKET_ID%` にダウンロードします。
これはブラウザーがデフォルトのダウンロード先を使用していることを前提としているため、ブラウザーのダウンロード設定をカスタマイズしている場合はパスの調整が必要となる場合があります。

Zendesk Download Router を使用している場合は、`crontab` を使用して自動クリーンアップを設定できます。

1. crontab を編集用に開きます。

   ```shell
   crontab -e
   ```

1. 以下の行を追加します（必要に応じてパスを調整してください）。

   ```shell
   # Automatically delete any Zendesk attachments older than 30 days
   0 12 * * * find ~/Downloads -type d -name "zd-*" -mtime +30 -exec rm -rf {} +
   ```

## First response と継続的なコミュニケーション {#first-response-and-ongoing-communication}

チケットへの対応を開始する際は、顧客のニーズに効果的に対処し、解決プロセスを円滑に進めるため、以下の手順を優先してください。

1. **すぐに対応を開始する:** チケットを引き受けたらすぐに、トラブルシューティングや確認の応答を開始します。
2. **理解を確認する:** First response では、まず顧客の状況、ニーズ、解決すべき問題や質問への自分の理解を確認します。
   不明な点があれば、明確化を依頼するか、詳細を議論する短いミーティングを提案します。
3. **過去のやり取りを確認する:** 関連する問題や有用な背景情報がないか、顧客の最近のチケットを確認します。
   関連する環境の詳細を顧客と確認し、特定のアクションやコミュニケーション手段を指示している可能性のある Zendesk 上の組織ノートを確認します。
4. **優先度を調整する:** チケットの優先度が[サポートインパクトの定義](https://about.gitlab.com/support/#gitlab-support-service-levels)と一致しない場合、`General::Changed priority` マクロを使って顧客と相談し、優先度を調整します。
5. **緊急事態への備え:** チケットがエマージェンシーにエスカレートする可能性がある場合、オンコールのエンジニアにアラートを出します。
6. **時間を有効に管理する:** 詳細な応答が必要な場合や SLA 違反が間近な場合は、まず簡潔な初動応答を送信します。これから取る対応と、顧客が次の更新を期待できる時期を概要として伝えます。顧客のフィードバックに応じてタイムラインを必要に応じて調整します。
7. **ツールを活用する:** チケットを Open に設定し、'Due Date' および 'Reminder' アプリで進捗を管理します。

これらの手順に従うことで、チケット対応への構造化されたアプローチが確保され、時間の節約と顧客満足度の向上につながります。

## レスポンシブ性

- チケットが違反間近の場合は、迅速に顧客に連絡します。
- 他部署からの更新を待っている場合、少なくとも週 1 回は顧客に状況を伝えます。
- 更新の頻度は顧客と合意します。
- 通話は例外ではなく、トラブルシューティングやデータ収集だけでなく、明確化、ガイダンス、安心感の提供にも使用されます。

## チケットの引き上げ（エレベート）

合意された基準に基づき、チケットを引き上げます（Peer/Senior/Pod/開発チームへ Request for Help でアシストを求める）。

- 時間的制約
- スキルレベルの要件
- 顧客の期待への対応

これらの手順に従うことで、チケット対応への構造化されたアプローチが確保され、時間の節約と顧客満足度の向上につながります。

## 内部リクエストへの対応

GitLab チームメンバーが起票したサポートチケットは、Zendesk 上で GitLab 組織配下、ブランド「GitLab - Internal」として表示されます。
これらのチケットは他のチケットと同様に扱ってください。公開応答を提供します。

**重要:** 公開応答を提供しない場合、SLA タイマーは動き続け、違反する可能性があります。

### Zendesk 警告への対応

内部リクエストチケットに対して初めて公開応答を作成しようとすると、Zendesk は以下の警告を表示します。

> This ticket has no public comments, so the requester can't see it. If you add a public comment, they'll start to be notified (but internal notes will stay private). Do you want to add a public comment?

`OK` をクリックして公開応答を続行してください。この警告は無視して問題ありません。

## クローズプロセス

チケットをクローズする際は、以下を行います。

- チケットをクローズする前に、顧客の同意を得るよう努めます。
- チケット解決のために行った手順を記載した **クロージャーサマリー** を提供します。
- チケットを解決する際は適切なクロージャーコードを適用します。
- [Product Category](/handbook/support/workflows/product_category_field.md) フィールドを設定します
- 解決に役立ったナレッジ記事やドキュメントへのリンクをチケットに添付します。
- `GitLab Issues` テキストフィールドに関連する Issue の URL を追加して、RFH Issue、バグ Issue、機能要望にチケットをリンクします。
- 必要に応じて、チケットの解決に基づいたナレッジ記事を作成または更新します。
- 顧客が満足度調査に回答することを促すよう、最終メールに署名を追加します。例: 「私たちにとってお客様のフィードバックは大切です。このチケットがクローズされた後にお送りする満足度調査へのご協力をお願いいたします。」

## カスタマーサクセスやアカウントチームへの連絡

サポートは、アーキテクチャ、プロフェッショナルサービス、サポート連携の議論などの理由でカスタマーサクセスおよび／またはアカウントチームと連携できます。エスカレーションが必要な場合は、指定のワークフローに従ってください。CSM が利用できない場合は、Zendesk で `Account Owner` として識別される AM に連絡します。FY26Q1（2025 年 2 月〜4 月）では、APAC は専任 CSM が割り当てられていない `TAM Scale` 顧客に対して CSE（カスタマーサクセスエンジニア）に連絡するパイロットに参加しています。APAC の場合は以下を参照してください。CSM または AM を関与させるには、以下の方法を使用します。

1. Zendesk: CSM/AM をチケットの CC に追加し、顧客に伝え、コンテキストを内部ノートとして追加します。
2. Slack: 以下のいずれかで CSM/AM に通知します。
   - 既存のチケット議論で言及する。
   - 顧客のチャンネル（#a_customerName-internal）で新規スレッドを開始する。
   - 関連するサポートチャンネル（`#support_leadership`、`#support_gitlab-com`、`#support-self_managed`）にメッセージを投稿する。

### Assigned Support Engineer がいるチケットへの支援

一部の顧客には Assigned Support Engineer（ASE）がいて、その顧客のチケットを所有します。これはチケットの組織ノートから明らかとなります。これらの顧客については、[ASE ワークフロー](../enhanced-support-offerings/offering-assigned-support-engineer/working-with-ases/global-support-and-ases.md)を参照してください。

### シフトエンジニアの週末のフォーカス

GitLab の [Success Signature](https://gitlab.zendesk.com/agent/search/1?copy&type=organization&q=sub_ss_enterprise%3Atrue) および [Success Advanced](https://gitlab.zendesk.com/agent/search/1?copy&type=organization&q=sub_ss_growth%3Atrue) 顧客の高優先度チケットに対するオンコールの責任を理解しておきましょう。

週末は、シフトエンジニアは *Signature および Advanced 顧客の高優先度チケットに対する First Response Time（FRT）の達成* に集中します。

シフト中にカバーすべき責任のリスト（カバー時間は CEOC 時間と同じです）:

1. 高優先度の Signature および Advanced チケットの FRT を達成する
1. オンコールエンジニア（CEOC）の業務量を支援する
1. 違反のリスクがある Signature および Advanced チケットの NRT を達成する
1. 共通の問題と解決策をドキュメント化し、ナレッジベースを構築する
1. 既存チケットに対し内部コメントを追加して Next Response Time（NRT）に対応する（公開返信は不可）

## FAQ

### 毎週どのくらいの数の新規チケットを受け持つべきですか？

毎週、すべてのサポートエンジニアは、自分の役割に当てはまるチケットタイプについて、以下のリストから[適切なベースライン](/handbook/support/support-engineer-responsibilities/#ticket-baseline)を満たす（できれば上回る）first response の数を目指してください。

| チケットタイプ   | アサインチケットの目標   |
| ------------- | ---------- |
| Self-managed  | 5 件  |
| SaaS          | 5 件  |
| SaaS Accounts | 20 件  |
| L&R           | 15 件 |

これらの目標は、自分の役割に該当するチケットタイプについて、毎週最初の実質的な応答を提供すべき新規チケットの平均数を表します。意図は、業務量、エスカレーション、プロジェクト作業に基づく週ごとの変動を許容しつつ、チーム全体でチケットの公平な分配を確保することです。コア L&R および Associate SE 役職を除く中堅およびシニアエンジニアは、Self-managed、SaaS、Dedicated チケットのバランスの取れた組み合わせを一貫して取り組むことで、バランスの取れた貢献者として育成することが期待されます。
これらのアサインチケットベースラインは、サポートエンジニアにとって 2 つの主要なチケット関連ベースラインの 1 つです。もう 1 つは、チケットタイプ別の目標を持つ Median Time to Resolve（TTR/MTTR）です:

- Median TTR – Self-Managed: 目標 141 時間
- Median TTR – SaaS: 目標 76 時間
- Median TTR – SaaS Account: 目標 25 時間
- Median TTR – L&R: 目標 7 時間

これらの期待値は、全体のチケットボリューム、チームサイズ、平均 PTO 率 15% に基づいています。これらのガイドラインが正確かつ適切であり続けることを確実にするため、私たちはチケットボリューム、人員レベル、パフォーマンス指標を継続的に監視しています。これらのベースラインがパフォーマンス指標とダッシュボードでどのように使用されているかを含む詳細については、Support Engineer Performance Indicators FY26 work item、[Support Engineer Performance Indicators FY26 Issue](https://gitlab.com/gitlab-com/support/support-team-meta/-/issues/6635#note_2498022715)、および [Median TTR ダッシュボード](https://gitlab.zendesk.com/explore/studio#/dashboards/5CB98A840DDD3FFF1A274944BCC070229D377C1D23901AF90988FBD0CA79C706)を確認してください。

**ご注意:** EMEA のサポートエンジニアは、チケットを選択する際に [Shift Chair](/handbook/support/workflows/team/shift_chair/) ワークフローに従ってください。

#### ベースラインを満たせない場合はどうしますか？

エスカレーションをリードしていたり、難しいチケットに取り組んでいたり、非チケット業務に集中していたりして、新規チケットアサインを引き受けられない場合があります。それは問題ありません！重要なのは、リージョンチームとマネージャーと連携を取って、チームへのリスクを認識してもらうことです。

### 行き詰まって本当に助けが必要なとき、何ができますか？

[ヘルプの求め方](/handbook/support/workflows/how-to-get-help/)ワークフローのガイダンスに従ってください。

### 不在時、自分のアサインチケットはどうしますか？

休暇取得時のガイダンスについては、[サポートチームメンバーの休暇](/handbook/support/support-time-off/)ページを参照してください。

### 顧客が不在で、復帰までチケットをオープンのままにしたい場合は？

このシナリオでは:

1. 顧客のリクエストを了承し、自分の計画を伝えます。
1. チケットのステータスを `on-hold` に設定します。
1. チケットタイプを **Task** に変更します。
1. 顧客の復帰予定日の 1〜2 日後に確認するためのリマインダーを設定します。

[`On-Hold` チケットの動作](/handbook/support/workflows/zendesk-ticket-basics/#behavior-of-on-hold-tickets)により、顧客が復帰するまでチケットは `on-hold` 状態のまま保たれます。
これは顧客が 1〜2 週間応答できない場合に有用です。顧客がより長期間応答できない場合は、同僚にチケットをハンドオーバーするか、復帰時に新規チケットを起票するよう依頼することを検討してください。

### 別の人にチケットを再アサインしてもよいですか？

チケットを再アサインするのが適切な状況がいくつかあります。一般的な状況をいくつか以下に挙げますが、他にもあり得ます。ハンドブックに記載されていない再アサインが必要なシナリオに遭遇した場合は、マネージャーと相談してから、以下に追加してください！

#### オフィス不在となる場合

オフィス不在となる場合は、計画的か非計画的かを問わず、[サポートチームメンバーの休暇](/handbook/support/support-time-off/)のガイダンスに従ってください。

#### 専門家が必要な場合

チケットを解決するために自分以外の特定の専門知識が必要だと判断した場合は、専門家とペアを組むことで、チケットを解決し、その過程で学習するようにしてください。問題の高度さや複雑さから、その人がリードを引き継ぐ必要があると判断した場合は:

1. 顧客に以下を伝えるメッセージを送信します:
   - 関連する専門知識を持つ別のサポートエンジニアにチケットを依頼したこと
   - そのエンジニアと一緒にチケットを確認したこと
   - 引き続きどのような形でも支援できるよう関与し続けること
1. チケットを専門家にアサインします

#### チケットが多すぎる場合

チケットを抱えすぎてしまった場合は、自分のチケットの一部を引き受けてくれる他の SE を探すことを検討してください。再アサインする前に各チケットについて議論し、合意を得て、他のサポートエンジニアがゼロから始めずに済むようにしてください。

新しいアサイン担当者を見つけたら:

1. チケットを要約し、再アサインを記録した内部ノートを追加します
1. 顧客に再アサインを伝える公開返信を送信します
1. 新しいエンジニアに再アサインします

### 顧客がチケットをクローズしてよいと確認したが、チケットにアサイン担当者がいない場合は？

すべてのチケットが FRT からクローズまでアサイン担当者を持つようにすべきですが、チケットがクローズ準備ができているにもかかわらずアサイン担当者がいないシナリオがあります。たとえば、顧客がチケットを起票し、私たちが FRT を送信する前に問題を解決したと知らせてくる場合などです。これらのシナリオでは:

1. 顧客に、チケットステータスを solved に変更することを伝えます
1. チケットをアサインします
   - 解決策が提供された場合は、解決策を提供したエンジニアにアサインします
   - 直接の提案によって問題が解決されたわけではない場合は、ライフサイクルを通じてチケットに大きく貢献したエンジニアにアサインします
   - 私たちが応答する前に顧客が解決した場合は、自分自身にチケットをアサインします。結局のところ、顧客の更新を確認し、チケットを解決する作業をしているのですから！
1. チケットを `solved` としてマークします

### 1 つのサポートチケットでいくつの Issue またはインシデントを扱うべきですか？

[Support General Policies](https://about.gitlab.com/support/general-policies/#we-handle-each-incident-within-a-single-support-ticket) に詳述されているとおり、各 Issue またはインシデントは単一のサポートチケット内で扱うことが GitLab のポリシーです。

### 顧客に代わって新規チケットを起票するにはどうしますか？

[Support General Policies](https://about.gitlab.com/support/general-policies/#we-handle-each-incident-within-a-single-support-ticket) に詳述されているとおり、各個別のインシデント、問題、または Issue は単一のサポートチケット内で扱うことが GitLab のポリシーです。顧客に代わって新規チケットを起票する必要がある状況が発生した場合、適切なルーティングと SLA アサインを確保するため、Zendesk Super App 内の [Create new ticket plugin](/handbook/security/customer-support-operations/zendesk/apps/global#zendesk-super-app) を **必ず** 使用する必要があります:

1. チケット内で Zendesk Super App に移動し、Create new ticket プラグインを選択します。
1. 適切なフォームタイプを選択します。これはおそらく起点となるチケットのリクエストタイプと一致します。
1. 件名、問題の説明、その他の関連情報など、顧客の詳細を入力します。フォームを完成させるために必要な顧客情報を取得するには、顧客の既存の Zendesk チケットを使用します。
1. `Create Ticket` ボタンを使用してチケットを送信します。

新規チケットが送信されると、アプリは対応するチケット ID を提供します。チケット ID をクリックして、新しく作成されたチケットに直接移動できます。

すぐにチケットの作業を開始する予定の場合は、自分自身にチケットをアサインしてください。

### LLM の出力をチケット返信に使えますか？

GitLab Duo のようなツールは、調査時や顧客への返信文を作成する際に使用できますが、いくつかの重要な点を念頭に置く必要があります:

- ドキュメントとソースコードを使用するか、人間の[サブジェクトマターエキスパート](https://gitlab-com.gitlab.io/support/team-pages/skills-by-subject.html)に確認することで、LLM が提供する情報が正確であることを検証してください
  - 環境変数、設定オプション、UI 設定、ドキュメント URL などが実際に存在するかどうかを特に注意して確認してください
  - 識別された不具合や機能の利用可能性が、顧客が使用している GitLab のバージョン／エディション／ティア／インストール方法と一致しているかを再確認してください
  - LLM によって生成され、顧客と共有するコマンドやコードスニペットを理解し、説明でき、テスト済みであることを確認してください
  - **少なくとも** 技術的正確性を検証する前に、LLM のテキストを顧客に逐語的に送ってはいけません
- ツールを選択する際は、GitLab の[データ分類標準](/handbook/security/policies_and_standards/data-classification-standard/)と、念頭に置いている[入力の種類](https://internal.gitlab.com/handbook/legal-and-corporate-affairs/ai-tool-usage-guidelines/#input)に留意してください
  - 顧客データを扱う場合は、LLM と共有する前に情報を匿名化する必要があるかを常に検討してください
  - 機密情報や識別情報を含む可能性のある顧客のスクリーンショット、ログ、設定ファイルには特に注意してください
- LLM は、顧客への返信ドラフトを洗練し改善するのに有用ですが（明瞭さ、完全性、トーンのチェックなど）、最終的な返信の責任は常にサポートエンジニアにあり、ツールにはありません。

追加のガイダンスについては [General Purpose AI Tool Usage Guidelines](https://internal.gitlab.com/handbook/legal-and-corporate-affairs/ai-tool-usage-guidelines/) をお読みください。
