---
title: "GitLab Secret Detection Validity Checks ADR 002: SDRS 通信への gRPC より REST の使用"
upstream_path: "/handbook/engineering/architecture/design-documents/secret_detection_validity_checks/decisions/002_use_rest_over_grpc_for_sdrs_communication/"
upstream_sha: "86cfa2bd7d73df5a673fe5ebd33b028d0f540434"
translated_at: "2026-04-27T10:00:00Z"
translator: claude
stale: false
lastmod: "2025-08-12T09:08:06-07:00"
---

## 概要

GitLab インスタンスと Secret Detection Response Service（SDRS）間の通信に、gRPC ではなく REST API を実装することを選択しました。この決定は、SDRS の特定の要件に基づいて適切なツールを使用するという判断を優先します。

## コンテキスト

トークン有効性チェックのために GitLab インスタンスと Secret Detection Response Service（SDRS）間の通信プロトコルを設計する際、REST と gRPC のどちらかを選択する必要がありました。

主な考慮事項は以下のとおりです。

- トークン検証リクエストのペイロードサイズと複雑さ
- ストリーミング機能の必要性
- 実装の複雑さとチームの習熟度
- partner サービスとの統合要件
- パフォーマンス最適化の必要性

## 決定事項

gRPC ではなく SDRS 通信に **REST API** を実装します。

## 結果

**メリット:**

- シンプルな実装と統合
- 標準的な HTTP ツールとデバッグ機能が利用可能
- 将来必要な場合の partner 統合が容易

**デメリット:**

- gRPC の組み込みストリーミングやバイナリシリアライゼーションなどの高度な機能を提供しない
- 大量のシナリオでは若干効率が劣る（ただし、私たちのユースケースには関係ない）

## 検討した代替案

**gRPC アプローチ**: gRPC はストリーミング機能とパフォーマンス最適化を提供しますが、これらのメリットは私たちのユースケースには重要ではありません。このサービスは個々のトークンまたは少数のトークン配列を受け入れるだけでよいため、gRPC のストリーミング機能（git diff の送信のようなケースでより価値がある）の恩恵を受けることができません。ペイロードサイズが小さいため、リクエストの最適化は重要な要素ではなく、REST のシンプルさが私たちのニーズに適しています。
