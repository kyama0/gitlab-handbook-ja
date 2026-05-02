---
title: "JiHu サポート"
description: "GitLab Inc チームが JiHu をどのようにサポートするか"
upstream_path: /handbook/finance/jihu-support/
upstream_sha: a1349675d55d5e861385a14a4b2d2b617d2381b1
translated_at: "2026-04-29T19:06:37Z"
translator: claude
stale: false
---

## 概要

ブログ記事[GitLab が新しい独立系中国企業に技術をライセンス供与](https://about.gitlab.com/blog/2021/03/18/gitlab-licensed-technology-to-new-independent-chinese-company/)で発表されたように、GitLab Inc. は JiHu に技術をライセンス供与しています。このページでは、GitLab Inc. チームが JiHu にどのようなサポートを提供するかについて概説します。

## ブランド

[ガイドライン](https://docs.google.com/document/d/1oJd_3SMHlTod6j3ThqhjpeCyyw8rqBM4WUeOfy7vYKs/edit?usp=sharing)をご参照ください

## コミュニケーション

[ガイドライン](https://docs.google.com/document/d/1SEBkJp0R-yjN654KTJjcSI55VGwWPHN2xTKLW5FNvUM/edit?usp=sharing)をご参照ください。GitLab チームメンバーに送られる `gitlab-jh.slack.com` Slack サーバーへの招待は正当なものです。このサーバーは GitLab Inc. と JiHu 間のコミュニケーションに使用されます。

## セールス

[ガイドライン](https://docs.google.com/document/d/1JigQn7g8KUrY8N6WHuf248ARWHzCpIGhE2yXriuhI5c/edit?usp=sharing)をご参照ください。

## プロフェッショナルサービス

ガイドラインをご参照ください（リンクは後日追加予定）。

## カスタマーサポート

プロセスは後日追加予定です。

## エンジニアリング

### R&D 役割

| DRI | 役割 |
| --- | --- |
| [Jerome Ng](https://gitlab.com/jeromezng) | エンジニアリング DRI |

### JiHu エンジニアリング担当者

[Shiyuan Chen](https://gitlab.com/shreychen) は GitLab Inc. に対する JiHu のエンジニアリング担当者です。GitLab Inc. が JiHu にも変更を求める変更を行う際、MAO が調整をサポートします。

### プロジェクト

JiHu チームのプロジェクトは <https://jihulab.com/gitlab-cn/> にあります。`gitlab-org` のツールおよびコンプライアンスチェック用のミラープロジェクトは <https://gitlab.com/gitlab-org/gitlab-jh-mirrors/> で利用できます。

ほとんどの JiHu プロジェクトは JiHuLab.com に移行しましたが、一部のプロジェクトはまだ [gitlab-jh](https://gitlab.com/gitlab-jh/) グループ配下にあります。
アクセスをリクエストするには、[Kevin](/handbook/company/team/#kevinchu) または [Mek](/handbook/company/team/#meks) にプロビジョニングを依頼してください。

| GitLab Inc プロジェクト                                      | JiHu プロジェクト                                               |
|---------------------------------------------------------|------------------------------------------------------------|
| <https://gitlab.com/gitlab-org/gitlab>                    | <https://jihulab.com/gitlab-cn/gitlab>                       |
| <https://gitlab.com/gitlab-org/license-gitlab-com>        | <https://gitlab.com/gitlab-jh/license-gitlab-cn>（非公開）   |
| <https://gitlab.com/gitlab-org/customers-gitlab-com>      | <https://jihulab.com/jihulab/engineering/customers-jihulab-com>（非公開） |
|                                                         | <https://gitlab.com/gitlab-jh/cookbook-customers-gitlab-com> |
| <https://gitlab.com/gitlab-services/version-gitlab-com>   | <https://gitlab.com/gitlab-jh/version-gitlab-cn>             |
| <https://gitlab.com/gitlab-org/omnibus-gitlab>            | <https://jihulab.com/gitlab-cn/omnibus-gitlab>               |
| <https://gitlab.com/gitlab-org/gitaly>            | <https://jihulab.com/gitlab-cn/gitaly>               |
| <https://gitlab.com/gitlab-org/gitlab-environment-toolkit> | <https://gitlab.com/gitlab-jh/gitlab-environment-toolkit>    |
| <https://gitlab.com/gitlab-org/build/CNG>                 | <https://jihulab.com/gitlab-cn/build/cng-images>             |
| <https://gitlab.com/gitlab-org/charts/gitlab>             | <https://jihulab.com/gitlab-cn/charts/gitlab>                |
| <https://gitlab.com/gitlab-org/gitlab-docs>               | <https://jihulab.com/gitlab-cn/gitlab-docs-cn>           |
| <https://gitlab.com/gitlab-org/gitlab-runner>             | <https://jihulab.com/gitlab-cn/gitlab-runner>                |
| <https://gitlab.com/gitlab-org/gitlab-svgs>             | <https://jihulab.com/gitlab-cn/gitlab-svgs> |
| <https://gitlab.com/gitlab-org/gitlab-qa> | <https://jihulab.com/gitlab-cn/gitlab-qa> |

### JiHu コントリビューションプロセス

詳細については [JiHu コントリビューションプロセス](/handbook/finance/jihu-support/jihu-contribution-process/)をご参照ください。

### JiHu main ブランチの障害解消プロセス

[`main-jh` ブランチ](https://jihulab.com/gitlab-cn/gitlab)が壊れ、解消のためにアップストリームのマージリクエストが必要になることがあります。この場合、JiHu がアップストリーム MR を作成してから2営業日以内に迅速に解消するため、以下のプロセスが実施されます。

1. JiHu チームが解消策を含むアップストリーム MR を作成する
1. JiHu エンジニアリング DRI が [#main-jh-broken](https://gitlab-jh.slack.com/archives/C026EBMTRRB) に GitLab Inc への通知メッセージを投稿して、MR が GitLab メンテナーにエスカレーションされていることを示す
1. GitLab ファシリテーターがマージリクエストに `~"JiHu Broken Pipeline"` ラベルを適用し、適切なドメイン（バックエンド、フロントエンド）にレビューを依頼する
1. GitLab ファシリテーターが #jihu-engineering チャンネルで GitLab Inc チームメンバーに通知する
1. JiHu が <https://gitlab.com/gitlab-jh/gitlab-jh-enablement/-/issues/215> に MR と障害の根本原因を追加する

### JiHu バリデーションパイプラインが壊れているマージリクエスト

詳細については[バリデーションパイプラインが失敗した場合の対処法](/handbook/finance/jihu-support/jihu-validation-pipelines/#what-to-do-when-the-validation-pipeline-failed)をご確認ください。

### セキュリティリリースプロセス

JiHu は毎月すべてのパッチリリースおよびセキュリティリリースを含む JiHu エディションのビルドとリリースに責任を持ちます。セキュリティリリースについては、GitLab Inc は既存の[セキュリティリリースプロセス](https://gitlab.com/gitlab-org/release/docs/blob/master/general/security/process.md)に従って[セキュリティリリース](https://about.gitlab.com/releases/categories/releases/)を公開し続けます。JiHu が適時にセキュリティリリースをビルドできるよう、GitLab Inc はセキュリティリリースの進行中に JiHu へ通知し、チームが待機できるようにします。GitLab Inc はセキュリティリリースの内容や脆弱性については JiHu に通知しません。

JiHu への予定されているセキュリティリリースの通知は、次の場所にコメントを投稿するだけで行えます：https://gitlab.com/gitlab-jh/gitlab-jh-enablement/-/issues/112

### 脆弱性開示プロセス

GitLab Inc は[文書化された脆弱性開示プロセス](https://about.gitlab.com/security/disclosure/#vulnerability-disclosure)に従い、脆弱性の詳細情報を JiHu に直接提供しません。進行中のセキュリティリリースの前または最中に情報を共有することはありません。

GitLab [セキュリティリリース](https://gitlab.com/gitlab-com/gl-infra/readiness/-/tree/master/library/security-releases-development)の後にのみ、GitLab Inc は JiHu に以下を提供する場合があります：

- 公開セキュリティリリースブログ記事へのリンク
- 脆弱性を説明する GitLab Issue へのリンク（脆弱性がパッチされたリリースから30日後まで機密扱い）

この情報は Slack および JiHu との週次エンジニアリング同期を通じて伝えられます。

JiHu のコントリビューションによって導入されたセキュリティ脆弱性については、GitLab アプリケーションセキュリティチームが、脆弱性の詳細や脆弱性の詳細につながる情報を開示しない限りにおいて、緩和策を共有します。

- そのような緩和策が存在する場合、GitLab アプリケーションセキュリティチームは JiHu enablement プロジェクトで緩和策を含む機密 Issue を作成することで JiHu に通知します。
- 緩和策が存在しない場合、GitLab の通常のセキュリティ脆弱性開示プロセスに従って脆弱性が開示されます。

### セキュリティベストプラクティス

GitLab は JiHu とセキュリティベストプラクティスを共有できます。これには深層防御策、ハードニング技術、および GitLab、JiHu、それぞれの顧客を安全に保つための情報が含まれる場合があります。ただし、未パッチの脆弱性や進行中のインシデントに関する情報を暴露する可能性のある脆弱性の詳細や具体的な修正策は共有できません。

### コンサルティングプロセス

JiHu は特に SaaS 製品として GitLab を運用することに関して GitLab の専門知識を活用します。GitLab は Slack 上の簡単な回答を超えるエンゲージメントを必要とするアイテムについてコンサルティングを JiHu に請求する場合があります。これにより、JiHu がドメインの専門知識を積む間、GitLab は計画外の作業から保護されます。これは GitLab の [JiHu との技術サービス契約（内部）](https://drive.google.com/file/d/19HXz1xxCS-BlDwMFUquw1Vl06SQ16Mgc/view)でも合意されています。

#### コンサルティングの対象外トピック

- MR のレビュー
- ロードマップの調整
- マネジメントのコラボレーション

## プロダクト

### プロダクト DRI の役割

[プロダクト DRI](#rd-roles) には以下の責務があります：

- JiHu CTO およびプロダクト担当者にプロダクトマネジメントのプラクティスガイダンスを提供する
- GitLab プロダクトと JiHu プロダクト間の調整を実現する
  - GitLab の投資テーマとロードマップの定期的な更新と認知向上を図る
  - JiHu の計画とロードマップを適切な関係者に周知する
- プロダクトデータについて JiHu CTO と連携する
- JiHu または中国関連の要件に関するソリューションを実装するためにステージグループと協力する
- エンジニアリング DRI およびエンジニアリングファシリテーターとパートナーを組んで、GitLab と JiHu 間のスムーズな運営を確保するプロセスを定義・維持する

### プロダクトマネージャーの責任

JiHu のコントリビューションはコミュニティコントリビューションに似ています。違いは量と頻度が多い点です。JiHu が GitLab コードベースに習熟するにつれ、どこでどのように GitLab にコントリビューションできるかについての理解を深め、学ぼうとしています。プロダクトマネージャーは公開方針を共有し、JiHu チームと協力して JiHu が自立して効率的に働けるよう支援できます。

プロダクトマネージャーは JiHu からの具体的な提案に対してフィードバックを提供したり直接回答したりするよう求められることがあります。GitLab の PM は GitLab エンジニアと JiHu チーム間のコラボレーションの促進を支援する必要があります。つまり、プロダクトの方向性に関して不一致がある場合、JiHu が GitLab がマージする予定のないものに時間を費やさないよう、早期にその点を指摘することを意味します。

プロダクトマネージャーが JiHu の担当者とのつながりが必要な場合は、[#jihu-product](https://gitlab.slack.com/archives/C01S8CFF7HR) で[プロダクト DRI](#rd-roles) にピングしてください。

### プロダクトデザイナーの責任

GitLab プロダクトデザイナーはレビューとガイダンスに責任を持ち、JiHu がコントリビューションしたい Issue の完全なデザイン作業を引き受けるべきではありません。JiHu には実装に向けてこれらの Issue を準備する独自のプロダクトデザインチームがいます。

**プロセス**

プロダクトデザイナーが JiHu がアップストリームにコントリビューションする予定の Issue にピングされた場合、そのプロダクトデザイナーは、その Issue に[Pajamas ガイドライン](https://design.gitlab.com)、[プロダクト原則](/handbook/product/product-principles)、またはチームの計画中の作業と矛盾しない明確な提案がすでにあるかどうかをレビューします。

明確なデザイン提案がない場合、または Pajamas やプロダクト原則との矛盾がある場合、デザイナーは実装に進む前に必要なことについてコメントを残します。

#### JiHu とのマイルストーン製品計画プロセス

コラボレーションとフィードバックを促進するため、JiHu は GitLab のマイルストーン計画プロセスより先行して計画し、GitLab のプロダクトグループが実装前にフィードバックを提供する時間を確保します。各マイルストーンで以下が実施されます：

1. JiHu が [gitlab-jh-enablement プロジェクト](https://gitlab.com/gitlab-jh/gitlab-jh-enablement)にマイルストーン計画 Issue を作成する（[例](https://gitlab.com/gitlab-jh/gitlab-jh-enablement/-/issues/269)）。JiHu は通常、18日の2週間前に計画を提供する
1. GitLab.org プロジェクトに Issue がまだない項目については、JiHu チームが Issue を作成する。既存の Issue がある場合は、マイルストーン計画 Issue からリンクされる。これにより GitLab プロダクトグループは日常業務が追跡される同じ場所で JiHu のコントリビューションを追跡できる
1. プロダクト DRI が [JiHu マイルストーンレビューテンプレート](https://gitlab.com/gitlab-com/Product/-/blob/main/.gitlab/issue_templates/Monthly-JiHu-Milestone-Review.md)を通じて認知を促進しコラボレーションを奨励する
1. 個々のプロダクトマネージャーとそのエンジニアリング担当者が必要に応じて JiHu にフィードバックを提供する

##### 大規模プロダクトイニシアチブの計画

IP 創出の観点から、JiHu は複数のマイルストーンにわたる大規模なプロダクトイニシアチブに取り組みます。この種のプロダクトイニシアチブはより多くの調整が必要です。JiHu と GitLab の担当者はこれらのプロダクト計画に関して定期的に連携しています。目標は大型イニシアチブを早期に特定し、適切な DRI が参加できるようにすることです。この種のプロダクトイニシアチブの一例として[パイプラインエディタ用ビジュアルビルダー](https://gitlab.com/groups/gitlab-org/-/epics/4499)があります。

#### プロダクトマネージャーの責任外事項

GitLab のプロダクトマネージャーは JiHu のプロダクト上の意思決定に責任を持ちませんが、JiHu のプロダクトマネージャーとのコラボレーションとフィードバックは奨励されており歓迎されます。

- PM がコミュニティコントリビューションの仲裁者でないのと同様、プロダクトマネージャーは JiHu チームが何に取り組むかの仲裁者ではありません
- プロダクトマネージャーは JiHu のプロダクト上の意思決定（ティアリング、価格設定など）に責任を持ちません
- JiHu のマイルストーン計画をレビューする際：
  1. あなたのプロダクトエリアにおける JiHu の計画を把握する
  1. GitLab のプロダクト方向性に沿ったガイダンスを提供する
  1. サプライズを回避し、JiHu が成功できるよう支援する。フィードバックに時間がかかる場合は事前に知らせてください
  1. フィードバックがない場合は提供する必要はありません。JiHu のコントリビューションは他のコミュニティコントリビューションと同様に扱えます

### JiHu 独自機能の区別

JiHu ディストリビューション向けの独自機能は `/jh` [ディレクトリ](https://gitlab.com/gitlab-org/gitlab-jh-mirrors/-/tree/main-jh/jh)に含めることで区別しています。ただし、JiHu チームメンバーによるコントリビューションの大部分は `/jh` ディレクトリの外に置くべきであり、これはほとんどのコントリビューションが GitLab Core 向けであり、特定の機能のみが /jh オファリング専用であるという期待を示しています。

## リンク

- [GitLab が新しい独立系中国企業に技術をライセンス供与](https://about.gitlab.com/blog/2021/03/18/gitlab-licensed-technology-to-new-independent-chinese-company/)
- [GitLab の独立系中国企業への技術ライセンス供与に関する FAQ](/handbook/company/faq-gitlab-licensing-technology-to-independent-chinese-company/)
- [中国サービスワーキンググループ](/handbook/company/working-groups/china-service/)
