---
title: "アクセスリクエスト（AR）"
build:
    list: never
    render: never
upstream_path: /handbook/security/corporate/end-user-services/access-requests/access-requests/
upstream_sha: 1e195b58b9f249ff10bd0e705106c320fee86141
translated_at: "2026-05-11T00:00:00Z"
translator: claude
stale: false
lastmod: "2025-09-17T18:06:09-07:00"
---

アクセスリクエストは IT チームが所有し、オンボーディング、オフボーディング、内部異動リクエストは People Operations チームが所有します。

アクセスリクエストに関する質問がある場合は、Slack の #it_help またはツールのプロビジョナーにお問い合わせください。

## アクセスリクエストに関連するページ

- [よくある質問](/handbook/security/corporate/end-user-services/access-requests/#application-specific-templates)
- [Baseline Entitlements](https://internal.gitlab.com/handbook/security/corporate/end-user-services/access-request/baseline-entitlements/)
- [Temporary service providers access requests and onboarding](https://internal.gitlab.com/handbook/security/corporate/end-user-services/access-request/temporary-service-providers/)

## ヘルプが必要ですか？

- 特定の SLA はありませんが、Issue で `@gitlab-com/gl-security/corp/helpdesk` をメンションしてください。
- リクエストが緊急の場合、Slack の #it_help チャンネルで `it-help` をメンションし、緊急の理由を記載してください。

## どのテンプレートを選べばよいですか？

### 個別または一括アクセスリクエスト

*[このテンプレート](https://gitlab.com/gitlab-com/team-member-epics/access-requests/-/issues/new?issuable_template=Individual_Bulk_Access_Request) は、すべての人が同じシステムへのアクセスをリクエストする限り、個人または複数人のアクセスをリクエストするのに使用できます。複数人が異なるシステムへのアクセスを必要とする場合は、同じテンプレートを使用して複数の Issue を作成してください。異なるマネージャーに報告するが同じ部門または部署の一部である複数人のアクセスをリクエストする場合、最高レベルのマネージャー、つまり部門または部署のディレクター、バイスプレジデント、またはエグゼクティブから承認を得ることができます。*

{{% panel header="**手順**" header-bg="success" %}}
アクセス情報をリクエストする人の詳細を使って、Issue のタイトルを `Full Name, System(s), Role` とつけてください。一括アクセスをリクエストする場合は、`Bulk Access, System(s), Role`。

**ステップ 1. 個人情報**

1. *個人情報：* アクセスをリクエストしている人のリストを提供してください。関連情報を含めてください。
1. *SSH キー：* リクエストしているアクセスのタイプに必要な場合のみ、公開 SSH キーを追加してください。

**ステップ 2. アクセスリクエスト**

1. アクセスが必要なシステムの行を削除または追加してください。**テンプレートの形式に必ず従ってください（以下にも記載）**。アクセスをリクエストする役割、ボルト、グループ、チャンネル、プロジェクトを追加して、リクエストするアクセスを可能な限り具体的にしてください。
1. 管理者アクセスが付与される場合、admin-access ラベルを追加してください。[最小権限レビュー](https://internal.gitlab.com/handbook/security/access-management-standard/#least-privilege-reviews-for-access-requests) に従って必要な最小限のアクセスをリクエストし、根拠セクションでアクセスが必要な理由を説明してください。
1. リクエストが Infrastructure チームが所有するシステム（[tech stack](https://gitlab.com/gitlab-com/www-gitlab-com/-/blob/master/data/tech_stack.yml) による）へのアクセスを含む場合、`@gitlab-com/gl-infra/managers` をメンションし、~InfrastructureApproved ラベルを追加することで承認を依頼してください。

   ```text
   - [ ] System name: Which vault, which group, which channel, which project, which role?
   - Justification for this access: Please explain why this access is needed.
   ```

**ステップ 3：承認のためマネージャーに割り当てる**

1. レポートの一人のためにアクセスをリクエストしているマネージャーの場合は、ステップ 4 にスキップしてください。
1. Issue にラベル `AR-Approval::Needs Manager Approval` を追加してください。
1. Issue をマネージャーに割り当ててください。異なるマネージャーに報告するが同じ部門または部署の一部である複数人のアクセスをリクエストする場合、最高レベルのマネージャー、つまり部門または部署のディレクター、バイスプレジデント、またはエグゼクティブから承認を得ることができます。

**ステップ 4：マネージャーがすべきこと**

1. この人物のマネージャーである場合、Issue にラベル `AR-Approval::Manager Approved` と `ReadyForProvisioning` を追加してください。アクセスをリクエストしている本人の場合、承認のため*あなたの*マネージャーに割り当てる必要があり、彼らが `AR-Approval::Manager Approved` と `ready for provisioning` のラベルを追加する必要があります。
1. 承認後、[tech stack に記載された](https://gitlab.com/gitlab-com/www-gitlab-com/-/blob/master/data/tech_stack.yml) **Issue をシステムプロビジョナーに割り当てる** 必要があります。

**ステップ 5：プロビジョナーがすべきこと**

1. プロビジョニングする前に、チームメンバーには機能を実行するために必要な最小限のアクセスのみが付与されるべきであることを考慮してください。アクセスレベルが必要かどうか、またはより低いアクセスレベルで十分かを判断してください。
1. アクセスレベルが適切な場合、AR-Approval::Manager Approved ラベルが存在することを確認した上で、アカウントのプロビジョニングを進めてください。
1. ステップ 2 で、プロビジョニングしたシステムにチェックを入れてください。
1. 管理者アクセスが付与される場合、Security Operations が誰が管理者アクセスを持っているかを把握できるよう、このリクエストに admin-access ラベルを追加してください。
   - GitLab.com に管理者アクセスが付与される場合、ユーザーが GitLab Instance Administrators グループに追加されていることを確認してください
   - ユーザーに 2fa が必要であることと、すぐにセットアップしないとロックアウトされることを通知してください
{{% /panel %}}

---

### 共有アカウントアクセスリクエスト

{{% panel header="**手順**" header-bg="success" %}}
**この Issue リクエストを送信する前に**

1. リクエストが GitLab のポリシーと手順に沿っていることを確認するため、[アクセス制御ポリシーと手順](/handbook/security/) をご覧ください。レビュー後、共有アカウントが依然として必要であると判断した場合、テンプレートを使用して Issue を提出してください。**PCI データを含むシステムでは共有アカウントは認められないことに注意してください。**
1. 共有アカウントリクエストは、IT Ops と記載された Tech Stack オーナーによってレビューおよび承認される必要があることに注意してください。
**追加をリクエストする各ユーザーに対して [Exception Request](https://gitlab.com/gitlab-com/gl-security/security-assurance/sec-compliance/compliance/issues/new?issuable_template=Exception%20Request) を記録する必要があります。** Exception Request の最大例外期間は 90 日（デバイスの例外のみ 365 日）であることに注意してください。
例外期間後は、レビューおよび承認のための別の Exception Request を提出する必要があります。**Exception Request が記録、レビュー、承認されない場合、共有アカウントは無効化されることに注意してください。** 詳細については、[情報セキュリティポリシー例外管理プロセス](/handbook/security/controlled-document-procedure/#exceptions) ハンドブックページをご参照ください。

**この Issue リクエストの送信方法**

1. あなたの情報を使って、Issue のタイトルを「Shared Account Request, Role, System(s)」とつけてください。
1. `User Details` セクションを記入し、必要に応じて**行を削除または追加**してください。
1. アクセスが必要なシステムについて**行を追加**し、希望のシステムのみが Issue に残るようにしてください。**チェックは入れないでください。**
   - *[最小権限レビュー](https://internal.gitlab.com/handbook/security/access-management-standard/#least-privilege-reviews-for-access-requests) に従って必要な最小限のアクセスをリクエストし、根拠セクションでアクセスが必要な理由を説明し、リクエストする役割を指定してください。具体的に記述してください。*
1. この人物のマネージャーである場合、Issue にラベル `AR-Approval::Manager Approved` と `ready for provisioning` を追加してください。アクセスをリクエストしている本人の場合、承認のため*あなたの*マネージャーに割り当てる必要があり、彼らが `AR-Approval::Manager Approved` と `ready for provisioning` のラベルを追加する必要があります。
1. 承認後、[tech stack に記載された](https://gitlab.com/gitlab-com/www-gitlab-com/-/blob/master/data/tech_stack.yml) **Issue をシステムプロビジョナーに割り当てる** 必要があります。
1. 完了したら Issue を閉じてください。
{{% /panel %}}

#### 共有アカウントに対する IT 向けの手順とガイダンス

1. 共有アカウントアクセスリクエストをレビューし、共有アカウントに追加される各ユーザーに対して [Exception Request](https://gitlab.com/gitlab-com/gl-security/security-assurance/sec-compliance/compliance/issues?scope=all&utf8=%E2%9C%93&state=opened&label_name[]=Exception%20Request) があることを確認してください。Exception Request をレビューし、アクセスリクエスト Issue に例外期間を文書化してください。承認を追加するか共有アカウントを設定する前に、Exception Request が Security によってレビューおよび承認されていることを確認してください。
1. すべての共有アカウントは Okta を介して管理される必要があります。1Password を使用する必要がある場合（Okta が技術的に不可能な場合）、これをアクセスリクエストに記載する必要があります。
1. 共有アカウントが Okta で管理される場合 - 例外タイムラインに応じて Okta でレビュー／リマインダー日を設定し、共有アカウントアクセスをレビューして Issue を閉じてください。
   1. タイムライン期間が満了に近づいていることに関する Okta からの通知を受信した場合、新しい共有アカウントアクセスリクエストを記録し、共有アカウントオーナーに割り当てて完了させてください。
1. 共有アカウントが 1Password で管理される場合 - 例外タイムラインに応じて期日を追加し、Issue を開いたままにしてください。
   1. タイムライン期間が満了に近づいていることに関する `GitLab.com` からの通知を受信した場合、既存の Issue を閉じ、新しい共有アカウントアクセスリクエストを記録し、共有アカウントオーナーに割り当てて完了させてください。

---

### アクセス変更リクエスト

アクセス変更リクエストは、チームメンバーが現在プロビジョニング済みのシステムへのアクセスを必要としなくなった場合や、同じレベルのアクセスを必要としなくなった場合（管理者からユーザーへのアクセスダウングレードなど）に記録されます。
追加情報については、GitLab ハンドブックの [`For Total Rewards Analysts: Processing Promotions & Compensation Changes`](/handbook/people-group/promotions-transfers/) セクションを参照してください。

Okta にプロビジョニング／プロビジョニング解除の自動化が導入されているものの、これがアクセスのプロビジョニングおよびプロビジョニング解除の完全／正確な反映ではないことに注意することが重要です。
Okta は、ユーザーの役割／グループに基づいて統合／実装されたアプリケーションを割り当てるように構成されています。
これにより、Okta 経由でアプリケーションにアクセスできるようになりますが、ユーザーは依然としてシステムに直接アクセスできる可能性があります。
Okta で設定されたアプリケーションのリストは [Okta Application Stack](https://gitlab.com/gitlab-com/www-gitlab-com/-/blob/master/data/tech_stack.yml) を参照してください。

これは以下を意味します：

1. GitLab チームメンバーが別の役割に異動する。
1. Workday のチームメンバーのプロファイルが変更される。
1. このプロファイル変更により、自動的にチームメンバーの Okta プロファイルにも対応する変更がトリガーされる。
1. これにより、チームメンバーは新しい部門と役割に基づいて新しいアプリケーションに割り当てられる。
1. 同時に、新しい役割に関係のない古いアプリケーションはすべて取り消し／割り当て解除される。
1. さらに、Okta 管理者は Okta から、ユーザープロファイルに変更があったことを示すメールを受信する（メール件名：1 existing user updated）。Okta の自動化はバックグラウンドですでに行われており、このメールは情報提供のみです。

このアプリケーション自動化は Okta で行われますが、「真の」システムプロビジョニングおよびプロビジョニング解除は、影響を受けるシステム内でアクセス変更リクエストを介して手動で完了する必要があります。

---

### Google Groups、1Password ボルトまたはグループのアクセスリクエスト

*[このテンプレート](https://gitlab.com/gitlab-com/team-member-epics/access-requests/-/issues/new?issuable_template=googlegroup_1Passwordgroupvault) は、すべての人が同じシステムへのアクセスをリクエストする限り、個人または複数人のアクセスをリクエストするのに使用できます。複数人が異なるシステムへのアクセスを必要とする場合は、同じテンプレートを使用して複数の Issue を作成してください。異なるマネージャーに報告するが同じ部門または部署の一部である複数人のアクセスをリクエストする場合、最高レベルのマネージャー、つまり部門または部署のディレクター、バイスプレジデント、またはエグゼクティブから承認を得ることができます。*

{{% panel header="**手順**" header-bg="success" %}}

1. **タイトル** Issue「Full Name - System - Role」（例：Laura Croft Google Group: adventurer）
1. 必要なアクセスについて**行を削除または追加**してください。
1. これが以下のリクエストである**場合**、ラベルによる承認を得るためマネージャーに割り当ててください（彼らはラベル `AR-Approval::Manager Approved` と `ReadyForProvisioning` を適用する必要があります）：
   - 1Password ボルトまたはグループへのアクセス
   - 管理者アクセス
   - 内部以外の人物（共有 Slack チャンネルを含む）への Slack グループへのアクセス
   - 内部以外の人物が Slack チャンネルから削除され、再度アクセスをリクエストしている場合、新しいアクセスリクエストとマネージャー承認が必要であることに注意してください
1. 完了したら Issue を**閉じて**ください。
{{% /panel %}}

---

### 名前変更リクエスト

*名前が変更された場合に、[このテンプレート](https://gitlab.com/gitlab-com/team-member-epics/access-requests/-/blob/master/.gitlab/issue_templates/Name_change_request.md) を使用できます。*

{{% panel header="**手順**" header-bg="success" %}}

1. Issue のタイトルを `Full Previous Name to Full New Name - Name Change Request` とつけてください。
1. Issue テンプレートに記載されているように、該当するすべてのセクションを完了してください。
{{% /panel %}}

---

## アクセスリクエストへの取り組み

### 部門アクセスリクエストボード

- 追加のラベルが必要な場合や、完全に自動化できるまでのプロセスの改善提案がある場合は、[Issue を作成](https://gitlab.com/gitlab-com/it/end-user-services/issues/it-help-issue-tracker/-/issues/new) してください。
- AR は可能な限り、部門ごとに自動割り当てと自動ラベル付けが行われます。場合によっては、ツールごとに複数のプロビジョナーがいます。テンプレートが自動割り当てできない場合、Business Technology はプロビジョナーがラベル別に部門の Issue をレビューできるボード（例：`dept::to do`）を提供します。Issue を完了させるために誰が担当するかのワークフロー管理は、部門に委ねられています。
- **Issue を 1 つの列から別の列に移動すると、最初のラベル（列ヘッダーごと）が削除され、2 番目のラベルが追加されます。Issue を列間で移動する際は注意してください。**
- 部門は、以下のボードを表示することで、未解決のアクセスリクエスト Issue を確認できます。

{{% panel header="**AR ボード：to-do：**" header-bg="success" %}}

1. [Data](https://gitlab.com/gitlab-com/team-member-epics/access-requests/-/boards/1319045)
1. [Finance](https://gitlab.com/gitlab-com/team-member-epics/access-requests/-/boards/1319048)
1. [Infra](https://gitlab.com/gitlab-com/team-member-epics/access-requests/-/boards/1262513)
1. [IT](https://gitlab.com/gitlab-com/team-member-epics/access-requests/-/boards/1262521)
1. [Legal](https://gitlab.com/gitlab-com/team-member-epics/access-requests/-/boards/1319051)
1. [PeopleOPs](https://gitlab.com/gitlab-com/team-member-epics/access-requests/-/boards/1318841)
1. [Prod+Eng](https://gitlab.com/gitlab-com/team-member-epics/access-requests/-/boards/1319057)
1. [Marketing](https://gitlab.com/gitlab-com/team-member-epics/access-requests/-/boards/1284066)
1. [Sales](https://gitlab.com/gitlab-com/team-member-epics/access-requests/-/boards/1262518)
1. [Security](https://gitlab.com/gitlab-com/team-member-epics/access-requests/-/boards/1319052)
1. [Support](https://gitlab.com/gitlab-com/team-member-epics/access-requests/-/boards/1319053)
{{% /panel %}}

## Tech Stack の新しい項目にアクセスリクエストプロセスを追加する

Tech Stack の新しい項目に対してアクセスリクエストプロセスを開始する必要がある場合：

1. ツールが [tech stack](https://gitlab.com/gitlab-com/www-gitlab-com/-/blob/master/data/tech_stack.yml) に追加されていることを確認する
1. チームメンバーが `provisioner` `deprovisioner` として含まれていることを確認する
1. 関連するハンドブックページに、アクセスリクエストの提出が必要な要件を文書化する
