---
title: "Verify プロダクトグループ"
description: "Verify Product Group は、共有、発見可能性、非同期コミュニケーションへのバイアスを高めることを目指しています。"
upstream_path: /handbook/product/groups/verify/
upstream_sha: 877082e5cd4baeabe3d6e802b3b4b1efdb6573f1
lastmod: "2026-05-20T09:32:02-07:00"
translated_at: "2026-05-23T12:00:00Z"
translator: claude
stale: false
---

### Verify

<figure class="video_container">
  <iframe src="https://www.youtube.com/embed/9iF9zWAxdH0" frameborder="0" allowfullscreen="true"> </iframe>
</figure>

### このページの目的

Verify Product Group は、[共有](/handbook/values/#share)、[発見可能性](/handbook/values/#findability)を高め、[非同期コミュニケーションへのバイアス](/handbook/values/#bias-towards-asynchronous-communication)を促進することを目指しています。私たちはこのハンドブックページを、チームのプロセスを紹介する場として活用するとともに、レトロスペクティブのためにチームメンバー間でプロセスについてオープンに議論する機会を提供する場としても活用します。

### どこで連絡が取れますか?

Slack: #s_verify

GitLab プロジェクト: [Verify](https://gitlab.com/gitlab-org/verify-stage)

Verify チーム:

- [Verify:Pipeline Execution](/handbook/engineering/devops/verify/pipeline-execution/)
- [Verify:Pipeline Authoring](/handbook/engineering/devops/verify/pipeline-authoring/)
- [Verify:Runner](/handbook/engineering/devops/runner/)
- [Verify:Pipeline Security](/handbook/engineering/development/sec/software-supply-chain-security/pipeline-security/)

### あなたたちは何をしているのですか?

このプロダクトグループの目的は、[Verify ステージのディレクション](https://about.gitlab.com/direction/ops/#verify)に記載されています。これには、パイプラインの体験、.gitlab-ci.yml ファイルの作成やオーサリング、パイプライン内でのジョブの実行、CI/CD におけるさまざまなテスト機能などが含まれますが、これらに限定されません。

![Verify バナー](/images/product/groups/verify_groups_banner.jpg)

#### Continuous Integration と Runner の境界（オーナーシップ／DRI）

一般に Continuous Integration と Runner の機能は相互に依存していますが（Runner は CI ジョブを実行するビルドエージェントです）、Verify のカテゴリーとしては別個の機能領域を表しています。しかし、高レベルのカテゴリーにきれいに収まらないように見える機能やケイパビリティについて、どのチームやプロダクトマネージャーが DRI であるかを見極めるのが難しい場合があります。このセクションは、そうした境界を明確にすることを目的としています。

GitLab では、責任を割り当てるために [DACI](/handbook/people-group/directly-responsible-individuals/#dri-accountable-consulted-informed-daci) を使用しており、これは全員が Consulted（相談を受ける）および Informed（情報を共有される）となることを意味しますが、相談しなければならない重要なチームメンバーを明示するために、下記の表で誰に相談すべきかを明確に指定しています。

記載された DRI は引き続き意思決定のオーナーであり、重要なチームメンバーへの通知・相談に責任を負いますが、'Must be Consulted'（相談必須）に指定された人を明示することで、これらのチームメンバーが DRI のプロダクトマネージャーと連携するコアエンジニアリングチームに属していない場合に、誰を巻き込むべきかを推測する手間を省きます。

| カテゴリー| コードベース|説明|PM DRI|EM DRI|相談必須|
| ------ | ------ |------ |------ |------ |------ |
| Runner Core |runner|さまざまなコンピュートプラットフォームおよびアーキテクチャ上で self-managed の顧客が使用するためのコア Runner コードベースの機能開発（Runner バイナリ、Docker イメージ）|Runner PM - Darren Eastman|Runner EM - Nicole Williams|N/A|
| Runners Fleet |RAILS|GitLab UI における Runner の構成、使用、管理のための機能開発。|Runner PM - Darren Eastman|Runner EM - Nicole Williams|tbd|
| Runner SaaS |autoscaler|SaaS Runner（Linux、Windows、macOS）および GitLab 内部の Runner フリート|Runner PM - Gabriel Engel|Runner EM - Nicole Williams| Infrastructure Mgr. - David Smith|
|SaaS Runner のコンピュート時間管理|RAILS|SaaS Runner のスコープにおける GitLab SaaS の顧客向けのコンピュート時間構成の変更。|SaaS runners PM Gabriel Engel|Runner EM - Nicole Williams|N/A|
|CI パイプラインの実行とパフォーマンス|RAILS|GitLab UI でパイプラインを実行またはトリガーするための機能とケイパビリティ。|CI PM |CI EM - Cheryl Li|N/A|
|CI/CD のキューイング GitLab SaaS および Self-Managed|RAILS|CI ジョブのキューイングアーキテクチャ。| Pipeline Execution PM |リードエンジニア: Kamil Trzciński , Grzegorz Bizon, Stan Hu| |
|CI/CD フェアスケジューリング GitLab SaaS |RAILS|CI ジョブのフェアスケジューリングのアーキテクチャと構成。|Pipeline Execution PM |リードエンジニア: Kamil Trzciński , Grzegorz Bizon, Stan Hu| |

### ワークフロー

私たちは、マイルストーンおよび [GitLab のプロダクト開発フロー](/handbook/product-development/how-we-work/product-development-flow/)に沿って、Kanban スタイルで作業しています。

### 部門横断的なパートナーシップ

私たちは他のチームと頻繁に協働しており、他者との関わり方をより良くしようと努めています。この対話の一員になることに興味がある方は、#s_verify Slack グループにご連絡ください!

#### Product Marketing との関わり

私たちは [Product Marketing Management](/handbook/marketing/brand-and-product-marketing/product-and-solution-marketing/core-product-marketing/) と非常に密接に連携しています。Verify ステージには、[PMM チーム構成](/handbook/marketing/brand-and-product-marketing/product-and-solution-marketing/core-product-marketing/)で定義されている安定したカウンターパートが割り当てられており、これは [CI ユースケース](/handbook/marketing/brand-and-product-marketing/product-and-solution-marketing/usecase-gtm/ci/)に沿っています。

主なプロセスは 4 つあります:

1. 半期ごとのステージ全体の GTM および戦略ポジショニング
1. 四半期ごとのセールスイネーブルメント
1. プロダクトグループ向けの四半期ごとのロードマップアラインメント
1. プロダクトグループ向けの月次リリース投稿と市場ポジショニング

##### ステージ全体の GTM および戦略ポジショニング

- **頻度**: 年 2 回
- **対象**: 社内
- **作成する成果物**: デッキ、録画、Issue ボード
- **目標**: ステージの半期プロダクト戦略を、GTM のセールスモーションおよび競合状況と整合させる 30 分間の録画を提供します。セールスチームがピッチを行う際や、プロダクトマネージャーが見込み顧客とのコールで早期セリングを行う際に役立つ成果物を含めます。

私たちは先日、[FY22 1H](https://youtu.be/B03ke3WlnaE) 向けに、[デッキ](https://docs.google.com/presentation/d/1K0QXBtW48UbG7uQMaTa83X99RIbDXuY0tFYynSyuSGo/edit)とともに、初のステージ全体での PMM とプロダクトポジショニングの合同セッションを実施しました。

##### セールスイネーブルメント

- **頻度**: 四半期ごと
- **対象**: 社内
- **作成する成果物**: デッキと録画
- **目標**: フィールドイネーブルメントで使用するための、さまざまなプロダクトトピックに関する 10 〜 30 分の録画を提供します。

私たちは先日、[cs-skill#116](https://gitlab.com/gitlab-com/sales-team/cs-skills-exchange/-/issues/116) を通じて、技術トピックのベンチ構築に関する議論に参加しました。このようなセッションは、PMM と連携してフィールド向けの説得力のあるストーリーを構築するために活用されます。

##### プロダクトグループ向けロードマップアラインメント

- **頻度**: 四半期ごと
- **対象**: 社外
- **作成する成果物**: 録画
- **目標**: ウェビナー、パートナーコール、ホワイトペーパーで使用するための、さまざまなプロダクトトピックに関する 10 〜 30 分の録画を提供します。

これらはテーマを導き、市場でストーリーを構築する機会を提示することを目的としたものであり、コミットメントではありません。コミットメントであれば、マイルストーンにスケジュールされることになります。

##### 機能向けのリリース投稿と市場ポジショニング

- **頻度**: 月次
- **対象**: 社外
- **作成する成果物**: コピー／テキスト
- **目標**: リリース投稿アイテムまたはブログ投稿において、プロダクトマネージャーとともにマージリクエストでの文章によるコミュニケーションを提供します。

私たちは、[Moving CI to Lovable...again](https://about.gitlab.com/blog/2021/02/22/continuously-improving-ci-lovability/) や、[Pipeline Editor](https://about.gitlab.com/blog/2021/02/22/pipeline-editor-overview/) に関するこの解説のような、機能固有のブログ投稿を出すことがあります。これらは、[リリース投稿のレビューとポジショニング](https://docs.gitlab.com/development/documentation/release_notes/)とともに PMM を巻き込む絶好の機会です。

#### Customer Success と更新の関わり

私たちは、Customer Success（SA／CSM）とプロダクトマネージャーが見込み顧客や顧客からのプロダクトフィードバックについて同期するための、CS <> Product フィードバックループを設けています。月次のリズムで集まり、[cs-product-feedback](https://gitlab.com/gitlab-com/cs-product-feedback) プロジェクトで作成された Issue として記録され、この [Issue ボード](https://gitlab.com/gitlab-com/cs-product-feedback/-/boards)に集約された、解決すべき問題について議論します。

#### Alliances との関わり

詳細は今後追加予定です

### コミュニティ貢献

私たちは、オープンソースコミュニティをできる限り奨励し、サポートしたいと考えています。成功の指標は 2 つあります:

1. [Verify ステージ](https://gitlab.com/groups/gitlab-org/-/merge_requests?scope=all&utf8=%E2%9C%93&state=merged&label_name[]=devops%3A%3Averify&label_name[]=Community%20contribution)におけるコミュニティからのマージ済み MR
1. [MRARR](/handbook/marketing/developer-relations/performance-indicators/#mrarr)

コミュニティからのマージリクエストを可能にするための私たちのプロセスは、Verify チームページに記載されています。
