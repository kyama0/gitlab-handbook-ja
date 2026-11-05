---
title: "データトリアージガイド"
upstream_path: "/handbook/enterprise-data/how-we-work/triage/"
upstream_sha: "ab93800e4c241789ac67785899fa20ffa1eb0854"
translated_at: "2026-11-05T14:56:31.098154+00:00"
translator: claude
stale: false
lastmod: "2026-11-04T09:48:40+01:00"
---

### エンタープライズデータプログラムのトリアージ {#enterprise-data-program-triage}

GitLab には、Central Data Team と多くの Functional Analytics Teams を含む、強固で活発なデータプログラムがあります。GitLab の総チームメンバー数も増加しており、GitLab の成長に対応するためにトリアージプロセスをアップグレードする必要があります。

トリアージプロセスのアップグレード手順：

1. Functional Analytics Teams を #data チャンネルのトリアージプロセスに組み込む。
1. GitLab チームメンバーが #data でグループに対して質問のヘルプを求められるよう Slack エイリアスを作成する。
1. データプログラムカレンダーのデータプログラム用トリアージスケジュールを作成する。トリアージのコミットメントとして、ビジネスチームごとに 1 名、1 日に 1 名を求める。

### エンタープライズデータトリアージグループ {#enterprise-data-triage-groups}

| トリアージグループ名 | トリアージ Slack エイリアス | トリアージグループメンバー |
| -------------- | ------------------- | -------------------- |
| Go To Market Analytics Triage | `@GTMAnalyticsTriage` | Revenue Strategy & Analytics Team、Marketing Strategy and Performance Team、Business Insights and Analytics Team、GTM Data Fusion Team |
| R&D Analytics Triage | `@R&DAnalyticsTriage` | Product Data Insights Team、R&D Data Fusion Team |
| People Analytics Triage | `@PeopleAnalyticsTriage` | People Group Analytics Team、G&A Data Fusion Team |
| Data Platform Triage | `@DataPlatformTriage` | Data Platform Team |

### エンタープライズデータ GitLab プロジェクト {#enterprise-data-gitlab-projects}

