---
title: "Infrastructure Security"
description: "Infrastructure Security は、商用、社内向け、FedRAMP にわたり、GitLab が稼働するクラウド環境を保護します。"
upstream_path: /handbook/security/product-security/infrastructure-security/
upstream_sha: 84ebb9fc88e6a42116737a8dbf279ac21828660f
translated_at: "2026-10-27T21:08:17.929583+00:00"
translator: claude
stale: false
lastmod: "2026-10-28T09:06:43+13:00"
---

Infrastructure Security（InfraSec）は、Platform Security グループに属する [Product Security](/handbook/security/product-security/)内のチームです。

## ミッション {#mission}

私たちは、GitLab の製品や社内チームが利用するクラウドを、商用、社内向け、FedRAMP にわたって保護します。クラウドのセキュリティ態勢を把握するための本番環境のセキュリティツールを運用し、その検出結果を修正につなげます。また、クラウド、インフラストラクチャ、データのセキュリティ要件を、エンジニアと AI エージェントの両方が読めるコントロールとして記述しています。これにより、安全な設定をレビューで確認するのではなく、最初から組み込みます。

## 対象範囲と責任 {#scope-and-responsibilities}

### 私たちの担当領域 {#what-we-own}

1. **クラウドセキュリティ要件。** クラウドおよびインフラストラクチャのセキュリティ要件を、開発者や AI のコーディングワークフローに組み込める機械可読なコントロールとして記述します。この取り組みは、現在構築中の GitLab Cloud Security Framework で進めています。
1. **インフラストラクチャセキュリティレビュー。** クラウドインフラストラクチャ、コンテナ、ネットワークアーキテクチャ、Infrastructure as Code、シークレット管理を追加または変更する機能について、AI を活用してレビューします。私たちは、これらのレビューを支えるエージェントとフローを構築・保守します。
1. **本番環境のセキュリティツール。** GitLab の各サービスで Wiz などのセキュリティツールを運用し、その検出結果を継続的な修正パイプラインに取り込みます。
1. **社内クラウド。** Sandbox Cloud 領域を含む社内クラウド環境のセキュリティを確保します。対象はアクセス制御、コストガバナンス、ポリシーの適用、アカウントのライフサイクルです。
1. **設定ミスの修正。** 本番環境と非本番環境でクラウドの設定ミスを発見し、修正します。
1. **FedRAMP の運用。** アクセラレーター提供のツールから、Commercial と Federal で共通のツールチェーンへ移行します。また、FedRAMP の脆弱性管理ツール、運用、報告も担当します。
1. **データセキュリティ。** 本番環境と非本番環境で、データ層のセキュリティ要件とデータ層のリスク修正を担当します。
1. **インフラストラクチャのペネトレーションテスト。** GitLab のクラウドおよび本番インフラストラクチャのペネトレーションテストを調整します。
1. **リスク登録簿の項目。** [Product Security リスク登録簿](/handbook/security/product-security/security-platforms-architecture/risk-register/)にあるクラウドとデータ層の項目を担当し、その是正を主導します。

### 対象外 {#out-of-scope}

| 領域 | 担当 |
|------|-------------|
| アプリケーション層のセキュリティレビュー | [Application Security](/handbook/security/product-security/security-platforms-architecture/application-security/) |
| 製品層のセキュリティアーキテクチャ要件 | [Security Architecture](/handbook/security/product-security/security-platforms-architecture/security-architecture/) |
| FedRAMP 以外の脆弱性管理 | [Vulnerability Operations](/handbook/security/product-security/vulnerability-management/) |
| GitLab 自身のグループとネームスペースのセキュリティコントロール、およびソフトウェアサプライチェーンのガバナンス | Security Posture Management |

### 業務の発生源 {#where-our-work-comes-from}

業務の大部分は、以下の依頼テンプレートを通じて届きます。それ以外は、リスク登録簿の項目、FedRAMP および Security Compliance に関するコミットメント、四半期ごとに計画するプロジェクトから発生します。

## 私たちへの依頼 {#working-with-us}

