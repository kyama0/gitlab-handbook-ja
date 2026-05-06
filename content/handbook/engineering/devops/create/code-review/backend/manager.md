---
title: "Create:Code Review BE エンジニアリングマネージャーの責務"
description: Create:Code Review BE エンジニアリングマネージャーの責務とリソース一覧
upstream_path: /handbook/engineering/devops/create/code-review/backend/manager/
upstream_sha: 81a617744130f76604f641d4483828edd0d60d2f
translated_at: "2026-04-28T10:21:26Z"
translator: claude
stale: false
---

[GitLab のバックエンドエンジニアリングマネージャー職](/job-description-library/engineering/development/management/engineering-manager/)は、幅広い責務を包括する刺激的でダイナミックなポジションです。優秀なエンジニアチームのリードと管理に加え、プロジェクトを最初から最後まで監督し、すべてが円滑に進み高い水準を満たすことを確認します。エンジニアリングマネージャーとしては、採用活動に積極的に参加してチームを形成する機会もあります。この役割の重要な側面の一つは、OKR（目標と主要な結果）を通じて野心的な目標を設定し進捗を測定することで、成功への明確なロードマップを提供することです。さらに、異なる部門やチーム間のコラボレーションを促進することは、シームレスで効率的なワークフローを確保するために不可欠です。これはリーダーシップ、プロジェクトマネジメント、チームビルディングの最良の要素を組み合わせた多面的な役割であり、毎日多様で刺激的な課題に満ちています。

このページでは、Create:Code Review バックエンドエンジニアリングマネージャーの責務とリソースの一部を記載します。

## 人材管理

### タレントアセスメント

