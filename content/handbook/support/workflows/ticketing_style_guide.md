---
title: チケッティングスタイルガイド
category: Handling tickets
subcategory: Writing responses and handling feedback
description: チケット返信の構成に関するガイドライン。
upstream_path: /handbook/support/workflows/ticketing_style_guide/
upstream_sha: c8fa138220d8c6d69f811b17242d6d2f08e4e409
translated_at: "2026-05-08T04:02:00Z"
translator: claude
stale: false
lastmod: "2025-10-14T17:59:32+00:00"
---

## なぜチケッティングスタイルガイドが必要なのか

サポートチームの規模が拡大しても顧客体験の品質を維持するため、Zendesk チケットのスタイル付けや返信に関するベストプラクティスや提案を集約しました。

一貫性があれば、サポートエンジニアの誰もが見覚えのないチケットに飛び込んでも比較的素早く作業に取りかかれます。一貫性はスケールを可能にし、本ガイドが目指しているのもまさにこの一貫性です。

本ガイドの提案には、例外を認めるべきケースに出会うこともあるでしょう。それで構いません。

サポートチームの誰もが、本ガイドの提案に貢献したり修正を加えたりすることを歓迎します。ただし、特に経験を通じて運用方法がうまくいった、あるいはうまくいかなかったという理由を踏まえる場合は、その「なぜ」を必ず示してください。

## 可読性

1. 返信が 6 行を超える場合は、見出し（HEADERS）を使ってセクションに分割することを検討してください。例:

   ```text
   ### Logs analysis

   In reviewing your logs we've noticed the following highlights:
     1. ...
     2. ...
     3. ...

   ### Next steps

   It looks like you're hitting [this issue](issue-link)

   Let's try the following:
     1. Perform some action `A` followed by a `gitlab-ctl reconfigure`.
     2. If the output is `X`, then try `Y`.
   ```

   こうすることで、お客様や他のサポートエンジニアが探している情報を素早く見つけられるようになります。

1. お客様への返信を 3 通送るごとに、現在の課題に関する**公開向けの 1 行サマリー**を入れることを目指しましょう。例:

   ```text
   Thanks for providing all this info.

   ### Current Status

   So far we've established that you're facing a 500 error intermittently when loading an MR. This also seems to happen only for MRs with large diff content.

   ### More sections
   ```

1. 長文や複雑なチケットでは、より詳細なサマリーがとても役立ちます。例:

   ```text
   ### Problem
   - States what exact issues the customer is experiencing
   ### Context
   - Versions, recent changes to their instance, deployment type, etc.
   ### What we've ruled out
   - Useful when taking over an NRT
   ### Theories
   - Potential explanations of the problem
   ### My questions
   - My questions for further investigation
   ### Customer questions
   - Questions the customer wants answered
   ### Next steps
   - Questions/requests for the customer, things Support needs to do, etc.
   ```

   こうすることで、お客様と自分の双方が問題に関する認識を一致させ続けることができます。

   また、他のサポートエンジニアがチケットに参加する際にも、文脈を効率的にキャッチアップできるようになります。

## 技術的な内容

1. お客様の問題に対する自分の理解を要約し、価値あるトラブルシューティングの方向性を追っているかを確認しましょう。お客様は 1 つの詳細や望む結果に意識を集中するあまり、確認すべき他の必要な情報を見落とすことがあります。お客様と自分の双方で、問題と進むべき道筋に関する共通認識を持てているかを確認することは非常に重要です。

1. `gitlab.rb` やその他不足している情報・ログを依頼することはあっても、返信がそれだけにならないようにしてください。なぜ追加情報を求めているのかを説明しましょう。例:

   ```text
   Would you please provide your `gitlab.rb` for all your nodes? Specifically, I'm interested in seeing your Redis configuration for each node.

   It is possible that you've configured the caching differently in each node, which could result in inconsistent behaviors such as what we're seeing in this case.
   ```

   こうすることで、お客様が自分でこの問題をデバッグする方法を理解しやすくなります。

   また、他のサポートエンジニアにとっても、提供されたデータから何を見ようとしていたのかを把握でき、次の返信以降もデバッグの方向性を一貫させることができます。

1. お客様にログを依頼するときは、問題の診断に必要だと思う分だけを依頼しましょう。例:

   ```text
   If the issue is reproducible and is not front-end related, ask for `gitlab-ctl tail`, if it's intermittent, ask for GitlabSOS.
   ```

   こうすることで、最小限のログファイルで済むためデバッグがしやすくなり、GitlabSOS が必要な場合を除いて、お客様に大きな GitLabSOS ファイルを分割してもらう手間も省けます。

1. お客様に複数の質問がある場合は、チケット全体で質問に番号を付けることを検討してください。例:

   ```text
   - Q1: What is your current version of GitLab?
   - Q2: What upgrade steps did you perform prior to this issue occurring?
   - Q3: Can you share your gitlab.rb file for review?
   ```

   こうすることで、必要な情報を整理しやすくなり、質問の繰り返しも避けられます。回答されていない質問があれば、`Can you help by providing the response to Q2?` のように直接参照して尋ねることができます。
