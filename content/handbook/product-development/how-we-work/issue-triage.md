---
title: Issue Triage
description: "GitLab.com プロジェクトにおける Issue のトリアージとラベル付けのガイドライン"
upstream_path: /handbook/product-development/how-we-work/issue-triage/
upstream_sha: 877082e5cd4baeabe3d6e802b3b4b1efdb6573f1
translated_at: "2026-05-23T00:00:00Z"
translator: claude
stale: false
lastmod: "2026-05-22T14:47:44+02:00"
---

GitLab は [Open Development](https://about.gitlab.com/blog/2015/12/16/improving-open-development-for-everyone/) を信じており、[GitLab.com](https://gitlab.com/groups/gitlab-org) 上のプロジェクトに対してコミュニティが Issue を立て、マージリクエストを開くことを推奨しています。コミュニティのコントリビューションは貴重であり、私たちはできるだけ効果的に対応すべきです。その中心にあるのがトリアージ、すなわちタイプと深刻度に応じた分類のプロセスです。

どの GitLab チームメンバーでも Issue をトリアージできます。トリアージされていない Issue の数を少なく保つことはメンテナンス性にとって不可欠であり、私たちの集団的な責任です。他の責務の合間に Issue をいくつかトリアージするか、定期的にそのための時間を確保することを検討してください。

## 部分トリアージ

現時点では、グループラベルのない Issue を手動でトリアージするための十分なキャパシティがありません。
私たちは、タイプとグループのラベルを適用するために、セルフトリアージと [AI トリアージ](https://gitlab.com/gitlab-org/quality/triage-ops/-/blob/c003f65c94ff55a6b43c0b5c8c8ac0173618c0a5/policies/stages/report/untriaged-issues.yml)の組み合わせに依存しています。

### 部分トリアージのチェックリスト

- Issue がスパムである場合:
  - [Issue を報告する](https://docs.gitlab.com/ee/user/report_abuse.html#report-abuse-from-an-issue)。
  - Issue を confidential にする。
  - `#abuse` Slack チャンネルに Issue へのリンクを投稿する。
- Issue がヘルプのリクエストである場合:
  - [サポートメッセージ](#support-issue-message)を投稿し、Issue をクローズする。
  - あるいは、追加情報を求めて ~"awaiting feedback" ラベルを適用する。
- Issue が[重複](#duplicates)である場合:
  - [重複メッセージ](#duplicate-issue-message)を投稿する。
  - `/duplicate` アクションを呼び出して元の Issue へのリンクを作成し、Issue をクローズする。
- [タイプラベル](#type-labels)を割り当てる。
  - Issue がバグなのかサポートリクエストなのか不明確な場合は、[グループ](#group-labels)の PM/EM をタグ付けして意見を求める。
- `~"type::bug"`: [深刻度ラベル](#severity)を割り当てる。
  - ~"severity::1" または ~"severity::2" の場合: [グループ](#group-labels)の PM/EM をメンションする。
- [グループラベル](#group-labels)を割り当てる。
  - 適切なグループラベルがない場合: [ステージ（"devops"）ラベル](https://docs.gitlab.com/ee/development/labels/index.html#stage-labels)を割り当てる。
  - Issue が今後 18 か月以内の解決を計画されている場合は [`~"backlog::prospective label"`](https://gitlab.com/groups/gitlab-org/-/epics/18639) を割り当てる。それ以外の場合は [`~"backlog::no-commitment"`](https://gitlab.com/groups/gitlab-org/-/epics/18639) を割り当てる。
- 任意で、関連する[ドメインエキスパート](/handbook/company/structure/#expert)をタグ付けする。

## 完全トリアージ

以下の基準がすべて満たされたとき、Issue は完全にトリアージされたとみなされます。

- 部分的にトリアージされている。
- マイルストーンが設定されている。
- `~"type::bug"`、`~"Deferred UX"`、または [`~"backlog::triage"`](https://gitlab.com/groups/gitlab-org/-/epics/18639) ラベルが付いた Issue には、[優先度ラベル](https://docs.gitlab.com/ee/development/labels/index.html#priority-labels)が適用されている。

## タイプラベル

タイプラベルは [Engineering Metrics ページ](/handbook/product/groups/product-analysis/engineering/metrics/#work-type-classification)で定義されています。
タイプについて不明な場合は、[グループ](#group-labels)のプロダクトマネージャーまたはエンジニアリングマネージャーをタグ付けして意見を求めることができます。

## グループラベル

[グループラベル](https://docs.gitlab.com/ee/development/labels/index.html#group-labels)を割り当てると、`gitlab-bot` が正しいステージとセクションのラベルを自動的に割り当てられるようになります。
[Features by Group](/handbook/product/categories/features) の一覧は、正しいグループを見つけるのに役立ちます。

## 優先度

優先度ラベルは、Issue の重要性を示し、スケジューリングを導くために使用されます。優先度ラベルは、市場の状況、プロダクトの方向性、IACV への影響、影響を受けるユーザー数、チームのキャパシティに基づいて設定されることが期待されます。優先順位付けの [DRI](/handbook/people-group/directly-responsible-individuals/) は[ワークタイプに基づいて](/handbook/product/product-processes/cross-functional-prioritization/#prioritization-and-dri-by-component)決まります。

| 優先度 | 重要性 | 意図 | DRI |
| -------- | ---------- | --------- | --- |
| `~"priority::1"` | Urgent | チームのキャパシティの制限にかかわらず、できるだけ早く対処します。私たちの目標解決時間は 30 日です。                 | ワークタイプに基づく、その製品グループの PM または EM |
| `~"priority::2"` | High   | 近いうちに対処し、今後数リリースのうちにチームからキャパシティを提供します。これはおそらく 60 〜 90 日で解決されます。 | ワークタイプに基づく、その製品グループの PM または EM |
| `~"priority::3"` | Medium | 対処したいですが、他により優先度の高い項目があるかもしれません。これはおそらく 90 〜 120 日で解決されます。                               | ワークタイプに基づく、その製品グループの PM または EM |
| `~"priority::4"` | Low    | これがいつ対処されるかの見通しはありません。タイムラインは指定されていません。                                          | ワークタイプに基づく、その製品グループの PM または EM |

## 深刻度

深刻度の見積もりに助けが必要な場合は、`#s_developer_experience` チャンネルで連絡してください。

注: これらの深刻度の定義は Issue のみに適用されます。インシデントの深刻度の詳細については、[Incident Management ページ](/handbook/engineering/infrastructure-platforms/incident-management/)の [Severity Levels セクション](/handbook/engineering/infrastructure-platforms/incident-management/#severities)を参照してください。

[深刻度ラベル](https://docs.gitlab.com/ee/development/labels/index.html#severity-labels)は、緊急性を判断し、`~"type::bug"` および `~"type::maintenance"` がユーザーに与える影響を明確に伝えるのに役立ちます。1 つのタイプには複数のカテゴリがあり得ます。

バグの場合、バグカテゴリラベル `~"bug::availability"`、`~"bug::performance"`、`~"bug::vulnerability"`、`~UX` の存在は、そのカテゴリの深刻度の定義を使用することを示します。`~"type::bug"` が複数のカテゴリに対応する場合、適用すべき深刻度はより高いものにすべきです。例えば、Issue が `~"bug::availability"` で `~"severity::2"`、`~"bug::performance"` で `~"severity::1"` を持つ場合、その Issue に割り当てる深刻度は `~"severity::1"` にすべきです。
メンテナンス Issue の場合、[`~"backlog::triage"`](https://gitlab.com/groups/gitlab-org/-/epics/18639) の存在は、深刻度の定義を指定しなければならないことを示します。

Issue の深刻度を決定したら、なぜその深刻度を選んだのかを要約して説明するノートを追加してください。これにより、将来のチームメンバーがあなたの根拠を理解し、Issue への対処をどのように進めればよいかがわかります。

| `~"type::bug"` のタイプ                                                                 | `~"severity::1"`: Blocker                                                                                                                              | `~"severity::2"`: Critical                                                                                                                             | `~"severity::3"`: Major                                                                                                                                                | `~"severity::4"`: Low                                                                                                                                  | トリアージ DRI                                                                                                                  |
|----------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------|
| 一般的なバグ                                                                           | 回避策のない壊れた機能、またはデータ損失。                                                                                                    | 受け入れがたいほど複雑な回避策を伴う壊れた機能。                                                                                                | 回避策のある壊れた機能。                                                                                                                                      | 機能が不便である。                                                                                                                         | その製品グループの[エンジニアリングマネージャー](/handbook/engineering/careers/management/)。                                                      |
| `~"bug::performance"` レスポンスタイム <br> (API/Web/Git)[^1]                             | 9000ms を超えてタイムアウトまで                                                                                                                             | 2000ms から 9000ms の間                                                                                                                              | 1000ms から 2000ms の間                                                                                                                                              | 200ms から 1000ms の間                                                                                                                               | [Performance Enablement group](/handbook/engineering/infrastructure-platforms/developer-experience/performance-enablement/) |
| `~"bug::performance"` ブラウザレンダリング <br> ([LCP](https://web.dev/articles/lcp))[^2] | 9000ms を超えてタイムアウトまで                                                                                                                             | 4000ms から 9000ms の間                                                                                                                              | 3000ms から 4000ms の間                                                                                                                                              | 3000ms から 2500ms の間                                                                                                                              | [Performance Enablement group](/handbook/engineering/infrastructure-platforms/developer-experience/performance-enablement/) |
| `~"bug::performance"` ブラウザレンダリング <br> ([TBT](https://web.dev/articles/tbt))[^2] | 9000ms を超えてタイムアウトまで                                                                                                                             | 2000ms から 9000ms の間                                                                                                                              | 1000ms から 2000ms の間                                                                                                                                              | 300ms から 1000ms の間                                                                                                                               | [Performance Enablement group](/handbook/engineering/infrastructure-platforms/developer-experience/performance-enablement/) |
| `~bug::ux` ユーザーエクスペリエンスの問題 [&sup3;](#ux)                                       | 「これがどうしてもわからない。」使い勝手の悪さのためにユーザーがブロックされる、および/またはリスクのある誤りを犯しやすく、サポートを求める可能性が高い。              | 「なぜこれが起きているかはわかるが、解決するのが本当に大変だ。」利用可能な回避策によってユーザーが大幅に遅延する。               | 「これでもまだ動くが、自分のプロセスに小さな変更を加えなければならない。」回避策を使ってユーザーは自力でタスクを完了できるが、多少遅延する場合がある。 | 「小さな不便さまたは不整合がある。」使い勝手が理想的でない、または小さな見た目の問題がある。                                           | その製品グループの [Product Designer](/handbook/product/ux/product-design/)                                             |
| GitLab SaaS の `~"bug::availability"`                                                  | [Availability セクション](#availability)を参照                                                                                                              | [Availability セクション](#availability)を参照                                                                                                              | [Availability セクション](#availability)を参照                                                                                                                              | [Availability セクション](#availability)を参照                                                                                                              |                                                                                                                             |
| `~"bug::vulnerability"` セキュリティ脆弱性                                         | [Vulnerability Remediation SLAs](/handbook/security/product-security/vulnerability-management/sla/) を参照                                                | [Vulnerability Remediation SLAs](/handbook/security/product-security/vulnerability-management/sla/) を参照                                                | [Vulnerability Remediation SLAs](/handbook/security/product-security/vulnerability-management/sla/) を参照                                                                | [Vulnerability Remediation SLAs](/handbook/security/product-security/vulnerability-management/sla/) を参照                                                | AppSec チーム                                                                                                                 |
| Global Search                                                                          | [Search Prioritization](/handbook/engineering/ai/search/#severity-labels-for-search-issues-advanced-search-global-search) を参照 | [Search Prioritization](/handbook/engineering/ai/search/#severity-labels-for-search-issues-advanced-search-global-search) を参照 | [Search Prioritization](/handbook/engineering/ai/search/#severity-labels-for-search-issues-advanced-search-global-search) を参照                 | [Search Prioritization](/handbook/engineering/ai/search/#severity-labels-for-search-issues-advanced-search-global-search) を参照 |                                                                                                                             |
| エンドツーエンドのテスト実行をブロックする `~test` バグ                                        | [Blocked tests セクション](#blocked-tests)を参照                                                                                                            | [Blocked tests セクション](#blocked-tests)を参照                                                                                                            | [Blocked tests セクション](#blocked-tests)を参照                                                                                                                            | [Blocked tests セクション](#blocked-tests)を参照                                                                                                            | [Developer Experience stage](/handbook/engineering/infrastructure-platforms/developer-experience/)                          |
| `~GitLab.com Resource Saturation` キャパシティプランニングの警告                           | 平均予測が 3 か月以内に Hard SLO 違反を示している。                                                                                                   |                                                                                                                                                        |                                                                                                                                                                        |                                                                                                                                                        | Scalability Engineering Manager（リソースを所有する EM に引き継ぐ）                                           |

すべての `~"type::bug"` Issue には、以下のいずれかが必要です。

1. 6 か月ごとの更新を伴う [`~"backlog::prospective"`](https://gitlab.com/groups/gitlab-org/-/epics/18639)。該当する場合は SLO を過ぎてもオープンのままである理由の正当化を含む。
1. 正当化を伴う [`~"backlog::no-commitment"](https://gitlab.com/groups/gitlab-org/-/epics/18639)`。
1. 修正なしでクローズされる理由の正当化。

### 深刻度 SLO

深刻度ラベルは、以下のラベルが付いた Issue の完了時間を定義するのにも役立ちます。

- `~"type::bug"`
- `~"type::maintenance"`
- `~"infradev"`

これは、私たちの SLO 目標を測定するために使用される、期待されるタイムラインと緊急性を示します。

| **深刻度**   |  `~infradev` SLO | `~"type::bug"` 解決 SLO | `~"GitLab.com Resource Saturation"` 解決 SLO | セキュリティ `~vulnerability` SLO |
|----------------|---------|--------------------------------------------------------------------------------| ----|-----|
| `~"severity::1"` | 1 週間  | 現在のリリース + GitLab.com への次に利用可能なデプロイ（30 日以内） | 2 か月以内 | [Vulnerability Remediation SLAs](/handbook/security/product-security/vulnerability-management/sla/) を参照 |
| `~"severity::2"` | 30 日 | 次のリリース（60 日）                                                   |  | [Vulnerability Remediation SLAs](/handbook/security/product-security/vulnerability-management/sla/) を参照  |
| `~"severity::3"` | 60 日 | 次の 3 リリース以内（約 1 四半期または 90 日） |  | [Vulnerability Remediation SLAs](/handbook/security/product-security/vulnerability-management/sla/) を参照 |
| `~"severity::4"` | 90 日 | 次の 3 リリースより後のもの（1 四半期または 120 日を超える）。    |  |  [Vulnerability Remediation SLAs](/handbook/security/product-security/vulnerability-management/sla/) を参照  |

#### 深刻度レベルの例

Issue が 2 つの深刻度ラベルの間に入るように見える場合は、より高い深刻度ラベルを割り当ててください。

- `~"severity::1"` の例
  - データの破損/損失。
  - セキュリティ侵害。
  - Issue またはマージリクエストを作成できない。
  - Issue またはマージリクエストにコメントやスレッドを追加できない。
  - メッセージが本来は情報提供であるべきところで、（ブロッカーのように見える）エラーメッセージが表示される。
  - UI 内の不明確な指示が不可逆的な変更につながる。
- `~"severity::2"` の例
  - Web IDE を通じて変更を送信できないが、コマンドラインは機能する。
  - マージリクエストページのステータスウィジェットが機能していないが、テストパイプラインページで情報を確認できる。
  - 回避策は利用可能だが、[Rails console](https://docs.gitlab.com/ee/administration/operations/rails_console.html) の使用が必要で、受け入れがたいほど複雑である。
- `~"severity::3"` の例
  - Issue ページからではなく、Merge Requests のリストビューからのみマージリクエストを作成できる。
- `~"severity::4"` の例
  - 不正確な色。
  - 位置のずれ。

## クローズされた Issue の再評価

Issue のトリアージ担当者として、あなたは後で浮上する追加情報に基づいて自分の判断を調整する責任があります。
そのためには、自分がクローズした Issue のその後の活動を追跡し、必要に応じて判断を調整してください。

## Availability

`~"bug::availability"` ラベルが付いた Issue は、GitLab SaaS（GitLab.com または GitLab Dedicated Tenant）の可用性に直接影響します。これは `~"type::bug"` の別のカテゴリとみなされます。

[Incident Management](/handbook/engineering/infrastructure-platforms/incident-management/) の目的のために、インシデント Issue の深刻度は以下の `availability` 深刻度マトリックスに基づいて選択されます。

私たちは、顧客のビジネス目標と日々のワークフローへの影響に基づいてこれらの Issue を分類します。

優先順位付けスキームは、セキュリティと可用性の作業が機能の速度よりも優先される、私たちの[プロダクト優先順位付け](/handbook/product/product-processes/#prioritization)に準拠しています。

これらの深刻度ラベルの存在は、主にユーザーへの影響を考慮することによって、標準の深刻度ラベル（`~"severity::1"`、`~"severity::2"`、`~"severity::3"`、`~"severity::4"`）を修正します。これらの Issue の深刻度は、GitLab.com ユーザーへの影響の再分析に応じて変わる場合があります。

| 深刻度 | 可用性への影響 | 軽減までの時間 (TTM)(1) | 解決までの時間 (TTR)(2) | 最小優先度 |
|-|-|-|-|-|
| `~"severity::1"` | 典型的なユーザーのワークフローをブロックする GitLab SaaS の問題<br/><br/>利用可能な回避策なしで、GitLab.com または Dedicated のテナントのユーザーの 20% 以上に影響する<br/><br/>**AND/OR**<br/><br/>[保証された self-managed リリース日](/handbook/engineering/releases/monthly-releases/#timelines)をリスクにさらすあらゆる障害（~backstage ラベルを使用）<br /><br/>**AND/OR**<br/><br/>顧客に直接影響するあらゆるデータ損失 <br/>**AND/OR**<br/> 新規顧客のオンボーディング能力を妨げる、SaaS 上での繰り返されるインシデントを引き起こす | 8 時間以内 | 48 時間以内 | `~"priority::1"` |
| `~"severity::2"` | 典型的なユーザーのワークフローをブロックする GitLab SaaS の問題<br/><br/>GitLab.com または Dedicated のテナントのユーザーの 20% 以上に影響するが、合理的な回避策が利用可能。<br/><br/>利用可能な回避策なしで、GitLab.com または Dedicated のテナントのユーザーの 5% 〜 20% に影響する | 24 時間以内 | 7 日以内 |  `~"priority::1"` |
| `~"severity::3"` | GitLab SaaS への広範な影響と、典型的なユーザーのワークフローへの軽微な不便。回避策は不要。<br/><br/>GitLab.com または Dedicated のテナントのユーザーの最大 5% に影響する| 72 時間以内 | 30 日以内 | `~"priority::2"` |
| `~"severity::4"` | GitLab.com または Dedicated のテナントのユーザーの 5% 未満に対する、GitLab SaaS の典型的なユーザーのワークフローへの最小限の影響 <br/><br/>影響はないが、将来のリスクを防ぐために解決することが重要なインシデントも含む場合がある| 7 日以内 | 60 日以内 | `~"priority::3"` |

(1) - 軽減は、ホットパッチ、重要なコードと構成の変更など、非標準の作業プロセスを使用します。Infrastructure 部門が所有し、利用可能なエスカレーションプロセス（dev-escalation など）を活用します。

(2) - 解決は、コードレビューなど、標準の作業プロセスを使用します。スケジューリングは、定義された SLO 目標の範囲内で Product 部門が所有します。

### Availability の優先順位付け

Availability Issue の優先度は、以下のように深刻度に結びついています。

| 以下のラベルが付いた Issue  | 許可される優先度 | **許可されない優先度** |
|-|-|-|
| `~"bug::availability"` `~"severity::1"`  | `~"priority::1"` のみ | `~"priority::2"`、`~"priority::3"`、`~"priority::4"` |
| `~"bug::availability"` `~"severity::2"`  | `~"priority::1"` のみ | `~"priority::2"`、`~"priority::3"`、`~"priority::4"` |
| `~"bug::availability"` `~"severity::3"`  | `~"priority::2"` をベースラインとし、`~"priority::1"` を許可 | `~"priority::3"`、`~"priority::4"` |
| `~"bug::availability"` `~"severity::4"`  | `~"priority::3"` をベースラインとし、`~"priority::2"` と `~"priority::1"` を許可 | `~"priority::4"` |

### マージリクエストエクスペリエンス

マージリクエスト (MR) エクスペリエンスは、私たちの製品の中核です。多くのチームが MR ワークフローのコンポーネントにコントリビュートしているため、ちぐはぐな体験になってしまっています。

重複は主に以下の領域で見られます: Merge Request Widgets、Mergeability Checks、MWPS、Merge Trains。

[Transient Bug ワーキンググループ](/handbook/company/working-groups/transient-bugs/)での分析の一環として、最も影響を受けている上位の製品領域は以下であることがわかりました。

1. `create::code review`
1. `verify::continuous integration`
1. `create::source code`（同率）
1. `plan::project management`（同率）

これらの製品グループは GMAU への感度も高いです。これらの製品グループは、マージリクエスト機能と重複するバグに対する認識を高めることで恩恵を受けます。

#### マージリクエストエクスペリエンスの優先順位付け

この領域では、アクションへの意識を高める必要があります。バグがマージリクエストエクスペリエンスに関連する場合は、`~UX` `~merge requests` ラベルを付けるべきです。
優先度は、以下のように深刻度に結びついています。

| MR UX バグの深刻度 | 許可される優先度 | **許可されない優先度** |
|-|-|-|
| `~"severity::1"` | `~"priority::1"` のみ | `~"priority::2"`、`~"priority::3"`、`~"priority::4"` |
| `~"severity::2"` | `~"priority::1"` のみ | `~"priority::2"`、`~"priority::3"`、`~"priority::4"` |
| `~"severity::3"` | `~"priority::1"` または `~"priority::2"` | `~"priority::3"`、`~"priority::4"` |
| `~"severity::4"` | `~"priority::1"` または `~"priority::2"` または `~"priority::3"` | `~"priority::4"` |

### Blocked tests

実行されないエンドツーエンドのテストは、予期しない可用性の問題を引き起こす可能性がある盲点につながります。
私たちは、隔離されたエンドツーエンドのテストを引き起こす Issue を迅速に解決することで、カバレッジが安定してアクティブであることを確保しなければなりません。

#### Blocked tests の優先順位付け

エンドツーエンドのテスト実行をブロックするバグへの認識を促すため、新しく開かれた ~test ~"type::bug" Issue は、いくつかの Slack チャンネルでアナウンスされます。

- エンドツーエンドのテスト実行をブロックする新しく開かれたバグはすべて、[#quality](https://gitlab.slack.com/archives/C3JJET4Q6) チャンネルでアナウンスすべきです。
- エンドツーエンドのテスト実行をブロックする、製品バグである新しく開かれたバグは、適切な EM と PM をタグ付けして、[#development](https://gitlab.slack.com/archives/C02PF508L) と [#vp-development](https://gitlab.slack.com/archives/CRC0B18UX) チャンネルでもアナウンスすべきです。

優先度は、以下のように深刻度に結びついています。

| ブロックされたテストのタイプ | バグの深刻度 | 許可される優先度 | **許可されない優先度** |
|-|-|-|-|
| Smoke エンドツーエンドテスト | `~"severity::1"` | `~"priority::1"` のみ | `~"priority::2"`、`~"priority::3"`、`~"priority::4"` |
| Non-smoke エンドツーエンドテスト | `~"severity::2"` | `~"priority::2"` をベースラインとし、`~"priority::1"` を許可 | `~"priority::3"`、`~"priority::4"` |

### Performance

**パフォーマンスの改善**: 意図したレスポンスタイムに 1 イテレーションで到達することはできないかもしれません。
私たちは、パフォーマンスの改善を分割することを推奨します。できるところで改善し、新しいレスポンスタイムに基づいて次の適切なレベルの深刻度と優先度を再評価してください。

[^1]: API、Web Controller、Git 呼び出しに対する私たちの現在のレスポンスタイム目標は、ラボのような条件下で [200 RPS / 10k User reference architecture class environment](https://docs.gitlab.com/ee/administration/reference_architectures/10k_users.html) に対して実行された [GitLab Performance Tool (GPT)](https://gitlab.com/gitlab-org/quality/performance) の TTFB P90 結果に基づいています。この実行は毎晩行われ、結果は [Reference Architecture project wiki](https://gitlab.com/gitlab-org/quality/performance/-/wikis/Benchmarks/Latest/10k) に出力されます。これらの目標は [GitLab Delivery: Operate](/handbook/engineering/infrastructure-platforms/gitlab-delivery/operate/) チームが所有しています。

[^2]: [Largest Contentful Paint (LCP)](https://web.dev/articles/lcp) と [Total Blocking Time (TBT)](https://web.dev/articles/tbt) に対する私たちの現在のブラウザレンダリング目標は、ラボのような条件下で [20 RPS / 1k User reference architecture class environment](https://docs.gitlab.com/ee/administration/reference_architectures/1k_users.html) に対して実行された [SiteSpeed](https://gitlab.com/gitlab-org/quality/performance-sitespeed) の結果に基づいています。この実行は毎晩行われ、結果は [GBPT プロジェクトの wiki](https://gitlab.com/gitlab-org/quality/performance-sitespeed/-/wikis/Benchmarks/SiteSpeed/1k) に出力されます。これらの目標は [Developer Experience: Performance Enablement](/handbook/engineering/infrastructure-platforms/developer-experience/performance-enablement/) チームが所有しています。

### UX

#### UX バグ

一部の UX 関連の Issue は、私たちの[システムユーザビリティスケール (SUS) スコア](/handbook/product/ux/performance-indicators/system-usability-scale/)に影響することが知られており、これは私たちの[3 か年戦略](https://internal.gitlab.com/handbook/company/three-year-strategy/)における焦点です。私たちは特に `bug::ux` ラベルが *付いた* Issue を対象とします。これらの Issue には深刻度ラベルが適用され、`type::bug` Issue の[深刻度](/handbook/product-development/how-we-work/issue-triage/#severity)と [SLO](/handbook/product-development/how-we-work/issue-triage/#severity-slos)に従います。

#### Deferred UX

`~Deferred UX` とラベル付けされた Issue にも、付随する `~"type::bug"` ラベル *なしで* 深刻度（さらに[優先度](#priority)）ラベルが適用されます。[Deferred UX](/handbook/engineering/workflow/#deferred-ux) は、改良が必要なユーザー向け機能を、後続のイテレーションで改善する意図を持ってリリースするという決定から生じます。これは意図的な決定であるため、`~Deferred UX` は `~"severity::3"` より高い深刻度を持つべきではありません。なぜなら、[MVC](/handbook/values/#minimal-valuable-change-mvc) は明白なバグや重大なユーザビリティの問題を意図的に持つべきではないからです。`~"severity::3"` より高い Deferred UX Issue を作成していることに気づいた場合は、その Issue を MVC に再び組み込むことについてステージグループのチームと話し合ってください。

### Transient bug

transient bug（一時的なバグ）とは、同じアクションに対して常に発生するわけではない、予期しない意図しない動作です。

transient bug は、ユーザーがアクションを取ったときに何が起こっているのかについて矛盾した印象を与え、一貫して発生しないことがあり、短期間しか続きません。これらのバグはユーザーのワークフローをブロックしないことがあり、通常はページ全体の再読み込みで解決されますが、ユーザーエクスペリエンスに悪影響を与え、製品への信頼の欠如を生み出す可能性があります。ユーザーは、自分が見ているデータが古いのか、新しいのか、アクションを取った後に更新されたのかさえも不確かになる可能性があります。一時的な動作の例には以下が含まれます。

- 「Apply Suggestion」ボタンをクリックしても、適用された提案でページが更新されない
- クイックアクションを使って Issue のマイルストーンを更新したのに、サイドバーが新しいマイルストーンを反映するように更新されない
- マージリクエストをマージしたのに、マージリクエストページがまだ「Open」と表示される

Issue を「transient bug」として定義するには、`~"bug::transient"` ラベルを使用してください。

### Infradev Issue

`infradev` Issue は、GitLab.com または Dedicated でインシデントが発生し、レスポンダーがこの Issue がこの種の将来のインシデントの発生を防げると判断したときに作成されます。

Issue には `infradev` ラベルが付けられることがあり、これは [Infradev Engineering Workflow](/handbook/engineering/workflow/#infradev) で詳述されているように、SaaS の可用性と信頼性に関連する専用のプロセスをサブスクライブすることを意味します。これらの Issue は、確立された[バグの深刻度 SLO](/handbook/product-development/how-we-work/issue-triage/#severity-slos)に従います。

`infradev` Issue は、`gitlab-org/gitlab`、`gitlab-com/gl-infra/production-engineering`、`gitlab-org/gitaly`、`gitlab-com/gl-infra/platform/runway/team` を含むいくつかのプロジェクトにまたがって存在できます。すべてのオープンな `infradev` Issue は、どのプロジェクトに存在するかにかかわらず、[SaaS Health Dashboard](https://saas-health-83948d.gitlab.io/) で表示できます。履歴の傾向と分布は、[Tableau Infradev Dashboard](https://10az.online.tableau.com/#/site/gitlab/views/DraftInfrastructureEmbeddedDashboard/InfradevDashboard?:iid=1) で利用できます。

### Limit 関連のバグ

GitLab は、ほとんどの大規模アプリケーションと同様に、特定の機能内で制限を強制します。制限がないことは、セキュリティ、パフォーマンス、可用性に影響を与える可能性があります。このため、制限に関連する Issue は `~"bug::availability"` サブカテゴリの `~"type::bug"` とみなされます。

Issue を制限に関連するものとして定義するには、`~"availability::limit"` と `~"bug::availability"` ラベルを追加してください。

深刻度は、以下の表を使用して評価すべきです。

| 深刻度 | 可用性への影響 |
|-|-|
| `~"severity::1"` | この制限がないことで、単一のユーザーが GitLab の可用性に悪影響を与えることができる |
| `~"severity::2"` | この制限がないことで、GitLab の可用性低下のリスクが生じる |
| `~"severity::3"` | この制限がないことで、コスト、パフォーマンス、可用性を管理する能力に悪影響がある |
| `~"severity::4"` | 制限を適用できるが、それがないことで可用性リスクは生じない |

これらの Issue は、確立された[バグの深刻度 SLO](/handbook/product-development/how-we-work/issue-triage/#severity-slos)に従います。

## Issue のトリアージ

初期トリアージには（最低限）Issue に適切にラベルを付けることが含まれます。これにより、ラベルのない Issue を検索することで、トリアージされていない Issue を見つけることができます。

以下のいずれかのリンクをたどってください。

- [GitLab](https://gitlab.com/gitlab-org/gitlab/-/issues?scope=all&utf8=%E2%9C%93&state=opened&label_name[]=None&assignee_id=None)
- [GitLab Omnibus](https://gitlab.com/gitlab-org/omnibus-gitlab/-/issues?scope=all&utf8=%E2%9C%93&state=opened&label_name[]=None&assignee_id=None)

Issue を 1 つ選び（リストの最も古いものを優先します）、以下の [Issue トリアージのプラクティス](#issue-triage-practices)を念頭に置きながら、批判的な目で評価してください。自問すべき質問をいくつか挙げます。

- Issue が説明していることを理解できますか？
- どのラベルが当てはまりますか？特に[タイプ、ステージ、深刻度](https://docs.gitlab.com/ee/development/labels/index.html)のラベルを考慮してください。
- どれくらい重大に見えますか？プロダクトやエンジニアリングのマネージャー、またはセキュリティチームにエスカレーションする必要がありますか？
- `~"bug::vulnerability"` ラベルが適切でしょうか？
- confidential にすべきでしょうか？通常、`~"bug::vulnerability"` Issue や、私的な情報を含む Issue の場合がそうです。

適切と思われる各ラベルを適用してください。セキュリティへの影響がある Issue は特別に扱うべきです。[security disclosure process](/handbook/support/channels/#security-disclosures) を参照してください。

Issue が不明確に思える場合 — どのラベルを適用すべきか確信が持てない場合 — は、リクエスト者に事情を明確にするよう求めてください。
常に私たちの[ユーザーコミュニケーションガイドライン](/handbook/communication/#user-communication-guidelines)を念頭に置き、トリアージを完了するのに十分な情報を得るまで会話を続けることを約束してください。

Issue がまだ有効かどうかを検討してください。特に古い Issue では、`~"type::bug"` が報告されてから修正されている場合や、`~"type::feature"` がすでに実装されている場合があります。

他の Issue やマージリクエストからのクロスリファレンスノートを必ず確認してください。それらは情報の素晴らしい源です！
例えば、クロスリファレンスされたマージリクエストを見ることで、「Picked into `8-13-stable`, will go into `8.13.6`.」と表示されているのを確認できる場合があり、これはその Issue がバージョン `8.13.6` 以降で修正されていることを意味します。

Issue が要件を満たしている場合、[スケジューリングリクエスト](/handbook/engineering/workflow/#scheduling-issues)を行うことが適切かもしれません。あなたの判断を使ってください！

完了です！Issue にはすべての適切なラベルが付いており、バックログ、クローズ、スケジューリング待ち、またはリクエスト者からのフィードバック待ちの状態になっているかもしれません。時間があれば、別のものを選んでください。

## Issue トリアージのプラクティス

私たちは、[`@gitlab-bot`](https://gitlab.com/gitlab-bot) ユーザーを使って、[triage-ops](https://gitlab.com/gitlab-org/quality/triage-ops) でいくつかのポリシーを自動的に強制しています。
自動トリアージの詳細については、[Triage Operations](/handbook/engineering/infrastructure-platforms/developer-experience/triage-operations/) を読んでください。

とはいえ、すべてを自動化することはできません。このセクションでは、手動で行っているプラクティスのいくつかを説明します。

### Shared responsibility issue

時々、どのグループやステージが責任を持つべきかを選ぶのが難しい Issue に遭遇することがあります。これらの Issue は、製品の [Shared Responsibility Functionality](/handbook/product/categories/#shared-responsibility-functionality) と呼ばれるものに対処している可能性が高いです。

これらへのアプローチは、分散型のトリアージプロセスを使用することです。トリアージは単一のレポートやリストに集中化されておらず、それらの Issue をレビューする責任が 1 人の個人やグループに課されることもありません。これは、継続的に進行するベースで（定期的なスケジュールイベントではなく）この共有責任カテゴリに該当する可能性のある多数の Issue に対処するために、私たちのトリアージ業務をスケールさせるのに役立ちます。

目標は、グループレベルのリーダーシップ（すなわち Product Manager および/または Engineering Manager）が、これらの Issue を誰が、いつ、どのように対処すべきかについて決定する力を持てるようにすることです。より上位のマネジメントの個人やグループは、競合する優先事項のために行動方針を決定するのが難しいときに、エスカレーションに対処し、決定を下すためのバックアップとして機能します。

#### 初期トリアージ

これらの Issue の 1 つをトリアージしている場合は、作成後できるだけ早く Issue にグループラベルを割り当てるよう最善を尽くしてください。完璧である必要はありませんが、その Issue に取り組むのに最も適したグループを特定するために意識的な努力をしてください。

グループを選ぶときに、以下の質問を自問できます。

- そのグループは、自分のプロダクトカテゴリにこの領域を直接挙げていますか？
- そのグループは、当該 Issue の基盤となる技術を扱っていますか？
- 過去に同様の作業をしたことがありますか？
- 同様の横断的な機能に定期的に関与する、基盤的なグループですか？
- 影響を受けるファイルを特定し、git blame を使って最後の変更の作者を確認できますか？
- そのファイルの Code Owner を特定できますか？

可能なグループのリストを最初に絞り込むのに役立てるため、[Product Categories](/handbook/product/categories/) ページや [Stage Groups Ownership Index](https://gitlab-com.gitlab.io/gl-infra/platform/stage-groups-index/) ページをレビューするとよいでしょう。

いずれにせよ、必要に応じて作者にフォローアップの質問をすることで Issue の性質を理解しようと試み、その後、要件を、必要なスキルや専門知識に最もよく一致するグループにマッピングすべきです。

#### 二次トリアージ

二次トリアージは、Issue がすでにグループに割り当てられており、そのグループ内の誰か（通常は PM または EM）が優先順位付けおよび/または見積もりのために Issue を評価しているときに発生します。あなたがこのトリアージを行う人である場合、以下のいずれかの行動方針を取ることができます。

1. それが明確に自分のグループのカテゴリに該当すると判断した場合は、自分の内部トリアージ手順に従う。
1. それが明確に別のグループのプロダクトカテゴリに該当すると考える場合は、Issue のコメントスレッドで非同期にそのグループの EM または PM に ping する。なぜそれが彼らの管轄に該当すると考えるのかの理由を説明し、オーナーシップを引き受けるよう依頼する。依頼し、彼らがあなたのコメントを見て、その Issue を引き受けるのにより適していると同意したときに、**彼らにラベルを更新してもらう** ようにしてください。
1. Issue が共有責任カテゴリに該当すると考える場合は、まず、自分のチームがその Issue にコントリビュートし、完了まで見届けるオーナーになることを慎重に検討してください。ただし、自分のチームがスキルを持っていない、または時宜を得て Issue にコントリビュートするのに必要な知識とスキルを習得できないと考える場合は、より適している（または自分のグループが協力して機能を一緒に提供できる）他のグループを特定してみてください。その時点で、彼らと会話を始め、明確なオーナーが決まるまで Issue のさらなるトリアージを調整してください。あるいは、このトリアージプロセスを通じて、Issue が追求する価値がない（例えば、価値対労力を考慮して）と集団的に判断する場合もあります。この場合は、決定の明確な根拠を提供しながら、Issue を必ずクローズしてください。

トリアージを進める中で、あなたと EM/PM の仲間が Issue の価値、深刻度、優先度、グループの管轄について合意できない場合に、いつ Issue をより上位のレベル（すなわちシニアマネジメント、ディレクター以上）にエスカレーションすべきかを判断するために、あなたの判断を働かせてください。今のところ、エスカレーションの方法は柔軟であり、状況に合った適切なコミュニケーションチャンネルとモダリティを選べます。

DRI として、影響を受ける領域の継続的なサポートを確保するための追加のステップを取ることを検討すべきです。これには、当該コンポーネントの継続的な責任と技術戦略を引き受けられる新しいプラットフォームグループの作成の提案を提出することが含まれる場合があります。これはもちろん、自分のグループに割り当てられた Issue に即座に対処する必要性を排除するものではありません。

トリアージプロセスの結果として、あるグループが恒久的にオーナーシップを引き受ける資格があり、その意思があると特定された場合、プロダクトとエンジニアリングのリーダーは、Development ハンドブックの [shared services components](/handbook/company/infrastructure-standards/realms/infra-shared-services/) セクションに、オーナーシップモデルのタイプとチームを正式に文書化すべきです。適切と判断される場合、複数のグループが同じコンポーネントのオーナーシップを恒久的に共有することもできます。

このプロセス全体を通じて、グループのリーダーとして、あなたは Issue が解決されるか、他の誰かが引き継ぐことに同意するまで、初期の Directly Responsible Individual ([DRI](/handbook/people-group/directly-responsible-individuals/)) とみなされることを覚えておくことが重要です。他のグループとのさらなるトリアージの会話なしに単に自分のグループラベルを削除することは、このプロセスにおいて受け入れられる、または役立つ行動ではありません。これは私たちの [Results: global optimization](/handbook/values/#efficiency-for-the-right-group) のバリューに沿っています。

### 古くなった Issue

過去 3 か月間に更新されていない Issue には、「Awaiting Feedback」ラベルを追加すべきです。14 日後、その Issue について誰からも応答がない場合、Issue はクローズすべきです。これは、古くなった Issue に関する Rails Core ポリシーをわずかに修正したバージョンです。

将来のいずれかの時点で応答があれば、Issue の再オープンを検討できます。Issue が GitLab の最近のバージョンにまだ存在することを確認できない場合、私たちは Issue トラッカーにノイズを加えているだけです。

### 重複

重複を見つけるには:

- その Issue が対象とするプロジェクトの Issue トラッカーを開く。
- Issue から関連するキーワードを入力する。
- 結果リストの最初のページをざっと見る。
- オープンとクローズの両方の Issue を確認する。

より良いタイトル、説明、またはより多くのコメントとポジティブなリアクションを持つ Issue を正規バージョンとして使用してください。決められない場合は、より古い Issue を残してください。

#### サポート Issue メッセージ

Issue が実際にはヘルプを求めるサポートリクエストである場合は、`Issue triage - support question` [コメントテンプレート](https://docs.gitlab.com/ee/user/profile/comment_templates)を使用できます。

#### 重複 Issue メッセージ

重複を見つけた場合は、このメッセージを投稿できます。

```md
Hey {{author}}! Thanks for submitting this issue. It looks like a duplicate of {{issue}}. I'm marking your issue as a duplicate and close it.
Please add your thoughts and feedback on {{issue}}. Don't forget to upvote feature proposals.

/duplicate {{issue}}
```

重複 Issue が割り当てられるかもしれないマイルストーンの目標について、将来を見越した発言をしないでください。

### クローズに傾く

私たちはすべての人を満足させることはできません。できる限りユーザーを満足させることと、プロジェクトをメンテナンス可能に保つことのバランスを取る必要があります。

- Issue が再現手順やバージョン情報のないバグレポートである場合は、Issue をクローズし、報告者により多くの情報を提供するよう求めてください。
- 機能/変更を確実に追加しない場合は、そう伝えて Issue をクローズしてください。

### Issue が来たらラベルを付ける

Issue が来たら、トリアージしてラベルを付けるべきです。ラベルのない Issue は見つけにくく、しばしば失われてしまいます。

深刻度ラベルには注意してください。深刻度を過小評価すると、解決が本来よりも長く待てるかのように示唆して、問題を悪化させる可能性があります。利用可能な[深刻度](#severity)ラベルをレビューしてください。バグに対する正しいラベルが確信できない場合は、深刻度を過大評価してもかまいません。ただし、[ドメインエキスパート](/handbook/engineering/workflow/code-review/#domain-experts)から確認を得てください。

### 自分が開いた Issue のオーナーシップを持つ

「Author: あなたのユーザー名」で並べ替え、修正済みであることがわかっている、または他の理由で関係なくなった Issue をクローズしてください。まだラベルが付いていない場合はラベルを付けてください。

### プロダクトフィードバック Issue

一部の Issue は[タイプラベル](https://docs.gitlab.com/ee/development/labels/index.html#type-labels)に該当しないかもしれませんが、GitLab の機能がどのように使われているかについての有用なフィードバックを含んでいます。
これらの Issue は、プロダクトマネージャーにメンションし、グループ、カテゴリ、ステージのラベルに加えて `~"Product Feedback"` とラベル付けすべきです。
<https://gitlab.com/gitlab-org/gitlab/-/issues/324770> はプロダクトフィードバック Issue の例です。

### 質問/サポート Issue

それが質問であるか、何らかの理由で開発チームが対処できない曖昧なものである場合は、クローズして、私たちが持っている関連するサポートリソース（例: <https://about.gitlab.com/get-help/>、Discourse フォーラム、または Support へのメール）を案内してください。

### 新しいラベル

さまざまな Issue の間に共通のパターン（例: まだ専用のラベルがない新機能）に気づいた場合は、Slack または新しい Issue で新しいラベルの追加を提案してください。

### Issue の再現

可能であれば、報告者に GitLab.com 上の公開プロジェクトで Issue を再現するよう求めてください。[issue-reproduce グループ](https://gitlab.com/issue-reproduce)で自分で試すこともできます。アクセスについては、そのグループの任意のオーナーに尋ねることができます。

## ノート

これらのポリシーに関する元の Issue は [#17693](https://gitlab.com/gitlab-org/gitlab-ce/issues/17693) です。時間が経つにつれて、GitLab 自体の内部から状況を改善するよう取り組んでいきます。

これらのポリシーを作成する上で、以下のプロジェクト、リソース、ブログ投稿が非常に役立ちました。

- [CodeTriage](https://www.codetriage.com/)
- [How to be an open source gardener](https://steveklabnik.com/writing/how-to-be-an-open-source-gardener)
- [Managing the Deluge of Atom Issues](https://web.archive.org/web/20221129082058/https://blog.atom.io/2016/04/19/managing-the-deluge-of-atom-issues.html)
- [Handling Large OSS Projects Defensively](https://artsy.github.io/blog/2016/07/03/handling-big-projects/)
- [My condolences, you're now the maintainer of a popular open source project](https://danielbachhuber.com/my-condolences-youre-now-the-maintainer-of-a-popular-open-source-project/)
- [The Art of Closing](https://blog.jessfraz.com/post/the-art-of-closing/)
