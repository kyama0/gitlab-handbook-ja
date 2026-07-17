---
title: "SaaS ユーザーの見つけ方"
description: "特定の条件を満たす SaaS リサーチ参加者を対象にする方法"
upstream_path: /handbook/upstream-studios/experience-research/finding-saas-users/
upstream_sha: a15c0bfc1dd89fbbe4aff8969605eb60ab63f1ca
lastmod: "2026-07-16T17:32:42-03:00"
translated_at: "2026-07-17T07:18:26+09:00"
translator: codex
stale: false
---

## SaaS（GitLab.com）ユーザーの見つけ方 {#finding-saas-gitlabcom-users}

### データウェアハウスでユーザーを探す場合 {#when-to-look-for-users-in-the-data-warehouse}

Respondent.io やソーシャルメディア経由のリクルーティングなど、[リサーチ調査の参加者をリクルーティングする](/handbook/upstream-studios/experience-research/recruiting-participants)方法はさまざまあります。しかし、これらの方法が適さず、自己申告や推測に基づくデータではなく、客観的な利用データに裏付けられた非常に具体的な条件に基づいてユーザーを見つける必要がある場合があります。そのための最良の方法は、データウェアハウスにある利用データと人口統計データを活用することです。

**データウェアハウス経由でユーザーを見つけるのが適切な場合の、網羅的ではない例のリスト:**

- 単にステージのユーザーではなく、機能またはステージを一定量利用しているユーザーを探している
- GitLab 上の特定の種類のオブジェクトやコンテンツ（例: エピック、スニペット、Wiki など）とやり取りしたユーザーを探している
- ユーザーが作業しているグループまたはプロジェクトのより広いコンテキストを理解する必要がある（例: ユーザー数が 30 人未満のグループ内のユーザー、Gold プランのグループ内のユーザー、リポジトリ利用のないプロジェクト内のユーザー）

### 前提条件 {#pre-requisites}

