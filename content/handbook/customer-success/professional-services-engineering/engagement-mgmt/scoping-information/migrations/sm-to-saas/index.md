---
title: "セルフマネージド GitLab から GitLab.com へのマイグレーション"
description: "顧客が GitLab.com へマイグレーションするのを支援する際に把握しておくべき事項。"
upstream_path: /handbook/customer-success/professional-services-engineering/engagement-mgmt/scoping-information/migrations/sm-to-saas/
upstream_sha: b4eeb07f0d5f46e2fc5f8572be1a2547261aed89
translated_at: "2026-04-26T03:00:00Z"
translator: claude
stale: false
lastmod: "2026-03-12T07:33:57+00:00"
---

## セルフマネージド GitLab から GitLab.com にマイグレーションする顧客向けのオプション

- セルフサービスの [UI を使ったダイレクト転送によるグループとプロジェクトのマイグレーション](https://docs.gitlab.com/ee/user/group/import/index.html#migrate-groups-by-direct-transfer-recommended)。ダイレクト転送によるマイグレーションは 2025 年 7 月に一般提供開始となりました（[ブログ記事はこちら](https://about.gitlab.com/blog/migrating-by-direct-transfer-is-generally-available/)）。これは、GitLab アプリケーションの機能の範囲内で GitLab インスタンス間でグループとプロジェクトをマイグレーションするための推奨される方法です。
- セルフサービスの API ベースの [グループまたはプロジェクトのダイレクト転送によるマイグレーション](https://docs.gitlab.com/ee/api/bulk_imports.html)。
- [グループのインポート/エクスポート](https://docs.gitlab.com/ee/user/project/settings/import_export.html) を使用したセルフサービスの UI ベースのマイグレーションは利用可能でしたが、現在は廃止されました。[プロジェクトのインポート/エクスポート](https://docs.gitlab.com/ee/user/project/settings/import_export.html#project-importexport) は廃止されていません。
- [グループインポート/エクスポート API](https://docs.gitlab.com/ee/api/group_import_export.html) と [プロジェクトインポート/エクスポート API](https://docs.gitlab.com/ee/api/project_import_export.html) を使用した API ベースのマイグレーション
- [Congregate Automation Tool](https://gitlab.com/gitlab-org/professional-services-automation/tools/migration/congregate) を使用したプロフェッショナルサービスによる自動マイグレーション

## なぜ GitLab.com へのマイグレーションに Professional Services を選ぶのか?

PS は、各顧客エンゲージメントから得られる学びに基づいて定期的に強化され続けている、実績のあるアプローチを提供します。私たちの PS チームは GitLab.com への 100 件以上のマイグレーションで顧客を導いた経験があり、特定の顧客にとって適切なマイグレーション計画と、エンドユーザーにとって体験を可能な限りスムーズにするためにどのような情報を伝えるべきかについて、堅牢なガイダンスを提供できます。

自動マイグレーションツールは UI または API ベースのアプローチよりも多くのデータを処理します - レジストリデータ、CI/CD 変数、フック、統合された K8s クラスター設定、環境、デプロイキーなど（詳細は [Congregate 機能リスト - GitLab to GitLab](https://gitlab.com/gitlab-org/professional-services-automation/tools/migration/congregate/-/blob/master/customer/gitlab-migration-features-matrix.md) を参照）。また、すべてのユーザーとそのグループおよびプロジェクトの権限を自動マイグレーションの一部としてマイグレーションします。MR、ノート、Issue の作者に関する履歴ユーザー情報は、PS マイグレーションで保存されます。この情報は [ダイレクト転送を使用したグループとプロジェクトのマイグレーション](https://docs.gitlab.com/ee/user/group/import/index.html#migrate-groups-by-direct-transfer-recommended) でも保存されます。ただし、エクスポートファイルをアップロードしてグループとプロジェクトをインポートする場合（つまりグループとプロジェクトのインポート/エクスポート）には保存されません。（プロジェクトインポート/エクスポートの [Important Notes](https://docs.gitlab.com/ee/user/project/settings/import_export.html#important-notes) セクションを参照してください。なお、エンドユーザーは GitLab.com で管理者権限を付与できないことに注意してください。）

最も重要なのは、GitLab Professional Services エンジニアがマイグレーション作業の多くを非同期で処理することで、顧客の管理者は GitLab マイグレーションをすべての労力を必要とするイニシアティブにする代わりに、他の価値ある作業に集中できるようになることです。

## セルフマネージドから GitLab.com への Professional Services マイグレーションの費用はどれくらいですか?

各エンゲージメントの総価格は、マイグレーションのサイズと複雑性によって異なります。完璧な計算式ではありませんが、現在はセルフマネージドシステムのユーザー数とプロジェクト数に基づいてマイグレーションのスコープを見積もっています。なお、5GB を超える GitLab リポジトリは自動化ツールでマイグレーションできず、セルフマネージドから GitLab.com へのマイグレーションのスコープを大幅に拡大することに注意してください。詳細はこのページの最後にある FAQ の [なぜ大きなリポジトリはマイグレーションが「高価」なのか](#faq) を参照してください。また、GitLab のセルフマネージドソースインスタンスは [最後にリリースされた](https://gitlab.com/gitlab-org/gitlab/-/releases) バージョンの 2 マイナーバージョン以内である必要があり、そうでない場合はアップグレードが必要となります。これも最終見積りに含めることができます。

一般的なガイドとして、標準的な条件下でのマイグレーションについて、以下に概算（ROM）見積りを提供しています。各顧客のマイグレーションは、ROM テーブルの仮定を検証するために個別にスコーピングする必要があることに注意してください。顧客が Professional Services を進めることを確認したら、顧客が署名する必要のある SOW を生成します。

### ROM 見積り

各セルの価格は、5 GB 未満のユーザー数とプロジェクト数に基づく概算規模を表します。5 GB を超える Git リポジトリ 10 個ごとに $12k を追加してください。

| ユーザー数（行）/プロジェクト数（列） | 1,000 以下 | 1,001 - 2,000| 2,001 - 3,000 | 3,001 - 4,000 | 4,001 - 5,000 | 5,001 - 6,000 | 6,001 - 7,000 | 7,001 - 8,000 | 8,001 - 9,000 | 9,001 - 10,000 |
| --- | --- | --- | --- | --- | ---| ---| ---| --- | --- | --- |
| 500 以下 | $30-40k | $50-60k | $70-80k | $90-100k | $100-110k | $120-130k | $140-150k | $150-160k | $170-180k | $190-200k |
| 501 - 1,000 |$35-45k | $55-65k| $75-85k | $90-100k | $105-115k | $120-130k | $140-150k | $155-165k | $175-185k | $195-205k |
| 1001 - 2000 | $50-60k | $65-75k | $85-95k | $100-110k | $120-130k | $135-145k | $155-165k | $170-180k | $190-200k | $205-215k |
| 2001 - 3000 | $60-70k | $75-85k | $90-100k | $110-120k | $125-135k | $145-155k | $160-170k | $175-185k | $195-205k | $210-220k |

10,000 を超えるプロジェクトまたは 3000 を超えるユーザーがある場合は、エンゲージメントマネージャーに連絡してください。ROM 見積りを提供するために協力します。

## 顧客が GitLab.com へのマイグレーションのために PS を進めたい - 次のステップは?

初期の会話を行った後、顧客が GitLab.com へのマイグレーションのために PS をさらに探求したい場合は、[Services Calculator](https://services-calculator.gitlab.io/) からスコーピングリクエストを開始してください。顧客名、GitLab ユーザー名を入力し、追加情報を提供する簡単なアンケートを進め、`Create PS Scoping Issue` ボタンをクリックします。

calculator により、顧客名のエピックの子として `<Customer Name> - Scope Issue and Write SOW` という Issue が作成されます。この Issue には、説明にスコーピングに必要な情報がテーブルとして事前入力されています（「single source of truth」を意味する SSOT という見出しで）。テーブル内の適切なフィールドを記入してください。マイグレーションの作業をスコーピングするには、太字フォントのフィールドが必要です。

必要なスコーピング情報を提供したら、エンゲージメントマネージャーが、私たちがスコーピングのために作成した標準計算式を使用してエンゲージメント見積りを生成します。顧客との議論（メールでの非同期またはライブミーティングでの同期）に使用できる Google sheet を作成し、PDF にできます。エンゲージメントマネージャーは、スケジュールが許せば、顧客と情報をレビューするためのライブミーティングをサポートできます。各アクティビティの説明とともに [サンプルエンゲージメント見積り](https://docs.google.com/spreadsheets/d/1-RuKHcijvHyyZJeYL1jSJrn5olqDODJjz6lf9y2ZIOc/edit?usp=sharing) を確認できます。

顧客が見積りに同意し、スコーピングで使用された情報が顧客の状況に対して正確であることを会話で検証したら、最終ステップは、エンゲージメントマネージャーが SOW を作成し、内部承認を得て、顧客に署名のために送信することです。このプロセスの追加詳細については [Selling Professional Services](/handbook/customer-success/professional-services-engineering/selling/) を参照してください。

## マイグレーションのスコーピングを支援するためのデータ収集

GitLab が SM から GitLab.com への移行プロセスを支援するために使用するいくつかの質問があります。これらの [質問](/handbook/customer-success/professional-services-engineering/engagement-mgmt/scoping-information/migrations/#migration-scoping-details) のうち 2 つは、顧客の管理者が GitLab チームにデータを提供する必要があります:
    - 1. 5GB 以上の GL リポジトリは概算で何個ありますか？
    - 2. プロジェクトの一般的なコンテナ/パッケージレジストリのサイズはどれくらいですか？

GitLab は、既存環境のデータを収集するためのツールを提供しています。管理者トークンを使用して [Evaluate](https://gitlab.com/gitlab-org/professional-services-automation/tools/utilities/evaluate#usage) ツールをダウンロードして実行し、すべての [生成されたファイル](https://gitlab.com/gitlab-org/professional-services-automation/tools/utilities/evaluate/-/blob/initial-branch/reading-the-output.md#breakdown-of-generated-files) をアカウントチームに提供してください。

## 追加のセールスツール

- [WIP - Selling Professional Services - SM to GitLab.com](https://docs.google.com/presentation/d/1-svCV8CFqZZr0ma-1TJIzy-Lobu4sSslP5eAS2BaCbc/edit?usp=sharing) Google スライドプレゼンテーションを参照してください。

## FAQ

1. **なぜ大きなリポジトリはマイグレーションが「高価」なのですか?** GitLab.com インスタンスには [Cloudflare の 5GB ファイルインポート/git push の厳格な制限](https://docs.gitlab.com/ee/user/gitlab_com/#account-and-limit-settings) があります。5 GB を超えるリポジトリは、大きなファイルを削除するための回避策と、場合によってはインポートを小さなピースに分割することによって手動でマイグレーションする必要があります。これらのインポートには大きな労力がかかるため、1 日あたり 2 つのリポジトリインポートしか管理できません。
1. **マイグレーションをより簡単にし、PS エンゲージメントのコストを潜在的に削減するために顧客は何ができますか?**
   - 大きなリポジトリは PS の労力のスコープを大幅に拡大するため、顧客はマイグレーション前にリポジトリをクリーンアップするために [リポジトリサイズの削減](https://docs.gitlab.com/ee/user/project/repository/reducing_the_repo_size_using_git.html) ドキュメントで提供されているガイダンスに従う必要があります。
   - マイグレーションは、ソースと宛先システムのユーザーが同じプライマリメールアドレスを持っていることに依存するため、特に顧客が GitLab.com で SCIM プロビジョニングを使用した SSO を使用する予定がある場合、プライマリシステムのユーザーアカウントを事前に確認することが役に立ちます。
   - グループとプロジェクトは、セルフマネージドシステムで定義されているのと同じ階層構造でマイグレーションされるため、顧客がグループまたはプロジェクトを再構成したい場合は、マイグレーション前に行うことが望ましいかもしれません。
   - GitLab.com では、パブリックプロジェクトはインターネット全体に利用可能であり、これはファイアウォールの背後でセルフマネージド GitLab を使用している顧客にとって大きな変化となる場合があります。さらに、GitLab.com には internal プロジェクトはありません。そのため、顧客がこれらのアクセス設定でプロジェクトを持っている場合、それらを確認し、GitLab.com でプロジェクトのアクセシビリティをどのように移行するかについて考え始める必要があります。
**当社の Professional Services チームは、顧客が追加のガイダンスを必要とする場合、上記のいずれかのアクティビティを支援するためにアドバイザリサービスをマイグレーション SOW に組み込むことができます。**
1. **パートナーは SM から GitLab.com へのマイグレーションを実行できますか?** パートナーは顧客と同じ制限を受けます - GitLab.com プラットフォームで管理者権限を持つことはできず、独自にスクリプト化されたソリューションを使用して既知の UI または API ベースのマイグレーションアプローチを利用する必要があります。GitLab パートナーは、いつどのグループとプロジェクトをマイグレーションするか、どのアクティビティを実行する必要があるか、プロジェクトがマイグレーションされるエンドユーザーにどのような情報を伝える必要があるかという観点で、マイグレーション計画に関するガイダンスを提供できます。ただし、パートナーマイグレーションには次のような制限があります:
     - MR、ノート、Issue の作者がマイグレーション時に保持されません
     - 5 GB を超える Git リポジトリは [ドキュメント化された回避策](https://docs.gitlab.com/ee/user/project/settings/import_export.html#import-workaround-for-large-repositories) を使用してマイグレーションできます

私たちは時々パートナーとペアを組み、彼らがアドバイザリ作業の一部を行い、私たちが彼らに代わって自動マイグレーションを実行することがあります。または、顧客が MR、ノート、Issue の作者の維持を気にしない場合、パートナーは自分でマイグレーションを実行できます。パートナーがインポートのために大きなリポジトリのクリーンアップでガイダンスが必要な場合、マイグレーションのその部分を私たちにサブコントラクトすることができます。
