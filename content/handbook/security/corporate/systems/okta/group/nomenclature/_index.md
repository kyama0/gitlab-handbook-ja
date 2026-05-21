---
title: Okta グループの命名規則
upstream_path: /handbook/security/corporate/systems/okta/group/nomenclature/
upstream_sha: 1e195b58b9f249ff10bd0e705106c320fee86141
translated_at: "2026-05-10T00:00:00Z"
translator: claude
stale: false
lastmod: "2025-11-25T19:22:00+01:00"
---

## 概要

Okta グループはアクセス管理の基本構成要素です。標準化された命名規則を用いることで、グループの検出、追跡、管理、運用の自動化を効率的に行えます。明確な命名は、アクセス監査、グループの目的の理解、プロビジョニング要求の正しいルーティングを容易にします。

### GitLab における Okta グループの種類

GitLab の Okta グループは次の 6 つのカテゴリに分類されます。

- **App グループ** — Okta の Assignments タブからアプリケーションに割り当てられ、SSO、SCIM プロビジョニング、グループクレーム、ライセンス割り当てに使用されます
- **Push グループ** — SCIM 経由でダウンストリームのアプリケーションに同期され、対象システム内のグループメンバーシップ、権限、ロール、エンタイトルメント、機能を管理します
- **Attribute グループ** — ユーザーに共通する属性（部門、所在地、部門グループ、コストセンターなど）を表します
- **Policy グループ** — Okta プラットフォームのポリシー（MFA、セッション管理、アクセスレビュー、認証）を制御します
- **Admin グループ** - Okta ユーザーに管理者ロールやリソースセットを割り当てるために使用されます
- **その他のグループ** — 上記カテゴリに当てはまらない、外部システムの要件によって決まる可能性があるグループ名

### 命名規則

**推奨:**

- 論理的な構成要素の区切りにはピリオド (.) を使う
- 構成要素名内のスペースの代わりにアンダースコア (_) を使う
- グループ名はすべて小文字にする
- GitLab で非常によく使われる用語でない限り、単語は省略せず完全な形で書く（例: people_operations の代わりに people_ops、google_cloud_platform の代わりに google_cloud）

**避けるべき:**

- ハイフン (-)
- UPPERCASE や camelCase
- スペース
- GitLab で広く認知されているか、システム上の制約（例: Okta グループルール名の 55 文字制限）で必要な場合を除き、単語の短縮形や略語

## グループの種類と命名規則

### App グループ

**構文:**

`app.{system}.{environment_if_necessary}.{role_or_permission}`

App グループは **Okta の Assignments タブ** からアプリケーションに割り当てられます。次のいずれかの仕組みを通じて、外部システムやアプリケーションへのアクセスを管理するために使われます。

- SSO アクセスのためにユーザーをアプリに割り当てる
- アプリ割り当てによる SCIM ユーザープロビジョニングを使う（ダウンストリームのアプリでユーザーが作成・更新・削除される）
- サインイン時にアクセス、ロール、権限を決定するためにグループクレーム (SAML/OIDC) を渡す
- アプリの Assignments タブからライセンスを割り当てる（例: Figma、Lucidchart）
- Google の OU、ロール、ライセンスを割り当てる

**例:**

- `app.salesforce.users` — Salesforce ユーザー
- `app.greenhouse_recruiting.users` — Greenhouse Recruiting ユーザー

### Push グループ

**構文:**

`push.{system}.{environment_if_necessary}.{role_or_permission}`

Push グループは **Okta の Push Groups タブ** で構成され、SCIM プロビジョニング経由でダウンストリームのアプリケーションに同期されます。Push グループは対象システムのグループメンバーシップを管理し、そのメンバーシップが何を付与するかはアプリケーション側で独立して決まります。Push グループはアプリ固有とし、グループの依存関係を避け分離を保つために、複数のアプリケーション間で再利用してはいけません。

Push グループは以下の用途で使用します。

- Google Workspace 内に Google グループを作成・管理する
- ダウンストリームのグループに権限やロールを付与する（例: アクセス委任のための Google グループ）
- アプリのグループメンバーシップにプッシュする（例: チャネル管理のための Slack ユーザーグループ）
- ダウンストリームのアプリが管理するフィーチャーフラグやエンタイトルメントを付与する（例: Tableau のビューワーライセンス、Anthropic Console のロール）
- ダウンストリームのグループ構造、階層、アクセス制御リストを管理する

**重要:** 同じグループを割り当てとプッシュの両方に使ってはいけません。Okta は Okta とダウンストリームアプリ間でグループメンバーシップの一貫性を保つために、別々のグループを必要とします。

