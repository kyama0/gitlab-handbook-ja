---
title: "Production"
controlled_document: true
upstream_path: "/handbook/engineering/infrastructure-platforms/production/"
upstream_sha: "0e6f01390a34aeb6706ace17d8d3c50e74e82d0d"
translated_at: "2026-04-29T02:44:36Z"
translator: claude
stale: false
---


<div class="my-4 border-l-4 border-amber-500 bg-amber-50 px-4 py-3 rounded-r">

GitLab チームメンバーで GitLab.com の可用性の問題について Reliability Engineering に通知したい場合は、インシデントを報告するための簡単な手順をこちらで確認してください: [インシデントの報告](/handbook/engineering/infrastructure-platforms/incident-management/#reporting-an-incident)。

</div>



<div class="my-4 border-l-4 border-amber-500 bg-amber-50 px-4 py-3 rounded-r">

セキュリティの問題についてサポートを求めている GitLab チームメンバーは、[セキュリティオンコールへの連絡](/handbook/security/security-operations/sirt/engaging-security-on-call/)セクションを参照してください。

</div>


<span class="inline-block rounded px-2 py-0.5 text-xs font-medium" style="background-color:#E24329;color:#ffffff">Visibility: Audit</span>

## 本番環境

GitLab.com の本番環境は、gitlab.com を運営する、またはその運営をサポートするサービスで構成されています。
本番サービスの完全なリストは[サービスカタログ](https://gitlab.com/gitlab-com/runbooks/-/blob/master/services/service-catalog.yml)をご覧ください。

## サポートの受け方

[サポートの受け方](/handbook/engineering/infrastructure/team/)を参照してください。

## なぜ `infrastructure` と `production` のキューがあるのか？

### 前提

長期的には、追加のチームが本番環境での作業を実施するようになります。

- Release Engineering が本番環境でのデプロイを行います
- Security が本番環境に対するスキャンを実施します
- Google が基盤となる本番インフラで作業を行う場合があります

増加する*機能的な*キューをまたいで本番環境での**イベント**を追跡し続けることはできません。

さらに、これらのチームは機能（例: セキュリティ）とサービスの両方でオンコールのローテーションを持つようになります。オンコール担当者にとって、さまざまなキューを調べるよりも、これらのイベントを追跡するための一元的なポイントを持つ方が効果的です。本番環境に関する情報のタイムリーな提供（イベントが発生しているタイミングと、オンコール担当者が状況を把握するまでの時間という意味で）は重要です。`production` キューは本番環境のイベント情報を一元化します。

### 実装

機能的なキューはチームのワークロード（`infrastructure`、`security` など）を追跡し、実行すべき作業の発生源です。この作業の一部は明らかに本番環境に影響を与えます（新しいストレージノードのビルドとデプロイ）が、本番環境にデプロイされるまで影響しないものもあります（x, y, z を行うツールの開発など）。

`production` キューは本番環境のイベント、具体的には以下を追跡します。

- [変更](/handbook/engineering/infrastructure-platforms/change-management/)
- [インシデント](/handbook/engineering/infrastructure-platforms/incident-management/)
- デルタ（例外）-- ハンドブックへの記載が必要

時間をかけて、`production` キューに変更監査データを*自動的に*注入する自動化のフックを実装していきます。

これにより、単一のデータソースも実現できます。現在、例えば、その週のインシデントレポートはオンコールハンドオフと Infra Call の両方の文書に転記されています（後者では例外も表示しています）。これらのミーティングは異なる目的を持ちますが、重複するデータがあります。このデータの入力は、文書での手動構築ではなく `production` キューへのクエリから行うべきです。

さらに、エラーバジェットの追跡も必要であり、これも `production` キューから導出されるべきです。

`database` キューも `infrastructure` キューに統合します。データベースは確かにインフラの特別な部分ですが、例えばストレージノードも同様です。

オンコール SRE にとって、ページが発生するすべてのイベント（イベントは関連するページのグループである場合があります）は `production` キューで Issue が作成されるべきです。重大度の定義に従い、少なくとも*目に見える*影響（ユーザーへの機能的な不便）がある場合は、それはインシデントであり、Issue には Incident テンプレートを使用する必要があります。これがページイベントの大半になります。例外は通常明白です。つまり、私たちだけに影響し顧客は気づかないもの、またはアクションによってインシデントを回避できるプレインシデントレベルのアラートです。

### セキュリティ関連の変更

GitLab Inc. が顧客または従業員向けに使用する認証・認可メカニズムへのすべての直接的または間接的な変更は、以下のチームの少なくとも 1 つのメンバーによる追加レビューと承認が必要です。

- [production チーム](/handbook/engineering/infrastructure-platforms/production/)のメンバー
- [security チーム](https://about.gitlab.com/security/)のメンバー
- スタッフレベル以上の別チームの開発者

このプロセスは、[MR 承認](https://docs.gitlab.com/ee/user/project/merge_requests/approvals/)を使用して承認が必須となっている以下のリポジトリに適用されます。

- [gitlab-oauth2-proxy](https://gitlab.com/gitlab-cookbooks/gitlab-oauth2-proxy)
- [gitlab_users](https://gitlab.com/gitlab-cookbooks/gitlab_users)

その他のリポジトリもこの承認が必要となる場合があり、ケースバイケースで評価されます。

セキュリティチームをいつ変更に巻き込むべきか？以下の領域に大きな変更を加える場合です。

1. 認証情報/トークンの処理
1. 認証情報/トークンの保存
1. 権限昇格のロジック
1. 認可ロジック
1. ユーザー/アカウントのアクセス制御
1. 認証メカニズム
1. 不正使用関連の活動

#### タイプラベル

タイプラベルは非常に重要です。これらは Issue の種類を定義します。すべての Issue は 1 つ以上のラベルを持つ必要があります。

|       ラベル        | 説明                                                                                                             |
|--------------------|-------------------------------------------------------------------------------------------------------------------------|
|      `~Change`     | インフラへの変更を表します。詳細は: [変更](/handbook/engineering/infrastructure-platforms/change-management/)を確認してください |
|     `~Incident`    | インフラのインシデントを表します。詳細は: [インシデント](/handbook/engineering/infrastructure-platforms/incident-management/)を確認してください |
|     `~Database`    | データベース関連の問題のラベル                                                                                  |
|     `~Security`    | セキュリティ関連の問題のラベル                                                                                  |

#### サービス

サービスリストはこちらを参照してください: https://gitlab.com/gitlab-com/runbooks/blob/master/services/service-catalog.yml

### 常に他者を助ける

チームメンバーのサポートとブロック解除を決して止めるべきではありません。そのために、自動化の機会と自動化の作成に役立てるためのデータを常に収集すべきです。適切なラベルを付けてリクエストから Issue を作成することが最初のステップです。デフォルトでは、サポートを依頼する人が Issue を作成しますが、そのステップについても必要に応じて助けることができます。

この Issue が何らかの理由で緊急の場合は、上記の手順に従ってラベルを付け、進行中のマイルストーンに追加します。

## オンコールサポート

スケジュール、ワークフロー、文書化の管理についての詳細は、[オンコールドキュメント](/handbook/engineering/on-call/)を参照してください。

### オンコールエスカレーション

私たちが使用するシステムとサービスの数を考えると、それらすべてでエキスパートレベルに達することは非常に困難、あるいは不可能です。インフラへの変更の速さがさらに困難にしています。このため、オンコール担当者はすべてのシステムについてすべてを知っていることを期待されていません。さらに、インシデントは複雑で曖昧な性質を持つことが多く、解決のために異なる視点とアイデアが必要です。

助けを求めることは良い習慣と見なされ、能力不足と混同されるべきではありません。エスカレーションガイドラインとチェックリストに従いながら助けを求めることで、情報が明らかになり、問題の解決が早まります。また、未文書化の問題がインシデント後にランブックに記載されたり、他の人が読める Slack チャンネルで質問が行われたりすることで、チーム全体の知識も向上します。これはオンコールの緊急事態だけでなく、プロジェクト作業においても同様です。どんなに基礎的に思える質問であっても、その質問によって判断されることはありません。

SRE チームの主要な責任は gitlab.com の可用性です。このため、オンコール担当者への助けはプロジェクト作業よりも優先されるべきです。すべてのインシデントに対して SRE チーム全員がすべてを中断して関与すべきとは言いません。しかし、問題に関連する分野での知識と経験がある場合は、プロジェクト作業よりもそちらを優先する権利があるということです。過去の経験から、インシデントの重大度が増したり、潜在的な原因が除外されるにつれて、会社全体からますます多くの人々が関与するようになることが示されています。

## 本番環境イベントのログ記録

すべての設定、デプロイ、フィーチャーフラグのイベントは events インデックスを使用して Elastic Search に記録されます。
イベントのアクセス方法とログ記録の方法の詳細については、[events ランブック](https://gitlab.com/gitlab-com/runbooks/-/blob/master/docs/events/README.md)を参照してください。

これらのイベントには、デプロイ、フィーチャーフラグ、設定（Chef、Terraform）、およびすべての Kubernetes の変更が含まれます。
イベントはステージングと本番環境で別々に記録されます。

### インシデントのサブタイプ - 不正使用

一部のインシデントでは、問題につながった使用パターンが不正使用であると判明する場合があります。不正使用の定義と対処方法についてはプロセスがあります。

1. 不正使用の定義は[ハンドブックのセキュリティ不正使用対応セクション](/handbook/security/)を参照してください
1. GitLab.com の可用性に影響するインシデントが発生した場合、SRE チームはシステムを利用可能な状態に保つために即座に対応策を取ることがあります。ただし、チームはセキュリティ不正使用チームにも即座に関与してもらう必要があります。PagerDuty に新しい[セキュリティオンコールローテーション](/handbook/security/security-operations/sirt/engaging-security-on-call/)が確立されています - Security Responder ローテーションがあり、Security Manager ローテーションとともにアラートを送ることができます。

## バックアップと復元

[バックアップと復元](/handbook/engineering/gitlab-com/policies/backup)のポリシーを参照してください。

## パッチ適用

### ポリシー

GitLab インフラチームが管理・維持するすべての本番環境サーバーは、最新のセキュリティパッチで積極的に維持・パッチ適用されます。

### パッチ適用戦略のまとめ

Chef で管理されているすべての本番サーバーには、設定された apt ソースから重要なセキュリティパッケージを自動的にインストールするために [`unattended-upgrades`](https://gitlab.com/gitlab-com/gl-infra/chef-repo/blob/8c522363bde0248f6d66adae0d1b6c233d31d261/roles/gprd-base.json#L31-42) を設定するベースロールがあります。
`Unattended-upgrades` は毎日 UTC 6 時から 7 時の間に更新を確認します。ミラーへのアクセスが同時に集中することを避けるために時間はランダム化されています。すべての出力は `/var/log/unattended-upgrades/*.log` にログ記録されます。

Unattended upgrades は GitLab オムニバスパッケージを除くすべてのパッケージについて、セキュリティアップグレードを自動的にパッチ適用するように設定されています。

クリティカルな変更プロセスは[緊急変更プロセス](/handbook/engineering/infrastructure-platforms/emergency-change-processes)の概要に記載されています。

### パッチ適用の検証

パッチの検証は 3 つの方法で実施できます。

- ホストのログと [wiz.io](https://www.wiz.io/) の脆弱性検知結果をクロスチェックすることによる手動検証。
- [脆弱性管理チームの自動化](/handbook/security/product-security/vulnerability-management/automation/)によって GitLab に起票された脆弱性とトラッキング Issue のレビュー。
- Slack の `#g_vulnerability_management` で脆弱性管理チームに連絡。

### 一般的な OS（Ubuntu またはその他の Linux）バージョンのアップデート

インフラは Ubuntu LTS リリースの 6 ヶ月後から OS アップグレードを開始し、すべての GCP コンピュートインスタンスをリリースから 5 年以内の LTS に維持するよう努めます。古い OS リリースのセキュリティアップデートの延長のために [Ubuntu Pro](https://ubuntu.com/pro) の [ESM](https://ubuntu.com/security/esm) サービスを活用し、実行中のシステムへのカーネルセキュリティアップデートを自動適用するために [Ubuntu Livepatch](https://ubuntu.com/security/livepatch) を使用しています。

## 侵入テスト

インフラは侵入テスト中に発見された問題について[セキュリティチーム](/handbook/security/)をサポートします。侵入テストの調整や脆弱性に対処・修正するための手順の調整については、[インフラ Issue トラッカー](https://gitlab.com/gitlab-com/infrastructure/issues/)の Issue を通じてインフラチームに連絡してください。

Issue には以下を記載してください。

- テストの範囲
- 推奨される期間
- テストの深度
- テストするサービス
- 実施される手順
- 影響を受ける可能性のあるチーム（サポート、セキュリティなど）

Issue には `~security` ラベルを付け、インフラマネージャーを `/cc` してください。
