---
title: "Verify プロダクトグループ"
description: "Verify Product Group は、共有、発見可能性、非同期コミュニケーションへのバイアスを高めることを目指しています。"
upstream_path: /handbook/product/groups/verify/
upstream_sha: 1e195b58b9f249ff10bd0e705106c320fee86141
translated_at: "2026-05-13T12:00:00Z"
translator: claude
stale: false
lastmod: "2026-02-23T15:35:45-08:00"
---

### Verify

<figure class="video_container">
  <iframe src="https://www.youtube.com/embed/9iF9zWAxdH0" frameborder="0" allowfullscreen="true"> </iframe>
</figure>

### このページの意図

Verify Product Group は、[共有](/handbook/values/#share)、[発見可能性](/handbook/values/#findability) を高め、[非同期コミュニケーションへのバイアス](/handbook/values/#bias-towards-asynchronous-communication) を奨励したいと考えています。私たちは、チームプロセスを紹介すると同時に、レトロスペクティブのためのチームメンバー間でのプロセスに関する開かれた議論を奨励する機会を提供するフォーラムとして、このハンドブックページを使用します。

### どこで連絡が取れますか?

Slack: #s_verify

GitLab プロジェクト: [Verify](https://gitlab.com/gitlab-org/verify-stage)

Verify チーム:

- [Verify:Pipeline Execution](/handbook/engineering/devops/verify/pipeline-execution/)
- [Verify:Pipeline Authoring](/handbook/engineering/devops/verify/pipeline-authoring/)
- [Verify:Runner](/handbook/engineering/devops/runner/)
- [Verify:Pipeline Security](/handbook/engineering/development/sec/software-supply-chain-security/pipeline-security/)

### あなたたちは何をしているのですか?

このプロダクトグループの目的は、[Verify ステージの方向性](https://about.gitlab.com/direction/ops/#verify) に記載されています。これには、パイプライン体験、`.gitlab-ci.yml` ファイルの作成または編集、パイプライン内でのジョブの実行、CI/CD のさまざまなテスト機能が含まれますが、これらに限定されません。

![Verify Banner](/images/product/groups/verify_groups_banner.jpg)

#### 継続的インテグレーションとランナーの境界（オーナーシップ/DRI）

一般的に、継続的インテグレーションとランナーの機能は相互依存している（ランナーは CI ジョブを実行するビルドエージェントです）ものの、Verify カテゴリとして見ると、それらは異なる機能領域を表しています。しかし、高レベルのカテゴリにきれいに収まらない機能や能力について、どのチームまたはプロダクトマネージャーが DRI であるかを見分けるのが難しい場合があります。このセクションは、それらの境界を明確化することを目的としています。

GitLab では、責任を割り当てるために [DACI](/handbook/people-group/directly-responsible-individuals/#dri-accountable-consulted-informed-daci) を使用することは、全員が Consulted と Informed であることを意味しますが、相談が必要な重要なチームメンバーを強調するため、以下の表に明示的に誰かを指定します。

指定された DRI は依然として意思決定を所有し、重要なチームメンバーへの通知/相談の責任を負いますが、「Must be Consulted」指定者(複数可)は、これらのチームメンバーが DRI プロダクトマネージャーに整合したコアエンジニアリングチームの一員でない場合、誰を関与させるべきかの推測作業を不要にします。

| カテゴリ | コードベース | 説明 | PM DRI | EM DRI | 相談必須 |
| ------ | ------ |------ |------ |------ |------ |
| Runner Core |runner|セルフマネージドの顧客がさまざまなコンピュートプラットフォームとアーキテクチャ（runner バイナリ、docker イメージ）で使用するためのコアランナーコードベースの機能開発|Runner PM - Darren Eastman|Runner EM - Nicole Williams|N/A|
| Runners Fleet |RAILS|GitLab UI でのランナーの設定、使用、管理のための機能開発。|Runner PM - Darren Eastman|Runner EM - Nicole Williams|tbd|
| Runner SaaS |autoscaler|SaaS ランナー（Linux、Windows、macOS）と社内 GitLab ランナーフリート|Runner PM - Gabriel Engel|Runner EM - Nicole Williams| Infrastructure Mgr. - David Smith|
|SaaS ランナー向けコンピュート分管理|RAILS|SaaS ランナーの範囲内で、GitLab SaaS の顧客向けコンピュート分設定の変更。|SaaS runners PM Gabriel Engel|Runner EM - Nicole Williams|N/A|
|CI パイプライン実行とパフォーマンス|RAILS|GitLab UI でのパイプラインの実行またはトリガーのための機能と能力。|CI PM |CI EM - Cheryl Li|N/A|
|CI/CD キューイング GitLab SaaS およびセルフマネージド|RAILS|CI ジョブのキューイングアーキテクチャ。| Pipeline Execution PM |リードエンジニア: Kamil Trzciński、Grzegorz Bizon、Stan Hu| |
|CI/CD Fair Scheduling GitLab SaaS |RAILS|CI ジョブの公平なスケジューリングアーキテクチャと設定。|Pipeline Execution PM |リードエンジニア: Kamil Trzciński、Grzegorz Bizon、Stan Hu| |

### ワークフロー

私たちは、マイルストーンと [GitLab の Product Development Flow](/handbook/product-development/how-we-work/product-development-flow/) に整合したカンバンスタイルで作業します。

### クロスファンクショナルなパートナーシップ

私たちは他のチームを横断してよく仕事をしており、他者とのエンゲージメントをより良くするよう努めています。この対話の一員になることに興味がある場合は、#s_verify slack グループに連絡してください!

#### Product Marketing エンゲージメント

私たちは [Product Marketing Management](/handbook/marketing/brand-and-product-marketing/product-and-solution-marketing/core-product-marketing/) と非常に密接にパートナーシップを組んでいます。Verify Stage では、[PMM チーム構造](/handbook/marketing/brand-and-product-marketing/product-and-solution-marketing/core-product-marketing/) に定義されている安定したカウンターパートがアサインされており、これは [CI ユースケース](/handbook/marketing/brand-and-product-marketing/product-and-solution-marketing/usecase-gtm/ci/) に整合しています。

私たちには4つの主要プロセスがあります。

1. 半期ごとのステージ全体の GTM & 戦略ポジショニング
1. 四半期ごとの Sales Enablement
1. プロダクトグループ向け四半期ロードマップアライメント
1. プロダクトグループ向け月次リリースポストおよびマーケットポジショニング

##### ステージ全体の GTM & 戦略ポジショニング

- **頻度**: 年2回
- **オーディエンス**: 社内
- **作成される成果物**: デッキ、録画、Issue ボード
- **ゴール**: ステージの半期プロダクト戦略を GTM セールスモーションと競合状況に整合させる30分の録画を提供する。セールスチームのピッチや、見込み客とのコールで初期セールスを行うプロダクトマネージャーにとって有用な成果物を含める。

最近、F[Y22 1H](https://youtu.be/B03ke3WlnaE) で、[デッキ](https://docs.google.com/presentation/d/1K0QXBtW48UbG7uQMaTa83X99RIbDXuY0tFYynSyuSGo/edit) とともに、初めての共同ステージ全体の PMM および Product Positioning を実施しました。

##### Sales Enablement

- **頻度**: 四半期ごと
- **オーディエンス**: 社内
- **作成される成果物**: デッキ、録画
- **ゴール**: フィールドイネーブルメントで使用するため、さまざまなプロダクトトピックに関する10〜30分の録画を提供する。

最近、[cs-skill#116](https://gitlab.com/gitlab-com/sales-team/cs-skills-exchange/-/issues/116) を通じて、技術的なトピックのベンチ構築の議論に参加しました。これらの種類のセッションは、PMM とのパートナーシップで、フィールドのための魅力的なストーリーの構築を支援するために使用されます。

##### プロダクトグループ向けロードマップアライメント

- **頻度**: 四半期ごと
- **オーディエンス**: 外部
- **作成される成果物**: 録画
- **ゴール**: ウェビナー、パートナーコール、ホワイトペーパーで使用するため、さまざまなプロダクトトピックに関する10〜30分の録画を提供する。

これらは、テーマを導き、市場でストーリーを構築する機会を提示するためのものであり、コミットメントではありません。そうでなければ、これらはマイルストーンにスケジュールされます。

##### 機能のリリースポスト & マーケットポジショニング

- **頻度**: 月次
- **オーディエンス**: 外部
- **作成される成果物**: コピー/テキスト
- **ゴール**: プロダクトマネージャーとともに、リリースポストアイテムまたはブログ投稿でマージリクエストでの書面コミュニケーションを提供する。

[Moving CI to Lovable...again](https://about.gitlab.com/blog/2021/02/22/continuously-improving-ci-lovability/) や [the Pipeline Editor](https://about.gitlab.com/blog/2021/02/22/pipeline-editor-overview/) に関する説明など、機能固有のブログ投稿を時々出荷します。これらは、[Release Post レビューとポジショニング](/handbook/marketing/blog/release-posts/#pmm-reviewers) と並んで PMM を含める素晴らしい機会です。

#### カスタマーサクセス & リニューアルエンゲージメント

私たちは、Customer Success（SA/CSM）とプロダクトマネージャーが見込み客と顧客からのプロダクトフィードバックについてシンクするための CS <> Product フィードバックループを持っています。月次のケイデンスで、[cs-product-feedback](https://gitlab.com/gitlab-com/cs-product-feedback) プロジェクトで作成された Issue で捕捉され、この [Issue ボード](https://gitlab.com/gitlab-com/cs-product-feedback/-/boards) に統合された解決すべき問題について議論するために会います。

#### Alliances エンゲージメント

詳細は今後

### コミュニティ貢献

私たちは可能な限り、オープンソースコミュニティを奨励しサポートしたいと考えています。私たちには2つの成功指標があります。

1. [Verify Stage のコミュニティからのマージ済み MR](https://gitlab.com/groups/gitlab-org/-/merge_requests?scope=all&utf8=%E2%9C%93&state=merged&label_name[]=devops%3A%3Averify&label_name[]=Community%20contribution)
1. [MRARR](/handbook/marketing/developer-relations/performance-indicators/#mrarr)

コミュニティからのマージリクエストを可能にするプロセスは、Verify チームページで確認できます。
