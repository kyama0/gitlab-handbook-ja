---
title: 'オンコール'
description: 'Customer Support Systems のオンコールに関するドキュメント'
upstream_path: "/handbook/eta/css/pagerduty/oncall/"
upstream_sha: "1312dadbdf7381446077faefcfae17ba323692b6"
translated_at: "2026-07-19T06:15:29+09:00"
translator: codex
stale: false
lastmod: "2026-07-14T15:22:25-05:00"
---

Customer Support Systems チームは、Support Systems に注力するメンバーのためにオンコールローテーションを維持しています。このローテーションにより、サポートチームは常にサポートを提供できます。

{{% alert title="Pagerduty にアクセスできない場合" color="warning" %}}

Customer Support Systems チーム（または Customer Support Systems チームの特定の人）をページングする必要があるものの Pagerduty にアクセスできない場合は、ページを送信するための支援について同僚に相談してください。誰に支援を求めればよいかわからない場合は、次の Slack チャンネルのいずれかを一般的な推奨先とします:

- Slack の Compass アプリ（見つけるには上部検索バーに「Compass」と入力します）または it-help@gitlab.com を通じて IT に連絡してください。
- [#support_leadership](https://gitlab.enterprise.slack.com/archives/C01F9S37AKT)

役割上 Pagerduty へのアクセスが必要な場合は、取得の支援についてマネージャーに相談してください。

{{% /alert %}}

## Customer Support Systems をページングする

Customer Support Systems チームをページングするには、Pagerduty で手動でトリガーする必要があります。手順:

1. gitlab.pagerduty.com にログインします
1. ページの右上にある `New Incident` ボタンをクリックします
   - または、[Create New Incident ページ](https://gitlab.pagerduty.com/incidents/create)に移動します
1. インシデントに適切な `Title` を入力します
   - 簡潔でありながら説明的にします
1. `Incident Type` には `Base Incident` を選択します
1. `Impacted Service` には `Customer Support Operations` を選択します
1. `Description` には、ページングする理由の詳細な説明を入力します。関連する Issue リンクがある場合は含めてください。
1. `Urgency` には `High` を選択します
1. `Priority` には `P1` を選択します
1. `Assignee` には `Customer Support Operations` を選択します
1. `Advanced Options` セクションには何も必要ないため、スキップできます
1. ページ下部にある `Create Incident` ボタンをクリックします

### 特定の人をページングする

Customer Support Systems チーム内の特定の人をページングする必要がある場合は、Pagerduty で手動でトリガーする必要があります。手順:

1. gitlab.pagerduty.com にログインします
1. ページの右上にある `New Incident` ボタンをクリックします
   - または、[Create New Incident ページ](https://gitlab.pagerduty.com/incidents/create)に移動します
1. インシデントに適切な `Title` を入力します
   - 簡潔でありながら説明的にします
1. `Incident Type` には `Base Incident` を選択します
1. `Impacted Service` には `Customer Support Operations` を選択します
1. `Description` には、ページングする理由の詳細な説明を入力します。関連する Issue リンクがある場合は含めてください。
1. `Urgency` には `High` を選択します
1. `Priority` には `P1` を選択します
1. `Assignee` では入力ボックスをクリックし、`Users` タブをクリックします
1. もう一度入力ボックスをクリックし、ページングする特定の人の名前を入力します（見つかった結果をクリックします）
1. `Advanced Options` セクションには何も必要ないため、スキップできます
1. ページ下部にある `Create Incident` ボタンをクリックします

## オンコール担当になる

Customer Support Systems のチームメンバーはローテーションを担当します。Customer Support Systems のオンコール担当は、通常、次の責任を負います:

- GitLab のサポート提供能力に影響する運用上の緊急事態に対応します。
- 根本原因分析の進行中に、サービス提供の継続性を確保するための暫定的な計画を策定して伝達するため、Support Managers と協力します。
- 根本原因を特定して対処します。
