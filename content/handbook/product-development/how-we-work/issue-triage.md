---
title: Issue トリアージ
description: "GitLab.com プロジェクトにおける Issue のトリアージとラベル付けのガイドライン"
upstream_path: /handbook/product-development/how-we-work/issue-triage/
upstream_sha: 1e195b58b9f249ff10bd0e705106c320fee86141
translated_at: "2026-05-13T00:00:00Z"
translator: claude
stale: false
---

GitLab は [Open Development](https://about.gitlab.com/blog/2015/12/16/improving-open-development-for-everyone/) を信じており、[GitLab.com](https://gitlab.com/groups/gitlab-org) 上のプロジェクトに対してコミュニティが Issue を立て、マージリクエストを開くことを推奨しています。彼らのコントリビューションは貴重であり、私たちはできるだけ効果的に対応すべきです。その中心にあるのがトリアージ、すなわちタイプと深刻度に応じた分類のプロセスです。

GitLab チームメンバーであれば誰でも Issue をトリアージできます。トリアージされていない Issue の数を低く保つことは、保守容易性のために不可欠であり、私たち全員の責任です。他の業務の合間に少しずつ Issue をトリアージするか、定期的に時間を確保することを検討してください。

## 部分トリアージ

現状、group ラベルのない Issue を手動でトリアージする十分なキャパシティはありません。
type と group ラベルを付与するために、セルフトリアージと [AI トリアージ](https://gitlab.com/gitlab-org/quality/triage-ops/-/blob/c003f65c94ff55a6b43c0b5c8c8ac0173618c0a5/policies/stages/report/untriaged-issues.yml) を組み合わせて使用しています。

### 部分トリアージのチェックリスト

- Issue がスパムの場合：
  - [Issue を報告](https://docs.gitlab.com/ee/user/report_abuse.html#report-abuse-from-an-issue) する。
  - Issue を機密にする。
  - `#abuse` Slack チャンネルに Issue のリンクを投稿する。
- Issue がヘルプの要求の場合：
  - [サポートメッセージ](#support-issue-message) を投稿して Issue をクローズする。
  - あるいは、さらに情報を求めて ~"awaiting feedback" ラベルを適用する。
- Issue が[重複](#duplicates) している場合：
  - [重複メッセージ](#duplicate-issue-message) を投稿する。
  - `/duplicate` アクションを呼び出して元の Issue へのリンクを作成し、Issue をクローズする。
- [type ラベル](#type-labels) を割り当てる。
  - バグかサポート要求かが不明な場合は、[group](#group-labels) の PM/EM をタグ付けして意見を求める。
- `~"type::bug"` の場合：[severity ラベル](#severity) を割り当てる。
  - ~"severity::1" または ~"severity::2" の場合：[group](#group-labels) の PM/EM をメンションする。
- [group ラベル](#group-labels) を割り当てる。
  - 適切な group ラベルがない場合：[stage（"devops"）ラベル](https://docs.gitlab.com/ee/development/labels/index.html#stage-labels) を割り当てる。
  - 今後 18 か月以内に解決が予定されている Issue には [`~"backlog::prospective label"`](https://gitlab.com/groups/gitlab-org/-/epics/18639) を割り当てる。そうでない場合は [`~"backlog::no-commitment"`](https://gitlab.com/groups/gitlab-org/-/epics/18639) を割り当てる。
- 必要に応じて、関連する[ドメインエキスパート](/handbook/company/structure/#expert) をタグ付けする。

## 完全トリアージ

Issue は次のすべての基準が満たされたとき、完全にトリアージされたとみなされます：

- 部分トリアージされている。
- マイルストーンが設定されている。
- `~"type::bug"`、`~"Deferred UX"`、または [`~"backlog::triage"`](https://gitlab.com/groups/gitlab-org/-/epics/18639) ラベルが付いた Issue には、[priority ラベル](https://docs.gitlab.com/ee/development/labels/index.html#priority-labels) が適用されている。

## Type ラベル {#type-labels}

Type ラベルは [Engineering Metrics ページ](/handbook/product/groups/product-analysis/engineering/metrics/#work-type-classification) で定義されています。
タイプが不明な場合は、[group](#group-labels) のプロダクトマネージャーまたはエンジニアリングマネージャーをタグ付けして意見を求められます。

## Group ラベル {#group-labels}

[group ラベル](https://docs.gitlab.com/ee/development/labels/index.html#group-labels) を割り当てると、`gitlab-bot` が正しい stage および section ラベルを自動的に割り当てます。
[Features by Group](/handbook/product/categories/features) の一覧は、適切な group を見つけるのに役立ちます。

## Priority

Priority ラベルは Issue の重要度を示し、スケジューリングを案内するために使われます。Priority ラベルは、市場の状況、プロダクトの方向性、IACV インパクト、影響を受けるユーザー数、チームのキャパシティに基づいて設定されることが期待されます。優先順位付けの [DRI](/handbook/people-group/directly-responsible-individuals/) は、[work type に基づいて決まります](/handbook/product/product-processes/cross-functional-prioritization/#prioritization-and-dri-by-component)。

| Priority | 重要度 | 意図 | DRI |
| -------- | ---------- | --------- | --- |
| `~"priority::1"` | Urgent | チームのキャパシティ制限に関係なく、できるだけ早く対応します。目標解決時間は 30 日です。 | work type に基づき、そのプロダクトグループの PM、EM、または QEM |
| `~"priority::2"` | High | 近いうちに対応し、今後数リリースでチームからキャパシティを提供します。おそらく 60〜90 日以内に解決されます。 | work type に基づき、そのプロダクトグループの PM、EM、または QEM |
| `~"priority::3"` | Medium | 対応したいが、他により優先度の高い項目があるかもしれません。おそらく 90〜120 日以内に解決されます。 | work type に基づき、そのプロダクトグループの PM、EM、または QEM |
| `~"priority::4"` | Low | いつ対応されるか見通しはありません。タイムラインは指定されていません。 | work type に基づき、そのプロダクトグループの PM、EM、または QEM |

## Severity {#severity}

severity の見積もりにヘルプが必要な場合は、`#s_developer_experience` チャンネルで連絡してください。

注：これらの severity 定義は Issue にのみ適用されます。インシデント severity の詳細については、[インシデント管理ページ](/handbook/engineering/infrastructure-platforms/incident-management/) の [Severity Levels セクション](/handbook/engineering/infrastructure-platforms/incident-management/#severities) を参照してください。

[Severity ラベル](https://docs.gitlab.com/ee/development/labels/index.html#severity-labels) は、緊急度を判断し、`~"type::bug"` と `~"type::maintenance"` のユーザーへのインパクトを明確に伝えるのに役立ちます。タイプには複数のカテゴリーが存在することがあります。

バグについて、bug カテゴリーラベル（`~"bug::availability"`、`~"bug::performance"`、`~"bug::vulnerability"`、`~UX`）の存在は、そのカテゴリーの severity 定義を使用することを示します。`~"type::bug"` が複数のカテゴリーに対応する場合、適用する severity はより高いものとすべきです。たとえば、Issue に `~"bug::availability"` に対する `~"severity::2"` と `~"bug::performance"` に対する `~"severity::1"` がある場合、その Issue に割り当てる severity は `~"severity::1"` とすべきです。
maintenance Issue について、[`~"backlog::triage"`](https://gitlab.com/groups/gitlab-org/-/epics/18639) の存在は、severity 定義を指定する必要があることを示します。

Issue の severity を決めたら、なぜその severity を選んだのかをサマリーするノートを追加してください。これにより、将来のチームメンバーがあなたの根拠を理解し、Issue への対応方法を知ることができます。

| `~"type::bug"` のタイプ | `~"severity::1"`: Blocker | `~"severity::2"`: Critical | `~"severity::3"`: Major | `~"severity::4"`: Low | トリアージ DRI |
|----------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------|
| 一般的なバグ | 回避策がない、あるいはデータ損失を伴う、機能が壊れた状態。 | 受け入れがたいほど複雑な回避策がある、機能が壊れた状態。 | 回避策がある、機能が壊れた状態。 | 機能が不便な状態。 | そのプロダクトグループの SET または [EM](/handbook/engineering/careers/management/)。 |
| `~"bug::performance"` 応答時間 <br> (API/Web/Git)[^1] | 9000ms を超え、タイムアウトまで | 2000ms から 9000ms の間 | 1000ms から 2000ms の間 | 200ms から 1000ms の間 | [Performance Enablement グループ](/handbook/engineering/infrastructure-platforms/developer-experience/performance-enablement/) |
| `~"bug::performance"` ブラウザレンダリング <br> ([LCP](https://web.dev/articles/lcp))[^2] | 9000ms を超え、タイムアウトまで | 4000ms から 9000ms の間 | 3000ms から 4000ms の間 | 3000ms から 2500ms の間 | [Performance Enablement グループ](/handbook/engineering/infrastructure-platforms/developer-experience/performance-enablement/) |
| `~"bug::performance"` ブラウザレンダリング <br> ([TBT](https://web.dev/articles/tbt))[^2] | 9000ms を超え、タイムアウトまで | 2000ms から 9000ms の間 | 1000ms から 2000ms の間 | 300ms から 1000ms の間 | [Performance Enablement グループ](/handbook/engineering/infrastructure-platforms/developer-experience/performance-enablement/) |
| `~bug::ux` ユーザー体験の問題 [&sup3;](#ux) | 「これを理解できない。」ユーザビリティの悪さにより、ユーザーがブロックされ、リスクのあるエラーを犯しやすく、サポートを求める可能性が高い。 | 「なぜこれが起こっているのかはわかるが、解決するのが本当に苦痛だ。」ユーザーは利用可能な回避策によって大幅に遅延します。 | 「これでもまだ動作するが、自分のプロセスに少し変更を加えなければならない。」ユーザーは回避策でタスクを自己完結的に完了できますが、多少遅延する可能性があります。 | 「小さな不便さや不整合がある。」ユーザビリティは理想的ではないか、小さな表面的な問題があります。 | そのプロダクトグループの [Product Designer](/handbook/product/ux/product-design/) |
| `~"bug::availability"` GitLab SaaS の可用性 | [Availability セクション](#availability) を参照 | [Availability セクション](#availability) を参照 | [Availability セクション](#availability) を参照 | [Availability セクション](#availability) を参照 |  |
| `~"bug::vulnerability"` セキュリティ脆弱性 | [脆弱性修正 SLA](/handbook/security/product-security/vulnerability-management/sla/) を参照 | [脆弱性修正 SLA](/handbook/security/product-security/vulnerability-management/sla/) を参照 | [脆弱性修正 SLA](/handbook/security/product-security/vulnerability-management/sla/) を参照 | [脆弱性修正 SLA](/handbook/security/product-security/vulnerability-management/sla/) を参照 | AppSec チーム |
| Global Search | [Search Prioritization](/handbook/engineering/ai/search/#severity-labels-for-search-issues-advanced-search-global-search) を参照 | [Search Prioritization](/handbook/engineering/ai/search/#severity-labels-for-search-issues-advanced-search-global-search) を参照 | [Search Prioritization](/handbook/engineering/ai/search/#severity-labels-for-search-issues-advanced-search-global-search) を参照 | [Search Prioritization](/handbook/engineering/ai/search/#severity-labels-for-search-issues-advanced-search-global-search) を参照 |  |
| `~test` End-to-end テスト実行をブロックするバグ | [Blocked tests セクション](#blocked-tests) を参照 | [Blocked tests セクション](#blocked-tests) を参照 | [Blocked tests セクション](#blocked-tests) を参照 | [Blocked tests セクション](#blocked-tests) を参照 | [Developer Experience ステージ](/handbook/engineering/infrastructure-platforms/developer-experience/) |
| `~GitLab.com Resource Saturation` キャパシティプランニングの警告 | 平均予測が 3 か月以内に Hard SLO 違反を示している。 |  |  |  | Scalability Engineering Manager（リソースを所有する EM に引き継ぐ） |

すべての `~"type::bug"` Issue には、次のいずれかが必要です：

1. [`~"backlog::prospective"`](https://gitlab.com/groups/gitlab-org/-/epics/18639) を 6 か月ごとに更新し、SLO を超えてオープン状態が続く理由の根拠を含める。
1. [`~"backlog::no-commitment"](https://gitlab.com/groups/gitlab-org/-/epics/18639)` と根拠。
1. 修正せずクローズする理由の根拠。

### Severity SLO

Severity ラベルは、次のラベルが付いた Issue の完了時間を定義するのにも役立ちます：

- `~"type::bug"`
- `~"type::maintenance"`
- `~"infradev"`

これは、SLO ターゲットを測定するために使用される、期待されるタイムラインと緊急度を示します。

| **Severity**   |  `~infradev` SLO | `~"type::bug"` 解決 SLO | `~"GitLab.com Resource Saturation"` 解決 SLO | セキュリティ `~vulnerability` SLO |
|----------------|---------|--------------------------------------------------------------------------------| ----|-----|
| `~"severity::1"` | 1 週間  | 現在のリリース + GitLab.com への次回利用可能デプロイ（30 日以内） | 2 か月以内 | [脆弱性修正 SLA](/handbook/security/product-security/vulnerability-management/sla/) を参照 |
| `~"severity::2"` | 30 日 | 次回のリリース（60 日） |  | [脆弱性修正 SLA](/handbook/security/product-security/vulnerability-management/sla/) を参照 |
| `~"severity::3"` | 60 日 | 次の 3 リリース以内（約 1 四半期または 90 日） |  | [脆弱性修正 SLA](/handbook/security/product-security/vulnerability-management/sla/) を参照 |
| `~"severity::4"` | 90 日 | 次の 3 リリースを超えるもの（1 四半期超または 120 日超） |  | [脆弱性修正 SLA](/handbook/security/product-security/vulnerability-management/sla/) を参照 |

#### Severity レベルの例

Issue が 2 つの severity ラベルの間に該当しそうな場合は、より高い severity ラベルに割り当ててください。

- `~"severity::1"` の例：
  - データ破損／喪失。
  - セキュリティ侵害。
  - Issue またはマージリクエストを作成できない。
  - Issue またはマージリクエストにコメントやスレッドを追加できない。
  - 情報メッセージであるべき場面で、エラーメッセージ（ブロッカーのように見えるもの）が表示される。
  - UI 内の不明瞭な指示により、不可逆な変更が引き起こされる。
- `~"severity::2"` の例：
  - Web IDE 経由で変更を送信できないが、コマンドラインでは動作する。
  - マージリクエストページのステータスウィジェットが動作しないが、テストパイプラインページで情報を確認できる。
  - 回避策はあるが、[Rails console](https://docs.gitlab.com/ee/administration/operations/rails_console.html) の使用を必要とし、受け入れがたいほど複雑である。
- `~"severity::3"` の例：
  - Issue ページからではなく、マージリクエスト一覧ビューからのみマージリクエストを作成できる。
- `~"severity::4"` の例：
  - 色の不一致。
  - 位置のずれ。

## クローズした Issue の再評価

Issue のトリアージ担当者として、後から判明した追加情報に基づいて、判断を調整する責任があります。
これを実現するため、クローズした Issue の以降のアクティビティを追跡し、必要に応じて判断を調整してください。

## Availability

`~"bug::availability"` ラベルが付いた Issue は、GitLab SaaS（GitLab.com または GitLab Dedicated Tenant）の可用性に直接影響します。これは `~"type::bug"` の別カテゴリーとして扱われます。

[インシデント管理](/handbook/engineering/infrastructure-platforms/incident-management/) の目的において、インシデント Issue の severity は下の `availability` severity マトリックスに基づいて選択されます。

これらの Issue は、カスタマーのビジネス目標と日常的なワークフローへのインパクトに基づいて分類します。

優先順位付けのスキームは、[プロダクトの優先順位付け](/handbook/product/product-processes/#prioritization) に従い、セキュリティと可用性の作業を機能のベロシティよりも優先します。

これらの severity ラベルの存在は、標準的な severity ラベル（`~"severity::1"`、`~"severity::2"`、`~"severity::3"`、`~"severity::4"`）を、主にユーザーへのインパクトを考慮して修正します。これらの Issue の severity は、GitLab.com ユーザーへのインパクトの再分析によって変わる可能性があります。

| Severity | 可用性インパクト | 緩和までの時間 (TTM)(1) | 解決までの時間 (TTR)(2) | 最低 priority |
|-|-|-|-|-|
| `~"severity::1"` | GitLab SaaS で一般的なユーザーのワークフローをブロックする問題<br/><br/>回避策のないまま GitLab.com または Dedicated のテナント上で 20% 以上のユーザーに影響<br/><br/>**および/または**<br/><br/>[セルフマネージドの保証されたリリース日](/handbook/engineering/releases/monthly-releases/#timelines) を危険にさらすあらゆる障壁（~backstage ラベルを使用）<br /><br/>**および/または**<br/><br/>カスタマーに直接影響するデータ損失 <br/>**および/または**<br/> 新規カスタマーをオンボーディングする能力を妨げる、SaaS 上での繰り返されるインシデントを引き起こすもの | 8 時間以内 | 48 時間以内 | `~"priority::1"` |
| `~"severity::2"` | GitLab SaaS で一般的なユーザーのワークフローをブロックする問題<br/><br/>GitLab.com または Dedicated のテナント上で 20% 以上のユーザーに影響を与えるが、合理的な回避策が利用可能。<br/><br/>回避策のないまま GitLab.com または Dedicated のテナント上で 5%〜20% のユーザーに影響 | 24 時間以内 | 7 日以内 |  `~"priority::1"` |
| `~"severity::3"` | GitLab SaaS への広範囲なインパクトと、一般的なユーザーのワークフローへの軽微な不便さ。回避策不要。<br/><br/>GitLab.com または Dedicated のテナント上で最大 5% のユーザーに影響 | 72 時間以内 | 30 日以内 | `~"priority::2"` |
| `~"severity::4"` | GitLab.com または Dedicated のテナント上の 5% 未満のユーザーに対する、GitLab SaaS の一般的なユーザーのワークフローへの最小限のインパクト <br/><br/>影響はないが、将来のリスクを防ぐために解決することが重要なインシデントを含む場合もある | 7 日以内 | 60 日以内 | `~"priority::3"` |

(1) - 緩和は非標準の作業プロセス（ホットパッチ、重要なコードおよび設定変更など）を使用します。Infrastructure 部門が所有し、利用可能なエスカレーションプロセス（dev-escalation など）を活用します。

(2) - 解決は標準の作業プロセス（コードレビューなど）を使用します。スケジューリングは、定義された SLO ターゲット内で Product 部門が所有します。

### Availability の優先順位付け

可用性 Issue の priority は、次のような形で severity と紐づいています：

| ラベルがついた Issue | 許可される priority | **許可されない priority** |
|-|-|-|
| `~"bug::availability"` `~"severity::1"`  | `~"priority::1"` のみ | `~"priority::2"`、`~"priority::3"`、`~"priority::4"` |
| `~"bug::availability"` `~"severity::2"`  | `~"priority::1"` のみ | `~"priority::2"`、`~"priority::3"`、`~"priority::4"` |
| `~"bug::availability"` `~"severity::3"`  | `~"priority::2"` をベースラインとし、`~"priority::1"` も許可 | `~"priority::3"`、`~"priority::4"` |
| `~"bug::availability"` `~"severity::4"`  | `~"priority::3"` をベースラインとし、`~"priority::2"` と `~"priority::1"` も許可 | `~"priority::4"` |

### マージリクエスト体験

マージリクエスト（MR）体験は、私たちのプロダクトの核です。多くのチームが MR ワークフローコンポーネントにコントリビュートしているため、体験が分断されてしまっています。

重複は主に、以下の領域で見られます：マージリクエストウィジェット、Mergeability チェック、MWPS、Merge Train。

[Transient Bug ワーキンググループ](/handbook/company/working-groups/transient-bugs/) での分析の結果、最も影響を受けているトップのプロダクト領域は次のとおりであることがわかりました：

1. `create::code review`
1. `verify::continuous integration`
1. `create::source code`（同列）
1. `plan::project management`（同列）

これらのプロダクトグループは、GMAU に対する感度も高いです。これらのプロダクトグループは、マージリクエスト機能と重なるバグへの意識を高めることから恩恵を受けるでしょう。

#### マージリクエスト体験の優先順位付け

この領域では、行動意識を高める必要があります。バグがマージリクエスト体験に関連している場合、`~UX` `~merge requests` ラベルを付与すべきです。
priority は、次のような形で severity と紐づいています：

| MR UX バグの severity | 許可される priority | **許可されない priority** |
|-|-|-|
| `~"severity::1"` | `~"priority::1"` のみ | `~"priority::2"`、`~"priority::3"`、`~"priority::4"` |
| `~"severity::2"` | `~"priority::1"` のみ | `~"priority::2"`、`~"priority::3"`、`~"priority::4"` |
| `~"severity::3"` | `~"priority::1"` または `~"priority::2"` | `~"priority::3"`、`~"priority::4"` |
| `~"severity::4"` | `~"priority::1"` または `~"priority::2"` または `~"priority::3"` | `~"priority::4"` |

### ブロックされたテスト {#blocked-tests}

実行されない End-to-end テストは、予期しない可用性の問題を引き起こす可能性のある盲点につながります。
隔離された End-to-end テストの原因となる Issue を迅速に解決し、カバレッジが安定かつアクティブであることを担保しなければなりません。

#### ブロックされたテストの優先順位付け

End-to-end テスト実行をブロックするバグへの認識を促進するため、新たにオープンされた ~test ~"type::bug" Issue は、複数の Slack チャンネルでアナウンスされます：

- End-to-end テスト実行をブロックする、新たにオープンされたバグはすべて [#quality](https://gitlab.slack.com/archives/C3JJET4Q6) チャンネルでアナウンスすべきです。
- End-to-end テスト実行をブロックする、新たにオープンされたバグがプロダクトのバグである場合は、適切な EM と PM をタグ付けして、[#development](https://gitlab.slack.com/archives/C02PF508L) および [#vp-development](https://gitlab.slack.com/archives/CRC0B18UX) チャンネルでもアナウンスすべきです。

priority は、次のような形で severity と紐づいています：

| ブロックされたテストの種類 | バグの severity | 許可される priority | **許可されない priority** |
|-|-|-|-|
| Smoke end-to-end テスト | `~"severity::1"` | `~"priority::1"` のみ | `~"priority::2"`、`~"priority::3"`、`~"priority::4"` |
| 非 smoke end-to-end テスト | `~"severity::2"` | `~"priority::2"` をベースラインとし、`~"priority::1"` も許可 | `~"priority::3"`、`~"priority::4"` |

### パフォーマンス

**パフォーマンスの改善**：1 回のイテレーションで意図した応答時間に達することは難しい場合があります。
パフォーマンス改善を分解することを推奨します。可能なところで改善し、新しい応答時間に基づいて次の適切な severity と priority のレベルを再評価しましょう。

[^1]: API、Web Controller、Git 呼び出しの現在の応答時間目標は、ラボのような条件下で [200 RPS / 10k ユーザーのリファレンスアーキテクチャクラスの環境](https://docs.gitlab.com/ee/administration/reference_architectures/10k_users.html) に対して実行される [GitLab Performance Tool (GPT)](https://gitlab.com/gitlab-org/quality/performance) の TTFB P90 結果に基づきます。この実行は毎晩行われ、結果は [Reference Architecture プロジェクトの wiki](https://gitlab.com/gitlab-org/quality/performance/-/wikis/Benchmarks/Latest/10k) に出力されます。これらの目標は、[GitLab Delivery: Operate](/handbook/engineering/infrastructure-platforms/gitlab-delivery/operate/) チームが所有しています。

[^2]: [Largest Contentful Paint (LCP)](https://web.dev/articles/lcp) および [Total Blocking Time (TBT)](https://web.dev/articles/tbt) に関する現在のブラウザレンダリング目標は、ラボのような条件下で [20 RPS / 1k ユーザーのリファレンスアーキテクチャクラスの環境](https://docs.gitlab.com/ee/administration/reference_architectures/1k_users.html) に対して実行される [SiteSpeed](https://gitlab.com/gitlab-org/quality/performance-sitespeed) の結果に基づきます。この実行は毎晩行われ、結果は [GBPT プロジェクトの wiki](https://gitlab.com/gitlab-org/quality/performance-sitespeed/-/wikis/Benchmarks/SiteSpeed/1k) に出力されます。これらの目標は、[Developer Experience: Performance Enablement](/handbook/engineering/infrastructure-platforms/developer-experience/performance-enablement/) チームが所有しています。

### UX

#### UX バグ

UX 関連の一部の Issue は、私たちの [System Usability Scale (SUS) スコア](/handbook/product/ux/performance-indicators/system-usability-scale/) に影響を与えることが知られています。これは [3 年戦略](https://internal.gitlab.com/handbook/company/three-year-strategy/) における焦点です。特に `bug::ux` ラベルが*付いた* Issue を対象としています。これらの Issue には severity ラベルが適用され、`type::bug` Issue の [severity](/handbook/product-development/how-we-work/issue-triage/#severity) および [SLO](/handbook/product-development/how-we-work/issue-triage/#severity-slos) に従います。

#### Deferred UX

`~Deferred UX` とラベル付けされた Issue にも severity（および追加で [priority](#priority)）ラベルが、`~"type::bug"` ラベルを*伴わずに*適用されます。[Deferred UX](/handbook/engineering/workflow/#deferred-ux) は、洗練が必要なユーザー対面機能をリリースする決定の結果生まれます。その意図は、後続のイテレーションで改善することにあります。これは意図的な決定であるため、`~Deferred UX` は `~"severity::3"` より高い severity を持つべきではありません。なぜなら、[MVC](/handbook/values/#minimal-valuable-change-mvc) には明らかなバグや重大なユーザビリティの問題が意図的に含まれるべきではないからです。`~"severity::3"` より高い Deferred UX Issue を作成していることに気づいたら、その Issue を MVC に再統合することについてステージグループのチームと話し合ってください。

### 一時的なバグ

一時的なバグとは、同じアクションに対して常に発生するわけではない、予期しない意図せぬ振る舞いのことです。

一時的なバグは、ユーザーがアクションを起こしたときに何が起こっているかについて相反する印象を与え、一貫して発生しない場合があり、短期間しか続きません。これらのバグはユーザーのワークフローをブロックすることはあまりなく、通常はページ全体のリフレッシュで解決しますが、ユーザー体験に有害であり、プロダクトへの信頼を損ねる可能性があります。アクションを起こした後に表示されているデータが古いのか、新しいのか、あるいは更新されたのかさえ、ユーザーは不確かになることがあります。一時的な振る舞いの例には次のようなものがあります：

- "Apply Suggestion" ボタンをクリックしても、ページが適用された提案で更新されない
- クイックアクションで Issue のマイルストーンを更新しても、サイドバーが新しいマイルストーンを反映するように更新されない
- マージリクエストをマージしても、マージリクエストページが依然として "Open" として表示される

Issue を「一時的なバグ」として定義するには、`~"bug::transient"` ラベルを使用します。

### Infradev Issue

Issue に `infradev` ラベルが付与されている場合があり、これは [Infradev Engineering Workflow](/handbook/engineering/workflow/#infradev) で詳述される SaaS の可用性および信頼性に関連する専用プロセスに準拠していることを意味します。これらの Issue は、[確立されたバグの severity SLO](/handbook/product-development/how-we-work/issue-triage/#severity-slos) に従います。

### 制限関連のバグ

GitLab は、多くの大規模アプリケーションと同様に、特定の機能内で制限を強制しています。制限の欠如はセキュリティ、パフォーマンス、可用性に影響を与えうるため、制限に関連する Issue は `~"bug::availability"` サブカテゴリー内の `~"type::bug"` と見なされます。

Issue を制限に関連するものとして定義するには、`~"availability::limit"` および `~"bug::availability"` ラベルを追加します。

severity は次の表を使用して評価する必要があります：

| Severity | 可用性インパクト |
|-|-|
| `~"severity::1"` | この制限の欠如により、単一ユーザーが GitLab の可用性に悪影響を与えることが可能になる |
| `~"severity::2"` | この制限の欠如が、GitLab の可用性低下のリスクをもたらす |
| `~"severity::3"` | この制限の欠如が、コスト、パフォーマンス、または可用性を管理する能力に悪影響を与える |
| `~"severity::4"` | 制限を適用できるが、その欠如が可用性リスクをもたらすわけではない |

これらの Issue は、[確立されたバグの severity SLO](/handbook/product-development/how-we-work/issue-triage/#severity-slos) に従います。

## Issue のトリアージ

初期トリアージでは、（少なくとも）Issue に適切なラベルを付けます。これにより、トリアージされていない Issue はラベルのない Issue を検索することで見つけられます。

次のいずれかのリンクをたどってください：

- [GitLab](https://gitlab.com/gitlab-org/gitlab/-/issues?scope=all&utf8=%E2%9C%93&state=opened&label_name[]=None&assignee_id=None)
- [GitLab Omnibus](https://gitlab.com/gitlab-org/omnibus-gitlab/-/issues?scope=all&utf8=%E2%9C%93&state=opened&label_name[]=None&assignee_id=None)

Issue を 1 つ選び（リスト内で最も古いものを優先）、下の [Issue トリアージの慣行](#issue-triage-practices) を念頭に置いて、批判的な目で評価してください。自問するべきいくつかの質問：

- Issue が何を述べているか理解できますか？
- どんなラベルが該当しますか？ 特に [type、stage、severity](https://docs.gitlab.com/ee/development/labels/index.html) ラベルを考慮してください。
- どれほど重大に見えますか？ プロダクトまたはエンジニアリングマネージャー、もしくはセキュリティチームへエスカレーションする必要がありますか？
- `~"bug::vulnerability"` ラベルは適切でしょうか？
- 機密にすべきですか？ 通常は `~"bug::vulnerability"` Issue や、プライベート情報を含む Issue で機密にします。

該当しそうなラベルをそれぞれ適用してください。セキュリティへの影響がある Issue は特別に扱う必要があります。[セキュリティ開示プロセス](/handbook/support/channels/#security-disclosures) を参照してください。

Issue が不明瞭に見える場合 - 適用するラベルが確信できない場合 - 報告者に状況を明確にするよう依頼してください。
[ユーザーコミュニケーションガイドライン](/handbook/communication/#user-communication-guidelines) を常に念頭に置き、トリアージを完了するのに十分な情報を得られるまで会話を続けることをコミットしてください。

Issue がまだ有効かどうかを考慮してください。特に古い Issue では、`~"type::bug"` が報告以降に修正されている可能性があり、または `~"type::feature"` がすでに実装されている可能性があります。

他の Issue またはマージリクエストからのクロスリファレンスノートを必ず確認してください。それらは素晴らしい情報源です！
たとえば、クロスリファレンスされたマージリクエストを見ることで、「`8-13-stable` に Pick され、`8.13.6` に入る予定」というのを確認できる場合があります。これは、その Issue がバージョン `8.13.6` 以降に修正されていることを意味します。

Issue が要件を満たしている場合、[スケジューリングリクエスト](/handbook/engineering/workflow/#scheduling-issues) を行うことが適切な場合もあります - 判断を使ってください！

完了です！ Issue にはすべての適切なラベルが付き、現在バックログにあるか、クローズされているか、スケジューリングを待っているか、依頼者からのフィードバックを待っている状態です。時間があれば、別の Issue を選んでください。

## Issue トリアージの慣行 {#issue-triage-practices}

[triage-ops](https://gitlab.com/gitlab-org/quality/triage-ops) を使用して、[`@gitlab-bot`](https://gitlab.com/gitlab-bot) ユーザーによって一部のポリシーを自動的に強制しています。
自動トリアージの詳細については、[Triage Operations](/handbook/engineering/infrastructure-platforms/developer-experience/triage-operations/) を参照してください。

ただし、すべてを自動化することはできません。このセクションでは、手動で行っている慣行のいくつかを説明します。

### 共有責任 Issue

時折、責任を持つ group または stage を選ぶのが難しい Issue に遭遇することがあります。これらの Issue は、プロダクトの[共有責任機能](/handbook/product/categories/#shared-responsibility-functionality) と呼ばれるものに対処している可能性が高いです。

これらに対するアプローチは、分散型トリアージプロセスを使用することです。トリアージは単一のレポートやリストに集中化されず、それらの Issue をレビューする責任が 1 人の個人または group に課されることもありません。これにより、定期的に予定されるイベントとして対処するのではなく、継続的に共有責任カテゴリーに分類される可能性のある多数の Issue に対処するために、トリアージ運用をスケーリングできます。

目標は、グループレベル（プロダクトマネージャーおよび／またはエンジニアリングマネージャー）のリーダーシップに、これらの Issue を誰が、いつ、どのように対処すべきかについての決定権を委ねることです。上位の管理職と group は、優先順位の競合により行動方針を決定するのが難しい場合に、エスカレーションに対処し決定を下すバックアップとして機能します。

#### 初期トリアージ

これらの Issue の 1 つをトリアージしている場合は、作成後できるだけ早く Issue に group ラベルを割り当てるために最善を尽くしてください。完璧である必要はありませんが、Issue に取り組む上で最も成功に向けて設定されている group を意識的に特定する努力をしてください。

group を選ぶときは、自問できる質問は次のとおりです：

- group はこの領域をプロダクトカテゴリーに直接リストしていますか？
- group は当該 Issue の基盤技術と関わっていますか？
- 過去に類似の作業を行ったことがありますか？
- 同様の横断的機能に定期的に関与する基礎的な group ですか？
- 影響を受けるファイルを特定し、git blame を使用して最後の変更の作成者を確認できますか？
- ファイルの Code Owner を特定できますか？

可能な group のリストを最初に絞り込むのに役立てるため、[Product Categories](/handbook/product/categories/) ページまたは [Stage Groups Ownership Index](https://gitlab-com.gitlab.io/gl-infra/platform/stage-groups-index/) ページを確認してください。

いずれの場合も、必要に応じて作成者にフォローアップの質問をすることで Issue の性質を理解しようとし、その後、要件を必要なスキルまたは専門知識に最もマッチする group にマッピングする必要があります。

#### 二次トリアージ

二次トリアージは、Issue がすでに group に割り当てられた後に発生します。その group 内の誰か（通常は PM または EM）が、優先順位付けおよび／または見積もりのために Issue を評価しているときです。このトリアージを行う場合は、次の行動方針のいずれかをとります：

1. その Issue が確実に自分の group のカテゴリー内に該当すると判断した場合は、内部のトリアージ手順に従ってください。
1. その Issue が確実に別の group のプロダクトカテゴリーに該当すると思う場合は、その他の group の EM または PM を Issue 上のコメントスレッドで非同期に ping してください。あなたの推論を説明し、なぜ彼らの所掌に該当すると考えるのかを説明し、オーナーシップを取るよう依頼してください。彼らがあなたのコメントを見て、Issue を引き受けるのにより適していると同意したときに、**彼らがラベルを更新する**ようにしてください。
1. Issue が共有責任カテゴリーに該当すると思う場合は、まず自分のチームが Issue にコントリビュートし、完了まで見届ける担当者になることを慎重に検討してください。ただし、自分のチームがスキルを持っていない、または必要な知識とスキルをタイムリーに身につけて Issue にコントリビュートすることができないと考える場合は、他により適した group（または自分の group が一緒に機能を提供するために協力できる group）を特定するよう試みてください。その時点で、彼らと会話を始め、Issue が明確なオーナーを持つまで、さらなるトリアージを調整してください。あるいは、このトリアージプロセスを通じて、その Issue を追求する価値がないことを集合的に決定する場合もあります（たとえば、その価値と労力を考慮して）。その場合は、必ず Issue をクローズし、決定の明確な根拠を提供してください。

トリアージを進める中で、Issue の価値、severity、priority、または group の所掌について、あなたと EM/PM のピアが合意できない場合、より高いレベル（シニアマネジメント、ディレクター以上）に Issue をエスカレーションする時期を判断する判断力を発揮してください。今のところ、エスカレーションする方法は柔軟であり、状況に応じて適切なコミュニケーションチャンネルと様式を選択できます。

DRI として、影響を受ける領域の継続的なサポートを担保するために、追加のステップを検討する必要があります。これには、問題のコンポーネントについて継続的な責任と技術戦略を引き継げる新しいプラットフォーム group の作成を提案することが含まれる場合があります。もちろん、これはあなたの group に割り当てられた Issue に対して即座にアクションを起こす必要性を排除するものではありません。

トリアージプロセスの結果として、ある group が永続的にオーナーシップを取る資格があり、それを希望していると特定された場合、プロダクトおよびエンジニアリングリーダーは、オーナーシップモデルのタイプとチームを、Development ハンドブックの[共有サービスコンポーネント](/handbook/company/infrastructure-standards/realms/infra-shared-services/) セクションに正式に文書化すべきです。複数の group が同じコンポーネントのオーナーシップを永続的に共有することも、適切と判断される場合は可能です。

このプロセス全体を通じて、group のリーダーとして、Issue が解決されるまで、または他の誰かが引き継ぐことに同意するまで、あなたが初期の Directly Responsible Individual（[DRI](/handbook/people-group/directly-responsible-individuals/)）と見なされることを念頭に置くことが重要です。他の group とのさらなるトリアージの議論なしに単に group ラベルを外すことは、このプロセスで受け入れられる、または役立つアクションではありません。これは、[Results: global optimization](/handbook/values/#efficiency-for-the-right-group) という私たちのバリューと一致しています。

### 古い Issue

過去 3 か月間更新されていない Issue には、"Awaiting Feedback" ラベルを Issue に追加すべきです。14 日後、Issue で誰からも応答がない場合、Issue をクローズすべきです。これは、古い Issue に関する Rails Core ポリシーをわずかに修正したバージョンです。

将来のいつでも応答があった場合、Issue は再オープンを検討できます。最近の GitLab バージョンで Issue がまだ存在することを確認できない場合、私たちは Issue トラッカーにノイズを追加しているだけです。

### 重複 {#duplicates}

重複を見つけるには：

- Issue 対象のプロジェクトの Issue トラッカーを開きます。
- Issue から関連するキーワードを入力します。
- 結果リストの最初のページをスキャンします。
- オープンおよびクローズ済みの Issue の両方を確認します。

より良いタイトル、説明、またはより多くのコメントとポジティブな反応を持つ Issue を正規バージョンとして使用してください。決められない場合は、より古い Issue を残してください。

#### サポート Issue メッセージ {#support-issue-message}

Issue が本当にヘルプを求めるサポートリクエストである場合、`Issue triage - support question` [コメントテンプレート](https://docs.gitlab.com/ee/user/profile/comment_templates) を使用できます。

#### 重複 Issue メッセージ {#duplicate-issue-message}

重複を見つけた場合、次のメッセージを投稿できます：

```md
Hey {{author}}! Thanks for submitting this issue. It looks like a duplicate of {{issue}}. I'm marking your issue as a duplicate and close it.
Please add your thoughts and feedback on {{issue}}. Don't forget to upvote feature proposals.

/duplicate {{issue}}
```

重複 Issue が割り当てられている可能性があるマイルストーンターゲットについて、前向きな発言はしないでください。

### クローズに傾く

私たちは全員を満足させることはできません。ユーザーをできるだけ喜ばせることと、プロジェクトを保守可能に保つことのバランスを取る必要があります。

- Issue が再現手順またはバージョン情報のないバグ報告である場合は、Issue をクローズし、報告者にさらに情報を提供するよう依頼してください。
- ある機能／変更を間違いなく追加しないつもりであれば、そう述べて Issue をクローズしてください。

### 入ってきたら Issue にラベルを付ける

Issue が入ってきたら、トリアージしてラベルを付けるべきです。ラベルのない Issue は見つけにくく、しばしば失われます。

severity ラベルには注意してください。severity を過小評価すると、解決を本来よりも遅らせてもよいと示唆することで、問題を悪化させる可能性があります。利用可能な
[Severity](#severity) ラベルを確認してください。バグの正しいラベルが確信できない場合は、severity を過大評価しても大丈夫です。ただし、[ドメインエキスパート](/handbook/engineering/workflow/code-review/#domain-experts) から確認を得てください。

### 自分が開いた Issue のオーナーシップを取る

"Author: your username" でソートし、すでに修正されている、または他の理由で関係なくなったとわかっている Issue をすべてクローズします。まだラベルが付いていない場合はラベルを付けます。

### プロダクトフィードバック Issue

一部の Issue は [type ラベル](https://docs.gitlab.com/ee/development/labels/index.html#type-labels) には該当しないかもしれませんが、GitLab 機能の使用方法に関する有用なフィードバックを含んでいます。
これらの Issue はプロダクトマネージャーに言及し、group、category、stage ラベルに加えて `~"Product Feedback"` としてラベル付けする必要があります。
<https://gitlab.com/gitlab-org/gitlab/-/issues/324770> は、プロダクトフィードバック Issue の例です。

### 質問／サポート Issue

質問、または何らかの理由で開発チームが対処できない曖昧な内容である場合は、クローズし、関連するサポートリソース（<https://about.gitlab.com/get-help/>、Discourse フォーラム、サポートへのメールなど）に案内します。

### 新しいラベル

さまざまな Issue に共通するパターンに気づいた場合（たとえば、専用のラベルがまだない新機能など）、Slack または新しい Issue で新しいラベルの追加を提案してください。

### Issue の再現

可能であれば、報告者に GitLab.com 上のパブリックプロジェクトで Issue を再現するよう依頼してください。[issue-reproduce group](https://gitlab.com/issue-reproduce) で自分で行うこともできます。その group のオーナーであれば誰でもアクセス許可を依頼できます。

## 注記

これらのポリシーに関する元の Issue は [#17693](https://gitlab.com/gitlab-org/gitlab-ce/issues/17693) です。今後、GitLab 内部から状況を改善していきます。

これらのポリシーを作成するにあたり、以下のプロジェクト、リソース、ブログ記事が非常に役立ちました：

- [CodeTriage](https://www.codetriage.com/)
- [How to be an open source gardener](https://steveklabnik.com/writing/how-to-be-an-open-source-gardener)
- [Managing the Deluge of Atom Issues](https://web.archive.org/web/20221129082058/https://blog.atom.io/2016/04/19/managing-the-deluge-of-atom-issues.html)
- [Handling Large OSS Projects Defensively](https://artsy.github.io/blog/2016/07/03/handling-big-projects/)
- [My condolences, you're now the maintainer of a popular open source project](https://danielbachhuber.com/my-condolences-youre-now-the-maintainer-of-a-popular-open-source-project/)
- [The Art of Closing](https://blog.jessfraz.com/post/the-art-of-closing/)
