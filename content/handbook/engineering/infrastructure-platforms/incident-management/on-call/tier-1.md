---
title: オンコールプロセスとポリシー - Tier 1
upstream_path: "/handbook/engineering/infrastructure-platforms/incident-management/on-call/tier-1/"
upstream_sha: 68426776f854464b95a942162d83ddb29afbcf7d
lastmod: "2026-08-18T13:13:35Z"
translated_at: "2026-09-04T12:16:50+09:00"
translator: claude
stale: false
---

Tier 1 ローテーションとは、自動化されたシステムからのページに対応するオンコールローテーションを指します。

## アクティブな Tier 1 ローテーション

### SRE EOC GitLab.com

- ローテーションリーダー: Sarah Walker
- カバレッジ: 24x7
- スケジュール: [schedule](https://app.incident.io/gitlab/on-call/schedules/01K5YWAGZ7YCQGAG7ATQ9XQWHW)
- Slack: [#eoc-general](https://gitlab.enterprise.slack.com/archives/C07G9CP5XRR)

#### 責任範囲

インシデント管理の責任に加えて、EOC は別のチームが所有していない本番環境のサポートに必要な時間的制約のある割り込み作業も担当します。これには以下が含まれます:

1. 特定の変更リクエスト (CR) のレビューと処理。これには以下が含まれます:
    1. 進行中のインシデントや調査と矛盾しないよう CR をレビューすること
    1. 作成者が変更を行うための必要な権限を持っていない場合（管理者レベルの変更など）、CR を直接実行すること
    1. 週末に発生する可能性のあるデータベースアップグレードなどの C1 CR 時のサポート
1. インシデント関連の Teleport アクセスリクエストの処理
1. ChatOps コマンドが安全性チェックで失敗した際の例外承認
1. バグのある/フラッピングなアラートの調査と修正
1. 不要になったアラートの削除
1. 要求された本番情報の収集
1. `@sre-oncall` Slack メンションへの対応
1. デプロイ問題に関してリリースマネージャーを支援すること

### GitLab Dedicated Platform

- ローテーションリーダー: Florbela Viegas
- カバレッジ: 24x7
- スケジュール: [schedule](https://gitlab.pagerduty.com/schedules#PE57MNA)

### GitLab Dedicated PubSec

- ローテーションリーダー: Florbela Viegas
- カバレッジ: 24x7
- スケジュール: [schedule](https://gitlab.pagerduty.com/schedules#PRP4EC1)

### インシデントマネージャー（IMOC）

- ローテーションリーダー: Devin Sylva
- カバレッジ: 24x7
- スケジュール: [schedule](https://app.incident.io/gitlab/on-call/schedules/01K77XZFD7X7E3W8T6GDVMKAFF)

## サービスチーム向け Tier 1（STEOC）

サービスチームは、所有するサービスのアラートに対して呼び出されます。これにより MTTR を短縮し、コードのオーナーシップを確保します。

チームは、呼び出し対象として明示的に設定され、そのチームが所有する `Service` ラベルを持つアラートについて呼び出されます。応答されなかった呼び出しの最初のフォールバックとして、EOC がエスカレーションチェーンに含まれます。

### 責任

Tier 1 ローテーションを担当するサービスチームは、次の責任を負います。

1. 所有するサービスを呼び出すよう設定されたアラートへの応答
2. 所有するサービスに関連するインシデントの調査と解決
3. 問題がサービスのスコープ外にある場合や追加のサポートが必要な場合に、EOC または他の Tier 2、Tier 1 チームへエスカレーションする
4. ノイズを減らしてシグナル品質を向上させるためにアラート設定を更新する
5. インシデント後レビューに調査結果と解決策を文書化する
6. [インシデント後レビュー](/handbook/engineering/infrastructure-platforms/incident-review/)に参加し、プロセスを改善して再発を防ぐための是正措置を作成する

アクティブな Tier 1 ローテーションを担当するサービスチーム:

#### Runners Platform

- ローテーションリーダー: Kam Kyrala
- カバレッジ: 24x5
- スケジュール: [Runners Platform on-call schedule](https://app.incident.io/gitlab/on-call/schedules/01K7HNBCW9EN2MMS4SHAJ5B2WF)

#### 詳細情報

- インシデントマネージャーローテーションは、[エンジニアリンググループの特定のチームメンバー](/handbook/engineering/infrastructure-platforms/incident-management/incident-manager-onboarding/)によって運営されます。
- シフトスケジュール、責任範囲を含むインシデントマネージャーの役割に関する詳細は、[インシデントマネージャーのオンボーディングページ](/handbook/engineering/infrastructure-platforms/incident-management/incident-manager-onboarding/)をご覧ください。
