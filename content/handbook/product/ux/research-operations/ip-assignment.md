---
title: "IP Assignment とそれを提示すべきタイミング"
description: "IP Assignment とは何か、また、それをリサーチ参加者にいつ提示すべきかを学びます。"
upstream_path: /handbook/product/ux/research-operations/ip-assignment/
upstream_sha: 1e195b58b9f249ff10bd0e705106c320fee86141
translated_at: "2026-05-13T00:00:00Z"
translator: claude
stale: false
lastmod: "2026-02-12T13:14:13+00:00"
---

知的財産（IP）Assignment は、UX リサーチ活動に参加する人が、自身の提供するフィードバック・提案・アイデアに関する IP 権が (i) GitLab に帰属する、また (ii) まだ GitLab に帰属していない部分については GitLab に譲渡されることを確認する、短い同意文です。

### このコンテキストで IP はどう定義されるのか

IP Assignment では IP を意図的に定義していませんが、語の自然な意味として、登録された IP 権（特許権や登録著作権を含む）と未登録の IP 権（人格権、発明、未登録著作権を含む）が、限定せず含まれます。

### IP Assignment を提示するタイミング

IP Assignment はすべての UX リサーチ活動で必要というわけではありません。一般的なルールとして、参加者がリサーチ活動への参加の中で提案やソリューションを提供する可能性がある場合に提示する必要があります。リサーチ手法によって、提案やソリューションが生まれやすいものとそうでないものがあります。

下の表は、IP Assignment を提示すべきタイミングのガイダンスです。リサーチ手法に関わらず、**参加者が提案やソリューションを応答に含めることが予想される場合は常に IP Assignment を提示する必要があります**。少しでも疑問がある場合は、[#legal](https://app.slack.com/client/T02592416/C78E74A6L) に問い合わせて確認してください。

| UX リサーチ手法                             | IP Assignment を提示するか？ | 理由                                                                                                                            |
|------------------------------------------------|---------------------|---------------------------------------------------------------------------------------------------------------------------------|
| 参加型デザイン                           | はい                 | 参加者は応答の中で提案やソリューションを提供します。コードへのコントリビューションが含まれる場合、[Individual Contributor License Agreement (ICLA) の質問](/handbook/product/ux/research-operations/ip-assignment/#frequently-asked-questions)も提示する必要があります。 |
| インタビューおよびフォーカスグループ                    | 場合による               | 参加者が応答に提案やソリューションを含めることが予想される場合は、IP Assignment を提示する必要があります。     |
| 縦断研究                           | 場合による               | 上の `インタビューおよびフォーカスグループ` を参照してください。                                                                                     |
| 自由記述式の質問を含むアンケート                | 場合による               | 上の `インタビューおよびフォーカスグループ` を参照してください。                                                                                     |
| ソリューション検証                            | 場合による                  | 上の `インタビューおよびフォーカスグループ` を参照してください。                                                                                |
| カードソートおよびツリーテスト                  | いいえ                  | 応答から提案やソリューションは生まれません。                                                                              |
| ダイアリー研究                                  | いいえ                  | 応答から提案やソリューションは生まれません。                                                                              |
| UX スコアカード                                  | いいえ                  | 応答から提案やソリューションは生まれません。                                                                              |
| アンケート（多肢選択、ランキング、スコアリング）    | いいえ                  | 応答から提案やソリューションは生まれません。                                                                              |

### IP Assignment を提示すべきかを判断する責任者は誰か

リサーチプロジェクトの DRI が、IP Assignment を提示する必要があるかを判断する責任を負います。これは、DRI がリサーチ上の問いや、リサーチプロジェクトで望まれるアウトプットに最も近い知識を持っているためです。リサーチプロジェクトの DRI が IP Assignment を提示すべきかを判断できない場合、いつでも [#legal](https://app.slack.com/client/T02592416/C78E74A6L) に問い合わせて確認できます。

### IP Assignment の提示方法

使用するリサーチツール（例: Qualtrics、UserTesting、Respondent）によって、IP Assignment の提示方法が決まります。以下の 2 つのオプションのいずれかを選択しますが、どちらの場合もアンケート、スクリーナー、またはメールの冒頭で IP Assignment を表示します。

1. **ステートメント** - これはユーザーの操作を必要としないステートメントです。リサーチ活動への参加行為自体が IP Assignment への同意を構成します。
     - `By participating in this, and any future, research activities with GitLab, you acknowledge that GitLab Inc. will retain all intellectual property rights in any suggestions, ideas, enhancement requests, feedback, or other recommendations you provide which are hereby assigned to GitLab Inc.`
1. **質問** - これは IP Assignment への同意を示すために、参加者が「はい」を選択する必要のある質問です。「はい」を選択すればリサーチを続行し、「いいえ」を選択すれば参加できません。
     - `I agree that by participating in this, and any future, research activities with GitLab, GitLab Inc. will retain all intellectual property rights in any suggestions, ideas, enhancement requests, feedback, or other recommendations I provide which are hereby assigned to GitLab Inc.`

       `[ ] Yes`
       `[ ] No`

### よくある質問

- **質問:** 私のリサーチでは参加者からのコードコントリビューションが生まれます。聞くべき ICLA の質問は何ですか？
- **回答:** 以下が聞くべき正確な質問です。ステートメント内のアクティブリンクに注意してください。

  - `Any code contributions you make as part of your participation in this research activity are made subject to [GitLab's Individual Contributor License Agreement](https://docs.gitlab.com/legal/individual_contributor_license_agreement/).`

       `[ ] I accept the terms of GitLab's Individual Contributor License Agreement.`
       `[ ] I do not accept the terms of GitLab's Individual Contributor License Agreement.`

- **質問:** ブラインドスタディの実施を予定しています。IP Assignment を提示する必要がありますか？
- **回答:** ブラインドスタディの参加者が応答に提案やソリューションを含めることが予想される場合、IP Assignment を提示する必要があります。この要件によりブラインドスタディの実施が妨げられる場合があります。ブラインドスタディがサードパーティのベンダーによって実施される場合、そのベンダーは (i) ベンダーとリサーチパネル参加者との間のエンドユーザー利用規約、(ii) ベンダーと GitLab の間のベンダー契約に、適切な IP 譲渡を含めている可能性が高いです。指定のベンダーについて適切な IP 譲渡が設定されているか確認するために、[#legal](https://app.slack.com/client/T02592416/C78E74A6L) に問い合わせてください。

- **質問:** GitLab 以外のユーザーは別の扱いをしますか？
- **回答:** いいえ。同じガイドラインが適用されます。

- **質問:** 参加者が匿名の場合、特別な配慮はありますか？
- **回答:** いいえ。同じガイドラインが適用されます。

- **質問:** これらの IP Assignment オプションは Qualtrics アンケートの質問ライブラリに含まれていますか？
- **回答:** はい。Qualtrics のアンケート内から IP Assignment オプションにアクセスするには、以下の手順に従います: (1) アンケート質問を作成、(2) "..." の中から「ライブラリから置き換え」を選択、(3) 「UX Research & Product」ライブラリを選択、(4) 「Question Library」を選択、(5) 使用したい IP Assignment オプション（「IP Statement」、「IP Assignment Question」、または「Individual Contributor License Agreement (ICLA)」）を選択、(6) 「Import」を選択します。
