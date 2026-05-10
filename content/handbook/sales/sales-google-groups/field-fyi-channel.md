---
title: "Field-FYI Slack チャネル"
description: "GitLab の公式フィールドアナウンスチャネル"
upstream_path: /handbook/sales/sales-google-groups/field-fyi-channel/
upstream_sha: 1e195b58b9f249ff10bd0e705106c320fee86141
translated_at: "2026-05-11T00:00:00Z"
translator: claude
stale: false
---

#field-fyi チャネルは、公式のフィールドアナウンスチャネルです。これは、Field と Company Leadership および Field Operations に権限レベルを制限した read-only チャネルです。このチャネルの目的は、ニュースとアナウンスを #sales (そこでは簡単に埋もれてしまう可能性がある) から引き出し、効率化されたチャネルに統合することです。誰でもこのチャネルの投稿に反応してコメントすることができ、フィールドチームメンバーは最新の情報を得るためにこのチャネルにスターをつけることが推奨されます。一般的なフィールドチャネルについては、#sales と #customer-success をご覧ください。

## ベストプラクティス

1. read-only チャネルはノイズを減らすのに役立ちますが、それでもチームを飽和させないために **1 日に 3 つを超えるアップデートを投稿しない** ことを目指します。(投稿するものがない日もあるでしょう。それはプラスです!)
   1. すでに 3 投稿の上限に達している場合は、皆さんのアップデートが翌営業日まで待てるかどうかを検討してください。
2. チームからのフィードバックは、すでに、読む量/ブロックテキストが多すぎることを強調しています。Slack はそれからの一服であるべきです。Slack のアップデートはできるだけ短く消費可能に保つことを目指すべきです – ベストプラクティスとして 100 語以下。
   1. 可能であれば、キーポイントを要約するために番号付きリストを使用してください。
   2. 追加のコンテキストが必要な点については、関連するドキュメンテーションへリンクしてください。アップデートでハイライトに当たり、ドキュメンテーションがそこから引き継ぐようにしましょう。
   3. 投稿に複数のリンクプレビューが付随することを避けます。ポイントを伝えるのに価値のあるものだけを残します。他はすべて削除します。(すべて削除しても OK です。)
3. すべての #field-fyi メッセージには、承認されたフォーマットのヘッダーが含まれているべきです。詳細は以下の [#field-FYI Post Headers](/handbook/sales/sales-google-groups/field-fyi-channel/#field-fyi-post-headers) セクションをご覧ください。
4. field-fyi チャネルの周辺的なゴールは、#sales や #customer-success などの他のチャネルのノイズを減らして、それらをより簡単に消費可能にすることです。その結果、このチャネルは、重要なフィールドアナウンスのための Slack の単一の真実の情報源であるべきです。可能であれば他のチャネルへのクロスポストを避けてください。これはより多くのノイズを生み出し、チャネルの目的に反します。

## #field-fyi 投稿ヘッダー

チームメンバーのフィードバックに基づいて、各 #field-fyi 投稿には、チームメンバーがオーディエンス、トピック、緊急度/アクションのタイプを素早く識別するのに役立つ太字のヘッダーがあります。ヘッダーは次のフォーマットに従います: `[AUDIENCE] | [TOPIC] | [TYPE] | [URGENCY]`。アナウンスをリクエストする際にこのヘッダーに含める内容とそのフォーマット方法に関する手順は、[Field announcement request issue template](/handbook/sales/field-communications/#requesting-field-announcements) で見つけることができます。

1. オーディエンス
   - All Field (Sales, CS, Channel & Alliances, Ops)
   - All Sales (ENT & COMM)
   - ENT Sales
   - COMM Sales
   - Customer Success
   - Channel Team
   - Alliances Team
   - Field Operations
2. トピック
   - Operations
   - Enablement
   - Competitive Intelligence
   - Customer Reference
   - Product Marketing
   - Marketing
   - Product
   - Pricing & Packaging
3. タイプ
   - New mandatory enablement
   - New optional enablement
   - System Changes/System Updates
   - Bookings Update
   - New Resource
   - Survey
   - Process Change
   - Roadmap Update
   - Org Announcement
4. 緊急度
   - 🚨 Action Required - 緊急、期日付きでアクションが必要
      - 例: 必須イネーブルメントのローンチ
   - 🧠 Need to Know - 緊急、アップデートはオーディエンスのワークフロー/プロセスに直接影響する
      - 例: Sales Ops のプロセス変更
   - 📊 Feedback Requested - それほど緊急ではない、アクションがリクエストされる (長いリードタイムの期日付き、または期日なし) が必須ではない
      - 例: Product 組織からの調査
   - 👀 Review - それほど緊急ではない、オーディエンスのワークフロー/プロセスに直接的または重大な影響を与えない
      - 例: 新しい顧客のストーリーまたは新しい競合リソース

## Q&A

**#sales 向けと #field-fyi 向けの投稿の例は何ですか?**

1. #sales 投稿の例: 一般的なチームの質問、ミーティングのリマインダー、チームメンバーからの一般的なチャッター、時間に敏感ではないアップデート/リソース。
2. #field-fyi 投稿の例: CRO からのアップデート、注目すべきプロセス変更、重要かつ時間に敏感なリソース (イネーブルメント、セールスオペレーション、マーケティングなど)、時間に敏感なピープルオプスの情報。

**#field-fyi と #cro チャネルの違いは何ですか?**

1. #cro チャネルは、ビジネス関連のトピックについて、CRO から/CRO へのアナウンスとコミュニケーションのためです。例には、認識、観察、CRO のコールトゥアクションが含まれます。
2. まれなケースでは、CRO から来るプロセス関連のアップデートが #field-fyi に投稿されます。
3. 再度 #company-fyi で取ったフォーマットを暗示すると - CEO は、チーム/フィールドの質問とコミュニケーションするために使用する #ceo チャネルを依然として持っていますが、組織全体の投稿は #company-fyi に行きます。

**#field-fyi 投稿を Field Communications に通す必要がありますか?**

1. はい! Field Comms の主な責任は、フィールドチームが最も効果的かつ効率的な方法で情報を得るようにすることです。彼らは皆さんと協力して、最適なタイミングとマルチチャネルコミュニケーションプランで、皆さんのアナウンスから最大のリーチを得るためのリソースとしてここにいます。

**#field-fyi にふさわしいアップデートがあるが、投稿権限がない人がいる場合、どうやってニュースを共有できますか?**

1. 一回限りのリクエストの場合、#field-enablement-team に連絡するか、[Field announcements request process](/handbook/sales/field-communications/#requesting-field-announcements) を使用してリクエストするアナウンスを要約した簡単な Issue を作成してください。
2. チームメンバーが繰り返しベースでアップデートを共有する能力を必要とする場合、[Field Enablement team](/handbook/sales/field-operations/field-enablement/) と直接協力して投稿権限について議論できます。