1. **インフラストラクチャセキュリティレビュー**を依頼するには、[セキュリティレビューテンプレート](https://gitlab.com/gitlab-com/gl-security/product-security/product-security-engagements/product-security-requests/-/issues/new?description_template=infrasec-security-review)を使って Issue を作成します。
1. **本番環境の準備状況レビュー**を依頼するには、[本番環境の準備状況テンプレート](https://gitlab.com/gitlab-com/gl-security/product-security/product-security-engagements/product-security-requests/-/issues/new?description_template=infrasec-production-readiness)を使って Issue を作成します。
1. **Teleport** のバグ報告や変更依頼には、[Teleport テンプレート](https://gitlab.com/gitlab-com/gl-security/product-security/product-security-engagements/product-security-requests/-/issues/new?description_template=infrasec-teleport)を使って Issue を作成します。
1. その他の依頼には、[汎用依頼テンプレート](https://gitlab.com/gitlab-com/gl-security/product-security/product-security-engagements/product-security-requests/-/issues/new?description_template=infrasec-other-request)を使います。

GitLab では個人をタグ付けせず、`@gitlab-com/gl-security/product-security/infrastructure-security` にメンションしてください。Slack では `#security-infrasec` に投稿するか、`@infrasec-team` をタグ付けしてください。

私たちは営業日ごとに新しい依頼をトリアージします。緊急で待てない場合は、`#security-infrasec` でその旨を伝えてください。セキュリティインシデントの場合は私たちの対応を待たず、任意の Slack チャンネルで `/security` を使って Security Incident Response Team を呼び出してください。

## 計画の立て方 {#how-we-plan}

私たちは四半期単位で計画し、すべての起点となるのは [FY27 InfraSec Planning エピック（&210）](https://gitlab.com/groups/gitlab-com/gl-security/product-security/infrastructure-security/-/work_items/210)です。各四半期には、その配下に計画用エピックと KTLO/BAU エピックがあります。四半期のエピックは毎四半期変わるため、ここでは FY27 の計画用エピックにリンクしています。

業務は次のように分類します。

- **デリバリーエピック**は、計画されたプロジェクトです。それぞれにリードと指名された代理担当者、明確な対象範囲があり、説明欄にはマイルストーンを記載します。
- **デリバリー Issue** は、単一の Issue で追跡する小規模なプロジェクトです。規模が大きくなった場合は、エピックを作成します。
- **KTLO/BAU** は、レビュー、アクセス権の付与、インシデントのフォローアップ、更新、単発のタスクなど、定期的な業務や依頼・事象に応じて発生する業務です。
- **一時停止中の業務**も、その四半期の計画用エピックで引き続き見えるようにし、気付かないうちに消えてしまう業務がないようにします。

### KTLO と BAU の業務の追跡 {#tracking-ktlo-and-bau-work}

KTLO または BAU の業務に取りかかる際は、[FY27 InfraSec Planning エピック](https://gitlab.com/groups/gitlab-com/gl-security/product-security/infrastructure-security/-/work_items/210)の配下にある当該四半期の KTLO/BAU エピックに、その Issue を子として追加します。Issue に別のチームのプロジェクトの親エピックがすでにある場合は、移動せず、私たちの KTLO/BAU エピックに関連項目としてリンクします。

これは見た目以上に重要です。依頼・事象に応じて発生する業務は私たちの仕事の大きな割合を占めており、KTLO/BAU エピックはそれを把握し、報告できる唯一の場所です。リンクされていなければ、計画上は実施されなかったことになります。

### ラベル {#labels}

デリバリーエピックとデリバリー Issue には、チームラベルと当該四半期のラベルの両方が必要です。計画用エピックのクエリは、それらを使って進行中の業務を見つけるため、どちらかのラベルがないものは表示されません。

| ラベル | 適用対象 |
|-------|-----------|
| `~"Infrastructure Security Team"` | InfraSec のすべての業務 |
| `~"Department::Product Security"` | InfraSec のすべての業務 |
| `~FY27-Q4`（当該四半期） | デリバリーエピックとデリバリー Issue のみ。計画用エピック、KTLO/BAU エピック、KTLO/BAU の項目には付けません |
| `~"InfraSec::triage"` | トリアージが必要な新しい依頼 |

デリバリー業務を次の四半期に持ち越す場合は、新しい四半期のラベルを追加し、古いラベルは履歴として残します。

### プロジェクトの責任 {#project-ownership}

各デリバリーエピックのリードは、その成果の提供に責任を持ちます。これは、エピックの説明欄のステータスとマイルストーンを最新に保ち、担当者とともに Issue を進めることを意味します。

## ミーティング {#meetings}

私たちは原則として、Issue とエピックで非同期に作業します。チームはニュージーランドから米国までのタイムゾーンにまたがるため、全員に都合のよいミーティング時間はありません。

チームの定例ミーティングは毎週行い、3 つの時間帯を順番に使います。これにより、誰もが深夜の通話をせずに一部の回に参加できます。3 つの時間帯すべてで、アジェンダと議事録をまとめた 1 つの定例ミーティングドキュメントを共有します。すべての回を録画し、その録画へのショートカットを定例ミーティングドキュメントと InfraSec の共有ドライブに置きます。参加できなかった場合は、録画で内容を確認し、非同期でアジェンダに追記します。

他のチームメンバーの参加も歓迎します。`#security-infrasec` で私たちに連絡いただければ、招待とアジェンダに追加します。

また、うまくいったことと変えるべきことを四半期ごとに振り返り、各チームメンバーはマネージャーと定期的に 1:1 を行います。

## 設計ドキュメント {#design-documents}

新しいプロジェクトを始める前に、設計ドキュメントを作成することを推奨します。実装方法と主要な判断、特に検討したトレードオフを記録します。

設計を提案するには、次のようにします。

1. [InfraSec Team Charter リポジトリ](https://gitlab.com/gitlab-com/gl-security/product-security/infrastructure-security/team-charter/-/tree/main/designs)で MR を作成し、[設計ドキュメントのテンプレート](https://gitlab.com/gitlab-com/gl-security/product-security/infrastructure-security/team-charter/-/blob/main/.gitlab/issue_templates/design_doc.md)を参考にします。
1. 各セクションに記入します。
1. 他のチームメンバーをレビュアーとして追加します。
1. 対応するデリバリーエピックから MR にリンクします。

## チームのメンバー {#whos-on-the-team}

名簿は古くなってしまうため、ここには掲載しません。現在のチームについては、次を確認してください。

- **Workday** では、チームのメンバーとその報告先を確認できます。
- **Slack：** `@infrasec-team` で全員に連絡でき、`#security-infrasec` で業務をオープンに進めています。
- **GitLab：** [Infrastructure Security グループのメンバー一覧](https://gitlab.com/groups/gitlab-com/gl-security/product-security/infrastructure-security/-/group_members)。
- **役割の説明**は、[職務内容ライブラリ](/job-description-library/security/infrastructure-security)にあります。

## チームのページとリソース {#team-pages-and-resources}

- [内部ハンドブック](https://internal.gitlab.com/handbook/security/product_security/infrastructure_security/)は、私たちの運用上の唯一の情報源です（GitLab のチームメンバーのみ閲覧可能）。
- [Infrastructure Security サブグループ](https://gitlab.com/gitlab-com/gl-security/product-security/infrastructure-security)には、私たちのエピックとリポジトリがあります。
- [Infrastructure Security の公開サブグループ](https://gitlab.com/gitlab-com/gl-security/security-operations/infrastructure-security-public)には、Docker イメージなどの公開リソースがあります。
- [Teleport](teleport/)では、本番リソースへのアクセスについて説明しています。
- [Issue のライフサイクル](issue-lifecycle/)では、トリアージボットが Issue にラベルを付け、クローズする方法を説明しています。

### オンボーディング {#onboarding}

- Infrastructure Security の[オンボーディングテンプレート](https://gitlab.com/gitlab-com/gl-security/product-security/infrastructure-security/team-charter/-/blob/master/onboarding/onboarding_template.md)
- [InfraSec の権限テンプレート](https://gitlab.com/gitlab-com/team-member-epics/access-requests/-/blob/master/.gitlab/issue_templates/role_baseline_access_request_tasks/department_security/role_security_engineer_infrastructure_security.md)

## このページを最新に保つ {#keeping-this-page-current}

私たちは四半期計画の一環として、各四半期末にこのページをレビューします。それ以前に誤りを見つけた場合は、MR を作成してください。
