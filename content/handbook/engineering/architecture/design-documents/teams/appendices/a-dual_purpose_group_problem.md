---
owning-stage: "~devops::tenant_scale"
title: '付録 A：グループの二重の役割が生む問題'
description: 'GitLab のグループが持つ二重の役割の背景と、Teams と既存システムの関係を説明します。'
status: accepted
creation-date: "2026-07-28"
authors: [ "@lohrc", "@rymai" ]
upstream_path: /handbook/engineering/architecture/design-documents/teams/appendices/a-dual_purpose_group_problem/
upstream_sha: a0d167307f5d32554672c5cf99e3f47abb35e1dc
lastmod: 2026-09-08T16:19:34+02:00
translated_at: "2026-09-08T23:04:10Z"
translator: codex
stale: false
---

この付録は、[Teams の設計案](../_index.md)が解決するために存在する問題と、Teams と既存システムの関係を説明します。背景情報であり、ここで決定は行いません。

## グループは 2 つの役割を担う {#groups-do-two-jobs}

グループは、本質的に緊張関係を生む 2 つの役割を担っています。コード、Issue、CI/CD リソースを管理する階層構造であると同時に、人をまとめ、それらのリソースへのアクセスを制御する仕組みでもあります。

2 つの用途を区別するものはありません。同じ設定、階層、共有の仕組みを持つ同じエンティティが、「Platform 部門」と「API ゲートウェイの置き場所」を表します。これらの構造を分ける必要がある顧客は、人をまとめるためのグループを作成し、それを仕事を保持するグループに共有する以外に、その違いを表現できません。報告系統とリポジトリの配置は独立して変化するため、大規模な顧客はほぼ常に、この分離を必要とします。

その結果、3 つの問題が生じており、顧客からも報告されています。3 つすべての詳しい根拠は[付録 B](b-customer_pain_points_research.md)にあります。

**権限管理の複雑さ。** ほぼすべての顧客インタビューで、ユーザーが階層の異なるレベルで異なるロールを持つ場合、継承によって想定外のアクセスレベルになることが言及されました。GitLab のロールは、40 を超える個別の[カスタム権限](https://docs.gitlab.com/user/custom_roles/abilities/)を通じて、すでにきめ細かい制御を提供しています。複雑さは権限そのものではなく、権限とグループの二重の役割がどう相互作用するかから生まれます。

**一貫しない共有の動作。** グループを別のグループと共有すると、直接のメンバーのみが共有されます。一方、グループをプロジェクトと共有すると、直接のメンバーと継承されたメンバーの両方が含まれます。同じ操作に見える 2 つの操作が、異なる人々を対象にします。

**認知負荷。** ユーザーは、権限が明示され、目に見えることを期待します。見えない継承はその期待を裏切り、人々は予測できない動作を回避するための工夫をします。

## Organizations では解決しない理由 {#why-organizations-do-not-resolve-it}

[Organization](../../organization/_index.md) の枠組みは、顧客間の分離と管理上の境界を提供します。Teams の代替ではなく、前提条件です。

これによってグループの二重の役割が解消されるわけではありません。Organizations はグループを含み、それらのグループは同じ課題に直面し続けます。ユーザー管理とプロジェクトの整理を分離する方法がなく、部門横断のコラボレーションには管理の負担が伴います。2 つのレイヤーは異なる問いに答えます。Organizations は**顧客間の分離**を提供し、Teams は顧客の境界内で**誰が仕事をするか**を表すレイヤーを提供します。

## Teams と既存システムの関係 {#how-teams-relate-to-existing-systems}

**ロール**はユーザーに何ができるかを定義し、**Teams** はどのユーザーがアクセスすべきかを定義します。Teams はロールを置き換えたり、包み込んだり、再解釈したりしません。Team への付与は既存のロールを持ち、ほかのメンバーのロールと同じように解決されます（[ADR-004](../decisions/004-team_membership_is_an_ordinary_membership.md)）。

**Organizations** は Teams が動作する内側の境界であり、Teams は顧客間の分離境界を越えません（[ADR-002](../decisions/002-teams_are_organization_scoped.md)）。

**グループとプロジェクト**は引き続き、名前空間の管理、設定の継承、プロジェクトの整理を提供します。プロジェクトは仕事の基本単位であり続け、グループ階層と Team のアクセスの両方を通じてアクセスできます（[ADR-001](../decisions/001-teams_complement_groups.md)、[ADR-003](../decisions/003-a_team_is_a_principal_not_a_container.md)）。

## 関連ドキュメント {#related-documents}

- [Teams の設計案](../_index.md)
- [付録 B：顧客の課題と調査結果](b-customer_pain_points_research.md)
- [付録 C：業界と競合の状況](c-industry_and_competitive_context.md)
- [Organization の設計案](../../organization/_index.md)
