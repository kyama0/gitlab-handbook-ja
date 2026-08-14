---
title: "シークレット検出有効性チェック：よくある質問"
upstream_path: /handbook/engineering/development/sec/security-factory/secret-detection/runbooks/secret-detection-validity-check-faqs/
upstream_sha: cd448feba02b00726e216b7b3cfed717822b37b6
translated_at: "2026-08-14T07:45:00+09:00"
translator: codex
stale: false
lastmod: "2026-08-13T15:10:33+03:00"
---

### このランブックをいつ使用しますか？

このランブックを使用して、有効性チェック機能を理解し、よくある質問に答え、
基本的な設定の問題をトラブルシューティングします。詳細なトラブルシューティングについては、
[トラブルシューティングガイド](secret-detection-validity-check-troubleshooting)を参照してください。

### 有効性チェックとは何ですか？

有効性チェックは、パートナー API (AWS、GCP、Postman) を呼び出し、GitLab トークンデータベースを確認することで、
トークンのステータスを検証します。ステータスは **Active（有効）**、**Inactive（無効）**、または **Unknown（不明）** です。

## 機能の利用可能性

| オファリング | ティア | ステータス |
|----------|------|--------|
| GitLab.com | Ultimate | GA |
| GitLab Dedicated | Ultimate | GA |
| GitLab Self-Managed | Ultimate | GA |

## 動作の仕組み

GitLab トークンは、レポートの取り込み中にデータベースクエリを通じて即座に確認されます。

パートナートークンは、レート制限付きの Sidekiq ワーカーを通じて非同期で検証されます。
検証が完了するまでトークンは「確認中…」と表示されます（通常は 1 分未満）。

## 機能の有効化

1. **Secure > セキュリティ設定 > シークレット検出** に移動します。
2. **シークレット有効性チェック** をオンにします。

## ステータスの意味

| ステータス | 意味 |
|--------|---------|
| Active | トークンが有効 |
| Inactive | トークンが失効または期限切れ |
| Unknown | 検証に失敗 |

## 手動更新

脆弱性の詳細ページで **トークンのステータスを確認** を選択すると、ステータスをオンデマンドで更新できます。

## トークンのプライバシー

トークン文字列は検証のためにパートナー API に送信されます：

- AWS、GCP、Postman： トークンはパートナーのエンドポイントに送信されます
- GitLab： トークンは GitLab の外には出ません（データベースのみ）

## 機能の無効化

プロジェクトレベル：少なくとも Maintainer ロールを持つユーザーが **セキュリティ設定** で設定をオンにできます。

## ステータスの確認場所

- 脆弱性の詳細ページ：**Validity** バッジの下
- セキュリティダッシュボード：トークンステータスでフィルタリング
- 脆弱性 API： レスポンスに含まれる

## パフォーマンスへの影響

有効性チェックは非同期で実行され、パフォーマンスへの影響は最小限です。GitLab トークンは 100 ms 未満で検証されます。
パートナートークンは 500 ms から 5 秒かかります。

## トークンチェックの頻度

トークンはスキャンごとに自動的に 1 回確認されます。UI からオンデマンドで手動確認することもできます。

## トークンのステータスが Unknown の場合

トークンが `Unknown` と表示される理由はいくつかあります：

- パートナー API がダウンしている
- レート制限に達した
- トークンの形式が無効
- 予期しないレスポンス

詳細については、[シークレット検出有効性チェックのトラブルシューティング](secret-detection-validity-check-troubleshooting)を参照してください。

## 問題の報告

`#g_ast-secret-detection` Slack チャンネル、または
[GitLab トラッカー](https://gitlab.com/gitlab-org/gitlab/-/issues?label_name=group%3A%3Asecret%20detection)に Issue を登録してください。

## 関連ドキュメント

- [モニタリングガイド](secret-detection-validity-check-monitoring.md)
- [トラブルシューティング](secret-detection-validity-check-troubleshooting.md)
- [アーキテクチャ設計ドキュメント](/handbook/engineering/architecture/design-documents/secret_detection_validity_checks/)
