---
title: Customer Support Operations との協働
category: References
subcategory: General
description: 各種 Customer Support Operations 関連チケットと、Support Operations への通知のためのエスカレーションプロセスを文書化しています。
upstream_path: /handbook/support/workflows/working_with_support_ops/
upstream_sha: c8fa138220d8c6d69f811b17242d6d2f08e4e409
translated_at: "2026-05-08T05:00:00Z"
translator: claude
stale: false
---

## 概要

Customer Support Operations は、Corporate Identity や IT End User Support などのチームと並んで Security の下に位置しています。コーポレートプロバイダーとして、Customer Support Operations は具体的には *Customer Support のためのサポート* を提供する役割を担っています。

このページは主にクイックリファレンスとして存在し、信頼できる情報源にリンクして、Customer Support が業務を遂行するために必要な情報を確実に得られるようにします！

### クイックリンク

| リソース | リンク |
|----------|------|
| **Issue Tracker** | [Customer Support Operations Issue Tracker](https://gitlab.com/gitlab-com/gl-security/corp/cust-support-ops/issue-tracker) |
| **Bug Report テンプレート** | [Bug Report の作成](https://gitlab.com/gitlab-com/gl-security/corp/cust-support-ops/issue-tracker/-/issues/new?issuable_template=Bug) |
| **Feature Request テンプレート** | [Feature Request の作成](https://gitlab.com/gitlab-com/gl-security/corp/cust-support-ops/issue-tracker/-/issues/new?issuable_template=Feature) |
| **インシデント対応** | [インシデント](#incidents) を参照 |
| **Slack チャンネル** | [#support-operations](https://gitlab.slack.com/archives/C018ZGZAMPD) |
| **System Criticality シート** | [Customer Support Operations System Criticality](https://drive.google.com/drive/u/0/search?q=Customer%20Support%20Operations%20System%20Criticality%20type:sheets) |

> **重要:** Customer Support Operations のすべての Issue は [Customer Support Operations Issue Tracker](https://gitlab.com/gitlab-com/gl-security/corp/cust-support-ops/issue-tracker) に作成してください。

## セルフサービスのオプション {#self-service-options}

Issue を作成する前に、リクエストがセルフサービスで対応できないかを確認してください。以下の項目はサポートチームメンバーが直接対応できます:

- **Zendesk Managed Content** - マクロ、トリガー、その他の Zendesk コンテンツの更新は、マネージャーの承認を得ればサポートチームメンバーが直接管理できます。参照: [Working on Zendesk Content](/handbook/support/workflows/working-on-zendesk-content/)
- **Support Team YAML Files** - サポートチームの設定ファイルへの変更は、直接マージリクエストで行えます。Customer Support Operations はマージするための承認を行う必要があります。参照: [Support Team YAML Files](/handbook/security/customer-support-operations/gitlab/support-team-yaml-files)

> **注:** セルフサービスで対応できる事案について Issue が起票された場合、その変更をセルフサービスで対応する方法に関する手順とともに Issue はクローズされます。サポートが必要な場合は、`#support-operations` で連絡をいただければ、私たちがガイドします！

## ワークフロー

### 顧客がサポートポータルの変更を要求しているチケット

時折、顧客がチケットを誤って起票し、サポートフォームを使用してサポートポータルの変更要求を送信することがあります。このような場合は、Zendesk でフォームを `Support Ops` に変更してください。Customer Support Operations がそこから対応します。公開返信を送信しないでください（その瞬間チケットから SLA タイマーが外れてしまうため）。

### 一般的な質問をする

一般的な質問やサポートについては、[support_operations Slack チャンネル](https://gitlab.slack.com/archives/C018ZGZAMPD)経由で連絡してください。Customer Support Operations チームのメンバーが応答し、質問の対処を支援します。

### 基本的な Issue フロー

Customer Support Operations へのすべてのリクエストは、適切なテンプレートを使用して [Customer Support Operations Issue Tracker](https://gitlab.com/gitlab-com/gl-security/corp/cust-support-ops/issue-tracker) に作成してください。いくつかの[セルフサービスのオプション](#self-service-options)を除き、ほぼすべてが Issue から始まります！

実現したいことが:

- ロードマップ上にある？ *[Feature Request Issue](https://gitlab.com/gitlab-com/gl-security/corp/cust-support-ops/issue-tracker/-/issues/new?issuable_template=Feature) を作成してください！*
- ロードマップにはないが簡単そう？ *[Feature Request Issue](https://gitlab.com/gitlab-com/gl-security/corp/cust-support-ops/issue-tracker/-/issues/new?issuable_template=Feature) を作成してください！*
- 簡単かもしれないし、難しいかもしれない？でも何が欲しいかは確実にわかっている。 *[Feature Request Issue](https://gitlab.com/gitlab-com/gl-security/corp/cust-support-ops/issue-tracker/-/issues/new?issuable_template=Feature) を作成してください！*
- バグの報告？ *[Bug Report Issue](https://gitlab.com/gitlab-com/gl-security/corp/cust-support-ops/issue-tracker/-/issues/new?issuable_template=Bug) を作成してください！*
- ……えーっと、実はまだ完全にはわからない。 *`support-team-meta` で RFC Issue を作成* してください（または、[GitLab Support での変更管理](/handbook/support/managers/change-management/)フレームワーク内で別の方法で対応してください）

Issue を作成する場合、Customer Support Operations チームは以下を期待します:

- **意思決定を行う権限を持っている**。つまり、変更を主導する適切なレベルの DRI であるか、または適切な DRI からその責任を委譲されています。
- **応答性が高い**。期限通りに、仕様どおりに出荷できるよう、自分が望むものに優先順位を付けて取り組んでいます。
- **検証とサインオフの準備ができている**。Support Operations が何かをステージングにデプロイすると、本番環境で稼働する前に、テスト（または委譲／テストの組織化）を行い、受け入れ可能性についてサインオフする準備が必要です。

[Customer Support Operations との協働](/handbook/security/customer-support-operations/#working-with-us)について詳しく見る。

[Customer Support Operations が進捗を表すために使用するステージ](/handbook/security/customer-support-operations/gitlab/issues/working-issues)について詳しく見る。

#### バグ

バグは、Customer Support Operations Issue Tracker（プロジェクトパス: `gitlab-com/gl-security/corp/cust-support-ops/issue-tracker`）の [Bug Report テンプレート](https://gitlab.com/gitlab-com/gl-security/corp/cust-support-ops/issue-tracker/-/issues/new?issuable_template=Bug)を使用して報告してください。

バグレポートを作成する際は:

1. ドロップダウンから Bug テンプレートを選択
2. すべての必須フィールドを記入し、特に再現手順を記載
3. 適切な severity を選択

バグは一般的に修正の優先度が高く、現在のイテレーションでスケジュールされます。業務量、severity、修正の複雑さ、[システムクリティカリティ](https://drive.google.com/drive/u/0/search?q=Customer%20Support%20Operations%20System%20Criticality%20type:sheets)によっては、将来にスケジュールされる場合があります。

#### Feature Request

Feature Request の焦点は、既存の [Support Roadmap](https://roadmap-e17445.gitlab.io/) との整合性を取ることです。より大きなリクエストの場合、リーダーシップチームと協力して Issue をエスカレートし、競合する事項を再計画し、戦略的な項目を保護する必要があるかもしれません。より小さなリクエストの場合、現在のロードマップ項目の提供を妨げない限り、随時追加されることが多いです。

Feature Request は、Customer Support Operations Issue Tracker（プロジェクトパス: `gitlab-com/gl-security/corp/cust-support-ops/issue-tracker`）の [Feature Requests テンプレート](https://gitlab.com/gitlab-com/gl-security/corp/cust-support-ops/issue-tracker/-/issues/new?issuable_template=Feature)を使用して提出してください。

Feature Request を作成する際は:

1. ドロップダウンから Feature テンプレートを選択
2. ビジネス上のニーズと期待される結果を明確に記述
3. `/cc @username` 構文を使用して関連するステークホルダーを含める

## インシデント {#incidents}

物事は壊れます！Customer Support Operations が支援します。

まず、[Customer Support Operations System Criticality シート](https://drive.google.com/drive/u/0/search?q=Customer%20Support%20Operations%20System%20Criticality%20type:sheets)を確認して、Issue の severity を判断します。

### インシデント報告プロセス

1. まず [#support-operations](https://gitlab.slack.com/archives/C018ZGZAMPD) Slack チャンネルに投稿してください（[Global Support Hours](https://about.gitlab.com/support/#hours-of-operation) 中）
2. 応答を待ちます。以下の時間応答がない場合は、このリストを下に進んでください:
   - 管理系システムの Issue: 24 時間
   - 業務運用系システムの Issue: 8 時間
   - ビジネスクリティカルシステムの Issue: 30 分
   - ミッションクリティカルシステムの Issue: 10 分
3. 影響を受けるサービスとして "Customer Support Operations" を指定して [新規 PagerDuty インシデントを作成](https://gitlab.pagerduty.com/incidents/create)します（[Support Operations On-Call ワークフロー](/handbook/security/customer-support-operations/pagerduty/oncall) を参照）
4. オンコールと協力して問題を解決する計画を策定できるよう待機します

インシデント Issue を作成する際は、以下を含めます:

- 何が起きているかの明確な説明
- ユーザー／顧客への影響
- エラーメッセージまたはスクリーンショット
- すでに行ったトラブルシューティングの手順

## 一般的なヒント

1. **早めに開始する** - Support Roadmap の主要な戦略項目の DRI である場合、早めに Ops と協力を開始します。トラッキング Issue を作成して計画を立てられるようにし、ブロッカーを早期に発見します。
1. **作業を「貯めない」** - 項目がビジネスにとって重要であれば、追跡されるべきです。追跡されていなければ、優先順位付けされません。
1. **成果については強い意見を持つ** - 技術的実装に関する強い意見は避けます。
1. **静かにしない** - DRI として、技術的実装が基準を満たさなくなりそうな場合は、Validation ステージかどうかにかかわらず声を上げてください。間違ったものを素早く出荷するよりも、正しいものを少し遅れて出荷する方が良いです。

## デプロイメントとデリバリー

特に伝達がない限り、変更は月初にリリースされます。これは、メトリクスへの変更を月単位の境界に揃えるためです。

作業をサインオフした後は、[GitLab Support での変更管理 - 変更のロールアウト](/handbook/support/managers/change-management/#rolling-out-a-change)の手順に従い、チームの全員が認識できるようにしてください。
