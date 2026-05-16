---
title: フィードバックと苦情
category: Handling tickets
subcategory: Writing responses and handling feedback
description: "お客様からのフィードバックを受け取り、それに応答するためのサポートエンジニアリングワークフロー"
upstream_path: /handbook/support/workflows/feedbacks_and_complaints/
upstream_sha: 47fdb6582389288bed0f04a23aa5d972c3ce1ff5
translated_at: "2026-05-08T00:00:00Z"
translator: claude
stale: false
lastmod: "2025-02-04T16:44:03+00:00"
---

### 概要

チケットが解決済みとマークされてから 24 時間後に、満足度調査が自動的にお客様に送信されます。

お客様が他の手段でフィードバックや苦情を提出した場合は、以下のワークフローを使用してください。

### ワークフロー

すべての場合において、チケットに `feedback` タグを付けます。私たちは将来的に専用のフィードバックチャンネルを構築するかもしれませんが、それまでは Zendesk チケットをレビュー対象としてマークするだけにとどめます。コミュニティチームとサポートマネージャーがそれらを処理します。

### バグ

バグに関するフィードバックや苦情については、適切な [エスカレーション手順](/handbook/support/workflows/working-with-issues/) に従い、作成されたリンクをお客様に提供してください。

更新を受け取るためには、作成された Issue を購読し、Zendesk 経由ではなく Issue 上で直接やり取りすることが望ましい旨をお客様に伝えてください。すべての Issue は重要ですが、私たちのプロダクトチームとインフラストラクチャチームは必要に応じて [Issue に優先順位を付け](/handbook/support/workflows/working-with-issues/#issue-prioritization)、サポート側ではあまりコントロールできないという点も伝えます。

### 機能提案

機能提案については、[GitLab Issue トラッカー](https://gitlab.com/gitlab-org/gitlab/issues) で Issue を作成する方法をお客様に案内してください。バグでない場合、特にアプリ／機能が意図通りに動作している場合は、お客様自身に Issue を作成していただくことが望ましいです。

### 返金

お客様から返金リクエストがあった場合は、[返金リクエストの処理](/handbook/support/license-and-renewals/workflows/billing_contact_change_payments#refunds) ワークフローに従ってください。

### チケット途中でのフィードバック、または営業や CSM チームメンバーからの間接的フィードバック

お客様にはサポート体験について [カスタマーフィードバックフォーム](https://gitlab-com.gitlab.io/support/customer-feedback/) からフィードバックを提出する選択肢が常にあります。このフォームへのリンクは、サポートエンジニアから Zendesk で送信されるすべての返信の署名に含まれています。

お客様は、チケットを通じて直接フィードバックを提供する場合や、CSM や営業の連絡先にフィードバックを提供する場合があります。このフィードバックを確実に捕捉するために、[Indirect Feedback テンプレート](https://gitlab.com/gitlab-com/support/feedback/-/issues/new?issuable_template=Indirect%20Feedback) を使ってカスタマーフィードバックプロジェクトに Issue を作成し、フィードバックを新しい Issue にコピーしてください。Issue は担当者のマネージャーに割り当て、彼らがフィードバックをレビューして適切な行動を取ります。

その間も、お客様の問い合わせを支援し続け、適切であればフィードバックに対応してください。進め方が分からない場合は、[#support_leadership](https://gitlab.slack.com/archives/C01F9S37AKT) Slack チャンネルで助けを求めてください。

### 不満をぶつけるお客様への対応

お客様が、直面している（または過去に直面した）問題を解決するために提示されたすべての解決策や手順に単純に満足しないというケースもあります。状況をできる限り和らげるために、必要に応じて謝罪し、有効な解決策や代替案を提案してください。最も重要なことは、このような状況ではお客様に不満を吐き出させ、フィードバックが真摯に受け止められることを保証することです。場合によっては、特に [脅迫やハラスメントを感じる場合](/handbook/support/engineering/#what-if-i-feel-threatened-or-harassed-while-handling-a-support-request)、マネージャーを CC に入れたいと思うかもしれません。

謝罪は誠実であるべきだという点に注意することが重要です。これには、必要でないときに謝罪しないことも含まれます。「ご面倒をおかけして申し訳ありません…」のようなフレーズは、不誠実で「スクリプト的」に聞こえることがあります。謝罪は罪の自認と見なされることもあるため、問題が GitLab の責任ではない場合（機能が意図通り動作しているがお客様の望む動作ではない場合など）は、謝罪すべきではありません。

### プロダクトフィードバック

お客様が私たちの製品に関するフィードバックを伝えるためにチケットを開く場合があります。このようなチケットが来た場合は、フィードバックを #product（または他の適切な）Slack チャンネルに、チケットへのリンクとともに投稿します。フィードバックがプロダクトチームに伝えられたことをお客様にお伝えください。他にも質問やフィードバックがあるかどうかを尋ねるのも有効です。チケットをクローズする前に、`feedback` タグを付けます。

フィードバックが特定の機能やサービスに固有のものである場合は、既存の Issue を検索して [フィードバックを追加する](/handbook/support/workflows/working-with-issues/#adding-comments-on-existing-issues) か、私たちの [Issue 作成セクション]({{<ref "working-with-issues#creating-issues" >}}) で説明されているように新しい Issue を開きます。

### フィードバックへの応答

お客様が調査を提出してチケットを評価すると、サポートエンジニアと Zendesk SSAT マネージャーにメールが送信されます。オンコール SSAT マネージャーは、その後 [このワークフロー](/handbook/support/workflows/how-to-respond-to-feedback/) に従って応答を処理します。

お客様がチケット内でフィードバックや懸念を提起した場合は、マネージャーに知らせてください。このフィードバックがレビューされ対応されることが重要です。例えば、アカウントマネージャーや CSM の関与が必要になる場合があります。典型的な例としては、製品、サポートプロセス、チケットの技術的扱い、サポートチームの応答性に関するフィードバックなどがあります。
