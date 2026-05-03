---
title: "シークレットプッシュ保護 トラブルシューティング"
upstream_path: /handbook/engineering/development/sec/secure/secret-detection/runbooks/secret-push-protection-troubleshooting/
upstream_sha: 3480299851f7e2243d4f08b75dac452f89929636
translated_at: "2026-04-28T00:00:00Z"
translator: claude
stale: false
---

### このランブックをいつ使用しますか?

このランブックは、[シークレットプッシュ保護](https://docs.gitlab.com/ee/user/application_security/secret_detection/secret_push_protection/index.html) 機能に関連する本番環境の問題をトラブルシューティングする際に使用します。

### 関連する設定

| 設定 | 種別 | レベル | 可視性 |
|---------|------|-------|------------|
| `pre_receive_secret_detection_beta_release` | フィーチャーフラグ | インスタンス | 非表示。`ChatOps` 経由でのみ切り替え可能。 |
| `pre_receive_secret_detection_enabled` | データベース設定 | インスタンス | **Dedicated インスタンス** の場合、または **`pre_receive_secret_detection_beta_release` が有効** で、かつ機能が **ライセンス済み（Ultimate）** の場合にのみ表示。 |
| `pre_receive_secret_detection_push_check` | フィーチャーフラグ | プロジェクト | 非表示。`ChatOps` 経由でのみ切り替え可能。 |
| `pre_receive_secret_detection_enabled` | データベース設定 | プロジェクト | **Dedicated インスタンス** の場合、または **`pre_receive_secret_detection_enabled` が有効** で、かつ機能が **ライセンス済み（Ultimate）** の場合にのみ表示。 |

## モニタリング

[シークレットプッシュ保護モニタリング](secret-push-protection-monitoring) は、GitLab.com で有効になっているときに発生する可能性のある信頼性の問題やパフォーマンスの低下を特定・緩和するために機能を監視する際の推奨ダッシュボードです。

[PreReceiveHook メソッドの Gitaly レイテンシダッシュボード](https://dashboards.gitlab.net/d/PqeIQ9Iik/gitaly-feature-latency-detail?from=now-1h&orgId=1&refresh=5m&to=now&var-job=gitaly&var-method=PreReceiveHook) を補助として使用できます。

## 有効化/無効化

## GitLab.com での有効化/無効化

**GitLab.com 全体で機能を無効化する**には、2 つの方法があります。

最初の方法（最も迅速な可能性が高い）は、ChatOps 経由で機能を無効化することです。次のコマンドを使用してください: `/chatops run feature set pre_receive_secret_detection_push_check false`

2 番目の方法は、[ドキュメントに記載されているように](https://docs.gitlab.com/ee/user/application_security/secret_detection/secret_push_protection/index.html#enable-secret-push-protection) pre-receive シークレット検出を無効化することです。管理者アクセスが必要なため、変更アクセスリクエスト（[本番環境の例](https://gitlab.com/gitlab-com/gl-infra/production/-/issues/17907)）が必要です。

これらのどちらも GitLab.com の全ユーザーに対して機能を無効化し、機能が重大なパフォーマンス低下を引き起こしている場合に使用すべきです。

## 有効化/無効化できるその他のプロパティ

### プロジェクトの有効化/無効化

これはプロジェクトの Maintainer 以上のロールを持つユーザーのみが変更でき、プロジェクトを無効化する際の推奨される方法です。

特定のプロジェクトに対して `pre_receive_secret_detection_push_check` フィーチャーフラグがオンの場合、プロジェクトのセキュリティ設定ページからそのプロジェクトのシークレットプッシュ保護を切り替えることができます。
手順は[進行中のドキュメント MR](https://gitlab.com/gitlab-org/gitlab/-/blob/05d3748d29a047946b173af51141137fafb049a8/doc/user/application_security/secret_detection/pre_receive/index.md#enable-pre-receive-secret-detection-for-a-specific-project) に記載されていますが、最終的にはドキュメントに追加される予定です。

フィーチャーフラグと設定の両方がオンの場合、そのプロジェクトへの git プッシュにシークレットが含まれていると停止されます。テストとして、ターミナル、Web IDE などから GitLab PAT 形式のダミー値をプッシュすると拒否されるはずです。

### `pre_receive_secret_detection_push_check` フィーチャーフラグ

`pre_receive_secret_detection_push_check` フィーチャーフラグは、特定のプロジェクトに対してシークレットプッシュ保護を有効化/無効化するために使用されます。

また、プロジェクトのセキュリティ設定にあるシークレットプッシュ保護の設定と組み合わせて使用されます。シークレットプッシュ保護が特定のプロジェクトで機能するためには、フィーチャーフラグと設定の両方がオンである必要があります。

ステータスの確認:

`/chatops run feature get pre_receive_secret_detection_push_check`

プロジェクトに対して有効化:

`/chatops run feature set --project=the-namespace/of-the-project pre_receive_secret_detection_push_check true`

プロジェクトに対して無効化:

`/chatops run feature set --project=the-namespace/of-the-project pre_receive_secret_detection_push_check false`

### `pre_receive_secret_detection_beta_release` フラグ

`pre_receive_secret_detection_beta_release` フラグは、[セキュリティとコンプライアンスの管理セクションにあるシークレット検出セクション](https://gitlab.com/admin/application_settings/security_and_compliance)（<https://gitlab.com/admin> -> 設定 -> セキュリティとコンプライアンス）を有効化するために使用されますが、_**このフラグをオンにしても pre-receive シークレット検出はオンになりません**_。逆に、フラグをオフにしても機能はオフになりません。

`pre_receive_secret_detection_beta_release` フィーチャーフラグのステータス確認:

`/chatops run feature get pre_receive_secret_detection_beta_release`

フィーチャーフラグを有効化:

`/chatops run feature set pre_receive_secret_detection_beta_release true`

フィーチャーフラグを無効化:

`/chatops run feature set pre_receive_secret_detection_beta_release false`

## ブロックされたプッシュの解決とスキップ

[ブロックされたプッシュの解決](https://gitlab.com/gitlab-org/gitlab/-/blob/05d3748d29a047946b173af51141137fafb049a8/doc/user/application_security/secret_detection/pre_receive/index.md#resolve-a-blocked-push)と[シークレット検出のスキップ](https://gitlab.com/gitlab-org/gitlab/-/blob/05d3748d29a047946b173af51141137fafb049a8/doc/user/application_security/secret_detection/pre_receive/index.md#skip-secret-detection)は、どちらも進行中のドキュメント MR に記載されています。

## ログの確認

シークレット検出の監査ログイベントは[こちら](https://docs.gitlab.com/ee/user/compliance/audit_event_types.html#secret-detection)に記載されています。

GitLab.com のログイベントはすべて[こちら](https://log.gprd.gitlab.net/app/discover#/view/31afcbb2-28e9-466f-a6c3-486e869e1ee3?_g=()&_a=h@bd3f1e1)で確認でき、シークレット検出によるブロックされたプッシュイベントのみのログは[こちら](https://log.gprd.gitlab.net/app/discover#/view/db7ba29d-d406-46df-8b43-e6d9c47fbed7)で確認できます。

## SDS を使用したモノリスの負荷削減

シークレット検出サービス (SDS) は、負荷が懸念される場合にモノリスからのシークレットスキャンをオフロードするために、GitLab.com でオプションとして有効化できます。これは [`use_secret_detection_service` 運用フィーチャーフラグ](https://docs.gitlab.com/administration/feature_flags/list/#eeonlyproduct) で制御されます。

### 動作の仕組み

- **フラグ無効時（デフォルト）**: シークレットスキャンはモノリスに組み込まれた SDS gem で実行
- **フラグ有効時**: モノリスは [Runway にデプロイされた SDS](https://gitlab.com/gitlab-org/security-products/secret-detection/secret-detection-service) にスキャンをルーティング

### SDS の有効化

GitLab.com でシークレットプッシュ保護に SDS を有効化するには、ChatOps を使用します:

`/chatops run feature set use_secret_detection_service true`

### SDS の無効化

SDS を無効化してモノリスに組み込まれた gem の使用に戻すには:

`/chatops run feature set use_secret_detection_service false`

### ステータスの確認

フラグの現在のステータスを確認するには:

`/chatops run feature get use_secret_detection_service`
