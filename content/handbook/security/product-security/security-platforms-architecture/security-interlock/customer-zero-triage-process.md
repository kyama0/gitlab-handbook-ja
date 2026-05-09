---
title: "Customer Zero トリアージプロセス"
description: "Customer Zero リクエストをトリアージしアサインするためのセキュリティチーム向けランブック"
upstream_path: /handbook/security/product-security/security-platforms-architecture/security-interlock/customer-zero-triage-process/
upstream_sha: 1e195b58b9f249ff10bd0e705106c320fee86141
translated_at: "2026-05-09T12:00:00Z"
translator: claude
stale: false
---

## 新しい Customer Zero リクエスト

Customer Zero リクエストが [リクエストテンプレート](../security-interlock/request-customer-zero-validation.md) を使用して作成されると、自動的に `C0Workflow::Backlog` ラベルが付与され、[この Issue ボード](https://gitlab.com/gitlab-com/gl-security/product-security/product-security-engagements/product-security-requests/-/boards/9306316) (内部のみ) で表示されるようになります。

トリアージ担当者は、`~C0Workflow::Backlog` ラベルを購読し、トリアージが必要な新しい Issue を特定するためにボードを定期的に監視することを選択できます。

## 新しい Issue のトリアージ方法

### 自動化

[Automate the Customer Zero Triage Process](https://gitlab.com/groups/gitlab-com/gl-security/product-security/product-security-engineering/-/epics/45) エピックは、[gitlab-triage](https://gitlab.com/gitlab-org/ruby/gems/gitlab-triage) と GitLab Duo を活用して以下の各手動ステップを自動化しました。ほとんどの場合、各新規 Issue は手動介入なしにトリアージされるはずですが、GitLab Duo が責任のあるチームを判定できなかった場合、Duo はその事実をコメントし、[Product Security Engineering](/handbook/security/product-security/security-platforms-architecture/product-security-engineering/) チームをメンションし、彼らが以下のステップを使って Issue をトリアージします。

### 一時的な回避プロセス

自動トリアージが機能していない場合、以下によって Duo にチームの提案を求めることができます。

1. 現在のページがトリアージが必要な Work Item であることを確認します。
1. Duo チャットを開き、以下のプロンプトを貼り付けます。

   ```plain
   Please determine which team is responsible for this GitLab Issue out of the following list of teams:

   * Application Security Team
   * PSIRT
   * Vulnerability Management Team
   * Product Security Engineering Team
   * Security-Platforms-Architecture Team

   Ensure the responsible team is formatted **<TEAM>insert team name here</TEAM>**.
   ```

1. Duo からの応答を使ってチームラベルを適用します。

### 手動ステップ

1. プレフィックス `DRAFT:` または `WIP:` で始まらない Issue を選択します。これらの Issue は提出者が開始したものですが、レビュー前にまだ追加の情報を提供する必要があります。問題ありません! 何が来ているかを可視化できる方が私たちは好ましく思います。
1. Issue に `~"C0Workflow::Initial Triage"` ラベルを適用して、誰かがすでにこの Issue をトリアージしていることを示し、誰も作業を重複しないようにします。これは手動で行うか、[Issue ボード](https://gitlab.com/gitlab-com/gl-security/product-security/product-security-engagements/product-security-requests/-/boards/9306316) (内部のみ) で Issue を次のカラムに移動することで実行できます。トリアージに数分以上かかる場合は、自分自身に Issue をアサインすると TODO に表示されて見失わずにすみます。
1. Issue で提供された情報をレビューし、誰かが対応するのに十分な情報が提供されているかを判断します。たとえば、すべての主要フィールドが入力されていますか? その機能を理解しており、レビューに必要なすべての情報を持っていますか?
   - **そうでない場合**: コメントでリクエスターと主要連絡担当者にタグ付けし、明確化のための質問をします。Issue に `~"C0::Waiting on Requestor"` ラベルを手動で適用するか、[Issue ボード](https://gitlab.com/gitlab-com/gl-security/product-security/product-security-engagements/product-security-requests/-/boards/9306316) (内部のみ) で次のカラムに移動します。追加情報を提供したらあなたを直接タグ付けするように依頼し、再レビューして次のステップに従えるようにします。
1. Issue に十分な情報があると判断したら、まず Issue のタイムライン要件と私たちの [SLO](../security-interlock/request-customer-zero-validation/#timeline-expectations) の両方を考慮してマイルストーンを適切に設定します。これは、次のマイルストーン開始の少なくとも 10 日前に受領したリクエストには次のマイルストーン内でフィードバックを提供する必要があると規定しています。それより遅く受領したリクエストは、通常、milestone+2 で優先順位付けされます。
1. 適切なフィードバックを提供するのに最適なチームを判断します。どのチームのフィードバックが必要か不明な場合は、`#product-security-department-only` で尋ねます。適切なチームを判断したら、以下のステップを実行します。

    | チーム | ステップ |
    | ------- | ------- |
    | AppSec | 1. `~"Application Security Team"` ラベルを適用<br/> 2. `@gitlab-com/gl-security/product-security/appsec` をタグ付けし、マイルストーン計画に組み込むよう依頼 |
    | PSIRT | 1. `~"PSIRT"` ラベルを適用<br/> 2. `@gitlab-com/gl-security/product-security/appsec/psirt-group` をタグ付けし、マイルストーン計画に組み込むよう依頼 |
    | Vuln Management | 1. `~"Vulnerability Management Team"` ラベルを適用<br/> 2. `@gitlab-com/gl-security/product-security/vulnerability-management` をタグ付けし、マイルストーン計画に組み込むよう依頼 |
    | ProdSecEng | 1. `~"Product Security Engineering Team"` ラベルを適用<br/> 2. `@gitlab-com/gl-security/product-security/product-security-engineering` をタグ付けし、マイルストーン計画に組み込むよう依頼 |
    | リストにない | チームメンバーを個別にタグ付けし、別の指示を受けた場合はこのハンドブックページを更新 |

1. これがトリアージされアサインされたことを示すため、`~"C0Workflow::On Deck"` ラベルを適用します。

これで完了です!
