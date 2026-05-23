---
title: "DistributionチームのTriage"
description: "Distributionチームの Issue トリアージプロセスの概要とまとめ"
upstream_path: "/handbook/engineering/infrastructure-platforms/gitlab-delivery/build/triage/"
upstream_sha: "0e6f01390a34aeb6706ace17d8d3c50e74e82d0d"
translated_at: "2026-04-28T23:09:27Z"
translator: claude
stale: false
lastmod: "2025-07-02T12:41:38-07:00"
---

## 共通リンク

* [エンジニアリングチームTriage](/handbook/product-development/how-we-work/issue-triage/)

## Issue のトリアージ

### 用語集

* トリアージ: Issue のトリアージとは Issue を調査し、ラベルとマイルストーンを適用することです。
* 部分的にトリアージされた Issue: `for scheduling`または`awaiting feedback`ラベルが割り当てられている場合、Issue は**部分的に**トリアージされたとみなします。
* 完全にトリアージされた Issue: マイルストーン（`Backlog`であっても）が割り当てられている場合、Issue は**完全に**トリアージされたとみなします。適切なグループ、優先度、製品カテゴリラベルが適用されている必要があります。

注: ユーザーにはアサインされているがマイルストーンがない Issue はトリアージされていませんが、そのユーザーの責任とみなされ、現時点ではトリアージキューの一部ではありません。

#### Issue の重大度

