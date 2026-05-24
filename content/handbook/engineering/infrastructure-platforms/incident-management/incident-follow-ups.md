---
title: "Incident Follow Up Issues"
upstream_path: /handbook/engineering/infrastructure-platforms/incident-management/incident-follow-ups/
upstream_sha: 877082e5cd4baeabe3d6e802b3b4b1efdb6573f1
translated_at: "2026-05-23T00:00:00Z"
translator: claude
stale: false
lastmod: "2026-05-20T15:25:09-06:00"
---

このページでは、インシデントからのフォローアップ項目を管理するプロセスを記述します。

## 用語

- **Follow Up Item**: インシデント中に特定された、インシデント解決後に対処する必要のあるアクション項目、バグ、改善。
- **Incident Lead**: インシデント対応の調整と、解決後の適切なフォローアップの確保に責任を持つ人。
- **Corrective Action**: インシデントからのフォローアップ項目（バグ、改善、プロセス変更）で、再発の防止や影響の軽減を目的とするもの。すべてのインシデントフォローアップ Issue には、このラベルが自動的に付与されます。
- **InfraDev**: SaaS の可用性と信頼性をサポートするために緊急に優先された注意を必要とするフォローアップ Issue に適用される優先度ラベル。すべての是正措置が infradev Issue というわけではありません。このラベルは、Issue が [InfraDev プロセス](/handbook/engineering/workflow/#infradev) に従って追跡・解決されなければならないことを示します。

## デフォルトの Issue 配置場所

私たちは、プライバシー要件とチーム構造に基づいて、インシデントフォローアップ Issue に異なるデフォルトプロジェクトを使用します:

### GitLab.com Team

- **デフォルトの配置場所**: `gitlab-com/gl-infra/production-engineering`
- このプロジェクトは、GitLab.com インシデントからのすべてのフォローアップ項目の最初のトリアージポイントとして機能します

### Dedicated Team

- **デフォルトの配置場所**: `gitlab-com/gl-infra/dedicated-follow-ups`
- このプライベートプロジェクトは、顧客固有のインシデントの機密性を保持します

## Incident Lead の責務

Incident Lead は、フォローアップ項目の管理について次の責務を持ちます:

1. **インシデント中**:
   - すべてのフォローアップ項目が適切に文書化されることを確実にする
   - 可能な場合は、各フォローアップ項目に初期オーナーをアサインする

2. **インシデント後**:
   - 自動的に作成されたすべてのフォローアップ Issue を 1 営業日以内にレビューする
   - 各 Issue にインシデントからの適切なコンテキストがあることを検証する
   - 各 Issue が、それに対処するチームの正しいプロジェクトに移動されることを確実にする
   - チームおよびグループラベルを含む適切なラベルを適用する
   - トリアージのために、Issue を正しいチームメンバーまたはマネージャーにアサインする

## Issue トリアージプロセス

### GitLab.com インシデントの場合

1. フォローアップ項目は `gitlab-com/gl-infra/production-engineering` に自動的に作成されます
2. 新しい Issue を作成する代わりに、既存の GitLab Issue をフォローアップとしてインシデントに添付するには、その Issue の URL を Slack チャンネルに貼り付けます
3. Incident Lead は各 Issue をレビューし、次を行います:
   - インフラストラクチャの Issue: 適切なインフラストラクチャチームラベルを適用する
   - アプリケーションの Issue: `/move` コマンドを使用して `gitlab-org/gitlab` に移動する
   - サービス固有の Issue: 適切なサービスプロジェクトに移動する（例: Gitaly の Issue の場合は `gitlab-org/gitaly`）
   - Runway の Issue: `gitlab-com/gl-infra/platform/runway/team` に移動する

4. 適切なグループ/チームラベルを適用します:
   - Engineering チームの Issue にはグループラベルを含めるべきです（例: `group::database`）
   - Infrastructure チームの Issue にはチームラベルを含めるべきです（例: `team::database`）

5. Issue を移動する際は、`infradev` ラベルが Issue に維持されることを確実にします

### Dedicated インシデントの場合

1. フォローアップ項目は `gitlab-com/gl-infra/dedicated-follow-ups` に自動的に作成されます
2. 新しい Issue を作成する代わりに、既存の GitLab Issue をフォローアップとしてインシデントに添付するには、その Issue の URL を Slack チャンネルに貼り付けます
3. Incident Lead は各 Issue をレビューし、次を行います:
   - 適切なチームラベルを適用する
   - Issue に明確なオーナーがいることを確実にする
   - 顧客固有の情報をプライベートリポジトリに保持することで機密性を維持する

4. Dedicated チームが別の配置場所を必要とする場合（たとえば、Dedicated 組織外のチームが対処する必要のある Issue の場合）にのみ、Issue を移動します

## 追跡と可視性

フォローアップ項目が見落とされないようにするため:

1. **週次トリアージ**: Production Engineering チームは、トリアージされていない項目を特定するために、インシデントフォローアップリポジトリ内のすべてのオープンな Issue の週次トリアージを実施します
2. **SaaS Availability レビュー**: クリティカルなインシデントフォローアップ項目のステータスは、SaaS Availability ミーティングでレビューされます
3. **Engineering チーム**: Engineering のディレクターとマネージャーは、自分のチームにアサインされた `infradev` Issue を定期的にトリアージすることが期待されます

## ラベル

次のラベルは、両方のリポジトリのすべてのインシデントフォローアップ Issue に自動的に適用されます:

- `infradev`: すべてのフォローアップ Issue に適用
- `corrective action`: すべてのフォローアップ Issue に適用

手動で適用すべき追加のラベル:

- チームラベル（例: `team::database`、`team::observability`）
- グループラベル（例: `group::database`、`group::analytics`）

## テンプレートと Issue の形式

フォローアップ Issue には次が含まれます:

1. 元のインシデントへのリンク
2. Post Incident Review (PIR) が作成されている場合は、それへのリンク
3. インシデントからのコンテキスト
4. 必要なアクションの説明
5. 期日（指定されている場合）

Incident Lead は、各 Issue に次が含まれることを確実にすべきです:

- 明確な受け入れ基準
- インシデントに詳しくない人が Issue を理解するのに十分なコンテキスト
- インシデントからの関連するログ、メトリクス、その他の証拠へのリンク

## 参照

- [Engineering Workflow - InfraDev](/handbook/engineering/workflow/#infradev)
- [Product Processes - InfraDev](/handbook/product/product-processes/#infradev)
- [Incident Management - Corrective Actions](/handbook/engineering/infrastructure-platforms/incident-management/#corrective-actions)
