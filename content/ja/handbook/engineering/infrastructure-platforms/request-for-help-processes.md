---
title: "Infrastructure Platforms 部門のヘルプ要請プロセス"
description: "Infrastructure Platforms が RFH（ヘルプ要請）Issue を管理するための標準化されたアプローチ。"
upstream_path: "/handbook/engineering/infrastructure-platforms/request-for-help-processes/"
upstream_sha: "0e6f01390a34aeb6706ace17d8d3c50e74e82d0d"
translated_at: "2026-04-29T03:49:37Z"
translator: claude
stale: false
---

## 背景

Infrastructure Platforms 部門では、インバウンドのサポートリクエストの処理方法を再構築し、適切な時間内にリクエストをトリアージして対応できるようにしています。

できるだけ多くのチームが受け入れられる十分に広範なプロセスを作ることを目指しています。前進しながらイテレーションし改善できるよう、まず Production Engineering チームへの展開から始めています。

チームメンバーが総合的なチャンネルの Slack の質問に回答する現在のモデルはスケールしなくなっています。例として、#infrastructure-lounge Slack チャンネルには800名のメンバーがおり、月あたり約200件のメッセージが発生しています。プロセスがなければ、チームメンバーへの常なる割り込みが生じ、ノイズの中で緊急のリクエストを見逃してしまいます。

## 現在の課題

- スケール問題: #infrastructure-lounge のすべてのメッセージが、ほぼすべての Infrastructure Platform エンジニアへの割り込みになっている
- 一貫性のない対応: メッセージの処理が不規則なため、すべてのチームメンバーが必要な支援を得られていない
- 傍観者効果: 明確な所有者のない質問はしばしば未回答のままになる
- 知識のギャップ: リクエスターはどのチームに聞くべきか分からないことが多い

## 新プロセスの概要

### 哲学

このプロセスは、この共通の問題を解決するためのベストな方法についてガイダンスを提供しつつ、できるだけ汎用的であり、個々のチームとグループに可能な限り多くの意思決定を残すべきです。

プロセスと役立つツールをチームに提供すべきですが、各チームは異なり、それぞれに最も適したアプローチを使用すべきです。

データと Issue テンプレートの重複を制限すべきです。

グループレベルのすべての質問について、ヘルプを要請する方法に関する唯一の情報源を持ち、人々をそこに誘導すべきです。

### 構造

1. グループの責任

- ヘルプ要請の処理を調整するため、グループごとに DRI（直接責任者）を指定する
- 一般的な質問のトリアージプロセスを実施する
- SLA の期待値を設定する（通常1営業日以内の対応時間）
- 一般的な質問用の Slack ワークフロー自動化を作成する
- 継続的改善プロセスを実施する

1. 一般的なインフラ質問について：

- 一元化された RFH（ヘルプ要請）リポジトリにルーティングする: gitlab-com/saas-platforms/saas-platforms-request-for-help
- 必要に応じて適切なチームに分類・再配布する

1. チームの責任

- 絵文字リアクションを使った Slack ワークフロー自動化で、リクエストを適切なチームトラッカーにルーティングする。実施方法については以下をご覧ください。
- 各チームは自身の Issue テンプレートとトリアージプロセスを維持する
- 各チームは、人々を正しくルーティングするために唯一の情報源が更新されていることを確認する
- 継続的改善プロセスを実施する

1. 継続的改善

- 定期分析: リクエストパターンとカテゴリーの週次/月次レビュー
- ドキュメント更新: よくある質問に基づいてセルフサービスドキュメントを改善する
- プロセスのイテレーション: データとフィードバックに基づいてルーティングと処理を調整する
- トイル削減: 分析を活用して繰り返されるリクエストを引き起こす体系的な問題を特定し対処する

## プロセスのロールアウト

1. チームまたはグループのリポジトリに、必要な情報をすべて含む RFH テンプレートを作成する。
1. Issue をリクエストトラッカーにルーティングする Slack ワークフローを作成する。
1. 受信 Issue を処理するトリアージプロセスを実施する。
1. バグを修正し、プロジェクトに優先順位を付け、ドキュメントを作成することで Issue を分析する定期プロセスを作成する。
1. これを広く告知し、チームが絵文字を使って質問を適切な場所にルーティングするよう促す。

## 自動化とツール

### Slack ワークフロー絵文字

Slack から Issue へのルーティングの最も簡単な方法は絵文字ワークフローです。[Slack にはワークフローの作成に関するドキュメント](https://slack.com/help/articles/17542172840595-Build-a-workflow--Create-a-workflow-in-Slack)があります。

:team-create-issue: という絵文字を選んで名付け、関連するすべてのチャンネルにワークフローを割り当てることをお勧めします。

以下は Observability チームの例です。

![Slack ワークフローの例](/images/engineering/infrastructure-platforms/production-engineering/example-slack-workflow.png)

### Issue テンプレート

各チームは自身の Issue トラッカーに RFH Issue テンプレートを作成する必要があります。テンプレート内では、`TeamName: Requests` というラベルを使用してください。例は [Observability RFH テンプレート](https://gitlab.com/gitlab-com/gl-infra/observability/team/-/blob/master/.gitlab/issue_templates/Request_for_Help.md?ref_type=heads)を参照してください。

### トリアージボット統合

[GitLab Triage Bot](https://gitlab.com/gitlab-org/quality/triage-ops) は、受信 Issue を管理するために使用できるツールの1つです。

### 分析ダッシュボード

リポジトリのデフォルトの [Issues Dashboard](https://docs.gitlab.com/user/group/issues_analytics/) を使用することで、ヘルプ要請に関する多くの情報を得ることができます。

また、チームがより多くの情報を得るために使用できる[Insights Dashboard](https://docs.gitlab.com/user/project/insights/)の提案も作業中です。
