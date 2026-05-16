---
title: "レートリミット アーキテクチャ ワーキンググループ"
description: "レートリミット アーキテクチャ ワーキンググループの属性、目標、役割と責任について詳しくはこちら。"
upstream_path: "/handbook/company/working-groups/rate-limit-architecture/"
upstream_sha: "b4eeb07f0d5f46e2fc5f8572be1a2547261aed89"
translated_at: "2026-04-25T00:00:00Z"
translator: claude
stale: false
lastmod: "2023-12-22T10:50:00+00:00"
---

## 属性

| プロパティ      | 値              |
|-----------------|-----------------|
| 作成日          | 2022-04-27 |
| 目標終了日      | 2022-12-09 |
| Slack           | #wg_rate_limit_architecture（社内からのみアクセス可能） |
| Google Doc      | アジェンダ（https://docs.google.com/document/d/1nv8hDLqZS16yTa4M3FtdMQNOFM4dt4OXBGCPvp-FHbM/edit#）（社内からのみアクセス可能） |

### 概要

レートリミット アーキテクチャ WG は 2022年4月〜12月に活動しました。FY23-Q1 に、さまざまな機能にレートリミットが欠如していることに起因するサイトインシデントが定期的に発生しました。私たちは [DevOps プラットフォーム全体でのレートリミット](https://gitlab.com/gitlab-com/ops-sub-department/ops-engineering-management/-/issues/77) に対してエンジニアリングアロケーションを開始し、各 DevOps ステージのレートリミット監査を実施しました。また、より明確なレートリミット関連のガイダンスを提供するために開発ドキュメントとガイドラインを更新し、70 以上のレートリミット Issue をクローズしました。これにより信頼性が向上し、レートリミット関連のサイトインシデント件数が大幅に減少しました。

エンジニアリングアロケーションに続いて、レートリミットの将来に向けたビジョンを確立するためにこのワーキンググループを発足しました。グループはこのビジョンを記録した [レートリミット アーキテクチャ ブループリント](https://docs.gitlab.com/ee/architecture/blueprints/rate_limiting/) を開発しました。グループはまた、この機能を長期的に誰の GitLab ステージグループが所有するかを特定するために協力しました。これは [アプリケーションパフォーマンス グループへのレートリミット フレームワークの追加](https://gitlab.com/gitlab-com/www-gitlab-com/-/merge_requests/114123)によって文書化されました。このブループリントは、アーキテクチャ進化ワークフロープロセスの一環として定期的に継続してレビューされます。

ワーキンググループが完了基準を達成したため、グループを解散することを決定しました。

### 背景

FY23-Q1 には、レートおよびアプリケーション制限を通じたサービス拒否（DoS）ベクターの特定と対処に焦点を当てた [DevOps プラットフォーム全体でのレートリミット](https://gitlab.com/gitlab-com/ops-sub-department/ops-engineering-management/-/issues/77) のエンジニアリングアロケーションを優先しました。その取り組みはこれまでのところ [70 以上の DoS 関連 Issue](https://gitlab.com/dashboard/issues?scope=all&state=closed&label_name[]=availability%3A%3Alimit) に対処することに成功しています。

高可用性を確保するための DoS ベクター対処に加えて、以下の目標があります：

- 制限に関する一貫した監視とアラート
- 制限の一貫した包括的なドキュメント
- GitLab.com の制限設定と GitLab のデフォルト制限の同期

現在、[GitLab アプリケーション制限開発ドキュメント](https://docs.gitlab.com/ee/development/application_limits.html) には複数のレートリミット実装アプローチが文書化されています。

### 完了基準

このワーキンググループは以下の目標を掲げています：

1. GitLab 内でアプリケーションレートリミットを実装するための推奨手法を開発する
1. この推奨事項を [アーキテクチャ進化ブループリント](/handbook/engineering/architecture/workflow/) で GitLab 開発者向けに文書化する
1. 短期、中期、長期のレートリミット改善のためのイテレーティブなプロジェクト計画を文書化する
1. この作業への資金提供の組織的アプローチを決定する（例: 新規チーム、借受、SIG、ファンアウトなど）

### 役割と責任

| ワーキンググループの役割    | 担当者                | 役職                          |
|-----------------------|-----------------------|--------------------------------|
| エグゼクティブスポンサー     | Christopher Lefelhocz | VP of Development            |
| ファシリテーター | Sam Goldstein | Director Engineering, Ops |
| メンバー | Grzegorz Bizon | Principal Engineer, Verify |
| メンバー | Fabio Pitino   | Staff Backend Engineer, Verify |
| メンバー | Marshall Cottrell | Strategy and Operations (Technical) |
| メンバー | Hayley Swimelar | Senior Backend Engineer, Container Registry|
| メンバー | Quang-Minh Nguyen | Senior Backend Engineer, Scalability |
| メンバー | Liam McAndrew | Engineering Manager, Scalability |
| メンバー | Markus Koller | Senior Backend Engineer, Integrations |
| メンバー | Grant Hickman | Sr Product Manager, Integrations |
| アーキテクチャ進化コーチ | Andrew Newdigate | Distinguished Engineer, Infrastructure |
