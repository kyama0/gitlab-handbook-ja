---
title: "SAFE データガイド"
description: "SAFE データガイド"
upstream_path: "/handbook/enterprise-data/platform/safe-data/"
upstream_sha: "d638a3d5418a620365f135648ea547e0992abbf1"
translated_at: "2026-04-29T00:00:00Z"
translator: claude
stale: false
lastmod: "2025-05-28T22:31:43-04:00"
---

---

## SAFE データとは何か？

データチームは SAFE データに関して GitLab SAFE [フレームワーク](/handbook/legal/safe-framework/)に従っています。SAFE データおよび SAFE フレームワークとの関連で、`MNPI` および `RESTRICTED_SAFE` も使用される場合があります。

## SAFE データへのアクセス

### Tableau

Tableau ダッシュボードへのアクセスは、ライセンスタイプに基づいています（[Tableau](/handbook/enterprise-data/platform/tableau/) ハンドブックページの Tableau ライセンスを参照してください）。これはジョブの役割によって優先順位が付けられ、[SAFE データアクセスフレームワーク](/handbook/legal/safe-framework/)によって管理されます。Tableau では、[ユーザーグループ](/handbook/enterprise-data/platform/tableau/#user-groups)を使用して SAFE セキュリティフレームワークを適用しています。ダッシュボードが存在できる4つの主要なプロジェクト/フォルダーがあります - Development、Production、Ad-hoc、Resources。Development、Production、Ad-hoc の各フォルダーには、Finance や Sales など GitLab のさまざまなチーム向けのサブフォルダーがあります。各チームのフォルダー内には、コンテンツを公開できる2つの主要なフォルダー（General と SAFE）があります。

- General フォルダーには GitLab の誰でも閲覧できるデータが含まれています。
- SAFE フォルダーには、重要な非公開情報（MNPI）を含むダッシュボードが含まれており、General SAFE アクセスユーザーグループに属するユーザーのみアクセスできます。

[GitLab の SAFE 基準](/handbook/legal/safe-framework/#safe-flowchart)を満たすデータを扱う Tableau クリエーターの開発ワークフローは、部門の Development プロジェクト内の SAFE フォルダーに公開することです。クリエーターが Development プロジェクト内の SAFE フォルダー以外にワークブックを公開したい場合は、Tableau プロジェクトの `All Requests` テンプレートを使用して [Issue](https://gitlab.com/gitlab-data/tableau/-/issues/new) を開き、BI Platform チームによるコンテンツのレビューをリクエストしてください。BI Platform チームは、Development プロジェクトの SAFE フォルダー以外にコンテンツを公開することが安全かどうかについて yes/no の決定を提供します。

#### GitLab 一般アクセスダッシュボードへのアクセス

一般アクセスダッシュボードはすべての GitLab チームメンバーが利用できます。Tableau へのアクセスリクエスト（チームメンバーがまだアクセスを持っていない場合）は必要ですが、これらの一般アクセスダッシュボードを閲覧するためにこれ以上のアクセスリクエストは必要ありません。権限とアクセスの詳細については、ハンドブックの [Tableau セクション](/handbook/enterprise-data/platform/tableau/#permissions)を参照してください。

#### SAFE ダッシュボードへのアクセス

すべての SAFE ダッシュボードはさまざまなチームの SAFE フォルダー内に保存されており、権限はユーザーのアクセスグループメンバーシップによって管理されます。1つの SAFE ダッシュボードへのアクセスは、すべての SAFE ダッシュボードへのアクセスを提供します。SAFE プロジェクト/フォルダーへのアクセスにより、チームメンバーは[インサイダー取引ポリシー](https://drive.google.com/file/d/1yK4-L3nCEjVi14UwFfp9LNJzJNQdvvLB/view?usp=sharing)の対象となる[指定インサイダー](/handbook/legal/publiccompanyresources/#sts=designated%20insiders)になります。General SAFE アクセスユーザーグループへのメンバーシップを通じて SAFE ダッシュボード（とスペース）へのアクセスを得るには以下が必要です:

1. 直属マネージャーの承認

SAFE ダッシュボードへのアクセスを得るには:

1. Tableau - SAFE アクセス - [申請者名] の [アクセスリクエスト](https://gitlab.com/gitlab-com/team-member-epics/access-requests/-/issues/24284) を作成する。
1. 直属マネージャーに承認をリクエストする。新しいアクセスリクエスト(/issue)の場合は承認が必要です。
1. 処理が完了すると、Tableau にログインして、リクエストした SAFE ダッシュボードと SAFE アクセスが必要な他のすべてのダッシュボードにアクセスできるようになります。

SAFE データへの[アクセス](/handbook/enterprise-data/platform/#warehouse-access) Snowflake 内の SAFE データへのアクセス方法については、こちらを参照してください。

Google スプレッドシートの SAFE データは、[SAFE ダッシュボードへのアクセス](/handbook/enterprise-data/platform/safe-data/#accessing-a-safe-dashboard)の手順を使用してアクセスできます。Google スプレッドシートの SAFE データへのアクセスを得るには、これらの手順に従ってください。

##### SAFE ダッシュボードアクセスのプロビジョニング解除

データチームは 90 日ごとに[データヘルスとセキュリティ監査](/handbook/enterprise-data/data-governance/data-management/)を実施します。この監査では、データチームが非アクティブな使用状況も確認します。GitLab チームメンバーが 90 日以上 SAFE ダッシュボードスペースを使用していない場合、アクセスはプロビジョニング解除されます。SAFE ダッシュボードスペースへのアクセスを再度取得するには、新しいアクセスリクエストを作成し、すべての承認を得る必要があります。

#### さまざまな限定アクセスユーザーグループへのアクセス

内部監査関連データや営業開発 SAFE データなど、アクセスしたい限定アクセスユーザーグループにはいくつかの変形があります。これらのグループの説明と、アクセスをリクエストする方法については[こちら](/handbook/enterprise-data/platform/tableau/#user-groups)を参照してください。

### Snowflake

すべての SAFE データは Snowflake の別個のデータベーススキーマ内のテーブルとビューに保存されています。1つのテーブルへのアクセスはすべての SAFE テーブルへのアクセスを提供します。SAFE データへのアクセスには以下が必要です:

1. 直属マネージャーの承認。

SAFE データへのアクセスを得るには:

1. [アクセスリクエスト](https://gitlab.com/gitlab-com\team-member-epics/access-requests/-/issues\new?issuable_template=Individual_Bulk_Access_Request)を作成し、ニーズと目的を提供する。
2. 直属マネージャーに承認をリクエストする。新しいアクセスリクエスト(/issue)の場合は承認が必要です。
3. リクエストが承認されたら、Snowflake [プロビジョナー](https://gitlab.com/gitlab-com/www-gitlab-com/-/blob/master/data/tech_stack.yml)にタグ付けすると、リクエストが処理されます。
4. 処理が完了すると、Snowflake の SAFE データ（スキーマ）にアクセスできるようになります。

## データ開発

Snowflake の SAFE データは別個のスキーマに保存されています。SAFE データを含むスキーマには `RESTRICTED_SAFE_*` というプレフィックスが付いています。MNPI データを含むすべてのモデルは、これらのスキーマに保存する必要があります。このプロセスを保護する [CI パイプライン](/handbook/enterprise-data/platform/ci-jobs/#safe_model_script)（`safe_model_script`）があります。作成または変更されたすべてのモデルは CI パイプラインによってチェックされます。開発者として、以下のガバナンスを考慮する必要があります:

- MNPI データを含むテーブル/モデルから読み取り、MNPI がモデルで使用される場合は `mnpi` タグを適用する。その後、データは `RESTRICTED_SAFE_*` スキーマに保存する必要があります。
- MNPI データを含むテーブル/モデルから読み取るが、MNPI がモデルで使用**されない**場合は `mnpi_exception` タグを適用する。つまり、MNPI モデルから NON-MNPI フィールドのみが使用される場合です。
- どのタグを適用するかを決定するのはエンジニアの責任です。GitLab SAFE [フレームワーク](/handbook/legal/safe-framework/)に対してモデルで公開されているデータを確認してください。疑問がある場合は、Slack の `#SAFE` チャンネルに連絡してください。
- CI パイプラインはファクトベースで助けてチェックするためにあります（アップストリームモデルタグと現在のモデルタグ）。

この[ビデオ](https://www.youtube.com/watch?v=ICOuerPeAUU)は Snowflake 上での SAFE データプログラム実装の概要を提供します。

以下の図は SAFE データを扱う際や参照する際のプロセスを詳細に説明しています。

![MR プロセス](/images/enterprise-data/platform/safe-data/mnpi_dbt_models.png)
