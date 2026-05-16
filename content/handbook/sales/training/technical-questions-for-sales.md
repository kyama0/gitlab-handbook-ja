---
title: "セールス向けの技術的質問"
description: "セールス効率を改善するため、GitLab Solution Architect チームは GitLab セールスチームメンバーが回答できるようにすべき最も一般的な技術的質問を特定し、回答しました"
upstream_path: /handbook/sales/training/technical-questions-for-sales/
upstream_sha: 1e195b58b9f249ff10bd0e705106c320fee86141
translated_at: "2026-05-11T00:00:00Z"
translator: claude
stale: false
lastmod: "2025-01-04T01:51:25+00:00"
---

## **はじめに**

セールス効率を向上させ、GitLab セールスチームメンバーの Solution Architect (SA) への依存度を減らすため、SA チームは GitLab セールスチームメンバーが回答できるべきだと考える最も一般的な技術的質問を特定し、回答しました。以下の質問は、[DevOps ライフサイクルステージ](https://about.gitlab.com/stages-devops-lifecycle/)別に整理されています。

### Manage

#### .com を使用する際に利用できる認証オプションは何ですか？

- **短い回答**：SCIM、SSO、OAuth
- **コンテキスト動画**（4 分、2020 年 5 月）：

<figure class="video_container">
  <iframe src="https://www.youtube.com/embed/8o1Ifdte6Ps" frameborder="0" allowfullscreen="true"> </iframe>
</figure>

- **詳細**：[System for Cross-domain Identity Management (SCIM) ドキュメント](https://docs.gitlab.com/ee/user/group/saml_sso/scim_setup.html)を確認してください

#### .com 上のユーザーアクセスを管理するには、どのようなオプションがありますか？

- **短い回答**：グループの Members セクションで、グループオーナーは既存または新規ユーザーをグループに招待できます。グループオーナーは、非メンバーがグループへのアクセスをリクエストする機能を有効化または無効化することもできます。SCIM を構成すると、ユーザーをグループにゲストとして自動的に追加できます。
- **コンテキスト動画**（10.5 分、2020 年 5 月）：

<figure class="video_container">
  <iframe src="https://www.youtube.com/embed/cq85NMeO_YY" frameborder="0" allowfullscreen="true"> </iframe>
</figure>

- **詳細**：[GitLab.com グループ向け SAML SSO ドキュメント](https://docs.gitlab.com/ee/user/group/saml_sso/)を確認してください

#### 顧客は GitLab 内でユーザーロールをどのようにセットアップしカスタマイズすべきですか？

- **短い回答**：GitLab は、グループレベルおよびプロジェクトレベルの可視性設定とメンバーのユーザーアクセスレベルの組み合わせによってアクセス制御を管理します。グループとプロジェクトには 3 つのレベルの可視性があり、ユーザーには 5 つのレベルのアクセスがあります。
- **コンテキスト動画**（5 分、2020 年 5 月）：

<figure class="video_container">
  <iframe src="https://www.youtube.com/embed/N1YmkdvN2Bc" frameborder="0" allowfullscreen="true"> </iframe>
</figure>

- **詳細**：GitLab には複数の種類の権限があり、権限を扱うものを実装する際は、それらすべてを考慮する必要があります。[GitLab 権限ガイド](https://docs.gitlab.com/ee/development/permissions.html)を確認してください。

#### ユーザーを自動プロビジョニングするにはどうすればよいですか？

- **短い回答**：LDAP 統合を使用します
- **コンテキスト動画**（5.5 分、2020 年 5 月）：

<figure class="video_container">
  <iframe src="https://www.youtube.com/embed/2UvAKN3W_zY" frameborder="0" allowfullscreen="true"> </iframe>
</figure>

- **詳細**：[統合を通じてユーザーを作成するドキュメント](https://docs.gitlab.com/ee/user/profile/account/create_accounts.html#create-users-through-integrations)を確認してください

#### .com の場合と self-managed の場合とで、ユーザー管理はどのように異なりますか？

- **短い回答**：self-managed の管理者は環境を完全に所有しているため、より柔軟性と構成制御が高くなります。主な違いには 3 つのバケットがあります：

1. 共有サーバーでは不可能なインスタンスレベルの制御
1. ディレクトリ統合オプション
1. GitLab.com にいくつか欠けている認証オプション（例：Kerberos やスマートカード認証）

- **コンテキスト動画**（3 分、2020 年 5 月）：

<figure class="video_container">
  <iframe src="https://www.youtube.com/embed/x1_b2iqKOfI" frameborder="0" allowfullscreen="true"> </iframe>
</figure>

- **詳細**：管理者にはより強力なユーザー管理機能があります。[GitLab.com と self-managed のすべての違い](https://about.gitlab.com/features/)を確認してください。

### Manage クイズ

- 上記の動画とハンドブックリソースに基づく Manage ステージのトップ技術的質問について、こちらの短い[クイズ](https://forms.gle/imYEn2k2C8aTxMBC8)に回答する時間を取ってください。

### Plan

#### プロジェクト／グループの使用に関するベストプラクティスは何ですか？

- **短い回答**：グループは、プロジェクトを整理し、それらへの権限を制御し、それらにわたるデータを集約するために使用されます。
- **コンテキスト動画**（5.5 分、2020 年 5 月）：

<figure class="video_container">
  <iframe src="https://www.youtube.com/embed/sgXoGdpMbd0" frameborder="0" allowfullscreen="true"> </iframe>
</figure>

- **詳細**：
  - [No Tissues with Issues](/handbook/marketing/brand-and-product-marketing/product-and-solution-marketing/getting-started/101/) ページを確認してください
  - こちらの [How to set up GitLab groups and projects to run multiple Agile teams with microservices](https://www.youtube.com/watch?v=VR2r1TJCDew) 動画（2019 年 1 月、15 分）を視聴してください

#### Jira をどのように統合できますか？

- **短い回答**：GitLab は、プロジェクト計画やソースコード管理から CI/CD、モニタリング、セキュリティに至るまで、すべてを単一のアプリケーションとして提供する完全な DevOps プラットフォームです。GitLab Issue は、アイデア管理、イテレーション計画、Issue トラッキング、ソフトウェア開発のための強力なツールです。しかし、多くの組織が長年 Jira を使用しており、既存のデータやビジネスプロセスを構築していることを認識しています。これらの顧客の中には、Jira から移行することが困難でコストがかかりすぎる場合があります。私たちの信念の中核は、人（およびツール）はすべて 1 か所にある場合に最もよく機能するということです。これらの顧客にサービスを提供するため、私たちは GitLab が Jira と並行して見事に動作する優れた統合を構築しています。顧客が GitLab Issue への移行の準備ができたら、それを支援するためのツールやプラクティスも提供しています。
- **コンテキスト動画**（5 分、2020 年 5 月）：

<figure class="video_container">
  <iframe src="https://www.youtube.com/embed/et3umKvcrX4" frameborder="0" allowfullscreen="true"> </iframe>
</figure>

- **詳細**：[GitLab Jira 統合ページ](https://about.gitlab.com/solutions/jira/)を確認してください

#### Free と Premium の Jira 統合の違いは何ですか？

- **短い回答**：GitLab Premium と GitLab Ultimate は、統合ポイント、統合リンク、統合セットアップ、同期頻度、ユーザー認証について、より堅牢なオプションを提供します。
- **更新**：動画の最後では、Jira Development Panel を差別化要素として説明しています。Jira Development Panel 統合は、その後 13.4 で Core に移行しました。
- **コンテキスト動画**（5 分、2020 年 5 月）：

<figure class="video_container">
  <iframe src="https://www.youtube.com/embed/t0_52j2Zp2I" frameborder="0" allowfullscreen="true"> </iframe>
</figure>

- **詳細**：[GitLab Jira development panel 統合](https://docs.gitlab.com/ee/integration/jira/)ドキュメントを確認してください

### Plan クイズ

- 上記の動画とハンドブックリソースに基づく Plan ステージのトップ技術的質問について、こちらの短い[クイズ](https://forms.gle/ywpWPxZjmDQJ1seB8)に回答する時間を取ってください。

### Create

#### 顧客はどのように SVN から git に移行できますか？

- **短い回答**：顧客が検討すべきオプションは 2 つあります：

1. SVN をミラーリングし、SVN と Git の両方を維持する
1. カットオーバー移行

- **コンテキスト動画**（7.5 分、2020 年 5 月）：

<figure class="video_container">
  <iframe src="https://www.youtube.com/embed/Eza1wXoDLvs" frameborder="0" allowfullscreen="true"> </iframe>
</figure>

- **詳細**：[SVN から GitLab への移行ドキュメント](https://docs.gitlab.com/ee/user/project/import/index.html#import-from-subversion)を読んでください

#### 開発者ワークフローのベストプラクティスは何ですか？

- **短い回答**：いくつかのベストプラクティス：
  - 冗長なタスクを自動化する
  - ステークホルダーのためにシンプル化しコラボレーションを可能にする
  - 情報やデータを処理するのに必要な時間を削減する
  - すべてのステークホルダーに可視性を提供する
  - アカウンタビリティを確立する
- **コンテキスト動画**（8 分、2020 年 5 月）：

<figure class="video_container">
  <iframe src="https://www.youtube.com/embed/fmxftqvtg7U" frameborder="0" allowfullscreen="true"> </iframe>
</figure>

- **詳細**：[GitLab Flow 入門](https://about.gitlab.com/blog/2023/07/27/gitlab-flow-duo/)を確認してください

#### EE ティア間のマージリクエスト承認に関する違いは何ですか？

- **短い回答**：GitLab Core にはマージリクエスト (MR) 承認はありません。GitLab Free では、承認できる任意の数の有資格承認者を持つ 1 つの承認ルールがあり、codeowners ファイルで有資格承認者を設定するオプションがあります。GitLab Premium では、特定の承認者を持つ複数の承認ルールがあります（codeowners ファイルからのオプションの必須承認者）。GitLab Ultimate では、マージリクエストがセキュリティ脆弱性やソフトウェアライセンスコンプライアンス違反を導入する際に、セキュリティチームのメンバーからの承認を必須とするようにマージリクエスト (MR) 承認を構成できる、セキュリティ承認が導入されます。
- **コンテキスト動画**：

<figure class="video_container">
  <iframe src="https://www.youtube.com/embed/tQ_o_RkB4xg" frameborder="0" allowfullscreen="true"> </iframe>
</figure>

- **詳細**：[GitLab Create 機能ページ](https://about.gitlab.com/features/#create)を確認してください

### Create クイズ

- 上記の動画とハンドブックリソースに基づく Create ステージのトップ技術的質問について、こちらの短い[クイズ](https://forms.gle/wF5KoPFKCwBXJSLKA)に回答する時間を取ってください。

### Verify

#### GitLab CI はどのように機能しますか？

- **短い回答**：近日公開予定
- **コンテキスト動画**（9 分、2020 年 5 月）：

<figure class="video_container">
  <iframe src="https://www.youtube.com/embed/bmnFgGSY_L8" frameborder="0" allowfullscreen="true"> </iframe>
</figure>

- **詳細**：継続的インテグレーション (CI) は、Git リポジトリにホストされているアプリケーションのコードベースに小さなコードチャンクをプッシュし、プッシュごとにスクリプトのパイプラインを実行して、メインブランチにマージする前にコードの変更をビルド、テスト、検証することで機能します。[GitLab CI/CD ドキュメント](https://docs.gitlab.com/ee/ci/)を確認してください。

#### GitLab でテスト管理をどのように行えますか？

- **短い回答**：近日公開予定
- **コンテキスト動画**（10 分、2020 年 5 月）：

<figure class="video_container">
  <iframe src="https://www.youtube.com/embed/qmJXn2GlASY" frameborder="0" allowfullscreen="true"> </iframe>
</figure>

- **詳細**：GitLab Product チームはこの分野の機能強化を検討しています。[Quality Management Direction ページ](https://about.gitlab.com/direction/plan/)を確認してください。

#### Runner とは何で、実際にはどのように動作しますか？

- **短い回答**：近日公開予定
- **コンテキスト動画**（18 分、2020 年 5 月）：

<figure class="video_container">
  <iframe src="https://www.youtube.com/embed/IsthhMm64u8" frameborder="0" allowfullscreen="true"> </iframe>
</figure>

- **詳細**：GitLab Runner は、ジョブを実行し、結果を GitLab に送信するために使用されるオープンソースプロジェクトです。これは、GitLab に含まれるオープンソースの継続的インテグレーションサービスでジョブを調整する [GitLab CI/CD](https://about.gitlab.com/solutions/continuous-integration/) と組み合わせて使用されます。詳細は [GitLab Runner ドキュメント](https://docs.gitlab.com/runner/)を読んでご確認ください。

#### Runner インフラのベストプラクティスは何ですか？

- **短い回答**：グループ Runner は、大規模プロジェクト（複数のリポジトリを使用するプロジェクト）と複数のチーム（トップレベルグループが分離を提供）に最適です
- **コンテキスト動画**（9.5 分、2020 年 5 月）：

<figure class="video_container">
  <iframe src="https://www.youtube.com/embed/6Kb3BJ0bXrw" frameborder="0" allowfullscreen="true"> </iframe>
</figure>

- **詳細**：[GitLab Runner の使用および管理に関するベストプラクティスドキュメント](https://docs.gitlab.com/runner/fleet_scaling/)を確認してください

### Secure

#### GitLab のセキュリティ機能は何ですか？

- **短い回答**：シフトレフト！マージリクエストでアプリケーションセキュリティスキャンを実行し、開発者が脆弱性に迅速に対処できるようにします — これが「DevSecOps」の意味で、結果としてスピード、効率、セキュリティが向上します。
- **コンテキスト動画**（9 分、2020 年 5 月）：

<figure class="video_container">
  <iframe src="https://www.youtube.com/embed/jXNrUBRWynA" frameborder="0" allowfullscreen="true"> </iframe>
</figure>

- **詳細**：GitLab は、不正アクセス、データ漏洩、サービス拒否などにつながる可能性のあるセキュリティ脆弱性をアプリケーションでチェックできます。[GitLab Secure ドキュメント](https://docs.gitlab.com/ee/user/application_security/)を確認してください。

#### セキュリティスキャナーで Docker-in-Docker (DinD) を使用しなくなるのはいつですか？

- **短い回答**：13.0 以降、セキュリティスキャナーでデフォルトで DinD を使用しなくなりました。GitLab 12.10 以降、5 つすべてのスキャナー (SAST, DAST, Container, License, Dependency) はオフラインで実行できます。
- **コンテキスト動画**（6 分、2020 年 5 月）：

<figure class="video_container">
  <iframe src="https://www.youtube.com/embed/6NVBGe9-kF0" frameborder="0" allowfullscreen="true"> </iframe>
</figure>

- **詳細**：これは継続中の取り組みです。詳細は [Use non-DinD mode by default for Security Products Issue](https://gitlab.com/gitlab-org/gitlab/-/issues/37278) を参照してください。

### Release

現時点では質問はありません。

### Configure

現時点では質問はありません。

### Monitor

現時点では質問はありません。

### Govern

現時点では質問はありません。

### Enable

#### 高可用性 (HA) を実現する最良の方法は何ですか？

- **短い回答**：GitLab は AWS 上で Autoscaling でスケールします。他のクラウドおよび On-Prem では、HA が組み込まれています。Kubernetes (K8s) では、ハイブリッドアプローチを採用しています。
- **コンテキスト動画**（6.5 分、2020 年 5 月）：

<figure class="video_container">
  <iframe src="https://www.youtube.com/embed/EtRfe40yvOk" frameborder="0" allowfullscreen="true"> </iframe>
</figure>

- **詳細**：詳細については[リファレンスアーキテクチャ](https://docs.gitlab.com/ee/administration/reference_architectures/)ドキュメントを確認してください。

#### ディザスタリカバリ (DR) を実現する最良の方法は何ですか？

- **短い回答**：近日公開予定
- **コンテキスト動画**：近日公開予定
- **詳細**：[Geo によるレプリケーションドキュメント](https://docs.gitlab.com/ee/administration/geo/index.html)を確認してください

#### GitLab の (AWS/Azure/GCP) に対するすぐに使えるサポートは何ですか？

- **短い回答**：近日公開予定
- **コンテキスト動画**：近日公開予定
- **詳細**：GitLab の[マルチクラウドサポート](https://about.gitlab.com/topics/multicloud/)を参照してください

#### GitLab にはサイジング情報を伴うリファレンスアーキテクチャがありますか？

- **短い回答**：正しい（最も適切な）リファレンスアーキテクチャを決定するための 3 つの要件は次のとおりです：

1. ユーザー数
2. HA (高可用性) が必要かどうか
3. [Geo (レプリケーション)](https://docs.gitlab.com/ee/administration/geo/index.html) が必要かどうか

- **コンテキスト動画**（9 分、2020 年 5 月）：

<figure class="video_container">
  <iframe src="https://www.youtube.com/embed/-WaX9nLKQME" frameborder="0" allowfullscreen="true"> </iframe>
</figure>

- **詳細**：GitLab は、シングルボックスの GitLab インストールをスケールアップすることが現実的または実行可能でなくなった場合に、self-managed インスタンスが組織のニーズに合わせてスケールアウトできるようにする多数のスケーリングオプションをサポートしています。[GitLab のリファレンスアーキテクチャドキュメント](https://docs.gitlab.com/ee/administration/reference_architectures/index.html#reference-architectures)を確認してください。

#### GitLab インスタンスをバックアップするためのベストプラクティスは何ですか？

- **短い回答**：近日公開予定
- **コンテキスト動画**：近日公開予定
- **詳細**：[GitLab のバックアップとリストアドキュメント](https://docs.gitlab.com/ee/administration/backup_restore/index.html)を確認してください

#### GitLab は顧客にどのインストール方法を推奨していますか？

- **短い回答**：近日公開予定
- **コンテキスト動画**：近日公開予定
- **詳細**：GitLab は、インストールが速く、アップグレードが簡単で、他の方法には見られない信頼性を高める機能が含まれているため、Omnibus パッケージインストールのダウンロードを強く推奨しています。GitLab を実行するには[少なくとも 4GB の空き RAM](https://docs.gitlab.com/ee/install/requirements.html#cpu) も強く推奨します。詳細は [GitLab インストールページ](https://about.gitlab.com/install/)で確認してください。

#### 顧客はどのように GitLab CE から EE に移行しますか？

- **短い回答**：近日公開予定
- **コンテキスト動画**：近日公開予定
- **詳細**：[Enterprise Edition へのアップグレードページ](https://about.gitlab.com/upgrade/)を確認してください

#### 顧客はどのように GitLab self-managed から .com に移行しますか？

- **短い回答**：近日公開予定
- **コンテキスト動画**：近日公開予定
- **詳細**：方法については [Enterprise Edition へのアップグレードページ](https://docs.gitlab.com/ee/user/project/import/#migrating-from-self-managed-gitlab-to-gitlabcom)を参照してください
