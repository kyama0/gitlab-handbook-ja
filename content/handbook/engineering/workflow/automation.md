---
title: "自動化とアクセストークンのガイドライン"
description: "プロジェクト/グループトークンまたはサービスアカウントを使用した自動化のガイドライン"
upstream_path: "/handbook/engineering/workflow/automation/"
upstream_sha: "0e6f01390a34aeb6706ace17d8d3c50e74e82d0d"
translated_at: "2026-04-29T12:00:00Z"
translator: claude
stale: false
---

## 概要

トークン管理は GitLab が使用するさまざまなシステムとサブシステム内での認証と認可を提供するために重要です。[トークン概要](https://docs.gitlab.com/ee/security/tokens/index.html#gitlab-token-overview)は GitLab で使用されるトークンの特定を助けます。承認されたトークンの使用と配布については[トークン管理標準](/handbook/security/policies_and_standards/token-management-standard)を参照してください。

## 自動化とアクセストークンのガイドライン

`gitlab-org` グループとその下のプロジェクトの自動化は3つのカテゴリに分けられます:

* プロジェクト内のリポジトリ、パッケージ、コンテナレジストリの自動化: [プロジェクトデプロイトークン](https://docs.gitlab.com/ee/user/project/deploy_tokens/)で十分です。
* プロジェクト内の API を通じた自動化: [プロジェクトアクセストークン](https://docs.gitlab.com/ee/user/project/settings/project_access_tokens/)で十分です。
* グループ内の API を通じた自動化: [グループアクセストークン](https://docs.gitlab.com/ee/user/group/settings/group_access_tokens.html)で十分です。

これらのガイドラインは、[最小権限の原則](https://internal.gitlab.com/handbook/security/access-management-standard/#least-privilege-reviews-for-access-requests)に沿った承認された安全なパターンを使用してエンジニアリング自動化の一貫性を確保します。

### マージリクエスト自動化ガイドライン

`gitlab-org` 下のプロジェクトでマージリクエストを開く自動化は、エンジニアリング PI に影響を与える可能性のあるボット作成 MR のより明確な測定のために `~"automation:bot-authored"` ラベルを適用する必要があります。

## アクセストークンのベストプラクティス

### 既存のトークンを再利用しない

トークンが何に使用されているかを追跡しにくくなるため、自分の自動化に既存のトークンを再利用しないでください。また、トークンが失効した場合に必要な変更の数が増えます。

### デフォルトではプロジェクトアクセストークンを使用する

デフォルトとして、また可能な場合は常に、任意の API 自動化のために新しい[プロジェクトアクセストークン](https://docs.gitlab.com/ee//user/project/settings/project_access_tokens/)を作成し、以下のガイドラインに従ってください:

* アクセストークンに適切な名前を作成してください。これはトークン用に作成されるボットユーザーの名前にもなることに注意してください。
* 一時的な自動化であっても、常にトークンに有効期限を設定してください。
* 自動化が必要とする最小スコープをトークンに付与してください（通常は `api` スコープ）。

プロジェクトアクセストークンには[いくつかの既知の制限](https://gitlab.com/gitlab-org/gitlab/-/issues/213536)がありますが、それを試すことで機能の改善にのみ役立ちます。

### リポジトリ、パッケージ、コンテナレジストリの自動化にはプロジェクトデプロイトークンを使用する

リポジトリ、パッケージ、またはコンテナレジストリの自動化のために新しい[プロジェクトデプロイトークン](https://docs.gitlab.com/ee/user/project/deploy_tokens/)を作成してください。

プロジェクトアクセストークンと同じガイドラインに従ってください。

### プロジェクトアクセストークンが使用できない場合は特定のサービスアカウントトークンを使用する

自動化がグループレベルまたは複数のプロジェクトにわたって適用され、自動化を実行するためにメンテナー権限が必要な場合（例えば、制限されたクイックアクションを投稿するため）は、特定のチームが所有する[新しいサービスアカウントをリクエスト](https://internal.gitlab.com/handbook/security/access-management-standard/#requesting-gitlabcom-service-account-for-automation)することができます。

## 現在稼働中の自動化リスト

GitLab はエンジニアリングプロセスを合理化するために自動化を使用しています。例えば:

* マージリクエストの衛生管理のための [Danger bot](https://docs.gitlab.com/ee/development/dangerbot/)。[Danger bot](https://gitlab.com/group_9970_bot1) グループアクセストークンを使用しています。
* Issue とマージリクエストの自動化のための [Triage ops](https://gitlab.com/gitlab-org/quality/triage-ops):
  * スケジュールされたリマインダーと Issue とマージリクエストのレポート。サービスアカウントが必要です。
  * Issue とマージリクエストのイベントへのリアルタイムの反応。サービスアカウントが必要です。
* Allure テストレポート。エンドツーエンドテストに対してレビューアプリを実行するマージリクエストに Allure テストレポートを投稿するために [End-to-end tests Allure report](https://gitlab.com/project_278964_bot5) プロジェクトアクセストークンを使用しています。
* 非同期レトロスペクティブ生成。機密 Issue のフェッチを除きプロジェクトアクセストークンを使用できます。
* GitLab Runner リリース。サービスアカウントが必要です。
* [リポジトリのミラーリング](https://docs.gitlab.com/ee/user/project/repository/mirror/)。サービスアカウントが必要です。

## 現在および潜在的な GitLab.com サービスアカウント

* [`@gitlab-bot`](https://gitlab.com/gitlab-bot) は[エンジニアリング生産性チーム](/handbook/engineering/infrastructure-platforms/developer-experience/engineering-productivity/)が所有しており、様々なことを実行しています。これを複数の専用サービスアカウントに[分解中](https://gitlab.com/gitlab-org/quality/team-tasks/-/issues/757)です。
* [`@gitlab-qa`](https://gitlab.com/gitlab-qa) は[Developer Experience ステージ](/handbook/engineering/infrastructure-platforms/developer-experience)が所有しており、エンドツーエンドテスト関連の自動化を実行しています。
* [`@gitlab-release-tools-bot`](https://gitlab.com/gitlab-release-tools-bot) は[Delivery チーム](/handbook/engineering/infrastructure-platforms/gitlab-delivery/delivery/)が所有しており、デリバリー/リリース関連の自動化を実行しています。
* [`@gl-build-trigger`](https://gitlab.com/gl-build-trigger) は[Distribution グループ](/handbook/engineering/infrastructure-platforms/gitlab-delivery/distribution/)が所有しており、ビルド関連のパイプラインをトリガーしています。
* [`@gitlab-omnibus-mirror-bot`](https://gitlab.com/gitlab-omnibus-mirror-bot) は[Distribution グループ](/handbook/engineering/infrastructure-platforms/gitlab-delivery/distribution/)が所有しており、[`gitlab-org/omnibus-gitlab` プロジェクト](https://gitlab.com/gitlab-org/omnibus-gitlab)のさまざまな依存関係プロジェクトをミラーリングしています。
* `gitlab-org/quality/triage-ops`、`gitlab-org/gitlab-triage` のトリアージ操作は[エンジニアリング生産性チーム](/handbook/engineering/infrastructure-platforms/developer-experience/engineering-productivity/)が所有しています。

## 単一の `@gitlab-bot` サービスアカウントの背景

以前は、ほぼすべての自動化プロセスに使用する単一の `@gitlab-bot` サービスアカウントがありました。

これには2つの主な欠点がありました:

* ボットが [API レート制限に達した](https://gitlab.com/gitlab-org/quality/team-tasks/-/issues/907)場合、レート制限を無効にしなければなりませんでした。これは無限ループスクリプトが[自社の API に対するサービス拒否（DoS）につながる](https://gitlab.com/gitlab-com/gl-infra/production/-/issues/4655)可能性を意味しました。
* セキュリティ上の懸念がありました:
  * 同じトークンをあらゆる場所で再利用すると、[トークンが漏洩して回転する必要がある](https://gitlab.com/gitlab-com/gl-security/security-operations/sirt/operations/-/issues/1451)場合に多くの混乱が生じます。
  * サービスアカウントの認証情報はエンジニアリング部門全体がアクセスできました。誰でもボットのアカウントにログインして自分のアクセストークンを作成できました。

現在、以下を進めています:

* トークンのセルフサービス作成を停止するために[`@gitlab-bot` サービスアカウントの認証情報をエンジニアリング生産性 1Password ボールトに移動する](https://gitlab.com/gitlab-com/gl-security/security-operations/sirt/operations/-/issues/1082)。
* 可能な場合はプロジェクトアクセストークンに、その他の場合は特定のサービスアカウントに[現在の `@gitlab-bot` のトークンを移行する](https://gitlab.com/groups/gitlab-org/quality/-/epics/17)。
