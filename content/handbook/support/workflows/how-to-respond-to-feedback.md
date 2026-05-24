---
title: 顧客満足度（CES）レビューと対応（マネージャー向け）
category: Handling tickets
subcategory: Writing responses and handling feedback
description: サポートチームの顧客満足度（Customer Effort Score または CES）レビュープロセス、および顧客フィードバックに対応するためにマネージャーが行うアクションについて説明します
upstream_path: /handbook/support/workflows/how-to-respond-to-feedback/
upstream_sha: 877082e5cd4baeabe3d6e802b3b4b1efdb6573f1
translated_at: "2026-05-23T00:00:00Z"
translator: claude
stale: false
lastmod: "2026-05-22T11:27:49+08:00"
---

[サポート満足度](/handbook/support/performance-indicators/#support-satisfaction-ssat) に貢献する要因を理解するため、サポートチケットに対して受領したフィードバックをレビューします。受領したすべてのサポート満足度フィードバックに対して、Issue が [フィードバック Issue トラッカー](https://gitlab.com/gitlab-com/support/feedback/-/issues)（社内のみ）に自動的に作成され、チケットに割り当てた人物のマネージャーに割り当てられます。

**注:** 以下のカテゴリのチケットは、アンケートを **受け取りません**:

- スパムチケット（スパムとしてマークされ、停止されたもの）
- 無料ユーザーチケット（`free_customer` タグを含むもの）
- 禁輸チケット（`com_embargo` タグを含むもの）
- 組織が `GitLab` または `DigitalOcean Support` のチケット

## 顧客が受け取るもの

チケットが解決されると、顧客は次の 1 つの簡単な質問に答えることでアンケートを完了するよう招待するメールを受け取ります:

- Thinking about your recent experience of creating and working on a ticket, how easy was it to work with GitLab Customer Support?

評価の選択肢は「非常に簡単」から「非常に難しい」まで、5 つの中間オプションがあります。結果として作成されるフィードバック Issue では、これらは 7 から 1 までの評価として識別されます

オプションの 2 つ目の質問:

- What would make working on a ticket with GitLab Customer Support easier?

顧客がこのセクションの完了をオプトアウトした場合、結果として作成されるフィードバック Issue には「User did not leave a comment」が含まれます

フォームは [こちら](/handbook/security/customer-support-operations/zendesk/satisfaction/#ces-survey-form) にあります

## 顧客フィードバック Issue の購読

### 地域別

特定の地域から提出された CES を購読したい場合、[フィードバックプロジェクトのラベルページ](https://gitlab.com/gitlab-com/support/feedback/-/labels) で適切な `OrganizationRegion` スコープラベルを購読できます。

これらのラベルは、SFDC から Zendesk に同期される組織情報に基づいて適用されます。

| ラベル   | 説明 |
|---------|-------------|
| APAC    | アジア太平洋 |
| EMEA    | ヨーロッパ、中東、アフリカ |
| LATAM   | ラテンアメリカ（中央アメリカおよび南アメリカすべてを含む） |
| NORAM   | 北アメリカ |
| NCSA    | 北アメリカ、中央アメリカ、南アメリカ（段階的廃止予定のレガシー地域） |
| Unknown | 不明 |

これらの定義の唯一の情報源は、ハンドブックページの [Go to Market Glossary](/handbook/sales/field-operations/gtm-resources/#glossary) で確認できます。

## サポート満足度フィードバックのレビュー責任者

各サポートエンジニアリングマネージャーは、自身の部下のフィードバックをレビューし対応する責任があります。Issue はマネージャーに直接割り当てられ、7 日以内に対処する必要があります。

この CES データはシニアリーダーによってレビューされ、月次の地域レビューで提示されます。

### CES

チケットが割り当てられた人物のマネージャーは、そのチケットに対する顧客フィードバックをレビューする責任があります。フィードバック Issue は自動的にマネージャーに割り当てられます。マネージャーは GitLab からのメール通知と To-Do アイテムを受け取ります。

### チケット途中のフィードバック

[Support Leaders on the Hook (SLOTH)](/handbook/support/workflows/support-leader-on-the-hook) は、シフト中に受け取ったチケット途中のフィードバックの初回トリアージを担当します。通知は `#support_ticket-attention-requests` チャンネルに投稿されます。

### フィードバックのソース

現在、以下の方法でレビュー用のフィードバック Issue が作成されます:

1. 自動メールアンケート -- チケットが解決されたときに顧客に送信されます。
1. チケット途中のフィードバックリンク -- GitLab のサポートエンジニアまたはマネージャーからの各 Public コメントには、チケットがオープン中に顧客がフィードバックを提供したり、マネージャーからの連絡を要求したりできるフォームへのリンクが含まれます（Issue [2913](https://gitlab.com/gitlab-com/support/support-team-meta/-/issues/2913) で導入されました）。
   1. このフィードバックフォームは、**Positive/Negative/Neutral feedback for ticket nnnnnn** という件名形式で顧客フィードバックプロジェクトに Issue を作成し、自動的に **オンコール中のサポートマネージャー** およびチケットに割り当てられたサポートエンジニアのマネージャーに割り当てられます。
   1. フィードバックがネガティブな場合は、マネージャーからの連絡を要求するオプションがあります（月曜から金曜の 48 時間以内）。このオプションが選択されると、Slack 通知が #support_ticket-attention-requests チャンネルに送信されます。[**SLOTH**](/handbook/support/workflows/support-leader-on-the-hook#expectations-for-the-sloth-role) は、[営業時間中にマネージャーからの連絡を要求するチケット途中のフィードバックの処理](/handbook/support/workflows/support-leader-on-the-hook#handling-mid-ticket-feedback-requesting-manager-contact-during-business-hours) のガイダンスに迅速に従うべきです。
1. GitLab チームメンバー（CSM や営業チームなど）は、顧客から受け取った詳細を含む [間接フィードバック](https://gitlab.com/gitlab-com/support/feedback/-/issues/new?issuable_template=Indirect+Feedback) Issue を起票できます。
1. 連絡を必要とする Issue は、`SSAT::Contact` ラベルを適用することでも特定できます。説明またはコメントで、マネージャーへの連絡が要求されたことを指定します。

### 成功とはどのようなものか?

7 日以内に、フィードバックを受け取った各サポートエンジニアについて:

1. 自分に割り当てられた各フィードバック Issue について、["Good"](#handling-good-reviews---customer-effort-scores-56-or-7) および ["Bad"](#handling-bad-reviews---customer-effort-scores-123-or-4) のセクションで説明されているトリアージ作業を実施しているはずです。
1. 顧客または GitLab グループへの連絡を開始しているはずです。
1. 他のグループや顧客への未解決の依存関係がない、自分に割り当てられたすべてのフィードバック Issue をクローズしているはずです。

### 対応にかかる時間

現在、フィードバック Issue の対応に SLA はありませんが、このページで定義されているプロセスに従えば、Issue の作成から 7 日以内に各 Issue に初回応答を送るべきです。

## フィードバックレビュー用ワークフロー

[フィードバックと苦情のハンドブックページ](/handbook/support/workflows/feedbacks_and_complaints) では、フィードバックの評価と対応に関する一般的なガイダンスを提供しています。

## 「良い」レビューへの対応 - 顧客満足度スコア 5、6、または 7 {#handling-good-reviews---customer-effort-scores-56-or-7}

「satisfaction::good」とラベル付けされた各フィードバック Issue について:

1. フィードバックを読み、何か **アクション可能** なものがないかを確認します - 顧客はポジティブなレビューにも非常に良いアクション可能なフィードバックを提供することがあります
1. Support Week in Review ドキュメントでフィードバックを共有することを検討します（後述）
1. さらなる対応が不要な場合は、フィードバック Issue を `/close` します。

**注:** サポートエンジニアは自分のチケットに対するフィードバックコメントを確認でき、フィードバックコメントが追加されると Zendesk から通知を受け取ります。本人やマネージャーに通知する必要はありません。

**注:** 7 日間の非アクティブ後、GitLab Support Bot が「satisfaction::good」Issue をクローズします。

### Support Week in Review (SWIR) でのポジティブフィードバックの共有

Support Week in Review でポジティブフィードバックを共有するため、毎週 Issue が [Support Week In Review トラッカー](https://gitlab.com/gitlab-com/support/readiness/support-week-in-review/-/issues) に作成され、`~"SWIR::SSAT"` でタグ付けされます。

この Issue の本文に追加した内容は、その週の SWIR ダイジェストに含まれます。Issue の本文を更新する以外、追加のアクションは必要ありません。[SWIR Issue でのフィードバックのフォーマット](#formatting-feedback-in-swir-issue) に関するいくつかの考慮事項にご注意ください。

確実に含めたいフィードバックについてのみ、SWIR Issue を更新する必要があります。SWIR ホストは毎週、チームと共有するためにいくつかのポジティブフィードバックを選択します。

**期日**: SWIR のコンテンツの締め切りは、木曜日の業務終了時です。チケットフィードバックを追加する場合は、この時間の前に計画してください。この時間以降に追加したいものは、音声録音に確実に含まれるよう、翌週のコンテンツに追加する必要があります。

#### SWIR ホスト向けのガイダンス

毎週、`~SWIR::SSAT` Issue でマネージャーが含めたポジティブフィードバックに注目し、必ず含めるようにします。

共有する追加のフィードバックを選ぶ際、すべてのポジティブフィードバックを共有する必要はありません。共有するものを選ぶ際は、以下を考慮してください:

1. あなたに印象的なコメント - 何度も読み返して笑顔になるようなもの
1. 顧客が感謝した個人の名前を挙げるために時間を割いた
1. 顧客が満足した理由や、私たちのサポートが顧客の一日をどのように良くしたかを説明している（素晴らしいストーリーが集まります！）
1. 一般的な感想やテーマがあれば、チーム全体を称賛しても構いません。たとえば、サポートへの全体的なアプローチ、スピード、明瞭さなどで称賛されている場合。
1. フィードバックは **間違いなく** ポジティブですか? ポジティブフィードバックのコメントが中立的、あるいはネガティブな場合があります。たとえば「もっと迅速な応答が欲しかった」や「満足した」などは私たちにとって価値あるものですが、SWIR で共有してもチームを励ますものではありません。

### SWIR Issue でのフィードバックのフォーマット {#formatting-feedback-in-swir-issue}

`support-week-in-review` トラッカーの CES Issue にコメントを追加する際は、Markdown フォーマットを自由に使用してください。ヘッダー（`#`）を使いたい場合は

- H4（`####`）以下を使用してください
- ヘッダーは Issue の目次に含まれることに注意してください

通常は、チケット番号とチケットへのリンク、顧客からのコメント、該当する場合は主にチケットを担当した人（または人々）の @ メンションを含めます。

### ポジティブフィードバックの自動収集

`support-week-in-review` トラッカーの [`populate_ssat` ジョブ](https://gitlab.com/gitlab-com/support/readiness/support-week-in-review/#populate_ssat) は、`~"satisfaction::good"` でラベル付けされたオープン中の Issue を自動的に収集し、見栄えの良いフォーマットで開いている CES Issue に追加します。

このジョブを実行するには:

1. [手動パイプラインを実行](https://docs.gitlab.com/ci/pipelines/#run-a-pipeline-manually) し、`populate_ssat` ジョブを実行します。

このタスクは Issue に追記するため、何度でも安全に再実行できます。

## 「悪い」レビューへの対応 - 顧客満足度スコア 1、2、3、または 4 {#handling-bad-reviews---customer-effort-scores-123-or-4}

「satisfaction::bad」とラベル付けされたフィードバック Issue については、チケットをクリックしてレビューし、以下を判断します:

1. なぜそのフィードバックが与えられたか
1. さらなる [対応が必要か](#if-there-is-action-to-be-taken)
1. 顧客に与えられたフィードバックについて連絡すべきか
1. CSM とフィードバックについて議論すべきか

調査結果と取られた後続のアクションを Issue に文書化する必要があります。
以下のテンプレートを使用してフィードバック Issue（チケットではなく！）にコメントを追加できます:

```text
* **Summary of ticket/feedback:**
* **Action to be taken:**
* **Contact customer to discuss feedback? (Y/N)**
* **Make the CSM aware of this feedback? (Y/N)**
```

上記のテキストは「悪い」レビューへのコメントとして自動的に追加されます。すばやく使用できるように、上記のスニペットを [コメントテンプレート](https://docs.gitlab.com/user/profile/comment_templates/) に追加することも検討してください。

何のアクションも必要なく、顧客にチケットについて話す必要もない場合は、フィードバック Issue を `/close` します。

### 一見成功したチケットで「悪い」フィードバックを見たとき

時々、チケットをレビューすると、チケットが正常に解決されたように見えることがあります。顧客が「ありがとう、チケットをクローズしてもよい」というようなことを言っているかもしれません。これが起こったときは、[顧客に連絡する](#if-the-customer-should-be-contacted) ことを強くお勧めします。チケットがまだ `Solved` ステータス（`Closed` ではない）であれば、「悪い」と評価する意図がなかった場合、顧客は評価を変更できます。

### 顧客の理由を理解する

多くの顧客は、提出した「悪い」レビューに対して理由を提供しません。理由が提供されたとしても、なぜ顧客が不満を持ったのかが明確でないことがあります。レビュー担当のマネージャーは、チケットを慎重にレビューし、なぜ悪いレビューが与えられたかを理解しようとすべきです。必要に応じて、[顧客に連絡](#if-the-customer-should-be-contacted) して詳細を学んでください。

「悪い」レビューの理由が理解できたら、状況を最もよく説明する `feedback` [スコープラベル](https://docs.gitlab.com/user/project/labels/#scoped-labels) を適用します:

| ラベル | 説明 |
| ----- | ----------- |
| `~feedback::customer-resolved` | 顧客がチケットを解決した |
| `~feedback::docs-new-issue` | ドキュメントの問題に遭遇した。新しい Issue や MR を起票した |
| `~feedback::docs-not-helpful` | ドキュメントが顧客やサポートエンジニアにとって役に立たなかった |
| `~feedback::known-issue` | Issue がすでに作成されている既知の問題 |
| `~feedback::new-product-issue` | 製品の問題に遭遇した。新しい Issue や MR を起票した |
| `~feedback::missing-info-from-customer` | 顧客が調査に十分な情報を提供しなかった |
| `~feedback::missing-info-by-engineer` | サポートエンジニアが顧客に適切な情報を提供しなかった |
| `~feedback::outside-support` | 問題は GitLab 内部にあるが、サポートが直接の原因ではない |
| `~feedback::process-confusing-customer` | 顧客がサポートプロセスを混乱しているまたは不明確と感じた |
| `~feedback::process-engineer-not-followed` | サポートエンジニアが文書化されたサポートプロセスに従わなかった |
| `~feedback::process-does-not-exist` | 問題に既存のサポートプロセスがない |
| `~feedback::process-sfdc` | Zendesk-Salesforce 統合が原因の問題（needs-org による遅延、SFDC の不正確な連絡先情報やマッチング、サブスクリプションを検証できないことを含む） |
| `~feedback::soft-skills` | サポートエンジニアの応答が役に立たない、または顧客の期待が誤って処理された |
| `~feedback::technical-skills-engineer` | サポートエンジニアが問題のトラブルシューティングや解決のためのスキルや権限を持っていない |
| `~feedback::technical-skills-customer` | 顧客が問題のトラブルシューティングや解決のためのスキルや権限を持っていない |
| `~feedback::unable-to-fulfil-customer-expectations` | サポートが顧客の期待に応じてリクエストを満たすことができない |
| `~ffeedback::extended-TTR-due-to-troubleshooting` | 問題のトラブルシューティング要件によりチケットの解決時間が延長された |
| `~feedback::extended-TTR-caused by-technical-complexity` | 問題の技術的複雑さによりチケットの解決時間が延長された |

**注:** フィードバックラベルとその説明の完全なリストについては、[support-feedback プロジェクトのラベルページ](https://gitlab.com/gitlab-com/support/feedback/-/labels?utf8=%E2%9C%93&subscribed=&search=feedback%3A%3A) をご覧ください。

これは、サポートがサポート満足度の傾向を理解し対応するのに役立ちます。

### 対応が必要な場合 {#if-there-is-action-to-be-taken}

対応の方針を判断し、適切な人にタグ付けします。顧客/見込み客から受け取った [間接フィードバック](/handbook/support/internal-support/#regarding-gitlab-support-plans-and-namespaces) は、通常、次のアクションが選ばれていることに注意してください。

可能なアクションの例:

- 顧客に連絡する（[後述](#if-the-customer-should-be-contacted) を参照）
- フィードバックについて議論するために `support-team-meta` で新しい Issue を作成（フィードバック Issue を関連としてクロスリンク）
- チケットに参加した個人または個人のマネージャーにタグを付けて、1:1 で議論する
- 周知のために製品グループにタグを付ける（一部のネガティブフィードバックは製品関連です）

さらなる議論が必要な場合は、フィードバック Issue を開いたままにします。それ以外の場合は、`/close` します。

### 顧客に連絡すべき場合 {#if-the-customer-should-be-contacted}

顧客がチケット途中のフィードバックリクエストを通じて連絡を要求した場合:

1. [SLOTH](/handbook/support/workflows/support-leader-on-the-hook) がフォローアップを担当します。

クローズされたチケットのアンケート完了後に顧客に連絡すべきと考える場合:

1. 連絡を取る最善の方法を判断します。いくつかのオプションは:
   1. GitLab のメールアドレスから顧客にメールを送る。これは大多数のケースで適切なオプションです。
   1. Zendesk チケットで直接応答する。これは、チケットが適切に解決されておらず、作業を継続すべきと判断した場合に適切です。
      - チケットを再オープンする場合は、サポートエンジニア（通常は既存の担当者）を割り当て、次のアクションについて簡単に説明することを確認してください。
      - クローズまたは解決されたチケットを再オープンすると、再オープン率と解決時間の測定に影響することに注意してください。
1. 顧客に連絡する際は、以下を確実に行ってください:
   1. 自己紹介をし、GitLab での自分の役割を説明します
   1. チケット ID を含む状況の詳細に言及します - `https://support.gitlab.com/hc/requests/<ticket number>` の形式でリンクを含めることができます
   1. 顧客のコメントを再述し、確認します
   1. 関連するドキュメントへのリンクを含め、必要な謝罪や明確化を提供します
   1. ビデオコールをスケジュールするための Calendly リンクを提供します
1. フィードバック Issue を以下のように更新します:
   1. メールの本文をフィードバック Issue にコメントとして追加します。
   1. ラベル `~ssat-manager-contacted-customer` を適用します。
   1. フィードバック Issue を `/close` します。フォローアップはメールを通じて続きます。
   1. Issue をクローズした後、顧客とのやり取りから生じる追加のアクションがあれば、戻ってフィードバック Issue にメモします。
