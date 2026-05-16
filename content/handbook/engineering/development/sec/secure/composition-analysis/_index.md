---
title: Application Security Testing, Composition Analysis
description: "GitLab の Composition Analysis グループは、コンテナスキャン、依存関係スキャン、ライセンスコンプライアンスを行うソリューションの開発を担当しています。"
upstream_path: /handbook/engineering/development/sec/secure/composition-analysis/
upstream_sha: 3480299851f7e2243d4f08b75dac452f89929636
translated_at: "2026-04-28T05:48:28Z"
translator: claude
stale: false
lastmod: "2026-03-11T08:59:29-04:00"
---

## Composition Analysis

GitLab の Composition Analysis グループは、[Container Scanning](https://about.gitlab.com/direction/application_security_testing/composition-analysis/container-scanning/) と
[Software Composition Analysis](https://about.gitlab.com/direction/application_security_testing/composition-analysis/software-composition-analysis/) を行うソリューションの開発を担当しています。
グループが管理する[プロジェクトの完全なリスト](#projects)を参照してください。

## 共通リンク

- Slack チャンネル: [#g_ast-composition-analysis](https://gitlab.slack.com/archives/CKWHYU7U2)
- Slack エイリアス: @secure_composition_analysis_dev
- Google グループ: <composition-analysis-dev@gitlab.com>

## 働き方

### ワークフロー

Composition Analysis グループは主に GitLab の[エンジニアリングワークフロー](/handbook/engineering/workflow/)と[プロダクト開発フロー](/handbook/product-development/how-we-work/product-development-flow/)に従っています。

これには以下が含まれます:

- [Issue トリアージ](/handbook/product-development/how-we-work/issue-triage/)
- [Infradev トリアージ](#triaging-vulnerabilities)
- [より広いコミュニティのマージリクエストトリアージ](/handbook/engineering/infrastructure-platforms/developer-experience/merge-request-triage/)
- [レトロスペクティブ](/handbook/engineering/careers/management/group-retrospectives/)

#### ステータスの表示とリスクの提起

Issue の進捗を伝えるために [Issue のヘルスステータス機能](https://docs.gitlab.com/ee/user/project/issues/managing_issues.html#health-status)を活用しています。

すべての Issue はマイルストーンの開始時に `On Track` としてマークされるべきです。これはエピック DRI、または未割り当てのスタンドアロン Issue の場合はエンジニアリングマネージャーが行います。

早期のリスク提起が重要です。時間があればあるほど、選択肢も多くなります。そのため、チームは毎週 Issue をレビューし、チームの優先事項に基づいて適切に修正し、リソースを再割り当てできるよう `Need Attention` または `At Risk` の項目を議論します。

リスクを上げたり下げたりする際はこれらの手順に従ってください:

1. Issue のヘルスステータスを更新します:
    1. `On Track` - 予定されたマイルストーン内に作業が完了する見込み。
    1. `Needs Attention` - Issue がブロックされているか、議論が必要な他の要因がある。
    1. `At Risk` - 予定されたマイルストーン内での納品締め切りを逃すリスクがある。
1. リスクが増加または減少した理由についてコメントを追加します。
1. エンジニアリングマネージャーとプロダクトマネージャーをコメントでコピーします。

### 休暇カレンダー

チームメンバーがいつ休暇を取るかを確認するために共有カレンダーを使用しています: `c_629844cc273be17e067767febe12547bc40e129f26f0f17339030bff708cd0d5@group.calendar.google.com`。

このカレンダーへのアクセスは Google グループ `sec-secure-composition-analysis@gitlab.com` を通じて付与されます。

休暇を共有するには:

1. Slack で `Apps` メニューの下にある `Time Off by Deel` アプリケーションを見つけます。
1. `Home` で `Your Events` をクリックしてドロップダウンを表示します。
1. Settings の区切りの下にある `Calendar Sync` をクリックします。
1. `Additional calendars to include?` の下にある `Add calendar` をクリックします。上記のカレンダー ID を使用します。

カレンダーを表示するには:

1. Google カレンダーで、左サイドバーの `Other calendars` セクションを見つけます。
2. :heavy_plus_sign: アイコンをクリックして `Subscribe to calendar` を選択します。上記のカレンダー ID を使用します。

### リアクションローテーション

開発ロードマップに加えて、エンジニアリングチームはセキュリティ脆弱性、サポート、メンテナンス、コミュニティコントリビューションに関連するタスクを実行する必要があります。

過度なコンテキストスイッチングを避け、ワークロードをより均等に分散するために、チームはマイルストーン計画の一部としてこれらのタスクのための容量を確保しています:

- **プライマリエンジニア**: 以下のタスクに完全に割り当てられます。セキュリティ、サポート、メンテナンスの順で、他のすべての作業よりこれらのタスクを優先する必要があります。
- **セカンダリエンジニア**: プライマリエンジニアが予定外の欠席や容量超過の場合のバックアップとして機能します。プライマリエンジニアからのリクエストを優先する必要がありますが、それ以外は `type::maintenance` Issue に集中します。

どちらのエンジニアも機能や重要な成果物の作業に割り当てるべきではありません。[クロスファンクショナルマイルストーン計画](/handbook/product/product-processes/cross-functional-prioritization/#cross-functional-milestone-planning)のコンテキストでは、その割り当てはバグとメンテナンスの比率にカウントされます。

[ローテーションスケジュール](https://gitlab.com/groups/gitlab-org/secure/-/epics/2#schedule)は、GitLab [プロダクトマイルストーン](/handbook/product/product-processes/#understanding-milestones-and-releases)の開始/終了日を使用した開発サイクルに従います。スケジュール作成時、エンジニアリングマネージャーはエンジニアが連続してローテーションを行う回数を最小限に抑えるよう努めるべきです。

ローテーション中に行っているアクションを追跡し、対応する Issue にメモを追加してください（例: ローカルで実行したツールコマンドのコピー、プロジェクトとプロセスへの関連する変更の共有など）。
この目的のために [Reaction Rotation Issue テンプレート](https://gitlab.com/gitlab-org/secure/general/-/blob/master/.gitlab/issue_templates/Reaction%20Rotation%20SCA.md?ref_type=heads)を使用できます。

ローテーション終了時に、[`@gitlab-org/secure/composition-analysis-dev/reaction-rotation`](https://gitlab.com/groups/gitlab-org/secure/composition-analysis-dev/reaction-rotation/-/group_members?with_inherited_permissions=exclude) の Owner として次のエンジニアを追加し、現在のエンジニアを削除します。このグループはスケジュールを調べることなく、ローテーション中のエンジニアにタグ付けするために使用されます。

#### 責務 - セキュリティ

1. 私たちが管理するプロジェクトで報告された脆弱性をトリアージし、優先度に応じた解決を支援します。([セキュリティ脆弱性トリアージプロセス](#security-vulnerabilities-triaging-process)を参照)
1. `SLA::Breached` Issue を確認します。
1. セキュリティ[自動化の失敗](/handbook/engineering/development/sec/secure/#automation-failures)を確認します。
1. 依存関係の新しいセキュリティリリースを確認し、使用を確保します:
   1. アップストリームスキャナー（[アップストリームスキャナーの更新](#updating-an-upstream-scanner)を参照）
   1. コンテナベースイメージ
   1. アプリケーション依存関係
   1. プログラミング言語
1. スケジュールされたセキュリティ Issue をリファインします。
1. 自動化やツールの作成または更新を検討します（セキュリティ、メンテナーシップ、サポートに関連するもの！）

#### 責務 - サポート

1. 質問、サポートリクエスト、アラートについて Slack チャンネルを監視します。他のチームメンバーもこれらのリクエストに応答する場合がありますが、リアクションローテーションに割り当てられたエンジニアが主に処理することが期待されます。
サポートエンジニアが Slack 経由でサポートを求め、調査やデバッグが必要な場合、[Request for Help プロジェクト](https://gitlab.com/gitlab-com/request-for-help#sec-section)で Issue を起票するよう誘導してください。
    - [#g_ast-composition-analysis](https://gitlab.slack.com/archives/CKWHYU7U2)
    - [#s_application-security-testing](https://gitlab.slack.com/archives/C8S0HHM44)
    - [#sec-section](https://gitlab.slack.com/archives/C02087FTL5V)
    - [#s_ast-alerts](https://gitlab.slack.com/archives/CAU9SFKNU)
    - [#f_container_scanning](https://gitlab.slack.com/archives/C041F2XJACB)
    - [#g_ast-composition-analysis-alerts](https://gitlab.slack.com/archives/C04UX9MQNSJ)
    - [#f_operational_container_scanning](https://gitlab.slack.com/archives/C06KGEYGFDZ)
    - [#sec-eng-requests-for-help](https://gitlab.enterprise.slack.com/archives/C071W3BA87J)
1. サポートリクエストについて [Section Sec Request For Help](https://gitlab.com/gitlab-com/sec-sub-department/section-sec-request-for-help/-/issues/?label_name=Help%20group%3A%3Acomposition%20analysis) プロジェクトを監視します。
1. スケジュールされたバグとメンテナンス Issue をリファインします。

これらの項目はマイルストーン全体を通じて継続的にトリアージされる必要があります。つまり、週に複数回確認する必要があります。

#### 責務 - メンテナーシップ

1. コミュニティコントリビューターと連携して[マージリクエスト](https://gitlab.com/groups/gitlab-org/-/merge_requests?scope=all&state=opened&label_name[]=group%3A%3Acomposition%20analysis&label_name[]=Community%20contribution)を完成に向けて進めます（[コミュニティコントリビューショントリアージプロセス](/handbook/engineering/infrastructure-platforms/developer-experience/merge-request-triage/)の詳細情報）。
1. [License Alias Generator](https://gitlab.com/gitlab-org/security-products/license-db/license-alias-generator/-/tree/main?ref_type=heads) ツールを実行して[既知のエイリアス](https://gitlab.com/gitlab-org/security-products/license-db/license-processor/-/blob/main/data/aliases.go?ref_type=heads)のリストを更新します。手順は[こちら](https://gitlab.com/gitlab-org/security-products/license-db/license-alias-generator/-/tree/main?ref_type=heads#workflow)で確認できます。このアクションはマイルストーン中に 1 回実行してください。
1. サポートしている言語やパッケージマネージャーの新しいバージョン、または同じものの廃止/削除のサポートを確認し、エンジニアリングマネージャーとプロダクトマネージャーに Issue で通知します。
1. 依存関係（セキュリティ関連でない）の新しいバージョンを確認します:
    1. アップストリームスキャナー（[アップストリームスキャナーの更新](#updating-an-upstream-scanner)を参照）。
    1. コンテナベースイメージ。
    1. アプリケーション依存関係。
    1. プログラミング言語。
1. テストの失敗を確認します。関連する Slack チャンネルを確認します（[#g_ast-composition-analysis-alerts](https://gitlab.slack.com/archives/C04UX9MQNSJ)、[#s_ast-alerts](https://gitlab.slack.com/archives/CAU9SFKNU)）。
1. リリース失敗について最新のパイプラインを確認します。自動リリースプロセスの実行を妨げる Issue がある場合は、[リリース失敗エスカレーションプロセス](#release-failure-process)を開始します。
1. 自動化やツールの作成または更新を検討します（セキュリティ、メンテナーシップ、サポートに関連するもの！）。
1. license-db プロジェクトの失敗とエラーを監視し、これらの項目に関するコミュニケーションには `#f_licese_database` Slack チャンネルを使用して、他のチームメンバーがサポートを提供できるようにします。
1. license-db インフラでのインシデントについて Slack チャンネル `#g_ast-composition-analysis-alerts` を監視します。
        - インシデントが発生した場合、対応中であることを示すために :eye: でリアクションしてください。
        - 30 分以上経っても解決されない場合は調査してください。
        - インシデントの Slack スレッドに解決のために取られたすべての手順を記録します。
1. Operational Container Scanning（OCS）とコンテナスキャンに関連するアラートについて Slack チャンネル `#f_operational_container_scanning` と `#f_container_scanning` を監視します。

#### 引き継ぎ

1. リアクションローテーションは継続的なプロセスであるため、以下のテンプレートを使用してリアクションローテーション Issue に引き継ぎステータスを投稿してください:

<details>
<summary>リアクションローテーション引き継ぎテンプレート</summary>

### リアクションローテーション引き継ぎテンプレート

```markdown

---

**担当終了エンジニア:** [1 番目のリアクションローテーションエンジニア、2 番目のリアクションローテーションエンジニア]

**担当開始エンジニア:** [1 番目のリアクションローテーションエンジニア、2 番目のリアクションローテーションエンジニア]

---

#### **進行中のタスクと Issue**

1. **セキュリティタスク:**
   - **脆弱性:**
     - [Issue #1234](Issue へのリンク): 脆弱性の説明、現在のステータス、次のステップ。
   - **セキュリティ自動化の失敗:**
     - [Automation Job #9012](ジョブへのリンク): 失敗の説明、実施した初期トラブルシューティング手順、次のステップ。
   - **依存関係の更新:**
     - [Dependency Update #3456](更新へのリンク): 説明、現在のステータス、依存関係更新の次のステップ。

2. **サポートタスク:**
   - **サポートリクエスト:**
     - [Request #7890](リクエストへのリンク): 進行中のサポートリクエストの説明、現在のステータス、リクエスターとのコミュニケーション。
   - **Slack チャンネル監視:**
     - #g_ast-composition-analysis: 最近の議論のサマリー、未解決の質問、保留中のアクション。
     - #s_ast-alerts: 最近のアラートのサマリー、未解決の Issue、保留中のアクション。

3. **メンテナンスタスク:**
   - **コミュニティコントリビューション:**
     - [Merge Request #6789](MR へのリンク): コントリビューションの説明、現在のステータス、次のステップ。
   - **スケジュールされたバグとメンテナンス Issue:**
     - [Issue #3456](Issue へのリンク): Issue の説明、現在のステータス、次のステップ。

#### **追加メモ**

1. **次のエンジニアに関連する追加コンテキストまたはメモ:**
   - 追加メモ。

```

この引き継ぎテンプレートは、担当開始エンジニアがタスク、Issue の現在のステータス、および重要なコンテキストについて完全に把握されることを確保します。スムーズな移行を促進し、重要な責務を見落とすリスクを最小限に抑えます。

</details>

1. [リアクションローテーショングループ](https://gitlab.com/groups/gitlab-org/secure/composition-analysis-dev/reaction-rotation/-/group_members?with_inherited_permissions=exclude)の所有権を新しいエンジニアに割り当てます。

### セキュリティ脆弱性トリアージプロセス {#security-vulnerabilities-triaging-process}

私たちは 2 つのプロジェクトセットで報告された脆弱性のトリアージに責任を持ちます: GitLab が管理するプロジェクトと、依存する可能性があるアップストリームスキャナーソフトウェアです。ただし、状況に応じて異なるプロセスが適用されます。

[Application Security Testing サブ部門の脆弱性管理プロセス](/handbook/engineering/development/sec/secure/#vulnerability-management-process)を参照してください。

#### セキュリティポリシー {#security-policy}

CVSS の深刻度と [SLA](/handbook/security/product-security/vulnerability-management/sla/) によって検出結果に優先順位を付けます。`Critical` と `High` から始めますが、[脆弱性](https://gitlab.com/gitlab-org/gitlab/-/issues/?sort=created_date&state=opened&label_name%5B%5D=type%3A%3Abug&label_name%5B%5D=bug%3A%3Avulnerability&label_name%5B%5D=group%3A%3Acomposition%20analysis&label_name%5B%5D=SLA%3A%3ANear%20Breach&first_page_size=100)に接続されていて `SLA::Near Breach` ラベルが付いている Issue も探してください。これらの脆弱性は CVSS スコアが低い場合がありますが、SLA 違反に達すると「期限超過」のセキュリティ Issue としてカウントされ、FedRAMP コンプライアンスに影響します。

確保した時間をすべて活用してください。Critical と High をすべて完了した場合は、トリアージを続けてください - すべての検出結果に対処したいですが、リスクベースの順序で取り組んでいます。

#### SLA::Near Breach Issue

脆弱性をトリアージする際、将来の SLA 違反を防ぐためにローテーションの一部として [SLA::Near Breach Issue](https://gitlab.com/gitlab-org/gitlab/-/issues/?sort=created_date&state=opened&label_name%5B%5D=type%3A%3Abug&label_name%5B%5D=bug%3A%3Avulnerability&label_name%5B%5D=group%3A%3Acomposition%20analysis&label_name%5B%5D=SLA%3A%3ANear%20Breach&not%5Blabel_name%5D%5B%5D=Vulnerability%3A%3AVendor%20Base%20Container%3A%3AWill%20Not%20Be%20Fixed&not%5Blabel_name%5D%5B%5D=Vulnerability%3A%3AVendor%20Package%3A%3AWill%20Not%20Be%20Fixed&not%5Blabel_name%5D%5B%5D=Vulnerability%3A%3AVendor%20Base%20Container%3A%3AFix%20Unavailable&not%5Blabel_name%5D%5B%5D=Vulnerability%3A%3AVendor%20Package%3A%3AFix%20Unavailable&not%5Blabel_name%5D%5B%5D=FedRAMP%3A%3ADR%20Status%3A%3AOpen&not%5Blabel_name%5D%5B%5D=FedRAMP%3A%3ADR%20Status%3A%3AVuln%20Remediated&first_page_size=20)に注意を払うべきです。

#### SLA::Breached Issue

場合によっては、できるだけ早く対処する必要がある `SLA::Breached` Issue があるかもしれません。Tableau ダッシュボードでそれらの Issue の数を確認できます。`SLA::Breached` Issue は多くの理由で現れる場合があります:

- 優先度が与えられなかったために対処されなかった中程度または低程度の脆弱性。低い脆弱性でも、異なるソースからスコアを得る可能性があるため、`severity::1` Issue につながる場合があることに注意してください。
- 関連する脆弱性が解決または却下されているにもかかわらず、クローズされない Issue。
- 修正できない脆弱性については、トリアージ後に適切な `~"risk treatment::"` ラベルを適用します。これは修正の失敗と修正できないことを区別します。違反した脆弱性には標準の SLA 例外が適用されないため、リスク受け入れのガイダンスについて脆弱性管理チームに連絡してください。

Issue トラッカーで以下のラベルフィルターを使用して `SLA::Breached` Issue を検索できます:

- [Severity 1](https://gitlab.com/gitlab-org/gitlab/-/issues/?sort=created_date&state=opened&label_name%5B%5D=type%3A%3Abug&label_name%5B%5D=bug%3A%3Avulnerability&label_name%5B%5D=SLA%3A%3ABreached&label_name%5B%5D=group%3A%3Acomposition%20analysis&label_name%5B%5D=severity%3A%3A1&not%5Blabel_name%5D%5B%5D=Vulnerability%3A%3AVendor%20Base%20Container%3A%3AWill%20Not%20Be%20Fixed&not%5Blabel_name%5D%5B%5D=Vulnerability%3A%3AVendor%20Package%3A%3AWill%20Not%20Be%20Fixed&not%5Blabel_name%5D%5B%5D=Vulnerability%3A%3AVendor%20Base%20Container%3A%3AFix%20Unavailable&not%5Blabel_name%5D%5B%5D=Vulnerability%3A%3AVendor%20Package%3A%3AFix%20Unavailable&not%5Blabel_name%5D%5B%5D=FedRAMP%3A%3ADR%20Status%3A%3AOpen&not%5Blabel_name%5D%5B%5D=FedRAMP%3A%3ADR%20Status%3A%3AVuln%20Remediated&first_page_size=100)
- [Severity 2](https://gitlab.com/gitlab-org/gitlab/-/issues/?sort=created_date&state=opened&label_name%5B%5D=type%3A%3Abug&label_name%5B%5D=bug%3A%3Avulnerability&label_name%5B%5D=SLA%3A%3ABreached&label_name%5B%5D=group%3A%3Acomposition%20analysis&label_name%5B%5D=severity%3A%3A2&not%5Blabel_name%5D%5B%5D=Vulnerability%3A%3AVendor%20Base%20Container%3A%3AWill%20Not%20Be%20Fixed&not%5Blabel_name%5D%5B%5D=Vulnerability%3A%3AVendor%20Package%3A%3AWill%20Not%20Be%20Fixed&not%5Blabel_name%5D%5B%5D=Vulnerability%3A%3AVendor%20Base%20Container%3A%3AFix%20Unavailable&not%5Blabel_name%5D%5B%5D=Vulnerability%3A%3AVendor%20Package%3A%3AFix%20Unavailable&not%5Blabel_name%5D%5B%5D=FedRAMP%3A%3ADR%20Status%3A%3AOpen&not%5Blabel_name%5D%5B%5D=FedRAMP%3A%3ADR%20Status%3A%3AVuln%20Remediated&first_page_size=100)
- [Severity 3](https://gitlab.com/gitlab-org/gitlab/-/issues/?sort=created_date&state=opened&label_name%5B%5D=type%3A%3Abug&label_name%5B%5D=bug%3A%3Avulnerability&label_name%5B%5D=SLA%3A%3ABreached&label_name%5B%5D=group%3A%3Acomposition%20analysis&label_name%5B%5D=severity%3A%3A3&not%5Blabel_name%5D%5B%5D=Vulnerability%3A%3AVendor%20Base%20Container%3A%3AWill%20Not%20Be%20Fixed&not%5Blabel_name%5D%5B%5D=Vulnerability%3A%3AVendor%20Package%3A%3AWill%20Not%20Be%20Fixed&not%5Blabel_name%5D%5B%5D=Vulnerability%3A%3AVendor%20Base%20Container%3A%3AFix%20Unavailable&not%5Blabel_name%5D%5B%5D=Vulnerability%3A%3AVendor%20Package%3A%3AFix%20Unavailable&not%5Blabel_name%5D%5B%5D=FedRAMP%3A%3ADR%20Status%3A%3AOpen&not%5Blabel_name%5D%5B%5D=FedRAMP%3A%3ADR%20Status%3A%3AVuln%20Remediated&first_page_size=100)
- [Severity 4](https://gitlab.com/gitlab-org/gitlab/-/issues/?sort=created_date&state=opened&label_name%5B%5D=type%3A%3Abug&label_name%5B%5D=bug%3A%3Avulnerability&label_name%5B%5D=SLA%3A%3ABreached&label_name%5B%5D=group%3A%3Acomposition%20analysis&label_name%5B%5D=severity%3A%3A4&not%5Blabel_name%5D%5B%5D=Vulnerability%3A%3AVendor%20Base%20Container%3A%3AWill%20Not%20Be%20Fixed&not%5Blabel_name%5D%5B%5D=Vulnerability%3A%3AVendor%20Package%3A%3AWill%20Not%20Be%20Fixed&not%5Blabel_name%5D%5B%5D=Vulnerability%3A%3AVendor%20Base%20Container%3A%3AFix%20Unavailable&not%5Blabel_name%5D%5B%5D=Vulnerability%3A%3AVendor%20Package%3A%3AFix%20Unavailable&not%5Blabel_name%5D%5B%5D=FedRAMP%3A%3ADR%20Status%3A%3AOpen&not%5Blabel_name%5D%5B%5D=FedRAMP%3A%3ADR%20Status%3A%3AVuln%20Remediated&first_page_size=100)

#### Gemnasium 脆弱性

新しい Dependency Scanner アナライザーは FedRAMP をサポートしているため、Gemnasium は FedRAMP をサポートしなくなりました。したがって、SLA 例外プロセスに従う場合、すべての Gemnasium の脆弱性を `non-FedRAMP findings` として扱ってください。
プロセスの詳細については [SLA 例外ハンドブックページ](/handbook/security/product-security/vulnerability-management/sla-exceptions.md)を参照してください。

#### 脆弱性のトリアージ

[私たちのポリシー](#security-policy)に一致し、関連プロジェクトで報告された項目に集中するためにフィルターを使用した脆弱性レポートを使用します。

1. [Analyzers Vulnerability Report](https://gitlab.com/groups/gitlab-org/security-products/analyzers/-/security/vulnerabilities/?state=DETECTED&severity=CRITICAL,HIGH&projectId=13150952,15369510,24673064,52241202,6126012,9450192&activity=STILL_DETECTED)
    - レポートを手動で設定するには、すべての[共有](#shared)、[コンテナスキャン](#container-scanning)、[依存関係スキャン](#dependency-scanning)プロジェクトを選択し、`Still detected` アクティビティフィルターと `Needs Triage` ステータスを適用します。
1. [License-db Vulnerability Report](https://gitlab.com/groups/gitlab-org/security-products/license-db/-/security/vulnerabilities/?state=DETECTED&severity=CRITICAL,HIGH&projectId=39193358,39229232,39233486,39298809,39622674,40857363,45266022&activity=STILL_DETECTED)
    - レポートを手動で設定するには、すべての [license-db](#license-db) プロジェクトを選択し、`Still detected` アクティビティフィルターと `Needs Triage` ステータスを適用します。

各項目について調査し、[却下](#dismissing-a-vulnerability)または[確認](#confirming-a-vulnerability)します。確かな脅威があるか不明な場合は、[アプリケーションセキュリティチーム](/handbook/security/product-security/security-platforms-architecture/application-security/)に[エスカレート](#creating-security-issues)してください。

> 各ステータスが何を意味するかわからない場合は、[脆弱性ステータス定義](https://docs.gitlab.com/ee/user/application_security/vulnerabilities/#vulnerability-status-values)を参照してください。

#### アップストリームスキャナーの脆弱性

**これは GitLab がメンテナンスしていないプロジェクトにのみ適用されます。**

新しいバージョンにアップグレードする際に、アップストリームスキャナーで検出された脆弱性をレビューします。[アップストリームスキャナーを更新する際のセキュリティチェックセクション](#security-checks-when-updating-an-upstream-scanner)を参照してください。

私たちはアップストリームスキャナーで報告された脆弱性をトリアージする容量が限られています。これらのプロジェクトで報告された脆弱性の継続的なトリアージはベストエフォートで行われます。

##### 脆弱性のトリアージ {#triaging-vulnerabilities}

[私たちのポリシー](#security-policy)に一致し、関連プロジェクトで報告された項目に集中するためにフィルターを使用した脆弱性レポートを使用します。

1. [Upstream Scanners Vulnerability Report](https://gitlab.com/groups/gitlab-org/security-products/dependencies/-/security/vulnerabilities/?state=DETECTED&projectId=30616761,30684590,35335143,39545454,39545481,51420921&severity=CRITICAL,HIGH&activity=STILL_DETECTED)
    - レポートを手動で設定するには、すべての[アップストリームスキャナー](#upstream-scanner-mirrors)プロジェクトを選択します。

アップストリームスキャナーで発見された脆弱性については、GitLab の Issue トラッカーで Issue を作成し、関連するオープンソースコミュニティと連携して解決策を提供する必要があります。最後の手段として、脆弱性を早急に修正するために一時的にローカルでパッチを当てたり、アップストリームプロジェクトをフォークしたりすることができます。

#### 脆弱性の却下 {#dismissing-a-vulnerability}

脆弱性が誤検知であることに疑いがない場合、FedRAMP イメージ（fips）に関連していない限り、「却下」できます。
脆弱性ステータスオプションから「却下」を選択します。
最後に、脆弱性ステータス変更通知にコメントして理由を説明してください。

##### 却下できる低リスクの検出結果

CVSS での深刻度の一般的な設定方法と、自動スキャナーがアプリケーションのすべてのコンテキストを持っていないため、他の環境やシナリオでは高リスクでも、私たちのユーザーには低リスクな検出結果が多くあります。コンテナはユーザープロジェクトからのコードを取り込み、そのユーザーは開発者アクセス権を持っており、コンテナは一時的で特定のパイプラインに関連しています。

他のケースでは、検出結果がアップストリームの依存関係またはオペレーティングシステムに関連しており、修正が利用不可能で、修正の計画もない場合があります。blocked または blocked upstream ラベルを使用してこれらの Issue をマークしてください。

Issue が数リリースの間ブロックされており低リスクの場合、理由についてのメモとともに検出結果を却下することができます。関連する Issue がある場合は、アプリケーションセキュリティチームに特定の理由を通知して Issue をクローズします（該当する場合）。将来的には、これらの検出結果に関連するすべてのものを、クローズされる際に won't fix または blocked としてタグ付けしたいと思いますが、現在は Issue でのみ利用可能で検出結果には適用されません。

以下のクラスのコンテナスキャン脆弱性は低リスクと考えられます:

- 開発者が制御する限られた入力を持つ一時コンテナを使用した私たちのプロセスのため、多くのカーネル関連の検出結果はリスクと深刻度が低下します。
- アナライザーに適用されないソフトウェアスタックに関連する Issue（例: GUI 関連の Issue、Bluetooth ドライバーの Issue、ブラウザが非ヘッドレスモードで実行されている場合に必要なブラウザ関連の Issue など）。
- 修正が利用不可能か、アップストリームがパッチをリリースする計画がないことを示している、複雑な悪用方法または限られたリスクを持つ S3 または S4 の検出結果。
- コンテナ/アナライザーのサービス拒否（これらのコンテナは一時的なパイプラインで実行され、タイムアウトに達すると自動的に停止され、すでに開発者アクセス権を持つユーザーからのコードを受け入れるため、結果的にリスクプロファイルの拡大にはなりません）。
- 乱数生成の Issue（数値がランダムでない場合）。コンテナからセキュリティ目的のために乱数を使用しないため。（これが最後に更新された時点ではこれらは真実でした。アナライザーの知識を使用するか、不明な場合は確認してください。）

  **上記のリストに項目を追加するには、繰り返し発生する検出パターンをアプリケーションセキュリティと議論し、セキュリティセクションのリーダーからの承認を得て、このリストに追加してください。**

#### 脆弱性の確認 {#confirming-a-vulnerability}

脆弱性が依存関係に影響する場合:

1. 依存関係（ソフトウェアライブラリ、システムライブラリ、ベースイメージなど）をアップグレード*または*削除できるか評価します。
1. 脆弱性ステータスを「確認済み」に設定します。
1. 依存関係のアップグレード/削除を含む新しいバージョンのアナライザーをリリースし、[脆弱性の解決](#resolving-a-vulnerability)プロセスに従います。

他のすべての確認された脆弱性については、修正についての議論と追跡のために[セキュリティ Issue を作成](#creating-security-issues)してください。

#### 脆弱性の解決 {#resolving-a-vulnerability}

脆弱性が修正された場合、「解決済み」にできます。その際、どのように修正されたかをコメントし、脆弱性ステータスオプションから「解決」を選択し、関連する脆弱性 Issue をクローズします。

#### セキュリティ Issue の作成 {#creating-security-issues}

残念ながら、脆弱性ページやセキュリティダッシュボードの「Issue 作成」ボタンから直接セキュリティ Issue を作成することはまだできません。これは、エラーが報告されたのと同じプロジェクトで Issue を作成する場合にのみ機能し、私たちのプロジェクトでは内蔵の Issue トラッカーを無効にしているためです。

代わりに、私たちのワークフローではすべての Issue を[メインの GitLab プロジェクト](https://gitlab.com/gitlab-org/gitlab/issues)で開きます。

回避策として、脆弱性ページのコンテンツをコピー＆ペーストできます（これにより Markdown 書式が維持されます！）。また、[新しいセキュリティ Issue の作成](/handbook/security/engaging-with-security/#creating-new-security-issues)に関するセキュリティガイドラインに従ってください。

必要なラベルを追加するためにクイックアクションを活用できます。

```text
/confidential

/label ~security ~"type::bug" ~"bug::vulnerability"
/label ~"section::sec" ~"devops::application security testing" ~"group::composition analysis"

<!-- 影響を受けるプロジェクトに応じて: -->
/label ~"Category:Software Composition Analysis"
/label ~"Category:Container Scanning"
```

上記のように `~security` と `~"bug::vulnerability"` ラベルを追加することが重要です。[`AppSec Escalation Engine`](https://gitlab.com/gitlab-com/gl-security/engineering-and-research/automation-team/appsec-escalator/-/blob/3a7e8a4baed7b7e54039558f4f76328046543a0c/README.md#L3) がこれらのラベルを持つすべての Issue を自動的に取り上げ、追加ラベル `~security-sp-label-missing` と `~security-triage-psirt` を追加し、[AppSec トリアージダッシュボード](https://triage-dashboard-2c1ad6.gitlab.io/)で Issue に言及します。この時点で、[安定したカウンターパート](/handbook/engineering/development/sec/secure/#stable-counterparts)または[アプリケーションセキュリティチーム](/handbook/security/product-security/security-platforms-architecture/application-security/)のトリアージ担当者が Issue を取り上げ、appsec トリアージローテーションの一環として深刻度を割り当てます。

Issue が作成されたら、追跡を容易にするために[脆弱性のリンク項目](https://docs.gitlab.com/ee/user/application_security/vulnerabilities/#link-a-vulnerability-to-existing-issues)に追加してください。

セキュリティ Issue を報告する開発者は、[アプリケーションセキュリティチーム](/handbook/security/product-security/security-platforms-architecture/application-security/)が脆弱性の影響を評価するのを助け、`Impact` セクションで Issue の説明を更新する必要があります。

即時のフィードバックが必要な場合は、[安定したカウンターパート](/handbook/engineering/development/sec/secure/#stable-counterparts)セクションにリストされているセキュリティエンジニアの 1 人に `@`-メンションでコメントを追加するか、Slack でメッセージを送ってください。

### リリース失敗プロセス {#release-failure-process}

イメージリリースプロセスが失敗している場合、どのように検出、エスカレート、解決されたかを追跡するためのインシデントを作成する必要があります。インシデントを文書化することで、キーワード、ラベル、その他の Issue フィルターによって以前のインシデントを検索することが可能になります。すべてのインシデントは[メインの GitLab プロジェクト](https://gitlab.com/gitlab-org/gitlab/-/issues/?sort=created_date&state=opened&type%5B%5D=incident&label_name%5B%5D=group%3A%3Acomposition%20analysis&first_page_size=20)で開きます。

1. [新しいインシデントを開き](https://gitlab.com/gitlab-org/gitlab/-/issues/new?issuable_template=incident&issue%5Bissue_type%5D=incident)、問題の説明と再現手順を追加します。将来的に Composition Analysis に影響を与えたインシデントを追跡できるように、以下のラベルを追加します。

    ```text
    <!--
    以下の深刻度の 1 つを選択
    参照: https://handbook.gitlab.com/handbook/product-development/how-we-work/issue-triage/#severity
    -->
    /label ~"severity::1"
    /severity S1

    /label ~"severity::2"
    /severity S2

    /label ~"severity::3"
    /severity S3

    /label ~"severity::4"
    /severity S4

    <!--
    以下の優先度の 1 つを選択
    参照: https://handbook.gitlab.com/handbook/product-development/how-we-work/issue-triage/#priority
    -->
    /label ~"priority::1"
    /label ~"priority::2"
    /label ~"priority::3"
    /label ~"priority::4"

    /label ~"section::sec" ~"devops::application security testing" ~"group::composition analysis" ~"type::bug" ~"bug::availability"

    <!--
    以下のカテゴリの 1 つを選択
    -->
    /label ~"Category:Dependency Scanning"
    /label ~"Category:Container Scanning"
    /label ~"Category:License Compliance"
    ```

1. インシデントをメンテナーシップリアクションローテーション中のエンジニアに割り当てます。
1. [クイックアクション](https://docs.gitlab.com/ee/operations/incident_management/linked_resources.html#using-a-quick-action)で関連する Issue や Zoom ミーティングをリンクしてインシデントのタイムラインイベントを記録します。インシデントの開始、検出、解決、およびインシデント対応の一部としてハイライトする価値があると思う他のイベントについてイベントが存在することを確認します。
1. Issue の修正時に、解決の詳細なサマリーと完了すべき初期フォローアップアクションを含めます。最後に、インシデントのエントリをグループ全体でレビューできるように、週次 Composition Analysis グループミーティングに追加します。

#### インシデントの例

- [PHP Composer segfaults in gemnasium analyzer](https://gitlab.com/gitlab-org/gitlab/-/issues/383299)

### メンテナンストリアージプロセス

エンジニアリングマネージャーがメンテナンス Issue を優先順位付けするのを支援するために、エンジニアリングチームは[優先度ラベル](/handbook/product-development/how-we-work/issue-triage/#priority)を割り当てます。

1. [メンテナンス Issue ボード](https://gitlab.com/groups/gitlab-org/-/boards/7658725?label_name[]=group%3A%3Acomposition%20analysis&label_name[]=type%3A%3Amaintenance)を活用します。
1. 優先度ラベルのない各オープン Issue（「Open」カラム）について、Issue を短時間（1 時間未満）調査してコメントを付けます。私たちの[作業タイプ分類](/handbook/product/groups/product-analysis/engineering/metrics/#work-type-classification)（例: `~maintenance::refactor`）に従って、正しいサブカテゴリラベルが適用されていることを確認します。

### コードレビュー

Composition Analysis グループに参加すると、チームメンバーはグループが管理するすべての[プロジェクト](#projects)のレビュアーまたはメンテナーになることが想定されます。メンテナーになるプロセスは、一般的な[コードレビューガイドライン](/handbook/engineering/workflow/code-review/#how-to-become-a-project-maintainer)に説明されています。

## プロジェクト {#projects}

Composition Analysis グループはスキャン機能を提供するためにいくつかのプロジェクトを維持しています。

### 共有 {#shared}

- [common ライブラリ](https://gitlab.com/gitlab-org/security-products/analyzers/common)

### Dependency Scanning {#dependency-scanning}

- [gemnasium アナライザー](https://gitlab.com/gitlab-org/security-products/analyzers/gemnasium)
- [gemnasium-maven-plugin](https://gitlab.com/gitlab-org/security-products/analyzers/gemnasium-maven-plugin)
- [gemnasium-gradle-plugin](https://gitlab.com/gitlab-org/security-products/analyzers/gemnasium-gradle-plugin)
- [dependency-scanning アナライザー](https://gitlab.com/gitlab-org/security-products/analyzers/dependency-scanning)
- **内部のみ** [gitlab-depscan](https://gitlab.com/gitlab-org/security-products/gitlab-depscan)

追加メモ:

- [gemnasium-db](https://gitlab.com/gitlab-org/security-products/gemnasium-db) は [Vulnerability Research グループ](/handbook/engineering/development/sec/secure/vulnerability-research/)によって管理されています。

### Container Scanning {#container-scanning}

- [container-scanning アナライザー](https://gitlab.com/gitlab-org/security-products/analyzers/container-scanning/)
- [rhsa2ovaloracle](https://gitlab.com/gitlab-org/security-products/rhsa2ovaloracle): アナライザーが使用する Oracle アドバイザリを生成します。
- [multiple-container-scanner](https://gitlab.com/gitlab-org/security-products/analyzers/multiple-container-scanner)

### License-db {#license-db}

- [advisory-processor](https://gitlab.com/gitlab-org/security-products/license-db/advisory-processor)
- [deployment](https://gitlab.com/gitlab-org/security-products/license-db/deployment)
- [license-exporter](https://gitlab.com/gitlab-org/security-products/license-db/license-exporter)
- [license-feeder](https://gitlab.com/gitlab-org/security-products/license-db/license-feeder)
- [license-interfacer](https://gitlab.com/gitlab-org/security-products/license-db/license-interfacer)
- [license-processor](https://gitlab.com/gitlab-org/security-products/license-db/license-processor)
- [schema](https://gitlab.com/gitlab-org/security-products/license-db/schema)
- [PMDB tools](https://gitlab.com/gitlab-org/security-products/license-db/pmdb-tools)
- [Static Reachability Modules Scraper](https://gitlab.com/gitlab-org/security-products/license-db/static-reachability-modules-scraper)

### Operational Container Scanning

- [trivy-k8s-wrapper](https://gitlab.com/gitlab-org/security-products/analyzers/trivy-k8s-wrapper)
- [OCS モジュール](https://gitlab.com/gitlab-org/cluster-integration/gitlab-agent/-/tree/master/internal/module/starboard_vulnerability)
- [Cluster Image Scanning 関連コード](https://gitlab.com/gitlab-org/cluster-integration/gitlab-agent/-/blob/master/internal/module/starboard_vulnerability/agent/scanner.go)
  - [Operational Container Scanning](https://docs.gitlab.com/ee/user/clusters/agent/vulnerabilities.html) 機能に必要です。

OCS モジュールは `Environments` グループが管理する [`gitlab-agent`](https://gitlab.com/gitlab-org/cluster-integration/gitlab-agent) プロジェクトの一部です。`Composition Analysis` グループは OCS モジュールのみの管理に責任を持ちます。

### Dependency Management

- [orchestrator](https://gitlab.com/gitlab-org/security-products/dependency-management/orchestrator)
- [updater](https://gitlab.com/gitlab-org/security-products/dependency-management/updater)

### Semver dialects gem

- [semver_dialects](https://gitlab.com/gitlab-org/ruby/gems/semver_dialects)

### CI/CD コンポーネント

- [Dependency Scanning](https://gitlab.com/components/dependency-scanning)
- [Container Scanning](https://gitlab.com/components/container-scanning)

### アップストリームスキャナーのミラー {#upstream-scanner-mirrors}

一部のアナライザーはオープンソースソフトウェアに依存しているため、カバレッジを増やしリスクを軽減するためにセキュリティテストに含めています。

そのために、リポジトリをミラーし、関連するセキュリティスキャンを実行します:

- [trivy](https://gitlab.com/gitlab-org/security-products/dependencies/trivy)
- [trivy-db](https://gitlab.com/gitlab-org/security-products/dependencies/trivy-db)
- [trivy-java-db](https://gitlab.com/gitlab-org/security-products/dependencies/trivy-java-db)
  - [`oras-mirror-config`](https://gitlab.com/gitlab-org/security-products/dependencies/trivy-java-db/-/tree/oras-mirror-config?ref_type=heads)
    ブランチには `registry.gitlab.com/gitlab-org/security-products/dependencies/trivy-java-db:1` イメージを最新状態に保つスケジュールパイプラインが含まれています。
- [trivy-db-data](https://gitlab.com/gitlab-org/security-products/dependencies/trivy-db-data)
- [trivy-db-glad](https://gitlab.com/gitlab-org/security-products/dependencies/trivy-db-glad)
- [vuln-list-update](https://gitlab.com/gitlab-org/security-products/dependencies/vuln-list-update)

現在使用しているバージョンのスキャナーで報告された脆弱性は、[グループレベルの脆弱性レポート](https://gitlab.com/groups/gitlab-org/security-products/dependencies/-/security/vulnerabilities/?state=DETECTED&projectId=30616761,30684590,35335143,39545454,39545481,51420921&severity=CRITICAL,HIGH&activity=STILL_DETECTED)に自動的に報告され、[セキュリティ脆弱性トリアージプロセス](#security-vulnerabilities-triaging-process)の一部としてトリアージされます。

#### ミラーの設定

1. <https://gitlab.com/gitlab-org/security-products/dependencies> に新しいプロジェクトを作成します（空のプロジェクト）。
2. プロジェクトリポジトリをアップストリームリポジトリの[プルミラー](https://docs.gitlab.com/ee/user/project/repository/mirror/#pulling-from-a-remote-repository)として設定します。
3. アナライザーが現在使用しているバージョンに一致する git タグを見つけます（通常はアナライザーの `Dockerfile` の `SCANNER_VERSION` 変数で表されます）。使用しているリリースに対応する git タグがない場合は、正確なコミットを使用します。
4. `VERSION-security-checks` という命名規則に従ったブランチを作成します。`VERSION` は現在使用しているアップストリームスキャナーのバージョンです（例: `v6.12.0`）。
5. すべての互換性のあるセキュリティスキャンを設定するための `.gitlab-ci.yml` 設定ファイルを追加します。
6. 報告された脆弱性がダッシュボードと脆弱性レポートに表示されるように、`VERSION-security-checks` をデフォルトブランチにします。

#### アップストリームスキャナーの更新 {#updating-an-upstream-scanner}

アップストリームスキャナーの新しいリリースは月次で確認しており、[リリース Issue](https://gitlab.com/gitlab-org/security-products/release/-/blob/master/scripts/templates/release_issue.md.erb) の一部として行います。更新が利用可能な場合は、[スキャナー更新 Issue テンプレート](https://gitlab.com/gitlab-org/security-products/release/-/blob/master/scripts/templates/update_scanner_issue.md.erb)を使用して新しい Issue が作成され、次のマイルストーンに追加されます。

##### アップストリームツールとアナライザーのリスト

1. [Trivy](https://gitlab.com/gitlab-org/security-products/dependencies/trivy).
   1. [Container Scanning](https://gitlab.com/gitlab-org/security-products/analyzers/container-scanning/-/blob/master/doc/howto/update-scanners.md)
   1. [Trivy K8S wrapper](https://gitlab.com/gitlab-org/security-products/analyzers/trivy-k8s-wrapper/-/blob/main/docs/update_scanner.md)
1. [OpenTofu](https://opentofu.org/)
   1. [Deployment](https://gitlab.com/gitlab-org/security-products/license-db/deployment)
1. [OpenTofu コンポーネント](https://gitlab.com/components/opentofu)
   1. [Deployment](https://gitlab.com/gitlab-org/security-products/license-db/deployment/-/blob/main/.gitlab-ci.yml#L5)
アップストリームスキャナーに依存するすべてのアナライザーには、"*アップストリームスキャナーの更新方法*" セクションがあり、プロセスを詳述しています。これには可能な新しいセキュリティ脆弱性の検証とライセンスチェックが含まれており、以下で詳述します。

##### アップストリームスキャナーを更新する際のセキュリティチェック {#security-checks-when-updating-an-upstream-scanner}

新しいバージョンのアップストリームスキャナーを含むアナライザーをリリースする前に、現在のポリシーに一致するセキュリティ脆弱性がないことを確認する必要があります。

1. 新しいタグ（またはコミット）をチェックアウトし、`NEW_VERSION-security-checks` という命名規則に従ったブランチを作成します。
1. 現在の `VERSION-security-check` ブランチから既存の `.gitlab-ci.yml` 設定ファイルをコピー＆ペーストします。
1. [私たちのポリシー](#security-policy)に一致する新しい検出結果がある場合は、[トリアージプロセス](#triaging-vulnerabilities)に従って対処します。
1. 上記の検出結果が**修正された場合にのみ**、`NEW_VERSION-security-checks` をデフォルトブランチに更新し、この新しいバージョンを使用するようにアナライザーの更新を進めます。

##### アップストリームスキャナーを更新する際のライセンスチェック

新しいバージョンのアップストリームスキャナーを含むアナライザーをリリースする前に、そのライセンスが変更されていないか、[私たちのポリシー](/handbook/engineering/open-source/#acceptable-licenses)と互換性があることを確認する必要があります。

## FIPS ランナー

FIPS イメージをテストするために、独自のランナーインスタンスをホストしています。
[VM インスタンス](https://console.cloud.google.com/compute/overview?invt=Ab6F3g&project=group-secure-a89fe7)を `sca-fips-runner-` でフィルタリングすることで確認できます。新しいランナーをプロビジョニングする必要がある場合は、[プロビジョニングスクリプト](https://gitlab.com/gitlab-org/security-products/analyzers/gemnasium/-/blob/6f1125442490f931a61d30f2e24bb31e473a3927/scripts/create_fips_runner.sh)を使用して、含まれている指示に従ってください。

## モニタリング

- [Grafana 上のステージグループダッシュボード](https://dashboards.gitlab.net/d/stage-groups-composition_analysis/stage-groups-group-dashboard-secure-composition-analysis?orgId=1)
- [継続的な脆弱性スキャン（gitlab.com の Rails プラットフォームでのバックグラウンド処理）](https://log.gprd.gitlab.net/app/r/s/OBQOB)
- [Dependency Scanning SBOM スキャン API](https://log.gprd.gitlab.net/app/r/s/fhYY5)
- [Dependency Scanning アナライザーメトリクス](https://10az.online.tableau.com/#/site/gitlab/workbooks/3648287/views)
- [Multi Container Scanning メトリクス](https://10az.online.tableau.com/#/site/gitlab/views/PDSecMetricHub/StandardView?:iid=1)

## 関連リソース

- [CA チームのコントローラー、API エンドポイント、Sidekiq ワーカー、データベーステーブルのリスト](https://gitlab-com.gitlab.io/gl-infra/platform/stage-groups-index/composition-analysis.html)

## ランブック

[Composition Analysis ランブック](runbooks/)ページを参照してください。

## Slack アラート

以下のテーブルは Slack アラートを生成できるさまざまな GitLab プロジェクトを示しています。
Sentry によって生成されるアラートは含まれていないことに注意してください。
Slack チャンネルの名前を変更した場合は、アラートが引き続き機能するようにプロジェクトのインテグレーションを更新してください。

| プロジェクト | 対象 Slack チャンネル | 追加情報 |
|--------------------|------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------------------------------|
| [Gemnasium](https://gitlab.com/gitlab-org/security-products/analyzers/gemnasium)          | `#g_ast-composition-analysis-alerts`   | デフォルトブランチの失敗と新しいリリース |
| [Deployment](https://gitlab.com/gitlab-org/security-products/license-db/deployment)         | `#g_ast-composition-analysis-alerts`  | ライセンス/アドバイザリ/epss/kev データのエクスポートまたはフィードのスケジュールパイプラインから主に複数のアラートが生成される場合があります |
| [Container Scanning](https://gitlab.com/gitlab-org/security-products/analyzers/container-scanning) | `#f_container_scanning` | デフォルトブランチの失敗と新しいリリース |
| [trivy-k8s-wrapper](https://gitlab.com/gitlab-org/security-products/analyzers/trivy-k8s-wrapper)  | `#f_operational_container_scanning` | デフォルトブランチの失敗 |
| [trivy-db-glad](https://gitlab.com/gitlab-org/security-products/dependencies/trivy-db-glad)      | `#g_ast-composition-analysis-alerts`  | デフォルトブランチの失敗 |
| [rhsa2ovaloracle](https://gitlab.com/gitlab-org/security-products/rhsa2ovaloracle)      | `#g_ast-composition-analysis-alerts`  | デフォルトブランチの失敗 |
| [Dependency Scanning Analyzer](https://gitlab.com/gitlab-org/security-products/analyzers/dependency-scanning)  | `#g_ast-composition-analysis-alerts`  | デフォルトブランチの失敗と新しいリリース |
| [Dependency Scanning Component](https://gitlab.com/components/dependency-scanning/)  | `#g_ast-composition-analysis-alerts`  | デフォルトブランチの失敗 |
