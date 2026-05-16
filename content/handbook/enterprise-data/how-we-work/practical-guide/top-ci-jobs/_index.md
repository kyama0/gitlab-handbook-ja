---
title: "すべての MR で知っておくべき CI ジョブ"
description: "このハンドブックページでは、GitLab Web IDE で dbt を使い始める際に知っておく必要がある CI ジョブを理解するのに役立ちます。"
upstream_path: "/handbook/enterprise-data/how-we-work/practical-guide/top-ci-jobs/"
upstream_sha: "0e6f01390a34aeb6706ace17d8d3c50e74e82d0d"
translated_at: "2026-04-29T00:00:00Z"
translator: claude
stale: false
lastmod: "2025-07-22T13:11:34-04:00"
---

## CI ジョブとは何か（そしてなぜ重要なのか）？

GitLab の CI ジョブの完全なリストはこちらです: https://handbook.gitlab.com/handbook/enterprise-data/platform/ci-jobs/ このセクションは作業中です。

MR で作業する際に知っておく必要がある 2 つの主なジョブは、「Build Changes」ジョブと「Run Grants」ジョブです。提出するほぼすべての MR でこれらが使用されます！

### Build Changes

Build Changes ジョブを理解するには、マージリクエスト（MR）を提出したときに何が起こるかを理解する必要があります。GitLab では、自社製品を使用し、パイプラインに役立つ CI/CD ジョブのスイートを構築しているため、MR を提出するたびに変更を含む「新しい」データベースが作成されます。

最初は、コードがコピーされ、空のデータベースが作成されるだけです。パイプラインはコードの脆弱性をスキャンしますが、実際にテーブルを作成するわけではありません。ただし、GitLab にマージしようとしているコード変更を具体的に含む新しいマージリクエストデータベースを作成するよう依頼する機能があります。

例えば、テーブルのコードを変更して新しいカラムを追加し、「Revenue」の計算方法を変更した場合、そのコードをテストして期待通りに動作しているか確認したいでしょう。これは SQL でテストできますが、一連のテーブルを変更していてそれらがお互いの変更に依存している場合はどうでしょうか？

マージリクエストデータベースでは、GitLab はマージリクエストで変更したすべてのテーブル（1 度に複数のテーブルに変更を加えることができるため）と、それらのテーブル間にあるテーブルへの変更をビルドできます。「ビルド」とは基本的に、テーブル全体の完全なクエリを実行してフルデータセットを格納することを意味します。

例えば、`mart_charges` と `rpt_charges_weekly` に変更を加えたとします。ただし、これら 2 つのテーブルの間には `mart_charges_weekly` テーブルがあります。MR データベースは `mart_charges` の上流にある本番環境のものをコピーし、その後、新しい変更（例えば追加した新しいカラムと `mart_charges` で行った収益計算方法の変更）で `mart_charges`、`mart_charges_weekly`、`rpt_charges_weekly` の 3 つすべてをビルドします。

この「ビルド」アクションをトリガーするには、MR から直接アクセスできるパイプラインを使用できます。パイプライン（以下の画像）を見つけ、「Build Changes」ジョブを探します。ここでやることはプレイボタンをクリックして待つだけです。その後、MR で変更を加えたすべてのテーブルへの変更が MR データベースでビルドされます。

![Build Changes](/images/handbook/enterprise-data/platform/tableau/build-changes.png)

### Run Grants

変更をビルドしたら、先ほど作成した MR のデータを含む新しいデータベースにアクセスできるようになります。加えたコード変更はすべて反映され、変更を加えたテーブルはすべてクエリが可能になります！

ただし、これにアクセスするには、クローンを自分自身に付与する必要があります。テーブルがすでに存在する場合（新しいテーブルではない）は、MR でこれを行うことができます。パイプラインを見つけ、最初のステップの「Run Grants」ジョブを使用します。「build changes」の場合とは異なり、ジョブ名の右にあるプレイボタンをクリックするだけではできません。代わりに、行の最初にある緑のチェックマークをクリックすると、そのステップで利用可能なすべてのジョブが開きます。「Run Grants」を探し、テキスト（プレイボタンではなく）をクリックします。

