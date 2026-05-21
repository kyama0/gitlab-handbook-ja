---
title: GitLab Dedicated 概要
category: GitLab Dedicated
description: "GitLab Dedicated サポート概要。"
upstream_path: /handbook/support/workflows/dedicated/
upstream_sha: 0353e616a41b1d1664a95cc83c80b01f990a912f
translated_at: "2026-05-08T20:30:00Z"
translator: claude
stale: false
lastmod: "2026-04-06T21:06:06+00:00"
---

### 概要

[GitLab Dedicated](https://docs.gitlab.com/subscriptions/gitlab_dedicated/) は、サポートの観点から見ると、SaaS と Self-Managed の組み合わせとして機能します。顧客はインスタンスへの完全な管理者アクセス権を持ちますが、インフラストラクチャやバックエンド設定にはアクセスできません。このワークフローでは、GitLab Dedicated のサポート提供に関する違いと詳細をまとめます。

GitLab Dedicated チケットに取り組む際、Issue がアプリケーションの問題なのかインフラストラクチャの問題なのかを判断する、というメンタルモデルに従うのが良いでしょう。

- アプリケーションの問題、つまり Issue が GitLab アプリケーション内にある場合は、[GitLab Dedicated で利用できない機能](https://docs.gitlab.com/subscriptions/gitlab_dedicated/#unavailable-features) に注意しながら、Self-Managed インスタンスとして扱うことができます。
- インフラストラクチャの問題の場合は、[Request for Help](https://gitlab.com/gitlab-com/request-for-help/-/issues/new?issuable_template=SupportRequestTemplate-GitLabDedicated) を開いて SRE と連携するか、[インシデントの確認](https://gitlab.com/gitlab-com/gl-infra/gitlab-dedicated/incident-management/-/issues/?type%5B%5D=incident) や [自分でインシデントを発生させる](#raise-a-dedicated-incident) ことを検討します。SRE が使用している [runbook](https://gitlab.com/gitlab-com/gl-infra/gitlab-dedicated/team/-/tree/main/runbooks) は、追加のコンテキストとして役立つ場合があります。

`gitlab.com`、self-managed、GitLab Dedicated の違いについてさらに学ぶには、[SaaS、Self-Managed、Dedicated トラブルシューティング表](/handbook/support/workflows/saas_sm_cheatsheet/) を使用してください。

GitLab Dedicated のチケットに取り組みたい場合は、サポートトレーニングで [テンプレートを使用して Issue を作成](https://gitlab.com/gitlab-com/support/support-training/-/issues/new?issuable_template=GitLab%20Dedicated) し、[GitLab Dedicated エンジニアリング概要](https://gitlab-com.gitlab.io/gl-infra/gitlab-dedicated/team/engineering/overview.html) (GitLab 内部のみ) を読むことを検討してください。

以下は、その他の GitLab Dedicated サポートワークフローページのリストです。これは、ワークフローカテゴリが再導入されるまでの暫定的な対応策です。

- [GitLab Dedicated ログ](/handbook/support/workflows/dedicated_logs/)
- [GitLab Dedicated オブザーバビリティとモニタリング (Grafana)](/handbook/support/workflows/dedicated_instance_health/)
- [GitLab Dedicated Switchboard トラブルシューティング](/handbook/support/workflows/dedicated_switchboard/)
- [GitLab Dedicated 用ホストランナー](dedicated_runners.md)

GitLab 内の他の GitLab Dedicated 関連ページへのリンクは以下のとおりです:

- ドキュメント: [Configure GitLab Dedicated](https://docs.gitlab.com/administration/dedicated/)
- Product: [Switchboard](/handbook/engineering/infrastructure-platforms/gitlab-dedicated/switchboard/)
- インフラストラクチャ: [GitLab Dedicated 内部ドキュメント](https://gitlab-com.gitlab.io/gl-infra/gitlab-dedicated/team/) (GitLab 内部のみ)
- CSM: [GitLab Dedicated 顧客との関わり](https://internal.gitlab.com/handbook/customer-success/csm/gitlab-dedicated/) (GitLab 内部のみ)

### GitLab 製品自体ではなく、インフラストラクチャの取り扱いに関連するチケットへの対応

GitLab Dedicated チケットの取り扱いは、他のチケットと同じ方法でアプローチしてください: ドキュメント、ハンドブック、さまざまな Issue トラッカーを使用して、顧客のリクエストに対処してください。テナントのプロビジョニングやインフラストラクチャ管理に関連することは、異なるアプローチが必要です:

- ドキュメントとハンドブックを確認する
- コンプライアンスに関する問い合わせは、`trust.gitlab.com` の [GitLab Trust Center](https://trust.gitlab.com/?product=gitlab-dedicated) を顧客に案内する
- GitLab Trust Center で対応されていない質問については、CSM を顧客に案内する

### GitLab Dedicated インスタンスでのテストと再現

GitLab サポートは、テストと問題の再現目的のために GitLab Dedicated インスタンスへのアクセス権を持っています。このインスタンスは以下の URL でアクセスできます:

- GitLab: https://dedicatedtestsandbox.gitlab-private.org
- OpenSearch: https://opensearch.dedicatedtestsandbox.gitlab-private.org/_dashboards
- Grafana: https://grafana.dedicatedtestsandbox.gitlab-private.org
- Switchboard: https://console.gitlab-private.org/tenants/40

GitLab Dedicated インスタンスへの招待を受け取るには、[#support_gitlab-dedicated](https://gitlab.enterprise.slack.com/archives/C058LM1RL3V) で Armin、Daphne、Wade、または Wei-Meng に依頼してください。

GitLab Duo Enterprise の割り当てシートをリクエストすることもできます。

### テストの実施

GitLab Support Dedicated インスタンスでテストを実行する際は、

- テストが [Sandbox Cloud Realm](/handbook/company/infrastructure-standards/realms/sandbox/) にデプロイされたインスタンスで実施できないか検討してください
- Slack チャンネル [#support_gitlab-dedicated](https://gitlab.enterprise.slack.com/archives/C058LM1RL3V) で連絡してください
- 完了したら変更を元に戻してください

テストインスタンスは GitLab サポートチーム内で共有されているため、テストがインスタンスのパフォーマンスに影響する可能性がある場合は、テストの開始時に推定時間とともにメッセージを投稿してください。
テスト完了時に変更を元に戻し、`:done:` 絵文字を使用してテストが完了し、インスタンスが以前の状態に戻ったことを示してください。

このインスタンスは [`Test` 環境](https://gitlab.com/gitlab-com/gl-infra/gitlab-dedicated/team/-/tree/main#deployed-environments) にデプロイされています。

### Dedicated インスタンスへの管理者アクセス

GitLab Dedicated チームは、Dedicated インスタンスの GitLab アプリケーションの [Admin Area](https://docs.gitlab.com/administration/) への管理者アクセス権を **持っていません**。GitLab サポートチームも持っていません。顧客組織内の選ばれた個人が **Admin Area** へのアクセス権を持っています。Admin Area での変更が必要なサポートリクエスト (たとえば、2FA のリセットなど) は、顧客組織内の適切なチームによって実行される必要があります。

### 内部のログ、データ、グラフの共有

GitLab Dedicated 顧客とは、内部のログ、データ、グラフをデフォルトで視覚的または物理的に共有すべきではありません。共有すべきでないものの例には、グラフのスクリーンショット、コピーされたログエントリ、生のログダンプなどが含まれます (ただしこれらに限定されません)。

誤解を避けるため:

- 内部ログとは、[GitLab アプリケーションによって生成されないログ](/handbook/support/workflows/dedicated_logs/#sharing-logs) を指します。
- 内部データおよびグラフには、Grafana で利用可能なすべてのデータが含まれます。
理由を理解するための背景情報をいくつか:

1. GitLab Dedicated には Service Level Availability SLO が付帯しており、これが満たされない場合、GitLab に金銭的なペナルティが発生します。
1. 2023 年 10 月時点で、GitLab Dedicated のエンジニアリングチームのキャパシティは限定的です。チームは時間の大半をエンジニアリング作業に費やし、重大ではない顧客の質問に答える時間を費やすのを避けたいと考えています。

適切なコンテキストや説明なしに内部のログ、データ、グラフを共有すると、顧客が提供された情報を誤解し、関係するすべてのチームにより多くの作業を生み、最悪の場合、GitLab と顧客の関係に不必要なダメージを与える可能性があります。

そのような内部ログ、データ、グラフの顧客との共有が、顧客と GitLab に成果を生み出すと評価する場合は、サポートディレクターに相談してください。これに関する正式なプロセスはまだ定義中であり、承認は現在その都度行われているため遅延が発生することに注意してください。

### ログの取り扱い

ログの取り扱いは [移動されました](/handbook/support/workflows/dedicated_logs/)

### Grafana の取り扱い

Grafana の取り扱いは [移動されました](/handbook/support/workflows/dedicated_instance_health/)

### インスタンスメタデータの表示

Switchboard アプリを使用してください。詳細は [Switchboard ワークフロー](/handbook/support/workflows/dedicated_switchboard/) で確認できます。

#### フィーチャーフラグはサポートされていません

GitLab Dedicated では、[フィーチャーフラグ](https://docs.gitlab.com/subscriptions/gitlab_dedicated/#available-features) はサポートされていません。つまり、Dedicated インスタンスではフィーチャーフラグを有効化／無効化することはできません。顧客が GitLab Rails コンソールでのフィーチャーフラグの変更を要求した場合、GitLab サポートチームは以下を行う必要があります:

- 機能を一般的に利用可能にする (フィーチャーフラグなしで) ことについて、適切な Issue トラッカーで Issue を作成または見つける。
- [フィードバックテンプレート](/handbook/product/product-management/#feedback-template) に従ったコメントで、Issue で [適切なプロダクトマネージャー](/handbook/product/categories/) に通知する。
- 根本的な問題が解決していない場合でも、[私たちはチケットをオープンのままにしません](https://about.gitlab.com/support/general-policies/#we-dont-keep-tickets-open-even-if-the-underlying-issue-isnt-resolved) ことを顧客に通知する。
- 顧客が次のステップに関して質問がないか確認する。

サポートチームメンバーで質問がある場合は、[`#support_gitlab-dedicated`](https://gitlab.enterprise.slack.com/archives/C058LM1RL3V) Slack チャンネルで追加のガイダンスを確認できます。

### 機能提案

GitLab Dedicated の機能提案 Issue は **公開** [`gitlab-org/gitlab` Issue トラッカー](https://gitlab.com/gitlab-org/gitlab/-/issues/?sort=created_date&state=opened&first_page_size=100) に作成すべきです。機能提案 Issue を開く際は、プロダクトマネージャーにメンションしてください。[フィードバックテンプレート](/handbook/product/product-management/#feedback-template) を使用して、機能提案への顧客の関心を登録してください。

### 設定変更

GitLab Dedicated は [Cloud Native Hybrid リファレンスアーキテクチャ](https://docs.gitlab.com/administration/reference_architectures/10k_users/#cloud-native-hybrid-reference-architecture-with-helm-charts-alternative) を使用しています。インスタンスの実装と変更は [instrumentor プロジェクト](https://gitlab.com/gitlab-com/gl-infra/gitlab-dedicated/instrumentor) を介して行われます。

緊急の場合は、[Dedicated インシデントを発生させる](#raise-a-dedicated-incident) ようにしてください。

下記以外の変更が必要な場合は、[`SupportRequestTemplate-GitLabDedicated` で Issue を発生させる](https://gitlab.com/gitlab-com/request-for-help/-/issues/new?issuable_template=SupportRequestTemplate-GitLabDedicated) ようにしてください。

#### Inbound (フォワード) PrivateLink リクエスト

Inbound Private Link 設定は、現在 [顧客が Switchboard でセルフサービスで利用可能](https://docs.gitlab.com/administration/dedicated/configure_instance/network_security/#inbound-private-link) であり、サポートの関与は不要となりました。

#### Outbound (リバース) PrivateLink リクエスト

顧客は、サポートの関与なしに [Switchboard で outbound private link 設定をセルフサービスで実行](https://docs.gitlab.com/administration/dedicated/configure_instance/network_security/#outbound-private-link) できます。

#### IP 許可リストリクエスト

ほとんどの場合、顧客は **Switchboard** を使用して、自身の GitLab Dedicated インスタンスの [IP 許可リストを更新](https://docs.gitlab.com/administration/dedicated/configure_instance/network_security/#ip-allowlist) すべきです。これが不可能な場合:

1. 顧客にチケットで [必要な情報](https://docs.gitlab.com/administration/dedicated/configure_instance/network_security/#ip-allowlist) を提供してもらいます。この場合、IP アドレスのカンマ区切りリストです。
1. [Request for Help Issue](https://gitlab.com/gitlab-com/request-for-help/-/issues/new?issuable_template=SupportRequestTemplate-GitLabDedicated) を開いて、GitLab Dedicated Issue トラッカーで `support::request-for-help`) であることを確認します。

##### IP 許可リスト付きの SCIM / OIDC リクエスト

IP 許可リストを使用している顧客は、SCIM または OIDC エンドポイントをインターネットに有効化することをリクエストできます。これは単純なオン／オフの切り替えですが、Environment Automation チームによって実行される必要があります:

1. GitLab Dedicated Issue トラッカーで [Request for Help Issue](https://gitlab.com/gitlab-com/request-for-help/-/issues/new?issuable_template=SupportRequestTemplate-GitLabDedicated) を開きます。(`support::request-for-help` ラベルが適用されていることを確認)

#### SAML リクエスト

1. 顧客にチケットで [必要な情報](https://docs.gitlab.com/administration/dedicated/configure_instance/authentication/saml/#add-a-saml-provider-with-a-support-request) を提供してもらいます。この場合、SAML 設定ブロックか、顧客から提供された情報のリストになります。
1. 新しい [SAML Config Request Issue](https://gitlab.com/gitlab-com/request-for-help/-/issues/new?issuable_template=SupportRequestTemplate-GitLabDedicatedSAMLConfigRequest) を開いて、`support::request-for-help` ラベルが追加されていることを確認します。
1. 顧客から提供された情報を追加し、必要なフォーマットに合わせます。

#### アプリケーションログリクエスト

[顧客にアプリケーションログへのアクセスを許可する](/handbook/support/workflows/dedicated_logs/#granting-customers-access-to-application-logs) を参照してください。

### Issue の登録

カスタマーサポートが、テナントのリクエストで情報を収集したり問題をデバッグしたりするために Dedicated エンジニアと連携する必要がある場合 (Grafana や OpenSearch では不十分な場合)、[Request for Help Issue トラッカー](https://gitlab.com/gitlab-com/request-for-help/-/issues/) で [`Request for Help` テンプレート](https://gitlab.com/gitlab-com/request-for-help/-/issues/new?issuable_template=SupportRequestTemplate-GitLabDedicated) を使用して Issue を発生させます。

RFH には、すべての重大度レベルに対して 3 営業日の [SLA](https://gitlab-com.gitlab.io/gl-infra/gitlab-dedicated/team/runbooks/on-call.html#sla) があります。[サポート定義](https://support.gitlab.com/hc/en-us/articles/11626416629660-Definitions#definitions-of-support-impact) に基づく Severity 1 と 2 の Issue については、[Dedicated インシデントを発生させる](#raise-a-dedicated-incident) ことを検討してください。判断に迷う場合は、Slack `#support_gitlab-dedicated` で確認してください。

調査の過程で、Request for Help (RFH) Issue を別のチームにエスカレーションする必要があると気付くことがあります。既存のプロセスに従って、[GitLab 開発チームの別グループに正式に支援をリクエスト](/handbook/support/workflows/how-to-get-help/#how-to-formally-request-help-from-the-gitlab-development-team) してください。これを行う際:

- これまでの調査をまとめ、エスカレーション先のチームへの依頼が明確であることを確認する
- GitLab Dedicated Issue トラッカーで RFH Issue に `~workflow-infra::Escalated` ラベルを適用する

### GitLab Dedicated 緊急対応の処理

GitLab Dedicated 顧客緊急対応は、他のすべての顧客緊急対応と同じプロセスで [緊急リクエストのトリアージ](/handbook/support/workflows/customer_emergencies_workflows/#triage-the-emergency-request) を行います。

顧客が可用性またはパフォーマンスの問題を報告している場合:

1. [Dedicated Switchboard](dedicated_switchboard.md#accessing-switchboard) で顧客を検索します。**Overview** タブで、**Active incidents** があるか確認します。
1. 関連するオープンインシデントがある場合:
   - GitLab Dedicated インフラストラクチャチームが積極的に調査していることを顧客に通知します。
   - Dedicated SRE オンコールに連絡を取り、顧客がトラブルシューティングに関与する必要があるかを判断します。
   - 必要に応じて顧客と Dedicated SRE を支援します。
1. オープンなインシデントがない場合は、[Dedicated インシデントを発生させて](#raise-a-dedicated-incident) ください。

#### Switchboard でのテナントステータスの理解

Switchboard の Overview ページには、各 GitLab Dedicated インスタンスのリアルタイムステータス情報が表示されます。Dedicated Switchboard ワークフローの [テナントステータスインジケータの理解](dedicated_switchboard.md#understanding-tenant-status-indicators) を参照してください。

#### Dedicated インシデントを発生させる {#raise-a-dedicated-incident}

GitLab Dedicated インシデントを発生させる際には、3 つすべてのステップを完了する必要があります:

1. [Slack 経由で Dedicated インシデントを宣言](../../engineering/infrastructure-platforms/incident-management/_index.md#reporting-an-incident) します。
   - [Dedicated Switchboard](dedicated_switchboard.md#accessing-switchboard) を参照して、顧客の `internal_reference` と `tenant_id` (識別子としても知られる) を提供します。
1. Slack で自動的に作成されたインシデントチャンネルで、現在の状態のサマリーを提供します。
1. 宣言された Dedicated インシデントは、GitLab.com とは異なり、自動的に EOC をページしません。[インシデントを GitLab Dedicated エンジニアオンコールにエスカレーションする](#escalate-to-gitlab-dedicated-engineer-on-call) に進んでください。

これでインシデントの発生は完了です！

#### GitLab Dedicated エンジニアオンコールへのエスカレーション {#escalate-to-gitlab-dedicated-engineer-on-call}

緊急の Dedicated Issue やインシデントについてすぐに注意を引くために、GitLab Dedicated SRE である GitLab Dedicated エンジニアオンコール (GDEOC) にエスカレーションする必要がある場合があります。

GDEOC をページすることでエスカレーションします。**On-Call Teams** として **dedicated EOC** を選択し、以下のいずれかを行います:

- Slack チャンネルで **📟 Escalate to someone** ボタンをクリックする
- Slack チャンネルに `/inc escalate` と入力する

#### GitLab Dedicated CMOC を関与させる

緊急対応の性質が、顧客に非同期のステータス更新を提供するだけのレベルになった場合、引き継いでもらうために [GitLab Dedicated Communications Manager on Call](/handbook/support/workflows/dedicated_cmoc) の関与を検討してください。
