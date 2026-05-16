---
title: "インシデントフォローアップ Issue"
upstream_path: "/handbook/engineering/infrastructure-platforms/incident-management/incident-follow-ups/"
upstream_sha: "0e6f01390a34aeb6706ace17d8d3c50e74e82d0d"
translated_at: "2026-04-28T00:00:00Z"
translator: claude
stale: false
lastmod: "2025-12-15T11:32:24-06:00"
---

このページでは、インシデントからのフォローアップアイテムを管理するプロセスについて説明します。

## 用語

- **フォローアップアイテム**：インシデント中に特定されたアクションアイテム、バグ、または改善点で、インシデント解決後に対処する必要があるもの。
- **インシデントリード**：インシデント対応を調整し、解決後の適切なフォローアップを確保する責任者。
- **是正措置**：将来の同様のインシデントを防止することを目的とするフォローアップアイテム（ラベリングの目的では InfraDev と同義）。
- **InfraDev**：[インフラストラクチャ開発 Issue](/handbook/engineering/workflow/#infradev)（プロダクションプラットフォームに影響するもの）。

## デフォルトの Issue 場所

プライバシー要件とチーム構成に基づいて、インシデントフォローアップ Issue に異なるデフォルトプロジェクトを使用します。

### GitLab.com チーム

- **デフォルト場所**：`gitlab-com/gl-infra/incident-follow-ups`
- このプロジェクトは GitLab.com インシデントからのすべてのフォローアップアイテムの最初のトリアージポイントとして機能します。

### Dedicated チーム

- **デフォルト場所**：`gitlab-com/gl-infra/dedicated-follow-ups`
- このプライベートプロジェクトは顧客固有のインシデントの機密性を保護します。

## インシデントリードの責任

インシデントリードはフォローアップアイテムの管理において以下の責任があります。

1. **インシデント中**：
   - すべてのフォローアップアイテムが適切にドキュメント化されていることを確認する。
   - 可能な場合は各フォローアップアイテムに初期オーナーをアサインする。

2. **インシデント後**：
   - 1営業日以内に自動作成されたすべてのフォローアップ Issue をレビューする。
   - 各 Issue にインシデントからの適切なコンテキストがあることを確認する。
   - 各 Issue が対処するチームの正しいプロジェクトに移動されていることを確認する。
   - チームとグループラベルを含む適切なラベルを適用する。
   - トリアージのために適切なチームメンバーまたはマネージャーに Issue をアサインする。

## Issue トリアージプロセス

### GitLab.com インシデントの場合

1. フォローアップアイテムは `gitlab-com/gl-infra/incident-follow-ups` に自動的に作成されます。
2. 新規作成の代わりに既存の GitLab Issue をインシデントのフォローアップとして添付するには、Issue の URL を Slack チャンネルに貼り付けてください。
3. インシデントリードは各 Issue をレビューします：
   - インフラストラクチャ Issue の場合：適切なインフラストラクチャチームラベルを適用する。
   - アプリケーション Issue の場合：`/move` コマンドを使用して `gitlab-org/gitlab` に移動する。
   - サービス固有の Issue の場合：適切なサービスプロジェクトに移動する（例：Gitaly Issue は `gitlab-org/gitaly`）。

4. 適切なグループ/チームラベルを適用する：
   - エンジニアリングチームの Issue にはグループラベルを含める（例：`group::database`）。
   - インフラストラクチャチームの Issue にはチームラベルを含める（例：`team::database`）。

5. Issue を移動する際は、Issue 上で `infradev` ラベルが維持されていることを確認する。

### Dedicated インシデントの場合

1. フォローアップアイテムは `gitlab-com/gl-infra/dedicated-follow-ups` に自動的に作成されます。
2. 新規作成の代わりに既存の GitLab Issue をインシデントのフォローアップとして添付するには、Issue の URL を Slack チャンネルに貼り付けてください。
3. インシデントリードは各 Issue をレビューします：
   - 適切なチームラベルを適用する。
   - Issue に明確なオーナーがいることを確認する。
   - プライベートリポジトリに顧客固有の情報を保持することで機密性を維持する。

4. Dedicated チームが別の場所を必要とする場合にのみ Issue を移動する（例：Dedicated 組織外のチームが対処する必要がある Issue の場合）。

## 追跡と可視性

フォローアップアイテムがこぼれ落ちないようにするために：

1. **週次トリアージ**：Production Engineering チームはインシデントフォローアップリポジトリ内のすべてのオープン Issue の週次トリアージを実施して、未トリアージのアイテムを識別します。
2. **SaaS 可用性レビュー**：重要なインシデントフォローアップアイテムのステータスは SaaS 可用性ミーティングでレビューされます。
3. **エンジニアリングチーム**：エンジニアリングディレクターとマネージャーは、チームにアサインされた `infradev` Issue を定期的にトリアージすることが期待されます。

## ラベル

以下のラベルは両リポジトリのすべてのインシデントフォローアップ Issue に自動的に適用されます。

- `infradev`：すべてのフォローアップ Issue に適用されます。
- `corrective action`：すべてのフォローアップ Issue に適用されます。

手動で適用すべき追加ラベル：

- チームラベル（例：`team::database`、`team::observability`）
- グループラベル（例：`group::database`、`group::analytics`）

## テンプレートと Issue フォーマット

フォローアップ Issue には以下が含まれます。

1. 元のインシデントへのリンク
2. Post Incident Review（PIR）が作成されている場合はそのリンク
3. インシデントからのコンテキスト
4. 必要なアクションの説明
5. 期日（指定されている場合）

インシデントリードは各 Issue に以下が含まれていることを確認する必要があります。

- 明確な受け入れ基準
- インシデントに詳しくない人でも Issue を理解できる十分なコンテキスト
- インシデントからの関連するログ、メトリクス、またはその他の証拠へのリンク

## 参考資料

- [エンジニアリングワークフロー - InfraDev](/handbook/engineering/workflow/#infradev)
- [プロダクトプロセス - InfraDev](/handbook/product/product-processes/#infradev)
- [インシデント管理 - 是正措置](/handbook/engineering/infrastructure-platforms/incident-management/#corrective-actions)
