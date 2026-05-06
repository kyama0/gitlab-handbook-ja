---
title: "シークレット検出有効性チェック トラブルシューティング"
upstream_path: /handbook/engineering/development/sec/secure/secret-detection/runbooks/secret-detection-validity-check-troubleshooting/
upstream_sha: 3480299851f7e2243d4f08b75dac452f89929636
translated_at: "2026-04-28T00:00:00Z"
translator: claude
stale: false
---

### このランブックをいつ使用しますか?

このランブックは、有効性チェック機能に関連する本番環境の問題をトラブルシューティングする際に使用します。

## モニタリング

[有効性チェックモニタリング](secret-detection-validity-check-monitoring) は、信頼性の問題を特定するための推奨ダッシュボードです。
[Sidekiq ダッシュボード](https://dashboards.gitlab.net/d/sidekiq-workers) を補助として使用できます。[ランブック](https://gitlab.com/gitlab-com/runbooks/-/tree/master/docs/sidekiq) を参照してください。

<span id="partner-api-high-error-rate"></span>

## パートナー API の高エラー率

### 症状

[ダッシュボード](https://dashboards.gitlab.net/d/secret-detection-sd-partner-token-verify/93b6ec2) でエラー率が 10% を超えている
（アラート: `SecretDetectionPartnerAPIHighErrorRate`）。

### 調査

1. ダッシュボードの内訳で影響を受けたパートナーを特定します。
1. エラー種別を確認します:
   - `network_error`: 接続の問題
   - `rate_limit`: レート制限超過
   - `response_error`: 無効または解析できないレスポンス
1. パートナーのステータスページを確認します:
   - [AWS](https://status.aws.amazon.com)
   - [GCP](https://status.cloud.google.com)
   - [Postman](https://status.postman.com)
1. 最近のデプロイを確認します:

   ```shell
   git log --oneline -10 ee/lib/security/secret_detection/partner_tokens/
   ```

### 解決策

- パートナーに既知のインシデントがある場合（1 時間未満）: 回復を待ちます
- ネットワークエラーの場合（複数パートナー）: `#production` で SRE と調整します
- レスポンスエラーの場合: API コントラクトの変更の可能性があります — `#g_ast-secret-detection` に Issue を登録してください
- 継続的に発生する場合（6 時間以上）: [パートナーを無効化します](#disable-partners)

<span id="partner-api-high-latency"></span>

## パートナー API の高レイテンシ

### 症状

[ダッシュボード](https://dashboards.gitlab.net/d/secret-detection-sd-partner-token-verify/93b6ec2) で P95 レイテンシが 5 秒を超えている（アラート: `SecretDetectionPartnerAPIHighLatency`）。

### 調査

1. システム全体の問題か、特定パートナーの問題かを確認します。
1. パートナーのステータスページでパフォーマンス低下を確認します。
1. teleport Rails コンソールからパートナー API をテストします:

   ```ruby
   uri = URI('https://sts.amazonaws.com/')
   start = Time.now
   Net::HTTP.start(uri.host, uri.port, use_ssl: true) do |http|
     http.request(Net::HTTP::Get.new(uri.path))
   end
   puts "Latency: #{Time.now - start}s"
   ```

### 解決策

- P95 が 10 秒未満で改善中: 監視を継続します — 問題は自然に解消します
- P95 が 10 秒超で継続中（24 時間以上）: [パートナーを無効化します](#disable-partners)

<span id="frequent-rate-limits"></span>

## レート制限の頻繁なヒット

### 症状

[ダッシュボード](https://dashboards.gitlab.net/d/secret-detection-sd-partner-token-verify/93b6ec2) で 5 分以上持続して 0.1 リクエスト/秒を超えている（アラート: `SecretDetectionPartnerAPIRateLimitHit`）。

### 調査

1. 制限にヒットしているパートナーを特定します。
1. `ee/lib/gitlab/application_rate_limiter.rb` の現在の制限を確認します:

   ```ruby
   partner_aws_api: { threshold: -> { 400 }, interval: 1.second }
   partner_gcp_api: { threshold: -> { 500 }, interval: 1.second }
   partner_postman_api: { threshold: -> { 4 }, interval: 1.second }
   ```

1. teleport を使用して Sidekiq キューの深度を確認します:

   ```ruby
   Sidekiq::Queue.new('security_secret_detection_partner_token_verification').size
   ```

1. バーストパターンを確認します: 大規模なパイプラインまたは複数プロジェクトのスキャン。

### 解決策

1. キューが 1k ジョブ未満: 正常、1 時間以内にクリアされます
1. キューが 1k〜10k ジョブ: キューサイズを監視します — レートリミッターが自動的に処理を絞ります
1. キューが 50k ジョブを超える: 一時的に[パートナーを無効化します](#disable-partners)
1. 継続的なスロットリング（24 時間以上）: レート制限を更新するかパートナーを無効化します

<span id="network-errors-to-partner-apis"></span>

## パートナー API へのネットワークエラー

### 症状

[ダッシュボード](https://dashboards.gitlab.net/d/secret-detection-sd-partner-token-verify/93b6ec2) で 5 分以上 0.5 エラー/秒を超えている（アラート: `SecretDetectionPartnerAPINetworkErrors`）。

### 調査

1. 影響を受けたパートナーを確認します。
1. teleport を使用して Rails コンソールから接続を確認します:

   ```ruby
   # AWS のテスト
   uri = URI('https://sts.amazonaws.com/')
   begin
     Net::HTTP.get_response(uri)
     puts "✓ AWS reachable"
   rescue => e
     puts "✗ AWS unreachable: #{e.message}"
   end

   # GCP のテスト
   uri = URI('https://www.googleapis.com/oauth2/v1/tokeninfo')
   begin
     Net::HTTP.get_response(uri)
     puts "✓ GCP reachable"
   rescue => e
     puts "✗ GCP unreachable: #{e.message}"
   end
   ```

1. DNS を確認します:

   ```shell
   dig sts.amazonaws.com
   ```

1. `#infrastructure` でファイアウォールの変更を確認します。
1. データビュー `pubsub-sidekiq-inf-gprd*` を使用して SSL エラーのログを確認します:

   ```plaintext
   json.class:PartnerTokenVerificationWorker AND "SSL"
   ```

### 解決策

- 単一パートナーが影響を受けている: パートナー側で無効化されている可能性があります。ステータスページを監視してください。
- 複数パートナーが影響を受けている: GitLab のネットワーク問題の可能性があります。SRE と調整してください。
- SSL/TLS エラー: 証明書の有効性を確認してください。CA バンドルの更新が必要な場合があります。

## パートナーの無効化 {#disable-partners}

### 緊急無効化 (GitLab.com)

`ee/lib/security/secret_detection/partner_tokens/registry.rb` を編集します:

```ruby
'AWS' => {
  client_class: ::Security::SecretDetection::PartnerTokens::AwsClient,
  rate_limit_key: :partner_aws_api,
  enabled: false  # ← false に設定
}
```

### インシデント後の再有効化

1. 問題が解決されたことを確認します: パートナーのステータスが正常、ネットワーク OK、エラー率が低下。
1. パートナーを再有効化するコード変更を行います。
1. [ダッシュボード](https://dashboards.gitlab.net/d/secret-detection-sd-partner-token-verify/93b6ec2) を 10 分間監視します: エラー率が 2% 未満、キュー深度が 1k 未満、P95 が 5 秒未満。

<span id="manual-token-validation"></span>

## 手動トークン検証

バックグラウンドジョブを待たずにトークンを検証するには、Rails コンソール（teleport）を使用します:

```ruby
finding = Vulnerabilities::Finding.find(FINDING_ID)
token_type = finding.identifiers.find { |i|
  i['external_type'] == 'gitleaks_rule_id'
}&.dig('external_id')

partner_config = Security::SecretDetection::PartnerTokens::Registry.partner_for(token_type)
client = partner_config[:client_class].new
result = client.verify_token(finding.metadata['raw_source_code_extract'])

puts "Valid: #{result.valid}"
puts "Metadata: #{result.metadata}"
```

## エスカレーション

- チーム: Secret Detection (@gitlab-org/secure/secret-detection)
- Slack: `#g_ast-secret-detection`
- オンコール: SRE の対応状況は `#production` を確認してください
- クイックチェックリスト:
  - [ ] [ダッシュボード](https://dashboards.gitlab.net/d/secret-detection-sd-partner-token-verify/93b6ec2) で問題を確認した
  - [ ] パートナーのステータスページを確認した
  - [ ] 最近のコードデプロイを確認した
  - [ ] エラーのログを確認した
  - [ ] パートナーのオフを試みた（緊急時）