重大度ラベルの説明については[CEドキュメント](https://gitlab.com/gitlab-org/gitlab-ce/blob/master/CONTRIBUTING.md#severity-labels)を参照してください。

#### ラベル用語集

| ラベル | 意味 | 対応方法 |
| - | - | - |
| awaiting feedback | ユーザーに追加情報を求めた | 2週間以内に返信がない場合、Issue をクローズできます。 |
| maintainer-discussion | プロジェクトメンテナーによる追加議論が必要な Issue | プロジェクトメンテナーは2週間以内にステータスを確認し、意見を提供します。 |
| needs investigation | ユーザーから情報が提供されたが、チームがさらに詳しく調査するのを待っている | ラベルを追加したチームメンバーは4週間以内に調査する時間を見つけるか、他のチームメンバーを参加させるようにします。 |

トリアージ中は、Issue に適切な`group::`ラベルを適用します。

* `group::distribution::build` は [Distribution Buildチームの責任範囲](/handbook/engineering/infrastructure-platforms/gitlab-delivery/distribution/#distribution-build)の Issue に使用
* `group::distribution::deploy` は [Distribution Deployチームの責任範囲](/handbook/engineering/infrastructure-platforms/gitlab-delivery/distribution/#distribution-deploy)の Issue に使用
* `group::distribution` は [Distributionチームの共有責任](/handbook/engineering/infrastructure-platforms/gitlab-delivery/distribution/#team-responsibility)の Issue に使用
* [GitLab Features by Group](/handbook/product/categories/features/)に基づいて最も適切なグループ

トリアージ中は、Issue によって影響を受ける製品の部分を示す追加ラベルも付けます。Distributionがよく使用するラベルの説明は[Distributionよく使用するラベルページ](https://gitlab.com/gitlab-org/distribution/team-tasks/-/blob/master/frequently-used-labels.md)にあります。

### リソース

トリアージする Issue は以下の基準で識別できます：

* マイルストーンがない
* アサインされていない
* 以下のラベルが**ついていない**：
  * `awaiting feedback`
  * `for scheduling`
  * `maintainer-discussion`
  * `needs investigation`
  * `Seeking community contributions`

このような Issue は[Issue フィルター](https://gitlab.com/gitlab-org/omnibus-gitlab/-/issues?scope=all&utf8=%E2%9C%93&state=opened&assignee_id=None&milestone_title=None&not[label_name][]=For%20Scheduling&not[label_name][]=awaiting%20feedback&not[label_name][]=maintainer-discussion)を使用してリストアップできます。

### プロセス

Distributionチームは、チームの各メンバーが1週間ずつ担当するローテーションスケジュールで Issue トリアージを実施しています。これは入社順に行われます。Issue トリアージ担当中に従うプロセスは以下のとおりです：

1. 前のトリアージ担当者は、週の終わりに週次メタ Issue を作成して自分にアサインしておくべきです。Issue タイトルは`Issue triage rotation week of <starting date>`です。
1. `awaiting feedback`ラベルが追加されてから14日間応答がなかった場合に Issue をクローズするポリシーに従います。`awaiting feedback`ラベルのある Issue リストを確認し、["for issues with no reply"レスポンス](#for-issues-with-no-reply)でクローズします。
1. トリアージする Issue を確認し、[適切なラベル](#label-glossary)を割り当てます。Issue の根本を究明するために多少の調査が必要な場合があるのは通常のことですが、Issue トリアージはアイテムを識別して分類することを目的としており、Issue の解決ではないことを念頭に置いてください。
1. Issue が記録されたプロジェクトのドメインに直接関係しない場合（例：gitlab-railsアプリケーションへの変更が必要だが、omnibus-gitlabプロジェクトに登録されている場合）、Issue を適切な Issue トラッカーに移動し、最も適切なチームラベルを追加します。どのプロジェクトのトラッカーに置くべきか、またはどのチームのラベルを適用すべきか判断できない場合は、コメントで`@gitlab-org/issue-triage`をメンションしてQualityチームに助けを求めることができます。
1. Issue がコードベースや作業フローに関するものではなく、GitLab インスタンスのインストール/設定/トラブルシューティングのサポートリクエストである場合は、["problems not related to package installation and configuration"レスポンス](#for-problems-not-related-to-the-gitlab-codebases)を使用して Issue をクローズします。
1. Issue のトリアージを成功させるための必要情報がすべて揃っていない場合は、["issues that lack enough information"レスポンス](#for-issues-that-lack-enough-information)を使用して情報を求め、`awaiting feedback`ラベルを追加します。
1. 妥当な時間内に Issue をトリアージできなかった場合は、`needs investigation`ラベルを追加します。
1. Issue によっては、プロジェクトメンテナーが直接確認するのが最善の場合があります。その場合は`maintainer-discussion`でラベル付けします。例：
   1. Issue は作成時には正確だったが、現時点では疑問がある場合。
   1. Issue は作成時には正確でなかったり、ビジョンに合わなかったが、現在はそうかもしれない場合。
   1. Issue の実現可能性に興味があるが、提案どおりに実現可能でない場合。
1. 有効な Issue と特定された場合は、`For Scheduling`ラベルを割り当てて部分的にトリアージし、次のマイルストーン（または`Backlog`マイルストーン）のスケジュールに入れます。また、重大度ラベルを適用します。
1. 適切な場合は`Seeking community contributions`ラベルを使用してコミュニティを参加させるようにします。コミュニティへのコントリビューションの良い候補となる Issue は、低い重大度と優先度、または有効な回避策があるものです。`workflow::ready for development`状態である必要があります。必要な変更がシンプルでわかりやすい場合は`quick win`ラベルを使用します。[Omnibusの例](https://gitlab.com/gitlab-org/omnibus-gitlab/-/issues/?label_name%5B%5D=Seeking%20community%20contributions)を参照してください。
1. Issue が有効で有効な回避策がある場合は、回避策の詳細と共に Issue をクローズし、バグを修正するためのフォローアップ Issue を作成します。Issue に含める内容：
   1. バグを再現する手順の詳細
   1. Issue の回避方法
   1. 期待される動作
   1. 関連する Issue としてのユーザー Issue
   1. 適切な優先度と重大度
1. Issue が部分的にまたは完全にトリアージされたら、その Issue へのリンクをメタ Issue へのコメントとして追加します。`<action> <url>`の形式が望ましく、`<action>`はmoved、closed、triaged、resolved、marked as needs investigationのいずれかです。これにより週ごとにトリアージされた Issue を追跡しやすくなります。GitLab のRelated issues機能は Issue 間の不正確な関連付けが生成されるため、この目的に使用しないでください。
1. Issue のトリアージに費やした時間を追跡するために、GitLab の`/spend`クイックアクション機能を使用します。厳しい制限はありませんが、1週間に3〜5時間が妥当です。
1. どのソフトウェアプロジェクトでも Issue が積み上がるのはほぼ避けられないため、できるだけ Issue 数を減らすようにします。これには主に既存のトリアージされていない Issue のバックログへの対応が含まれます。
1. 次の週次ミーティングで、トリアージ週について報告します。メタ Issue へのリンク、トリアージした Issue 数、費やした時間を共有します。また、プロセスについて変更すべきことがあると思う場合は議論します。次の発表者のために、翌週のミーティングドキュメントのアジェンダアイテムとして同様のヘッダーを作成します。

#### レスポンステンプレート

Issue に適宜コピーペーストしてください。

##### GitLab コードベースに関連しない問題の場合

プロジェクト内でサポートを求めている場合は、正しい場所に案内します。

```text
We are sorry you are having troubles. The provided issue description seems to indicate that the problem is not related to this project. Commonly this indicates other troubles such as network connectivity or filesystem permissions.

For this reason, I will close this issue and recommend checking out [how to get further help](https://about.gitlab.com/get-help/) on the GitLab website.

/close
```

##### GitLab コードには関連するがOmnibus以外の問題の場合

バグがOmnibus以外の GitLab コードに関連している場合

```text
We are sorry you are having troubles. The provided issue description seems to indicate that the problem is not related to Omnibus.

For this reason, we are moving this report to a more appropriate issue queue.  Please review the bug templates for the new project in case they require additional information to help diagnose the problem.

We also recommend checking out [how to get further help](https://about.gitlab.com/get-help/) on the GitLab website.
```

##### 情報が不足している Issue の場合

十分な情報なしにチケットが作成された場合は、`Bug`テンプレートを使用して記入するよう促します。

```text
We can't reproduce the issue with the information you provided here.

Can you please use our `Bug` template to help gather more details?

1. Click on the pencil icon near the issue title to edit the description
1. From the **Choose a template** drop down, select the **Bug** template
1. Read the template, and provide as much information as you can that we ask for
1. Click on the **Save changes** button to apply your changes.
1. Add a comment mentioning you updated the description.

/label ~"awaiting feedback"
```

##### 返信がない Issue の場合

Issue に`awaiting feedback`ラベルが付いて2週間経過しても応答がない場合はクローズできます。

```text
We haven't heard back from you, so we're going to go ahead and close the issue.

If you're still experiencing the problem, please re-open the issue and provide the requested information.

/close
```

#### 返信なしでクローズされた Issue に別のレポーターからの新しいコメントがある場合

Issue が返信なしでクローズされ、元のレポーターでない人がコメントした場合は、新しい Issue を作成するよう求めます。コメントしたコントリビューターをタグ付けしてください。

```text
Thank you for letting us know about your issue COMMENTOR. Unfortunately, this issue was already closed. Please [open a new issue](https://gitlab.com/gitlab-org/omnibus-gitlab/issues/new?issue) following the ***BUG*** template and mark this closed issue as related.
```

#### メンテナーが現在の実現可能性を確認すべき Issue の場合

Issue がプロジェクトメンテナーによる直接のレビューが必要に見える場合

```text
I'm going to ask that this issue be reviewed by the project maintainers directly.
This is so that we can make the most accurate decision regarding further work and viability.
/label ~maintainer-discussion
```

### Triageへのオンボーディング

Distributionチームの新メンバーをTriage担当にオンボーディングするのは3ヶ月後から検討します。チームプロセスに十分慣れていると感じているメンバーは、これより早く開始することもできます。

Triageにオンボーディングするために、チームメンバーは1週間、経験豊富なTriageチームメンバーのシャドウを行います。期待されることは以下のとおりです：

* メンターとシャドウは、トリアージ週の前に認識し合い、メンタリングに同意している。
* シャドウはトリアージプロセスドキュメントを事前に読んでいる。
* メンターとシャドウはトリアージ週の早い段階で同期コールを行い、メンターがトリアージへのアプローチ方法を説明する。
* シャドウは週中に非同期でいくつかの Issue のトリアージを試みる。
* メンターとシャドウが一緒にいくつかの Issue をトリアージするためのフォローアップ同期コールが週の後半にスケジュールされる。

シャドウは、ソロトリアージ週に自信が持てるようになるまでに複数週間のシャドウが必要な場合があります。

## パイプラインのトリアージ

パイプラインの障害はチーム全員の共有責任であり、利用可能なメンバーができるだけ早く対処する必要があります。とはいえ、トリアージ担当のチームメンバーは発生した障害をフォローアップし、Triageノートに集計サマリーを提供する責任があります。

クリティカルなパイプラインが失敗するたびに自動的に Issue を作成するプロセスを自動化中です。一部のパイプライン障害は`#g_distribution` Slack チャンネルに通知されますが、まだ Issue が自動的に作成されていないものもあります。進行中の作業を追跡するには[このepic](https://gitlab.com/groups/gitlab-org/distribution/-/epics/14)を参照してください。

### パイプライン障害トリアージの推奨ワークフロー

1. オプションとして、Slack メッセージで最初の考えを共有するか、アクションプランを示すコメントを残します。
1. Issue が自動的に作成されたかどうかを確認します。されていない場合は作成してください。
1. 問題を解決するために貢献するすべての人が単一の情報源として Issue を使用できるよう、Issue へのリンクを Slack の最初のメッセージに含めます。
1. Issue の調査を開始したら、`pipeline failure::under investigation`ラベルを追加します。
1. Issue に次の形式でコメントします：`@gitlab-bot retry_job <job-id>`。これにより、プロジェクトのメンテナー権限を必要とせずに、[triage-ops bot](https://gitlab.com/gitlab-org/quality/triage-ops)が指定されたジョブをリトライします。
1. 必要に応じてリトライコマンドを繰り返します。これにより失敗したジョブが通過する場合は Issue をクローズします。そうでない場合は、根本原因を手動で修正してリトライするか、根本原因を追跡する新しい関連 Issue を作成します。
1. 問題を緩和してパイプラインを通過させることができたが、Issue が将来再び発生する可能性がある場合は：
   * 緩和するために取った対応を説明するコメントを書きます。
   * 問題の根本的な修正を調査/実装するためのフォローアップ Issue が既に存在するかどうかを確認し、このパイプライン Issue 障害にリンクします。そのようなフォローアップ Issue が存在しない場合は、作成してリンクします。
   * すでに停止していたリリースを再起動する必要があった場合は、パイプラインを修正した後、`@gitlab-bot retry_job <job-id of stop-review-*>`を使用して手動で環境を停止します。そのジョブは自動的に再トリガーされないため、宙吊りのリリースがELBsのクォータ枯渇を引き起こす可能性があります。[chart Issue #5326](https://gitlab.com/gitlab-org/charts/gitlab/-/issues/5326)を参照してください。
1. まだ壊れた状態のパイプラインを修正するためのフォローアップ Issue を必要とする障害も、チームの認識を高めるために記録する必要があります。それらの Issue には`Broken Pipeline`ラベルを付けます。
1. アップストリームの障害によって引き起こされた障害は[`Upstream bug`](https://gitlab.com/groups/gitlab-org/-/labels?search=upstream+bug)でラベル付けし、関連するアップストリーム Issue にリンクします。
1. Issue をクローズする前に、マイルストーンを設定し、`pipeline failure::under investigation`が追加されていることを確認します。これはメトリクスの目的のために重要です。

Distributionの各プロジェクトで実装されたパイプラインとジョブの詳細は以下のとおりです：

1. [`omnibus-gitlab`](https://docs.gitlab.com/omnibus/development/pipelines.html)
