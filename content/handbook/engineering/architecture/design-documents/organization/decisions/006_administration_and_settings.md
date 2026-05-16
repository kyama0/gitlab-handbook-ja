---
owning-stage: "~devops::tenant scale"
title: 'Organizations ADR 006: 管理と設定'
creation-date: "2025-08-26"
authors: [ "@alexpooley" ]
toc_hide: true
upstream_path: /handbook/engineering/architecture/design-documents/organization/decisions/006_administration_and_settings/
upstream_sha: 7fadd0122802b16e64b0e88962c637a09d27bd53
translated_at: "2026-04-27T00:00:00Z"
translator: claude
stale: false
lastmod: "2026-03-18T16:55:00+13:00"
---

## コンテキスト

### 現状

GitLabの管理はInstance Levelで行われます。管理機能には以下が含まれます。

- [ユーザー管理](https://docs.gitlab.com/administration/administer_users/)などの顧客データの管理
- [可視性レベルの制限](https://docs.gitlab.com/administration/settings/visibility_and_access_controls/#restrict-visibility-levels)などのアプリケーション設定
- [サインアップ制限](https://docs.gitlab.com/administration/settings/sign_up_restrictions/)などのインスタンス設定

### 変更点

Organization LevelはInstance Levelのほとんどを置き換え、上記の機能は相応に移動します。「顧客データの管理」と「アプリケーション設定」はOrganization Levelに移動し、「インスタンス設定」はInstance Levelに残ります。

同様に、AdminロールはInstance Levelのロールです。Organization OwnerロールはAdminロールのほとんどを置き換えます。Adminロールはすべてのデータにアクセスできますが、このロールの典型的な使用はInstance設定の変更です。
Organization OwnersはOrganization Level内に常駐し、「顧客データの管理」と「アプリケーション設定」が移動してきます。

これらのInstanceとOrganization Levelsはすべてのプラットフォームにわたって存在します。

### Self ManagedとDedicatedへの影響

Self Managed（SM）とDedicatedは現在のところ単一のOrganizationしか持ちません。
単一のOrganizationでは、Organization体験は透過的なものとなり、
ユーザーの体験は今日と同じままになります。

SMとDedicatedのAdminsは、この単一OrganizationのOrganization Ownersにもなりますが、Organization OwnerロールとOrganizationは顧客に対して透過的なままです。

### GitLab.comへの影響

GitLab.comでは、一部のGitLabチームメンバーがAdminロールを持ち、顧客はOrganization Ownerロールを受け取ります。AdminsはOrganizationsを管理する権限を持ちます。Organization Ownersは自分のOrganizationsのみを管理できます。

OrganizationsとOrganization OwnerロールはGitLab.comで可視化されます。
GitLab.com上の顧客は、自分のOrganizations内でOrganization Ownerロールにアクセスできます。Instance Levelから移動した機能や完全に新しい機能など、Organization Levelに追加されたすべての機能も顧客がアクセスできるようになります。

### 実行上の課題

Organization LevelのさまざまなコンポーネントはOrganizationsグループが開発しますが、各GitLabチームは自分のチームの機能を移動する必要があります。
これにより、コミュニケーションと調整の課題が生じます。

主な目標はProtoCellへのデータ移行であるため、時間とキャパシティの制約があります。解決策はこれらの制約内で実行可能である必要があります。

## 決定

アクセスと機能がユーザーのロールによって定義されるGitLabのAdminセクションのポートを実行します。ポートの背後にある重要なアイデアは、書き直しを避けるために既存の機能をできる限り再利用することです。

AdminユーザーによるInstance Level管理は引き続き`/admin`で行われます。

Organization OwnerによるOrganization Level管理は`/o/my-org/admin`で行われます。

以前はGitLabインスタンスが1つのInstance Levelを持つという1対1のマッピングがありました。
今やGitLabインスタンスごとに多くのOrganization Levelsが存在します。ポートはこの変更に対応しながら、上記のコンテキストに準拠する必要があります。

バックエンドのコード観点からは、Organization Admin Controllerが確立され、ポートされたAdmin Controllersのランディングポイントとなり、そのControllerと関連するアクションのOrganization互換性を示します。

## 結果

以下を実現する新しいUXデザインを確立する必要があります。

1. 既存のSMとDedicatedの体験を継続する。
2. GitLab.com上のOrganization Ownerとしての同じSMとDedicated管理体験

他のチームがOrganizations Admin Areaで機能をポートおよび/または新機能を開発するのを支援するために、開発者ガイドと例のセットが構築されます。

## 代替案

以前は新しい並列のOrganizations管理エリアを構築していました。
そこにはグローバルAdmin Areaの既存の作業と重複する作業がありました。
Organizationsの可視性の処理も本来よりも目立っていました。
