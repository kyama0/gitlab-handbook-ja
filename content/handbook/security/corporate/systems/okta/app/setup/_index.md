---
title: Okta アプリケーションセットアップガイド
upstream_path: /handbook/security/corporate/systems/okta/app/setup/
upstream_sha: 1e195b58b9f249ff10bd0e705106c320fee86141
translated_at: "2026-05-10T00:00:00Z"
translator: claude
stale: false
lastmod: "2025-10-09T21:27:44+02:00"
---

## 概要

すべての SaaS とベンダーソフトウェアは [ベンダーオンボーディングプロセス](/handbook/business-technology/enterprise-applications/guides/zip-guide/#how-to-request-a-new-vendor) を経て、Okta で本番稼働する前にTech Stackに追加される必要があります。

その調達プロセスの一環として、GitLab はそのアプリケーションが SAML または SCIM を使った Okta SSO で構成可能であり、ユーザーの作成・更新・無効化を自動化できるユーザー管理機能を備えていることを検証しなければなりません。

- [Finance 調達プロセス](/handbook/business-technology/enterprise-applications/guides/zip-guide/#how-to-request-a-new-vendor)
- 新しい [corpsec Issue](https://gitlab.com/gitlab-com/gl-security/corp/issue-tracker/-/issues/new?description_template=okta_app_change) を作成し、`@gitlab-com/gl-security/corp/identity` をタグ付けする。SSO に関するベンダーからのドキュメントがあれば添付する。

## タイムラインの期待値

> 新しい Okta アプリケーションの現在の SLA は、変更管理 Issue の作成後最大 4 週間です。スケジュール調整のため私たちのキューに入れるよう、調達プロセス中に Issue を作成してください。

(将来の) Tech Stackアプリケーションのビジネスオーナーまたはテクニカルオーナーは、変更管理 Issue を作成し、プロセス中に承認とテクニカルレビューを提供する責任があります。

- **調達のディスカバリーと PoC**
  - **Okta SAML/SCIM 機能サポートの確認:** ベンダーの技術的な担当者または製品ドキュメントで確認する。
  - **複雑なアプリケーション:** 複雑あるいはミッションクリティカルなアプリケーションの場合は、Corporate Security Identity チームと連携して議論するためにメールや Slack スレッドを開始することを推奨します。本番稼働の数週間前まで待つよりも、早めに私たちに相談する方が常に良いです。
  - **PoC またはサンドボックスインスタンス:** 調達前の環境やインスタンスがある場合は、テストアプリケーションインスタンスを追加する変更管理 Issue を作成できます。急ぎのタイムラインには対応していないので、PoC を完了するためのブロッカーとは見なさないでください。
- **調達交渉**
  - 変更管理 Issue を作成し、先入れ先出しのキューに入れる。調達プロセスが完了するまで、実装やユーザー向けの本番稼働を開始することはできません。
  - アプリケーションに割り当てられるべき想定される Okta グループとユーザーについての詳細を追加する。
  - 複雑なアプリケーションの場合は、ユーザーのロールと権限についての詳細を追加する。これは、各ロールに対して Okta グループをどう割り当てるか・作成するかに影響します。これは通常ディスカバリーコールで詳細に議論されます。
- **ベンダーのオンボーディング**
  - 新しいアプリケーションをTech Stackに追加する
  - 変更管理 Issue にTech Stackの詳細を更新し、調達プロセスが完了したことをコメントする。
  - まだ実施していない場合、Corporate Security Identity チームがテクニカルディスカバリーコールをスケジュールします。
- **アプリケーションの作成**
  - プロセスについては変更管理 Issue を参照してください。このプロセスは承認とテストを含めて 1〜2 週間かかる場合があります。
  - 本番稼働プロセスは柔軟で、アプリケーションによって異なります。期待することは変更管理 Issue にコメントし、ディスカバリーコールでも議論してください。

## 構成の更新

すべての構成更新は Okta アプリ変更を使って管理されます。

[Okta アプリ変更 Issue テンプレート](https://gitlab.com/gitlab-com/gl-security/corp/issue-tracker/-/issues/new?description_template=okta_app_change)

## アクセス要求

すべてのグループとユーザーの更新はアクセス要求で管理されます。

- [Okta アクセス要求](/handbook/security/corporate/systems/okta/ar)
- [Okta グループ](/handbook/security/corporate/systems/okta/groups)
