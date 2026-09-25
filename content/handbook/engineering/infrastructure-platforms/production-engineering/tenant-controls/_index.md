---
title: "Tenant Controls チーム"
description: "Tenant Controls チームは GitLab.com のアプリケーションのレート制限を担当します。このページでは、ミッション、担当範囲、作業を追跡するボードとラベルを説明します。"
upstream_path: "/handbook/engineering/infrastructure-platforms/production-engineering/tenant-controls/"
upstream_sha: 0ef11938bb245c5fc3c70068b0d20374a33211fc
lastmod: "2026-09-25T07:48:08+02:00"
translated_at: "2026-09-25T21:18:23Z"
translator: codex
stale: false
---

Production Engineering 内で、Tenant Controls チームは GitLab.com のアプリケーションレベルのレート制限を担当します。
これには、すべてのアプリケーションのレート制限を定義・計数・観測するフレームワークと、
既存の実装をそのフレームワークへ移行する作業が含まれます。制限そのものについては、
運用担当者にとって信頼できる唯一の情報源である
[レート制限](/handbook/engineering/infrastructure-platforms/rate-limiting/)を参照してください。

## ミッション {#mission}

私たちのミッションは、GitLab.com のすべてのアプリケーションのレート制限を定義・設定・観測する方法を統一し、
インシデント中に制限について判断でき、デプロイせずに変更できるようにすることです。

## 担当範囲と責任 {#ownership-and-responsibilities}