タレントアセスメントは[定期的に](https://theloop.gitlab.com/home)実施されます。

## マイルストーン計画

### マイルストーンスケジュール

以下は、エンジニアリングマネージャーがマイルストーン全体を通じて行う活動です。

リリースは[毎月第3木曜日](/handbook/engineering/releases/monthly-releases/#monthly-release-schedule)に行われます。作業を完了させるためのカットオフ日はその前の金曜日を使用します。[リリースプロセスの詳細はこちら](/handbook/engineering/releases/)をご覧ください。

毎月1日に、次のマイルストーン向けの新しい[計画 Issue](https://gitlab.com/gitlab-org/create-stage/-/issues/?sort=created_date&state=opened&label_name%5B%5D=group%3A%3Acode%20review&label_name%5B%5D=Planning%20Issue)が自動的に作成されます。さまざまなプロジェクト / トピック（例: Rapid Diffs、CLI、バグ）のスレッドを作成し、バックエンドチームにタグ付けして、来るマイルストーン計画に含めるべきアイデアを募ります。

### 計画週の活動

マイルストーンの最終週は次のマイルストーンの計画週です。この週とその翌週に行うタスクは以下のとおりです。

| 曜日 | アクション |
|-----|--------|
| 月 | 次のマイルストーンの稼働率見積もりが揃っているか確認します。すべての PTO が入力されているかチームメンバーに確認します。[キャパシティ計画スプレッドシート](https://docs.google.com/spreadsheets/d/1YMnFy-kQySXs7GCQ-hnnM_oB0Ur9us5mXh8GkdjNgaM)を使用し、計画 Issue に稼働率見積もりを追加します。 |
| 月 | チームメンバーにどの Issue がスリップしそうか / 確実にスリップするかを確認し、次のマイルストーンで作業を完了させるために必要な合計ウェイトを見積もることで、スリップを見積もります。 |
| 月 | PM と Code Review のフロントエンド EM との最初の計画ミーティングを開催し、マイルストーンの優先順位を合わせ、スリップに関する初期期待値を設定します。 |
| 木 | PM と Code Review のフロントエンド EM との最終計画ミーティングを開催し、利用可能なキャパシティに収まるマイルストーン向けの Issue を選定します。 |
| 金 | キャパシティに基づいてチームメンバーに Issue をアサインします。 |
| 金 | すべての Issue に `Deliverable` と `workflow::ready for development` ラベルを付けます。 |
| 金 | 計画 Issue にアサインされたすべての Issue の概要をコメントとして投稿します。 |
| - | マイルストーン終了 |
| 月 | 機能・バグ・メンテナンスの割合内訳を計算し、現在の計画 Issue に追加します。 |
| 火 | 前のマイルストーンからオープンになっているすべての Issue をレビューし、適切なマイルストーンに移動します。 |

### キャパシティ計画

キャパシティ計画には、Issue のウェイト付けの軽量なシステムを使用します。これらのウェイトは、サイクル内でスケジュールされた作業量がチーム全体および個人にとって適切であることを確保するのに役立ちます。あるサイクルの「ウェイト予算」は、チームの最近のアウトプットと、各エンジニアの今後の稼働状況を基に決定されます。

[物事は思ったより時間がかかるもの](https://erikbern.com/2019/04/15/why-software-projects-take-longer-than-you-think-a-statistical-model.html)なので、Issue がウェイト以上の時間を要しても問題ありません。ウェイトは集計して使用することを意図しており、Issue に関する背景知識のレベルによって、ある人が1日でできる作業が別の人には1週間かかることもあります。**これは明示的に許容され、期待されることです。**精度を高めるよう努めるべきですが、あくまで見積もりであることを理解してください！見積もりが正確でない場合や、当初の想定より難しいことが判明した場合はウェイトを変更してください。ウェイトを変更した理由を示すコメントを残し、EM にタグ付けしてウェイト付けへの理解を深め、継続的に改善できるようにしてください。

#### ウェイト

使用するウェイトは以下のとおりです。


<!-- include omitted: includes/engineering/create/weight_table.md (no localized version under content/ja/) -->


5より大きいものは、可能であれば分割してください。

セキュリティ Issue は、通常上記テーブルで示されるものより1段階高いウェイトが付けられます。これは[パッチリリースプロセス](https://gitlab.com/gitlab-org/release/docs/blob/master/general/security/patch.md)の特別な厳密さを考慮するためです。特に、修正は通常より慎重な検討が必要であり、複数のリリースにわたってバックポートする必要もあります。

### 稼働率

新しいリリース開始の約5〜10営業日前に、EM はチームの「稼働率」の算出を開始します。透明性のために、これは[キャパシティ計画スプレッドシート](https://docs.google.com/spreadsheets/d/1YMnFy-kQySXs7GCQ-hnnM_oB0Ur9us5mXh8GkdjNgaM)に記録されます。稼働率を決定する際に考慮される事項は以下のとおりです。

- 予定されているトレーニング
- 予定されている休暇 / 祝日
- 予定されているオンコールシフト
- 別チームの成果物に費やされる可能性のある時間

稼働率は _（利用可能な営業日 / リリースの営業日）× 100_ で計算されるパーセンテージです。

すべての個人コントリビューターは、「ウェイト予算」7からスタートします。これは（過去のデータを基に）合計7ウェイトポイント分の Issue を最大限完了できることを意味します。その後、稼働率のパーセンテージに基づいて、ウェイト予算が個別に減らされます。例えば、稼働率が70%の場合、ウェイト予算は5になります。

プロダクトはチームの合計ウェイト予算に基づいて Issue に優先順位を付けます。

## プロジェクト管理

### サービスレベル目標のモニタリング

エンジニアリングマネージャーは、報告されたバグが[深刻度 SLO](/handbook/product-development/how-we-work/issue-triage/#severity-slos)で定義された目標期間を超えないよう、積極的な対策を講じます。

[バグトリアージボード](https://gitlab.com/groups/gitlab-org/-/boards/2546239)と[トリアージレポート](https://gitlab.com/gitlab-org/quality/triage-reports/-/issues/?sort=created_date&state=opened&label_name%5B%5D=triage%20report&label_name%5B%5D=group%3A%3Acode%20review)を使用して、すべてのオープンバグをレビューできます。

### 優先度の高い Issue

即座の対応が必要な Issue の分類があります。信頼性、セキュリティ、または高優先度の Issue がそれに当たります。エンジニアリングマネージャーはこれらの Issue を定期的に、通常は週に複数回監視する必要があります。

[Code Review 優先度 Issue ボード](https://gitlab.com/groups/gitlab-org/-/boards/4778535)は、これらの Issue を一か所で確認するための手段です。
