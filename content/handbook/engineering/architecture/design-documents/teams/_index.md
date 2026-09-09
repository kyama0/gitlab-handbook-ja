---
title: Teams
description: 'Team は Organization 内のユーザー名簿を持ち、ほかのメンバーと同じようにグループやプロジェクトのロールを付与できるエンティティです。'
status: proposed
creation-date: "2025-12-09"
authors: [ "@lohrc", "@jblack7", "@rymai" ]
dris: [ "@jblack7", "@rymai" ]
owning-stage: "~devops::tenant scale"
participating-stages: []
toc_hide: true
upstream_path: /handbook/engineering/architecture/design-documents/teams/
upstream_sha: a0d167307f5d32554672c5cf99e3f47abb35e1dc
lastmod: 2026-09-08T16:19:34+02:00
translated_at: "2026-09-08T22:49:12Z"
translator: claude
stale: false
---

{{< engineering/design-document-header >}}

## 概要 {#summary}

GitLab のグループは、プロジェクトを名前空間の階層に整理することと、人をまとめてそのアクセスを制御することの 2 つを同時に担っています。[Organizations](../organization/_index.md)は顧客間の分離を実現しますが、この二重の役割は各顧客の境界の*内側*に残ります。報告系統とリポジトリの配置が異なる顧客、つまり大規模な顧客の大半は、人をまとめるためだけのグループを作成する以外に、その違いを表現する手段がありません。

**Team** は、Organization 内にスコープを持ち、ユーザー名簿を保持し、グループやプロジェクトのロールを付与できるエンティティです。**Team は新しい種類のメンバーです**。その付与には、ユーザーを招待する場合と同じ権限、同じロールの意味、同じ継承が適用され、Teams はそのいずれも変更しません。Teams はアクセスを付与します。リソースが Team に属することはありません。

