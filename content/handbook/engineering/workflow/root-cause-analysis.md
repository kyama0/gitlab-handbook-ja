---
title: 根本原因分析
upstream_path: /handbook/engineering/workflow/root-cause-analysis/
upstream_sha: 0e6f01390a34aeb6706ace17d8d3c50e74e82d0d
translated_at: "2026-04-29T00:00:00Z"
translator: claude
stale: false
lastmod: "2026-03-19T19:48:12+00:00"
---

GitLab では、[透明性](/handbook/values/#transparency)が私たちのコアバリューの一つです。これはオープンで誠実な職場環境とサービスを生み出し、成長とイノベーションを促進します。私たちは根本原因分析（RCA）を、プロジェクト・インシデント・Issue への取り組みの後に何がうまくいき、何がうまくいかなかったかを調査することで、組織とコミュニティに対して透明性を示す機会ととらえています。このページでは RCA の定義、実施の利点、および GitLab における成功する RCA の実施方法を説明します。

GitLab のすべてのチームメンバーは、自身が担当する Issue に対して RCA を実施できます。失敗と成功から学ぶのに間違ったタイミングなどありません。

## 根本原因分析とは何か？

根本原因分析（RCA）は、プロジェクトの完了後に失敗と成果の根本を特定するプロセスです。RCA はインシデント後に一般的に行われますが、インシデント管理のモデルにのみ適合するわけではありません。RCA は技術的・非技術的を問わず、あらゆるプロジェクトの後に実施できます。RCA はどのような形式でも実施できますが、複数のチームからの意見を集約して開発された [Issue テンプレート](https://gitlab.com/gitlab-org/gitlab/-/blob/master/.gitlab/issue_templates/rca.md) があります。エンジニアリングに加え、Customer Success チームが彼らの [RCA プロセス](/handbook/customer-success/professional-services-engineering/workflows/internal/root-cause-analysis/) の優れた概要を提供しています。

実施プロセスは異なる場合がありますが、RCA テンプレートは優れた出発点となります。

### RCA はどのように役立つか？

RCA は、ワークフローの中で何がうまくいき、何がうまくいかなかったかを学ぶ機会です。ただし、責任の追及や非難のために使用するものではありません。これらはプロジェクト中に取ったワークフローとプロセスの無責任なレビューであり、経験からの学習を深め、プロセスのイテレーションをよりダイナミックにするためのものです。Issue は個人でも、チームでも、そして頻繁にチーム間のコラボレーションを伴いながら取り組むことができます。RCA は、Issue への関与の有無にかかわらず、組織全体でミスと成功から学ぶ機会をすべての人に提供します。GitLab は RCA を活用してプロジェクト情報を集約し、プロジェクト完了後の信頼できる単一の情報源としての有用性をさらに高めます。

各チームの機能は独自ですが、GitLab 組織全体での過去のパフォーマンスから学ぶ能力により、問題解決へのアプローチを変革し、データに基づいてプロセスをイテレーションし、同じ過ちを繰り返さないようにすることができます。

## RCA の実施方法

RCA はどのような形式でも取ることができますが、GitLab ではプロセスを集約し、RCA をレビューする誰もが必要な情報に簡単にアクセスできるようにしました。チームによって RCA に必要なセクションは異なりますが、全体として、チーム間の RCA レビューが妨げられない程度に RCA フォーマットを統一するようにしてください。

RCA を実施するには、以下に記載のテンプレートを活用し、チームの Issue トラッカーで Issue を開くだけです（テンプレートを使ってチームのトラッカーに独自の Issue テンプレートを作成することもできます）。Issue の手順に沿ってすべての質問に答え、すべての情報を収集することで、RCA の効果を最大化し、プロセスをできる限り再現可能にすることを目指します。

RCA で回答すべき質問のステップバイステップの概要については、[RCA テンプレート](https://gitlab.com/gitlab-org/gitlab/-/blob/master/.gitlab/issue_templates/rca.md)を参照してください。

計画外のアップグレード停止には、[根本原因分析実施のための特別なテンプレート](https://gitlab.com/gitlab-org/gitlab/-/blob/master/.gitlab/issue_templates/rca_upgrade_stop.md)があります。詳細については、[計画外のアップグレード停止](/handbook/engineering/workflow/unplanned-upgrade-stop/)ページを参照してください。

確立された RCA プロセスのより詳しい概要については、[こちらのハンドブックページ](/handbook/customer-success/professional-services-engineering/workflows/internal/root-cause-analysis/)をレビューしてください。

### 調査結果の共有

根本原因分析の調査結果は、プロジェクトや分析に参加した人たちだけでなく、より広い範囲で役立ちます。これらの調査結果を共有することで、他の人たちが経験から学ぶことができます。[マルチモーダルコミュニケーション](/handbook/communication/#multimodal-communication)を活用して RCA の調査結果を共有してください:

- Engineering week in review [Slack チャンネル](https://gitlab.slack.com/messages/CJWA4E9UG) / [Google ドキュメント](https://drive.google.com/drive/search?q=%22engineering%20week%20in%20review%22%20source:domain)
- [#development Slack チャンネル](https://gitlab.slack.com/messages/C02PF508L)
- チームの月次（またはより定期的な）レトロスペクティブ

### 期待される所要時間

公開 RCA は、インシデントが解決してから 7 営業日以内に利用可能であるべきです。これは Severity 1 のインシデントにのみ適用されます。

## 注記

以下のリンクは RCA の詳細、内容、実施方法、価値を拡充します:

- [Quality One International - Root Cause Analysis](https://quality-one.com/rca/)
