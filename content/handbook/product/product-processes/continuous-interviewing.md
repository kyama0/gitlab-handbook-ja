---
title: "継続的インタビュー"
description: "継続的インタビューの目的と、その設定方法について"
upstream_path: /handbook/product/product-processes/continuous-interviewing/
upstream_sha: 8451bcaa23ef826bedc5422c87ee89de121dd85b
translated_at: "2026-07-14T06:42:18+09:00"
translator: claude
stale: false
lastmod: "2026-07-13T19:21:22+01:00"
---

[継続的インタビュー](https://medium.com/@ttorres/continuous-interviewing-the-key-to-successful-product-teams-6bf63bfc1936) は、プロダクトマネージャー (PM) がユーザーから継続的に学び、プロダクトディスカバリーに活用できるインサイトを発見できるプロセスです。これらのインタビューは、特定の仮説やリサーチ要求を中心に組み立てられていないため、ほとんどの場合同じスクリプトに従います。ただし、PM は必要に応じてインタビューの潜在的な焦点をシフトし、特定のトピックをより深く掘り下げることができます。

継続的インタビューはすべての GitLab チームメンバーに開かれています。PM はチームの Slack チャンネルで今後のインタビューについて通知する必要があります。グループ内のすべてのチームメンバーおよび安定したカウンターパートが、時折インタビューに参加し、顧客の問題を直接聞く経験を持つことが推奨されます。

継続的インタビューの実践を開始する前に、PM は自分の製品領域に関連する独自のインタビュースクリプトを作成する必要があります。プロダクトマネージャーは UX リサーチや [このプロジェクト](https://gitlab.com/gitlab-com/user-interviews/-/issues) の例を参考にスクリプトを作成できます。

顧客と話す際、PM はこれらの [インタビューのヒント](/handbook/product/ux/experience-research/facilitating-user-interviews/#tips-for-interviewing) を参照し、ユーザーとプロダクトチームにとってこれらの会話が成功した経験になるよう支援する必要があります。

顧客の同意のもと、インタビューは録画され、[Dovetail](/handbook/product/ux/dovetail/) に追加され、メモとトランスクリプトは [今後の参照のためにタグ付け](/handbook/product/ux/dovetail/#tagging-data-in-dovetail) されます。

時には、別のツール (例: Google スプレッドシート) を使って [機会・解決策ツリー (opportunity solution tree)](https://www.producttalk.org/2016/08/opportunity-solution-tree/) を構築することもあります。

チームメンバー間の学びを促進するために、PM は各インタビュー後にインタビューサマリーをチームと共有します。形式は PM 次第です。推奨される形式は以下のとおりです:

- ビデオ録画とインタビューメモを含む Dovetail のタグ付けプロジェクトを共有する
- インタビューテンプレートを使ったサマリー Issue を作成し、テンプレートを使って実施した各インタビューに対してコメントを追加する (例のプロジェクトへのリンク)。そうすれば、内部でメモを共有したい場合に特定のコメントへリンクできます。(例: [user interviews project](https://gitlab.com/gitlab-com/user-interviews/-/issues) 内の Issue)
- PM とプロダクトデザイナー (PD) の間で機会ツリーについてのビデオディスカッションを作成する

#### インタビュー対象顧客の見つけ方

通話に応じてくれる顧客を見つけるアプローチの非網羅的なリスト:

- Issue (作成、コメント、投票) でアクティブなユーザーに返信する
- Medium、Twitter、Hacker News で関連トピックをフォローし、自分の製品領域について書いている著者にアプローチする
- カスタマーサクセスチームに対して、顧客通話に開いていることを継続的に伝える。ただし、これらは顧客インタビューであり営業通話ではないことを明確にする。`#customer-success` Slack チャンネルを使うか、[CSM プロジェクト Issue](https://gitlab.com/gitlab-com/customer-success/tam/-/issues/new?issueable_template=Product%20Engagement) を開く
  - 月次のカスタマーサクセスマネージャー (CSM) ミーティングに参加し、Google ドキュメントのアジェンダ内で継続的インタビューのリクエストを行う
  - CSM とコーヒーチャットを設定して、継続的インタビューのリクエストについて話し合う
- [UX Research を通じた参加者の募集](/handbook/product/ux/experience-research/recruiting-participants/) のための追加リソース

#### 継続的インタビューを主導するためのヒント

- PM、PD、エンジニアリングチームを含む、チームのニーズに最も合うようプロセスを変更する
- すべての継続的顧客インタビューデータは Dovetail に保管する必要があります。追加情報 (サマリー、テンプレートなど) は、データが Dovetail プロジェクトにつながっていれば、機密 Issue に保管できます。
- 顧客の [個人を特定できる情報 (PII)](/handbook/support/workflows/pii_removal_requests/) を Dovetail や GitLab Issue から削除し、チームメンバーがリサーチプロセスの一部として特定の個人を特定できないようにする。
  - 例: ユーザーの姓名やユーザーが働いている会社名を含めないようにする。代わりに、職業名、ペルソナタイプ、または参加者番号 (P6) で参照できる。
- 顧客リサーチでは、参加者の時間に対して [補償する](/handbook/upstream-studios/research-operations/participation-gratuities/#incentive-qualification) オプションがあります。感謝の小さなトークンを提供することは、ユーザーの時間を私たちが大切にしていることを示すベストプラクティスです。