チームの担当範囲は
[統一レート制限アーキテクチャ](/handbook/engineering/architecture/design-documents/unified_rate_limiting/)で定められており、
[ボード](#boards)に記載したワークストリームとして実行します:

1. **統一 SDK:** 共通のレート制限 SDK としての [labkit](https://gitlab.com/gitlab-org/labkit) と、
   呼び出し側の SDK への準拠。
1. **アプリケーションの統一:** 既存の実装である `Rack::Attack` と
   `ApplicationRateLimiter` を、破壊的変更を加えずにその SDK を経由するようにします。
1. **設定の外部化:** 制限の設定をアプリケーションとデータベースから、
   labkit が読み込む設定ファイルに移します。
1. **動的ルールサービス:** リクエストごとにルールを返す外部サービスで、
   顧客ごと、ティアごとの制限を可能にします。
1. **ティアに応じたスロットリング:** 全員に同じ数値を適用するのではなく、プランによって異なる制限を適用します。
1. **運用上の責任:** 本番環境のレート制限フレームワークを担当し、
   そのオブザーバビリティ、ドライラン、バイパスの動作も含みます。

個々の制限値の設定は、運用担当者と共同で行う変更管理の対象となる作業であり、
このチームが単独で担当するものではありません。
[レート制限](/handbook/engineering/infrastructure-platforms/rate-limiting/)を参照してください。

## 支援を受ける {#getting-assistance}

- **Slack:** [#g_tenant-controls](https://gitlab.slack.com/archives/C0ATYKN2NTG)
- **ユーザーまたはグループのレート制限設定:**
  [リクエストテンプレート](https://gitlab.com/gitlab-com/gl-infra/production-engineering/-/issues/new?issuable_template=request-rate-limiting)を使用してください。
- **バイパスのリクエスト:**
  [レート制限バイパスポリシー](/handbook/engineering/infrastructure-platforms/rate-limiting/bypass-policy/)に従ってください。

## 共通リンク {#common-links}

|                        |                                                                                                                   |
|------------------------|-------------------------------------------------------------------------------------------------------------------|
| **ワークフロー**           | [Infrastructure Platforms のプロジェクト管理](/handbook/engineering/infrastructure-platforms/project-management/) |
| **プログラム**            | [GitLab.com のレート制限 — プログラムインデックス](https://gitlab.com/groups/gitlab-com/gl-infra/-/epics/2112)         |
| **正式な設計**   | [統一レート制限アーキテクチャ](/handbook/engineering/architecture/design-documents/unified_rate_limiting/)  |
| **Issue トラッカー**      | [production-engineering](https://gitlab.com/gitlab-com/gl-infra/production-engineering/-/issues)                  |
| **チームの Slack チャンネル** | [#g_tenant-controls](https://gitlab.slack.com/archives/C0ATYKN2NTG)                                                                                              |
| **運用担当者向けドキュメント**      | [ハンドブックのレート制限セクション](/handbook/engineering/infrastructure-platforms/rate-limiting/)、[レート制限のランブック](https://gitlab.com/gitlab-com/runbooks/-/blob/master/docs/rate-limiting/README.md) |

## チームメンバー {#team-members}

以下のメンバーが Tenant Controls チームに所属しています:

<!-- Listed manually: these members carry no Tenant Controls team_tag upstream, so team-by-manager-slug cannot select them. -->

| 名前 | ロール |
|------|------|
| [Bob Van Landuyt](https://gitlab.com/reprazent) | Architect |
| [Hercules Lemke Merscher](https://gitlab.com/hmerscher) | Backend Engineer |
| [Ashwin S](https://gitlab.com/ashs2) | Backend Engineer |
| [Hardik Gala](https://gitlab.com/hardikgala) | Backend Engineer |
| [Sankalp Das](https://gitlab.com/sankalp_gl) | Backend Engineer |
| [Nidhey Indurkar](https://gitlab.com/nindurkar) | Backend Engineer |

## 作業の追跡方法 {#how-work-is-tracked}

チームは `gitlab-com/gl-infra` グループのエピックと Issue を使って作業を計画・追跡します。
以下のボードはすべてラベルのみに基づいて表示されます。GitLab はエピックから子 Issue へ
ラベルを引き継がないため、作成者がエピックや Issue の作成時にラベルを適用します。

ラベルとボードには、チーム名ではなく作業内容である `Rate Limiting` に基づく名前を付けています。そのため、
`team::Rate Limiting` が Tenant Controls チームのラベルです。

ボードの正確さを保つために、2 つの原則があります:

**エピックがラベルを定義します。** エピックに付けられた `team::` と `rate-limits::` のラベルは、
その子 Issue にも付ける必要があります。これらのラベルなしで作成された Issue はどのボードにも表示されず、
計画やステータスレビューで見落とされます。

**エピックボードが対象の一覧です。** 対象となるエピックは、
`team::Rate Limiting` が付いているものです。別の一覧は管理しません。ラベルを付けるとエピックは対象に入り、
ラベルを外すかエピックをクローズすると対象から外れます。

## ボード {#boards}

エピックボードが 1 つ、チーム全体の Issue ボードが 1 つ、各ワークストリームの Issue ボードが 1 つずつあります。

| ボード | 種類 | 対象範囲のラベル |
|---|---|---|
| [Rate Limiting Team - Epics](https://gitlab.com/groups/gitlab-com/gl-infra/-/epic_boards/3105698) | エピックボード | `team::Rate Limiting` |
| [Rate Limiting Team - Delivery](https://gitlab.com/groups/gitlab-com/gl-infra/-/boards/11620253) | チームの全 Issue | `team::Rate Limiting` |
| [Tier-Aware Throttles](https://gitlab.com/groups/gitlab-com/gl-infra/-/boards/11580670) | ワークストリーム | `rate-limits::tier-aware-throttles` |
| [Rack::Attack Removal](https://gitlab.com/groups/gitlab-com/gl-infra/-/boards/11620514) | ワークストリーム | `rate-limits::rack-attack-removal` |
| [SDK Conformance](https://gitlab.com/groups/gitlab-com/gl-infra/-/boards/11590863) | ワークストリーム | `rate-limits::sdk-conformance` |
| [Rails Unification](https://gitlab.com/groups/gitlab-com/gl-infra/-/boards/11624199) | ワークストリーム | `rate-limits::rails-unification` |
| [Config Externalization](https://gitlab.com/groups/gitlab-com/gl-infra/-/boards/11624316) | ワークストリーム | `rate-limits::config-externalization` |
| [Dynamic Rule Service](https://gitlab.com/groups/gitlab-com/gl-infra/-/boards/11625955) | ワークストリーム | `rate-limits::dynamic-service` |
| [Opportunistic and KTLO](https://gitlab.com/groups/gitlab-com/gl-infra/-/boards/11625109) | ワークストリーム | `rate-limits::ktlo` |

`rate-limits::` ラベルはスコープ付きのため、Issue に付けられるのは 1 つだけです。そのため、
ワークストリームのボードは Delivery ボードを分割したものになり、各ワークストリームの件数の合計は
チーム全体の件数と一致します。一致しなくなった場合は、ワークストリームのラベルがない Issue があります。通常は、
エピックがワークストリームのラベルなしでボードに追加されたことが原因です。

## ラベル {#labels}

これらのラベルは `gitlab-com/gl-infra` グループで定義されており、このチーム専用です。
`workflow-infra::`、`group::`、`section::`、`infra-category::` など、
すべての Infrastructure Platforms チームが使用するラベルについては、
[Infrastructure Platforms のプロジェクト管理](/handbook/engineering/infrastructure-platforms/project-management/)を参照してください。

| ラベル | 意味 |
|---|---|
| `team::Rate Limiting` | このチームが担当します。エピックをエピックボードに、Issue を Delivery ボードに表示します。 |
| `rate-limits::<workstream>` | 作業が属するワークストリームを示します。スコープ付きのため、Issue ごとに必ず 1 つです。 |
| `initiative::rate-limits` | 他のチームが担当する作業も含め、より広範なレート制限プログラムの一部であることを示します。 |

### 新しいワークストリームのラベルの命名 {#naming-a-new-workstream-label}

形式は `rate-limits::<workstream>` で、`<workstream>` はワークストリームを表すケバブケースの短い名前です。
例として `rate-limits::config-externalization` があります。現在使用しているラベルは、
[ボード](#boards)の表に記載しています。

- 成果物ではなく、**成果**を名前にします。`yaml-file` ではなく `config-externalization` を使用します。
  形式は変わっても、通常、成果は変わらないためです。
- **短く**します。1 〜 3 語とし、ワークストリームのエピックのタイトルやボード名に近い名前にして、
  その 3 つの対応が一目でわかるようにします。
- エピックのタイトルがイギリス式の綴りでも、**アメリカ式の綴り**を使用します。
  `-isation` ではなく `-ization` とし、フィルタリングの際に綴りを推測する必要がないようにします。
- **エピックごとにワークストリームのラベルは 1 つにします。** 2 つ付けるとボード間の分割が崩れます。また、ラベルは
  スコープ付きのため、いずれにしても GitLab は通知なしで一方を他方に置き換えます。
- **Issue でラベルを勝手に作らないでください。** エピックに `rate-limits::` ラベルがない場合は、
  まずラベルを作成し、エピックに付けてください。

## 新しいワークストリームの追加 {#adding-a-new-workstream}

次の 3 つのステップを順番に実行します:

1. `gitlab-com/gl-infra` で**ラベルを作成します**。形式は `rate-limits::<name>`、色は `#5843AD` とし、
   説明にエピックへのリンクを含めます。
1. `team::Rate Limiting` とともに**エピックに付けます**。この 2 つ目のラベルが、
   エピックをエピックボードに表示します。
1. エピックの子 Issue にも**両方のラベルを付け**、新しい Issue が作成されるときにも
   引き続き適用します。

その後、ワークストリームに専用ボードが必要であれば、新しいラベルを対象とする Issue ボードを作成します。

### どのワークストリームにも当てはまらない定常作業 {#standing-work-that-fits-no-workstream}

どのワークストリームにも属さない小さな改善や稼働維持のための作業は、`rate-limits::ktlo` の
四半期ごとの定常エピックに追加します。既存のワークストリームに当てはまる作業は、そちらに登録してください。
定常エピックは四半期ごとにクローズして次の四半期に引き継ぎます。これにより、作業が際限なく蓄積するのを防ぎ、
内容のレビューを必ず行います。

## 既知の不足点 {#known-gaps}

- **別のグループの子 Issue には、これらのラベルを付けられません。** ラベルは `gitlab-com/gl-infra` で定義されているため、
  `gitlab-org/gitlab` などの別のグループの Issue に適用すると、そのプロジェクト内だけで有効な
  ラベルが作成されてしまいます。それらの Issue にはラベルを付けないでください。エピック内では引き続き追跡されますが、
  チームのボードには表示されません。
- **子エピックもラベルを引き継ぎません。** エピックに子エピックがある場合は、各子エピックにラベルを付け、
  それぞれ独立してボードに表示してください。
