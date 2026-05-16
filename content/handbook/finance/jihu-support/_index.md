---
title: "JiHuサポート"
description: "GitLab IncチームがJiHuにサポートを提供する方法"
upstream_path: /handbook/finance/jihu-support/
upstream_sha: 1e195b58b9f249ff10bd0e705106c320fee86141
translated_at: "2026-05-14T00:00:00Z"
translator: claude
stale: false
lastmod: "2026-04-30T16:57:54+00:00"
---

## 概要

ブログ記事 [GitLab licensed its technology to new independent Chinese company](https://about.gitlab.com/blog/2021/03/18/gitlab-licensed-technology-to-new-independent-chinese-company/) で発表したように、GitLab Inc. は技術をJiHuにライセンス供与しました。このページでは、GitLab Inc. チームがJiHuにサポートを提供する方法について説明します。

## ブランド

[ガイドライン](https://docs.google.com/document/d/1oJd_3SMHlTod6j3ThqhjpeCyyw8rqBM4WUeOfy7vYKs/edit?usp=sharing) を参照してください。

## コミュニケーション

[ガイドライン](https://docs.google.com/document/d/1SEBkJp0R-yjN654KTJjcSI55VGwWPHN2xTKLW5FNvUM/edit?usp=sharing) を参照してください。GitLabチームメンバーに送られる `gitlab-jh.slack.com` Slackサーバーへの招待は正規のものです。このサーバーはGitLab Inc. とJiHu間のコミュニケーションに使用されます。

## セールス

[ガイドライン](https://docs.google.com/document/d/1JigQn7g8KUrY8N6WHuf248ARWHzCpIGhE2yXriuhI5c/edit?usp=sharing) を参照してください。

## プロフェッショナルサービス

ガイドラインを参照してください（リンクは後日追加予定）。

## カスタマーサポート

以下にプロセスが追加される予定です。

## エンジニアリング

### R&Dロール

| DRI | ロール |
| --- | --- |
| [Jerome Ng](https://gitlab.com/jeromezng) | エンジニアリングDRI |

### JiHuエンジニアリングのコンタクト

[Shiyuan Chen](https://gitlab.com/shreychen) はGitLab Inc. に対するJiHuエンジニアリングの窓口です。GitLab Inc. がJiHuにも変更を要求する変更を行う場合、MAOが調整を支援します。

### プロジェクト

JiHuチームのプロジェクトは <https://jihulab.com/gitlab-cn/> に配置されています。`gitlab-org` のツーリングおよびコンプライアンスチェック用のミラープロジェクトは <https://gitlab.com/gitlab-org/gitlab-jh-mirrors/> で利用可能です。

JiHuプロジェクトのほとんどはJiHuLab.com に移動されましたが、一部のプロジェクトはまだ [gitlab-jh](https://gitlab.com/gitlab-jh/) グループの下にあります。アクセスをリクエストするには [Kevin](https://gitlab.com/kevinchu) または [Mek](https://gitlab.com/meks) に連絡してプロビジョニングを依頼してください。

| GitLab Incプロジェクト                                  | JiHuプロジェクト                                           |
|---------------------------------------------------------|------------------------------------------------------------|
| <https://gitlab.com/gitlab-org/gitlab>                    | <https://jihulab.com/gitlab-cn/gitlab>                       |
| <https://gitlab.com/gitlab-org/license-gitlab-com>        | <https://gitlab.com/gitlab-jh/license-gitlab-cn> (private)   |
| <https://gitlab.com/gitlab-org/customers-gitlab-com>      | <https://jihulab.com/jihulab/engineering/customers-jihulab-com> (private) |
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

### JiHuコントリビューションプロセス

詳細は [JiHuコントリビューションプロセス](/handbook/finance/jihu-support/jihu-contribution-process/) を参照してください。

### JiHu mainブランチが壊れた場合の解決プロセス

[`main-jh` ブランチ](https://jihulab.com/gitlab-cn/gitlab) が壊れていて、アップストリームのマージリクエストによる解決が必要になる場合があります。これが発生した場合、JiHuアップストリームMR作成から2営業日以内にタイムリーに解決するために、以下のプロセスが実施されます。

1. JiHuチームが解決策を含むアップストリームMRをオープンする
1. JiHuエンジニアリングDRIが [#main-jh-broken](https://gitlab-jh.slack.com/archives/C026EBMTRRB) でメッセージを投稿し、GitLabのメンテナーにMRがエスカレーションされたことを通知する
1. GitLabファシリテーターがマージリクエストに `~"JiHu Broken Pipeline"` ラベルを適用し、適切なドメイン（バックエンド、フロントエンド）からのレビューを依頼する
1. GitLabファシリテーターが #jihu-engineering チャンネルでGitLab Incのチームメンバーに通知する
1. JiHuがMRと失敗の根本原因を <https://gitlab.com/gitlab-jh/gitlab-jh-enablement/-/issues/215> に追加する

### JiHu検証パイプラインが壊れたマージリクエスト

詳細は [検証パイプラインが失敗したときの対処方法](/handbook/finance/jihu-support/jihu-validation-pipelines/#what-to-do-when-the-validation-pipeline-failed) を確認してください。

### セキュリティリリースプロセス

JiHuは、すべてのパッチおよびセキュリティリリースを含め、毎月JiHu Editionをビルドおよびリリースする責任があります。セキュリティリリースについて、GitLab Inc. は引き続き既存の [セキュリティリリースプロセス](https://gitlab.com/gitlab-org/release/docs/blob/master/general/security/process.md) に従って [セキュリティリリース](https://about.gitlab.com/releases/categories/releases/) を公開します。JiHuがタイムリーにセキュリティリリースをビルドできるように、GitLab Inc. はセキュリティリリースが進行中の場合にJiHuに通知し、彼らのチームが待機できるようにします。GitLab Inc. はセキュリティリリースの内容や脆弱性の内容をJiHuに通知することはありません。

今後のセキュリティリリースをJiHuに通知するには、次の場所にコメントを投稿してください: https://gitlab.com/gitlab-jh/gitlab-jh-enablement/-/issues/112

### 脆弱性開示プロセス

GitLab Inc. は [文書化された脆弱性開示プロセス](https://about.gitlab.com/security/disclosure/#vulnerability-disclosure) に従い、脆弱性に関する詳細情報をJiHuに直接提供することはありません。進行中のセキュリティリリースの前または最中に情報が共有されることはありません。

GitLabの [セキュリティリリース](https://gitlab.com/gitlab-com/gl-infra/readiness/-/tree/master/library/security-releases-development) の後にのみ、GitLab Inc. はJiHuに以下を提供することがあります:

- 公開されたセキュリティリリースブログ記事へのリンク
- 脆弱性を説明するGitLab Issueへのリンク。これは脆弱性が修正されたリリースから30日後まで非公開のままになります

この情報はSlackとJiHuとの週次エンジニアリング同期会議を通じて伝達されます。

JiHuのコントリビューションによって導入されたセキュリティ脆弱性については、GitLab Application Securityチームが、脆弱性の詳細や脆弱性の詳細の発見につながる可能性のある情報を開示しない限り、緩和手順を共有します。

- そのような緩和手順が存在する場合、GitLab Application SecurityチームはJiHu enablementプロジェクトに緩和手順を含む機密Issueを作成してJiHuに通知します
- 緩和手順が存在しない場合、脆弱性はGitLabの通常のセキュリティ脆弱性開示プロセスに従って開示されます

### セキュリティのベストプラクティス

GitLabはJiHuとセキュリティのベストプラクティスを共有することができます。これには、GitLab、JiHu、およびそれらの顧客を安全に保つことを目的として、多層防御策、ハードニング手法、その他の情報が含まれる場合があります。ただし、未修正の脆弱性または進行中のインシデントに関する情報を公開する可能性のある脆弱性の詳細や特定の修復策は含まれません。

### コンサルティングプロセス

JiHuはGitLabの専門知識、特にGitLabをSaaS製品として運用することに関する専門知識から恩恵を受けています。GitLabは、Slackでの簡単な対応を超えるエンゲージメントを必要とする項目についてJiHuにコンサルティング料金を請求することがあります。これにより、GitLabは予定外の作業から自分を守りつつ、JiHuがドメイン専門性を構築できるようにします。これは [JiHuとのテクニカルサービス契約 - 社内](https://drive.google.com/file/d/19HXz1xxCS-BlDwMFUquw1Vl06SQ16Mgc/view) でも合意されています。

#### コンサルティングの対象外のトピック

- MRのレビュー
- ロードマップの調整
- マネジメントの協業

## プロダクト

### プロダクトDRIの役割

[プロダクトDRI](#rd-roles) は以下の責任を負います:

- JiHuのCTOおよびプロダクトカウンターパートにプロダクトマネジメント実践のガイダンスを提供する
- GitLabプロダクトとJiHuプロダクトのアライメントを可能にする
  - 定期的に最新情報を提供し、GitLabの投資テーマとロードマップへの認識を高める
  - JiHuの計画とロードマップを適切な関係者に広める
- プロダクトデータについてJiHu CTOと連絡を取り合う
- JiHuまたは中国関連の要件に関連するソリューションを実装するために、ステージグループと協力する
- エンジニアリングDRIおよびエンジニアリングファシリテーターと連携し、GitLabとJiHuの間の円滑な機能を確保するためのプロセスを定義および維持する

### プロダクトマネージャーの責任

JiHuのコントリビューションは、コミュニティコントリビューションと類似しています。違いは、ボリュームと頻度が高いことです。JiHuがGitLabコードベースに習熟するにつれて、彼らはGitLabにどこでどのようにコントリビュートできるかを理解し学ぼうとしています。プロダクトマネージャーは、公開されている方向性を共有し、JiHuチームと連携してJiHuが自給自足で効率的になれるよう支援できます。

時々、プロダクトマネージャーはJiHuからの具体的な提案に対するフィードバックを提供したり、直接対応したりするように求められます。GitLabのPMはGitLabのエンジニアとJiHuチームのコラボレーションを促進する支援を行うべきです。これは、プロダクトの方向性に不一致がある場合は、JiHuがGitLabがマージするつもりのないものに時間を費やすことのないように、早期に指摘することを意味します。

プロダクトマネージャーがJiHuのカウンターパートとの接続にヘルプを必要とする場合は、[#jihu-product](https://gitlab.slack.com/archives/C01S8CFF7HR) で [プロダクトDRI](#rd-roles) にメンションしてください。

### プロダクトデザイナーの責任

GitLabのプロダクトデザイナーは、レビューとガイダンスの責任を負いますが、JiHuがコントリビュートしたいIssueの完全なデザイン作業を引き受けるべきではありません。JiHuにはこれらのIssueを実装の準備が整うように手伝う独自のプロダクトデザインチームがあります。

**プロセス**

JiHuがアップストリームにコントリビュートしようとするIssueにプロダクトデザイナーがメンションされたら、プロダクトデザイナーは、そのIssueに [Pajamasガイドライン](https://design.gitlab.com)、[プロダクト原則](/handbook/product/product-principles)、またはチームの計画作業と矛盾しない明確な提案がすでにあるかどうかを確認します。

明確なデザイン提案がまだない場合、またはPajamasやプロダクト原則と矛盾がある場合、デザイナーはIssueが実装に進む前に必要なものについてコメントを残します。

#### JiHuとのマイルストーン製品計画プロセス

コラボレーションとフィードバックを促進するため、JiHuはGitLabのマイルストーン計画プロセスに先行して計画し、GitLabプロダクトグループが実装前にフィードバックを提供する時間を確保します。毎マイルストーンで次のことが発生します:

1. JiHuは [gitlab-jh-enablementプロジェクト](https://gitlab.com/gitlab-jh/gitlab-jh-enablement) でマイルストーン計画Issueを作成します。これは [この例](https://gitlab.com/gitlab-jh/gitlab-jh-enablement/-/issues/269) のようなものです。JiHuは通常、月の18日の2週間前に計画を提供します。
1. GitLab.orgプロジェクトにすでにIssueがない項目については、JiHuチームがIssueを作成します。既存のIssueがある場合、それはマイルストーン計画Issueからリンクされます。これにより、GitLabプロダクトグループは他の日々の作業が追跡されている同じ場所でJiHuのコントリビューションを追跡できます。
1. プロダクトDRIは [JiHuマイルストーンレビューテンプレート](https://gitlab.com/gitlab-com/Product/-/blob/main/.gitlab/issue_templates/Monthly-JiHu-Milestone-Review.md) を通じて、認識を促進しコラボレーションを奨励します
1. 個々のプロダクトマネージャーとそのエンジニアリングのカウンターパートは、必要に応じてJiHuにフィードバックを提供します

##### 大規模プロダクトイニシアチブの計画

IPを作成することを目的として、JiHuは複数のマイルストーンにまたがる大規模なプロダクトイニシアチブを引き受けます。このタイプのプロダクトイニシアチブはより多くの調整を必要とします。JiHuとGitLabの代表者は、これらのプロダクト計画について定期的に同期を取ります。目標は大規模なイニシアチブを早期に特定し、適切なDRIをループに入れることです。このタイプのプロダクトイニシアチブの一例は [パイプラインエディタのVisual Builder](https://gitlab.com/groups/gitlab-org/-/epics/4499) です。

#### プロダクトマネージャーが責任を負わないもの

GitLabのプロダクトマネージャーはJiHuのプロダクト判断に責任を負いませんが、JiHuのプロダクトマネージャーとのコラボレーションとフィードバックは推奨され歓迎されます。

- PMがコミュニティコントリビューションの裁定者ではないのと同様に、プロダクトマネージャーはJiHuチームが取り組むものの裁定者ではありません
- プロダクトマネージャーは、ティアや価格設定など、JiHuのプロダクト判断には責任を負いません
- JiHuのマイルストーン計画をレビューする際は:
  1. 自分のプロダクト領域におけるJiHuの計画を認識する
  1. GitLabのプロダクト方針に従ってガイダンスを提供する
  1. サプライズを避け、JiHuの成功を支援する。フィードバックに時間がかかる場合は、事前に知らせる
  1. 与えるべきフィードバックがなければ、フィードバックを提供する必要はない。JiHuのコントリビューションは他のコミュニティコントリビューションと同じであり得る

### JiHu独自機能の差別化

JiHuディストリビューション向けの独自機能は、`/jh` [ディレクトリ](https://gitlab.com/gitlab-org/gitlab-jh-mirrors/-/tree/main-jh/jh) に含めることで差別化します。ただし、JiHuチームメンバーからのコントリビューションの大部分は `/jh` ディレクトリの外側にあるべきであり、これは大部分のコントリビューションがGitLab Core向けであり、特定の機能のみが /jh オファリング独自であるという期待を示しています。

## リンク

- [GitLab licensed its technology to new independent Chinese company](https://about.gitlab.com/blog/2021/03/18/gitlab-licensed-technology-to-new-independent-chinese-company/)
- [GitLab licensing technology to independent Chinese company FAQ](/handbook/company/faq-gitlab-licensing-technology-to-independent-chinese-company/)
- [China Service Working Group](/handbook/company/working-groups/china-service/)
