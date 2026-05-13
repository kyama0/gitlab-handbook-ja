---
title: "コモンスクリーナー: 複数のスタディで効率的にスクリーニングする方法"
description: "GitLab でリサーチスタディの参加者を見つけるためのコモンスクリーナー利用アプローチの概要"
upstream_path: /handbook/product/ux/experience-research/recruiting-participants/common-screener/
upstream_sha: 1e195b58b9f249ff10bd0e705106c320fee86141
translated_at: "2026-05-13T12:00:00Z"
translator: claude
stale: false
---

コモンスクリーナーは、複数のスタディにまたがる募集で同じ質問を使用するものです。これは、独自に募集を行うチームが、同じ種類の背景質問（共通タスク、業種、企業規模など）を使って参加者を特定する場合に実施できます。

特定のスタディでコモンスクリーナーを使用する各チームメンバーは、各質問について独自の包含基準を選択します。たとえば、あるスタディでは従業員 100 名未満の企業のユーザーが必要かもしれませんし、別のスタディでは 1,000 名以上の企業のユーザーが必要かもしれません（図 1 を参照）。各スタディは、企業規模に関する同じ共通質問に対して異なる包含基準を設定します。

![Common Screener Figure](/images/product/ux/ux-research/recruiting-participants/common-screener/CSfigure1.png)

上の図は、コモンスクリーナーのアプローチを使用して、同じ質問でさまざまなスタディに参加者をマッチングできることを示しています。この例では、100 人以上の企業からの参加者は、スタディに対して単一のスクリーナーが使われている場合はそのスタディから除外されるかもしれませんが、コモンスクリーナーアプローチを使う場合は別のスタディにマッチする可能性があります。これは、各スタディが企業規模に関する同じ質問に対して異なる包含基準を設定するために可能になります。この例では、コモンスクリーナーアプローチによって、JTBD の質問でキーとなるタスクを選んでもらい、異なるペルソナに該当する参加者をマッチさせることもできます。

コモンスクリーナーは Qualtrics の機能を活用して、スタディの包含基準と、共通質問への回答から得られる参加者プロファイルとの間でマッチングを行います。例にあるように、ハンドブックの JTBD タスクのリストを含む質問を入れて、各回答者のペルソナを特定するかもしれません。次に、その回答を使って、そのペルソナを探しているスタディとマッチングします。さらに、企業規模に関する質問と組み合わせて、異なる企業規模で同じペルソナを探しているスタディや、同じ企業規模で異なるペルソナを探しているスタディと回答者をマッチングできます。

このようなスクリーナーは、早期に計画されており、企業規模など、参加者間で類似の質問が使われるスタディに最適です。

### コモンスクリーナーを使うメリットは何ですか？

コモンスクリーナーには次のような効果があります:

- チームが募集に関するリソースをプールするのに役立つ
- DRI が四半期ごとに作成またはサポートする必要のある募集 Issue、謝礼 Issue、リサーチスクリーナー、募集プッシュの数を削減する
- あるスタディのすべての基準を満たさない参加者を、別のスタディに含めることを可能にする
- 各スタディの募集中に必要なコンテキストスイッチの量（たとえば、募集データベースへのアクセス回数）を最小限に抑える
- 参加者を見つけるために必要な労力を減らし（たとえば、同じソーシャルメディア投稿で複数のスタディをサポートできる）、見込み参加者への連絡数を減らす

### コモンスクリーナーがどのように使われたかの例はありますか？

