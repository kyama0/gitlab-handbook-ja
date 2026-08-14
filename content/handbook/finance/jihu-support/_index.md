---
title: "JiHu サポート"
description: "GitLab Inc チームが JiHu にサポートを提供する方法"
upstream_path: /handbook/finance/jihu-support/
upstream_sha: cd448feba02b00726e216b7b3cfed717822b37b6
translated_at: "2026-08-14T06:13:39+09:00"
translator: claude
stale: false
lastmod: "2026-08-13T13:58:02-04:00"
---

## 概要

ブログ記事 [GitLab licensed its technology to new independent Chinese company](https://about.gitlab.com/blog/2021/03/18/gitlab-licensed-technology-to-new-independent-chinese-company/)で発表したように、GitLab Inc. は技術を JiHu にライセンス供与しました。このページでは、GitLab Inc. チームが JiHu にサポートを提供する方法について説明します。

## ブランド

[ガイドライン](https://docs.google.com/document/d/1oJd_3SMHlTod6j3ThqhjpeCyyw8rqBM4WUeOfy7vYKs/edit?usp=sharing)を参照してください。

## コミュニケーション

[ガイドライン](https://docs.google.com/document/d/1SEBkJp0R-yjN654KTJjcSI55VGwWPHN2xTKLW5FNvUM/edit?usp=sharing)を参照してください。GitLab チームメンバーに送られる `gitlab-jh.slack.com` Slack サーバーへの招待は正規のものです。このサーバーは GitLab Inc. と JiHu 間のコミュニケーションに使用されます。

## セールス

[ガイドライン](https://docs.google.com/document/d/1JigQn7g8KUrY8N6WHuf248ARWHzCpIGhE2yXriuhI5c/edit?usp=sharing)を参照してください。

## GitLab の窓口

| チームメンバー | 役職 | ロール |
| --- | --- | --- |
| Elle Shutty | Senior TPM | R&D DRI |

### JiHu エンジニアリングのコンタクト

[Shiyuan Chen](https://gitlab.com/shreychen)は GitLab Inc. に対する JiHu エンジニアリングの窓口です。

### プロジェクト {#projects}

JiHu チームのプロジェクトは <https://jihulab.com/gitlab-cn/> に配置されています。`gitlab-org` のツーリングおよびコンプライアンスチェック用のミラープロジェクトは <https://gitlab.com/gitlab-org/gitlab-jh-mirrors/> で利用可能です。

JiHu プロジェクトのほとんどは JiHuLab.com に移動されましたが、一部のプロジェクトはまだ [gitlab-jh](https://gitlab.com/gitlab-jh/) グループの下にあります。

| GitLab Inc プロジェクト                                  | JiHu プロジェクト                                           |
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

### JiHu コントリビューションプロセス

詳細は [JiHu コントリビューションプロセス](/handbook/finance/jihu-support/jihu-contribution-process/)を参照してください。

### JiHu main ブランチが壊れた場合の解決プロセス

[`main-jh` ブランチ](https://jihulab.com/gitlab-cn/gitlab)が壊れていて、アップストリームのマージリクエストによる解決が必要になる場合があります。これが発生した場合、JiHu アップストリーム MR 作成から 2 営業日以内にタイムリーに解決するために、以下のプロセスが実施されます。

1. JiHu チームが解決策を含むアップストリーム MR をオープンする
1. JiHu エンジニアリング DRI が [#main-jh-broken](https://gitlab-jh.slack.com/archives/C026EBMTRRB)でメッセージを投稿し、GitLab のメンテナーに MR がエスカレーションされたことを通知する
1. GitLab ファシリテーターがマージリクエストに `~"JiHu Broken Pipeline"` ラベルを適用し、適切なドメイン（バックエンド、フロントエンド）からのレビューを依頼する
1. GitLab ファシリテーターが #jihu-engineering チャンネルで GitLab Inc のチームメンバーに通知する
1. JiHu が MR と失敗の根本原因を <https://gitlab.com/gitlab-jh/gitlab-jh-enablement/-/issues/215> に追加する

### JiHu 検証パイプラインが壊れたマージリクエスト

詳細は[検証パイプラインが失敗したときの対処方法](/handbook/finance/jihu-support/jihu-validation-pipelines/#what-to-do-when-the-validation-pipeline-failed)を確認してください。

### セキュリティリリースプロセス

JiHu は、すべてのパッチおよびセキュリティリリースを含め、毎月 JiHu Edition をビルドおよびリリースする責任があります。セキュリティリリースについて、GitLab Inc. は引き続き既存の[セキュリティリリースプロセス](https://gitlab.com/gitlab-org/release/docs/blob/master/general/security/process.md)に従って[セキュリティリリース](https://about.gitlab.com/releases/categories/releases/)を公開します。JiHu がタイムリーにセキュリティリリースをビルドできるように、GitLab Inc. はセキュリティリリースが進行中の場合に JiHu に通知し、JiHu のチームが待機できるようにします。GitLab Inc. はセキュリティリリースの内容や脆弱性の内容を JiHu に通知することはありません。

今後のセキュリティリリースを JiHu に通知するには、次の場所にコメントを投稿してください： https://gitlab.com/gitlab-jh/gitlab-jh-enablement/-/issues/112

### 脆弱性開示プロセス

GitLab Inc. は[文書化された脆弱性開示プロセス](https://about.gitlab.com/security/disclosure/#vulnerability-disclosure)に従い、脆弱性に関する詳細情報を JiHu に直接提供することはありません。進行中のセキュリティリリースの前または最中に情報が共有されることはありません。

GitLab の[セキュリティリリース](https://gitlab.com/gitlab-com/gl-infra/readiness/-/tree/master/library/security-releases-development)の後にのみ、GitLab Inc. は JiHu に以下を提供することがあります：

- 公開されたセキュリティリリースブログ記事へのリンク
- 脆弱性を説明する GitLab Issue へのリンク。これは脆弱性が修正されたリリースから 30 日後まで非公開のままになります

この情報は Slack と JiHu との週次エンジニアリング同期会議を通じて伝達されます。

JiHu のコントリビューションによって導入されたセキュリティ脆弱性については、GitLab Application Security チームが、脆弱性の詳細や脆弱性の詳細の発見につながる可能性のある情報を開示しない限り、緩和手順を共有します。

- そのような緩和手順が存在する場合、GitLab Application Security チームは JiHu enablement プロジェクトに緩和手順を含む機密 Issue を作成して JiHu に通知します
- 緩和手順が存在しない場合、脆弱性は GitLab の通常のセキュリティ脆弱性開示プロセスに従って開示されます

### セキュリティのベストプラクティス

GitLab は JiHu とセキュリティのベストプラクティスを共有することができます。これには、GitLab、JiHu、およびそれらの顧客を安全に保つことを目的として、多層防御策、ハードニング手法、その他の情報が含まれる場合があります。ただし、未修正の脆弱性または進行中のインシデントに関する情報を公開する可能性のある脆弱性の詳細や特定の修復策は含まれません。

### コンサルティングプロセス

JiHu は GitLab の専門知識、特に GitLab を SaaS 製品として運用することに関する専門知識から恩恵を受けています。GitLab は、Slack での簡単な対応を超えるエンゲージメントを必要とする項目について JiHu にコンサルティング料金を請求することがあります。これにより、GitLab は予定外の作業から自分を守りつつ、JiHu がドメイン専門性を構築できるようにします。これは [JiHu とのテクニカルサービス契約 - 社内](https://drive.google.com/file/d/19HXz1xxCS-BlDwMFUquw1Vl06SQ16Mgc/view)でも合意されています。

#### コンサルティングの対象外のトピック

- MR のレビュー
- ロードマップの調整
- マネジメントの協業

## プロダクト

### プロダクト DRI の役割

プロダクト DRI は以下の責任を負います：

- JiHu の CTO およびプロダクトカウンターパートにプロダクトマネジメント実践のガイダンスを提供する
- GitLab プロダクトと JiHu プロダクトのアライメントを可能にする
  - 定期的に最新情報を提供し、GitLab の投資テーマとロードマップへの認識を高める
  - JiHu の計画とロードマップを適切な関係者に広める
- プロダクトデータについて JiHu CTO と連絡を取り合う
- JiHu または中国関連の要件に関連するソリューションを実装するために、ステージグループと協力する
- エンジニアリング DRI およびエンジニアリングファシリテーターと連携し、GitLab と JiHu の間の円滑な機能を確保するためのプロセスを定義および維持する

### プロダクトマネージャーの責任

JiHu のコントリビューションは、コミュニティコントリビューションと類似しています。違いは、ボリュームと頻度が高いことです。JiHu が GitLab コードベースに習熟するにつれて、JiHu は GitLab にどこでどのようにコントリビュートできるかを理解し学ぼうとしています。プロダクトマネージャーは、公開されている方向性を共有し、JiHu チームと連携して JiHu が自給自足で効率的になれるよう支援できます。

時々、プロダクトマネージャーは JiHu からの具体的な提案に対するフィードバックを提供したり、直接対応したりするように求められます。GitLab の PM は GitLab のエンジニアと JiHu チームのコラボレーションを促進する支援を行うべきです。これは、プロダクトの方向性に不一致がある場合は、JiHu が GitLab がマージするつもりのないものに時間を費やすことのないように、早期に指摘することを意味します。

プロダクトマネージャーが JiHu のカウンターパートとの接続にヘルプを必要とする場合は、[#jihu-product](https://gitlab.slack.com/archives/C01S8CFF7HR)でプロダクト DRI にメンションしてください。

### プロダクトデザイナーの責任

GitLab のプロダクトデザイナーは、レビューとガイダンスの責任を負いますが、JiHu がコントリビュートしたい Issue の完全なデザイン作業を引き受けるべきではありません。JiHu にはこれらの Issue を実装の準備が整うように手伝う独自のプロダクトデザインチームがあります。

**プロセス**

JiHu がアップストリームにコントリビュートしようとする Issue にプロダクトデザイナーがメンションされたら、プロダクトデザイナーは、その Issue に [Pajamas ガイドライン](https://design.gitlab.com)、[プロダクト原則](/handbook/product/product-principles)、またはチームの計画作業と矛盾しない明確な提案がすでにあるかどうかを確認します。

明確なデザイン提案がまだない場合、または Pajamas やプロダクト原則と矛盾がある場合、デザイナーは Issue が実装に進む前に必要なものについてコメントを残します。

#### JiHu とのマイルストーン製品計画プロセス

コラボレーションとフィードバックを促進するため、JiHu は GitLab のマイルストーン計画プロセスに先行して計画し、GitLab プロダクトグループが実装前にフィードバックを提供する時間を確保します。毎マイルストーンで次のことが発生します：

1. JiHu は [gitlab-jh-enablement プロジェクト](https://gitlab.com/gitlab-jh/gitlab-jh-enablement)でマイルストーン計画 Issue を作成します。これは[この例](https://gitlab.com/gitlab-jh/gitlab-jh-enablement/-/issues/269)のようなものです。JiHu は通常、月の 18 日の 2 週間前に計画を提供します。
1. GitLab.org プロジェクトにすでに Issue がない項目については、JiHu チームが Issue を作成します。既存の Issue がある場合、それはマイルストーン計画 Issue からリンクされます。これにより、GitLab プロダクトグループは他の日々の作業が追跡されている同じ場所で JiHu のコントリビューションを追跡できます。
1. プロダクト DRI は [JiHu マイルストーンレビューテンプレート](https://gitlab.com/gitlab-com/Product/-/blob/main/.gitlab/issue_templates/Monthly-JiHu-Milestone-Review.md)を通じて、認識を促進しコラボレーションを奨励します
1. 個々のプロダクトマネージャーとそのエンジニアリングのカウンターパートは、必要に応じて JiHu にフィードバックを提供します

##### 大規模プロダクトイニシアチブの計画

IP を作成することを目的として、JiHu は複数のマイルストーンにまたがる大規模なプロダクトイニシアチブを引き受けます。このタイプのプロダクトイニシアチブはより多くの調整を必要とします。JiHu と GitLab の代表者は、これらのプロダクト計画について定期的に同期を取ります。目標は大規模なイニシアチブを早期に特定し、適切な DRI をループに入れることです。このタイプのプロダクトイニシアチブの一例は[パイプラインエディタの Visual Builder](https://gitlab.com/groups/gitlab-org/-/epics/4499)です。

#### プロダクトマネージャーが責任を負わないもの

GitLab のプロダクトマネージャーは JiHu のプロダクト判断に責任を負いませんが、JiHu のプロダクトマネージャーとのコラボレーションとフィードバックは推奨され歓迎されます。

- PM がコミュニティコントリビューションの裁定者ではないのと同様に、プロダクトマネージャーは JiHu チームが取り組むものの裁定者ではありません
- プロダクトマネージャーは、ティアや価格設定など、JiHu のプロダクト判断には責任を負いません
- JiHu のマイルストーン計画をレビューする際は：
  1. 自分のプロダクト領域における JiHu の計画を認識する
  1. GitLab のプロダクト方針に従ってガイダンスを提供する
  1. サプライズを避け、JiHu の成功を支援する。フィードバックに時間がかかる場合は、事前に知らせる
  1. 与えるべきフィードバックがなければ、フィードバックを提供する必要はない。JiHu のコントリビューションは他のコミュニティコントリビューションと同じであり得る

### JiHu 独自機能の差別化

JiHu ディストリビューション向けの独自機能は、`/jh` [ディレクトリ](https://gitlab.com/gitlab-org/gitlab-jh-mirrors/-/tree/main-jh/jh)に含めることで差別化します。ただし、JiHu チームメンバーからのコントリビューションの大部分は `/jh` ディレクトリの外側にあるべきであり、これは大部分のコントリビューションが GitLab Core 向けであり、特定の機能のみが /jh オファリング独自であるという期待を示しています。

## リンク

- [GitLab licensed its technology to new independent Chinese company](https://about.gitlab.com/blog/2021/03/18/gitlab-licensed-technology-to-new-independent-chinese-company/)
- [GitLab licensing technology to independent Chinese company FAQ](/handbook/company/faq-gitlab-licensing-technology-to-independent-chinese-company/)
- [China Service Working Group](/handbook/company/working-groups/china-service/)