このページが入り口です。背景は[付録](#related-documents)にまとめてあり、アーキテクチャ上の各選択にはそれぞれ[決定記録](#decisions)があります。

## ステータス {#status}

概念実証は存在しますが、一般提供されているものはありません。Teams は Organizations の[リリース段階](../../../infrastructure-platforms/tenant-scale/organizations/release-stages.md)と[リリースプロセス](https://docs.gitlab.com/development/organizations/release_process/)に沿って提供され、`config/organizations_release.yml` で宣言された Organization フラグ `teams` によって有効化を制御します。コードでは、Organization を actor として `Organizations::Release.enabled?(:teams, actor)` を呼び出します。これは [ADR-002](decisions/002-teams_are_organization_scoped.md)で定める境界と同じです。

## 問題 {#problem}

仕事を整理するためのグループと、人をまとめるためのグループを区別するものがありません。そのため、両者の構造を分ける必要がある顧客は、メンバーをまとめるだけのグループを作り、それを仕事を保持するグループに共有しています。**グループの約 15% にはプロジェクトがまったく含まれていません**。これは、人のための独立したエンティティが欠けていることを最も明確に示しています。

その結果、3 つの問題が生じており、顧客からも報告されています。継承によって想定外のアクセスレベルになること、共有先によって共有対象の人々が異なること、そして継承が予想外の結果を招くまで見えないために認知負荷が生じることです。

詳細：[付録 A](appendices/a-dual_purpose_group_problem.md)、[付録 B](appendices/b-customer_pain_points_research.md)、[付録 C](appendices/c-industry_and_competitive_context.md)。

## 目標 {#goals}

1. Organization 内で**ユーザー管理をプロジェクトの整理から分離します**。これにより、人の階層とプロジェクトの階層を独立して発展させ、後者を乱すことなく、前者にエンタープライズの ID 管理を統合できます。
2. グループ間およびグループからプロジェクトへの共有に一貫した答えを提供し、階層型とフラットな部門横断型のコラボレーションの両方を支えながら、**アクセスの割り当てを可視化し、監査可能にします**。
3. **エンタープライズ規模に対応します**。10,000 人以上のユーザーと数千のプロジェクトを持つ Organizations、NIST 800-53、ISO 27001、SOX に適した監査証跡、一括管理操作に対応します。
4. **部門横断の仕事の連携を可能にします**。Organization 全体から、Team の Issue、マージリクエスト、エピックを集約します。現在のアーキテクチャはこの目標を進めるものではなく、Teams のうちアクセス制御の部分を実現します。

副次的な目標は、機密性の高い操作へのジャストインタイムアクセス、一時的な権限昇格、サービスアカウント管理、API ファーストの自動化、セルフサービスのアクセスリクエストです。

## 目標に含めないもの {#non-goals}

- **グループの置き換え、または階層の再構成。** Teams はグループを補完します（[ADR-001](decisions/001-teams_complement_groups.md)）
- **ロールと権限の置き換えや再解釈。** Team への付与は既存のロールを持ち、ほかのメンバーシップと同じように動作します（[ADR-004](decisions/004-team_membership_is_an_ordinary_membership.md)）。ロールの組み合わせ方や継承の仕組みの変更は、権限システムに関する別の提案です
- **リソースの横断的な集約。** Team はコンテナではなく、階層をまたいでプロジェクトを集めることはできません（[ADR-003](decisions/003-a_team_is_a_principal_not_a_container.md)）
- **Teams のネスト。** Teams はフラットです。ネストは、現時点では避けたい複雑さを生みます。今後のリクエストに応じて再検討する可能性があります
- **既存のワークフローを妨げること。** グループベースの管理、既存の API 契約、顧客の自動化は引き続き動作し、顧客が必要とする限り混在環境をサポートします。グループ共有は長期的に非推奨となりますが（[ADR-001](decisions/001-teams_complement_groups.md)）、その時期は日付ではなく、機能が同等になることを基準に決めます

## Team とは {#what-a-team-is}

Team はユーザー名簿を保持し、グループまたはプロジェクトの名前空間という**名前空間に対するロール**を付与されます。Team への付与はメンバーへの付与です。既存のロールを持ち、ほかのメンバーシップと同じように解決され、そのリソースのメンバーを管理できる人なら誰でも、Team のアクセスを付与したり削除したりできます（[ADR-004](decisions/004-team_membership_is_an_ordinary_membership.md)）。

**付与によって実際のメンバー行が具体化される**ため、権限の適用時に権限システムへ新たな仕組みを要求しません。名簿のユーザーごとに、対象の名前空間に 1 行ずつ作成され、その行は由来となる Team を保持します（[ADR-004](decisions/004-team_membership_is_an_ordinary_membership.md)）。プロジェクトへのアクセス、グループの権限、シート数の計算、監査イベントはいずれもすでにメンバー行を参照しているため、Teams を認識させる変更なしに対応できます。また、グループ上の行は、ほかのメンバーシップと同じようにすべての子孫に適用されます。

| エンティティ | 目的 |
| --- | --- |
| Team | Organization 内にスコープを持ち、名前と Organization 内で一意のパスを持ちます |
| Team user membership | 名簿。各行は Team レベルのロールである **admin** または **member** を持ちます |
| Team namespace membership | 付与：Team、対象の名前空間、リソースのロールを持つ宣言であり、メンバー行として具体化されます |
| Member（既存） | 具体化されたもの。由来となる Team を参照する通常のメンバー行です |

付与には、設計の土台となる性質が 2 つあります。**付与はプロジェクトではなく名前空間を対象とする**ため、1 つの形式でグループとプロジェクトの両方を扱えます（[ADR-005](decisions/005-grants_target_namespaces.md)）。また、**付与はアクセスそのものではなく宣言である**ため、名簿が空でも存続し、誰がなぜ付与したかを一度だけ記録し、整合化の収束先を提供します。

## 決定事項 {#decisions}

| 決定記録 | 要点 |
| --- | --- |
| [ADR-001：Teams はグループを補完する](decisions/001-teams_complement_groups.md) | 再構成ではなくグループに追加するレイヤーです。後戻りできる決定であり、グループ共有は長期的に廃止します |
| [ADR-002：Teams のスコープは Organization](decisions/002-teams_are_organization_scoped.md) | Team は 1 つの Organization に属し、顧客間の分離境界を越えません |
| [ADR-003：Team はコンテナではなくプリンシパル](decisions/003-a_team_is_a_principal_not_a_container.md) | リソースが Team に属することはありません。専用のテーブルを持ち、フラットです |
| [ADR-004：Team のメンバーシップは通常のメンバーシップ](decisions/004-team_membership_is_an_ordinary_membership.md) | 付与によって実際のメンバー行を具体化するため、メンバーシップを利用するすべての処理が変更なしに Teams に対応します |
| [ADR-005：付与は名前空間を対象とする](decisions/005-grants_target_namespaces.md) | 多相的な対象ではなく実際の外部キーを使います。外部の権限適用サービスにはプリンシパルの複製が必要です |
| [ADR-006：Teams の API インターフェース](decisions/006-the_teams_api_surface.md) | GraphQL と REST の両方を提供します。付与は今すぐ提供し、Organization をスコープとする管理はトークンの境界ができるまで待ちます |
| [ADR-007：移行より先に機能の同等性を確保する](decisions/007-parity_before_migration.md) | 各機能で Teams に対応してから、その機能が参照するグループを変換可能にします |
| [ADR-008：Team 由来のメンバーシップは独立した行](decisions/008-a_team_derived_membership_is_its_own_row.md) | 1 行にレベルをまとめず、Team ごとに個別のメンバー行を設けます |

## ユーザー体験を提供する画面 {#user-experience-surfaces}

Teams は 2 つの場所に表示され、2 つの関心事を分けます。*誰が Team にいるか*は Organization レベルの問題であり、*Team がどこにアクセスできるか*はリソースレベルの問題です。

**Organization の Teams セクション**はサイドバーの新しい項目で、Teams の一覧と、名簿を表示する Team の詳細ページを提供します。Organization のオーナーは作成、削除、名簿管理を行えます。ほかのメンバーには同じページが読み取り専用で表示されます。

**メンバーページ**には Teams タブを追加し、そのグループやプロジェクトにアクセスできる各 Team、ロール、割り当ての由来、付与者、付与日時、有効期限を一覧表示します。既存の REST と Vuex のメンバーストアではなく、GraphQL の Teams インターフェースから読み取るため、独立したコンポーネントになります（[ADR-006](decisions/006-the_teams_api_surface.md)）。Members タブには、Team 経由でリソースにアクセスする人の読み取り専用の行を追加し、Teams タブへの案内を表示します。付与したロールを下げると、その Team 経由でしかそのアクセスを持っていなかった全員からアクセスが失われるため、選択欄から直接適用せず、確認を求めます。

リソースをまたいでアクセスの由来を確認するビュー、一括割り当て、カスタムロール、Team のアバター、通知、メールでの招待は今後の対応です。

## グループ共有からの移行 {#migration-from-group-shares}

`gitlab-org` 階層内の**グループ共有全体の約 35%** は、名前以外は Teams と同じです。これらは、候補ごとにオプトインで利用するアシスタントによって変換します。アシスタントは Team を作成し、名簿を初期設定し、付与を割り当て直し、移行済みのリンクを削除します。空になったグループの削除は別の手順とし、遅延削除を使います。

対象となる条件は限定的で、最も厳しいルールは、そのグループがそれ自体でプリンシパルとしてどこからも参照されていないことです。保護ブランチ、承認ルール、CODEOWNERS、CI ジョブトークンの許可リストなどは、グループのメンバーを自ら解決するため、移行した Team を認識しません。それらの機能が参照するグループを変換可能にするには、先に各機能が Team を受け入れられるようにする必要があります（[ADR-007](decisions/007-parity_before_migration.md)）。

## 規模 {#scale}

顧客の環境では、文書に記載された上限に達するよりずっと前に実用上の性能低下が起きます。そのため、このアーキテクチャはハードリミットではなく、観測されたしきい値を基準に設計します。階層の深さは **5 階層以下**、**Team あたりのメンバーは 1,000 人未満**、**親あたりの直接の子は 100 未満**とし、トークンのサイズについては **150 〜 200 グループ**を意識します。しきい値を超えた後にエラーを出すのではなく、達する前に警告すべきです。

この 4 つのうち 3 つは、[付録 C](appendices/c-industry_and_competitive_context.md)にある各プラットフォームの範囲から数式で導いたものではなく、その範囲の保守的な側に位置します。親あたりの子の数は GitLab での観測値であり、付録にはまだその出典がありません。

## 既知の制限 {#known-limitations}

- **具体化した行にもメンバー作成の副作用が伴います。** 行ごとにアクティビティイベント、通知、システムフックが発生し、それを抑制するフラグはまだありません
- **現時点では、Teams は Organization レベルのリソースにアクセスできません**。その権限が PostgreSQL の外で適用されるためです（[ADR-005](decisions/005-grants_target_namespaces.md)）
- **Team の削除では多数のメンバー行を削除します**。引き続き削除するのはアクセスだけですが、少数の付与を削除するよりも大きな操作になります

## 未解決の問い {#open-questions}

- **シート数の上限と名簿への追加。** 上限内に収まらない付与は全体を失敗させますが、シート数に上限のある名前空間にすでに付与を持つ Team に誰かを追加した場合は、どうすべきでしょうか。検討すべき先例があります。自動プロビジョニングの経路である SAML、SCIM、LDAP グループ同期は、フィーチャーフラグの下で、拒否する代わりに課金対象外の最小アクセスレベルでメンバーを作成し、監査イベントを記録して対処しています。したがって選択肢は、名簿への追加を拒否する、警告付きで受け入れる、この先例に従う、のいずれかです（[ADR-004](decisions/004-team_membership_is_an_ordinary_membership.md)）
- **グループをプリンシパルとする機能に Team がどのユーザーを提供するか。** ある機能が「これらのグループはこの保護ブランチへプッシュできる」のように*グループ*をプリンシパルとして指定する場合、その機能がグループのメンバーを自ら解決します。そして、どのメンバーを数えるかは機能ごとに異なります。大半は直接のメンバーのみを対象としますが、保護環境では直接のメンバーか全員（直接 + 継承 + 共有）かを選べます。Team の名簿はフラットなので、この選択肢で区別する対象がありません。ここから 2 つの問いが生じますが、どちらも未決です。プリンシパルが Team の場合にも直接か全員かの選択に意味があるのか、そして機能の従来の動作を維持するために、変換時にどの人々を名簿に登録すべきかです（[ADR-007](decisions/007-parity_before_migration.md)）
- **エンタープライズの ID 管理。** 対応付けは簡単になります。現在の SAML や LDAP のグループリンクは、ID プロバイダーのグループを*特定の GitLab グループに対するロール*に結び付けています。一方、Team の名簿はロールを持たないため、ID プロバイダーのグループと Team を 1 対 1 で対応付けられます。不足しているのは接続の仕組みです。グループリンクと SCIM は `Member` レコードを基盤としており、名簿の行はそのレコードではありません。Team から名前空間への付与は引き続き手動になります。ID プロバイダーがグループ階層をモデル化することはそもそもまれなので、この方式には妥当性があります
- **Rails 外の権限適用サービスへのファンアウト。** IAM や OpenBao で権限を適用するリソースに対して、GitLab はメンバーごとに 1 件の割り当てを書き込むのでしょうか。それとも、権限適用サービス内で Team を集合値の主体にするのでしょうか。（[ADR-005](decisions/005-grants_target_namespaces.md)）
- **横断的な集約。** 1 つのエンティティの下に階層をまたいでリソースを集めること（[作業アイテム 467558](https://gitlab.com/gitlab-org/gitlab/-/work_items/467558)）にはまだ答えがなく、Teams がその答えになるわけでもありません（[ADR-003](decisions/003-a_team_is_a_principal_not_a_container.md)）

## 成功基準 {#success-criteria}

**性能と規模。** 1,000 以上の Teams と 1,000 以上のプロジェクトがある環境で、実効アクセスの解決を p95 で 1 秒未満にします。付与の作成と取り消しは p95 で 500 ms 未満に応答し、伝播は非同期で完了します。両方の実効アクセス計算がすべてのレベルで一致することをテストで検証します。権限関連操作の稼働率は 99.95% とします。

**管理とコンプライアンス。** アクセス付与までの時間を 5 分未満にし、100 以上の Team とリソースの関係にまたがる一括操作に対応し、継承関連のサポート上の問題を 50% 削減し、権限変更の監査証跡を 100% 網羅し、NIST 800-53、ISO 27001、SOX の監査に合格します。

**定性的な基準。** ユーザー調査で管理者の 80% 超が継承パターンを正しく予測し、アクセスリクエスト体験に関する開発者の満足度が 70% を超え、Fortune 500 の顧客が Teams を導入します。

## 依存関係 {#dependencies}

- **Organizations** — Organization レベルのユーザー管理、ID プロバイダーの同期、監査のスコープ、分離の適用（[ADR-002](decisions/002-teams_are_organization_scoped.md)）
- **グループをプリンシパルとする機能との同等性** — 依存する作業の中で最大の部分です（[ADR-007](decisions/007-parity_before_migration.md)）
- **課金** — 一般提供前に、課金対象メンバーの計算で Team 経由の経路に対応する必要があります
- **エンタープライズの ID 管理** — Team のメンバーシップ向けの LDAP とディレクトリの同期、SAML アサーション処理、OIDC プロビジョニングであり、いずれもまだ存在しません
- **外部の権限適用サービス** — IAM や OpenBao に対応するには、既存の IAM outbox を通じて Teams を複製する必要があります。そのためには、outbox で許可されるエンティティの種類を増やす必要があります（[ADR-005](decisions/005-grants_target_namespaces.md)）
- **Organization の権限境界** — コード上で `organization` は認可の境界ではないため、きめ細かい権限を持つトークンでは Organization をスコープとするエンドポイントを認可できません。これは Teams とは独立してトークンアクセスを妨げており、並行して対応できます。REST での Team と名簿の管理を先送りする理由でもあります（[ADR-006](decisions/006-the_teams_api_surface.md)）
- **CE と EE の境界** — `ee/` に Teams のコードは存在せず、監査イベントとカスタムロールのどちらが先に実装されるかに応じて、その作業の一部として作成します

## 機能ロードマップとの関係 {#relationship-to-the-functional-roadmap}

並行して進むプロダクト側の機能ロードマップでは、基盤となる MVC と 4 回のリリースを定義しています。基盤と呼ぶもののほぼすべてで、この設計案と一致していますが、5 つの点で明確に矛盾しています。また、ここに記録した 3 つの知見には、機能ロードマップに対応する項目がまったくありません。比較は[付録 D](appendices/d-proposal_reconciliation.md)にあります。

## 関連ドキュメント {#related-documents}

### 付録 {#appendices}

背景と根拠です。これらの文書で決定は行いません。

- [付録 A：グループの二重の役割が生む問題](appendices/a-dual_purpose_group_problem.md) — 現在何が問題なのか、Teams がロール、Organizations、グループ、プロジェクトとどのような関係にあるか
- [付録 B：顧客の課題と調査結果](appendices/b-customer_pain_points_research.md) — インタビュー、サポート分析、それらに共通するパターン
- [付録 C：業界と競合の状況](appendices/c-industry_and_competitive_context.md) — 市場からの圧力、ほかのプラットフォームの解決方法、規模に関する根拠
- [付録 D：設計案と機能ロードマップの整合](appendices/d-proposal_reconciliation.md) — このアーキテクチャとプロダクトロードマップが異なる点

### 関連する設計案 {#related-blueprints}

- [Organization](../organization/_index.md)
- [グループとプロジェクトの操作および状態管理](../group_and_project_operations_and_state_management/_index.md)