1. データウェアハウスのクエリには Structured Query Language（SQL）を使用します。Web には SQL を無料で学べるガイドが無数にあります。SQL にはさまざまな種類があり、私たちが使用しているのは [Snowflake](https://docs.snowflake.com/en/index)です。ただし、基本的な機能の大半は主要な SQL のバリエーション間で一貫しているため、Snowflake 固有のリソースを探す必要はありません。
1. データウェアハウスにクエリを実行するには、Sisense（旧 Periscope）への Editor アクセスが必要です。これには[アクセスリクエスト](/handbook/security/corporate/end-user-services/access-requests/access-requests/)を完了する必要があります。
1. [Product Managers 向けデータ](/handbook/enterprise-data/organization/programs/data-for-product-managers/)では、クエリを記述して実行する Sisense 内の SQL Explorer へのアクセス方法の概要と、ウェアハウスの構造に関する大まかな概要を説明しています。
1. Data チームは、dbt というツールを使用して[個々のデータウェアハウスのテーブルを文書化](https://dbt.gitlabdata.com/#!/overview)しています。一部のテーブルは十分に文書化され、目的の説明やさまざまな列の説明が含まれていますが、残念ながらそうでないものもあります。ただし、文書は時間とともに改善されています。

### SaaS 固有のテーブル {#saas-specific-tables}

私たちのデータウェアハウスには、さまざまな領域に関するデータが含まれています。ここで私たちが関心を持つのは、ユーザー情報と GitLab.com（SaaS）の利用を詳述するデータです。

SaaS に関連するデータを格納するテーブルの多くは、すべてではありませんが、`gitlab_dotcom_*` という接頭辞を使用しています。この接頭辞を持つさまざまなテーブルを調べ、含まれるデータを確認するのがよい出発点です。

### ユーザーテーブル {#users-table}

SaaS の全体的なユーザーテーブルは `gitlab_dotcom_users_xf` です。アカウント作成日、アクティブ日数、ロール、最上位の有料プラン（ある場合）など、個々のユーザーの最も完全な情報を含んでいます。ここを出発点および信頼できる唯一の情報源としてください。このテーブルにある `user_id` 変数は、[GitLab.com](https://gitlab.com)ユーザーの主要な識別子であり、他のテーブルでもレコードに関連付けられたユーザーを識別するために使用されます。たとえば、`gitlab_dotcom_merge_requests_xf` テーブルには GitLab.com で作成された MR のレコードが格納され、特定の MR の作成者を識別する `author_id` という列があります。この `author_id` は GitLab.com ユーザー ID であり、そのマージリクエストの作成者を `user_id` 変数を使用してユーザーテーブルのレコード（または他のテーブル）に接続できます。

このテーブルを使用すると、過去 7 日間にアカウントを作成した 100 人のユーザーの GitLab.com ユーザー ID を見つけられます:

```sql
SELECT user_id FROM analytics.gitlab_dotcom_users_xf
WHERE account_age >= 7
LIMIT 100
```

### オブジェクトテーブル（プロジェクト、Issue、マージリクエストなど） {#object-tables-projects-issues-merge-requests-etc}

GitLab の「トップレベル」オブジェクトをはじめ、すべてのレコードを含むテーブルがあります:

- プロジェクト
- グループ
- Issue
- マージリクエスト
- エピック

GitLab.com で作成できるものには、おそらくテーブルがあります。これらのテーブルは他の SaaS テーブルと同じ構造に従います。例:

- `gitlab_dotcom_issues_xf`
- `gitlab_dotcom_epics_xf`
- `gitlab_dotcom_merge_requests_xf`

これらのテーブルのレコードは完全な忠実度を持ちません。インターフェースでオブジェクトを表示した際に表示されるすべてのデータが含まれているわけではありません。GitLab.com UI で Issue を読み込むと、コメントやさまざまなメタデータが表示されます。このデータの多くはウェアハウスの Issue テーブルにはなく、アクセスできないか、テーブルを適度なサイズに保つために別のテーブルに保存されています。さらに、私たちは本来非公開となるデータをウェアハウスで公開していません。たとえば、GitLab.com で公開されている Issue のタイトルと説明は（Web で閲覧した場合と同じように）確認できますが、非公開の Issue についてはその情報を確認できません。

これらのテーブルは、ユーザーまたはグループが何かを作成または操作した回数を理解したい場合や、特定の種類のエンティティ（たとえば、エピックに昇格した Issue）から始め、そのようなエンティティとやり取りしたユーザーを確認したい場合に適しています。これらのテーブルはイベントレベルのデータを提供しないため、ユーザーがいつ、または正確にどのように何かを作成または操作したかではなく、作成または操作した（またはしなかった）ことだけが分かります。

例: Issue の重みをリサーチしており、過去 30 日間に重みが割り当てられた Issue を作成した 100 人のユーザーのユーザー ID を見つけたいとします。また、その期間に各ユーザーが作成した Issue の数も知る必要があります。次のクエリを使用します:

```sql
SELECT
  author_id,
  COUNT(1) as num_issues
FROM analytics.gitlab_dotcom_issues_xf
WHERE
  weight IS NOT NULL
  AND issue_created_at >= DATEADD(day, -30, current_timestamp)
GROUP BY 1
LIMIT 100
```

### ステージ月間アクティブユーザー {#stage-monthly-active-users}

特定のイベントレコードにはユーザー ID を記録していないため、特定のユーザーが特定のアクションを完了した正確な時点は分かりません。ただし、`gitlab_dotcom_monthly_stage_active_users` テーブルには、ユーザーがさまざまな高レベルの機能やステージとやり取りする月ごとの回数および日数を記録しています。これは、特定の機能またはステージの「ライト」または「ヘビー」ユーザーを探す条件や、ステージについて最近の最小限の利用があるユーザーを確実に取得したい場合に適しています。

例: 特定の月（より正確には、その月の最後の 28 日間）に CI パイプラインと少なくとも 17 回、**または** 9 日間以上やり取りした 50 人のユーザーのユーザー ID を見つける必要があります:

```sql
SELECT user_id
FROM analytics.gitlab_dotcom_monthly_stage_active_users
WHERE
 event_name='ci_pipelines'
 AND (event_count >= 17 OR event_day_count >= 9)
 AND smau_month='2020-04-01'
LIMIT 50
```

### ヘルプを得る方法 {#how-to-get-help}

- ウェアハウスで特定のデータを見つけられる場所に関する質問には、Slack の #data チャンネルが対応できます。
- 非常に詳細な SQL クエリが必要な場合は、[Product Data Insights チーム](/handbook/product/groups/product-analysis/#working-with-us)に連絡して、支援可能な余裕があるか確認できます。
