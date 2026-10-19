---
title: "SAFE データガイド"
description: "SAFE データガイド"
upstream_path: "/handbook/enterprise-data/platform/safe-data/"
upstream_sha: dae94b0752e749cce0ad81e818ba66cae5ba4a11
translated_at: "2026-10-19T10:27:20Z"
translator: claude
stale: false
lastmod: "2026-10-16T19:52:00+02:00"
---

---

## SAFE データとは何か？

Data Team は SAFE データに関して GitLab SAFE [フレームワーク](/handbook/legal/safe-framework/)に従っています。SAFE データおよび SAFE フレームワークとの関連で、`MNPI` および `RESTRICTED_SAFE` も使用される場合があります。

## SAFE データへのアクセス

### Tableau

Tableau ダッシュボードへのアクセスは、ライセンスタイプに基づいています（[Tableau](/handbook/enterprise-data/platform/tableau/) ハンドブックページの Tableau ライセンスを参照してください）。これはジョブの役割によって優先順位が付けられ、[SAFE データアクセスフレームワーク](/handbook/legal/safe-framework/)によって管理されます。Tableau では、[ユーザーグループ](/handbook/enterprise-data/platform/tableau/#user-groups)を使用して SAFE セキュリティフレームワークを適用しています。ダッシュボードが存在できる 4 つの主要なプロジェクト/フォルダーがあります - Development、Production、Ad-hoc、Resources。Development、Production、Ad-hoc の各フォルダーには、Finance や Sales など GitLab のさまざまなチーム向けのサブフォルダーがあります。各チームのフォルダー内には、コンテンツを公開できる 2 つの主要なフォルダー（General と SAFE）があります。

- General フォルダーには GitLab の誰でも閲覧できるデータが含まれています。
- SAFE フォルダーには、重要な非公開情報（MNPI）を含むダッシュボードが含まれており、General SAFE Access ユーザーグループに属するユーザーのみアクセスできます。

[GitLab の SAFE 基準](/handbook/legal/safe-framework/#safe-flowchart)を満たすデータを扱う Tableau Creators の開発ワークフローは、部門の Development プロジェクト内の SAFE フォルダーに公開することです。Creator が Development プロジェクト内の SAFE フォルダー以外にワークブックを公開したい場合は、Tableau プロジェクトの `All Requests` テンプレートを使用して [Issue](https://gitlab.com/gitlab-data/tableau/-/issues/new)を開き、BI Platform チームによるコンテンツのレビューをリクエストしてください。BI Platform チームは、Development プロジェクトの SAFE フォルダー以外にコンテンツを公開することが安全かどうかについて 可否の判断を提供します。

#### GitLab 一般アクセスダッシュボードへのアクセス

一般アクセスダッシュボードはすべての GitLab チームメンバーが利用できます。Tableau へのアクセスリクエスト（チームメンバーがまだアクセスを持っていない場合）は必要ですが、これらの一般アクセスダッシュボードを閲覧するためにこれ以上のアクセスリクエストは必要ありません。権限とアクセスの詳細については、ハンドブックの [Tableau セクション](/handbook/enterprise-data/platform/tableau/#permissions)を参照してください。

#### SAFE ダッシュボードへのアクセス {#accessing-a-safe-dashboard}

すべての SAFE ダッシュボードはさまざまなチームの SAFE フォルダー内に保存されており、権限はユーザーのアクセスグループメンバーシップによって管理されます。1 つの SAFE ダッシュボードへのアクセスは、すべての SAFE ダッシュボードへのアクセスを提供します。SAFE プロジェクト/フォルダーへのアクセスにより、チームメンバーは [Designated Insider](/handbook/legal/publiccompanyresources/#sts=designated%20insiders)となり、[インサイダー取引ポリシー](https://drive.google.com/file/d/1yK4-L3nCEjVi14UwFfp9LNJzJNQdvvLB/view?usp=sharing)の対象になります。General SAFE Access ユーザーグループへのメンバーシップを通じて SAFE ダッシュボード（とスペース）へのアクセスを得るには以下が必要です:

1. 直属マネージャーの承認

SAFE ダッシュボードへのアクセスを得るには:

1. Tableau - SAFE アクセス - [申請者名] の [アクセスリクエスト](https://gitlab.com/gitlab-com/team-member-epics/access-requests/-/issues/24284)を作成する。
1. 直属マネージャーに承認をリクエストする。新しいアクセスリクエスト(/issue)の場合は承認が必要です。
1. 処理が完了すると、Tableau にログインして、リクエストした SAFE ダッシュボードと SAFE アクセスが必要な他のすべてのダッシュボードにアクセスできるようになります。

Snowflake 内の SAFE データへのアクセス手順については、[アクセス](/handbook/enterprise-data/platform/#warehouse-access)を参照してください。

Google Sheets の SAFE データは、[SAFE ダッシュボードへのアクセス](/handbook/enterprise-data/platform/safe-data/#accessing-a-safe-dashboard)の手順を使用してアクセスできます。Google Sheets の SAFE データへのアクセスを得るには、これらの手順に従ってください。

##### SAFE ダッシュボードアクセスのプロビジョニング解除

Data Team は 90 日ごとに[データヘルスとセキュリティ監査](/handbook/enterprise-data/data-governance/data-management/)を実施します。この監査では、Data Team が非アクティブな使用状況も確認します。GitLab チームメンバーが 90 日以上 SAFE ダッシュボードスペースを使用していない場合、アクセスはプロビジョニング解除されます。SAFE ダッシュボードスペースへのアクセスを再度取得するには、新しいアクセスリクエストを作成し、すべての承認を得る必要があります。

#### さまざまな限定アクセスユーザーグループへのアクセス

内部監査関連データや営業開発 SAFE データなど、アクセスしたい限定アクセスユーザーグループにはいくつかの変形があります。これらのグループの説明と、アクセスをリクエストする方法については[こちら](/handbook/enterprise-data/platform/tableau/#user-groups)を参照してください。

### Snowflake

すべての SAFE データは Snowflake の別個のデータベーススキーマ内のテーブルとビューに保存されています。1 つのテーブルへのアクセスはすべての SAFE テーブルへのアクセスを提供します。SAFE データへのアクセスには以下が必要です:

1. 直属マネージャーの承認。

SAFE データへのアクセスを得るには:

1. [アクセスリクエスト](https://gitlab.com/gitlab-com\team-member-epics/access-requests/-/issues\new?issuable_template=Individual_Bulk_Access_Request)を作成し、ニーズと目的を提供する。
2. 直属マネージャーに承認をリクエストする。新しいアクセスリクエスト(/issue)の場合は承認が必要です。
3. リクエストが承認されたら、Snowflake [プロビジョナー](/handbook/business-technology/tech-stack-applications/)にタグ付けすると、リクエストが処理されます。
4. 処理が完了すると、Snowflake の SAFE データ（スキーマ）にアクセスできるようになります。

## データ開発

Snowflake の SAFE データは別個のスキーマに保存されています。SAFE データを含むスキーマには `RESTRICTED_SAFE_*` というプレフィックスが付いています。MNPI データを含むすべてのモデルは、これらのスキーマに保存する必要があります。このプロセスを保護する [CI パイプライン](/handbook/enterprise-data/platform/ci-jobs/#safe_model_script)（`safe_model_script`）があります。作成または変更されたすべてのモデルは CI パイプラインによってチェックされます。開発者として、以下のガバナンスを考慮する必要があります:

- MNPI データを含むテーブル/モデルから読み取り、MNPI がモデルで使用される場合は `mnpi` タグを適用する。その後、データは `RESTRICTED_SAFE_*` スキーマに保存する必要があります。
- `mnpi_exception` タグは、MNPI データを含むテーブル/モデルから読み取るものの、MNPI がモデルで使用**されない**場合に適用します。つまり、MNPI モデルから NON-MNPI フィールドのみが使用される場合です。
- どのタグを適用するかを決定するのはエンジニアの責任です。GitLab SAFE [フレームワーク](/handbook/legal/safe-framework/)に対してモデルで公開されているデータを確認してください。疑問がある場合は、Slack の `#SAFE` チャンネルに連絡してください。
- CI パイプラインはファクトベースで助けてチェックするためにあります（アップストリームモデルタグと現在のモデルタグ）。

この[ビデオ](https://www.youtube.com/watch?v=ICOuerPeAUU)は Snowflake 上での SAFE データプログラム実装の概要を提供します。

以下の図は SAFE データを扱う際や参照する際のプロセスを詳細に説明しています。

![MR プロセス](/images/enterprise-data/platform/safe-data/mnpi_dbt_models.png)
