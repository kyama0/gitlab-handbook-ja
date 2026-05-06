---
title: Secret Detection グループ
description: "Secret Detection グループは、GitLab 上での認証情報、トークン、その他のシークレットの漏洩からお客様を保護します。"
upstream_path: /handbook/engineering/development/sec/secure/secret-detection/
upstream_sha: eb9c7122b4259a2111ed65628e5384768922a597
translated_at: "2026-05-06T13:30:00Z"
translator: claude
stale: false
---

## Secret Detection

Secret Detection グループは、顧客のソフトウェアリポジトリ向けに [Secret Detection](https://about.gitlab.com/direction/application_security_testing/secret-detection/secret-detection/) フィーチャーカテゴリをメンテナンスしています。

### 共通リンク

* メイン Slack チャンネル: [`#g_ast-secret-detection`](https://gitlab.enterprise.slack.com/archives/C06NY8LDMT2)
* スタンドアップ更新: [`#g_ast-secret-detection-standup`](https://gitlab.enterprise.slack.com/archives/C06PZ8QJQNA)
* Slack エイリアス: `@g_ast_secret_detection`

#### Secret Detection 共有カレンダー

[Secret Detection 共有カレンダー](https://calendar.google.com/calendar/embed?src=c_b4fda90478cfc15d4ec5fa18952c0c976d3078df887cc3548f8d6592d22de032%40group.calendar.google.com) は、PTO イベントをチームの全員が確認できるようにするために使用されます。

以下は、Time Off by Deel にカレンダーを追加する手順です。

* Slack で **Time Off by Deel** > **Home** に移動し、ドロップダウン **Your Events** をクリックして **Calendar Sync** を選択します。
* **Additional calendars to include?** の下にある **Add calendar** をクリックします。
* 以下のカレンダー ID を追加します: `c_b4fda90478cfc15d4ec5fa18952c0c976d3078df887cc3548f8d6592d22de032@group.calendar.google.com`
* 完了です！ これで PTO イベントが Static Analysis 共有カレンダーに同期されます。

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
| ~Category:Secret Detection | Issue または MR が Secret Detection フィーチャーカテゴリの一部であることを識別します。 |
| ~backend | Issue または MR が GitLab のバックエンドの一部であることを識別します。 |
| ~frontend | Issue または MR が GitLab のフロントエンドの一部であることを識別します。 |

#### リファインメント

私たちは最近、[Secret Push Protection Beta エピック](https://gitlab.com/groups/gitlab-org/-/epics/12729)の Issue をリファインメントする際に[新しいリファインメントプロセス](/handbook/engineering/development/sec/secure/planning/#refinement)を試験的に実施しました。このプロセスは他のセクション/ステージから多くのインスピレーションを得ていますが、現在の [Secure エンジニアリングリファインメント](/handbook/engineering/development/sec/secure/planning)とも一致しています。

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

リファインメントプロセスは、Issue がどのように選ばれてリファインメントされるかについては関与しません。これは、バックログから Issue をトリアージする以前のプロセス（[MoSCoW プロセス](/handbook/engineering/development/sec/secure/static-analysis/#moscow-process)または類似のバリアント経由）で行われることが前提とされています。通常、Issue がリファインメントされる前に、今後のマイルストーンでどの Issue がリファインメントされ提供されるかを選択するための計画 Issue が作成されます。これは計画 Issue の Looking Forward セクションで行われる可能性があります。

このワークフローは次のように要約できます。

1. トリアージ: バックログから Issue をトリアージして、必須/すべき/できれば/可能ならの優先順位を決定する。
2. 計画/優先順位付け: 特定のマイルストーンのために Issue を選択する。
3. リファインメント: Issue をリファインメントして選択できる状態に準備する。

##### ステップ

以下は、リファインメントプロセス中に従うステップのリストです。

* リファインメントプロセスは、計画 Issue が確定したときに開始されます。
* ボットまたは自動スクリプトが、各エンジニアに一定数の Issue（例: 2〜3件）をランダムに割り当てます。
* エンジニアは割り当てられた Issue のリファインメントを担当しますが、必要に応じて助けを求めることができます。
* エンジニアは特定の[チェックリスト](#checklist)に従って、Issue がリファインメントされ選択できる状態かどうかを判断します。
* リファインメントプロセスはタイムボックス化されており（例: 1週間）、その後、開発準備が完了したすべての Issue が選択されます。
* エンジニアが Issue のリファインメントを完了したら、別のエンジニア（レビュアー）に渡してレビューします。
* レビュアーはチェックリストに記載されたガイドラインに可能な限り従う必要があります。
  * レビュアーがエンジニアに同意する場合、Issue は開発準備完了としてマークされます。
  * 意見が一致しない場合は、理由を話し合い、前進する方法を見つける必要があります。
  * 意見の不一致が解決できない場合は、Issue を次のチームミーティングに持ち込んで議論します。
* 保留中の Issue は引き続きリファインメントされ、その状態に応じてマイルストーンに含まれる場合と含まれない場合があります。

##### チェックリスト {#checklist}

以下のチェックリストは、リファインメントされている Issue の説明またはコメントにコピーして使用します。これは、すべての関係者に対してリファインメントとリファインメントレビューの進捗を明確にするために使用されます。

```markdown
**以下のリストをリファインメントしている Issue にコピーし、適切と判断したものにチェックを入れてください。**

#### リファインメント進捗

チェックボックスが Issue に関連しない場合は、削除するか取り消し線を引いてください。

- [ ] この Issue は解決すべき問題またはタスクを説明しており、確認済みです。
- [ ] この Issue は問題を解決またはタスクを完了する方法を示した提案または実装計画を説明しています。
- [ ] この Issue は他のグループからの支援またはサポートを必要とし、Issue の説明にその旨が示されています。
- [ ] この Issue はアプリケーションのセキュリティやパフォーマンスに影響を与える可能性があり、その懸念が Issue の説明に説明されています。
- [ ] この Issue は可能な限り最小のイテレーションであり、さらなる分解は必要ありません。
- [ ] この Issue にはウェイトが設定されており - [この可能な値のリスト](/handbook/engineering/development/sec/secure/workflow/#possible-values)に従って - ~"needs weight" ラベルが削除されています。
- [ ] この Issue には成功基準が定義されており、Issue の説明に記述されています。
- [ ] この Issue のラベルは正しいです。
- [ ] この Issue は、提案/実装計画とウェイトを確認するために別のチームメンバーによってレビューされています。
- [ ] 最後に、~"workflow::ready for development" ラベルをこの Issue に追加して、自分の担当を外してください。

#### リファインメントレビューガイドライン

このリファインメントをレビューするためにこの Issue が割り当てられた場合は、以下のガイドラインに従ってください。

1. Issue に記述された提案または実装計画を検証してください。
1. [この可能な値のリスト](/handbook/engineering/development/sec/secure/workflow/#possible-values)に従って Issue のウェイトを検証してください。
1. 意見が一致しない場合は、あなたの考え/理由を述べ、この Issue をリファインメントしているエンジニアに通知してください。
1. 意見の不一致が解決できない場合は、この Issue を次のチームミーティングに持ち込んで議論してください。

##### Issue の割り当て

Issue は [`triage-ops`](https://gitlab.com/gitlab-org/quality/triage-ops) ボットを使用してエンジニアにランダムに割り当てられます。プロセスは以下のように機能します。

1. 計画 Issue が作成され、次のマイルストーンのために一定数の Issue が選択されます（以下に定義されたラベルでマークされます）。
1. 選択された Issue には以下のラベルが付けられます。
    1. `~"group::secret detection"`
    1. `~"workflow::planning breakdown"`
1. [スケジュールされたポリシー](https://gitlab.com/gitlab-org/quality/triage-ops/-/blob/master/doc/scheduled/index.md)が、次のマイルストーンが始まる前に毎月トリガーされます（月の第2木曜日、または新しいマイルストーンが始まるちょうど1週間前）。
1. スケジュールされた操作が実行され、以下を行います。
    1. 以下の条件で Issue を選択します。
        1. 状態: `Opened`
        1. ラベル:
            1. `~"group::secret detection"`
            1. `~"workflow::planning breakdown"`
        1. ウェイト:
            1. `None`
        1. マイルストーン:
            1. Issue にマイルストーンがある。
            1. Issue のマイルストーンタイトル = [`next_milestone`](https://gitlab.com/gitlab-org/quality/triage-ops/-/blob/de25e11d0c006551eaece0dcb95c5b5bf8216b90/lib/milestone_helper.rb#L13-15)。
    1. アクション:
        1. Secure:Secret Detection グループのランダムなエンジニアに Issue を割り当てます。
        1. 以下のラベルを追加します。
            1. `~"workflow::refinement"`
            1. `~"needs weight"`
        1. 以下のラベルを削除します。
            1. `~"workflow::planning breakdown"`
        1. 以下のコメントを追加します。

##### コメント

```markdown
Hi #{secret_detection_engineer}

次のマイルストーン #{milestone.succ} の準備として、あなたはこの Issue をリファインメントするために割り当てられました。

プロセスの目標は次のとおりです。

- 未解決の質問や懸念を明確にする。
- 提案または実装計画を追加する。
- Issue が可能な限り最小のイテレーションであるかを判断し、必要であれば分解する。
- Issue が他のチームのサポートを必要とするかを判断する。
- Issue にウェイトを割り当てる。
- Issue のラベルが正しいことを確認する。
- Issue が作業可能な状態としてマークされていることを確認する。

リファインメントの進捗を透明に保つために使用する[従うべきステップ](/handbook/engineering/development/sec/secure/secret-detection/#steps)と[チェックリスト](/handbook/engineering/development/sec/secure/secret-detection/#checklist)を確認してください。

ご質問がある場合は、`#g_secure_secret-detection` チャンネルでお気軽にお尋ねください。

[ボットポリシー](https://gitlab.com/gitlab-org/quality/triage-ops/-/blob/master/policies/groups/gitlab-org/secret-detection/assign-refinement.yml)

/assign #{secret_detection_engineer}
```

### 計画外の作業

一般的に、Secret Detection グループには2つの計画外作業の源があります。コミュニティコントリビューションと ~severity::1 のバグです。両方のシナリオに迅速かつ効率的に対応できるよう、各リリースで一定のキャパシティを確保します。どちらのシナリオでも、コミュニティコントリビューションはアナライザーを「所有」しているエンジニアにルーティングします。

ただし、私たちは GitLab のプロダクトの一部として提供されるアナライザーを超えたプロジェクトを所有・貢献しています。可能な限り、Secret Detection のエンジニアの注意を必要とする計画外の作業は、そのプロジェクトの `CODEOWNERS` ファイルに従ってルーティングされます。そうでない場合は、計画外の作業はケースバイケースで検討・処理されます。

#### 顧客と見込み顧客へのサポート

私たちは月次ベースで作業を計画していますが、顧客や顧客対応チームメンバーは計画外のサポートを必要とする場合があります。これらのリクエストは顧客と私たちのビジネスの成功に影響するため、迅速にサポートすることを目指しています。

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

Secret Detection（SD）アナライザーは、Secret Detection スキャンを実行する際に [GitLab 管理のルールセット](https://gitlab.com/gitlab-org/security-products/secret-detection/secret-detection-rules)を使用します。アナライザーのルールカバレッジを拡大するために、私たちは[脆弱性リサーチ](../vulnerability-research/_index.md)チームのメンバーと協力して、さまざまなベンダー（企業）のシークレット資格情報タイプをサポートするルールを開発しています。私たちのアナライザーはすでに 200 以上の一般的な資格情報タイプを[サポート](https://docs.gitlab.com/user/application_security/secret_detection/detected_secrets/)していますが、ルールカバレッジを拡大するためにさらに多くをカバーすることを目指しています。

#### ルールカバレッジの拡大

さまざまな企業にわたって潜在的にサポートできる無数のシークレット資格情報タイプが存在します。顧客の需要に基づいて新しいルールを追加してきましたが、より体系的にルールセットカバレッジを拡大するために、Secret Detection グループの各チームメンバーが定期的に新しいルールを開発・リリースするローテーションプロセスを導入する予定です。

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
