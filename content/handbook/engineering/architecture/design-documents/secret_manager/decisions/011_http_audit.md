---
title: 'GitLab Secrets Manager ADR 011: 顧客監査入力へのストリーミング監査イベントの使用'
owning-stage: "~sec::software supply chain security"
toc_hide: true
upstream_path: /handbook/engineering/architecture/design-documents/secret_manager/decisions/011_http_audit/
upstream_sha: 86cfa2bd7d73df5a673fe5ebd33b028d0f540434
translated_at: "2026-04-27T00:00:00Z"
translator: claude
stale: false
lastmod: "2025-10-03T12:26:46+02:00"
---

## コンテキスト

OpenBao は GitLab Rails 形式とは別の独自の監査ログを生成します。.Com や GitLab Dedicated などのホスト型プラットフォームでは、GitLab はシステム全体の整合性を監視するために監査イベントを収集する必要があります。ただし、すべてのプラットフォーム、特にセルフマネージドでは、テナントが独自の目的で監査ログを収集したいと考えます。このドキュメントはそのアプローチを提案します。

OpenBao には現在、3 つのネイティブ監査デバイスがあります：

1. `file`：`stdout` へのストリーミングに使用
2. `socket`：`tcp` または `unix` ソケット経由のストリーミング
3. `syslog`：syslog 経由のログ書き込み

