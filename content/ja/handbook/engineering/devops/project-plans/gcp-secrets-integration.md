---
title: "GCP Secrets インテグレーション - 週次プロジェクト計画"
description: "GCP Secrets インテグレーション - 週次プロジェクト計画 - Pipeline Security グループ"
upstream_path: /handbook/engineering/devops/project-plans/gcp-secrets-integration/
upstream_sha: bb4e4d0fc1a355c00a1d82b1528ff729c83af189
translated_at: "2026-04-28T13:03:31Z"
translator: claude
stale: false
---

[このプロジェクトはリリースされました。](https://about.gitlab.com/releases/2024/01/18/gitlab-16-8-released/#gcp-secret-manager-support)

## アーカイブ

<details><summary>クリックして過去の計画を表示</summary>

## マイルストーン 16.7（2023年11月13日〜12月8日）

### マイルストーン目標

- [GCP からシークレットを取得するための OIDC 設定](https://gitlab.com/gitlab-org/gitlab/-/issues/428402)を完了する
- [GCP との Runner 認証](https://gitlab.com/gitlab-org/gitlab/-/issues/428400)の作業を開始する

### 2023年11月20日の週（マイルストーン 16.7）

#### チームキャパシティ

- BE 1名

#### 目標

- [https://gitlab.com/gitlab-org/gitlab/-/issues/428402](https://gitlab.com/gitlab-org/gitlab/-/issues/428402) GCP Workload Identity Pool を使用した GCP Secrets Manager とのインテグレーションの POC と提案されたソリューションを作成する。

### 2023年11月27日の週（マイルストーン 16.7）

#### チームキャパシティ

- BE 1名

#### 目標

- [https://gitlab.com/gitlab-org/gitlab/-/issues/428402](https://gitlab.com/gitlab-org/gitlab/-/issues/428402) 提案されたソリューションを完成させる。Rails でどのような変更が必要か、Rails が Runner のジョブペイロードにどのような情報を送信するか、Runner がこのジョブペイロードを使用して GCP に認証しシークレットにアクセスする方法について明確な理解を持つ。

### 2023年12月4日の週（マイルストーン 16.7）

#### チームキャパシティ

- BE 1名

#### 目標

- [https://gitlab.com/gitlab-org/gitlab/-/merge_requests/138151](https://gitlab.com/gitlab-org/gitlab/-/merge_requests/138151) アーキテクチャブループリント MR をマージする。
- [https://gitlab.com/gitlab-org/gitlab/-/issues/428400](https://gitlab.com/gitlab-org/gitlab/-/issues/428400) GCP との Runner 認証の開発を開始する

### 2023年12月11日の週（マイルストーン 16.7）

#### チームキャパシティ

- BE 1名

#### 目標

- [https://gitlab.com/gitlab-org/gitlab/-/issues/428400](https://gitlab.com/gitlab-org/gitlab/-/issues/428400) GCP との Runner 認証の開発を続ける
- [https://gitlab.com/gitlab-org/gitlab/-/issues/428401](https://gitlab.com/gitlab-org/gitlab/-/issues/428401) Rails サポートの開発を開始する

## マイルストーン 16.8（2023年12月18日〜2024年1月12日）

### マイルストーン目標

- [https://gitlab.com/gitlab-org/gitlab/-/issues/428400](https://gitlab.com/gitlab-org/gitlab/-/issues/428400) GCP との Runner 認証を完了する
- [https://gitlab.com/gitlab-org/gitlab/-/issues/428401](https://gitlab.com/gitlab-org/gitlab/-/issues/428401) Rails サポートの開発を完了する

</details>
