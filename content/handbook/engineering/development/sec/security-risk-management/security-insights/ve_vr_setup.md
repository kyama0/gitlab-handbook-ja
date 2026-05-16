---
title: 脆弱性の説明と解決のセットアップガイド
description: "脆弱性の説明（VE）と脆弱性の解決（VR）の機能をローカルでテストおよび開発するために必要なコンポーネントのセットアップと設定手順を説明します。"
upstream_path: /handbook/engineering/development/sec/security-risk-management/security-insights/ve_vr_setup/
upstream_sha: 3480299851f7e2243d4f08b75dac452f89929636
translated_at: "2026-04-28T08:04:29Z"
translator: claude
stale: false
lastmod: "2024-12-19T03:20:11+00:00"
---

## 脆弱性の説明と解決のセットアップガイド

脆弱性の説明（VE）と脆弱性の解決（VR）の機能をローカルでテストおよび開発するためには、いくつかのセットアップ手順が必要です。このガイドには、必要なコンポーネントのセットアップと設定に関する手順が含まれています。

### ランナーのセットアップ

脆弱性レポートを生成するには、CI パイプラインを実行する必要があります。以下の手順に従って GitLab Runner をインストールおよび設定してください。

[https://gitlab.com/gitlab-org/gitlab-development-kit/blob/main/doc/howto/runner.md](https://gitlab.com/gitlab-org/gitlab-development-kit/blob/main/doc/howto/runner.md)

オプションとして、Colima を使用して Docker をインストールすることができます。ドキュメントは[こちら](https://gitlab.com/gitlab-org/gitlab-development-kit/-/blob/main/doc/howto/runner.md)にあります。または[このスニペット](https://gitlab.com/-/snippets/2259133)の手順に従うこともできます。

### 脆弱性レポートのセットアップ

VE と VR の機能は SAST の脆弱性で動作するよう設計されています。ローカルテスト用に以下のプロジェクトを 1 つ以上クローンします。

* [https://staging.gitlab.com/govern-team-test/oxeye-rulez](https://staging.gitlab.com/govern-team-test/oxeye-rulez)
* [https://gitlab.com/gitlab-org/security-products/tests/webgoat.net](https://gitlab.com/gitlab-org/security-products/tests/webgoat.net)
* [https://gitlab.com/gitlab-examples/security/security-reports](https://gitlab.com/gitlab-examples/security/security-reports)
* [https://gitlab.com/gitlab-org/govern/threat-insights-demos/verification-projects/cwe-samples](https://gitlab.com/gitlab-org/govern/threat-insights-demos/verification-projects/cwe-samples)

サンプルプロジェクトのいずれかで main または master ブランチのパイプラインを実行して、脆弱性レポートを生成します。`Build` > `Pipelines` > `Run Pipeline`

パイプラインが完了したら、`Secure` > `Vulnerability Report` > 任意の SAST 検出結果 で脆弱性レポートを確認できます。

例：

* 脆弱性レポート: [https://gitlab.com/gitlab-org/security-products/tests/webgoat.net/-/security/vulnerability_report](https://gitlab.com/gitlab-org/security-products/tests/webgoat.net/-/security/vulnerability_report)
* SAST 検出結果: [https://gitlab.com/gitlab-org/security-products/tests/webgoat.net/-/security/vulnerabilities/105323245](https://gitlab.com/gitlab-org/security-products/tests/webgoat.net/-/security/vulnerabilities/105323245)

### AI のセットアップ

GDK から AI 機能へのアクセスを設定するには、[こちらの手順](https://docs.gitlab.com/ee/development/ai_features/)に従います。

GitLab チームメンバーのみ：

* EE ライセンスが必要です。[こちら](https://docs.gitlab.com/ee/development/ai_features/#required-setup-licenses-in-gitlab-rails)の手順に従ってリクエストしてください。
* Anthropic へのアクセスが必要です。必要に応じてアクセスリクエストを作成してください（[例](https://gitlab.com/gitlab-com/team-member-epics/access-requests/-/issues/29415)）。

#### Duo へのアクセス

ローカルで AI を設定したら、Duo の機能を有効にする必要があります。以下の手順に従って、すべてが正しく設定されていることを確認してください。

GDK をセットアップして実行するには、[こちらの手順](https://docs.gitlab.com/ee/development/ai_features/#set-up-and-run-gdk)に従います。

### 使用方法

設定が完了すれば、任意の SAST 脆弱性に対して `Explain with AI` ボタンが表示されるはずです。例：[https://gitlab.com/gitlab-org/security-products/tests/webgoat.net/-/security/vulnerabilities/105323245](https://gitlab.com/gitlab-org/security-products/tests/webgoat.net/-/security/vulnerabilities/105323245)

[高い信頼度の CWE リスト](https://gitlab.com/gitlab-org/gitlab/-/blob/master/ee/app/models/vulnerabilities/finding.rb#L25-69)に含まれる任意の SAST 脆弱性に対して `Resolve with AI` ボタンが表示されるはずです。例：[https://gitlab.com/gitlab-org/security-products/tests/webgoat.net/-/security/vulnerabilities/114941072](https://gitlab.com/gitlab-org/security-products/tests/webgoat.net/-/security/vulnerabilities/114941072)

サポートが必要な場合は、[#g_govern_threat_insights_eng_ai](https://gitlab.enterprise.slack.com/archives/C07KSUHD09E) にお問い合わせください。