現在、監査サブシステムはプラグイン可能ではありませんが、将来的に調整される可能性があります。現在、任意の監査デバイスが成功すれば良いとされています。監査デバイスがすべて失敗した場合、リクエストは拒否されます。これによりストリーミングが難しくなります。HTTP ストリーミングが唯一の監査デバイスである場合、内部キューを実装しない限り、ネットワークの問題によってリクエストがブロックされる可能性があります。アップストリームの監査[デバイス API](https://github.com/openbao/openbao/blob/293e62223e8617baf33be916a7cc281f7dd1e1e1/audit/audit.go#L51-L52) にはストレージサポートがあるため、HTTP デバイスをオプションとして追加すればキューを実装できます。ただし、スタンバイノードでは使用できないため、キューはデフォルトで非永続的である必要があります。

## 決定

新しい `http` 監査デバイスをアップストリームの OpenBao に提案します。これにより、JSON 監査ログをボディとして直接 POST レスポンスを送信できるようになります。リクエストと一緒に送信するカスタムヘッダーを設定する機能を持ち、[GitLab の Webhook 認証モデル](https://docs.gitlab.com/user/project/integrations/webhooks/#custom-headers)を踏襲します。

この監査デバイスはすべての環境に追加されます。環境（環境変数またはファイル経由）からプロビジョニングされた値を持つカスタムヘッダー `X-GitLab-Token` を使用します。これにより、必要に応じてローテーションできます。

この監査デバイスは、ヘッダーを確認し、テナントを Rails テナントに関連付け、ストリーミング監査イベント API または保存済み監査イベント API のいずれかを介して監査ログを送信する、認証されていない新しい Rails エンドポイントへのリクエストを送信するものとみなします。後者は、[ボリュームに関する議論](https://gitlab.com/gitlab-org/gitlab/-/issues/470461)に従い、控えめに使用されます。

### フォーマット変換

{{% details summary="<strong>OpenBao 監査イベントのサンプル</strong>" %}}
```json
{
  "request": {
    "operation": "read",
    "client_token": "hmac-sha256:<REDACTED>",
    "path": "group_123456/project_123456/<REDACTED>",
    "mount_type": "kv",
    "mount_class": "secret",
    "namespace": {
      "id": "root"
    },
    "mount_point": "group_123456/project_123456/<REDACTED>",
    "remote_address": "<REDACTED>"
  },
  "type": "response",
  "response": {
    "mount_point": "group_123456/project_123456/<REDACTED>",
    "mount_class": "secret",
    "data": {
      "metadata_cas_required": false,
      "versions": {
        "1": {
          "destroyed": false,
          "created_time": "hmac-sha256:<REDACTED>",
          "deletion_time": "hmac-sha256:<REDACTED>"
        }
      },
      "delete_version_after": "hmac-sha256:<REDACTED>",
      "current_version": 1,
      "created_time": "hmac-sha256:<REDACTED>",
      "cas_required": false,
      "current_metadata_version": 0,
      "max_versions": 0,
      "custom_metadata": {
        "branch": "hmac-sha256:<REDACTED>",
        "description": "hmac-sha256:<REDACTED>",
        "environment": "hmac-sha256:<REDACTED>"
      },
      "updated_time": "hmac-sha256:<REDACTED>",
      "oldest_version": 0
    },
    "mount_type": "kv",
  },
  "auth": {
    "token_issue_time": "2010-10-10T10:10:10Z",
    "policies": [
      "default",
      "project_123456/users/direct/group_123456",
      "project_123456/users/direct/user_123456",
      "project_123456/users/roles/123456"
    ],
    "metadata": {
      "role": "project_123456"
    },
    "client_token": "hmac-sha256:<REDACTED>",
    "token_policies": [
      "default",
      "project_123456/users/direct/group_123456",
      "project_123456/users/direct/user_123456",
      "project_123456/users/roles/123456"
    ],
    "policy_results": {
      "allowed": true,
      "granting_policies": [
        {
          "name": "project_123456/users/roles/123456",
          "namespace_id": "root",
          "type": "acl"
        }
      ]
    },
    "token_type": "service",
    "entity_id": "<REDACTED>",
    "display_name": "group_123456-user_jwt-123456",
    "token_ttl": 900
  }
}
```
{{% /details %}}

同等の GitLab 監査イベントスキーマについては、[GitLab ドキュメント](https://docs.gitlab.com/user/compliance/audit_event_schema/)を参照してください。

これは以下のように計算できます：

1. `author_id` は直接トークンポリシーから計算できます（`auth.policies` の `user_<id>` ポリシー）。
2. `created_at` は監査リクエスト受信時刻とすることができ、OpenBao フォーマットにはネイティブには存在しません。
3. `details` は生の OpenBao 監査イベントを使用できます。
4. `entity_id` と `entity_type` は `request.path` から計算でき、プロジェクトまたはグループ識別子を推測し、`target_id` と `target_type` がマッチします。
5. `ip_address` は `request.remote_address` フィールドから計算できます。
6. `event_type` は `request.path` と `request.operation` の組み合わせに基づいて計算できます。パス+操作の異なる組み合わせが異なるイベントになります。

パスの組み合わせを正負にフィルタリングできます：

1. 特定の操作は、`update_secret`、`read_secret` などの一意の `event_type` にマッチします。
2. シークレットのリスト表示など、特定の操作は監査する必要がありません。
3. マッチしない操作は、後でオペレーターが適切に分類できるよう `raw_secret_operation` を持つことができます。

これにより、合理的な量の監査イベントが発行されます。

### 監査イベントの表

| パス | 操作 | イベントタイプ | 保存 |
| :--- | :-------- | :--------- | :----- |
| `*/project_<id>/secrets/kv/data/explicit/*` | `read` | `read_project_secret` | いいえ |
| `*/project_<id>/secrets/kv/data/explicit/*` | `update` | `update_project_secret` | はい |
| `*/project_<id>/secrets/kv/data/explicit/*` | `create` | `create_project_secret` | はい |
| `*/project_<id>/secrets/kv/data/explicit/*` | `delete` | `delete_project_secret` | はい |
| `*/group_<id>/secrets/kv/data/explicit/*` | `read` | `read_group_secret` | いいえ |
| `*/group_<id>/secrets/kv/data/explicit/*` | `update` | `update_group_secret` | はい |
| `*/group_<id>/secrets/kv/data/explicit/*` | `create` | `create_group_secret` | はい |
| `*/group_<id>/secrets/kv/data/explicit/*` | `delete` | `delete_group_secret` | はい |

## 結果

ユーザーは、完全に信頼できる操作のために `/dev/stdout` に書き込まれた監査ログをキャプチャする方法を持つ必要があります。これらはクロステナントであるため、機密データを削除するために HMAC 処理されているにもかかわらず、ある程度の特権を持つもの（たとえばインスタンスオペレーターに限定）とする必要があります。ネットワーク障害によりデータの損失や順序の乱れた監査イベントが発生する可能性があります。監査デバイスが動作し続けており、無限にメモリを消費しないことを確認するために、監査デバイスのメトリクスを監視する必要があります。