| GitLab データプロジェクトへのリンク |
| -------------- |
| [Data Team](https://gitlab.com/gitlab-data/analytics) |
| [Sales Strategy and Analytics](https://gitlab.com/gitlab-com/sales-team/field-operations/analytics) |
| [Marketing Strategy and Performance](https://gitlab.com/gitlab-com/marketing/marketing-strategy-performance) |
| [Product Data Insights](https://gitlab.com/gitlab-data/product-analytics) |
| [Business Analytics](https://gitlab.com/gitlab-com/business-analytics) |
| [People Analytics](https://gitlab.com/gitlab-com/people-group/people-analytics) |
| [Customer Success Operations - CSAnalytics ラベルを使用](https://gitlab.com/gitlab-com/sales-team/field-operations/customer-success-operations) |
| [Online Sales and Self-Service](https://gitlab.com/gitlab-com/sales-team/self-service) |

#### 週次ローテーションスケジュール {#weekly-rotation-schedule}

Data Platform Team と Analytics Engineers は、週次のトリアージスケジュールを共有しています。スケジュールはデータプログラムの Google カレンダーで管理されています。

#### Tableau サポート {#tableau-support}

BI/Tableau 管理チームは、#data-tableau チャンネルでのリクエストやアドホック質問をサポートします。トリアージに特定の担当者はいません。どのチームメンバーも Tableau のニーズを支援できます。また、チームは毎週 Tableau オフィスアワーを開催しています。

### エンタープライズデータプログラムのトリアージ手順 {#enterprise-data-program-triage-instructions}

チームに関わらず、すべてのトリアージチームメンバーは以下の責任を共有します：

1. 毎週、AE と DE のための単一の共有トリアージ Issue が開かれます。既に開かれているか確認し、まだ開かれていない場合は作成し、自分と DE/AE のカウンターパートの両方をオーナーとしてアサインします。
1. トリアージ担当者は #data の Slack メッセージをレビューします。
1. トリアージ担当者は、関連するハンドブックページ、ダッシュボード、またはトピックについてより深い専門知識を持つ人を指し示すことで、Slack スレッドで応答します。
1. データプログラムチームメンバーが 5 分を超える調査を必要とするリクエストの場合、トリアージ担当者は依頼者をチャンネル説明に誘導します。説明には、Issue を作成できる様々なデータプログラムプロジェクトへのリンクが含まれています。
1. トリアージ担当者は、Issue ラベリングプロセスに不慣れなチームメンバーを支援します。`clean-up::review` ラベルの Issue をレビューし、使用する適切なラベルについてガイダンスを提供します。
1. トリアージ担当者は、チームのラベルが付けられたすべての Issue を監視してトリアージし、チーム固有のリクエストへの迅速な対応と解決を確保する責任があります。

不在、休暇中、または優先度の高いプロジェクトに取り組んでいるチームメンバーは、代替を見つけ、誰が担当を引き継ぐかをチームに伝えることに責任があります。これは[データプログラムの Google カレンダー](https://calendar.google.com/calendar?cid=Z2l0bGFiLmNvbV9kN2RsNDU3ZnJyOHA1OHBuM2s2M2VidW84b0Bncm91cC5jYWxlbmRhci5nb29nbGUuY29t)で更新してください。

チームに専任のトリアージ担当者を配置することは、傍観者効果に対処するのに役立ちます。スケジュールは明確な日々のオーナーシップ情報を共有していますが、オンコール的なポジションではありません。明確なオーナーシップを通じて、チームの他のすべての人が深い作業に多くの時間を費やせるようになります。トリアージ担当者は、この追加的な時間的負担を抱えながらも成功できる種類の作業に一日を計画することをお勧めします。

#### チームごとのトリアージ責任 {#triage-responsibilities-by-team}

データトリアージ担当者は、データプログラムへのリクエストと問題に対する最初の対応者です。

[**Data Platform トリアージガイド**](/handbook/enterprise-data/how-we-work/triage/data-platform-triage)

[**Analytics Engineers トリアージガイド**](/handbook/enterprise-data/how-we-work/triage/analytics-engineering-triage)

**Functional Analysts の責任**

- Functional Analyst のトリアージハンドルは、主に **#data** の Slack で担当部門に関連する GitLab チームメンバーのリクエストに対応する責任があります。

**Data Science の責任**

Data Science のトリアージ担当者は、主にモデル実行の問題/障害のレビューと、dbt モデルのアップデートによるフィールドリプレースメントの実行などの運用リクエストのサポートに責任があります。

チームの拡大に伴い、エクストラクトリフレッシュの失敗レビュー、ジョブ失敗レビューなどの追加アクティビティを含むようにトリアージ責任をイテレーションしていきます。

- トリアージャーの責任の詳細については、[データエンジニアトリアージトレーニングセッション動画](https://www.youtube.com/watch?v=0eGpgaQgEGg)をご覧ください。

## トリアージ FAQ {#triage-faq}

**データトリアージは 24 時間 365 日のサポートですか、それとも 24 時間対応が必要なシフトですか？**

いいえ。トリアージの責任は通常の勤務時間中に実施されます。標準的な作業日中に[トリアージテンプレート（内部リンク）](https://gitlab.com/gitlab-data/analytics/-/issues/new?issuable_template=Triage:%20Data%20Triage)に記載されているタスクを完了します。

**問題が見つかった場合、すぐに本番環境で修正しますか、それともインシデントとして捉えて定義された時間内に解決しますか？** <br>

トリアージ日には、Data Team のメンバーが以下の場所でのすべての失敗、質問、エラーを確認します：

- Slack チャンネル：#data-pipelines、#analytics-pipelines、#data
- 新しく追加された [Issue](https://gitlab.com/groups/gitlab-data/-/boards/1917859?&label_name[]=Priority%3A%3A1-Ops&label_name[]=Triage)

前回のサインオフ以降のすべての失敗が対象となり、サインオフまでのすべての失敗に対して Issue を作成します。
データパイプラインが壊れていてデータのロードやリフレッシュに遅延が予想される場合、関係するチームに[トリアージテンプレート（内部リンク）](https://gitlab.com/gitlab-data/analytics/-/issues/new)を使用して通知する必要があります。

**異なる種類の Issue に対する ETA はありますか？** <br>

パイプラインが壊れている場合は修正が必要です。現在、データアセットの SLO の定義に取り組んでいます。データ抽出パイプラインについては、[こちら](/handbook/enterprise-data/platform/)に包括的な概要があります。

**通常時間帯（米国時間の午前 11 時終了など）のトリアージ日に作業した場合、シフト終了後にパイプラインが壊れてデータの利用可能性に遅延が生じた場合はどうなりますか？**

グローバルチームによるカバレッジにより、複数のタイムゾーンでの問題に対応できます。トリアージャーが米国時間より早いタイムゾーンにいる場合、米国を拠点とするステークホルダーへの影響が生じる前に問題を解決できます。ただし、これは一部の日に後半の米国時間のカバレッジが完全ではないことを意味します。このギャップを認識しており、将来的にカバレッジを改善するよう取り組んでいます。

## 自動化されたトリアージ管理 {#automated-triage-management}

### トリアージボット {#triage-bot}

Data Team は、[GitLab Triage gem](https://gitlab.com/gitlab-org/gitlab-triage)を使用して Issue 管理を自動化し、アナリティクスプロジェクトを整理しています。アナリティクスリポジトリのトリアージポリシーは、[.triage-policies.yml](https://gitlab.com/gitlab-data/analytics/-/blob/master/.triage-policies.yml?ref_type=heads)ファイルで定義されています。

### 外部からのコントリビューション {#external-contributions}

トリアージボットは、トリアージ担当者が素早く見つけられるように、Data team の外部からの作業にフラグを付けます：

- **Issue**：Data team 外の人が作成した Issue には、`External Request` ラベルが付けられます。
- **マージリクエスト**：Data team 外の人が作成した MR には、`External MR` ラベルと、[SQL スタイルガイド](/handbook/enterprise-data/platform/sql-style-guide/)、テスト用の [build_changes](/handbook/enterprise-data/platform/ci-jobs/#build_changes)および [run_grants](/handbook/enterprise-data/platform/ci-jobs/#run_grants) CI ジョブ、[AI エージェントのセットアップガイド](/handbook/enterprise-data/ai/agent-setup/)を案内するコメントが付けられます。

ボットは、[`.gitlab/triage/data_team_members.txt`](https://gitlab.com/gitlab-data/analytics/-/blob/master/.gitlab/triage/data_team_members.txt)に記載された、1 行につき 1 つの GitLab ユーザー名を使って Data team のメンバーを判定します。このリストは手動で管理されているため、新しいチームメンバー（および Issue を作成するボットアカウント）を追加してください。追加しない場合、その人やアカウントが作成した Issue や MR は外部としてラベル付けされます。

### ラベルの適用 {#label-enforcement}

トリアージ担当者はラベルを使用してドメイン内の作業を識別し優先順位を付けます。Issue に適用するラベルがわからない場合は、`clean-up::review` ラベルを追加するだけで、チームが適切なラベル付けを支援します。この自動化により、すべての Issue に必須のスコープラベル（`team`、`work category`、`champion`、`workflow`）が含まれるようになります。`Documentation`、`Iteration Planning`、`Discussion` などのラベルはこの要件から除外されています。

- **3 日後**：必須ラベルが欠けている Issue に対して、ボットは不足しているラベルを列挙したコメントを追加し、`Needs Triage` と `clean-up::warning` の両方を適用します。コメントには `clean-up::review` ラベルを使用してヘルプを求める方法についての指示が含まれています。
- **14 日後**：ラベルが依然として欠けている場合、ボットはリマインダーコメントを追加します。
- **30 日後**：まだ更新がない場合、Issue は自動的にクローズされます。ボットは `clean-up::close` ラベルを追加し、理由を説明するコメントを加えます。チームメンバーはいつでも Issue を再オープンできます。将来的な自動クローズを防ぐには、必須ラベルを追加してください。

クローズされた Issue が再オープンされると、ボットは `clean-up::close` ラベルを削除し、必須ラベルを確認します。まだ欠けている場合は `clean-up::warning` を追加し、必要なものをリストアップしたコメントを含めます。

正しいラベルが設定されると、ボットは自動的に警告ラベルを削除します。これにより、Issue が正しくラベル付けされるか、レビューのためにクローズされるかのどちらかとなる自己維持システムが作成されます。

### 陳腐化した Issue の管理 {#stale-issue-management}

トリアージボットは、バックログを管理しやすくするために、1 年を超えてアクティビティがない Issue にフラグを立てます。その際、`stale::warning` ラベルを追加してコメントを投稿します。その時点から、誰かがアクションを取らない限り、Issue はその後 14 日でクローズされます。

Issue がクローズされるのを防ぐには、以下のいずれかを実行できます：

- Issue に現在のステータスのアップデートでコメントを残し、stale::warning ラベルを削除する。
- 定期的な更新なしに Issue をオープンのままにしておく必要がある場合は `stale::exempt` ラベルを追加する。

**コメントを追加するだけではプロセスを止めることができません**。警告ラベルを削除するか、`stale::exempt` に置き換える必要があります。

タイムラインはこのように機能します：

1. **1 年間の非アクティビティ後**：ボットが `stale::warning` を追加してコメントを投稿する
2. **7 日後**：最終リマインダーとして `stale::7day_warning` を追加する
3. **さらに 7 日後（最初の警告から 14 日後）**：Issue がクローズされ `stale::closed` でタグ付けされる

クローズされた Issue はいつでも再オープンできます。再オープン後は、Issue を更新するか `stale::exempt` ラベルを適用して、将来的にフラグが立てられないようにしてください。

### ポリシー更新のテスト {#testing-policy-updates}

トリアージポリシーファイルへの変更をテストするには、マージリクエストの `Stage: Triage` で `dry-run:triage` CI ジョブを実行します。このジョブは実際の変更を行いませんが、ポリシーファイルを適用した結果をシミュレートし、*行われるはずの*アクションを出力します。

> **重要：** 成功したジョブ（緑のチェック）は、ボットがエラーなく実行されたことを意味するだけです。トリアージルールが正しいまたは効果的であることを意味**しません**。ジョブログを開いてルールが期待通りに一致することを慎重に確認する必要があります。

ログには以下が表示されます：

- どのトリアージルールがトリガーされたか
- 各ルールに一致した Issue の数
- 実行されるアクション（追加されるラベル、投稿されるコメントなど）
