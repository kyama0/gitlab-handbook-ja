---
title: "テックスタックアプリケーション"
description: "GitLab テックスタックへのアクセス方法および更新リクエストの手順"
extra_js:
  - libs/vue.min.js
  - tech-stack.js
upstream_path: "/handbook/business-technology/tech-stack-applications/"
upstream_sha: "b4eeb07f0d5f46e2fc5f8572be1a2547261aed89"
translated_at: "2026-04-25T09:00:00Z"
translator: "claude"
stale: false
---

## テックスタックのプロセスは HelpLab に移行しました

**テックスタック管理プロセスは 2024 年 10 月 22 日（水）をもって HelpLab に正式に移行しました。**

- [HelpLab 上のテックスタック](https://helplab.gitlab.systems/esc?id=gitlab_cmdb_applications)は[こちら](https://helplab.gitlab.systems/esc?id=gitlab_cmdb_applications)にあります。Okta の **"Application Tech Stack"** アプリからもアクセスできます。

### 既存のマージリクエストがある場合

- ご安心ください。進捗状況に応じて、変更内容を **HelpLab 上のテックスタック**に完了・反映します。

### 新しいマージリクエストを作成しようとしている場合

MR を提出する代わりに、新しい **テックスタック更新フォーム**をご利用ください：

- HelpLab の **[テックスタック更新フォーム](https://helplab.gitlab.systems/esc?id=sc_cat_item&sys_id=7eee5c19ff25e6503691fe34fc4fd9ab)**を使用してください：
- **Okta > HelpLab > IT > Tech Stack Update**

## 定義とアクセス

テックスタックは、GitLab が現在ビジネスサポートのために使用しているすべてのテクノロジーの一覧です。全部門にわたって使用されているシステム・アプリケーション・ツール・データが含まれており、ビジネス目的/説明、オーナー、プロビジョナー、アクセスチーム、その他の関連属性などの詳細も含まれています。

**[HelpLab 上のテックスタック](https://helplab.gitlab.systems/esc?id=gitlab_cmdb_applications)**は、すべてのシステム情報と変更に関する公式の唯一の情報源（SSOT）となりました。以下からアクセスできます：

- **Okta → HelpLab → IT → Tech Stack Update**
- Okta ダッシュボードで **"Application Tech Stack"** アプリを検索
- 直接リンク: **[HelpLab 上のテックスタック](https://helplab.gitlab.systems/esc?id=gitlab_cmdb_applications)**

多くのアプリケーションには、各アプリの使用方法と実装方法を理解するための **[テックスタックガイド](/handbook/business-technology/tech-stack-guide/)** が用意されています。

テックスタックのこの [Jupyter Notebook ビュー](https://colab.research.google.com/drive/1C0sikfvoY46p2-dbYNtHwo77VJLixCe2?usp=sharing)では、データを CSV・JSON・Markdown 形式でフィルタリングおよびエクスポートできます。

## 役割と責任

|役割|責任|
|----------|------------------------------|
|システムのビジネス・テクニカルオーナー|テックスタックデータの完全性と正確性に対して説明責任を持つ。[テックスタック更新](/handbook/business-technology/tech-stack-applications/#tech-stack-updates)を処理する。システム関連の問い合わせと管理の主な窓口となる。|
|IT Business Technology|テックスタックのコードオーナー。システムをサポートするビジネス・テクニカルオーナーにアドバイスを提供する。|
|Security Risk|新規および既存システムの[ビジネスインパクト分析](/handbook/security/security-assurance/security-risk/storm-program/business-impact-analysis/)を含むテックスタック更新の促進を支援する。|

## テックスタックの定義

- **ビジネスオーナー**: ビジネスオーナーは、ツールに関するすべての予算と意思決定に責任を持つ個人（複数可）です。ツールの使用方法と使用者を定義する必要があります。この人物は通常 `Owner` としてツールへのログインアクセスを持ちますが、すべての場合に必須ではありません。このフィールドにはチームではなく個人を列挙してください。
- **テクニカルオーナー**: システムの性質によってはビジネスオーナーと同一人物の場合もあります（例：システムが集中管理されていない場合や設定がほぼ不要な場合）。集中管理されており設定が多いシステムの場合、テクニカルオーナーはアプリケーションのアーキテクチャ・機能（関係するデータの種類を含む）・全体的な重要度/GitLab への影響を理解している人物です。テクニカルオーナーは通常ツールの `管理者` です。これには、ツールへのアクセスのプロビジョニング・デプロビジョニングの権限を持つすべての人、および管理に必要な技術的専門知識を持つすべての人が含まれます。
- **プロビジョナー/デプロビジョナー**: ツールへのチームメンバーアクセスの付与と削除を担当する人物です。ハンドブック内のすべてのツールについて、少なくとも 2 名のプロビジョナー/デプロビジョナーを指定する必要があります。プロビジョナーは Slack の `@provisioners` ハンドル、GitLab の `@tech-stack-provisioner` ハンドルでグループとして連絡できます。

## テックスタックの更新

すべてのテックスタック変更は、HelpLab の **[テックスタック更新フォーム](https://helplab.gitlab.systems/esc?id=sc_cat_item&sys_id=7eee5c19ff25e6503691fe34fc4fd9ab)**を使用して提出する必要があります。

### テックスタック更新リクエストの提出方法

1. **HelpLab → IT → Tech Stack Update** に移動します
   *(Okta パス: Okta → HelpLab → IT → Tech Stack Update)*
  ![Tech Stack Update](/images/business-technology/enterprise-applications/tech-stack/techstackapplication.png "Tech Stack Update")

2. HelpLab で IT セクション配下の **[テックスタック更新フォーム](https://helplab.gitlab.systems/esc?id=sc_cat_item&sys_id=7eee5c19ff25e6503691fe34fc4fd9ab)**を開きます。

3. フォームが読み込まれたら、**「何のご用件ですか？」**の下から適切なオプションを選択します。
   該当するフォローアップの質問が自動的に表示されます。
  ![Form](/images/business-technology/enterprise-applications/tech-stack/form-details.jpeg "Form")

4. 必要な詳細をすべて入力してリクエストを送信します。

### 処理とワークフロー

- すべてのリクエストは HelpLab を通じてルーティングされます。
- **HelpLab チーム / IT EntApps チーム**がレビュー・検証・エントリの更新を行います。
- オーナーシップの役割は変わりません — 各システムのビジネスオーナー、テクニカルオーナー、プロビジョナーを引き続き指定します。

### **テックスタックに含まれるデータ**

テックスタックを更新する際は、以下の指示に従い、各フィールドに正しい種類のデータを使用してください。

| フィールド | データ種別 | 指示 | 記入責任者 |
| ------ | ------ |------ |------ |
| title | テキスト | テックスタックに追加するシステムの名称。ツールに関連する正式かつ正確なブランド名を入力してください。例: "[Zendesk](https://www.zendesk.com/)（ZenDesk ではない）" | MR 作成者と貢献者 |
| team_member_baseline_entitlement | ブール値* | ベースラインエンタイトルメントとは、**すべての** GitLab チームメンバーがアクセスするシステムです。例: "Zoom"。テックスタック内のほとんどのシステムはベースラインエンタイトルメントではありません。 | MR 作成者と貢献者 |
| description | テキスト/Markdown | システムのビジネス目的。システムの用途についてより多くの情報を提供できるハンドブックページや Web サイトへのリンクを追加してください。例: "[ContractWorks](https://www.contractworks.com/) は契約管理ソフトウェアです。[このプロセス](/handbook/legal/vendor-contract-filing-process/)は、契約または関連するベンダー文書が完全に実行された後にファイルするために使用します。" | MR 作成者と貢献者 |
| access_to | テキスト | このシステムへのアクセスが必要な個人またはチームを定義します。例: Strategic Marketing と Product Manager | MR 作成者と貢献者 |
| provisioner | シングルクォート内のテキスト、GitLab ユーザー名 | このシステムへのアクセスのプロビジョニングを担当する人のユーザー名をカンマ区切りで追加します。ツールのプロビジョナーは少なくとも 2 名必要です。例: '`@username`, `@username1`' | MR 作成者と貢献者 |
| deprovisioner | シングルクォート内のテキスト、GitLab ユーザー名 | このシステムへのアクセスの削除を担当する人のユーザー名をカンマ区切りで追加します。ツールのデプロビジョナーは少なくとも 2 名必要です。チームメンバーはプロビジョナーとデプロビジョナーの両方を兼任できます。例: '`@username`, `@username1`' | MR 作成者と貢献者 |
| group_owner | テキスト | ツールのグループオーナー（チーム/部門/機能）を追加します。例: Infrastructure | MR 作成者と貢献者 |
| group_owner_slack_channel | テキスト | グループオーナーにサポートを求めるための Slack チャンネルを追加します。例: #infrastructure-lounge | MR 作成者と貢献者 |
| business_owner | テキスト | ビジネスオーナーは、ツールに関するすべての予算と意思決定に責任を持つ個人（複数可）です。ツールの使用方法と使用者を定義する必要があります。この人物は通常 `Owner` としてツールへのログインアクセスを持ちますが、すべての場合に必須ではありません。チームではなく個人を列挙してください。例: Jane Doe、John Doe | MR 作成者と貢献者 |
| technical_owner | テキスト | テクニカルオーナーはツールの `管理者` 全員です。これには、ツールへのアクセスのプロビジョニング・デプロビジョニングの権限を持つすべての人、および管理に必要な技術的専門知識を持つすべての人が含まれます。例: Jane Doe、John Doe。管理者機能が不要/存在しないシステムについては[上記](/handbook/business-technology/tech-stack-applications/#tech-stack-definitions)のガイダンスを参照してください | MR 作成者と貢献者 |
| data_classification | テキスト (Red, Orange, Yellow, Green) または Unknown** | セキュリティチームが決定します。このプロセスが完了するまで `null` のままにしてください。[データ分類標準](/handbook/security/policies_and_standards/data-classification-standard/)の詳細情報をご確認ください。| Security Risk |
| authentication_method | テキスト (Okta SWA, Okta SAML, ID and password, other) または Unknown** | システムへのアクセスに使用される認証方式。[SWA](https://help.okta.com/en-us/content/topics/apps/apps_overview_of_managing_apps_and_sso.htm)、[SAML](https://support.okta.com/help/s/article/okta-saml?language=en_US)、またはダイレクトアクセス（メールとパスワードログイン）などが該当します。| MR 作成者と貢献者 |
|critical_systems_tier|テキスト (Tier 1 Mission Critical, Tier 2 Business Critical, Tier 3 Business Operational, Tier 4 Administrative, TBD) または Unknown**|GitLab の[クリティカルシステム階層定義](/handbook/security/security-assurance/security-risk/storm-program/critical-systems/)に基づいてシステムを分類するフィールドです。クリティカルシステム階層の割り当ては、[ビジネスインパクト分析](/handbook/security/security-assurance/security-risk/storm-program/business-impact-analysis/)（BIA）アンケートの完了に依存します。システムがテックスタックに追加される時点で BIA が未完了の場合、Security Risk チームが BIA 完了を調整します。|Security Risk|
| collected_data | テキスト または Unknown** | ツールが収集するデータ | MR 作成者と貢献者 |
| employee_or_customer_facing_app | テキスト (employee, customer) | アクセスが GitLab チームメンバーのみに限定されている場合は `employee` と入力します。外部関係者にもアクセスを付与できる場合は `customer` と入力します。 | MR 作成者と貢献者 |
| notes | テキスト または Unknown** | 他のフィールドに含まれていないシステムに関する追加情報。例として、実装とロールアウトの GitLab Epic へのリンクなどが挙げられます。 | 任意、MR 作成者と貢献者 |
| handbook_link | テキスト/Markdown または Unknown** | 機能とシステム情報を含む `テックスタックガイド` ハンドブックページへのリンク。例: "マーケティングハンドブックには [Marketo テックスタックガイド](/handbook/marketing/marketing-operations/marketo/tech-stack-guide-marketo/)が含まれています。" | 任意、MR 作成者と貢献者 |
| external_link | テキスト/Markdown または Unknown** | アプリの主要 Web サイトへのリンク。例: "[ContractWorks](https://www.contractworks.com/)" | 任意、MR 作成者と貢献者 |
| google_group | テキスト または Unknown** | Okta 経由でシステムへのアクセスを管理するために使用されている Google グループ | 任意、MR 作成者と貢献者 |
| accessibility | ブール値 | アプリケーションはアクセシビリティ機能をサポートしていますか？ Yes または No を選択してください。（既存のアプリケーションは一時的に "TBD" に更新されています） | MR 作成者と貢献者 |
| accessibility_description | テキスト | アクセシビリティ機能を有効化またはリクエストする手順を記載します。（ハンドブックページまたはリクエスト受付ポイントへのリンクを含む場合があります） | MR 作成者と貢献者 |
| now_id | テキスト/ServiceNow ID | ServiceNow のインテグレーション ID。EntApps エンジニアが記入するため空白のままにしてください。 | 貢献者、Service Now エンジニア |

- *ブール値には `true` または `false` を入力してください。
- **Unknown: 情報が不明な場合は空白にせず、代わりに `null` と入力してください。

### テックスタックへの新しいシステムの追加

テックスタックへの新しいシステム追加プロセスは完全に HelpLab に移行しました。`tech_stack.yml` ファイルへのマージリクエストを作成する代わりに、以下のプロセスに従ってください：

1. **HelpLab → IT → [Tech Stack Update](https://helplab.gitlab.systems/esc?id=sc_cat_item&sys_id=7eee5c19ff25e6503691fe34fc4fd9ab)** に移動します
   *(Okta パス: Okta → HelpLab → IT → Tech Stack Update)*
    ![Tech Stack Update](/images/business-technology/enterprise-applications/tech-stack/techstackapplication.png "Tech Stack Update")

2. フォームを開き、**新しいシステムを追加**を選択します。
   フォームには、システムの説明、オーナーシップ、プロビジョナー、アクセス詳細、データ分類、その他の関連属性など、必要なフィールドが自動的に表示されます。

3. 詳細を入力してリクエストを送信します。

> **注意:** Legal、IT Compliance、Internal Audit、Security Risk、Business Systems は、リクエストが確定される前にそれぞれのセクションを完了するためにワークフローに自動的に関与します。

### テックスタックの既存システムの更新

すべてのシステム更新は HelpLab を通じて行う必要があります。`tech_stack.yml` ファイルへのマージリクエストを作成する代わりに、以下のプロセスに従ってください：

1. **HelpLab → IT → [Tech Stack Update](https://helplab.gitlab.systems/esc?id=sc_cat_item&sys_id=7eee5c19ff25e6503691fe34fc4fd9ab)** に移動し、**既存のシステムを更新**を選択します。
  ![Tech Stack Update](/images/business-technology/enterprise-applications/tech-stack/techstackapplication.png "Tech Stack Update")
2. 変更するシステムを選択します。
3. フォームには更新の種類に基づいてフォローアップの質問が自動的に表示されます。
4. 必要な変更を入力してフォームを送信します。

適切なレビュアーグループが HelpLab ワークフローの一部として更新を検証・処理します。

### テックスタックからのシステムの削除

テックスタックからシステムを削除するには、`tech_stack.yml` ファイルへのマージリクエストを提出する代わりに、[テックスタック更新](https://helplab.gitlab.systems/esc?id=sc_cat_item&sys_id=7eee5c19ff25e6503691fe34fc4fd9ab)フォームを使用してください。

1. **HelpLab → IT → [Tech Stack Update](https://helplab.gitlab.systems/esc?id=sc_cat_item&sys_id=7eee5c19ff25e6503691fe34fc4fd9ab)** に移動し、**システムを削除**を選択します。
  ![Tech Stack Update](/images/business-technology/enterprise-applications/tech-stack/techstackapplication.png "Tech Stack Update")
2. 廃止またはオフボーディングの背景と、プロセスを開始するために必要な詳細を提供します。
3. このワークフローの一環として、**ビジネスオーナー**は **Legal** および **IT Compliance** と連携し、データ削除と契約要件が完全に対処されていることを確認する必要があります。
4. すべてのステップが完了・検証されたら、**HelpLab チーム / EntApps チーム**がテックスタックからシステムを削除します。

テックスタックに記載されているシステムが廃止されることがあります。システムがオフボーディング（使用停止または置き換え）される場合は、HelpLab の[テックスタック更新](https://helplab.gitlab.systems/esc?id=sc_cat_item&sys_id=7eee5c19ff25e6503691fe34fc4fd9ab)ワークフローを通じてシステム削除リクエストを送信してください。

このプロセスの一環として、ビジネスオーナーは Legal および IT Compliance と連携し、ベンダー契約に従ってすべてのデータ削除と契約要件が完了していることを確認する必要があります。すべてのステップが検証されたら、HelpLab ワークフローを通じてシステムがテックスタックから削除されます。

## その他の関連プロセス

### アクセスリクエスト

システムへのアクセスをリクエストする方法については、[アクセスリクエストのハンドブックページ](/handbook/security/corporate/end-user-services/access-requests/access-requests/)をご確認ください。ユースケースに合ったテンプレートを選択し、指示に従ってください。

### 調達

新しいアプリケーション/システムを調達したいですか？開始方法については、[調達ハンドブックページ](/handbook/finance/procurement/)をご確認ください。このプロセスを経たアプリケーションのみがテックスタックに追加できます。

### サポート

アプリケーション/システムに問題が発生していますか？[テックスタック YAML](https://gitlab.com/gitlab-com/www-gitlab-com/-/blob/master/data/tech_stack.yml) で `Group Owner/Slack Channel` を確認し、サポートを依頼するために連絡すべき Slack チャンネルを見つけてください。

### コンプライアンス

テックスタックに記載されている多くのアプリケーションは、規制やその他のコンプライアンス活動の対象範囲内にあります。詳細については、以下に記載されている DRI にお問い合わせください：

- FedRAMP: Corey Oas (@corey-oas)、Security Compliance
- GitLab SaaS SOC2: Liz Coleman (@lcoleman)、Security Compliance
- GitLab Dedicated SOC2: Corey Oas (@corey-oas)、Security Compliance
- ISO 27001: Liz Coleman (@lcoleman)、Security Compliance
- SOX: Sean Brown (@sbrown10)、Internal Audit

### オフボーディングテンプレートの更新

テックスタックに新しいシステムが追加された際は、GitLab からチームメンバーが退職した後にシステムからアクセスを削除できるよう、GitLab がコンプライアンスを保つためにオフボーディングテンプレートを更新する必要があります。オフボーディングテンプレートを更新する方法は 2 種類あります。新しいシステムの使用状況に最も適したオプションを選択してください。MR をマージする準備ができたら、People Operations チーム (`@gl-people-ops-team`) を承認とマージのためにタグ付けしてください。

<details>
<summary markdown="span">オプション 1: 複数部門にまたがって多くの/すべてのチームメンバーが使用する新しいシステム</summary>

[メインのチームメンバーオフボーディング](https://gitlab.com/gitlab-com/people-group/employment-templates/-/blob/main/.gitlab/issue_templates/offboarding.md)テンプレートを更新します。

メインテンプレートは 2 つのセクションに分かれています。最初のセクションは[オフボーディングタスク](https://gitlab.com/gitlab-com/people-group/people-operations/employment-templates/-/blob/main/.gitlab/issue_templates/offboarding.md#offboarding-tasks)セクションです。このセクションはすべての GitLab チームメンバーに適用され、マネージャー、People、Business Technology、Finance/Accounting チームによって実行されます。

2 番目のセクションは[テックスタックシステムのデプロビジョニング/オフボーディング](https://gitlab.com/gitlab-com/people-group/people-operations/employment-templates/-/blob/main/.gitlab/issue_templates/offboarding.md#tech-stack-system-deprovisioning-offboarding-tasks-that-need-to-be-completed-within-5-days)セクションです。テックスタックに追加される新しいシステムでこのセクションを更新します。更新には以下の形式を使用してください：

```markdown
## 新しいシステムを所有する部門。新しいシステムが複数の部門で所有されている場合は、主なデプロビジョナーが所属する部門を記載してください。その部門がテンプレート内にすでに存在する場合は、このヘッダーを無視して既存の部門ヘッダーの下に情報を追加してください。

#### <summary>デプロビジョナー名 @デプロビジョナーのユーザー名, デプロビジョナー名 2 @デプロビジョナーのユーザー名 2, など </summary>

<table >
 <tbody>
  <tr>
   <td> `システム名`  </td>
   <td>

- [ ] アクセスのデプロビジョニング完了 - システム名
- [ ] チームメンバーに適用なし - システム名

</td>
  </tr>
 </tbody>
</table>
```

完了したら、'Tech Stack - Add New System' MR の "Access Tasks" セクションに MR をリンクしてください。
</details>

<details>
<summary markdown="span">オプション 2: 同じ部門に所属する限られた数のチームメンバーが使用する新しいシステム</summary>

このディレクトリ内の[部門レベルのオフボーディングテンプレート](https://gitlab.com/gitlab-com/people-group/people-operations/employment-templates/-/tree/main/.gitlab/issue_templates/offboarding_tasks)を更新します。

上記リンクを使用して、新しいシステムを所有する部門のテンプレートを見つけて更新します。例: セキュリティチームのみが新しいシステムへのアクセスを持つ場合、[セキュリティテンプレート](https://gitlab.com/gitlab-com/people-group/employment-templates/-/blob/main/.gitlab/issue_templates/offboarding_tasks/department_security.md)を見つけ、以下の形式で新しいシステムを追加します：

`- [ ]  @デプロビジョナーのユーザー名 @デプロビジョナーのユーザー名 2: システム名からチームメンバーを削除`

完了したら、'Tech Stack - Add New System' MR の "Access Tasks" セクションに MR をリンクしてください。
</details>

### 例外

テックスタックへのテクノロジー追加には、ケースバイケースで処理される例外があります。
