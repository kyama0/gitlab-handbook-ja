---
title: "Common Screener：複数の調査を効率的にスクリーニングする方法"
description: "GitLab でリサーチ調査の参加者を見つけるために Common Screener を使用するアプローチの概要"
upstream_path: /handbook/upstream-studios/experience-research/recruiting-participants/common-screener/
upstream_sha: a15c0bfc1dd89fbbe4aff8969605eb60ab63f1ca
lastmod: "2026-07-16T17:32:42-03:00"
translated_at: "2026-07-17T07:37:26+09:00"
translator: codex
stale: false
---

Common Screener は、複数の調査にまたがって同じ質問を使用してリクルーティングします。これは、通常は個別にリクルーティングするチームが、参加者を特定するために同じ種類の背景質問（たとえば、一般的なタスク、業界、会社規模）を使用する場合に実施できます。

特定の調査で Common Screener を使用する各チームメンバーは、各質問に対して独自の含める基準を選択します。たとえば、ある調査では従業員数 100 人未満の会社のユーザーが必要な一方、別の調査では従業員数 1,000 人超の会社のユーザーが必要になる場合があります（図 1 を参照）。各調査では、同じ共通の会社規模に関する質問に対して異なる含める基準を設定します。

![Common Screener の図](/images/product/ux/ux-research/recruiting-participants/common-screener/CSfigure1.png)

上の図は、Common Screener アプローチで同じ質問を使用して、参加者をさまざまな調査に一致させる方法を示しています。この例では、単一のスクリーナーを使用する場合、100 人超の会社の参加者は調査から除外される可能性がありますが、Common Screener アプローチを使用する場合は別の調査に一致する可能性があります。これは、各調査が同じ会社規模に関する質問に対して異なる含める基準を設定するために可能になります。この例では、Common Screener アプローチにより、主要タスクを選択するよう尋ねる JTBD の質問に基づいて、異なるペルソナに合致する参加者を一致させることもできます。

Common Screener は Qualtrics の機能を活用して、共通質問への回答で構成された、調査の含める基準と参加者プロファイルの一致を見つけます。例のように、各回答者のペルソナを特定するために、ハンドブックの JTBD タスク一覧を含む質問を含める場合があります。その後、回答を使用して、そのペルソナを探している調査に一致させます。これを会社規模に関する質問と組み合わせて、異なる会社規模の同じペルソナ、または同じ会社規模の異なるペルソナを探す異なる調査に回答者を一致させることができます。

この種のスクリーナーは、早期に計画され、会社規模のような参加者間で類似した質問を持つ調査に最も適しています。

### Common Screener を使用する利点は何ですか？

Common Screener には次の効果があります：

- チームがリクルーティングに関するリソースをプールできるようにする
- DRI が四半期ごとに作成または支援する必要があるリクルーティング Issue、謝礼 Issue、リサーチスクリーナー、リクルーティング施策の数を減らす
- ある調査のすべての基準を満たさない参加者を、別の調査に含められるようにする
- 各調査のリクルーティング中に必要なコンテキスト切り替え（たとえば、リクルーティングデータベースへの移動回数）を最小化する
- 参加者を見つけるために必要な労力（たとえば、同じソーシャルメディア投稿で複数の調査を支援できます）と、見込み参加者に送信するコミュニケーション数を減らす

### Common Screener の使用例はありますか？

