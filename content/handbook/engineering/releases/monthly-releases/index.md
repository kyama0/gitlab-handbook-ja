---
title: "マンスリーリリース"
upstream_path: /handbook/engineering/releases/monthly-releases/
upstream_sha: "6eef8dbb6a0d15167aa5378f476b04cd38b78675"
translated_at: "2026-07-10T07:06:25+09:00"
translator: "claude"
stale: false
lastmod: "2026-07-07T16:51:00+02:00"
---

## マンスリーリリースポリシー

マンスリーリリースは、セルフマネージドのお客様に新機能、バグ修正、パフォーマンス改善を提供するための手段です。[パッチリリース](/handbook/engineering/releases/patch-releases/)や[内部リリース](/handbook/engineering/releases/internal-releases/)とは異なり、マンスリーリリースには新しい機能を含めることができます。

所有権、例外プロセス、エスカレーションパスを含む一般的なリリースポリシーのフレームワークについては、[リリースポリシー](/handbook/engineering/releases/#release-policy)セクションを参照してください。

{{< alert color="info" >}}
**プロダクトチームおよびマーケティングチームへ:** イベント、アナウンス、機能リリースは [マンスリーリリーススケジュール](/handbook/engineering/releases/monthly-releases/#monthly-release-schedule) に沿って行う必要があります。機能はマンスリーリリースでのみリリースされます — パッチリリースおよび内部リリースには新機能は含まれません。機能がマンスリーの締切に間に合わなかった場合は、ステークホルダーに遅延を伝えてください。次のマンスリーリリースがその機能をリリースするための適切な手段です。[期限を逃した場合のオーナーシップ](/handbook/engineering/releases/#ownership-when-deadlines-are-missed) を参照してください。
{{< /alert >}}

## マンスリーリリースの概要

マンスリーリリースは、[GitLab.com への多数のデプロイ](/handbook/engineering/deployments-and-releases/deployments/)からの変更を含む [semver](https://semver.org) バージョン管理されたパッケージです。したがって GitLab.com のユーザーは、セルフマネージドのインストールのユーザーよりも早く機能とバグ修正を受け取ります。

[デプロイとリリースのページ](/handbook/engineering/deployments-and-releases/) では、2 つのプロセスがどのように連携して機能するかを詳しく説明しています。

### 他のリリースタイプとの関係

マンスリーリリースは、他のすべてのリリースタイプの基盤を作成します。

* **ステーブルブランチ** はリリース候補がタグ付けされるときに作成され、パッチリリースおよび内部リリースの基盤となります
* **[パッチリリース](/handbook/engineering/releases/patch-releases/)** はこれらのステーブルブランチからカットされ、セルフマネージドのお客様にバグおよびセキュリティ修正を提供します
* **[内部リリース](/handbook/engineering/releases/internal-releases/)** は同じステーブルブランチを使用して、公開前に GitLab Dedicated にクリティカルな修正を提供します

## マンスリーリリーススケジュール

{{< release-schedule >}}

### マンスリーリリースプロセス {#monthly-release-process}

マンスリーリリースのタイムラインは [リリース日](/handbook/engineering/releases/) を中心に集中しています。

マンスリーリリースプロセスに含まれる手順の概要:

![マンスリーリリース概要](/images/engineering/releases/monthly-releases/monthly-release-overview.jpg)

* [ダイアグラムソース](https://docs.google.com/presentation/d/1YRjA1dYCXNXp06VltDYlik1MdFyzUvaeXKk69mMPcA4/edit#slide=id.g2951f7d5d31_1_0)

エンドツーエンドのプロセスは以下のステージで構成されています。

1. **最初のステップ** - マンスリーリリースのセットアップを行う初期ステップ。リリーススケジュールとデプロイケイデンスの設定を含みます。
1. **GitLab.com へのデプロイ** - マイルストーンの開始からリリース日の 1 週間前まで、GitLab.com は 1 日に複数回のデプロイを受けます。アプリケーションの変更がマンスリーリリースに含まれるためには、GitLab.com に正常にデプロイされる必要があります。
1. **リリース候補** - テスト用 [リリース候補 (RC)](#what-is-a-release-candidate-and-when-are-they-created) が、対象とする [semver](https://semver.org) バージョンのステーブルブランチとともに作成されます。リリース候補パッケージがビルド、テストされ、[pre 環境](/handbook/engineering/infrastructure-platforms/environments/#pre) にデプロイされます。成功した結果は、このパッケージが最終バージョンとして使用できることを示します。この時点で [リリースマネージャー](/handbook/engineering/releases/release-managers/) がリリースに含まれる最終コミットをアナウンスします。
1. **タグ** - リリースマネージャーがリリース候補に基づいて最終バージョンにタグを付けます。
1. **リリース** - リリース日に、リリースパッケージが公開されます。

### リリース手順

#### リリース準備 (リリース週の火曜日まで含む)

これは変更を検証し、バグに対処し、リリースされる予定のものの安定性を確保するためのウィンドウを提供します。
最初の RC をカットすることが、そのバージョンのステーブルブランチが作成されるタイミングです。
発生するバグに対処するために多くの RC が作成されることがあります。
最初の RC が作成されると、バグはステーブルブランチに直接ポートする必要があることに注意してください。
この段階では新しい機能は含まれません。

| ステップ | 目的 |
| --- | --- |
| オートデプロイ | リリース週の火曜日まで 1 日に複数回実行されます。リリース前の問題を検証し、修正する機会を提供します。 |
| RC 作成 | お客様が受け取るパッケージに似たパッケージをビルドします。ビルド手順の検証 (タグビルド時と同様の手順)。受信インスタンスで QA が実行され、さらに検証が行われます。 |

#### タグ付け日 (第 3 水曜日)

この日が引き返せない地点です。
タグが作成されると、それは不変です。
リリースのためのすべての変更が確定されます。

| ステップ | 目的 |
| --- | --- |
| バージョンタグ付け | 公式バージョンタグの作成 (例: 18.8.0) |
| パッケージビルド | すべてのプラットフォーム向け Omnibus パッケージのビルド |
| コンテナイメージビルド | CE、EE、UBI、FIPS コンテナイメージのビルド |
| QA アップデートシナリオ | 以前のバージョンからのアップグレードパスのテスト |
| プレリリース検証 | すべてのパッケージの最終検証 |

#### リリース日 (第 3 木曜日)

| ステップ | 目的 |
|------|---------|
| リリース公開 | パッケージの公開とリリースのアナウンス (13:00 UTC) |
| リリース後の検証 | パブリックリポジトリでのパッケージ可用性の確認 |
| リリースの確定 | トラッキングシステムの更新とリリースのクローズ |

### タイムライン

リリースサイクル全体を通じて保証される唯一の日付は [リリース日](/handbook/engineering/releases/) です。この日に、`マンスリーリリース` がリリースアナウンスとともに公開されます。

**その他の日付はすべて**、**ガイドラインのみ** であり、いかなるタイプのリリースに含まれるものに関して期限とは見なせません。これには [開発月](/handbook/engineering/workflow/#product-development-timeline) とそこで定義された日付、および顧客への約束も含まれます。これは厳密には、セキュリティ関連の Issue を含む最優先度かつ最高重大度の Issue への対応など、リリースの準備に考慮すべき多くの要素があるためです。

特定のバージョンに特定の機能を絶対に間に合わせる必要がある場合は、開発サイクルの早い段階で機能をマージしてください。
リリース日の近くでのマージは、その特定の `マンスリーリリース` に含まれることは絶対に保証されません。

## マージリクエストがマンスリーリリースに含まれるかどうかをどのように判断できますか？ {#how-can-i-determine-if-my-merge-request-will-make-it-into-the-monthly-release}

マージリクエストが次のマンスリーリリースに含まれるかどうかを判断するために、複数のツールが利用可能です。このセクションでは、参照しやすいよう利用可能なすべてのツールをまとめています。

### 利用可能なツール

1. [マージリクエストのラベル](#labels-indicating-inclusion-in-upcoming-monthly-release)
1. [マージリクエストウィジェット](#merge-request-widget)
1. [ChatOps コマンド](#chatops-commands)
1. [リリースダッシュボード](#monthly-release-information-dashboard)
1. [Slack の #releases チャンネルのアナウンス](#slack-announcements-on-releases-channel)

### 次回マンスリーリリースへの包含を示すラベル {#labels-indicating-inclusion-in-upcoming-monthly-release}

リリース候補 (RC) に含まれたマージリクエストは、マンスリーリリースの一部になります。リリース候補の詳細については [「リリース候補とは何ですか？ いつ作成されますか？」](#what-is-a-release-candidate-and-when-are-they-created) を参照してください。マージリクエストは、RC への包含を示すために `released::candidate` ラベルを受け取ります。

マージリクエストが `13.6.0` や `13.5.2` などの最終リリースに含まれると、`released::candidate` ラベルを置き換える `released::published` ラベルを受け取ります。

### マージリクエストウィジェット {#merge-request-widget}

マージリクエストウィジェットは、すべてのマージリクエストの環境とデプロイ時間を表示します。
これにより、マージリクエストがリリースプロセスのどこにあるかを理解するための情報が提供されます。

* `release` はセルフマネージドユーザーに公開される最終バージョン用です。MR が最終リリースに含まれると、次のマンスリーリリースに含まれることを示すために `released::published` ラベルが MR に適用されます。
* `pre` はリリース候補、およびセルフマネージドユーザー向け最終リリースの準備として使用されるバージョン用です。MR がリリース候補に含まれると、次のマンスリーリリースに含まれることを示すために `released::candidate` ラベルが MR に適用されます。

マージリクエストウィジェットは、デプロイプロセスのどこにあるかを参照するためにも使用できます。

* `gstg-cny` は GitLab SaaS ステージング環境の [カナリアステージ](https://about.gitlab.com/handbook/engineering/infrastructure-platforms/environments/canary-stage/) です
* `gprd-cny` は GitLab SaaS 本番環境の [カナリアステージ](https://about.gitlab.com/handbook/engineering/infrastructure-platforms/environments/canary-stage/) です
* `gstg` は GitLab SaaS のステージング環境です - [staging.gitlab.com](https://staging.gitlab.com/)
* `gprd` は GitLab SaaS の本番環境です - [GitLab.com](https://gitlab.com/)
* `db/gstg` はマージリクエストに含まれるポストマイグレーションがステージング環境で実行されたことを示します。
* `db/gprd` はマージリクエストに含まれるポストマイグレーションが本番環境で実行されたことを示します。

ウィジェットに環境が表示されない場合、MR はまだいずれの環境にもデプロイされていません。

### ChatOps コマンド {#chatops-commands}

GitLab チームメンバーは Slack の `#releases` チャンネルで ChatOps コマンドを使用して、マージリクエストのステータスを確認できます。

#### マンスリーリリースに関する MR ステータスの確認

マンスリーリリースに関する MR のステータスを確認するために使用できる ChatOps コマンドがあります。

```bash
/chatops run release check <MR URL> <upcoming release version (optional)>
```

例: `/chatops run release check https://gitlab.com/gitlab-org/gitlab/-/merge_requests/12345 14.4`。

`gitlab-org/gitlab`、`gitlab-org/security/gitlab`、`gitlab-org/omnibus-gitlab`、`gitlab-org/security/omnibus-gitlab` プロジェクトの MR がこのコマンドでサポートされています。

このコマンドが役立つ 2 つのシナリオ:

1. **MR が最初にリリースされたバージョンを確認する**: `/chatops run release check <MR URL>` (バージョンを省略した場合、MR がすでにリリースされているかどうかのみ確認します)

1. **次回マンスリーリリースに MR が含まれる可能性を確認する**: `/chatops run release check <MR URL> <upcoming release version>`

### マンスリーリリース情報ダッシュボード {#monthly-release-information-dashboard}

GitLab チームメンバーは [内部 Grafana ダッシュボード「Release Information」](https://dashboards.gitlab.net/d/delivery-release_info/delivery3a-release-information?orgId=1) で以下の情報を確認できます。

* 次回マンスリーリリースのバージョン
* 次回マンスリーリリースの日付
* 次回マンスリーリリースの期日
* 次回マンスリーリリースの現在のステータス

マンスリーリリースに MR を含めるための期日は、最初のリリース候補とステーブルブランチが作成されるタイミングに設定されています。その時点以降、マンスリーリリースには新たな機能は含まれません。

マンスリーリリースダッシュボードには、デプロイ済み MR を受け入れているオープン状態か、すでにクローズされて新しい機能を追加できないかを示す現在のステータスを説明するパネルも含まれています。

この情報を表示するために使用されるメトリクスは、[マンスリーリリースプロセス](#monthly-release-process) 全体を通じて自動的に更新されます。

#### Slack の #releases チャンネルのアナウンス {#slack-announcements-on-releases-channel}

[リリース日](/handbook/engineering/releases/) の直前に、リリースマネージャーはリリースに含まれる最終コミットをアナウンスします。このような通知は Slack [#releases](https://gitlab.slack.com/archives/C0XM5UU6B) チャンネルで共有され、次のようになります (フォーマットは [release-tools のマンスリーテンプレート](https://gitlab.com/gitlab-org/release-tools/-/blob/master/templates/monthly.md.erb) で定義されています)。

> :mega: ステーブルブランチが作成され、リリース候補にタグが付けられました。重大な問題がなければ、これが 21 日にリリースされる最終コミットです。 https://gitlab.com/gitlab-org/security/gitlab/-/commits/18-3-stable-ee

マンスリーリリースに含まれたマージリクエストは [包含を示すラベル](#labels-indicating-inclusion-in-upcoming-monthly-release) を受け取ります。

## よくある質問

### リリース X のリリースマネージャーは誰ですか？

[GitLab リリースマネージャー](/handbook/engineering/releases/release-managers/) のスケジュールを確認することで分かります。

### リリース候補とは何ですか？ いつ作成されますか？ {#what-is-a-release-candidate-and-when-are-they-created}

リリース候補 (RC) とは、変更がリバートされる必要があるまれなケースを除いて、最終マンスリーリリースに含まれる変更を含む GitLab パッケージです。RC はマンスリーリリースのみで作成され、パッチリリースでは作成されません。通常、リリースごとに 1 つの RC が作成されますが、GitLab.com の状態に基づいてさらに RC が作成される場合があります。

リリース候補は、リリース日の 2 日前に、最終リリースの直前に作成されます。必要な場合は、より早くリリース候補を作成することもあります。これは以下のような要因に依存します。

* リリース直前に発生中または発生していた GitLab.com 上のインシデント。
* リリースマネージャーの注意を必要とする (クリティカルな) [パッチリリース](/handbook/engineering/releases/patch-releases)。
* オートデプロイパイプラインの問題。
* リリース候補の作成を遅延または妨げる可能性のあるその他のリリース関連作業。

つまり、リリース候補がいつ作成されるかを知りたい場合は、以下の Slack チャンネルのいずれかに参加することが最善の方法です。

* [#releases](https://gitlab.slack.com/archives/C0XM5UU6B)
* [#f_upcoming_release](https://gitlab.slack.com/archives/f_upcoming_release)

リリース候補は、自動テストと手動テストの両方のために [`pre.gitlab.com`](/handbook/engineering/infrastructure-platforms/environments/#pre) にデプロイされます。

### リリースマネージャーに依頼すれば、より早くリリース候補を作成してもらえますか？

リリース候補をいつ作成するかは、デプロイメントと GitLab.com の状態を考慮した上で、リリースマネージャーが決定します。

リリース関連の質問やリクエストについて、リリースマネージャーに個人的にメッセージを送らないでください。代わりに、[#releases](https://gitlab.slack.com/archives/C0XM5UU6B) チャンネルにリクエスト／質問を投稿してください。

### マンスリーリリースに含まれるためには、いつまでに MR をマージする必要がありますか？

> [!WARNING] :warning:
> MR がマンスリーサイクルの早い段階でマージされるほど、そのマンスリーリリースに含まれる可能性が高くなります。

**マンスリーリリースに MR を含めるための目標期日: リリース手順が始まる日の前日 16:00 UTC** (通常は [リリース日](/handbook/engineering/releases/monthly-releases/#monthly-release-schedule) の 2 日前)。

全員が提供するものの品質と安定性が、マンスリーリリースに含まれる MR の最終リストを決定します。GitLab.com が安定している場合、リリースの 2 日前にマージされた MR が含まれる可能性があります。いずれかのチームの変更によって安定性が低下している場合、リリースの 1 週間前にマージされた MR でも含まれない可能性があります。

期日前に MR が正常にデプロイされた場合でも、以下の理由でリリースに含まれない可能性があります。

* GitLab.com 上の **いずれかの** 変更がインシデントやロールバックを引き起こす
* GitLab.com が他の MR の影響で安定性の問題を経験する
* 問題のある変更とともにあなたの変更がロールバックされる

MR がリリースに含まれるためには、以下が必要です。

1. デフォルトブランチに **マージ** されている
2. GitLab.com 本番環境に正常に **デプロイ** されている
3. ロールバックされずに **デプロイされ続けている**

MR のリアルタイムステータスについては、[利用可能なツール](#how-can-i-determine-if-my-merge-request-will-make-it-into-the-monthly-release) を使用してください。

### 高重大度のバグ修正をリリースするにはどうすればよいですか？

高重大度の Issue は、適切なバグおよび重大度ラベルを付けた Issue から始める必要があります。

バグの詳細に応じて、以下のいずれかのプロセスに従ってください。

* [高重大度のセキュリティバグ](/handbook/engineering/releases/patch-releases/#patch-release-types) の場合
* [セルフマネージドユーザーに影響する高重大度のバグ](/handbook/engineering/releases/patch-releases/#patch-release-types) の場合。バグがその月の [リリース日](/handbook/engineering/releases/) の近くに発見された場合は、[#releases](https://gitlab.slack.com/archives/C0XM5UU6B) のリリースマネージャーにも通知してください。
* [GitLab.com に影響する高重大度のバグ](/handbook/engineering/deployments-and-releases/deployments/#gitlabcom-pick-label) の場合
* [セキュリティマージリクエストによって引き起こされる高重大度のバグ](https://gitlab.com/gitlab-org/release/docs/-/blob/master/general/security/bugs_introduced_by_security_merge_request.md) の場合
* [Dedicated に影響する高重大度のバグ](/handbook/engineering/releases/internal-releases/) の場合
