---
title: センシングメカニズム
upstream_path: /handbook/product/product-processes/sensing-mechanisms/
upstream_sha: a15c0bfc1dd89fbbe4aff8969605eb60ab63f1ca
translated_at: "2026-07-17T06:29:12+09:00"
translator: codex
stale: false
lastmod: "2026-07-16T17:32:42-03:00"
---

## センシングメカニズムとは？

迅速にイテレーションする能力は私たちの効率の指標ですが、有効性も同じくらい重要です。プロダクトマネージャーとして、あなたは私たちが正しく作業することだけでなく、正しいことに作業することにとって極めて重要です。それを行うには [適切に優先順位付け](/handbook/product/product-processes/#prioritization) します。あなたの優先順位付けの意思決定は、それを行うコンテキストを十分に理解することで強化されます。

優先順位付けの意思決定に活用できるインプットの量に制限はありません。これらのメカニズムを 3 つのリストに整理しました。1 つは主にユーザーからのフィードバックをセンスするもの、1 つは主にバイヤーからのフィードバックをセンスするもの、もう 1 つはバイヤーまたはユーザーを表す可能性のある内部で生成されたフィードバックをセンスするものです。新しい PM の方は、これらのリストを、十分なコンテキストを維持するためにどこに接続すべきかのガイダンスとして考えてください。

2020 年、私たちは [GTM と R&D センシングメカニズム調査を実施](https://gitlab.com/gitlab-com/Product/-/issues/1540) し、チームメンバーが以下にリストされているセンシングメカニズムをどのように評価しているかを把握しました。私たちは、センシングメカニズムがどれだけ効率的だと感じたかについての回答（1-5）を、センシングメカニズムがどれだけ効果的だと感じたかについての回答（1-4）に掛けることで、この価値を計算しました。以下のリストは、すべての回答者の平均値でランク付けされています。

## タイプ別のセンシングメカニズム

### ユーザー

1. 顧客ディスカバリーミーティングでの探りを入れる質問
1. [Developer Relations チーム](/handbook/marketing/developer-relations/) と一緒に当社のコミュニティと関わり、コミュニティが生成した Issue やアイデアを [トリアージ](https://docs.gitlab.com/development/contributing/issue_workflow/#issue-triaging) する
1. アップボートが多い Issue のトップをレビューする
1. 顧客と直接、また [customer](https://gitlab.com/groups/gitlab-org/-/issues?scope=all&utf8=%E2%9C%93&state=opened&label_name%5B%5D=customer) ラベルを介してエンゲージする
1. [Experience research](/handbook/upstream-studios/experience-research/) からの [結果](https://gitlab.com/gitlab-org/uxr_insights) を [要求](/handbook/upstream-studios/experience-research/) し、分析する。
1. 以前のユーザーインタビューのまとめは [ユーザーインタビュープロジェクト](https://gitlab.com/gitlab-com/user-interviews) にあります
1. すべての UX リサーチは [Dovetail](https://dovetailapp.com/) で文字起こしされています

### バイヤー

1. セールスサポートミーティングでの探りを入れる質問
1. Customer Success が指定したトップ Issue をレビューする
1. [Customer Requested Issues (Product) ダッシュボード](https://10az.online.tableau.com/#/site/gitlab/workbooks/2015827/views) を使用して顧客から最も要求されている Issue をレビューし、ガイダンスとして [Customer Issues Prioritization Framework ハンドブックページ](/handbook/product/product-processes/customer-issues-prioritization-framework/) を使用する
1. 競合分析の一環として、同じ領域のオープンソースプロジェクトを追跡することも重要です。これらの [オープンソースオプションを評価](/handbook/product/product-processes/#evaluating-open-source-software) して、興味深い機能やアイデアだけでなく、当社製品に統合する可能性も検討できます
1. セールスコールとデモの [Chorus 文字起こし](/handbook/business-technology/tech-stack/#chorus)（[ハウツー動画 - 非公開](https://www.youtube.com/watch?v=5LaxjZ31250)）
1. Win/Loss レポートをレビューする
1. Customer Success チームが管理する、Salesforce 上に構築された [Gainsight](https://www.gainsight.com/) を使った顧客健全性データについて学ぶ
1. [QBR](/handbook/sales/qbrs/) に出席し、QBR のサマリー／ハイライトを消費する

### マーケット

1. [競合](/handbook/marketing/brand-and-product-marketing/product-and-solution-marketing/competitive-intelligence/) および [市場評価](/handbook/product/product-processes/#analyst-engagement) を維持する。GitLab の Orit Golowinski の Product League でのプロダクトマネージャー向け競合分析を議論したこの [素晴らしい動画](https://www.youtube.com/watch?v=Um9teDD6jt8&feature=youtu.be&t=300) をご覧ください。
1. カテゴリエピックの欠落している [機能](https://about.gitlab.com/features/)（競合状況セクション）をモニターし、維持する
1. 所有するカテゴリの [方向性](https://about.gitlab.com/direction/) ページをモニターし、維持する
1. 競合のブログを購読して、彼らが何をリリースしているかを認識することがここで役立ちます
1. 関連する [アナリストレポート](/handbook/marketing/brand-and-product-marketing/product-and-solution-marketing/analyst-relations/#accessing-analyst-reports) をレビューする
1. [競合と市場のコンテンツレビュー](https://gitlab.com/gitlab-com/Product/-/blob/main/.gitlab/issue_templates/Product-Competitive-Content.md) のハイライトを消費する
1. 関連する [アナリストレポート](/handbook/marketing/brand-and-product-marketing/product-and-solution-marketing/analyst-relations/#accessing-analyst-reports) をレビューする
1. アナリストと会い、セクションとステージの方向性とビジョンを確認する
1. 競合のウィンとロスに定期的に注意を払う

### 社内

1. 各 PM は、戦略とプランについて議論するために、[ステージグループの安定したカウンターパート](/handbook/product/categories/) と定期的な会話を持つべきです。この議論は、GitLab Unfiltered [YouTube](/handbook/marketing/marketing-operations/youtube/) チャンネルを通じて会社と共有してください。PM は、次の 3 つのマイルストーン、1 年間のプラン、戦略、関連する OKR（ステータス付き）を共有することで、全員がフィードバックを提供できるようにすべきです。
1. 機能のドッグフーディングのポテンシャルを改善するために社内顧客と対話する
1. 四半期ごとの部門横断 [方向性](/handbook/product/product-processes/#section-and-stage-direction) レビュー
1. トレンドの変化や変更を [パフォーマンス指標](https://internal.gitlab.com/handbook/company/performance-indicators/product/) でレビューする