Verify チームと Package チームは、2022 年初頭に Common Screener の最初の GitLab イテレーションに取り組みました。同じスクリーナーを使用して 5 件の Problem Validation 調査にまたがってリクルーティングできました（詳細は[こちら](https://gitlab.com/gitlab-org/ux-research/-/issues/1808)）。現在は、このプロセスを使用して、2022 年後半に Problem Validation 調査と Solution Validation 調査の両方のリクルーティングを同じスクリーナーで支援できるか確認しています（詳細は[こちら](https://gitlab.com/gitlab-org/ux-research/-/issues/1894)）。

パイロットでは、Verify チームと Package チーム全体のユーザーペルソナに焦点を当てています：

- [Presley、Product Designer](/handbook/product/personas/#presley-product-designer)
- [Sasha、Software Developer](/handbook/product/personas/#sasha-software-developer)
- [Devon、DevOps Engineer](/handbook/product/personas/#priyanka-platform-engineer)
- [Sidney、Systems Administrator](/handbook/product/personas/#sidney-systems-administrator)
- [Sam、Security Analyst](/handbook/product/personas/#amy-application-security-engineer)
- [Rachel、Release Manager](/handbook/product/personas/#rachel-release-manager)
- [Alex、Security Operations Engineer](/handbook/product/personas/#alex-security-operations-engineer)

共通のスクリーナーでは、回答者をリサーチ調査に一致させるため、次を含むいくつかの主要領域に関する質問を使用します：

- 会社規模
- 回答者が勤務する会社で使用されるさまざまな機能（例：Merge Trains）とプロダクト（例：GitLab Dependency Proxy、JFrog Artifactory、および／または Sonatype Nexus）
- 回答者が GitLab SaaS または Self-Managed を使用しているか、使用する GitLab の機能（例：Merge Requests）
- 回答者がいるタイムゾーン
- 回答者を対象ペルソナにマッピングするために使用できる一般的なタスク

### Common Screener で使用される質問の例は何ですか？

主要タスクに関する質問は Common Screener で使用できるものの良い例です。同じ質問に対する異なる回答が、回答者を異なる調査に一致させる助けになるためです。

複数のペルソナをカバーするリストから一般的なタスクを選択するよう回答者に求めることで、リサーチ調査に含まれたいという希望から、実際には完了していないタスクを選択する回答者によってもたらされる回答バイアスも最小化されます。以下は、タスクベースの質問例です：

> 次のうち、主な職務上の責任に含まれるものはどれですか？該当するものをすべて選択してください。
>
> - 効果的で、共感的かつ効率的なユーザー体験のデザインをリードする
> - プロダクトデザインをアプリケーションコードに変換する
> - コードをデプロイ、ビルド、リリースする
> - 機能とバグ修正を実装するためのアプリケーションコードを書く
> - インフラストラクチャと設定を維持・スケールする
> - チームと協力してセキュリティ修正を実装し、および／またはセキュリティテストを実行する
> - パイプラインビルドを実行・テストする
> - リリースを調整・オーケストレーションする
> - セキュリティを強化するツールを構築・実装する

表 1。パイロットに含まれる各ユーザーペルソナに、どの回答者がマッピングされるかを区別する助けとなる、ハンドブックページのタスク一覧です。

| ユーザーペルソナ | 区別するタスク |
| ------ | ------ |
| [Presley、Product Designer](/handbook/product/personas/#presley-product-designer) | 効果的で、共感的かつ効率的なユーザー体験のデザインをリードする |
| [Sasha、Software Developer](/handbook/product/personas/#sasha-software-developer) | プロダクトデザインをコードに変換する |
| [Devon、DevOps Engineer](/handbook/product/personas/#priyanka-platform-engineer) | コードをデプロイ、ビルド、リリースする。パイプライン定義と CI テンプレートを提供する。コードを使用して機能とバグ修正を実装する |
| [Sidney、Systems Administrator](/handbook/product/personas/#sidney-systems-administrator) | インフラストラクチャと設定を維持・スケールする。サーバーを構築してデプロイし、および／または開発者がそうするのを支援する|
| [Sam、Security Analyst](/handbook/product/personas/#amy-application-security-engineer) | チームと協力してセキュリティ修正を実装する。セキュリティテストを実行し、および／または潜在的なセキュリティ Issue を報告する |
| [Rachel、Release Manager](/handbook/product/personas/#rachel-release-manager) | パイプラインビルドを実行・テストする。パイプラインを自動化する。リリース全体でチームを調整する |
|  [Alex、Security Operations Engineer](/handbook/product/personas/#alex-security-operations-engineer) | セキュリティインシデントに対処する。セキュリティを強化するツールを構築・実装する |

### 共通のスクリーナーを使用するための要件はありますか？

はい。Common Screener アプローチを使用するには、次が必要です：

1. Common Screener を通じて参加者をリクルーティングする全員は、調整 Issue に関連付けられた同じ Gratuity Spreadsheet を使用する必要があります。これにより、調査間で重複する参加者を使用していないことを確認できます。
1. Common Screener を使用するすべての人は、共通のスクリーナーを使用する各調査について専用のリクルーティングリクエストを作成します。

### チームが Common Screener の使用から利益を得られると考える場合、どの手順を取りますか？

新しい Common Screener を設定したい場合に PM と Designer が取る手順は次のとおりです：

1. Common Screener coordination Issue テンプレートを使用してスクリーナーを調整するため、[Issue](https://gitlab.com/gitlab-org/ux-research/-/issues/new#)を作成します。
1. リクルーティングしたい対象ペルソナを特定します。
1. リクルーティングしたい調査の種類（例：Problem Validation）と使用する形式（例：60 分の Zoom インタビュー）を特定します。
1. 共通のスクリーナーを活用する可能性がある GitLab プロダクトステージチームを特定します。
1. 開始に使用できるテンプレート Common Screener（Qualtrics またはドキュメント）を UXR に依頼します。
1. そのテンプレートのコピーを作成します。
1. 各 Common Screener の質問について、チームメンバーが調整を依頼できる自由回答のフィードバック質問を追加します（例：タスク一覧に追加する新しいタスクを提案する）
1. Qualtrics Survey 形式のドラフトに回答してフィードバックを提供するよう、各チームメンバーに依頼します。
1. それらの変更を組み込みます。
1. [インセンティブリクエスト](https://gitlab.com/gitlab-org/ux-research/-/blob/master/.gitlab/issue_templates/Incentives%20request.md)を作成し、Common Screener からリクルーティングするすべての参加者に使用する Gratuity Spreadsheet を依頼します。
1. 調整 Issue で UXR または ReOps 担当者をタグ付けし、新しい共通の参加者プールへのリクルーティングを開始する準備ができたことを確認します。

Common Screener を設定したら、さらにいくつかの手順に従います。

1. 調査のリサーチ Issue と各調査のリクルーティング Issue を Common Screener coordination Issue にリンクします
1. 調査固有のリクルーティング Issue で ReOps をタグ付けし、連絡先を取得してもらい、次の担当者のために新しい参加者が得られるよう、別のリクルーティング施策を行うよう依頼します。UXR もこれを支援する場合があります。
1. 参加者が調査への連絡対象として選択された場合、UXR または ReOps 担当者が Common Screener 用 Qualtrics データダッシュボードの「study be included in」セクションに記録します。参加者に調査のため連絡したら、その後の調査のリクルーティングには含めません。参加状況は謝礼スプレッドシートで追跡します

### 既存の Common Screener を使用したい場合、どの手順を取りますか？

1. 適していると考える既存かつアクティブな Common Screener Coordination Issue（下表を参照）を見つけます。

   | Common Screener | 調査の種類 |
   | ------ | ------ |
   |   [Benchmark Loop Stages Common Screener](https://gitlab.com/gitlab-org/ux-research/-/issues/2246)     |   60、90、または 120 分の Zoom セッション、またはモデレートされたユーザビリティ調査   |
   |   [2023 CI/CD Solution Validation Studies](https://gitlab.com/gitlab-org/ux-research/-/issues/2284)   |   アンケート、20 分のオンライン非モデレート調査、30 または 60 分のインタビュー、またはモデレートされたユーザビリティセッション  |
   |   [Problem Validation + Foundational Research 2023](https://gitlab.com/gitlab-org/ux-research/-/issues/1894)   |  30 または 60 分の Zoom インタビュー、60 分のインタビュー、30 または 60 分のタスクベースのモデレートされたユーザビリティ調査   |

1. Common Screener Coordination Issue（上記でリンク）所有者をタグ付けし、次を伝えます：

   - リクルーティングしたい調査
   - 探しているペルソナ
   - 参加者のリクルーティングを開始したい時期と、探している参加者数

1. 調整 Issue の所有者は、理想的な参加者になったつもりで Common Screener に入力するよう依頼し、ReOps チームが候補参加者を絞り込むために使用できるフィルターを作成します。
