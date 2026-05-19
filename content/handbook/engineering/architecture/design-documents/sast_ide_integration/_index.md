---
title: "SAST IDE 統合"
status: ongoing
creation-date: "2024-06-21"
authors: [ "@erran", "@jleasure", "@julianthome", "@theoretick" ]
coach: "@theoretick"
approvers: [ "@connorgilbert", "@dashaadu", "@tkopel", "@kisha.mavryck" ]
owning-stage: "~devops::secure"
participating-stages: ["~devops::create", "~devops::secure"]
toc_hide: true
upstream_path: /handbook/engineering/architecture/design-documents/sast_ide_integration/
upstream_sha: 4b2a1defc6e0116cecb1f346d7dc1d679e674d3f
translated_at: "2026-04-27T10:00:00Z"
translator: claude
stale: false
lastmod: "2025-04-28T10:53:04-07:00"
---


{{< engineering/design-document-header >}}


## まとめ

開発者が[IDE から](https://gitlab.com/groups/gitlab-org/-/epics/10283) API ベースの静的解析セキュリティテスト（SAST）を実行できるようにサポートします。

## 動機

### 目標

**何を達成しようとしているのか?**

- GitLab Editor Extension を実行している Ultimate ユーザーに SAST 結果を提供する。

**成功をどのように判断するか?**

- 必要な接続性を持つユーザーが SAST ファインディングの診断を受け取る。

**他の定量化しにくい機会は?**

- IDE で将来的に非 SAST セキュリティスキャン結果がどのように表示されるかを定義する。
- 既存の SAST レポートから IDE 診断を入力する。

### 非目標

**このブループリントのスコープ外は何か?**

- オフラインユーザーがアナライザーをローカルで実行する方法を定義すること。

## 提案

現在の IDE ワークスペースに対してローカルと API ベースの両方のセキュリティスキャンを提供します。

メリット:

- GitLab Editor Extensions があるすべてのプラットフォームで SAST ファインディングをサポートします。
- スキャンサービス API は既存のローカル SAST レポートを使用するためにローカルサービスを通じて実装できます。
- オフラインユーザーはオフラインスキャンイメージまたはディストリビューションを使用できます。

デメリット:

- 新しいインフラをデプロイする必要があります。
- ユーザー、グループ、プロジェクトの設定に基づいてこの機能の表示/非表示を意図的に制御する必要があります。

## 決定事項

- [001: API ベースのセキュリティスキャンを提供する](decisions/001_provide_api-based_security_scans.md)

## 設計と実装の詳細

## リモートスキャン

```mermaid
sequenceDiagram
    actor User

    User->>+IntelliJ: Edits a file "hello.rb"
    User->>+IntelliJ: Saves "hello.rb"
    IntelliJ->>+GitLab Duo for JetBrains: Triggers a security scan based on the current file and workspace
    GitLab Duo for JetBrains->>+GitLab API: POST /api/v4/security_scans/sast
    note over GitLab Duo for JetBrains,GitLab API: { "path": "hello.rb", "content": "exec(ARGV[0])" }
    GitLab API->>+Security Scan Service: POST /v1/sast
    Security Scan Service->>-GitLab API: 200 OK
    GitLab API->>-GitLab Duo for JetBrains: 200 OK
    GitLab Duo for JetBrains->>-IntelliJ: Display Static Analysis findings (Diagnostics)
```

## 代替ソリューション

### 何もしない

IDE での GitLab ユーザーの現在の体験は、コードをプッシュする前に個別に静的解析ツールをローカルで実行し、CI/CD パイプラインのセキュリティスキャン結果を待つ必要があるというものです。

### アナライザーをオフラインアナライザーとしてローカルで実行する

メリット:

- ローカルデータと実行によりパフォーマンスの最適化が容易になります
- 狭いユースケースにより、よりシンプルで密結合した設計が可能になります

デメリット:

- ルールの改善とバグ修正を配布する能力を制限するリリースサイクルとともに、バイナリディストリビューションのサポートを開始する必要があります
- 特に Mac OS では バイナリをコード署名する必要があります。
- インストールのためのドキュメントを提供する必要があります。
- インストールのためのツールを提供する必要があります。
