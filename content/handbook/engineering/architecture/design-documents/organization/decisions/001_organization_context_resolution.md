---
owning-stage: "~devops::tenant scale"
title: 'Organizations ADR 001: Organizationコンテキスト解決'
toc_hide: true
upstream_path: /handbook/engineering/architecture/design-documents/organization/decisions/001_organization_context_resolution/
upstream_sha: 7fadd0122802b16e64b0e88962c637a09d27bd53
translated_at: "2026-04-27T00:00:00Z"
translator: claude
stale: false
---

## コンテキスト

GitLabのデータパラダイムは、インスタンス全体のグローバルデータプールから、複数のインスタンス内の隔離されたOrganizationsのマルチテナントパターンへと移行します。

この変更に対応するには、Organizationアクセスがデータスタック全体を通じて隔離された環境で行われる必要があります。理想的なソリューションは、エンジニアリングチームへの影響を最小限に抑えるものです。

この決定には、過去数年間にわたるOrganization/Cellsロードマップの経験が反映されています。

## 決定

すべてのGitLab実行パスは、指定されたOrganizationのコンテキスト内で動作することが期待されます。これらのパスには、Webリクエスト、スケジュールされたタスク、Cronジョブ、データマイグレーションが含まれます。Organizationコンテキストなしで動作することは可能ですが、例外的な状況とみなされます。

データベースインタラクションは現在指定されているOrganizationに従ってフィルタリングされます。このインタラクションは日常的な操作を行うエンジニアにとって透明なものになります。グローバルデータプールへのアクセスは可能ですが、例外的なものになります。

## 結果

- すべてのエントリポイントがCurrent Organizationを定義することを確認する必要があります。
- データベースはOrganizationコンテキストに従ってデータのビューをフィルタリングします。
- 他のすべての直接/間接サービスは同様のコンテキスト対応データアクセスに対応する必要があります。
- 例外的なケースのためにグローバルアクセスを許可します。

## 代替案

グローバルOrganizationコンテキストの代替案は、コンテキストを選択的に指定することです。これには多くのアプリケーションレベルの変更が必要で、完了することが非常に困難です。
