---
title: "セキュリティダッシュボードレビュー"
upstream_path: /handbook/security/product-security/security-platforms-architecture/application-security/runbooks/security-dashboard-review/
upstream_sha: 1e195b58b9f249ff10bd0e705106c320fee86141
translated_at: "2026-05-10T00:00:00Z"
translator: claude
stale: false
lastmod: "2026-03-12T10:48:57-04:00"
---

**頻度:** 毎日

AppSec エンジニアは GitLab セキュリティツールの検出結果をトリアージする責任があります。この役割には主に 2 つの機能があります。

1. 検出結果を検証し、修正のためにエンジニアリングに引き継ぐ
1. Secure チームにフィードバックを提供する

## セキュリティダッシュボード一覧

レビューが必要なセキュリティダッシュボードのリストは以下のとおりです:

- [GitLab](https://gitlab.com/gitlab-org/gitlab/-/security/vulnerability_report)
- [GitLab Omnibus](https://gitlab.com/gitlab-org/omnibus-gitlab/-/security/vulnerability_report)
- [Gitaly](https://gitlab.com/gitlab-org/gitaly/security/vulnerability_report)
- [GitLab Pages](https://gitlab.com/gitlab-org/gitlab-pages/-/security/vulnerability_report)
- [GitLab Shell](https://gitlab.com/gitlab-org/gitlab-shell/-/security/vulnerability_report)
- [k8s-workloads](https://gitlab.com/groups/gitlab-com/gl-infra/k8s-workloads/-/security/vulnerability_report)
- [Version](https://gitlab.com/gitlab-services/version-gitlab-com/-/security/vulnerability_report)
- [UBI images](https://gitlab.com/gitlab-com/gl-security/product-security/appsec/container-scanners/-/security/vulnerability_report/)
- [release-cli](https://gitlab.com/gitlab-org/release-cli/-/security/vulnerability_report/)
- [vscode-extension](https://gitlab.com/gitlab-org/gitlab-vscode-extension/-/security/vulnerability_report)
- [Customers](https://gitlab.com/gitlab-org/customers-gitlab-com/-/security/vulnerability_report)
- [elastic-search-indexer](https://gitlab.com/gitlab-org/gitlab-elasticsearch-indexer/-/security/vulnerability_report)
- [GitLab DAST](https://gitlab.com/gitlab-org/security-products/dast/-/security/vulnerability_report/)
- [GitLab Terminal](https://gitlab.com/gitlab-org/gitlab-terminal/-/security/vulnerability_report/)
- [GitLab Agent](https://gitlab.com/gitlab-org/cluster-integration/gitlab-agent/-/security/vulnerability_report)

## 検証 {#validation}

各検出結果について:

- 提供された情報と追加情報を使って、検出結果が有効かどうかを判断します
- 有効なレポートの場合:
  - ステータスを `Confirmed` に変更します
  - `Create Issue` をクリックします
  - 検出結果の評価および GitLab への影響に基づいて[優先度と重大度ラベル](/handbook/security/engaging-with-security#severity-and-priority-labels-on-security-issues)を割り当てます
  - [期日](/handbook/security/engaging-with-security/#due-date-on-security-issues)を割り当てます
  - [DevOps ステージ](/handbook/product/categories/#devops-stages)とソースグループに対応するラベル（`/label ~` コマンド）を追加します（カテゴリーが構成する階層の概要については[階層](/handbook/product/categories/#hierarchy)を参照）
  - [プロダクトカテゴリーページ](/handbook/product/categories/)に基づき、トリアージを完了するために追加のエンジニアリングフィードバックが必要な場合は、適切なチームのプロダクトマネージャーやエンジニアリングマネージャーをスケジューリングのために @ メンションします
    - 適切なエンジニアリングチームがすぐに明らかでない場合は、所有者を特定するために AppSec マネージャーにピンを送ってください
- 無効なレポートの場合:
  - ステータスを `Dismissed` に変更します
  - 脆弱性が却下された理由についてのフィードバックを含むコメントを残します。この情報は Secure エンジニアがツールの検出結果のチューニングに使用でき、将来なぜ却下されたか疑問が生じた場合にも有用です。

## 依存関係の更新

製品の依存関係に脆弱性が特定された場合、AppSec エンジニアは[セキュリティ開発ワークフロー](https://gitlab.com/gitlab-org/release/docs/blob/master/general/security/engineer.md)に従って、サポートされているすべてのバージョンで依存関係を更新するためのマージリクエストを作成すべきです。マージリクエストは [GitLab Security リポジトリ](https://gitlab.com/gitlab-org/security/gitlab) で開かれるべきで、これによりサポートされているバックポートでも依存関係が更新されます。`Critical` または `High` と判断された脆弱性については、特定された時点でマージリクエストを作成すべきです。`Medium` および `Low` の脆弱性はベストエフォートで対応しますが、必ず 90 日の SLA 内に対応します。

このプロセスの目標は、依存関係をできるだけ早く更新し、マイナーアップデートに対する開発チームへの影響を減らすことです。将来的にこのステップは [自動修復](https://gitlab.com/gitlab-org/gitlab/issues/37452) に置き換えられる可能性があります。

**新しいメジャーバージョンへのアップグレードが必要な場合**、責任ある開発チームが直接対応することが必要になる場合があります。

- 上記の[検証](#validation)プロセスを完了します。
- `Security developer workflow` テンプレートを使用して、[GitLab Security リポジトリ](https://gitlab.com/gitlab-org/security/gitlab/issues) Issue トラッカーで Issue を作成します。
- テンプレートに従って、`master` ブランチをターゲットとするマージリクエストを作成します。
- 結果として得られるパイプラインがクリーンな場合、マージの準備として開発者チェックリストを継続します。これにはレビュアーとメンテナーによるレビューが含まれている必要があります。
- パイプラインが失敗した場合、責任ある開発チームと協力して修復します。原因によっては、依存関係の機能に高度な知識を持つ開発者が変更をレビューする必要がある場合もあります。開発者がすぐに対応できない場合は、定義された SLA 内での修復を確実にするために Issue/MR を追跡し続けます。
