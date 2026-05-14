---
title: "Infrastructure Platforms 部門のヘルプ要請プロセス"
description: "Infrastructure Platforms が RFH（ヘルプ要請）Issue を管理するための標準化されたアプローチ。"
upstream_path: "/handbook/engineering/infrastructure-platforms/request-for-help-processes/"
upstream_sha: "1e195b58b9f249ff10bd0e705106c320fee86141"
translated_at: "2026-05-14T00:00:00Z"
translator: claude
stale: false
---

## 背景

Infrastructure Platforms 部門では、インバウンドのサポートリクエストの処理方法を再構築し、適切な時間内にリクエストをトリアージして対応できるようにしています。

できるだけ多くのチームが受け入れられる十分に広範なプロセスを作ることを目指しています。前進しながらイテレーションし改善できるよう、まず Production Engineering チームへの展開から始めています。

チームメンバーが一般的なチャンネルでの Slack の質問に応答する現在のモデルは、もはやスケールしていません。例えば、#infrastructure_platforms Slack チャンネルには800人のメンバーがおり、月に約200件のメッセージを生成しています。プロセスがなければ、チームメンバーに対する継続的な割り込みを生み出し、ノイズの中で緊急のリクエストを見逃すことになります。

## 現在の課題

- スケール問題: #infrastructure_platforms 内のすべてのメッセージが、ほぼすべての Infrastructure Platform エンジニアにとって割り込みになる
- 一貫性のない応答: 不規則なメッセージ処理により、すべてのチームメンバーが必要な助けを得られるわけではない
- バイスタンダー効果: 明確なオーナーシップのない質問はしばしば未回答のままになる
- 知識のギャップ: リクエスターはどのチームに尋ねるべきか分からないことが多い

## 新しいプロセスの概要

### 哲学

このプロセスは、この一般的な問題を解決する最良の方法に関するガイダンスを提供しつつ、可能な限り意思決定を個々のチームとグループに委ねるよう、可能な限り一般的であるべきです。

役立つプロセスとツールを備えてチームを支援すべきですが、各チームは異なるため、それぞれに最も適したアプローチを使用すべきです。

データと Issue テンプレートの重複を制限すべきです。

すべてのグループレベルの質問について、私たちが人々を案内するヘルプの依頼方法に関する信頼できる単一の情報源を持つべきです。

### 構造

1. グループの責任

- リクエスト処理を調整するためグループごとに DRI (Directly Responsible Individual) を指定する
- 一般的な質問のためのトリアージプロセスを実装する
- SLA の期待値を設定する (通常1営業日の応答時間)
- 一般的な質問用に Slack ワークフローの自動化を作成する
- 継続的改善プロセスを実装する

1. 一般的な Infrastructure の質問について:

- 中央集約された Request for Help (RFH) リポジトリにルーティング: gitlab-com/saas-platforms/saas-platforms-request-for-help
- 必要に応じて適切なチームに分類し再分配する

1. チームの責任

- Slack ワークフロー自動化を絵文字リアクションで使用し、リクエストを適切なチームトラッカーにルーティングする。これを行う方法のガイダンスは下の方を参照。
- 各チームが独自の Issue テンプレートとトリアージプロセスを維持する
- 各チームは、人々を正しくルーティングするために信頼できる単一の情報源が更新されていることを確認する
- 継続的改善プロセスを実装する

1. 継続的改善

- 定期的分析: リクエストパターンとカテゴリーを週次／月次でレビュー
- ドキュメント更新: 一般的な質問に基づいてセルフサービスドキュメントを改善
- プロセスのイテレーション: データとフィードバックに基づいてルーティングと処理を調整
- 労役削減: アナリティクスを使用して繰り返されるリクエストを引き起こすシステミックな問題を特定し対処

## プロセスのロールアウト

1. チームまたはグループのリポジトリで、すべての必要情報を含む RFH テンプレートを作成します。
1. Issue をリクエストトラッカーにルーティングする Slack ワークフローを作成します。
1. 受信 Issue に対処するためのトリアージプロセスを実装します。
1. バグの修正、プロジェクトの優先順位付け、またはドキュメントの作成によって Issue を分析する定期的なプロセスを作成します。
1. これを広く発表し、絵文字を使用して質問を適切な場所にルーティングするようチームに奨励します。

## 自動化とツール

### Slack ワークフロー絵文字

Slack から Issue にルーティングする最もシンプルな方法は絵文字ワークフローです。[Slack にドキュメント](https://slack.com/help/articles/17542172840595-Build-a-workflow--Create-a-workflow-in-Slack) があり、作成方法を説明しています。

絵文字を選んで :team-create-issue: と名付け、すべての関連チャンネルにワークフローを割り当てることをお勧めします。

Observability チームの例を以下に示します。

![Example Slack Workflow](/images/engineering/infrastructure-platforms/production-engineering/example-slack-workflow.png)

### Issue テンプレート

各チームは自身の Issue トラッカーで RFH Issue テンプレートを作成すべきです。テンプレート内では、次のラベルを使用してください: TeamName: Requests。例として [Observability RFH テンプレート](https://gitlab.com/gitlab-com/gl-infra/observability/team/-/blob/master/.gitlab/issue_templates/Request_for_Help.md?ref_type=heads) を参照してください。

### Triage Bot 統合

[GitLab Triage Bot](https://gitlab.com/gitlab-org/quality/triage-ops) は、受信 Issue を管理するのに使用できるツールの1つです。

### Analytics Dashboard

リポジトリでデフォルトの [Issues Dashboard](https://docs.gitlab.com/user/group/issues_analytics/) を使用することで、ヘルプリクエストに関する多くの情報を得ることができます。

また、チームがより多くの情報を得るために使用できる、推奨される [Insights Dashboard](https://docs.gitlab.com/user/project/insights/) も準備中です。
