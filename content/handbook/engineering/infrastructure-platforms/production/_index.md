---
title: "Production"
controlled_document: true
upstream_path: "/handbook/engineering/infrastructure-platforms/production/"
upstream_sha: "1e195b58b9f249ff10bd0e705106c320fee86141"
translated_at: "2026-05-14T00:00:00Z"
translator: claude
stale: false
---

{{% alert color="warning" %}}
GitLab のチームメンバーで、GitLab.com の可用性に関する問題について Reliability Engineering に通知したい場合は、こちらのインシデント報告に関するクイックインストラクションを参照してください: [インシデントの報告](/handbook/engineering/infrastructure-platforms/incident-management/#reporting-an-incident)。
{{% /alert %}}

{{% alert color="warning" %}}
GitLab のチームメンバーで、セキュリティ問題のヘルプを探している場合は、[Security On-Call へのエンゲージ](/handbook/security/security-operations/sirt/engaging-security-on-call/) セクションを参照してください。
{{% /alert %}}

{{< label name="Visibility: Audit" color="#E24329" >}}

## プロダクション環境

GitLab.com のプロダクション環境は、gitlab.com を運用する、または運用を支えるサービスで構成されています。
プロダクションサービスの完全なリストについては、[service catalog](https://gitlab.com/gitlab-com/runbooks/-/blob/master/services/service-catalog.yml) を参照してください。

## ヘルプを得る方法

[ヘルプの取得方法](/handbook/engineering/infrastructure-platforms/)を参照してください。

## なぜ `infrastructure` と `production` のキューがあるのか?

### 前提

長期的には、プロダクション環境に対する作業を行うチームが増えていきます:

- Release Engineering はプロダクションへデプロイを行う
- Security はプロダクションに対するスキャンを行う
- Google が基盤となるプロダクションインフラストラクチャに対して作業を行う場合がある

増え続ける*機能別*キューをまたいでプロダクション内の**イベント**を追跡し続けることはできません。

さらに、これらのチームは機能（例: security）とサービスの両方についてオンコールローテーションを持つようになります。オンコール中の人にとって、こうしたイベントを追跡するための一元化されたトラッキングポイントがあるほうが、各種キューをあちこち見るよりも効果的です。プロダクション環境に関するタイムリーな情報（イベントの発生時刻や、オンコール担当者が状況を理解するまでの時間）はクリティカルです。`production` キューはプロダクションイベント情報を一元化します。

### 実装

機能別キュー（`infrastructure`、`security` など）はチームのワークロードを追跡し、こなすべき作業のソースとなります。これらの作業の一部は明らかにプロダクションに影響します（新しいストレージノードの構築とデプロイ）。一部はプロダクションにデプロイされるまで影響しません（x、y、z を行うツールを開発する）。

`production` キューはプロダクションにおけるイベントを追跡します。具体的には:

- [変更](/handbook/engineering/infrastructure-platforms/change-management/)
- [インシデント](/handbook/engineering/infrastructure-platforms/incident-management/)
- デルタ（例外） -- まだ handbook に書き起こす必要あり

時間の経過とともに、自動化にフックを実装し、変更の監査データを `production` キューに*自動的に*注入する予定です。

これによりデータの単一の情報源も実現します。例えば現在、週次のインシデントレポートは On-call Handoff と Infra Call のドキュメントの両方に書き写されています（後者では例外も示しています）。これらのミーティングは目的が異なりますが、データの一部は重複しています。このデータの入力は、ドキュメントで手動構築するのではなく、`production` キューへのクエリにすべきです。

加えて、エラーバジェットも追跡する必要があり、これも `production` キューから派生させるべきです。

`database` キューも `infrastructure` キューに統合します。データベースはたしかにインフラストラクチャの特別な要素ですが、例えばストレージノードもまたそうです。

オンコール中の SRE にとって、ページを発生させるあらゆるイベント（関連する一連のページの集合かもしれません）には、`production` キュー内に Issue が作成される *べき* です。重大度の定義に従い、少なくとも *可視* な影響（ユーザーへの機能的な不便）がある場合、定義上それはインシデントであり、Issue には Incident テンプレートを使用すべきです。これはおそらくページイベントの大多数を占めます。例外は典型的に明らかで、影響が私たちのみに及び顧客は気付かないようなケースや、インシデントになる前のレベルのアラートで、それに対処することでインシデントを回避できる場合です。

### セキュリティ関連の変更

GitLab Inc. が顧客または従業員によって使用する認証および認可機構に対する直接的または間接的な変更はすべて、以下のいずれかのチームのメンバーによる追加のレビューと承認が必要です:

- [production team](/handbook/engineering/infrastructure-platforms/production/) のメンバー
- [security team](https://about.gitlab.com/security/) のメンバー
- 別チームに所属する staff レベル以上の開発者

このプロセスは、以下のリポジトリで
[MR 承認](https://docs.gitlab.com/ee/user/project/merge_requests/approvals/) を使って承認を必須化することで強制されます:

- [gitlab-oauth2-proxy](https://gitlab.com/gitlab-cookbooks/gitlab-oauth2-proxy)
- [gitlab_users](https://gitlab.com/gitlab-cookbooks/gitlab_users)

その他のリポジトリでもこの承認が必要になる場合があり、
ケースバイケースで評価できます。

セキュリティチームを変更にループインすべきタイミングはいつか? 以下のいずれかの領域に大きな変更を加えている場合です:

1. クレデンシャル/トークンの処理
1. クレデンシャル/トークンの保存
1. 特権昇格のロジック
1. 認可ロジック
1. ユーザー／アカウントのアクセスコントロール
1. 認証機構
1. 不正利用関連の活動

#### タイプラベル

タイプラベルは非常に重要です。これは Issue がどのような種類のものであるかを定義します。すべての Issue に 1 つ以上のラベルが必要です。

|       ラベル        | 説明                                                                                                             |
|--------------------|-------------------------------------------------------------------------------------------------------------------------|
|      `~Change`     | インフラストラクチャに対する Change を表します。詳細は [Change](/handbook/engineering/infrastructure-platforms/change-management/) を参照してください                             |
|     `~Incident`    | インフラストラクチャに対する Incident を表します。詳細は [Incident](/handbook/engineering/infrastructure-platforms/incident-management/) を参照してください                           |
|     `~Database`    | データベース関連の問題を示すラベル                                                                                  |
|     `~Security`    | セキュリティ関連の問題を示すラベル                                                                                  |

#### サービス

サービスの一覧はこちらに記載されています: https://gitlab.com/gitlab-com/runbooks/blob/master/services/service-catalog.yml

### 常に他の人を助ける

私たちは決してチームメンバーへの援助やブロック解除を止めるべきではありません。これに向けて、自動化やセルフサービス化の対象領域を浮かび上がらせるためにも、データは常に収集すべきです。リクエストから適切なラベル付きの Issue を作成するのが最初のステップです。デフォルトでは、ヘルプを求めている人が Issue を作成しますが、必要に応じてそのステップを助けることもできます。

何らかの理由でこの Issue が緊急の場合は、上記の手順に従ってラベル付けし、進行中の Milestone に追加するべきです。

## オンコールサポート

スケジュール、ワークフロー、ドキュメントの管理に関する詳細は、[オンコールドキュメント](/handbook/engineering/on-call/) を参照してください。

### オンコールのエスカレーション

私たちが使うシステムやサービスの数を考えると、それら全てでエキスパートレベルに達するのはほぼ不可能です。さらに難しくしているのは、インフラストラクチャに加えられる変更の頻度です。そのため、オンコール担当者がすべてのシステムについて全てを知っている必要はありません。さらにインシデントはしばしば複雑で曖昧な性質を持ち、異なる視点や解決のアイディアが必要となります。

ヘルプを求めることは良いプラクティスと見なされ、能力不足と誤解されるべきではありません。エスカレーションのガイドラインやチェックリストに従ってヘルプを求めることは、情報を引き出し、より迅速な問題解決をもたらします。例えば、インシデント後に未文書化の問題がランブックでカバーされるとき、または他の人が読める Slack チャンネルで質問がされるときなど、チーム全体の知識を向上させます。これはオンコール緊急対応にもプロジェクト作業にも当てはまります。質問がどれほど初歩的でも、それで評価されることはありません。

SRE チームの第一の責任は gitlab.com の可用性です。このため、オンコール担当者の支援はプロジェクト作業より優先されるべきです。これは、すべてのインシデントで SRE チーム全員がすべてを投げ出して関わるべきという意味ではありません。しかし、問題に関連する分野での知識や経験がある人は、それをプロジェクト作業より優先する権利があると感じるべきです。過去の経験では、インシデントの重大度が上がるにつれて、または潜在的な原因が排除されるにつれて、社内のさまざまな人がますます関与してきました。

## プロダクションイベントのロギング

すべての構成、デプロイ、機能フラグのイベントは、events インデックスを使って Elastic Search に記録されます。
イベントへのアクセス方法やログ記録方法の詳細は、[events ランブック](https://gitlab.com/gitlab-com/runbooks/-/blob/master/docs/events/README.md) を参照してください。

これらのイベントには、デプロイ、機能フラグ、構成（Chef、Terraform）、すべての Kubernetes 変更が含まれます。
イベントは staging と production の環境ごとに別々に記録されます。

### インシデントのサブタイプ - 不正利用

インシデントによっては、問題を引き起こした使用パターンが不正利用であることが判明する場合があります。私たちには不正利用の定義と扱いに関するプロセスがあります。

1. 不正利用の定義は、[handbook のセキュリティ不正利用運用セクション](/handbook/security/)に記載されています
1. GitLab.com の可用性に影響するインシデントが発生した場合、SRE チームはシステム可用性を維持するためにすぐに行動を取る場合があります。ただし、チームは同時に、セキュリティ不正利用チームを必ず関与させる必要があります。新しい [セキュリティオンコールローテーション](/handbook/security/security-operations/sirt/engaging-security-on-call/) が PagerDuty 内に確立されています - Security Manager ローテーションと並んでアラートできる Security Responder ローテーションがあります。

## バックアップとリストア

[バックアップとリストアのポリシー](/handbook/engineering/gitlab-com/policies/backup) を参照してください。

## パッチ適用

### ポリシー

GitLab infrastructure チームが管理・保守するプロダクション環境のすべてのサーバーは、最新のセキュリティパッチで積極的に保守・パッチ適用されます。

### パッチ適用戦略のサマリー

chef で管理されるすべての本番サーバーには、ベースロールが構成されており、各サーバーは [`unattended-upgrades`](https://gitlab.com/gitlab-com/gl-infra/chef-repo/blob/8c522363bde0248f6d66adae0d1b6c233d31d261/roles/gprd-base.json#L31-42) をインストールして、構成された apt ソースから重要なセキュリティパッケージを自動的にインストールします。
`Unattended-upgrades` は UTC の朝 6 時から 7 時の間に毎日更新をチェックします。時間はランダム化されて、同じタイミングでミラーにアクセスしないようにしています。すべての出力は
`/var/log/unattended-upgrades/*.log` にログ出力されます。

Unattended upgrades は、GitLab omnibus パッケージを除くすべてのパッケージのセキュリティアップグレードを自動的に適用するよう構成されています。

クリティカルな変更プロセスは [緊急変更プロセス](/handbook/engineering/infrastructure-platforms/emergency-change-processes) の概要で説明されています。

### パッチ適用の検証

パッチ検証は 3 つの方法で実施できます。

- [wiz.io](https://www.wiz.io/) の脆弱性検出と、ホストのログを照合して手動で検証する。
- [Vulnerability Management チームの自動化](/handbook/security/product-security/vulnerability-management/automation/) によって GitLab に上げられた脆弱性とトラッキング Issue を確認する
- Slack で `#g_vulnerability_management` で Vulnerability Management に問い合わせる

### 一般的な OS (Ubuntu または他の Linux) のバージョン更新

Infrastructure は、Ubuntu LTS リリースの 6 か月後から OS アップグレードを開始し、すべての GCP コンピュートインスタンスを過去 5 年以内にリリースされた LTS で維持するように努めます。古い OS リリースのセキュリティアップデートを延長するために [Ubuntu Pro](https://ubuntu.com/pro) を利用しており、[ESM](https://ubuntu.com/security/esm) サービスを使い、また実行中のシステムに Kernel セキュリティアップデートを自動で適用するために [Ubuntu Livepatch](https://ubuntu.com/security/livepatch) を利用しています。

## ペネトレーションテスト

Infrastructure は、ペネトレーションテストで見つかった問題について [security team](/handbook/security/) をサポートします。pen test の調整、または脆弱性に対処・修復するための手順の調整は、[infrastructure issue tracker](https://gitlab.com/gitlab-com/infrastructure/issues/) の Issue を通じて infrastructure チームに伝える必要があります。

Issue では以下を提供してください:

- テストの範囲
- 提案する時間枠
- テストの深度
- テスト対象のサービス
- 行われる手順
- 影響を受ける可能性のあるチーム（サポート、セキュリティなど）

Issue には `~security` ラベルを付け、infrastructure マネージャーに `/cc` してください。
