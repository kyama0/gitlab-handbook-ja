---
title: '依存関係の自動更新 ADR 003：単一サービスアカウントモデル'
description: '当初提案された 2 アカウントモデルではなく、更新ジョブとマージリクエスト作成の両方に、プロジェクトごとに 1 つのサービスアカウントを使用するという決定。'
upstream_path: /handbook/engineering/architecture/design-documents/automated_dependency_updates/decisions/003_single_service_account/
upstream_sha: bc76a1a59f8b471f304263e712307581bdc7d128
translated_at: "2026-09-04T22:19:18+09:00"
translator: codex
stale: false
lastmod: "2026-08-26T18:59:23+02:00"
---

## コンテキスト {#context}

元の提案では、侵害されたトークンの影響範囲を限定するため、2 つの別々のアカウントを
使用することになっていました。

- リポジトリの読み取りと依存関係更新ブランチへの書き込みだけにスコープを限定し、
  パッケージレジストリのトークンも、マージリクエストを作成する権限も持たない
  **CI ジョブアカウント**。
- CI ジョブアカウントがすでにプッシュしたブランチからマージリクエストをオープンするためだけに使用し、
  任意のコードを実行できない、別の**MR 作成アカウント**。

その考え方は、侵害されたジョブトークンがマージリクエストをオープンするために必要な `api` スコープを
決して持たず、侵害された MR 作成トークンはコードを
決して実行できないようにするというものでした。

## 決定事項 {#decision}

**プロジェクトごとに 1 つのサービスアカウント**をプロビジョニングし、両方の
ステップで使用します。

`DependencyManagement::ProvisionServiceAccountService` は、
`Namespaces::ServiceAccounts::ProjectCreateService` を使用し、プロジェクトごとに
`GitLab Dependency Management` という名前のサービスアカウントを 1 つ作成して
（プロジェクトをキーとする排他的リースを使用し、冪等に）、
**Guest** メンバーとしてプロジェクトに追加します。`UpdateService`（更新
ジョブを駆動してブランチをプッシュする）と `CreateMergeRequestService`（結果の
マージリクエストをオープンする）はどちらも、
`project.dependency_management_service_account` を通じて同じアカウントを再利用します。

### 権限が実際に機能する仕組み {#how-the-permissions-actually-work}

サービスアカウントは、ブランチの作成、ファイルの書き込み、マージリクエストのオープンを行う通常の
アプリケーションサービスに、現在のユーザーとして渡されます。すべてのアクションは通常の権限チェックを
通過し、認可をバイパスするものはありません。

これらのアクションを許可するのは、専用の内部ロール
[`config/authz/roles/dependency_management_service_account.yml`](https://gitlab.com/gitlab-org/gitlab/-/blob/master/config/authz/roles/dependency_management_service_account.yml)です。
プロジェクトポリシーがそのロールを有効にするのは、現在のユーザーがプロジェクトのメンバーであり、
かつそのプロジェクトに指定された依存関係管理サービスアカウント*である*場合だけです。
このロールのスコープは、リポジトリの読み取り、ブランチのプッシュ、パイプラインの作成、
マージリクエストの作成、読み取り、更新という、機能に必要なものに限定されます。
Guest メンバーシップは、アカウントをメンバーにするためのもので、書き込みアクセス権を
付与するものではありません。正確な権限セットについては、ロールファイルが信頼できる情報源です。

### 断念したもの {#what-we-gave-up}

2 アカウント設計の主要な特性は失われます。現在は 1 つのアイデンティティが、
更新ジョブを実行し、マージリクエストもオープンします。侵害されたサービスアカウントは、
そのプロジェクト内の保護されていない任意のブランチにプッシュして、マージリクエストをオープンできます。
元の分離方式では、侵害されたジョブの認証情報はマージリクエストをオープンできず、
侵害されたマージリクエスト用の認証情報はコードを実行できませんでした。

私たちは、次のものと引き換えにこれを受け入れました。

1. 権限セットは範囲が狭く、2 つのアカウントへのロール割り当てによって暗黙的に決まるのではなく、
   レビュー可能な 1 ファイルで宣言されます。
1. 漏えいする可能性のある長期間有効な API スコープのトークンはありません。認可は
   トークンベースではなくポリシーベースであり、アカウントにはパッケージレジストリの認証情報を発行しません。
1. 書き込みは通常のユーザーとして通常のファイルサービスとブランチサービスを経由するため、
   バイパスされるのではなく、プロジェクトの既存のリポジトリ制御が適用されます。
1. 不合理な数のファイルに変更を加える更新は、マージリクエストの作成時に拒否し、
   1 つの自動コミットの影響範囲を制限します。
1. プロジェクトごとの認証情報を 2 つから 1 つにすることで、プロビジョニング、
   ローテーション、クリーンアップのオーバーヘッドをなくします。プロビジョニングは冪等で、
   メンバーシップの追加に失敗すると、孤立したアカウントをクリーンアップします。

後で職務分掌を再び必要とする場合は、2 つ目のアカウントではなく、
2 つ目の内部ロールを設けるのが自然な形です。

## 参考資料 {#references}

1. `ee/app/services/dependency_management/provision_service_account_service.rb`
1. `ee/app/services/dependency_management/security_update/create_merge_request_service.rb`
1. `ee/app/policies/ee/project_policy.rb`
1. `config/authz/roles/dependency_management_service_account.yml`
1. [001：上限を設け、重大度を優先する修正](./001_bounded_severity_prioritized_remediation.md)