Verify チームと Package チームは 2022 年初頭にコモンスクリーナーの最初の GitLab イテレーションに取り組みました。同じスクリーナーを使って 5 つの問題検証スタディで募集を行うことができました（詳しくは[こちら](https://gitlab.com/gitlab-org/ux-research/-/issues/1808)）。現在、同じスクリーナーで 2022 年後半に問題検証と解決策検証の両方のスタディで募集をサポートできるかを確認するためにこのプロセスを利用しています（詳しくは[こちら](https://gitlab.com/gitlab-org/ux-research/-/issues/1894)）。

パイロットは Verify チームと Package チームの User Personas に焦点を当てています:

- [Presley, Product Designer](/handbook/product/personas/#presley-product-designer)
- [Sasha, Software Developer](/handbook/product/personas/#sasha-software-developer)
- [Devon, DevOps Engineer](/handbook/product/personas/#priyanka-platform-engineer)
- [Sidney, Systems Administrator](/handbook/product/personas/#sidney-systems-administrator)
- [Sam, Security Analyst](/handbook/product/personas/#amy-application-security-engineer)
- [Rachel, Release Manager](/handbook/product/personas/#rachel-release-manager)
- [Alex, Security Operations Engineer](/handbook/product/personas/#alex-security-operations-engineer)

私たちのコモンスクリーナーでは、回答者をリサーチスタディとマッチングするために、次のようないくつかの重要領域に関する質問を使用しています:

- 企業規模
- 回答者の勤務先企業で採用されているさまざまな機能（たとえば Merge Trains）や製品（たとえば GitLab Dependency Proxy、JFrog Artifactory、Sonatype Nexus）
- 回答者が GitLab SaaS と Self-Managed のどちらを使用しているか、使用している GitLab 機能（たとえばマージリクエスト）
- どのタイムゾーンにいるか
- ターゲットのペルソナにマッピングするために使える共通のタスク

### コモンスクリーナーで使用される質問の例は何ですか？

主要タスクに関する質問は、コモンスクリーナーで使用できるものの好例です。同じ質問への異なる回答が、回答者を異なるスタディにマッチングするのに役立つからです。

複数のペルソナをカバーするリストから共通タスクを選んでもらうことで、リサーチスタディに含まれることを期待して、実際には実行していないタスクを選んでしまう回答者による回答バイアスを最小限に抑えることもできます。以下は、タスクベースの質問がどのように見えるかの例です:

> 次のうち、あなたの主な職務責任の一部であるものはどれですか？該当するものすべてを選択してください。
>
> - 効果的で共感的かつ効率的なユーザーエクスペリエンスのデザインをリードする
> - 製品デザインをアプリケーションコードに翻訳する
> - コードのデプロイ、ビルド、リリースを行う
> - 機能やバグ修正の実装のためにアプリケーションコードを書く
> - インフラストラクチャと構成を維持・スケーリングする
> - チームと協力してセキュリティ修正を実装する／セキュリティテストを実行する
> - パイプラインビルドを実行・テストする
> - リリースを調整・オーケストレーションする
> - セキュリティを強化するためのツールを構築・実装する

表 1。私たちのパイロットに含まれる各ユーザーペルソナに回答者をマッピングするのに役立つ、ハンドブックページからのタスクのリスト。

| User Persona | Differentiating Task |
| ------ | ------ |
| [Presley, Product Designer](/handbook/product/personas/#presley-product-designer) | Lead the design of an effective, empathetic and efficient user experience |
| [Sasha, Software Developer](/handbook/product/personas/#sasha-software-developer) | Translate product designs into code |
| [Devon, DevOps Engineer](/handbook/product/personas/#priyanka-platform-engineer) | Deploy, build and release code; Provide pipeline definitions and CI templates; Use code to implement features and bug fixes |
| [Sidney, Systems Administrator](/handbook/product/personas/#sidney-systems-administrator) | Maintain and scale infrastructure and configurations; Build servers deploy to them and/or help developers to do so|
| [Sam, Security Analyst](/handbook/product/personas/#amy-application-security-engineer) | Work with teams to implement security fixes; Run security tests and/or flag potential security issue |
| [Rachel, Release Manager](/handbook/product/personas/#rachel-release-manager) | Run and test pipeline builds; Automate pipelines; Coordinate teams across releases |
|  [Alex, Security Operations Engineer](/handbook/product/personas/#alex-security-operations-engineer) | Address security incidents; Build and implement tools to enhance security |

### コモンスクリーナーを使用するための要件はありますか？

はい、コモンスクリーナーアプローチを使用するには次の要件があります:

1. コモンスクリーナー経由で参加者を募集するすべての人は、コーディネーション Issue に関連付けられた同じ謝礼スプレッドシートを使用する必要があります。これは、スタディ間で重複した参加者を使用していないことを確認するのに役立ちます。
1. コモンスクリーナーを使用するすべての人は、コモンスクリーナーを使用したい各スタディに専用の募集リクエストを作成します。

### あなたのチームがコモンスクリーナーから恩恵を受けると考える場合、どのようなステップを踏むべきですか？

新しいコモンスクリーナーをセットアップしたい PM とデザイナーのためのステップは次のとおりです:

1. コモンスクリーナーのコーディネーション Issue テンプレートを使って、スクリーナーをコーディネートするための[Issue](https://gitlab.com/gitlab-org/ux-research/-/issues/new#)を作成します。
1. 募集したいターゲットペルソナを特定します。
1. 募集したいスタディの種類（たとえば、問題検証）と使用するフォーマット（たとえば、60 分の Zoom インタビュー）を特定します。
1. コモンスクリーナーを活用する可能性のある GitLab 製品ステージチームを特定します。
1. 出発点として使えるテンプレートのコモンスクリーナー（Qualtrics またはドキュメント形式）を UXR に依頼します。
1. そのテンプレートのコピーを作成します。
1. チームメンバーが調整を求められる（例: タスクのリストに追加される新しいタスクを提案する）よう、各コモンスクリーナー質問に対するフィードバック用の自由回答質問を追加します。
1. 各チームメンバーに、Qualtrics 調査形式でドラフトに返信することでフィードバックを提供するよう依頼します。
1. それらの変更を取り込みます。
1. [インセンティブリクエスト](https://gitlab.com/gitlab-org/ux-research/-/blob/master/.gitlab/issue_templates/Incentives%20request.md)を作成し、コモンスクリーナーから募集されたすべての参加者に使用する謝礼スプレッドシートを依頼します。
1. コーディネーション Issue で UXR や ReOps の担当者にタグ付けし、新しい共通参加者プールに募集を開始する準備ができていることを確認します。

コモンスクリーナーが設定されたら、もう少しいくつかのステップに従います。

1. 各スタディのリサーチ Issue と募集 Issue をコモンスクリーナーのコーディネーション Issue にリンクします。
1. スタディ固有の募集 Issue で ReOps にタグを付け、コンタクトを取得し、次の人のために新鮮な参加者がいるように別の募集プッシュを行うよう依頼します。あなたの UXR もこれを手伝うかもしれません。
1. 参加者がスタディのために連絡されることになった場合、UXR または ReOps の担当者によって、コモンスクリーナーの Qualtrics データダッシュボードの「study be included in」セクションに記載されます。参加者がスタディのために連絡されたら、次のスタディの募集からはその人を除外します。参加状況は謝礼スプレッドシートで追跡します。

### 既存のコモンスクリーナーを使用したい場合、どのようなステップを踏むべきですか？

1. 適している既存のアクティブなコモンスクリーナーのコーディネーション Issue（下の表を参照）を見つけます。

   | Common Screener | Types of Studies |
   | ------ | ------ |
   |   [Benchmark Loop Stages Common Screener](https://gitlab.com/gitlab-org/ux-research/-/issues/2246)     |   60, 90 or 120 min Zoom sessions  or moderated usability studies   |
   |   [2023 CI/CD Solution Validation Studies](https://gitlab.com/gitlab-org/ux-research/-/issues/2284)   |   Surveys, 20 min online unmoderated studies, 30 or 60 min interviews or moderated usability sessions  |
   |   [Problem Validation + Foundational Research 2023](https://gitlab.com/gitlab-org/ux-research/-/issues/1894)   |  30 or 60 min Zoom interviews, 60 min interviews, 30 or 60 min task based moderated usability studies   |

1. コモンスクリーナーのコーディネーション Issue のオーナー（上記リンク先）にタグ付けし、次のことを伝えます:

   - どのスタディで募集したいか
   - 探しているペルソナ
   - 参加者の募集をいつ開始したいか、また探している参加者の数

1. コーディネーション Issue のオーナーは、あなたが理想の参加者であるかのようにコモンスクリーナーに記入するよう依頼し、ReOps チームが参加者の候補リストを作成する際に使用できるフィルターを作成します。
