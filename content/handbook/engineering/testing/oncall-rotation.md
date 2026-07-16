---
title: Developer Experience オンコールローテーション
description: >-
  Developer Experience は、EM が主導するインシデント管理オンコールローテーションを運営しています。パイプライントリアージは機能チームが所有し、中央集約型の DevEx Pipeline DRI ローテーションは廃止されました。
upstream_path: /handbook/engineering/testing/oncall-rotation/
upstream_sha: "f469f09c3347a37927c75866af3d2611a5421062"
translated_at: "2026-07-15T21:34:06Z"
translator: codex
stale: false
lastmod: "2026-07-15T17:51:54+00:00"
---

## パイプライントリアージは機能チームが所有します

DevOps の変革の一環として、**中央集約型の Developer Experience パイプライントリアージ（Pipeline DRI）オンコールローテーションは廃止されました。** E2E およびスケジュールパイプラインの失敗のトリアージとデバッグは、チームがテストライフサイクル全体を所有する方針に沿って、失敗したテストの `feature_category`/`product_group` で識別される**所有機能チーム**の責任です。

Developer Experience は共有パイプラインインフラストラクチャを所有し、**緊急時にのみ最後の手段としてエスカレーション先になります**。たとえば GitLab.com を脅かし、所有チームでは提供できない深い専門知識を真に必要とする、重大で横断的な障害が該当します。日常的なパイプライン障害の標準的な連絡先ではありません。

- 障害のトリアージ方法: [パイプライントリアージ](/handbook/engineering/testing/pipeline-triage/)（[優先順位と対応の期待事項](/handbook/engineering/testing/pipeline-triage/#prioritization-and-response-expectations)を含む）および[失敗した E2E テストのデバッグ](https://docs.gitlab.com/development/testing_guide/end_to_end/debugging_end_to_end_test_failures/)。
- セルフサービストラブルシューティング: [Duo を使用してテスト失敗をデバッグする](../testing/using-duo-to-debug-test-failures.md)および[E2E テスト失敗 Issue のガイド](../testing/guide-to-e2e-test-failure-issues.md)。
- staging/canary で失敗したスモーク spec はデプロイヤーパイプラインを自動的にブロックし、本番インシデントとして扱われる場合があります。[リグレッションを見つけた場合、次に何をすべきか？](/handbook/engineering/deployments-and-releases/deployments/#i-found-a-regression-what-do-i-do-next)に従ってください。
- **DevEx への緊急エスカレーション**: 重大で横断的な問題では、[`#s_developer_experience`](https://gitlab.enterprise.slack.com/archives/C07TWBRER7H) Slack チャンネルに連絡してください。

### インフラストラクチャと環境のアップグレード

Developer Experience は共有テスト環境を所有し、計画されたアップグレード（インフラストラクチャ、データベース、サービス分解など）の検証について助言できます。所有／要請チームは、自身の変更に対する検証テストの実行と解釈、およびリリース判断に責任を持ちます。アップグレードのテストカバレッジを計画するガイダンスについては、早めに[`#s_developer_experience`](https://gitlab.enterprise.slack.com/archives/C07TWBRER7H)に連絡し、[パイプライントリアージ](/handbook/engineering/testing/pipeline-triage/)ガイドを参照してください。

## Developer Experience サブ部門のインシデント管理オンコールローテーション

EM はインシデントの監視、対応、軽減の責任を共有してください。
Developer Experience サブ部門のオンコールは、GitLab の通常の業務時間外の作業を含みません。週末と[Family and Friends Days](/handbook/company/family-and-friends-day/)も除外されます。
現在のイテレーションでは、インシデント管理活動は各チームメンバーの勤務時間中に行われます。

### 責任

- Engineering Manager は Slack チャンネル `#incidents` に参加していることを確認してください。
- Engineering Manager はインシデント管理チャンネルの監視、追跡、直接支援、委任、そして Developer Experience サブ部門内のインシデントの認知向上を適切に支援してください。
- 現在の DRI はインシデント Issue に明確に記載されているべきです。
- 是正措置が必要な場合、EM は DRI が Issue を作成して ~'corrective action' のラベルを付けていることを確認してください。
- Developer Experience サブ部門の全員がオンコール DRI をサポートし、必要に応じて Zoom コールに参加したりヘルプを提供できるようにしてください。