**例:**

- `push.google.gemini_users` — Google Workspace にグループを作成し、Gemini アプリへのアクセスを提供する
- `push.google.systems_operations_friends@gitlab.com` - Google Workspace にグループを作成し、systems_operations_friends@gitlab.com メールグループのメンバーシップを付与する
- `push.slack.security_team` — セキュリティチーム用の Slack ユーザーグループ
- `push.tableau.viewer_license` — ビューワーライセンスのエンタイトルメントを持つ Tableau ユーザー
- `push.figma.product_team` — プロダクトチームのファイルアクセス用の Figma グループ

### IGA 管理グループ

IGA 管理グループは、特定のアプリケーションを承認しプロビジョニングする担当者を定義するために使われます。

**構文:**

`corpsys.{function}.{system}`

**例:**

- `corpsys.approver.salesforce` — Salesforce へのアクセス要求の承認者グループ
- `corpsys.provisioner.tableau` — リクエスト承認後に Tableau へのアクセスをプロビジョニングするユーザーのグループ
- `corpsys.approver.claude.dev` — Claude Dev 環境への参加要求の承認者グループ

### Attribute グループ

**構文:**

`{attribute_name}.{attribute_value}`

Attribute グループは通常、ユーザーの共通属性や特性を表す参照グループです。これらのグループは、部門、部門グループ、所在地、その他の組織属性に基づくアクセス判断を行うために Okta 内で使われることが多いです。特定のユーザー集団の _信頼できる情報源_ として機能します。
これらのグループにはメンバーを手動で割り当ててはいけません。

**例:**

- `dept.information_technology` — 情報技術部門の全メンバー
- `country.ca` — カナダにいる全チームメンバー
- `div.engineering` — エンジニアリング部門の全メンバー

### Policy グループ

**構文:**

`policy.{description}`

Policy グループは、グローバルセッションポリシー、MFA ポリシー、アクセスポリシーなど、Okta プラットフォームのポリシーを管理するために使われます。これらのグループは、ユーザーがどのように・いつシステムを認証してアクセスできるかを決定します。

**例:**

- `policy.employee` — GitLab の従業員に適用される Okta セッションポリシー、認証ポリシー、MFA ポリシー
- `policy.privileged` — 特権または管理／ブラックアカウント用
- `policy.professional_services` - プロフェッショナルサービスパートナーチームメンバー用の Okta セッションポリシー、認証ポリシー、MFA ポリシー

### Admin グループ

**構文:**

`admin.{role_name}`

**例:**

- `admin.read-only_administrator` - Okta の Read-only administrator ロールを付与
- `admin.organization_administrator` - Okta の Organization administrator ロールを付与
- `admin.report_administrator` - Okta の Reports administrator ロールを付与

### その他のグループ

「その他のグループ」は、アプリケーションや外部システムが上記の規則に揃えられない特定のグループ名を要求する場合にのみ使ってください。これらのグループは例外であり、通常運用とすべきではありません。

その他のグループを作成する前に、それが App グループ、Attribute グループ、Policy グループのいずれにも当てはまらないことを確認してください。その他のグループが必要な場合は、標準命名規則に従えない理由を関連 Issue に文書化してください。
注: Okta Push グループはダウンストリームのアプリケーションでリネームできることが多いため、私たちは命名規則を維持しつつ、アプリ側に必要なグループ名を提供できます。

**例:**

- `LookerAdmin` — SaaS アプリ「Looker」が Okta 内で特定のグループ名を要求する
- `SaaSApp-BreakGlass-10dg91` — インシデント対応手順で必要となる緊急アクセスグループ

### エッジケースと特殊シナリオ

**省略されたグループ名**

組織内で広く理解されている短縮形がある場合は、頭字語を用いてグループ名を省略しても構いません。例えば、Amazon Web Services の全ユーザー向けに「app.aws.users」を使うことができます。「AWS」は正式名称よりも認知度が高いことが多いためです。
組織全体で一貫性を保ち、新しいチームメンバーが命名規則を理解しやすくするため、グループの説明欄に追加情報を記載してください。

**ベンダー指定の要件**

一部のアプリケーションは、これらの規則と矛盾する特定のグループ名フォーマットを必要とします。そのような場合は、ベンダー要件のグループ名を「その他のグループ」カテゴリに作成し、Okta のグループ説明欄にビジネス上の正当性を記載してください。
これは非常に稀であるべきで、ダウンストリームアプリのニーズに応じつつ命名規則に従う方法が多くの場合存在することに注意してください。
