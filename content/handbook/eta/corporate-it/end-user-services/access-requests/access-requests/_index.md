---
title: "アクセスリクエスト（AR）"
build:
    list: never
    render: never
upstream_path: /handbook/eta/corporate-it/end-user-services/access-requests/access-requests/
upstream_sha: c75ccd81af7d76262c8cb188bf7e7e2a7f838894
lastmod: 2026-07-28T15:04:15+01:00
translated_at: "2026-07-31T08:01:44+09:00"
translator: codex
stale: false
---

アクセスリクエストは IT チームが担当し、オンボーディング、オフボーディング、社内異動のリクエストは People Operations Team が担当します。

アクセスリクエストに関する質問がある場合は、Slack の Compass アプリ（上部の検索バーに「Compass」と入力して見つけます）または it-help@gitlab.com へメールで IT にお問い合わせください。

## アクセスリクエストに関連するページ

- [よくある質問](/handbook/eta/corporate-it/end-user-services/access-requests/#application-specific-templates)
- [Baseline Entitlements](https://internal.gitlab.com/handbook/eta/corporate-it/end-user-services/access-request/baseline-entitlements/)
- [一時的なサービスプロバイダーのアクセスリクエストとオンボーディング](https://internal.gitlab.com/handbook/eta/corporate-it/end-user-services/access-request/temporary-service-providers/)

## お困りの場合

- 特定の SLA はありませんが、Issue で `@gitlab-com/gl-security/corp/helpdesk` に @メンションしてください。
- リクエストが緊急の場合は、Slack の Compass アプリ（上部の検索バーに「Compass」と入力して見つけます）または it-help@gitlab.com へメールで IT にお問い合わせください。

## どのテンプレートを使用すればよいですか？ {#how-do-i-choose-which-template-to-use}

### 個別または一括のアクセスリクエスト

*すべての人が同じシステムへのアクセスをリクエストする場合、個人または複数人へのアクセスをリクエストするには[このテンプレート](https://gitlab.com/gitlab-com/team-member-epics/access-requests/-/issues/new?issuable_template=Individual_Bulk_Access_Request)を使用できます。複数の人が異なるシステムへのアクセスを必要とする場合は、同じテンプレートを使用して複数の Issue を作成してください。同じ部門または部に所属しながら異なる Manager に報告する複数の人にアクセスをリクエストする場合は、部門または部の最上位の Manager、すなわち Director、Vice President、または Executive から承認を取得できます。*

{{% panel header="**手順**" header-bg="success" %}}
アクセス情報をリクエストする人の詳細を使用して、Issue のタイトルを `Full Name, System(s), Role` とします。一括アクセスをリクエストする場合は、`Bulk Access, System(s), Role` とします。

**ステップ 1. 個人情報**

1. *個人情報:* アクセスをリクエストする人のリストを提供してください。関連する情報を含めてください。
1. *SSH Keys:* リクエストするアクセスの種類で必要な場合にのみ、公開 ssh キーを追加してください。

**ステップ 2. アクセスリクエスト**

1. アクセスが必要なシステムに合わせて行を削除または追加します。**テンプレートの形式に必ず従ってください（以下にも記載しています）**。リクエストするロール、vault、グループ、チャンネル、またはプロジェクトを追加して、リクエストするアクセスをできるだけ具体的に示してください。
1. 管理アクセスが付与される場合は、admin-access ラベルを追加してください。[最小権限レビュー](https://internal.gitlab.com/handbook/security/access-management-standard/#least-privilege-reviews-for-access-requests)に従って必要最小限のアクセスをリクエストし、根拠セクションでアクセスが必要な理由を説明してください。
1. リクエストに Infrastructure チームが所有するシステムへのアクセスが含まれる場合は（[Tech Stack](https://gitlab.com/gitlab-com/www-gitlab-com/-/blob/master/data/tech_stack.yml)に従って）、`@gitlab-com/gl-infra/managers` にメンションし、~InfrastructureApproved ラベルを追加して承認するよう依頼してください。

   ```text
   - [ ] System name: Which vault, which group, which channel, which project, which role?
   - Justification for this access: Please explain why this access is needed.
   ```

**ステップ 3: 承認のため Manager に割り当てる**

1. 自分の直属の部下のためにアクセスをリクエストする Manager の場合は、ステップ 4 に進んでください。
1. Issue に `AR-Approval::Needs Manager Approval` ラベルを追加してください。
1. Issue を自分の Manager に割り当ててください。同じ部門または部に所属しながら異なる Manager に報告する複数の人にアクセスをリクエストする場合は、部門または部の最上位の Manager、すなわち Director、Vice President、または Executive から承認を取得できます。

**ステップ 4: Managers が行うこと**

1. この人の Manager である場合は、Issue に `AR-Approval::Manager Approved` と `ReadyForProvisioning` のラベルを追加してください。自分がアクセスを求める人である場合は、承認のために*自分の* Manager に割り当てる必要があり、その Manager が `AR-Approval::Manager Approved` と `ready for provisioning` のラベルを追加する必要があります。
1. 承認後、**必ず Issue を[Tech Stack に一覧化されているシステムのプロビジョニング担当者](https://gitlab.com/gitlab-com/www-gitlab-com/-/blob/master/data/tech_stack.yml)に割り当ててください。**

**ステップ 5: プロビジョニング担当者が行うこと**

1. プロビジョニングの前に、チームメンバーには職務を遂行するために必要な最小限のアクセスのみを付与すべきであることを考慮してください。アクセスレベルが必要か、より低いアクセスレベルで十分かを判断してください。
1. アクセスレベルが適切な場合は、AR-Approval::Manager Approved ラベルがあることを確認してから、アカウントのプロビジョニングに進んでください。
1. ステップ 2 で、プロビジョニングしたシステムにチェックを入れてください。
1. 管理アクセスが付与される場合は、Security Operations が誰に管理アクセスがあるかを把握できるよう、このリクエストに admin-access ラベルを追加してください。
   - GitLab.com への管理アクセスを付与する場合は、ユーザーが GitLab Instance Administrators グループに追加されていることを確認してください。
   - 2fa が必要であり、すぐに設定しないとロックアウトされることをユーザーに通知してください。
{{% /panel %}}

---

### 共有アカウントのアクセスリクエスト

{{% panel header="**手順**" header-bg="success" %}}
**この Issue リクエストを送信する前に**

1. リクエストが GitLab のポリシーと手順に沿っていることを確認するため、[Access Control Policy and Procedures](/handbook/security/)を確認してください。確認後も共有アカウントが必要だと判断した場合は、テンプレートを使用して Issue を送信してください。**PCI データを含むシステムでは共有アカウントは許可されないことに注意してください。**
1. 共有アカウントのリクエストは、IT Ops と記載されている Tech Stack Owner によるレビューと承認が必要です。
**追加をリクエストするユーザーごとに、[Exception Request](https://gitlab.com/gitlab-com/gl-security/security-assurance/sec-compliance/compliance/issues/new?issuable_template=Exception%20Request)を記録する必要があります。** Exception Request の例外期間は最大 90 日です（デバイスの例外のみ 365 日）。
例外期間の後は、レビューと承認のために別の例外リクエストを送信する必要があります。**例外リクエストが記録、レビューされ、延長を承認されない場合、共有アカウントは無効になります。** 詳細については、[情報セキュリティポリシー例外管理プロセス](/handbook/security/controlled-document-procedure/#exceptions) ハンドブックページを参照してください。

**この Issue リクエストを送信する手順**

1. 自分の情報を使用して、Issue のタイトルを「Shared Account Request, Role, System(s)」とします。
1. `User Details` セクションに記入し、必要に応じて**行を削除または追加**してください。
1. 必要なシステムだけが Issue に残るよう、アクセスが必要なシステムの**行を追加**してください。**チェックを入れないでください。**
   - *[最小権限レビュー](https://internal.gitlab.com/handbook/security/access-management-standard/#least-privilege-reviews-for-access-requests)に従って必要最小限のアクセスをリクエストし、根拠セクションでアクセスが必要な理由を説明して、リクエストするロールを指定してください。具体的に記載してください。*
1. この人の Manager である場合は、Issue に `AR-Approval::Manager Approved` と `ready for provisioning` のラベルを追加してください。自分がアクセスを求める人である場合は、承認のために*自分の* Manager に割り当てる必要があり、その Manager が `AR-Approval::Manager Approved` と `ready for provisioning` のラベルを追加する必要があります。
1. 承認後、**必ず Issue を[Tech Stack に一覧化されているシステムのプロビジョニング担当者](https://gitlab.com/gitlab-com/www-gitlab-com/-/blob/master/data/tech_stack.yml)に割り当ててください。**
1. 完了したら Issue をクローズしてください。
{{% /panel %}}

#### 共有アカウントに関する IT 向けの手順とガイダンス

1. 共有アカウントのアクセスリクエストをレビューし、共有アカウントに追加する各ユーザーについて[Exception Request](https://gitlab.com/gitlab-com/gl-security/security-assurance/sec-compliance/compliance/issues?scope=all&utf8=%E2%9C%93&state=opened&label_name[]=Exception%20Request)があることを確認してください。Exception Request をレビューし、アクセスリクエスト Issue に例外期間を記載してください。承認を追加したり共有アカウントを設定したりする前に、Exception Request が Security によりレビューおよび承認されていることを確認してください。
1. すべての共有アカウントは Okta 経由で管理する必要があります。1Password を使用する必要がある場合（Okta を技術的に使用できない場合）は、そのことをアクセスリクエストに明記する必要があります。
1. 共有アカウントを Okta で管理する場合 - 例外のタイムラインに応じて共有アカウントアクセスをレビューし、Issue をクローズするためのレビュー／リマインダー日を Okta に設定してください。
   1. タイムラインの期限が近づいていることに関する通知を Okta から受け取った場合は、新しい共有アカウントのアクセスリクエストを記録し、完了するために Shared Account Owner に割り当ててください。
1. 共有アカウントを 1Password で管理する場合 - 例外のタイムラインに応じた期限を追加し、Issue をオープンのままにしてください。
   1. タイムラインの期限が近づいていることに関する通知を `GitLab.com` から受け取った場合は、既存の Issue をクローズし、新しい共有アカウントのアクセスリクエストを記録して、完了するために Shared Account Owner に割り当ててください。

---

### アクセス変更リクエスト

チームメンバーが現在プロビジョニング済みのシステムへのアクセスを必要としなくなった場合、または同じアクセスレベルを必要としなくなった場合（admin から user へのアクセスのダウングレードなど）、アクセス変更リクエストが記録されます。
追加情報については、GitLab ハンドブックの [`For Total Rewards Analysts: Processing Promotions & Compensation Changes`](/handbook/people-group/promotions-transfers/) セクションを参照してください。

Okta にはプロビジョニング／プロビジョニング解除の自動化がありますが、これはアクセスのプロビジョニングおよびプロビジョニング解除を完全かつ正確に反映するものではないことに注意してください。
Okta は、ユーザーのロール／グループに基づいて統合済み／実装済みのアプリケーションを割り当てるよう設定されています。
これによりアプリケーションには Okta 経由でアクセスできますが、ユーザーはシステムに直接アクセスすることも可能です。
Okta で設定されているアプリケーションの一覧については、[Okta Application Stack](https://gitlab.com/gitlab-com/www-gitlab-com/-/blob/master/data/tech_stack.yml)を参照してください。

これは、次のことを意味します。

1. GitLab チームメンバーが別のロールに異動します。
1. Workday のチームメンバーのプロファイルが変更されます。
1. このプロファイルの変更により、チームメンバーの Okta プロファイルの変更が自動的にトリガーされます。
1. これにより、新しい部門とロールに基づいて、チームメンバーに新しいアプリケーションが割り当てられます。
1. 同時に、新しいロールに関連しない古いアプリケーションはすべて取り消し／割り当て解除されます。
1. さらに、Okta 管理者はユーザープロファイルに変更があったことを Okta からメールで受け取ります（メールの件名: 1 existing user updated）。Okta の自動化はすでにバックグラウンドで実行されており、このメールは情報提供のみを目的としています。

このアプリケーションの自動化は Okta で行われますが、「真の」システムのプロビジョニングとプロビジョニング解除は、影響を受けるシステム内でアクセス変更リクエストを介して手動で完了する必要があります。

---

### Google Groups、1Password Vaults、または Groups のアクセスリクエスト

*すべての人が同じシステムへのアクセスをリクエストする場合、個人または複数人へのアクセスをリクエストするには[このテンプレート](https://gitlab.com/gitlab-com/team-member-epics/access-requests/-/issues/new?issuable_template=googlegroup_1Passwordgroupvault)を使用できます。複数の人が異なるシステムへのアクセスを必要とする場合は、同じテンプレートを使用して複数の Issue を作成してください。同じ部門または部に所属しながら異なる Manager に報告する複数の人にアクセスをリクエストする場合は、部門または部の最上位の Manager、すなわち Director、Vice President、または Executive から承認を取得できます。*

{{% panel header="**手順**" header-bg="success" %}}

1. **タイトル**には、自分の情報を使用して「Full Name - System - Role」（例: Laura Croft Google Group: adventurer）と入力します。
1. 必要なアクセスの行を**削除または追加**します。
1. このリクエストが以下に該当する場合は、ラベルによる承認を得るために Manager に割り当ててください**（Manager は `AR-Approval::Manager Approved` と `ReadyForProvisioning` のラベルを適用する必要があります）:**
   - 1Password vault またはグループへのアクセス
   - 管理アクセス
   - 共有 Slack チャンネルを含む、社内関係者以外の人の Slack グループへのアクセス
   - 社内関係者以外の人が Slack チャンネルから削除され、再度アクセスをリクエストする場合は、新しいアクセスリクエストと Manager の承認が必要であることに注意してください。
1. 完了したら Issue を**クローズ**してください。
{{% /panel %}}

---

### 氏名変更リクエスト

*名前が変更された場合は、[このテンプレート](https://gitlab.com/gitlab-com/team-member-epics/access-requests/-/blob/master/.gitlab/issue_templates/Name_change_request.md)を使用できます。*

{{% panel header="**手順**" header-bg="success" %}}

1. Issue のタイトルを `Full Previous Name to Full New Name - Name Change Request` とします。
1. Issue テンプレートで説明されているとおり、該当するすべてのセクションに記入してください。
{{% /panel %}}

---

## アクセスリクエストへの取り組み

### 部門のアクセスリクエストボード

- 完全に自動化できるまでの間に追加のラベルが必要な場合や、プロセス改善の提案がある場合は、[Issue を作成してください](https://gitlab.com/gitlab-com/it/end-user-services/issues/it-help-issue-tracker/-/issues/new)。
- AR は可能な場合に部門別に自動割り当ておよび自動ラベル付けされます。場合によっては、ツールごとに複数のプロビジョニング担当者がいます。テンプレートを自動割り当てできない場合、Business Technology はプロビジョニング担当者がラベルごとに部門の Issue を確認できるボードを提供します（例: `dept::to do`）。Issue を完了まで担当する人のワークフロー管理は部門の責任です。
- **Issue をある列から別の列へ移動すると、最初のラベル（列ヘッダーごと）が削除され、2 番目のラベルが追加されます。列間で Issue を移動する際は注意してください。**
- 部門は以下のボードを表示して、未解決のアクセスリクエスト Issue を確認できます。

{{% panel header="**AR ボード: 対応待ち:**" header-bg="success" %}}

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

Tech Stack の新しい項目に対するアクセスリクエストプロセスを開始する必要がある場合：

1. ツールが [Tech Stack](https://gitlab.com/gitlab-com/www-gitlab-com/-/blob/master/data/tech_stack.yml)に追加されていることを確認してください。
1. チームメンバーが `provisioner` `deprovisioner` として含まれていることを確認してください。
1. 関連するハンドブックページにアクセスリクエストを送信する要件を文書化してください。
