---
title: "マンスリーリリース"
upstream_path: /handbook/engineering/releases/monthly-releases/
upstream_sha: 0e6f01390a34aeb6706ace17d8d3c50e74e82d0d
translated_at: "2026-04-29T00:00:00Z"
translator: claude
stale: false
---

## マンスリーリリースポリシー

マンスリーリリースは、セルフマネージドのお客様に新機能、バグ修正、パフォーマンス改善を提供するための手段です。[パッチリリース](/handbook/engineering/releases/patch-releases/)や[内部リリース](/handbook/engineering/releases/internal-releases/)とは異なり、マンスリーリリースには新しい機能を含めることができます。

所有権、例外プロセス、エスカレーションパスを含む一般的なリリースポリシーのフレームワークについては、[リリースポリシー](/handbook/engineering/releases/#release-policy)セクションを参照してください。


<div class="my-4 border-l-4 border-amber-500 bg-amber-50 px-4 py-3 rounded-r">

**プロダクトチームとマーケティングチームへ:** イベント、アナウンス、機能リリースは[マンスリーリリーススケジュール](/handbook/engineering/releases/monthly-releases/#monthly-release-schedule)に合わせる必要があります。機能はマンスリーリリースのみで提供されます — パッチリリースと内部リリースには新しい機能は含まれません。機能がマンスリーの期限に間に合わなかった場合は、ステークホルダーに遅延を伝えてください。次のマンスリーリリースがその機能をリリースするための適切な手段です。[期限を逃した場合の所有権](/handbook/engineering/releases/#ownership-when-deadlines-are-missed)を参照してください。

</div>


## マンスリーリリースの概要

マンスリーリリースは、[GitLab.comへの多数のデプロイ](/handbook/engineering/deployments-and-releases/deployments/)からの変更を含む[semver](https://semver.org)バージョン管理パッケージです。したがって、GitLab.comのユーザーは、セルフマネージドインストールのユーザーよりも早く機能とバグ修正を受け取ります。

[デプロイとリリースページ](/handbook/engineering/deployments-and-releases/)では、2つのプロセスがどのように連携して機能するかを詳しく説明しています。

### 他のリリースタイプとの関係

マンスリーリリースはすべての他のリリースタイプの基盤を作成します。

* **ステーブルブランチ**はリリース候補がタグ付けされるときに作成され、パッチリリースと内部リリースの基盤となります
* **[パッチリリース](/handbook/engineering/releases/patch-releases/)** はこれらのステーブルブランチからカットされ、セルフマネージドのお客様にバグとセキュリティ修正を提供します
* **[内部リリース](/handbook/engineering/releases/internal-releases/)** は同じステーブルブランチを使用して、公開前にGitLab Dedicatedにクリティカルな修正を提供します

## マンスリーリリーススケジュール


<p class="my-3 text-sm text-gray-600 italic">リリーススケジュールは <a href="https://handbook.gitlab.com/handbook/engineering/releases/monthly-releases/#monthly-release-schedule" rel="external noopener">原文 (英語)</a> を参照してください。</p>


### マンスリーリリースプロセス

マンスリーリリースのタイムラインは[リリース日](/handbook/engineering/releases/)を中心に集中しています。

マンスリーリリースプロセスに関わる手順の概要：

![マンスリーリリース概要](/images/engineering/releases/monthly-releases/monthly-release-overview.jpg)

* [ダイアグラムソース](https://docs.google.com/presentation/d/1YRjA1dYCXNXp06VltDYlik1MdFyzUvaeXKk69mMPcA4/edit#slide=id.g2951f7d5d31_1_0)

エンドツーエンドのプロセスは以下の段階で構成されています。

1. **最初のステップ** - マンスリーリリースのセットアップ、リリーススケジュールとデプロイケイデンスの設定を含む初期ステップ。
1. **GitLab.comへのデプロイ** - マイルストーンの開始からリリース日の1週間前まで、GitLab.comは1日に複数回デプロイを受け取ります。アプリケーションの変更がマンスリーリリースに含まれるためには、GitLab.comに正常にデプロイされる必要があります。
1. **リリース候補** - テスト用[リリース候補（RC）](#what-is-a-release-candidate-and-when-are-they-created)が作成され、対象とする[semver](https://semver.org)バージョンのステーブルブランチとともに作成されます。リリース候補パッケージがビルドされ、テストされ、[pre環境](/handbook/engineering/infrastructure-platforms/environments/#pre)にデプロイされます。成功した結果は、このパッケージが最終バージョンとして使用できることを示します。この時点で[リリースマネージャー](https://about.gitlab.com/community/release-managers/)がリリースに含まれる最終コミットをアナウンスします。
1. **タグ付け** - リリースマネージャーがリリース候補に基づいて最終バージョンにタグを付けます。リリースがビルドされ、[リリース環境](/handbook/engineering/infrastructure-platforms/environments/#release)にデプロイされます。
1. **リリース** - リリース日に、リリースパッケージが公開されます。

### リリース手順

#### リリース準備（リリース週の火曜日まで）

これは変更を検証し、バグに対処し、リリースされる予定のものの安定性を確保するためのウィンドウを提供します。
最初のRCをカットすることが、そのバージョンのステーブルブランチが作成されるタイミングです。
発生するバグに対処するために多くのRCが作成されることがあります。
最初のRCが作成されると、バグはステーブルブランチに直接ポートする必要があることに注意してください。
この段階では新しい機能は含まれません。

| ステップ | 目的 |
| --- | --- |
| オートデプロイ | リリース週の火曜日まで1日に複数回実行されます。リリース前の問題を検証し、修正する機会を提供します。 |
| RC作成 | お客様が受け取るパッケージに似たパッケージをビルドします。ビルド手順の検証、タグビルド時と同様の手順。受信インスタンスでQAが実行され、さらに検証が行われます。 |

#### タグ付け日（第3水曜日）

この日が引き返せない地点です。
タグが作成されると、それは不変です。
リリースのためにすべての変更が確定されます。

| ステップ | 目的 |
| --- | --- |
| バージョンタグ付け | 公式バージョンタグの作成（例：18.8.0） |
| パッケージビルド | すべてのプラットフォーム向けOmnibusパッケージのビルド |
| コンテナイメージビルド | CE、EE、UBI、FIPSコンテナイメージのビルド |
| QAアップデートシナリオ | 以前のバージョンからのアップグレードパスのテスト |
| プレリリース検証 | すべてのパッケージの最終検証 |

#### リリース日（第3木曜日）

| ステップ | 目的 |
|------|---------|
| リリース公開 | パッケージの公開とリリースのアナウンス（13:00 UTC） |
| リリース後の検証 | パブリックリポジトリでのパッケージの可用性確認 |
| リリースの確定 | トラッキングシステムの更新とリリースのクローズ |

### タイムライン

リリースサイクル全体を通じて保証される唯一の日付は[リリース日](/handbook/engineering/releases/)です。この日に、`マンスリーリリース`はリリースアナウンスとともに公開されます。

**その他の日付はすべて**、**ガイドラインのみ**であり、いかなるタイプのリリースに含まれるものに関して期限とは見なせません。これには[開発月](/handbook/engineering/workflow/#product-development-timeline)とそこで定義された日付、および顧客への約束も含まれます。これは厳密には、セキュリティ関連の問題を含む最優先度および最高重大度の問題に取り組むことを含め、リリースの準備に考慮すべき多くの要素があるためです。

特定のバージョンに特定の機能が絶対に必要な場合は、開発サイクルの早い段階で機能をマージしてください。
リリース日の近くでのマージは、その特定の`マンスリーリリース`に含まれることは絶対に保証されません。

## マージリクエストがマンスリーリリースに含まれるかどうかをどのように判断できますか？

マージリクエストが次のマンスリーリリースに含まれるかどうかを判断するために、複数のツールが利用可能です。このセクションでは、参照しやすいよう利用可能なすべてのツールをまとめています。

### 利用可能なツール

1. [マージリクエストのラベル](#labels-indicating-inclusion-in-upcoming-monthly-release)
1. [マージリクエストウィジェット](#merge-request-widget)
1. [ChatOpsコマンド](#chatops-commands)
1. [リリースダッシュボード](#monthly-release-information-dashboard)
1. [Slackの#releasesチャンネルのアナウンス](#slack-announcements-on-releases-channel)

### 次回のマンスリーリリースへの包含を示すラベル

リリース候補（RC）に含まれたマージリクエストはマンスリーリリースの一部になります。リリース候補に関する詳細は["リリース候補とは何ですか？いつ作成されますか？"](#what-is-a-release-candidate-and-when-are-they-created)を参照してください。マージリクエストはRCへの包含を示すために`released::candidate`ラベルを受け取ります。

マージリクエストは`13.6.0`や`13.5.2`などの最終リリースに含まれ、[`release.gitlab.net`](/handbook/engineering/infrastructure-platforms/environments/#release)にデプロイされると、`released::candidate`ラベルを置き換える`released::published`ラベルを受け取ります。

### マージリクエストウィジェット

マージリクエストウィジェットは、すべてのマージリクエストの環境とデプロイ時間を表示します。
これにより、マージリクエストがリリースプロセスのどこにあるかを理解するための情報が提供されます。

* `release` はセルフマネージドユーザーに公開される最終バージョンのためです。MRが[`release.gitlab.net`](/handbook/engineering/infrastructure-platforms/environments/#release)インスタンスにデプロイされると、次のマンスリーリリースに含まれることを示すために`released::published`ラベルがMRに適用されます。
* `pre` はリリース候補とセルフマネージドユーザーへの最終リリースの準備に使用されるバージョンのためです。MRがリリース候補に含まれると、次のマンスリーリリースに含まれることを示すために`released::candidate`ラベルがMRに適用されます。

マージリクエストウィジェットは、デプロイプロセスのどこにあるかを参照するためにも使用できます。

* `gstg-cny` はGitLab SaaSステージング環境の[カナリアステージ](https://about.gitlab.com/handbook/engineering/infrastructure-platforms/environments/canary-stage/)です
* `gprd-cny` はGitLab SaaS本番環境の[カナリアステージ](https://about.gitlab.com/handbook/engineering/infrastructure-platforms/environments/canary-stage/)です
* `gstg` はGitLab SaaSのステージング環境です - [staging.gitlab.com](https://staging.gitlab.com/)
* `gprd` はGitLab SaaSの本番環境です - [GitLab.com](https://gitlab.com/)
* `db/gstg` はマージリクエストに含まれるポストマイグレーションがステージング環境で実行されたことを示します。
* `db/gprd` はマージリクエストに含まれるポストマイグレーションが本番環境で実行されたことを示します。

ウィジェットに環境が表示されない場合、MRはまだいずれの環境にもデプロイされていません。

### ChatOpsコマンド

GitLabチームメンバーはSlackの`#releases`チャンネルでChatOpsコマンドを使用して、マージリクエストのステータスを確認できます。

#### マンスリーリリースに関するMRステータスの確認

マンスリーリリースに関するMRのステータスを確認するために使用できるChatOpsコマンドがあります。

```bash
/chatops run release check <MR URL> <次回リリースバージョン（オプション）>
```

例: `/chatops run release check https://gitlab.com/gitlab-org/gitlab/-/merge_requests/12345 14.4`

`gitlab-org/gitlab`、`gitlab-org/security/gitlab`、`gitlab-org/omnibus-gitlab`および`gitlab-org/security/omnibus-gitlab`プロジェクトのMRがこのコマンドでサポートされています。

このコマンドが役立つ2つのシナリオ:

1. **MRが最初にリリースされたバージョンを確認する**: `/chatops run release check <MR URL>` （バージョンが省略された場合、MRがすでにリリースされているかどうかのみ確認します）

1. **次回のマンスリーリリースにMRが含まれる可能性を確認する**: `/chatops run release check <MR URL> <次回リリースバージョン>`

### マンスリーリリース情報ダッシュボード

GitLabチームメンバーは[内部Grafanaダッシュボード「リリース情報」](https://dashboards.gitlab.net/d/delivery-release_info/delivery3a-release-information?orgId=1)で以下の情報を確認できます。

* 次回のマンスリーリリースバージョン
* 次回のマンスリーリリース日
* 次回のマンスリーリリースの期日
* 次回のマンスリーリリースの現在のステータス

マンスリーリリースにMRを含めるための期日は、最初のリリース候補とステーブルブランチが作成されるタイミングに設定されています。その時点以降、マンスリーリリースにはこれ以上の機能は含まれません。

マンスリーリリースダッシュボードには、デプロイされたMRを受け入れているオープン状態か、すでにクローズされて新しい機能を追加できないかを示す現在のステータスを説明するパネルも含まれています。

この情報を表示するために使用されるメトリクスは、[マンスリーリリースプロセス](#monthly-release-process)全体を通じて自動的に更新されます。

#### Slackの#releasesチャンネルのアナウンス

[リリース日](/handbook/engineering/releases/)の直前に、リリースマネージャーはリリースに含まれる最終コミットをアナウンスします。このような通知はSlackの[#releases](https://gitlab.slack.com/archives/C0XM5UU6B)チャンネルで共有され、次のようになります（フォーマットは[release-toolsマンスリーテンプレート](https://gitlab.com/gitlab-org/release-tools/-/blob/master/templates/monthly.md.erb)で定義されています）。

> :mega: ステーブルブランチが作成され、リリース候補にタグが付けられました。重大な問題がなければ、これが21日にリリースされる最終コミットです。https://gitlab.com/gitlab-org/security/gitlab/-/commits/18-3-stable-ee

マンスリーリリースに含まれたマージリクエストは[包含を示すラベル](#labels-indicating-inclusion-in-upcoming-monthly-release)を受け取ります。

## よくある質問

### リリースXのリリースマネージャーは誰ですか？

[GitLab リリースマネージャー](https://about.gitlab.com/community/release-managers/)スケジュールを確認することで分かります。

### リリース候補とは何ですか？いつ作成されますか？

リリース候補（RC）とは、変更がリバートされる必要があるまれなケースを除いて、最終マンスリーリリースに含まれる変更を含むGitLabパッケージです。RCはマンスリーリリースにのみ作成され、パッチリリースには作成されません。通常、リリースごとに1つのRCが作成されますが、GitLab.comの状態に基づいてさらにRCが作成される場合があります。

リリース候補はリリース日の2日前の最終リリースの直前に作成されます。必要な場合は、より早くリリース候補を作成することもあります。これは以下のような要因に依存します。

* GitLab.comで進行中または進行していたインシデント（リリース直前の場合）。
* リリースマネージャーの注意を必要とする[パッチリリース](/handbook/engineering/releases/patch-releases)（クリティカルなもの）。
* オートデプロイパイプラインの問題。
* リリース候補の作成を遅延または妨げる可能性のある他のリリース関連作業。

つまり、リリース候補がいつ作成されるかを知りたい場合は、以下のSlackチャンネルのいずれかに参加することが最善の方法です。

* [#releases](https://gitlab.slack.com/archives/C0XM5UU6B)
* [#f_upcoming_release](https://gitlab.slack.com/archives/f_upcoming_release)

リリース候補は、自動テストと手動テストの両方のために[`pre.gitlab.com`](/handbook/engineering/infrastructure-platforms/environments/#pre)にデプロイされます。

### リリースマネージャーに依頼すれば、より早くリリース候補を作成してもらえますか？

リリース候補をいつ作成するかは、デプロイメントとGitLab.comの状態を考慮した上で、リリースマネージャーが決定します。

リリース関連の質問やリクエストについて、リリースマネージャーに個人的にメッセージを送らないでください。代わりに、[#releases](https://gitlab.slack.com/archives/C0XM5UU6B)チャンネルにリクエスト/質問を投稿してください。

### マンスリーリリースに含まれるためにMRをいつマージする必要がありますか？

> [!WARNING] :warning:
> MRがマンスリーサイクルの早い段階でマージされるほど、そのMRがそのマンスリーリリースに含まれる可能性が高くなります。

**マンスリーリリースにMRを含めるための目標期日: リリース手順が始まる日の前日の16:00 UTC**（通常は[リリース日](/handbook/engineering/releases/monthly-releases/#monthly-release-schedule)の2日前）。

全員が提供するものの品質と安定性が、マンスリーリリースに含まれるMRの最終リストを決定します。GitLab.comが安定している場合、リリースの2日前にマージされたMRが含まれる可能性があります。いずれかのチームの変更によって安定性が低下している場合、リリースの1週間前にマージされたMRでも含まれない可能性があります。

期日前にMRが正常にデプロイされた場合でも、以下の理由でリリースに含まれない可能性があります。

* GitLab.comで**いずれかの**変更がインシデントやロールバックを引き起こす
* 他のMRによるGitLab.comの安定性の問題
* 問題のある変更とともにあなたの変更がロールバックされる

MRがリリースに含まれるためには、以下が必要です。

1. デフォルトブランチに**マージ**されている
2. GitLab.com本番環境に正常に**デプロイ**されている
3. ロールバックされずに**デプロイされ続けている**

MRのリアルタイムのステータスについては、[利用可能なツール](#how-can-i-determine-if-my-merge-request-will-make-it-into-the-monthly-release)を使用してください。

### 高重大度のバグ修正をリリースするにはどうすればよいですか？

高重大度の Issue は、適切なバグと重大度ラベルを付けた Issue から始める必要があります。

バグの詳細に応じて、以下のいずれかのプロセスに従ってください。

* [高重大度のセキュリティバグ](/handbook/engineering/releases/patch-releases/#patch-release-types)の場合
* [セルフマネージドユーザーに影響する高重大度のバグ](/handbook/engineering/releases/patch-releases/#patch-release-types)の場合。バグがリリース月の[リリース日](/handbook/engineering/releases/)の近くに発見された場合は、[#releases](https://gitlab.slack.com/archives/C0XM5UU6B)のリリースマネージャーにも通知してください。
* [GitLab.comに影響する高重大度のバグ](/handbook/engineering/deployments-and-releases/deployments/#gitlabcom-pick-label)の場合
* [セキュリティマージリクエストによって引き起こされる高重大度のバグ](https://gitlab.com/gitlab-org/release/docs/-/blob/master/general/security/bugs_introduced_by_security_merge_request.md)の場合
* [Dedicatedに影響する高重大度のバグ](/handbook/engineering/releases/internal-releases/)の場合
