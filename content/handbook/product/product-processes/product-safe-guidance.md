---
title: プロダクトマネージャー SAFE ガイダンス
upstream_path: /handbook/product/product-processes/product-safe-guidance/
upstream_sha: 1e195b58b9f249ff10bd0e705106c320fee86141
translated_at: "2026-05-13T12:00:00Z"
translator: claude
stale: false
---

## 概要

GitLab プロダクトマネージャー向けのこのガイドは、[Regulation FD トレーニング](https://levelup.csod.com/samldefault.aspx?ouid=1&returnUrl=%252fDeepLink%252fProcessRedirect.aspx%253fmodule%253dlodetails%2526lo%253d35f0e6fe-5264-4c07-8497-7e13a695e581) を明確化し、拡張するものです。

### このページへの変更

このページを編集するには、マージリクエストを作成し、変更したい内容とその理由の説明を追加してください。`product operations`、`prodops:release`、`product handbook` のラベルを追加してください。コラボレーションと承認のため、Product Operations の DRI／メンテナー `@fseifoddini` を Reviewer として追加してください。Product Operations が対応不可で、かつトピックが時間に敏感な場合は、コラボレーションと承認のため、メンテナー `@gweaver` を追加してください。

このページの内容は Legal チームのガイダンスと整合し続ける必要があるため、変更はメンテナーのいずれかによって承認される必要があることに注意してください。

## 一般ガイドライン

GitLab Legal は、チームメンバーがどの情報が社内専用で、どれが公開で共有できるかを判断するのに役立つ包括的なフレームワークを取りまとめました。[SAFE フレームワーク](/handbook/legal/safe-framework/) に従うことで、Regulation Fair Disclosure の要件を遵守できます。

### 不明な場合

このページをレビューした後も明確でない質問がある場合は、Slack #SAFE に連絡してください。#SAFE に投稿する際は Product Operations にタグ付けしてください。それによりこのページの維持に役立ちます。発見した内容に基づいて、必要に応じてハンドブックを更新するための MR を上げることも推奨します。

### 必須の免責事項

以下は、製品および特定の機能情報を持つ GitLab アーティファクトに適用されます。これらのアーティファクトには [SAFE](/handbook/legal/safe-framework/) 情報のみを含めるべきであることを忘れないでください。さまざまな免責事項へのリンクは、このページの [「役立つ法的リファレンス」](#helpful-legal-references) セクションにあります。

| トピック | 免責事項 | 法的レビュー必要 (Y/N) | その他の考慮事項 |
| ----- | ----------- | --- | --- |
| [3 年方向性動画](https://www.youtube.com/watch?v=2By7ipuQk1o) | Y | Y |  |
| [製品デモ、ウォークスルー動画](/handbook/product/product-processes/#recording-videos-to-showcase-features) | N | N | |
|ミーティング録画（例: チームコール、PM Weekly、レトロスペクティブ） | N | N | |
|[方向性ページ](/handbook/product/product-processes/#managing-your-product-direction) | Y | N | |
|一般製品ハンドブックページ | N | N | |
|エピック（非方向性） | N | N | |
|Issue（非方向性） | N | N | |
|エピック `~direction` | Y | N | |
|Issue `~direction` | Y | N | |
|マージリクエスト | N | N | |

### トピック／アクションに関する一般的なガイダンス

|トピック | 法的考慮事項| 法的レビュー必要 (Y/N) |
| ----- | ----------- | --- |
|買収 | Y | Y |
|価格変更 | Y | Y |
|新製品ローンチ（例: GL Dedicated）| Y | Y |
|収益への言及| Y | Y |
|ユーザーの機密性 | Y | Y |

### 重要な非公開情報（MNPI）

プロダクトマネージャーは仕事をするために MNPI へのアクセスを必要とすることがよくあります。GitLab は現在、公開取引会社であるため、情報／データを適切に管理できるよう、私たち全員が MNPI とは何かを理解することが重要です。以下は MNPI の例です:

- 過去または予測された売上、利益、その他の財務結果;
- 重要な新製品、新サービス、その他の製品開発;
- 重要な新契約またはパートナー、または重要な契約またはパートナーの喪失;
- GitLab のテクノロジーまたはビジネス運営に関する重要な開発;
- 重要な子会社または資産の合併、買収、または処分の可能性;
- 重要な新しい訴訟または規制問い合わせ、または既存の訴訟または問い合わせの開発;
- 重要なサイバーセキュリティインシデントまたはデータ侵害;
- 借入、資金調達、または資本投資の重要な開発;
- 財務状態、資産価値、流動性の問題の重要な変化;
- GitLab の取締役会、E-group、または上級経営陣の変更;
- 企業戦略の重要な変化;
- 会計方法の変更とライトオフ; および
- 株式発行、株式分割、または配当政策の変更。

例のリストは、重要な情報と見なされる可能性のあるものを網羅したリストではありません。何が重要な情報になる可能性があるかを判断することは、それぞれの特定の状況の事実と状況に依存します。

### 役立つ法的リファレンス

[製品免責事項テンプレート](https://docs.google.com/presentation/d/1hbf9AnFj_E5Y_Yg_WWoy_R0WJXZZLV0zWpMUHqnIs3c/edit#slide=id.ge2b39964d2_0_144)

### よくある質問

#### 製品の PI（パフォーマンス指標）は非公開とマークする必要がありますか？

はい。エピック、Issue、ハンドブックページのいずれであっても、PI は社内専用とし、[SAFE フレームワーク](/handbook/legal/safe-framework/) に従う必要があります。

#### SAFE であるものの実用例は何ですか？

共有しても安全なものと、社内専用のままにする必要があるものの例:

| 状況 | 分類 | 理由 |
| --- | --- | --- |
| [Issue でグループの MAU を公開で議論する](https://gitlab.com/gitlab-org/gitlab-vscode-extension/-/issues/386)| SAFE ではない | MAU の数値を公開で開示することは避けるべきです |
| [新規／潜在的な製品のパフォーマンス指標を公開で議論する](https://gitlab.com/gitlab-org/gitlab/-/issues/238056)| SAFE | 実際のデータ（数値／値）が参照または公開されない限り、PI を公開で議論できます |

#### Legal からのレビュー要求

Legal からのレビューが必要な場合は、Slack の _#SAFE_ チャンネルでピングしてください。

#### 免責事項付きで一般的に公開できるアーティファクト／アクションは何ですか？

上の表を参照してください。免責事項を必要とする動画を録画していて、スライドデッキを使用していない場合は、追加のポストプロダクション作業を避けるために、代わりに動画の冒頭で免責事項を口頭で述べてもよいです。

#### 公開 Issue で特定の計装データを共有するときにどのような制限がありますか？

計装データが [機密](/handbook/legal/safe-framework/#sensitive)、[財務](/handbook/legal/safe-framework/#financial)、または [社内専用](/handbook/communication/confidentiality-levels/#internal) データを含まない限り、制限はありません。

#### 公開アーティファクトに含めることができるサードパーティ素材は何ですか？

サードパーティ素材（画像、図、引用など）の使用に関するガイドラインは準備中で、準備ができ次第ここにリンクされます。

#### 公開アーティファクトに含めることができるサードパーティの会社名と製品名、ロゴは何ですか？

[サードパーティ商標利用ガイドライン](/handbook/legal/policies/product-third-party-trademarks-guidelines/) は、GitLab（製品）におけるサードパーティ商標の使用をカバーし、GitLab に新しいサードパーティロゴを追加するためのプロセスを示しています。

[このアドバイス](https://gitlab.com/groups/gitlab-com/marketing/strategic-marketing/-/epics/321#note_558193816) は、比較広告の文脈でのサードパーティ商標の使用をカバーしています。

#### 計画 Issue は機密にすべきですか？もしそうなら、キックオフ動画も非公開にすべきですか？

一般的に、Issue と動画は公開のままにしてください。投資家にとって興味深い可能性のある Issue は、公開で開示されるまで非公開にしてください。これらの詳細が公開で利用可能になる前に、収益やその他の重要情報を含む公開動画を作成しないでください。
投資家、アナリスト、または投資機関に届く可能性のある非公開 Issue は、違反になる可能性が高いです。

#### ソーシャルメディアの投稿で $tag を使うことは避けるべきですか？

`$cashtags` は会社の財務関連の何かを参照するためによく使われます（[例](https://twitter.com/SoFi/status/1425911366313906177)）。承認された公開チャンネルですでに開示・配布された財務情報を参照またはリンクするためにこの記号を使うことは何も問題ありません。例えば、会社の公開ウェブサイトに公開されている年次または四半期報告書へのリンクなど。

情報が SAFE でない場合は、リンクしたり、公開で共有したりしないでください。

#### 重要と見なされる情報の定義を提供できますか？

[SAFE](/handbook/legal/safe-framework/) ハンドブックページを参照することが良い出発点です。それでもまだ不明な場合は、[#legal](https://slack.com/app_redirect?channel=C78E74A6L) で Legal に連絡してください。誰かが喜んでお手伝いします。
