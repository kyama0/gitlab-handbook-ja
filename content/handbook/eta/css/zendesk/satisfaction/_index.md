---
title: '満足度'
description: 'Zendesk の満足度に関するドキュメント'
upstream_path: /handbook/eta/css/zendesk/satisfaction/
upstream_sha: 1312dadbdf7381446077faefcfae17ba323692b6
translated_at: "2026-07-18T21:56:20Z"
translator: codex
stale: false
lastmod: "2026-07-14T15:22:25-05:00"
---

このガイドでは、GitLab における満足度トラッキングについて説明します。Zendesk 組み込みの満足度調査から、私たちのカスタム CES (Customer Effort Score) 実装への移行についても含みます。

## 満足度評価スコア

これらは Zendesk チケットで使用される標準化された満足度評価で、レガシー満足度システムまたは現在の CES 調査のいずれからのものです:

- Unoffered: 調査が送信されていない
- Offered: 調査が送信されたが、まだ回答されていない
- Good: 肯定的な満足度評価
- Good with comment: 顧客フィードバック付きの肯定的な評価
- Bad: 否定的な満足度評価
- Bad with comment: 顧客フィードバック付きの否定的な評価

## CES 調査 {#ces-surveys}

{{% alert title="技術詳細" color="primary" %}}

- デプロイメントタイプ: `Ad-hoc`

{{% /alert %}}

### CES 調査とは

CES (Customer Effort Score) 調査は、サポートと連携する際に必要な労力レベルについてフィードバックを得るために顧客に送信するフォームです。スコアが低いほど、より多くの労力が必要だったことを示し、スコアが高いほど、必要な労力が少なかったことを示します。

CES 調査は 7 段階のスケールを使用し、以下のように分類されます:

- 1-3: 高い労力 (否定的な経験)
- 4: 中立
- 5-7: 低い労力 (肯定的な経験)

これをサポート満足度 / カスタマー満足度の代替として使用します。

### 誰が受け取るのか

私たちは特定の基準を満たす者に CES 調査を送信します。具体的な基準は Zendesk インスタンスごとに異なります。

- Zendesk Global の場合:
  - 以下のすべての基準を満たす必要があります:
    - 組織が `GitLab` ではない
    - チケットフォームが `GitLab Incidents` ではない
    - チケットフォームが `Billing` ではない
  - 以下の基準のうち少なくとも 1 つを満たす必要があります:
    - チケットに以下のいずれかのタグが含まれる:
      - `sub_dotcom_ultimate`
      - `sub_dotcom_premium`
      - `sub_sm_ultimate`
      - `sub_sm_premium`
      - `sub_sm_starter`
      - `sub_gitlab_dedicated`
      - `sub_consumption_ai`
      - `sub_consumption_cicd_minutes`
      - `sub_consumption_eap`
      - `sub_consumption_duo_enterprise`
      - `sub_consumption_duo_amazon_q`
      - `sub_consumption_duo_premium`
      - `sub_consumption_storage`
    - チケットフォームが `L&R`
    - チケットフォームが `Support Ops`
    - チケットフォームが `Emergencies`
    - チケットフォームが `Support Internal Request`
- Zendesk US Government の場合:
  - 組織が `GitLab` ではない
  - チケットに以下のタグがいずれも含まれていない:
    - `spam_ticket`
    - `free_customer`
    - `com_embargo`
    - `csat-survey-sent`
    - `needs-org-triggered`

### いつ送信されるのか

私たちは現在、24 時間 (ステータス変更なしで) solved 状態にあるチケットに対して CES 調査を送信しています。

### コンポーネント

#### CES プロセッサー

これは Workato から送信された情報を取得して処理します。それからチケット自体に対して情報をチェックし、リクエストが有効かどうかを判断します。現在のチェック内容:

- チケット ID が存在すること
- チケット自体が存在すること
- チケットがクローズされていないこと
- 実際に CES 調査を送信していること
- 提出者がチケットの依頼者と同一人物であること

上記のいずれかが失敗すると、失敗の理由を出力してサイレントに終了します。

検証チェックが 1 つも失敗しなかった場合、以下を行います:

- 満足度評価 (とコメントがあればそれも) をチケットに追加
- CES スコアをチケットに追加

プロジェクトの場所は [こちら](https://gitlab.com/gitlab-support-readiness/processors/ces-processor) です

#### CES 調査フォーム

これは顧客に送信される実際の調査フォームです。送信されるリンクは、リンクが送信された Zendesk インスタンスに依存します:

- [Zendesk Global](https://support.gitlab.io/ces-survey/global-en.html)
- [Zendesk Global sandbox](https://support.gitlab.io/ces-survey/global-sb-en.html)
- [Zendesk US Government](https://support.gitlab.io/ces-survey/us-government.html)
- [Zendesk US Government sandbox](https://support.gitlab.io/ces-survey/us-government-sb.html)

フォームからの送信は Workato に送信されます。

ソースプロジェクトの場所は [こちら](https://gitlab.com/gitlab-support-readiness/forms/ces-survey) です。これは [こちら](https://gitlab.com/support/ces-survey) にミラーリングされます。

#### Zendesk 自動化

これらは実際の CES 調査を送信するために使用されます。

#### Zendesk チケットフィールド

これらは CES 調査の数値スコアを保存するために使用されます。

#### Zendesk トリガー

これらは Support 用のフィードバック Issue を作成するために使用されます。

#### Workato

これは CES 調査からの送信を受信し、CES プロセッサーに送信するために使用されます。

## 満足度調査

{{% alert title="注意" color="primary" %}}

- 2025-05-01 より、私たちは Zendesk 満足度調査を使用しなくなったことに注意してください。[CES 調査](#ces-surveys) の使用に切り替えました。

{{% /alert %}}

### Zendesk 満足度調査とは

[Zendesk](https://support.zendesk.com/hc/en-us/articles/4408886194202-Customizing-your-customer-satisfaction-survey) より:

> Zendesk Support の最も人気のある機能の 1 つは、組み込みのカスタマー満足度調査です。カスタマー満足度により、エージェントとカスタマーサービス組織全体がチケットごとにどのようにパフォーマンスを発揮しているかをトラッキングできます。私たちのシンプルなアプローチのおかげで、平均してお客様は約 21% の応答率を見ています。これは素晴らしいことです! Zendesk Support は調査のためのいくつかの素晴らしいデフォルトを提供しますが、カスタマー満足度体験をさらにカスタマイズする方法について多くの質問を受けます。

## 管理者向けタスク

### プロセッサーの更新

変更は [プロジェクト](https://gitlab.com/gitlab-support-readiness/processors/ces-processor) 内のファイルを修正することで行います。MR を作成する形で行うべきです。MR は常にマージ前にピアレビューされるべきです (MR 自体がこれを強制すべきです)。

### フォームの更新

変更は [プロジェクト](https://gitlab.com/gitlab-support-readiness/forms/ces-survey) 内のファイルを修正することで行います。MR を作成する形で行うべきです。MR は常にマージ前にピアレビューされるべきです (MR 自体がこれを強制すべきです)。

MR がマージされると、フォームの生成に使用されます。
