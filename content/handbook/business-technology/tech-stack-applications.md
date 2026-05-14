---
title: "テックスタックアプリケーション"
description: "GitLab テックスタックへのアクセス方法および更新リクエストの手順"
extra_js:
  - libs/vue.min.js
  - tech-stack.js
upstream_path: "/handbook/business-technology/tech-stack-applications/"
upstream_sha: "1e195b58b9f249ff10bd0e705106c320fee86141"
translated_at: "2026-05-14T22:00:00Z"
translator: "claude"
stale: false
---

## テックスタックのプロセスは HelpLab に移行しました

**テックスタックの管理プロセス全体は、2026 年 10 月 22 日 (水) に正式に HelpLab へ移行しました**。

- [HelpLab 上のテックスタック](https://helplab.gitlab.systems/esc?id=gitlab_cmdb_applications) は[こちら](https://helplab.gitlab.systems/esc?id=gitlab_cmdb_applications) からアクセスできます。Okta の **「Application Tech Stack」** アプリ経由でも利用可能です。

### 既存のマージリクエストがありますか?

- 心配は不要です。進捗状況に応じて、変更を完了し、**HelpLab 上のテックスタック** に反映します。

### 新しいマージリクエストを作成する予定ですか?

MR を提出する代わりに、新しい **テックスタック更新フォーム** をご利用ください。

- HelpLab の **[テックスタック更新フォーム](https://helplab.gitlab.systems/esc?id=sc_cat_item&sys_id=7eee5c19ff25e6503691fe34fc4fd9ab)** を使用してください。
- **Okta > HelpLab > IT > Tech Stack Update**

## 定義とアクセス

テックスタックは、事業を支えるために GitLab が現在使用しているすべてのテクノロジーのリストです。すべての部門で使用されるシステム、アプリケーション、ツール、データに加えて、ビジネス目的/説明、オーナー、プロビジョナー、アクセスチーム、その他の関連属性が記載されています。

**[HelpLab 上のテックスタック](https://helplab.gitlab.systems/esc?id=gitlab_cmdb_applications)** は現在、すべてのシステム情報および変更の公式な単一情報源 (Single Source of Truth) となっています。次の経路でアクセスできます。

- **Okta → HelpLab → IT → Tech Stack Update**
- Okta ダッシュボードで **「Application Tech Stack」** アプリを検索する
- 直接リンク: **[HelpLab 上のテックスタック](https://helplab.gitlab.systems/esc?id=gitlab_cmdb_applications)**

多くのアプリケーションには **[テックスタックガイド](/handbook/business-technology/tech-stack-guide/)** があり、各アプリの使われ方や実装方法を理解できます。

テックスタックの [Jupyter Notebook ビュー](https://colab.research.google.com/drive/1C0sikfvoY46p2-dbYNtHwo77VJLixCe2?usp=sharing) を使うと、データのフィルタリングや CSV、JSON、Markdown 形式へのエクスポートが可能です。

## 役割と責任

|役割|責任|
|----------|------------------------------|
|システムのビジネスオーナーおよびテクニカルオーナー|テックスタックデータの完全性と正確性に対する説明責任を負う。[テックスタックの更新](/handbook/business-technology/tech-stack-applications/#tech-stack-updates) を処理する。システム関連の問い合わせと管理の一次窓口となる。|
|IT Business Technology| テックスタックの Code Owner。サポートシステムについてビジネスオーナーおよびテクニカルオーナーに助言する。 |
|Security Risk|新規および既存システムのテックスタック更新を支援する。これには [ビジネス影響度分析](/handbook/security/security-assurance/security-risk/storm-program/business-impact-analysis/) の実施も含まれる。|

## テックスタックの定義

- **ビジネスオーナー**: ツールに関する予算と意思決定のすべてを担う個人 (複数の場合あり)。ツールがどのように、誰によって使われるかを定義します。通常はツールに `Owner` としてのログインアクセスを持ちますが、すべての場合でログインアクセスが必須というわけではありません。このフィールドには、チームではなく必ず個人の名前を記載してください。
- **テクニカルオーナー**: システムの性質によっては、ビジネスオーナーと同じ場合があります。たとえば、中央集権的に管理されておらず、設定がほとんど必要ないシステムなどです。中央集権的に管理されている、あるいは設定が多いシステムの場合、テクニカルオーナーは、アプリケーションのアーキテクチャや機能 (扱うデータの種類を含む)、GitLab に対する全体的な重要度や影響を理解している人物です。テクニカルオーナーは通常、ツールの `administrators` です。これには、ツールのアクセスをプロビジョニング/デプロビジョニングする管理者権限を持つすべての人、および/またはツールを管理するために必要な技術的専門性を持つ人が含まれます。
- **プロビジョナー/デプロビジョナー**: ツールへのチームメンバーのアクセスを付与・削除する責任者。ハンドブックに記載されるすべてのツールには、少なくとも 2 名のプロビジョナー/デプロビジョナーを指名する必要があります。プロビジョナーは Slack では `@provisioners` ハンドルで、GitLab では `@tech-stack-provisioner` ハンドルでグループとして連絡できます。

## テックスタックの更新

テックスタックのすべての変更は、HelpLab の **[テックスタック更新フォーム](https://helplab.gitlab.systems/esc?id=sc_cat_item&sys_id=7eee5c19ff25e6503691fe34fc4fd9ab)** を使って提出する必要があります。

### テックスタック更新リクエストの提出方法

1. **HelpLab → IT → Tech Stack Update** にアクセスします。
   *(Okta 経路: Okta → HelpLab → IT → Tech Stack Update)*
  ![Tech Stack Update](/images/business-technology/enterprise-applications/tech-stack/techstackapplication.png "Tech Stack Update")

2. HelpLab で IT セクション配下の **[テックスタック更新フォーム](https://helplab.gitlab.systems/esc?id=sc_cat_item&sys_id=7eee5c19ff25e6503691fe34fc4fd9ab)** を開きます。

3. フォームが読み込まれたら、**「What can we help you with?」** から該当するオプションを選択します。
   選択内容に応じて適切なフォローアップ質問が自動的に表示されます。
  ![Form](/images/business-technology/enterprise-applications/tech-stack/form-details.jpeg "Form")

4. 必要な詳細をすべて入力し、リクエストを送信します。

### 処理とワークフロー

- すべてのリクエストは HelpLab を介してルーティングされます。
- **HelpLab Team / IT EntApps Team** がエントリーをレビュー、検証、更新します。
- オーナーシップの役割は変わりません。引き続き、各システムのビジネスオーナー、テクニカルオーナー、プロビジョナーを指定します。

### **テックスタックにはどのようなデータが格納されますか?**

テックスタックを更新する際は、以下の手順に従い、各フィールドに正しい種類のデータを入力してください。

| フィールド | データの種類 | 入力内容 | 入力責任者 |
| ------ | ------ |------ |------ |
| title | テキスト | テックスタックに追加するシステムの名称。ツールに紐づく正式かつ正確なブランド名を入力してください。例: "[Zendesk](https://www.zendesk.com/) (ZenDesk ではない)" | MR 作成者および貢献者 |
| team_member_baseline_entitlement | ブール値* | ベースラインエンタイトルメントとは、**全** GitLab チームメンバーがアクセスできるシステムを指します。例: "Zoom"。テックスタックのほとんどのシステムはベースラインエンタイトルメントではありません。 | MR 作成者および貢献者 |
| description | テキスト/Markdown | システムのビジネス目的。システムが何のために使われているかについての追加情報を提供できるハンドブックページや Web サイトへのリンクを追加してください。例: "[ContractWorks](https://www.contractworks.com/) は契約管理ソフトウェアです。[このプロセス](/handbook/legal/vendor-contract-filing-process/) は、契約や関連するベンダードキュメントを完全締結後にファイリングするために使用します。" | MR 作成者および貢献者 |
| access_to | テキスト | このシステムへのアクセスを必要とする個人またはチームを定義。例: Strategic Marketing および Product Managers | MR 作成者および貢献者 |
| provisioner | シングルクォート付きテキスト、GitLab ユーザー名 | このシステムへのアクセスのプロビジョニング担当者のユーザー名をカンマ区切りで追加。1 つのツールにつき少なくとも 2 名のプロビジョナーを記載する必要があります。例: '`@username`, `@username1`' | MR 作成者および貢献者 |
| deprovisioner | シングルクォート付きテキスト、GitLab ユーザー名 | このシステムからのアクセス削除担当者のユーザー名をカンマ区切りで追加。1 つのツールにつき少なくとも 2 名のデプロビジョナーを記載する必要があります。チームメンバーはプロビジョナーとデプロビジョナーを兼任できます。例: '`@username`, `@username1`' | MR 作成者および貢献者 |
| group_owner | テキスト | ツールのグループオーナー (チーム/部門/機能) を追加。例: Infrastructure | MR 作成者および貢献者 |
| group_owner_slack_channel | テキスト | グループオーナーへ支援を依頼できる Slack チャンネルを追加。例: #infrastructure_platforms | MR 作成者および貢献者 |
| business_owner | テキスト | ビジネスオーナーは、ツールに関する予算と意思決定のすべてを担う個人 (複数の場合あり) です。ツールがどのように、誰によって使われるかを定義します。通常はツールに `Owner` としてのログインアクセスを持ちますが、すべての場合でログインアクセスが必須というわけではありません。このフィールドには、チームではなく必ず個人の名前を記載してください。例: Jane Doe, John Doe | MR 作成者および貢献者 |
| technical_owner | テキスト | テクニカルオーナーは、ツールのすべての `administrators` です。これには、ツールのアクセスをプロビジョニング/デプロビジョニングする管理者権限を持つすべての人、および/またはツールを管理するために必要な技術的専門性を持つ人が含まれます。例: Jane Doe, John Doe。システムに管理者機能を必要としない/有さないケースについては、[上記のガイダンス](/handbook/business-technology/tech-stack-applications/#tech-stack-definitions) を参照してください。 | MR 作成者および貢献者 |
| data_classification | テキスト (Red, Orange, Yellow, Green) または Unknown** | Security チームによって決定されます。このプロセスが完了するまでは `null` のままにしておいてください。[データ分類標準](/handbook/security/policies_and_standards/data-classification-standard/) について詳細を確認できます。| Security Risk |
| authentication_method | テキスト (Okta SWA, Okta SAML, ID とパスワード, その他) または Unknown** | システムにアクセスするための認証方式。[SWA](https://help.okta.com/en-us/content/topics/apps/apps_overview_of_managing_apps_and_sso.htm)、[SAML](https://support.okta.com/help/s/article/okta-saml?language=en_US)、または直接アクセス (メールとパスワードのログイン) などその他の方式があります。 | MR 作成者および貢献者 |
|critical_systems_tier|テキスト (Tier 1 Mission Critical, Tier 2 Business Critical, Tier 3 Business Operational, Tier 4 Administrative, TBD) または Unknown**|このフィールドは、GitLab の [重要システム階層定義](/handbook/security/security-assurance/security-risk/storm-program/critical-systems/) に基づいてシステムを分類します。重要システム階層の割り当ては、[ビジネス影響度分析](/handbook/security/security-assurance/security-risk/storm-program/business-impact-analysis/) (BIA) アンケートの完了に依存します。Security Risk Team は、システムをテックスタックに追加する時点で BIA がまだ完了していない場合、BIA の完了を調整します。|Security Risk|
| collected_data | テキスト または Unknown** | ツールによって収集されるデータ | MR 作成者および貢献者 |
| employee_or_customer_facing_app | テキスト (employee, customer) | アクセスが GitLab チームメンバーに限定される場合は `employee` を追加してください。アクセスが外部関係者にも付与可能な場合は `customer` を追加してください。 | MR 作成者および貢献者 |
| notes | テキスト または Unknown** | 他のフィールドで捕捉されないシステムに関する追加の関連情報。例: 実装とロールアウト用の GitLab Epic など。 | 任意, MR 作成者および貢献者 |
| handbook_link | テキスト/Markdown または Unknown** | 機能とシステム情報を含む `Tech Stack Guide` ハンドブックページへのリンク。例: "Marketing ハンドブックには [Marketo テックスタックガイド](/handbook/marketing/marketing-operations/marketo/tech-stack-guide-marketo/) が掲載されています。" | 任意, MR 作成者および貢献者 |
| external_link | テキスト/Markdown または Unknown** | アプリの公式 Web サイトへのリンク。例: "[ContractWorks](https://www.contractworks.com/)" | 任意, MR 作成者および貢献者 |
| google_group | テキスト または Unknown** | Okta 経由でシステムへのアクセスを管理するために使用される Google グループ | 任意, MR 作成者および貢献者 |
| accessibility | ブール値 | アプリケーションはアクセシビリティ機能をサポートしていますか? Yes または No を選択してください。(既存アプリケーションには一時的に "TBD" が設定されています) | MR 作成者および貢献者 |
| accessibility_description | テキスト | アクセシビリティ機能を有効化する、または有効化リクエストを送信する手順を記載します。(ハンドブックページやリクエスト入口へのリンクを含めることもできます) | MR 作成者および貢献者 |
| now_id | テキスト/ServiceNow ID | ServiceNow 用の連携 ID。EntApps エンジニアが入力するので空欄にしてください。 | 貢献者, ServiceNow エンジニア |

- *ブール値の場合、`true` または `false` のいずれかを明示的に入力する必要があります。
- **Unknown: 情報が不明な場合は、フィールドを空欄にせず、代わりに `null` と入力してください。

### テックスタックへの新規システムの追加

新規システムをテックスタックに追加するプロセスは、完全に HelpLab へ移行しました。`tech_stack.yml` ファイルへのマージリクエスト作成ではなく、以下のプロセスに従ってください。

1. **HelpLab → IT → [テックスタック更新](https://helplab.gitlab.systems/esc?id=sc_cat_item&sys_id=7eee5c19ff25e6503691fe34fc4fd9ab)** にアクセスします。
   *(Okta 経路: Okta → HelpLab → IT → Tech Stack Update)*
    ![Tech Stack Update](/images/business-technology/enterprise-applications/tech-stack/techstackapplication.png "Tech Stack Update")

2. フォームを開き、**Add a New System** を選択します。
   システムの説明、オーナーシップ、プロビジョナー、アクセスの詳細、データ分類、その他の関連属性など、必要なフィールドがすべて自動的に表示されます。

3. 詳細を入力し、リクエストを送信します。

> **注意:** Legal、IT Compliance、Internal Audit、Security Risk、Business Systems の各チームがワークフローに自動的に組み込まれ、リクエストが確定する前にそれぞれの担当セクションを完了します。

### テックスタック内の既存システムの更新

すべてのシステム更新は HelpLab を通じて行う必要があります。`tech_stack.yml` ファイルへのマージリクエスト作成ではなく、以下のプロセスに従ってください。

1. **HelpLab → IT → [テックスタック更新](https://helplab.gitlab.systems/esc?id=sc_cat_item&sys_id=7eee5c19ff25e6503691fe34fc4fd9ab)** に移動し、**Update an Existing System** を選択します。
  ![Tech Stack Update](/images/business-technology/enterprise-applications/tech-stack/techstackapplication.png "Tech Stack Update")
2. 修正したいシステムを選択します。
3. 更新の種類に応じたフォローアップ質問がフォームに自動的に表示されます。
4. 必要な変更を入力し、フォームを送信します。

該当するレビューグループが HelpLab ワークフローの一部として更新を検証・処理します。

### テックスタックからのシステムの削除

テックスタックからシステムを削除するには、`tech_stack.yml` ファイルへのマージリクエスト提出ではなく、[テックスタック更新](https://helplab.gitlab.systems/esc?id=sc_cat_item&sys_id=7eee5c19ff25e6503691fe34fc4fd9ab) フォームを使用してください。

1. **HelpLab → IT → [テックスタック更新](https://helplab.gitlab.systems/esc?id=sc_cat_item&sys_id=7eee5c19ff25e6503691fe34fc4fd9ab)** にアクセスし、**Remove a System** を選択します。
  ![Tech Stack Update](/images/business-technology/enterprise-applications/tech-stack/techstackapplication.png "Tech Stack Update")
2. 廃止やオフボーディングの背景情報と、プロセスを開始するために必要な詳細を提供します。
3. このワークフローの一部として、**ビジネスオーナー** は **Legal** および **IT Compliance** と連携し、データ削除および契約上の要件が完全に満たされていることを保証する必要があります。
4. すべてのステップが完了し検証されると、**HelpLab Team / EntApps Team** がシステムをテックスタックから削除します。

時折、テックスタックに掲載されているシステムが廃止されることがあります。システムがオフボーディングされる場合 (使用されなくなる、または置き換えられる)、HelpLab の [テックスタック更新](https://helplab.gitlab.systems/esc?id=sc_cat_item&sys_id=7eee5c19ff25e6503691fe34fc4fd9ab) ワークフローを通じて Remove a System リクエストを提出してください。

このプロセスの一環として、ビジネスオーナーは Legal および IT Compliance と協力し、ベンダー契約に従ってデータ削除と契約上の要件がすべて完了することを保証する必要があります。すべてのステップが検証されると、システムは HelpLab ワークフローを通じてテックスタックから削除されます。

## その他の関連プロセス

### アクセスリクエスト

システムへのアクセスをリクエストする方法の詳細は、[アクセスリクエストハンドブックページ](/handbook/security/corporate/end-user-services/access-requests/access-requests/) を参照してください。ユースケースに合った正しいテンプレートを選択し、手順に従ってください。

### 調達

新しいアプリケーション/システムを調達したい場合は、[調達ハンドブックページ](/handbook/finance/procurement/) を参照して開始方法の詳細を確認してください。このプロセスを経たアプリケーションのみがテックスタックに追加できます。

### サポート

アプリケーション/システムに問題が発生していますか? [Tech Stack YAML](https://gitlab.com/gitlab-com/www-gitlab-com/-/blob/master/data/tech_stack.yml) で `Group Owner/Slack Channel` を確認すれば、サポートを依頼すべき Slack チャンネルが分かります。

### コンプライアンス

テックスタックに掲載されている多くのアプリケーションは、規制対応やその他のコンプライアンス活動の対象となっています。詳細は以下の DRI までお問い合わせください。

- FedRAMP: Corey Oas (@corey-oas), Security Compliance
- GitLab SaaS SOC2: Liz Coleman (@lcoleman), Security Compliance
- GitLab Dedicated SOC2: Corey Oas (@corey-oas), Security Compliance
- ISO 27001: Liz Coleman (@lcoleman), Security Compliance
- SOX: Sean Brown (@sbrown10), Internal Audit

### オフボーディングテンプレートの更新

新しいシステムがテックスタックに追加されると、GitLab がコンプライアンスを保ち、退職後のチームメンバーをシステムから削除するために、オフボーディングテンプレートを更新する必要があります。オフボーディングテンプレートを更新する方法は 2 種類あります。新しいシステムの使用状況に最も適したオプションを選んでください。MR がマージ可能な状態になったら、People Operations チーム (`@gl-people-ops-team`) にタグ付けして承認とマージを依頼します。

<details>
<summary markdown="span">オプション 1: 複数部門にわたる多数のチームメンバーが使用する新規システム</summary>

[メインのチームメンバーオフボーディング](https://gitlab.com/gitlab-com/people-group/employment-templates/-/blob/main/.gitlab/issue_templates/offboarding.md) テンプレートを更新します。

メインテンプレートは 2 つのセクションに分かれています。最初のセクションは [Offboarding Tasks](https://gitlab.com/gitlab-com/people-group/people-operations/employment-templates/-/blob/main/.gitlab/issue_templates/offboarding.md#offboarding-tasks) セクションです。このセクションはすべての GitLab チームメンバーに適用され、マネージャー、People、Business Technology、Finance/Accounting の各チームによって実行されます。

2 つ目のセクションは [Tech Stack System Deprovisioning / Offboarding](https://gitlab.com/gitlab-com/people-group/people-operations/employment-templates/-/blob/main/.gitlab/issue_templates/offboarding.md#tech-stack-system-deprovisioning-offboarding-tasks-that-need-to-be-completed-within-5-days) セクションです。このセクションを、テックスタックに追加される新規システムで更新します。以下のフォーマットを使用して更新してください。

```markdown
## 新規システムを所有する部門名。新規システムが複数部門に所有されている場合は、メインのデプロビジョナーが所属する部門名を記載する。テンプレート内にすでに該当部門が存在しないことを確認すること。存在する場合は、このヘッダーを無視し、既存の部門ヘッダーの下に以下の情報を追加するだけにする

#### <summary>デプロビジョナー名 @usernameofdeprovisioner, デプロビジョナー名 2 @usernameofdeprovisioner2 など </summary>

<table >
 <tbody>
  <tr>
   <td> `System name`  </td>
   <td>

- [ ] Access Deprovisioned - System name
- [ ] Not Applicable to Team Member - System name

</td>
  </tr>
 </tbody>
</table>
```

完了したら、'Tech Stack - Add New System' MR の "Access Tasks" セクションに当該 MR をリンクしてください。
</details>

<details>
<summary markdown="span">オプション 2: 同一部門内の限定された人数のチームメンバーが使用する新規システム</summary>

このディレクトリ内の [部門レベルのオフボーディングテンプレート](https://gitlab.com/gitlab-com/people-group/people-operations/employment-templates/-/tree/main/.gitlab/issue_templates/offboarding_tasks) を更新します。

上記のリンクを使用して、新規システムを所有する部門のテンプレートを見つけ、更新します。例: Security チームのみが新規システムにアクセスする場合、[Security テンプレート](https://gitlab.com/gitlab-com/people-group/employment-templates/-/blob/main/.gitlab/issue_templates/offboarding_tasks/department_security.md) を見つけて、以下のフォーマットに従って新規システムを追加します。

`- [ ]  @usernameofdeprovisioner @usernameofdeprovisioner2: Remove the team member from System name`

完了したら、'Tech Stack - Add New System' MR の "Access Tasks" セクションに当該 MR をリンクしてください。
</details>

### 例外

テックスタックへのテクノロジー追加には例外があり、それらはケースバイケースで処理されます。