![Run Grants](/images/handbook/enterprise-data/platform/tableau/run-grants.png)

これにより、キー/バリューペアを簡単に追加できる画面が表示されます。これが、パイプラインに「あなた」が MR データベースへのアクセス権を付与するよう指示する方法です。ここでは `GRANT_TO_ROLES` をキーとして使用します。値は Snowflake のロール名で、多くの場合メールアドレスです。例えば、名前が John Smith でロールが JSMITH の場合、`JSMITH` を値として入力します。自分自身や他の人にアクセス権を付与できます。インターフェースで複数追加するオプションがあっても、一度に 1 つのクローンしか付与できません。

![Run Grants](/images/handbook/enterprise-data/platform/tableau/grant-to-roles.png)

これが完了すると、Snowflake と Tableau でアクセスできるデータベースのリストで MR に作成したブランチ名を見つけることができます！これにより、コード変更の影響をテストできます。

### カスタム Build Changes

「Build Changes」を実行したときにビルドされるスコープに含まれない MR の変更をテストしたい場合があります。これは最も一般的に、上流のテーブル（mart や prep テーブルなど）のカラムに調整を加え、実際にはその変更が下流のレポートテーブルに与える影響をテストしたい場合に起こります。

レポートテーブルに変更が関係していない場合、MR データベースはそのテーブルを「ビルド」せず、デフォルトではそのテーブルをクエリしてテストすることができません。ただし、回避策があります！Build Changes ジョブにカスタム変数を設定したり、同様のジョブ「custom invocation」を使用して変更をビルドすることができます。

これを実現する最も簡単な方法は GitLab Duo を使用することです。GitLab で作業している場合、GitLab WebIDE で作業しているときに GitLab Duo が自動的に利用可能になります。

[このページ](/handbook/enterprise-data/platform/ci-jobs/#build_changes)のハンドブックにアクセスして、「Build Changes」と「Custom Invocation」のセクション全体をコピーします。その後、マージリクエストに戻り、GitLab Duo を開きます。これらのジョブの内容全体をチャットに貼り付け、Shift キーを押しながら Enter キーを押して新しい行に移動し、プロンプトを入力します。

例えば、「MR で `prod.restricted_safe_common_mart_sales.mart_crm_opportunity` を変更しました。ただし、ダウンストリームのテーブル `prod.restricted_safe_common_mart_sales.rpt_new_charges` への影響をテストしたいと思っています。通常の Build Changes ジョブはこのテーブルをビルドしませんでした。なぜなら、このテーブルは下流にあり、MR に直接関係していないからです。mart テーブルをビルドし、その後その間の 1 つのテーブルを、そして最後にレポートテーブルだけをビルドしたいと思います。このテーブルをビルドするにはどうすればよいですか？」と入力することができます。

多分、Build Changes ジョブに入るよう指示されるでしょう。以前のようにプレイボタンをクリックするのではなく、プレイボタンの左側のジョブのテキスト/空白スペースをクリックします。まだ変更をビルドしていない場合は、カスタム変数の画面がこの時点で表示され、KEY: `SELECTION` ；VARIABLE: `+prod.restricted_safe_common_mart_sales.mart_crm_opportunity+prod.restricted_safe_common_mart_sales.rpt_new_charges` を入力できます。

すでに Build Changes ジョブを実行している場合は、パイプラインで Build Changes ジョブをクリックすると、すでに実行したジョブの詳細を示すカラフルなテキストが書かれた黒いボックスのページが表示されます。ページの右上隅を見て、青い「reset」ボタンを見つけることで、カスタム指示を指定できます。それをクリックし、「Update CI/CD variables」を選択します。

![Build Again](/images/handbook/enterprise-data/platform/tableau/build-again.png)
