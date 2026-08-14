---
title: Secret Detection グループ
description: "Secret Detection グループは、GitLab 上での認証情報、トークン、その他のシークレットの漏洩からお客様を保護します。"
upstream_path: /handbook/engineering/development/sec/security-factory/secret-detection/
upstream_sha: cd448feba02b00726e216b7b3cfed717822b37b6
translated_at: "2026-08-14T07:45:00+09:00"
translator: codex
stale: false
lastmod: "2026-08-13T15:10:33+03:00"
---

## Secret Detection

Secret Detection グループは、お客様のソフトウェアリポジトリ向けに [Secret Detection](https://about.gitlab.com/direction/application_security_testing/secret-detection/secret-detection/) 機能カテゴリをメンテナンスしています。

### 共通リンク

* メイン Slack チャンネル：[`#g_ast-secret-detection`](https://gitlab.enterprise.slack.com/archives/C06NY8LDMT2)
* スタンドアップ更新：[`#g_ast-secret-detection-standup`](https://gitlab.enterprise.slack.com/archives/C06PZ8QJQNA)
* Slack エイリアス：`@g_ast_secret_detection`

#### Secret Detection 共有カレンダー

[Secret Detection 共有カレンダー](https://calendar.google.com/calendar/embed?src=c_b4fda90478cfc15d4ec5fa18952c0c976d3078df887cc3548f8d6592d22de032%40group.calendar.google.com)は、PTO イベントをチームの全員が確認できるようにするために使用されます。

以下は、Time Off by Deel にカレンダーを追加する手順です。

* Slack で **Time Off by Deel** > **Home** に移動し、ドロップダウン **Your Events** をクリックして **Calendar Sync** を選択します。
* **Additional calendars to include?** の下にある **Add calendar** をクリックします。
* 以下のカレンダー ID を追加します：`c_b4fda90478cfc15d4ec5fa18952c0c976d3078df887cc3548f8d6592d22de032@group.calendar.google.com`
* 完了です！ 🎉 これで PTO イベントが Static Analysis 共有カレンダーに同期されます。🚀

### チームメンバー

{{< team-by-manager-role role="Engineering(.)Manager(.)Secure:Secret Detection" team="Engineer" >}}

## 作業方法

Secret Detection グループは GitLab の[プロダクト開発フロー](/handbook/product-development/how-we-work/product-development-flow/)に概ね沿っていますが、ソフトウェアを提供する方法においていくつかの顕著な違いがあります。エンジニアリングチームは主にソフトウェアの提供に関わっており、最も差異があるのはワークフロー状態のその部分です。以下は、ソフトウェアを提供するためのプロダクトマネジメントからエンジニアリングへの引き渡し方法です。

このチームが扱う Issue は、アナライザー、ベンダーされたテンプレート、および GitLab の Rails モノリスにまたがる場合があります。

### Issue ボード

* [Secret Detection Delivery Board](https://gitlab.com/groups/gitlab-org/-/boards/7430307?milestone_title=Started&label_name[]=group%3A%3Asecret%20detection) - エンジニア向けのプライマリボードで、列はワークフローラベルです。
* [Secret Detection Planning Board](https://gitlab.com/groups/gitlab-org/-/boards/7708245?label_name%5B%5D=group%3A%3Asecret%20detection) - 現在および次のマイルストーンの作業量を把握するためにプロダクトマネジメントが主に使用する、マイルストーン中心のボードです。
* [Secret Detection EM Board](https://gitlab.com/groups/gitlab-org/-/boards/77082627) - エンジニアが抱えている作業量を把握するためにエンジニアリングマネジメントが使用する、エンジニア中心のボードです。
* [Secret Detection Bug Scrub Board](https://gitlab.com/groups/gitlab-org/-/boards/7708271?label_name%5B%5D=group%3A%3Asecret%20detection&label_name%5B%5D=type%3A%3Abug) - バグボードで、列は深刻度です。

#### Issue と MR のラベル

GitLab には Issue と MR のラベリング規則があります。私たちはこの規則に従っていますが、アーティファクトを私たちにルーティングするために必要な特定のラベルがあります。私たちはこれらのラベルを使用して、Issue ボード上で私たち向けの Issue をフィルタリングします。これらはメトリクスおよび KPI レポートにも使用されます。

| ラベル | 意味 |
| ----- | ------- |
| ~section::sec | Issue または MR が Sec セクションのロードマップに属することを識別します。 |
| ~devops::application security testing | Issue または MR が Secure ステージのロードマップに属することを識別します。 |
| ~group::secret detection | Secret Detection グループが Issue または MR に取り組む個人の集まりであることを識別します。 |
| ~Category:Secret Detection | Issue または MR が Secret Detection 機能カテゴリの一部であることを識別します。 |
| ~backend | Issue または MR が GitLab のバックエンドの一部であることを識別します。 |
| ~frontend | Issue または MR が GitLab のフロントエンドの一部であることを識別します。 |

#### リファインメント

私たちは最近、[新しいリファインメントプロセス](/handbook/engineering/development/sec/security-factory/planning/#refinement)を試験的に実施し、[Secret Push Protection Beta エピック](https://gitlab.com/groups/gitlab-org/-/epics/12729)の Issue をリファインメントしました。このプロセスは他のセクション／ステージから多くのインスピレーションを得ていますが、現在の [Secure エンジニアリングリファインメント](/handbook/engineering/development/sec/security-factory/planning)とも一致しています。

当該プロセスの[議論とフィードバック](https://gitlab.com/gitlab-org/secure/general/-/issues/306)のセットに続いて、改善されたリファインメントプロセスをソフトウェア提供ワークフローの一部とすることを決定しました。

プロセスの目標は次のとおりです。

* 未解決の質問や懸念を明確にする。
* 提案または実装計画を追加する。
* Issue が可能な限り最小のイテレーションであるかを判断し、必要であれば分解する。
* Issue が他のチームのサポートを必要とするかを判断する。
* Issue にウェイトを割り当てる。
* Issue のラベルが正しいことを確認する。
* Issue が作業可能な状態としてマークされていることを確認する。

##### ワークフロー

リファインメントプロセスは、Issue がどのように選ばれてリファインメントされるかについては関与しません。これは、バックログから Issue をトリアージする以前のプロセス（[MoSCoW プロセス](/handbook/engineering/development/sec/security-factory/code-scanning/)または類似のバリアント経由）で行われることが前提とされています。通常、Issue がリファインメントされる前に、今後のマイルストーンでどの Issue がリファインメントされ提供されるかを選択するための計画 Issue が作成されます。これは計画 Issue の Looking Forward セクションで行われる可能性があります。

このワークフローは次のように要約できます。

1. トリアージ：バックログから Issue をトリアージして、必須／すべき／できれば／可能ならの優先順位を決定する。
2. 計画／優先順位付け：特定のマイルストーンのために Issue を選択する。
3. リファインメント：Issue をリファインメントして選択できる状態に準備する。

##### ステップ {#steps}

以下は、リファインメントプロセス中に従うステップのリストです。

* リファインメントプロセスは、計画 Issue が確定したときに開始されます。
* ボットまたは自動スクリプトが、各エンジニアに一定数の Issue（例：2 〜 3 件）をランダムに割り当てます。
* エンジニアは割り当てられた Issue のリファインメントを担当しますが、必要に応じて助けを求めることができます。
* エンジニアは特定の[チェックリスト](#checklist)に従って、Issue がリファインメントされ選択できる状態かどうかを判断します。
* リファインメントプロセスはタイムボックス化されており（例：1 週間）、その後、開発準備が完了したすべての Issue が選択されます。
* エンジニアが Issue のリファインメントを完了したら、別のエンジニア（レビュアー）に渡してレビューします。
* レビュアーはチェックリストに記載されたガイドラインに可能な限り従う必要があります。
  * レビュアーがエンジニアに同意する場合、Issue は開発準備完了としてマークされます。
  * 意見が一致しない場合は、理由を話し合い、前進する方法を見つける必要があります。
  * 意見の不一致が解決できない場合は、Issue を次のチームミーティングに持ち込んで議論します。
* 保留中の Issue は引き続きリファインメントされ、その状態に応じてマイルストーンに含まれる場合と含まれない場合があります。

##### チェックリスト {#checklist}

以下のチェックリストは、リファインメントされている Issue の説明またはコメントにコピーして使用します。これは、すべての関係者に対してリファインメントとリファインメントレビューの進捗を明確にするために使用されます。

```markdown
**Please copy the list below into the issue you are refining, and check them as you deem appropriate.**

#### Refinement Progress

If a checkbox is not relevant for the issue, please remove or strikethrough it.

- [ ] This issue describes a problem to solve, or a task to complete, and it's confirmed.
- [ ] This issue describes a proposal or an implementation plan that outlines a way to solve the problem or complete the task.
- [ ] This issue requires assistance or support from other groups, and it's indicated in the issue description.
- [ ] This issue could affect application security or performance, and the concern is explained in the issue description.
- [ ] This issue is the smallest iteration possible and doesn't require further break down.
- [ ] This issue has weight set - according to [this list of possible values](/handbook/engineering/development/sec/secure/workflow/#possible-values) - and ~"needs weight" label is removed.
- [ ] This issue has a success criteria defined, and it is outlined in the issue description.
- [ ] This issue is labeled correctly.
- [ ] This issue is reviewed by another team member to confirm proposal/implementation plan and weight.
- [ ] Finally, add ~"workflow::ready for development" label to this issue and unassign yourself.

#### Refinment Review Guidelines

If you're assigned this issue to review its refinement, please follow the guidelines below.

1. Please validate the proposal or the implementation plan described in the issue.
1. Please validate the weight of the issue according to [this list of possible values](/handbook/engineering/development/sec/secure/workflow/#possible-values).
1. If in disagreement, please state your thoughts/reasoning and notify the engineer refining this issue.
1. If the disagreement can't be resolved, please bring this issue to the next team meeting for discussion.

##### Issue Assignmet

Issues are assigned randomly to engineers using [`triage-ops`](https://gitlab.com/gitlab-org/quality/triage-ops) bot. The process works like follows:

1. Planning issue is created, and a number of issues are selected for the next milestone (marked with labels defined below).
1. Issues selected are labeled with:
    1. `~"group::secret detection"`
    1. `~"workflow::planning breakdown"`
1. A [scheduled policy](https://gitlab.com/gitlab-org/quality/triage-ops/-/blob/master/doc/scheduled/index.md) is triggered monthly before the upcoming milestone begins (on 2nd Thursday of a month, or exactly one week before the new milestone starts).
1. The scheduled operation runs and does the following:
    1. Pick up issues with the following conditions:
        1. State: `Opened`
        1. Labels:
            1. `~"group::secret detection"`
            1. `~"workflow::planning breakdown"`
        1. Weight:
            1. `None`.
        1. Milestone:
            1. Issue has a milestone.
            1. Issue's milestone title = [`next_milestone`](https://gitlab.com/gitlab-org/quality/triage-ops/-/blob/de25e11d0c006551eaece0dcb95c5b5bf8216b90/lib/milestone_helper.rb#L13-15).
    1. Actions:
        1. Assigns the issue to a random engineer from the Secure:Secret Detection group.
        1. Adds the following labels:
            1. `~"worfklow::refinement"`
            1. `~"needs weight"`
        1. Removes the following labels:
            1. `~"worfklow::planning breakdown"`
        1. Adds the comment below.

##### Comment

```markdown
Hi #{secret_detection_engineer}

As a preparation for the upcoming milestone #{milestone.succ}, you have been assigned this issue to refine.

The goal of the process is to:

- Clarify any outstanding questions or concerns.
- Add a proposal or an implementation plan.
- Determine if the issue is the smallest iteration possible, and break it down if not.
- Determine if the issue requires support from other teams.
- Assign a weight to the issue.
- Ensure the issue is labeled correctly.
- Ensure issue is marked as ready to be worked on.

Please check the [steps to follow](/handbook/engineering/development/sec/security-factory/secret-detection/#steps) and the [checklist](/handbook/engineering/development/sec/security-factory/secret-detection/#checklist) to use for keeping refinement progress transparent.

If you have any questions, don't hesitate to ask in `#g_secure_secret-detection` channel.

[Bot policy](https://gitlab.com/gitlab-org/quality/triage-ops/-/blob/master/policies/groups/gitlab-org/secret-detection/assign-refinement.yml).

/assign #{secret_detection_engineer}
```

### 計画外の作業

一般的に、Secret Detection グループには2つの計画外作業の源があります。コミュニティコントリビューションと ~severity::1 のバグです。両方のシナリオに迅速かつ効率的に対応できるよう、各リリースで一定のキャパシティを確保します。どちらのシナリオでも、コミュニティコントリビューションはアナライザーを「所有」しているエンジニアにルーティングします。

ただし、私たちは GitLab のプロダクトの一部として提供されるアナライザーを超えたプロジェクトを所有・貢献しています。可能な限り、Secret Detection のエンジニアの注意を必要とする計画外の作業は、そのプロジェクトの `CODEOWNERS` ファイルに従ってルーティングされます。そうでない場合は、計画外の作業はケースバイケースで検討・処理されます。

#### お客様と見込み客へのサポート

私たちは月次ベースで作業を計画していますが、お客様やお客様対応チームメンバーは計画外のサポートを必要とする場合があります。これらのリクエストはお客様と私たちのビジネスの成功に影響するため、迅速にサポートすることを目指しています。

一般的に、できるだけ迅速に初期応答と質問/レポートのトリアージを提供することを目指しています。「できるだけ迅速」とは、例えばチームメンバーが通常の業務時間中に回答し、通常の作業活動を続けることを意味します。質問者と最初に連絡を取り、明確化のための質問をすることができる人は誰でも積極的に対応することが奨励されます。後で質問を解決できない場合は、常に別のグループメンバーをタグ付けできます。

トリアージの目的は、他のチームメンバーが前進できるようにサポートすることです。問題に対処するために開発作業が必要な場合、それは自動的にグループの最優先事項ではなく、既存の計画作業を自動的に置き換えるべきではありません。バグ修正または改善をすぐに取り組むべきかどうかについて疑問がある場合は、エンジニアリングマネジャーとプロダクトマネジャーに通知して決定を容易にすべきです。

### オブザーバビリティ

GitLab.com については、Rails アプリケーション内のコードのパフォーマンス、CI ビルドパフォーマンスに関するメトリクス、コンテナレジストリへのトラフィックを監視しています。これらのダッシュボードは[モニタリング](/handbook/engineering/monitoring)ページからアクセスできます。

* [Secure::Secret Detection グループ エラーバジェット](https://dashboards.gitlab.net/d/stage-groups-detail-secret_detection/)

#### メトリクス

プロジェクトにメトリクスを追加するプロセスは、[メトリクス](metrics/)ページに記載されています。

#### ランブック

インシデントの監視、対応、および軽減のプロセスは、[Secret Detection ランブック](runbooks/)ページ内に記載されています。

### ルール開発

Secret Detection（SD）アナライザーは、Secret Detection スキャンを実行する際に [GitLab 管理のルールセット](https://gitlab.com/gitlab-org/security-products/secret-detection/secret-detection-rules)を使用します。アナライザーのルールカバレッジを拡大するために、私たちは [Threat Research](../threat-research/_index.md) チームのメンバーと協力して、さまざまなベンダー（企業）のシークレット資格情報タイプをサポートするルールを開発しています。私たちのアナライザーはすでに 200 以上の一般的な資格情報タイプを[サポート](https://docs.gitlab.com/user/application_security/secret_detection/detected_secrets/)していますが、ルールカバレッジを拡大するためにさらに多くをカバーすることを目指しています。

#### ルールカバレッジの拡大

さまざまな企業にわたって潜在的にサポートできる無数のシークレット資格情報タイプが存在します。お客様の需要に基づいて新しいルールを追加してきましたが、より体系的にルールセットカバレッジを拡大するために、Secret Detection グループの各チームメンバーが定期的に新しいルールを開発・リリースするローテーションプロセスを導入する予定です。

#### リリースプロセス

* 私たちは固定のスケジュールではなく、開発マイルストーンに基づいてルールをリリースします。ルールはマイルストーンが完了したとき、またはタスクが完了したとき、どちらか先に起きたタイミングでバンドルされてリリースされます。

* ルールのリリースは、リリース準備が完了したすべての新しいルールを含む[専用の MR](https://gitlab.com/gitlab-org/security-products/secret-detection/secret-detection-rules/-/merge_requests) を通じて行われます。

### Secret Detection CVE 調査・解決プロセス

#### 週次 CVE レビュー

週次ベースで、報告された CVE を確認して深刻度、適用可能性、および解決状況を調査します。

#### CVE ダッシュボードへのアクセス

* Secret Detection がメンテナンスするプロジェクトの脆弱性レポートを確認して、新規・既存の CVE を特定します。
* 深刻度（Critical → High → Medium → Low）でフィルタリングし、CVE トラッキング Issue に自分を割り当てます。

#### 調査プロセス

* CVE が Secret Detection の依存関係またはコードベースに影響するかどうかを確認します。
* 悪用可能性と影響範囲を決定します。
* [Red Hat サイト](https://access.redhat.com/security/security-updates/cve)で CVE を確認して修正が利用可能かどうかを判断します。

#### 解決アクション

* 該当する場合は、依存関係を更新するかパッチを適用するためのマージリクエストを作成します。
* 該当しない場合は、その理由（例: 以前の依存関係更新で修正済み）を文書化し、解決済みとしてマークします。

#### クローズ

* パッチ後に CVE が脆弱性レポートに表示されなくなったことを確認します。
* 解決策のサマリーを付けてトラッキング Issue をクローズします。

#### 追加メモ

* 脆弱性レポートを確認する際は、すべての脆弱性が見えるようにフィルターを適用していないことを確認してください。
* GitLab Duo を使用して脆弱なパッケージの場所をトリアージ・特定します。
* 自動化によって以前に解決された Issue が再オープンされる場合があります。常に現在の依存関係バージョンを CVE の修正バージョンと照合し、CVE が脆弱性レポートにまだ存在することを確認してください。
  * CVE が存在せず、脆弱性が古いイメージに関連している場合は、その理由を説明するコメントを付けて Issue をクローズできます。
