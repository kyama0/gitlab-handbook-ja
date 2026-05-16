---
title: 高度なサポートトピック
description: サポートチームメンバーが専門スキルを身につけるために完了できるトレーニングモジュール。
upstream_path: /handbook/support/advanced-topics/
upstream_sha: cf317047d2c9678524c0db59ab7ed8c050713245
translated_at: "2026-05-09T00:00:00Z"
translator: claude
stale: false
lastmod: "2025-09-03T10:16:03+00:00"
---

### サポートトレーニングモジュール

サポートチームメンバーが専門スキルを身につけるために完了できる、いくつかのトレーニングモジュールがあります。

#### モジュールチェックリストの作成

トピックに **Docs** へのリンクがある場合、進めながら学習パスを作成してドキュメント化する必要があります。完全な例については [Geo チェックリスト](https://gitlab.com/gitlab-com/support/support-training/blob/main/.gitlab/issue_templates/Geo.md)をご覧ください。**Docs** へのリンクをチェックリストへのリンクに置き換え、リンクの後に **(WIP)** を付けて、現状のリストを終了してもエキスパートバッジが得られないことを人々に伝えてください。

#### トピックの選び方

最近のチケットで答えられなかったものを思い返すのが、通常良い出発点となるので、チームが最も必要としているものを選ぶようにしましょう。どれに取り組むかをマネージャーに伝えると、チームがより専門知識を必要としている別の領域があれば教えてもらえます。他の高度なトピックのチケットには常に答えるようにしますが、専念して学ぶ時間が来たら、一度に 1 つの領域に集中しましょう。

#### 以下のいずれかのモジュールを完了してエキスパートバッジを獲得 {#earn-the-expert-badge-by-completing-any-of-these-modules}

- [Docker](https://gitlab.com/gitlab-com/support/support-training/-/issues/new?issuable_template=Docker)
- [Geo](https://gitlab.com/gitlab-com/support/support-training/-/issues/new?issuable_template=Geo)
- Kubernetes [Part 1](https://gitlab.com/gitlab-com/support/support-training/-/issues/new?issuable_template=Kubernetes%20Part%201) and [Part 2](https://gitlab.com/gitlab-com/support/support-training/-/issues/new?issuable_template=Kubernetes%20Part%202)
- [GitLab CI](https://gitlab.com/gitlab-com/support/support-training/-/issues/new?issuable_template=Continuous%20Integration)
- [GitLab API](https://gitlab.com/gitlab-com/support/support-training/-/issues/new?issuable_template=GitLab%20API)
- [LDAP](https://gitlab.com/gitlab-com/support/support-training/-/issues/new?issuable_template=LDAP)
- [High Availability](https://gitlab.com/gitlab-com/support/support-training/-/issues/new?issuable_template=Scaled%20And%20High%20Availability)
- [Git LFS Docs](https://docs.gitlab.com/topics/git/lfs/)
- [Migrate from SVN to Git Docs](https://docs.gitlab.com/user/project/import/#import-repositories-from-subversion)
- [GitLab Pages Docs](https://docs.gitlab.com/administration/pages/)

### ディープダイブ

サポートが属するエンジニアリングチームには、特定のトピックに関する知識を共有する[ディープダイブ](/handbook/communication/deep-dives/)があります。サポートチームも、通常はサポート中心の焦点で、トピックごとのディープダイブを企画・実施することが奨励されています。

#### 説明

**ディープダイブ**は、参加者がそのテーマについてすでにある程度の基本的な理解や適性を持っていることを前提に、特定のトピックに関する知識を共有するセッションです。準備段階から終結段階までの役割を担う、[ホスト](#the-host)、[アシスタント](#assistant)、複数の[参加者](#participants)が登場しますが、GitLab の他の誰でも貢献を歓迎します。

ディープダイブの例:

- Omnibus 上の GitLab Geo（[Geo モジュール](https://gitlab.com/gitlab-com/support/support-training/blob/main/.gitlab/issue_templates/Geo.md)を基に）
- GitLab を用いた ElasticSearch（[GitLab の ElasticSearch ドキュメント](https://docs.gitlab.com/integration/advanced_search/elasticsearch/)を基に）
- 高度なユースケースのための CI 構成（例: docker-in-docker の構成、それを使ったイメージのビルド、Docker レイヤーキャッシングを活用したイメージビルド時間の最適化）（[CI モジュール](https://gitlab.com/gitlab-com/support/support-training/blob/main/.gitlab/issue_templates/CI.md)を基に）

#### ゴール {#goals}

ディープダイブのゴールは:

- 参加者にトピックの深い理解を素早く植え付けること。
- 既存のトレーニングおよび/または製品の弱点を見つけて強化すること。
- 簡単にアクセスして視聴できる録画を作成すること。

#### 役割と責任

##### ホスト {#the-host}

**ホスト**として、あなたはこのディープダイブをリードし、トピックについて平均以上の理解を持つことが期待されます。あなたは[参加者](#participants)が前提知識レベルまでトピックの知識を高めるのを助け、その上で通話中にその知識を構築します。その後、[アシスタント](#assistant)や他の参加者と協力して[永続的な改善を行います](#artifacts)。

通話自体は最も効果的だと思う方法で構成できますが、[ディープダイブの目的](#goals)を達成するために、全体プロセスについて以下の構造が作成されています。

まず、ディープダイブのために [Issue を作成](https://gitlab.com/gitlab-com/support/support-team-meta/issues)し、[そのテンプレート](https://gitlab.com/gitlab-com/support/support-team-meta/blob/master/.gitlab/issue_templates/Deep%20Dive.md)を使用してください。そこにはあなたのタスクが含まれます。要約すると、Issue テンプレートは以下のようないくつかのことを行うように求めます:

- 聴衆となる[参加者](#participants)を見つける
- 通話中および通話後にタスクを手伝う[アシスタント](#assistant)を見つける
- 通話前に質問を準備して臨めるよう、いくつかのタスクを完了するよう求める
- コミュニケーションを取り、タスクを手伝うための Slack チャンネルを作成する
- 通話用の質問とノートのための Google ドキュメントを作成する
- 通話を録画する

通話中、最新の GitLab バージョンに言及して、録画にそのコンテキストを含めるようにしてください。GitLab はイテレーションが速いので、将来動画を見る人が見ているものに関連するコンテキストを持つことが重要です。質問に答える時間 (ドキュメントからの質問も含む) を確保して、通話の全員が混乱点を明確にする機会を得られるようにしましょう。

通話が終わったら、このトピックの将来の学習者が簡単にこの録画を見つけて視聴できるようにすべきなので、Issue ではいくつかの場所にリンクすることも求められます。参加者は[アーティファクトの作成](#artifacts)にも取り組むので、できる限り手伝ってください。

##### 参加者 {#participants}

**参加者**として、あなたはディープダイブの学生です。最終的な目標は、このプロセス全体からできる限り多くを学び、顧客を助け、最終的にはエキスパートになるためによりよく備えることです。

ディープダイブは講義ではなく、円卓ディスカッションを意図しています。誰もがトピックや既存のトレーニングを通った経験についての質問や考えを持ち寄ることが奨励されています。ドキュメントやハンドブックの改善のアイデア、より明確さが必要な箇所、機能改善のアイデアなどはすべて歓迎されます。このより深いレベルの参加が行われるためには、参加者がすでに基礎に精通していて、トピックへのこのより深い掘り下げが行えることが期待されます。

ディープダイブが完了する前後にいくつかのタスクを完了します。通話前のタスクはトピックの基礎を素早く教えることを意図しており、通話後のタスクは通話および通話に至るまでの経験を永続的な変化に変えることを意図しています。

提案:

- ディープダイブはトピックについて比較的素早く多くを学ぶ素晴らしい機会です。協力したり質問したりできる人がたくさんいます。レベルアップするためにこの機会を最大限に活用してください。
- Issue のタスクを使って通話前にできるだけ多くを学んでください。これによりディープダイブから最大限を引き出せます。
- たくさん質問してください。Slack チャンネル、Google ドキュメント、または GitLab の他の場所で質問してください。
- 後でアーティファクトを作成するために使えるよう、トレーニング資料やドキュメントで欠けているものを追跡しておいてください。
- 自由にタスクのいくつかまたはすべてでペアリングしてください。

##### アシスタント {#assistant}

**アシスタント**は、[ホスト](#the-host)とともにディープダイブ Issue に割り当てられた[参加者](#participants)です。参加者としての役割に加えて、あなたの目的は他の参加者を[アーティファクトを作成する](#artifacts)正しい道に導くことです。

要約すると、Issue テンプレートでは、通話中に詳細なノートを取り、後でそれらのノートを他の参加者が[アーティファクトを作成する](#artifacts)ために使えるタスクに変換することが求められます。それらのアーティファクトが作成され、Google ドキュメントの内容がより永続的な場所を見つけたら、[それを非推奨化](/handbook/communication/#how-to-deprecate-a-google-doc)します。

#### アーティファクト {#artifacts}

製品とそのトレーニングを強化するという[ゴール](#goals)を達成するため、ディープダイブはいくつかのアーティファクトを生み出すことが期待されます。

最初にして最も重要なアーティファクトは、簡単にアクセスできるように作られた録画へのリンクです。

[関連モジュール](#earn-the-expert-badge-by-completing-any-of-these-modules)がある場合、もう 1 つのアーティファクトは録画を見るステップを作成するマージリクエストです。

ディープダイブの終わりに、結果のノートはワーキング Google ドキュメントからより永続的な場所に移されるべきです。これは Issue および/またはマージリクエストの形を取ります。以下にそれらがどのようなものになるかの例を示します:

- 新しい機能を作成したりバグレポートをファイリングしたりするための Issue
- 何かを明確にしたりトラブルシューティング手順をドキュメントに追加したりするためのマージリクエスト
- 新しいドキュメントセクションを追加するための Issue
- モジュールを更新、改良、分割、または結合するためのマージリクエスト
