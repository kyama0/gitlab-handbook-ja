---
title: Dependency Firewall グループ
description: >-
  Dependency Firewall グループは、ソフトウェアサプライチェーンセキュリティの
  ユーザーエクスペリエンスと Dependency Firewall プロダクトを担当します。
upstream_path: /handbook/engineering/development/sec/security-platform/dependency-firewall/
upstream_sha: 3f489816f1fcde506cae1427b280d744ab382621
lastmod: "2026-11-26T18:24:14Z"
translated_at: "2026-11-28T06:18:54+09:00"
translator: codex
stale: false
---

Dependency Firewall グループは、ソフトウェアサプライチェーンセキュリティのユーザーエクスペリエンスを担当し、Dependency Firewall プロダクトを構築します。

## 担当範囲 {#what-we-own}

このグループは Dependency Firewall と、それを支える製品機能を担当します。このページではチームに関する情報を扱います。顧客向けのセットアップと使用方法については、製品ドキュメントを参照してください。

- 製品ドキュメントは [Dependency Firewall](https://docs.gitlab.com/user/application_security/dependency_firewall/)を参照してください。
- 社内アーキテクチャと設計は [Dependency Firewall のアーキテクチャ](https://internal.gitlab.com/handbook/engineering/architecture/design-documents/dependency_firewall)を参照してください。

## 製品概要 {#product-overview}

Dependency Firewall は、パッケージのリクエストを、プロジェクトに適用される Dependency Firewall ポリシーと照合します。ユーザーは GitLab CLI（`glab df`）を使い、対応するパッケージマネージャーのコマンドをファイアウォール経由で実行します。Dependency Firewall のダッシュボードと監査イベントで、ファイアウォールの判定結果を確認できます。

[ユーザードキュメント](https://docs.gitlab.com/user/application_security/dependency_firewall/)では、セットアップ、対応するパッケージマネージャー、ポリシーの動作、トラブルシューティングを説明しています。顧客向けの詳細な手順はユーザードキュメントに記載し、このページにコピーしないでください。

## 現在の対象範囲と展開状況 {#current-scope-and-rollout}

- 現在の機能と対応するパッケージマネージャーについては、[ユーザードキュメント](https://docs.gitlab.com/user/application_security/dependency_firewall/)を参照してください。
- 現在の優先事項は [Dependency Firewall の GA](https://gitlab.com/groups/gitlab-org/-/work_items/22126)です。
  この作業項目が、GA の対象範囲、状況、決定事項に関する唯一の情報源です。
- `dependency_firewall_access` フィーチャーフラグで、Dependency Firewall へのアクセスを制御します。

## ダッシュボード {#dashboards}

- [Dependency Firewall のエラーバジェットダッシュボード](https://dashboards.gitlab.net/d/stage-groups-detail-dependency_firewall/)
- ステージグループのバジェットを算出し、調査する方法については、[Engineering のエラーバジェット](/handbook/engineering/error-budgets/)を参照してください。

## ヘルプリクエスト {#request-for-help}

サポートエンジニアは、顧客のチケットを解決するためにエンジニアリングの支援が必要な場合、ヘルプリクエスト（RFH）の Issue を作成します。このグループの RFH Issue には、`Help group::dependency firewall` ラベルが付きます。

- [Dependency Firewall のオープンな RFH Issue](https://gitlab.com/gitlab-com/request-for-help/-/work_items?sort=created_date&state=opened&label_name%5B%5D=Help+group::dependency+firewall)
- [Dependency Firewall のテンプレートで RFH Issue を作成する](https://gitlab.com/gitlab-com/request-for-help/-/issues/new?issuable_template=SupportRequestTemplate-Dependency-Firewall)
- [ヘルプリクエストのプロセス](/handbook/support/workflows/how-to-get-help/)

## 仕事の進め方 {#how-we-work}

- 計画と優先順位付けは [Dependency Firewall の GA](https://gitlab.com/groups/gitlab-org/-/work_items/22126)で行います。
- ヘルプリクエストとサポート依頼の受付については、[ヘルプリクエスト](#request-for-help)を参照してください。
- チーム内のコミュニケーションには Slack の [#g_sscs-dependency-firewall](https://gitlab.slack.com/archives/C0AABH72B5L)を使用します。

## チーム {#team}

[製品カテゴリページの Dependency Firewall グループ](/handbook/product/categories/#dependency-firewall-group)に、このグループの Product Manager、Product Designer、Engineering Manager、エンジニアを掲載しています。

## ラベル

| スコープ | ラベル |
| --- | --- |
| ステージ | `devops::security platform` |
| グループ | `group::dependency firewall` |

## 沿革

このグループは、FY27 の Sec 再編で Dynamic Analysis から名称変更され、担当領域は DAST とファジングからソフトウェアサプライチェーンセキュリティに移りました。`group::dynamic analysis` ラベルは `group::dependency firewall` に名前が変更されたため、ラベル ID とそれに紐づくすべての Issue およびマージリクエストが引き継がれ、メトリクスの履歴も保持されています。

以前の担当領域のページは、参照用としてここに残しています：

1. [Dynamic Analysis](dynamic-analysis/)
1. [API Security](api-security/)
