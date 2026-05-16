---
title: Zendesk L&R チケットフォーム
category: General
description: L&R フォームを使用する Zendesk ワークフローについて説明します。
upstream_path: /handbook/support/license-and-renewals/workflows/zendesk/
upstream_sha: 9da08370100b76603b2eb82901592f9d21c9766c
translated_at: "2026-05-08T11:18:50Z"
translator: claude
stale: false
lastmod: "2025-04-01T09:22:28+00:00"
---

このページでは、Zendesk の `L&R` フォームを使用する人を対象としたワークフローを説明します。

## チケットへの対応

### チケットの選択、アサイン、応答

L&R チケットを担当する Support Engineer は、[Support - Working on Tickets workflow](/handbook/support/workflows/working-on-tickets) と同じガイドラインを適用してください。

1. [チケットの選択](/handbook/support/workflows/working-on-tickets#selecting-tickets)
1. [チケットのアサイン](/handbook/support/workflows/working-on-tickets#assigning-tickets)
1. ブリーチ間近のチケットへの応答

### ワークフロー

1. メインの L&R ビューを確認し、ビューの先頭にあるチケットに着手します。チケットは `Ticket Weight` で並び替えられており、これは複数のフィールドを考慮して優先度順を決定します。
1. チケットが未アサインであれば、自分にアサインします
1. 公開返信を作成します
1. **チケットが内部リクエストの場合**、[Priority](/handbook/support/internal-support/#internal-request-slo) が適切かを確認します。適切でない場合は `Priority` フィールドを適切な値に設定し、変更内容と理由をリクエスターに通知します。（このためのマクロは近日中に提供予定です）
1. 残りのフォームデータを入力します
1. 公開返信ができない場合は、同僚に依頼してチケットをアサインしてもらい、前進させます
1. 社内のステークホルダーやプロセスの完了を待つ必要があり、チケットを Solved に設定できない場合は、
1. X 日後に返信する旨を顧客に伝えます
1. Status を `On-hold` に設定します
1. Type を `Task` に設定します
1. `Submit as On-hold` をクリックします
1. サイドバーのカレンダーで、X 日後に顧客への確認を行うリマインダーを自分に設定します
1. `Submit as On-hold` をクリックします

## Zendesk フォームデータの概要

Zendesk のチケットビューの左サイドバーでは、各フォームに固有のデータフィールドがあります。これらのデータフィールドは、タグやチケットタイプ、ARR、顧客がチケット送信時に入力した情報など、チケットに関する詳細を教えてくれます。

L&R では、私たちのキューに入ってくるチケットは Support 以外のチームにも関心が持たれています。したがって、対応するチケットについて正確なデータを収集することが重要です。各チケットで完成させたフォームデータは、既存のメトリクスダッシュボードや、私たちが将来行うかもしれないデータクエリに反映されます。L&R チケットデータを利用するメトリクスダッシュボードの例として、[L&R Dashboard](https://gitlab.zendesk.com/explore/dashboard/CE496B0DE0C45903F2C8FFEE0ABA251DE82217E689B59F3FC62A23D3E7C592AD) と [Support Metrics Dashboard](https://gitlab.zendesk.com/explore/dashboard/36925DBD1F5E3C7BA541DB38D11AC51E0EAAFDD30DCB63FDE83CF1389E555D96/tab/10638812) があります。

## Zendesk フォームデータのガイドライン

チケットデータの入力は非常に主観的なプロセスになりえます — チケットは 2 つの異なる事柄について書かれている可能性があり、どのカテゴリ分けが最適かはエンジニアの判断に委ねられます。チケットがどのタイプかを客観的に正しく分類することよりも、データを入力すること自体のほうが重要です。

チケットデータを選ぶ際の 2 つの考え方:

1. このチケットが存在する理由は何か？ つまり、なぜ顧客はこのチケットを作成したのか？ 理由の例: システムバグ、プロビジョニング完了に支援が必要、支払いに関する問い合わせ。
1. 何があれば、このチケットが存在しなかったのか？ 例えば、パスワードのリセット方法やアカウント管理方法を知っていれば（チケットタイプ：account management）、または Sales 担当者を知っていて担当者に連絡できていれば（チケットタイプ：Sales assistance required）、顧客はチケットを送信する必要がなかったでしょう。

`Transaction issue type` の選択肢に関するシナリオ別のガイドラインは、以下の表を参照してください。

| Transaction issue type | Sub-type | シナリオ |
| ---- | ----- | ----- |
| Billing & Payment (refunds, cancellations, payment questions) |  | 返金や解約のリクエスト + 支払いや請求に関する質問 |
| EDU/OSS/Startups | EDU account inquiries | Education チームへのリクエスト/問い合わせ。[ワークフロー](/handbook/support/license-and-renewals/workflows/special-programs/) に従う |
| EDU/OSS/Startups | OSS account inquiries | OSS チームへのリクエスト/問い合わせ。[ワークフロー](/handbook/support/license-and-renewals/workflows/special-programs/) に従う |
| Sales-assistance required | Alternate payment method (Wire Transfer) | 顧客が wire transfer で支払いたい場合 |
| Sales-assistance required | Order form / PO | 顧客がオーダーフォームまたは注文書で支払いたい場合 |
| Sales-assistance required | Reseller | リクエストがリセラーまたはリセラー顧客から来た場合 |
| Sales-assistance required | Discount request | 顧客が割引について問い合わせる場合 |
| Sales-assistance required | New business | 過去の購入がなく、Sales の見積が必要な場合 |
| Sales-assistance required | Trueups | 顧客が Sales 経由で True-Up を支払う必要がある場合 |
| Sales-assistance required | Other | 別の理由で Sales のサポートが必要なリクエスト |
| Trial-related inquiries | Trial start | チケットがトライアル開始に関するもの |
| Trial-related inquiries | Trial extension | チケットがトライアル延長に関するもの |
| Trial-related inquiries | Trial cancellation | チケットがトライアルのキャンセルや Free プランへのダウングレードに関するもの |
| Trial-related inquiries | Trial downgrade | チケットがトライアルプランのダウングレード（Ultimate から Premium）に関するもの |
| Product or Process question | Free form | チケットタイプをテキストフィールドに記述してください。製品またはプロセスの動作に関する質問（請求対象メンバーやシート使用に関する質問を除く） |
| Legacy license troubleshooting (SM only) | Trueup | Self-Managed のライセンス問題が True-Up に起因する場合 |
| Legacy license troubleshooting (SM only) | Prior user count | Self-Managed のライセンス問題が以前のユーザー数に起因する場合 |
| Legacy license troubleshooting (SM only) | Never generated | Self-Managed ライセンスがそもそも生成されていない（生成されているはずだった）場合 |
| Legacy license troubleshooting (SM only) | Active users | Self-Managed のライセンス問題がアクティブユーザー数に起因する場合 |
| Legacy license troubleshooting (SM only) | Multi-year license| Self-Managed ライセンスが複数年ライセンスである |
| Legacy license troubleshooting (SM only) | Not received | Self-Managed ライセンスがリクエスターに届いていない |
| Legacy license troubleshooting (SM only) | Other | Self-Managed のライセンス問題がリストにない別の理由による |
| Legacy license troubleshooting (SM only) | Customer issue | ユーザーエラー |
| Legacy license troubleshooting (SM only) | Multiple unique subscriptions | サブスクリプションが複数のサブスクリプション ID にまたがっている |
| Legacy license troubleshooting (SM only) | New license activation bug | 新しく購入したライセンスを適用する際のエラー |
| Legacy license troubleshooting (SM only) | Transition legacy to cloud | レガシーライセンスから Cloud License に変更する際の問題やエラー |
| Associate namespace (GitLab.com only) | | [gitlab.com サブスクリプションのプロビジョニング](/handbook/support/license-and-renewals/workflows/saas/associate_subscription_and_namespace) を支援する必要がある場合に使用 |
| Account management (reset password, update details) |  | アカウント関連のリクエストや、アカウントへの入り方や支払い方法の更新方法など |
| Contact management |  | アカウントやネームスペースの連絡先変更に関するリクエストや質問 |
| End of Availability (EOA) | | Bronze/Starter ティアの終了および [新サブスクリプションモデル](https://about.gitlab.com/pricing/faq-new-product-subscription-tiers/) の提供に関する質問やリクエスト |
| System bugs & incidents | CustomersDot | バグやエラーが私たちの CustomersDot アプリケーションの問題に起因する |
| System bugs & incidents | GitLab.com | バグやエラーが私たちの gitlab.com アプリケーションの問題に起因する |
| System bugs & incidents | License app | バグやエラーが私たちの License アプリケーションの問題に起因する |
| System bugs & incidents | GitLab version | バグやエラーが SM インスタンスで動作している GitLab のバージョンの問題に起因する |
| Plan Change (upgrade, downgrade, product transfer) | | アップグレード、ダウングレード、または Self-Managed と SaaS 間の切り替えによるサブスクリプション変更のリクエスト |
| Consumption (Compute, Storage) | Compute | gitlab.com のコンピュート分に関する質問やリクエスト |
| Consumption (Compute, Storage) | Storage | gitlab.com のストレージに関する質問やリクエスト |
| Billable members and seats related question | | 請求対象メンバーとシート使用に関する具体的な質問 |
| Cloud licensing (SM only) | Trueup | Self-Managed のライセンス問題が True-Up に起因する場合 |
| Cloud licensing (SM only) | Prior user count | Self-Managed のライセンス問題が以前のユーザー数に起因する場合 |
| Cloud licensing (SM only) | Never generated | Self-Managed ライセンスがそもそも生成されていない（生成されているはずだった）場合 |
| Cloud licensing (SM only) | Not received | Self-Managed ライセンスがリクエスターに届いていない |
| Cloud licensing (SM only) | Multi-year license| Self-Managed ライセンスが複数年ライセンスである |
| Cloud licensing (SM only) | Active/billable users | Self-Managed のライセンス問題がアクティブユーザー数に起因する場合 |
| Cloud licensing (SM only) | Other | Self-Managed のライセンス問題がリストにない別の理由による |
| Cloud licensing (SM only) | Customer issue | ユーザーエラー |
| Cloud licensing (SM only) | Multiple unique subscriptions | サブスクリプションが複数のサブスクリプション ID にまたがっている |
| Cloud licensing (SM only) | New license activation bug | 新しく購入したライセンスを適用する際のエラー |
| Cloud licensing (SM only) | Transition legacy to cloud | レガシーライセンスから Cloud License に変更する際の問題やエラー |
| Usage ping (SM only) |  | [SM サーバー上の Usage Ping](/handbook/legal/privacy/customer-product-usage-information/#service-ping-formerly-known-as-usage-ping) に関する問い合わせや懸念 |
| Quarterly Subscription Reconciliation |  | [四半期サブスクリプションの照合](/handbook/support/license-and-renewals/workflows/quarterly_subscription_reconciliations/) に関する質問や異議 |
| Auto-renewal |  | サブスクリプションの自動更新に関する質問や問題 |
| Other | Free form | チケットタイプをテキストフィールドに記述してください |

### `GitLab Issues` フィールド

`GitLab Issues` テキストフィールドはすべての L&R チケットで利用でき、該当する場合は必ず入力してください。このフィールドの目的は、既存の Issue へのリンクをキャプチャすることです。このフィールドは特に Fulfillment PM にとって重要で、繰り返し発生する Issue や大量に発生している Issue の概要を確認できるため、今後のマイルストーンで優先順位を付けることができます。フィールドを使用するタイミングの例:

1. 実装されていればこのチケットの作成を防げたであろう機能 Issue がある場合。
1. チケット上で再現可能なバグ Issue がある場合。

これは、注目を集めるべきバグや機能を記録してメトリクスを取得する素晴らしい方法です。Issue の数が増加するのをリアルタイムで把握し、製品チームの注意を喚起できるからです。**可能な限り、このフィールドに Issue へのリンクを入力してください。**
