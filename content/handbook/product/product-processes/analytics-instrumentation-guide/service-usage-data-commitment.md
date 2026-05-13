---
title: サービス利用データに関する個人ユーザープライバシーへの私たちのコミットメント
upstream_path: /handbook/product/product-processes/analytics-instrumentation-guide/service-usage-data-commitment/
upstream_sha: 1e195b58b9f249ff10bd0e705106c320fee86141
translated_at: "2026-05-13T12:00:00Z"
translator: claude
stale: false
---

## サービス利用データに関する個人ユーザープライバシーへの私たちのコミットメント

データ収集が悪意ある目的で利用される事例は確かに存在しますが、データ収集と分析は企業がエンドユーザー/消費者に利益をもたらすかたちで製品やサービスを改善することも可能にしてきました。GitLab が製品の利用データを収集しているのもこうした流れに沿っています。私たちは個別の利用データを名前空間レベルで仮名化された形で収集し、その情報を製品判断のために活用し、皆さんのために GitLab を改善しています。また、この情報を集約して、GitLab 製品がどのように使われているかを大局的に理解することもあります。

### サービス利用データの活用方法

[Product Performance Indicators ページ](https://internal.gitlab.com/handbook/company/performance-indicators/product/) では、各グラフの下に `Lessons Learned` (学んだこと) のコールアウトがあり、収集された利用データに基づくインサイトと機会が要約されています。このプロセスを通じて製品にもたらされる改善の多くは、利用データ収集の成果と言えます。

例として、GitLab の [Package](/handbook/product/categories/#package-stage) チームは、Package Registry にパッケージを公開したユーザー数の経時的な利用メトリクスをウォッチしています。明確にしておきたいのは、彼らが分析しているデータは集約された形式であり、ユーザー識別可能な情報は分析されないという点です。このトレンドの深掘りの結果、次のようなインサイトを得ました。

>ファネルの観点から、デプロイトークンまたは Guest によってプルされるパッケージ数の大幅な伸びを確認しました。どちらも、Package Registry が顧客の本番ワークフローに統合されていることの兆候です。

この分析に基づき、チームはデプロイトークンに関連する 2 件のバグ Issue を優先しました。これは、利用データの効率的かつ効果的な活用であり、個人の身元や GitLab の信頼性を危険にさらすことは決してありませんでした。

***これが私たちが運営する、そしてこれからも運営し続けるデータ空間です。***

### GitLab ユーザーへの私たちのコミットメント

ここ数年、GitLab は [サービス利用データ](/handbook/legal/privacy/customer-product-usage-information/) の収集、処理、利用についてコミュニティに対していくつかのコミットメントを示してきました。本ページはそれらのコミットメントをまとめ、顧客から製品アナリティクスデータを収集するプロジェクトに携わるチームメンバーへのガイダンスを提供します。

1. 私たちは皆さんの [サービス利用データ](/handbook/product/) を販売しません。
1. GitLab は、コア製品に対してフリーな ([自由](https://www.gnu.org/philosophy/free-sw.html) という意味で) JavaScript のみを追加します。([出典](https://mikegerwitz.com/2016/01/google-analytics-removed-from-gitlabcom-instance))
1. 個人を特定可能な情報については、皆さん (ユーザー) を仮名化します。
1. どのようなデータを収集し、どのように利用し、どのように仮名化するかを透明性をもってドキュメント化します。
1. [サービス利用データ](/handbook/product/) のプロセスやポリシーに変更があった場合、コミュニティに告知します。
1. 識別可能な利用データを第三者の製品アナリティクスサービスに送信するテレメトリーを、当社の製品に実装することはありません ([出典](https://about.gitlab.com/blog/2019/10/10/update-free-software-and-telemetry/))

#### アナリティクスデータの定義

アナリティクスデータという用語はあまりにも一般的すぎる場合があります。以下のリストは、対象となる具体的な製品データの種類です。

- [Service Ping](/handbook/product/product-processes/analytics-instrumentation-guide/) - GitLab インスタンスからの製品利用の集計カウント
- [Snowplow](https://snowplow.io/) イベント - クライアントまたはサーバーのいずれかから収集される動的イベント。
- [データベースイベント](/handbook/product/product-processes/analytics-instrumentation-guide/) - gitlab.com のデータベースレコードを利用して利用状況を計測・理解する

## データの仮名化

デジタル製品を提供する多くの他組織と同様に、GitLab も自社の提供物の有用性についてより深い理解を得るために努めています。誰もが使える最高の DevOps プラットフォームを構築するため、最もよく使われている領域、見過ごされている領域、改善が必要な領域、そして誇れる領域を理解しようとしています。

そうした理解を得るために、収集した [サービス利用データ](/handbook/legal/privacy/customer-product-usage-information/) を参照します。そして利用データを収集する一環として、堅牢なプライバシー保護を提供し、このデータが悪用されないことを保証することを目指しています。その責務を念頭に、技術的なツールとさまざまなポリシーを含むプライバシー保護メカニズムの準備を進めています。

### 仮名化は完全ではない

個人ユーザーの個人情報を仮名化していますが、プロジェクトまたは名前空間が特定できてしまうケースもあります。主な例をいくつか示します。

1. `project_ID` を収集します。これを使って API 経由でプロジェクト名を特定できますが、これはあなたがメンバーになっている Public に設定されたプロジェクトの場合のみ可能です。
1. `namespace_ID` を収集します。これを使って API 経由で名前空間名 (個人名の場合もあります) を特定できますが、メンバーになっている名前空間の情報しか返せません。
1. 単独ユーザーのサブスクライバーの場合、製品利用アクティビティはエンタープライズアプリケーション内のメタデータを介して (内部的に) 実際のユーザーに紐付けられる可能性があります。

### Analytics Instrumentation のロードマップ

[一方向ハッシング](https://gitlab.com/groups/gitlab-org/-/epics/6309#one-way-hashing) に依拠して [個人を特定可能なデータ](https://gitlab.com/gitlab-org/gitlab/-/issues/336779#considered-data-for-pseudonymization) を匿名化する当社の [仮名化プロセス](https://gitlab.com/groups/gitlab-org/-/epics/6309#proposed-solution) は、マイルストーン 14.4 (2021 年 10 月) でリリースされました。

このプロセスの重要な部分は、[収集レイヤー](https://gitlab.com/groups/gitlab-org/-/epics/6309#hashing-on-the-collector-layer) でデータを仮名化することです。これにより、皆さんがバージョンをアップグレードすることなく、GitLab は問題を解決できます。

仮名化サービスによるユーザープライバシー保護が可能になったので、`Project_ID`、`Namespace_ID`、および仮名化された `User_ID` の収集を開始しました。これらの識別子を収集することで、収集する集約メトリクスはより多くの情報を明らかにできるようになります。これまでは「何らかのボタンが 1000 回クリックされた」ことしかわかりませんでしたが、今では「未識別のユーザー "X" がボタンをクリックし、アクションを実行し、エラーに遭遇した」というような情報がわかります。この豊かな [ユーザージャーニー](/handbook/product/product-processes/analytics-instrumentation-guide/) は、GitLab がエンドユーザーである皆さんのために製品を改善する能力を大きく向上させます。

[ロードマップ](https://about.gitlab.com/direction/monitor/analytics-instrumentation/) の次のステップには、ユーザーが最も価値を感じる機能をより深く理解するためのユーザージャーニーのモデリングや、[セルフマネージドインスタンスにおけるイベントトラック](https://gitlab.com/groups/gitlab-org/-/epics/6869) の実装が含まれます。

## 関連コンテンツ

1. [GitLab のプライバシーポリシー](https://about.gitlab.com/privacy/)
1. Pseudonymizing Service Usage Data 更新ブログ記事: *近日公開*
1. [Update on Free Software and Telemetry](https://about.gitlab.com/blog/2019/10/10/update-free-software-and-telemetry/)
1. [製品利用追跡 Issue](https://gitlab.com/gitlab-com/www-gitlab-com/-/issues/5672)
1. [GitLab の Analytics Instrumentation Direction](https://about.gitlab.com/direction/monitor/analytics-instrumentation/)
